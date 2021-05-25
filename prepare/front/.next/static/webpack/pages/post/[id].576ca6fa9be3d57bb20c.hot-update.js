webpackHotUpdate_N_E("pages/post/[id]",{

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
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unLikePostLoading = true;
        draft.unLikePostDone = false;
        draft.unLikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        draft.unLikePostLoading = false;
        draft.unLikePostDone = true;
        break;

      case UNLIKE_POST_FAILURE:
        draft.unLikePostLoading = false;
        draft.unLikePostError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJjdXJyZW50SGFzaHRhZ3MiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJjb252ZXJ0TG9hZGluZyIsImNvbnZlcnREb25lIiwiY29udmVydEVycm9yIiwiY29udmVydGVkUGlueWluIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX0hBU0hUQUdfUkVRVUVTVCIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJDT05WRVJUX1BJTllJTl9SRVFVRVNUIiwiQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyIsIkNPTlZFUlRfUElOWUlOX0ZBSUxVUkUiLCJDT05WRVJUX1JFU0VUX1JFUVVFU1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwic2luZ2xlUG9zdCIsImRhdGEiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiaWQiLCJQb3N0SWQiLCJ1bkxpa2VQb3N0TG9hZGluZyIsInVuTGlrZVBvc3REb25lIiwidW5MaWtlUG9zdEVycm9yIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsRUFEZTtBQUUxQkMsaUJBQWUsRUFBRSxFQUZTO0FBRzFCQyxpQkFBZSxFQUFFLEtBSFM7QUFJMUJDLGNBQVksRUFBRSxLQUpZO0FBSzFCQyxlQUFhLEVBQUUsSUFMVztBQU0xQkMsa0JBQWdCLEVBQUUsS0FOUTtBQU8xQkMsZUFBYSxFQUFFLEtBUFc7QUFRMUJDLGdCQUFjLEVBQUUsSUFSVTtBQVMxQkMsZ0JBQWMsRUFBRSxLQVRVO0FBVTFCQyxhQUFXLEVBQUUsS0FWYTtBQVcxQkMsY0FBWSxFQUFFLElBWFk7QUFZMUJDLG1CQUFpQixFQUFFLEtBWk87QUFhMUJDLGdCQUFjLEVBQUUsS0FiVTtBQWMxQkMsaUJBQWUsRUFBRSxJQWRTO0FBZTFCQyxpQkFBZSxFQUFFLEtBZlM7QUFnQjFCQyxjQUFZLEVBQUUsS0FoQlk7QUFpQjFCQyxlQUFhLEVBQUUsSUFqQlc7QUFrQjFCQyxtQkFBaUIsRUFBRSxLQWxCTztBQW1CMUJDLGdCQUFjLEVBQUUs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QSxpQkFBT0EsQ0FBQyxLQUFLVCxNQUFNLENBQUNLLElBQXBCO0FBQUEsU0FEc0IsQ0FBeEI7QUFHQTs7QUFDRixXQUFLWCxzQkFBTDtBQUNFUSxhQUFLLENBQUNoQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0FnQyxhQUFLLENBQUMvQixXQUFOLEdBQW9CLEtBQXBCO0FBQ0ErQixhQUFLLENBQUM5QixZQUFOLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0YsV0FBS3VCLHNCQUFMO0FBQ0VPLGFBQUssQ0FBQ2hDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQWdDLGFBQUssQ0FBQy9CLFdBQU4sR0FBb0IsSUFBcEI7QUFDQStCLGFBQUssQ0FBQzdCLGVBQU4sR0FBd0IyQixNQUFNLENBQUNLLElBQS9CO0FBQ0E7O0FBQ0YsV0FBS1Qsc0JBQUw7QUFDRU0sYUFBSyxDQUFDaEMsY0FBTixHQUF1QixLQUF2QjtBQUNBZ0MsYUFBSyxDQUFDOUIsWUFBTixHQUFxQjRCLE1BQU0sQ0FBQ00sS0FBNUI7QUFDQTs7QUFDRixXQUFLVCxxQkFBTDtBQUNFSyxhQUFLLENBQUMvQixXQUFOLEdBQW9CLEtBQXBCO0FBQ0ErQixhQUFLLENBQUM5QixZQUFOLEdBQXFCLElBQXJCO0FBQ0E4QixhQUFLLENBQUM3QixlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0Y7QUFDRTtBQW5ISjtBQXFIRCxHQXRITSxDQURPO0FBQUEsQ0FBaEI7O0FBeUhleUIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjU3NmNhNmZhOWJlM2Q1N2JiMjBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgY3VycmVudEhhc2h0YWdzOiBbXSxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBjb252ZXJ0TG9hZGluZzogZmFsc2UsXHJcbiAgY29udmVydERvbmU6IGZhbHNlLFxyXG4gIGNvbnZlcnRFcnJvcjogbnVsbCxcclxuICBjb252ZXJ0ZWRQaW55aW46IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0hBU0hUQUdfUkVRVUVTVCA9ICdBRERfSEFTSFRBR19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QgPSAnUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCA9ICdDT05WRVJUX1BJTllJTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENPTlZFUlRfUElOWUlOX1NVQ0NFU1MgPSAnQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDT05WRVJUX1BJTllJTl9GQUlMVVJFID0gJ0NPTlZFUlRfUElOWUlOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlZFUlRfUkVTRVRfUkVRVUVTVCA9ICdDT05WRVJUX1JFU0VUX1JFUVVFU1QnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jdXJyZW50SGFzaHRhZ3MgPSBbXTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bkxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bkxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuTGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVuTGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5MaWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9IQVNIVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY3VycmVudEhhc2h0YWdzLnB1c2goYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9IQVNIVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY3VycmVudEhhc2h0YWdzID0gZHJhZnQuY3VycmVudEhhc2h0YWdzLmZpbHRlcihcclxuICAgICAgICAgICh2KSA9PiB2ICE9PSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29udmVydERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTlZFUlRfUElOWUlOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY29udmVydExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29udmVydGVkUGlueWluID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1JFU0VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY29udmVydERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRlZFBpbnlpbiA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9