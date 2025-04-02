import { getMembersList } from "../_libs/microcms";
import Sheet from "../components/utils/Sheet";
import LowerTitle from "../components/utils/LowerTitle";
import BreadCrumb from "../components/utils/BreadCrumb";
import Image from "next/image";
import clsx from "clsx";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Member",
};

export default async function Page() {
  const { contents: members } = await getMembersList();

  return (
    <Sheet>
      <LowerTitle title="MEMBER" />
      <div className="mb-28">
        <BreadCrumb />
      </div>
      <div className="mb-14">
        <ul
          className={clsx(
            "grid grid-cols-1 items-start justify-center gap-x-5 gap-y-9",
            "xs:grid-cols-2",
            "md:grid-cols-3",
            "lg:grid-cols-4"
          )}
        >
          {members.map((member, index) => (
            <li key={index}>
              <Image
                src={member.image.url}
                alt=""
                width={569}
                height={760}
                className="mb-5"
              />
              <p className={clsx("mb-1 text-2xl font-kintoSans-medium")}>
                {member.name}
              </p>
              {member.position && (
                <p
                  className={clsx(
                    "text-lg font-kintoSans-regular text-main-green"
                  )}
                >
                  {member.position}
                </p>
              )}
              {member.message && (
                <p className={clsx("mt-4 text-base")}>{member.message}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Sheet>
  );
}
