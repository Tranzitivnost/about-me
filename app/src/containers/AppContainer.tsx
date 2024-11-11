import React from "react";
import App from "../ui/components/App";
import { useEffect } from "react";
import styles from "./AppContainer.module.css";
import CardContainer from "./CardContainer";
import { useTheme, Theme } from "./hooks/useTheme";

const AppContainer = () => {
  const { restoreTheme, setTheme, getTheme } = useTheme();
  const handleCheckboxChange = () => {
    setTheme(getTheme() === Theme.Dark ? Theme.Light : Theme.Dark);
  };
  const isCurrentThemeLight = getTheme() === "light" ? true : false;

  useEffect(() => {
    restoreTheme();
  }, []);

  return (
    <App onChange={handleCheckboxChange} defaultValue={isCurrentThemeLight}>
      <CardContainer className={styles.mycard} />
    </App>
  );
};

export default AppContainer;
