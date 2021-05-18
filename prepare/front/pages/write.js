/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Input, Button, Modal } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ArrowLeftOutlined,
  PlusCircleFilled,
  CloseOutlined,
} from '@ant-design/icons';
import Router from 'next/router';
import { createGlobalStyle } from 'styled-components';

import useInput from '../hooks/useInput';
import {
  ADD_HASHTAG_REQUEST,
  REMOVE_HASHTAG_REQUEST,
  ADD_POST_REQUEST,
} from '../reducers/post';
import { roundBtn } from '../components/styles';
import ConvertPopUp from '../components/ConvertPopUp';

const { TextArea } = Input;

const Write = () => {
  const dispatch = useDispatch();
  const { currentHashtags, addPostDone } = useSelector((state) => state.post);

  const [title, onChangeTitle] = useInput('');
  const [tag, onChangeTag, setTag] = useInput('');

  const onFocusInput = useCallback(() => {
    document.getElementById('tag-info').style.display = 'block';
  }, []);
  const onBlurInput = useCallback(() => {
    document.getElementById('tag-info').style.display = 'none';
  }, []);

  const onKeyPressTag = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        // 빈칸으로 입력하지 않았을때만 리스트에 추가
        if (tag.trim() !== '') {
          // 이미 있는 해시태그가 아닐때만 리스트에 추가
          if (!currentHashtags.includes(tag)) {
            // #을 붙여서 해시태그를 입력했을 때는 #을 떼고
            if (tag[0] === '#') {
              dispatch({
                type: ADD_HASHTAG_REQUEST,
                data: tag.slice(1),
              });
            } else {
              dispatch({
                type: ADD_HASHTAG_REQUEST,
                data: tag,
              });
            }
          }
        }
        setTag('');
      }
    },
    [tag]
  );

  const onClickTag = useCallback((v) => {
    dispatch({
      type: REMOVE_HASHTAG_REQUEST,
      data: v,
    });
  }, []);

  const [expressions, setExpressions] = useState([
    { expressionNumber: 1, pinyin: '', meaning: '' },
  ]);

  const onChangeText = useCallback(
    (expressionNum) => (e) => {
      const tempExpressions = expressions.map((expression) => {
        if (expressionNum === expression.expressionNumber) {
          expression[e.target.name] = e.target.value;
        }
        return expression;
      });
      setExpressions(tempExpressions);
    },
    [expressions]
  );

  const addExpression = useCallback(() => {
    const data = {
      expressionNumber: expressions.length + 1,
      pinyin: '',
      meaning: '',
    };
    setExpressions([...expressions, data]);
  }, [expressions]);

  const deleteExpression = useCallback(
    (expressionNum) => () => {
      const tempExpressions = expressions.filter(
        (v) => v.expressionNumber !== expressionNum
      );
      let order = 1;
      const arrangedExpressions = tempExpressions.map((v) => {
        v.expressionNumber = order;
        order++;
        return v;
      });
      setExpressions([...arrangedExpressions]);
    },
    [expressions]
  );

  const addPost = useCallback(() => {
    let isExpressionNull = false;
    expressions.map((v) => {
      if (!v.pinyin || !v.meaning) {
        isExpressionNull = true;
      }
    });

    if (!title && !isExpressionNull) {
      Modal.warning({
        title: '제목을 입력해주세요!',
      });
    }
    if (isExpressionNull && title) {
      Modal.warning({
        title: '비어있는 표현을 모두 채워주세요!',
      });
    }
    if (!title && isExpressionNull) {
      Modal.warning({
        title: '비어있는 제목과 표현을 모두 채워주세요!',
      });
    }

    // 빈칸 없이 모두 입력되었을 때 표현 업로드하기
    if (title && !isExpressionNull) {
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          title: title,
          tag: currentHashtags,
          expression: expressions,
        },
      });
    }
  }, [title, currentHashtags, expressions]);

  useEffect(() => {
    if (addPostDone) {
      Router.replace('/');
    }
  }, [addPostDone]);

  return (
    <>
      <Global />
      <div css={writePage}>
        <div css={writeBox}>
          <TextArea
            css={titleBox}
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={onChangeTitle}
            autoSize={{ minRows: 1 }}
          />
          <div css={tagBox}>
            <div css={tags}>
              {currentHashtags.map((v, index) => {
                return (
                  <button key={v} onClick={() => onClickTag(v)}>
                    {v}
                  </button>
                );
              })}
              <input
                placeholder="태그를 입력해주세요"
                value={tag}
                onChange={onChangeTag}
                onKeyPress={onKeyPressTag}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
              />
            </div>
            <div id="tag-info" css={tagInfoBox}>
              쉼표 혹은 엔터를 입력하여 태그를 등록할 수 있습니다. 등록된 태그를
              클릭하면 삭제됩니다.
            </div>
          </div>
          <div css={line}></div>
          {/* <ExpressionBox /> */}
          <div css={expressionBox}>
            {expressions.map((v, index) => {
              return (
                <div css={box} key={v.expressionNumber}>
                  <div css={pinyinBox}>
                    <input
                      name="pinyin"
                      placeholder="한어병음을 입력해주세요"
                      value={v.pinyin}
                      onChange={onChangeText(index + 1)}
                    />
                    {index !== 0 && (
                      <CloseOutlined onClick={deleteExpression(index + 1)} />
                    )}
                    <ConvertPopUp />
                  </div>
                  <input
                    name="meaning"
                    placeholder="뜻을 입력해주세요"
                    value={v.meaning}
                    onChange={onChangeText(index + 1)}
                  />
                </div>
              );
            })}
          </div>
          <div css={plusBtnBox}>
            <PlusCircleFilled onClick={addExpression} />
          </div>
        </div>
        <footer css={footerBox}>
          <ArrowLeftOutlined onClick={() => Router.replace('/')} />
          <Button type="primary" shape="round" css={roundBtn} onClick={addPost}>
            만들기
          </Button>
        </footer>
      </div>
    </>
  );
};

