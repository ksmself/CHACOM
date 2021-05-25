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
/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/index */ "./components/Header/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./pages/post/styles.js");
/* harmony import */ var _components_UpdateBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/UpdateBtn */ "./components/UpdateBtn.js");
/* harmony import */ var _components_DeleteBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/DeleteBtn */ "./components/DeleteBtn.js");
/* harmony import */ var _components_LikeBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LikeBtn */ "./components/LikeBtn.js");



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
  var writtenByMe = (me === null || me === void 0 ? void 0 : me.nickname) === singlePost.User.nickname; // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //     data: id,
  //   });
  // }, []);

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_index__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_9__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoWriter"],
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/user/".concat(singlePost.User.id),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: singlePost.User.nickname
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["hashtagBox"],
        children: singlePost.Hashtags.map(function (tag) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
            color: "purple",
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/hashtag/".concat(tag.name),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: tag.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["expressionNum"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["1 / ", singlePost.Expressions.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["pinyin"],
          children: "N\u01D0 ch\u012B r\xF2u ma?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["meaning"],
          children: "\uB2F9\uC2E0\uC740 \uACE0\uAE30\uB97C \uBA39\uC2B5\uB2C8\uAE4C?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Post, "LcQJBZR1e4r4/rt6/ZYdWZVPdTw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic2luZ2xlUG9zdCIsInRpdGxlIiwiY3JlYXRlZEF0IiwiVXNlciIsIm5pY2tuYW1lIiwiRXhwcmVzc2lvbnMiLCJwaW55aW4iLCJtZWFuaW5nIiwiSGFzaHRhZ3MiLCJuYW1lIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJ3cml0dGVuQnlNZSIsInBvc3QiLCJwb3N0VGl0bGUiLCJidXR0b25Hcm91cCIsInBvc3RJbmZvQm94IiwicG9zdEluZm9Xcml0ZXIiLCJwb3N0SW5mb0J1bGxldCIsInBvc3RJbmZvRGF0ZSIsImZvcm1hdCIsImhhc2h0YWdCb3giLCJtYXAiLCJ0YWciLCJjb250ZW50Qm94IiwiZXhwcmVzc2lvbk51bSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUVBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUIsQ0FEaUIsQ0FFakI7O0FBRmlCLHFCQUdGQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhUO0FBQUEsTUFHVEMsRUFIUyxnQkFHVEEsRUFIUzs7QUFLakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUxpQixNQU1UQyxFQU5TLEdBTUZGLE1BQU0sQ0FB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UixJO0FBaUdTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uNTM1YTk0ZmJmMjcxYTY3ZWI0ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlci9pbmRleCc7XHJcbmltcG9ydCB7IExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7XHJcbiAgcG9zdCxcclxuICBwb3N0VGl0bGUsXHJcbiAgYnV0dG9uR3JvdXAsXHJcbiAgcG9zdEluZm9Cb3gsXHJcbiAgcG9zdEluZm9Xcml0ZXIsXHJcbiAgcG9zdEluZm9CdWxsZXQsXHJcbiAgcG9zdEluZm9EYXRlLFxyXG4gIGhhc2h0YWdCb3gsXHJcbiAgY29udGVudEJveCxcclxuICBleHByZXNzaW9uTnVtLFxyXG4gIHBpbnlpbixcclxuICBtZWFuaW5nLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFVwZGF0ZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VwZGF0ZUJ0bic7XHJcbmltcG9ydCBEZWxldGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZWxldGVCdG4nO1xyXG5pbXBvcnQgTGlrZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpa2VCdG4nO1xyXG5cclxuZGF5anMubG9jYWxlKCdrbycpO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgLy8gY29uc3QgeyBzaW5nbGVQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3Qgc2luZ2xlUG9zdCA9IHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICcoLeqwgCAt7ZWY64ukKSDsmZXstIjrs7TtjrgnLFxyXG4gICAgY3JlYXRlZEF0OiAnMjAyMS0wNS0yMCAwODoxODo0MCcsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBuaWNrbmFtZTogJ2FkbWluMScsXHJcbiAgICB9LFxyXG4gICAgRXhwcmVzc2lvbnM6IFtcclxuICAgICAgeyBwaW55aW46ICdOx5AgccO5IG1hPycsIG1lYW5pbmc6ICfri7nsi6DsnYAg6rCR64uI6rmMPycgfSxcclxuICAgICAgeyBwaW55aW46ICdOx5AgbMOhaSBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOyYteuLiOq5jD8nIH0sXHJcbiAgICAgIHsgcGlueWluOiAnTseQIGvDoG4gbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDrtIXri4jquYw/JyB9LFxyXG4gICAgICB7IHBpbnlpbjogJ07HkCBjaMSrIHLDsnUgbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDqs6DquLDrpbwg66i57Iq164uI6rmMPycgfSxcclxuICAgICAgeyBwaW55aW46ICdOx5AgZMeSbmcgbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDsnbTtlbTqsIAg65Cp64uI6rmMPycgfSxcclxuICAgIF0sXHJcbiAgICBIYXNodGFnczogW1xyXG4gICAgICB7IGlkOiAxLCBuYW1lOiAn7JmV7LSI67O0JyB9LFxyXG4gICAgICB7IGlkOiAyLCBuYW1lOiAn7YWM7Iqk7Yq4JyB9LFxyXG4gICAgICB7IGlkOiAzLCBuYW1lOiAn67CY7Iuc67CA64u567CY7Iuc7IOBJyB9LFxyXG4gICAgICAvLyB7IGlkOiA0LCBuYW1lOiAn65Oc652866eIJyB9LFxyXG4gICAgICAvLyB7IGlkOiA1LCBuYW1lOiAn7Iuk7IOd7Zmc7ZGc7ZiEJyB9LFxyXG4gICAgICAvLyB7IGlkOiA2LCBuYW1lOiAn7J287IOB7ZqM7ZmUJyB9LFxyXG4gICAgICAvLyB7IGlkOiA3LCBuYW1lOiAn7Ja07ISc7IKs7Jik7J6RJyB9LFxyXG4gICAgICAvLyB7IGlkOiA4LCBuYW1lOiAn7KCE66y47KSR7KCB7KeE7LKc7LKcJyB9LFxyXG4gICAgICAvLyB7IGlkOiA5LCBuYW1lOiAn64KY7J2Y7JWE66aE64uk7Jug642Y6re464yA7JeQ6rKMJyB9LFxyXG4gICAgXSxcclxuICAgIENvbW1lbnRzOiB7fSxcclxuICAgIExpa2Vyczoge30sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd3JpdHRlbkJ5TWUgPSBtZT8ubmlja25hbWUgPT09IHNpbmdsZVBvc3QuVXNlci5uaWNrbmFtZTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgLy8gICAgIGRhdGE6IGlkLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNzcz17cG9zdH0+XHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3RUaXRsZX0+e3NpbmdsZVBvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAge3dyaXR0ZW5CeU1lICYmIChcclxuICAgICAgICAgIDxkaXYgY3NzPXtidXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgIDxVcGRhdGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgICAgPERlbGV0ZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNzcz17cG9zdEluZm9Cb3h9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb1dyaXRlcn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7c2luZ2xlUG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9CdWxsZXR9PsK3PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvRGF0ZX0+XHJcbiAgICAgICAgICAgICAge2RheWpzKHNpbmdsZVBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVnrhYQgTU3sm5QgRETsnbwnKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGlrZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtoYXNodGFnQm94fT5cclxuICAgICAgICAgIHtzaW5nbGVQb3N0Lkhhc2h0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFRhZyBrZXk9e3RhZy5pZH0gY29sb3I9XCJwdXJwbGVcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3RhZy5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57dGFnLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjc3M9e2NvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25OdW19PlxyXG4gICAgICAgICAgICA8ZGl2PjEgLyB7c2luZ2xlUG9zdC5FeHByZXNzaW9ucy5sZW5ndGh9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW59Pk7HkCBjaMSrIHLDsnUgbWE/PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17bWVhbmluZ30+64u57Iug7J2AIOqzoOq4sOulvCDrqLnsirXri4jquYw/PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=