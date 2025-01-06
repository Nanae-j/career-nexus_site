"use client";
import Image from "next/image";
import Button from "../utils/Button";
import clsx from "clsx";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

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
      className={clsx("about-section", "bg-main-black pb-[12.5rem] pt-60")}
    >
      <div>
        <div className="relative z-[2] mx-auto mb-[7.5rem] w-[75%] max-w-[1200px]">
          <h2 className="mb-12 font-kintoSans text-[2.5rem] font-kintoSans-medium leading-[180%] tracking-wider text-white">
            キャリアの地図を、
            <br className="md:hidden" />
            共に描く
          </h2>
          <p className="mb-16 font-kintoSans font-kintoSans-medium leading-[240%] tracking-wider text-white md:w-[48%] md:min-w-[520px]">
            私たちは、人材と企業をつなぐパートナーです。一人ひとりの可能性を最大限に引き出し、新しい働き方や挑戦の場を提供しています。個性や強みを活かせる環境で、自分らしく輝けるキャリアを。夢や目標に向かって一歩を踏み出すとき、私たちがそばで支えます。『あなたらしいキャリア』を一緒に見つけるお手伝いをさせてください。
          </p>
          <div className="w-[166px]">
            <Button href={"/about"} label={"Read More"} />
          </div>
        </div>

        <div
          className={clsx(
            "about-img-area",
            "relative z-[2] mx-auto w-[80%] overflow-hidden rounded-[1.3rem]"
          )}
        >
          <div className="relative w-full pb-[56.25%] saturate-[0.2] filter">
            <Image
              src="/images/about-bg.jpg"
              alt="キャリアの地図を、共に描く"
              width={1600}
              height={900}
              className="absolute-center absolute w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
