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
              onChange: onChangePinyin(index + 1)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "meaning",
            placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: v.meaning,
            onChange: onChangeMeaning(index + 1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
      lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsInVzZVN0YXRlIiwicGlueWluIiwic2V0UGlueWluIiwib25DaGFuZ2VQaW55aW4iLCJ1c2VDYWxsYmFjayIsImUiLCJtZWFuaW5nIiwic2V0TWVhbmluZyIsIm9uQ2hhbmdlTWVhbmluZyIsImV4cHJlc3Npb25OdW0iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidGVtcEV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbnMiLCJtYXAiLCJleHByZXNzaW9uIiwic2V0RXhwcmVzc2lvbnMiLCJleHByZXNzaW9uTnVtYmVyIiwiYWRkRXhwcmVzc2lvbiIsImRhdGEiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJ2IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsMERBQUgsbUJBQW5CO0FBT0EsSUFBTUMsR0FBRyxHQUFHRCwwREFBSCxvQkFBVDtBQWVBLElBQU1FLFNBQVMsR0FBR0YsMERBQUgsb0JBQWY7QUFhQSxJQUFNRyxPQUFPLEdBQUdILDBEQUFILG9CQUFiOztBQU9BLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRTFCLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU8sQ0FDeEM7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFs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OEVBQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFFdEIsT0FBdkI7QUFBZ0MsYUFBTyxFQUFFdUI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQUFBLGtCQURGO0FBNEJELENBeEVEOztHQUFNdEIsYTs7S0FBQUEsYTtBQTBFU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuODExZmNhNzllMWI1NGVkMzhkMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4vQ29udmVydFBvcFVwJztcclxuaW1wb3J0IEV4cHJlc3Npb25JbnB1dCBmcm9tICcuL0V4cHJlc3Npb25JbnB1dCc7XHJcblxyXG5jb25zdCBleHByZXNzaW9uQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBib3ggPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzE4ZGRmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ5NGI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGlueWluQm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGx1c0J0biA9IGNzc2BcclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwcmVzc2lvbkJveCA9ICgpID0+IHtcclxuICBjb25zdCBbcGlueWluLCBzZXRQaW55aW5dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGlueWluID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vIHNldFBpbnlpbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbbWVhbmluZywgc2V0TWVhbmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VNZWFuaW5nID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXhwcmVzc2lvbk51bSkgPT4gKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXhwcmVzc2lvbk51bSwgZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXHJcbiAgICAgIH0gPSBlO1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdGFyZ2V0OiB7IG5hbWUgfSxcclxuICAgICAgfSA9IGU7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hcCgoZXhwcmVzc2lvbikgPT4ge1xyXG4gICAgICAgIGlmIChleHByZXNzaW9uTnVtID09PSBleHByZXNzaW9uLmV4cHJlc3Npb25OdW0pIHtcclxuICAgICAgICAgIGV4cHJlc3Npb25bbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFeHByZXNzaW9ucyh0ZW1wRXhwcmVzc2lvbnMpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2V4cHJlc3Npb25zLCBzZXRFeHByZXNzaW9uc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGV4cHJlc3Npb25OdW1iZXI6IDEsIHBpbnlpbjogJycsIG1lYW5pbmc6ICcnIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFkZEV4cHJlc3Npb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBleHByZXNzaW9uTnVtYmVyOiBleHByZXNzaW9ucy5sZW5ndGggKyAxLFxyXG4gICAgICBwaW55aW46ICcnLFxyXG4gICAgICBtZWFuaW5nOiAnJyxcclxuICAgIH07XHJcbiAgICBzZXRFeHByZXNzaW9ucyhbLi4uZXhwcmVzc2lvbnMsIGRhdGFdKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV4cHJlc3Npb25zKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uQm94fSBpZD1cImV4cHJlc3Npb24tYm94XCI+XHJcbiAgICAgICAge2V4cHJlc3Npb25zLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtib3h9IGtleT17di5leHByZXNzaW9uTnVtYmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17cGlueWluQm94fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGlueWluXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlZzslrTrs5HsnYzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3YucGlueWlufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQaW55aW4oaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udmVydFBvcFVwIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVhbmluZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuucu+ydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3YubWVhbmluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU1lYW5pbmcoaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGx1c0NpcmNsZUZpbGxlZCBjc3M9e3BsdXNCdG59IG9uQ2xpY2s9e2FkZEV4cHJlc3Npb259IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvbkJveDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==