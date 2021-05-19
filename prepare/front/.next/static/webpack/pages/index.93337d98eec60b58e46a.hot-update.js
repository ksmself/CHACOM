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
    children: posts.map(function (post) {
      return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGVudC5qcyJdLCJuYW1lcyI6WyJtYWluQ29udGVudCIsImNzcyIsIk1haW5Db250ZW50IiwicG9zdHMiLCJtYWluUG9zdHMiLCJpZCIsInRpdGxlIiwiY29udGVudCIsInRhZyIsImRhdGUiLCJVc2VyIiwibmlja25hbWUiLCJsaWtlIiwiY29tbWVudCIsIm1hcCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDBEQUFILG1CQUFqQjs7QUFrQkEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNqQyxNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsU0FBSyxFQUFFLGdCQUZUO0FBR0VDLFdBQU8sRUFBRSxJQUhYO0FBSUVDLE9BQUcsRUFBRSxDQUNILEtBREcsRUFFSCxTQUZHLEVBR0gsS0FIRyxFQUlILE9BSkcsRUFLSCxZQUxHLEVBTUgsSUFORyxFQU9ILE9BUEcsQ0FKUDtBQWFFQyxRQUFJLEVBQUUsYUFiUjtBQWNFQyxRQUFJLEVBQUU7QUFDSkwsUUFBRSxFQUFFLENBREE7QUFFSk0sY0FBUSxFQUFFO0FBRk4sS0FkUjtBQWtCRUMsUUFBSSxFQUFFLEVBbEJSO0FBbUJFQyxXQUFPLEVBQUU7QUFuQlgsR0FEZ0IsRUFzQmhCO0FBQ0VSLE1BQUUsRUFBRSxDQUROO0FBRUVDLFNBQUssRUFBRSxrQ0FGVDtBQUdFQyxXQUFPLEVBQUUsSUFIWDtBQUlFQyxPQUFHLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FKUDtBQUtFQyxRQUFJLEVBQUUsY0FMUjtBQU1FQyxRQUFJLEVBQUU7QUFDSkwsUUFBRSxFQUFFLENBREE7QUFFSk0sY0FBUSxFQUFFO0FBRk4sS0FOUjtBQVVFQyxRQUFJLEVBQUUsRUFWUjtBQVdFQyxXQUFPLEVBQUU7QUFYWCxHQXRCZ0IsRUFtQ2hCO0FBQ0VSLE1BQUUsRUFBRSxDQUROO0FBRUVDLFNBQUssRUFBRSx1QkFGVDtBQUdFQyxXQUFPLEVBQUUsSUFIWDtBQUlFQyxPQUFHLEVBQUUsQ0FBQyxJQUFELENBSlA7QUFLRUMsUUFBSSxFQUFFLGNBTFI7QUFNRUMsUUFBSSxFQUFFO0FBQ0pMLFFBQUUsRUFBRSxDQURBO0FBRUpNLGNBQVEsRUFBRTtBQUZOLEtBTlI7QUFVRUMsUUFBSSxFQUFFLENBVlI7QUFXRUMsV0FBTyxFQUFFO0FBWFgsR0FuQ2dCLEVBZ0RoQjtBQUNFUixNQUFFLEVBQUUsQ0FETjtBQUVFQyxTQUFLLEVBQUUsdUNBRlQ7QUFHRUMsV0FBTyxFQUFFLElBSFg7QUFJRUMsT0FBRyxFQUFFLENBQUMsS0FBRCxFQUFRLFlBQVIsRUFBc0IsSUFBdEIsQ0FKUDtBQUtFQyxRQUFJLEVBQUUsY0FMUjtBQU1FQyxRQUFJLEVBQUU7QUFDSkwsUUFBRSxFQUFFLENBREE7QUFFSk0sY0FBUSxFQUFFO0FBRk4sS0FOUjtBQVVFQyxRQUFJLEVBQUUsQ0FWUjtBQVdFQyxXQUFPLEVBQUU7QUFYWCxHQWhEZ0IsRUE2RGhCO0FBQ0VSLE1BQUUsRUFBRSxDQUROO0FBRUVDLFNBQUssRUFBRSwrQkFGVDtBQUdFQyxXQUFPLEVBQUUsSUFIWDtBQUlFQyxPQUFHLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUpQO0FBS0VDLFFBQUksRUFBRSxjQUxSO0FBTUVDLFFBQUksRUFBRTtBQUNKTCxRQUFFLEVBQUUsQ0FEQTtBQUVKTSxjQUFRLEVBQUU7QUFGTixLQU5SO0FBVUVDLFFBQUksRUFBRSxDQVZSO0FBV0VDLFdBQU8sRUFBRTtBQVhYLEdBN0RnQixDQUFsQjtBQTRFQSxTQUNFO0FBQUssT0FBRyxFQUFFYixXQUFWO0FBQUEsY0FDR0csS0FBSyxDQUFDVyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLGFBQU8sOEVBQUMsaURBQUQ7QUFBVSxZQUFJLEVBQUVBO0FBQWhCLFNBQTJCQSxJQUFJLENBQUNWLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXBGRDs7S0FBTUgsVztBQXNGU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMzMzdkOThlZWM2MGI1OGU0NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuXHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuL1Bvc3RDYXJkJztcclxuXHJcbmNvbnN0IG1haW5Db250ZW50ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzMDBweCk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMDBweCk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAzMDBweCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRlbnQgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgY29uc3QgbWFpblBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgdGl0bGU6ICfrsJjsi5zrsIDri7kgMe2ajCDrnbzsmrTtnawg64yA7IKsJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbXHJcbiAgICAgICAgJ+udvOyatO2drCcsXHJcbiAgICAgICAgJ+uwmOyLnOuwgOuLueuwmOyLnOyDgScsXHJcbiAgICAgICAgJ+uTnOudvOuniCcsXHJcbiAgICAgICAgJ+yLpOyDne2ZnO2RnO2YhCcsXHJcbiAgICAgICAgJ2x1w7MgecO6biB4xKsnLFxyXG4gICAgICAgICfrsLHroZ0nLFxyXG4gICAgICAgICfspJHqta3rk5zrnbzrp4gnLFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRlOiAnMjAyMeuFhCA17JuUIDnsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbmlja25hbWU6ICdsdW95dW54aV8wMicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpa2U6IDMzLFxyXG4gICAgICBjb21tZW50OiAzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRpdGxlOiAn656A7J6U7J2EIOyii+yVhO2WiOuNmCDsgqzrnozsnbTrnbzrqbQg66y07KGw6rG0IOyVjCDsiJgg7J6I64qUIO2RnO2YhCA36rCA7KeAJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbJ+yZleydtOuztCcsICfsp4TsoJXroLknLCAn65Oc652866eIJ10sXHJcbiAgICAgIGRhdGU6ICcyMDIx64WEIDXsm5QgMjTsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdieWx1bHVfMDUnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWtlOiAyNCxcclxuICAgICAgY29tbWVudDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICB0aXRsZTogJ+yduOyCrOuhnCDqsIDsnqUg66eO7J20IOyTsOydtOuKlCDtkZztmIQgMTDqsIDsp4AnLFxyXG4gICAgICBjb250ZW50OiBudWxsLFxyXG4gICAgICB0YWc6IFsn7J247IKsJ10sXHJcbiAgICAgIGRhdGU6ICcyMDIx64WEIDXsm5QgMjjsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmlja25hbWU6ICd5dXl1YmFiYScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpa2U6IDQsXHJcbiAgICAgIGNvbW1lbnQ6IDIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdGl0bGU6ICfrnbzsmrTtnazqsIAgMjEwMzI3IOudvOuwqeyXkOyEnCDqsozsnoTtlZjrqbTshJwg7IKs7Jqp7ZWcIO2RnO2YhCDrqqjrkZAg7JWM7JWE67O06riwJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbJ+udvOyatO2drCcsICdsdcOzIHnDum4geMSrJywgJ+qyjOyehCddLFxyXG4gICAgICBkYXRlOiAnMjAyMeuFhCA17JuUIDI57J28JyxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnbHV2eXVueGknLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWtlOiA5LFxyXG4gICAgICBjb21tZW50OiA1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHRpdGxlOiAn7KSR6rWt7J24IHZsb2dnZXLrk6TsnbQg7JiB7IOB7JeQ7IScIOyekOyjvCDsgqzsmqntlZjripQg7ZGc7ZiEJyxcclxuICAgICAgY29udGVudDogbnVsbCxcclxuICAgICAgdGFnOiBbJ3Zsb2cnLCAn7Iuk7IOd7ZmcJ10sXHJcbiAgICAgIGRhdGU6ICcyMDIx64WEIDXsm5QgMjnsnbwnLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmlja25hbWU6ICdsdW95dW54aScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpa2U6IDksXHJcbiAgICAgIGNvbW1lbnQ6IDUsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17bWFpbkNvbnRlbnR9PlxyXG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e3Bvc3QuaWR9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==