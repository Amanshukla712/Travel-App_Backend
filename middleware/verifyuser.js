
const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;

    console.log('Received token:', token); // Log the received token

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if (err) {
                console.error('JWT verification error:', err.message); // Log the error message
                return res.status(403).json({ message: "Invalid Token" });
            }

            console.log('Decoded user:', user); // Log the decoded user object
            req.user = user;
            next();
        });
    } else {
        console.warn('Authorization token missing'); // Log a warning if token is missing
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = verifyUser;