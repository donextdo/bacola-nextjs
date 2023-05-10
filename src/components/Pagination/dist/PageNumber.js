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
var react_1 = require("react");
var bs_1 = require("react-icons/bs");
var axios_1 = require("axios");
var baseUrl_1 = require("../../../utils/baseUrl");
var router_1 = require("next/router");
exports.PageNumber = function (_a) {
    var perpage = _a.perpage;
    var _b = react_1.useState(1), num = _b[0], setNum = _b[1];
    var _c = react_1.useState(1), cur = _c[0], setCur = _c[1];
    var _d = react_1.useState(0), totalPage = _d[0], setTotalPage = _d[1];
    var _e = react_1.useState(1), currentPage = _e[0], setCurrentPage = _e[1];
    var _f = react_1.useState([]), pageArray = _f[0], setPageArray = _f[1];
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        setCurrentPage(localStorage.getItem("selectedPage")
            ? parseInt(localStorage.getItem("selectedPage"))
            : currentPage);
        if (!perpage) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, products;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios_1["default"].get(baseUrl_1["default"] + "/products?page=" + currentPage)];
                        case 1:
                            response = _a.sent();
                            products = response.data.products;
                            setTotalPage(response.data.totalPages);
                            setCurrentPage(localStorage.getItem("selectedPage")
                                ? parseInt(localStorage.getItem("selectedPage"))
                                : response.data.currentPage);
                            setNum(products.length);
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
        else if (perpage || currentPage) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, products;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios_1["default"].get(baseUrl_1["default"] + "/products?page=" + currentPage + "&perpage=" + perpage)];
                        case 1:
                            response = _a.sent();
                            products = response.data.products;
                            if (products.length == 0) {
                                console.log("ddddddd");
                            }
                            setTotalPage(response.data.totalPages);
                            setCurrentPage(localStorage.getItem("selectedPage")
                                ? parseInt(localStorage.getItem("selectedPage"))
                                : response.data.currentPage);
                            setNum(products.length);
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
    }, [perpage, currentPage]);
    react_1.useEffect(function () {
        localStorage.removeItem("selectedPage");
    }, [perpage]);
    react_1.useEffect(function () {
        var foo = [];
        for (var i = 0; i < totalPage; i++) {
            var data = {
                id: i
            };
            foo.push(data);
        }
        setPageArray(foo);
    }, [totalPage, currentPage]);
    var goToPage = function (page) {
        setCur(page);
        setCurrentPage(page);
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, router.query), { page: page })
        });
        localStorage.setItem("selectedPage", page.toString());
    };
    var goToPreviousPage = function () {
        currentPage > 1 && setCurrentPage(currentPage - 1);
    };
    var goToNextPage = function () {
        currentPage < totalPage && setCurrentPage(currentPage + 1);
    };
    return (React.createElement("div", { className: "mt-8 flex justify-center items-center flex-wrap pagination-container " },
        React.createElement("div", { className: "flex bg-white font-[Poppins]" },
            React.createElement("button", { onClick: goToPreviousPage, className: "h-12 hover:text-white " },
                React.createElement(bs_1.BsArrowLeft, { className: " text-gray-500 mr-3 group-hover:text-[#2bbef9] flex justify-center  mt-0" })),
            pageArray.map(function (pg, i) { return (React.createElement("button", { key: i, type: "button", value: pg.id + 1, onClick: function () { return goToPage(pg.id + 1); }, className: "h-10 mt-1 m-0 w-10 rounded-full " + (currentPage === pg.id + 1
                    ? "bg-cyan-400 text-white"
                    : "text-gray-500 hover:bg-gray-100"), style: { marginLeft: "" } }, pg.id + 1)); }),
            React.createElement("button", { onClick: goToNextPage, className: "h-12 hover:text-white" },
                React.createElement(bs_1.BsArrowRight, { className: " text-gray-500 ml-3 group-hover:text-[#2bbef9]  " })))));
};

//# sourceMappingURL=PageNumber.js.map
