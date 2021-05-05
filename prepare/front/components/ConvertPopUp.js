/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, message } from 'antd';
import {
  SwapOutlined,
  LoadingOutlined,
  CloseOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import { createGlobalStyle } from 'styled-components';

import {
  CONVERT_PINYIN_REQUEST,
  CONVERT_RESET_REQUEST,
} from '../reducers/post';
import useInput from '../hooks/useInput';

const Global = createGlobalStyle`
    .convert-modal > .ant-modal-content > .ant-modal-body{
        padding-top: 48px;
    }

    .convert-modal > .ant-modal-content > .ant-modal-footer{
        display: none; 
    }
`;

const convertBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 33px;
  background: #ffffff;
  box-shadow: 6px 6px 12px #e8e8e8, -1px -1px 3px #e8e8e8,
    -6px -6px 12px #e8e8e8, 1px 1px 3px #e8e8e8;
`;

const cancelBtn = css`
  position: absolute;
  top: 13px;
  right: 13px;
`;

const toConvert = css`
  width: 100%;
  height: 100px;
  padding: 16px;
  resize: none;
  font-size: 21px;
  border: none;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
`;

const converted = css`
  width: 100%;
  height: 100px;
  padding: 16px;
  position: relative;
  font-size: 21px;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
`;

const copyBtn = css`
  position: absolute;
  bottom: 13px;
  right: 13px;
`;

const ConvertPopUp = () => {
  const pinyinRef = useRef(null);
  const dispatch = useDispatch();
  const { convertLoading, convertDone, convertedPinyin } = useSelector(
    (state) => state.post
  );

  const [input, onChangeInput, setInput] = useInput('');

  const [modalVisible, setModalVisible] = useState(false);
  const onCancelModal = useCallback(() => {
    setModalVisible(false);
    setInput('');
    dispatch({
      type: CONVERT_RESET_REQUEST,
    });
  });

  const onClickCancel = useCallback(() => {
    setInput('');
    dispatch({
      type: CONVERT_RESET_REQUEST,
    });
  });

  const onClickConvert = useCallback(() => {
    dispatch({
      type: CONVERT_PINYIN_REQUEST,
      data: { content: input },
    });
  });

  const onClickCopy = useCallback(() => {
    const pinyin = pinyinRef.current.innerText;
    navigator.clipboard.writeText(pinyin);
    message.success({
      content: '클립보드에 복사되었습니다!',
      duration: 1,
    });
  }, []);

  return (
    <>
      <Global />
      <>
        <button onClick={() => setModalVisible(true)}>Convert to Pīnyīn</button>
        <Modal
          className="convert-modal"
          visible={modalVisible}
          onCancel={onCancelModal}
          onOk={() => setModalVisible(false)}
        >
          <div css={convertBox}>
            {input && (
              <Button
                css={cancelBtn}
                icon={<CloseOutlined />}
                onClick={onClickCancel}
              />
            )}
            <textarea
              css={toConvert}
              placeholder="Ni3 hao!3"
              value={input}
              onChange={onChangeInput}
            ></textarea>
            <Button icon={<SwapOutlined />} onClick={onClickConvert} />
            <div className="convert-text" css={converted} ref={pinyinRef}>
              {!convertLoading && !convertDone && null}
              {convertLoading && !convertDone && <LoadingOutlined />}
              {!convertLoading && convertDone && convertedPinyin}
              {convertDone && (
                <Button
                  css={copyBtn}
                  icon={<CopyOutlined />}
                  onClick={onClickCopy}
                />
              )}
            </div>
          </div>
        </Modal>
      </>
    </>
  );
};

export default ConvertPopUp;
