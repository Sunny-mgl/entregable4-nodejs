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
        .isLength({ min: 20, max: 60 })
        .withMessage('the title must have a minimum of 20 characters and a maximum of 60'),
    check('types')
        .exists()
        .withMessage('The types must be exist')
        .notEmpty()
        .withMessage('The types must not be empty')
        .isInt()
        .withMessage('The types must be in integer format'),
    check('newConversat')
        .exists()
        .withMessage('The newConversat must be exist')
        .notEmpty()
        .withMessage('The newConversat must not be empty')
        .isInt()
        .withMessage('The newConversat must be in integer format'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const convertatioUpdateValidator = [
    param("id").isInt().withMessage("El id debe ser un numero entero"),
    check('title')
    .exists()
    .withMessage('The title must be exist')
    .notEmpty()
    .withMessage('The title must not be empty')
    .isString()
    .withMessage('the title must be in string format')
    .isLength({ min: 20, max: 60 })
    .withMessage('the title must have a minimum of 20 characters and a maximum of 60'),
check('types')
    .exists()
    .withMessage('The types must be exist')
    .notEmpty()
    .withMessage('The types must not be empty')
    .isInt()
    .withMessage('The types must be in integer format'),
check('newConversat')
    .exists()
    .withMessage('The newConversat must be exist')
    .notEmpty()
    .withMessage('The newConversat must not be empty')
    .isInt()
    .withMessage('The newConversat must be in integer format'),
(req, res, next) => {
    validateResult(req, res, next)
}
]

module.exports= {
    convertatioCreateValidator,
    convertatioUpdateValidator
}