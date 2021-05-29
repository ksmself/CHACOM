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

  var writtenByMe = (me === null || me === void 0 ? void 0 : me.id) === (singlePost === null || singlePost === void 0 ? void 0 : singlePost.User.id);

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
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_index__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), singlePost && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_7__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
                lineNumber: 75,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
                lineNumber: 90,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 19
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-chevron-left",
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["leftArrow"],
          onClick: goToPrev
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["expressionNum"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [curIndex + 1, " / ", singlePost.Expressions.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["pinyin"],
          children: singlePost.Expressions[curIndex].pinyin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["meaning"],
          children: singlePost.Expressions[curIndex].meaning
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-chevron-right",
          css: _styles__WEBPACK_IMPORTED_MODULE_7__["rightArrow"],
          onClick: goToNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Post, "CQqet5UypNmgJ/Hjpxv607eQ1dA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJzaW5nbGVQb3N0IiwidXNlciIsIm1lIiwid3JpdHRlbkJ5TWUiLCJpZCIsIlVzZXIiLCJ1c2VTdGF0ZSIsImN1ckluZGV4Iiwic2V0Q3VySW5kZXgiLCJnb1RvUHJldiIsInVzZUNhbGxiYWNrIiwiRXhwcmVzc2lvbnMiLCJsZW5ndGgiLCJwcmV2IiwiZ29Ub05leHQiLCJwb3N0VGl0bGUiLCJ0aXRsZSIsImJ1dHRvbkdyb3VwIiwicG9zdEluZm9Cb3giLCJwb3N0SW5mb1dyaXRlciIsIm5pY2tuYW1lIiwicG9zdEluZm9CdWxsZXQiLCJwb3N0SW5mb0RhdGUiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJoYXNodGFnQm94IiwiSGFzaHRhZ3MiLCJtYXAiLCJ0YWciLCJuYW1lIiwiY29udGVudEJveCIsImxlZnRBcnJvdyIsImV4cHJlc3Npb25OdW0iLCJwaW55aW4iLCJtZWFuaW5nIiwicmlnaHRBcnJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFJQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLHFCQUNNQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQURqQjtBQUFBLE1BQ1RDLFVBRFMsZ0JBQ1RBLFVBRFM7O0FBQUEsc0JBRUZILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBRlQ7QUFBQSxNQUVUQyxFQUZTLGlC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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixFQWFFO0FBQ0UsbUJBQVMsRUFBQyxzQkFEWjtBQUVFLGFBQUcsRUFBRUMsa0RBRlA7QUFHRSxpQkFBTyxFQUFFckI7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURGO0FBOERELENBbkZEOztHQUFNbEIsSTtVQUNtQkMsdUQsRUFDUkEsdUQ7OztLQUZYRCxJOztBQTJHU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjk0ZTYxZjUwMWQxN2E3NjAxMjU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7XHJcbiAgcG9zdCxcclxuICBwb3N0VGl0bGUsXHJcbiAgYnV0dG9uR3JvdXAsXHJcbiAgcG9zdEluZm9Cb3gsXHJcbiAgcG9zdEluZm9Xcml0ZXIsXHJcbiAgcG9zdEluZm9CdWxsZXQsXHJcbiAgcG9zdEluZm9EYXRlLFxyXG4gIGhhc2h0YWdCb3gsXHJcbiAgY29udGVudEJveCxcclxuICBsZWZ0QXJyb3csXHJcbiAgcmlnaHRBcnJvdyxcclxuICBleHByZXNzaW9uTnVtLFxyXG4gIHBpbnlpbixcclxuICBtZWFuaW5nLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFVwZGF0ZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VwZGF0ZUJ0bic7XHJcbmltcG9ydCBEZWxldGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZWxldGVCdG4nO1xyXG5pbXBvcnQgTGlrZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpa2VCdG4nO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5kYXlqcy5sb2NhbGUoJ2tvJyk7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHdyaXR0ZW5CeU1lID0gbWU/LmlkID09PSBzaW5nbGVQb3N0Py5Vc2VyLmlkO1xyXG5cclxuICBjb25zdCBbY3VySW5kZXgsIHNldEN1ckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBnb1RvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChzaW5nbGVQb3N0KSB7XHJcbiAgICAgIGlmIChjdXJJbmRleCA9PT0gMCkgc2V0Q3VySW5kZXgoc2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGggLSAxKTtcclxuICAgICAgZWxzZSBzZXRDdXJJbmRleCgocHJldikgPT4gcHJldiAtIDEpO1xyXG4gICAgfVxyXG4gIH0sIFtzaW5nbGVQb3N0LCBjdXJJbmRleF0pO1xyXG5cclxuICBjb25zdCBnb1RvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChzaW5nbGVQb3N0KSB7XHJcbiAgICAgIGlmIChjdXJJbmRleCA9PT0gc2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGggLSAxKSBzZXRDdXJJbmRleCgwKTtcclxuICAgICAgZWxzZSBzZXRDdXJJbmRleCgocHJldikgPT4gcHJldiArIDEpO1xyXG4gICAgfVxyXG4gIH0sIFtzaW5nbGVQb3N0LCBjdXJJbmRleF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICB7c2luZ2xlUG9zdCAmJiAoXHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3R9PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3Bvc3RUaXRsZX0+e3NpbmdsZVBvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICB7d3JpdHRlbkJ5TWUgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17YnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgIDxVcGRhdGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY3NzPXtwb3N0SW5mb0JveH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb1dyaXRlcn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtzaW5nbGVQb3N0Py5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb0J1bGxldH0+wrc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb0RhdGV9PlxyXG4gICAgICAgICAgICAgICAge2RheWpzKHNpbmdsZVBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVnrhYQgTU3sm5QgRETsnbwnKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGlrZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17aGFzaHRhZ0JveH0+XHJcbiAgICAgICAgICAgIHtzaW5nbGVQb3N0Lkhhc2h0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuaWR9IGNvbG9yPVwicHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3RhZy5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnt0YWcubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Y29udGVudEJveH0+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiXHJcbiAgICAgICAgICAgICAgY3NzPXtsZWZ0QXJyb3d9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z29Ub1ByZXZ9XHJcbiAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uTnVtfT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2N1ckluZGV4ICsgMX0gLyB7c2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17cGlueWlufT57c2luZ2xlUG9zdC5FeHByZXNzaW9uc1tjdXJJbmRleF0ucGlueWlufTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17bWVhbmluZ30+e3NpbmdsZVBvc3QuRXhwcmVzc2lvbnNbY3VySW5kZXhdLm1lYW5pbmd9PC9kaXY+XHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIlxyXG4gICAgICAgICAgICAgIGNzcz17cmlnaHRBcnJvd31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtnb1RvTmV4dH1cclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==