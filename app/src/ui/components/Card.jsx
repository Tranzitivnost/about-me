import styles from "./Card.module.css";
import clsx from "clsx";
import Container from "./Container.jsx";
import Avatar from "./Avatar";
import Header from "./Header";
import Text from "./Text";
import myImage from "./images/1_avatar.png";
import Link from "./Link.jsx";
import Button from "./Button.jsx";
const Card = () => {
  return (
    <Container alignCenter flexDirectionColumn className={styles.card}>
      <Avatar src={myImage} size="m" className={styles.avatar} />
      <Header>Valentina Savitskaia</Header>
      <Header color="yellow" size="m">
        Belgrade, Serbia
      </Header>
      <Text className={styles["text"]}>Front-end developer.</Text>
      <Container className={styles["buttons-box"]} alignCenter justifyCenter>
        <Link
          target={"_blank"}
          href="https://github.com/Tranzitivnost"
          className={styles.link}
        >
          <Button className={styles.button} type="submit">
            GitHub
          </Button>
        </Link>
        <Link
          target={"_blank"}
          href="https://rs.linkedin.com/"
          className={styles.link}
        >
          <Button className={styles.button}>LinkedIn</Button>
        </Link>
        <Link
          target={"_blank"}
          href="https://www.instagram.com/"
          className={styles.link}
        >
          <Button className={styles.button}>Instagram</Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Card;
