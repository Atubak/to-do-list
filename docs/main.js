/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    color: black;\n    margin: 0%;\n}\n\n/* header section */\nheader {\n    display: flex;\n    padding: 10px 5%;\n    justify-content: space-between;\n    background-color: hsl(28, 87%, 87%);\n    user-select: none;\n    box-shadow: 0px 5px 5px hsl(28, 87%, 87%);\n    position: relative;\n}\n\n#logo, #plus {\n    background-color: hsl(28, 87%, 67%);\n    width: 25px;\n    text-align: center;\n    border-radius: 30%;\n}\n\n#plus:hover, #logo:hover {\n    background-color: hsl(28, 87%, 47%);\n    cursor: pointer;\n}\n\n#plus:active, #logo:active {\n    transform: translateY(3px);\n}\n\n/* content section */\n#content {\n    display: flex;\n}\n\n/* navigation or list section */\n#navigation {\n    background-color: hsl(0, 0%, 95%);\n    width: 150px;\n    height: 100vh;\n    padding: 40px;\n    user-select: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    box-shadow: 5px 0px 5px hsl(0, 0%, 55%);\n}\n\n#navToggle {\n    transform: scale(0.1, 0.1);\n    position: absolute;\n    left: -100px;\n}\n\n\n#listContainer {\n    color:hsl(0, 0%, 55%);\n}\n\n#listContainer > p {\n    display: block;\n    margin: 0px -20px;\n}\n\n#lists {\n    margin-top: 10px;\n    color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.list {\n    padding: 5px 7px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: hsl(0, 0%, 55%);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n}\n\n#addProject {\n    color: hsl(0, 0%, 55%);\n}\n\n#addProject:hover {\n    color: white;\n}\n\n.list:hover {\n    background-color: hsl(0, 0%, 55%);\n    color: white;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.list:active {\n    transform: translateY(3px);\n}\n\n.list.selected {\n    background-color: hsl(0, 0%, 55%);\n    color: white;  \n    border-radius: 6px;\n    box-shadow: 2px 2px 5px hsl(0, 0%, 55%);\n}\n\n\n\n/* current project section */\n\n#currentProject {\n    flex: 1 1 auto;\n    margin-left: 5%;\n    margin-top: 50px;\n}\n\n#itemContainer {\n    padding: 5% 5% 5% 0%;\n}\n\n.toDoItem, .addItem {\n    background-color: hsl(28, 87%, 87%);\n    margin: 5px;\n    padding: 5px 10px;\n    border-radius: 7px;\n}\n\n.generalInfo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.toDoItem.high {\n    background-color: hsl(28, 87%, 47%);\n}\n\n.toDoItem.mid {\n    background-color: hsl(28, 87%, 67%);    \n}\n\n.toDoItem.low {\n    background-color: hsl(28, 87%, 87%);\n}\n\n.itemTitle {\n    color: hsl(0, 0%, 25%);\n}\n\n.infoAndRemove {\n    display: flex;\n    gap: 5px;\n}\n\n.iButton {\n    margin-top: -2px;\n}\n\n.removeButton {\n    margin-top: 2px;\n}\n\n.addItem {\n    width: 45px;\n    user-select: none;\n}\n\n.addItem:hover {\n    cursor: pointer;\n    background-color: hsl(28, 87%, 47%);\n    color: white;\n}\n\n.addItem:active {\n    transform: translateY(3px);\n}\n\n#details {\n    background-color: hsl(28, 87%, 97%);\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,gBAAgB;IAChB,8BAA8B;IAC9B,mCAAmC;IACnC,iBAAiB;IACjB,yCAAyC;IACzC,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA,oBAAoB;AACpB;IACI,aAAa;AACjB;;AAEA,+BAA+B;AAC/B;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;IACjB,6BAA6B;IAC7B,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,uCAAuC;AAC3C;;;;AAIA,4BAA4B;;AAE5B;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mCAAmC;IACnC,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,mCAAmC;IACnC,cAAc;AAClB","sourcesContent":["body {\n    color: black;\n    margin: 0%;\n}\n\n/* header section */\nheader {\n    display: flex;\n    padding: 10px 5%;\n    justify-content: space-between;\n    background-color: hsl(28, 87%, 87%);\n    user-select: none;\n    box-shadow: 0px 5px 5px hsl(28, 87%, 87%);\n    position: relative;\n}\n\n#logo, #plus {\n    background-color: hsl(28, 87%, 67%);\n    width: 25px;\n    text-align: center;\n    border-radius: 30%;\n}\n\n#plus:hover, #logo:hover {\n    background-color: hsl(28, 87%, 47%);\n    cursor: pointer;\n}\n\n#plus:active, #logo:active {\n    transform: translateY(3px);\n}\n\n/* content section */\n#content {\n    display: flex;\n}\n\n/* navigation or list section */\n#navigation {\n    background-color: hsl(0, 0%, 95%);\n    width: 150px;\n    height: 100vh;\n    padding: 40px;\n    user-select: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    box-shadow: 5px 0px 5px hsl(0, 0%, 55%);\n}\n\n#navToggle {\n    transform: scale(0.1, 0.1);\n    position: absolute;\n    left: -100px;\n}\n\n\n#listContainer {\n    color:hsl(0, 0%, 55%);\n}\n\n#listContainer > p {\n    display: block;\n    margin: 0px -20px;\n}\n\n#lists {\n    margin-top: 10px;\n    color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.list {\n    padding: 5px 7px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: hsl(0, 0%, 55%);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n}\n\n#addProject {\n    color: hsl(0, 0%, 55%);\n}\n\n#addProject:hover {\n    color: white;\n}\n\n.list:hover {\n    background-color: hsl(0, 0%, 55%);\n    color: white;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.list:active {\n    transform: translateY(3px);\n}\n\n.list.selected {\n    background-color: hsl(0, 0%, 55%);\n    color: white;  \n    border-radius: 6px;\n    box-shadow: 2px 2px 5px hsl(0, 0%, 55%);\n}\n\n\n\n/* current project section */\n\n#currentProject {\n    flex: 1 1 auto;\n    margin-left: 5%;\n    margin-top: 50px;\n}\n\n#itemContainer {\n    padding: 5% 5% 5% 0%;\n}\n\n.toDoItem, .addItem {\n    background-color: hsl(28, 87%, 87%);\n    margin: 5px;\n    padding: 5px 10px;\n    border-radius: 7px;\n}\n\n.generalInfo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.toDoItem.high {\n    background-color: hsl(28, 87%, 47%);\n}\n\n.toDoItem.mid {\n    background-color: hsl(28, 87%, 67%);    \n}\n\n.toDoItem.low {\n    background-color: hsl(28, 87%, 87%);\n}\n\n.itemTitle {\n    color: hsl(0, 0%, 25%);\n}\n\n.infoAndRemove {\n    display: flex;\n    gap: 5px;\n}\n\n.iButton {\n    margin-top: -2px;\n}\n\n.removeButton {\n    margin-top: 2px;\n}\n\n.addItem {\n    width: 45px;\n    user-select: none;\n}\n\n.addItem:hover {\n    cursor: pointer;\n    background-color: hsl(28, 87%, 47%);\n    color: white;\n}\n\n.addItem:active {\n    transform: translateY(3px);\n}\n\n#details {\n    background-color: hsl(28, 87%, 97%);\n    display: block;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DomLoader.js":
/*!**************************!*\
  !*** ./src/DomLoader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewItemName": () => (/* binding */ addNewItemName),
