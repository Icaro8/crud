"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Header() {
    return (react_1["default"].createElement("header", null,
        react_1["default"].createElement("ul", null,
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Products")),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "Profile")))));
}
exports.Header = Header;
