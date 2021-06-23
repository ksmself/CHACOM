/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Form, Input, Button, message } from 'antd';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Header from '../../../components/Header';
import {
  LOAD_MY_INFO_REQUEST,
  LOG_OUT_REQUEST,
  UPDATE_USER_REQUEST,
} from '../../../reducers/user';
import wrapper from '../../../store/configureStore';
import { formStyle } from '../../signup';
import { contentBox } from '../styles';

const infoTitle = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-top: 70px;
    font-size: 28px;
  }

  @media (min-width: 1024px) {
    margin-top: 85px;
    font-size: 40px;
  }

  span:first-of-type {
    margin-right: 10px;
  }
`;

const roundBtn = css`
  width: 130px;
  color: #fff;
  border-color: #3a18ff;
  background-color: #3a18ff;

  &:hover {
    color: #000;
    border-color: #18ddff;
    background-color: #18ddff;
  }

  &:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  @media (min-width: 768px) {
    width: 160px;
    height: 40px;
  }

  @media (min-width: 1024px) {
    width: 170px;
    height: 50px;
  }

  span {
    font-size: 13px;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 17px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const submitDiv = css`
  padding-top: 25px;

  .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;

    button {
      width: 130px;

      @media (min-width: 768px) {
        width: 160px;
      }

      @media (min-width: 1024px) {
        width: 170px;
      }
    }
  }
`;

const Info = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { me, updateUserError, updateUserDone, updateUserLoading } =
    useSelector((state) => state.user);
  const [form] = Form.useForm();

  const onFinish = useCallback(
    (values) => {
      dispatch({
        type: UPDATE_USER_REQUEST,
        data: {
          userId: me.id,
          curPassword: values.curPassword,
          newPassword: values.newPassword,
        },
      });
    },
    [me]
  );

  useEffect(() => {
    if (updateUserDone) {
      router.replace('/');
      dispatch({
        type: LOG_OUT_REQUEST,
      });
    }
  }, [updateUserDone, router]);

  useEffect(() => {
    if (updateUserError) {
      message.error({
        content: updateUserError,
        style: {
          marginTop: '20vh',
        },
        duration: 1,
      });
    }
  }, [updateUserError]);

  return (
    <>
      <header>
        <Header />
      </header>
      <div css={infoTitle}>회원 정보 수정</div>
      <div css={contentBox}>
        <Form form={form} css={formStyle} onFinish={onFinish}>
          <Form.Item
            name="curPassword"
            label="현재 비밀번호"
            rules={[
              {
                required: true,
                message: '현재 비밀번호를 입력해주세요!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="비밀번호를 입력하세요" />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="새 비밀번호"
            rules={[
              {
                required: true,
                message: '새 비밀번호를 입력해주세요!',
              },
              {
                min: 8,
                message: '8자 이상의 비밀번호로 입력해주세요',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="8자 이상의 비밀번호" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="새 비밀번호 확인"
            dependencies={['newPassword']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '새 비밀번호를 한 번 더 입력해주세요!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error('입력하신 새 비밀번호와 일치하지 않습니다!')
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="새 비밀번호를 한 번 더 입력해주세요" />
          </Form.Item>
          <Form.Item css={submitDiv}>
            <Button
              type="primary"
              id="submit-btn"
              shape="round"
              htmlType="submit"
              css={roundBtn}
              loading={updateUserLoading}
            >
              비밀번호 변경
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Info;
