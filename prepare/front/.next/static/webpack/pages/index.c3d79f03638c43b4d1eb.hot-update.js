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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  position: absolute;\n  bottom: 13px;\n  right: 13;\n"]);

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
  var onClickCopy = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {});
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setModalVisible(true);
        },
        children: "Convert to P\u012Bny\u012Bn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
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
              lineNumber: 124,
              columnNumber: 23
            }, _this),
            onClick: onClickCancel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            css: toConvert,
            placeholder: "Ni3 hao!3",
            value: input,
            onChange: onChangeInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["SwapOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 27
            }, _this),
            onClick: onClickConvert
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: converted,
            children: [!convertLoading && !convertDone && null, convertLoading && !convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LoadingOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 50
            }, _this), !convertLoading && convertDone && convertedPinyin, convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
              css: copyBtn,
              icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["CopyOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 25
              }, _this),
              onClick: onClickCopy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(ConvertPopUp, "TT9iAbL3VefWr/bOUDBAaKuKJvU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb252ZXJ0Qm94IiwiY3NzIiwiY2FuY2VsQnRuIiwidG9Db252ZXJ0IiwiY29udmVydGVkIiwiY29weUJ0biIsIkNvbnZlcnRQb3BVcCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImNvbnZlcnRMb2FkaW5nIiwiY29udmVydERvbmUiLCJjb252ZXJ0ZWRQaW55aW4iLCJ1c2VJbnB1dCIsImlucHV0Iiwib25DaGFuZ2VJbnB1dCIsInNldElucHV0IiwidXNlU3RhdGUiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJvbkNhbmNlbE1vZGFsIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ09OVkVSVF9SRVNFVF9SRVFVRVNUIiwib25DbGlja0NhbmNlbCIsIm9uQ2xpY2tDb252ZXJ0IiwiQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCIsImRhdGEiLCJjb250ZW50Iiwib25DbGlja0NvcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUlBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyRUFBSCxtQkFBWjtLQUFNRCxNO0FBVU4sSUFBTUUsVUFBVSxHQUFHQywwREFBSCxvQkFBaEI7QUFXQSxJQUFNQyxTQUFTLEdBQUdELDBEQUFILG9CQUFmO0FBTUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZjtBQVlBLElBQU1HLFNBQVMsR0FBR0gsMERBQUgsb0JBQWY7QUFXQSxJQUFNSSxPQUFPLEdBQUdKLDBEQUFILG9CQUFiOztBQU1B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QkFGckMsRUFHRyxDQUFDRCxjQUFELElBQW1CQyxXQUFuQixJQUFrQ0MsZUFIckMsRUFJR0QsV0FBVyxJQUNWLDhFQUFDLDJDQUFEO0FBQ0UsaUJBQUcsRUFBRVIsT0FEUDtBQUVFLGtCQUFJLEVBQUUsOEVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGUjtBQUdFLHFCQUFPLEVBQUUwQjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQUZGO0FBQUEsa0JBREY7QUEyQ0QsQ0E1RUQ7O0dBQU16QixZO1VBQ2FFLHVELEVBQ3dDQyx1RCxFQUloQk0sd0Q7OztNQU5yQ1QsWTtBQThFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzNkNzlmMDM2MzhjNDNiNGQxZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtcclxuICBTd2FwT3V0bGluZWQsXHJcbiAgTG9hZGluZ091dGxpbmVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbiAgQ29weU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENPTlZFUlRfUElOWUlOX1JFUVVFU1QsXHJcbiAgQ09OVkVSVF9SRVNFVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAuY29udmVydC1tb2RhbCA+IC5hbnQtbW9kYWwtY29udGVudCA+IC5hbnQtbW9kYWwtYm9keXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udmVydC1tb2RhbCA+IC5hbnQtbW9kYWwtY29udGVudCA+IC5hbnQtbW9kYWwtZm9vdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgY29udmVydEJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTJweCAjZThlOGU4LCAtMXB4IC0xcHggM3B4ICNlOGU4ZTgsXHJcbiAgICAtNnB4IC02cHggMTJweCAjZThlOGU4LCAxcHggMXB4IDNweCAjZThlOGU4O1xyXG5gO1xyXG5cclxuY29uc3QgY2FuY2VsQnRuID0gY3NzYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEzcHg7XHJcbiAgcmlnaHQ6IDEzcHg7XHJcbmA7XHJcblxyXG5jb25zdCB0b0NvbnZlcnQgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMzcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMzcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuYDtcclxuXHJcbmNvbnN0IGNvbnZlcnRlZCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzM3B4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM2MGZmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBjb3B5QnRuID0gY3NzYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEzcHg7XHJcbiAgcmlnaHQ6IDEzO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udmVydFBvcFVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGNvbnZlcnRMb2FkaW5nLCBjb252ZXJ0RG9uZSwgY29udmVydGVkUGlueWluIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtpbnB1dCwgb25DaGFuZ2VJbnB1dCwgc2V0SW5wdXRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2FuY2VsTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0SW5wdXQoJycpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1JFU0VUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElucHV0KCcnKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9SRVNFVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDb252ZXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IGlucHV0IH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NvcHkgPSB1c2VDYWxsYmFjaygoKSA9PiB7fSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFZpc2libGUodHJ1ZSl9PkNvbnZlcnQgdG8gUMSrbnnEq248L2J1dHRvbj5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnZlcnQtbW9kYWxcIlxyXG4gICAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgb25DYW5jZWw9e29uQ2FuY2VsTW9kYWx9XHJcbiAgICAgICAgICBvbk9rPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY3NzPXtjb252ZXJ0Qm94fT5cclxuICAgICAgICAgICAge2lucHV0ICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjc3M9e2NhbmNlbEJ0bn1cclxuICAgICAgICAgICAgICAgIGljb249ezxDbG9zZU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0NhbmNlbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjc3M9e3RvQ29udmVydH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5pMyBoYW8hM1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8U3dhcE91dGxpbmVkIC8+fSBvbkNsaWNrPXtvbkNsaWNrQ29udmVydH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2NvbnZlcnRlZH0+XHJcbiAgICAgICAgICAgICAgeyFjb252ZXJ0TG9hZGluZyAmJiAhY29udmVydERvbmUgJiYgbnVsbH1cclxuICAgICAgICAgICAgICB7Y29udmVydExvYWRpbmcgJiYgIWNvbnZlcnREb25lICYmIDxMb2FkaW5nT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgeyFjb252ZXJ0TG9hZGluZyAmJiBjb252ZXJ0RG9uZSAmJiBjb252ZXJ0ZWRQaW55aW59XHJcbiAgICAgICAgICAgICAge2NvbnZlcnREb25lICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY3NzPXtjb3B5QnRufVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXs8Q29weU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ29weX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICA8Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0UG9wVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=