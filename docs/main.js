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
        <div id="plus">x</div>
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
        
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.openItemDetails)(itemDiv, itemToBeExpanded);
        
    };

    if (e.target.id === "plus") {
        console.log(localStorage); 
        const projectName = document.querySelector("h1").textContent;
         
        _projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.remove(projectName);      
        
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillCustomProjects)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list);
        (0,_DomLoader__WEBPACK_IMPORTED_MODULE_4__.fillContent)(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list[_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list.length -1]);

    };

    setProjects();
    console.log(_projectManager__WEBPACK_IMPORTED_MODULE_1__.projectList.list)
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEM7QUFDNUMsNENBQTRDO0FBQzVDLHlCQUF5Qiw4REFBa0I7QUFDM0M7QUFDQSxZQUFZLDREQUFlLENBQUMsOERBQWM7QUFDMUMsWUFBWSw4REFBa0IsQ0FBQyw2REFBZ0I7QUFDL0MsbUJBQW1CLHVEQUFXLENBQUMsNkRBQWdCLENBQUMsb0VBQXVCO0FBQ3ZFOztBQUVBO0FBQ0EsK0JBQStCLDREQUFXLENBQUMsNkRBQWdCO0FBQzNELFFBQVEsMkRBQWU7QUFDdkIsUUFBUSx1REFBVztBQUNuQjs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQSx3QkFBd0IsNERBQVcsQ0FBQyw2REFBZ0I7QUFDcEQseUJBQXlCLDBEQUFjO0FBQ3ZDO0FBQ0Esd0JBQXdCLDhEQUFpQjtBQUN6QztBQUNBLFFBQVEsdURBQVc7QUFDbkI7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0Esd0JBQXdCLDREQUFXLENBQUMsNkRBQWdCOztBQUVwRDtBQUNBLGdDQUFnQyw0REFBVzs7QUFFM0M7QUFDQSxRQUFRLHVEQUFXO0FBQ25COztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBLHdCQUF3Qiw0REFBVyxDQUFDLDZEQUFnQjtBQUNwRDtBQUNBO0FBQ0EsaUNBQWlDLDREQUFXO0FBQzVDO0FBQ0EsUUFBUSwyREFBZTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBa0I7QUFDMUI7QUFDQSxRQUFRLDhEQUFrQixDQUFDLDZEQUFnQjtBQUMzQyxRQUFRLHVEQUFXLENBQUMsNkRBQWdCLENBQUMsb0VBQXVCOztBQUU1RDs7QUFFQTtBQUNBLGdCQUFnQiw2REFBZ0I7QUFDaEMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9Eb21Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9FdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdE9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDVweCBoc2woMjgsIDg3JSwgODclKTtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4jbG9nbywgI3BsdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNjclKTtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG5cXG4jcGx1czpob3ZlciwgI2xvZ286aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNDclKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcGx1czphY3RpdmUsICNsb2dvOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4vKiBjb250ZW50IHNlY3Rpb24gKi9cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblxcbi8qIG5hdmlnYXRpb24gb3IgbGlzdCBzZWN0aW9uICovXFxuI25hdmlnYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk1JSk7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogNjBweCA0MHB4IDBweCA0MHB4IDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2hhZG93OiA1cHggMHB4IDVweCBoc2woMCwgMCUsIDU1JSk7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuI25hdlRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbiNsaXN0Q29udGFpbmVyIHtcXG4gICAgY29sb3I6aHNsKDAsIDAlLCA1NSUpO1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwcHggLTIwcHg7XFxufVxcblxcbiNsaXN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5saXN0IHtcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5saXN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ubGlzdDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuLmxpc3Quc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogY3VycmVudCBwcm9qZWN0IHNlY3Rpb24gKi9cXG5cXG4jY3VycmVudFByb2plY3Qge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxufVxcblxcbiN4IHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNSUgNSUgNSUgNSU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXG59XFxuXFxuLnRvRG9JdGVtLCAuYWRkSXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmdlbmVyYWxJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9Eb0l0ZW0uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbn1cXG5cXG4udG9Eb0l0ZW0ubWlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7ICAgIFxcbn1cXG5cXG4udG9Eb0l0ZW0ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDg3JSk7XFxufVxcblxcbi5pdGVtVGl0bGUge1xcbiAgICBjb2xvcjogaHNsKDAsIDAlLCAyNSUpO1xcbn1cXG5cXG4uaW5mb0FuZFJlbW92ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uaUJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcbi5pQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG4ucmVtb3ZlQnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkSXRlbSB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFkZEl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA0NyUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGRJdGVtOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xcbn1cXG5cXG4jZGV0YWlscyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA5NyUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAjbmF2aWdhdGlvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDBweDtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7Ozs7O0FBTUEsNEJBQTRCOztBQUU1QjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7O0FBSUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsUUFBUTtRQUNSLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIGhlYWRlciBzZWN0aW9uICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5O1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggaHNsKDI4LCA4NyUsIDg3JSk7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuI2xvZ28sICNwbHVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDY3JSk7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuXFxuI3BsdXM6aG92ZXIsICNsb2dvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI4LCA4NyUsIDQ3JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3BsdXM6YWN0aXZlLCAjbG9nbzphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuLyogY29udGVudCBzZWN0aW9uICovXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG5cXG4vKiBuYXZpZ2F0aW9uIG9yIGxpc3Qgc2VjdGlvbiAqL1xcbiNuYXZpZ2F0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NSUpO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHggNDBweCAwcHggNDBweCA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYm94LXNoYWRvdzogNXB4IDBweCA1cHggaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNuYXZUb2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4jbGlzdENvbnRhaW5lciB7XFxuICAgIGNvbG9yOmhzbCgwLCAwJSwgNTUlKTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgPiBwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMHB4IC0yMHB4O1xcbn1cXG5cXG4jbGlzdHMge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jYWRkUHJvamVjdCB7XFxuICAgIGNvbG9yOiBoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTUlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmxpc3Q6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNweCk7XFxufVxcblxcbi5saXN0LnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1NSUpO1xcbiAgICBjb2xvcjogd2hpdGU7ICBcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBoc2woMCwgMCUsIDU1JSk7XFxufVxcblxcblxcblxcblxcblxcbi8qIGN1cnJlbnQgcHJvamVjdCBzZWN0aW9uICovXFxuXFxuI2N1cnJlbnRQcm9qZWN0IHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jeCB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDUlIDUlIDUlIDUlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxufVxcblxcbi50b0RvSXRlbSwgLmFkZEl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgODclKTtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5nZW5lcmFsSW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvRG9JdGVtLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNDclKTtcXG59XFxuXFxuLnRvRG9JdGVtLm1pZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA2NyUpOyAgICBcXG59XFxuXFxuLnRvRG9JdGVtLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOCwgODclLCA4NyUpO1xcbn1cXG5cXG4uaXRlbVRpdGxlIHtcXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgMjUlKTtcXG59XFxuXFxuLmluZm9BbmRSZW1vdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmlCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbn1cXG4uaUJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbW92ZUJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG59XFxuLnJlbW92ZUJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEl0ZW0ge1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5hZGRJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgNDclKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkSXRlbTphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcXG59XFxuXFxuI2RldGFpbHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjgsIDg3JSwgOTclKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgI25hdmlnYXRpb24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGluaXRpYWxEb21Mb2FkZXIoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+8J2VizwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidGl0bGVcIj5UbyBEbyBMaXN0PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwbHVzXCI+eDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBpZD1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJsaXN0Q29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgPHA+UHJvamVjdHM8L3A+XG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBpZD1cImxpc3RzXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWRkUHJvamVjdFwiIGNsYXNzPVwibGlzdFwiPisgTmV3IFByb2plY3Q8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJjdXJyZW50UHJvamVjdFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG59O1xuXG5mdW5jdGlvbiBmaWxsQ3VzdG9tUHJvamVjdHMocHJvamVjdExpc3RBcnJheSkgeyAgIC8vcG9wdWxhdGVzIGN1c3RvbSBwcm9qZWN0cyBpbiBuYXYgYmFyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0c1wiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYDwvYnI+XG4gICAgICAgIDxkaXYgaWQ9XCJhZGRQcm9qZWN0XCIgY2xhc3M9XCJsaXN0XCI+KyBOZXcgUHJvamVjdDwvZGl2PmA7XG4gICAgXG4gICAgcHJvamVjdExpc3RBcnJheS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICBkaXYuaWQgPSBlLm5hbWU7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGUubmFtZTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShkaXYsIGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcblxuICAgICAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICAgICAgZGl2Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGJyKTtcbiAgICB9KVxufTtcblxuXG4vLyBzb21lIGZ1bmN0aW9ucyB0aGF0IGdldCBjYWxsZWQgYnkgZmlsbGNvbnRlbnQoKVxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZVNlbGVjdG9yKHByb2plY3ROYW1lKSB7ICAgICAvL2hpZ2hsaWdodHMgdGhlIHByb2plY3QgaW4gdGhlIG5hdiBiYXJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0TmFtZSk7XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbn07XG5cbmZ1bmN0aW9uIGZpbGxQcm9qZWN0SDEocHJvamVjdE5hbWUpIHsgICAvL2luc2VydCB0aGUgcHJvamVjdCB0aXRsZVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIHJldHVybiBuYW1lO1xufTtcblxuXG5mdW5jdGlvbiBmaWxsSXRlbUNvbnRhaW5lcihpdGVtQXJyYXkpIHsgLy9jcmVhdGVzIGEgZGl2IHRvIHB1dCB0aGUgdG8gZG8gaXRlbSBpblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJpdGVtQ29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBhZGRJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRJdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGRJdGVtXCIpO1xuICAgIGFkZEl0ZW1EaXYudGV4dENvbnRlbnQgPSBcIisgaXRlbVwiO1xuXG4gICAgaXRlbUFycmF5LmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvSXRlbVwiKTtcbiAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKGUucHJpb3JpdHkpO1xuICAgICAgICBpdGVtRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5lcmFsSW5mb1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94XCIgJHtlLmRvbmUgPT0gdHJ1ZSA/IFwiY2hlY2tlZFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1UaXRsZVwiPiR7ZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQW5kUmVtb3ZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpQnV0dG9uXCI+4pOYPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZW1vdmVCdXR0b25cIj7inYw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkSXRlbURpdik7XG4gICAgXG4gICAgcmV0dXJuIGRpdjtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrYm94TGlzdGVuZXIocHJvamVjdCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXRlbUNvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZURvbmVQcm9wZXJ0eSk7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEb25lUHJvcGVydHkoZSkge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgaXRlbU9iamVjdCA9IHByb2plY3QudG9Eb0l0ZW1zLmZpbmQoZSA9PiBlLm5hbWUgPT09IGl0ZW1OYW1lKTtcbiAgICAgICAgaXRlbU9iamVjdC5kb25lID8gaXRlbU9iamVjdC5kb25lID0gZmFsc2UgOiBpdGVtT2JqZWN0LmRvbmUgPSB0cnVlO1xuICAgIH1cbn07XG5cblxuXG5mdW5jdGlvbiBmaWxsQ29udGVudChwcm9qZWN0KSB7ICAgICAvL2NvbWJpbmVzIFxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50UHJvamVjdFwiKTtcbiAgICBjdXJyZW50UHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IG5hbWVEaXYgPSBmaWxsUHJvamVjdEgxKHByb2plY3QubmFtZSk7XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lckRpdiA9IGZpbGxJdGVtQ29udGFpbmVyKHByb2plY3QudG9Eb0l0ZW1zKTtcbiAgICBcbiAgICBjdXJyZW50UHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICBjdXJyZW50UHJvamVjdERpdi5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyRGl2KTsgICAgXG4gICAgXG4gICAgXG4gICAgY2hlY2tib3hMaXN0ZW5lcihwcm9qZWN0KTtcbiAgICBwcm9qZWN0TmFtZVNlbGVjdG9yKHByb2plY3QubmFtZSk7XG59O1xuXG5cblxuXG5cbmZ1bmN0aW9uIHJlbW92ZUhpZ2hMaWdodChuYXZiYXJQcm9qZWN0RGl2KSB7ICAgICAvL3JlbW92ZXMgbmF2YmFyIGhpZ2hsaWdodFxuICAgIG5hdmJhclByb2plY3REaXZbMF0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xufTtcblxuXG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RQb3BVcCgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiZmlsbCBpbiBuYW1lXCIpO1xuICAgIHJldHVybiBuYW1lO1xufTtcblxuZnVuY3Rpb24gYWRkTmV3SXRlbU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcImZpbGwgaW4gbmFtZVwiKTtcbiAgICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBuYXYuaWQgPT09IFwibmF2aWdhdGlvblwiID8gbmF2LmlkID0gXCJuYXZUb2dnbGVcIiA6IG5hdi5pZCA9IFwibmF2aWdhdGlvblwiO1xuICAgIFxufTtcblxuXG5mdW5jdGlvbiBjbG9zZUl0ZW1EZXRhaWxzKGl0ZW1EaXYpIHtcbiAgICBpdGVtRGl2LnJlbW92ZUNoaWxkKGl0ZW1EaXYubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59O1xuXG5mdW5jdGlvbiBjbG9zZU90aGVySXRlbURldGFpbHMoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJleHBhbmRlZFwiKS5sZW5ndGggPj0gMSkgeyAgICAgIC8vY2xvc2UgYW55IG90aGVyIGl0ZW0gZGV0YWlscyBzZWN0aW9uXG4gICAgICAgIGNvbnN0IGFscmVhZHlFeHAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXhwYW5kZWRcIilbMF07XG4gICAgICAgIGFscmVhZHlFeHAuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkXCIpO1xuICAgICAgICBhbHJlYWR5RXhwLnJlbW92ZUNoaWxkKGFscmVhZHlFeHAubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxufTtcblxuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlSXRlbURldGFpbHMoaXRlbURpdiwgaXRlbU9iamVjdCkge1xuXG4gICAgY2xvc2VPdGhlckl0ZW1EZXRhaWxzKCk7XG5cbiAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcblxuICAgIGNvbnN0IGRldGFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsRGl2LmlkID0gXCJkZXRhaWxzXCI7XG4gICAgZGV0YWlsRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb246XCIgdmFsdWU9XCIke2l0ZW1PYmplY3QuZGVzY3JpcHRpb259XCI+PC9icj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5Db21wbGV0ZSBCZWZvcmU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgdmFsdWU9XCIke2l0ZW1PYmplY3QuZHVlRGF0ZX1cIj48L2JyPlxuICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1pZFwiPk1pZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgIGA7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChkZXRhaWxEaXYpO1xuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSBpdGVtT2JqZWN0LnByaW9yaXR5OyBcbiAgICBjaGFuZ2VMaXN0ZW5lcihpdGVtRGl2LCBpdGVtT2JqZWN0KTtcbn07XG5cblxuXG5mdW5jdGlvbiBvcGVuSXRlbURldGFpbHMoaXRlbURpdlRvT3BlbiwgaXRlbU9iamVjdCkge1xuICAgIGlmIChpdGVtRGl2VG9PcGVuLmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkXCIpKSB7ICAgICAgLy9pZiBpdCdzIGFscmVhZHkgZXhwYW5kZWQsIGNsb3NlIGl0XG4gICAgICAgIGNsb3NlSXRlbURldGFpbHMoaXRlbURpdlRvT3Blbik7XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wb3B1bGF0ZSB0aGUgZGV0YWlscyBzZWN0aW9uXG4gICAgICAgIHBvcHVsYXRlSXRlbURldGFpbHMoaXRlbURpdlRvT3BlbiwgaXRlbU9iamVjdCk7XG4gICAgfTtcbn07XG5cblxuXG5mdW5jdGlvbiBjaGFuZ2VMaXN0ZW5lcihpdGVtRGl2VG9PcGVuLCBpdGVtT2JqZWN0KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXBwbHlDaGFuZ2VkRGV0YWlscyk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBhcHBseUNoYW5nZWREZXRhaWxzKCkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgXG4gICAgICAgIGl0ZW1EaXZUb09wZW4uY2xhc3NMaXN0LnJlbW92ZShcImxvd1wiLCBcIm1pZFwiLCBcImhpZ2hcIik7XG4gICAgICAgIGl0ZW1EaXZUb09wZW4uY2xhc3NMaXN0LmFkZChwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBpdGVtT2JqZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGl0ZW1PYmplY3QuZHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XG4gICAgICAgIGl0ZW1PYmplY3QucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjbG9zZUl0ZW1EZXRhaWxzKGl0ZW1EaXZUb09wZW4pO1xuICAgICAgICBwb3B1bGF0ZUl0ZW1EZXRhaWxzKGl0ZW1EaXZUb09wZW4sIGl0ZW1PYmplY3QpO1xuICAgIH07XG4gICAgXG5cbn07XG5cblxuICAgIGV4cG9ydCB7aW5pdGlhbERvbUxvYWRlciwgZmlsbEN1c3RvbVByb2plY3RzLCBmaWxsQ29udGVudCwgcmVtb3ZlSGlnaExpZ2h0LCBhZGROZXdQcm9qZWN0UG9wVXAsIGFkZE5ld0l0ZW1OYW1lLCB0b2dnbGVOYXYsIG9wZW5JdGVtRGV0YWlsc307IiwiZnVuY3Rpb24gZmluZFByb2plY3QobGlzdEFycmF5LCBjbGlja2VkUHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gbGlzdEFycmF5LmZpbmQoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IGNsaWNrZWRQcm9qZWN0TmFtZSk7XG59O1xuXG5cblxuXG5leHBvcnQge2ZpbmRQcm9qZWN0fTsiLCJleHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSB7XG4gICAgbGlzdDogW10sXG4gICAgYWRkOiBmdW5jdGlvbihwcm9qZWN0KSB7dGhpcy5saXN0LnB1c2gocHJvamVjdCl9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24ocHJvamVjdE5hbWUpIHt0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKGUgPT4gZS5uYW1lICE9PSBwcm9qZWN0TmFtZSl9XG59OyIsImV4cG9ydCBjb25zdCBQcm9qZWN0RmFjdG9yeSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGxldCBuYW1lID0gcHJvamVjdE5hbWU7XG4gICAgbGV0IHRvRG9JdGVtcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlTmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgICAgIC8vIHJlbG9hZFByb2plY3RPYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSXRlbShuZXdJdGVtT2JqZWN0KSB7XG4gICAgICAgIHRoaXMudG9Eb0l0ZW1zLnB1c2gobmV3SXRlbU9iamVjdCk7XG4gICAgICAgIC8vIHJlbG9hZFByb2plY3RPYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSXRlbShpdGVtVG9CZVJlbW92ZWQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0b0RvSXRlbXMuaW5kZXhPZihpdGVtVG9CZVJlbW92ZWQpO1xuICAgICAgICByZXR1cm4gdGhpcy50b0RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgLy8gcmVsb2FkUHJvamVjdE9iamVjdEluRG9tKClcbiAgICB9XG5cbiAgICByZXR1cm4ge25hbWUsIHRvRG9JdGVtcywgY2hhbmdlTmFtZSwgYWRkSXRlbSwgcmVtb3ZlSXRlbX07XG59O1xuIiwiZXhwb3J0IGNvbnN0IFRvRG9PYmplY3RGYWN0b3J5ID0gKGl0ZW1OYW1lKT0+IHtcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgIGxldCBuYW1lID0gaXRlbU5hbWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICBsZXQgZHVlRGF0ZSA9IFwiXCI7XG4gICAgbGV0IHByaW9yaXR5ID0gXCJsb3dcIjtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZU5hbWUobmV3VGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9IG5ld1RpdGxlO1xuICAgICAgICAvLyByZWxvYWRJdGVtT2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlRHVlRGF0ZShuZXdEYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgICAgICAvLyByZWxvYWRJdGVtT2JqZWN0SW5Eb20oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIC8vIHJlbG9hZEl0ZW1PYmplY3RJbkRvbSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtkb25lLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoYW5nZU5hbWUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcml0eX07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCB7IFByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdFwiO1xuaW1wb3J0IHsgVG9Eb09iamVjdEZhY3RvcnkgfSBmcm9tIFwiLi90b0RvT2JqZWN0XCI7XG5pbXBvcnQge2luaXRpYWxEb21Mb2FkZXIsIGZpbGxDdXN0b21Qcm9qZWN0cywgZmlsbENvbnRlbnQsIGFkZE5ld1Byb2plY3RQb3BVcCwgYWRkTmV3SXRlbU5hbWUsIHJlbW92ZUhpZ2hMaWdodCwgdG9nZ2xlTmF2LCBvcGVuSXRlbURldGFpbHN9IGZyb20gXCIuL0RvbUxvYWRlclwiO1xuaW1wb3J0IHtmaW5kUHJvamVjdH0gZnJvbSBcIi4vRXZlbnRMaXN0ZW5lcnNcIjtcblxuLy8gIGdldCBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZS4gaWYgdGhlcmUncyBubyBwcm9qZWN0cyBhbHJlYWR5LCBtYWtlIHNvbWUgZXhhbXBsZSBwcm9qZWN0c1xuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7ICAgICBcblxuICAgIGlmICghbG9jYWxTdG9yYWdlLmxlbmd0aCkgeyAgICAgLy9tYWtpbmcgZXhhbXBsZSBsaXN0cyBhbmQgaXRlbXNcbiAgICAgICAgXG5cbiAgICAgICAgcHJvamVjdExpc3QuYWRkKFByb2plY3RGYWN0b3J5KFwiVG9kYXlcIikpO1xuICAgICAgICBwcm9qZWN0TGlzdC5hZGQoUHJvamVjdEZhY3RvcnkoXCJUaGlzIFdlZWtcIikpO1xuXG4gICAgICAgIHByb2plY3RMaXN0Lmxpc3RbMF0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImRvIGhvbWV3b3JrXCIpKTtcbiAgICAgICAgcHJvamVjdExpc3QubGlzdFswXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwicGluZ3BvbmdcIikpO1xuICAgICAgICBwcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJncm9jZXJpZXNcIikpO1xuICAgICAgICBwcm9qZWN0TGlzdC5saXN0WzBdLmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoXCJ3YXRjaCBhIG1vdmllXCIpKTtcbiAgICAgICAgcHJvamVjdExpc3QubGlzdFswXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiYmxhYmxhXCIpKTtcbiAgICAgICAgcHJvamVjdExpc3QubGlzdFswXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiYmxvcGJsaXBcIikpO1xuXG4gICAgICAgIHByb2plY3RMaXN0Lmxpc3RbMV0uYWRkSXRlbShUb0RvT2JqZWN0RmFjdG9yeShcImJpbmdvXCIpKTtcbiAgICAgICAgcHJvamVjdExpc3QubGlzdFsxXS5hZGRJdGVtKFRvRG9PYmplY3RGYWN0b3J5KFwiYmFuZ29cIikpO1xuICAgICAgICByZXR1cm4gOyBcbiAgICB9O1xuXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LmFkZChQcm9qZWN0RmFjdG9yeShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgICAgIGNvbnN0IGluc2VydGVkUHJvamVjdCA9IHByb2plY3RMaXN0Lmxpc3QuZmluZChlID0+IGUubmFtZSA9PT0gbG9jYWxTdG9yYWdlLmtleShpKSk7XG5cbiAgICAgICAgY29uc3QgaXRlbXNUb0JlSW5zZXJ0ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcblxuICAgICAgICBpbnNlcnRlZFByb2plY3QudG9Eb0l0ZW1zLnB1c2goLi4uaXRlbXNUb0JlSW5zZXJ0ZWQpO1xuXG4gICAgfTtcbiAgICBcbn07XG5cbmdldFByb2plY3RzKCk7XG5cblxuLy9wdXQgYWxsIHByb2plY3RzIGFuZCB0aGVpciBpdGVtcyhpbmNsdWRpbmcgcHJvcGVydGllcykgaW4gbG9jYWxzdG9yYWdlLiBjYWxsZWQgYXQgdGhlIGVuZCBvZiBkZWxlZ2F0ZUNsaWNrKClcbmZ1bmN0aW9uIHNldFByb2plY3RzKCkgeyAgICAgICAgXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgcHJvamVjdExpc3QubGlzdC5mb3JFYWNoKGUgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oZS5uYW1lLCBKU09OLnN0cmluZ2lmeShlLnRvRG9JdGVtcykpKTsgXG59O1xuXG5cblxuLy9sb2FkaW5nIGRvbVxuaW5pdGlhbERvbUxvYWRlcigpO1xuZmlsbEN1c3RvbVByb2plY3RzKHByb2plY3RMaXN0Lmxpc3QpO1xuZmlsbENvbnRlbnQocHJvamVjdExpc3QubGlzdFswXSk7XG5cblxuXG5cbi8vZXZlbnQgbGlzdGVuZXJzXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxlZ2F0ZUNsaWNrKTtcblxuZnVuY3Rpb24gZGVsZWdhdGVDbGljayhlKSB7XG5cbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG5cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwibG9nb1wiKSB7XG4gICAgICAgIHRvZ2dsZU5hdigpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0WzBdID09PSBcImxpc3RcIikgeyAvL2lmIGNsaWNrZWQgb24gYSBwcm9qZWN0XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJhZGRQcm9qZWN0XCIpIHsgLy8gaWYgY2xpY2tlZCBvbiB0aGUgK25ldyBwcm9qZWN0IGJ1dHRvblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGFkZE5ld1Byb2plY3RQb3BVcCgpO1xuICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47ICAgIFxuICAgICAgICAgICAgcHJvamVjdExpc3QuYWRkKFByb2plY3RGYWN0b3J5KG5hbWUpKTtcbiAgICAgICAgICAgIGZpbGxDdXN0b21Qcm9qZWN0cyhwcm9qZWN0TGlzdC5saXN0KTtcbiAgICAgICAgICAgIHJldHVybiBmaWxsQ29udGVudChwcm9qZWN0TGlzdC5saXN0W3Byb2plY3RMaXN0Lmxpc3QubGVuZ3RoLTFdKTtcbiAgICAgICAgfTsgXG5cbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdExpc3QubGlzdCwgZS50YXJnZXQuaWQpO1xuICAgICAgICByZW1vdmVIaWdoTGlnaHQoY3VycmVudFByb2plY3QpO1xuICAgICAgICBmaWxsQ29udGVudChjbGlja2VkUHJvamVjdCk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwiYWRkSXRlbVwiKSB7ICAvL2lmIGNsaWNrZWQgdGhlICsgaXRlbSBidXR0b25cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0TGlzdC5saXN0LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gYWRkTmV3SXRlbU5hbWUoKTtcbiAgICAgICAgaWYgKCFpdGVtTmFtZSkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0LmFkZEl0ZW0oVG9Eb09iamVjdEZhY3RvcnkoaXRlbU5hbWUpKTsgXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICBmaWxsQ29udGVudChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdFswXSA9PT0gXCJyZW1vdmVCdXR0b25cIikgeyAvL2lmIGNsaWNrZWQgdGhlIOKdjCBidXR0b25cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0TGlzdC5saXN0LCBwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1UaXRsZVwiKVswXS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgaXRlbVRvQmVSZW1vdmVkID0gZmluZFByb2plY3QocHJvamVjdC50b0RvSXRlbXMsIGl0ZW1OYW1lKTtcblxuICAgICAgICBwcm9qZWN0LnJlbW92ZUl0ZW0oaXRlbVRvQmVSZW1vdmVkKTtcbiAgICAgICAgZmlsbENvbnRlbnQocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMF0gPT09IFwiaUJ1dHRvblwiKSB7ICAvL2lmIGNsaWNrZWQgb24gaW5mbyBidXR0b25cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0TGlzdC5saXN0LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpdGVtRGl2ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGl0ZW1Ub0JlRXhwYW5kZWQgPSBmaW5kUHJvamVjdChwcm9qZWN0LnRvRG9JdGVtcywgaXRlbURpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVRpdGxlXCIpWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgXG4gICAgICAgIG9wZW5JdGVtRGV0YWlscyhpdGVtRGl2LCBpdGVtVG9CZUV4cGFuZGVkKTtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJwbHVzXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTsgXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICAgICAgICAgXG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZShwcm9qZWN0TmFtZSk7ICAgICAgXG4gICAgICAgIFxuICAgICAgICBmaWxsQ3VzdG9tUHJvamVjdHMocHJvamVjdExpc3QubGlzdCk7XG4gICAgICAgIGZpbGxDb250ZW50KHByb2plY3RMaXN0Lmxpc3RbcHJvamVjdExpc3QubGlzdC5sZW5ndGggLTFdKTtcblxuICAgIH07XG5cbiAgICBzZXRQcm9qZWN0cygpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0Lmxpc3QpXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==