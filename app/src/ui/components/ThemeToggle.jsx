import styles from "./ThemeToggle.module.css";
import clsx from "clsx";
import React, { useState } from "react";

const ThemeToggle = () => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);

  const handleCheckboxChange = () => {
    setIsWhiteMode(!isWhiteMode);
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
          isWhiteMode ? styles.white : "",
        )}
      >
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};
export default ThemeToggle;
