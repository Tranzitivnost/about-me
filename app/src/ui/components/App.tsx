import styles from "./App.module.css";
import Container from "./Container";

import Switch from "./Switch";

import React from "react";

const App = ({ onChange, defaultValue, children }) => {
  return (
    <Container
      className={styles.app}
      alignCenter
      justifyCenter
      flexDirectionColumn
    >
      <Container className={styles.switchContainer} justifyEnd>
        <Switch onChange={onChange} defaultValue={defaultValue} />
      </Container>
      <Container
        className={styles.main}
        justifyCenter
        alignCenter
        flexDirectionColumn
      >
        {children}
      </Container>
    </Container>
  );
};

export default App;
