webpackHotUpdate_N_E("pages/write",{

/***/ "./components/ExpressionBox.js":
false,

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");
/* harmony import */ var _components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ConvertPopUp */ "./components/ConvertPopUp.js");






var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\write.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject13() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .ant-modal-confirm-body-wrapper\n    > .ant-modal-confirm-body\n    > .ant-modal-confirm-title {\n    font-weight: 700;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  padding: 15px;\n  box-shadow: 0px 0px 8px rgba(58, 24, 255, 20%);\n  background-color: #fff;\n\n  span {\n    cursor: pointer;\n  }\n\n  svg {\n    font-size: 20px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 80px;\n\n  svg {\n    font-size: 50px;\n    color: #3a18ff;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  height: 52px;\n  margin-bottom: 15px;\n\n  button {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    font-size: 13px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  width: 100%;\n  padding: 30px 15px;\n  margin-bottom: 20px;\n  border: 3px solid #18ddff;\n  border-radius: 4px;\n\n  input {\n    width: 100%;\n    font-size: 16px;\n    border: none;\n    border-bottom: 1px solid #48494b;\n  }\n\n  span {\n    position: absolute;\n    top: -12px;\n    right: -2px;\n    cursor: pointer;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 40px;\n  height: 10px;\n  margin-bottom: 25px;\n  background-color: #48494b;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n  width: 220px;\n  padding: 5px;\n  font-size: 13px;\n  color: #fff;\n  background-color: #3a18ff;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n  flex-wrap: nowrap;\n\n  button {\n    margin-right: 5px;\n    margin-bottom: 5px;\n    font-size: 14px;\n    border: 1px solid #d3adf7;\n    border-radius: 2px;\n    color: #531dab;\n    background-color: #f9f0ff;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  input {\n    font-size: 14px;\n    border: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  padding: 4px 0;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  border: none;\n\n  &:focus {\n    border: none;\n    box-shadow: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px 20px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */











var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea;

var Write = function Write() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.post;
  }),
      currentHashtags = _useSelector.currentHashtags,
      addPostDone = _useSelector.addPostDone;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"])(''),
      _useInput2 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useInput, 2),
      title = _useInput2[0],
      onChangeTitle = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"])(''),
      _useInput4 = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useInput3, 3),
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
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["ADD_HASHTAG_REQUEST"],
              data: tag.slice(1)
            });
          } else {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["ADD_HASHTAG_REQUEST"],
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["REMOVE_HASHTAG_REQUEST"],
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
    setExpressions([].concat(Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(expressions), [data]));
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
      setExpressions(Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arrangedExpressions));
    };
  }, [expressions]);
  var addPost = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    var isExpressionNull = false;
    expressions.map(function (v) {
      if (!v.pinyin || !v.meaning) {
        isExpressionNull = true;
      }
    });

    if (!title && !isExpressionNull) {
      antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].warning({
        title: '제목을 입력해주세요!'
      });
    }

    if (isExpressionNull && title) {
      antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].warning({
        title: '비어있는 표현을 모두 채워주세요!'
      });
    }

    if (!title && isExpressionNull) {
      antd__WEBPACK_IMPORTED_MODULE_5__["Modal"].warning({
        title: '비어있는 제목과 표현을 모두 채워주세요!'
      });
    } // 빈칸 없이 모두 입력되었을 때 표현 업로드하기


    if (title && !isExpressionNull) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_12__["ADD_POST_REQUEST"],
        data: {
          title: title,
          tag: currentHashtags,
          expression: expressions
        }
      });
    }
  }, [title, currentHashtags, expressions]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (addPostDone) {
      router.replace('/');
    }
  }, [addPostDone]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      css: writePage,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        css: writeBox,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(TextArea, {
          css: titleBox,
          placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
          value: title,
          onChange: onChangeTitle,
          autoSize: {
            minRows: 1
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          css: tagBox,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            css: tags,
            children: [currentHashtags.map(function (v, index) {
              return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
                onClick: function onClick() {
                  return onClickTag(v);
                },
                children: v
              }, v, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 19
              }, _this);
            }), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
              value: tag,
              onChange: onChangeTag,
              onKeyPress: onKeyPressTag,
              onFocus: onFocusInput,
              onBlur: onBlurInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            id: "tag-info",
            css: tagInfoBox,
            children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          css: line
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          css: expressionBox,
          children: expressions.map(function (v, index) {
            return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              css: box,
              children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                css: pinyinBox,
                children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                  name: "pinyin",
                  placeholder: "\uD55C\uC5B4\uBCD1\uC74C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
                  value: v.pinyin,
                  onChange: onChangeText(index + 1)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 21
                }, _this), index !== 0 && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["CloseOutlined"], {
                  onClick: deleteExpression(index + 1)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 23
                }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 19
              }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                name: "meaning",
                placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
                value: v.meaning,
                onChange: onChangeText(index + 1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 19
              }, _this)]
            }, v.expressionNumber, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          css: plusBtnBox,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["PlusCircleFilled"], {
            onClick: addExpression
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
        css: footerBox,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowLeftOutlined"], {
          onClick: function onClick() {
            return router.replace('/');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          shape: "round",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_13__["roundBtn"],
          onClick: addPost,
          children: "\uB9CC\uB4E4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Write, "nHpAoZH5DdDyWiHpDaSaozZuiTA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"]];
});

