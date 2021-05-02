module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/write.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/styles.js":
/*!******************************!*\
  !*** ./components/styles.js ***!
  \******************************/
/*! exports provided: roundBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundBtn", function() { return roundBtn; });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/** @jsxImportSource @emotion/react */

const roundBtn = _emotion_react__WEBPACK_IMPORTED_MODULE_0__["css"]`
  color: #fff;
  border-color: #3a18ff;
  background-color: #3a18ff;

  &:hover {
    color: #000;
    border-color: #18ddff;
    background-color: #18ddff;
  }

  &:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  @media (min-width: 768px) {
    width: 130px;
    height: 40px;
  }

  @media (min-width: 1024px) {
    width: 160px;
    height: 50px;
  }

  span {
    font-size: 13px;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 17px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value); // console.log(value);
  }, [value]);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./pages/write.js":
/*!************************!*\
  !*** ./pages/write.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\write.js";

/** @jsxImportSource @emotion/react */










const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_2__["Input"];
const headerHeight = ['63px', '71px', '87px'];
const headerBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  position: relative;
  height: ${headerHeight[0]};
  z-index: 1;

  @media (min-width: 768px) {
    height: ${headerHeight[1]};
  }

  @media (min-width: 1024px) {
    height: ${headerHeight[2]};
  }
`;
const headerContent = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(58, 24, 255, 0.7);
  background-color: #fff;

  @media (min-width: 1024px) {
    padding: 18px 40px;
  }
`;
const arrowIcon = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  font-size: 22px;
  color: #3a18ff;

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;
const mainBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  position: relative;
`;
const textBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  padding: 12px 14px;
  font-size: 20px;
  caret-color: #18ddff;
  border: none;

  @media (min-width: 768px) {
    padding: 16px 18px;
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    padding: 24px;
  }

  &::placeholder {
    color: #6a7481;
  }
`;
const line = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  width: calc(100% - 20px);
  height: 1px;
  margin-left: 20px;
  background-color: rgb(235, 238, 240);

  @media (min-width: 768px) {
    width: calc(100% - 30px);
    margin-left: 30px;
  }
`;
const buttonBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  align-items: center;
  height: ${headerHeight[0]};
  padding-left: 20px;

  @media (min-width: 768px) {
    height: ${headerHeight[1]};
    padding-left: 30px;
  }

  @media (min-width: 1024px) {
    height: ${headerHeight[2]};
  }
