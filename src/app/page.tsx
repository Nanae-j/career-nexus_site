"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import clsx from "clsx";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const footerRef = useRef(null);
  const mainRef = useRef(null);

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
    const introTL = gsap.timeline();
    const WORD_ANIMATE_RANGE = 30;
    const COLORS = ["#2E98A4", "#D53DFB", "#F8FFAA"];

    const randomValue = () =>
      gsap.utils.random(-WORD_ANIMATE_RANGE, WORD_ANIMATE_RANGE, 1);

    introTL
      .set(".content-wrapper", {
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

    const footer_height = footerRef.current?.offsetHeight;
    const service_height = mainRef.current?.serviceRef?.offsetHeight;
    const member_height = mainRef.current?.memberRef?.offsetHeight;

    const end_height = footer_height + service_height + member_height;

    // FVのLOGOをbodyに追従
    gsap.to(".fv-logo", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: `bottom-=${end_height + end_height * 0.28}px bottom`,
        scrub: 1,
        markers: false,
        onUpdate: () => {
          const scrollY = window.scrollY;
          const LOGO_HEIGHT: number = mainRef.current?.logoRef.offsetHeight;

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
  });

  return (
    <div className={clsx("content-wrapper", "opacity-0")}>
      <Header />
      <Main ref={mainRef} />
      <Footer ref={footerRef} />
    </div>
  );
}
