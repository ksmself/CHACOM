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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_TitleLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TitleLogo */ "./components/TitleLogo.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  margin-top: 30px;\n\n  .ant-form-item-control-input-content {\n    display: flex;\n    justify-content: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  button {\n    border-color: #3a18ff;\n  }\n\n  button:focus {\n    color: #3a18ff;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  width: 280px;\n  margin: 10px auto 0;\n\n  .ant-form-item {\n    display: block;\n  }\n\n  .ant-form-item-label {\n    font-weight: 700;\n  }\n\n  .ant-form-item-has-error {\n    margin-bottom: 10px;\n  }\n\n  .ant-btn-primary {\n    width: 100px;\n  }\n"]);

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
var formStyle = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2()); // const emailForm = css`
//   .ant-form-item-control-input-content {
//     display: flex;
//     justify-content: space-between;
//     input {
//       width: 65%;
//     }
//     /* button {
//       border-color: #3a18ff;
//     }
//     button:focus {
//       color: #3a18ff; */
//     }
//   }
// `;

var emailForm = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3()); // const emailInput = css`
//   width: 65%;
// `;

var submitDiv = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4()); // localhost:3000/signup

var SignUp = function SignUp() {
  _s();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    // values는 {email: "ksmself@wizlive.com", password: "sfsfsfs", confirm: "sfsfsfs"}
    console.log('Received values of form: ', values);
  };

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: headerStyle,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      form: form,
      css: formStyle,
      onFinish: onFinish,
      scrollToFirstError: true,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: emailForm,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          name: "email",
          label: "\uC544\uC774\uB514(\uC774\uBA54\uC77C)",
          rules: [{
            type: 'email',
            message: '올바른 이메일 주소를 입력해주세요!'
          }, {
            required: true,
            message: '아이디(이메일)을 입력해주세요!'
          }],
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uC911\uBCF5\uD655\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
        name: "password",
        label: "\uBE44\uBC00\uBC88\uD638",
        rules: [{
          required: true,
          message: '비밀번호를 입력해주세요!'
        }],
        hasFeedback: true,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Password, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
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
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Password, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
        css: submitDiv,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          shape: "round",
          htmlType: "submit",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_6__["roundBtn"],
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "rI7DrJIrFu7YmlGWYiMFTzs8jF0=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm];
});

_c = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbImhlYWRlclN0eWxlIiwiY3NzIiwiZm9ybVN0eWxlIiwiZW1haWxGb3JtIiwic3VibWl0RGl2IiwiU2lnblVwIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsImdldEZpZWxkVmFsdWUiLCJ2YWxpZGF0b3IiLCJfIiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwicm91bmRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDBEQUFILG1CQUFqQjtBQUlBLElBQU1DLFNBQVMsR0FBR0QsMERBQUgsb0JBQWYsQyxDQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsU0FBUyxHQUFHRiwwREFBSCxvQkFBZixDLENBY0E7QUFDQTtBQUNBOztBQUVBLElBQU1HLFNBQVMsR0FBR0gsMERBQUgsb0JBQWYsQyxDQVNBOztBQUNBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxzQkFDSkMseUNBQUksQ0FBQ0MsT0FBTCxFQURJO0FBQUE7QUFBQSxNQUNaQyxJQURZOztBQUduQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0I7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNGLE1BQXpDO0FBQ0QsR0FIRDs7QUFLQSxTQUNFO0FBQUssT0FBRyxFQUFFVixXQUFWO0FB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NGRjMDU4YjAxYjExOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgVGl0bGVMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVMb2dvJztcclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcyc7XHJcblxyXG5jb25zdCBoZWFkZXJTdHlsZSA9IGNzc2BcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgZm9ybVN0eWxlID0gY3NzYFxyXG4gIHdpZHRoOiAyODBweDtcclxuICBtYXJnaW46IDEwcHggYXV0byAwO1xyXG5cclxuICAuYW50LWZvcm0taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuYW50LWZvcm0taXRlbS1oYXMtZXJyb3Ige1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5hbnQtYnRuLXByaW1hcnkge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIGNvbnN0IGVtYWlsRm9ybSA9IGNzc2BcclxuLy8gICAuYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnQge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbi8vICAgICBpbnB1dCB7XHJcbi8vICAgICAgIHdpZHRoOiA2NSU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLyogYnV0dG9uIHtcclxuLy8gICAgICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGJ1dHRvbjpmb2N1cyB7XHJcbi8vICAgICAgIGNvbG9yOiAjM2ExOGZmOyAqL1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmNvbnN0IGVtYWlsRm9ybSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gY29uc3QgZW1haWxJbnB1dCA9IGNzc2BcclxuLy8gICB3aWR0aDogNjUlO1xyXG4vLyBgO1xyXG5cclxuY29uc3Qgc3VibWl0RGl2ID0gY3NzYFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gbG9jYWxob3N0OjMwMDAvc2lnbnVwXHJcbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICAvLyB2YWx1ZXPripQge2VtYWlsOiBcImtzbXNlbGZAd2l6bGl2ZS5jb21cIiwgcGFzc3dvcmQ6IFwic2ZzZnNmc1wiLCBjb25maXJtOiBcInNmc2ZzZnNcIn1cclxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e2hlYWRlclN0eWxlfT5cclxuICAgICAgPFRpdGxlTG9nbyAvPlxyXG4gICAgICA8Rm9ybSBmb3JtPXtmb3JtfSBjc3M9e2Zvcm1TdHlsZX0gb25GaW5pc2g9e29uRmluaXNofSBzY3JvbGxUb0ZpcnN0RXJyb3I+XHJcbiAgICAgICAgPGRpdiBjc3M9e2VtYWlsRm9ybX0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi7JWE7J2065SUKOydtOuplOydvClcIlxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7Jis67CU66W4IOydtOuplOydvCDso7zshozrpbwg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfslYTsnbTrlJQo7J2066mU7J28KeydhCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b24+7KSR67O17ZmV7J24PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJjb25maXJtXCJcclxuICAgICAgICAgIGxhYmVsPVwi67mE67CA67KI7Zi4IO2ZleyduFwiXHJcbiAgICAgICAgICBkZXBlbmRlbmNpZXM9e1sncGFzc3dvcmQnXX1cclxuICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+u5hOuwgOuyiO2YuOulvCDtmZXsnbjtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcihfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoJ+yeheugpe2VmOyLoCDruYTrsIDrsojtmLjsmYAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpCEnKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBjc3M9e3N1Ym1pdERpdn0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIGh0bWxUeXBlPVwic3VibWl0XCIgY3NzPXtyb3VuZEJ0bn0+XHJcbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=