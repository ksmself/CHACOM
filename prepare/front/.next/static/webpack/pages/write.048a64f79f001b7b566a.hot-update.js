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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_ExpressionBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ExpressionBox */ "./components/ExpressionBox.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\write.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject8() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 60px;\n  padding: 15px;\n\n  svg {\n    font-size: 20px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 40px;\n  height: 10px;\n  margin-bottom: 25px;\n  background-color: #48494b;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: none;\n  width: 220px;\n  padding: 5px;\n  font-size: 13px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  align-items: center;\n  flex-wrap: nowrap;\n\n  button {\n    margin-right: 5px;\n    margin-bottom: 5px;\n    font-size: 14px;\n    border: 1px solid #d3adf7;\n    border-radius: 2px;\n    color: #531dab;\n    background-color: #f9f0ff;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  input {\n    font-size: 14px;\n    border: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-bottom: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  padding: 4px 0;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  border: none;\n\n  &:focus {\n    border: none;\n    box-shadow: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px 20px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */








var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;
var writePage = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var writeBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var titleBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var tagBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var tags = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
var tagInfoBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6());
var line = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject7());
var footerBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject8());

var Write = function Write() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.post;
  }),
      currentHashtags = _useSelector.currentHashtags,
      currentExpressions = _useSelector.currentExpressions;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      title = _useInput2[0],
      onChangeTitle = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
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
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["ADD_HASHTAG_REQUEST"],
              data: tag.slice(1)
            });
          } else {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["ADD_HASHTAG_REQUEST"],
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["REMOVE_HASHTAG_REQUEST"],
      data: v
    });
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: writePage,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: writeBox,
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
        lineNumber: 151,
        columnNumber: 9
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
              lineNumber: 162,
              columnNumber: 17
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
            lineNumber: 167,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "tag-info",
          css: tagInfoBox,
          children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: line
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExpressionBox__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      css: footerBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["ArrowLeftOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "\uB9CC\uB4E4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 5
  }, _this);
};

_s(Write, "+zHlmBpmePZY+o25BJAH7iiBjd8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsIndyaXRlQm94IiwidGl0bGVCb3giLCJ0YWdCb3giLCJ0YWdzIiwidGFnSW5mb0JveCIsImxpbmUiLCJmb290ZXJCb3giLCJXcml0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImN1cnJlbnRIYXNodGFncyIsImN1cnJlbnRFeHByZXNzaW9ucyIsInVzZUlucHV0IiwidGl0bGUiLCJvbkNoYW5nZVRpdGxlIiwidGFnIiwib25DaGFuZ2VUYWciLCJzZXRUYWciLCJvbkZvY3VzSW5wdXQiLCJ1c2VDYWxsYmFjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkJsdXJJbnB1dCIsIm9uS2V5UHJlc3NUYWciLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiaW5jbHVkZXMiLCJ0eXBlIiwiQUREX0hBU0hUQUdfUkVRVUVTVCIsImRhdGEiLCJzbGljZSIsIm9uQ2xpY2tUYWciLCJ2IiwiUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCIsIm1pblJvd3MiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTtBQUVSLElBQU1FLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7QUFJQSxJQUFNQyxRQUFRLEdBQUdELDBEQUFILG9CQUFkO0FBTUEsSUFBTUUsUUFBUSxHQUFHRiwwREFBSCxvQkFBZDtBQWNB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QUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0E3RkQ7O0dBQU1DLEs7VUFDYUUsdUQsRUFDK0JDLHVELEVBSWpCSyx1RCxFQUNJQSx1RDs7O0tBUC9CUixLO0FBK0ZTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS4wNDhhNjRmNzlmMDAxYjdiNTY2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcnJvd0xlZnRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEFERF9IQVNIVEFHX1JFUVVFU1QsIFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEV4cHJlc3Npb25Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94JztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3Qgd3JpdGVQYWdlID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IHdyaXRlQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgdGl0bGVCb3ggPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdCb3ggPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IHRhZ3MgPSBjc3NgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzYWRmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjNTMxZGFiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjBmZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0luZm9Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5gO1xyXG5cclxuY29uc3QgbGluZSA9IGNzc2BcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0OTRiO1xyXG5gO1xyXG5cclxuY29uc3QgZm9vdGVyQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGN1cnJlbnRIYXNodGFncywgY3VycmVudEV4cHJlc3Npb25zIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgb25DaGFuZ2VUaXRsZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3RhZywgb25DaGFuZ2VUYWcsIHNldFRhZ10gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uRm9jdXNJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkJsdXJJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbktleVByZXNzVGFnID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcsJykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyDruYjsubjsnLzroZwg7J6F66Cl7ZWY7KeAIOyViuyVmOydhOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgaWYgKHRhZy50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAvLyDsnbTrr7gg7J6I64qUIO2VtOyLnO2DnOq3uOqwgCDslYTri5DrlYzrp4wg66as7Iqk7Yq47JeQIOy2lOqwgFxyXG4gICAgICAgICAgaWYgKCFjdXJyZW50SGFzaHRhZ3MuaW5jbHVkZXModGFnKSkge1xyXG4gICAgICAgICAgICAvLyAj7J2EIOu2meyXrOyEnCDtlbTsi5ztg5zqt7jrpbwg7J6F66Cl7ZaI7J2EIOuVjOuKlCAj7J2EIOuWvOqzoFxyXG4gICAgICAgICAgICBpZiAodGFnWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGFnLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGFnKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt0YWddXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1RhZyA9IHVzZUNhbGxiYWNrKCh2KSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHYsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17d3JpdGVQYWdlfT5cclxuICAgICAgPGRpdiBjc3M9e3dyaXRlQm94fT5cclxuICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIGNzcz17dGl0bGVCb3h9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9XHJcbiAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNzcz17dGFnQm94fT5cclxuICAgICAgICAgIDxkaXYgY3NzPXt0YWdzfT5cclxuICAgICAgICAgICAge2N1cnJlbnRIYXNodGFncy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXt2fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrVGFnKHYpfT5cclxuICAgICAgICAgICAgICAgICAge3Z9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtg5zqt7jrpbwg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRhZ31cclxuICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzVGFnfVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXNJbnB1dH1cclxuICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cklucHV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwidGFnLWluZm9cIiBjc3M9e3RhZ0luZm9Cb3h9PlxyXG4gICAgICAgICAgICDsibztkZwg7Zi57J2AIOyXlO2EsOulvCDsnoXroKXtlZjsl6wg7YOc6re466W8IOuTseuhne2VoCDsiJgg7J6I7Iq164uI64ukLiDrk7HroZ3rkJwg7YOc6re466W8XHJcbiAgICAgICAgICAgIO2BtOumre2VmOuptCDsgq3soJzrkKnri4jri6QuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNzcz17bGluZX0+PC9kaXY+XHJcbiAgICAgICAgPEV4cHJlc3Npb25Cb3ggLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXIgY3NzPXtmb290ZXJCb3h9PlxyXG4gICAgICAgIDxBcnJvd0xlZnRPdXRsaW5lZCAvPlxyXG4gICAgICAgIDxidXR0b24+66eM65Ok6riwPC9idXR0b24+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9