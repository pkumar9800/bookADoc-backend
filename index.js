import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./src/config/databaseConnection.js"
import userRouter from "./src/routes/userRoute.js"
import connectCloudinary from "./src/config/cloudinary.js"
import doctorRouter from "./src/routes/docterRoute.js"
import adminRouter from "./src/routes/adminRoute.js"

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Server started on PORT:${port}`))

//endpoints
app.get("/", (req, res) => {
  res.send("API Working")
});

app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)