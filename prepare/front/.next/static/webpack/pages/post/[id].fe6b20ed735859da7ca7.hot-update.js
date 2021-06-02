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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  background-color: #3a18ff;\n\n  @media (min-width: 768px) {\n    padding: 5px 13px;\n    font-size: 16px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-right: 7px;\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n\n  @media (min-width: 768px) {\n    padding: 5px 13px;\n    font-size: 16px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n\n  @media (min-width: 768px) {\n    margin-top: 12px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 9px 7px;\n\n  &:hover {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n\n  &:focus {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n\n  @media (min-width: 768px) {\n    padding: 11px 12px;\n    font-size: 16px;\n  }\n\n  @media (min-width: 1024px) {\n    padding: 13px 15px;\n    font-size: 19px;\n  }\n"]);

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
      lineNumber: 101,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _pages_write__WEBPACK_IMPORTED_MODULE_9__["convertBox"],
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: buttonGroup,
      children: [cancelBtn && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: cancelButton,
        onClick: onClickCancel,
        children: "\uCDE8\uC18C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: submitButton,
        onClick: onClickSubmit,
        children: "\uB313\uAE00 \uC791\uC131"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiY29tbWVudElucHV0IiwiY3NzIiwiYnV0dG9uR3JvdXAiLCJjYW5jZWxCdXR0b24iLCJzdWJtaXRCdXR0b24iLCJDb21tZW50Rm9ybSIsImNhbmNlbEJ0biIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsImNvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnQiLCJzZXRDb21tZW50Iiwib25DbGlja0NhbmNlbCIsInVzZUNhbGxiYWNrIiwic2V0SGlkZUNvbW1lbnRGb3JtIiwib25DbGlja1N1Ym1pdCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJpZCIsInVzZXJJZCIsIm1pblJvd3MiLCJjb252ZXJ0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTtBQUVELElBQU1FLFlBQVksR0FBR0MsMERBQUgsbUJBQWxCO0FBd0JBLElBQU1DLFdBQVcsR0FBR0QsMERBQUgsb0JBQWpCO0FBVUEsSUFBTUUsWUFBWSxHQUFHRiwwREFBSCxvQkFBbEI7QUFhQSxJQUFNRyxZQUFZLEdBQUdILDBEQUFILG9CQUFsQjs7QUFjUCxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDckMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEcUMscUJBRWRDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRkc7QUFBQSxNQUU3QkMsVUFGNkIsZ0JBRTdCQSxVQUY2Qjs7QUFBQSxzQkFHdEJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBSFc7QUFBQSxNQUc3QkMsRUFINkIsaUJBRzdCQSxFQUg2Qjs7QUFBQSxrQkFLVUMsK0RBQVEsQ0FBQyxFQUFELENBTGxCO0FBQUE7QUFBQSxNQUs5QkMsT0FMOEI7QUFBQSxNQUtyQkMsZUFMcUI7QUFBQSxNQUtKQyxVQUxJOztBQU9yQyxNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q0YsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBRyxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0QsR0FIZ0MsRUFHOUIsRUFIOEIsQ0FBakM7QUFLQSxNQUFNQyxhQUFhLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUN0Q2IsWUFBUSxDQUFDO0FBQ1BnQixVQUFJLEVBQUVDLG1FQURDO0FBRVBDLFVBQUksRUFBRTtBQUNKQyxlQUFPLEVBQUVWLE9BREw7QUFFSlcsY0FBTSxFQUFFZixVQUFVLENBQUNnQixFQUZmO0FBR0pDLGNBQU0sRUFBRWYsRUFBRSxDQUFDYztBQUhQO0FBRkMsS0FBRCxDQUFSO0FBUUFWLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxHQVZnQyxFQVU5QixDQUFDRixPQUFELENBVjhCLENBQWpDO0FBWUEsU0FDRTtBQUFBLGVBQ0UsOEVBQUMsUUFBRDtBQUNFLFNBQUcsRUFBRWhCLFlBRFA7QUFFRSxXQUFLLEVBQUVnQixPQUZUO0FBR0UsY0FBUSxFQUFFQyxlQUhaO0FBSUUsaUJBQVcsRUFBQyxtREFKZDtBQUtFLGNBQVEsRUFBRTtBQUFFYSxlQUFPLEVBQUU7QUFBWDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVFFO0FBQUssU0FBRyxFQUFFQyx1REFBVjtBQUFBLGdCQUNFLDhFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsRUFXRTtBQUFLLFNBQUcsRUFBRTdCLFdBQVY7QUFBQSxpQkFDR0ksU0FBUyxJQUNSO0FBQVEsV0FBRyxFQUFFSCxZQUFiO0FBQTJCLGVBQU8sRUFBRWdCLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFNRTtBQUFRLFdBQUcsRUFBRWYsWUFBYjtBQUEyQixlQUFPLEVBQUVrQixhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUEsa0JBREY7QUF3QkQsQ0FoREQ7O0dBQU1qQixXO1VBQ2FHLHVELEVBQ01DLHVELEVBQ1JBLHVELEVBRWdDTSx1RDs7O0tBTDNDVixXO0FBa0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZmU2YjIwZWQ3MzU4NTlkYTdjYTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4vQ29udmVydFBvcFVwJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgY29udmVydEJveCB9IGZyb20gJy4uL3BhZ2VzL3dyaXRlJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWVudElucHV0ID0gY3NzYFxyXG4gIHBhZGRpbmc6IDlweCA3cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMTFweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgcGFkZGluZzogMTNweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBidXR0b25Hcm91cCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNzc2BcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNXB4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNzc2BcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IGNhbmNlbEJ0biB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbY29tbWVudCwgb25DaGFuZ2VDb21tZW50LCBzZXRDb21tZW50XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnQoJycpO1xyXG4gICAgc2V0SGlkZUNvbW1lbnRGb3JtKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1N1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvbW1lbnQsXHJcbiAgICAgICAgcG9zdElkOiBzaW5nbGVQb3N0LmlkLFxyXG4gICAgICAgIHVzZXJJZDogbWUuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHNldENvbW1lbnQoJycpO1xyXG4gIH0sIFtjb21tZW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICBjc3M9e2NvbW1lbnRJbnB1dH1cclxuICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64yT6riA7J2EIOyekeyEse2VmOyEuOyalFwiXHJcbiAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNzcz17Y29udmVydEJveH0+XHJcbiAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjc3M9e2J1dHRvbkdyb3VwfT5cclxuICAgICAgICB7Y2FuY2VsQnRuICYmIChcclxuICAgICAgICAgIDxidXR0b24gY3NzPXtjYW5jZWxCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tDYW5jZWx9PlxyXG4gICAgICAgICAgICDst6jshoxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjc3M9e3N1Ym1pdEJ1dHRvbn0gb25DbGljaz17b25DbGlja1N1Ym1pdH0+XHJcbiAgICAgICAgICDrjJPquIAg7J6R7ISxXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9