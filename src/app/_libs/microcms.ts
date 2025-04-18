import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type CategoryType = {
  name: string;
} & MicroCMSListContent;

export type NewsType = {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: CategoryType;
  publishAt: string;
  createAt: string;
} & MicroCMSListContent;

export type MemberType = {
  name: string;
  position?: string;
  image: MicroCMSImage;
  message?: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<NewsType>({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<NewsType>({
    endpoint: "news",
    contentId,
    queries,
  });
  return detailData;
};

export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<MemberType>({
    endpoint: "member",
    queries,
  });
  return listData;
};
