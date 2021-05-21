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

  var logo = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["titleLogo"],
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["popoverTitle"],
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
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CommentOutlined"], {
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
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HeartOutlined"], {
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
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InfoCircleOutlined"], {
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

  var logInHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["headerBox"],
    children: [pathName && pathName[0] === '/post' && logo, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: _styles__WEBPACK_IMPORTED_MODULE_11__["header"],
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_11__["Global"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
            lineNumber: 109,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
          lineNumber: 120,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, _this);

  var logOutHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["headerBox"],
    children: [pathName && pathName[0] === '/post' && logo, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
        lineNumber: 130,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        visible: logInFormVisible,
        onCreate: onCreateLogInForm,
        onCancel: function onCancel() {
          setLogInFormVisible(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, _this);

  return me ? logInHeader : logOutHeader;
};

_s(Header, "rKFxOt9GmlcBZKlm+hdbjbsoS9g=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImxvZ0luRm9ybVZpc2libGUiLCJzZXRMb2dJbkZvcm1WaXNpYmxlIiwib25DcmVhdGVMb2dJbkZvcm0iLCJ1c2VDYWxsYmFjayIsIm9uQ2xpY2tMb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibG9nbyIsInRpdGxlTG9nbyIsInRpdGxlIiwicG9wb3ZlclRpdGxlIiwibmlja25hbWUiLCJjb250ZW50IiwicG9wb3ZlckNvbnRlbnQiLCJjb2xvciIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJtYXRjaCIsImxvZ0luSGVhZGVyIiwiaGVhZGVyQm94IiwiaGVhZGVyIiwicm91bmRCdG4iLCJ1c2VySWNvbiIsImxvZ091dEhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGbUIscUJBR0pDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSFA7QUFBQSxNQUdYQyxFQUhXLGdCQUdYQSxFQUhXOztBQUFBLGtCQUs2QkMsc0RBQVEsQ0FBQyxLQUFELENBTHJDO0FBQUEsTUFLWkMsZ0JBTFk7QUFBQSxNQUtNQyxtQkFMTjs7QUFNbkIsTUFBTUMsaUJBQWlC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LEtBQWdCLE9BQTVCLElBQXVDUixJQUQxQyxFQUVFO0FBQUEsaUJBQ0UsOEVBQUMsMkNBQUQ7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLGFBQUssRUFBQyxPQUZSO0FBR0UsV0FBRyxFQUFFYyxnREFIUDtBQUlFLGVBQU8sRUFBRSxtQkFBTTtBQUNicEIsNkJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUNELFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVdFLDhFQUFDLGtEQUFEO0FBQ0UsZUFBTyxFQUFFRCxnQkFEWDtBQUVFLGdCQUFRLEVBQUVFLGlCQUZaO0FBR0UsZ0JBQVEsRUFBRSxvQkFBTTtBQUNkRCw2QkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7O0FBeUJBLFNBQU9ILEVBQUUsR0FBR29CLFdBQUgsR0FBaUJLLFlBQTFCO0FBQ0QsQ0EzSEQ7O0dBQU1qQyxNO1VBQ1dFLHFELEVBQ0VFLHVELEVBQ0ZDLHVEOzs7S0FIWEwsTTtBQTZIU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmEzYzMzYmM1ZGVhMzY1N2IwY2Q1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgRm9ybU91dGxpbmVkLFxyXG4gIENvbW1lbnRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIEluZm9DaXJjbGVPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9zdHlsZXMnO1xyXG5pbXBvcnQgQ3JlYXRlTG9naW5Gb3JtIGZyb20gJy4uL0xvZ2luRm9ybSc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQge1xyXG4gIGhlYWRlckJveCxcclxuICBoZWFkZXIsXHJcbiAgdXNlckljb24sXHJcbiAgR2xvYmFsLFxyXG4gIHRpdGxlTG9nbyxcclxuICBwb3BvdmVyVGl0bGUsXHJcbiAgcG9wb3ZlckNvbnRlbnQsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbbG9nSW5Gb3JtVmlzaWJsZSwgc2V0TG9nSW5Gb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DcmVhdGVMb2dJbkZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRMb2dJbkZvcm1WaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tMb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgc2V0TG9nSW5Gb3JtVmlzaWJsZShmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dvID0gKFxyXG4gICAgPGRpdiBjc3M9e3RpdGxlTG9nb30+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+Q0hBQ09NPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IChcclxuICAgIDxkaXYgY3NzPXtwb3BvdmVyVGl0bGV9PlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8c3Ryb25nPnttZT8ubmlja25hbWV9PC9zdHJvbmc+64uYXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTG9nT3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICA8dWwgY3NzPXtwb3BvdmVyQ29udGVudH0+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxGb3JtT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMUQ3OEZGJyB9fSAvPlxyXG4gICAgICAgICAgICA8c3Bhbj7rgrTqsIAg7JO0IOq4gDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxDb21tZW50T3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjM2FjZDk1JyB9fSAvPlxyXG4gICAgICAgICAgICA8c3Bhbj7rjJPquIAg64uoIOq4gDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnI2ZlNzE3MScgfX0gLz5cclxuICAgICAgICAgICAgPHNwYW4+7KKL7JWE7JqUIOuIhOuluCDquIA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SW5mb0NpcmNsZU91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzZhNmE2YScgfX0gLz5cclxuICAgICAgICAgICAgPHNwYW4+7ZqM7JuQIOygleuztCDsiJjsoJU8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG5cclxuICBjb25zdCBwYXRoTmFtZSA9IHJvdXRlci5wYXRobmFtZS5tYXRjaCgvWy9dXFx3Ky8pO1xyXG5cclxuICBjb25zdCBsb2dJbkhlYWRlciA9IChcclxuICAgIDxkaXYgY3NzPXtoZWFkZXJCb3h9PlxyXG4gICAgICB7cGF0aE5hbWUgJiYgcGF0aE5hbWVbMF0gPT09ICcvcG9zdCcgJiYgbG9nb31cclxuICAgICAgPGRpdiBjc3M9e2hlYWRlcn0+XHJcbiAgICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvd3JpdGVcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIGNzcz17cm91bmRCdG59PlxyXG4gICAgICAgICAgICAgIOunjOuTpOq4sFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XHJcbiAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxVc2VyT3V0bGluZWQgY3NzPXt1c2VySWNvbn0gLz5cclxuICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbG9nT3V0SGVhZGVyID0gKFxyXG4gICAgPGRpdiBjc3M9e2hlYWRlckJveH0+XHJcbiAgICAgIHtwYXRoTmFtZSAmJiBwYXRoTmFtZVswXSA9PT0gJy9wb3N0JyAmJiBsb2dvfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgY3NzPXtyb3VuZEJ0bn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0TG9nSW5Gb3JtVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7Iuc7J6R7ZWY6riwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPENyZWF0ZUxvZ2luRm9ybVxyXG4gICAgICAgICAgdmlzaWJsZT17bG9nSW5Gb3JtVmlzaWJsZX1cclxuICAgICAgICAgIG9uQ3JlYXRlPXtvbkNyZWF0ZUxvZ0luRm9ybX1cclxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvZ0luRm9ybVZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiBtZSA/IGxvZ0luSGVhZGVyIDogbG9nT3V0SGVhZGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9