import { forwardRef } from "react";

import clsx from "clsx";
import Image from "next/image";

interface SvgIconProps {
  className?: string;
}

const SvgIcon = forwardRef<HTMLDivElement, SvgIconProps>(
  ({ className }, ref) => (
    <div
      ref={ref}
      style={{ willChange: "transform" }}
      className={clsx(
        className,
        className == "fv-logo"
          ? "absolute left-1/2 z-[1] h-[150vh] w-full -translate-x-1/2 overflow-hidden"
          : ""
      )}
    >
      <Image
        src="/images/logo-vector-normal-1.png"
        alt=""
        width={500}
        height={500}
        sizes="(max-width: 768px) 50vw, 25vw"
        priority
        className={clsx(
          "logo-vector-normal",
          "absolute h-full w-full max-w-[1000px] object-contain absolute-center"
        )}
      />
      <Image
        src="/images/logo-vector-change-1.png"
        alt=""
        width={500}
        height={500}
        sizes="(max-width: 768px) 50vw, 25vw"
        className={clsx(
          "logo-vector-change",
          "absolute h-full w-full max-w-[1000px] object-contain absolute-center"
        )}
      />
    </div>
  )
);

// displayNameを設定
SvgIcon.displayName = "Logo";

export default SvgIcon;
