/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import UpdateBtn from './UpdateBtn';
import DeleteBtn from './DeleteBtn';
import {
  buttonGroup,
  postBox,
  postDate,
  postInfoBox,
  postTitle,
} from '../pages/user/[id]/styles';
import day from './day';

const PostList = ({ post }) => {
  return (
    <div css={postBox}>
      <Link href={`/post/${post.id}`}>
        <a css={postInfoBox}>
          <div>
            <div css={postTitle}>{post.title}</div>
            <div css={postDate}>{day(post.createdAt, true)}</div>
          </div>
        </a>
      </Link>
      <div css={buttonGroup}>
        <UpdateBtn post={post} />
        <DeleteBtn post={post} />
      </div>
    </div>
  );
};

export default PostList;
