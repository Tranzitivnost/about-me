import React from "react";
import styles from "./Card.module.css";
import Container from "./Container";
import Avatar from "./Avatar";
import Header from "./Header";
import Text from "./Text";
import myImage from "./images/1_avatar.png";
import Link from "./Link";
import Button from "./Button";
import clsx from "clsx";
const Card = ({ className }) => {
  return (
    <Container
      alignCenter
      flexDirectionColumn
      className={clsx(styles.card, className)}
    >
      <Avatar src={myImage} size="m" className={styles.avatar} />
      <Header>Valentina Savitskaia</Header>
      <Header color="yellow" size="m">
        Belgrade, Serbia
      </Header>
      <Text className={styles["text"]}>Front-end developer.</Text>
      <Container
        className={styles["buttons-box"]}
        alignCenter
        justifyCenter
        flexDirectionColumn
      >
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
          href="https://www.linkedin.com/in/tranzitivnost"
          className={styles.link}
        >
          <Button className={styles.button}>LinkedIn</Button>
        </Link>
        <Link
          target={"_blank"}
          href="https://www.instagram.com/tranzitivnost/"
          className={styles.link}
        >
          <Button className={styles.button}>Instagram</Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Card;
