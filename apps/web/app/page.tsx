
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      HAAN BHAI<b>RAMZAN</b> 
      {user?.username}
      <br> BHABHI KAISI HAIIIII </br>
      {user?.password}
    </div>
  );
}
