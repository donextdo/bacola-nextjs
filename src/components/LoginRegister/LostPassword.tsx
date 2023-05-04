import axios from "axios";
import { useState } from "react";
import baseUrl from "../../../utils/baseUrl";

export const LostPassword = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/getUser/${usernameOrEmail}`
      );
      setUsernameOrEmail("");
      console.log("response", response);

      if (response.status == 200) {
        setErrorMessage("Please verify your email.");
      } else if (response.status == 400) {
        setErrorMessage("Invalid username or email");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" mt-10 lg:mx-40 mx-16">
      {errorMessage ? (
        <div className="border border-gray-100 pl-4 py-5">{errorMessage}</div>
      ) : (
        ""
      )}
      <div className=" mt-10 ">
        <p className="text-black text-sm font-normal">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="password" className="block text-xs text-gray-900 mt-5">
          Username or email
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="email"
            id="email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            autoComplete="password"
            required
            className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7]"
          />
        </div>
      </div>
      <div className="mt-5  mb-10">
        <button
          type="submit"
          className=" rounded-md block bg-[#233a95] text-center text-sm font-semibold text-white w-[150px] h-[40px]"
          onClick={() => handleUser()}
        >
          Reset password
        </button>
      </div>
    </div>
  );
};
