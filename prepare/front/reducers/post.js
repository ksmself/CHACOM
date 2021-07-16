import produce from '../util/produce';

export const initialState = {
  mainPosts: [],
  singlePost: null,
  currentHashtags: [],
  search: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  removeReplyLoading: false,
  removeReplyDone: false,
  removeReplyError: null,
  changeCommentLoading: false,
  changeCommentDone: false,
  changeCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  searchPostLoading: false,
  searchPostDone: false,
  searchPostError: null,
  convertLoading: false,
  convertDone: false,
  convertError: null,
  convertedPinyin: null,
};

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const ADD_REPLY_REQUEST = 'ADD_REPLY_REQUEST';
export const ADD_REPLY_SUCCESS = 'ADD_REPLY_SUCCESS';
export const ADD_REPLY_FAILURE = 'ADD_REPLY_FAILURE';

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

export const REMOVE_REPLY_REQUEST = 'REMOVE_REPLY_REQUEST';
export const REMOVE_REPLY_SUCCESS = 'REMOVE_REPLY_SUCCESS';
export const REMOVE_REPLY_FAILURE = 'REMOVE_REPLY_FAILURE';

// 답글이 있는 COMMENT, 삭제된 것처럼 CHANGE
export const CHANGE_COMMENT_REQUEST = 'CHANGE_COMMENT_REQUEST';
export const CHANGE_COMMENT_SUCCESS = 'CHANGE_COMMENT_SUCCESS';
export const CHANGE_COMMENT_FAILURE = 'CHANGE_COMMENT_FAILURE';

// COMMENT 내용 UPDATE
export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const SEARCH_POST_REQUEST = 'SEARCH_POST_REQUEST';
export const SEARCH_POST_SUCCESS = 'SEARCH_POST_SUCCESS';
export const SEARCH_POST_FAILURE = 'SEARCH_POST_FAILURE';

export const CHANGE_SEARCH_REQUEST = 'CHANGE_SEARCH_REQUEST';

export const ADD_HASHTAG_REQUEST = 'ADD_HASHTAG_REQUEST';
export const REMOVE_HASHTAG_REQUEST = 'REMOVE_HASHTAG_REQUEST';
export const SET_HASHTAG_REQUEST = 'SET_HASHTAG_REQUEST';

export const CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
export const CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
export const CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';

export const CONVERT_RESET_REQUEST = 'CONVERT_RESET_REQUEST';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        draft.currentHashtags = action.data.Hashtags.map((v) => v.name);
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case LOAD_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        draft.addPostDone = false;
        draft.search = null;
        break;
      case LOAD_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data;
        draft.currentHashtags = [];
        draft.search = '';
        break;
      case LOAD_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
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
        draft.mainPosts.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        draft.singlePost = action.data;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
      case ADD_REPLY_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
      case ADD_REPLY_SUCCESS: {
        draft.singlePost.Comments.push(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
      case ADD_REPLY_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;
      case REMOVE_COMMENT_SUCCESS:
        draft.singlePost.Comments = draft.singlePost.Comments.filter(
          (v) => v.id !== action.data.id
        );
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        break;
      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;
      case REMOVE_REPLY_REQUEST:
        draft.removeReplyLoading = true;
        draft.removeReplyDone = false;
        draft.removeReplyError = null;
        break;
      case REMOVE_REPLY_SUCCESS:
        draft.singlePost.Comments = draft.singlePost.Comments.filter(
          (v) => v.id !== action.data.id
        );
        draft.removeReplyLoading = false;
        draft.removeReplyDone = true;
        break;
      case REMOVE_REPLY_FAILURE:
        draft.removeReplyLoading = false;
        draft.removeReplyError = action.error;
        break;
      case CHANGE_COMMENT_REQUEST:
        draft.changeCommentLoading = true;
        draft.changeCommentDone = false;
        draft.changeCommentError = null;
        break;
      case CHANGE_COMMENT_SUCCESS: {
        const index = draft.singlePost.Comments.findIndex(
          (v) => v.id === action.data.id
        );
        draft.singlePost.Comments = [
          ...draft.singlePost.Comments.slice(0, index),
          { ...action.data },
          ...draft.singlePost.Comments.slice(index + 1),
        ];
        draft.changeCommentLoading = false;
        draft.changeCommentDone = true;
        break;
      }
      case CHANGE_COMMENT_FAILURE:
        draft.changeCommentLoading = false;
        draft.changeCommentError = action.error;
        break;
      case UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;
      case UPDATE_COMMENT_SUCCESS: {
        const index = draft.singlePost.Comments.findIndex(
          (v) => v.id === action.data.id
        );
        const comment = draft.singlePost.Comments[index];
        draft.singlePost.Comments = [
          ...draft.singlePost.Comments.slice(0, index),
          { ...comment, content: action.data.content },
          ...draft.singlePost.Comments.slice(index + 1),
        ];
        draft.updateCommentLoading = false;
        draft.updateCommentDone = true;
        break;
      }
      case UPDATE_COMMENT_FAILURE:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.error;
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS: {
        draft.singlePost.Likers.push({ id: action.data.UserId });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      case UNLIKE_POST_SUCCESS: {
        draft.singlePost.Likers = draft.singlePost.Likers.filter(
          (v) => v.id !== action.data.UserId
        );
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      case SEARCH_POST_REQUEST:
        draft.searchPostLoading = true;
        draft.searchPostDone = false;
        draft.searchPostError = null;
        break;
      case SEARCH_POST_SUCCESS:
        draft.searchPostLoading = false;
        draft.searchPostDone = true;
        draft.mainPosts = action.data;
        break;
      case SEARCH_POST_FAILURE:
        draft.searchPostLoading = false;
        draft.searchPostError = action.error;
        break;
      case CHANGE_SEARCH_REQUEST:
        draft.search = action.data;
        break;
      case ADD_HASHTAG_REQUEST:
        draft.currentHashtags.push(action.data);
        break;
      case REMOVE_HASHTAG_REQUEST:
        draft.currentHashtags = draft.currentHashtags.filter(
          (v) => v !== action.data
        );
        break;
      case SET_HASHTAG_REQUEST:
        draft.currentHashtags = [];
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
