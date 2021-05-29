/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import Router from 'next/router';
import { useCallback } from 'react';

import { greyBtn } from './styles';

const UpdateBtn = ({ post }) => {
  const onClickUpdate = useCallback(() => {
    Router.push(`/update/post/${post.id}`);
  }, []);

  return (
    <button css={greyBtn} onClick={onClickUpdate}>
      수정
    </button>
  );
};

export default UpdateBtn;
