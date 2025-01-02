"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  // ****** GSAPのプラグイン登録 *******
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  });
  // ****** GSAPのプラグイン登録 *******

  useGSAP(() => {
    const introTL = gsap.timeline();
    const WORD_ANIMATE_RANGE = 30;
    const COLORS = ["#2E98A4", "#D53DFB", "#F8FFAA"];

    const randomValue = () =>
      gsap.utils.random(-WORD_ANIMATE_RANGE, WORD_ANIMATE_RANGE, 1);

    introTL
      .set(".fv-section", {
        opacity: 1,
      })
      .set(".fv-heading-word > span", {
        x: randomValue,
        y: randomValue,
        rotation: randomValue,
        opacity: 0,
        color: () => gsap.utils.random(COLORS),
      })
      .to(".fv-heading-word > span", {
        x: 0,
        y: 0,
        rotation: 0,
        delay: 0.3,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.03,
      })
      .to(
        ".fv-heading-word > span",
        {
          opacity: 1,
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
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
