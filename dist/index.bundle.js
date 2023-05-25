"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\nnav {\n  background-color: #cbb89a;\n  box-shadow: #2b1c2f 0 0 10px;\n  opacity: 0.8;\n  color: #2a695e; }\n\n.profile-picture {\n  width: 36px;\n  border-radius: 50px; }\n\n.thumbnail-row {\n  margin-bottom: 8px;\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  max-height: 420px;\n  text-overflow: ellipsis; }\n\n.book-stats {\n  font-size: 12px;\n  color: #606060; }\n\n.book-preview {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden; }\n\n.thumbnail {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.book-time {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px;\n  border-radius: 2px;\n  background-color: black;\n  color: white;\n  position: absolute;\n  bottom: 8px;\n  left: 5px; }\n\n.book-like {\n  font-size: 14px;\n  font-weight: 700;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: gold;\n  color: white;\n  bottom: 8px;\n  min-width: 90px;\n  cursor: pointer; }\n\n#book-count {\n  font-weight: bolder; }\n\n.book-info {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.book-title {\n  margin-top: 0;\n  font-size: 16px;\n  font-weight: bold; }\n\n.book-author {\n  margin-top: 5px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: #606060; }\n\n.book-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 50px;\n  padding: 50px; }\n  @media (max-width: 750px) {\n    .book-grid {\n      grid-template-columns: 1fr; } }\n  @media (min-width: 751px) and (max-width: 999px) {\n    .book-grid {\n      grid-template-columns: 1fr 1fr; } }\n  @media (min-width: 1000px) {\n    .book-grid {\n      grid-template-columns: 1fr 1fr 1fr; } }\n\n.popup {\n  position: fixed;\n  padding-top: 130px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  width: 100%;\n  height: 800px;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-y: auto;\n  scroll-behavior: smooth; }\n\n.popup__content {\n  background-color: #cbb89a;\n  padding: 20px;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-top: 30px; }\n\n.popup__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px; }\n  .popup__header .popup__close {\n    font-size: 3.5rem;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: #143f46;\n    transition: all 0.2s; }\n    .popup__header .popup__close:hover {\n      color: black;\n      background-color: #143f46; }\n\n.popup__body {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start; }\n\n.popup__publish-year {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #2b1c2f;\n  margin-bottom: 10px;\n  align-self: flex-start; }\n\n.popup__comments-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #2b1c2f;\n  margin-bottom: 10px;\n  align-self: start;\n  display: flex;\n  flex-direction: row; }\n\n.popup__comments {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  width: 100%;\n  align-self: flex-start; }\n\n.popup__comment {\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n  border-radius: 5px;\n  border: 1px solid #143f46;\n  box-sizing: border-box;\n  color: #143f46;\n  padding-left: 10px;\n  background-color: #cbb89a; }\n\n.popup__comment:hover {\n  outline: none;\n  border-color: #143f46;\n  box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\nspan {\n  font-weight: bold;\n  color: #2a695e;\n  font-size: 1.5rem; }\n\n.popup__new-comment {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px; }\n\n.popup__new-comment-username {\n  width: 100%;\n  height: 40px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start; }\n  .popup__new-comment-username:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\n.popup__new-comment-textarea {\n  width: 100%;\n  height: 60px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  resize: none;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start; }\n  .popup__new-comment-textarea:focus {\n    outline: none;\n    border-color: #143f46;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\n.popup__new-comment-button {\n  background-color: #2b1c2f;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .popup__new-comment-button:hover {\n    background-color: #143f46;\n    color: #cbb89a; }\n\n.popup__title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin: 20px;\n  color: #2a695e; }\n\n.popup__cover-image {\n  width: 400px;\n  height: 400px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  align-self: center; }\n\nfooter {\n  background-color: #cbb89a;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  opacity: 0.8; }\n\n.footer-cards {\n  width: 100%; }\n\n::-webkit-scrollbar {\n  width: 3px;\n  background-color: #07020d; }\n\n::-webkit-scrollbar-thumb {\n  width: 10px;\n  background-color: gold;\n  border-radius: 30px; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: rgb(15, 15, 15);\r\n$secondary-color: #cbb89a;\r\n$tertiary-color: #8d8171;\r\n$quaternary-color: #2a695e;\r\n$quinary-color: #143f46;\r\n$senary-color: #2b1c2f;\r\n$families: 'Roboto', 'Helvetica Neue', sans-serif;\r\n$thumbnail-width: 100%;\r\n\r\nbody {\r\n  background-image: url('./img/background.jpg');\r\n  font-family: $families;\r\n}\r\n\r\nnav {\r\n  background-color: $secondary-color;\r\n  box-shadow: $senary-color 0 0 10px;\r\n  opacity: 0.8;\r\n  color: $quaternary-color;\r\n}\r\n\r\n.profile-picture {\r\n  width: 36px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.thumbnail-row {\r\n  margin-bottom: 8px;\r\n  position: relative;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  max-height: 420px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.book-stats {\r\n  font-size: 12px;\r\n  color: rgb(96, 96, 96);\r\n}\r\n\r\n.book-preview {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-color: white;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\n.thumbnail {\r\n  width: $thumbnail-width;\r\n  height: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.book-time {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  padding: 4px;\r\n  border-radius: 2px;\r\n  background-color: black;\r\n  color: white;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  left: 5px;\r\n}\r\n\r\n.book-like {\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  padding: 6px;\r\n  border-radius: 4px;\r\n  background-color: gold;\r\n  color: white;\r\n  bottom: 8px;\r\n  min-width: 90px;\r\n  cursor: pointer;\r\n}\r\n\r\n#book-count {\r\n  font-weight: bolder;\r\n}\r\n\r\n.book-info {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.book-title {\r\n  margin-top: 0;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.book-author {\r\n  margin-top: 5px;\r\n  font-size: 14px;\r\n  margin-bottom: 4px;\r\n  color: rgb(96, 96, 96);\r\n}\r\n\r\n.book-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 50px;\r\n  padding: 50px;\r\n\r\n  @media (max-width: 750px) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  @media (min-width: 751px) and (max-width: 999px) {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  @media (min-width: 1000px) {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  padding-top: 130px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 100;\r\n  width: 100%;\r\n  height: 800px;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow-y: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.popup__content {\r\n  background-color: $secondary-color;\r\n  padding: 20px;\r\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.popup__header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n\r\n  .popup__close {\r\n    font-size: 3.5rem;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: $quinary-color;\r\n    transition: all 0.2s;\r\n\r\n    &:hover {\r\n      color: black;\r\n      background-color: #143f46;\r\n    }\r\n  }\r\n}\r\n\r\n.popup__body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: self-start;\r\n}\r\n\r\n.popup__publish-year {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  color: $senary-color;\r\n  margin-bottom: 10px;\r\n  align-self: flex-start;\r\n}\r\n\r\n.popup__comments-title {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  color: $senary-color;\r\n  margin-bottom: 10px;\r\n  align-self: start;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.popup__comments {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.popup__comment {\r\n  margin-bottom: 10px;\r\n  font-size: 1.2rem;\r\n  border-radius: 5px;\r\n  border: 1px solid $quinary-color;\r\n  box-sizing: border-box;\r\n  color: $quinary-color;\r\n  padding-left: 10px;\r\n  background-color: $secondary-color;\r\n}\r\n\r\n.popup__comment:hover {\r\n  outline: none;\r\n  border-color: $quinary-color;\r\n  box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\r\n}\r\n\r\nspan {\r\n  font-weight: bold;\r\n  color: $quaternary-color;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.popup__new-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.popup__new-comment-username {\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid gray;\r\n  margin-bottom: 10px;\r\n  font-size: 0.9rem;\r\n  box-sizing: border-box;\r\n  align-self: flex-start;\r\n\r\n  &:focus {\r\n    outline: none;\r\n    border-color: #007bff;\r\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\r\n  }\r\n}\r\n\r\n.popup__new-comment-textarea {\r\n  width: 100%;\r\n  height: 60px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid gray;\r\n  resize: none;\r\n  margin-bottom: 10px;\r\n  font-size: 0.9rem;\r\n  box-sizing: border-box;\r\n  align-self: flex-start;\r\n\r\n  &:focus {\r\n    outline: none;\r\n    border-color: $quinary-color;\r\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\r\n  }\r\n}\r\n\r\n.popup__new-comment-button {\r\n  background-color: $senary-color;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 5px 20px;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    background-color: $quinary-color;\r\n    color: $secondary-color;\r\n  }\r\n}\r\n\r\n.popup__title {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  margin: 20px;\r\n  color: $quaternary-color;\r\n}\r\n\r\n.popup__cover-image {\r\n  width: 400px;\r\n  height: 400px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-radius: 10px;\r\n  margin-bottom: 20px;\r\n  align-self: center;\r\n}\r\n\r\nfooter {\r\n  background-color: $secondary-color;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  opacity: 0.8;\r\n}\r\n\r\n.footer-cards {\r\n  width: 100%;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 3px;\r\n  background-color: rgb(7, 2, 13);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  width: 10px;\r\n  background-color: gold;\r\n  border-radius: 30px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _modules_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view.js */ "./src/modules/view.js");




