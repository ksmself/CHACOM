/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';

import Header from '../../../components/Header';
import wrapper from '../../../store/configureStore';
import { likeTitle } from '../styles';
import { LOAD_MY_INFO_REQUEST } from '../../../reducers/user';
import MainContent from '../../../components/MainContent';

const LikePost = () => {
  const router = useRouter();
  const { me, logOutDone } = useSelector((state) => state.user);
  const posts = me?.Liked;

  useEffect(() => {
    if (logOutDone) {
      router.replace('/');
    }
  }, [logOutDone, router]);

  return (
    <>
      <header>
        <Header />
      </header>
      <div css={likeTitle}>
        <span>좋아요 누른 글</span>
        <span>{posts?.length}</span>
      </div>
      {posts && <MainContent posts={posts} />}
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
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default LikePost;
