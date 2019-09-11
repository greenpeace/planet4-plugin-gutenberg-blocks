/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./react-blocks/src/editorIndex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./react-blocks/src/blocks/Articles/Articles.js":
/*!******************************************************!*\
  !*** ./react-blocks/src/blocks/Articles/Articles.js ***!
  \******************************************************/
/*! exports provided: Articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articles", function() { return Articles; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);









var _wp = wp,
    apiFetch = _wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var Articles =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Articles, _Component);

  function Articles(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Articles);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Articles).call(this, props)); // Populate tag tokens for saved tags.

    var tagTokens = props.tagsList.filter(function (tag) {
      return props.tags.includes(tag.id);
    }).map(function (tag) {
      return tag.name;
    }); // Populate post types tokens for saved post types.

    var postTypeTokens = props.postTypesList.filter(function (post_type) {
      return props.post_types.includes(post_type.id);
    }).map(function (post_type) {
      return post_type.name;
    });
    _this.state = {
      tagTokens: tagTokens,
      postTypeTokens: postTypeTokens,
      selectedPosts: []
    };

    _this.populatePostsToken();

    return _this;
  }
  /**
   * Set component's state for existing blocks.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Articles, [{
    key: "populatePostsToken",
    value: function populatePostsToken() {
      var _this2 = this;

      if (this.props.posts.length > 0) {
        apiFetch({
          path: addQueryArgs('/wp/v2/posts', {
            per_page: 50,
            page: 1,
            include: this.props.posts
          })
        }).then(function (posts) {
          var postsTokens = posts.map(function (post) {
            return post.title.rendered;
          });
          var postsSuggestions = posts.map(function (post) {
            return post.title.rendered;
          });

          _this2.setState({
            postsTokens: postsTokens,
            postsList: posts,
            postsSuggestions: postsSuggestions,
            selectedPosts: posts
          });
        });
      } else {
        this.setState({
          postsTokens: [],
          postsList: [],
          postsSuggestions: [],
          selectedPosts: []
        });
      }
    }
    /**
     * Search posts using wp api.
     *
     * @param tokens
     */

  }, {
    key: "onPostsSearch",
    value: function onPostsSearch(tokens) {
      var _this3 = this;

      apiFetch({
        path: addQueryArgs('/wp/v2/posts', {
          per_page: 50,
          page: 1,
          search: tokens,
          orderby: 'title',
          post_status: 'publish'
        })
      }).then(function (posts) {
        var postsSuggestions = posts.map(function (post) {
          return post.title.rendered;
        });

        _this3.setState({
          postsSuggestions: postsSuggestions,
          postsList: posts
        });
      });
    }
  }, {
    key: "onSelectedTagsChange",
    value: function onSelectedTagsChange(tokens) {
      var _this4 = this;

      var tagIds = tokens.map(function (token) {
        return _this4.props.tagsList.filter(function (tag) {
          return tag.name === token;
        })[0].id;
      });
      this.props.onSelectedTagsChange(tagIds);
      this.setState({
        tagTokens: tokens
      });
    }
  }, {
    key: "onSelectedPostTypesChange",
    value: function onSelectedPostTypesChange(tokens) {
      var _this5 = this;

      var postTypeIds = tokens.map(function (token) {
        return _this5.props.postTypesList.filter(function (postType) {
          return postType.name === token;
        })[0].id;
      });
      this.props.onSelectedPostTypesChange(postTypeIds);
      this.setState({
        postTypeTokens: tokens
      });
    }
  }, {
    key: "onSelectedPostsChange",
    value: function onSelectedPostsChange(tokens) {
      var _this6 = this;

      // Array to hold references to selected posts objects.
      var currentSelectedPosts = [];
      tokens.forEach(function (token) {
        var f = _this6.state.postsList.filter(function (post) {
          return post.title.rendered === token;
        });

        if (f.length > 0) {
          currentSelectedPosts.push(f[0]);
        }

        f = _this6.state.selectedPosts.filter(function (post) {
          return post.title.rendered === token;
        });

        if (f.length > 0) {
          currentSelectedPosts.push(f[0]);
        }
      });
      var postIds = currentSelectedPosts.map(function (post) {
        return post.id;
      });
      this.props.onSelectedPostsChange(postIds);
      this.setState({
        postsTokens: tokens,
        selectedPosts: currentSelectedPosts
      });
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var _this7 = this;

      var __ = wp.i18n.__;
      var tagSuggestions = this.props.tagsList.map(function (tag) {
        return tag.name;
      });
      var postTypeSuggestions = this.props.postTypesList.map(function (postType) {
        return postType.name;
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Title', 'p4ge'),
        placeholder: __('Enter title', 'p4ge'),
        help: __('Your default is set to [ Latest Articles ]', 'p4ge'),
        value: this.props.article_heading,
        onChange: this.props.onTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        placeholder: __('Enter description', 'p4ge'),
        value: this.props.articles_description,
        onChange: this.props.onDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Button Text', 'p4ge'),
        placeholder: __('Override button text', 'p4ge'),
        help: __('Your default is set to [ Load More ]', 'p4ge'),
        value: this.props.read_more_text,
        onChange: this.props.onReadmoretextChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Button Link', 'p4ge'),
        placeholder: __('Add read more button link', 'p4ge'),
        value: this.props.read_more_link,
        onChange: this.props.onReadmorelinkChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["CheckboxControl"], {
        label: __('Open in a new Tab', 'p4ge'),
        help: __('Open button link in new tab', 'p4ge'),
        value: this.props.button_link_new_tab,
        checked: this.props.button_link_new_tab,
        onChange: function onChange(e) {
          return _this7.props.onButtonLinkTabChange(e);
        }
      })), this.props.posts !== 'undefined' && this.props.posts.length === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Articles count', 'p4ge'),
        help: __('Number of articles', 'p4ge'),
        type: "number",
        value: this.props.article_count,
        onChange: this.props.onCountChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.state.tagTokens,
        suggestions: tagSuggestions,
        label: __('Select Tags', 'p4ge'),
        onChange: function onChange(tokens) {
          return _this7.onSelectedTagsChange(tokens);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        className: "FieldHelp"
      }, "Associate this block with Actions that have specific Tags")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.state.postTypeTokens,
        suggestions: postTypeSuggestions,
        label: __('Post Types', 'p4ge'),
        onChange: function onChange(tokens) {
          return _this7.onSelectedPostTypesChange(tokens);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "ignore-categories-wrapper"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["CheckboxControl"], {
        label: __('Ignore categories', 'p4ge'),
        help: __('Ignore categories when filtering posts to populate the content of this block', 'p4ge'),
        value: this.props.ignore_categories,
        checked: this.props.ignore_categories,
        onChange: function onChange(e) {
          return _this7.props.onIgnoreCategoriesChange(e);
        }
      }))) : null, this.props.tags.length === 0 && this.props.post_types.length === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, __('Manual override', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["FormTokenField"], {
        value: this.state.postsTokens,
        suggestions: this.state.postsSuggestions,
        label: __('CAUTION: Adding articles individually will override the automatic functionality of this block. For good user experience, please include at least three articles so that spacing and alignment of the design remains in tact.', 'p4ge'),
        onChange: function onChange(tokens) {
          return _this7.onSelectedPostsChange(tokens);
        },
        onInputChange: function onInputChange(tokens) {
          return _this7.onPostsSearch(tokens);
        },
        placeholder: "Select Posts",
        maxLength: "10",
        maxSuggestions: "20"
      })) : null);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ServerSideRender"], {
        block: 'planet4-blocks/articles',
        attributes: {
          read_more_text: this.props.read_more_text,
          read_more_link: this.props.read_more_link,
          tags: this.props.tags,
          post_types: this.props.post_types,
          posts: this.props.posts,
          article_heading: this.props.article_heading,
          articles_description: this.props.articles_description,
          article_count: this.props.article_count,
          ignore_categories: this.props.ignore_categories
        }
      })));
    }
  }]);

  return Articles;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Articles/ArticlesBlock.js":
/*!***********************************************************!*\
  !*** ./react-blocks/src/blocks/Articles/ArticlesBlock.js ***!
  \***********************************************************/
/*! exports provided: ArticlesBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesBlock", function() { return ArticlesBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Articles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Articles.js */ "./react-blocks/src/blocks/Articles/Articles.js");
/* harmony import */ var _ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticlesConfig.js */ "./react-blocks/src/blocks/Articles/ArticlesConfig.js");
/* harmony import */ var _ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4__);





console.log(_ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4___default.a);
var ArticlesBlock = function ArticlesBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ArticlesBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var withSelect = wp.data.withSelect;
  registerBlockType(_ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4___default.a.gutenbergTag, {
    title: 'Articles',
    icon: 'welcome-widgets-menus',
    category: 'planet4-blocks',
    // Transform the shortcode into a Gutenberg block
    // this is used when a user clicks "Convert to blocks"
    // on the "Classic Editor" block
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: _ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4___default.a.shortCodeTag,
        attributes: _ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4___default.a.shortcodeAttributes
      }]
    },
    // This attributes definition mimics the one in the PHP side.
    attributes: _ArticlesConfig_js__WEBPACK_IMPORTED_MODULE_4___default.a.gutenbergAttributes,
    // withSelect is a "Higher Order Component", it works as
    // a Decorator, it will provide some basic API functionality
    // through `select`.
    edit: withSelect(function (select) {
      var tagsTaxonomy = 'post_tag';
      var postTypesTaxonomy = 'p4-page-type';
      var args = {
        hide_empty: false,
        per_page: 50
      };

      var _select = select('core'),
          getEntityRecords = _select.getEntityRecords; // We should probably wrap all these in a single call,
      // or maybe use our own way of retrieving data from the
      // API, I don't know how this scales.


      var tagsList = getEntityRecords('taxonomy', tagsTaxonomy, args);
      var postTypesList = getEntityRecords('taxonomy', postTypesTaxonomy, args);
      return {
        postTypesList: postTypesList,
        tagsList: tagsList
      };
    })(function (_ref) {
      var postTypesList = _ref.postTypesList,
          tagsList = _ref.tagsList,
          isSelected = _ref.isSelected,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      if (!tagsList || !postTypesList) {
        return "Populating block's fields...";
      } // TO-DO: Check for posts types and posts too...


      if (tagsList && tagsList.length === 0 || postTypesList && postTypesList.length === 0) {
        return "Populating block's fields...";
      } // These methods are passed down to the
      // Articles component, they update the corresponding attribute.


      function onTitleChange(value) {
        setAttributes({
          article_heading: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          articles_description: value
        });
      }

      function onReadmoretextChange(value) {
        setAttributes({
          read_more_text: value
        });
      }

      function onCountChange(value) {
        setAttributes({
          article_count: Number(value)
        });
      }

      function onReadmorelinkChange(value) {
        setAttributes({
          read_more_link: value
        });
      }

      function onButtonLinkTabChange(value) {
        setAttributes({
          button_link_new_tab: value
        });
      }

      function onSelectedTagsChange(tagIds) {
        setAttributes({
          tags: tagIds
        });
      }

      function onSelectedPostsChange(value) {
        setAttributes({
          posts: value
        });
      }

      function onSelectedPostTypesChange(postTypeIds) {
        setAttributes({
          post_types: postTypeIds
        });
      }

      function onIgnoreCategoriesChange(value) {
        setAttributes({
          ignore_categories: value
        });
      } // We pass down all the attributes to Covers as props using
      // the spread operator. Then we selectively add more
      // props.


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Articles_js__WEBPACK_IMPORTED_MODULE_3__["Articles"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        tagsList: tagsList,
        postTypesList: postTypesList,
        onSelectedTagsChange: onSelectedTagsChange,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onCountChange: onCountChange,
        onSelectedPostsChange: onSelectedPostsChange,
        onSelectedPostTypesChange: onSelectedPostTypesChange,
        onReadmoretextChange: onReadmoretextChange,
        onReadmorelinkChange: onReadmorelinkChange,
        onButtonLinkTabChange: onButtonLinkTabChange,
        onIgnoreCategoriesChange: onIgnoreCategoriesChange
      }));
    }),
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Articles/ArticlesConfig.js":
/*!************************************************************!*\
  !*** ./react-blocks/src/blocks/Articles/ArticlesConfig.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var shortCodeTag = 'shortcake_articles';
var gutenbergTag = 'planet4-blocks/articles';
var shortCodeAttributes = {
  article_heading: {
    type: 'string',
    shortcode: function shortcode(_ref) {
      var _ref$named$article_he = _ref.named.article_heading,
          article_heading = _ref$named$article_he === void 0 ? null : _ref$named$article_he;
      return article_heading;
    }
  },
  articles_description: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.articles_description;
    }
  },
  article_count: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.article_count;
    }
  },
  read_more_text: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.read_more_text;
    }
  },
  read_more_link: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.read_more_link;
    }
  },
  button_link_new_tab: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.button_link_new_tab;
    }
  },
  ignore_categories: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.ignore_categories;
    }
  },
  tags: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.tags ? attributes.named.tags.split(',') : [];
    }
  },
  post_types: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.post_types ? attributes.named.post_types.split(',') : [];
    }
  },
  posts: {
    type: 'string',
    shortcode: function shortcode(attributes) {
      return attributes.named.posts ? attributes.named.posts.split(',') : [];
    }
  }
};
var gutenbergAttributes = {
  article_heading: {
    type: 'string'
  },
  articles_description: {
    type: 'string'
  },
  article_count: {
    type: 'integer',
    default: 3
  },
  tags: {
    type: 'array',
    default: []
  },
  posts: {
    type: 'array',
    default: []
  },
  post_types: {
    type: 'array',
    default: []
  },
  read_more_text: {
    type: 'string'
  },
  read_more_link: {
    type: 'string',
    default: ''
  },
  button_link_new_tab: {
    type: 'boolean',
    default: false
  }
};
exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;

/***/ }),

/***/ "./react-blocks/src/blocks/Columns/Columns.js":
/*!****************************************************!*\
  !*** ./react-blocks/src/blocks/Columns/Columns.js ***!
  \****************************************************/
/*! exports provided: Columns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return Columns; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LayoutSelector/LayoutSelector */ "./react-blocks/src/components/LayoutSelector/LayoutSelector.js");
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");












var Columns =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Columns, _Component);

  function Columns(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Columns);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Columns).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Columns, [{
    key: "renderEdit",
    value: function renderEdit() {
      var _this = this;

      var __ = wp.i18n.__;
      var _this$props = this.props,
          columns_title = _this$props.columns_title,
          columns_description = _this$props.columns_description,
          columns_block_style = _this$props.columns_block_style,
          columns = _this$props.columns;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, __('What style of column do you need?', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_9__["LayoutSelector"], {
        selectedOption: columns_block_style,
        onSelectedLayoutChange: this.props.onSelectedLayoutChange,
        options: [{
          label: __('No Image', 'p4ge'),
          image: window.p4ge_vars.home + 'images/columns-no_images.jpg',
          value: 'no_image',
          help: __('Optional headers, description text and buttons in a column display.', 'p4ge')
        }, {
          label: __('Tasks', 'p4ge'),
          image: window.p4ge_vars.home + 'images/columns-tasks.jpg',
          value: 'tasks',
          help: __('Used on Take Action pages, this display has ordered tasks, and call to action buttons.', 'p4ge')
        }, {
          label: __('Icons', 'p4ge'),
          image: window.p4ge_vars.home + 'images/columns-icons.jpg',
          value: 'icons',
          help: __('For more static content, this display has an icon, header, description and text link.', 'p4ge')
        }, {
          label: __('Images', 'p4ge'),
          image: window.p4ge_vars.home + 'images/columns-images.jpg',
          value: 'image',
          help: __('For more static content, this display has an image, header, description and text link.', 'p4ge')
        }]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Title', 'p4ge'),
        placeholder: __('Enter block title', 'p4ge'),
        value: columns_title,
        onChange: this.props.onTitleChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        placeholder: __('Enter block description', 'p4ge'),
        value: columns_description,
        onChange: this.props.onDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, columns.map(function (item, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
          key: index
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", null, __('In order for the column to appear at least <strong>Header or Body</strong> has to be filled.', 'p4ge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
          label: __('Column %s: Header', 'p4ge').replace('%s', index + 1),
          placeholder: __('Enter header of %s column', 'p4ge').replace('%s', index + 1),
          value: item.title,
          onChange: _this.props.onColumnHeaderChange.bind(_this, index)
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
          label: __('Column %s: Body', 'p4ge').replace('%s', index + 1),
          placeholder: __('Enter body of %s column', 'p4ge').replace('%s', index + 1),
          value: item.description,
          onChange: _this.props.onColumnDescriptionChange.bind(_this, index)
        }), 'no_image' != columns_block_style && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaPlaceholder"], {
          labels: {
            title: __('Column %s: Image', 'p4ge').replace('%s', index + 1)
          },
          icon: "format-image",
          onSelect: _this.props.onSelectImage.bind(_this, index),
          onSelectURL: _this.props.onSelectURL.bind(_this, index),
          onError: _this.props.onUploadError,
          accept: "image/*",
          allowedTypes: ["image"]
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
          label: __('Column %s: Button/CtA Link', 'p4ge').replace('%s', index + 1),
          placeholder: __('Enter link for column %s', 'p4ge').replace('%s', index + 1),
          value: item.cta_link,
          onChange: _this.props.onCTALinkChange.bind(_this, index)
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
          label: __('Open link in new tab', 'p4ge'),
          help: __('Open Column %s: Button/CtA Link in a new tab', 'p4ge').replace('%s', index + 1),
          value: item.link_new_tab,
          checked: item.link_new_tab,
          onChange: _this.props.onLinkNewTabChange.bind(_this, index)
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
          label: __('Column %s: Button/CtA Text', 'p4ge').replace('%s', index + 1),
          placeholder: __('Enter text of button/link for column %s', 'p4ge').replace('%s', index + 1),
          value: item.cta_text,
          onChange: _this.props.onCTAButtonTextChange.bind(_this, index)
        }));
      }), columns.length < 4 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
        text: __('Add Column', 'p4ge')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        className: "wp-block-p4ge-blocks-columns__addIcon",
        onClick: this.props.addColumn
      }, __('Add Column', 'p4ge'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Dashicon"], {
        icon: "plus",
        size: 12
      }))), columns.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
        text: __('Remove Column', 'p4ge')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("button", {
        className: "wp-block-p4ge-blocks-columns__removeIcon",
        onClick: this.props.removeColumn
      }, __('Remove Column', 'p4ge'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Dashicon"], {
        icon: "minus",
        size: 12
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_10__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ServerSideRender"], {
        block: 'planet4-blocks/columns',
        attributes: {
          columns_block_style: this.props.columns_block_style,
          columns_title: this.props.columns_title,
          columns_description: this.props.columns_description,
          columns: this.props.columns
        }
      })));
    }
  }]);

  return Columns;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Columns/ColumnsBlock.js":
