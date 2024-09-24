import styles from "./ThemeToggle.module.css";
import clsx from "clsx";
import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { setTheme, getTheme } = useTheme();
  const [isWhiteMode, setIsWhiteMode] = useState(
    getTheme() === "light" ? true : false,
  );

  const handleCheckboxChange = () => {
    setIsWhiteMode(!isWhiteMode);
    setTheme(isWhiteMode ? "dark" : "light");
  };

  return (
    <div className={styles.position}>
      <input
        type="checkbox"
        checked={isWhiteMode}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
        id="checkbox"
      />
      <label
        htmlFor="checkbox"
        className={clsx(
          styles["checkbox-label"],
          isWhiteMode ? styles.light : "",
        )}
      >
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};
export default ThemeToggle;
