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
    name: "",
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

  return (
    <AppLayout>
      <SignupForm>
        <Header>
          <Title>로그인</Title>
        </Header>

        <InputWrapper>
          <InputText
            content={"이름을 입력해주세요"}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <InputText
            content={"이메일을 입력해주세요"}
            name={"user_id"}
            value={formData.user_id}
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Password content={"비밀번호를 입력해주세요"} />
        </InputWrapper>

        <SubmitButton theme={ThemeMode[0]} type="submit">
          로그인
        </SubmitButton>
      </SignupForm>
    </AppLayout>
  );
}

const SignupForm = styled.form`
  text-align: center;
`;

const Header = styled.div`
  margin-top: 7.5vmin;
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

export default Login;