(0,_modules_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// add the logo to the navbar
const logo = document.createElement('img');
logo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
logo.alt = 'logo';
logo.classList.add('logoimg');
document.querySelector('.logo').appendChild(logo);


/***/ }),

/***/ "./src/modules/bookCount.js":
/*!**********************************!*\
  !*** ./src/modules/bookCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bookCount = (count) => {
  const counter = document.getElementById('book-count');
  counter.innerHTML = `(${count})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookCount);


/***/ }),

/***/ "./src/modules/getBooks.js":
/*!*********************************!*\
  !*** ./src/modules/getBooks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const OPEN_LIBRARY_API_URL = 'https://openlibrary.org';

const fetchScienceFictionBooks = async () => {
  const response = await fetch(
    `${OPEN_LIBRARY_API_URL}/subjects/science_fiction.json?limit=18`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Science Fiction books data');
  }
  const data = await response.json();
  return data.works;
};

const formatBookData = (book) => {
  const bookData = {
    title: book.title,
    coverImageUrl: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
    publishYear: book.first_publish_year,
  };
  return bookData;
};

const getBooks = async () => {
  const books = await fetchScienceFictionBooks();
  const formattedBooks = books.map((book) => formatBookData(book));
  return formattedBooks;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBooks);


/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/comments';

const getComments = async (itemId) => {
  itemId += 1;
  const response = await fetch(`${CAPSTONE_API_URL}?item_id=item${itemId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comments data');
  }
  const comments = await response.json();
  return comments;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   getLikesAfterPost: () => (/* binding */ getLikesAfterPost)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");


