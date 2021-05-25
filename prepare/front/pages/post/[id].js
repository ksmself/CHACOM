/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tag } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';
import {
  LeftCircleFilled,
  LeftCircleTwoTone,
  RightCircleFilled,
} from '@ant-design/icons';

import Header from '../../components/Header/index';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import {
  post,
  postTitle,
  buttonGroup,
  postInfoBox,
  postInfoWriter,
  postInfoBullet,
  postInfoDate,
  hashtagBox,
  contentBox,
  leftArrow,
  rightArrow,
  expressionNum,
  pinyin,
  meaning,
} from './styles';
import UpdateBtn from '../../components/UpdateBtn';
import DeleteBtn from '../../components/DeleteBtn';
import LikeBtn from '../../components/LikeBtn';

dayjs.locale('ko');

const Post = () => {
  const dispatch = useDispatch();
  // const { singlePost } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  const router = useRouter();
  const { id } = router.query;

  const singlePost = {
    id: 1,
    title: '(-가 -하다) 왕초보편',
    createdAt: '2021-05-20 08:18:40',
    User: {
      id: 3,
      nickname: 'admin1',
    },
    Expressions: [
      { pinyin: 'Rènshi nǐ hěn gāoxìng!', meaning: '만나서 반갑습니다!' },
      {
        pinyin: 'Wǒ yào yí ge sǎn hào tào cān.',
        meaning: '3번 세트 하나 주세요.',
      },
      {
        pinyin: 'Kuài guǒ lái chī, yíhuìr fāngbiànmiàn dōu pào kāi le.',
        meaning: '라면 불기 전에 빨리 와서 먹어.',
      },
      { pinyin: 'Nǐ chī ròu ma?', meaning: '당신은 고기를 먹습니까?' },
      { pinyin: 'Nǐ dǒng ma?', meaning: '당신은 이해가 됩니까?' },
    ],
    Hashtags: [
      { id: 1, name: '왕초보' },
      { id: 2, name: '테스트' },
      { id: 3, name: '반시밀당반시상' },
      // { id: 4, name: '드라마' },
      // { id: 5, name: '실생활표현' },
      // { id: 6, name: '일상회화' },
      // { id: 7, name: '어서사오작' },
      // { id: 8, name: '전문중적진천천' },
      // { id: 9, name: '나의아름다웠던그대에게' },
    ],
    Comments: {},
    Likers: {},
  };

  const writtenByMe = me?.nickname === singlePost.User.nickname;

  const [curIndex, setCurIndex] = useState(0);

  const goToPrev = useCallback(() => {
    if (curIndex === 0) setCurIndex(singlePost.Expressions.length - 1);
    else setCurIndex((prev) => prev - 1);
  }, [curIndex]);

  const goToNext = useCallback(() => {
    if (curIndex === singlePost.Expressions.length - 1) setCurIndex(0);
    else setCurIndex((prev) => prev + 1);
  }, [curIndex]);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //     data: id,
  //   });
  // }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <div css={post}>
        <div css={postTitle}>{singlePost.title}</div>
        {writtenByMe && (
          <div css={buttonGroup}>
            <UpdateBtn post={singlePost} />
            <DeleteBtn post={singlePost} />
          </div>
        )}
        <div css={postInfoBox}>
          <div>
            <span css={postInfoWriter}>
              <Link href={`/user/${singlePost.User.id}`}>
                <a>{singlePost.User.nickname}</a>
              </Link>
            </span>
            <span css={postInfoBullet}>·</span>
            <span css={postInfoDate}>
              {dayjs(singlePost.createdAt).format('YYYY년 MM월 DD일')}
            </span>
          </div>
          <LikeBtn post={singlePost} />
        </div>
        <div css={hashtagBox}>
          {singlePost.Hashtags.map((tag) => {
            return (
              <Tag key={tag.id} color="purple">
                <Link href={`/hashtag/${tag.name}`}>
                  <a>{tag.name}</a>
                </Link>
              </Tag>
            );
          })}
        </div>
        <div css={contentBox}>
          <i
            className="fas fa-chevron-left"
            css={leftArrow}
            onClick={goToPrev}
          ></i>
          <div css={expressionNum}>
            <div>
              {curIndex + 1} / {singlePost.Expressions.length}
            </div>
          </div>
          <div css={pinyin}>{singlePost.Expressions[curIndex].pinyin}</div>
          <div css={meaning}>{singlePost.Expressions[curIndex].meaning}</div>
          <i
            className="fas fa-chevron-right"
            css={rightArrow}
            onClick={goToNext}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Post;
