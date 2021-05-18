webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  text-align: center;\n  margin-bottom: 0;\n  color: #747474;\n\n  a {\n    display: inline-block;\n    padding-left: 5px;\n    text-decoration: underline;\n    color: #000;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-bottom: 20px;\n\n  input {\n    padding-left: 10px !important;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  .ant-modal-title {\n    font-weight: 700;\n  }\n\n  .ant-modal-footer {\n    button > span {\n      font-weight: 700;\n    }\n\n    .ant-btn:hover {\n      color: #18ddff;\n      border-color: #18ddff;\n    }\n\n    .ant-btn-primary {\n      color: #fff;\n      border-color: #3a18ff;\n      background-color: #3a18ff;\n    }\n\n    .ant-btn-primary:hover {\n      color: #000;\n      border-color: #18ddff;\n      background-color: #18ddff;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */







var modalStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var formStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var signup = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());

var LoginForm = function LoginForm(_ref) {
  _s();

  var visible = _ref.visible,
      onCreate = _ref.onCreate,
      _onCancel = _ref.onCancel;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.user;
  }),
      logInError = _useSelector.logInError,
      logInDone = _useSelector.logInDone;

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (logInError) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].error({
        content: logInError,
        style: {
          marginTop: '20vh'
        },
        duration: 1
      });
    }
  }, [logInError]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    visible: visible,
    title: "\uB85C\uADF8\uC778\uD558\uAE30",
    okText: "\uB85C\uADF8\uC778",
    cancelText: "\uCDE8\uC18C",
    css: modalStyle,
    onCancel: function onCancel() {
      _onCancel();

      form.resetFields();
    },
    onOk: function onOk() {
      form.validateFields().then(function (values) {
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_IN_REQUEST"],
          data: {
            nickname: values.id,
            password: values.password
          }
        });

        if (logInDone) {
          onCreate(values);
          form.resetFields();
        }
      })["catch"](function (info) {
        console.log('Validate Failed:', info);
      });
    },
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      form: form,
      name: "form_in_modal",
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
        name: "id",
        rules: [{
          required: true,
          message: '아이디를 입력해주세요!'
        }],
        css: formStyle,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          prefix: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["UserOutlined"], {
            className: "site-form-item-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 21
          }, _this),
          placeholder: "\uC544\uC774\uB514"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
        name: "password",
        rules: [{
          required: true,
          message: '패스워드를 입력해주세요!'
        }],
        css: formStyle,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          prefix: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["LockOutlined"], {
            className: "site-form-item-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, _this),
          type: "password",
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
        css: signup,
        children: ["\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2DC\uB77C\uBA74,", ' ', Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/signup",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785\uD558\uB7EC\uAC00\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "Oino1id/jQq64FkEZqPh37Q2ieo=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm, react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsibW9kYWxTdHlsZSIsImNzcyIsImZvcm1TdHlsZSIsInNpZ251cCIsIkxvZ2luRm9ybSIsInZpc2libGUiLCJvbkNyZWF0ZSIsIm9uQ2FuY2VsIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5FcnJvciIsImxvZ0luRG9uZSIsInVzZUVmZmVjdCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnRlbnQiLCJzdHlsZSIsIm1hcmdpblRvcCIsImR1cmF0aW9uIiwicmVzZXRGaWVsZHMiLCJ2YWxpZGF0ZUZpZWxkcyIsInRoZW4iLCJ2YWx1ZXMiLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsInBhc3N3b3JkIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDBEQUFILG1CQUFoQjtBQTZCQSxJQUFNQyxTQUFTLEdBQUdELDBEQUFILG9CQUFmO0FBUUEsSUFBTUUsTUFBTSxHQUFHRiwwREFBSCxvQkFBWjs7QUFhQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxRQUFlOztBQUFBLHNCQUN0Q0MseUNBQUksQ0FBQ0MsT0FBTCxFQURzQztBQUFBO0FBQUEsTUFDOUNDLElBRDhDOztBQUdyRCxNQUFNQyxR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Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEVELENBNUZEOztHQUFNQyxTO1VBQ1dJLHlDQUFJLENBQUNDLE8sRUFFSEcsdUQsRUFDaUJDLHVEOzs7S0FKOUJULFM7QUE4RlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg2YzNlYjkwYTVmYzcxN2VjMmQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIE1vZGFsLCBJbnB1dCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgbW9kYWxTdHlsZSA9IGNzc2BcclxuICAuYW50LW1vZGFsLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuYW50LW1vZGFsLWZvb3RlciB7XHJcbiAgICBidXR0b24gPiBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LWJ0bjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMThkZGZmO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMxOGRkZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC1idG4tcHJpbWFyeSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTE4ZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC1idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMxOGRkZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGRkZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZm9ybVN0eWxlID0gY3NzYFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHNpZ251cCA9IGNzc2BcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBjb2xvcjogIzc0NzQ3NDtcclxuXHJcbiAgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHsgdmlzaWJsZSwgb25DcmVhdGUsIG9uQ2FuY2VsIH0pID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbG9nSW5FcnJvciwgbG9nSW5Eb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcih7XHJcbiAgICAgICAgY29udGVudDogbG9nSW5FcnJvcixcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMjB2aCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICB0aXRsZT1cIuuhnOq3uOyduO2VmOq4sFwiXHJcbiAgICAgIG9rVGV4dD1cIuuhnOq3uOyduFwiXHJcbiAgICAgIGNhbmNlbFRleHQ9XCLst6jshoxcIlxyXG4gICAgICBjc3M9e21vZGFsU3R5bGV9XHJcbiAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgb25DYW5jZWwoKTtcclxuICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uT2s9eygpID0+IHtcclxuICAgICAgICBmb3JtXHJcbiAgICAgICAgICAudmFsaWRhdGVGaWVsZHMoKVxyXG4gICAgICAgICAgLnRoZW4oKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IHZhbHVlcy5pZCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChsb2dJbkRvbmUpIHtcclxuICAgICAgICAgICAgICBvbkNyZWF0ZSh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsaWRhdGUgRmFpbGVkOicsIGluZm8pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm19IG5hbWU9XCJmb3JtX2luX21vZGFsXCI+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGNzcz17Zm9ybVN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+2MqOyKpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBjc3M9e2Zvcm1TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtjKjsiqTsm4zrk5xcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbSBjc3M9e3NpZ251cH0+XHJcbiAgICAgICAgICDslYTsp4Eg7ZqM7JuQ7J20IOyVhOuLiOyLnOudvOuptCx7JyAnfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6F7ZWY65+s6rCA6riwPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=