const getLikes = async () => {
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};

const getLikesAfterPost = async () => {
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};




/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
class Popup {
  constructor(index) {
    this.popup = document.createElement('div');
    this.popup.classList.add('popup');
    this.popup.innerHTML = `
        <div class="popup__content">
            <div class="popup__header">
            <h3 class="popup__title"></h3>
            <button type="button" class="close popup__close " aria-label="Close">
                &times;</button>
            </div>
            <div class="popup__body">
            <img class="popup__cover-image" src="" alt="">
            <p class="popup__publish-year"> This book was published on </p>
            <p class="popup__description"></p>
            <h4 class="popup__comments-title">Comments <div class="comment-count"> </div></h4>
            
            <ul class="popup__comments"></ul>
            <div class="popup__new-comment">
            <input type="text" class="popup__new-comment-username" required placeholder="Your name">
            <textarea class="popup__new-comment-textarea" required placeholder="Add a comment..."></textarea>
            <button class="popup__new-comment-button btn" type="submit">Comment</button>
            </div>
            </div>
        </div>
        `;
        // get book index from the popup
    this.index = index;
    this.titleElement = this.popup.querySelector('.popup__title');
    this.coverImageElement = this.popup.querySelector('.popup__cover-image');
    this.commentsList = this.popup.querySelector('.popup__comments');
    this.popup.querySelector('.popup__close').addEventListener('click', () => {
      this.closeCommentsPopup();
    });
    this.popup.querySelector('.popup__new-comment-button').addEventListener('click', () => {
      this.addComment(this.index);
    });
  }

  // show the popup for a specific book
  showPopup(book) {
    this.titleElement.textContent = book.title;
    this.coverImageElement.src = book.coverImageUrl;
    this.coverImageElement.alt = book.title;
    this.popup.querySelector('.popup__publish-year').textContent = `This book was published on ${book.publishYear}`;
    this.popup.querySelector('.popup__description').textContent = book.description;
    document.body.appendChild(this.popup);
  }

  // dsplay the comments for a specific book
  displayComments(comments) {
    this.commentsList.innerHTML = '';
    comments.forEach((comment) => {
      const commentElement = document.createElement('li');
      commentElement.classList.add('popup__comment');
      commentElement.innerHTML = `<span>${comment.username}</span>: ${comment.comment}`;
      this.commentsList.appendChild(commentElement);
    });
    this.popup.querySelector('.comment-count').textContent = `...(${comments.length})`;
  }

  // close the popup
  closeCommentsPopup() {
    this.popup.remove();
  }

  // add a comment to the popup with username that swhod be entered by the user
   addComment(index) {
    const comment = document.querySelector('.popup__new-comment-textarea').value;
    const username = document.querySelector('.popup__new-comment-username').value;
    // check if the user entered a comment and a username
    if (!comment || !username) {
      return;
    }
    const commentElement = document.createElement('li');
    commentElement.classList.add('popup__comment');
    commentElement.innerHTML = `<span>${username}</span>: ${comment}`;
    this.popup.querySelector('.popup__comments').appendChild(commentElement);
    document.querySelector('.popup__new-comment-textarea').value = '';
    document.querySelector('.popup__new-comment-username').value = '';

    // post the comment to the API
    const commentData = {
        item_id: `item${index +1}`,
        username :username,
        comment : comment,
    };
    const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/comments';
    fetch(CAPSTONE_API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(commentData),
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      });

    // update the comment count
    const commentCount = this.popup.querySelector('.comment-count');
    const count = parseInt(commentCount.textContent.match(/\d+/)[0], 10);
    commentCount.textContent = `...(${count + 1})`;

    }
}




/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");


const postLikes = async (id) => {
  try {
    await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id.toString(),
      }),
    });
  } catch (error) {
    throw new Error('Failed to post Likes data');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);


/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/likes';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CAPSTONE_API_URL);


/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getBooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBooks.js */ "./src/modules/getBooks.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ "./src/modules/postLikes.js");
/* harmony import */ var _bookCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookCount.js */ "./src/modules/bookCount.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.js */ "./src/modules/popup.js");
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");







const bookGrid = document.querySelector('.book-grid');
bookGrid.innerHTML = '';

