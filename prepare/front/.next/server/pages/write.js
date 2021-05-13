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

/***/ "./components/ConvertPopUp.js":
/*!************************************!*\
  !*** ./components/ConvertPopUp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\components\\ConvertPopUp.js";

/** @jsxImportSource @emotion/react */








const Global = styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"]`
    .convert-modal > .ant-modal-content > .ant-modal-body{
        padding-top: 48px;
    }

    .convert-modal > .ant-modal-content > .ant-modal-footer{
        display: none; 
    }
`;
const underlineBtn = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  font-size: 16px;
  text-decoration: underline;
  border: none;
  color: #98989c;
  background-color: #fff;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;
const infoBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  flex-direction: column;
  margin: 6px auto 16px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 10px auto 24px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 28px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    color: #3a18ff;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
const convertBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 16px 0;
  border: 3px solid #e8e8e8;
  border-radius: 33px;
  background-color: #ffffff;
`;
const cancelBtn = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 21px;
  right: 17px;
  padding: 0;
  border: none;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
    right: 20px;
  }

  @media (min-width: 1024px) {
    width: 21px;
    height: 21px;
    top: 19px;
    right: 23px;
  }

  span {
    display: block;
    height: 16px;

    @media (min-width: 768px) {
      height: 18px;
    }

    @media (min-width: 1024px) {
      height: 21px;
    }
  }

  svg {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.45);

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 21px;
    }
  }
`;
const toConvert = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 88%;
  height: 100px;
  padding: 0 16px 16px 10px;
  resize: none;
  font-size: 21px;
  border: none;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const convertBtn = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-color: #3a18ff;
  background-color: #3a18ff;

  &:hover {
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  &:focus {
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  &:active {
    border-color: #3a18ff;
    background-color: #3a18ff;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 26px;
    font-weight: 700;
    color: #fff;

    &:hover {
      color: #fff;
    }

    &:active {
      color: #fff;
    }
  }
`;
const converted = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 88%;
  height: 100px;
  padding: 16px 16px 0 10px;
  position: relative;
  font-size: 23px;
  font-family: 'Times New Roman', sans-serif;
  overflow: auto;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const copyBtn = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 21px;
  right: 17px;
  padding: 0;
  border: none;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
    right: 20px;
  }

  @media (min-width: 1024px) {
    width: 21px;
    height: 21px;
    bottom: 19px;
    right: 23px;
  }

  span {
    display: block;
    height: 16px;

    @media (min-width: 768px) {
      height: 18px;
    }

    @media (min-width: 1024px) {
      height: 21px;
    }
  }

  svg {
    font-size: 16px;
    color: #3a18ff;

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 1024px) {
      font-size: 21px;
    }
  }
