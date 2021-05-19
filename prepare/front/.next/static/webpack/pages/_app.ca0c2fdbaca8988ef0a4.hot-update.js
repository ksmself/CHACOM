webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked2 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked3 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(convertPinyin),
    _marked4 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked5 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked6 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchConvertPinyin),
    _marked7 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/posts', data);
}

function loadPosts(action) {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            data: action.data
          });

        case 3:
          _context.next = 10;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 10;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            error: _context.t0.response.data
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 5]]);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
}

function addPost(action) {
  var result;
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addPostAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 8;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: result.data
          });

        case 8:
          _context2.next = 15;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 15;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function convertPinyinAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/convert/pinyin', data);
}

function convertPinyin(action) {
  var result;
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function convertPinyin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(convertPinyinAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["CONVERT_PINYIN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 13;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["CONVERT_PINYIN_FAILURE"],
            error: _context3.t0.response.data
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function watchLoadPosts() {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchAddPost() {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchConvertPinyin() {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchConvertPinyin$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["CONVERT_PINYIN_REQUEST"], convertPinyin);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function postSaga() {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadPosts), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchConvertPinyin)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkUG9zdHMiLCJhZGRQb3N0IiwiY29udmVydFBpbnlpbiIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hDb252ZXJ0UGlueWluIiwicG9zdFNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJhY3Rpb24iLCJwdXQiLCJ0eXBlIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwicG9zdCIsImNhbGwiLCJyZXN1bHQiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJBRERfUE9TVF9GQUlMVVJFIiwiY29udmVydFBpbnlpbkFQSSIsIkNPTlZFUlRfUElOWUlOX1NVQ0NFU1MiLCJDT05WRVJUX1BJTllJTl9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkFERF9QT1NUX1JFUVVFU1QiLCJDT05WRVJUX1BJTllJTl9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FLQW1CVUEsUztzS0FvQkFDLE87c0tBd0JBQyxhO3NLQWdCQUMsYztzS0FJQUMsWTtzS0FJQUMsa0I7c0tBSWVDLFE7O0FBM0Z6QjtBQUNBO0FBQ0E7QUFXQTs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixTQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsUUFBVixFQUFvQkYsSUFBcEIsQ0FBUDtBQUNEOztBQUVELFNBQVVSLFNBQVYsQ0FBb0JXLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0ksaUJBQU1DLG9FQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUMsaUVBREU7QUFFUk4sZ0JBQUksRUFBRUcsTUFB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QUFBO0FBQUE7QUFBQTtBQUNiLGlCQUFNMkIsb0VBQUcsQ0FBQyxDQUNSQyxxRUFBSSxDQUFDL0IsY0FBRCxDQURJLEVBRVIrQixxRUFBSSxDQUFDOUIsWUFBRCxDQUZJLEVBR1I4QixxRUFBSSxDQUFDN0Isa0JBQUQsQ0FISSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYTBjMmZkYmFjYTg5ODhlZjBhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBjYWxsLCBwdXQgfSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIENPTlZFUlRfUElOWUlOX0ZBSUxVUkUsXHJcbiAgQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCxcclxuICBDT05WRVJUX1BJTllJTl9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0UGlueWluQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvY29udmVydC9waW55aW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNvbnZlcnRQaW55aW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY29udmVydFBpbnlpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENPTlZFUlRfUElOWUlOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENvbnZlcnRQaW55aW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDT05WRVJUX1BJTllJTl9SRVFVRVNULCBjb252ZXJ0UGlueWluKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hDb252ZXJ0UGlueWluKSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9