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
      lineNumber: 90,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _pages_write__WEBPACK_IMPORTED_MODULE_9__["convertBox"],
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: buttonGroup,
      children: [cancelBtn && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: cancelButton,
        onClick: onClickCancel,
        children: "\uCDE8\uC18C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: submitButton,
        onClick: onClickSubmit,
        children: "\uB313\uAE00 \uC791\uC131"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIklucHV0IiwiY29tbWVudEZvcm1OdWxsIiwiY3NzIiwiY29tbWVudEZvcm1Cb3giLCJjb21tZW50SW5wdXQiLCJidXR0b25Hcm91cCIsImNhbmNlbEJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsIkNvbW1lbnRGb3JtIiwiY2FuY2VsQnRuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0Iiwic2luZ2xlUG9zdCIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiYmdDb2xvciIsInNldEJnQ29sb3IiLCJ1c2VJbnB1dCIsImNvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnQiLCJzZXRDb21tZW50IiwiaGlkZUNvbW1lbnRGb3JtIiwic2V0SGlkZUNvbW1lbnRGb3JtIiwib25DbGlja0NhbmNlbCIsInVzZUNhbGxiYWNrIiwib25DbGlja1N1Ym1pdCIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJpZCIsInVzZXJJZCIsIm1pblJvd3MiLCJjb252ZXJ0Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7QUFFUixJQUFNRSxlQUFlLEdBQUdDLDBEQUFILG1CQUFyQjtBQUlBLElBQU1DLGNBQWMsR0FBR0QsMERBQUgsb0JBQXBCO0FBWUEsSUFBTUUsWUFBWSxHQUFHRiwwREFBSCxvQkFBbEI7QUFTQSxJQUFNRyxXQUFXLEdBQUdILDBEQUFILG9CQUFqQjtBQU1BLElBQU1JLFlBQVksR0FBR0osMERBQUgsb0JBQWxCO0FBUUEsSUFBTUssWUFBWSxHQUFHTCwwREFBSCxvQkFBbEI7O0FBU0EsSUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3JDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHFDLHFCQUVkQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZHO0FBQUEsTUFFN0JDLFVBRjZCLGdCQUU3QkEsVUFGNkI7O0FBQUEsc0JBR3RCSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUhXO0FBQUEsTUFHN0JDLEVBSDZCLGlCQUc3QkEsRUFINkI7O0FBQUEsa0JBS1BDLHNEQUFRLENBQUNULFNBQUQsQ0FMRDtBQUFBLE1BSzlCVSxPQUw4QjtBQUFBLE1BS3JCQyxVQUxxQjs7QUFBQSxrQkFNVUMsK0RBQVEsQ0FBQyxFQUFELENBTmxCO0FBQUE7QUFBQSxNQU05QkMsT0FOOEI7QUFBQSxNQU1yQkMsZUFOcUI7QUFBQSxNQU1KQyxVQU5JOztBQUFBLG1CQU9TTixzREFBUSxDQUFDLEtBQUQsQ0FQakI7QUFBQSxNQU85Qk8sZUFQOEI7QUFBQSxNQU9iQyxrQkFQYTs7QUFTckMsTUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdENKLGNBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUUsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNELEdBSGdDLEVBRzlCLEVBSDhCLENBQWpDO0FBS0EsTUFBTUcsYUFBYSxHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDdENsQixZQUFRLENBQUM7QUFDUG9CLFVBQUksRUFBRUMsbUVBREM7QUFFUEMsVUFBSSxFQUFFO0FBQ0pDLGVBQU8sRUFBRVgsT0FETDtBQUVKWSxjQUFNLEVBQUVuQixVQUFVLENBQUNvQixFQUZmO0FBR0pDLGNBQU0sRUFBRW5CLEVBQUUsQ0FBQ2tCO0FBSFA7QUFGQyxLQUFELENBQVI7QUFRQVgsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELEdBVmdDLEVBVTlCLENBQUNGLE9BQUQsQ0FWOEIsQ0FBakM7QUFZQSxTQUNFO0FBQUEsZUFDRSw4RUFBQyxRQUFEO0FBQ0UsU0FBRyxFQUFFbEIsWUFEUDtBQUVFLFdBQUssRUFBRWtCLE9BRlQ7QUFHRSxjQUFRLEVBQUVDLGVBSFo7QUFJRSxpQkFBVyxFQUFDLG1EQUpkO0FBS0UsY0FBUSxFQUFFO0FBQUVjLGVBQU8sRUFBRTtBQUFYO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUUU7QUFBSyxTQUFHLEVBQUVDLHVEQUFWO0FBQUEsZ0JBQ0UsOEVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixFQVdFO0FBQUssU0FBRyxFQUFFakMsV0FBVjtBQUFBLGlCQUNHSSxTQUFTLElBQ1I7QUFBUSxXQUFHLEVBQUVILFlBQWI7QUFBMkIsZUFBTyxFQUFFcUIsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQU1FO0FBQVEsV0FBRyxFQUFFcEIsWUFBYjtBQUEyQixlQUFPLEVBQUVzQixhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUEsa0JBREY7QUF3QkQsQ0FsREQ7O0dBQU1yQixXO1VBQ2FHLHVELEVBQ01DLHVELEVBQ1JBLHVELEVBR2dDUyx1RDs7O0tBTjNDYixXO0FBb0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uNDYxZDc3YTRmMTJjMzdmZTM1Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4vQ29udmVydFBvcFVwJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgY29udmVydEJveCB9IGZyb20gJy4uL3BhZ2VzL3dyaXRlJztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBjb21tZW50Rm9ybU51bGwgPSBjc3NgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuYDtcclxuXHJcbmNvbnN0IGNvbW1lbnRGb3JtQm94ID0gY3NzYFxyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzE4ZGRmZjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMThkZGZmO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNvbW1lbnRJbnB1dCA9IGNzc2BcclxuICBwYWRkaW5nOiA5cHggN3B4O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgYnV0dG9uR3JvdXAgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuYDtcclxuXHJcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNzc2BcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBwYWRkaW5nOiA1cHggMTFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBzdWJtaXRCdXR0b24gPSBjc3NgXHJcbiAgcGFkZGluZzogNXB4IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTE4ZmY7XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IGNhbmNlbEJ0biB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbYmdDb2xvciwgc2V0QmdDb2xvcl0gPSB1c2VTdGF0ZShjYW5jZWxCdG4pO1xyXG4gIGNvbnN0IFtjb21tZW50LCBvbkNoYW5nZUNvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtoaWRlQ29tbWVudEZvcm0sIHNldEhpZGVDb21tZW50Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50KCcnKTtcclxuICAgIHNldEhpZGVDb21tZW50Rm9ybSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgICAgIHBvc3RJZDogc2luZ2xlUG9zdC5pZCxcclxuICAgICAgICB1c2VySWQ6IG1lLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRDb21tZW50KCcnKTtcclxuICB9LCBbY29tbWVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgY3NzPXtjb21tZW50SW5wdXR9XHJcbiAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuMk+q4gOydhCDsnpHshLHtlZjshLjsmpRcIlxyXG4gICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDIgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjc3M9e2NvbnZlcnRCb3h9PlxyXG4gICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY3NzPXtidXR0b25Hcm91cH0+XHJcbiAgICAgICAge2NhbmNlbEJ0biAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIGNzcz17Y2FuY2VsQnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrQ2FuY2VsfT5cclxuICAgICAgICAgICAg7Leo7IaMXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxidXR0b24gY3NzPXtzdWJtaXRCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9PlxyXG4gICAgICAgICAg64yT6riAIOyekeyEsVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==