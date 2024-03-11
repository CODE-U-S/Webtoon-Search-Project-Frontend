import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from '../context/themeProvider';
import ThemeToggle from '../theme/ThemeToggle'; // 테마 토글 컴포넌트를 가져옵니다.

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const ThemeMode = useTheme(); // 테마

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpen, onClose]);

  // 모달이 열려있는 상태에서만 ThemeToggle 버튼을 클릭할 수 있도록 합니다.
  const handleToggleModal = (e) => {
    e.stopPropagation(); // 이벤트 전파 중지
  };

  return (
    isOpen && (
      <ModalOverlay onClick={onClose}>
        <ModalContent ref={modalRef} theme={ThemeMode[0]} onClick={handleToggleModal}>
          <ThemeToggle toggle={ThemeMode[1]} mode={ThemeMode[0]} /> {/* 테마 토글 버튼 추가 */}
          <h2>모달 제목</h2>
          <p>모달 내용</p>
          <StyledButton theme={ThemeMode[0]} onClick={onClose}>Close Modal</StyledButton>
        </ModalContent>
      </ModalOverlay>
    )
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme === 'light' ? '#FFFFFF' : '#1E1E22'};
  padding: 20px;
  cursor: default; // 모달 내부를 클릭해도 모달이 닫히지 않도록 합니다.
`;

const StyledButton = styled.button`
  width: 240px;
  height: 56px;
  border-radius: 4px;
  border: ${props => props.theme === 'light' ? '1px solid #31302E' : '1px solid #bbb'};
  color:  ${props => props.theme === 'light' ? '#31302E' : '#bbb'};
`;
