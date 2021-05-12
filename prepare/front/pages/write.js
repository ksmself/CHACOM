/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Input } from 'antd';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
import { ADD_HASHTAG_REQUEST, REMOVE_HASHTAG_REQUEST } from '../reducers/post';
import ExpressionBox from '../components/ExpressionBox';

const { TextArea } = Input;

const writePage = css`
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

const Write = () => {
  const dispatch = useDispatch();
  const { currentHashtags, currentExpressions } = useSelector(
    (state) => state.post
  );

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

  return (
    <div css={writePage}>
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
      <ExpressionBox />
    </div>
  );
};

export default Write;
