import { Button } from "@/components/ui/button";
import { caller } from "@/trpc/server";

const Page = async () => {
  const users = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <h1>{JSON.stringify(users)}</h1>
      <Button>Click Me</Button>
    </div>
  );
};
export default Page;
