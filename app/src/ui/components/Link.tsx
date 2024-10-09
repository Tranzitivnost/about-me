import styles from "./Link.module.css";
import clsx from "clsx";

type Props = {
  children: any;
  href: string;
  target: string;
  className: string;
};

const Link = ({ href, children, target, className }: Props) => {
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
