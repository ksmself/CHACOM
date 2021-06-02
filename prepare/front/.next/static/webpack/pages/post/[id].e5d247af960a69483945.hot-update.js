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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-right: 7px;\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 9px 7px;\n\n  &:focus {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n"]);

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(cancelBtn),
      bgColor = _useState[0],
      setBgColor = _useState[1];

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
      comment = _useInput2[0],
      onChangeComment = _useInput2[1],
      setComment = _useInput2[2];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      hideCommentForm = _useState2[0],
      setHideCommentForm = _useState2[1];

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
      lineNumber: 74,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _pages_write__WEBPACK_IMPORTED_MODULE_9__["convertBox"],
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: buttonGroup,
      children: [cancelBtn && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: cancelButton,
        onClick: onClickCancel,
        children: "\uCDE8\uC18C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: submitButton,
        onClick: onClickSubmit,
        children: "\uB313\uAE00 \uC791\uC131"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(CommentForm, "sOXmAhbwyecf9OMxRTCz5wnX6M0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiY29tbWVudElucHV0IiwiY3NzIiwiYnV0dG9uR3JvdXAiLCJjYW5jZWxCdXR0b24iLCJzdWJtaXRCdXR0b24iLCJDb21tZW50Rm9ybSIsImNhbmNlbEJ0biIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInNpbmdsZVBvc3QiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwidXNlSW5wdXQiLCJjb21tZW50Iiwib25DaGFuZ2VDb21tZW50Iiwic2V0Q29tbWVudCIsImhpZGVDb21tZW50Rm9ybSIsInNldEhpZGVDb21tZW50Rm9ybSIsIm9uQ2xpY2tDYW5jZWwiLCJ1c2VDYWxsYmFjayIsIm9uQ2xpY2tTdWJtaXQiLCJ0eXBlIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwicG9zdElkIiwiaWQiLCJ1c2VySWQiLCJtaW5Sb3dzIiwiY29udmVydEJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7QUFFRCxJQUFNRSxZQUFZLEdBQUdDLDBEQUFILG1CQUFsQjtBQVNBLElBQU1DLFdBQVcsR0FBR0QsMERBQUgsb0JBQWpCO0FBTUEsSUFBTUUsWUFBWSxHQUFHRiwwREFBSCxvQkFBbEI7QUFRQSxJQUFNRyxZQUFZLEdBQUdILDBEQUFILG9CQUFsQjs7QUFTUCxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDckMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEcUMscUJBRWRDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRkc7QUFBQSxNQUU3QkMsVUFGNkIsZ0JBRTdCQSxVQUY2Qjs7QUFBQSxzQkFHdEJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBSFc7QUFBQSxNQUc3QkMsRUFINkIsaUJBRzdCQSxFQUg2Qjs7QUFBQSxrQkFLUEMsc0RBQVEsQ0FBQ1QsU0FBRCxDQUxEO0FBQUEsTUFLOUJVLE9BTDhCO0FBQUEsTUFLckJDLFVBTHFCOztBQUFBLGtCQU1VQywrREFBUSxDQUFDLEVBQUQsQ0FObEI7QUFBQTtBQUFBLE1BTTlCQyxPQU44QjtBQUFBLE1BTXJCQyxlQU5xQjtBQUFBLE1BTUpDLFVBTkk7O0FBQUEsbUJBT1NOLHNEQUFRLENBQUMsS0FBRCxDQVBqQjtBQUFBLE1BTzlCTyxlQVA4QjtBQUFBLE1BT2JDLGtCQVBhOztBQVNyQyxNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q0osY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBRSxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0QsR0FIZ0MsRUFHOUIsRUFIOEIsQ0FBakM7QUFLQSxNQUFNRyxhQUFhLEdBQUdELHlEQUFXLENBQUMsWUFBTTtBQUN0Q2xCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFQyxtRUFEQztBQUVQQyxVQUFJLEVBQUU7QUFDSkMsZUFBTyxFQUFFWCxPQURMO0FBRUpZLGNBQU0sRUFBRW5CLFVBQVUsQ0FBQ29CLEVBRmY7QUFHSkMsY0FBTSxFQUFFbkIsRUFBRSxDQUFDa0I7QUFIUDtBQUZDLEtBQUQsQ0FBUjtBQVFBWCxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FWZ0MsRUFVOUIsQ0FBQ0YsT0FBRCxDQVY4QixDQUFqQztBQVlBLFNBQ0U7QUFBQSxlQUNFLDhFQUFDLFFBQUQ7QUFDRSxTQUFHLEVBQUVuQixZQURQO0FBRUUsV0FBSyxFQUFFbUIsT0FGVDtBQUdFLGNBQVEsRUFBRUMsZUFIWjtBQUlFLGlCQUFXLEVBQUMsbURBSmQ7QUFLRSxjQUFRLEVBQUU7QUFBRWMsZUFBTyxFQUFFO0FBQVg7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFRRTtBQUFLLFNBQUcsRUFBRUMsdURBQVY7QUFBQSxnQkFDRSw4RUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLEVBV0U7QUFBSyxTQUFHLEVBQUVqQyxXQUFWO0FBQUEsaUJBQ0dJLFNBQVMsSUFDUjtBQUFRLFdBQUcsRUFBRUgsWUFBYjtBQUEyQixlQUFPLEVBQUVxQixhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBTUU7QUFBUSxXQUFHLEVBQUVwQixZQUFiO0FBQTJCLGVBQU8sRUFBRXNCLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQSxrQkFERjtBQXdCRCxDQWxERDs7R0FBTXJCLFc7VUFDYUcsdUQsRUFDTUMsdUQsRUFDUkEsdUQsRUFHZ0NTLHVEOzs7S0FOM0NiLFc7QUFvRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5lNWQyNDdhZjk2MGE2OTQ4Mzk0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi9Db252ZXJ0UG9wVXAnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBjb252ZXJ0Qm94IH0gZnJvbSAnLi4vcGFnZXMvd3JpdGUnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tZW50SW5wdXQgPSBjc3NgXHJcbiAgcGFkZGluZzogOXB4IDdweDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBidXR0b25Hcm91cCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNzc2BcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gY3NzYFxyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBjYW5jZWxCdG4gfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHNpbmdsZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUoY2FuY2VsQnRuKTtcclxuICBjb25zdCBbY29tbWVudCwgb25DaGFuZ2VDb21tZW50LCBzZXRDb21tZW50XSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbaGlkZUNvbW1lbnRGb3JtLCBzZXRIaWRlQ29tbWVudEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgICBzZXRIaWRlQ29tbWVudEZvcm0odHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY29udGVudDogY29tbWVudCxcclxuICAgICAgICBwb3N0SWQ6IHNpbmdsZVBvc3QuaWQsXHJcbiAgICAgICAgdXNlcklkOiBtZS5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgc2V0Q29tbWVudCgnJyk7XHJcbiAgfSwgW2NvbW1lbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgIGNzcz17Y29tbWVudElucHV0fVxyXG4gICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLrjJPquIDsnYQg7J6R7ISx7ZWY7IS47JqUXCJcclxuICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAyIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY3NzPXtjb252ZXJ0Qm94fT5cclxuICAgICAgICA8Q29udmVydFBvcFVwIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNzcz17YnV0dG9uR3JvdXB9PlxyXG4gICAgICAgIHtjYW5jZWxCdG4gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjc3M9e2NhbmNlbEJ1dHRvbn0gb25DbGljaz17b25DbGlja0NhbmNlbH0+XHJcbiAgICAgICAgICAgIOy3qOyGjFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8YnV0dG9uIGNzcz17c3VibWl0QnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrU3VibWl0fT5cclxuICAgICAgICAgIOuMk+q4gCDsnpHshLFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=