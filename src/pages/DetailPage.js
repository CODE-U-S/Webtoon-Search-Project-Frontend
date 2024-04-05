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
  const [comment, setComment] = useState('');

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

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    // 댓글을 처리하는 함수 작성
    console.log('Submitted comment:', comment);
    // 댓글 입력 후 초기화
    setComment('');
  };

  return (
    <AppLayout>
      {webtoonInfo && (
        <DetailContainer>
          <ImageContainer>
            <StyledImage src={webtoonInfo.imageUrl} alt={webtoonInfo.title} />
          </ImageContainer>
          <InfoContainer>
            <h2>{webtoonInfo.title}</h2>
            <p><strong>작가:</strong> {webtoonInfo.author}</p>
            <p><strong>장르:</strong> {webtoonInfo.genre}</p>
            <p><strong>요일:</strong> {webtoonInfo.day}</p>
            <p><strong>서비스:</strong> {webtoonInfo.service}</p>
            <p><strong>평점:</strong> <StarRating rating={webtoonInfo.rating} /></p>
            <p><strong>링크:</strong> <a href={webtoonInfo.href} target="_blank" rel="noopener noreferrer">{webtoonInfo.href}</a></p>
            {/* 좋아요 버튼 */}
            <LikeButton liked={liked} onClick={handleLike}>
              {liked ? '❤️' : '🤍'}
            </LikeButton>
          </InfoContainer>
        </DetailContainer>
      )}
      {!webtoonInfo && (
        <p>웹툰 정보를 불러오는 중입니다...</p>
      )}
      <CommentSection>
        <h3>댓글</h3>
        <CommentForm onSubmit={handleSubmitComment}>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="댓글을 입력해주세요..."
            rows={4}
          />
          <SubmitButton type="submit">댓글 작성</SubmitButton>
        </CommentForm>
        {/* 댓글 목록 */}
        {/* 댓글 목록이 있다면 여기에 표시 */}
      </CommentSection>
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

const DetailContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  flex: 3;
`;

const CommentSection = styled.div`
  padding: 8px 32px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: transparent;
  flex: 1;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  margin-top: 10px;
`;

