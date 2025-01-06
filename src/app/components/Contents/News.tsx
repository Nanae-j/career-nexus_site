import Link from "next/link";

import clsx from "clsx";

import { MdOutlineArrowForward } from "react-icons/md";
import Button from "../utils/Button";

const News = () => {
  return (
    <section className={clsx("news-section", "bg-main-black pb-60")}>
      <div className="relative z-[2] mx-auto w-[75%]">
        <h2 className="mb-20 font-mundial text-[5rem] font-mundial-thin text-white">
          News
        </h2>
        <ul className="mb-20">
          <li
            className={clsx(
              "group",
              "mb-10 rounded-md bg-white duration-500",
              "hover:bg-black"
            )}
          >
            <Link
              href="/news"
              className={clsx(
                "flex min-h-[4.5rem] items-center justify-between px-10"
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
