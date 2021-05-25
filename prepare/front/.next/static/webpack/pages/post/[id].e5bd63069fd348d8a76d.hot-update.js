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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./components/styles.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");




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







var confirm = antd__WEBPACK_IMPORTED_MODULE_4__["Modal"].confirm;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"])(_templateObject());
_c = Global;

var DeleteBtn = function DeleteBtn(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var showDeleteConfirm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    confirm({
      title: '게시물 삭제',
      icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ExclamationCircleOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this),
      content: '정말로 이 게시물을 삭제하시겠습니까?',
      okText: '삭제',
      okType: 'danger',
      cancelText: '취소',
      onOk: function onOk() {
        // dispatch remove post request
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
          data: post.id
        });
      }
    });
  });
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {}, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      css: _styles__WEBPACK_IMPORTED_MODULE_7__["greyBtn"],
      onClick: showDeleteConfirm,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(DeleteBtn, "AXStpTPmeYUjXINVnXaOFl7y04Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVCdG4uanMiXSwibmFtZXMiOlsiY29uZmlybSIsIk1vZGFsIiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJEZWxldGVCdG4iLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInNob3dEZWxldGVDb25maXJtIiwidXNlQ2FsbGJhY2siLCJ0aXRsZSIsImljb24iLCJjb250ZW50Iiwib2tUZXh0Iiwib2tUeXBlIiwiY2FuY2VsVGV4dCIsIm9uT2siLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJpZCIsIm9uUmVtb3ZlUG9zdCIsImdyZXlCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7SUFFUUEsTyxHQUFZQywwQyxDQUFaRCxPO0FBRVIsSUFBTUUsTUFBTSxHQUFHQywyRUFBSCxtQkFBWjtLQUFNRCxNOztBQU1OLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDMUNULFdBQU8sQ0FBQztBQUNOVSxXQUFLLEVBQUUsUUFERDtBQUVOQyxVQUFJLEVBQUUsOEVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBR05DLGFBQU8sRUFBRSxzQkFISDtBQUlOQyxZQUFNLEVBQUUsSUFKRjtBQUtOQyxZQUFNLEVBQUUsUUFMRjtBQU1OQyxnQkFBVSxFQUFFLElBTk47QUFPTkMsVUFQTSxrQkFPQztBQUNMO0FBQ0FWLGdCQUFRLENBQUM7QUFDUFcsY0FBSSxFQUFFQyxrRUFEQztBQUVQQyxjQUFJLEVBQUVkLElBQUksQ0FBQ2U7QUFGSixTQUFELENBQVI7QUFJRDtBQWJLLEtBQUQsQ0FBUDtBQWVELEdBaEJvQyxDQUFyQztBQWtCQSxNQUFNQyxZQUFZLEdBQUdaLHlEQUFXLENBQUMsWUFBTSxDQUFFLENBQVQsRUFBVyxFQUFYLENBQWhDO0FBRUEsU0FDRTtBQUFBLGVBQ0UsOEVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFRLFNBQUcsRUFBRWEsK0NBQWI7QUFBc0IsYUFBTyxFQUFFZCxpQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBUUQsQ0EvQkQ7O0dBQU1KLFM7VUFDYUcsdUQ7OztNQURiSCxTO0FBaUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZTViZDYzMDY5ZmQzNDhkOGE3NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBncmV5QnRuIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLmFudC1tb2RhbC1jb25maXJtLWJvZHkgLmFudC1tb2RhbC1jb25maXJtLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVCdG4gPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHNob3dEZWxldGVDb25maXJtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiAn6rKM7Iuc66y8IOyCreygnCcsXHJcbiAgICAgIGljb246IDxFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkIC8+LFxyXG4gICAgICBjb250ZW50OiAn7KCV66eQ66GcIOydtCDqsozsi5zrrLzsnYQg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMPycsXHJcbiAgICAgIG9rVGV4dDogJ+yCreygnCcsXHJcbiAgICAgIG9rVHlwZTogJ2RhbmdlcicsXHJcbiAgICAgIGNhbmNlbFRleHQ6ICfst6jshownLFxyXG4gICAgICBvbk9rKCkge1xyXG4gICAgICAgIC8vIGRpc3BhdGNoIHJlbW92ZSBwb3N0IHJlcXVlc3RcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8YnV0dG9uIGNzcz17Z3JleUJ0bn0gb25DbGljaz17c2hvd0RlbGV0ZUNvbmZpcm19PlxyXG4gICAgICAgIOyCreygnFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGVCdG47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=