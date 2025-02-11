"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import clsx from "clsx";
import Lottie from "lottie-react";
import openingAnime from "../../../../../public/images/opening.json";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Main from "@/app/components/Contents/top/Main";

import { MainRef } from "@/app/components/types";
import { MemberType, NewsType } from "@/app/_libs/microcms";

gsap.registerPlugin(useGSAP);

type Props = {
  news: NewsType[];
  members: MemberType[];
};

export default function Top({ news, members }: Props) {
  const footerRef = useRef<HTMLElement | null>(null);
  const mainRef = useRef<MainRef | null>(null);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [isLottieRendered, setIsLottieRendered] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  // const [isCompleteOpening, setIsCompleteOpening] = useState(false);

  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();
    // ****** GSAPのプラグイン登録 *******

    // ******
    // Lenisのプラグイン登録(gsapのscrollTriggerと連携)
    // *******

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
    // ******
    // Lenisのプラグイン登録(gsapのscrollTriggerと連携)
    // *******

    setIsLottieRendered(true);
    setIsRendered(true);
  }, []);

  useGSAP(() => {
    if (isRendered) {
      const mm = gsap.matchMedia();

      mm.add(
        {
          small: "(max-width: 768px)",
          large: "(min-width: 769px)",
        },
        (ctx) => {
          if (ctx.conditions) {
            const { small } = ctx.conditions;

            // **** イントロアニメーション ****
            const WORD_ANIMATE_RANGE = 30;
            const COLORS = ["#2E98A4", "#D53DFB", "#F8FFAA"];

            const randomValue = () =>
              gsap.utils.random(-WORD_ANIMATE_RANGE, WORD_ANIMATE_RANGE, 1);

            const INTRO_TL = gsap.timeline();

            INTRO_TL.set(".content-wrapper", {
              opacity: 1,
            })
              .set(".fv-heading-word > span", {
                x: randomValue,
                y: randomValue,
                rotation: randomValue,
                filter: "blur(5px)",
                opacity: 0,
                color: () => gsap.utils.random(COLORS),
              })
              .to(".opening-div", {
                opacity: 0,
                pointerEvents: "none",
                delay: 3, // 3秒後にアニメーションが開始される
              })
              .to(".fv-heading-word > span", {
                x: 0,
                y: 0,
                rotation: 0,
                delay: 0.3,
                duration: 1.2,
                ease: "power1.out",
                stagger: 0.03,
              })
              .to(
                ".fv-heading-word > span",
                {
                  opacity: 1,
                  filter: "blur(0px)",
                  color: "#fff",
                  duration: 1.8,
                  ease: "sine.out",
                  stagger: 0.03,
                },
                "<"
              )
              .from(".header", {
                y: -10,
                opacity: 0,
                duration: 0.5,
                ease: "power4.out",
              })
              .from(
                ".header-inner",
                {
                  opacity: 0,
                },
                "-=0.2"
              )
              .from(
                ".sp-contact-button",
                {
                  opacity: 0,
                  duration: 1,
                  ease: "power4.out",
                },
                "-=0.2"
              );
            // **** イントロアニメーション ****

            // **** FVからスクロールでロゴのスケールとカラーチェンジ ****
            const FV_scrollTL = gsap.timeline({
              scrollTrigger: {
                trigger: ".fv-section",
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
              },
            });

            FV_scrollTL.to(".fv-logo", {
              scale: small ? 1 : 0.63,
            }).to(
              ".logo-vector-normal",
              {
                opacity: 0,
              },
              "<"
            );
            // **** FVからスクロールでロゴのスケールとカラーチェンジ ****
          }
        }
      );
    }
  }, [isRendered]);

  useGSAP(
    (context, contextSafe) => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          mobile: "(max-width: 1023px)",
          tablet: "(max-width: 1024px) and (min-height: 800px)",
          small: "(min-width: 1024px) and (max-width: 1279px)",
          medium: "(min-width: 1280px) and (max-width: 1399px)",
          large: "(min-width: 1400px)",
        },
        (ctx) => {
          if (ctx.conditions) {
            const { mobile, tablet, small, medium, large } = ctx.conditions;
            // **** ロゴ追従アニメーション ****
            const FOOTER_HEIGHT = footerRef.current?.offsetHeight;
            const SERVICE_HEIGHT = mainRef.current?.serviceRef?.offsetHeight;
            const MEMBER_HEIGHT = mainRef.current?.memberRef?.offsetHeight;
            const FV_HEIGHT = mainRef.current?.fvRef?.offsetHeight;
            const LOGO_HEIGHT = mainRef.current?.logoRef?.offsetHeight;

            let fv_height: number = 0;
            let logo_height: number = 0;
            let end_height: number = 0;

            if (FOOTER_HEIGHT && SERVICE_HEIGHT && MEMBER_HEIGHT) {
              end_height = FOOTER_HEIGHT + SERVICE_HEIGHT + MEMBER_HEIGHT;
            } else {
              console.error("end_hight is null or undefined.");
            }

            let endValue: string = "";

            if (mobile) {
              endValue = `bottom-=${end_height}px center+=15%`;
            } else if (tablet) {
              endValue = `bottom-=${end_height}px center+=15%`;
            } else if (small) {
              endValue = `bottom-=${end_height}px bottom`;
            } else if (medium) {
              endValue = `bottom-=${end_height + end_height * 0.25}px bottom`;
            } else if (large) {
              endValue = `bottom-=${end_height + end_height * 0.25}px bottom`;
            }

            if (FV_HEIGHT) {
              fv_height = FV_HEIGHT;
            } else {
              console.error("fv_height is null or undefined.");
            }

            if (LOGO_HEIGHT) {
              logo_height = LOGO_HEIGHT;
            } else {
              console.error("logo_height is null or undefined.");
            }

            const LOGO_SCROLL_TL = gsap.timeline();

            LOGO_SCROLL_TL.set(".fv-logo", {
              top: fv_height / 2 - logo_height / 2,
            }).to(".fv-logo", {
              // **** FVのロゴをbodyに追従 ****
              scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: endValue,
                scrub: 1,
                markers: false,
                onUpdate: () => {
                  const scrollY = window.scrollY;

                  gsap.to(".fv-logo", {
                    y: scrollY,
                  });
                },
              },
            });
            // **** ロゴ追従アニメーション ****

            // リサイズイベントのリスナーを設定
            let handleResize: () => void = () => {
              console.warn(
                "handleResize is not set because contextSafe is undefined."
              );
            };

            if (contextSafe) {
              handleResize = contextSafe(() => {
                setWindowWidth(window.innerWidth);
                setWindowHeight(window.innerHeight);

                LOGO_SCROLL_TL.set(".fv-logo", {
                  top: fv_height / 2 - logo_height / 2,
                }).to(".fv-logo", {
                  // **** FVのロゴをbodyに追従 ****
                  scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: endValue,
                    scrub: 1,
                    markers: false,
                    onUpdate: () => {
                      const scrollY = window.scrollY;

                      gsap.to(".fv-logo", {
                        y: scrollY,
                      });
                    },
                  },
                });
                // **** ロゴ追従アニメーション ****
              });
            } else {
              console.log(
                "contextSafe is undefined. Resize handler is not set."
              );
            }

            // リサイズ時のイベントリスナーを追加
            window.addEventListener("resize", handleResize);

            // クリーンアップ
            return () => {
              window.removeEventListener("resize", handleResize);
            };
          }
        }
      );
    },
    { dependencies: [windowHeight, windowWidth] }
  );

  return (
    <>
      <div
        className={clsx(
          "opening-div",
          "fixed left-0 top-0 z-[1000] h-full w-full bg-main-black"
        )}
      >
        {isLottieRendered && (
          <p
            className={clsx(
              "opening-text",
              "absolute font-mundial text-[min(7.47vw,3rem)] font-mundial-demibold text-white absolute-center",
              "lg:text-[2.5rem]"
            )}
          >
            Career Nexus
          </p>
        )}
        <Lottie animationData={openingAnime} className="h-full" />
      </div>
      <div className={clsx("content-wrapper", "opacity-0")}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Main news={news} members={members} ref={mainRef} />
        <Footer ref={footerRef} />
      </div>
    </>
  );
}
