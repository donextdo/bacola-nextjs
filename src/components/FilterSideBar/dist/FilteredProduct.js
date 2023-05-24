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
exports.FilteredProduct = function (_a) {
    var categoryId = _a.categoryId, brand = _a.brand, subcategory = _a.subcategory, minValue = _a.minValue, maxValue = _a.maxValue, inStock = _a.inStock, onSale = _a.onSale, perpage = _a.perpage, page = _a.page, orderby = _a.orderby;
    var _b = react_1.useState([]), product = _b[0], setProduct = _b[1];
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var url, response, products, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = baseUrl_1["default"] + "/productDetails?";
                        if (categoryId) {
                            url += "categoryId=" + categoryId;
                        }
                        if (subcategory) {
                            url += "&subCategories=" + subcategory;
                        }
                        if (brand) {
                            url += "&brands=" + brand;
                        }
                        if (minValue && maxValue) {
                            url += "&min_price=" + minValue + "&max_price=" + maxValue;
                        }
                        if (inStock) {
                            url += "&stock_status=true";
                        }
                        if (onSale) {
                            url += "&on_sale=true";
                        }
                        if (orderby) {
                            url += "&sort=" + orderby;
                        }
                        if (page) {
                            url += "&page=" + page;
                        }
                        if (perpage) {
                            url += "&perpage=" + perpage;
                        }
                        return [4 /*yield*/, axios_1["default"].get(url)];
                    case 1:
                        response = _a.sent();
                        products = response.data.products;
                        console.log("response.data: ", response.data.products);
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
    }, [
        categoryId,
        brand,
        subcategory,
        minValue,
        maxValue,
        inStock,
        onSale,
        page,
        perpage,
        orderby,
    ]);
    react_1.useEffect(function () {
        if (!perpage) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, products, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios_1["default"].get(baseUrl_1["default"] + "/products?sort=" + orderby + "&page=" + page)];
                        case 1:
                            response = _a.sent();
                            console.log("!perpage");
                            products = response.data.products;
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
        else if (perpage || orderby) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, products, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("sssssss 1: ", page);
                            console.log("sssssss 2: ", perpage);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios_1["default"].get(baseUrl_1["default"] + "/products?sort=" + orderby + "&page=" + page + "&perpage=" + perpage)];
                        case 2:
                            response = _a.sent();
                            console.log("perpage || page || orderby");
                            products = response.data.products;
                            console.log("sssssss 3: ", products);
                            if (products.length == 0) {
                                console.log("bhebhd");
                            }
                            setProduct(products);
                            return [3 /*break*/, 4];
                        case 3:
                            error_3 = _a.sent();
                            console.error(error_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
    }, [perpage, page, orderby]);
    return (react_1["default"].createElement("div", null, product.length != 0 ? (react_1["default"].createElement("div", { className: "mx-auto " },
        react_1["default"].createElement("div", { className: "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 " }, product.map(function (product, index) {
            return react_1["default"].createElement(ProductCard_1.ProductCard, { key: product.id, product: product });
        })))) : (react_1["default"].createElement("p", null, "No results found"))));
};

//# sourceMappingURL=FilteredProduct.js.map
