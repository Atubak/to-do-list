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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    color: black;\n    margin: 0;\n}\n\n/* header section */\nheader {\n    display: flex;\n    position: fixed;\n    z-index: 9;\n    top: 0;\n    right: 0;\n    left: 0;\n    padding: 10px 5%;\n    justify-content: space-between;\n    background-color: hsl(28, 87%, 87%);\n    user-select: none;\n    box-shadow: 0px 5px 5px hsl(28, 87%, 87%);\n    /* position: relative; */\n}\n\n#logo, #plus {\n    background-color: hsl(28, 87%, 67%);\n    width: 25px;\n    text-align: center;\n    border-radius: 30%;\n}\n\n#plus:hover, #logo:hover {\n    background-color: hsl(28, 87%, 47%);\n    cursor: pointer;\n}\n\n#plus:active, #logo:active {\n    transform: translateY(3px);\n}\n\n/* content section */\n#content {\n    display: flex;\n    height: 100vh;\n    position: static;\n}\n\n/* navigation or list section */\n#navigation {\n    background-color: hsl(0, 0%, 95%);\n    width: 150px;\n    padding: 60px 40px 0px 40px ;\n    user-select: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    box-shadow: 5px 0px 5px hsl(0, 0%, 55%);\n    max-height: 100vh;\n    overflow: auto;\n}\n\n#navToggle {\n    display: none;\n}\n\n\n#listContainer {\n    color:hsl(0, 0%, 55%);\n}\n\n#listContainer > p {\n    display: block;\n    margin: 0px -20px;\n}\n\n#lists {\n    margin-top: 10px;\n    color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.list {\n    padding: 5px 7px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: hsl(0, 0%, 55%);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n}\n\n#addProject {\n    color: hsl(0, 0%, 55%);\n}\n\n#addProject:hover {\n    color: white;\n}\n\n.list:hover {\n    background-color: hsl(0, 0%, 55%);\n    color: white;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.list:active {\n    transform: translateY(3px);\n}\n\n.list.selected {\n    background-color: hsl(0, 0%, 55%);\n    color: white;  \n    border-radius: 6px;\n    box-shadow: 2px 2px 5px hsl(0, 0%, 55%);\n}\n\n\n\n\n\n/* current project section */\n\n#currentProject {\n    flex: 1 1 auto;\n    margin-left: 5%;\n    margin-top: 70px;\n    max-height: 100vh;\n    overflow: auto;\n    min-width: 250px;\n}\n\n#x {\n    text-align: end;\n    margin-bottom: 0px;\n}\n\n#itemContainer {\n    padding: 5% 5% 5% 5%;\n    margin: auto;\n    max-width: 550px;\n}\n\n.toDoItem, .addItem {\n    background-color: hsl(28, 87%, 87%);\n    margin: 5px;\n    padding: 5px 10px;\n    border-radius: 7px;\n}\n\n.generalInfo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.toDoItem.high {\n    background-color: hsl(28, 87%, 47%);\n}\n\n.toDoItem.mid {\n    background-color: hsl(28, 87%, 67%);    \n}\n\n.toDoItem.low {\n    background-color: hsl(28, 87%, 87%);\n}\n\n.itemTitle {\n    color: hsl(0, 0%, 25%);\n}\n\n.infoAndRemove {\n    display: flex;\n    gap: 5px;\n}\n\n.iButton {\n    margin-top: -2px;\n}\n.iButton:hover {\n    cursor: pointer;\n}\n\n.removeButton {\n    margin-top: 2px;\n}\n.removeButton:hover {\n    cursor: pointer;\n}\n\n.addItem {\n    width: 45px;\n    user-select: none;\n}\n\n.addItem:hover {\n    cursor: pointer;\n    background-color: hsl(28, 87%, 47%);\n    color: white;\n}\n\n.addItem:active {\n    transform: translateY(3px);\n}\n\n#details {\n    background-color: hsl(28, 87%, 97%);\n    display: flex;\n    flex-direction: column;\n}\n\n\n\n@media screen and (max-width: 500px) {\n    #navigation {\n        position: absolute;\n        bottom: 0px;\n        top: 0px;\n        box-sizing: border-box;\n        width: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,MAAM;IACN,QAAQ;IACR,OAAO;IACP,gBAAgB;IAChB,8BAA8B;IAC9B,mCAAmC;IACnC,iBAAiB;IACjB,yCAAyC;IACzC,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;IACnC,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA,oBAAoB;AACpB;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB;;AAEA,+BAA+B;AAC/B;IACI,iCAAiC;IACjC,YAAY;IACZ,4BAA4B;IAC5B,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uCAAuC;IACvC,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;IACjB,6BAA6B;IAC7B,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,uCAAuC;AAC3C;;;;;;AAMA,4BAA4B;;AAE5B;IACI,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;IACnC,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,sBAAsB;AAC1B;;;;AAIA;IACI;QACI,kBAAkB;QAClB,WAAW;QACX,QAAQ;QACR,sBAAsB;QACtB,WAAW;IACf;AACJ","sourcesContent":["body {\n    color: black;\n    margin: 0;\n}\n\n/* header section */\nheader {\n    display: flex;\n    position: fixed;\n    z-index: 9;\n    top: 0;\n    right: 0;\n    left: 0;\n    padding: 10px 5%;\n    justify-content: space-between;\n    background-color: hsl(28, 87%, 87%);\n    user-select: none;\n    box-shadow: 0px 5px 5px hsl(28, 87%, 87%);\n    /* position: relative; */\n}\n\n#logo, #plus {\n    background-color: hsl(28, 87%, 67%);\n    width: 25px;\n    text-align: center;\n    border-radius: 30%;\n}\n\n#plus:hover, #logo:hover {\n    background-color: hsl(28, 87%, 47%);\n    cursor: pointer;\n}\n\n#plus:active, #logo:active {\n    transform: translateY(3px);\n}\n\n/* content section */\n#content {\n    display: flex;\n    height: 100vh;\n    position: static;\n}\n\n/* navigation or list section */\n#navigation {\n    background-color: hsl(0, 0%, 95%);\n    width: 150px;\n    padding: 60px 40px 0px 40px ;\n    user-select: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    box-shadow: 5px 0px 5px hsl(0, 0%, 55%);\n    max-height: 100vh;\n    overflow: auto;\n}\n\n#navToggle {\n    display: none;\n}\n\n\n#listContainer {\n    color:hsl(0, 0%, 55%);\n}\n\n#listContainer > p {\n    display: block;\n    margin: 0px -20px;\n}\n\n#lists {\n    margin-top: 10px;\n    color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n.list {\n    padding: 5px 7px;\n    border-bottom: solid;\n    border-width: 1px;\n    border-color: hsl(0, 0%, 55%);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 150px;\n}\n\n#addProject {\n    color: hsl(0, 0%, 55%);\n}\n\n#addProject:hover {\n    color: white;\n}\n\n.list:hover {\n    background-color: hsl(0, 0%, 55%);\n    color: white;\n    cursor: pointer;\n    border-radius: 6px;\n}\n\n.list:active {\n    transform: translateY(3px);\n}\n\n.list.selected {\n    background-color: hsl(0, 0%, 55%);\n    color: white;  \n    border-radius: 6px;\n    box-shadow: 2px 2px 5px hsl(0, 0%, 55%);\n}\n\n\n\n\n\n/* current project section */\n\n#currentProject {\n    flex: 1 1 auto;\n    margin-left: 5%;\n    margin-top: 70px;\n    max-height: 100vh;\n    overflow: auto;\n    min-width: 250px;\n}\n\n#x {\n    text-align: end;\n    margin-bottom: 0px;\n}\n\n#itemContainer {\n    padding: 5% 5% 5% 5%;\n    margin: auto;\n    max-width: 550px;\n}\n\n.toDoItem, .addItem {\n    background-color: hsl(28, 87%, 87%);\n    margin: 5px;\n    padding: 5px 10px;\n    border-radius: 7px;\n}\n\n.generalInfo {\n    display: flex;\n    justify-content: space-between;\n}\n\n.toDoItem.high {\n    background-color: hsl(28, 87%, 47%);\n}\n\n.toDoItem.mid {\n    background-color: hsl(28, 87%, 67%);    \n}\n\n.toDoItem.low {\n    background-color: hsl(28, 87%, 87%);\n}\n\n.itemTitle {\n    color: hsl(0, 0%, 25%);\n}\n\n.infoAndRemove {\n    display: flex;\n    gap: 5px;\n}\n\n.iButton {\n    margin-top: -2px;\n}\n.iButton:hover {\n    cursor: pointer;\n}\n\n.removeButton {\n    margin-top: 2px;\n}\n.removeButton:hover {\n    cursor: pointer;\n}\n\n.addItem {\n    width: 45px;\n    user-select: none;\n}\n\n.addItem:hover {\n    cursor: pointer;\n    background-color: hsl(28, 87%, 47%);\n    color: white;\n}\n\n.addItem:active {\n    transform: translateY(3px);\n}\n\n#details {\n    background-color: hsl(28, 87%, 97%);\n    display: flex;\n    flex-direction: column;\n}\n\n\n\n@media screen and (max-width: 500px) {\n    #navigation {\n        position: absolute;\n        bottom: 0px;\n        top: 0px;\n        box-sizing: border-box;\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
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
                <input type="checkbox" class="checkbox" ${e.done == true ? "checked" : ""}>
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

