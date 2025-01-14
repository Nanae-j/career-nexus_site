"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import clsx from "clsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme/theme";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className={clsx("mx-auto w-[90%] max-w-[1600px] pt-32", "lg:pt-56")}
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
