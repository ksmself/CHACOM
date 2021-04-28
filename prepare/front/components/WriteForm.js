/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Modal, Input } from 'antd';
import { createGlobalStyle } from 'styled-components';

import useInput from '../hooks/useInput';

const { TextArea } = Input;

const Global = createGlobalStyle`
  .ant-modal-close{
    position: relative; 
  }

  .ant-modal-body{
    padding-top: 0;
  }
`;

const textArea = css`
  font-size: 20px;
`;

const WriteForm = ({ visible, onCreate, onCancel }) => {
  const [text, onChangeText] = useInput('');
  return (
    <>
      <Global />
      <Modal centered visible={visible} onOk={onCreate} onCancel={onCancel}>
        <TextArea
          value={text}
          onChange={onChangeText}
          placeholder="I'm learning..."
          css={textArea}
        />
      </Modal>
    </>
  );
};

export default WriteForm;
