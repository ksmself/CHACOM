/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useCallback } from 'react';
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

import { roundBtn } from './styles';
import CreateLoginForm from './LoginForm';

const header = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
  padding-right: 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 80px;
    padding-right: 45px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 100px;
    padding-right: 10vw;
  }

  button + span {
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
  const [logInDone, setLogInDone] = useState(false);

  const [visible, setVisible] = useState(false);
  const onCreate = useCallback(() => {
    setVisible(false);
  }, [visible]);

  const title = (
    <div css={popoverTitle}>
      <span>
        <strong>lawoonhee32</strong>님
      </span>
      <Button>로그아웃</Button>
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

  return logInDone ? (
    <div css={header}>
      <Global />
      <Button type="primary" shape="round" css={roundBtn}>
        글쓰기
      </Button>
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
          setVisible(true);
        }}
      >
        시작하기
      </Button>
      <CreateLoginForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default Header;
