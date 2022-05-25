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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    color: black;\n    margin: 0;\n}\n\n/* header section */\nheader {\n    display: flex;\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    padding: 10px 5%;\n    justify-content: space-between;\n    background-color: hsl(28, 87%, 87%);\n    user-select: none;\n    box-shadow: 0px 5px 5px hsl(28, 87%, 87%);\n    /* position: relative; */\n}\n\n#logo, #plus {\n    background-color: hsl(28, 87%, 67%);\n    width: 25px;\n    text-align: center;\n    border-radius: 30%;\n}\n\n#plus:hover, #logo:hover {\n    background-color: hsl(28, 87%, 47%);\n    cursor: pointer;\n}\n\n#plus:active, #logo:active {\n    transform: translateY(3px);\n}\n\n/* content section */\n#content {\n    display: flex;\n    height: 100vh;\n}\n\n/* navigation or list section */\n#navigation {\n    background-color: hsl(0, 0%, 95%);\n    width: 150px;\n    padding: 60px 40px 0px 40px ;\n    user-select: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    box-shadow: 5px 0px 5px hsl(0, 0%, 55%);\n    max-height: 100vh;\n    overflow: auto;\n}\n\n#navToggle {\n    transform: scale(0.1, 0.1);\n    position: absolute;\n    left: -100px;\n}\n\n\n#listContainer {\n    color:hsl(0, 0%, 55%);\n}\n\n#listContainer > p {\n    display: block;\n    margin: 0px -20px;\n}\n\n#lists {\n    margin-top: 10px;\n    color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.list {\n    padding: 5px 7px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: hsl(0, 0%, 55%);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n}\n\n#addProject {\n    color: hsl(0, 0%, 55%);\n}\n\n#addProject:hover {\n    color: white;\n}\n\n.list:hover {\n    background-color: hsl(0, 0%, 55%);\n    color: white;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.list:active {\n    transform: translateY(3px);\n}\n\n.list.selected {\n    background-color: hsl(0, 0%, 55%);\n    color: white;  \n    border-radius: 6px;\n    box-shadow: 2px 2px 5px hsl(0, 0%, 55%);\n}\n\n\n\n/* current project section */\n\n#currentProject {\n    flex: 1 1 auto;\n    margin-left: 5%;\n    margin-top: 70px;\n    max-height: 100vh;\n    overflow: auto;\n}\n\n#itemContainer {\n    padding: 5% 5% 5% 0%;\n}\n\n.toDoItem, .addItem {\n    background-color: hsl(28, 87%, 87%);\n    margin: 5px;\n    padding: 5px 10px;\n    border-radius: 7px;\n}\n\n.generalInfo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.toDoItem.high {\n    background-color: hsl(28, 87%, 47%);\n}\n\n.toDoItem.mid {\n    background-color: hsl(28, 87%, 67%);    \n}\n\n.toDoItem.low {\n    background-color: hsl(28, 87%, 87%);\n}\n\n.itemTitle {\n    color: hsl(0, 0%, 25%);\n}\n\n.infoAndRemove {\n    display: flex;\n    gap: 5px;\n}\n\n.iButton {\n    margin-top: -2px;\n}\n.iButton:hover {\n    cursor: pointer;\n}\n\n.removeButton {\n    margin-top: 2px;\n}\n.removeButton:hover {\n    cursor: pointer;\n}\n\n.addItem {\n    width: 45px;\n    user-select: none;\n}\n\n.addItem:hover {\n    cursor: pointer;\n    background-color: hsl(28, 87%, 47%);\n    color: white;\n}\n\n.addItem:active {\n    transform: translateY(3px);\n}\n\n#details {\n    background-color: hsl(28, 87%, 97%);\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,QAAQ;IACR,OAAO;IACP,gBAAgB;IAChB,8BAA8B;IAC9B,mCAAmC;IACnC,iBAAiB;IACjB,yCAAyC;IACzC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA,oBAAoB;AACpB;IACI,aAAa;IACb,aAAa;AACjB;;AAEA,+BAA+B;AAC/B;IACI,iCAAiC;IACjC,YAAY;IACZ,4BAA4B;IAC5B,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uCAAuC;IACvC,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;IACjB,6BAA6B;IAC7B,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,uCAAuC;AAC3C;;;;AAIA,4BAA4B;;AAE5B;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mCAAmC;IACnC,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,mCAAmC;IACnC,cAAc;AAClB","sourcesContent":["body {\n    color: black;\n    margin: 0;\n}\n\n/* header section */\nheader {\n    display: flex;\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    padding: 10px 5%;\n    justify-content: space-between;\n    background-color: hsl(28, 87%, 87%);\n    user-select: none;\n    box-shadow: 0px 5px 5px hsl(28, 87%, 87%);\n    /* position: relative; */\n}\n\n#logo, #plus {\n    background-color: hsl(28, 87%, 67%);\n    width: 25px;\n    text-align: center;\n    border-radius: 30%;\n}\n\n#plus:hover, #logo:hover {\n    background-color: hsl(28, 87%, 47%);\n    cursor: pointer;\n}\n\n#plus:active, #logo:active {\n    transform: translateY(3px);\n}\n\n/* content section */\n#content {\n    display: flex;\n    height: 100vh;\n}\n\n/* navigation or list section */\n#navigation {\n    background-color: hsl(0, 0%, 95%);\n    width: 150px;\n    padding: 60px 40px 0px 40px ;\n    user-select: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    box-shadow: 5px 0px 5px hsl(0, 0%, 55%);\n    max-height: 100vh;\n    overflow: auto;\n}\n\n#navToggle {\n    transform: scale(0.1, 0.1);\n    position: absolute;\n    left: -100px;\n}\n\n\n#listContainer {\n    color:hsl(0, 0%, 55%);\n}\n\n#listContainer > p {\n    display: block;\n    margin: 0px -20px;\n}\n\n#lists {\n    margin-top: 10px;\n    color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.list {\n    padding: 5px 7px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: hsl(0, 0%, 55%);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n}\n\n#addProject {\n    color: hsl(0, 0%, 55%);\n}\n\n#addProject:hover {\n    color: white;\n}\n\n.list:hover {\n    background-color: hsl(0, 0%, 55%);\n    color: white;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.list:active {\n    transform: translateY(3px);\n}\n\n.list.selected {\n    background-color: hsl(0, 0%, 55%);\n    color: white;  \n    border-radius: 6px;\n    box-shadow: 2px 2px 5px hsl(0, 0%, 55%);\n}\n\n\n\n/* current project section */\n\n#currentProject {\n    flex: 1 1 auto;\n    margin-left: 5%;\n    margin-top: 70px;\n    max-height: 100vh;\n    overflow: auto;\n}\n\n#itemContainer {\n    padding: 5% 5% 5% 0%;\n}\n\n.toDoItem, .addItem {\n    background-color: hsl(28, 87%, 87%);\n    margin: 5px;\n    padding: 5px 10px;\n    border-radius: 7px;\n}\n\n.generalInfo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.toDoItem.high {\n    background-color: hsl(28, 87%, 47%);\n}\n\n.toDoItem.mid {\n    background-color: hsl(28, 87%, 67%);    \n}\n\n.toDoItem.low {\n    background-color: hsl(28, 87%, 87%);\n}\n\n.itemTitle {\n    color: hsl(0, 0%, 25%);\n}\n\n.infoAndRemove {\n    display: flex;\n    gap: 5px;\n}\n\n.iButton {\n    margin-top: -2px;\n}\n.iButton:hover {\n    cursor: pointer;\n}\n\n.removeButton {\n    margin-top: 2px;\n}\n.removeButton:hover {\n    cursor: pointer;\n}\n\n.addItem {\n    width: 45px;\n    user-select: none;\n}\n\n.addItem:hover {\n    cursor: pointer;\n    background-color: hsl(28, 87%, 47%);\n    color: white;\n}\n\n.addItem:active {\n    transform: translateY(3px);\n}\n\n#details {\n    background-color: hsl(28, 87%, 97%);\n    display: block;\n}"],"sourceRoot":""}]);
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


