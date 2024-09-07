import "./Card.css";
import Container from "./Container.jsx";
import Avatar from "./Avatar";
import Header from "./Header";
import Text from "./Text";
import myImage from "./images/1_avatar.png";
import Link from "./Link.jsx";
import Button from "./Button.jsx";
const Card = () => {
  return (
    <Container className={"card"}>
      <Avatar src={myImage} size="m" className={"marginBottom"} />
      <Header children={"Valentina Savitskaia"} />
      <Header color="yellow" size="m" children={"Belgrade, Serbia"} />
      <Text children={"Front-end developer."} />
      <Container className={"buttons-box"}>
        <Link href="https://github.com/Tranzitivnost" className={"decoration"}>
          <Button className={"buttonWidth"} text="GitHub" />
        </Link>
        <Link href="https://rs.linkedin.com/" className={"decoration"}>
          <Button className={"buttonWidth"} text="LinkedIn" />
        </Link>
        <Link href="https://www.instagram.com/" className={"decoration"}>
          <Button className={"buttonWidth"} text="Instagram" />
        </Link>
      </Container>
    </Container>
  );
};

export default Card;
