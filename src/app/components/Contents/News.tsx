import Link from "next/link";

import clsx from "clsx";

import { MdOutlineArrowForward } from "react-icons/md";
import Button from "../utils/Button";

const News = () => {
  return (
    <section
      className={clsx("news-section", "bg-main-black pb-28", "lg:pb-60")}
    >
      <div className={clsx("relative z-[2] mx-auto w-[84%]", "lg:w-[75%]")}>
        <h2
          className={clsx(
            "mb-12 font-mundial text-[min(12.8vw,5rem)] font-mundial-thin text-white",
            "lg:mb-20 lg:text-[5rem]"
          )}
        >
          News
        </h2>
        <ul className={clsx("mb-12", "lg:mb-20")}>
          <li className={clsx("mb-10")}>
            <Link
              href="/news"
              className={clsx(
                "group",
                "block rounded-[0.65rem] bg-white p-6 duration-500",
                "lg:flex lg:min-h-[4.5rem] lg:items-center lg:justify-between lg:gap-x-[20%] lg:rounded-md lg:px-10",
                "hover:bg-black"
              )}
            >
              <span
                className={clsx(
                  "font-mundial font-mundial-light tracking-wide",
                  "group-hover:text-white"
                )}
              >
                <data value="2024.12.28">2024.12.28</data>
              </span>
              <span className="flex flex-grow items-center justify-between">
                <span
                  className={clsx(
                    "font-kintoSans text-base font-kintoSans-regular",
                    "group-hover:text-white"
                  )}
                >
                  社員インタビューを追加しました！
                </span>
                <span className={clsx("h-5 w-5", "group-hover:text-white")}>
                  <MdOutlineArrowForward className="h-full w-full" />
                </span>
              </span>
            </Link>
          </li>
        </ul>
        <div className="ml-auto flex w-[166px]">
          <Button href="/news" label="Read More" />
        </div>
      </div>
    </section>
  );
};

export default News;
