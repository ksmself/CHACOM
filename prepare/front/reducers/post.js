import produce from 'immer';

export const initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  convertPinyinLoading: false,
  convertPinyinDone: false,
  convertPinyinError: null,
  convertedPinyin: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
export const CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
export const CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case CONVERT_PINYIN_REQUEST:
        draft.convertPinyinLoading = true;
        draft.convertPinyinDone = false;
        draft.convertPinyinError = null;
        break;
      case CONVERT_PINYIN_SUCCESS:
        draft.convertPinyinLoading = false;
        draft.convertPinyinDone = true;
        draft.convertedPinyin = action.data;
        break;
      case CONVERT_PINYIN_FAILURE:
        draft.convertPinyinLoading = false;
        draft.convertPinyinError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
