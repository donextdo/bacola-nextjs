"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var sl_1 = require("react-icons/sl");
var fi_1 = require("react-icons/fi");
var image_1 = require("next/image");
var cartItems_1 = require("../../redux/cartItems");
var react_redux_1 = require("react-redux");
var counter_1 = require("@/redux/counter");
var AddCartButton_1 = require("@/redux/AddCartButton");
var router_1 = require("next/router");
exports.CartItem = function (_a) {
    var isRecommended = _a.isRecommended, isDiscount = _a.isDiscount, isOrganic = _a.isOrganic, image = _a.image, title = _a.title, isAvailable = _a.isAvailable, rating = _a.rating, price = _a.price, discount = _a.discount, isFavourite = _a.isFavourite;
    // const [quantity, setQuantity] = useState(1);
    // const [isAddToCart, setIsAddToCart] = useState(false);
    var count = react_redux_1.useSelector(function (state) { return state.counter; }).count;
    var isAddToCart = react_redux_1.useSelector(function (state) { return state.cartbutton.isAddToCart; });
    var dispatch = react_redux_1.useDispatch();
    var router = router_1.useRouter();
    var handleIncrement = function () {
        // setQuantity(quantity + 1);
        dispatch(counter_1.increment());
    };
    var handleDecrement = function () {
        // setQuantity(quantity - 1);
        dispatch(counter_1.decrement());
        if (count === 1) {
            dispatch(AddCartButton_1.removeFromCart());
        }
    };
    var handleaddToCart = function () {
        var item = {
            image: image,
            title: title,
            price: price,
            count: count,
            subtotal: price * count
        };
        console.log(item.subtotal);
        dispatch(AddCartButton_1.addToCart());
        dispatch(cartItems_1.addItem(item));
    };
    var stars = Array.from({ length: 5 }, function (_, i) { return (react_1["default"].createElement("span", { key: i },
        react_1["default"].createElement(fa_1.FaStar, { className: i < rating ? "text-yellow-500" : "text-gray-400" }))); });
    var handleClick = function () {
        router.push("/viewcart");
        var myObject = {
            title: title,
            image: image,
            isRecommended: isRecommended,
            isDiscount: isDiscount,
            isOrganic: isOrganic,
            isAvailable: isAvailable,
            rating: rating,
            price: price,
            discount: discount,
            count: count
        };
        localStorage.setItem("item", JSON.stringify(myObject));
    };
    return (react_1["default"].createElement("div", { className: "md:max-w-[212.95px] md:max-h-[370.24px] min-w-[212.95px] min-h-[350.24px] mx-auto bg-white border border-gray-200  overflow-hidden relative group hover:drop-shadow-lg rounded-sm" },
        react_1["default"].createElement("div", { className: "absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2" },
            isDiscount && (react_1["default"].createElement("div", { className: " font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center" },
                discount != undefined
                    ? discount
                    : 0,
                "%")),
            isRecommended && (react_1["default"].createElement("div", { className: " font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter" }, "Recommended")),
            isOrganic && (react_1["default"].createElement("div", { className: " font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter" }, "organic"))),
        react_1["default"].createElement("div", { className: "max-w-[40px] max-h-[85px] " },
            react_1["default"].createElement("div", { className: "absolute max-w-[24px] max-h-[24px] top-2 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon2" },
                react_1["default"].createElement(sl_1.SlSizeFullscreen, { className: "h-[10px] w-[10px] fill-blue-900 group-hover/icon2:fill-white" })),
            react_1["default"].createElement("div", { className: "absolute max-w-[24px] max-h-[24px] top-9 right-2 bg-white flex items-center justify-center rounded-full h-8 w-8 hover:cursor-pointer drop-shadow-lg md:invisible group-hover:visible md:group-hover:-translate-x-3 md:group-hover:ease-in transition duration-150 hover:bg-blue-900 group/icon1" }, isFavourite ? (react_1["default"].createElement(fa_1.FaHeart, { className: "h-3 w-3 fill-blue-900 group-hover/icon1:fill-white" })) : (react_1["default"].createElement(fi_1.FiHeart, { className: "h-3 w-3 text-blue-900 group-hover/icon1:text-white" })))),
        react_1["default"].createElement("div", { className: " max-h-[172.95px] min-h-[172.95px] min-w-[154.95px] w-full  hover:cursor-pointer my-2 flex items-center justify-center" },
            react_1["default"].createElement(image_1["default"], { width: 172.95, height: 154.95, src: image, alt: "Man looking at item at a store", onClick: handleClick })),
        react_1["default"].createElement("div", { className: "mx-5 mb-1 max-h-[155.29px] max-w-[212.95] " },
            react_1["default"].createElement("div", { className: "text-sm font-medium text-black hover:text-indigo-400  capitalize leading-tight hover:cursor-pointer line-clamp-2", onClick: handleClick }, title),
            react_1["default"].createElement("div", { className: "my-1 font-[.6875rem] text-xs pt-2 text-green-600 uppercase font-semibold tracking-[.005em]" }, isAvailable ? "In Stock" : "Out of Stock"),
            react_1["default"].createElement("div", { className: "text-xs pt-2 flex flex-row items-center my-1" }, stars),
            react_1["default"].createElement("div", { className: " flex flex-row items-center" },
                isDiscount && (react_1["default"].createElement("span", { className: "text-gray-400 text-sm line-through mr-2 my-1 font-[1.125rem]" },
                    "$",
                    price)),
                react_1["default"].createElement("span", { className: "my-1 text-red-700 text-lg font-semibold" }, "$39.99"))),
        react_1["default"].createElement("div", { className: "mx-1 border-black text-black py-2 px-4 mt-1 rounded-full md:invisible group-hover:visible md:group-hover:-translate-y-3 md:group-hover:ease-in transition duration-150" },
            !isAddToCart && (react_1["default"].createElement("button", { type: "button", className: " bg-blue-900 text-white min-h-[34px] min-w-[180.8px] rounded-full w-full ", onClick: handleaddToCart }, "Add to cart")),
            isAddToCart && (react_1["default"].createElement("div", { className: "max-h-[34px] w-full flex grid-cols-3 h-10" },
                react_1["default"].createElement("button", { type: "button", className: "px-4 max-h-[34px] border-gray-500 bg-slate-500 rounded-tl-3xl rounded-bl-3xl ", onClick: handleDecrement }, "-"),
                react_1["default"].createElement("div", { className: "max-h-[34px] flex items-center justify-center w-full text-center border-y" }, count),
                react_1["default"].createElement("button", { type: "button", className: "px-4 max-h-[34px] border-gray-500 bg-yellow-500 rounded-br-3xl rounded-tr-3xl ", onClick: handleIncrement }, "+"))))));
};
//max-w-md

//# sourceMappingURL=CartItem.js.map
