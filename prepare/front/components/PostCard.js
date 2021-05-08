/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const card = css`
  padding: 15px;
  margin-bottom: 40px;
  border: 3px solid #3a18ff;
  border-radius: 30px;
  background-color: #fff;
`;

const cardTitle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

const PostCard = ({ post }) => {
  return (
    <div css={card}>
      <div css={cardTitle}>{post.title}</div>
      <div>{post.tag}</div>
      <div>{post.date}</div>
      <div>
        {post.writer}
        {post.like}
        {post.comment}
      </div>
    </div>
  );
};

export default PostCard;
