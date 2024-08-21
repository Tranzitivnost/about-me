import "./Card.css";
import Container from "./Container.jsx";
import InformationAboutMe from "./InformationAboutMe.jsx";
const Card = () => {
  return (
    <div className="card">
      <InformationAboutMe />
      <Container />
    </div>
  );
};
export default Card;
