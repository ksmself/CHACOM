webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_END, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, CHECK_DUPLICATE_REQUEST, CHECK_DUPLICATE_SUCCESS, CHECK_DUPLICATE_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_END", function() { return SIGN_UP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DUPLICATE_REQUEST", function() { return CHECK_DUPLICATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DUPLICATE_SUCCESS", function() { return CHECK_DUPLICATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DUPLICATE_FAILURE", function() { return CHECK_DUPLICATE_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  users: [],
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  checkDuplicateLoading: false,
  // 중복확인 시도중
  checkDuplicateDone: false,
  checkDuplicateError: null,
  isDuplicated: null
};
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var SIGN_UP_END = 'SIGN_UP_END';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var CHECK_DUPLICATE_REQUEST = 'CHECK_DUPLICATE_REQUEST';
var CHECK_DUPLICATE_SUCCESS = 'CHECK_DUPLICATE_SUCCESS';
var CHECK_DUPLICATE_FAILURE = 'CHECK_DUPLICATE_FAILURE';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true; // draft.users.push(action)

        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case SIGN_UP_END:
        draft.signUpDone = false;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case CHECK_DUPLICATE_REQUEST:
        draft.checkDuplicateLoading = true;
        draft.checkDuplicateDone = false;
        draft.checkDuplicateError = null;
        break;

      case CHECK_DUPLICATE_SUCCESS:
        draft.checkDuplicateLoading = false;
        draft.checkDuplicateDone = true;
        draft.isDuplicated = action.data;
        break;

      case CHECK_DUPLICATE_FAILURE:
        draft.checkDuplicateLoading = false;
        draft.checkDuplicateError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwidXNlcnMiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsImNoZWNrRHVwbGljYXRlTG9hZGluZyIsImNoZWNrRHVwbGljYXRlRG9uZSIsImNoZWNrRHVwbGljYXRlRXJyb3IiLCJpc0R1cGxpY2F0ZWQiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX0VORCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkNIRUNLX0RVUExJQ0FURV9SRVFVRVNUIiwiQ0hFQ0tfRFVQTElDQVRFX1NVQ0NFU1MiLCJDSEVDS19EVVBMSUNBVEVfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJlcnJvciIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxlQUFhLEVBQUUsS0FEVztBQUNKO0FBQ3RCQyxZQUFVLEVBQUUsS0FGYztBQUcxQkMsYUFBVyxFQUFFLElBSGE7QUFJMUJDLE9BQUssRUFBRSxFQUptQjtBQUsxQkMsY0FBWSxFQUFFLEtBTFk7QUFLTDtBQUNyQkMsV0FBUyxFQUFFLEtBTmU7QUFPMUJDLFlB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SyxDQUFDckIscUJBQU4sR0FBOEIsSUFBOUI7QUFDQXFCLGFBQUssQ0FBQ3BCLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0FvQixhQUFLLENBQUNuQixtQkFBTixHQUE0QixJQUE1QjtBQUNBOztBQUNGLFdBQUthLHVCQUFMO0FBQ0VNLGFBQUssQ0FBQ3JCLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0FxQixhQUFLLENBQUNwQixrQkFBTixHQUEyQixJQUEzQjtBQUNBb0IsYUFBSyxDQUFDbEIsWUFBTixHQUFxQmdCLE1BQU0sQ0FBQ0ssSUFBNUI7QUFDQTs7QUFDRixXQUFLUix1QkFBTDtBQUNFSyxhQUFLLENBQUNyQixxQkFBTixHQUE4QixLQUE5QjtBQUNBcUIsYUFBSyxDQUFDbkIsbUJBQU4sR0FBNEJpQixNQUFNLENBQUNJLEtBQW5DO0FBQ0E7O0FBQ0Y7QUFDRTtBQTNESjtBQTZERCxHQTlETSxDQURPO0FBQUEsQ0FBaEI7O0FBaUVlTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIwMmEwODU2YTZkNGJkMzhjZDczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgdXNlcnM6IFtdLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBjaGVja0R1cGxpY2F0ZUxvYWRpbmc6IGZhbHNlLCAvLyDspJHrs7XtmZXsnbgg7Iuc64+E7KSRXHJcbiAgY2hlY2tEdXBsaWNhdGVEb25lOiBmYWxzZSxcclxuICBjaGVja0R1cGxpY2F0ZUVycm9yOiBudWxsLFxyXG4gIGlzRHVwbGljYXRlZDogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9FTkQgPSAnU0lHTl9VUF9FTkQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QgPSAnQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfRFVQTElDQVRFX1NVQ0NFU1MgPSAnQ0hFQ0tfRFVQTElDQVRFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfRFVQTElDQVRFX0ZBSUxVUkUgPSAnQ0hFQ0tfRFVQTElDQVRFX0ZBSUxVUkUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxyXG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgLy8gZHJhZnQudXNlcnMucHVzaChhY3Rpb24pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0VORDpcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIRUNLX0RVUExJQ0FURV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoZWNrRHVwbGljYXRlTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEdXBsaWNhdGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEdXBsaWNhdGVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hFQ0tfRFVQTElDQVRFX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEdXBsaWNhdGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEdXBsaWNhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc0R1cGxpY2F0ZWQgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEVDS19EVVBMSUNBVEVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5jaGVja0R1cGxpY2F0ZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGVja0R1cGxpY2F0ZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==