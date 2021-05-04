/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import ConvertPopUp from './ConvertPopUp';

const searchBar = css`
  display: block;
  position: relative;
  width: 260px;
  height: 40px;
  border-radius: 18px;
  border: 2px solid #482ce5;

  @media (min-width: 768px) {
    width: 400px;
    height: 45px;
  }

  @media (min-width: 1024px) {
    width: 700px;
    height: 60px;
    border-width: 5px;
    border-radius: 20px;
  }

  input {
    width: 200px;
    height: 34px;
    margin-left: 12px;
    font-size: 17px;
    border: none;
    // background-color: #e0ff31;

    @media (min-width: 768px) {
      width: 340px;
      height: 40px;
      font-size: 19px;
    }

    @media (min-width: 1024px) {
      width: 630px;
      height: 50px;
      font-size: 22px;
    }
  }

  span {
    width: 36px;
    height: 36px;
    position: absolute;
    right: -1px;
    // border-radius: 50%;
    // background-color: #ff99fe;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }

    @media (min-width: 1024px) {
      width: 45px;
      height: 50px;
    }
  }

  span:hover {
    cursor: pointer;
  }

  svg {
    position: absolute;
    top: 7px;
    left: 4px;
    font-size: 20px;
    color: #482ce5;

    @media (min-width: 768px) {
      left: 0;
      font-size: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }
  }
`;

const SearchBar = () => {
  return (
    <Row justify="center">
      <Col>
        <div css={searchBar}>
          <input placeholder="검색어를 입력해주세요." />
          <SearchOutlined />
        </div>
        <ConvertPopUp />
      </Col>
    </Row>
  );
};

export default SearchBar;
