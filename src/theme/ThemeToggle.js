import React from 'react';
import styled from 'styled-components';

const ToggleTab = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  background-color: ${({ mode }) => (mode === 'dark' ? '#333' : '#eee')};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ mode }) => (mode === 'dark' ? '#eee' : '#333')};
`;

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleTab onClick={toggle} mode={mode}>
      {mode === 'dark' ? '라이트' : '다크'}
    </ToggleTab>
  );
}

export default ThemeToggle;
