/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Input } from 'antd';

import { buttonGroup } from '../../pages/post/styles';
import { greyBtn } from '../styles';
import {
  commentFormBox,
  commentInfoBullet,
  commentInfoDate,
  commentInfoWriter,
  commentInfoWriterIsMe,
  myCommentInfoBullet,
  replyCommentContent,
  replyCommentInfo,
  replyCommentItem,
  replyDivideLine,
} from './styles';
import day from '../day';
import DeleteBtn from '../DeleteBtn';
import { cancelButton, commentInput, submitButton } from './CommentForm';
import ConvertPopUp from '../ConvertPopUp';
import useInput from '../../hooks/useInput';
import { UPDATE_COMMENT_REQUEST } from '../../reducers/post';

const { TextArea } = Input;

const convertBox = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    margin-bottom: 13px;
  }

  button {
    background-color: #f4f4f4;
  }
`;

const ReplyCommentItem = ({
  comment,
  index,
  commentList,
  writtenByMe,
  parentComment,
}) => {
  const dispatch = useDispatch();

  const [update, setUpdate] = useState(false);
  const onClickUpdate = useCallback(() => {
    setUpdate(true);
  }, []);

  const [commentValue, onChangeCommentValue] = useInput(comment.content);
  const onClickCancel = useCallback(() => {
    setUpdate(false);
  });
  const onClickSubmit = useCallback(() => {
    dispatch({
      type: UPDATE_COMMENT_REQUEST,
      data: {
        postId: comment.PostId,
        commentId: comment.id,
        content: commentValue,
      },
    });
    setUpdate(false);
  }, [comment, commentValue]);

  return (
    <div css={replyCommentItem} key={comment.id}>
      <div css={replyCommentInfo}>
        <div>
          <span css={!writtenByMe ? commentInfoWriter : commentInfoWriterIsMe}>
            <Link href={`/user/${comment.UserId}/post`}>
              <a>{comment.User.nickname}</a>
            </Link>
          </span>
          <span css={!writtenByMe ? commentInfoBullet : myCommentInfoBullet}>
            ·
          </span>
          <span css={commentInfoDate}>{day(comment.createdAt)}</span>
        </div>
        {writtenByMe && !update && (
          <div css={buttonGroup}>
            <button css={greyBtn} onClick={onClickUpdate}>
              수정
            </button>
            <DeleteBtn
              reply={comment}
              commentNull={parentComment?.UserId}
              replyLength={commentList.length}
            />
          </div>
        )}
      </div>
      <div css={replyCommentContent}>
        {update ? (
          <div css={commentFormBox}>
            <TextArea
              css={commentInput}
              value={commentValue}
              onChange={onChangeCommentValue}
              placeholder="댓글을 작성하세요"
              autoSize={{ minRows: 2 }}
            />
            <div css={convertBox}>
              <ConvertPopUp />
            </div>
            <div css={buttonGroup}>
              <button css={cancelButton} onClick={onClickCancel}>
                취소
              </button>
              <button css={submitButton} onClick={onClickSubmit}>
                댓글 수정
              </button>
            </div>
          </div>
        ) : (
          comment.content
        )}
      </div>
      {commentList.length > 1 && index < commentList.length - 1 && (
        <div css={replyDivideLine}></div>
      )}
    </div>
  );
};

export default ReplyCommentItem;