/*!*********************************************************!*\
  !*** ./react-blocks/src/blocks/Columns/ColumnsBlock.js ***!
  \*********************************************************/
/*! exports provided: ColumnsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsBlock", function() { return ColumnsBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Columns_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Columns.js */ "./react-blocks/src/blocks/Columns/Columns.js");
/* harmony import */ var _ColumnsConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColumnsConfig */ "./react-blocks/src/blocks/Columns/ColumnsConfig.js");
/* harmony import */ var _ColumnsConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ColumnsConfig__WEBPACK_IMPORTED_MODULE_5__);






var __ = wp.i18n.__;
var ColumnsBlock = function ColumnsBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ColumnsBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  registerBlockType(_ColumnsConfig__WEBPACK_IMPORTED_MODULE_5___default.a.gutenbergTag, {
    title: __('Columns', 'p4ge'),
    icon: "grid-view",
    category: 'planet4-blocks',

    /**
     * Transforms old 'shortcake' shortcode to new gutenberg block.
     *
     * old block-shortcode:
     * [shortcake_columns columns_block_style="image" columns_title="Lorem Ipsum" columns_description="Lorem Ipsum"
     *                    title_1="col1" description_1="col1 body" attachment_1="5096" link_1="cta link1" link_new_tab_1="true" cta_text_1="cta text"
     *                    title_2="col2" description_2="col2 body" attachment_2="5186" link_2="cta link2" link_new_tab_2="true" cta_text_2="cta text 2" link_new_tab_3="false" link_new_tab_4="false" /]
     * /]
     *
     * new block-gutenberg:
     * <!-- wp:planet4-blocks/columns {"columns_block_style":"image","columns_title":"Lorem Ipsum","columns_description":"Lorem Ipsum",
     *      "columns":[{"title":"col1","description":"col1 body","attachment":5096,"cta_link":"cta link1","cta_text":"cta text 1","link_new_tab":true},{"title":"col2","description":"col2 body","attachment":5186,"cta_link":"cta link2","cta_text":"cta text 2","link_new_tab":true}]} /-->
     *
     */
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: _ColumnsConfig__WEBPACK_IMPORTED_MODULE_5___default.a.shortCodeTag,
        attributes: _ColumnsConfig__WEBPACK_IMPORTED_MODULE_5___default.a.shortCodeAttributes
      }]
    },
    attributes: _ColumnsConfig__WEBPACK_IMPORTED_MODULE_5___default.a.gutenbergAttributes,
    edit: function edit(_ref) {
      var isSelected = _ref.isSelected,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      function onTitleChange(value) {
        setAttributes({
          columns_title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          columns_description: value
        });
      }

      function onSelectImage(index, value) {
        var columns = attributes.columns;
        var id = value.id;

        var new_columns = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(columns);

        new_columns[index]['attachment'] = id;
        setAttributes({
          columns: new_columns
        });
      }

      function onSelectURL(index, value) {
        var columns = attributes.columns;
        var _ref2 = null,
            id = _ref2.id;

        var new_columns = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(columns);

        new_columns[index]['attachment'] = id;
        setAttributes({
          columns: new_columns
        });
      }

      function onUploadError(_ref3) {
        var message = _ref3.message;
        console.log(message);
      }

      function onSelectedLayoutChange(value) {
        setAttributes({
          columns_block_style: value
        });

        if ('no_image' == value) {
          var columns = attributes.columns;

          if (0 < columns.length) {
            var new_columns = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(columns);

            var i;

            for (i = 0; i < columns.length; i++) {
              new_columns[i]['attachment'] = '';
            }

            setAttributes({
              columns: new_columns
            });
          }
        }
      }

      function addColumn() {
        var columns = attributes.columns;

        if (columns.length < 4) {
          setAttributes({
            columns: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(columns), [{
              title: '',
              description: '',
              attachment: '',
              cta_link: '',
              cta_text: '',
              link_new_tab: ''
            }])
          });
        }
      }

      function removeColumn() {
        setAttributes({
          columns: attributes.columns.slice(0, -1)
        });
      }

      function onColumnHeaderChange(index, value) {
        var columns = JSON.parse(JSON.stringify(attributes.columns));
        columns[index].title = value;
        setAttributes({
          columns: columns
        });
      }

      function onColumnDescriptionChange(index, value) {
        var columns = JSON.parse(JSON.stringify(attributes.columns));
        columns[index].description = value;
        setAttributes({
          columns: columns
        });
      }

      function onCTALinkChange(index, value) {
        var columns = JSON.parse(JSON.stringify(attributes.columns));
        columns[index].cta_link = value;
        setAttributes({
          columns: columns
        });
      }

      function onLinkNewTabChange(index, value) {
        var columns = JSON.parse(JSON.stringify(attributes.columns));
        columns[index].link_new_tab = value;
        setAttributes({
          columns: columns
        });
      }

      function onCTAButtonTextChange(index, value) {
        var columns = JSON.parse(JSON.stringify(attributes.columns));
        columns[index].cta_text = value;
        setAttributes({
          columns: columns
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_Columns_js__WEBPACK_IMPORTED_MODULE_4__["Columns"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onSelectedLayoutChange: onSelectedLayoutChange,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onSelectImage: onSelectImage,
        onSelectURL: onSelectURL,
        addColumn: addColumn,
        removeColumn: removeColumn,
        onUploadError: onUploadError,
        onColumnHeaderChange: onColumnHeaderChange,
        onColumnDescriptionChange: onColumnDescriptionChange,
        onCTALinkChange: onCTALinkChange,
        onLinkNewTabChange: onLinkNewTabChange,
        onCTAButtonTextChange: onCTAButtonTextChange
      }));
    },
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Columns/ColumnsConfig.js":
/*!**********************************************************!*\
  !*** ./react-blocks/src/blocks/Columns/ColumnsConfig.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var gutenbergTag = 'planet4-blocks/columns';
var shortCodeTag = 'shortcake_columns';
var shortCodeAttributes = {
  columns_block_style: {
    type: 'string',
    shortcode: function shortcode(_ref) {
      var _ref$named$columns_bl = _ref.named.columns_block_style,
          columns_block_style = _ref$named$columns_bl === void 0 ? '' : _ref$named$columns_bl;
      return columns_block_style;
    }
  },
  columns_title: {
    type: 'string',
    shortcode: function shortcode(_ref2) {
      var _ref2$named$columns_t = _ref2.named.columns_title,
          columns_title = _ref2$named$columns_t === void 0 ? '' : _ref2$named$columns_t;
      return columns_title;
    }
  },
  columns_description: {
    type: 'string',
    shortcode: function shortcode(_ref3) {
      var _ref3$named$columns_d = _ref3.named.columns_description,
          columns_description = _ref3$named$columns_d === void 0 ? '' : _ref3$named$columns_d;
      return columns_description;
    }
  },
  columns: {
    type: 'array',
    shortcode: function shortcode(attributes) {
      var columns = [];

      if (attributes.named.title_1) {
        var column = {
          title: attributes.named.title_1,
          description: attributes.named.description_1 || '',
          cta_link: attributes.named.link_1 || '',
          cta_text: attributes.named.cta_text_1 || '',
          link_new_tab: attributes.named.link_new_tab_1 || false
        };
        if (attributes.named.columns_block_style != 'no_image') column.attachment = attributes.named.attachment_1 || false;
        columns.push(Object.assign({}, column));

        if (attributes.named.title_2) {
          var _column = {
            title: attributes.named.title_2,
            description: attributes.named.description_2 || '',
            cta_link: attributes.named.link_2 || '',
            cta_text: attributes.named.cta_text_2 || '',
            link_new_tab: attributes.named.link_new_tab_2 || false
          };
          if (attributes.named.columns_block_style != 'no_image') _column.attachment = attributes.named.attachment_2 || false;
          columns.push(Object.assign({}, _column));

          if (attributes.named.title_3) {
            var _column2 = {
              title: attributes.named.title_3,
              description: attributes.named.description_3 || '',
              cta_link: attributes.named.link_3 || '',
              cta_text: attributes.named.cta_text_3 || '',
              link_new_tab: attributes.named.link_new_tab_3 || false
            };
            if (attributes.named.columns_block_style != 'no_image') _column2.attachment = attributes.named.attachment_3 || false;
            columns.push(Object.assign({}, _column2));

            if (attributes.named.title_4) {
              var _column3 = {
                title: attributes.named.title_4,
                description: attributes.named.description_4 || '',
                cta_link: attributes.named.link_4 || '',
                cta_text: attributes.named.cta_text_4 || '',
                link_new_tab: attributes.named.link_new_tab_4 || false
              };
              if (attributes.named.columns_block_style != 'no_image') _column3.attachment = attributes.named.attachment_4 || false;
              columns.push(Object.assign({}, _column3));
            }
          }
        }
      }

      return columns;
    }
  }
};
var gutenbergAttributes = {
  columns_block_style: {
    type: 'string'
  },
  columns_title: {
    type: 'string'
  },
  columns_description: {
    type: 'string'
  },
  columns: {
    type: "array",
    default: [],
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    attachment: {
      type: 'string'
    },
    cta_link: {
      type: 'string'
    },
    link_new_tab: {
      type: 'string'
    },
    cta_text: {
      type: 'string'
    }
  }
};
exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;

/***/ }),

/***/ "./react-blocks/src/blocks/Cookies/Cookies.js":
/*!****************************************************!*\
  !*** ./react-blocks/src/blocks/Cookies/Cookies.js ***!
  \****************************************************/
/*! exports provided: Cookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cookies", function() { return Cookies; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);









var Cookies =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Cookies, _Component);

  function Cookies(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cookies);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Cookies).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cookies, [{
    key: "renderEdit",
    value: function renderEdit() {
      var __ = wp.i18n.__;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", null, __('Cookies options', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", null, __('Display opt-in options for cookies', 'p4ge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: "Title",
        placeholder: "Enter title",
        value: this.props.title,
        onChange: this.props.onTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: "Description",
        placeholder: "Enter description",
        value: this.props.description,
        onChange: this.props.onDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: "Necessary Cookies Name",
        placeholder: "Enter cookies name",
        value: this.props.necessary_cookies_name,
        onChange: this.props.onNecessaryCookiesNameChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: "Necessary Cookies Description",
        placeholder: "Enter cookies description",
        value: this.props.necessary_cookies_description,
        onChange: this.props.onNecessaryCookiesDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: "All Cookies Name",
        placeholder: "Enter cookies name",
        value: this.props.all_cookies_name,
        onChange: this.props.onAllCookiesNameChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: "All Cookies Description",
        placeholder: "Enter cookies description",
        value: this.props.all_cookies_description,
        onChange: this.props.onAllCookiesDescriptionChange
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ServerSideRender"], {
        block: 'planet4-blocks/cookies',
        attributes: {
          title: this.props.title,
          description: this.props.description,
          necessary_cookies_name: this.props.necessary_cookies_name,
          necessary_cookies_description: this.props.necessary_cookies_description,
          all_cookies_name: this.props.all_cookies_name,
          all_cookies_description: this.props.all_cookies_description
        },
        urlQueryArgs: {
          post_id: document.querySelector('#post_ID').value
        }
      })));
    }
  }]);

  return Cookies;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Cookies/CookiesBlock.js":
/*!*********************************************************!*\
  !*** ./react-blocks/src/blocks/Cookies/CookiesBlock.js ***!
  \*********************************************************/
/*! exports provided: CookiesBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesBlock", function() { return CookiesBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cookies_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cookies.js */ "./react-blocks/src/blocks/Cookies/Cookies.js");




var CookiesBlock = function CookiesBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CookiesBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  registerBlockType('planet4-blocks/cookies', {
    title: 'Cookies',
    icon: 'visibility',
    category: 'planet4-blocks',
    supports: {
      multiple: false // Use the block just once per post.

    },
    // Transform the shortcode into a Gutenberg block
    // this is used when a user clicks "Convert to blocks"
    // on the "Classic Editor" block
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_cookies',
        attributes: {
          title: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.title;
            }
          },
          description: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.description;
            }
          },
          necessary_cookies_name: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.necessary_cookies_name;
            }
          },
          necessary_cookies_description: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.necessary_cookies_description;
            }
          },
          all_cookies_name: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.all_cookies_name;
            }
          },
          all_cookies_description: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.all_cookies_description;
            }
          }
        }
      }]
    },
    attributes: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      necessary_cookies_name: {
        type: 'string'
      },
      necessary_cookies_description: {
        type: 'string'
      },
      all_cookies_name: {
        type: 'string'
      },
      all_cookies_description: {
        type: 'string'
      }
    },
    edit: function edit(_ref) {
      var isSelected = _ref.isSelected,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      function onTitleChange(value) {
        setAttributes({
          title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          description: value
        });
      }

      function onNecessaryCookiesNameChange(value) {
        setAttributes({
          necessary_cookies_name: value
        });
      }

      function onNecessaryCookiesDescriptionChange(value) {
        setAttributes({
          necessary_cookies_description: value
        });
      }

      function onAllCookiesNameChange(value) {
        setAttributes({
          all_cookies_name: value
        });
      }

      function onAllCookiesDescriptionChange(value) {
        setAttributes({
          all_cookies_description: value
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Cookies_js__WEBPACK_IMPORTED_MODULE_3__["Cookies"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onNecessaryCookiesNameChange: onNecessaryCookiesNameChange,
        onNecessaryCookiesDescriptionChange: onNecessaryCookiesDescriptionChange,
        onAllCookiesNameChange: onAllCookiesNameChange,
        onAllCookiesDescriptionChange: onAllCookiesDescriptionChange
      }));
    },
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Counter/Counter.js":
/*!****************************************************!*\
  !*** ./react-blocks/src/blocks/Counter/Counter.js ***!
  \****************************************************/
/*! exports provided: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/LayoutSelector/LayoutSelector */ "./react-blocks/src/components/LayoutSelector/LayoutSelector.js");
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");










var Counter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Counter, _Component);

  function Counter(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Counter);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Counter).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Counter, [{
    key: "renderEdit",
    value: function renderEdit() {
      var __ = wp.i18n.__;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, __('What style of counter do you need?', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_8__["LayoutSelector"], {
        selectedOption: this.props.style,
        onSelectedLayoutChange: this.props.onSelectedLayoutChange,
        options: [{
          label: __('Text Only', 'p4ge'),
          image: window.p4ge_vars.home + 'images/counter_th_text.png',
          value: 'plain',
          help: __('Text to describe your progress', 'p4ge')
        }, {
          label: __('Progress Bar', 'p4ge'),
          image: window.p4ge_vars.home + 'images/counter_th_bar.png',
          value: 'bar',
          help: __('A bar to visualise the progress.', 'p4ge')
        }, {
          label: __('Progress Dial', 'p4ge'),
          image: window.p4ge_vars.home + 'images/counter_th_arc.png',
          value: 'arc',
          help: __('A dial to visualise the progress.', 'p4ge')
        }, {
          label: __('Progress bar inside EN Form', 'p4ge'),
          image: window.p4ge_vars.home + 'images/counter_th_bar.png',
          value: 'en-forms-bar',
          help: __('A bar inside an En Form. Select this only if you are adding an EN Form to the same page.', 'p4ge')
        }]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Title', 'p4ge'),
        placeholder: __('Enter title', 'p4ge'),
        value: this.props.title,
        onChange: this.props.onTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        placeholder: __('Enter description', 'p4ge'),
        value: this.props.description,
        onChange: this.props.onDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Completed', 'p4ge'),
        placeholder: __('e.g. number of signatures', 'p4ge'),
        type: "number",
        value: this.props.completed,
        onChange: this.props.onCompletedChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Completed API URL', 'p4ge'),
        placeholder: __('API URL of completed number. If filled in will overide the \'Completed\' field', 'p4ge'),
        value: this.props.completed_api,
        onChange: this.props.onCompletedAPIChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Target', 'p4ge'),
        placeholder: __('e.g. target no. of signatures', 'p4ge'),
        type: "number",
        value: this.props.target,
        onChange: this.props.onTargetChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
        label: __('Text', 'p4ge'),
        placeholder: __('e.g. "signatures collected of %target%"', 'p4ge'),
        value: this.props.text,
        onChange: this.props.onTextChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        className: "FieldHelp"
      }, "These placeholders can be used: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("code", null, "%completed%"), ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("code", null, "%target%"), ", ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("code", null, "%remaining%"), " ")));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_9__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ServerSideRender"], {
        block: 'planet4-blocks/counter',
        attributes: {
          title: this.props.title,
          description: this.props.description,
          style: this.props.style,
          completed: this.props.completed,
          completed_api: this.props.completed_api,
          target: this.props.target,
          text: this.props.text
        }
      })));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
