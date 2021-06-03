/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Modal } from 'antd';

import ConvertPopUp from '../ConvertPopUp';
import useInput from '../../hooks/useInput';
import { convertBox } from '../../pages/write';
import { ADD_COMMENT_REQUEST } from '../../reducers/post';

const { TextArea } = Input;

export const commentInput = css`
  padding: 9px 7px;

  &:hover {
    border-color: #d9d9d9;
    box-shadow: none;
  }

  &:focus {
    border-color: #d9d9d9;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    padding: 11px 12px;
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    padding: 13px 14px;
    margin-bottom: 4px;
    font-size: 19px;
  }
`;

export const buttonGroup = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-top: 12px;
    margin-bottom: 5px;
  }

  @media (min-width: 1024px) {
    margin-top: 17px;
  }
`;

export const cancelButton = css`
  margin-right: 7px;
  padding: 5px 11px;
  font-weight: 700;
  border: none;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 5px 13px;
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    padding: 7px 16px;
    font-size: 18px;
  }
`;

export const submitButton = css`
  padding: 5px 11px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #3a18ff;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 5px 13px;
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    padding: 7px 16px;
    font-size: 18px;
  }
`;

const CommentForm = ({ cancelBtn }) => {
  const dispatch = useDispatch();
  const { singlePost } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  const id = useSelector((state) => state.user.me?.id);

  const [comment, onChangeComment, setComment] = useInput('');

  const onClickCancel = useCallback(() => {
    setComment('');
    setHideCommentForm(true);
  }, []);

  const onClickSubmit = useCallback(() => {
    setComment('');
    if (!id) {
      return Modal.error({ title: '로그인이 필요합니다.' });
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        content: comment,
        postId: singlePost.id,
        userId: me.id,
      },
    });
  }, [comment]);

  return (
    <>
      <TextArea
        css={commentInput}
        value={comment}
        onChange={onChangeComment}
        placeholder="댓글을 작성하세요"
        autoSize={{ minRows: 2 }}
      />
      <div css={convertBox}>
        <ConvertPopUp />
      </div>
      <div css={buttonGroup}>
        {cancelBtn && (
          <button css={cancelButton} onClick={onClickCancel}>
            취소
          </button>
        )}
        <button css={submitButton} onClick={onClickSubmit}>
          댓글 작성
        </button>
      </div>
    </>
  );
};

export default CommentForm;
