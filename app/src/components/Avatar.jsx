import "./Avatar.css";
// import myImage from "./images/1_avatar.png";

const Avatar = ({ src, imageSize = 130 }) => {
  return (
    <div class="photo_container">
      <img class="photoAvatar" src={src} alt="photo-1" width={imageSize} />
    </div>
  );
};

export default Avatar;