;

/***/ }),

/***/ "./react-blocks/src/blocks/Counter/CounterBlock.js":
/*!*********************************************************!*\
  !*** ./react-blocks/src/blocks/Counter/CounterBlock.js ***!
  \*********************************************************/
/*! exports provided: CounterBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterBlock", function() { return CounterBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Counter.js */ "./react-blocks/src/blocks/Counter/Counter.js");




var CounterBlock = function CounterBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CounterBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var withSelect = wp.data.withSelect;
  registerBlockType('planet4-blocks/counter', {
    title: 'Counter',
    icon: 'dashboard',
    category: 'planet4-blocks',
    // Transform the shortcode into a Gutenberg block
    // this is used when a user clicks "Convert to blocks"
    // on the "Classic Editor" block
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_counter',
        attributes: {
          style: {
            type: 'string',
            shortcode: function shortcode(_ref) {
              var _ref$named$style = _ref.named.style,
                  style = _ref$named$style === void 0 ? 'plain' : _ref$named$style;
              return style;
            }
          },
          title: {
            type: 'string',
            shortcode: function shortcode(_ref2) {
              var _ref2$named$title = _ref2.named.title,
                  title = _ref2$named$title === void 0 ? '' : _ref2$named$title;
              return title;
            }
          },
          description: {
            type: 'string',
            shortcode: function shortcode(_ref3) {
              var _ref3$named$descripti = _ref3.named.description,
                  description = _ref3$named$descripti === void 0 ? '' : _ref3$named$descripti;
              return description;
            }
          },
          completed: {
            type: 'integer',
            shortcode: function shortcode(_ref4) {
              var _ref4$named$completed = _ref4.named.completed,
                  completed = _ref4$named$completed === void 0 ? 0 : _ref4$named$completed;
              return completed;
            }
          },
          completed_api: {
            type: 'string',
            shortcode: function shortcode(_ref5) {
              var _ref5$named$completed = _ref5.named.completed_api,
                  completed_api = _ref5$named$completed === void 0 ? '' : _ref5$named$completed;
              return completed_api;
            }
          },
          target: {
            type: 'integer',
            shortcode: function shortcode(_ref6) {
              var _ref6$named$target = _ref6.named.target,
                  target = _ref6$named$target === void 0 ? 0 : _ref6$named$target;
              return target;
            }
          },
          text: {
            type: 'string',
            shortcode: function shortcode(_ref7) {
              var _ref7$named$text = _ref7.named.text,
                  text = _ref7$named$text === void 0 ? '' : _ref7$named$text;
              return text;
            }
          }
        }
      }]
    },
    attributes: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      style: {
        type: 'string',
        default: 'plain'
      },
      completed: {
        type: 'integer'
      },
      completed_api: {
        type: 'string'
      },
      target: {
        type: 'integer'
      },
      text: {
        type: 'string'
      }
    },
    // withSelect is a "Higher Order Component", it works as
    // a Decorator, it will provide some basic API functionality
    // through `select`.
    edit: function edit(_ref8) {
      var isSelected = _ref8.isSelected,
          attributes = _ref8.attributes,
          setAttributes = _ref8.setAttributes;

      function onTitleChange(value) {
        setAttributes({
          title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          description: value
        });
      }

      function onSelectedLayoutChange(value) {
        setAttributes({
          style: value
        });
      }

      function onCompletedChange(value) {
        setAttributes({
          completed: Number(value)
        });
      }

      function onCompletedAPIChange(value) {
        setAttributes({
          completed_api: value
        });
      }

      function onTargetChange(value) {
        setAttributes({
          target: Number(value)
        });
      }

      function onTextChange(value) {
        setAttributes({
          text: value
        });
      } // We pass down all the attributes to Covers as props using
      // the spread operator. Then we selectively add more
      // props.


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Counter_js__WEBPACK_IMPORTED_MODULE_3__["Counter"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onSelectedLayoutChange: onSelectedLayoutChange,
        onCompletedChange: onCompletedChange,
        onCompletedAPIChange: onCompletedAPIChange,
        onTargetChange: onTargetChange,
        onTextChange: onTextChange
      }));
    },
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Covers/Covers.js":
/*!**************************************************!*\
  !*** ./react-blocks/src/blocks/Covers/Covers.js ***!
  \**************************************************/
/*! exports provided: Covers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covers", function() { return Covers; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/LayoutSelector/LayoutSelector */ "./react-blocks/src/components/LayoutSelector/LayoutSelector.js");
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");










var _wp = wp,
    apiFetch = _wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var Covers =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Covers, _Component);

  function Covers(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Covers);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Covers).call(this, props)); // Populate tag tokens for saved tags.

    var tagTokens = props.tagsList.filter(function (tag) {
      return props.tags.includes(tag.id);
    }).map(function (tag) {
      return tag.name;
    }); // Populate post types tokens for saved post types.

    var postTypeTokens = props.postTypesList.filter(function (post_type) {
      return props.post_types.includes(post_type.id);
    }).map(function (post_type) {
      return post_type.name;
    }); // Populate component state with block's saved tags tokens and post type tokens

    _this.state = {
      tagTokens: tagTokens,
      postTypeTokens: postTypeTokens,
      selectedPosts: []
    };

    _this.populatePostsToken();

    _this.searchTimeout = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Covers, [{
    key: "populatePostsToken",

    /**
     * Set component's state for existing blocks.
     */
    value: function populatePostsToken() {
      var _this2 = this;

      if (this.props.posts.length > 0) {
        var post_type = this.props.cover_type === '1' ? 'pages' : 'posts';
        apiFetch({
          path: addQueryArgs('/wp/v2/' + post_type, {
            per_page: 50,
            page: 1,
            include: this.props.posts
          })
        }).then(function (posts) {
          var postsTokens = posts.map(function (post) {
            return post.title.rendered;
          });
          var postsSuggestions = posts.map(function (post) {
            return post.title.rendered;
          });

          _this2.setState({
            postsTokens: postsTokens,
            postsList: posts,
            postsSuggestions: postsSuggestions,
            selectedPosts: posts
          });
        });
      } else {
        this.setState({
          postsTokens: [],
          postsList: [],
          postsSuggestions: [],
          selectedPosts: []
        });
      }
    }
    /**
     * Search posts using wp api.
     *
     * @param tokens
     */

  }, {
    key: "searchPosts",
    value: function searchPosts(tokens) {
      var _this3 = this;

      var queryArgs;

      if ('1' === this.props.cover_type) {
        queryArgs = {
          path: addQueryArgs('/wp/v2/pages', {
            per_page: -1,
            post_type: 'page',
            post_parent: window.p4ge_vars.planet4_options.act_page,
            search: tokens,
            orderby: 'title',
            post_status: 'publish'
          })
        };
      } else {
        queryArgs = {
          path: addQueryArgs('/wp/v2/posts', {
            per_page: 50,
            page: 1,
            search: tokens,
            orderby: 'title',
            post_status: 'publish'
          })
        };
      }

      apiFetch(queryArgs).then(function (posts) {
        var postsSuggestions = posts.map(function (post) {
          return post.title.rendered;
        });

        _this3.setState({
          postsSuggestions: postsSuggestions,
          postsList: posts
        });
      });
    }
  }, {
    key: "onPostsSearch",
    value: function onPostsSearch(token) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(function () {
        this.searchPosts(token);
      }.bind(this), 500);
    }
  }, {
    key: "onSelectedTagsChange",
    value: function onSelectedTagsChange(tokens) {
      var _this4 = this;

      var tagIds = tokens.map(function (token) {
        return _this4.props.tagsList.filter(function (tag) {
          return tag.name === token;
        })[0].id;
      });
      this.props.onSelectedTagsChange(tagIds);
      this.setState({
        tagTokens: tokens
      });
    }
  }, {
    key: "onSelectedPostTypesChange",
    value: function onSelectedPostTypesChange(tokens) {
      var _this5 = this;

      var postTypeIds = tokens.map(function (token) {
        return _this5.props.postTypesList.filter(function (postType) {
          return postType.name === token;
        })[0].id;
      });
      this.props.onSelectedPostTypesChange(postTypeIds);
      this.setState({
        postTypeTokens: tokens
      });
    }
  }, {
    key: "onSelectedPostsChange",
    value: function onSelectedPostsChange(tokens) {
      var _this6 = this;

      // Array to hold references to selected posts objects.
      var currentSelectedPosts = [];
      tokens.forEach(function (token) {
        var f = _this6.state.postsList.filter(function (post) {
          return post.title.rendered === token;
        });

        if (f.length > 0) {
          currentSelectedPosts.push(f[0]);
        }

        f = _this6.state.selectedPosts.filter(function (post) {
          return post.title.rendered === token;
        });

        if (f.length > 0) {
          currentSelectedPosts.push(f[0]);
        }
      });
      var postIds = currentSelectedPosts.map(function (post) {
        return post.id;
      });
      this.props.onSelectedPostsChange(postIds);
      this.setState({
        postsTokens: tokens,
        selectedPosts: currentSelectedPosts
      });
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var _this7 = this;

      var __ = wp.i18n.__;
      var tagSuggestions = this.props.tagsList.map(function (tag) {
        return tag.name;
      });
      var postTypeSuggestions = this.props.postTypesList.map(function (postType) {
        return postType.name;
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, __('What style of cover do you need?', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_8__["LayoutSelector"], {
        selectedOption: this.props.cover_type,
        onSelectedLayoutChange: this.props.onSelectedLayoutChange,
        options: [{
          label: __('Take Action Covers', 'p4ge'),
          image: window.p4ge_vars.home + 'images/take_action_covers.png',
          value: '1',
          help: __('Take action covers pull the featured image, tags, have a 25 character excerpt and have a call to action button')
        }, {
          label: __('Campaign Covers', 'p4ge'),
          image: window.p4ge_vars.home + 'images/campaign_covers.png',
          value: '2',
          help: __('Campaign covers pull the associated image and hashtag from the system tag definitions.')
        }, {
          label: __('Content Covers', 'p4ge'),
          image: window.p4ge_vars.home + 'images/content_covers.png',
          value: '3',
          help: __('Content covers pull the image from the post.')
        }]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: "Rows to display",
        value: this.props.covers_view,
        options: [{
          label: '1 Row',
          value: '1'
        }, {
          label: '2 Rows',
          value: '2'
        }, {
          label: 'All rows',
          value: '3'
        }],
        onChange: this.props.onRowsChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: "Title",
        placeholder: "Enter title",
        value: this.props.title,
        onChange: this.props.onTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
        label: "Description",
        placeholder: "Enter description",
        value: this.props.description,
        onChange: this.props.onDescriptionChange
      })), this.props.posts !== 'undefined' && this.props.posts.length === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["FormTokenField"], {
        value: this.state.tagTokens,
        suggestions: tagSuggestions,
        label: "Select Tags",
        onChange: function onChange(tokens) {
          return _this7.onSelectedTagsChange(tokens);
        },
        placeholder: "Select Tags"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", {
        class: "FieldHelp"
      }, "Associate this block with Actions that have specific Tags")) : null, this.props.cover_type === '3' && this.props.posts.length === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["FormTokenField"], {
        value: this.state.postTypeTokens,
        suggestions: postTypeSuggestions,
        label: "Post Types",
        onChange: function onChange(tokens) {
          return _this7.onSelectedPostTypesChange(tokens);
        },
        placeholder: "Select Tags"
      }) : null, (this.props.cover_type === '1' || this.props.cover_type === '3') && this.props.tags.length === 0 && this.props.post_types.length === 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("label", null, "Manual override"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["FormTokenField"], {
        value: this.state.postsTokens,
        suggestions: this.state.postsSuggestions,
        label: "CAUTION: Adding covers manually will override the automatic functionality.",
        onChange: function onChange(tokens) {
          return _this7.onSelectedPostsChange(tokens);
        },
        onInputChange: function onInputChange(token) {
          return _this7.onPostsSearch(token);
        },
        placeholder: "Select Tags"
      })) : null);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_9__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ServerSideRender"], {
        block: 'planet4-blocks/covers',
        attributes: {
          cover_type: this.props.cover_type,
          covers_view: this.props.covers_view,
          tags: this.props.tags,
          post_types: this.props.post_types,
          posts: this.props.posts,
          title: this.props.title,
          description: this.props.description
        }
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // Post types should be available for cover_type 3
      // If cover_type is not 3, reset post types tokens.
      if ('1' === props.cover_type || '2' === props.cover_type) {
        state.postTypeTokens = [];
      } // If posts attribute was reset, reset also the posts tokens.


      if (0 === props.posts.length) {
        state.postsTokens = [];
      }

      return state;
    }
  }]);

  return Covers;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
;

/***/ }),

/***/ "./react-blocks/src/blocks/Covers/CoversBlock.js":
/*!*******************************************************!*\
  !*** ./react-blocks/src/blocks/Covers/CoversBlock.js ***!
  \*******************************************************/
/*! exports provided: CoversBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoversBlock", function() { return CoversBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CoversIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoversIcon.js */ "./react-blocks/src/blocks/Covers/CoversIcon.js");
/* harmony import */ var _Covers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Covers.js */ "./react-blocks/src/blocks/Covers/Covers.js");
/* harmony import */ var _CoversConfig_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CoversConfig.js */ "./react-blocks/src/blocks/Covers/CoversConfig.js");
/* harmony import */ var _CoversConfig_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CoversConfig_js__WEBPACK_IMPORTED_MODULE_5__);






var CoversBlock = function CoversBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CoversBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var withSelect = wp.data.withSelect;
  registerBlockType(_CoversConfig_js__WEBPACK_IMPORTED_MODULE_5___default.a.gutenbergTag, {
    title: 'Covers',
    icon: _CoversIcon_js__WEBPACK_IMPORTED_MODULE_3__["CoversIcon"],
    category: 'planet4-blocks',
    // Transform the shortcode into a Gutenberg block
    // this is used when a user clicks "Convert to blocks"
    // on the "Classic Editor" block
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: _CoversConfig_js__WEBPACK_IMPORTED_MODULE_5___default.a.shortCodeTag,
        attributes: _CoversConfig_js__WEBPACK_IMPORTED_MODULE_5___default.a.shortCodeAttributes
      }]
    },
    // This attributes definition mimics the one in the PHP side.
    attributes: _CoversConfig_js__WEBPACK_IMPORTED_MODULE_5___default.a.gutenbergAttributes,
    // withSelect is a "Higher Order Component", it works as
    // a Decorator, it will provide some basic API functionality
    // through `select`.
    edit: withSelect(function (select) {
      var tagsTaxonomy = 'post_tag';
      var postTypesTaxonomy = 'p4-page-type';
      var args = {
        hide_empty: false,
        per_page: -1
      };

      var _select = select('core'),
          getEntityRecords = _select.getEntityRecords; // We should probably wrap all these in a single call,
      // or maybe use our own way of retrieving data from the
      // API, I don't know how this scales.


      var tagsList = getEntityRecords('taxonomy', tagsTaxonomy, args);
      var postTypesList = getEntityRecords('taxonomy', postTypesTaxonomy);
      return {
        postTypesList: postTypesList,
        tagsList: tagsList
      };
    })(function (_ref) {
      var postTypesList = _ref.postTypesList,
          tagsList = _ref.tagsList,
          isSelected = _ref.isSelected,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      if (!tagsList || !postTypesList) {
        return "Populating block's fields...";
      } // TO-DO: Check for posts types and posts too...


      if (!tagsList && !tagsList.length === 0) {
        return "No tags...";
      } // These methods are passed down to the
      // Covers component, they update the corresponding attribute.


      function onRowsChange(value) {
        setAttributes({
          covers_view: value
        });
      }

      function onTitleChange(value) {
        setAttributes({
          title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          description: value
        });
      }

      function onSelectedTagsChange(tagIds) {
        setAttributes({
          tags: tagIds
        });
      }

      function onSelectedPostsChange(value) {
        setAttributes({
          posts: value
        });
      }

      function onSelectedPostTypesChange(postTypeIds) {
        setAttributes({
          post_types: postTypeIds
        });
      }

      function onSelectedLayoutChange(value) {
        // Post types are available only on cover_type 3, so we reset the post_types attribute in the other 2 cases.
        if ('1' === value) {
          setAttributes({
            post_types: []
          });
        }

        if ('2' === value) {
          setAttributes({
            post_types: []
          });
        } // Reset posts attribute when changing layout also.


        setAttributes({
          cover_type: value,
          posts: []
        });
      } // We pass down all the attributes to Covers as props using
      // the spread operator. Then we selectively add more
      // props.


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Covers_js__WEBPACK_IMPORTED_MODULE_4__["Covers"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        tagsList: tagsList,
        postTypesList: postTypesList,
        onSelectedTagsChange: onSelectedTagsChange,
        onSelectedLayoutChange: onSelectedLayoutChange,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onSelectedPostsChange: onSelectedPostsChange,
        onSelectedPostTypesChange: onSelectedPostTypesChange,
        onRowsChange: onRowsChange
      }));
    }),
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Covers/CoversConfig.js":
/*!********************************************************!*\
  !*** ./react-blocks/src/blocks/Covers/CoversConfig.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var gutenbergTag = 'planet4-blocks/covers';
var shortCodeTag = 'shortcake_newcovers';
var shortCodeAttributes = {
  cover_type: {
    type: 'integer',
    // This `shortcode` definition will be used as a callback,
    // it is a function which expects an object with at least
    // a `named` key with `cover_type` property whose default value is 1.
    // See: https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6
    shortcode: function shortcode(_ref) {
      var _ref$named$cover_type = _ref.named.cover_type,
          cover_type = _ref$named$cover_type === void 0 ? '1' : _ref$named$cover_type;
      return cover_type;
    }
  },
  title: {
    type: 'string',
    shortcode: function shortcode(_ref2) {
      var _ref2$named$title = _ref2.named.title,
          title = _ref2$named$title === void 0 ? null : _ref2$named$title;
      return title;
    }
  },
  description: {
    type: 'string',
    shortcode: function shortcode(_ref3) {
      var _ref3$named$descripti = _ref3.named.description,
          description = _ref3$named$descripti === void 0 ? null : _ref3$named$descripti;
      return description;
    }
  },
  covers_view: {
    type: 'string',
    shortcode: function shortcode(_ref4) {
      var _ref4$named$covers_vi = _ref4.named.covers_view,
          covers_view = _ref4$named$covers_vi === void 0 ? null : _ref4$named$covers_vi;
      return covers_view;
    }
  },
  tags: {
    type: 'array',
    shortcode: function shortcode(_ref5) {
      var _ref5$named$tags = _ref5.named.tags,
          tags = _ref5$named$tags === void 0 ? null : _ref5$named$tags;
      return tags ? tags.split(',') : null;
    }
  },
  post_types: {
    type: 'array',
    shortcode: function shortcode(_ref6) {
      var _ref6$named$post_type = _ref6.named.post_types,
          post_types = _ref6$named$post_type === void 0 ? null : _ref6$named$post_type;
      return post_types ? post_types.split(',') : null;
    }
  },
  posts: {
    type: 'array',
    shortcode: function shortcode(_ref7) {
      var _ref7$named$posts = _ref7.named.posts,
          posts = _ref7$named$posts === void 0 ? null : _ref7$named$posts;
      return posts ? posts.split(',') : null;
    }
  }
};
var gutenbergAttributes = {
  title: {
    type: 'string'
  },
  description: {
    type: 'string'
  },
  tags: {
    type: 'array',
    default: []
  },
  posts: {
    type: 'array',
    default: []
  },
  post_types: {
    type: 'array',
    default: []
  },
  covers_view: {
    type: 'string',
    default: '1'
  },
  cover_type: {
    type: 'string'
  }
};
exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;

/***/ }),

