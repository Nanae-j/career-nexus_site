import clsx from "clsx";

import { formatDate } from "@/app/_libs/utils";

interface DateProps {
  date: string | undefined;
}

const Date = ({ date }: DateProps) => {
  return (
    <span
      className={clsx(
        "font-mundial font-mundial-light tracking-wide",
        "group-hover:text-white"
      )}
    >
      <data value={formatDate(date)}>{formatDate(date)}</data>
    </span>
  );
};

export default Date;
