import styles from "./Link.module.css";
import clsx from "clsx";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: any;
  href: string;
  target: string;
  className: string;
  rest?: string;
}

const Link = ({ href, children, target, className, ...rest }: Props) => {
  return (
    <a
      href={href}
      className={clsx([styles.linkComponent], className)}
      {...rest}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;
