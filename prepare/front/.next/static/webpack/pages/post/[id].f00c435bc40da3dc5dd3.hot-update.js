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

  var writtenByMe = Boolean((me === null || me === void 0 ? void 0 : me.id) === (singlePost === null || singlePost === void 0 ? void 0 : singlePost.User.id)); // const [writtenByMe, setWrittenByMe] = useState(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiZGF5anMiLCJsb2NhbGUiLCJQb3N0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJzaW5nbGVQb3N0IiwidXNlciIsIm1lIiwid3JpdHRlbkJ5TWUiLCJCb29sZWFuIiwiaWQiLCJVc2VyIiwidXNlU3RhdGUiLCJjdXJJbmRleCIsInNldEN1ckluZGV4IiwiZ29Ub1ByZXYiLCJ1c2VDYWxsYmFjayIsIkV4cHJlc3Npb25zIiwibGVuZ3RoIiwicHJldiIsImdvVG9OZXh0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsInBvc3RUaXRsZSIsInRpdGxlIiwiYnV0dG9uR3JvdXAiLCJwb3N0SW5mb0JveCIsInBvc3RJbmZvV3JpdGVyIiwibmlja25hbWUiLCJwb3N0SW5mb0J1bGxldCIsInBvc3RJbmZvRGF0ZSIsImNyZWF0ZWRBdCIsImZvcm1hdCIsImhhc2h0YWdCb3giLCJIYXNodGFncyIsIm1hcCIsInRhZyIsIm5hbWUiLCJjb250ZW50Qm94IiwibGVmdEFycm93IiwiZXhwcmVzc2lvbk51bSIsInBpbnlpbiIsIm1lYW5pbmciLCJyaWdodEFycm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBZ0JBO0FBQ0E7QUFDQTtBQUlBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEscUJBQ01DLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRGpCO0FBQUEsTUFDVEMsVUFEUyxnQkFDVEEsVUFEUzs7QUFBQSxzQkFFRkgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FGVDtBQUFBLE1BRVRDLEVBRlMsaUJBRVRBLEVBRlM7O0FBR2pCLE1BQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDLENBQUFGLEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFRyxFQUFKLE9BQVdMLFVBQVgsYUFBV0EsVUFBWCx1QkFBV0EsVUFBVSxDQUFFTSxJQUFaLENBQWlCRCxFQUE1QixDQUFELENBQTNCLENBSGlCLENBS2pCO0FBQ0E7QUFDQTs7QUFQaUIsa0JBU2VFLHNEQUFRLENBQUMsQ0FBRCxDQVR2QjtBQUFBLE1BU1ZDLFFBVFU7QUFBQSxNQVNBQyxXQVRBOztBQVdqQixNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNqQyxRQUFJWCxVQUFKLEVBQWdCO0FBQ2QsVUFBSVEsUUFBUSxLQUFLLENBQWpCLEVBQW9CQyxXQUFXLENBQUNULFVBQVUsQ0FBQ1ksV0FBWCxDQUF1QkMsTUFBdkIsR0FBZ0MsQ0FBakMsQ0FBWCxDQUFwQixLQUNLSixXQUFXLENBQUMsVUFBQ0ssSUFBRDtBQUFBLGVBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLE9BQUQsQ0FBWDtBQUNOO0FBQ0YsR0FMMkIsRUFLekIsQ0FBQ2QsVUFBRCxFQUFhUSxRQUFiLENBTHlCLENBQTVCO0FBT0EsTUFBTU8sUUFBUSxHQUFHSix5REFBVyxDQUFDLFlBQU07QUFDakMsUUFBSVgsVUFBSixFQUFnQjtBQUNkLFVBQUlRLFFBQVEsS0FBS1IsVUFBVSxDQUFDWSxXQUFYLENBQXVCQyxNQUF2QixHQUFnQyxDQUFqRCxFQUFvREosV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFwRCxLQUNLQSxXQUFXLENBQUMsVUFBQ0ssSUFBRDtBQUFBLGVBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLE9BQUQsQ0FBWDtBQUNOO0FBQ0YsR0FMMkIsRUFLekIsQ0FBQ2QsVUFBRCxFQUFhUSxRQUFiLENBTHlCLENBQTVCO0FBT0FRLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsV0FBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxXQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFBQSxlQUNFO0FBQUEsZ0JBQ0UsOEVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlHSCxVQUFVLElBQ1Q7QUFBSyxTQUFHLEVBQUVELDRDQUFWO0FBQUEsaUJBQ0U7QUFBSyxXQUFHLEVBQUVvQixpREFBVjtBQUFBLGtCQUFzQm5CLFVBQVUsQ0FBQ29CO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHakIsV0FBVyxJQUNWO0FBQUssV0FBRyxFQUFFa0IsbURBQVY7QUFBQSxtQkFDRSw4RUFBQyw2REFBRDtBQUFXLGNBQUksRUFBRXJCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRSw4RUFBQyw2REFBRDtBQUFXLGNBQUksRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixFQVFFO0FBQUssV0FBRyxFQUFFc0IsbURBQVY7QUFBQSxtQkFDRTtBQUFBLHFCQUNFO0FBQU0sZUFBRyxFQUFFQyxzREFBWDtBQUFBLHNCQUNFLDhFQUFDLGdEQUFEO0FBQU0sa0JBQUksa0JBQVd2QixVQUFYLGFBQVdBLFVBQVgsdUJBQVdBLFVBQVUsQ0FBRU0sSUFBWixDQUFpQkQsRUFBNUIsQ0FBVjtBQUFBLHdCQUNFO0FBQUEsMEJBQUlMLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQmtCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQU1FO0FBQU0sZUFBRyxFQUFFQyxzREFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixFQU9FO0FBQU0sZUFBRyxFQUFFQyxvREFBWDtBQUFBLHNCQUNHaEMsNENBQUssQ0FBQ00sVUFBVSxDQUFDMkIsU0FBWixDQUFMLENBQTRCQyxNQUE1QixDQUFtQyxlQUFuQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBWUUsOEVBQUMsNERBQUQ7QUFBUyxjQUFJLEVBQUU1QjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsRUFzQkU7QUFBSyxXQUFHLEVBQUU2QixrREFBVjtBQUFBLGtCQUNHN0IsVUFBVSxDQUFDOEIsUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDLGlCQUNFLDhFQUFDLHdDQUFEO0FBQWtCLGlCQUFLLEVBQUMsUUFBeEI7QUFBQSxzQkFDRSw4RUFBQyxnREFBRDtBQUFNLGtCQUFJLHFCQUFjQSxHQUFHLENBQUNDLElBQWxCLENBQVY7QUFBQSx3QkFDRTtBQUFBLDBCQUFJRCxHQUFHLENBQUNDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFVRCxHQUFHLENBQUMzQixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFPRCxTQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixFQWlDRTtBQUFLLFdBQUcsRUFBRTZCLGtEQUFWO0FBQUEsbUJBQ0U7QUFDRSxtQkFBUyxFQUFDLHFCQURaO0FBRUUsYUFBRyxFQUFFQyxpREFGUDtBQUdFLGlCQUFPLEVBQUV6QjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFNRTtBQUFLLGFBQUcsRUFBRTBCLHFEQUFWO0FBQUEsb0JBQ0U7QUFBQSx1QkFDRzVCLFFBQVEsR0FBRyxDQURkLFNBQ29CUixVQUFVLENBQUNZLFdBQVgsQ0FBdUJDLE1BRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsRUFXRTtBQUFLLGFBQUcsRUFBRXdCLDhDQUFWO0FBQUEsb0JBQW1CckMsVUFBVSxDQUFDWSxXQUFYLENBQXVCSixRQUF2QixFQUFpQzZCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsRUFZRTtBQUFLLGFBQUcsRUFBRUMsK0NBQVY7QUFBQSxvQkFBb0J0QyxVQUFVLENBQUNZLFdBQVgsQ0FBdUJKLFFBQXZCLEVBQWlDOEI7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixFQWFFO0FBQ0UsbUJBQVMsRUFBQyxzQkFEWjtBQUVFLGFBQUcsRUFBRUMsa0RBRlA7QUFHRSxpQkFBTyxFQUFFeEI7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURGO0FBOERELENBM0ZEOztHQUFNbkIsSTtVQUNtQkMsdUQsRUFDUkEsdUQ7OztLQUZYRCxJOztBQW1IU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmYwMGM0MzViYzQwZGEzZGM1ZGQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7XHJcbiAgcG9zdCxcclxuICBwb3N0VGl0bGUsXHJcbiAgYnV0dG9uR3JvdXAsXHJcbiAgcG9zdEluZm9Cb3gsXHJcbiAgcG9zdEluZm9Xcml0ZXIsXHJcbiAgcG9zdEluZm9CdWxsZXQsXHJcbiAgcG9zdEluZm9EYXRlLFxyXG4gIGhhc2h0YWdCb3gsXHJcbiAgY29udGVudEJveCxcclxuICBsZWZ0QXJyb3csXHJcbiAgcmlnaHRBcnJvdyxcclxuICBleHByZXNzaW9uTnVtLFxyXG4gIHBpbnlpbixcclxuICBtZWFuaW5nLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFVwZGF0ZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VwZGF0ZUJ0bic7XHJcbmltcG9ydCBEZWxldGVCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZWxldGVCdG4nO1xyXG5pbXBvcnQgTGlrZUJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpa2VCdG4nO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5kYXlqcy5sb2NhbGUoJ2tvJyk7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHdyaXR0ZW5CeU1lID0gQm9vbGVhbihtZT8uaWQgPT09IHNpbmdsZVBvc3Q/LlVzZXIuaWQpO1xyXG5cclxuICAvLyBjb25zdCBbd3JpdHRlbkJ5TWUsIHNldFdyaXR0ZW5CeU1lXSA9IHVzZVN0YXRlKFxyXG4gIC8vICAgQm9vbGVhbihtZT8uaWQgPT09IHNpbmdsZVBvc3Q/LlVzZXIuaWQpXHJcbiAgLy8gKTtcclxuXHJcbiAgY29uc3QgW2N1ckluZGV4LCBzZXRDdXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZ29Ub1ByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoc2luZ2xlUG9zdCkge1xyXG4gICAgICBpZiAoY3VySW5kZXggPT09IDApIHNldEN1ckluZGV4KHNpbmdsZVBvc3QuRXhwcmVzc2lvbnMubGVuZ3RoIC0gMSk7XHJcbiAgICAgIGVsc2Ugc2V0Q3VySW5kZXgoKHByZXYpID0+IHByZXYgLSAxKTtcclxuICAgIH1cclxuICB9LCBbc2luZ2xlUG9zdCwgY3VySW5kZXhdKTtcclxuXHJcbiAgY29uc3QgZ29Ub05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoc2luZ2xlUG9zdCkge1xyXG4gICAgICBpZiAoY3VySW5kZXggPT09IHNpbmdsZVBvc3QuRXhwcmVzc2lvbnMubGVuZ3RoIC0gMSkgc2V0Q3VySW5kZXgoMCk7XHJcbiAgICAgIGVsc2Ugc2V0Q3VySW5kZXgoKHByZXYpID0+IHByZXYgKyAxKTtcclxuICAgIH1cclxuICB9LCBbc2luZ2xlUG9zdCwgY3VySW5kZXhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHdyaXR0ZW5CeU1lKTtcclxuICB9LCBbd3JpdHRlbkJ5TWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAge3NpbmdsZVBvc3QgJiYgKFxyXG4gICAgICAgIDxkaXYgY3NzPXtwb3N0fT5cclxuICAgICAgICAgIDxkaXYgY3NzPXtwb3N0VGl0bGV9PntzaW5nbGVQb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAge3dyaXR0ZW5CeU1lICYmIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2J1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICA8VXBkYXRlQnRuIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZUJ0biBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNzcz17cG9zdEluZm9Cb3h9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9Xcml0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7c2luZ2xlUG9zdD8uVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9CdWxsZXR9PsK3PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNzcz17cG9zdEluZm9EYXRlfT5cclxuICAgICAgICAgICAgICAgIHtkYXlqcyhzaW5nbGVQb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZ64WEIE1N7JuUIERE7J28Jyl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpa2VCdG4gcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2hhc2h0YWdCb3h9PlxyXG4gICAgICAgICAgICB7c2luZ2xlUG9zdC5IYXNodGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGFnIGtleT17dGFnLmlkfSBjb2xvcj1cInB1cnBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt0YWcubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57dGFnLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2NvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIlxyXG4gICAgICAgICAgICAgIGNzcz17bGVmdEFycm93fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9QcmV2fVxyXG4gICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbk51bX0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjdXJJbmRleCArIDF9IC8ge3NpbmdsZVBvc3QuRXhwcmVzc2lvbnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e3Bpbnlpbn0+e3NpbmdsZVBvc3QuRXhwcmVzc2lvbnNbY3VySW5kZXhdLnBpbnlpbn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e21lYW5pbmd9PntzaW5nbGVQb3N0LkV4cHJlc3Npb25zW2N1ckluZGV4XS5tZWFuaW5nfTwvZGl2PlxyXG4gICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCJcclxuICAgICAgICAgICAgICBjc3M9e3JpZ2h0QXJyb3d9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z29Ub05leHR9XHJcbiAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXHJcbiAgYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=