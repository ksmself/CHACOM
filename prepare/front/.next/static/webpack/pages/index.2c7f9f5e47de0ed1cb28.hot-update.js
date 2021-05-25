webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles */ "./components/styles.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./components/Header/styles.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\Header\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */












var Header = function Header() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      logInFormVisible = _useState[0],
      setLogInFormVisible = _useState[1];

  var onCreateLogInForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setLogInFormVisible(false);
  }, []);
  var onClickLogOut = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_OUT_REQUEST"]
    });
    setLogInFormVisible(false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var pathName = router.pathname.match(/[/]\w+/);
  }, [router]);

  var logo = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["titleLogo"],
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "CHACOM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, _this);

  var title = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["popoverTitle"],
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: me === null || me === void 0 ? void 0 : me.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), "\uB2D8"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onClickLogOut,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);

  var content = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["popoverContent"],
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["FormOutlined"], {
            style: {
              color: '#1D78FF'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uB0B4\uAC00 \uC4F4 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CommentOutlined"], {
            style: {
              color: '#3acd95'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uB313\uAE00 \uB2E8 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
            style: {
              color: '#fe7171'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uC88B\uC544\uC694 \uB204\uB978 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InfoCircleOutlined"], {
            style: {
              color: '#6a6a6a'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);

  var logInHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["headerBox"],
    children: [pathName[0] === '/post' && logo, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_11__["header"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_11__["Global"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/write",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            type: "primary",
            shape: "round",
            css: _styles__WEBPACK_IMPORTED_MODULE_8__["roundBtn"],
            children: "\uB9CC\uB4E4\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
        placement: "bottomRight",
        title: title,
        content: content,
        trigger: "click",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UserOutlined"], {
          css: _styles__WEBPACK_IMPORTED_MODULE_11__["userIcon"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, _this);

  var logOutHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["headerBox"],
    children: [pathName[0] === '/post' && logo, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        shape: "round",
        css: _styles__WEBPACK_IMPORTED_MODULE_8__["roundBtn"],
        onClick: function onClick() {
          setLogInFormVisible(true);
        },
        children: "\uC2DC\uC791\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        visible: logInFormVisible,
        onCreate: onCreateLogInForm,
        onCancel: function onCancel() {
          setLogInFormVisible(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, _this);

  return me ? logInHeader : logOutHeader;
};

_s(Header, "YTywavotnOEzGBBAvEwwzjb8jzI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImxvZ0luRm9ybVZpc2libGUiLCJzZXRMb2dJbkZvcm1WaXNpYmxlIiwib25DcmVhdGVMb2dJbkZvcm0iLCJ1c2VDYWxsYmFjayIsIm9uQ2xpY2tMb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwidXNlRWZmZWN0IiwicGF0aE5hbWUiLCJwYXRobmFtZSIsIm1hdGNoIiwibG9nbyIsInRpdGxlTG9nbyIsInRpdGxlIiwicG9wb3ZlclRpdGxlIiwibmlja25hbWUiLCJjb250ZW50IiwicG9wb3ZlckNvbnRlbnQiLCJjb2xvciIsImxvZ0luSGVhZGVyIiwiaGVhZGVyQm94IiwiaGVhZGVyIiwicm91bmRCdG4iLCJ1c2VySWNvbiIsImxvZ091dEhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGbUIscUJBR0pDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSFA7QUFBQSxNQUdYQyxFQUhXLGdCQUdYQSxFQUhXOztBQUFBLGtCQUs2QkMsc0RBQVEsQ0FBQyxLQUFELENBTHJDO0FBQUEsTUFLWkMsZ0JBTFk7QUFBQSxNQUtNQyxtQkFMTjs7QUFNbkIs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QUFLLE9BQUcsRUFBRUosa0RBQVY7QUFBQSxlQUNHWixRQUFRLENBQUMsQ0FBRCxDQUFSLEtBQWdCLE9BQWhCLElBQTJCRyxJQUQ5QixFQUVFO0FBQUEsaUJBQ0UsOEVBQUMsMkNBQUQ7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLGFBQUssRUFBQyxPQUZSO0FBR0UsV0FBRyxFQUFFVyxnREFIUDtBQUlFLGVBQU8sRUFBRSxtQkFBTTtBQUNickIsNkJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNELFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVdFLDhFQUFDLGtEQUFEO0FBQ0UsZUFBTyxFQUFFRCxnQkFEWDtBQUVFLGdCQUFRLEVBQUVFLGlCQUZaO0FBR0UsZ0JBQVEsRUFBRSxvQkFBTTtBQUNkRCw2QkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7O0FBeUJBLFNBQU9ILEVBQUUsR0FBR3FCLFdBQUgsR0FBaUJLLFlBQTFCO0FBQ0QsQ0E3SEQ7O0dBQU1sQyxNO1VBQ1dFLHFELEVBQ0VFLHVELEVBQ0ZDLHVEOzs7S0FIWEwsTTtBQStIU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmM3ZjlmNWU0N2RlMGVkMWNiMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBGb3JtT3V0bGluZWQsXHJcbiAgQ29tbWVudE91dGxpbmVkLFxyXG4gIEhlYXJ0T3V0bGluZWQsXHJcbiAgSW5mb0NpcmNsZU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyByb3VuZEJ0biB9IGZyb20gJy4uL3N0eWxlcyc7XHJcbmltcG9ydCBDcmVhdGVMb2dpbkZvcm0gZnJvbSAnLi4vTG9naW5Gb3JtJztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7XHJcbiAgaGVhZGVyQm94LFxyXG4gIGhlYWRlcixcclxuICB1c2VySWNvbixcclxuICBHbG9iYWwsXHJcbiAgdGl0bGVMb2dvLFxyXG4gIHBvcG92ZXJUaXRsZSxcclxuICBwb3BvdmVyQ29udGVudCxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtsb2dJbkZvcm1WaXNpYmxlLCBzZXRMb2dJbkZvcm1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNyZWF0ZUxvZ0luRm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldExvZ0luRm9ybVZpc2libGUoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBzZXRMb2dJbkZvcm1WaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwYXRoTmFtZSA9IHJvdXRlci5wYXRobmFtZS5tYXRjaCgvWy9dXFx3Ky8pO1xyXG4gIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IChcclxuICAgIDxkaXYgY3NzPXt0aXRsZUxvZ299PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPkNIQUNPTTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSAoXHJcbiAgICA8ZGl2IGNzcz17cG9wb3ZlclRpdGxlfT5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgPHN0cm9uZz57bWU/Lm5pY2tuYW1lfTwvc3Ryb25nPuuLmFxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0xvZ091dH0+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgPHVsIGNzcz17cG9wb3ZlckNvbnRlbnR9PlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8Rm9ybU91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzFENzhGRicgfX0gLz5cclxuICAgICAgICAgICAgPHNwYW4+64K06rCAIOyTtCDquIA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8Q29tbWVudE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzNhY2Q5NScgfX0gLz5cclxuICAgICAgICAgICAgPHNwYW4+64yT6riAIOuLqCDquIA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyNmZTcxNzEnIH19IC8+XHJcbiAgICAgICAgICAgIDxzcGFuPuyii+yVhOyalCDriITrpbgg6riAPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEluZm9DaXJjbGVPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyM2YTZhNmEnIH19IC8+XHJcbiAgICAgICAgICAgIDxzcGFuPu2ajOybkCDsoJXrs7Qg7IiY7KCVPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9nSW5IZWFkZXIgPSAoXHJcbiAgICA8ZGl2IGNzcz17aGVhZGVyQm94fT5cclxuICAgICAge3BhdGhOYW1lWzBdID09PSAnL3Bvc3QnICYmIGxvZ299XHJcbiAgICAgIDxkaXYgY3NzPXtoZWFkZXJ9PlxyXG4gICAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3dyaXRlXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBjc3M9e3JvdW5kQnRufT5cclxuICAgICAgICAgICAgICDrp4zrk6TquLBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICBjb250ZW50PXtjb250ZW50fVxyXG4gICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VXNlck91dGxpbmVkIGNzcz17dXNlckljb259IC8+XHJcbiAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGxvZ091dEhlYWRlciA9IChcclxuICAgIDxkaXYgY3NzPXtoZWFkZXJCb3h9PlxyXG4gICAgICB7cGF0aE5hbWVbMF0gPT09ICcvcG9zdCcgJiYgbG9nb31cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgIGNzcz17cm91bmRCdG59XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvZ0luRm9ybVZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOyLnOyeke2VmOq4sFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxDcmVhdGVMb2dpbkZvcm1cclxuICAgICAgICAgIHZpc2libGU9e2xvZ0luRm9ybVZpc2libGV9XHJcbiAgICAgICAgICBvbkNyZWF0ZT17b25DcmVhdGVMb2dJbkZvcm19XHJcbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2dJbkZvcm1WaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gbWUgPyBsb2dJbkhlYWRlciA6IGxvZ091dEhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==