const jwt = require('jsonwebtoken');

class JWT {
    constructor(key) {
        this.JWT_SECRET_KEY = key || process.env.JWT_SECRET_KEY;
    }
    generateJWTToken(dataTobeEncoded, expireDate = '180m') {
        // 86400
        return jwt.sign(dataTobeEncoded, this.JWT_SECRET_KEY, {
            expiresIn: expireDate
        });
    }
    verifyToken(jwtToken) {
        try {
            return jwt.verify(jwtToken, this.JWT_SECRET_KEY);
        } catch (e) {
            return null;
        }
    }
}

module.exports = JWT;