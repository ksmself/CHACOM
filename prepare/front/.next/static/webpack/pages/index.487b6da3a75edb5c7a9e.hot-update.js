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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 100px;\n  padding: 16px;\n  border-bottom-left-radius: 33px;\n  border-bottom-right-radius: 33px;\n  // background-color: #60ffff;\n"]);

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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  border-radius: 33px;\n  background: #ffffff;\n  box-shadow: 6px 6px 12px #e8e8e8, -1px -1px 3px #e8e8e8,\n    -6px -6px 12px #e8e8e8, 1px 1px 3px #e8e8e8;\n"]);

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
      convertPinyinLoading = _useSelector.convertPinyinLoading,
      convertPinyinDone = _useSelector.convertPinyinDone,
      convertedPinyin = _useSelector.convertedPinyin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      modalVisible = _useState[0],
      setModalVisible = _useState[1];

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      inputToConvert = _useInput2[0],
      onChangeInputToConvert = _useInput2[1];

  var onClickConvert = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["CONVERT_PINYIN_REQUEST"],
      data: {
        content: inputToConvert
      }
    });
  });

  function ConvertedText(loading, done) {
    if (loading === false && done === false) return null;
    if (loading === true && done === true) return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LoadingOutlined"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 51
    }, this);
    if (loading === false && done === true) return convertedPinyin;
  }

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setModalVisible(true);
        },
        children: "Convert to P\u012Bny\u012Bn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        className: "convert-modal",
        visible: modalVisible,
        onCancel: function onCancel() {
          return setModalVisible(false);
        },
        onOk: function onOk() {
          return setModalVisible(false);
        },
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: convertBox,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            css: toConvert,
            placeholder: "Ni3 hao!3",
            value: inputToConvert,
            onChange: onChangeInputToConvert
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["SwapOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 27
            }, _this),
            onClick: onClickConvert
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: converted,
            children: [!convertPinyinLoading && !convertPinyinDone && null, convertPinyinLoading && !convertPinyinDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["LoadingOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true)]
  }, void 0, true);
};

