"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer_top_1 = require("../Footer/Footer-top");
var Header_1 = require("../Header/Header");
var Message_1 = require("../Message/Message");
var Newsletter_1 = require("../NewsLetter/Newsletter");
var TopHeader_1 = require("../TopHeader/TopHeader");
var newNawBar_1 = require("../Navbar/newNawBar");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "" },
        react_1["default"].createElement(Message_1["default"], null),
        react_1["default"].createElement(TopHeader_1["default"], null),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(newNawBar_1["default"], null),
        children,
        react_1["default"].createElement(Newsletter_1["default"], null),
        react_1["default"].createElement(Footer_top_1["default"], null)));
};
exports["default"] = Layout;

//# sourceMappingURL=Layout.js.map
