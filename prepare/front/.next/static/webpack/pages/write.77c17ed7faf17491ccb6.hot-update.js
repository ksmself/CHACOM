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
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: expressionBox,
      id: "expression-box",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        form: form,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
          name: "pinyin",
          label: "\uD55C\uC5B4\uBCD1\uC74C",
          rules: [{
            required: true,
            message: '한어병음을 입력해주세요!'
          }],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Input"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["PlusCircleFilled"], {
          css: plusBtn,
          onClick: addExpression
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            htmlType: "submit",
            children: "\uC644\uB8CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94LmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb25Cb3giLCJjc3MiLCJwbHVzQnRuIiwiRXhwcmVzc2lvbkJveCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVN0YXRlIiwiZXhwcmVzc2lvbk51bWJlciIsInBpbnlpbiIsIm1lYW5pbmciLCJleHByZXNzaW9ucyIsInNldEV4cHJlc3Npb25zIiwiYWRkRXhwcmVzc2lvbiIsInVzZUNhbGxiYWNrIiwiZGF0YSIsImxlbmd0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsMERBQUgsbUJBQW5CO0FBT0EsSUFBTUMsT0FBTyxHQUFHRCwwREFBSCxvQkFBYjs7QUFPQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxzQkFDWEMseUNBQUksQ0FBQ0MsT0FBTCxFQURXO0FBQUE7QUFBQSxNQUNuQkMsSUFEbUI7O0FBQUEsa0JBR1lDLHNEQUFRLENBQUMsQ0FDN0M7QUFBRUMsb0JBQWdCLEVBQUUsQ0FBcEI7QUFBdUJDLFVBQU0sRUFBRSxFQUEvQjtBQUFtQ0MsV0FBTyxFQUFFO0FBQTVDLEdBRDZDLENBQUQsQ0FIcEI7QUFBQSxNQUduQkMsV0FIbUI7QUFBQSxNQUdOQyxjQUhNOztBQU8xQixNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0QyxRQUFNQyxJQUFJLEdBQUc7QUFDWFAsc0JBQWdCLEVBQUVHLFdBQVcsQ0FBQ0ssTUFBWixHQUFxQixDQUQ1QjtBQUVYUCxZQUFNLEVBQUUsRUFGRztBQUdYQyxhQUFPLEVBQUU7QUFIRSxLQUFiO0FBS0FFLGtCQUFjLDJLQUFLRCxXQUFMLElBQWtCSSxJQUFsQixHQUFkO0FBQ0QsR0FQZ0MsRUFPOUIsQ0FBQ0osV0FBRCxDQVA4QixDQUFqQztBQVNBTSx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlSLFdBQVo7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsV0FBRCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUEsY0FDRTtBQUFLLFNBQUcsRUFBRVgsYUFBVjtBQUF5QixRQUFFLEVBQUMsZ0JBQTVCO0FBQUEsZ0JBRUUsOEVBQUMseUNBQUQ7QUFBTSxZQUFJLEVBQUVNLElBQVo7QUFBQSxtQkFDRSw4RUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGVBQUssRUFBQywwQkFGUjtBQUdFLGVBQUssRUFBRSxDQUNMO0FBQ0VjLG9CQUFRLEVBQUUsSUFEWjtBQUVFQyxtQkFBTyxFQUFFO0FBRlgsV0FESyxDQUhUO0FBQUEsb0JBVUUsOEVBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFhRSw4RUFBQyxrRUFBRDtBQUFrQixhQUFHLEVBQUVuQixPQUF2QjtBQUFnQyxpQkFBTyxFQUFFVztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLEVBY0UsOEVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsb0JBQ0UsOEVBQUMsMkNBQUQ7QUFBUSxvQkFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF5QkQsQ0E3Q0Q7O0dBQU1WLGE7VUFDV0MseUNBQUksQ0FBQ0MsTzs7O0tBRGhCRixhO0FBK0NTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS43N2MxN2VkN2ZhZjE3NDkxY2NiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgRXhwcmVzc2lvbklucHV0IGZyb20gJy4vRXhwcmVzc2lvbklucHV0JztcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IHBsdXNCdG4gPSBjc3NgXHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEV4cHJlc3Npb25Cb3ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcblxyXG4gIGNvbnN0IFtleHByZXNzaW9ucywgc2V0RXhwcmVzc2lvbnNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBleHByZXNzaW9uTnVtYmVyOiAxLCBwaW55aW46ICcnLCBtZWFuaW5nOiAnJyB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhZGRFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXhwcmVzc2lvbk51bWJlcjogZXhwcmVzc2lvbnMubGVuZ3RoICsgMSxcclxuICAgICAgcGlueWluOiAnJyxcclxuICAgICAgbWVhbmluZzogJycsXHJcbiAgICB9O1xyXG4gICAgc2V0RXhwcmVzc2lvbnMoWy4uLmV4cHJlc3Npb25zLCBkYXRhXSk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhleHByZXNzaW9ucyk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbkJveH0gaWQ9XCJleHByZXNzaW9uLWJveFwiPlxyXG4gICAgICAgIHsvKiA8RXhwcmVzc2lvbklucHV0IC8+ICovfVxyXG4gICAgICAgIDxGb3JtIGZvcm09e2Zvcm19PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwicGlueWluXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLtlZzslrTrs5HsnYxcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+2VnOyWtOuzkeydjOydhCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPFBsdXNDaXJjbGVGaWxsZWQgY3NzPXtwbHVzQnRufSBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHByZXNzaW9uQm94O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9