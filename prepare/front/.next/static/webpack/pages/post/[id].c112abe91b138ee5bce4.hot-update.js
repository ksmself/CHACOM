webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: commentInput, buttonGroup, cancelButton, submitButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentInput", function() { return commentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonGroup", function() { return buttonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelButton", function() { return cancelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitButton", function() { return submitButton; });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ConvertPopUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConvertPopUp */ "./components/ConvertPopUp.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _pages_write__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/write */ "./pages/write.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");





var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\CommentForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  background-color: #3a18ff;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  @media (min-width: 768px) {\n    padding: 5px 13px;\n    font-size: 16px;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 7px 16px;\n    font-size: 18px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-right: 7px;\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  @media (min-width: 768px) {\n    padding: 5px 13px;\n    font-size: 16px;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 7px 16px;\n    font-size: 18px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n\n  @media (min-width: 768px) {\n    margin-top: 12px;\n    margin-bottom: 5px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-top: 17px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 9px 7px;\n\n  &:hover {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n\n  &:focus {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n\n  @media (min-width: 768px) {\n    padding: 11px 12px;\n    font-size: 16px;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 13px 14px;\n    margin-bottom: 4px;\n    font-size: 19px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */








var TextArea = antd__WEBPACK_IMPORTED_MODULE_6__["Input"].TextArea;
var commentInput = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var buttonGroup = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var cancelButton = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var submitButton = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());

