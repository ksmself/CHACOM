webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");



var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\PostCard.js",
    _this = undefined;

function _templateObject8() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: 8px;\n  color: #000;\n\n  svg {\n    margin-right: 2px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #000;\n\n  svg {\n    margin-right: 2px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 700;\n  color: #000;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 18px;\n  color: #868e96;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 18px;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: #868e96;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 22px;\n  padding: 0 20px;\n  margin-bottom: 15px;\n  overflow: hidden;\n\n  span {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 180px;\n  padding: 0 24px;\n  font-size: 20px;\n  font-weight: 700;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 15px 0;\n  margin-bottom: 40px;\n  border: 3px solid #3a18ff;\n  border-radius: 13px;\n  background-color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */





var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  var tags = post.Hashtags; // console.log(post.User.id, post.id);

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    css: card,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/post/".concat(post.id),
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          css: cardTitle,
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      css: cardTag,
      children: tags.map(function (tag) {
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
          color: "purple",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/hashtag/".concat(tag.name),
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: tag.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this)
        }, tag.id, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      css: cardDate,
      children: post.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      css: cardInfo,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/user/".concat(post.User.id),
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "by"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              css: cardInfoWriter,
              children: post.User.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          css: cardInfoLike,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartFilled"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), post.Likers.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          css: cardInfoComment,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageFilled"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), post.Comments.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = PostCard;
