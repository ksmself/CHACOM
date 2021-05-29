/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import dayjs from 'dayjs';

import UpdateBtn from './UpdateBtn';
import DeleteBtn from './DeleteBtn';
import {
  buttonGroup,
  postBox,
  postDate,
  postInfoBox,
  postTitle,
} from '../pages/user/[id]/styles';

const PostList = ({ postType, post }) => {
  return (
    <Link href={`/${postType}/${post.id}`}>
      <a>
        <div css={postBox}>
          <div css={postInfoBox}>
            <div css={postTitle}>{post.title}</div>
            <div css={postDate}>
              {dayjs(post.createdAt).format('YYYY-MM-DD hh:mm')}
            </div>
          </div>
          <div css={buttonGroup}>
            <UpdateBtn post={post} />
            <DeleteBtn post={post} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostList;
