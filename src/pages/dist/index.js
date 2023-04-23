"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
//Components
var inter = google_1.Inter({ subsets: ["latin"] });
var Image_cart_bottom_1 = require("@/components/Image-Cart-Bottom/Image-cart-bottom");
var Homeslider_1 = require("@/components/Homeslider");
var Home_1 = require("@/components/Common/Home");
function Home() {
    return (React.createElement("div", { className: "xl:px-40 lg:px-5 md:px-5 px-5 " },
        React.createElement("div", null,
            React.createElement(Homeslider_1["default"], null)),
        React.createElement(Home_1["default"], null),
        React.createElement(Image_cart_bottom_1["default"], null)));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map
