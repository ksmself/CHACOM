import produce from 'immer';

export const initialState = {
  mainPosts: [],
  currentHashtags: [],
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  convertLoading: false,
  convertDone: false,
  convertError: null,
  convertedPinyin: null,
};

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_HASHTAG_REQUEST = 'ADD_HASHTAG_REQUEST';
export const REMOVE_HASHTAG_REQUEST = 'REMOVE_HASHTAG_REQUEST';

export const CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
export const CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
export const CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';

export const CONVERT_RESET_REQUEST = 'CONVERT_RESET_REQUEST';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        draft.addPostDone = false;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.currentHashtags = [];
        draft.mainPosts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case ADD_HASHTAG_REQUEST:
        draft.currentHashtags.push(action.data);
        break;
      case REMOVE_HASHTAG_REQUEST:
        draft.currentHashtags = draft.currentHashtags.filter(
          (v) => v !== action.data
        );
        break;
      case CONVERT_PINYIN_REQUEST:
        draft.convertLoading = true;
        draft.convertDone = false;
        draft.convertError = null;
        break;
      case CONVERT_PINYIN_SUCCESS:
        draft.convertLoading = false;
        draft.convertDone = true;
        draft.convertedPinyin = action.data;
        break;
      case CONVERT_PINYIN_FAILURE:
        draft.convertLoading = false;
        draft.convertError = action.error;
        break;
      case CONVERT_RESET_REQUEST:
        draft.convertDone = false;
        draft.convertError = null;
        draft.convertedPinyin = null;
        break;
      default:
        break;
    }
  });

export default reducer;
