import Top from "./components/Contents/(top)/Top";
import { getNewsList } from "./_libs/microcms";

export default async function Home() {
  const data = await getNewsList({ limit: 3 });
  return <Top news={data.contents} />;
}
