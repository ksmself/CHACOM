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




var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  text-align: center;\n  margin-bottom: 0;\n\n  a {\n    display: inline-block;\n    padding-left: 5px;\n    text-decoration: underline;\n  }\n"]);

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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  .ant-modal-title {\n    font-weight: 700;\n  }\n\n  .ant-modal-footer {\n    button > span {\n      font-weight: 700;\n    }\n  }\n"]);

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
      onCancel = _ref.onCancel;

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    console.log('로그인했음');
  });
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    visible: visible,
    title: "\uB85C\uADF8\uC778\uD558\uAE30",
    okText: "\uB85C\uADF8\uC778",
    cancelText: "\uCDE8\uC18C",
    css: modalStyle,
    onCancel: onCancel,
    onOk: function onOk() {
      form.validateFields().then(function (values) {
        form.resetFields();
        onCreate(values);
      })["catch"](function (info) {
        console.log('Validate Failed:', info);
      });
    },
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      form: form,
      name: "form_in_modal",
      initialValues: {
        modifier: 'public',
        remember: false
      },
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
            lineNumber: 84,
            columnNumber: 21
          }, _this),
          placeholder: "\uC544\uC774\uB514"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
            lineNumber: 99,
            columnNumber: 21
          }, _this),
          type: "password",
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
        css: signup,
        children: ["\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2DC\uB77C\uBA74,", ' ', Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/signup",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785\uD558\uB7EC\uAC00\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "Rv16bkDO6FlN58ihmItB4vivop8=", false, function () {
  return [antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsibW9kYWxTdHlsZSIsImNzcyIsImZvcm1TdHlsZSIsInNpZ251cCIsIkxvZ2luRm9ybSIsInZpc2libGUiLCJvbkNyZWF0ZSIsIm9uQ2FuY2VsIiwiRm9ybSIsInVzZUZvcm0iLCJmb3JtIiwib25GaW5pc2giLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZUZpZWxkcyIsInRoZW4iLCJ2YWx1ZXMiLCJyZXNldEZpZWxkcyIsImluZm8iLCJtb2RpZmllciIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsMERBQUgsbUJBQWhCO0FBWUEsSUFBTUMsU0FBUyxHQUFHRCwwREFBSCxvQkFBZjtBQVFBLElBQU1FLE1BQU0sR0FBR0YsMERBQUgsb0JBQVo7O0FBV0EsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxzQkFDdENDLHlDQUFJLENBQUNDLE9BQUwsRUFEc0M7QUFBQTtBQUFBLE1BQzlDQyxJQUQ4Qzs7QUFFckQsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDakNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDRCxHQUYyQixDQUE1QjtBQUlBLFNBQ0UsOEVBQUMsMENBQUQ7QUFDRSxXQUFPLEVBQUVULE9BRFg7QUFFRSxTQUFLLEVBQUMsZ0NBRlI7QUFHRSxVQUFNLEVBQUMsb0JBSFQ7QUFJRSxjQUFVLEVBQUMsY0FKYjtBQUtFLE9BQUcsRUFBRUwsVUFMUDtBQU1FLFlBQVEsRUFBRU8sUUFOWjtBQU9FLFFBQUksRUFBRSxnQkFBTTtBQUNWRyxVQUFJLENBQ0RLLGNBREgsR0FFR0MsSUFGSCxDQUVRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQlAsWUFBSSxDQUFDUSxXQUFMO0FBQ0FaLGdCQUFRLENBQUNXLE1BQUQsQ0FBUjtBQUNELE9BTEgsV0FNUyxVQUFDRSxJQUFELEVBQVU7QUFDZk4sZUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NLLElBQWhDO0FBQ0QsT0FSSDtBQVNELEtBakJIO0FBQUEsY0FtQkUsOEVBQUMseUNBQUQ7QUFDRSxVQUFJLEVBQUVULElBRFI7QUFFRSxVQUFJLEVBQUMsZUFGUDtBQUdFLG1CQUFhLEVBQUU7QUFDYlUsZ0JBQVEsRUFBRSxRQURHO0FBRWJDLGdCQUFRLEVBQUU7QUFGRyxPQUhqQjtBQUFBLGlCQVFFLDhFQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFlBQUksRUFBQyxJQURQO0FBRUUsYUFBSyxFQUFFLENBQ0w7QUFDRUMsa0JBQVEsRUFBRSxJQURaO0FBRUVDLGlCQUFPLEVBQUU7QUFGWCxTQURLLENBRlQ7QUFRRSxXQUFHLEVBQUVyQixTQVJQO0FBQUEsa0JBVUUsOEVBQUMsMENBQUQ7QUFDRSxnQkFBTSxFQUFFLDhFQUFDLDhEQUFEO0FBQWMscUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURWO0FBRUUscUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsRUF1QkUsOEVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxhQUFLLEVBQUUsQ0FDTDtBQUNFb0Isa0JBQVEsRUFBRSxJQURaO0FBRUVDLGlCQUFPLEVBQUU7QUFGWCxTQURLLENBRlQ7QUFRRSxXQUFHLEVBQUVyQixTQVJQO0FBQUEsa0JBVUUsOEVBQUMsMENBQUQ7QUFDRSxnQkFBTSxFQUFFLDhFQUFDLDhEQUFEO0FBQWMscUJBQVMsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURWO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxxQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkYsRUF3Q0UsOEVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBRyxFQUFFQyxNQUFoQjtBQUFBLHNGQUNnQixHQURoQixFQUVFLDhFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxvQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxRUQsQ0EzRUQ7O0dBQU1DLFM7VUFDV0kseUNBQUksQ0FBQ0MsTzs7O0tBRGhCTCxTO0FBNkVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZWY0ZDlmNTY3NmUxNjNlNjBhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBNb2RhbCwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbW9kYWxTdHlsZSA9IGNzc2BcclxuICAuYW50LW1vZGFsLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAuYW50LW1vZGFsLWZvb3RlciB7XHJcbiAgICBidXR0b24gPiBzcGFuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmb3JtU3R5bGUgPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc2lnbnVwID0gY3NzYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHsgdmlzaWJsZSwgb25DcmVhdGUsIG9uQ2FuY2VsIH0pID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBvbkZpbmlzaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfroZzqt7jsnbjtlojsnYwnKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICB0aXRsZT1cIuuhnOq3uOyduO2VmOq4sFwiXHJcbiAgICAgIG9rVGV4dD1cIuuhnOq3uOyduFwiXHJcbiAgICAgIGNhbmNlbFRleHQ9XCLst6jshoxcIlxyXG4gICAgICBjc3M9e21vZGFsU3R5bGV9XHJcbiAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cclxuICAgICAgb25Paz17KCkgPT4ge1xyXG4gICAgICAgIGZvcm1cclxuICAgICAgICAgIC52YWxpZGF0ZUZpZWxkcygpXHJcbiAgICAgICAgICAudGhlbigodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgb25DcmVhdGUodmFsdWVzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGluZm8pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhbGlkYXRlIEZhaWxlZDonLCBpbmZvKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGZvcm09e2Zvcm19XHJcbiAgICAgICAgbmFtZT1cImZvcm1faW5fbW9kYWxcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIG1vZGlmaWVyOiAncHVibGljJyxcclxuICAgICAgICAgIHJlbWVtYmVyOiBmYWxzZSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGNzcz17Zm9ybVN0eWxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+2MqOyKpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBjc3M9e2Zvcm1TdHlsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtjKjsiqTsm4zrk5xcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbSBjc3M9e3NpZ251cH0+XHJcbiAgICAgICAgICDslYTsp4Eg7ZqM7JuQ7J20IOyVhOuLiOyLnOudvOuptCx7JyAnfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgPGE+7ZqM7JuQ6rCA7J6F7ZWY65+s6rCA6riwPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=