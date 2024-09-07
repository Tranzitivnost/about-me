import "./Avatar.css";

const Avatar = ({ src, size = "m", alt, className }) => {
  return <img className={`${className} img-${size}`} src={src} alt={alt} />;
};

export default Avatar;
