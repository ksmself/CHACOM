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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reset.css */ "./reset.css");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\\uAE40\uC2B9\uBBF8\\Desktop\\for-portfolio\\2021-April\\prepare\\front\\pages\\_app.js";




 // Component에 index.js, signup.js 등이 들어감
// _app.js는 쟤들의 부모. 모든 페이지에서 공통으로 적용하고 싶은 게 있을 때 사용

const April = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "CHACOM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

April.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(April));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 // (이전 상태, 액션) => 다음 상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_HASHTAG_REQUEST, REMOVE_HASHTAG_REQUEST, CONVERT_PINYIN_REQUEST, CONVERT_PINYIN_SUCCESS, CONVERT_PINYIN_FAILURE, CONVERT_RESET_REQUEST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
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
  singlePost: null,
  currentHashtags: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  convertLoading: false,
  convertDone: false,
  convertError: null,
  convertedPinyin: null
};
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const ADD_HASHTAG_REQUEST = 'ADD_HASHTAG_REQUEST';
const REMOVE_HASHTAG_REQUEST = 'REMOVE_HASHTAG_REQUEST';
const CONVERT_PINYIN_REQUEST = 'CONVERT_PINYIN_REQUEST';
const CONVERT_PINYIN_SUCCESS = 'CONVERT_PINYIN_SUCCESS';
const CONVERT_PINYIN_FAILURE = 'CONVERT_PINYIN_FAILURE';
const CONVERT_RESET_REQUEST = 'CONVERT_RESET_REQUEST';

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      draft.addPostDone = false;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data;
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

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_END, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, CHECK_DUPLICATE_REQUEST, CHECK_DUPLICATE_SUCCESS, CHECK_DUPLICATE_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, LIKE_POST_TO_ME, UNLIKE_POST_TO_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_END", function() { return SIGN_UP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DUPLICATE_REQUEST", function() { return CHECK_DUPLICATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DUPLICATE_SUCCESS", function() { return CHECK_DUPLICATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DUPLICATE_FAILURE", function() { return CHECK_DUPLICATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_TO_ME", function() { return LIKE_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_TO_ME", function() { return UNLIKE_POST_TO_ME; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  users: [],
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  checkDuplicateLoading: false,
  // 중복확인 시도중
  checkDuplicateDone: false,
  checkDuplicateError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  isDuplicated: null,
  me: null
};
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_UP_END = 'SIGN_UP_END';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const CHECK_DUPLICATE_REQUEST = 'CHECK_DUPLICATE_REQUEST';
const CHECK_DUPLICATE_SUCCESS = 'CHECK_DUPLICATE_SUCCESS';
const CHECK_DUPLICATE_FAILURE = 'CHECK_DUPLICATE_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const LIKE_POST_TO_ME = 'LIKE_POST_TO_ME';
const UNLIKE_POST_TO_ME = 'UNLIKE_POST_TO_ME';

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true; // draft.users.push(action)

      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case SIGN_UP_END:
      draft.signUpDone = false;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInDone = false;
      draft.logInError = null;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.me = action.data;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case CHECK_DUPLICATE_REQUEST:
      draft.checkDuplicateLoading = true;
      draft.checkDuplicateDone = false;
      draft.checkDuplicateError = null;
      break;

    case CHECK_DUPLICATE_SUCCESS:
      draft.checkDuplicateLoading = false;
      draft.checkDuplicateDone = true;
      draft.isDuplicated = action.data;
      break;

    case CHECK_DUPLICATE_FAILURE:
      draft.checkDuplicateLoading = false;
      draft.checkDuplicateError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoDone = false;
      draft.loadMyInfoError = null;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.me = action.data;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift(action.data);
      break;

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data.PostId);
      break;

    case LIKE_POST_TO_ME:
      draft.me.LikePosts.unshift(action.data);
      break;

    case UNLIKE_POST_TO_ME:
      draft.me.LikePosts = draft.me.LikePosts.filter(v => v.id !== action.data.PostId);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reset.css":
/*!*******************!*\
  !*** ./reset.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./sagas/post.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/posts', data);
}

function* loadPosts(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      // REMOVE_POST_OF_ME
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    // const result = yield call(likePostAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_TO_ME"],
      // LIKE_POST_TO_ME
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    // const result = yield call(unlikePostAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_TO_ME"],
      // UNLIKE_POST_OF_ME
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function convertPinyinAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/convert/pinyin', data);
}

function* convertPinyin(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(convertPinyinAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["CONVERT_PINYIN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["CONVERT_PINYIN_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadPost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadPosts() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchLikePost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLikePost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchConvertPinyin() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["CONVERT_PINYIN_REQUEST"], convertPinyin);
}

function* postSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnLikePost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchConvertPinyin)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function checkDuplicateAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/duplicate', data);
}

function* checkDuplicate(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(checkDuplicateAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHECK_DUPLICATE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHECK_DUPLICATE_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout', data);
}

function* logOut() {
  try {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user', data);
}

function* loadMyInfo() {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchSignUp() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchLogIn() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchCheckDuplicate() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHECK_DUPLICATE_REQUEST"], checkDuplicate);
}

function* watchLoadMyInfo() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCheckDuplicate), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.js");
/* harmony import */ var _sagas_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas/index */ "./sagas/index.js");





 // action이 dispatch되는 것을 loggingg하는 미들웨어

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // action 실행 전에 콘솔 한 번 찍어주는 미들웨어
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware]; // redux의 기능이 확장된 것이 enhancer

  const enhancer = false ? // 배포용
  // middlewares는 배열이니까 spread해서 넣는다
  undefined : // 개발용일 때는 devtools 연결
  Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas_index__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  // 개발모드라면 디버그를 더 자세하게 해줌
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiQXByaWwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImN1cnJlbnRIYXNodGFncyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImNvbnZlcnRMb2FkaW5nIiwiY29udmVydERvbmUiLCJjb252ZXJ0RXJyb3IiLCJjb252ZXJ0ZWRQaW55aW4iLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJBRERfSEFTSFRBR19SRVFVRVNUIiwiUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCIsIkNPTlZFUlRfUElOWUlOX1JFUVVFU1QiLCJDT05WRVJUX1BJTllJTl9TVUNDRVNTIiwiQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSIsIkNPTlZFUlRfUkVTRVRfUkVRVUVTVCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJkYXRhIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImlkIiwiUG9zdElkIiwiZmluZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwidXNlcnMiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsImNoZWNrRHVwbGljYXRlTG9hZGluZyIsImNoZWNrRHVwbGljYXRlRG9uZSIsImNoZWNrRHVwbGljYXRlRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiaXNEdXBsaWNhdGVkIiwibWUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX0VORCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkNIRUNLX0RVUExJQ0FURV9SRVFVRVNUIiwiQ0hFQ0tfRFVQTElDQVRFX1NVQ0NFU1MiLCJDSEVDS19EVVBMSUNBVEVfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJMSUtFX1BPU1RfVE9fTUUiLCJVTkxJS0VfUE9TVF9UT19NRSIsIlBvc3RzIiwiTGlrZVBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwibG9hZFBvc3RBUEkiLCJnZXQiLCJsb2FkUG9zdCIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImxvYWRQb3N0c0FQSSIsImxvYWRQb3N0cyIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImNvbnZlcnRQaW55aW5BUEkiLCJjb252ZXJ0UGlueWluIiwid2F0Y2hMb2FkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaENvbnZlcnRQaW55aW4iLCJjaGVja0R1cGxpY2F0ZUFQSSIsImNoZWNrRHVwbGljYXRlIiwic2lnblVwQVBJIiwic2lnblVwIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwid2F0Y2hTaWduVXAiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaENoZWNrRHVwbGljYXRlIiwid2F0Y2hMb2FkTXlJbmZvIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUMvQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUNFLFlBQUksRUFBQyw0RUFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0UscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUEsa0JBREY7QUFhRCxDQWREOztBQWdCQUQsS0FBSyxDQUFDRSxTQUFOLEdBQWtCO0FBQ2hCRCxXQUFTLEVBQUVFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGpCLENBQWxCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JQLEtBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0EsTUFBTVEsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNyQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQywwREFBTDtBQUNFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLGFBQU9BLE1BQU0sQ0FBQ0ssT0FBZDs7QUFDRjtBQUFTO0FBQ1AsY0FBTUMsY0FBYyxHQUFHQyw2REFBZSxDQUFDO0FBQ3JDQyw2REFEcUM7QUFFckNDLDZEQUFJQTtBQUZpQyxTQUFELENBQXRDO0FBSUEsZUFBT0gsY0FBYyxDQUFDUCxLQUFELEVBQVFDLE1BQVIsQ0FBckI7QUFDRDtBQVZIO0FBWUQsQ0FiRDs7QUFlZUYsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNWSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxFQURlO0FBRTFCQyxZQUFVLEVBQUUsSUFGYztBQUcxQkMsaUJBQWUsRUFBRSxFQUhTO0FBSTFCQyxpQkFBZSxFQUFFLEtBSlM7QUFLMUJDLGNBQVksRUFBRSxLQUxZO0FBTTFCQyxlQUFhLEVBQUUsSUFOVztBQU8xQkMsa0JBQWdCLEVBQUUsS0FQUTtBQVExQkMsZUFBYSxFQUFFLEtBUlc7QUFTMUJDLGdCQUFjLEVBQUUsSUFUVTtBQVUxQkMsZ0JBQWMsRUFBRSxLQVZVO0FBVzFCQyxhQUFXLEVBQUUsS0FYYTtBQVkxQkMsY0FBWSxFQUFFLElBWlk7QUFhMUJDLG1CQUFpQixFQUFFLEtBYk87QUFjMUJDLGdCQUFjLEVBQUUsS0FkVTtBQWUxQkMsaUJBQWUsRUFBRSxJQWZTO0FBZ0IxQkMsaUJBQWUsRUFBRSxLQWhCUztBQWlCMUJDLGNBQVksRUFBRSxLQWpCWTtBQWtCMUJDLGVBQWEsRUFBRSxJQWxCVztBQW1CMUJDLG1CQUFpQixFQUFFLEtBbkJPO0FBb0IxQkMsZ0JBQWMsRUFBRSxLQXBCVTtBQXFCMUJDLGlCQUFlLEVBQUUsSUFyQlM7QUFzQjFCQyxnQkFBYyxFQUFFLEtBdEJVO0FBdUIxQkMsYUFBVyxFQUFFLEtBdkJhO0FBd0IxQkMsY0FBWSxFQUFFLElBeEJZO0FBeUIxQkMsaUJBQWUsRUFBRTtBQXpCUyxDQUFyQjtBQTRCQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7O0FBRVAsTUFBTUMsT0FBTyxHQUFHLENBQUM3RCxLQUFLLEdBQUdXLFlBQVQsRUFBdUJWLE1BQXZCLEtBQ2Q2RCw0Q0FBTyxDQUFDOUQsS0FBRCxFQUFTK0QsS0FBRCxJQUFXO0FBQ3hCLFVBQVE5RCxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLc0MsaUJBQUw7QUFDRXVCLFdBQUssQ0FBQ2hELGVBQU4sR0FBd0IsSUFBeEI7QUFDQWdELFdBQUssQ0FBQy9DLFlBQU4sR0FBcUIsS0FBckI7QUFDQStDLFdBQUssQ0FBQzlDLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTs7QUFDRixTQUFLd0IsaUJBQUw7QUFDRXNCLFdBQUssQ0FBQ2hELGVBQU4sR0FBd0IsS0FBeEI7QUFDQWdELFdBQUssQ0FBQy9DLFlBQU4sR0FBcUIsSUFBckI7QUFDQStDLFdBQUssQ0FBQ2xELFVBQU4sR0FBbUJaLE1BQU0sQ0FBQytELElBQTFCO0FBQ0E7O0FBQ0YsU0FBS3RCLGlCQUFMO0FBQ0VxQixXQUFLLENBQUNoRCxlQUFOLEdBQXdCLEtBQXhCO0FBQ0FnRCxXQUFLLENBQUM5QyxhQUFOLEdBQXNCaEIsTUFBTSxDQUFDZ0UsS0FBN0I7QUFDQTs7QUFDRixTQUFLNUIsa0JBQUw7QUFDRTBCLFdBQUssQ0FBQzdDLGdCQUFOLEdBQXlCLElBQXpCO0FBQ0E2QyxXQUFLLENBQUM1QyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0E0QyxXQUFLLENBQUMzQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0EyQyxXQUFLLENBQUN6QyxXQUFOLEdBQW9CLEtBQXBCO0FBQ0E7O0FBQ0YsU0FBS2dCLGtCQUFMO0FBQ0V5QixXQUFLLENBQUM3QyxnQkFBTixHQUF5QixLQUF6QjtBQUNBNkMsV0FBSyxDQUFDNUMsYUFBTixHQUFzQixJQUF0QjtBQUNBNEMsV0FBSyxDQUFDbkQsU0FBTixHQUFrQlgsTUFBTSxDQUFDK0QsSUFBekI7QUFDQTs7QUFDRixTQUFLekIsa0JBQUw7QUFDRXdCLFdBQUssQ0FBQzdDLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0E2QyxXQUFLLENBQUMzQyxjQUFOLEdBQXVCbkIsTUFBTSxDQUFDZ0UsS0FBOUI7QUFDQTs7QUFDRixTQUFLdEIsZ0JBQUw7QUFDRW9CLFdBQUssQ0FBQzFDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTBDLFdBQUssQ0FBQ3pDLFdBQU4sR0FBb0IsS0FBcEI7QUFDQXlDLFdBQUssQ0FBQ3hDLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixTQUFLcUIsZ0JBQUw7QUFDRW1CLFdBQUssQ0FBQzFDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTBDLFdBQUssQ0FBQ3pDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQXlDLFdBQUssQ0FBQ2pELGVBQU4sR0FBd0IsRUFBeEI7QUFDQWlELFdBQUssQ0FBQ25ELFNBQU4sQ0FBZ0JzRCxPQUFoQixDQUF3QmpFLE1BQU0sQ0FBQytELElBQS9CO0FBQ0E7O0FBQ0YsU0FBS25CLGdCQUFMO0FBQ0VrQixXQUFLLENBQUMxQyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0EwQyxXQUFLLENBQUN4QyxZQUFOLEdBQXFCdEIsTUFBTSxDQUFDZ0UsS0FBNUI7QUFDQTs7QUFDRixTQUFLbkIsbUJBQUw7QUFDRWlCLFdBQUssQ0FBQ3ZDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0F1QyxXQUFLLENBQUN0QyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FzQyxXQUFLLENBQUNyQyxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0YsU0FBS3FCLG1CQUFMO0FBQ0VnQixXQUFLLENBQUN2QyxpQkFBTixHQUEwQixLQUExQjtBQUNBdUMsV0FBSyxDQUFDdEMsY0FBTixHQUF1QixJQUF2QjtBQUNBc0MsV0FBSyxDQUFDbkQsU0FBTixHQUFrQm1ELEtBQUssQ0FBQ25ELFNBQU4sQ0FBZ0J1RCxNQUFoQixDQUNmQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTcEUsTUFBTSxDQUFDK0QsSUFBUCxDQUFZTSxNQURaLENBQWxCO0FBR0E7O0FBQ0YsU0FBS3RCLG1CQUFMO0FBQ0VlLFdBQUssQ0FBQ3ZDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0F1QyxXQUFLLENBQUNyQyxlQUFOLEdBQXdCekIsTUFBTSxDQUFDZ0UsS0FBL0I7QUFDQTs7QUFDRixTQUFLaEIsaUJBQUw7QUFDRWMsV0FBSyxDQUFDcEMsZUFBTixHQUF3QixJQUF4QjtBQUNBb0MsV0FBSyxDQUFDbkMsWUFBTixHQUFxQixLQUFyQjtBQUNBbUMsV0FBSyxDQUFDbEMsYUFBTixHQUFzQixJQUF0QjtBQUNBOztBQUNGLFNBQUtxQixpQkFBTDtBQUF3QjtBQUN0QixjQUFNeEMsSUFBSSxHQUFHcUQsS0FBSyxDQUFDbkQsU0FBTixDQUFnQjJELElBQWhCLENBQXNCSCxDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTcEUsTUFBTSxDQUFDK0QsSUFBUCxDQUFZTSxNQUFqRCxDQUFiO0FBQ0E1RCxZQUFJLENBQUM4RCxNQUFMLEdBQWM5RCxJQUFJLENBQUM4RCxNQUFMLENBQVlDLElBQVosQ0FBaUI7QUFBRUosWUFBRSxFQUFFcEUsTUFBTSxDQUFDK0QsSUFBUCxDQUFZVTtBQUFsQixTQUFqQixDQUFkO0FBQ0FYLGFBQUssQ0FBQ3BDLGVBQU4sR0FBd0IsS0FBeEI7QUFDQW9DLGFBQUssQ0FBQ25DLFlBQU4sR0FBcUIsSUFBckI7QUFDQTtBQUNEOztBQUNELFNBQUt1QixpQkFBTDtBQUNFWSxXQUFLLENBQUNwQyxlQUFOLEdBQXdCLEtBQXhCO0FBQ0FvQyxXQUFLLENBQUNsQyxhQUFOLEdBQXNCNUIsTUFBTSxDQUFDZ0UsS0FBN0I7QUFDQTs7QUFDRixTQUFLYixtQkFBTDtBQUNFVyxXQUFLLENBQUNqQyxpQkFBTixHQUEwQixJQUExQjtBQUNBaUMsV0FBSyxDQUFDaEMsY0FBTixHQUF1QixLQUF2QjtBQUNBZ0MsV0FBSyxDQUFDL0IsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNGLFNBQUtxQixtQkFBTDtBQUEwQjtBQUN4QixjQUFNM0MsSUFBSSxHQUFHcUQsS0FBSyxDQUFDbkQsU0FBTixDQUFnQjJELElBQWhCLENBQXNCSCxDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTcEUsTUFBTSxDQUFDK0QsSUFBUCxDQUFZTSxNQUFqRCxDQUFiO0FBQ0E1RCxZQUFJLENBQUM4RCxNQUFMLEdBQWM5RCxJQUFJLENBQUM4RCxNQUFMLENBQVlMLE1BQVosQ0FBb0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNwRSxNQUFNLENBQUMrRCxJQUFQLENBQVlVLE1BQS9DLENBQWQ7QUFDQVgsYUFBSyxDQUFDakMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWlDLGFBQUssQ0FBQ2hDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTtBQUNEOztBQUNELFNBQUt1QixtQkFBTDtBQUNFUyxXQUFLLENBQUNqQyxpQkFBTixHQUEwQixLQUExQjtBQUNBaUMsV0FBSyxDQUFDL0IsZUFBTixHQUF3Qi9CLE1BQU0sQ0FBQ2dFLEtBQS9CO0FBQ0E7O0FBQ0YsU0FBS1YsbUJBQUw7QUFDRVEsV0FBSyxDQUFDakQsZUFBTixDQUFzQjJELElBQXRCLENBQTJCeEUsTUFBTSxDQUFDK0QsSUFBbEM7QUFDQTs7QUFDRixTQUFLUixzQkFBTDtBQUNFTyxXQUFLLENBQUNqRCxlQUFOLEdBQXdCaUQsS0FBSyxDQUFDakQsZUFBTixDQUFzQnFELE1BQXRCLENBQ3JCQyxDQUFELElBQU9BLENBQUMsS0FBS25FLE1BQU0sQ0FBQytELElBREUsQ0FBeEI7QUFHQTs7QUFDRixTQUFLUCxzQkFBTDtBQUNFTSxXQUFLLENBQUM5QixjQUFOLEdBQXVCLElBQXZCO0FBQ0E4QixXQUFLLENBQUM3QixXQUFOLEdBQW9CLEtBQXBCO0FBQ0E2QixXQUFLLENBQUM1QixZQUFOLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0YsU0FBS3VCLHNCQUFMO0FBQ0VLLFdBQUssQ0FBQzlCLGNBQU4sR0FBdUIsS0FBdkI7QUFDQThCLFdBQUssQ0FBQzdCLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTZCLFdBQUssQ0FBQzNCLGVBQU4sR0FBd0JuQyxNQUFNLENBQUMrRCxJQUEvQjtBQUNBOztBQUNGLFNBQUtMLHNCQUFMO0FBQ0VJLFdBQUssQ0FBQzlCLGNBQU4sR0FBdUIsS0FBdkI7QUFDQThCLFdBQUssQ0FBQzVCLFlBQU4sR0FBcUJsQyxNQUFNLENBQUNnRSxLQUE1QjtBQUNBOztBQUNGLFNBQUtMLHFCQUFMO0FBQ0VHLFdBQUssQ0FBQzdCLFdBQU4sR0FBb0IsS0FBcEI7QUFDQTZCLFdBQUssQ0FBQzVCLFlBQU4sR0FBcUIsSUFBckI7QUFDQTRCLFdBQUssQ0FBQzNCLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRjtBQUNFO0FBekhKO0FBMkhELENBNUhNLENBRFQ7O0FBK0hleUIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTWxELFlBQVksR0FBRztBQUMxQmdFLGVBQWEsRUFBRSxLQURXO0FBQ0o7QUFDdEJDLFlBQVUsRUFBRSxLQUZjO0FBRzFCQyxhQUFXLEVBQUUsSUFIYTtBQUkxQkMsT0FBSyxFQUFFLEVBSm1CO0FBSzFCQyxjQUFZLEVBQUUsS0FMWTtBQUtMO0FBQ3JCQyxXQUFTLEVBQUUsS0FOZTtBQU8xQkMsWUFBVSxFQUFFLElBUGM7QUFRMUJDLGVBQWEsRUFBRSxLQVJXO0FBUUo7QUFDdEJDLFlBQVUsRUFBRSxLQVRjO0FBVTFCQyxhQUFXLEVBQUUsSUFWYTtBQVcxQkMsdUJBQXFCLEVBQUUsS0FYRztBQVdJO0FBQzlCQyxvQkFBa0IsRUFBRSxLQVpNO0FBYTFCQyxxQkFBbUIsRUFBRSxJQWJLO0FBYzFCQyxtQkFBaUIsRUFBRSxLQWRPO0FBZTFCQyxnQkFBYyxFQUFFLEtBZlU7QUFnQjFCQyxpQkFBZSxFQUFFLElBaEJTO0FBaUIxQkMsY0FBWSxFQUFFLElBakJZO0FBa0IxQkMsSUFBRSxFQUFFO0FBbEJzQixDQUFyQjtBQXFCQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjs7QUFFUCxNQUFNbkQsT0FBTyxHQUFHLENBQUM3RCxLQUFLLEdBQUdXLFlBQVQsRUFBdUJWLE1BQXZCLEtBQ2Q2RCw0Q0FBTyxDQUFDOUQsS0FBRCxFQUFTK0QsS0FBRCxJQUFXO0FBQ3hCLFVBQVE5RCxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLMkYsZUFBTDtBQUNFOUIsV0FBSyxDQUFDWSxhQUFOLEdBQXNCLElBQXRCO0FBQ0FaLFdBQUssQ0FBQ2EsVUFBTixHQUFtQixLQUFuQjtBQUNBYixXQUFLLENBQUNjLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFDRixTQUFLaUIsZUFBTDtBQUNFL0IsV0FBSyxDQUFDWSxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FaLFdBQUssQ0FBQ2EsVUFBTixHQUFtQixJQUFuQixDQUZGLENBR0U7O0FBQ0E7O0FBQ0YsU0FBS21CLGVBQUw7QUFDRWhDLFdBQUssQ0FBQ1ksYUFBTixHQUFzQixLQUF0QjtBQUNBWixXQUFLLENBQUNjLFdBQU4sR0FBb0I1RSxNQUFNLENBQUNnRSxLQUEzQjtBQUNBOztBQUNGLFNBQUsrQixXQUFMO0FBQ0VqQyxXQUFLLENBQUNhLFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFDRixTQUFLcUIsY0FBTDtBQUNFbEMsV0FBSyxDQUFDZ0IsWUFBTixHQUFxQixJQUFyQjtBQUNBaEIsV0FBSyxDQUFDaUIsU0FBTixHQUFrQixLQUFsQjtBQUNBakIsV0FBSyxDQUFDa0IsVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUNGLFNBQUtpQixjQUFMO0FBQ0VuQyxXQUFLLENBQUNnQixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FoQixXQUFLLENBQUNpQixTQUFOLEdBQWtCLElBQWxCO0FBQ0FqQixXQUFLLENBQUM2QixFQUFOLEdBQVczRixNQUFNLENBQUMrRCxJQUFsQjtBQUNBOztBQUNGLFNBQUttQyxjQUFMO0FBQ0VwQyxXQUFLLENBQUNnQixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FoQixXQUFLLENBQUNrQixVQUFOLEdBQW1CaEYsTUFBTSxDQUFDZ0UsS0FBMUI7QUFDQTs7QUFDRixTQUFLbUMsZUFBTDtBQUNFckMsV0FBSyxDQUFDbUIsYUFBTixHQUFzQixJQUF0QjtBQUNBbkIsV0FBSyxDQUFDb0IsVUFBTixHQUFtQixLQUFuQjtBQUNBcEIsV0FBSyxDQUFDcUIsV0FBTixHQUFvQixJQUFwQjtBQUNBOztBQUNGLFNBQUtpQixlQUFMO0FBQ0V0QyxXQUFLLENBQUNtQixhQUFOLEdBQXNCLEtBQXRCO0FBQ0FuQixXQUFLLENBQUNvQixVQUFOLEdBQW1CLElBQW5CO0FBQ0FwQixXQUFLLENBQUM2QixFQUFOLEdBQVcsSUFBWDtBQUNBOztBQUNGLFNBQUtVLGVBQUw7QUFDRXZDLFdBQUssQ0FBQ21CLGFBQU4sR0FBc0IsS0FBdEI7QUFDQW5CLFdBQUssQ0FBQ3FCLFdBQU4sR0FBb0JuRixNQUFNLENBQUNnRSxLQUEzQjtBQUNBOztBQUNGLFNBQUtzQyx1QkFBTDtBQUNFeEMsV0FBSyxDQUFDc0IscUJBQU4sR0FBOEIsSUFBOUI7QUFDQXRCLFdBQUssQ0FBQ3VCLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0F2QixXQUFLLENBQUN3QixtQkFBTixHQUE0QixJQUE1QjtBQUNBOztBQUNGLFNBQUtpQix1QkFBTDtBQUNFekMsV0FBSyxDQUFDc0IscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXRCLFdBQUssQ0FBQ3VCLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0F2QixXQUFLLENBQUM0QixZQUFOLEdBQXFCMUYsTUFBTSxDQUFDK0QsSUFBNUI7QUFDQTs7QUFDRixTQUFLeUMsdUJBQUw7QUFDRTFDLFdBQUssQ0FBQ3NCLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0F0QixXQUFLLENBQUN3QixtQkFBTixHQUE0QnRGLE1BQU0sQ0FBQ2dFLEtBQW5DO0FBQ0E7O0FBQ0YsU0FBS3lDLG9CQUFMO0FBQ0UzQyxXQUFLLENBQUN5QixpQkFBTixHQUEwQixJQUExQjtBQUNBekIsV0FBSyxDQUFDMEIsY0FBTixHQUF1QixLQUF2QjtBQUNBMUIsV0FBSyxDQUFDMkIsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNGLFNBQUtpQixvQkFBTDtBQUNFNUMsV0FBSyxDQUFDeUIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXpCLFdBQUssQ0FBQzBCLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTFCLFdBQUssQ0FBQzZCLEVBQU4sR0FBVzNGLE1BQU0sQ0FBQytELElBQWxCO0FBQ0E7O0FBQ0YsU0FBSzRDLG9CQUFMO0FBQ0U3QyxXQUFLLENBQUN5QixpQkFBTixHQUEwQixLQUExQjtBQUNBekIsV0FBSyxDQUFDMkIsZUFBTixHQUF3QnpGLE1BQU0sQ0FBQ2dFLEtBQS9CO0FBQ0E7O0FBQ0YsU0FBSzRDLGNBQUw7QUFDRTlDLFdBQUssQ0FBQzZCLEVBQU4sQ0FBU3FCLEtBQVQsQ0FBZS9DLE9BQWYsQ0FBdUJqRSxNQUFNLENBQUMrRCxJQUE5QjtBQUNBOztBQUNGLFNBQUs4QyxpQkFBTDtBQUNFL0MsV0FBSyxDQUFDNkIsRUFBTixDQUFTcUIsS0FBVCxHQUFpQmxELEtBQUssQ0FBQzZCLEVBQU4sQ0FBU3FCLEtBQVQsQ0FBZTlDLE1BQWYsQ0FDZEMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU3BFLE1BQU0sQ0FBQytELElBQVAsQ0FBWU0sTUFEYixDQUFqQjtBQUdBOztBQUNGLFNBQUt5QyxlQUFMO0FBQ0VoRCxXQUFLLENBQUM2QixFQUFOLENBQVNzQixTQUFULENBQW1CaEQsT0FBbkIsQ0FBMkJqRSxNQUFNLENBQUMrRCxJQUFsQztBQUNBOztBQUNGLFNBQUtnRCxpQkFBTDtBQUNFakQsV0FBSyxDQUFDNkIsRUFBTixDQUFTc0IsU0FBVCxHQUFxQm5ELEtBQUssQ0FBQzZCLEVBQU4sQ0FBU3NCLFNBQVQsQ0FBbUIvQyxNQUFuQixDQUNsQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU3BFLE1BQU0sQ0FBQytELElBQVAsQ0FBWU0sTUFEVCxDQUFyQjtBQUdBOztBQUNGO0FBQ0U7QUEzRko7QUE2RkQsQ0E5Rk0sQ0FEVDs7QUFpR2VULHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBc0QsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCLHVCQUF6QjtBQUNBRiw0Q0FBSyxDQUFDQyxRQUFOLENBQWVFLGVBQWYsR0FBaUMsSUFBakM7QUFFZSxVQUFVQyxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1DLDhEQUFHLENBQUMsQ0FBQ0MsK0RBQUksQ0FBQ0MsNkNBQUQsQ0FBTCxFQUFpQkQsK0RBQUksQ0FBQ0UsNkNBQUQsQ0FBckIsQ0FBRCxDQUFUO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXVCQTs7QUFPQSxTQUFTQyxXQUFULENBQXFCNUQsSUFBckIsRUFBMkI7QUFDekIsU0FBT21ELDRDQUFLLENBQUNVLEdBQU4sQ0FBVyxTQUFRN0QsSUFBSyxFQUF4QixDQUFQO0FBQ0Q7O0FBRUQsVUFBVThELFFBQVYsQ0FBbUI3SCxNQUFuQixFQUEyQjtBQUN6QixNQUFJO0FBQ0YsVUFBTThILE1BQU0sR0FBRyxNQUFNQyxxRUFBSSxDQUFDSixXQUFELEVBQWMzSCxNQUFNLENBQUMrRCxJQUFyQixDQUF6QjtBQUNBLFVBQU1pRSxvRUFBRyxDQUFDO0FBQ1IvSCxVQUFJLEVBQUV1QyxnRUFERTtBQUVSdUIsVUFBSSxFQUFFK0QsTUFBTSxDQUFDL0Q7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT2tFLEdBQVAsRUFBWTtBQUNaOUgsV0FBTyxDQUFDNkQsS0FBUixDQUFjaUUsR0FBZDtBQUNBLFVBQU1ELG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRXdDLGdFQURFO0FBRVJ1QixXQUFLLEVBQUVpRSxHQUFHLENBQUNDLFFBQUosQ0FBYW5FO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTb0UsWUFBVCxDQUFzQnBFLElBQXRCLEVBQTRCO0FBQzFCLFNBQU9tRCw0Q0FBSyxDQUFDVSxHQUFOLENBQVUsUUFBVixFQUFvQjdELElBQXBCLENBQVA7QUFDRDs7QUFFRCxVQUFVcUUsU0FBVixDQUFvQnBJLE1BQXBCLEVBQTRCO0FBQzFCLE1BQUk7QUFDRixVQUFNOEgsTUFBTSxHQUFHLE1BQU1DLHFFQUFJLENBQUNJLFlBQUQsRUFBZW5JLE1BQU0sQ0FBQytELElBQXRCLENBQXpCO0FBQ0EsVUFBTWlFLG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRW9DLGlFQURFO0FBRVIwQixVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1o5SCxXQUFPLENBQUM2RCxLQUFSLENBQWNpRSxHQUFkO0FBQ0EsVUFBTUQsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFcUMsaUVBREU7QUFFUjBCLFdBQUssRUFBRWlFLEdBQUcsQ0FBQ0MsUUFBSixDQUFhbkU7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVNzRSxVQUFULENBQW9CdEUsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT21ELDRDQUFLLENBQUN6RyxJQUFOLENBQVcsT0FBWCxFQUFvQnNELElBQXBCLENBQVA7QUFDRDs7QUFFRCxVQUFVdUUsT0FBVixDQUFrQnRJLE1BQWxCLEVBQTBCO0FBQ3hCLE1BQUk7QUFDRixVQUFNOEgsTUFBTSxHQUFHLE1BQU1DLHFFQUFJLENBQUNNLFVBQUQsRUFBYXJJLE1BQU0sQ0FBQytELElBQXBCLENBQXpCO0FBQ0EsVUFBTWlFLG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRTBDLCtEQURFO0FBRVJvQixVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlBLFVBQU1pRSxvRUFBRyxDQUFDO0FBQ1IvSCxVQUFJLEVBQUUyRyw2REFERTtBQUVSN0MsVUFBSSxFQUFFK0QsTUFBTSxDQUFDL0Q7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVZELENBVUUsT0FBT2tFLEdBQVAsRUFBWTtBQUNaOUgsV0FBTyxDQUFDNkQsS0FBUixDQUFjaUUsR0FBZDtBQUNBLFVBQU1ELG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRTJDLCtEQURFO0FBRVJvQixXQUFLLEVBQUVpRSxHQUFHLENBQUNDLFFBQUosQ0FBYW5FO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTd0UsYUFBVCxDQUF1QnhFLElBQXZCLEVBQTZCO0FBQzNCLFNBQU9tRCw0Q0FBSyxDQUFDc0IsTUFBTixDQUFjLFNBQVF6RSxJQUFLLEVBQTNCLENBQVA7QUFDRDs7QUFFRCxVQUFVMEUsVUFBVixDQUFxQnpJLE1BQXJCLEVBQTZCO0FBQzNCLE1BQUk7QUFDRjtBQUNBLFVBQU1nSSxvRUFBRyxDQUFDO0FBQ1IvSCxVQUFJLEVBQUU2QyxrRUFERTtBQUVSaUIsVUFBSSxFQUFFK0QsTUFBTSxDQUFDL0Q7QUFGTCxLQUFELENBQVQ7QUFJQSxVQUFNaUUsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFNEcsZ0VBREU7QUFDaUI7QUFDekI5QyxVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBVkQsQ0FVRSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1o5SCxXQUFPLENBQUM2RCxLQUFSLENBQWNpRSxHQUFkO0FBQ0EsVUFBTUQsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFOEMsa0VBREU7QUFFUmlCLFdBQUssRUFBRWlFLEdBQUcsQ0FBQ0MsUUFBSixDQUFhbkU7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVMyRSxXQUFULENBQXFCM0UsSUFBckIsRUFBMkI7QUFDekIsU0FBT21ELDRDQUFLLENBQUN5QixLQUFOLENBQWEsU0FBUTVFLElBQUssT0FBMUIsQ0FBUDtBQUNEOztBQUVELFVBQVU2RSxRQUFWLENBQW1CNUksTUFBbkIsRUFBMkI7QUFDekIsTUFBSTtBQUNGO0FBQ0EsVUFBTWdJLG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRWdELGdFQURFO0FBRVJjLFVBQUksRUFBRStELE1BQU0sQ0FBQy9EO0FBRkwsS0FBRCxDQUFUO0FBSUEsVUFBTWlFLG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRTZHLDhEQURFO0FBQ2U7QUFDdkIvQyxVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBVkQsQ0FVRSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1o5SCxXQUFPLENBQUM2RCxLQUFSLENBQWNpRSxHQUFkO0FBQ0EsVUFBTUQsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFaUQsZ0VBREU7QUFFUmMsV0FBSyxFQUFFaUUsR0FBRyxDQUFDQyxRQUFKLENBQWFuRTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUzhFLGFBQVQsQ0FBdUI5RSxJQUF2QixFQUE2QjtBQUMzQixTQUFPbUQsNENBQUssQ0FBQ3NCLE1BQU4sQ0FBYyxTQUFRekUsSUFBSyxPQUEzQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVStFLFVBQVYsQ0FBcUI5SSxNQUFyQixFQUE2QjtBQUMzQixNQUFJO0FBQ0Y7QUFDQSxVQUFNZ0ksb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFbUQsa0VBREU7QUFFUlcsVUFBSSxFQUFFK0QsTUFBTSxDQUFDL0Q7QUFGTCxLQUFELENBQVQ7QUFJQSxVQUFNaUUsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFOEcsZ0VBREU7QUFDaUI7QUFDekJoRCxVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBVkQsQ0FVRSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1o5SCxXQUFPLENBQUM2RCxLQUFSLENBQWNpRSxHQUFkO0FBQ0EsVUFBTUQsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFb0Qsa0VBREU7QUFFUlcsV0FBSyxFQUFFaUUsR0FBRyxDQUFDQyxRQUFKLENBQWFuRTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBU2dGLGdCQUFULENBQTBCaEYsSUFBMUIsRUFBZ0M7QUFDOUIsU0FBT21ELDRDQUFLLENBQUN6RyxJQUFOLENBQVcsc0JBQVgsRUFBbUNzRCxJQUFuQyxDQUFQO0FBQ0Q7O0FBRUQsVUFBVWlGLGFBQVYsQ0FBd0JoSixNQUF4QixFQUFnQztBQUM5QixNQUFJO0FBQ0YsVUFBTThILE1BQU0sR0FBRyxNQUFNQyxxRUFBSSxDQUFDZ0IsZ0JBQUQsRUFBbUIvSSxNQUFNLENBQUMrRCxJQUExQixDQUF6QjtBQUNBLFVBQU1pRSxvRUFBRyxDQUFDO0FBQ1IvSCxVQUFJLEVBQUV3RCxxRUFERTtBQUVSTSxVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1o5SCxXQUFPLENBQUM2RCxLQUFSLENBQWNpRSxHQUFkO0FBQ0EsVUFBTUQsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFeUQscUVBREU7QUFFUk0sV0FBSyxFQUFFaUUsR0FBRyxDQUFDQyxRQUFKLENBQWFuRTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVWtGLGFBQVYsR0FBMEI7QUFDeEIsUUFBTUMsMkVBQVUsQ0FBQzNHLGdFQUFELEVBQW9Cc0YsUUFBcEIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVc0IsY0FBVixHQUEyQjtBQUN6QixRQUFNRCwyRUFBVSxDQUFDOUcsaUVBQUQsRUFBcUJnRyxTQUFyQixDQUFoQjtBQUNEOztBQUVELFVBQVVnQixZQUFWLEdBQXlCO0FBQ3ZCLFFBQU1GLDJFQUFVLENBQUN4RywrREFBRCxFQUFtQjRGLE9BQW5CLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVWUsZUFBVixHQUE0QjtBQUMxQixRQUFNSCwyRUFBVSxDQUFDckcsa0VBQUQsRUFBc0I0RixVQUF0QixDQUFoQjtBQUNEOztBQUVELFVBQVVhLGFBQVYsR0FBMEI7QUFDeEIsUUFBTUosMkVBQVUsQ0FBQ2xHLGdFQUFELEVBQW9CNEYsUUFBcEIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVVyxlQUFWLEdBQTRCO0FBQzFCLFFBQU1MLDJFQUFVLENBQUMvRixrRUFBRCxFQUFzQjJGLFVBQXRCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVVUsa0JBQVYsR0FBK0I7QUFDN0IsUUFBTU4sMkVBQVUsQ0FBQzFGLHFFQUFELEVBQXlCd0YsYUFBekIsQ0FBaEI7QUFDRDs7QUFFYyxVQUFVdEIsUUFBVixHQUFxQjtBQUNsQyxRQUFNSCxvRUFBRyxDQUFDLENBQ1JDLHFFQUFJLENBQUN5QixhQUFELENBREksRUFFUnpCLHFFQUFJLENBQUMyQixjQUFELENBRkksRUFHUjNCLHFFQUFJLENBQUM0QixZQUFELENBSEksRUFJUjVCLHFFQUFJLENBQUM2QixlQUFELENBSkksRUFLUjdCLHFFQUFJLENBQUM4QixhQUFELENBTEksRUFNUjlCLHFFQUFJLENBQUMrQixlQUFELENBTkksRUFPUi9CLHFFQUFJLENBQUNnQyxrQkFBRCxDQVBJLENBQUQsQ0FBVDtBQVNELEM7Ozs7Ozs7Ozs7OztBQ2xPRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFrQkEsU0FBU0MsaUJBQVQsQ0FBMkIxRixJQUEzQixFQUFpQztBQUMvQixTQUFPbUQsNENBQUssQ0FBQ3pHLElBQU4sQ0FBVyxpQkFBWCxFQUE4QnNELElBQTlCLENBQVA7QUFDRDs7QUFFRCxVQUFVMkYsY0FBVixDQUF5QjFKLE1BQXpCLEVBQWlDO0FBQy9CLE1BQUk7QUFDRixVQUFNOEgsTUFBTSxHQUFHLE1BQU1DLHFFQUFJLENBQUMwQixpQkFBRCxFQUFvQnpKLE1BQU0sQ0FBQytELElBQTNCLENBQXpCO0FBQ0EsVUFBTWlFLG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRXNHLHNFQURFO0FBRVJ4QyxVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1o5SCxXQUFPLENBQUM2RCxLQUFSLENBQWNpRSxHQUFkO0FBQ0EsVUFBTUQsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFdUcsc0VBREU7QUFFUnhDLFdBQUssRUFBRWlFLEdBQUcsQ0FBQ0MsUUFBSixDQUFhbkU7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVM0RixTQUFULENBQW1CNUYsSUFBbkIsRUFBeUI7QUFDdkIsU0FBT21ELDRDQUFLLENBQUN6RyxJQUFOLENBQVcsT0FBWCxFQUFvQnNELElBQXBCLENBQVA7QUFDRDs7QUFFRCxVQUFVNkYsTUFBVixDQUFpQjVKLE1BQWpCLEVBQXlCO0FBQ3ZCLE1BQUk7QUFDRixVQUFNK0gscUVBQUksQ0FBQzRCLFNBQUQsRUFBWTNKLE1BQU0sQ0FBQytELElBQW5CLENBQVY7QUFDQSxVQUFNaUUsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFNEYsOERBQWVBO0FBRGIsS0FBRCxDQUFUO0FBR0QsR0FMRCxDQUtFLE9BQU9vQyxHQUFQLEVBQVk7QUFDWjlILFdBQU8sQ0FBQzZELEtBQVIsQ0FBY2lFLEdBQWQ7QUFDQSxVQUFNRCxvRUFBRyxDQUFDO0FBQ1IvSCxVQUFJLEVBQUU2Riw4REFERTtBQUVSOUIsV0FBSyxFQUFFaUUsR0FBRyxDQUFDQyxRQUFKLENBQWFuRTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUzhGLFFBQVQsQ0FBa0I5RixJQUFsQixFQUF3QjtBQUN0QixTQUFPbUQsNENBQUssQ0FBQ3pHLElBQU4sQ0FBVyxhQUFYLEVBQTBCc0QsSUFBMUIsQ0FBUDtBQUNEOztBQUVELFVBQVUrRixLQUFWLENBQWdCOUosTUFBaEIsRUFBd0I7QUFDdEIsTUFBSTtBQUNGLFVBQU04SCxNQUFNLEdBQUcsTUFBTUMscUVBQUksQ0FBQzhCLFFBQUQsRUFBVzdKLE1BQU0sQ0FBQytELElBQWxCLENBQXpCO0FBQ0EsVUFBTWlFLG9FQUFHLENBQUM7QUFDUi9ILFVBQUksRUFBRWdHLDZEQURFO0FBRVJsQyxVQUFJLEVBQUUrRCxNQUFNLENBQUMvRDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1o5SCxXQUFPLENBQUM2RCxLQUFSLENBQWNpRSxHQUFkO0FBQ0EsVUFBTUQsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFaUcsNkRBREU7QUFFUmxDLFdBQUssRUFBRWlFLEdBQUcsQ0FBQ0MsUUFBSixDQUFhbkU7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFNBQVNnRyxTQUFULENBQW1CaEcsSUFBbkIsRUFBeUI7QUFDdkIsU0FBT21ELDRDQUFLLENBQUN6RyxJQUFOLENBQVcsY0FBWCxFQUEyQnNELElBQTNCLENBQVA7QUFDRDs7QUFFRCxVQUFVaUcsTUFBVixHQUFtQjtBQUNqQixNQUFJO0FBQ0YsVUFBTWpDLHFFQUFJLENBQUNnQyxTQUFELENBQVY7QUFDQSxVQUFNL0Isb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFbUcsOERBQWVBO0FBRGIsS0FBRCxDQUFUO0FBR0QsR0FMRCxDQUtFLE9BQU82QixHQUFQLEVBQVk7QUFDWjlILFdBQU8sQ0FBQzZELEtBQVIsQ0FBY2lFLEdBQWQ7QUFDQSxVQUFNRCxvRUFBRyxDQUFDO0FBQ1IvSCxVQUFJLEVBQUVvRyw4REFERTtBQUVSckMsV0FBSyxFQUFFaUUsR0FBRyxDQUFDQyxRQUFKLENBQWFuRTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBU2tHLGFBQVQsQ0FBdUJsRyxJQUF2QixFQUE2QjtBQUMzQixTQUFPbUQsNENBQUssQ0FBQ1UsR0FBTixDQUFVLE9BQVYsRUFBbUI3RCxJQUFuQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVW1HLFVBQVYsR0FBdUI7QUFDckIsTUFBSTtBQUNGLFVBQU1wQyxNQUFNLEdBQUcsTUFBTUMscUVBQUksQ0FBQ2tDLGFBQUQsQ0FBekI7QUFDQSxVQUFNakMsb0VBQUcsQ0FBQztBQUNSL0gsVUFBSSxFQUFFeUcsbUVBREU7QUFFUjNDLFVBQUksRUFBRStELE1BQU0sQ0FBQy9EO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FORCxDQU1FLE9BQU9rRSxHQUFQLEVBQVk7QUFDWjlILFdBQU8sQ0FBQzZELEtBQVIsQ0FBY2lFLEdBQWQ7QUFDQSxVQUFNRCxvRUFBRyxDQUFDO0FBQ1IvSCxVQUFJLEVBQUUwRyxtRUFERTtBQUVSM0MsV0FBSyxFQUFFaUUsR0FBRyxDQUFDQyxRQUFKLENBQWFuRTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVW9HLFdBQVYsR0FBd0I7QUFDdEIsUUFBTWpCLDJFQUFVLENBQUN0RCw4REFBRCxFQUFrQmdFLE1BQWxCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVVEsVUFBVixHQUF1QjtBQUNyQixRQUFNbEIsMkVBQVUsQ0FBQ2xELDZEQUFELEVBQWlCOEQsS0FBakIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVTyxXQUFWLEdBQXdCO0FBQ3RCLFFBQU1uQiwyRUFBVSxDQUFDL0MsOERBQUQsRUFBa0I2RCxNQUFsQixDQUFoQjtBQUNEOztBQUVELFVBQVVNLG1CQUFWLEdBQWdDO0FBQzlCLFFBQU1wQiwyRUFBVSxDQUFDNUMsc0VBQUQsRUFBMEJvRCxjQUExQixDQUFoQjtBQUNEOztBQUVELFVBQVVhLGVBQVYsR0FBNEI7QUFDMUIsUUFBTXJCLDJFQUFVLENBQUN6QyxtRUFBRCxFQUF1QnlELFVBQXZCLENBQWhCO0FBQ0Q7O0FBRWMsVUFBVXpDLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUYsb0VBQUcsQ0FBQyxDQUNSQyxxRUFBSSxDQUFDMkMsV0FBRCxDQURJLEVBRVIzQyxxRUFBSSxDQUFDNEMsVUFBRCxDQUZJLEVBR1I1QyxxRUFBSSxDQUFDNkMsV0FBRCxDQUhJLEVBSVI3QyxxRUFBSSxDQUFDOEMsbUJBQUQsQ0FKSSxFQUtSOUMscUVBQUksQ0FBQytDLGVBQUQsQ0FMSSxDQUFELENBQVQ7QUFPRCxDOzs7Ozs7Ozs7Ozs7QUNuSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQTZCQyxJQUFELElBQVczSyxNQUFELElBQVk7QUFDekU7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxTQUFPMkssSUFBSSxDQUFDM0ssTUFBRCxDQUFYO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNNEssY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxFQUFpQkwsZ0JBQWpCLENBQXBCLENBRjJCLENBSTNCOztBQUNBLFFBQU1RLFFBQVEsR0FDWixRQUNJO0FBQ0E7QUFDQUMsV0FISixHQUlJO0FBQ0FDLHNGQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FOekI7QUFRQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUN6SCx1REFBRCxFQUFVb0gsUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQmpFLG9EQUFuQixDQUFqQjtBQUVBLFNBQU84RCxLQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJBLE1BQU14TCxPQUFPLEdBQUc0TCx3RUFBYSxDQUFDWixjQUFELEVBQWlCO0FBQzVDO0FBQ0FhLE9BQUs7QUFGdUMsQ0FBakIsQ0FBN0I7QUFLZTdMLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgJy4uL3Jlc2V0LmNzcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbi8vIENvbXBvbmVudOyXkCBpbmRleC5qcywgc2lnbnVwLmpzIOuTseydtCDrk6TslrTqsJBcclxuLy8gX2FwcC5qc+uKlCDsn6Trk6TsnZgg67aA66qoLiDrqqjrk6Ag7Y6Y7J207KeA7JeQ7IScIOqzte2GteycvOuhnCDsoIHsmqntlZjqs6Ag7Iu27J2AIOqyjCDsnojsnYQg65WMIOyCrOyaqVxyXG5jb25zdCBBcHJpbCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPkNIQUNPTTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMy4wL2Nzcy9hbGwubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHJpbC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcmlsKTtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyAo7J207KCEIOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYwg7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBjdXJyZW50SGFzaHRhZ3M6IFtdLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRMb2FkaW5nOiBmYWxzZSxcclxuICBjb252ZXJ0RG9uZTogZmFsc2UsXHJcbiAgY29udmVydEVycm9yOiBudWxsLFxyXG4gIGNvbnZlcnRlZFBpbnlpbjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfSEFTSFRBR19SRVFVRVNUID0gJ0FERF9IQVNIVEFHX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVCA9ICdSRU1PVkVfSEFTSFRBR19SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT05WRVJUX1BJTllJTl9SRVFVRVNUID0gJ0NPTlZFUlRfUElOWUlOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUyA9ICdDT05WRVJUX1BJTllJTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENPTlZFUlRfUElOWUlOX0ZBSUxVUkUgPSAnQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVkVSVF9SRVNFVF9SRVFVRVNUID0gJ0NPTlZFUlRfUkVTRVRfUkVRVUVTVCc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmN1cnJlbnRIYXNodGFncyA9IFtdO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0hBU0hUQUdfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jdXJyZW50SGFzaHRhZ3MucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0hBU0hUQUdfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jdXJyZW50SGFzaHRhZ3MgPSBkcmFmdC5jdXJyZW50SGFzaHRhZ3MuZmlsdGVyKFxyXG4gICAgICAgICAgKHYpID0+IHYgIT09IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1BJTllJTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ09OVkVSVF9QSU5ZSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb252ZXJ0ZWRQaW55aW4gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDT05WRVJUX1BJTllJTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29udmVydEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENPTlZFUlRfUkVTRVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jb252ZXJ0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbnZlcnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuY29udmVydGVkUGlueWluID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICB1c2VyczogW10sXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIGNoZWNrRHVwbGljYXRlTG9hZGluZzogZmFsc2UsIC8vIOykkeuzte2ZleyduCDsi5zrj4TspJFcclxuICBjaGVja0R1cGxpY2F0ZURvbmU6IGZhbHNlLFxyXG4gIGNoZWNrRHVwbGljYXRlRXJyb3I6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgaXNEdXBsaWNhdGVkOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0VORCA9ICdTSUdOX1VQX0VORCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEVDS19EVVBMSUNBVEVfUkVRVUVTVCA9ICdDSEVDS19EVVBMSUNBVEVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19EVVBMSUNBVEVfU1VDQ0VTUyA9ICdDSEVDS19EVVBMSUNBVEVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19EVVBMSUNBVEVfRkFJTFVSRSA9ICdDSEVDS19EVVBMSUNBVEVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfVE9fTUUgPSAnTElLRV9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1RPX01FID0gJ1VOTElLRV9QT1NUX1RPX01FJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGRyYWZ0LnVzZXJzLnB1c2goYWN0aW9uKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9FTkQ6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEVDS19EVVBMSUNBVEVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGVja0R1cGxpY2F0ZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoZWNrRHVwbGljYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoZWNrRHVwbGljYXRlRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIRUNLX0RVUExJQ0FURV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoZWNrRHVwbGljYXRlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoZWNrRHVwbGljYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNEdXBsaWNhdGVkID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hFQ0tfRFVQTElDQVRFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEdXBsaWNhdGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hlY2tEdXBsaWNhdGVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgZHJhZnQubWUuTGlrZVBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLkxpa2VQb3N0cyA9IGRyYWZ0Lm1lLkxpa2VQb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXJTYWdhKSwgZm9yayhwb3N0U2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGZvcmssIHRha2VMYXRlc3QsIGNhbGwsIHB1dCB9IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSxcclxuICBDT05WRVJUX1BJTllJTl9SRVFVRVNULFxyXG4gIENPTlZFUlRfUElOWUlOX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfVE9fTUUsXHJcbiAgTElLRV9QT1NUX1RPX01FLFxyXG4gIFJFTU9WRV9QT1NUX09GX01FLFxyXG4gIFVOTElLRV9QT1NUX1RPX01FLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsIC8vIFJFTU9WRV9QT1NUX09GX01FXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1RPX01FLCAvLyBMSUtFX1BPU1RfVE9fTUVcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfVE9fTUUsIC8vIFVOTElLRV9QT1NUX09GX01FXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRQaW55aW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9jb252ZXJ0L3BpbnlpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY29udmVydFBpbnlpbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjb252ZXJ0UGlueWluQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDT05WRVJUX1BJTllJTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ09OVkVSVF9QSU5ZSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb252ZXJ0UGlueWluKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ09OVkVSVF9QSU5ZSU5fUkVRVUVTVCwgY29udmVydFBpbnlpbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hDb252ZXJ0UGlueWluKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENIRUNLX0RVUExJQ0FURV9GQUlMVVJFLFxyXG4gIENIRUNLX0RVUExJQ0FURV9SRVFVRVNULFxyXG4gIENIRUNLX0RVUExJQ0FURV9TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tEdXBsaWNhdGVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9kdXBsaWNhdGUnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoZWNrRHVwbGljYXRlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoZWNrRHVwbGljYXRlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEVDS19EVVBMSUNBVEVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIRUNLX0RVUExJQ0FURV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoZWNrRHVwbGljYXRlKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hFQ0tfRFVQTElDQVRFX1JFUVVFU1QsIGNoZWNrRHVwbGljYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hDaGVja0R1cGxpY2F0ZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcy9pbmRleCc7XHJcblxyXG4vLyBhY3Rpb27snbQgZGlzcGF0Y2jrkJjripQg6rKD7J2EIGxvZ2dpbmdn7ZWY64qUIOuvuOuTpOybqOyWtFxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgLy8gYWN0aW9uIOyLpO2WiSDsoITsl5Ag7L2Y7IaUIO2VnCDrsogg7LCN7Ja07KO864qUIOuvuOuTpOybqOyWtFxyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcblxyXG4gIC8vIHJlZHV47J2YIOq4sOuKpeydtCDtmZXsnqXrkJwg6rKD7J20IGVuaGFuY2VyXHJcbiAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICA/IC8vIOuwsO2PrOyaqVxyXG4gICAgICAgIC8vIG1pZGRsZXdhcmVz64qUIOuwsOyXtOydtOuLiOq5jCBzcHJlYWTtlbTshJwg64Sj64qU64ukXHJcbiAgICAgICAgY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICA6IC8vIOqwnOuwnOyaqeydvCDrlYzripQgZGV2dG9vbHMg7Jew6rKwXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIC8vIOqwnOuwnOuqqOuTnOudvOuptCDrlJTrsoTqt7jrpbwg642UIOyekOyEuO2VmOqyjCDtlbTspIxcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=