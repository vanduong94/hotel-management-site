import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  isPrimary?: boolean;
  className?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FC<ButtonProps> = ({ children, href, isPrimary, className, ...props }) => {
  // const mode = isPrimary ? "btn-primary" : "btn-tertiary";
  // const combinedClassName = `${mode} ${className || ''}`;

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
