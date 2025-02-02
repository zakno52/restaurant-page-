/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/heroImg.jpg */ \"./src/img/heroImg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  color: white;\n}\n\nheader {\n  background-color: #1b1b1b;\n}\nnav {\n  width: 100vw;\n  height: 50px;\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  padding: 20px 15px;\n}\n.nav-links li {\n  list-style: none;\n  margin: 0 12px;\n}\n.nav-links li a {\n  color: white;\n  position: relative;\n  font-size: 1.3rem;\n  font-weight: 500;\n  padding: 6px 0;\n  text-decoration: none;\n}\n.nav-links li a:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  width: 0%;\n  background: white;\n  border-radius: 12px;\n  transition: all 0.4s ease;\n}\n.nav-links li a:hover:before {\n  width: 100%;\n}\n.nav-links li.center a:before {\n  left: 50%;\n  transform: translateX(-50%);\n}\n#content {\n  padding: 20vh 8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 70px);\n  width: 100vw;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),\n    url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n#content h1 {\n  position: absolute;\n  font-size: clamp(4rem, 17vw, 12rem);\n  top: 40%;\n  transform: translateY(0%);\n  letter-spacing: 38px;\n  text-align: center;\n  z-index: 1;\n}\n.logoAnimation1 {\n  font-size: clamp(4rem, 17vw, 7rem) !important;\n  top: 20% !important;\n  transform: translateY(-25%) !important;\n  transition: 1s;\n}\n.logoAnimation2 {\n  top: 15% !important;\n  font-size: 2.5rem !important;\n  transition: 1s;\n  letter-spacing: 20px !important;\n}\n.logoAnimation3 {\n  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff,\n    0 0 120px #fff;\n}\n\n.bookingContainer {\n  width: auto;\n  margin-top: 5rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  opacity: 0; /* Initially hidden */\n  transition: opacity 0.5s ease-out;\n}\n\n.bookingContainer form {\n  margin-top: 4rem;\n  background-color: #161616c4;\n  height: 100px;\n  border-radius: 21px;\n  display: flex;\n  justify-content: center;\n}\n.bookingContainer form > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 30px;\n}\n\n.bookingContainer form label {\n  margin-right: 10px;\n  font-weight: bold;\n}\n.bookingContainer form input,\nselect {\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  margin-right: 30px;\n  height: 30px;\n  padding: 2px 10px;\n\n  background-color: #fffffff2;\n}\n#tableNumber {\n  width: 150px;\n}\n.bookingContainer form button {\n  height: 40px;\n  width: 120px;\n  border-radius: 50px;\n  border: none;\n  background-color: #fffffff2;\n  color: #1b1b1b;\n  font-size: 1rem;\n  font-weight: bolder;\n  cursor: pointer;\n}\n.intro {\n  font-size: 1.2rem;\n  width: 50%;\n  line-height: 30px;\n}\n.dishContainer {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n  padding: 0 8rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n  min-height: calc(60vh - 70px);\n  width: 100vw;\n  justify-items: center;\n  align-items: start;\n  align-content: center;\n}\n.dishBox {\n  height: 140px;\n  max-width: 400px;\n  background-color: #1b1b1bbb;\n  border-radius: 21px;\n  padding: 20px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dishBox > .dishImg {\n  height: 100px;\n  width: 100px;\n  border-radius: 21px;\n}\n.dishBox > .dishInfo {\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.dishBox > .dishInfo > .dishName {\n  font-weight: bold;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n.dishBox > .dishInfo > .dishDesc {\n  font-size: 0.7rem;\n  line-height: 20px;\n}\n.dishBox > .dishInfo > .dishPrice {\n  font-size: 1.2rem;\n  align-self: flex-end;\n  margin-top: 10px;\n}\n\n.specialDishBox {\n  grid-area: 1/1/4/2;\n  min-height: calc(140px * 3 + 2rem);\n  max-width: 400px;\n  background-color: #1b1b1bbb;\n  border-radius: 21px;\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n.speacialDishTitle {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n.speacialDishImg {\n  width: 270px;\n  border-radius: 21px;\n}\n.speacialDishInfo {\n  padding: 0 20px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.speacialDishName {\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin: 1rem 0;\n}\n.speacialDishDesc {\n  font-size: 1.1rem;\n  line-height: 30px;\n}\n.speacialDishPrice {\n  font-size: 1.5rem;\n  align-self: flex-end;\n}\n\n.aboutContainer {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 2rem;\n}\n\n.aboutBox {\n  display: flex;\n  align-items: flex-start;\n  width: 920px;\n  padding-bottom: 1rem;\n  border-bottom: 2px rgba(255, 255, 255, 0.55) solid;\n}\n.aboutBox:nth-child(even) {\n  flex-direction: row-reverse;\n  text-align: right;\n}\n.aboutBox > img {\n  margin: 0 1rem;\n  width: 450px !important;\n  height: 300px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n\n.aboutTitle {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.aboutText {\n  font-size: 1.2rem;\n  line-height: 33px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _img_11_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/11.jpg */ \"./src/img/11.jpg\");\n/* harmony import */ var _img_22_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/22.jpg */ \"./src/img/22.jpg\");\n/* harmony import */ var _img_33_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/33.jpg */ \"./src/img/33.jpg\");\n/* harmony import */ var _img_chef_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/chef.jpg */ \"./src/img/chef.jpg\");\n\n\n\n\n\nconst container = document.createElement(\"div\");\ncontainer.classList.add(\"aboutContainer\");\nconst lorem =\n  \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \";\n\nclass AboutSection {\n  constructor(image, title, text) {\n    this.image = image;\n    this.title = title;\n    this.text = text;\n\n    const aboutBox = document.createElement(\"div\");\n    aboutBox.classList.add(\"aboutBox\");\n\n    aboutBox.innerHTML = `\n        <img class=\"aboutImg\" src=\"${image}\" alt=\"\">\n        <div class=\"aboutInfo\">\n        <div class=\"aboutTitle\">${title}</div>\n        <div class=\"aboutText\">${text}</div>\n        </div>`;\n\n    container.append(aboutBox);\n  }\n}\n//prettier-ignore\nfunction loadAbout() {\n  container.innerHTML = \"\";\n  \n  // logo animation\n  const logo = document.querySelector(\"h1\");\n  logo.classList.add(\"logoAnimation2\", \"logoAnimation3\");\n  logo.nextElementSibling?.remove();\n\n\n  //prettier-ignore\n  const chefSection= new AboutSection (_img_chef_jpg__WEBPACK_IMPORTED_MODULE_3__,\"Our Head Chef\",lorem)\n  const info1= new AboutSection (_img_11_jpg__WEBPACK_IMPORTED_MODULE_0__,\"Cozy Space\",lorem)\n  const info2= new AboutSection (_img_22_jpg__WEBPACK_IMPORTED_MODULE_1__,\"Music Space\",lorem)\n  const info3= new AboutSection (_img_33_jpg__WEBPACK_IMPORTED_MODULE_2__,\"Our History\",lorem)\n\n\n  setTimeout(() => {\n    container.style.opacity = \"1\";\n  }, 500);\n  \n  return container;\n}\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.js */ \"./src/hero.js\");\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n// Import all functions\n\n\n\n\n\nconst pageModule = (function () {\n  // variables\n  const navButtons = document.querySelectorAll(\".center\");\n  const output = document.getElementById(\"content\");\n\n  output.append((0,_hero_js__WEBPACK_IMPORTED_MODULE_1__.loadHero)());\n  // Private Methods\n  function showPage(index) {\n    if (index === 0) {\n      output.style.minHeight = \"calc(100vh - 70px)\";\n      output.append((0,_book_js__WEBPACK_IMPORTED_MODULE_2__.loadBook)());\n    }\n    if (index === 1) {\n      output.style.minHeight = \"unset\";\n      output.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu)());\n    }\n    if (index === 2) {\n      output.style.minHeight = \"unset\";\n      output.append((0,_about_js__WEBPACK_IMPORTED_MODULE_4__.loadAbout)());\n    }\n  }\n\n  // Events\n  function _setupEventListeners() {\n    navButtons.forEach((button, index) => {\n      button.addEventListener(\"click\", () => showPage(index));\n    });\n  }\n\n  // Events - Initialize module\n  _setupEventListeners();\n})();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadBook: () => (/* binding */ loadBook)\n/* harmony export */ });\n// create new dom elements\nconst intro = document.createElement(\"div\");\nconst bookingForm = document.createElement(\"form\");\nconst container = document.createElement(\"div\");\n\nfunction loadBook() {\n  // logo animation\n  const logo = document.querySelector(\"h1\");\n  logo.nextElementSibling?.remove();\n  logo.classList.remove(\"logoAnimation2\");\n  logo.classList.remove(\"logoAnimation3\");\n  logo.classList.add(\"logoAnimation1\");\n\n  // booking intro and form\n  intro.classList.add(\"intro\");\n  intro.innerHTML =\n    \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \";\n\n  bookingForm.innerHTML = `<div>\n        <label for=\"tableNumber\">Table Number:</label>\n        <input type=\"number\" id=\"tableNumber\" name=\"tableNumber\" required>\n        <label for=\"personNumber\">For:</label>\n        <select id=\"personNumber\" name=\"personNumber\">\n            <option value=\"1\">One</option>\n            <option value=\"2\">Two</option>\n            <option value=\"3-4\">3 or 4</option>\n            <option value=\">4\">More than 4</option>\n        </select>\n        <label for=\"date\">Select Date:</label>\n        <input type=\"date\" id=\"date\" name=\"date\" required>\n        <button type=\"submit\">Book Now</button>\n        </div>`;\n\n  container.classList.add(\"bookingContainer\");\n  //for showing it smoothly\n  setTimeout(() => {\n    container.style.opacity = \"1\";\n  }, 500);\n  //merging in one div\n  container.append(intro, bookingForm);\n  return container;\n}\n\n\n//# sourceURL=webpack:///./src/book.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHero: () => (/* binding */ loadHero)\n/* harmony export */ });\nfunction loadHero() {\n  const heroLogo = document.createElement(\"h1\");\n  heroLogo.innerHTML = \"ELYSIAN\";\n  return heroLogo; // Return the element to append later\n}\n\n\n//# sourceURL=webpack:///./src/hero.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _img_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/1.jpg */ \"./src/img/1.jpg\");\n/* harmony import */ var _img_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/2.jpg */ \"./src/img/2.jpg\");\n/* harmony import */ var _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/3.jpg */ \"./src/img/3.jpg\");\n/* harmony import */ var _img_special_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/special.jpg */ \"./src/img/special.jpg\");\n// Import images (assuming they're in src/img)\n\n\n\n\n\nconst container = document.createElement(\"div\");\ncontainer.classList.add(\"dishContainer\");\n\nclass Dish {\n  constructor(image, name, description, price) {\n    this.image = image;\n    this.name = name;\n    this.description = description;\n    this.price = price;\n\n    const dishBox = document.createElement(\"div\");\n    dishBox.classList.add(\"dishBox\");\n\n    dishBox.innerHTML = `\n      <img class=\"dishImg\" src=\"${image}\" alt=\"\">\n      <div class=\"dishInfo\">\n      <div class=\"dishName\">${name}</div>\n      <div class=\"dishDesc\">${description}</div>\n      <div class=\"dishPrice\">$${price}</div>\n      </div>`;\n\n    container.append(dishBox);\n  }\n}\n\nclass SpeacialDish {\n  constructor(image, name, description, price) {\n    this.image = image;\n    this.name = name;\n    this.description = description;\n    this.price = price;\n\n    const dishBox = document.createElement(\"div\");\n    dishBox.classList.add(\"specialDishBox\");\n\n    dishBox.innerHTML = `\n      <div class=\"speacialDishTitle\">Today's Special</div>\n      <img class=\"speacialDishImg\" src=\"${image}\" alt=\"\">\n      <div class=\"speacialDishInfo\">\n      <div class=\"speacialDishName\">${name}</div>\n      <div class=\"speacialDishDesc\">${description}</div>\n      <div class=\"speacialDishPrice\">$${price}</div>\n      </div>`;\n\n    container.append(dishBox);\n  }\n}\n\nfunction loadMenu() {\n  container.innerHTML = \"\";\n  // logo animation\n  const logo = document.querySelector(\"h1\");\n  logo.classList.add(\"logoAnimation2\");\n  logo.classList.remove(\"logoAnimation3\");\n  logo.nextElementSibling?.remove();\n\n  //prettier-ignore\n  // Menu data - easily modifiable\n  const speacialDish= new SpeacialDish (_img_special_jpg__WEBPACK_IMPORTED_MODULE_3__,\"Name\",\"Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur\",30)\n  //prettier-ignore\n  const menuItems = [\n    new Dish(_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 12),\n    new Dish(_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 9),\n    new Dish(_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 5),\n    new Dish(_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 12),\n    new Dish(_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 9),\n    new Dish(_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 5),\n    new Dish(_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 12),\n    new Dish(_img_2_jpg__WEBPACK_IMPORTED_MODULE_1__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 9),\n    new Dish(_img_3_jpg__WEBPACK_IMPORTED_MODULE_2__,\"Name\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\", 5),\n  ];\n\n  setTimeout(() => {\n    container.style.opacity = \"1\";\n  }, 500);\n\n  return container;\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/img/1.jpg":
/*!***********************!*\
  !*** ./src/img/1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e9af24a138a9564f5ec.jpg\";\n\n//# sourceURL=webpack:///./src/img/1.jpg?");

/***/ }),

