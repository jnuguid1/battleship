/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\nbody, h1, h2, p {\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  font-size: 34px;\n}\n\n.click-disabled {\n  pointer-events: none;\n}\n\n.not-allowed {\n  cursor: not-allowed;\n}\n\n.flex-show {\n  display: flex;\n}\n\n.inline-show {\n  display: inline;\n}\n\n.hidden {\n  display: none;\n}\n\nh1 {\n  text-align: center;\n  margin-top: 50px;\n}\n\n#play-section {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 150px;\n}\n\n#play-section h2 {\n  font-size: 22px;\n  text-align: center;\n}\n\n.game-board {\n  display: grid;\n  grid-template-columns: repeat(11, 37px);\n  grid-template-rows: repeat(11, 37px);\n}\n\n.game-board p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.board-cell {\n  border: solid 1px black;\n}\n\n.ship {\n  background-color: darkgray;\n}\n\n.hit {\n  background-color: lightcoral;\n}\n\n.miss {\n  background-color: lightblue;\n}\n\n#game-status-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n#game-status {\n  text-align: center;\n  font-weight: 300;\n  margin-top: 45px;\n  max-width: 35%;\n}\n\n#ship-form {\n  display: flex;\n  gap: 18px;\n}\n\n.inputs {\n  margin-top: 8px;\n}\n\n#ship-form-section {\n  margin-top: 45px;\n  gap: 24px;\n  align-items: center;\n  flex-direction: column;\n}\n\n.attack-display {\n  text-align: center;\n  margin-top: 24px;\n}\n\n#randomize-ships-btn {\n  margin-right: 12px;\n}\n\n#restart-btn {\n  margin-top: 18px;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,2CAA2C;AAC7C;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[":root {\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\nbody, h1, h2, p {\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  font-size: 34px;\n}\n\n.click-disabled {\n  pointer-events: none;\n}\n\n.not-allowed {\n  cursor: not-allowed;\n}\n\n.flex-show {\n  display: flex;\n}\n\n.inline-show {\n  display: inline;\n}\n\n.hidden {\n  display: none;\n}\n\nh1 {\n  text-align: center;\n  margin-top: 50px;\n}\n\n#play-section {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 150px;\n}\n\n#play-section h2 {\n  font-size: 22px;\n  text-align: center;\n}\n\n.game-board {\n  display: grid;\n  grid-template-columns: repeat(11, 37px);\n  grid-template-rows: repeat(11, 37px);\n}\n\n.game-board p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.board-cell {\n  border: solid 1px black;\n}\n\n.ship {\n  background-color: darkgray;\n}\n\n.hit {\n  background-color: lightcoral;\n}\n\n.miss {\n  background-color: lightblue;\n}\n\n#game-status-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n#game-status {\n  text-align: center;\n  font-weight: 300;\n  margin-top: 45px;\n  max-width: 35%;\n}\n\n#ship-form {\n  display: flex;\n  gap: 18px;\n}\n\n.inputs {\n  margin-top: 8px;\n}\n\n#ship-form-section {\n  margin-top: 45px;\n  gap: 24px;\n  align-items: center;\n  flex-direction: column;\n}\n\n.attack-display {\n  text-align: center;\n  margin-top: 24px;\n}\n\n#randomize-ships-btn {\n  margin-right: 12px;\n}\n\n#restart-btn {\n  margin-top: 18px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.js");




