"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
//Components
var inter = google_1.Inter({ subsets: ["latin"] });
var react_1 = require("react");
var Image_cart_bottom_1 = require("@/components/Image-Cart-Bottom/Image-cart-bottom");
var Homeslider_1 = require("@/components/Homeslider");
var ProductList_1 = require("@/features/product/ProductList");
function Home() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Homeslider_1["default"], null),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(ProductList_1.ProductList, null)),
        react_1["default"].createElement(Image_cart_bottom_1["default"], null)));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map
