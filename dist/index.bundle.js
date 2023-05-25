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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\nnav {\n  background-color: #cbb89a;\n  box-shadow: #2b1c2f 0 0 10px;\n  opacity: 0.8;\n  color: #2a695e; }\n\n.profile-picture {\n  width: 36px;\n  border-radius: 50px; }\n\n.thumbnail-row {\n  margin-bottom: 8px;\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n  max-height: 420px;\n  text-overflow: ellipsis; }\n\n.book-stats {\n  font-size: 12px;\n  color: #606060; }\n\n.book-preview {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden; }\n\n.thumbnail {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.book-time {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 4px;\n  border-radius: 2px;\n  background-color: black;\n  color: white;\n  position: absolute;\n  bottom: 8px;\n  left: 5px; }\n\n.book-like {\n  font-size: 14px;\n  font-weight: 700;\n  padding: 6px;\n  border-radius: 4px;\n  background-color: gold;\n  color: white;\n  bottom: 8px;\n  min-width: 90px;\n  cursor: pointer; }\n\n#book-count {\n  font-weight: bolder; }\n\n.book-info {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.book-title {\n  margin-top: 0;\n  font-size: 16px;\n  font-weight: bold; }\n\n.book-author {\n  margin-top: 5px;\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: #606060; }\n\n.book-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 50px;\n  padding: 50px; }\n  @media (max-width: 750px) {\n    .book-grid {\n      grid-template-columns: 1fr; } }\n  @media (min-width: 751px) and (max-width: 999px) {\n    .book-grid {\n      grid-template-columns: 1fr 1fr; } }\n  @media (min-width: 1000px) {\n    .book-grid {\n      grid-template-columns: 1fr 1fr 1fr; } }\n\n.popup {\n  position: fixed;\n  padding-top: 130px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  width: 100%;\n  height: 800px;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-y: auto;\n  scroll-behavior: smooth; }\n\n.popup__content {\n  background-color: #cbb89a;\n  padding: 20px;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-top: 30px; }\n\n.popup__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px; }\n  .popup__header .popup__close {\n    font-size: 3.5rem;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    color: #143f46;\n    transition: all 0.2s; }\n    .popup__header .popup__close:hover {\n      color: black;\n      background-color: #143f46; }\n\n.popup__body {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start; }\n\n.popup__publish-year {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #2b1c2f;\n  margin-bottom: 10px;\n  align-self: flex-start; }\n\n.popup__comments-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #2b1c2f;\n  margin-bottom: 10px;\n  align-self: start;\n  display: flex;\n  flex-direction: row; }\n\n.popup__comments {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 200px;\n  overflow-y: auto;\n  width: 100%;\n  align-self: flex-start; }\n\n.popup__comment {\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n  border-radius: 5px;\n  border: 1px solid #143f46;\n  box-sizing: border-box;\n  color: #143f46;\n  padding-left: 10px;\n  background-color: #cbb89a; }\n\n.popup__comment:hover {\n  outline: none;\n  border-color: #143f46;\n  box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\nspan {\n  font-weight: bold;\n  color: #2a695e;\n  font-size: 1.5rem; }\n\n.popup__new-comment {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px; }\n\n.popup__new-comment-username {\n  width: 100%;\n  height: 40px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start; }\n  .popup__new-comment-username:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\n.popup__new-comment-textarea {\n  width: 100%;\n  height: 60px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid gray;\n  resize: none;\n  margin-bottom: 10px;\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  align-self: flex-start; }\n  .popup__new-comment-textarea:focus {\n    outline: none;\n    border-color: #143f46;\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3); }\n\n.popup__new-comment-button {\n  background-color: #2b1c2f;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .popup__new-comment-button:hover {\n    background-color: #143f46;\n    color: #cbb89a; }\n\n.popup__title {\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin: 20px;\n  color: #2a695e; }\n\n.popup__cover-image {\n  width: 400px;\n  height: 400px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  align-self: center; }\n\nfooter {\n  background-color: #cbb89a;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  opacity: 0.8; }\n\n.footer-cards {\n  width: 100%; }\n\n::-webkit-scrollbar {\n  width: 3px;\n  background-color: #07020d; }\n\n::-webkit-scrollbar-thumb {\n  width: 10px;\n  background-color: gold;\n  border-radius: 30px; }\n\n.comment-button {\n  background-color: #2b1c2f;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 20px;\n  cursor: pointer;\n  transition: all 0.2s; }\n  .comment-button:hover {\n    background-color: #143f46;\n    color: #cbb89a; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-color: rgb(15, 15, 15);\r\n$secondary-color: #cbb89a;\r\n$tertiary-color: #8d8171;\r\n$quaternary-color: #2a695e;\r\n$quinary-color: #143f46;\r\n$senary-color: #2b1c2f;\r\n$families: 'Roboto', 'Helvetica Neue', sans-serif;\r\n$thumbnail-width: 100%;\r\n\r\nbody {\r\n  background-image: url('./img/background.jpg');\r\n  font-family: $families;\r\n}\r\n\r\nnav {\r\n  background-color: $secondary-color;\r\n  box-shadow: $senary-color 0 0 10px;\r\n  opacity: 0.8;\r\n  color: $quaternary-color;\r\n}\r\n\r\n.profile-picture {\r\n  width: 36px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.thumbnail-row {\r\n  margin-bottom: 8px;\r\n  position: relative;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  max-height: 420px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.book-stats {\r\n  font-size: 12px;\r\n  color: rgb(96, 96, 96);\r\n}\r\n\r\n.book-preview {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-color: white;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\n.thumbnail {\r\n  width: $thumbnail-width;\r\n  height: 100%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.book-time {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  padding: 4px;\r\n  border-radius: 2px;\r\n  background-color: black;\r\n  color: white;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  left: 5px;\r\n}\r\n\r\n.book-like {\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  padding: 6px;\r\n  border-radius: 4px;\r\n  background-color: gold;\r\n  color: white;\r\n  bottom: 8px;\r\n  min-width: 90px;\r\n  cursor: pointer;\r\n}\r\n\r\n#book-count {\r\n  font-weight: bolder;\r\n}\r\n\r\n.book-info {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.book-title {\r\n  margin-top: 0;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.book-author {\r\n  margin-top: 5px;\r\n  font-size: 14px;\r\n  margin-bottom: 4px;\r\n  color: rgb(96, 96, 96);\r\n}\r\n\r\n.book-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 50px;\r\n  padding: 50px;\r\n\r\n  @media (max-width: 750px) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  @media (min-width: 751px) and (max-width: 999px) {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  @media (min-width: 1000px) {\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  padding-top: 130px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 100;\r\n  width: 100%;\r\n  height: 800px;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow-y: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.popup__content {\r\n  background-color: $secondary-color;\r\n  padding: 20px;\r\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\r\n  border-radius: 10px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.popup__header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n\r\n  .popup__close {\r\n    font-size: 3.5rem;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: $quinary-color;\r\n    transition: all 0.2s;\r\n\r\n    &:hover {\r\n      color: black;\r\n      background-color: #143f46;\r\n    }\r\n  }\r\n}\r\n\r\n.popup__body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: self-start;\r\n}\r\n\r\n.popup__publish-year {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  color: $senary-color;\r\n  margin-bottom: 10px;\r\n  align-self: flex-start;\r\n}\r\n\r\n.popup__comments-title {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  color: $senary-color;\r\n  margin-bottom: 10px;\r\n  align-self: start;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.popup__comments {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.popup__comment {\r\n  margin-bottom: 10px;\r\n  font-size: 1.2rem;\r\n  border-radius: 5px;\r\n  border: 1px solid $quinary-color;\r\n  box-sizing: border-box;\r\n  color: $quinary-color;\r\n  padding-left: 10px;\r\n  background-color: $secondary-color;\r\n}\r\n\r\n.popup__comment:hover {\r\n  outline: none;\r\n  border-color: $quinary-color;\r\n  box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\r\n}\r\n\r\nspan {\r\n  font-weight: bold;\r\n  color: $quaternary-color;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.popup__new-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.popup__new-comment-username {\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid gray;\r\n  margin-bottom: 10px;\r\n  font-size: 0.9rem;\r\n  box-sizing: border-box;\r\n  align-self: flex-start;\r\n\r\n  &:focus {\r\n    outline: none;\r\n    border-color: #007bff;\r\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\r\n  }\r\n}\r\n\r\n.popup__new-comment-textarea {\r\n  width: 100%;\r\n  height: 60px;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  border: 1px solid gray;\r\n  resize: none;\r\n  margin-bottom: 10px;\r\n  font-size: 0.9rem;\r\n  box-sizing: border-box;\r\n  align-self: flex-start;\r\n\r\n  &:focus {\r\n    outline: none;\r\n    border-color: $quinary-color;\r\n    box-shadow: 0 0 3px rgba(0, 123, 255, 0.3);\r\n  }\r\n}\r\n\r\n.popup__new-comment-button {\r\n  background-color: $senary-color;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 5px 20px;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    background-color: $quinary-color;\r\n    color: $secondary-color;\r\n  }\r\n}\r\n\r\n.popup__title {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n  margin: 20px;\r\n  color: $quaternary-color;\r\n}\r\n\r\n.popup__cover-image {\r\n  width: 400px;\r\n  height: 400px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-radius: 10px;\r\n  margin-bottom: 20px;\r\n  align-self: center;\r\n}\r\n\r\nfooter {\r\n  background-color: $secondary-color;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  opacity: 0.8;\r\n}\r\n\r\n.footer-cards {\r\n  width: 100%;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 3px;\r\n  background-color: rgb(7, 2, 13);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  width: 10px;\r\n  background-color: gold;\r\n  border-radius: 30px;\r\n}\r\n\r\n.comment-button{\r\n  background-color: $senary-color;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 5px 20px;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    background-color: $quinary-color;\r\n    color: $secondary-color;\r\n  }\r\n}"],"sourceRoot":""}]);
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
      item_id: `item${index + 1}`,
      username,
      comment,
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
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ6Qjs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRks7QUFDdUI7QUFDckI7QUFDQTtBQUNSO0FBQ1k7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix3REFBUTtBQUNoQyxJQUFJLHlEQUFTO0FBQ2IsOEJBQThCLHNEQUFRO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxpQkFBaUI7O0FBRS9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0EsWUFBWSx5REFBUztBQUNyQix1Q0FBdUMsK0RBQWlCO0FBQ3hEO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFLO0FBQy9CO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixxREFBcUQsY0FBYztBQUNuRTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9ib29rQ291bnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2dldEJvb2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9nZXRDb21tZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wb3N0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjg5YTtcXG4gIGJveC1zaGFkb3c6ICMyYjFjMmYgMCAwIDEwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogIzJhNjk1ZTsgfVxcblxcbi5wcm9maWxlLXBpY3R1cmUge1xcbiAgd2lkdGg6IDM2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XFxuXFxuLnRodW1ibmFpbC1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG5cXG4uYm9vay1zdGF0cyB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzYwNjA2MDsgfVxcblxcbi5ib29rLXByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnRodW1ibmFpbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XFxuXFxuLmJvb2stdGltZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDhweDtcXG4gIGxlZnQ6IDVweDsgfVxcblxcbi5ib29rLWxpa2Uge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3R0b206IDhweDtcXG4gIG1pbi13aWR0aDogOTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbiNib29rLWNvdW50IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4uYm9vay1pbmZvIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5ib29rLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5ib29rLWF1dGhvciB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBjb2xvcjogIzYwNjA2MDsgfVxcblxcbi5ib29rLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDUwcHg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAuYm9vay1ncmlkIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzUxcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xcbiAgICAuYm9vay1ncmlkIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAuYm9vay1ncmlkIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyB9IH1cXG5cXG4ucG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1cXG5cXG4ucG9wdXBfX2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjg5YTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDsgfVxcblxcbi5wb3B1cF9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcbiAgLnBvcHVwX19oZWFkZXIgLnBvcHVwX19jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMTQzZjQ2O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxcbiAgICAucG9wdXBfX2hlYWRlciAucG9wdXBfX2Nsb3NlOmhvdmVyIHtcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0M2Y0NjsgfVxcblxcbi5wb3B1cF9fYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0OyB9XFxuXFxuLnBvcHVwX19wdWJsaXNoLXllYXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMmIxYzJmO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ucG9wdXBfX2NvbW1lbnRzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzJiMWMyZjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLnBvcHVwX19jb21tZW50cyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcblxcbi5wb3B1cF9fY29tbWVudCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTQzZjQ2O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMTQzZjQ2O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiYjg5YTsgfVxcblxcbi5wb3B1cF9fY29tbWVudDpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiAjMTQzZjQ2O1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpOyB9XFxuXFxuc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMmE2OTVlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07IH1cXG5cXG4ucG9wdXBfX25ldy1jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4ucG9wdXBfX25ldy1jb21tZW50LXVzZXJuYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcbiAgLnBvcHVwX19uZXctY29tbWVudC11c2VybmFtZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpOyB9XFxuXFxuLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgcmVzaXplOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG4gIC5wb3B1cF9fbmV3LWNvbW1lbnQtdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6ICMxNDNmNDY7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTsgfVxcblxcbi5wb3B1cF9fbmV3LWNvbW1lbnQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjFjMmY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAucG9wdXBfX25ldy1jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDNmNDY7XFxuICAgIGNvbG9yOiAjY2JiODlhOyB9XFxuXFxuLnBvcHVwX190aXRsZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgY29sb3I6ICMyYTY5NWU7IH1cXG5cXG4ucG9wdXBfX2NvdmVyLWltYWdlIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmI4OWE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuODsgfVxcblxcbi5mb290ZXItY2FyZHMge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwMjBkOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4OyB9XFxuXFxuLmNvbW1lbnQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjFjMmY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XFxuICAuY29tbWVudC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZjQ2O1xcbiAgICBjb2xvcjogI2NiYjg5YTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0UseURBQTZDO0VBQzdDLG1EQUwrQyxFQUFBOztBQVFqRDtFQUNFLHlCQWR1QjtFQWV2Qiw0QkFBa0M7RUFDbEMsWUFBWTtFQUNaLGNBZndCLEVBQUE7O0FBa0IxQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGVBQWU7RUFDZixjQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBNUNvQjtFQTZDcEIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTLEVBQUE7O0FBR1g7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsYUFBYSxFQUFBO0VBRWI7SUFORjtNQU9JLDBCQUEwQixFQUFBLEVBVTdCO0VBUEM7SUFWRjtNQVdJLDhCQUE4QixFQUFBLEVBTWpDO0VBSEM7SUFkRjtNQWVJLGtDQUFrQyxFQUFBLEVBRXJDOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLHlCQTlJdUI7RUErSXZCLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0VBSnJCO0lBT0ksaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBN0ptQjtJQThKbkIsb0JBQW9CLEVBQUE7SUFaeEI7TUFlTSxZQUFZO01BQ1oseUJBQXlCLEVBQUE7O0FBSy9CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBL0tvQjtFQWdMcEIsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0F2TG9CO0VBd0xwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkE3TXFCO0VBOE1yQixzQkFBc0I7RUFDdEIsY0EvTXFCO0VBZ05yQixrQkFBa0I7RUFDbEIseUJBcE51QixFQUFBOztBQXVOekI7RUFDRSxhQUFhO0VBQ2IscUJBdE5xQjtFQXVOckIsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBN053QjtFQThOeEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBQTtFQVR4QjtJQVlJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMENBQTBDLEVBQUE7O0FBSTlDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7RUFWeEI7SUFhSSxhQUFhO0lBQ2IscUJBdlFtQjtJQXdRbkIsMENBQTBDLEVBQUE7O0FBSTlDO0VBQ0UseUJBNVFvQjtFQTZRcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0IsRUFBQTtFQVB0QjtJQVVJLHlCQXRSbUI7SUF1Um5CLGNBMVJxQixFQUFBOztBQThSekI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQWhTd0IsRUFBQTs7QUFtUzFCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQWpUdUI7RUFrVHZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVU7RUFDVix5QkFBK0IsRUFBQTs7QUFHakM7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQXBVb0I7RUFxVXBCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7RUFQdEI7SUFVSSx5QkE5VW1CO0lBK1VuQixjQWxWcUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkcHJpbWFyeS1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcclxcbiRzZWNvbmRhcnktY29sb3I6ICNjYmI4OWE7XFxyXFxuJHRlcnRpYXJ5LWNvbG9yOiAjOGQ4MTcxO1xcclxcbiRxdWF0ZXJuYXJ5LWNvbG9yOiAjMmE2OTVlO1xcclxcbiRxdWluYXJ5LWNvbG9yOiAjMTQzZjQ2O1xcclxcbiRzZW5hcnktY29sb3I6ICMyYjFjMmY7XFxyXFxuJGZhbWlsaWVzOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4kdGh1bWJuYWlsLXdpZHRoOiAxMDAlO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgZm9udC1mYW1pbHk6ICRmYW1pbGllcztcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAkc2VuYXJ5LWNvbG9yIDAgMCAxMHB4O1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgY29sb3I6ICRxdWF0ZXJuYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWN0dXJlIHtcXHJcXG4gIHdpZHRoOiAzNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbC1yb3cge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXN0YXRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXByZXZpZXcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsIHtcXHJcXG4gIHdpZHRoOiAkdGh1bWJuYWlsLXdpZHRoO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXRpbWUge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiA4cHg7XFxyXFxuICBsZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWxpa2Uge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3R0b206IDhweDtcXHJcXG4gIG1pbi13aWR0aDogOTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Jvb2stY291bnQge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2staW5mbyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib29rLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvb2stYXV0aG9yIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG4gIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XFxyXFxufVxcclxcblxcclxcbi5ib29rLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLWdhcDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDUwcHg7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzUxcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gIC5wb3B1cF9fY2xvc2Uge1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogJHF1aW5hcnktY29sb3I7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0M2Y0NjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2JvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19wdWJsaXNoLXllYXIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29tbWVudHMtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29tbWVudHMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29tbWVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkcXVpbmFyeS1jb2xvcjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogJHF1aW5hcnktY29sb3I7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbW1lbnQ6aG92ZXIge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1jb2xvcjogJHF1aW5hcnktY29sb3I7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogJHF1YXRlcm5hcnktY29sb3I7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19uZXctY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX25ldy1jb21tZW50LXVzZXJuYW1lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19uZXctY29tbWVudC10ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAkcXVpbmFyeS1jb2xvcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX25ldy1jb21tZW50LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVpbmFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGNvbG9yOiAkcXVhdGVybmFyeS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb3Zlci1pbWFnZSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jYXJkcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDIsIDEzKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VuYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcXVpbmFyeS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBpbWcgZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xuaW1wb3J0IGdldEJvb2tzIGZyb20gJy4vbW9kdWxlcy92aWV3LmpzJztcblxuZ2V0Qm9va3MoKTtcblxuLy8gYWRkIHRoZSBsb2dvIHRvIHRoZSBuYXZiYXJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmxvZ28uc3JjID0gaW1nO1xubG9nby5hbHQgPSAnbG9nbyc7XG5sb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ29pbWcnKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJykuYXBwZW5kQ2hpbGQobG9nbyk7XG4iLCJjb25zdCBib29rQ291bnQgPSAoY291bnQpID0+IHtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLWNvdW50Jyk7XG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gYCgke2NvdW50fSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYm9va0NvdW50O1xuIiwiY29uc3QgT1BFTl9MSUJSQVJZX0FQSV9VUkwgPSAnaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcnO1xuXG5jb25zdCBmZXRjaFNjaWVuY2VGaWN0aW9uQm9va3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7T1BFTl9MSUJSQVJZX0FQSV9VUkx9L3N1YmplY3RzL3NjaWVuY2VfZmljdGlvbi5qc29uP2xpbWl0PTE4YCxcbiAgKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIFNjaWVuY2UgRmljdGlvbiBib29rcyBkYXRhJyk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEud29ya3M7XG59O1xuXG5jb25zdCBmb3JtYXRCb29rRGF0YSA9IChib29rKSA9PiB7XG4gIGNvbnN0IGJvb2tEYXRhID0ge1xuICAgIHRpdGxlOiBib29rLnRpdGxlLFxuICAgIGNvdmVySW1hZ2VVcmw6IGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2Jvb2suY292ZXJfaWR9LUwuanBnYCxcbiAgICBwdWJsaXNoWWVhcjogYm9vay5maXJzdF9wdWJsaXNoX3llYXIsXG4gIH07XG4gIHJldHVybiBib29rRGF0YTtcbn07XG5cbmNvbnN0IGdldEJvb2tzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBib29rcyA9IGF3YWl0IGZldGNoU2NpZW5jZUZpY3Rpb25Cb29rcygpO1xuICBjb25zdCBmb3JtYXR0ZWRCb29rcyA9IGJvb2tzLm1hcCgoYm9vaykgPT4gZm9ybWF0Qm9va0RhdGEoYm9vaykpO1xuICByZXR1cm4gZm9ybWF0dGVkQm9va3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRCb29rcztcbiIsImNvbnN0IENBUFNUT05FX0FQSV9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ0pCY2xYaEczeHNWRUF1eW5nVkEvY29tbWVudHMnO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgaXRlbUlkICs9IDE7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Q0FQU1RPTkVfQVBJX1VSTH0/aXRlbV9pZD1pdGVtJHtpdGVtSWR9YCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb21tZW50cyBkYXRhJyk7XG4gIH1cbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjb21tZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzOyIsImltcG9ydCBDQVBTVE9ORV9BUElfVVJMIGZyb20gJy4vdXJsLmpzJztcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQ0FQU1RPTkVfQVBJX1VSTCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBMaWtlcyBkYXRhJyk7XG4gIH1cbiAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzO1xufTtcblxuY29uc3QgZ2V0TGlrZXNBZnRlclBvc3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQ0FQU1RPTkVfQVBJX1VSTCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBMaWtlcyBkYXRhJyk7XG4gIH1cbiAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzO1xufTtcblxuZXhwb3J0IHsgZ2V0TGlrZXMsIGdldExpa2VzQWZ0ZXJQb3N0IH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKGluZGV4KSB7XG4gICAgdGhpcy5wb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICB0aGlzLnBvcHVwLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwX19jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+PC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcG9wdXBfX2Nsb3NlIFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwX19ib2R5XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9wdXBfX2NvdmVyLWltYWdlXCIgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwX19wdWJsaXNoLXllYXJcIj4gVGhpcyBib29rIHdhcyBwdWJsaXNoZWQgb24gPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cF9fZGVzY3JpcHRpb25cIj48L3A+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJwb3B1cF9fY29tbWVudHMtdGl0bGVcIj5Db21tZW50cyA8ZGl2IGNsYXNzPVwiY29tbWVudC1jb3VudFwiPiA8L2Rpdj48L2g0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJwb3B1cF9fY29tbWVudHNcIj48L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwX19uZXctY29tbWVudFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJwb3B1cF9fbmV3LWNvbW1lbnQtdXNlcm5hbWVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwicG9wdXBfX25ldy1jb21tZW50LXRleHRhcmVhXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJBZGQgYSBjb21tZW50Li4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3B1cF9fbmV3LWNvbW1lbnQtYnV0dG9uIGJ0blwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAvLyBnZXQgYm9vayBpbmRleCBmcm9tIHRoZSBwb3B1cFxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnRpdGxlRWxlbWVudCA9IHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX190aXRsZScpO1xuICAgIHRoaXMuY292ZXJJbWFnZUVsZW1lbnQgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY292ZXItaW1hZ2UnKTtcbiAgICB0aGlzLmNvbW1lbnRzTGlzdCA9IHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb21tZW50cycpO1xuICAgIHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZUNvbW1lbnRzUG9wdXAoKTtcbiAgICB9KTtcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fbmV3LWNvbW1lbnQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmFkZENvbW1lbnQodGhpcy5pbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBzaG93IHRoZSBwb3B1cCBmb3IgYSBzcGVjaWZpYyBib29rXG4gIHNob3dQb3B1cChib29rKSB7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBib29rLnRpdGxlO1xuICAgIHRoaXMuY292ZXJJbWFnZUVsZW1lbnQuc3JjID0gYm9vay5jb3ZlckltYWdlVXJsO1xuICAgIHRoaXMuY292ZXJJbWFnZUVsZW1lbnQuYWx0ID0gYm9vay50aXRsZTtcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcHVibGlzaC15ZWFyJykudGV4dENvbnRlbnQgPSBgVGhpcyBib29rIHdhcyBwdWJsaXNoZWQgb24gJHtib29rLnB1Ymxpc2hZZWFyfWA7XG4gICAgdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Rlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBib29rLmRlc2NyaXB0aW9uO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XG4gIH1cblxuICAvLyBkc3BsYXkgdGhlIGNvbW1lbnRzIGZvciBhIHNwZWNpZmljIGJvb2tcbiAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzKSB7XG4gICAgdGhpcy5jb21tZW50c0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29tbWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfX2NvbW1lbnQnKTtcbiAgICAgIGNvbW1lbnRFbGVtZW50LmlubmVySFRNTCA9IGA8c3Bhbj4ke2NvbW1lbnQudXNlcm5hbWV9PC9zcGFuPjogJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICAgIHRoaXMuY29tbWVudHNMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50JykudGV4dENvbnRlbnQgPSBgLi4uKCR7Y29tbWVudHMubGVuZ3RofSlgO1xuICB9XG5cbiAgLy8gY2xvc2UgdGhlIHBvcHVwXG4gIGNsb3NlQ29tbWVudHNQb3B1cCgpIHtcbiAgICB0aGlzLnBvcHVwLnJlbW92ZSgpO1xuICB9XG5cbiAgLy8gYWRkIGEgY29tbWVudCB0byB0aGUgcG9wdXAgd2l0aCB1c2VybmFtZSB0aGF0IHN3aG9kIGJlIGVudGVyZWQgYnkgdGhlIHVzZXJcbiAgYWRkQ29tbWVudChpbmRleCkge1xuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LXRleHRhcmVhJykudmFsdWU7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LXVzZXJuYW1lJykudmFsdWU7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHVzZXIgZW50ZXJlZCBhIGNvbW1lbnQgYW5kIGEgdXNlcm5hbWVcbiAgICBpZiAoIWNvbW1lbnQgfHwgIXVzZXJuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb21tZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9fY29tbWVudCcpO1xuICAgIGNvbW1lbnRFbGVtZW50LmlubmVySFRNTCA9IGA8c3Bhbj4ke3VzZXJuYW1lfTwvc3Bhbj46ICR7Y29tbWVudH1gO1xuICAgIHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb21tZW50cycpLmFwcGVuZENoaWxkKGNvbW1lbnRFbGVtZW50KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LXRleHRhcmVhJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX25ldy1jb21tZW50LXVzZXJuYW1lJykudmFsdWUgPSAnJztcblxuICAgIC8vIHBvc3QgdGhlIGNvbW1lbnQgdG8gdGhlIEFQSVxuICAgIGNvbnN0IGNvbW1lbnREYXRhID0ge1xuICAgICAgaXRlbV9pZDogYGl0ZW0ke2luZGV4ICsgMX1gLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH07XG4gICAgY29uc3QgQ0FQU1RPTkVfQVBJX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9DSkJjbFhoRzN4c1ZFQXV5bmdWQS9jb21tZW50cyc7XG4gICAgZmV0Y2goQ0FQU1RPTkVfQVBJX1VSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudERhdGEpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHRoZSBjb21tZW50IGNvdW50XG4gICAgY29uc3QgY29tbWVudENvdW50ID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudCcpO1xuICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQoY29tbWVudENvdW50LnRleHRDb250ZW50Lm1hdGNoKC9cXGQrLylbMF0sIDEwKTtcbiAgICBjb21tZW50Q291bnQudGV4dENvbnRlbnQgPSBgLi4uKCR7Y291bnQgKyAxfSlgO1xuICB9XG59XG4iLCJpbXBvcnQgQ0FQU1RPTkVfQVBJX1VSTCBmcm9tICcuL3VybC5qcyc7XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGZldGNoKENBUFNUT05FX0FQSV9VUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQudG9TdHJpbmcoKSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHBvc3QgTGlrZXMgZGF0YScpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0TGlrZXM7XG4iLCJjb25zdCBDQVBTVE9ORV9BUElfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NKQmNsWGhHM3hzVkVBdXluZ1ZBL2xpa2VzJztcblxuZXhwb3J0IGRlZmF1bHQgQ0FQU1RPTkVfQVBJX1VSTDtcbiIsImltcG9ydCBnZXRCb29rcyBmcm9tICcuL2dldEJvb2tzLmpzJztcbmltcG9ydCB7IGdldExpa2VzLCBnZXRMaWtlc0FmdGVyUG9zdCB9IGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuaW1wb3J0IHBvc3RMaWtlcyBmcm9tICcuL3Bvc3RMaWtlcy5qcyc7XG5pbXBvcnQgYm9va0NvdW50IGZyb20gJy4vYm9va0NvdW50LmpzJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL3BvcHVwLmpzJztcbmltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldENvbW1lbnRzLmpzJztcblxuY29uc3QgYm9va0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1ncmlkJyk7XG5ib29rR3JpZC5pbm5lckhUTUwgPSAnJztcblxuY29uc3QgZGlzcGxheSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib29rcyA9IGF3YWl0IGdldEJvb2tzKCk7XG4gICAgYm9va0NvdW50KGJvb2tzLmxlbmd0aCk7XG4gICAgY29uc3QgZ2V0VGhlTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgIGJvb2tzLmZvckVhY2goKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGdldFRoZUxpa2VzLmZpbmRJbmRleCgobGlrZSkgPT4gK2xpa2UuaXRlbV9pZCA9PT0gaW5kZXgpO1xuICAgICAgY29uc3QgbGlrZXMgPSBpZCA+PSAwID8gZ2V0VGhlTGlrZXNbaWRdLmxpa2VzIDogMDtcblxuICAgICAgY29uc3QgdGh1bWJuYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZCgndGh1bWJuYWlsJyk7XG4gICAgICB0aHVtYm5haWwuc3JjID0gYm9vay5jb3ZlckltYWdlVXJsO1xuXG4gICAgICBjb25zdCBib29rVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm9va1RpbWUuY2xhc3NMaXN0LmFkZCgnYm9vay10aW1lJyk7XG4gICAgICBib29rVGltZS50ZXh0Q29udGVudCA9IGBQdWJsaXNoZWQgaW46ICR7Ym9vay5wdWJsaXNoWWVhcn1gO1xuXG4gICAgICBjb25zdCB0aHVtYm5haWxSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRodW1ibmFpbFJvdy5jbGFzc0xpc3QuYWRkKCd0aHVtYm5haWwtcm93Jyk7XG4gICAgICB0aHVtYm5haWxSb3cuYXBwZW5kKHRodW1ibmFpbCwgYm9va1RpbWUpO1xuXG4gICAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBib29rVGl0bGUuY2xhc3NMaXN0LmFkZCgnYm9vay10aXRsZScpO1xuICAgICAgYm9va1RpdGxlLnRleHRDb250ZW50ID0gYm9vay50aXRsZTtcblxuICAgICAgY29uc3QgYm9va0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBib29rTGlrZS5jbGFzc0xpc3QuYWRkKCdib29rLWxpa2UnKTtcbiAgICAgIGJvb2tMaWtlLnRleHRDb250ZW50ID0gYOKdpCAke2xpa2VzfSBMaWtlc2A7XG4gICAgICBib29rTGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHBvc3RMaWtlcyhpZCkpIHtcbiAgICAgICAgICBjb25zdCBnZXRQb3N0ZWRMaWtlcyA9IGF3YWl0IGdldExpa2VzQWZ0ZXJQb3N0KCk7XG4gICAgICAgICAgaWYgKGdldFBvc3RlZExpa2VzKSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlrZXMgPSBnZXRQb3N0ZWRMaWtlc1tpZF0ubGlrZXM7XG4gICAgICAgICAgICBib29rTGlrZS50ZXh0Q29udGVudCA9IGDinaQgJHt1cGRhdGVkTGlrZXN9IExpa2VzYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBib29rSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm9va0luZm8uY2xhc3NMaXN0LmFkZCgnYm9vay1pbmZvJyk7XG4gICAgICBib29rSW5mby5hcHBlbmQoYm9va1RpdGxlLCBib29rTGlrZSk7XG5cbiAgICAgIGNvbnN0IGJvb2tJbmZvR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm9va0luZm9HcmlkLmNsYXNzTGlzdC5hZGQoJ2Jvb2staW5mby1ncmlkJyk7XG4gICAgICBib29rSW5mb0dyaWQuYXBwZW5kKGJvb2tJbmZvKTtcblxuICAgICAgY29uc3QgYm9va1ByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGJvb2tQcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2Jvb2stcHJldmlldycpO1xuICAgICAgYm9va1ByZXZpZXcuYXBwZW5kKHRodW1ibmFpbFJvdywgYm9va0luZm9HcmlkKTtcblxuICAgICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29tbWVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWJ1dHRvbicpO1xuICAgICAgY29tbWVudEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgQ29tbWVudCc7XG4gICAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBzaG93IGNvbW1lbnQgcG9wdXAgZm9yIHRoaXMgYm9va1xuICAgICAgICBjb25zdCBwb3B1cCA9IG5ldyBQb3B1cChpbmRleCk7XG4gICAgICAgIHBvcHVwLnNob3dQb3B1cChib29rKTtcbiAgICAgICAgLy8gZ2V0IGNvbW1lbnRzIGZvciB0aGlzIGJvb2sgYW5kIGRpc3BsYXkgdGhlbSBpbiB0aGUgcG9wdXBcbiAgICAgICAgZ2V0Q29tbWVudHMoaW5kZXgpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XG4gICAgICAgICAgcG9wdXAuZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgcG9wdXAncyBmb3JtXG4gICAgICAgIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fbmV3LWNvbW1lbnQtYnV0dG9uJyk7XG4gICAgICAgIHBvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwb3B1cC5hZGRDb21tZW50KGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGJvb2tQcmV2aWV3LmFwcGVuZENoaWxkKGNvbW1lbnRCdXR0b24pO1xuXG4gICAgICBib29rR3JpZC5hcHBlbmRDaGlsZChib29rUHJldmlldyk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYm9va0dyaWQuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7ZXJyb3IubWVzc2FnZX08L3A+YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==