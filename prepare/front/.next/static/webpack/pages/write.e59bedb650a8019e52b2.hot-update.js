webpackHotUpdate_N_E("pages/write",{

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\write.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: none;\n  width: 220px;\n  font-size: 13px;\n  color: #fff;\n  background-color: #000;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: inline-block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin: 0 10px 0 21px;\n\n  input {\n    font-size: 15px;\n    border: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: calc(100% - 20px);\n  margin: 0 10px 20px;\n  font-size: 30px;\n  font-weight: 700;\n  border: none;\n\n  &:focus {\n    border: none;\n    box-shadow: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */






var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;
var writePage = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var titleBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var tagBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var tags = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var tagInfoBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());

var Write = function Write() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
      tag = _useInput2[0],
      onChangeTag = _useInput2[1],
      setTag = _useInput2[2];

  var onFocusInput = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    document.getElementById('tag-info').style.display = 'block';
  }, []);
  var onBlurInput = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    document.getElementById('tag-info').style.display = 'none';
  }, []);
  var onKeyPressTag = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault(); // 빈칸으로 입력하지 않았을때만 해시태그에 추가

      if (tag.trim() !== '') {
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_HASHTAG_REQUEST"],
          datatag: datatag
        });
      }

      setTag('');
    }
  }, [tag]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: writePage,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
      css: titleBox,
      placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
      autoSize: {
        minRows: 1
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: tagBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: tags
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
        value: tag,
        onChange: onChangeTag,
        onKeyPress: onKeyPressTag,
        onFocus: onFocusInput,
        onBlur: onBlurInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "tag-info",
        css: tagInfoBox,
        children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, _this);
};

