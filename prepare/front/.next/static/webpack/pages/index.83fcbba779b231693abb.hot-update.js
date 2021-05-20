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
  var tags = post.Hashtags;
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
          lineNumber: 14,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      css: cardTag,
      children: tags.map(function (tag) {
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
          color: "purple",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/hashtag/".concat(tag),
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: tag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this)
        }, tag.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      css: cardDate,
      children: post.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
              lineNumber: 33,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              css: cardInfoWriter,
              children: post.User.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          css: cardInfoLike,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartFilled"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), post.like]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          css: cardInfoComment,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageFilled"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), post.comment]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ0YWdzIiwiSGFzaHRhZ3MiLCJjYXJkIiwiaWQiLCJjYXJkVGl0bGUiLCJ0aXRsZSIsImNhcmRUYWciLCJtYXAiLCJ0YWciLCJjYXJkRGF0ZSIsImRhdGUiLCJjYXJkSW5mbyIsIlVzZXIiLCJjYXJkSW5mb1dyaXRlciIsIm5pY2tuYW1lIiwiY2FyZEluZm9MaWtlIiwibGlrZSIsImNhcmRJbmZvQ29tbWVudCIsImNvbW1lbnQiLCJjc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxRQUFsQjtBQUVBLFNBQ0U7QUFBSyxPQUFHLEVBQUVDLElBQVY7QUFBQSxlQUNFLDhFQUFDLGdEQUFEO0FBQU0sVUFBSSxrQkFBV0gsSUFBSSxDQUFDSSxFQUFoQixDQUFWO0FBQUEsZ0JBQ0U7QUFBQSxrQkFDRTtBQUFLLGFBQUcsRUFBRUMsU0FBVjtBQUFBLG9CQUFzQkwsSUFBSSxDQUFDTTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU1FO0FBQUssU0FBRyxFQUFFQyxPQUFWO0FBQUEsZ0JBQ0dOLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBUztBQUNqQixlQUNFLDhFQUFDLHdDQUFEO0FBQWtCLGVBQUssRUFBQyxRQUF4QjtBQUFBLG9CQUNFLDhFQUFDLGdEQUFEO0FBQU0sZ0JBQUkscUJBQWNBLEdBQWQsQ0FBVjtBQUFBLHNCQUNFO0FBQUEsd0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVQSxHQUFHLENBQUNMLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9ELE9BUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsRUFpQkU7QUFBSyxTQUFHLEVBQUVNLFFBQVY7QUFBQSxnQkFBcUJWLElBQUksQ0FBQ1c7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRixFQWtCRTtBQUFLLFNBQUcsRUFBRUMsUUFBVjtBQUFBLGlCQUNFLDhFQUFDLGdEQUFEO0FBQU0sWUFBSSxrQkFBV1osSUFBSSxDQUFDYSxJQUFMLENBQVVULEVBQXJCLENBQVY7QUFBQSxrQkFDRTtBQUFBLG9CQUNFO0FBQUEsdUJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFNLGlCQUFHLEVBQUVVLGNBQVg7QUFBQSx3QkFBNEJkLElBQUksQ0FBQ2EsSUFBTCxDQUFVRTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFTRTtBQUFBLG1CQUNFO0FBQU0sYUFBRyxFQUFFQyxZQUFYO0FBQUEscUJBQ0UsOEVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHaEIsSUFBSSxDQUFDaUIsSUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFLRTtBQUFNLGFBQUcsRUFBRUMsZUFBWDtBQUFBLHFCQUNFLDhFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR2xCLElBQUksQ0FBQ21CLE9BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQTVDRDs7S0FBTXBCLFE7QUE4Q04sSUFBTUksSUFBSSxHQUFHaUIsMERBQUgsbUJBQVY7QUFRQSxJQUFNZixTQUFTLEdBQUdlLDBEQUFILG9CQUFmO0FBVUEsSUFBTWIsT0FBTyxHQUFHYSwwREFBSCxvQkFBYjtBQWFBLElBQU1WLFFBQVEsR0FBR1UsMERBQUgsb0JBQWQ7QUFTQSxJQUFNUixRQUFRLEdBQUdRLDBEQUFILG9CQUFkO0FBUUEsSUFBTU4sY0FBYyxHQUFHTSwwREFBSCxvQkFBcEI7QUFPQSxJQUFNSixZQUFZLEdBQUdJLDBEQUFILG9CQUFsQjtBQVFBLElBQU1GLGVBQWUsR0FBR0UsMERBQUgsb0JBQXJCO0FBU2VyQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44M2ZjYmJhNzc5YjIzMTY5M2FiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgSGVhcnRGaWxsZWQsIE1lc3NhZ2VGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHRhZ3MgPSBwb3N0Lkhhc2h0YWdzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2NhcmR9PlxyXG4gICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2NhcmRUaXRsZX0+e3Bvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY3NzPXtjYXJkVGFnfT5cclxuICAgICAgICB7dGFncy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZy5pZH0gY29sb3I9XCJwdXJwbGVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt0YWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57dGFnfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY3NzPXtjYXJkRGF0ZX0+e3Bvc3QuZGF0ZX08L2Rpdj5cclxuICAgICAgPGRpdiBjc3M9e2NhcmRJbmZvfT5cclxuICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj5ieTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjc3M9e2NhcmRJbmZvV3JpdGVyfT57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjc3M9e2NhcmRJbmZvTGlrZX0+XHJcbiAgICAgICAgICAgIDxIZWFydEZpbGxlZCAvPlxyXG4gICAgICAgICAgICB7cG9zdC5saWtlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY3NzPXtjYXJkSW5mb0NvbW1lbnR9PlxyXG4gICAgICAgICAgICA8TWVzc2FnZUZpbGxlZCAvPlxyXG4gICAgICAgICAgICB7cG9zdC5jb21tZW50fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBjYXJkID0gY3NzYFxyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzYTE4ZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgY2FyZFRpdGxlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuYDtcclxuXHJcbmNvbnN0IGNhcmRUYWcgPSBjc3NgXHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkRGF0ZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMCAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkSW5mbyA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMThweDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuYDtcclxuXHJcbmNvbnN0IGNhcmRJbmZvV3JpdGVyID0gY3NzYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkSW5mb0xpa2UgPSBjc3NgXHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkSW5mb0NvbW1lbnQgPSBjc3NgXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogIzAwMDtcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9