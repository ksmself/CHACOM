/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PostCard from './PostCard';

const mainContent = css`
  display: grid;
  grid-template-columns: 290px;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 300px);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

const MainContent = ({ posts }) => {
  return (
    <div css={mainContent}>
      {posts?.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
};

export default MainContent;
