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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: none;\n  width: 220px;\n  padding: 5px;\n  font-size: 13px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  align-items: center;\n  flex-wrap: nowrap;\n\n  button {\n    margin-right: 5px;\n    margin-bottom: 5px;\n    font-size: 14px;\n    border: 1px solid #d3adf7;\n    border-radius: 2px;\n    color: #531dab;\n    background-color: #f9f0ff;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  input {\n    font-size: 14px;\n    border: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin: 0 10px 0 21px;\n"]);

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

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.post;
  }),
      currentHashtags = _useSelector.currentHashtags;

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
        // 이미 있는 해시태그가 아니라면
        if (!currentHashtags.includes(tag)) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_HASHTAG_REQUEST"],
            data: tag
          });
        }
      }

      setTag('');
    }
  }, [tag]);
  var onClickTag = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (index) {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_HASHTAG_REQUEST"],
      data: index
    });
  }, []);
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
      lineNumber: 110,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: tagBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: tags,
        children: [currentHashtags.map(function (v, index) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick() {
              return onClickTag(index);
            },
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 20
          }, _this);
        }), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
          value: tag,
          onChange: onChangeTag,
          onKeyPress: onKeyPressTag,
          onFocus: onFocusInput,
          onBlur: onBlurInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "tag-info",
        css: tagInfoBox,
        children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 5
  }, _this);
};

_s(Write, "9PzSbkEbAUL16KKfGo/MxCAf23Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsInRpdGxlQm94IiwidGFnQm94IiwidGFncyIsInRhZ0luZm9Cb3giLCJXcml0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImN1cnJlbnRIYXNodGFncyIsInVzZUlucHV0IiwidGFnIiwib25DaGFuZ2VUYWciLCJzZXRUYWciLCJvbkZvY3VzSW5wdXQiLCJ1c2VDYWxsYmFjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkJsdXJJbnB1dCIsIm9uS2V5UHJlc3NUYWciLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiaW5jbHVkZXMiLCJ0eXBlIiwiQUREX0hBU0hUQUdfUkVRVUVTVCIsImRhdGEiLCJvbkNsaWNrVGFnIiwiaW5kZXgiLCJSRU1PVkVfSEFTSFRBR19SRVFVRVNUIiwibWluUm93cyIsIm1hcCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7QUFFUixJQUFNRSxTQUFTLEdBQUdDLDBEQUFILG1CQUFmO0FBTUEsSUFBTUMsUUFBUSxHQUFHRCwwREFBSCxvQkFBZDtBQWFBLElBQU1FLE1BQU0sR0FBR0YsMERBQUgsb0JBQVo7QUFJQSxJQUFNRyxJQUFJLEdBQUdILDBEQUFILG9CQUFWO0FBd0JBLElBQU1JLFVBQVUsR0FBR0osMERBQUgsb0JBQWhCOztBQVNBLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFB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QUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBcEVEOztHQUFNQyxLO1VBQ2FFLHVELEVBQ1dDLHVELEVBRU9JLHVEOzs7S0FKL0JQLEs7QUFzRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dyaXRlLmQzZWM5NjBmM2Q4NjY1NTZjZGFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfSEFTSFRBR19SRVFVRVNULCBSRU1PVkVfSEFTSFRBR19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IHdyaXRlUGFnZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IHRpdGxlQm94ID0gY3NzYFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICBtYXJnaW46IDAgMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0JveCA9IGNzc2BcclxuICBtYXJnaW46IDAgMTBweCAwIDIxcHg7XHJcbmA7XHJcblxyXG5jb25zdCB0YWdzID0gY3NzYFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2FkZjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzUzMWRhYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWYwZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdJbmZvQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuYDtcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGN1cnJlbnRIYXNodGFncyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgW3RhZywgb25DaGFuZ2VUYWcsIHNldFRhZ10gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uRm9jdXNJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkJsdXJJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbktleVByZXNzVGFnID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcsJykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyDruYjsubjsnLzroZwg7J6F66Cl7ZWY7KeAIOyViuyVmOydhOuVjOunjCDtlbTsi5ztg5zqt7jsl5Ag7LaU6rCAXHJcbiAgICAgICAgaWYgKHRhZy50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAvLyDsnbTrr7gg7J6I64qUIO2VtOyLnO2DnOq3uOqwgCDslYTri4jrnbzrqbRcclxuICAgICAgICAgIGlmICghY3VycmVudEhhc2h0YWdzLmluY2x1ZGVzKHRhZykpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgZGF0YTogdGFnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGFnKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt0YWddXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1RhZyA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICBjc3M9e3RpdGxlQm94fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNzcz17dGFnQm94fT5cclxuICAgICAgICA8ZGl2IGNzcz17dGFnc30+XHJcbiAgICAgICAgICB7Y3VycmVudEhhc2h0YWdzLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGlja1RhZyhpbmRleCl9Pnt2fTwvYnV0dG9uPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7YOc6re466W8IOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRhZ31cclxuICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc1RhZ31cclxuICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c0lucHV0fVxyXG4gICAgICAgICAgICBvbkJsdXI9e29uQmx1cklucHV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwidGFnLWluZm9cIiBjc3M9e3RhZ0luZm9Cb3h9PlxyXG4gICAgICAgICAg7Im87ZGcIO2YueydgCDsl5TthLDrpbwg7J6F66Cl7ZWY7JesIO2DnOq3uOulvCDrk7HroZ3tlaAg7IiYIOyeiOyKteuLiOuLpC4g65Ox66Gd65CcIO2DnOq3uOulvFxyXG4gICAgICAgICAg7YG066at7ZWY66m0IOyCreygnOuQqeuLiOuLpC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=