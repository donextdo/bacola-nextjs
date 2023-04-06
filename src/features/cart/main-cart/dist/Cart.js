"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var react_redux_1 = require("react-redux");
var CartCard_1 = require("./CartCard");
var Cart = function () {
    var cartItems = react_redux_1.useSelector(function (state) { return state.cart.items; });
    var _a = react_1.useState("Ship"), selectedValue = _a[0], setSelectedValue = _a[1];
    // let total = 0;
    react_1.useEffect(function () {
        console.log(cartItems);
    });
    var totalAmount = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var subtotal = item.quantity * item.price;
        totalAmount += subtotal;
    }
    var _b = react_1.useState(totalAmount + 5), total = _b[0], setTotal = _b[1];
    function handleClickRadioAdd5() {
        setTotal(total + 5);
    }
    function handleClickRadioSubtract5() {
        setTotal(total - 5);
    }
    return (React.createElement("div", { className: "px-3.5 container mx-auto mt-4 mb-20" },
        React.createElement("div", null,
            React.createElement("section", { className: "flex justify-between h-full" },
                React.createElement("div", { className: "w-full h-full pb-10" },
                    React.createElement("div", { className: "border border-[#e4e5ee] rounded-md space-y-4 py-4 px-4" },
                        React.createElement("p", { className: "text-sm" },
                            "Add ",
                            React.createElement("span", { className: "text-[#ed174a] font-semibold" }, "$15.93"),
                            " ",
                            "to cart and get free shipping!"),
                        React.createElement("hr", { className: "h-2 rounded-md bg-[#ed174a]" })),
                    React.createElement("div", { className: "mt-8" },
                        React.createElement("div", { className: "grid grid-cols-4 sm:grid-cols-12 gap-2 border-b border-[#e4e5ee] pb-3" },
                            React.createElement("div", { className: "text-xs sm:col-span-2" }),
                            React.createElement("div", { className: "col-span-2 sm:col-span-4 text-xs text-[#71778e] font-semibold" }, "Product"),
                            React.createElement("div", { className: "text-xs text-[#71778e] font-semibold hidden sm:block" }, "Price"),
                            React.createElement("div", { className: "text-xs text-[#71778e] font-semibold sm:col-span-2" }, "Quantity"),
                            React.createElement("div", { className: "text-xs text-[#71778e] font-semibold hidden sm:block" }, "Subtotal"),
                            React.createElement("div", null)),
                        React.createElement("div", null, cartItems.map(function (item, index) { return (React.createElement(CartCard_1["default"], { item: item, index: index })); }))),
                    React.createElement("section", { className: "flex justify-between mt-6" },
                        React.createElement("div", { className: "inline-flex gap-2 w-full" },
                            React.createElement("input", { type: "text", className: "h-11 bg-gray-100 rounded-md px-4 text-sm w-full md:w-72", placeholder: "Coupon code" }),
                            React.createElement("button", { className: "bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-40" }, "Apply coupon")),
                        React.createElement("div", null,
                            React.createElement("button", { className: "bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-[104px] hidden md:block" }, "Remove All")))),
                React.createElement("div", null,
                    React.createElement("div", { className: "w-80 border border-[#e4e5ee] p-4 rounded-md h-full hidden xl:block ml-8" },
                        React.createElement("h2", { className: "font-semibold mb-3" }, "CART TOTALS"),
                        React.createElement("hr", null),
                        React.createElement("table", { className: "w-full" },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border-b border-[#e4e5ee] py-3 font-semibold text-[13px]" }, "Subtotal"),
                                    React.createElement("td", { className: "border-b border-[#e4e5ee] py-3 text-[15px] text-right" },
                                        "$",
                                        totalAmount)),
                                React.createElement("tr", null,
                                    React.createElement("td", { rowSpan: 4, className: "text-[13px] font-semibold border-b border-[#e4e5ee]" }, "Shipping"),
                                    React.createElement("td", { className: "text-right text-[13px] py-3" },
                                        "Flat rate:",
                                        " ",
                                        React.createElement("span", { className: "inline-flex text-[#d51243] text-sm gap-2" },
                                            "$5.00",
                                            React.createElement("input", { type: "radio", name: "cart" })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "text-[13px] pb-3 text-right" },
                                        React.createElement("label", { className: "inline-flex -gap-1" },
                                            React.createElement("span", { className: "mr-2" }, "Local pickup"),
                                            React.createElement("input", { type: "radio", name: "cart" })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "text-right text-[12.5px] pb-4" },
                                        "Shipping to ",
                                        React.createElement("span", { className: "font-semibold" }, "AL."))),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "text-right text-[13px] border-b border-[#e4e5ee] text-[#2bbef9] pb-4" }, "Change address")),
                                React.createElement("tr", null,
                                    React.createElement("td", { className: "border-b border-[#e4e5ee] text-[13px] font-semibold pb-4" }, "Total"),
                                    React.createElement("td", { className: "border-b border-[#e4e5ee] text-right font-semibold text-xl py-4" },
                                        "$",
                                        total)))),
                        React.createElement(link_1["default"], { href: "/checkout" },
                            " ",
                            React.createElement("button", { className: "bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4" }, "Proceed to checkout"))))),
            React.createElement("button", { className: "bg-[#233a95] text-white py-2.5 px-4 rounded-md text-xs h-11 w-full text-left mt-2 md:hidden" }, "Remove All"),
            React.createElement("div", { className: "w-full border border-[#e4e5ee] mt-10 p-4 rounded-md xl:hidden" },
                React.createElement("h2", { className: "font-semibold mb-3" }, "CART TOTALS"),
                React.createElement("hr", null),
                React.createElement("table", { className: "w-full" },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border-b border-[#e4e5ee] py-3 font-semibold text-[13px]" }, "Subtotal"),
                            React.createElement("td", { className: "border-b border-[#e4e5ee] py-3 text-[15px] text-right" },
                                "$",
                                totalAmount)),
                        React.createElement("tr", null,
                            React.createElement("td", { rowSpan: 4, className: "text-[13px] font-semibold border-b border-[#e4e5ee]" }, "Shipping"),
                            React.createElement("td", { className: "text-right text-[13px] py-3" },
                                "Flat rate:",
                                " ",
                                React.createElement("span", { className: "inline-flex text-[#d51243] text-sm gap-2" },
                                    "$5.00",
                                    React.createElement("input", { type: "radio", name: "vendor" })))),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "text-[13px] pb-3 text-right" },
                                React.createElement("label", { className: "inline-flex -gap-1" },
                                    React.createElement("span", { className: "mr-2" }, "Local pickup"),
                                    React.createElement("input", { type: "radio", name: "vendor" })))),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "text-right text-[12.5px] pb-4" },
                                "Shipping to ",
                                React.createElement("span", { className: "font-semibold" }, "AL."))),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "text-right text-[13px] border-b border-[#e4e5ee] text-[#2bbef9] pb-4" }, "Change address")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border-b border-[#e4e5ee] text-[13px] font-semibold pb-4" }, "Total"),
                            React.createElement("td", { className: "border-b border-[#e4e5ee] text-right font-semibold text-xl py-4" },
                                "$",
                                total)))),
                React.createElement(link_1["default"], { href: "/checkout" },
                    React.createElement("button", { className: "bg-[#ed174a] text-white py-2.5  rounded-md text-sm h-[50px] w-full text-center mt-4" }, "Proceed to checkout"))))));
};
exports["default"] = Cart;

//# sourceMappingURL=Cart.js.map
