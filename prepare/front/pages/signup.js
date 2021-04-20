/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { createGlobalStyle } from 'styled-components';

import TitleLogo from '../components/TitleLogo';
import { roundBtn } from '../components/styles';

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

const emailForm = css`
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

// localhost:3000/signup
const SignUp = () => {
  const [form] = Form.useForm();
  const emailRef = useRef();

  const [email, setEmail] = useState('');
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  // 중복된 사용자가 있는지(dispatch)
  const [duplicateUser, setDuplicateUser] = useState(false);

  const duplicatedId = () => {
    setEmail((state) => '');
    form.setFieldsValue({
      email: '',
    });
    Modal.error({
      title: '이미 사용중인 이메일입니다.',
      onOk: () => {
        emailRef.current.focus();
      },
    });
  };

  const nonDuplicatedId = () => {
    const target = document.getElementById('submit-btn');
    target.disabled = false;
    Modal.success({
      title: '사용 가능한 이메일입니다.',
    });
  };

  const onFinish = (values) => {
    // values는 {email: "ksmself@wizlive.com", password: "sfsfsfs", confirm: "sfsfsfs"}
    console.log('Received values of form: ', values);
  };

  return (
    <div css={headerStyle}>
      <Global />
      <TitleLogo />
      <Form form={form} css={formStyle} onFinish={onFinish} scrollToFirstError>
        <div>
          <Form.Item
            name="email"
            label="아이디(이메일)"
            rules={[
              {
                type: 'email',
                message: '올바른 이메일 주소를 입력해주세요!',
              },
              {
                required: true,
                message: '아이디(이메일)을 입력해주세요!',
              },
            ]}
          >
            <div css={emailForm}>
              <Input
                className="email-input"
                type="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="이메일을 입력해주세요"
                ref={emailRef}
              />
              <Button onClick={duplicateUser ? duplicatedId : nonDuplicatedId}>
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
          ]}
          hasFeedback
        >
          <Input.Password placeholder="비밀번호를 입력해주세요" />
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

export default SignUp;
