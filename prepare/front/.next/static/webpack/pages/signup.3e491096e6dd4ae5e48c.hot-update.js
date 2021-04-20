webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_TitleLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TitleLogo */ "./components/TitleLogo.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  .ant-modal-confirm-body-wrapper\n    > .ant-modal-confirm-body\n    > .ant-modal-confirm-title {\n    font-weight: 700;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-top: 30px;\n\n  .ant-form-item-control-input-content {\n    display: flex;\n    justify-content: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: space-between;\n\n  .ant-input {\n    width: 190px;\n  }\n\n  .ant-form-item-control-input-content > input {\n    margin-right: 10px;\n  }\n\n  button {\n    padding: 4px 10px;\n    font-weight: 700;\n    border-color: #3a18ff;\n  }\n\n  button:focus {\n    color: #3a18ff;\n    border-color: #3a18ff;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 280px;\n  margin: 40px auto 0;\n\n  .ant-form-item {\n    display: block;\n  }\n\n  .ant-form-item-label {\n    font-weight: 700;\n  }\n\n  .ant-form-item-has-error {\n    margin-bottom: 10px;\n  }\n\n  .ant-btn-primary {\n    width: 100px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-top: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */






var headerStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var formStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var emailForm = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var submitDiv = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"])(_templateObject5()); // localhost:3000/signup

_c = Global;

var SignUp = function SignUp() {
  _s();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm(),
      _Form$useForm2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var onChangeEmail = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    setEmail(e.target.value);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      duplicateUser = _useState2[0],
      setDuplicateUser = _useState2[1];

  var duplicatedId = function duplicatedId() {
    setEmail(function (state) {
      return null;
    });
    antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].error({
      title: '이미 사용중인 이메일입니다.',
      onOk: function onOk() {
        emailRef.current.focus(); // console.log(emailRef.current);
        // console.log(email);

        console.log(document.getElementsByClassName('email-input').value);
      }
    });
  };

  var nonDuplicatedId = function nonDuplicatedId() {
    antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].success({
      title: '사용 가능한 이메일입니다.'
    });
  };

  var onFinish = function onFinish(values) {
    // values는 {email: "ksmself@wizlive.com", password: "sfsfsfs", confirm: "sfsfsfs"}
    console.log('Received values of form: ', values);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(email);
  }, [email]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: headerStyle,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      form: form,
      css: formStyle,
      onFinish: onFinish,
      scrollToFirstError: true,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
          name: "email",
          label: "\uC544\uC774\uB514(\uC774\uBA54\uC77C)",
          rules: [{
            type: 'email',
            message: '올바른 이메일 주소를 입력해주세요!'
          }, {
            required: true,
            message: '아이디(이메일)을 입력해주세요!'
          }],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: emailForm,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              className: "email-input",
              type: "email",
              value: email,
              onChange: onChangeEmail,
              placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
              ref: emailRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              onClick: duplicateUser ? duplicatedId : nonDuplicatedId,
              children: "\uC911\uBCF5\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        name: "password",
        label: "\uBE44\uBC00\uBC88\uD638",
        rules: [{
          required: true,
          message: '비밀번호를 입력해주세요!'
        }],
        hasFeedback: true,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Password, {
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        name: "confirm",
        label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
        dependencies: ['password'],
        hasFeedback: true,
        rules: [{
          required: true,
          message: '비밀번호를 확인해주세요!'
        }, function (_ref) {
          var getFieldValue = _ref.getFieldValue;
          return {
            validator: function validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('입력하신 비밀번호와 일치하지 않습니다!'));
            }
          };
        }],
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Password, {
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uD55C \uBC88 \uB354 \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        css: submitDiv,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          className: "submit-btn",
          shape: "round",
          htmlType: "submit",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_8__["roundBtn"],
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "tqpVnKd16Ja3x3DvvY+plOPyaJU=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm];
});

_c2 = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c, _c2;

