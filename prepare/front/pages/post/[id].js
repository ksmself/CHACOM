/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tag } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';
import { END } from 'redux-saga';
import axios from 'axios';

import Header from '../../components/Header/index';
import { LOAD_POSTS_REQUEST, LOAD_POST_REQUEST } from '../../reducers/post';
import {
  post,
  postTitle,
  buttonGroup,
  postInfoBox,
  postInfoWriter,
  postInfoBullet,
  postInfoDate,
  hashtagBox,
  contentBox,
  leftArrow,
  rightArrow,
  expressionNum,
  pinyin,
  meaning,
} from './styles';
import UpdateBtn from '../../components/UpdateBtn';
import DeleteBtn from '../../components/DeleteBtn';
import LikeBtn from '../../components/LikeBtn';
import wrapper from '../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

dayjs.locale('ko');

const Post = () => {
  const { singlePost } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  const writtenByMe = me?.id === singlePost?.User.id;

  const [curIndex, setCurIndex] = useState(0);

  const goToPrev = useCallback(() => {
    if (singlePost) {
      if (curIndex === 0) setCurIndex(singlePost.Expressions.length - 1);
      else setCurIndex((prev) => prev - 1);
    }
  }, [singlePost, curIndex]);

  const goToNext = useCallback(() => {
    if (singlePost) {
      if (curIndex === singlePost.Expressions.length - 1) setCurIndex(0);
      else setCurIndex((prev) => prev + 1);
    }
  }, [singlePost, curIndex]);

  return (
    <>
      <header>
        <Header />
      </header>
      {singlePost && (
        <div css={post}>
          <div css={postTitle}>{singlePost.title}</div>
          {writtenByMe && (
            <div css={buttonGroup}>
              <UpdateBtn post={singlePost} />
              <DeleteBtn post={singlePost} />
            </div>
          )}
          <div css={postInfoBox}>
            <div>
              <span css={postInfoWriter}>
                <Link href={`/user/${singlePost?.User.id}`}>
                  <a>{singlePost.User.nickname}</a>
                </Link>
              </span>
              <span css={postInfoBullet}>·</span>
              <span css={postInfoDate}>
                {dayjs(singlePost.createdAt).format('YYYY년 MM월 DD일')}
              </span>
            </div>
            <LikeBtn post={singlePost} />
          </div>
          <div css={hashtagBox}>
            {singlePost.Hashtags.map((tag) => {
              return (
                <Tag key={tag.id} color="purple">
                  <Link href={`/hashtag/${tag.name}`}>
                    <a>{tag.name}</a>
                  </Link>
                </Tag>
              );
            })}
          </div>
          <div css={contentBox}>
            <i
              className="fas fa-chevron-left"
              css={leftArrow}
              onClick={goToPrev}
            ></i>
            <div css={expressionNum}>
              <div>
                {curIndex + 1} / {singlePost.Expressions.length}
              </div>
            </div>
            <div css={pinyin}>{singlePost.Expressions[curIndex].pinyin}</div>
            <div css={meaning}>{singlePost.Expressions[curIndex].meaning}</div>
            <i
              className="fas fa-chevron-right"
              css={rightArrow}
              onClick={goToNext}
            ></i>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Post;
