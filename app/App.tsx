import { useLayoutEffect } from "react";
import styles from "./App.module.css";
import Card from "./src/ui/components/Card";
import Container from "./src/ui/components/Container";
import { useTheme } from "./src/ui/hooks/useTheme";
import Switch from "./src/ui/components/Switch";
import clsx from "clsx";

const App = () => {
  const { restoreTheme, setTheme, getTheme } = useTheme();

  const handleCheckboxChange = () => {
    setTheme(getTheme() === "light" ? "dark" : "light");
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
        onChange={handleCheckboxChange}
        defaultValue={isCurrentThemeLight}
      />
      <Card />
    </Container>
  );
};

export default App;