const display = async () => {
  try {
    const books = await (0,_getBooks_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_bookCount_js__WEBPACK_IMPORTED_MODULE_3__["default"])(books.length);
    const getTheLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
    books.forEach((book, index) => {
      const id = getTheLikes.findIndex((like) => +like.item_id === index);
      const likes = id >= 0 ? getTheLikes[id].likes : 0;

      const thumbnail = document.createElement('img');
      thumbnail.classList.add('thumbnail');
      thumbnail.src = book.coverImageUrl;

      const bookTime = document.createElement('div');
      bookTime.classList.add('book-time');
      bookTime.textContent = `Published in: ${book.publishYear}`;

      const thumbnailRow = document.createElement('div');
      thumbnailRow.classList.add('thumbnail-row');
      thumbnailRow.append(thumbnail, bookTime);

      const bookTitle = document.createElement('p');
      bookTitle.classList.add('book-title');
      bookTitle.textContent = book.title;

      const bookLike = document.createElement('p');
      bookLike.classList.add('book-like');
      bookLike.textContent = `❤ ${likes} Likes`;
      bookLike.addEventListener('click', async () => {
        if ((0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id)) {
          const getPostedLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikesAfterPost)();
          if (getPostedLikes) {
            const updatedLikes = getPostedLikes[id].likes;
            bookLike.textContent = `❤ ${updatedLikes} Likes`;
          }
        }
      });

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');
      bookInfo.append(bookTitle, bookLike);

      const bookInfoGrid = document.createElement('div');
      bookInfoGrid.classList.add('book-info-grid');
      bookInfoGrid.append(bookInfo);

      const bookPreview = document.createElement('div');
      bookPreview.classList.add('book-preview');
      bookPreview.append(thumbnailRow, bookInfoGrid);

      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-button');
      commentButton.textContent = 'Add Comment';
      commentButton.addEventListener('click', () => {
        // show comment popup for this book
        const popup = new _popup_js__WEBPACK_IMPORTED_MODULE_4__["default"](index);
        popup.showPopup(book);
        // get comments for this book and display them in the popup
        (0,_getComments_js__WEBPACK_IMPORTED_MODULE_5__["default"])(index).then((comments) => {
          popup.displayComments(comments);
        });
        // add event listener to the popup's form
        const popupForm = document.querySelector('.popup__new-comment-button');
        popupForm.addEventListener('submit', (e) => {
          e.preventDefault();
          popup.addComment(index);
        }
        );
      });
      bookPreview.appendChild(commentButton);

      bookGrid.appendChild(bookPreview);
    });
  } catch (error) {
    bookGrid.innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBUTtBQUNoQyxJQUFJLHlEQUFTO0FBQ2IsOEJBQThCLHNEQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGlCQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCLHVDQUF1QywrREFBaUI7QUFDeEQ7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFLO0FBQy9CO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0oscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Jvb2tDb3VudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZ2V0Qm9va3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2dldENvbW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9nZXRMaWtlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Bvc3RMaWtlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JiODlhO1xcbiAgYm94LXNoYWRvdzogIzJiMWMyZiAwIDAgMTBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGNvbG9yOiAjMmE2OTVlOyB9XFxuXFxuLnByb2ZpbGUtcGljdHVyZSB7XFxuICB3aWR0aDogMzZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4udGh1bWJuYWlsLXJvdyB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogNDIwcHg7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcblxcbi5ib29rLXN0YXRzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNjA2MDYwOyB9XFxuXFxuLmJvb2stcHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4udGh1bWJuYWlsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG4uYm9vay10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogOHB4O1xcbiAgbGVmdDogNXB4OyB9XFxuXFxuLmJvb2stbGlrZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvdHRvbTogOHB4O1xcbiAgbWluLXdpZHRoOiA5MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuI2Jvb2stY291bnQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi5ib29rLWluZm8ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmJvb2stdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmJvb2stYXV0aG9yIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGNvbG9yOiAjNjA2MDYwOyB9XFxuXFxuLmJvb2stZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtZ2FwOiA1MHB4O1xcbiAgcGFkZGluZzogNTBweDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIC5ib29rLWdyaWQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NTFweCkgYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XFxuICAgIC5ib29rLWdyaWQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5ib29rLWdyaWQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IH0gfVxcblxcbi5wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfVxcblxcbi5wb3B1cF9fY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JiODlhO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuXFxuLnBvcHVwX19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAucG9wdXBfX2hlYWRlciAucG9wdXBfX2Nsb3NlIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMxNDNmNDY7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAgIC5wb3B1cF9faGVhZGVyIC5wb3B1cF9fY2xvc2U6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZjQ2OyB9XFxuXFxuLnBvcHVwX19ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7IH1cXG5cXG4ucG9wdXBfX3B1Ymxpc2gteWVhciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMyYjFjMmY7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcblxcbi5wb3B1cF9fY29tbWVudHMtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMmIxYzJmO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4ucG9wdXBfX2NvbW1lbnRzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLnBvcHVwX19jb21tZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNDNmNDY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMxNDNmNDY7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JiODlhOyB9XFxuXFxuLnBvcHVwX19jb21tZW50OmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6ICMxNDNmNDY7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7IH1cXG5cXG5zcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMyYTY5NWU7XFxuICBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbi5wb3B1cF9fbmV3LWNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbi5wb3B1cF9fbmV3LWNvbW1lbnQtdXNlcm5hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuICAucG9wdXBfX25ldy1jb21tZW50LXVzZXJuYW1lOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7IH1cXG5cXG4ucG9wdXBfX25ldy1jb21tZW50LXRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICByZXNpemU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcbiAgLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzE0M2Y0NjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpOyB9XFxuXFxuLnBvcHVwX19uZXctY29tbWVudC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMWMyZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG4gIC5wb3B1cF9fbmV3LWNvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0M2Y0NjtcXG4gICAgY29sb3I6ICNjYmI4OWE7IH1cXG5cXG4ucG9wdXBfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDIwcHg7XFxuICBjb2xvcjogIzJhNjk1ZTsgfVxcblxcbi5wb3B1cF9fY292ZXItaW1hZ2Uge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjg5YTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC44OyB9XFxuXFxuLmZvb3Rlci1jYXJkcyB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzAyMGQ7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNFLHlEQUE2QztFQUM3QyxtREFMK0MsRUFBQTs7QUFRakQ7RUFDRSx5QkFkdUI7RUFldkIsNEJBQWtDO0VBQ2xDLFlBQVk7RUFDWixjQWZ3QixFQUFBOztBQWtCMUI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxlQUFlO0VBQ2YsY0FBc0IsRUFBQTs7QUFHeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQTVDb0I7RUE2Q3BCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGFBQWEsRUFBQTtFQUViO0lBTkY7TUFPSSwwQkFBMEIsRUFBQSxFQVU3QjtFQVBDO0lBVkY7TUFXSSw4QkFBOEIsRUFBQSxFQU1qQztFQUhDO0lBZEY7TUFlSSxrQ0FBa0MsRUFBQSxFQUVyQzs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx5QkE5SXVCO0VBK0l2QixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTtFQUpyQjtJQU9JLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixjQTdKbUI7SUE4Sm5CLG9CQUFvQixFQUFBO0lBWnhCO01BZU0sWUFBWTtNQUNaLHlCQUF5QixFQUFBOztBQUsvQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQS9Lb0I7RUFnTHBCLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBdkxvQjtFQXdMcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBN01xQjtFQThNckIsc0JBQXNCO0VBQ3RCLGNBL01xQjtFQWdOckIsa0JBQWtCO0VBQ2xCLHlCQXBOdUIsRUFBQTs7QUF1TnpCO0VBQ0UsYUFBYTtFQUNiLHFCQXROcUI7RUF1TnJCLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFLGlCQUFpQjtFQUNqQixjQTdOd0I7RUE4TnhCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7RUFUeEI7SUFZSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDBDQUEwQyxFQUFBOztBQUk5QztFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBO0VBVnhCO0lBYUksYUFBYTtJQUNiLHFCQXZRbUI7SUF3UW5CLDBDQUEwQyxFQUFBOztBQUk5QztFQUNFLHlCQTVRb0I7RUE2UXBCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7RUFQdEI7SUFVSSx5QkF0Um1CO0lBdVJuQixjQTFScUIsRUFBQTs7QUE4UnpCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FoU3dCLEVBQUE7O0FBbVMxQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx5QkFqVHVCO0VBa1R2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFVO0VBQ1YseUJBQStCLEVBQUE7O0FBR2pDO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkcHJpbWFyeS1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICNjYmI4OWE7XFxyXFxuJHRlcnRpYXJ5LWNvbG9yOiAjOGQ4MTcxO1xcclxcbiRxdWF0ZXJuYXJ5LWNvbG9yOiAjMmE2OTVlO1xcclxcbiRxdWluYXJ5LWNvbG9yOiAjMTQzZjQ2O1xcclxcbiRzZW5hcnktY29sb3I6ICMyYjFjMmY7XFxyXFxuJGZhbWlsaWVzOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4kdGh1bWJuYWlsLXdpZHRoOiAxMDAlO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgZm9udC1mYW1pbHk6ICRmYW1pbGllcztcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAkc2VuYXJ5LWNvbG9yIDAgMCAxMHB4O1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgY29sb3I6ICRxdWF0ZXJuYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG4gIHdpZHRoOiAzNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbC1yb3cge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXN0YXRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXByZXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsIHtcXHJcXG4gIHdpZHRoOiAkdGh1bWJuYWlsLXdpZHRoO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXRpbWUge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiA4cHg7XFxyXFxuICBsZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWxpa2Uge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3R0b206IDhweDtcXHJcXG4gIG1pbi13aWR0aDogOTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Jvb2stY291bnQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2staW5mbyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stYXV0aG9yIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG4gIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLWdhcDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDUwcHg7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzUxcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gIC5wb3B1cF9fY2xvc2Uge1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogJHF1aW5hcnktY29sb3I7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0M2Y0NjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2JvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19wdWJsaXNoLXllYXIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29tbWVudHMtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29tbWVudHMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29tbWVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkcXVpbmFyeS1jb2xvcjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogJHF1aW5hcnktY29sb3I7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbW1lbnQ6aG92ZXIge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogJHF1aW5hcnktY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogJHF1YXRlcm5hcnktY29sb3I7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19uZXctY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX25ldy1jb21tZW50LXVzZXJuYW1lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAkcXVpbmFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX25ldy1jb21tZW50LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVpbmFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb3Zlci1pbWFnZSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jYXJkcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDIsIDEzKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBpbWcgZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xyXG5pbXBvcnQgZ2V0Qm9va3MgZnJvbSAnLi9tb2R1bGVzL3ZpZXcuanMnO1xyXG5cclxuZ2V0Qm9va3MoKTtcclxuXHJcbi8vIGFkZCB0aGUgbG9nbyB0byB0aGUgbmF2YmFyXHJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxubG9nby5zcmMgPSBpbWc7XHJcbmxvZ28uYWx0ID0gJ2xvZ28nO1xyXG5sb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ29pbWcnKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKS5hcHBlbmRDaGlsZChsb2dvKTtcclxuIiwiY29uc3QgYm9va0NvdW50ID0gKGNvdW50KSA9PiB7XHJcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLWNvdW50Jyk7XHJcbiAgY291bnRlci5pbm5lckhUTUwgPSBgKCR7Y291bnR9KWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29rQ291bnQ7XHJcbiIsImNvbnN0IE9QRU5fTElCUkFSWV9BUElfVVJMID0gJ2h0dHBzOi8vb3BlbmxpYnJhcnkub3JnJztcblxuY29uc3QgZmV0Y2hTY2llbmNlRmljdGlvbkJvb2tzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke09QRU5fTElCUkFSWV9BUElfVVJMfS9zdWJqZWN0cy9zY2llbmNlX2ZpY3Rpb24uanNvbj9saW1pdD0xOGAsXG4gICk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBTY2llbmNlIEZpY3Rpb24gYm9va3MgZGF0YScpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLndvcmtzO1xufTtcblxuY29uc3QgZm9ybWF0Qm9va0RhdGEgPSAoYm9vaykgPT4ge1xuICBjb25zdCBib29rRGF0YSA9IHtcbiAgICB0aXRsZTogYm9vay50aXRsZSxcbiAgICBjb3ZlckltYWdlVXJsOiBgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtib29rLmNvdmVyX2lkfS1MLmpwZ2AsXG4gICAgcHVibGlzaFllYXI6IGJvb2suZmlyc3RfcHVibGlzaF95ZWFyLFxuICB9O1xuICByZXR1cm4gYm9va0RhdGE7XG59O1xuXG5jb25zdCBnZXRCb29rcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYm9va3MgPSBhd2FpdCBmZXRjaFNjaWVuY2VGaWN0aW9uQm9va3MoKTtcbiAgY29uc3QgZm9ybWF0dGVkQm9va3MgPSBib29rcy5tYXAoKGJvb2spID0+IGZvcm1hdEJvb2tEYXRhKGJvb2spKTtcbiAgcmV0dXJuIGZvcm1hdHRlZEJvb2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Qm9va3M7XG4iLCJjb25zdCBDQVBTVE9ORV9BUElfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NKQmNsWGhHM3hzVkVBdXluZ1ZBL2NvbW1lbnRzJztcclxuXHJcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGl0ZW1JZCArPSAxO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Q0FQU1RPTkVfQVBJX1VSTH0/aXRlbV9pZD1pdGVtJHtpdGVtSWR9YCk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29tbWVudHMgZGF0YScpO1xyXG4gIH1cclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gY29tbWVudHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50czsiLCJpbXBvcnQgQ0FQU1RPTkVfQVBJX1VSTCBmcm9tICcuL3VybC5qcyc7XHJcblxyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKENBUFNUT05FX0FQSV9VUkwpO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExpa2VzIGRhdGEnKTtcclxuICB9XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMaWtlc0FmdGVyUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKENBUFNUT05FX0FQSV9VUkwpO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExpa2VzIGRhdGEnKTtcclxuICB9XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRMaWtlcywgZ2V0TGlrZXNBZnRlclBvc3QgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKGluZGV4KSB7XHJcbiAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLnBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XHJcbiAgICB0aGlzLnBvcHVwLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+PC9oMz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBwb3B1cF9fY2xvc2UgXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAmdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2JvZHlcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwX19jb3Zlci1pbWFnZVwiIHNyYz1cIlwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwX19wdWJsaXNoLXllYXJcIj4gVGhpcyBib29rIHdhcyBwdWJsaXNoZWQgb24gPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwX19kZXNjcmlwdGlvblwiPjwvcD5cclxuICAgICAgICAgICAgPGg0IGNsYXNzPVwicG9wdXBfX2NvbW1lbnRzLXRpdGxlXCI+Q29tbWVudHMgPGRpdiBjbGFzcz1cImNvbW1lbnQtY291bnRcIj4gPC9kaXY+PC9oND5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInBvcHVwX19jb21tZW50c1wiPjwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cF9fbmV3LWNvbW1lbnRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJwb3B1cF9fbmV3LWNvbW1lbnQtdXNlcm5hbWVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJwb3B1cF9fbmV3LWNvbW1lbnQtdGV4dGFyZWFcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkFkZCBhIGNvbW1lbnQuLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicG9wdXBfX25ldy1jb21tZW50LWJ1dHRvbiBidG5cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAvLyBnZXQgYm9vayBpbmRleCBmcm9tIHRoZSBwb3B1cFxyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy50aXRsZUVsZW1lbnQgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGl0bGUnKTtcclxuICAgIHRoaXMuY292ZXJJbWFnZUVsZW1lbnQgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY292ZXItaW1hZ2UnKTtcclxuICAgIHRoaXMuY29tbWVudHNMaXN0ID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NvbW1lbnRzJyk7XHJcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZUNvbW1lbnRzUG9wdXAoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmFkZENvbW1lbnQodGhpcy5pbmRleCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHNob3cgdGhlIHBvcHVwIGZvciBhIHNwZWNpZmljIGJvb2tcclxuICBzaG93UG9wdXAoYm9vaykge1xyXG4gICAgdGhpcy50aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBib29rLnRpdGxlO1xyXG4gICAgdGhpcy5jb3ZlckltYWdlRWxlbWVudC5zcmMgPSBib29rLmNvdmVySW1hZ2VVcmw7XHJcbiAgICB0aGlzLmNvdmVySW1hZ2VFbGVtZW50LmFsdCA9IGJvb2sudGl0bGU7XHJcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcHVibGlzaC15ZWFyJykudGV4dENvbnRlbnQgPSBgVGhpcyBib29rIHdhcyBwdWJsaXNoZWQgb24gJHtib29rLnB1Ymxpc2hZZWFyfWA7XHJcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IGJvb2suZGVzY3JpcHRpb247XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucG9wdXApO1xyXG4gIH1cclxuXHJcbiAgLy8gZHNwbGF5IHRoZSBjb21tZW50cyBmb3IgYSBzcGVjaWZpYyBib29rXHJcbiAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzKSB7XHJcbiAgICB0aGlzLmNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBjb21tZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9fY29tbWVudCcpO1xyXG4gICAgICBjb21tZW50RWxlbWVudC5pbm5lckhUTUwgPSBgPHNwYW4+JHtjb21tZW50LnVzZXJuYW1lfTwvc3Bhbj46ICR7Y29tbWVudC5jb21tZW50fWA7XHJcbiAgICAgIHRoaXMuY29tbWVudHNMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudCcpLnRleHRDb250ZW50ID0gYC4uLigke2NvbW1lbnRzLmxlbmd0aH0pYDtcclxuICB9XHJcblxyXG4gIC8vIGNsb3NlIHRoZSBwb3B1cFxyXG4gIGNsb3NlQ29tbWVudHNQb3B1cCgpIHtcclxuICAgIHRoaXMucG9wdXAucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgYSBjb21tZW50IHRvIHRoZSBwb3B1cCB3aXRoIHVzZXJuYW1lIHRoYXQgc3dob2QgYmUgZW50ZXJlZCBieSB0aGUgdXNlclxyXG4gICBhZGRDb21tZW50KGluZGV4KSB7XHJcbiAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYScpLnZhbHVlO1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LXVzZXJuYW1lJykudmFsdWU7XHJcbiAgICAvLyBjaGVjayBpZiB0aGUgdXNlciBlbnRlcmVkIGEgY29tbWVudCBhbmQgYSB1c2VybmFtZVxyXG4gICAgaWYgKCFjb21tZW50IHx8ICF1c2VybmFtZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb21tZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9fY29tbWVudCcpO1xyXG4gICAgY29tbWVudEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuPiR7dXNlcm5hbWV9PC9zcGFuPjogJHtjb21tZW50fWA7XHJcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29tbWVudHMnKS5hcHBlbmRDaGlsZChjb21tZW50RWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LXRleHRhcmVhJykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fbmV3LWNvbW1lbnQtdXNlcm5hbWUnKS52YWx1ZSA9ICcnO1xyXG5cclxuICAgIC8vIHBvc3QgdGhlIGNvbW1lbnQgdG8gdGhlIEFQSVxyXG4gICAgY29uc3QgY29tbWVudERhdGEgPSB7XHJcbiAgICAgICAgaXRlbV9pZDogYGl0ZW0ke2luZGV4ICsxfWAsXHJcbiAgICAgICAgdXNlcm5hbWUgOnVzZXJuYW1lLFxyXG4gICAgICAgIGNvbW1lbnQgOiBjb21tZW50LFxyXG4gICAgfTtcclxuICAgIGNvbnN0IENBUFNUT05FX0FQSV9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ0pCY2xYaEczeHNWRUF1eW5nVkEvY29tbWVudHMnO1xyXG4gICAgZmV0Y2goQ0FQU1RPTkVfQVBJX1VSTCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnREYXRhKSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSBjb21tZW50IGNvdW50XHJcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50Jyk7XHJcbiAgICBjb25zdCBjb3VudCA9IHBhcnNlSW50KGNvbW1lbnRDb3VudC50ZXh0Q29udGVudC5tYXRjaCgvXFxkKy8pWzBdLCAxMCk7XHJcbiAgICBjb21tZW50Q291bnQudGV4dENvbnRlbnQgPSBgLi4uKCR7Y291bnQgKyAxfSlgO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBDQVBTVE9ORV9BUElfVVJMIGZyb20gJy4vdXJsLmpzJztcclxuXHJcbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBmZXRjaChDQVBTVE9ORV9BUElfVVJMLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IGlkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHBvc3QgTGlrZXMgZGF0YScpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RMaWtlcztcclxuIiwiY29uc3QgQ0FQU1RPTkVfQVBJX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9DSkJjbFhoRzN4c1ZFQXV5bmdWQS9saWtlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDQVBTVE9ORV9BUElfVVJMO1xyXG4iLCJpbXBvcnQgZ2V0Qm9va3MgZnJvbSAnLi9nZXRCb29rcy5qcyc7XHJcbmltcG9ydCB7IGdldExpa2VzLCBnZXRMaWtlc0FmdGVyUG9zdCB9IGZyb20gJy4vZ2V0TGlrZXMuanMnO1xyXG5pbXBvcnQgcG9zdExpa2VzIGZyb20gJy4vcG9zdExpa2VzLmpzJztcclxuaW1wb3J0IGJvb2tDb3VudCBmcm9tICcuL2Jvb2tDb3VudC5qcyc7XHJcbmltcG9ydCBQb3B1cCBmcm9tICcuL3BvcHVwLmpzJztcclxuaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vZ2V0Q29tbWVudHMuanMnO1xyXG5cclxuY29uc3QgYm9va0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1ncmlkJyk7XHJcbmJvb2tHcmlkLmlubmVySFRNTCA9ICcnO1xyXG5cclxuY29uc3QgZGlzcGxheSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9va3MgPSBhd2FpdCBnZXRCb29rcygpO1xyXG4gICAgYm9va0NvdW50KGJvb2tzLmxlbmd0aCk7XHJcbiAgICBjb25zdCBnZXRUaGVMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgICBib29rcy5mb3JFYWNoKChib29rLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGdldFRoZUxpa2VzLmZpbmRJbmRleCgobGlrZSkgPT4gK2xpa2UuaXRlbV9pZCA9PT0gaW5kZXgpO1xyXG4gICAgICBjb25zdCBsaWtlcyA9IGlkID49IDAgPyBnZXRUaGVMaWtlc1tpZF0ubGlrZXMgOiAwO1xyXG5cclxuICAgICAgY29uc3QgdGh1bWJuYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCd0aHVtYm5haWwnKTtcclxuICAgICAgdGh1bWJuYWlsLnNyYyA9IGJvb2suY292ZXJJbWFnZVVybDtcclxuXHJcbiAgICAgIGNvbnN0IGJvb2tUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGJvb2tUaW1lLmNsYXNzTGlzdC5hZGQoJ2Jvb2stdGltZScpO1xyXG4gICAgICBib29rVGltZS50ZXh0Q29udGVudCA9IGBQdWJsaXNoZWQgaW46ICR7Ym9vay5wdWJsaXNoWWVhcn1gO1xyXG5cclxuICAgICAgY29uc3QgdGh1bWJuYWlsUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRodW1ibmFpbFJvdy5jbGFzc0xpc3QuYWRkKCd0aHVtYm5haWwtcm93Jyk7XHJcbiAgICAgIHRodW1ibmFpbFJvdy5hcHBlbmQodGh1bWJuYWlsLCBib29rVGltZSk7XHJcblxyXG4gICAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIGJvb2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdib29rLXRpdGxlJyk7XHJcbiAgICAgIGJvb2tUaXRsZS50ZXh0Q29udGVudCA9IGJvb2sudGl0bGU7XHJcblxyXG4gICAgICBjb25zdCBib29rTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgYm9va0xpa2UuY2xhc3NMaXN0LmFkZCgnYm9vay1saWtlJyk7XHJcbiAgICAgIGJvb2tMaWtlLnRleHRDb250ZW50ID0gYOKdpCAke2xpa2VzfSBMaWtlc2A7XHJcbiAgICAgIGJvb2tMaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChwb3N0TGlrZXMoaWQpKSB7XHJcbiAgICAgICAgICBjb25zdCBnZXRQb3N0ZWRMaWtlcyA9IGF3YWl0IGdldExpa2VzQWZ0ZXJQb3N0KCk7XHJcbiAgICAgICAgICBpZiAoZ2V0UG9zdGVkTGlrZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpa2VzID0gZ2V0UG9zdGVkTGlrZXNbaWRdLmxpa2VzO1xyXG4gICAgICAgICAgICBib29rTGlrZS50ZXh0Q29udGVudCA9IGDinaQgJHt1cGRhdGVkTGlrZXN9IExpa2VzYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgYm9va0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgYm9va0luZm8uY2xhc3NMaXN0LmFkZCgnYm9vay1pbmZvJyk7XHJcbiAgICAgIGJvb2tJbmZvLmFwcGVuZChib29rVGl0bGUsIGJvb2tMaWtlKTtcclxuXHJcbiAgICAgIGNvbnN0IGJvb2tJbmZvR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBib29rSW5mb0dyaWQuY2xhc3NMaXN0LmFkZCgnYm9vay1pbmZvLWdyaWQnKTtcclxuICAgICAgYm9va0luZm9HcmlkLmFwcGVuZChib29rSW5mbyk7XHJcblxyXG4gICAgICBjb25zdCBib29rUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBib29rUHJldmlldy5jbGFzc0xpc3QuYWRkKCdib29rLXByZXZpZXcnKTtcclxuICAgICAgYm9va1ByZXZpZXcuYXBwZW5kKHRodW1ibmFpbFJvdywgYm9va0luZm9HcmlkKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgY29tbWVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWJ1dHRvbicpO1xyXG4gICAgICBjb21tZW50QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBDb21tZW50JztcclxuICAgICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyBzaG93IGNvbW1lbnQgcG9wdXAgZm9yIHRoaXMgYm9va1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKGluZGV4KTtcclxuICAgICAgICBwb3B1cC5zaG93UG9wdXAoYm9vayk7XHJcbiAgICAgICAgLy8gZ2V0IGNvbW1lbnRzIGZvciB0aGlzIGJvb2sgYW5kIGRpc3BsYXkgdGhlbSBpbiB0aGUgcG9wdXBcclxuICAgICAgICBnZXRDb21tZW50cyhpbmRleCkudGhlbigoY29tbWVudHMpID0+IHtcclxuICAgICAgICAgIHBvcHVwLmRpc3BsYXlDb21tZW50cyhjb21tZW50cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwb3B1cCdzIGZvcm1cclxuICAgICAgICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LWJ1dHRvbicpO1xyXG4gICAgICAgIHBvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcG9wdXAuYWRkQ29tbWVudChpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBib29rUHJldmlldy5hcHBlbmRDaGlsZChjb21tZW50QnV0dG9uKTtcclxuXHJcbiAgICAgIGJvb2tHcmlkLmFwcGVuZENoaWxkKGJvb2tQcmV2aWV3KTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBib29rR3JpZC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+JHtlcnJvci5tZXNzYWdlfTwvcD5gO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==