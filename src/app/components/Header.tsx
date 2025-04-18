"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import MenuLogo from "./Logos/MenuLogo";
import Button from "./utils/Button";
import navItems from "./utils/NavItems";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Header({ isOpen, setIsOpen }: HeaderProps) {
  const onClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const path = usePathname();

  return (
    <header
      className={clsx("header", "fixed top-10 z-[999] w-[100%] text-white")}
    >
      <div
        className={clsx(
          "header-inner",
          "mx-auto flex min-h-11 w-[90%] items-center justify-between rounded-md bg-black bg-opacity-30 px-4 py-2",
          "md:rounded-[0.625rem]",
          "lg:px-10"
        )}
      >
        <h1 className="w-36 min-w-[130px] max-w-[163px]">
          <span className="sr-only">Career Nexus</span>
          <Link href="/" className={clsx("duration-700", "hover:invert-[1]")}>
            <MenuLogo />
          </Link>
        </h1>

        <nav
          className={clsx(
            "mx-1 hidden flex-grow font-mundial text-sm font-mundial-demibold",
            "md:block"
          )}
        >
          <ul className="flex items-center justify-center">
            {navItems.map(({ label, href }, index) => (
              <li key={index} className="px-[2.5%] py-5">
                <Link
                  href={href}
                  className="duration-700 hover:text-main-green"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={clsx("hidden w-[126px]", "md:block")}>
          <Button
            linkType="internal"
            href="/contact"
            label="Contact"
            color="black"
            fontSize={15}
          />
        </div>

        <div className={clsx("5-5 h-5", "md:hidden")}>
          <button
            onClick={onClick}
            className={clsx(
              "relative flex h-full w-5 items-center justify-center"
            )}
          >
            <span
              className={clsx(
                "absolute block h-[1px] w-full bg-white duration-200",
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1"
              )}
            ></span>
            <span
              className={clsx(
                "absolute block h-[1px] w-full bg-white duration-200",
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-1"
              )}
            ></span>
          </button>
        </div>
      </div>

      <nav
        className={clsx(
          "sp-nav",
          "fixed left-auto h-[100vh] w-full bg-black bg-opacity-70 p-8 duration-200",
          isOpen ? "right-0" : "-right-[100%]",
          path != "/" ? "top-[6rem]" : "top-14"
        )}
      >
        <ul>
          {navItems.map(({ label, href }, index) => (
            <li key={index} className="px-[2.5%] py-5">
              <Link href={href} className="block w-full py-2">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
