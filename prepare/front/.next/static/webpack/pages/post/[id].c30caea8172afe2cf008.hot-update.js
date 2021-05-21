webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./components/styles.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./components/Header/styles.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\Header\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @jsxImportSource @emotion/react */











var Header = function Header() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      logInFormVisible = _useState[0],
      setLogInFormVisible = _useState[1];

  var onCreateLogInForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setLogInFormVisible(false);
  }, []);
  var onClickLogOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_OUT_REQUEST"]
    });
    setLogInFormVisible(false);
  }, []);

  var logo = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_10__["titleLogo"],
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "CHACOM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);

  var title = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_10__["popoverTitle"],
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: me === null || me === void 0 ? void 0 : me.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), "\uB2D8"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClickLogOut,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);

  var content = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    css: _styles__WEBPACK_IMPORTED_MODULE_10__["popoverContent"],
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutlined"], {
            style: {
              color: '#1D78FF'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uB0B4\uAC00 \uC4F4 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CommentOutlined"], {
            style: {
              color: '#3acd95'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uB313\uAE00 \uB2E8 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
            style: {
              color: '#fe7171'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uC88B\uC544\uC694 \uB204\uB978 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["InfoCircleOutlined"], {
            style: {
              color: '#6a6a6a'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);

  var pathName = router.pathname.match(/[/]\w+/);
  var postPage = pathName && pathName[0] === '/post';

  var logInHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: postPage ? _styles__WEBPACK_IMPORTED_MODULE_10__["headerLogo"] : _styles__WEBPACK_IMPORTED_MODULE_10__["headerNonLogo"],
    children: [pathName && pathName[0] === '/post' && logo, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_10__["header"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_10__["Global"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/write",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "primary",
            shape: "round",
            css: _styles__WEBPACK_IMPORTED_MODULE_7__["roundBtn"],
            children: "\uB9CC\uB4E4\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        placement: "bottomRight",
        title: title,
        content: content,
        trigger: "click",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
          css: _styles__WEBPACK_IMPORTED_MODULE_10__["userIcon"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, _this);

  var logOutHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: postPage ? _styles__WEBPACK_IMPORTED_MODULE_10__["headerLogo"] : _styles__WEBPACK_IMPORTED_MODULE_10__["headerNonLogo"],
    children: [pathName && pathName[0] === '/post' && logo, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        shape: "round",
        css: _styles__WEBPACK_IMPORTED_MODULE_7__["roundBtn"],
        onClick: function onClick() {
          setLogInFormVisible(true);
        },
        children: "\uC2DC\uC791\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        visible: logInFormVisible,
        onCreate: onCreateLogInForm,
        onCancel: function onCancel() {
          setLogInFormVisible(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, _this);

  return me ? logInHeader : logOutHeader;
};

_s(Header, "rKFxOt9GmlcBZKlm+hdbjbsoS9g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImxvZ0luRm9ybVZpc2libGUiLCJzZXRMb2dJbkZvcm1WaXNpYmxlIiwib25DcmVhdGVMb2dJbkZvcm0iLCJ1c2VDYWxsYmFjayIsIm9uQ2xpY2tMb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibG9nbyIsInRpdGxlTG9nbyIsInRpdGxlIiwicG9wb3ZlclRpdGxlIiwibmlja25hbWUiLCJjb250ZW50IiwicG9wb3ZlckNvbnRlbnQiLCJjb2xvciIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJtYXRjaCIsInBvc3RQYWdlIiwibG9nSW5IZWFkZXIiLCJoZWFkZXJMb2dvIiwiaGVhZGVyTm9uTG9nbyIsImhlYWRlciIsInJvdW5kQnRuIiwidXNlckljb24iLCJsb2dPdXRIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRm1CLHFCQUdKQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUhQO0FBQUEsTUFHWEMsRUFIVyxnQkFHWEEsRUFIVzs7QUFBQSxrQkFLNkJDLHNEQUFRLENBQUMsS0FBRCxDQUxyQztBQUFBLE1BS1pDLGdCQUxZO0FBQUEsTUFLTUMsbUJB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QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGOztBQXdCQSxNQUFNQyxZQUFZLEdBQ2hCO0FBQUssT0FBRyxFQUFFUCxRQUFRLEdBQUdFLG1EQUFILEdBQWdCQyxzREFBbEM7QUFBQSxlQUNHTixRQUFRLElBQUlBLFFBQVEsQ0FBQyxDQUFELENBQVIsS0FBZ0IsT0FBNUIsSUFBdUNSLElBRDFDLEVBRUU7QUFBQSxpQkFDRSw4RUFBQywyQ0FBRDtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsYUFBSyxFQUFDLE9BRlI7QUFHRSxXQUFHLEVBQUVnQixnREFIUDtBQUlFLGVBQU8sRUFBRSxtQkFBTTtBQUNidEIsNkJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNELFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVdFLDhFQUFDLGtEQUFEO0FBQ0UsZUFBTyxFQUFFRCxnQkFEWDtBQUVFLGdCQUFRLEVBQUVFLGlCQUZaO0FBR0UsZ0JBQVEsRUFBRSxvQkFBTTtBQUNkRCw2QkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7O0FBeUJBLFNBQU9ILEVBQUUsR0FBR3FCLFdBQUgsR0FBaUJNLFlBQTFCO0FBQ0QsQ0E1SEQ7O0dBQU1uQyxNO1VBQ1dFLHFELEVBQ0VFLHVELEVBQ0ZDLHVEOzs7S0FIWEwsTTtBQThIU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmMzMGNhZWE4MTcyYWZlMmNmMDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgUG9wb3ZlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBGb3JtT3V0bGluZWQsXHJcbiAgQ29tbWVudE91dGxpbmVkLFxyXG4gIEhlYXJ0T3V0bGluZWQsXHJcbiAgSW5mb0NpcmNsZU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyByb3VuZEJ0biB9IGZyb20gJy4uL3N0eWxlcyc7XHJcbmltcG9ydCBDcmVhdGVMb2dpbkZvcm0gZnJvbSAnLi4vTG9naW5Gb3JtJztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7XHJcbiAgaGVhZGVyTG9nbyxcclxuICBoZWFkZXJOb25Mb2dvLFxyXG4gIGhlYWRlcixcclxuICB1c2VySWNvbixcclxuICBHbG9iYWwsXHJcbiAgdGl0bGVMb2dvLFxyXG4gIHBvcG92ZXJUaXRsZSxcclxuICBwb3BvdmVyQ29udGVudCxcclxufSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtsb2dJbkZvcm1WaXNpYmxlLCBzZXRMb2dJbkZvcm1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNyZWF0ZUxvZ0luRm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldExvZ0luRm9ybVZpc2libGUoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0xvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBzZXRMb2dJbkZvcm1WaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSAoXHJcbiAgICA8ZGl2IGNzcz17dGl0bGVMb2dvfT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5DSEFDT008L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gKFxyXG4gICAgPGRpdiBjc3M9e3BvcG92ZXJUaXRsZX0+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIDxzdHJvbmc+e21lPy5uaWNrbmFtZX08L3N0cm9uZz7ri5hcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tMb2dPdXR9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY29udGVudCA9IChcclxuICAgIDx1bCBjc3M9e3BvcG92ZXJDb250ZW50fT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEZvcm1PdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMxRDc4RkYnIH19IC8+XHJcbiAgICAgICAgICAgIDxzcGFuPuuCtOqwgCDsk7Qg6riAPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPENvbW1lbnRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMzYWNkOTUnIH19IC8+XHJcbiAgICAgICAgICAgIDxzcGFuPuuMk+q4gCDri6gg6riAPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjZmU3MTcxJyB9fSAvPlxyXG4gICAgICAgICAgICA8c3Bhbj7soovslYTsmpQg64iE66W4IOq4gDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxJbmZvQ2lyY2xlT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjNmE2YTZhJyB9fSAvPlxyXG4gICAgICAgICAgICA8c3Bhbj7tmozsm5Ag7KCV67O0IOyImOyglTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHBhdGhOYW1lID0gcm91dGVyLnBhdGhuYW1lLm1hdGNoKC9bL11cXHcrLyk7XHJcbiAgY29uc3QgcG9zdFBhZ2UgPSBwYXRoTmFtZSAmJiBwYXRoTmFtZVswXSA9PT0gJy9wb3N0JztcclxuXHJcbiAgY29uc3QgbG9nSW5IZWFkZXIgPSAoXHJcbiAgICA8ZGl2IGNzcz17cG9zdFBhZ2UgPyBoZWFkZXJMb2dvIDogaGVhZGVyTm9uTG9nb30+XHJcbiAgICAgIHtwYXRoTmFtZSAmJiBwYXRoTmFtZVswXSA9PT0gJy9wb3N0JyAmJiBsb2dvfVxyXG4gICAgICA8ZGl2IGNzcz17aGVhZGVyfT5cclxuICAgICAgICA8R2xvYmFsIC8+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgY3NzPXtyb3VuZEJ0bn0+XHJcbiAgICAgICAgICAgICAg66eM65Ok6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgY29udGVudD17Y29udGVudH1cclxuICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFVzZXJPdXRsaW5lZCBjc3M9e3VzZXJJY29ufSAvPlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCBsb2dPdXRIZWFkZXIgPSAoXHJcbiAgICA8ZGl2IGNzcz17cG9zdFBhZ2UgPyBoZWFkZXJMb2dvIDogaGVhZGVyTm9uTG9nb30+XHJcbiAgICAgIHtwYXRoTmFtZSAmJiBwYXRoTmFtZVswXSA9PT0gJy9wb3N0JyAmJiBsb2dvfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgY3NzPXtyb3VuZEJ0bn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0TG9nSW5Gb3JtVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7Iuc7J6R7ZWY6riwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPENyZWF0ZUxvZ2luRm9ybVxyXG4gICAgICAgICAgdmlzaWJsZT17bG9nSW5Gb3JtVmlzaWJsZX1cclxuICAgICAgICAgIG9uQ3JlYXRlPXtvbkNyZWF0ZUxvZ0luRm9ybX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvZ0luRm9ybVZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiBtZSA/IGxvZ0luSGVhZGVyIDogbG9nT3V0SGVhZGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9