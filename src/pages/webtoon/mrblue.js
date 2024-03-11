import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AppLayout from '../../components/AppLayout';
import { useHistory } from 'react-router-dom'; // React Router의 useHistory를 import합니다.
import { useTheme } from '../../context/themeProvider';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const ThemeMode = useTheme();
  return (
    <AppLayout>
      <h2> Favorite 페이지 임당 </h2>
      <StyledButton theme={ThemeMode[0]} to='/'>
        Go back to Home
      </StyledButton>
    </AppLayout>
  )
}

export default Favorite;

const StyledButton = styled(Link)`
  display: inline-block;
  width: 240px;
  height: 56px;
  border-radius: 4px;
  border: ${props => props.theme === 'light' ? '1px solid #31302E' : '1px solid #bbb'};
  color:  ${props => props.theme === 'light' ? '#31302E' : '#bbb'};
  text-align: center;
  line-height: 56px;
  text-decoration: none;
`;