`;

const ConvertPopUp = () => {
  const pinyinRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    convertLoading,
    convertDone,
    convertedPinyin
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const [input, onChangeInput, setInput] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])('');
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const onCancelModal = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    setModalVisible(false);
    setInput('');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["CONVERT_RESET_REQUEST"]
    });
  }, []);
  const onClickCancel = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    setInput('');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["CONVERT_RESET_REQUEST"]
    });
  }, []);
  const onClickConvert = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    if (input) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["CONVERT_PINYIN_REQUEST"],
        data: {
          content: input
        }
      });
    }
  }, [input]);
  const onClickCopy = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    const pinyin = pinyinRef.current.innerText;
    navigator.clipboard.writeText(pinyin);
    antd__WEBPACK_IMPORTED_MODULE_4__["message"].success({
      content: '클립보드에 복사되었습니다!',
      duration: 1
    });
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        css: underlineBtn,
        onClick: () => setModalVisible(true),
        children: "P\u012Bny\u012Bn\uC73C\uB85C \uBCC0\uD658\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
        className: "convert-modal",
        visible: modalVisible,
        onCancel: onCancelModal,
        onOk: () => setModalVisible(false),
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: infoBox,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uC131\uC870\uB294 \uD2B9\uC218\uBB38\uC790, \uB2E8\uC5B4 \uB05D\uC5D0 \uC785\uB825\uD574\uC8FC\uC138\uC694."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 13
          }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\uB2E8\uC5B4\uC640 \uB2E8\uC5B4 \uC0AC\uC774\uB294 \uD55C \uCE78\uC744 \uB744\uC6CC\uC8FC\uC138\uC694."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: convertBox,
          children: [input && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            css: cancelBtn,
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CloseOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 23
            }, undefined),
            onClick: onClickCancel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 15
          }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            css: toConvert,
            placeholder: "Ni3 hao!3",
            value: input,
            onChange: onChangeInput,
            spellCheck: "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 13
          }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            css: convertBtn,
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["SwapOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 21
            }, undefined),
            onClick: onClickConvert
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 13
          }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "convert-text",
            css: converted,
            ref: pinyinRef,
            children: [!convertLoading && !convertDone && null, convertLoading && !convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LoadingOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 50
            }, undefined), !convertLoading && convertDone && convertedPinyin]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 13
          }, undefined), convertDone && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            css: copyBtn,
            icon: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CopyOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 23
            }, undefined),
            onClick: onClickCopy
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }, undefined)]
    }, void 0, true)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ConvertPopUp);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");
/* harmony import */ var _components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ConvertPopUp */ "./components/ConvertPopUp.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\write.js";

/** @jsxImportSource @emotion/react */











const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_2__["Input"];

const Write = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    currentHashtags,
    addPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const [title, onChangeTitle] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])('');
  const [tag, onChangeTag, setTag] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__["default"])('');
  const onFocusInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(() => {
    document.getElementById('tag-info').style.display = 'block';
  }, []);
  const onBlurInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(() => {
    document.getElementById('tag-info').style.display = 'none';
  }, []);
  const onKeyPressTag = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(e => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault(); // 빈칸으로 입력하지 않았을때만 리스트에 추가

      if (tag.trim() !== '') {
        // 이미 있는 해시태그가 아닐때만 리스트에 추가
        if (!currentHashtags.includes(tag)) {
          // #을 붙여서 해시태그를 입력했을 때는 #을 떼고
          if (tag[0] === '#') {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["ADD_HASHTAG_REQUEST"],
              data: tag.slice(1)
            });
          } else {
            dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["ADD_HASHTAG_REQUEST"],
              data: tag
            });
          }
        }
      }

      setTag('');
    }
  }, [tag]);
  const onClickTag = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(v => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["REMOVE_HASHTAG_REQUEST"],
      data: v
    });
  }, []);
  const {
    0: expressions,
    1: setExpressions
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    expressionNumber: 1,
    pinyin: '',
    meaning: ''
  }]);
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(expressionNum => e => {
    const tempExpressions = expressions.map(expression => {
      if (expressionNum === expression.expressionNumber) {
        expression[e.target.name] = e.target.value;
      }

      return expression;
    });
    setExpressions(tempExpressions);
  }, [expressions]);
  const addExpression = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(() => {
    const data = {
      expressionNumber: expressions.length + 1,
      pinyin: '',
      meaning: ''
    };
    setExpressions([...expressions, data]);
  }, [expressions]);
  const deleteExpression = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(expressionNum => () => {
    const tempExpressions = expressions.filter(v => v.expressionNumber !== expressionNum);
    let order = 1;
    const arrangedExpressions = tempExpressions.map(v => {
      v.expressionNumber = order;
      order++;
      return v;
    });
    setExpressions([...arrangedExpressions]);
  }, [expressions]);
  const addPost = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(() => {
    let isExpressionNull = false;
    expressions.map(v => {
      if (!v.pinyin || !v.meaning) {
        isExpressionNull = true;
      }
    });

    if (!title && !isExpressionNull) {
      antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].warning({
        title: '제목을 입력해주세요!'
      });
    }

    if (isExpressionNull && title) {
      antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].warning({
        title: '비어있는 표현을 모두 채워주세요!'
      });
    }

    if (!title && isExpressionNull) {
      antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].warning({
        title: '비어있는 제목과 표현을 모두 채워주세요!'
      });
    } // 빈칸 없이 모두 입력되었을 때 표현 업로드하기


    if (title && !isExpressionNull) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["ADD_POST_REQUEST"],
        data: {
          title: title,
          tag: currentHashtags,
          expression: expressions
        }
      });
    }
  }, [title, currentHashtags, expressions]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (addPostDone) {
      router.replace('/');
    }
  }, [addPostDone]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
          lineNumber: 165,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: tagBox,
          children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            css: tags,
            children: [currentHashtags.map((v, index) => {
              return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: () => onClickTag(v),
                children: v
              }, v, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 19
              }, undefined);
            }), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "tag-info",
            css: tagInfoBox,
            children: "\uC27C\uD45C \uD639\uC740 \uC5D4\uD130\uB97C \uC785\uB825\uD558\uC5EC \uD0DC\uADF8\uB97C \uB4F1\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB4F1\uB85D\uB41C \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 \uC0AD\uC81C\uB429\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: line
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: expressionBox,
          children: expressions.map((v, index) => {
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
                  lineNumber: 202,
                  columnNumber: 21
                }, undefined), index !== 0 && Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CloseOutlined"], {
                  onClick: deleteExpression(index + 1)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 23
                }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ConvertPopUp__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 19
              }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                name: "meaning",
                placeholder: "\uB73B\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
                value: v.meaning,
                onChange: onChangeText(index + 1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 19
              }, undefined)]
            }, v.expressionNumber, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          css: plusBtnBox,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["PlusCircleFilled"], {
            onClick: addExpression
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        css: footerBox,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ArrowLeftOutlined"], {
          onClick: () => router.replace('/')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          shape: "round",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_10__["roundBtn"],
          onClick: addPost,
          children: "\uB9CC\uB4E4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const writePage = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  position: relative;
`;
const writeBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  flex-direction: column;
  margin: 30px 20px 0;
