"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";

import About from "./Contents/About";
import Fv from "./Contents/Fv";
import Logo from "./Logos/Logo";
import News from "./Contents/News";
import Service from "./Contents/Service";
import Member from "./Contents/Member";

import { MainRef } from "./types";

// forwardRef の型をカスタム型として定義
const Main = forwardRef<MainRef | null>((props, ref) => {
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
      <News />
      <Service ref={serviceRef} />
      <Member ref={memberRef} />
    </main>
  );
});

// displayNameを設定
Main.displayName = "Main";

export default Main;
