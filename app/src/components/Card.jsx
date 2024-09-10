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
    <Container alignCenter className={"card"}>
      <Avatar src={myImage} size="m" className={"avatar"} />
      <Header>Valentina Savitskaia</Header>
      <Header color="yellow" size="m">
        Belgrade, Serbia
      </Header>
      <Text className="text">Front-end developer.</Text>
      <Container className={"buttons-box"} alignCenter justifyCenter>
        <Link
          target={"_blank"}
          href="https://github.com/Tranzitivnost"
          className={"link"}
        >
          <Button className={"button"} type="submit">
            GitHub
          </Button>
        </Link>
        <Link
          target={"_blank"}
          href="https://rs.linkedin.com/"
          className={"link"}
        >
          <Button className={"button"}>LinkedIn</Button>
        </Link>
        <Link
          target={"_blank"}
          href="https://www.instagram.com/"
          className={"link"}
        >
          <Button className={"button"}>Instagram</Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Card;
