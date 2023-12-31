import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/auth/Login.module.css";
import Checkbox from "../common/Checkbox";
import Password from "./Password";

function Login() {
  const navigate = useNavigate();

  return (
    <form className={styles["container-login"]}>
      <div className={styles["container-header"]}>
        <div className={styles["header"]}>로그인</div>
      </div>

      <div className={styles["container-body"]}>
        <div className={styles["container-input"]}>
          <input
            type={"text"}
            placeholder="아이디를 입력해주세요"
            className={styles["id-box"]}
          />
          <br />
          <Password content={"비밀번호를 입력해주세요"} />
        </div>
      </div>

      <div className={styles["container-checkbox"]}>
        <Checkbox label="자동 로그인" checked={false} />
        <Checkbox label="아이디 저장" checked={false} />
      </div>

      <div className={styles["container-button"]}>
        <button type={"submit"} className={styles["login-button"]}>
          Login
        </button>
      </div>

      <div className={styles["container-find"]}>
        <button
          type={"button"}
          className={styles["find-id"]}
          onClick={() => navigate("/login/find_id")}
        >
          아이디 찾기
        </button>
        <button
          type={"button"}
          className={styles["find-pw"]}
          onClick={() => navigate("/login/find_pw")}
        >
          비밀번호 찾기
        </button>
        <button type={"button"} className={styles["sign-up"]}>
          회원가입
        </button>
      </div>
    </form>
  );
}

export default Login;
