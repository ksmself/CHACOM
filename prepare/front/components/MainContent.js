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
      title:
        '반시밀당 1회 라운희 대사김형중좋았나봐듣고있는중입니다. 옛날 노래들이 요즘 정말 좋더라구요. 오늘은 올리브영에서 당근패드랑 크림이랑 이것저것 구매를 해보았',
      content: null,
      tag: ['라운희', '반시밀당반시상', '드라마', '실생활'],
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
      title: "'종결혼개시연애' 유유만큼의 표현력이라도 얻고 싶은 사람들 드루와",
      content: null,
      tag: ['종결혼개시연애', '드라마'],
      date: '2021년 5월 28일',
      writer: 'yuyubaba_02',
      like: 4,
      comment: 2,
    },
    {
      title:
        '라오윤시가 라방에서 게임할 때 사용한 표현 총정리 + 라오윤시가 브이로그에서 자주 사용하는 표현은 바로',
      content: null,
      tag: ['라운희', 'luó yún xī'],
      date: '2021년 5월 29일',
      writer: 'luvyunxi',
      like: 9,
      comment: 5,
    },
    {
      title:
        '라오윤시가 라방에서 게임할 때 사용한 표현 총정리 + 라오윤시가 브이로그에서 자주 사용하는 표현은 바로',
      content: null,
      tag: ['라운희', 'luó yún xī'],
      date: '2021년 5월 29일',
      writer: 'luvyunxi',
      like: 9,
      comment: 5,
    },
    {
      title: '반시밀당 1회 라운희 대사',
      content: null,
      tag: ['라운희', '반시밀당반시상', '드라마', '실생활'],
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
      title: '란잔을 좋아했던 사람이라면 무조건 알 수 있는 표현 7가지',
      content: null,
      tag: ['왕이보', '진정령', '드라마'],
      date: '2021년 5월 24일',
      writer: 'bylulu_02',
      like: 24,
      comment: 1,
    },
  ];

  return (
    <div css={mainContent}>
      {mainPosts.map((v) => {
        return <PostCard post={v} />;
      })}
    </div>
  );
};

export default MainContent;
