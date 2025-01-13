import clsx from "clsx";

interface LowerTitleProps {
  title: string;
}

const LowerTitle = ({ title }: LowerTitleProps) => {
  return (
    <h2
      className={clsx(
        "mb-20 font-mundial text-[min(9.6vw,3rem)] font-mundial-demibold",
        "lg:text-6xl"
      )}
    >
      {title}
    </h2>
  );
};

export default LowerTitle;
