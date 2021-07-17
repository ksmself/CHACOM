/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useState, useRef, useEffect } from 'react';
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
  }, []);

  const onClickCancel = useCallback(() => {
    setInput('');
    dispatch({
      type: CONVERT_RESET_REQUEST,
    });
  }, []);

  const onClickConvert = useCallback(() => {
    if (input) {
      dispatch({
        type: CONVERT_PINYIN_REQUEST,
        data: { content: input },
      });
    }
  }, [input]);

  const [pinyin, setPinyin] = useState('');
  useEffect(() => {
    setPinyin(pinyinRef.current.innerText);
  }, [pinyinRef]);

  const onClickCopy = useCallback(() => {
    navigator.clipboard.writeText(pinyin);
    message.success({
      content: '클립보드에 복사되었습니다!',
      duration: 1,
    });
  }, [pinyin]);

  return (
    <>
      <Global />
      <>
        <button css={underlineBtn} onClick={() => setModalVisible(true)}>
          Pīnyīn으로 변환하기
        </button>
        <Modal
          className="convert-modal"
          visible={modalVisible}
          onCancel={onCancelModal}
          onOk={() => setModalVisible(false)}
        >
          <div css={infoBox}>
            <span>성조는 특수문자, 단어 끝에 입력해주세요.</span>
            <span>단어와 단어 사이는 한 칸을 띄워주세요.</span>
          </div>
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
              spellCheck="false"
            ></textarea>
            <Button
              css={convertBtn}
              icon={<SwapOutlined />}
              onClick={onClickConvert}
            />
            <div className="convert-text" css={converted} ref={pinyinRef}>
              {!convertLoading && !convertDone && null}
              {convertLoading && !convertDone && <LoadingOutlined />}
              {!convertLoading && convertDone && convertedPinyin}
            </div>
            {convertDone && (
              <Button
                css={copyBtn}
                icon={<CopyOutlined />}
                onClick={onClickCopy}
              />
            )}
          </div>
        </Modal>
      </>
    </>
  );
};

const Global = createGlobalStyle`
    .convert-modal > .ant-modal-content > .ant-modal-body{
        padding-top: 48px;
    }

    .convert-modal > .ant-modal-content > .ant-modal-footer{
        display: none; 
    }
`;

const underlineBtn = css`
  font-size: 16px;
  text-decoration: underline;
  border: none;
  color: #98989c;
  background-color: #fff;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const infoBox = css`
  display: flex;
  flex-direction: column;
  margin: 6px auto 16px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 10px auto 24px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 28px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    color: #3a18ff;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

const convertBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 16px 0;
  border: 3px solid #e8e8e8;
  border-radius: 33px;
  background-color: #ffffff;
`;

const cancelBtn = css`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 21px;
  right: 17px;
  padding: 0;
  border: none;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
    right: 20px;
  }

  @media (min-width: 1024px) {
    width: 21px;
    height: 21px;
    top: 19px;
    right: 23px;
  }

  span {
    display: block;
    height: 16px;

    @media (min-width: 768px) {
      height: 18px;
    }

    @media (min-width: 1024px) {
      height: 21px;
    }
  }

  svg {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.45);

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 21px;
    }
  }
`;

const toConvert = css`
  width: 88%;
  height: 100px;
  padding: 0 16px 16px 10px;
  resize: none;
  font-size: 21px;
  border: none;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const convertBtn = css`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-color: #3a18ff;
  background-color: #3a18ff;

  &:hover {
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  &:focus {
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  &:active {
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 26px;
    font-weight: 700;
    color: #fff;

    &:hover {
      color: #fff;
    }

    &:active {
      color: #fff;
    }
  }
`;

const converted = css`
  width: 88%;
  height: 100px;
  padding: 16px 16px 0 10px;
  position: relative;
  font-size: 23px;
  font-family: 'Times New Roman', sans-serif;
  overflow: auto;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const copyBtn = css`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 21px;
  right: 17px;
  padding: 0;
  border: none;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
    right: 20px;
  }

  @media (min-width: 1024px) {
    width: 21px;
    height: 21px;
    bottom: 19px;
    right: 23px;
  }

  span {
    display: block;
    height: 16px;

    @media (min-width: 768px) {
      height: 18px;
    }

    @media (min-width: 1024px) {
      height: 21px;
    }
  }

  svg {
    font-size: 16px;
    color: #3a18ff;

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 21px;
    }
  }
`;

export default ConvertPopUp;
