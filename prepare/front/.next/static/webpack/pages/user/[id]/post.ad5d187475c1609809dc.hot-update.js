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
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UpdateBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
            post: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeleteBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
            post: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdCIsInBvc3RUeXBlIiwicG9zdCIsImlkIiwicG9zdEJveCIsInBvc3RJbmZvQm94IiwicG9zdFRpdGxlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXdCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN2QyxTQUNFLDhFQUFDLGdEQUFEO0FBQU0sUUFBSSxhQUFNRCxRQUFOLGNBQWtCQyxJQUFJLENBQUNDLEVBQXZCLENBQVY7QUFBQSxjQUNFO0FBQUEsZ0JBQ0U7QUFBSyxXQUFHLEVBQUVDLDZEQUFWO0FBQUEsbUJBQ0U7QUFBSyxhQUFHLEVBQUVDLGlFQUFWO0FBQUEsb0JBQ0U7QUFBSyxlQUFHLEVBQUVDLCtEQUFWO0FBQUEsc0JBQXNCSixJQUFJLENBQUNLO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUU7QUFBQSxxQkFDRSw4RUFBQyxrREFBRDtBQUFXLGdCQUFJLEVBQUVMO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRSw4RUFBQyxrREFBRDtBQUFXLGdCQUFJLEVBQUVBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWhCRDs7S0FBTUYsUTtBQWtCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdL3Bvc3QuYWQ1ZDE4NzQ3NWMxNjA5ODA5ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgVXBkYXRlQnRuIGZyb20gJy4vVXBkYXRlQnRuJztcclxuaW1wb3J0IERlbGV0ZUJ0biBmcm9tICcuL0RlbGV0ZUJ0bic7XHJcbmltcG9ydCB7IHBvc3RCb3gsIHBvc3RJbmZvQm94LCBwb3N0VGl0bGUgfSBmcm9tICcuLi9wYWdlcy91c2VyL1tpZF0vc3R5bGVzJztcclxuXHJcbmNvbnN0IFBvc3RMaXN0ID0gKHsgcG9zdFR5cGUsIHBvc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7cG9zdFR5cGV9LyR7cG9zdC5pZH1gfT5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3RCb3h9PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3Bvc3RJbmZvQm94fT5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e3Bvc3RUaXRsZX0+e3Bvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxVcGRhdGVCdG4gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgPERlbGV0ZUJ0biBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=