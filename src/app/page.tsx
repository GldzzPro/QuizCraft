import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LogoutButton } from "./auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <nav>
      </nav>
       <LogoutButton/>
    </main>
  );
}
