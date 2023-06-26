"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
var baseUrl_1 = require("../../../utils/baseUrl");
var sweetalert2_1 = require("sweetalert2");
var Ship = function (_a) {
    var setModal = _a.setModal, setModal1 = _a.setModal1;
    var _b = react_1.useState(""), firstName = _b[0], setFirstName = _b[1];
    var _c = react_1.useState(""), lastName = _c[0], setLastName = _c[1];
    var _d = react_1.useState(""), companyName = _d[0], setCompanyName = _d[1];
    var _e = react_1.useState(""), country = _e[0], setCountry = _e[1];
    var _f = react_1.useState(""), streetAddress = _f[0], setStreetAddress = _f[1];
    var _g = react_1.useState(""), apartment = _g[0], setApartment = _g[1];
    var _h = react_1.useState(""), townCity = _h[0], setTownCity = _h[1];
    var _j = react_1.useState(""), state = _j[0], setState = _j[1];
    var _k = react_1.useState(""), zipCode = _k[0], setZipCode = _k[1];
    var _l = react_1.useState(""), phone = _l[0], setPhone = _l[1];
    var _m = react_1.useState(""), email = _m[0], setEmail = _m[1];
    var id = localStorage.getItem("id");
    var _o = react_1.useState(""), emailError = _o[0], setEmailError = _o[1];
    var _p = react_1.useState(""), firstNameError = _p[0], setFirstNameError = _p[1];
    var _q = react_1.useState(""), lastNameError = _q[0], setLastNameError = _q[1];
    var _r = react_1.useState(""), companyNameError = _r[0], setCompanyNameError = _r[1];
    var _s = react_1.useState(""), countryError = _s[0], setCountryError = _s[1];
    var _t = react_1.useState(""), streetAddressError = _t[0], setStreetAddressError = _t[1];
    var _u = react_1.useState(""), apartmentError = _u[0], setApartmentError = _u[1];
    var _v = react_1.useState(""), townCityError = _v[0], setTownCityError = _v[1];
    var _w = react_1.useState(""), stateError = _w[0], setStateError = _w[1];
    var _x = react_1.useState(""), zipCodeError = _x[0], setZipCodeError = _x[1];
    var _y = react_1.useState(""), phoneError = _y[0], setPhoneError = _y[1];
    var _z = react_1.useState(""), formError = _z[0], setFormError = _z[1];
    react_1.useEffect(function () {
        fetchData();
    }, []);
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get(baseUrl_1["default"] + "/users/" + id)];
                    case 1:
                        res = _a.sent();
                        console.log(res.data);
                        data = res.data;
                        setFirstName(data.shippingAddress.shippingFirstName);
                        setLastName(data.shippingAddress.shippingLastName);
                        setCompanyName(data.shippingAddress.shippingCompanyName);
                        setCountry(data.shippingAddress.country);
                        setStreetAddress(data.shippingAddress.street);
                        setApartment(data.shippingAddress.apartment);
                        setTownCity(data.shippingAddress.town);
                        setState(data.shippingAddress.state);
                        setZipCode(data.shippingAddress.zipCode);
                        setPhone(data.shippingAddress.shippingphone);
                        setEmail(data.shippingAddress.shippingEmail);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    // const handleSave = async () => {
    //     const data = {
    //         "shippingAddress": {
    //            shippingFirstName: firstName,
    //            shippingLastName: lastName,
    //            shippingCompanyName: companyName,
    //             country: country,
    //             street: streetAddress,
    //             apartment: apartment,
    //             town: townCity,
    //             state: state,
    //             zipCode: zipCode,
    //             shippingphone: phone,
    //            shippingEmail: email,
    //         }
    //       };
    //     try {
    //         const response = await axios.patch(`${baseUrl}/users/${id}`, data);
    //         console.log(response.data); // do something with the response data
    //     } catch (error) {
    //         console.log(error); // handle the error
    //     }
    // };
    var handleEmailChange = function (e) {
        var newEmail = e.target.value;
        setEmail(newEmail);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            setEmailError("Invalid email format");
        }
        else {
            setEmailError("");
        }
    };
    var handleFirstNameChange = function (e) {
        var newFirstName = e.target.value;
        setFirstName(newFirstName);
        if (newFirstName === "") {
            setFirstNameError("First name cannot be empty");
        }
        else {
            setFirstNameError("");
        }
    };
    var handleLastNameChange = function (e) {
        var newLastName = e.target.value;
        setLastName(newLastName);
        if (newLastName === "") {
            setLastNameError("Last name cannot be empty");
        }
        else {
            setLastNameError("");
        }
    };
    var handleCompanyNameChange = function (e) {
        var newCompanyName = e.target.value;
        setCompanyName(newCompanyName);
        if (newCompanyName === "") {
            setCompanyNameError("Company name cannot be empty");
        }
        else {
            setCompanyNameError("");
        }
    };
    var handleCountryChange = function (e) {
        var newCountry = e.target.value;
        setCountry(newCountry);
        if (newCountry === "") {
            setCountryError("Country cannot be empty");
        }
        else {
            setCountryError("");
        }
    };
    var handleStreetAddressChange = function (e) {
        var newStreetAddress = e.target.value;
        setStreetAddress(newStreetAddress);
        if (newStreetAddress === "") {
            setStreetAddressError("Street address cannot be empty");
        }
        else {
            setStreetAddressError("");
        }
    };
    var handleApartmentChange = function (e) {
        var newApartment = e.target.value;
        setApartment(newApartment);
        // No validation logic for apartment, assuming it can be empty
    };
    var handleTownCityChange = function (e) {
        var newTownCity = e.target.value;
        setTownCity(newTownCity);
        if (newTownCity === "") {
            setTownCityError("Town/city cannot be empty");
        }
        else {
            setTownCityError("");
        }
    };
    var handleStateChange = function (e) {
        var newState = e.target.value;
        setState(newState);
        if (newState === "") {
            setStateError("State cannot be empty");
        }
        else {
            setStateError("");
        }
    };
    var handleZipCodeChange = function (e) {
        var newZipCode = e.target.value;
        setZipCode(newZipCode);
        if (!/^[0-9]{5}(?:-[0-9]{4})?$/.test(newZipCode)) {
            setZipCodeError("Invalid zip code format");
        }
        else {
            setZipCodeError("");
        }
    };
    var handlePhoneChange = function (e) {
        var newPhone = e.target.value;
        var formattedPhone = newPhone.replace(/[^0-9]/g, ""); // Remove non-digit characters
        if (formattedPhone.length <= 9) {
            setPhone(formattedPhone);
            setPhoneError("");
        }
        else {
            setPhoneError("Invalid phone number format");
        }
    };
    // form handle submit for example
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!(emailError || phoneError || zipCodeError)) return [3 /*break*/, 1];
                    setFormError("Please fix the errors and try again");
                    return [3 /*break*/, 5];
                case 1:
                    data = {
                        shippingAddress: {
                            shippingFirstName: firstName,
                            shippingLastName: lastName,
                            shippingCompanyName: companyName,
                            country: country,
                            street: streetAddress,
                            apartment: apartment,
                            town: townCity,
                            state: state,
                            zipCode: zipCode,
                            shippingphone: phone,
                            shippingEmail: email
                        }
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, axios_1["default"].patch(baseUrl_1["default"] + "/users/" + id, data)];
                case 3:
                    response = _a.sent();
                    console.log(response.data); // do something with the response data
                    if (response.status == 200) {
                        sweetalert2_1["default"].fire({
                            title: "Success",
                            text: "Your shipping address has been updated successfully",
                            icon: "success",
                            confirmButtonText: "Done",
                            confirmButtonColor: "#8DC14F"
                        });
                        setModal1(false);
                        setModal(false);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1); // handle the error
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "container mx-auto px-40 mt-10" },
        React.createElement("h2", { className: "font-semibold mb-2" }, "SHIPPING ADDRESS"),
        React.createElement("hr", { className: "mb-4" }),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("label", { className: "text-sm" }, "First Name *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4 ", value: firstName, onChange: handleFirstNameChange, required: true }),
            firstNameError && React.createElement("div", { className: "text-red-500" }, firstNameError),
            React.createElement("label", { className: "text-sm" }, "Last Name *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: lastName, onChange: handleLastNameChange, required: true }),
            lastNameError && React.createElement("div", { className: "text-red-500" }, lastNameError),
            React.createElement("label", { className: "text-sm" }, "Company Name (optional)"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: companyName, onChange: handleCompanyNameChange }),
            React.createElement("label", { className: "text-sm" }, "Country / Region *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: country, onChange: handleCountryChange, required: true }),
            countryError && React.createElement("div", { className: "text-red-500" }, countryError),
            React.createElement("label", { className: "text-sm" }, "Street address *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-2 px-4", placeholder: "House number and street name", value: streetAddress, onChange: handleStreetAddressChange, required: true }),
            streetAddressError && (React.createElement("div", { className: "text-red-500" }, streetAddressError)),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", placeholder: "Apartment, suite, unite, etc. (optional)", value: apartment, onChange: function (e) { return setApartment(e.target.value); } }),
            React.createElement("label", { className: "text-sm" }, "Town / City *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: townCity, onChange: handleTownCityChange, required: true }),
            townCityError && React.createElement("div", { className: "text-red-500" }, townCityError),
            React.createElement("label", { className: "text-sm" }, "State *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: state, onChange: handleStateChange, required: true }),
            stateError && React.createElement("div", { className: "text-red-500" }, stateError),
            React.createElement("label", { className: "text-sm" }, "Zip Code *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: zipCode, onChange: handleZipCodeChange, required: true }),
            zipCodeError && React.createElement("div", { className: "text-red-500" }, zipCodeError),
            React.createElement("label", { className: "text-sm" }, "Phone *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: phone, onChange: handlePhoneChange, required: true }),
            phoneError && React.createElement("div", { className: "text-red-500" }, phoneError),
            React.createElement("label", { className: "text-sm" }, "Email address *"),
            React.createElement("input", { type: "text", className: "w-full h-10 bg-gray-100 rounded-md mt-2 mb-4 px-4", value: email, onChange: handleEmailChange, required: true }),
            emailError && React.createElement("div", { className: "text-red-500" }, emailError),
            React.createElement("button", { type: "submit", className: "bg-primary text-white py-2.5 px-4 mb-4 rounded-md text-sm" }, "Save Changes"),
            formError && React.createElement("div", { className: "text-red-500" }, formError))));
};
exports["default"] = Ship;

//# sourceMappingURL=Ship.js.map
