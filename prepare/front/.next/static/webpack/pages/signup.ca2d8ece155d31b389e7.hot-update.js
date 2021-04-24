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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_TitleLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TitleLogo */ "./components/TitleLogo.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




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
var idForm = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
var submitDiv = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"])(_templateObject5()); // localhost:3000/signup

_c = Global;

var SignUp = function SignUp() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.user;
  }),
      signUpDone = _useSelector.signUpDone,
      checkDuplicateDone = _useSelector.checkDuplicateDone,
      isDuplicated = _useSelector.isDuplicated;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm(),
      _Form$useForm2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var idRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var checkDuplicate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_12__["CHECK_DUPLICATE_REQUEST"],
      data: form.getFieldValue('id')
    });
    setTimeout(function () {
      if (checkDuplicateDone) {
        isDuplicated ? duplicatedId() : nonDuplicatedId();
      }
    }, 300);
  }, [form.getFieldValue('id')]);

  var duplicatedId = function duplicatedId() {
    form.setFieldsValue({
      id: ''
    });
    antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].error({
      title: '이미 사용중인 아이디입니다.',
      onOk: function onOk() {
        idRef.current.focus();
      }
    });
  };

  var nonDuplicatedId = function nonDuplicatedId() {
    var target = document.getElementById('submit-btn');
    target.disabled = false;
    antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].success({
      title: '사용 가능한 아이디입니다.'
    });
  };

  var onFinish = function onFinish(values) {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_12__["SIGN_UP_REQUEST"],
      data: {
        id: values.id,
        password: values.password,
        passwordCheck: values.confirm
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (signUpDone) {
      var user = form.getFieldValue('id');
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].success({
        content: "".concat(user, "\uB2D8 \uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),
        className: 'custom-class',
        style: {
          marginTop: '40vh',
          fontWeight: 700
        },
        duration: 2
      });
      router.replace('/');
    }
  }, [signUpDone]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: headerStyle,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      form: form,
      css: formStyle,
      onFinish: onFinish,
      scrollToFirstError: true,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
          name: "id",
          label: "\uC544\uC774\uB514",
          rules: [{
            min: 6,
            message: '아이디는 6자 이상이어야 합니다.'
          }, {
            max: 11,
            message: '11자 이내로 입력해주세요!'
          }, {
            required: true,
            message: '아이디를 입력해주세요!'
          }],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: idForm,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              className: "id-input",
              type: "id",
              placeholder: "6 ~ 11\uC790 \uBB38\uC790, \uC22B\uC790, \uAE30\uD638",
              ref: idRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              onClick: checkDuplicate,
              children: "\uC911\uBCF5\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
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
        }],
        hasFeedback: true,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Password, {
          placeholder: "8\uC790 \uC774\uC0C1\uC758 \uBB38\uC790, \uC22B\uC790, \uAE30\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
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
          lineNumber: 300,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
        css: submitDiv,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          id: "submit-btn",
          shape: "round",
          htmlType: "submit",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_10__["roundBtn"],
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
      lineNumber: 227,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 224,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "nLq2oVMBUcxSerz/b2wjiIoFT84=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiaWRGb3JtIiwic3VibWl0RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTaWduVXAiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzaWduVXBEb25lIiwiY2hlY2tEdXBsaWNhdGVEb25lIiwiaXNEdXBsaWNhdGVkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiaWRSZWYiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGVja0R1cGxpY2F0ZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNIRUNLX0RVUExJQ0FURV9SRVFVRVNUIiwiZGF0YSIsImdldEZpZWxkVmFsdWUiLCJzZXRUaW1lb3V0IiwiZHVwbGljYXRlZElkIiwibm9uRHVwbGljYXRlZElkIiwic2V0RmllbGRzVmFsdWUiLCJpZCIsIk1vZGFsIiwiZXJyb3IiLCJ0aXRsZSIsIm9uT2siLCJjdXJyZW50IiwiZm9jdXMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZWQiLCJzdWNjZXNzIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJTSUdOX1VQX1JFUVVFU1QiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJjb25maXJtIiwidXNlRWZmZWN0IiwibWVzc2FnZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblRvcCIsImZvbnRXZWlnaHQiLCJkdXJhdGlvbiIsInJlcGxhY2UiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyb3VuZEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUdEO0FBVHFCLFdBQXhCO0FBQUEsU0FMSyxDQUxUO0FBQUEsa0JBdUJFLDhFQUFDLDBDQUFELENBQU8sUUFBUDtBQUFnQixxQkFBVyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxERixFQTJFRSw4RUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxXQUFHLEVBQUVqRSxTQUFoQjtBQUFBLGtCQUNFLDhFQUFDLDJDQUFEO0FBQ0UsY0FBSSxFQUFDLFNBRFA7QUFFRSxZQUFFLEVBQUMsWUFGTDtBQUdFLGVBQUssRUFBQyxPQUhSO0FBSUUsa0JBQVEsRUFBQyxRQUpYO0FBS0UsYUFBRyxFQUFFa0UsNERBTFA7QUFNRSxrQkFBUSxNQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThGRCxDQW5LRDs7R0FBTS9ELE07VUFDYUUsdUQsRUFDd0NDLHVELEVBSTFDTSx5Q0FBSSxDQUFDQyxPLEVBRUxLLHFEOzs7TUFSWGYsTTtBQXFLU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmNhMmQ4ZWNlMTU1ZDMxYjM4OWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIE1vZGFsLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBUaXRsZUxvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZUxvZ28nO1xyXG5pbXBvcnQgeyByb3VuZEJ0biB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QsIFNJR05fVVBfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSBjc3NgXHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmb3JtU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LWlucHV0IHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbS1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g67mE67CA67KI7Zi4ICYg67mE67CA67KI7Zi4IO2ZleyduCBpbnB1dCDrhpLsnbRcclxuICAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWJ0bi1wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBpZEZvcm0gPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5hbnQtaW5wdXQge1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICB3aWR0aDogNDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3VibWl0RGl2ID0gY3NzYFxyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cclxuICAuYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5hbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXJcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLWJvZHlcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gbG9jYWxob3N0OjMwMDAvc2lnbnVwXHJcbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBzaWduVXBEb25lLCBjaGVja0R1cGxpY2F0ZURvbmUsIGlzRHVwbGljYXRlZCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnVzZXJcclxuICApO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBpZFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBjaGVja0R1cGxpY2F0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm0uZ2V0RmllbGRWYWx1ZSgnaWQnKSxcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChjaGVja0R1cGxpY2F0ZURvbmUpIHtcclxuICAgICAgICBpc0R1cGxpY2F0ZWQgPyBkdXBsaWNhdGVkSWQoKSA6IG5vbkR1cGxpY2F0ZWRJZCgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAzMDApO1xyXG4gIH0sIFtmb3JtLmdldEZpZWxkVmFsdWUoJ2lkJyldKTtcclxuXHJcbiAgY29uc3QgZHVwbGljYXRlZElkID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgIH0pO1xyXG4gICAgTW9kYWwuZXJyb3Ioe1xyXG4gICAgICB0aXRsZTogJ+ydtOuvuCDsgqzsmqnspJHsnbgg7JWE7J2065SU7J6F64uI64ukLicsXHJcbiAgICAgIG9uT2s6ICgpID0+IHtcclxuICAgICAgICBpZFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub25EdXBsaWNhdGVkSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpO1xyXG4gICAgdGFyZ2V0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBNb2RhbC5zdWNjZXNzKHtcclxuICAgICAgdGl0bGU6ICfsgqzsmqkg6rCA64ql7ZWcIOyVhOydtOuUlOyeheuLiOuLpC4nLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB2YWx1ZXMuaWQsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICBwYXNzd29yZENoZWNrOiB2YWx1ZXMuY29uZmlybSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lnblVwRG9uZSkge1xyXG4gICAgICBjb25zdCB1c2VyID0gZm9ybS5nZXRGaWVsZFZhbHVlKCdpZCcpO1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3Moe1xyXG4gICAgICAgIGNvbnRlbnQ6IGAke3VzZXJ964uYIO2ajOybkOqwgOyeheydtCDsmYTro4zrkJjsl4jsirXri4jri6QuYCxcclxuICAgICAgICBjbGFzc05hbWU6ICdjdXN0b20tY2xhc3MnLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICc0MHZoJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICB9KTtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgIH1cclxuICB9LCBbc2lnblVwRG9uZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2hlYWRlclN0eWxlfT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8VGl0bGVMb2dvIC8+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm19IGNzcz17Zm9ybVN0eWxlfSBvbkZpbmlzaD17b25GaW5pc2h9IHNjcm9sbFRvRmlyc3RFcnJvcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwiaWRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluOiA2LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yVhOydtOuUlOuKlCA27J6QIOydtOyDgeydtOyWtOyVvCDtlanri4jri6QuJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heDogMTEsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnMTHsnpAg7J2064K066GcIOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtpZEZvcm19PlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImlkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNiB+IDEx7J6QIOusuOyekCwg7Iir7J6QLCDquLDtmLhcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtpZFJlZn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y2hlY2tEdXBsaWNhdGV9Puykkeuzte2ZleyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbGFiZWw9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBtaW46IDgsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJzjsnpAg7J207IOB7J2YIOusuOyekCwg7Iir7J6QLCDquLDtmLjroZwg7J6F66Cl7ZW07KO87IS47JqUJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cIjjsnpAg7J207IOB7J2YIOusuOyekCwg7Iir7J6QLCDquLDtmLhcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVwiXHJcbiAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIlxyXG4gICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcclxuICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCfsnoXroKXtlZjsi6Ag67mE67CA67KI7Zi47JmAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QhJylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDtlZwg67KIIOuNlCDsnoXroKXtlbTso7zshLjsmpRcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gY3NzPXtzdWJtaXREaXZ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNzcz17cm91bmRCdG59XHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=