"use client";

import { forwardRef, useRef } from "react";
import Image from "next/image";

import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import RollText from "../../utils/RollText";
// import { members } from "../../utils/MemberList";
import Logo from "../../Logos/Logo";
import Button from "../../utils/Button";
import { MemberType } from "@/app/_libs/microcms";

interface MemberProps {
  members: MemberType[];
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Member = forwardRef<HTMLElement, MemberProps>(({ members }, ref) => {
  const memberRef = useRef<HTMLDivElement | null>(null);

  const rolltext_images = [
    "/images/member-roll-img01.jpg",
    "/images/member-roll-img02.jpg",
    "/images/member-roll-img03.jpg",
  ];

  useGSAP(
    () => {
      if (!memberRef.current) return; // 要素が存在しない場合は終了
      const mm = gsap.matchMedia();

      mm.add(
        {
          small: "(max-width: 768px)",
          large: "(min-width: 769px)",
        },
        (ctx) => {
          if (ctx.conditions) {
            const { small } = ctx.conditions;
            // **** MEMEBER リストを動かす ****
            const MEMEBER_scrollTL = gsap.timeline({
              scrollTrigger: {
                trigger: memberRef.current,
                start: "top+=10% top",
                end: "bottom top",
                markers: false,
                scrub: 1,
              },
            });

            MEMEBER_scrollTL.to(".member-list", {
              y: small ? "-10%" : "-20%",
            });
            // **** MEMBER リストを動かす ****

            // **** MEMBER 背景のロゴのカラーチェンジ ****
            // const colorTL = gsap.timeline();

            // colorTL
            //   .to(".member-logo #out-side-path", {
            //     fill: "#9AD5CD",
            //     fillOpacity: "0.2",
            //     repeat: -1,
            //     duration: 5,
            //     yoyo: true,
            //   })
            //   .to(
            //     ".member-logo #middle-path",
            //     {
            //       fill: "#B4D0A9",
            //       fillOpacity: "0.2",
            //       repeat: -1,
            //       duration: 5,
            //       yoyo: true,
            //     },
            //     "<"
            //   )
            //   .to(
            //     ".member-logo #inside-path",
            //     {
            //       fill: "#F8FFAA",
            //       fillOpacity: 0.18,
            //       repeat: -1,
            //       duration: 5,
            //       yoyo: true,
            //     },
            //     "<"
            //   );
            // **** MEMBER 背景のロゴのカラーチェンジ ****

            const MEMEBER_Fadein_scrollTL = gsap.timeline({
              scrollTrigger: {
                trigger: memberRef.current,
                start: "top center",
                end: "bottom bottom",
                markers: false,
              },
            });

            MEMEBER_Fadein_scrollTL.from(".title", {
              opacity: 0,
              duration: 0.8,
              ease: "power4.in",
            })
              .from(
                ".description",
                {
                  opacity: 0,
                  duration: 0.8,
                  ease: "power4.in",
                },
                "-=0.5"
              )
              .from(
                ".button",
                {
                  opacity: 0,
                  duration: 0.8,
                  ease: "power4.in",
                },
                "-=0.5"
              );
          }
        }
      );
    },
    { scope: memberRef }
  );

  function getMembersArray16(array: MemberType[]) {
    const MAX_LENGTH = 16;

    if (array.length >= MAX_LENGTH) {
      return array.slice(0, MAX_LENGTH);
    }

    const repeatedArray = [];
    while (repeatedArray.length < MAX_LENGTH) {
      repeatedArray.push(...array);
    }

    return repeatedArray.slice(0, MAX_LENGTH);
  }

  const membersSetList = getMembersArray16(members);

  return (
    <section
      ref={ref}
      className={clsx(
        "member-section",
        "relative z-[2] -mt-9 rounded-[1.9rem] bg-white py-24",
        "xl:py-[12.5rem]"
      )}
    >
      <div ref={memberRef}>
        <RollText title="Member" color="#000000" images={rolltext_images} />
        <div
          className={clsx(
            "relative mx-auto overflow-hidden rounded-[1.2rem] bg-main-black",
            "md:w-[95%]"
          )}
        >
          <div
            className={clsx(
              "absolute -left-[50%] bottom-0 top-auto w-[140%]",
              "md:-left-[10%] md:-top-[10%] md:bottom-auto md:w-[67%]"
            )}
          >
            <Logo className="member-logo" />
          </div>
          <div
            className={clsx(
              "relative w-full pb-[177%]",
              "md:pb-[70%]",
              "lg:pb-[57%]"
            )}
          >
            <div
              className={clsx(
                "absolute z-[2] w-full bg-memberFilterSP pb-[177%] opacity-80 absolute-center",
                "md:bg-memberFilter md:pb-[70%]",
                "lg:pb-[57%]"
              )}
            ></div>
            <div
              className={clsx(
                "absolute left-auto top-1/2 ml-auto w-[170%] -translate-y-1/2 -rotate-12",
                "md:-right-[8%] md:w-[75%]"
              )}
            >
              <ul
                className={clsx(
                  "member-list",
                  "grid grid-cols-4 grid-rows-4 gap-2"
                )}
              >
                {membersSetList.map((member, index) => (
                  <li key={index}>
                    <div className="relative overflow-hidden rounded-xl pb-[133%]">
                      <Image
                        src={member.image.url}
                        alt=""
                        width={284}
                        height={379}
                        className="absolute w-full absolute-center"
                        priority
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={clsx(
              "absolute left-1/2 top-[15%] z-[3] w-[84%] -translate-x-1/2",
              "md:left-[10%] md:top-1/2 md:w-[440px] md:-translate-x-0 md:-translate-y-1/2"
            )}
          >
            <h3
              className={clsx(
                "title",
                "mb-6 font-kintoSans text-[min(6.4vw,2rem)] font-kintoSans-medium leading-[180%] tracking-widest text-white",
                "md:mb-8 md:text-[2rem]"
              )}
            >
              一人ひとりが企業と
              <br />
              求職者をつなぐ架け橋
            </h3>
            <p
              className={clsx(
                "description",
                "mb-10 font-kintoSans text-[0.95rem] font-kintoSans-medium leading-[240%] tracking-widest text-white",
                "md:mb-16 md:text-lg md:leading-[240%]"
              )}
            >
              私たちのチームは、業界経験豊富なプロフェッショナルと、柔軟な発想で新しい価値を生み出す若手メンバーで構成されています。企業と求職者が共に成長できる未来をつくるため、一人ひとりが情熱を持って取り組んでいます。
            </p>
            <div className={clsx("button", "w-[166px]")}>
              <Button href="/member" label="Read More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// displayNameを設定
Member.displayName = "Member";

export default Member;
