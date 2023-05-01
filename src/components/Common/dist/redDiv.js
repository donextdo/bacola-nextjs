"use strict";
exports.__esModule = true;
var clock_png_1 = require("../../../assets/home/clock.png");
var delivery_box_png_1 = require("../../../assets/home/delivery-box.png");
var download_png_1 = require("../../../assets/home/download.png");
var image_1 = require("next/image");
var bs_1 = require("react-icons/bs");
var banner_box2_png_1 = require("../../../assets/home/banner-box2.png");
var router_1 = require("next/router");
exports.RedDiv = function () {
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex flex-col rounded-md items-center justify-between mt-9 bg-red-100 p-6 mb-9 cursor-pointer" },
            React.createElement("div", { className: "flex flex-col lg:flex-row items-center justify-center" },
                React.createElement("div", { className: "text-[15px] text-red-600 flex flex-row items-center mb-2 lg:mb-0 lg:mr-4" },
                    "Super discount for your\u00A0",
                    React.createElement("div", { className: "text-red-600 underline font-semibold" }, "first purchase.")),
                React.createElement("div", { className: "flex flex-row items-center lg:w-auto" },
                    React.createElement("div", { className: "uppercase p-2 h-9 flex flex-row rounded-full border border-dashed border-red-500 text-sm w-32 text-red-500 px-4 mr-2" }, "FREE25BAC"),
                    React.createElement("div", { className: "text-xs text-gray-400" }, "Use discount code in checkout!"))))));
};
exports.AdditionalDiv = function () {
    return (React.createElement("div", { className: "border border-gray-300 rounded-md p-3 mt-9 lg:w-[270px]" },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("div", { className: "flex flex-row py-4 items-center" },
                React.createElement(image_1["default"], { src: download_png_1["default"], alt: "clock", className: "w-[35px] h-[30px] ml-1" }),
                React.createElement("div", { className: "px-10 text-xs" }, "Download the Bacola App to your Phone.")),
            React.createElement("hr", null),
            React.createElement("div", { className: "flex flex-row py-4 items-center" },
                React.createElement(image_1["default"], { src: delivery_box_png_1["default"], alt: "clock", className: "w-[28px] h-[28px] ml-2" }),
                React.createElement("div", { className: "px-10 text-xs" }, "Order now so you dont miss the opportunities.")),
            React.createElement("hr", null),
            React.createElement("div", { className: "flex flex-row py-4 items-center" },
                React.createElement(image_1["default"], { src: clock_png_1["default"], alt: "clock", className: "w-[28px] h-[28px] ml-2" }),
                React.createElement("div", { className: "px-10 text-xs" }, "Your order will arrive at your door in 15 minutes.")))));
};
exports.BestSeller = function () {
    var router = router_1.useRouter();
    var goToProduct = function () {
        router.push("./filterProduct");
    };
    return (React.createElement("div", { className: "flex flex-row items-center justify-between mb-9 " },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("div", { className: "uppercase font-semibold text-lg font-ff-headings lg:text-xl" }, "Best Seller"),
            React.createElement("div", { className: "text-xs text-gray-400" }, "Do not miss the current offers until the end of March.")),
        React.createElement("div", { className: " p-2 h-9 flex flex-row rounded-full border border-gray-300 text-sm w-32 text-gray-500 px-4 justify-between cursor-pointer", onClick: goToProduct },
            "View All",
            React.createElement("span", null,
                React.createElement(bs_1.BsArrowRight, { className: "text-lg" })))));
};
exports.NewProduct = function () {
    var router = router_1.useRouter();
    var goToProduct = function () {
        router.push("./filterProduct");
    };
    return (React.createElement("div", { className: "flex flex-row items-center justify-between mb-9 " },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("div", { className: "uppercase font-semibold text-lg lg:text-xl  font-ff-headings" }, "NEW PRODUCTS"),
            React.createElement("div", { className: "text-xs text-gray-400" }, "New products with updated stocks.")),
        React.createElement("div", { className: " p-2 h-9 flex flex-row rounded-full border border-gray-300 text-sm w-32 text-gray-500 px-4 justify-between cursor-pointer", onClick: goToProduct },
            "View All",
            React.createElement("span", null,
                React.createElement(bs_1.BsArrowRight, { className: "text-lg" })))));
};
exports.TakeCare = function () {
    return (React.createElement("div", { className: "container mt-7 relative bg-[#f7efea] w-full h-[340px] flex flex-col items-center rounded-md lg:h-[130px] overflow-hidden cursor-pointer mb-9" },
        React.createElement("div", { className: "lg:flex lg:flex-row lg:items-start lg:w-full justify-between" },
            React.createElement("div", { className: "relative flex flex-col items-start justify-start md:mt-14 lg:ml-10 lg:mt-10 " },
                React.createElement("h1", { className: "text-gray-400 text-sm capitalize" }, "Always Taking Care"),
                React.createElement("h2", { className: "text-gray-500 text-lg font-bold " }, "In store or online your health & safety is our top priority.")),
            React.createElement("div", { className: "mt-auto lg:w-1/4 lg:order-2" },
                React.createElement(image_1["default"], { src: banner_box2_png_1["default"], alt: "banner - Image", className: "mb-0 h-[250px] w-[600px] lg:h-[170px] lg:w-[700px]", style: { objectPosition: "right center" } })))));
};

//# sourceMappingURL=redDiv.js.map
