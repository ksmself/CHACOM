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


var _marked = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(convertPinyin),
    _marked3 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked4 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchConvertPinyin),
    _marked5 = /*#__PURE__*/C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);





function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
}

function addPost(action) {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context.t0.response.data
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 5]]);
}

function convertPinyinAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/convert/pinyin', data);
}

function convertPinyin(action) {
  var result;
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function convertPinyin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(convertPinyinAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["CONVERT_PINYIN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["CONVERT_PINYIN_FAILURE"],
            error: _context2.t0.response.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function watchAddPost() {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchConvertPinyin() {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchConvertPinyin$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["CONVERT_PINYIN_REQUEST"], convertPinyin);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function postSaga() {
  return C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchConvertPinyin)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0IiwiY29udmVydFBpbnlpbiIsIndhdGNoQWRkUG9zdCIsIndhdGNoQ29udmVydFBpbnlpbiIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJwdXQiLCJ0eXBlIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwiY29udmVydFBpbnlpbkFQSSIsImNhbGwiLCJyZXN1bHQiLCJDT05WRVJUX1BJTllJTl9TVUNDRVNTIiwiQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSIsInRha2VMYXRlc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwiQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FLQWVVQSxPO3NLQW1CQUMsYTtzS0FlQUMsWTtzS0FJQUMsa0I7c0tBSWVDLFE7O0FBekR6QjtBQUNBO0FBQ0E7O0FBU0EsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLE9BQVgsRUFBb0JGLElBQXBCLENBQVA7QUFDRDs7QUFFRCxTQUFVTixPQUFWLENBQWtCUyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGlCQUFNQyxvRUFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVDLCtEQURFO0FBRVJOLGdCQUFJLEVBQUVHLE1BQU0sQ0FBQ0g7QUFGTCxXQUFELENBQVQ7O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUksaUJBQU1JLG9FQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUUsK0RBREU7QUFFUkMsaUJBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFUO0FBRlosV0FBRCxDQUFUOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVBLFNBQVNVLGdCQUFULENBQTBCVixJQUExQixFQUFnQztBQUM5QixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsc0JBQVgsRUFBbUNGLElBQW5DLENBQVA7QUFDRDs7QUFFRCxTQUFVTCxhQUFWLENBQXdCUSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNUSxxRUFBSSxDQUFDRCxnQkFBRCxFQUFtQlAsTUFBTSxDQUFDSCxJQUExQixDQUFWOztBQUZuQjtBQUVVWSxnQkFGVjtBQUFBO0FBR0ksaUJBQU1SLG9FQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRVEscUVBREU7QUFFUmIsZ0JBQUksRUFBRVksTUFBTSxDQUFDWjtBQUZMLFdBQUQsQ0FBVDs7QUFISjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRSSxpQkFBTUksb0VBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFUyxxRUFERTtBQUVSTixpQkFBSyxFQUFFLGFBQUlDLFFBQUosQ0FBYVQ7QUFGWixXQUFELENBQVQ7O0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBVUosWUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTW1CLDJFQUFVLENBQUNDLCtEQUFELEVBQW1CdEIsT0FBbkIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUcsa0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1rQiwyRUFBVSxDQUFDRSxxRUFBRCxFQUF5QnRCLGFBQXpCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVHLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU1vQixvRUFBRyxDQUFDLENBQUNDLHFFQUFJLENBQUN2QixZQUFELENBQUwsRUFBcUJ1QixxRUFBSSxDQUFDdEIsa0JBQUQsQ0FBekIsQ0FBRCxDQUFUOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWY5MjM5NTIzZjgzZmY1NGFiNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgY2FsbCwgcHV0IH0gZnJvbSAnQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBDT05WRVJUX1BJTllJTl9GQUlMVVJFLFxyXG4gIENPTlZFUlRfUElOWUlOX1JFUVVFU1QsXHJcbiAgQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0UGlueWluQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvY29udmVydC9waW55aW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNvbnZlcnRQaW55aW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY29udmVydFBpbnlpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENPTlZFUlRfUElOWUlOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb252ZXJ0UGlueWluKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCwgY29udmVydFBpbnlpbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hBZGRQb3N0KSwgZm9yayh3YXRjaENvbnZlcnRQaW55aW4pXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==