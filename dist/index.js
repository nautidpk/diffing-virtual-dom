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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tagName) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var vElem = Object.create(null);\n  Object.assign(vElem, {\n    tagName: tagName,\n    attrs: opts.attrs || Object.create({}),\n    children: opts.children || []\n  });\n  return vElem;\n});\n\n//# sourceURL=webpack:///./src/createElement.js?");

/***/ }),

/***/ "./src/diffing.js":
/*!************************!*\
  !*** ./src/diffing.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar diffAttr = function diffAttr(vOldAttrs, vNewAttrs) {\n  var patches = [];\n\n  var _loop = function _loop() {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n        k = _Object$entries$_i[0],\n        v = _Object$entries$_i[1];\n\n    patches.push(function ($node) {\n      $node.setAttribute(k, v);\n      return $node;\n    });\n  };\n\n  for (var _i = 0, _Object$entries = Object.entries(vNewAttrs); _i < _Object$entries.length; _i++) {\n    _loop();\n  }\n\n  var _loop2 = function _loop2() {\n    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),\n        k = _Object$entries2$_i[0],\n        v = _Object$entries2$_i[1];\n\n    if (k in vOldAttrs) {} else {\n      patches.push(function ($node) {\n        $node.removeAttribute(k);\n        return $node;\n      });\n    }\n  };\n\n  for (var _i2 = 0, _Object$entries2 = Object.entries(vOldAttrs); _i2 < _Object$entries2.length; _i2++) {\n    _loop2();\n  }\n\n  return function ($node) {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = patches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var patch = _step.value;\n        patch($node);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    return $node;\n  };\n};\n\nvar diffChildren = function diffChildren(vOldChilds, vNewChilds) {\n  var childPatches = [];\n  vOldChilds.forEach(function (child, i) {\n    childPatches.push(diffVApp(child, vNewChilds[i]));\n  });\n  var additionalPatches = [];\n\n  if (vNewChilds.length > vOldChilds.length) {\n    var _loop3 = function _loop3(i) {\n      additionalPatches.push(function ($parent) {\n        $parent.appendChild(Object(_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vNewChilds[i]));\n        return $parent;\n      });\n    };\n\n    for (var i = vOldChilds.length; i < vNewChilds.length; i++) {\n      _loop3(i);\n    }\n  }\n\n  return function ($parent) {\n    $parent.childNodes.forEach(function ($child, i) {\n      childPatches[i]($child);\n    });\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = additionalPatches[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var patch = _step2.value;\n        patch($parent);\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n          _iterator2[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n\n    return $parent;\n  };\n};\n\nvar diffVApp = function diffVApp(vOldApp, vNewApp) {\n  if (!vNewApp) return function ($node) {\n    $node.remove();\n    return undefined;\n  };\n\n  if (typeof vOldApp == 'string' || typeof vNewApp == 'string') {\n    if (vOldApp != vNewApp) {\n      return function ($node) {\n        var $newNode = Object(_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(vNewApp);\n        $node.replaceWith($newNode);\n        return $newNode;\n      };\n    } else {\n      return function ($node) {\n        return $node;\n      };\n    }\n  }\n\n  if (vOldApp.tagName != vNewApp.tagName) {\n    return function ($node) {\n      var $newNode = createVapp(vNewApp);\n      $node.replaceWith($newNode);\n      return $newNode;\n    };\n  }\n\n  var patchAttrs = diffAttr(vOldApp.attrs, vNewApp.attrs);\n  var patchChilds = diffChildren(vOldApp.children, vNewApp.children);\n  return function ($node) {\n    patchAttrs($node);\n    patchChilds($node);\n    return $node;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (diffVApp);\n\n//# sourceURL=webpack:///./src/diffing.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _diffing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diffing.js */ \"./src/diffing.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\n\nvar mount = function mount($elem, $target) {\n  $target.replaceWith($elem);\n  return $elem;\n};\n\nvar createVapp = function createVapp(count) {\n  var vElem = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    attrs: {\n      id: 'app'\n    },\n    children: ['text node', 'count-------' + count + '-----'].concat(_toConsumableArray(Array.from({\n      length: count\n    }, function () {\n      return Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n        attrs: {\n          src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'\n        }\n      });\n    })))\n  });\n  return vElem;\n};\n\nvar count = 0;\nvar vOldApp = createVapp(count);\nvar $element = Object(_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vOldApp);\nvar $rootElem = document.getElementById('app');\n$rootElem = mount($element, $rootElem);\nsetInterval(function () {\n  count++;\n  var vNewApp = createVapp(count);\n  var patch = Object(_diffing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(vOldApp, vNewApp);\n  $rootElem = patch($rootElem);\n  vOldApp = vNewApp;\n}, 3000);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar render = function render(vNode) {\n  if (typeof vNode == 'string') return document.createTextNode(vNode);\n  var $el = document.createElement(vNode.tagName);\n  if ($el.nodeType == Node.TEXT_NODE) return $el;\n\n  for (var _i = 0, _Object$entries = Object.entries(vNode.attrs); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n        k = _Object$entries$_i[0],\n        v = _Object$entries$_i[1];\n\n    $el.setAttribute(k, v);\n  }\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = vNode.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var child = _step.value;\n      console.log(child);\n      $el.appendChild(render(child));\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return $el;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });