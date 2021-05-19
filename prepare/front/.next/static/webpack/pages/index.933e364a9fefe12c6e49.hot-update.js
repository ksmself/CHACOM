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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostCard */ "./components/PostCard.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\MainContent.js",
    _this = undefined;

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: grid;\n  grid-template-columns: 290px;\n  justify-content: space-evenly;\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 300px);\n  }\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, 300px);\n  }\n\n  @media (min-width: 1440px) {\n    grid-template-columns: repeat(4, 300px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */



var mainContent = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());

var MainContent = function MainContent(_ref) {
  var posts = _ref.posts;
  var mainPosts = [{
    id: 0,
    title: '반시밀당 1회 라운희 대사',
    content: null,
    tag: ['라운희', '반시밀당반시상', '드라마', '실생활표현', 'luó yún xī', '백록', '중국드라마'],
    date: '2021년 5월 9일',
    User: {
      id: 0,
      nickname: 'luoyunxi_02'
    },
    like: 33,
    comment: 3
  }, {
    id: 1,
    title: '란잔을 좋아했던 사람이라면 무조건 알 수 있는 표현 7가지',
    content: null,
    tag: ['왕이보', '진정령', '드라마'],
    date: '2021년 5월 24일',
    User: {
      id: 1,
      nickname: 'bylulu_05'
    },
    like: 24,
    comment: 1
  }, {
    id: 2,
    title: '인사로 가장 많이 쓰이는 표현 10가지',
    content: null,
    tag: ['인사'],
    date: '2021년 5월 28일',
    User: {
      id: 2,
      nickname: 'yuyubaba'
    },
    like: 4,
    comment: 2
  }, {
    id: 3,
    title: '라운희가 210327 라방에서 게임하면서 사용한 표현 모두 알아보기',
    content: null,
    tag: ['라운희', 'luó yún xī', '게임'],
    date: '2021년 5월 29일',
    User: {
      id: 3,
      nickname: 'luvyunxi'
    },
    like: 9,
    comment: 5
  }, {
    id: 4,
    title: '중국인 vlogger들이 영상에서 자주 사용하는 표현',
    content: null,
    tag: ['vlog', '실생활'],
    date: '2021년 5월 29일',
    User: {
      id: 4,
      nickname: 'luoyunxi'
    },
    like: 9,
    comment: 5
  }];
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: mainContent,
    children: posts.map(function (post, index) {
      return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGVudC5qcyJdLCJuYW1lcyI6WyJtYWluQ29udGVudCIsImNzcyIsIk1haW5Db250ZW50IiwicG9zdHMiLCJtYWluUG9zdHMiLCJpZCIsInRpdGxlIiwiY29udGVudCIsInRhZyIsImRhdGUiLCJVc2VyIiwibmlja25hbWUiLCJsaWtlIiwiY29tbWVudCIsIm1hcCIsInBvc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCOztBQWtCQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2pDLE1BQU1DLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxTQUFLLEVBQUUsZ0JBRlQ7QUFHRUMsV0FBTyxFQUFFLElBSFg7QUFJRUMsT0FBRyxFQUFFLENBQ0gsS0FERyxFQUVILFNBRkcsRUFHSCxLQUhHLEVBSUgsT0FKRyxFQUtILFlBTEcsRUFNSCxJQU5HLEVBT0gsT0FQRyxDQUpQO0FBYUVDLFFBQUksRUFBRSxhQWJSO0FBY0VDLFFBQUksRUFBRTtBQUNKTCxRQUFFLEVBQUUsQ0FEQTtBQUVKTSxjQUFRLEVBQUU7QUFGTixLQWRSO0FBa0JFQyxRQUFJLEVBQUUsRUFsQlI7QUFtQkVDLFdBQU8sRUFBRTtBQW5CWCxHQURnQixFQXNCaEI7QUFDRVIsTUFBRSxFQUFFLENBRE47QUFFRUMsU0FBSyxFQUFFLGtDQUZUO0FBR0VDLFdBQU8sRUFBRSxJQUhYO0FBSUVDLE9BQUcsRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUpQO0FBS0VDLFFBQUksRUFBRSxjQUxSO0FBTUVDLFFBQUksRUFBRTtBQUNKTCxRQUFFLEVBQUUsQ0FEQTtBQUVKTSxjQUFRLEVBQUU7QUFGTixLQU5SO0FBVUVDLFFBQUksRUFBRSxFQVZSO0FBV0VDLFdBQU8sRUFBRTtBQVhYLEdBdEJnQixFQW1DaEI7QUFDRVIsTUFBRSxFQUFFLENBRE47QUFFRUMsU0FBSyxFQUFFLHVCQUZUO0FBR0VDLFdBQU8sRUFBRSxJQUhYO0FBSUVDLE9BQUcsRUFBRSxDQUFDLElBQUQsQ0FKUDtBQUtFQyxRQUFJLEVBQUUsY0FMUjtBQU1FQyxRQUFJLEVBQUU7QUFDSkwsUUFBRSxFQUFFLENBREE7QUFFSk0sY0FBUSxFQUFFO0FBRk4sS0FOUjtBQVVFQyxRQUFJLEVBQUUsQ0FWUjtBQVdFQyxXQUFPLEVBQUU7QUFYWCxHQW5DZ0IsRUFnRGhCO0FBQ0VSLE1BQUUsRUFBRSxDQUROO0FBRUVDLFNBQUssRUFBRSx1Q0FGVDtBQUdFQyxXQUFPLEVBQUUsSUFIWDtBQUlFQyxPQUFHLEVBQUUsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixJQUF0QixDQUpQO0FBS0VDLFFBQUksRUFBRSxjQUxSO0FBTUVDLFFBQUksRUFBRTtBQUNKTCxRQUFFLEVBQUUsQ0FEQTtBQUVKTSxjQUFRLEVBQUU7QUFGTixLQU5SO0FBVUVDLFFBQUksRUFBRSxDQVZSO0FBV0VDLFdBQU8sRUFBRTtBQVhYLEdBaERnQixFQTZEaEI7QUFDRVIsTUFBRSxFQUFFLENBRE47QUFFRUMsU0FBSyxFQUFFLCtCQUZUO0FBR0VDLFdBQU8sRUFBRSxJQUhYO0FBSUVDLE9BQUcsRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULENBSlA7QUFLRUMsUUFBSSxFQUFFLGNBTFI7QUFNRUMsUUFBSSxFQUFFO0FBQ0pMLFFBQUUsRUFBRSxDQURBO0FBRUpNLGNBQVEsRUFBRTtBQUZOLEtBTlI7QUFVRUMsUUFBSSxFQUFFLENBVlI7QUFXRUMsV0FBTyxFQUFFO0FBWFgsR0E3RGdCLENBQWxCO0FBNEVBLFNBQ0U7QUFBSyxPQUFHLEVBQUViLFdBQVY7QUFBQSxjQUNHRyxLQUFLLENBQUNXLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDMUIsYUFBTyw4RUFBQyxpREFBRDtBQUFVLFlBQUksRUFBRUQ7QUFBaEIsU0FBMkJDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXBGRDs7S0FBTWQsVztBQXNGU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMzZTM2NGE5ZmVmZTEyYzZlNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuL1Bvc3RDYXJkJztcclxuXHJcbmNvbnN0IG1haW5Db250ZW50ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzMDBweCk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMDBweCk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAzMDBweCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgY29uc3QgbWFpblBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgdGl0bGU6ICfrsJjsi5zrsIDri7kgMe2ajCDrnbzsmrTtnawg64yA7IKsJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbXHJcbiAgICAgICAgJ+udvOyatO2drCcsXHJcbiAgICAgICAgJ+uwmOyLnOuwgOuLueuwmOyLnOyDgScsXHJcbiAgICAgICAgJ+uTnOudvOuniCcsXHJcbiAgICAgICAgJ+yLpOyDne2ZnO2RnO2YhCcsXHJcbiAgICAgICAgJ2x1w7MgecO6biB4xKsnLFxyXG4gICAgICAgICfrsLHroZ0nLFxyXG4gICAgICAgICfspJHqta3rk5zrnbzrp4gnLFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRlOiAnMjAyMeuFhCA17JuUIDnsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbmlja25hbWU6ICdsdW95dW54aV8wMicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpa2U6IDMzLFxyXG4gICAgICBjb21tZW50OiAzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRpdGxlOiAn656A7J6U7J2EIOyii+yVhO2WiOuNmCDsgqzrnozsnbTrnbzrqbQg66y07KGw6rG0IOyVjCDsiJgg7J6I64qUIO2RnO2YhCA36rCA7KeAJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbJ+yZleydtOuztCcsICfsp4TsoJXroLknLCAn65Oc652866eIJ10sXHJcbiAgICAgIGRhdGU6ICcyMDIx64WEIDXsm5QgMjTsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdieWx1bHVfMDUnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWtlOiAyNCxcclxuICAgICAgY29tbWVudDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB0aXRsZTogJ+yduOyCrOuhnCDqsIDsnqUg66eO7J20IOyTsOydtOuKlCDtkZztmIQgMTDqsIDsp4AnLFxyXG4gICAgICBjb250ZW50OiBudWxsLFxyXG4gICAgICB0YWc6IFsn7J247IKsJ10sXHJcbiAgICAgIGRhdGU6ICcyMDIx64WEIDXsm5QgMjjsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmlja25hbWU6ICd5dXl1YmFiYScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpa2U6IDQsXHJcbiAgICAgIGNvbW1lbnQ6IDIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdGl0bGU6ICfrnbzsmrTtnazqsIAgMjEwMzI3IOudvOuwqeyXkOyEnCDqsozsnoTtlZjrqbTshJwg7IKs7Jqp7ZWcIO2RnO2YhCDrqqjrkZAg7JWM7JWE67O06riwJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbJ+udvOyatO2drCcsICdsdcOzIHnDum4geMSrJywgJ+qyjOyehCddLFxyXG4gICAgICBkYXRlOiAnMjAyMeuFhCA17JuUIDI57J28JyxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnbHV2eXVueGknLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWtlOiA5LFxyXG4gICAgICBjb21tZW50OiA1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHRpdGxlOiAn7KSR6rWt7J24IHZsb2dnZXLrk6TsnbQg7JiB7IOB7JeQ7IScIOyekOyjvCDsgqzsmqntlZjripQg7ZGc7ZiEJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbJ3Zsb2cnLCAn7Iuk7IOd7ZmcJ10sXHJcbiAgICAgIGRhdGU6ICcyMDIx64WEIDXsm5QgMjnsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmlja25hbWU6ICdsdW95dW54aScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpa2U6IDksXHJcbiAgICAgIGNvbW1lbnQ6IDUsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17bWFpbkNvbnRlbnR9PlxyXG4gICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtpbmRleH0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250ZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9