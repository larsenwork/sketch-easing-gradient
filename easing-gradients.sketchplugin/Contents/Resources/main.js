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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@skpm/builder/node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/App.vue":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@skpm/builder/node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/App.vue ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch-module-web-view/client */ "./node_modules/sketch-module-web-view/client.js");
/* harmony import */ var sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_select_timing_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select-timing.vue */ "./resources/components/select-timing.vue");
/* harmony import */ var _components_select_color_space_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select-color-space.vue */ "./resources/components/select-color-space.vue");
/* harmony import */ var _components_easing_edit_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/easing-edit.vue */ "./resources/components/easing-edit.vue");
/* harmony import */ var _components_easing_preview_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/easing-preview.vue */ "./resources/components/easing-preview.vue");
/* harmony import */ var _components_step_edit_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/step-edit.vue */ "./resources/components/step-edit.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: 'app',
  components: {
    selectTiming: _components_select_timing_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectColorSpace: _components_select_color_space_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    easingEdit: _components_easing_edit_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    easingPreview: _components_easing_preview_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    stepEdit: _components_step_edit_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ClipboardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ClipboardIcon"],
    GithubIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["GithubIcon"],
    TwitterIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["TwitterIcon"]
  },
  methods: {
    openUrl: function openUrl(url) {
      sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_1___default()('openUrl', url);
    },
    showMessage: function showMessage(msg) {
      sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_1___default()('showMessage', msg);
    }
  },
  created: function created() {
    var _this = this;

    window.setGradientParams = function (paramsAsString) {
      var _JSON$parse = JSON.parse(paramsAsString),
          _JSON$parse2 = _slicedToArray(_JSON$parse, 4),
          startColor = _JSON$parse2[0],
          timingFunction = _JSON$parse2[1],
          stopColor = _JSON$parse2[2],
          colorSpace = _JSON$parse2[3];

      _this.$store.state.startColor = startColor;
      _this.$store.state.stopColor = stopColor;
      _this.$store.state.colorSpace = colorSpace;

      if (timingFunction.includes('cubic-bezier')) {
        _this.$store.state.timingFunction = 'cubic-bezier';
        var bezierParams = timingFunction.match(/\(([^)]+)\)/)[1].split(',').map(function (item) {
          return parseFloat(item);
        });

        if (bezierParams.length === 4) {
          var params = {
            x1: bezierParams[0],
            y1: bezierParams[1],
            x2: bezierParams[2],
            y2: bezierParams[3]
          };

          _this.$store.commit('updateXYXY', params);
        } // } else if (timingFunction.includes('steps')) {

      } else {
        _this.$store.state.timingFunction = timingFunction;

        _this.$store.commit('updateXYXY');
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/@skpm/builder/node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/components/easing-edit.vue":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@skpm/builder/node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/components/easing-edit.vue ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/mouse */ "./resources/components/mixins/mouse.js");
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
  mixins: [_mixins_mouse__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * @license
 *
 * chroma.js - JavaScript library for color conversions
 * 
 * Copyright (c) 2011-2017, Gregor Aisch
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

(function() {
  var Color, DEG2RAD, LAB_CONSTANTS, PI, PITHIRD, RAD2DEG, TWOPI, _average_lrgb, _guess_formats, _guess_formats_sorted, _input, _interpolators, abs, atan2, bezier, blend, blend_f, brewer, burn, chroma, clip_rgb, cmyk2rgb, colors, cos, css2rgb, darken, dodge, each, floor, hcg2rgb, hex2rgb, hsi2rgb, hsl2css, hsl2rgb, hsv2rgb, interpolate, interpolate_hsx, interpolate_lab, interpolate_lrgb, interpolate_num, interpolate_rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, lighten, limit, log, luminance_x, m, max, multiply, normal, num2rgb, overlay, pow, rgb2cmyk, rgb2css, rgb2hcg, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb2luminance, rgb2num, rgb2temperature, rgb2xyz, rgb_xyz, rnd, root, round, screen, sin, sqrt, temperature2rgb, type, unpack, w3cx11, xyz_lab, xyz_rgb,
    slice = [].slice;

  type = (function() {

    /*
    for browser-safe type checking+
    ported from jQuery's $.type
     */
    var classToType, len, name, o, ref;
    classToType = {};
    ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
    for (o = 0, len = ref.length; o < len; o++) {
      name = ref[o];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    return function(obj) {
      var strType;
      strType = Object.prototype.toString.call(obj);
      return classToType[strType] || "object";
    };
  })();

  limit = function(x, min, max) {
    if (min == null) {
      min = 0;
    }
    if (max == null) {
      max = 1;
    }
    if (x < min) {
      x = min;
    }
    if (x > max) {
      x = max;
    }
    return x;
  };

  unpack = function(args) {
    if (args.length >= 3) {
      return Array.prototype.slice.call(args);
    } else {
      return args[0];
    }
  };

  clip_rgb = function(rgb) {
    var i, o;
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);
    for (i = o = 0; o < 3; i = ++o) {
      if (i < 3) {
        if (rgb[i] < 0 || rgb[i] > 255) {
          rgb._clipped = true;
        }
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 255) {
          rgb[i] = 255;
        }
      } else if (i === 3) {
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 1) {
          rgb[i] = 1;
        }
      }
    }
    if (!rgb._clipped) {
      delete rgb._unclipped;
    }
    return rgb;
  };

  PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;

  TWOPI = PI * 2;

  PITHIRD = PI / 3;

  DEG2RAD = PI / 180;

  RAD2DEG = 180 / PI;

  chroma = function() {
    if (arguments[0] instanceof Color) {
      return arguments[0];
    }
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, arguments, function(){});
  };

  chroma["default"] = chroma;

  _interpolators = [];

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = chroma;
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return chroma;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

  chroma.version = '1.3.7';

  _input = {};

  _guess_formats = [];

  _guess_formats_sorted = false;

  Color = (function() {
    function Color() {
      var arg, args, chk, len, len1, me, mode, o, w;
      me = this;
      args = [];
      for (o = 0, len = arguments.length; o < len; o++) {
        arg = arguments[o];
        if (arg != null) {
          args.push(arg);
        }
      }
      if (args.length > 1) {
        mode = args[args.length - 1];
      }
      if (_input[mode] != null) {
        me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
      } else {
        if (!_guess_formats_sorted) {
          _guess_formats = _guess_formats.sort(function(a, b) {
            return b.p - a.p;
          });
          _guess_formats_sorted = true;
        }
        for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
          chk = _guess_formats[w];
          mode = chk.test.apply(chk, args);
          if (mode) {
            break;
          }
        }
        if (mode) {
          me._rgb = clip_rgb(_input[mode].apply(_input, args));
        }
      }
      if (me._rgb == null) {
        console.warn('unknown format: ' + args);
      }
      if (me._rgb == null) {
        me._rgb = [0, 0, 0];
      }
      if (me._rgb.length === 3) {
        me._rgb.push(1);
      }
    }

    Color.prototype.toString = function() {
      return this.hex();
    };

    Color.prototype.clone = function() {
      return chroma(me._rgb);
    };

    return Color;

  })();

  chroma._input = _input;


  /**
  	ColorBrewer colors for chroma.js
  
  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
  	Pennsylvania State University.
  
  	Licensed under the Apache License, Version 2.0 (the "License"); 
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at	
  	http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software distributed
  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
  	specific language governing permissions and limitations under the License.
  
      @preserve
   */

  chroma.brewer = brewer = {
    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
  };

  (function() {
    var key, results;
    results = [];
    for (key in brewer) {
      results.push(brewer[key.toLowerCase()] = brewer[key]);
    }
    return results;
  })();


  /**
  	X11 color names
  
  	http://www.w3.org/TR/css3-color/#svg-color
   */

  w3cx11 = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflower: '#6495ed',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    laserlemon: '#ffff54',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrod: '#fafad2',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    maroon2: '#7f0000',
    maroon3: '#b03060',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    purple2: '#7f007f',
    purple3: '#a020f0',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  };

  chroma.colors = colors = w3cx11;

  lab2rgb = function() {
    var a, args, b, g, l, r, x, y, z;
    args = unpack(arguments);
    l = args[0], a = args[1], b = args[2];
    y = (l + 16) / 116;
    x = isNaN(a) ? y : y + a / 500;
    z = isNaN(b) ? y : y - b / 200;
    y = LAB_CONSTANTS.Yn * lab_xyz(y);
    x = LAB_CONSTANTS.Xn * lab_xyz(x);
    z = LAB_CONSTANTS.Zn * lab_xyz(z);
    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  xyz_rgb = function(r) {
    return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
  };

  lab_xyz = function(t) {
    if (t > LAB_CONSTANTS.t1) {
      return t * t * t;
    } else {
      return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
    }
  };

  LAB_CONSTANTS = {
    Kn: 18,
    Xn: 0.950470,
    Yn: 1,
    Zn: 1.088830,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452
  };

  rgb2lab = function() {
    var b, g, r, ref, ref1, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  };

  rgb_xyz = function(r) {
    if ((r /= 255) <= 0.04045) {
      return r / 12.92;
    } else {
      return pow((r + 0.055) / 1.055, 2.4);
    }
  };

  xyz_lab = function(t) {
    if (t > LAB_CONSTANTS.t3) {
      return pow(t, 1 / 3);
    } else {
      return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
    }
  };

  rgb2xyz = function() {
    var b, g, r, ref, x, y, z;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
    return [x, y, z];
  };

  chroma.lab = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['lab']), function(){});
  };

  _input.lab = lab2rgb;

  Color.prototype.lab = function() {
    return rgb2lab(this._rgb);
  };

  bezier = function(colors) {
    var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
    colors = (function() {
      var len, o, results;
      results = [];
      for (o = 0, len = colors.length; o < len; o++) {
        c = colors[o];
        results.push(chroma(c));
      }
      return results;
    })();
    if (colors.length === 2) {
      ref = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref[0], lab1 = ref[1];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push(lab0[i] + t * (lab1[i] - lab0[i]));
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 3) {
      ref1 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 4) {
      ref2 = (function() {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(c.lab());
        }
        return results;
      })(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
      I = function(t) {
        var i, lab;
        lab = (function() {
          var o, results;
          results = [];
          for (i = o = 0; o <= 2; i = ++o) {
            results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
          }
          return results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 5) {
      I0 = bezier(colors.slice(0, 3));
      I1 = bezier(colors.slice(2, 5));
      I = function(t) {
        if (t < 0.5) {
          return I0(t * 2);
        } else {
          return I1((t - 0.5) * 2);
        }
      };
    }
    return I;
  };

  chroma.bezier = function(colors) {
    var f;
    f = bezier(colors);
    f.scale = function() {
      return chroma.scale(f);
    };
    return f;
  };


  /*
      chroma.js
  
      Copyright (c) 2011-2013, Gregor Aisch
      All rights reserved.
  
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
  
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
  
      * The name Gregor Aisch may not be used to endorse or promote products
        derived from this software without specific prior written permission.
  
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  
      @source: https://github.com/gka/chroma.js
   */

  chroma.cubehelix = function(start, rotations, hue, gamma, lightness) {
    var dh, dl, f;
    if (start == null) {
      start = 300;
    }
    if (rotations == null) {
      rotations = -1.5;
    }
    if (hue == null) {
      hue = 1;
    }
    if (gamma == null) {
      gamma = 1;
    }
    if (lightness == null) {
      lightness = [0, 1];
    }
    dh = 0;
    if (type(lightness) === 'array') {
      dl = lightness[1] - lightness[0];
    } else {
      dl = 0;
      lightness = [lightness, lightness];
    }
    f = function(fract) {
      var a, amp, b, cos_a, g, h, l, r, sin_a;
      a = TWOPI * ((start + 120) / 360 + rotations * fract);
      l = pow(lightness[0] + dl * fract, gamma);
      h = dh !== 0 ? hue[0] + fract * dh : hue;
      amp = h * l * (1 - l) / 2;
      cos_a = cos(a);
      sin_a = sin(a);
      r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
      g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
      b = l + amp * (+1.97294 * cos_a);
      return chroma(clip_rgb([r * 255, g * 255, b * 255]));
    };
    f.start = function(s) {
      if (s == null) {
        return start;
      }
      start = s;
      return f;
    };
    f.rotations = function(r) {
      if (r == null) {
        return rotations;
      }
      rotations = r;
      return f;
    };
    f.gamma = function(g) {
      if (g == null) {
        return gamma;
      }
      gamma = g;
      return f;
    };
    f.hue = function(h) {
      if (h == null) {
        return hue;
      }
      hue = h;
      if (type(hue) === 'array') {
        dh = hue[1] - hue[0];
        if (dh === 0) {
          hue = hue[1];
        }
      } else {
        dh = 0;
      }
      return f;
    };
    f.lightness = function(h) {
      if (h == null) {
        return lightness;
      }
      if (type(h) === 'array') {
        lightness = h;
        dl = h[1] - h[0];
      } else {
        lightness = [h, h];
        dl = 0;
      }
      return f;
    };
    f.scale = function() {
      return chroma.scale(f);
    };
    f.hue(hue);
    return f;
  };

  chroma.random = function() {
    var code, digits, i, o;
    digits = '0123456789abcdef';
    code = '#';
    for (i = o = 0; o < 6; i = ++o) {
      code += digits.charAt(floor(Math.random() * 16));
    }
    return new Color(code);
  };

  _interpolators = [];

  interpolate = function(col1, col2, f, m) {
    var interpol, len, o, res;
    if (f == null) {
      f = 0.5;
    }
    if (m == null) {
      m = 'rgb';
    }

    /*
    interpolates between colors
    f = 0 --> me
    f = 1 --> col
     */
    if (type(col1) !== 'object') {
      col1 = chroma(col1);
    }
    if (type(col2) !== 'object') {
      col2 = chroma(col2);
    }
    for (o = 0, len = _interpolators.length; o < len; o++) {
      interpol = _interpolators[o];
      if (m === interpol[0]) {
        res = interpol[1](col1, col2, f, m);
        break;
      }
    }
    if (res == null) {
      throw "color mode " + m + " is not supported";
    }
    return res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
  };

  chroma.interpolate = interpolate;

  Color.prototype.interpolate = function(col2, f, m) {
    return interpolate(this, col2, f, m);
  };

  chroma.mix = interpolate;

  Color.prototype.mix = Color.prototype.interpolate;

  _input.rgb = function() {
    var k, ref, results, v;
    ref = unpack(arguments);
    results = [];
    for (k in ref) {
      v = ref[k];
      results.push(v);
    }
    return results;
  };

  chroma.rgb = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['rgb']), function(){});
  };

  Color.prototype.rgb = function(round) {
    if (round == null) {
      round = true;
    }
    if (round) {
      return this._rgb.map(Math.round).slice(0, 3);
    } else {
      return this._rgb.slice(0, 3);
    }
  };

  Color.prototype.rgba = function(round) {
    if (round == null) {
      round = true;
    }
    if (!round) {
      return this._rgb.slice(0);
    }
    return [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]];
  };

  _guess_formats.push({
    p: 3,
    test: function(n) {
      var a;
      a = unpack(arguments);
      if (type(a) === 'array' && a.length === 3) {
        return 'rgb';
      }
      if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
        return 'rgb';
      }
    }
  });

  _input.lrgb = _input.rgb;

  interpolate_lrgb = function(col1, col2, f, m) {
    var xyz0, xyz1;
    xyz0 = col1._rgb;
    xyz1 = col2._rgb;
    return new Color(sqrt(pow(xyz0[0], 2) * (1 - f) + pow(xyz1[0], 2) * f), sqrt(pow(xyz0[1], 2) * (1 - f) + pow(xyz1[1], 2) * f), sqrt(pow(xyz0[2], 2) * (1 - f) + pow(xyz1[2], 2) * f), m);
  };

  _average_lrgb = function(colors) {
    var col, f, len, o, rgb, xyz;
    f = 1 / colors.length;
    xyz = [0, 0, 0, 0];
    for (o = 0, len = colors.length; o < len; o++) {
      col = colors[o];
      rgb = col._rgb;
      xyz[0] += pow(rgb[0], 2) * f;
      xyz[1] += pow(rgb[1], 2) * f;
      xyz[2] += pow(rgb[2], 2) * f;
      xyz[3] += rgb[3] * f;
    }
    xyz[0] = sqrt(xyz[0]);
    xyz[1] = sqrt(xyz[1]);
    xyz[2] = sqrt(xyz[2]);
    return new Color(xyz);
  };

  _interpolators.push(['lrgb', interpolate_lrgb]);

  chroma.average = function(colors, mode) {
    var A, alpha, c, cnt, dx, dy, first, i, l, len, o, xyz, xyz2;
    if (mode == null) {
      mode = 'rgb';
    }
    l = colors.length;
    colors = colors.map(function(c) {
      return chroma(c);
    });
    first = colors.splice(0, 1)[0];
    if (mode === 'lrgb') {
      return _average_lrgb(colors);
    }
    xyz = first.get(mode);
    cnt = [];
    dx = 0;
    dy = 0;
    for (i in xyz) {
      xyz[i] = xyz[i] || 0;
      cnt.push(isNaN(xyz[i]) ? 0 : 1);
      if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
        A = xyz[i] / 180 * PI;
        dx += cos(A);
        dy += sin(A);
      }
    }
    alpha = first.alpha();
    for (o = 0, len = colors.length; o < len; o++) {
      c = colors[o];
      xyz2 = c.get(mode);
      alpha += c.alpha();
      for (i in xyz) {
        if (!isNaN(xyz2[i])) {
          cnt[i] += 1;
          if (mode.charAt(i) === 'h') {
            A = xyz2[i] / 180 * PI;
            dx += cos(A);
            dy += sin(A);
          } else {
            xyz[i] += xyz2[i];
          }
        }
      }
    }
    for (i in xyz) {
      if (mode.charAt(i) === 'h') {
        A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
        while (A < 0) {
          A += 360;
        }
        while (A >= 360) {
          A -= 360;
        }
        xyz[i] = A;
      } else {
        xyz[i] = xyz[i] / cnt[i];
      }
    }
    return chroma(xyz, mode).alpha(alpha / l);
  };

  hex2rgb = function(hex) {
    var a, b, g, r, rgb, u;
    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      if (hex.length === 4 || hex.length === 7) {
        hex = hex.substr(1);
      }
      if (hex.length === 3) {
        hex = hex.split("");
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      u = parseInt(hex, 16);
      r = u >> 16;
      g = u >> 8 & 0xFF;
      b = u & 0xFF;
      return [r, g, b, 1];
    }
    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
      if (hex.length === 9) {
        hex = hex.substr(1);
      }
      u = parseInt(hex, 16);
      r = u >> 24 & 0xFF;
      g = u >> 16 & 0xFF;
      b = u >> 8 & 0xFF;
      a = round((u & 0xFF) / 0xFF * 100) / 100;
      return [r, g, b, a];
    }
    if ((_input.css != null) && (rgb = _input.css(hex))) {
      return rgb;
    }
    throw "unknown color: " + hex;
  };

  rgb2hex = function(channels, mode) {
    var a, b, g, hxa, r, str, u;
    if (mode == null) {
      mode = 'rgb';
    }
    r = channels[0], g = channels[1], b = channels[2], a = channels[3];
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    u = r << 16 | g << 8 | b;
    str = "000000" + u.toString(16);
    str = str.substr(str.length - 6);
    hxa = '0' + round(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    return "#" + (function() {
      switch (mode.toLowerCase()) {
        case 'rgba':
          return str + hxa;
        case 'argb':
          return hxa + str;
        default:
          return str;
      }
    })();
  };

  _input.hex = function(h) {
    return hex2rgb(h);
  };

  chroma.hex = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hex']), function(){});
  };

  Color.prototype.hex = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    return rgb2hex(this._rgb, mode);
  };

  _guess_formats.push({
    p: 4,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "string") {
        return 'hex';
      }
    }
  });

  hsl2rgb = function() {
    var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
    args = unpack(arguments);
    h = args[0], s = args[1], l = args[2];
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      t3 = [0, 0, 0];
      c = [0, 0, 0];
      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      t1 = 2 * l - t2;
      h /= 360;
      t3[0] = h + 1 / 3;
      t3[1] = h;
      t3[2] = h - 1 / 3;
      for (i = o = 0; o <= 2; i = ++o) {
        if (t3[i] < 0) {
          t3[i] += 1;
        }
        if (t3[i] > 1) {
          t3[i] -= 1;
        }
        if (6 * t3[i] < 1) {
          c[i] = t1 + (t2 - t1) * 6 * t3[i];
        } else if (2 * t3[i] < 1) {
          c[i] = t2;
        } else if (3 * t3[i] < 2) {
          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
        } else {
          c[i] = t1;
        }
      }
      ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
    }
    if (args.length > 3) {
      return [r, g, b, args[3]];
    } else {
      return [r, g, b];
    }
  };

  rgb2hsl = function(r, g, b) {
    var h, l, min, ref, s;
    if (r !== void 0 && r.length >= 3) {
      ref = r, r = ref[0], g = ref[1], b = ref[2];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      s = 0;
      h = Number.NaN;
    } else {
      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }
    if (r === max) {
      h = (g - b) / (max - min);
    } else if (g === max) {
      h = 2 + (b - r) / (max - min);
    } else if (b === max) {
      h = 4 + (r - g) / (max - min);
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    return [h, s, l];
  };

  chroma.hsl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsl']), function(){});
  };

  _input.hsl = hsl2rgb;

  Color.prototype.hsl = function() {
    return rgb2hsl(this._rgb);
  };

  hsv2rgb = function() {
    var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
    args = unpack(arguments);
    h = args[0], s = args[1], v = args[2];
    v *= 255;
    if (s === 0) {
      r = g = b = v;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = v * (1 - s);
      q = v * (1 - s * f);
      t = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  rgb2hsv = function() {
    var b, delta, g, h, min, r, ref, s, v;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    v = max / 255.0;
    if (max === 0) {
      h = Number.NaN;
      s = 0;
    } else {
      s = delta / max;
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, s, v];
  };

  chroma.hsv = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsv']), function(){});
  };

  _input.hsv = hsv2rgb;

  Color.prototype.hsv = function() {
    return rgb2hsv(this._rgb);
  };

  num2rgb = function(num) {
    var b, g, r;
    if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
      r = num >> 16;
      g = (num >> 8) & 0xFF;
      b = num & 0xFF;
      return [r, g, b, 1];
    }
    console.warn("unknown num color: " + num);
    return [0, 0, 0, 1];
  };

  rgb2num = function() {
    var b, g, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    return (r << 16) + (g << 8) + b;
  };

  chroma.num = function(num) {
    return new Color(num, 'num');
  };

  Color.prototype.num = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    return rgb2num(this._rgb, mode);
  };

  _input.num = num2rgb;

  _guess_formats.push({
    p: 1,
    test: function(n) {
      if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
        return 'num';
      }
    }
  });

  hcg2rgb = function() {
    var _c, _g, args, b, c, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, t, v;
    args = unpack(arguments);
    h = args[0], c = args[1], _g = args[2];
    c = c / 100;
    g = g / 100 * 255;
    _c = c * 255;
    if (c === 0) {
      r = g = b = _g;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = floor(h);
      f = h - i;
      p = _g * (1 - c);
      q = p + _c * (1 - f);
      t = p + _c * f;
      v = p + _c;
      switch (i) {
        case 0:
          ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
          break;
        case 1:
          ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
          break;
        case 2:
          ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
          break;
        case 3:
          ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
          break;
        case 4:
          ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
          break;
        case 5:
          ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
      }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  rgb2hcg = function() {
    var _g, b, c, delta, g, h, min, r, ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    c = delta * 100 / 255;
    _g = min / (255 - delta) * 100;
    if (delta === 0) {
      h = Number.NaN;
    } else {
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, c, _g];
  };

  chroma.hcg = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hcg']), function(){});
  };

  _input.hcg = hcg2rgb;

  Color.prototype.hcg = function() {
    return rgb2hcg(this._rgb);
  };

  css2rgb = function(css) {
    var aa, ab, hsl, i, m, o, rgb, w;
    css = css.toLowerCase();
    if ((chroma.colors != null) && chroma.colors[css]) {
      return hex2rgb(chroma.colors[css]);
    }
    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = o = 0; o <= 2; i = ++o) {
        rgb[i] = +rgb[i];
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = w = 0; w <= 3; i = ++w) {
        rgb[i] = +rgb[i];
      }
    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = aa = 0; aa <= 2; i = ++aa) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = ab = 0; ab <= 2; i = ++ab) {
        rgb[i] = round(rgb[i] * 2.55);
      }
      rgb[3] = +rgb[3];
    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = 1;
    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = +m[4];
    }
    return rgb;
  };

  rgb2css = function(rgba) {
    var mode;
    mode = rgba[3] < 1 ? 'rgba' : 'rgb';
    if (mode === 'rgb') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
    } else if (mode === 'rgba') {
      return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
    } else {

    }
  };

  rnd = function(a) {
    return round(a * 100) / 100;
  };

  hsl2css = function(hsl, alpha) {
    var mode;
    mode = alpha < 1 ? 'hsla' : 'hsl';
    hsl[0] = rnd(hsl[0] || 0);
    hsl[1] = rnd(hsl[1] * 100) + '%';
    hsl[2] = rnd(hsl[2] * 100) + '%';
    if (mode === 'hsla') {
      hsl[3] = alpha;
    }
    return mode + '(' + hsl.join(',') + ')';
  };

  _input.css = function(h) {
    return css2rgb(h);
  };

  chroma.css = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['css']), function(){});
  };

  Color.prototype.css = function(mode) {
    if (mode == null) {
      mode = 'rgb';
    }
    if (mode.slice(0, 3) === 'rgb') {
      return rgb2css(this._rgb);
    } else if (mode.slice(0, 3) === 'hsl') {
      return hsl2css(this.hsl(), this.alpha());
    }
  };

  _input.named = function(name) {
    return hex2rgb(w3cx11[name]);
  };

  _guess_formats.push({
    p: 5,
    test: function(n) {
      if (arguments.length === 1 && (w3cx11[n] != null)) {
        return 'named';
      }
    }
  });

  Color.prototype.name = function(n) {
    var h, k;
    if (arguments.length) {
      if (w3cx11[n]) {
        this._rgb = hex2rgb(w3cx11[n]);
      }
      this._rgb[3] = 1;
      this;
    }
    h = this.hex();
    for (k in w3cx11) {
      if (h === w3cx11[k]) {
        return k;
      }
    }
    return h;
  };

  lch2lab = function() {

    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
    These formulas were invented by David Dalrymple to obtain maximum contrast without going
    out of gamut if the parameters are in the range 0-1.
    
    A saturation multiplier was added by Gregor Aisch
     */
    var c, h, l, ref;
    ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
    h = h * DEG2RAD;
    return [l, cos(h) * c, sin(h) * c];
  };

  lch2rgb = function() {
    var L, a, args, b, c, g, h, l, r, ref, ref1;
    args = unpack(arguments);
    l = args[0], c = args[1], h = args[2];
    ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
    ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
    return [r, g, b, args.length > 3 ? args[3] : 1];
  };

  lab2lch = function() {
    var a, b, c, h, l, ref;
    ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
    c = sqrt(a * a + b * b);
    h = (atan2(b, a) * RAD2DEG + 360) % 360;
    if (round(c * 10000) === 0) {
      h = Number.NaN;
    }
    return [l, c, h];
  };

  rgb2lch = function() {
    var a, b, g, l, r, ref, ref1;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
    return lab2lch(l, a, b);
  };

  chroma.lch = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'lch');
  };

  chroma.hcl = function() {
    var args;
    args = unpack(arguments);
    return new Color(args, 'hcl');
  };

  _input.lch = lch2rgb;

  _input.hcl = function() {
    var c, h, l, ref;
    ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
    return lch2rgb([l, c, h]);
  };

  Color.prototype.lch = function() {
    return rgb2lch(this._rgb);
  };

  Color.prototype.hcl = function() {
    return rgb2lch(this._rgb).reverse();
  };

  rgb2cmyk = function(mode) {
    var b, c, f, g, k, m, r, ref, y;
    if (mode == null) {
      mode = 'rgb';
    }
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = r / 255;
    g = g / 255;
    b = b / 255;
    k = 1 - Math.max(r, Math.max(g, b));
    f = k < 1 ? 1 / (1 - k) : 0;
    c = (1 - r - k) * f;
    m = (1 - g - k) * f;
    y = (1 - b - k) * f;
    return [c, m, y, k];
  };

  cmyk2rgb = function() {
    var alpha, args, b, c, g, k, m, r, y;
    args = unpack(arguments);
    c = args[0], m = args[1], y = args[2], k = args[3];
    alpha = args.length > 4 ? args[4] : 1;
    if (k === 1) {
      return [0, 0, 0, alpha];
    }
    r = c >= 1 ? 0 : 255 * (1 - c) * (1 - k);
    g = m >= 1 ? 0 : 255 * (1 - m) * (1 - k);
    b = y >= 1 ? 0 : 255 * (1 - y) * (1 - k);
    return [r, g, b, alpha];
  };

  _input.cmyk = function() {
    return cmyk2rgb(unpack(arguments));
  };

  chroma.cmyk = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['cmyk']), function(){});
  };

  Color.prototype.cmyk = function() {
    return rgb2cmyk(this._rgb);
  };

  _input.gl = function() {
    var i, k, o, rgb, v;
    rgb = (function() {
      var ref, results;
      ref = unpack(arguments);
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(v);
      }
      return results;
    }).apply(this, arguments);
    for (i = o = 0; o <= 2; i = ++o) {
      rgb[i] *= 255;
    }
    return rgb;
  };

  chroma.gl = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['gl']), function(){});
  };

  Color.prototype.gl = function() {
    var rgb;
    rgb = this._rgb;
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
  };

  rgb2luminance = function(r, g, b) {
    var ref;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  luminance_x = function(x) {
    x /= 255;
    if (x <= 0.03928) {
      return x / 12.92;
    } else {
      return pow((x + 0.055) / 1.055, 2.4);
    }
  };

  interpolate_rgb = function(col1, col2, f, m) {
    var xyz0, xyz1;
    xyz0 = col1._rgb;
    xyz1 = col2._rgb;
    return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };

  _interpolators.push(['rgb', interpolate_rgb]);

  Color.prototype.luminance = function(lum, mode) {
    var cur_lum, eps, max_iter, rgba, test;
    if (mode == null) {
      mode = 'rgb';
    }
    if (!arguments.length) {
      return rgb2luminance(this._rgb);
    }
    rgba = this._rgb;
    if (lum === 0) {
      rgba = [0, 0, 0, this._rgb[3]];
    } else if (lum === 1) {
      rgba = [255, 255, 255, this[3]];
    } else {
      cur_lum = rgb2luminance(this._rgb);
      eps = 1e-7;
      max_iter = 20;
      test = function(l, h) {
        var lm, m;
        m = l.interpolate(h, 0.5, mode);
        lm = m.luminance();
        if (Math.abs(lum - lm) < eps || !max_iter--) {
          return m;
        }
        if (lm > lum) {
          return test(l, m);
        }
        return test(m, h);
      };
      if (cur_lum > lum) {
        rgba = test(chroma('black'), this).rgba();
      } else {
        rgba = test(this, chroma('white')).rgba();
      }
    }
    return chroma(rgba).alpha(this.alpha());
  };

  temperature2rgb = function(kelvin) {
    var b, g, r, temp;
    temp = kelvin / 100;
    if (temp < 66) {
      r = 255;
      g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
      b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
    } else {
      r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
      g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
      b = 255;
    }
    return [r, g, b];
  };

  rgb2temperature = function() {
    var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    minTemp = 1000;
    maxTemp = 40000;
    eps = 0.4;
    while (maxTemp - minTemp > eps) {
      temp = (maxTemp + minTemp) * 0.5;
      rgb = temperature2rgb(temp);
      if ((rgb[2] / rgb[0]) >= (b / r)) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    }
    return round(temp);
  };

  chroma.temperature = chroma.kelvin = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['temperature']), function(){});
  };

  _input.temperature = _input.kelvin = _input.K = temperature2rgb;

  Color.prototype.temperature = function() {
    return rgb2temperature(this._rgb);
  };

  Color.prototype.kelvin = Color.prototype.temperature;

  chroma.contrast = function(a, b) {
    var l1, l2, ref, ref1;
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.luminance();
    l2 = b.luminance();
    if (l1 > l2) {
      return (l1 + 0.05) / (l2 + 0.05);
    } else {
      return (l2 + 0.05) / (l1 + 0.05);
    }
  };

  chroma.distance = function(a, b, mode) {
    var d, i, l1, l2, ref, ref1, sum_sq;
    if (mode == null) {
      mode = 'lab';
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    l1 = a.get(mode);
    l2 = b.get(mode);
    sum_sq = 0;
    for (i in l1) {
      d = (l1[i] || 0) - (l2[i] || 0);
      sum_sq += d * d;
    }
    return Math.sqrt(sum_sq);
  };

  chroma.deltaE = function(a, b, L, C) {
    var L1, L2, a1, a2, b1, b2, c1, c2, c4, dH2, delA, delB, delC, delL, f, h1, ref, ref1, ref2, ref3, sc, sh, sl, t, v1, v2, v3;
    if (L == null) {
      L = 1;
    }
    if (C == null) {
      C = 1;
    }
    if ((ref = type(a)) === 'string' || ref === 'number') {
      a = new Color(a);
    }
    if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
      b = new Color(b);
    }
    ref2 = a.lab(), L1 = ref2[0], a1 = ref2[1], b1 = ref2[2];
    ref3 = b.lab(), L2 = ref3[0], a2 = ref3[1], b2 = ref3[2];
    c1 = sqrt(a1 * a1 + b1 * b1);
    c2 = sqrt(a2 * a2 + b2 * b2);
    sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + 0.01765 * L1);
    sc = (0.0638 * c1) / (1.0 + 0.0131 * c1) + 0.638;
    h1 = c1 < 0.000001 ? 0.0 : (atan2(b1, a1) * 180.0) / PI;
    while (h1 < 0) {
      h1 += 360;
    }
    while (h1 >= 360) {
      h1 -= 360;
    }
    t = (h1 >= 164.0) && (h1 <= 345.0) ? 0.56 + abs(0.2 * cos((PI * (h1 + 168.0)) / 180.0)) : 0.36 + abs(0.4 * cos((PI * (h1 + 35.0)) / 180.0));
    c4 = c1 * c1 * c1 * c1;
    f = sqrt(c4 / (c4 + 1900.0));
    sh = sc * (f * t + 1.0 - f);
    delL = L1 - L2;
    delC = c1 - c2;
    delA = a1 - a2;
    delB = b1 - b2;
    dH2 = delA * delA + delB * delB - delC * delC;
    v1 = delL / (L * sl);
    v2 = delC / (C * sc);
    v3 = sh;
    return sqrt(v1 * v1 + v2 * v2 + (dH2 / (v3 * v3)));
  };

  Color.prototype.get = function(modechan) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    src = me[mode]();
    if (channel) {
      i = mode.indexOf(channel);
      if (i > -1) {
        return src[i];
      } else {
        return console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      return src;
    }
  };

  Color.prototype.set = function(modechan, value) {
    var channel, i, me, mode, ref, src;
    me = this;
    ref = modechan.split('.'), mode = ref[0], channel = ref[1];
    if (channel) {
      src = me[mode]();
      i = mode.indexOf(channel);
      if (i > -1) {
        if (type(value) === 'string') {
          switch (value.charAt(0)) {
            case '+':
              src[i] += +value;
              break;
            case '-':
              src[i] += +value;
              break;
            case '*':
              src[i] *= +(value.substr(1));
              break;
            case '/':
              src[i] /= +(value.substr(1));
              break;
            default:
              src[i] = +value;
          }
        } else {
          src[i] = value;
        }
      } else {
        console.warn('unknown channel ' + channel + ' in mode ' + mode);
      }
    } else {
      src = value;
    }
    return chroma(src, mode).alpha(me.alpha());
  };

  Color.prototype.clipped = function() {
    return this._rgb._clipped || false;
  };

  Color.prototype.alpha = function(a) {
    if (arguments.length) {
      return chroma.rgb([this._rgb[0], this._rgb[1], this._rgb[2], a]);
    }
    return this._rgb[3];
  };

  Color.prototype.darken = function(amount) {
    var lab, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lab = me.lab();
    lab[0] -= LAB_CONSTANTS.Kn * amount;
    return chroma.lab(lab).alpha(me.alpha());
  };

  Color.prototype.brighten = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.darken(-amount);
  };

  Color.prototype.darker = Color.prototype.darken;

  Color.prototype.brighter = Color.prototype.brighten;

  Color.prototype.saturate = function(amount) {
    var lch, me;
    if (amount == null) {
      amount = 1;
    }
    me = this;
    lch = me.lch();
    lch[1] += amount * LAB_CONSTANTS.Kn;
    if (lch[1] < 0) {
      lch[1] = 0;
    }
    return chroma.lch(lch).alpha(me.alpha());
  };

  Color.prototype.desaturate = function(amount) {
    if (amount == null) {
      amount = 1;
    }
    return this.saturate(-amount);
  };

  Color.prototype.premultiply = function() {
    var a, rgb;
    rgb = this.rgb();
    a = this.alpha();
    return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
  };

  blend = function(bottom, top, mode) {
    if (!blend[mode]) {
      throw 'unknown blend mode ' + mode;
    }
    return blend[mode](bottom, top);
  };

  blend_f = function(f) {
    return function(bottom, top) {
      var c0, c1;
      c0 = chroma(top).rgb();
      c1 = chroma(bottom).rgb();
      return chroma(f(c0, c1), 'rgb');
    };
  };

  each = function(f) {
    return function(c0, c1) {
      var i, o, out;
      out = [];
      for (i = o = 0; o <= 3; i = ++o) {
        out[i] = f(c0[i], c1[i]);
      }
      return out;
    };
  };

  normal = function(a, b) {
    return a;
  };

  multiply = function(a, b) {
    return a * b / 255;
  };

  darken = function(a, b) {
    if (a > b) {
      return b;
    } else {
      return a;
    }
  };

  lighten = function(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  };

  screen = function(a, b) {
    return 255 * (1 - (1 - a / 255) * (1 - b / 255));
  };

  overlay = function(a, b) {
    if (b < 128) {
      return 2 * a * b / 255;
    } else {
      return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    }
  };

  burn = function(a, b) {
    return 255 * (1 - (1 - b / 255) / (a / 255));
  };

  dodge = function(a, b) {
    if (a === 255) {
      return 255;
    }
    a = 255 * (b / 255) / (1 - a / 255);
    if (a > 255) {
      return 255;
    } else {
      return a;
    }
  };

  blend.normal = blend_f(each(normal));

  blend.multiply = blend_f(each(multiply));

  blend.screen = blend_f(each(screen));

  blend.overlay = blend_f(each(overlay));

  blend.darken = blend_f(each(darken));

  blend.lighten = blend_f(each(lighten));

  blend.dodge = blend_f(each(dodge));

  blend.burn = blend_f(each(burn));

  chroma.blend = blend;

  chroma.analyze = function(data) {
    var len, o, r, val;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    for (o = 0, len = data.length; o < len; o++) {
      val = data[o];
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };

  chroma.scale = function(colors, positions) {
    var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _gamma, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, _useCache, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
    _mode = 'rgb';
    _nacol = chroma('#ccc');
    _spread = 0;
    _fixed = false;
    _domain = [0, 1];
    _pos = [];
    _padding = [0, 0];
    _classes = false;
    _colors = [];
    _out = false;
    _min = 0;
    _max = 1;
    _correctLightness = false;
    _colorCache = {};
    _useCache = true;
    _gamma = 1;
    setColors = function(colors) {
      var c, col, o, ref, ref1, w;
      if (colors == null) {
        colors = ['#fff', '#000'];
      }
      if ((colors != null) && type(colors) === 'string' && (chroma.brewer != null)) {
        colors = chroma.brewer[colors] || chroma.brewer[colors.toLowerCase()] || colors;
      }
      if (type(colors) === 'array') {
        colors = colors.slice(0);
        for (c = o = 0, ref = colors.length - 1; 0 <= ref ? o <= ref : o >= ref; c = 0 <= ref ? ++o : --o) {
          col = colors[c];
          if (type(col) === "string") {
            colors[c] = chroma(col);
          }
        }
        _pos.length = 0;
        for (c = w = 0, ref1 = colors.length - 1; 0 <= ref1 ? w <= ref1 : w >= ref1; c = 0 <= ref1 ? ++w : --w) {
          _pos.push(c / (colors.length - 1));
        }
      }
      resetCache();
      return _colors = colors;
    };
    getClass = function(value) {
      var i, n;
      if (_classes != null) {
        n = _classes.length - 1;
        i = 0;
        while (i < n && value >= _classes[i]) {
          i++;
        }
        return i - 1;
      }
      return 0;
    };
    tmap = function(t) {
      return t;
    };
    classifyValue = function(value) {
      var i, maxc, minc, n, val;
      val = value;
      if (_classes.length > 2) {
        n = _classes.length - 1;
        i = getClass(value);
        minc = _classes[0] + (_classes[1] - _classes[0]) * (0 + _spread * 0.5);
        maxc = _classes[n - 1] + (_classes[n] - _classes[n - 1]) * (1 - _spread * 0.5);
        val = _min + ((_classes[i] + (_classes[i + 1] - _classes[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
      }
      return val;
    };
    getColor = function(val, bypassMap) {
      var c, col, i, k, o, p, ref, t;
      if (bypassMap == null) {
        bypassMap = false;
      }
      if (isNaN(val)) {
        return _nacol;
      }
      if (!bypassMap) {
        if (_classes && _classes.length > 2) {
          c = getClass(val);
          t = c / (_classes.length - 2);
        } else if (_max !== _min) {
          t = (val - _min) / (_max - _min);
        } else {
          t = 1;
        }
      } else {
        t = val;
      }
      if (!bypassMap) {
        t = tmap(t);
      }
      if (_gamma !== 1) {
        t = pow(t, _gamma);
      }
      t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));
      t = Math.min(1, Math.max(0, t));
      k = Math.floor(t * 10000);
      if (_useCache && _colorCache[k]) {
        col = _colorCache[k];
      } else {
        if (type(_colors) === 'array') {
          for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
            p = _pos[i];
            if (t <= p) {
              col = _colors[i];
              break;
            }
            if (t >= p && i === _pos.length - 1) {
              col = _colors[i];
              break;
            }
            if (t > p && t < _pos[i + 1]) {
              t = (t - p) / (_pos[i + 1] - p);
              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
              break;
            }
          }
        } else if (type(_colors) === 'function') {
          col = _colors(t);
        }
        if (_useCache) {
          _colorCache[k] = col;
        }
      }
      return col;
    };
    resetCache = function() {
      return _colorCache = {};
    };
    setColors(colors);
    f = function(v) {
      var c;
      c = chroma(getColor(v));
      if (_out && c[_out]) {
        return c[_out]();
      } else {
        return c;
      }
    };
    f.classes = function(classes) {
      var d;
      if (classes != null) {
        if (type(classes) === 'array') {
          _classes = classes;
          _domain = [classes[0], classes[classes.length - 1]];
        } else {
          d = chroma.analyze(_domain);
          if (classes === 0) {
            _classes = [d.min, d.max];
          } else {
            _classes = chroma.limits(d, 'e', classes);
          }
        }
        return f;
      }
      return _classes;
    };
    f.domain = function(domain) {
      var c, d, k, len, o, ref, w;
      if (!arguments.length) {
        return _domain;
      }
      _min = domain[0];
      _max = domain[domain.length - 1];
      _pos = [];
      k = _colors.length;
      if (domain.length === k && _min !== _max) {
        for (o = 0, len = domain.length; o < len; o++) {
          d = domain[o];
          _pos.push((d - _min) / (_max - _min));
        }
      } else {
        for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
          _pos.push(c / (k - 1));
        }
      }
      _domain = [_min, _max];
      return f;
    };
    f.mode = function(_m) {
      if (!arguments.length) {
        return _mode;
      }
      _mode = _m;
      resetCache();
      return f;
    };
    f.range = function(colors, _pos) {
      setColors(colors, _pos);
      return f;
    };
    f.out = function(_o) {
      _out = _o;
      return f;
    };
    f.spread = function(val) {
      if (!arguments.length) {
        return _spread;
      }
      _spread = val;
      return f;
    };
    f.correctLightness = function(v) {
      if (v == null) {
        v = true;
      }
      _correctLightness = v;
      resetCache();
      if (_correctLightness) {
        tmap = function(t) {
          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
          L0 = getColor(0, true).lab()[0];
          L1 = getColor(1, true).lab()[0];
          pol = L0 > L1;
          L_actual = getColor(t, true).lab()[0];
          L_ideal = L0 + (L1 - L0) * t;
          L_diff = L_actual - L_ideal;
          t0 = 0;
          t1 = 1;
          max_iter = 20;
          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
            (function() {
              if (pol) {
                L_diff *= -1;
              }
              if (L_diff < 0) {
                t0 = t;
                t += (t1 - t) * 0.5;
              } else {
                t1 = t;
                t += (t0 - t) * 0.5;
              }
              L_actual = getColor(t, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }
          return t;
        };
      } else {
        tmap = function(t) {
          return t;
        };
      }
      return f;
    };
    f.padding = function(p) {
      if (p != null) {
        if (type(p) === 'number') {
          p = [p, p];
        }
        _padding = p;
        return f;
      } else {
        return _padding;
      }
    };
    f.colors = function(numColors, out) {
      var dd, dm, i, o, ref, result, results, samples, w;
      if (arguments.length < 2) {
        out = 'hex';
      }
      result = [];
      if (arguments.length === 0) {
        result = _colors.slice(0);
      } else if (numColors === 1) {
        result = [f(0.5)];
      } else if (numColors > 1) {
        dm = _domain[0];
        dd = _domain[1] - dm;
        result = (function() {
          results = [];
          for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--){ results.push(o); }
          return results;
        }).apply(this).map(function(i) {
          return f(dm + i / (numColors - 1) * dd);
        });
      } else {
        colors = [];
        samples = [];
        if (_classes && _classes.length > 2) {
          for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
          }
        } else {
          samples = _domain;
        }
        result = samples.map(function(v) {
          return f(v);
        });
      }
      if (chroma[out]) {
        result = result.map(function(c) {
          return c[out]();
        });
      }
      return result;
    };
    f.cache = function(c) {
      if (c != null) {
        _useCache = c;
        return f;
      } else {
        return _useCache;
      }
    };
    f.gamma = function(g) {
      if (g != null) {
        _gamma = g;
        return f;
      } else {
        return _gamma;
      }
    };
    return f;
  };

  if (chroma.scales == null) {
    chroma.scales = {};
  }

  chroma.scales.cool = function() {
    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
  };

  chroma.scales.hot = function() {
    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
  };

  chroma.analyze = function(data, key, filter) {
    var add, k, len, o, r, val, visit;
    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (filter == null) {
      filter = function() {
        return true;
      };
    }
    add = function(val) {
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    };
    visit = function(val, k) {
      if (filter(val, k)) {
        if ((key != null) && type(key) === 'function') {
          return add(key(val));
        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
          return add(val[key]);
        } else {
          return add(val);
        }
      }
    };
    if (type(data) === 'array') {
      for (o = 0, len = data.length; o < len; o++) {
        val = data[o];
        visit(val);
      }
    } else {
      for (k in data) {
        val = data[k];
        visit(val, k);
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };

  chroma.limits = function(data, mode, num) {
    var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, v, value, values, w;
    if (mode == null) {
      mode = 'equal';
    }
    if (num == null) {
      num = 7;
    }
    if (type(data) === 'array') {
      data = chroma.analyze(data);
    }
    min = data.min;
    max = data.max;
    sum = data.sum;
    values = data.values.sort(function(a, b) {
      return a - b;
    });
    if (num === 1) {
      return [min, max];
    }
    limits = [];
    if (mode.substr(0, 1) === 'c') {
      limits.push(min);
      limits.push(max);
    }
    if (mode.substr(0, 1) === 'e') {
      limits.push(min);
      for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
        limits.push(min + (i / num) * (max - min));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'l') {
      if (min <= 0) {
        throw 'Logarithmic scales are only possible for values > 0';
      }
      min_log = Math.LOG10E * log(min);
      max_log = Math.LOG10E * log(max);
      limits.push(min);
      for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
        limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'q') {
      limits.push(min);
      for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
        p = (values.length - 1) * i / num;
        pb = floor(p);
        if (pb === p) {
          limits.push(values[pb]);
        } else {
          pr = p - pb;
          limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
        }
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'k') {

      /*
      implementation based on
      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
      simplified for 1-d input values
       */
      n = values.length;
      assignments = new Array(n);
      clusterSizes = new Array(num);
      repeat = true;
      nb_iters = 0;
      centroids = null;
      centroids = [];
      centroids.push(min);
      for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
        centroids.push(min + (i / num) * (max - min));
      }
      centroids.push(max);
      while (repeat) {
        for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
          clusterSizes[j] = 0;
        }
        for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
          value = values[i];
          mindist = Number.MAX_VALUE;
          for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
            dist = abs(centroids[j] - value);
            if (dist < mindist) {
              mindist = dist;
              best = j;
            }
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
        newCentroids = new Array(num);
        for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
          newCentroids[j] = null;
        }
        for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
          cluster = assignments[i];
          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i];
          } else {
            newCentroids[cluster] += values[i];
          }
        }
        for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
          newCentroids[j] *= 1 / clusterSizes[j];
        }
        repeat = false;
        for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
          if (newCentroids[j] !== centroids[i]) {
            repeat = true;
            break;
          }
        }
        centroids = newCentroids;
        nb_iters++;
        if (nb_iters > 200) {
          repeat = false;
        }
      }
      kClusters = {};
      for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
        kClusters[j] = [];
      }
      for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
        cluster = assignments[i];
        kClusters[cluster].push(values[i]);
      }
      tmpKMeansBreaks = [];
      for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
        tmpKMeansBreaks.push(kClusters[j][0]);
        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
      }
      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
        return a - b;
      });
      limits.push(tmpKMeansBreaks[0]);
      for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
        v = tmpKMeansBreaks[i];
        if (!isNaN(v) && limits.indexOf(v) === -1) {
          limits.push(v);
        }
      }
    }
    return limits;
  };

  hsi2rgb = function(h, s, i) {

    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
     */
    var args, b, g, r;
    args = unpack(arguments);
    h = args[0], s = args[1], i = args[2];
    if (isNaN(h)) {
      h = 0;
    }
    h /= 360;
    if (h < 1 / 3) {
      b = (1 - s) / 3;
      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      g = 1 - (b + r);
    } else if (h < 2 / 3) {
      h -= 1 / 3;
      r = (1 - s) / 3;
      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      b = 1 - (r + g);
    } else {
      h -= 2 / 3;
      g = (1 - s) / 3;
      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      r = 1 - (g + b);
    }
    r = limit(i * r * 3);
    g = limit(i * g * 3);
    b = limit(i * b * 3);
    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
  };

  rgb2hsi = function() {

    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
     */
    var b, g, h, i, min, r, ref, s;
    ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
    TWOPI = Math.PI * 2;
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    i = (r + g + b) / 3;
    s = 1 - min / i;
    if (s === 0) {
      h = 0;
    } else {
      h = ((r - g) + (r - b)) / 2;
      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
      h = Math.acos(h);
      if (b > g) {
        h = TWOPI - h;
      }
      h /= TWOPI;
    }
    return [h * 360, s, i];
  };

  chroma.hsi = function() {
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(Color, slice.call(arguments).concat(['hsi']), function(){});
  };

  _input.hsi = hsi2rgb;

  Color.prototype.hsi = function() {
    return rgb2hsi(this._rgb);
  };

  interpolate_hsx = function(col1, col2, f, m) {
    var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
    if (m === 'hsl') {
      xyz0 = col1.hsl();
      xyz1 = col2.hsl();
    } else if (m === 'hsv') {
      xyz0 = col1.hsv();
      xyz1 = col2.hsv();
    } else if (m === 'hcg') {
      xyz0 = col1.hcg();
      xyz1 = col2.hcg();
    } else if (m === 'hsi') {
      xyz0 = col1.hsi();
      xyz1 = col2.hsi();
    } else if (m === 'lch' || m === 'hcl') {
      m = 'hcl';
      xyz0 = col1.hcl();
      xyz1 = col2.hcl();
    }
    if (m.substr(0, 1) === 'h') {
      hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
      hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
    }
    if (!isNaN(hue0) && !isNaN(hue1)) {
      if (hue1 > hue0 && hue1 - hue0 > 180) {
        dh = hue1 - (hue0 + 360);
      } else if (hue1 < hue0 && hue0 - hue1 > 180) {
        dh = hue1 + 360 - hue0;
      } else {
        dh = hue1 - hue0;
      }
      hue = hue0 + f * dh;
    } else if (!isNaN(hue0)) {
      hue = hue0;
      if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
        sat = sat0;
      }
    } else if (!isNaN(hue1)) {
      hue = hue1;
      if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
        sat = sat1;
      }
    } else {
      hue = Number.NaN;
    }
    if (sat == null) {
      sat = sat0 + f * (sat1 - sat0);
    }
    lbv = lbv0 + f * (lbv1 - lbv0);
    return res = chroma[m](hue, sat, lbv);
  };

  _interpolators = _interpolators.concat((function() {
    var len, o, ref, results;
    ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch', 'hcg'];
    results = [];
    for (o = 0, len = ref.length; o < len; o++) {
      m = ref[o];
      results.push([m, interpolate_hsx]);
    }
    return results;
  })());

  interpolate_num = function(col1, col2, f, m) {
    var n1, n2;
    n1 = col1.num();
    n2 = col2.num();
    return chroma.num(n1 + (n2 - n1) * f, 'num');
  };

  _interpolators.push(['num', interpolate_num]);

  interpolate_lab = function(col1, col2, f, m) {
    var res, xyz0, xyz1;
    xyz0 = col1.lab();
    xyz1 = col2.lab();
    return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
  };

  _interpolators.push(['lab', interpolate_lab]);

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.min.js":
/*!******************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/styles/main.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./resources/styles/main.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./reset.css */ "./node_modules/css-loader/index.js!./resources/styles/reset.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./settings.css */ "./node_modules/css-loader/index.js!./resources/styles/settings.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./utilities.css */ "./node_modules/css-loader/index.js!./resources/styles/utilities.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/styles/reset.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader!./resources/styles/reset.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nimg,\nembed,\niframe,\nobject,\naudio,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/styles/settings.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./resources/styles/settings.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --color-dark: hsl(0, 0%, 8%);\n  --color-dark-50: hsla(0, 0%, 8%, 0.5);\n  --color-dark-dimmed: hsl(0, 0%, 4%);\n  --color-dark-dimmed-transparent: hsla(0, 0%, 4%, 0);\n  --color-dark-dimmed-more: hsl(0, 0%, 0%);\n  --color-bright: hsl(0, 0%, 100%);\n  --color-bright-50: hsl(0, 0%, 100%, 0.5);\n  --color-bright-dimmed: hsl(0, 0%, 96%);\n  --color-bright-dimmed-transparent: hsla(0, 0%, 96%, 0);\n  --color-bright-dimmed-more: hsl(0, 0%, 92%);\n  --color-brand: hsl(330, 100%, 45%);\n  --color-themed-bg: var(--color-dark);\n  --color-themed-bg-dimmed: var(--color-dark-dimmed);\n  --color-themed-bg-dimmed-transparent: var(--color-dark-dimmed-transparent);\n  --color-themed-bg-dimmed-more: var(--color-dark-dimmed-more);\n  --color-themed-fg: var(--color-bright);\n  --color-themed-fg-50: var(--color-bright-50);\n\n  --lineLength-maxWidth: 35rem;\n  --img-maxWidth: 51rem;\n\n  --fontSize-html: 1.063rem;\n  --fontSize-h2: 1.412rem;\n  --fontSize-h1: 2rem;\n\n  --lineHeight-body: 1.647rem;\n  --lineHeight-margin-xsmall: calc(var(--lineHeight-body) / 4 * 1);\n  --lineHeight-margin-small: calc(var(--lineHeight-body) / 4 * 3);\n  --lineHeight-margin-medium: calc(var(--lineHeight-body) / 4 * 6);\n  --lineHeight-margin-large: calc(var(--lineHeight-body) / 4 * 9);\n\n  --spacer-xsmall: calc(var(--fontSize-h1) / 4);\n  --spacer-small: calc(var(--fontSize-h1) / 2);\n  --spacer-medium: var(--fontSize-h1);\n  --spacer-large: calc(var(--fontSize-h1) * 2);\n\n  --stroke-xsmall: 1px;\n  --stroke-small: 1px;\n  --stroke-medium: 2px;\n  --stroke-large: 4px;\n  --stroke-large--unitLess: 4;\n  --stroke-xsmall--highRes: 0.5px;\n\n  --opacity-low: 0.25;\n  --opacity-mid: 0.5;\n  --opacity-high: 0.95;\n\n  --transitionDuration: 0.3s;\n  --transitionFunction: ease;\n  --transition: var(--transitionDuration) var(--transitionFunction);\n\n  --zIndex-nav: 60;\n  --zIndex-notification: 50;\n  --zIndex-modal: 40;\n  --zIndex-overlay: 30;\n  --zIndex-editorSettings: 20;\n  --zIndex-editor: 10;\n  --zIndex-githubCorner: 1;\n\n  --shadow1: 0 2px 16px hsla(0, 0%, 0%, 0.08);\n  --shadow2: 0 0.25px 2px hsla(0, 0%, 0%, 0.16);\n  --shadow1--hover: 0 5px 40px hsla(0, 0%, 0%, 0.12);\n  --shadow2--hover: 0 1px 8px hsla(0, 0%, 0%, 0.08);\n  --shadow:\n    var(--shadow1),\n    var(--shadow2),\n    inset 0 2px 16px hsla(0, 0%, 0%, 0.0),\n    inset 0 0.25px 2px hsla(0, 0%, 0%, 0.0);\n  --shadow--inset:\n    0 5px 40px hsla(0, 0%, 0%, 0),\n    0 1px 8px hsla(0, 0%, 0%, 0),\n    inset 0 1px 8px hsla(0, 0%, 0%, 0.08),\n    inset 0 0.25px 2px hsla(0, 0%, 0%, 0.16);\n  --shadow--hover:\n    var(--shadow1--hover),\n    var(--shadow2--hover),\n    inset 0 2px 16px hsla(0, 0%, 0%, 0.0),\n    inset 0 0.25px 2px hsla(0, 0%, 0%, 0.0);\n\n  /* Sketch specific sizes... */\n  --fontSize-html: 0.8rem;\n  --fontSize-h2: 1.62rem;\n  --fontSize-h1: 2.62rem;\n  --lineHeight-body: 1.6rem;\n}\n\n.theme-secondary {\n  --color-themed-bg: var(--color-bright);\n  --color-themed-bg-dimmed: var(--color-bright-dimmed);\n  --color-themed-bg-dimmed-more: var(--color-bright-dimmed-more);\n  --color-themed-bg-dimmed-transparent: var(--color-bright-dimmed-transparent);\n  --color-themed-fg: var(--color-dark);\n  --color-themed-fg-50: var(--color-dark-50);\n}\n\nhtml {\n  font-size: var(--fontSize-html);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/styles/utilities.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./resources/styles/utilities.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-lineLength {\n  max-width: var(--lineLength-maxWidth);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n/* Positioning */\n.u-position-relative {\n  position: relative;\n}\n\n.u-position-cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.u-container {\n  padding-right: var(--spacer-small);\n  padding-left: var(--spacer-small);\n  width: 100%;\n}\n\n.u-section {\n  margin-bottom: var(--lineHeight-margin-large);\n}\n\n.u-section:last-child {\n  margin-bottom: calc(var(--lineHeight-margin-large) + var(--lineHeight-margin-small));\n}\n\n.u-no-padding {\n  padding: 0 !important;\n}\n\n.u-knob {\n  border-radius: 50%;\n  width: calc(1.5 * var(--spacer-small));\n  height: calc(1.5 * var(--spacer-small));\n  position: absolute;\n  background-color: var(--color-bright);\n  box-shadow: var(--shadow);\n  transform: translate(-50%, -50%);\n}\n.u-knob:hover {\n  box-shadow: var(--shadow--hover);\n}\n\n.u-grid {\n  display: grid;\n  grid-gap: var(--spacer-small);\n}\n\n.u-aspect--1-1,\n.u-aspect--2-3 {\n  position: relative;\n  width: 100%;\n\n}\n\n.u-aspect--1-1::before,\n.u-aspect--2-3::before {\n  width: 100%;\n  content: '';\n  display: flex;\n}\n\n.u-aspect--2-1 > *,\n.u-aspect--2-3 > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.u-aspect--1-1::before {\n  padding-top: 100%;\n}\n\n.u-aspect--2-3::before {\n    padding-top: calc(100% * 2 / 3);\n}\n\n.u-marginBottom {\n  margin-bottom: var(--lineHeight-margin-small);\n}\n\n.u-marginTop {\n  margin-top: var(--lineHeight-margin-small);\n}\n\n.u-marginLeft {\n  margin-left: var(--lineHeight-margin-small);\n}\n\n.u-textUppercase {\n  text-transform: uppercase;\n}\n\n.u-textCapitalize {\n  text-transform: capitalize;\n}\n\n/* Inputs */\n.u-input {\n  -webkit-appearance: none;\n  display: flex;\n  background: var(--color-themed-bg);\n  color: var(--color-themed-fg);\n  font-size: inherit;\n  padding: var(--spacer-xsmall);\n  border-radius: var(--spacer-xsmall);\n  border-width: 0;\n  border-color: var(--color-themed-bg);\n  transition: var(--transition);\n  box-shadow: var(--shadow);\n  overflow: hidden;\n  width: 100%;\n}\n\n.u-input:hover {\n  box-shadow: var(--shadow--hover);\n}\n\n.u-input:focus {\n  outline: none;\n}\n\n.u-input:active {\n  box-shadow: var(--shadow--inset);\n  transition: 0.1s var(--transitionFunction);\n  transform: translateY(1px);\n}\n\n.u-input--inline {\n  width: auto;\n}\n\n.u-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.u-flex {\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/App.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/App.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n#vue {\n  font-family: -apple-system;\n  -webkit-font-smoothing: antialiased;\n  width: 100vw;\n  height: 100vh;\n  padding: var(--spacer-small);\n}\n.c-gradientEditor-settings {\n  grid-template-columns: repeat(2, 1fr);\n}\n.c-gradientEditor-label {\n  display: block;\n  margin-bottom: var(--lineHeight-margin-xsmall);\n  font-weight: 700;\n  opacity: 0.7;\n}\n.c-gradientEditor-ease {\n  padding: var(--spacer-xsmall);\n}\n.c-gradientEditor-buttons {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n", "", {"version":3,"sources":["/Users/andreaslarsen/Git/sketch-easing-gradient/resources/resources/App.vue"],"names":[],"mappings":";AAoJA;EACA,2BAAA;EACA,oCAAA;EACA,aAAA;EACA,cAAA;EACA,6BAAA;CACA;AAEA;EACA,sCAAA;CACA;AAEA;EACA,eAAA;EACA,+CAAA;EACA,iBAAA;EACA,aAAA;CACA;AAEA;EACA,8BAAA;CACA;AAEA;EACA,cAAA;EACA,sBAAA;EACA,+BAAA;CACA","file":"App.vue","sourcesContent":["<template>\n  <div id=\"vue\">\n    <div\n      class=\"c-gradientEditor-settings u-grid\"\n    >\n      <div>\n        <div\n          class=\"c-gradientEditor-label\"\n        >\n          Easing function\n        </div>\n        <select-timing/>\n      </div>\n      <div>\n        <div\n          class=\"c-gradientEditor-label\"\n        >\n          Color space\n        </div>\n        <select-color-space/>\n      </div>\n      <div\n        class=\"c-gradientEditor-ease u-position-relative\"\n      >\n        <div\n          class=\"u-aspect--1-1\"\n        >\n          <easing-preview/>\n          <easing-edit/>\n        </div>\n      </div>\n\n      <!-- For easy debugging... -->\n      <div\n        class=\"c-gradientEditor-buttons\"\n      >\n        <div>\n          <div\n            class=\"c-gradientEditor-label\"\n          >\n            Copy CSS\n          </div>\n          <button \n            class=\"u-input u-input--inline\"\n            @click=\"showMessage('CSS copied!')\"\n            v-clipboard:copy=\"$store.state.css\"\n          >\n            <clipboard-icon\n              class=\"u-icon\"\n            >\n            </clipboard-icon>\n          </button>\n        </div>\n        <div class=\"u-flex\">\n          <a\n            href=\"\"\n            class=\"u-input u-input--inline\"\n            @click.prevent=\"openUrl('https://github.com/larsenwork/sketch-easing-gradient#readme')\"\n          >\n            <github-icon\n              class=\"u-icon\"\n            >\n            </github-icon>\n          </a>\n          <a\n            href=\"\"\n            class=\"u-input u-input--inline u-marginLeft\"\n            @click.prevent=\"openUrl('https://twitter.com/intent/follow?screen_name=larsenwork')\"\n          >\n            <twitter-icon\n              class=\"u-icon\"\n            >\n            </twitter-icon>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { ClipboardIcon, GithubIcon, TwitterIcon } from 'vue-feather-icons'\nimport pluginCall from 'sketch-module-web-view/client'\n\nimport selectTiming from './components/select-timing.vue'\nimport selectColorSpace from './components/select-color-space.vue'\nimport easingEdit from './components/easing-edit.vue'\nimport easingPreview from './components/easing-preview.vue'\nimport stepEdit from './components/step-edit.vue'\n\nexport default {\n  name: 'app',\n  components: {\n    selectTiming,\n    selectColorSpace,\n    easingEdit,\n    easingPreview,\n    stepEdit,\n    ClipboardIcon,\n    GithubIcon,\n    TwitterIcon,\n  },\n  methods: {\n    openUrl(url) {\n      pluginCall('openUrl', url)\n    },\n    showMessage(msg) {\n      pluginCall('showMessage', msg)\n    },\n  },\n  created() {\n    window.setGradientParams = (paramsAsString) => {\n      const [\n        startColor,\n        timingFunction,\n        stopColor,\n        colorSpace,\n      ] = JSON.parse(paramsAsString)\n      this.$store.state.startColor = startColor\n      this.$store.state.stopColor = stopColor\n      this.$store.state.colorSpace = colorSpace\n\n      if (timingFunction.includes('cubic-bezier')) {\n        this.$store.state.timingFunction = 'cubic-bezier'\n        const bezierParams = timingFunction\n          .match(/\\(([^)]+)\\)/)[1]\n          .split(',')\n          .map(item => parseFloat(item))\n        if (bezierParams.length === 4) {\n          const params = {\n            x1: bezierParams[0],\n            y1: bezierParams[1],\n            x2: bezierParams[2],\n            y2: bezierParams[3],\n          }\n          this.$store.commit('updateXYXY', params)\n        }\n      // } else if (timingFunction.includes('steps')) {\n      } else {\n        this.$store.state.timingFunction = timingFunction\n        this.$store.commit('updateXYXY')\n      }\n    }\n  },\n}\n</script>\n\n<style>\n#vue {\n  font-family: -apple-system;\n  -webkit-font-smoothing: antialiased;\n  width: 100vw;\n  height: 100vh;\n  padding: var(--spacer-small);\n}\n\n.c-gradientEditor-settings {\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.c-gradientEditor-label {\n  display: block;\n  margin-bottom: var(--lineHeight-margin-xsmall);\n  font-weight: 700;\n  opacity: 0.7;\n}\n\n.c-gradientEditor-ease {\n  padding: var(--spacer-xsmall);\n}\n\n.c-gradientEditor-buttons {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-edit.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-edit.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.c-easingEdit {\n  /* Placeholder */\n}\n.c-easingEdit-toggle {\n  margin-top: var(--spacer-xsmall);\n  margin-left: var(--spacer-xsmall);\n}\n.c-easingEdit-lines {\n  overflow: visible;\n  z-index: -1;\n}\n.c-easingEdit-line,\n.c-easingEdit-helpLine {\n  stroke-width: var(--stroke-medium);\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  vector-effect: non-scaling-stroke;\n}\n.c-easingEdit-line {\n  stroke: var(--color-themed-fg);\n}\n.c-easingEdit-helpLine {\n  stroke: var(--color-themed-fg-50);\n  fill: none;\n}\n.c-easingEdit-thinLine {\n  fill: none;\n  stroke-width: var(--stroke-small);\n  stroke: var(--color-themed-fg-50);\n  vector-effect: non-scaling-stroke;\n}\n", "", {"version":3,"sources":["/Users/andreaslarsen/Git/sketch-easing-gradient/resources/components/resources/components/easing-edit.vue"],"names":[],"mappings":";AAoGA;EACA,iBAAA;CACA;AAEA;EACA,iCAAA;EACA,kCAAA;CACA;AAEA;EACA,kBAAA;EACA,YAAA;CACA;AAEA;;EAEA,mCAAA;EACA,sBAAA;EACA,uBAAA;EACA,kCAAA;CACA;AAEA;EACA,+BAAA;CACA;AAEA;EACA,kCAAA;EACA,WAAA;CACA;AAEA;EACA,WAAA;EACA,kCAAA;EACA,kCAAA;EACA,kCAAA;CACA","file":"easing-edit.vue","sourcesContent":["<template>\n  <div\n    class=\"c-easingEdit u-position-cover\"\n    @touchmove=\"move\"\n    @touchend.prevent=\"up\"\n  >\n    <svg\n      class=\"c-easingEdit-lines u-position-cover\"\n      viewBox=\"0 0 1 1\"\n    >\n      <line\n        class=\"c-easingEdit-thinLine\"\n        x1=\".25\"\n        y1=\"0\"\n        x2=\".25\"\n        y2=\"1\"\n      />\n      <line\n        class=\"c-easingEdit-thinLine\"\n        x1=\".5\"\n        y1=\"0\"\n        x2=\".5\"\n        y2=\"1\"\n      />\n      <line\n        class=\"c-easingEdit-thinLine\"\n        x1=\".75\"\n        y1=\"0\"\n        x2=\".75\"\n        y2=\"1\"\n      />\n      <line\n        class=\"c-easingEdit-thinLine\"\n        x1=\"0\"\n        y1=\".25\"\n        x2=\"1\"\n        y2=\".25\"\n      />\n      <line\n        class=\"c-easingEdit-thinLine\"\n        x1=\"0\"\n        y1=\".5\"\n        x2=\"1\"\n        y2=\".5\"\n      />\n      <line\n        class=\"c-easingEdit-thinLine\"\n        x1=\"0\"\n        y1=\".75\"\n        x2=\"1\"\n        y2=\".75\"\n      />\n      <rect\n        class=\"c-easingEdit-helpLine\"\n        x=\"0\"\n        y=\"0\"\n        width=\"1\"\n        height=\"1\"\n      />\n      <line\n        v-if=\"$store.state.gradient.ease1.x > 0 || $store.state.gradient.ease1.y > 0\"\n        :x2=\"$store.state.gradient.ease1.x\"\n        :y2=\"1 - $store.state.gradient.ease1.y\"\n        class=\"c-easingEdit-line\"\n        x1=\"0\"\n        y1=\"1\"\n      />\n      <line\n        v-if=\"$store.state.gradient.ease2.x < 1 || $store.state.gradient.ease2.y < 1\"\n        :x2=\"$store.state.gradient.ease2.x\"\n        :y2=\"1 - $store.state.gradient.ease2.y\"\n        class=\"c-easingEdit-line\"\n        x1=\"1\"\n        y1=\"0\"\n      />\n    </svg>\n    <div\n      :style=\"`left: ${$store.state.gradient.ease1.x * 100}%; top: ${100 - $store.state.gradient.ease1.y * 100}%`\"\n      class=\"u-knob\"\n      @mousedown=\"down($event, 'ease1')\"\n      @touchstart.prevent=\"down($event, 'ease1')\"\n    />\n    <div\n      :style=\"`left: ${$store.state.gradient.ease2.x * 100}%; top: ${100 - $store.state.gradient.ease2.y * 100}%`\"\n      class=\"u-knob\"\n      @mousedown=\"down($event, 'ease2')\"\n      @touchstart.prevent=\"down($event, 'ease2')\"\n    />\n  </div>\n</template>\n\n<script>\nimport mouse from './mixins/mouse'\n\nexport default {\n  mixins: [mouse],\n}\n</script>\n\n<style>\n.c-easingEdit {\n  /* Placeholder */\n}\n\n.c-easingEdit-toggle {\n  margin-top: var(--spacer-xsmall);\n  margin-left: var(--spacer-xsmall);\n}\n\n.c-easingEdit-lines {\n  overflow: visible;\n  z-index: -1;\n}\n\n.c-easingEdit-line,\n.c-easingEdit-helpLine {\n  stroke-width: var(--stroke-medium);\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  vector-effect: non-scaling-stroke;\n}\n\n.c-easingEdit-line {\n  stroke: var(--color-themed-fg);\n}\n\n.c-easingEdit-helpLine {\n  stroke: var(--color-themed-fg-50);\n  fill: none;\n}\n\n.c-easingEdit-thinLine {\n  fill: none;\n  stroke-width: var(--stroke-small);\n  stroke: var(--color-themed-fg-50);\n  vector-effect: non-scaling-stroke;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-preview.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-preview.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.c-easingPreview {\n  overflow: visible;\n}\n.c-easingPreview-path {\n  fill: none;\n  stroke-width: var(--stroke-medium);\n  stroke-linecap: round;\n  stroke: currentColor;\n  vector-effect: non-scaling-stroke;\n}\n", "", {"version":3,"sources":["/Users/andreaslarsen/Git/sketch-easing-gradient/resources/components/resources/components/easing-preview.vue"],"names":[],"mappings":";AAcA;EACA,kBAAA;CACA;AAEA;EACA,WAAA;EACA,mCAAA;EACA,sBAAA;EACA,qBAAA;EACA,kCAAA;CACA","file":"easing-preview.vue","sourcesContent":["<template>\n  <div>\n    <svg\n      class=\"c-easingPreview u-position-cover\"\n      viewBox=\"0 0 1 1\">\n      <path\n        :d=\"`M0 1C ${$store.state.gradient.ease1.x} ${1 - $store.state.gradient.ease1.y} ${$store.state.gradient.ease2.x} ${1 - $store.state.gradient.ease2.y} 1 0`\"\n        class=\"c-easingPreview-path\"\n      />\n    </svg>\n  </div>\n</template>\n\n<style>\n.c-easingPreview {\n  overflow: visible;\n}\n\n.c-easingPreview-path {\n  fill: none;\n  stroke-width: var(--stroke-medium);\n  stroke-linecap: round;\n  stroke: currentColor;\n  vector-effect: non-scaling-stroke;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/easing-coordinates/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/easing-coordinates/dist/index.js ***!
  \*******************************************************/
/*! exports provided: stepsCoordinates, cubicCoordinates, easingCoordinates, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easingCoordinates", function() { return easingCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return easingCoordinates; });
/* harmony import */ var _lib_cubic_coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/cubic-coordinates */ "./node_modules/easing-coordinates/dist/lib/cubic-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicCoordinates", function() { return _lib_cubic_coordinates__WEBPACK_IMPORTED_MODULE_0__["cubicCoordinates"]; });

/* harmony import */ var _lib_easing_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/easing-map */ "./node_modules/easing-coordinates/dist/lib/easing-map.js");
/* harmony import */ var _lib_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/shared */ "./node_modules/easing-coordinates/dist/lib/shared.js");
/* harmony import */ var _lib_steps_coordinates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/steps-coordinates */ "./node_modules/easing-coordinates/dist/lib/steps-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stepsCoordinates", function() { return _lib_steps_coordinates__WEBPACK_IMPORTED_MODULE_3__["stepsCoordinates"]; });





function easingCoordinates(easingFunction, hypotSize, incrementSize) {
  const errorMsgStart = `Error parsing "${easingFunction}".`
  // If a shorthand like "ease-in" is provided then convert to equivalent cubic-bezier
  if (_lib_easing_map__WEBPACK_IMPORTED_MODULE_1__["default"][easingFunction]) {
    easingFunction = _lib_easing_map__WEBPACK_IMPORTED_MODULE_1__["default"][easingFunction]
  }
  // If we think it's a steps function
  if (easingFunction.includes('steps(')) {
    const args = _lib_shared__WEBPACK_IMPORTED_MODULE_2__["getFunctionArguments"](easingFunction)
    const [stepCount, stepSkip] = args
    if (args.length < 1 || args.length > 2) {
      throw new Error(
        `${errorMsgStart} Got ${args.length} arguments but expected 1 or 2.`
      )
    } else {
      if (typeof args[0] !== 'number') {
        throw new Error(`${errorMsgStart} "${args[0]}" is not a number.`)
      } else if (args.length === 2 && typeof args[1] !== 'string') {
        throw new Error(`${errorMsgStart} "${args[1]}" is not a string.`)
      }
      return Object(_lib_steps_coordinates__WEBPACK_IMPORTED_MODULE_3__["stepsCoordinates"])(stepCount, stepSkip)
    }
    // If we think it's a cubic-bezier function
  } else if (easingFunction.includes('cubic-bezier(')) {
    const args = _lib_shared__WEBPACK_IMPORTED_MODULE_2__["getFunctionArguments"](easingFunction)
    const [x1, y1, x2, y2] = args
    if (args.length !== 4) {
      throw new Error(
        `${errorMsgStart} Got ${args.length} arguments but expected 4.`
      )
    } else {
      args.forEach(arg => {
        if (typeof arg !== 'number') {
          throw new Error(`${errorMsgStart} "${arg}" is not a number.`)
        }
      })
      return Object(_lib_cubic_coordinates__WEBPACK_IMPORTED_MODULE_0__["cubicCoordinates"])(x1, y1, x2, y2, hypotSize, incrementSize)
    }
    // If it's not cubic bezier or steps it's not an easing function
  } else {
    throw new Error(
      `${errorMsgStart} If not a typo then please create a GitHub issue :)`
    )
  }
}



/***/ }),

