const jwt = require('jsonwebtoken');
const secretKey = `c3FIOG9vSGV4VHo4QzAySVg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ`
const accessCredentials = (data) => {
    const dUser = {
        username: data.username,
        uid: data.uid
    };
   return  jwt.sign(dUser, secretKey, {expiresIn: '1h'});
}

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({error: 'No token provided.'});
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({error: 'Failed to authenticate token.'});
        }
        req.username = decoded.username;
        next();
    });
}

module.exports = {
    accessCredentials,
    verifyToken,
}