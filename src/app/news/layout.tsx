"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mx-auto w-[90%] max-w-[1600px]">{children}</div>
      <Footer />
    </div>
  );
}
