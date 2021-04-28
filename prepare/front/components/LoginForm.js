/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form, Modal, Input, message } from 'antd';
import { useCallback, useEffect } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { LOG_IN_REQUEST } from '../reducers/user';

const modalStyle = css`
  .ant-modal-title {
    font-weight: 700;
  }

  .ant-modal-footer {
    button > span {
      font-weight: 700;
    }

    .ant-btn:hover {
      color: #18ddff;
      border-color: #18ddff;
    }

    .ant-btn-primary {
      color: #fff;
      border-color: #3a18ff;
      background-color: #3a18ff;
    }

    .ant-btn-primary:hover {
      color: #000;
      border-color: #18ddff;
      background-color: #18ddff;
    }
  }
`;

const formStyle = css`
  margin-bottom: 20px;

  input {
    padding-left: 10px !important;
  }
`;

const signup = css`
  text-align: center;
  margin-bottom: 0;
  color: #747474;

  a {
    display: inline-block;
    padding-left: 5px;
    text-decoration: underline;
    color: #000;
  }
`;

const LoginForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const { logInError, logInDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (logInError) {
      message.error({
        content: logInError,
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    }
  }, [logInError]);

  return (
    <Modal
      visible={visible}
      title="로그인하기"
      okText="로그인"
      cancelText="취소"
      css={modalStyle}
      onCancel={() => {
        onCancel();
        form.resetFields();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            dispatch({
              type: LOG_IN_REQUEST,
              data: values,
            });
            form.resetFields();
            if (logInDone) {
              onCreate(values);
            }
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} name="form_in_modal">
        <Form.Item
          name="id"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요!',
            },
          ]}
          css={formStyle}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="아이디"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '패스워드를 입력해주세요!',
            },
          ]}
          css={formStyle}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="패스워드"
          />
        </Form.Item>

        <Form.Item css={signup}>
          아직 회원이 아니시라면,{' '}
          <Link href="/signup">
            <a>회원가입하러가기</a>
          </Link>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginForm;
