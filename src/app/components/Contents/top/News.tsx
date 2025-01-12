"use client";

import Link from "next/link";
import { useRef } from "react";

import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { MdOutlineArrowForward } from "react-icons/md";
import Button from "../../utils/Button";
import { NewsType } from "@/app/_libs/microcms";
import Date from "../../utils/Date";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type NewsProps = {
  news: NewsType[];
};

const News = ({ news }: NewsProps) => {
  const newsRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!newsRef.current) return; // 要素が存在しない場合は終了

      const NEWS_scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: newsRef.current,
          start: "top bottom-=20%",
          end: "bottom bottom",
          markers: false,
        },
      });

      NEWS_scrollTL.from(".title", {
        opacity: 0,
        duration: 0.8,
        ease: "power4.in",
      })
        .from(
          ".list > li",
          {
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
            ease: "power4.in",
          },
          "-=0.5"
        )
        .from(
          ".button",
          {
            opacity: 0,
            duration: 0.8,
            ease: "power4.in",
          },
          "-=0.2"
        );
    },
    { scope: newsRef }
  );

  if (!news) {
    return null;
  }
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <section
      ref={newsRef}
      className={clsx("news-section", "bg-main-black pb-28", "lg:pb-60")}
    >
      <div className={clsx("relative z-[2] mx-auto w-[84%]", "lg:w-[75%]")}>
        <h2
          className={clsx(
            "title",
            "mb-12 font-mundial text-[min(12.8vw,5rem)] font-mundial-thin text-white",
            "lg:mb-20 lg:text-[5rem]"
          )}
        >
          News
        </h2>
        <ul className={clsx("list", "mb-12", "lg:mb-20")}>
          {news.map((article) => (
            <li key={article.id} className={clsx("mb-10")}>
              <Link
                href={`/news/${article.id}`}
                className={clsx(
                  "group",
                  "block rounded-[0.65rem] bg-white p-6 duration-500",
                  "lg:flex lg:min-h-[4.5rem] lg:items-center lg:justify-between lg:gap-x-[20%] lg:rounded-md lg:px-10",
                  "hover:bg-black"
                )}
              >
                <Date date={article.publishedAt} />
                <span className="flex flex-grow items-center justify-between">
                  <span
                    className={clsx(
                      "font-kintoSans text-base font-kintoSans-regular",
                      "group-hover:text-white"
                    )}
                  >
                    {article.title}
                  </span>
                  <span className={clsx("h-5 w-5", "group-hover:text-white")}>
                    <MdOutlineArrowForward className="h-full w-full" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={clsx("button", "ml-auto flex w-[166px]")}>
          <Button href="/news" label="Read More" />
        </div>
      </div>
    </section>
  );
};

export default News;
