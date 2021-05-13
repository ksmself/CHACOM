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
      lineNumber: 130,
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
            lineNumber: 141,
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
          lineNumber: 146,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "tag-info",
        css: tagInfoBox,
        children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: line
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExpressionBox__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ArrowLeftOutlined, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "\uB9CC\uB4E4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsInRpdGxlQm94IiwidGFnQm94IiwidGFncyIsInRhZ0luZm9Cb3giLCJsaW5lIiwiV3JpdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJjdXJyZW50SGFzaHRhZ3MiLCJjdXJyZW50RXhwcmVzc2lvbnMiLCJ1c2VJbnB1dCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInRhZyIsIm9uQ2hhbmdlVGFnIiwic2V0VGFnIiwib25Gb2N1c0lucHV0IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwib25CbHVySW5wdXQiLCJvbktleVByZXNzVGFnIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImluY2x1ZGVzIiwidHlwZSIsIkFERF9IQVNIVEFHX1JFUVVFU1QiLCJkYXRhIiwic2xpY2UiLCJvbkNsaWNrVGFnIiwidiIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJtaW5Sb3dzIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7SUFFUUEsUSxHQUFhQywwQyxDQUFiRCxRO0FBRVIsSUFBTUUsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtBQU1BLElBQU1DLFFBQVEsR0FBR0QsMERBQUgsb0JBQWQ7QUFjQSxJQUFNRSxNQUFNLEdBQUdGLDBEQUFILG9CQUFaO0FBSUEsSUFBTUcsSUFBSSxHQUFHSCwwREFBSCxvQkFBVjtBQXdCQSxJQUFNSSxVQUFVLEdB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QUosRUFBYztBQUNqQyxpQkFDRTtBQUFnQixtQkFBTyxFQUFFO0FBQUEscUJBQU1MLFVBQVUsQ0FBQ0MsQ0FBRCxDQUFoQjtBQUFBLGFBQXpCO0FBQUEsc0JBQ0dBO0FBREgsYUFBYUEsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0QsU0FOQSxDQURILEVBUUU7QUFDRSxxQkFBVyxFQUFDLHlEQURkO0FBRUUsZUFBSyxFQUFFckIsR0FGVDtBQUdFLGtCQUFRLEVBQUVDLFdBSFo7QUFJRSxvQkFBVSxFQUFFUyxhQUpkO0FBS0UsaUJBQU8sRUFBRVAsWUFMWDtBQU1FLGdCQUFNLEVBQUVNO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQWtCRTtBQUFLLFVBQUUsRUFBQyxVQUFSO0FBQW1CLFdBQUcsRUFBRXRCLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLEVBK0JFO0FBQUssU0FBRyxFQUFFQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkYsRUFnQ0UsOEVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRixFQWlDRTtBQUFBLGlCQUNFLDhFQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBM0ZEOztHQUFNQyxLO1VBQ2FFLHVELEVBQytCQyx1RCxFQUlqQkssdUQsRUFDSUEsdUQ7OztLQVAvQlIsSztBQTZGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuMTA4NGEyOWMyZTYzYWMzZjFiNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEFERF9IQVNIVEFHX1JFUVVFU1QsIFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEV4cHJlc3Npb25Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94JztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3Qgd3JpdGVQYWdlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgdGl0bGVCb3ggPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdCb3ggPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IHRhZ3MgPSBjc3NgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzYWRmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjNTMxZGFiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjBmZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0luZm9Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5gO1xyXG5cclxuY29uc3QgbGluZSA9IGNzc2BcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0OTRiO1xyXG5gO1xyXG5cclxuY29uc3QgV3JpdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgY3VycmVudEhhc2h0YWdzLCBjdXJyZW50RXhwcmVzc2lvbnMgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbdGFnLCBvbkNoYW5nZVRhZywgc2V0VGFnXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Gb2N1c0lucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQmx1cklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uS2V5UHJlc3NUYWcgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJywnKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIOu5iOy5uOycvOuhnCDsnoXroKXtlZjsp4Ag7JWK7JWY7J2E65WM66eMIOumrOyKpO2KuOyXkCDstpTqsIBcclxuICAgICAgICBpZiAodGFnLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgIC8vIOydtOuvuCDsnojripQg7ZW07Iuc7YOc6re46rCAIOyVhOuLkOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnRIYXNodGFncy5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIC8vICPsnYQg67aZ7Jes7IScIO2VtOyLnO2DnOq3uOulvCDsnoXroKXtlojsnYQg65WM64qUICPsnYQg65a86rOgXHJcbiAgICAgICAgICAgIGlmICh0YWdbMF0gPT09ICcjJykge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcuc2xpY2UoMSksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRhZyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUYWcoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RhZ11cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNsaWNrVGFnID0gdXNlQ2FsbGJhY2soKHYpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgZGF0YTogdixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICBjc3M9e3RpdGxlQm94fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRpdGxlfVxyXG4gICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjc3M9e3RhZ0JveH0+XHJcbiAgICAgICAgPGRpdiBjc3M9e3RhZ3N9PlxyXG4gICAgICAgICAge2N1cnJlbnRIYXNodGFncy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Z9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tUYWcodil9PlxyXG4gICAgICAgICAgICAgICAge3Z9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2DnOq3uOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUYWd9XHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3NUYWd9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXNJbnB1dH1cclxuICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJJbnB1dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInRhZy1pbmZvXCIgY3NzPXt0YWdJbmZvQm94fT5cclxuICAgICAgICAgIOyJvO2RnCDtmLnsnYAg7JeU7YSw66W8IOyeheugpe2VmOyXrCDtg5zqt7jrpbwg65Ox66Gd7ZWgIOyImCDsnojsirXri4jri6QuIOuTseuhneuQnCDtg5zqt7jrpbxcclxuICAgICAgICAgIO2BtOumre2VmOuptCDsgq3soJzrkKnri4jri6QuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNzcz17bGluZX0+PC9kaXY+XHJcbiAgICAgIDxFeHByZXNzaW9uQm94IC8+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIC8+XHJcbiAgICAgICAgPGJ1dHRvbj7rp4zrk6TquLA8L2J1dHRvbj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=