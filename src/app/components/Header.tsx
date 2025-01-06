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
        "fixed left-1/2 top-10 z-[999] w-[90%] -translate-x-1/2 transform rounded-[0.625rem] bg-black bg-opacity-30 text-white"
      )}
    >
      <div
        className={clsx(
          "header-inner",
          "flex items-center justify-between px-4 py-2",
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

        <nav className="mx-1 flex-grow font-mundial text-sm font-mundial-demibold">
          <ul className="flex items-center justify-center">
            {navItems.map(({ label, href }, index) => (
              <li key={index} className="px-[2.5%] py-5">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-[126px]">
          <Button
            linkType="internal"
            href="/contact"
            label="Contact"
            color="black"
            fontSize={15}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
