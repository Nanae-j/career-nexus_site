import NewsList from "../components/Contents/(news)/NewsList";
import { getNewsList } from "../_libs/microcms";

export default async function page() {
  const { contents: news } = await getNewsList();
  return (
    <div>
      <h2>News</h2>
      <div>{JSON.stringify(news)}</div>
    </div>
  );
}
