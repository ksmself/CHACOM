/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Tag } from 'antd';
import Link from 'next/link';
import { HeartFilled, MessageFilled } from '@ant-design/icons';

import day from './day';

const PostCard = ({ post }) => {
  const tags = post.Hashtags;
  const commentList = post.Comments.filter((v) => v.User !== null);

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
              <Link href={`/hashtag/${tag.name}`}>
                <a>{tag.name}</a>
              </Link>
            </Tag>
          );
        })}
      </div>
      <div css={cardDate}>{day(post.createdAt)}</div>
      <div css={cardInfo}>
        <Link href={`/user/${post.User.id}/post`}>
          <a>
            <div>
              <span>by</span>
              <span css={cardInfoWriter}>{post.User.nickname}</span>
            </div>
          </a>
        </Link>
        <div>
          <span css={cardInfoLike}>
            <HeartFilled />
            {post.Likers.length}
          </span>
          <span css={cardInfoComment}>
            <MessageFilled />
            {commentList.length}
          </span>
        </div>
      </div>
    </div>
  );
};

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
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
`;

const cardTag = css`
  height: 26px;
  padding: 0 20px;
  margin-bottom: 11px;
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

export default PostCard;
