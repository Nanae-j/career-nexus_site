import clsx from "clsx";
import "./NewsContent.scss";

interface NewsContentProps {
  html: string | TrustedHTML;
}

const NewsContent = ({ html }: NewsContentProps) => {
  return (
    <div
      className={clsx("news-content-box", "font-kintoSans text-main-black")}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default NewsContent;
