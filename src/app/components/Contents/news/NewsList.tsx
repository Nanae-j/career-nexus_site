import { NewsType } from "@/app/_libs/microcms";
import Link from "next/link";
import Date from "../../utils/Date";
import clsx from "clsx";
import { MdOutlineArrowForward } from "react-icons/md";
import Image from "next/image";

interface NewsListProps {
  news: NewsType[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={clsx("mx-auto max-w-[500px]", "lg:max-w-none")}>
      {news.map((item) => (
        <li key={item.id} className={clsx("mb-10")}>
          <Link
            href={`/news/${item.id}`}
            className={clsx(
              "group",
              "block rounded-[0.65rem] bg-white p-6 duration-500",
              "lg:flex lg:min-h-[4.5rem] lg:items-center lg:justify-start lg:gap-x-[5%] lg:rounded-md lg:px-10",
              "hover:bg-black"
            )}
          >
            {item.thumbnail && (
              <div className="mx-auto mb-5 max-w-[200px]">
                <Image
                  src={item.thumbnail.url}
                  alt=""
                  width={320}
                  height={80}
                  className="mx-auto"
                  priority
                />
              </div>
            )}

            <span className="flex flex-grow items-center justify-between">
              <span className={clsx("lg:flex lg:gap-8")}>
                <Date date={item.publishedAt} />
                <span className="flex flex-grow items-center justify-between">
                  <span
                    className={clsx(
                      "font-kintoSans text-[min(4.27vw,1.3rem)] font-kintoSans-regular",
                      "group-hover:text-white"
                    )}
                  >
                    {item.title}
                  </span>
                </span>
              </span>
              <span className={clsx("h-5 w-5", "group-hover:text-white")}>
                <MdOutlineArrowForward className="h-full w-full" />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
