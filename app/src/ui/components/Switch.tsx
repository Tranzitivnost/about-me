import styles from "./Switch.module.css";
import clsx from "clsx";
import { useState } from "react";

type Props = {
  defaultValue: any;
  onChange: any;
};

const Switch = ({ onChange, defaultValue }: Props) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange();
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
