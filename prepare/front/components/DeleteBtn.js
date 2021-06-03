/** @jsxImportSource @emotion/react */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { createGlobalStyle } from 'styled-components';

import { greyBtn } from './styles';
import { REMOVE_POST_REQUEST } from '../reducers/post';

const { confirm } = Modal;

const Global = createGlobalStyle`
  .ant-modal-confirm-body .ant-modal-confirm-title{
    font-weight: 700;
  }
`;

const DeleteBtn = ({ post, comment }) => {
  const dispatch = useDispatch();

  const showDeleteConfirm = useCallback(() => {
    confirm({
      title: '게시물 삭제',
      icon: <ExclamationCircleOutlined />,
      content: '정말로 이 게시물을 삭제하시겠습니까?',
      okText: '삭제',
      okType: 'danger',
      cancelText: '취소',
      onOk() {
        dispatch({
          type: REMOVE_POST_REQUEST,
          data: post.id,
        });
        Router.replace('/');
      },
    });
  });

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
