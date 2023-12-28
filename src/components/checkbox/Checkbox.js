import { useState } from "react";
import styles from "../../css/checkbox/Checkbox.module.css";

const Checkbox = ({ id, label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className={styles["checkbox-wrapper"]}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className={isChecked ? styles["checked"] : styles[""]}
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
