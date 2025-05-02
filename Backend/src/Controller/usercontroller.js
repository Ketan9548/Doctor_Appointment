
import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../Models/user.model.js';
import jwt from 'jsonwebtoken'

// strong password validation
const strongPassword = (password) => {
    const minLength = 8;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const digitPattern = /[0-9]/;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
        return { valid: false, message: "Password must be at least 8 characters long." };
    }
    if (!uppercasePattern.test(password)) {
        return { valid: false, message: "Password must contain at least one uppercase letter." };
    }
    if (!lowercasePattern.test(password)) {
        return { valid: false, message: "Password must contain at least one lowercase letter." };
    }
    if (!digitPattern.test(password)) {
        return { valid: false, message: "Password must contain at least one number." };
    }
    if (!specialCharPattern.test(password)) {
        return { valid: false, message: "Password must contain at least one special character." };
    }
    return { valid: true };
}


// API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Missing Details" });
        }

        // Check if email is valid
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Enter valid Email" });
        }


        // Check if email is already registered
        const validation = strongPassword(password);
        if (!validation.valid) {
            return res.status(400).json({ success: false, message: validation.message });
        }

        // Hasing Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword,
        }

        // Save user to database
        const newuser = new userModel(userData);
        const user = await newuser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY)

        res.status(201).json({ success: true, Token: token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// API for user Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);

        // If password is correct, generate JWT token
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY)
            return res.status(200).json({ success: true, Token: token });
        }
        else {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// api get user profile data

const getProfile = async (req, res) => {
    try {
        const {userId} = req.body;
        const userData = await userModel.findById(userId).select('-password')

        if(!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // res.status(200).json({ success: true, UserData: userData })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}


export { registerUser, loginUser, getProfile };