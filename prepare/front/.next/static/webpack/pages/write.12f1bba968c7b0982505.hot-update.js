webpackHotUpdate_N_E("pages/write",{

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_ExpressionBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ExpressionBox */ "./components/ExpressionBox.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\write.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject7() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 20px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 40px;\n  height: 10px;\n  margin-bottom: 25px;\n  background-color: #48494b;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: none;\n  width: 220px;\n  padding: 5px;\n  font-size: 13px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  align-items: center;\n  flex-wrap: nowrap;\n\n  button {\n    margin-right: 5px;\n    margin-bottom: 5px;\n    font-size: 14px;\n    border: 1px solid #d3adf7;\n    border-radius: 2px;\n    color: #531dab;\n    background-color: #f9f0ff;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  input {\n    font-size: 14px;\n    border: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  padding: 4px 0;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  border: none;\n\n  &:focus {\n    border: none;\n    box-shadow: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px 20px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */







var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;
var writePage = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var titleBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var tagBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var tags = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var tagInfoBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
var line = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6());
var footerBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject7());

var Write = function Write() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.post;
  }),
      currentHashtags = _useSelector.currentHashtags,
      currentExpressions = _useSelector.currentExpressions;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      title = _useInput2[0],
      onChangeTitle = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 3),
      tag = _useInput4[0],
      onChangeTag = _useInput4[1],
      setTag = _useInput4[2];

  var onFocusInput = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    document.getElementById('tag-info').style.display = 'block';
  }, []);
  var onBlurInput = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    document.getElementById('tag-info').style.display = 'none';
  }, []);
  var onKeyPressTag = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault(); // 빈칸으로 입력하지 않았을때만 리스트에 추가

      if (tag.trim() !== '') {
        // 이미 있는 해시태그가 아닐때만 리스트에 추가
        if (!currentHashtags.includes(tag)) {
          // #을 붙여서 해시태그를 입력했을 때는 #을 떼고
          if (tag[0] === '#') {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_HASHTAG_REQUEST"],
              data: tag.slice(1)
            });
          } else {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_HASHTAG_REQUEST"],
              data: tag
            });
          }
        }
      }

      setTag('');
    }
  }, [tag]);
  var onClickTag = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (v) {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_HASHTAG_REQUEST"],
      data: v
    });
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: writePage,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
      css: titleBox,
      placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
      value: title,
      onChange: onChangeTitle,
      autoSize: {
        minRows: 1
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: tagBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: tags,
        children: [currentHashtags.map(function (v, index) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return onClickTag(v);
            },
            children: v
          }, v, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, _this);
        }), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
          value: tag,
          onChange: onChangeTag,
          onKeyPress: onKeyPressTag,
          onFocus: onFocusInput,
          onBlur: onBlurInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "tag-info",
        css: tagInfoBox,
        children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: line
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExpressionBox__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      css: footerBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ArrowLeftOutlined, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "\uB9CC\uB4E4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 5
  }, _this);
};

