import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/index';
import rootSaga from '../sagas/index';

// action이 dispatch되는 것을 loggingg하는 미들웨어
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  // action 실행 전에 콘솔 한 번 찍어주는 미들웨어
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];

  // redux의 기능이 확장된 것이 enhancer
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? // 배포용
        // middlewares는 배열이니까 spread해서 넣는다
        compose(applyMiddleware(...middlewares))
      : // 개발용일 때는 devtools 연결
        composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configureStore, {
  // 개발모드라면 디버그를 더 자세하게 해줌
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
