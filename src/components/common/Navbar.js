import styles from "../../css/common/Navbar.module.css";
import logo from "../../image/logo.svg";
import favorite from "../../image/favorite.svg";
import mypage from "../../image/my_page.svg";
import { IoIosSearch } from "react-icons/io";
import RadioGroup from "./RadioGroup";
import Radio from "./Radio";

function Navbar() {
  return (
    <div className={styles["container-navbar"]}>
      <div className={styles["container-left"]}>
        <div className={styles["container-logo"]}>
          <img src={logo} alt="" />
        </div>

        <div className={styles["container-option"]}>
          <RadioGroup>
            <Radio name="option-web" value="webtoon" defaultChecked>
              웹툰
            </Radio>
            <Radio name="option-web" value="webnovel">
              웹소설
            </Radio>
          </RadioGroup>
        </div>
      </div>

      <div className={styles["container-right"]}>
        <div className={styles["container-search-box"]}>
          <input
            type={"text"}
            className={styles["search-box"]}
            placeholder="제목/작가명으로 검색"
          />
        </div>

        <div className={styles["container-search-button"]}>
          <IoIosSearch className={styles["search-button"]} />
        </div>

        <div className={styles["container-my"]}>
          <button type={"button"} className={styles["favorite"]}>
            <img src={favorite} alt="" />
          </button>
          <button type={"button"} className={styles["mypage"]}>
            <img src={mypage} alt="" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
