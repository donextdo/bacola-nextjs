import { useEffect } from "react";
import { useRouter } from "next/router";

const VerifyEmail: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center py-14">
      <div className="text-center">
        <h1>Please Verify your email</h1>
      </div>
    </div>
  );
};

export default VerifyEmail;
