interface LowerTitleProps {
  title: string;
}

const LowerTitle = ({ title }: LowerTitleProps) => {
  return (
    <h2 className="mb-20 font-mundial text-4xl font-mundial-demibold">
      {title}
    </h2>
  );
};

export default LowerTitle;
