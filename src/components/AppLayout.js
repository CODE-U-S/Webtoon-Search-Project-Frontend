import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import { FlexContainer } from "../style/styles";
import Header from "./Header";

const AppLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <WrapContainer>
      <Header />
      <ButtonContainer>{children}</ButtonContainer>
    </WrapContainer>
  );
};

export default AppLayout;

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin: 10px; /* 각 버튼 주변에 공백 추가 */
  }
`;