_c = Write;
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
var plusBtnBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject11());
var footerBox = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject12());
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["createGlobalStyle"])(_templateObject13());
_c2 = Global;
/* harmony default export */ __webpack_exports__["default"] = (Write);

var _c, _c2;

$RefreshReg$(_c, "Write");
$RefreshReg$(_c2, "Global");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIldyaXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY3VycmVudEhhc2h0YWdzIiwiYWRkUG9zdERvbmUiLCJ1c2VJbnB1dCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInRhZyIsIm9uQ2hhbmdlVGFnIiwic2V0VGFnIiwib25Gb2N1c0lucHV0IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwib25CbHVySW5wdXQiLCJvbktleVByZXNzVGFnIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImluY2x1ZGVzIiwidHlwZSIsIkFERF9IQVNIVEFHX1JFUVVFU1QiLCJkYXRhIiwic2xpY2UiLCJvbkNsaWNrVGFnIiwidiIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJ1c2VTdGF0ZSIsImV4cHJlc3Npb25OdW1iZXIiLCJwaW55aW4iLCJtZWFuaW5nIiwiZXhwcmVzc2lvbnMiLCJzZXRFeHByZXNzaW9ucyIsIm9uQ2hhbmdlVGV4dCIsImV4cHJlc3Npb25OdW0iLCJ0ZW1wRXhwcmVzc2lvbnMiLCJtYXAiLCJleHByZXNzaW9uIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYWRkRXhwcmVzc2lvbiIsImxlbmd0aCIsImRlbGV0ZUV4cHJlc3Npb24iLCJmaWx0ZXIiLCJvcmRlciIsImFycmFuZ2VkRXhwcmVzc2lvbnMiLCJhZGRQb3N0IiwiaXNFeHByZXNzaW9uTnVsbCIsIk1vZGFsIiwid2FybmluZyIsIkFERF9QT1NUX1JFUVVFU1QiLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwid3JpdGVQYWdlIiwid3JpdGVCb3giLCJ0aXRsZUJveCIsIm1pblJvd3MiLCJ0YWdCb3giLCJ0YWdzIiwiaW5kZXgiLCJ0YWdJbmZvQm94IiwibGluZSIsImV4cHJlc3Npb25Cb3giLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuQm94IiwiZm9vdGVyQm94Iiwicm91bmRCdG4iLCJjc3MiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFFUixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZrQixxQkFHdUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSGxDO0FBQUEsTUFHVkMsZUFIVSxnQkFHVkEsZUFIVTtBQUFBLE1BR09DLFdBSFAsZ0JBR09BLFdBSFA7O0FBQUEsa0JBS2FDLGdFQUFRLENBQUMsRUFBRCxDQUxyQjtBQUFBO0FBQUEsTUFLWEMsS0FMVztBQUFBLE1BS0pDLGFBTEk7O0FBQUEsbUJBTWlCRixnRUFBUSxDQUFDLEVBQUQsQ0FOekI7QUFBQTtBQUFBLE1BTVhHLEdBTlc7QUFBQSxNQU1OQyxXQU5NO0FBQUEsTUFNT0MsTUFOUDs7QUFRbEIsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDckNDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0Ms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LEVBRVZLLHdELEVBQ0lBLHdEOzs7S0FOL0JWLEs7QUFxTk4sSUFBTStELFNBQVMsR0FBR2UsMERBQUgsbUJBQWY7QUFJQSxJQUFNZCxRQUFRLEdBQUdjLDBEQUFILG9CQUFkO0FBTUEsSUFBTWIsUUFBUSxHQUFHYSwwREFBSCxvQkFBZDtBQWNBLElBQU1YLE1BQU0sR0FBR1csMERBQUgsb0JBQVo7QUFJQSxJQUFNVixJQUFJLEdBQUdVLDBEQUFILG9CQUFWO0FBd0JBLElBQU1SLFVBQVUsR0FBR1EsMERBQUgsb0JBQWhCO0FBU0EsSUFBTVAsSUFBSSxHQUFHTywwREFBSCxvQkFBVjtBQU9BLElBQU1OLGFBQWEsR0FBR00sMERBQUgsb0JBQW5CO0FBTUEsSUFBTUwsR0FBRyxHQUFHSywwREFBSCxvQkFBVDtBQXVCQSxJQUFNSixTQUFTLEdBQUdJLDBEQUFILHFCQUFmO0FBYUEsSUFBTUgsVUFBVSxHQUFHRywwREFBSCxxQkFBaEI7QUFXQSxJQUFNRixTQUFTLEdBQUdFLDBEQUFILHFCQUFmO0FBc0JBLElBQU1DLE1BQU0sR0FBR0MsNEVBQUgscUJBQVo7TUFBTUQsTTtBQVFTL0Usb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuZmRjZDgyY2NlNzEwZWY0MzI2N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICBBcnJvd0xlZnRPdXRsaW5lZCxcclxuICBQbHVzQ2lyY2xlRmlsbGVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHtcclxuICBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gIFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcyc7XHJcbmltcG9ydCBDb252ZXJ0UG9wVXAgZnJvbSAnLi4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBXcml0ZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBjdXJyZW50SGFzaHRhZ3MsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICBjb25zdCBbdGl0bGUsIG9uQ2hhbmdlVGl0bGVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFt0YWcsIG9uQ2hhbmdlVGFnLCBzZXRUYWddID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvbkZvY3VzSW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25CbHVySW5wdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFnLWluZm8nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25LZXlQcmVzc1RhZyA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnLCcpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8g67mI7Lm47Jy866GcIOyeheugpe2VmOyngCDslYrslZjsnYTrlYzrp4wg66as7Iqk7Yq47JeQIOy2lOqwgFxyXG4gICAgICAgIGlmICh0YWcudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgLy8g7J2066+4IOyeiOuKlCDtlbTsi5ztg5zqt7jqsIAg7JWE64uQ65WM66eMIOumrOyKpO2KuOyXkCDstpTqsIBcclxuICAgICAgICAgIGlmICghY3VycmVudEhhc2h0YWdzLmluY2x1ZGVzKHRhZykpIHtcclxuICAgICAgICAgICAgLy8gI+ydhCDrtpnsl6zshJwg7ZW07Iuc7YOc6re466W8IOyeheugpe2WiOydhCDrlYzripQgI+ydhCDrlrzqs6BcclxuICAgICAgICAgICAgaWYgKHRhZ1swXSA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRhZy5zbGljZSgxKSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGFnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRhZygnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbdGFnXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tUYWcgPSB1c2VDYWxsYmFjaygodikgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICBkYXRhOiB2LFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbZXhwcmVzc2lvbnMsIHNldEV4cHJlc3Npb25zXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZXhwcmVzc2lvbk51bWJlcjogMSwgcGlueWluOiAnJywgbWVhbmluZzogJycgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXhwcmVzc2lvbk51bSkgPT4gKGUpID0+IHtcclxuICAgICAgY29uc3QgdGVtcEV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKChleHByZXNzaW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGV4cHJlc3Npb25OdW0gPT09IGV4cHJlc3Npb24uZXhwcmVzc2lvbk51bWJlcikge1xyXG4gICAgICAgICAgZXhwcmVzc2lvbltlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKHRlbXBFeHByZXNzaW9ucyk7XHJcbiAgICB9LFxyXG4gICAgW2V4cHJlc3Npb25zXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZEV4cHJlc3Npb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBleHByZXNzaW9uTnVtYmVyOiBleHByZXNzaW9ucy5sZW5ndGggKyAxLFxyXG4gICAgICBwaW55aW46ICcnLFxyXG4gICAgICBtZWFuaW5nOiAnJyxcclxuICAgIH07XHJcbiAgICBzZXRFeHByZXNzaW9ucyhbLi4uZXhwcmVzc2lvbnMsIGRhdGFdKTtcclxuICB9LCBbZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+ICgpID0+IHtcclxuICAgICAgY29uc3QgdGVtcEV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMuZmlsdGVyKFxyXG4gICAgICAgICh2KSA9PiB2LmV4cHJlc3Npb25OdW1iZXIgIT09IGV4cHJlc3Npb25OdW1cclxuICAgICAgKTtcclxuICAgICAgbGV0IG9yZGVyID0gMTtcclxuICAgICAgY29uc3QgYXJyYW5nZWRFeHByZXNzaW9ucyA9IHRlbXBFeHByZXNzaW9ucy5tYXAoKHYpID0+IHtcclxuICAgICAgICB2LmV4cHJlc3Npb25OdW1iZXIgPSBvcmRlcjtcclxuICAgICAgICBvcmRlcisrO1xyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RXhwcmVzc2lvbnMoWy4uLmFycmFuZ2VkRXhwcmVzc2lvbnNdKTtcclxuICAgIH0sXHJcbiAgICBbZXhwcmVzc2lvbnNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxldCBpc0V4cHJlc3Npb25OdWxsID0gZmFsc2U7XHJcbiAgICBleHByZXNzaW9ucy5tYXAoKHYpID0+IHtcclxuICAgICAgaWYgKCF2LnBpbnlpbiB8fCAhdi5tZWFuaW5nKSB7XHJcbiAgICAgICAgaXNFeHByZXNzaW9uTnVsbCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGl0bGUgJiYgIWlzRXhwcmVzc2lvbk51bGwpIHtcclxuICAgICAgTW9kYWwud2FybmluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqUIScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRXhwcmVzc2lvbk51bGwgJiYgdGl0bGUpIHtcclxuICAgICAgTW9kYWwud2FybmluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfruYTslrTsnojripQg7ZGc7ZiE7J2EIOuqqOuRkCDssYTsm4zso7zshLjsmpQhJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRpdGxlICYmIGlzRXhwcmVzc2lvbk51bGwpIHtcclxuICAgICAgTW9kYWwud2FybmluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfruYTslrTsnojripQg7KCc66qp6rO8IO2RnO2YhOydhCDrqqjrkZAg7LGE7JuM7KO87IS47JqUIScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOu5iOy5uCDsl4bsnbQg66qo65GQIOyeheugpeuQmOyXiOydhCDrlYwg7ZGc7ZiEIOyXheuhnOuTnO2VmOq4sFxyXG4gICAgaWYgKHRpdGxlICYmICFpc0V4cHJlc3Npb25OdWxsKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgIHRhZzogY3VycmVudEhhc2h0YWdzLFxyXG4gICAgICAgICAgZXhwcmVzc2lvbjogZXhwcmVzc2lvbnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3RpdGxlLCBjdXJyZW50SGFzaHRhZ3MsIGV4cHJlc3Npb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkUG9zdERvbmUpIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgIH1cclxuICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPGRpdiBjc3M9e3dyaXRlUGFnZX0+XHJcbiAgICAgICAgPGRpdiBjc3M9e3dyaXRlQm94fT5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICBjc3M9e3RpdGxlQm94fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRpdGxlfVxyXG4gICAgICAgICAgICBhdXRvU2l6ZT17eyBtaW5Sb3dzOiAxIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3RhZ0JveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY3NzPXt0YWdzfT5cclxuICAgICAgICAgICAgICB7Y3VycmVudEhhc2h0YWdzLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXt2fSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrVGFnKHYpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dn1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtg5zqt7jrpbwg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUYWd9XHJcbiAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktleVByZXNzVGFnfVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c0lucHV0fVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJJbnB1dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInRhZy1pbmZvXCIgY3NzPXt0YWdJbmZvQm94fT5cclxuICAgICAgICAgICAgICDsibztkZwg7Zi57J2AIOyXlO2EsOulvCDsnoXroKXtlZjsl6wg7YOc6re466W8IOuTseuhne2VoCDsiJgg7J6I7Iq164uI64ukLiDrk7HroZ3rkJwg7YOc6re466W8XHJcbiAgICAgICAgICAgICAg7YG066at7ZWY66m0IOyCreygnOuQqeuLiOuLpC5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY3NzPXtsaW5lfT48L2Rpdj5cclxuICAgICAgICAgIHsvKiA8RXhwcmVzc2lvbkJveCAvPiAqL31cclxuICAgICAgICAgIDxkaXYgY3NzPXtleHByZXNzaW9uQm94fT5cclxuICAgICAgICAgICAge2V4cHJlc3Npb25zLm1hcCgodiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjc3M9e2JveH0ga2V5PXt2LmV4cHJlc3Npb25OdW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNzcz17cGlueWluQm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaW55aW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlZzslrTrs5HsnYzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2LnBpbnlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHQoaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBvbkNsaWNrPXtkZWxldGVFeHByZXNzaW9uKGluZGV4ICsgMSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8Q29udmVydFBvcFVwIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVhbmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrnLvsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17di5tZWFuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHQoaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17cGx1c0J0bkJveH0+XHJcbiAgICAgICAgICAgIDxQbHVzQ2lyY2xlRmlsbGVkIG9uQ2xpY2s9e2FkZEV4cHJlc3Npb259IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9vdGVyIGNzcz17Zm9vdGVyQm94fT5cclxuICAgICAgICAgIDxBcnJvd0xlZnRPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucmVwbGFjZSgnLycpfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIiBjc3M9e3JvdW5kQnRufSBvbkNsaWNrPXthZGRQb3N0fT5cclxuICAgICAgICAgICAg66eM65Ok6riwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3Qgd3JpdGVQYWdlID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IHdyaXRlQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgdGl0bGVCb3ggPSBjc3NgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdCb3ggPSBjc3NgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IHRhZ3MgPSBjc3NgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzYWRmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjNTMxZGFiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjBmZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0luZm9Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5gO1xyXG5cclxuY29uc3QgbGluZSA9IGNzc2BcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0OTRiO1xyXG5gO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IGJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzE4ZGRmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ5NGI7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICByaWdodDogLTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5Cb3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGx1c0J0bkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmb290ZXJCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg1OCwgMjQsIDI1NSwgMjAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLmFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tYm9keVxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==