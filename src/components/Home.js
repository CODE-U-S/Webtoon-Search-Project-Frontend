import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeProvider';
import AppLayout from './AppLayout';

const Home = () => {
  const ThemeMode = useTheme();
  const CurrentMode = ThemeMode[0] === 'light' ? '🌝' : '🌚';

  return (
    <AppLayout>
      <h2> 홈이다 {''}
        <a
          href="https://github.com/gparkkii/react_darkmode"
          target="_blank"
          rel="noreferrer noopener"
        >
          추천웹툰
        </a> 
        <br/>
        <ColoredText>Current mode is {CurrentMode}</ColoredText>
      </h2>
      <a
        href="https://github.com/gparkkii"
        target="_blank"
        rel="noreferrer noopener"
      >
        All rights reserved by Ji Yeon Park
      </a>
    </AppLayout>
  )
}

export default Home;

const ColoredText = styled.span`
  color: #FF6666;
`