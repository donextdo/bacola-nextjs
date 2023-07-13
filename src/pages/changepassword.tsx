import { useRouter } from "next/router";
import ChangePassword from "@/components/LoginRegister/ChangePassword";

const ChangePasswords = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <div>
      <ChangePassword token={token} />
    </div>
  );
};

export default ChangePasswords;
