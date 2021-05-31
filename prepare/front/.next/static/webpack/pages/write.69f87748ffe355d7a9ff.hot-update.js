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
  var data = Object(C_Users_Desktop_for_portfolio_2021_April_prepare_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin: 30px 20px 0;\n\n  @media (min-width: 768px) {\n    margin: 60px 40px 0;\n  }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUuanMiXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJJbnB1dCIsIldyaXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiY3VycmVudEhhc2h0YWdzIiwiYWRkUG9zdERvbmUiLCJ1c2VJbnB1dCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInRhZyIsIm9uQ2hhbmdlVGFnIiwic2V0VGFnIiwib25Gb2N1c0lucHV0IiwidXNlQ2FsbGJhY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwib25CbHVySW5wdXQiLCJvbktleVByZXNzVGFnIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImluY2x1ZGVzIiwidHlwZSIsIkFERF9IQVNIVEFHX1JFUVVFU1QiLCJkYXRhIiwic2xpY2UiLCJvbkNsaWNrVGFnIiwidiIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJ1c2VTdGF0ZSIsImV4cHJlc3Npb25OdW1iZXIiLCJwaW55aW4iLCJtZWFuaW5nIiwiZXhwcmVzc2lvbnMiLCJzZXRFeHByZXNzaW9ucyIsIm9uQ2hhbmdlVGV4dCIsImV4cHJlc3Npb25OdW0iLCJ0ZW1wRXhwcmVzc2lvbnMiLCJtYXAiLCJleHByZXNzaW9uIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYWRkRXhwcmVzc2lvbiIsImxlbmd0aCIsImRlbGV0ZUV4cHJlc3Npb24iLCJmaWx0ZXIiLCJvcmRlciIsImFycmFuZ2VkRXhwcmVzc2lvbnMiLCJhZGRQb3N0IiwiaXNFeHByZXNzaW9uTnVsbCIsIk1vZGFsIiwid2FybmluZyIsIkFERF9QT1NUX1JFUVVFU1QiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJyZXBsYWNlIiwid3JpdGVQYWdlIiwid3JpdGVCb3giLCJ0aXRsZUJveCIsIm1pblJvd3MiLCJ0YWdCb3giLCJ0YWdzIiwiaW5kZXgiLCJ0YWdJbmZvQm94IiwibGluZSIsImV4cHJlc3Npb25Cb3giLCJib3giLCJwaW55aW5Cb3giLCJwbHVzQnRuQm94IiwiZm9vdGVyQm94Iiwicm91bmRCdG4iLCJjc3MiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFFUixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHFCQUV1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGbEM7QUFBQSxNQUVWQyxlQUZVLGdCQUVWQSxlQUZVO0FBQUEsTUFFT0MsV0FGUCxnQkFFT0EsV0FGUDs7QUFBQSxrQkFJYUMsZ0VBQVEsQ0FBQyxFQUFELENBSnJCO0FBQUE7QUFBQSxNQUlYQyxLQUpXO0FBQUEsTUFJSkMsYUFKSTs7QUFBQSxtQkFLaUJGLGdFQUFRLENBQUMsRUFBRCxDQUx6QjtBQUFBO0FBQUEsTUFLWEcsR0FMVztBQUFBLE1BS05DLFdBTE07QUFBQSxNQUtPQyxNQUxQOztBQU9sQixNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNyQ0MsWUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxLQUFwQyxDQUEwQ0MsT0FBMUMsR0FBb0QsT0FBcEQ7QUFDRCxHQUYrQixFQUU3QixF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SCxtQkFBZjtBQUlBLElBQU1kLFFBQVEsR0FBR2MsMERBQUgsb0JBQWQ7QUFVQSxJQUFNYixRQUFRLEdBQUdhLDBEQUFILG9CQUFkO0FBY0EsSUFBTVgsTUFBTSxHQUFHVywwREFBSCxvQkFBWjtBQUlBLElBQU1WLElBQUksR0FBR1UsMERBQUgsb0JBQVY7QUF3QkEsSUFBTVIsVUFBVSxHQUFHUSwwREFBSCxvQkFBaEI7QUFTQSxJQUFNUCxJQUFJLEdBQUdPLDBEQUFILG9CQUFWO0FBT0EsSUFBTU4sYUFBYSxHQUFHTSwwREFBSCxvQkFBbkI7QUFNQSxJQUFNTCxHQUFHLEdBQUdLLDBEQUFILG9CQUFUO0FBdUJBLElBQU1KLFNBQVMsR0FBR0ksMERBQUgscUJBQWY7QUFhQSxJQUFNSCxVQUFVLEdBQUdHLDBEQUFILHFCQUFoQjtBQVdBLElBQU1GLFNBQVMsR0FBR0UsMERBQUgscUJBQWY7QUFzQkEsSUFBTUMsTUFBTSxHQUFHQyw0RUFBSCxxQkFBWjtNQUFNRCxNO0FBUVM5RSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS42OWY4Nzc0OGZmZTM1NWQ3YTlmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIEFycm93TGVmdE91dGxpbmVkLFxyXG4gIFBsdXNDaXJjbGVGaWxsZWQsXHJcbiAgQ2xvc2VPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICBSRU1PVkVfSEFTSFRBR19SRVFVRVNULFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IHJvdW5kQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udmVydFBvcFVwJztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3QgV3JpdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgY3VycmVudEhhc2h0YWdzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbdGFnLCBvbkNoYW5nZVRhZywgc2V0VGFnXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Gb2N1c0lucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQmx1cklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uS2V5UHJlc3NUYWcgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJywnKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIOu5iOy5uOycvOuhnCDsnoXroKXtlZjsp4Ag7JWK7JWY7J2E65WM66eMIOumrOyKpO2KuOyXkCDstpTqsIBcclxuICAgICAgICBpZiAodGFnLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgIC8vIOydtOuvuCDsnojripQg7ZW07Iuc7YOc6re46rCAIOyVhOuLkOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnRIYXNodGFncy5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIC8vICPsnYQg67aZ7Jes7IScIO2VtOyLnO2DnOq3uOulvCDsnoXroKXtlojsnYQg65WM64qUICPsnYQg65a86rOgXHJcbiAgICAgICAgICAgIGlmICh0YWdbMF0gPT09ICcjJykge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcuc2xpY2UoMSksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRhZyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUYWcoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RhZ11cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNsaWNrVGFnID0gdXNlQ2FsbGJhY2soKHYpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgZGF0YTogdixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2V4cHJlc3Npb25zLCBzZXRFeHByZXNzaW9uc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGV4cHJlc3Npb25OdW1iZXI6IDEsIHBpbnlpbjogJycsIG1lYW5pbmc6ICcnIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hcCgoZXhwcmVzc2lvbikgPT4ge1xyXG4gICAgICAgIGlmIChleHByZXNzaW9uTnVtID09PSBleHByZXNzaW9uLmV4cHJlc3Npb25OdW1iZXIpIHtcclxuICAgICAgICAgIGV4cHJlc3Npb25bZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFeHByZXNzaW9ucyh0ZW1wRXhwcmVzc2lvbnMpO1xyXG4gICAgfSxcclxuICAgIFtleHByZXNzaW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGRFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXhwcmVzc2lvbk51bWJlcjogZXhwcmVzc2lvbnMubGVuZ3RoICsgMSxcclxuICAgICAgcGlueWluOiAnJyxcclxuICAgICAgbWVhbmluZzogJycsXHJcbiAgICB9O1xyXG4gICAgc2V0RXhwcmVzc2lvbnMoWy4uLmV4cHJlc3Npb25zLCBkYXRhXSk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUV4cHJlc3Npb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLmZpbHRlcihcclxuICAgICAgICAodikgPT4gdi5leHByZXNzaW9uTnVtYmVyICE9PSBleHByZXNzaW9uTnVtXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBvcmRlciA9IDE7XHJcbiAgICAgIGNvbnN0IGFycmFuZ2VkRXhwcmVzc2lvbnMgPSB0ZW1wRXhwcmVzc2lvbnMubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgdi5leHByZXNzaW9uTnVtYmVyID0gb3JkZXI7XHJcbiAgICAgICAgb3JkZXIrKztcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKFsuLi5hcnJhbmdlZEV4cHJlc3Npb25zXSk7XHJcbiAgICB9LFxyXG4gICAgW2V4cHJlc3Npb25zXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZFBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsZXQgaXNFeHByZXNzaW9uTnVsbCA9IGZhbHNlO1xyXG4gICAgZXhwcmVzc2lvbnMubWFwKCh2KSA9PiB7XHJcbiAgICAgIGlmICghdi5waW55aW4gfHwgIXYubWVhbmluZykge1xyXG4gICAgICAgIGlzRXhwcmVzc2lvbk51bGwgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRpdGxlICYmICFpc0V4cHJlc3Npb25OdWxsKSB7XHJcbiAgICAgIE1vZGFsLndhcm5pbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc0V4cHJlc3Npb25OdWxsICYmIHRpdGxlKSB7XHJcbiAgICAgIE1vZGFsLndhcm5pbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn67mE7Ja07J6I64qUIO2RnO2YhOydhCDrqqjrkZAg7LGE7JuM7KO87IS47JqUIScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aXRsZSAmJiBpc0V4cHJlc3Npb25OdWxsKSB7XHJcbiAgICAgIE1vZGFsLndhcm5pbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn67mE7Ja07J6I64qUIOygnOuqqeqzvCDtkZztmITsnYQg66qo65GQIOyxhOybjOyjvOyEuOyalCEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDruYjsubgg7JeG7J20IOuqqOuRkCDsnoXroKXrkJjsl4jsnYQg65WMIO2RnO2YhCDsl4XroZzrk5ztlZjquLBcclxuICAgIGlmICh0aXRsZSAmJiAhaXNFeHByZXNzaW9uTnVsbCkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICB0YWc6IGN1cnJlbnRIYXNodGFncyxcclxuICAgICAgICAgIGV4cHJlc3Npb246IGV4cHJlc3Npb25zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt0aXRsZSwgY3VycmVudEhhc2h0YWdzLCBleHByZXNzaW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICB9XHJcbiAgfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICAgIDxkaXYgY3NzPXt3cml0ZUJveH0+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgY3NzPXt0aXRsZUJveH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cclxuICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY3NzPXt0YWdCb3h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17dGFnc30+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRIYXNodGFncy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17dn0gb25DbGljaz17KCkgPT4gb25DbGlja1RhZyh2KX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Z9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7YOc6re466W8IOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGFnfVxyXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc1RhZ31cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXNJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVySW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWctaW5mb1wiIGNzcz17dGFnSW5mb0JveH0+XHJcbiAgICAgICAgICAgICAg7Im87ZGcIO2YueydgCDsl5TthLDrpbwg7J6F66Cl7ZWY7JesIO2DnOq3uOulvCDrk7HroZ3tlaAg7IiYIOyeiOyKteuLiOuLpC4g65Ox66Gd65CcIO2DnOq3uOulvFxyXG4gICAgICAgICAgICAgIO2BtOumre2VmOuptCDsgq3soJzrkKnri4jri6QuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17bGluZX0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbkJveH0+XHJcbiAgICAgICAgICAgIHtleHByZXNzaW9ucy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtib3h9IGtleT17di5leHByZXNzaW9uTnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e3BpbnlpbkJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGlueWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ZWc7Ja067OR7J2M7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17di5waW55aW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0KGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgb25DbGljaz17ZGVsZXRlRXhwcmVzc2lvbihpbmRleCArIDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lYW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65y77J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3YubWVhbmluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0KGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3BsdXNCdG5Cb3h9PlxyXG4gICAgICAgICAgICA8UGx1c0NpcmNsZUZpbGxlZCBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3RlciBjc3M9e2Zvb3RlckJveH0+XHJcbiAgICAgICAgICA8QXJyb3dMZWZ0T3V0bGluZWQgb25DbGljaz17KCkgPT4gUm91dGVyLnJlcGxhY2UoJy8nKX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgY3NzPXtyb3VuZEJ0bn0gb25DbGljaz17YWRkUG9zdH0+XHJcbiAgICAgICAgICAgIOunjOuTpOq4sFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHdyaXRlUGFnZSA9IGNzc2BcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCB3cml0ZUJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAzMHB4IDIwcHggMDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDYwcHggNDBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHRpdGxlQm94ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdGFnQm94ID0gY3NzYFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCB0YWdzID0gY3NzYFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2FkZjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzUzMWRhYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWYwZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdJbmZvQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuYDtcclxuXHJcbmNvbnN0IGxpbmUgPSBjc3NgXHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDk0YjtcclxuYDtcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBib3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOGRkZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0OTRiO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gICAgcmlnaHQ6IC0ycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGlueWluQm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBsdXNCdG5Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZm9vdGVyQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNTgsIDI0LCAyNTUsIDIwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5hbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXJcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLWJvZHlcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=