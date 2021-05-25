/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import { greyBtn } from './styles';

const UpdateBtn = ({ post }) => {
  return (
    <Link href={`/update/post/${post.id}`}>
      <a>
        <button css={greyBtn}>수정</button>
      </a>
    </Link>
  );
};

export default UpdateBtn;
