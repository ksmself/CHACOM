webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/LikeBtn.js":
/*!*******************************!*\
  !*** ./components/LikeBtn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\LikeBtn.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80px;\n  padding: 4px 12px;\n  border: 3px solid #cfcfcf;\n  border-radius: 20px;\n\n  @media (min-width: 768px) {\n    width: 100px;\n    border-radius: 25px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 120px;\n    border-radius: 30px;\n  }\n\n  span {\n    font-size: 18px;\n\n    @media (min-width: 768px) {\n      font-size: 24px;\n    }\n\n    @media (min-width: 1024px) {\n      font-size: 30px;\n    }\n\n    &:first-of-type:hover {\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .ant-modal-confirm-body .ant-modal-confirm-title{\n    font-weight: 700;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */







var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["createGlobalStyle"])(_templateObject());
_c = Global;
var likeBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());

var LikeBtn = function LikeBtn(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts;

  post = mainPosts.find(function (v) {
    return v.id === post.id;
  });
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (!id) {
      return antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].error({
        title: '로그인이 필요합니다.'
      });
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: likeBox,
      children: [liked ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["HeartTwoTone"], {
        twoToneColor: "#ff748c",
        onClick: onUnLike
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, _this) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["HeartOutlined"], {
        onClick: onLike
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: post.Likers ? post.Likers.length : 0
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(LikeBtn, "t03lox1JBAZ8CUngzBG/ssajUeI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c2 = LikeBtn;
/* harmony default export */ __webpack_exports__["default"] = (LikeBtn);

var _c, _c2;

$RefreshReg$(_c, "Global");
$RefreshReg$(_c2, "LikeBtn");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaWtlQnRuLmpzIl0sIm5hbWVzIjpbIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwibGlrZUJveCIsImNzcyIsIkxpa2VCdG4iLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIm1haW5Qb3N0cyIsImZpbmQiLCJ2IiwibGlrZWQiLCJMaWtlcnMiLCJvbkxpa2UiLCJ1c2VDYWxsYmFjayIsIk1vZGFsIiwiZXJyb3IiLCJ0aXRsZSIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvblVuTGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyRUFBSCxtQkFBWjtLQUFNRCxNO0FBTU4sSUFBTUUsT0FBTyxHQUFHQywwREFBSCxvQkFBYjs7QUFvQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM1QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSw2QkFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXRCLG1EQUFXLGVBQWVKLEVBQTFCO0FBQUEsR0FBRCxDQUF0Qjs7QUFGNEIscUJBR05DLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0wsSUFBakI7QUFBQSxHQUFELENBSEw7QUFBQSxNQUdwQlEsU0FIb0IsZ0JBR3BCQSxTQUhvQjs7QUFJNUJSLE1BQUksR0FBR1EsU0FBUyxDQUFDQyxJQUFWLENBQWUsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ1AsRUFBRixLQUFTSCxJQUFJLENBQUNHLEVBQXJCO0FBQUEsR0FBZixDQUFQO0FBQ0EsTUFBTVEsS0FBSyxHQUFHWCxJQUFJLENBQUNZLE1BQUwsQ0FBWUgsSUFBWixDQUFpQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDUCxFQUFGLEtBQVNBLEVBQWhCO0FBQUEsR0FBakIsQ0FBZDtBQUVBLE1BQU1VLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQy9CLFFBQUksQ0FBQ1gsRUFBTCxFQUFTO0FBQ1AsYUFBT1ksMENBQUssQ0FBQ0MsS0FBTixDQUFZO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQVosQ0FBUDtBQUNEOztBQUNELFdBQU9oQixRQUFRLENBQUM7QUFDZGlCLFVBQUksRUFBRUMsZ0VBRFE7QUFFZEMsVUFBSSxFQUFFcEIsSUFBSSxDQUFDRztBQUZHLEtBQUQsQ0FBZjtBQUlELEdBUnlCLEVBUXZCLENBQUNBLEVBQUQsQ0FSdUIsQ0FBMUI7QUFVQSxNQUFNa0IsUUFBUSxHQUFHUCx5REFBVyxDQUFDLFlBQU07QUFDakNiLFlBQVEsQ0FBQztBQUNQaUIsVUFBSSxFQUFFSSxrRUFEQztBQUVQRixVQUFJLEVBQUVwQixJQUFJLENBQUNHO0FBRkosS0FBRCxDQUFSO0FBSUQsR0FMMkIsRUFLekIsRUFMeUIsQ0FBNUI7QUFPQSxTQUNFO0FBQUEsZUFDRSw4RUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUssU0FBRyxFQUFFTixPQUFWO0FBQUEsaUJBQ0djLEtBQUssR0FDSiw4RUFBQyw4REFBRDtBQUFjLG9CQUFZLEVBQUMsU0FBM0I7QUFBcUMsZUFBTyxFQUFFVTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREksR0FHSiw4RUFBQywrREFBRDtBQUFlLGVBQU8sRUFBRVI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLEVBTUU7QUFBQSxrQkFBT2IsSUFBSSxDQUFDWSxNQUFMLEdBQWNaLElBQUksQ0FBQ1ksTUFBTCxDQUFZVyxNQUExQixHQUFtQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQWFELENBckNEOztHQUFNeEIsTztVQUNhRyx1RCxFQUNORSx1RCxFQUNXQSx1RDs7O01BSGxCTCxPO0FBdUNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uN2ZmZTFjZDQ1MTQ4ZWY4OGI0YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgSGVhcnRUd29Ub25lLCBIZWFydE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IExJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuYW50LW1vZGFsLWNvbmZpcm0tYm9keSAuYW50LW1vZGFsLWNvbmZpcm0tdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGxpa2VCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjZmNmY2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmaXJzdC1vZi10eXBlOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExpa2VCdG4gPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBwb3N0ID0gbWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuaWQpO1xyXG4gIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG5cclxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBNb2RhbC5lcnJvcih7IHRpdGxlOiAn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25Vbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxkaXYgY3NzPXtsaWtlQm94fT5cclxuICAgICAgICB7bGlrZWQgPyAoXHJcbiAgICAgICAgICA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNmZjc0OGNcIiBvbkNsaWNrPXtvblVuTGlrZX0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEhlYXJ0T3V0bGluZWQgb25DbGljaz17b25MaWtlfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHNwYW4+e3Bvc3QuTGlrZXJzID8gcG9zdC5MaWtlcnMubGVuZ3RoIDogMH08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpa2VCdG47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=