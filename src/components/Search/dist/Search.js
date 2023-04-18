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
var Spinner_1 = require("../Spinner/Spinner");
var react_redux_1 = require("react-redux");
var productSlice_1 = require("@/features/product/productSlice");
exports.SearchItem = function () {
    var _a = react_1.useState(""), searchItem = _a[0], setSearchItem = _a[1];
    var _b = react_1.useState([]), searchResults = _b[0], setSearchResults = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var products = react_redux_1.useSelector(function (state) { return state.product.products; });
    react_1.useEffect(function () {
        dispatch(productSlice_1.fetchProducts());
        console.log("search data ", products);
    }, [dispatch]);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setIsLoading(true);
            e.preventDefault();
            return [2 /*return*/];
        });
    }); };
    var onSearch = function (searchItem) {
        console.log("search == ", searchItem);
    };
    // useEffect(() => {
    //   setIsLoading(true);
    //   // const response = await fetch(
    //   //   `https://example.com/api/search?q=${searchItem}`
    //   // );
    //   // const data = await response.json();
    //   // if(response.ok){
    //   //   setIsLoading(false);
    //   //   setSearchResults(data);
    //   //   console.log(data);
    //   //   alert("Search button clicked! " + searchItem);
    //   // }
    // }, [searchItem]);
    return (react_1["default"].createElement("div", { className: " flex flex-row min-h-[60px] min-w-[557.51px] place-content-center" },
        react_1["default"].createElement("input", { type: "search", className: "bg-gray-200 rounded-tl rounded-bl min-h-[60px] min-w-[557.51px] pl-5 text-sm focus:outline-none", placeholder: "Search for product...", value: searchItem, onChange: function (e) { return setSearchItem(e.target.value); } }),
        isLoading ? (react_1["default"].createElement("div", { className: "bg-gray-200 rounded-br rounded-tr min-h-[60px] min-w-[60px]  flex items-center justify-center hover:cursor-pointer" },
            react_1["default"].createElement(Spinner_1["default"], null))) : (react_1["default"].createElement("div", { className: "bg-gray-200 rounded-br rounded-tr min-h-[60px] min-w-[60px]  flex items-center justify-center hover:cursor-pointer", onClick: function () { return onSearch(searchItem); } },
            react_1["default"].createElement(fi_1.FiSearch, { type: "submit", className: "min-h-[36px] min-w-[24px] text-blue-900 " }))
        /* {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )} */
        ),
        react_1["default"].createElement("div", { className: "bg-white flex flex-col border-solid border-2 border-gray-400 " })));
};

//# sourceMappingURL=Search.js.map
