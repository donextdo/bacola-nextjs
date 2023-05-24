"use strict";
exports.__esModule = true;
var FilterSideBar_1 = require("@/components/FilterSideBar/FilterSideBar");
var router_1 = require("next/router");
// import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
var FilterProduct = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var router = router_1.useRouter();
    var categoryId = router.query.categoryId;
    var query = router_1.useRouter().query;
    var brand = (_a = query) === null || _a === void 0 ? void 0 : _a.brands;
    var subcategory = (_b = query) === null || _b === void 0 ? void 0 : _b.subCategories;
    var minValue = (_c = query) === null || _c === void 0 ? void 0 : _c.min_price;
    var maxValue = (_d = query) === null || _d === void 0 ? void 0 : _d.max_price;
    var inStock = (_e = query) === null || _e === void 0 ? void 0 : _e.stock_status;
    var onSale = (_f = query) === null || _f === void 0 ? void 0 : _f.on_sale;
    console.log("min_price : ", minValue);
    console.log("max_price : ", maxValue);
    console.log("stock_status : ", inStock);
    console.log("on_sale : ", onSale);
    var perpage = (_g = query) === null || _g === void 0 ? void 0 : _g.perpage;
    var page = (_h = query) === null || _h === void 0 ? void 0 : _h.page;
    var orderby = (_j = query) === null || _j === void 0 ? void 0 : _j.orderby;
    console.log("perpage filter", perpage);
    console.log("page filter", page);
    console.log("orderby filter", orderby);
    return (React.createElement("div", { className: "xl:px-40 lg:px-5 md:px-5 px-5 " },
        React.createElement(FilterSideBar_1.FilterSideBar, { categoryId: categoryId, brand: brand, subcategory: subcategory, minValue: minValue, maxValue: maxValue, inStock: inStock, onSale: onSale, perpage: perpage, page: page, orderby: orderby })));
};
exports["default"] = FilterProduct;

//# sourceMappingURL=filterProduct.js.map