/* harmony export */   "addNewProjectPopUp": () => (/* binding */ addNewProjectPopUp),
/* harmony export */   "fillContent": () => (/* binding */ fillContent),
/* harmony export */   "fillCustomProjects": () => (/* binding */ fillCustomProjects),
/* harmony export */   "initialDomLoader": () => (/* binding */ initialDomLoader),
/* harmony export */   "openItemDetails": () => (/* binding */ openItemDetails),
/* harmony export */   "removeHighLight": () => (/* binding */ removeHighLight),
/* harmony export */   "toggleNav": () => (/* binding */ toggleNav)
/* harmony export */ });
function initialDomLoader() {
    const body = document.querySelector("body");
    body.innerHTML = `
    <header>
        <div id="logo">𝕋</div>
        <div id="title">To Do List</div>
        <div id="plus">+</div>
    </header>

    <div id="content">
        <div id="navigation">
        
        <div id="listContainer">
        
            <p>Projects</p>
        
            <div id="lists">
            
            </br>
            <div id="addProject" class="list">+ New Project</div>
            </div>
        </div>
        
        </div>

        <div id="currentProject"></div>
    </div>
    `;
};

function fillCustomProjects(projectListArray) {   //populates custom projects in nav bar
    const container = document.querySelector("#lists");
    container.innerHTML = `</br>
        <div id="addProject" class="list">+ New Project</div>`;
    
    projectListArray.forEach(e => {
        const div = document.createElement("div");
        div.classList.add('list');
        div.id = e.name;
        div.textContent = e.name;
        container.insertBefore(div, container.lastElementChild);
        
        const br = document.createElement("br");
        div.insertAdjacentElement("afterend", br);
    })
};


// some functions that get called by fillcontent()

function projectNameSelector(projectName) {     //highlights the project in the nav bar
    const selectedElement = document.getElementById(projectName);
    selectedElement.classList.add("selected");
};

function fillProjectH1(projectName) {   //insert the project title
    const name = document.createElement("h1");
    name.textContent = projectName;
    return name;
};


function fillItemContainer(itemArray) { //creates a div to put the to do item in
    const div = document.createElement("div");
    div.id = "itemContainer";

    const addItemDiv = document.createElement("div");
    addItemDiv.classList.add("addItem");
    addItemDiv.textContent = "+ item";

    itemArray.forEach(e => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("toDoItem");
        itemDiv.classList.add(e.priority);
        itemDiv.innerHTML = `
            <div class="generalInfo">
                <input type="checkbox" ${e.done == true ? "checked" : ""}>
                <div class="itemTitle">${e.name}</div>
                <div class="infoAndRemove">
                    <div class="iButton">ⓘ</div>
                    <div class="removeButton">❌</div>
                </div>            
            </div>
        `;
        div.appendChild(itemDiv);
    });

    div.appendChild(addItemDiv);
    
    return div;
};



function fillContent(project) {     //combines 
    
    const currentProjectDiv = document.getElementById("currentProject");
    currentProjectDiv.innerHTML = "";
    const nameDiv = fillProjectH1(project.name);
    const itemContainerDiv = fillItemContainer(project.toDoItems);
    
    currentProjectDiv.appendChild(nameDiv);
    currentProjectDiv.appendChild(itemContainerDiv);    
    
    
    projectNameSelector(project.name);
};





function removeHighLight(navbarProjectDiv) {     //removes navbar highlight
    navbarProjectDiv[0].classList.remove("selected");
};



function addNewProjectPopUp() {
    const name = prompt("fill in name");
    return name;
};

