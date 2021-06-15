/** @jsxImportSource @emotion/react */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';

import { greyBtn } from './styles';
import {
  CHANGE_COMMENT_REQUEST,
  REMOVE_COMMENT_REQUEST,
  REMOVE_POST_REQUEST,
  REMOVE_REPLY_REQUEST,
} from '../reducers/post';

const { confirm } = Modal;

const Global = createGlobalStyle`
  .ant-modal-confirm-body .ant-modal-confirm-title{
    font-weight: 700;
  }
`;

const DeleteBtn = ({
  post,
  comment,
  commentHasReply,
  reply,
  commentNull,
  replyLength,
}) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);

  const router = useRouter();
  const pathName = router.pathname.match(/[/]\w+/);

  const showDeleteConfirm = useCallback(() => {
    confirm({
      title: post ? '게시물 삭제' : '댓글 삭제',
      icon: <ExclamationCircleOutlined />,
      content: post
        ? '정말로 이 게시물을 삭제하시겠습니까?'
        : '정말로 이 댓글을 삭제하시겠습니까?',
      okText: '삭제',
      okType: 'danger',
      okButtonProps: {
        loading: removePostLoading,
      },
      cancelText: '취소',
      onOk() {
        if (post) {
          dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
          });
          if (pathName[0] === '/post') Router.replace('/');
        }

        if (comment) {
          if (commentHasReply.length === 0) {
            dispatch({
              type: REMOVE_COMMENT_REQUEST,
              data: {
                postId: comment.PostId,
                commentId: comment.id,
              },
            });
          } else {
            dispatch({
              type: CHANGE_COMMENT_REQUEST,
              data: {
                postId: comment.PostId,
                commentId: comment.id,
              },
            });
          }
        }

        if (reply) {
          dispatch({
            type: REMOVE_REPLY_REQUEST,
            data: {
              postId: reply.PostId,
              commentId: reply.id,
            },
          });
          if (!commentNull && replyLength === 1) {
            dispatch({
              type: REMOVE_COMMENT_REQUEST,
              data: {
                postId: reply.PostId,
                commentId: reply.ReplyId,
              },
            });
          }
        }
      },
    });
  }, [removePostLoading, pathName]);

  return (
    <>
      <Global />
      <button css={greyBtn} onClick={showDeleteConfirm}>
        삭제
      </button>
    </>
  );
};

export default DeleteBtn;
