// import Image from 'next/image';
import Link from "next/link";
import MenuLogo from "./Logos/MenuLogo";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
}

function HeaderNav() {
  const navItem: NavItem[] = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Service",
      href: "/service",
    },
    {
      label: "Company",
      href: "/company",
    },
    {
      label: "Member",
      href: "/member",
    },
    {
      label: "News",
      href: "/news",
    },
  ];

  return (
    <nav className="mx-1 flex-grow font-mundial text-sm font-mundial-demibold">
      <ul className="flex items-center justify-center">
        {navItem.map((item, index) => (
          <li key={index} className="px-[2.5%] py-5">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header className="fixed left-1/2 top-10 z-[999] w-[90%] -translate-x-1/2 transform rounded-[0.625rem] bg-black bg-opacity-30 text-white">
      <div className="flex items-center justify-between px-4 py-2 lg:px-10">
        <div className="w-36 min-w-[130px] max-w-[163px]">
          <MenuLogo />
        </div>

        <HeaderNav />

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
