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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      checkClicked = _useState[0],
      setCheckClicked = _useState[1];

  var checkDuplicate = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_12__["CHECK_DUPLICATE_REQUEST"],
      data: form.getFieldValue('id')
    });
    setCheckClicked(true);
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
    var duplicateBtn = document.getElementById('duplicate-btn');

    if (form.getFieldValue('id') !== undefined && form.getFieldValue('id').length >= 6 && form.getFieldValue('id').length <= 11) {
      duplicateBtn.disabled = false;
    } else {
      duplicateBtn.disabled = true;
    }
  }, [form.getFieldValue('id')]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (checkDuplicateDone && checkClicked) {
      isDuplicated ? duplicatedId() : nonDuplicatedId();
    }

    setCheckClicked(false);
  }, [checkDuplicateDone, checkClicked, isDuplicated]);
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
      lineNumber: 242,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
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
              lineNumber: 265,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              id: "duplicate-btn",
              onClick: checkDuplicate,
              disabled: true,
              children: "\uC911\uBCF5\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
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
          lineNumber: 293,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
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
          lineNumber: 319,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
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
          lineNumber: 322,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 241,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "rufNNg9PyxOb2Of/gOGGFhh1W2E=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiaWRGb3JtIiwic3VibWl0RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTaWduVXAiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzaWduVXBEb25lIiwiY2hlY2tEdXBsaWNhdGVEb25lIiwiaXNEdXBsaWNhdGVkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiaWRSZWYiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNoZWNrQ2xpY2tlZCIsInNldENoZWNrQ2xpY2tlZCIsImNoZWNrRHVwbGljYXRlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QiLCJkYXRhIiwiZ2V0RmllbGRWYWx1ZSIsImR1cGxpY2F0ZWRJZCIsInNldEZpZWxkc1ZhbHVlIiwiaWQiLCJNb2RhbCIsImVycm9yIiwidGl0bGUiLCJvbk9rIiwiY3VycmVudCIsImZvY3VzIiwibm9uRHVwbGljYXRlZElkIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc2FibGVkIiwic3VjY2VzcyIsIm9uRmluaXNoIiwidmFsdWVzIiwiU0lHTl9VUF9SRVFVRVNUIiwicGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwiY29uZmlybSIsInVzZUVmZmVjdCIsImR1cGxpY2F0ZUJ0biIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm1lc3NhZ2UiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0IiwiZHVyYXRpb24iLCJyZXBsYWNlIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwicm91bmRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDBEQUFILG1CQUFqQjtBQVlBLElBQU1DLFNBQVMsR0FBR0QsMERBQUgsb0JBQWY7QUFrRUEsSUFBTUUsTUFBTSxHQUFHRiwwREFBSCxvQkFBWjtBQXNDQSxJQUFNRyxTQUFTLEdBQUdILDBEQUFILG9CQUFmO0FBZUEsSUFBTUksTUFBTSxHQUFHQywyRUFBSCxvQkFBWixDLENBUUE7O0tBUk1ELE07O0FBU04sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURtQixxQkFFc0NDLCtEQUFXLENBQ2xFLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FEa0UsQ0FGakQ7QUFBQSxNQUVYQyxVQUZXLGdCQUVYQSxVQUZXO0FBQUEsTUFFQ0Msa0JBRkQsZ0JBRUNBLGtCQUZEO0FBQUEsTUFFcUJDLFlBRnJCLGdCQUVxQkEsWUFGckI7O0FBQUEsc0JBTUpDLHlDQUFJLENBQUNDLE9BQUwsRUFOSTtBQUFBO0FBQUEsTUFNWkMsSUFOWTs7QUFPbkIsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxFQUFwQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBUm1CLGtCQVVxQkMsc0RBQVEsQ0FBQyxLQUFELENBVjdCO0FBQUEsTUFVWkMsWUFWWTtBQUFBLE1BVUVDLGVBVkY7O0FBV25CLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3ZDbkIsWUFBUSxDQUFDO0FBQ1BvQixVQUFJLEVBQUVDLHVFQURDO0FBRVBDLFVBQUksRUFBRVosSUFBSSxDQUFDYSxhQUFMLENBQW1CLElBQW5CO0FBRkMsS0FBRCxDQUFSO0FBSUFOLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0QsR0FOaUMsRUFNL0IsQ0FBQ1AsSUFBSSxDQUFDYSxhQUFMLENBQW1CLElBQW5CLENBQUQsQ0FOK0IsQ0FBbEM7O0FBUUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QmQsUUFBSSxDQUFDZSxjQUFMLENBQW9CO0FBQ2xCQyxRQUFFLEVBQUU7QUFEYyxLQUFwQjtBQUdBQyw4Q0FBSyxDQUFDQyxLQUFOLENBQVk7QUFDVkMsV0FBSyxFQUFFLGlCQURHO0FBRVZDLFVBQUksRUFBRSxnQkFBTTtBQUNWbkIsYUFBSyxDQUFDb0IsT0FBTixDQUFjQyxLQUFkO0FBQ0Q7QUFKUyxLQUFaO0FBTUQsR0FWRDs7QUFZQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBRixVQUFNLENBQUNHLFFBQVAsR0FBa0IsS0FBbEI7QUFDQVYsOENBQUssQ0FBQ1csT0FBTixDQUFjO0FBQ1pULFdBQUssRUFBRTtBQURLLEtBQWQ7QUFHRCxHQU5EOztBQVFBLE1BQU1VLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBWTtBQUMzQnhDLFlBQVEsQ0FBQztBQUNQb0IsVUFBSSxFQUFFcUIsK0RBREM7QUFFUG5CLFVBQUksRUFBRTtBQUNKSSxVQUFFLEVBQUVjLE1BQU0sQ0FBQ2QsRUFEUDtBQUVKZ0IsZ0JBQVEsRUFBRUYsTUFBTSxDQUFDRSxRQUZiO0FBR0pDLHFCQUFhLEVBQUVILE1BQU0sQ0FBQ0k7QUFIbEI7QUFGQyxLQUFELENBQVI7QUFRRCxHQVREOztBQVdBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFyQjs7QUFDQSxRQUNFMUIsSUFBSSxDQUFDYSxhQUFMLENBQW1CLElBQW5CLE1BQTZCd0IsU0FBN0IsSUFDQXJDLElBQUksQ0FBQ2EsYUFBTCxDQUFtQixJQUFuQixFQUF5QnlCLE1BQXpCLElBQW1DLENBRG5DLElBRUF0QyxJQUFJLENBQUNhLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUJ5QixNQUF6QixJQUFtQyxFQUhyQyxFQUlFO0FBQ0FGLGtCQUFZLENBQUNULFFBQWIsR0FBd0IsS0FBeEI7QUFDRCxLQU5ELE1BTU87QUFDTFMsa0JBQVksQ0FBQ1QsUUFBYixHQUF3QixJQUF4QjtBQUNEO0FBQ0YsR0FYUSxFQVdOLENBQUMzQixJQUFJLENBQUNhLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBRCxDQVhNLENBQVQ7QUFhQXNCLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUl2QyxrQkFBa0IsSUFBSVUsWUFBMUIsRUFBd0M7QUFDdENULGtCQUFZLEdBQUdpQixZQUFZLEVBQWYsR0FBb0JTLGVBQWUsRUFBL0M7QUFDRDs7QUFDRGhCLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0QsR0FMUSxFQUtOLENBQUNYLGtCQUFELEVBQXFCVSxZQUFyQixFQUFtQ1QsWUFBbkMsQ0FMTSxDQUFUO0FBT0FzQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJeEMsVUFBSixFQUFnQjtBQUNkLFVBQU1ELElBQUksR0FBR00sSUFBSSxDQUFDYSxhQUFMLENBQW1CLElBQW5CLENBQWI7QUFDQTBCLGtEQUFPLENBQUNYLE9BQVIsQ0FBZ0I7QUFDZFksZUFBTyxZQUFLOUMsSUFBTCxzRkFETztBQUVkK0MsaUJBQVMsRUFBRSxjQUZHO0FBR2RDLGFBQUssRUFBRTtBQUNMQyxtQkFBUyxFQUFFLE1BRE47QUFFTEMsb0JBQVUsRUFBRTtBQUZQLFNBSE87QUFPZEMsZ0JBQVEsRUFBRTtBQVBJLE9BQWhCO0FBU0ExQyxZQUFNLENBQUMyQyxPQUFQLENBQWUsR0FBZjtBQUNEO0FBQ0YsR0FkUSxFQWNOLENBQUNuRCxVQUFELENBZE0sQ0FBVDtBQWdCQSxTQUNFO0FBQUssT0FBRyxFQUFFYixXQUFWO0FBQUEsZUFDRSw4RUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLDhFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdFLDhFQUFDLHlDQUFEO0FBQU0sVUFBSSxFQUFFa0IsSUFBWjtBQUFrQixTQUFHLEVBQUVoQixTQUF2QjtBQUFrQyxjQUFRLEVBQUU2QyxRQUE1QztBQUFzRCx3QkFBa0IsTUFBeEU7QUFBQSxpQkFDRTtBQUFBLGtCQUNFLDhFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLGNBQUksRUFBQyxJQURQO0FBRUUsZUFBSyxFQUFDLG9CQUZSO0FBR0UsZUFBSyxFQUFFLENBQ0w7QUFDRWtCLGVBQUcsRUFBRSxDQURQO0FBRUVSLG1CQUFPLEVBQUU7QUFGWCxXQURLLEVBS0w7QUFDRVMsZUFBRyxFQUFFLEVBRFA7QUFFRVQsbUJBQU8sRUFBRTtBQUZYLFdBTEssRUFTTDtBQUNFVSxvQkFBUSxFQUFFLElBRFo7QUFFRVYsbUJBQU8sRUFBRTtBQUZYLFdBVEssQ0FIVDtBQUFBLG9CQWtCRTtBQUFLLGVBQUcsRUFBRXRELE1BQVY7QUFBQSx1QkFDRSw4RUFBQywwQ0FBRDtBQUNFLHVCQUFTLEVBQUMsVUFEWjtBQUVFLGtCQUFJLEVBQUMsSUFGUDtBQUdFLHlCQUFXLEVBQUMsdURBSGQ7QUFJRSxpQkFBRyxFQUFFZ0I7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBT0UsOEVBQUMsMkNBQUQ7QUFBUSxnQkFBRSxFQUFDLGVBQVg7QUFBMkIscUJBQU8sRUFBRU8sY0FBcEM7QUFBb0Qsc0JBQVEsTUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFrQ0UsOEVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxhQUFLLEVBQUMsMEJBRlI7QUFHRSxhQUFLLEVBQUUsQ0FDTDtBQUNFeUMsa0JBQVEsRUFBRSxJQURaO0FBRUVWLGlCQUFPLEVBQUU7QUFGWCxTQURLLEVBS0w7QUFDRVEsYUFBRyxFQUFFLENBRFA7QUFFRVIsaUJBQU8sRUFBRTtBQUZYLFNBTEssQ0FIVDtBQWFFLG1CQUFXLE1BYmI7QUFBQSxrQkFlRSw4RUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IscUJBQVcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRixFQW9ERSw4RUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLGFBQUssRUFBQyx1Q0FGUjtBQUdFLG9CQUFZLEVBQUUsQ0FBQyxVQUFELENBSGhCO0FBSUUsbUJBQVcsTUFKYjtBQUtFLGFBQUssRUFBRSxDQUNMO0FBQ0VVLGtCQUFRLEVBQUUsSUFEWjtBQUVFVixpQkFBTyxFQUFFO0FBRlgsU0FESyxFQUtMO0FBQUEsY0FBRzFCLGFBQUgsUUFBR0EsYUFBSDtBQUFBLGlCQUF3QjtBQUN0QnFDLHFCQURzQixxQkFDWkMsQ0FEWSxFQUNUQyxLQURTLEVBQ0Y7QUFDbEIsa0JBQUksQ0FBQ0EsS0FBRCxJQUFVdkMsYUFBYSxDQUFDLFVBQUQsQ0FBYixLQUE4QnVDLEtBQTVDLEVBQW1EO0FBQ2pELHVCQUFPQyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNEOztBQUVELHFCQUFPRCxPQUFPLENBQUNFLE1BQVIsQ0FDTCxJQUFJQyxLQUFKLENBQVUsdUJBQVYsQ0FESyxDQUFQO0FBR0Q7QUFUcUIsV0FBeEI7QUFBQSxTQUxLLENBTFQ7QUFBQSxrQkF1QkUsOEVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQWdCLHFCQUFXLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcERGLEVBNkVFLDhFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQUcsRUFBRXRFLFNBQWhCO0FBQUEsa0JBQ0UsOEVBQUMsMkNBQUQ7QUFDRSxjQUFJLEVBQUMsU0FEUDtBQUVFLFlBQUUsRUFBQyxZQUZMO0FBR0UsZUFBSyxFQUFDLE9BSFI7QUFJRSxrQkFBUSxFQUFDLFFBSlg7QUFLRSxhQUFHLEVBQUV1RSw0REFMUDtBQU1FLGtCQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0dELENBdExEOztHQUFNcEUsTTtVQUNhRSx1RCxFQUN3Q0MsdUQsRUFJMUNNLHlDQUFJLENBQUNDLE8sRUFFTEsscUQ7OztNQVJYZixNO0FBd0xTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuNTE2NzIyZDgyNzM3ZWU2OGFmOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgTW9kYWwsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IFRpdGxlTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlTG9nbyc7XHJcbmltcG9ydCB7IHJvdW5kQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBDSEVDS19EVVBMSUNBVEVfUkVRVUVTVCwgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IGNzc2BcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGZvcm1TdHlsZSA9IGNzc2BcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtaW5wdXQge1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWw6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDruYTrsIDrsojtmLggJiDruYTrsIDrsojtmLgg7ZmV7J24IGlucHV0IOuGkuydtFxyXG4gIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbS1oYXMtZXJyb3Ige1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbnQtYnRuLXByaW1hcnkge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGlkRm9ybSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmFudC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIHdpZHRoOiA0MTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdWJtaXREaXYgPSBjc3NgXHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLmFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tYm9keVxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBsb2NhbGhvc3Q6MzAwMC9zaWdudXBcclxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHNpZ25VcERvbmUsIGNoZWNrRHVwbGljYXRlRG9uZSwgaXNEdXBsaWNhdGVkIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUudXNlclxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IGlkUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtjaGVja0NsaWNrZWQsIHNldENoZWNrQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2hlY2tEdXBsaWNhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENIRUNLX0RVUExJQ0FURV9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtLmdldEZpZWxkVmFsdWUoJ2lkJyksXHJcbiAgICB9KTtcclxuICAgIHNldENoZWNrQ2xpY2tlZCh0cnVlKTtcclxuICB9LCBbZm9ybS5nZXRGaWVsZFZhbHVlKCdpZCcpXSk7XHJcblxyXG4gIGNvbnN0IGR1cGxpY2F0ZWRJZCA9ICgpID0+IHtcclxuICAgIGZvcm0uc2V0RmllbGRzVmFsdWUoe1xyXG4gICAgICBpZDogJycsXHJcbiAgICB9KTtcclxuICAgIE1vZGFsLmVycm9yKHtcclxuICAgICAgdGl0bGU6ICfsnbTrr7gg7IKs7Jqp7KSR7J24IOyVhOydtOuUlOyeheuLiOuLpC4nLFxyXG4gICAgICBvbk9rOiAoKSA9PiB7XHJcbiAgICAgICAgaWRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9uRHVwbGljYXRlZElkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcclxuICAgIHRhcmdldC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgTW9kYWwuc3VjY2Vzcyh7XHJcbiAgICAgIHRpdGxlOiAn7IKs7JqpIOqwgOuKpe2VnCDslYTsnbTrlJTsnoXri4jri6QuJyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogdmFsdWVzLmlkLFxyXG4gICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgcGFzc3dvcmRDaGVjazogdmFsdWVzLmNvbmZpcm0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZHVwbGljYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1cGxpY2F0ZS1idG4nKTtcclxuICAgIGlmIChcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKCdpZCcpICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgZm9ybS5nZXRGaWVsZFZhbHVlKCdpZCcpLmxlbmd0aCA+PSA2ICYmXHJcbiAgICAgIGZvcm0uZ2V0RmllbGRWYWx1ZSgnaWQnKS5sZW5ndGggPD0gMTFcclxuICAgICkge1xyXG4gICAgICBkdXBsaWNhdGVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGR1cGxpY2F0ZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSwgW2Zvcm0uZ2V0RmllbGRWYWx1ZSgnaWQnKV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrRHVwbGljYXRlRG9uZSAmJiBjaGVja0NsaWNrZWQpIHtcclxuICAgICAgaXNEdXBsaWNhdGVkID8gZHVwbGljYXRlZElkKCkgOiBub25EdXBsaWNhdGVkSWQoKTtcclxuICAgIH1cclxuICAgIHNldENoZWNrQ2xpY2tlZChmYWxzZSk7XHJcbiAgfSwgW2NoZWNrRHVwbGljYXRlRG9uZSwgY2hlY2tDbGlja2VkLCBpc0R1cGxpY2F0ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaWduVXBEb25lKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ2lkJyk7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2Vzcyh7XHJcbiAgICAgICAgY29udGVudDogYCR7dXNlcn3ri5gg7ZqM7JuQ6rCA7J6F7J20IOyZhOujjOuQmOyXiOyKteuLiOuLpC5gLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ2N1c3RvbS1jbGFzcycsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgIG1hcmdpblRvcDogJzQwdmgnLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgfVxyXG4gIH0sIFtzaWduVXBEb25lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17aGVhZGVyU3R5bGV9PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxUaXRsZUxvZ28gLz5cclxuICAgICAgPEZvcm0gZm9ybT17Zm9ybX0gY3NzPXtmb3JtU3R5bGV9IG9uRmluaXNoPXtvbkZpbmlzaH0gc2Nyb2xsVG9GaXJzdEVycm9yPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi7JWE7J2065SUXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDYsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SU64qUIDbsnpAg7J207IOB7J207Ja07JW8IO2VqeuLiOuLpC4nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxMSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcxMeyekCDsnbTrgrTroZwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2lkRm9ybX0+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpZC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI2IH4gMTHsnpAg66y47J6QLCDsiKvsnpAsIOq4sO2YuFwiXHJcbiAgICAgICAgICAgICAgICByZWY9e2lkUmVmfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImR1cGxpY2F0ZS1idG5cIiBvbkNsaWNrPXtjaGVja0R1cGxpY2F0ZX0gZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICDspJHrs7XtmZXsnbhcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWluOiA4LFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICc47J6QIOydtOyDgeydmCDrrLjsnpAsIOyIq+yekCwg6riw7Zi466GcIOyeheugpe2VtOyjvOyEuOyalCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgcGxhY2Vob2xkZXI9XCI47J6QIOydtOyDgeydmCDrrLjsnpAsIOyIq+yekCwg6riw7Zi4XCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cImNvbmZpcm1cIlxyXG4gICAgICAgICAgbGFiZWw9XCLruYTrsIDrsojtmLgg7ZmV7J24XCJcclxuICAgICAgICAgIGRlcGVuZGVuY2llcz17WydwYXNzd29yZCddfVxyXG4gICAgICAgICAgaGFzRmVlZGJhY2tcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IO2ZleyduO2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9yKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXHJcbiAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcign7J6F66Cl7ZWY7IugIOu5hOuwgOuyiO2YuOyZgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukIScpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7ZWcIOuyiCDrjZQg7J6F66Cl7ZW07KO87IS47JqUXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGNzcz17c3VibWl0RGl2fT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBpZD1cInN1Ym1pdC1idG5cIlxyXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjc3M9e3JvdW5kQnRufVxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9