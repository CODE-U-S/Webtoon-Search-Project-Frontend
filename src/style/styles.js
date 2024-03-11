import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0px 28px;
  transition: all 0.2s linear;
  width: calc(100%-2rem);
  height: 90vh;

  & h2 {
    font-size: 48px;
    font-weight: 500;
    padding-bottom: 40px;
    color: ${({ theme }) => theme.textColor};
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 24px;
  border: ${props => props.theme === 'light' ? '1px solid #4CAF50' : '1px solid #4CAF50'};
  color: ${props => props.theme === 'light' ? '#4CAF50' : '#fff'};
  background-color: ${props => props.theme === 'light' ? '#fff' : '#4CAF50'};
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme === 'light' ? '#e7e7e7' : '#45a049'};
    border: 1px solid #45a049;
    color: ${props => props.theme === 'light' ? '#333' : '#fff'};
  }
`;



