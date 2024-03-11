import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import { useHistory } from 'react-router-dom'; // React Router의 useHistory를 import합니다.
import { useTheme } from '../context/themeProvider';

const Signup = () => {
  const ThemeMode = useTheme();
  const history = useHistory(); // useHistory를 초기화합니다.
  const [formData, setFormData] = useState({
    name: '',
    user_id: '', // userId를 user_id로 수정합니다.
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/signup', formData);
      console.log(response.data);
      // 회원가입 성공 시 / 페이지로 이동합니다.
      history.push('/');
    } catch (error) {
      console.error('Error during signup:', error);
      // 회원가입 실패 시 사용자에게 알림을 표시할 수 있습니다.
    }
  };
  

  return (
    <AppLayout>
      <SignupForm onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <InputWrapper>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="user_id">사용자 ID</label>
          <input type="text" id="user_id" name="user_id" value={formData.user_id} onChange={handleChange} required /> {/* userId를 user_id로 수정합니다. */}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </InputWrapper>
        <SubmitButton theme={ThemeMode[0]} type="submit">회원가입</SubmitButton>
      </SignupForm>
    </AppLayout>
  );
};

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  label {
    margin-bottom: 5px;
  }
  input {
    width: 300px;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const SubmitButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #FF6666; /* 특징색 적용 */
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export default Signup;