var CommentForm = function CommentForm(_ref) {
  _s();

  var cancelBtn = _ref.cancelBtn;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
      comment = _useInput2[0],
      onChangeComment = _useInput2[1],
      setComment = _useInput2[2];

  var onClickCancel = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setComment('');
    setHideCommentForm(true);
  }, []);
  var onClickSubmit = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["ADD_COMMENT_REQUEST"],
      data: {
        content: comment,
        postId: singlePost.id,
        userId: me.id
      }
    });
    setComment('');
  }, [comment]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
      css: commentInput,
      value: comment,
      onChange: onChangeComment,
      placeholder: "\uB313\uAE00\uC744 \uC791\uC131\uD558\uC138\uC694",
      autoSize: {
        minRows: 2
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _pages_write__WEBPACK_IMPORTED_MODULE_9__["convertBox"],
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: buttonGroup,
      children: [cancelBtn && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: cancelButton,
        onClick: onClickCancel,
        children: "\uCDE8\uC18C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: submitButton,
        onClick: onClickSubmit,
        children: "\uB313\uAE00 \uC791\uC131"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CommentForm, "VlOMtUErENHOe4yDSCpkx1N4V4c=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiY29tbWVudElucHV0IiwiY3NzIiwiYnV0dG9uR3JvdXAiLCJjYW5jZWxCdXR0b24iLCJzdWJtaXRCdXR0b24iLCJDb21tZW50Rm9ybSIsImNhbmNlbEJ0biIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnQiLCJzZXRDb21tZW50Iiwib25DbGlja0NhbmNlbCIsInVzZUNhbGxiYWNrIiwic2V0SGlkZUNvbW1lbnRGb3JtIiwib25DbGlja1N1Ym1pdCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJpZCIsInVzZXJJZCIsIm1pblJvd3MiLCJjb252ZXJ0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTtBQUVELElBQU1FLFlBQVksR0FBR0MsMERBQUgsbUJBQWxCO0FBeUJBLElBQU1DLFdBQVcsR0FBR0QsMERBQUgsb0JBQWpCO0FBZUEsSUFBTUUsWUFBWSxHQUFHRiwwREFBSCxvQkFBbEI7QUFzQkEsSUFBTUcsWUFBWSxHQUFHSCwwREFBSCxvQkFBbEI7O0FBdUJQLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNyQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURxQyxxQkFFZEMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGRztBQUFBLE1BRTdCQyxVQUY2QixnQkFFN0JBLFVBRjZCOztBQUFBLHNCQUd0QkgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FIVztBQUFBLE1BRzdCQyxFQUg2QixpQkFHN0JBLEVBSDZCOztBQUFBLGtCQUtVQywrREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQTtBQUFBLE1BSzlCQyxPQUw4QjtBQUFBLE1BS3JCQyxlQUxxQjtBQUFBLE1BS0pDLFVBTEk7O0FBT3JDLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3RDRixjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FHLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRCxHQUhnQyxFQUc5QixFQUg4QixDQUFqQztBQUtBLE1BQU1DLGFBQWEsR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQ3RDYixZQUFRLENBQUM7QUFDUGdCLFVBQUksRUFBRUMsbUVBREM7QUFFUEMsVUFBSSxFQUFFO0FBQ0pDLGVBQU8sRUFBRVYsT0FETDtBQUVKVyxjQUFNLEVBQUVmLFVBQVUsQ0FBQ2dCLEVBRmY7QUFHSkMsY0FBTSxFQUFFZixFQUFFLENBQUNjO0FBSFA7QUFGQyxLQUFELENBQVI7QUFRQVYsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELEdBVmdDLEVBVTlCLENBQUNGLE9BQUQsQ0FWOEIsQ0FBakM7QUFZQSxTQUNFO0FBQUEsZUFDRSw4RUFBQyxRQUFEO0FBQ0UsU0FBRyxFQUFFaEIsWUFEUDtBQUVFLFdBQUssRUFBRWdCLE9BRlQ7QUFHRSxjQUFRLEVBQUVDLGVBSFo7QUFJRSxpQkFBVyxFQUFDLG1EQUpkO0FBS0UsY0FBUSxFQUFFO0FBQUVhLGVBQU8sRUFBRTtBQUFYO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUUU7QUFBSyxTQUFHLEVBQUVDLHVEQUFWO0FBQUEsZ0JBQ0UsOEVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixFQVdFO0FBQUssU0FBRyxFQUFFN0IsV0FBVjtBQUFBLGlCQUNHSSxTQUFTLElBQ1I7QUFBUSxXQUFHLEVBQUVILFlBQWI7QUFBMkIsZUFBTyxFQUFFZ0IsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQU1FO0FBQVEsV0FBRyxFQUFFZixZQUFiO0FBQTJCLGVBQU8sRUFBRWtCLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQSxrQkFERjtBQXdCRCxDQWhERDs7R0FBTWpCLFc7VUFDYUcsdUQsRUFDTUMsdUQsRUFDUkEsdUQsRUFFZ0NNLHVEOzs7S0FMM0NWLFc7QUFrRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5jMTEyYWJlOTFiMTM4ZWU1YmNlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IENvbnZlcnRQb3BVcCBmcm9tICcuL0NvbnZlcnRQb3BVcCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IGNvbnZlcnRCb3ggfSBmcm9tICcuLi9wYWdlcy93cml0ZSc7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1lbnRJbnB1dCA9IGNzc2BcclxuICBwYWRkaW5nOiA5cHggN3B4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDExcHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHBhZGRpbmc6IDEzcHggMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgYnV0dG9uR3JvdXAgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gY3NzYFxyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDVweCAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgcGFkZGluZzogN3B4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNzc2BcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDVweCAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgcGFkZGluZzogN3B4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBjYW5jZWxCdG4gfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHNpbmdsZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2NvbW1lbnQsIG9uQ2hhbmdlQ29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KCcnKTtcclxuICAgIHNldEhpZGVDb21tZW50Rm9ybSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgICAgIHBvc3RJZDogc2luZ2xlUG9zdC5pZCxcclxuICAgICAgICB1c2VySWQ6IG1lLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRDb21tZW50KCcnKTtcclxuICB9LCBbY29tbWVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgY3NzPXtjb21tZW50SW5wdXR9XHJcbiAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuMk+q4gOydhCDsnpHshLHtlZjshLjsmpRcIlxyXG4gICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDIgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjc3M9e2NvbnZlcnRCb3h9PlxyXG4gICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY3NzPXtidXR0b25Hcm91cH0+XHJcbiAgICAgICAge2NhbmNlbEJ0biAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNzcz17Y2FuY2VsQnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrQ2FuY2VsfT5cclxuICAgICAgICAgICAg7Leo7IaMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxidXR0b24gY3NzPXtzdWJtaXRCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9PlxyXG4gICAgICAgICAg64yT6riAIOyekeyEsVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==