function closeItemDetails(itemDiv) {
    itemDiv.removeChild(itemDiv.lastElementChild);
    itemDiv.classList.toggle("expanded");
};

function closeOtherItemDetails() {
    if (document.getElementsByClassName("expanded").length >= 1) {      //close any other item details section
        const alreadyExp = document.getElementsByClassName("expanded")[0];
        alreadyExp.classList.remove("expanded");
        alreadyExp.removeChild(alreadyExp.lastElementChild);
    }
};



function populateItemDetails(itemDiv, itemObject) {

    closeOtherItemDetails();

    itemDiv.classList.add("expanded");

    const detailDiv = document.createElement("div");
    detailDiv.id = "details";
    detailDiv.innerHTML = `
        <input type="text" id="description" placeholder="Description:" value="${itemObject.description}"></br>
        <label for="dueDate">Complete Before:</label>
        <input type="date" id="dueDate" value="${itemObject.dueDate}"></br>
        <label for="priority">Priority</label>
        <select id="priority">
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
        </select>
    `;
    itemDiv.appendChild(detailDiv);
    
    document.getElementById("priority").value = itemObject.priority; 
    changeListener(itemDiv, itemObject);
};



function openItemDetails(itemDivToOpen, itemObject) {
    if (itemDivToOpen.classList.contains("expanded")) {      //if it's already expanded, close it
        closeItemDetails(itemDivToOpen);
    } else {                                                 //populate the details section
        populateItemDetails(itemDivToOpen, itemObject);
    };
};



