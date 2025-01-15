import NewsList from "../components/Contents/news/NewsList";
import { getNewsList } from "../_libs/microcms";
import Sheet from "../components/utils/Sheet";
import LowerTitle from "../components/utils/LowerTitle";
import BreadCrumb from "../components/utils/BreadCrumb";

export const revalidate = 60;

export default async function Page() {
  const { contents: news } = await getNewsList();

  return (
    <Sheet>
      <LowerTitle title="NEWS" />
      <div className="mb-28">
        <BreadCrumb />
        <NewsList news={news} />
      </div>
    </Sheet>
  );
}
