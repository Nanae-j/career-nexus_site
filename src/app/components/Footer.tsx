import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import MenuLogo from "./Logos/MenuLogo";
import clsx from "clsx";

import { forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <footer
      ref={ref}
      className="-mt-7 bg-[url('/images/footer-bg.jpg')] bg-cover pb-4 pt-64"
    >
      <Link
        href="/contact"
        className={clsx(
          "group",
          "mx-auto mb-40 flex w-[70%] items-center justify-between"
        )}
      >
        <span className="font-mundial text-[5rem] font-mundial-thin text-white duration-500 group-hover:text-main-green">
          Contact
        </span>
        <span className="h-16 w-16 text-white duration-500 group-hover:text-main-green">
          <MdArrowForward className="h-full w-full" />
        </span>
      </Link>

      <div className="mx-auto w-[94%] rounded-[2.5rem] pt-32 backdrop-blur-sm">
        <div className="mx-auto flex w-[71%] items-start justify-between gap-x-7">
          <Link
            href="/"
            className="block w-[209px] duration-700 hover:invert-[1]"
          >
            <MenuLogo />
          </Link>

          <div className="mb-[8.8rem] flex-grow">
            <ul className="grid grid-cols-4 grid-rows-1 text-right font-mundial text-lg font-mundial-light tracking-wide text-white">
              <li>
                <Link
                  href="/about"
                  className="duration-500 hover:text-main-green"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="duration-500 hover:text-main-green"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/member"
                  className="duration-500 hover:text-main-green"
                >
                  Member
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="duration-500 hover:text-main-green"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto w-[71%]">
          <div className="flex w-[51%] items-center justify-between pb-10 text-white">
            <p className="font-mundial text-sm font-mundial-light tracking-wide">
              &copy;2024 Career Nexus
            </p>

            <Link
              href="/privacy"
              className="font-kintoSans text-xs font-kintoSans-regular tracking-wide duration-500 hover:text-main-green"
            >
              個人情報保護方針
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
