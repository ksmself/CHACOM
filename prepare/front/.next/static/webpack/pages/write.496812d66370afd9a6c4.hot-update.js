webpackHotUpdate_N_E("pages/write",{

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_ExpressionBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ExpressionBox */ "./components/ExpressionBox.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");
/* harmony import */ var _components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ConvertPopUp */ "./components/ConvertPopUp.js");





var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\write.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject12() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  padding: 15px;\n  box-shadow: 0px 0px 8px rgba(58, 24, 255, 20%);\n  background-color: #fff;\n\n  span {\n    cursor: pointer;\n  }\n\n  svg {\n    font-size: 20px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  margin-bottom: 80px;\n\n  svg {\n    font-size: 50px;\n    color: #3a18ff;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  position: relative;\n  height: 52px;\n  margin-bottom: 15px;\n\n  button {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    font-size: 13px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  position: relative;\n  width: 100%;\n  padding: 30px 15px;\n  margin-bottom: 20px;\n  border: 3px solid #18ddff;\n  border-radius: 4px;\n\n  input {\n    width: 100%;\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid #48494b;\n  }\n\n  span {\n    position: absolute;\n    top: -12px;\n    right: -2px;\n    cursor: pointer;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  width: 40px;\n  height: 10px;\n  margin-bottom: 25px;\n  background-color: #48494b;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  display: none;\n  width: 220px;\n  padding: 5px;\n  font-size: 13px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  align-items: center;\n  flex-wrap: nowrap;\n\n  button {\n    margin-right: 5px;\n    margin-bottom: 5px;\n    font-size: 14px;\n    border: 1px solid #d3adf7;\n    border-radius: 2px;\n    color: #531dab;\n    background-color: #f9f0ff;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  input {\n    font-size: 14px;\n    border: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  margin-bottom: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  width: 100%;\n  padding: 4px 0;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  border: none;\n\n  &:focus {\n    border: none;\n    box-shadow: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px 20px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */











var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea;
var writePage = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject());
var writeBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject2());
var titleBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject3());
var tagBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject4());
var tags = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject5());
var tagInfoBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject6());
var line = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject7());
var expressionBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject8());
var box = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject9());
var pinyinBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject10());
var plusBtn = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject11());
var footerBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject12());

