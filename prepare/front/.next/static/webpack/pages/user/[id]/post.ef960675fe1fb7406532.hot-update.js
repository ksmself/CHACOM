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
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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

/***/ }),

/***/ "./pages/user/[id]/post.js":
/*!*********************************!*\
  !*** ./pages/user/[id]/post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Header */ "./components/Header/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./pages/user/[id]/styles.js");
/* harmony import */ var _components_UpdateBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UpdateBtn */ "./components/UpdateBtn.js");
/* harmony import */ var _components_DeleteBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/DeleteBtn */ "./components/DeleteBtn.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/PostList */ "./components/PostList.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\user\\[id]\\post.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */











var UserPost = function UserPost() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var posts = me === null || me === void 0 ? void 0 : me.Posts;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_7__["contentBox"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["title"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutlined"], {
          style: {
            color: '#1D78FF'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\uB0B4\uAC00 \uC4F4 \uAE00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["postGroup"],
        children: posts && posts.map(function (post) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostList__WEBPACK_IMPORTED_MODULE_10__["default"], {
            postType: "post",
            post: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, _this) // <Link href={`/post/${post.id}`}>
          //   <a>
          //     <div css={postBox}>
          //       <div>
          //         <div>{post.title}</div>
          //       </div>
          //       <div>
          //         <UpdateBtn post={post} />
          //         <DeleteBtn post={post} />
          //       </div>
          //     </div>
          //   </a>
          // </Link>
          ;
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(UserPost, "9V1uf3383/tS6kXOMMR8c8sBgP4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = UserPost;
/* harmony default export */ __webpack_exports__["default"] = (UserPost);

var _c;

$RefreshReg$(_c, "UserPost");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8vcG9zdC5qcyJdLCJuYW1lcyI6WyJQb3N0TGlzdCIsInBvc3RUeXBlIiwicG9zdCIsImlkIiwicG9zdEJveCIsInRpdGxlIiwiVXNlclBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdHMiLCJQb3N0cyIsImNvbnRlbnRCb3giLCJjb2xvciIsInBvc3RHcm91cCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBd0I7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDLFNBQ0UsOEVBQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1ELFFBQU4sY0FBa0JDLElBQUksQ0FBQ0MsRUFBdkIsQ0FBVjtBQUFBLGNBQ0U7QUFBQSxnQkFDRTtBQUFLLFdBQUcsRUFBRUMsNkRBQVY7QUFBQSxtQkFDRTtBQUFBLG9CQUNFO0FBQUEsc0JBQU1GLElBQUksQ0FBQ0c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlFO0FBQUEscUJBQ0UsOEVBQUMsa0RBQUQ7QUFBVyxnQkFBSSxFQUFFSDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsOEVBQUMsa0RBQUQ7QUFBVyxnQkFBSSxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FoQkQ7O0tBQU1GLFE7QUFrQlNBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxxQkFDTkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FETDtBQUFBLE1BQ2JDLEVBRGEsZ0JBQ2JBLEVBRGE7O0FBRXJCLE1BQU1DLEtBQUssR0FBR0QsRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVFLEtBQWxCO0FBRUEsU0FDRTtBQUFBLGVBQ0U7QUFBQSxnQkFDRSw4RUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUU7QUFBSyxTQUFHLEVBQUVDLGtEQUFWO0FBQUEsaUJBQ0U7QUFBSyxXQUFHLEVBQUVSLDZDQUFWO0FBQUEsbUJBQ0UsOEVBQUMsOERBQUQ7QUFBYyxlQUFLLEVBQUU7QUFBRVMsaUJBQUssRUFBRTtBQUFUO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUtFO0FBQUssV0FBRyxFQUFFQyxpREFBVjtBQUFBLGtCQUNHSixLQUFLLElBQ0pBLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNkLElBQUQsRUFBVTtBQUNsQixpQkFDRSw4RUFBQyw2REFBRDtBQUFVLG9CQUFRLEVBQUMsTUFBbkI7QUFBMEIsZ0JBQUksRUFBRUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEY7QUFnQkQsU0FqQkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQWtDRCxDQXRDRDs7R0FBTUksUTtVQUNXQyx1RDs7O0tBRFhELFE7QUF3Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvW2lkXS9wb3N0LmVmOTYwNjc1ZmUxZmI3NDA2NTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFVwZGF0ZUJ0biBmcm9tICcuL1VwZGF0ZUJ0bic7XHJcbmltcG9ydCBEZWxldGVCdG4gZnJvbSAnLi9EZWxldGVCdG4nO1xyXG5pbXBvcnQgeyBwb3N0Qm94IH0gZnJvbSAnLi4vcGFnZXMvdXNlci9baWRdL3N0eWxlcyc7XHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICh7IHBvc3RUeXBlLCBwb3N0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke3Bvc3RUeXBlfS8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgIDxhPlxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0Qm94fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Bvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxVcGRhdGVCdG4gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgPERlbGV0ZUJ0biBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBjb250ZW50Qm94LCBwb3N0Qm94LCBwb3N0R3JvdXAsIHRpdGxlIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgVXBkYXRlQnRuIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVXBkYXRlQnRuJztcclxuaW1wb3J0IERlbGV0ZUJ0biBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RlbGV0ZUJ0bic7XHJcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1Bvc3RMaXN0JztcclxuXHJcbmNvbnN0IFVzZXJQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgcG9zdHMgPSBtZT8uUG9zdHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY3NzPXtjb250ZW50Qm94fT5cclxuICAgICAgICA8ZGl2IGNzcz17dGl0bGV9PlxyXG4gICAgICAgICAgPEZvcm1PdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMxRDc4RkYnIH19IC8+XHJcbiAgICAgICAgICA8c3Bhbj7rgrTqsIAg7JO0IOq4gDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNzcz17cG9zdEdyb3VwfT5cclxuICAgICAgICAgIHtwb3N0cyAmJlxyXG4gICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFBvc3RMaXN0IHBvc3RUeXBlPVwicG9zdFwiIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAvLyA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgLy8gICA8YT5cclxuICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNzcz17cG9zdEJveH0+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2Pntwb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8VXBkYXRlQnRuIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxEZWxldGVCdG4gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICA8L2E+XHJcbiAgICAgICAgICAgICAgICAvLyA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9