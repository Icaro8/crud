"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
require("dotenv/config");
var api = axios_1["default"].create({
    baseURL: process.env.BASE_URL
});
