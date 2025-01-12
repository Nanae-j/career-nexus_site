interface Props {
  children: React.ReactNode;
}

const Sheet = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-[1150px] font-kintoSans">{children}</div>
  );
};

export default Sheet;
