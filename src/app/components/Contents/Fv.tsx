import clsx from "clsx";

import { TextSplitter } from "../utils/TextSplitter";

const Fv = () => {
  return (
    <section
      className={clsx(
        "fv-section",
        "flex h-screen animate-spin-gradient items-center justify-center bg-[rgb(27,196,125)] bg-fvGradient bg-[length:200%] bg-[25%_center]"
      )}
    >
      <div className="absolute left-1/2 top-0 h-screen w-full -translate-x-1/2 bg-slate-500 opacity-20"></div>
      <div className="absolute left-1/2 top-0 z-[2] h-screen w-full -translate-x-1/2 bg-[url('/images/noise.png')] opacity-20"></div>
      <h1
        className={clsx(
          "fv-heading",
          "absolute z-[3] text-center font-mundial text-8xl font-mundial-regular leading-[110%] text-white"
        )}
      >
        <span className="sr-only">Finding careers that satisfy everyone.</span>
        <TextSplitter
          text="Finding careers that satisfy everyone."
          lineBreakWords={["careers"]} // 改行ポイント
          className="fv-heading-word"
        />
      </h1>
    </section>
  );
};

export default Fv;
