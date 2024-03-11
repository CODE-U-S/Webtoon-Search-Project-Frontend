import React, { useRef, useEffect } from "react";

const MyPage = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

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

  return (
    isOpen && (
      <div className="modal-overlay" ref={modalRef}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>마이페이지</h2>
          <p>마이페이지 내용</p>
          <p>로그아웃</p>
        </div>
      </div>
    )
  );
};

export default MyPage;

// 스타일
const styles = `
  .modal-overlay {
    position: fixed;
    top: 60px;
    right: 0;
    width: 300px;
    height: auto;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .modal-content button {
    margin-top: 10px;
    background-color: #ffffff; /* 버튼 배경색 */
    color: #333333; /* 버튼 텍스트 색상 */
    border: 1px solid #cccccc; /* 버튼 테두리 스타일 */
    border-radius: 20px; /* 버튼 테두리 둥글기 */
    padding: 8px 16px; /* 버튼 안쪽 여백 */
    cursor: pointer; /* 커서 모양 변경 */
    transition: background-color 0.3s, color 0.3s; /* 배경색과 텍스트 색상 변화 시 부드럽게 전환 */
  }

  .modal-content button:hover {
    background-color: #f0f0f0; /* 마우스 호버 시 배경색 변경 */
  }

  .modal-content button:focus {
    outline: none; /* 포커스 테두리 제거 */
  }
`;

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);

// 스타일 적용
document.adoptedStyleSheets = [styleSheet];
