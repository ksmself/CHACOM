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
          _context.next = 9;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          _context.next = 9;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            error: _context.t0.response.data
          });

        case 9:
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
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["CONVERT_PINYIN_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkUG9zdHMiLCJhZGRQb3N0IiwiY29udmVydFBpbnlpbiIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hDb252ZXJ0UGlueWluIiwicG9zdFNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJhY3Rpb24iLCJwdXQiLCJ0eXBlIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiZXJyb3IiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJwb3N0IiwiY2FsbCIsInJlc3VsdCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImNvbnNvbGUiLCJBRERfUE9TVF9GQUlMVVJFIiwiY29udmVydFBpbnlpbkFQSSIsIkNPTlZFUlRfUElOWUlOX1NVQ0NFU1MiLCJDT05WRVJUX1BJTllJTl9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkFERF9QT1NUX1JFUVVFU1QiLCJDT05WRVJUX1BJTllJTl9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FLQW1CVUEsUztzS0FtQkFDLE87c0tBd0JBQyxhO3NLQWVBQyxjO3NLQUlBQyxZO3NLQUlBQyxrQjtzS0FJZUMsUTs7QUF6RnpCO0FBQ0E7QUFDQTtBQVdBOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxRQUFWLEVBQW9CRixJQUFwQixDQUFQO0FBQ0Q7O0FBRUQsU0FBVVIsU0FBVixDQUFvQlcsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTUMsb0VBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFQyxpRUFERTtBQUVSTixnQkFBSSxFQUFFRyxNQUFN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LENBQUMvQixjQUFELENBREksRUFFUitCLHFFQUFJLENBQUM5QixZQUFELENBRkksRUFHUjhCLHFFQUFJLENBQUM3QixrQkFBRCxDQUhJLENBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFlYTc5MDg5OGI3OGIyMmNhMDQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGNhbGwsIHB1dCB9IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSxcclxuICBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gIENPTlZFUlRfUElOWUlOX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRQaW55aW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9jb252ZXJ0L3BpbnlpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY29udmVydFBpbnlpbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjb252ZXJ0UGlueWluQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1BJTllJTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ29udmVydFBpbnlpbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENPTlZFUlRfUElOWUlOX1JFUVVFU1QsIGNvbnZlcnRQaW55aW4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaENvbnZlcnRQaW55aW4pLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=