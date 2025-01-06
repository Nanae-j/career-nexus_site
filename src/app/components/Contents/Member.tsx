"use client";

import { forwardRef } from "react";
import Image from "next/image";

import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import RollText from "../utils/RollText";
import { members } from "../utils/MemberList";
import Logo from "../Logos/Logo";
import Button from "../utils/Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Member = forwardRef<HTMLElement | null>((props, ref) => {
  const rolltext_images = [
    "/images/member-roll-img01.jpg",
    "/images/member-roll-img02.jpg",
    "/images/member-roll-img03.jpg",
  ];

  useGSAP(() => {
    // **** MEMEBERからのアニメーション ****
    const MEMEBER_scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".member-section",
        start: "top+=10% top",
        end: "bottom top",
        markers: false,
        scrub: 1,
      },
    });

    MEMEBER_scrollTL.to(".member-list", {
      y: "-20%",
    });

    const colorTL = gsap.timeline();

    colorTL
      .to(".member-logo #out-side-path", {
        fill: "#9AD5CD",
        fillOpacity: "0.2",
        repeat: -1,
        duration: 5,
        yoyo: true,
      })
      .to(
        ".member-logo #middle-path",
        {
          fill: "#B4D0A9",
          fillOpacity: "0.2",
          repeat: -1,
          duration: 5,
          yoyo: true,
        },
        "<"
      )
      .to(
        ".member-logo #inside-path",
        {
          fill: "#F8FFAA",
          fillOpacity: 0.18,
          repeat: -1,
          duration: 5,
          yoyo: true,
        },
        "<"
      );

    // **** SERVICEからのアニメーション ****
  });

  return (
    <section
      ref={ref}
      className={clsx(
        "member-section",
        "relative z-[2] -mt-9 rounded-[1.9rem] bg-white py-[12.5rem]"
      )}
    >
      <RollText title="Member" color="#000000" images={rolltext_images} />
      <div className="relative mx-auto w-[95%] overflow-hidden rounded-[1.2rem] bg-main-black">
        <div className="absolute -left-[10%] -top-[10%] w-[67%]">
          <Logo className="member-logo" />
        </div>
        <div className="relative w-full pb-[57%]">
          <div className="bg-memberFilter absolute-center absolute z-[2] w-full pb-[57%] opacity-80"></div>
          <div className="absolute -right-[8%] left-auto top-1/2 ml-auto w-[75%] -translate-y-1/2 -rotate-12">
            <ul
              className={clsx(
                "member-list",
                "grid grid-cols-4 grid-rows-4 gap-2"
              )}
            >
              {members.map((item, index) => (
                <li key={index}>
                  <div className="relative overflow-hidden rounded-xl pb-[133%]">
                    <Image
                      src={item}
                      alt=""
                      width={284}
                      height={379}
                      className="absolute-center absolute w-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute left-[10%] top-1/2 z-[3] w-[440px] -translate-y-1/2">
          <h3 className="mb-8 font-kintoSans text-[2rem] font-kintoSans-medium leading-[180%] tracking-widest text-white">
            一人ひとりが企業と
            <br />
            求職者をつなぐ架け橋
          </h3>
          <p className="mb-16 font-kintoSans text-lg font-kintoSans-medium leading-[240%] tracking-widest text-white">
            私たちのチームは、業界経験豊富なプロフェッショナルと、柔軟な発想で新しい価値を生み出す若手メンバーで構成されています。企業と求職者が共に成長できる未来をつくるため、一人ひとりが情熱を持って取り組んでいます。
          </p>
          <div className="w-[166px]">
            <Button href="/member" label="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Member;
