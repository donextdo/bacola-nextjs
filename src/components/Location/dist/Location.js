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
var md_1 = require("react-icons/md");
var fi_1 = require("react-icons/fi");
var axios_1 = require("axios");
var baseUrl_1 = require("../../../utils/baseUrl");
exports.Location = function () {
    var _a = react_1.useState(false), showModal = _a[0], setShowModal = _a[1];
    var _b = react_1.useState([]), location = _b[0], setLocation = _b[1];
    var _c = react_1.useState("Select a Location"), locationName = _c[0], setLocationName = _c[1];
    var _d = react_1.useState(""), searchQuery = _d[0], setSearchQuery = _d[1];
    var filteredLocation = location.filter(function (item) {
        return item.locationName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    react_1.useEffect(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, locations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get(baseUrl_1["default"] + "/locations/getAll")];
                    case 1:
                        response = _a.sent();
                        locations = response.data;
                        setLocation(locations);
                        console.log("location", locations);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
        setLocationName(locationName);
    }, [locationName]);
    var handleModal = function () {
        setShowModal(true);
    };
    var handleSelectLocation = function (location) {
        localStorage.clear();
        setLocationName(location.locationName);
        setShowModal(false);
        localStorage.setItem("selectedLocation", location.locationName);
    };
    var getInitialLocation = function () {
        var selectedLocation = localStorage.getItem("selectedLocation");
        if (selectedLocation) {
            setLocationName(selectedLocation);
        }
    };
    var handleClearLocation = function () {
        localStorage.clear();
        var name = "Select a Location";
        setLocationName(name);
        setShowModal(false);
        localStorage.setItem("selectedLocation", name);
    };
    var getClearLocation = function () {
        var selectedLocationString = localStorage.getItem("selectedLocation");
        if (selectedLocationString) {
            setLocationName(selectedLocationString);
        }
        else {
            setLocationName("Select a Location");
        }
    };
    react_1.useEffect(function () {
        getInitialLocation();
        getClearLocation();
    }, []);
    return (React.createElement("div", { className: " z-40" },
        React.createElement("div", { className: "border border-gray-200 rounded-md relative mx-6 flex flex-row justify-start items-center h-[60px] w-[180px] py-6 px-4 shadow-sm cursor-pointer md:mx-3 ", onClick: handleModal },
            React.createElement("div", { className: "flex-grow flex flex-col" },
                React.createElement("div", { className: "text-[0.625rem] opacity-50 self-start " }, "Your Location"),
                React.createElement("div", { className: "text-[0.8125rem] self-start font-semibold overflow-hidden whitespace-nowrap text-[#233a95] pr-4" }, locationName)),
            React.createElement("div", { className: "flex-shrink flex justify-center items-center w-6 " },
                React.createElement(md_1.MdKeyboardArrowDown, { className: "text-xl text-gray-400" }))),
        showModal && (React.createElement("div", { className: "fixed z-40 inset-0 overflow-y-auto" },
            React.createElement("div", { className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" },
                React.createElement("div", { className: "fixed inset-0 transition-opacity", "aria-hidden": "true" },
                    React.createElement("div", { className: "absolute inset-0 bg-gray-500 opacity-75" })),
                React.createElement("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen", "aria-hidden": "true" }, "\u200B"),
                React.createElement("div", { className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[420px] sm:w-[420px] sm:p-6 relative w-[420px] h-[530px]" },
                    React.createElement("button", { onClick: function () { return setShowModal(false); }, className: "absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))),
                    React.createElement("div", null,
                        React.createElement("div", { className: "mt-3  sm:mt-5 " },
                            React.createElement("h3", { className: "text-lg leading-6 font-medium text-gray-900" }, "Choose your pickup location"),
                            React.createElement("h2", { className: "text-xs leading-6 text-gray-500" }, "Enter your address and we will specify the offer for your area."),
                            React.createElement("div", { className: "mt-2  h-14" },
                                React.createElement("div", { className: "text-sm bg-gray-100 flex items-center h-14" },
                                    React.createElement(fi_1.FiSearch, { type: "submit", className: "min-h-[36px] min-w-[24px] text-gray-600 h-14 ml-3" }),
                                    React.createElement("input", { type: "text", placeholder: "Search your area", className: "bg-gray-100 border border-gray-100 rounded-md py-2 px-3 w-64 h-14", value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); } })))),
                        React.createElement("div", { className: "location  mt-5", style: { maxHeight: "300px", overflowY: "scroll" } },
                            React.createElement("div", { className: "flex items-center justify-between px-2 py-4 bg-white text-gray-700 text-sm cursor-pointer", onClick: function () { return handleClearLocation(); } },
                                React.createElement("div", { className: "hover:text-[#233a95]" }, "Select a Location"),
                                React.createElement("div", { className: "rounded-full text-gray-400 font-semibold w-20 px-2 text-xs h-8 border border-gray-200 flex justify-center items-center" }, "Clear All")),
                            React.createElement("hr", null),
                            filteredLocation.map(function (item) { return (React.createElement("div", { key: item.id, onClick: function () { return handleSelectLocation(item); } },
                                React.createElement("div", { className: "flex items-center justify-between px-2 py-4 bg-white text-gray-700 text-sm cursor-pointer" },
                                    React.createElement("div", { className: "hover:text-[#233a95]" }, item.locationName)),
                                React.createElement("hr", null))); })))))))));
};

//# sourceMappingURL=Location.js.map
