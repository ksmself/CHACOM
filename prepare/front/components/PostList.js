/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import UpdateBtn from './UpdateBtn';
import DeleteBtn from './DeleteBtn';
import {
  userButtonGroup,
  userPostBox,
  userPostDate,
  userPostInfoBox,
  userPostTitle,
} from '../components/styles';
import day from './day';

const PostList = ({ post }) => {
  return (
    <div css={userPostBox}>
      <Link href={`/post/${post.id}`}>
        <a css={userPostInfoBox}>
          <div>
            <div css={userPostTitle}>{post.title}</div>
            <div css={userPostDate}>{day(post.createdAt, true)}</div>
          </div>
        </a>
      </Link>
      <div css={userButtonGroup}>
        <UpdateBtn post={post} />
        <DeleteBtn post={post} />
      </div>
    </div>
  );
};

export default PostList;
