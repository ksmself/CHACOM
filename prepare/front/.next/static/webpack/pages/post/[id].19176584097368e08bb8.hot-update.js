webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/DeleteBtn.js":
/*!*********************************!*\
  !*** ./components/DeleteBtn.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/styles.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\DeleteBtn.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .ant-modal-confirm-body .ant-modal-confirm-title{\n    font-weight: 700;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */





var confirm = antd__WEBPACK_IMPORTED_MODULE_3__["Modal"].confirm;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject());
_c = Global;

var DeleteBtn = function DeleteBtn(_ref) {
  _s();

  var post = _ref.post;
  var showDeleteConfirm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    confirm({
      title: '게시물 삭제',
      icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ExclamationCircleOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this),
      content: '정말로 이 게시물을 삭제하시겠습니까?',
      okText: '삭제',
      okType: 'danger',
      cancelText: '취소',
      onOk: function onOk() {
        console.log('OK');
      }
    });
  });
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {}, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      css: _styles__WEBPACK_IMPORTED_MODULE_6__["greyBtn"],
      onClick: showDeleteConfirm,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(DeleteBtn, "MazSsgfQzl5P0b+nRJhoDmYO5uU=");

_c2 = DeleteBtn;
/* harmony default export */ __webpack_exports__["default"] = (DeleteBtn);

var _c, _c2;

$RefreshReg$(_c, "Global");
$RefreshReg$(_c2, "DeleteBtn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVCdG4uanMiXSwibmFtZXMiOlsiY29uZmlybSIsIk1vZGFsIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJEZWxldGVCdG4iLCJwb3N0Iiwic2hvd0RlbGV0ZUNvbmZpcm0iLCJ1c2VDYWxsYmFjayIsInRpdGxlIiwiaWNvbiIsImNvbnRlbnQiLCJva1RleHQiLCJva1R5cGUiLCJjYW5jZWxUZXh0Iiwib25PayIsImNvbnNvbGUiLCJsb2ciLCJvblJlbW92ZVBvc3QiLCJncmV5QnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0lBRVFBLE8sR0FBWUMsMEMsQ0FBWkQsTztBQUVSLElBQU1FLE1BQU0sR0FBR0MsMkVBQUgsbUJBQVo7S0FBTUQsTTs7QUFNTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzlCLE1BQU1DLGlCQUFpQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDMUNQLFdBQU8sQ0FBQztBQUNOUSxXQUFLLEVBQUUsUUFERDtBQUVOQyxVQUFJLEVBQUUsOEVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBR05DLGFBQU8sRUFBRSxzQkFISDtBQUlOQyxZQUFNLEVBQUUsSUFKRjtBQUtOQyxZQUFNLEVBQUUsUUFMRjtBQU1OQyxnQkFBVSxFQUFFLElBTk47QUFPTkMsVUFQTSxrQkFPQztBQUNMQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7QUFUSyxLQUFELENBQVA7QUFXRCxHQVpvQyxDQUFyQztBQWNBLE1BQU1DLFlBQVksR0FBR1YseURBQVcsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBaEM7QUFFQSxTQUNFO0FBQUEsZUFDRSw4RUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQVEsU0FBRyxFQUFFVywrQ0FBYjtBQUFzQixhQUFPLEVBQUVaLGlCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFRRCxDQXpCRDs7R0FBTUYsUzs7TUFBQUEsUztBQTJCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjE5MTc2NTg0MDk3MzY4ZTA4YmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBncmV5QnRuIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5hbnQtbW9kYWwtY29uZmlybS1ib2R5IC5hbnQtbW9kYWwtY29uZmlybS10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnRuID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3Qgc2hvd0RlbGV0ZUNvbmZpcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfqsozsi5zrrLwg7IKt7KCcJyxcclxuICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXHJcbiAgICAgIGNvbnRlbnQ6ICfsoJXrp5DroZwg7J20IOqyjOyLnOusvOydhCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgb2tUZXh0OiAn7IKt7KCcJyxcclxuICAgICAgb2tUeXBlOiAnZGFuZ2VyJyxcclxuICAgICAgY2FuY2VsVGV4dDogJ+y3qOyGjCcsXHJcbiAgICAgIG9uT2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09LJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPGJ1dHRvbiBjc3M9e2dyZXlCdG59IG9uQ2xpY2s9e3Nob3dEZWxldGVDb25maXJtfT5cclxuICAgICAgICDsgq3soJxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlQnRuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9