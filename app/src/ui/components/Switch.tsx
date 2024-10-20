import styles from "./Switch.module.css";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  defaultValue: boolean;
  onChange: (value: boolean) => void;
}

const Switch = ({ onChange, defaultValue }: Props) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div className={styles.position}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
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
