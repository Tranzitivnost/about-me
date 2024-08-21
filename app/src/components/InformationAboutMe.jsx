import Avatar from "./Avatar";
import "./InformationAboutMe.css";
import myImage from "./images/1_avatar.png";

const InformationAboutMe = () => {
  return (
    <div className="header">
      <Avatar src={myImage} size="m" />
      <div className="article-section">
        <h2 className="name">Valentina Savitskaia</h2>
        <h2>Serbia, Belgrade</h2>
        <h2 className="name profession">Front-end developer.</h2>
      </div>
    </div>
  );
};

export default InformationAboutMe;
