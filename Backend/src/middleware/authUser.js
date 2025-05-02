import jwt from 'jsonwebtoken'
import 'dotenv/config'

// user Authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { utoken } = req.headers
        if (!utoken) {
            return res.json({ success: false, message: "Not Authorized Login Again" })
        }
        const token_decode = jwt.verify(utoken, process.env.JWT_SECRET_KEY);

        // if (token_decode) {
        //     res.json({ success: true, message: token_decode.id })
        //     return;
        // }

        req.body.userId = token_decode.id;
        if(req.body.userId) {
            res.json({ success: true, message: req.body.userId })
            return;
        }
        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export default authUser;