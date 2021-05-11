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
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["ADD_HASHTAG_REQUEST"],
          data: tag
        });
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
      lineNumber: 107,
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
            lineNumber: 115,
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
          lineNumber: 117,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "tag-info",
        css: tagInfoBox,
        children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsInRpdGxlQm94IiwidGFnQm94IiwidGFncyIsInRhZ0luZm9Cb3giLCJXcml0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImN1cnJlbnRIYXNodGFncyIsInVzZUlucHV0IiwidGFnIiwib25DaGFuZ2VUYWciLCJzZXRUYWciLCJvbkZvY3VzSW5wdXQiLCJ1c2VDYWxsYmFjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkJsdXJJbnB1dCIsIm9uS2V5UHJlc3NUYWciLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwidHlwZSIsIkFERF9IQVNIVEFHX1JFUVVFU1QiLCJkYXRhIiwib25DbGlja1RhZyIsImluZGV4IiwiUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCIsIm1pblJvd3MiLCJtYXAiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7SUFFUUEsUSxHQUFhQywwQyxDQUFiRCxRO0FBRVIsSUFBTUUsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtBQU1BLElBQU1DLFFBQVEsR0FBR0QsMERBQUgsb0JBQWQ7QUFhQSxJQUFNRSxNQUFNLEdBQUdGLDBEQUFILG9CQUFaO0FBSUEsSUFBTUcsSUFBSSxHQUFHSCwwREFBSCxvQkFBVjtBQXdCQSxJQUFNSSxVQUFVLEdBQUdKLDBEQUFILG9CQUFoQjs7QUFTQSxJQUFNSyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RB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SSx1RDs7O0tBSi9CUCxLO0FBbUVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS5iNDZhNjgyYjVlMjE0ZmVhYmM3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQUREX0hBU0hUQUdfUkVRVUVTVCwgUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCB3cml0ZVBhZ2UgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCB0aXRsZUJveCA9IGNzc2BcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgbWFyZ2luOiAwIDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdCb3ggPSBjc3NgXHJcbiAgbWFyZ2luOiAwIDEwcHggMCAyMXB4O1xyXG5gO1xyXG5cclxuY29uc3QgdGFncyA9IGNzc2BcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNhZGY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM1MzFkYWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMGZmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdGFnSW5mb0JveCA9IGNzc2BcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTE4ZmY7XHJcbmA7XHJcblxyXG5jb25zdCBXcml0ZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjdXJyZW50SGFzaHRhZ3MgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFt0YWcsIG9uQ2hhbmdlVGFnLCBzZXRUYWddID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvbkZvY3VzSW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25CbHVySW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25LZXlQcmVzc1RhZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnLCcpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8g67mI7Lm47Jy866GcIOyeheugpe2VmOyngCDslYrslZjsnYTrlYzrp4wg7ZW07Iuc7YOc6re47JeQIOy2lOqwgFxyXG4gICAgICAgIGlmICh0YWcudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB0YWcsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGFnKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt0YWddXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1RhZyA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICA8VGV4dEFyZWFcclxuICAgICAgICBjc3M9e3RpdGxlQm94fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNzcz17dGFnQm94fT5cclxuICAgICAgICA8ZGl2IGNzcz17dGFnc30+XHJcbiAgICAgICAgICB7Y3VycmVudEhhc2h0YWdzLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DbGlja1RhZyhpbmRleCl9Pnt2fTwvYnV0dG9uPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7YOc6re466W8IOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRhZ31cclxuICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc1RhZ31cclxuICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c0lucHV0fVxyXG4gICAgICAgICAgICBvbkJsdXI9e29uQmx1cklucHV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwidGFnLWluZm9cIiBjc3M9e3RhZ0luZm9Cb3h9PlxyXG4gICAgICAgICAg7Im87ZGcIO2YueydgCDsl5TthLDrpbwg7J6F66Cl7ZWY7JesIO2DnOq3uOulvCDrk7HroZ3tlaAg7IiYIOyeiOyKteuLiOuLpC4g65Ox66Gd65CcIO2DnOq3uOulvFxyXG4gICAgICAgICAg7YG066at7ZWY66m0IOyCreygnOuQqeuLiOuLpC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=