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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n  position: relative;\n  font-size: 21px;\n  border-bottom-left-radius: 33px;\n  border-bottom-right-radius: 33px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n  resize: none;\n  font-size: 21px;\n  border: none;\n  border-top-left-radius: 33px;\n  border-top-right-radius: 33px;\n"]);

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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border: 3px solid #3a18ff;\n  border-radius: 33px;\n  background: #ffffff;\n  /* box-shadow: 6px 6px 12px #e8e8e8, -1px -1px 3px #e8e8e8,\n    -6px -6px 12px #e8e8e8, 1px 1px 3px #e8e8e8; */\n"]);

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
    var pinyin = pinyinRef.current.innerText;
    navigator.clipboard.writeText(pinyin);
    antd__WEBPACK_IMPORTED_MODULE_6__["message"].success({
      content: '클립보드에 복사되었습니다!',
      duration: 1
    });
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setModalVisible(true);
        },
        children: "Convert to P\u012Bny\u012Bn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
              lineNumber: 131,
              columnNumber: 23
            }, _this),
            onClick: onClickCancel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            css: toConvert,
            placeholder: "Ni3 hao!3",
            value: input,
            onChange: onChangeInput,
            spellCheck: "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["SwapOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 27
            }, _this),
            onClick: onClickConvert
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "convert-text",
            css: converted,
            ref: pinyinRef,
            children: [!convertLoading && !convertDone && null, convertLoading && !convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LoadingOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 50
            }, _this), !convertLoading && convertDone && convertedPinyin, convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              css: copyBtn,
              icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CopyOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 25
              }, _this),
              onClick: onClickCopy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb252ZXJ0Qm94IiwiY3NzIiwiY2FuY2VsQnRuIiwidG9Db252ZXJ0IiwiY29udmVydGVkIiwiY29weUJ0biIsIkNvbnZlcnRQb3BVcCIsInBpbnlpblJlZiIsInVzZVJlZiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImNvbnZlcnRMb2FkaW5nIiwiY29udmVydERvbmUiLCJjb252ZXJ0ZWRQaW55aW4iLCJ1c2VJbnB1dCIsImlucHV0Iiwib25DaGFuZ2VJbnB1dCIsInNldElucHV0IiwidXNlU3RhdGUiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJvbkNhbmNlbE1vZGFsIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ09OVkVSVF9SRVNFVF9SRVFVRVNUIiwib25DbGlja0NhbmNlbCIsIm9uQ2xpY2tDb252ZXJ0IiwiQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCIsImRhdGEiLCJjb250ZW50Iiwib25DbGlja0NvcHkiLCJwaW55aW4iLCJjdXJyZW50IiwiaW5uZXJUZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBSUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDJFQUFILG1CQUFaO0tBQU1ELE07QUFVTixJQUFNRSxVQUFVLEdBQUdDLDBEQUFILG9CQUFoQjtBQVlBLElBQU1DLFNBQVMsR0FBR0Qs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QUFFRSx1QkFBVyxFQUFDLFdBRmQ7QUFHRSxpQkFBSyxFQUFFZSxLQUhUO0FBSUUsb0JBQVEsRUFBRUMsYUFKWjtBQUtFLHNCQUFVLEVBQUM7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLEVBZUUsOEVBQUMsMkNBQUQ7QUFBUSxnQkFBSSxFQUFFLDhFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWQ7QUFBZ0MsbUJBQU8sRUFBRVU7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRixFQWdCRTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUE4QixlQUFHLEVBQUV6QixTQUFuQztBQUE4QyxlQUFHLEVBQUVHLFNBQW5EO0FBQUEsdUJBQ0csQ0FBQ08sY0FBRCxJQUFtQixDQUFDQyxXQUFwQixJQUFtQyxJQUR0QyxFQUVHRCxjQUFjLElBQUksQ0FBQ0MsV0FBbkIsSUFBa0MsOEVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGckMsRUFHRyxDQUFDRCxjQUFELElBQW1CQyxXQUFuQixJQUFrQ0MsZUFIckMsRUFJR0QsV0FBVyxJQUNWLDhFQUFDLDJDQUFEO0FBQ0UsaUJBQUcsRUFBRVYsT0FEUDtBQUVFLGtCQUFJLEVBQUUsOEVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGUjtBQUdFLHFCQUFPLEVBQUU0QjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFGRjtBQUFBLGtCQURGO0FBNENELENBckZEOztHQUFNM0IsWTtVQUVhSSx1RCxFQUN3Q0MsdUQsRUFJaEJNLHdEOzs7TUFQckNYLFk7QUF1RlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQyY2U1YWUzY2I1MzM3NjlkMjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtcclxuICBTd2FwT3V0bGluZWQsXHJcbiAgTG9hZGluZ091dGxpbmVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbiAgQ29weU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENPTlZFUlRfUElOWUlOX1JFUVVFU1QsXHJcbiAgQ09OVkVSVF9SRVNFVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAuY29udmVydC1tb2RhbCA+IC5hbnQtbW9kYWwtY29udGVudCA+IC5hbnQtbW9kYWwtYm9keXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udmVydC1tb2RhbCA+IC5hbnQtbW9kYWwtY29udGVudCA+IC5hbnQtbW9kYWwtZm9vdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgY29udmVydEJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzNhMThmZjtcclxuICBib3JkZXItcmFkaXVzOiAzM3B4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLyogYm94LXNoYWRvdzogNnB4IDZweCAxMnB4ICNlOGU4ZTgsIC0xcHggLTFweCAzcHggI2U4ZThlOCxcclxuICAgIC02cHggLTZweCAxMnB4ICNlOGU4ZTgsIDFweCAxcHggM3B4ICNlOGU4ZTg7ICovXHJcbmA7XHJcblxyXG5jb25zdCBjYW5jZWxCdG4gPSBjc3NgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTNweDtcclxuICByaWdodDogMTNweDtcclxuYDtcclxuXHJcbmNvbnN0IHRvQ29udmVydCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzNweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzNweDtcclxuYDtcclxuXHJcbmNvbnN0IGNvbnZlcnRlZCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzM3B4O1xyXG5gO1xyXG5cclxuY29uc3QgY29weUJ0biA9IGNzc2BcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxM3B4O1xyXG4gIHJpZ2h0OiAxM3B4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udmVydFBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpbnlpblJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjb252ZXJ0TG9hZGluZywgY29udmVydERvbmUsIGNvbnZlcnRlZFBpbnlpbiB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG5cclxuICBjb25zdCBbaW5wdXQsIG9uQ2hhbmdlSW5wdXQsIHNldElucHV0XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNhbmNlbE1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgIHNldElucHV0KCcnKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9SRVNFVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENPTlZFUlRfUkVTRVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrQ29udmVydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCxcclxuICAgICAgZGF0YTogeyBjb250ZW50OiBpbnB1dCB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDb3B5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgcGlueWluID0gcGlueWluUmVmLmN1cnJlbnQuaW5uZXJUZXh0O1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocGlueWluKTtcclxuICAgIG1lc3NhZ2Uuc3VjY2Vzcyh7XHJcbiAgICAgIGNvbnRlbnQ6ICftgbTrpr3rs7Trk5zsl5Ag67O17IKs65CY7JeI7Iq164uI64ukIScsXHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKHRydWUpfT5Db252ZXJ0IHRvIFDEq255xKtuPC9idXR0b24+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb252ZXJ0LW1vZGFsXCJcclxuICAgICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbE1vZGFsfVxyXG4gICAgICAgICAgb25Paz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Y29udmVydEJveH0+XHJcbiAgICAgICAgICAgIHtpbnB1dCAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY3NzPXtjYW5jZWxCdG59XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8Q2xvc2VPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tDYW5jZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY3NzPXt0b0NvbnZlcnR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOaTMgaGFvITNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8U3dhcE91dGxpbmVkIC8+fSBvbkNsaWNrPXtvbkNsaWNrQ29udmVydH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb252ZXJ0LXRleHRcIiBjc3M9e2NvbnZlcnRlZH0gcmVmPXtwaW55aW5SZWZ9PlxyXG4gICAgICAgICAgICAgIHshY29udmVydExvYWRpbmcgJiYgIWNvbnZlcnREb25lICYmIG51bGx9XHJcbiAgICAgICAgICAgICAge2NvbnZlcnRMb2FkaW5nICYmICFjb252ZXJ0RG9uZSAmJiA8TG9hZGluZ091dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIHshY29udmVydExvYWRpbmcgJiYgY29udmVydERvbmUgJiYgY29udmVydGVkUGlueWlufVxyXG4gICAgICAgICAgICAgIHtjb252ZXJ0RG9uZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNzcz17Y29weUJ0bn1cclxuICAgICAgICAgICAgICAgICAgaWNvbj17PENvcHlPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0NvcHl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVydFBvcFVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9