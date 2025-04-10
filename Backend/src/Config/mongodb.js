import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URL}/DoctorGuider`)
        console.log(`MongoDB Connected succesfull!!!... `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


export default connectDB;