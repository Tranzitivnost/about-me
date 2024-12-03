import React from "react";
import styles from "./Container.module.css";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  flexDirectionColumn?: boolean;

  className?: string;
}

const Container = ({
  className,
  children,
  justifyStart,
  justifyCenter,
  justifyEnd,
  alignStart,
  alignCenter,
  alignEnd,
  flexDirectionColumn,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={clsx([
        styles.container,
        className,
        {
          [styles.justifyStart]: justifyStart,
          [styles.justifyCenter]: justifyCenter,
          [styles.justifyEnd]: justifyEnd,
          [styles.alignStart]: alignStart,
          [styles.alignCenter]: alignCenter,
          [styles.alignEnd]: alignEnd,
          [styles.flexDirectionColumn]: flexDirectionColumn,
        },
      ])}
    >
      {children}
    </div>
  );
};

export default Container;