var Write = function Write() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.post;
  }),
      currentHashtags = _useSelector.currentHashtags;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInput, 2),
      title = _useInput2[0],
      onChangeTitle = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])(''),
      _useInput4 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInput3, 3),
      tag = _useInput4[0],
      onChangeTag = _useInput4[1],
      setTag = _useInput4[2];

  var onFocusInput = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    document.getElementById('tag-info').style.display = 'block';
  }, []);
  var onBlurInput = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    document.getElementById('tag-info').style.display = 'none';
  }, []);
  var onKeyPressTag = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault(); // 빈칸으로 입력하지 않았을때만 리스트에 추가

      if (tag.trim() !== '') {
        // 이미 있는 해시태그가 아닐때만 리스트에 추가
        if (!currentHashtags.includes(tag)) {
          // #을 붙여서 해시태그를 입력했을 때는 #을 떼고
          if (tag[0] === '#') {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["ADD_HASHTAG_REQUEST"],
              data: tag.slice(1)
            });
          } else {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["ADD_HASHTAG_REQUEST"],
              data: tag
            });
          }
        }
      }

      setTag('');
    }
  }, [tag]);
  var onClickTag = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (v) {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__["REMOVE_HASHTAG_REQUEST"],
      data: v
    });
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([{
    expressionNumber: 1,
    pinyin: '',
    meaning: ''
  }]),
      expressions = _useState[0],
      setExpressions = _useState[1];

  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (expressionNum) {
    return function (e) {
      var tempExpressions = expressions.map(function (expression) {
        if (expressionNum === expression.expressionNumber) {
          expression[e.target.name] = e.target.value;
        }

        return expression;
      });
      setExpressions(tempExpressions);
    };
  }, [expressions]);
  var addExpression = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var data = {
      expressionNumber: expressions.length + 1,
      pinyin: '',
      meaning: ''
    };
    setExpressions([].concat(Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(expressions), [data]));
  }, [expressions]);
  var deleteExpression = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (expressionNum) {
    return function () {
      var tempExpressions = expressions.filter(function (v) {
        return v.expressionNumber !== expressionNum;
      });
      var order = 1;
      var arrangedExpressions = tempExpressions.map(function (v) {
        v.expressionNumber = order;
        order++;
        return v;
      });
      setExpressions(Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arrangedExpressions));
    };
  }, [expressions]);
  var addPost = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    if (!title) {
      antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].error({
        content: '제목을 입력해주세요!'
      });
    }
  }, [title, currentHashtags, expressions]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    css: writePage,
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      css: writeBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
        css: titleBox,
        placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
        value: title,
        onChange: onChangeTitle,
        autoSize: {
          minRows: 1
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: tagBox,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: tags,
          children: [currentHashtags.map(function (v, index) {
            return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return onClickTag(v);
              },
              children: v
            }, v, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 17
            }, _this);
          }), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
            value: tag,
            onChange: onChangeTag,
            onKeyPress: onKeyPressTag,
            onFocus: onFocusInput,
            onBlur: onBlurInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "tag-info",
          css: tagInfoBox,
          children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: line
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: expressionBox,
        children: expressions.map(function (v, index) {
          return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: box,
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              css: pinyinBox,
              children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                name: "pinyin",
                placeholder: "\uD55C\uC5B4\uBCD1\uC74C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
                value: v.pinyin,
                onChange: onChangeText(index + 1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 19
              }, _this), index !== 0 && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["CloseOutlined"], {
                onClick: deleteExpression(index + 1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 21
              }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "meaning",
              placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
              value: v.meaning,
              onChange: onChangeText(index + 1)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 17
            }, _this)]
          }, v.expressionNumber, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["PlusCircleFilled"], {
        css: plusBtn,
        onClick: addExpression
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      css: footerBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowLeftOutlined"], {
        onClick: function onClick() {
          return router.replace('/');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "primary",
        shape: "round",
        css: _components_styles__WEBPACK_IMPORTED_MODULE_13__["roundBtn"],
        onClick: addPost,
        children: "\uB9CC\uB4E4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 263,
    columnNumber: 5
  }, _this);
};

_s(Write, "GVKdjYrDs7vCFJ3eT2J18auXdMg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"]];
});

_c = Write;
/* harmony default export */ __webpack_exports__["default"] = (Write);

var _c;

