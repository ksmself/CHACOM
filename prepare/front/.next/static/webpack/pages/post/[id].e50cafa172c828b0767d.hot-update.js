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
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Header/index */ "./components/Header/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./pages/post/styles.js");
/* harmony import */ var _components_UpdateBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/UpdateBtn */ "./components/UpdateBtn.js");
/* harmony import */ var _components_DeleteBtn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/DeleteBtn */ "./components/DeleteBtn.js");
/* harmony import */ var _components_LikeBtn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/LikeBtn */ "./components/LikeBtn.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\post\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */













dayjs__WEBPACK_IMPORTED_MODULE_7___default.a.locale('ko');

var Post = function Post() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(); // const { singlePost } = useSelector((state) => state.post);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
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

  var _useState = useState(0),
      _useState2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      curIndex = _useState2[0],
      setCurIndex = _useState2[1];

  var goToPrev = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {}, []);
  var goToNext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {}, []); // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //     data: id,
  //   });
  // }, []);

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_index__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_11__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_11__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_11__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
        css: _styles__WEBPACK_IMPORTED_MODULE_11__["postInfoBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_11__["postInfoWriter"],
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            css: _styles__WEBPACK_IMPORTED_MODULE_11__["postInfoBullet"],
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: _styles__WEBPACK_IMPORTED_MODULE_11__["postInfoDate"],
            children: dayjs__WEBPACK_IMPORTED_MODULE_7___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
        css: _styles__WEBPACK_IMPORTED_MODULE_11__["hashtagBox"],
        children: singlePost.Hashtags.map(function (tag) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tag"], {
            color: "purple",
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
        css: _styles__WEBPACK_IMPORTED_MODULE_11__["contentBox"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["LeftCircleFilled"], {
          css: _styles__WEBPACK_IMPORTED_MODULE_11__["leftArrow"],
          onClick: goToPrev
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_11__["expressionNum"],
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
          css: _styles__WEBPACK_IMPORTED_MODULE_11__["pinyin"],
          children: singlePost.Expressions[curIndex].pinyin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: _styles__WEBPACK_IMPORTED_MODULE_11__["meaning"],
          children: "singlePost.Expressions[curIndex].meaning"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["RightCircleFilled"], {
          css: _styles__WEBPACK_IMPORTED_MODULE_11__["rightArrow"],
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
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic2luZ2xlUG9zdCIsInRpdGxlIiwiY3JlYXRlZEF0IiwiVXNlciIsIm5pY2tuYW1lIiwiRXhwcmVzc2lvbnMiLCJwaW55aW4iLCJtZWFuaW5nIiwiSGFzaHRhZ3MiLCJuYW1lIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJ3cml0dGVuQnlNZSIsInVzZVN0YXRlIiwiY3VySW5kZXgiLCJzZXRDdXJJbmRleCIsImdvVG9QcmV2IiwidXNlQ2FsbGJhY2siLCJnb1RvTmV4dCIsInBvc3QiLCJwb3N0VGl0bGUiLCJidXR0b25Hcm91cCIsInBvc3RJbmZvQm94IiwicG9zdEluZm9Xcml0ZXIiLCJwb3N0SW5mb0J1bGxldCIsInBvc3RJbmZvRGF0ZSIsImZvcm1hdCIsImhhc2h0YWdCb3giLCJtYXAiLCJ0YWciLCJjb250ZW50Qm94IiwibGVmdEFycm93IiwiZXhwcmVzc2lvbk51bSIsImxlbmd0aCIsInJpZ2h0QXJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFFQUEsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCLENBRGlCLENBRWpCOztBQUZpQixxQkFHRkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIVDtBQUFBLE1BR1RDLEVBSFMsZ0JBR1RBLEVBSFM7O0FBS2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFMaUIsTUFNVEMsRUFOUyxHQU1GRixNQUFNLENBQUNHLEtBTkwsQ0FNVEQsRUFOUztBQVFqQixNQUFNRSxVQUFVLEdBQUc7QUFDakJGLE1BQUUsRUFBRSxDQURhO0FBRWpCRyxTQUFLLEVBQUUsZUFGVTtBQUdqQkMsYUFBUyxFQUFFLHFCQUhNO0FBSWpCQyxRQUFJLEVBQUU7QUFDSkwsUUFBRSxFQUFFLENBREE7QUFFSk0sY0FBUSxFQUFFO0FBRk4sS0FKVztBQVFqQkMsZUFBVyxFQUFFLENBQ1g7QUFBRUMsWUFBTSxFQUFFLFdBQVY7QUFBdUJDLGFBQU8sRUFBRTtBQUFoQyxLQURXLEVBRVg7QUFBRUQsWUFBTSxFQUFFLFlBQVY7QUFBd0JDLGFBQU8sRUFBRTtBQUFqQyxLQUZXLEVBR1g7QUFBRUQsWUFBTSxFQUFFLFlBQVY7QUFBd0JDLGFBQU8sRUFBRTtBQUFqQyxLQUhXLEVBSVg7QUFBRUQsWUFBTSxFQUFFLGdCQUFWO0FBQTRCQyxhQUFPLEVBQUU7QUFBckMsS0FKVyxFQUtYO0FBQUVELFlBQU0sRUFBRSxhQUFWO0FBQXlCQyxhQUFPLEVBQUU7QUFBbEMsS0FMVyxDQVJJO0FBZWpCQyxZQUFRLEVBQUUsQ0FDUjtBQUFFVixRQUFFLEVBQUUsQ0FBTjtBQUFTVyxVQUFJLEVBQUU7QUFBZixLQURRLEVBRVI7QUFBRVgsUUFBRSxFQUFFLENBQU47QUFBU1csVUFBSSxFQUFFO0FBQWYsS0FGUSxFQUdSO0FBQUVYLFFBQUUsRUFBRSxDQUFOO0FBQVNXLFVBQUksRUFBRTtBQUFmLEtBSFEsQ0FJUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUUSxLQWZPO0FBMEJqQkMsWUFBUSxFQUFFLEVBMUJPO0FBMkJqQkMsVUFBTSxFQUFFO0FBM0JTLEdBQW5CO0FBOEJBLE1BQU1DLFdBQVcsR0FBRyxDQUFBakIsRUFBRSxTQUFGLElBQUFBLEVBQUUsV0FBRixZQUFBQSxFQUFFLENBQUVTLFFBQUosTUFBaUJKLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkMsUUFBckQ7O0FBdENpQixrQkF3Q2VTLFFBQVEsQ0FBQyxDQUFELENBeEN2QjtBQUFBO0FBQUEsTUF3Q1ZDLFFBeENVO0FBQUEsTUF3Q0FDLFdBeENBOztBQTBDakIsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0QseURBQVcsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBNUIsQ0E1Q2lCLENBOENqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDRTtBQUFBLGVBQ0U7QUFBQSxnQkFDRSw4RUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUU7QUFBSyxTQUFHLEVBQUVFLDZDQUFWO0FBQUEsaUJBQ0U7QUFBSyxXQUFHLEVBQUVDLGtEQUFWO0FBQUEsa0JBQXNCcEIsVUFBVSxDQUFDQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1csV0FBVyxJQUNWO0FBQUssV0FBRyxFQUFFUyxvREFBVjtBQUFBLG1CQUNFLDhFQUFDLDhEQUFEO0FBQVcsY0FBSSxFQUFFckI7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFLDhFQUFDLDhEQUFEO0FBQVcsY0FBSSxFQUFFQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLEVBUUU7QUFBSyxXQUFHLEVBQUVzQixvREFBVjtBQUFBLG1CQUNFO0FBQUEscUJBQ0U7QUFBTSxlQUFHLEVBQUVDLHVEQUFYO0FBQUEsc0JBQ0UsOEVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxrQkFBV3ZCLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkwsRUFBM0IsQ0FBVjtBQUFBLHdCQUNFO0FBQUEsMEJBQUlFLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBTUU7QUFBTSxlQUFHLEVBQUVvQix1REFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixFQU9FO0FBQU0sZUFBRyxFQUFFQyxxREFBWDtBQUFBLHNCQUNHdEMsNENBQUssQ0FBQ2EsVUFBVSxDQUFDRSxTQUFaLENBQUwsQ0FBNEJ3QixNQUE1QixDQUFtQyxlQUFuQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBWUUsOEVBQUMsNERBQUQ7QUFBUyxjQUFJLEVBQUUxQjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsRUFzQkU7QUFBSyxXQUFHLEVBQUUyQixtREFBVjtBQUFBLGtCQUNHM0IsVUFBVSxDQUFDUSxRQUFYLENBQW9Cb0IsR0FBcEIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDLGlCQUNFLDhFQUFDLHdDQUFEO0FBQWtCLGlCQUFLLEVBQUMsUUFBeEI7QUFBQSxzQkFDRSw4RUFBQyxnREFBRDtBQUFNLGtCQUFJLHFCQUFjQSxHQUFHLENBQUNwQixJQUFsQixDQUFWO0FBQUEsd0JBQ0U7QUFBQSwwQkFBSW9CLEdBQUcsQ0FBQ3BCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVb0IsR0FBRyxDQUFDL0IsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBT0QsU0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsRUFpQ0U7QUFBSyxXQUFHLEVBQUVnQyxtREFBVjtBQUFBLG1CQUNFLDhFQUFDLGtFQUFEO0FBQWtCLGFBQUcsRUFBRUMsa0RBQXZCO0FBQWtDLGlCQUFPLEVBQUVmO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRTtBQUFLLGFBQUcsRUFBRWdCLHNEQUFWO0FBQUEsb0JBQ0U7QUFBQSx1QkFDR2xCLFFBQVEsR0FBRyxDQURkLFNBQ29CZCxVQUFVLENBQUNLLFdBQVgsQ0FBdUI0QixNQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBT0U7QUFBSyxhQUFHLEVBQUUzQiwrQ0FBVjtBQUFBLG9CQUFtQk4sVUFBVSxDQUFDSyxXQUFYLENBQXVCUyxRQUF2QixFQUFpQ1I7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVFFO0FBQUssYUFBRyxFQUFFQyxnREFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixFQVNFLDhFQUFDLG1FQUFEO0FBQW1CLGFBQUcsRUFBRTJCLG1EQUF4QjtBQUFvQyxpQkFBTyxFQUFFaEI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQW9ERCxDQXpHRDs7R0FBTTdCLEk7VUFDYUUsdUQsRUFFRkMsdUQsRUFFQUsscUQ7OztLQUxYUixJO0FBMkdTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZTUwY2FmYTE3MmM4MjhiMDc2N2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHsgTGVmdENpcmNsZUZpbGxlZCwgUmlnaHRDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4JztcclxuaW1wb3J0IHsgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHtcclxuICBwb3N0LFxyXG4gIHBvc3RUaXRsZSxcclxuICBidXR0b25Hcm91cCxcclxuICBwb3N0SW5mb0JveCxcclxuICBwb3N0SW5mb1dyaXRlcixcclxuICBwb3N0SW5mb0J1bGxldCxcclxuICBwb3N0SW5mb0RhdGUsXHJcbiAgaGFzaHRhZ0JveCxcclxuICBjb250ZW50Qm94LFxyXG4gIGxlZnRBcnJvdyxcclxuICByaWdodEFycm93LFxyXG4gIGV4cHJlc3Npb25OdW0sXHJcbiAgcGlueWluLFxyXG4gIG1lYW5pbmcsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgVXBkYXRlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXBkYXRlQnRuJztcclxuaW1wb3J0IERlbGV0ZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RlbGV0ZUJ0bic7XHJcbmltcG9ydCBMaWtlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlrZUJ0bic7XHJcblxyXG5kYXlqcy5sb2NhbGUoJ2tvJyk7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAvLyBjb25zdCB7IHNpbmdsZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBzaW5nbGVQb3N0ID0ge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJygt6rCAIC3tlZjri6QpIOyZley0iOuztO2OuCcsXHJcbiAgICBjcmVhdGVkQXQ6ICcyMDIxLTA1LTIwIDA4OjE4OjQwJyxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5pY2tuYW1lOiAnYWRtaW4xJyxcclxuICAgIH0sXHJcbiAgICBFeHByZXNzaW9uczogW1xyXG4gICAgICB7IHBpbnlpbjogJ07HkCBxw7kgbWE/JywgbWVhbmluZzogJ+uLueyLoOydgCDqsJHri4jquYw/JyB9LFxyXG4gICAgICB7IHBpbnlpbjogJ07HkCBsw6FpIG1hPycsIG1lYW5pbmc6ICfri7nsi6DsnYAg7Ji164uI6rmMPycgfSxcclxuICAgICAgeyBwaW55aW46ICdOx5Aga8OgbiBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOu0heuLiOq5jD8nIH0sXHJcbiAgICAgIHsgcGlueWluOiAnTseQIGNoxKsgcsOydSBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOqzoOq4sOulvCDrqLnsirXri4jquYw/JyB9LFxyXG4gICAgICB7IHBpbnlpbjogJ07HkCBkx5JuZyBtYT8nLCBtZWFuaW5nOiAn64u57Iug7J2AIOydtO2VtOqwgCDrkKnri4jquYw/JyB9LFxyXG4gICAgXSxcclxuICAgIEhhc2h0YWdzOiBbXHJcbiAgICAgIHsgaWQ6IDEsIG5hbWU6ICfsmZXstIjrs7QnIH0sXHJcbiAgICAgIHsgaWQ6IDIsIG5hbWU6ICfthYzsiqTtirgnIH0sXHJcbiAgICAgIHsgaWQ6IDMsIG5hbWU6ICfrsJjsi5zrsIDri7nrsJjsi5zsg4EnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDQsIG5hbWU6ICfrk5zrnbzrp4gnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDUsIG5hbWU6ICfsi6Tsg53tmZztkZztmIQnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDYsIG5hbWU6ICfsnbzsg4HtmoztmZQnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDcsIG5hbWU6ICfslrTshJzsgqzsmKTsnpEnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDgsIG5hbWU6ICfsoITrrLjspJHsoIHsp4TsspzsspwnIH0sXHJcbiAgICAgIC8vIHsgaWQ6IDksIG5hbWU6ICfrgpjsnZjslYTrpoTri6Tsm6DrjZjqt7jrjIDsl5DqsownIH0sXHJcbiAgICBdLFxyXG4gICAgQ29tbWVudHM6IHt9LFxyXG4gICAgTGlrZXJzOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCB3cml0dGVuQnlNZSA9IG1lPy5uaWNrbmFtZSA9PT0gc2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lO1xyXG5cclxuICBjb25zdCBbY3VySW5kZXgsIHNldEN1ckluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBnb1RvUHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdvVG9OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgLy8gICAgIGRhdGE6IGlkLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNzcz17cG9zdH0+XHJcbiAgICAgICAgPGRpdiBjc3M9e3Bvc3RUaXRsZX0+e3NpbmdsZVBvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAge3dyaXR0ZW5CeU1lICYmIChcclxuICAgICAgICAgIDxkaXYgY3NzPXtidXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgIDxVcGRhdGVCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgICAgPERlbGV0ZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNzcz17cG9zdEluZm9Cb3h9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gY3NzPXtwb3N0SW5mb1dyaXRlcn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7c2luZ2xlUG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9CdWxsZXR9PsK3PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvRGF0ZX0+XHJcbiAgICAgICAgICAgICAge2RheWpzKHNpbmdsZVBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVnrhYQgTU3sm5QgRETsnbwnKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGlrZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtoYXNodGFnQm94fT5cclxuICAgICAgICAgIHtzaW5nbGVQb3N0Lkhhc2h0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFRhZyBrZXk9e3RhZy5pZH0gY29sb3I9XCJwdXJwbGVcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3RhZy5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57dGFnLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjc3M9e2NvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPExlZnRDaXJjbGVGaWxsZWQgY3NzPXtsZWZ0QXJyb3d9IG9uQ2xpY2s9e2dvVG9QcmV2fSAvPlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25OdW19PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtjdXJJbmRleCArIDF9IC8ge3NpbmdsZVBvc3QuRXhwcmVzc2lvbnMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3Bpbnlpbn0+e3NpbmdsZVBvc3QuRXhwcmVzc2lvbnNbY3VySW5kZXhdLnBpbnlpbn08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY3NzPXttZWFuaW5nfT5zaW5nbGVQb3N0LkV4cHJlc3Npb25zW2N1ckluZGV4XS5tZWFuaW5nPC9kaXY+XHJcbiAgICAgICAgICA8UmlnaHRDaXJjbGVGaWxsZWQgY3NzPXtyaWdodEFycm93fSBvbkNsaWNrPXtnb1RvTmV4dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==