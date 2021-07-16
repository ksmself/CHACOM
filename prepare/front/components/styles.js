/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const roundBtn = css`
  color: #fff;
  border-color: #3a18ff;
  background-color: #3a18ff;

  &:hover {
    color: #000;
    border-color: #18ddff;
    background-color: #18ddff;
  }

  &:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  @media (min-width: 768px) {
    width: 130px;
    height: 40px;
  }

  @media (min-width: 1024px) {
    width: 160px;
    height: 50px;
  }

  span {
    font-size: 13px;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 17px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const greyBtn = css`
  border: none;
  color: #868e96;
  background: none;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 23px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

// post styles
export const post = css`
  display: flex;
  flex-direction: column;
  padding: 0 30px 80px;

  @media (min-width: 768px) {
    padding: 0 70px 130px;
  }

  @media (min-width: 1024px) {
    padding: 0 200px 180px;
  }
`;

export const postTitle = css`
  margin-bottom: 16px;
  font-size: 36px;
  font-weight: 700;
  word-break: keep-all;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 42px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 25px;
    font-size: 48px;
  }
`;

export const buttonGroup = css`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 25px;
  }
`;

export const postInfoBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }

  span {
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 21px;
    }

    @media (min-width: 1024px) {
      font-size: 28px;
    }
  }
`;

export const postInfoWriter = css`
  display: block;
  font-weight: 700;

  @media (min-width: 768px) {
    display: inline-block;
  }

  a {
    display: inline-block;
    margin-right: 3px;
  }
`;

export const postInfoBullet = css`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 3px;
  }
`;

export const postInfoDate = css`
  display: block;
  color: #646a70;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const hashtagBox = css`
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }

  span {
    padding: 1px 8px;
    margin-bottom: 5px;
    font-size: 15px;

    @media (min-width: 768px) {
      padding: 5px 10px;
      margin-bottom: 8px;
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      padding: 12px 16px;
      margin-bottom: 12px;
      font-size: 24px;
    }
  }
`;

export const contentBox = css`
  position: relative;
  padding: 15px 20px 24px;
  border: 5px solid #18ddff;
  border-radius: 15px;

  @media (min-width: 768px) {
    padding: 24px 30px 40px;
  }
`;

export const leftArrow = css`
  position: absolute;
  top: 50%;
  left: -25px;
  font-size: 60px;
  color: #00adcb;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    left: -30px;
    font-size: 80px;
  }

  @media (min-width: 1024px) {
    left: -40px;
    font-size: 100px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const rightArrow = css`
  position: absolute;
  top: 50%;
  right: -25px;
  font-size: 60px;
  color: #00adcb;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: -30px;
    font-size: 80px;
  }

  @media (min-width: 1024px) {
    right: -40px;
    font-size: 100px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const expressionNum = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }

  div {
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 15px;
    color: #9c9c9c;
    background-color: #f5f5f5;

    @media (min-width: 768px) {
      padding: 6px 14px;
      font-size: 20px;
      border-radius: 20px;
    }

    @media (min-width: 1024px) {
      padding: 8px 14px;
      font-size: 24px;
      border-radius: 25px;
    }
  }
`;

export const pinyin = css`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 34px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 30px;
    font-size: 40px;
  }
`;

export const meaning = css`
  font-size: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 30px;
    font-size: 36px;
  }
`;

export const comment = css`
  display: flex;
  flex-direction: column;
  padding: 0 30px 100px;

  @media (min-width: 768px) {
    padding: 0 70px 200px;
  }

  @media (min-width: 1024px) {
    padding: 0 200px 300px;
  }
`;

export const commentNumber = css`
  padding-left: 3px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 21px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 30px;
    font-size: 26px;
  }
`;

// user post styles
export const userContentBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const userPostGroup = css`
  width: 80%;
`;

export const userPostBox = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 15px;
  border: 3px solid #3a18ff;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    padding: 30px 20px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 35px;
    padding: 40px 30px;
  }
`;

export const userPostInfoBox = css`
  width: 80%;

  &:hover {
    background-color: #f0f3fa;
  }
`;

export const userPostTitle = css`
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    margin-bottom: 5px;
    font-size: 28px;
  }
`;

export const userPostDate = css`
  color: #696969;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const userButtonGroup = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// like 페이지
export const likeTitle = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-top: 70px;
    margin-bottom: 50px;
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    margin-top: 85px;
    margin-bottom: 80px;
    font-size: 40px;
  }

  span:first-of-type {
    margin-right: 10px;
  }
`;
