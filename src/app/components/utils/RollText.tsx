import Image from "next/image";

import clsx from "clsx";

const RollText = () => {
  return (
    <div className="mb-10 w-full overflow-hidden">
      <div className={clsx("animate-roll", "flex gap-10 overflow-hidden")}>
        <ul
          className={clsx("animate-text-01", "animate-roll-text flex gap-10")}
        >
          <li className="flex items-center justify-start">
            <p className="mr-10 font-mundial text-[6.5rem] font-mundial-thin text-white">
              Service
            </p>
            <div className="w-[232px]">
              <div className="relative top-[10px] overflow-hidden rounded-md pb-[37%]">
                <Image
                  src="/images/service-roll-img01.jpg"
                  alt="service"
                  width={232}
                  height={88}
                  className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </li>
          <li className="flex items-center justify-start">
            <p className="mr-10 font-mundial text-[6.5rem] font-mundial-thin text-white">
              Service
            </p>
            <div className="w-[232px]">
              <div className="relative top-[10px] overflow-hidden rounded-md pb-[37%]">
                <Image
                  src="/images/service-roll-img02.jpg"
                  alt="service"
                  width={232}
                  height={88}
                  className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </li>
          <li className="flex items-center justify-start">
            <p className="mr-10 font-mundial text-[6.5rem] font-mundial-thin text-white">
              Service
            </p>
            <div className="w-[232px]">
              <div className="relative top-[10px] overflow-hidden rounded-md pb-[37%]">
                <Image
                  src="/images/service-roll-img03.jpg"
                  alt="service"
                  width={232}
                  height={88}
                  className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </li>
        </ul>
        <ul
          className={clsx("animate-text-02", "animate-roll-text flex gap-10")}
        >
          <li className="flex items-center justify-start">
            <p className="mr-10 font-mundial text-[6.5rem] font-mundial-thin text-white">
              Service
            </p>
            <div className="w-[232px]">
              <div className="relative top-[10px] overflow-hidden rounded-md pb-[37%]">
                <Image
                  src="/images/service-roll-img01.jpg"
                  alt="service"
                  width={232}
                  height={88}
                  className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </li>
          <li className="flex items-center justify-start">
            <p className="mr-10 font-mundial text-[6.5rem] font-mundial-thin text-white">
              Service
            </p>
            <div className="w-[232px]">
              <div className="relative top-[10px] overflow-hidden rounded-md pb-[37%]">
                <Image
                  src="/images/service-roll-img02.jpg"
                  alt="service"
                  width={232}
                  height={88}
                  className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </li>
          <li className="flex items-center justify-start">
            <p className="mr-10 font-mundial text-[6.5rem] font-mundial-thin text-white">
              Service
            </p>
            <div className="w-[232px]">
              <div className="relative top-[10px] overflow-hidden rounded-md pb-[37%]">
                <Image
                  src="/images/service-roll-img03.jpg"
                  alt="service"
                  width={232}
                  height={88}
                  className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RollText;
