webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
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

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-right: 7px;\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 9px 7px;\n\n  &:focus {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  background-color: #000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */








var TextArea = antd__WEBPACK_IMPORTED_MODULE_6__["Input"].TextArea;
var commentFormBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var commentInput = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var buttonGroup = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var cancelButton = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var submitButton = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());

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

  var onClickCancel = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {}, []);
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
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: bgColor ? commentFormBox : null,
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
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_s(CommentForm, "9cc6Td2AJTJfSx6oaAxip6Pb/Zc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiY29tbWVudEZvcm1Cb3giLCJjc3MiLCJjb21tZW50SW5wdXQiLCJidXR0b25Hcm91cCIsImNhbmNlbEJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsIkNvbW1lbnRGb3JtIiwiY2FuY2VsQnRuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0Iiwic2luZ2xlUG9zdCIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiYmdDb2xvciIsInNldEJnQ29sb3IiLCJ1c2VJbnB1dCIsImNvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnQiLCJzZXRDb21tZW50Iiwib25DbGlja0NhbmNlbCIsInVzZUNhbGxiYWNrIiwib25DbGlja1N1Ym1pdCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJpZCIsInVzZXJJZCIsIm1pblJvd3MiLCJjb252ZXJ0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsUSxHQUFhQywwQyxDQUFiRCxRO0FBRVIsSUFBTUUsY0FBYyxHQUFHQywwREFBSCxtQkFBcEI7QUFJQSxJQUFNQyxZQUFZLEdBQUdELDBEQUFILG9CQUFsQjtBQVNBLElBQU1FLFdBQVcsR0FBR0YsMERBQUgsb0JBQWpCO0FBTUEsSUFBTUcsWUFBWSxHQUFHSCwwREFBSCxvQkFBbEI7QUFRQSxJQUFNSSxZQUFZLEdBQUdKLDBEQUFILG9CQUFsQjs7QUFTQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDckMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEcUMscUJBRWRDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRkc7QUFBQSxNQUU3QkMsVUFGNkIsZ0JBRTdCQSxVQUY2Qjs7QUFBQSxzQkFHdEJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBSFc7QUFBQSxNQUc3QkMsRUFINkIsaUJBRzdCQSxFQUg2Qjs7QUFBQSxrQkFLUEMsc0RBQVEsQ0FBQ1QsU0FBRCxDQUxEO0FBQUEsTUFLOUJVLE9BTDhCO0FBQUEsTUFLckJDLFVBTHFCOztBQUFBLGtCQU1VQywrREFBUSxDQUFDLEVBQUQsQ0FObEI7QUFBQTtBQUFBLE1BTTlCQyxPQU44QjtBQUFBLE1BTXJCQyxlQU5xQjtBQUFBLE1BTUpDLFVBTkk7O0FBUXJDLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBakM7QUFFQSxNQUFNQyxhQUFhLEdBQUdELHlEQUFXLENBQUMsWUFBTTtBQUN0Q2hCLFlBQVEsQ0FBQztBQUNQa0IsVUFBSSxFQUFFQyxtRUFEQztBQUVQQyxVQUFJLEVBQUU7QUFDSkMsZUFBTyxFQUFFVCxPQURMO0FBRUpVLGNBQU0sRUFBRWpCLFVBQVUsQ0FBQ2tCLEVBRmY7QUFHSkMsY0FBTSxFQUFFakIsRUFBRSxDQUFDZ0I7QUFIUDtBQUZDLEtBQUQsQ0FBUjtBQVFBVCxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FWZ0MsRUFVOUIsQ0FBQ0YsT0FBRCxDQVY4QixDQUFqQztBQVlBLFNBQ0U7QUFBSyxPQUFHLEVBQUVILE9BQU8sR0FBR2pCLGNBQUgsR0FBb0IsSUFBckM7QUFBQSxlQUNFLDhFQUFDLFFBQUQ7QUFDRSxTQUFHLEVBQUVFLFlBRFA7QUFFRSxXQUFLLEVBQUVrQixPQUZUO0FBR0UsY0FBUSxFQUFFQyxlQUhaO0FBSUUsaUJBQVcsRUFBQyxtREFKZDtBQUtFLGNBQVEsRUFBRTtBQUFFWSxlQUFPLEVBQUU7QUFBWDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVFFO0FBQUssU0FBRyxFQUFFQyx1REFBVjtBQUFBLGdCQUNFLDhFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsRUFXRTtBQUFLLFNBQUcsRUFBRS9CLFdBQVY7QUFBQSxpQkFDR0ksU0FBUyxJQUNSO0FBQVEsV0FBRyxFQUFFSCxZQUFiO0FBQTJCLGVBQU8sRUFBRW1CLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFNRTtBQUFRLFdBQUcsRUFBRWxCLFlBQWI7QUFBMkIsZUFBTyxFQUFFb0IsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQTlDRDs7R0FBTW5CLFc7VUFDYUcsdUQsRUFDTUMsdUQsRUFDUkEsdUQsRUFHZ0NTLHVEOzs7S0FOM0NiLFc7QUFnRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5hZmQ0MzFjZDg0MGJlNjRjMWRjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi9Db252ZXJ0UG9wVXAnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBjb252ZXJ0Qm94IH0gZnJvbSAnLi4vcGFnZXMvd3JpdGUnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IGNvbW1lbnRGb3JtQm94ID0gY3NzYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBjb21tZW50SW5wdXQgPSBjc3NgXHJcbiAgcGFkZGluZzogOXB4IDdweDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGJ1dHRvbkdyb3VwID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBjYW5jZWxCdXR0b24gPSBjc3NgXHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5gO1xyXG5cclxuY29uc3Qgc3VibWl0QnV0dG9uID0gY3NzYFxyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBjYW5jZWxCdG4gfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHNpbmdsZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUoY2FuY2VsQnRuKTtcclxuICBjb25zdCBbY29tbWVudCwgb25DaGFuZ2VDb21tZW50LCBzZXRDb21tZW50XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgICAgIHBvc3RJZDogc2luZ2xlUG9zdC5pZCxcclxuICAgICAgICB1c2VySWQ6IG1lLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRDb21tZW50KCcnKTtcclxuICB9LCBbY29tbWVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2JnQ29sb3IgPyBjb21tZW50Rm9ybUJveCA6IG51bGx9PlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICBjc3M9e2NvbW1lbnRJbnB1dH1cclxuICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64yT6riA7J2EIOyekeyEse2VmOyEuOyalFwiXHJcbiAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNzcz17Y29udmVydEJveH0+XHJcbiAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjc3M9e2J1dHRvbkdyb3VwfT5cclxuICAgICAgICB7Y2FuY2VsQnRuICYmIChcclxuICAgICAgICAgIDxidXR0b24gY3NzPXtjYW5jZWxCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tDYW5jZWx9PlxyXG4gICAgICAgICAgICDst6jshoxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjc3M9e3N1Ym1pdEJ1dHRvbn0gb25DbGljaz17b25DbGlja1N1Ym1pdH0+XHJcbiAgICAgICAgICDrjJPquIAg7J6R7ISxXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9