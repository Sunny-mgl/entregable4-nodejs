const { validationResult } = require("express-validator")

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        // res.status(400).json({errors: error.array()})
        next({
            status: 400,
            name: 'Validation error',
            message: error.array().map((error) => error.msg)
        //  message: error.array().map((error) => ({msg: error.msg}))
        })
    }

}

module.exports= validateResult