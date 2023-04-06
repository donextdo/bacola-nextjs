"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProductCard_1 = require("./ProductCard");
var react_redux_1 = require("react-redux");
var productSlice_1 = require("./productSlice");
exports.ProductList = function () {
    var dispatch = react_redux_1.useDispatch();
    var products = react_redux_1.useSelector(function (state) { return state.product.products; });
    react_1.useEffect(function () {
        dispatch(productSlice_1.fetchProducts());
        console.log("data ", products);
    }, [dispatch]);
    // useEffect(() => {
    //   // Fetch products data from the API or use the dummy data from the JSON file
    //   fetch('/data.json')
    //     .then((response) => response.json())
    //     .then((data) => dispatch(setProducts(data)));
    // }, [dispatch]);
    return (react_1["default"].createElement("div", { className: "container mx-auto lg:max-w-[885px] md:max-w-[670px]" },
        react_1["default"].createElement("div", { className: "grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-4 " }, products.map(function (product, index) {
            return react_1["default"].createElement(ProductCard_1.ProductCard, { key: product.id, product: product });
        }))));
};

//# sourceMappingURL=ProductList.js.map
