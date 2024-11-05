const express=require("express")
const app=express()
const loginRouter=require("./router/userRouter")
const detialsRouter=require("./router/pageRouter")
const mongoose=require("mongoose")
const cors = require("cors");
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const authMiddleware=require("./middleware/authMiddleware")
const { details } = require("./controller/pageController")
const morgan = require("morgan");
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));



app.use(cors());

app.use(express.json())

app.use("/api/v1/auth",loginRouter)
app.use("/api/v1/details",detialsRouter)



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