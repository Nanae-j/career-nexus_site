import Image from "next/image";

import clsx from "clsx";

interface RollTextProps {
  title: string;
  color?:
    | `#${string & `${Uppercase<string>}${Uppercase<string>}${Uppercase<string>}`}`
    | `#${Uppercase<string>}`;
  images: string[];
}

const RollText = ({ title, color = "#FFFFFF", images }: RollTextProps) => {
  const render_ul = () => {
    const elements = [];
    for (let i = 0; i < 2; i++) {
      elements.push(
        <ul
          key={`${title}-${i}`}
          className={clsx("animate-text-01", "animate-roll-text flex gap-10")}
        >
          {images.map((item, index) => (
            <li
              key={`${title}-${i}-${index}`}
              className="flex items-center justify-start"
            >
              <p
                className={clsx(
                  "mr-10 font-mundial text-[min(17.07vw,6rem)] font-mundial-thin",
                  "lg:text-[6.5rem]",
                  color === "#FFFFFF" ? `text-white` : `text-[${color}]`
                )}
              >
                {title}
              </p>
              <div className="w-[232px]">
                <div className="relative top-[10px] overflow-hidden rounded-md pb-[37%]">
                  <Image
                    src={item}
                    alt={title}
                    width={232}
                    height={88}
                    className="absolute-center absolute w-full"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    return elements;
  };
  return (
    <div className="mb-10 w-full overflow-hidden">
      <div className={clsx("animate-roll", "flex gap-10 overflow-hidden")}>
        {render_ul()}
      </div>
    </div>
  );
};

export default RollText;
