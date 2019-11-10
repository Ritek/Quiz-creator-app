const joi = require('@hapi/joi');

// register validation
const registerValidaion = data => {
    const schema = {
        login: joi.string().allow(''),
        name: joi.string().min(2).required(),
        surname: joi.string().min(2).required(),
        email: joi.string().min(6).required(),
        password: joi.string().min(6).required(),
    };
    return joi.validate(data, schema);
}

const loginValidaion = data => {
    //console.log(data);
    const schema = {
        email: joi.string().min(6).required(),
        password: joi.string().min(6).required(),
    };

    return joi.validate(data, schema);
}

module.exports.registerValidaion = registerValidaion;
module.exports.loginValidaion = loginValidaion;