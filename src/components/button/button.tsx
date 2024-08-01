import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, href, buttonType, className, onClick, ...props }) => {
  // const mode = isPrimary ? "btn-primary" : "btn-tertiary";
  // const combinedClassName = `${mode} ${className || ''}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonType}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonType}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
