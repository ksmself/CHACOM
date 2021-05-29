webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header/index */ "./components/Header/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./pages/post/styles.js");
/* harmony import */ var _components_UpdateBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UpdateBtn */ "./components/UpdateBtn.js");
/* harmony import */ var _components_DeleteBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/DeleteBtn */ "./components/DeleteBtn.js");
/* harmony import */ var _components_LikeBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/LikeBtn */ "./components/LikeBtn.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\post\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */










dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.locale('ko');

var Post = function Post() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var writtenByMe = (me === null || me === void 0 ? void 0 : me.id) === (singlePost === null || singlePost === void 0 ? void 0 : singlePost.User.id); // const [writtenByMe, setWrittenByMe] = useState(
  //   Boolean(me?.id === singlePost?.User.id)
  // );

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      curIndex = _useState[0],
      setCurIndex = _useState[1];

  var goToPrev = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (singlePost) {
      if (curIndex === 0) setCurIndex(singlePost.Expressions.length - 1);else setCurIndex(function (prev) {
        return prev - 1;
      });
    }
  }, [singlePost, curIndex]);
  var goToNext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (singlePost) {
      if (curIndex === singlePost.Expressions.length - 1) setCurIndex(0);else setCurIndex(function (prev) {
        return prev + 1;
      });
    }
  }, [singlePost, curIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(writtenByMe);
  }, [writtenByMe]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_index__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), singlePost && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_7__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoWriter"],
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/user/".concat(singlePost === null || singlePost === void 0 ? void 0 : singlePost.User.id),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: singlePost.User.nickname
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["hashtagBox"],
        children: singlePost.Hashtags.map(function (tag) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
            color: "purple",
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: "/hashtag/".concat(tag.name),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: tag.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-chevron-left",
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["leftArrow"],
          onClick: goToPrev
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["expressionNum"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [curIndex + 1, " / ", singlePost.Expressions.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["pinyin"],
          children: singlePost.Expressions[curIndex].pinyin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["meaning"],
          children: singlePost.Expressions[curIndex].meaning
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-chevron-right",
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["rightArrow"],
          onClick: goToNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Post, "6tlWocr69fiEracj/doxS5XAtMw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Post;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJzaW5nbGVQb3N0IiwidXNlciIsIm1lIiwid3JpdHRlbkJ5TWUiLCJpZCIsIlVzZXIiLCJ1c2VTdGF0ZSIsImN1ckluZGV4Iiwic2V0Q3VySW5kZXgiLCJnb1RvUHJldiIsInVzZUNhbGxiYWNrIiwiRXhwcmVzc2lvbnMiLCJsZW5ndGgiLCJwcmV2IiwiZ29Ub05leHQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicG9zdFRpdGxlIiwidGl0bGUiLCJidXR0b25Hcm91cCIsInBvc3RJbmZvQm94IiwicG9zdEluZm9Xcml0ZXIiLCJuaWNrbmFtZSIsInBvc3RJbmZvQnVsbGV0IiwicG9zdEluZm9EYXRlIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiaGFzaHRhZ0JveCIsIkhhc2h0YWdzIiwibWFwIiwidGFnIiwibmFtZSIsImNvbnRlbnRCb3giLCJsZWZ0QXJyb3ciLCJleHByZXNzaW9uTnVtIiwicGlueWluIiwibWVhbmluZyIsInJpZ2h0QXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBSUFBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxxQkFDTUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEakI7QUFBQSxNQUNUQyxVQURTLGdCQUNUQSxVQURTOztBQUFBLHNCQUVGSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEs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Q1csV0FBWCxDQUF1QkosUUFBdkIsRUFBaUM2QjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLEVBWUU7QUFBSyxhQUFHLEVBQUVDLCtDQUFWO0FBQUEsb0JBQW9CckMsVUFBVSxDQUFDVyxXQUFYLENBQXVCSixRQUF2QixFQUFpQzhCO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsRUFhRTtBQUNFLG1CQUFTLEVBQUMsc0JBRFo7QUFFRSxhQUFHLEVBQUVDLGtEQUZQO0FBR0UsaUJBQU8sRUFBRXhCO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFERjtBQThERCxDQTNGRDs7R0FBTWxCLEk7VUFDbUJDLHVELEVBQ1JBLHVEOzs7S0FGWEQsSTs7QUFtSFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS4xYjA4NDgxOTBjY2M5ZDhlODEzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4JztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQge1xyXG4gIHBvc3QsXHJcbiAgcG9zdFRpdGxlLFxyXG4gIGJ1dHRvbkdyb3VwLFxyXG4gIHBvc3RJbmZvQm94LFxyXG4gIHBvc3RJbmZvV3JpdGVyLFxyXG4gIHBvc3RJbmZvQnVsbGV0LFxyXG4gIHBvc3RJbmZvRGF0ZSxcclxuICBoYXNodGFnQm94LFxyXG4gIGNvbnRlbnRCb3gsXHJcbiAgbGVmdEFycm93LFxyXG4gIHJpZ2h0QXJyb3csXHJcbiAgZXhwcmVzc2lvbk51bSxcclxuICBwaW55aW4sXHJcbiAgbWVhbmluZyxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBVcGRhdGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VcGRhdGVCdG4nO1xyXG5pbXBvcnQgRGVsZXRlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGVsZXRlQnRuJztcclxuaW1wb3J0IExpa2VCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaWtlQnRuJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZGF5anMubG9jYWxlKCdrbycpO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCB7IHNpbmdsZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB3cml0dGVuQnlNZSA9IG1lPy5pZCA9PT0gc2luZ2xlUG9zdD8uVXNlci5pZDtcclxuXHJcbiAgLy8gY29uc3QgW3dyaXR0ZW5CeU1lLCBzZXRXcml0dGVuQnlNZV0gPSB1c2VTdGF0ZShcclxuICAvLyAgIEJvb2xlYW4obWU/LmlkID09PSBzaW5nbGVQb3N0Py5Vc2VyLmlkKVxyXG4gIC8vICk7XHJcblxyXG4gIGNvbnN0IFtjdXJJbmRleCwgc2V0Q3VySW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGdvVG9QcmV2ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHNpbmdsZVBvc3QpIHtcclxuICAgICAgaWYgKGN1ckluZGV4ID09PSAwKSBzZXRDdXJJbmRleChzaW5nbGVQb3N0LkV4cHJlc3Npb25zLmxlbmd0aCAtIDEpO1xyXG4gICAgICBlbHNlIHNldEN1ckluZGV4KChwcmV2KSA9PiBwcmV2IC0gMSk7XHJcbiAgICB9XHJcbiAgfSwgW3NpbmdsZVBvc3QsIGN1ckluZGV4XSk7XHJcblxyXG4gIGNvbnN0IGdvVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHNpbmdsZVBvc3QpIHtcclxuICAgICAgaWYgKGN1ckluZGV4ID09PSBzaW5nbGVQb3N0LkV4cHJlc3Npb25zLmxlbmd0aCAtIDEpIHNldEN1ckluZGV4KDApO1xyXG4gICAgICBlbHNlIHNldEN1ckluZGV4KChwcmV2KSA9PiBwcmV2ICsgMSk7XHJcbiAgICB9XHJcbiAgfSwgW3NpbmdsZVBvc3QsIGN1ckluZGV4XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh3cml0dGVuQnlNZSk7XHJcbiAgfSwgW3dyaXR0ZW5CeU1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHtzaW5nbGVQb3N0ICYmIChcclxuICAgICAgICA8ZGl2IGNzcz17cG9zdH0+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17cG9zdFRpdGxlfT57c2luZ2xlUG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgIHt3cml0dGVuQnlNZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtidXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgPFVwZGF0ZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjc3M9e3Bvc3RJbmZvQm94fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvV3JpdGVyfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3NpbmdsZVBvc3Q/LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntzaW5nbGVQb3N0LlVzZXIubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvQnVsbGV0fT7Ctzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvRGF0ZX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF5anMoc2luZ2xlUG9zdC5jcmVhdGVkQXQpLmZvcm1hdCgnWVlZWeuFhCBNTeyblCBEROydvCcpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaWtlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY3NzPXtoYXNodGFnQm94fT5cclxuICAgICAgICAgICAge3NpbmdsZVBvc3QuSGFzaHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRhZyBrZXk9e3RhZy5pZH0gY29sb3I9XCJwdXJwbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9oYXNodGFnLyR7dGFnLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3RhZy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY3NzPXtjb250ZW50Qm94fT5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCJcclxuICAgICAgICAgICAgICBjc3M9e2xlZnRBcnJvd31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtnb1RvUHJldn1cclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25OdW19PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y3VySW5kZXggKyAxfSAvIHtzaW5nbGVQb3N0LkV4cHJlc3Npb25zLmxlbmd0aH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW59PntzaW5nbGVQb3N0LkV4cHJlc3Npb25zW2N1ckluZGV4XS5waW55aW59PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXttZWFuaW5nfT57c2luZ2xlUG9zdC5FeHByZXNzaW9uc1tjdXJJbmRleF0ubWVhbmluZ308L2Rpdj5cclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiXHJcbiAgICAgICAgICAgICAgY3NzPXtyaWdodEFycm93fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9OZXh0fVxyXG4gICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxyXG4gIGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9