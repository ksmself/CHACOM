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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");




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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding-top: 25px;\n\n  .ant-form-item-control-input-content {\n    display: flex;\n    justify-content: center;\n\n    button {\n      @media (min-width: 768px) {\n        width: 130px;\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: space-between;\n\n  .ant-input {\n    width: 190px;\n    margin-right: 10px;\n\n    @media (min-width: 768px) {\n      width: 310px;\n    }\n\n    @media (min-width: 1024px) {\n      width: 410px;\n    }\n  }\n\n  button {\n    padding: 4px 10px;\n    font-weight: 700;\n    border-color: #3a18ff;\n\n    @media (min-width: 768px) {\n      height: 38px;\n    }\n  }\n\n  button:hover {\n    color: #3a18ff;\n    border-color: #3a18ff;\n  }\n\n  button:focus {\n    color: #3a18ff;\n    border-color: #3a18ff;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 280px;\n  margin: 40px auto 0;\n\n  @media (min-width: 768px) {\n    width: 400px;\n    margin-top: 70px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 450px;\n    margin-top: 60px;\n  }\n\n  .ant-form-item {\n    display: block;\n\n    @media (min-width: 768px) {\n      margin-bottom: 50px;\n    }\n\n    .ant-input {\n      @media (min-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n\n  .ant-form-item-label {\n    font-weight: 700;\n\n    label {\n      @media (min-width: 768px) {\n        margin-bottom: 10px;\n        font-size: 18px;\n      }\n\n      @media (min-width: 1024px) {\n        margin-bottom: 16px;\n        font-size: 22px;\n      }\n    }\n\n    label::after {\n      content: '';\n    }\n  }\n\n  // \uBE44\uBC00\uBC88\uD638 & \uBE44\uBC00\uBC88\uD638 \uD655\uC778 input \uB192\uC774\n  .ant-input-affix-wrapper {\n    height: 38px;\n  }\n\n  .ant-form-item-has-error {\n    margin-bottom: 10px;\n\n    @media (min-width: 768px) {\n      margin-bottom: 28px;\n    }\n  }\n\n  .ant-btn-primary {\n    width: 100px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-top: 30px;\n\n  @media (min-width: 768px) {\n    margin-top: 60px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-top: 80px;\n  }\n"]);

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

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1]; // const [password, onChangePassword] = useInput('');


  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(''),
      _useInput4 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 2),
      passwordCheck = _useInput4[0],
      onChangePasswordCheck = _useInput4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      password = _useState[0],
      setPassword = _useState[1];

  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) {
    // form.setFieldsValue({
    //   password: e.target.value.trim(),
    // });
    var word = e.target.value;
    setPassword(word.trim());
    console.log(word.trim());
  }, [password]); // const [passwordCheck, setPasswordCheck] = useState('');
  // const onChangePasswordCheck = useCallback(
  //   (e) => {
  //     form.setFieldsValue({
  //       confirm: e.target.value.trim(),
  //     });
  //     setPasswordCheck(e.target.value.trim());
  //     console.log(passwordCheck);
  //   },
  //   [passwordCheck]
  // );
  // 중복된 사용자가 있는지(dispatch)

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      duplicateUser = _useState2[0],
      setDuplicateUser = _useState2[1];

  var duplicatedId = function duplicatedId() {
    setEmail(function (state) {
      return '';
    });
    form.setFieldsValue({
      email: ''
    });
    antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].error({
      title: '이미 사용중인 이메일입니다.',
      onOk: function onOk() {
        emailRef.current.focus();
      }
    });
  };

  var nonDuplicatedId = function nonDuplicatedId() {
    var target = document.getElementById('submit-btn');
    target.disabled = false;
    antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].success({
      title: '사용 가능한 이메일입니다.'
    });
  };

  var onFinish = function onFinish(values) {
    // values는 {email: "ksmself@wizlive.com", password: "sfsfsfs", confirm: "sfsfsfs"}
    console.log('Received values of form: ', values);
  };

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: headerStyle,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
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
              lineNumber: 232,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              onClick: duplicateUser ? duplicatedId : nonDuplicatedId,
              children: "\uC911\uBCF5\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        name: "password",
        label: "\uBE44\uBC00\uBC88\uD638",
        rules: [{
          required: true,
          message: '비밀번호를 입력해주세요!'
        }, {
          min: 8,
          message: '8자 이상의 문자, 숫자, 기호로 입력해주세요'
        }, {
          whitespace: true,
          message: '스페이스키를 입력할 수 없습니다.'
        }],
        hasFeedback: true,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Password, {
          value: password,
          onChange: onChangePassword,
          placeholder: "8\uC790 \uC774\uC0C1\uC758 \uBB38\uC790, \uC22B\uC790, \uAE30\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
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
          value: passwordCheck,
          onChange: onChangePasswordCheck,
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uD55C \uBC88 \uB354 \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        css: submitDiv,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          id: "submit-btn",
          shape: "round",
          htmlType: "submit",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_8__["roundBtn"],
          disabled: true,
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "7N5rTqGMaw4Bg1v6xASnDGGe9eI=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm, _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiZW1haWxGb3JtIiwic3VibWl0RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTaWduVXAiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJlbWFpbFJlZiIsInVzZVJlZiIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDYWxsYmFjayIsImUiLCJ3b3JkIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsImR1cGxpY2F0ZVVzZXIiLCJzZXREdXBsaWNhdGVVc2VyIiwiZHVwbGljYXRlZElkIiwic2V0RW1haWwiLCJzdGF0ZSIsInNldEZpZWxkc1ZhbHVlIiwiTW9kYWwiLCJlcnJvciIsInRpdGxlIiwib25PayIsImN1cnJlbnQiLCJmb2N1cyIsIm5vbkR1cGxpY2F0ZWRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNhYmxlZCIsInN1Y2Nlc3MiLCJvbkZpbmlzaCIsInZhbHVlcyIsInR5cGUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJtaW4iLCJ3aGl0ZXNwYWNlIiwiZ2V0RmllbGRWYWx1ZSIsInZhbGlkYXRvciIsIl8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwicm91bmRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcs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QVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwR0QsQ0F0S0Q7O0dBQU10RCxNO1VBQ1dDLHlDQUFJLENBQUNDLE8sRUFHV0ksdUQsRUFFZ0JBLHVEOzs7TUFOM0NOLE07QUF3S1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5lOGU5MmFkM2IwZDcyMDFmMDEyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBUaXRsZUxvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZUxvZ28nO1xyXG5pbXBvcnQgeyByb3VuZEJ0biB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0gY3NzYFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZm9ybVN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAyODBweDtcclxuICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC1pbnB1dCB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOu5hOuwgOuyiO2YuCAmIOu5hOuwgOuyiO2YuCDtmZXsnbggaW5wdXQg64aS7J20XHJcbiAgLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMzhweDtcclxuICB9XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFudC1idG4tcHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZW1haWxGb3JtID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuYW50LWlucHV0IHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgd2lkdGg6IDQxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN1Ym1pdERpdiA9IGNzc2BcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuYW50LW1vZGFsLWNvbmZpcm0tYm9keS13cmFwcGVyXHJcbiAgICA+IC5hbnQtbW9kYWwtY29uZmlybS1ib2R5XHJcbiAgICA+IC5hbnQtbW9kYWwtY29uZmlybS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIGxvY2FsaG9zdDozMDAwL3NpZ251cFxyXG5jb25zdCBTaWduVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICAvLyBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2tdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIC8vIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICAvLyAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZS50cmltKCksXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICBjb25zdCB3b3JkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIHNldFBhc3N3b3JkKHdvcmQudHJpbSgpKTtcclxuICAgICAgY29uc29sZS5sb2cod29yZC50cmltKCkpO1xyXG4gICAgfSxcclxuICAgIFtwYXNzd29yZF1cclxuICApO1xyXG4gIC8vIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICAvLyBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAvLyAgIChlKSA9PiB7XHJcbiAgLy8gICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gIC8vICAgICAgIGNvbmZpcm06IGUudGFyZ2V0LnZhbHVlLnRyaW0oKSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUudHJpbSgpKTtcclxuICAvLyAgICAgY29uc29sZS5sb2cocGFzc3dvcmRDaGVjayk7XHJcbiAgLy8gICB9LFxyXG4gIC8vICAgW3Bhc3N3b3JkQ2hlY2tdXHJcbiAgLy8gKTtcclxuXHJcbiAgLy8g7KSR67O165CcIOyCrOyaqeyekOqwgCDsnojripTsp4AoZGlzcGF0Y2gpXHJcbiAgY29uc3QgW2R1cGxpY2F0ZVVzZXIsIHNldER1cGxpY2F0ZVVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBkdXBsaWNhdGVkSWQgPSAoKSA9PiB7XHJcbiAgICBzZXRFbWFpbCgoc3RhdGUpID0+ICcnKTtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICB9KTtcclxuICAgIE1vZGFsLmVycm9yKHtcclxuICAgICAgdGl0bGU6ICfsnbTrr7gg7IKs7Jqp7KSR7J24IOydtOuplOydvOyeheuLiOuLpC4nLFxyXG4gICAgICBvbk9rOiAoKSA9PiB7XHJcbiAgICAgICAgZW1haWxSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9uRHVwbGljYXRlZElkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcclxuICAgIHRhcmdldC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgTW9kYWwuc3VjY2Vzcyh7XHJcbiAgICAgIHRpdGxlOiAn7IKs7JqpIOqwgOuKpe2VnCDsnbTrqZTsnbzsnoXri4jri6QuJyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgLy8gdmFsdWVz64qUIHtlbWFpbDogXCJrc21zZWxmQHdpemxpdmUuY29tXCIsIHBhc3N3b3JkOiBcInNmc2ZzZnNcIiwgY29uZmlybTogXCJzZnNmc2ZzXCJ9XHJcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgdmFsdWVzIG9mIGZvcm06ICcsIHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtoZWFkZXJTdHlsZX0+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPFRpdGxlTG9nbyAvPlxyXG4gICAgICA8Rm9ybSBmb3JtPXtmb3JtfSBjc3M9e2Zvcm1TdHlsZX0gb25GaW5pc2g9e29uRmluaXNofSBzY3JvbGxUb0ZpcnN0RXJyb3I+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLslYTsnbTrlJQo7J2066mU7J28KVwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfsmKzrsJTrpbgg7J2066mU7J28IOyjvOyGjOulvCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yVhOydtOuUlCjsnbTrqZTsnbwp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtlbWFpbEZvcm19PlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1haWwtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgIHJlZj17ZW1haWxSZWZ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2R1cGxpY2F0ZVVzZXIgPyBkdXBsaWNhdGVkSWQgOiBub25EdXBsaWNhdGVkSWR9PlxyXG4gICAgICAgICAgICAgICAg7KSR67O17ZmV7J24XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+u5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG1pbjogOCxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnOOyekCDsnbTsg4HsnZgg66y47J6QLCDsiKvsnpAsIOq4sO2YuOuhnCDsnoXroKXtlbTso7zshLjsmpQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgd2hpdGVzcGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn7Iqk7Y6Y7J207Iqk7YKk66W8IOyeheugpe2VoCDsiJgg7JeG7Iq164uI64ukLicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI47J6QIOydtOyDgeydmCDrrLjsnpAsIOyIq+yekCwg6riw7Zi4XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJjb25maXJtXCJcclxuICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4IO2ZleyduFwiXHJcbiAgICAgICAgICBkZXBlbmRlbmNpZXM9e1sncGFzc3dvcmQnXX1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+u5hOuwgOuyiO2YuOulvCDtmZXsnbjtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoJ+yeheugpe2VmOyLoCDruYTrsIDrsojtmLjsmYAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpCEnKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDtlZwg67KIIOuNlCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGNzcz17c3VibWl0RGl2fT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBpZD1cInN1Ym1pdC1idG5cIlxyXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjc3M9e3JvdW5kQnRufVxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9