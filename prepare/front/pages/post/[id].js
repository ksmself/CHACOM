/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import Header from '../../components/Header/index';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <header>
        <Header />
      </header>
    </>
  );
};

export default Post;
