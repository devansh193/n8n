import { serve } from "inngest/next";
import { execute } from "@/inngest/function";
import { inngest } from "../../../inngest/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [execute],
});
