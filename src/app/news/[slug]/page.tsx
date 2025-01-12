import { getNewsDetail } from "@/app/_libs/microcms";
import BreadCrumb from "@/app/components/utils/BreadCrumb";
import LowerTitle from "@/app/components/utils/LowerTitle";
import Sheet from "@/app/components/utils/Sheet";
import Date from "@/app/components/utils/Date";
import Category from "@/app/components/Contents/news/Category";
import NewsContent from "@/app/components/Contents/news/NewsContent";
import Image from "next/image";
interface Props {
  params: {
    slug: string;
  };
}

export default async function page({ params }: Props) {
  const data = await getNewsDetail(params.slug);
  return (
    <Sheet>
      <div className="mb-6 flex items-center gap-3">
        <Date date={data.publishedAt} />
        <div>
          <Category category={data.category} />
        </div>
      </div>
      <LowerTitle title={data.title} />
      <BreadCrumb customLabel={data.title} />
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
          priority
          className="rounded-md lg:rounded-2xl"
        />
      )}
      <div className="mb-28">
        <NewsContent html={data.content} />
      </div>
    </Sheet>
  );
}