/***/ "./node_modules/easing-coordinates/dist/lib/cubic-coordinates.js":
/*!***********************************************************************!*\
  !*** ./node_modules/easing-coordinates/dist/lib/cubic-coordinates.js ***!
  \***********************************************************************/
/*! exports provided: cubicCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicCoordinates", function() { return cubicCoordinates; });
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./node_modules/easing-coordinates/dist/lib/shared.js");


function cubicCoordinates(
  x1,
  y1,
  x2,
  y2,
  hypotSize = 0.1,
  incrementSize = 0.001
) {
  const bezier = bezier_easing__WEBPACK_IMPORTED_MODULE_0__(x1, y1, x2, y2)
  let x = 0
  let y = 0
  let xOld = 0
  let yOld = 0
  let firstTime = true
  let coordinates = []
  // After first time test if distance from last coordinate added in inner loop (xOld, yOld) to (1, 1) is within 90% of average distance between coordinates
  while (firstTime || Math.hypot(1 - xOld, 1 - yOld) < hypotSize * 0.9) {
    if (firstTime) {
      firstTime = false
    } else {
      // Decrease hypotSize by incrementSize and reset values
      hypotSize -= incrementSize
      x = 0
      y = 0
      xOld = 0
      yOld = 0
      coordinates = []
    }
    // Add the first coordinate
    coordinates.push(_shared__WEBPACK_IMPORTED_MODULE_1__["getCoordinate"](0, 0))
    // Loop and add coordinates every time it's far enough away from the previous one
    while (x <= 1) {
      y = bezier(x)
      if (Math.hypot(x - xOld, y - yOld) > hypotSize) {
        coordinates.push(_shared__WEBPACK_IMPORTED_MODULE_1__["getCoordinate"](x, y))
        xOld = x
        yOld = y
      }
      x += incrementSize
    }
    // Add the last coordinate
    coordinates.push(_shared__WEBPACK_IMPORTED_MODULE_1__["getCoordinate"](1, 1))
  }
  return coordinates
}


/***/ }),

