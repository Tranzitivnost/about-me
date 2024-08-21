import "./Avatar.css";

const Avatar = ({ src, size = "m" }) => {
  return (
    <div className="photo_container">
      <img className={`photoAvatar img-${size}`} src={src} alt="photo-1" />
    </div>
  );
};

export default Avatar;
