/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
import { createGlobalStyle } from 'styled-components';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import TitleLogo from '../components/TitleLogo';
import { roundBtn } from '../components/styles';
import useInput from '../hooks/useInput';
import {
  CHECK_DUPLICATE_REQUEST,
  SIGN_UP_END,
  SIGN_UP_REQUEST,
} from '../reducers/user';

// localhost:3000/signup
const SignUp = () => {
  const dispatch = useDispatch();
  const { signUpDone, checkDuplicateDone, isDuplicated } = useSelector(
    (state) => state.user
  );

  const idRef = useRef();

  const [form] = Form.useForm();
  const [id, onChangeId] = useInput('');
  const [checkClicked, setCheckClicked] = useState(false);

  const checkDuplicate = useCallback(() => {
    dispatch({
      type: CHECK_DUPLICATE_REQUEST,
      data: {
        nickname: form.getFieldValue('nickname'),
      },
    });
    setCheckClicked(true);
  }, [form.getFieldValue('nickname')]);

  const duplicatedId = useCallback(() => {
    form.setFieldsValue({
      nickname: '',
    });
    Modal.error({
      title: '이미 사용중인 아이디입니다.',
      onOk: () => {
        idRef.current.focus();
      },
    });
  });

  const nonDuplicatedId = useCallback(() => {
    Modal.success({
      title: '사용 가능한 아이디입니다.',
    });
  });

  const onFinish = useCallback((values) => {
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        nickname: values.nickname,
        password: values.password,
        passwordCheck: values.confirm,
      },
    });
  });

  useEffect(() => {
    const duplicateBtn = document.getElementById('duplicate-btn');
    if (id.length >= 6 && id.length <= 11) {
      duplicateBtn.disabled = false;
    } else {
      duplicateBtn.disabled = true;
    }
    setCheckClicked(false);
  }, [id]);

  useEffect(() => {
    const target = document.getElementById('submit-btn');
    if (checkClicked) target.disabled = false;
    else target.disabled = true;
  }, [checkClicked]);

  useEffect(() => {
    if (checkDuplicateDone && checkClicked) {
      isDuplicated ? duplicatedId() : nonDuplicatedId();
    }
  }, [checkDuplicateDone, checkClicked, isDuplicated]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/');
      const user = form.getFieldValue('nickname');
      message.success({
        content: `${user}님 회원가입이 완료되었습니다.`,
        style: {
          marginTop: '40vh',
          fontWeight: 700,
        },
        duration: 2,
      });
      dispatch({
        type: SIGN_UP_END,
      });
    }
  }, [signUpDone, form.getFieldValue('nickname')]);

  return (
    <div css={headerStyle}>
      <Global />
      <TitleLogo />
      <Form form={form} css={formStyle} onFinish={onFinish} scrollToFirstError>
        <div>
          <Form.Item
            name="nickname"
            label="아이디"
            rules={[
              {
                min: 6,
                message: '아이디는 6자 이상이어야 합니다.',
              },
              {
                max: 11,
                message: '11자 이내로 입력해주세요!',
              },
              {
                required: true,
                message: '아이디를 입력해주세요!',
              },
            ]}
          >
            <div css={idForm}>
              <Input
                className="id-input"
                type="id"
                value={id}
                onChange={onChangeId}
                placeholder="6 ~ 11자 문자, 숫자, 기호"
                ref={idRef}
              />
              <Button id="duplicate-btn" onClick={checkDuplicate}>
                중복확인
              </Button>
            </div>
          </Form.Item>
        </div>

        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요!',
            },
            {
              min: 8,
              message: '8자 이상의 문자, 숫자, 기호로 입력해주세요',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="8자 이상의 문자, 숫자, 기호" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '비밀번호를 확인해주세요!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error('입력하신 비밀번호와 일치하지 않습니다!')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="비밀번호를 한 번 더 입력해주세요" />
        </Form.Item>
        <Form.Item css={submitDiv}>
          <Button
            type="primary"
            id="submit-btn"
            shape="round"
            htmlType="submit"
            css={roundBtn}
            disabled
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const headerStyle = css`
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }

  @media (min-width: 1024px) {
    margin-top: 80px;
  }
`;

const formStyle = css`
  width: 280px;
  margin: 40px auto 0;

  @media (min-width: 768px) {
    width: 400px;
    margin-top: 70px;
  }

  @media (min-width: 1024px) {
    width: 450px;
    margin-top: 60px;
  }

  .ant-form-item {
    display: block;

    @media (min-width: 768px) {
      margin-bottom: 50px;
    }

    .ant-input {
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .ant-form-item-label {
    font-weight: 700;

    label {
      @media (min-width: 768px) {
        margin-bottom: 10px;
        font-size: 18px;
      }

      @media (min-width: 1024px) {
        margin-bottom: 16px;
        font-size: 22px;
      }
    }

    label::after {
      content: '';
    }
  }

  // 비밀번호 & 비밀번호 확인 input 높이
  .ant-input-affix-wrapper {
    height: 38px;
  }

  .ant-form-item-has-error {
    margin-bottom: 10px;

    @media (min-width: 768px) {
      margin-bottom: 28px;
    }
  }

  .ant-btn-primary {
    width: 100px;
  }
`;

const idForm = css`
  display: flex;
  justify-content: space-between;

  .ant-input {
    width: 190px;
    margin-right: 10px;

    @media (min-width: 768px) {
      width: 310px;
    }

    @media (min-width: 1024px) {
      width: 410px;
    }
  }

  button {
    padding: 4px 10px;
    font-weight: 700;
    border-color: #3a18ff;

    @media (min-width: 768px) {
      height: 38px;
    }
  }

  button:hover {
    color: #3a18ff;
    border-color: #3a18ff;
  }

  button:focus {
    color: #3a18ff;
    border-color: #3a18ff;
  }
`;

const submitDiv = css`
  padding-top: 25px;

  .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;

    button {
      @media (min-width: 768px) {
        width: 130px;
      }
    }
  }
`;

const Global = createGlobalStyle`
  .ant-modal-confirm-body-wrapper
    > .ant-modal-confirm-body
    > .ant-modal-confirm-title {
    font-weight: 700;
  }
`;

export default SignUp;
