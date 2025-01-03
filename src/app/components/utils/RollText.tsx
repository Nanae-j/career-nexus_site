import Image from "next/image";

import clsx from "clsx";

interface rollTextProps {
  title: string;
  color?:
    | `#${string & `${Uppercase<string>}${Uppercase<string>}${Uppercase<string>}`}`
    | `#${Uppercase<string>}`;
  images: string[];
}

const RollText = ({ title, color = "#FFFFFF", images }: rollTextProps) => {
  const render_ul = () => {
    const elements = [];
    for (let i = 0; i < 2; i++) {
      elements.push(
        <ul
          className={clsx("animate-text-01", "animate-roll-text flex gap-10")}
        >
          {images.map((item, index) => (
            <li key={index} className="flex items-center justify-start">
              <p
                className={clsx(
                  "mr-10 font-mundial text-[6.5rem] font-mundial-thin",
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
                    className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
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
