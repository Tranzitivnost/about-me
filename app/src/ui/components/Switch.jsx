import styles from "./Switch.module.css";
import clsx from "clsx";

const Switch = ({ onChange, isActiveMode }) => {
  return (
    <div className={styles.position}>
      <input
        type="checkbox"
        checked={isActiveMode}
        onChange={onChange}
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
