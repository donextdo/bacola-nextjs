import axios from "axios";
import React, { useState } from "react";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";
import Link from "next/link";

type FormValues = {
  usernameoremail: string;
  password: string;
};

type Props = {
  onSubmit: (values: FormValues) => void;
};

const Login: React.FC<Props> = () => {
  const [usernameoremail, setUsernameoremail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const details = {
      email: usernameoremail,
      password: password,
    };
    try {
      const response = await axios.post(`${baseUrl}/users/login`, details);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data._id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("wishlist", JSON.stringify([]));
      localStorage.setItem("order", JSON.stringify([]));

      if (response.status == 200) {
        location.reload();
        router.push("/account");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        const statusCode = error.response.status;
        switch (statusCode) {
          case 200:
            router.push("/account");
            break;
          case 400:
            setErrorMsg(
              "Incorrect password for the provided email or username"
            );
            break;
          case 404:
            setErrorMsg("Such user does not exist");
            break;
          case 500:
            setErrorMsg("Such user does not exist check your credentials");
            break;
          default:
            setErrorMsg("Something went wrong. Please try again later.");
        }
      }
    }
  };

  async function handleClick() {
    setIsLoading(true);
    if (!usernameoremail) {
      setErrorMsg("Username is required.");
    } else if (!password) {
      setErrorMsg("The password field is empty.");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="max-w-lg mx-auto border-t-0 ">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 mb-16">
          <div className="mx-2 gap-y-6 gap-x-8 ">
            <div>
              <label
                htmlFor="username-email"
                className="block text-sm text-gray-900 "
              >
                Username or email address *
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="username-email"
                  id="username-email"
                  autoComplete="given-username-email"
                  required
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7] "
                  value={usernameoremail}
                  onChange={(e) => setUsernameoremail(e.target.value)}
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
              <div className="mt-2.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  required
                  className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex pl-3 mt-5 ">
            <input type="checkbox" className="bg-[#f3f4f7]" />
            <p className="px-3 text-sm">Remember me</p>
          </div>

          <div className="mx-2 mt-5  ">
            <button
              type="submit"
              className={`rounded-md w-full block bg-[#233a95] px-3.5 py-2.5 text-center text-sm font-semibold text-white ${
                isLoading ? "loading" : ""
              }`}
              onClick={handleClick}
              // disabled={Boolean(validationMsg)}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          <div className="mx-2 mt-5 mb-5 ">
            <Link href={"/forgetpassword/"}>
              <p className="text-cyan-400 text-sm font-medium cursor-pointer hover:text-[#233a95] hover:underline">
                Lost your password?
              </p>
            </Link>
          </div>

          {errorMsg && (
            <div className="border border-gray-300 p-3 mx-2 flex items-center">
              <span className="font-bold text-black mr-2">Error:</span>
              <div className="text-black text-sm">{errorMsg}</div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default Login;
