import React from 'react';
import styled from 'styled-components';
import AppLayout from '../../components/AppLayout';

import { useTheme } from '../../context/themeProvider';
import { Link } from 'react-router-dom';
import WebToon from '../../components/WebToon';

const Favorite = () => {
  const ThemeMode = useTheme();
  return (
    <AppLayout>
      <WebToon />
      <h2> Favorite 페이지 임당 </h2>
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
