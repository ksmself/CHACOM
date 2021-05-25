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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/styles.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\DeleteBtn.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */




var confirm = antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].confirm;

var DeleteBtn = function DeleteBtn(_ref) {
  _s();

  var post = _ref.post;
  var showDeleteConfirm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    confirm({
      title: '게시물 삭제',
      icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationCircleOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, _this),
      content: '정말로 이 게시물을 삭제하시겠습니까?',
      okText: '삭제',
      okType: 'danger',
      cancelText: '취소',
      onOk: function onOk() {
        console.log('OK');
      },
      onCancel: function onCancel() {
        console.log('Cancel');
      }
    });
  });
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {}, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    css: _styles__WEBPACK_IMPORTED_MODULE_4__["greyBtn"],
    onClick: showDeleteConfirm,
    children: "\uC0AD\uC81C"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(DeleteBtn, "MazSsgfQzl5P0b+nRJhoDmYO5uU=");

_c = DeleteBtn;
/* harmony default export */ __webpack_exports__["default"] = (DeleteBtn);

var _c;

$RefreshReg$(_c, "DeleteBtn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVCdG4uanMiXSwibmFtZXMiOlsiY29uZmlybSIsIk1vZGFsIiwiRGVsZXRlQnRuIiwicG9zdCIsInNob3dEZWxldGVDb25maXJtIiwidXNlQ2FsbGJhY2siLCJ0aXRsZSIsImljb24iLCJjb250ZW50Iiwib2tUZXh0Iiwib2tUeXBlIiwiY2FuY2VsVGV4dCIsIm9uT2siLCJjb25zb2xlIiwibG9nIiwib25DYW5jZWwiLCJvblJlbW92ZVBvc3QiLCJncmV5QnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7SUFFUUEsTyxHQUFZQywwQyxDQUFaRCxPOztBQUVSLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUIsTUFBTUMsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMxQ0wsV0FBTyxDQUFDO0FBQ05NLFdBQUssRUFBRSxRQUREO0FBRU5DLFVBQUksRUFBRSw4RUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFHTkMsYUFBTyxFQUFFLHNCQUhIO0FBSU5DLFlBQU0sRUFBRSxJQUpGO0FBS05DLFlBQU0sRUFBRSxRQUxGO0FBTU5DLGdCQUFVLEVBQUUsSUFOTjtBQU9OQyxVQVBNLGtCQU9DO0FBQ0xDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDRCxPQVRLO0FBVU5DLGNBVk0sc0JBVUs7QUFDVEYsZUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBWkssS0FBRCxDQUFQO0FBY0QsR0Fmb0MsQ0FBckM7QUFpQkEsTUFBTUUsWUFBWSxHQUFHWCx5REFBVyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFoQztBQUVBLFNBQ0U7QUFBUSxPQUFHLEVBQUVZLCtDQUFiO0FBQXNCLFdBQU8sRUFBRWIsaUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXpCRDs7R0FBTUYsUzs7S0FBQUEsUztBQTJCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjU5Mzc2ODFhMmRjNjE1ODYwZGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCB7IGdyZXlCdG4gfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuY29uc3QgRGVsZXRlQnRuID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3Qgc2hvd0RlbGV0ZUNvbmZpcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgdGl0bGU6ICfqsozsi5zrrLwg7IKt7KCcJyxcclxuICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXHJcbiAgICAgIGNvbnRlbnQ6ICfsoJXrp5DroZwg7J20IOqyjOyLnOusvOydhCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgb2tUZXh0OiAn7IKt7KCcJyxcclxuICAgICAgb2tUeXBlOiAnZGFuZ2VyJyxcclxuICAgICAgY2FuY2VsVGV4dDogJ+y3qOyGjCcsXHJcbiAgICAgIG9uT2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09LJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW5jZWwnKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBjc3M9e2dyZXlCdG59IG9uQ2xpY2s9e3Nob3dEZWxldGVDb25maXJtfT5cclxuICAgICAg7IKt7KCcXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlQnRuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9