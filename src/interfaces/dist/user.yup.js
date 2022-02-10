"use strict";
exports.__esModule = true;
exports.schema = void 0;
var yup = require("yup");
exports.schema = yup.object().shape({
    name: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup.string().required()
});
