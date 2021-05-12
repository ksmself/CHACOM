webpackHotUpdate_N_E("pages/write",{

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
        if (expression.expressionNum === expressionNum) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0V4cHJlc3Npb25Cb3guanMiXSwibmFtZXMiOlsiZXhwcmVzc2lvbkJveCIsImNzcyIsImJveCIsInBpbnlpbkJveCIsInBsdXNCdG4iLCJFeHByZXNzaW9uQm94IiwidXNlU3RhdGUiLCJwaW55aW4iLCJzZXRQaW55aW4iLCJvbkNoYW5nZVBpbnlpbiIsInVzZUNhbGxiYWNrIiwiZSIsIm1lYW5pbmciLCJzZXRNZWFuaW5nIiwib25DaGFuZ2VNZWFuaW5nIiwiZXhwcmVzc2lvbk51bSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0ZW1wRXhwcmVzc2lvbnMiLCJleHByZXNzaW9ucyIsIm1hcCIsImV4cHJlc3Npb24iLCJzZXRFeHByZXNzaW9ucyIsImV4cHJlc3Npb25OdW1iZXIiLCJhZGRFeHByZXNzaW9uIiwiZGF0YSIsImxlbmd0aCIsInVzZUVmZmVjdCIsInYiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwREFBSCxtQkFBbkI7QUFPQSxJQUFNQyxHQUFHLEdBQUdELDBEQUFILG9CQUFUO0FBZUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZjtBQWFBLElBQU1HLE9BQU8sR0FBR0gsMERBQUgsb0JBQWI7O0FBT0EsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDbkJDLE1BRG1CO0FBQUEsTUFDWEMsU0FEVzs7QUFFMUIsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTyxDQUN4QztBQUNELEdBRmlDLEVBRS9CLEVBRitCLENBQWxD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QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUF5QkUsOEVBQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFFdEIsT0FBdkI7QUFBZ0MsYUFBTyxFQUFFdUI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRjtBQUFBLGtCQURGO0FBNkJELENBekVEOztHQUFNdEIsYTs7S0FBQUEsYTtBQTJFU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuMDhmOTI0MTY2ZDcwZDUxZDlkNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udmVydFBvcFVwJztcclxuaW1wb3J0IEV4cHJlc3Npb25NZWFuaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvRXhwcmVzc2lvbk1lYW5pbmcnO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgYm94ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOGRkZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0OTRiO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBpbnlpbkJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBsdXNCdG4gPSBjc3NgXHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cHJlc3Npb25Cb3ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bpbnlpbiwgc2V0UGlueWluXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZVBpbnlpbiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAvLyBzZXRQaW55aW4oZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW21lYW5pbmcsIHNldE1lYW5pbmddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlTWVhbmluZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+IChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV4cHJlc3Npb25OdW0sIGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxyXG4gICAgICB9ID0gZTtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRhcmdldDogeyBuYW1lIH0sXHJcbiAgICAgIH0gPSBlO1xyXG4gICAgICBjb25zdCB0ZW1wRXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXAoKGV4cHJlc3Npb24pID0+IHtcclxuICAgICAgICBpZiAoZXhwcmVzc2lvbi5leHByZXNzaW9uTnVtID09PSBleHByZXNzaW9uTnVtKSB7XHJcbiAgICAgICAgICBleHByZXNzaW9uW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByZXNzaW9uO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RXhwcmVzc2lvbnModGVtcEV4cHJlc3Npb25zKTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtleHByZXNzaW9ucywgc2V0RXhwcmVzc2lvbnNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBleHByZXNzaW9uTnVtYmVyOiAxLCBwaW55aW46ICcnLCBtZWFuaW5nOiAnJyB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhZGRFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXhwcmVzc2lvbk51bWJlcjogZXhwcmVzc2lvbnMubGVuZ3RoICsgMSxcclxuICAgICAgcGlueWluOiAnJyxcclxuICAgICAgbWVhbmluZzogJycsXHJcbiAgICB9O1xyXG4gICAgc2V0RXhwcmVzc2lvbnMoWy4uLmV4cHJlc3Npb25zLCBkYXRhXSk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhleHByZXNzaW9ucyk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbkJveH0gaWQ9XCJleHByZXNzaW9uLWJveFwiPlxyXG4gICAgICAgIHtleHByZXNzaW9ucy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17Ym94fSBrZXk9e3YuZXhwcmVzc2lvbk51bWJlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e3BpbnlpbkJveH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBpbnlpblwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ZWc7Ja067OR7J2M7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2LnBpbnlpbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlUGlueWluKGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8RXhwcmVzc2lvbk1lYW5pbmdcclxuICAgICAgICAgICAgICAgIG1lYW5pbmdOYW1lPVwibWVhbmluZ1wiXHJcbiAgICAgICAgICAgICAgICBtZWFuaW5nUGxhY2Vob2xkZXI9XCLrnLvsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgIG1lYW5pbmdWYWx1ZT17di5tZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgbWVhbmluZ0NoYW5nZT17b25DaGFuZ2VNZWFuaW5nKGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFBsdXNDaXJjbGVGaWxsZWQgY3NzPXtwbHVzQnRufSBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25Cb3g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=