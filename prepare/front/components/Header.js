/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useCallback, useEffect } from 'react';
import { Button, Popover } from 'antd';
import {
  UserOutlined,
  FormOutlined,
  CommentOutlined,
  HeartOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { roundBtn } from './styles';
import CreateLoginForm from './LoginForm';
import { LOG_OUT_REQUEST } from '../reducers/user';

const header = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 60px;
    padding: 0 45px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 70px;
    padding: 0 10vw;
  }

  a + span {
    margin-left: 10px;
    cursor: pointer;

    @media (min-width: 768px) {
      margin-left: 15px;
    }

    @media (min-width: 1024px) {
      margin-left: 20px;
    }
  }

  .ant-btn-primary:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }
`;

const userIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 17px;
  border: 2px solid #00d8fe;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    width: 48px;
    height: 48px;
    font-size: 28px;
    border-width: 3px;
  }

  svg {
    color: #00d8fe;
  }
`;

const Global = createGlobalStyle`
  .ant-popover-title{
    padding-right: 8px;
  }
`;

const popoverTitle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;

  @media (min-width: 768px) {
    width: 180px;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }

  button {
    padding: 2px 7px;
    font-size: 13px;
    border-radius: 15px;

    @media (min-width: 1024px) {
      font-size: 14px;
    }

    &:hover {
      color: #2758ff;
      border-color: #2758ff;
    }
  }
`;

const popoverContent = css`
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;

  li {
    padding: 5px 0;

    svg {
      margin-right: 10px;
    }
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  // const { me } = useSelector((state) => state.user);
  const me = true;

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

  const [writeFormVisible, setWriteFormVisible] = useState(false);
  const onCreateWriteForm = useCallback(() => {
    setWriteFormVisible(false);
  }, []);

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
        <Link href="/">
          <a>
            <FormOutlined style={{ color: '#1D78FF' }} />
            <span>내가 쓴 글</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <CommentOutlined style={{ color: '#3acd95' }} />
            <span>댓글 단 글</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <HeartOutlined style={{ color: '#fe7171' }} />
            <span>좋아요 누른 글</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <InfoCircleOutlined style={{ color: '#6a6a6a' }} />
            <span>회원 정보 수정</span>
          </a>
        </Link>
      </li>
    </ul>
  );

  return me ? (
    <div css={header}>
      <Global />
      <Link href="/write">
        <a>
          <Button
            type="primary"
            shape="round"
            css={roundBtn}
            onClick={() => {
              setWriteFormVisible(true);
            }}
          >
            만들기
          </Button>
        </a>
      </Link>
      {/* <WriteForm
        visible={writeFormVisible}
        onCreate={onCreateWriteForm}
        onCancel={() => {
          setWriteFormVisible(false);
        }}
      /> */}
      <Popover
        placement="bottomRight"
        title={title}
        content={content}
        trigger="click"
      >
        <UserOutlined css={userIcon} />
      </Popover>
    </div>
  ) : (
    <div css={header}>
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
  );
};

export default Header;
