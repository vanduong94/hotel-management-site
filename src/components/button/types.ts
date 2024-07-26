import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    isPrimary?: boolean;
    className?: string;
    onClick?: () => void;
};
