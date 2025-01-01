import Link from "next/link";

interface ButtonContentProps {
  label: string;
}

const ButtonContent = ({ label }: ButtonContentProps) => {
  return (
    <div className="relative flex items-center justify-between">
      <span className="font-mundial-ligh pointer-events-none relative z-10 inline-block -translate-y-[4%] pl-1 pr-[14%] font-mundial text-black delay-100 duration-300 group-hover:text-white">
        {label}
      </span>
      <span className="ease-buttonHover absolute right-0 top-1/2 inline-block h-2 w-2 origin-center -translate-y-1/2 rounded-full bg-black duration-300 group-hover:scale-[30]"></span>
    </div>
  );
};

interface ButtonProps {
  linkType: "internal" | "external";
  href: string;
  label: string;
}

const Button = ({ linkType = "internal", href, label }: ButtonProps) => {
  return (
    <>
      {linkType === "internal" ? (
        <Link
          href={href}
          className="group block w-full overflow-hidden rounded-[4.375rem] bg-white px-4 py-1.5"
        >
          <ButtonContent label={label} />
        </Link>
      ) : (
        <a
          href={href}
          className="group block w-full overflow-hidden rounded-[4.375rem] bg-white px-4 py-1.5"
        >
          <ButtonContent label={label} />
        </a>
      )}
    </>
  );
};

export default Button;
