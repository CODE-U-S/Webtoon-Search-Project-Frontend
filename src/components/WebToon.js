import React from 'react';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeProvider';
import { StyledButton } from '../style/styles';

const WebToon = () => {
  const ThemeMode = useTheme();
  return (
      <ButtonContainer>
        <Link to='/webToon/naver'>
          <StyledButton theme={ThemeMode[0]}>네이버 웹툰</StyledButton>
        </Link>
        <Link to='/webToon/kakaopage'>
          <StyledButton theme={ThemeMode[0]}>카카오페이지</StyledButton>
        </Link>
        <Link to='/webToon/kakaowebtoon'>
          <StyledButton theme={ThemeMode[0]}>카카오웹툰</StyledButton>
        </Link>
        <Link to='/webToon/ridibooks'>
          <StyledButton theme={ThemeMode[0]}>리디북스</StyledButton>
        </Link>
        <Link to='/webToon/mrblue'>
          <StyledButton theme={ThemeMode[0]}>미스터블루</StyledButton>
        </Link>
        <Link to='/webToon/anytoon'>
          <StyledButton theme={ThemeMode[0]}>애니툰</StyledButton>
        </Link>
      </ButtonContainer>
  )
}

export default WebToon;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin: 10px; /* 각 버튼 주변에 공백 추가 */
  }
`;
