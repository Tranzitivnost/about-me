import React from "react";
import App from "../../App";
import { useLayoutEffect } from "react";
import { useTheme } from "../ui/hooks/useTheme";
import { Theme } from "../ui/hooks/useTheme";
import styles from "./AppContainer.module.css";
import CardContainer from "./CardContainer";

const AppContainer = () => {
  const { restoreTheme, setTheme, getTheme } = useTheme();
  const handleCheckboxChange = () => {
    setTheme(getTheme() === Theme.Dark ? Theme.Light : Theme.Dark);
  };
  const isCurrentThemeLight = getTheme() === "light" ? true : false;

  useLayoutEffect(() => {
    restoreTheme();
  }, []);

  return (
    <App onChange={handleCheckboxChange} defaultValue={isCurrentThemeLight}>
      <CardContainer className={styles.mycard} />
    </App>
  );
};

export default AppContainer;
