import React from "react";
import styles from "./Card.module.css";
import Container from "./Container";
import Avatar from "./Avatar";
import Header from "./Header";
import Text from "./Text";
import Link from "./Link";
import Button from "./Button";
import clsx from "clsx";

interface CardProps {
  className?: string;
  name: string;
  location: string;
  jobRole: string;
  surname: string;
  links: {
    href: string;
    label: string;
    order: string;
  }[];
  img: string;
}

const Card = ({
  className,
  name,
  location,
  jobRole,
  surname,
  links,
  img,
}: CardProps) => {
  return (
    <Container
      alignCenter
      flexDirectionColumn
      className={clsx(styles.card, className)}
    >
      <Avatar src={img} size="m" className={styles.avatar} />
      <Header>
        {name} {surname}
      </Header>
      <Header color="yellow" size="m">
        {location}
      </Header>
      <Text className={styles["text"]}>{jobRole}.</Text>
      <Container
        className={styles["buttons-box"]}
        alignCenter
        justifyCenter
        flexDirectionColumn
      >
        {links
          .sort((a, b) => Number(a.order) - Number(b.order))
          .map(item => (
            <Link
              key={item.href}
              target={"_blank"}
              href={item.href}
              className={styles.link}
            >
              <Button className={styles.button}>{item.label}</Button>
            </Link>
          ))}
      </Container>
    </Container>
  );
};

export default Card;
