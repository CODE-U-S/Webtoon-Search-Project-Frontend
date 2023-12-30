import kakao from "../../image/kakao.svg";
import styles from "../../css/common/Footer.module.css";
import { useEffect } from "react";

function Kakao() {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  useEffect(() => {
    async function KakaoCallback() {
      const code = await new URL(window.location.href).searchParams.get("code");
      // TODO : code를 백엔드에 전달하기 (JWT 토큰 받아 로그인 과정 마무리하기)
      console.log(code);
    }
    KakaoCallback();
  }, []);

  return (
    <button
      type="button"
      className={styles["sns-kakao"]}
      onClick={() => (window.location.href = kakaoURL)}
    >
      <img src={kakao} alt="" />
    </button>
  );
}

export default Kakao;
