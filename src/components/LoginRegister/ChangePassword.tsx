import { useEffect, useState } from "react";
import baseUrl from "../../../utils/baseUrl";
import { useRouter } from "next/router";

const ChangePassword = ({ token }: any) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setUserId(decodedToken.id);
    }
  }, [token]);

  const handleUser = async () => {
    if (newPassword === confirmPassword) {
      try {
        const response = await fetch(`${baseUrl}/users/${userId}/password`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: newPassword }),
        });

        if (response.ok) {
          const data = await response.json();
          router.push("/account");
        } else {
          const errorData = await response.json();
        }
      } catch (error: any) {
        setMessage(error);
      }
    } else {
      setMessage("Please check password and Confirm password");
    }
  };

  return (
    <div className="mt-10 container mx-auto xl:px-40 px-5">
      <div className="w-full mx-2">
        <label
          htmlFor="password"
          className="block text-[13px] text-gray-900 mt-5"
        >
          New Passowrd
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="password"
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="password"
            required
            className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7]"
          />
        </div>
      </div>
      <div className="w-full mx-2 mt-4">
        <label
          htmlFor="password"
          className="block text-[13px] text-gray-900 mt-5"
        >
          Confirm Passowrd
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="password"
            id="confPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="password"
            required
            className="block w-full border-0 py-2 px-3.5 text-gray-900 bg-[#f3f4f7]"
          />
        </div>
      </div>
      <p>{message}</p>
      <button
        type="submit"
        className=" rounded-md block bg-[#233a95] text-center text-sm font-semibold text-white w-[150px] h-[40px] my-4 mx-2"
        onClick={handleUser}
      >
        Reset password
      </button>
    </div>
  );
};

export default ChangePassword;
