import styles from "./Text.module.css";
import clsx from "clsx";

type Props = {
  children: any;
  className: string;
};

const Text = ({ children, className }: Props) => {
  return <div className={clsx([styles.text, className])}>{children}</div>;
};

export default Text;
