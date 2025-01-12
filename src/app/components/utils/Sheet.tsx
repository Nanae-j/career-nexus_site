import Transition from "./Transition";

interface Props {
  children: React.ReactNode;
}

const Sheet = ({ children }: Props) => {
  return (
    <Transition>
      <div className="mx-auto max-w-[1150px] font-kintoSans">{children}</div>
    </Transition>
  );
};

export default Sheet;
