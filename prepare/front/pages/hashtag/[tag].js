/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import { likeTitle } from '../../components/styles';
import ContentNull from '../../components/ContentNull';
import { homePage } from '../index';

const HashtagPost = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const hashtag = router.query;
  const name = hashtag?.tag;
  const { hasMorePost, loadPostsLoading, mainPosts } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePost && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            data: {
              tag: name,
              lastId: lastId,
            },
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostsLoading, mainPosts]);

  return (
    <div css={homePage}>
      <header>
        <Header />
      </header>
      <div css={likeTitle}>
        <span>#{name}</span>
      </div>
      {mainPosts && <MainContent posts={mainPosts} />}
      {mainPosts?.length === 0 && <ContentNull />}
    </div>
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
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: context.params.tag,
    });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default HashtagPost;
