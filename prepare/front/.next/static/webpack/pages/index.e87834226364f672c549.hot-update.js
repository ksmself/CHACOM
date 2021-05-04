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

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  position: absolute;\n  bottom: 13px;\n  right: 13px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n  position: relative;\n  font-size: 21px;\n  border-bottom-left-radius: 33px;\n  border-bottom-right-radius: 33px;\n  // background-color: #60ffff;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n  resize: none;\n  font-size: 21px;\n  border: none;\n  border-top-left-radius: 33px;\n  border-top-right-radius: 33px;\n  // background-color: #000;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  position: absolute;\n  top: 13px;\n  right: 13px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 33px;\n  background: #ffffff;\n  box-shadow: 6px 6px 12px #e8e8e8, -1px -1px 3px #e8e8e8,\n    -6px -6px 12px #e8e8e8, 1px 1px 3px #e8e8e8;\n"]);

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
var cancelBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var toConvert = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var converted = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
var copyBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6());

var ConvertPopUp = function ConvertPopUp() {
  _s();

  var pinyinRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      convertLoading = _useSelector.convertLoading,
      convertDone = _useSelector.convertDone,
      convertedPinyin = _useSelector.convertedPinyin;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
      input = _useInput2[0],
      onChangeInput = _useInput2[1],
      setInput = _useInput2[2];

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
  var onClickCancel = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setInput('');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["CONVERT_RESET_REQUEST"]
    });
  });
  var onClickConvert = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["CONVERT_PINYIN_REQUEST"],
      data: {
        content: input
      }
    });
  });
  var onClickCopy = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    pinyinRef.current.select();
    document.execCommand('copy');
  });
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setModalVisible(true);
        },
        children: "Convert to P\u012Bny\u012Bn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
          children: [input && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            css: cancelBtn,
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CloseOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 23
            }, _this),
            onClick: onClickCancel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            css: toConvert,
            placeholder: "Ni3 hao!3",
            value: input,
            onChange: onChangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["SwapOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 27
            }, _this),
            onClick: onClickConvert
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: converted,
            ref: pinyinRef,
            children: [!convertLoading && !convertDone && null, convertLoading && !convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LoadingOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 50
            }, _this), !convertLoading && convertDone && convertedPinyin, convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              css: copyBtn,
              icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CopyOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 25
              }, _this),
              onClick: onClickCopy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(ConvertPopUp, "dJVhca1FE9HYHoQFCbdacpYMN8I=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb252ZXJ0Qm94IiwiY3NzIiwiY2FuY2VsQnRuIiwidG9Db252ZXJ0IiwiY29udmVydGVkIiwiY29weUJ0biIsIkNvbnZlcnRQb3BVcCIsInBpbnlpblJlZiIsInVzZVJlZiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImNvbnZlcnRMb2FkaW5nIiwiY29udmVydERvbmUiLCJjb252ZXJ0ZWRQaW55aW4iLCJ1c2VJbnB1dCIsImlucHV0Iiwib25DaGFuZ2VJbnB1dCIsInNldElucHV0IiwidXNlU3RhdGUiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJvbkNhbmNlbE1vZGFsIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ09OVkVSVF9SRVNFVF9SRVFVRVNUIiwib25DbGlja0NhbmNlbCIsIm9uQ2xpY2tDb252ZXJ0IiwiQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCIsImRhdGEiLCJjb250ZW50Iiwib25DbGlja0NvcHkiLCJjdXJyZW50Iiwic2VsZWN0IiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBSUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDJFQUFILG1CQUFaO0tBQU1ELE07QUFVTixJQUFNRSxVQUFVLEdBQUdDLDBEQUFILG9CQUFoQjtBQVdBLElBQU1DLFNBQVMsR0FBR0QsMERBQUgsb0JBQWY7QUFNQSxJQUFNRSxTQUFTLEdBQUdGLDBEQUFILG9CQUFmO0FBWUEsSUFB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QUFFVTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLEVBZUU7QUFBSyxlQUFHLEVBQUV6QixTQUFWO0FBQXFCLGVBQUcsRUFBRUcsU0FBMUI7QUFBQSx1QkFDRyxDQUFDTyxjQUFELElBQW1CLENBQUNDLFdBQXBCLElBQW1DLElBRHRDLEVBRUdELGNBQWMsSUFBSSxDQUFDQyxXQUFuQixJQUFrQyw4RUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZyQyxFQUdHLENBQUNELGNBQUQsSUFBbUJDLFdBQW5CLElBQWtDQyxlQUhyQyxFQUlHRCxXQUFXLElBQ1YsOEVBQUMsMkNBQUQ7QUFDRSxpQkFBRyxFQUFFVixPQURQO0FBRUUsa0JBQUksRUFBRSw4RUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZSO0FBR0UscUJBQU8sRUFBRTRCO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBRkY7QUFBQSxrQkFERjtBQTJDRCxDQWhGRDs7R0FBTTNCLFk7VUFFYUksdUQsRUFDd0NDLHVELEVBSWhCTSx3RDs7O01BUHJDWCxZO0FBa0ZTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lODc4MzQyMjYzNjRmNjcyYzU0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7XHJcbiAgU3dhcE91dGxpbmVkLFxyXG4gIExvYWRpbmdPdXRsaW5lZCxcclxuICBDbG9zZU91dGxpbmVkLFxyXG4gIENvcHlPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gIENPTlZFUlRfUkVTRVRfUkVRVUVTVCxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgLmNvbnZlcnQtbW9kYWwgPiAuYW50LW1vZGFsLWNvbnRlbnQgPiAuYW50LW1vZGFsLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnZlcnQtbW9kYWwgPiAuYW50LW1vZGFsLWNvbnRlbnQgPiAuYW50LW1vZGFsLWZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IGNvbnZlcnRCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDEycHggI2U4ZThlOCwgLTFweCAtMXB4IDNweCAjZThlOGU4LFxyXG4gICAgLTZweCAtNnB4IDEycHggI2U4ZThlOCwgMXB4IDFweCAzcHggI2U4ZThlODtcclxuYDtcclxuXHJcbmNvbnN0IGNhbmNlbEJ0biA9IGNzc2BcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxM3B4O1xyXG4gIHJpZ2h0OiAxM3B4O1xyXG5gO1xyXG5cclxuY29uc3QgdG9Db252ZXJ0ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzM3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzM3B4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBjb252ZXJ0ZWQgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzNweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzNweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBmZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgY29weUJ0biA9IGNzc2BcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxM3B4O1xyXG4gIHJpZ2h0OiAxM3B4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udmVydFBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpbnlpblJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjb252ZXJ0TG9hZGluZywgY29udmVydERvbmUsIGNvbnZlcnRlZFBpbnlpbiB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG5cclxuICBjb25zdCBbaW5wdXQsIG9uQ2hhbmdlSW5wdXQsIHNldElucHV0XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNhbmNlbE1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgIHNldElucHV0KCcnKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9SRVNFVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENPTlZFUlRfUkVTRVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrQ29udmVydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBjb250ZW50OiBpbnB1dCB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDb3B5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgcGlueWluUmVmLmN1cnJlbnQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKHRydWUpfT5Db252ZXJ0IHRvIFDEq255xKtuPC9idXR0b24+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb252ZXJ0LW1vZGFsXCJcclxuICAgICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbE1vZGFsfVxyXG4gICAgICAgICAgb25Paz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Y29udmVydEJveH0+XHJcbiAgICAgICAgICAgIHtpbnB1dCAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY3NzPXtjYW5jZWxCdG59XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8Q2xvc2VPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tDYW5jZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY3NzPXt0b0NvbnZlcnR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOaTMgaGFvITNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFN3YXBPdXRsaW5lZCAvPn0gb25DbGljaz17b25DbGlja0NvbnZlcnR9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtjb252ZXJ0ZWR9IHJlZj17cGlueWluUmVmfT5cclxuICAgICAgICAgICAgICB7IWNvbnZlcnRMb2FkaW5nICYmICFjb252ZXJ0RG9uZSAmJiBudWxsfVxyXG4gICAgICAgICAgICAgIHtjb252ZXJ0TG9hZGluZyAmJiAhY29udmVydERvbmUgJiYgPExvYWRpbmdPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICB7IWNvbnZlcnRMb2FkaW5nICYmIGNvbnZlcnREb25lICYmIGNvbnZlcnRlZFBpbnlpbn1cclxuICAgICAgICAgICAgICB7Y29udmVydERvbmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjc3M9e2NvcHlCdG59XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxDb3B5T3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tDb3B5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRQb3BVcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==