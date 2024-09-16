import styles from "./Avatar.module.css";
import clsx from "clsx";

const Avatar = ({ src, size = "m", alt, className }) => {
  const avatarStyles = clsx([className, styles[`img-${size}`]]);
  return <img className={avatarStyles} src={src} alt={alt} />;
};

export default Avatar;
