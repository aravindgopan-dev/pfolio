const error = require("../utils/error");
const UserDB = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        return next(error("Please provide email and password", 400));
    }

    try {
        const user = await UserDB.findOne({ email });
        if (!user) {
            return next(error("Invalid email or password", 401));
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(error("Invalid email or password", 401));
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set cookie options
        const cookieOptions = {
            httpOnly: false,
           
            maxAge: 2 * 24 * 60 * 60 * 1000*1000 // 2 days
        };

        // Set the token as a cookie
        res.cookie('token', token, cookieOptions);

        // Send success response with the username
        res.status(200).json({ message: "Login successful", user: { name: user.name } });
    } catch (err) {
        next(err);
    }
};
const register = async (req, res, next) => {
    console.log("hii")
    console.log(req.body)
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(error("Please provide all required details", 400));
    }

    try {
        const existingUser = await UserDB.findOne({ email });
        if (existingUser) {
            return next(error("User already exists", 400));
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserDB({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        next(err);
    }
};

const logout = (req, res, next) => {
    console.log("here")
    try {
        res.clearCookie('token'); // Clear the cookie containing the token
        res.status(200).json({ message: "Logout successful" });
    } catch (err) {
        next(err);
    }
};

module.exports = { login, register, logout };
