import NewsList from "../components/Contents/news/NewsList";
import { getNewsList } from "../_libs/microcms";
import Sheet from "../components/utils/Sheet";
import LowerTitle from "../components/utils/LowerTitle";
import BreadCrumb from "../components/utils/BreadCrumb";

export const revalidate = 60;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

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
