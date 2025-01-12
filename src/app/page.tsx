import Top from "./components/Contents/(top)/Top";
import { getMembersList, getNewsList } from "./_libs/microcms";

export const revalidate = 0;

export default async function Home() {
  const TOP_NEWS_LIMIT = 3;

  const news_data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  const member_data = await getMembersList({ limit: 50 });

  return <Top news={news_data.contents} members={member_data.contents} />;
}
