"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CartPopup_1 = require("../../features/cart/popup-cart/CartPopup");
var Search_1 = require("../Search/Search");
var ai_1 = require("react-icons/ai");
var sl_1 = require("react-icons/sl");
var link_1 = require("next/link");
var Header = function () {
    var _a = react_1.useState(false), cart = _a[0], setCart = _a[1];
    var handleClick = function () {
        // setCart(!cart)
    };
    var hnadleEnter = function () {
        setCart(true);
    };
    var handleLeave = function () {
        setCart(false);
    };
    return (React.createElement("div", { className: "container mx-auto flex items-center justify-between lg:px-40 mt-4" },
        React.createElement("div", { className: "text-4xl font-bold text-[#223994]" },
            React.createElement(link_1["default"], { href: "/" }, "bacola")),
        React.createElement("div", { className: "search-bar" },
            React.createElement(Search_1.SearchItem, null)),
        React.createElement("div", { className: "flex gap-4" },
            React.createElement("div", null,
                React.createElement(link_1["default"], { href: "/account" },
                    React.createElement("button", { className: "border rounded-full p-2" },
                        React.createElement(ai_1.AiOutlineUser, { className: "text-2xl" })))),
            React.createElement("div", { className: "relative", onMouseEnter: hnadleEnter, onMouseLeave: handleLeave },
                React.createElement("button", { className: "border border-[#fff1ee] bg-[#fff1ee] rounded-full p-2", onClick: handleClick },
                    React.createElement(sl_1.SlHandbag, { className: "text-2xl text-[#ea2b0f]" })),
                cart && React.createElement(CartPopup_1["default"], { setCart: setCart })))));
};
exports["default"] = Header;

//# sourceMappingURL=Header.js.map
