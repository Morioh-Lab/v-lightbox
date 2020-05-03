(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/lightbox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/lightbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    items: {
      type: String,
      "default": function _default() {
        return [];
      }
    },
    css: {
      type: String,
      "default": function _default() {
        return 'h-250 h-md-400 h-lg-600';
      }
    },
    cells: {
      type: Number,
      "default": function _default() {
        return 5;
      }
    }
  },
  data: function data() {
    return {
      src: '',
      index: -1,
      loading: false,
      events: []
    };
  },
  methods: {
    bind: function bind() {
      var _this = this;

      if (this.events.length > 0) return;
      this.events.push(['keydown', function (e) {
        if (_this.index < 0) return;

        if (e.keyCode === 37) {
          _this.prev();
        } else if (e.keyCode === 39) {
          _this.next();
        } else if (e.keyCode === 27) {
          _this.close();
        }
      }]);
      this.events.forEach(function (e) {
        window.addEventListener(e[0], e[1]);
      });
    },
    show: function show(i) {
      var _this2 = this;

      if (i >= this.items.length) {
        i = 0;
      }

      if (i < 0) {
        i = this.items.length - 1;
      }

      this.loading = true;
      this.bind();
      this.index = i;
      var src = this.items[i];
      var img = new Image();
      img.src = src;

      img.onload = function () {
        _this2.loading = false;
        _this2.src = src;
      };
    },
    next: function next() {
      this.show(this.index - 1);
    },
    prev: function prev() {
      this.show(this.index + 1);
    },
    close: function close() {
      this.index = -1;
      this.events.forEach(function (e) {
        window.removeEventListener(e[0], e[1]);
      });
      this.events = [];
    },
    bg: function bg(i) {
      return i && i.length > 0 ? "background-image: url('".concat(i, "')") : '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/lightbox.vue?vue&type=template&id=544b4164&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/lightbox.vue?vue&type=template&id=544b4164& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.items.length > 0
    ? _c(
        "div",
        { staticClass: "lb" },
        [
          _c(
            "div",
            {
              staticClass: "lb-grid",
              class: [
                _vm.css,
                _vm.items.length > _vm.cells
                  ? "lb-grid-" + _vm.cells
                  : "lb-grid-" + _vm.items.length
              ]
            },
            _vm._l(_vm.items, function(src, i) {
              return i < _vm.cells
                ? _c(
                    "div",
                    {
                      staticClass: "lb-item",
                      style: _vm.bg(src),
                      on: {
                        click: function($event) {
                          return _vm.show(i)
                        }
                      }
                    },
                    [
                      i == _vm.cells - 1 && _vm.items.length - _vm.cells > 0
                        ? _c("span", { staticClass: "lb-more" }, [
                            _vm._v(_vm._s(_vm.items.length - _vm.cells) + "+")
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e()
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "animated fadeIn",
                "leave-active-class": "animated fadeOut"
              }
            },
            [
              _vm.index >= 0
                ? _c("div", { staticClass: "lb-modal" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-outline-danger btn-sm lb-modal-close",
                        on: { click: _vm.close }
                      },
                      [_c("i", { staticClass: "fas far fa-times" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary lb-modal-prev",
                        on: { click: _vm.prev }
                      },
                      [_c("i", { staticClass: "fas far fa-angle-left fa-2x" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary lb-modal-next",
                        on: { click: _vm.next }
                      },
                      [_c("i", { staticClass: "fas far fa-angle-right fa-2x" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "lb-modal-img", on: { click: _vm.close } },
                      [
                        _c("img", { attrs: { src: _vm.src } }),
                        _vm._v(" "),
                        _vm.loading
                          ? _c(
                              "div",
                              { staticClass: "spinner spinner-dots-wave" },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-primary rounded-circle w-10 h-10"
                                  },
                                  [
                                    _c("i", { staticClass: "sr-only" }, [
                                      _vm._v(" ")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-primary rounded-circle w-10 h-10"
                                  },
                                  [
                                    _c("i", { staticClass: "sr-only" }, [
                                      _vm._v(" ")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-primary rounded-circle w-10 h-10"
                                  },
                                  [
                                    _c("i", { staticClass: "sr-only" }, [
                                      _vm._v(" ")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-primary rounded-circle w-10 h-10"
                                  },
                                  [
                                    _c("i", { staticClass: "sr-only" }, [
                                      _vm._v(" ")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-primary rounded-circle w-10 h-10"
                                  },
                                  [
                                    _c("i", { staticClass: "sr-only" }, [
                                      _vm._v(" ")
                                    ])
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                : _vm._e()
            ]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lightbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox.css */ "./src/lightbox.css");
/* harmony import */ var _lightbox_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lightbox_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lightbox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox.vue */ "./src/lightbox.vue");


var __LightboxPlugin = {
  install: function install(Vue) {
    if (Vue.__lightbox_installed) {
      return;
    }

    Vue.__lightbox_installed = true;
    Vue.component('lightbox', _lightbox_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(__LightboxPlugin);
}

/* harmony default export */ __webpack_exports__["default"] = (__LightboxPlugin);

/***/ }),

/***/ "./src/lightbox.css":
/*!**************************!*\
  !*** ./src/lightbox.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lightbox.vue":
/*!**************************!*\
  !*** ./src/lightbox.vue ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lightbox_vue_vue_type_template_id_544b4164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox.vue?vue&type=template&id=544b4164& */ "./src/lightbox.vue?vue&type=template&id=544b4164&");
/* harmony import */ var _lightbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox.vue?vue&type=script&lang=js& */ "./src/lightbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lightbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lightbox_vue_vue_type_template_id_544b4164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lightbox_vue_vue_type_template_id_544b4164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/lightbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/lightbox.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./src/lightbox.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_lightbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./lightbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/lightbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_lightbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/lightbox.vue?vue&type=template&id=544b4164&":
/*!*********************************************************!*\
  !*** ./src/lightbox.vue?vue&type=template&id=544b4164& ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lightbox_vue_vue_type_template_id_544b4164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./lightbox.vue?vue&type=template&id=544b4164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/lightbox.vue?vue&type=template&id=544b4164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lightbox_vue_vue_type_template_id_544b4164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lightbox_vue_vue_type_template_id_544b4164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=lightbox.js.map