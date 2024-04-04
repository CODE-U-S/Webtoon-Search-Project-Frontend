import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import { Link, useParams } from 'react-router-dom';
import { useTheme } from '../context/themeProvider';

const DetailPage = () => {
  const ThemeMode = useTheme();
  const { webtoonId } = useParams();
  const [webtoonInfo, setWebtoonInfo] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // API 호출 및 데이터 가져오는 부분
    const fetchWebtoonInfo = async () => {
      try {
        const response = await fetch(`http://54.180.24.174:3000/toon/id=${webtoonId}`);
        if (!response.ok) {
          throw new Error('웹툰 정보를 불러오는데 실패했습니다.');
        }
        const data = await response.json();
        setWebtoonInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (webtoonId) {
      fetchWebtoonInfo();
    }
  }, [webtoonId]);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <AppLayout>
      <h2>웹툰 상세 페이지</h2>
      {webtoonInfo ? (
        <div>
          <p>웹툰 제목: {webtoonInfo.title}</p>
          <p>작가: {webtoonInfo.author}</p>
          <p>장르: {webtoonInfo.genre}</p>
          <p>링크: <a href={webtoonInfo.href} target="_blank" rel="noopener noreferrer">{webtoonInfo.href}</a></p>
          <StyledImage src={webtoonInfo.imageUrl} alt={webtoonInfo.title} />
          <p>요일: {webtoonInfo.day}</p>
          <p>서비스: {webtoonInfo.service}</p>
          <p>평점: <StarRating rating={webtoonInfo.rating} /></p>
          {/* 좋아요 버튼 */}
          <LikeButton liked={liked} onClick={handleLike}>
            {liked ? '❤️' : '🤍'}
          </LikeButton>
        </div>
      ) : (
        <div>
          <p>웹툰 정보를 불러오는 중입니다...</p>
        </div>
      )}
      <Link to='/'>
        <StyledButton theme={ThemeMode[0]}>
          홈으로 돌아가기
        </StyledButton>
      </Link>
    </AppLayout>
  );
}

export default DetailPage;

const StyledButton = styled.button`
  width: 240px;
  height: 56px;
  border-radius: 4px;
  border: ${props => props.theme === 'light' ? '1px solid #31302E' : '1px solid #bbb'};
  color:  ${props => props.theme === 'light' ? '#31302E' : '#bbb'};
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const LikeButton = styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => props.liked ? 'red' : 'black'};
`;

// 별점 컴포넌트
const StarRating = ({ rating }) => {
  const filledStars = rating ? Math.round(rating) : 0; // 값이 있는 경우 별점에 따른 노란색 별 개수
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < filledStars;
    return <Star key={index} filled={filled} />;
  });

  return <div>{stars}</div>;
};

const Star = styled.span`
  color: ${props => props.filled ? 'yellow' : 'grey'};
`;
