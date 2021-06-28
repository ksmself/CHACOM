/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import wrapper from '../../store/configureStore';
import { likeTitle } from '../user/styles';

const HashtagPost = () => {
  const router = useRouter();
  const hashtag = router.query;
  const posts = useSelector((state) => state.post.mainPosts);

  return (
    <>
      <header>
        <Header />
      </header>
      <div css={likeTitle}>
        <span>#{hashtag?.tag}</span>
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
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: context.params.tag,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default HashtagPost;
