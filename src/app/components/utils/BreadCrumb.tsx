"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadCrumbProps {
  customLabel?: string;
}

const BreadCrumb = ({ customLabel }: BreadCrumbProps) => {
  // パスを取得して分割
  const pathname = usePathname(); // 動的ではなく静的ページなので直接指定
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // カスタムラベルマッピング
  const labelMapping: Record<string, string> = {
    news: "News",
    about: "About Us",
    contact: "Contact",
    products: "Products",
    category: "Category",
  };

  // パンくずデータを生成
  const breadcrumbs = pathSegments.map((segment, index) => {
    const isLastSegment = index === pathSegments.length - 1;
    return {
      label:
        isLastSegment && customLabel
          ? customLabel
          : labelMapping[segment] ||
            segment.charAt(0).toUpperCase() + segment.slice(1),
      href: "/" + pathSegments.slice(0, index + 1).join("/"),
    };
  });

  // TOP を追加
  breadcrumbs.unshift({ label: "TOP", href: "/" });

  console.log(breadcrumbs);

  return (
    <ul
      className={clsx(
        "mb-5 flex flex-wrap items-center gap-2 font-mundial text-xs font-mundial-regular text-main-black",
        "lg:mb-8 lg:text-base"
      )}
    >
      {breadcrumbs.map((crumb, index) => (
        <li key={crumb.href} className="flex items-center">
          {index !== 0 && <span className="mx-2">＞</span>}
          {index === breadcrumbs.length - 1 ? (
            <span className={clsx("w-40 truncate text-main-green", "lg:w-52")}>
              {crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="duration-700 hover:text-main-green"
            >
              {crumb.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumb;
