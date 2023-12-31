import styles from "../../css/common/Radio.module.css";

function RadioGroup({ label, children }) {
  return (
    <fieldset className={styles["container-group"]}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
}

export default RadioGroup;
