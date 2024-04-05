import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import { useHistory } from "react-router-dom"; // React Router의 useHistory를 import합니다.
import { useTheme } from "../../context/themeProvider";
import Password from "../../components/auth/Password";
import InputText from "../../components/auth/InputText";

function Login() {
  const ThemeMode = useTheme();
  const history = useHistory(); // useHistory를 초기화합니다.
  const [formData, setFormData] = useState({
    user_id: "", // userId를 user_id로 수정합니다.
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      const response = await axios.post(
        "http://54.180.24.174:3000/user/login",
        formData
      );
      console.log(response);

      localStorage.setItem("userId", formData.user_id);

      history.push("/");
    } catch (error) {}
  };

  return (
    <AppLayout>
      <SignupForm onSubmit={handleSubmit}>
        <Header>
          <Title>로그인</Title>
        </Header>

        <InputWrapper>
          <InputText
            content={"아이디를 입력해주세요"}
            name={"user_id"}
            value={formData.user_id}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Password
            content={"비밀번호를 입력해주세요"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </InputWrapper>

        <SubmitButton theme={ThemeMode[0]} type="submit">
          로그인
        </SubmitButton>
      </SignupForm>

      <FindContainer>
        <FindId type={"button"} onClick={() => history.push("/find_id")}>
          아이디 찾기
        </FindId>
        <FindPw type={"button"} onClick={() => history.push("/find_pw")}>
          비밀번호 찾기
        </FindPw>
        <SignUp type={"button"} onClick={() => history.push("/signup")}>
          회원가입
        </SignUp>
      </FindContainer>
    </AppLayout>
  );
}

const SignupForm = styled.form`
  text-align: center;
`;

const Header = styled.div`
  margin-top: 14vmin;
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding: 3.5vmin;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  margin-top: 1.5vmin;
  margin-bottom: 3vmin;
`;

const SubmitButton = styled.button`
  min-width: 26rem;
  min-height: 3rem;
  background-color: #af2525;
  color: white;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 4vmin;
`;

const FindContainer = styled.div`
  margin-top: 1.5vmin;
  text-align: center;
  position: fixed;
  top: 61%;
  right: 0;
  left: 0;
`;

const FindId = styled.button`
  margin-right: 6vmin;
  font-size: 1.3vmin;
  margin-left: 5vmin;
`;

const FindPw = styled.button`
  margin-right: 6vmin;
  font-size: 1.3vmin;
`;

const SignUp = styled.button`
  margin-right: 6vmin;
  font-size: 1.3vmin;
`;

export default Login;
