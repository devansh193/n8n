import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnAuth } from "@/lib/auth-utils";
export const dynamic = "force-dynamic";

const Page = async () => {
  await requireUnAuth();
  return <LoginForm />;
};

export default Page;
