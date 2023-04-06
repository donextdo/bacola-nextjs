"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var sl_1 = require("react-icons/sl");
var fi_1 = require("react-icons/fi");
var react_2 = require("react");
var image_1 = require("next/image");
var react_redux_1 = require("react-redux");
var cartSlice_1 = require("../cart/cartSlice");
var productSlice_1 = require("./productSlice");
exports.ProductCard = function (_a) {
    var product = _a.product;
    var _b = react_2.useState(false), isDiscount = _b[0], setIsdiscount = _b[1];
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (parseInt(product.discount) >= 0) {
            setIsdiscount(true);
        }
    }, []);
    var handleIncrement = function (product) {
        // setQuantity(quantity + 1);
        var newQuantity = (product.quantity || 0) + 1;
        dispatch(cartSlice_1.updateItemQuantity({ itemId: product.id, quantity: newQuantity }));
        dispatch(productSlice_1.updateProductQuantity({ productId: product.id, quantity: newQuantity }));
    };
    var handleDecrement = function (product) {
        // setQuantity(quantity - 1);
        var newQuantity = Math.max((product.quantity || 0) - 1, 0);
        dispatch(cartSlice_1.updateItemQuantity({ itemId: product.id, quantity: newQuantity }));
        dispatch(productSlice_1.updateProductQuantity({ productId: product.id, quantity: newQuantity }));
        if (product.quantity === 1) {
            // dispatch(removeFromCart(id))
            // setIsAddToCart(false)
        }
    };
    var handleaddToCart = function (product) {
        dispatch(cartSlice_1.addItem(product));
        var newQuantity = (product.quantity || 0) + 1;
        dispatch(productSlice_1.updateProductQuantity({ productId: product.id, quantity: newQuantity }));
        console.log(product.id);
    };
    var stars = Array.from({ length: 5 }, function (_, i) { return (react_1["default"].createElement("span", { key: i },
        react_1["default"].createElement(fa_1.FaStar, { className: i < product.rating ? "text-yellow-500" : "text-gray-400" }))); });
    return (react_1["default"].createElement("div", { className: "md:max-w-[212.95px] md:max-h-[370.24px] min-w-[212.95px] min-h-[350.24px] mx-auto bg-white border border-gray-200  overflow-hidden relative group hover:drop-shadow-lg rounded-sm", key: product.id },
        react_1["default"].createElement("div", { className: "absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2" },
            isDiscount && (react_1["default"].createElement("div", { className: " font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center" },
                product.discount != undefined
                    ? product.discount
                    : 0,
                "%")),
            product.isRecommended && (react_1["default"].createElement("div", { className: " font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter" }, "Recommended")),
            product.isOrganic && (react_1["default"].createElement("div", { className: " font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter" }, "organic"))),
        react_1["default"].createElement("div", { className: "max-w-[40px] max-h-[85px] " },
            react_1["default"].createElement("div", { className: "absolute max-w-[24px] max-h-[24px] top-2 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon2" },
                react_1["default"].createElement(sl_1.SlSizeFullscreen, { className: "h-[10px] w-[10px] fill-blue-900 group-hover/icon2:fill-white" })),
            react_1["default"].createElement("div", { className: "absolute max-w-[24px] max-h-[24px] top-9 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon1" }, product.isFavourite ? (react_1["default"].createElement(fa_1.FaHeart, { className: "h-3 w-3 fill-blue-900 group-hover/icon1:fill-white" })) : (react_1["default"].createElement(fi_1.FiHeart, { className: "h-3 w-3 text-blue-900 group-hover/icon1:text-white" })))),
        react_1["default"].createElement("div", { className: " max-h-[172.95px] min-h-[172.95px] min-w-[154.95px] w-full  hover:cursor-pointer my-2 flex items-center justify-center" },
            react_1["default"].createElement(image_1["default"], { width: 172.95, height: 154.95, src: product.image.front, alt: "Man looking at item at a store" })),
        react_1["default"].createElement("div", { className: "mx-5 mb-1 max-h-[155.29px] max-w-[212.95] " },
            react_1["default"].createElement("div", { className: "text-sm font-medium text-black hover:text-indigo-400  capitalize leading-tight hover:cursor-pointer line-clamp-2" }, product.title),
            react_1["default"].createElement("div", { className: "my-1 font-[.6875rem] text-xs pt-2 text-green-600 uppercase font-semibold tracking-[.005em]" }, product.isAvailable ? "In Stock" : "Out of Stock"),
            react_1["default"].createElement("div", { className: "text-xs pt-2 flex flex-row items-center my-1" }, stars),
            react_1["default"].createElement("div", { className: " flex flex-row items-center" },
                isDiscount && (react_1["default"].createElement("span", { className: "text-gray-400 text-sm line-through mr-2 my-1 font-[1.125rem]" },
                    "$",
                    product.price)),
                react_1["default"].createElement("span", { className: "my-1 text-red-700 text-lg font-semibold" }, "$39.99"))),
        react_1["default"].createElement("div", { className: "mx-1 border-black text-black py-2 px-4 mt-1 rounded-full md:invisible group-hover:visible md:group-hover:-translate-y-3 md:group-hover:ease-in transition duration-150" },
            product.quantity < 1 && (react_1["default"].createElement("button", { type: "button", className: " bg-blue-900 text-white min-h-[34px] min-w-[180.8px] rounded-full w-full ", onClick: function () { return handleaddToCart(product); } }, "Add to cart")),
            product.quantity >= 1 && (react_1["default"].createElement("div", { className: "max-h-[34px] w-full flex grid-cols-3 h-10" },
                react_1["default"].createElement("button", { type: "button", className: "px-4 max-h-[34px] border-gray-500 bg-slate-500 rounded-tl-3xl rounded-bl-3xl ", onClick: function () { return handleDecrement(product); } }, "-"),
                react_1["default"].createElement("div", { className: "max-h-[34px] flex items-center justify-center w-full text-center border-y" }, product.quantity || 0),
                react_1["default"].createElement("button", { type: "button", className: "px-4 max-h-[34px] border-gray-500 bg-yellow-500 rounded-br-3xl rounded-tr-3xl ", onClick: function () { return handleIncrement(product); } }, "+"))))));
};
//max-w-md

//# sourceMappingURL=ProductCard.js.map
