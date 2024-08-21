import Avatar from "./Avatar";
import Text from "./Text";
import "./InformationAboutMe.css";
import myImage from "./images/1_avatar.png";

const InformationAboutMe = () => {
  return (
    <div className="header">
      <Avatar src={myImage} size="m" />
      <Text color="yellow" size="m" />
    </div>
  );
};

export default InformationAboutMe;
