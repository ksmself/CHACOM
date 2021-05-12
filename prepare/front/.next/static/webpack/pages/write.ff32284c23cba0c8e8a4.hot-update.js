webpackHotUpdate_N_E("pages/write",{

/***/ "./components/ExpressionMeaning.js":
/*!*****************************************!*\
  !*** ./components/ExpressionMeaning.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\ExpressionMeaning.js",
    _this = undefined;

var ExpressionMeaning = function ExpressionMeaning(_ref) {
  var meaningName = _ref.meaningName,
      meaningPlaceholder = _ref.meaningPlaceholder,
      meaningValue = _ref.meaningValue,
      meaningChange = _ref.meaningChange;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    type: "text",
    name: meaningName,
    placeholder: meaningPlaceholder,
    value: meaningValue,
    onChange: meaningChange
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = ExpressionMeaning;
/* harmony default export */ __webpack_exports__["default"] = (ExpressionMeaning);

var _c;

$RefreshReg$(_c, "ExpressionMeaning");

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

/***/ }),

/***/ "./container/ExpressionBox.js":
/*!************************************!*\
  !*** ./container/ExpressionBox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ConvertPopUp */ "./components/ConvertPopUp.js");
/* harmony import */ var _components_ExpressionMeaning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ExpressionMeaning */ "./components/ExpressionMeaning.js");





var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\container\\ExpressionBox.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  svg {\n    font-size: 50px;\n    color: #3a18ff;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  position: relative;\n  height: 52px;\n  margin-bottom: 5px;\n\n  button {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    font-size: 13px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  padding: 15px 10px;\n  margin-bottom: 20px;\n  border: 3px solid #18ddff;\n  border-radius: 4px;\n\n  input {\n    width: 100%;\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid #48494b;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */





var expressionBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var box = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var pinyinBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var plusBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());

