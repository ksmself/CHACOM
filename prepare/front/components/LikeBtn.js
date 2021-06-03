/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';
import { createGlobalStyle } from 'styled-components';

import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../reducers/post';

const Global = createGlobalStyle`
  .ant-modal-confirm-body .ant-modal-confirm-title{
    font-weight: 700;
  }
`;

const likeBox = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  padding: 4px 12px;
  border: 3px solid #cfcfcf;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 100px;
    border-radius: 25px;
  }

  @media (min-width: 1024px) {
    width: 120px;
    border-radius: 30px;
  }

  span {
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 24px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }

    &:first-of-type:hover {
      cursor: pointer;
    }
  }
`;

const LikeBtn = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const liked = post.Likers.find((v) => v.id === id);

  const onLike = useCallback(() => {
    if (!id) {
      return Modal.error({ title: '로그인이 필요합니다.' });
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnLike = useCallback(() => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  return (
    <>
      <Global />
      <div css={likeBox}>
        {liked ? (
          <HeartTwoTone twoToneColor="#ff748c" onClick={onUnLike} />
        ) : (
          <HeartOutlined onClick={onLike} />
        )}
        <span>{post.Likers ? post.Likers.length : 0}</span>
      </div>
    </>
  );
};

export default LikeBtn;
