/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { commentInput, cancelButton, submitButton } from './CommentForm';
import { buttonGroup } from '../../pages/post/styles';
import ConvertPopUp from '../ConvertPopUp';
import { convertBox } from '../../pages/write';
import useInput from '../../hooks/useInput';
import UpdateBtn from '../UpdateBtn';
import DeleteBtn from '../DeleteBtn';

dayjs.locale('ko');

const { TextArea } = Input;

const CommentListItem = ({ comment, index, commentList }) => {
  const { me } = useSelector((state) => state.user);
  const writtenByMe = me?.id === comment.UserId;

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

  const onClickSubmit = useCallback(() => {}, []);

  let day;
  const secondPassed = dayjs().diff(dayjs(comment.createdAt), 'seconds');
  const minutedPassed = dayjs().diff(dayjs(comment.createdAt), 'minutes');
  const hourPassed = dayjs().diff(dayjs(comment.createdAt), 'hours');
  const dayPassed = dayjs().diff(dayjs(comment.createdAt), 'days');

  if (secondPassed < 60) day = '방금 전';
  else if (minutedPassed < 60) day = minutedPassed + '분 전';
  else if (hourPassed < 24) day = hourPassed + '시간 전';
  else if (dayPassed <= 7) day = dayPassed + '일 전';
  else day = dayjs(singlePost.createdAt).format('YYYY년 MM월 DD일');
  return (
    <li css={commentItem} key={comment.id}>
      <div css={commentInfo}>
        <div
          css={css`
            display: flex;
          `}
        >
          <span css={commentInfoWriter}>
            <Link href={`/user/${comment.UserId}`}>
              <a>{comment.User.nickname}</a>
            </Link>
          </span>
          <span css={commentInfoBullet}>·</span>
          <span css={commentInfoDate}>{day}</span>
        </div>
        {writtenByMe && (
          <div css={buttonGroup}>
            <UpdateBtn comment={comment} />
            <DeleteBtn comment={comment} />
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
            <button css={submitButton} onClick={onClickSubmit}>
              댓글 작성
            </button>
          </div>
        </div>
      )}
      {commentList.length > 1 && index < commentList.length - 1 && (
        <div css={divideLine}></div>
      )}
    </li>
  );
};

const commentItem = css`
  padding: 13px 12px 5px;

  @media (min-width: 768px) {
    padding: 12px;
  }

  @media (min-width: 1024px) {
    padding: 12px 14px;
  }
`;

const commentInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  margin-bottom: 5px;
  font-size: 15px;

  @media (min-width: 768px) {
    padding-left: 5px;
    margin-bottom: 7px;
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    padding-left: 10px;
    font-size: 22px;
  }

  div {
    margin-bottom: 0;

    button {
      padding: 1px 3px;

      @media (min-width: 768px) {
        padding: 1px 6px;
      }
    }
  }
`;

const commentInfoWriter = css`
  margin-right: 3px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-right: 5px;
  }
`;

const commentInfoBullet = css`
  margin-right: 3px;

  @media (min-width: 768px) {
    margin-right: 5px;
  }
`;

const commentInfoDate = css`
  color: #646a70;
`;

const commentContent = css`
  padding-left: 5px;
  margin-bottom: 8px;
  font-size: 17px;

  @media (min-width: 768px) {
    padding-left: 5px;
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    padding-left: 10px;
    font-size: 22px;
  }
`;

const divideLine = css`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: #d9d9d9;

  @media (min-width: 1024px) {
    margin-top: 25px;
  }
`;

const replyPlusBtn = css`
  button {
    padding: 4px 6px;
    font-weight: 700;
    border: none;
    color: #3a18ff;

    &:hover {
      color: #3a18ff;
      border: none;
      cursor: pointer;
    }

    &:focus {
      color: #3a18ff;
      border: none;
    }

    @media (min-width: 768px) {
      padding: 4px 10px;
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 19px;
    }
  }
`;

const replyMinusBtn = css`
  button {
    padding: 4px 6px;
    font-weight: 700;
    border: none;
    color: #00adcb;

    &:hover {
      color: #00adcb;
      border: none;
      cursor: pointer;
    }

    &:focus {
      color: #00adcb;
      border: none;
    }

    @media (min-width: 768px) {
      padding: 4px 10px;
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 19px;
    }
  }
`;

const commentFormBox = css`
  padding: 5px 8px;

  @media (min-width: 1024px) {
    padding: 15px 12px;
  }

  textarea {
    border-color: #18ddff;

    &:focus {
      border-color: #18ddff;
    }
  }
`;

export default CommentListItem;
