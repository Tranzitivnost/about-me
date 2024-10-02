import styles from "./Switch.module.css";
import clsx from "clsx";
import { useState } from "react";

const Switch = ({ onChange, defaultValue }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className={styles.position}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={event => {
          onChange();
          handleCheckboxChange(event);
        }}
        className={styles.checkbox}
        id="checkbox"
      />
      <label
        htmlFor="checkbox"
        className={clsx(styles["checkbox-label"], styles.switch)}
      >
        <span className={styles.ball}></span>
      </label>
    </div>
  );
};
export default Switch;