function addNewItemName() {
    const name = prompt("fill in name");
    return name;
}

function toggleNav() {
    const nav = document.getElementById("content").firstElementChild;
    nav.id === "navigation" ? nav.id = "navToggle" : nav.id = "navigation";
    
};


function openItemDetails(itemDivToOpen, itemObject) {
    
    if (itemDivToOpen.classList.contains("expanded")) {
        itemDivToOpen.removeChild(itemDivToOpen.lastElementChild);
        itemDivToOpen.classList.toggle("expanded");
    } else {
    const detailDiv = document.createElement("div");
    detailDiv.id = "details";
    itemDivToOpen.classList.add("expanded");
    detailDiv.innerHTML = `
        <input type="text" id="description" placeholder="Description: ${itemObject.description}"> </br>
        <label for="dueDate">Complete Before:</label>
        <input type="date" id="dueDate" ${itemObject.dueDate}></br>
        <label for="priority">Priority</label>
        <select id="priority">
            <option value="mid">Mid</option>
            <option value="low">Low</option>
            <option value="high">High</option>
        </select>
    `;

    itemDivToOpen.appendChild(detailDiv);
    
    document.getElementById("priority").value = itemObject.priority; 

    };

};



/***/ }),

/***/ "./src/EventListeners.js":
/*!*******************************!*\
  !*** ./src/EventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findProject": () => (/* binding */ findProject)
/* harmony export */ });
function findProject(listArray, clickedProjectName) {
    return listArray.find(element => element.name === clickedProjectName);
};






/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
const projectList = {
    list: [],
    add: function(project) {this.list.push(project)},
    remove: function(projectName) {this.list = this.list.filter(e => e.name !== projectName)}
};

/***/ }),

/***/ "./src/projectObject.js":
/*!******************************!*\
  !*** ./src/projectObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFactory": () => (/* binding */ ProjectFactory)
/* harmony export */ });
const ProjectFactory = (projectName) => {
    let name = projectName;
    let toDoItems = [];

    function changeName(newName) {
        this.name = newName;
        // reloadProjectObjectInDom()
    }

    function addItem(newItemObject) {
        this.toDoItems.push(newItemObject);
        // reloadProjectObjectInDom()
    }

    function removeItem(itemToBeRemoved) {
        const index = toDoItems.indexOf(itemToBeRemoved);
        return this.toDoItems.splice(index, 1);
        // reloadProjectObjectInDom()
    }

    return {name, toDoItems, changeName, addItem, removeItem};
};


/***/ }),

/***/ "./src/toDoObject.js":
/*!***************************!*\
  !*** ./src/toDoObject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoObjectFactory": () => (/* binding */ ToDoObjectFactory)
/* harmony export */ });
const ToDoObjectFactory = (itemName)=> {
    let done = false;
    let name = itemName;
    let description = "Empty";
    let dueDate;
    let priority = "low";

    function changeName(newTitle) {
        return this.name = newTitle;
        // reloadItemObjectInDom()
    }

    function changeDescription(newDescription) {
        return this.description = newDescription;
        // reloadItemObjectInDom()
    }

    function changeDueDate(newDate) {
        return this.dueDate = newDate;
        // reloadItemObjectInDom()
    }

    function changePriority(newPriority) {
        return this.priority = newPriority;
        // reloadItemObjectInDom()
    }

    return {done, name, description, dueDate, priority, changeName, changeDescription, changeDueDate, changePriority};
};


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _projectObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectObject */ "./src/projectObject.js");
/* harmony import */ var _toDoObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoObject */ "./src/toDoObject.js");
/* harmony import */ var _DomLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DomLoader */ "./src/DomLoader.js");
/* harmony import */ var _EventListeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventListeners */ "./src/EventListeners.js");










//making example lists and items

_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.add((0,_projectObject__WEBPACK_IMPORTED_MODULE_2__.ProjectFactory)("Today"));
_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.add((0,_projectObject__WEBPACK_IMPORTED_MODULE_2__.ProjectFactory)("This Week"));


_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("do homework"));
_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("pingpong"));
_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("groceries"));
_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("watch a movie"));
_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("blabla"));
_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("blopblip"));


_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[1].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("bingo"));
_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[1].addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)("bango"));


console.log(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList);


//loading dom
(0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.initialDomLoader)();
(0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillCustomProjects)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list);
(0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0]);




//event listeners

document.addEventListener("click", delegateClick);

