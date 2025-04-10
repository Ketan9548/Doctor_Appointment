import jwt from 'jsonwebtoken'
import 'dotenv/config'

const authAdmin = async (req, res, next) => {
    try {
        const { tokenv } = req.headers
        if (!tokenv) {
            return res.json({ success: false, message: "Not Authorized Login Again" })
        }
        const token_decode = jwt.verify(tokenv, process.env.JWT_SECRET_KEY)

        if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({ success: false, message: "Not Authorized Login Again" })
        }

        next();
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;