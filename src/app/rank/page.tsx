import { getParticularDetailUser } from "@/repositories/user.repository";
import RankPage from "../_rank-page/rank-page";

export default async function RankPages() {
  const users = await getParticularDetailUser();
  return <RankPage user={users} />;
}
