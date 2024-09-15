import { useLayoutEffect } from "react";
import styles from "./App.module.css";
import Card from "./src/components/Card.jsx";
import Container from "./src/components/Container.jsx";
import clsx from "clsx";

const App = () => {
  return (
    <Container className={clsx([styles.app])}>
      <Card />
    </Container>
  );
};

export default App;