/***/ "./react-blocks/src/blocks/Covers/CoversIcon.js":
/*!******************************************************!*\
  !*** ./react-blocks/src/blocks/Covers/CoversIcon.js ***!
  \******************************************************/
/*! exports provided: CoversIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoversIcon", function() { return CoversIcon; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var CoversIcon =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CoversIcon, _Component);

  function CoversIcon() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CoversIcon);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CoversIcon).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CoversIcon, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 66 82.5",
        "enable-background": "new 0 0 66 66"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M8.193,37.334l23.804-10.512v-8.007L6.099,30.093c-0.24,0.11-0.44,0.31-0.53,0.56c-0.1,0.24-0.09,0.52,0.01,0.76    L8.193,37.334z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M8.999,39.163l4.9,11.08c4.55-1.49,7.1,2.61,8.76,3.78c1.51-1.01,4.47-5.71,9.34-3.55v-21.47L8.999,39.163z     M21.059,42.853l-1,0.46c-0.5,0.23-1.1,0.02-1.33-0.49c-0.23-0.5-0.01-1.09,0.49-1.33l1-0.46c0.5-0.23,1.1-0.01,1.33,0.49    C21.779,42.033,21.559,42.623,21.059,42.853z M27.059,39.853l-1,0.46c-0.5,0.23-1.1,0.02-1.33-0.49c-0.23-0.5-0.01-1.09,0.49-1.33    l1-0.46c0.5-0.23,1.1-0.01,1.33,0.49C27.779,39.033,27.559,39.623,27.059,39.853z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M33.998,26.816l24.005,10.392l2.416-5.816c0.21-0.5-0.02-1.08-0.52-1.3L33.998,18.813V26.816z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M33.999,28.993v22.77c0.95,0.8,2.02,2.26,2.44,2.26c1.97-1.66,3.56-4.08,6.88-4.08c4.21,0,6.03,4.07,6.9,4.07    c0.1-0.087,0.722-0.298,1.25-1.09l5.77-13.87L33.999,28.993z M41.269,39.823c-0.23,0.5-0.83,0.72-1.33,0.49l-1-0.46    c-0.5-0.23-0.72-0.82-0.49-1.33c0.23-0.5,0.83-0.72,1.33-0.49l1,0.46C41.279,38.733,41.499,39.323,41.269,39.823z M47.269,42.823    c-0.23,0.5-0.83,0.72-1.33,0.49l-1-0.46c-0.5-0.23-0.72-0.82-0.49-1.33c0.23-0.5,0.82-0.72,1.33-0.49l1,0.46    C47.279,41.733,47.499,42.323,47.269,42.823z"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M37.999,2.983v5.63h-10v-5.63c0-1.1,0.9-2,2-2h6C37.099,0.983,37.999,1.883,37.999,2.983z"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M48.319,13.823c-0.38-1.86-2.03-3.21-3.93-3.21h-22.78c-1.9,0-3.55,1.35-3.92,3.21l-1.98,9.91   c5.27-2.31,11.32-4.94,17.29-7.54c1.02,0.45,9.84,4.29,17.29,7.54L48.319,13.823z M24.999,17.233h-2c-0.55,0-1-0.45-1-1s0.45-1,1-1   h2c0.55,0,1,0.45,1,1S25.549,17.233,24.999,17.233z M42.999,17.233h-2c-0.55,0-1-0.45-1-1s0.45-1,1-1h2c0.55,0,1,0.45,1,1   S43.549,17.233,42.999,17.233z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M64,62.982c-1.207,0-1.78-0.597-2.69-1.653c-2.737-3.176-5.671-3.178-8.41,0c-1.901,2.205-3.401,2.296-5.378,0   c-2.735-3.175-5.668-3.179-8.403,0c-1.938,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.668-3.178-8.404,0   c-1.939,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.667-3.178-8.402,0c-1.939,2.251-3.429,2.254-5.37,0   c-0.9-1.046-2.02-2.348-4.2-2.348c-0.552,0-1,0.448-1,1s0.448,1,1,1c1.204,0,1.776,0.597,2.684,1.652   c2.733,3.177,5.665,3.178,8.401,0c1.939-2.252,3.43-2.254,5.371,0c2.735,3.177,5.667,3.178,8.402,0   c1.939-2.252,3.432-2.254,5.373,0c2.734,3.176,5.667,3.179,8.402,0c1.938-2.252,3.43-2.254,5.372,0c2.736,3.176,5.67,3.178,8.409,0   c1.942-2.252,3.437-2.255,5.381,0c0.901,1.046,2.023,2.347,4.205,2.347c0.552,0,1-0.448,1-1C65,63.43,64.552,62.982,64,62.982z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("path", {
        d: "M64,55.982c-1.207,0-1.78-0.597-2.69-1.653c-2.737-3.176-5.671-3.178-8.41,0c-1.901,2.205-3.401,2.296-5.378,0   c-2.735-3.175-5.668-3.179-8.403,0c-1.938,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.668-3.178-8.404,0   c-1.939,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.667-3.178-8.402,0c-1.939,2.251-3.429,2.254-5.37,0   c-0.9-1.046-2.02-2.348-4.2-2.348c-0.552,0-1,0.448-1,1s0.448,1,1,1c1.204,0,1.776,0.597,2.684,1.652   c2.733,3.177,5.665,3.178,8.401,0c1.939-2.252,3.43-2.254,5.371,0c2.735,3.177,5.667,3.178,8.402,0   c1.939-2.252,3.432-2.254,5.373,0c2.734,3.176,5.667,3.179,8.402,0c1.938-2.252,3.43-2.254,5.372,0c2.736,3.176,5.67,3.178,8.409,0   c1.942-2.252,3.437-2.255,5.381,0c0.901,1.046,2.023,2.347,4.205,2.347c0.552,0,1-0.448,1-1S64.552,55.982,64,55.982z"
      })));
    }
  }]);

  return CoversIcon;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Gallery/Gallery.js":
/*!****************************************************!*\
  !*** ./react-blocks/src/blocks/Gallery/Gallery.js ***!
  \****************************************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/LayoutSelector/LayoutSelector */ "./react-blocks/src/components/LayoutSelector/LayoutSelector.js");
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");











var Gallery =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Gallery, _Component);

  function Gallery(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Gallery);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Gallery).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Gallery, [{
    key: "renderEdit",
    value: function renderEdit() {
      var _this = this;

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (0 < _this.props.image_data.length) {
          return _this.props.image_data.map(function (item, index) {
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
              src: item.url,
              onClick: openEvent,
              className: "gallery__imgs",
              key: index,
              width: "150 px",
              style: {
                padding: '10px 10px'
              }
            }));
          });
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "button-container"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            onClick: openEvent,
            className: "button"
          }, "+ ", __('Select Gallery Images', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, __('Select images in the order you want them to appear.', 'p4ge')));
        }
      };

      var __ = wp.i18n.__;
      var _this$props = this.props,
          gallery_block_style = _this$props.gallery_block_style,
          gallery_block_title = _this$props.gallery_block_title,
          gallery_block_description = _this$props.gallery_block_description,
          multiple_image = _this$props.multiple_image,
          image_data = _this$props.image_data;
      var dimensions = {
        width: 400,
        height: 100
      };
      var multiple_image_array = multiple_image ? multiple_image.split(',') : [];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, 0 < image_data.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], null, 0 < multiple_image_array.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
        onSelect: this.props.onSelectImage,
        allowedTypes: ["image"],
        value: multiple_image_array,
        type: "image",
        multiple: "true",
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
            className: "components-icon-button components-toolbar__control",
            label: __("Edit Images", "mytheme-blocks"),
            onClick: open,
            icon: "edit"
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
        className: "components-icon-button components-toolbar__control",
        label: __("Remove Images", "mytheme-blocks"),
        onClick: this.props.onRemoveImages,
        icon: "trash"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h3", null, __('What style of gallery do you need?', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_8__["LayoutSelector"], {
        selectedOption: gallery_block_style,
        onSelectedLayoutChange: this.props.onSelectedLayoutChange,
        options: [{
          label: __('Slider', 'p4ge'),
          image: window.p4ge_vars.home + 'images/gallery-slider.jpg',
          value: 1,
          help: __('The slider is a carousel of images. For more than 5 images, consider using a grid.', 'p4ge')
        }, {
          label: __('3 Column', 'p4ge'),
          image: window.p4ge_vars.home + 'images/gallery-3-column.jpg',
          value: 2,
          help: __('The 3 column image display is great for accentuating text, and telling a visual story.', 'p4ge')
        }, {
          label: __('Grid', 'p4ge'),
          image: window.p4ge_vars.home + 'images/gallery-grid.jpg',
          value: 3,
          help: __('The grid shows thumbnails of lots of images. Good to use when showing lots of activity.', 'p4ge')
        }]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: __('Title', 'p4ge'),
        placeholder: __('Enter Title', 'p4ge'),
        value: gallery_block_title,
        onChange: this.props.onTitleChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        help: __('Please Enter Description', 'p4ge'),
        value: gallery_block_description,
        onChange: this.props.onDescriptionChange
      }), __('Select Gallery Images', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
        title: __('Select Gallery Images', 'p4ge'),
        type: "image",
        onSelect: this.props.onSelectImage,
        value: multiple_image_array,
        allowedTypes: ["image"],
        multiple: "true",
        render: function render(_ref2) {
          var open = _ref2.open;
          return getImageOrButton(open);
        }
      }))), image_data && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "wp-block-master-theme-gallery__FocalPointPicker"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("ul", null, image_data.map(function (item, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("li", {
          key: index
        }, __('Select gallery image focal point', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["FocalPointPicker"], {
          url: item.url,
          dimensions: dimensions,
          value: item.focalPoint,
          onChange: _this.props.onFocalPointChange.bind(_this, item.id),
          key: item.id
        }));
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_9__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ServerSideRender"], {
        block: 'planet4-blocks/gallery',
        attributes: {
          gallery_block_style: this.props.gallery_block_style,
          gallery_block_title: this.props.gallery_block_title,
          gallery_block_description: this.props.gallery_block_description,
          multiple_image: this.props.multiple_image,
          gallery_block_focus_points: this.props.gallery_block_focus_points
        }
      })));
    }
  }]);

  return Gallery;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Gallery/GalleryBlock.js":
/*!*********************************************************!*\
  !*** ./react-blocks/src/blocks/Gallery/GalleryBlock.js ***!
  \*********************************************************/
/*! exports provided: GalleryBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryBlock", function() { return GalleryBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gallery */ "./react-blocks/src/blocks/Gallery/Gallery.js");





var __ = wp.i18n.__;
var GalleryBlock = function GalleryBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, GalleryBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var __ = wp.i18n.__;
  var withSelect = wp.data.withSelect;
  registerBlockType('planet4-blocks/gallery', {
    title: __('Gallery', 'p4ge'),
    icon: 'format-gallery',
    category: 'planet4-blocks',

    /**
     * Transforms old 'shortcake' shortcode to new gutenberg block.
     *
     * old block-shortcode:
     * [shortcake_gallery gallery_block_style="2" gallery_block_title="test title"
     *                    gallery_block_description="test desc" multiple_image="23603,23602,23600,23596"
     *                    gallery_block_focus_points="{'23596':'left top','23597':'left top','23599':'left top'}"
     * /]
     *
     * new block-gutenberg:
     * <!-- wp:planet4-blocks/gallery {"gallery_block_style":3,"gallery_block_title":"test title","gallery_block_description":"test desc",
     *      "multiple_image":"23603,23602,23600,23596"} /-->
     *
     */
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_gallery',
        attributes: {
          gallery_block_style: {
            type: 'integer',
            shortcode: function shortcode(_ref) {
              var _ref$named$gallery_bl = _ref.named.gallery_block_style,
                  gallery_block_style = _ref$named$gallery_bl === void 0 ? '' : _ref$named$gallery_bl;
              return gallery_block_style;
            }
          },
          gallery_block_title: {
            type: 'string',
            shortcode: function shortcode(_ref2) {
              var _ref2$named$gallery_b = _ref2.named.gallery_block_title,
                  gallery_block_title = _ref2$named$gallery_b === void 0 ? '' : _ref2$named$gallery_b;
              return gallery_block_title;
            }
          },
          gallery_block_description: {
            type: 'string',
            shortcode: function shortcode(_ref3) {
              var _ref3$named$gallery_b = _ref3.named.gallery_block_description,
                  gallery_block_description = _ref3$named$gallery_b === void 0 ? '' : _ref3$named$gallery_b;
              return gallery_block_description;
            }
          },
          multiple_image: {
            type: 'string',
            shortcode: function shortcode(_ref4) {
              var _ref4$named$multiple_ = _ref4.named.multiple_image,
                  multiple_image = _ref4$named$multiple_ === void 0 ? '' : _ref4$named$multiple_;
              return multiple_image;
            }
          },
          gallery_block_focus_points: {
            type: 'string',
            shortcode: function shortcode(_ref5) {
              var _ref5$named$gallery_b = _ref5.named.gallery_block_focus_points,
                  gallery_block_focus_points = _ref5$named$gallery_b === void 0 ? '' : _ref5$named$gallery_b;
              return gallery_block_focus_points;
            }
          }
        }
      }]
    },
    attributes: {
      gallery_block_style: {
        type: 'number',
        default: 1
      },
      gallery_block_title: {
        type: 'string'
      },
      gallery_block_description: {
        type: 'string'
      },
      multiple_image: {
        type: 'string'
      },
      gallery_block_focus_points: {
        type: 'string'
      },
      image_data: {
        type: 'object',
        default: []
      }
    },
    edit: withSelect(function (select, props) {
      var attributes = props.attributes;
      var multiple_image = attributes.multiple_image;
      var image_urls_array = [];

      if (multiple_image) {
        var image_id_array = multiple_image.split(',');
        $.each(image_id_array, function (index, img_id) {
          var img_url = select('core').getMedia(img_id);

          if (img_url) {
            image_urls_array[img_id] = img_url.media_details.sizes.medium.source_url;
          }
        });
      }

      return {
        image_urls_array: image_urls_array
      };
    })(function (_ref6) {
      var image_urls_array = _ref6.image_urls_array,
          isSelected = _ref6.isSelected,
          attributes = _ref6.attributes,
          setAttributes = _ref6.setAttributes;
      var image_data = attributes.image_data,
          gallery_block_focus_points = attributes.gallery_block_focus_points; // Prepare image_data array on edit gallery block.

      if (0 == image_data.length && 0 < image_urls_array.length) {
        var new_image_data = [];
        var focal_points_json = gallery_block_focus_points ? JSON.parse(gallery_block_focus_points) : {};

        for (var img_id in image_urls_array) {
          var x = void 0,
              y = void 0;

          if ($.isEmptyObject(focal_points_json)) {
            x = 50;
            y = 50;
          } else {
            var _focal_points_json$im = focal_points_json[img_id].replace(/\%/g, '').split(' ');

            var _focal_points_json$im2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_focal_points_json$im, 2);

            x = _focal_points_json$im2[0];
            y = _focal_points_json$im2[1];
          }

          new_image_data.push({
            url: image_urls_array[img_id],
            focalPoint: {
              x: parseInt(x) / 100,
              y: parseInt(y) / 100
            },
            id: img_id
          });
        }

        setAttributes({
          image_data: new_image_data
        });
      }

      function onTitleChange(value) {
        setAttributes({
          gallery_block_title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          gallery_block_description: value
        });
      }

      function onSelectImage(value) {
        var image_ids = [];
        var image_data = [];

        for (var key in value) {
          image_ids.push(value[key].id);
          var _img_id = value[key].id;
          image_data.push({
            url: value[key].url,
            focalPoint: {
              x: 0.5,
              y: 0.5
            },
            id: _img_id
          });
        }

        setAttributes({
          multiple_image: image_ids.join(',')
        });
        setAttributes({
          image_data: image_data
        });
      }

      function onSelectedLayoutChange(value) {
        setAttributes({
          gallery_block_style: Number(value)
        });
      }

      function onFocalPointChange(image_id, value) {
        var updated_image_data = [];
        var gallery_block_focus_points = {};
        image_data.map(function (object) {
          if (object.id === image_id) {
            var _x = parseFloat(value.x).toFixed(2);

            var _y = parseFloat(value.y).toFixed(2);

            updated_image_data.push({
              url: object.url,
              focalPoint: {
                x: _x,
                y: _y
              },
              id: image_id
            });
            gallery_block_focus_points[image_id] = _x * 100 + '% ' + _y * 100 + '%';
          } else {
            updated_image_data.push(object);
            var _img_id2 = object.id;
            gallery_block_focus_points[_img_id2] = parseInt(object.focalPoint.x * 100) + '% ' + parseInt(object.focalPoint.y * 100) + '%';
          }
        });
        setAttributes({
          gallery_block_focus_points: JSON.stringify(gallery_block_focus_points)
        });
        setAttributes({
          image_data: updated_image_data
        });
      }

      function onRemoveImages() {
        setAttributes({
          multiple_image: ''
        });
        setAttributes({
          gallery_block_focus_points: ''
        });
        setAttributes({
          image_data: []
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_Gallery__WEBPACK_IMPORTED_MODULE_4__["Gallery"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onSelectedLayoutChange: onSelectedLayoutChange,
        onSelectImage: onSelectImage,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onFocalPointChange: onFocalPointChange,
        onRemoveImages: onRemoveImages
      }));
    }),
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Happypoint/Happypoint.js":
/*!**********************************************************!*\
  !*** ./react-blocks/src/blocks/Happypoint/Happypoint.js ***!
  \**********************************************************/
