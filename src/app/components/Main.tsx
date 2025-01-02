import About from "./Contents/About";
import Fv from "./Contents/Fv";
import Logo from "./Logos/Logo";

import { useEffect, useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Main = () => {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  });

  const logoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // スクロールアニメーション
    gsap.to(".fv-logo", {
      scrollTrigger: {
        trigger: "body", // アニメーションをトリガーする要素
        start: "top top", // アニメーション開始位置
        end: "bottom bottom", // アニメーション終了位置
        scrub: 1, // スクロールに合わせてアニメーションを進行
        markers: true, // 開始・終了のマーカーを表示 (開発用)
        onUpdate: () => {
          // スクロールアニメーションの進捗を使って何かを処理
          // const progress = self.progress; // アニメーションの進捗
          // console.log(`アニメーションの進捗: ${progress * 100}%`);
          const scrollY = window.scrollY;
          const LOGO_HEIGHT: number = logoRef.current?.offsetHeight ?? 0;

          console.log(scrollY - LOGO_HEIGHT * 0.2);
          gsap.to(".fv-logo", {
            y: scrollY - LOGO_HEIGHT * 0.2,
          });
        },
      },
    });

    // **** FVからのアニメーション ****
    const FV_scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".fv-section", // スクロールトリガーとなる要素
        start: "top top", // トリガーの開始位置
        end: "bottom top", // トリガーの終了位置
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

    // **** ABOUTからのアニメーション ****
    const ABOUT_scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section", // スクロールトリガーとなる要素
        start: "top+=20% top", // トリガーの開始位置
        end: "center top", // トリガーの終了位置
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
      ".about-img-area > img",
      {
        filter: "saturate(1)",
      },
      "<"
    );
    // **** ABOUTからのアニメーション ****
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
    </main>
  );
};

export default Main;
