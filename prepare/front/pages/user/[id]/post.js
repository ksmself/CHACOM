/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';

import Header from '../../../components/Header';
import { contentBox, likeTitle, postGroup } from '../styles';
import PostList from '../../../components/PostList';
import wrapper from '../../../store/configureStore';
import {
  LOAD_MY_INFO_REQUEST,
  LOAD_USER_POST_REQUEST,
} from '../../../reducers/user';
import MainContent from '../../../components/MainContent';
import ContentNull from '../../../components/ContentNull';
import { homePage } from '../..';

const UserPost = () => {
  const { me, userPost } = useSelector((state) => state.user);
  const posts = userPost?.Posts;
  const myPost = me?.Posts;
  const writerIsMe = me && userPost && me?.id === userPost?.id;
  const userIsMe = me?.id === userPost?.id;
  const userIsNotMe = me?.id !== userPost?.id;

  return (
    <div css={homePage}>
      <header>
        <Header />
      </header>
      <div css={likeTitle}>
        <span>
          {writerIsMe
            ? '내가 쓴 글'
            : userPost
            ? `${userPost?.nickname}님의 글`
            : '알 수 없는 사용자입니다.'}
        </span>
        <span>{writerIsMe ? myPost?.length : posts?.length}</span>
      </div>
      {userIsMe && (
        <div css={contentBox}>
          <div css={postGroup}>
            {myPost &&
              myPost.map((post) => {
                return <PostList key={post.id} post={post} />;
              })}
          </div>
        </div>
      )}
      {userIsMe && myPost?.length === 0 && <ContentNull />}
      {userIsNotMe && posts && <MainContent posts={posts} />}
      {userIsNotMe && posts?.length === 0 && <ContentNull />}
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
      type: LOAD_USER_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default UserPost;
