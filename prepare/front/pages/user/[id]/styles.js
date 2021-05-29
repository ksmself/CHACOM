/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const contentBox = css`
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

export const title = css`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 48px;
    font-size: 40px;
  }

  span:first-of-type {
    margin-right: 15px;
  }
`;

export const postGroup = css`
  width: 100%;
`;

export const postBox = css`
  display: flex;
  justify-content: space-between;
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

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const postInfoBox = css`
  width: 80%;
`;

export const postTitle = css`
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

export const postDate = css`
  color: #696969;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const buttonGroup = css`
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
