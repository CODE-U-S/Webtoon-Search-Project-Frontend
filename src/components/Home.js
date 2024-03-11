import React from 'react';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeProvider';
import { StyledButton } from '../style/styles';

const WebToon = () => {
  const ThemeMode = useTheme();
  return (
    <AppLayout>
      <ButtonContainer>
        <Link to='/naver'>
          <StyledButton theme={ThemeMode[0]}>지금핫한</StyledButton>
        </Link>
        <Link to='/kakao'>
          <StyledButton theme={ThemeMode[0]}>실시간 랭킹</StyledButton>
        </Link>
        <Link to='/kakaowebtoon'>
          <StyledButton theme={ThemeMode[0]}>오늘신작</StyledButton>
        </Link>
        <Link to='/ridibooks'>
          <StyledButton theme={ThemeMode[0]}>이벤트</StyledButton>
        </Link>
        <Link to='/misterblue'>
          <StyledButton theme={ThemeMode[0]}>남성인기</StyledButton>
        </Link>
        <Link to='/anitoon'>
          <StyledButton theme={ThemeMode[0]}>완결추천</StyledButton>
        </Link>
      </ButtonContainer>
    </AppLayout>
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
