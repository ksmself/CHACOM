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
  }, []); // let logo = false;
  // useEffect(() => {
  //   const pathName = router.pathname.match(/[/]\w+/);
  //   if (pathName !== null && pathName[0] === '/post') {
  //     logo = true;
  //   } else {
  //     logo = false;
  //   }
  //   console.log(logo);
  // }, [router]);

  var logo = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["titleLogo"],
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: "CHACOM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);

  var title = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["popoverTitle"],
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: me === null || me === void 0 ? void 0 : me.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), "\uB2D8"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onClickLogOut,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
            lineNumber: 79,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uB0B4\uAC00 \uC4F4 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
            lineNumber: 87,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uB313\uAE00 \uB2E8 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
            lineNumber: 95,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uC88B\uC544\uC694 \uB204\uB978 \uAE00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
            lineNumber: 103,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, _this);

  var logInHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["headerBox"],
    children: [logo, Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_11__["Global"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
            lineNumber: 118,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, _this);

  var logOutHeader = Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: _styles__WEBPACK_IMPORTED_MODULE_11__["header"],
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
      lineNumber: 137,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
      visible: logInFormVisible,
      onCreate: onCreateLogInForm,
      onCancel: function onCancel() {
        setLogInFormVisible(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImxvZ0luRm9ybVZpc2libGUiLCJzZXRMb2dJbkZvcm1WaXNpYmxlIiwib25DcmVhdGVMb2dJbkZvcm0iLCJ1c2VDYWxsYmFjayIsIm9uQ2xpY2tMb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibG9nbyIsInRpdGxlTG9nbyIsInRpdGxlIiwicG9wb3ZlclRpdGxlIiwibmlja25hbWUiLCJjb250ZW50IiwicG9wb3ZlckNvbnRlbnQiLCJjb2xvciIsImxvZ0luSGVhZGVyIiwiaGVhZGVyQm94Iiwicm91bmRCdG4iLCJ1c2VySWNvbiIsImxvZ091dEhlYWRlciIsImhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGbUIscUJBR0pDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSFA7QUFBQSxNQUdYQyxFQUhXLGdCQUdYQSxFQUhXOztBQUFBLGtCQUs2QkMsc0RBQVEsQ0FBQyxLQUFELENBTHJDO0FBQUEsTUFLWkMsZ0JBTFk7QUFBQSxNQUtNQyxtQkFMTjs7QUFNbkIsTUFBTUMsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMxQ0Ys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QTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBV0UsOEVBQUMsa0RBQUQ7QUFDRSxhQUFPLEVBQUVELGdCQURYO0FBRUUsY0FBUSxFQUFFRSxpQkFGWjtBQUdFLGNBQVEsRUFBRSxvQkFBTTtBQUNkRCwyQkFBbUIsQ0FBQyxLQUFELENBQW5CO0FBQ0Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7O0FBc0JBLFNBQU9ILEVBQUUsR0FBR2lCLFdBQUgsR0FBaUJJLFlBQTFCO0FBQ0QsQ0FqSUQ7O0dBQU03QixNO1VBQ1dFLHFELEVBQ0VFLHVELEVBQ0ZDLHVEOzs7S0FIWEwsTTtBQW1JU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmM1MzkzYzBiZjQxNGM0ZWM1MTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgRm9ybU91dGxpbmVkLFxyXG4gIENvbW1lbnRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIEluZm9DaXJjbGVPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9zdHlsZXMnO1xyXG5pbXBvcnQgQ3JlYXRlTG9naW5Gb3JtIGZyb20gJy4uL0xvZ2luRm9ybSc7XHJcbmltcG9ydCB7IExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQge1xyXG4gIGhlYWRlckJveCxcclxuICBoZWFkZXIsXHJcbiAgdXNlckljb24sXHJcbiAgR2xvYmFsLFxyXG4gIHRpdGxlTG9nbyxcclxuICBwb3BvdmVyVGl0bGUsXHJcbiAgcG9wb3ZlckNvbnRlbnQsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbbG9nSW5Gb3JtVmlzaWJsZSwgc2V0TG9nSW5Gb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DcmVhdGVMb2dJbkZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRMb2dJbkZvcm1WaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tMb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgc2V0TG9nSW5Gb3JtVmlzaWJsZShmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBsZXQgbG9nbyA9IGZhbHNlO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBwYXRoTmFtZSA9IHJvdXRlci5wYXRobmFtZS5tYXRjaCgvWy9dXFx3Ky8pO1xyXG4gIC8vICAgaWYgKHBhdGhOYW1lICE9PSBudWxsICYmIHBhdGhOYW1lWzBdID09PSAnL3Bvc3QnKSB7XHJcbiAgLy8gICAgIGxvZ28gPSB0cnVlO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgbG9nbyA9IGZhbHNlO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgY29uc29sZS5sb2cobG9nbyk7XHJcbiAgLy8gfSwgW3JvdXRlcl0pO1xyXG5cclxuICBjb25zdCBsb2dvID0gKFxyXG4gICAgPGRpdiBjc3M9e3RpdGxlTG9nb30+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+Q0hBQ09NPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IChcclxuICAgIDxkaXYgY3NzPXtwb3BvdmVyVGl0bGV9PlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICA8c3Ryb25nPnttZT8ubmlja25hbWV9PC9zdHJvbmc+64uYXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTG9nT3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICA8dWwgY3NzPXtwb3BvdmVyQ29udGVudH0+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxGb3JtT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMUQ3OEZGJyB9fSAvPlxyXG4gICAgICAgICAgICA8c3Bhbj7rgrTqsIAg7JO0IOq4gDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxDb21tZW50T3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjM2FjZDk1JyB9fSAvPlxyXG4gICAgICAgICAgICA8c3Bhbj7rjJPquIAg64uoIOq4gDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnI2ZlNzE3MScgfX0gLz5cclxuICAgICAgICAgICAgPHNwYW4+7KKL7JWE7JqUIOuIhOuluCDquIA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SW5mb0NpcmNsZU91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAnIzZhNmE2YScgfX0gLz5cclxuICAgICAgICAgICAgPHNwYW4+7ZqM7JuQIOygleuztCDsiJjsoJU8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG5cclxuICBjb25zdCBsb2dJbkhlYWRlciA9IChcclxuICAgIDxkaXYgY3NzPXtoZWFkZXJCb3h9PlxyXG4gICAgICB7bG9nb31cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8R2xvYmFsIC8+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi93cml0ZVwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgY3NzPXtyb3VuZEJ0bn0+XHJcbiAgICAgICAgICAgICAg66eM65Ok6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIlxyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgY29udGVudD17Y29udGVudH1cclxuICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFVzZXJPdXRsaW5lZCBjc3M9e3VzZXJJY29ufSAvPlxyXG4gICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCBsb2dPdXRIZWFkZXIgPSAoXHJcbiAgICA8ZGl2IGNzcz17aGVhZGVyfT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICBjc3M9e3JvdW5kQnRufVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldExvZ0luRm9ybVZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIOyLnOyeke2VmOq4sFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPENyZWF0ZUxvZ2luRm9ybVxyXG4gICAgICAgIHZpc2libGU9e2xvZ0luRm9ybVZpc2libGV9XHJcbiAgICAgICAgb25DcmVhdGU9e29uQ3JlYXRlTG9nSW5Gb3JtfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2dJbkZvcm1WaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1lID8gbG9nSW5IZWFkZXIgOiBsb2dPdXRIZWFkZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=