const writePage = css`
  position: relative;
`;

const writeBox = css`
  display: flex;
  flex-direction: column;
  margin: 30px 20px 0;
`;

const titleBox = css`
  width: 100%;
  padding: 4px 0;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  border: none;

  &:focus {
    border: none;
    box-shadow: none;
  }
`;

const tagBox = css`
  margin-bottom: 10px;
`;

const tags = css`
  align-items: center;
  flex-wrap: nowrap;

  button {
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    border: 1px solid #d3adf7;
    border-radius: 2px;
    color: #531dab;
    background-color: #f9f0ff;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    font-size: 14px;
    border: none;
  }
`;

const tagInfoBox = css`
  display: none;
  width: 220px;
  padding: 5px;
  font-size: 13px;
  color: #fff;
  background-color: #3a18ff;
`;

const line = css`
  width: 40px;
  height: 10px;
  margin-bottom: 25px;
  background-color: #48494b;
`;

const expressionBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const box = css`
  position: relative;
  width: 100%;
  padding: 30px 15px;
  margin-bottom: 20px;
  border: 3px solid #18ddff;
  border-radius: 4px;

  input {
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #48494b;
  }

  span {
    position: absolute;
    top: -12px;
    right: -2px;
    cursor: pointer;
  }
`;

const pinyinBox = css`
  position: relative;
  height: 52px;
  margin-bottom: 15px;

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 13px;
  }
`;

const plusBtnBox = css`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  svg {
    font-size: 50px;
    color: #3a18ff;
  }
`;

const footerBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 15px;
  box-shadow: 0px 0px 8px rgba(58, 24, 255, 20%);
  background-color: #fff;

  span {
    cursor: pointer;
  }

  svg {
    font-size: 20px;
  }
`;

const Global = createGlobalStyle`
  .ant-modal-confirm-body-wrapper
    > .ant-modal-confirm-body
    > .ant-modal-confirm-title {
    font-weight: 700;
  }
`;

export default Write;
