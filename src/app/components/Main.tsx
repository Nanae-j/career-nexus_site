"use client";
import About from "./Contents/About";
import Fv from "./Contents/Fv";
import Logo from "./Logos/Logo";
import News from "./Contents/News";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Service from "./Contents/Service";
import Member from "./Contents/Member";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Main = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const total = 30 + 30 + 100;

  useGSAP(() => {
    // FVのLOGOをbodyに追従
    gsap.to(".fv-logo", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: `bottom-=${total}px bottom`,
        scrub: 1,
        markers: false,
        onUpdate: () => {
          const scrollY = window.scrollY;
          const LOGO_HEIGHT: number = logoRef.current?.offsetHeight ?? 0;

          gsap.to(".fv-logo", {
            y: scrollY - LOGO_HEIGHT * 0.2,
          });
        },
      },
    });

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
      scale: 0.63,
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
    // **** FVからのアニメーション ****
  });

  return (
    <main className="relative">
      {/* 
      Logo
      z-index: 1; */}
      <Logo ref={logoRef} />
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
      - img
      z-index: 2;
      */}
      <About />
      {/*
      NEWS
      - Heading & List Area
      z-index: 2;
      */}
      <News />
      <Service />
      <Member />
    </main>
  );
};

export default Main;
