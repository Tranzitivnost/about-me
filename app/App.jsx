import { useLayoutEffect } from "react";
import styles from "./App.module.css";
import Card from "./src/ui/components/Card.jsx";
import Container from "./src/ui/components/Container.jsx";
import { useTheme } from "./src/ui/hooks/useTheme.js";
import Switch from "./src/ui/components/Switch.jsx";
import clsx from "clsx";

const App = () => {
  const { restoreTheme, setTheme, getTheme } = useTheme();

  const handleCheckboxChange = () => {
    setTheme(getTheme() === "light" ? "dark" : "light");
  };
  const booleanValue = getTheme() === "light" ? true : false;
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
      <Switch onChange={handleCheckboxChange} defaultValue={booleanValue} />
      <Card />
    </Container>
  );
};

export default App;
