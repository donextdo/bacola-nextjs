"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CartItem_1 = require("@/components/CartItem/CartItem");
exports.ItemList = function (_a) {
    var itemsList = _a.itemsList;
    return (react_1["default"].createElement("div", { className: "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-4 " }, itemsList.map(function (item, index) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (react_1["default"].createElement(CartItem_1.CartItem, { key: index, isRecommended: (_a = item) === null || _a === void 0 ? void 0 : _a.isRecommended, isDiscount: (_b = item) === null || _b === void 0 ? void 0 : _b.isDiscount, isOrganic: (_c = item) === null || _c === void 0 ? void 0 : _c.isOrganic, isFavourite: (_d = item) === null || _d === void 0 ? void 0 : _d.isFavourite, discount: (_e = item) === null || _e === void 0 ? void 0 : _e.discount, rating: (_f = item) === null || _f === void 0 ? void 0 : _f.rating, image: (_g = item) === null || _g === void 0 ? void 0 : _g.image, title: (_h = item) === null || _h === void 0 ? void 0 : _h.title, isAvailable: (_j = item) === null || _j === void 0 ? void 0 : _j.isAvailable, price: (_k = item) === null || _k === void 0 ? void 0 : _k.price }));
    })));
};

//# sourceMappingURL=ItemList.js.map
