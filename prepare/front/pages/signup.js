/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form, Input, Button } from 'antd';

import TitleLogo from '../components/TitleLogo';
import { roundBtn } from '../components/styles';

const headerStyle = css`
  margin-top: 30px;
`;

const formStyle = css`
  width: 280px;
  margin: 40px auto 0;

  .ant-form-item {
    display: block;
  }

  .ant-form-item-label {
    font-weight: 700;
  }

  .ant-form-item-has-error {
    margin-bottom: 10px;
  }

  .ant-btn-primary {
    width: 100px;
  }
`;

const emailForm = css`
  display: flex;
  justify-content: space-between;
  position: relative;

  .ant-form-item-control-input-content > input {
    width: 190px;
  }

  button {
    position: absolute;
    right: 0;
    top: 40px;
    padding: 4px 10px;
    font-weight: 700;
    border-color: #3a18ff;
  }

  button:focus {
    color: #3a18ff;
    border-color: #3a18ff;
  }
`;

const submitDiv = css`
  margin-top: 30px;

  .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
`;

// localhost:3000/signup
const SignUp = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // values는 {email: "ksmself@wizlive.com", password: "sfsfsfs", confirm: "sfsfsfs"}
    console.log('Received values of form: ', values);
  };

  return (
    <div css={headerStyle}>
      <TitleLogo />
      <Form form={form} css={formStyle} onFinish={onFinish} scrollToFirstError>
        <div css={emailForm}>
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
            <Input placeholder="이메일을 입력해주세요" />
          </Form.Item>

          <Form.Item>
            <Button>중복확인</Button>
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
          <Button type="primary" shape="round" htmlType="submit" css={roundBtn}>
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
