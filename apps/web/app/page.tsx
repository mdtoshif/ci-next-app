
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      HAAN BHAI RAMZAN
      {user?.username}
    </div>
      BHABHI KAISI HAIIIII 
      {user?.password}
    </div>
  );
}
