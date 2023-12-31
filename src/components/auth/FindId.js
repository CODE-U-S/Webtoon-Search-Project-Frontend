import styles from "../../css/auth/FindId.module.css";

function FindId() {
  return (
    <form className={styles["container-find-id"]}>
      <div className={styles["container-header"]}>
        <div className={styles["header"]}>아이디 찾기</div>
      </div>

      <div className={styles["container-input"]}>
        <input
          type={"text"}
          placeholder="이메일을 입력해주세요"
          className={styles["email-box"]}
        />
      </div>

      <div className={styles["container-button"]}>
        <button type={"submit"} className={styles["find-id-button"]}>
          아이디 찾기
        </button>
      </div>
    </form>
  );
}

export default FindId;
