webpackHotUpdate_N_E("pages/write",{

/***/ "./components/ExpressionBox.js":
/*!*************************************!*\
  !*** ./components/ExpressionBox.js ***!
  \*************************************/
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
/* harmony import */ var _ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConvertPopUp */ "./components/ConvertPopUp.js");
/* harmony import */ var _ExpressionInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExpressionInput */ "./components/ExpressionInput.js");





var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\ExpressionBox.js",
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
      var tempExpressions = expressions.map(function (expression) {
        if (expressionNum === expression.expressionNumber) {
          console.log(e.target.name);
          expression[e.target.name] = e.target.value;
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
              lineNumber: 96,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "meaning",
            placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: v.meaning,
            onChange: onChangeMeaning(index + 1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, _this)]
        }, v.expressionNumber, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleFilled"], {
      css: plusBtn,
      onClick: addExpression
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsInVzZVN0YXRlIiwicGlueWluIiwic2V0UGlueWluIiwib25DaGFuZ2VQaW55aW4iLCJ1c2VDYWxsYmFjayIsImUiLCJtZWFuaW5nIiwic2V0TWVhbmluZyIsIm9uQ2hhbmdlTWVhbmluZyIsImV4cHJlc3Npb25OdW0iLCJ0ZW1wRXhwcmVzc2lvbnMiLCJleHByZXNzaW9ucyIsIm1hcCIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldEV4cHJlc3Npb25zIiwiYWRkRXhwcmVzc2lvbiIsImRhdGEiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJ2IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsMERBQUgsbUJBQW5CO0FBT0EsSUFBTUMsR0FBRyxHQUFHRCwwREFBSCxvQkFBVDtBQWVBLElBQU1FLFNBQVMsR0FBR0YsMERBQUgsb0JBQWY7QUFhQSxJQUFNRyxPQUFPLEdBQUdILDBEQUFILG9CQUFiOztBQU9BLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRTFCLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU8sQ0FDeEM7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFs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QkFERjtBQTRCRCxDQWxFRDs7R0FBTXRCLGE7O0tBQUFBLGE7QUFvRVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dyaXRlLjUxZDdkNmQ5OTFmMTgzNWY2ZjRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IENvbnZlcnRQb3BVcCBmcm9tICcuL0NvbnZlcnRQb3BVcCc7XHJcbmltcG9ydCBFeHByZXNzaW9uSW5wdXQgZnJvbSAnLi9FeHByZXNzaW9uSW5wdXQnO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgYm94ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOGRkZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0OTRiO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBpbnlpbkJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBsdXNCdG4gPSBjc3NgXHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cHJlc3Npb25Cb3ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bpbnlpbiwgc2V0UGlueWluXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZVBpbnlpbiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAvLyBzZXRQaW55aW4oZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW21lYW5pbmcsIHNldE1lYW5pbmddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlTWVhbmluZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hcCgoZXhwcmVzc2lvbikgPT4ge1xyXG4gICAgICAgIGlmIChleHByZXNzaW9uTnVtID09PSBleHByZXNzaW9uLmV4cHJlc3Npb25OdW1iZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgICAgZXhwcmVzc2lvbltlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKHRlbXBFeHByZXNzaW9ucyk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBbZXhwcmVzc2lvbnMsIHNldEV4cHJlc3Npb25zXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZXhwcmVzc2lvbk51bWJlcjogMSwgcGlueWluOiAnJywgbWVhbmluZzogJycgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgYWRkRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cHJlc3Npb25OdW1iZXI6IGV4cHJlc3Npb25zLmxlbmd0aCArIDEsXHJcbiAgICAgIHBpbnlpbjogJycsXHJcbiAgICAgIG1lYW5pbmc6ICcnLFxyXG4gICAgfTtcclxuICAgIHNldEV4cHJlc3Npb25zKFsuLi5leHByZXNzaW9ucywgZGF0YV0pO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXhwcmVzc2lvbnMpO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25Cb3h9IGlkPVwiZXhwcmVzc2lvbi1ib3hcIj5cclxuICAgICAgICB7ZXhwcmVzc2lvbnMubWFwKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2JveH0ga2V5PXt2LmV4cHJlc3Npb25OdW1iZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW5Cb3h9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaW55aW5cIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2VnOyWtOuzkeydjOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17di5waW55aW59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVBpbnlpbihpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZWFuaW5nXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65y77J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17di5tZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTWVhbmluZyhpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQbHVzQ2lyY2xlRmlsbGVkIGNzcz17cGx1c0J0bn0gb25DbGljaz17YWRkRXhwcmVzc2lvbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uQm94O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9