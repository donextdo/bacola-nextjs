import { useEffect } from "react";
import { useRouter } from "next/router";

const SuccessPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/account");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="flex justify-center items-center py-14 ">
      <div className="text-center">
        <h1>Verification Successful</h1>
        <p>Congratulations! Your email has been successfully verified.</p>
        <p>Please Login.</p>
      </div>
    </div>
  );
};

export default SuccessPage;