const game = (() => {
  const gameBoard1 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const gameBoard2 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(gameBoard2);
  const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(gameBoard1);

  const randomShipPlacement = () => {
    gameBoard1.reset();
    _view__WEBPACK_IMPORTED_MODULE_2__.View.refreshPlayerBoard();
    const destroyerCoords = gameBoard1.randomlyAddShip(2, 'destroyer');
    const submarineCoords = gameBoard1.randomlyAddShip(3, 'submarine');
    const cruiserCoords = gameBoard1.randomlyAddShip(3, 'cruiser');
    const battleshipCoords = gameBoard1.randomlyAddShip(4, 'battleship');
    const carrierCoords = gameBoard1.randomlyAddShip(5, 'carrier');
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateDestroyerPlaceholder(destroyerCoords.startCoord, destroyerCoords.endCoord);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateSubmarinePlaceholder(submarineCoords.startCoord, submarineCoords.endCoord);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateCruiserPlaceholder(cruiserCoords.startCoord, cruiserCoords.endCoord);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateBattleshipPlaceholder(battleshipCoords.startCoord, battleshipCoords.endCoord);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateCarrierPlaceholder(carrierCoords.startCoord, carrierCoords.endCoord);

    _view__WEBPACK_IMPORTED_MODULE_2__.View.loadShips(gameBoard1.shipCoords);
  }

  const setupBoards = () => {
    gameBoard1.addShip([3,8],[3,9], 2, 'destroyer');
    gameBoard1.addShip([0,0],[0,2], 3, 'submarine');
    gameBoard1.addShip([7,1],[9,1],3, 'cruiser');
    gameBoard1.addShip([4,4],[7,4],4, 'battleship');
    gameBoard1.addShip([1,5],[1,9],5, 'carrier');

    gameBoard2.randomlyAddShip(2, 'destroyer');
    gameBoard2.randomlyAddShip(3, 'submarine');
    gameBoard2.randomlyAddShip(3, 'cruiser');
    gameBoard2.randomlyAddShip(4, 'battleship');
    gameBoard2.randomlyAddShip(5, 'carrier');

    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateCarrierPlaceholder([1,5],[1,9]);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateBattleshipPlaceholder([4,4],[7,4]);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateCruiserPlaceholder([7,1],[9,1]);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateSubmarinePlaceholder([0,0],[0,2]);
    _view__WEBPACK_IMPORTED_MODULE_2__.View.updateDestroyerPlaceholder([3,8],[3,9]);
  }

  const setupGame = () => {
    _view__WEBPACK_IMPORTED_MODULE_2__.View.loadBoards();
    setupBoards();
    _view__WEBPACK_IMPORTED_MODULE_2__.View.loadShips(gameBoard1.shipCoords);
  };

  const resetGame = () => {
    gameBoard1.reset();
    gameBoard2.reset();
    setupBoards();
    _view__WEBPACK_IMPORTED_MODULE_2__.View.loadShips(gameBoard1.shipCoords);
  }

  const handleShipUpdate = (colStart, colEnd, rowStart, rowEnd, ship) => {
    const start = [colStart, rowStart];
    const end = [colEnd, rowEnd];
    const coords = gameBoard1.updateShip(start, end, ship);
    if (coords.message !== null) {
      _view__WEBPACK_IMPORTED_MODULE_2__.View.handleInvalidInput(coords.message);
    } else {
      _view__WEBPACK_IMPORTED_MODULE_2__.View.removeShip(coords.removedCoords);
      _view__WEBPACK_IMPORTED_MODULE_2__.View.addShip(coords.addedCoords)
      _view__WEBPACK_IMPORTED_MODULE_2__.View.resetGameStatus();
    }
  }

  const handlePlayerAttack = (col, row) => {
    const attackResult = player1.attackEnemy([col, row]);
    if (attackResult) {
      _view__WEBPACK_IMPORTED_MODULE_2__.View.handlePlayerHit(col, row);
    } else if (attackResult === false) {
      _view__WEBPACK_IMPORTED_MODULE_2__.View.handlePlayerMiss(col, row);
    }
    return attackResult;
  }

  // Add timeout to give a pause between player turn and ai turn
  const handleOpponentAttack = () => {
    setTimeout(() => {
      let attackResult;
      if (player2.hasMovesQueued()) {
        attackResult = player2.executeQueuedMove();
      } else {
        attackResult = player2.attackEnemyRandomly();
      }
      if (didEnemyWin()) {
        _view__WEBPACK_IMPORTED_MODULE_2__.View.handleOpponentWin(attackResult.coords);
      } else {
        if (attackResult.result) {
          _view__WEBPACK_IMPORTED_MODULE_2__.View.handleOpponentHit(attackResult.coords);
        } else if (attackResult.result === false) {
          _view__WEBPACK_IMPORTED_MODULE_2__.View.handleOpponentMiss(attackResult.coords);
        }
      }
      return attackResult;
    }, 1200); 
  };

  const randomButtonHandler = () => {
    randomShipPlacement();
  };

  const didPlayerWin = () => {
    return gameBoard2.areAllShipsSunk();
  }

  const didEnemyWin = () => {
    return gameBoard1.areAllShipsSunk();
  }
  
  return { 
    setupGame, 
    handlePlayerAttack,
    handleOpponentAttack,
    handleShipUpdate,
    randomButtonHandler,
    didPlayerWin,
    didEnemyWin,
    resetGame
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const GameBoard = () => {
  // 10x10 grid of where each ship object is located.
  // Used to check for overlap with other ships.
  let grid = [[],[],[],[],[],[],[],[],[],[]]; 
  let ships = []; // list of ship objects
  // List of the coords of each ship.
  // Used to check if a ship is a hit after an attack.
  let shipCoords = [];
  // List of coords of successful hits.
  const hits = [];
  // List of coords of misses.
  const misses = [];

  const areCoordsValid = (ship, startCoord, endCoord) => {
    // Test for invalid and out of bounds ships
    if (startCoord[0] !== endCoord[0] && startCoord[1] !== endCoord[1]) 
      return { result: false, message: 'Ship must not be diagonal.' };
    if (startCoord[0] > 9 || startCoord[0] < 0 || startCoord[1] > 9 || startCoord[1] < 0) 
      return { result: false, message: 'Ship is out of bounds.' };
    if (endCoord[0] > 9 || endCoord[0] < 0 || endCoord[1] > 9 || endCoord[1] < 0)
      return { result: false, message: 'Ship is out of bounds.' };
    if (startCoord[0] - endCoord[0] === 0 && Math.abs(startCoord[1] - endCoord[1]) !== ship.length - 1)
       return { result: false, message: `Ship is invalid length. It must be ${ship.length} squares long.` };
    if (startCoord[1] - endCoord[1] === 0 && Math.abs(startCoord[0] - endCoord[0]) !== ship.length - 1)
      return { result: false, message: `Ship is invalid length. It must be ${ship.length} squares long.` };
    if (startCoord[0] > endCoord[0] || startCoord[1] > endCoord[1]) 
      return { result: false, message: `Ship must not be inputted in a reverse direction` };
    return { result: true };
  };

  const doSquaresOverlap = (start, end, shipName) => {
    // Check if each grid square between the start and end coords
    // are not occupied already
    if (Math.abs(start[0] - end[0]) > 0) {
      for (let i = start[0]; i <= end[0]; i++) {
        if (grid[i][start[1]] !== undefined) {
          if (shipName && grid[i][start[1]].ship !== shipName) {
            return { result: true, message: `Ship must not overlap with other ships` };
          } else if (!shipName) {
            return { result: true, message: `Ship must not overlap with other ships` }
          }
        }
      }
    } else if (Math.abs(start[1] - end[1]) > 0) {
      for (let i = start[1]; i <= end[1]; i++) {
        if (grid[start[0]][i] !== undefined) {
          if (shipName && grid[start[0]][i].ship !== shipName) {
            return { result: true, message: `Ship must not overlap with other ships` }
          } else if (!shipName) {
            return { result: true, message: `Ship must not overlap with other ships` }
          }
        }
      }
    } else {
      if (grid[start[0]][end[1]] !== undefined) {
        if (shipName && grid[start[0]][end[1]].ship !== shipName) {
          return { result: true, message: `Ship must not overlap with other ships` }
        } else if (!shipName) {
          return { result: true, message: `Ship must not overlap with other ships` }
        }
      }
    }
    return { result: false };
  }

  const pushShip = (startCoord, endCoord, ship) => {
    const addedCoords = [];
    // Fill in the specified coordinates
    if (Math.abs(startCoord[0] - endCoord[0]) > 0) {
      for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        grid[i][startCoord[1]] = ship;
        shipCoords.push([i, startCoord[1]]);
        addedCoords.push([i, startCoord[1]]);
      }
    } else if (Math.abs(startCoord[1] - endCoord[1]) > 0) {
      for (let i = startCoord[1]; i <= endCoord[1]; i++) {
        grid[startCoord[0]][i] = ship;
        shipCoords.push([startCoord[0], i]);
        addedCoords.push([startCoord[0], i]);
      }
    } else {
      grid[startCoord[0]][endCoord[1]] = ship;
      shipCoords.push([startCoord[0], endCoord[1]]);
      addedCoords.push([startCoord[0], endCoord[1]]);
    }
    ships.push(ship);
    return addedCoords
  }
  
  const addShip = (startCoord, endCoord, shipLength, shipName) => {
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength, shipName);
    if (!areCoordsValid(ship, startCoord, endCoord).result) return null;
    if (doSquaresOverlap(startCoord, endCoord).result) return null;
    pushShip(startCoord, endCoord, ship);
    return ship;
  };

  const randomlyAddShip = (shipLength, shipName) => {
    let startCoord;
    let endCoord;
    let ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength, shipName);
    const direction = Math.floor(Math.random()*2); // Randomly choose ship direction;
    if (direction === 0) { // vertical direction
      while (true) {
        const rowStart = Math.floor(Math.random()*(9-(shipLength-2)));
        const rowEnd = rowStart + (shipLength - 1);
        const colStart = Math.floor(Math.random()*10);
        const colEnd = colStart;
        startCoord = [colStart, rowStart];
        endCoord = [colEnd, rowEnd];
        if (!doSquaresOverlap(startCoord, endCoord).result) {
          pushShip(startCoord, endCoord, (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength, shipName));
          break;
        }
      }
    } else { // horizontal direction
      while (true) {
        const rowStart = Math.floor(Math.random()*10); 
        const rowEnd = rowStart;
        const colStart = Math.floor(Math.random()*(9-(shipLength-2)));
        const colEnd = colStart + (shipLength - 1);
        startCoord = [colStart, rowStart];
        endCoord = [colEnd, rowEnd];
        if (!doSquaresOverlap(startCoord, endCoord).result) {
          pushShip(startCoord, endCoord, ship);
          break;
        }
      }
    }
    return { startCoord, endCoord }
  }

  const getShip = (shipName) => {
    for(let i = 0; i < ships.length; i++) {
      if (ships[i].ship === shipName) return ships[i];
    }
  };

  const removeShipFromGrid = (shipName) => {
    const coords = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] !== undefined && grid[i][j].ship === shipName) {
          grid[i][j] = undefined;
          coords.push([i,j]);
        }
      }
    }
    return coords;
  };

  const removeShipFromShipCoords = (coords) => {
    for (let i = 0; i < coords.length; i++) {
      for (let j = 0; j < shipCoords.length; j++) {
        if (shipCoords[j][0] === coords[i][0] && shipCoords[j][1] === coords[i][1]) 
          shipCoords.splice(j, 1);
      }
    }
  }

  const updateShip = (startCoord, endCoord, shipName) => {
    const ship = getShip(shipName);
    if (!areCoordsValid(ship, startCoord, endCoord).result) 
      return { message: areCoordsValid(ship, startCoord, endCoord).message };
    if (doSquaresOverlap(startCoord, endCoord, shipName).result) 
      return { message: doSquaresOverlap(startCoord, endCoord, shipName).message};
    const removedCoords = removeShipFromGrid(shipName);
    removeShipFromShipCoords(removedCoords);
    const addedCoords = pushShip(startCoord, endCoord, ship);
    return {message: null, removedCoords, addedCoords};
  }

  // Returns true if hit, false otherwise.
  // Returns null if invalid move
  const receiveAttack = (coords) => {
    for (let i = 0; i < hits.length; i++) {
      if (hits[i][0] === coords[0] && hits[i][1] === coords[1])
        return null;
    };
    for (let i = 0; i < misses.length; i++) {
      if (misses[i][0] === coords[0] && misses[i][1] === coords[1])
        return null;
    };
    if (grid[coords[0]][coords[1]] !== undefined) {
      grid[coords[0]][coords[1]].hit();
      hits.push(coords);
      return true;
    } else {
      misses.push(coords);
      return false;
    }
  };

  const areAllShipsSunk = () => {
    if (ships.length === 0) return false;
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk() === false) return false;
    }
    return true;
  };

  const reset = () => {
    grid.length = 0;
    ships.length = 0;
    shipCoords.length = 0;
    hits.length = 0;
    misses.length = 0;
    for (let i = 0 ; i < 10; i++) grid.push([]);
  }

  return { 
    addShip,
    randomlyAddShip,
    grid, 
    ships, 
    receiveAttack, 
    misses, 
    areAllShipsSunk, 
    hits,
    shipCoords,
    updateShip,
    reset
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


function Player(gameBoard) {
  const movesQueue = [];
  let currentHit;
  let oppositeCoord;
  let firstHit;

  const attackEnemy = (coords) => {
    return gameBoard.receiveAttack(coords);
  };

  const attackEnemyRandomly = () => {
    while (true) {
      const col = Math.floor(Math.random() * 10);
      const row = Math.floor(Math.random() * 10);
      const coords = [col, row];
      const result = gameBoard.receiveAttack(coords);
      if (result === true) {
        queueMoves(coords);
        currentHit = coords;
      }
      if (result !== null) return { coords, result };
    }
  };

  const hasMovesQueued = () => {
    return !(movesQueue.length === 0);
  };

  const containsCoord = (array, coord) => {
    for (let i = 0; i < array.length; i++) {
      if (coord[0] === array[i][0] && coord[1] === array[i][1]) return true;
    }
    return false;
  }

  const alreadyHit = (coord) => {
    return containsCoord(gameBoard.hits, coord);
  };
  
  const alreadyMiss = (coord) => {
    return containsCoord(gameBoard.misses, coord);
  }

  const queueMoves = (coords) => {
    const leftCoord = [coords[0] - 1, coords[1]];
    const aboveCoord = [coords[0], coords[1] - 1];
    const rightCoord = [coords[0] + 1, coords[1]];
    const bottomCoord = [coords[0], coords[1] + 1];

    if (leftCoord[0] >= 0 && !alreadyHit(leftCoord) && !alreadyMiss(leftCoord)) 
      movesQueue.push(leftCoord);
    if (aboveCoord[1] >= 0 && !alreadyHit(aboveCoord) && !alreadyMiss(aboveCoord)) 
      movesQueue.push(aboveCoord);
    if (rightCoord[0] <= 9 && !alreadyHit(rightCoord) && !alreadyMiss(rightCoord)) 
      movesQueue.push(rightCoord);
    if (bottomCoord[1] <= 9 && !alreadyHit(bottomCoord) && !alreadyMiss(bottomCoord)) 
      movesQueue.push(bottomCoord);
  }

  const executionHelper = (coords) => {
    let newCoords;
    let candidateOppositeCoords;
    if (coords[0] === currentHit[0]) {
      if (coords[1] > currentHit[1]) {
        candidateOppositeCoords = [coords[0], coords[1] - 2];
        if (candidateOppositeCoords[1] >= 0 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          oppositeCoord = candidateOppositeCoords;
          firstHit = currentHit;
        };
        if (coords[1] + 1 <= 9) {
          newCoords = [coords[0], coords[1] + 1];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      } else if (coords[1] < currentHit[1]) {
        candidateOppositeCoords = [coords[0], coords[1] + 2];
        if (candidateOppositeCoords[1] <= 9 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          firstHit = currentHit;
          oppositeCoord = candidateOppositeCoords;
        }
        if (coords[1] - 1 >= 0) {
          newCoords = [coords[0], coords[1] - 1];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      }
    } else {
      if (coords[0] > currentHit[0]) {
        candidateOppositeCoords = [coords[0] - 2, coords[1]];
        if (candidateOppositeCoords[0] >= 0 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          firstHit = currentHit;
          oppositeCoord = candidateOppositeCoords;
        }
        if (coords[0] + 1 <= 9) {
          newCoords = [coords[0] + 1, coords[1]];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      } else if (coords[0] < currentHit[0]) {
        candidateOppositeCoords = [coords[0] + 2, coords[1]];
        if (candidateOppositeCoords[0] <= 9 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          firstHit = currentHit;
          oppositeCoord = candidateOppositeCoords;
        }
        if (coords[0] - 1 >= 0) {
          newCoords = [coords[0] - 1, coords[1]];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      }
    }
    return false;
  }

  const executeQueuedMove = () => {
    const coords = movesQueue.shift();
    if (alreadyHit(coords)) {
      if (!executionHelper(coords)) {
        if (oppositeCoord) {
          movesQueue.push(oppositeCoord);
          oppositeCoord = null;
          currentHit = firstHit;
          firstHit = null;
        } else {
          attackEnemyRandomly();
        }
      } else {
        return executeQueuedMove();
      }
    }
    const result = gameBoard.receiveAttack(coords);
    if (result === true) {
      movesQueue.length = 0;
      executionHelper(coords);
    } else if (result == false && !hasMovesQueued()) {
      currentHit = null;
      if (oppositeCoord) {
        movesQueue.push(oppositeCoord);
        oppositeCoord = null;
        currentHit = firstHit;
        firstHit = null;
      }
    }
    return { coords, result }
  }

  return { attackEnemy, attackEnemyRandomly, hasMovesQueued, movesQueue, queueMoves, executeQueuedMove }
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length = 0, ship) {
  let hits = 0;

  const getHits = () => {
    return hits;
  }

  const hit = () => {
    hits += 1;
  }

  const isSunk = () => {
    return length - hits <= 0;
  }

  return { getHits, hit, isSunk, length, ship };
};

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


const View = (() => {

  const playSection = document.getElementById('play-section');
  const playerArea = document.getElementById('player-area');
  const enemyArea = document.getElementById('enemy-area');
  const formSection = document.getElementById('ship-form-section');
  const gameStatus = document.getElementById('game-status');
  let playerAttackDisplay;
  let enemyAttackDisplay;
  let isComputerTurn = false;

  //*** Game Status Strings ***/
  const defaultInstructions =
    'Place your ships by entering start and end coordinates below like \'A5\' or \'B2\'. Press confirm when ready.';

  //*** Form  ***/
  const shipForm = document.getElementById('ship-form');
  const randomShipsButton = document.getElementById('randomize-ships-btn');
  const restartButton = document.getElementById('restart-btn');
  const carrierStart = document.getElementById('carrier-start');
  const carrierEnd = document.getElementById('carrier-end');
  const battleshipStart = document.getElementById('battleship-start');
  const battleshipEnd = document.getElementById('battleship-end');
  const cruiserStart = document.getElementById('cruiser-start');
  const cruiserEnd = document.getElementById('cruiser-end');
  const submarineStart = document.getElementById('submarine-start');
  const submarineEnd = document.getElementById('submarine-end');
  const destroyerStart = document.getElementById('destroyer-start');
  const destroyerEnd = document.getElementById('destroyer-end');

  //*** Helpers ***//
  const addDiv = (container, classes, id) => {
    const div = document.createElement('div');
    if (id) div.id = id;
    if (classes) div.className = classes;
    container.appendChild(div);
    return div;
  };

  const addText = (container, text, element, classes) => {
    const textElement = document.createElement(`${element}`);
    if (classes) textElement.className = classes;
    textElement.textContent = `${text}`;
    container.appendChild(textElement);
    return textElement;
  };

  const updateCell = (col, row, colorClass, boardId) => {
    const cells = document.querySelectorAll(`#${boardId} .board-cell`);
    cells[col+row*10].classList.toggle(colorClass);
  };

  const parseCoords = (input) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    return [letters.indexOf(input[0].toUpperCase()), parseInt(input[1])];
  };

  const toggleDisplay = (element, className) => {
    element.classList.toggle(className);
    element.classList.toggle('hidden');
  };

  const iterateShipGrid = (callback) => {
    const opponentBoard = document.querySelectorAll('#opponent-board .board-cell');
    for (let i = 0; i < opponentBoard.length; i++) {
      callback(opponentBoard[i]);
    }
  };

  const toggleComputerTurn = () => {
    isComputerTurn = !isComputerTurn;
    enemyArea.classList.toggle('not-allowed');
  };

  //*** Form Events ***/
  const handleInput = (startForm, endForm, shipName) => {
    const regex = /[A-Ja-z][0-9]/;
    if (startForm.value.length === 2 && endForm.value.length === 2) {
      if (regex.test(startForm.value) && regex.test(endForm.value)) {
        const startCoord = parseCoords([startForm.value[0], startForm.value[1]]);
        const endCoord = parseCoords([endForm.value[0], endForm.value[1]])
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].handleShipUpdate(startCoord[0], endCoord[0], startCoord[1], endCoord[1], shipName);
      } else {
        changeStatus(gameStatus, 'Input must have a letter from A to J followed by a number from 0 to 9');
      }
    } else {
      resetGameStatus();
    }
  };

  const toggleCell = (cell) => {
    cell.classList.toggle('click-disabled');
  }

  const resetForms = () => {
    const forms = document.querySelectorAll('#ship-form-section input');
    for (let i = 0; i < forms.length; i++) {
      forms[i].value = '';
    }
  };

  const startGame = () => {
    resetForms();
    toggleDisplay(formSection, 'flex-show');
    playSection.classList.toggle('not-allowed');
    changeStatus(gameStatus, 'Click on the enemy board to attack');
    iterateShipGrid(toggleCell);
  }

  const restartGame = () => {
    toggleDisplay(restartButton, 'inline-show');
    toggleDisplay(formSection, 'flex-show');
    refreshEnemyBoard();
    refreshPlayerBoard();
    resetGameStatus();
    changeStatus(playerAttackDisplay, '');
    changeStatus(enemyAttackDisplay, '');
    _game__WEBPACK_IMPORTED_MODULE_0__["default"].resetGame();
  }

  //*** Form Handlers ***/
  shipForm.addEventListener('submit', (event) => {
    event.preventDefault();
    startGame();
  });
  carrierStart.addEventListener('input', () => {
    handleInput(carrierStart, carrierEnd, 'carrier');
  });
  carrierEnd.addEventListener('input', () => {
    handleInput(carrierStart, carrierEnd, 'carrier');
  });
  battleshipStart.addEventListener('input', () => {
    handleInput(battleshipStart, battleshipEnd, 'battleship');
  });
  battleshipEnd.addEventListener('input', () => {
    handleInput(battleshipStart, battleshipEnd, 'battleship');
  });
  cruiserStart.addEventListener('input', () => {
    handleInput(cruiserStart, cruiserEnd, 'cruiser');
  });
  cruiserEnd.addEventListener('input', () => {
    handleInput(cruiserStart, cruiserEnd, 'cruiser');
  });
  submarineStart.addEventListener('input', () => {
    handleInput(submarineStart, submarineEnd, 'submarine');
  });
  submarineEnd.addEventListener('input', () => {
    handleInput(submarineStart, submarineEnd, 'submarine');
  });
  destroyerStart.addEventListener('input', () => {
    handleInput(destroyerStart, destroyerEnd, 'destroyer');
  });
  destroyerEnd.addEventListener('input', () => {
    handleInput(destroyerStart, destroyerEnd, 'destroyer');
  });
  randomShipsButton.addEventListener('click', () => {
    resetForms();
    _game__WEBPACK_IMPORTED_MODULE_0__["default"].randomButtonHandler();
  });
  restartButton.addEventListener('click', () => {
    restartGame();
  });
  
  //*** DOM Manipulation Functions ***/
  const changeStatus = (element, text) => {
    element.textContent = text;
  }

  const loadGameBoard = (board, boardElement) => {
    let counter = 0;
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= 10; j++) {
        if (i === 0 && j === 0) {
          addDiv(boardElement); // Add empty space for 0,0 cell
        } else if (i === 0 && j !== 0) {
          addText(boardElement, letters[j-1], 'p');
        } else if (j === 0 && i !== 0) {
          addText(boardElement, counter, 'p');
          counter++;
        } else if (i !== 0 && j!== 0) {
          const boardCell = addDiv(boardElement, 'board-cell');
          boardCell.setAttribute('col', `${j-1}`);
          boardCell.setAttribute('row', `${i-1}`);
          boardCell.setAttribute('board', board);
          boardCell.classList.toggle('click-disabled');
          boardCell.addEventListener('click', () => {
            if (!isComputerTurn) {
              if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].handlePlayerAttack(j-1, i-1) === null) {
                changeStatus(gameStatus, 'Invalid move. You already attacked this coordinate');
              } else {
                if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].didPlayerWin()) {
                  handlePlayerWin();
                } else {
                  toggleComputerTurn();
                  _game__WEBPACK_IMPORTED_MODULE_0__["default"].handleOpponentAttack();
                }
              }
            }
          });
        }
      }
    }
  }

  const loadBoards = () => {
    const playerBoard = addDiv(playerArea, 'game-board', 'player-board');
    const opponentBoard = addDiv(enemyArea, 'game-board', 'opponent-board');
    loadGameBoard('player', playerBoard);
    playerAttackDisplay = addText(playerArea, '', 'p', 'attack-display');
    loadGameBoard('opponent', opponentBoard);
    enemyAttackDisplay = addText(enemyArea, '', 'p', 'attack-display');
  };

  const loadShips = (coordsArray) => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    coordsArray.forEach(coords => {
      playerCells[coords[0]+coords[1]*10].classList.toggle('ship');
    });
  };

  const addShip = (coordsArray) => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    coordsArray.forEach(coords => {
      playerCells[coords[0]+coords[1]*10].classList.add('ship');
    });
  }

  const removeShip = (coordsArray) => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    coordsArray.forEach(coords => {
      playerCells[coords[0]+coords[1]*10].classList.remove('ship');
    });
  }

  const handlePlayerHit = (col, row) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    updateCell(col, row, 'hit', 'opponent-board');
    changeStatus(gameStatus, 'You hit! The computer is making a decision...');
    changeStatus(enemyAttackDisplay, `You target ${letters[col]}${row}. Hit!`);
  };

  const handlePlayerMiss = (col, row) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    updateCell(col, row, 'miss', 'opponent-board');
    changeStatus(gameStatus, 'You miss! The computer is making a decision...');
    changeStatus(enemyAttackDisplay, `You target ${letters[col]}${row}. Miss!`);
  };

  const handleOpponentHit = (coords) => {
    const col = coords[0];
    const row = coords[1];
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    toggleComputerTurn();
    updateCell(col, row, 'hit', 'player-board');
    changeStatus(gameStatus, 'The computer hits! Click on the enemy board to attack');
    changeStatus(playerAttackDisplay, `Enemy targets ${letters[col]}${row}. Hit!`);
  };

  const handleOpponentMiss = (coords) => {
    const col = coords[0];
    const row = coords[1]
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    toggleComputerTurn();
    updateCell(col, row, 'miss', 'player-board');
    changeStatus(gameStatus, 'The computer misses! Click on the enemy board to attack');
    changeStatus(playerAttackDisplay, `Enemy targets ${letters[col]}${row}. Miss!`);
  };

  const refreshPlayerBoard = () => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    for (let i = 0; i < playerCells.length; i++) {
      playerCells[i].classList.remove('ship');
      playerCells[i].classList.remove('hit');
      playerCells[i].classList.remove('miss');
    }
  };

  const refreshEnemyBoard = () => {
    const enemyCells = document.querySelectorAll('#opponent-board .board-cell');
    for (let i = 0; i < enemyCells.length; i++) {
      enemyCells[i].classList.remove('ship');
      enemyCells[i].classList.remove('hit');
      enemyCells[i].classList.remove('miss');
    }
  };

  const handlePlayerWin = () => {
    changeStatus(gameStatus, 'You sunk all the enemy ships. You win!');
    playSection.classList.toggle('not-allowed');
    iterateShipGrid(toggleCell);
    toggleDisplay(restartButton, 'inline-show');
  };
  
  const handleOpponentWin = (coords) => {
    const col = coords[0];
    const row = coords[1];
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    updateCell(col, row, 'hit', 'player-board');
    changeStatus(playerAttackDisplay, `Enemy targets ${letters[col]}${row}. Hit!`);
    changeStatus(gameStatus, 'The enemy sunk all your ships. You lose!');
    playSection.classList.toggle('not-allowed');
    iterateShipGrid(toggleCell);
    toggleDisplay(restartButton, 'inline-show');
    toggleComputerTurn();
  };

  const updatePlaceholder = (formStart, formEnd, startCoord, endCoord) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    formStart.placeholder = `${letters[startCoord[0]]}${startCoord[1]}`;
    formEnd.placeholder =  `${letters[endCoord[0]]}${endCoord[1]}`;
  }

  const updateCarrierPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(carrierStart, carrierEnd, startCoord, endCoord);
  };

  const updateBattleshipPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(battleshipStart, battleshipEnd, startCoord, endCoord);
  };

  const updateCruiserPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(cruiserStart, cruiserEnd, startCoord, endCoord);
  };

  const updateSubmarinePlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(submarineStart, submarineEnd, startCoord, endCoord);
  };

  const updateDestroyerPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(destroyerStart, destroyerEnd, startCoord, endCoord);
  };

  const handleInvalidInput = (message) => {
    changeStatus(gameStatus, message);
  }

  const resetGameStatus = () => {
    changeStatus(gameStatus, defaultInstructions)
  }
 
  return { 
    loadBoards, 
    loadShips,
    addShip,
    removeShip,
    handlePlayerHit, 
    handlePlayerMiss, 
    handleOpponentHit,
    handleOpponentMiss,
    refreshPlayerBoard,
    updateCarrierPlaceholder,
    updateCruiserPlaceholder,
    updateSubmarinePlaceholder,
    updateBattleshipPlaceholder,
    updateDestroyerPlaceholder,
    handleOpponentWin,
    handleInvalidInput,
    resetGameStatus
  }
})();

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