function delegateClick(e) {
    
    console.log(e.target);

    if (e.target.id === "logo") {
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.toggleNav)();
    };

    if (e.target.classList[0] === "list") { //if clicked on a project
        if (e.target.id === "addProject") { // if clicked on the +new project button
            const name = (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.addNewProjectPopUp)();
            if (!name) return;    
            _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.add((0,_projectObject__WEBPACK_IMPORTED_MODULE_2__.ProjectFactory)(name));
            (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillCustomProjects)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list);
            return (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list.length-1]);
        }; 

        const currentProject = document.getElementsByClassName("selected");
        const clickedProject = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list, e.target.id);
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.removeHighLight)(currentProject);
        return (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(clickedProject);
    };

    if (e.target.classList[0] === "addItem") {  //if clicked the + item button
        const projectName = document.querySelector("h1").textContent;
        const project = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list, projectName);
        const itemName = (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.addNewItemName)();
        if (!itemName) return;
        project.addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)(itemName));
        console.log(project);
        return (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(project);
    };

    if (e.target.classList[0] === "removeButton") { //if clicked the ❌ button
        const projectName = document.querySelector("h1").textContent;
        const project = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list, projectName);

        const itemName = e.target.parentElement.parentElement.getElementsByClassName("itemTitle")[0].textContent;
        const itemToBeRemoved = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(project.toDoItems, itemName);

        project.removeItem(itemToBeRemoved);
        return (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(project);
    };

    if (e.target.classList[0] === "iButton") {  //if clicked on info button
        const projectName = document.querySelector("h1").textContent;
        const project = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list, projectName);
        
        const itemDiv = e.target.parentElement.parentElement.parentElement;
        const itemToBeExpanded = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(project.toDoItems, itemDiv.getElementsByClassName("itemTitle")[0].textContent);
        
        
        // console.log(itemDiv);
        
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.openItemDetails)(itemDiv, itemToBeExpanded);
        
        // console.log(itemDiv, itemToBeExpanded);

        
    };

};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELG1CQUFtQixpQkFBaUIsR0FBRyxrQ0FBa0Msb0JBQW9CLHVCQUF1QixxQ0FBcUMsMENBQTBDLHdCQUF3QixnREFBZ0QseUJBQXlCLEdBQUcsa0JBQWtCLDBDQUEwQyxrQkFBa0IseUJBQXlCLHlCQUF5QixHQUFHLDhCQUE4QiwwQ0FBMEMsc0JBQXNCLEdBQUcsZ0NBQWdDLGlDQUFpQyxHQUFHLHFDQUFxQyxvQkFBb0IsR0FBRyxtREFBbUQsd0NBQXdDLG1CQUFtQixvQkFBb0Isb0JBQW9CLHdCQUF3QixvQkFBb0IsNkJBQTZCLDhCQUE4Qiw4Q0FBOEMsR0FBRyxnQkFBZ0IsaUNBQWlDLHlCQUF5QixtQkFBbUIsR0FBRyxzQkFBc0IsNEJBQTRCLEdBQUcsd0JBQXdCLHFCQUFxQix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxXQUFXLHVCQUF1QiwyQkFBMkIsd0JBQXdCLG9DQUFvQyw4QkFBOEIsdUJBQXVCLDBCQUEwQix1QkFBdUIsR0FBRyxpQkFBaUIsNkJBQTZCLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLGlCQUFpQix3Q0FBd0MsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxrQkFBa0IsaUNBQWlDLEdBQUcsb0JBQW9CLHdDQUF3QyxxQkFBcUIseUJBQXlCLDhDQUE4QyxHQUFHLDBEQUEwRCxxQkFBcUIsc0JBQXNCLHVCQUF1QixHQUFHLG9CQUFvQiwyQkFBMkIsR0FBRyx5QkFBeUIsMENBQTBDLGtCQUFrQix3QkFBd0IseUJBQXlCLEdBQUcsa0JBQWtCLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0IsMENBQTBDLEdBQUcsbUJBQW1CLDhDQUE4QyxHQUFHLG1CQUFtQiwwQ0FBMEMsR0FBRyxnQkFBZ0IsNkJBQTZCLEdBQUcsb0JBQW9CLG9CQUFvQixlQUFlLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLEdBQUcsb0JBQW9CLHNCQUFzQiwwQ0FBMEMsbUJBQW1CLEdBQUcscUJBQXFCLGlDQUFpQyxHQUFHLGNBQWMsMENBQTBDLHFCQUFxQixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsU0FBUyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsZ0NBQWdDLG1CQUFtQixpQkFBaUIsR0FBRyxrQ0FBa0Msb0JBQW9CLHVCQUF1QixxQ0FBcUMsMENBQTBDLHdCQUF3QixnREFBZ0QseUJBQXlCLEdBQUcsa0JBQWtCLDBDQUEwQyxrQkFBa0IseUJBQXlCLHlCQUF5QixHQUFHLDhCQUE4QiwwQ0FBMEMsc0JBQXNCLEdBQUcsZ0NBQWdDLGlDQUFpQyxHQUFHLHFDQUFxQyxvQkFBb0IsR0FBRyxtREFBbUQsd0NBQXdDLG1CQUFtQixvQkFBb0Isb0JBQW9CLHdCQUF3QixvQkFBb0IsNkJBQTZCLDhCQUE4Qiw4Q0FBOEMsR0FBRyxnQkFBZ0IsaUNBQWlDLHlCQUF5QixtQkFBbUIsR0FBRyxzQkFBc0IsNEJBQTRCLEdBQUcsd0JBQXdCLHFCQUFxQix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxXQUFXLHVCQUF1QiwyQkFBMkIsd0JBQXdCLG9DQUFvQyw4QkFBOEIsdUJBQXVCLDBCQUEwQix1QkFBdUIsR0FBRyxpQkFBaUIsNkJBQTZCLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLGlCQUFpQix3Q0FBd0MsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxrQkFBa0IsaUNBQWlDLEdBQUcsb0JBQW9CLHdDQUF3QyxxQkFBcUIseUJBQXlCLDhDQUE4QyxHQUFHLDBEQUEwRCxxQkFBcUIsc0JBQXNCLHVCQUF1QixHQUFHLG9CQUFvQiwyQkFBMkIsR0FBRyx5QkFBeUIsMENBQTBDLGtCQUFrQix3QkFBd0IseUJBQXlCLEdBQUcsa0JBQWtCLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0IsMENBQTBDLEdBQUcsbUJBQW1CLDhDQUE4QyxHQUFHLG1CQUFtQiwwQ0FBMEMsR0FBRyxnQkFBZ0IsNkJBQTZCLEdBQUcsb0JBQW9CLG9CQUFvQixlQUFlLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLEdBQUcsb0JBQW9CLHNCQUFzQiwwQ0FBMEMsbUJBQW1CLEdBQUcscUJBQXFCLGlDQUFpQyxHQUFHLGNBQWMsMENBQTBDLHFCQUFxQixHQUFHLG1CQUFtQjtBQUM1K087QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQ0FBZ0M7QUFDekUseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsaURBQWlEO0FBQ2pEO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHVCQUF1QjtBQUMvRjtBQUNBLDBDQUEwQyxtQkFBbUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BELG1DQUFtQztBQUNuQzs7Ozs7Ozs7Ozs7Ozs7QUNKTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNFO0FBQ0E7QUFDOEc7QUFDbEg7Ozs7O0FBSzdDOztBQUVBLDREQUFlLENBQUMsOERBQWM7QUFDOUIsNERBQWUsQ0FBQyw4REFBYzs7O0FBRzlCLHdFQUEyQixDQUFDLDhEQUFpQjtBQUM3Qyx3RUFBMkIsQ0FBQyw4REFBaUI7QUFDN0Msd0VBQTJCLENBQUMsOERBQWlCO0FBQzdDLHdFQUEyQixDQUFDLDhEQUFpQjtBQUM3Qyx3RUFBMkIsQ0FBQyw4REFBaUI7QUFDN0Msd0VBQTJCLENBQUMsOERBQWlCOzs7QUFHN0Msd0VBQTJCLENBQUMsOERBQWlCO0FBQzdDLHdFQUEyQixDQUFDLDhEQUFpQjs7O0FBRzdDLFlBQVksd0RBQVc7OztBQUd2QjtBQUNBLDREQUFnQjtBQUNoQiw4REFBa0IsQ0FBQyw2REFBZ0I7QUFDbkMsdURBQVcsQ0FBQyxnRUFBbUI7Ozs7O0FBSy9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscURBQVM7QUFDakI7O0FBRUEsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1Qyx5QkFBeUIsOERBQWtCO0FBQzNDO0FBQ0EsWUFBWSw0REFBZSxDQUFDLDhEQUFjO0FBQzFDLFlBQVksOERBQWtCLENBQUMsNkRBQWdCO0FBQy9DLG1CQUFtQix1REFBVyxDQUFDLDZEQUFnQixDQUFDLG9FQUF1QjtBQUN2RTs7QUFFQTtBQUNBLCtCQUErQiw0REFBVyxDQUFDLDZEQUFnQjtBQUMzRCxRQUFRLDJEQUFlO0FBQ3ZCLGVBQWUsdURBQVc7QUFDMUI7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0Esd0JBQXdCLDREQUFXLENBQUMsNkRBQWdCO0FBQ3BELHlCQUF5QiwwREFBYztBQUN2QztBQUNBLHdCQUF3Qiw4REFBaUI7QUFDekM7QUFDQSxlQUFlLHVEQUFXO0FBQzFCOztBQUVBLG9EQUFvRDtBQUNwRDtBQUNBLHdCQUF3Qiw0REFBVyxDQUFDLDZEQUFnQjs7QUFFcEQ7QUFDQSxnQ0FBZ0MsNERBQVc7O0FBRTNDO0FBQ0EsZUFBZSx1REFBVztBQUMxQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQSx3QkFBd0IsNERBQVcsQ0FBQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBLGlDQUFpQyw0REFBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWU7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RvbUxvYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAwJTtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2xvZ28sICNwbHVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuXFxuI3BsdXM6aG92ZXIsICNsb2dvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3BsdXM6YWN0aXZlLCAjbG9nbzphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuLyogY29udGVudCBzZWN0aW9uICovXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIG9yIGxpc3Qgc2VjdGlvbiAqL1xcbiNuYXZpZ2F0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA1cHggaHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG4jbmF2VG9nZ2xlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTEwMHB4O1xcbn1cXG5cXG5cXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIGNvbG9yOmhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgPiBwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4IC0yMHB4O1xcbn1cXG5cXG4jbGlzdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxufVxcblxcbi5saXN0LnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBjb2xvcjogd2hpdGU7ICBcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcblxcblxcbi8qIGN1cnJlbnQgcHJvamVjdCBzZWN0aW9uICovXFxuXFxuI2N1cnJlbnRQcm9qZWN0IHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIge1xcbiAgICBwYWRkaW5nOiA1JSA1JSA1JSAwJTtcXG59XFxuXFxuLnRvRG9JdGVtLCAuYWRkSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmdlbmVyYWxJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9Eb0l0ZW0uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbn1cXG5cXG4udG9Eb0l0ZW0ubWlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7ICAgIFxcbn1cXG5cXG4udG9Eb0l0ZW0ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxufVxcblxcbi5pdGVtVGl0bGUge1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbn1cXG5cXG4uaW5mb0FuZFJlbW92ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uaUJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcbi5yZW1vdmVCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5hZGRJdGVtIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYWRkSXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZEl0ZW06YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDk3JSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7Ozs7QUFJQSw0QkFBNEI7O0FBRTVCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAwJTtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2xvZ28sICNwbHVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuXFxuI3BsdXM6aG92ZXIsICNsb2dvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3BsdXM6YWN0aXZlLCAjbG9nbzphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuLyogY29udGVudCBzZWN0aW9uICovXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIG9yIGxpc3Qgc2VjdGlvbiAqL1xcbiNuYXZpZ2F0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA1cHggaHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG4jbmF2VG9nZ2xlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTEwMHB4O1xcbn1cXG5cXG5cXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIGNvbG9yOmhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgPiBwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4IC0yMHB4O1xcbn1cXG5cXG4jbGlzdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxufVxcblxcbi5saXN0LnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBjb2xvcjogd2hpdGU7ICBcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcblxcblxcbi8qIGN1cnJlbnQgcHJvamVjdCBzZWN0aW9uICovXFxuXFxuI2N1cnJlbnRQcm9qZWN0IHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIge1xcbiAgICBwYWRkaW5nOiA1JSA1JSA1JSAwJTtcXG59XFxuXFxuLnRvRG9JdGVtLCAuYWRkSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmdlbmVyYWxJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9Eb0l0ZW0uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbn1cXG5cXG4udG9Eb0l0ZW0ubWlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7ICAgIFxcbn1cXG5cXG4udG9Eb0l0ZW0ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxufVxcblxcbi5pdGVtVGl0bGUge1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbn1cXG5cXG4uaW5mb0FuZFJlbW92ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uaUJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcbi5yZW1vdmVCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5hZGRJdGVtIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYWRkSXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZEl0ZW06YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDk3JSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGluaXRpYWxEb21Mb2FkZXIoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+8J2VizwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidGl0bGVcIj5UbyBEbyBMaXN0PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwbHVzXCI+KzwvZGl2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBpZD1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJsaXN0Q29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgPHA+UHJvamVjdHM8L3A+XG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBpZD1cImxpc3RzXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWRkUHJvamVjdFwiIGNsYXNzPVwibGlzdFwiPisgTmV3IFByb2plY3Q8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjdXJyZW50UHJvamVjdFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG59O1xuXG5mdW5jdGlvbiBmaWxsQ3VzdG9tUHJvamVjdHMocHJvamVjdExpc3RBcnJheSkgeyAgIC8vcG9wdWxhdGVzIGN1c3RvbSBwcm9qZWN0cyBpbiBuYXYgYmFyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0c1wiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYDwvYnI+XG4gICAgICAgIDxkaXYgaWQ9XCJhZGRQcm9qZWN0XCIgY2xhc3M9XCJsaXN0XCI+KyBOZXcgUHJvamVjdDwvZGl2PmA7XG4gICAgXG4gICAgcHJvamVjdExpc3RBcnJheS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICBkaXYuaWQgPSBlLm5hbWU7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGUubmFtZTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShkaXYsIGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgYnIpO1xuICAgIH0pXG59O1xuXG5cbi8vIHNvbWUgZnVuY3Rpb25zIHRoYXQgZ2V0IGNhbGxlZCBieSBmaWxsY29udGVudCgpXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lU2VsZWN0b3IocHJvamVjdE5hbWUpIHsgICAgIC8vaGlnaGxpZ2h0cyB0aGUgcHJvamVjdCBpbiB0aGUgbmF2IGJhclxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lKTtcbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufTtcblxuZnVuY3Rpb24gZmlsbFByb2plY3RIMShwcm9qZWN0TmFtZSkgeyAgIC8vaW5zZXJ0IHRoZSBwcm9qZWN0IHRpdGxlXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG59O1xuXG5cbmZ1bmN0aW9uIGZpbGxJdGVtQ29udGFpbmVyKGl0ZW1BcnJheSkgeyAvL2NyZWF0ZXMgYSBkaXYgdG8gcHV0IHRoZSB0byBkbyBpdGVtIGluXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcIml0ZW1Db250YWluZXJcIjtcblxuICAgIGNvbnN0IGFkZEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcImFkZEl0ZW1cIik7XG4gICAgYWRkSXRlbURpdi50ZXh0Q29udGVudCA9IFwiKyBpdGVtXCI7XG5cbiAgICBpdGVtQXJyYXkuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcInRvRG9JdGVtXCIpO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoZS5wcmlvcml0eSk7XG4gICAgICAgIGl0ZW1EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlbmVyYWxJbmZvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7ZS5kb25lID09IHRydWUgPyBcImNoZWNrZWRcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtVGl0bGVcIj4ke2UubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb0FuZFJlbW92ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaUJ1dHRvblwiPuKTmDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVtb3ZlQnV0dG9uXCI+4p2MPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGFkZEl0ZW1EaXYpO1xuICAgIFxuICAgIHJldHVybiBkaXY7XG59O1xuXG5cblxuZnVuY3Rpb24gZmlsbENvbnRlbnQocHJvamVjdCkgeyAgICAgLy9jb21iaW5lcyBcbiAgICBcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFByb2plY3RcIik7XG4gICAgY3VycmVudFByb2plY3REaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBuYW1lRGl2ID0gZmlsbFByb2plY3RIMShwcm9qZWN0Lm5hbWUpO1xuICAgIGNvbnN0IGl0ZW1Db250YWluZXJEaXYgPSBmaWxsSXRlbUNvbnRhaW5lcihwcm9qZWN0LnRvRG9JdGVtcyk7XG4gICAgXG4gICAgY3VycmVudFByb2plY3REaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgY3VycmVudFByb2plY3REaXYuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lckRpdik7ICAgIFxuICAgIFxuICAgIFxuICAgIHByb2plY3ROYW1lU2VsZWN0b3IocHJvamVjdC5uYW1lKTtcbn07XG5cblxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlSGlnaExpZ2h0KG5hdmJhclByb2plY3REaXYpIHsgICAgIC8vcmVtb3ZlcyBuYXZiYXIgaGlnaGxpZ2h0XG4gICAgbmF2YmFyUHJvamVjdERpdlswXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59O1xuXG5cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdFBvcFVwKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJmaWxsIGluIG5hbWVcIik7XG4gICAgcmV0dXJuIG5hbWU7XG59O1xuXG5mdW5jdGlvbiBhZGROZXdJdGVtTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiZmlsbCBpbiBuYW1lXCIpO1xuICAgIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIG5hdi5pZCA9PT0gXCJuYXZpZ2F0aW9uXCIgPyBuYXYuaWQgPSBcIm5hdlRvZ2dsZVwiIDogbmF2LmlkID0gXCJuYXZpZ2F0aW9uXCI7XG4gICAgXG59O1xuXG5cbmZ1bmN0aW9uIG9wZW5JdGVtRGV0YWlscyhpdGVtRGl2VG9PcGVuLCBpdGVtT2JqZWN0KSB7XG4gICAgXG4gICAgaWYgKGl0ZW1EaXZUb09wZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcbiAgICAgICAgaXRlbURpdlRvT3Blbi5yZW1vdmVDaGlsZChpdGVtRGl2VG9PcGVuLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBpdGVtRGl2VG9PcGVuLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgIGNvbnN0IGRldGFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsRGl2LmlkID0gXCJkZXRhaWxzXCI7XG4gICAgaXRlbURpdlRvT3Blbi5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gICAgZGV0YWlsRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb246ICR7aXRlbU9iamVjdC5kZXNjcmlwdGlvbn1cIj4gPC9icj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5Db21wbGV0ZSBCZWZvcmU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgJHtpdGVtT2JqZWN0LmR1ZURhdGV9PjwvYnI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWlkXCI+TWlkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgYDtcblxuICAgIGl0ZW1EaXZUb09wZW4uYXBwZW5kQ2hpbGQoZGV0YWlsRGl2KTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlID0gaXRlbU9iamVjdC5wcmlvcml0eTsgXG5cbiAgICB9O1xuXG59O1xuXG5leHBvcnQge2luaXRpYWxEb21Mb2FkZXIsIGZpbGxDdXN0b21Qcm9qZWN0cywgZmlsbENvbnRlbnQsIHJlbW92ZUhpZ2hMaWdodCwgYWRkTmV3UHJvamVjdFBvcFVwLCBhZGROZXdJdGVtTmFtZSwgdG9nZ2xlTmF2LCBvcGVuSXRlbURldGFpbHN9OyIsImZ1bmN0aW9uIGZpbmRQcm9qZWN0KGxpc3RBcnJheSwgY2xpY2tlZFByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIGxpc3RBcnJheS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBjbGlja2VkUHJvamVjdE5hbWUpO1xufTtcblxuXG5cblxuZXhwb3J0IHtmaW5kUHJvamVjdH07IiwiZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIGFkZDogZnVuY3Rpb24ocHJvamVjdCkge3RoaXMubGlzdC5wdXNoKHByb2plY3QpfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7dGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcihlID0+IGUubmFtZSAhPT0gcHJvamVjdE5hbWUpfVxufTsiLCJleHBvcnQgY29uc3QgUHJvamVjdEZhY3RvcnkgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xuICAgIGxldCB0b0RvSXRlbXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZU5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAvLyByZWxvYWRQcm9qZWN0T2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0obmV3SXRlbU9iamVjdCkge1xuICAgICAgICB0aGlzLnRvRG9JdGVtcy5wdXNoKG5ld0l0ZW1PYmplY3QpO1xuICAgICAgICAvLyByZWxvYWRQcm9qZWN0T2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaXRlbVRvQmVSZW1vdmVkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9Eb0l0ZW1zLmluZGV4T2YoaXRlbVRvQmVSZW1vdmVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIC8vIHJlbG9hZFByb2plY3RPYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtuYW1lLCB0b0RvSXRlbXMsIGNoYW5nZU5hbWUsIGFkZEl0ZW0sIHJlbW92ZUl0ZW19O1xufTtcbiIsImV4cG9ydCBjb25zdCBUb0RvT2JqZWN0RmFjdG9yeSA9IChpdGVtTmFtZSk9PiB7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICBsZXQgbmFtZSA9IGl0ZW1OYW1lO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiRW1wdHlcIjtcbiAgICBsZXQgZHVlRGF0ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBcImxvd1wiO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlTmFtZShuZXdUaXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID0gbmV3VGl0bGU7XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gcmVsb2FkSXRlbU9iamVjdEluRG9tKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEdWVEYXRlKG5ld0RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgLy8gcmVsb2FkSXRlbU9iamVjdEluRG9tKClcbiAgICB9XG5cbiAgICByZXR1cm4ge2RvbmUsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hhbmdlTmFtZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZUR1ZURhdGUsIGNoYW5nZVByaW9yaXR5fTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHsgUHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9wcm9qZWN0T2JqZWN0XCI7XG5pbXBvcnQgeyBUb0RvT2JqZWN0RmFjdG9yeSB9IGZyb20gXCIuL3RvRG9PYmplY3RcIjtcbmltcG9ydCB7aW5pdGlhbERvbUxvYWRlciwgZmlsbEN1c3RvbVByb2plY3RzLCBmaWxsQ29udGVudCwgYWRkTmV3UHJvamVjdFBvcFVwLCBhZGROZXdJdGVtTmFtZSwgcmVtb3ZlSGlnaExpZ2h0LCB0b2dnbGVOYXYsIG9wZW5JdGVtRGV0YWlsc30gZnJvbSBcIi4vRG9tTG9hZGVyXCI7XG5pbXBvcnQge2ZpbmRQcm9qZWN0fSBmcm9tIFwiLi9FdmVudExpc3RlbmVyc1wiO1xuXG5cblxuXG4vL21ha2luZyBleGFtcGxlIGxpc3RzIGFuZCBpdGVtc1xuXG5wcm9qZWN0TGlzdC5hZGQoUHJvamVjdEZhY3RvcnkoXCJUb2RheVwiKSk7XG5wcm9qZWN0TGlzdC5hZGQoUHJvamVjdEZhY3RvcnkoXCJUaGlzIFdlZWtcIikpO1xuXG5cbnByb2plY3RMaXN0Lmxpc3RbMF0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImRvIGhvbWV3b3JrXCIpKTtcbnByb2plY3RMaXN0Lmxpc3RbMF0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcInBpbmdwb25nXCIpKTtcbnByb2plY3RMaXN0Lmxpc3RbMF0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImdyb2Nlcmllc1wiKSk7XG5wcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJ3YXRjaCBhIG1vdmllXCIpKTtcbnByb2plY3RMaXN0Lmxpc3RbMF0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImJsYWJsYVwiKSk7XG5wcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJibG9wYmxpcFwiKSk7XG5cblxucHJvamVjdExpc3QubGlzdFsxXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiYmluZ29cIikpO1xucHJvamVjdExpc3QubGlzdFsxXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiYmFuZ29cIikpO1xuXG5cbmNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcblxuXG4vL2xvYWRpbmcgZG9tXG5pbml0aWFsRG9tTG9hZGVyKCk7XG5maWxsQ3VzdG9tUHJvamVjdHMocHJvamVjdExpc3QubGlzdCk7XG5maWxsQ29udGVudChwcm9qZWN0TGlzdC5saXN0WzBdKTtcblxuXG5cblxuLy9ldmVudCBsaXN0ZW5lcnNcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGVnYXRlQ2xpY2spO1xuXG5mdW5jdGlvbiBkZWxlZ2F0ZUNsaWNrKGUpIHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG5cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwibG9nb1wiKSB7XG4gICAgICAgIHRvZ2dsZU5hdigpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcImxpc3RcIikgeyAvL2lmIGNsaWNrZWQgb24gYSBwcm9qZWN0XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJhZGRQcm9qZWN0XCIpIHsgLy8gaWYgY2xpY2tlZCBvbiB0aGUgK25ldyBwcm9qZWN0IGJ1dHRvblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGFkZE5ld1Byb2plY3RQb3BVcCgpO1xuICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47ICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3QuYWRkKFByb2plY3RGYWN0b3J5KG5hbWUpKTtcbiAgICAgICAgICAgIGZpbGxDdXN0b21Qcm9qZWN0cyhwcm9qZWN0TGlzdC5saXN0KTtcbiAgICAgICAgICAgIHJldHVybiBmaWxsQ29udGVudChwcm9qZWN0TGlzdC5saXN0W3Byb2plY3RMaXN0Lmxpc3QubGVuZ3RoLTFdKTtcbiAgICAgICAgfTsgXG5cbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdExpc3QubGlzdCwgZS50YXJnZXQuaWQpO1xuICAgICAgICByZW1vdmVIaWdoTGlnaHQoY3VycmVudFByb2plY3QpO1xuICAgICAgICByZXR1cm4gZmlsbENvbnRlbnQoY2xpY2tlZFByb2plY3QpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcImFkZEl0ZW1cIikgeyAgLy9pZiBjbGlja2VkIHRoZSArIGl0ZW0gYnV0dG9uXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdExpc3QubGlzdCwgcHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGFkZE5ld0l0ZW1OYW1lKCk7XG4gICAgICAgIGlmICghaXRlbU5hbWUpIHJldHVybjtcbiAgICAgICAgcHJvamVjdC5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KGl0ZW1OYW1lKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICByZXR1cm4gZmlsbENvbnRlbnQocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwicmVtb3ZlQnV0dG9uXCIpIHsgLy9pZiBjbGlja2VkIHRoZSDinYwgYnV0dG9uXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdExpc3QubGlzdCwgcHJvamVjdE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtVGl0bGVcIilbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGl0ZW1Ub0JlUmVtb3ZlZCA9IGZpbmRQcm9qZWN0KHByb2plY3QudG9Eb0l0ZW1zLCBpdGVtTmFtZSk7XG5cbiAgICAgICAgcHJvamVjdC5yZW1vdmVJdGVtKGl0ZW1Ub0JlUmVtb3ZlZCk7XG4gICAgICAgIHJldHVybiBmaWxsQ29udGVudChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJpQnV0dG9uXCIpIHsgIC8vaWYgY2xpY2tlZCBvbiBpbmZvIGJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RMaXN0Lmxpc3QsIHByb2plY3ROYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaXRlbVRvQmVFeHBhbmRlZCA9IGZpbmRQcm9qZWN0KHByb2plY3QudG9Eb0l0ZW1zLCBpdGVtRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtVGl0bGVcIilbMF0udGV4dENvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1EaXYpO1xuICAgICAgICBcbiAgICAgICAgb3Blbkl0ZW1EZXRhaWxzKGl0ZW1EaXYsIGl0ZW1Ub0JlRXhwYW5kZWQpO1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbURpdiwgaXRlbVRvQmVFeHBhbmRlZCk7XG5cbiAgICAgICAgXG4gICAgfTtcblxufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9