webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/LikeBtn.js":
/*!*******************************!*\
  !*** ./components/LikeBtn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\LikeBtn.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 80px;\n  padding: 4px 12px;\n  border: 1px solid #646a70;\n  border-radius: 20px;\n\n  @media (min-width: 768px) {\n    width: 100px;\n  }\n\n  span {\n    font-size: 18px;\n\n    @media (min-width: 768px) {\n      font-size: 24px;\n    }\n\n    &:first-child:hover {\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */




var likeBlock = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
var likeBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());

var LikeBtn = function LikeBtn(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); // const liked = post.Likers.find((v) => v.id === id);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      liked = _useState[0],
      setLiked = _useState[1];

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: likeBlock,
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: likeBox,
      children: [liked ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
        twoToneColor: "#ff748c"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 18
      }, _this) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 60
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: post.Likers.length === undefined ? 0 : post.Likers.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(LikeBtn, "XqOkm1knFfdVENne76W3jwUA42w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = LikeBtn;
/* harmony default export */ __webpack_exports__["default"] = (LikeBtn);

var _c;

$RefreshReg$(_c, "LikeBtn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaWtlQnRuLmpzIl0sIm5hbWVzIjpbImxpa2VCbG9jayIsImNzcyIsImxpa2VCb3giLCJMaWtlQnRuIiwicG9zdCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsIkxpa2VycyIsImxlbmd0aCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7QUFLQSxJQUFNQyxPQUFPLEdBQUdELDBEQUFILG9CQUFiOztBQTBCQSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzVCLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsNkJBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUF0QixtREFBVyxlQUFlSixFQUExQjtBQUFBLEdBQUQsQ0FBdEIsQ0FENEIsQ0FFNUI7O0FBRjRCLGtCQUdGSyxzREFBUSxDQUFDLElBQUQsQ0FITjtBQUFBLE1BR3JCQyxLQUhxQjtBQUFBLE1BR2RDLFFBSGM7O0FBSzVCLFNBQ0U7QUFBSyxPQUFHLEVBQUVaLFNBQVY7QUFBQSxjQUNFO0FBQUssU0FBRyxFQUFFRSxPQUFWO0FBQUEsaUJBQ0dTLEtBQUssR0FBRyw4RUFBQyw4REFBRDtBQUFjLG9CQUFZLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQTZDLDhFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEckQsRUFFRTtBQUFBLGtCQUFPUCxJQUFJLENBQUNTLE1BQUwsQ0FBWUMsTUFBWixLQUF1QkMsU0FBdkIsR0FBbUMsQ0FBbkMsR0FBdUNYLElBQUksQ0FBQ1MsTUFBTCxDQUFZQztBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FiRDs7R0FBTVgsTztVQUNPRyx1RDs7O0tBRFBILE87QUFlU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjZiNzI1MzYyYTcxMDJhZmFmOTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBIZWFydFR3b1RvbmUsIEhlYXJ0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBsaWtlQmxvY2sgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuY29uc3QgbGlrZUJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY0NmE3MDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZDpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMaWtlQnRuID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICAvLyBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2xpa2VCbG9ja30+XHJcbiAgICAgIDxkaXYgY3NzPXtsaWtlQm94fT5cclxuICAgICAgICB7bGlrZWQgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNmZjc0OGNcIiAvPiA6IDxIZWFydE91dGxpbmVkIC8+fVxyXG4gICAgICAgIDxzcGFuPntwb3N0Lkxpa2Vycy5sZW5ndGggPT09IHVuZGVmaW5lZCA/IDAgOiBwb3N0Lkxpa2Vycy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWtlQnRuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9