function checkboxListener(project) {
    document.getElementById("itemContainer").addEventListener("change", changeDoneProperty);

    function changeDoneProperty(e) {
        const itemName = e.target.nextElementSibling.textContent;
        const itemObject = project.toDoItems.find(e => e.name === itemName);
        itemObject.done ? itemObject.done = false : itemObject.done = true;
    }
};



function fillContent(project) {     //combines 
    
    const currentProjectDiv = document.getElementById("currentProject");
    currentProjectDiv.innerHTML = "";
    const nameDiv = fillProjectH1(project.name);
    const itemContainerDiv = fillItemContainer(project.toDoItems);
    
    currentProjectDiv.appendChild(nameDiv);
    currentProjectDiv.appendChild(itemContainerDiv);    
    
    
    checkboxListener(project);
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
    let dueDate = "";
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







//  get projects from localStorage. if there's no projects already, make some example projects
const getProjects = () => {     

    if (!localStorage.length) {     //making example lists and items
        

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
        return ; 
    };

    
    for (let i = 0; i < localStorage.length; i++) {
        
        _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.add((0,_projectObject__WEBPACK_IMPORTED_MODULE_2__.ProjectFactory)(localStorage.key(i)));
        const insertedProject = _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list.find(e => e.name === localStorage.key(i));

        const itemsToBeInserted = JSON.parse(localStorage.getItem(localStorage.key(i)));

        insertedProject.toDoItems.push(...itemsToBeInserted);

    };
    
};

getProjects();


//put all projects and their items(including properties) in localstorage. called at the end of delegateClick()
function setProjects() {        
    localStorage.clear();
    _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list.forEach(e => localStorage.setItem(e.name, JSON.stringify(e.toDoItems))); 
};



//loading dom
(0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.initialDomLoader)();
(0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillCustomProjects)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list);
(0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[0]);




