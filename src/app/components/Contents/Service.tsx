"use client";

import Button from "../utils/Button";
import CodingSVG from "../utils/CodingSVG";
import clsx from "clsx";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ReceptionistSVG from "../utils/ReceptionistSVG";
import FaceTimeSVG from "../utils/FaceTimeSVG";
import RollText from "../utils/RollText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Service = () => {
  useGSAP(() => {
    // **** SERVICEからのアニメーション ****
    const SERVICE_scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-section",
        start: "top+=10% top",
        end: "bottom+=50% top",
        markers: true,
        pin: true,
        scrub: 1,
      },
    });

    SERVICE_scrollTL.from(".service-item_2", {
      y: "180%",
      rotation: 30,
    }).from(".service-item_3", {
      y: "180%",
      rotation: 30,
    });

    // **** SERVICEからのアニメーション ****
  });

  return (
    <section className={clsx("bg-main-black")}>
      <div className="service-section min-h-[800px]">
        <div className={clsx("title-roll-area")}>
          <h2 className="sr-only">Service</h2>
          <RollText />
        </div>
        <ul className="relative mx-auto w-[90%] max-w-[1440px]">
          <li
            className={clsx(
              "service-item",
              "absolute left-1/2 top-0 z-[2] mb-20 flex min-h-[680px] w-full -translate-x-1/2 items-center justify-center overflow-hidden rounded-[1.3rem] bg-main-green p-20"
            )}
          >
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[url('/images/noise.png')] opacity-20"></div>
            <p className="absolute left-10 top-10 z-[2] font-mundial text-base font-mundial-demibold text-white">
              Service.01
            </p>
            <div className="relative z-[2] flex items-center justify-between">
              <div className="ml-[3%] w-[38%]">
                <h3 className="mb-8 font-kintoSans text-[2rem] font-kintoSans-medium leading-[180%] tracking-widest text-white">
                  専門人材派遣
                </h3>
                <p className="mb-16 font-kintoSans text-lg font-kintoSans-medium leading-[240%] tracking-widest text-white">
                  企業には即戦力となる専門人材を、求職者にはスキルを最大限活かせる職場を。IT、クリエイティブの分野で、双方にとって最適なマッチングを実現します。
                </p>
                <div className="w-[166px]">
                  <Button href="/service" label="Read More" />
                </div>
              </div>

              <div className="relative w-[53%]">
                <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white pb-[76.4705%]">
                  <CodingSVG />
                </div>
              </div>
            </div>
          </li>
          <li
            className={clsx(
              "service-item_2",
              "absolute left-1/2 top-0 z-[2] mb-20 flex min-h-[680px] w-full -translate-x-1/2 items-center justify-center overflow-hidden rounded-[1.3rem] bg-[#80AFC6] p-20"
            )}
          >
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[url('/images/noise.png')] opacity-20"></div>
            <p className="absolute left-10 top-10 z-[2] font-mundial text-base font-mundial-demibold text-white">
              Service.02
            </p>
            <div className="relative z-[2] flex items-center justify-between">
              <div className="ml-[3%] w-[38%]">
                <h3 className="mb-8 font-kintoSans text-[2rem] font-kintoSans-medium leading-[180%] tracking-widest text-white">
                  新卒・中途採用サポート
                </h3>
                <p className="mb-16 font-kintoSans text-lg font-kintoSans-medium leading-[240%] tracking-widest text-white">
                  企業には成長を支える新しい力を、求職者には理想のキャリアを。新卒からキャリアチェンジを目指す方まで、それぞれのニーズに合わせた採用支援を提供します。
                </p>
                <div className="w-[166px]">
                  <Button href="/service" label="Read More" />
                </div>
              </div>

              <div className="relative w-[53%]">
                <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white pb-[76.4705%]">
                  <ReceptionistSVG />
                </div>
              </div>
            </div>
          </li>
          <li
            className={clsx(
              "service-item_3",
              "absolute left-1/2 top-0 z-[2] mb-20 flex min-h-[680px] w-full -translate-x-1/2 items-center justify-center overflow-hidden rounded-[1.3rem] bg-[#888CCA] p-20"
            )}
          >
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[url('/images/noise.png')] opacity-20"></div>
            <p className="absolute left-10 top-10 z-[2] font-mundial text-base font-mundial-demibold text-white">
              Service.03
            </p>
            <div className="relative z-[2] flex items-center justify-between">
              <div className="ml-[3%] w-[38%]">
                <h3 className="mb-8 font-kintoSans text-[2rem] font-kintoSans-medium leading-[180%] tracking-widest text-white">
                  外国人材の雇用支援
                </h3>
                <p className="mb-16 font-kintoSans text-lg font-kintoSans-medium leading-[240%] tracking-widest text-white">
                  企業には国際的な競争力を、外国人求職者には安心して働ける環境を。ビザ取得、文化適応、生活サポートを通じて、多様性を活かした職場づくりをサポートします。
                </p>
                <div className="w-[166px]">
                  <Button href="/service" label="Read More" />
                </div>
              </div>

              <div className="relative w-[53%]">
                <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white pb-[76.4705%]">
                  <FaceTimeSVG />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