`;
const pictureIcon = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  margin-right: 20px;
  font-size: 38px;
  cursor: pointer;
  color: #3a18ff;

  @media (min-width: 768px) {
    font-size: 44px;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
  }

  &:hover {
    color: #18ddff;
  }
`;
const pinyinBtn = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 92px;
  margin-right: 20px;
  color: #fff;
  border-color: #3a18ff;
  background-color: #3a18ff;

  @media (min-width: 768px) {
    height: 36px;
  }

  @media (min-width: 1024px) {
    width: 104px;
    height: 40px;
  }

  &:hover {
    color: #000;
    border-color: #18ddff;
    background-color: #18ddff;

    span::before {
      content: 'Pīnyīn';
    }
  }

  &:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  span {
    &:before {
      content: '한어병음';
      font-size: 15px;
      font-weight: 700;

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
`;
const hanziBtn = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 77px;
  color: #fff;
  border-color: #3a18ff;
  background-color: #3a18ff;

  @media (min-width: 768px) {
    height: 36px;
  }

  @media (min-width: 1024px) {
    width: 86px;
    height: 40px;
  }

  &:hover {
    color: #000;
    border-color: #18ddff;
    background-color: #18ddff;

    span::before {
      content: '汉字';
    }
  }

  &:focus {
    color: #fff;
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  span {
    &:before {
      content: '간체자';
      font-size: 15px;
      font-weight: 700;

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
`;
const Global = styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"]`
  .ant-input{
    color: #000;
  }

  .ant-input:focus{
    -webkit-box-shadow: none;
  }
`;

const Write = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  const onClickImagesUpload = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    imageRef.current.click();
  }, [imageRef.current]);
  const {
    0: pinyinModalVisible,
    1: setPinyinModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const [pinyinTitle, onChangePinyinTitle, setPinyinTitle] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])('');
  const [pinyinContent, onChangePinyinContent, setPinyinContent] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])('');
  const onOkPinyin = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["CONVERT_PINYIN_REQUEST"],
      data: {
        content: pinyinContent
      }
    });
    setPinyinModalVisible(false);
    setPinyinTitle('');
    setPinyinContent('');
  }, [pinyinContent]);
  const [content, onChangeContent] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_10__["default"])('');
  const onClickWriteBtn = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["ADD_POST_REQUEST"],
      data: content
    });
  }, [content]); // useEffect(() => {
  //   inputRef.current.focus();
  // }, [inputRef.current]);

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      css: headerBox,
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: headerContent,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowLeftOutlined"], {
          onClick: () => {
            router.replace('/');
          },
          css: arrowIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          shape: "round",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_8__["roundBtn"],
          onClick: onClickWriteBtn,
          children: "\uAE00\uC4F0\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      css: mainBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
        value: content,
        onChange: onChangeContent,
        placeholder: "I'm learning...",
        css: textBox,
        autoSize: {
          minRows: 4
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: line
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 9
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: buttonBox,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            name: "image",
            multiple: true,
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PictureOutlined"], {
            css: pictureIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          css: pinyinBtn,
          onClick: () => setPinyinModalVisible(true),
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
          title: "\uD55C\uC5B4\uBCD1\uC74C(P\u012Bny\u012Bn)\uC73C\uB85C \uBCC0\uD658\uD558\uAE30",
          visible: pinyinModalVisible,
          okText: "\uBCC0\uD658",
          onOk: onOkPinyin,
          cancelText: "\uCDE8\uC18C",
          onCancel: () => setPinyinModalVisible(false),
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            value: pinyinTitle,
            onChange: onChangePinyinTitle,
            placeholder: "\uB77C\uC6B4\uD76C\uB294 \uC815\uB9D0 \uC798\uC0DD\uACBC\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 13
          }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
            value: pinyinContent,
            onChange: onChangePinyinContent,
            placeholder: "Luo2 Yun2 Xi1 hen3 shuai4",
            autoSize: {
              minRows: 2
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          css: hanziBtn,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, CONVERT_PINYIN_REQUEST, CONVERT_PINYIN_SUCCESS, CONVERT_PINYIN_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_REQUEST", function() { return CONVERT_PINYIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_SUCCESS", function() { return CONVERT_PINYIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_FAILURE", function() { return CONVERT_PINYIN_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  convertPinyinLoading: false,
  convertPinyinDone: false,
  convertPinyinError: null,
  convertedPinyin: null
};
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
const CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
const CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case CONVERT_PINYIN_REQUEST:
      draft.convertPinyinLoading = true;
      draft.convertPinyinDone = false;
      draft.convertPinyinError = null;
      break;

    case CONVERT_PINYIN_SUCCESS:
      draft.convertPinyinLoading = false;
      draft.convertPinyinDone = true;
      draft.convertedPinyin = action.data;
      break;

    case CONVERT_PINYIN_FAILURE:
      draft.convertPinyinLoading = false;
      draft.convertPinyinError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvd3JpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJyb3VuZEJ0biIsImNzcyIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJUZXh0QXJlYSIsIklucHV0IiwiaGVhZGVySGVpZ2h0IiwiaGVhZGVyQm94IiwiaGVhZGVyQ29udGVudCIsImFycm93SWNvbiIsIm1haW5Cb3giLCJ0ZXh0Qm94IiwibGluZSIsImJ1dHRvbkJveCIsInBpY3R1cmVJY29uIiwicGlueWluQnRuIiwiaGFuemlCdG4iLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIldyaXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlucHV0UmVmIiwidXNlUmVmIiwiaW1hZ2VSZWYiLCJvbkNsaWNrSW1hZ2VzVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwicGlueWluTW9kYWxWaXNpYmxlIiwic2V0UGlueWluTW9kYWxWaXNpYmxlIiwicGlueWluVGl0bGUiLCJvbkNoYW5nZVBpbnlpblRpdGxlIiwic2V0UGlueWluVGl0bGUiLCJ1c2VJbnB1dCIsInBpbnlpbkNvbnRlbnQiLCJvbkNoYW5nZVBpbnlpbkNvbnRlbnQiLCJzZXRQaW55aW5Db250ZW50Iiwib25Pa1BpbnlpbiIsInR5cGUiLCJDT05WRVJUX1BJTllJTl9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJvbkNoYW5nZUNvbnRlbnQiLCJvbkNsaWNrV3JpdGVCdG4iLCJBRERfUE9TVF9SRVFVRVNUIiwicmVwbGFjZSIsIm1pblJvd3MiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiY29udmVydFBpbnlpbkxvYWRpbmciLCJjb252ZXJ0UGlueWluRG9uZSIsImNvbnZlcnRQaW55aW5FcnJvciIsImNvbnZlcnRlZFBpbnlpbiIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyIsIkNPTlZFUlRfUElOWUlOX0ZBSUxVUkUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFF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ZSxXQUFLLENBQUNiLFlBQU4sR0FBcUJXLE1BQU0sQ0FBQ0ksS0FBNUI7QUFDQTs7QUFDRixTQUFLM0Isc0JBQUw7QUFDRXlCLFdBQUssQ0FBQ1osb0JBQU4sR0FBNkIsSUFBN0I7QUFDQVksV0FBSyxDQUFDWCxpQkFBTixHQUEwQixLQUExQjtBQUNBVyxXQUFLLENBQUNWLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0E7O0FBQ0YsU0FBS0ksc0JBQUw7QUFDRU0sV0FBSyxDQUFDWixvQkFBTixHQUE2QixLQUE3QjtBQUNBWSxXQUFLLENBQUNYLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FXLFdBQUssQ0FBQ1QsZUFBTixHQUF3Qk8sTUFBTSxDQUFDdEIsSUFBL0I7QUFDQTs7QUFDRixTQUFLbUIsc0JBQUw7QUFDRUssV0FBSyxDQUFDWixvQkFBTixHQUE2QixLQUE3QjtBQUNBWSxXQUFLLENBQUNWLGtCQUFOLEdBQTJCUSxNQUFNLENBQUNJLEtBQWxDO0FBQ0E7O0FBQ0Y7QUFDRTtBQTlCSjtBQWdDRCxDQWpDTSxDQURUOztBQW9DZU4sc0VBQWYsRTs7Ozs7Ozs7Ozs7QUN6REEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dyaXRlLmpzXCIpO1xuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdW5kQnRuID0gY3NzYFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMThkZGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4ZGRmZjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBbdmFsdWVdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xyXG59O1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93TGVmdE91dGxpbmVkLCBQaWN0dXJlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcyc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIENPTlZFUlRfUElOWUlOX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3QgaGVhZGVySGVpZ2h0ID0gWyc2M3B4JywgJzcxcHgnLCAnODdweCddO1xyXG5cclxuY29uc3QgaGVhZGVyQm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6ICR7aGVhZGVySGVpZ2h0WzBdfTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogJHtoZWFkZXJIZWlnaHRbMV19O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgaGVpZ2h0OiAke2hlYWRlckhlaWdodFsyXX07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgaGVhZGVyQ29udGVudCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTgsIDI0LCAyNTUsIDAuNyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgcGFkZGluZzogMThweCA0MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGFycm93SWNvbiA9IGNzc2BcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzYTE4ZmY7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBtYWluQm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IHRleHRCb3ggPSBjc3NgXHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjYXJldC1jb2xvcjogIzE4ZGRmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogMTZweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICB9XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNmE3NDgxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGxpbmUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM4LCAyNDApO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGJ1dHRvbkJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAke2hlYWRlckhlaWdodFswXX07XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogJHtoZWFkZXJIZWlnaHRbMV19O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgaGVpZ2h0OiAke2hlYWRlckhlaWdodFsyXX07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGljdHVyZUljb24gPSBjc3NgXHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzYTE4ZmY7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE4ZGRmZjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBwaW55aW5CdG4gPSBjc3NgXHJcbiAgd2lkdGg6IDkycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogMzZweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMxOGRkZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThkZGZmO1xyXG5cclxuICAgIHNwYW46OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICdQxKtuecSrbic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAn7ZWc7Ja067OR7J2MJztcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGhhbnppQnRuID0gY3NzYFxyXG4gIHdpZHRoOiA3N3B4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogMzZweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzE4ZGRmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGRkZmY7XHJcblxyXG4gICAgc3Bhbjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ+axieWtlyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAn6rCE7LK07J6QJztcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5hbnQtaW5wdXR7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC5hbnQtaW5wdXQ6Zm9jdXN7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgV3JpdGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZXNVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZVJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlUmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3QgW3Bpbnlpbk1vZGFsVmlzaWJsZSwgc2V0UGlueWluTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGlueWluVGl0bGUsIG9uQ2hhbmdlUGlueWluVGl0bGUsIHNldFBpbnlpblRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGlueWluQ29udGVudCwgb25DaGFuZ2VQaW55aW5Db250ZW50LCBzZXRQaW55aW5Db250ZW50XSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBvbk9rUGlueWluID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IHBpbnlpbkNvbnRlbnQgfSxcclxuICAgIH0pO1xyXG4gICAgc2V0UGlueWluTW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgIHNldFBpbnlpblRpdGxlKCcnKTtcclxuICAgIHNldFBpbnlpbkNvbnRlbnQoJycpO1xyXG4gIH0sIFtwaW55aW5Db250ZW50XSk7XHJcblxyXG4gIGNvbnN0IFtjb250ZW50LCBvbkNoYW5nZUNvbnRlbnRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IG9uQ2xpY2tXcml0ZUJ0biA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogY29udGVudCxcclxuICAgIH0pO1xyXG4gIH0sIFtjb250ZW50XSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgLy8gfSwgW2lucHV0UmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPGhlYWRlciBjc3M9e2hlYWRlckJveH0+XHJcbiAgICAgICAgPGRpdiBjc3M9e2hlYWRlckNvbnRlbnR9PlxyXG4gICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjc3M9e2Fycm93SWNvbn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHNoYXBlPVwicm91bmRcIiBjc3M9e3JvdW5kQnRufSBvbkNsaWNrPXtvbkNsaWNrV3JpdGVCdG59PlxyXG4gICAgICAgICAgICDquIDsk7DquLBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY3NzPXttYWluQm94fT5cclxuICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSSdtIGxlYXJuaW5nLi4uXCJcclxuICAgICAgICAgIGNzcz17dGV4dEJveH1cclxuICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDQgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY3NzPXtsaW5lfT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNzcz17YnV0dG9uQm94fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICA8UGljdHVyZU91dGxpbmVkIGNzcz17cGljdHVyZUljb259IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b24gY3NzPXtwaW55aW5CdG59IG9uQ2xpY2s9eygpID0+IHNldFBpbnlpbk1vZGFsVmlzaWJsZSh0cnVlKX0+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIHRpdGxlPVwi7ZWc7Ja067OR7J2MKFDEq255xKtuKeycvOuhnCDrs4DtmZjtlZjquLBcIlxyXG4gICAgICAgICAgICB2aXNpYmxlPXtwaW55aW5Nb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgIG9rVGV4dD1cIuuzgO2ZmFwiXHJcbiAgICAgICAgICAgIG9uT2s9e29uT2tQaW55aW59XHJcbiAgICAgICAgICAgIGNhbmNlbFRleHQ9XCLst6jshoxcIlxyXG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0UGlueWluTW9kYWxWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3BpbnlpblRpdGxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBpbnlpblRpdGxlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65287Jq07Z2s64qUIOygleunkCDsnpjsg53qsrzri6RcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICB2YWx1ZT17cGlueWluQ29udGVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQaW55aW5Db250ZW50fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTHVvMiBZdW4yIFhpMSBoZW4zIHNodWFpNFwiXHJcbiAgICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDxCdXR0b24gY3NzPXtoYW56aUJ0bn0+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBjb252ZXJ0UGlueWluTG9hZGluZzogZmFsc2UsXHJcbiAgY29udmVydFBpbnlpbkRvbmU6IGZhbHNlLFxyXG4gIGNvbnZlcnRQaW55aW5FcnJvcjogbnVsbCxcclxuICBjb252ZXJ0ZWRQaW55aW46IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlZFUlRfUElOWUlOX1JFUVVFU1QgPSAnQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDT05WRVJUX1BJTllJTl9TVUNDRVNTID0gJ0NPTlZFUlRfUElOWUlOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSA9ICdDT05WRVJUX1BJTllJTl9GQUlMVVJFJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1BJTllJTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRQaW55aW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0UGlueWluRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRQaW55aW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0UGlueWluTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRQaW55aW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0ZWRQaW55aW4gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1BJTllJTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRQaW55aW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29udmVydFBpbnlpbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==