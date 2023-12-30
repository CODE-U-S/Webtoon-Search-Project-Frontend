import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import styles from "../../css/auth/Password.module.css";

function Password({ content }) {
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = (e) => {
    setPwType(() => {
      if (!pwType.visible) return { type: "text", visible: true };
      else return { type: "password", visible: false };
    });
  };

  return (
    <div>
      <input
        type={pwType.type}
        placeholder={content}
        className={styles["pw-box"]}
      />
      <div className={styles["container-eye"]}>
        {pwType.visible ? (
          <IoMdEye className={styles["eye"]} onClick={handlePasswordType} />
        ) : (
          <IoMdEyeOff className={styles["eye"]} onClick={handlePasswordType} />
        )}
      </div>
    </div>
  );
}

export default Password;