//event listeners

document.addEventListener("click", delegateClick);

function delegateClick(e) {

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
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(clickedProject);
    };

    if (e.target.classList[0] === "addItem") {  //if clicked the + item button
        const projectName = document.querySelector("h1").textContent;
        const project = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list, projectName);
        const itemName = (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.addNewItemName)();
        if (!itemName) return;
        project.addItem((0,_toDoObject__WEBPACK_IMPORTED_MODULE_3__.ToDoObjectFactory)(itemName)); 
        console.log(project);
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(project);
    };

    if (e.target.classList[0] === "removeButton") { //if clicked the ❌ button
        const projectName = document.querySelector("h1").textContent;
        const project = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list, projectName);

        const itemName = e.target.parentElement.parentElement.getElementsByClassName("itemTitle")[0].textContent;
        const itemToBeRemoved = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(project.toDoItems, itemName);

        project.removeItem(itemToBeRemoved);
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(project);
    };

    if (e.target.classList[0] === "iButton") {  //if clicked on info button
        const projectName = document.querySelector("h1").textContent;
        const project = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list, projectName);
        
        const itemDiv = e.target.parentElement.parentElement.parentElement;
        const itemToBeExpanded = (0,_EventListeners__WEBPACK_IMPORTED_MODULE_5__.findProject)(project.toDoItems, itemDiv.getElementsByClassName("itemTitle")[0].textContent);
        
        
        // console.log(itemDiv);
        
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.openItemDetails)(itemDiv, itemToBeExpanded);
        
    };

    setProjects();
    console.log(localStorage);
    console.log(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list);

};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUMsNENBQTRDO0FBQzVDLHlCQUF5Qiw4REFBa0I7QUFDM0M7QUFDQSxZQUFZLDREQUFlLENBQUMsOERBQWM7QUFDMUMsWUFBWSw4REFBa0IsQ0FBQyw2REFBZ0I7QUFDL0MsbUJBQW1CLHVEQUFXLENBQUMsNkRBQWdCLENBQUMsb0VBQXVCO0FBQ3ZFOztBQUVBO0FBQ0EsK0JBQStCLDREQUFXLENBQUMsNkRBQWdCO0FBQzNELFFBQVEsMkRBQWU7QUFDdkIsUUFBUSx1REFBVztBQUNuQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQSx3QkFBd0IsNERBQVcsQ0FBQyw2REFBZ0I7QUFDcEQseUJBQXlCLDBEQUFjO0FBQ3ZDO0FBQ0Esd0JBQXdCLDhEQUFpQjtBQUN6QztBQUNBLFFBQVEsdURBQVc7QUFDbkI7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0Esd0JBQXdCLDREQUFXLENBQUMsNkRBQWdCOztBQUVwRDtBQUNBLGdDQUFnQyw0REFBVzs7QUFFM0M7QUFDQSxRQUFRLHVEQUFXO0FBQ25COztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBLHdCQUF3Qiw0REFBVyxDQUFDLDZEQUFnQjtBQUNwRDtBQUNBO0FBQ0EsaUNBQWlDLDREQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsNkRBQWdCOztBQUVoQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0RvbUxvYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0T2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBoZWFkZXIgc2VjdGlvbiAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcGFkZGluZzogMTBweCA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgODclKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiNsb2dvLCAjcGx1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA2NyUpO1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxufVxcblxcbiNwbHVzOmhvdmVyLCAjbG9nbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwbHVzOmFjdGl2ZSwgI2xvZ286YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxufVxcblxcbi8qIGNvbnRlbnQgc2VjdGlvbiAqL1xcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuXFxuLyogbmF2aWdhdGlvbiBvciBsaXN0IHNlY3Rpb24gKi9cXG4jbmF2aWdhdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTUlKTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiA2MHB4IDQwcHggMHB4IDQwcHggO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJveC1zaGFkb3c6IDVweCAwcHggNXB4IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jbmF2VG9nZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuI2xpc3RDb250YWluZXIge1xcbiAgICBjb2xvcjpoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcbiNsaXN0Q29udGFpbmVyID4gcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDBweCAtMjBweDtcXG59XFxuXFxuI2xpc3RzIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxpc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5saXN0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4ubGlzdC5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgY29sb3I6IHdoaXRlOyAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggaHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBjdXJyZW50IHByb2plY3Qgc2VjdGlvbiAqL1xcblxcbiNjdXJyZW50UHJvamVjdCB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG59XFxuXFxuI3gge1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIge1xcbiAgICBwYWRkaW5nOiA1JSA1JSA1JSA1JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbn1cXG5cXG4udG9Eb0l0ZW0sIC5hZGRJdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uZ2VuZXJhbEluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b0RvSXRlbS5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxufVxcblxcbi50b0RvSXRlbS5taWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNjclKTsgICAgXFxufVxcblxcbi50b0RvSXRlbS5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgODclKTtcXG59XFxuXFxuLml0ZW1UaXRsZSB7XFxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDI1JSk7XFxufVxcblxcbi5pbmZvQW5kUmVtb3ZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5pQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuLmlCdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmVCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxufVxcbi5yZW1vdmVCdXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRJdGVtIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYWRkSXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZEl0ZW06YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxufVxcblxcbiNkZXRhaWxzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDk3JSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgICNuYXZpZ2F0aW9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMHB4O1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOzs7Ozs7QUFNQSw0QkFBNEI7O0FBRTVCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7Ozs7QUFJQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxRQUFRO1FBQ1Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCBoc2woMjgsIDg3JSwgODclKTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4jbG9nbywgI3BsdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNjclKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG5cXG4jcGx1czpob3ZlciwgI2xvZ286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNDclKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcGx1czphY3RpdmUsICNsb2dvOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4vKiBjb250ZW50IHNlY3Rpb24gKi9cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblxcbi8qIG5hdmlnYXRpb24gb3IgbGlzdCBzZWN0aW9uICovXFxuI25hdmlnYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogNjBweCA0MHB4IDBweCA0MHB4IDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDVweCBoc2woMCwgMCUsIDU1JSk7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI25hdlRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwcHggLTIwcHg7XFxufVxcblxcbiNsaXN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5saXN0IHtcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5saXN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ubGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuLmxpc3Quc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogY3VycmVudCBwcm9qZWN0IHNlY3Rpb24gKi9cXG5cXG4jY3VycmVudFByb2plY3Qge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbiN4IHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNSUgNSUgNSUgNSU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXG59XFxuXFxuLnRvRG9JdGVtLCAuYWRkSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmdlbmVyYWxJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9Eb0l0ZW0uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbn1cXG5cXG4udG9Eb0l0ZW0ubWlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7ICAgIFxcbn1cXG5cXG4udG9Eb0l0ZW0ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxufVxcblxcbi5pdGVtVGl0bGUge1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbn1cXG5cXG4uaW5mb0FuZFJlbW92ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uaUJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcbi5pQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG4ucmVtb3ZlQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkSXRlbSB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFkZEl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGRJdGVtOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA5NyUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAjbmF2aWdhdGlvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDBweDtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gaW5pdGlhbERvbUxvYWRlcigpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBpZD1cImxvZ29cIj7wnZWLPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlRvIERvIExpc3Q8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBsdXNcIj4rPC9kaXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGlkPVwibmF2aWdhdGlvblwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBpZD1cImxpc3RDb250YWluZXJcIj5cbiAgICAgICAgXG4gICAgICAgICAgICA8cD5Qcm9qZWN0czwvcD5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGlzdHNcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9icj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhZGRQcm9qZWN0XCIgY2xhc3M9XCJsaXN0XCI+KyBOZXcgUHJvamVjdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cImN1cnJlbnRQcm9qZWN0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmZ1bmN0aW9uIGZpbGxDdXN0b21Qcm9qZWN0cyhwcm9qZWN0TGlzdEFycmF5KSB7ICAgLy9wb3B1bGF0ZXMgY3VzdG9tIHByb2plY3RzIGluIG5hdiBiYXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RzXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgPC9icj5cbiAgICAgICAgPGRpdiBpZD1cImFkZFByb2plY3RcIiBjbGFzcz1cImxpc3RcIj4rIE5ldyBQcm9qZWN0PC9kaXY+YDtcbiAgICBcbiAgICBwcm9qZWN0TGlzdEFycmF5LmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIGRpdi5pZCA9IGUubmFtZTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZS5uYW1lO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGRpdiwgY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgYnIpO1xuICAgIH0pXG59O1xuXG5cbi8vIHNvbWUgZnVuY3Rpb25zIHRoYXQgZ2V0IGNhbGxlZCBieSBmaWxsY29udGVudCgpXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lU2VsZWN0b3IocHJvamVjdE5hbWUpIHsgICAgIC8vaGlnaGxpZ2h0cyB0aGUgcHJvamVjdCBpbiB0aGUgbmF2IGJhclxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lKTtcbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufTtcblxuZnVuY3Rpb24gZmlsbFByb2plY3RIMShwcm9qZWN0TmFtZSkgeyAgIC8vaW5zZXJ0IHRoZSBwcm9qZWN0IHRpdGxlXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgcmV0dXJuIG5hbWU7XG59O1xuXG5cbmZ1bmN0aW9uIGZpbGxJdGVtQ29udGFpbmVyKGl0ZW1BcnJheSkgeyAvL2NyZWF0ZXMgYSBkaXYgdG8gcHV0IHRoZSB0byBkbyBpdGVtIGluXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcIml0ZW1Db250YWluZXJcIjtcblxuICAgIGNvbnN0IGFkZEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcImFkZEl0ZW1cIik7XG4gICAgYWRkSXRlbURpdi50ZXh0Q29udGVudCA9IFwiKyBpdGVtXCI7XG5cbiAgICBpdGVtQXJyYXkuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcInRvRG9JdGVtXCIpO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoZS5wcmlvcml0eSk7XG4gICAgICAgIGl0ZW1EaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlbmVyYWxJbmZvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiAke2UuZG9uZSA9PSB0cnVlID8gXCJjaGVja2VkXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVRpdGxlXCI+JHtlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9BbmRSZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlCdXR0b25cIj7ik5g8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbW92ZUJ1dHRvblwiPuKdjDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChhZGRJdGVtRGl2KTtcbiAgICBcbiAgICByZXR1cm4gZGl2O1xufTtcblxuZnVuY3Rpb24gY2hlY2tib3hMaXN0ZW5lcihwcm9qZWN0KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtQ29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlRG9uZVByb3BlcnR5KTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZURvbmVQcm9wZXJ0eShlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBpdGVtT2JqZWN0ID0gcHJvamVjdC50b0RvSXRlbXMuZmluZChlID0+IGUubmFtZSA9PT0gaXRlbU5hbWUpO1xuICAgICAgICBpdGVtT2JqZWN0LmRvbmUgPyBpdGVtT2JqZWN0LmRvbmUgPSBmYWxzZSA6IGl0ZW1PYmplY3QuZG9uZSA9IHRydWU7XG4gICAgfVxufTtcblxuXG5cbmZ1bmN0aW9uIGZpbGxDb250ZW50KHByb2plY3QpIHsgICAgIC8vY29tYmluZXMgXG4gICAgXG4gICAgY29uc3QgY3VycmVudFByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRQcm9qZWN0XCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgbmFtZURpdiA9IGZpbGxQcm9qZWN0SDEocHJvamVjdC5uYW1lKTtcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyRGl2ID0gZmlsbEl0ZW1Db250YWluZXIocHJvamVjdC50b0RvSXRlbXMpO1xuICAgIFxuICAgIGN1cnJlbnRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgIGN1cnJlbnRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXJEaXYpOyAgICBcbiAgICBcbiAgICBcbiAgICBjaGVja2JveExpc3RlbmVyKHByb2plY3QpO1xuICAgIHByb2plY3ROYW1lU2VsZWN0b3IocHJvamVjdC5uYW1lKTtcbn07XG5cblxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlSGlnaExpZ2h0KG5hdmJhclByb2plY3REaXYpIHsgICAgIC8vcmVtb3ZlcyBuYXZiYXIgaGlnaGxpZ2h0XG4gICAgbmF2YmFyUHJvamVjdERpdlswXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG59O1xuXG5cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdFBvcFVwKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJmaWxsIGluIG5hbWVcIik7XG4gICAgcmV0dXJuIG5hbWU7XG59O1xuXG5mdW5jdGlvbiBhZGROZXdJdGVtTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiZmlsbCBpbiBuYW1lXCIpO1xuICAgIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIG5hdi5pZCA9PT0gXCJuYXZpZ2F0aW9uXCIgPyBuYXYuaWQgPSBcIm5hdlRvZ2dsZVwiIDogbmF2LmlkID0gXCJuYXZpZ2F0aW9uXCI7XG4gICAgXG59O1xuXG5cbmZ1bmN0aW9uIGNsb3NlSXRlbURldGFpbHMoaXRlbURpdikge1xuICAgIGl0ZW1EaXYucmVtb3ZlQ2hpbGQoaXRlbURpdi5sYXN0RWxlbWVudENoaWxkKTtcbiAgICBpdGVtRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn07XG5cbmZ1bmN0aW9uIGNsb3NlT3RoZXJJdGVtRGV0YWlscygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV4cGFuZGVkXCIpLmxlbmd0aCA+PSAxKSB7ICAgICAgLy9jbG9zZSBhbnkgb3RoZXIgaXRlbSBkZXRhaWxzIHNlY3Rpb25cbiAgICAgICAgY29uc3QgYWxyZWFkeUV4cCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJleHBhbmRlZFwiKVswXTtcbiAgICAgICAgYWxyZWFkeUV4cC5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgICAgIGFscmVhZHlFeHAucmVtb3ZlQ2hpbGQoYWxyZWFkeUV4cC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG59O1xuXG5cblxuZnVuY3Rpb24gcG9wdWxhdGVJdGVtRGV0YWlscyhpdGVtRGl2LCBpdGVtT2JqZWN0KSB7XG5cbiAgICBjbG9zZU90aGVySXRlbURldGFpbHMoKTtcblxuICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuXG4gICAgY29uc3QgZGV0YWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxEaXYuaWQgPSBcImRldGFpbHNcIjtcbiAgICBkZXRhaWxEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbjpcIiB2YWx1ZT1cIiR7aXRlbU9iamVjdC5kZXNjcmlwdGlvbn1cIj48L2JyPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkNvbXBsZXRlIEJlZm9yZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiB2YWx1ZT1cIiR7aXRlbU9iamVjdC5kdWVEYXRlfVwiPjwvYnI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWlkXCI+TWlkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgYDtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGRldGFpbERpdik7XG4gICAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZSA9IGl0ZW1PYmplY3QucHJpb3JpdHk7IFxuICAgIGNoYW5nZUxpc3RlbmVyKGl0ZW1EaXYsIGl0ZW1PYmplY3QpO1xufTtcblxuXG5cbmZ1bmN0aW9uIG9wZW5JdGVtRGV0YWlscyhpdGVtRGl2VG9PcGVuLCBpdGVtT2JqZWN0KSB7XG4gICAgaWYgKGl0ZW1EaXZUb09wZW4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHsgICAgICAvL2lmIGl0J3MgYWxyZWFkeSBleHBhbmRlZCwgY2xvc2UgaXRcbiAgICAgICAgY2xvc2VJdGVtRGV0YWlscyhpdGVtRGl2VG9PcGVuKTtcbiAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BvcHVsYXRlIHRoZSBkZXRhaWxzIHNlY3Rpb25cbiAgICAgICAgcG9wdWxhdGVJdGVtRGV0YWlscyhpdGVtRGl2VG9PcGVuLCBpdGVtT2JqZWN0KTtcbiAgICB9O1xufTtcblxuXG5cbmZ1bmN0aW9uIGNoYW5nZUxpc3RlbmVyKGl0ZW1EaXZUb09wZW4sIGl0ZW1PYmplY3QpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhcHBseUNoYW5nZWREZXRhaWxzKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGFwcGx5Q2hhbmdlZERldGFpbHMoKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuICAgICAgICBcbiAgICAgICAgaXRlbURpdlRvT3Blbi5jbGFzc0xpc3QucmVtb3ZlKFwibG93XCIsIFwibWlkXCIsIFwiaGlnaFwiKTtcbiAgICAgICAgaXRlbURpdlRvT3Blbi5jbGFzc0xpc3QuYWRkKHByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1PYmplY3QuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgaXRlbU9iamVjdC5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgaXRlbU9iamVjdC5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNsb3NlSXRlbURldGFpbHMoaXRlbURpdlRvT3Blbik7XG4gICAgICAgIHBvcHVsYXRlSXRlbURldGFpbHMoaXRlbURpdlRvT3BlbiwgaXRlbU9iamVjdCk7XG4gICAgfTtcbiAgICBcblxufTtcblxuXG4gICAgZXhwb3J0IHtpbml0aWFsRG9tTG9hZGVyLCBmaWxsQ3VzdG9tUHJvamVjdHMsIGZpbGxDb250ZW50LCByZW1vdmVIaWdoTGlnaHQsIGFkZE5ld1Byb2plY3RQb3BVcCwgYWRkTmV3SXRlbU5hbWUsIHRvZ2dsZU5hdiwgb3Blbkl0ZW1EZXRhaWxzfTsiLCJmdW5jdGlvbiBmaW5kUHJvamVjdChsaXN0QXJyYXksIGNsaWNrZWRQcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiBsaXN0QXJyYXkuZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gY2xpY2tlZFByb2plY3ROYW1lKTtcbn07XG5cblxuXG5cbmV4cG9ydCB7ZmluZFByb2plY3R9OyIsImV4cG9ydCBjb25zdCBwcm9qZWN0TGlzdCA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBhZGQ6IGZ1bmN0aW9uKHByb2plY3QpIHt0aGlzLmxpc3QucHVzaChwcm9qZWN0KX0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihwcm9qZWN0TmFtZSkge3RoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoZSA9PiBlLm5hbWUgIT09IHByb2plY3ROYW1lKX1cbn07IiwiZXhwb3J0IGNvbnN0IFByb2plY3RGYWN0b3J5ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICBsZXQgdG9Eb0l0ZW1zID0gW107XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgLy8gcmVsb2FkUHJvamVjdE9iamVjdEluRG9tKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJdGVtKG5ld0l0ZW1PYmplY3QpIHtcbiAgICAgICAgdGhpcy50b0RvSXRlbXMucHVzaChuZXdJdGVtT2JqZWN0KTtcbiAgICAgICAgLy8gcmVsb2FkUHJvamVjdE9iamVjdEluRG9tKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJdGVtKGl0ZW1Ub0JlUmVtb3ZlZCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRvRG9JdGVtcy5pbmRleE9mKGl0ZW1Ub0JlUmVtb3ZlZCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAvLyByZWxvYWRQcm9qZWN0T2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIHJldHVybiB7bmFtZSwgdG9Eb0l0ZW1zLCBjaGFuZ2VOYW1lLCBhZGRJdGVtLCByZW1vdmVJdGVtfTtcbn07XG4iLCJleHBvcnQgY29uc3QgVG9Eb09iamVjdEZhY3RvcnkgPSAoaXRlbU5hbWUpPT4ge1xuICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgbGV0IG5hbWUgPSBpdGVtTmFtZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIGxldCBkdWVEYXRlID0gXCJcIjtcbiAgICBsZXQgcHJpb3JpdHkgPSBcImxvd1wiO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlTmFtZShuZXdUaXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID0gbmV3VGl0bGU7XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgLy8gcmVsb2FkSXRlbU9iamVjdEluRG9tKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEdWVEYXRlKG5ld0RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgLy8gcmVsb2FkSXRlbU9iamVjdEluRG9tKClcbiAgICB9XG5cbiAgICByZXR1cm4ge2RvbmUsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hhbmdlTmFtZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZUR1ZURhdGUsIGNoYW5nZVByaW9yaXR5fTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHsgUHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9wcm9qZWN0T2JqZWN0XCI7XG5pbXBvcnQgeyBUb0RvT2JqZWN0RmFjdG9yeSB9IGZyb20gXCIuL3RvRG9PYmplY3RcIjtcbmltcG9ydCB7aW5pdGlhbERvbUxvYWRlciwgZmlsbEN1c3RvbVByb2plY3RzLCBmaWxsQ29udGVudCwgYWRkTmV3UHJvamVjdFBvcFVwLCBhZGROZXdJdGVtTmFtZSwgcmVtb3ZlSGlnaExpZ2h0LCB0b2dnbGVOYXYsIG9wZW5JdGVtRGV0YWlsc30gZnJvbSBcIi4vRG9tTG9hZGVyXCI7XG5pbXBvcnQge2ZpbmRQcm9qZWN0fSBmcm9tIFwiLi9FdmVudExpc3RlbmVyc1wiO1xuXG4vLyAgZ2V0IHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlLiBpZiB0aGVyZSdzIG5vIHByb2plY3RzIGFscmVhZHksIG1ha2Ugc29tZSBleGFtcGxlIHByb2plY3RzXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHsgICAgIFxuXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UubGVuZ3RoKSB7ICAgICAvL21ha2luZyBleGFtcGxlIGxpc3RzIGFuZCBpdGVtc1xuICAgICAgICBcblxuICAgICAgICBwcm9qZWN0TGlzdC5hZGQoUHJvamVjdEZhY3RvcnkoXCJUb2RheVwiKSk7XG4gICAgICAgIHByb2plY3RMaXN0LmFkZChQcm9qZWN0RmFjdG9yeShcIlRoaXMgV2Vla1wiKSk7XG5cbiAgICAgICAgcHJvamVjdExpc3QubGlzdFswXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiZG8gaG9tZXdvcmtcIikpO1xuICAgICAgICBwcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJwaW5ncG9uZ1wiKSk7XG4gICAgICAgIHByb2plY3RMaXN0Lmxpc3RbMF0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImdyb2Nlcmllc1wiKSk7XG4gICAgICAgIHByb2plY3RMaXN0Lmxpc3RbMF0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcIndhdGNoIGEgbW92aWVcIikpO1xuICAgICAgICBwcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJibGFibGFcIikpO1xuICAgICAgICBwcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJibG9wYmxpcFwiKSk7XG5cbiAgICAgICAgcHJvamVjdExpc3QubGlzdFsxXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiYmluZ29cIikpO1xuICAgICAgICBwcm9qZWN0TGlzdC5saXN0WzFdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJiYW5nb1wiKSk7XG4gICAgICAgIHJldHVybiA7IFxuICAgIH07XG5cbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdExpc3QuYWRkKFByb2plY3RGYWN0b3J5KGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWRQcm9qZWN0ID0gcHJvamVjdExpc3QubGlzdC5maW5kKGUgPT4gZS5uYW1lID09PSBsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcblxuICAgICAgICBjb25zdCBpdGVtc1RvQmVJbnNlcnRlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpO1xuXG4gICAgICAgIGluc2VydGVkUHJvamVjdC50b0RvSXRlbXMucHVzaCguLi5pdGVtc1RvQmVJbnNlcnRlZCk7XG5cbiAgICB9O1xuICAgIFxufTtcblxuZ2V0UHJvamVjdHMoKTtcblxuXG4vL3B1dCBhbGwgcHJvamVjdHMgYW5kIHRoZWlyIGl0ZW1zKGluY2x1ZGluZyBwcm9wZXJ0aWVzKSBpbiBsb2NhbHN0b3JhZ2UuIGNhbGxlZCBhdCB0aGUgZW5kIG9mIGRlbGVnYXRlQ2xpY2soKVxuZnVuY3Rpb24gc2V0UHJvamVjdHMoKSB7ICAgICAgICBcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBwcm9qZWN0TGlzdC5saXN0LmZvckVhY2goZSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLm5hbWUsIEpTT04uc3RyaW5naWZ5KGUudG9Eb0l0ZW1zKSkpOyBcbn07XG5cblxuXG4vL2xvYWRpbmcgZG9tXG5pbml0aWFsRG9tTG9hZGVyKCk7XG5maWxsQ3VzdG9tUHJvamVjdHMocHJvamVjdExpc3QubGlzdCk7XG5maWxsQ29udGVudChwcm9qZWN0TGlzdC5saXN0WzBdKTtcblxuXG5cblxuLy9ldmVudCBsaXN0ZW5lcnNcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGVnYXRlQ2xpY2spO1xuXG5mdW5jdGlvbiBkZWxlZ2F0ZUNsaWNrKGUpIHtcblxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJsb2dvXCIpIHtcbiAgICAgICAgdG9nZ2xlTmF2KCk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwibGlzdFwiKSB7IC8vaWYgY2xpY2tlZCBvbiBhIHByb2plY3RcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImFkZFByb2plY3RcIikgeyAvLyBpZiBjbGlja2VkIG9uIHRoZSArbmV3IHByb2plY3QgYnV0dG9uXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gYWRkTmV3UHJvamVjdFBvcFVwKCk7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHJldHVybjsgICAgXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hZGQoUHJvamVjdEZhY3RvcnkobmFtZSkpO1xuICAgICAgICAgICAgZmlsbEN1c3RvbVByb2plY3RzKHByb2plY3RMaXN0Lmxpc3QpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbGxDb250ZW50KHByb2plY3RMaXN0Lmxpc3RbcHJvamVjdExpc3QubGlzdC5sZW5ndGgtMV0pO1xuICAgICAgICB9OyBcblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgY29uc3QgY2xpY2tlZFByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0TGlzdC5saXN0LCBlLnRhcmdldC5pZCk7XG4gICAgICAgIHJlbW92ZUhpZ2hMaWdodChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIGZpbGxDb250ZW50KGNsaWNrZWRQcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJhZGRJdGVtXCIpIHsgIC8vaWYgY2xpY2tlZCB0aGUgKyBpdGVtIGJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RMaXN0Lmxpc3QsIHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBhZGROZXdJdGVtTmFtZSgpO1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSByZXR1cm47XG4gICAgICAgIHByb2plY3QuYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShpdGVtTmFtZSkpOyBcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgIGZpbGxDb250ZW50KHByb2plY3QpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcInJlbW92ZUJ1dHRvblwiKSB7IC8vaWYgY2xpY2tlZCB0aGUg4p2MIGJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RMaXN0Lmxpc3QsIHByb2plY3ROYW1lKTtcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVRpdGxlXCIpWzBdLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBpdGVtVG9CZVJlbW92ZWQgPSBmaW5kUHJvamVjdChwcm9qZWN0LnRvRG9JdGVtcywgaXRlbU5hbWUpO1xuXG4gICAgICAgIHByb2plY3QucmVtb3ZlSXRlbShpdGVtVG9CZVJlbW92ZWQpO1xuICAgICAgICBmaWxsQ29udGVudChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJpQnV0dG9uXCIpIHsgIC8vaWYgY2xpY2tlZCBvbiBpbmZvIGJ1dHRvblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RMaXN0Lmxpc3QsIHByb2plY3ROYW1lKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaXRlbVRvQmVFeHBhbmRlZCA9IGZpbmRQcm9qZWN0KHByb2plY3QudG9Eb0l0ZW1zLCBpdGVtRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtVGl0bGVcIilbMF0udGV4dENvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1EaXYpO1xuICAgICAgICBcbiAgICAgICAgb3Blbkl0ZW1EZXRhaWxzKGl0ZW1EaXYsIGl0ZW1Ub0JlRXhwYW5kZWQpO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgc2V0UHJvamVjdHMoKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0Lmxpc3QpO1xuXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==