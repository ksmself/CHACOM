/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';

import ConvertPopUp from './ConvertPopUp';
import { CHANGE_SEARCH_REQUEST, SEARCH_POST_REQUEST } from '../reducers/post';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.post);
  const [searchKeyWord, setSearchKeyWord] = useState(search || '');

  const [timer, setTimer] = useState(0);
  const onChangeSearchKeyWord = useCallback(
    (e) => {
      setSearchKeyWord(e.target.value);
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(async () => {
        try {
          await dispatch({
            type: CHANGE_SEARCH_REQUEST,
            data: searchKeyWord,
          });
        } catch (err) {
          console.error(err);
        }
      }, 200);
      setTimer(newTimer);
    },
    [searchKeyWord]
  );

  useEffect(() => {
    setSearchKeyWord(search ? searchKeyWord : '');
  }, [search]);

  const onClickSearch = useCallback(() => {
    dispatch({
      type: SEARCH_POST_REQUEST,
      data: searchKeyWord,
    });
  }, [searchKeyWord]);

  const onKeyPressEnter = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        console.log(searchKeyWord);
      }
    },
    [searchKeyWord]
  );

  return (
    <Row justify="center">
      <Col css={searchBox}>
        <div css={searchBar}>
          <input
            value={searchKeyWord}
            onChange={onChangeSearchKeyWord}
            onKeyPress={onKeyPressEnter}
            placeholder="검색어를 입력해주세요"
          />
          <SearchOutlined onClick={onClickSearch} />
        </div>
        <ConvertPopUp />
      </Col>
    </Row>
  );
};

const searchBox = css`
  position: relative;
  height: 70px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    height: 80px;
    margin-bottom: 50px;
  }

  @media (min-width: 1024px) {
    height: 106px;
    margin-bottom: 60px;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const searchBar = css`
  display: block;
  position: relative;
  width: 260px;
  height: 40px;
  border-radius: 18px;
  border: 2px solid #3a18ff;

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

export default SearchBar;
