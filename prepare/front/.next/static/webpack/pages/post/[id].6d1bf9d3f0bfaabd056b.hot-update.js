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
      pinyin: 'Rènshi nǐ hěn gāoxìng!',
      meaning: '만나서 반갑습니다!'
    }, {
      pinyin: 'Wǒ yào yí ge sǎn hào tào cān.',
      meaning: '3번 세트 하나 주세요.'
    }, {
      pinyin: 'Kuài guǒ lái chī, yíhuìr fāngbiànmiàn dōu pào kāi le.',
      meaning: '라면 불기 전에 빨리 와서 먹어.'
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

  var goToPrev = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (curIndex === 0) setCurIndex(singlePost.Expressions.length - 1);else setCurIndex(function (prev) {
      return prev - 1;
    });
  }, [curIndex]);
  var goToNext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (curIndex === singlePost.Expressions.length - 1) setCurIndex(0);else setCurIndex(function (prev) {
      return prev + 1;
    });
  }, [curIndex]); // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //     data: id,
  //   });
  // }, []);

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_index__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_10__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
                lineNumber: 116,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_10__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_10__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_13__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
                lineNumber: 131,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_10__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            "class": "fas fa-chevron-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["expressionNum"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [curIndex + 1, " / ", singlePost.Expressions.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["pinyin"],
          children: singlePost.Expressions[curIndex].pinyin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["meaning"],
          children: singlePost.Expressions[curIndex].meaning
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["RightCircleFilled"], {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["rightArrow"],
          onClick: goToNext
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic2luZ2xlUG9zdCIsInRpdGxlIiwiY3JlYXRlZEF0IiwiVXNlciIsIm5pY2tuYW1lIiwiRXhwcmVzc2lvbnMiLCJwaW55aW4iLCJtZWFuaW5nIiwiSGFzaHRhZ3MiLCJuYW1lIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJ3cml0dGVuQnlNZSIsInVzZVN0YXRlIiwiY3VySW5kZXgiLCJzZXRDdXJJbmRleCIsImdvVG9QcmV2IiwidXNlQ2FsbGJhY2siLCJsZW5ndGgiLCJwcmV2IiwiZ29Ub05leHQiLCJwb3N0IiwicG9zdFRpdGxlIiwiYnV0dG9uR3JvdXAiLCJwb3N0SW5mb0JveCIsInBvc3RJbmZvV3JpdGVyIiwicG9zdEluZm9CdWxsZXQiLCJwb3N0SW5mb0RhdGUiLCJmb3JtYXQiLCJoYXNodGFnQm94IiwibWFwIiwidGFnIiwiY29udGVudEJveCIsImV4cHJlc3Npb25OdW0iLCJyaWdodEFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUVBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUIsQ0FEaUIsQ0FFakI7O0FBRmlCLHFCQUdGQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxD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QkFERjtBQXVERCxDQXhIRDs7R0FBTS9CLEk7VUFDYUUsdUQsRUFFRkMsdUQsRUFFQUsscUQ7OztLQUxYUixJO0FBMEhTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uNmQxYmY5ZDNmMGJmYWFiZDA1NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IExlZnRDaXJjbGVGaWxsZWQsIFJpZ2h0Q2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9pbmRleCc7XHJcbmltcG9ydCB7IExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7XHJcbiAgcG9zdCxcclxuICBwb3N0VGl0bGUsXHJcbiAgYnV0dG9uR3JvdXAsXHJcbiAgcG9zdEluZm9Cb3gsXHJcbiAgcG9zdEluZm9Xcml0ZXIsXHJcbiAgcG9zdEluZm9CdWxsZXQsXHJcbiAgcG9zdEluZm9EYXRlLFxyXG4gIGhhc2h0YWdCb3gsXHJcbiAgY29udGVudEJveCxcclxuICBsZWZ0QXJyb3csXHJcbiAgcmlnaHRBcnJvdyxcclxuICBleHByZXNzaW9uTnVtLFxyXG4gIHBpbnlpbixcclxuICBtZWFuaW5nLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFVwZGF0ZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VwZGF0ZUJ0bic7XHJcbmltcG9ydCBEZWxldGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZWxldGVCdG4nO1xyXG5pbXBvcnQgTGlrZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpa2VCdG4nO1xyXG5cclxuZGF5anMubG9jYWxlKCdrbycpO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgLy8gY29uc3QgeyBzaW5nbGVQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3Qgc2luZ2xlUG9zdCA9IHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICcoLeqwgCAt7ZWY64ukKSDsmZXstIjrs7TtjrgnLFxyXG4gICAgY3JlYXRlZEF0OiAnMjAyMS0wNS0yMCAwODoxODo0MCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBuaWNrbmFtZTogJ2FkbWluMScsXHJcbiAgICB9LFxyXG4gICAgRXhwcmVzc2lvbnM6IFtcclxuICAgICAgeyBwaW55aW46ICdSw6huc2hpIG7HkCBoxJtuIGfEgW94w6xuZyEnLCBtZWFuaW5nOiAn66eM64KY7IScIOuwmOqwkeyKteuLiOuLpCEnIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaW55aW46ICdXx5IgecOgbyB5w60gZ2Ugc8eObiBow6BvIHTDoG8gY8SBbi4nLFxyXG4gICAgICAgIG1lYW5pbmc6ICcz67KIIOyEuO2KuCDtlZjrgpgg7KO87IS47JqULicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwaW55aW46ICdLdcOgaSBndceSIGzDoWkgY2jEqywgecOtaHXDrHIgZsSBbmdiacOgbm1pw6BuIGTFjXUgcMOgbyBrxIFpIGxlLicsXHJcbiAgICAgICAgbWVhbmluZzogJ+udvOuptCDrtojquLAg7KCE7JeQIOu5qOumrCDsmYDshJwg66i57Ja0LicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgcGlueWluOiAnTseQIGNoxKsgcsOydSBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOqzoOq4sOulvCDrqLnsirXri4jquYw/JyB9LFxyXG4gICAgICB7IHBpbnlpbjogJ07HkCBkx5JuZyBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOydtO2VtOqwgCDrkKnri4jquYw/JyB9LFxyXG4gICAgXSxcclxuICAgIEhhc2h0YWdzOiBbXHJcbiAgICAgIHsgaWQ6IDEsIG5hbWU6ICfsmZXstIjrs7QnIH0sXHJcbiAgICAgIHsgaWQ6IDIsIG5hbWU6ICfthYzsiqTtirgnIH0sXHJcbiAgICAgIHsgaWQ6IDMsIG5hbWU6ICfrsJjsi5zrsIDri7nrsJjsi5zsg4EnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDQsIG5hbWU6ICfrk5zrnbzrp4gnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDUsIG5hbWU6ICfsi6Tsg53tmZztkZztmIQnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDYsIG5hbWU6ICfsnbzsg4HtmoztmZQnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDcsIG5hbWU6ICfslrTshJzsgqzsmKTsnpEnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDgsIG5hbWU6ICfsoITrrLjspJHsoIHsp4TsspzsspwnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDksIG5hbWU6ICfrgpjsnZjslYTrpoTri6Tsm6DrjZjqt7jrjIDsl5DqsownIH0sXHJcbiAgICBdLFxyXG4gICAgQ29tbWVudHM6IHt9LFxyXG4gICAgTGlrZXJzOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCB3cml0dGVuQnlNZSA9IG1lPy5uaWNrbmFtZSA9PT0gc2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lO1xyXG5cclxuICBjb25zdCBbY3VySW5kZXgsIHNldEN1ckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBnb1RvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChjdXJJbmRleCA9PT0gMCkgc2V0Q3VySW5kZXgoc2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGggLSAxKTtcclxuICAgIGVsc2Ugc2V0Q3VySW5kZXgoKHByZXYpID0+IHByZXYgLSAxKTtcclxuICB9LCBbY3VySW5kZXhdKTtcclxuXHJcbiAgY29uc3QgZ29Ub05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoY3VySW5kZXggPT09IHNpbmdsZVBvc3QuRXhwcmVzc2lvbnMubGVuZ3RoIC0gMSkgc2V0Q3VySW5kZXgoMCk7XHJcbiAgICBlbHNlIHNldEN1ckluZGV4KChwcmV2KSA9PiBwcmV2ICsgMSk7XHJcbiAgfSwgW2N1ckluZGV4XSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gIC8vICAgICBkYXRhOiBpZCxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjc3M9e3Bvc3R9PlxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0VGl0bGV9PntzaW5nbGVQb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIHt3cml0dGVuQnlNZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNzcz17YnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICA8VXBkYXRlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3RJbmZvQm94fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9Xcml0ZXJ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3NpbmdsZVBvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntzaW5nbGVQb3N0LlVzZXIubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvQnVsbGV0fT7Ctzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb0RhdGV9PlxyXG4gICAgICAgICAgICAgIHtkYXlqcyhzaW5nbGVQb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZ64WEIE1N7JuUIERE7J28Jyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExpa2VCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNzcz17aGFzaHRhZ0JveH0+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5IYXNodGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuaWR9IGNvbG9yPVwicHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt0YWcubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3RhZy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtjb250ZW50Qm94fT5cclxuICAgICAgICAgIHsvKiA8TGVmdENpcmNsZUZpbGxlZCBjc3M9e2xlZnRBcnJvd30gb25DbGljaz17Z29Ub1ByZXZ9IC8+ICovfVxyXG4gICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbk51bX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2N1ckluZGV4ICsgMX0gLyB7c2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17cGlueWlufT57c2luZ2xlUG9zdC5FeHByZXNzaW9uc1tjdXJJbmRleF0ucGlueWlufTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e21lYW5pbmd9PntzaW5nbGVQb3N0LkV4cHJlc3Npb25zW2N1ckluZGV4XS5tZWFuaW5nfTwvZGl2PlxyXG4gICAgICAgICAgPFJpZ2h0Q2lyY2xlRmlsbGVkIGNzcz17cmlnaHRBcnJvd30gb25DbGljaz17Z29Ub05leHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=