/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';
import { LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../reducers/post';

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
  // const liked = post.Likers.find((v) => v.id === id);
  const [liked, setLiked] = useState(false);

  const onLike = useCallback(() => {
    dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const onUnLike = useCallback(() => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  return (
    <div css={likeBox}>
      {liked ? (
        <HeartTwoTone twoToneColor="#ff748c" onClick={onUnLike} />
      ) : (
        <HeartOutlined onClick={onLike} />
      )}
      <span>{post.Likers ? 0 : post.Likers.length}</span>
    </div>
  );
};

export default LikeBtn;
