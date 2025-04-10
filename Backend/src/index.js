import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import connectCloudinary from './Config/cloudnery.js'
import adminRouter from './routes/adminRoute.js'

const app = express();
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

// middelware 

app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin', adminRouter)

// api end points
app.get('/', (req, res) => {
    res.send('Api working')
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})