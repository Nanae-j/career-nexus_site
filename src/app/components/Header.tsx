import Link from "next/link";

import clsx from "clsx";

import MenuLogo from "./Logos/MenuLogo";
import Button from "./utils/Button";
import navItems from "./utils/NavItems";

function Header() {
  return (
    <header
      className={clsx(
        "header",
        "fixed left-1/2 top-10 z-[999] w-[90%] -translate-x-1/2 transform rounded-md bg-black bg-opacity-30 text-white",
        "md:rounded-[0.625rem]"
      )}
    >
      <div
        className={clsx(
          "header-inner",
          "flex min-h-11 items-center justify-between px-4 py-2",
          "lg:px-10"
        )}
      >
        <Link
          href="/"
          className={clsx(
            "w-36 min-w-[130px] max-w-[163px] duration-700",
            "hover:invert-[1]"
          )}
        >
          <MenuLogo />
        </Link>

        <nav
          className={clsx(
            "mx-1 hidden flex-grow font-mundial text-sm font-mundial-demibold",
            "md:block"
          )}
        >
          <ul className="flex items-center justify-center">
            {navItems.map(({ label, href }, index) => (
              <li key={index} className="px-[2.5%] py-5">
                <Link href={href}>{label}</Link>
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

        <div className={clsx("w-6", "md:hidden")}>
          <button className={clsx("relative block h-5 w-full p-2")}>
            <span
              className={clsx(
                "absolute left-1/2 top-[0.35rem] block h-[1px] w-full -translate-x-1/2 bg-white"
              )}
            ></span>
            <span
              className={clsx(
                "absolute bottom-[0.35rem] left-1/2 block h-[1px] w-full -translate-x-1/2 bg-white"
              )}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