var card = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
var cardTitle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
var cardTag = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
var cardDate = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
var cardInfo = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5());
var cardInfoWriter = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6());
var cardInfoLike = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7());
var cardInfoComment = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8());
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ0YWdzIiwiSGFzaHRhZ3MiLCJjYXJkIiwiaWQiLCJjYXJkVGl0bGUiLCJ0aXRsZSIsImNhcmRUYWciLCJtYXAiLCJ0YWciLCJuYW1lIiwiY2FyZERhdGUiLCJkYXRlIiwiY2FyZEluZm8iLCJVc2VyIiwiY2FyZEluZm9Xcml0ZXIiLCJuaWNrbmFtZSIsImNhcmRJbmZvTGlrZSIsIkxpa2VycyIsImxlbmd0aCIsImNhcmRJbmZvQ29tbWVudCIsIkNvbW1lbnRzIiwiY3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QixNQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsUUFBbEIsQ0FENkIsQ0FHN0I7O0FBRUEsU0FDRTtBQUFLLE9BQUcsRUFBRUMsSUFBVjtBQUFBLGVBQ0UsOEVBQUMsZ0RBQUQ7QUFBTSxVQUFJLGtCQUFXSCxJQUFJLENBQUNJLEVBQWhCLENBQVY7QUFBQSxnQkFDRTtBQUFBLGtCQUNFO0FBQUssYUFBRyxFQUFFQyxTQUFWO0FBQUEsb0JBQXNCTCxJQUFJLENBQUNNO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUU7QUFBSyxTQUFHLEVBQUVDLE9BQVY7QUFBQSxnQkFDR04sSUFBSSxDQUFDTyxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCLGVBQ0UsOEVBQUMsd0NBQUQ7QUFBa0IsZUFBSyxFQUFDLFFBQXhCO0FBQUEsb0JBQ0UsOEVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxxQkFBY0EsR0FBRyxDQUFDQyxJQUFsQixDQUFWO0FBQUEsc0JBQ0U7QUFBQSx3QkFBSUQsR0FBRyxDQUFDQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBVUQsR0FBRyxDQUFDTCxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPRCxPQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLEVBaUJFO0FBQUssU0FBRyxFQUFFTyxRQUFWO0FBQUEsZ0JBQXFCWCxJQUFJLENBQUNZO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkYsRUFrQkU7QUFBSyxTQUFHLEVBQUVDLFFBQVY7QUFBQSxpQkFDRSw4RUFBQyxnREFBRDtBQUFNLFlBQUksa0JBQVdiLElBQUksQ0FBQ2MsSUFBTCxDQUFVVixFQUFyQixDQUFWO0FBQUEsa0JBQ0U7QUFBQSxvQkFDRTtBQUFBLHVCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBTSxpQkFBRyxFQUFFVyxjQUFYO0FBQUEsd0JBQTRCZixJQUFJLENBQUNjLElBQUwsQ0FBVUU7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBU0U7QUFBQSxtQkFDRTtBQUFNLGFBQUcsRUFBRUMsWUFBWDtBQUFBLHFCQUNFLDhFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR2pCLElBQUksQ0FBQ2tCLE1BQUwsQ0FBWUMsTUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFLRTtBQUFNLGFBQUcsRUFBRUMsZUFBWDtBQUFBLHFCQUNFLDhFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR3BCLElBQUksQ0FBQ3FCLFFBQUwsQ0FBY0YsTUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQTlDRDs7S0FBTXBCLFE7QUFnRE4sSUFBTUksSUFBSSxHQUFHbUIsMERBQUgsbUJBQVY7QUFRQSxJQUFNakIsU0FBUyxHQUFHaUIsMERBQUgsb0JBQWY7QUFVQSxJQUFNZixPQUFPLEdBQUdlLDBEQUFILG9CQUFiO0FBYUEsSUFBTVgsUUFBUSxHQUFHVywwREFBSCxvQkFBZDtBQVNBLElBQU1ULFFBQVEsR0FBR1MsMERBQUgsb0JBQWQ7QUFRQSxJQUFNUCxjQUFjLEdBQUdPLDBEQUFILG9CQUFwQjtBQU9BLElBQU1MLFlBQVksR0FBR0ssMERBQUgsb0JBQWxCO0FBUUEsSUFBTUYsZUFBZSxHQUFHRSwwREFBSCxvQkFBckI7QUFTZXZCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkzMTg1ZDY1Yzg3YjZhZDhjZDk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgTWVzc2FnZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgdGFncyA9IHBvc3QuSGFzaHRhZ3M7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHBvc3QuVXNlci5pZCwgcG9zdC5pZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17Y2FyZH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Y2FyZFRpdGxlfT57cG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjc3M9e2NhcmRUYWd9PlxyXG4gICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnLmlkfSBjb2xvcj1cInB1cnBsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3RhZy5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e3RhZy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY3NzPXtjYXJkRGF0ZX0+e3Bvc3QuZGF0ZX08L2Rpdj5cclxuICAgICAgPGRpdiBjc3M9e2NhcmRJbmZvfT5cclxuICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5ieTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjc3M9e2NhcmRJbmZvV3JpdGVyfT57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjc3M9e2NhcmRJbmZvTGlrZX0+XHJcbiAgICAgICAgICAgIDxIZWFydEZpbGxlZCAvPlxyXG4gICAgICAgICAgICB7cG9zdC5MaWtlcnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY3NzPXtjYXJkSW5mb0NvbW1lbnR9PlxyXG4gICAgICAgICAgICA8TWVzc2FnZUZpbGxlZCAvPlxyXG4gICAgICAgICAgICB7cG9zdC5Db21tZW50cy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGNhcmQgPSBjc3NgXHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzNhMThmZjtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkVGl0bGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5gO1xyXG5cclxuY29uc3QgY2FyZFRhZyA9IGNzc2BcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNhcmREYXRlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuYDtcclxuXHJcbmNvbnN0IGNhcmRJbmZvID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAxOHB4O1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG5gO1xyXG5cclxuY29uc3QgY2FyZEluZm9Xcml0ZXIgPSBjc3NgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzAwMDtcclxuYDtcclxuXHJcbmNvbnN0IGNhcmRJbmZvTGlrZSA9IGNzc2BcclxuICBjb2xvcjogIzAwMDtcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNhcmRJbmZvQ29tbWVudCA9IGNzc2BcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=