_game__WEBPACK_IMPORTED_MODULE_1__["default"].setupGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0s7O0FBRTFCLHVEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5LCBoMSwgaDIsIHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbn1cXG5cXG4uY2xpY2stZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ub3QtYWxsb3dlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uZmxleC1zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmxpbmUtc2hvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI3BsYXktc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTUwcHg7XFxufVxcblxcbiNwbGF5LXNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDM3cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDM3cHgpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbiNnYW1lLXN0YXR1cy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZ2FtZS1zdGF0dXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxuICBtYXgtd2lkdGg6IDM1JTtcXG59XFxuXFxuI3NoaXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4uaW5wdXRzIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuI3NoaXAtZm9ybS1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxuICBnYXA6IDI0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmF0dGFjay1kaXNwbGF5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbiNyYW5kb21pemUtc2hpcHMtYnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuI3Jlc3RhcnQtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5LCBoMSwgaDIsIHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbn1cXG5cXG4uY2xpY2stZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ub3QtYWxsb3dlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uZmxleC1zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmxpbmUtc2hvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI3BsYXktc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTUwcHg7XFxufVxcblxcbiNwbGF5LXNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDM3cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIDM3cHgpO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbiNnYW1lLXN0YXR1cy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZ2FtZS1zdGF0dXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxuICBtYXgtd2lkdGg6IDM1JTtcXG59XFxuXFxuI3NoaXAtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxOHB4O1xcbn1cXG5cXG4uaW5wdXRzIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuI3NoaXAtZm9ybS1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxuICBnYXA6IDI0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmF0dGFjay1kaXNwbGF5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbiNyYW5kb21pemUtc2hpcHMtYnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuI3Jlc3RhcnQtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcblxuY29uc3QgZ2FtZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdhbWVCb2FyZDEgPSBHYW1lQm9hcmQoKTtcbiAgY29uc3QgZ2FtZUJvYXJkMiA9IEdhbWVCb2FyZCgpO1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKGdhbWVCb2FyZDIpO1xuICBjb25zdCBwbGF5ZXIyID0gUGxheWVyKGdhbWVCb2FyZDEpO1xuXG4gIGNvbnN0IHJhbmRvbVNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgZ2FtZUJvYXJkMS5yZXNldCgpO1xuICAgIFZpZXcucmVmcmVzaFBsYXllckJvYXJkKCk7XG4gICAgY29uc3QgZGVzdHJveWVyQ29vcmRzID0gZ2FtZUJvYXJkMS5yYW5kb21seUFkZFNoaXAoMiwgJ2Rlc3Ryb3llcicpO1xuICAgIGNvbnN0IHN1Ym1hcmluZUNvb3JkcyA9IGdhbWVCb2FyZDEucmFuZG9tbHlBZGRTaGlwKDMsICdzdWJtYXJpbmUnKTtcbiAgICBjb25zdCBjcnVpc2VyQ29vcmRzID0gZ2FtZUJvYXJkMS5yYW5kb21seUFkZFNoaXAoMywgJ2NydWlzZXInKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwQ29vcmRzID0gZ2FtZUJvYXJkMS5yYW5kb21seUFkZFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBjYXJyaWVyQ29vcmRzID0gZ2FtZUJvYXJkMS5yYW5kb21seUFkZFNoaXAoNSwgJ2NhcnJpZXInKTtcbiAgICBWaWV3LnVwZGF0ZURlc3Ryb3llclBsYWNlaG9sZGVyKGRlc3Ryb3llckNvb3Jkcy5zdGFydENvb3JkLCBkZXN0cm95ZXJDb29yZHMuZW5kQ29vcmQpO1xuICAgIFZpZXcudXBkYXRlU3VibWFyaW5lUGxhY2Vob2xkZXIoc3VibWFyaW5lQ29vcmRzLnN0YXJ0Q29vcmQsIHN1Ym1hcmluZUNvb3Jkcy5lbmRDb29yZCk7XG4gICAgVmlldy51cGRhdGVDcnVpc2VyUGxhY2Vob2xkZXIoY3J1aXNlckNvb3Jkcy5zdGFydENvb3JkLCBjcnVpc2VyQ29vcmRzLmVuZENvb3JkKTtcbiAgICBWaWV3LnVwZGF0ZUJhdHRsZXNoaXBQbGFjZWhvbGRlcihiYXR0bGVzaGlwQ29vcmRzLnN0YXJ0Q29vcmQsIGJhdHRsZXNoaXBDb29yZHMuZW5kQ29vcmQpO1xuICAgIFZpZXcudXBkYXRlQ2FycmllclBsYWNlaG9sZGVyKGNhcnJpZXJDb29yZHMuc3RhcnRDb29yZCwgY2FycmllckNvb3Jkcy5lbmRDb29yZCk7XG5cbiAgICBWaWV3LmxvYWRTaGlwcyhnYW1lQm9hcmQxLnNoaXBDb29yZHMpO1xuICB9XG5cbiAgY29uc3Qgc2V0dXBCb2FyZHMgPSAoKSA9PiB7XG4gICAgZ2FtZUJvYXJkMS5hZGRTaGlwKFszLDhdLFszLDldLCAyLCAnZGVzdHJveWVyJyk7XG4gICAgZ2FtZUJvYXJkMS5hZGRTaGlwKFswLDBdLFswLDJdLCAzLCAnc3VibWFyaW5lJyk7XG4gICAgZ2FtZUJvYXJkMS5hZGRTaGlwKFs3LDFdLFs5LDFdLDMsICdjcnVpc2VyJyk7XG4gICAgZ2FtZUJvYXJkMS5hZGRTaGlwKFs0LDRdLFs3LDRdLDQsICdiYXR0bGVzaGlwJyk7XG4gICAgZ2FtZUJvYXJkMS5hZGRTaGlwKFsxLDVdLFsxLDldLDUsICdjYXJyaWVyJyk7XG5cbiAgICBnYW1lQm9hcmQyLnJhbmRvbWx5QWRkU2hpcCgyLCAnZGVzdHJveWVyJyk7XG4gICAgZ2FtZUJvYXJkMi5yYW5kb21seUFkZFNoaXAoMywgJ3N1Ym1hcmluZScpO1xuICAgIGdhbWVCb2FyZDIucmFuZG9tbHlBZGRTaGlwKDMsICdjcnVpc2VyJyk7XG4gICAgZ2FtZUJvYXJkMi5yYW5kb21seUFkZFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICBnYW1lQm9hcmQyLnJhbmRvbWx5QWRkU2hpcCg1LCAnY2FycmllcicpO1xuXG4gICAgVmlldy51cGRhdGVDYXJyaWVyUGxhY2Vob2xkZXIoWzEsNV0sWzEsOV0pO1xuICAgIFZpZXcudXBkYXRlQmF0dGxlc2hpcFBsYWNlaG9sZGVyKFs0LDRdLFs3LDRdKTtcbiAgICBWaWV3LnVwZGF0ZUNydWlzZXJQbGFjZWhvbGRlcihbNywxXSxbOSwxXSk7XG4gICAgVmlldy51cGRhdGVTdWJtYXJpbmVQbGFjZWhvbGRlcihbMCwwXSxbMCwyXSk7XG4gICAgVmlldy51cGRhdGVEZXN0cm95ZXJQbGFjZWhvbGRlcihbMyw4XSxbMyw5XSk7XG4gIH1cblxuICBjb25zdCBzZXR1cEdhbWUgPSAoKSA9PiB7XG4gICAgVmlldy5sb2FkQm9hcmRzKCk7XG4gICAgc2V0dXBCb2FyZHMoKTtcbiAgICBWaWV3LmxvYWRTaGlwcyhnYW1lQm9hcmQxLnNoaXBDb29yZHMpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBnYW1lQm9hcmQxLnJlc2V0KCk7XG4gICAgZ2FtZUJvYXJkMi5yZXNldCgpO1xuICAgIHNldHVwQm9hcmRzKCk7XG4gICAgVmlldy5sb2FkU2hpcHMoZ2FtZUJvYXJkMS5zaGlwQ29vcmRzKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNoaXBVcGRhdGUgPSAoY29sU3RhcnQsIGNvbEVuZCwgcm93U3RhcnQsIHJvd0VuZCwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gW2NvbFN0YXJ0LCByb3dTdGFydF07XG4gICAgY29uc3QgZW5kID0gW2NvbEVuZCwgcm93RW5kXTtcbiAgICBjb25zdCBjb29yZHMgPSBnYW1lQm9hcmQxLnVwZGF0ZVNoaXAoc3RhcnQsIGVuZCwgc2hpcCk7XG4gICAgaWYgKGNvb3Jkcy5tZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICBWaWV3LmhhbmRsZUludmFsaWRJbnB1dChjb29yZHMubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFZpZXcucmVtb3ZlU2hpcChjb29yZHMucmVtb3ZlZENvb3Jkcyk7XG4gICAgICBWaWV3LmFkZFNoaXAoY29vcmRzLmFkZGVkQ29vcmRzKVxuICAgICAgVmlldy5yZXNldEdhbWVTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVQbGF5ZXJBdHRhY2sgPSAoY29sLCByb3cpID0+IHtcbiAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwbGF5ZXIxLmF0dGFja0VuZW15KFtjb2wsIHJvd10pO1xuICAgIGlmIChhdHRhY2tSZXN1bHQpIHtcbiAgICAgIFZpZXcuaGFuZGxlUGxheWVySGl0KGNvbCwgcm93KTtcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIFZpZXcuaGFuZGxlUGxheWVyTWlzcyhjb2wsIHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gIH1cblxuICAvLyBBZGQgdGltZW91dCB0byBnaXZlIGEgcGF1c2UgYmV0d2VlbiBwbGF5ZXIgdHVybiBhbmQgYWkgdHVyblxuICBjb25zdCBoYW5kbGVPcHBvbmVudEF0dGFjayA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBhdHRhY2tSZXN1bHQ7XG4gICAgICBpZiAocGxheWVyMi5oYXNNb3Zlc1F1ZXVlZCgpKSB7XG4gICAgICAgIGF0dGFja1Jlc3VsdCA9IHBsYXllcjIuZXhlY3V0ZVF1ZXVlZE1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dGFja1Jlc3VsdCA9IHBsYXllcjIuYXR0YWNrRW5lbXlSYW5kb21seSgpO1xuICAgICAgfVxuICAgICAgaWYgKGRpZEVuZW15V2luKCkpIHtcbiAgICAgICAgVmlldy5oYW5kbGVPcHBvbmVudFdpbihhdHRhY2tSZXN1bHQuY29vcmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQucmVzdWx0KSB7XG4gICAgICAgICAgVmlldy5oYW5kbGVPcHBvbmVudEhpdChhdHRhY2tSZXN1bHQuY29vcmRzKTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQucmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgIFZpZXcuaGFuZGxlT3Bwb25lbnRNaXNzKGF0dGFja1Jlc3VsdC5jb29yZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICAgIH0sIDEyMDApOyBcbiAgfTtcblxuICBjb25zdCByYW5kb21CdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQoKTtcbiAgfTtcblxuICBjb25zdCBkaWRQbGF5ZXJXaW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVCb2FyZDIuYXJlQWxsU2hpcHNTdW5rKCk7XG4gIH1cblxuICBjb25zdCBkaWRFbmVteVdpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2FtZUJvYXJkMS5hcmVBbGxTaGlwc1N1bmsoKTtcbiAgfVxuICBcbiAgcmV0dXJuIHsgXG4gICAgc2V0dXBHYW1lLCBcbiAgICBoYW5kbGVQbGF5ZXJBdHRhY2ssXG4gICAgaGFuZGxlT3Bwb25lbnRBdHRhY2ssXG4gICAgaGFuZGxlU2hpcFVwZGF0ZSxcbiAgICByYW5kb21CdXR0b25IYW5kbGVyLFxuICAgIGRpZFBsYXllcldpbixcbiAgICBkaWRFbmVteVdpbixcbiAgICByZXNldEdhbWVcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZSIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IEdhbWVCb2FyZCA9ICgpID0+IHtcbiAgLy8gMTB4MTAgZ3JpZCBvZiB3aGVyZSBlYWNoIHNoaXAgb2JqZWN0IGlzIGxvY2F0ZWQuXG4gIC8vIFVzZWQgdG8gY2hlY2sgZm9yIG92ZXJsYXAgd2l0aCBvdGhlciBzaGlwcy5cbiAgbGV0IGdyaWQgPSBbW10sW10sW10sW10sW10sW10sW10sW10sW10sW11dOyBcbiAgbGV0IHNoaXBzID0gW107IC8vIGxpc3Qgb2Ygc2hpcCBvYmplY3RzXG4gIC8vIExpc3Qgb2YgdGhlIGNvb3JkcyBvZiBlYWNoIHNoaXAuXG4gIC8vIFVzZWQgdG8gY2hlY2sgaWYgYSBzaGlwIGlzIGEgaGl0IGFmdGVyIGFuIGF0dGFjay5cbiAgbGV0IHNoaXBDb29yZHMgPSBbXTtcbiAgLy8gTGlzdCBvZiBjb29yZHMgb2Ygc3VjY2Vzc2Z1bCBoaXRzLlxuICBjb25zdCBoaXRzID0gW107XG4gIC8vIExpc3Qgb2YgY29vcmRzIG9mIG1pc3Nlcy5cbiAgY29uc3QgbWlzc2VzID0gW107XG5cbiAgY29uc3QgYXJlQ29vcmRzVmFsaWQgPSAoc2hpcCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpID0+IHtcbiAgICAvLyBUZXN0IGZvciBpbnZhbGlkIGFuZCBvdXQgb2YgYm91bmRzIHNoaXBzXG4gICAgaWYgKHN0YXJ0Q29vcmRbMF0gIT09IGVuZENvb3JkWzBdICYmIHN0YXJ0Q29vcmRbMV0gIT09IGVuZENvb3JkWzFdKSBcbiAgICAgIHJldHVybiB7IHJlc3VsdDogZmFsc2UsIG1lc3NhZ2U6ICdTaGlwIG11c3Qgbm90IGJlIGRpYWdvbmFsLicgfTtcbiAgICBpZiAoc3RhcnRDb29yZFswXSA+IDkgfHwgc3RhcnRDb29yZFswXSA8IDAgfHwgc3RhcnRDb29yZFsxXSA+IDkgfHwgc3RhcnRDb29yZFsxXSA8IDApIFxuICAgICAgcmV0dXJuIHsgcmVzdWx0OiBmYWxzZSwgbWVzc2FnZTogJ1NoaXAgaXMgb3V0IG9mIGJvdW5kcy4nIH07XG4gICAgaWYgKGVuZENvb3JkWzBdID4gOSB8fCBlbmRDb29yZFswXSA8IDAgfHwgZW5kQ29vcmRbMV0gPiA5IHx8IGVuZENvb3JkWzFdIDwgMClcbiAgICAgIHJldHVybiB7IHJlc3VsdDogZmFsc2UsIG1lc3NhZ2U6ICdTaGlwIGlzIG91dCBvZiBib3VuZHMuJyB9O1xuICAgIGlmIChzdGFydENvb3JkWzBdIC0gZW5kQ29vcmRbMF0gPT09IDAgJiYgTWF0aC5hYnMoc3RhcnRDb29yZFsxXSAtIGVuZENvb3JkWzFdKSAhPT0gc2hpcC5sZW5ndGggLSAxKVxuICAgICAgIHJldHVybiB7IHJlc3VsdDogZmFsc2UsIG1lc3NhZ2U6IGBTaGlwIGlzIGludmFsaWQgbGVuZ3RoLiBJdCBtdXN0IGJlICR7c2hpcC5sZW5ndGh9IHNxdWFyZXMgbG9uZy5gIH07XG4gICAgaWYgKHN0YXJ0Q29vcmRbMV0gLSBlbmRDb29yZFsxXSA9PT0gMCAmJiBNYXRoLmFicyhzdGFydENvb3JkWzBdIC0gZW5kQ29vcmRbMF0pICE9PSBzaGlwLmxlbmd0aCAtIDEpXG4gICAgICByZXR1cm4geyByZXN1bHQ6IGZhbHNlLCBtZXNzYWdlOiBgU2hpcCBpcyBpbnZhbGlkIGxlbmd0aC4gSXQgbXVzdCBiZSAke3NoaXAubGVuZ3RofSBzcXVhcmVzIGxvbmcuYCB9O1xuICAgIGlmIChzdGFydENvb3JkWzBdID4gZW5kQ29vcmRbMF0gfHwgc3RhcnRDb29yZFsxXSA+IGVuZENvb3JkWzFdKSBcbiAgICAgIHJldHVybiB7IHJlc3VsdDogZmFsc2UsIG1lc3NhZ2U6IGBTaGlwIG11c3Qgbm90IGJlIGlucHV0dGVkIGluIGEgcmV2ZXJzZSBkaXJlY3Rpb25gIH07XG4gICAgcmV0dXJuIHsgcmVzdWx0OiB0cnVlIH07XG4gIH07XG5cbiAgY29uc3QgZG9TcXVhcmVzT3ZlcmxhcCA9IChzdGFydCwgZW5kLCBzaGlwTmFtZSkgPT4ge1xuICAgIC8vIENoZWNrIGlmIGVhY2ggZ3JpZCBzcXVhcmUgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCBjb29yZHNcbiAgICAvLyBhcmUgbm90IG9jY3VwaWVkIGFscmVhZHlcbiAgICBpZiAoTWF0aC5hYnMoc3RhcnRbMF0gLSBlbmRbMF0pID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0WzBdOyBpIDw9IGVuZFswXTsgaSsrKSB7XG4gICAgICAgIGlmIChncmlkW2ldW3N0YXJ0WzFdXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHNoaXBOYW1lICYmIGdyaWRbaV1bc3RhcnRbMV1dLnNoaXAgIT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IHRydWUsIG1lc3NhZ2U6IGBTaGlwIG11c3Qgbm90IG92ZXJsYXAgd2l0aCBvdGhlciBzaGlwc2AgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFzaGlwTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiB0cnVlLCBtZXNzYWdlOiBgU2hpcCBtdXN0IG5vdCBvdmVybGFwIHdpdGggb3RoZXIgc2hpcHNgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHN0YXJ0WzFdIC0gZW5kWzFdKSA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFsxXTsgaSA8PSBlbmRbMV07IGkrKykge1xuICAgICAgICBpZiAoZ3JpZFtzdGFydFswXV1baV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzaGlwTmFtZSAmJiBncmlkW3N0YXJ0WzBdXVtpXS5zaGlwICE9PSBzaGlwTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiB0cnVlLCBtZXNzYWdlOiBgU2hpcCBtdXN0IG5vdCBvdmVybGFwIHdpdGggb3RoZXIgc2hpcHNgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFzaGlwTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiB0cnVlLCBtZXNzYWdlOiBgU2hpcCBtdXN0IG5vdCBvdmVybGFwIHdpdGggb3RoZXIgc2hpcHNgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdyaWRbc3RhcnRbMF1dW2VuZFsxXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc2hpcE5hbWUgJiYgZ3JpZFtzdGFydFswXV1bZW5kWzFdXS5zaGlwICE9PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogdHJ1ZSwgbWVzc2FnZTogYFNoaXAgbXVzdCBub3Qgb3ZlcmxhcCB3aXRoIG90aGVyIHNoaXBzYCB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXNoaXBOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiB0cnVlLCBtZXNzYWdlOiBgU2hpcCBtdXN0IG5vdCBvdmVybGFwIHdpdGggb3RoZXIgc2hpcHNgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyByZXN1bHQ6IGZhbHNlIH07XG4gIH1cblxuICBjb25zdCBwdXNoU2hpcCA9IChzdGFydENvb3JkLCBlbmRDb29yZCwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IGFkZGVkQ29vcmRzID0gW107XG4gICAgLy8gRmlsbCBpbiB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzXG4gICAgaWYgKE1hdGguYWJzKHN0YXJ0Q29vcmRbMF0gLSBlbmRDb29yZFswXSkgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRDb29yZFswXTsgaSA8PSBlbmRDb29yZFswXTsgaSsrKSB7XG4gICAgICAgIGdyaWRbaV1bc3RhcnRDb29yZFsxXV0gPSBzaGlwO1xuICAgICAgICBzaGlwQ29vcmRzLnB1c2goW2ksIHN0YXJ0Q29vcmRbMV1dKTtcbiAgICAgICAgYWRkZWRDb29yZHMucHVzaChbaSwgc3RhcnRDb29yZFsxXV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoc3RhcnRDb29yZFsxXSAtIGVuZENvb3JkWzFdKSA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydENvb3JkWzFdOyBpIDw9IGVuZENvb3JkWzFdOyBpKyspIHtcbiAgICAgICAgZ3JpZFtzdGFydENvb3JkWzBdXVtpXSA9IHNoaXA7XG4gICAgICAgIHNoaXBDb29yZHMucHVzaChbc3RhcnRDb29yZFswXSwgaV0pO1xuICAgICAgICBhZGRlZENvb3Jkcy5wdXNoKFtzdGFydENvb3JkWzBdLCBpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGdyaWRbc3RhcnRDb29yZFswXV1bZW5kQ29vcmRbMV1dID0gc2hpcDtcbiAgICAgIHNoaXBDb29yZHMucHVzaChbc3RhcnRDb29yZFswXSwgZW5kQ29vcmRbMV1dKTtcbiAgICAgIGFkZGVkQ29vcmRzLnB1c2goW3N0YXJ0Q29vcmRbMF0sIGVuZENvb3JkWzFdXSk7XG4gICAgfVxuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgcmV0dXJuIGFkZGVkQ29vcmRzXG4gIH1cbiAgXG4gIGNvbnN0IGFkZFNoaXAgPSAoc3RhcnRDb29yZCwgZW5kQ29vcmQsIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICAgIGlmICghYXJlQ29vcmRzVmFsaWQoc2hpcCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpLnJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGRvU3F1YXJlc092ZXJsYXAoc3RhcnRDb29yZCwgZW5kQ29vcmQpLnJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgcHVzaFNoaXAoc3RhcnRDb29yZCwgZW5kQ29vcmQsIHNoaXApO1xuICAgIHJldHVybiBzaGlwO1xuICB9O1xuXG4gIGNvbnN0IHJhbmRvbWx5QWRkU2hpcCA9IChzaGlwTGVuZ3RoLCBzaGlwTmFtZSkgPT4ge1xuICAgIGxldCBzdGFydENvb3JkO1xuICAgIGxldCBlbmRDb29yZDtcbiAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTsgLy8gUmFuZG9tbHkgY2hvb3NlIHNoaXAgZGlyZWN0aW9uO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHsgLy8gdmVydGljYWwgZGlyZWN0aW9uXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCByb3dTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooOS0oc2hpcExlbmd0aC0yKSkpO1xuICAgICAgICBjb25zdCByb3dFbmQgPSByb3dTdGFydCArIChzaGlwTGVuZ3RoIC0gMSk7XG4gICAgICAgIGNvbnN0IGNvbFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgY29uc3QgY29sRW5kID0gY29sU3RhcnQ7XG4gICAgICAgIHN0YXJ0Q29vcmQgPSBbY29sU3RhcnQsIHJvd1N0YXJ0XTtcbiAgICAgICAgZW5kQ29vcmQgPSBbY29sRW5kLCByb3dFbmRdO1xuICAgICAgICBpZiAoIWRvU3F1YXJlc092ZXJsYXAoc3RhcnRDb29yZCwgZW5kQ29vcmQpLnJlc3VsdCkge1xuICAgICAgICAgIHB1c2hTaGlwKHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBTaGlwKHNoaXBMZW5ndGgsIHNoaXBOYW1lKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBob3Jpem9udGFsIGRpcmVjdGlvblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3Qgcm93U3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApOyBcbiAgICAgICAgY29uc3Qgcm93RW5kID0gcm93U3RhcnQ7XG4gICAgICAgIGNvbnN0IGNvbFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKig5LShzaGlwTGVuZ3RoLTIpKSk7XG4gICAgICAgIGNvbnN0IGNvbEVuZCA9IGNvbFN0YXJ0ICsgKHNoaXBMZW5ndGggLSAxKTtcbiAgICAgICAgc3RhcnRDb29yZCA9IFtjb2xTdGFydCwgcm93U3RhcnRdO1xuICAgICAgICBlbmRDb29yZCA9IFtjb2xFbmQsIHJvd0VuZF07XG4gICAgICAgIGlmICghZG9TcXVhcmVzT3ZlcmxhcChzdGFydENvb3JkLCBlbmRDb29yZCkucmVzdWx0KSB7XG4gICAgICAgICAgcHVzaFNoaXAoc3RhcnRDb29yZCwgZW5kQ29vcmQsIHNoaXApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHN0YXJ0Q29vcmQsIGVuZENvb3JkIH1cbiAgfVxuXG4gIGNvbnN0IGdldFNoaXAgPSAoc2hpcE5hbWUpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzaGlwc1tpXS5zaGlwID09PSBzaGlwTmFtZSkgcmV0dXJuIHNoaXBzW2ldO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwRnJvbUdyaWQgPSAoc2hpcE5hbWUpID0+IHtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoZ3JpZFtpXVtqXSAhPT0gdW5kZWZpbmVkICYmIGdyaWRbaV1bal0uc2hpcCA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBncmlkW2ldW2pdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNvb3Jkcy5wdXNoKFtpLGpdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29vcmRzO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXBGcm9tU2hpcENvb3JkcyA9IChjb29yZHMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwQ29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChzaGlwQ29vcmRzW2pdWzBdID09PSBjb29yZHNbaV1bMF0gJiYgc2hpcENvb3Jkc1tqXVsxXSA9PT0gY29vcmRzW2ldWzFdKSBcbiAgICAgICAgICBzaGlwQ29vcmRzLnNwbGljZShqLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVTaGlwID0gKHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBzaGlwTmFtZSkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBnZXRTaGlwKHNoaXBOYW1lKTtcbiAgICBpZiAoIWFyZUNvb3Jkc1ZhbGlkKHNoaXAsIHN0YXJ0Q29vcmQsIGVuZENvb3JkKS5yZXN1bHQpIFxuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogYXJlQ29vcmRzVmFsaWQoc2hpcCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpLm1lc3NhZ2UgfTtcbiAgICBpZiAoZG9TcXVhcmVzT3ZlcmxhcChzdGFydENvb3JkLCBlbmRDb29yZCwgc2hpcE5hbWUpLnJlc3VsdCkgXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBkb1NxdWFyZXNPdmVybGFwKHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBzaGlwTmFtZSkubWVzc2FnZX07XG4gICAgY29uc3QgcmVtb3ZlZENvb3JkcyA9IHJlbW92ZVNoaXBGcm9tR3JpZChzaGlwTmFtZSk7XG4gICAgcmVtb3ZlU2hpcEZyb21TaGlwQ29vcmRzKHJlbW92ZWRDb29yZHMpO1xuICAgIGNvbnN0IGFkZGVkQ29vcmRzID0gcHVzaFNoaXAoc3RhcnRDb29yZCwgZW5kQ29vcmQsIHNoaXApO1xuICAgIHJldHVybiB7bWVzc2FnZTogbnVsbCwgcmVtb3ZlZENvb3JkcywgYWRkZWRDb29yZHN9O1xuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIGhpdCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAvLyBSZXR1cm5zIG51bGwgaWYgaW52YWxpZCBtb3ZlXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGl0c1tpXVswXSA9PT0gY29vcmRzWzBdICYmIGhpdHNbaV1bMV0gPT09IGNvb3Jkc1sxXSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1pc3Nlc1tpXVswXSA9PT0gY29vcmRzWzBdICYmIG1pc3Nlc1tpXVsxXSA9PT0gY29vcmRzWzFdKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIGlmIChncmlkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBncmlkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXS5oaXQoKTtcbiAgICAgIGhpdHMucHVzaChjb29yZHMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pc3Nlcy5wdXNoKGNvb3Jkcyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNoaXBzW2ldLmlzU3VuaygpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBncmlkLmxlbmd0aCA9IDA7XG4gICAgc2hpcHMubGVuZ3RoID0gMDtcbiAgICBzaGlwQ29vcmRzLmxlbmd0aCA9IDA7XG4gICAgaGl0cy5sZW5ndGggPSAwO1xuICAgIG1pc3Nlcy5sZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IDEwOyBpKyspIGdyaWQucHVzaChbXSk7XG4gIH1cblxuICByZXR1cm4geyBcbiAgICBhZGRTaGlwLFxuICAgIHJhbmRvbWx5QWRkU2hpcCxcbiAgICBncmlkLCBcbiAgICBzaGlwcywgXG4gICAgcmVjZWl2ZUF0dGFjaywgXG4gICAgbWlzc2VzLCBcbiAgICBhcmVBbGxTaGlwc1N1bmssIFxuICAgIGhpdHMsXG4gICAgc2hpcENvb3JkcyxcbiAgICB1cGRhdGVTaGlwLFxuICAgIHJlc2V0XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkOyIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcihnYW1lQm9hcmQpIHtcbiAgY29uc3QgbW92ZXNRdWV1ZSA9IFtdO1xuICBsZXQgY3VycmVudEhpdDtcbiAgbGV0IG9wcG9zaXRlQ29vcmQ7XG4gIGxldCBmaXJzdEhpdDtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChjb29yZHMpID0+IHtcbiAgICByZXR1cm4gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tFbmVteVJhbmRvbWx5ID0gKCkgPT4ge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCBjb29yZHMgPSBbY29sLCByb3ddO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgcXVldWVNb3Zlcyhjb29yZHMpO1xuICAgICAgICBjdXJyZW50SGl0ID0gY29vcmRzO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkgcmV0dXJuIHsgY29vcmRzLCByZXN1bHQgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFzTW92ZXNRdWV1ZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuICEobW92ZXNRdWV1ZS5sZW5ndGggPT09IDApO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRhaW5zQ29vcmQgPSAoYXJyYXksIGNvb3JkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvb3JkWzBdID09PSBhcnJheVtpXVswXSAmJiBjb29yZFsxXSA9PT0gYXJyYXlbaV1bMV0pIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBhbHJlYWR5SGl0ID0gKGNvb3JkKSA9PiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zQ29vcmQoZ2FtZUJvYXJkLmhpdHMsIGNvb3JkKTtcbiAgfTtcbiAgXG4gIGNvbnN0IGFscmVhZHlNaXNzID0gKGNvb3JkKSA9PiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zQ29vcmQoZ2FtZUJvYXJkLm1pc3NlcywgY29vcmQpO1xuICB9XG5cbiAgY29uc3QgcXVldWVNb3ZlcyA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBsZWZ0Q29vcmQgPSBbY29vcmRzWzBdIC0gMSwgY29vcmRzWzFdXTtcbiAgICBjb25zdCBhYm92ZUNvb3JkID0gW2Nvb3Jkc1swXSwgY29vcmRzWzFdIC0gMV07XG4gICAgY29uc3QgcmlnaHRDb29yZCA9IFtjb29yZHNbMF0gKyAxLCBjb29yZHNbMV1dO1xuICAgIGNvbnN0IGJvdHRvbUNvb3JkID0gW2Nvb3Jkc1swXSwgY29vcmRzWzFdICsgMV07XG5cbiAgICBpZiAobGVmdENvb3JkWzBdID49IDAgJiYgIWFscmVhZHlIaXQobGVmdENvb3JkKSAmJiAhYWxyZWFkeU1pc3MobGVmdENvb3JkKSkgXG4gICAgICBtb3Zlc1F1ZXVlLnB1c2gobGVmdENvb3JkKTtcbiAgICBpZiAoYWJvdmVDb29yZFsxXSA+PSAwICYmICFhbHJlYWR5SGl0KGFib3ZlQ29vcmQpICYmICFhbHJlYWR5TWlzcyhhYm92ZUNvb3JkKSkgXG4gICAgICBtb3Zlc1F1ZXVlLnB1c2goYWJvdmVDb29yZCk7XG4gICAgaWYgKHJpZ2h0Q29vcmRbMF0gPD0gOSAmJiAhYWxyZWFkeUhpdChyaWdodENvb3JkKSAmJiAhYWxyZWFkeU1pc3MocmlnaHRDb29yZCkpIFxuICAgICAgbW92ZXNRdWV1ZS5wdXNoKHJpZ2h0Q29vcmQpO1xuICAgIGlmIChib3R0b21Db29yZFsxXSA8PSA5ICYmICFhbHJlYWR5SGl0KGJvdHRvbUNvb3JkKSAmJiAhYWxyZWFkeU1pc3MoYm90dG9tQ29vcmQpKSBcbiAgICAgIG1vdmVzUXVldWUucHVzaChib3R0b21Db29yZCk7XG4gIH1cblxuICBjb25zdCBleGVjdXRpb25IZWxwZXIgPSAoY29vcmRzKSA9PiB7XG4gICAgbGV0IG5ld0Nvb3JkcztcbiAgICBsZXQgY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHM7XG4gICAgaWYgKGNvb3Jkc1swXSA9PT0gY3VycmVudEhpdFswXSkge1xuICAgICAgaWYgKGNvb3Jkc1sxXSA+IGN1cnJlbnRIaXRbMV0pIHtcbiAgICAgICAgY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHMgPSBbY29vcmRzWzBdLCBjb29yZHNbMV0gLSAyXTtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZU9wcG9zaXRlQ29vcmRzWzFdID49IDAgJiYgIWFscmVhZHlIaXQoY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHMpICYmICFhbHJlYWR5TWlzcyhjYW5kaWRhdGVPcHBvc2l0ZUNvb3JkcykpIHtcbiAgICAgICAgICBvcHBvc2l0ZUNvb3JkID0gY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHM7XG4gICAgICAgICAgZmlyc3RIaXQgPSBjdXJyZW50SGl0O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoY29vcmRzWzFdICsgMSA8PSA5KSB7XG4gICAgICAgICAgbmV3Q29vcmRzID0gW2Nvb3Jkc1swXSwgY29vcmRzWzFdICsgMV07XG4gICAgICAgICAgaWYgKCFhbHJlYWR5SGl0KG5ld0Nvb3JkcykgJiYgIWFscmVhZHlNaXNzKG5ld0Nvb3JkcykpIHtcbiAgICAgICAgICAgIG1vdmVzUXVldWUucHVzaChuZXdDb29yZHMpO1xuICAgICAgICAgICAgY3VycmVudEhpdCA9IGNvb3JkcztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjb29yZHNbMV0gPCBjdXJyZW50SGl0WzFdKSB7XG4gICAgICAgIGNhbmRpZGF0ZU9wcG9zaXRlQ29vcmRzID0gW2Nvb3Jkc1swXSwgY29vcmRzWzFdICsgMl07XG4gICAgICAgIGlmIChjYW5kaWRhdGVPcHBvc2l0ZUNvb3Jkc1sxXSA8PSA5ICYmICFhbHJlYWR5SGl0KGNhbmRpZGF0ZU9wcG9zaXRlQ29vcmRzKSAmJiAhYWxyZWFkeU1pc3MoY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHMpKSB7XG4gICAgICAgICAgZmlyc3RIaXQgPSBjdXJyZW50SGl0O1xuICAgICAgICAgIG9wcG9zaXRlQ29vcmQgPSBjYW5kaWRhdGVPcHBvc2l0ZUNvb3JkcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmRzWzFdIC0gMSA+PSAwKSB7XG4gICAgICAgICAgbmV3Q29vcmRzID0gW2Nvb3Jkc1swXSwgY29vcmRzWzFdIC0gMV07XG4gICAgICAgICAgaWYgKCFhbHJlYWR5SGl0KG5ld0Nvb3JkcykgJiYgIWFscmVhZHlNaXNzKG5ld0Nvb3JkcykpIHtcbiAgICAgICAgICAgIG1vdmVzUXVldWUucHVzaChuZXdDb29yZHMpO1xuICAgICAgICAgICAgY3VycmVudEhpdCA9IGNvb3JkcztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29vcmRzWzBdID4gY3VycmVudEhpdFswXSkge1xuICAgICAgICBjYW5kaWRhdGVPcHBvc2l0ZUNvb3JkcyA9IFtjb29yZHNbMF0gLSAyLCBjb29yZHNbMV1dO1xuICAgICAgICBpZiAoY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHNbMF0gPj0gMCAmJiAhYWxyZWFkeUhpdChjYW5kaWRhdGVPcHBvc2l0ZUNvb3JkcykgJiYgIWFscmVhZHlNaXNzKGNhbmRpZGF0ZU9wcG9zaXRlQ29vcmRzKSkge1xuICAgICAgICAgIGZpcnN0SGl0ID0gY3VycmVudEhpdDtcbiAgICAgICAgICBvcHBvc2l0ZUNvb3JkID0gY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3Jkc1swXSArIDEgPD0gOSkge1xuICAgICAgICAgIG5ld0Nvb3JkcyA9IFtjb29yZHNbMF0gKyAxLCBjb29yZHNbMV1dO1xuICAgICAgICAgIGlmICghYWxyZWFkeUhpdChuZXdDb29yZHMpICYmICFhbHJlYWR5TWlzcyhuZXdDb29yZHMpKSB7XG4gICAgICAgICAgICBtb3Zlc1F1ZXVlLnB1c2gobmV3Q29vcmRzKTtcbiAgICAgICAgICAgIGN1cnJlbnRIaXQgPSBjb29yZHM7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY29vcmRzWzBdIDwgY3VycmVudEhpdFswXSkge1xuICAgICAgICBjYW5kaWRhdGVPcHBvc2l0ZUNvb3JkcyA9IFtjb29yZHNbMF0gKyAyLCBjb29yZHNbMV1dO1xuICAgICAgICBpZiAoY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHNbMF0gPD0gOSAmJiAhYWxyZWFkeUhpdChjYW5kaWRhdGVPcHBvc2l0ZUNvb3JkcykgJiYgIWFscmVhZHlNaXNzKGNhbmRpZGF0ZU9wcG9zaXRlQ29vcmRzKSkge1xuICAgICAgICAgIGZpcnN0SGl0ID0gY3VycmVudEhpdDtcbiAgICAgICAgICBvcHBvc2l0ZUNvb3JkID0gY2FuZGlkYXRlT3Bwb3NpdGVDb29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3Jkc1swXSAtIDEgPj0gMCkge1xuICAgICAgICAgIG5ld0Nvb3JkcyA9IFtjb29yZHNbMF0gLSAxLCBjb29yZHNbMV1dO1xuICAgICAgICAgIGlmICghYWxyZWFkeUhpdChuZXdDb29yZHMpICYmICFhbHJlYWR5TWlzcyhuZXdDb29yZHMpKSB7XG4gICAgICAgICAgICBtb3Zlc1F1ZXVlLnB1c2gobmV3Q29vcmRzKTtcbiAgICAgICAgICAgIGN1cnJlbnRIaXQgPSBjb29yZHM7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXhlY3V0ZVF1ZXVlZE1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gbW92ZXNRdWV1ZS5zaGlmdCgpO1xuICAgIGlmIChhbHJlYWR5SGl0KGNvb3JkcykpIHtcbiAgICAgIGlmICghZXhlY3V0aW9uSGVscGVyKGNvb3JkcykpIHtcbiAgICAgICAgaWYgKG9wcG9zaXRlQ29vcmQpIHtcbiAgICAgICAgICBtb3Zlc1F1ZXVlLnB1c2gob3Bwb3NpdGVDb29yZCk7XG4gICAgICAgICAgb3Bwb3NpdGVDb29yZCA9IG51bGw7XG4gICAgICAgICAgY3VycmVudEhpdCA9IGZpcnN0SGl0O1xuICAgICAgICAgIGZpcnN0SGl0ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRhY2tFbmVteVJhbmRvbWx5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlUXVldWVkTW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgIG1vdmVzUXVldWUubGVuZ3RoID0gMDtcbiAgICAgIGV4ZWN1dGlvbkhlbHBlcihjb29yZHMpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IGZhbHNlICYmICFoYXNNb3Zlc1F1ZXVlZCgpKSB7XG4gICAgICBjdXJyZW50SGl0ID0gbnVsbDtcbiAgICAgIGlmIChvcHBvc2l0ZUNvb3JkKSB7XG4gICAgICAgIG1vdmVzUXVldWUucHVzaChvcHBvc2l0ZUNvb3JkKTtcbiAgICAgICAgb3Bwb3NpdGVDb29yZCA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRIaXQgPSBmaXJzdEhpdDtcbiAgICAgICAgZmlyc3RIaXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBjb29yZHMsIHJlc3VsdCB9XG4gIH1cblxuICByZXR1cm4geyBhdHRhY2tFbmVteSwgYXR0YWNrRW5lbXlSYW5kb21seSwgaGFzTW92ZXNRdWV1ZWQsIG1vdmVzUXVldWUsIHF1ZXVlTW92ZXMsIGV4ZWN1dGVRdWV1ZWRNb3ZlIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKGxlbmd0aCA9IDAsIHNoaXApIHtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH1cblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICB9XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBsZW5ndGggLSBoaXRzIDw9IDA7XG4gIH1cblxuICByZXR1cm4geyBnZXRIaXRzLCBoaXQsIGlzU3VuaywgbGVuZ3RoLCBzaGlwIH07XG59OyIsImltcG9ydCBnYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGNvbnN0IFZpZXcgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IHBsYXlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktc2VjdGlvbicpO1xuICBjb25zdCBwbGF5ZXJBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1hcmVhJyk7XG4gIGNvbnN0IGVuZW15QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmVteS1hcmVhJyk7XG4gIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtZm9ybS1zZWN0aW9uJyk7XG4gIGNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zdGF0dXMnKTtcbiAgbGV0IHBsYXllckF0dGFja0Rpc3BsYXk7XG4gIGxldCBlbmVteUF0dGFja0Rpc3BsYXk7XG4gIGxldCBpc0NvbXB1dGVyVHVybiA9IGZhbHNlO1xuXG4gIC8vKioqIEdhbWUgU3RhdHVzIFN0cmluZ3MgKioqL1xuICBjb25zdCBkZWZhdWx0SW5zdHJ1Y3Rpb25zID1cbiAgICAnUGxhY2UgeW91ciBzaGlwcyBieSBlbnRlcmluZyBzdGFydCBhbmQgZW5kIGNvb3JkaW5hdGVzIGJlbG93IGxpa2UgXFwnQTVcXCcgb3IgXFwnQjJcXCcuIFByZXNzIGNvbmZpcm0gd2hlbiByZWFkeS4nO1xuXG4gIC8vKioqIEZvcm0gICoqKi9cbiAgY29uc3Qgc2hpcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1mb3JtJyk7XG4gIGNvbnN0IHJhbmRvbVNoaXBzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbWl6ZS1zaGlwcy1idG4nKTtcbiAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWJ0bicpO1xuICBjb25zdCBjYXJyaWVyU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fycmllci1zdGFydCcpO1xuICBjb25zdCBjYXJyaWVyRW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJpZXItZW5kJyk7XG4gIGNvbnN0IGJhdHRsZXNoaXBTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVzaGlwLXN0YXJ0Jyk7XG4gIGNvbnN0IGJhdHRsZXNoaXBFbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlc2hpcC1lbmQnKTtcbiAgY29uc3QgY3J1aXNlclN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NydWlzZXItc3RhcnQnKTtcbiAgY29uc3QgY3J1aXNlckVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcnVpc2VyLWVuZCcpO1xuICBjb25zdCBzdWJtYXJpbmVTdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtYXJpbmUtc3RhcnQnKTtcbiAgY29uc3Qgc3VibWFyaW5lRW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1hcmluZS1lbmQnKTtcbiAgY29uc3QgZGVzdHJveWVyU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzdHJveWVyLXN0YXJ0Jyk7XG4gIGNvbnN0IGRlc3Ryb3llckVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0cm95ZXItZW5kJyk7XG5cbiAgLy8qKiogSGVscGVycyAqKiovL1xuICBjb25zdCBhZGREaXYgPSAoY29udGFpbmVyLCBjbGFzc2VzLCBpZCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlmIChpZCkgZGl2LmlkID0gaWQ7XG4gICAgaWYgKGNsYXNzZXMpIGRpdi5jbGFzc05hbWUgPSBjbGFzc2VzO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgYWRkVGV4dCA9IChjb250YWluZXIsIHRleHQsIGVsZW1lbnQsIGNsYXNzZXMpID0+IHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICBpZiAoY2xhc3NlcykgdGV4dEVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NlcztcbiAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICAgIHJldHVybiB0ZXh0RWxlbWVudDtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVDZWxsID0gKGNvbCwgcm93LCBjb2xvckNsYXNzLCBib2FyZElkKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtib2FyZElkfSAuYm9hcmQtY2VsbGApO1xuICAgIGNlbGxzW2NvbCtyb3cqMTBdLmNsYXNzTGlzdC50b2dnbGUoY29sb3JDbGFzcyk7XG4gIH07XG5cbiAgY29uc3QgcGFyc2VDb29yZHMgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBsZXR0ZXJzID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgcmV0dXJuIFtsZXR0ZXJzLmluZGV4T2YoaW5wdXRbMF0udG9VcHBlckNhc2UoKSksIHBhcnNlSW50KGlucHV0WzFdKV07XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRGlzcGxheSA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGl0ZXJhdGVTaGlwR3JpZCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjb3Bwb25lbnQtYm9hcmQgLmJvYXJkLWNlbGwnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wcG9uZW50Qm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrKG9wcG9uZW50Qm9hcmRbaV0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVDb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgaXNDb21wdXRlclR1cm4gPSAhaXNDb21wdXRlclR1cm47XG4gICAgZW5lbXlBcmVhLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1hbGxvd2VkJyk7XG4gIH07XG5cbiAgLy8qKiogRm9ybSBFdmVudHMgKioqL1xuICBjb25zdCBoYW5kbGVJbnB1dCA9IChzdGFydEZvcm0sIGVuZEZvcm0sIHNoaXBOYW1lKSA9PiB7XG4gICAgY29uc3QgcmVnZXggPSAvW0EtSmEtel1bMC05XS87XG4gICAgaWYgKHN0YXJ0Rm9ybS52YWx1ZS5sZW5ndGggPT09IDIgJiYgZW5kRm9ybS52YWx1ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgIGlmIChyZWdleC50ZXN0KHN0YXJ0Rm9ybS52YWx1ZSkgJiYgcmVnZXgudGVzdChlbmRGb3JtLnZhbHVlKSkge1xuICAgICAgICBjb25zdCBzdGFydENvb3JkID0gcGFyc2VDb29yZHMoW3N0YXJ0Rm9ybS52YWx1ZVswXSwgc3RhcnRGb3JtLnZhbHVlWzFdXSk7XG4gICAgICAgIGNvbnN0IGVuZENvb3JkID0gcGFyc2VDb29yZHMoW2VuZEZvcm0udmFsdWVbMF0sIGVuZEZvcm0udmFsdWVbMV1dKVxuICAgICAgICBnYW1lLmhhbmRsZVNoaXBVcGRhdGUoc3RhcnRDb29yZFswXSwgZW5kQ29vcmRbMF0sIHN0YXJ0Q29vcmRbMV0sIGVuZENvb3JkWzFdLCBzaGlwTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VTdGF0dXMoZ2FtZVN0YXR1cywgJ0lucHV0IG11c3QgaGF2ZSBhIGxldHRlciBmcm9tIEEgdG8gSiBmb2xsb3dlZCBieSBhIG51bWJlciBmcm9tIDAgdG8gOScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNldEdhbWVTdGF0dXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ2VsbCA9IChjZWxsKSA9PiB7XG4gICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdjbGljay1kaXNhYmxlZCcpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRGb3JtcyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzaGlwLWZvcm0tc2VjdGlvbiBpbnB1dCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcm1zW2ldLnZhbHVlID0gJyc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZXNldEZvcm1zKCk7XG4gICAgdG9nZ2xlRGlzcGxheShmb3JtU2VjdGlvbiwgJ2ZsZXgtc2hvdycpO1xuICAgIHBsYXlTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1hbGxvd2VkJyk7XG4gICAgY2hhbmdlU3RhdHVzKGdhbWVTdGF0dXMsICdDbGljayBvbiB0aGUgZW5lbXkgYm9hcmQgdG8gYXR0YWNrJyk7XG4gICAgaXRlcmF0ZVNoaXBHcmlkKHRvZ2dsZUNlbGwpO1xuICB9XG5cbiAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgdG9nZ2xlRGlzcGxheShyZXN0YXJ0QnV0dG9uLCAnaW5saW5lLXNob3cnKTtcbiAgICB0b2dnbGVEaXNwbGF5KGZvcm1TZWN0aW9uLCAnZmxleC1zaG93Jyk7XG4gICAgcmVmcmVzaEVuZW15Qm9hcmQoKTtcbiAgICByZWZyZXNoUGxheWVyQm9hcmQoKTtcbiAgICByZXNldEdhbWVTdGF0dXMoKTtcbiAgICBjaGFuZ2VTdGF0dXMocGxheWVyQXR0YWNrRGlzcGxheSwgJycpO1xuICAgIGNoYW5nZVN0YXR1cyhlbmVteUF0dGFja0Rpc3BsYXksICcnKTtcbiAgICBnYW1lLnJlc2V0R2FtZSgpO1xuICB9XG5cbiAgLy8qKiogRm9ybSBIYW5kbGVycyAqKiovXG4gIHNoaXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3RhcnRHYW1lKCk7XG4gIH0pO1xuICBjYXJyaWVyU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaGFuZGxlSW5wdXQoY2FycmllclN0YXJ0LCBjYXJyaWVyRW5kLCAnY2FycmllcicpO1xuICB9KTtcbiAgY2FycmllckVuZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBoYW5kbGVJbnB1dChjYXJyaWVyU3RhcnQsIGNhcnJpZXJFbmQsICdjYXJyaWVyJyk7XG4gIH0pO1xuICBiYXR0bGVzaGlwU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaGFuZGxlSW5wdXQoYmF0dGxlc2hpcFN0YXJ0LCBiYXR0bGVzaGlwRW5kLCAnYmF0dGxlc2hpcCcpO1xuICB9KTtcbiAgYmF0dGxlc2hpcEVuZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBoYW5kbGVJbnB1dChiYXR0bGVzaGlwU3RhcnQsIGJhdHRsZXNoaXBFbmQsICdiYXR0bGVzaGlwJyk7XG4gIH0pO1xuICBjcnVpc2VyU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaGFuZGxlSW5wdXQoY3J1aXNlclN0YXJ0LCBjcnVpc2VyRW5kLCAnY3J1aXNlcicpO1xuICB9KTtcbiAgY3J1aXNlckVuZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBoYW5kbGVJbnB1dChjcnVpc2VyU3RhcnQsIGNydWlzZXJFbmQsICdjcnVpc2VyJyk7XG4gIH0pO1xuICBzdWJtYXJpbmVTdGFydC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBoYW5kbGVJbnB1dChzdWJtYXJpbmVTdGFydCwgc3VibWFyaW5lRW5kLCAnc3VibWFyaW5lJyk7XG4gIH0pO1xuICBzdWJtYXJpbmVFbmQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaGFuZGxlSW5wdXQoc3VibWFyaW5lU3RhcnQsIHN1Ym1hcmluZUVuZCwgJ3N1Ym1hcmluZScpO1xuICB9KTtcbiAgZGVzdHJveWVyU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaGFuZGxlSW5wdXQoZGVzdHJveWVyU3RhcnQsIGRlc3Ryb3llckVuZCwgJ2Rlc3Ryb3llcicpO1xuICB9KTtcbiAgZGVzdHJveWVyRW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGhhbmRsZUlucHV0KGRlc3Ryb3llclN0YXJ0LCBkZXN0cm95ZXJFbmQsICdkZXN0cm95ZXInKTtcbiAgfSk7XG4gIHJhbmRvbVNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlc2V0Rm9ybXMoKTtcbiAgICBnYW1lLnJhbmRvbUJ1dHRvbkhhbmRsZXIoKTtcbiAgfSk7XG4gIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVzdGFydEdhbWUoKTtcbiAgfSk7XG4gIFxuICAvLyoqKiBET00gTWFuaXB1bGF0aW9uIEZ1bmN0aW9ucyAqKiovXG4gIGNvbnN0IGNoYW5nZVN0YXR1cyA9IChlbGVtZW50LCB0ZXh0KSA9PiB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cblxuICBjb25zdCBsb2FkR2FtZUJvYXJkID0gKGJvYXJkLCBib2FyZEVsZW1lbnQpID0+IHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgY29uc3QgbGV0dGVycyA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSiddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKGkgPT09IDAgJiYgaiA9PT0gMCkge1xuICAgICAgICAgIGFkZERpdihib2FyZEVsZW1lbnQpOyAvLyBBZGQgZW1wdHkgc3BhY2UgZm9yIDAsMCBjZWxsXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMCAmJiBqICE9PSAwKSB7XG4gICAgICAgICAgYWRkVGV4dChib2FyZEVsZW1lbnQsIGxldHRlcnNbai0xXSwgJ3AnKTtcbiAgICAgICAgfSBlbHNlIGlmIChqID09PSAwICYmIGkgIT09IDApIHtcbiAgICAgICAgICBhZGRUZXh0KGJvYXJkRWxlbWVudCwgY291bnRlciwgJ3AnKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0gZWxzZSBpZiAoaSAhPT0gMCAmJiBqIT09IDApIHtcbiAgICAgICAgICBjb25zdCBib2FyZENlbGwgPSBhZGREaXYoYm9hcmRFbGVtZW50LCAnYm9hcmQtY2VsbCcpO1xuICAgICAgICAgIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2NvbCcsIGAke2otMX1gKTtcbiAgICAgICAgICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdyb3cnLCBgJHtpLTF9YCk7XG4gICAgICAgICAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgnYm9hcmQnLCBib2FyZCk7XG4gICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrLWRpc2FibGVkJyk7XG4gICAgICAgICAgYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0NvbXB1dGVyVHVybikge1xuICAgICAgICAgICAgICBpZiAoZ2FtZS5oYW5kbGVQbGF5ZXJBdHRhY2soai0xLCBpLTEpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlU3RhdHVzKGdhbWVTdGF0dXMsICdJbnZhbGlkIG1vdmUuIFlvdSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgY29vcmRpbmF0ZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lLmRpZFBsYXllcldpbigpKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVQbGF5ZXJXaW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdG9nZ2xlQ29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICAgICAgICBnYW1lLmhhbmRsZU9wcG9uZW50QXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2FkQm9hcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gYWRkRGl2KHBsYXllckFyZWEsICdnYW1lLWJvYXJkJywgJ3BsYXllci1ib2FyZCcpO1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBhZGREaXYoZW5lbXlBcmVhLCAnZ2FtZS1ib2FyZCcsICdvcHBvbmVudC1ib2FyZCcpO1xuICAgIGxvYWRHYW1lQm9hcmQoJ3BsYXllcicsIHBsYXllckJvYXJkKTtcbiAgICBwbGF5ZXJBdHRhY2tEaXNwbGF5ID0gYWRkVGV4dChwbGF5ZXJBcmVhLCAnJywgJ3AnLCAnYXR0YWNrLWRpc3BsYXknKTtcbiAgICBsb2FkR2FtZUJvYXJkKCdvcHBvbmVudCcsIG9wcG9uZW50Qm9hcmQpO1xuICAgIGVuZW15QXR0YWNrRGlzcGxheSA9IGFkZFRleHQoZW5lbXlBcmVhLCAnJywgJ3AnLCAnYXR0YWNrLWRpc3BsYXknKTtcbiAgfTtcblxuICBjb25zdCBsb2FkU2hpcHMgPSAoY29vcmRzQXJyYXkpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgLmJvYXJkLWNlbGwnKTtcbiAgICBjb29yZHNBcnJheS5mb3JFYWNoKGNvb3JkcyA9PiB7XG4gICAgICBwbGF5ZXJDZWxsc1tjb29yZHNbMF0rY29vcmRzWzFdKjEwXS5jbGFzc0xpc3QudG9nZ2xlKCdzaGlwJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2hpcCA9IChjb29yZHNBcnJheSkgPT4ge1xuICAgIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1ib2FyZCAuYm9hcmQtY2VsbCcpO1xuICAgIGNvb3Jkc0FycmF5LmZvckVhY2goY29vcmRzID0+IHtcbiAgICAgIHBsYXllckNlbGxzW2Nvb3Jkc1swXStjb29yZHNbMV0qMTBdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAoY29vcmRzQXJyYXkpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgLmJvYXJkLWNlbGwnKTtcbiAgICBjb29yZHNBcnJheS5mb3JFYWNoKGNvb3JkcyA9PiB7XG4gICAgICBwbGF5ZXJDZWxsc1tjb29yZHNbMF0rY29vcmRzWzFdKjEwXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVQbGF5ZXJIaXQgPSAoY29sLCByb3cpID0+IHtcbiAgICBjb25zdCBsZXR0ZXJzID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgdXBkYXRlQ2VsbChjb2wsIHJvdywgJ2hpdCcsICdvcHBvbmVudC1ib2FyZCcpO1xuICAgIGNoYW5nZVN0YXR1cyhnYW1lU3RhdHVzLCAnWW91IGhpdCEgVGhlIGNvbXB1dGVyIGlzIG1ha2luZyBhIGRlY2lzaW9uLi4uJyk7XG4gICAgY2hhbmdlU3RhdHVzKGVuZW15QXR0YWNrRGlzcGxheSwgYFlvdSB0YXJnZXQgJHtsZXR0ZXJzW2NvbF19JHtyb3d9LiBIaXQhYCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGxheWVyTWlzcyA9IChjb2wsIHJvdykgPT4ge1xuICAgIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXTtcbiAgICB1cGRhdGVDZWxsKGNvbCwgcm93LCAnbWlzcycsICdvcHBvbmVudC1ib2FyZCcpO1xuICAgIGNoYW5nZVN0YXR1cyhnYW1lU3RhdHVzLCAnWW91IG1pc3MhIFRoZSBjb21wdXRlciBpcyBtYWtpbmcgYSBkZWNpc2lvbi4uLicpO1xuICAgIGNoYW5nZVN0YXR1cyhlbmVteUF0dGFja0Rpc3BsYXksIGBZb3UgdGFyZ2V0ICR7bGV0dGVyc1tjb2xdfSR7cm93fS4gTWlzcyFgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPcHBvbmVudEhpdCA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBjb2wgPSBjb29yZHNbMF07XG4gICAgY29uc3Qgcm93ID0gY29vcmRzWzFdO1xuICAgIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXTtcbiAgICB0b2dnbGVDb21wdXRlclR1cm4oKTtcbiAgICB1cGRhdGVDZWxsKGNvbCwgcm93LCAnaGl0JywgJ3BsYXllci1ib2FyZCcpO1xuICAgIGNoYW5nZVN0YXR1cyhnYW1lU3RhdHVzLCAnVGhlIGNvbXB1dGVyIGhpdHMhIENsaWNrIG9uIHRoZSBlbmVteSBib2FyZCB0byBhdHRhY2snKTtcbiAgICBjaGFuZ2VTdGF0dXMocGxheWVyQXR0YWNrRGlzcGxheSwgYEVuZW15IHRhcmdldHMgJHtsZXR0ZXJzW2NvbF19JHtyb3d9LiBIaXQhYCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT3Bwb25lbnRNaXNzID0gKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGNvbCA9IGNvb3Jkc1swXTtcbiAgICBjb25zdCByb3cgPSBjb29yZHNbMV1cbiAgICBjb25zdCBsZXR0ZXJzID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgdG9nZ2xlQ29tcHV0ZXJUdXJuKCk7XG4gICAgdXBkYXRlQ2VsbChjb2wsIHJvdywgJ21pc3MnLCAncGxheWVyLWJvYXJkJyk7XG4gICAgY2hhbmdlU3RhdHVzKGdhbWVTdGF0dXMsICdUaGUgY29tcHV0ZXIgbWlzc2VzISBDbGljayBvbiB0aGUgZW5lbXkgYm9hcmQgdG8gYXR0YWNrJyk7XG4gICAgY2hhbmdlU3RhdHVzKHBsYXllckF0dGFja0Rpc3BsYXksIGBFbmVteSB0YXJnZXRzICR7bGV0dGVyc1tjb2xdfSR7cm93fS4gTWlzcyFgKTtcbiAgfTtcblxuICBjb25zdCByZWZyZXNoUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyLWJvYXJkIC5ib2FyZC1jZWxsJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJDZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyQ2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgcGxheWVyQ2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICBwbGF5ZXJDZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hFbmVteUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVuZW15Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjb3Bwb25lbnQtYm9hcmQgLmJvYXJkLWNlbGwnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15Q2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVuZW15Q2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgICAgZW5lbXlDZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgIGVuZW15Q2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnbWlzcycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQbGF5ZXJXaW4gPSAoKSA9PiB7XG4gICAgY2hhbmdlU3RhdHVzKGdhbWVTdGF0dXMsICdZb3Ugc3VuayBhbGwgdGhlIGVuZW15IHNoaXBzLiBZb3Ugd2luIScpO1xuICAgIHBsYXlTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ25vdC1hbGxvd2VkJyk7XG4gICAgaXRlcmF0ZVNoaXBHcmlkKHRvZ2dsZUNlbGwpO1xuICAgIHRvZ2dsZURpc3BsYXkocmVzdGFydEJ1dHRvbiwgJ2lubGluZS1zaG93Jyk7XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVPcHBvbmVudFdpbiA9IChjb29yZHMpID0+IHtcbiAgICBjb25zdCBjb2wgPSBjb29yZHNbMF07XG4gICAgY29uc3Qgcm93ID0gY29vcmRzWzFdO1xuICAgIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0onXTtcbiAgICB1cGRhdGVDZWxsKGNvbCwgcm93LCAnaGl0JywgJ3BsYXllci1ib2FyZCcpO1xuICAgIGNoYW5nZVN0YXR1cyhwbGF5ZXJBdHRhY2tEaXNwbGF5LCBgRW5lbXkgdGFyZ2V0cyAke2xldHRlcnNbY29sXX0ke3Jvd30uIEhpdCFgKTtcbiAgICBjaGFuZ2VTdGF0dXMoZ2FtZVN0YXR1cywgJ1RoZSBlbmVteSBzdW5rIGFsbCB5b3VyIHNoaXBzLiBZb3UgbG9zZSEnKTtcbiAgICBwbGF5U2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdub3QtYWxsb3dlZCcpO1xuICAgIGl0ZXJhdGVTaGlwR3JpZCh0b2dnbGVDZWxsKTtcbiAgICB0b2dnbGVEaXNwbGF5KHJlc3RhcnRCdXR0b24sICdpbmxpbmUtc2hvdycpO1xuICAgIHRvZ2dsZUNvbXB1dGVyVHVybigpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVBsYWNlaG9sZGVyID0gKGZvcm1TdGFydCwgZm9ybUVuZCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpID0+IHtcbiAgICBjb25zdCBsZXR0ZXJzID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJ107XG4gICAgZm9ybVN0YXJ0LnBsYWNlaG9sZGVyID0gYCR7bGV0dGVyc1tzdGFydENvb3JkWzBdXX0ke3N0YXJ0Q29vcmRbMV19YDtcbiAgICBmb3JtRW5kLnBsYWNlaG9sZGVyID0gIGAke2xldHRlcnNbZW5kQ29vcmRbMF1dfSR7ZW5kQ29vcmRbMV19YDtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUNhcnJpZXJQbGFjZWhvbGRlciA9IChzdGFydENvb3JkLCBlbmRDb29yZCkgPT4ge1xuICAgIHVwZGF0ZVBsYWNlaG9sZGVyKGNhcnJpZXJTdGFydCwgY2FycmllckVuZCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUJhdHRsZXNoaXBQbGFjZWhvbGRlciA9IChzdGFydENvb3JkLCBlbmRDb29yZCkgPT4ge1xuICAgIHVwZGF0ZVBsYWNlaG9sZGVyKGJhdHRsZXNoaXBTdGFydCwgYmF0dGxlc2hpcEVuZCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUNydWlzZXJQbGFjZWhvbGRlciA9IChzdGFydENvb3JkLCBlbmRDb29yZCkgPT4ge1xuICAgIHVwZGF0ZVBsYWNlaG9sZGVyKGNydWlzZXJTdGFydCwgY3J1aXNlckVuZCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN1Ym1hcmluZVBsYWNlaG9sZGVyID0gKHN0YXJ0Q29vcmQsIGVuZENvb3JkKSA9PiB7XG4gICAgdXBkYXRlUGxhY2Vob2xkZXIoc3VibWFyaW5lU3RhcnQsIHN1Ym1hcmluZUVuZCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURlc3Ryb3llclBsYWNlaG9sZGVyID0gKHN0YXJ0Q29vcmQsIGVuZENvb3JkKSA9PiB7XG4gICAgdXBkYXRlUGxhY2Vob2xkZXIoZGVzdHJveWVyU3RhcnQsIGRlc3Ryb3llckVuZCwgc3RhcnRDb29yZCwgZW5kQ29vcmQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUludmFsaWRJbnB1dCA9IChtZXNzYWdlKSA9PiB7XG4gICAgY2hhbmdlU3RhdHVzKGdhbWVTdGF0dXMsIG1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3QgcmVzZXRHYW1lU3RhdHVzID0gKCkgPT4ge1xuICAgIGNoYW5nZVN0YXR1cyhnYW1lU3RhdHVzLCBkZWZhdWx0SW5zdHJ1Y3Rpb25zKVxuICB9XG4gXG4gIHJldHVybiB7IFxuICAgIGxvYWRCb2FyZHMsIFxuICAgIGxvYWRTaGlwcyxcbiAgICBhZGRTaGlwLFxuICAgIHJlbW92ZVNoaXAsXG4gICAgaGFuZGxlUGxheWVySGl0LCBcbiAgICBoYW5kbGVQbGF5ZXJNaXNzLCBcbiAgICBoYW5kbGVPcHBvbmVudEhpdCxcbiAgICBoYW5kbGVPcHBvbmVudE1pc3MsXG4gICAgcmVmcmVzaFBsYXllckJvYXJkLFxuICAgIHVwZGF0ZUNhcnJpZXJQbGFjZWhvbGRlcixcbiAgICB1cGRhdGVDcnVpc2VyUGxhY2Vob2xkZXIsXG4gICAgdXBkYXRlU3VibWFyaW5lUGxhY2Vob2xkZXIsXG4gICAgdXBkYXRlQmF0dGxlc2hpcFBsYWNlaG9sZGVyLFxuICAgIHVwZGF0ZURlc3Ryb3llclBsYWNlaG9sZGVyLFxuICAgIGhhbmRsZU9wcG9uZW50V2luLFxuICAgIGhhbmRsZUludmFsaWRJbnB1dCxcbiAgICByZXNldEdhbWVTdGF0dXNcbiAgfVxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmdhbWUuc2V0dXBHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9