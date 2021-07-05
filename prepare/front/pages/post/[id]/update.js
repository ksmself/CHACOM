/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import { Input, Button, Modal } from 'antd';
import {
  CloseOutlined,
  PlusCircleFilled,
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import {
  ADD_HASHTAG_REQUEST,
  LOAD_POST_REQUEST,
  REMOVE_HASHTAG_REQUEST,
  UPDATE_POST_REQUEST,
} from '../../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../../reducers/user';
import wrapper from '../../../store/configureStore';
import {
  box,
  convertBox,
  expressionBox,
  footerBox,
  Global,
  line,
  pinyinBox,
  plusBtnBox,
  tagBox,
  tagInfoBox,
  tags,
  titleBox,
  writeBox,
} from '../../write';
import { roundBtn } from '../../../components/styles';
import useInput from '../../../hooks/useInput';
import ConvertPopUp from '../../../components/ConvertPopUp';

const { TextArea } = Input;

const Update = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { singlePost, currentHashtags, updatePostLoading, updatePostDone } =
    useSelector((state) => state.post);

  const [title, onChangeTitle, setTitle] = useInput(singlePost?.title);
  useEffect(() => {
    setTitle(singlePost?.title);
  }, [singlePost]);

  const [tag, onChangeTag, setTag] = useInput('');

  const onClickTag = useCallback((v) => {
    dispatch({
      type: REMOVE_HASHTAG_REQUEST,
      data: v,
    });
  }, []);

  const onKeyPressTag = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        // 빈칸으로 입력하지 않았을때만 리스트에 추가
        if (tag.trim() !== '') {
          // 이미 있는 해시태그가 아닐때만 리스트에 추가
          if (!currentHashtags.includes(tag)) {
            // #을 붙여서 해시태그를 입력했을 때는 #을 떼고
            if (tag[0] === '#') {
              dispatch({
                type: ADD_HASHTAG_REQUEST,
                data: tag.slice(1),
              });
            } else {
              dispatch({
                type: ADD_HASHTAG_REQUEST,
                data: tag,
              });
            }
          }
        }
        setTag('');
      }
    },
    [tag, currentHashtags]
  );

  const onFocusInput = useCallback(() => {
    document.getElementById('tag-info').style.display = 'block';
  });
  const onBlurInput = useCallback(() => {
    document.getElementById('tag-info').style.display = 'none';
  }, []);

  const [expressions, setExpressions] = useState(singlePost?.Expressions);

  useEffect(() => {
    if (singlePost?.Expressions) {
      const copiedExpressions = singlePost?.Expressions.map((v) => {
        return {
          ...v,
        };
      });
      setExpressions(copiedExpressions);
    }
  }, [singlePost]);

  const onChangeText = useCallback(
    (expressionNum) => (e) => {
      const tempExpressions = expressions?.map((expression, index) => {
        if (expressionNum === index) {
          expression[e.target.name] = e.target.value;
        }
        return expression;
      });
      setExpressions(tempExpressions);
    },
    [expressions]
  );

  const addExpression = useCallback(() => {
    const data = {
      pinyin: '',
      meaning: '',
    };
    setExpressions([...expressions, data]);
  }, [expressions]);

  const deleteExpression = useCallback(
    (expressionNum) => () => {
      const tempExpressions = expressions.filter(
        (v, index) => expressionNum !== index
      );
      setExpressions([...tempExpressions]);
    },
    [expressions]
  );

  const onCancelUpdate = useCallback(() => {
    Modal.confirm({
      title: '이 페이지에서 나가시겠습니까?',
      icon: <ExclamationCircleOutlined />,
      content: '변경사항이 저장되지 않을 수 있습니다.',
      onOk() {
        router.back();
      },
    });
  });

  const updatePost = useCallback(() => {
    let isExpressionNull = false;
    expressions.map((v) => {
      if (!v.pinyin || !v.meaning) {
        isExpressionNull = true;
      }
    });

    if (!title && !isExpressionNull) {
      Modal.warning({
        title: '제목을 입력해주세요!',
      });
    }
    if (isExpressionNull && title) {
      Modal.warning({
        title: '비어있는 표현을 모두 채워주세요!',
      });
    }
    if (!title && isExpressionNull) {
      Modal.warning({
        title: '비어있는 제목과 표현을 모두 채워주세요!',
      });
    }

    if (title && !isExpressionNull) {
      dispatch({
        type: UPDATE_POST_REQUEST,
        data: {
          postId: singlePost.id,
          title: title,
          tag: currentHashtags,
          expression: expressions,
        },
      });
    }
  }, [singlePost, title, currentHashtags, expressions]);

  useEffect(() => {
    if (updatePostDone) {
      Router.replace(`/post/${singlePost.id}`);
    }
  }, [updatePostDone, singlePost]);

  return (
    <>
      <Global />
      <>
        <div css={writeBox}>
          <TextArea
            css={titleBox}
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={onChangeTitle}
            autoSize={{ minRows: 1 }}
          />
          <div css={tagBox}>
            <div css={tags}>
              {currentHashtags.map((v, index) => {
                return (
                  <button key={v} onClick={() => onClickTag(v)}>
                    {v}
                  </button>
                );
              })}
              <input
                placeholder="태그를 입력해주세요"
                value={tag}
                onChange={onChangeTag}
                onKeyPress={onKeyPressTag}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
              />
            </div>
            <div id="tag-info" css={tagInfoBox}>
              쉼표 혹은 엔터를 입력하여 태그를 등록할 수 있습니다. 등록된 태그를
              클릭하면 삭제됩니다.
            </div>
          </div>
          <div css={line}></div>
          <div css={expressionBox}>
            {expressions?.length > 0 &&
              expressions.map((v, index) => {
                return (
                  <div css={box} key={v.id}>
                    <div css={pinyinBox}>
                      <input
                        name="pinyin"
                        placeholder="한어병음을 입력해주세요"
                        value={v.pinyin}
                        onChange={onChangeText(index)}
                      />
                      {index !== 0 && (
                        <CloseOutlined onClick={deleteExpression(index)} />
                      )}
                      <div css={convertBox}>
                        <ConvertPopUp />
                      </div>
                    </div>
                    <input
                      name="meaning"
                      placeholder="뜻을 입력해주세요"
                      value={v.meaning}
                      onChange={onChangeText(index)}
                    />
                  </div>
                );
              })}
          </div>
          <div css={plusBtnBox}>
            <PlusCircleFilled onClick={addExpression} />
          </div>
        </div>
        <footer css={footerBox}>
          <ArrowLeftOutlined onClick={onCancelUpdate} />
          <Button
            type="primary"
            shape="round"
            css={roundBtn}
            loading={updatePostLoading}
            onClick={updatePost}
          >
            만들기
          </Button>
        </footer>
      </>
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
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Update;
