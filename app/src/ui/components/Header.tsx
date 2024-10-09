import styles from "./Header.module.css";
import clsx from "clsx";

type TSize = "s" | "m" | "l" | "xl";

type TColor = "blue" | "white" | "yellow";
type Props = {
  children: string;
  size?: TSize;
  color?: TColor;
};

const Header = ({ size = "xl", color = "white", children }: Props) => {
  const headerStyles = clsx(styles[`color-${color}`], styles[`text-${size}`]);
  return <h2 className={headerStyles}>{children}</h2>;
};

export default Header;
