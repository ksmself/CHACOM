webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConvertPopUp.js":
/*!************************************!*\
  !*** ./components/ConvertPopUp.js ***!
  \************************************/
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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");





var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\ConvertPopUp.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n  font-size: 21px;\n  border-bottom-left-radius: 33px;\n  border-bottom-right-radius: 33px;\n  // background-color: #60ffff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n  resize: none;\n  font-size: 21px;\n  border: none;\n  border-top-left-radius: 33px;\n  border-top-right-radius: 33px;\n  // background-color: #000;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 33px;\n  background: #ffffff;\n  box-shadow: 6px 6px 12px #e8e8e8, -1px -1px 3px #e8e8e8,\n    -6px -6px 12px #e8e8e8, 1px 1px 3px #e8e8e8;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    .convert-modal > .ant-modal-content > .ant-modal-body{\n        padding-top: 48px;\n    }\n\n    .convert-modal > .ant-modal-content > .ant-modal-footer{\n        display: none; \n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */








var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject());
_c = Global;
var convertBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var toConvert = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var converted = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());

var ConvertPopUp = function ConvertPopUp() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      convertLoading = _useSelector.convertLoading,
      convertDone = _useSelector.convertDone,
      convertedPinyin = _useSelector.convertedPinyin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      modalVisible = _useState[0],
      setModalVisible = _useState[1];

  var onCancelModal = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setModalVisible(false);
    setInput('');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["CONVERT_RESET_REQUEST"]
    });
  });

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
      input = _useInput2[0],
      onChangeInput = _useInput2[1],
      setInput = _useInput2[2];

  var onClickConvert = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["CONVERT_PINYIN_REQUEST"],
      data: {
        content: input
      }
    });
  });
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setModalVisible(true);
        },
        children: "Convert to P\u012Bny\u012Bn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        className: "convert-modal",
        visible: modalVisible,
        onCancel: onCancelModal,
        onOk: function onOk() {
          return setModalVisible(false);
        },
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: convertBox,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            css: toConvert,
            placeholder: "Ni3 hao!3",
            value: input,
            onChange: onChangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["SwapOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 27
            }, _this),
            onClick: onClickConvert
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: converted,
            children: [!convertLoading && !convertDone && null, convertLoading && !convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LoadingOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 50
            }, _this), !convertLoading && convertDone && convertedPinyin]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(ConvertPopUp, "B4dUmMtXL2d4GiAzgaFLwsfb/2Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c2 = ConvertPopUp;
/* harmony default export */ __webpack_exports__["default"] = (ConvertPopUp);

var _c, _c2;

$RefreshReg$(_c, "Global");
$RefreshReg$(_c2, "ConvertPopUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb252ZXJ0Qm94IiwiY3NzIiwidG9Db252ZXJ0IiwiY29udmVydGVkIiwiQ29udmVydFBvcFVwIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY29udmVydExvYWRpbmciLCJjb252ZXJ0RG9uZSIsImNvbnZlcnRlZFBpbnlpbiIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwib25DYW5jZWxNb2RhbCIsInVzZUNhbGxiYWNrIiwic2V0SW5wdXQiLCJ0eXBlIiwiQ09OVkVSVF9SRVNFVF9SRVFVRVNUIiwidXNlSW5wdXQiLCJpbnB1dCIsIm9uQ2hhbmdlSW5wdXQiLCJvbkNsaWNrQ29udmVydCIsIkNPTlZFUlRfUElOWUlOX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyRUFBSCxtQkFBWjtLQUFNRCxNO0FBVU4sSUFBTUUsVUFBVSxHQUFHQywwREFBSCxvQkFBaEI7QUFVQSxJQUFNQyxTQUFTLEdBQUdELDBEQUFILG9CQUFmO0FBWUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZjs7QUFVQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHlCLHFCQUVnQ0MsK0RBQVcsQ0FDbEUsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQURrRSxDQUYzQztBQUFBLE1BRWpCQyxjQUZpQixnQkFFakJBLGNBRmlCO0FBQUEsTUFFREMsV0FGQyxnQkFFREEsV0FGQztBQUFBLE1BRVlDLGVBRlosZ0JBRVlBLGVBRlo7O0FBQUEsa0JBTWVDLHNEQUFRLENBQUMsS0FBRCxDQU52QjtBQUFBLE1BTWxCQyxZQU5rQjtBQUFBLE1BTUpDLGVBTkk7O0FBT3pCLE1BQU1DLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3RDRixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBRyxZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FiLFlBQVEsQ0FBQztBQUNQYyxVQUFJLEVBQUVDLG9FQUFxQkE7QUFEcEIsS0FBRCxDQUFSO0FBR0QsR0FOZ0MsQ0FBakM7O0FBUHlCLGtCQWVnQkMsZ0VBQVEsQ0FBQyxFQUFELENBZnhCO0FBQUE7QUFBQSxNQWVsQkMsS0Fma0I7QUFBQSxNQWVYQyxhQWZXO0FBQUEsTUFlSUwsUUFmSjs7QUFpQnpCLE1BQU1NLGNBQWMsR0FBR1AseURBQVcsQ0FBQyxZQUFNO0FBQ3ZDWixZQUFRLENBQUM7QUFDUGMsVUFBSSxFQUFFTSxxRUFEQztBQUVQQyxVQUFJLEVBQUU7QUFBRUMsZUFBTyxFQUFFTDtBQUFYO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMaUMsQ0FBbEM7QUFPQSxTQUNFO0FBQUEsZUFDRSw4RUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUEsaUJBQ0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTVAsZUFBZSxDQUFDLElBQUQsQ0FBckI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsOEVBQUMsMENBQUQ7QUFDRSxpQkFBUyxFQUFDLGVBRFo7QUFFRSxlQUFPLEVBQUVELFlBRlg7QUFHRSxnQkFBUSxFQUFFRSxhQUhaO0FBSUUsWUFBSSxFQUFFO0FBQUEsaUJBQU1ELGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsU0FKUjtBQUFBLGtCQU1FO0FBQUssYUFBRyxFQUFFZixVQUFWO0FBQUEscUJBQ0U7QUFDRSxlQUFHLEVBQUVFLFNBRFA7QUFFRSx1QkFBVyxFQUFDLFdBRmQ7QUFHRSxpQkFBSyxFQUFFb0IsS0FIVDtBQUlFLG9CQUFRLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQU9FLDhFQUFDLDJDQUFEO0FBQVEsZ0JBQUksRUFBRSw4RUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFkO0FBQWdDLG1CQUFPLEVBQUVDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsRUFRRTtBQUFLLGVBQUcsRUFBRXJCLFNBQVY7QUFBQSx1QkFDRyxDQUFDTyxjQUFELElBQW1CLENBQUNDLFdBQXBCLElBQW1DLElBRHRDLEVBRUdELGNBQWMsSUFBSSxDQUFDQyxXQUFuQixJQUFrQyw4RUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZyQyxFQUdHLENBQUNELGNBQUQsSUFBbUJDLFdBQW5CLElBQWtDQyxlQUhyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBRkY7QUFBQSxrQkFERjtBQTZCRCxDQXJERDs7R0FBTVIsWTtVQUNhRSx1RCxFQUN3Q0MsdUQsRUFhaEJjLHdEOzs7TUFmckNqQixZO0FBdURTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNzllZjgwZjNmMmFhMzdjNWZkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTd2FwT3V0bGluZWQsIExvYWRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENPTlZFUlRfUElOWUlOX1JFUVVFU1QsXHJcbiAgQ09OVkVSVF9SRVNFVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAuY29udmVydC1tb2RhbCA+IC5hbnQtbW9kYWwtY29udGVudCA+IC5hbnQtbW9kYWwtYm9keXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udmVydC1tb2RhbCA+IC5hbnQtbW9kYWwtY29udGVudCA+IC5hbnQtbW9kYWwtZm9vdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgY29udmVydEJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCAxMnB4ICNlOGU4ZTgsIC0xcHggLTFweCAzcHggI2U4ZThlOCxcclxuICAgIC02cHggLTZweCAxMnB4ICNlOGU4ZTgsIDFweCAxcHggM3B4ICNlOGU4ZTg7XHJcbmA7XHJcblxyXG5jb25zdCB0b0NvbnZlcnQgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMzcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMzcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuYDtcclxuXHJcbmNvbnN0IGNvbnZlcnRlZCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMzcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzYwZmZmZjtcclxuYDtcclxuXHJcbmNvbnN0IENvbnZlcnRQb3BVcCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjb252ZXJ0TG9hZGluZywgY29udmVydERvbmUsIGNvbnZlcnRlZFBpbnlpbiB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG5cclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2FuY2VsTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0SW5wdXQoJycpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1JFU0VUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2lucHV0LCBvbkNoYW5nZUlucHV0LCBzZXRJbnB1dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDb252ZXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IGlucHV0IH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsVmlzaWJsZSh0cnVlKX0+Q29udmVydCB0byBQxKtuecSrbjwvYnV0dG9uPlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udmVydC1tb2RhbFwiXHJcbiAgICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWxNb2RhbH1cclxuICAgICAgICAgIG9uT2s9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2NvbnZlcnRCb3h9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjc3M9e3RvQ29udmVydH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5pMyBoYW8hM1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8U3dhcE91dGxpbmVkIC8+fSBvbkNsaWNrPXtvbkNsaWNrQ29udmVydH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2NvbnZlcnRlZH0+XHJcbiAgICAgICAgICAgICAgeyFjb252ZXJ0TG9hZGluZyAmJiAhY29udmVydERvbmUgJiYgbnVsbH1cclxuICAgICAgICAgICAgICB7Y29udmVydExvYWRpbmcgJiYgIWNvbnZlcnREb25lICYmIDxMb2FkaW5nT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgeyFjb252ZXJ0TG9hZGluZyAmJiBjb252ZXJ0RG9uZSAmJiBjb252ZXJ0ZWRQaW55aW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVydFBvcFVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9