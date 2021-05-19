import axios from 'axios';
import { all, fork, takeLatest, call, put } from '@redux-saga/core/effects';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  CONVERT_PINYIN_FAILURE,
  CONVERT_PINYIN_REQUEST,
  CONVERT_PINYIN_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

function loadPostsAPI(data) {
  return axios.get('/posts', data);
}

function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: [],
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function convertPinyinAPI(data) {
  return axios.post('/post/convert/pinyin', data);
}

function* convertPinyin(action) {
  try {
    const result = yield call(convertPinyinAPI, action.data);
    yield put({
      type: CONVERT_PINYIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CONVERT_PINYIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchConvertPinyin() {
  yield takeLatest(CONVERT_PINYIN_REQUEST, convertPinyin);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchConvertPinyin),
  ]);
}
