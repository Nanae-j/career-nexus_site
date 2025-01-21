import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

import { MdArrowForward } from "react-icons/md";
import clsx from "clsx";

import MenuLogo from "./Logos/MenuLogo";
import navItems from "./utils/NavItems";

const Footer = forwardRef<HTMLElement | null>((props, ref) => {
  const pathname = usePathname(); // 現在のパスを取得

  // 現在のパスがトップページでない場合にクラス名を変更
  const isNotTopPage = pathname !== "/";

  return (
    <footer
      ref={ref}
      className={clsx(
        "bg-[url('/images/footer-bg.jpg')] bg-cover bg-[center_bottom] pb-4 pt-40",
        "lg:pt-64",
        {
          "-mt-7": !isNotTopPage,
        }
      )}
    >
      <Link
        href="/contact"
        className={clsx(
          "group",
          "mx-auto mb-20 flex w-[84%] items-center justify-between",
          "lg:mb-40 lg:w-[70%]"
        )}
      >
        <span
          className={clsx(
            "font-mundial text-[min(17.066vw,4rem)] font-mundial-thin text-white duration-500",
            "lg:text-[5rem]",
            "group-hover:text-main-green"
          )}
        >
          Contact
        </span>
        <span
          className={clsx(
            "mt-[4%] aspect-square w-[8%] text-white duration-500",
            "lg:h-16 lg:w-16",
            "group-hover:text-main-green"
          )}
        >
          <MdArrowForward className="h-full w-full" />
        </span>
      </Link>

      <div
        className={clsx(
          "mx-auto w-[94%] rounded-[2.5rem] pt-16 backdrop-blur-sm",
          "lg:pt-32"
        )}
      >
        <div
          className={clsx(
            "mx-auto w-[90%]",
            "lg:flex lg:w-[71%] lg:items-start lg:justify-between lg:gap-x-14"
          )}
        >
          <Link
            href="/"
            className={clsx(
              "mb-11 block w-[47%] duration-700",
              "lg:mb-0 lg:w-[209px]",
              "hover:invert-[1]"
            )}
          >
            <MenuLogo />
          </Link>

          <div className={clsx("mb-8 flex-grow", "lg:mb-[8.8rem]")}>
            <ul
              className={clsx(
                "grid grid-cols-2 grid-rows-2 gap-y-6 text-left font-mundial text-lg font-mundial-light tracking-wide text-white",
                "lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-3 lg:gap-y-5"
              )}
            >
              {navItems.map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className={clsx("duration-500", "hover:text-main-green")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={clsx("mx-auto w-[95%]", "lg:w-[71%]")}>
          <div
            className={clsx(
              "w-full pb-10 text-white",
              "lg:flex lg:w-[51%] lg:items-center lg:justify-between"
            )}
          >
            <Link
              href="/privacy"
              className={clsx(
                "mb-10 inline-block font-kintoSans text-xs font-kintoSans-regular tracking-wide duration-500",
                "lg:order-1 lg:mb-0",
                "hover:text-main-green"
              )}
            >
              個人情報保護方針
            </Link>

            <p className="font-mundial text-sm font-mundial-light tracking-wide">
              &copy;2024 Career Nexus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

// displayNameを設定
Footer.displayName = "Footer";

export default Footer;