/*! exports provided: Happypoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Happypoint", function() { return Happypoint; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);











var Happypoint =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Happypoint, _Component);

  function Happypoint(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Happypoint);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Happypoint).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Happypoint, [{
    key: "renderEdit",
    value: function renderEdit() {
      var _this = this;

      var __ = wp.i18n.__;
      var dimensions = {
        width: 400,
        height: 100
      };
      var _this$props = this.props,
          focus_image = _this$props.focus_image,
          opacity = _this$props.opacity,
          mailing_list_iframe = _this$props.mailing_list_iframe,
          iframe_url = _this$props.iframe_url,
          url = _this$props.url,
          id = _this$props.id;
      var focal_point_params = {
        x: '',
        y: ''
      };

      if (focus_image) {
        var focus_image_str = focus_image.replace(/%/g, '');

        var _focus_image_str$spli = focus_image_str.split(' '),
            _focus_image_str$spli2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_focus_image_str$spli, 2),
            x = _focus_image_str$spli2[0],
            y = _focus_image_str$spli2[1];

        focal_point_params = {
          x: x / 100,
          y: y / 100
        };
      } else {
        focal_point_params = {
          x: 0.5,
          y: 0.5
        };
      }

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (_this.props.id && 0 < _this.props.id) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            align: "center"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
            src: _this.props.url,
            onClick: openEvent,
            className: "happypoint__imgs",
            width: '400px',
            style: {
              padding: '10px 10px'
            }
          }));
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
            className: "button-container"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            onClick: openEvent,
            className: "button"
          }, "+ ", __('Select Background Image', 'p4ge')));
        }
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: __('Setting', 'p4ge')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
        label: __('Opacity', 'p4ge'),
        value: opacity,
        onChange: this.props.onOpacityChange,
        min: 1,
        max: 100,
        initialPosition: opacity,
        help: __('We use an overlay to fade the image back. Use a number between 1 and 100, the higher the number, the more faded the image will look. If you leave this empty, the default of 30 will be used.', 'p4ge')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
        label: __('Use mailing list iframe', 'p4ge'),
        help: __('Use mailing list iframe', 'p4ge'),
        value: mailing_list_iframe,
        checked: this.props.mailing_list_iframe,
        onChange: this.props.onMailingListIframeChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        label: __('Iframe url', 'p4ge'),
        placeholder: __('Enter Iframe url', 'p4ge'),
        help: __('If a url is set in this field and the \'mailing list iframe\' option is enabled, it will override the planet4 engaging network setting.', 'p4ge'),
        value: iframe_url,
        onChange: this.props.onIframeUrlChange
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, this.props.id && 0 < this.props.id && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        onSelect: this.props.onSelectImage,
        allowedTypes: ['image'],
        value: id,
        type: "image",
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
            className: "components-icon-button components-toolbar__control",
            label: __('Edit Image', 'p4ge'),
            onClick: open,
            icon: "edit"
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
        className: "components-icon-button components-toolbar__control",
        label: __('Remove Image', 'p4ge'),
        onClick: this.props.onRemoveImages,
        icon: "trash"
      }))), __('Select Background Image', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        title: __('Select Background Image', 'p4ge'),
        type: "image",
        onSelect: this.props.onSelectImage,
        value: id,
        allowedTypes: ['image'],
        render: function render(_ref2) {
          var open = _ref2.open;
          return getImageOrButton(open);
        }
      }))), id && 0 < id && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, __('Select focus point for background image', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["FocalPointPicker"], {
        url: url,
        dimensions: dimensions,
        value: focal_point_params,
        onChange: this.props.onFocalPointChange
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ServerSideRender"], {
        block: 'planet4-blocks/happypoint',
        attributes: {
          id: this.props.id,
          focus_image: this.props.focus_image,
          opacity: this.props.opacity,
          mailing_list_iframe: this.props.mailing_list_iframe,
          iframe_url: this.props.iframe_url,
          load_iframe: true
        }
      })));
    }
  }]);

  return Happypoint;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Happypoint/HappypointBlock.js":
/*!***************************************************************!*\
  !*** ./react-blocks/src/blocks/Happypoint/HappypointBlock.js ***!
  \***************************************************************/
/*! exports provided: HappypointBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HappypointBlock", function() { return HappypointBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Happypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Happypoint */ "./react-blocks/src/blocks/Happypoint/Happypoint.js");




var HappypointBlock = function HappypointBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HappypointBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var __ = wp.i18n.__;
  var withSelect = wp.data.withSelect;
  registerBlockType('planet4-blocks/happypoint', {
    title: __('Happypoint', 'p4ge'),
    icon: 'format-image',
    category: 'planet4-blocks',

    /**
     * Transforms old 'shortcake' shortcode to new gutenberg block.
     *
     * old block-shortcode:
     * [shortcake_happy_point background="4968" focus_image="center center" opacity="60" mailing_list_iframe="true" iframe_url="https%3A%2F%2Fact.greenpeace.org%2Fpage%2F34215%2Fsubscribe%2F1" /]
     *
     * new block-gutenberg:
     * <!-- wp:planet4-blocks/happypoint {"focus_image":"50% 50%","opacity":60,"mailing_list_iframe":true,"iframe_url":"https://act.greenpeace.org/page/34215/subscribe/1","id":4968} /-->
     */
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_happy_point',
        attributes: {
          opacity: {
            type: 'integer',
            shortcode: function shortcode(_ref) {
              var _ref$named$opacity = _ref.named.opacity,
                  opacity = _ref$named$opacity === void 0 ? '' : _ref$named$opacity;
              return opacity;
            }
          },
          id: {
            type: 'integer',
            shortcode: function shortcode(_ref2) {
              var _ref2$named$id = _ref2.named.id,
                  id = _ref2$named$id === void 0 ? '' : _ref2$named$id;
              return id;
            }
          },
          focus_image: {
            type: 'string',
            shortcode: function shortcode(_ref3) {
              var _ref3$named$focus_ima = _ref3.named.focus_image,
                  focus_image = _ref3$named$focus_ima === void 0 ? '' : _ref3$named$focus_ima;
              return focus_image;
            }
          },
          mailing_list_iframe: {
            type: 'string',
            shortcode: function shortcode(_ref4) {
              var _ref4$named$mailing_l = _ref4.named.mailing_list_iframe,
                  mailing_list_iframe = _ref4$named$mailing_l === void 0 ? '' : _ref4$named$mailing_l;
              return mailing_list_iframe;
            }
          },
          iframe_url: {
            type: 'string',
            shortcode: function shortcode(_ref5) {
              var _ref5$named$iframe_ur = _ref5.named.iframe_url,
                  iframe_url = _ref5$named$iframe_ur === void 0 ? '' : _ref5$named$iframe_ur;
              return iframe_url;
            }
          }
        }
      }]
    },
    attributes: {
      focus_image: {
        type: 'string'
      },
      opacity: {
        type: 'number',
        default: 60
      },
      mailing_list_iframe: {
        type: 'boolean'
      },
      iframe_url: {
        type: 'string'
      },
      id: {
        type: 'number'
      },
      load_iframe: {
        type: 'boolean',
        default: false
      }
    },
    edit: withSelect(function (select, props) {
      var attributes = props.attributes;
      var id = attributes.id;
      var img_url = '';

      if (id && 0 < id) {
        img_url = select('core').getMedia(id);

        if (img_url) {
          img_url = img_url.media_details.sizes.medium.source_url;
        }
      }

      return {
        img_url: img_url
      };
    })(function (_ref6) {
      var img_url = _ref6.img_url,
          isSelected = _ref6.isSelected,
          attributes = _ref6.attributes,
          setAttributes = _ref6.setAttributes;

      function onBackgroundChange(value) {
        setAttributes({
          background: value
        });
      }

      function onOpacityChange(value) {
        setAttributes({
          opacity: value
        });
      }

      function onMailingListIframeChange(value) {
        setAttributes({
          mailing_list_iframe: value
        });
      }

      function onIframeUrlChange(value) {
        setAttributes({
          iframe_url: value
        });
      }

      function onFocalPointChange(_ref7) {
        var x = _ref7.x,
            y = _ref7.y;
        x = parseFloat(x).toFixed(2);
        y = parseFloat(y).toFixed(2);
        setAttributes({
          focus_image: x * 100 + '% ' + y * 100 + '%'
        });
      }

      function onSelectImage(_ref8) {
        var id = _ref8.id;
        setAttributes({
          id: id
        });
      }

      function onRemoveImages() {
        setAttributes({
          id: -1
        });
        setAttributes({
          focus_image: ''
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Happypoint__WEBPACK_IMPORTED_MODULE_3__["Happypoint"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        url: img_url,
        onSelectImage: onSelectImage,
        onOpacityChange: onOpacityChange,
        onMailingListIframeChange: onMailingListIframeChange,
        onIframeUrlChange: onIframeUrlChange,
        onFocalPointChange: onFocalPointChange,
        onRemoveImages: onRemoveImages
      }));
    }),
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Media/Media.js":
/*!************************************************!*\
  !*** ./react-blocks/src/blocks/Media/Media.js ***!
  \************************************************/
/*! exports provided: Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");










var Media =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Media, _Component);

  function Media(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Media);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Media).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Media, [{
    key: "renderEdit",
    value: function renderEdit() {
      var __ = wp.i18n.__;
      var _this$props = this.props,
          video_title = _this$props.video_title,
          description = _this$props.description,
          youtube_id = _this$props.youtube_id;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: __('Media Title', 'p4ge'),
        placeholder: __('Enter video title', 'p4ge'),
        value: video_title,
        onChange: this.props.onTitleChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        help: __('(Optional)', 'p4ge'),
        value: description,
        onChange: this.props.onDescriptionChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
        label: __('Media URL/ID', 'p4ge'),
        placeholder: __('Enter URL', 'p4ge'),
        value: youtube_id,
        onChange: this.props.onMediaUrlChange,
        help: __('Can be a YouTube, Vimeo or Soundcloud URL or an mp4, mp3 or wav file URL.', 'p4ge')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["MediaPlaceholder"], {
        labels: {
          title: __('Video poster image [Optional]', 'p4ge'),
          instructions: __('Applicable for .mp4 video URLs only.', 'p4ge')
        },
        icon: "format-image",
        onSelect: this.props.onSelectImage,
        onSelectURL: this.props.onSelectURL,
        onError: this.props.onUploadError,
        accept: "image/*",
        allowedTypes: ["image"]
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_8__["Preview"], {
        showBar: this.props.isSelected
      }, this.props.youtube_id && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ServerSideRender"], {
        block: 'planet4-blocks/media-video',
        attributes: {
          video_title: this.props.video_title,
          description: this.props.description,
          youtube_id: this.props.youtube_id,
          video_poster_img: this.props.video_poster_img
        }
      })));
    }
  }]);

  return Media;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Media/MediaBlock.js":
/*!*****************************************************!*\
  !*** ./react-blocks/src/blocks/Media/MediaBlock.js ***!
  \*****************************************************/
/*! exports provided: MediaBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaBlock", function() { return MediaBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Media */ "./react-blocks/src/blocks/Media/Media.js");




var __ = wp.i18n.__;
var MediaBlock = function MediaBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MediaBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  registerBlockType('planet4-blocks/media-video', {
    title: __('Media block', 'p4ge'),
    icon: 'format-video',
    category: 'planet4-blocks',

    /**
     * Transforms old 'shortcake' shortcode to new gutenberg block.
     *
     * old block-shortcode:
     * [shortcake_media_video video_title="Lorem Ipsum"
     *                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
     *                        youtube_id="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
     *                        video_poster_img="23241"
     * /]
     *
     * new block-gutenberg:
     * <!-- wp:planet4-blocks/media-video {"video_title":"Lorem Ipsum","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.","youtube_id":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","video_poster_img":23241} /-->
     *
     */
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_media_video',
        attributes: {
          video_title: {
            type: 'string',
            shortcode: function shortcode(_ref) {
              var _ref$named$video_titl = _ref.named.video_title,
                  video_title = _ref$named$video_titl === void 0 ? '' : _ref$named$video_titl;
              return video_title;
            }
          },
          description: {
            type: 'string',
            shortcode: function shortcode(_ref2) {
              var _ref2$named$descripti = _ref2.named.description,
                  description = _ref2$named$descripti === void 0 ? '' : _ref2$named$descripti;
              return description;
            }
          },
          youtube_id: {
            type: 'string',
            shortcode: function shortcode(_ref3) {
              var _ref3$named$youtube_i = _ref3.named.youtube_id,
                  youtube_id = _ref3$named$youtube_i === void 0 ? '' : _ref3$named$youtube_i;
              return youtube_id;
            }
          },
          video_poster_img: {
            type: 'integer',
            shortcode: function shortcode(_ref4) {
              var _ref4$named$video_pos = _ref4.named.video_poster_img,
                  video_poster_img = _ref4$named$video_pos === void 0 ? '' : _ref4$named$video_pos;
              return video_poster_img;
            }
          }
        }
      }]
    },
    attributes: {
      video_title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      youtube_id: {
        type: 'string'
      },
      video_poster_img: {
        type: 'integer'
      }
    },
    edit: function edit(_ref5) {
      var isSelected = _ref5.isSelected,
          attributes = _ref5.attributes,
          setAttributes = _ref5.setAttributes;

      function onTitleChange(value) {
        setAttributes({
          video_title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          description: value
        });
      }

      function onMediaUrlChange(value) {
        setAttributes({
          youtube_id: value
        });
      }

      function onSelectImage(_ref6) {
        var id = _ref6.id;
        setAttributes({
          video_poster_img: id
        });
      }

      function onSelectURL(_ref7) {
        var url = _ref7.url;
        setAttributes({
          id: null
        });
      }

      function onUploadError(_ref8) {
        var message = _ref8.message;
        console.log(message);
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Media__WEBPACK_IMPORTED_MODULE_3__["Media"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onMediaUrlChange: onMediaUrlChange,
        onSelectImage: onSelectImage,
        onSelectURL: onSelectURL,
        onUploadError: onUploadError
      }));
    },
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Socialmedia/Socialmedia.js":
/*!************************************************************!*\
  !*** ./react-blocks/src/blocks/Socialmedia/Socialmedia.js ***!
  \************************************************************/
