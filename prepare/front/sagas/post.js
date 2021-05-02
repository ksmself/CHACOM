import axios from 'axios';
import { all, fork, takeLatest, call, put } from '@redux-saga/core/effects';
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  CONVERT_PINYIN_FAILURE,
  CONVERT_PINYIN_REQUEST,
  CONVERT_PINYIN_SUCCESS,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
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
    yield put({
      type: CONVERT_PINYIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchConvertPinyin() {
  yield takeLatest(CONVERT_PINYIN_REQUEST, convertPinyin);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchConvertPinyin)]);
}