$RefreshReg$(_c, "Global");
$RefreshReg$(_c2, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiZW1haWxGb3JtIiwic3VibWl0RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTaWduVXAiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJlbWFpbFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImR1cGxpY2F0ZVVzZXIiLCJzZXREdXBsaWNhdGVVc2VyIiwiZHVwbGljYXRlZElkIiwic3RhdGUiLCJNb2RhbCIsImVycm9yIiwidGl0bGUiLCJvbk9rIiwiY3VycmVudCIsImZvY3VzIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5vbkR1cGxpY2F0ZWRJZCIsInN1Y2Nlc3MiLCJvbkZpbmlzaCIsInZhbHVlcyIsInVzZUVmZmVjdCIsInR5cGUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwiXyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyb3VuZEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywwREFBSCxtQkFBakI7QUFJQSxJQUFNQyxTQUFTLEdBQUdELDBEQUFILG9CQUFmO0FBcUJBLElBQU1FLFNBQVMsR0FBR0YsMERBQUgsb0JBQWY7QUF3QkEsSUFBTUcsU0FBUyxHQUFHSCwwREFBSCxvQkFBZjtBQVNBLElBQU1JLE1BQU0sR0FB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O0FBQUE7QUFBQTtBQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUNGLEVBdUVFLDhFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQUcsRUFBRTdDLFNBQWhCO0FBQUEsa0JBQ0UsOEVBQUMsMkNBQUQ7QUFDRSxjQUFJLEVBQUMsU0FEUDtBQUVFLG1CQUFTLEVBQUMsWUFGWjtBQUdFLGVBQUssRUFBQyxPQUhSO0FBSUUsa0JBQVEsRUFBQyxRQUpYO0FBS0UsYUFBRyxFQUFFOEMsMkRBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUZELENBaElEOztHQUFNM0MsTTtVQUNXQyx5Q0FBSSxDQUFDQyxPOzs7TUFEaEJGLE07QUFrSVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC4zZTQ5MTA5NmU2ZGQ0YWU1ZTQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBUaXRsZUxvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZUxvZ28nO1xyXG5pbXBvcnQgeyByb3VuZEJ0biB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzJztcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0gY3NzYFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBmb3JtU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1idG4tcHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZW1haWxGb3JtID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuYW50LWlucHV0IHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICB9XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudCA+IGlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3VibWl0RGl2ID0gY3NzYFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLmFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tYm9keVxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBsb2NhbGhvc3Q6MzAwMC9zaWdudXBcclxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlRW1haWwgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2R1cGxpY2F0ZVVzZXIsIHNldER1cGxpY2F0ZVVzZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGR1cGxpY2F0ZWRJZCA9ICgpID0+IHtcclxuICAgIHNldEVtYWlsKChzdGF0ZSkgPT4gbnVsbCk7XHJcbiAgICBNb2RhbC5lcnJvcih7XHJcbiAgICAgIHRpdGxlOiAn7J2066+4IOyCrOyaqeykkeyduCDsnbTrqZTsnbzsnoXri4jri6QuJyxcclxuICAgICAgb25PazogKCkgPT4ge1xyXG4gICAgICAgIGVtYWlsUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbWFpbFJlZi5jdXJyZW50KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZW1haWwtaW5wdXQnKS52YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub25EdXBsaWNhdGVkSWQgPSAoKSA9PiB7XHJcbiAgICBNb2RhbC5zdWNjZXNzKHtcclxuICAgICAgdGl0bGU6ICfsgqzsmqkg6rCA64ql7ZWcIOydtOuplOydvOyeheuLiOuLpC4nLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICAvLyB2YWx1ZXPripQge2VtYWlsOiBcImtzbXNlbGZAd2l6bGl2ZS5jb21cIiwgcGFzc3dvcmQ6IFwic2ZzZnNmc1wiLCBjb25maXJtOiBcInNmc2ZzZnNcIn1cclxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gIH0sIFtlbWFpbF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2hlYWRlclN0eWxlfT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8VGl0bGVMb2dvIC8+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm19IGNzcz17Zm9ybVN0eWxlfSBvbkZpbmlzaD17b25GaW5pc2h9IHNjcm9sbFRvRmlyc3RFcnJvcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuyVhOydtOuUlCjsnbTrqZTsnbwpXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yYrOuwlOuluCDsnbTrqZTsnbwg7KO87IaM66W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SUKOydtOuplOydvCnsnYQg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2VtYWlsRm9ybX0+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtlbWFpbFJlZn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZHVwbGljYXRlVXNlciA/IGR1cGxpY2F0ZWRJZCA6IG5vbkR1cGxpY2F0ZWRJZH0+XHJcbiAgICAgICAgICAgICAgICDspJHrs7XtmZXsnbhcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJjb25maXJtXCJcclxuICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4IO2ZleyduFwiXHJcbiAgICAgICAgICBkZXBlbmRlbmNpZXM9e1sncGFzc3dvcmQnXX1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+u5hOuwgOuyiO2YuOulvCDtmZXsnbjtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoJ+yeheugpe2VmOyLoCDruYTrsIDrsojtmLjsmYAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpCEnKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IO2VnCDrsogg642UIOyeheugpe2VtOyjvOyEuOyalFwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBjc3M9e3N1Ym1pdERpdn0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNzcz17cm91bmRCdG59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=