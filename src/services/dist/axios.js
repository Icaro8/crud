"use strict";
exports.__esModule = true;
exports.api = void 0;
var axios_1 = require("axios");
exports.api = axios_1["default"].create({
    baseURL: "http://localhost:3000/"
});
