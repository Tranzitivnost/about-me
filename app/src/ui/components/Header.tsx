import styles from "./Header.module.css";
import clsx from "clsx";

type TSize = "s" | "m" | "l" | "xl";

type TColor = "blue" | "white" | "yellow";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: string;
  size?: TSize;
  color?: TColor;
  rest?: string;
}

const Header = ({ size = "xl", color = "white", children, ...rest }: Props) => {
  const headerStyles = clsx(styles[`color-${color}`], styles[`text-${size}`]);
  return (
    <h2 className={headerStyles} {...rest}>
      {children}
    </h2>
  );
};

export default Header;
