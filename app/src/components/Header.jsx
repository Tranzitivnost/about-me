import styles from "./Header.module.css";
import clsx from "clsx";

const Header = ({ size = "xl", color = "white", children }) => {
  const headerStyles = clsx(
    styles[`color-${color}`],
    styles[(`text-${size}`, styles.h2)],
  );
  return <h2 className={headerStyles}>{children}</h2>;
};

export default Header;
