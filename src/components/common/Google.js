import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import styles from "../../css/common/Footer.module.css";
import { jwtDecode } from "jwt-decode";

function Google() {
  return (
    <div className={styles["sns-google"]}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <GoogleLogin
          onSuccess={(res) => {
            handleCredentialResponse(res);
          }}
          onFailure={(res) => {
            handleCredentialResponse(res);
          }}
          type="icon"
          shape="circle"
          useOneTap
        />
      </GoogleOAuthProvider>
    </div>
  );
}

function handleCredentialResponse(response) {
  const { name, email } = jwtDecode(response.credential);
  console.log(name);
  console.log(email);
}

export default Google;
