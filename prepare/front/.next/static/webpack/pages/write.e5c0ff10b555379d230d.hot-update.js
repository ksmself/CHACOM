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
/* harmony import */ var _ExpressionInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpressionInput */ "./components/ExpressionInput.js");





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

  var onChangePinyin = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setPinyin(e.target.value);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      meaning = _useState2[0],
      setMeaning = _useState2[1];

  var onChangeMeaning = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setMeaning(e.target.value);
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
              lineNumber: 84,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ConvertPopUp, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: meaning,
            onChange: onChangeMeaning
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleFilled"], {
      css: plusBtn,
      onClick: addExpression
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsInVzZVN0YXRlIiwicGlueWluIiwic2V0UGlueWluIiwib25DaGFuZ2VQaW55aW4iLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1lYW5pbmciLCJzZXRNZWFuaW5nIiwib25DaGFuZ2VNZWFuaW5nIiwiZXhwcmVzc2lvbk51bWJlciIsImV4cHJlc3Npb25zIiwic2V0RXhwcmVzc2lvbnMiLCJhZGRFeHByZXNzaW9uIiwiZGF0YSIsImxlbmd0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDBEQUFILG1CQUFuQjtBQU9BLElBQU1DLEdBQUcsR0FBR0QsMERBQUgsb0JBQVQ7QUFlQSxJQUFNRSxTQUFTLEdBQUdGLDBEQUFILG9CQUFmO0FBYUEsSUFBTUcsT0FBTyxHQUFHSCwwREFBSCxvQkFBYjs7QUFPQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQUUxQixNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDSCxhQUFTLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFsQzs7QUFGMEIsbUJBTUlQLHNEQUFRLENBQUMsRUFBRCxDQU5aO0FBQUEsTUFNbkJRLE9BTm1CO0FBQUEsTUFNVkMsVUFOVTs7QUFPMUIsTUFBTUMsZUFBZSxHQUFHTix5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUN6Q0ksY0FBVSxDQUFDSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FGa0MsRUFFaEMsRUFGZ0MsQ0FBbkM7O0FBUDBCLG1CQVdZUCxzREFBUSxDQUFDLENBQzdDO0FBQUVXLG9CQUFnQixFQUFFLENBQXBCO0FBQXVCVixVQUFNLEVBQUUsRUFBL0I7QUFBbUNPLFdBQU8sRUFBRTtBQUE1QyxHQUQ2QyxDQUFELENBWHBCO0FBQUEsTUFXbkJJLFdBWG1CO0FBQUEsTUFXTkMsY0FYTTs7QUFlMUIsTUFBTUMsYUFBYSxHQUFHVix5REFBVyxDQUFDLFlBQU07QUFDdEMsUUFBTVcsSUFBSSxHQUFHO0FBQ1hKLHNCQUFnQixFQUFFQyxXQUFXLENBQUNJLE1BQVosR0FBcUIsQ0FENUI7QUFFWGYsWUFBTSxFQUFFLEVBRkc7QUFHWE8sYUFBTyxFQUFFO0FBSEUsS0FBYjtBQUtBSyxrQkFBYywyS0FBS0QsV0FBTCxJQUFrQkcsSUFBbEIsR0FBZDtBQUNELEdBUGdDLEVBTzlCLENBQUNILFdBQUQsQ0FQOEIsQ0FBakM7QUFTQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLFdBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFBLGVBQ0U7QUFBSyxTQUFHLEVBQUVsQixhQUFWO0FBQXlCLFFBQUUsRUFBQyxnQkFBNUI7QUFBQSxnQkFDR2tCLFdBQVcsQ0FBQ1EsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQU87QUFDdEIsZUFDRTtBQUFLLGFBQUcsRUFBRXpCLEdBQVY7QUFBQSxxQkFDRTtBQUFLLGVBQUcsRUFBRUMsU0FBVjtBQUFBLHVCQUNFO0FBQ0UseUJBQVcsRUFBQyxxRUFEZDtBQUVFLG1CQUFLLEVBQUVJLE1BRlQ7QUFHRSxzQkFBUSxFQUFFRTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFNRSw4RUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBU0U7QUFDRSx1QkFBVyxFQUFDLG1EQURkO0FBRUUsaUJBQUssRUFBRUssT0FGVDtBQUdFLG9CQUFRLEVBQUVFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFpQkQsT0FsQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFzQkUsOEVBQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFFWixPQUF2QjtBQUFnQyxhQUFPLEVBQUVnQjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGO0FBQUEsa0JBREY7QUEwQkQsQ0F0REQ7O0dBQU1mLGE7O0tBQUFBLGE7QUF3RFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dyaXRlLmU1YzBmZjEwYjU1NTM3OWQyMzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgRXhwcmVzc2lvbklucHV0IGZyb20gJy4vRXhwcmVzc2lvbklucHV0JztcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IGJveCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMThkZGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ4NDk0YjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5Cb3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwbHVzQnRuID0gY3NzYFxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHByZXNzaW9uQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwaW55aW4sIHNldFBpbnlpbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VQaW55aW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0UGlueWluKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFttZWFuaW5nLCBzZXRNZWFuaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZU1lYW5pbmcgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0TWVhbmluZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbZXhwcmVzc2lvbnMsIHNldEV4cHJlc3Npb25zXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZXhwcmVzc2lvbk51bWJlcjogMSwgcGlueWluOiAnJywgbWVhbmluZzogJycgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgYWRkRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cHJlc3Npb25OdW1iZXI6IGV4cHJlc3Npb25zLmxlbmd0aCArIDEsXHJcbiAgICAgIHBpbnlpbjogJycsXHJcbiAgICAgIG1lYW5pbmc6ICcnLFxyXG4gICAgfTtcclxuICAgIHNldEV4cHJlc3Npb25zKFsuLi5leHByZXNzaW9ucywgZGF0YV0pO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXhwcmVzc2lvbnMpO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25Cb3h9IGlkPVwiZXhwcmVzc2lvbi1ib3hcIj5cclxuICAgICAgICB7ZXhwcmVzc2lvbnMubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17Ym94fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17cGlueWluQm94fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2VnOyWtOuzkeydjOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGlueWlufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQaW55aW59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrnLvsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTWVhbmluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UGx1c0NpcmNsZUZpbGxlZCBjc3M9e3BsdXNCdG59IG9uQ2xpY2s9e2FkZEV4cHJlc3Npb259IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvbkJveDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==