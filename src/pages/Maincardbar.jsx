import React from 'react';
import styled from 'styled-components';

const post = {
  board_seq: 1,
  thumbnail: 'https://via.placeholder.com/150',
  title: 'dkssudgkdjfkdjfkdfjdkjdfkdjds',
  create_date: '2023-12-27',
  nickname: '작성자',
};

const BoxDiv = styled.div`
  max-width: 396px;
  height: 398px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 28px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  }
`;

const DeadlineDiv = styled.div`
  font-size: 12px;
  color: #333;
  margin-top: 25px;
  margin-bottom: 2px;
`;

const DododokDiv = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  margin-bottom: 3px;
`;

const ImageContainer = styled.div`
  margin-top: 0;
  img {
    width: 100%;
    height: 141px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const BoardDiv = styled.div`
  margin-top: 10px;
  h1 {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 1em;
    color: #666;
    margin-bottom: 5px;
  }
  hr {
    border: 0.5px solid #ddd;
    margin: 10px 0;
  }
  span {
    font-size: 0.8em;
    color: #999;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center; 
  img {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    border-radius: 50%;
  }
  div {
    p {
      font-size: 16px;
      color: #333;
      margin: 0;
    }
  }
`;

const BottomRightText = styled.p`
  font-size: 18px;
  color: #333;
  text-align: right; 
  margin: 0;
  position: absolute;
  bottom: 8px; 
  right: 8px; 
  padding: 8px;
`;

const Card = () => {
  const navigate = () => {
    console.log(`Go to post/${post.board_seq}`);
  };

  return (
    <BoxDiv onClick={navigate}>
      <DeadlineDiv>{`12월 2일 마감`}</DeadlineDiv>
      <DododokDiv>{'도도독 Dododok'}</DododokDiv>
      <ImageContainer>
        <img height={141} width={346} src={String(post.thumbnail)} alt="thumbnail" />
      </ImageContainer>
      <BoardDiv>
        <h1>{post.title}</h1>
        {post.content && <h2>{String(post.content).slice(0, 48).replaceAll(/[\n_#*\\/]/g, '')}</h2>}
        <hr />
      </BoardDiv>
      <ProfileDiv>
        <img src="https://via.placeholder.com/28" alt="profile" />
        <div>
          <p>1학년 2반 신희성</p>
        </div>
      </ProfileDiv>
      <BottomRightText>{'4/6'}</BottomRightText>
    </BoxDiv>
  );
};

export default Card;