/***/ "./node_modules/easing-coordinates/dist/lib/easing-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/easing-coordinates/dist/lib/easing-map.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return easeMap; });
const easeMap = {
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
  'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
  'ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
}



/***/ }),

/***/ "./node_modules/easing-coordinates/dist/lib/shared.js":
/*!************************************************************!*\
  !*** ./node_modules/easing-coordinates/dist/lib/shared.js ***!
  \************************************************************/
/*! exports provided: roundToMaxTenDecimals, getCoordinate, getFunctionArguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToMaxTenDecimals", function() { return roundToMaxTenDecimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordinate", function() { return getCoordinate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionArguments", function() { return getFunctionArguments; });
const getParenthesisContent = str => {
  return str
    .slice(str.indexOf('(') + 1, str.lastIndexOf(')'))
    .split(',')
    .map(item => item.trim())
    .filter(item => item !== '')
}
const convertToNumberMaybe = str =>
  Number.isNaN(Number(str)) ? str : Number(str)
const roundToMaxTenDecimals = num => Number(`${+num.toFixed(10)}`)
const getCoordinate = (x, y) => {
  return {
    x: roundToMaxTenDecimals(x),
    y: roundToMaxTenDecimals(y),
  }
}
const getFunctionArguments = functionAsString => {
  return getParenthesisContent(functionAsString).map(arg =>
    convertToNumberMaybe(arg)
  )
}


/***/ }),

