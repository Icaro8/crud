"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var react_toastify_1 = require("react-toastify");
var routes_1 = require("./routes");
require("./styles/dist/global.css");
require("react-toastify/dist/ReactToastify.css");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(routes_1.RoutesApplication, null),
        react_1["default"].createElement(react_toastify_1.ToastContainer, null))), document.getElementById("root"));
