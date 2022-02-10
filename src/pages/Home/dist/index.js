"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var uuid_1 = require("uuid");
var react_toastify_1 = require("react-toastify");
require("./dist/styles.css");
var index_1 = require("../../context/CreateUser/index");
var user_yup_1 = require("../../interfaces/user.yup");
function Home() {
    var CreateUser = index_1.useUser().CreateUser;
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    function submitUser(data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                user_yup_1.schema.isValid(data).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                    var newUser, user, id;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!response) return [3 /*break*/, 2];
                                newUser = {
                                    name: data.name,
                                    email: data.email,
                                    password: data.password,
                                    id: uuid_1.v4()
                                };
                                return [4 /*yield*/, CreateUser(newUser)];
                            case 1:
                                user = _a.sent();
                                id = user.data.id;
                                react_toastify_1.toast.success("Sucesso no login 😍");
                                if (user.status >= 200 && user.status <= 299)
                                    localStorage.setItem("user", id);
                                return [3 /*break*/, 3];
                            case 2:
                                react_toastify_1.toast.error("Todos os campos são nescesarios");
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit(submitUser) },
            react_1["default"].createElement("input", __assign({ type: "text" }, register("name"))),
            react_1["default"].createElement("input", __assign({ type: "email" }, register("email"))),
            react_1["default"].createElement("input", __assign({ type: "text" }, register("password"))),
            react_1["default"].createElement("button", { type: "submit" }, "Enviar"))));
}
exports.Home = Home;
