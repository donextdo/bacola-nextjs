import { useEffect } from "react";
import { useRouter } from "next/router";
import baseUrl from "../../utils/baseUrl";
import Swal from "sweetalert2";

const SuccessPage: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    fetchData();
  }, [router]);
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/users/verify/${token}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {}
  };

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
