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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Boolean((me === null || me === void 0 ? void 0 : me.nickname) === (singlePost === null || singlePost === void 0 ? void 0 : singlePost.User.nickname))),
      writtenByMe = _useState[0],
      setWrittenByMe = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      curIndex = _useState2[0],
      setCurIndex = _useState2[1];

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
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), singlePost && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_7__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
                lineNumber: 82,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
                lineNumber: 97,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-chevron-left",
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["leftArrow"],
          onClick: goToPrev
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["expressionNum"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [curIndex + 1, " / ", singlePost.Expressions.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["pinyin"],
          children: singlePost.Expressions[curIndex].pinyin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["meaning"],
          children: singlePost.Expressions[curIndex].meaning
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-chevron-right",
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["rightArrow"],
          onClick: goToNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Post, "CPxyYQB1CfED0nPgvk5A0IikSaQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJzaW5nbGVQb3N0IiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJCb29sZWFuIiwibmlja25hbWUiLCJVc2VyIiwid3JpdHRlbkJ5TWUiLCJzZXRXcml0dGVuQnlNZSIsImN1ckluZGV4Iiwic2V0Q3VySW5kZXgiLCJnb1RvUHJldiIsInVzZUNhbGxiYWNrIiwiRXhwcmVzc2lvbnMiLCJsZW5ndGgiLCJwcmV2IiwiZ29Ub05leHQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicG9zdFRpdGxlIiwidGl0bGUiLCJidXR0b25Hcm91cCIsInBvc3RJbmZvQm94IiwicG9zdEluZm9Xcml0ZXIiLCJpZCIsInBvc3RJbmZvQnVsbGV0IiwicG9zdEluZm9EYXRlIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiaGFzaHRhZ0JveCIsIkhhc2h0YWdzIiwibWFwIiwidGFnIiwibmFtZSIsImNvbnRlbnRCb3giLCJsZWZ0QXJyb3ciLCJleHByZXNzaW9uTnVtIiwicGlueWluIiwibWVhbmluZyIsInJpZ2h0QXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBSUFBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxxQkFDTUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEakI7QUFBQSxNQUNUQyxVQURTLGdCQUNUQSxVQURTOztBQUFBLHNCQUVGSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxX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QUE7QUFBQSxpQkFORixFQVdFO0FBQUssYUFBRyxFQUFFd0IsOENBQVY7QUFBQSxvQkFBbUJ0QyxVQUFVLENBQUNhLFdBQVgsQ0FBdUJKLFFBQXZCLEVBQWlDNkI7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixFQVlFO0FBQUssYUFBRyxFQUFFQywrQ0FBVjtBQUFBLG9CQUFvQnZDLFVBQVUsQ0FBQ2EsV0FBWCxDQUF1QkosUUFBdkIsRUFBaUM4QjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLEVBYUU7QUFDRSxtQkFBUyxFQUFDLHNCQURaO0FBRUUsYUFBRyxFQUFFQyxrREFGUDtBQUdFLGlCQUFPLEVBQUV4QjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUEsa0JBREY7QUE4REQsQ0ExRkQ7O0dBQU1wQixJO1VBQ21CQyx1RCxFQUNSQSx1RDs7O0tBRlhELEk7O0FBa0hTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uMjk0NWIxOGExMTZmMWRiOWFkNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9pbmRleCc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHtcclxuICBwb3N0LFxyXG4gIHBvc3RUaXRsZSxcclxuICBidXR0b25Hcm91cCxcclxuICBwb3N0SW5mb0JveCxcclxuICBwb3N0SW5mb1dyaXRlcixcclxuICBwb3N0SW5mb0J1bGxldCxcclxuICBwb3N0SW5mb0RhdGUsXHJcbiAgaGFzaHRhZ0JveCxcclxuICBjb250ZW50Qm94LFxyXG4gIGxlZnRBcnJvdyxcclxuICByaWdodEFycm93LFxyXG4gIGV4cHJlc3Npb25OdW0sXHJcbiAgcGlueWluLFxyXG4gIG1lYW5pbmcsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgVXBkYXRlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXBkYXRlQnRuJztcclxuaW1wb3J0IERlbGV0ZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RlbGV0ZUJ0bic7XHJcbmltcG9ydCBMaWtlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlrZUJ0bic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmRheWpzLmxvY2FsZSgna28nKTtcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzaW5nbGVQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFt3cml0dGVuQnlNZSwgc2V0V3JpdHRlbkJ5TWVdID0gdXNlU3RhdGUoXHJcbiAgICBCb29sZWFuKG1lPy5uaWNrbmFtZSA9PT0gc2luZ2xlUG9zdD8uVXNlci5uaWNrbmFtZSlcclxuICApO1xyXG5cclxuICBjb25zdCBbY3VySW5kZXgsIHNldEN1ckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBnb1RvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChzaW5nbGVQb3N0KSB7XHJcbiAgICAgIGlmIChjdXJJbmRleCA9PT0gMCkgc2V0Q3VySW5kZXgoc2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGggLSAxKTtcclxuICAgICAgZWxzZSBzZXRDdXJJbmRleCgocHJldikgPT4gcHJldiAtIDEpO1xyXG4gICAgfVxyXG4gIH0sIFtzaW5nbGVQb3N0LCBjdXJJbmRleF0pO1xyXG5cclxuICBjb25zdCBnb1RvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChzaW5nbGVQb3N0KSB7XHJcbiAgICAgIGlmIChjdXJJbmRleCA9PT0gc2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGggLSAxKSBzZXRDdXJJbmRleCgwKTtcclxuICAgICAgZWxzZSBzZXRDdXJJbmRleCgocHJldikgPT4gcHJldiArIDEpO1xyXG4gICAgfVxyXG4gIH0sIFtzaW5nbGVQb3N0LCBjdXJJbmRleF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cod3JpdHRlbkJ5TWUpO1xyXG4gIH0sIFt3cml0dGVuQnlNZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICB7c2luZ2xlUG9zdCAmJiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3R9PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3Bvc3RUaXRsZX0+e3NpbmdsZVBvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICB7d3JpdHRlbkJ5TWUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17YnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgIDxVcGRhdGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY3NzPXtwb3N0SW5mb0JveH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb1dyaXRlcn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtzaW5nbGVQb3N0Py5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb0J1bGxldH0+wrc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb0RhdGV9PlxyXG4gICAgICAgICAgICAgICAge2RheWpzKHNpbmdsZVBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVnrhYQgTU3sm5QgRETsnbwnKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGlrZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17aGFzaHRhZ0JveH0+XHJcbiAgICAgICAgICAgIHtzaW5nbGVQb3N0Lkhhc2h0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuaWR9IGNvbG9yPVwicHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3RhZy5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWcubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Y29udGVudEJveH0+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgY3NzPXtsZWZ0QXJyb3d9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z29Ub1ByZXZ9XHJcbiAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uTnVtfT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2N1ckluZGV4ICsgMX0gLyB7c2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17cGlueWlufT57c2luZ2xlUG9zdC5FeHByZXNzaW9uc1tjdXJJbmRleF0ucGlueWlufTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17bWVhbmluZ30+e3NpbmdsZVBvc3QuRXhwcmVzc2lvbnNbY3VySW5kZXhdLm1lYW5pbmd9PC9kaXY+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgIGNzcz17cmlnaHRBcnJvd31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtnb1RvTmV4dH1cclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==