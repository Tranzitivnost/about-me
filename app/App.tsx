import styles from "./App.module.css";
import Container from "./src/ui/components/Container";

import Switch from "./src/ui/components/Switch";
import clsx from "clsx";

import React from "react";

const App = ({ onChange, defaultValue, children }) => {
  return (
    <Container
      className={clsx([styles.app])}
      alignCenter
      justifyContentCenter
      flexDirectionColumn
    >
      <Switch
        className={styles.switch}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      {children}
    </Container>
  );
};

export default App;
