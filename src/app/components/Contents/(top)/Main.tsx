"use client";

import { useRef, forwardRef, useImperativeHandle, Suspense } from "react";

import About from "./About";
import Fv from "./Fv";
import Logo from "../../Logos/Logo";
import News from "./News";
import Service from "./Service";
import Member from "./Member";

import { MainRef } from "../../types";
import { getNewsList, MemberType, NewsType } from "@/app/_libs/microcms";

type Props = {
  news: NewsType[];
  member: MemberType[];
};

// forwardRef の型をカスタム型として定義
const Main = forwardRef<MainRef, Props>(({ news, member }, ref) => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const memberRef = useRef<HTMLElement | null>(null);
  const serviceRef = useRef<HTMLElement | null>(null);
  const fvRef = useRef<HTMLElement | null>(null);

  // useImperativeHandleでMainの参照にカスタムオブジェクトを公開
  useImperativeHandle(ref, () => ({
    memberRef: memberRef.current,
    serviceRef: serviceRef.current,
    logoRef: logoRef.current,
    fvRef: fvRef.current,
  }));

  return (
    <main className="relative">
      <div className="absolute left-0 top-0 h-full w-full bg-[url('/images/noise-2.png')] bg-cover opacity-20"></div>
      {/* 
      Logo
      z-index: 1; */}
      <Logo ref={logoRef} className="fv-logo" />
      {/* 
      FV
      - Noise
      z-index: 2;
      - heading1
      z-index: 3;
      */}
      <Fv ref={fvRef} />
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
      <News news={news} />
      <Service ref={serviceRef} />
      <Member member={member} ref={memberRef} />
    </main>
  );
});

// displayNameを設定
Main.displayName = "Main";

export default Main;
