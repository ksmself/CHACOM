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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n\n  @media (min-width: 768px) {\n    margin-top: 12px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-top: 17px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 9px 7px;\n\n  &:hover {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n\n  &:focus {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n\n  @media (min-width: 768px) {\n    padding: 11px 12px;\n    font-size: 16px;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 13px 14px;\n    margin-bottom: 10px;\n    font-size: 19px;\n  }\n"]);

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
      lineNumber: 124,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _pages_write__WEBPACK_IMPORTED_MODULE_9__["convertBox"],
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: buttonGroup,
      children: [cancelBtn && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: cancelButton,
        onClick: onClickCancel,
        children: "\uCDE8\uC18C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: submitButton,
        onClick: onClickSubmit,
        children: "\uB313\uAE00 \uC791\uC131"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiY29tbWVudElucHV0IiwiY3NzIiwiYnV0dG9uR3JvdXAiLCJjYW5jZWxCdXR0b24iLCJzdWJtaXRCdXR0b24iLCJDb21tZW50Rm9ybSIsImNhbmNlbEJ0biIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnQiLCJzZXRDb21tZW50Iiwib25DbGlja0NhbmNlbCIsInVzZUNhbGxiYWNrIiwic2V0SGlkZUNvbW1lbnRGb3JtIiwib25DbGlja1N1Ym1pdCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJpZCIsInVzZXJJZCIsIm1pblJvd3MiLCJjb252ZXJ0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTtBQUVELElBQU1FLFlBQVksR0FBR0MsMERBQUgsbUJBQWxCO0FBeUJBLElBQU1DLFdBQVcsR0FBR0QsMERBQUgsb0JBQWpCO0FBY0EsSUFBTUUsWUFBWSxHQUFHRiwwREFBSCxvQkFBbEI7QUFzQkEsSUFBTUcsWUFBWSxHQUFHSCwwREFBSCxvQkFBbEI7O0FBdUJQLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUNyQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURxQyxxQkFFZEMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGRztBQUFBLE1BRTdCQyxVQUY2QixnQkFFN0JBLFVBRjZCOztBQUFBLHNCQUd0QkgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FIVztBQUFBLE1BRzdCQyxFQUg2QixpQkFHN0JBLEVBSDZCOztBQUFBLGtCQUtVQywrREFBUSxDQUFDLEVBQUQsQ0FMbEI7QUFBQTtBQUFBLE1BSzlCQyxPQUw4QjtBQUFBLE1BS3JCQyxlQUxxQjtBQUFBLE1BS0pDLFVBTEk7O0FBT3JDLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3RDRixjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FHLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRCxHQUhnQyxFQUc5QixFQUg4QixDQUFqQztBQUtBLE1BQU1DLGFBQWEsR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQ3RDYixZQUFRLENBQUM7QUFDUGdCLFVBQUksRUFBRUMsbUVBREM7QUFFUEMsVUFBSSxFQUFFO0FBQ0pDLGVBQU8sRUFBRVYsT0FETDtBQUVKVyxjQUFNLEVBQUVmLFVBQVUsQ0FBQ2dCLEVBRmY7QUFHSkMsY0FBTSxFQUFFZixFQUFFLENBQUNjO0FBSFA7QUFGQyxLQUFELENBQVI7QUFRQVYsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELEdBVmdDLEVBVTlCLENBQUNGLE9BQUQsQ0FWOEIsQ0FBakM7QUFZQSxTQUNFO0FBQUEsZUFDRSw4RUFBQyxRQUFEO0FBQ0UsU0FBRyxFQUFFaEIsWUFEUDtBQUVFLFdBQUssRUFBRWdCLE9BRlQ7QUFHRSxjQUFRLEVBQUVDLGVBSFo7QUFJRSxpQkFBVyxFQUFDLG1EQUpkO0FBS0UsY0FBUSxFQUFFO0FBQUVhLGVBQU8sRUFBRTtBQUFYO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUUU7QUFBSyxTQUFHLEVBQUVDLHVEQUFWO0FBQUEsZ0JBQ0UsOEVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixFQVdFO0FBQUssU0FBRyxFQUFFN0IsV0FBVjtBQUFBLGlCQUNHSSxTQUFTLElBQ1I7QUFBUSxXQUFHLEVBQUVILFlBQWI7QUFBMkIsZUFBTyxFQUFFZ0IsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQU1FO0FBQVEsV0FBRyxFQUFFZixZQUFiO0FBQTJCLGVBQU8sRUFBRWtCLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQSxrQkFERjtBQXdCRCxDQWhERDs7R0FBTWpCLFc7VUFDYUcsdUQsRUFDTUMsdUQsRUFDUkEsdUQsRUFFZ0NNLHVEOzs7S0FMM0NWLFc7QUFrRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS4wYmY3Y2VmOWFkYjFkZjM4ZWE5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi9Db252ZXJ0UG9wVXAnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBjb252ZXJ0Qm94IH0gZnJvbSAnLi4vcGFnZXMvd3JpdGUnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tZW50SW5wdXQgPSBjc3NgXHJcbiAgcGFkZGluZzogOXB4IDdweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBidXR0b25Hcm91cCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW5jZWxCdXR0b24gPSBjc3NgXHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNXB4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nOiA3cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gY3NzYFxyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNXB4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nOiA3cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IGNhbmNlbEJ0biB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbY29tbWVudCwgb25DaGFuZ2VDb21tZW50LCBzZXRDb21tZW50XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnQoJycpO1xyXG4gICAgc2V0SGlkZUNvbW1lbnRGb3JtKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1N1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvbW1lbnQsXHJcbiAgICAgICAgcG9zdElkOiBzaW5nbGVQb3N0LmlkLFxyXG4gICAgICAgIHVzZXJJZDogbWUuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHNldENvbW1lbnQoJycpO1xyXG4gIH0sIFtjb21tZW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICBjc3M9e2NvbW1lbnRJbnB1dH1cclxuICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64yT6riA7J2EIOyekeyEse2VmOyEuOyalFwiXHJcbiAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNzcz17Y29udmVydEJveH0+XHJcbiAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjc3M9e2J1dHRvbkdyb3VwfT5cclxuICAgICAgICB7Y2FuY2VsQnRuICYmIChcclxuICAgICAgICAgIDxidXR0b24gY3NzPXtjYW5jZWxCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tDYW5jZWx9PlxyXG4gICAgICAgICAgICDst6jshoxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjc3M9e3N1Ym1pdEJ1dHRvbn0gb25DbGljaz17b25DbGlja1N1Ym1pdH0+XHJcbiAgICAgICAgICDrjJPquIAg7J6R7ISxXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9