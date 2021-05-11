webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_HASHTAG_REQUEST, CONVERT_PINYIN_REQUEST, CONVERT_PINYIN_SUCCESS, CONVERT_PINYIN_FAILURE, CONVERT_RESET_REQUEST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HASHTAG_REQUEST", function() { return ADD_HASHTAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_REQUEST", function() { return CONVERT_PINYIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_SUCCESS", function() { return CONVERT_PINYIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_FAILURE", function() { return CONVERT_PINYIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_RESET_REQUEST", function() { return CONVERT_RESET_REQUEST; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [],
  currentHashtags: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  convertLoading: false,
  convertDone: false,
  convertError: null,
  convertedPinyin: null
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_HASHTAG_REQUEST = 'ADD_HASHTAG_REQUEST';
var CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
var CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
var CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';
var CONVERT_RESET_REQUEST = 'CONVERT_RESET_REQUEST';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
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

      case ADD_HASHTAG_REQUEST:
        draft.currentHashtags.push(action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJjdXJyZW50SGFzaHRhZ3MiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiY29udmVydExvYWRpbmciLCJjb252ZXJ0RG9uZSIsImNvbnZlcnRFcnJvciIsImNvbnZlcnRlZFBpbnlpbiIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9IQVNIVEFHX1JFUVVFU1QiLCJDT05WRVJUX1BJTllJTl9SRVFVRVNUIiwiQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyIsIkNPTlZFUlRfUElOWUlOX0ZBSUxVUkUiLCJDT05WRVJUX1JFU0VUX1JFUVVFU1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwidW5zaGlmdCIsImRhdGEiLCJlcnJvciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxFQURlO0FBRTFCQyxpQkFBZSxFQUFFLEVBRlM7QUFHMUJDLGdCQUFjLEVBQUUsS0FIVTtBQUkxQkMsYUFBVyxFQUFFLEtBSmE7QUFLMUJDLGNBQVksRUFBRSxJQUxZO0FBTTFCQyxnQkFBYyxFQUFFLEtBTlU7QUFPMUJDLGFBQVcsRUFBRSxLQVBhO0FBUTFCQyxjQUFZLEVBQUUsSUFSWTtBQVMxQkMsaUJBQWUsRUFBRTtBQVRTLENBQXJCO0FBWUEsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsSUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCOztBQUVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBQ0MsS0FBRCx1RUFBU25CLFlBQVQ7QUFBQSxNQUF1Qm9CLE1BQXZCO0FBQUEsU0FDZEMscURBQU8sQ0FBQ0YsS0FBRCxFQUFRLFVBQUNHLEtBQUQsRUFBVztBQUN4QixZQUFRRixNQUFNLENBQUNHLElBQWY7QUFDRSxXQUFLYixnQkFBTDtBQUNFWSxhQUFLLENBQUNuQixjQUFOLEdBQXVCLElBQXZCO0FBQ0FtQixhQUFLLENBQUNsQixXQUFOLEdBQW9CLEtBQXBCO0FBQ0FrQixhQUFLLENBQUNqQixZQUFOLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0YsV0FBS00sZ0JBQUw7QUFDRVcsYUFBSyxDQUFDbkIsY0FBTixHQUF1QixLQUF2QjtBQUNBbUIsYUFBSyxDQUFDbEIsV0FBTixHQUFvQixJQUFwQjtBQUNBa0IsYUFBSyxDQUFDckIsU0FBTixDQUFnQnVCLE9BQWhCLENBQXdCSixNQUFNLENBQUNLLElBQS9CO0FBQ0E7O0FBQ0YsV0FBS2IsZ0JBQUw7QUFDRVUsYUFBSyxDQUFDbkIsY0FBTixHQUF1QixLQUF2QjtBQUNBbUIsYUFBSyxDQUFDakIsWUFBTixHQUFxQmUsTUFBTSxDQUFDTSxLQUE1QjtBQUNBOztBQUNGLFdBQUtiLG1CQUFMO0FBQ0VTLGFBQUssQ0FBQ3BCLGVBQU4sQ0FBc0J5QixJQUF0QixDQUEyQlAsTUFBTSxDQUFDSyxJQUFsQztBQUNBOztBQUNGLFdBQUtYLHNCQUFMO0FBQ0VRLGFBQUssQ0FBQ2hCLGNBQU4sR0FBdUIsSUFBdkI7QUFDQWdCLGFBQUssQ0FBQ2YsV0FBTixHQUFvQixLQUFwQjtBQUNBZSxhQUFLLENBQUNkLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixXQUFLTyxzQkFBTDtBQUNFTyxhQUFLLENBQUNoQixjQUFOLEdBQXVCLEtBQXZCO0FBQ0FnQixhQUFLLENBQUNmLFdBQU4sR0FBb0IsSUFBcEI7QUFDQWUsYUFBSyxDQUFDYixlQUFOLEdBQXdCVyxNQUFNLENBQUNLLElBQS9CO0FBQ0E7O0FBQ0YsV0FBS1Qsc0JBQUw7QUFDRU0sYUFBSyxDQUFDaEIsY0FBTixHQUF1QixLQUF2QjtBQUNBZ0IsYUFBSyxDQUFDZCxZQUFOLEdBQXFCWSxNQUFNLENBQUNNLEtBQTVCO0FBQ0E7O0FBQ0YsV0FBS1QscUJBQUw7QUFDRUssYUFBSyxDQUFDZixXQUFOLEdBQW9CLEtBQXBCO0FBQ0FlLGFBQUssQ0FBQ2QsWUFBTixHQUFxQixJQUFyQjtBQUNBYyxhQUFLLENBQUNiLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRjtBQUNFO0FBdENKO0FBd0NELEdBekNNLENBRE87QUFBQSxDQUFoQjs7QUE0Q2VTLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTFiNTAwNDVkZWMwZjQzMWM4NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBjdXJyZW50SGFzaHRhZ3M6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRMb2FkaW5nOiBmYWxzZSxcclxuICBjb252ZXJ0RG9uZTogZmFsc2UsXHJcbiAgY29udmVydEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRlZFBpbnlpbjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0hBU0hUQUdfUkVRVUVTVCA9ICdBRERfSEFTSFRBR19SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05WRVJUX1BJTllJTl9SRVFVRVNUID0gJ0NPTlZFUlRfUElOWUlOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyA9ICdDT05WRVJUX1BJTllJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENPTlZFUlRfUElOWUlOX0ZBSUxVUkUgPSAnQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9SRVNFVF9SRVFVRVNUID0gJ0NPTlZFUlRfUkVTRVRfUkVRVUVTVCc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0hBU0hUQUdfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jdXJyZW50SGFzaHRhZ3MucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29udmVydERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTlZFUlRfUElOWUlOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY29udmVydExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29udmVydGVkUGlueWluID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1JFU0VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY29udmVydERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRlZFBpbnlpbiA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9