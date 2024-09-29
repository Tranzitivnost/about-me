import { useLayoutEffect, useState } from "react";
import styles from "./App.module.css";
import Card from "./src/ui/components/Card.jsx";
import Container from "./src/ui/components/Container.jsx";
import { useTheme } from "./src/ui/hooks/useTheme.js";
import Switch from "./src/ui/components/Switch.jsx";
import clsx from "clsx";

const App = () => {
  const { restoreTheme, setTheme, getTheme } = useTheme();
  const [isActiveMode, setIsActiveMode] = useState(
    getTheme() === "light" ? true : false,
  );

  const handleCheckboxChange = () => {
    setIsActiveMode(!isActiveMode);
    setTheme(isActiveMode ? "dark" : "light");
  };

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
      <Switch onChange={handleCheckboxChange} isActiveMode={isActiveMode} />
      <Card />
    </Container>
  );
};

export default App;
