import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
}

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button className={clsx([className, styles.button])} {...rest}>
      {children}
    </button>
  );
};
export default Button;