/***/ "./node_modules/easing-coordinates/dist/lib/steps-coordinates.js":
/*!***********************************************************************!*\
  !*** ./node_modules/easing-coordinates/dist/lib/steps-coordinates.js ***!
  \***********************************************************************/
/*! exports provided: stepsCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCoordinates", function() { return stepsCoordinates; });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./node_modules/easing-coordinates/dist/lib/shared.js");

function stepsCoordinates(steps, skip = 'skip-end') {
  const coordinates = []
  let n = 0
  while (n < steps) {
    const x1 = n / steps
    const x2 = (n + 1) / steps
    let y
    if (skip === 'skip-none') {
      y = n / (steps - 1)
    } else if (skip === 'skip-both') {
      y = (n + 1) / (steps + 1)
    } else if (skip === 'skip-start' || skip === 'start') {
      y = (n + 1) / steps
    } else if (skip === 'skip-end' || skip === 'end') {
      y = n / steps
    } else {
      throw new Error(`Error can't recognise step skip "${skip}"`)
    }
    coordinates.push(_shared__WEBPACK_IMPORTED_MODULE_0__["getCoordinate"](x1, y))
    coordinates.push(_shared__WEBPACK_IMPORTED_MODULE_0__["getCoordinate"](x2, y))
    ++n
  }
  return coordinates
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sketch-module-web-view/client.js":
/*!*******************************************************!*\
  !*** ./node_modules/sketch-module-web-view/client.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(/*! ./lib/constants */ "./node_modules/sketch-module-web-view/lib/constants.js")

