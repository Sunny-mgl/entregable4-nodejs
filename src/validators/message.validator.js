const { check, param } = require("express-validator");
const validateResult = require("../utils/validations");


const typeCreateValidator = [
    check('Content')
        .exists()
        .withMessage('Do not  exist content in the message')
        .notEmpty()
        .withMessage('The content must not be empty'),
    check('userId')
        .isInt()
        .exists()
        .withMessage('Do not  exist content in userId')
        .notEmpty()
        .withMessage('userId must not be empty'),
    check('converId')
        .isInt()
        .exists()
        .withMessage('Do not  exist content in converId')
        .notEmpty()
        .withMessage('userId must not be converId'),
    (req, res, next) => {
        validateResult(req, res, next);
    },
]


const typeUpdateValidator = [
    param('id').isInt().withMessage('The id must be a integer'),
    check('Content')
        .exists()
        .withMessage('Do not  exist content in the message')
        .notEmpty()
        .withMessage('The content must not be empty'),
    check('userId')
        .isInt()
        .exists()
        .withMessage('Do not  exist content in userId')
        .notEmpty()
        .withMessage('userId must not be empty'),
    check('converId')
        .isInt()
        .exists()
        .withMessage('Do not  exist content in converId')
        .notEmpty()
        .withMessage('userId must not be converId'),
    (req, res, next) => {
        validateResult(req, res, next);
    },
]

module.exports= {
    typeCreateValidator,
    typeUpdateValidator
}