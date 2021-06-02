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

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-right: 7px;\n  padding: 5px 11px;\n  font-weight: 700;\n  border: none;\n  border-radius: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 9px 7px;\n\n  &:focus {\n    border-color: #d9d9d9;\n    box-shadow: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 5px 8px;\n\n  textarea {\n    border-color: #18ddff;\n\n    &:focus {\n      border-color: #18ddff;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */








var TextArea = antd__WEBPACK_IMPORTED_MODULE_6__["Input"].TextArea;
var commentFormNull = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var commentFormBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var commentInput = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var buttonGroup = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var cancelButton = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
var submitButton = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6());

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
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: bgColor ? hideCommentForm ? commentFormNull : commentFormBox : null,
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
      lineNumber: 94,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _pages_write__WEBPACK_IMPORTED_MODULE_9__["convertBox"],
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: buttonGroup,
      children: [cancelBtn && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: cancelButton,
        onClick: onClickCancel,
        children: "\uCDE8\uC18C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: submitButton,
        onClick: onClickSubmit,
        children: "\uB313\uAE00 \uC791\uC131"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiY29tbWVudEZvcm1OdWxsIiwiY3NzIiwiY29tbWVudEZvcm1Cb3giLCJjb21tZW50SW5wdXQiLCJidXR0b25Hcm91cCIsImNhbmNlbEJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsIkNvbW1lbnRGb3JtIiwiY2FuY2VsQnRuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0Iiwic2luZ2xlUG9zdCIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiYmdDb2xvciIsInNldEJnQ29sb3IiLCJ1c2VJbnB1dCIsImNvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnQiLCJzZXRDb21tZW50IiwiaGlkZUNvbW1lbnRGb3JtIiwic2V0SGlkZUNvbW1lbnRGb3JtIiwib25DbGlja0NhbmNlbCIsInVzZUNhbGxiYWNrIiwib25DbGlja1N1Ym1pdCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJpZCIsInVzZXJJZCIsIm1pblJvd3MiLCJjb252ZXJ0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTtBQUVSLElBQU1FLGVBQWUsR0FBR0MsMERBQUgsbUJBQXJCO0FBSUEsSUFBTUMsY0FBYyxHQUFHRCwwREFBSCxvQkFBcEI7QUFZQSxJQUFNRSxZQUFZLEdBQUdGLDBEQUFILG9CQUFsQjtBQVNBLElBQU1HLFdBQVcsR0FBR0gsMERBQUgsb0JBQWpCO0FBTUEsSUFBTUksWUFBWSxHQUFHSiwwREFBSCxvQkFBbEI7QUFRQSxJQUFNSyxZQUFZLEdBQUdMLDBEQUFILG9CQUFsQjs7QUFTQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDckMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEcUMscUJBRWRDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRkc7QUFBQSxNQUU3QkMsVUFGNkIsZ0JBRTdCQSxVQUY2Qjs7QUFBQSxzQkFHdEJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBSFc7QUFBQSxNQUc3QkMsRUFINkIsaUJBRzdCQSxFQUg2Qjs7QUFBQSxrQkFLUEMsc0RBQVEsQ0FBQ1QsU0FBRCxDQUxEO0FBQUEsTUFLOUJVLE9BTDhCO0FBQUEsTUFLckJDLFVBTHFCOztBQUFBLGtCQU1VQywrREFBUSxDQUFDLEVBQUQsQ0FObEI7QUFBQTtBQUFBLE1BTTlCQyxPQU44QjtBQUFBLE1BTXJCQyxlQU5xQjtBQUFBLE1BTUpDLFVBTkk7O0FBQUEsbUJBT1NOLHNEQUFRLENBQUMsS0FBRCxDQVBqQjtBQUFBLE1BTzlCTyxlQVA4QjtBQUFBLE1BT2JDLGtCQVBhOztBQVNyQyxNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q0osY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBRSxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0QsR0FIZ0MsRUFHOUIsRUFIOEIsQ0FBakM7QUFLQSxNQUFNRyxhQUFhLEdBQUdELHlEQUFXLENBQUMsWUFBTTtBQUN0Q2xCLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFQyxtRUFEQztBQUVQQyxVQUFJLEVBQUU7QUFDSkMsZUFBTyxFQUFFWCxPQURMO0FBRUpZLGNBQU0sRUFBRW5CLFVBQVUsQ0FBQ29CLEVBRmY7QUFHSkMsY0FBTSxFQUFFbkIsRUFBRSxDQUFDa0I7QUFIUDtBQUZDLEtBQUQsQ0FBUjtBQVFBWCxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FWZ0MsRUFVOUIsQ0FBQ0YsT0FBRCxDQVY4QixDQUFqQztBQVlBLFNBQ0U7QUFDRSxPQUFHLEVBQ0RILE9BQU8sR0FBSU0sZUFBZSxHQUFHeEIsZUFBSCxHQUFxQkUsY0FBeEMsR0FBMEQsSUFGckU7QUFBQSxlQUtFLDhFQUFDLFFBQUQ7QUFDRSxTQUFHLEVBQUVDLFlBRFA7QUFFRSxXQUFLLEVBQUVrQixPQUZUO0FBR0UsY0FBUSxFQUFFQyxlQUhaO0FBSUUsaUJBQVcsRUFBQyxtREFKZDtBQUtFLGNBQVEsRUFBRTtBQUFFYyxlQUFPLEVBQUU7QUFBWDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixFQVlFO0FBQUssU0FBRyxFQUFFQyx1REFBVjtBQUFBLGdCQUNFLDhFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsRUFlRTtBQUFLLFNBQUcsRUFBRWpDLFdBQVY7QUFBQSxpQkFDR0ksU0FBUyxJQUNSO0FBQVEsV0FBRyxFQUFFSCxZQUFiO0FBQTJCLGVBQU8sRUFBRXFCLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFNRTtBQUFRLFdBQUcsRUFBRXBCLFlBQWI7QUFBMkIsZUFBTyxFQUFFc0IsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQXRERDs7R0FBTXJCLFc7VUFDYUcsdUQsRUFDTUMsdUQsRUFDUkEsdUQsRUFHZ0NTLHVEOzs7S0FOM0NiLFc7QUF3RFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS5iNWM2NWIzYzQxYWJjNGMxMmUwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi9Db252ZXJ0UG9wVXAnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBjb252ZXJ0Qm94IH0gZnJvbSAnLi4vcGFnZXMvd3JpdGUnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IGNvbW1lbnRGb3JtTnVsbCA9IGNzc2BcclxuICBkaXNwbGF5OiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEZvcm1Cb3ggPSBjc3NgXHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMThkZGZmO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMxOGRkZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudElucHV0ID0gY3NzYFxyXG4gIHBhZGRpbmc6IDlweCA3cHg7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBidXR0b25Hcm91cCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgY2FuY2VsQnV0dG9uID0gY3NzYFxyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGNzc2BcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgY2FuY2VsQnRuIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBzaW5nbGVQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtiZ0NvbG9yLCBzZXRCZ0NvbG9yXSA9IHVzZVN0YXRlKGNhbmNlbEJ0bik7XHJcbiAgY29uc3QgW2NvbW1lbnQsIG9uQ2hhbmdlQ29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW2hpZGVDb21tZW50Rm9ybSwgc2V0SGlkZUNvbW1lbnRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnQoJycpO1xyXG4gICAgc2V0SGlkZUNvbW1lbnRGb3JtKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1N1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvbW1lbnQsXHJcbiAgICAgICAgcG9zdElkOiBzaW5nbGVQb3N0LmlkLFxyXG4gICAgICAgIHVzZXJJZDogbWUuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHNldENvbW1lbnQoJycpO1xyXG4gIH0sIFtjb21tZW50XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNzcz17XHJcbiAgICAgICAgYmdDb2xvciA/IChoaWRlQ29tbWVudEZvcm0gPyBjb21tZW50Rm9ybU51bGwgOiBjb21tZW50Rm9ybUJveCkgOiBudWxsXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgY3NzPXtjb21tZW50SW5wdXR9XHJcbiAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuMk+q4gOydhCDsnpHshLHtlZjshLjsmpRcIlxyXG4gICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDIgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjc3M9e2NvbnZlcnRCb3h9PlxyXG4gICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY3NzPXtidXR0b25Hcm91cH0+XHJcbiAgICAgICAge2NhbmNlbEJ0biAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNzcz17Y2FuY2VsQnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrQ2FuY2VsfT5cclxuICAgICAgICAgICAg7Leo7IaMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxidXR0b24gY3NzPXtzdWJtaXRCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9PlxyXG4gICAgICAgICAg64yT6riAIOyekeyEsVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==