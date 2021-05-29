/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { createGlobalStyle } from 'styled-components';

export const headerLogo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 0 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 60px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 70px;
    padding: 0 180px;
  }
`;

export const headerNonLogo = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 60px;
    padding: 0 60px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 70px;
    padding: 0 180px;
  }
`;

export const header = css`
  display: flex;
  align-items: center;

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

export const userIcon = css`
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

export const Global = createGlobalStyle`
  .ant-popover-title{
    padding-right: 8px;
  }
`;

export const titleLogo = css`
  font-size: 26px;
  font-weight: 700;
  color: #3a18ff;

  @media (min-width: 768px) {
    font-size: 34px;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

export const popoverTitle = css`
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

export const popoverContent = css`
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;

  li {
    padding: 5px 0;

    &:hover {
      background-color: #f8f8f8;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
