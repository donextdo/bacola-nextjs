"use strict";
var _a;
exports.__esModule = true;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    isAddToCart: false
};
exports.cartbuttonSlice = toolkit_1.createSlice({
    name: "cartbutton",
    initialState: initialState,
    reducers: {
        addQuantity: function (state) {
            state.isAddToCart = true;
        },
        removeFromCart: function (state) {
            state.isAddToCart = false;
        }
    }
});
exports.addQuantity = (_a = exports.cartbuttonSlice.actions, _a.addQuantity), exports.removeFromCart = _a.removeFromCart;
exports["default"] = exports.cartbuttonSlice.reducer;

//# sourceMappingURL=AddCartButton.js.map
