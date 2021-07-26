# auth-helper

collection of authentication related helper function

## Installation
Installation is as simple as any other `npm` package:

```
$ npm install auth-helper
```

## Usage
* hash & compare password
* generate & verify token


### Hash data

```js
const { BCrypt } = require('auth-helper');

async function signup() {
    const hashedPassword = await BCrypt.makeHash("password");
    console.log(hashedPassword);
}

signup();

```

### compare hashed data

```js
const { BCrypt } = require('auth-helper');

async function login() {
    const isMatched = await BCrypt.compareHash("password", "$2b$10$P6fFTv5nUlIS57E8Yb8qiOk72FdoVgYmfewEcEGUddrgGwXIg5QfO");
    console.log(isMatched);
}

login();

```

### Generate encoded data

```js
const { JWT } = require('auth-helper');

const jwt = new JWT(process.env.SECRET || "JWT_SECRET_KEY");

async function ResponseAuthTokenFromUser() {
    const authenticateUser = {
        id: 1,
        name: "Samayun Chowdhury",
        role: "ADMIN",
        password: null
    }
    const access_token = jwt.generateJWTToken(authenticateUser, '5m');
    console.log(access_token);
}

ResponseAuthTokenFromUser();

```

### decode encoded data

```js
const { JWT } = require('auth-helper');

const jwt = new JWT(process.env.SECRET || "JWT_SECRET_KEY");

async function verify() {
    const decodedToken = jwt.verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNhbWF5dW4gQ2hvd2RodXJ5Iiwicm9sZSI6IkFETUlOIiwicGFzc3dvcmQiOm51bGwsImlhdCI6MTYyNzMxMDM4MywiZXhwIjoxNjI3MzEwNjgzfQ.cSrzBWDNzQMWFLdXct-7io_YWKfzz98xmiH76hxQZHY");
    console.log(`decodedToken`, decodedToken);
}

verify();

```