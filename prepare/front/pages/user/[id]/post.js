/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';

import Header from '../../../components/Header';
import { contentBox, postGroup, title } from './styles';
import PostList from '../../../components/PostList';
import wrapper from '../../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../../reducers/user';

const UserPost = () => {
  const { me } = useSelector((state) => state.user);
  const posts = me?.Posts;

  return (
    <>
      <header>
        <Header />
      </header>
      <div css={contentBox}>
        <div css={title}>
          <span>내가 쓴 글</span>
          <span>{posts?.length}</span>
        </div>
        <div css={postGroup}>
          {posts &&
            posts.map((post) => {
              return <PostList key={post.id} postType="post" post={post} />;
            })}
        </div>
      </div>
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

export default UserPost;
