import kakao from "../../image/kakao.svg";
import google from "../../image/google.svg";
import styles from "../../css/common/Footer.module.css";

function Footer() {
  return (
    <div className={styles["container-sns"]}>
      <button type="button" className={styles["sns-kakao"]}>
        <img src={kakao} alt="" />
      </button>

      <button type="button" className={styles["sns-google"]}>
        <img src={google} alt="" />
      </button>
    </div>
  );
}

export default Footer;
