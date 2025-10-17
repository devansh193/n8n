import { requireAuth } from "@/lib/auth-utils";
export const dynamic = "force-dynamic";

const Page = async () => {
  const session = await requireAuth();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <h1>{JSON.stringify(session)}</h1>
    </div>
  );
};
export default Page;
