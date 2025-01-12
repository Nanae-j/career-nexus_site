import { getNewsDetail } from "@/app/_libs/microcms";
import BreadCrumb from "@/app/components/utils/BreadCrumb";
import LowerTitle from "@/app/components/utils/LowerTitle";
import Sheet from "@/app/components/utils/Sheet";

interface Props {
  params: {
    slug: string;
  };
}

export default async function page({ params }: Props) {
  const data = await getNewsDetail(params.slug);
  return (
    <Sheet>
      <LowerTitle title={data.title} />
      <div className="mb-28">
        <BreadCrumb customLabel={data.title} />
      </div>
    </Sheet>
  );
}
