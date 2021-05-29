webpackHotUpdate_N_E("pages/user/[id]/post",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpdateBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateBtn */ "./components/UpdateBtn.js");
/* harmony import */ var _DeleteBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteBtn */ "./components/DeleteBtn.js");
/* harmony import */ var _pages_user_id_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/user/[id]/styles */ "./pages/user/[id]/styles.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\PostList.js",
    _this = undefined;

/** @jsxImportSource @emotion/react */





var PostList = function PostList(_ref) {
  var postType = _ref.postType,
      post = _ref.post;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(postType, "/").concat(post.id),
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _pages_user_id_styles__WEBPACK_IMPORTED_MODULE_4__["postBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _pages_user_id_styles__WEBPACK_IMPORTED_MODULE_4__["postInfoBox"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: _pages_user_id_styles__WEBPACK_IMPORTED_MODULE_4__["postTitle"],
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _pages_user_id_styles__WEBPACK_IMPORTED_MODULE_4__["buttonGroup"],
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UpdateBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
            post: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeleteBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            post: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = PostList;
/* harmony default export */ __webpack_exports__["default"] = (PostList);

var _c;

$RefreshReg$(_c, "PostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdCIsInBvc3RUeXBlIiwicG9zdCIsImlkIiwicG9zdEJveCIsInBvc3RJbmZvQm94IiwicG9zdFRpdGxlIiwidGl0bGUiLCJidXR0b25Hcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBd0I7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDLFNBQ0UsOEVBQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1ELFFBQU4sY0FBa0JDLElBQUksQ0FBQ0MsRUFBdkIsQ0FBVjtBQUFBLGNBQ0U7QUFBQSxnQkFDRTtBQUFLLFdBQUcsRUFBRUMsNkRBQVY7QUFBQSxtQkFDRTtBQUFLLGFBQUcsRUFBRUMsaUVBQVY7QUFBQSxvQkFDRTtBQUFLLGVBQUcsRUFBRUMsK0RBQVY7QUFBQSxzQkFBc0JKLElBQUksQ0FBQ0s7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJRTtBQUFLLGFBQUcsRUFBRUMsaUVBQVY7QUFBQSxxQkFDRSw4RUFBQyxrREFBRDtBQUFXLGdCQUFJLEVBQUVOO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSw4RUFBQyxrREFBRDtBQUFXLGdCQUFJLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWhCRDs7S0FBTUYsUTtBQWtCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdL3Bvc3QuZTY4YjlmNzRhYTQ5ZjM1ZjVhMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgVXBkYXRlQnRuIGZyb20gJy4vVXBkYXRlQnRuJztcclxuaW1wb3J0IERlbGV0ZUJ0biBmcm9tICcuL0RlbGV0ZUJ0bic7XHJcbmltcG9ydCB7XHJcbiAgYnV0dG9uR3JvdXAsXHJcbiAgcG9zdEJveCxcclxuICBwb3N0SW5mb0JveCxcclxuICBwb3N0VGl0bGUsXHJcbn0gZnJvbSAnLi4vcGFnZXMvdXNlci9baWRdL3N0eWxlcyc7XHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICh7IHBvc3RUeXBlLCBwb3N0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke3Bvc3RUeXBlfS8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgIDxhPlxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0Qm94fT5cclxuICAgICAgICAgIDxkaXYgY3NzPXtwb3N0SW5mb0JveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtwb3N0VGl0bGV9Pntwb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17YnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICA8VXBkYXRlQnRuIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdG4gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9