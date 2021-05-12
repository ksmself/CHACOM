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
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _ExpressionInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ExpressionInput */ "./components/ExpressionInput.js");






var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\ExpressionBox.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  svg {\n    font-size: 50px;\n    color: #3a18ff;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */





var expressionBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject());
var plusBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject2());

var ExpressionBox = function ExpressionBox() {
  _s();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([{
    expressionNumber: 1,
    pinyin: '',
    meaning: ''
  }]),
      expressions = _useState[0],
      setExpressions = _useState[1];

  var addExpression = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    var data = {
      expressionNumber: expressions.length + 1,
      pinyin: '',
      meaning: ''
    };
    setExpressions([].concat(Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(expressions), [data]));
  }, [expressions]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    console.log(expressions);
  }, [expressions]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: expressionBox,
      id: "expression-box",
      children: expressions.map(function (v) {
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: box,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: pinyinBox,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              placeholder: "\uD55C\uC5B4\uBCD1\uC74C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
              value: pinyin,
              onChange: onChangePinyin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ConvertPopUp, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: meaning,
            onChange: onChangeMeaning
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["PlusCircleFilled"], {
      css: plusBtn,
      onClick: addExpression
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ExpressionBox, "h1bsGmKFpdwVHVrgB1KBtWnQohA=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwiZXhwcmVzc2lvbk51bWJlciIsInBpbnlpbiIsIm1lYW5pbmciLCJleHByZXNzaW9ucyIsInNldEV4cHJlc3Npb25zIiwiYWRkRXhwcmVzc2lvbiIsInVzZUNhbGxiYWNrIiwiZGF0YSIsImxlbmd0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2IiwiYm94IiwicGlueWluQm94Iiwib25DaGFuZ2VQaW55aW4iLCJvbkNoYW5nZU1lYW5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsMERBQUgsbUJBQW5CO0FBT0EsSUFBTUMsT0FBTyxHQUFHRCwwREFBSCxvQkFBYjs7QUFPQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxzQkFDWEMseUNBQUksQ0FBQ0MsT0FBTCxFQURXO0FBQUE7QUFBQSxNQUNuQkMsSUFEbUI7O0FBQUEsa0JBR1lDLHNEQUFRLENBQUMsQ0FDN0M7QUFBRUMsb0JBQWdCLEVBQUUsQ0FBcEI7QUFBdUJDLFVBQU0sRUFBRSxFQUEvQjtBQUFtQ0MsV0FBTyxFQUFFO0FBQTVDLEdBRDZDLENBQUQsQ0FIcEI7QUFBQSxNQUduQkMsV0FIbUI7QUFBQSxNQUdOQyxjQUhNOztBQU8xQixNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0QyxRQUFNQyxJQUFJLEdBQUc7QUFDWFAsc0JBQWdCLEVBQUVHLFdBQVcsQ0FBQ0ssTUFBWixHQUFxQixDQUQ1QjtBQUVYUCxZQUFNLEVBQUUsRUFGRztBQUdYQyxhQUFPLEVBQUU7QUFIRSxLQUFiO0FBS0FFLGtCQUFjLDJLQUFLRCxXQUFMLElBQWtCSSxJQUFsQixHQUFkO0FBQ0QsR0FQZ0MsRUFPOUIsQ0FBQ0osV0FBRCxDQVA4QixDQUFqQztBQVNBTSx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLFdBQVo7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsV0FBRCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUEsZUFDRTtBQUFLLFNBQUcsRUFBRVgsYUFBVjtBQUF5QixRQUFFLEVBQUMsZ0JBQTVCO0FBQUEsZ0JBQ0dXLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQU87QUFDdEIsZUFDRTtBQUFLLGFBQUcsRUFBRUMsR0FBVjtBQUFBLHFCQUNFO0FBQUssZUFBRyxFQUFFQyxTQUFWO0FBQUEsdUJBQ0U7QUFDRSx5QkFBVyxFQUFDLHFFQURkO0FBRUUsbUJBQUssRUFBRWQsTUFGVDtBQUdFLHNCQUFRLEVBQUVlO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQU1FLDhFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFTRTtBQUNFLHVCQUFXLEVBQUMsbURBRGQ7QUFFRSxpQkFBSyxFQUFFZCxPQUZUO0FBR0Usb0JBQVEsRUFBRWU7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWlCRCxPQWxCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQXNCRSw4RUFBQyxrRUFBRDtBQUFrQixTQUFHLEVBQUV2QixPQUF2QjtBQUFnQyxhQUFPLEVBQUVXO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQSxrQkFERjtBQTBCRCxDQTlDRDs7R0FBTVYsYTtVQUNXQyx5Q0FBSSxDQUFDQyxPOzs7S0FEaEJGLGE7QUFnRFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dyaXRlLjk2MTQwN2YwYWM3ZGYxOTNmNWZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBFeHByZXNzaW9uSW5wdXQgZnJvbSAnLi9FeHByZXNzaW9uSW5wdXQnO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgcGx1c0J0biA9IGNzc2BcclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXhwcmVzc2lvbkJveCA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgW2V4cHJlc3Npb25zLCBzZXRFeHByZXNzaW9uc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGV4cHJlc3Npb25OdW1iZXI6IDEsIHBpbnlpbjogJycsIG1lYW5pbmc6ICcnIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFkZEV4cHJlc3Npb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBleHByZXNzaW9uTnVtYmVyOiBleHByZXNzaW9ucy5sZW5ndGggKyAxLFxyXG4gICAgICBwaW55aW46ICcnLFxyXG4gICAgICBtZWFuaW5nOiAnJyxcclxuICAgIH07XHJcbiAgICBzZXRFeHByZXNzaW9ucyhbLi4uZXhwcmVzc2lvbnMsIGRhdGFdKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV4cHJlc3Npb25zKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uQm94fSBpZD1cImV4cHJlc3Npb24tYm94XCI+XHJcbiAgICAgICAge2V4cHJlc3Npb25zLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjc3M9e2JveH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e3BpbnlpbkJveH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlZzslrTrs5HsnYzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bpbnlpbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGlueWlufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65y77J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVhbmluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU1lYW5pbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFBsdXNDaXJjbGVGaWxsZWQgY3NzPXtwbHVzQnRufSBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25Cb3g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=