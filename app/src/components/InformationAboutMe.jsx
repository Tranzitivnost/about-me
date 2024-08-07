import "./InformationAboutMe.css";
import myImage from "./avatar/1_avatar.png";

const InformationAboutMe = () => {
  return (
    <div class="header">
      <div class="photo_container">
        <img class="photoAvatar" src={myImage} alt="photo-1" />
      </div>
      <div class="article-section">
        <h2 class="name">Valentina Savitskaia</h2>
        <h2>Serbia, Belgrade</h2>
      </div>
    </div>
  );
};

export default InformationAboutMe;
