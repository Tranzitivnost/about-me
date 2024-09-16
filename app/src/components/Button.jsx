import styles from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={clsx([className, styles.button])} {...rest}>
      {children}
    </button>
  );
};
export default Button;
