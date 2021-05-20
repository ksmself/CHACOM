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
  console.log(post.User.id, post.id);
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
        console.log(tag.id);
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tag"], {
          color: "purple",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/hashtag/".concat(tag.name),
            children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: tag.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this)
        }, tag.id, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
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
      lineNumber: 31,
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
              lineNumber: 36,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              css: cardInfoWriter,
              children: post.User.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          css: cardInfoLike,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartFilled"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), post.like]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          css: cardInfoComment,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageFilled"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this), post.comment]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ0YWdzIiwiSGFzaHRhZ3MiLCJjb25zb2xlIiwibG9nIiwiVXNlciIsImlkIiwiY2FyZCIsImNhcmRUaXRsZSIsInRpdGxlIiwiY2FyZFRhZyIsIm1hcCIsInRhZyIsIm5hbWUiLCJjYXJkRGF0ZSIsImRhdGUiLCJjYXJkSW5mbyIsImNhcmRJbmZvV3JpdGVyIiwibmlja25hbWUiLCJjYXJkSW5mb0xpa2UiLCJsaWtlIiwiY2FyZEluZm9Db21tZW50IiwiY29tbWVudCIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0IsTUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLFFBQWxCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFJLENBQUNLLElBQUwsQ0FBVUMsRUFBdEIsRUFBMEJOLElBQUksQ0FBQ00sRUFBL0I7QUFFQSxTQUNFO0FBQUssT0FBRyxFQUFFQyxJQUFWO0FBQUEsZUFDRSw4RUFBQyxnREFBRDtBQUFNLFVBQUksa0JBQVdQLElBQUksQ0FBQ00sRUFBaEIsQ0FBVjtBQUFBLGdCQUNFO0FBQUEsa0JBQ0U7QUFBSyxhQUFHLEVBQUVFLFNBQVY7QUFBQSxvQkFBc0JSLElBQUksQ0FBQ1M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFNRTtBQUFLLFNBQUcsRUFBRUMsT0FBVjtBQUFBLGdCQUNHVCxJQUFJLENBQUNVLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQVM7QUFDakJULGVBQU8sQ0FBQ0MsR0FBUixDQUFZUSxHQUFHLENBQUNOLEVBQWhCO0FBQ0EsZUFDRSw4RUFBQyx3Q0FBRDtBQUFrQixlQUFLLEVBQUMsUUFBeEI7QUFBQSxvQkFDRSw4RUFBQyxnREFBRDtBQUFNLGdCQUFJLHFCQUFjTSxHQUFHLENBQUNDLElBQWxCLENBQVY7QUFBQSxzQkFDRTtBQUFBLHdCQUFJRCxHQUFHLENBQUNDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVRCxHQUFHLENBQUNOLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9ELE9BVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsRUFrQkU7QUFBSyxTQUFHLEVBQUVRLFFBQVY7QUFBQSxnQkFBcUJkLElBQUksQ0FBQ2U7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixFQW1CRTtBQUFLLFNBQUcsRUFBRUMsUUFBVjtBQUFBLGlCQUNFLDhFQUFDLGdEQUFEO0FBQU0sWUFBSSxrQkFBV2hCLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxFQUFyQixDQUFWO0FBQUEsa0JBQ0U7QUFBQSxvQkFDRTtBQUFBLHVCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBTSxpQkFBRyxFQUFFVyxjQUFYO0FBQUEsd0JBQTRCakIsSUFBSSxDQUFDSyxJQUFMLENBQVVhO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVNFO0FBQUEsbUJBQ0U7QUFBTSxhQUFHLEVBQUVDLFlBQVg7QUFBQSxxQkFDRSw4RUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUduQixJQUFJLENBQUNvQixJQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUtFO0FBQU0sYUFBRyxFQUFFQyxlQUFYO0FBQUEscUJBQ0UsOEVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHckIsSUFBSSxDQUFDc0IsT0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBL0NEOztLQUFNdkIsUTtBQWlETixJQUFNUSxJQUFJLEdBQUdnQiwwREFBSCxtQkFBVjtBQVFBLElBQU1mLFNBQVMsR0FBR2UsMERBQUgsb0JBQWY7QUFVQSxJQUFNYixPQUFPLEdBQUdhLDBEQUFILG9CQUFiO0FBYUEsSUFBTVQsUUFBUSxHQUFHUywwREFBSCxvQkFBZDtBQVNBLElBQU1QLFFBQVEsR0FBR08sMERBQUgsb0JBQWQ7QUFRQSxJQUFNTixjQUFjLEdBQUdNLDBEQUFILG9CQUFwQjtBQU9BLElBQU1KLFlBQVksR0FBR0ksMERBQUgsb0JBQWxCO0FBUUEsSUFBTUYsZUFBZSxHQUFHRSwwREFBSCxvQkFBckI7QUFTZXhCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNkODlhMzg2MTYyNjJhM2RiYjZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBIZWFydEZpbGxlZCwgTWVzc2FnZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgdGFncyA9IHBvc3QuSGFzaHRhZ3M7XHJcblxyXG4gIGNvbnNvbGUubG9nKHBvc3QuVXNlci5pZCwgcG9zdC5pZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17Y2FyZH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17Y2FyZFRpdGxlfT57cG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjc3M9e2NhcmRUYWd9PlxyXG4gICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YWcuaWQpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZy5pZH0gY29sb3I9XCJwdXJwbGVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt0YWcubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhPnt0YWcubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNzcz17Y2FyZERhdGV9Pntwb3N0LmRhdGV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY3NzPXtjYXJkSW5mb30+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Ynk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY3NzPXtjYXJkSW5mb1dyaXRlcn0+e3Bvc3QuVXNlci5uaWNrbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY3NzPXtjYXJkSW5mb0xpa2V9PlxyXG4gICAgICAgICAgICA8SGVhcnRGaWxsZWQgLz5cclxuICAgICAgICAgICAge3Bvc3QubGlrZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNzcz17Y2FyZEluZm9Db21tZW50fT5cclxuICAgICAgICAgICAgPE1lc3NhZ2VGaWxsZWQgLz5cclxuICAgICAgICAgICAge3Bvc3QuY29tbWVudH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgY2FyZCA9IGNzc2BcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjM2ExOGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IGNhcmRUaXRsZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkVGFnID0gY3NzYFxyXG4gIGhlaWdodDogMjJweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBzcGFuIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2FyZERhdGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAgMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG5gO1xyXG5cclxuY29uc3QgY2FyZEluZm8gPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbmA7XHJcblxyXG5jb25zdCBjYXJkSW5mb1dyaXRlciA9IGNzc2BcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgY2FyZEluZm9MaWtlID0gY3NzYFxyXG4gIGNvbG9yOiAjMDAwO1xyXG5cclxuICBzdmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2FyZEluZm9Db21tZW50ID0gY3NzYFxyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==