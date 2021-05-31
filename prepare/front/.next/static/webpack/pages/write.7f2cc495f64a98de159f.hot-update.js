webpackHotUpdate_N_E("pages/write",{

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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n  flex-wrap: nowrap;\n\n  button {\n    margin-right: 5px;\n    margin-bottom: 5px;\n    font-size: 14px;\n    border: 1px solid #d3adf7;\n    border-radius: 2px;\n    color: #531dab;\n    background-color: #f9f0ff;\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n  }\n\n  input {\n    font-size: 14px;\n    border: none;\n\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n  }\n"]);

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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  padding: 4px 0;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  border: none;\n\n  &:focus {\n    border: none;\n    box-shadow: none;\n  }\n\n  @media (min-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 40px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px 20px 0;\n\n  @media (min-width: 768px) {\n    margin: 50px 65px 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  // position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsxImportSource @emotion/react */











var TextArea = antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea;

var Write = function Write() {
  _s();

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
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/');
    }
  }, [addPostDone]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
          lineNumber: 164,
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
                lineNumber: 175,
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
              lineNumber: 180,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            id: "tag-info",
            css: tagInfoBox,
            children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          css: line
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
                  lineNumber: 200,
                  columnNumber: 21
                }, _this), index !== 0 && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["CloseOutlined"], {
                  onClick: deleteExpression(index + 1)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 23
                }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
                name: "meaning",
                placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
                value: v.meaning,
                onChange: onChangeText(index + 1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, _this)]
            }, v.expressionNumber, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          css: plusBtnBox,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["PlusCircleFilled"], {
            onClick: addExpression
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
        css: footerBox,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowLeftOutlined"], {
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/');
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          shape: "round",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_13__["roundBtn"],
          onClick: addPost,
          children: "\uB9CC\uB4E4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Write, "ZRs4/mggB23AaqojSb1RE0ezFI0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_11__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIldyaXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY3VycmVudEhhc2h0YWdzIiwiYWRkUG9zdERvbmUiLCJ1c2VJbnB1dCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInRhZyIsIm9uQ2hhbmdlVGFnIiwic2V0VGFnIiwib25Gb2N1c0lucHV0IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwib25CbHVySW5wdXQiLCJvbktleVByZXNzVGFnIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImluY2x1ZGVzIiwidHlwZSIsIkFERF9IQVNIVEFHX1JFUVVFU1QiLCJkYXRhIiwic2xpY2UiLCJvbkNsaWNrVGFnIiwidiIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJ1c2VTdGF0ZSIsImV4cHJlc3Npb25OdW1iZXIiLCJwaW55aW4iLCJtZWFuaW5nIiwiZXhwcmVzc2lvbnMiLCJzZXRFeHByZXNzaW9ucyIsIm9uQ2hhbmdlVGV4dCIsImV4cHJlc3Npb25OdW0iLCJ0ZW1wRXhwcmVzc2lvbnMiLCJtYXAiLCJleHByZXNzaW9uIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYWRkRXhwcmVzc2lvbiIsImxlbmd0aCIsImRlbGV0ZUV4cHJlc3Npb24iLCJmaWx0ZXIiLCJvcmRlciIsImFycmFuZ2VkRXhwcmVzc2lvbnMiLCJhZGRQb3N0IiwiaXNFeHByZXNzaW9uTnVsbCIsIk1vZGFsIiwid2FybmluZyIsIkFERF9QT1NUX1JFUVVFU1QiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJyZXBsYWNlIiwid3JpdGVQYWdlIiwid3JpdGVCb3giLCJ0aXRsZUJveCIsIm1pblJvd3MiLCJ0YWdCb3giLCJ0YWdzIiwiaW5kZXgiLCJ0YWdJbmZvQm94IiwibGluZSIsImV4cHJlc3Npb25Cb3giLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuQm94IiwiZm9vdGVyQm94Iiwicm91bmRCdG4iLCJjc3MiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFFUixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHFCQUV1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGbEM7QUFBQSxNQUVWQyxlQUZVLGdCQUVWQSxlQUZVO0FBQUEsTUFFT0MsV0FGUCxnQkFFT0EsV0FGUDs7QUFBQSxrQkFJYUMsZ0VBQVEsQ0FBQyxFQUFELENBSnJCO0FBQUE7QUFBQSxNQUlYQyxLQUpXO0FBQUEsTUFJSkMsYUFKSTs7QUFBQSxtQkFLaUJGLGdFQUFRLENBQUMsRUFBRCxDQUx6QjtBQUFBO0FBQUEsTUFLWEcsR0FMVztBQUFBLE1BS05DLFdBTE07QUFBQSxNQUtPQyxNQUxQOztBQU9sQixNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNyQ0MsWUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUFwQyxDQUEwQ0MsT0FBMUMsR0FBb0QsT0FBcEQ7QUFDRCxHQUYrQixFQUU3QixF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SCxtQkFBZjtBQUlBLElBQU1kLFFBQVEsR0FBR2MsMERBQUgsb0JBQWQ7QUFVQSxJQUFNYixRQUFRLEdBQUdhLDBEQUFILG9CQUFkO0FBbUJBLElBQU1YLE1BQU0sR0FBR1csMERBQUgsb0JBQVo7QUFJQSxJQUFNVixJQUFJLEdBQUdVLDBEQUFILG9CQUFWO0FBZ0NBLElBQU1SLFVBQVUsR0FBR1EsMERBQUgsb0JBQWhCO0FBU0EsSUFBTVAsSUFBSSxHQUFHTywwREFBSCxvQkFBVjtBQU9BLElBQU1OLGFBQWEsR0FBR00sMERBQUgsb0JBQW5CO0FBTUEsSUFBTUwsR0FBRyxHQUFHSywwREFBSCxvQkFBVDtBQXVCQSxJQUFNSixTQUFTLEdBQUdJLDBEQUFILHFCQUFmO0FBYUEsSUFBTUgsVUFBVSxHQUFHRywwREFBSCxxQkFBaEI7QUFXQSxJQUFNRixTQUFTLEdBQUdFLDBEQUFILHFCQUFmO0FBc0JBLElBQU1DLE1BQU0sR0FBR0MsNEVBQUgscUJBQVo7TUFBTUQsTTtBQVFTOUUsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuN2YyY2M0OTVmNjRhOThkZTE1OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICBBcnJvd0xlZnRPdXRsaW5lZCxcclxuICBQbHVzQ2lyY2xlRmlsbGVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyByb3VuZEJ0biB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGVzJztcclxuaW1wb3J0IENvbnZlcnRQb3BVcCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnZlcnRQb3BVcCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGN1cnJlbnRIYXNodGFncywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFt0aXRsZSwgb25DaGFuZ2VUaXRsZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3RhZywgb25DaGFuZ2VUYWcsIHNldFRhZ10gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uRm9jdXNJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkJsdXJJbnB1dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWctaW5mbycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbktleVByZXNzVGFnID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcsJykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyDruYjsubjsnLzroZwg7J6F66Cl7ZWY7KeAIOyViuyVmOydhOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgaWYgKHRhZy50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAvLyDsnbTrr7gg7J6I64qUIO2VtOyLnO2DnOq3uOqwgCDslYTri5DrlYzrp4wg66as7Iqk7Yq47JeQIOy2lOqwgFxyXG4gICAgICAgICAgaWYgKCFjdXJyZW50SGFzaHRhZ3MuaW5jbHVkZXModGFnKSkge1xyXG4gICAgICAgICAgICAvLyAj7J2EIOu2meyXrOyEnCDtlbTsi5ztg5zqt7jrpbwg7J6F66Cl7ZaI7J2EIOuVjOuKlCAj7J2EIOuWvOqzoFxyXG4gICAgICAgICAgICBpZiAodGFnWzBdID09PSAnIycpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfSEFTSFRBR19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGFnLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGFnKCcnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt0YWddXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1RhZyA9IHVzZUNhbGxiYWNrKCh2KSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHYsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtleHByZXNzaW9ucywgc2V0RXhwcmVzc2lvbnNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBleHByZXNzaW9uTnVtYmVyOiAxLCBwaW55aW46ICcnLCBtZWFuaW5nOiAnJyB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0ZW1wRXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXAoKGV4cHJlc3Npb24pID0+IHtcclxuICAgICAgICBpZiAoZXhwcmVzc2lvbk51bSA9PT0gZXhwcmVzc2lvbi5leHByZXNzaW9uTnVtYmVyKSB7XHJcbiAgICAgICAgICBleHByZXNzaW9uW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBleHByZXNzaW9uO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0RXhwcmVzc2lvbnModGVtcEV4cHJlc3Npb25zKTtcclxuICAgIH0sXHJcbiAgICBbZXhwcmVzc2lvbnNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkRXhwcmVzc2lvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cHJlc3Npb25OdW1iZXI6IGV4cHJlc3Npb25zLmxlbmd0aCArIDEsXHJcbiAgICAgIHBpbnlpbjogJycsXHJcbiAgICAgIG1lYW5pbmc6ICcnLFxyXG4gICAgfTtcclxuICAgIHNldEV4cHJlc3Npb25zKFsuLi5leHByZXNzaW9ucywgZGF0YV0pO1xyXG4gIH0sIFtleHByZXNzaW9uc10pO1xyXG5cclxuICBjb25zdCBkZWxldGVFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXhwcmVzc2lvbk51bSkgPT4gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0ZW1wRXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5maWx0ZXIoXHJcbiAgICAgICAgKHYpID0+IHYuZXhwcmVzc2lvbk51bWJlciAhPT0gZXhwcmVzc2lvbk51bVxyXG4gICAgICApO1xyXG4gICAgICBsZXQgb3JkZXIgPSAxO1xyXG4gICAgICBjb25zdCBhcnJhbmdlZEV4cHJlc3Npb25zID0gdGVtcEV4cHJlc3Npb25zLm1hcCgodikgPT4ge1xyXG4gICAgICAgIHYuZXhwcmVzc2lvbk51bWJlciA9IG9yZGVyO1xyXG4gICAgICAgIG9yZGVyKys7XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFeHByZXNzaW9ucyhbLi4uYXJyYW5nZWRFeHByZXNzaW9uc10pO1xyXG4gICAgfSxcclxuICAgIFtleHByZXNzaW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGRQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbGV0IGlzRXhwcmVzc2lvbk51bGwgPSBmYWxzZTtcclxuICAgIGV4cHJlc3Npb25zLm1hcCgodikgPT4ge1xyXG4gICAgICBpZiAoIXYucGlueWluIHx8ICF2Lm1lYW5pbmcpIHtcclxuICAgICAgICBpc0V4cHJlc3Npb25OdWxsID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0aXRsZSAmJiAhaXNFeHByZXNzaW9uTnVsbCkge1xyXG4gICAgICBNb2RhbC53YXJuaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+ygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpQhJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNFeHByZXNzaW9uTnVsbCAmJiB0aXRsZSkge1xyXG4gICAgICBNb2RhbC53YXJuaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+u5hOyWtOyeiOuKlCDtkZztmITsnYQg66qo65GQIOyxhOybjOyjvOyEuOyalCEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghdGl0bGUgJiYgaXNFeHByZXNzaW9uTnVsbCkge1xyXG4gICAgICBNb2RhbC53YXJuaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+u5hOyWtOyeiOuKlCDsoJzrqqnqs7wg7ZGc7ZiE7J2EIOuqqOuRkCDssYTsm4zso7zshLjsmpQhJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g67mI7Lm4IOyXhuydtCDrqqjrkZAg7J6F66Cl65CY7JeI7J2EIOuVjCDtkZztmIQg7JeF66Gc65Oc7ZWY6riwXHJcbiAgICBpZiAodGl0bGUgJiYgIWlzRXhwcmVzc2lvbk51bGwpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgdGFnOiBjdXJyZW50SGFzaHRhZ3MsXHJcbiAgICAgICAgICBleHByZXNzaW9uOiBleHByZXNzaW9ucyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdGl0bGUsIGN1cnJlbnRIYXNodGFncywgZXhwcmVzc2lvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRQb3N0RG9uZSkge1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRQb3N0RG9uZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8ZGl2IGNzcz17d3JpdGVQYWdlfT5cclxuICAgICAgICA8ZGl2IGNzcz17d3JpdGVCb3h9PlxyXG4gICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgIGNzcz17dGl0bGVCb3h9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9XHJcbiAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDEgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17dGFnQm94fT5cclxuICAgICAgICAgICAgPGRpdiBjc3M9e3RhZ3N9PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50SGFzaHRhZ3MubWFwKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Z9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tUYWcodil9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt2fVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2DnOq3uOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RhZ31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRhZ31cclxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29uS2V5UHJlc3NUYWd9XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cklucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidGFnLWluZm9cIiBjc3M9e3RhZ0luZm9Cb3h9PlxyXG4gICAgICAgICAgICAgIOyJvO2RnCDtmLnsnYAg7JeU7YSw66W8IOyeheugpe2VmOyXrCDtg5zqt7jrpbwg65Ox66Gd7ZWgIOyImCDsnojsirXri4jri6QuIOuTseuhneuQnCDtg5zqt7jrpbxcclxuICAgICAgICAgICAgICDtgbTrpq3tlZjrqbQg7IKt7KCc65Cp64uI64ukLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2xpbmV9PjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2V4cHJlc3Npb25Cb3h9PlxyXG4gICAgICAgICAgICB7ZXhwcmVzc2lvbnMubWFwKCh2LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNzcz17Ym94fSBrZXk9e3YuZXhwcmVzc2lvbk51bWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtwaW55aW5Cb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBpbnlpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2VnOyWtOuzkeydjOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3YucGlueWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dChpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIG9uQ2xpY2s9e2RlbGV0ZUV4cHJlc3Npb24oaW5kZXggKyAxKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb252ZXJ0UG9wVXAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZWFuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuucu+ydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2Lm1lYW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dChpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY3NzPXtwbHVzQnRuQm94fT5cclxuICAgICAgICAgICAgPFBsdXNDaXJjbGVGaWxsZWQgb25DbGljaz17YWRkRXhwcmVzc2lvbn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb290ZXIgY3NzPXtmb290ZXJCb3h9PlxyXG4gICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIG9uQ2xpY2s9eygpID0+IFJvdXRlci5yZXBsYWNlKCcvJyl9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiIGNzcz17cm91bmRCdG59IG9uQ2xpY2s9e2FkZFBvc3R9PlxyXG4gICAgICAgICAgICDrp4zrk6TquLBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB3cml0ZVBhZ2UgPSBjc3NgXHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3Qgd3JpdGVCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luOiA1MHB4IDY1cHggMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0aXRsZUJveCA9IGNzc2BcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0JveCA9IGNzc2BcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgdGFncyA9IGNzc2BcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNhZGY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM1MzFkYWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmMGZmO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRhZ0luZm9Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5gO1xyXG5cclxuY29uc3QgbGluZSA9IGNzc2BcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0OTRiO1xyXG5gO1xyXG5cclxuY29uc3QgZXhwcmVzc2lvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IGJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzE4ZGRmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ5NGI7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICByaWdodDogLTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5Cb3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGx1c0J0bkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogIzNhMThmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBmb290ZXJCb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSg1OCwgMjQsIDI1NSwgMjAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgLmFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tYm9keVxyXG4gICAgPiAuYW50LW1vZGFsLWNvbmZpcm0tdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==