import "./Card.css";
import Avatar from "./Avatar";
import Header from "./Header";
import Text from "./Text";
import myImage from "./images/1_avatar.png";
import Link from "./Link.jsx";
import Button from "./Button.jsx";
const Card = () => {
  return (
    <div className="card">
      <Avatar src={myImage} size="m" />
      <Header text={"Valentina Savitskaia"} />
      <Header color="yellow" size="m" text={"Belgrade, Serbia"} />
      <Text text={"Front-end developer."} />
      <div className="buttons-box">
        <Link
          href="https://github.com/Tranzitivnost"
          children={<Button text="GitHub" />}
        />
        <Link
          href="https://rs.linkedin.com/"
          children={<Button text="LinkedIn" />}
        />
        <Link
          href="https://www.instagram.com/"
          children={<Button text="Instagram" />}
        />
      </div>
    </div>
  );
};

export default Card;
