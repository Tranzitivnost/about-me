import React from "react";
import styles from "./Avatar.module.css";
import clsx from "clsx";

type TSize = "s" | "m" | "l" | "xl";

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  size?: TSize;
  alt?: string;
  className?: string;
}

const Avatar: React.FunctionComponent<Props> = ({
  src,
  size = "m",
  alt,
  className,
  ...rest
}) => {
  const avatarStyles = clsx([className, styles[`img-${size}`]]);
  return <img className={avatarStyles} {...rest} src={src} alt={alt} />;
};

export default Avatar;