/*! exports provided: Socialmedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socialmedia", function() { return Socialmedia; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);










var _wp = wp,
    apiFetch = _wp.apiFetch;
var addQueryArgs = wp.url.addQueryArgs;
var Socialmedia =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Socialmedia, _Component);

  function Socialmedia(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Socialmedia);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Socialmedia).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Socialmedia, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkTwitterScript();
      this.checkInstagramScript();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.checkTwitterScript();
      this.checkInstagramScript();
    }
    /**
     * Check if twitter embeds script is loaded and initiliaze it.
     */

  }, {
    key: "checkTwitterScript",
    value: function checkTwitterScript() {
      if (this.props.social_media_url.includes('twitter')) {
        var twitterScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');

        if (null === twitterScript) {
          var scriptLoaded = this.loadScriptAsync('https://platform.twitter.com/widgets.js');
          scriptLoaded.then(function () {
            this.initializeTwitterEmbeds();
          }.bind(this));
        } else {
          this.initializeTwitterEmbeds();
        }
      }
    }
    /**
     * Check if instgram embeds script is loaded and initiliaze it.
     */

  }, {
    key: "checkInstagramScript",
    value: function checkInstagramScript() {
      if (this.props.social_media_url.includes('instagram')) {
        var instaScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');

        if (null === instaScript) {
          var scriptLoaded = this.loadScriptAsync('https://www.instagram.com/embed.js');
          scriptLoaded.then(function () {
            this.initializeInstagramEmbeds();
          }.bind(this));
        } else {
          this.initializeInstagramEmbeds();
        }
      }
    }
    /**
     * Initialize twitter embeds.
     */

  }, {
    key: "initializeTwitterEmbeds",
    value: function initializeTwitterEmbeds() {
      setTimeout(function () {
        if ('undefined' !== window.twttr) {
          window.twttr.widgets.load();
        }
      }, 2000);
    }
    /**
     * Initialize instagram embeds.
     */

  }, {
    key: "initializeInstagramEmbeds",
    value: function initializeInstagramEmbeds() {
      setTimeout(function () {
        if ('undefined' !== window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }, 3000);
    }
  }, {
    key: "loadScriptAsync",
    value: function loadScriptAsync(uri) {
      return new Promise(function (resolve, reject) {
        var tag = document.createElement('script');
        tag.src = uri;
        tag.async = true;

        tag.onload = function () {
          resolve();
        };

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
      });
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var __ = wp.i18n.__;

      var embed_type_help = __('Select oEmbed for the following types of social media<br>- Twitter: tweet, profile, list, collection, likes, moment<br>- Facebook: post, activity, photo, video, media, question, note<br>- Instagram: image', 'planet4-blocks-backend');

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('Title', 'planet4-blocks-backend'),
        placeholder: __('Enter title', 'planet4-blocks-backend'),
        help: __('Optional', 'planet4-blocks-backend'),
        value: this.props.title,
        onChange: this.props.onTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextareaControl"], {
        label: __('Description', 'planet4-blocks-backend'),
        placeholder: __('Enter description', 'planet4-blocks-backend'),
        help: __('Optional', 'planet4-blocks-backend'),
        value: this.props.description,
        onChange: this.props.onDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RadioControl"], {
        label: __('Embed type', 'planet4-blocks-backend'),
        help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["RawHTML"], null, embed_type_help),
        options: [{
          label: 'oEmbed',
          value: 'oembed'
        }, {
          label: 'Facebook page',
          value: 'facebook_page'
        }],
        selected: this.props.embed_type,
        onChange: this.props.onEmbedTypeChange
      })), this.props.embed_type === 'facebook_page' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: __('What Facebook page content would you like to display?', 'planet4-blocks-backend'),
        value: this.props.facebook_page_tab,
        options: [{
          label: 'Timeline',
          value: 'timeline'
        }, {
          label: 'Events',
          value: 'events'
        }, {
          label: 'Mesages',
          value: 'messages'
        }],
        onChange: this.props.onFacebookPageTabChange
      })) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: __('URL', 'planet4-blocks-backend'),
        placeholder: __('Enter URL', 'planet4-blocks-backend'),
        value: this.props.social_media_url,
        onChange: this.props.onSocialMediaUrlChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: __('Alignment', 'planet4-blocks-backend'),
        value: this.props.alignment_class,
        options: [{
          label: 'None',
          value: ''
        }, {
          label: 'Left',
          value: 'alignleft'
        }, {
          label: 'Center',
          value: 'aligncenter'
        }, {
          label: 'Right',
          value: 'alignright'
        }],
        onChange: this.props.onAlignmentChange
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_7__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ServerSideRender"], {
        block: 'planet4-blocks/social-media',
        attributes: {
          title: this.props.title,
          description: this.props.description,
          embed_type: this.props.embed_type,
          facebook_page_tab: this.props.facebook_page_tab,
          social_media_url: this.props.social_media_url,
          alignment_class: this.props.alignment_class
        }
      })));
    }
  }]);

  return Socialmedia;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Socialmedia/SocialmediaBlock.js":
/*!*****************************************************************!*\
  !*** ./react-blocks/src/blocks/Socialmedia/SocialmediaBlock.js ***!
  \*****************************************************************/
/*! exports provided: SocialmediaBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialmediaBlock", function() { return SocialmediaBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Socialmedia_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Socialmedia.js */ "./react-blocks/src/blocks/Socialmedia/Socialmedia.js");




var SocialmediaBlock = function SocialmediaBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SocialmediaBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var __ = wp.i18n.__;
  registerBlockType('planet4-blocks/social-media', {
    title: __('Social Media', 'p4ge'),
    icon: 'welcome-widgets-menus',
    category: 'planet4-blocks',
    // Transform the shortcode into a Gutenberg block
    // this is used when a user clicks "Convert to blocks"
    // on the "Classic Editor" block
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_social_media',
        attributes: {
          title: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.title;
            }
          },
          description: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.description;
            }
          },
          embed_type: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.embed_type;
            }
          },
          facebook_page_tab: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.facebook_page_tab;
            }
          },
          social_media_url: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.social_media_url;
            }
          },
          alignment_class: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.alignment_class;
            }
          }
        }
      }]
    },
    // This attributes definition mimics the one in the PHP side.
    attributes: {
      title: {
        type: 'string',
        default: ''
      },
      description: {
        type: 'string',
        default: ''
      },
      embed_type: {
        type: 'string',
        default: 'oembed'
      },
      facebook_page_tab: {
        type: 'string',
        default: 'timeline'
      },
      social_media_url: {
        type: 'string',
        default: ''
      },
      alignment_class: {
        type: 'string',
        default: ''
      }
    },
    // withSelect is a "Higher Order Component", it works as
    // a Decorator, it will provide some basic API functionality
    // through `select`.
    edit: function edit(_ref) {
      var isSelected = _ref.isSelected,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      // These methods are passed down to the
      // Socialmedia component, they update the corresponding attribute.
      function onTitleChange(value) {
        setAttributes({
          title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          description: value
        });
      }

      function onEmbedTypeChange(value) {
        setAttributes({
          embed_type: value
        });
      }

      function onFacebookPageTabChange(value) {
        setAttributes({
          facebook_page_tab: value
        });
      }

      function onSocialMediaUrlChange(value) {
        setAttributes({
          social_media_url: value
        });
      }

      function onAlignmentChange(value) {
        setAttributes({
          alignment_class: value
        });
      } // We pass down all the attributes to Socialmedia as props using
      // the spread operator. Then we selectively add more
      // props.


      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Socialmedia_js__WEBPACK_IMPORTED_MODULE_3__["Socialmedia"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onTitleChange: onTitleChange,
        onDescriptionChange: onDescriptionChange,
        onEmbedTypeChange: onEmbedTypeChange,
        onFacebookPageTabChange: onFacebookPageTabChange,
        onSocialMediaUrlChange: onSocialMediaUrlChange,
        onAlignmentChange: onAlignmentChange
      }));
    },
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Splittwocolumns/Splittwocolumns.js":
/*!********************************************************************!*\
  !*** ./react-blocks/src/blocks/Splittwocolumns/Splittwocolumns.js ***!
  \********************************************************************/
/*! exports provided: Splittwocolumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splittwocolumns", function() { return Splittwocolumns; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");
/* harmony import */ var _components_ImageOrButton_ImageOrButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ImageOrButton/ImageOrButton */ "./react-blocks/src/components/ImageOrButton/ImageOrButton.js");












var Splittwocolumns =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Splittwocolumns, _Component);

  function Splittwocolumns(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Splittwocolumns);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Splittwocolumns).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Splittwocolumns, [{
    key: "renderEdit",
    value: function renderEdit() {
      var tag_list = this.props.tagsList.map(function (tag) {
        return {
          label: tag.name,
          value: tag.id
        };
      });
      tag_list.unshift({
        label: '--Select Tag--',
        value: 0
      });
      var issuepage_list = this.props.issuepageList.map(function (issue) {
        return {
          label: issue.title.raw,
          value: issue.id
        };
      });
      issuepage_list.unshift({
        label: '--Select Issue--',
        value: 0
      });
      var __ = wp.i18n.__;
      var _this$props = this.props,
          select_issue = _this$props.select_issue,
          title = _this$props.title,
          issue_description = _this$props.issue_description,
          issue_link_text = _this$props.issue_link_text,
          issue_link_path = _this$props.issue_link_path,
          issue_image = _this$props.issue_image,
          focus_issue_image = _this$props.focus_issue_image,
          select_tag = _this$props.select_tag,
          tag_description = _this$props.tag_description,
          button_text = _this$props.button_text,
          button_link = _this$props.button_link,
          tag_image = _this$props.tag_image,
          focus_tag_image = _this$props.focus_tag_image,
          issue_image_url = _this$props.issue_image_url,
          tag_image_url = _this$props.tag_image_url; // Convert focal point values from : 10% 80% => {x:0.1, y:0.8}

      var focus_issue_image_obj = {
        x: 0.5,
        y: 0.5
      };

      if (focus_issue_image) {
        var _focus_issue_image$re = focus_issue_image.replace(/\%/g, '').split(' '),
            _focus_issue_image$re2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_focus_issue_image$re, 2),
            x = _focus_issue_image$re2[0],
            y = _focus_issue_image$re2[1];

        focus_issue_image_obj = {
          x: x / 100,
          y: y / 100
        };
      } // Convert focal point values from : 10% 80% => {x:0.1, y:0.8}


      var focus_tag_image_obj = {
        x: 0.5,
        y: 0.5
      };

      if (focus_tag_image) {
        var _focus_tag_image$repl = focus_tag_image.replace(/\%/g, '').split(' '),
            _focus_tag_image$repl2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_focus_tag_image$repl, 2),
            _x = _focus_tag_image$repl2[0],
            _y = _focus_tag_image$repl2[1];

        focus_tag_image_obj = {
          x: _x / 100,
          y: _y / 100
        };
      }

      var dimensions = {
        width: 400,
        height: 100
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h3", null, __('Issue fields (Column 1 - Left side)', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, issuepage_list && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: __('Select an issue', 'p4ge'),
        value: select_issue,
        options: issuepage_list,
        onChange: this.props.onSelectIssue
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Issue Title', 'p4ge'),
        placeholder: __('Enter Title', 'p4ge'),
        value: title,
        onChange: this.props.onIssueTitleChange,
        help: __('(Optional) Fill this only if you need to override issue title.', 'p4ge')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
        label: __('Issue Description', 'p4ge'),
        placeholder: __('Enter Description', 'p4ge'),
        help: __('(Optional) Fill this only if you need to override issue description.', 'p4ge'),
        value: issue_description,
        onChange: this.props.onIssueDescriptionChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Issue link text', 'p4ge'),
        placeholder: __('Enter link text', 'p4ge'),
        value: issue_link_text,
        onChange: this.props.onIssueLinkTextChange,
        help: __('(Optional)', 'p4ge')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Issue link path', 'p4ge'),
        placeholder: __('Enter link path', 'p4ge'),
        value: issue_link_path,
        onChange: this.props.onIssueLinkPathChange,
        help: __('(Optional)', 'p4ge')
      }), __('Issue Image', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_ImageOrButton_ImageOrButton__WEBPACK_IMPORTED_MODULE_10__["ImageOrButton"], {
        title: __('Select Image for Issue', 'p4ge'),
        onSelectImage: this.props.onSelectIssueImage,
        imageId: issue_image,
        imageUrl: issue_image_url,
        buttonLabel: __('+ Select Image for Issue', 'p4ge'),
        help: __('(Optional)', 'p4ge'),
        imgClass: "splittwocolumns-block-issue-imgs"
      }), issue_image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, __('Select focal point for issue image', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["FocalPointPicker"], {
        url: issue_image_url,
        dimensions: dimensions,
        value: focus_issue_image_obj,
        onChange: this.props.onIssueImageFocalPointChange
      }), __('(Optional)', 'p4ge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h3", null, __('Campaign fields (Column 2 - Right side)', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, tag_list && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: __('Select a tag', 'p4ge'),
        value: select_tag,
        options: tag_list,
        onChange: this.props.onSelectTag
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
        label: __('Campaign Description', 'p4ge'),
        placeholder: __('Enter Description', 'p4ge'),
        help: __('(Optional)', 'p4ge'),
        value: tag_description,
        onChange: this.props.onTagDescriptionChange
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Campaign button text', 'p4ge'),
        placeholder: __('Enter button text', 'p4ge'),
        value: button_text,
        onChange: this.props.onButtonTextChange,
        help: __('(Optional)', 'p4ge')
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Campaign button link', 'p4ge'),
        placeholder: __('Enter button link', 'p4ge'),
        value: button_link,
        onChange: this.props.onButtonLinkChange,
        help: __('(Optional)', 'p4ge')
      }), __('Campaign Image', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_ImageOrButton_ImageOrButton__WEBPACK_IMPORTED_MODULE_10__["ImageOrButton"], {
        title: __('Select Image for Campaign', 'p4ge'),
        onSelectImage: this.props.onSelectCampaignImage,
        imageId: tag_image,
        imageUrl: tag_image_url,
        buttonLabel: __('+ Select Image for Campaign', 'p4ge'),
        help: __('(Optional)', 'p4ge'),
        imgClass: "splittwocolumns-block-tag_imgs"
      }), tag_image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, __('Select focal point for campaign image', 'p4ge'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["FocalPointPicker"], {
        url: tag_image_url,
        dimensions: dimensions,
        value: focus_tag_image_obj,
        onChange: this.props.onCampaignImageFocalPointChange
      }), __('(Optional)', 'p4ge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("hr", null));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_9__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ServerSideRender"], {
        block: 'planet4-blocks/split-two-columns',
        attributes: {
          select_issue: this.props.select_issue,
          title: this.props.title,
          issue_description: this.props.issue_description,
          issue_link_text: this.props.issue_link_text,
          issue_link_path: this.props.issue_link_path,
          issue_image: this.props.issue_image,
          focus_issue_image: this.props.focus_issue_image,
          select_tag: this.props.select_tag,
          tag_description: this.props.tag_description,
          button_text: this.props.button_text,
          button_link: this.props.button_link,
          tag_image: this.props.tag_image,
          focus_tag_image: this.props.focus_tag_image
        }
      })));
    }
  }]);

  return Splittwocolumns;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Splittwocolumns/SplittwocolumnsBlock.js":
/*!*************************************************************************!*\
  !*** ./react-blocks/src/blocks/Splittwocolumns/SplittwocolumnsBlock.js ***!
  \*************************************************************************/
/*! exports provided: SplittwocolumnsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplittwocolumnsBlock", function() { return SplittwocolumnsBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Splittwocolumns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Splittwocolumns */ "./react-blocks/src/blocks/Splittwocolumns/Splittwocolumns.js");




