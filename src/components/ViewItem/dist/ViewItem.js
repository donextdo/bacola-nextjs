"use strict";
exports.__esModule = true;
var fa_1 = require("react-icons/fa");
var image_1 = require("next/image");
var react_1 = require("react");
var fa_2 = require("react-icons/fa");
var hi_1 = require("react-icons/hi");
var gi_1 = require("react-icons/gi");
var tb_1 = require("react-icons/tb");
var bs_1 = require("react-icons/bs");
var Description_1 = require("./Details/Description");
var AdditionalInformation_1 = require("./Details/AdditionalInformation");
var Review_1 = require("./Details/Review");
exports.ViewItem = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var _p = react_1.useState(1), newCount = _p[0], setNewCount = _p[1];
    var _q = react_1.useState(false), isClick = _q[0], setIsClick = _q[1];
    var _r = react_1.useState(null), myObject = _r[0], setMyObject = _r[1];
    var _s = react_1.useState(1), isColor = _s[0], setIsColor = _s[1];
    react_1.useEffect(function () {
        var storedObject = localStorage.getItem("item");
        if (storedObject) {
            setMyObject(JSON.parse(storedObject));
        }
    }, [newCount]);
    var increment = function () {
        setIsClick(true);
        setNewCount(newCount + 1);
    };
    var dicrement = function () {
        setIsClick(true);
        setNewCount(newCount - 1);
        if (newCount == 1) {
            setNewCount(1);
        }
    };
    var stars = Array.from({ length: 5 }, function (_, i) {
        var _a;
        return (React.createElement("span", { key: i },
            React.createElement(fa_1.FaStar, { className: i < ((_a = myObject) === null || _a === void 0 ? void 0 : _a.rating) ? "text-yellow-500" : "text-gray-400" })));
    });
    var handleChange = function (id) {
        setIsColor(id);
    };
    return (React.createElement("div", { className: "container mx-auto m-8 p-6" },
        React.createElement("div", { className: " bg-white drop-shadow-2xl rounded-md" },
            React.createElement("div", { className: "min-h-[67.8px] max-w-[757px] mb-[1.875rem]" },
                React.createElement("h1", { className: "min-h-[28.8px] max-w-[757px] capitalize text-[1.5rem] font-semibold" }, (_a = myObject) === null || _a === void 0 ? void 0 : _a.title),
                React.createElement("div", { className: "flex flex-row min-h-[24px] max-w-[757px] bg-white text-[0.75rem] " },
                    React.createElement("span", { className: "text-gray-400 " }, "Brands: "),
                    React.createElement("span", { className: "ml-1" }, " Welch's"),
                    React.createElement("div", { className: "text-gray-400 mx-3" }, "|"),
                    React.createElement("span", { className: "text-gray-400 " },
                        React.createElement("div", { className: "flex flex-row max-h-[18px] max-w-[130.49px] items-center justify-center" }, stars)),
                    React.createElement("span", { className: "ml-1" },
                        React.createElement("div", { className: "uppercase  text-gray-400 font-semibold ml-2 text-[11px] flex items-center justify-center" }, "1 review")),
                    React.createElement("div", { className: "text-gray-400 mx-3" }, "|"),
                    React.createElement("span", { className: "text-gray-400 " }, "SKU: "),
                    React.createElement("span", { className: "ml-1" }, "ZU49VOR"))),
            React.createElement("div", { className: "flex flex-wrap min-h-[579.2px] lg:min-w-[757px] md:min-w-[757px]" },
                React.createElement("div", { className: "lg:col-span-5 lg:w-1/3 md:w-1/2" },
                    React.createElement("div", { className: "relative  max-h-[579.2px] max-w-[466.66px] " },
                        React.createElement("div", { className: "absolute max-w-[88.41px] max-h-[49px] flex flex-col items-start gap-1 p-2" },
                            ((_b = myObject) === null || _b === void 0 ? void 0 : _b.isDiscount) && (React.createElement("div", { className: " font-semibold max-w-[45.39px] max-h-[24px] px-4 py-1 bg-sky-400 text-white rounded text-[10px] flex items-center justify-center" },
                                ((_c = myObject) === null || _c === void 0 ? void 0 : _c.discount) != undefined ? (_d = myObject) === null || _d === void 0 ? void 0 : _d.discount : 0,
                                "%")),
                            ((_e = myObject) === null || _e === void 0 ? void 0 : _e.isRecommended) && (React.createElement("div", { className: " font-semibold px-2 py-1 bg-gray-500 text-white rounded text-[10px] flex items-center justify-center uppercase tracking-tighter" }, "Recommended")),
                            ((_f = myObject) === null || _f === void 0 ? void 0 : _f.isOrganic) && (React.createElement("div", { className: " font-semibold px-2 py-1 bg-emerald-100 text-green-600 rounded-full text-[10px] flex items-center justify-center uppercase tracking-tighter" }, "organic"))),
                        React.createElement("div", { className: "hover:cursor-pointer flex items-center justify-center px-12 " },
                            React.createElement(image_1["default"], { width: 390, height: 436, src: (_g = myObject) === null || _g === void 0 ? void 0 : _g.image, alt: "Man looking at item at a store" })),
                        React.createElement("div", { className: "flex items-center justify-center row min-h-[63px] max-w-[421.2px] md:min-h-[67px] md:max-w-[444.66px]" },
                            React.createElement("div", { className: "flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]  border border-gray-400 mr-2 hover:cursor-pointer" },
                                React.createElement(image_1["default"], { width: 67, height: 67, src: (_h = myObject) === null || _h === void 0 ? void 0 : _h.image, alt: "Man looking at item at a store" })),
                            React.createElement("div", { className: "flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 mr-2 hover:cursor-pointer" },
                                React.createElement(image_1["default"], { width: 67, height: 67, src: (_j = myObject) === null || _j === void 0 ? void 0 : _j.sideimage, alt: "Man looking at item at a store" })),
                            React.createElement("div", { className: "flex items-center justify-center min-w-[67px] min-h-[67px] lg:min-w-[67px] lg:min-h-[67px] md:min-w-[94.4px] md:min-h-[94.4px]   border border-gray-400 hover:cursor-pointer" },
                                React.createElement(image_1["default"], { width: 67, height: 67, src: (_k = myObject) === null || _k === void 0 ? void 0 : _k.backside, alt: "Man looking at item at a store" }))))),
                React.createElement("div", { className: "lg:col-span-7 lg:w-2/3 md:w-1/2 justify-end" },
                    React.createElement("div", { className: "grid lg:grid-cols-2 grid-cols-1 min-h-[579.2px] lg:min-w-[350.66px] px-6 justify-end" },
                        React.createElement("div", { className: "min-h-[579.2px] max-w-full " },
                            React.createElement("div", { className: " flex flex-row mt-8 md:mt-0 lg:mt-0" },
                                React.createElement("span", { className: "text-gray-400 line-through mr-2 my-1 font-[1.125rem] flex items-center justify-center" }, (_l = myObject) === null || _l === void 0 ? void 0 : _l.price),
                                React.createElement("span", { className: "my-1 text-red-700 text-[1.625rem] font-semibold" }, "$7.25")),
                            ((_m = myObject) === null || _m === void 0 ? void 0 : _m.isAvailable) ? (React.createElement("div", { className: "font-medium py-2 px-2 mt-2 max-h-[26px] max-w-[68.35px] bg-emerald-100 text-green-600 rounded-full text-[.75rem] flex items-center justify-center uppercase tracking-tighter" }, "In Stock")) : (React.createElement("div", { className: "font-medium py-2 px-2 mt-2 max-h-[26px] w-[100px] bg-red-100 text-red-600 rounded-full text-[.75rem] flex items-center justify-center uppercase tracking-tighter" }, "Out of Stock")),
                            React.createElement("div", { className: "mt-6 text-[.8125rem]" },
                                React.createElement("p", { className: " " }, "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent")),
                            React.createElement("div", { className: " fixed md:visible w-full lg:min-h-[44px] md:relative md:flex md:flex-row md:w-auto lg:max-w-[130px] md:min-h-[44px] md:max-w-[130px] mt-10 flex flex-row" },
                                React.createElement("div", { className: " w-full flex grid-cols-3 min-h-[44px] min-w-[130px]" },
                                    React.createElement("button", { type: "button", className: "hover:bg-yellow-400 px-4 border-gray-500 bg-gray-300 text-[25px]  rounded-full font-medium", onClick: dicrement }, "-"),
                                    isClick ? (React.createElement("div", { className: " flex items-center justify-center w-full text-center " }, newCount)) : (React.createElement("div", { className: " flex items-center justify-center w-full text-center " }, (_o = myObject) === null || _o === void 0 ? void 0 : _o.count)),
                                    React.createElement("button", { type: "button", className: "px-4 hover:bg-yellow-400 border-gray-500 bg-gray-300  text-[20px]   rounded-full  font-medium", onClick: increment }, "+")),
                                React.createElement("button", { type: "button", className: " bg-blue-900 text-white min-h-[34px] min-w-[160.8px] rounded-full w-full ml-4" }, "Add to cart")),
                            React.createElement("div", { className: "flex flex-row mt-10  " },
                                React.createElement("div", { className: "max-h-[33px] max-w-[135px] bg-white border border-gray-600 rounded-[2.0625rem] hover:cursor-pointer" },
                                    React.createElement("div", { className: "flex flex-row px-3 py-2" },
                                        React.createElement(fa_2.FaHeart, { className: "h-[15px] w-[15px] text-gray-500" }),
                                        React.createElement("span", { className: "text-[10.5px] ml-2 tracking-[-0.05em] text-gray-500 font-semibold uppercase" }, "ADD TO WISHLIST"))),
                                React.createElement("div", { className: "ml-4 flex flex-row items-center justify-center" },
                                    React.createElement("button", { type: "button", className: "flex flex-row " },
                                        React.createElement(tb_1.TbArrowsDownUp, { className: "h-[15px] w-[15px] text-gray-500" }),
                                        React.createElement("span", { className: "text-[11px] ml-2 tracking-[-0.05em] text-gray-500 font-semibold uppercase" }, "compare")))),
                            React.createElement("div", { className: "max-h-[66px] max-w-[113.66px] mt-6" },
                                React.createElement("div", { className: "flex flex-row text-[.75rem] place-items-start mb-1" },
                                    React.createElement("div", { className: "mr-2" },
                                        React.createElement(bs_1.BsCheckLg, { className: "h-[15px] w-[15px] text-green-600 stroke-[1px]" })),
                                    React.createElement("div", { className: "" },
                                        "Type: ",
                                        React.createElement("span", { className: "" }, "Organic"))),
                                React.createElement("div", { className: "flex flex-row text-[.75rem] place-items-start mb-1" },
                                    React.createElement("div", { className: "mr-2 " },
                                        React.createElement(bs_1.BsCheckLg, { className: "h-[15px] w-[15px] text-green-600 stroke-[1px]" })),
                                    React.createElement("div", { className: "" },
                                        "MFG: ",
                                        React.createElement("span", null, "June 4.21"))),
                                React.createElement("div", { className: "flex flex-row text-[.75rem] place-items-start mb-1" },
                                    React.createElement("div", { className: "mr-2" },
                                        React.createElement(bs_1.BsCheckLg, { className: "h-[15px] w-[15px] text-green-600 stroke-[1px]" })),
                                    React.createElement("div", { className: "" },
                                        "Type: ",
                                        React.createElement("span", { className: "" }, "30 days")))),
                            React.createElement("hr", { className: "max-w-[330px] mt-6" }),
                            React.createElement("div", { className: "mt-6 max-h-[72.8px] max-w-[308.33px]" },
                                React.createElement("div", { className: "flex flex-row" },
                                    React.createElement("span", { className: "text-gray-400 text-[.8125rem] capitalize" },
                                        "Category:",
                                        React.createElement("a", { href: "", rel: "tag", className: "ml-2 text-gray-600 text-[.8125rem] capitalize" }, "Meats & Seafood"))),
                                React.createElement("div", { className: "flex flex-row" },
                                    React.createElement("span", { className: "text-gray-400 text-[.8125rem] capitalize" },
                                        "Tags:",
                                        React.createElement("a", { href: "", rel: "tag", className: "ml-2 text-gray-600 text-[.8125rem] capitalize" }, "chicken,"),
                                        React.createElement("a", { href: "", rel: "tag", className: "ml-1 text-gray-600 text-[.8125rem] capitalize" }, "natural,"),
                                        React.createElement("a", { href: "", rel: "tag", className: "ml-1 text-gray-600 text-[.8125rem] capitalize" }, "organic"))),
                                React.createElement("div", { className: "flex flex-row max-h-[34px] max-w-[229px] mt-6" },
                                    React.createElement("div", { className: "grid lg:grid-cols-6 " },
                                        React.createElement("a", { href: "" },
                                            React.createElement("div", { className: "h-[34px] w-[34px] rounded-full bg-blue-700 flex items-center justify-center" },
                                                React.createElement(fa_2.FaFacebookF, { className: "text-white" })))),
                                    React.createElement("div", { className: "grid lg:grid-cols-6 ml-1" },
                                        React.createElement("a", { href: "" },
                                            React.createElement("div", { className: "h-[34px] w-[34px] rounded-full bg-cyan-500 flex items-center justify-center" },
                                                React.createElement(fa_2.FaTwitter, { className: "text-white" })))),
                                    React.createElement("div", { className: "grid lg:grid-cols-6 ml-1" },
                                        React.createElement("a", { href: "" },
                                            React.createElement("div", { className: "h-[34px] w-[34px] rounded-full bg-red-600 flex items-center justify-center" },
                                                React.createElement(fa_2.FaPinterest, { className: "text-white" })))),
                                    React.createElement("div", { className: "grid lg:grid-cols-6 ml-1" },
                                        React.createElement("a", { href: "" },
                                            React.createElement("div", { className: "h-[34px] w-[34px] rounded-full bg-cyan-700 flex items-center justify-center" },
                                                React.createElement(fa_2.FaLinkedin, { className: "text-white" })))),
                                    React.createElement("div", { className: "grid lg:grid-cols-6 ml-1" },
                                        React.createElement("a", { href: "" },
                                            React.createElement("div", { className: "h-[34px] w-[34px] rounded-full bg-orange-600 flex items-center justify-center" },
                                                React.createElement(fa_2.FaReddit, { className: "text-white" })))),
                                    React.createElement("div", { className: "grid lg:grid-cols-6 ml-1" },
                                        React.createElement("a", { href: "" },
                                            React.createElement("div", { className: "h-[34px] w-[34px] rounded-full bg-green-500 flex items-center justify-center" },
                                                React.createElement(fa_2.FaWhatsapp, { className: "text-white" }))))))),
                        React.createElement("div", { className: "max-h-[260px] max-w-[413.2px] lg:ml-4 py-3 bg-pink-400 justify-items-center justify-center" },
                            React.createElement("div", { className: "flex flex-row items-center justify-center max-h-[38px] max-w-full lg:min-w-[260px] rounded  bg-red-100 ml-4 text-[.8125rem] p-6 text-red-800" }, "Covid-19 Info: We keep delivering."),
                            React.createElement("div", { className: "lg:min-h-[228px] lg:min-w-[260px] min-h-[210px] max-w-[413.2px] rounded  bg-gray-100 ml-4 text-[.8125rem] p-6 mt-4" },
                                React.createElement("div", { className: "flex flex-row place-items-center" },
                                    React.createElement("div", { className: "mr-4" },
                                        React.createElement(fa_2.FaShippingFast, { className: "min-w-[30px] min-h-[20px]" })),
                                    React.createElement("div", null, "Free Shipping apply to all orders over $100")),
                                React.createElement("div", { className: "flex flex-row place-items-center mt-6" },
                                    React.createElement("div", { className: "mr-4" },
                                        React.createElement(gi_1.GiMedicinePills, { className: "min-w-[30px] min-h-[20px]" })),
                                    React.createElement("div", null, "Guranteed 100% Organic from natural farmas")),
                                React.createElement("div", { className: "flex flex-row place-items-center mt-6" },
                                    React.createElement("div", { className: "mr-4" },
                                        React.createElement(hi_1.HiOutlineCurrencyDollar, { className: "min-w-[30px] min-h-[20px] " })),
                                    React.createElement("div", null, "1 Day Returns if you change your mind")))))))),
        React.createElement("div", { className: "bg-white drop-shadow-2xl rounded-md mt-10 pb-5" },
            React.createElement("div", { className: " flex space-x-8 text-left text-gray-400 py-5 px-6" },
                React.createElement("button", { className: "   " + (isColor === 1 ? "text-black" : "text-[#c2c2d3]"), onClick: function () { return handleChange(1); } }, "DESCRIPTION"),
                React.createElement("button", { className: "  " + (isColor === 2 ? "text-black" : "text-[#c2c2d3]"), onClick: function () { return handleChange(2); } }, "ADDITIONAL INFORMATION"),
                React.createElement("button", { className: "   " + (isColor === 3 ? "text-black" : "text-[#c2c2d3]"), onClick: function () { return handleChange(3); } }, "REVIEW")),
            React.createElement("hr", null),
            React.createElement("div", { className: "mt-4 px-6" }, isColor === 1 ? (React.createElement(Description_1["default"], null)) : isColor === 2 ? (React.createElement(AdditionalInformation_1["default"], null)) : (React.createElement(Review_1["default"], null))))));
};

//# sourceMappingURL=ViewItem.js.map
