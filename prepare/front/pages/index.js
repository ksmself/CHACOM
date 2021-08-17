/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';

import Header from '../components/Header/index';
import TitleLogo from '../components/TitleLogo';
import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';
import ContentNull from '../components/ContentNull';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

export const homePage = css`
  padding-bottom: 30px;

  @media (min-width: 768px) {
    padding-bottom: 70px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 150px;
  }
`;

// localhost:3000, 즉, 메인 페이지
const Home = () => {
  const dispatch = useDispatch();
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector(
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
            type: LOAD_POSTS_REQUEST,
            data: lastId,
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
      <Header />
      <TitleLogo />
      <SearchBar />
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
      console.log(cookie);
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
