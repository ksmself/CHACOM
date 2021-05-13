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
        title: '제목을 입력해주세요!'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsIndyaXRlQm94IiwidGl0bGVCb3giLCJ0YWdCb3giLCJ0YWdzIiwidGFnSW5mb0JveCIsImxpbmUiLCJleHByZXNzaW9uQm94IiwiYm94IiwicGlueWluQm94IiwicGx1c0J0biIsImZvb3RlckJveCIsIldyaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY3VycmVudEhhc2h0YWdzIiwidXNlSW5wdXQiLCJ0aXRsZSIsIm9uQ2hhbmdlVGl0bGUiLCJ0YWciLCJvbkNoYW5nZVRhZyIsInNldFRhZyIsIm9uRm9jdXNJbnB1dCIsInVzZUNhbGxiYWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9uQmx1cklucHV0Iiwib25LZXlQcmVzc1RhZyIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJpbmNsdWRlcyIsInR5cGUiLCJBRERfSEFTSFRBR19SRVFVRVNUIiwiZGF0YSIsInNsaWNlIiwib25DbGlja1RhZyIsInYiLCJSRU1PVkVfSEFTSFRBR19SRVFVRVNUIiwidXNlU3RhdGUiLCJleHByZXNzaW9uTnVtYmVyIiwicGlueWluIiwibWVhbmluZyIsImV4cHJlc3Npb25zIiwic2V0RXhwcmVzc2lvbnMiLCJvbkNoYW5nZVRleHQiLCJleHByZXNzaW9uTnVtIiwidGVtcEV4cHJlc3Npb25zIiwibWFwIiwiZXhwcmVzc2lvbiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImFkZEV4cHJlc3Npb24iLCJsZW5ndGgiLCJkZWxldGVFeHByZXNzaW9uIiwiZmlsdGVyIiwib3JkZXIiLCJhcnJhbmdlZEV4cHJlc3Npb25zIiwiYWRkUG9zdCIsIk1vZGFsIiwiZXJyb3Ii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TUUsTUFBTSxDQUFDMkQsT0FBUCxDQUFlLEdBQWYsQ0FBTjtBQUFBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLDhFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsYUFBSyxFQUFDLE9BQTdCO0FBQXFDLFdBQUcsRUFBRUMsNERBQTFDO0FBQW9ELGVBQU8sRUFBRU4sT0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RUQsQ0EzS0Q7O0dBQU12RCxLO1VBQ1dFLHFELEVBQ0VFLHVELEVBQ1dDLHVELEVBRUdJLHdELEVBQ0lBLHdEOzs7S0FOL0JULEs7QUE2S1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dyaXRlLjkyMGMwMDYxZDNjOGU1YTY2ZWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIEFycm93TGVmdE91dGxpbmVkLFxyXG4gIFBsdXNDaXJjbGVGaWxsZWQsXHJcbiAgQ2xvc2VPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEFERF9IQVNIVEFHX1JFUVVFU1QsIFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEV4cHJlc3Npb25Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9FeHByZXNzaW9uQm94JztcclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcyc7XHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCB3cml0ZVBhZ2UgPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3Qgd3JpdGVCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCB0aXRsZUJveCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0JveCA9IGNzc2BcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgdGFncyA9IGNzc2BcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNhZGY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM1MzFkYWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMGZmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdGFnSW5mb0JveCA9IGNzc2BcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTE4ZmY7XHJcbmA7XHJcblxyXG5jb25zdCBsaW5lID0gY3NzYFxyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ5NGI7XHJcbmA7XHJcblxyXG5jb25zdCBleHByZXNzaW9uQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgYm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMThkZGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ4NDk0YjtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIHJpZ2h0OiAtMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBpbnlpbkJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwbHVzQnRuID0gY3NzYFxyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmb290ZXJCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg1OCwgMjQsIDI1NSwgMjAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgV3JpdGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgY3VycmVudEhhc2h0YWdzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICBjb25zdCBbdGl0bGUsIG9uQ2hhbmdlVGl0bGVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFt0YWcsIG9uQ2hhbmdlVGFnLCBzZXRUYWddID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvbkZvY3VzSW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25CbHVySW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25LZXlQcmVzc1RhZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnLCcpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8g67mI7Lm47Jy866GcIOyeheugpe2VmOyngCDslYrslZjsnYTrlYzrp4wg66as7Iqk7Yq47JeQIOy2lOqwgFxyXG4gICAgICAgIGlmICh0YWcudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgLy8g7J2066+4IOyeiOuKlCDtlbTsi5ztg5zqt7jqsIAg7JWE64uQ65WM66eMIOumrOyKpO2KuOyXkCDstpTqsIBcclxuICAgICAgICAgIGlmICghY3VycmVudEhhc2h0YWdzLmluY2x1ZGVzKHRhZykpIHtcclxuICAgICAgICAgICAgLy8gI+ydhCDrtpnsl6zshJwg7ZW07Iuc7YOc6re466W8IOyeheugpe2WiOydhCDrlYzripQgI+ydhCDrlrzqs6BcclxuICAgICAgICAgICAgaWYgKHRhZ1swXSA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRhZy5zbGljZSgxKSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGFnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRhZygnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbdGFnXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tUYWcgPSB1c2VDYWxsYmFjaygodikgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICBkYXRhOiB2LFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbZXhwcmVzc2lvbnMsIHNldEV4cHJlc3Npb25zXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZXhwcmVzc2lvbk51bWJlcjogMSwgcGlueWluOiAnJywgbWVhbmluZzogJycgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXhwcmVzc2lvbk51bSkgPT4gKGUpID0+IHtcclxuICAgICAgY29uc3QgdGVtcEV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKChleHByZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGV4cHJlc3Npb25OdW0gPT09IGV4cHJlc3Npb24uZXhwcmVzc2lvbk51bWJlcikge1xyXG4gICAgICAgICAgZXhwcmVzc2lvbltlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKHRlbXBFeHByZXNzaW9ucyk7XHJcbiAgICB9LFxyXG4gICAgW2V4cHJlc3Npb25zXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZEV4cHJlc3Npb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBleHByZXNzaW9uTnVtYmVyOiBleHByZXNzaW9ucy5sZW5ndGggKyAxLFxyXG4gICAgICBwaW55aW46ICcnLFxyXG4gICAgICBtZWFuaW5nOiAnJyxcclxuICAgIH07XHJcbiAgICBzZXRFeHByZXNzaW9ucyhbLi4uZXhwcmVzc2lvbnMsIGRhdGFdKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+ICgpID0+IHtcclxuICAgICAgY29uc3QgdGVtcEV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMuZmlsdGVyKFxyXG4gICAgICAgICh2KSA9PiB2LmV4cHJlc3Npb25OdW1iZXIgIT09IGV4cHJlc3Npb25OdW1cclxuICAgICAgKTtcclxuICAgICAgbGV0IG9yZGVyID0gMTtcclxuICAgICAgY29uc3QgYXJyYW5nZWRFeHByZXNzaW9ucyA9IHRlbXBFeHByZXNzaW9ucy5tYXAoKHYpID0+IHtcclxuICAgICAgICB2LmV4cHJlc3Npb25OdW1iZXIgPSBvcmRlcjtcclxuICAgICAgICBvcmRlcisrO1xyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RXhwcmVzc2lvbnMoWy4uLmFycmFuZ2VkRXhwcmVzc2lvbnNdKTtcclxuICAgIH0sXHJcbiAgICBbZXhwcmVzc2lvbnNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghdGl0bGUpIHtcclxuICAgICAgTW9kYWwuZXJyb3Ioe1xyXG4gICAgICAgIHRpdGxlOiAn7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdGl0bGUsIGN1cnJlbnRIYXNodGFncywgZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICA8ZGl2IGNzcz17d3JpdGVCb3h9PlxyXG4gICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgY3NzPXt0aXRsZUJveH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cclxuICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY3NzPXt0YWdCb3h9PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3RhZ3N9PlxyXG4gICAgICAgICAgICB7Y3VycmVudEhhc2h0YWdzLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Z9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tUYWcodil9PlxyXG4gICAgICAgICAgICAgICAgICB7dn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2DnOq3uOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGFnfVxyXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3NUYWd9XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c0lucHV0fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVySW5wdXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJ0YWctaW5mb1wiIGNzcz17dGFnSW5mb0JveH0+XHJcbiAgICAgICAgICAgIOyJvO2RnCDtmLnsnYAg7JeU7YSw66W8IOyeheugpe2VmOyXrCDtg5zqt7jrpbwg65Ox66Gd7ZWgIOyImCDsnojsirXri4jri6QuIOuTseuhneuQnCDtg5zqt7jrpbxcclxuICAgICAgICAgICAg7YG066at7ZWY66m0IOyCreygnOuQqeuLiOuLpC5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY3NzPXtsaW5lfT48L2Rpdj5cclxuICAgICAgICB7LyogPEV4cHJlc3Npb25Cb3ggLz4gKi99XHJcbiAgICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25Cb3h9PlxyXG4gICAgICAgICAge2V4cHJlc3Npb25zLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNzcz17Ym94fSBrZXk9e3YuZXhwcmVzc2lvbk51bWJlcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNzcz17cGlueWluQm94fT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBpbnlpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlZzslrTrs5HsnYzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17di5waW55aW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dChpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7aW5kZXggIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIG9uQ2xpY2s9e2RlbGV0ZUV4cHJlc3Npb24oaW5kZXggKyAxKX0gLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lYW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuucu+ydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17di5tZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0KGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBsdXNDaXJjbGVGaWxsZWQgY3NzPXtwbHVzQnRufSBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBjc3M9e2Zvb3RlckJveH0+XHJcbiAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHJvdXRlci5yZXBsYWNlKCcvJyl9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBjc3M9e3JvdW5kQnRufSBvbkNsaWNrPXthZGRQb3N0fT5cclxuICAgICAgICAgIOunjOuTpOq4sFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==