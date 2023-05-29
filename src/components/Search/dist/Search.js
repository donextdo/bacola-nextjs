"use strict";
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
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var image_1 = require("next/image");
var router_1 = require("next/router");
var baseUrl_1 = require("../../../utils/baseUrl");
var axios_1 = require("axios");
exports.SearchItem = function () {
    var _a = react_1.useState(""), query = _a[0], setQuery = _a[1];
    var _b = react_1.useState([]), results = _b[0], setResults = _b[1];
    var _c = react_1.useState(false), isHide = _c[0], setIsHide = _c[1];
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        var search = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, Products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query.trim() === "") {
                            setResults([]);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, axios_1["default"].post(baseUrl_1["default"] + "/products/searchBySocket", {
                                query: query
                            })];
                    case 1:
                        response = _a.sent();
                        Products = response.data;
                        setResults(Products);
                        return [2 /*return*/];
                }
            });
        }); };
        var timeoutId = setTimeout(function () {
            search();
        }, 500);
        return function () {
            clearTimeout(timeoutId);
        };
    }, [query]);
    var handleInputChange = function (e) {
        setQuery(e.target.value);
    };
    var sendView = function (itemId) {
        setIsHide(true);
        router.push("/item-preview/" + itemId);
        setQuery("");
        setIsHide(false);
    };
    return (react_1["default"].createElement("div", { className: "flex flex-col xl:w-[500px] w-full md:w-full lg:w-96 place-content-center relative" },
        react_1["default"].createElement("div", { className: "flex relative w-full" },
            react_1["default"].createElement("input", { type: "text", value: query, onChange: handleInputChange, placeholder: "Search products...", className: "bg-gray-100 rounded-tl rounded-bl min-h-[60px] md:w-full lg-w-full w-1/2 pl-5 text-sm focus:outline-none " }),
            react_1["default"].createElement("div", { className: "bg-gray-100 rounded-br rounded-tr min-h-[60px] min-w-[60px]  flex items-center justify-center hover:cursor-pointer" },
                react_1["default"].createElement(fi_1.FiSearch, { type: "submit", className: "min-h-[36px] min-w-[24px] text-blue-900 " }))),
        results.length > 0 && query !== "" && !isHide && (react_1["default"].createElement("div", { className: "flex flex-col w-full md:w-full" },
            react_1["default"].createElement("ul", { className: "absolute bg-white border-2 border-gray-100 w-full z-50" }, results.map(function (item, index) { return (react_1["default"].createElement("div", { className: "flex flex-row items-center justify-between py-1", key: index },
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("li", { className: "cursor-pointer text-start ml-2 border border-gray-100 py-1" },
                        react_1["default"].createElement(image_1["default"], { width: 40, height: 40, src: item.front, alt: item.title })),
                    react_1["default"].createElement("li", { className: "cursor-pointer text-start ml-2 flex-1 hover:underline text-sm font-medium", onClick: function () { var _a; return sendView((_a = item) === null || _a === void 0 ? void 0 : _a._id); } }, item.title)),
                react_1["default"].createElement("div", { className: "flex flex-col" },
                    react_1["default"].createElement("li", { className: "cursor-pointer text-end text-sm text-gray-400 font-semibold line-through mr-2 text-[14px] font-ff-headings" },
                        "RS ",
                        item.price),
                    react_1["default"].createElement("li", { className: "cursor-pointer text-end text-red-600 text-sm font-semibold mr-2 font-ff-headings" },
                        "Rs",
                        (item.price - item.price * (item.discount / 100)).toFixed(2))))); }))))));
};

//# sourceMappingURL=Search.js.map