module.exports = function(actionName) {
  if (!actionName) {
    throw new Error('missing action name')
  }
  window[CONSTANTS.JS_BRIDGE].callNative(
    JSON.stringify([].slice.call(arguments))
  )
}


/***/ }),

/***/ "./node_modules/sketch-module-web-view/lib/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/sketch-module-web-view/lib/constants.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  JS_BRIDGE: '__skpm_sketchBridge',
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/throttleit/index.js":
/*!******************************************!*\
  !*** ./node_modules/throttleit/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = throttle;

/**
 * Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 *
 * @param {Function} func Function to wrap.
 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
 * @return {Function} A new function that wraps the `func` function passed in.
 */

function throttle (func, wait) {
  var ctx, args, rtn, timeoutID; // caching
  var last = 0;

  return function throttled () {
    ctx = this;
    args = arguments;
    var delta = new Date() - last;
    if (!timeoutID)
      if (delta >= wait) call();
      else timeoutID = setTimeout(call, wait - delta);
    return rtn;
  };

  function call () {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }
}


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-clipboard2/vue-clipboard.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-clipboard2/vue-clipboard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Clipboard = __webpack_require__(/*! clipboard/dist/clipboard.min.js */ "./node_modules/clipboard/dist/clipboard.min.js") // FIXME: workaround for browserify

var VueClipboard = {
  install: function (Vue) {
    Vue.prototype.$copyText = function (text, container) {
      return new Promise(function (resolve, reject) {
        var fake_el = document.createElement('button');
        var clipboard = new Clipboard(fake_el, {
          text: function () { return text },
          action: function () { return 'copy' },
          container: typeof container === 'object' ? container : document.body
        });
        clipboard.on('success', function (e) {
          clipboard.destroy();
          resolve(e);
        });
        clipboard.on('error', function (e) {
          clipboard.destroy();
          reject(e);
        });
        fake_el.click();
      });
    };

    Vue.directive('clipboard', {
      bind: function (el, binding, vnode) {
        if(binding.arg === 'success') {
          el._v_clipboard_success = binding.value
        } else if(binding.arg === 'error') {
          el._v_clipboard_error = binding.value
        } else {
          var clipboard = new Clipboard(el, {
            text: function () { return binding.value },
            action: function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
          })
          clipboard.on('success', function (e) {
            var callback = el._v_clipboard_success
            callback && callback(e)
          })
          clipboard.on('error', function (e) {
            var callback = el._v_clipboard_error
            callback && callback(e)
          })
          el._v_clipboard = clipboard
        }
      },
      update: function (el, binding) {
        if(binding.arg === 'success') {
          el._v_clipboard_success = binding.value
        } else if(binding.arg === 'error') {
          el._v_clipboard_error = binding.value
        } else {
          el._v_clipboard.text = function () { return binding.value }
          el._v_clipboard.action = function () { return binding.arg === 'cut' ? 'cut' : 'copy' }
        }
      },
      unbind: function (el, binding) {
        if(binding.arg === 'success') {
          delete el._v_clipboard_success
        } else if(binding.arg === 'error') {
          delete el._v_clipboard_error
        } else {
          el._v_clipboard.destroy()
          delete el._v_clipboard
        }
      }
    })
  }
}

if (true) {
  module.exports = VueClipboard
} else {}


/***/ }),

/***/ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js ***!
  \*********************************************************************/
