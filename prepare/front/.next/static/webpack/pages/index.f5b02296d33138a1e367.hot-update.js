webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_HASHTAG_REQUEST, REMOVE_HASHTAG_REQUEST, CONVERT_PINYIN_REQUEST, CONVERT_PINYIN_SUCCESS, CONVERT_PINYIN_FAILURE, CONVERT_RESET_REQUEST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HASHTAG_REQUEST", function() { return ADD_HASHTAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_HASHTAG_REQUEST", function() { return REMOVE_HASHTAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_REQUEST", function() { return CONVERT_PINYIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_SUCCESS", function() { return CONVERT_PINYIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_FAILURE", function() { return CONVERT_PINYIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_RESET_REQUEST", function() { return CONVERT_RESET_REQUEST; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [],
  currentHashtags: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  convertLoading: false,
  convertDone: false,
  convertError: null,
  convertedPinyin: null
};
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var ADD_HASHTAG_REQUEST = 'ADD_HASHTAG_REQUEST';
var REMOVE_HASHTAG_REQUEST = 'REMOVE_HASHTAG_REQUEST';
var CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
var CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
var CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';
var CONVERT_RESET_REQUEST = 'CONVERT_RESET_REQUEST';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
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
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

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

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        });
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case ADD_HASHTAG_REQUEST:
        draft.currentHashtags.push(action.data);
        break;

      case REMOVE_HASHTAG_REQUEST:
        draft.currentHashtags = draft.currentHashtags.filter(function (v) {
          return v !== action.data;
        });
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
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJjdXJyZW50SGFzaHRhZ3MiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJjb252ZXJ0TG9hZGluZyIsImNvbnZlcnREb25lIiwiY29udmVydEVycm9yIiwiY29udmVydGVkUGlueWluIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX0hBU0hUQUdfUkVRVUVTVCIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJDT05WRVJUX1BJTllJTl9SRVFVRVNUIiwiQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyIsIkNPTlZFUlRfUElOWUlOX0ZBSUxVUkUiLCJDT05WRVJUX1JFU0VUX1JFUVVFU1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwic2luZ2xlUG9zdCIsImRhdGEiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiaWQiLCJQb3N0SWQiLCJwb3N0IiwiZmluZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLEVBRGU7QUFFMUJDLGlCQUFlLEVBQUUsRUFGUztBQUcxQkMsaUJBQWUsRUFBRSxLQUhTO0FBSTFCQyxjQUFZLEVBQUUsS0FKWTtBQUsxQkMsZUFBYSxFQUFFLElBTFc7QUFNMUJDLGtCQUFnQixFQUFFLEtBTlE7QUFPMUJDLGVBQWEsRUFBRSxLQVBXO0FBUTFCQyxnQkFBYyxFQUFFLElBUlU7QUFTMUJDLGdCQUFjLEVBQUUsS0FUVTtBQVUxQkMsYUFBVyxFQUFFLEtBVmE7QUFXMUJDLGNBQVksRUFBRSxJQVhZO0FBWTFCQyxtQkFBaUIsRUFBRSxLQVpPO0FBYTFCQyxnQkFBYyxFQUFFLEtBYlU7QUFjMUJDLGlCQUFlLEVBQUUsSUFkUztBQWUxQkMsaUJBQWUsRUFBRSxLQWZTO0FBZ0IxQkMsY0FBWSxFQUFFLEtBaEJZO0FBaUIxQkMsZUFBYSxFQUFFLElBakJXO0FBa0IxQkMsbUJBQWlCLEVBQUUsS0FsQk87QUFtQjFCQyxnQkFBYyxFQUFFLEtBbkJVO0FBb0IxQkMsaUJBQWUsRUFB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OTZkMzMxMzhhMWUzNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBjdXJyZW50SGFzaHRhZ3M6IFtdLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRMb2FkaW5nOiBmYWxzZSxcclxuICBjb252ZXJ0RG9uZTogZmFsc2UsXHJcbiAgY29udmVydEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRlZFBpbnlpbjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfSEFTSFRBR19SRVFVRVNUID0gJ0FERF9IQVNIVEFHX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCA9ICdSRU1PVkVfSEFTSFRBR19SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05WRVJUX1BJTllJTl9SRVFVRVNUID0gJ0NPTlZFUlRfUElOWUlOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyA9ICdDT05WRVJUX1BJTllJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENPTlZFUlRfUElOWUlOX0ZBSUxVUkUgPSAnQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9SRVNFVF9SRVFVRVNUID0gJ0NPTlZFUlRfUkVTRVRfUkVRVUVTVCc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmN1cnJlbnRIYXNodGFncyA9IFtdO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9IQVNIVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY3VycmVudEhhc2h0YWdzLnB1c2goYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9IQVNIVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY3VycmVudEhhc2h0YWdzID0gZHJhZnQuY3VycmVudEhhc2h0YWdzLmZpbHRlcihcclxuICAgICAgICAgICh2KSA9PiB2ICE9PSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29udmVydERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTlZFUlRfUElOWUlOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY29udmVydExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29udmVydGVkUGlueWluID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1JFU0VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY29udmVydERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRlZFBpbnlpbiA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9