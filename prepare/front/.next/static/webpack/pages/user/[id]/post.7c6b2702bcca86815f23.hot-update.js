webpackHotUpdate_N_E("pages/user/[id]/post",{

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
          }, post.id, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8vcG9zdC5qcyJdLCJuYW1lcyI6WyJVc2VyUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0cyIsIlBvc3RzIiwiY29udGVudEJveCIsInRpdGxlIiwiY29sb3IiLCJwb3N0R3JvdXAiLCJtYXAiLCJwb3N0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEscUJBQ05DLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBREw7QUFBQSxNQUNiQyxFQURhLGdCQUNiQSxFQURhOztBQUVyQixNQUFNQyxLQUFLLEdBQUdELEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFRSxLQUFsQjtBQUVBLFNBQ0U7QUFBQSxlQUNFO0FBQUEsZ0JBQ0UsOEVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlFO0FBQUssU0FBRyxFQUFFQyxrREFBVjtBQUFBLGlCQUNFO0FBQUssV0FBRyxFQUFFQyw2Q0FBVjtBQUFBLG1CQUNFLDhFQUFDLDhEQUFEO0FBQWMsZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFLRTtBQUFLLFdBQUcsRUFBRUMsaURBQVY7QUFBQSxrQkFDR0wsS0FBSyxJQUNKQSxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbEIsaUJBQ0UsOEVBQUMsNkRBQUQ7QUFBd0Isb0JBQVEsRUFBQyxNQUFqQztBQUF3QyxnQkFBSSxFQUFFQTtBQUE5QyxhQUFlQSxJQUFJLENBQUNDLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRGO0FBZ0JELFNBakJEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFrQ0QsQ0F0Q0Q7O0dBQU1iLFE7VUFDV0MsdUQ7OztLQURYRCxRO0FBd0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL1tpZF0vcG9zdC43YzZiMjcwMmJjY2E4NjgxNWYyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7IGNvbnRlbnRCb3gsIHBvc3RCb3gsIHBvc3RHcm91cCwgdGl0bGUgfSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBVcGRhdGVCdG4gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9VcGRhdGVCdG4nO1xyXG5pbXBvcnQgRGVsZXRlQnRuIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRGVsZXRlQnRuJztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUG9zdExpc3QnO1xyXG5cclxuY29uc3QgVXNlclBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBwb3N0cyA9IG1lPy5Qb3N0cztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjc3M9e2NvbnRlbnRCb3h9PlxyXG4gICAgICAgIDxkaXYgY3NzPXt0aXRsZX0+XHJcbiAgICAgICAgICA8Rm9ybU91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzFENzhGRicgfX0gLz5cclxuICAgICAgICAgIDxzcGFuPuuCtOqwgCDsk7Qg6riAPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0R3JvdXB9PlxyXG4gICAgICAgICAge3Bvc3RzICYmXHJcbiAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UG9zdExpc3Qga2V5PXtwb3N0LmlkfSBwb3N0VHlwZT1cInBvc3RcIiBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgLy8gPExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5pZH1gfT5cclxuICAgICAgICAgICAgICAgIC8vICAgPGE+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgPGRpdiBjc3M9e3Bvc3RCb3h9PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdj57cG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgPFVwZGF0ZUJ0biBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICA8RGVsZXRlQnRuIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIC8vICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgLy8gPC9MaW5rPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==