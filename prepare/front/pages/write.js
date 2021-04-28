/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { Button, Input } from 'antd';
import { ArrowLeftOutlined, PictureOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { useEffect, useRef } from 'react';

import { roundBtn } from '../components/styles';

const { TextArea } = Input;

const headerHeight = ['63px', '71px', '87px'];

const headerBox = css`
  position: relative;
  height: ${headerHeight[0]};
  z-index: 1;

  @media (min-width: 768px) {
    height: ${headerHeight[1]};
  }

  @media (min-width: 1024px) {
    height: ${headerHeight[2]};
  }
`;

const headerContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(58, 24, 255, 0.7);
  background-color: #fff;

  @media (min-width: 1024px) {
    padding: 18px 40px;
  }
`;

const arrowIcon = css`
  font-size: 22px;
  color: #3a18ff;

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

const mainBox = css`
  position: relative;
`;

const textBox = css`
  padding: 12px 14px;
  font-size: 20px;
  caret-color: #18ddff;
  border: none;

  @media (min-width: 768px) {
    padding: 16px 18px;
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    padding: 24px;
  }

  &::placeholder {
    color: #6a7481;
  }
`;

const line = css`
  display: flex;
  width: calc(100% - 20px);
  height: 1px;
  margin-left: 20px;
  background-color: rgb(235, 238, 240);

  @media (min-width: 768px) {
    width: calc(100% - 30px);
    margin-left: 30px;
  }
`;

const buttonBox = css`
  display: flex;
  align-items: center;
  height: ${headerHeight[0]};
  padding-left: 20px;

  @media (min-width: 768px) {
    height: ${headerHeight[1]};
    padding-left: 30px;
  }

  @media (min-width: 1024px) {
    height: ${headerHeight[2]};
  }
`;

const pictureIcon = css`
  margin-right: 20px;
  font-size: 38px;
  cursor: pointer;
  color: #3a18ff;

  @media (min-width: 768px) {
    font-size: 44px;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
  }

  &:hover {
    color: #18ddff;
  }
`;

const pinyinBtn = css`
  width: 92px;
  margin-right: 20px;
  color: #fff;
  border-color: #3a18ff;
  background-color: #3a18ff;

  @media (min-width: 768px) {
    height: 36px;
  }

  @media (min-width: 1024px) {
    width: 104px;
    height: 40px;
  }

  &:hover {
    color: #000;
    border-color: #18ddff;
    background-color: #18ddff;

    span::before {
      content: 'Pīnyīn';
    }
  }

  &:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  span {
    &:before {
      content: '한어병음';
      font-size: 15px;
      font-weight: 700;

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
`;

const hanziBtn = css`
  width: 77px;
  color: #fff;
  border-color: #3a18ff;
  background-color: #3a18ff;

  @media (min-width: 768px) {
    height: 36px;
  }

  @media (min-width: 1024px) {
    width: 86px;
    height: 40px;
  }

  &:hover {
    color: #000;
    border-color: #18ddff;
    background-color: #18ddff;

    span::before {
      content: '汉字';
    }
  }

  &:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  span {
    &:before {
      content: '간체자';
      font-size: 15px;
      font-weight: 700;

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
`;

const Global = createGlobalStyle`
  .ant-input{
    color: #000;
  }

  .ant-input:focus{
    -webkit-box-shadow: none;
  }
`;

const Write = () => {
  const router = useRouter();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <Global />
      <header css={headerBox}>
        <div css={headerContent}>
          <ArrowLeftOutlined
            onClick={() => {
              router.replace('/');
            }}
            css={arrowIcon}
          />
          <Button shape="round" css={roundBtn}>
            글쓰기
          </Button>
        </div>
      </header>
      <main css={mainBox}>
        <TextArea
          placeholder="I'm learning..."
          css={textBox}
          autoSize={{ minRows: 4 }}
          ref={inputRef}
        />
        <div css={line}></div>
        <div css={buttonBox}>
          <PictureOutlined css={pictureIcon} />
          <Button css={pinyinBtn}>
            <span></span>
          </Button>
          <Button css={hanziBtn}>
            <span></span>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Write;
