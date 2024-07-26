import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  isPrimary?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FC<ButtonProps> = ({ children, href, isPrimary }) => {
  const mode = isPrimary ? "bg-primary" : "btn-tertiary";

  if (href) {
    return (
      <Link
        href={href}
        className={`${mode} inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500 uppercase`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${mode} inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500 uppercase`}
    >
      {children}
    </button>
  );
};

export default Button;
