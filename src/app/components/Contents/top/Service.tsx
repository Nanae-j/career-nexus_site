"use client";

import { forwardRef } from "react";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import clsx from "clsx";

import Button from "../../utils/Button";
import CodingSVG from "../../utils/CodingSVG";
import ReceptionistSVG from "../../utils/ReceptionistSVG";
import FaceTimeSVG from "../../utils/FaceTimeSVG";
import RollText from "../../utils/RollText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Service = forwardRef<HTMLElement | null>((props, ref) => {
  const rolltext_images = [
    "/images/service-roll-img01.jpg",
    "/images/service-roll-img02.jpg",
    "/images/service-roll-img03.jpg",
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        small: "(max-width: 1279px)",
        medium: "(min-width: 1280px) and (max-width: 1399px)",
        large: "(min-width: 1400px)",
      },
      (ctx) => {
        if (ctx.conditions) {
          const { medium, large } = ctx.conditions;
          let startValue;

          if (medium) {
            startValue = "top+=20% top";
          } else if (large) {
            startValue = "top+=8% top";
          }

          if (medium || large) {
            // **** SERVICEからのアニメーション ****
            const SERVICE_scrollTL = gsap.timeline({
              scrollTrigger: {
                trigger: ".service-section",
                start: startValue,
                end: "bottom+=50% top",
                markers: false,
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
          }
        }
      }
    );
  });

  return (
    <section
      ref={ref}
      className={clsx("overflow-x-hidden bg-main-black pb-40", "xl:pb-[20%]")}
    >
      <div className={clsx("service-section", "md:min-h-[800px]")}>
        <div className={clsx("title-roll-area")}>
          <h2 className="sr-only">Service</h2>
          <RollText title="Service" images={rolltext_images} />
        </div>
        <div className="mx-auto w-[90%] max-w-[1440px]">
          <ul className={clsx("relative w-full", "xl:pb-[47%]")}>
            <li
              className={clsx(
                "service-item",
                "relative mb-20 flex min-h-[711px] w-full items-center justify-center overflow-hidden rounded-[1.3rem] bg-main-green px-6",
                "md:max-h-[90vh] md:min-h-0 md:p-8",
                "lg:p-20",
                "xl:absolute xl:left-1/2 xl:top-0 xl:z-[2] xl:-translate-x-1/2"
              )}
            >
              <div className="absolute-center absolute h-full w-full bg-[url('/images/noise-2.png')] opacity-20"></div>
              <p
                className={clsx(
                  "absolute left-6 top-8 z-[2] font-mundial text-base font-mundial-demibold text-white",
                  "md:left-10 md:top-10"
                )}
              >
                Service.01
              </p>
              <div
                className={clsx(
                  "relative z-[2] py-20",
                  "md:flex md:items-center md:justify-between"
                )}
              >
                <div
                  className={clsx(
                    "relative mb-10 w-full",
                    "md:order-1 md:w-[53%]"
                  )}
                >
                  <div
                    className={clsx(
                      "mx-auto aspect-square w-full max-w-[300px] rounded-2xl bg-white",
                      "md:absolute-center md:absolute md:aspect-auto md:max-w-none md:pb-[76.4705%]"
                    )}
                  >
                    <CodingSVG />
                  </div>
                </div>

                <div className={clsx("md:ml-[3%] md:w-[38%]")}>
                  <h3
                    className={clsx(
                      "mb-6 font-kintoSans text-[min(6.4vw,1.5rem)] font-kintoSans-medium leading-[180%] tracking-widest text-white",
                      "md:mb-8 xl:text-[2rem]"
                    )}
                  >
                    専門人材派遣
                  </h3>
                  <p
                    className={clsx(
                      "mb-10 text-[min(4vw,1.125rem)] font-kintoSans-medium leading-[240%] tracking-widest text-white *:font-kintoSans",
                      "md:mb-16 md:text-lg"
                    )}
                  >
                    企業には即戦力となる専門人材を、求職者にはスキルを最大限活かせる職場を。IT、クリエイティブの分野で、双方にとって最適なマッチングを実現します。
                  </p>
                  <div className="w-[166px]">
                    <Button href="/service#service01" label="Read More" />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={clsx(
                "service-item_2",
                "relative mb-20 flex min-h-[711px] w-full items-center justify-center overflow-hidden rounded-[1.3rem] bg-[#80AFC6] px-6",
                "md:max-h-[90vh] md:min-h-0 md:p-8",
                "lg:p-20",
                "xl:absolute xl:left-1/2 xl:top-0 xl:z-[2] xl:-translate-x-1/2"
              )}
            >
              <div className="absolute-center absolute h-full w-full bg-[url('/images/noise-2.png')] opacity-20"></div>
              <p
                className={clsx(
                  "absolute left-6 top-8 z-[2] font-mundial text-base font-mundial-demibold text-white",
                  "md:left-10 md:top-10"
                )}
              >
                Service.02
              </p>
              <div
                className={clsx(
                  "relative z-[2] py-20",
                  "md:flex md:items-center md:justify-between"
                )}
              >
                <div
                  className={clsx(
                    "relative mb-10 w-full",
                    "md:order-1 md:w-[53%]"
                  )}
                >
                  <div
                    className={clsx(
                      "mx-auto aspect-square w-full max-w-[300px] rounded-2xl bg-white",
                      "md:absolute-center md:absolute md:aspect-auto md:max-w-none md:pb-[76.4705%]"
                    )}
                  >
                    <ReceptionistSVG />
                  </div>
                </div>

                <div className={clsx("md:ml-[3%] md:w-[38%]")}>
                  <h3
                    className={clsx(
                      "mb-6 font-kintoSans text-[min(6.4vw,1.5rem)] font-kintoSans-medium leading-[180%] tracking-widest text-white",
                      "md:mb-8 xl:text-[2rem]"
                    )}
                  >
                    新卒・中途採用サポート
                  </h3>
                  <p
                    className={clsx(
                      "mb-10 text-[min(4vw,1.125rem)] font-kintoSans-medium leading-[240%] tracking-widest text-white *:font-kintoSans",
                      "md:mb-16 md:text-lg"
                    )}
                  >
                    企業には成長を支える新しい力を、求職者には理想のキャリアを。新卒からキャリアチェンジを目指す方まで、それぞれのニーズに合わせた採用支援を提供します。
                  </p>
                  <div className="w-[166px]">
                    <Button href="/service#service02" label="Read More" />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={clsx(
                "service-item_3",
                "relative mb-20 flex min-h-[711px] w-full items-center justify-center overflow-hidden rounded-[1.3rem] bg-[#888CCA] px-6",
                "md:max-h-[90vh] md:min-h-0 md:p-8",
                "lg:p-20",
                "xl:absolute xl:left-1/2 xl:top-0 xl:z-[2] xl:-translate-x-1/2"
              )}
            >
              <div className="absolute-center absolute h-full w-full bg-[url('/images/noise-2.png')] opacity-20"></div>
              <p
                className={clsx(
                  "absolute left-6 top-8 z-[2] font-mundial text-base font-mundial-demibold text-white",
                  "md:left-10 md:top-10"
                )}
              >
                Service.03
              </p>
              <div
                className={clsx(
                  "relative z-[2] py-20",
                  "md:flex md:items-center md:justify-between"
                )}
              >
                <div
                  className={clsx(
                    "relative mb-10 w-full",
                    "md:order-1 md:w-[53%]"
                  )}
                >
                  <div
                    className={clsx(
                      "mx-auto aspect-square w-full max-w-[300px] rounded-2xl bg-white",
                      "md:absolute-center md:absolute md:aspect-auto md:max-w-none md:pb-[76.4705%]"
                    )}
                  >
                    <FaceTimeSVG />
                  </div>
                </div>

                <div className={clsx("md:ml-[3%] md:w-[38%]")}>
                  <h3
                    className={clsx(
                      "mb-6 font-kintoSans text-[min(6.4vw,1.5rem)] font-kintoSans-medium leading-[180%] tracking-widest text-white",
                      "md:mb-8 xl:text-[2rem]"
                    )}
                  >
                    外国人材の雇用支援
                  </h3>
                  <p
                    className={clsx(
                      "mb-10 text-[min(4vw,1.125rem)] font-kintoSans-medium leading-[240%] tracking-widest text-white *:font-kintoSans",
                      "md:mb-16 md:text-lg"
                    )}
                  >
                    企業には国際的な競争力を、外国人求職者には安心して働ける環境を。ビザ取得、文化適応、生活サポートを通じて、多様性を活かした職場づくりをサポートします。
                  </p>
                  <div className="w-[166px]">
                    <Button href="/service#service03" label="Read More" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

// displayNameを設定
Service.displayName = "Service";

export default Service;
