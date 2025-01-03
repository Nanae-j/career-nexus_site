import clsx from "clsx";
import Link from "next/link";

interface ButtonContentProps {
  label: string;
  color?: "green" | "black";
  fontSize?: 15 | 18;
}

const ButtonContent = ({ label, color, fontSize }: ButtonContentProps) => {
  return (
    <div className="relative overflow-hidden">
      <span
        className={clsx(
          "pointer-events-none relative z-10 ml-6 inline-block -translate-y-[4%] py-1.5 font-mundial font-mundial-light text-black delay-100 duration-300 group-hover:text-white",
          fontSize === 18 ? "text-lg" : "text-[0.95rem]"
        )}
      >
        {label}
      </span>
      <span
        className={clsx(
          "ease-buttonHover absolute right-0 top-1/2 h-[600px] w-[600px] origin-center -translate-y-1/2 translate-x-[47%] scale-[0.01] rounded-[50%] duration-300 group-hover:scale-100",
          color === "green" ? "bg-main-green" : "bg-black"
        )}
      ></span>
    </div>
  );
};

interface ButtonProps {
  linkType?: "internal" | "external";
  href: string;
  label: string;
  color?: "green" | "black";
  fontSize?: 18 | 15;
}

const Button = ({
  linkType = "internal",
  href,
  label,
  color = "green",
  fontSize = 18,
}: ButtonProps) => {
  return (
    <>
      {linkType === "internal" ? (
        <Link
          href={href}
          className="group block w-full overflow-hidden rounded-[4.375rem] bg-white"
        >
          <ButtonContent label={label} color={color} fontSize={fontSize} />
        </Link>
      ) : (
        <a
          href={href}
          className="group block w-full overflow-hidden rounded-[4.375rem] bg-white"
        >
          <ButtonContent label={label} color={color} fontSize={fontSize} />
        </a>
      )}
    </>
  );
};

export default Button;
