/** @jsxImportSource @emotion/react */
import Router from 'next/router';
import { useCallback } from 'react';

import { greyBtn } from './styles';

const UpdateBtn = ({ post }) => {
  const onClickUpdate = useCallback(() => {
    Router.push(`/post/${post.id}/update`);
  }, [post]);

  return (
    <button css={greyBtn} onClick={onClickUpdate}>
      수정
    </button>
  );
};

export default UpdateBtn;
