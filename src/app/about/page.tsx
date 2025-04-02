import Image from "next/image";
import BreadCrumb from "../components/utils/BreadCrumb";
import LowerTitle from "../components/utils/LowerTitle";
import GoogleMap from "../components/Contents/about/GoogleMap";
import clsx from "clsx";
import Transition from "../components/utils/Transition";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <Transition>
      <div className="mx-auto w-[90%] max-w-[1150px]">
        <LowerTitle title="About Us" />
      </div>
      <div className="mx-auto mb-28 w-[90%] max-w-[1150px]">
        <BreadCrumb />
      </div>
      <div className="mb-14 font-kintoSans font-kintoSans-regular">
        <div className="mx-auto w-[90%] max-w-[1150px]">
          <h3 className="mb-8 font-mundial text-[min(16vw,80px)] font-mundial-demibold tracking-wider text-main-green">
            - Mission
          </h3>
          <h4 className="mb-6 text-[min(8vw,2rem)] font-kintoSans-medium leading-relaxed tracking-wider">
            「キャリアの地図を、
            <br className="lg:hidden" />
            共に描く」
          </h4>
          <p
            className={clsx(
              "mb-11 max-w-[700px] text-[min(4.27vw,1.3rem)] leading-relaxed tracking-wider",
              "lg:max-w-none"
            )}
          >
            私たちは、人材と企業をつなぐ架け橋として、一人ひとりの可能性を最大限に引き出し、新しい働き方や挑戦の場を提供しています。個性や強みを活かせる環境で、自分らしく輝けるキャリアを実現するお手伝いをします。
          </p>
        </div>
        <ul
          className={clsx(
            "mx-auto grid w-[90%] grid-cols-1 gap-y-5",
            "lg:custom-grid lg:w-full lg:gap-x-5 lg:gap-y-0"
          )}
        >
          <li
            className={clsx(
              "relative aspect-[265/189] overflow-hidden rounded-md",
              "lg:aspect-auto lg:h-full lg:rounded-xl"
            )}
          >
            <Image
              src="/images/about-bg.jpg"
              alt=""
              width={795}
              height={567}
              className={clsx(
                "position-center absolute h-full w-full object-cover",
                "lg:static"
              )}
              priority
            />
          </li>
          <li
            className={clsx(
              "relative aspect-[265/189] overflow-hidden rounded-md",
              "lg:aspect-auto lg:h-full lg:rounded-xl"
            )}
          >
            <Image
              src="/images/about_image_01.jpg"
              alt=""
              width={350}
              height={567}
              className={clsx(
                "position-center absolute h-full w-full object-cover",
                "lg:static"
              )}
              priority
            />
          </li>
          <li
            className={clsx(
              "relative aspect-[265/189] overflow-hidden rounded-md",
              "lg:aspect-auto lg:h-full lg:rounded-xl"
            )}
          >
            <Image
              src="/images/about_image_02.jpg"
              alt=""
              width={795}
              height={567}
              className={clsx(
                "position-center absolute h-full w-full object-cover",
                "lg:static"
              )}
              priority
            />
          </li>
        </ul>
      </div>

      <div className="mx-auto mb-14 w-[90%] max-w-[1150px] font-kintoSans font-kintoSans-regular">
        <h3 className="mb-8 font-mundial text-[min(16vw,80px)] font-mundial-demibold tracking-wider text-main-green">
          - Corporate Profile
        </h3>
        <h4 className="mb-6 text-[min(8vw,2rem)] font-kintoSans-medium leading-relaxed tracking-wider">
          会社概要
        </h4>
        <table>
          <tbody className="text-left">
            <tr className="border-b-2">
              <th className="min-w-[150px] py-4 text-[min(4.8vw,1.5rem)]">
                社名
              </th>
              <td className="w-full text-[min(4.27vw,1.3rem)]">
                株式会社Career Nexus
              </td>
            </tr>
            <tr className="border-b-2">
              <th className="min-w-[150px] py-4 text-[min(4.8vw,1.5rem)]">
                代表者
              </th>
              <td className="text-[min(4.27vw,1.3rem)]">代表取締役 ○○○○○</td>
            </tr>
            <tr className="border-b-2">
              <th className="min-w-[150px] py-4 text-[min(4.8vw,1.5rem)]">
                設立
              </th>
              <td className="text-[min(4.27vw,1.3rem)]">××××年××月</td>
            </tr>
            <tr className="border-b-2">
              <th className="min-w-[150px] py-4 text-[min(4.8vw,1.5rem)]">
                所在地
              </th>
              <td className="py-4">
                <div className="pb-5 text-[min(4.27vw,1.3rem)]">
                  札幌市○○区△△町1-2-3 キャリアビル○F
                </div>
                <div>
                  <GoogleMap />
                </div>
              </td>
            </tr>
            <tr className="border-b-2">
              <th className="min-w-[150px] py-4 text-[min(4.8vw,1.5rem)]">
                資本金
              </th>
              <td className="text-[min(4.27vw,1.3rem)]">××××万円</td>
            </tr>
            <tr className="border-b-2">
              <th className="min-w-[150px] py-4 text-[min(4.8vw,1.5rem)]">
                従業員数
              </th>
              <td className="text-[min(4.27vw,1.3rem)]">××名</td>
            </tr>
            <tr className="border-b-2">
              <th className="min-w-[150px] py-4 text-[min(4.8vw,1.5rem)]">
                取引銀行
              </th>
              <td className="py-4 text-[min(4.27vw,1.3rem)]">
                <div>××銀行</div>
                <div>××銀行</div>
                <div>××銀行</div>
                <div>××銀行</div>
                <div>××銀行</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Transition>
  );
}
