const jwt = require("jsonwebtoken");
const error = require("../utils/error");

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return next(error("Access denied. No token provided.", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        return next(error("Invalid token.", 401));
    }
};

module.exports = authMiddleware;
