import { forwardRef } from "react";

import clsx from "clsx";

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
          ? "absolute left-1/2 z-[1] w-full -translate-x-1/2"
          : ""
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1218 1201"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
      >
        <path
          filter="url(#b)"
          id="out-side-path"
          fill="#D53DFB"
          fillOpacity="0.5"
          style={{ willChange: "fill" }}
          d="M158.4 880.1c-160.7-257.4-79-574.6 180-736.4C483.6 53.1 676 37 833.7 104.3a35 35 0 0 1 18.3 45.3l-62 156.8a35 35 0 0 1-45.1 20.5c-93.3-36.9-186.5-45.4-283 14.8-147.3 92-178 257.5-87.2 402.8 90.7 145.3 253.6 191.7 401 99.7 88-54.8 131.9-136.6 142.1-246.9A36 36 0 0 1 956 564l166.5 12.4a35.6 35.6 0 0 1 33.1 36c-8.3 175.8-100.6 333.2-255.6 430-259.5 162-581.2 94.8-741.6-162.3"
        ></path>

        <g filter="url(#c)">
          <path
            id="middle-path"
            fill="#2E98A4"
            fillOpacity="0.5"
            d="M267.8 812c-119-190.6-58.5-425.5 133.3-545.3 107.5-67.1 250-79 366.8-29.2a26 26 0 0 1 13.5 33.5l-46 116.2a26 26 0 0 1-33.3 15.1c-69-27.3-138.1-33.6-209.5 11C383.5 481.4 360.8 604 428 711.5c67.1 107.6 187.8 142 297 73.9 65-40.7 97.6-101.2 105.1-182.9a26.7 26.7 0 0 1 28.3-24.6l123.3 9.1c13.8 1 25 12.8 24.5 26.7-6.1 130.2-74.5 246.7-189.3 318.4-192.1 120-430.3 70.2-549-120.1Z"
          ></path>
        </g>
        <g filter="url(#d)">
          <path
            id="inside-path"
            fill="#F8FFAA"
            fillOpacity="0.5"
            d="M335.4 769.9c-93.2-149.4-45.8-333.4 104.4-427.2a318.3 318.3 0 0 1 287.4-22.9 20.3 20.3 0 0 1 10.6 26.3l-36 91a20.3 20.3 0 0 1-26.2 11.8c-54-21.4-108.1-26.3-164 8.6C426 511 408.2 607 460.8 691.2 513.5 775.5 608 802.4 693.5 749c51-31.8 76.5-79.2 82.5-143.2a20.9 20.9 0 0 1 22.1-19.3l96.6 7.1c10.8.8 19.6 10 19.2 21-4.8 101.9-58.4 193.2-148.3 249.4-150.5 94-337.1 55-430.2-94.1"
          ></path>
        </g>
        <defs>
          <filter
            id="b"
            width="1218"
            height="1201"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_160_172"
              stdDeviation="40"
            ></feGaussianBlur>
          </filter>
          <filter
            id="c"
            width="959"
            height="950"
            x="126"
            y="126"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_160_172"
              stdDeviation="40"
            ></feGaussianBlur>
          </filter>
          <filter
            id="d"
            width="786"
            height="779"
            x="207"
            y="215"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_160_172"
              stdDeviation="40"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  )
);

// displayNameを設定
SvgIcon.displayName = "Logo";

export default SvgIcon;
