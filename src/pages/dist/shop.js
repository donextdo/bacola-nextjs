"use strict";
exports.__esModule = true;
var HomePagination_1 = require("@/components/Pagination/HomePagination");
var router_1 = require("next/router");
var PaginationProduct = function () {
    var _a, _b, _c;
    var router = router_1.useRouter();
    var query = router_1.useRouter().query;
    var perpage = (_a = query) === null || _a === void 0 ? void 0 : _a.perpage;
    var page = (_b = query) === null || _b === void 0 ? void 0 : _b.page;
    var orderby = (_c = query) === null || _c === void 0 ? void 0 : _c.orderby;
    // console.log("perpage ", perpage);
    // console.log("page ", page);
    // console.log("orderby ", orderby);
    return (React.createElement("div", { className: "xl:px-40 lg:px-5 md:px-5 px-5 " },
        React.createElement(HomePagination_1.HomePagination, { perpage: perpage, page: page, orderby: orderby })));
};
exports["default"] = PaginationProduct;

//# sourceMappingURL=shop.js.map
