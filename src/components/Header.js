import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { ReactComponent as MyPageIcon } from '../assets/header/my_page.svg'; 
import { ReactComponent as FavoriteIcon } from '../assets/header/favorite.svg';
import { ReactComponent as MyPageDarkIcon } from '../assets/header/my_page_dark.svg'; 
import { ReactComponent as FavoriteDarkIcon } from '../assets/header/favorite_dark.svg';
import { useTheme } from '../context/themeProvider'; 
import Modal from '../pages/Modal';
import { IoIosSearch } from "react-icons/io"; 

const Header = () => {
  const [selected, setSelected] = useState('home');
  const [currentTheme, toggleDarkMode] = useTheme(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSelect = (menu) => {
    setSelected(menu);
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('검색어:', searchValue);
  };

  return (
    <nav>
      <StyledHeader>
        <RightMenu>
          <Link to='/' onClick={() => handleSelect('home')}>
            <img src={logo} alt="logo"/>
          </Link>
        </RightMenu>
        <LeftMenu>
          <StyledLink to='/' onClick={() => handleSelect('home')} selected={selected === 'home'}>홈</StyledLink>
          <StyledLink to='/WebToon' onClick={() => handleSelect('webtoon')} selected={selected === 'webtoon'}>웹툰</StyledLink>
          <SearchForm onSubmit={handleSearchSubmit}>
            <SearchInput type="text" placeholder="제목, 작가를 입력하세요." value={searchValue} onChange={handleSearchChange} theme={currentTheme} />
            <SearchIcon>
              <SearchButton type="submit"><IoIosSearch /></SearchButton> 
            </SearchIcon>
          </SearchForm>
        </LeftMenu>
        <MyMenu>
          <Link to='/Favorite'>
            {currentTheme === 'dark' ? <FavoriteDarkIcon /> : <FavoriteIcon />} 
          </Link>
          <Link onClick={openModal}>
            {currentTheme === 'dark' ? <MyPageDarkIcon /> : <MyPageIcon />} 
          </Link>
        </MyMenu>
      </StyledHeader>
      <Modal isOpen={isModalOpen} onClose={closeModal} /> 
    </nav>
  )
}

export default Header;

const StyledHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 40px 50px;
  border-bottom: ${({ theme }) => theme.borderColor};
`

const RightMenu = styled.li`
  & a {
    display: flex;
    align-items: center;
    & img {
      width: 30px;
    }
  }
`

const LeftMenu = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  & > * {
    margin-right: 30px;
  }
`

const MyMenu = styled.li`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 2vmin;
  width: 100px; 
  height: 100px; 

  & > * {
    margin-left: 30px;
  }

  & a {
    display: flex;
    align-items: center;
    width: 100%; /* 추가된 부분 */
    height: 100%; /* 추가된 부분 */

    & svg { 
      width: 100%; 
      height: auto;
    }
  }
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ selected, theme }) => (selected ? '#FF6666' : theme.textColor)};
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: ${({ selected }) => (selected ? '100%' : '0')};
    height: 2px;
    background-color: red;
    transition: width 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  right: 140px; 
`;


const SearchInput = styled.input`
  padding: 8px 32px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: transparent;
  flex: 1;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0px; 
  top: 55%;
  transform: translateY(-50%);
`;

const SearchButton = styled.button`
  padding: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
`;
