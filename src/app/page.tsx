import Top from "./components/Contents/(top)/Top";
import { getMembersList, getNewsList } from "./_libs/microcms";

export default async function Home() {
  const TOP_NEWS_LIMIT = 3;

  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  const member_data = await getMembersList({ limit: 50 });

  return <Top news={data.contents} members={member_data.contents} />;
}
