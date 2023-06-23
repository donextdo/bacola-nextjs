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
var router_1 = require("next/router");
var react_1 = require("react");
var baseUrl_1 = require("../../../utils/baseUrl");
var axios_1 = require("axios");
exports.RangeSlider = function (_a) {
    var categoryId = _a.categoryId;
    var _b = react_1.useState(0), minValue = _b[0], setMinValue = _b[1];
    var _c = react_1.useState(50000), maxValue = _c[0], setMaxValue = _c[1];
    var _d = react_1.useState(0), maxPriceValue = _d[0], setMaxPriceValue = _d[1];
    var progressRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (categoryId) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, products, prices, maxPrice, roundedPrice;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios_1["default"](baseUrl_1["default"] + "/productDetails?categoryId=" + categoryId)];
                        case 1:
                            response = _a.sent();
                            products = response.data.products;
                            prices = products.map(function (product) { return product.price; });
                            maxPrice = Math.max.apply(Math, prices);
                            roundedPrice = Math.ceil(maxPrice / 10) * 10;
                            // setMaxPriceValue(roundedPrice);
                            // setMaxValue(maxPriceValue);
                            console.log("Rounded maximum price: ", roundedPrice);
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
    }, []);
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        var query = router.query;
        var minPrice = Number(query.min_price);
        var maxPrice = Number(query.max_price);
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            setMinValue(minPrice);
            setMaxValue(maxPrice);
        }
    }, [router.query]);
    var handleMin = function (e) {
        e.persist();
        e.preventDefault();
        var newMinValue = parseInt(e.target.value);
        if (maxValue - newMinValue >= 0 && maxValue <= 50000) {
            if (newMinValue > parseInt(maxValue.toString())) {
                // Ignore invalid input
            }
            else {
                setMinValue(newMinValue);
                updatePriceQuery(newMinValue, maxValue);
            }
        }
        else {
            if (newMinValue < minValue) {
                setMinValue(newMinValue);
                updatePriceQuery(newMinValue, maxValue);
            }
        }
    };
    var handleMax = function (e) {
        e.persist();
        e.preventDefault();
        var newMaxValue = parseInt(e.target.value);
        if (newMaxValue - minValue >= 0 && newMaxValue <= 50000) {
            if (newMaxValue < parseInt(minValue.toString())) {
                // Ignore invalid input
            }
            else {
                setMaxValue(newMaxValue);
                updatePriceQuery(minValue, newMaxValue);
            }
        }
        else {
            if (newMaxValue > maxValue) {
                setMaxValue(newMaxValue);
                updatePriceQuery(minValue, newMaxValue);
            }
        }
    };
    react_1.useEffect(function () {
        if (progressRef.current) {
            progressRef.current.style.left = (minValue / 50000) * 100 + "%";
            progressRef.current.style.right = (1 - maxValue / 50000) * 100 + "%";
        }
    }, [minValue, maxValue]);
    var updatePriceQuery = function (min, max) {
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, router.query), { min_price: min, max_price: max })
        }, undefined, { scroll: false });
    };
    var setPriceQuery = function () {
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, router.query), { min_price: minValue, max_price: maxValue })
        });
    };
    return (React.createElement("div", { className: "box-border max-h-[85px]  lg:mt-12  " },
        React.createElement("h4", { className: "max-h-[18px]  uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings" }, "filter by price"),
        React.createElement("div", { className: "mb-4 max-h-[47px] " },
            React.createElement("div", { className: "slider relative h-1 rounded-md bg-gray-300" },
                React.createElement("div", { className: "progress absolute h-1 bg-black rounded", ref: progressRef })),
            React.createElement("div", { className: "range-input relative" },
                React.createElement("input", { onChange: handleMin, type: "range", value: minValue, min: 0, step: 10, max: 50000, className: "range-min absolute\r\n             w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none ", placeholder: "Select a minimum value" }),
                React.createElement("input", { onChange: handleMax, type: "range", value: maxValue, min: 0, step: 10, max: 50000, className: "range-max absolute\r\n             w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none", placeholder: "Select a maximum value" }))),
        React.createElement("div", { className: "max-h-[47px] " },
            React.createElement("div", { className: "max-h-[18px]  flex justify-between " },
                React.createElement("div", { className: "text-[.75rem]  mt-1 capitalize text-gray-400" },
                    "price:",
                    React.createElement("span", { className: "text-black font-semibold" },
                        " ",
                        "Rs ",
                        minValue),
                    " -",
                    " ",
                    React.createElement("span", { className: "text-black font-semibold" },
                        " Rs ",
                        maxValue)),
                React.createElement("div", { className: " ml-16 " },
                    React.createElement("button", { type: "button", className: "uppercase text-[.75rem] ml-3 font-semibold", onClick: setPriceQuery }, "filter"))))));
};

//# sourceMappingURL=RangeSlider.js.map
