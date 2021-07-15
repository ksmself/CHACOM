/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const greyContent = css`
  width: 80%;
  margin: 0 auto;
  padding: 50px 10px;
  text-align: center;
  background-color: #e9e9e9;

  @media (min-width: 768px) {
    padding: 90px 10px;
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    padding: 120px 10px;
    font-size: 27px;
  }
`;

const ContentNull = () => {
  return <div css={greyContent}>아직 게시물이 존재하지 않습니다.</div>;
};

export default ContentNull;
