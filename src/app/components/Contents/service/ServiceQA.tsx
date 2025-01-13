import clsx from "clsx";
import { IoPerson } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";

interface ServiceQAProps {
  question01: string;
  question02: string;
  answer: string;
}

const ServiceQA = ({ question01, question02, answer }: ServiceQAProps) => {
  return (
    <ul className={clsx()}>
      <li
        className={clsx(
          "relative mb-10 overflow-hidden rounded-xl bg-[#F9F1DB] px-5 py-10"
        )}
      >
        <div className="lg:flex lg:h-[100%] lg:items-center lg:justify-center">
          <div>
            <div className={clsx("mb-14")}>
              <p
                className={clsx(
                  "relative z-[1] mb-6 flex items-center gap-x-1 rounded-full border border-main-black p-4 text-[min(7vw,1.3rem)] font-kintoSans-medium tracking-wider text-main-black"
                )}
              >
                <span className={clsx("text-main-black")}>
                  <IoPerson />
                </span>
                <span>PROBLEM - 企業</span>
              </p>
              <p
                className={clsx(
                  "relative z-[1] text-[min(8vw,2rem)] font-kintoSans-medium leading-relaxed tracking-wide text-main-black"
                )}
              >
                {`“${question01}“`}
              </p>
            </div>
            <div className="mb-5">
              <p
                className={clsx(
                  "relative z-[1] mb-6 flex items-center gap-x-1 rounded-full border border-main-black p-4 text-[min(7vw,1.3rem)] font-kintoSans-medium tracking-wider text-main-black"
                )}
              >
                <span className={clsx("text-main-black")}>
                  <IoPerson />
                </span>
                <span>PROBLEM - 求職者</span>
              </p>
              <p
                className={clsx(
                  "relative z-[1] text-[min(8vw,2rem)] font-kintoSans-medium leading-relaxed tracking-wide text-main-black"
                )}
              >
                {`“${question02}“`}
              </p>
            </div>
          </div>
        </div>

        {/* <div
          className={clsx(
            "absolute-center absolute z-0 h-full w-full bg-[url('/images/service-question-sp.jpg')]"
          )}
        ></div> */}
      </li>
      {/* -- Answer -- */}
      <li
        className={clsx(
          "relative mb-10 overflow-hidden rounded-xl bg-[#F9F1DB] px-5 py-10"
        )}
      >
        <div className="lg:flex lg:h-[100%] lg:w-full lg:items-center lg:justify-center">
          <div className="lg:w-full">
            <p
              className={clsx(
                "relative z-[1] mb-6 flex items-center gap-x-1 rounded-full border border-white p-4 text-[min(7vw,1.3rem)] font-kintoSans-medium tracking-wider text-white"
              )}
            >
              <span>
                <FaRegLightbulb />
              </span>
              <span>ANSWER</span>
            </p>
            <p
              className={clsx(
                "relative z-[1] text-[min(8vw,2rem)] font-kintoSans-medium leading-relaxed tracking-wide text-white"
              )}
            >
              {answer}
            </p>
          </div>
        </div>
        <div
          className={clsx(
            "absolute-center absolute z-0 h-full w-full bg-[url('/images/service-answer-sp.jpg')]"
          )}
        ></div>
      </li>
    </ul>
  );
};

export default ServiceQA;