_s(Write, "+zHlmBpmePZY+o25BJAH7iiBjd8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Write;
/* harmony default export */ __webpack_exports__["default"] = (Write);

var _c;

$RefreshReg$(_c, "Write");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsInRpdGxlQm94IiwidGFnQm94IiwidGFncyIsInRhZ0luZm9Cb3giLCJsaW5lIiwiZm9vdGVyQm94IiwiV3JpdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJjdXJyZW50SGFzaHRhZ3MiLCJjdXJyZW50RXhwcmVzc2lvbnMiLCJ1c2VJbnB1dCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInRhZyIsIm9uQ2hhbmdlVGFnIiwic2V0VGFnIiwib25Gb2N1c0lucHV0IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwib25CbHVySW5wdXQiLCJvbktleVByZXNzVGFnIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImluY2x1ZGVzIiwidHlwZSIsIkFERF9IQVNIVEFHX1JFUVVFU1QiLCJkYXRhIiwic2xpY2UiLCJvbkNsaWNrVGFnIiwidiIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJtaW5Sb3dzIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTtBQUVSLElBQU1FLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7QUFNQSxJQUFNQyxRQUFRLEdBQUdELDBEQUFILG9CQUFkO0FBY0EsSUFBTUUsTUFBTSxHQUFHRiwwREFBSCxvQkFBWjtBQUlBLElBQU1HLElBQUksR0FBR0gsMERBQUgsb0JB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cy93cml0ZS4xMmYxYmJhOTY4YzdiMDk4MjUwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQUREX0hBU0hUQUdfUkVRVUVTVCwgUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgRXhwcmVzc2lvbkJveCBmcm9tICcuLi9jb21wb25lbnRzL0V4cHJlc3Npb25Cb3gnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCB3cml0ZVBhZ2UgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCB0aXRsZUJveCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0JveCA9IGNzc2BcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgdGFncyA9IGNzc2BcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNhZGY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM1MzFkYWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMGZmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdGFnSW5mb0JveCA9IGNzc2BcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTE4ZmY7XHJcbmA7XHJcblxyXG5jb25zdCBsaW5lID0gY3NzYFxyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ5NGI7XHJcbmA7XHJcblxyXG5jb25zdCBmb290ZXJCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgV3JpdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgY3VycmVudEhhc2h0YWdzLCBjdXJyZW50RXhwcmVzc2lvbnMgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbdGFnLCBvbkNoYW5nZVRhZywgc2V0VGFnXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Gb2N1c0lucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQmx1cklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uS2V5UHJlc3NUYWcgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJywnKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIOu5iOy5uOycvOuhnCDsnoXroKXtlZjsp4Ag7JWK7JWY7J2E65WM66eMIOumrOyKpO2KuOyXkCDstpTqsIBcclxuICAgICAgICBpZiAodGFnLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgIC8vIOydtOuvuCDsnojripQg7ZW07Iuc7YOc6re46rCAIOyVhOuLkOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnRIYXNodGFncy5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIC8vICPsnYQg67aZ7Jes7IScIO2VtOyLnO2DnOq3uOulvCDsnoXroKXtlojsnYQg65WM64qUICPsnYQg65a86rOgXHJcbiAgICAgICAgICAgIGlmICh0YWdbMF0gPT09ICcjJykge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcuc2xpY2UoMSksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRhZyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUYWcoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RhZ11cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNsaWNrVGFnID0gdXNlQ2FsbGJhY2soKHYpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgZGF0YTogdixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICBjc3M9e3RpdGxlQm94fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRpdGxlfVxyXG4gICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjc3M9e3RhZ0JveH0+XHJcbiAgICAgICAgPGRpdiBjc3M9e3RhZ3N9PlxyXG4gICAgICAgICAge2N1cnJlbnRIYXNodGFncy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Z9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tUYWcodil9PlxyXG4gICAgICAgICAgICAgICAge3Z9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2DnOq3uOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUYWd9XHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3NUYWd9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXNJbnB1dH1cclxuICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJJbnB1dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInRhZy1pbmZvXCIgY3NzPXt0YWdJbmZvQm94fT5cclxuICAgICAgICAgIOyJvO2RnCDtmLnsnYAg7JeU7YSw66W8IOyeheugpe2VmOyXrCDtg5zqt7jrpbwg65Ox66Gd7ZWgIOyImCDsnojsirXri4jri6QuIOuTseuhneuQnCDtg5zqt7jrpbxcclxuICAgICAgICAgIO2BtOumre2VmOuptCDsgq3soJzrkKnri4jri6QuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNzcz17bGluZX0+PC9kaXY+XHJcbiAgICAgIDxFeHByZXNzaW9uQm94IC8+XHJcbiAgICAgIDxmb290ZXIgY3NzPXtmb290ZXJCb3h9PlxyXG4gICAgICAgIDxBcnJvd0xlZnRPdXRsaW5lZCAvPlxyXG4gICAgICAgIDxidXR0b24+66eM65Ok6riwPC9idXR0b24+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9