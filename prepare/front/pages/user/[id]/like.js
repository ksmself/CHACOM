/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';

import Header from '../../../components/Header';
import wrapper from '../../../store/configureStore';
import { likeTitle } from '../styles';
import { LOAD_MY_INFO_REQUEST } from '../../../reducers/user';
import MainContent from '../../../components/MainContent';
import ContentNull from '../../../components/ContentNull';

const LikePost = () => {
  const { me } = useSelector((state) => state.user);
  const posts = me?.Liked;

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
      {posts.length === 0 && <ContentNull />}
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
