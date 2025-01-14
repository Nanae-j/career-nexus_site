"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import clsx from "clsx";

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={clsx("mx-auto w-[90%] max-w-[1600px] pt-32", "lg:pt-56")}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