/***/ "./src/img/11.jpg":
/*!************************!*\
  !*** ./src/img/11.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00d73a27a5ae1e2573d9.jpg\";\n\n//# sourceURL=webpack:///./src/img/11.jpg?");

/***/ }),

/***/ "./src/img/2.jpg":
/*!***********************!*\
  !*** ./src/img/2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19c59966c7d73f6f546c.jpg\";\n\n//# sourceURL=webpack:///./src/img/2.jpg?");

/***/ }),

/***/ "./src/img/22.jpg":
/*!************************!*\
  !*** ./src/img/22.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bbad55919853b60a83b6.jpg\";\n\n//# sourceURL=webpack:///./src/img/22.jpg?");

/***/ }),

/***/ "./src/img/3.jpg":
/*!***********************!*\
  !*** ./src/img/3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d2d2fc79d84526def82.jpg\";\n\n//# sourceURL=webpack:///./src/img/3.jpg?");

/***/ }),

/***/ "./src/img/33.jpg":
/*!************************!*\
  !*** ./src/img/33.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75e0653639ff37ab4561.jpg\";\n\n//# sourceURL=webpack:///./src/img/33.jpg?");

/***/ }),

/***/ "./src/img/chef.jpg":
/*!**************************!*\
  !*** ./src/img/chef.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"666e7276667c48fb5160.jpg\";\n\n//# sourceURL=webpack:///./src/img/chef.jpg?");

/***/ }),

/***/ "./src/img/heroImg.jpg":
/*!*****************************!*\
  !*** ./src/img/heroImg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"104f7bd12dd0216906e6.jpg\";\n\n//# sourceURL=webpack:///./src/img/heroImg.jpg?");

/***/ }),

/***/ "./src/img/special.jpg":
/*!*****************************!*\
  !*** ./src/img/special.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7aeeba578bc9bc5dc549.jpg\";\n\n//# sourceURL=webpack:///./src/img/special.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;