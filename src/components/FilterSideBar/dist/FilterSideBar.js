"use strict";
exports.__esModule = true;
var Brands_1 = require("../Brands/Brands");
var Categories_1 = require("../ProductCategories/Categories");
var Status_1 = require("../ProductStatus/Status");
var RangeSlider_1 = require("../RangeSlider/RangeSlider");
var Image_1 = require("./Image");
var FilteredProduct_1 = require("../FilterSideBar/FilteredProduct");
var sidebar_banner_gif_1 = require("../../../assets/home/sidebar-banner.gif");
var image_1 = require("next/image");
var react_1 = require("react");
var PageNumber_1 = require("../Pagination/PageNumber");
var ProductCount_1 = require("../Pagination/ProductCount");
exports.FilterSideBar = function (_a) {
    var categoryId = _a.categoryId, brand = _a.brand, subcategory = _a.subcategory, minValue = _a.minValue, maxValue = _a.maxValue, inStock = _a.inStock, onSale = _a.onSale, perpage = _a.perpage, page = _a.page, orderby = _a.orderby;
    var _b = react_1.useState(), passgrid = _b[0], setPassgrid = _b[1];
    react_1.useEffect(function () {
        console.log("categoryId ? ", categoryId);
        console.log("brands ? ", brand);
        console.log("subCat ? ", subcategory);
        console.log("minValue ? ", minValue);
        console.log("maxValue ? ", maxValue);
        console.log("inStock ? ", inStock);
        console.log("onSale ? ", onSale);
        console.log("perpage-homepagination? ", perpage);
        console.log("page-homepagination? ", page);
        console.log("orderby-homepagination? ", orderby);
    }, []);
    var handleGridChange = function (grid) {
        setPassgrid(grid);
        console.log("grid ", grid);
    };
    return (React.createElement("div", { className: "flex flex-row mb-9" },
        React.createElement("div", { className: "lg:w-1/4 hidden lg:block" },
            React.createElement("div", { className: "grid md:grid-cols-1 grid-cols-1 " },
                React.createElement(Categories_1["default"], { categoryId: categoryId }),
                React.createElement(RangeSlider_1.RangeSlider, { categoryId: categoryId }),
                React.createElement(Status_1["default"], null),
                React.createElement(Brands_1["default"], { categoryId: categoryId })),
            React.createElement("div", { className: "lg:mt-12" },
                React.createElement(image_1["default"], { src: sidebar_banner_gif_1["default"], alt: "Slider- Image", className: "lg:h-[370px] w-full rounded-md lg:w-[270px]" }))),
        React.createElement("div", { className: "lg:w-3/4 md:w-full w-full mt-12 md:ml-9" },
            React.createElement("div", { className: "cursor-pointer" },
                React.createElement(Image_1.ImageProductFilter, null)),
            React.createElement("div", null,
                React.createElement(ProductCount_1.ProductCount, { passgrid: handleGridChange })),
            React.createElement("div", { className: "lg:mt-12 md:mt-12 mt-12 cursor-pointer" },
                React.createElement(FilteredProduct_1.FilteredProduct, { categoryId: categoryId, brand: brand, subcategory: subcategory, minValue: minValue, maxValue: maxValue, inStock: inStock, onSale: onSale, perpage: perpage, page: page, orderby: orderby, passgrid: passgrid })),
            React.createElement("div", null,
                React.createElement(PageNumber_1.PageNumber, { perpage: perpage })))));
};

//# sourceMappingURL=FilterSideBar.js.map