var ExpressionBox = function ExpressionBox() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      pinyin = _useState[0],
      setPinyin = _useState[1];

  var onChangePinyin = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {// setPinyin(e.target.value);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      meaning = _useState2[0],
      setMeaning = _useState2[1];

  var onChangeMeaning = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (expressionNum) {
    return function (e) {
      console.log(expressionNum, e.target.name, e.target.value);
      var value = e.target.value;
      var name = e.target.name;
      var tempExpressions = expressions.map(function (expression) {
        if (expressionNum === expression.expressionNum) {
          expression[name] = value;
        }

        return expression;
      });
      setExpressions(tempExpressions);
    };
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    expressionNumber: 1,
    pinyin: '',
    meaning: ''
  }]),
      expressions = _useState3[0],
      setExpressions = _useState3[1];

  var addExpression = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    var data = {
      expressionNumber: expressions.length + 1,
      pinyin: '',
      meaning: ''
    };
    setExpressions([].concat(Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(expressions), [data]));
  }, [expressions]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(expressions);
  }, [expressions]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: expressionBox,
      id: "expression-box",
      children: expressions.map(function (v, index) {
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: box,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: pinyinBox,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "pinyin",
              placeholder: "\uD55C\uC5B4\uBCD1\uC74C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
              value: v.pinyin,
              onChange: function onChange() {
                return onChangePinyin(index + 1);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExpressionMeaning__WEBPACK_IMPORTED_MODULE_7__["default"], {
            meaningName: "meaning",
            meaningPlaceholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            meaningValue: v.meaning,
            meaningChange: onChangeMeaning(index + 1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, _this)]
        }, v.expressionNumber, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleFilled"], {
      css: plusBtn,
      onClick: addExpression
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ExpressionBox, "Vl0oKx5SEs0H1Jfw92YsemaaO4A=");

_c = ExpressionBox;
/* harmony default export */ __webpack_exports__["default"] = (ExpressionBox);

var _c;

$RefreshReg$(_c, "ExpressionBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uTWVhbmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0V4cHJlc3Npb25Cb3guanMiXSwibmFtZXMiOlsiRXhwcmVzc2lvbk1lYW5pbmciLCJtZWFuaW5nTmFtZSIsIm1lYW5pbmdQbGFjZWhvbGRlciIsIm1lYW5pbmdWYWx1ZSIsIm1lYW5pbmdDaGFuZ2UiLCJleHByZXNzaW9uQm94IiwiY3NzIiwiYm94IiwicGlueWluQm94IiwicGx1c0J0biIsIkV4cHJlc3Npb25Cb3giLCJ1c2VTdGF0ZSIsInBpbnlpbiIsInNldFBpbnlpbiIsIm9uQ2hhbmdlUGlueWluIiwidXNlQ2FsbGJhY2siLCJlIiwibWVhbmluZyIsInNldE1lYW5pbmciLCJvbkNoYW5nZU1lYW5pbmciLCJleHByZXNzaW9uTnVtIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInRlbXBFeHByZXNzaW9ucyIsImV4cHJlc3Npb25zIiwibWFwIiwiZXhwcmVzc2lvbiIsInNldEV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbk51bWJlciIsImFkZEV4cHJlc3Npb24iLCJkYXRhIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwidiIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BS3BCO0FBQUEsTUFKSkMsV0FJSSxRQUpKQSxXQUlJO0FBQUEsTUFISkMsa0JBR0ksUUFISkEsa0JBR0k7QUFBQSxNQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxNQURKQyxhQUNJLFFBREpBLGFBQ0k7QUFDSixzQkFDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFFSCxXQUZSO0FBR0UsZUFBVyxFQUFFQyxrQkFIZjtBQUlFLFNBQUssRUFBRUMsWUFKVDtBQUtFLFlBQVEsRUFBRUM7QUFMWjtBQUFBO0FBQUE7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QUFFOUIsR0FBVjtBQUFBLHFCQUNFO0FBQUssZUFBRyxFQUFFQyxTQUFWO0FBQUEsdUJBQ0U7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx5QkFBVyxFQUFDLHFFQUZkO0FBR0UsbUJBQUssRUFBRTRCLENBQUMsQ0FBQ3hCLE1BSFg7QUFJRSxzQkFBUSxFQUFFO0FBQUEsdUJBQU1FLGNBQWMsQ0FBQ3VCLEtBQUssR0FBRyxDQUFULENBQXBCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBT0UsOEVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFXRSw4RUFBQyxxRUFBRDtBQUNFLHVCQUFXLEVBQUMsU0FEZDtBQUVFLDhCQUFrQixFQUFDLG1EQUZyQjtBQUdFLHdCQUFZLEVBQUVELENBQUMsQ0FBQ25CLE9BSGxCO0FBSUUseUJBQWEsRUFBRUUsZUFBZSxDQUFDa0IsS0FBSyxHQUFHLENBQVQ7QUFKaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBLFdBQW9CRCxDQUFDLENBQUNMLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBb0JELE9BckJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBeUJFLDhFQUFDLGtFQUFEO0FBQWtCLFNBQUcsRUFBRXRCLE9BQXZCO0FBQWdDLGFBQU8sRUFBRXVCO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6QkY7QUFBQSxrQkFERjtBQTZCRCxDQXpFRDs7R0FBTXRCLGE7O0tBQUFBLGE7QUEyRVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dyaXRlLmZmMzIyODRjMjNjYmEwYzhlOGE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFeHByZXNzaW9uTWVhbmluZyA9ICh7XHJcbiAgbWVhbmluZ05hbWUsXHJcbiAgbWVhbmluZ1BsYWNlaG9sZGVyLFxyXG4gIG1lYW5pbmdWYWx1ZSxcclxuICBtZWFuaW5nQ2hhbmdlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIG5hbWU9e21lYW5pbmdOYW1lfVxyXG4gICAgICBwbGFjZWhvbGRlcj17bWVhbmluZ1BsYWNlaG9sZGVyfVxyXG4gICAgICB2YWx1ZT17bWVhbmluZ1ZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17bWVhbmluZ0NoYW5nZX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25NZWFuaW5nO1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IENvbnZlcnRQb3BVcCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnZlcnRQb3BVcCc7XHJcbmltcG9ydCBFeHByZXNzaW9uTWVhbmluZyBmcm9tICcuLi9jb21wb25lbnRzL0V4cHJlc3Npb25NZWFuaW5nJztcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IGJveCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMThkZGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ4NDk0YjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5Cb3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwbHVzQnRuID0gY3NzYFxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHByZXNzaW9uQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VQaW55aW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgLy8gc2V0UGlueWluKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFttZWFuaW5nLCBzZXRNZWFuaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZU1lYW5pbmcgPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhleHByZXNzaW9uTnVtLCBlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcclxuICAgICAgfSA9IGU7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB0YXJnZXQ6IHsgbmFtZSB9LFxyXG4gICAgICB9ID0gZTtcclxuICAgICAgY29uc3QgdGVtcEV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKChleHByZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGV4cHJlc3Npb25OdW0gPT09IGV4cHJlc3Npb24uZXhwcmVzc2lvbk51bSkge1xyXG4gICAgICAgICAgZXhwcmVzc2lvbltuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKHRlbXBFeHByZXNzaW9ucyk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBbZXhwcmVzc2lvbnMsIHNldEV4cHJlc3Npb25zXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZXhwcmVzc2lvbk51bWJlcjogMSwgcGlueWluOiAnJywgbWVhbmluZzogJycgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgYWRkRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cHJlc3Npb25OdW1iZXI6IGV4cHJlc3Npb25zLmxlbmd0aCArIDEsXHJcbiAgICAgIHBpbnlpbjogJycsXHJcbiAgICAgIG1lYW5pbmc6ICcnLFxyXG4gICAgfTtcclxuICAgIHNldEV4cHJlc3Npb25zKFsuLi5leHByZXNzaW9ucywgZGF0YV0pO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXhwcmVzc2lvbnMpO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25Cb3h9IGlkPVwiZXhwcmVzc2lvbi1ib3hcIj5cclxuICAgICAgICB7ZXhwcmVzc2lvbnMubWFwKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2JveH0ga2V5PXt2LmV4cHJlc3Npb25OdW1iZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW5Cb3h9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaW55aW5cIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2VnOyWtOuzkeydjOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17di5waW55aW59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVBpbnlpbihpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPEV4cHJlc3Npb25NZWFuaW5nXHJcbiAgICAgICAgICAgICAgICBtZWFuaW5nTmFtZT1cIm1lYW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgbWVhbmluZ1BsYWNlaG9sZGVyPVwi65y77J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICBtZWFuaW5nVmFsdWU9e3YubWVhbmluZ31cclxuICAgICAgICAgICAgICAgIG1lYW5pbmdDaGFuZ2U9e29uQ2hhbmdlTWVhbmluZyhpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQbHVzQ2lyY2xlRmlsbGVkIGNzcz17cGx1c0J0bn0gb25DbGljaz17YWRkRXhwcmVzc2lvbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uQm94O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9