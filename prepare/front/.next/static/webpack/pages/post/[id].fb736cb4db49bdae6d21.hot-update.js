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
    Expressions: {},
    Hashtags: [{
      id: 1,
      name: '왕초보'
    }, {
      id: 2,
      name: '테스트'
    }, {
      id: 3,
      name: '반시밀당반시상'
    }, {
      id: 4,
      name: '드라마'
    }],
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
        lineNumber: 66,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_9__["post"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["postTitle"],
        children: singlePost.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), writtenByMe && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["buttonGroup"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UpdateBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DeleteBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
          post: singlePost
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfo"],
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoWriter"],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/user/".concat(singlePost.User.id),
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: singlePost.User.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoBullet"],
          children: "\xB7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          css: _styles__WEBPACK_IMPORTED_MODULE_9__["postInfoDate"],
          children: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(singlePost.createdAt).format('YYYY년 MM월 DD일')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LikeBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
        post: singlePost
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
                lineNumber: 104,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, _this)
          }, tag.id, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwic2luZ2xlUG9zdCIsInRpdGxlIiwiY3JlYXRlZEF0IiwiVXNlciIsIm5pY2tuYW1lIiwiRXhwcmVzc2lvbnMiLCJIYXNodGFncyIsIm5hbWUiLCJDb21tZW50cyIsIkxpa2VycyIsIndyaXR0ZW5CeU1lIiwicG9zdCIsInBvc3RUaXRsZSIsImJ1dHRvbkdyb3VwIiwicG9zdEluZm8iLCJwb3N0SW5mb1dyaXRlciIsInBvc3RJbmZvQnVsbGV0IiwicG9zdEluZm9EYXRlIiwiZm9ybWF0IiwiaGFzaHRhZ0JveCIsIm1hcCIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUIsQ0FEaUIsQ0FFakI7O0FBRmlCLHFCQUdGQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhUO0FBQUEsTUFHVEMsRUFIUyxnQkFHVEEsRUFIUzs7QUFLakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUxpQixNQU1UQyxFQU5TLEdBTUZGLE1BQU0sQ0FBQ0csS0FOTCxDQU1URCxFQU5TO0FBUWpCLE1BQU1FLFVBQVUsR0FBRztBQUNqQkYsTUFBRSxFQUFFLENBRGE7QUFFakJHLFNBQUssRUFBRSxlQUZVO0FBR2pCQyxhQUFTLEVBQUUscUJBSE07QUFJakJDLFFBQUksRUFBRTtBQUNKTCxRQUFFLEVBQUUsQ0FEQTtBQUVKTSxjQUFRLEVBQUU7QUFGTixLQUpXO0FBUWpCQyxlQUFXLEVBQUUsRUFSSTtBQVNqQkMsWUFBUSxFQUFFLENBQ1I7QUFBRVIsUUFBRSxFQUFFLENBQU47QUFBU1MsVUFBSSxFQUFFO0FBQWYsS0FEUSxFQUVSO0FBQUVULFFBQUUsRUFBRSxDQUFOO0FBQVNTLFVBQUksRUFBRTtBQUFmLEtBRlEsRUFHUjtBQUFFVCxRQUFFLEVBQUUsQ0FBTjtBQUFTUyxVQUFJLEVBQUU7QUFBZixLQUhRLEVBSVI7QUFBRVQsUUFBRSxFQUFFLENBQU47QUFBU1MsVUFBSSxFQUFFO0FBQWYsS0FKUSxDQVRPO0FBZWpCQyxZQUFRLEVBQUUsRUFmTztBQWdCakJDLFVBQU0sRUFBRTtBQWhCUyxHQUFuQjtBQW1CQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQWYsRUFBRSxTQUFGLElBQUFBLEVBQUUsV0FBRixZQUFBQSxFQUFFLENBQUVTLFFBQUosTUFBaUJKLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkMsUUFBckQsQ0EzQmlCLENBNkJqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDRTtBQUFBLGVBQ0U7QUFBQSxnQkFDRSw4RUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUU7QUFBSyxTQUFHLEVBQUVPLDRDQUFWO0FBQUEsaUJBQ0U7QUFBSyxXQUFHLEVBQUVDLGlEQUFWO0FBQUEsa0JBQXNCWixVQUFVLENBQUNDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHUyxXQUFXLElBQ1Y7QUFBSyxXQUFHLEVBQUVHLG1EQUFWO0FBQUEsbUJBQ0UsOEVBQUMsOERBQUQ7QUFBVyxjQUFJLEVBQUViO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRSw4RUFBQyw4REFBRDtBQUFXLGNBQUksRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixFQVFFO0FBQUssV0FBRyxFQUFFYyxnREFBVjtBQUFBLG1CQUNFO0FBQU0sYUFBRyxFQUFFQyxzREFBWDtBQUFBLG9CQUNFLDhFQUFDLGdEQUFEO0FBQU0sZ0JBQUksa0JBQVdmLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkwsRUFBM0IsQ0FBVjtBQUFBLHNCQUNFO0FBQUEsd0JBQUlFLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQkM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBTUU7QUFBTSxhQUFHLEVBQUVZLHNEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLEVBT0U7QUFBTSxhQUFHLEVBQUVDLG9EQUFYO0FBQUEsb0JBQ0c5Qiw0Q0FBSyxDQUFDYSxVQUFVLENBQUNFLFNBQVosQ0FBTCxDQUE0QmdCLE1BQTVCLENBQW1DLGVBQW5DO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQThCRSw4RUFBQyw0REFBRDtBQUFTLFlBQUksRUFBRWxCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlCRixFQStCRTtBQUFLLFdBQUcsRUFBRW1CLGtEQUFWO0FBQUEsa0JBQ0duQixVQUFVLENBQUNNLFFBQVgsQ0FBb0JjLEdBQXBCLENBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUNoQyxpQkFDRSw4RUFBQyx3Q0FBRDtBQUFrQixpQkFBSyxFQUFDLFFBQXhCO0FBQUEsc0JBQ0UsOEVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxxQkFBY0EsR0FBRyxDQUFDZCxJQUFsQixDQUFWO0FBQUEsd0JBQ0U7QUFBQSwwQkFBSWMsR0FBRyxDQUFDZDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBVWMsR0FBRyxDQUFDdkIsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBT0QsU0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxrQkFERjtBQWtERCxDQXRGRDs7R0FBTVQsSTtVQUNhRSx1RCxFQUVGQyx1RCxFQUVBSyxxRDs7O0tBTFhSLEk7QUF3RlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5mYjczNmNiNGRiNDliZGFlNmQyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4JztcclxuaW1wb3J0IHsgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHtcclxuICBwb3N0LFxyXG4gIHBvc3RUaXRsZSxcclxuICBidXR0b25Hcm91cCxcclxuICBwb3N0SW5mbyxcclxuICBwb3N0SW5mb1dyaXRlcixcclxuICBwb3N0SW5mb0J1bGxldCxcclxuICBwb3N0SW5mb0RhdGUsXHJcbiAgaGFzaHRhZ0JveCxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCBVcGRhdGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VcGRhdGVCdG4nO1xyXG5pbXBvcnQgRGVsZXRlQnRuIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGVsZXRlQnRuJztcclxuaW1wb3J0IExpa2VCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaWtlQnRuJztcclxuXHJcbmRheWpzLmxvY2FsZSgna28nKTtcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIC8vIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IHNpbmdsZVBvc3QgPSB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnKC3qsIAgLe2VmOuLpCkg7JmV7LSI67O07Y64JyxcclxuICAgIGNyZWF0ZWRBdDogJzIwMjEtMDUtMjAgMDg6MTg6NDAnLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgbmlja25hbWU6ICdhZG1pbjEnLFxyXG4gICAgfSxcclxuICAgIEV4cHJlc3Npb25zOiB7fSxcclxuICAgIEhhc2h0YWdzOiBbXHJcbiAgICAgIHsgaWQ6IDEsIG5hbWU6ICfsmZXstIjrs7QnIH0sXHJcbiAgICAgIHsgaWQ6IDIsIG5hbWU6ICfthYzsiqTtirgnIH0sXHJcbiAgICAgIHsgaWQ6IDMsIG5hbWU6ICfrsJjsi5zrsIDri7nrsJjsi5zsg4EnIH0sXHJcbiAgICAgIHsgaWQ6IDQsIG5hbWU6ICfrk5zrnbzrp4gnIH0sXHJcbiAgICBdLFxyXG4gICAgQ29tbWVudHM6IHt9LFxyXG4gICAgTGlrZXJzOiB7fSxcclxuICB9O1xyXG5cclxuICBjb25zdCB3cml0dGVuQnlNZSA9IG1lPy5uaWNrbmFtZSA9PT0gc2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICB0eXBlOiBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAvLyAgICAgZGF0YTogaWQsXHJcbiAgLy8gICB9KTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY3NzPXtwb3N0fT5cclxuICAgICAgICA8ZGl2IGNzcz17cG9zdFRpdGxlfT57c2luZ2xlUG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICB7d3JpdHRlbkJ5TWUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjc3M9e2J1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgPFVwZGF0ZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgICAgICA8RGVsZXRlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0SW5mb30+XHJcbiAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvV3JpdGVyfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7c2luZ2xlUG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPntzaW5nbGVQb3N0LlVzZXIubmlja25hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjc3M9e3Bvc3RJbmZvQnVsbGV0fT7Ctzwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9EYXRlfT5cclxuICAgICAgICAgICAge2RheWpzKHNpbmdsZVBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ1lZWVnrhYQgTU3sm5QgRETsnbwnKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjc3M9e2hhc2h0YWdCb3h9PlxyXG4gICAgICAgICAge3NpbmdsZVBvc3QuSGFzaHRhZ3MubWFwKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8VGFnIGtleT17dGFnLmlkfSBjb2xvcj1cInB1cnBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9oYXNodGFnLyR7dGFnLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPnt0YWcubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPExpa2VCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICA8ZGl2IGNzcz17aGFzaHRhZ0JveH0+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5IYXNodGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuaWR9IGNvbG9yPVwicHVycGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt0YWcubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3RhZy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9