function changeListener(itemDivToOpen, itemObject) {
    document.getElementById("details").addEventListener("change", applyChangedDetails);
    

    function applyChangedDetails() {
        const description = document.getElementById("description");
        const dueDate = document.getElementById("dueDate");
        const priority = document.getElementById("priority");
        
        itemDivToOpen.classList.remove("low", "mid", "high");
        itemDivToOpen.classList.add(priority.value);
        
        itemObject.description = description.value;
        itemObject.dueDate = dueDate.value;
        itemObject.priority = priority.value;
        
        
        closeItemDetails(itemDivToOpen);
        populateItemDetails(itemDivToOpen, itemObject);
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
    let description = "";
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
        
    };

};





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELG1CQUFtQixnQkFBZ0IsR0FBRyxrQ0FBa0Msb0JBQW9CLHNCQUFzQixhQUFhLGVBQWUsY0FBYyx1QkFBdUIscUNBQXFDLDBDQUEwQyx3QkFBd0IsZ0RBQWdELDZCQUE2QixLQUFLLGtCQUFrQiwwQ0FBMEMsa0JBQWtCLHlCQUF5Qix5QkFBeUIsR0FBRyw4QkFBOEIsMENBQTBDLHNCQUFzQixHQUFHLGdDQUFnQyxpQ0FBaUMsR0FBRyxxQ0FBcUMsb0JBQW9CLG9CQUFvQixHQUFHLG1EQUFtRCx3Q0FBd0MsbUJBQW1CLG1DQUFtQyx3QkFBd0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsOENBQThDLHdCQUF3QixxQkFBcUIsR0FBRyxnQkFBZ0IsaUNBQWlDLHlCQUF5QixtQkFBbUIsR0FBRyxzQkFBc0IsNEJBQTRCLEdBQUcsd0JBQXdCLHFCQUFxQix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxXQUFXLHVCQUF1QiwyQkFBMkIsd0JBQXdCLG9DQUFvQyw4QkFBOEIsdUJBQXVCLDBCQUEwQix1QkFBdUIsR0FBRyxpQkFBaUIsNkJBQTZCLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLGlCQUFpQix3Q0FBd0MsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxrQkFBa0IsaUNBQWlDLEdBQUcsb0JBQW9CLHdDQUF3QyxxQkFBcUIseUJBQXlCLDhDQUE4QyxHQUFHLDBEQUEwRCxxQkFBcUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IscUJBQXFCLEdBQUcsb0JBQW9CLDJCQUEyQixHQUFHLHlCQUF5QiwwQ0FBMEMsa0JBQWtCLHdCQUF3Qix5QkFBeUIsR0FBRyxrQkFBa0Isb0JBQW9CLHFDQUFxQyxHQUFHLG9CQUFvQiwwQ0FBMEMsR0FBRyxtQkFBbUIsOENBQThDLEdBQUcsbUJBQW1CLDBDQUEwQyxHQUFHLGdCQUFnQiw2QkFBNkIsR0FBRyxvQkFBb0Isb0JBQW9CLGVBQWUsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxtQkFBbUIsc0JBQXNCLEdBQUcsdUJBQXVCLHNCQUFzQixHQUFHLGNBQWMsa0JBQWtCLHdCQUF3QixHQUFHLG9CQUFvQixzQkFBc0IsMENBQTBDLG1CQUFtQixHQUFHLHFCQUFxQixpQ0FBaUMsR0FBRyxjQUFjLDBDQUEwQyxxQkFBcUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFNBQVMsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxnQ0FBZ0MsbUJBQW1CLGdCQUFnQixHQUFHLGtDQUFrQyxvQkFBb0Isc0JBQXNCLGFBQWEsZUFBZSxjQUFjLHVCQUF1QixxQ0FBcUMsMENBQTBDLHdCQUF3QixnREFBZ0QsNkJBQTZCLEtBQUssa0JBQWtCLDBDQUEwQyxrQkFBa0IseUJBQXlCLHlCQUF5QixHQUFHLDhCQUE4QiwwQ0FBMEMsc0JBQXNCLEdBQUcsZ0NBQWdDLGlDQUFpQyxHQUFHLHFDQUFxQyxvQkFBb0Isb0JBQW9CLEdBQUcsbURBQW1ELHdDQUF3QyxtQkFBbUIsbUNBQW1DLHdCQUF3QixvQkFBb0IsNkJBQTZCLDhCQUE4Qiw4Q0FBOEMsd0JBQXdCLHFCQUFxQixHQUFHLGdCQUFnQixpQ0FBaUMseUJBQXlCLG1CQUFtQixHQUFHLHNCQUFzQiw0QkFBNEIsR0FBRyx3QkFBd0IscUJBQXFCLHdCQUF3QixHQUFHLFlBQVksdUJBQXVCLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QixHQUFHLFdBQVcsdUJBQXVCLDJCQUEyQix3QkFBd0Isb0NBQW9DLDhCQUE4Qix1QkFBdUIsMEJBQTBCLHVCQUF1QixHQUFHLGlCQUFpQiw2QkFBNkIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsaUJBQWlCLHdDQUF3QyxtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLGtCQUFrQixpQ0FBaUMsR0FBRyxvQkFBb0Isd0NBQXdDLHFCQUFxQix5QkFBeUIsOENBQThDLEdBQUcsMERBQTBELHFCQUFxQixzQkFBc0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcseUJBQXlCLDBDQUEwQyxrQkFBa0Isd0JBQXdCLHlCQUF5QixHQUFHLGtCQUFrQixvQkFBb0IscUNBQXFDLEdBQUcsb0JBQW9CLDBDQUEwQyxHQUFHLG1CQUFtQiw4Q0FBOEMsR0FBRyxtQkFBbUIsMENBQTBDLEdBQUcsZ0JBQWdCLDZCQUE2QixHQUFHLG9CQUFvQixvQkFBb0IsZUFBZSxHQUFHLGNBQWMsdUJBQXVCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcsY0FBYyxrQkFBa0Isd0JBQXdCLEdBQUcsb0JBQW9CLHNCQUFzQiwwQ0FBMEMsbUJBQW1CLEdBQUcscUJBQXFCLGlDQUFpQyxHQUFHLGNBQWMsMENBQTBDLHFCQUFxQixHQUFHLG1CQUFtQjtBQUNub1E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQ0FBZ0M7QUFDekUseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsaURBQWlEO0FBQ2pEO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLHVCQUF1QjtBQUN2RztBQUNBLGlEQUFpRCxtQkFBbUI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxNQUFNLHVEQUF1RDtBQUM3RDtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDcE5BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BELG1DQUFtQztBQUNuQzs7Ozs7Ozs7Ozs7Ozs7QUNKTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOzs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNFO0FBQ0E7QUFDOEc7QUFDbEg7Ozs7O0FBSzdDOztBQUVBLDREQUFlLENBQUMsOERBQWM7QUFDOUIsNERBQWUsQ0FBQyw4REFBYzs7O0FBRzlCLHdFQUEyQixDQUFDLDhEQUFpQjtBQUM3Qyx3RUFBMkIsQ0FBQyw4REFBaUI7QUFDN0Msd0VBQTJCLENBQUMsOERBQWlCO0FBQzdDLHdFQUEyQixDQUFDLDhEQUFpQjtBQUM3Qyx3RUFBMkIsQ0FBQyw4REFBaUI7QUFDN0Msd0VBQTJCLENBQUMsOERBQWlCOzs7QUFHN0Msd0VBQTJCLENBQUMsOERBQWlCO0FBQzdDLHdFQUEyQixDQUFDLDhEQUFpQjs7O0FBRzdDLFlBQVksd0RBQVc7OztBQUd2QjtBQUNBLDREQUFnQjtBQUNoQiw4REFBa0IsQ0FBQyw2REFBZ0I7QUFDbkMsdURBQVcsQ0FBQyxnRUFBbUI7Ozs7O0FBSy9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscURBQVM7QUFDakI7O0FBRUEsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1Qyx5QkFBeUIsOERBQWtCO0FBQzNDO0FBQ0EsWUFBWSw0REFBZSxDQUFDLDhEQUFjO0FBQzFDLFlBQVksOERBQWtCLENBQUMsNkRBQWdCO0FBQy9DLG1CQUFtQix1REFBVyxDQUFDLDZEQUFnQixDQUFDLG9FQUF1QjtBQUN2RTs7QUFFQTtBQUNBLCtCQUErQiw0REFBVyxDQUFDLDZEQUFnQjtBQUMzRCxRQUFRLDJEQUFlO0FBQ3ZCLGVBQWUsdURBQVc7QUFDMUI7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0Esd0JBQXdCLDREQUFXLENBQUMsNkRBQWdCO0FBQ3BELHlCQUF5QiwwREFBYztBQUN2QztBQUNBLHdCQUF3Qiw4REFBaUI7QUFDekM7QUFDQSxlQUFlLHVEQUFXO0FBQzFCOztBQUVBLG9EQUFvRDtBQUNwRDtBQUNBLHdCQUF3Qiw0REFBVyxDQUFDLDZEQUFnQjs7QUFFcEQ7QUFDQSxnQ0FBZ0MsNERBQVc7O0FBRTNDO0FBQ0EsZUFBZSx1REFBVztBQUMxQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQSx3QkFBd0IsNERBQVcsQ0FBQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBLGlDQUFpQyw0REFBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWU7QUFDdkI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Eb21Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9FdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCBoc2woMjgsIDg3JSwgODclKTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4jbG9nbywgI3BsdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNjclKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG5cXG4jcGx1czpob3ZlciwgI2xvZ286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNDclKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcGx1czphY3RpdmUsICNsb2dvOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4vKiBjb250ZW50IHNlY3Rpb24gKi9cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIG5hdmlnYXRpb24gb3IgbGlzdCBzZWN0aW9uICovXFxuI25hdmlnYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogNjBweCA0MHB4IDBweCA0MHB4IDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDVweCBoc2woMCwgMCUsIDU1JSk7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI25hdlRvZ2dsZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xMDBweDtcXG59XFxuXFxuXFxuI2xpc3RDb250YWluZXIge1xcbiAgICBjb2xvcjpoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcbiNsaXN0Q29udGFpbmVyID4gcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDBweCAtMjBweDtcXG59XFxuXFxuI2xpc3RzIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxpc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5saXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4ubGlzdC5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgY29sb3I6IHdoaXRlOyAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggaHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG5cXG5cXG4vKiBjdXJyZW50IHByb2plY3Qgc2VjdGlvbiAqL1xcblxcbiNjdXJyZW50UHJvamVjdCB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI2l0ZW1Db250YWluZXIge1xcbiAgICBwYWRkaW5nOiA1JSA1JSA1JSAwJTtcXG59XFxuXFxuLnRvRG9JdGVtLCAuYWRkSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmdlbmVyYWxJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9Eb0l0ZW0uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbn1cXG5cXG4udG9Eb0l0ZW0ubWlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7ICAgIFxcbn1cXG5cXG4udG9Eb0l0ZW0ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxufVxcblxcbi5pdGVtVGl0bGUge1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbn1cXG5cXG4uaW5mb0FuZFJlbW92ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uaUJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcbi5pQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG4ucmVtb3ZlQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkSXRlbSB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFkZEl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGRJdGVtOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA5NyUpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7OztBQUlBLDRCQUE0Qjs7QUFFNUI7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIGhlYWRlciBzZWN0aW9uICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuI2xvZ28sICNwbHVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuXFxuI3BsdXM6aG92ZXIsICNsb2dvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3BsdXM6YWN0aXZlLCAjbG9nbzphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuLyogY29udGVudCBzZWN0aW9uICovXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIG9yIGxpc3Qgc2VjdGlvbiAqL1xcbiNuYXZpZ2F0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHggNDBweCAwcHggNDBweCA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA1cHggaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNuYXZUb2dnbGUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTAwcHg7XFxufVxcblxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwcHggLTIwcHg7XFxufVxcblxcbiNsaXN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5saXN0IHtcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5saXN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ubGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuLmxpc3Quc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuXFxuXFxuLyogY3VycmVudCBwcm9qZWN0IHNlY3Rpb24gKi9cXG5cXG4jY3VycmVudFByb2plY3Qge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNSUgNSUgNSUgMCU7XFxufVxcblxcbi50b0RvSXRlbSwgLmFkZEl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgODclKTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5nZW5lcmFsSW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvRG9JdGVtLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNDclKTtcXG59XFxuXFxuLnRvRG9JdGVtLm1pZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA2NyUpOyAgICBcXG59XFxuXFxuLnRvRG9JdGVtLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbn1cXG5cXG4uaXRlbVRpdGxlIHtcXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgMjUlKTtcXG59XFxuXFxuLmluZm9BbmRSZW1vdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmlCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbn1cXG4uaUJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbW92ZUJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG59XFxuLnJlbW92ZUJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEl0ZW0ge1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hZGRJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNDclKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkSXRlbTphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuI2RldGFpbHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgOTclKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gaW5pdGlhbERvbUxvYWRlcigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBpZD1cImxvZ29cIj7wnZWLPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlRvIERvIExpc3Q8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBsdXNcIj4rPC9kaXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGlkPVwibmF2aWdhdGlvblwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBpZD1cImxpc3RDb250YWluZXJcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8cD5Qcm9qZWN0czwvcD5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGlzdHNcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9icj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhZGRQcm9qZWN0XCIgY2xhc3M9XCJsaXN0XCI+KyBOZXcgUHJvamVjdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cImN1cnJlbnRQcm9qZWN0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmZ1bmN0aW9uIGZpbGxDdXN0b21Qcm9qZWN0cyhwcm9qZWN0TGlzdEFycmF5KSB7ICAgLy9wb3B1bGF0ZXMgY3VzdG9tIHByb2plY3RzIGluIG5hdiBiYXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RzXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPC9icj5cbiAgICAgICAgPGRpdiBpZD1cImFkZFByb2plY3RcIiBjbGFzcz1cImxpc3RcIj4rIE5ldyBQcm9qZWN0PC9kaXY+YDtcbiAgICBcbiAgICBwcm9qZWN0TGlzdEFycmF5LmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIGRpdi5pZCA9IGUubmFtZTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZS5uYW1lO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGRpdiwgY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgICAgIGRpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBicik7XG4gICAgfSlcbn07XG5cblxuLy8gc29tZSBmdW5jdGlvbnMgdGhhdCBnZXQgY2FsbGVkIGJ5IGZpbGxjb250ZW50KClcblxuZnVuY3Rpb24gcHJvamVjdE5hbWVTZWxlY3Rvcihwcm9qZWN0TmFtZSkgeyAgICAgLy9oaWdobGlnaHRzIHRoZSBwcm9qZWN0IGluIHRoZSBuYXYgYmFyXG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdE5hbWUpO1xuICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59O1xuXG5mdW5jdGlvbiBmaWxsUHJvamVjdEgxKHByb2plY3ROYW1lKSB7ICAgLy9pbnNlcnQgdGhlIHByb2plY3QgdGl0bGVcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICByZXR1cm4gbmFtZTtcbn07XG5cblxuZnVuY3Rpb24gZmlsbEl0ZW1Db250YWluZXIoaXRlbUFycmF5KSB7IC8vY3JlYXRlcyBhIGRpdiB0byBwdXQgdGhlIHRvIGRvIGl0ZW0gaW5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwiaXRlbUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgYWRkSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkSXRlbURpdi5jbGFzc0xpc3QuYWRkKFwiYWRkSXRlbVwiKTtcbiAgICBhZGRJdGVtRGl2LnRleHRDb250ZW50ID0gXCIrIGl0ZW1cIjtcblxuICAgIGl0ZW1BcnJheS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb0l0ZW1cIik7XG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChlLnByaW9yaXR5KTtcbiAgICAgICAgaXRlbURpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJhbEluZm9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtlLmRvbmUgPT0gdHJ1ZSA/IFwiY2hlY2tlZFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1UaXRsZVwiPiR7ZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQW5kUmVtb3ZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpQnV0dG9uXCI+4pOYPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmVCdXR0b25cIj7inYw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkSXRlbURpdik7XG4gICAgXG4gICAgcmV0dXJuIGRpdjtcbn07XG5cblxuXG5mdW5jdGlvbiBmaWxsQ29udGVudChwcm9qZWN0KSB7ICAgICAvL2NvbWJpbmVzIFxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50UHJvamVjdFwiKTtcbiAgICBjdXJyZW50UHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IG5hbWVEaXYgPSBmaWxsUHJvamVjdEgxKHByb2plY3QubmFtZSk7XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lckRpdiA9IGZpbGxJdGVtQ29udGFpbmVyKHByb2plY3QudG9Eb0l0ZW1zKTtcbiAgICBcbiAgICBjdXJyZW50UHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBjdXJyZW50UHJvamVjdERpdi5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyRGl2KTsgICAgXG4gICAgXG4gICAgXG4gICAgcHJvamVjdE5hbWVTZWxlY3Rvcihwcm9qZWN0Lm5hbWUpO1xufTtcblxuXG5cblxuXG5mdW5jdGlvbiByZW1vdmVIaWdoTGlnaHQobmF2YmFyUHJvamVjdERpdikgeyAgICAgLy9yZW1vdmVzIG5hdmJhciBoaWdobGlnaHRcbiAgICBuYXZiYXJQcm9qZWN0RGl2WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbn07XG5cblxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0UG9wVXAoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcImZpbGwgaW4gbmFtZVwiKTtcbiAgICByZXR1cm4gbmFtZTtcbn07XG5cbmZ1bmN0aW9uIGFkZE5ld0l0ZW1OYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJmaWxsIGluIG5hbWVcIik7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgbmF2LmlkID09PSBcIm5hdmlnYXRpb25cIiA/IG5hdi5pZCA9IFwibmF2VG9nZ2xlXCIgOiBuYXYuaWQgPSBcIm5hdmlnYXRpb25cIjtcbiAgICBcbn07XG5cblxuZnVuY3Rpb24gY2xvc2VJdGVtRGV0YWlscyhpdGVtRGl2KSB7XG4gICAgaXRlbURpdi5yZW1vdmVDaGlsZChpdGVtRGl2Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xufTtcblxuZnVuY3Rpb24gY2xvc2VPdGhlckl0ZW1EZXRhaWxzKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXhwYW5kZWRcIikubGVuZ3RoID49IDEpIHsgICAgICAvL2Nsb3NlIGFueSBvdGhlciBpdGVtIGRldGFpbHMgc2VjdGlvblxuICAgICAgICBjb25zdCBhbHJlYWR5RXhwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV4cGFuZGVkXCIpWzBdO1xuICAgICAgICBhbHJlYWR5RXhwLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgICAgICAgYWxyZWFkeUV4cC5yZW1vdmVDaGlsZChhbHJlYWR5RXhwLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbn07XG5cblxuXG5mdW5jdGlvbiBwb3B1bGF0ZUl0ZW1EZXRhaWxzKGl0ZW1EaXYsIGl0ZW1PYmplY3QpIHtcblxuICAgIGNsb3NlT3RoZXJJdGVtRGV0YWlscygpO1xuXG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG5cbiAgICBjb25zdCBkZXRhaWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbERpdi5pZCA9IFwiZGV0YWlsc1wiO1xuICAgIGRldGFpbERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uOlwiIHZhbHVlPVwiJHtpdGVtT2JqZWN0LmRlc2NyaXB0aW9ufVwiPjwvYnI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVEYXRlXCI+Q29tcGxldGUgQmVmb3JlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIHZhbHVlPVwiJHtpdGVtT2JqZWN0LmR1ZURhdGV9XCI+PC9icj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaWRcIj5NaWQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICBgO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZGV0YWlsRGl2KTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlID0gaXRlbU9iamVjdC5wcmlvcml0eTsgXG4gICAgY2hhbmdlTGlzdGVuZXIoaXRlbURpdiwgaXRlbU9iamVjdCk7XG59O1xuXG5cblxuZnVuY3Rpb24gb3Blbkl0ZW1EZXRhaWxzKGl0ZW1EaXZUb09wZW4sIGl0ZW1PYmplY3QpIHtcbiAgICBpZiAoaXRlbURpdlRvT3Blbi5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSkgeyAgICAgIC8vaWYgaXQncyBhbHJlYWR5IGV4cGFuZGVkLCBjbG9zZSBpdFxuICAgICAgICBjbG9zZUl0ZW1EZXRhaWxzKGl0ZW1EaXZUb09wZW4pO1xuICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcG9wdWxhdGUgdGhlIGRldGFpbHMgc2VjdGlvblxuICAgICAgICBwb3B1bGF0ZUl0ZW1EZXRhaWxzKGl0ZW1EaXZUb09wZW4sIGl0ZW1PYmplY3QpO1xuICAgIH07XG59O1xuXG5cblxuZnVuY3Rpb24gY2hhbmdlTGlzdGVuZXIoaXRlbURpdlRvT3BlbiwgaXRlbU9iamVjdCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFwcGx5Q2hhbmdlZERldGFpbHMpO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gYXBwbHlDaGFuZ2VkRGV0YWlscygpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG4gICAgICAgIFxuICAgICAgICBpdGVtRGl2VG9PcGVuLmNsYXNzTGlzdC5yZW1vdmUoXCJsb3dcIiwgXCJtaWRcIiwgXCJoaWdoXCIpO1xuICAgICAgICBpdGVtRGl2VG9PcGVuLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkudmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgaXRlbU9iamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICBpdGVtT2JqZWN0LmR1ZURhdGUgPSBkdWVEYXRlLnZhbHVlO1xuICAgICAgICBpdGVtT2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHkudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY2xvc2VJdGVtRGV0YWlscyhpdGVtRGl2VG9PcGVuKTtcbiAgICAgICAgcG9wdWxhdGVJdGVtRGV0YWlscyhpdGVtRGl2VG9PcGVuLCBpdGVtT2JqZWN0KTtcbiAgICB9O1xuICAgIFxuXG59O1xuXG5cbiAgICBleHBvcnQge2luaXRpYWxEb21Mb2FkZXIsIGZpbGxDdXN0b21Qcm9qZWN0cywgZmlsbENvbnRlbnQsIHJlbW92ZUhpZ2hMaWdodCwgYWRkTmV3UHJvamVjdFBvcFVwLCBhZGROZXdJdGVtTmFtZSwgdG9nZ2xlTmF2LCBvcGVuSXRlbURldGFpbHN9OyIsImZ1bmN0aW9uIGZpbmRQcm9qZWN0KGxpc3RBcnJheSwgY2xpY2tlZFByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIGxpc3RBcnJheS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lID09PSBjbGlja2VkUHJvamVjdE5hbWUpO1xufTtcblxuXG5cblxuZXhwb3J0IHtmaW5kUHJvamVjdH07IiwiZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIGFkZDogZnVuY3Rpb24ocHJvamVjdCkge3RoaXMubGlzdC5wdXNoKHByb2plY3QpfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7dGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcihlID0+IGUubmFtZSAhPT0gcHJvamVjdE5hbWUpfVxufTsiLCJleHBvcnQgY29uc3QgUHJvamVjdEZhY3RvcnkgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xuICAgIGxldCB0b0RvSXRlbXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZU5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAvLyByZWxvYWRQcm9qZWN0T2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0obmV3SXRlbU9iamVjdCkge1xuICAgICAgICB0aGlzLnRvRG9JdGVtcy5wdXNoKG5ld0l0ZW1PYmplY3QpO1xuICAgICAgICAvLyByZWxvYWRQcm9qZWN0T2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaXRlbVRvQmVSZW1vdmVkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdG9Eb0l0ZW1zLmluZGV4T2YoaXRlbVRvQmVSZW1vdmVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIC8vIHJlbG9hZFByb2plY3RPYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtuYW1lLCB0b0RvSXRlbXMsIGNoYW5nZU5hbWUsIGFkZEl0ZW0sIHJlbW92ZUl0ZW19O1xufTtcbiIsImV4cG9ydCBjb25zdCBUb0RvT2JqZWN0RmFjdG9yeSA9IChpdGVtTmFtZSk9PiB7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICBsZXQgbmFtZSA9IGl0ZW1OYW1lO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgbGV0IGR1ZURhdGU7XG4gICAgbGV0IHByaW9yaXR5ID0gXCJsb3dcIjtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZU5hbWUobmV3VGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9IG5ld1RpdGxlO1xuICAgICAgICAvLyByZWxvYWRJdGVtT2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlRHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgICAgICAvLyByZWxvYWRJdGVtT2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtkb25lLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoYW5nZU5hbWUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcml0eX07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCB7IFByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdFwiO1xuaW1wb3J0IHsgVG9Eb09iamVjdEZhY3RvcnkgfSBmcm9tIFwiLi90b0RvT2JqZWN0XCI7XG5pbXBvcnQge2luaXRpYWxEb21Mb2FkZXIsIGZpbGxDdXN0b21Qcm9qZWN0cywgZmlsbENvbnRlbnQsIGFkZE5ld1Byb2plY3RQb3BVcCwgYWRkTmV3SXRlbU5hbWUsIHJlbW92ZUhpZ2hMaWdodCwgdG9nZ2xlTmF2LCBvcGVuSXRlbURldGFpbHN9IGZyb20gXCIuL0RvbUxvYWRlclwiO1xuaW1wb3J0IHtmaW5kUHJvamVjdH0gZnJvbSBcIi4vRXZlbnRMaXN0ZW5lcnNcIjtcblxuXG5cblxuLy9tYWtpbmcgZXhhbXBsZSBsaXN0cyBhbmQgaXRlbXNcblxucHJvamVjdExpc3QuYWRkKFByb2plY3RGYWN0b3J5KFwiVG9kYXlcIikpO1xucHJvamVjdExpc3QuYWRkKFByb2plY3RGYWN0b3J5KFwiVGhpcyBXZWVrXCIpKTtcblxuXG5wcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJkbyBob21ld29ya1wiKSk7XG5wcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJwaW5ncG9uZ1wiKSk7XG5wcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJncm9jZXJpZXNcIikpO1xucHJvamVjdExpc3QubGlzdFswXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwid2F0Y2ggYSBtb3ZpZVwiKSk7XG5wcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJibGFibGFcIikpO1xucHJvamVjdExpc3QubGlzdFswXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiYmxvcGJsaXBcIikpO1xuXG5cbnByb2plY3RMaXN0Lmxpc3RbMV0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImJpbmdvXCIpKTtcbnByb2plY3RMaXN0Lmxpc3RbMV0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImJhbmdvXCIpKTtcblxuXG5jb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG5cblxuLy9sb2FkaW5nIGRvbVxuaW5pdGlhbERvbUxvYWRlcigpO1xuZmlsbEN1c3RvbVByb2plY3RzKHByb2plY3RMaXN0Lmxpc3QpO1xuZmlsbENvbnRlbnQocHJvamVjdExpc3QubGlzdFswXSk7XG5cblxuXG5cbi8vZXZlbnQgbGlzdGVuZXJzXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxlZ2F0ZUNsaWNrKTtcblxuZnVuY3Rpb24gZGVsZWdhdGVDbGljayhlKSB7XG4gICAgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuXG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImxvZ29cIikge1xuICAgICAgICB0b2dnbGVOYXYoKTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJsaXN0XCIpIHsgLy9pZiBjbGlja2VkIG9uIGEgcHJvamVjdFxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiYWRkUHJvamVjdFwiKSB7IC8vIGlmIGNsaWNrZWQgb24gdGhlICtuZXcgcHJvamVjdCBidXR0b25cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBhZGROZXdQcm9qZWN0UG9wVXAoKTtcbiAgICAgICAgICAgIGlmICghbmFtZSkgcmV0dXJuOyAgICBcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFkZChQcm9qZWN0RmFjdG9yeShuYW1lKSk7XG4gICAgICAgICAgICBmaWxsQ3VzdG9tUHJvamVjdHMocHJvamVjdExpc3QubGlzdCk7XG4gICAgICAgICAgICByZXR1cm4gZmlsbENvbnRlbnQocHJvamVjdExpc3QubGlzdFtwcm9qZWN0TGlzdC5saXN0Lmxlbmd0aC0xXSk7XG4gICAgICAgIH07IFxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBjb25zdCBjbGlja2VkUHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RMaXN0Lmxpc3QsIGUudGFyZ2V0LmlkKTtcbiAgICAgICAgcmVtb3ZlSGlnaExpZ2h0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIGZpbGxDb250ZW50KGNsaWNrZWRQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJhZGRJdGVtXCIpIHsgIC8vaWYgY2xpY2tlZCB0aGUgKyBpdGVtIGJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RMaXN0Lmxpc3QsIHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBhZGROZXdJdGVtTmFtZSgpO1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSByZXR1cm47XG4gICAgICAgIHByb2plY3QuYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShpdGVtTmFtZSkpOyBcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgIHJldHVybiBmaWxsQ29udGVudChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJyZW1vdmVCdXR0b25cIikgeyAvL2lmIGNsaWNrZWQgdGhlIOKdjCBidXR0b25cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0TGlzdC5saXN0LCBwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1UaXRsZVwiKVswXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgaXRlbVRvQmVSZW1vdmVkID0gZmluZFByb2plY3QocHJvamVjdC50b0RvSXRlbXMsIGl0ZW1OYW1lKTtcblxuICAgICAgICBwcm9qZWN0LnJlbW92ZUl0ZW0oaXRlbVRvQmVSZW1vdmVkKTtcbiAgICAgICAgcmV0dXJuIGZpbGxDb250ZW50KHByb2plY3QpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcImlCdXR0b25cIikgeyAgLy9pZiBjbGlja2VkIG9uIGluZm8gYnV0dG9uXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdExpc3QubGlzdCwgcHJvamVjdE5hbWUpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpdGVtVG9CZUV4cGFuZGVkID0gZmluZFByb2plY3QocHJvamVjdC50b0RvSXRlbXMsIGl0ZW1EaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1UaXRsZVwiKVswXS50ZXh0Q29udGVudCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbURpdik7XG4gICAgICAgIFxuICAgICAgICBvcGVuSXRlbURldGFpbHMoaXRlbURpdiwgaXRlbVRvQmVFeHBhbmRlZCk7XG4gICAgICAgIFxuICAgIH07XG5cbn07XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==