/*! exports provided: ActivityIcon, AirplayIcon, AlertCircleIcon, AlertOctagonIcon, AlertTriangleIcon, AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, AnchorIcon, ApertureIcon, ArchiveIcon, ArrowDownCircleIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowDownIcon, ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, ArrowUpCircleIcon, ArrowUpLeftIcon, ArrowUpRightIcon, ArrowUpIcon, AtSignIcon, AwardIcon, BarChart2Icon, BarChartIcon, BatteryChargingIcon, BatteryIcon, BellOffIcon, BellIcon, BluetoothIcon, BoldIcon, BookOpenIcon, BookIcon, BookmarkIcon, BoxIcon, BriefcaseIcon, CalendarIcon, CameraOffIcon, CameraIcon, CastIcon, CheckCircleIcon, CheckSquareIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronsDownIcon, ChevronsLeftIcon, ChevronsRightIcon, ChevronsUpIcon, ChromeIcon, CircleIcon, ClipboardIcon, ClockIcon, CloudDrizzleIcon, CloudLightningIcon, CloudOffIcon, CloudRainIcon, CloudSnowIcon, CloudIcon, CodeIcon, CodepenIcon, CommandIcon, CompassIcon, CopyIcon, CornerDownLeftIcon, CornerDownRightIcon, CornerLeftDownIcon, CornerLeftUpIcon, CornerRightDownIcon, CornerRightUpIcon, CornerUpLeftIcon, CornerUpRightIcon, CpuIcon, CreditCardIcon, CropIcon, CrosshairIcon, DatabaseIcon, DeleteIcon, DiscIcon, DollarSignIcon, DownloadCloudIcon, DownloadIcon, DropletIcon, Edit2Icon, Edit3Icon, EditIcon, ExternalLinkIcon, EyeOffIcon, EyeIcon, FacebookIcon, FastForwardIcon, FeatherIcon, FileMinusIcon, FilePlusIcon, FileTextIcon, FileIcon, FilmIcon, FilterIcon, FlagIcon, FolderMinusIcon, FolderPlusIcon, FolderIcon, GiftIcon, GitBranchIcon, GitCommitIcon, GitMergeIcon, GitPullRequestIcon, GithubIcon, GitlabIcon, GlobeIcon, GridIcon, HardDriveIcon, HashIcon, HeadphonesIcon, HeartIcon, HelpCircleIcon, HomeIcon, ImageIcon, InboxIcon, InfoIcon, InstagramIcon, ItalicIcon, LayersIcon, LayoutIcon, LifeBuoyIcon, Link2Icon, LinkIcon, LinkedinIcon, ListIcon, LoaderIcon, LockIcon, LogInIcon, LogOutIcon, MailIcon, MapPinIcon, MapIcon, Maximize2Icon, MaximizeIcon, MenuIcon, MessageCircleIcon, MessageSquareIcon, MicOffIcon, MicIcon, Minimize2Icon, MinimizeIcon, MinusCircleIcon, MinusSquareIcon, MinusIcon, MonitorIcon, MoonIcon, MoreHorizontalIcon, MoreVerticalIcon, MoveIcon, MusicIcon, Navigation2Icon, NavigationIcon, OctagonIcon, PackageIcon, PaperclipIcon, PauseCircleIcon, PauseIcon, PercentIcon, PhoneCallIcon, PhoneForwardedIcon, PhoneIncomingIcon, PhoneMissedIcon, PhoneOffIcon, PhoneOutgoingIcon, PhoneIcon, PieChartIcon, PlayCircleIcon, PlayIcon, PlusCircleIcon, PlusSquareIcon, PlusIcon, PocketIcon, PowerIcon, PrinterIcon, RadioIcon, RefreshCcwIcon, RefreshCwIcon, RepeatIcon, RewindIcon, RotateCcwIcon, RotateCwIcon, RssIcon, SaveIcon, ScissorsIcon, SearchIcon, SendIcon, ServerIcon, SettingsIcon, Share2Icon, ShareIcon, ShieldOffIcon, ShieldIcon, ShoppingBagIcon, ShoppingCartIcon, ShuffleIcon, SidebarIcon, SkipBackIcon, SkipForwardIcon, SlackIcon, SlashIcon, SlidersIcon, SmartphoneIcon, SpeakerIcon, SquareIcon, StarIcon, StopCircleIcon, SunIcon, SunriseIcon, SunsetIcon, TabletIcon, TagIcon, TargetIcon, TerminalIcon, ThermometerIcon, ThumbsDownIcon, ThumbsUpIcon, ToggleLeftIcon, ToggleRightIcon, Trash2Icon, TrashIcon, TrendingDownIcon, TrendingUpIcon, TriangleIcon, TruckIcon, TvIcon, TwitterIcon, TypeIcon, UmbrellaIcon, UnderlineIcon, UnlockIcon, UploadCloudIcon, UploadIcon, UserCheckIcon, UserMinusIcon, UserPlusIcon, UserXIcon, UserIcon, UsersIcon, VideoOffIcon, VideoIcon, VoicemailIcon, Volume1Icon, Volume2Icon, VolumeXIcon, VolumeIcon, WatchIcon, WifiOffIcon, WifiIcon, WindIcon, XCircleIcon, XSquareIcon, XIcon, YoutubeIcon, ZapOffIcon, ZapIcon, ZoomInIcon, ZoomOutIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityIcon", function() { return ActivityIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirplayIcon", function() { return AirplayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCircleIcon", function() { return AlertCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertOctagonIcon", function() { return AlertOctagonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignCenterIcon", function() { return AlignCenterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignJustifyIcon", function() { return AlignJustifyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignLeftIcon", function() { return AlignLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignRightIcon", function() { return AlignRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorIcon", function() { return AnchorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApertureIcon", function() { return ApertureIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveIcon", function() { return ArchiveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownCircleIcon", function() { return ArrowDownCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownLeftIcon", function() { return ArrowDownLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownRightIcon", function() { return ArrowDownRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownIcon", function() { return ArrowDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftCircleIcon", function() { return ArrowLeftCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return ArrowLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRightCircleIcon", function() { return ArrowRightCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return ArrowRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpCircleIcon", function() { return ArrowUpCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpLeftIcon", function() { return ArrowUpLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpRightIcon", function() { return ArrowUpRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUpIcon", function() { return ArrowUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtSignIcon", function() { return AtSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardIcon", function() { return AwardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart2Icon", function() { return BarChart2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartIcon", function() { return BarChartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryChargingIcon", function() { return BatteryChargingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryIcon", function() { return BatteryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellOffIcon", function() { return BellOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BellIcon", function() { return BellIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothIcon", function() { return BluetoothIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoldIcon", function() { return BoldIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOpenIcon", function() { return BookOpenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookIcon", function() { return BookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkIcon", function() { return BookmarkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxIcon", function() { return BoxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BriefcaseIcon", function() { return BriefcaseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarIcon", function() { return CalendarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraOffIcon", function() { return CameraOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraIcon", function() { return CameraIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastIcon", function() { return CastIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckCircleIcon", function() { return CheckCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSquareIcon", function() { return CheckSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIcon", function() { return CheckIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronDownIcon", function() { return ChevronDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronLeftIcon", function() { return ChevronLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronRightIcon", function() { return ChevronRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronUpIcon", function() { return ChevronUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsDownIcon", function() { return ChevronsDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsLeftIcon", function() { return ChevronsLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsRightIcon", function() { return ChevronsRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChevronsUpIcon", function() { return ChevronsUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChromeIcon", function() { return ChromeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleIcon", function() { return CircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIcon", function() { return ClipboardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockIcon", function() { return ClockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudDrizzleIcon", function() { return CloudDrizzleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudLightningIcon", function() { return CloudLightningIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudOffIcon", function() { return CloudOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudRainIcon", function() { return CloudRainIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudSnowIcon", function() { return CloudSnowIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudIcon", function() { return CloudIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeIcon", function() { return CodeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodepenIcon", function() { return CodepenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandIcon", function() { return CommandIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompassIcon", function() { return CompassIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyIcon", function() { return CopyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerDownLeftIcon", function() { return CornerDownLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerDownRightIcon", function() { return CornerDownRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLeftDownIcon", function() { return CornerLeftDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLeftUpIcon", function() { return CornerLeftUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerRightDownIcon", function() { return CornerRightDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerRightUpIcon", function() { return CornerRightUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerUpLeftIcon", function() { return CornerUpLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerUpRightIcon", function() { return CornerUpRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpuIcon", function() { return CpuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardIcon", function() { return CreditCardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropIcon", function() { return CropIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrosshairIcon", function() { return CrosshairIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseIcon", function() { return DatabaseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIcon", function() { return DeleteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscIcon", function() { return DiscIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DollarSignIcon", function() { return DollarSignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCloudIcon", function() { return DownloadCloudIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadIcon", function() { return DownloadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropletIcon", function() { return DropletIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit2Icon", function() { return Edit2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit3Icon", function() { return Edit3Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIcon", function() { return EditIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLinkIcon", function() { return ExternalLinkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeOffIcon", function() { return EyeOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeIcon", function() { return EyeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return FacebookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastForwardIcon", function() { return FastForwardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIcon", function() { return FeatherIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileMinusIcon", function() { return FileMinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePlusIcon", function() { return FilePlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTextIcon", function() { return FileTextIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileIcon", function() { return FileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmIcon", function() { return FilmIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterIcon", function() { return FilterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagIcon", function() { return FlagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderMinusIcon", function() { return FolderMinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPlusIcon", function() { return FolderPlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderIcon", function() { return FolderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftIcon", function() { return GiftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitBranchIcon", function() { return GitBranchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitCommitIcon", function() { return GitCommitIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitMergeIcon", function() { return GitMergeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPullRequestIcon", function() { return GitPullRequestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubIcon", function() { return GithubIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitlabIcon", function() { return GitlabIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobeIcon", function() { return GlobeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridIcon", function() { return GridIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardDriveIcon", function() { return HardDriveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashIcon", function() { return HashIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadphonesIcon", function() { return HeadphonesIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartIcon", function() { return HeartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCircleIcon", function() { return HelpCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIcon", function() { return HomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageIcon", function() { return ImageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxIcon", function() { return InboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoIcon", function() { return InfoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItalicIcon", function() { return ItalicIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersIcon", function() { return LayersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutIcon", function() { return LayoutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeBuoyIcon", function() { return LifeBuoyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link2Icon", function() { return Link2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkIcon", function() { return LinkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinIcon", function() { return LinkedinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIcon", function() { return ListIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderIcon", function() { return LoaderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockIcon", function() { return LockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInIcon", function() { return LogInIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutIcon", function() { return LogOutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailIcon", function() { return MailIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPinIcon", function() { return MapPinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapIcon", function() { return MapIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maximize2Icon", function() { return Maximize2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaximizeIcon", function() { return MaximizeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return MenuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCircleIcon", function() { return MessageCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSquareIcon", function() { return MessageSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicOffIcon", function() { return MicOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicIcon", function() { return MicIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minimize2Icon", function() { return Minimize2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimizeIcon", function() { return MinimizeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusCircleIcon", function() { return MinusCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusSquareIcon", function() { return MinusSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusIcon", function() { return MinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorIcon", function() { return MonitorIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoonIcon", function() { return MoonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreHorizontalIcon", function() { return MoreHorizontalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreVerticalIcon", function() { return MoreVerticalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveIcon", function() { return MoveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicIcon", function() { return MusicIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation2Icon", function() { return Navigation2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationIcon", function() { return NavigationIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OctagonIcon", function() { return OctagonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageIcon", function() { return PackageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperclipIcon", function() { return PaperclipIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseCircleIcon", function() { return PauseCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseIcon", function() { return PauseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentIcon", function() { return PercentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneCallIcon", function() { return PhoneCallIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneForwardedIcon", function() { return PhoneForwardedIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneIncomingIcon", function() { return PhoneIncomingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneMissedIcon", function() { return PhoneMissedIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneOffIcon", function() { return PhoneOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneOutgoingIcon", function() { return PhoneOutgoingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneIcon", function() { return PhoneIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartIcon", function() { return PieChartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayCircleIcon", function() { return PlayCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayIcon", function() { return PlayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusCircleIcon", function() { return PlusCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusSquareIcon", function() { return PlusSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusIcon", function() { return PlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocketIcon", function() { return PocketIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerIcon", function() { return PowerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterIcon", function() { return PrinterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioIcon", function() { return RadioIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshCcwIcon", function() { return RefreshCcwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshCwIcon", function() { return RefreshCwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatIcon", function() { return RepeatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewindIcon", function() { return RewindIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateCcwIcon", function() { return RotateCcwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateCwIcon", function() { return RotateCwIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssIcon", function() { return RssIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveIcon", function() { return SaveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScissorsIcon", function() { return ScissorsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendIcon", function() { return SendIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerIcon", function() { return ServerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return SettingsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share2Icon", function() { return Share2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return ShareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShieldOffIcon", function() { return ShieldOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShieldIcon", function() { return ShieldIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagIcon", function() { return ShoppingBagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartIcon", function() { return ShoppingCartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShuffleIcon", function() { return ShuffleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarIcon", function() { return SidebarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipBackIcon", function() { return SkipBackIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipForwardIcon", function() { return SkipForwardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackIcon", function() { return SlackIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlashIcon", function() { return SlashIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersIcon", function() { return SlidersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphoneIcon", function() { return SmartphoneIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerIcon", function() { return SpeakerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareIcon", function() { return SquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarIcon", function() { return StarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopCircleIcon", function() { return StopCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunIcon", function() { return SunIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunriseIcon", function() { return SunriseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunsetIcon", function() { return SunsetIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabletIcon", function() { return TabletIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagIcon", function() { return TagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetIcon", function() { return TargetIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalIcon", function() { return TerminalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermometerIcon", function() { return ThermometerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbsDownIcon", function() { return ThumbsDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbsUpIcon", function() { return ThumbsUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLeftIcon", function() { return ToggleLeftIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleRightIcon", function() { return ToggleRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trash2Icon", function() { return Trash2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashIcon", function() { return TrashIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingDownIcon", function() { return TrendingDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingUpIcon", function() { return TrendingUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleIcon", function() { return TriangleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckIcon", function() { return TruckIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvIcon", function() { return TvIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeIcon", function() { return TypeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbrellaIcon", function() { return UmbrellaIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlineIcon", function() { return UnderlineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlockIcon", function() { return UnlockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCloudIcon", function() { return UploadCloudIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadIcon", function() { return UploadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCheckIcon", function() { return UserCheckIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMinusIcon", function() { return UserMinusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlusIcon", function() { return UserPlusIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserXIcon", function() { return UserXIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersIcon", function() { return UsersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoOffIcon", function() { return VideoOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoIcon", function() { return VideoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoicemailIcon", function() { return VoicemailIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume1Icon", function() { return Volume1Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Volume2Icon", function() { return Volume2Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeXIcon", function() { return VolumeXIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeIcon", function() { return VolumeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchIcon", function() { return WatchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiOffIcon", function() { return WifiOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiIcon", function() { return WifiIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindIcon", function() { return WindIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XCircleIcon", function() { return XCircleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSquareIcon", function() { return XSquareIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XIcon", function() { return XIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeIcon", function() { return YoutubeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapOffIcon", function() { return ZapOffIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZapIcon", function() { return ZapIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomInIcon", function() { return ZoomInIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomOutIcon", function() { return ZoomOutIcon; });
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);


var ActivityIcon = {
  name: 'activity-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-activity" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "22 12 18 12 15 21 9 3 6 12 2 12" }
        },
        []
      )]
    );
  }
};

var AirplayIcon = {
  name: 'airplay-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-airplay" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "12 15 17 21 7 21 12 15" }
        },
        []
      )]
    );
  }
};

var AlertCircleIcon = {
  name: 'alert-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var AlertOctagonIcon = {
  name: 'alert-octagon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-octagon" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var AlertTriangleIcon = {
  name: 'alert-triangle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-alert-triangle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "12", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
        },
        []
      )]
    );
  }
};

var AlignCenterIcon = {
  name: 'align-center-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-center" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "10", x2: "6", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "18", x2: "6", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignJustifyIcon = {
  name: 'align-justify-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-justify" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "21", y1: "10", x2: "3", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignLeftIcon = {
  name: 'align-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "17", y1: "10", x2: "3", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var AlignRightIcon = {
  name: 'align-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-align-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "21", y1: "10", x2: "7", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "14", x2: "3", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "7", y2: "18" }
        },
        []
      )]
    );
  }
};

var AnchorIcon = {
  name: 'anchor-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-anchor" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "5", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "8" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 12H2a10 10 0 0 0 20 0h-3" }
        },
        []
      )]
    );
  }
};

var ApertureIcon = {
  name: 'aperture-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-aperture" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.31", y1: "8", x2: "20.05", y2: "17.94" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9.69", y1: "8", x2: "21.17", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7.38", y1: "12", x2: "13.12", y2: "2.06" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9.69", y1: "16", x2: "3.95", y2: "6.06" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.31", y1: "16", x2: "2.83", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.62", y1: "12", x2: "10.88", y2: "21.94" }
        },
        []
      )]
    );
  }
};

var ArchiveIcon = {
  name: 'archive-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-archive" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "21 8 21 21 3 21 3 8" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "1", y: "3", width: "22", height: "5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "12", x2: "14", y2: "12" }
        },
        []
      )]
    );
  }
};

var ArrowDownCircleIcon = {
  name: 'arrow-down-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 12 12 16 16 12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      )]
    );
  }
};

var ArrowDownLeftIcon = {
  name: 'arrow-down-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "17", y1: "7", x2: "7", y2: "17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 17 7 17 7 7" }
        },
        []
      )]
    );
  }
};

var ArrowDownRightIcon = {
  name: 'arrow-down-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "7", y1: "7", x2: "17", y2: "17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 7 17 17 7 17" }
        },
        []
      )]
    );
  }
};

var ArrowDownIcon = {
  name: 'arrow-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-down" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "5", x2: "12", y2: "19" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "19 12 12 19 5 12" }
        },
        []
      )]
    );
  }
};

var ArrowLeftCircleIcon = {
  name: 'arrow-left-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-left-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 8 8 12 12 16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "12", x2: "8", y2: "12" }
        },
        []
      )]
    );
  }
};

var ArrowLeftIcon = {
  name: 'arrow-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "12", x2: "5", y2: "12" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 19 5 12 12 5" }
        },
        []
      )]
    );
  }
};

var ArrowRightCircleIcon = {
  name: 'arrow-right-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-right-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 16 16 12 12 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var ArrowRightIcon = {
  name: 'arrow-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 5 19 12 12 19" }
        },
        []
      )]
    );
  }
};

var ArrowUpCircleIcon = {
  name: 'arrow-up-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 12 12 8 8 12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "8" }
        },
        []
      )]
    );
  }
};

var ArrowUpLeftIcon = {
  name: 'arrow-up-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-left" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "17", y1: "17", x2: "7", y2: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 17 7 7 17 7" }
        },
        []
      )]
    );
  }
};

var ArrowUpRightIcon = {
  name: 'arrow-up-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up-right" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "7", y1: "17", x2: "17", y2: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 7 17 7 17 17" }
        },
        []
      )]
    );
  }
};

var ArrowUpIcon = {
  name: 'arrow-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-arrow-up" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "5 12 12 5 19 12" }
        },
        []
      )]
    );
  }
};

var AtSignIcon = {
  name: 'at-sign-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-at-sign" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" }
        },
        []
      )]
    );
  }
};

var AwardIcon = {
  name: 'award-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-award" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "8", r: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" }
        },
        []
      )]
    );
  }
};

var BarChart2Icon = {
  name: 'bar-chart2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bar-chart-2" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "20", x2: "18", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "20", x2: "6", y2: "14" }
        },
        []
      )]
    );
  }
};

var BarChartIcon = {
  name: 'bar-chart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bar-chart" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "20", x2: "18", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "20", x2: "6", y2: "16" }
        },
        []
      )]
    );
  }
};

var BatteryChargingIcon = {
  name: 'battery-charging-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-battery-charging" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "13", x2: "23", y2: "11" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "11 6 7 12 13 12 9 18" }
        },
        []
      )]
    );
  }
};

var BatteryIcon = {
  name: 'battery-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-battery" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "6", width: "18", height: "12", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "13", x2: "23", y2: "11" }
        },
        []
      )]
    );
  }
};

var BellOffIcon = {
  name: 'bell-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bell-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var BellIcon = {
  name: 'bell-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bell" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" }
        },
        []
      )]
    );
  }
};

var BluetoothIcon = {
  name: 'bluetooth-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bluetooth" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" }
        },
        []
      )]
    );
  }
};

var BoldIcon = {
  name: 'bold-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bold" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }
        },
        []
      )]
    );
  }
};

var BookOpenIcon = {
  name: 'book-open-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-book-open" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }
        },
        []
      )]
    );
  }
};

var BookIcon = {
  name: 'book-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-book" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }
        },
        []
      )]
    );
  }
};

var BookmarkIcon = {
  name: 'bookmark-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-bookmark" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var BoxIcon = {
  name: 'box-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-box" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2.32 6.16 12 11 21.68 6.16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22.76", x2: "12", y2: "11" }
        },
        []
      )]
    );
  }
};

var BriefcaseIcon = {
  name: 'briefcase-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-briefcase" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }
        },
        []
      )]
    );
  }
};

var CalendarIcon = {
  name: 'calendar-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-calendar" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "2", x2: "16", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "2", x2: "8", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "10", x2: "21", y2: "10" }
        },
        []
      )]
    );
  }
};

var CameraOffIcon = {
  name: 'camera-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-camera-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" }
        },
        []
      )]
    );
  }
};

var CameraIcon = {
  name: 'camera-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-camera" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "13", r: "4" }
        },
        []
      )]
    );
  }
};

var CastIcon = {
  name: 'cast-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cast" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "20", x2: "2", y2: "20" }
        },
        []
      )]
    );
  }
};

var CheckCircleIcon = {
  name: 'check-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check-circle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22 4 12 14.01 9 11.01" }
        },
        []
      )]
    );
  }
};

var CheckSquareIcon = {
  name: 'check-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check-square" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 11 12 14 22 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" }
        },
        []
      )]
    );
  }
};

var CheckIcon = {
  name: 'check-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-check" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "20 6 9 17 4 12" }
        },
        []
      )]
    );
  }
};

var ChevronDownIcon = {
  name: 'chevron-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6 9 12 15 18 9" }
        },
        []
      )]
    );
  }
};

var ChevronLeftIcon = {
  name: 'chevron-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 18 9 12 15 6" }
        },
        []
      )]
    );
  }
};

var ChevronRightIcon = {
  name: 'chevron-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 18 15 12 9 6" }
        },
        []
      )]
    );
  }
};

var ChevronUpIcon = {
  name: 'chevron-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevron-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "18 15 12 9 6 15" }
        },
        []
      )]
    );
  }
};

var ChevronsDownIcon = {
  name: 'chevrons-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "7 13 12 18 17 13" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 6 12 11 17 6" }
        },
        []
      )]
    );
  }
};

var ChevronsLeftIcon = {
  name: 'chevrons-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "11 17 6 12 11 7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "18 17 13 12 18 7" }
        },
        []
      )]
    );
  }
};

var ChevronsRightIcon = {
  name: 'chevrons-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "13 17 18 12 13 7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "6 17 11 12 6 7" }
        },
        []
      )]
    );
  }
};

var ChevronsUpIcon = {
  name: 'chevrons-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chevrons-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "17 11 12 6 7 11" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 18 12 13 7 18" }
        },
        []
      )]
    );
  }
};

var ChromeIcon = {
  name: 'chrome-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-chrome" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21.17", y1: "8", x2: "12", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3.95", y1: "6.06", x2: "8.54", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10.88", y1: "21.94", x2: "15.46", y2: "14" }
        },
        []
      )]
    );
  }
};

var CircleIcon = {
  name: 'circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      )]
    );
  }
};

var ClipboardIcon = {
  name: 'clipboard-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-clipboard" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }
        },
        []
      )]
    );
  }
};

var ClockIcon = {
  name: 'clock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-clock" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 6 12 12 16 14" }
        },
        []
      )]
    );
  }
};

var CloudDrizzleIcon = {
  name: 'cloud-drizzle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-drizzle" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "8", y1: "19", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "13", x2: "8", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "19", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "16", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "17" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }
        },
        []
      )]
    );
  }
};

var CloudLightningIcon = {
  name: 'cloud-lightning-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-lightning" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "13 11 9 17 15 17 11 23" }
        },
        []
      )]
    );
  }
};

var CloudOffIcon = {
  name: 'cloud-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var CloudRainIcon = {
  name: 'cloud-rain-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-rain" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "13", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }
        },
        []
      )]
    );
  }
};

var CloudSnowIcon = {
  name: 'cloud-snow-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud-snow" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "16", x2: "8", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "20", x2: "8", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "16", x2: "16", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "20", x2: "16", y2: "20" }
        },
        []
      )]
    );
  }
};

var CloudIcon = {
  name: 'cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cloud" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }
        },
        []
      )]
    );
  }
};

var CodeIcon = {
  name: 'code-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-code" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 18 22 12 16 6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 6 2 12 8 18" }
        },
        []
      )]
    );
  }
};

var CodepenIcon = {
  name: 'codepen-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-codepen" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "15.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22 8.5 12 15.5 2 8.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 15.5 12 8.5 22 15.5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "8.5" }
        },
        []
      )]
    );
  }
};

var CommandIcon = {
  name: 'command-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-command" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" }
        },
        []
      )]
    );
  }
};

var CompassIcon = {
  name: 'compass-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-compass" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }
        },
        []
      )]
    );
  }
};

var CopyIcon = {
  name: 'copy-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-copy" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }
        },
        []
      )]
    );
  }
};

var CornerDownLeftIcon = {
  name: 'corner-down-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-down-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 10 4 15 9 20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 4v7a4 4 0 0 1-4 4H4" }
        },
        []
      )]
    );
  }
};

var CornerDownRightIcon = {
  name: 'corner-down-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-down-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 10 20 15 15 20" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4v7a4 4 0 0 0 4 4h12" }
        },
        []
      )]
    );
  }
};

var CornerLeftDownIcon = {
  name: 'corner-left-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-left-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "14 15 9 20 4 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 4h-7a4 4 0 0 0-4 4v12" }
        },
        []
      )]
    );
  }
};

var CornerLeftUpIcon = {
  name: 'corner-left-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-left-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "14 9 9 4 4 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 20h-7a4 4 0 0 1-4-4V4" }
        },
        []
      )]
    );
  }
};

var CornerRightDownIcon = {
  name: 'corner-right-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-right-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "10 15 15 20 20 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4h7a4 4 0 0 1 4 4v12" }
        },
        []
      )]
    );
  }
};

var CornerRightUpIcon = {
  name: 'corner-right-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-right-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "10 9 15 4 20 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 20h7a4 4 0 0 0 4-4V4" }
        },
        []
      )]
    );
  }
};

var CornerUpLeftIcon = {
  name: 'corner-up-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-up-left" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "9 14 4 9 9 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20 20v-7a4 4 0 0 0-4-4H4" }
        },
        []
      )]
    );
  }
};

var CornerUpRightIcon = {
  name: 'corner-up-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-corner-up-right" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 14 20 9 15 4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 20v-7a4 4 0 0 1 4-4h12" }
        },
        []
      )]
    );
  }
};

var CpuIcon = {
  name: 'cpu-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-cpu" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "4", width: "16", height: "16", rx: "2", ry: "2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "6", height: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "1", x2: "9", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "1", x2: "15", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "20", x2: "9", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "20", x2: "15", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "9", x2: "23", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "14", x2: "23", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "9", x2: "4", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "14", x2: "4", y2: "14" }
        },
        []
      )]
    );
  }
};

var CreditCardIcon = {
  name: 'credit-card-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-credit-card" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "4", width: "22", height: "16", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "10", x2: "23", y2: "10" }
        },
        []
      )]
    );
  }
};

var CropIcon = {
  name: 'crop-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-crop" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6.13 1L6 16a2 2 0 0 0 2 2h15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1 6.13L16 6a2 2 0 0 1 2 2v15" }
        },
        []
      )]
    );
  }
};

var CrosshairIcon = {
  name: 'crosshair-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-crosshair" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "22", y1: "12", x2: "18", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "12", x2: "2", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "6", x2: "12", y2: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var DatabaseIcon = {
  name: 'database-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-database" }, ctx.data]),
      [h(
        "ellipse",
        {
          attrs: { cx: "12", cy: "5", rx: "9", ry: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }
        },
        []
      )]
    );
  }
};

var DeleteIcon = {
  name: 'delete-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-delete" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "9", x2: "12", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "18", y2: "15" }
        },
        []
      )]
    );
  }
};

var DiscIcon = {
  name: 'disc-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-disc" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var DollarSignIcon = {
  name: 'dollar-sign-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-dollar-sign" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "1", x2: "12", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
        },
        []
      )]
    );
  }
};

var DownloadCloudIcon = {
  name: 'download-cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-download-cloud" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "8 17 12 21 16 17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "12", x2: "12", y2: "21" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" }
        },
        []
      )]
    );
  }
};

var DownloadIcon = {
  name: 'download-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-download" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 10 12 15 17 10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "15", x2: "12", y2: "3" }
        },
        []
      )]
    );
  }
};

var DropletIcon = {
  name: 'droplet-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-droplet" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }
        },
        []
      )]
    );
  }
};

var Edit2Icon = {
  name: 'edit2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "16 3 21 8 8 21 3 21 3 16 16 3" }
        },
        []
      )]
    );
  }
};

var Edit3Icon = {
  name: 'edit3-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit-3" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "14 2 18 6 7 17 3 17 3 13 14 2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "22", x2: "21", y2: "22" }
        },
        []
      )]
    );
  }
};

var EditIcon = {
  name: 'edit-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-edit" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "18 2 22 6 12 16 8 16 8 12 18 2" }
        },
        []
      )]
    );
  }
};

var ExternalLinkIcon = {
  name: 'external-link-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-external-link" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 3 21 3 21 9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "14", x2: "21", y2: "3" }
        },
        []
      )]
    );
  }
};

var EyeOffIcon = {
  name: 'eye-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-eye-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var EyeIcon = {
  name: 'eye-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-eye" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var FacebookIcon = {
  name: 'facebook-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-facebook" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }
        },
        []
      )]
    );
  }
};

var FastForwardIcon = {
  name: 'fast-forward-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-fast-forward" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "13 19 22 12 13 5 13 19" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "2 19 11 12 2 5 2 19" }
        },
        []
      )]
    );
  }
};

var FeatherIcon = {
  name: 'feather-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-feather" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "8", x2: "2", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "15", x2: "9", y2: "15" }
        },
        []
      )]
    );
  }
};

var FileMinusIcon = {
  name: 'file-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "15", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var FilePlusIcon = {
  name: 'file-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "15", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var FileTextIcon = {
  name: 'file-text-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file-text" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "14 2 14 8 20 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "13", x2: "8", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "17", x2: "8", y2: "17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "10 9 9 9 8 9" }
        },
        []
      )]
    );
  }
};

var FileIcon = {
  name: 'file-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-file" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "13 2 13 9 20 9" }
        },
        []
      )]
    );
  }
};

var FilmIcon = {
  name: 'film-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-film" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "20", rx: "2.18", ry: "2.18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "2", x2: "7", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "2", x2: "17", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "7", x2: "7", y2: "7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "17", x2: "7", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "17", x2: "22", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "7", x2: "22", y2: "7" }
        },
        []
      )]
    );
  }
};

var FilterIcon = {
  name: 'filter-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-filter" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }
        },
        []
      )]
    );
  }
};

var FlagIcon = {
  name: 'flag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-flag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "22", x2: "4", y2: "15" }
        },
        []
      )]
    );
  }
};

var FolderMinusIcon = {
  name: 'folder-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-folder-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "14", x2: "15", y2: "14" }
        },
        []
      )]
    );
  }
};

var FolderPlusIcon = {
  name: 'folder-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-folder-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "11", x2: "12", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "14", x2: "15", y2: "14" }
        },
        []
      )]
    );
  }
};

var FolderIcon = {
  name: 'folder-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-folder" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var GiftIcon = {
  name: 'gift-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-gift" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "20 12 20 22 4 22 4 12" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22", x2: "12", y2: "7" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" }
        },
        []
      )]
    );
  }
};

var GitBranchIcon = {
  name: 'git-branch-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-branch" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "6", y1: "3", x2: "6", y2: "15" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18", cy: "6", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "18", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M18 9a9 9 0 0 1-9 9" }
        },
        []
      )]
    );
  }
};

var GitCommitIcon = {
  name: 'git-commit-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-commit" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1.05", y1: "12", x2: "7", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17.01", y1: "12", x2: "22.96", y2: "12" }
        },
        []
      )]
    );
  }
};

var GitMergeIcon = {
  name: 'git-merge-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-merge" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "18", cy: "18", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "6", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 21V9a9 9 0 0 0 9 9" }
        },
        []
      )]
    );
  }
};

var GitPullRequestIcon = {
  name: 'git-pull-request-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-git-pull-request" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "18", cy: "18", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "6", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M13 6h3a2 2 0 0 1 2 2v7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "9", x2: "6", y2: "21" }
        },
        []
      )]
    );
  }
};

var GithubIcon = {
  name: 'github-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-github" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }
        },
        []
      )]
    );
  }
};

var GitlabIcon = {
  name: 'gitlab-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-gitlab" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" }
        },
        []
      )]
    );
  }
};

var GlobeIcon = {
  name: 'globe-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-globe" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }
        },
        []
      )]
    );
  }
};

var GridIcon = {
  name: 'grid-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-grid" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "3", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "14", width: "7", height: "7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "3", y: "14", width: "7", height: "7" }
        },
        []
      )]
    );
  }
};

var HardDriveIcon = {
  name: 'hard-drive-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-hard-drive" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "22", y1: "12", x2: "2", y2: "12" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "16", x2: "6", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "16", x2: "10", y2: "16" }
        },
        []
      )]
    );
  }
};

var HashIcon = {
  name: 'hash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-hash" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "4", y1: "9", x2: "20", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "15", x2: "20", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "3", x2: "8", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "3", x2: "14", y2: "21" }
        },
        []
      )]
    );
  }
};

var HeadphonesIcon = {
  name: 'headphones-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-headphones" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 18v-6a9 9 0 0 1 18 0v6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" }
        },
        []
      )]
    );
  }
};

var HeartIcon = {
  name: 'heart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-heart" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }
        },
        []
      )]
    );
  }
};

var HelpCircleIcon = {
  name: 'help-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-help-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "17" }
        },
        []
      )]
    );
  }
};

var HomeIcon = {
  name: 'home-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-home" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 22 9 12 15 12 15 22" }
        },
        []
      )]
    );
  }
};

var ImageIcon = {
  name: 'image-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-image" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "8.5", r: "1.5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "21 15 16 10 5 21" }
        },
        []
      )]
    );
  }
};

var InboxIcon = {
  name: 'inbox-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-inbox" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "22 12 16 12 14 15 10 15 8 12 2 12" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }
        },
        []
      )]
    );
  }
};

var InfoIcon = {
  name: 'info-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-info" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "16", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "8" }
        },
        []
      )]
    );
  }
};

var InstagramIcon = {
  name: 'instagram-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-instagram" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17.5", y1: "6.5", x2: "17.5", y2: "6.5" }
        },
        []
      )]
    );
  }
};

var ItalicIcon = {
  name: 'italic-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-italic" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "4", x2: "10", y2: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "20", x2: "5", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "4", x2: "9", y2: "20" }
        },
        []
      )]
    );
  }
};

var LayersIcon = {
  name: 'layers-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-layers" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 2 7 12 12 22 7 12 2" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 17 12 22 22 17" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2 12 12 17 22 12" }
        },
        []
      )]
    );
  }
};

var LayoutIcon = {
  name: 'layout-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-layout" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "9", x2: "21", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "21", x2: "9", y2: "9" }
        },
        []
      )]
    );
  }
};

var LifeBuoyIcon = {
  name: 'life-buoy-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-life-buoy" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "9.17", y2: "9.17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "14.83", x2: "19.07", y2: "19.07" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "9.17", x2: "19.07", y2: "4.93" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.83", y1: "9.17", x2: "18.36", y2: "5.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "19.07", x2: "9.17", y2: "14.83" }
        },
        []
      )]
    );
  }
};

var Link2Icon = {
  name: 'link2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-link-2" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var LinkIcon = {
  name: 'link-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-link" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }
        },
        []
      )]
    );
  }
};

var LinkedinIcon = {
  name: 'linkedin-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-linkedin" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "9", width: "4", height: "12" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "4", cy: "4", r: "2" }
        },
        []
      )]
    );
  }
};

var ListIcon = {
  name: 'list-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-list" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "8", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "21", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "18", x2: "21", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "3", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "12", x2: "3", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "18", x2: "3", y2: "18" }
        },
        []
      )]
    );
  }
};

var LoaderIcon = {
  name: 'loader-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-loader" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "6", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" }
        },
        []
      )]
    );
  }
};

var LockIcon = {
  name: 'lock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-lock" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M7 11V7a5 5 0 0 1 10 0v4" }
        },
        []
      )]
    );
  }
};

var LogInIcon = {
  name: 'log-in-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-log-in" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "10 17 15 12 10 7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "12", x2: "3", y2: "12" }
        },
        []
      )]
    );
  }
};

var LogOutIcon = {
  name: 'log-out-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-log-out" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 17 21 12 16 7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "12", x2: "9", y2: "12" }
        },
        []
      )]
    );
  }
};

var MailIcon = {
  name: 'mail-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mail" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "22,6 12,13 2,6" }
        },
        []
      )]
    );
  }
};

var MapPinIcon = {
  name: 'map-pin-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-map-pin" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "10", r: "3" }
        },
        []
      )]
    );
  }
};

var MapIcon = {
  name: 'map-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-map" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "2", x2: "8", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "6", x2: "16", y2: "22" }
        },
        []
      )]
    );
  }
};

var Maximize2Icon = {
  name: 'maximize2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-maximize-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "15 3 21 3 21 9" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 21 3 21 3 15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "3", x2: "14", y2: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "21", x2: "10", y2: "14" }
        },
        []
      )]
    );
  }
};

var MaximizeIcon = {
  name: 'maximize-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-maximize" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }
        },
        []
      )]
    );
  }
};

var MenuIcon = {
  name: 'menu-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-menu" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "3", y1: "12", x2: "21", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "18", x2: "21", y2: "18" }
        },
        []
      )]
    );
  }
};

var MessageCircleIcon = {
  name: 'message-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-message-circle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }
        },
        []
      )]
    );
  }
};

var MessageSquareIcon = {
  name: 'message-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-message-square" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
        },
        []
      )]
    );
  }
};

var MicOffIcon = {
  name: 'mic-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mic-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
        },
        []
      )]
    );
  }
};

var MicIcon = {
  name: 'mic-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-mic" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 10v2a7 7 0 0 1-14 0v-2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "23", x2: "16", y2: "23" }
        },
        []
      )]
    );
  }
};

var Minimize2Icon = {
  name: 'minimize2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minimize-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 14 10 14 10 20" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "20 10 14 10 14 4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "10", x2: "21", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "21", x2: "10", y2: "14" }
        },
        []
      )]
    );
  }
};

var MinimizeIcon = {
  name: 'minimize-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minimize" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }
        },
        []
      )]
    );
  }
};

var MinusCircleIcon = {
  name: 'minus-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var MinusSquareIcon = {
  name: 'minus-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var MinusIcon = {
  name: 'minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-minus" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      )]
    );
  }
};

var MonitorIcon = {
  name: 'monitor-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-monitor" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "21", x2: "16", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "17", x2: "12", y2: "21" }
        },
        []
      )]
    );
  }
};

var MoonIcon = {
  name: 'moon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-moon" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }
        },
        []
      )]
    );
  }
};

var MoreHorizontalIcon = {
  name: 'more-horizontal-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-more-horizontal" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "19", cy: "12", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "5", cy: "12", r: "1" }
        },
        []
      )]
    );
  }
};

var MoreVerticalIcon = {
  name: 'more-vertical-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-more-vertical" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "5", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "19", r: "1" }
        },
        []
      )]
    );
  }
};

var MoveIcon = {
  name: 'move-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-move" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "5 9 2 12 5 15" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 5 12 2 15 5" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "15 19 12 22 9 19" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "19 9 22 12 19 15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "2", y1: "12", x2: "22", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "22" }
        },
        []
      )]
    );
  }
};

var MusicIcon = {
  name: 'music-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-music" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "9 17 9 5 21 3 21 15" }
        },
        []
      )]
    );
  }
};

var Navigation2Icon = {
  name: 'navigation2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-navigation-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 19 21 12 17 5 21 12 2" }
        },
        []
      )]
    );
  }
};

var NavigationIcon = {
  name: 'navigation-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-navigation" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "3 11 22 2 13 21 11 13 3 11" }
        },
        []
      )]
    );
  }
};

var OctagonIcon = {
  name: 'octagon-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-octagon" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }
        },
        []
      )]
    );
  }
};

var PackageIcon = {
  name: 'package-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-package" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "2.32 6.16 12 11 21.68 6.16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "22.76", x2: "12", y2: "11" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "3.5", x2: "17", y2: "8.5" }
        },
        []
      )]
    );
  }
};

var PaperclipIcon = {
  name: 'paperclip-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-paperclip" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" }
        },
        []
      )]
    );
  }
};

var PauseCircleIcon = {
  name: 'pause-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pause-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "15", x2: "10", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "15", x2: "14", y2: "9" }
        },
        []
      )]
    );
  }
};

var PauseIcon = {
  name: 'pause-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pause" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "6", y: "4", width: "4", height: "16" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "14", y: "4", width: "4", height: "16" }
        },
        []
      )]
    );
  }
};

var PercentIcon = {
  name: 'percent-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-percent" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "19", y1: "5", x2: "5", y2: "19" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6.5", cy: "6.5", r: "2.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "17.5", cy: "17.5", r: "2.5" }
        },
        []
      )]
    );
  }
};

var PhoneCallIcon = {
  name: 'phone-call-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-call" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneForwardedIcon = {
  name: 'phone-forwarded-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-forwarded" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "19 1 23 5 19 9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "5", x2: "23", y2: "5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneIncomingIcon = {
  name: 'phone-incoming-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-incoming" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 2 16 8 22 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "16", y2: "8" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneMissedIcon = {
  name: 'phone-missed-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-missed" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "17", y2: "7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "1", x2: "23", y2: "7" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneOffIcon = {
  name: 'phone-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "1", x2: "1", y2: "23" }
        },
        []
      )]
    );
  }
};

var PhoneOutgoingIcon = {
  name: 'phone-outgoing-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone-outgoing" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 7 23 1 17 1" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16", y1: "8", x2: "23", y2: "1" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PhoneIcon = {
  name: 'phone-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-phone" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
        },
        []
      )]
    );
  }
};

var PieChartIcon = {
  name: 'pie-chart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pie-chart" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M22 12A10 10 0 0 0 12 2v10z" }
        },
        []
      )]
    );
  }
};

var PlayCircleIcon = {
  name: 'play-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-play-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "10 8 16 12 10 16 10 8" }
        },
        []
      )]
    );
  }
};

var PlayIcon = {
  name: 'play-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-play" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "5 3 19 12 5 21 5 3" }
        },
        []
      )]
    );
  }
};

var PlusCircleIcon = {
  name: 'plus-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var PlusSquareIcon = {
  name: 'plus-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "12", x2: "16", y2: "12" }
        },
        []
      )]
    );
  }
};

var PlusIcon = {
  name: 'plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-plus" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "12", y1: "5", x2: "12", y2: "19" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5", y1: "12", x2: "19", y2: "12" }
        },
        []
      )]
    );
  }
};

var PocketIcon = {
  name: 'pocket-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-pocket" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 10 12 14 16 10" }
        },
        []
      )]
    );
  }
};

var PowerIcon = {
  name: 'power-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-power" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "12" }
        },
        []
      )]
    );
  }
};

var PrinterIcon = {
  name: 'printer-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-printer" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "6 9 6 2 18 2 18 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "6", y: "14", width: "12", height: "8" }
        },
        []
      )]
    );
  }
};

var RadioIcon = {
  name: 'radio-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-radio" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" }
        },
        []
      )]
    );
  }
};

var RefreshCcwIcon = {
  name: 'refresh-ccw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-refresh-ccw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "1 4 1 10 7 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "23 20 23 14 17 14" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" }
        },
        []
      )]
    );
  }
};

var RefreshCwIcon = {
  name: 'refresh-cw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-refresh-cw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 4 23 10 17 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "1 20 1 14 7 14" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }
        },
        []
      )]
    );
  }
};

var RepeatIcon = {
  name: 'repeat-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-repeat" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "17 1 21 5 17 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3 11V9a4 4 0 0 1 4-4h14" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 23 3 19 7 15" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M21 13v2a4 4 0 0 1-4 4H3" }
        },
        []
      )]
    );
  }
};

var RewindIcon = {
  name: 'rewind-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rewind" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 19 2 12 11 5 11 19" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "22 19 13 12 22 5 22 19" }
        },
        []
      )]
    );
  }
};

var RotateCcwIcon = {
  name: 'rotate-ccw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rotate-ccw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "1 4 1 10 7 10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }
        },
        []
      )]
    );
  }
};

var RotateCwIcon = {
  name: 'rotate-cw-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rotate-cw" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 4 23 10 17 10" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }
        },
        []
      )]
    );
  }
};

var RssIcon = {
  name: 'rss-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-rss" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 11a9 9 0 0 1 9 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4 4a16 16 0 0 1 16 16" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "5", cy: "19", r: "1" }
        },
        []
      )]
    );
  }
};

var SaveIcon = {
  name: 'save-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-save" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 21 17 13 7 13 7 21" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "7 3 7 8 15 8" }
        },
        []
      )]
    );
  }
};

var ScissorsIcon = {
  name: 'scissors-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-scissors" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "6", cy: "6", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "18", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8.12", y1: "8.12", x2: "12", y2: "12" }
        },
        []
      )]
    );
  }
};

var SearchIcon = {
  name: 'search-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-search" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      )]
    );
  }
};

var SendIcon = {
  name: 'send-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-send" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "22", y1: "2", x2: "11", y2: "13" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "22 2 15 22 11 13 2 9 22 2" }
        },
        []
      )]
    );
  }
};

var ServerIcon = {
  name: 'server-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-server" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "6", x2: "6", y2: "6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "18", x2: "6", y2: "18" }
        },
        []
      )]
    );
  }
};

var SettingsIcon = {
  name: 'settings-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-settings" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "3" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }
        },
        []
      )]
    );
  }
};

var Share2Icon = {
  name: 'share2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-share-2" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "18", cy: "5", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "6", cy: "12", r: "3" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18", cy: "19", r: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }
        },
        []
      )]
    );
  }
};

var ShareIcon = {
  name: 'share-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-share" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 6 12 2 8 6" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "15" }
        },
        []
      )]
    );
  }
};

var ShieldOffIcon = {
  name: 'shield-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shield-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var ShieldIcon = {
  name: 'shield-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shield" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }
        },
        []
      )]
    );
  }
};

var ShoppingBagIcon = {
  name: 'shopping-bag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shopping-bag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "3", y1: "6", x2: "21", y2: "6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 10a4 4 0 0 1-8 0" }
        },
        []
      )]
    );
  }
};

var ShoppingCartIcon = {
  name: 'shopping-cart-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shopping-cart" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "9", cy: "21", r: "1" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "20", cy: "21", r: "1" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" }
        },
        []
      )]
    );
  }
};

var ShuffleIcon = {
  name: 'shuffle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-shuffle" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 3 21 3 21 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "20", x2: "21", y2: "3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "21 16 21 21 16 21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "15", x2: "21", y2: "21" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "4", x2: "9", y2: "9" }
        },
        []
      )]
    );
  }
};

var SidebarIcon = {
  name: 'sidebar-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sidebar" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "3", x2: "9", y2: "21" }
        },
        []
      )]
    );
  }
};

var SkipBackIcon = {
  name: 'skip-back-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-skip-back" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "19 20 9 12 19 4 19 20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5", y1: "19", x2: "5", y2: "5" }
        },
        []
      )]
    );
  }
};

var SkipForwardIcon = {
  name: 'skip-forward-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-skip-forward" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "5 4 15 12 5 20 5 4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "19", y1: "5", x2: "19", y2: "19" }
        },
        []
      )]
    );
  }
};

var SlackIcon = {
  name: 'slack-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-slack" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12.57", y1: "5.99", x2: "16.15", y2: "16.39" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7.85", y1: "7.61", x2: "11.43", y2: "18.01" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "16.39", y1: "7.85", x2: "5.99", y2: "11.43" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.01", y1: "12.57", x2: "7.61", y2: "16.15" }
        },
        []
      )]
    );
  }
};

var SlashIcon = {
  name: 'slash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-slash" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.93", y1: "4.93", x2: "19.07", y2: "19.07" }
        },
        []
      )]
    );
  }
};

var SlidersIcon = {
  name: 'sliders-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sliders" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "4", y1: "21", x2: "4", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "10", x2: "4", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "8", x2: "12", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "21", x2: "20", y2: "16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "12", x2: "20", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "14", x2: "7", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "8", x2: "15", y2: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "16", x2: "23", y2: "16" }
        },
        []
      )]
    );
  }
};

var SmartphoneIcon = {
  name: 'smartphone-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-smartphone" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var SpeakerIcon = {
  name: 'speaker-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-speaker" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "14", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "6", x2: "12", y2: "6" }
        },
        []
      )]
    );
  }
};

var SquareIcon = {
  name: 'square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      )]
    );
  }
};

var StarIcon = {
  name: 'star-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-star" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }
        },
        []
      )]
    );
  }
};

var StopCircleIcon = {
  name: 'stop-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-stop-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "9", y: "9", width: "6", height: "6" }
        },
        []
      )]
    );
  }
};

var SunIcon = {
  name: 'sun-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sun" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "1", x2: "12", y2: "3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "21", x2: "12", y2: "23" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "12", x2: "3", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "12", x2: "23", y2: "12" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }
        },
        []
      )]
    );
  }
};

var SunriseIcon = {
  name: 'sunrise-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sunrise" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 18a5 5 0 0 0-10 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "2", x2: "12", y2: "9" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "18", x2: "3", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "23", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "22", x2: "1", y2: "22" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 6 12 2 16 6" }
        },
        []
      )]
    );
  }
};

var SunsetIcon = {
  name: 'sunset-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-sunset" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 18a5 5 0 0 0-10 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "9", x2: "12", y2: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4.22", y1: "10.22", x2: "5.64", y2: "11.64" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "18", x2: "3", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "18", x2: "23", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18.36", y1: "11.64", x2: "19.78", y2: "10.22" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "22", x2: "1", y2: "22" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 5 12 9 8 5" }
        },
        []
      )]
    );
  }
};

var TabletIcon = {
  name: 'tablet-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tablet" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2", transform: "rotate(180 12 12)" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "18", x2: "12", y2: "18" }
        },
        []
      )]
    );
  }
};

var TagIcon = {
  name: 'tag-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tag" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "7", y1: "7", x2: "7", y2: "7" }
        },
        []
      )]
    );
  }
};

var TargetIcon = {
  name: 'target-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-target" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "6" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "2" }
        },
        []
      )]
    );
  }
};

var TerminalIcon = {
  name: 'terminal-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-terminal" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 17 10 11 4 5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "19", x2: "20", y2: "19" }
        },
        []
      )]
    );
  }
};

var ThermometerIcon = {
  name: 'thermometer-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thermometer" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" }
        },
        []
      )]
    );
  }
};

var ThumbsDownIcon = {
  name: 'thumbs-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thumbs-down" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" }
        },
        []
      )]
    );
  }
};

var ThumbsUpIcon = {
  name: 'thumbs-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-thumbs-up" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" }
        },
        []
      )]
    );
  }
};

var ToggleLeftIcon = {
  name: 'toggle-left-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-toggle-left" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var ToggleRightIcon = {
  name: 'toggle-right-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-toggle-right" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "22", height: "14", rx: "7", ry: "7" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "16", cy: "12", r: "3" }
        },
        []
      )]
    );
  }
};

var Trash2Icon = {
  name: 'trash2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trash-2" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "3 6 5 6 21 6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "10", y1: "11", x2: "10", y2: "17" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "14", y1: "11", x2: "14", y2: "17" }
        },
        []
      )]
    );
  }
};

var TrashIcon = {
  name: 'trash-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trash" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "3 6 5 6 21 6" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }
        },
        []
      )]
    );
  }
};

var TrendingDownIcon = {
  name: 'trending-down-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trending-down" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 18 13.5 8.5 8.5 13.5 1 6" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 18 23 18 23 12" }
        },
        []
      )]
    );
  }
};

var TrendingUpIcon = {
  name: 'trending-up-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-trending-up" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "23 6 13.5 15.5 8.5 10.5 1 18" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 6 23 6 23 12" }
        },
        []
      )]
    );
  }
};

var TriangleIcon = {
  name: 'triangle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-triangle" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }
        },
        []
      )]
    );
  }
};

var TruckIcon = {
  name: 'truck-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-truck" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "1", y: "3", width: "15", height: "13" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "16 8 20 8 23 11 23 16 16 16 16 8" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "5.5", cy: "18.5", r: "2.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18.5", cy: "18.5", r: "2.5" }
        },
        []
      )]
    );
  }
};

var TvIcon = {
  name: 'tv-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-tv" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "2", y: "7", width: "20", height: "15", rx: "2", ry: "2" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 2 12 7 7 2" }
        },
        []
      )]
    );
  }
};

var TwitterIcon = {
  name: 'twitter-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-twitter" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }
        },
        []
      )]
    );
  }
};

var TypeIcon = {
  name: 'type-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-type" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "4 7 4 4 20 4 20 7" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "20", x2: "15", y2: "20" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "4", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var UmbrellaIcon = {
  name: 'umbrella-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-umbrella" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" }
        },
        []
      )]
    );
  }
};

var UnderlineIcon = {
  name: 'underline-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-underline" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "4", y1: "21", x2: "20", y2: "21" }
        },
        []
      )]
    );
  }
};

var UnlockIcon = {
  name: 'unlock-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-unlock" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M7 11V7a5 5 0 0 1 9.9-1" }
        },
        []
      )]
    );
  }
};

var UploadCloudIcon = {
  name: 'upload-cloud-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-upload-cloud" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "16 16 12 12 8 16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "12", x2: "12", y2: "21" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "16 16 12 12 8 16" }
        },
        []
      )]
    );
  }
};

var UploadIcon = {
  name: 'upload-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-upload" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 8 12 3 7 8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "3", x2: "12", y2: "15" }
        },
        []
      )]
    );
  }
};

var UserCheckIcon = {
  name: 'user-check-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-check" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "17 11 19 13 23 9" }
        },
        []
      )]
    );
  }
};

var UserMinusIcon = {
  name: 'user-minus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-minus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
        },
        []
      )]
    );
  }
};

var UserPlusIcon = {
  name: 'user-plus-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-plus" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "20", y1: "8", x2: "20", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "11", x2: "17", y2: "11" }
        },
        []
      )]
    );
  }
};

var UserXIcon = {
  name: 'user-x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user-x" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "8.5", cy: "7", r: "4" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "18", y1: "8", x2: "23", y2: "13" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "8", x2: "18", y2: "13" }
        },
        []
      )]
    );
  }
};

var UserIcon = {
  name: 'user-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-user" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "12", cy: "7", r: "4" }
        },
        []
      )]
    );
  }
};

var UsersIcon = {
  name: 'users-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-users" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "9", cy: "7", r: "4" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M23 21v-2a4 4 0 0 0-3-3.87" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16 3.13a4 4 0 0 1 0 7.75" }
        },
        []
      )]
    );
  }
};

var VideoOffIcon = {
  name: 'video-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-video-off" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var VideoIcon = {
  name: 'video-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-video" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "23 7 16 12 23 17 23 7" }
        },
        []
      ), h(
        "rect",
        {
          attrs: { x: "1", y: "5", width: "15", height: "14", rx: "2", ry: "2" }
        },
        []
      )]
    );
  }
};

var VoicemailIcon = {
  name: 'voicemail-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-voicemail" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "5.5", cy: "11.5", r: "4.5" }
        },
        []
      ), h(
        "circle",
        {
          attrs: { cx: "18.5", cy: "11.5", r: "4.5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "5.5", y1: "16", x2: "18.5", y2: "16" }
        },
        []
      )]
    );
  }
};

var Volume1Icon = {
  name: 'volume1-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-1" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }
        },
        []
      )]
    );
  }
};

var Volume2Icon = {
  name: 'volume2-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-2" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" }
        },
        []
      )]
    );
  }
};

var VolumeXIcon = {
  name: 'volume-x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume-x" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "23", y1: "9", x2: "17", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "17", y1: "9", x2: "23", y2: "15" }
        },
        []
      )]
    );
  }
};

var VolumeIcon = {
  name: 'volume-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-volume" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }
        },
        []
      )]
    );
  }
};

var WatchIcon = {
  name: 'watch-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-watch" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "7" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "12 9 12 12 13.5 13.5" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" }
        },
        []
      )]
    );
  }
};

var WifiOffIcon = {
  name: 'wifi-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wifi-off" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M10.71 5.05A16 16 0 0 1 22.58 9" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var WifiIcon = {
  name: 'wifi-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wifi" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M5 12.55a11 11 0 0 1 14.08 0" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M1.42 9a16 16 0 0 1 21.16 0" }
        },
        []
      ), h(
        "path",
        {
          attrs: { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "12", y1: "20", x2: "12", y2: "20" }
        },
        []
      )]
    );
  }
};

var WindIcon = {
  name: 'wind-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-wind" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" }
        },
        []
      )]
    );
  }
};

var XCircleIcon = {
  name: 'x-circle-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x-circle" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "12", cy: "12", r: "10" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "9", x2: "9", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "9", x2: "15", y2: "15" }
        },
        []
      )]
    );
  }
};

var XSquareIcon = {
  name: 'x-square-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x-square" }, ctx.data]),
      [h(
        "rect",
        {
          attrs: { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "9", y1: "9", x2: "15", y2: "15" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "15", y1: "9", x2: "9", y2: "15" }
        },
        []
      )]
    );
  }
};

var XIcon = {
  name: 'x-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-x" }, ctx.data]),
      [h(
        "line",
        {
          attrs: { x1: "18", y1: "6", x2: "6", y2: "18" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "6", y1: "6", x2: "18", y2: "18" }
        },
        []
      )]
    );
  }
};

var YoutubeIcon = {
  name: 'youtube-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-youtube" }, ctx.data]),
      [h(
        "path",
        {
          attrs: { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }
        },
        []
      ), h(
        "polygon",
        {
          attrs: { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }
        },
        []
      )]
    );
  }
};

var ZapOffIcon = {
  name: 'zap-off-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zap-off" }, ctx.data]),
      [h(
        "polyline",
        {
          attrs: { points: "12.41 6.75 13 2 10.57 4.92" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "18.57 12.91 21 10 15.66 10" }
        },
        []
      ), h(
        "polyline",
        {
          attrs: { points: "8 8 3 14 12 14 11 22 16 16" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "1", y1: "1", x2: "23", y2: "23" }
        },
        []
      )]
    );
  }
};

var ZapIcon = {
  name: 'zap-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zap" }, ctx.data]),
      [h(
        "polygon",
        {
          attrs: { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }
        },
        []
      )]
    );
  }
};

var ZoomInIcon = {
  name: 'zoom-in-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zoom-in" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "11", y1: "8", x2: "11", y2: "14" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "11", x2: "14", y2: "11" }
        },
        []
      )]
    );
  }
};

var ZoomOutIcon = {
  name: 'zoom-out-icon',

  functional: true,

  render: function render(h, ctx) {
    return h(
      "svg",
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        attrs: { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" },
        "class": "feather feather-zoom-out" }, ctx.data]),
      [h(
        "circle",
        {
          attrs: { cx: "11", cy: "11", r: "8" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }
        },
        []
      ), h(
        "line",
        {
          attrs: { x1: "8", y1: "11", x2: "14", y2: "11" }
        },
        []
      )]
    );
  }
};




/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
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
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

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
    options._scopeId = scopeId
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
      // register for functioal component in vue file
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04e133dc\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/select-color-space.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-04e133dc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/select-color-space.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "select",
    {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.$store.state.colorSpace,
          expression: "$store.state.colorSpace"
        }
      ],
      staticClass: "u-input",
      on: {
        change: [
          function($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function(o) {
                return o.selected
              })
              .map(function(o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.$set(
              _vm.$store.state,
              "colorSpace",
              $event.target.multiple ? $$selectedVal : $$selectedVal[0]
            )
          },
          function($event) {
            _vm.$store.commit("updateLayerName")
          }
        ]
      }
    },
    [
      _c("option", [_vm._v("rgb")]),
      _vm._v(" "),
      _c("option", [_vm._v("hsl")]),
      _vm._v(" "),
      _c("option", [_vm._v("lab")]),
      _vm._v(" "),
      _c("option", [_vm._v("lch")]),
      _vm._v(" "),
      _c("option", [_vm._v("lrgb")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d3743ba\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/select-timing.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2d3743ba","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/select-timing.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "select",
    {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.$store.state.timingFunction,
          expression: "$store.state.timingFunction"
        }
      ],
      staticClass: "u-input",
      on: {
        change: [
          function($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function(o) {
                return o.selected
              })
              .map(function(o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.$set(
              _vm.$store.state,
              "timingFunction",
              $event.target.multiple ? $$selectedVal : $$selectedVal[0]
            )
          },
          function($event) {
            _vm.$store.commit("updateXYXY")
          }
        ]
      }
    },
    [
      _c("option", [_vm._v("linear")]),
      _vm._v(" "),
      _c("option", [_vm._v("ease")]),
      _vm._v(" "),
      _c("option", [_vm._v("ease-in")]),
      _vm._v(" "),
      _c("option", [_vm._v("ease-out")]),
      _vm._v(" "),
      _c("option", [_vm._v("ease-in-out")]),
      _vm._v(" "),
      _c("option", [_vm._v("cubic-bezier")])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49621e0e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/App.vue":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49621e0e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/App.vue ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "vue" } }, [
    _c("div", { staticClass: "c-gradientEditor-settings u-grid" }, [
      _c(
        "div",
        [
          _c("div", { staticClass: "c-gradientEditor-label" }, [
            _vm._v("\n        Easing function\n      ")
          ]),
          _vm._v(" "),
          _c("select-timing")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("div", { staticClass: "c-gradientEditor-label" }, [
            _vm._v("\n        Color space\n      ")
          ]),
          _vm._v(" "),
          _c("select-color-space")
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "c-gradientEditor-ease u-position-relative" }, [
        _c(
          "div",
          { staticClass: "u-aspect--1-1" },
          [_c("easing-preview"), _vm._v(" "), _c("easing-edit")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "c-gradientEditor-buttons" }, [
        _c("div", [
          _c("div", { staticClass: "c-gradientEditor-label" }, [
            _vm._v("\n          Copy CSS\n        ")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "clipboard",
                  rawName: "v-clipboard:copy",
                  value: _vm.$store.state.css,
                  expression: "$store.state.css",
                  arg: "copy"
                }
              ],
              staticClass: "u-input u-input--inline",
              on: {
                click: function($event) {
                  _vm.showMessage("CSS copied!")
                }
              }
            },
            [_c("clipboard-icon", { staticClass: "u-icon" })],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "u-flex" }, [
          _c(
            "a",
            {
              staticClass: "u-input u-input--inline",
              attrs: { href: "" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.openUrl(
                    "https://github.com/larsenwork/sketch-easing-gradient#readme"
                  )
                }
              }
            },
            [_c("github-icon", { staticClass: "u-icon" })],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "u-input u-input--inline u-marginLeft",
              attrs: { href: "" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.openUrl(
                    "https://twitter.com/intent/follow?screen_name=larsenwork"
                  )
                }
              }
            },
            [_c("twitter-icon", { staticClass: "u-icon" })],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aeade52c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/step-edit.vue":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-aeade52c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/step-edit.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "label",
      {
        staticClass: "c-gradientEditor-label",
        attrs: { for: "c-gradientEditor-input-steps-number" }
      },
      [_vm._v("\n    Steps number (2-100)\n  ")]
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.$store.state.gradient.steps.number,
          expression: "$store.state.gradient.steps.number"
        }
      ],
      staticClass: "u-marginBottom u-input",
      attrs: {
        id: "c-gradientEditor-input-steps-number",
        type: "number",
        min: "2",
        max: "100"
      },
      domProps: { value: _vm.$store.state.gradient.steps.number },
      on: {
        keypress: function($event) {
          _vm.isNumber($event)
        },
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(
            _vm.$store.state.gradient.steps,
            "number",
            $event.target.value
          )
        }
      }
    }),
    _vm._v(" "),
    _c(
      "label",
      {
        staticClass: "c-gradientEditor-label",
        attrs: { for: "c-gradientEditor-input-steps-number" }
      },
      [_vm._v("\n    Steps skip\n  ")]
    ),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.$store.state.gradient.steps.skip,
            expression: "$store.state.gradient.steps.skip"
          }
        ],
        staticClass: "u-input",
        attrs: { id: "c-gradientEditor-input-steps-number" },
        on: {
          change: [
            function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.$set(
                _vm.$store.state.gradient.steps,
                "skip",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            },
            function($event) {
              _vm.$store.commit("updateLayerName")
            }
          ]
        }
      },
      [
        _c("option", [_vm._v("skip-none")]),
        _vm._v(" "),
        _c("option", [_vm._v("skip-both")]),
        _vm._v(" "),
        _c("option", [_vm._v("skip-start")]),
        _vm._v(" "),
        _c("option", [_vm._v("skip-end")])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c62397aa\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/easing-edit.vue":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c62397aa","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/easing-edit.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "c-easingEdit u-position-cover",
      on: {
        touchmove: _vm.move,
        touchend: function($event) {
          $event.preventDefault()
          return _vm.up($event)
        }
      }
    },
    [
      _c(
        "svg",
        {
          staticClass: "c-easingEdit-lines u-position-cover",
          attrs: { viewBox: "0 0 1 1" }
        },
        [
          _c("line", {
            staticClass: "c-easingEdit-thinLine",
            attrs: { x1: ".25", y1: "0", x2: ".25", y2: "1" }
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "c-easingEdit-thinLine",
            attrs: { x1: ".5", y1: "0", x2: ".5", y2: "1" }
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "c-easingEdit-thinLine",
            attrs: { x1: ".75", y1: "0", x2: ".75", y2: "1" }
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "c-easingEdit-thinLine",
            attrs: { x1: "0", y1: ".25", x2: "1", y2: ".25" }
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "c-easingEdit-thinLine",
            attrs: { x1: "0", y1: ".5", x2: "1", y2: ".5" }
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "c-easingEdit-thinLine",
            attrs: { x1: "0", y1: ".75", x2: "1", y2: ".75" }
          }),
          _vm._v(" "),
          _c("rect", {
            staticClass: "c-easingEdit-helpLine",
            attrs: { x: "0", y: "0", width: "1", height: "1" }
          }),
          _vm._v(" "),
          _vm.$store.state.gradient.ease1.x > 0 ||
          _vm.$store.state.gradient.ease1.y > 0
            ? _c("line", {
                staticClass: "c-easingEdit-line",
                attrs: {
                  x2: _vm.$store.state.gradient.ease1.x,
                  y2: 1 - _vm.$store.state.gradient.ease1.y,
                  x1: "0",
                  y1: "1"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$store.state.gradient.ease2.x < 1 ||
          _vm.$store.state.gradient.ease2.y < 1
            ? _c("line", {
                staticClass: "c-easingEdit-line",
                attrs: {
                  x2: _vm.$store.state.gradient.ease2.x,
                  y2: 1 - _vm.$store.state.gradient.ease2.y,
                  x1: "1",
                  y1: "0"
                }
              })
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "u-knob",
        style:
          "left: " +
          _vm.$store.state.gradient.ease1.x * 100 +
          "%; top: " +
          (100 - _vm.$store.state.gradient.ease1.y * 100) +
          "%",
        on: {
          mousedown: function($event) {
            _vm.down($event, "ease1")
          },
          touchstart: function($event) {
            $event.preventDefault()
            _vm.down($event, "ease1")
          }
        }
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "u-knob",
        style:
          "left: " +
          _vm.$store.state.gradient.ease2.x * 100 +
          "%; top: " +
          (100 - _vm.$store.state.gradient.ease2.y * 100) +
          "%",
        on: {
          mousedown: function($event) {
            _vm.down($event, "ease2")
          },
          touchstart: function($event) {
            $event.preventDefault()
            _vm.down($event, "ease2")
          }
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-feb8dd92\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/easing-preview.vue":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-feb8dd92","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/easing-preview.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "svg",
      {
        staticClass: "c-easingPreview u-position-cover",
        attrs: { viewBox: "0 0 1 1" }
      },
      [
        _c("path", {
          staticClass: "c-easingPreview-path",
          attrs: {
            d:
              "M0 1C " +
              _vm.$store.state.gradient.ease1.x +
              " " +
              (1 - _vm.$store.state.gradient.ease1.y) +
              " " +
              _vm.$store.state.gradient.ease2.x +
              " " +
              (1 - _vm.$store.state.gradient.ease2.y) +
              " 1 0"
          }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/App.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/App.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader?sourceMap!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/App.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d4422e5a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-edit.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-edit.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./easing-edit.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2231451e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-preview.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-preview.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./easing-preview.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-preview.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("404d94a7", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {}
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/App.vue":
/*!***************************!*\
  !*** ./resources/App.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ "./node_modules/@skpm/builder/node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/App.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_49621e0e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-49621e0e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49621e0e\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/App.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../node_modules/vue-loader/lib/selector?type=styles&index=0!./App.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/App.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_49621e0e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_49621e0e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/App.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/components/easing-edit.vue":
/*!**********************************************!*\
  !*** ./resources/components/easing-edit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_easing_edit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./easing-edit.vue */ "./node_modules/@skpm/builder/node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/components/easing-edit.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_c62397aa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_easing_edit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-c62397aa","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./easing-edit.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c62397aa\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/easing-edit.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./easing-edit.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-edit.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_easing_edit_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_c62397aa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_easing_edit_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_c62397aa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_easing_edit_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/easing-edit.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/components/easing-preview.vue":
