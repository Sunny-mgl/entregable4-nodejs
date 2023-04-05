const { check, param } = require("express-validator");
const validateResult = require("../utils/validations");


const convertatioCreateValidator = [
    check('title')
        .exists()
        .withMessage('The title must be exist')
        .notEmpty()
        .withMessage('The title must not be empty')
        .isString()
        .withMessage('the title must be in string format')
        .isLength({ min: 10, max: 60 })
        .withMessage('the title must have a minimum of 10 characters and a maximum of 60'),
    check('createdBy')
        .exists()
        .withMessage('createdBy must be exist')
        .notEmpty()
        .withMessage('createdBy must not be empty')
        .isInt()
        .withMessage('createdBy must be in integer format'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const convertatioUpdateValidator = [
    param("id").isInt().withMessage("El id debe ser un numero entero"),
    check('type')
    .exists()
    .withMessage('The type must be exist')
    .notEmpty()
    .withMessage('The type must not be empty')
    .isString()
    .withMessage('the type must be in string format'),

(req, res, next) => {
    validateResult(req, res, next)
}
]

module.exports= {
    convertatioCreateValidator,
    convertatioUpdateValidator
}