`;
const titleBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 100%;
  padding: 4px 0;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  border: none;

  &:focus {
    border: none;
    box-shadow: none;
  }
`;
const tagBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  margin-bottom: 10px;
`;
const tags = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  align-items: center;
  flex-wrap: nowrap;

  button {
    margin-right: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    border: 1px solid #d3adf7;
    border-radius: 2px;
    color: #531dab;
    background-color: #f9f0ff;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    font-size: 14px;
    border: none;
  }
`;
const tagInfoBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: none;
  width: 220px;
  padding: 5px;
  font-size: 13px;
  color: #fff;
  background-color: #3a18ff;
`;
const line = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 40px;
  height: 10px;
  margin-bottom: 25px;
  background-color: #48494b;
`;
const expressionBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const box = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  position: relative;
  width: 100%;
  padding: 30px 15px;
  margin-bottom: 20px;
  border: 3px solid #18ddff;
  border-radius: 4px;

  input {
    width: 100%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #48494b;
  }

  span {
    position: absolute;
    top: -12px;
    right: -2px;
    cursor: pointer;
  }
`;
const pinyinBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  position: relative;
  height: 52px;
  margin-bottom: 15px;

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 13px;
  }
`;
const plusBtnBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  svg {
    font-size: 50px;
    color: #3a18ff;
  }
