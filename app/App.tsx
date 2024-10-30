import { useLayoutEffect } from "react";
import styles from "./App.module.css";
import Card from "./src/ui/components/Card";
import Container from "./src/ui/components/Container";
import { useTheme } from "./src/ui/hooks/useTheme";
import Switch from "./src/ui/components/Switch";
import clsx from "clsx";
import { Theme } from "./src/ui/hooks/useTheme";
import React from "react";
const App = () => {
  const { restoreTheme, setTheme, getTheme } = useTheme();

  const handleCheckboxChange = () => {
    setTheme(getTheme() === Theme.Dark ? Theme.Light : Theme.Dark);
  };
  const isCurrentThemeLight = getTheme() === "light" ? true : false;

  useLayoutEffect(() => {
    restoreTheme();
  }, []);

  return (
    <Container
      className={clsx([styles.app])}
      alignCenter
      justifyContentCenter
      flexDirectionColumn
    >
      <Switch
        className={styles.switch}
        onChange={handleCheckboxChange}
        defaultValue={isCurrentThemeLight}
      />
      <Card className={styles.media} />
    </Container>
  );
};

export default App;
