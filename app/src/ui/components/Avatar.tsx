import styles from "./Avatar.module.css";
import clsx from "clsx";

type TSize = "s" | "m" | "l" | "xl";

type Props = {
  src: string;
  size?: TSize;
  alt?: string;
  className?: string;
};

const Avatar: React.FunctionComponent<Props> = ({
  src,
  size = "m",
  alt,
  className,
}) => {
  const avatarStyles = clsx([className, styles[`img-${size}`]]);
  return <img className={avatarStyles} src={src} alt={alt} />;
};

export default Avatar;
