export interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Service",
    href: "/service",
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

export default navItems;
