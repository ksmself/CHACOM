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
    // title 비었는지 확인
    if (!title) {
      antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].warning({
        title: '제목을 입력해주세요!'
      });
    } // expression 비었는지 확인


    var isContentNull = false;
    expressions.map(function (v) {
      if (!v.pinyin || !v.meaning) {
        isContentNull = true;
      }
    });

    if (isContentNull) {
      console.log('표현이 비어있습니다.');
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
        lineNumber: 277,
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
              lineNumber: 288,
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
            lineNumber: 293,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "tag-info",
          css: tagInfoBox,
          children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: line
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
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
                lineNumber: 314,
                columnNumber: 19
              }, _this), index !== 0 && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["CloseOutlined"], {
                onClick: deleteExpression(index + 1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 21
              }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 17
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "meaning",
              placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
              value: v.meaning,
              onChange: onChangeText(index + 1)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 17
            }, _this)]
          }, v.expressionNumber, true, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["PlusCircleFilled"], {
        css: plusBtn,
        onClick: addExpression
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      css: footerBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowLeftOutlined"], {
        onClick: function onClick() {
          return router.replace('/');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "primary",
        shape: "round",
        css: _components_styles__WEBPACK_IMPORTED_MODULE_13__["roundBtn"],
        onClick: addPost,
        children: "\uB9CC\uB4E4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 275,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIndyaXRlUGFnZSIsImNzcyIsIndyaXRlQm94IiwidGl0bGVCb3giLCJ0YWdCb3giLCJ0YWdzIiwidGFnSW5mb0JveCIsImxpbmUiLCJleHByZXNzaW9uQm94IiwiYm94IiwicGlueWluQm94IiwicGx1c0J0biIsImZvb3RlckJveCIsIldyaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY3VycmVudEhhc2h0YWdzIiwidXNlSW5wdXQiLCJ0aXRsZSIsIm9uQ2hhbmdlVGl0bGUiLCJ0YWciLCJvbkNoYW5nZVRhZyIsInNldFRhZyIsIm9uRm9jdXNJbnB1dCIsInVzZUNhbGxiYWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9uQmx1cklucHV0Iiwib25LZXlQcmVzc1RhZyIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJpbmNsdWRlcyIsInR5cGUiLCJBRERfSEFTSFRBR19SRVFVRVNUIiwiZGF0YSIsInNsaWNlIiwib25DbGlja1RhZyIsInYiLCJSRU1PVkVfSEFTSFRBR19SRVFVRVNUIiwidXNlU3RhdGUiLCJleHByZXNzaW9uTnVtYmVyIiwicGlueWluIiwibWVhbmluZyIsImV4cHJlc3Npb25zIiwic2V0RXhwcmVzc2lvbnMiLCJvbkNoYW5nZVRleHQiLCJleHByZXNzaW9uTnVtIiwidGVtcEV4cHJlc3Npb25zIiwibWFwIiwiZXhwcmVzc2lvbiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImFkZEV4cHJlc3Npb24iLCJsZW5ndGgiLCJkZWxldGVFeHByZXNzaW9uIiwiZmlsdGVyIiwib3JkZXIiLCJhcnJhbmdlZEV4cHJlc3Npb25zIiwiYWRkUG9zdCIsIk1vZGFsIiwid2FybmluZyIsImlzQ29udGVudE51bGwiLCJjb25zb2xlIiwibG9nIiwibWluUm93cyIsImluZGV4IiwicmVwbGFjZSIsInJvdW5kQnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTtBQUVSLElBQU1FLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7QUFJQSxJQUFNQyxRQUFRLEdBQUdELDBEQUFILG9CQUFkO0FBTUEsSUFBTUUsUUFBUSxHQUFHRiwwREFBSCxvQkFBZDtBQWNBLElBQU1HLE1BQU0sR0FBR0gsMERBQUgsb0JBQVo7QUFJQSxJQUFNSSxJQUFJLEdBQUdKLDBEQUFILG9CQUFWO0FBd0JBLElBQU1LLFVBQVUsR0FBR0wsMERBQUgsb0JBQWhCO0FBU0EsSUFBTU0sSUFBSSxHQUFHTiwwREFBSCxvQkFBVjtBQU9BLElBQU1PLGFBQWEsR0FBR1AsMERBQUgsb0JBQW5CO0FBTUEsSUFBTVEsR0FBRyxHQUFHUiwwREFBSCxvQkFBVDtBQXVCQSxJQUFNUyxTQUFTLEdBQUdULDBEQUFILHFCQUFmO0FBYUEsSUFBTVUsT0FBTyxHQUFHViwwREFBSCxxQkFBYjtBQVNBLElBQU1XLFNBQVMsR0FBR1gsMERBQUgscUJBQWY7O0FBc0JBLElBQU1ZLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRmtCLHFCQUdVQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFX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O0FBQUEsYUFBb0I3QixDQUFDLENBQUNHLGdCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBc0JELFNBdkJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRixFQTJERSw4RUFBQyxrRUFBRDtBQUFrQixXQUFHLEVBQUV0QyxPQUF2QjtBQUFnQyxlQUFPLEVBQUVtRDtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBOERFO0FBQVEsU0FBRyxFQUFFbEQsU0FBYjtBQUFBLGlCQUNFLDhFQUFDLG1FQUFEO0FBQW1CLGVBQU8sRUFBRTtBQUFBLGlCQUFNRSxNQUFNLENBQUM4RCxPQUFQLENBQWUsR0FBZixDQUFOO0FBQUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsOEVBQUMsMkNBQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUF1QixhQUFLLEVBQUMsT0FBN0I7QUFBcUMsV0FBRyxFQUFFQyw0REFBMUM7QUFBb0QsZUFBTyxFQUFFVCxPQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVFRCxDQXZMRDs7R0FBTXZELEs7VUFDV0UscUQsRUFDRUUsdUQsRUFDV0MsdUQsRUFFR0ksd0QsRUFDSUEsd0Q7OztLQU4vQlQsSztBQXlMU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuZGM1M2YzZWEzMmIxN2UxOTc1NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7XHJcbiAgQXJyb3dMZWZ0T3V0bGluZWQsXHJcbiAgUGx1c0NpcmNsZUZpbGxlZCxcclxuICBDbG9zZU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQUREX0hBU0hUQUdfUkVRVUVTVCwgUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgRXhwcmVzc2lvbkJveCBmcm9tICcuLi9jb21wb25lbnRzL0V4cHJlc3Npb25Cb3gnO1xyXG5pbXBvcnQgeyByb3VuZEJ0biB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzJztcclxuaW1wb3J0IENvbnZlcnRQb3BVcCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnZlcnRQb3BVcCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IHdyaXRlUGFnZSA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCB3cml0ZUJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAzMHB4IDIwcHggMDtcclxuYDtcclxuXHJcbmNvbnN0IHRpdGxlQm94ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdGFnQm94ID0gY3NzYFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCB0YWdzID0gY3NzYFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2FkZjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzUzMWRhYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWYwZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdJbmZvQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuYDtcclxuXHJcbmNvbnN0IGxpbmUgPSBjc3NgXHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDk0YjtcclxuYDtcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBib3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOGRkZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0OTRiO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gICAgcmlnaHQ6IC0ycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGlueWluQm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBsdXNCdG4gPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGZvb3RlckJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDU4LCAyNCwgMjU1LCAyMCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBXcml0ZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjdXJyZW50SGFzaHRhZ3MgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgb25DaGFuZ2VUaXRsZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3RhZywgb25DaGFuZ2VUYWcsIHNldFRhZ10gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uRm9jdXNJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkJsdXJJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbktleVByZXNzVGFnID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcsJykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyDruYjsubjsnLzroZwg7J6F66Cl7ZWY7KeAIOyViuyVmOydhOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgaWYgKHRhZy50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAvLyDsnbTrr7gg7J6I64qUIO2VtOyLnO2DnOq3uOqwgCDslYTri5DrlYzrp4wg66as7Iqk7Yq47JeQIOy2lOqwgFxyXG4gICAgICAgICAgaWYgKCFjdXJyZW50SGFzaHRhZ3MuaW5jbHVkZXModGFnKSkge1xyXG4gICAgICAgICAgICAvLyAj7J2EIOu2meyXrOyEnCDtlbTsi5ztg5zqt7jrpbwg7J6F66Cl7ZaI7J2EIOuVjOuKlCAj7J2EIOuWvOqzoFxyXG4gICAgICAgICAgICBpZiAodGFnWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGFnLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGFnKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt0YWddXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1RhZyA9IHVzZUNhbGxiYWNrKCh2KSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHYsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtleHByZXNzaW9ucywgc2V0RXhwcmVzc2lvbnNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBleHByZXNzaW9uTnVtYmVyOiAxLCBwaW55aW46ICcnLCBtZWFuaW5nOiAnJyB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0ZW1wRXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXAoKGV4cHJlc3Npb24pID0+IHtcclxuICAgICAgICBpZiAoZXhwcmVzc2lvbk51bSA9PT0gZXhwcmVzc2lvbi5leHByZXNzaW9uTnVtYmVyKSB7XHJcbiAgICAgICAgICBleHByZXNzaW9uW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByZXNzaW9uO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RXhwcmVzc2lvbnModGVtcEV4cHJlc3Npb25zKTtcclxuICAgIH0sXHJcbiAgICBbZXhwcmVzc2lvbnNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cHJlc3Npb25OdW1iZXI6IGV4cHJlc3Npb25zLmxlbmd0aCArIDEsXHJcbiAgICAgIHBpbnlpbjogJycsXHJcbiAgICAgIG1lYW5pbmc6ICcnLFxyXG4gICAgfTtcclxuICAgIHNldEV4cHJlc3Npb25zKFsuLi5leHByZXNzaW9ucywgZGF0YV0pO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICBjb25zdCBkZWxldGVFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXhwcmVzc2lvbk51bSkgPT4gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0ZW1wRXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5maWx0ZXIoXHJcbiAgICAgICAgKHYpID0+IHYuZXhwcmVzc2lvbk51bWJlciAhPT0gZXhwcmVzc2lvbk51bVxyXG4gICAgICApO1xyXG4gICAgICBsZXQgb3JkZXIgPSAxO1xyXG4gICAgICBjb25zdCBhcnJhbmdlZEV4cHJlc3Npb25zID0gdGVtcEV4cHJlc3Npb25zLm1hcCgodikgPT4ge1xyXG4gICAgICAgIHYuZXhwcmVzc2lvbk51bWJlciA9IG9yZGVyO1xyXG4gICAgICAgIG9yZGVyKys7XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFeHByZXNzaW9ucyhbLi4uYXJyYW5nZWRFeHByZXNzaW9uc10pO1xyXG4gICAgfSxcclxuICAgIFtleHByZXNzaW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGRQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gdGl0bGUg67mE7JeI64qU7KeAIO2ZleyduFxyXG4gICAgaWYgKCF0aXRsZSkge1xyXG4gICAgICBNb2RhbC53YXJuaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+ygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXhwcmVzc2lvbiDruYTsl4jripTsp4Ag7ZmV7J24XHJcbiAgICBsZXQgaXNDb250ZW50TnVsbCA9IGZhbHNlO1xyXG4gICAgZXhwcmVzc2lvbnMubWFwKCh2KSA9PiB7XHJcbiAgICAgIGlmICghdi5waW55aW4gfHwgIXYubWVhbmluZykge1xyXG4gICAgICAgIGlzQ29udGVudE51bGwgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChpc0NvbnRlbnROdWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCftkZztmITsnbQg67mE7Ja07J6I7Iq164uI64ukLicpO1xyXG4gICAgfVxyXG4gIH0sIFt0aXRsZSwgY3VycmVudEhhc2h0YWdzLCBleHByZXNzaW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjc3M9e3dyaXRlUGFnZX0+XHJcbiAgICAgIDxkaXYgY3NzPXt3cml0ZUJveH0+XHJcbiAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICBjc3M9e3RpdGxlQm94fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRpdGxlfVxyXG4gICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjc3M9e3RhZ0JveH0+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17dGFnc30+XHJcbiAgICAgICAgICAgIHtjdXJyZW50SGFzaHRhZ3MubWFwKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17dn0gb25DbGljaz17KCkgPT4gb25DbGlja1RhZyh2KX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7YOc6re466W8IOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUYWd9XHJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc1RhZ31cclxuICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJJbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cInRhZy1pbmZvXCIgY3NzPXt0YWdJbmZvQm94fT5cclxuICAgICAgICAgICAg7Im87ZGcIO2YueydgCDsl5TthLDrpbwg7J6F66Cl7ZWY7JesIO2DnOq3uOulvCDrk7HroZ3tlaAg7IiYIOyeiOyKteuLiOuLpC4g65Ox66Gd65CcIO2DnOq3uOulvFxyXG4gICAgICAgICAgICDtgbTrpq3tlZjrqbQg7IKt7KCc65Cp64uI64ukLlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjc3M9e2xpbmV9PjwvZGl2PlxyXG4gICAgICAgIHsvKiA8RXhwcmVzc2lvbkJveCAvPiAqL31cclxuICAgICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbkJveH0+XHJcbiAgICAgICAgICB7ZXhwcmVzc2lvbnMubWFwKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY3NzPXtib3h9IGtleT17di5leHByZXNzaW9uTnVtYmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW5Cb3h9PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGlueWluXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2VnOyWtOuzkeydjOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2LnBpbnlpbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0KGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgb25DbGljaz17ZGVsZXRlRXhwcmVzc2lvbihpbmRleCArIDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8Q29udmVydFBvcFVwIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVhbmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65y77J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2Lm1lYW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHQoaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGx1c0NpcmNsZUZpbGxlZCBjc3M9e3BsdXNCdG59IG9uQ2xpY2s9e2FkZEV4cHJlc3Npb259IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9vdGVyIGNzcz17Zm9vdGVyQm94fT5cclxuICAgICAgICA8QXJyb3dMZWZ0T3V0bGluZWQgb25DbGljaz17KCkgPT4gcm91dGVyLnJlcGxhY2UoJy8nKX0gLz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIGNzcz17cm91bmRCdG59IG9uQ2xpY2s9e2FkZFBvc3R9PlxyXG4gICAgICAgICAg66eM65Ok6riwXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9