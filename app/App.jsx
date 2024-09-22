import { useLayoutEffect } from "react";
import styles from "./App.module.css";
import Card from "./src/ui/components/Card.jsx";
import Container from "./src/ui/components/Container.jsx";
import { useTheme } from "./src/ui/hooks/useTheme.js";
import ThemeToggle from "./src/ui/components/ThemeToggle.jsx";
import clsx from "clsx";

const App = () => {
  const { restoreTheme, setTheme } = useTheme();

  useLayoutEffect(() => {
    restoreTheme();
  }, []);

  return (
    <Container className={clsx([styles.appContainer])}>
      <ThemeToggle />
      <Container className={clsx([styles.app])}>
        <Card />
      </Container>
    </Container>
  );
};

export default App;
