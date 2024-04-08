import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/themeProvider";
import {
  IoMdHeart,
  IoIosHeartEmpty,
  IoIosStar,
  IoIosStarOutline,
} from "react-icons/io";
import Rating from "../components/Rating";
import axios from "axios";

const DetailPage = () => {
  const ThemeMode = useTheme();
  const { webtoonId } = useParams();
  const [webtoonInfo, setWebtoonInfo] = useState(null);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    // API 호출 및 데이터 가져오는 부분
    const fetchWebtoonInfo = async () => {
      try {
        const response = await fetch(
          `http://54.180.24.174:3000/toon/id=${webtoonId}`
        );
        if (!response.ok) {
          throw new Error("웹툰 정보를 불러오는데 실패했습니다.");
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

  const [formData, setFormData] = useState({
    title: "",
    rating: 0,
    user_id: localStorage.getItem("userId"),
    comment: "",
  });

  const handleSubmitComment = async (event) => {
    console.log(formData);
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://54.180.24.174:3000/review/write",
        formData
      );
    } catch (error) {}

    setComment("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ratingChange = (rating) => {
    setFormData({
      ...formData,
      rating: rating,
    });
  };

  // 별점 컴포넌트
  const StarRating = ({ rating }) => {
    const filledStars = rating ? Math.round(rating) : 0; // 값이 있는 경우 별점에 따른 노란색 별 개수
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < filledStars;
      return filled ? (
        <IoIosStar size={"1.5vmin"} />
      ) : (
        <IoIosStarOutline size={"1.5vmin"} />
      );
    });
  };

  return (
    <AppLayout>
      {webtoonInfo && (
        <DetailContainer service={webtoonInfo.service}>
          <ImageContainer service={webtoonInfo.service}>
            <Link to="/">
              <StyledButton theme={ThemeMode[0]}>&#60; home</StyledButton>
            </Link>
            <StyledImage src={webtoonInfo.imageUrl} alt={webtoonInfo.title} />
          </ImageContainer>
          <InfoContainer>
            <Title>
              <Image src={`/images/${webtoonInfo.service}.svg`} />
              {webtoonInfo.title}

              {/* 좋아요 버튼 */}
              <LikeButton liked={liked} onClick={handleLike}>
                {liked ? (
                  <IoMdHeart size={30} />
                ) : (
                  <IoIosHeartEmpty
                    size={30}
                    color={ThemeMode[0] == "light" ? "black" : "white"}
                  />
                )}
              </LikeButton>
            </Title>
            <Info>작가:{webtoonInfo.author}</Info>
            <Info>장르:{webtoonInfo.genre}</Info>
            <Info>요일:{webtoonInfo.day}</Info>
            <Info>
              평점:
              <StarRating rating={webtoonInfo.rating} />
            </Info>
            <Info>
              링크:
              <a
                href={webtoonInfo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {webtoonInfo.href}
              </a>
            </Info>

            <CommentComponent>
              <CommentSection theme={ThemeMode[0]}>
                <h3>
                  댓글 <Rating ratingChange={ratingChange} />{" "}
                </h3>
                <CommentForm onSubmit={handleSubmitComment}>
                  <TextArea
                    name={"comment"}
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="댓글을 입력해주세요..."
                    rows={4}
                    theme={ThemeMode[0]}
                  />
                  <SubmitButton
                    theme={ThemeMode[0]}
                    type="submit"
                    name="title"
                    value={webtoonInfo.title}
                    onClick={handleChange}
                  >
                    댓글 작성 &#62;
                  </SubmitButton>
                </CommentForm>
                {/* 댓글 목록 */}
                {/* 댓글 목록이 있다면 여기에 표시 */}
              </CommentSection>
            </CommentComponent>
          </InfoContainer>
        </DetailContainer>
      )}
      {!webtoonInfo && <p>웹툰 정보를 불러오는 중입니다...</p>}
    </AppLayout>
  );
};

export default DetailPage;

const Info = styled.p`
  margin-top: 2vmin;
`;

const StyledButton = styled.button`
  width: 24vmin;
  height: 5.6vmin;
  border-radius: 4px;
  color: ${(props) => (props.theme === "light" ? "#31302E" : "#bbb")};
  font-size: 3vmin;
  margin-bottom: 4vmin;
  margin-left: -4vmin;
`;

const StyledImage = styled.img`
  max-width: 150%;
  height: auto;
  margin-left: 1vmin;
`;

const Image = styled.img`
  width: 3vmin;
  margin-right: 1vmin;
`;

const LikeButton = styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.liked ? "red" : "black")};
  margin-top: 0.5vmin;
`;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30vmin;
  margin-top: ${(service) =>
    service.service == "mrblue"
      ? "15vmin"
      : service.service == "kakao"
      ? "9vmin"
      : "3vmin"};
`;

const ImageContainer = styled.div`
  flex: ${(service) => (service == "kakao" ? 2 : 1.5)};
`;

const InfoContainer = styled.div`
  flex: 3;
  margin-left: 30vmin;
`;

const CommentSection = styled.div`
  width: 50vmin;
  border-radius: 10px;
  background-color: transparent;
  flex: 1;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: -1vmin;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  margin-top: 1vmin;
`;

const Title = styled.h1`
  display: inline-flex;
  font-size: 3vmin;
  font-weight: 800;
`;

const CommentComponent = styled.div`
  margin-top: 4vmin;
`;

const TextArea = styled.textarea`
  background-color: transparent;
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  border: 1px solid ${({ theme }) => (theme === "dark" ? "white" : "black")};
  margin: 1vmin;
  padding: 2vmin;
`;
