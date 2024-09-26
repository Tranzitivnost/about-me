import styles from "./Container.module.css";
import clsx from "clsx";
import { getClassNames } from "../../helpers/getClassNames";

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
}) => {
  const classNamesMapping = {
    justifyStart,
    justifyCenter,
    justifyEnd,
    alignStart,
    alignCenter,
    alignEnd,
    flexDirectionColumn,
    justifyContentCenter,
  };

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
