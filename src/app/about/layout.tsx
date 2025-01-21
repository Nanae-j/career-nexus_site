"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import clsx from "clsx";
import Lenis from "lenis";
import gsap from "gsap";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <main className={clsx("mx-auto pt-32", "lg:pt-56")}>{children}</main>
      <Footer />
    </div>
  );
}
