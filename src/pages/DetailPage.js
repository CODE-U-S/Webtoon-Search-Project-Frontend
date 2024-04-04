import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from '../context/themeProvider';

const DetailPage = () => {
  const ThemeMode = useTheme();
  const { webtoonId } = useParams();

  return (
    <AppLayout>
      <h2>웹툰 상세 페이지</h2>
      {webtoonId ? (
        <div>
          <p>웹툰 아이디: {webtoonId}</p>
          {/* 여기에 웹툰 내용을 표시하는 코드 추가 */}
        </div>
      ) : (
        <div>
          <p>웹툰 아이디를 받아오지 못했습니다.</p>
        </div>
      )}
      <Link to='/'>
        <StyledButton theme={ThemeMode[0]}>
          Go back to Home
        </StyledButton>
      </Link>
    </AppLayout>
  );
}

export default DetailPage;

const StyledButton = styled.button`
  width: 240px;
  height: 56px;
  border-radius: 4px;
  border: ${props => props.theme === 'light' ? '1px solid #31302E' : '1px solid #bbb'};
  color:  ${props => props.theme === 'light' ? '#31302E' : '#bbb'};
`;
