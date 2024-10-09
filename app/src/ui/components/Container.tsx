import styles from "./Container.module.css";
import clsx from "clsx";

type Props = {
  children: any;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  flexDirectionColumn?: boolean;
  justifyContentCenter?: boolean;

  className?: string;
};

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
  justifyContentCenter,
}: Props) => {
  return (
    <div
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
          [styles.justifyContentCenter]: justifyContentCenter,
        },
      ])}
    >
      {children}
    </div>
  );
};

export default Container;