_s(Write, "l9N0PwDyZzciZYy6UuZsmtKatQI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = Write;
/* harmony default export */ __webpack_exports__["default"] = (Write);

var _c;

$RefreshReg$(_c, "Write");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsInRpdGxlQm94IiwidGFnQm94IiwidGFncyIsInRhZ0luZm9Cb3giLCJXcml0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VJbnB1dCIsInRhZyIsIm9uQ2hhbmdlVGFnIiwic2V0VGFnIiwib25Gb2N1c0lucHV0IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwib25CbHVySW5wdXQiLCJvbktleVByZXNzVGFnIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInR5cGUiLCJBRERfSEFTSFRBR19SRVFVRVNUIiwiZGF0YXRhZyIsIm1pblJvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7QUFFUixJQUFNRSxTQUFTLEdBQUdDLDBEQUFILG1CQUFmO0FBTUEsSUFBTUMsUUFBUSxHQUFHRCwwREFBSCxvQkFBZDtBQWFBLElBQU1FLE1BQU0sR0FBR0YsMERBQUgsb0JBQVo7QUFTQSxJQUFNRyxJQUFJLEdBQUdILDBEQUFILG9CQUFWO0FBSUEsSUFBTUksVUFBVSxHQUFHSiwwREFBSCxvQkFBaEI7O0FBUUEsSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQixrQkFHaUJDLCtEQUFRLENBQUMsRUFBRCxDQUh6QjtBQUFBO0FBQUEsTUFHWEMsR0FIVztBQUFBLE1BR05DLFdBSE07QUFBQSxNQUdPQyxNQUhQOztBQUtsQixNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNyQ0MsWUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUFwQyxDQUEwQ0MsT0FBMUMsR0FBb0QsT0FBcEQ7QUFDRCxHQUYrQixFQUU3QixFQUY2QixDQUFoQztBQUdBLE1BQU1DLFdBQVcsR0FBR0wseURBQVcsQ0FBQyxZQUFNO0FBQ3BDQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQXBDLENBQTBDQyxPQUExQyxHQUFvRCxNQUFwRDtBQUNELEdBRjhCLEVBRTVCLEVBRjRCLENBQS9CO0FBSUEsTUFBTUUsYUFBYSxHQUFHTix5REFBVyxDQUMvQixVQUFDTyxDQUFELEVBQU87QUFDTCxRQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFWLElBQXFCRCxDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFuQyxFQUF3QztBQUN0Q0QsT0FBQyxDQUFDRSxjQUFGLEdBRHNDLENBRXRDOztBQUNBLFVBQUliLEdBQUcsQ0FBQ2MsSUFBSixPQUFlLEVBQW5CLEVBQXVCO0FBQ3JCakIsZ0JBQVEsQ0FBQztBQUNQa0IsY0FBSSxFQUFFQyxrRUFEQztBQUVQQyxpQkFBTyxFQUFQQTtBQUZPLFNBQUQsQ0FBUjtBQUlEOztBQUNEZixZQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0Q7QUFDRixHQWI4QixFQWMvQixDQUFDRixHQUFELENBZCtCLENBQWpDO0FBaUJBLFNBQ0U7QUFBSyxPQUFHLEVBQUVWLFNBQVY7QUFBQSxlQUNFLDhFQUFDLFFBQUQ7QUFDRSxTQUFHLEVBQUVFLFFBRFA7QUFFRSxpQkFBVyxFQUFDLHlEQUZkO0FBR0UsY0FBUSxFQUFFO0FBQUUwQixlQUFPLEVBQUU7QUFBWDtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU1FO0FBQUssU0FBRyxFQUFFekIsTUFBVjtBQUFBLGlCQUNFO0FBQUssV0FBRyxFQUFFQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQ0UsbUJBQVcsRUFBQyx5REFEZDtBQUVFLGFBQUssRUFBRU0sR0FGVDtBQUdFLGdCQUFRLEVBQUVDLFdBSFo7QUFJRSxrQkFBVSxFQUFFUyxhQUpkO0FBS0UsZUFBTyxFQUFFUCxZQUxYO0FBTUUsY0FBTSxFQUFFTTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQVVFO0FBQUssVUFBRSxFQUFDLFVBQVI7QUFBbUIsV0FBRyxFQUFFZCxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBckREOztHQUFNQyxLO1VBQ2FFLHVELEVBRWtCQyx1RDs7O0tBSC9CSCxLO0FBdURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS5lNTliZWRiNjUwYTgwMTllNTJiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfSEFTSFRBR19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IHdyaXRlUGFnZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IHRpdGxlQm94ID0gY3NzYFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICBtYXJnaW46IDAgMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0JveCA9IGNzc2BcclxuICBtYXJnaW46IDAgMTBweCAwIDIxcHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdzID0gY3NzYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuXHJcbmNvbnN0IHRhZ0luZm9Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBXcml0ZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFt0YWcsIG9uQ2hhbmdlVGFnLCBzZXRUYWddID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvbkZvY3VzSW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25CbHVySW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25LZXlQcmVzc1RhZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnLCcpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8g67mI7Lm47Jy866GcIOyeheugpe2VmOyngCDslYrslZjsnYTrlYzrp4wg7ZW07Iuc7YOc6re47JeQIOy2lOqwgFxyXG4gICAgICAgIGlmICh0YWcudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhdGFnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRhZygnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbdGFnXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17d3JpdGVQYWdlfT5cclxuICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgY3NzPXt0aXRsZUJveH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjc3M9e3RhZ0JveH0+XHJcbiAgICAgICAgPGRpdiBjc3M9e3RhZ3N9PjwvZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLtg5zqt7jrpbwg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUYWd9XHJcbiAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzVGFnfVxyXG4gICAgICAgICAgb25Gb2N1cz17b25Gb2N1c0lucHV0fVxyXG4gICAgICAgICAgb25CbHVyPXtvbkJsdXJJbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0YWctaW5mb1wiIGNzcz17dGFnSW5mb0JveH0+XHJcbiAgICAgICAgICDsibztkZwg7Zi57J2AIOyXlO2EsOulvCDsnoXroKXtlZjsl6wg7YOc6re466W8IOuTseuhne2VoCDsiJgg7J6I7Iq164uI64ukLiDrk7HroZ3rkJwg7YOc6re466W8XHJcbiAgICAgICAgICDtgbTrpq3tlZjrqbQg7IKt7KCc65Cp64uI64ukLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==