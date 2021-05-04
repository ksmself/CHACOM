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
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ConvertedText, {
              loading: convertPinyinLoading,
              done: convertPinyinDone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAuanMiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb252ZXJ0Qm94IiwiY3NzIiwidG9Db252ZXJ0IiwiY29udmVydGVkIiwiQ29udmVydFBvcFVwIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY29udmVydFBpbnlpbkxvYWRpbmciLCJjb252ZXJ0UGlueWluRG9uZSIsImNvbnZlcnRlZFBpbnlpbiIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwidXNlSW5wdXQiLCJpbnB1dFRvQ29udmVydCIsIm9uQ2hhbmdlSW5wdXRUb0NvbnZlcnQiLCJvbkNsaWNrQ29udmVydCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNPTlZFUlRfUElOWUlOX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsIkNvbnZlcnRlZFRleHQiLCJsb2FkaW5nIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQywyRUFBSCxtQkFBWjtLQUFNRCxNO0FBVU4sSUFBTUUsVUFBVSxHQUFHQywwREFBSCxvQkFBaEI7QUFPQSxJQUFNQyxTQUFTLEdBQUdELDBEQUFILG9CQUFmO0FBWUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZjs7QUFTQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHlCLHFCQU1yQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FOVTtBQUFBLE1BR3ZCQyxvQkFIdUIsZ0JBR3ZCQSxvQkFIdUI7QUFBQSxNQUl2QkMsaUJBSnVCLGdCQUl2QkEsaUJBSnVCO0FBQUEsTUFLdkJDLGVBTHVCLGdCQUt2QkEsZUFMdUI7O0FBQUEsa0JBUWVDLHNEQUFRLENBQUMsS0FBRCxDQVJ2QjtBQUFBLE1BUWxCQyxZQVJrQjtBQUFBLE1BUUpDLGVBUkk7O0FBQUEsa0JBVXdCQyxnRUFBUSxDQUFDLEVBQUQsQ0FWaEM7QUFBQTtBQUFBLE1BVWxCQyxjQVZrQjtBQUFBLE1BVUZDLHNCQVZFOztBQVl6QixNQUFNQyxjQUFjLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN2Q2YsWUFBUSxDQUFDO0FBQ1BnQixVQUFJLEVBQUVDLHFFQURDO0FBRVBDLFVBQUksRUFBRTtBQUFFQyxlQUFPLEVBQUVQO0FBQVg7QUFGQyxLQUFELENBQVI7QUFJRCxHQUxpQyxDQUFsQzs7QUFPQSxXQUFTUSxhQUFULENBQXVCQyxPQUF2QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDcEMsUUFBSUQsT0FBTyxLQUFLLEtBQVosSUFBcUJDLElBQUksS0FBSyxLQUFsQyxFQUF5QyxPQUFPLElBQVA7QUFDekMsUUFBSUQsT0FBTyxLQUFLLElBQVosSUFBb0JDLElBQUksS0FBSyxJQUFqQyxFQUF1QyxPQUFPLDhFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUN2QyxRQUFJRCxPQUFPLEtBQUssS0FBWixJQUFxQkMsSUFBSSxLQUFLLElBQWxDLEVBQXdDLE9BQU9mLGVBQVA7QUFDekM7O0FBRUQsU0FDRTtBQUFBLGVBQ0UsOEVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFBLGlCQUNFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1HLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLDhFQUFDLDBDQUFEO0FBQ0UsaUJBQVMsRUFBQyxlQURaO0FBRUUsZUFBTyxFQUFFRCxZQUZYO0FBR0UsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNQyxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBLFNBSFo7QUFJRSxZQUFJLEVBQUU7QUFBQSxpQkFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxTQUpSO0FBQUEsa0JBTUU7QUFBSyxhQUFHLEVBQUVmLFVBQVY7QUFBQSxxQkFDRTtBQUNFLGVBQUcsRUFBRUUsU0FEUDtBQUVFLHVCQUFXLEVBQUMsV0FGZDtBQUdFLGlCQUFLLEVBQUVlLGNBSFQ7QUFJRSxvQkFBUSxFQUFFQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFPRSw4RUFBQywyQ0FBRDtBQUFRLGdCQUFJLEVBQUUsOEVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZDtBQUFnQyxtQkFBTyxFQUFFQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLEVBUUU7QUFBSyxlQUFHLEVBQUVoQixTQUFWO0FBQUEsc0JBQ0UsOEVBQUMsYUFBRDtBQUNFLHFCQUFPLEVBQUVPLG9CQURYO0FBRUUsa0JBQUksRUFBRUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFGRjtBQUFBLGtCQURGO0FBOEJELENBdkREOztHQUFNUCxZO1VBQ2FFLHVELEVBS2JDLHVELEVBSTZDUyx3RDs7O01BVjdDWixZO0FBeURTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MzA0ZGJiYjQ3NTdhZWViMWVkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTd2FwT3V0bGluZWQsIExvYWRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBDT05WRVJUX1BJTllJTl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5jb252ZXJ0LW1vZGFsID4gLmFudC1tb2RhbC1jb250ZW50ID4gLmFudC1tb2RhbC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb252ZXJ0LW1vZGFsID4gLmFudC1tb2RhbC1jb250ZW50ID4gLmFudC1tb2RhbC1mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBjb252ZXJ0Qm94ID0gY3NzYFxyXG4gIGJvcmRlci1yYWRpdXM6IDMzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDEycHggI2U4ZThlOCwgLTFweCAtMXB4IDNweCAjZThlOGU4LFxyXG4gICAgLTZweCAtNnB4IDEycHggI2U4ZThlOCwgMXB4IDFweCAzcHggI2U4ZThlODtcclxuYDtcclxuXHJcbmNvbnN0IHRvQ29udmVydCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzNweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzNweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgY29udmVydGVkID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzM3B4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM2MGZmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBDb252ZXJ0UG9wVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbnZlcnRQaW55aW5Mb2FkaW5nLFxyXG4gICAgY29udmVydFBpbnlpbkRvbmUsXHJcbiAgICBjb252ZXJ0ZWRQaW55aW4sXHJcbiAgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFRvQ29udmVydCwgb25DaGFuZ2VJbnB1dFRvQ29udmVydF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDb252ZXJ0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IGlucHV0VG9Db252ZXJ0IH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gQ29udmVydGVkVGV4dChsb2FkaW5nLCBkb25lKSB7XHJcbiAgICBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgZG9uZSA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKGxvYWRpbmcgPT09IHRydWUgJiYgZG9uZSA9PT0gdHJ1ZSkgcmV0dXJuIDxMb2FkaW5nT3V0bGluZWQgLz47XHJcbiAgICBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgZG9uZSA9PT0gdHJ1ZSkgcmV0dXJuIGNvbnZlcnRlZFBpbnlpbjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFZpc2libGUodHJ1ZSl9PkNvbnZlcnQgdG8gUMSrbnnEq248L2J1dHRvbj5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnZlcnQtbW9kYWxcIlxyXG4gICAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICBvbk9rPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY3NzPXtjb252ZXJ0Qm94fT5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY3NzPXt0b0NvbnZlcnR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOaTMgaGFvITNcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRvQ29udmVydH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dFRvQ29udmVydH1cclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFN3YXBPdXRsaW5lZCAvPn0gb25DbGljaz17b25DbGlja0NvbnZlcnR9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtjb252ZXJ0ZWR9PlxyXG4gICAgICAgICAgICAgIDxDb252ZXJ0ZWRUZXh0XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtjb252ZXJ0UGlueWluTG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGRvbmU9e2NvbnZlcnRQaW55aW5Eb25lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVydFBvcFVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9