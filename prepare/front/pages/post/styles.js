/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const post = css`
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

export const postTitle = css`
  margin-bottom: 10px;
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
  margin-bottom: 15px;

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
  font-weight: 700;

  a {
    display: inline-block;
    margin-right: 3px;
  }
`;

export const postInfoBullet = css`
  margin-right: 3px;
`;

export const postInfoDate = css`
  color: #646a70;
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
  left: -20px;
  font-size: 44px;
  color: #00adcb;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    left: -22px;
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    left: -24px;
    font-size: 56px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const rightArrow = css`
  position: absolute;
  top: 50%;
  right: -20px;
  font-size: 44px;
  color: #00adcb;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    right: -22px;
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    right: -24px;
    font-size: 56px;
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