var __ = wp.i18n.__;
var SplittwocolumnsBlock = function SplittwocolumnsBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SplittwocolumnsBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var __ = wp.i18n.__;
  var withSelect = wp.data.withSelect;
  registerBlockType('planet4-blocks/split-two-columns', {
    title: __('Split Two Columns', 'p4ge'),
    icon: 'format-gallery',
    category: 'planet4-blocks',

    /**
     * Transforms old 'shortcake' shortcode to new gutenberg block.
     *
     * old block-shortcode:
     * [shortcake_split_two_columns select_issue="13813" title="lorem ipsum" issue_description="lorem ipsum" issue_link_text="test link"
     *        issue_link_path="http://www.googlw.com" issue_image="23634" focus_issue_image="right top" select_tag="19"
     *        tag_description="lorem ipsum" button_text="btn text" button_link="http://www.google.com" tag_image="23634" focus_tag_image="right top"
     * /]
     *
     * new block-gutenberg:
     * <!-- wp:planet4-blocks/split-two-columns {"select_issue":2079,"title":"Lorem Ipsum","issue_description":"Lorem Ipsum","issue_link_text":"tets link","issue_link_path":"http://www.google.com","issue_image":23634,"focus_issue_image":"33% 60%","select_tag":65,"tag_description":"Lorem Ipsum","button_text":"btn text","button_link":"http://www.google.com","tag_image":23634,"focus_tag_image":"30% 79%"} /-->
     *
     */
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_split_two_columns',
        attributes: {
          select_issue: {
            type: 'integer',
            shortcode: function shortcode(_ref) {
              var _ref$named$select_iss = _ref.named.select_issue,
                  select_issue = _ref$named$select_iss === void 0 ? '' : _ref$named$select_iss;
              return select_issue;
            }
          },
          title: {
            type: 'string',
            shortcode: function shortcode(_ref2) {
              var _ref2$named$title = _ref2.named.title,
                  title = _ref2$named$title === void 0 ? '' : _ref2$named$title;
              return title;
            }
          },
          issue_description: {
            type: 'string',
            shortcode: function shortcode(_ref3) {
              var _ref3$named$issue_des = _ref3.named.issue_description,
                  issue_description = _ref3$named$issue_des === void 0 ? '' : _ref3$named$issue_des;
              return issue_description;
            }
          },
          issue_link_text: {
            type: 'string',
            shortcode: function shortcode(_ref4) {
              var _ref4$named$issue_lin = _ref4.named.issue_link_text,
                  issue_link_text = _ref4$named$issue_lin === void 0 ? '' : _ref4$named$issue_lin;
              return issue_link_text;
            }
          },
          issue_link_path: {
            type: 'string',
            shortcode: function shortcode(_ref5) {
              var _ref5$named$issue_lin = _ref5.named.issue_link_path,
                  issue_link_path = _ref5$named$issue_lin === void 0 ? '' : _ref5$named$issue_lin;
              return issue_link_path;
            }
          },
          issue_image: {
            type: 'integer',
            shortcode: function shortcode(_ref6) {
              var _ref6$named$issue_ima = _ref6.named.issue_image,
                  issue_image = _ref6$named$issue_ima === void 0 ? '' : _ref6$named$issue_ima;
              return issue_image;
            }
          },
          focus_issue_image: {
            type: 'string',
            shortcode: function shortcode(_ref7) {
              var _ref7$named$focus_iss = _ref7.named.focus_issue_image,
                  focus_issue_image = _ref7$named$focus_iss === void 0 ? '' : _ref7$named$focus_iss;
              return focus_issue_image;
            }
          },
          select_tag: {
            type: 'integer',
            shortcode: function shortcode(_ref8) {
              var _ref8$named$select_ta = _ref8.named.select_tag,
                  select_tag = _ref8$named$select_ta === void 0 ? '' : _ref8$named$select_ta;
              return select_tag;
            }
          },
          tag_description: {
            type: 'string',
            shortcode: function shortcode(_ref9) {
              var _ref9$named$tag_descr = _ref9.named.tag_description,
                  tag_description = _ref9$named$tag_descr === void 0 ? '' : _ref9$named$tag_descr;
              return tag_description;
            }
          },
          button_text: {
            type: 'string',
            shortcode: function shortcode(_ref10) {
              var _ref10$named$button_t = _ref10.named.button_text,
                  button_text = _ref10$named$button_t === void 0 ? '' : _ref10$named$button_t;
              return button_text;
            }
          },
          button_link: {
            type: 'string',
            shortcode: function shortcode(_ref11) {
              var _ref11$named$button_l = _ref11.named.button_link,
                  button_link = _ref11$named$button_l === void 0 ? '' : _ref11$named$button_l;
              return button_link;
            }
          },
          tag_image: {
            type: 'integer',
            shortcode: function shortcode(_ref12) {
              var _ref12$named$tag_imag = _ref12.named.tag_image,
                  tag_image = _ref12$named$tag_imag === void 0 ? '' : _ref12$named$tag_imag;
              return tag_image;
            }
          },
          focus_tag_image: {
            type: 'string',
            shortcode: function shortcode(_ref13) {
              var _ref13$named$focus_ta = _ref13.named.focus_tag_image,
                  focus_tag_image = _ref13$named$focus_ta === void 0 ? '' : _ref13$named$focus_ta;
              return focus_tag_image;
            }
          }
        }
      }]
    },
    attributes: {
      select_issue: {
        type: 'number',
        default: 0
      },
      title: {
        type: 'string'
      },
      issue_description: {
        type: 'string'
      },
      issue_link_text: {
        type: 'string'
      },
      issue_link_path: {
        type: 'string'
      },
      issue_image: {
        type: 'number'
      },
      focus_issue_image: {
        type: 'string'
      },
      select_tag: {
        type: 'number',
        default: 0
      },
      tag_description: {
        type: 'string'
      },
      button_text: {
        type: 'string'
      },
      button_link: {
        type: 'string'
      },
      tag_image: {
        type: 'number'
      },
      focus_tag_image: {
        type: 'string'
      }
    },
    edit: withSelect(function (select, props) {
      var tagsTaxonomy = 'post_tag';
      var issuePage = 'page';
      var taxonomy_args = {
        hide_empty: false,
        per_page: 50
      };

      var _select = select('core'),
          getEntityRecords = _select.getEntityRecords; // We should probably wrap all these in a single call,
      // or maybe use our own way of retrieving data from the
      // API, I don't know how this scales.


      var tagsList = getEntityRecords('taxonomy', tagsTaxonomy, taxonomy_args);
      var issue_page_args = {
        per_page: -1,
        sort_order: 'asc',
        sort_column: 'post_title',
        parent: window.p4ge_vars.planet4_options.explore_page,
        post_status: 'publish'
      };
      var issuepageList = getEntityRecords('postType', issuePage, issue_page_args);
      var attributes = props.attributes;
      var issue_image = attributes.issue_image,
          tag_image = attributes.tag_image;
      var issue_image_url = '';

      if (issue_image) {
        issue_image_url = select('core').getMedia(issue_image);

        if (issue_image_url) {
          issue_image_url = issue_image_url.media_details.sizes.medium.source_url;
        }
      }

      var tag_image_url = '';

      if (tag_image) {
        tag_image_url = select('core').getMedia(tag_image);

        if (tag_image_url) {
          tag_image_url = tag_image_url.media_details.sizes.medium.source_url;
        }
      }

      return {
        tagsList: tagsList,
        issuepageList: issuepageList,
        issue_image_url: issue_image_url,
        tag_image_url: tag_image_url
      };
    })(function (_ref14) {
      var tagsList = _ref14.tagsList,
          issuepageList = _ref14.issuepageList,
          issue_image_url = _ref14.issue_image_url,
          tag_image_url = _ref14.tag_image_url,
          isSelected = _ref14.isSelected,
          attributes = _ref14.attributes,
          setAttributes = _ref14.setAttributes;

      if (!tagsList || !issuepageList) {
        return "Populating block's fields...";
      }

      if (tagsList && tagsList.length === 0 || issuepageList && issuepageList.length === 0) {
        return "Populating block's fields...";
      }

      function onSelectIssue(value) {
        setAttributes({
          select_issue: parseInt(value)
        });
      }

      function onIssueTitleChange(value) {
        setAttributes({
          title: value
        });
      }

      function onIssueDescriptionChange(value) {
        setAttributes({
          issue_description: value
        });
      }

      function onIssueLinkTextChange(value) {
        setAttributes({
          issue_link_text: value
        });
      }

      function onIssueLinkPathChange(value) {
        setAttributes({
          issue_link_path: value
        });
      }

      function onSelectIssueImage(_ref15) {
        var id = _ref15.id;
        setAttributes({
          issue_image: id
        });
      }

      function onIssueImageFocalPointChange(_ref16) {
        var x = _ref16.x,
            y = _ref16.y;
        setAttributes({
          focus_issue_image: parseInt(x * 100) + '% ' + parseInt(y * 100) + '%'
        });
      }

      function onSelectTag(value) {
        setAttributes({
          select_tag: parseInt(value)
        });
      }

      function onTagDescriptionChange(value) {
        setAttributes({
          tag_description: value
        });
      }

      function onButtonTextChange(value) {
        setAttributes({
          button_text: value
        });
      }

      function onButtonLinkChange(value) {
        setAttributes({
          button_link: value
        });
      }

      function onSelectCampaignImage(_ref17) {
        var id = _ref17.id;
        setAttributes({
          tag_image: id
        });
      }

      function onCampaignImageFocalPointChange(_ref18) {
        var x = _ref18.x,
            y = _ref18.y;
        setAttributes({
          focus_tag_image: parseInt(x * 100) + '% ' + parseInt(y * 100) + '%'
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Splittwocolumns__WEBPACK_IMPORTED_MODULE_3__["Splittwocolumns"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        tagsList: tagsList,
        issuepageList: issuepageList,
        issue_image_url: issue_image_url,
        tag_image_url: tag_image_url,
        onSelectIssue: onSelectIssue,
        onIssueTitleChange: onIssueTitleChange,
        onIssueDescriptionChange: onIssueDescriptionChange,
        onIssueLinkTextChange: onIssueLinkTextChange,
        onIssueLinkPathChange: onIssueLinkPathChange,
        onSelectIssueImage: onSelectIssueImage,
        onIssueImageFocalPointChange: onIssueImageFocalPointChange,
        onSelectTag: onSelectTag,
        onTagDescriptionChange: onTagDescriptionChange,
        onButtonTextChange: onButtonTextChange,
        onButtonLinkChange: onButtonLinkChange,
        onSelectCampaignImage: onSelectCampaignImage,
        onCampaignImageFocalPointChange: onCampaignImageFocalPointChange
      }));
    }),
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Submenu/MenuLevel.js":
/*!******************************************************!*\
  !*** ./react-blocks/src/blocks/Submenu/MenuLevel.js ***!
  \******************************************************/
/*! exports provided: MenuLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLevel", function() { return MenuLevel; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);








var MenuLevel =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MenuLevel, _Component);

  function MenuLevel(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MenuLevel);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MenuLevel).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MenuLevel, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, "Level ", this.props.index + 1), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: "Submenu item",
        help: "Submenu item",
        value: this.props.heading,
        options: [{
          label: 'None',
          value: '0'
        }, {
          label: 'Heading 1',
          value: '1'
        }, {
          label: 'Heading 2',
          value: '2'
        }, {
          label: 'Heading 3',
          value: '3'
        }, {
          label: 'Heading 4',
          value: '4'
        }, {
          label: 'Heading 5',
          value: '5'
        }, {
          label: 'Heading 6',
          value: '6'
        }],
        onChange: function onChange(e) {
          return _this.props.onHeadingChange(_this.props.index, e);
        },
        className: "submenu-block-attribute-wrapper"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["CheckboxControl"], {
        heading: "Link",
        help: "Link item",
        value: this.props.link,
        checked: this.props.link,
        onChange: function onChange(e) {
          return _this.props.onLinkChange(_this.props.index, e);
        },
        className: "submenu-level-link"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: "List style",
        help: "List style",
        value: this.props.style,
        options: [{
          label: 'None',
          value: 'none'
        }, {
          label: 'Bullet',
          value: 'bullet'
        }, {
          label: 'Number',
          value: 'number'
        }],
        onChange: function onChange(e) {
          return _this.props.onStyleChange(_this.props.index, e);
        },
        className: "submenu-block-attribute-wrapper"
      }));
    }
  }]);

  return MenuLevel;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Submenu/Submenu.js":
/*!****************************************************!*\
  !*** ./react-blocks/src/blocks/Submenu/Submenu.js ***!
  \****************************************************/
/*! exports provided: Submenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submenu", function() { return Submenu; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LayoutSelector/LayoutSelector */ "./react-blocks/src/components/LayoutSelector/LayoutSelector.js");
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");
/* harmony import */ var _MenuLevel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MenuLevel */ "./react-blocks/src/blocks/Submenu/MenuLevel.js");












var Submenu =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Submenu, _Component);

  function Submenu(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Submenu);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Submenu).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Submenu, [{
    key: "renderEdit",
    value: function renderEdit() {
      var _this = this;

      var __ = wp.i18n.__;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h2", null, __('Anchor Link Submenu', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("i", null, __('An in-page table of contents to help users have a sense of what\'s on the page and let them jump to a topic they are interested in.', 'p4ge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("h3", null, __('What style of menu do you need?', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_LayoutSelector_LayoutSelector__WEBPACK_IMPORTED_MODULE_9__["LayoutSelector"], {
        selectedOption: this.props.submenu_style,
        onSelectedLayoutChange: this.props.onSelectedLayoutChange,
        options: [{
          label: __('Long full-width', 'p4ge'),
          image: window.p4ge_vars.home + 'images/submenu-long.jpg',
          value: 1,
          help: __('Use: on long pages (more than 5 screens) when list items are long (+ 10 words)<br>No max items<br>recommended.')
        }, {
          label: __('Short full-width', 'p4ge'),
          image: window.p4ge_vars.home + 'images/submenu-short.jpg',
          value: 2,
          help: __('Use: on long pages (more than 5 screens) when list items are short (up to 5 words)<br>No max items<br>recommended.')
        }, {
          label: __('Short sidebar', 'p4ge'),
          image: window.p4ge_vars.home + 'images/submenu-sidebar.jpg',
          value: 3,
          help: __('Use: on long pages (more than 5 screens) when list items are short (up to 10 words)<br>Max items<br>recommended: 9')
        }]
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TextControl"], {
        label: "Submenu Title",
        placeholder: "Enter title",
        value: this.props.title,
        onChange: this.props.onTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("hr", null), this.props.levels.map(function (heading, i) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_MenuLevel__WEBPACK_IMPORTED_MODULE_11__["MenuLevel"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, heading, {
          onHeadingChange: _this.props.onHeadingChange,
          onLinkChange: _this.props.onLinkChange,
          onStyleChange: _this.props.onStyleChange,
          index: i,
          key: i
        }));
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isPrimary: true,
        onClick: this.props.addLevel,
        disabled: this.props.levels.length >= 3 || this.props.levels.slice(-1)[0].heading === 0
      }, "Add level"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isDefault: true,
        onClick: this.props.removeLevel,
        disabled: this.props.levels.length <= 1
      }, "Remove level")));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_10__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ServerSideRender"], {
        block: 'planet4-blocks/submenu',
        attributes: {
          submenu_style: this.props.submenu_style,
          title: this.props.title,
          levels: this.props.levels
        },
        urlQueryArgs: {
          post_id: document.querySelector('#post_ID').value
        }
      })));
    }
  }]);

  return Submenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Submenu/SubmenuBlock.js":
/*!*********************************************************!*\
  !*** ./react-blocks/src/blocks/Submenu/SubmenuBlock.js ***!
  \*********************************************************/
/*! exports provided: SubmenuBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuBlock", function() { return SubmenuBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Submenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Submenu.js */ "./react-blocks/src/blocks/Submenu/Submenu.js");




var SubmenuBlock = function SubmenuBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SubmenuBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  var withSelect = wp.data.withSelect;
  registerBlockType('planet4-blocks/submenu', {
    title: 'Submenu',
    icon: 'welcome-widgets-menus',
    category: 'planet4-blocks',
    supports: {
      multiple: false // Use the block just once per post.

    },

    /**
     * Transforms old 'shortcake' shortcode to new gutenberg block.
     *
     * old block-shortcode:
     * [shortcake_submenu submenu_style="3" title="title22" heading1="2"
     *                    link1="true" style1="bullet" heading2="3" link2="true" style2="number"
     *                    heading3="4" link3="false"
     * /]
     *
     * new block-gutenberg:
     * <!-- wp:planet4-blocks/submenu {"submenu_style":3,"title":"title22","levels":[{"heading":"2","link":"true","style":"bullet"},
     *    {"heading":"3","link":"true","style":"number"},{"heading":"4","link":"false","style":"none"}]} /-->
     *
     */
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        // This `shortcode` definition will be used as a callback,
        // it is a function which expects an object with at least
        // a `named` key with `cover_type` property whose default value is 1.
        // See: https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6
        tag: 'shortcake_submenu',
        attributes: {
          submenu_style: {
            type: 'integer',
            shortcode: function shortcode(attributes) {
              return Number(attributes.named.submenu_style);
            }
          },
          title: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.title;
            }
          },
          levels: {
            type: 'array',
            shortcode: function shortcode(attributes) {
              var levels = [];

              if (attributes.named.heading1 > 0) {
                var level = {
                  heading: Number(attributes.named.heading1),
                  link: attributes.named.link1 || false,
                  style: attributes.named.style1 || 'none'
                };
                levels.push(Object.assign({}, level));

                if (attributes.named.heading2 > 0) {
                  var _level = {
                    heading: Number(attributes.named.heading2),
                    link: attributes.named.link2 || false,
                    style: attributes.named.style2 || 'none'
                  };
                  levels.push(Object.assign({}, _level));

                  if (attributes.named.heading3 > 0) {
                    var _level2 = {
                      heading: Number(attributes.named.heading3),
                      link: attributes.named.link3 || false,
                      style: attributes.named.style3 || 'none'
                    };
                    levels.push(Object.assign({}, _level2));
                  }
                }
              }

              return levels;
            }
          }
        }
      }]
    },
    attributes: {
      submenu_style: {
        type: 'integer',
        default: 1
      },
      title: {
        type: 'string'
      },
      levels: {
        type: 'array',
        default: [{
          heading: 0,
          link: false,
          style: 'none'
        }]
      }
    },
    edit: withSelect(function (select) {})(function (_ref) {
      var isSelected = _ref.isSelected,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      function addLevel() {
        setAttributes({
          levels: attributes.levels.concat({
            heading: 0,
            link: false,
            style: 'none'
          })
        });
      }

      function onTitleChange(value) {
        setAttributes({
          title: value
        });
      }

      function onHeadingChange(index, value) {
        var levels = JSON.parse(JSON.stringify(attributes.levels));
        levels[index].heading = Number(value);
        setAttributes({
          levels: levels
        });
      }

      function onLayoutChange(value) {
        setAttributes({
          submenu_style: Number(value)
        });
      }

      function onLinkChange(index, value) {
        var levels = JSON.parse(JSON.stringify(attributes.levels));
        levels[index].link = value;
        setAttributes({
          levels: levels
        });
      }

      function onStyleChange(index, value) {
        var levels = JSON.parse(JSON.stringify(attributes.levels));
        levels[index].style = value;
        setAttributes({
          levels: levels
        });
      }

      function removeLevel() {
        setAttributes({
          levels: attributes.levels.slice(0, -1)
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Submenu_js__WEBPACK_IMPORTED_MODULE_3__["Submenu"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onSelectedLayoutChange: onLayoutChange,
        onTitleChange: onTitleChange,
        onHeadingChange: onHeadingChange,
        onLinkChange: onLinkChange,
        onStyleChange: onStyleChange,
        addLevel: addLevel,
        removeLevel: removeLevel
      }));
    }),
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/blocks/Timeline/Timeline.js":
/*!******************************************************!*\
  !*** ./react-blocks/src/blocks/Timeline/Timeline.js ***!
  \******************************************************/
/*! exports provided: Timeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Preview */ "./react-blocks/src/components/Preview.js");










