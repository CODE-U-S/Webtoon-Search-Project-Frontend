import kakao from "../../image/kakao.svg";
import google from "../../image/google.svg";
import styles from "../../css/common/Footer.module.css";
import Google from "../common/Google";

function Footer() {
  return (
    <div className={styles["container-sns"]}>
      <button type="button" className={styles["sns-kakao"]}>
        <img src={kakao} alt="" />
      </button>

      <Google />
    </div>
  );
}

export default Footer;
