const { check, param } = require("express-validator");
const validateResult = require("../utils/validations");

const createUserValidator = [
    check('username', 'Error al momento de crear el username')
        .exists()
        .withMessage('El username debe existir')
        .notEmpty()
        .withMessage('El username no puede ir vacio')
        .isString()
        .withMessage('El username debe ir en formato string')
        .isLength({ min: 6, max: 30 })
        .withMessage('El username debe tener un minimo de 6 caracteres'),

    check('email', 'Error con el correo electronico')
        .exists()
        .withMessage('No se encontro propiedad email')
        .notEmpty()
        .withMessage('El email no puede ir vacio')
        .isString()
        .withMessage('El email debe ir en formato string')
        .isLength({ min: 7, max: 50 })
        .withMessage('El email debe tener un minimo de 7 caracteres')
        .isEmail()
        .withMessage('El correo no tiene formato correcto'),

    check('password', 'Error en la contraseña')
        .exists()
        .withMessage('El password debe existir')
        .notEmpty()
        .withMessage('El password no puede ir vacio')
        .isString()
        .withMessage('El password debe ir en formato string')
        .isLength({ min: 7 })
        .withMessage('El password debe tener un minimo de 7 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const updateUserValidator = [
    param("id").isInt().withMessage("El id debe ser un numero entero"),
    check("firstname")
        .isString()
        .exists()
        .withMessage("No se encuentra el nombre para el usuario")
        .notEmpty()
        .withMessage("EL nombre no debe ser un string vacio"),
    check("lastname")
        .isString()
        .exists()
        .withMessage("No se encuentra el nombre para el usuario")
        .notEmpty()
        .withMessage("EL nombre no debe ser un string vacio"),
    // check('username', 'Error al momento de crear el username')
    //     .exists()
    //     .withMessage('El username debe existir')
    //     .notEmpty()
    //     .withMessage('El username no puede ir vacio')
    //     .isString()
    //     .withMessage('El username debe ir en formato string')
    //     .isLength({ min: 6, max: 30 })
    //     .withMessage('El username debe tener un minimo de 6 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next);
    },
]

module.exports = {
    createUserValidator,
    updateUserValidator
}