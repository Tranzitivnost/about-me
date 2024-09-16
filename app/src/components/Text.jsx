import styles from "./Text.module.css";
import clsx from "clsx";

const Text = ({ children, className }) => {
  return <div className={clsx([styles.text, className])}>{children}</div>;
};

export default Text;
