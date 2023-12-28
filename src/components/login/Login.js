import React from "react";
import styles from "../../css/login/Login.module.css";
import Checkbox from "../checkbox/Checkbox";

function Login() {
  return (
    <div className={styles["container-login"]}>
      <div className={styles["container-header"]}>
        <div className={styles["header"]}>로그인</div>
      </div>

      <div className={styles["container-body"]}>
        <div className={styles["container-input"]}>
          <input type={"text"} placeholder="아이디를 입력해주세요" />
          <br />
          <input type={"text"} placeholder="비밀번호를 입력해주세요" />
        </div>
      </div>

      <div className={styles["container-checkbox"]}>
        <Checkbox label="자동 로그인" checked={true} />
        <Checkbox label="아이디 저장" checked={true} />
      </div>

      <div className={styles["container-button"]}>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
