import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [townCity, setTownCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [streetAddressError, setStreetAddressError] = useState("");
  const [apartmentError, setApartmentError] = useState("");
  const [townCityError, setTownCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");

  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleFirstNameChange = (e: any) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    if (newFirstName === "") {
      setFirstNameError("First name cannot be empty");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameChange = (e: any) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    if (newLastName === "") {
      setLastNameError("Last name cannot be empty");
    } else {
      setLastNameError("");
    }
  };

  const handleCompanyNameChange = (e: any) => {
    const newCompanyName = e.target.value;
    setCompanyName(newCompanyName);
    if (newCompanyName === "") {
      setCompanyNameError("Company name cannot be empty");
    } else {
      setCompanyNameError("");
    }
  };

  const handleCountryChange = (e: any) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
    if (newCountry === "") {
      setCountryError("Country cannot be empty");
    } else {
      setCountryError("");
    }
  };

  const handleStreetAddressChange = (e: any) => {
    const newStreetAddress = e.target.value;
    setStreetAddress(newStreetAddress);
    if (newStreetAddress === "") {
      setStreetAddressError("Street address cannot be empty");
    } else {
      setStreetAddressError("");
    }
  };

  const handleApartmentChange = (e: any) => {
    const newApartment = e.target.value;
    setApartment(newApartment);
    // No validation logic for apartment, assuming it can be empty
  };

  const handleTownCityChange = (e: any) => {
    const newTownCity = e.target.value;
    setTownCity(newTownCity);
    if (newTownCity === "") {
      setTownCityError("Town/city cannot be empty");
    } else {
      setTownCityError("");
    }
  };

  const handleStateChange = (e: any) => {
    const newState = e.target.value;
    setState(newState);
    if (newState === "") {
      setStateError("State cannot be empty");
    } else {
      setStateError("");
    }
  };

  const handleZipCodeChange = (e: any) => {
    const newZipCode = e.target.value;
    setZipCode(newZipCode);
    if (!/^[0-9]{5}(?:-[0-9]{4})?$/.test(newZipCode)) {
      setZipCodeError("Invalid zip code format");
    } else {
      setZipCodeError("");
    }
  };

  const handlePhoneChange = (e: any) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    if (!/^\+?[0-9]{7,}$/i.test(newPhone)) {
      setPhoneError("Invalid phone number format");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // perform form submission or validation here
    if (emailError || phoneError) {
      setFormError("Please fix the errors and try again");
    } else {
      // perform form submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="mt-3">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-4">
            <div>
              <label className="text-[13px]">First Name *</label>
              <input
                type="text"
                className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 "
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div>
              <label className="text-[13px] ">Last Name *</label>
              <input
                type="text"
                className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
          </div>

          <label className="text-[13px] ">Company Name </label>
          <input
            type="text"
            className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
            value={companyName}
            onChange={handleCompanyNameChange}
            required
          />

          <div className="flex flex-col mt-4 mb-4">
            <label className="text-[13px] ">Country / Region *</label>
            <input
              type="text"
              className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
              value={country}
              onChange={handleCountryChange}
              required
            />
          </div>

          <label className="text-[13px] ">Street address *</label>
          <input
            type="text"
            className="w-full h-11 px-4 bg-gray-100 rounded-md mt-2 pl-4 text-sm"
            placeholder="House number and street name"
            value={streetAddress}
            onChange={handleStreetAddressChange}
            required
          />
          <input
            type="text"
            className="w-full px-4 h-11 bg-gray-100 rounded-md mt-4 mb-4 pl-4 text-sm"
            placeholder="Apartment, suite, unite, etc. (optional)"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          />

          <label className="text-[13px] ">Town / City *</label>
          <input
            type="text"
            className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 "
            value={townCity}
            onChange={handleTownCityChange}
            required
          />

          <div className="flex flex-col space-y-2 mt-4 mb-4">
            <label className="text-[13px] ">State *</label>
            <input
              type="text"
              className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
              value={state}
              onChange={handleStateChange}
              required
            />
          </div>

          <label className="text-[13px] ">Zip Code *</label>
          <input
            type="text"
            className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
            value={zipCode}
            onChange={handleZipCodeChange}
            required
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-4">
            <div>
              <label className="text-[13px] ">Phone *</label>
              <input
                type="text"
                className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2 "
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              {phoneError && <div className="text-red-500">{phoneError}</div>}
            </div>
            <div>
              <label className="text-[13px] ">Email address *</label>
              <input
                type="text"
                className="w-full px-4 h-11 bg-gray-100 rounded-md mt-2"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
            </div>
          </div>

          {/* <div className="flex gap-1 border-b border-[#e4e5ee] py-3">
                            <input type="checkbox" name="address" id="address" />
                 {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

                            <p className="text-[13px] font-semibold">SHIP TO A DIFFERENT ADDRESS?</p>
                        </div> */}

          <p className="text-[13px] mt-8">Order notes</p>

          <textarea
            className="w-full h-[120px] bg-gray-100 rounded-md mt-2 mb-4 pl-4 pr-10 pt-5 text-sm"
            value={note}
            placeholder="Notes about your order, e.g special notes for delivery."
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>
      {formError && <div style={{ color: "red" }}>{formError}</div>}
      <button type="submit">Submit</button>
      {emailError && <div className="text-red-500">{emailError}</div>}
      {firstNameError && <div className="text-red-500">{firstNameError}</div>}
      {lastNameError && <div className="text-red-500">{lastNameError}</div>}
      {companyNameError && (
        <div className="text-red-500">{companyNameError}</div>
      )}
      {countryError && <div className="text-red-500">{countryError}</div>}
      {streetAddressError && (
        <div className="text-red-500">{streetAddressError}</div>
      )}
      {apartmentError && <div className="text-red-500">{apartmentError}</div>}
      {townCityError && <div className="text-red-500">{townCityError}</div>}
      {stateError && <div className="text-red-500">{stateError}</div>}
      {zipCodeError && <div className="text-red-500">{zipCodeError}</div>}
      {phoneError && <div className="text-red-500">{phoneError}</div>}
    </form>
  );
}

export default LoginForm;
