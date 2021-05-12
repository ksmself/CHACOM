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
  }, [expressions]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsIm9uQ2hhbmdlUGlueWluIiwidXNlQ2FsbGJhY2siLCJlIiwib25DaGFuZ2VNZWFuaW5nIiwiZXhwcmVzc2lvbk51bSIsInRlbXBFeHByZXNzaW9ucyIsImV4cHJlc3Npb25zIiwibWFwIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25OdW1iZXIiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0RXhwcmVzc2lvbnMiLCJ1c2VTdGF0ZSIsInBpbnlpbiIsIm1lYW5pbmciLCJhZGRFeHByZXNzaW9uIiwiZGF0YSIsImxlbmd0aCIsInVzZUVmZmVjdCIsInYiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwREFBSCxtQkFBbkI7QUFPQSxJQUFNQyxHQUFHLEdBQUdELDBEQUFILG9CQUFUO0FBZUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZjtBQWFBLElBQU1HLE9BQU8sR0FBR0gsMERBQUgsb0JBQWI7O0FBT0EsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU8sQ0FDeEM7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFsQztBQUlBLE1BQU1DLGVBQWUsR0FBR0YseURBQVcsQ0FDakMsVUFBQ0csYUFBRDtBQUFBLFdBQW1CLFVBQUNGLENBQUQsRUFBTztBQUN4QixVQUFNRyxlQUFlLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxVQUFELEVBQWdCO0FBQ3RELFlBQUlKLGFBQWEsS0FBS0ksVUFBVSxDQUFDQyxnQkFBakMsRUFBbUQ7QUFDakRDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVQsQ0FBQyxDQUFDVSxNQUFGLENBQVNDLElBQXJCO0FBQ0FMLG9CQUFVLENBQUNOLENBQUMsQ0FBQ1UsTUFBRixDQUFTQyxJQUFWLENBQVYsR0FBNEJYLENBQUMsQ0FBQ1UsTUFBRixDQUFTRSxLQUFyQztBQUNEOztBQUNELGVBQU9OLFVBQVA7QUFDRCxPQU51QixDQUF4QjtBQU9BTyxvQkFBYyxDQUFDVixlQUFELENBQWQ7QUFDRCxLQVREO0FBQUEsR0FEaUMsRUFXakMsQ0FBQ0MsV0FBRCxDQVhpQyxDQUFuQzs7QUFMMEIsa0JBbUJZVSxzREFBUSxDQUFDLENBQzdDO0FBQUVQLG9CQUFnQixFQUFFLENBQXBCO0FBQXVCUSxVQUFNLEVBQUUsRUFBL0I7QUFBbUNDLFdBQU8sRUFBRTtBQUE1QyxHQUQ2QyxDQUFELENBbkJwQjtBQUFBLE1BbUJuQlosV0FuQm1CO0FBQUEsTUFtQk5TLGNBbkJNOztBQXVCMUIsTUFBTUksYUFBYSxHQUFHbEIseURBQVcsQ0FBQyxZQUFNO0FBQ3RDLFFBQU1tQixJQUFJLEdBQUc7QUFDWFgsc0JBQWdCLEVBQUVILFdBQVcsQ0FBQ2UsTUFBWixHQUFxQixDQUQ1QjtBQUVYSixZQUFNLEVBQUUsRUFGRztBQUdYQyxhQUFPLEVBQUU7QUFIRSxLQUFiO0FBS0FILGtCQUFjLDJLQUFLVCxXQUFMLElBQWtCYyxJQUFsQixHQUFkO0FBQ0QsR0FQZ0MsRUFPOUIsQ0FBQ2QsV0FBRCxDQVA4QixDQUFqQztBQVNBZ0IseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLFdBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFBLGVBQ0U7QUFBSyxTQUFHLEVBQUVaLGFBQVY7QUFBeUIsUUFBRSxFQUFDLGdCQUE1QjtBQUFBLGdCQUNHWSxXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ2dCLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQzdCLGVBQ0U7QUFBSyxhQUFHLEVBQUU1QixHQUFWO0FBQUEscUJBQ0U7QUFBSyxlQUFHLEVBQUVDLFNBQVY7QUFBQSx1QkFDRTtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLHlCQUFXLEVBQUMscUVBRmQ7QUFHRSxtQkFBSyxFQUFFMEIsQ0FBQyxDQUFDTixNQUhYO0FBSUUsc0JBQVEsRUFBRTtBQUFBLHVCQUFNakIsY0FBYyxDQUFDd0IsS0FBSyxHQUFHLENBQVQsQ0FBcEI7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFPRSw4RUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQVVFO0FBQ0UsZ0JBQUksRUFBQyxTQURQO0FBRUUsdUJBQVcsRUFBQyxtREFGZDtBQUdFLGlCQUFLLEVBQUVELENBQUMsQ0FBQ0wsT0FIWDtBQUlFLG9CQUFRLEVBQUVmLGVBQWUsQ0FBQ3FCLEtBQUssR0FBRyxDQUFUO0FBSjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkY7QUFBQSxXQUFvQkQsQ0FBQyxDQUFDZCxnQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQW1CRCxPQXBCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQXdCRSw4RUFBQyxrRUFBRDtBQUFrQixTQUFHLEVBQUVYLE9BQXZCO0FBQWdDLGFBQU8sRUFBRXFCO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQSxrQkFERjtBQTRCRCxDQWhFRDs7R0FBTXBCLGE7O0tBQUFBLGE7QUFrRVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dyaXRlLmY3NmQ0NzVmN2U2YjEwNjg4NjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IENvbnZlcnRQb3BVcCBmcm9tICcuL0NvbnZlcnRQb3BVcCc7XHJcbmltcG9ydCBFeHByZXNzaW9uSW5wdXQgZnJvbSAnLi9FeHByZXNzaW9uSW5wdXQnO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgYm94ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOGRkZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0OTRiO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBpbnlpbkJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBsdXNCdG4gPSBjc3NgXHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cHJlc3Npb25Cb3ggPSAoKSA9PiB7XHJcbiAgY29uc3Qgb25DaGFuZ2VQaW55aW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgLy8gc2V0UGlueWluKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlTWVhbmluZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hcCgoZXhwcmVzc2lvbikgPT4ge1xyXG4gICAgICAgIGlmIChleHByZXNzaW9uTnVtID09PSBleHByZXNzaW9uLmV4cHJlc3Npb25OdW1iZXIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgICAgZXhwcmVzc2lvbltlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKHRlbXBFeHByZXNzaW9ucyk7XHJcbiAgICB9LFxyXG4gICAgW2V4cHJlc3Npb25zXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtleHByZXNzaW9ucywgc2V0RXhwcmVzc2lvbnNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBleHByZXNzaW9uTnVtYmVyOiAxLCBwaW55aW46ICcnLCBtZWFuaW5nOiAnJyB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhZGRFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXhwcmVzc2lvbk51bWJlcjogZXhwcmVzc2lvbnMubGVuZ3RoICsgMSxcclxuICAgICAgcGlueWluOiAnJyxcclxuICAgICAgbWVhbmluZzogJycsXHJcbiAgICB9O1xyXG4gICAgc2V0RXhwcmVzc2lvbnMoWy4uLmV4cHJlc3Npb25zLCBkYXRhXSk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhleHByZXNzaW9ucyk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbkJveH0gaWQ9XCJleHByZXNzaW9uLWJveFwiPlxyXG4gICAgICAgIHtleHByZXNzaW9ucy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17Ym94fSBrZXk9e3YuZXhwcmVzc2lvbk51bWJlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e3BpbnlpbkJveH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBpbnlpblwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ZWc7Ja067OR7J2M7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2LnBpbnlpbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlUGlueWluKGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lYW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrnLvsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2Lm1lYW5pbmd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VNZWFuaW5nKGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFBsdXNDaXJjbGVGaWxsZWQgY3NzPXtwbHVzQnRufSBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cHJlc3Npb25Cb3g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=