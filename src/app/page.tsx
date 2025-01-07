"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import clsx from "clsx";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import { MainRef } from "./components/types";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const footerRef = useRef<HTMLElement | null>(null);
  const mainRef = useRef<MainRef | null>(null);

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
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        small: "(max-width: 1024px)",
        large: "(min-width: 1025px)",
      },
      (ctx) => {
        if (ctx.conditions) {
          const { small } = ctx.conditions;
          const INTRO_TL = gsap.timeline();
          const WORD_ANIMATE_RANGE = 30;
          const COLORS = ["#2E98A4", "#D53DFB", "#F8FFAA"];
          const LOGO = mainRef.current?.logoRef;
          const FOOTER_HEIGHT = footerRef.current?.offsetHeight;
          const SERVICE_HEIGHT = mainRef.current?.serviceRef?.offsetHeight;
          const MEMBER_HEIGHT = mainRef.current?.memberRef?.offsetHeight;

          let fv_height: number = 0;
          let logo_height: number = 0;
          let end_height: number = 0;

          if (FOOTER_HEIGHT && SERVICE_HEIGHT && MEMBER_HEIGHT) {
            end_height = FOOTER_HEIGHT + SERVICE_HEIGHT + MEMBER_HEIGHT;
          } else {
            console.error("end_hight is null or undefined.");
          }

          if (mainRef.current?.fvRef) {
            fv_height = mainRef.current?.fvRef?.offsetHeight;
          } else {
            console.error("fv_height is null or undefined.");
          }

          if (mainRef.current?.logoRef) {
            logo_height = mainRef.current.logoRef.offsetHeight;
          } else {
            console.error("logo_height is null or undefined.");
          }

          const randomValue = () =>
            gsap.utils.random(-WORD_ANIMATE_RANGE, WORD_ANIMATE_RANGE, 1);

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
            );

          gsap.set(".fv-logo", {
            top: fv_height / 2 - logo_height / 2,
          });

          // **** FVのロゴをbodyに追従 ****
          gsap.to(".fv-logo", {
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: `bottom-=${end_height + end_height * 0.35}px bottom`,
              scrub: 1,
              markers: false,
            },
          });
          // **** FVのロゴをbodyに追従 ****

          // **** FVからのアニメーション ****
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
          })
            .to(
              ".fv-logo #out-side-path",
              {
                fill: "#9AD5CD",
                fillOpacity: "0.2",
              },
              "<"
            )
            .to(
              ".fv-logo #middle-path",
              {
                fill: "#B4D0A9",
                fillOpacity: "0.2",
              },
              "<"
            )
            .to(
              ".fv-logo #inside-path",
              {
                fill: "#F8FFAA",
                fillOpacity: 0.18,
              },
              "<"
            );
          // **** FVからのアニメーション ****
        }
      }
    );
  });

  return (
    <div className={clsx("content-wrapper", "opacity-0")}>
      <Header />
      <Main ref={mainRef} />
      <Footer ref={footerRef} />
    </div>
  );
}
