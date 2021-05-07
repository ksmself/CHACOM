webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainContent.js":
/*!***********************************!*\
  !*** ./components/MainContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostCard */ "./components/PostCard.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\MainContent.js",
    _this = undefined;

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */


var mainContent = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());

var MainContent = function MainContent() {
  var mainPosts = [{
    title: '반시밀당 1회 라운희 대사',
    content: null,
    tag: ['라운희', '반시밀당반시상', '드라마', '실생활'],
    date: '2021년 5월 9일',
    writer: 'luoyunxi_02',
    like: 33,
    comment: 3
  }, {
    title: '란잔을 좋아했던 사람이라면 무조건 알 수 있는 표현 7가지',
    content: null,
    tag: ['왕이보', '진정령', '드라마'],
    date: '2021년 5월 24일',
    writer: 'bylulu_02',
    like: 24,
    comment: 1
  }, {
    title: "'종결혼개시연애' 유유만큼의 표현력이라도 얻고 싶은 사람들 드루와",
    content: null,
    tag: ['종결혼개시연애', '드라마'],
    date: '2021년 5월 28일',
    writer: 'yuyubaba_02',
    like: 4,
    comment: 2
  }];
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: mainContent,
    children: mainPosts.map(function (v) {
      return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"] // title={v.title}
      // content={v.content}
      // tag={v.tag}
      // date={v.date}
      // writer={v.writer}
      // like={v.like}
      // comment={v.comment}
      , {
        post: v
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_c = MainContent;
/* harmony default export */ __webpack_exports__["default"] = (MainContent);

var _c;

$RefreshReg$(_c, "MainContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGVudC5qcyJdLCJuYW1lcyI6WyJtYWluQ29udGVudCIsImNzcyIsIk1haW5Db250ZW50IiwibWFpblBvc3RzIiwidGl0bGUiLCJjb250ZW50IiwidGFnIiwiZGF0ZSIsIndyaXRlciIsImxpa2UiLCJjb21tZW50IiwibWFwIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCOztBQU1BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQ0VDLFNBQUssRUFBRSxnQkFEVDtBQUVFQyxXQUFPLEVBQUUsSUFGWDtBQUdFQyxPQUFHLEVBQUUsQ0FBQyxLQUFELEVBQVEsU0FBUixFQUFtQixLQUFuQixFQUEwQixLQUExQixDQUhQO0FBSUVDLFFBQUksRUFBRSxhQUpSO0FBS0VDLFVBQU0sRUFBRSxhQUxWO0FBTUVDLFFBQUksRUFBRSxFQU5SO0FBT0VDLFdBQU8sRUFBRTtBQVBYLEdBRGdCLEVBVWhCO0FBQ0VOLFNBQUssRUFBRSxrQ0FEVDtBQUVFQyxXQUFPLEVBQUUsSUFGWDtBQUdFQyxPQUFHLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FIUDtBQUlFQyxRQUFJLEVBQUUsY0FKUjtBQUtFQyxVQUFNLEVBQUUsV0FMVjtBQU1FQyxRQUFJLEVBQUUsRUFOUjtBQU9FQyxXQUFPLEVBQUU7QUFQWCxHQVZnQixFQW1CaEI7QUFDRU4sU0FBSyxFQUFFLHNDQURUO0FBRUVDLFdBQU8sRUFBRSxJQUZYO0FBR0VDLE9BQUcsRUFBRSxDQUFDLFNBQUQsRUFBWSxLQUFaLENBSFA7QUFJRUMsUUFBSSxFQUFFLGNBSlI7QUFLRUMsVUFBTSxFQUFFLGFBTFY7QUFNRUMsUUFBSSxFQUFFLENBTlI7QUFPRUMsV0FBTyxFQUFFO0FBUFgsR0FuQmdCLENBQWxCO0FBOEJBLFNBQ0U7QUFBSyxPQUFHLEVBQUVWLFdBQVY7QUFBQSxjQUNHRyxTQUFTLENBQUNRLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQU87QUFDcEIsYUFDRSw4RUFBQyxpREFBRCxDQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEY7QUFRRSxZQUFJLEVBQUVBO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsS0FiQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQXBERDs7S0FBTVYsVztBQXNEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjIwN2MxMzZmNDg0YjJjODljZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuL1Bvc3RDYXJkJztcclxuXHJcbmNvbnN0IG1haW5Db250ZW50ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpblBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+uwmOyLnOuwgOuLuSAx7ZqMIOudvOyatO2drCDrjIDsgqwnLFxyXG4gICAgICBjb250ZW50OiBudWxsLFxyXG4gICAgICB0YWc6IFsn65287Jq07Z2sJywgJ+uwmOyLnOuwgOuLueuwmOyLnOyDgScsICfrk5zrnbzrp4gnLCAn7Iuk7IOd7ZmcJ10sXHJcbiAgICAgIGRhdGU6ICcyMDIx64WEIDXsm5QgOeydvCcsXHJcbiAgICAgIHdyaXRlcjogJ2x1b3l1bnhpXzAyJyxcclxuICAgICAgbGlrZTogMzMsXHJcbiAgICAgIGNvbW1lbnQ6IDMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+uegOyelOydhCDsoovslYTtlojrjZgg7IKs656M7J20652866m0IOustOyhsOqxtCDslYwg7IiYIOyeiOuKlCDtkZztmIQgN+qwgOyngCcsXHJcbiAgICAgIGNvbnRlbnQ6IG51bGwsXHJcbiAgICAgIHRhZzogWyfsmZXsnbTrs7QnLCAn7KeE7KCV66C5JywgJ+uTnOudvOuniCddLFxyXG4gICAgICBkYXRlOiAnMjAyMeuFhCA17JuUIDI07J28JyxcclxuICAgICAgd3JpdGVyOiAnYnlsdWx1XzAyJyxcclxuICAgICAgbGlrZTogMjQsXHJcbiAgICAgIGNvbW1lbnQ6IDEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCIn7KKF6rKw7Zi86rCc7Iuc7Jew7JWgJyDsnKDsnKDrp4ztgbzsnZgg7ZGc7ZiE66Cl7J20652864+EIOyWu+qzoCDsi7bsnYAg7IKs656M65OkIOuTnOujqOyZgFwiLFxyXG4gICAgICBjb250ZW50OiBudWxsLFxyXG4gICAgICB0YWc6IFsn7KKF6rKw7Zi86rCc7Iuc7Jew7JWgJywgJ+uTnOudvOuniCddLFxyXG4gICAgICBkYXRlOiAnMjAyMeuFhCA17JuUIDI47J28JyxcclxuICAgICAgd3JpdGVyOiAneXV5dWJhYmFfMDInLFxyXG4gICAgICBsaWtlOiA0LFxyXG4gICAgICBjb21tZW50OiAyLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e21haW5Db250ZW50fT5cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHYpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFBvc3RDYXJkXHJcbiAgICAgICAgICAgIC8vIHRpdGxlPXt2LnRpdGxlfVxyXG4gICAgICAgICAgICAvLyBjb250ZW50PXt2LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIC8vIHRhZz17di50YWd9XHJcbiAgICAgICAgICAgIC8vIGRhdGU9e3YuZGF0ZX1cclxuICAgICAgICAgICAgLy8gd3JpdGVyPXt2LndyaXRlcn1cclxuICAgICAgICAgICAgLy8gbGlrZT17di5saWtlfVxyXG4gICAgICAgICAgICAvLyBjb21tZW50PXt2LmNvbW1lbnR9XHJcbiAgICAgICAgICAgIHBvc3Q9e3Z9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7LyogPENvbCB4cz17MjJ9IG1kPXs5fSBsZz17Nn0+XHJcbiAgICAgICAgPFBvc3RDYXJkIC8+XHJcbiAgICAgIDwvQ29sPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==