import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const Search = ({ isOpen, onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // 검색어가 변경될 때마다 검색 결과를 업데이트합니다.
  useEffect(() => {
    // 검색 로직을 수행하고 검색 결과를 업데이트합니다.
    // 이 부분은 실제 검색 로직에 맞게 수정해야 합니다.
    if (searchValue.trim() !== '') {
      // 여기서는 임시로 더미 데이터를 사용합니다.
      const dummyResults = [
        "검색 결과 1",
        "검색 결과 2",
        "검색 결과 3"
      ];
      setSearchResults(dummyResults);
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  // 검색어가 변경될 때마다 검색 결과를 업데이트합니다.
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // 검색 결과를 렌더링합니다.
  const renderSearchResults = () => {
    if (searchResults.length === 0) {
      return <NoResults>검색 결과가 없습니다.</NoResults>;
    }

    return (
      <ResultsList>
        {searchResults.map((result, index) => (
          <ResultItem key={index}>{result}</ResultItem>
        ))}
      </ResultsList>
    );
  };

  return (
    isOpen && (
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <SearchInputContainer>
            <SearchInput 
              type="text" 
              placeholder="검색어를 입력하세요."
              value={searchValue}
              onChange={handleSearchChange}
            />
            <SearchIconContainer>
              <IoIosSearch />
            </SearchIconContainer>
          </SearchInputContainer>
          {renderSearchResults()}
        </ModalContent>
      </ModalOverlay>
    )
  );
};

export default Search;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const SearchInputContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #999;
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ResultItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const NoResults = styled.div`
  padding: 10px;
  text-align: center;
  color: #999;
`;
