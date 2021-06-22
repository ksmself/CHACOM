/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';
import { Button, Popover } from 'antd';
import {
  UserOutlined,
  FormOutlined,
  CommentOutlined,
  HeartOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { roundBtn } from '../styles';
import CreateLoginForm from '../LoginForm';
import { LOG_OUT_REQUEST } from '../../reducers/user';
import {
  headerLogo,
  headerNonLogo,
  header,
  userIcon,
  Global,
  titleLogo,
  popoverTitle,
  popoverContent,
} from './styles';

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const [logInFormVisible, setLogInFormVisible] = useState(false);
  const onCreateLogInForm = useCallback(() => {
    setLogInFormVisible(false);
  }, []);

  const onClickLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
    setLogInFormVisible(false);
  }, []);

  const logo = (
    <div css={titleLogo}>
      <Link href="/">
        <a>CHACOM</a>
      </Link>
    </div>
  );

  const title = (
    <div css={popoverTitle}>
      <span>
        <strong>{me?.nickname}</strong>님
      </span>
      <Button onClick={onClickLogOut}>로그아웃</Button>
    </div>
  );

  const content = (
    <ul css={popoverContent}>
      <li>
        <Link href={`/user/${me?.id}/post`}>
          <a>
            <FormOutlined style={{ color: '#1D78FF' }} />
            <span>내가 쓴 글</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/user/${me?.id}/like`}>
          <a>
            <HeartOutlined style={{ color: '#fe7171' }} />
            <span>좋아요 누른 글</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/user/${me?.id}/info`}>
          <a>
            <InfoCircleOutlined style={{ color: '#6a6a6a' }} />
            <span>회원 정보 수정</span>
          </a>
        </Link>
      </li>
    </ul>
  );

  const pathName = router.pathname.match(/[/]\w+/);
  const postPage =
    pathName && (pathName[0] === '/post' || pathName[0] === '/user');

  const logInHeader = (
    <div css={postPage ? headerLogo : headerNonLogo}>
      {postPage && logo}
      <div css={header}>
        <Global />
        <Link href="/write">
          <a>
            <Button type="primary" shape="round" css={roundBtn}>
              만들기
            </Button>
          </a>
        </Link>
        <Popover
          placement="bottomRight"
          title={title}
          content={content}
          trigger="click"
        >
          <UserOutlined css={userIcon} />
        </Popover>
      </div>
    </div>
  );

  const logOutHeader = (
    <div css={postPage ? headerLogo : headerNonLogo}>
      {postPage && logo}
      <div>
        <Button
          type="primary"
          shape="round"
          css={roundBtn}
          onClick={() => {
            setLogInFormVisible(true);
          }}
        >
          시작하기
        </Button>
        <CreateLoginForm
          visible={logInFormVisible}
          onCreate={onCreateLogInForm}
          onCancel={() => {
            setLogInFormVisible(false);
          }}
        />
      </div>
    </div>
  );

  return me ? logInHeader : logOutHeader;
};

export default Header;
