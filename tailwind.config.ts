import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mundial: ["mundial, sans-serif"],
        kintoSans: ["kinto-sans, sans-serif"],
      },
      fontWeight: {
        "mundial-thin": "100",
        "mundial-light": "300",
        "mundial-regular": "400",
        "mundial-demibold": "600",
        "kintoSans-regular": "400",
        "kintoSans-medium": "500",
      },
      colors: {
        main: {
          green: "#93CA88",
          black: "#313131",
        },
      },
      transitionTimingFunction: {
        buttonHover: "cubic-bezier(.15,-0.05,.98,0)",
      },
      backgroundImage: {
        fvGradient:
          "radial-gradient(circle, rgba(27,196,125,1) 38%, rgba(24,160,251,1) 55%, rgba(144,124,255,1) 70%)",
      },
      animation: {
        "spin-gradient": "spin-gradient 20s linear infinite",
        "roll-text": "roll-text 20s linear infinite",
      },
      keyframes: {
        "spin-gradient": {
          "0%": {
            backgroundPosition: "25% center",
            // backgroundSize: "200%",
          },
          "50%": {
            backgroundPosition: "-50% center",
            // backgroundSize: "100%",
          },
          "100%": {
            backgroundPosition: "25% center",
            // backgroundSize: "200%",
          },
        },
        "roll-text": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-102%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
