import React, { useState } from "react";
import styles from "../../css/auth/Login.module.css";
import Checkbox from "../checkbox/Checkbox";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import kakao from "../../image/kakao.svg";
import google from "../../image/google.svg";

function Login() {
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
    <div className={styles["container-login"]}>
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
          <input
            type={pwType.type}
            placeholder="비밀번호를 입력해주세요"
            className={styles["pw-box"]}
          />
        </div>
        <div className={styles["container-eye"]}>
          {pwType.visible ? (
            <IoMdEye className={styles["eye"]} onClick={handlePasswordType} />
          ) : (
            <IoMdEyeOff
              className={styles["eye"]}
              onClick={handlePasswordType}
            />
          )}
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
        <button type={"button"} className={styles["find-id"]}>
          아이디 찾기
        </button>
        <button type={"button"} className={styles["find-pw"]}>
          비밀번호 찾기
        </button>
        <button type={"button"} className={styles["sign-up"]}>
          회원가입
        </button>
      </div>

      <div className={styles["container-sns"]}>
        <button type="button" className={styles["sns-kakao"]}>
          <img src={kakao} alt="" />
        </button>

        <button type="button" className={styles["sns-google"]}>
          <img src={google} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Login;
