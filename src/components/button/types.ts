import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    className?: string;
    onClick?: () => void;
    buttonType: "btn-primary" | "btn-tertiary" | "btn-outline";
    children: React.ReactNode;
};
