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
      console.log(e);
      var tempExpressions = expressions.map(function (expression) {
        if (expressionNum === expression.expressionNum) {
          expression[e.target.name] = e.target.value;
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
              onChange: function onChange() {
                return onChangePinyin(index + 1);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: v.meaning,
            onChange: function onChange() {
              return onChangeMeaning(index + 1);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, _this)]
        }, v.expressionNumber, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleFilled"], {
      css: plusBtn,
      onClick: addExpression
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsInVzZVN0YXRlIiwicGlueWluIiwic2V0UGlueWluIiwib25DaGFuZ2VQaW55aW4iLCJ1c2VDYWxsYmFjayIsImUiLCJtZWFuaW5nIiwic2V0TWVhbmluZyIsIm9uQ2hhbmdlTWVhbmluZyIsImV4cHJlc3Npb25OdW0iLCJjb25zb2xlIiwibG9nIiwidGVtcEV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbnMiLCJtYXAiLCJleHByZXNzaW9uIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0RXhwcmVzc2lvbnMiLCJleHByZXNzaW9uTnVtYmVyIiwiYWRkRXhwcmVzc2lvbiIsImRhdGEiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJ2IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsMERBQUgsbUJBQW5CO0FBT0EsSUFBTUMsR0FBRyxHQUFHRCwwREFBSCxvQkFBVDtBQWVBLElBQU1FLFNBQVMsR0FBR0YsMERBQUgsb0JBQWY7QUFhQSxJQUFNRyxPQUFPLEdBQUdILDBEQUFILG9CQUFiOztBQU9BLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEVBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRTFCLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU8sQ0FDeEM7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFs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QSxhO0FBbUVTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS41NTZmNjk3ZWZhMDYyYTMwYTVlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGx1c0NpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi9Db252ZXJ0UG9wVXAnO1xyXG5pbXBvcnQgRXhwcmVzc2lvbklucHV0IGZyb20gJy4vRXhwcmVzc2lvbklucHV0JztcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IGJveCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMThkZGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ4NDk0YjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5Cb3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwbHVzQnRuID0gY3NzYFxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHByZXNzaW9uQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VQaW55aW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgLy8gc2V0UGlueWluKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFttZWFuaW5nLCBzZXRNZWFuaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZU1lYW5pbmcgPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgdGVtcEV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKChleHByZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGV4cHJlc3Npb25OdW0gPT09IGV4cHJlc3Npb24uZXhwcmVzc2lvbk51bSkge1xyXG4gICAgICAgICAgZXhwcmVzc2lvbltlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKHRlbXBFeHByZXNzaW9ucyk7XHJcbiAgICAgIC8vIHNldE1lYW5pbmcoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2V4cHJlc3Npb25zLCBzZXRFeHByZXNzaW9uc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGV4cHJlc3Npb25OdW1iZXI6IDEsIHBpbnlpbjogJycsIG1lYW5pbmc6ICcnIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFkZEV4cHJlc3Npb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBleHByZXNzaW9uTnVtYmVyOiBleHByZXNzaW9ucy5sZW5ndGggKyAxLFxyXG4gICAgICBwaW55aW46ICcnLFxyXG4gICAgICBtZWFuaW5nOiAnJyxcclxuICAgIH07XHJcbiAgICBzZXRFeHByZXNzaW9ucyhbLi4uZXhwcmVzc2lvbnMsIGRhdGFdKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV4cHJlc3Npb25zKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uQm94fSBpZD1cImV4cHJlc3Npb24tYm94XCI+XHJcbiAgICAgICAge2V4cHJlc3Npb25zLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtib3h9IGtleT17di5leHByZXNzaW9uTnVtYmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17cGlueWluQm94fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2VnOyWtOuzkeydjOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17di5waW55aW59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZVBpbnlpbihpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65y77J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17di5tZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlTWVhbmluZyhpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQbHVzQ2lyY2xlRmlsbGVkIGNzcz17cGx1c0J0bn0gb25DbGljaz17YWRkRXhwcmVzc2lvbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uQm94O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9