import About from "./Contents/About";
import Fv from "./Contents/Fv";
import Logo from "./Logos/Logo";

import { useEffect, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Main = () => {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  });

  useGSAP(() => {
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".fv-section", // スクロールトリガーとなる要素
        start: "top top", // トリガーの開始位置
        end: "bottom top", // トリガーの終了位置
        markers: true,
        scrub: 1,
      },
    });

    scrollTL
      .to(".fv-logo", {
        scale: 0.63,
      })
      .to(".fv-logo", {
        y: "38%",
        ease: "power1.inOut",
      })
      .to(
        "#out-side-path",
        {
          fill: "#9AD5CD",
          fillOpacity: "0.2",
        },
        "<"
      )
      .to(
        "#middle-path",
        {
          fill: "#B4D0A9",
          fillOpacity: "0.2",
        },
        "<"
      )
      .to(
        "#inside-path",
        {
          fill: "#F8FFAA",
          fillOpacity: 0.18,
        },
        "<"
      );
  });

  return (
    <main className="relative">
      {/* 
      Logo
      z-index: 1; */}
      <Logo />
      {/* 
      FV
      - Noise
      z-index: 2;
      - heading1
      z-index: 3;
      */}
      <Fv />
      {/*
      ABOUT
      - Text Area
      z-index: 2;
      */}
      <About />
    </main>
  );
};

export default Main;
