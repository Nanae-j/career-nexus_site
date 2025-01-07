"use client";

import Image from "next/image";

import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Button from "../utils/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // **** ABOUTからのアニメーション ****
    const ABOUT_scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top+=20% top",
        end: "center top",
        // markers: true,
        scrub: 1.5,
      },
    });

    ABOUT_scrollTL.to(
      ".about-img-area",
      {
        width: "100%",
      },
      "<"
    ).to(
      ".about-img-area > div",
      {
        filter: "saturate(1)",
      },
      "<"
    );
    // **** ABOUTからのアニメーション ****
  });

  return (
    <section
      className={clsx(
        "about-section",
        "bg-main-black pb-20 pt-[7.5rem]",
        "lg:pb-[12.5rem] lg:pt-60"
      )}
    >
      <div>
        <div
          className={clsx(
            "relative z-[2] mx-auto mb-20 w-[84%] max-w-[1200px]",
            "lg:mb-[7.5rem] lg:w-[75%]"
          )}
        >
          <h2
            className={clsx(
              "mb-10 font-kintoSans text-[min(7.47vw,3rem)] font-kintoSans-medium leading-[180%] tracking-wider text-white",
              "lg:mb-12 lg:text-[2.5rem]"
            )}
          >
            キャリアの地図を、
            <br className="lg:hidden" />
            共に描く
          </h2>
          <p
            className={clsx(
              "mb-14 font-kintoSans text-base font-kintoSans-medium leading-[240%] tracking-wider text-white",
              "md:w-[48%] md:min-w-[520px]",
              "lg:mb-16 lg:text-lg lg:leading-[240%]"
            )}
          >
            私たちは、人材と企業をつなぐパートナーです。一人ひとりの可能性を最大限に引き出し、新しい働き方や挑戦の場を提供しています。個性や強みを活かせる環境で、自分らしく輝けるキャリアを。夢や目標に向かって一歩を踏み出すとき、私たちがそばで支えます。『あなたらしいキャリア』を一緒に見つけるお手伝いをさせてください。
          </p>
          <div className="w-[166px]">
            <Button href={"/about"} label={"Read More"} />
          </div>
        </div>

        <div
          className={clsx(
            "about-img-area",
            "relative z-[2] mx-auto w-[84%] overflow-hidden rounded-[1.3rem]",
            "lg:w-[80%]"
          )}
        >
          <div
            className={clsx(
              "relative w-full pb-[202%] saturate-[0.2] filter",
              "md:pb-[56.25%]"
            )}
          >
            <Image
              src="/images/about-bg.jpg"
              alt="キャリアの地図を、共に描く"
              width={1600}
              height={900}
              className={clsx(
                "absolute-center absolute h-full w-full object-cover"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
