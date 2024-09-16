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
}) => {
  const classNamesMapping = {
    justifyStart,
    justifyCenter,
    justifyEnd,
    alignStart,
    alignCenter,
    alignEnd,
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
        },
      ])}
    >
      {children}
    </div>
  );
};

export default Container;
