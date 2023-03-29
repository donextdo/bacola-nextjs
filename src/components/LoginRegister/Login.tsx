import React, { useState } from "react";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ usernameoremail, password });
    setUsernameoremail("");
    setPassword("");
  };
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
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="password" className="block text-sm text-gray-900">
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
                />
              </div>
            </div>
          </div>

          <div className="flex pl-3 mt-5 ">
            <input type="checkbox" className="bg-[#f3f4f7]" />
            <p className="px-3">Remember me</p>
          </div>

          <div className="mx-2 mt-5 mb-10 ">
            <button
              type="submit"
              className=" rounded-md w-full block bg-[#233a95] px-3.5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;