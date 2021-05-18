import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import axios from 'axios';

import {
  CHECK_DUPLICATE_FAILURE,
  CHECK_DUPLICATE_REQUEST,
  CHECK_DUPLICATE_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

function checkDuplicateAPI(data) {
  return axios.post('/user/duplicate', data);
}

function* checkDuplicate(action) {
  try {
    const result = yield call(checkDuplicateAPI, action.data);
    yield put({
      type: CHECK_DUPLICATE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CHECK_DUPLICATE_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI(data) {
  return axios.post('/user/logout', data);
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchCheckDuplicate() {
  yield takeLatest(CHECK_DUPLICATE_REQUEST, checkDuplicate);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchCheckDuplicate),
  ]);
}