`;
const footerBox = _emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 15px;
  box-shadow: 0px 0px 8px rgba(58, 24, 255, 20%);
  background-color: #fff;

  span {
    cursor: pointer;
  }

  svg {
    font-size: 20px;
  }
`;
const Global = styled_components__WEBPACK_IMPORTED_MODULE_7__["createGlobalStyle"]`
  .ant-modal-confirm-body-wrapper
    > .ant-modal-confirm-body
    > .ant-modal-confirm-title {
    font-weight: 700;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_HASHTAG_REQUEST, REMOVE_HASHTAG_REQUEST, CONVERT_PINYIN_REQUEST, CONVERT_PINYIN_SUCCESS, CONVERT_PINYIN_FAILURE, CONVERT_RESET_REQUEST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HASHTAG_REQUEST", function() { return ADD_HASHTAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_HASHTAG_REQUEST", function() { return REMOVE_HASHTAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_REQUEST", function() { return CONVERT_PINYIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_SUCCESS", function() { return CONVERT_PINYIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PINYIN_FAILURE", function() { return CONVERT_PINYIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_RESET_REQUEST", function() { return CONVERT_RESET_REQUEST; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  currentHashtags: [],
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  convertLoading: false,
  convertDone: false,
  convertError: null,
  convertedPinyin: null
};
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_HASHTAG_REQUEST = 'ADD_HASHTAG_REQUEST';
const REMOVE_HASHTAG_REQUEST = 'REMOVE_HASHTAG_REQUEST';
const CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
const CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
const CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';
const CONVERT_RESET_REQUEST = 'CONVERT_RESET_REQUEST';

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      draft.addPostDone = false;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.currentHashtags = [];
      draft.mainPosts.unshift(action.data);
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case ADD_HASHTAG_REQUEST:
      draft.currentHashtags.push(action.data);
      break;

    case REMOVE_HASHTAG_REQUEST:
      draft.currentHashtags = draft.currentHashtags.filter(v => v !== action.data);
      break;

    case CONVERT_PINYIN_REQUEST:
      draft.convertLoading = true;
      draft.convertDone = false;
      draft.convertError = null;
      break;

    case CONVERT_PINYIN_SUCCESS:
      draft.convertLoading = false;
      draft.convertDone = true;
      draft.convertedPinyin = action.data;
      break;

    case CONVERT_PINYIN_FAILURE:
      draft.convertLoading = false;
      draft.convertError = action.error;
      break;

    case CONVERT_RESET_REQUEST:
      draft.convertDone = false;
      draft.convertError = null;
      draft.convertedPinyin = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db252ZXJ0UG9wVXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvd3JpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInVuZGVybGluZUJ0biIsImNzcyIsImluZm9Cb3giLCJjb252ZXJ0Qm94IiwiY2FuY2VsQnRuIiwidG9Db252ZXJ0IiwiY29udmVydEJ0biIsImNvbnZlcnRlZCIsImNvcHlCdG4iLCJDb252ZXJ0UG9wVXAiLCJwaW55aW5SZWYiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY29udmVydExvYWRpbmciLCJjb252ZXJ0RG9uZSIsImNvbnZlcnRlZFBpbnlpbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW5wdXQiLCJvbkNoYW5nZUlucHV0Iiwic2V0SW5wdXQiLCJ1c2VJbnB1dCIsIm1vZGFsVmlzaWJsZSIsInNldE1vZGFsVmlzaWJsZSIsInVzZVN0YXRlIiwib25DYW5jZWxNb2RhbCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNPTlZFUlRfUkVTRVRfUkVRVUVTVCIsIm9uQ2xpY2tDYW5jZWwiLCJvbkNsaWNrQ29udmVydCIsIkNPTlZFUlRfUElOWUlOX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsIm9uQ2xpY2tDb3B5IiwicGlueWluIiwiY3VycmVudCIsImlubmVyVGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZHVyYXRpb24iLCJyb3VuZEJ0biIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwiZSIsInRhcmdldCIsIlRleHRBcmVhIiwiSW5wdXQiLCJXcml0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImN1cnJlbnRIYXNodGFncyIsImFkZFBvc3REb25lIiwidGl0bGUiLCJvbkNoYW5nZVRpdGxlIiwidGFnIiwib25DaGFuZ2VUYWciLCJzZXRUYWciLCJvbkZvY3VzSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwib25CbHVySW5wdXQiLCJvbktleVByZXNzVGFnIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiaW5jbHVkZXMiLCJBRERfSEFTSFRBR19SRVFVRVNUIiwic2xpY2UiLCJvbkNsaWNrVGFnIiwidiIsIlJFTU9WRV9IQVNIVEFHX1JFUVVFU1QiLCJleHByZXNzaW9ucyIsInNldEV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbk51bWJlciIsIm1lYW5pbmciLCJvbkNoYW5nZVRleHQiLCJleHByZXNzaW9uTnVtIiwidGVtcEV4cHJlc3Npb25zIiwibWFwIiwiZXhwcmVzc2lvbiIsIm5hbWUiLCJhZGRFeHByZXNzaW9uIiwibGVuZ3RoIiwiZGVsZXRlRXhwcmVzc2lvbiIsImZpbHRlciIsIm9yZGVyIiwiYXJyYW5nZWRFeHByZXNzaW9ucyIsImFkZFBvc3QiLCJpc0V4cHJlc3Npb25OdWxsIiwiTW9kYWwiLCJ3YXJuaW5nIiwiQUREX1BPU1RfUkVRVUVTVCIsInVzZUVmZmVjdCIsInJlcGxhY2UiLCJ3cml0ZVBhZ2UiLCJ3cml0ZUJveCIsInRpdGxlQm94IiwibWluUm93cyIsInRhZ0JveCIsInRhZ3MiLCJpbmRleCIsInRhZ0luZm9Cb3giLCJsaW5lIiwiZXhwcmVzc2lvbkJveCIsImJveCIsInBpbnlpbkJveCIsInBsdXNCdG5Cb3giLCJmb290ZXJCb3giLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RXJyb3IiLCJjb252ZXJ0RXJyb3IiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkNPTlZFUlRfUElOWUlOX1NVQ0NFU1MiLCJDT05WRVJUX1BJTllJTl9GQUlMVVJFIiwicmVkdWNlciIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwidW5zaGlmdCIsInB1c2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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R0EsOEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dyaXRlLmpzXCIpO1xuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7XHJcbiAgU3dhcE91dGxpbmVkLFxyXG4gIExvYWRpbmdPdXRsaW5lZCxcclxuICBDbG9zZU91dGxpbmVkLFxyXG4gIENvcHlPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gIENPTlZFUlRfUkVTRVRfUkVRVUVTVCxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgLmNvbnZlcnQtbW9kYWwgPiAuYW50LW1vZGFsLWNvbnRlbnQgPiAuYW50LW1vZGFsLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnZlcnQtbW9kYWwgPiAuYW50LW1vZGFsLWNvbnRlbnQgPiAuYW50LW1vZGFsLWZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IHVuZGVybGluZUJ0biA9IGNzc2BcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjOTg5ODljO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgaW5mb0JveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA2cHggYXV0byAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAyNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY29udmVydEJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNlOGU4ZTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgY2FuY2VsQnRuID0gY3NzYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMXB4O1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIHRvcDogMTlweDtcclxuICAgIHJpZ2h0OiAyM3B4O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTZweDtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdG9Db252ZXJ0ID0gY3NzYFxyXG4gIHdpZHRoOiA4OCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAwIDE2cHggMTZweCAxMHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMzcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMzcHg7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNvbnZlcnRCdG4gPSBjc3NgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ExOGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgY29udmVydGVkID0gY3NzYFxyXG4gIHdpZHRoOiA4OCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBzYW5zLXNlcmlmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMzcHg7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEqL1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGNvcHlCdG4gPSBjc3NgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIxcHg7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgYm90dG9tOiAxOXB4O1xyXG4gICAgcmlnaHQ6IDIzcHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb252ZXJ0UG9wVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGlueWluUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGNvbnZlcnRMb2FkaW5nLCBjb252ZXJ0RG9uZSwgY29udmVydGVkUGlueWluIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtpbnB1dCwgb25DaGFuZ2VJbnB1dCwgc2V0SW5wdXRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2FuY2VsTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgc2V0SW5wdXQoJycpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1JFU0VUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENPTlZFUlRfUkVTRVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NvbnZlcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENPTlZFUlRfUElOWUlOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogeyBjb250ZW50OiBpbnB1dCB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0NvcHkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCBwaW55aW4gPSBwaW55aW5SZWYuY3VycmVudC5pbm5lclRleHQ7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwaW55aW4pO1xyXG4gICAgbWVzc2FnZS5zdWNjZXNzKHtcclxuICAgICAgY29udGVudDogJ+2BtOumveuztOuTnOyXkCDrs7XsgqzrkJjsl4jsirXri4jri6QhJyxcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvbiBjc3M9e3VuZGVybGluZUJ0bn0gb25DbGljaz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKHRydWUpfT5cclxuICAgICAgICAgIFDEq255xKtu7Jy866GcIOuzgO2ZmO2VmOq4sFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udmVydC1tb2RhbFwiXHJcbiAgICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgICBvbkNhbmNlbD17b25DYW5jZWxNb2RhbH1cclxuICAgICAgICAgIG9uT2s9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2luZm9Cb3h9PlxyXG4gICAgICAgICAgICA8c3Bhbj7shLHsobDripQg7Yq57IiY66y47J6QLCDri6jslrQg64Gd7JeQIOyeheugpe2VtOyjvOyEuOyalC48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPuuLqOyWtOyZgCDri6jslrQg7IKs7J2064qUIO2VnCDsubjsnYQg652E7JuM7KO87IS47JqULjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e2NvbnZlcnRCb3h9PlxyXG4gICAgICAgICAgICB7aW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNzcz17Y2FuY2VsQnRufVxyXG4gICAgICAgICAgICAgICAgaWNvbj17PENsb3NlT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ2FuY2VsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNzcz17dG9Db252ZXJ0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmkzIGhhbyEzXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjc3M9e2NvbnZlcnRCdG59XHJcbiAgICAgICAgICAgICAgaWNvbj17PFN3YXBPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ29udmVydH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb252ZXJ0LXRleHRcIiBjc3M9e2NvbnZlcnRlZH0gcmVmPXtwaW55aW5SZWZ9PlxyXG4gICAgICAgICAgICAgIHshY29udmVydExvYWRpbmcgJiYgIWNvbnZlcnREb25lICYmIG51bGx9XHJcbiAgICAgICAgICAgICAge2NvbnZlcnRMb2FkaW5nICYmICFjb252ZXJ0RG9uZSAmJiA8TG9hZGluZ091dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIHshY29udmVydExvYWRpbmcgJiYgY29udmVydERvbmUgJiYgY29udmVydGVkUGlueWlufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2NvbnZlcnREb25lICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjc3M9e2NvcHlCdG59XHJcbiAgICAgICAgICAgICAgICBpY29uPXs8Q29weU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0NvcHl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRQb3BVcDtcclxuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdW5kQnRuID0gY3NzYFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMThkZGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4ZGRmZjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBbdmFsdWVdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xyXG59O1xyXG4iLCIvKiogQGpzeEltcG9ydFNvdXJjZSBAZW1vdGlvbi9yZWFjdCAqL1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7XHJcbiAgQXJyb3dMZWZ0T3V0bGluZWQsXHJcbiAgUGx1c0NpcmNsZUZpbGxlZCxcclxuICBDbG9zZU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICBSRU1PVkVfSEFTSFRBR19SRVFVRVNULFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IHJvdW5kQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udmVydFBvcFVwIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udmVydFBvcFVwJztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3QgV3JpdGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgY3VycmVudEhhc2h0YWdzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbdGFnLCBvbkNoYW5nZVRhZywgc2V0VGFnXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Gb2N1c0lucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQmx1cklucHV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZy1pbmZvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uS2V5UHJlc3NUYWcgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJywnKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIOu5iOy5uOycvOuhnCDsnoXroKXtlZjsp4Ag7JWK7JWY7J2E65WM66eMIOumrOyKpO2KuOyXkCDstpTqsIBcclxuICAgICAgICBpZiAodGFnLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgIC8vIOydtOuvuCDsnojripQg7ZW07Iuc7YOc6re46rCAIOyVhOuLkOuVjOunjCDrpqzsiqTtirjsl5Ag7LaU6rCAXHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnRIYXNodGFncy5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIC8vICPsnYQg67aZ7Jes7IScIO2VtOyLnO2DnOq3uOulvCDsnoXroKXtlojsnYQg65WM64qUICPsnYQg65a86rOgXHJcbiAgICAgICAgICAgIGlmICh0YWdbMF0gPT09ICcjJykge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9IQVNIVEFHX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0YWcuc2xpY2UoMSksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHRhZyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUYWcoJycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RhZ11cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNsaWNrVGFnID0gdXNlQ2FsbGJhY2soKHYpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCxcclxuICAgICAgZGF0YTogdixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2V4cHJlc3Npb25zLCBzZXRFeHByZXNzaW9uc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGV4cHJlc3Npb25OdW1iZXI6IDEsIHBpbnlpbjogJycsIG1lYW5pbmc6ICcnIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV4cHJlc3Npb25OdW0pID0+IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hcCgoZXhwcmVzc2lvbikgPT4ge1xyXG4gICAgICAgIGlmIChleHByZXNzaW9uTnVtID09PSBleHByZXNzaW9uLmV4cHJlc3Npb25OdW1iZXIpIHtcclxuICAgICAgICAgIGV4cHJlc3Npb25bZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRFeHByZXNzaW9ucyh0ZW1wRXhwcmVzc2lvbnMpO1xyXG4gICAgfSxcclxuICAgIFtleHByZXNzaW9uc11cclxuICApO1xyXG5cclxuICBjb25zdCBhZGRFeHByZXNzaW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZXhwcmVzc2lvbk51bWJlcjogZXhwcmVzc2lvbnMubGVuZ3RoICsgMSxcclxuICAgICAgcGlueWluOiAnJyxcclxuICAgICAgbWVhbmluZzogJycsXHJcbiAgICB9O1xyXG4gICAgc2V0RXhwcmVzc2lvbnMoWy4uLmV4cHJlc3Npb25zLCBkYXRhXSk7XHJcbiAgfSwgW2V4cHJlc3Npb25zXSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUV4cHJlc3Npb24gPSB1c2VDYWxsYmFjayhcclxuICAgIChleHByZXNzaW9uTnVtKSA9PiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBFeHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLmZpbHRlcihcclxuICAgICAgICAodikgPT4gdi5leHByZXNzaW9uTnVtYmVyICE9PSBleHByZXNzaW9uTnVtXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBvcmRlciA9IDE7XHJcbiAgICAgIGNvbnN0IGFycmFuZ2VkRXhwcmVzc2lvbnMgPSB0ZW1wRXhwcmVzc2lvbnMubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgdi5leHByZXNzaW9uTnVtYmVyID0gb3JkZXI7XHJcbiAgICAgICAgb3JkZXIrKztcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEV4cHJlc3Npb25zKFsuLi5hcnJhbmdlZEV4cHJlc3Npb25zXSk7XHJcbiAgICB9LFxyXG4gICAgW2V4cHJlc3Npb25zXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZFBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsZXQgaXNFeHByZXNzaW9uTnVsbCA9IGZhbHNlO1xyXG4gICAgZXhwcmVzc2lvbnMubWFwKCh2KSA9PiB7XHJcbiAgICAgIGlmICghdi5waW55aW4gfHwgIXYubWVhbmluZykge1xyXG4gICAgICAgIGlzRXhwcmVzc2lvbk51bGwgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRpdGxlICYmICFpc0V4cHJlc3Npb25OdWxsKSB7XHJcbiAgICAgIE1vZGFsLndhcm5pbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc0V4cHJlc3Npb25OdWxsICYmIHRpdGxlKSB7XHJcbiAgICAgIE1vZGFsLndhcm5pbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn67mE7Ja07J6I64qUIO2RnO2YhOydhCDrqqjrkZAg7LGE7JuM7KO87IS47JqUIScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aXRsZSAmJiBpc0V4cHJlc3Npb25OdWxsKSB7XHJcbiAgICAgIE1vZGFsLndhcm5pbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn67mE7Ja07J6I64qUIOygnOuqqeqzvCDtkZztmITsnYQg66qo65GQIOyxhOybjOyjvOyEuOyalCEnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDruYjsubgg7JeG7J20IOuqqOuRkCDsnoXroKXrkJjsl4jsnYQg65WMIO2RnO2YhCDsl4XroZzrk5ztlZjquLBcclxuICAgIGlmICh0aXRsZSAmJiAhaXNFeHByZXNzaW9uTnVsbCkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICB0YWc6IGN1cnJlbnRIYXNodGFncyxcclxuICAgICAgICAgIGV4cHJlc3Npb246IGV4cHJlc3Npb25zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt0aXRsZSwgY3VycmVudEhhc2h0YWdzLCBleHByZXNzaW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICB9XHJcbiAgfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxkaXYgY3NzPXt3cml0ZVBhZ2V9PlxyXG4gICAgICAgIDxkaXYgY3NzPXt3cml0ZUJveH0+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgY3NzPXt0aXRsZUJveH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cclxuICAgICAgICAgICAgYXV0b1NpemU9e3sgbWluUm93czogMSB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY3NzPXt0YWdCb3h9PlxyXG4gICAgICAgICAgICA8ZGl2IGNzcz17dGFnc30+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRIYXNodGFncy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17dn0gb25DbGljaz17KCkgPT4gb25DbGlja1RhZyh2KX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Z9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7YOc6re466W8IOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGFnfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGFnfVxyXG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc1RhZ31cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXNJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVySW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWctaW5mb1wiIGNzcz17dGFnSW5mb0JveH0+XHJcbiAgICAgICAgICAgICAg7Im87ZGcIO2YueydgCDsl5TthLDrpbwg7J6F66Cl7ZWY7JesIO2DnOq3uOulvCDrk7HroZ3tlaAg7IiYIOyeiOyKteuLiOuLpC4g65Ox66Gd65CcIO2DnOq3uOulvFxyXG4gICAgICAgICAgICAgIO2BtOumre2VmOuptCDsgq3soJzrkKnri4jri6QuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNzcz17bGluZX0+PC9kaXY+XHJcbiAgICAgICAgICB7LyogPEV4cHJlc3Npb25Cb3ggLz4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNzcz17ZXhwcmVzc2lvbkJveH0+XHJcbiAgICAgICAgICAgIHtleHByZXNzaW9ucy5tYXAoKHYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY3NzPXtib3h9IGtleT17di5leHByZXNzaW9uTnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjc3M9e3BpbnlpbkJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGlueWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ZWc7Ja067OR7J2M7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17di5waW55aW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0KGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgb25DbGljaz17ZGVsZXRlRXhwcmVzc2lvbihpbmRleCArIDEpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnZlcnRQb3BVcCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lYW5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi65y77J2EIOyeheugpe2VtOyjvOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3YubWVhbmluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0KGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjc3M9e3BsdXNCdG5Cb3h9PlxyXG4gICAgICAgICAgICA8UGx1c0NpcmNsZUZpbGxlZCBvbkNsaWNrPXthZGRFeHByZXNzaW9ufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3RlciBjc3M9e2Zvb3RlckJveH0+XHJcbiAgICAgICAgICA8QXJyb3dMZWZ0T3V0bGluZWQgb25DbGljaz17KCkgPT4gcm91dGVyLnJlcGxhY2UoJy8nKX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cInJvdW5kXCIgY3NzPXtyb3VuZEJ0bn0gb25DbGljaz17YWRkUG9zdH0+XHJcbiAgICAgICAgICAgIOunjOuTpOq4sFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHdyaXRlUGFnZSA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCB3cml0ZUJveCA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAzMHB4IDIwcHggMDtcclxuYDtcclxuXHJcbmNvbnN0IHRpdGxlQm94ID0gY3NzYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdGFnQm94ID0gY3NzYFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCB0YWdzID0gY3NzYFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2FkZjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzUzMWRhYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWYwZmY7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB0YWdJbmZvQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuYDtcclxuXHJcbmNvbnN0IGxpbmUgPSBjc3NgXHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDk0YjtcclxuYDtcclxuXHJcbmNvbnN0IGV4cHJlc3Npb25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBib3ggPSBjc3NgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOGRkZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0OTRiO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gICAgcmlnaHQ6IC0ycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGlueWluQm94ID0gY3NzYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBsdXNCdG5Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZm9vdGVyQm94ID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoNTgsIDI0LCAyNTUsIDIwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5hbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXJcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLWJvZHlcclxuICAgID4gLmFudC1tb2RhbC1jb25maXJtLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBjdXJyZW50SGFzaHRhZ3M6IFtdLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRMb2FkaW5nOiBmYWxzZSxcclxuICBjb252ZXJ0RG9uZTogZmFsc2UsXHJcbiAgY29udmVydEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRlZFBpbnlpbjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9IQVNIVEFHX1JFUVVFU1QgPSAnQUREX0hBU0hUQUdfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSEFTSFRBR19SRVFVRVNUID0gJ1JFTU9WRV9IQVNIVEFHX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlZFUlRfUElOWUlOX1JFUVVFU1QgPSAnQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDT05WRVJUX1BJTllJTl9TVUNDRVNTID0gJ0NPTlZFUlRfUElOWUlOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSA9ICdDT05WRVJUX1BJTllJTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05WRVJUX1JFU0VUX1JFUVVFU1QgPSAnQ09OVkVSVF9SRVNFVF9SRVFVRVNUJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jdXJyZW50SGFzaHRhZ3MgPSBbXTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfSEFTSFRBR19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmN1cnJlbnRIYXNodGFncy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSEFTSFRBR19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmN1cnJlbnRIYXNodGFncyA9IGRyYWZ0LmN1cnJlbnRIYXNodGFncy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdiAhPT0gYWN0aW9uLmRhdGFcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTlZFUlRfUElOWUlOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY29udmVydExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29udmVydEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1BJTllJTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29udmVydERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRlZFBpbnlpbiA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTlZFUlRfUElOWUlOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY29udmVydExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9SRVNFVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29udmVydEVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0ZWRQaW55aW4gPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==