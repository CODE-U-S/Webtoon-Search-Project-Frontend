import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppLayout from '../../components/AppLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WebToon from '../../components/WebToon';

const Naver = () => {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    axios.get('http://54.180.24.174:3000/naver')
      .then(response => {
        setWebtoons(response.data);
      })
      .catch(error => {
        console.error('Error fetching webtoons:', error);
      });
  }, []);

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

  const webtoonsByDay = groupWebtoonsByDay();

  return (
    <AppLayout>
      <WebToon />
      {Object.keys(webtoonsByDay).map(day => (
        <div key={day}>
          <h3>{day}</h3>
          <WebToonList>
            {webtoonsByDay[day].map(webtoon => (
              <WebToonItem key={webtoon.id}>
                <Link to={`/content/${webtoon.id}`}>
                  <div>
                    <WebToonImage src={webtoon.imageUrl} alt={webtoon.title} />
                    <WebToonTitle>{webtoon.title}</WebToonTitle>
                  </div>
                </Link>
              </WebToonItem>
            ))}
          </WebToonList>
        </div>
      ))}
    </AppLayout>
  );
}

export default Naver;

const WebToonList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WebToonItem = styled.div`
  width: 200px;
  margin: 10px;
  cursor: pointer; 
`;

const WebToonImage = styled.img`
  width: 100%;
  height: auto;
`;

const WebToonTitle = styled.h4`
  margin-top: 5px;
`;
