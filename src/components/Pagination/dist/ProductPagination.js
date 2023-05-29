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
var ProductCard_1 = require("@/features/product/ProductCard");
var baseUrl_1 = require("../../../utils/baseUrl");
var axios_1 = require("axios");
var router_1 = require("next/router");
var react_redux_1 = require("react-redux");
var productSlice_1 = require("@/features/product/productSlice");
exports.ProductPagination = function (_a) {
    var brand = _a.brand, minValue = _a.minValue, maxValue = _a.maxValue, inStock = _a.inStock, onSale = _a.onSale, perpage = _a.perpage, page = _a.page, orderby = _a.orderby, passgrid = _a.passgrid;
    var _b = react_1.useState([]), product = _b[0], setProduct = _b[1];
    var _c = react_1.useState(), isGrid = _c[0], setIsGrid = _c[1];
    var _d = react_1.useState([]), matchWithProduct = _d[0], setmatchWithProduct = _d[1];
    var dispatch = react_redux_1.useDispatch();
    var productsRidux = react_redux_1.useSelector(function (state) { return state.product.products; });
    react_1.useEffect(function () {
        dispatch(productSlice_1.fetchProducts());
        console.log("data data", productsRidux);
    }, [dispatch]);
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (!perpage) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var url, response, products, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            url = baseUrl_1["default"] + "/products?page=" + page + "&sort=" + orderby;
                            if (brand) {
                                url += "&brands=" + brand;
                            }
                            if (minValue && maxValue) {
                                url += "&min_price=" + minValue + "&max_price=" + maxValue;
                            }
                            if (inStock) {
                                url += "&stock_status=" + inStock;
                            }
                            if (onSale) {
                                url += "&on_sale=" + onSale;
                            }
                            return [4 /*yield*/, axios_1["default"].get(url)];
                        case 1:
                            response = _a.sent();
                            products = response.data.products;
                            if (products.length === 0) {
                                console.log("No products found.");
                            }
                            setProduct(products);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
        else if (perpage || orderby) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var url, response, products, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            url = baseUrl_1["default"] + "/products?page=" + page + "&perpage=" + perpage + "&sort=" + orderby;
                            if (brand) {
                                url += "&brands=" + brand;
                            }
                            if (minValue && maxValue) {
                                url += "&min_price=" + minValue + "&max_price=" + maxValue;
                            }
                            if (inStock) {
                                url += "&stock_status=" + inStock;
                            }
                            if (onSale) {
                                url += "&on_sale=" + onSale;
                            }
                            return [4 /*yield*/, axios_1["default"].get(url)];
                        case 1:
                            response = _a.sent();
                            products = response.data.products;
                            if (products.length === 0) {
                                console.log("No products found.");
                            }
                            setProduct(products);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
    }, [page, perpage, orderby, brand, minValue, maxValue, inStock, onSale]);
    react_1.useEffect(function () {
        var getItem = localStorage.getItem("gridType");
        if (!getItem) {
            console.log("empty : ");
            setIsGrid("layoutGrid");
        }
        else {
            setIsGrid(getItem);
        }
        console.log("setIsGrid : ", getItem);
    }, [passgrid]);
    react_1.useEffect(function () {
        var matchedProducts = productsRidux.filter(function (pr) {
            return product.some(function (p) { var _a, _b; return ((_a = p) === null || _a === void 0 ? void 0 : _a._id) === ((_b = pr) === null || _b === void 0 ? void 0 : _b._id); });
        });
        setmatchWithProduct(matchedProducts);
    }, [product, productsRidux]);
    return (react_1["default"].createElement("div", null, matchWithProduct.length != 0 ? (react_1["default"].createElement("div", { className: "mx-auto " },
        react_1["default"].createElement("div", { className: "mx-auto " + (isGrid === "list"
                ? "grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1"
                : isGrid === "fillGrid"
                    ? "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2"
                    : isGrid === "grid3X3Gap"
                        ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2"
                        : isGrid === "layoutGrid"
                            ? "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2"
                            : "") }, matchWithProduct.map(function (product, index) {
            return (react_1["default"].createElement(ProductCard_1.ProductCard, { key: product.id, product: product, isGrid: passgrid }));
        })))) : (react_1["default"].createElement("p", null, "No results found"))));
};

//# sourceMappingURL=ProductPagination.js.map
