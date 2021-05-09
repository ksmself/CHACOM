/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Row, Col } from 'antd';

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

const MainContent = () => {
  const mainPosts = [
    {
      title: '반시밀당 1회 라운희 대사',
      content: null,
      tag: ['라운희', '반시밀당반시상', '드라마', '실생활표현'],
      date: '2021년 5월 9일',
      writer: 'luoyunxi_02',
      like: 33,
      comment: 3,
    },
    {
      title: '란잔을 좋아했던 사람이라면 무조건 알 수 있는 표현 7가지',
      content: null,
      tag: ['왕이보', '진정령', '드라마'],
      date: '2021년 5월 24일',
      writer: 'bylulu_02',
      like: 24,
      comment: 1,
    },
    {
      title: '인사로 가장 많이 쓰이는 표현 10가지',
      content: null,
      tag: ['인사'],
      date: '2021년 5월 28일',
      writer: 'yuyubaba_02',
      like: 4,
      comment: 2,
    },
    {
      title: '라운희가 210327 라방에서 게임하면서 사용한 표현 모두 알아보기',
      content: null,
      tag: ['라운희', 'luó yún xī', '게임'],
      date: '2021년 5월 29일',
      writer: 'luvyunxi',
      like: 9,
      comment: 5,
    },
    {
      title: '중국인 vlogger들이 영상에서 자주 사용하는 표현',
      content: null,
      tag: ['vlog', '실생활'],
      date: '2021년 5월 29일',
      writer: 'luvyunxi',
      like: 9,
      comment: 5,
    },
  ];

  return (
    <div css={mainContent}>
      {mainPosts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
};

export default MainContent;
