import styles from "./Text.module.css";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: JSX.Element;
  className: string;
}

const Text = ({ children, className, ...rest }: Props) => {
  return (
    <div className={clsx([styles.text, className])} {...rest}>
      {children}
    </div>
  );
};

export default Text;
