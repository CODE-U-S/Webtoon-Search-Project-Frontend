import styles from "../../css/common/Footer.module.css";
import Google from "../common/Google";
import Kakao from "./Kakao";

function Footer() {
  return (
    <div className={styles["container-sns"]}>
      <Kakao />
      <Google />
    </div>
  );
}

export default Footer;
