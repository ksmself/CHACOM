/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';

import Header from '../components/Header/index';
import TitleLogo from '../components/TitleLogo';
import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const homePage = css`
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
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div css={homePage}>
      <Header />
      <TitleLogo />
      <SearchBar />
      {mainPosts && <MainContent posts={mainPosts} />}
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
