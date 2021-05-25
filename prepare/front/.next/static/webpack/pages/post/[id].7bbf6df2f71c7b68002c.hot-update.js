webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Header/index */ "./components/Header/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./pages/post/styles.js");
/* harmony import */ var _components_UpdateBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/UpdateBtn */ "./components/UpdateBtn.js");
/* harmony import */ var _components_DeleteBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/DeleteBtn */ "./components/DeleteBtn.js");
/* harmony import */ var _components_LikeBtn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/LikeBtn */ "./components/LikeBtn.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\post\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */













dayjs__WEBPACK_IMPORTED_MODULE_6___default.a.locale('ko');

var Post = function Post() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // const { singlePost } = useSelector((state) => state.post);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  var singlePost = {
    id: 1,
    title: '(-가 -하다) 왕초보편',
    createdAt: '2021-05-20 08:18:40',
    User: {
      id: 3,
      nickname: 'admin1'
    },
    Expressions: [{
      pinyin: 'Nǐ qù ma?',
      meaning: '당신은 갑니까?'
    }, {
      pinyin: 'Nǐ lái ma?',
      meaning: '당신은 옵니까?'
    }, {
      pinyin: 'Nǐ kàn ma?',
      meaning: '당신은 봅니까?'
    }, {
      pinyin: 'Nǐ chī ròu ma?',
      meaning: '당신은 고기를 먹습니까?'
    }, {
      pinyin: 'Nǐ dǒng ma?',
      meaning: '당신은 이해가 됩니까?'
    }],
    Hashtags: [{
      id: 1,
      name: '왕초보'
    }, {
      id: 2,
      name: '테스트'
    }, {
      id: 3,
      name: '반시밀당반시상'
    } // { id: 4, name: '드라마' },
    // { id: 5, name: '실생활표현' },
    // { id: 6, name: '일상회화' },
    // { id: 7, name: '어서사오작' },
    // { id: 8, name: '전문중적진천천' },
    // { id: 9, name: '나의아름다웠던그대에게' },
    ],
    Comments: {},
    Likers: {}
  };
  var writtenByMe = (me === null || me === void 0 ? void 0 : me.nickname) === singlePost.User.nickname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      curIndex = _useState[0],
      setCurIndex = _useState[1];

  var goToPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {}, []);
  var goToNext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {}, []); // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //     data: id,
  //   });
  // }, []);

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_index__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_10__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["postInfoBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_10__["postInfoWriter"],
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/user/".concat(singlePost.User.id),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: singlePost.User.nickname
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_10__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_10__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_13__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["hashtagBox"],
        children: singlePost.Hashtags.map(function (tag) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
            color: "purple",
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/hashtag/".concat(tag.name),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: tag.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LeftCircleFilled"], {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["leftArrow"],
          onClick: goToPrev
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["expressionNum"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [curIndex + 1, " / ", singlePost.Expressions.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["pinyin"],
          children: singlePost.Expressions[curIndex].pinyin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["meaning"],
          children: singlePost.Expressions[curIndex].meaning
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["RightCircleFilled"], {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["rightArrow"],
          onClick: goToNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Post, "dUlG5/uBNKjRqbU0fg9ZH7IAHm0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic2luZ2xlUG9zdCIsInRpdGxlIiwiY3JlYXRlZEF0IiwiVXNlciIsIm5pY2tuYW1lIiwiRXhwcmVzc2lvbnMiLCJwaW55aW4iLCJtZWFuaW5nIiwiSGFzaHRhZ3MiLCJuYW1lIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJ3cml0dGVuQnlNZSIsInVzZVN0YXRlIiwiY3VySW5kZXgiLCJzZXRDdXJJbmRleCIsImdvVG9QcmV2IiwidXNlQ2FsbGJhY2siLCJnb1RvTmV4dCIsInBvc3QiLCJwb3N0VGl0bGUiLCJidXR0b25Hcm91cCIsInBvc3RJbmZvQm94IiwicG9zdEluZm9Xcml0ZXIiLCJwb3N0SW5mb0J1bGxldCIsInBvc3RJbmZvRGF0ZSIsImZvcm1hdCIsImhhc2h0YWdCb3giLCJtYXAiLCJ0YWciLCJjb250ZW50Qm94IiwibGVmdEFycm93IiwiZXhwcmVzc2lvbk51bSIsImxlbmd0aCIsInJpZ2h0QXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBRUFBLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQURpQixDQUVqQjs7QUFGaUIscUJBR0ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxH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QTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFLLGFBQUcsRUFBRWdCLHNEQUFWO0FBQUEsb0JBQ0U7QUFBQSx1QkFDR2xCLFFBQVEsR0FBRyxDQURkLFNBQ29CZCxVQUFVLENBQUNLLFdBQVgsQ0FBdUI0QixNQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBT0U7QUFBSyxhQUFHLEVBQUUzQiwrQ0FBVjtBQUFBLG9CQUFtQk4sVUFBVSxDQUFDSyxXQUFYLENBQXVCUyxRQUF2QixFQUFpQ1I7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVFFO0FBQUssYUFBRyxFQUFFQyxnREFBVjtBQUFBLG9CQUFvQlAsVUFBVSxDQUFDSyxXQUFYLENBQXVCUyxRQUF2QixFQUFpQ1A7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixFQVNFLDhFQUFDLG1FQUFEO0FBQW1CLGFBQUcsRUFBRTJCLG1EQUF4QjtBQUFvQyxpQkFBTyxFQUFFaEI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQW9ERCxDQXpHRDs7R0FBTTdCLEk7VUFDYUUsdUQsRUFFRkMsdUQsRUFFQUsscUQ7OztLQUxYUixJO0FBMkdTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uN2JiZjZkZjJmNzFjN2I2ODAwMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IExlZnRDaXJjbGVGaWxsZWQsIFJpZ2h0Q2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9pbmRleCc7XHJcbmltcG9ydCB7IExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7XHJcbiAgcG9zdCxcclxuICBwb3N0VGl0bGUsXHJcbiAgYnV0dG9uR3JvdXAsXHJcbiAgcG9zdEluZm9Cb3gsXHJcbiAgcG9zdEluZm9Xcml0ZXIsXHJcbiAgcG9zdEluZm9CdWxsZXQsXHJcbiAgcG9zdEluZm9EYXRlLFxyXG4gIGhhc2h0YWdCb3gsXHJcbiAgY29udGVudEJveCxcclxuICBsZWZ0QXJyb3csXHJcbiAgcmlnaHRBcnJvdyxcclxuICBleHByZXNzaW9uTnVtLFxyXG4gIHBpbnlpbixcclxuICBtZWFuaW5nLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFVwZGF0ZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VwZGF0ZUJ0bic7XHJcbmltcG9ydCBEZWxldGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZWxldGVCdG4nO1xyXG5pbXBvcnQgTGlrZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpa2VCdG4nO1xyXG5cclxuZGF5anMubG9jYWxlKCdrbycpO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgLy8gY29uc3QgeyBzaW5nbGVQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3Qgc2luZ2xlUG9zdCA9IHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICcoLeqwgCAt7ZWY64ukKSDsmZXstIjrs7TtjrgnLFxyXG4gICAgY3JlYXRlZEF0OiAnMjAyMS0wNS0yMCAwODoxODo0MCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBuaWNrbmFtZTogJ2FkbWluMScsXHJcbiAgICB9LFxyXG4gICAgRXhwcmVzc2lvbnM6IFtcclxuICAgICAgeyBwaW55aW46ICdOx5AgccO5IG1hPycsIG1lYW5pbmc6ICfri7nsi6DsnYAg6rCR64uI6rmMPycgfSxcclxuICAgICAgeyBwaW55aW46ICdOx5AgbMOhaSBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOyYteuLiOq5jD8nIH0sXHJcbiAgICAgIHsgcGlueWluOiAnTseQIGvDoG4gbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDrtIXri4jquYw/JyB9LFxyXG4gICAgICB7IHBpbnlpbjogJ07HkCBjaMSrIHLDsnUgbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDqs6DquLDrpbwg66i57Iq164uI6rmMPycgfSxcclxuICAgICAgeyBwaW55aW46ICdOx5AgZMeSbmcgbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDsnbTtlbTqsIAg65Cp64uI6rmMPycgfSxcclxuICAgIF0sXHJcbiAgICBIYXNodGFnczogW1xyXG4gICAgICB7IGlkOiAxLCBuYW1lOiAn7JmV7LSI67O0JyB9LFxyXG4gICAgICB7IGlkOiAyLCBuYW1lOiAn7YWM7Iqk7Yq4JyB9LFxyXG4gICAgICB7IGlkOiAzLCBuYW1lOiAn67CY7Iuc67CA64u567CY7Iuc7IOBJyB9LFxyXG4gICAgICAvLyB7IGlkOiA0LCBuYW1lOiAn65Oc652866eIJyB9LFxyXG4gICAgICAvLyB7IGlkOiA1LCBuYW1lOiAn7Iuk7IOd7Zmc7ZGc7ZiEJyB9LFxyXG4gICAgICAvLyB7IGlkOiA2LCBuYW1lOiAn7J287IOB7ZqM7ZmUJyB9LFxyXG4gICAgICAvLyB7IGlkOiA3LCBuYW1lOiAn7Ja07ISc7IKs7Jik7J6RJyB9LFxyXG4gICAgICAvLyB7IGlkOiA4LCBuYW1lOiAn7KCE66y47KSR7KCB7KeE7LKc7LKcJyB9LFxyXG4gICAgICAvLyB7IGlkOiA5LCBuYW1lOiAn64KY7J2Y7JWE66aE64uk7Jug642Y6re464yA7JeQ6rKMJyB9LFxyXG4gICAgXSxcclxuICAgIENvbW1lbnRzOiB7fSxcclxuICAgIExpa2Vyczoge30sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd3JpdHRlbkJ5TWUgPSBtZT8ubmlja25hbWUgPT09IHNpbmdsZVBvc3QuVXNlci5uaWNrbmFtZTtcclxuXHJcbiAgY29uc3QgW2N1ckluZGV4LCBzZXRDdXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZ29Ub1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pO1xyXG5cclxuICBjb25zdCBnb1RvTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gIC8vICAgICBkYXRhOiBpZCxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjc3M9e3Bvc3R9PlxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0VGl0bGV9PntzaW5nbGVQb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIHt3cml0dGVuQnlNZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNzcz17YnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICA8VXBkYXRlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3RJbmZvQm94fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9Xcml0ZXJ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3NpbmdsZVBvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntzaW5nbGVQb3N0LlVzZXIubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvQnVsbGV0fT7Ctzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb0RhdGV9PlxyXG4gICAgICAgICAgICAgIHtkYXlqcyhzaW5nbGVQb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZ64WEIE1N7JuUIERE7J28Jyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExpa2VCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNzcz17aGFzaHRhZ0JveH0+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5IYXNodGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuaWR9IGNvbG9yPVwicHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt0YWcubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3RhZy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtjb250ZW50Qm94fT5cclxuICAgICAgICAgIDxMZWZ0Q2lyY2xlRmlsbGVkIGNzcz17bGVmdEFycm93fSBvbkNsaWNrPXtnb1RvUHJldn0gLz5cclxuICAgICAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uTnVtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7Y3VySW5kZXggKyAxfSAvIHtzaW5nbGVQb3N0LkV4cHJlc3Npb25zLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW59PntzaW5nbGVQb3N0LkV4cHJlc3Npb25zW2N1ckluZGV4XS5waW55aW59PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17bWVhbmluZ30+e3NpbmdsZVBvc3QuRXhwcmVzc2lvbnNbY3VySW5kZXhdLm1lYW5pbmd9PC9kaXY+XHJcbiAgICAgICAgICA8UmlnaHRDaXJjbGVGaWxsZWQgY3NzPXtyaWdodEFycm93fSBvbkNsaWNrPXtnb1RvTmV4dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==