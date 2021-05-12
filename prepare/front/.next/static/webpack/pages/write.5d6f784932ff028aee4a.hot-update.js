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
      var value = e.target.value;
      var name = e.target.name;
      var tempExpressions = expressions.map(function (expression) {
        if (expressionNum === expression.expressionNum) {
          expression[name] = value;
        }

        return expression;
      });
      setExpressions(tempExpressions); // setMeaning(e.target.value);
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
              placeholder: "\uD55C\uC5B4\uBCD1\uC74C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
              value: v.pinyin,
              onChange: function onChange(index) {
                return onChangePinyin(index + 1);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: v.meaning,
            onChange: function onChange(index) {
              return onChangeMeaning(index + 1);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
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
      lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsInVzZVN0YXRlIiwicGlueWluIiwic2V0UGlueWluIiwib25DaGFuZ2VQaW55aW4iLCJ1c2VDYWxsYmFjayIsImUiLCJtZWFuaW5nIiwic2V0TWVhbmluZyIsIm9uQ2hhbmdlTWVhbmluZyIsImV4cHJlc3Npb25OdW0iLCJ2YWx1ZSIsInRhcmdldCIsIm5hbWUiLCJ0ZW1wRXhwcmVzc2lvbnMiLCJleHByZXNzaW9ucyIsIm1hcCIsImV4cHJlc3Npb24iLCJzZXRFeHByZXNzaW9ucyIsImV4cHJlc3Npb25OdW1iZXIiLCJhZGRFeHByZXNzaW9uIiwiZGF0YSIsImxlbmd0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ2IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsMERBQUgsbUJBQW5CO0FBT0EsSUFBTUMsR0FBRyxHQUFHRCwwREFBSCxvQkFBVDtBQWVBLElBQU1FLFNBQVMsR0FBR0YsMERBQUgsb0JBQWY7QUFhQSxJQUFNRyxPQUFPLEdBQUdILDBEQUFILG9CQUFiOztBQU9BLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRTFCLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU8sQ0FDeEM7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFs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QUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBLGtCQURGO0FBMEJELENBdEVEOztHQUFNcEIsYTs7S0FBQUEsYTtBQXdFU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuNWQ2Zjc4NDkzMmZmMDI4YWVlNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4vQ29udmVydFBvcFVwJztcclxuaW1wb3J0IEV4cHJlc3Npb25JbnB1dCBmcm9tICcuL0V4cHJlc3Npb25JbnB1dCc7XHJcblxyXG5jb25zdCBleHByZXNzaW9uQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBib3ggPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzE4ZGRmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ5NGI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGlueWluQm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGx1c0J0biA9IGNzc2BcclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwcmVzc2lvbkJveCA9ICgpID0+IHtcclxuICBjb25zdCBbcGlueWluLCBzZXRQaW55aW5dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGlueWluID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vIHNldFBpbnlpbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbbWVhbmluZywgc2V0TWVhbmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VNZWFuaW5nID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXhwcmVzc2lvbk51bSkgPT4gKGUpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxyXG4gICAgICB9ID0gZTtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRhcmdldDogeyBuYW1lIH0sXHJcbiAgICAgIH0gPSBlO1xyXG4gICAgICBjb25zdCB0ZW1wRXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXAoKGV4cHJlc3Npb24pID0+IHtcclxuICAgICAgICBpZiAoZXhwcmVzc2lvbk51bSA9PT0gZXhwcmVzc2lvbi5leHByZXNzaW9uTnVtKSB7XHJcbiAgICAgICAgICBleHByZXNzaW9uW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByZXNzaW9uO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RXhwcmVzc2lvbnModGVtcEV4cHJlc3Npb25zKTtcclxuICAgICAgLy8gc2V0TWVhbmluZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBbZXhwcmVzc2lvbnMsIHNldEV4cHJlc3Npb25zXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZXhwcmVzc2lvbk51bWJlcjogMSwgcGlueWluOiAnJywgbWVhbmluZzogJycgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgYWRkRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cHJlc3Npb25OdW1iZXI6IGV4cHJlc3Npb25zLmxlbmd0aCArIDEsXHJcbiAgICAgIHBpbnlpbjogJycsXHJcbiAgICAgIG1lYW5pbmc6ICcnLFxyXG4gICAgfTtcclxuICAgIHNldEV4cHJlc3Npb25zKFsuLi5leHByZXNzaW9ucywgZGF0YV0pO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXhwcmVzc2lvbnMpO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25Cb3h9IGlkPVwiZXhwcmVzc2lvbi1ib3hcIj5cclxuICAgICAgICB7ZXhwcmVzc2lvbnMubWFwKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2JveH0ga2V5PXt2LmV4cHJlc3Npb25OdW1iZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW5Cb3h9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ZWc7Ja067OR7J2M7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2LnBpbnlpbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbmRleCkgPT4gb25DaGFuZ2VQaW55aW4oaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udmVydFBvcFVwIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuucu+ydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3YubWVhbmluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5kZXgpID0+IG9uQ2hhbmdlTWVhbmluZyhpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQbHVzQ2lyY2xlRmlsbGVkIGNzcz17cGx1c0J0bn0gb25DbGljaz17YWRkRXhwcmVzc2lvbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uQm94O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9