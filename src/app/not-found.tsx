"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lenis from "lenis";
import gsap from "gsap";
import clsx from "clsx";

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex h-[80vh] w-full items-center justify-center">
        <div className="w-full px-4 text-center font-kintoSans leading-[240%] tracking-wider">
          <p
            className={clsx(
              "mb-5 text-[min(6.5vw,3rem)] font-kintoSans-medium",
              "lg:text-[2.5rem] lg:leading-[240%]"
            )}
          >
            ページが見つかりませんでした
          </p>
          <p>
            あなたがアクセスしようとしたページは存在しません。
            <br />
            URLをお確かめください。
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
