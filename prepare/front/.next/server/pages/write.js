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
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");


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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    inputRef.current.focus();
  });
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
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
          lineNumber: 240,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          shape: "round",
          css: _components_styles__WEBPACK_IMPORTED_MODULE_7__["roundBtn"],
          children: "\uAE00\uC4F0\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      css: mainBox,
      children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
        placeholder: "I'm learning...",
        css: textBox,
        autoSize: {
          minRows: 4
        },
        ref: inputRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: line
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        css: buttonBox,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PictureOutlined"], {
          css: pictureIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          css: pinyinBtn,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }, undefined), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          css: hanziBtn,
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvd3JpdGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJyb3VuZEJ0biIsImNzcyIsIlRleHRBcmVhIiwiSW5wdXQiLCJoZWFkZXJIZWlnaHQiLCJoZWFkZXJCb3giLCJoZWFkZXJDb250ZW50IiwiYXJyb3dJY29uIiwibWFpbkJveCIsInRleHRCb3giLCJsaW5lIiwiYnV0dG9uQm94IiwicGljdHVyZUljb24iLCJwaW55aW5CdG4iLCJoYW56aUJ0biIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiV3JpdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnB1dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsInJlcGxhY2UiLCJtaW5Sb3dzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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OEMiLCJmaWxlIjoicGFnZXMvd3JpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3dyaXRlLmpzXCIpO1xuIiwiLyoqIEBqc3hJbXBvcnRTb3VyY2UgQGVtb3Rpb24vcmVhY3QgKi9cclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdW5kQnRuID0gY3NzYFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMThkZGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4ZGRmZjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ExOGZmO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsIi8qKiBAanN4SW1wb3J0U291cmNlIEBlbW90aW9uL3JlYWN0ICovXHJcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93TGVmdE91dGxpbmVkLCBQaWN0dXJlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgcm91bmRCdG4gfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcyc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IGhlYWRlckhlaWdodCA9IFsnNjNweCcsICc3MXB4JywgJzg3cHgnXTtcclxuXHJcbmNvbnN0IGhlYWRlckJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAke2hlYWRlckhlaWdodFswXX07XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWlnaHQ6ICR7aGVhZGVySGVpZ2h0WzFdfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGhlaWdodDogJHtoZWFkZXJIZWlnaHRbMl19O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGhlYWRlckNvbnRlbnQgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDU4LCAyNCwgMjU1LCAwLjcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHBhZGRpbmc6IDE4cHggNDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBhcnJvd0ljb24gPSBjc3NgXHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgbWFpbkJveCA9IGNzc2BcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCB0ZXh0Qm94ID0gY3NzYFxyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY2FyZXQtY29sb3I6ICMxOGRkZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMThweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzZhNzQ4MTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBsaW5lID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzOCwgMjQwKTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBidXR0b25Cb3ggPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogJHtoZWFkZXJIZWlnaHRbMF19O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWlnaHQ6ICR7aGVhZGVySGVpZ2h0WzFdfTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGhlaWdodDogJHtoZWFkZXJIZWlnaHRbMl19O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHBpY3R1cmVJY29uID0gY3NzYFxyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjM2ExOGZmO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxOGRkZmY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgcGlueWluQnRuID0gY3NzYFxyXG4gIHdpZHRoOiA5MnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMThkZGZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4ZGRmZjtcclxuXHJcbiAgICBzcGFuOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnUMSrbnnEq24nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ+2VnOyWtOuzkeydjCc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBoYW56aUJ0biA9IGNzc2BcclxuICB3aWR0aDogNzdweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICMzYTE4ZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhMThmZjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB3aWR0aDogODZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMxOGRkZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThkZGZmO1xyXG5cclxuICAgIHNwYW46OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICfmsYnlrZcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzNhMThmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTE4ZmY7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJ+qwhOyytOyekCc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuYW50LWlucHV0e1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAuYW50LWlucHV0OmZvY3Vze1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8aGVhZGVyIGNzcz17aGVhZGVyQm94fT5cclxuICAgICAgICA8ZGl2IGNzcz17aGVhZGVyQ29udGVudH0+XHJcbiAgICAgICAgICA8QXJyb3dMZWZ0T3V0bGluZWRcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNzcz17YXJyb3dJY29ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJyb3VuZFwiIGNzcz17cm91bmRCdG59PlxyXG4gICAgICAgICAgICDquIDsk7DquLBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY3NzPXttYWluQm94fT5cclxuICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSSdtIGxlYXJuaW5nLi4uXCJcclxuICAgICAgICAgIGNzcz17dGV4dEJveH1cclxuICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDQgfX1cclxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNzcz17bGluZX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjc3M9e2J1dHRvbkJveH0+XHJcbiAgICAgICAgICA8UGljdHVyZU91dGxpbmVkIGNzcz17cGljdHVyZUljb259IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIGNzcz17cGlueWluQnRufT5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGNzcz17aGFuemlCdG59PlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9