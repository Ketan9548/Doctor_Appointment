import express from 'express'
import { registerUser, loginUser, getProfile, updateUserprofile, bookAppointment } from '../Controller/usercontroller.js'
import authUser from '../middleware/authUser.js'
import upload from '../middleware/multer.js'


const userRouter = express.Router()


userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

// get the user data
userRouter.get('/get-profile', authUser, getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateUserprofile)

userRouter.post('/book-appointment', authUser, bookAppointment)


export default userRouter 