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
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\CommentList.js",
    _this = undefined;

function _templateObject9() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-bottom: 10px;\n\n  button {\n    padding: 4px 6px;\n    font-weight: 700;\n    border: none;\n    color: #3a18ff;\n\n    &:hover {\n      color: #3a18ff;\n      border: none;\n      cursor: pointer;\n    }\n\n    &:focus {\n      color: #3a18ff;\n      border: none;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 100%;\n  height: 1px;\n  background-color: #d9d9d9;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-bottom: 8px;\n  font-size: 17px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: #646a70;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-right: 3px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-right: 3px;\n  font-weight: 700;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: flex;\n  margin-bottom: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding: 10px 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-bottom: 25px;\n  padding: 15px 5px 0;\n  border: 1px solid #755eff;\n  border-radius: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */






dayjs__WEBPACK_IMPORTED_MODULE_4___default.a.locale('ko');
var commentBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
var commentItem = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
var commentInfo = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
var commentInfoWriter = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
var commentInfoBullet = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5());
var commentInfoDate = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6());
var commentContent = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7());
var divideLine = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8());
var replyBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject9());

var CommentList = function CommentList(_ref) {
  var comments = _ref.comments;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    css: commentBox,
    children: comments.map(function (comment, index) {
      var day;
      var secondPassed = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt), 'seconds');
      var minutedPassed = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt), 'minutes');
      var hourPassed = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt), 'hours');
      var dayPassed = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_4___default()(comment.createdAt), 'days');
      if (secondPassed < 60) day = '방금 전';else if (minutedPassed < 60) day = minutedPassed + '분 전';else if (hourPassed < 24) day = hourPassed + '시간 전';else if (dayPassed <= 7) day = dayPassed + '일 전';else day = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(singlePost.createdAt).format('YYYY년 MM월 DD일');
      return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        css: commentItem,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: commentInfo,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: commentInfoWriter,
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/user/".concat(comment.UserId),
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: comment.User.nickname
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: commentInfoBullet,
            children: "\xB7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            css: commentInfoDate,
            children: day
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: commentContent,
          children: comment.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: replyBtn,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["PlusCircleOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, _this),
            children: "\uB2F5\uAE00 \uB2EC\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, _this), comments.length > 1 && index < comments.length - 1 && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: divideLine
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }, _this)]
      }, comment.id, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC5qcyJdLCJuYW1lcyI6WyJkYXlqcyIsImxvY2FsZSIsImNvbW1lbnRCb3giLCJjc3MiLCJjb21tZW50SXRlbSIsImNvbW1lbnRJbmZvIiwiY29tbWVudEluZm9Xcml0ZXIiLCJjb21tZW50SW5mb0J1bGxldCIsImNvbW1lbnRJbmZvRGF0ZSIsImNvbW1lbnRDb250ZW50IiwiZGl2aWRlTGluZSIsInJlcGx5QnRuIiwiQ29tbWVudExpc3QiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsImRheSIsInNlY29uZFBhc3NlZCIsImRpZmYiLCJjcmVhdGVkQXQiLCJtaW51dGVkUGFzc2VkIiwiaG91clBhc3NlZCIsImRheVBhc3NlZCIsInNpbmdsZVBvc3QiLCJmb3JtYXQiLCJVc2VySWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwibGVuZ3RoIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYjtBQUVBLElBQU1DLFVBQVUsR0FBR0MsMERBQUgsbUJBQWhCO0FBT0EsSUFBTUMsV0FBVyxHQUFHRCwwREFBSCxvQkFBakI7QUFJQSxJQUFNRSxXQUFXLEdBQUdGLDBEQUFILG9CQUFqQjtBQUtBLElBQU1HLGlCQUFpQixHQUFHSCwwREFBSCxvQkFBdkI7QUFLQSxJQUFNSSxpQkFBaUIsR0FBR0osMERBQUgsb0JBQXZCO0FBSUEsSUFBTUssZUFBZSxHQUFHTCwwREFBSCxvQkFBckI7QUFJQSxJQUFNTSxjQUFjLEdBQUdOLDBEQUFILG9CQUFwQjtBQUtBLElB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QUFBQSxpQkFmSjtBQUFBLFNBQTJCSyxPQUFPLENBQUNnQixFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsS0FqQ0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0F2Q0Q7O0tBQU1uQixXO0FBeUNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uMjZhOWNjNjRmNTY4YzVmZWNhZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUGx1c0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuZGF5anMubG9jYWxlKCdrbycpO1xyXG5cclxuY29uc3QgY29tbWVudEJveCA9IGNzc2BcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHggNXB4IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzc1NWVmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEl0ZW0gPSBjc3NgXHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEluZm8gPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBjb21tZW50SW5mb1dyaXRlciA9IGNzc2BcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5cclxuY29uc3QgY29tbWVudEluZm9CdWxsZXQgPSBjc3NgXHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbmA7XHJcblxyXG5jb25zdCBjb21tZW50SW5mb0RhdGUgPSBjc3NgXHJcbiAgY29sb3I6ICM2NDZhNzA7XHJcbmA7XHJcblxyXG5jb25zdCBjb21tZW50Q29udGVudCA9IGNzc2BcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgZGl2aWRlTGluZSA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xyXG5gO1xyXG5cclxuY29uc3QgcmVwbHlCdG4gPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDRweCA2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50TGlzdCA9ICh7IGNvbW1lbnRzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNzcz17Y29tbWVudEJveH0+XHJcbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IGRheTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQYXNzZWQgPSBkYXlqcygpLmRpZmYoZGF5anMoY29tbWVudC5jcmVhdGVkQXQpLCAnc2Vjb25kcycpO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZWRQYXNzZWQgPSBkYXlqcygpLmRpZmYoZGF5anMoY29tbWVudC5jcmVhdGVkQXQpLCAnbWludXRlcycpO1xyXG4gICAgICAgIGNvbnN0IGhvdXJQYXNzZWQgPSBkYXlqcygpLmRpZmYoZGF5anMoY29tbWVudC5jcmVhdGVkQXQpLCAnaG91cnMnKTtcclxuICAgICAgICBjb25zdCBkYXlQYXNzZWQgPSBkYXlqcygpLmRpZmYoZGF5anMoY29tbWVudC5jcmVhdGVkQXQpLCAnZGF5cycpO1xyXG5cclxuICAgICAgICBpZiAoc2Vjb25kUGFzc2VkIDwgNjApIGRheSA9ICfrsKnquIgg7KCEJztcclxuICAgICAgICBlbHNlIGlmIChtaW51dGVkUGFzc2VkIDwgNjApIGRheSA9IG1pbnV0ZWRQYXNzZWQgKyAn67aEIOyghCc7XHJcbiAgICAgICAgZWxzZSBpZiAoaG91clBhc3NlZCA8IDI0KSBkYXkgPSBob3VyUGFzc2VkICsgJ+yLnOqwhCDsoIQnO1xyXG4gICAgICAgIGVsc2UgaWYgKGRheVBhc3NlZCA8PSA3KSBkYXkgPSBkYXlQYXNzZWQgKyAn7J28IOyghCc7XHJcbiAgICAgICAgZWxzZSBkYXkgPSBkYXlqcyhzaW5nbGVQb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdZWVlZ64WEIE1N7JuUIERE7J28Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8bGkgY3NzPXtjb21tZW50SXRlbX0ga2V5PXtjb21tZW50LmlkfT5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2NvbW1lbnRJbmZvfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjc3M9e2NvbW1lbnRJbmZvV3JpdGVyfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke2NvbW1lbnQuVXNlcklkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57Y29tbWVudC5Vc2VyLm5pY2tuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtjb21tZW50SW5mb0J1bGxldH0+wrc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtjb21tZW50SW5mb0RhdGV9PntkYXl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2NvbW1lbnRDb250ZW50fT57Y29tbWVudC5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17cmVwbHlCdG59PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFBsdXNDaXJjbGVPdXRsaW5lZCAvPn0+64u16riAIOuLrOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDEgJiYgaW5kZXggPCBjb21tZW50cy5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17ZGl2aWRlTGluZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=