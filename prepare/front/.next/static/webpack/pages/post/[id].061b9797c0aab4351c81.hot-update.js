webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/CommentList.js":
/*!***********************************!*\
  !*** ./components/CommentList.js ***!
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
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _ConvertPopUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConvertPopUp */ "./components/ConvertPopUp.js");
/* harmony import */ var _pages_write__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/write */ "./pages/write.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\CommentList.js",
    _this = undefined;

function _templateObject11() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 5px 8px;\n\n  textarea {\n    border-color: #18ddff;\n\n    &:focus {\n      border-color: #18ddff;\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  button {\n    padding: 4px 6px;\n    font-weight: 700;\n    border: none;\n    color: #00adcb;\n\n    &:hover {\n      color: #00adcb;\n      border: none;\n      cursor: pointer;\n    }\n\n    &:focus {\n      color: #00adcb;\n      border: none;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  button {\n    padding: 4px 6px;\n    font-weight: 700;\n    border: none;\n    color: #3a18ff;\n\n    &:hover {\n      color: #3a18ff;\n      border: none;\n      cursor: pointer;\n    }\n\n    &:focus {\n      color: #3a18ff;\n      border: none;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 100%;\n  height: 1px;\n  margin-top: 15px;\n  background-color: #d9d9d9;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-bottom: 8px;\n  font-size: 17px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: #646a70;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-right: 3px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-right: 3px;\n  font-weight: 700;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  margin-bottom: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 10px 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-bottom: 25px;\n  padding: 15px 5px 5px;\n  border: 1px solid #755eff;\n  border-radius: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */










dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.locale('ko');
var TextArea = antd__WEBPACK_IMPORTED_MODULE_7__["Input"].TextArea;
var commentBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var commentItem = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var commentInfo = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var commentInfoWriter = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var commentInfoBullet = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
var commentInfoDate = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6());
var commentContent = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject7());
var divideLine = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject8());
var replyPlusBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject9());
var replyMinusBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject10());
var commentFormBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject11());

var CommentList = function CommentList(_ref) {
  var _s = $RefreshSig$();

  var comments = _ref.comments;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    css: commentBox,
    children: comments.map(_s(function (comment, index) {
      _s();

      var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
          plusIcon = _useState[0],
          setPlusIcon = _useState[1];

      var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
          commentFormOpened = _useState2[0],
          setCommentFormOpened = _useState2[1];

      var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_12__["default"])(''),
          _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 3),
          commentValue = _useInput2[0],
          onChangeCommentValue = _useInput2[1],
          setCommentValue = _useInput2[2];

      var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('답글 달기'),
          replyBtnText = _useState3[0],
          setReplyBtnText = _useState3[1];

      var onClickReply = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
        setCommentFormOpened(function (prev) {
          return !prev;
        });
        setPlusIcon(function (prev) {
          return !prev;
        });

        if (replyBtnText === '답글 달기') {
          setReplyBtnText('숨기기');
        } else {
          setReplyBtnText('답글 달기');
          setCommentValue('');
        }
      }, [replyBtnText]);
      var onClickCancel = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
        setPlusIcon(true);
        setReplyBtnText('답글 달기');
        setCommentValue('');
        setCommentFormOpened(function (prev) {
          return !prev;
        });
      }, []);
      var onClickSubmit = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {}, []);
      var day;
      var secondPassed = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt), 'seconds');
      var minutedPassed = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt), 'minutes');
      var hourPassed = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt), 'hours');
      var dayPassed = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt), 'days');
      if (secondPassed < 60) day = '방금 전';else if (minutedPassed < 60) day = minutedPassed + '분 전';else if (hourPassed < 24) day = hourPassed + '시간 전';else if (dayPassed <= 7) day = dayPassed + '일 전';else day = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(singlePost.createdAt).format('YYYY년 MM월 DD일');
      return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        css: commentItem,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: commentInfo,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: commentInfoWriter,
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: "/user/".concat(comment.UserId),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: comment.User.nickname
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: commentInfoBullet,
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: commentInfoDate,
            children: day
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: commentContent,
          children: comment.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: plusIcon ? replyPlusBtn : replyMinusBtn,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            icon: plusIcon ? Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["PlusCircleOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 30
            }, _this) : Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MinusCircleOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 55
            }, _this),
            onClick: onClickReply,
            children: replyBtnText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, _this), commentFormOpened && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: commentFormBox,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
            css: _CommentForm__WEBPACK_IMPORTED_MODULE_9__["commentInput"],
            value: commentValue,
            onChange: onChangeCommentValue,
            placeholder: "\uB313\uAE00\uC744 \uC791\uC131\uD558\uC138\uC694",
            autoSize: {
              minRows: 2
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 17
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: _pages_write__WEBPACK_IMPORTED_MODULE_11__["convertBox"],
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ConvertPopUp__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 17
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: _CommentForm__WEBPACK_IMPORTED_MODULE_9__["buttonGroup"],
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              css: _CommentForm__WEBPACK_IMPORTED_MODULE_9__["cancelButton"],
              onClick: onClickCancel,
              children: "\uCDE8\uC18C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 19
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              css: _CommentForm__WEBPACK_IMPORTED_MODULE_9__["submitButton"],
              onClick: onClickSubmit,
              children: "\uB313\uAE00 \uC791\uC131"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 15
        }, _this), comments.length > 1 && index < comments.length - 1 && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: divideLine
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }, _this)]
      }, comment.id, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }, _this);
    }, "OjoR103xWe+/ZeqHwgjkfJ0aEOQ=", false, function () {
      return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_12__["default"]];
    }))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, _this);
};

