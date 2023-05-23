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
var axios_1 = require("axios");
var baseUrl_1 = require("../../../utils/baseUrl");
var router_1 = require("next/router");
var react_redux_1 = require("react-redux");
var Brands = function (_a) {
    var categoryId = _a.categoryId;
    var _b = react_1.useState([]), brand = _b[0], setBrand = _b[1];
    var _c = react_1.useState(false), isEmpty = _c[0], setIsEmpty = _c[1];
    var _d = react_1.useState({}), checkedBrands = _d[0], setCheckedBrands = _d[1];
    var _e = react_1.useState([]), brandPage = _e[0], setBrandPage = _e[1];
    var router = router_1.useRouter();
    var products = react_redux_1.useSelector(function (state) { return state.product.products; });
    react_1.useEffect(function () {
        setCheckedBrands([]);
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get(baseUrl_1["default"] + "/products/" + categoryId)];
                    case 1:
                        response = _a.sent();
                        setBrand(response.data);
                        setIsEmpty(response.data.length === 0);
                        setBrandPage(response.data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchData();
        var queryBrands = router.query.brands;
        if (typeof queryBrands === "string") {
            var selectedBrands = queryBrands.split(",");
            var newCheckedBrands_1 = {};
            selectedBrands.forEach(function (brandId) {
                newCheckedBrands_1[brandId] = true;
            });
            setCheckedBrands(newCheckedBrands_1);
        }
    }, [categoryId]);
    var handleBrandClick = function (brandId) {
        var newCheckedBrands = __assign({}, checkedBrands);
        newCheckedBrands[brandId] = !checkedBrands[brandId];
        setCheckedBrands(newCheckedBrands);
        var selectedBrands = Object.keys(newCheckedBrands).filter(function (key) { return newCheckedBrands[key]; });
        router.push({
            pathname: router.pathname,
            query: __assign(__assign({}, router.query), { brands: selectedBrands.join(",") })
        });
    };
    return (React.createElement("div", null, categoryId
        ? !isEmpty && (React.createElement("div", { className: "box-border max-h-[106px] max-w-[270px] lg:mt-12" },
            React.createElement("h4", { className: "max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings" }, "brands"),
            brand.map(function (category, index) {
                var isChecked = checkedBrands[category._id];
                return (React.createElement("div", { className: "relative max-h-[59px] max-w-[270px] flex items-center hover:cursor-pointer", key: category._id },
                    React.createElement("div", { className: "flex flex-row mb-3" },
                        React.createElement("input", { type: "checkbox", id: category._id, checked: isChecked, onChange: function () { return handleBrandClick(category.brand); }, className: "mr-4  min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900" }),
                        React.createElement("label", { htmlFor: category._id, className: "select-none text-[.8125rem]  font-medium hover:cursor-pointer capitalize " + (isChecked ? "text-blue-900" : "text-gray-500") }, category.brand))));
            })))
        : !isEmpty && (React.createElement("div", { className: "box-border max-h-[106px] max-w-[270px] lg:mt-12" },
            React.createElement("h4", { className: "max-h-[18px] max-w-[270px] uppercase tracking-[0] font-[600] text-[.9375rem] mb-[1.25rem] font-ff-headings" }, "brands"),
            brandPage.map(function (brand, index) {
                var isChecked = checkedBrands[brand.id];
                return (React.createElement("div", { className: "relative max-h-[59px] max-w-[270px] flex items-center hover:cursor-pointer", key: index },
                    React.createElement("div", { className: "flex flex-row mb-3" },
                        React.createElement("input", { type: "checkbox", id: brand.id, checked: isChecked, 
                            // onChange={() => handleBrandClick(brand.id)}
                            className: "mr-4  min-h-[14px] min-w-[14px] hover:cursor-pointer accent-blue-900 hover:bg-blue-900" }),
                        React.createElement("label", { htmlFor: brand.id, className: "select-none text-[.8125rem]  font-medium hover:cursor-pointer capitalize " + (isChecked ? "text-blue-900" : "text-gray-500") }, brand.name))));
            })))));
};
exports["default"] = Brands;

//# sourceMappingURL=Brands.js.map
