const express=require("express")
const app=express()
const loginRouter=require("./router/userRouter")
const mongoose=require("mongoose")
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const authMiddleware=require("./middleware/authMiddleware")

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));





app.use(express.json())

app.use("/auth",loginRouter)



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        message: message,
       
    });
});

app.listen(5000,()=>{
    console.log("port : 5000")
})