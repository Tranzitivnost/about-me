import "./Avatar.css";
// import myImage from "./images/1_avatar.png";

const Avatar = ({ src, size = "m" }) => {
  return (
    <div className="photo_container">
      <img className={`photoAvatar img-${size}`} src={src} alt="photo-1" />
    </div>
  );
};

export default Avatar;
