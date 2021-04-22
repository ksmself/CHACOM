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
    console.log(password);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiZW1haWxGb3JtIiwic3VibWl0RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTaWduVXAiLCJGb3JtIiwidXNlRm9ybSIsImZvcm0iLCJlbWFpbFJlZiIsInVzZVJlZiIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VDYWxsYmFjayIsImUiLCJ3b3JkIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsImR1cGxpY2F0ZVVzZXIiLCJzZXREdXBsaWNhdGVVc2VyIiwiZHVwbGljYXRlZElkIiwic2V0RW1haWwiLCJzdGF0ZSIsInNldEZpZWxkc1ZhbHVlIiwiTW9kYWwiLCJlcnJvciIsInRpdGxlIiwib25PayIsImN1cnJlbnQiLCJmb2N1cyIsIm5vbkR1cGxpY2F0ZWRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNhYmxlZCIsInN1Y2Nlc3MiLCJvbkZpbmlzaCIsInZhbHVlcyIsInR5cGUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJtaW4iLCJ3aGl0ZXNwYWNlIiwiZ2V0RmllbGRWYWx1ZSIsInZhbGlkYXRvciIsIl8iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwicm91bmRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBHRCxDQXRLRDs7R0FBTXRELE07VUFDV0MseUNBQUksQ0FBQ0MsTyxFQUdXSSx1RCxFQUVnQkEsdUQ7OztNQU4zQ04sTTtBQXdLU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmQ1NTg5Njk5ZWVmZjQzNDNlMWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFRpdGxlTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlTG9nbyc7XHJcbmltcG9ydCB7IHJvdW5kQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSBjc3NgXHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmb3JtU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LWlucHV0IHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbS1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g67mE67CA67KI7Zi4ICYg67mE67CA67KI7Zi4IO2ZleyduCBpbnB1dCDrhpLsnbRcclxuICAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWJ0bi1wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBlbWFpbEZvcm0gPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5hbnQtaW5wdXQge1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICB3aWR0aDogNDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3VibWl0RGl2ID0gY3NzYFxyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cclxuICAuYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5hbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXJcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLWJvZHlcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gbG9jYWxob3N0OjMwMDAvc2lnbnVwXHJcbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBlbWFpbFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gIC8vIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIG9uQ2hhbmdlUGFzc3dvcmRDaGVja10gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgLy8gZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIC8vICAgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLnRyaW0oKSxcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIGNvbnN0IHdvcmQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgc2V0UGFzc3dvcmQod29yZC50cmltKCkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwYXNzd29yZCk7XHJcbiAgICB9LFxyXG4gICAgW3Bhc3N3b3JkXVxyXG4gICk7XHJcbiAgLy8gY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIC8vIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gIC8vICAgKGUpID0+IHtcclxuICAvLyAgICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgLy8gICAgICAgY29uZmlybTogZS50YXJnZXQudmFsdWUudHJpbSgpLFxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZS50cmltKCkpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhwYXNzd29yZENoZWNrKTtcclxuICAvLyAgIH0sXHJcbiAgLy8gICBbcGFzc3dvcmRDaGVja11cclxuICAvLyApO1xyXG5cclxuICAvLyDspJHrs7XrkJwg7IKs7Jqp7J6Q6rCAIOyeiOuKlOyngChkaXNwYXRjaClcclxuICBjb25zdCBbZHVwbGljYXRlVXNlciwgc2V0RHVwbGljYXRlVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGR1cGxpY2F0ZWRJZCA9ICgpID0+IHtcclxuICAgIHNldEVtYWlsKChzdGF0ZSkgPT4gJycpO1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgIH0pO1xyXG4gICAgTW9kYWwuZXJyb3Ioe1xyXG4gICAgICB0aXRsZTogJ+ydtOuvuCDsgqzsmqnspJHsnbgg7J2066mU7J287J6F64uI64ukLicsXHJcbiAgICAgIG9uT2s6ICgpID0+IHtcclxuICAgICAgICBlbWFpbFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub25EdXBsaWNhdGVkSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpO1xyXG4gICAgdGFyZ2V0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBNb2RhbC5zdWNjZXNzKHtcclxuICAgICAgdGl0bGU6ICfsgqzsmqkg6rCA64ql7ZWcIOydtOuplOydvOyeheuLiOuLpC4nLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICAvLyB2YWx1ZXPripQge2VtYWlsOiBcImtzbXNlbGZAd2l6bGl2ZS5jb21cIiwgcGFzc3dvcmQ6IFwic2ZzZnNmc1wiLCBjb25maXJtOiBcInNmc2ZzZnNcIn1cclxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2hlYWRlclN0eWxlfT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8VGl0bGVMb2dvIC8+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm19IGNzcz17Zm9ybVN0eWxlfSBvbkZpbmlzaD17b25GaW5pc2h9IHNjcm9sbFRvRmlyc3RFcnJvcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuyVhOydtOuUlCjsnbTrqZTsnbwpXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yYrOuwlOuluCDsnbTrqZTsnbwg7KO87IaM66W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SUKOydtOuplOydvCnsnYQg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2VtYWlsRm9ybX0+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbWFpbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtlbWFpbFJlZn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZHVwbGljYXRlVXNlciA/IGR1cGxpY2F0ZWRJZCA6IG5vbkR1cGxpY2F0ZWRJZH0+XHJcbiAgICAgICAgICAgICAgICDspJHrs7XtmZXsnbhcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWluOiA4LFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICc47J6QIOydtOyDgeydmCDrrLjsnpAsIOyIq+yekCwg6riw7Zi466GcIOyeheugpe2VtOyjvOyEuOyalCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB3aGl0ZXNwYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfsiqTtjpjsnbTsiqTtgqTrpbwg7J6F66Cl7ZWgIOyImCDsl4bsirXri4jri6QuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjjsnpAg7J207IOB7J2YIOusuOyekCwg7Iir7J6QLCDquLDtmLhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cImNvbmZpcm1cIlxyXG4gICAgICAgICAgbGFiZWw9XCLruYTrsIDrsojtmLgg7ZmV7J24XCJcclxuICAgICAgICAgIGRlcGVuZGVuY2llcz17WydwYXNzd29yZCddfVxyXG4gICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IO2ZleyduO2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcign7J6F66Cl7ZWY7IugIOu5hOuwgOuyiO2YuOyZgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukIScpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IO2VnCDrsogg642UIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gY3NzPXtzdWJtaXREaXZ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNzcz17cm91bmRCdG59XHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=