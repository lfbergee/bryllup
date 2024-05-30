import { Login } from "@/lib/admin/login";
import { cookies } from "next/headers";

export default function Page() {
  const authCookie = cookies().get("admin")?.value === process.env.ADMIN;
  return (
    <div>
      <h1 className="text-center text-2xl pb-4">Admin Page</h1>
      <Login prelogin={authCookie} />
    </div>
  );
}
