import "./Card.css";
import SocialMediaButtons from "./SocialMediaButtons.jsx";
import InformationAboutMe from "./InformationAboutMe.jsx";
const Card = () => {
  return (
    <div className="card">
      <InformationAboutMe />
      <SocialMediaButtons />
    </div>
  );
};
export default Card;
