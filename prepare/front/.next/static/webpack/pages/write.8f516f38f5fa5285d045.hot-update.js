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

  var onChangePinyin = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {// setPinyin(e.target.value);
  }, []);
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    expressionNumber: 1,
    pinyin: '',
    meaning: ''
  }]),
      expressions = _useState[0],
      setExpressions = _useState[1];

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
              lineNumber: 94,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            name: "meaning",
            placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: v.meaning,
            onChange: onChangeMeaning(index + 1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, _this)]
        }, v.expressionNumber, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleFilled"], {
      css: plusBtn,
      onClick: addExpression
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ExpressionBox, "VUr0enUwR+i7DObpoMjeogA0Fh8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsIm9uQ2hhbmdlUGlueWluIiwidXNlQ2FsbGJhY2siLCJlIiwib25DaGFuZ2VNZWFuaW5nIiwiZXhwcmVzc2lvbk51bSIsInRlbXBFeHByZXNzaW9ucyIsImV4cHJlc3Npb25zIiwibWFwIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25OdW1iZXIiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0RXhwcmVzc2lvbnMiLCJ1c2VTdGF0ZSIsInBpbnlpbiIsIm1lYW5pbmciLCJhZGRFeHByZXNzaW9uIiwiZGF0YSIsImxlbmd0aCIsInVzZUVmZmVjdCIsInYiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwREFBSCxtQkFBbkI7QUFPQSxJQUFNQyxHQUFHLEdBQUdELDBEQUFILG9CQUFUO0FBZUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZjtBQWFBLElBQU1HLE9BQU8sR0FBR0gsMERBQUgsb0JBQWI7O0FBT0EsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU8sQ0FDeEM7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFsQztBQUlBLE1BQU1DLGVBQWUsR0FBR0YseURBQVcsQ0FDakMsVUFBQ0csYUFBRDtBQUFBLFdBQW1CLFVBQUNGLENBQUQsRUFBTztBQUN4QixVQUFNRyxlQUFlLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWdCO0FBQ3RELFlBQUlKLGFBQWEsS0FBS0ksVUFBVSxDQUFDQyxnQkFBakMsRUFBbUQ7QUFDakRDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVQsQ0FBQyxDQUFDVSxNQUFGLENBQVNDLElBQXJCO0FBQ0FMLG9CQUFVLENBQUNOLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxJQUFWLENBQVYsR0FBNEJYLENBQUMsQ0FBQ1UsTUFBRixDQUFTRSxLQUFyQztBQUNEOztBQUNELGVBQU9OLFVBQVA7QUFDRCxPQU51QixDQUF4QjtBQU9BTyxvQkFBYyxDQUFDVixlQUFELENBQWQ7QUFDRCxLQVREO0FBQUEsR0FEaUMsRUFXakMsRUFYaUMsQ0FBbkM7O0FBTDBCLGtCQW1CWVcsc0RBQVEsQ0FBQyxDQUM3QztBQUFFUCxvQkFBZ0IsRUFBRSxDQUFwQjtBQUF1QlEsVUFBTSxFQUFFLEVBQS9CO0FBQW1DQyxXQUFPLEVBQUU7QUFBNUMsR0FENkMsQ0FBRCxDQW5CcEI7QUFBQSxNQW1CbkJaLFdBbkJtQjtBQUFBLE1BbUJOUyxjQW5CTTs7QUF1QjFCLE1BQU1JLGFBQWEsR0FBR2xCLHlEQUFXLENBQUMsWUFBTTtBQUN0QyxRQUFNbUIsSUFBSSxHQUFHO0FBQ1hYLHNCQUFnQixFQUFFSCxXQUFXLENBQUNlLE1BQVosR0FBcUIsQ0FENUI7QUFFWEosWUFBTSxFQUFFLEVBRkc7QUFHWEMsYUFBTyxFQUFFO0FBSEUsS0FBYjtBQUtBSCxrQkFBYywyS0FBS1QsV0FBTCxJQUFrQmMsSUFBbEIsR0FBZDtBQUNELEdBUGdDLEVBTzlCLENBQUNkLFdBQUQsQ0FQOEIsQ0FBakM7QUFTQWdCLHlEQUFTLENBQUMsWUFBTTtBQUNkWixXQUFPLENBQUNDLEdBQVIsQ0FBWUwsV0FBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxXQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFBQSxlQUNFO0FBQUssU0FBRyxFQUFFWixhQUFWO0FBQXlCLFFBQUUsRUFBQyxnQkFBNUI7QUFBQSxnQkFDR1ksV0FBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNnQixDQUFELEVBQUlDLEtBQUosRUFBYztBQUM3QixlQUNFO0FBQUssYUFBRyxFQUFFNUIsR0FBVjtBQUFBLHFCQUNFO0FBQUssZUFBRyxFQUFFQyxTQUFWO0FBQUEsdUJBQ0U7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx5QkFBVyxFQUFDLHFFQUZkO0FBR0UsbUJBQUssRUFBRTBCLENBQUMsQ0FBQ04sTUFIWDtBQUlFLHNCQUFRLEVBQUU7QUFBQSx1QkFBTWpCLGNBQWMsQ0FBQ3dCLEtBQUssR0FBRyxDQUFULENBQXBCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBT0UsOEVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFVRTtBQUNFLGdCQUFJLEVBQUMsU0FEUDtBQUVFLHVCQUFXLEVBQUMsbURBRmQ7QUFHRSxpQkFBSyxFQUFFRCxDQUFDLENBQUNMLE9BSFg7QUFJRSxvQkFBUSxFQUFFZixlQUFlLENBQUNxQixLQUFLLEdBQUcsQ0FBVDtBQUozQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUEsV0FBb0JELENBQUMsQ0FBQ2QsZ0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFtQkQsT0FwQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUF3QkUsOEVBQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFFWCxPQUF2QjtBQUFnQyxhQUFPLEVBQUVxQjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEJGO0FBQUEsa0JBREY7QUE0QkQsQ0FoRUQ7O0dBQU1wQixhOztLQUFBQSxhO0FBa0VTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS44ZjUxNmYzOGY1ZmE1Mjg1ZDA0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUGx1c0NpcmNsZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi9Db252ZXJ0UG9wVXAnO1xyXG5pbXBvcnQgRXhwcmVzc2lvbklucHV0IGZyb20gJy4vRXhwcmVzc2lvbklucHV0JztcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IGJveCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMThkZGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ4NDk0YjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5Cb3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwbHVzQnRuID0gY3NzYFxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHByZXNzaW9uQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGlueWluID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIC8vIHNldFBpbnlpbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZU1lYW5pbmcgPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0ZW1wRXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXAoKGV4cHJlc3Npb24pID0+IHtcclxuICAgICAgICBpZiAoZXhwcmVzc2lvbk51bSA9PT0gZXhwcmVzc2lvbi5leHByZXNzaW9uTnVtYmVyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICAgIGV4cHJlc3Npb25bZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFeHByZXNzaW9ucyh0ZW1wRXhwcmVzc2lvbnMpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2V4cHJlc3Npb25zLCBzZXRFeHByZXNzaW9uc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGV4cHJlc3Npb25OdW1iZXI6IDEsIHBpbnlpbjogJycsIG1lYW5pbmc6ICcnIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IGFkZEV4cHJlc3Npb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBleHByZXNzaW9uTnVtYmVyOiBleHByZXNzaW9ucy5sZW5ndGggKyAxLFxyXG4gICAgICBwaW55aW46ICcnLFxyXG4gICAgICBtZWFuaW5nOiAnJyxcclxuICAgIH07XHJcbiAgICBzZXRFeHByZXNzaW9ucyhbLi4uZXhwcmVzc2lvbnMsIGRhdGFdKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGV4cHJlc3Npb25zKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uQm94fSBpZD1cImV4cHJlc3Npb24tYm94XCI+XHJcbiAgICAgICAge2V4cHJlc3Npb25zLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtib3h9IGtleT17di5leHByZXNzaW9uTnVtYmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17cGlueWluQm94fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGlueWluXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlZzslrTrs5HsnYzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3YucGlueWlufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2VQaW55aW4oaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udmVydFBvcFVwIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVhbmluZ1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuucu+ydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3YubWVhbmluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU1lYW5pbmcoaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGx1c0NpcmNsZUZpbGxlZCBjc3M9e3BsdXNCdG59IG9uQ2xpY2s9e2FkZEV4cHJlc3Npb259IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvbkJveDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==