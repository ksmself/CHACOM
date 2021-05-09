/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Tag } from 'antd';
import Link from 'next/link';
import { HeartFilled, MessageFilled } from '@ant-design/icons';

const card = css`
  padding: 15px 0;
  margin-bottom: 40px;
  border: 3px solid #3a18ff;
  border-radius: 13px;
  background-color: #fff;
`;

const cardTitle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  padding: 0 24px;
  // margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

const cardTag = css`
  height: 22px;
  padding: 0 20px;
  margin-bottom: 15px;
  overflow: hidden;

  span {
    &:hover {
      cursor: pointer;
    }
  }
`;

const cardDate = css`
  display: flex;
  justify-content: flex-end;
  padding: 0 18px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #868e96;
`;

const cardInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  color: #868e96;
`;

const cardInfoWriter = css`
  display: inline-block;
  margin-left: 5px;
  font-weight: 700;
  color: #000;
`;

const cardInfoLike = css`
  color: #000;

  svg {
    margin-right: 2px;
  }
`;

const cardInfoComment = css`
  margin-left: 8px;
  color: #000;

  svg {
    margin-right: 2px;
  }
`;

const PostCard = ({ post }) => {
  const tags = post.tag;

  return (
    <div css={card}>
      <Link href={`/post/${post.id}`}>
        <a>
          <div css={cardTitle}>{post.title}</div>
        </a>
      </Link>
      <div css={cardTag}>
        {tags.map((tag) => {
          return (
            <Tag key={tag.id} color="purple">
              <Link href={`/hashtag/${tag}`}>
                <a>{tag}</a>
              </Link>
            </Tag>
          );
        })}
      </div>
      <div css={cardDate}>{post.date}</div>
      <div css={cardInfo}>
        <Link href={`/user/${post.writer}`}>
          <a>
            <div>
              <span>by</span>
              <span css={cardInfoWriter}>{post.writer}</span>
            </div>
          </a>
        </Link>
        <div>
          <span css={cardInfoLike}>
            <HeartFilled />
            {post.like}
          </span>
          <span css={cardInfoComment}>
            <MessageFilled />
            {post.comment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
