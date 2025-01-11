import NewsList from "../components/Contents/(news)/NewsList";
import { getNewsList } from "../_libs/microcms";

export const revalidate = 60;

export default async function page() {
  const { contents: news } = await getNewsList();

  return (
    <div className="mx-auto max-w-[1150px]">
      <h2 className="mb-20 font-mundial text-4xl font-mundial-demibold">
        News
      </h2>
      <div className="mb-28">
        <NewsList news={news} />
      </div>
    </div>
  );
}
