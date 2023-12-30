import styles from "../../css/auth/FindPw.module.css";
import Password from "./Password";

function FindPw() {
  return (
    <div className={styles["container-find-pw"]}>
      <div className={styles["container-header"]}>
        <div className={styles["header"]}>비밀번호 재설정</div>
      </div>

      <div className={styles["container-body"]}>
        <div className={styles["container-input"]}>
          <input
            type={"text"}
            placeholder="아이디를 입력해주세요"
            className={styles["id-box"]}
          />
          <br />
          <Password content={"새로운 비밀번호를 입력해주세요"} />
          <Password content={"새로운 비밀번호를 확인해주세요"} />
        </div>
      </div>

      <div className={styles["container-button"]}>
        <button type={"submit"} className={styles["new-pw-button"]}>
          비밀번호 변경
        </button>
      </div>
    </div>
  );
}

export default FindPw;
