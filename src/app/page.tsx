import Top from "./components/Contents/(top)/Top";
import { getNewsList } from "./_libs/microcms";

export default async function Home() {
  const TOP_NEWS_LIMIT = 3;

  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return <Top news={data.contents} />;
}
