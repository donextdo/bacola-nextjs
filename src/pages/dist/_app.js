"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Layout_1 = require("@/components/Layout/Layout");
require("@/styles/globals.css");
{
    AppProps;
}
from;
"next/app";
var store_1 = require("../redux/store");
var react_redux_1 = require("react-redux");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(react_redux_1.Provider, { store: store_1.store },
        React.createElement(Layout_1["default"], null,
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = App;

//# sourceMappingURL=_app.js.map
