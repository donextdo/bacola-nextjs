import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import baseUrl from "../../../utils/baseUrl";

type FormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (values: FormValues) => void;
};

const Register: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
      userName: email,
    };
    try {
      const response = await axios.post(`${baseUrl}/users/register`, data);
      console.log(response.data); // do something with the response data
      setIsLoading(false);
    } catch (error) {
      console.log(error); // handle the error
      if (error.response) {
        const errorData = error.response.data;
        if (errorData.message) {
          // Update error message
          setErrorMsg(errorData.message);
        }
      }
    }
  };

  function handleClick() {
    setIsLoading(true);
    // ... send your request
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setValidationMsg("Password must be at least 8 characters long");
      setIsDisabled(true); // disable the Register button
    } else if (!value.match(/[A-Z]/)) {
      setValidationMsg("Password must contain at least one uppercase letter");
      setIsDisabled(true); // disable the Register button
    } else if (!value.match(/[a-z]/)) {
      setValidationMsg("Password must contain at least one lowercase letter");
      setIsDisabled(true); // disable the Register button
    } else if (!value.match(/[0-9]/)) {
      setValidationMsg("Password must contain at least one number");
      setIsDisabled(true); // disable the Register button
    } else {
      setValidationMsg("Medium");
      setIsDisabled(false); // enable the Register button
    }
  }

  return (
    <>
      <div className="max-w-lg mx-auto border-t-0">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-16">
          <div className="mx-2 gap-y-6 gap-x-8 ">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-900 ">
                Email address *
              </label>
              <div className="mt-3">
                <input
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm text-gray-900 mt-5"
              >
                Password *
              </label>
              <div className="mt-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  required
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7]"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {validationMsg && (
                  <div>
                    <div
                      className={`text-sm font-bold ${
                        validationMsg === "Medium"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {validationMsg}
                    </div>
                    <p className="justify-center  text-[12px] text-gray-600 mt-3">
                      Hint: The password should be at least twelve characters
                      long. To make it stronger, use upper and lower case
                      letters, numbers, and symbols like ! " ? $ % ^ &amp; *.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pl-3 mt-3">
            <span className="justify-center  text-[12px] text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </span>
          </div>

          <div className="mx-2 mt-5 mb-10 ">
            <button
              type="submit"
              className={`rounded-md w-full block bg-[#233a95] px-3.5 py-2.5 text-center text-sm font-semibold text-white ${
                isLoading ? "loading" : ""
              } ${isDisabled ? "opacity-60" : ""}`}
              onClick={handleClick}
              // disabled={Boolean(validationMsg)}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
          {errorMsg && <div className="text-red-500">{errorMsg}</div>}
        </form>
      </div>
    </>
  );
};
export default Register;
