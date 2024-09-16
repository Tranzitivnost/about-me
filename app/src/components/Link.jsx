import styles from "./Link.module.css";
import clsx from "clsx";

const Link = ({ href, children, target, className }) => {
  return (
    <a
      href={href}
      className={clsx([styles.linkComponent], className)}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;