_s(ConvertPopUp, "xZGCzyNleLL0gGdjZQZpE867w0Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb252ZXJ0Qm94IiwiY3NzIiwidG9Db252ZXJ0IiwiY29udmVydGVkIiwiQ29udmVydFBvcFVwIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY29udmVydFBpbnlpbkxvYWRpbmciLCJjb252ZXJ0UGlueWluRG9uZSIsImNvbnZlcnRlZFBpbnlpbiIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwidXNlSW5wdXQiLCJpbnB1dFRvQ29udmVydCIsIm9uQ2hhbmdlSW5wdXRUb0NvbnZlcnQiLCJvbkNsaWNrQ29udmVydCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNPTlZFUlRfUElOWUlOX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsIkNvbnZlcnRlZFRleHQiLCJsb2FkaW5nIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyRUFBSCxtQkFBWjtLQUFNRCxNO0FBVU4sSUFBTUUsVUFBVSxHQUFHQywwREFBSCxvQkFBaEI7QUFPQSxJQUFNQyxTQUFTLEdBQUdELDBEQUFILG9CQUFmO0FBWUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZjs7QUFTQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHlCLHFCQU1yQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FOVTtBQUFBLE1BR3ZCQyxvQkFIdUIsZ0JBR3ZCQSxvQkFIdUI7QUFBQSxNQUl2QkMsaUJBSnVCLGdCQUl2QkEsaUJBSnVCO0FBQUEsTUFLdkJDLGVBTHVCLGdCQUt2QkEsZUFMdUI7O0FBQUEsa0JBUWVDLHNEQUFRLENBQUMsS0FBRCxDQVJ2QjtBQUFBLE1BUWxCQyxZQVJrQjtBQUFBLE1BUUpDLGVBUkk7O0FBQUEsa0JBVXdCQyxnRUFBUSxDQUFDLEVBQUQsQ0FWaEM7QUFBQTtBQUFBLE1BVWxCQyxjQVZrQjtBQUFBLE1BVUZDLHNCQVZFOztBQVl6QixNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN2Q2YsWUFBUSxDQUFDO0FBQ1BnQixVQUFJLEVBQUVDLHFFQURDO0FBRVBDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUVQO0FBQVg7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxpQyxDQUFsQzs7QUFPQSxXQUFTUSxhQUFULENBQXVCQyxPQUF2QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDcEMsUUFBSUQsT0FBTyxLQUFLLEtBQVosSUFBcUJDLElBQUksS0FBSyxLQUFsQyxFQUF5QyxPQUFPLElBQVA7QUFDekMsUUFBSUQsT0FBTyxLQUFLLElBQVosSUFBb0JDLElBQUksS0FBSyxJQUFqQyxFQUF1QyxPQUFPLDhFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUN2QyxRQUFJRCxPQUFPLEtBQUssS0FBWixJQUFxQkMsSUFBSSxLQUFLLElBQWxDLEVBQXdDLE9BQU9mLGVBQVA7QUFDekM7O0FBRUQsU0FDRTtBQUFBLGVBQ0UsOEVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFBLGlCQUNFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1HLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLDhFQUFDLDBDQUFEO0FBQ0UsaUJBQVMsRUFBQyxlQURaO0FBRUUsZUFBTyxFQUFFRCxZQUZYO0FBR0UsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNQyxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBLFNBSFo7QUFJRSxZQUFJLEVBQUU7QUFBQSxpQkFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxTQUpSO0FBQUEsa0JBTUU7QUFBSyxhQUFHLEVBQUVmLFVBQVY7QUFBQSxxQkFDRTtBQUNFLGVBQUcsRUFBRUUsU0FEUDtBQUVFLHVCQUFXLEVBQUMsV0FGZDtBQUdFLGlCQUFLLEVBQUVlLGNBSFQ7QUFJRSxvQkFBUSxFQUFFQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFPRSw4RUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUUsOEVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZDtBQUFnQyxtQkFBTyxFQUFFQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLEVBUUU7QUFBSyxlQUFHLEVBQUVoQixTQUFWO0FBQUEsdUJBQ0csQ0FBQ08sb0JBQUQsSUFBeUIsQ0FBQ0MsaUJBQTFCLElBQStDLElBRGxELEVBRUdELG9CQUFvQixJQUFJLENBQUNDLGlCQUF6QixJQUNDLDhFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQUZGO0FBQUEsa0JBREY7QUE4QkQsQ0F2REQ7O0dBQU1QLFk7VUFDYUUsdUQsRUFLYkMsdUQsRUFJNkNTLHdEOzs7TUFWN0NaLFk7QUF5RFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4N2I2ZGEzYTc1ZWRiNWM3YTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFN3YXBPdXRsaW5lZCwgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IENPTlZFUlRfUElOWUlOX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgLmNvbnZlcnQtbW9kYWwgPiAuYW50LW1vZGFsLWNvbnRlbnQgPiAuYW50LW1vZGFsLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnZlcnQtbW9kYWwgPiAuYW50LW1vZGFsLWNvbnRlbnQgPiAuYW50LW1vZGFsLWZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IGNvbnZlcnRCb3ggPSBjc3NgXHJcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTJweCAjZThlOGU4LCAtMXB4IC0xcHggM3B4ICNlOGU4ZTgsXHJcbiAgICAtNnB4IC02cHggMTJweCAjZThlOGU4LCAxcHggMXB4IDNweCAjZThlOGU4O1xyXG5gO1xyXG5cclxuY29uc3QgdG9Db252ZXJ0ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzM3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzM3B4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBjb252ZXJ0ZWQgPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMzcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzYwZmZmZjtcclxuYDtcclxuXHJcbmNvbnN0IENvbnZlcnRQb3BVcCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgY29udmVydFBpbnlpbkxvYWRpbmcsXHJcbiAgICBjb252ZXJ0UGlueWluRG9uZSxcclxuICAgIGNvbnZlcnRlZFBpbnlpbixcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lucHV0VG9Db252ZXJ0LCBvbkNoYW5nZUlucHV0VG9Db252ZXJ0XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NvbnZlcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENPTlZFUlRfUElOWUlOX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgY29udGVudDogaW5wdXRUb0NvbnZlcnQgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBDb252ZXJ0ZWRUZXh0KGxvYWRpbmcsIGRvbmUpIHtcclxuICAgIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBkb25lID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSAmJiBkb25lID09PSB0cnVlKSByZXR1cm4gPExvYWRpbmdPdXRsaW5lZCAvPjtcclxuICAgIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBkb25lID09PSB0cnVlKSByZXR1cm4gY29udmVydGVkUGlueWluO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsVmlzaWJsZSh0cnVlKX0+Q29udmVydCB0byBQxKtuecSrbjwvYnV0dG9uPlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udmVydC1tb2RhbFwiXHJcbiAgICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgIG9uT2s9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2NvbnZlcnRCb3h9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBjc3M9e3RvQ29udmVydH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5pMyBoYW8hM1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VG9Db252ZXJ0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0VG9Db252ZXJ0fVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8U3dhcE91dGxpbmVkIC8+fSBvbkNsaWNrPXtvbkNsaWNrQ29udmVydH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2NvbnZlcnRlZH0+XHJcbiAgICAgICAgICAgICAgeyFjb252ZXJ0UGlueWluTG9hZGluZyAmJiAhY29udmVydFBpbnlpbkRvbmUgJiYgbnVsbH1cclxuICAgICAgICAgICAgICB7Y29udmVydFBpbnlpbkxvYWRpbmcgJiYgIWNvbnZlcnRQaW55aW5Eb25lICYmIChcclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRQb3BVcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==