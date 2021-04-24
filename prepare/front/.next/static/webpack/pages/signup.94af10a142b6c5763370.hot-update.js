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

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var duplicateBtn = document.getElementById('duplicate-btn');

    if (id.length >= 6 && id.length <= 11) {
      duplicateBtn.disabled = false;
    } else {
      duplicateBtn.disabled = true;
    }
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (checkDuplicateDone && checkClicked) {
      isDuplicated ? duplicatedId() : nonDuplicatedId();
    }

    setCheckClicked(false);
  }, [checkDuplicateDone, checkClicked, isDuplicated]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (signUpDone) {
      router.replace('/');
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
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_12__["SIGN_UP_END"]
      });
    }
  }, [signUpDone]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: headerStyle,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
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
              value: id,
              onChange: onChangeId,
              placeholder: "6 ~ 11\uC790 \uBB38\uC790, \uC22B\uC790, \uAE30\uD638",
              ref: idRef
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              id: "duplicate-btn",
              onClick: checkDuplicate,
              children: "\uC911\uBCF5\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
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
          lineNumber: 299,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
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
          lineNumber: 325,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
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
          lineNumber: 328,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 245,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "vhzihOfy4HRP/sIu9kyCaxy3tVI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], antd__WEBPACK_IMPORTED_MODULE_5__["Form"].useForm, next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiaWRGb3JtIiwic3VibWl0RGl2IiwiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJTaWduVXAiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzaWduVXBEb25lIiwiY2hlY2tEdXBsaWNhdGVEb25lIiwiaXNEdXBsaWNhdGVkIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwiaWRSZWYiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNoZWNrQ2xpY2tlZCIsInNldENoZWNrQ2xpY2tlZCIsImNoZWNrRHVwbGljYXRlIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QiLCJkYXRhIiwiZ2V0RmllbGRWYWx1ZSIsImR1cGxpY2F0ZWRJZCIsInNldEZpZWxkc1ZhbHVlIiwiaWQiLCJNb2RhbCIsImVycm9yIiwidGl0bGUiLCJvbk9rIiwiY3VycmVudCIsImZvY3VzIiwibm9uRHVwbGljYXRlZElkIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc2FibGVkIiwic3VjY2VzcyIsIm9uRmluaXNoIiwidmFsdWVzIiwiU0lHTl9VUF9SRVFVRVNUIiwicGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwiY29uZmlybSIsInVzZUlucHV0Iiwib25DaGFuZ2VJZCIsInVzZUVmZmVjdCIsImR1cGxpY2F0ZUJ0biIsImxlbmd0aCIsInJlcGxhY2UiLCJtZXNzYWdlIiwiY29udGVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCIsImR1cmF0aW9uIiwiU0lHTl9VUF9FTkQiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsIl8iLCJ2YWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyb3VuZEJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCO0FBWUEsSUFBTUMsU0FBUyxHQUFHRCwwREFBSCxvQkFBZjtBQWtFQSxJQUFNRSxNQUFNLEdBQUdGLDBEQUFILG9CQUFaO0FBc0NBLElBQU1HLFNBQVMsR0FBR0gsMERBQUgsb0JBQWY7QUFlQSxJQUFNSSxNQUFNLEdBQUdDLDJFQUFILG9CQUFaLEMsQ0FRQTs7S0FSTUQsTTs7QUFTTixJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRG1CLHFCQUVzQ0MsK0RBQVcsQ0FDbEUsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQURrRSxDQUZqRDtBQUFBLE1BRVhDLFVBRlcsZ0JBRVhBLFVBRlc7QUFBQSxNQUVDQyxrQkFGRCxnQkFFQ0Esa0JBRkQ7QUFBQSxNQUVxQkMsWUFGckIsZ0JBRXFCQSxZQUZyQjs7QUFBQSxzQkFNSkMseUNBQUksQ0FBQ0MsT0FBTCxFQU5JO0FBQUE7QUFBQSxNQU1aQyxJQU5ZOztBQU9uQixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLEVBQXBCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFSbUIsa0JBVXFCQyxzREFBUSxDQUFDLEtBQUQsQ0FWN0I7QUFBQSxNQVVaQyxZQVZZO0FBQUEsTUFVRUMsZUFWRjs7QUFXbkIsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdkNuQixZQUFRLENBQUM7QUFDUG9CLFVBQUksRUFBRUMsdUVBREM7QUFFUEMsVUFBSSxFQUFFWixJQUFJLENBQUNhLGFBQUwsQ0FBbUIsSUFBbkI7QUFGQyxLQUFELENBQVI7QUFJQU4sbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDRCxHQU5pQyxFQU0vQixDQUFDUCxJQUFJLENBQUNhLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBRCxDQU4rQixDQUFsQzs7QUFRQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCZCxRQUFJLENBQUNlLGNBQUwsQ0FBb0I7QUFDbEJDLFFBQUUsRUFBRTtBQURjLEtBQXBCO0FBR0FDLDhDQUFLLENBQUNDLEtBQU4sQ0FBWTtBQUNWQyxXQUFLLEVBQUUsaUJBREc7QUFFVkMsVUFBSSxFQUFFLGdCQUFNO0FBQ1ZuQixhQUFLLENBQUNvQixPQUFOLENBQWNDLEtBQWQ7QUFDRDtBQUpTLEtBQVo7QUFNRCxHQVZEOztBQVlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFmO0FBQ0FGLFVBQU0sQ0FBQ0csUUFBUCxHQUFrQixLQUFsQjtBQUNBViw4Q0FBSyxDQUFDVyxPQUFOLENBQWM7QUFDWlQsV0FBSyxFQUFFO0FBREssS0FBZDtBQUdELEdBTkQ7O0FBUUEsTUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzNCeEMsWUFBUSxDQUFDO0FBQ1BvQixVQUFJLEVBQUVxQiwrREFEQztBQUVQbkIsVUFBSSxFQUFFO0FBQ0pJLFVBQUUsRUFBRWMsTUFBTSxDQUFDZCxFQURQO0FBRUpnQixnQkFBUSxFQUFFRixNQUFNLENBQUNFLFFBRmI7QUFHSkMscUJBQWEsRUFBRUgsTUFBTSxDQUFDSTtBQUhsQjtBQUZDLEtBQUQsQ0FBUjtBQVFELEdBVEQ7O0FBdkNtQixrQkFrRE1DLGdFQUFRLENBQUMsRUFBRCxDQWxEZDtBQUFBO0FBQUEsTUFrRFpuQixFQWxEWTtBQUFBLE1Ba0RSb0IsVUFsRFE7O0FBbURuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHYixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBckI7O0FBQ0EsUUFBSVYsRUFBRSxDQUFDdUIsTUFBSCxJQUFhLENBQWIsSUFBa0J2QixFQUFFLENBQUN1QixNQUFILElBQWEsRUFBbkMsRUFBdUM7QUFDckNELGtCQUFZLENBQUNYLFFBQWIsR0FBd0IsS0FBeEI7QUFDRCxLQUZELE1BRU87QUFDTFcsa0JBQVksQ0FBQ1gsUUFBYixHQUF3QixJQUF4QjtBQUNEO0FBQ0YsR0FQUSxFQU9OLENBQUNYLEVBQUQsQ0FQTSxDQUFUO0FBU0FxQix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJekMsa0JBQWtCLElBQUlVLFlBQTFCLEVBQXdDO0FBQ3RDVCxrQkFBWSxHQUFHaUIsWUFBWSxFQUFmLEdBQW9CUyxlQUFlLEVBQS9DO0FBQ0Q7O0FBQ0RoQixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBTFEsRUFLTixDQUFDWCxrQkFBRCxFQUFxQlUsWUFBckIsRUFBbUNULFlBQW5DLENBTE0sQ0FBVDtBQU9Bd0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTFDLFVBQUosRUFBZ0I7QUFDZFEsWUFBTSxDQUFDcUMsT0FBUCxDQUFlLEdBQWY7QUFDQSxVQUFNOUMsSUFBSSxHQUFHTSxJQUFJLENBQUNhLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBYjtBQUNBNEIsa0RBQU8sQ0FBQ2IsT0FBUixDQUFnQjtBQUNkYyxlQUFPLFlBQUtoRCxJQUFMLHNGQURPO0FBRWRpRCxpQkFBUyxFQUFFLGNBRkc7QUFHZEMsYUFBSyxFQUFFO0FBQ0xDLG1CQUFTLEVBQUUsTUFETjtBQUVMQyxvQkFBVSxFQUFFO0FBRlAsU0FITztBQU9kQyxnQkFBUSxFQUFFO0FBUEksT0FBaEI7QUFTQXpELGNBQVEsQ0FBQztBQUNQb0IsWUFBSSxFQUFFc0MsMkRBQVdBO0FBRFYsT0FBRCxDQUFSO0FBR0Q7QUFDRixHQWpCUSxFQWlCTixDQUFDckQsVUFBRCxDQWpCTSxDQUFUO0FBbUJBLFNBQ0U7QUFBSyxPQUFHLEVBQUViLFdBQVY7QUFBQSxlQUNFLDhFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsOEVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBR0UsOEVBQUMseUNBQUQ7QUFBTSxVQUFJLEVBQUVrQixJQUFaO0FBQWtCLFNBQUcsRUFBRWhCLFNBQXZCO0FBQWtDLGNBQVEsRUFBRTZDLFFBQTVDO0FBQXNELHdCQUFrQixNQUF4RTtBQUFBLGlCQUNFO0FBQUEsa0JBQ0UsOEVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsY0FBSSxFQUFDLElBRFA7QUFFRSxlQUFLLEVBQUMsb0JBRlI7QUFHRSxlQUFLLEVBQUUsQ0FDTDtBQUNFb0IsZUFBRyxFQUFFLENBRFA7QUFFRVIsbUJBQU8sRUFBRTtBQUZYLFdBREssRUFLTDtBQUNFUyxlQUFHLEVBQUUsRUFEUDtBQUVFVCxtQkFBTyxFQUFFO0FBRlgsV0FMSyxFQVNMO0FBQ0VVLG9CQUFRLEVBQUUsSUFEWjtBQUVFVixtQkFBTyxFQUFFO0FBRlgsV0FUSyxDQUhUO0FBQUEsb0JBa0JFO0FBQUssZUFBRyxFQUFFeEQsTUFBVjtBQUFBLHVCQUNFLDhFQUFDLDBDQUFEO0FBQ0UsdUJBQVMsRUFBQyxVQURaO0FBRUUsa0JBQUksRUFBQyxJQUZQO0FBR0UsbUJBQUssRUFBRStCLEVBSFQ7QUFJRSxzQkFBUSxFQUFFb0IsVUFKWjtBQUtFLHlCQUFXLEVBQUMsdURBTGQ7QUFNRSxpQkFBRyxFQUFFbkM7QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBU0UsOEVBQUMsMkNBQUQ7QUFBUSxnQkFBRSxFQUFDLGVBQVg7QUFBMkIscUJBQU8sRUFBRU8sY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFvQ0UsOEVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxhQUFLLEVBQUMsMEJBRlI7QUFHRSxhQUFLLEVBQUUsQ0FDTDtBQUNFMkMsa0JBQVEsRUFBRSxJQURaO0FBRUVWLGlCQUFPLEVBQUU7QUFGWCxTQURLLEVBS0w7QUFDRVEsYUFBRyxFQUFFLENBRFA7QUFFRVIsaUJBQU8sRUFBRTtBQUZYLFNBTEssQ0FIVDtBQWFFLG1CQUFXLE1BYmI7QUFBQSxrQkFlRSw4RUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFBZ0IscUJBQVcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDRixFQXNERSw4RUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLGFBQUssRUFBQyx1Q0FGUjtBQUdFLG9CQUFZLEVBQUUsQ0FBQyxVQUFELENBSGhCO0FBSUUsbUJBQVcsTUFKYjtBQUtFLGFBQUssRUFBRSxDQUNMO0FBQ0VVLGtCQUFRLEVBQUUsSUFEWjtBQUVFVixpQkFBTyxFQUFFO0FBRlgsU0FESyxFQUtMO0FBQUEsY0FBRzVCLGFBQUgsUUFBR0EsYUFBSDtBQUFBLGlCQUF3QjtBQUN0QnVDLHFCQURzQixxQkFDWkMsQ0FEWSxFQUNUQyxLQURTLEVBQ0Y7QUFDbEIsa0JBQUksQ0FBQ0EsS0FBRCxJQUFVekMsYUFBYSxDQUFDLFVBQUQsQ0FBYixLQUE4QnlDLEtBQTVDLEVBQW1EO0FBQ2pELHVCQUFPQyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNEOztBQUVELHFCQUFPRCxPQUFPLENBQUNFLE1BQVIsQ0FDTCxJQUFJQyxLQUFKLENBQVUsdUJBQVYsQ0FESyxDQUFQO0FBR0Q7QUFUcUIsV0FBeEI7QUFBQSxTQUxLLENBTFQ7QUFBQSxrQkF1QkUsOEVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQWdCLHFCQUFXLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdERGLEVBK0VFLDhFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFdBQUcsRUFBRXhFLFNBQWhCO0FBQUEsa0JBQ0UsOEVBQUMsMkNBQUQ7QUFDRSxjQUFJLEVBQUMsU0FEUDtBQUVFLFlBQUUsRUFBQyxZQUZMO0FBR0UsZUFBSyxFQUFDLE9BSFI7QUFJRSxrQkFBUSxFQUFDLFFBSlg7QUFLRSxhQUFHLEVBQUV5RSw0REFMUDtBQU1FLGtCQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0dELENBeExEOztHQUFNdEUsTTtVQUNhRSx1RCxFQUN3Q0MsdUQsRUFJMUNNLHlDQUFJLENBQUNDLE8sRUFFTEsscUQsRUEwQ1UrQix3RDs7O01BbERyQjlDLE07QUEwTFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC45NGFmMTBhMTQyYjZjNTc2MzM3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBNb2RhbCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgVGl0bGVMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVMb2dvJztcclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9FTkQsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgaGVhZGVyU3R5bGUgPSBjc3NgXHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmb3JtU3R5bGUgPSBjc3NgXHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LWlucHV0IHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbS1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g67mE67CA67KI7Zi4ICYg67mE67CA67KI7Zi4IO2ZleyduCBpbnB1dCDrhpLsnbRcclxuICAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWJ0bi1wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBpZEZvcm0gPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5hbnQtaW5wdXQge1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICB3aWR0aDogNDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3VibWl0RGl2ID0gY3NzYFxyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cclxuICAuYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5hbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXJcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLWJvZHlcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gbG9jYWxob3N0OjMwMDAvc2lnbnVwXHJcbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBzaWduVXBEb25lLCBjaGVja0R1cGxpY2F0ZURvbmUsIGlzRHVwbGljYXRlZCB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnVzZXJcclxuICApO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBpZFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbY2hlY2tDbGlja2VkLCBzZXRDaGVja0NsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNoZWNrRHVwbGljYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDSEVDS19EVVBMSUNBVEVfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybS5nZXRGaWVsZFZhbHVlKCdpZCcpLFxyXG4gICAgfSk7XHJcbiAgICBzZXRDaGVja0NsaWNrZWQodHJ1ZSk7XHJcbiAgfSwgW2Zvcm0uZ2V0RmllbGRWYWx1ZSgnaWQnKV0pO1xyXG5cclxuICBjb25zdCBkdXBsaWNhdGVkSWQgPSAoKSA9PiB7XHJcbiAgICBmb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgfSk7XHJcbiAgICBNb2RhbC5lcnJvcih7XHJcbiAgICAgIHRpdGxlOiAn7J2066+4IOyCrOyaqeykkeyduCDslYTsnbTrlJTsnoXri4jri6QuJyxcclxuICAgICAgb25PazogKCkgPT4ge1xyXG4gICAgICAgIGlkUmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vbkR1cGxpY2F0ZWRJZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnRuJyk7XHJcbiAgICB0YXJnZXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIE1vZGFsLnN1Y2Nlc3Moe1xyXG4gICAgICB0aXRsZTogJ+yCrOyaqSDqsIDriqXtlZwg7JWE7J2065SU7J6F64uI64ukLicsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IHZhbHVlcy5pZCxcclxuICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgIHBhc3N3b3JkQ2hlY2s6IHZhbHVlcy5jb25maXJtLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZHVwbGljYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1cGxpY2F0ZS1idG4nKTtcclxuICAgIGlmIChpZC5sZW5ndGggPj0gNiAmJiBpZC5sZW5ndGggPD0gMTEpIHtcclxuICAgICAgZHVwbGljYXRlQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkdXBsaWNhdGVCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrRHVwbGljYXRlRG9uZSAmJiBjaGVja0NsaWNrZWQpIHtcclxuICAgICAgaXNEdXBsaWNhdGVkID8gZHVwbGljYXRlZElkKCkgOiBub25EdXBsaWNhdGVkSWQoKTtcclxuICAgIH1cclxuICAgIHNldENoZWNrQ2xpY2tlZChmYWxzZSk7XHJcbiAgfSwgW2NoZWNrRHVwbGljYXRlRG9uZSwgY2hlY2tDbGlja2VkLCBpc0R1cGxpY2F0ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaWduVXBEb25lKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBmb3JtLmdldEZpZWxkVmFsdWUoJ2lkJyk7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2Vzcyh7XHJcbiAgICAgICAgY29udGVudDogYCR7dXNlcn3ri5gg7ZqM7JuQ6rCA7J6F7J20IOyZhOujjOuQmOyXiOyKteuLiOuLpC5gLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ2N1c3RvbS1jbGFzcycsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgIG1hcmdpblRvcDogJzQwdmgnLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUF9FTkQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtzaWduVXBEb25lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNzcz17aGVhZGVyU3R5bGV9PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxUaXRsZUxvZ28gLz5cclxuICAgICAgPEZvcm0gZm9ybT17Zm9ybX0gY3NzPXtmb3JtU3R5bGV9IG9uRmluaXNoPXtvbkZpbmlzaH0gc2Nyb2xsVG9GaXJzdEVycm9yPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJpZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi7JWE7J2065SUXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDYsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SU64qUIDbsnpAg7J207IOB7J207Ja07JW8IO2VqeuLiOuLpC4nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4OiAxMSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcxMeyekCDsnbTrgrTroZwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e2lkRm9ybX0+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpZC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjYgfiAxMeyekCDrrLjsnpAsIOyIq+yekCwg6riw7Zi4XCJcclxuICAgICAgICAgICAgICAgIHJlZj17aWRSZWZ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiZHVwbGljYXRlLWJ0blwiIG9uQ2xpY2s9e2NoZWNrRHVwbGljYXRlfT5cclxuICAgICAgICAgICAgICAgIOykkeuzte2ZleyduFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbGFiZWw9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBtaW46IDgsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJzjsnpAg7J207IOB7J2YIOusuOyekCwg7Iir7J6QLCDquLDtmLjroZwg7J6F66Cl7ZW07KO87IS47JqUJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cIjjsnpAg7J207IOB7J2YIOusuOyekCwg7Iir7J6QLCDquLDtmLhcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVwiXHJcbiAgICAgICAgICBsYWJlbD1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIlxyXG4gICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XHJcbiAgICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcclxuICAgICAgICAgICAgICB2YWxpZGF0b3IoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcclxuICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCfsnoXroKXtlZjsi6Ag67mE67CA67KI7Zi47JmAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QhJylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDtlZwg67KIIOuNlCDsnoXroKXtlbTso7zshLjsmpRcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gY3NzPXtzdWJtaXREaXZ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNzcz17cm91bmRCdG59XHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=