/*!*************************************************!*\
  !*** ./resources/components/easing-preview.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_feb8dd92_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_easing_preview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-feb8dd92","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./easing-preview.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-feb8dd92\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/easing-preview.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./easing-preview.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/components/easing-preview.vue")
}
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_feb8dd92_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_easing_preview_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_feb8dd92_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_easing_preview_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/easing-preview.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/components/helpers/ease-map.js":
/*!**************************************************!*\
  !*** ./resources/components/helpers/ease-map.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'ease-in-out': {
    x1: 0.42,
    y1: 0,
    x2: 0.58,
    y2: 1
  },
  'ease-out': {
    x1: 0,
    y1: 0,
    x2: 0.58,
    y2: 1
  },
  'ease-in': {
    x1: 0.42,
    y1: 0,
    x2: 1,
    y2: 1
  },
  ease: {
    x1: 0.25,
    y1: 0.1,
    x2: 0.25,
    y2: 1
  },
  linear: {
    x1: 0.25,
    y1: 0.25,
    x2: 0.75,
    y2: 0.75
  },
  '0.42, 0, 0.58, 1': 'ease-in-out',
  '0, 0, 0.58, 1': 'ease-out',
  '0.42, 0, 1, 1': 'ease-in',
  '0.25, 0.1, 0.25, 1': 'ease',
  '0.25, 0.25, 0.75, 0.75': 'linear'
});

/***/ }),

