"use strict";
exports.__esModule = true;
var react_1 = require("react");
var search_1 = require("@/components/search");
var itemList_1 = require("@/components/itemList");
function Home() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "m-8  search-bar" },
            react_1["default"].createElement(search_1.SearchItem, null)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(itemList_1["default"], null))));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map
