/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Button, Input, Modal } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { commentInput, cancelButton, submitButton } from './CommentForm';
import { buttonGroup } from '../../pages/post/styles';
import {
  commentItem,
  commentInfo,
  commentInfoWriter,
  commentInfoWriterIsMe,
  commentInfoBullet,
  myCommentInfoBullet,
  commentInfoDate,
  commentContent,
  divideLine,
  replyPlusBtn,
  replyMinusBtn,
  replyCommentBox,
  commentFormBox,
  replyCommentInfo,
  replyCommentContent,
  replyCommentItem,
  replyDivideLine,
} from './styles';
import * as Func from '../fpp';
import ConvertPopUp from '../ConvertPopUp';
import { convertBox } from '../../pages/write';
import useInput from '../../hooks/useInput';
import UpdateBtn from '../UpdateBtn';
import DeleteBtn from '../DeleteBtn';
import { ADD_REPLY_REQUEST } from '../../reducers/post';

const { TextArea } = Input;

const CommentListItem = ({
  comment,
  idx,
  replyComments,
  realCommentLength,
}) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { singlePost } = useSelector((state) => state.post);
  const writtenByMe = me?.id === comment.UserId;
  const id = useSelector((state) => state.user.me?.id);
  const hasDivideLine = singlePost?.Comments?.slice(idx + 1).find(
    (v) => v.ReplyId === null
  );

  const [plusIcon, setPlusIcon] = useState(true);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentValue, onChangeCommentValue, setCommentValue] = useInput('');

  const [replyBtnText, setReplyBtnText] = useState('답글 달기');
  const onClickReply = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
    setPlusIcon((prev) => !prev);
    if (replyBtnText === '답글 달기') {
      setReplyBtnText('숨기기');
    } else {
      setReplyBtnText('답글 달기');
      setCommentValue('');
    }
  }, [replyBtnText]);

  const onClickCancel = useCallback(() => {
    setPlusIcon(true);
    setReplyBtnText('답글 달기');
    setCommentValue('');
    setCommentFormOpened(false);
  }, []);

  const onClickSubmit = useCallback(
    (commentId) => {
      setCommentValue('');
      if (!id) {
        return Modal.error({ title: '로그인이 필요합니다.' });
      }
      return dispatch({
        type: ADD_REPLY_REQUEST,
        data: {
          content: commentValue,
          postId: singlePost.id,
          commentId: commentId,
          userId: me?.id,
        },
      });
    },
    [commentValue, singlePost, me]
  );

  return (
    <li css={commentItem} key={comment.id}>
      <div css={commentInfo}>
        <div>
          <span css={!writtenByMe ? commentInfoWriter : commentInfoWriterIsMe}>
            <Link href={`/user/${comment.UserId}/post`}>
              <a>{comment.UserId ? comment.User.nickname : '알 수 없음'}</a>
            </Link>
          </span>
          <span css={!writtenByMe ? commentInfoBullet : myCommentInfoBullet}>
            ·
          </span>
          <span css={commentInfoDate}>{Func.day(comment.createdAt)}</span>
        </div>
        {writtenByMe && (
          <div css={buttonGroup}>
            <UpdateBtn comment={comment} />
            <DeleteBtn comment={comment} commentHasReply={replyComments} />
          </div>
        )}
      </div>
      <div css={commentContent}>{comment.content}</div>
      <div css={plusIcon ? replyPlusBtn : replyMinusBtn}>
        <Button
          icon={plusIcon ? <PlusCircleOutlined /> : <MinusCircleOutlined />}
          onClick={onClickReply}
        >
          {replyBtnText}
        </Button>
      </div>
      {commentFormOpened && (
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
            <button
              css={submitButton}
              onClick={() => onClickSubmit(comment.id)}
            >
              댓글 작성
            </button>
          </div>
        </div>
      )}
      {replyComments.length > 0 && (
        <div css={replyCommentBox}>
          {replyComments.map((comment, index, commentList) => {
            const writtenByMe = me?.id === comment.UserId;
            const parentComment = singlePost?.Comments?.find(
              (v) => v.id === comment.ReplyId
            );

            return (
              <div css={replyCommentItem} key={comment.id}>
                <div css={replyCommentInfo}>
                  <div>
                    <span
                      css={
                        !writtenByMe ? commentInfoWriter : commentInfoWriterIsMe
                      }
                    >
                      <Link href={`/user/${comment.UserId}/post`}>
                        <a>{comment.User.nickname}</a>
                      </Link>
                    </span>
                    <span
                      css={
                        !writtenByMe ? commentInfoBullet : myCommentInfoBullet
                      }
                    >
                      ·
                    </span>
                    <span css={commentInfoDate}>
                      {Func.day(comment.createdAt)}
                    </span>
                  </div>
                  {writtenByMe && (
                    <div css={buttonGroup}>
                      <UpdateBtn reply={comment} />
                      <DeleteBtn
                        reply={comment}
                        commentNull={parentComment?.UserId}
                        replyLength={commentList.length}
                      />
                    </div>
                  )}
                </div>
                <div css={replyCommentContent}>{comment.content}</div>
                {commentList.length > 1 && index < commentList.length - 1 && (
                  <div css={replyDivideLine}></div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {realCommentLength > 1 && hasDivideLine && <div css={divideLine}></div>}
    </li>
  );
};

export default CommentListItem;