var Timeline =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Timeline, _Component);

  function Timeline(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Timeline);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Timeline).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Timeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTimeline(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.loadTimeline(prevProps);
    }
  }, {
    key: "loadTimeline",
    value: function loadTimeline(data) {
      var timelinejs_version = '3.6.3';
      var js = 'https://cdn.knightlab.com/libs/timeline3/' + timelinejs_version + '/js/timeline-min.js';
      var scriptLoaded = this.loadScriptAsync(js);
      scriptLoaded.then(function () {
        new TL.Timeline('timeline-1', data.google_sheets_url, {
          "timenav_position": data.timenav_position,
          "start_at_end": data.start_at_end,
          "language": data.language
        });
      }.bind(this));
    }
  }, {
    key: "loadScriptAsync",
    value: function loadScriptAsync(uri) {
      return new Promise(function (resolve, reject) {
        var tag = document.createElement('script');
        tag.src = uri;
        tag.async = true;

        tag.onload = function () {
          resolve();
        };

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(tag);
      });
    }
  }, {
    key: "renderEdit",
    value: function renderEdit() {
      var _this = this;

      var __ = wp.i18n.__;
      var position = [{
        label: 'Bottom',
        value: 'bottom'
      }, {
        label: 'Top',
        value: 'top'
      }];
      var languages = [{
        label: 'Afrikaans',
        value: 'af'
      }, {
        label: 'Arabic',
        value: 'ar'
      }, {
        label: 'Armenian',
        value: 'hy'
      }, {
        label: 'Basque',
        value: 'eu'
      }, {
        label: 'Belarusian',
        value: 'be'
      }, {
        label: 'Bulgarian',
        value: 'bg'
      }, {
        label: 'Catalan',
        value: 'ca'
      }, {
        label: 'Chinese',
        value: 'zh-cn'
      }, {
        label: 'Croatian / Hrvatski',
        value: 'hr'
      }, {
        label: 'Czech',
        value: 'cz'
      }, {
        label: 'Danish',
        value: 'da'
      }, {
        label: 'Dutch',
        value: 'nl'
      }, {
        label: 'English',
        value: 'en'
      }, {
        label: 'English (24-hour time)',
        value: 'en-24hr'
      }, {
        label: 'Esperanto',
        value: 'eo'
      }, {
        label: 'Estonian',
        value: 'et'
      }, {
        label: 'Faroese',
        value: 'fo'
      }, {
        label: 'Farsi',
        value: 'fa'
      }, {
        label: 'Finnish',
        value: 'fi'
      }, {
        label: 'French',
        value: 'fr'
      }, {
        label: 'Frisian',
        value: 'fy'
      }, {
        label: 'Galician',
        value: 'gl'
      }, {
        label: 'Georgian',
        value: 'ka'
      }, {
        label: 'German / Deutsch',
        value: 'de'
      }, {
        label: 'Greek',
        value: 'el'
      }, {
        label: 'Hebrew',
        value: 'he'
      }, {
        label: 'Hindi',
        value: 'hi'
      }, {
        label: 'Hungarian',
        value: 'hu'
      }, {
        label: 'Icelandic',
        value: 'is'
      }, {
        label: 'Indonesian',
        value: 'id'
      }, {
        label: 'Irish',
        value: 'ga'
      }, {
        label: 'Italian',
        value: 'it'
      }, {
        label: 'Japanese',
        value: 'ja'
      }, {
        label: 'Korean',
        value: 'ko'
      }, {
        label: 'Latvian',
        value: 'lv'
      }, {
        label: 'Lithuanian',
        value: 'lt'
      }, {
        label: 'Luxembourgish',
        value: 'lb'
      }, {
        label: 'Malay',
        value: 'ms'
      }, {
        label: 'Myanmar',
        value: 'my'
      }, {
        label: 'Nepali',
        value: 'ne'
      }, {
        label: 'Norwegian',
        value: 'no'
      }, {
        label: 'Polish',
        value: 'pl'
      }, {
        label: 'Portuguese',
        value: 'pt'
      }, {
        label: 'pt-br',
        value: 'Portuguese (Brazilian)'
      }, {
        label: 'Romanian',
        value: 'ro'
      }, {
        label: 'Romansh',
        value: 'rm'
      }, {
        label: 'Russian',
        value: 'ru'
      }, {
        label: 'Serbian - Cyrillic',
        value: 'sr-cy'
      }, {
        label: 'Serbian - Latin',
        value: 'sr'
      }, {
        label: 'Sinhalese',
        value: 'si'
      }, {
        label: 'Slovak',
        value: 'sk'
      }, {
        label: 'Slovenian',
        value: 'sl'
      }, {
        label: 'Spanish',
        value: 'es'
      }, {
        label: 'Swedish',
        value: 'sv'
      }, {
        label: 'Tagalog',
        value: 'tl'
      }, {
        label: 'Tamil',
        value: 'ta'
      }, {
        label: 'Taiwanese',
        value: 'zh-tw'
      }, {
        label: 'Telugu',
        value: 'te'
      }, {
        label: 'Thai',
        value: 'th'
      }, {
        label: 'Turkish',
        value: 'tr'
      }, {
        label: 'Ukrainian',
        value: 'uk'
      }, {
        label: 'Urdu',
        value: 'ur'
      }];

      var url_desc = __('Enter the URL of the Google Sheets spreadsheet containing your timeline data.', 'p4ge');

      url_desc += '<br><a href="https://timeline.knightlab.com/#make" target="_blank" rel="noopener noreferrer">';
      url_desc += __('See the TimelineJS website for a template GSheet.', 'p4ge');
      url_desc += '</a><br>';
      url_desc += __('Copy this, add your own timeline data, and publish to the web.', 'p4ge');
      url_desc += '<br>';
      url_desc += __("Once you have done so, use the URL from your address bar (not the one provided in Google's 'publish to web' dialog).", 'p4ge');
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("h2", null, __('Timeline options', 'p4ge')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("i", null, __('Display a timeline from a Google Sheet', 'p4ge'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Timeline Title', 'p4ge'),
        placeholder: __('Enter title', 'p4ge'),
        value: this.props.timeline_title,
        onChange: this.props.onTimelineTitleChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
        label: __('Description', 'p4ge'),
        placeholder: __('Enter description', 'p4ge'),
        value: this.props.description,
        onChange: this.props.onDescriptionChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: __('Google Sheets URL', 'p4ge'),
        placeholder: __('Enter URL', 'p4ge'),
        help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["RawHTML"], null, url_desc),
        value: this.props.google_sheets_url,
        onChange: this.props.onGoogleSheetsUrlChange
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: __('Language', 'p4ge'),
        value: this.props.language,
        options: languages,
        onChange: function onChange(e) {
          return _this.props.onLanguageChange(e);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: __('Timeline navigation position', 'p4ge'),
        value: this.props.timenav_position,
        options: position,
        onChange: function onChange(e) {
          return _this.props.onTimenavPositionChange(e);
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["CheckboxControl"], {
        label: __('Start at end', 'p4ge'),
        help: __('Begin at the end of the timeline', 'p4ge'),
        value: this.props.start_at_end,
        checked: this.props.start_at_end,
        onChange: function onChange(e) {
          return _this.props.onStartAtEndChange(e);
        }
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, this.props.isSelected ? this.renderEdit() : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_components_Preview__WEBPACK_IMPORTED_MODULE_8__["Preview"], {
        showBar: this.props.isSelected
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ServerSideRender"], {
        block: 'planet4-blocks/timeline',
        attributes: {
          timeline_title: this.props.timeline_title,
          description: this.props.description,
          google_sheets_url: this.props.google_sheets_url,
          language: this.props.language,
          timenav_position: this.props.timenav_position,
          start_at_end: this.props.start_at_end
        },
        urlQueryArgs: {
          post_id: document.querySelector('#post_ID').value
        }
      })));
    }
  }]);

  return Timeline;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/blocks/Timeline/TimelineBlock.js":
/*!***********************************************************!*\
  !*** ./react-blocks/src/blocks/Timeline/TimelineBlock.js ***!
  \***********************************************************/
/*! exports provided: TimelineBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineBlock", function() { return TimelineBlock; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timeline.js */ "./react-blocks/src/blocks/Timeline/Timeline.js");




var __ = wp.i18n.__;
var TimelineBlock = function TimelineBlock() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TimelineBlock);

  var registerBlockType = wp.blocks.registerBlockType;
  registerBlockType('planet4-blocks/timeline', {
    title: __('Timeline', 'p4ge'),
    icon: 'clock',
    category: 'planet4-blocks',
    // Transform the shortcode into a Gutenberg block
    // this is used when a user clicks "Convert to blocks"
    // on the "Classic Editor" block
    transforms: {
      from: [{
        type: 'shortcode',
        // Shortcode tag can also be an array of shortcode aliases
        tag: 'shortcake_timeline',
        attributes: {
          timeline_title: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.timeline_title;
            }
          },
          description: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.description;
            }
          },
          google_sheets_url: {
            type: 'string',
            shortcode: function shortcode(attributes) {
              return attributes.named.google_sheets_url;
            }
          },
          language: {
            type: 'array',
            shortcode: function shortcode(attributes) {
              return attributes.named.language;
            }
          },
          timenav_position: {
            type: 'array',
            shortcode: function shortcode(attributes) {
              return attributes.named.timenav_position;
            }
          },
          start_at_end: {
            type: 'boolean',
            shortcode: function shortcode(attributes) {
              return attributes.named.start_at_end;
            }
          }
        }
      }]
    },
    attributes: {
      timeline_title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      google_sheets_url: {
        type: 'string'
      },
      language: {
        type: 'string',
        default: 'en'
      },
      timenav_position: {
        type: 'string'
      },
      start_at_end: {
        type: 'boolean'
      }
    },
    edit: function edit(_ref) {
      var isSelected = _ref.isSelected,
          attributes = _ref.attributes,
          setAttributes = _ref.setAttributes;

      function onTimelineTitleChange(value) {
        setAttributes({
          timeline_title: value
        });
      }

      function onDescriptionChange(value) {
        setAttributes({
          description: value
        });
      }

      function onGoogleSheetsUrlChange(value) {
        setAttributes({
          google_sheets_url: value
        });
      }

      function onLanguageChange(value) {
        setAttributes({
          language: value
        });
      }

      function onTimenavPositionChange(value) {
        setAttributes({
          timenav_position: value
        });
      }

      function onStartAtEndChange(value) {
        setAttributes({
          start_at_end: value
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_Timeline_js__WEBPACK_IMPORTED_MODULE_3__["Timeline"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attributes, {
        isSelected: isSelected,
        onTimelineTitleChange: onTimelineTitleChange,
        onDescriptionChange: onDescriptionChange,
        onGoogleSheetsUrlChange: onGoogleSheetsUrlChange,
        onLanguageChange: onLanguageChange,
        onTimenavPositionChange: onTimenavPositionChange,
        onStartAtEndChange: onStartAtEndChange
      }));
    },
    save: function save() {
      return null;
    }
  });
};

/***/ }),

/***/ "./react-blocks/src/components/ImageOrButton/ImageOrButton.js":
/*!********************************************************************!*\
  !*** ./react-blocks/src/components/ImageOrButton/ImageOrButton.js ***!
  \********************************************************************/
/*! exports provided: ImageOrButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageOrButton", function() { return ImageOrButton; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__);









var ImageOrButton =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ImageOrButton, _Component);

  function ImageOrButton(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ImageOrButton);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ImageOrButton).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ImageOrButton, [{
    key: "render",
    value: function render() {
      var _this = this;

      var __ = wp.i18n.__;

      var getImageOrButton = function getImageOrButton(openEvent) {
        if (_this.props.imageId) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
            src: _this.props.imageUrl,
            onClick: openEvent,
            className: _this.props.imgClass
          });
        } else {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
            className: "button-container"
          }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            onClick: openEvent,
            className: "button"
          }, _this.props.buttonLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, _this.props.help));
        }
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "ImageOrButton"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        title: this.props.title,
        type: "image",
        onSelect: this.props.onSelectImage,
        value: this.props.imageId,
        allowedTypes: ['image'],
        render: function render(_ref) {
          var open = _ref.open;
          return getImageOrButton(open);
        }
      })));
    }
  }]);

  return ImageOrButton;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/components/LayoutSelector/LayoutSelector.js":
/*!**********************************************************************!*\
  !*** ./react-blocks/src/components/LayoutSelector/LayoutSelector.js ***!
  \**********************************************************************/
/*! exports provided: LayoutSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSelector", function() { return LayoutSelector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);









var LayoutSelector =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LayoutSelector, _Component);

  function LayoutSelector(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LayoutSelector);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LayoutSelector).call(this, props));
    _this.state = {
      selectedOption: props.selectedOption
    };
    _this.setSelected = _this.setSelected.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LayoutSelector, [{
    key: "setSelected",
    value: function setSelected(option) {
      this.setState({
        selectedOption: option
      });
      this.props.onSelectedLayoutChange(option);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "LayoutSelector"
      }, this.props.options.map(function (layoutOption, i) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
          className: "LayoutOption",
          key: i
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          style: {
            display: 'flex'
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RadioControl"], {
          name: 'layoutOption',
          selected: _this2.state.selectedOption,
          options: [{
            value: layoutOption.value
          }],
          onChange: _this2.setSelected
        }), layoutOption.label), layoutOption.image ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
          src: layoutOption.image
        }) : null, layoutOption.help ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("p", {
          className: "help",
          dangerouslySetInnerHTML: {
            __html: layoutOption.help
          }
        }) : null);
      }));
    }
  }]);

  return LayoutSelector;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ }),

/***/ "./react-blocks/src/components/Preview.js":
/*!************************************************!*\
  !*** ./react-blocks/src/components/Preview.js ***!
  \************************************************/
/*! exports provided: Preview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preview", function() { return Preview; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var Preview =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Preview, _Component);

  function Preview() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Preview);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Preview).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Preview, [{
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "Preview"
      }, this.props.showBar ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "PreviewBar"
      }, "Preview") : null, this.props.children);
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ }),

/***/ "./react-blocks/src/editorIndex.js":
/*!*****************************************!*\
  !*** ./react-blocks/src/editorIndex.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_Articles_ArticlesBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/Articles/ArticlesBlock */ "./react-blocks/src/blocks/Articles/ArticlesBlock.js");
/* harmony import */ var _blocks_Columns_ColumnsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/Columns/ColumnsBlock */ "./react-blocks/src/blocks/Columns/ColumnsBlock.js");
/* harmony import */ var _blocks_Cookies_CookiesBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Cookies/CookiesBlock */ "./react-blocks/src/blocks/Cookies/CookiesBlock.js");
/* harmony import */ var _blocks_Counter_CounterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/Counter/CounterBlock */ "./react-blocks/src/blocks/Counter/CounterBlock.js");
/* harmony import */ var _blocks_Covers_CoversBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/Covers/CoversBlock */ "./react-blocks/src/blocks/Covers/CoversBlock.js");
/* harmony import */ var _blocks_Gallery_GalleryBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/Gallery/GalleryBlock */ "./react-blocks/src/blocks/Gallery/GalleryBlock.js");
/* harmony import */ var _blocks_Happypoint_HappypointBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/Happypoint/HappypointBlock */ "./react-blocks/src/blocks/Happypoint/HappypointBlock.js");
/* harmony import */ var _blocks_Media_MediaBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/Media/MediaBlock */ "./react-blocks/src/blocks/Media/MediaBlock.js");
/* harmony import */ var _blocks_Socialmedia_SocialmediaBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/Socialmedia/SocialmediaBlock */ "./react-blocks/src/blocks/Socialmedia/SocialmediaBlock.js");
/* harmony import */ var _blocks_Splittwocolumns_SplittwocolumnsBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/Splittwocolumns/SplittwocolumnsBlock */ "./react-blocks/src/blocks/Splittwocolumns/SplittwocolumnsBlock.js");
/* harmony import */ var _blocks_Submenu_SubmenuBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/Submenu/SubmenuBlock */ "./react-blocks/src/blocks/Submenu/SubmenuBlock.js");
/* harmony import */ var _blocks_Timeline_TimelineBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/Timeline/TimelineBlock */ "./react-blocks/src/blocks/Timeline/TimelineBlock.js");












var articlesBlock = new _blocks_Articles_ArticlesBlock__WEBPACK_IMPORTED_MODULE_0__["ArticlesBlock"]();
var columnsBlock = new _blocks_Columns_ColumnsBlock__WEBPACK_IMPORTED_MODULE_1__["ColumnsBlock"]();
var cookiesBlock = new _blocks_Cookies_CookiesBlock__WEBPACK_IMPORTED_MODULE_2__["CookiesBlock"]();
var counterBlock = new _blocks_Counter_CounterBlock__WEBPACK_IMPORTED_MODULE_3__["CounterBlock"]();
var coversBlock = new _blocks_Covers_CoversBlock__WEBPACK_IMPORTED_MODULE_4__["CoversBlock"]();
var galleryBlock = new _blocks_Gallery_GalleryBlock__WEBPACK_IMPORTED_MODULE_5__["GalleryBlock"]();
var happypointBlock = new _blocks_Happypoint_HappypointBlock__WEBPACK_IMPORTED_MODULE_6__["HappypointBlock"]();
var mediaBlock = new _blocks_Media_MediaBlock__WEBPACK_IMPORTED_MODULE_7__["MediaBlock"]();
var socialmediaBlock = new _blocks_Socialmedia_SocialmediaBlock__WEBPACK_IMPORTED_MODULE_8__["SocialmediaBlock"]();
var splittwocolumnsBlock = new _blocks_Splittwocolumns_SplittwocolumnsBlock__WEBPACK_IMPORTED_MODULE_9__["SplittwocolumnsBlock"]();
var submenuBlock = new _blocks_Submenu_SubmenuBlock__WEBPACK_IMPORTED_MODULE_10__["SubmenuBlock"]();
var timelineBlock = new _blocks_Timeline_TimelineBlock__WEBPACK_IMPORTED_MODULE_11__["TimelineBlock"]();

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editorIndex.js.map