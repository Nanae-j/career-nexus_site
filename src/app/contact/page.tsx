import ClientContactPage from "./ClientContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return <ClientContactPage />;
};

export default page;
