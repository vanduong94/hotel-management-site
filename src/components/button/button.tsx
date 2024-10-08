import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, href, buttonType, className, onClick, ...props }) => {
  // const mode = isPrimary ? "btn-primary" : "btn-tertiary";
  // const combinedClassName = `${buttonType} ${className || ''}`;

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
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
