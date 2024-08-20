import Avatar from "./Avatar";
import "./InformationAboutMe.css";
import myImage from "./images/1_avatar.png";

const InformationAboutMe = () => {
  return (
    <div class="header">
      <Avatar src={myImage} size="m" />
      <div class="article-section">
        <h2 class="name">Valentina Savitskaia</h2>
        <h2>Serbia, Belgrade</h2>
        <h2 class="name profession">Front-end developer.</h2>
      </div>
    </div>
  );
};

export default InformationAboutMe;
