import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppLayout from '../../components/AppLayout';
import axios from 'axios';
import { useTheme } from '../../context/themeProvider';
import { Link } from 'react-router-dom';
import WebToon from '../../components/WebToon';

const RidiBooks = () => {
  const ThemeMode = useTheme();
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    // kakaowebtoon 엔드포인트에서 데이터를 가져와서 설정합니다.
    axios.get('http://54.180.24.174:3000/kakaowebtoon')
      .then(response => {
        setWebtoons(response.data);
      })
      .catch(error => {
        console.error('Error fetching webtoons:', error);
      });
  }, []);

  // 요일별로 웹툰 목록을 나누는 함수
  const groupWebtoonsByDay = () => {
    const groupedWebtoons = {};
    webtoons.forEach(webtoon => {
      if (!groupedWebtoons[webtoon.day]) {
        groupedWebtoons[webtoon.day] = [];
      }
      groupedWebtoons[webtoon.day].push(webtoon);
    });
    return groupedWebtoons;
  }

  // 요일별 웹툰 목록을 가져옵니다.
  const webtoonsByDay = groupWebtoonsByDay();

  return (
    <AppLayout>
      <WebToon />
        {Object.keys(webtoonsByDay).map(day => (
          <div key={day}>
            <h3>{day}</h3>
            <WebToonList>
              {webtoonsByDay[day].map(webtoon => (
                <WebToonItem key={webtoon.Sequence} onClick={() => window.location.href = webtoon.href}>
                  <div>
                    <WebToonImage src={webtoon.imageUrl} alt={webtoon.title} />
                    <WebToonTitle>{webtoon.title}</WebToonTitle>
                  </div>
                </WebToonItem>
              ))}
            </WebToonList>
          </div>
        ))}
      
    </AppLayout>
  );
}

export default RidiBooks;

const WebToonContainer = styled.div`
  padding: 20px;
`;

const WebToonList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WebToonItem = styled.div`
  width: 200px;
  margin: 10px;
  cursor: pointer; /* 커서를 포인터로 변경하여 사용자에게 클릭 가능성을 보여줌 */
`;

const WebToonImage = styled.img`
  width: 100%;
  height: auto;
`;

const WebToonTitle = styled.h4`
  margin-top: 5px;
`;


const StyledButton = styled(Link)`
  display: inline-block;
  width: 240px;
  height: 56px;
  border-radius: 4px;
  border: ${props => props.theme === 'light' ? '1px solid #31302E' : '1px solid #bbb'};
  color:  ${props => props.theme === 'light' ? '#31302E' : '#bbb'};
  text-align: center;
  line-height: 56px;
  text-decoration: none;
`;