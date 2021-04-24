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
      console.log('settimeout 실행중');
      console.log(checkDuplicateDone);

      if (checkDuplicateDone) {
        isDuplicated ? duplicatedId() : nonDuplicatedId();
      }
    }, 100);
  }, [form.getFieldValue('id'), checkDuplicateDone, isDuplicated]);

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
      lineNumber: 227,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
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
              lineNumber: 250,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              onClick: checkDuplicate,
              children: "\uC911\uBCF5\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
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
          lineNumber: 276,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
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
          lineNumber: 302,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
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
          lineNumber: 305,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 226,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiaWRGb3JtIiwic3VibWl0RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTaWduVXAiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzaWduVXBEb25lIiwiY2hlY2tEdXBsaWNhdGVEb25lIiwiaXNEdXBsaWNhdGVkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiaWRSZWYiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGVja0R1cGxpY2F0ZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNIRUNLX0RVUExJQ0FURV9SRVFVRVNUIiwiZGF0YSIsImdldEZpZWxkVmFsdWUiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImR1cGxpY2F0ZWRJZCIsIm5vbkR1cGxpY2F0ZWRJZCIsInNldEZpZWxkc1ZhbHVlIiwiaWQiLCJNb2RhbCIsImVycm9yIiwidGl0bGUiLCJvbk9rIiwiY3VycmVudCIsImZvY3VzIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc2FibGVkIiwic3VjY2VzcyIsIm9uRmluaXNoIiwidmFsdWVzIiwiU0lHTl9VUF9SRVFVRVNUIiwicGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwiY29uZmlybSIsInVzZUVmZmVjdCIsIm1lc3NhZ2UiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0IiwiZHVyYXRpb24iLCJyZXBsYWNlIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwicm91bmRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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NUMsRUFBbUQ7QUFDakQsdUJBQU9DLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0Q7O0FBRUQscUJBQU9ELE9BQU8sQ0FBQ0UsTUFBUixDQUNMLElBQUlDLEtBQUosQ0FBVSx1QkFBVixDQURLLENBQVA7QUFHRDtBQVRxQixXQUF4QjtBQUFBLFNBTEssQ0FMVDtBQUFBLGtCQXVCRSw4RUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IscUJBQVcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsREYsRUEyRUUsOEVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBRyxFQUFFbkUsU0FBaEI7QUFBQSxrQkFDRSw4RUFBQywyQ0FBRDtBQUNFLGNBQUksRUFBQyxTQURQO0FBRUUsWUFBRSxFQUFDLFlBRkw7QUFHRSxlQUFLLEVBQUMsT0FIUjtBQUlFLGtCQUFRLEVBQUMsUUFKWDtBQUtFLGFBQUcsRUFBRW9FLDREQUxQO0FBTUUsa0JBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4RkQsQ0FyS0Q7O0dBQU1qRSxNO1VBQ2FFLHVELEVBQ3dDQyx1RCxFQUkxQ00seUNBQUksQ0FBQ0MsTyxFQUVMSyxxRDs7O01BUlhmLE07QUF1S1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC45ODY4NjJjYWYyZGExZDhmODI2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBNb2RhbCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgVGl0bGVMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVMb2dvJztcclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IENIRUNLX0RVUExJQ0FURV9SRVFVRVNULCBTSUdOX1VQX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0gY3NzYFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZm9ybVN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAyODBweDtcclxuICBtYXJnaW46IDQwcHggYXV0byAwO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFudC1pbnB1dCB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOu5hOuwgOuyiO2YuCAmIOu5hOuwgOuyiO2YuCDtmZXsnbggaW5wdXQg64aS7J20XHJcbiAgLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMzhweDtcclxuICB9XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFudC1idG4tcHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgaWRGb3JtID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuYW50LWlucHV0IHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgd2lkdGg6IDQxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN1Ym1pdERpdiA9IGNzc2BcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuYW50LW1vZGFsLWNvbmZpcm0tYm9keS13cmFwcGVyXHJcbiAgICA+IC5hbnQtbW9kYWwtY29uZmlybS1ib2R5XHJcbiAgICA+IC5hbnQtbW9kYWwtY29uZmlybS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIGxvY2FsaG9zdDozMDAwL3NpZ251cFxyXG5jb25zdCBTaWduVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgc2lnblVwRG9uZSwgY2hlY2tEdXBsaWNhdGVEb25lLCBpc0R1cGxpY2F0ZWQgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS51c2VyXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgaWRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgY2hlY2tEdXBsaWNhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENIRUNLX0RVUExJQ0FURV9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtLmdldEZpZWxkVmFsdWUoJ2lkJyksXHJcbiAgICB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnc2V0dGltZW91dCDsi6TtlonspJEnKTtcclxuICAgICAgY29uc29sZS5sb2coY2hlY2tEdXBsaWNhdGVEb25lKTtcclxuICAgICAgaWYgKGNoZWNrRHVwbGljYXRlRG9uZSkge1xyXG4gICAgICAgIGlzRHVwbGljYXRlZCA/IGR1cGxpY2F0ZWRJZCgpIDogbm9uRHVwbGljYXRlZElkKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbiAgfSwgW2Zvcm0uZ2V0RmllbGRWYWx1ZSgnaWQnKSwgY2hlY2tEdXBsaWNhdGVEb25lLCBpc0R1cGxpY2F0ZWRdKTtcclxuXHJcbiAgY29uc3QgZHVwbGljYXRlZElkID0gKCkgPT4ge1xyXG4gICAgZm9ybS5zZXRGaWVsZHNWYWx1ZSh7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgIH0pO1xyXG4gICAgTW9kYWwuZXJyb3Ioe1xyXG4gICAgICB0aXRsZTogJ+ydtOuvuCDsgqzsmqnspJHsnbgg7JWE7J2065SU7J6F64uI64ukLicsXHJcbiAgICAgIG9uT2s6ICgpID0+IHtcclxuICAgICAgICBpZFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBub25EdXBsaWNhdGVkSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpO1xyXG4gICAgdGFyZ2V0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBNb2RhbC5zdWNjZXNzKHtcclxuICAgICAgdGl0bGU6ICfsgqzsmqkg6rCA64ql7ZWcIOyVhOydtOuUlOyeheuLiOuLpC4nLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB2YWx1ZXMuaWQsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICBwYXNzd29yZENoZWNrOiB2YWx1ZXMuY29uZmlybSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lnblVwRG9uZSkge1xyXG4gICAgICBjb25zdCB1c2VyID0gZm9ybS5nZXRGaWVsZFZhbHVlKCdpZCcpO1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3Moe1xyXG4gICAgICAgIGNvbnRlbnQ6IGAke3VzZXJ964uYIO2ajOybkOqwgOyeheydtCDsmYTro4zrkJjsl4jsirXri4jri6QuYCxcclxuICAgICAgICBjbGFzc05hbWU6ICdjdXN0b20tY2xhc3MnLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICc0MHZoJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICB9KTtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgIH1cclxuICB9LCBbc2lnblVwRG9uZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2hlYWRlclN0eWxlfT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8VGl0bGVMb2dvIC8+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm19IGNzcz17Zm9ybVN0eWxlfSBvbkZpbmlzaD17b25GaW5pc2h9IHNjcm9sbFRvRmlyc3RFcnJvcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBuYW1lPVwiaWRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluOiA2LFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yVhOydtOuUlOuKlCA27J6QIOydtOyDgeydtOyWtOyVvCDtlanri4jri6QuJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heDogMTEsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnMTHsnpAg7J2064K066GcIOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXtpZEZvcm19PlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImlkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNiB+IDEx7J6QIOusuOyekCwg7Iir7J6QLCDquLDtmLhcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtpZFJlZn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y2hlY2tEdXBsaWNhdGV9Puykkeuzte2ZleyduDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbGFiZWw9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBtaW46IDgsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJzjsnpAg7J207IOB7J2YIOusuOyekCwg7Iir7J6QLCDquLDtmLjroZwg7J6F66Cl7ZW07KO87IS47JqUJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cIjjsnpAg7J207IOB7J2YIOusuOyekCwg7Iir7J6QLCDquLDtmLhcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVwiXHJcbiAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIlxyXG4gICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcclxuICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCfsnoXroKXtlZjsi6Ag67mE67CA67KI7Zi47JmAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QhJylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDtlZwg67KIIOuNlCDsnoXroKXtlbTso7zshLjsmpRcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gY3NzPXtzdWJtaXREaXZ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNzcz17cm91bmRCdG59XHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=