$RefreshReg$(_c, "Write");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsIndyaXRlQm94IiwidGl0bGVCb3giLCJ0YWdCb3giLCJ0YWdzIiwidGFnSW5mb0JveCIsImxpbmUiLCJleHByZXNzaW9uQm94IiwiYm94IiwicGlueWluQm94IiwicGx1c0J0biIsImZvb3RlckJveCIsIldyaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY3VycmVudEhhc2h0YWdzIiwidXNlSW5wdXQiLCJ0aXRsZSIsIm9uQ2hhbmdlVGl0bGUiLCJ0YWciLCJvbkNoYW5nZVRhZyIsInNldFRhZyIsIm9uRm9jdXNJbnB1dCIsInVzZUNhbGxiYWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9uQmx1cklucHV0Iiwib25LZXlQcmVzc1RhZyIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJpbmNsdWRlcyIsInR5cGUiLCJBRERfSEFTSFRBR19SRVFVRVNUIiwiZGF0YSIsInNsaWNlIiwib25DbGlja1RhZyIsInYiLCJSRU1PVkVfSEFTSFRBR19SRVFVRVNUIiwidXNlU3RhdGUiLCJleHByZXNzaW9uTnVtYmVyIiwicGlueWluIiwibWVhbmluZyIsImV4cHJlc3Npb25zIiwic2V0RXhwcmVzc2lvbnMiLCJvbkNoYW5nZVRleHQiLCJleHByZXNzaW9uTnVtIiwidGVtcEV4cHJlc3Npb25zIiwibWFwIiwiZXhwcmVzc2lvbiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImFkZEV4cHJlc3Npb24iLCJsZW5ndGgiLCJkZWxldGVFeHByZXNzaW9uIiwiZmlsdGVyIiwib3JkZXIiLCJhcnJhbmdlZEV4cHJlc3Npb25zIiwiYWRkUG9zdCIsIk1vZGFsIiwiZXJyb3Ii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O0FBQUEsaUJBQU1FLE1BQU0sQ0FBQzRELE9BQVAsQ0FBZSxHQUFmLENBQU47QUFBQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSw4RUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLGFBQUssRUFBQyxPQUE3QjtBQUFxQyxXQUFHLEVBQUVDLDREQUExQztBQUFvRCxlQUFPLEVBQUVQLE9BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUVELENBM0tEOztHQUFNdkQsSztVQUNXRSxxRCxFQUNFRSx1RCxFQUNXQyx1RCxFQUVHSSx3RCxFQUNJQSx3RDs7O0tBTi9CVCxLO0FBNktTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS40OTY4MTJkNjYzNzBhZmQ5YTZjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICBBcnJvd0xlZnRPdXRsaW5lZCxcclxuICBQbHVzQ2lyY2xlRmlsbGVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfSEFTSFRBR19SRVFVRVNULCBSRU1PVkVfSEFTSFRBR19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBFeHByZXNzaW9uQm94IGZyb20gJy4uL2NvbXBvbmVudHMvRXhwcmVzc2lvbkJveCc7XHJcbmltcG9ydCB7IHJvdW5kQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udmVydFBvcFVwJztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3Qgd3JpdGVQYWdlID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IHdyaXRlQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgdGl0bGVCb3ggPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdCb3ggPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IHRhZ3MgPSBjc3NgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzYWRmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjNTMxZGFiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjBmZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0luZm9Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5gO1xyXG5cclxuY29uc3QgbGluZSA9IGNzc2BcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0OTRiO1xyXG5gO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IGJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzE4ZGRmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ5NGI7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICByaWdodDogLTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5Cb3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGx1c0J0biA9IGNzc2BcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZm9vdGVyQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNTgsIDI0LCAyNTUsIDIwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGN1cnJlbnRIYXNodGFncyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbdGFnLCBvbkNoYW5nZVRhZywgc2V0VGFnXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Gb2N1c0lucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQmx1cklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uS2V5UHJlc3NUYWcgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJywnKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIOu5iOy5uOycvOuhnCDsnoXroKXtlZjsp4Ag7JWK7JWY7J2E65WM66eMIOumrOyKpO2KuOyXkCDstpTqsIBcclxuICAgICAgICBpZiAodGFnLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgIC8vIOydtOuvuCDsnojripQg7ZW07Iuc7YOc6re46rCAIOyVhOuLkOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnRIYXNodGFncy5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIC8vICPsnYQg67aZ7Jes7IScIO2VtOyLnO2DnOq3uOulvCDsnoXroKXtlojsnYQg65WM64qUICPsnYQg65a86rOgXHJcbiAgICAgICAgICAgIGlmICh0YWdbMF0gPT09ICcjJykge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcuc2xpY2UoMSksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRhZyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUYWcoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RhZ11cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNsaWNrVGFnID0gdXNlQ2FsbGJhY2soKHYpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgZGF0YTogdixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2V4cHJlc3Npb25zLCBzZXRFeHByZXNzaW9uc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGV4cHJlc3Npb25OdW1iZXI6IDEsIHBpbnlpbjogJycsIG1lYW5pbmc6ICcnIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hcCgoZXhwcmVzc2lvbikgPT4ge1xyXG4gICAgICAgIGlmIChleHByZXNzaW9uTnVtID09PSBleHByZXNzaW9uLmV4cHJlc3Npb25OdW1iZXIpIHtcclxuICAgICAgICAgIGV4cHJlc3Npb25bZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFeHByZXNzaW9ucyh0ZW1wRXhwcmVzc2lvbnMpO1xyXG4gICAgfSxcclxuICAgIFtleHByZXNzaW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGRFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXhwcmVzc2lvbk51bWJlcjogZXhwcmVzc2lvbnMubGVuZ3RoICsgMSxcclxuICAgICAgcGlueWluOiAnJyxcclxuICAgICAgbWVhbmluZzogJycsXHJcbiAgICB9O1xyXG4gICAgc2V0RXhwcmVzc2lvbnMoWy4uLmV4cHJlc3Npb25zLCBkYXRhXSk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUV4cHJlc3Npb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLmZpbHRlcihcclxuICAgICAgICAodikgPT4gdi5leHByZXNzaW9uTnVtYmVyICE9PSBleHByZXNzaW9uTnVtXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBvcmRlciA9IDE7XHJcbiAgICAgIGNvbnN0IGFycmFuZ2VkRXhwcmVzc2lvbnMgPSB0ZW1wRXhwcmVzc2lvbnMubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgdi5leHByZXNzaW9uTnVtYmVyID0gb3JkZXI7XHJcbiAgICAgICAgb3JkZXIrKztcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKFsuLi5hcnJhbmdlZEV4cHJlc3Npb25zXSk7XHJcbiAgICB9LFxyXG4gICAgW2V4cHJlc3Npb25zXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZFBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIXRpdGxlKSB7XHJcbiAgICAgIE1vZGFsLmVycm9yKHtcclxuICAgICAgICBjb250ZW50OiAn7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdGl0bGUsIGN1cnJlbnRIYXNodGFncywgZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICA8ZGl2IGNzcz17d3JpdGVCb3h9PlxyXG4gICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgY3NzPXt0aXRsZUJveH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cclxuICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY3NzPXt0YWdCb3h9PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3RhZ3N9PlxyXG4gICAgICAgICAgICB7Y3VycmVudEhhc2h0YWdzLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Z9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tUYWcodil9PlxyXG4gICAgICAgICAgICAgICAgICB7dn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2DnOq3uOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGFnfVxyXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3NUYWd9XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c0lucHV0fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVySW5wdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJ0YWctaW5mb1wiIGNzcz17dGFnSW5mb0JveH0+XHJcbiAgICAgICAgICAgIOyJvO2RnCDtmLnsnYAg7JeU7YSw66W8IOyeheugpe2VmOyXrCDtg5zqt7jrpbwg65Ox66Gd7ZWgIOyImCDsnojsirXri4jri6QuIOuTseuhneuQnCDtg5zqt7jrpbxcclxuICAgICAgICAgICAg7YG066at7ZWY66m0IOyCreygnOuQqeuLiOuLpC5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtsaW5lfT48L2Rpdj5cclxuICAgICAgICB7LyogPEV4cHJlc3Npb25Cb3ggLz4gKi99XHJcbiAgICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25Cb3h9PlxyXG4gICAgICAgICAge2V4cHJlc3Npb25zLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17Ym94fSBrZXk9e3YuZXhwcmVzc2lvbk51bWJlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNzcz17cGlueWluQm94fT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBpbnlpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlZzslrTrs5HsnYzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17di5waW55aW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dChpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7aW5kZXggIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIG9uQ2xpY2s9e2RlbGV0ZUV4cHJlc3Npb24oaW5kZXggKyAxKX0gLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lYW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuucu+ydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17di5tZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0KGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBsdXNDaXJjbGVGaWxsZWQgY3NzPXtwbHVzQnRufSBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBjc3M9e2Zvb3RlckJveH0+XHJcbiAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHJvdXRlci5yZXBsYWNlKCcvJyl9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBjc3M9e3JvdW5kQnRufSBvbkNsaWNrPXthZGRQb3N0fT5cclxuICAgICAgICAgIOunjOuTpOq4sFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==