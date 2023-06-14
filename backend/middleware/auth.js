const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = async (req, res, next) => {
    const token = req.headers['token'];
    if (!token) return res.json({ message: "Please enter valid token" });
    req.body.userId = jwt.verify(token, process.env.SECRETKEY);
    next()
}