_c = CommentList;
/* harmony default export */ __webpack_exports__["default"] = (CommentList);

var _c;

$RefreshReg$(_c, "CommentList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJkYXlqcyIsImxvY2FsZSIsIlRleHRBcmVhIiwiSW5wdXQiLCJjb21tZW50Qm94IiwiY3NzIiwiY29tbWVudEl0ZW0iLCJjb21tZW50SW5mbyIsImNvbW1lbnRJbmZvV3JpdGVyIiwiY29tbWVudEluZm9CdWxsZXQiLCJjb21tZW50SW5mb0RhdGUiLCJjb21tZW50Q29udGVudCIsImRpdmlkZUxpbmUiLCJyZXBseVBsdXNCdG4iLCJyZXBseU1pbnVzQnRuIiwiY29tbWVudEZvcm1Cb3giLCJDb21tZW50TGlzdCIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsImluZGV4IiwidXNlU3RhdGUiLCJwbHVzSWNvbiIsInNldFBsdXNJY29uIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsInVzZUlucHV0IiwiY29tbWVudFZhbHVlIiwib25DaGFuZ2VDb21tZW50VmFsdWUiLCJzZXRDb21tZW50VmFsdWUiLCJyZXBseUJ0blRleHQiLCJzZXRSZXBseUJ0blRleHQiLCJvbkNsaWNrUmVwbHkiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvbkNsaWNrQ2FuY2VsIiwib25DbGlja1N1Ym1pdCIsImRheSIsInNlY29uZFBhc3NlZCIsImRpZmYiLCJjcmVhdGVkQXQiLCJtaW51dGVkUGFzc2VkIiwiaG91clBhc3NlZCIsImRheVBhc3NlZCIsInNpbmdsZVBvc3QiLCJmb3JtYXQiLCJVc2VySWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiY29tbWVudElucHV0IiwibWluUm93cyIsImNvbnZlcnRCb3giLCJidXR0b25Hcm91cCIsImNhbmNlbEJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsImxlbmd0aCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SyxlQUFHLEVBQUVDLHdEQUFWO0FBQUEsdUJBQ0U7QUFBUSxpQkFBRyxFQUFFQyx5REFBYjtBQUEyQixxQkFBTyxFQUFFbkIsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFJRTtBQUFRLGlCQUFHLEVBQUVvQix5REFBYjtBQUEyQixxQkFBTyxFQUFFbkIsYUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkosRUEyQ0duQixRQUFRLENBQUN1QyxNQUFULEdBQWtCLENBQWxCLElBQXVCcEMsS0FBSyxHQUFHSCxRQUFRLENBQUN1QyxNQUFULEdBQWtCLENBQWpELElBQ0M7QUFBSyxhQUFHLEVBQUU1QztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUNKO0FBQUEsU0FBMkJPLE9BQU8sQ0FBQ3NDLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlERCxLQXhGQTtBQUFBLGNBSUcvQix3REFKSDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkZELENBOUZEOztLQUFNVixXO0FBZ0dTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uMDYxYjk3OTdjMGFhYjQzNTFjODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUGx1c0NpcmNsZU91dGxpbmVkLCBNaW51c0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjb21tZW50SW5wdXQsXHJcbiAgYnV0dG9uR3JvdXAsXHJcbiAgY2FuY2VsQnV0dG9uLFxyXG4gIHN1Ym1pdEJ1dHRvbixcclxufSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IENvbnZlcnRQb3BVcCBmcm9tICcuL0NvbnZlcnRQb3BVcCc7XHJcbmltcG9ydCB7IGNvbnZlcnRCb3ggfSBmcm9tICcuLi9wYWdlcy93cml0ZSc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5kYXlqcy5sb2NhbGUoJ2tvJyk7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IGNvbW1lbnRCb3ggPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBwYWRkaW5nOiAxNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1NWVmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEl0ZW0gPSBjc3NgXHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEluZm8gPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBjb21tZW50SW5mb1dyaXRlciA9IGNzc2BcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEluZm9CdWxsZXQgPSBjc3NgXHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbmA7XHJcblxyXG5jb25zdCBjb21tZW50SW5mb0RhdGUgPSBjc3NgXHJcbiAgY29sb3I6ICM2NDZhNzA7XHJcbmA7XHJcblxyXG5jb25zdCBjb21tZW50Q29udGVudCA9IGNzc2BcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgZGl2aWRlTGluZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbmA7XHJcblxyXG5jb25zdCByZXBseVBsdXNCdG4gPSBjc3NgXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCByZXBseU1pbnVzQnRuID0gY3NzYFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDBhZGNiO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzAwYWRjYjtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjMDBhZGNiO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEZvcm1Cb3ggPSBjc3NgXHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMThkZGZmO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMxOGRkZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudExpc3QgPSAoeyBjb21tZW50cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjc3M9e2NvbW1lbnRCb3h9PlxyXG4gICAgICB7Y29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtwbHVzSWNvbiwgc2V0UGx1c0ljb25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgW2NvbW1lbnRWYWx1ZSwgb25DaGFuZ2VDb21tZW50VmFsdWUsIHNldENvbW1lbnRWYWx1ZV0gPVxyXG4gICAgICAgICAgdXNlSW5wdXQoJycpO1xyXG5cclxuICAgICAgICBjb25zdCBbcmVwbHlCdG5UZXh0LCBzZXRSZXBseUJ0blRleHRdID0gdXNlU3RhdGUoJ+uLteq4gCDri6zquLAnKTtcclxuICAgICAgICBjb25zdCBvbkNsaWNrUmVwbHkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgICAgICAgc2V0UGx1c0ljb24oKHByZXYpID0+ICFwcmV2KTtcclxuICAgICAgICAgIGlmIChyZXBseUJ0blRleHQgPT09ICfri7XquIAg64us6riwJykge1xyXG4gICAgICAgICAgICBzZXRSZXBseUJ0blRleHQoJ+yIqOq4sOq4sCcpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UmVwbHlCdG5UZXh0KCfri7XquIAg64us6riwJyk7XHJcbiAgICAgICAgICAgIHNldENvbW1lbnRWYWx1ZSgnJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3JlcGx5QnRuVGV4dF0pO1xyXG5cclxuICAgICAgICBjb25zdCBvbkNsaWNrQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgc2V0UGx1c0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICBzZXRSZXBseUJ0blRleHQoJ+uLteq4gCDri6zquLAnKTtcclxuICAgICAgICAgIHNldENvbW1lbnRWYWx1ZSgnJyk7XHJcbiAgICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb25DbGlja1N1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbXSk7XHJcblxyXG4gICAgICAgIGxldCBkYXk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kUGFzc2VkID0gZGF5anMoKS5kaWZmKGRheWpzKGNvbW1lbnQuY3JlYXRlZEF0KSwgJ3NlY29uZHMnKTtcclxuICAgICAgICBjb25zdCBtaW51dGVkUGFzc2VkID0gZGF5anMoKS5kaWZmKGRheWpzKGNvbW1lbnQuY3JlYXRlZEF0KSwgJ21pbnV0ZXMnKTtcclxuICAgICAgICBjb25zdCBob3VyUGFzc2VkID0gZGF5anMoKS5kaWZmKGRheWpzKGNvbW1lbnQuY3JlYXRlZEF0KSwgJ2hvdXJzJyk7XHJcbiAgICAgICAgY29uc3QgZGF5UGFzc2VkID0gZGF5anMoKS5kaWZmKGRheWpzKGNvbW1lbnQuY3JlYXRlZEF0KSwgJ2RheXMnKTtcclxuXHJcbiAgICAgICAgaWYgKHNlY29uZFBhc3NlZCA8IDYwKSBkYXkgPSAn67Cp6riIIOyghCc7XHJcbiAgICAgICAgZWxzZSBpZiAobWludXRlZFBhc3NlZCA8IDYwKSBkYXkgPSBtaW51dGVkUGFzc2VkICsgJ+u2hCDsoIQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGhvdXJQYXNzZWQgPCAyNCkgZGF5ID0gaG91clBhc3NlZCArICfsi5zqsIQg7KCEJztcclxuICAgICAgICBlbHNlIGlmIChkYXlQYXNzZWQgPD0gNykgZGF5ID0gZGF5UGFzc2VkICsgJ+ydvCDsoIQnO1xyXG4gICAgICAgIGVsc2UgZGF5ID0gZGF5anMoc2luZ2xlUG9zdC5jcmVhdGVkQXQpLmZvcm1hdCgnWVlZWeuFhCBNTeyblCBEROydvCcpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGxpIGNzcz17Y29tbWVudEl0ZW19IGtleT17Y29tbWVudC5pZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtjb21tZW50SW5mb30+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtjb21tZW50SW5mb1dyaXRlcn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtjb21tZW50LlVzZXJJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e2NvbW1lbnQuVXNlci5uaWNrbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNzcz17Y29tbWVudEluZm9CdWxsZXR9PsK3PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNzcz17Y29tbWVudEluZm9EYXRlfT57ZGF5fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtjb21tZW50Q29udGVudH0+e2NvbW1lbnQuY29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e3BsdXNJY29uID8gcmVwbHlQbHVzQnRuIDogcmVwbHlNaW51c0J0bn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgICAgIHBsdXNJY29uID8gPFBsdXNDaXJjbGVPdXRsaW5lZCAvPiA6IDxNaW51c0NpcmNsZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrUmVwbHl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3JlcGx5QnRuVGV4dH1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjc3M9e2NvbW1lbnRGb3JtQm94fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICBjc3M9e2NvbW1lbnRJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuMk+q4gOydhCDsnpHshLHtlZjshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAyIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjc3M9e2NvbnZlcnRCb3h9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29udmVydFBvcFVwIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtidXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY3NzPXtjYW5jZWxCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tDYW5jZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIOy3qOyGjFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjc3M9e3N1Ym1pdEJ1dHRvbn0gb25DbGljaz17b25DbGlja1N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAg64yT6riAIOyekeyEsVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMSAmJiBpbmRleCA8IGNvbW1lbnRzLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtkaXZpZGVMaW5lfT48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==