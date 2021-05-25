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
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_9__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
                lineNumber: 96,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
                lineNumber: 111,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["expressionNum"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["1 / ", singlePost.Expressions.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["expressionBox"],
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: _styles__WEBPACK_IMPORTED_MODULE_9__["pinyin"],
            children: "N\u01D0 ch\u012B r\xF2u ma?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: _styles__WEBPACK_IMPORTED_MODULE_9__["meaning"],
            children: "\uB2F9\uC2E0\uC740 \uACE0\uAE30\uB97C \uBA39\uC2B5\uB2C8\uAE4C?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic2luZ2xlUG9zdCIsInRpdGxlIiwiY3JlYXRlZEF0IiwiVXNlciIsIm5pY2tuYW1lIiwiRXhwcmVzc2lvbnMiLCJwaW55aW4iLCJtZWFuaW5nIiwiSGFzaHRhZ3MiLCJuYW1lIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJ3cml0dGVuQnlNZSIsInBvc3QiLCJwb3N0VGl0bGUiLCJidXR0b25Hcm91cCIsInBvc3RJbmZvQm94IiwicG9zdEluZm9Xcml0ZXIiLCJwb3N0SW5mb0J1bGxldCIsInBvc3RJbmZvRGF0ZSIsImZvcm1hdCIsImhhc2h0YWdCb3giLCJtYXAiLCJ0YWciLCJjb250ZW50Qm94IiwiZXhwcmVzc2lvbk51bSIsImxlbmd0aCIsImV4cHJlc3Npb25Cb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFFQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRGlCLENBRWpCOztBQUZpQixxQkFHRkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIVDtBQUFBLE1BR1RDLEVBSFMsZ0JBR1RBLEVBSFM7O0FBS2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFMaUIsTUFNVEMsRUFO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QUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBa0RELENBakdEOztHQUFNbEIsSTtVQUNhRSx1RCxFQUVGQyx1RCxFQUVBSyxxRDs7O0tBTFhSLEk7QUFtR1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS41NGQ4MjFlN2IzZTI1N2U2NmE2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4JztcclxuaW1wb3J0IHsgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHtcclxuICBwb3N0LFxyXG4gIHBvc3RUaXRsZSxcclxuICBidXR0b25Hcm91cCxcclxuICBwb3N0SW5mb0JveCxcclxuICBwb3N0SW5mb1dyaXRlcixcclxuICBwb3N0SW5mb0J1bGxldCxcclxuICBwb3N0SW5mb0RhdGUsXHJcbiAgaGFzaHRhZ0JveCxcclxuICBjb250ZW50Qm94LFxyXG4gIGV4cHJlc3Npb25Cb3gsXHJcbiAgZXhwcmVzc2lvbk51bSxcclxuICBwaW55aW4sXHJcbiAgbWVhbmluZyxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBVcGRhdGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VcGRhdGVCdG4nO1xyXG5pbXBvcnQgRGVsZXRlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGVsZXRlQnRuJztcclxuaW1wb3J0IExpa2VCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaWtlQnRuJztcclxuXHJcbmRheWpzLmxvY2FsZSgna28nKTtcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIC8vIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IHNpbmdsZVBvc3QgPSB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnKC3qsIAgLe2VmOuLpCkg7JmV7LSI67O07Y64JyxcclxuICAgIGNyZWF0ZWRBdDogJzIwMjEtMDUtMjAgMDg6MTg6NDAnLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgbmlja25hbWU6ICdhZG1pbjEnLFxyXG4gICAgfSxcclxuICAgIEV4cHJlc3Npb25zOiBbXHJcbiAgICAgIHsgcGlueWluOiAnTseQIHHDuSBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOqwkeuLiOq5jD8nIH0sXHJcbiAgICAgIHsgcGlueWluOiAnTseQIGzDoWkgbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDsmLXri4jquYw/JyB9LFxyXG4gICAgICB7IHBpbnlpbjogJ07HkCBrw6BuIG1hPycsIG1lYW5pbmc6ICfri7nsi6DsnYAg67SF64uI6rmMPycgfSxcclxuICAgICAgeyBwaW55aW46ICdOx5AgY2jEqyByw7J1IG1hPycsIG1lYW5pbmc6ICfri7nsi6DsnYAg6rOg6riw66W8IOuoueyKteuLiOq5jD8nIH0sXHJcbiAgICAgIHsgcGlueWluOiAnTseQIGTHkm5nIG1hPycsIG1lYW5pbmc6ICfri7nsi6DsnYAg7J207ZW06rCAIOuQqeuLiOq5jD8nIH0sXHJcbiAgICBdLFxyXG4gICAgSGFzaHRhZ3M6IFtcclxuICAgICAgeyBpZDogMSwgbmFtZTogJ+yZley0iOuztCcgfSxcclxuICAgICAgeyBpZDogMiwgbmFtZTogJ+2FjOyKpO2KuCcgfSxcclxuICAgICAgeyBpZDogMywgbmFtZTogJ+uwmOyLnOuwgOuLueuwmOyLnOyDgScgfSxcclxuICAgICAgLy8geyBpZDogNCwgbmFtZTogJ+uTnOudvOuniCcgfSxcclxuICAgICAgLy8geyBpZDogNSwgbmFtZTogJ+yLpOyDne2ZnO2RnO2YhCcgfSxcclxuICAgICAgLy8geyBpZDogNiwgbmFtZTogJ+ydvOyDge2ajO2ZlCcgfSxcclxuICAgICAgLy8geyBpZDogNywgbmFtZTogJ+yWtOyEnOyCrOyYpOyekScgfSxcclxuICAgICAgLy8geyBpZDogOCwgbmFtZTogJ+yghOusuOykkeyggeynhOyynOyynCcgfSxcclxuICAgICAgLy8geyBpZDogOSwgbmFtZTogJ+uCmOydmOyVhOumhOuLpOyboOuNmOq3uOuMgOyXkOqyjCcgfSxcclxuICAgIF0sXHJcbiAgICBDb21tZW50czoge30sXHJcbiAgICBMaWtlcnM6IHt9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdyaXR0ZW5CeU1lID0gbWU/Lm5pY2tuYW1lID09PSBzaW5nbGVQb3N0LlVzZXIubmlja25hbWU7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gIC8vICAgICBkYXRhOiBpZCxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjc3M9e3Bvc3R9PlxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0VGl0bGV9PntzaW5nbGVQb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIHt3cml0dGVuQnlNZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNzcz17YnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICA8VXBkYXRlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICAgIDxEZWxldGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3RJbmZvQm94fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9Xcml0ZXJ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3NpbmdsZVBvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPntzaW5nbGVQb3N0LlVzZXIubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvQnVsbGV0fT7Ctzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb0RhdGV9PlxyXG4gICAgICAgICAgICAgIHtkYXlqcyhzaW5nbGVQb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZ64WEIE1N7JuUIERE7J28Jyl9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExpa2VCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNzcz17aGFzaHRhZ0JveH0+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5IYXNodGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuaWR9IGNvbG9yPVwicHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt0YWcubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3RhZy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtjb250ZW50Qm94fT5cclxuICAgICAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uTnVtfT5cclxuICAgICAgICAgICAgPGRpdj4xIC8ge3NpbmdsZVBvc3QuRXhwcmVzc2lvbnMubGVuZ3RofTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbkJveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW59Pk7HkCBjaMSrIHLDsnUgbWE/PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXttZWFuaW5nfT7ri7nsi6DsnYAg6rOg6riw66W8IOuoueyKteuLiOq5jD88L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9