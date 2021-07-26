let bcrypt = require('bcrypt');

class BCrypt {
    makeHash(data, size = 10) {
        return Promise.resolve(bcrypt.hash(data, size));
    }
    compareHash(data, hashedData) {
        return Promise.resolve(bcrypt.compare(data, hashedData));
    }
}

module.exports = new BCrypt();