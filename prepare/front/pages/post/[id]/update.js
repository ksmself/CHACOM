import axios from 'axios';
import { END } from 'redux-saga';

import { LOAD_POST_REQUEST } from '../../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../../reducers/user';
import wrapper from '../../../store/configureStore';

const Update = () => {
  return <div>post update page</div>;
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