/***/ "./resources/components/mixins/mouse.js":
/*!**********************************************!*\
  !*** ./resources/components/mixins/mouse.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttleit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttleit */ "./node_modules/throttleit/index.js");
/* harmony import */ var throttleit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(throttleit__WEBPACK_IMPORTED_MODULE_0__);

var throttleDuration = 1000 / 60;
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    document.addEventListener('mousemove', function (event) {
      _this.move(event);
    });
    document.addEventListener('mouseup', this.up);
  },
  methods: {
    up: function up() {
      this.$store.commit('mouseUp');
    },
    down: function down(event, element) {
      this.$store.commit('parentBounding', event.target.parentElement.getBoundingClientRect());
      this.$store.commit('mouseDown', element);
    },
    move: throttleit__WEBPACK_IMPORTED_MODULE_0___default()(function (event) {
      // eslint-disable-line
      var element = this.$store.state.mouseElement;

      if (element) {
        var cursorX = typeof event.clientX === 'number' ? event.clientX : event.touches[0].clientX;
        var cursorY = typeof event.clientY === 'number' ? event.clientY : event.touches[0].clientY;
        var squareLeft = this.$store.state.parentBounding.left;
        var squareRight = this.$store.state.parentBounding.right;
        var squareTop = this.$store.state.parentBounding.top;
        var squareBottom = this.$store.state.parentBounding.bottom;
        /* eslint-disable no-nested-ternary */

        var xPosition = cursorX <= squareLeft ? 0 : cursorX >= squareRight ? 1 : (cursorX - squareLeft) / (squareRight - squareLeft);
        var yPosition = cursorY <= squareTop ? 1 : cursorY >= squareBottom ? 0 : 1 - (cursorY - squareTop) / (squareBottom - squareTop);
        /* eslint-enable no-nested-ternary */

        this.$store.commit({
          type: 'updateXY',
          element: element,
          x: xPosition,
          y: yPosition
        });
      }
    }, throttleDuration)
  }
});

/***/ }),

/***/ "./resources/components/select-color-space.vue":
/*!*****************************************************!*\
  !*** ./resources/components/select-color-space.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_04e133dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_color_space_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-04e133dc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./select-color-space.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04e133dc\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/select-color-space.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_04e133dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_color_space_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_04e133dc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_color_space_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/select-color-space.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/components/select-timing.vue":
/*!************************************************!*\
  !*** ./resources/components/select-timing.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d3743ba_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_timing_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2d3743ba","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./select-timing.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d3743ba\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/select-timing.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d3743ba_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_timing_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d3743ba_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_timing_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/select-timing.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/components/step-edit.vue":
/*!********************************************!*\
  !*** ./resources/components/step-edit.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_aeade52c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_step_edit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-aeade52c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./step-edit.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aeade52c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/components/step-edit.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_aeade52c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_step_edit_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_aeade52c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_step_edit_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/step-edit.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/main.js":
/*!***************************!*\
  !*** ./resources/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./resources/App.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./resources/store/index.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.css */ "./resources/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_4__);





vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default.a);
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  // eslint-disable-line no-new
  el: '#app',
  store: _store__WEBPACK_IMPORTED_MODULE_3__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./resources/store/index.js":
/*!**********************************!*\
  !*** ./resources/store/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sketch-module-web-view/client */ "./node_modules/sketch-module-web-view/client.js");
/* harmony import */ var sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var easing_coordinates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! easing-coordinates */ "./node_modules/easing-coordinates/dist/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_helpers_ease_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/helpers/ease-map */ "./resources/components/helpers/ease-map.js");






vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);

var rounded = function rounded(number) {
  var precission = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return +number.toFixed(precission);
};

function xyxyString(state) {
  return "".concat(rounded(state.gradient.ease1.x), ", ").concat(rounded(state.gradient.ease1.y), ", ").concat(rounded(state.gradient.ease2.x), ", ").concat(rounded(state.gradient.ease2.y));
}

function updateColorStops(state) {
  var coordinates = Object(easing_coordinates__WEBPACK_IMPORTED_MODULE_3__["cubicCoordinates"])(state.gradient.ease1.x, state.gradient.ease1.y, state.gradient.ease2.x, state.gradient.ease2.y);
  var colorCoordinates = coordinates.map(function (obj) {
    return {
      position: obj.x,
      color: chroma_js__WEBPACK_IMPORTED_MODULE_4___default.a.mix(state.startColor, state.stopColor, obj.y, state.colorSpace).rgba(false)
    };
  });
  var cssArray = colorCoordinates.map(function (obj) {
    return "".concat(chroma_js__WEBPACK_IMPORTED_MODULE_4___default()(obj.color).css('hsl'), " ").concat(rounded(obj.position * 100), "%");
  });
  state.css = "linear-gradient(\n  ".concat(cssArray.join(',\n  '), "\n);");
  sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_2___default()('updateGradient', JSON.stringify(colorCoordinates));
}

function _updateLayerName(state) {
  if (state.timingFunction.includes('ease') || state.timingFunction.includes('linear')) {
    sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_2___default()('updateName', "".concat(state.timingFunction, ";").concat(state.colorSpace));
  } else if (state.timingFunction.includes('cubic-bezier')) {
    var bezierFunc = "".concat(state.timingFunction, "(").concat(xyxyString(state), ")");
    sketch_module_web_view_client__WEBPACK_IMPORTED_MODULE_2___default()('updateName', "".concat(bezierFunc, ";").concat(state.colorSpace));
  }

  updateColorStops(state);
}

function updateTimingFunction(state) {
  var xyxy = xyxyString(state);
  state.timingFunction = _components_helpers_ease_map__WEBPACK_IMPORTED_MODULE_5__["default"][xyxy] ? _components_helpers_ease_map__WEBPACK_IMPORTED_MODULE_5__["default"][xyxy] : 'cubic-bezier';

  _updateLayerName(state);
}

/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    startColor: '',
    stopColor: '',
    timingFunction: '',
    colorSpace: 'lrgb',
    parentBounding: {},
    mouseElement: '',
    css: '',
    gradient: {
      ease1: {
        x: 0.42,
        y: 0
      },
      ease2: {
        x: 0.58,
        y: 1
      },
      steps: {
        number: 4,
        skip: 'skip-none'
      }
    }
  },
  mutations: {
    mouseDown: function mouseDown(state, element) {
      state.mouseElement = element;
    },
    mouseUp: function mouseUp(state) {
      state.mouseElement = '';
    },
    parentBounding: function parentBounding(state, obj) {
      state.parentBounding = obj;
    },
    updateXY: function updateXY(state, obj) {
      state.gradient["".concat(state.mouseElement)].x = obj.x;
      state.gradient["".concat(state.mouseElement)].y = obj.y;
      updateTimingFunction(state);
    },
    updateXYXY: function updateXYXY(state, bezierParams) {
      var xy = bezierParams || _components_helpers_ease_map__WEBPACK_IMPORTED_MODULE_5__["default"][state.timingFunction];
      state.gradient.ease1.x = xy.x1;
      state.gradient.ease1.y = xy.y1;
      state.gradient.ease2.x = xy.x2;
      state.gradient.ease2.y = xy.y2;

      _updateLayerName(state);
    },
    updateLayerName: function updateLayerName(state) {
      _updateLayerName(state);
    }
  }
}));

/***/ }),

/***/ "./resources/styles/main.css":
/*!***********************************!*\
  !*** ./resources/styles/main.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./main.css */ "./node_modules/css-loader/index.js!./resources/styles/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map