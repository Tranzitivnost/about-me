import "./Avatar.css";

const Avatar = ({ src, size = "m", alt }) => {
  return <img className={`photoAvatar img-${size}`} src={src} alt={alt} />;
};

export default Avatar;
