/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n44 = 0, F = function F() {}; return { s: F, n: function n() { return _n44 >= r.length ? { done: !0 } : { done: !1, value: r[_n44++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! markdown-it 14.1.0 https://github.com/markdown-it/markdown-it @license MIT */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = {};
  function e(r, n) {
    "string" != typeof n && (n = e.defaultChars);
    var s = function (e) {
      var r = t[e];
      if (r) return r;
      r = t[e] = [];
      for (var _t2 = 0; _t2 < 128; _t2++) {
        var _e2 = String.fromCharCode(_t2);
        r.push(_e2);
      }
      for (var _t3 = 0; _t3 < e.length; _t3++) {
        var _n = e.charCodeAt(_t3);
        r[_n] = "%" + ("0" + _n.toString(16).toUpperCase()).slice(-2);
      }
      return r;
    }(n);
    return r.replace(/(%[a-f0-9]{2})+/gi, function (t) {
      var e = "";
      for (var _r = 0, _n2 = t.length; _r < _n2; _r += 3) {
        var _i = parseInt(t.slice(_r + 1, _r + 3), 16);
        if (_i < 128) e += s[_i];else {
          if (192 == (224 & _i) && _r + 3 < _n2) {
            var _n3 = parseInt(t.slice(_r + 4, _r + 6), 16);
            if (128 == (192 & _n3)) {
              var _t4 = _i << 6 & 1984 | 63 & _n3;
              e += _t4 < 128 ? "\uFFFD\uFFFD" : String.fromCharCode(_t4), _r += 3;
              continue;
            }
          }
          if (224 == (240 & _i) && _r + 6 < _n2) {
            var _n4 = parseInt(t.slice(_r + 4, _r + 6), 16),
              _s = parseInt(t.slice(_r + 7, _r + 9), 16);
            if (128 == (192 & _n4) && 128 == (192 & _s)) {
              var _t5 = _i << 12 & 61440 | _n4 << 6 & 4032 | 63 & _s;
              e += _t5 < 2048 || _t5 >= 55296 && _t5 <= 57343 ? "\uFFFD\uFFFD\uFFFD" : String.fromCharCode(_t5), _r += 6;
              continue;
            }
          }
          if (240 == (248 & _i) && _r + 9 < _n2) {
            var _n5 = parseInt(t.slice(_r + 4, _r + 6), 16),
              _s2 = parseInt(t.slice(_r + 7, _r + 9), 16),
              _o = parseInt(t.slice(_r + 10, _r + 12), 16);
            if (128 == (192 & _n5) && 128 == (192 & _s2) && 128 == (192 & _o)) {
              var _t6 = _i << 18 & 1835008 | _n5 << 12 & 258048 | _s2 << 6 & 4032 | 63 & _o;
              _t6 < 65536 || _t6 > 1114111 ? e += "\uFFFD\uFFFD\uFFFD\uFFFD" : (_t6 -= 65536, e += String.fromCharCode(55296 + (_t6 >> 10), 56320 + (1023 & _t6))), _r += 9;
              continue;
            }
          }
          e += "\uFFFD";
        }
      }
      return e;
    });
  }
  e.defaultChars = ";/?:@&=+$,#", e.componentChars = "";
  var r = {};
  function n(t, e, s) {
    "string" != typeof e && (s = e, e = n.defaultChars), void 0 === s && (s = !0);
    var i = function (t) {
      var e = r[t];
      if (e) return e;
      e = r[t] = [];
      for (var _t7 = 0; _t7 < 128; _t7++) {
        var _r2 = String.fromCharCode(_t7);
        /^[0-9a-z]$/i.test(_r2) ? e.push(_r2) : e.push("%" + ("0" + _t7.toString(16).toUpperCase()).slice(-2));
      }
      for (var _r3 = 0; _r3 < t.length; _r3++) e[t.charCodeAt(_r3)] = t[_r3];
      return e;
    }(e);
    var o = "";
    for (var _e3 = 0, _r4 = t.length; _e3 < _r4; _e3++) {
      var _n6 = t.charCodeAt(_e3);
      if (s && 37 === _n6 && _e3 + 2 < _r4 && /^[0-9a-f]{2}$/i.test(t.slice(_e3 + 1, _e3 + 3))) o += t.slice(_e3, _e3 + 3), _e3 += 2;else if (_n6 < 128) o += i[_n6];else if (_n6 >= 55296 && _n6 <= 57343) {
        if (_n6 >= 55296 && _n6 <= 56319 && _e3 + 1 < _r4) {
          var _r5 = t.charCodeAt(_e3 + 1);
          if (_r5 >= 56320 && _r5 <= 57343) {
            o += encodeURIComponent(t[_e3] + t[_e3 + 1]), _e3++;
            continue;
          }
        }
        o += "%EF%BF%BD";
      } else o += encodeURIComponent(t[_e3]);
    }
    return o;
  }
  function s(t) {
    var e = "";
    return e += t.protocol || "", e += t.slashes ? "//" : "", e += t.auth ? t.auth + "@" : "", t.hostname && -1 !== t.hostname.indexOf(":") ? e += "[" + t.hostname + "]" : e += t.hostname || "", e += t.port ? ":" + t.port : "", e += t.pathname || "", e += t.search || "", e += t.hash || "", e;
  }
  function i() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()";
  var o = /^([a-z0-9.+-]+:)/i,
    u = /:[0-9]*$/,
    c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    a = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
    l = ["'"].concat(a),
    h = ["%", "/", "?", ";", "#"].concat(l),
    p = ["/", "?", "#"],
    f = /^[+a-z0-9A-Z_-]{0,63}$/,
    d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    _ = {
      javascript: !0,
      "javascript:": !0
    },
    m = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    };
  function g(t, e) {
    if (t && t instanceof i) return t;
    var r = new i();
    return r.parse(t, e), r;
  }
  i.prototype.parse = function (t, e) {
    var r,
      n,
      s,
      i = t;
    if (i = i.trim(), !e && 1 === t.split("#").length) {
      var _t8 = c.exec(i);
      if (_t8) return this.pathname = _t8[1], _t8[2] && (this.search = _t8[2]), this;
    }
    var u = o.exec(i);
    if (u && (u = u[0], r = u.toLowerCase(), this.protocol = u, i = i.substr(u.length)), (e || u || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (s = "//" === i.substr(0, 2), !s || u && _[u] || (i = i.substr(2), this.slashes = !0)), !_[u] && (s || u && !m[u])) {
      var _t9,
        _e4,
        _r6 = -1;
      for (var _t10 = 0; _t10 < p.length; _t10++) n = i.indexOf(p[_t10]), -1 !== n && (-1 === _r6 || n < _r6) && (_r6 = n);
      _e4 = -1 === _r6 ? i.lastIndexOf("@") : i.lastIndexOf("@", _r6), -1 !== _e4 && (_t9 = i.slice(0, _e4), i = i.slice(_e4 + 1), this.auth = _t9), _r6 = -1;
      for (var _t11 = 0; _t11 < h.length; _t11++) n = i.indexOf(h[_t11]), -1 !== n && (-1 === _r6 || n < _r6) && (_r6 = n);
      -1 === _r6 && (_r6 = i.length), ":" === i[_r6 - 1] && _r6--;
      var _s3 = i.slice(0, _r6);
      i = i.slice(_r6), this.parseHost(_s3), this.hostname = this.hostname || "";
      var _o2 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!_o2) {
        var _t12 = this.hostname.split(/\./);
        for (var _e5 = 0, _r7 = _t12.length; _e5 < _r7; _e5++) {
          var _r8 = _t12[_e5];
          if (_r8 && !_r8.match(f)) {
            var _n7 = "";
            for (var _t13 = 0, _e6 = _r8.length; _t13 < _e6; _t13++) _r8.charCodeAt(_t13) > 127 ? _n7 += "x" : _n7 += _r8[_t13];
            if (!_n7.match(f)) {
              var _n8 = _t12.slice(0, _e5),
                _s4 = _t12.slice(_e5 + 1),
                _o3 = _r8.match(d);
              _o3 && (_n8.push(_o3[1]), _s4.unshift(_o3[2])), _s4.length && (i = _s4.join(".") + i), this.hostname = _n8.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > 255 && (this.hostname = ""), _o2 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var a = i.indexOf("#");
    -1 !== a && (this.hash = i.substr(a), i = i.slice(0, a));
    var l = i.indexOf("?");
    return -1 !== l && (this.search = i.substr(l), i = i.slice(0, l)), i && (this.pathname = i), m[r] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, i.prototype.parseHost = function (t) {
    var e = u.exec(t);
    e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
  };
  var k,
    D = Object.freeze({
      __proto__: null,
      decode: e,
      encode: n,
      format: s,
      parse: g
    }),
    C = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    y = /[\0-\x1F\x7F-\x9F]/,
    E = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
    A = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,
    b = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    F = Object.freeze({
      __proto__: null,
      Any: C,
      Cc: y,
      Cf: /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
      P: E,
      S: A,
      Z: b
    }),
    x = new Uint16Array("\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\uD835\uDD04rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\uD835\uDD38plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\uD835\uDC9Cign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\uD835\uDD05pf;\uC000\uD835\uDD39eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\uD835\uDC9Ep\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\uD835\uDD07\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\uD835\uDD3B\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\uD835\uDC9Frok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\uD835\uDD08rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\uD835\uDD3Csilon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\uD835\uDD09lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\uD835\uDD3DAll;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\uD835\uDD0A;\u62D9pf;\uC000\uD835\uDD3Eeater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\uD835\uDCA2;\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\uD835\uDD40a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\uD835\uDD0Dpf;\uC000\uD835\uDD41\u01E3\u07C7\0\u07CCr;\uC000\uD835\uDCA5rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\uD835\uDD0Epf;\uC000\uD835\uDD42cr;\uC000\uD835\uDCA6\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\uD835\uDD0F\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\uD835\uDD43er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\uD835\uDD10nusPlus;\u6213pf;\uC000\uD835\uDD44c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\uD835\uDD11\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\uD835\uDCA9ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\uD835\uDD12rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\uD835\uDD46enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\uD835\uDCAAash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\uD835\uDD13i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\uD835\uDCAB;\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B\"\u4022r;\uC000\uD835\uDD14pf;\u611Acr;\uC000\uD835\uDCAC\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\uD835\uDD16ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\uD835\uDD4A\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\uD835\uDCAEar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\uD835\uDD17\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\uD835\uDD4BipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\uD835\uDCAFrok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\uD835\uDD18rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\uD835\uDD4C\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\uD835\uDCB0ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\uD835\uDD19pf;\uC000\uD835\uDD4Dcr;\uC000\uD835\uDCB1dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\uD835\uDD1Apf;\uC000\uD835\uDD4Ecr;\uC000\uD835\uDCB2\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\uD835\uDD1B;\u439Epf;\uC000\uD835\uDD4Fcr;\uC000\uD835\uDCB3\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\uD835\uDD1Cpf;\uC000\uD835\uDD50cr;\uC000\uD835\uDCB4ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\uD835\uDCB5\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\uD835\uDD1Erave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\uD835\uDD52\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\uD835\uDCB6;\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\uD835\uDD1Fg\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\uD835\uDD53\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\uD835\uDCB7mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\uD835\uDD20\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\uD835\uDD54o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\uD835\uDCB8\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\uD835\uDD21ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\uD835\uDD55\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\uD835\uDCB9;\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\uD835\uDD22\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\uD835\uDD56\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\uD835\uDD23lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\uD835\uDD57\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\uD835\uDCBB\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\uD835\uDD24\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\uD835\uDD58\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\uD835\uDD25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\uD835\uDD59bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\uD835\uDCBDas\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\uD835\uDD26rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\uD835\uDD5Aa;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\uD835\uDCBEn\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\uD835\uDD27ath;\u4237pf;\uC000\uD835\uDD5B\u01E3\u23EC\0\u23F1r;\uC000\uD835\uDCBFrcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\uD835\uDD28reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\uD835\uDD5Ccr;\uC000\uD835\uDCC0\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\uD835\uDD29\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\uD835\uDD5Dus;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\uD835\uDCC1m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\uD835\uDD2Ao;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\uD835\uDD5E\u0100ct\u28F8\u28FDr;\uC000\uD835\uDCC2pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\uD835\uDD2B\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\uD835\uDD5F\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\uD835\uDCC3ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\uD835\uDD2C\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\uD835\uDD60\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\uD835\uDD2D\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\uD835\uDD61nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\uD835\uDCC5;\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\uD835\uDD2Epf;\uC000\uD835\uDD62rime;\u6057cr;\uC000\uD835\uDCC6\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\uD835\uDD2F\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\uD835\uDD63us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\uD835\uDCC7\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\uD835\uDD30\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\uD835\uDD64a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\uD835\uDCC8tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\uD835\uDD31\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\uD835\uDD65rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\uD835\uDCC9;\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\uD835\uDD32rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\uD835\uDD66\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\uD835\uDCCA\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\uD835\uDD33tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\uD835\uDD67ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\uD835\uDCCB\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\uD835\uDD34pf;\uC000\uD835\uDD68\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\uD835\uDCCC\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\uD835\uDD35\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\uD835\uDD69im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\uD835\uDCCD\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\uD835\uDD36cy;\u4457pf;\uC000\uD835\uDD6Acr;\uC000\uD835\uDCCE\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\uD835\uDD37cy;\u4436grarr;\u61DDpf;\uC000\uD835\uDD6Bcr;\uC000\uD835\uDCCF\u0100jn\u3B85\u3B87;\u600Dj;\u600C".split("").map(function (t) {
      return t.charCodeAt(0);
    })),
    w = new Uint16Array("\u0200aglq\t\x15\x18\x1B\u026D\x0F\0\0\x12p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function (t) {
      return t.charCodeAt(0);
    }));
  var v = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]),
    z = null !== (k = String.fromCodePoint) && void 0 !== k ? k : function (t) {
      var e = "";
      return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += String.fromCharCode(t), e;
    };
  var S;
  !function (t) {
    t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z";
  }(S || (S = {}));
  var q, B, L;
  function I(t) {
    return t >= S.ZERO && t <= S.NINE;
  }
  function M(t) {
    return t >= S.UPPER_A && t <= S.UPPER_F || t >= S.LOWER_A && t <= S.LOWER_F;
  }
  function T(t) {
    return t === S.EQUALS || function (t) {
      return t >= S.UPPER_A && t <= S.UPPER_Z || t >= S.LOWER_A && t <= S.LOWER_Z || I(t);
    }(t);
  }
  !function (t) {
    t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE";
  }(q || (q = {})), function (t) {
    t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity";
  }(B || (B = {})), function (t) {
    t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute";
  }(L || (L = {}));
  var R = /*#__PURE__*/function () {
    function R(t, e, r) {
      _classCallCheck(this, R);
      this.decodeTree = t, this.emitCodePoint = e, this.errors = r, this.state = B.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = L.Strict;
    }
    return _createClass(R, [{
      key: "startEntity",
      value: function startEntity(t) {
        this.decodeMode = t, this.state = B.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }
    }, {
      key: "write",
      value: function write(t, e) {
        switch (this.state) {
          case B.EntityStart:
            return t.charCodeAt(e) === S.NUM ? (this.state = B.NumericStart, this.consumed += 1, this.stateNumericStart(t, e + 1)) : (this.state = B.NamedEntity, this.stateNamedEntity(t, e));
          case B.NumericStart:
            return this.stateNumericStart(t, e);
          case B.NumericDecimal:
            return this.stateNumericDecimal(t, e);
          case B.NumericHex:
            return this.stateNumericHex(t, e);
          case B.NamedEntity:
            return this.stateNamedEntity(t, e);
        }
      }
    }, {
      key: "stateNumericStart",
      value: function stateNumericStart(t, e) {
        return e >= t.length ? -1 : (32 | t.charCodeAt(e)) === S.LOWER_X ? (this.state = B.NumericHex, this.consumed += 1, this.stateNumericHex(t, e + 1)) : (this.state = B.NumericDecimal, this.stateNumericDecimal(t, e));
      }
    }, {
      key: "addToNumericResult",
      value: function addToNumericResult(t, e, r, n) {
        if (e !== r) {
          var _s5 = r - e;
          this.result = this.result * Math.pow(n, _s5) + parseInt(t.substr(e, _s5), n), this.consumed += _s5;
        }
      }
    }, {
      key: "stateNumericHex",
      value: function stateNumericHex(t, e) {
        var r = e;
        for (; e < t.length;) {
          var _n9 = t.charCodeAt(e);
          if (!I(_n9) && !M(_n9)) return this.addToNumericResult(t, r, e, 16), this.emitNumericEntity(_n9, 3);
          e += 1;
        }
        return this.addToNumericResult(t, r, e, 16), -1;
      }
    }, {
      key: "stateNumericDecimal",
      value: function stateNumericDecimal(t, e) {
        var r = e;
        for (; e < t.length;) {
          var _n10 = t.charCodeAt(e);
          if (!I(_n10)) return this.addToNumericResult(t, r, e, 10), this.emitNumericEntity(_n10, 2);
          e += 1;
        }
        return this.addToNumericResult(t, r, e, 10), -1;
      }
    }, {
      key: "emitNumericEntity",
      value: function emitNumericEntity(t, e) {
        var r;
        if (this.consumed <= e) return null === (r = this.errors) || void 0 === r || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (t === S.SEMI) this.consumed += 1;else if (this.decodeMode === L.Strict) return 0;
        return this.emitCodePoint(function (t) {
          var e;
          return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : null !== (e = v.get(t)) && void 0 !== e ? e : t;
        }(this.result), this.consumed), this.errors && (t !== S.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }
    }, {
      key: "stateNamedEntity",
      value: function stateNamedEntity(t, e) {
        var r = this.decodeTree;
        var n = r[this.treeIndex],
          s = (n & q.VALUE_LENGTH) >> 14;
        for (; e < t.length; e++, this.excess++) {
          var _i2 = t.charCodeAt(e);
          if (this.treeIndex = P(r, n, this.treeIndex + Math.max(1, s), _i2), this.treeIndex < 0) return 0 === this.result || this.decodeMode === L.Attribute && (0 === s || T(_i2)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (n = r[this.treeIndex], s = (n & q.VALUE_LENGTH) >> 14, 0 !== s) {
            if (_i2 === S.SEMI) return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== L.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }
    }, {
      key: "emitNotTerminatedNamedEntity",
      value: function emitNotTerminatedNamedEntity() {
        var t;
        var e = this.result,
          r = this.decodeTree,
          n = (r[e] & q.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(e, n, this.consumed), null === (t = this.errors) || void 0 === t || t.missingSemicolonAfterCharacterReference(), this.consumed;
      }
    }, {
      key: "emitNamedEntityData",
      value: function emitNamedEntityData(t, e, r) {
        var n = this.decodeTree;
        return this.emitCodePoint(1 === e ? n[t] & ~q.VALUE_LENGTH : n[t + 1], r), 3 === e && this.emitCodePoint(n[t + 2], r), r;
      }
    }, {
      key: "end",
      value: function end() {
        var t;
        switch (this.state) {
          case B.NamedEntity:
            return 0 === this.result || this.decodeMode === L.Attribute && this.result !== this.treeIndex ? 0 : this.emitNotTerminatedNamedEntity();
          case B.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case B.NumericHex:
            return this.emitNumericEntity(0, 3);
          case B.NumericStart:
            return null === (t = this.errors) || void 0 === t || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case B.EntityStart:
            return 0;
        }
      }
    }]);
  }();
  function N(t) {
    var e = "";
    var r = new R(t, function (t) {
      return e += z(t);
    });
    return function (t, n) {
      var s = 0,
        i = 0;
      for (; (i = t.indexOf("&", i)) >= 0;) {
        e += t.slice(s, i), r.startEntity(n);
        var _o4 = r.write(t, i + 1);
        if (_o4 < 0) {
          s = i + r.end();
          break;
        }
        s = i + _o4, i = 0 === _o4 ? s + 1 : s;
      }
      var o = e + t.slice(s);
      return e = "", o;
    };
  }
  function P(t, e, r, n) {
    var s = (e & q.BRANCH_LENGTH) >> 7,
      i = e & q.JUMP_TABLE;
    if (0 === s) return 0 !== i && n === i ? r : -1;
    if (i) {
      var _e7 = n - i;
      return _e7 < 0 || _e7 >= s ? -1 : t[r + _e7] - 1;
    }
    var o = r,
      u = o + s - 1;
    for (; o <= u;) {
      var _e8 = o + u >>> 1,
        _r9 = t[_e8];
      if (_r9 < n) o = _e8 + 1;else {
        if (!(_r9 > n)) return t[_e8 + s];
        u = _e8 - 1;
      }
    }
    return -1;
  }
  var O = N(x);
  function j(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : L.Legacy;
    return O(t, e);
  }
  function Z(t) {
    return "[object String]" === function (t) {
      return Object.prototype.toString.call(t);
    }(t);
  }
  N(w);
  var $ = Object.prototype.hasOwnProperty;
  function U(t) {
    return Array.prototype.slice.call(arguments, 1).forEach(function (e) {
      if (e) {
        if ("object" != _typeof(e)) throw new TypeError(e + "must be object");
        Object.keys(e).forEach(function (r) {
          t[r] = e[r];
        });
      }
    }), t;
  }
  function H(t, e, r) {
    return [].concat(t.slice(0, e), r, t.slice(e + 1));
  }
  function V(t) {
    return !(t >= 55296 && t <= 57343) && !(t >= 64976 && t <= 65007) && !!(65535 & ~t && 65534 != (65535 & t)) && !(t >= 0 && t <= 8) && 11 !== t && !(t >= 14 && t <= 31) && !(t >= 127 && t <= 159) && !(t > 1114111);
  }
  function G(t) {
    if (t > 65535) {
      var _e9 = 55296 + ((t -= 65536) >> 10),
        _r10 = 56320 + (1023 & t);
      return String.fromCharCode(_e9, _r10);
    }
    return String.fromCharCode(t);
  }
  var W = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
    J = new RegExp(W.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"),
    Q = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
  function X(t) {
    return t.indexOf("\\") < 0 && t.indexOf("&") < 0 ? t : t.replace(J, function (t, e, r) {
      return e || function (t, e) {
        if (35 === e.charCodeAt(0) && Q.test(e)) {
          var _r11 = "x" === e[1].toLowerCase() ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
          return V(_r11) ? G(_r11) : t;
        }
        var r = j(t);
        return r !== t ? r : t;
      }(t, r);
    });
  }
  var Y = /[&<>"]/,
    K = /[&<>"]/g,
    tt = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
  function et(t) {
    return tt[t];
  }
  function rt(t) {
    return Y.test(t) ? t.replace(K, et) : t;
  }
  var nt = /[.?*+^$[\]\\(){}|-]/g;
  function st(t) {
    switch (t) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function it(t) {
    if (t >= 8192 && t <= 8202) return !0;
    switch (t) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  function ot(t) {
    return E.test(t) || A.test(t);
  }
  function ut(t) {
    switch (t) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function ct(t) {
    return t = t.trim().replace(/\s+/g, " "), "\u1E7E" === "\u1E9E".toLowerCase() && (t = t.replace(/\u1e9e/g, "\xdf")), t.toLowerCase().toUpperCase();
  }
  var at = {
    mdurl: D,
    ucmicro: F
  };
  var lt = Object.freeze({
    __proto__: null,
    arrayReplaceAt: H,
    assign: U,
    escapeHtml: rt,
    escapeRE: function escapeRE(t) {
      return t.replace(nt, "\\$&");
    },
    fromCodePoint: G,
    has: function has(t, e) {
      return $.call(t, e);
    },
    isMdAsciiPunct: ut,
    isPunctChar: ot,
    isSpace: st,
    isString: Z,
    isValidEntityCode: V,
    isWhiteSpace: it,
    lib: at,
    normalizeReference: ct,
    unescapeAll: X,
    unescapeMd: function unescapeMd(t) {
      return t.indexOf("\\") < 0 ? t : t.replace(W, "$1");
    }
  });
  var ht = Object.freeze({
    __proto__: null,
    parseLinkDestination: function parseLinkDestination(t, e, r) {
      var n,
        s = e;
      var i = {
        ok: !1,
        pos: 0,
        str: ""
      };
      if (60 === t.charCodeAt(s)) {
        for (s++; s < r;) {
          if (n = t.charCodeAt(s), 10 === n) return i;
          if (60 === n) return i;
          if (62 === n) return i.pos = s + 1, i.str = X(t.slice(e + 1, s)), i.ok = !0, i;
          92 === n && s + 1 < r ? s += 2 : s++;
        }
        return i;
      }
      var o = 0;
      for (; s < r && (n = t.charCodeAt(s), 32 !== n) && !(n < 32 || 127 === n);) if (92 === n && s + 1 < r) {
        if (32 === t.charCodeAt(s + 1)) break;
        s += 2;
      } else {
        if (40 === n && (o++, o > 32)) return i;
        if (41 === n) {
          if (0 === o) break;
          o--;
        }
        s++;
      }
      return e === s || 0 !== o || (i.str = X(t.slice(e, s)), i.pos = s, i.ok = !0), i;
    },
    parseLinkLabel: function parseLinkLabel(t, e, r) {
      var n, s, i, o;
      var u = t.posMax,
        c = t.pos;
      for (t.pos = e + 1, n = 1; t.pos < u;) {
        if (i = t.src.charCodeAt(t.pos), 93 === i && (n--, 0 === n)) {
          s = !0;
          break;
        }
        if (o = t.pos, t.md.inline.skipToken(t), 91 === i) if (o === t.pos - 1) n++;else if (r) return t.pos = c, -1;
      }
      var a = -1;
      return s && (a = t.pos), t.pos = c, a;
    },
    parseLinkTitle: function parseLinkTitle(t, e, r, n) {
      var s,
        i = e;
      var o = {
        ok: !1,
        can_continue: !1,
        pos: 0,
        str: "",
        marker: 0
      };
      if (n) o.str = n.str, o.marker = n.marker;else {
        if (i >= r) return o;
        var _n11 = t.charCodeAt(i);
        if (34 !== _n11 && 39 !== _n11 && 40 !== _n11) return o;
        e++, i++, 40 === _n11 && (_n11 = 41), o.marker = _n11;
      }
      for (; i < r;) {
        if (s = t.charCodeAt(i), s === o.marker) return o.pos = i + 1, o.str += X(t.slice(e, i)), o.ok = !0, o;
        if (40 === s && 41 === o.marker) return o;
        92 === s && i + 1 < r && i++, i++;
      }
      return o.can_continue = !0, o.str += X(t.slice(e, i)), o;
    }
  });
  var pt = {};
  function ft() {
    this.rules = U({}, pt);
  }
  function dt() {
    this.__rules__ = [], this.__cache__ = null;
  }
  function _t(t, e, r) {
    this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
  }
  function mt(t, e, r) {
    this.src = t, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = e;
  }
  pt.code_inline = function (t, e, r, n, s) {
    var i = t[e];
    return "<code" + s.renderAttrs(i) + ">" + rt(i.content) + "</code>";
  }, pt.code_block = function (t, e, r, n, s) {
    var i = t[e];
    return "<pre" + s.renderAttrs(i) + "><code>" + rt(t[e].content) + "</code></pre>\n";
  }, pt.fence = function (t, e, r, n, s) {
    var i = t[e],
      o = i.info ? X(i.info).trim() : "";
    var u,
      c = "",
      a = "";
    if (o) {
      var _t14 = o.split(/(\s+)/g);
      c = _t14[0], a = _t14.slice(2).join("");
    }
    if (u = r.highlight && r.highlight(i.content, c, a) || rt(i.content), 0 === u.indexOf("<pre")) return u + "\n";
    if (o) {
      var _t15 = i.attrIndex("class"),
        _e10 = i.attrs ? i.attrs.slice() : [];
      _t15 < 0 ? _e10.push(["class", r.langPrefix + c]) : (_e10[_t15] = _e10[_t15].slice(), _e10[_t15][1] += " " + r.langPrefix + c);
      var _n12 = {
        attrs: _e10
      };
      return "<pre><code".concat(s.renderAttrs(_n12), ">").concat(u, "</code></pre>\n");
    }
    return "<pre><code".concat(s.renderAttrs(i), ">").concat(u, "</code></pre>\n");
  }, pt.image = function (t, e, r, n, s) {
    var i = t[e];
    return i.attrs[i.attrIndex("alt")][1] = s.renderInlineAsText(i.children, r, n), s.renderToken(t, e, r);
  }, pt.hardbreak = function (t, e, r) {
    return r.xhtmlOut ? "<br />\n" : "<br>\n";
  }, pt.softbreak = function (t, e, r) {
    return r.breaks ? r.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  }, pt.text = function (t, e) {
    return rt(t[e].content);
  }, pt.html_block = function (t, e) {
    return t[e].content;
  }, pt.html_inline = function (t, e) {
    return t[e].content;
  }, ft.prototype.renderAttrs = function (t) {
    var e, r, n;
    if (!t.attrs) return "";
    for (n = "", e = 0, r = t.attrs.length; e < r; e++) n += " " + rt(t.attrs[e][0]) + '="' + rt(t.attrs[e][1]) + '"';
    return n;
  }, ft.prototype.renderToken = function (t, e, r) {
    var n = t[e];
    var s = "";
    if (n.hidden) return "";
    n.block && -1 !== n.nesting && e && t[e - 1].hidden && (s += "\n"), s += (-1 === n.nesting ? "</" : "<") + n.tag, s += this.renderAttrs(n), 0 === n.nesting && r.xhtmlOut && (s += " /");
    var i = !1;
    if (n.block && (i = !0, 1 === n.nesting && e + 1 < t.length)) {
      var _r12 = t[e + 1];
      ("inline" === _r12.type || _r12.hidden || -1 === _r12.nesting && _r12.tag === n.tag) && (i = !1);
    }
    return s += i ? ">\n" : ">", s;
  }, ft.prototype.renderInline = function (t, e, r) {
    var n = "";
    var s = this.rules;
    for (var _i3 = 0, _o5 = t.length; _i3 < _o5; _i3++) {
      var _o6 = t[_i3].type;
      void 0 !== s[_o6] ? n += s[_o6](t, _i3, e, r, this) : n += this.renderToken(t, _i3, e);
    }
    return n;
  }, ft.prototype.renderInlineAsText = function (t, e, r) {
    var n = "";
    for (var _s6 = 0, _i4 = t.length; _s6 < _i4; _s6++) switch (t[_s6].type) {
      case "text":
      case "html_inline":
      case "html_block":
        n += t[_s6].content;
        break;
      case "image":
        n += this.renderInlineAsText(t[_s6].children, e, r);
        break;
      case "softbreak":
      case "hardbreak":
        n += "\n";
    }
    return n;
  }, ft.prototype.render = function (t, e, r) {
    var n = "";
    var s = this.rules;
    for (var _i5 = 0, _o7 = t.length; _i5 < _o7; _i5++) {
      var _o8 = t[_i5].type;
      "inline" === _o8 ? n += this.renderInline(t[_i5].children, e, r) : void 0 !== s[_o8] ? n += s[_o8](t, _i5, e, r, this) : n += this.renderToken(t, _i5, e, r);
    }
    return n;
  }, dt.prototype.__find__ = function (t) {
    for (var _e11 = 0; _e11 < this.__rules__.length; _e11++) if (this.__rules__[_e11].name === t) return _e11;
    return -1;
  }, dt.prototype.__compile__ = function () {
    var t = this,
      e = [""];
    t.__rules__.forEach(function (t) {
      t.enabled && t.alt.forEach(function (t) {
        e.indexOf(t) < 0 && e.push(t);
      });
    }), t.__cache__ = {}, e.forEach(function (e) {
      t.__cache__[e] = [], t.__rules__.forEach(function (r) {
        r.enabled && (e && r.alt.indexOf(e) < 0 || t.__cache__[e].push(r.fn));
      });
    });
  }, dt.prototype.at = function (t, e, r) {
    var n = this.__find__(t),
      s = r || {};
    if (-1 === n) throw new Error("Parser rule not found: " + t);
    this.__rules__[n].fn = e, this.__rules__[n].alt = s.alt || [], this.__cache__ = null;
  }, dt.prototype.before = function (t, e, r, n) {
    var s = this.__find__(t),
      i = n || {};
    if (-1 === s) throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(s, 0, {
      name: e,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, dt.prototype.after = function (t, e, r, n) {
    var s = this.__find__(t),
      i = n || {};
    if (-1 === s) throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(s + 1, 0, {
      name: e,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, dt.prototype.push = function (t, e, r) {
    var n = r || {};
    this.__rules__.push({
      name: t,
      enabled: !0,
      fn: e,
      alt: n.alt || []
    }), this.__cache__ = null;
  }, dt.prototype.enable = function (t, e) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function (t) {
      var n = this.__find__(t);
      if (n < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + t);
      }
      this.__rules__[n].enabled = !0, r.push(t);
    }, this), this.__cache__ = null, r;
  }, dt.prototype.enableOnly = function (t, e) {
    Array.isArray(t) || (t = [t]), this.__rules__.forEach(function (t) {
      t.enabled = !1;
    }), this.enable(t, e);
  }, dt.prototype.disable = function (t, e) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function (t) {
      var n = this.__find__(t);
      if (n < 0) {
        if (e) return;
        throw new Error("Rules manager: invalid rule name " + t);
      }
      this.__rules__[n].enabled = !1, r.push(t);
    }, this), this.__cache__ = null, r;
  }, dt.prototype.getRules = function (t) {
    return null === this.__cache__ && this.__compile__(), this.__cache__[t] || [];
  }, _t.prototype.attrIndex = function (t) {
    if (!this.attrs) return -1;
    var e = this.attrs;
    for (var _r13 = 0, _n13 = e.length; _r13 < _n13; _r13++) if (e[_r13][0] === t) return _r13;
    return -1;
  }, _t.prototype.attrPush = function (t) {
    this.attrs ? this.attrs.push(t) : this.attrs = [t];
  }, _t.prototype.attrSet = function (t, e) {
    var r = this.attrIndex(t),
      n = [t, e];
    r < 0 ? this.attrPush(n) : this.attrs[r] = n;
  }, _t.prototype.attrGet = function (t) {
    var e = this.attrIndex(t);
    var r = null;
    return e >= 0 && (r = this.attrs[e][1]), r;
  }, _t.prototype.attrJoin = function (t, e) {
    var r = this.attrIndex(t);
    r < 0 ? this.attrPush([t, e]) : this.attrs[r][1] = this.attrs[r][1] + " " + e;
  }, mt.prototype.Token = _t;
  var gt = /\r\n?|\n/g,
    kt = /\0/g;
  function Dt(t) {
    return /^<\/a\s*>/i.test(t);
  }
  var Ct = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    yt = /\((c|tm|r)\)/i,
    Et = /\((c|tm|r)\)/gi,
    At = {
      c: "\xa9",
      r: "\xae",
      tm: "\u2122"
    };
  function bt(t, e) {
    return At[e.toLowerCase()];
  }
  function Ft(t) {
    var e = 0;
    for (var _r14 = t.length - 1; _r14 >= 0; _r14--) {
      var _n14 = t[_r14];
      "text" !== _n14.type || e || (_n14.content = _n14.content.replace(Et, bt)), "link_open" === _n14.type && "auto" === _n14.info && e--, "link_close" === _n14.type && "auto" === _n14.info && e++;
    }
  }
  function xt(t) {
    var e = 0;
    for (var _r15 = t.length - 1; _r15 >= 0; _r15--) {
      var _n15 = t[_r15];
      "text" !== _n15.type || e || Ct.test(_n15.content) && (_n15.content = _n15.content.replace(/\+-/g, "\xb1").replace(/\.{2,}/g, "\u2026").replace(/([?!])\u2026/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014").replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")), "link_open" === _n15.type && "auto" === _n15.info && e--, "link_close" === _n15.type && "auto" === _n15.info && e++;
    }
  }
  var wt = /['"]/,
    vt = /['"]/g,
    zt = "\u2019";
  function St(t, e, r) {
    return t.slice(0, e) + r + t.slice(e + 1);
  }
  function qt(t, e) {
    var r;
    var n = [];
    for (var _s7 = 0; _s7 < t.length; _s7++) {
      var _i6 = t[_s7],
        _o9 = t[_s7].level;
      for (r = n.length - 1; r >= 0 && !(n[r].level <= _o9); r--);
      if (n.length = r + 1, "text" !== _i6.type) continue;
      var _u = _i6.content,
        _c = 0,
        _a = _u.length;
      t: for (; _c < _a;) {
        vt.lastIndex = _c;
        var _l = vt.exec(_u);
        if (!_l) break;
        var _h = !0,
          _p = !0;
        _c = _l.index + 1;
        var _f = "'" === _l[0];
        var _d = 32;
        if (_l.index - 1 >= 0) _d = _u.charCodeAt(_l.index - 1);else for (r = _s7 - 1; r >= 0 && "softbreak" !== t[r].type && "hardbreak" !== t[r].type; r--) if (t[r].content) {
          _d = t[r].content.charCodeAt(t[r].content.length - 1);
          break;
        }
        var _2 = 32;
        if (_c < _a) _2 = _u.charCodeAt(_c);else for (r = _s7 + 1; r < t.length && "softbreak" !== t[r].type && "hardbreak" !== t[r].type; r++) if (t[r].content) {
          _2 = t[r].content.charCodeAt(0);
          break;
        }
        var _m = ut(_d) || ot(String.fromCharCode(_d)),
          _g = ut(_2) || ot(String.fromCharCode(_2)),
          _k = it(_d),
          _D = it(_2);
        if (_D ? _h = !1 : _g && (_k || _m || (_h = !1)), _k ? _p = !1 : _m && (_D || _g || (_p = !1)), 34 === _2 && '"' === _l[0] && _d >= 48 && _d <= 57 && (_p = _h = !1), _h && _p && (_h = _m, _p = _g), _h || _p) {
          if (_p) for (r = n.length - 1; r >= 0; r--) {
            var _h2 = n[r];
            if (n[r].level < _o9) break;
            if (_h2.single === _f && n[r].level === _o9) {
              var _o10 = void 0,
                _p2 = void 0;
              _h2 = n[r], _f ? (_o10 = e.md.options.quotes[2], _p2 = e.md.options.quotes[3]) : (_o10 = e.md.options.quotes[0], _p2 = e.md.options.quotes[1]), _i6.content = St(_i6.content, _l.index, _p2), t[_h2.token].content = St(t[_h2.token].content, _h2.pos, _o10), _c += _p2.length - 1, _h2.token === _s7 && (_c += _o10.length - 1), _u = _i6.content, _a = _u.length, n.length = r;
              continue t;
            }
          }
          _h ? n.push({
            token: _s7,
            pos: _l.index,
            single: _f,
            level: _o9
          }) : _p && _f && (_i6.content = St(_i6.content, _l.index, zt));
        } else _f && (_i6.content = St(_i6.content, _l.index, zt));
      }
    }
  }
  var Bt = [["normalize", function (t) {
    var e;
    e = t.src.replace(gt, "\n"), e = e.replace(kt, "\uFFFD"), t.src = e;
  }], ["block", function (t) {
    var e;
    t.inlineMode ? (e = new t.Token("inline", "", 0), e.content = t.src, e.map = [0, 1], e.children = [], t.tokens.push(e)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }], ["inline", function (t) {
    var e = t.tokens;
    for (var _r16 = 0, _n16 = e.length; _r16 < _n16; _r16++) {
      var _n17 = e[_r16];
      "inline" === _n17.type && t.md.inline.parse(_n17.content, t.md, t.env, _n17.children);
    }
  }], ["linkify", function (t) {
    var e = t.tokens;
    var r;
    if (t.md.options.linkify) for (var _n18 = 0, _s8 = e.length; _n18 < _s8; _n18++) {
      if ("inline" !== e[_n18].type || !t.md.linkify.pretest(e[_n18].content)) continue;
      var _s9 = e[_n18].children,
        _i7 = 0;
      for (var _o11 = _s9.length - 1; _o11 >= 0; _o11--) {
        var _u2 = _s9[_o11];
        if ("link_close" !== _u2.type) {
          if ("html_inline" === _u2.type && (r = _u2.content, /^<a[>\s]/i.test(r) && _i7 > 0 && _i7--, Dt(_u2.content) && _i7++), !(_i7 > 0) && "text" === _u2.type && t.md.linkify.test(_u2.content)) {
            var _r17 = _u2.content;
            var _i8 = t.md.linkify.match(_r17);
            var _c2 = [];
            var _a2 = _u2.level,
              _l2 = 0;
            _i8.length > 0 && 0 === _i8[0].index && _o11 > 0 && "text_special" === _s9[_o11 - 1].type && (_i8 = _i8.slice(1));
            for (var _e12 = 0; _e12 < _i8.length; _e12++) {
              var _n19 = _i8[_e12].url,
                _s10 = t.md.normalizeLink(_n19);
              if (!t.md.validateLink(_s10)) continue;
              var _o12 = _i8[_e12].text;
              _o12 = _i8[_e12].schema ? "mailto:" !== _i8[_e12].schema || /^mailto:/i.test(_o12) ? t.md.normalizeLinkText(_o12) : t.md.normalizeLinkText("mailto:" + _o12).replace(/^mailto:/, "") : t.md.normalizeLinkText("http://" + _o12).replace(/^http:\/\//, "");
              var _u3 = _i8[_e12].index;
              if (_u3 > _l2) {
                var _e13 = new t.Token("text", "", 0);
                _e13.content = _r17.slice(_l2, _u3), _e13.level = _a2, _c2.push(_e13);
              }
              var _h3 = new t.Token("link_open", "a", 1);
              _h3.attrs = [["href", _s10]], _h3.level = _a2++, _h3.markup = "linkify", _h3.info = "auto", _c2.push(_h3);
              var _p3 = new t.Token("text", "", 0);
              _p3.content = _o12, _p3.level = _a2, _c2.push(_p3);
              var _f2 = new t.Token("link_close", "a", -1);
              _f2.level = --_a2, _f2.markup = "linkify", _f2.info = "auto", _c2.push(_f2), _l2 = _i8[_e12].lastIndex;
            }
            if (_l2 < _r17.length) {
              var _e14 = new t.Token("text", "", 0);
              _e14.content = _r17.slice(_l2), _e14.level = _a2, _c2.push(_e14);
            }
            e[_n18].children = _s9 = H(_s9, _o11, _c2);
          }
        } else for (_o11--; _s9[_o11].level !== _u2.level && "link_open" !== _s9[_o11].type;) _o11--;
      }
    }
  }], ["replacements", function (t) {
    var e;
    if (t.md.options.typographer) for (e = t.tokens.length - 1; e >= 0; e--) "inline" === t.tokens[e].type && (yt.test(t.tokens[e].content) && Ft(t.tokens[e].children), Ct.test(t.tokens[e].content) && xt(t.tokens[e].children));
  }], ["smartquotes", function (t) {
    if (t.md.options.typographer) for (var _e15 = t.tokens.length - 1; _e15 >= 0; _e15--) "inline" === t.tokens[_e15].type && wt.test(t.tokens[_e15].content) && qt(t.tokens[_e15].children, t);
  }], ["text_join", function (t) {
    var e, r;
    var n = t.tokens,
      s = n.length;
    for (var _t16 = 0; _t16 < s; _t16++) {
      if ("inline" !== n[_t16].type) continue;
      var _s11 = n[_t16].children,
        _i9 = _s11.length;
      for (e = 0; e < _i9; e++) "text_special" === _s11[e].type && (_s11[e].type = "text");
      for (e = r = 0; e < _i9; e++) "text" === _s11[e].type && e + 1 < _i9 && "text" === _s11[e + 1].type ? _s11[e + 1].content = _s11[e].content + _s11[e + 1].content : (e !== r && (_s11[r] = _s11[e]), r++);
      e !== r && (_s11.length = r);
    }
  }]];
  function Lt() {
    this.ruler = new dt();
    for (var _t17 = 0; _t17 < Bt.length; _t17++) this.ruler.push(Bt[_t17][0], Bt[_t17][1]);
  }
  function It(t, e, r, n) {
    this.src = t, this.md = e, this.env = r, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
    var s = this.src;
    for (var _t18 = 0, _e16 = 0, _r18 = 0, _n20 = 0, _i10 = s.length, _o13 = !1; _e16 < _i10; _e16++) {
      var _u4 = s.charCodeAt(_e16);
      if (!_o13) {
        if (st(_u4)) {
          _r18++, 9 === _u4 ? _n20 += 4 - _n20 % 4 : _n20++;
          continue;
        }
        _o13 = !0;
      }
      10 !== _u4 && _e16 !== _i10 - 1 || (10 !== _u4 && _e16++, this.bMarks.push(_t18), this.eMarks.push(_e16), this.tShift.push(_r18), this.sCount.push(_n20), this.bsCount.push(0), _o13 = !1, _r18 = 0, _n20 = 0, _t18 = _e16 + 1);
    }
    this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  Lt.prototype.process = function (t) {
    var e = this.ruler.getRules("");
    for (var _r19 = 0, _n21 = e.length; _r19 < _n21; _r19++) e[_r19](t);
  }, Lt.prototype.State = mt, It.prototype.push = function (t, e, r) {
    var n = new _t(t, e, r);
    return n.block = !0, r < 0 && this.level--, n.level = this.level, r > 0 && this.level++, this.tokens.push(n), n;
  }, It.prototype.isEmpty = function (t) {
    return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
  }, It.prototype.skipEmptyLines = function (t) {
    for (var _e17 = this.lineMax; t < _e17 && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++);
    return t;
  }, It.prototype.skipSpaces = function (t) {
    for (var _e18 = this.src.length; t < _e18; t++) {
      if (!st(this.src.charCodeAt(t))) break;
    }
    return t;
  }, It.prototype.skipSpacesBack = function (t, e) {
    if (t <= e) return t;
    for (; t > e;) if (!st(this.src.charCodeAt(--t))) return t + 1;
    return t;
  }, It.prototype.skipChars = function (t, e) {
    for (var _r20 = this.src.length; t < _r20 && this.src.charCodeAt(t) === e; t++);
    return t;
  }, It.prototype.skipCharsBack = function (t, e, r) {
    if (t <= r) return t;
    for (; t > r;) if (e !== this.src.charCodeAt(--t)) return t + 1;
    return t;
  }, It.prototype.getLines = function (t, e, r, n) {
    if (t >= e) return "";
    var s = new Array(e - t);
    for (var _i11 = 0, _o14 = t; _o14 < e; _o14++, _i11++) {
      var _t19 = 0;
      var _u5 = this.bMarks[_o14];
      var _c3 = void 0,
        _a3 = _u5;
      for (_c3 = _o14 + 1 < e || n ? this.eMarks[_o14] + 1 : this.eMarks[_o14]; _a3 < _c3 && _t19 < r;) {
        var _e19 = this.src.charCodeAt(_a3);
        if (st(_e19)) 9 === _e19 ? _t19 += 4 - (_t19 + this.bsCount[_o14]) % 4 : _t19++;else {
          if (!(_a3 - _u5 < this.tShift[_o14])) break;
          _t19++;
        }
        _a3++;
      }
      s[_i11] = _t19 > r ? new Array(_t19 - r + 1).join(" ") + this.src.slice(_a3, _c3) : this.src.slice(_a3, _c3);
    }
    return s.join("");
  }, It.prototype.Token = _t;
  function Mt(t, e) {
    var r = t.bMarks[e] + t.tShift[e],
      n = t.eMarks[e];
    return t.src.slice(r, n);
  }
  function Tt(t) {
    var e = [],
      r = t.length;
    var n = 0,
      s = t.charCodeAt(n),
      i = !1,
      o = 0,
      u = "";
    for (; n < r;) 124 === s && (i ? (u += t.substring(o, n - 1), o = n) : (e.push(u + t.substring(o, n)), u = "", o = n + 1)), i = 92 === s, n++, s = t.charCodeAt(n);
    return e.push(u + t.substring(o)), e;
  }
  function Rt(t, e) {
    var r = t.eMarks[e];
    var n = t.bMarks[e] + t.tShift[e];
    var s = t.src.charCodeAt(n++);
    if (42 !== s && 45 !== s && 43 !== s) return -1;
    if (n < r) {
      if (!st(t.src.charCodeAt(n))) return -1;
    }
    return n;
  }
  function Nt(t, e) {
    var r = t.bMarks[e] + t.tShift[e],
      n = t.eMarks[e];
    var s = r;
    if (s + 1 >= n) return -1;
    var i = t.src.charCodeAt(s++);
    if (i < 48 || i > 57) return -1;
    for (;;) {
      if (s >= n) return -1;
      if (i = t.src.charCodeAt(s++), !(i >= 48 && i <= 57)) {
        if (41 === i || 46 === i) break;
        return -1;
      }
      if (s - r >= 10) return -1;
    }
    return s < n && (i = t.src.charCodeAt(s), !st(i)) ? -1 : s;
  }
  var Pt = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
    Ot = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    jt = new RegExp("^(?:" + Pt + "|" + Ot + "|\x3c!---?>|\x3c!--(?:[^-]|-[^-]|--[^>])*--\x3e|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
    Zt = new RegExp("^(?:" + Pt + "|" + Ot + ")"),
    $t = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [new RegExp("^</?(" + ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"].join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0], [new RegExp(Zt.source + "\\s*$"), /^$/, !1]];
  var Ut = [["table", function (t, e, r, n) {
    if (e + 2 > r) return !1;
    var s = e + 1;
    if (t.sCount[s] < t.blkIndent) return !1;
    if (t.sCount[s] - t.blkIndent >= 4) return !1;
    var i = t.bMarks[s] + t.tShift[s];
    if (i >= t.eMarks[s]) return !1;
    var o = t.src.charCodeAt(i++);
    if (124 !== o && 45 !== o && 58 !== o) return !1;
    if (i >= t.eMarks[s]) return !1;
    var u = t.src.charCodeAt(i++);
    if (124 !== u && 45 !== u && 58 !== u && !st(u)) return !1;
    if (45 === o && st(u)) return !1;
    for (; i < t.eMarks[s];) {
      var _e20 = t.src.charCodeAt(i);
      if (124 !== _e20 && 45 !== _e20 && 58 !== _e20 && !st(_e20)) return !1;
      i++;
    }
    var c = Mt(t, e + 1),
      a = c.split("|");
    var l = [];
    for (var _t20 = 0; _t20 < a.length; _t20++) {
      var _e21 = a[_t20].trim();
      if (!_e21) {
        if (0 === _t20 || _t20 === a.length - 1) continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(_e21)) return !1;
      58 === _e21.charCodeAt(_e21.length - 1) ? l.push(58 === _e21.charCodeAt(0) ? "center" : "right") : 58 === _e21.charCodeAt(0) ? l.push("left") : l.push("");
    }
    if (c = Mt(t, e).trim(), -1 === c.indexOf("|")) return !1;
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    a = Tt(c), a.length && "" === a[0] && a.shift(), a.length && "" === a[a.length - 1] && a.pop();
    var h = a.length;
    if (0 === h || h !== l.length) return !1;
    if (n) return !0;
    var p = t.parentType;
    t.parentType = "table";
    var f = t.md.block.ruler.getRules("blockquote"),
      d = [e, 0];
    t.push("table_open", "table", 1).map = d, t.push("thead_open", "thead", 1).map = [e, e + 1], t.push("tr_open", "tr", 1).map = [e, e + 1];
    for (var _e22 = 0; _e22 < a.length; _e22++) {
      var _r21 = t.push("th_open", "th", 1);
      l[_e22] && (_r21.attrs = [["style", "text-align:" + l[_e22]]]);
      var _n22 = t.push("inline", "", 0);
      _n22.content = a[_e22].trim(), _n22.children = [], t.push("th_close", "th", -1);
    }
    var _;
    t.push("tr_close", "tr", -1), t.push("thead_close", "thead", -1);
    var m = 0;
    for (s = e + 2; s < r && !(t.sCount[s] < t.blkIndent); s++) {
      var _n23 = !1;
      for (var _e23 = 0, _i12 = f.length; _e23 < _i12; _e23++) if (f[_e23](t, s, r, !0)) {
        _n23 = !0;
        break;
      }
      if (_n23) break;
      if (c = Mt(t, s).trim(), !c) break;
      if (t.sCount[s] - t.blkIndent >= 4) break;
      if (a = Tt(c), a.length && "" === a[0] && a.shift(), a.length && "" === a[a.length - 1] && a.pop(), m += h - a.length, m > 65536) break;
      if (s === e + 2) {
        t.push("tbody_open", "tbody", 1).map = _ = [e + 2, 0];
      }
      t.push("tr_open", "tr", 1).map = [s, s + 1];
      for (var _e24 = 0; _e24 < h; _e24++) {
        var _r22 = t.push("td_open", "td", 1);
        l[_e24] && (_r22.attrs = [["style", "text-align:" + l[_e24]]]);
        var _n24 = t.push("inline", "", 0);
        _n24.content = a[_e24] ? a[_e24].trim() : "", _n24.children = [], t.push("td_close", "td", -1);
      }
      t.push("tr_close", "tr", -1);
    }
    return _ && (t.push("tbody_close", "tbody", -1), _[1] = s), t.push("table_close", "table", -1), d[1] = s, t.parentType = p, t.line = s, !0;
  }, ["paragraph", "reference"]], ["code", function (t, e, r) {
    if (t.sCount[e] - t.blkIndent < 4) return !1;
    var n = e + 1,
      s = n;
    for (; n < r;) if (t.isEmpty(n)) n++;else {
      if (!(t.sCount[n] - t.blkIndent >= 4)) break;
      n++, s = n;
    }
    t.line = s;
    var i = t.push("code_block", "code", 0);
    return i.content = t.getLines(e, s, 4 + t.blkIndent, !1) + "\n", i.map = [e, t.line], !0;
  }], ["fence", function (t, e, r, n) {
    var s = t.bMarks[e] + t.tShift[e],
      i = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    if (s + 3 > i) return !1;
    var o = t.src.charCodeAt(s);
    if (126 !== o && 96 !== o) return !1;
    var u = s;
    s = t.skipChars(s, o);
    var c = s - u;
    if (c < 3) return !1;
    var a = t.src.slice(u, s),
      l = t.src.slice(s, i);
    if (96 === o && l.indexOf(String.fromCharCode(o)) >= 0) return !1;
    if (n) return !0;
    var h = e,
      p = !1;
    for (; (h++, !(h >= r)) && (s = u = t.bMarks[h] + t.tShift[h], i = t.eMarks[h], !(s < i && t.sCount[h] < t.blkIndent));) if (t.src.charCodeAt(s) === o && !(t.sCount[h] - t.blkIndent >= 4 || (s = t.skipChars(s, o), s - u < c || (s = t.skipSpaces(s), s < i)))) {
      p = !0;
      break;
    }
    c = t.sCount[e], t.line = h + (p ? 1 : 0);
    var f = t.push("fence", "code", 0);
    return f.info = l, f.content = t.getLines(e + 1, h, c, !0), f.markup = a, f.map = [e, t.line], !0;
  }, ["paragraph", "reference", "blockquote", "list"]], ["blockquote", function (t, e, r, n) {
    var s = t.bMarks[e] + t.tShift[e],
      i = t.eMarks[e];
    var o = t.lineMax;
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    if (62 !== t.src.charCodeAt(s)) return !1;
    if (n) return !0;
    var u = [],
      c = [],
      a = [],
      l = [],
      h = t.md.block.ruler.getRules("blockquote"),
      p = t.parentType;
    t.parentType = "blockquote";
    var f,
      d = !1;
    for (f = e; f < r; f++) {
      var _e25 = t.sCount[f] < t.blkIndent;
      if (s = t.bMarks[f] + t.tShift[f], i = t.eMarks[f], s >= i) break;
      if (62 === t.src.charCodeAt(s++) && !_e25) {
        var _e26 = void 0,
          _r23 = void 0,
          _n25 = t.sCount[f] + 1;
        32 === t.src.charCodeAt(s) ? (s++, _n25++, _r23 = !1, _e26 = !0) : 9 === t.src.charCodeAt(s) ? (_e26 = !0, (t.bsCount[f] + _n25) % 4 == 3 ? (s++, _n25++, _r23 = !1) : _r23 = !0) : _e26 = !1;
        var _o15 = _n25;
        for (u.push(t.bMarks[f]), t.bMarks[f] = s; s < i;) {
          var _e27 = t.src.charCodeAt(s);
          if (!st(_e27)) break;
          9 === _e27 ? _o15 += 4 - (_o15 + t.bsCount[f] + (_r23 ? 1 : 0)) % 4 : _o15++, s++;
        }
        d = s >= i, c.push(t.bsCount[f]), t.bsCount[f] = t.sCount[f] + 1 + (_e26 ? 1 : 0), a.push(t.sCount[f]), t.sCount[f] = _o15 - _n25, l.push(t.tShift[f]), t.tShift[f] = s - t.bMarks[f];
        continue;
      }
      if (d) break;
      var _n26 = !1;
      for (var _e28 = 0, _s12 = h.length; _e28 < _s12; _e28++) if (h[_e28](t, f, r, !0)) {
        _n26 = !0;
        break;
      }
      if (_n26) {
        t.lineMax = f, 0 !== t.blkIndent && (u.push(t.bMarks[f]), c.push(t.bsCount[f]), l.push(t.tShift[f]), a.push(t.sCount[f]), t.sCount[f] -= t.blkIndent);
        break;
      }
      u.push(t.bMarks[f]), c.push(t.bsCount[f]), l.push(t.tShift[f]), a.push(t.sCount[f]), t.sCount[f] = -1;
    }
    var _ = t.blkIndent;
    t.blkIndent = 0;
    var m = t.push("blockquote_open", "blockquote", 1);
    m.markup = ">";
    var g = [e, 0];
    m.map = g, t.md.block.tokenize(t, e, f), t.push("blockquote_close", "blockquote", -1).markup = ">", t.lineMax = o, t.parentType = p, g[1] = t.line;
    for (var _r24 = 0; _r24 < l.length; _r24++) t.bMarks[_r24 + e] = u[_r24], t.tShift[_r24 + e] = l[_r24], t.sCount[_r24 + e] = a[_r24], t.bsCount[_r24 + e] = c[_r24];
    return t.blkIndent = _, !0;
  }, ["paragraph", "reference", "blockquote", "list"]], ["hr", function (t, e, r, n) {
    var s = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    var i = t.bMarks[e] + t.tShift[e];
    var o = t.src.charCodeAt(i++);
    if (42 !== o && 45 !== o && 95 !== o) return !1;
    var u = 1;
    for (; i < s;) {
      var _e29 = t.src.charCodeAt(i++);
      if (_e29 !== o && !st(_e29)) return !1;
      _e29 === o && u++;
    }
    if (u < 3) return !1;
    if (n) return !0;
    t.line = e + 1;
    var c = t.push("hr", "hr", 0);
    return c.map = [e, t.line], c.markup = Array(u + 1).join(String.fromCharCode(o)), !0;
  }, ["paragraph", "reference", "blockquote", "list"]], ["list", function (t, e, r, n) {
    var s,
      i,
      o,
      u,
      c = e,
      a = !0;
    if (t.sCount[c] - t.blkIndent >= 4) return !1;
    if (t.listIndent >= 0 && t.sCount[c] - t.listIndent >= 4 && t.sCount[c] < t.blkIndent) return !1;
    var l,
      h,
      p,
      f = !1;
    if (n && "paragraph" === t.parentType && t.sCount[c] >= t.blkIndent && (f = !0), (p = Nt(t, c)) >= 0) {
      if (l = !0, o = t.bMarks[c] + t.tShift[c], h = Number(t.src.slice(o, p - 1)), f && 1 !== h) return !1;
    } else {
      if (!((p = Rt(t, c)) >= 0)) return !1;
      l = !1;
    }
    if (f && t.skipSpaces(p) >= t.eMarks[c]) return !1;
    if (n) return !0;
    var d = t.src.charCodeAt(p - 1),
      _ = t.tokens.length;
    l ? (u = t.push("ordered_list_open", "ol", 1), 1 !== h && (u.attrs = [["start", h]])) : u = t.push("bullet_list_open", "ul", 1);
    var m = [c, 0];
    u.map = m, u.markup = String.fromCharCode(d);
    var g = !1;
    var k = t.md.block.ruler.getRules("list"),
      D = t.parentType;
    for (t.parentType = "list"; c < r;) {
      i = p, s = t.eMarks[c];
      var _e30 = t.sCount[c] + p - (t.bMarks[c] + t.tShift[c]);
      var _n27 = _e30;
      for (; i < s;) {
        var _e31 = t.src.charCodeAt(i);
        if (9 === _e31) _n27 += 4 - (_n27 + t.bsCount[c]) % 4;else {
          if (32 !== _e31) break;
          _n27++;
        }
        i++;
      }
      var _h4 = i;
      var _f3 = void 0;
      _f3 = _h4 >= s ? 1 : _n27 - _e30, _f3 > 4 && (_f3 = 1);
      var _3 = _e30 + _f3;
      u = t.push("list_item_open", "li", 1), u.markup = String.fromCharCode(d);
      var _m2 = [c, 0];
      u.map = _m2, l && (u.info = t.src.slice(o, p - 1));
      var _D2 = t.tight,
        _C = t.tShift[c],
        _y = t.sCount[c],
        _E = t.listIndent;
      if (t.listIndent = t.blkIndent, t.blkIndent = _3, t.tight = !0, t.tShift[c] = _h4 - t.bMarks[c], t.sCount[c] = _n27, _h4 >= s && t.isEmpty(c + 1) ? t.line = Math.min(t.line + 2, r) : t.md.block.tokenize(t, c, r, !0), t.tight && !g || (a = !1), g = t.line - c > 1 && t.isEmpty(t.line - 1), t.blkIndent = t.listIndent, t.listIndent = _E, t.tShift[c] = _C, t.sCount[c] = _y, t.tight = _D2, u = t.push("list_item_close", "li", -1), u.markup = String.fromCharCode(d), c = t.line, _m2[1] = c, c >= r) break;
      if (t.sCount[c] < t.blkIndent) break;
      if (t.sCount[c] - t.blkIndent >= 4) break;
      var _A = !1;
      for (var _e32 = 0, _n28 = k.length; _e32 < _n28; _e32++) if (k[_e32](t, c, r, !0)) {
        _A = !0;
        break;
      }
      if (_A) break;
      if (l) {
        if (p = Nt(t, c), p < 0) break;
        o = t.bMarks[c] + t.tShift[c];
      } else if (p = Rt(t, c), p < 0) break;
      if (d !== t.src.charCodeAt(p - 1)) break;
    }
    return u = l ? t.push("ordered_list_close", "ol", -1) : t.push("bullet_list_close", "ul", -1), u.markup = String.fromCharCode(d), m[1] = c, t.line = c, t.parentType = D, a && function (t, e) {
      var r = t.level + 2;
      for (var _n29 = e + 2, _s13 = t.tokens.length - 2; _n29 < _s13; _n29++) t.tokens[_n29].level === r && "paragraph_open" === t.tokens[_n29].type && (t.tokens[_n29 + 2].hidden = !0, t.tokens[_n29].hidden = !0, _n29 += 2);
    }(t, _), !0;
  }, ["paragraph", "reference", "blockquote"]], ["reference", function (t, e, r, n) {
    var s = t.bMarks[e] + t.tShift[e],
      i = t.eMarks[e],
      o = e + 1;
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    if (91 !== t.src.charCodeAt(s)) return !1;
    function u(e) {
      var r = t.lineMax;
      if (e >= r || t.isEmpty(e)) return null;
      var n = !1;
      if (t.sCount[e] - t.blkIndent > 3 && (n = !0), t.sCount[e] < 0 && (n = !0), !n) {
        var _n30 = t.md.block.ruler.getRules("reference"),
          _s14 = t.parentType;
        t.parentType = "reference";
        var _i13 = !1;
        for (var _s15 = 0, _o16 = _n30.length; _s15 < _o16; _s15++) if (_n30[_s15](t, e, r, !0)) {
          _i13 = !0;
          break;
        }
        if (t.parentType = _s14, _i13) return null;
      }
      var s = t.bMarks[e] + t.tShift[e],
        i = t.eMarks[e];
      return t.src.slice(s, i + 1);
    }
    var c = t.src.slice(s, i + 1);
    i = c.length;
    var a = -1;
    for (s = 1; s < i; s++) {
      var _t21 = c.charCodeAt(s);
      if (91 === _t21) return !1;
      if (93 === _t21) {
        a = s;
        break;
      }
      if (10 === _t21) {
        var _t22 = u(o);
        null !== _t22 && (c += _t22, i = c.length, o++);
      } else if (92 === _t21 && (s++, s < i && 10 === c.charCodeAt(s))) {
        var _t23 = u(o);
        null !== _t23 && (c += _t23, i = c.length, o++);
      }
    }
    if (a < 0 || 58 !== c.charCodeAt(a + 1)) return !1;
    for (s = a + 2; s < i; s++) {
      var _t24 = c.charCodeAt(s);
      if (10 === _t24) {
        var _t25 = u(o);
        null !== _t25 && (c += _t25, i = c.length, o++);
      } else if (!st(_t24)) break;
    }
    var l = t.md.helpers.parseLinkDestination(c, s, i);
    if (!l.ok) return !1;
    var h = t.md.normalizeLink(l.str);
    if (!t.md.validateLink(h)) return !1;
    s = l.pos;
    var p = s,
      f = o,
      d = s;
    for (; s < i; s++) {
      var _t26 = c.charCodeAt(s);
      if (10 === _t26) {
        var _t27 = u(o);
        null !== _t27 && (c += _t27, i = c.length, o++);
      } else if (!st(_t26)) break;
    }
    var _,
      m = t.md.helpers.parseLinkTitle(c, s, i);
    for (; m.can_continue;) {
      var _e33 = u(o);
      if (null === _e33) break;
      c += _e33, s = i, i = c.length, o++, m = t.md.helpers.parseLinkTitle(c, s, i, m);
    }
    for (s < i && d !== s && m.ok ? (_ = m.str, s = m.pos) : (_ = "", s = p, o = f); s < i;) {
      if (!st(c.charCodeAt(s))) break;
      s++;
    }
    if (s < i && 10 !== c.charCodeAt(s) && _) for (_ = "", s = p, o = f; s < i;) {
      if (!st(c.charCodeAt(s))) break;
      s++;
    }
    if (s < i && 10 !== c.charCodeAt(s)) return !1;
    var g = ct(c.slice(1, a));
    return !!g && (n || (void 0 === t.env.references && (t.env.references = {}), void 0 === t.env.references[g] && (t.env.references[g] = {
      title: _,
      href: h
    }), t.line = o), !0);
  }], ["html_block", function (t, e, r, n) {
    var s = t.bMarks[e] + t.tShift[e],
      i = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    if (!t.md.options.html) return !1;
    if (60 !== t.src.charCodeAt(s)) return !1;
    var o = t.src.slice(s, i),
      u = 0;
    for (; u < $t.length && !$t[u][0].test(o); u++);
    if (u === $t.length) return !1;
    if (n) return $t[u][2];
    var c = e + 1;
    if (!$t[u][1].test(o)) for (; c < r && !(t.sCount[c] < t.blkIndent); c++) if (s = t.bMarks[c] + t.tShift[c], i = t.eMarks[c], o = t.src.slice(s, i), $t[u][1].test(o)) {
      0 !== o.length && c++;
      break;
    }
    t.line = c;
    var a = t.push("html_block", "", 0);
    return a.map = [e, c], a.content = t.getLines(e, c, t.blkIndent, !0), !0;
  }, ["paragraph", "reference", "blockquote"]], ["heading", function (t, e, r, n) {
    var s = t.bMarks[e] + t.tShift[e],
      i = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    var o = t.src.charCodeAt(s);
    if (35 !== o || s >= i) return !1;
    var u = 1;
    for (o = t.src.charCodeAt(++s); 35 === o && s < i && u <= 6;) u++, o = t.src.charCodeAt(++s);
    if (u > 6 || s < i && !st(o)) return !1;
    if (n) return !0;
    i = t.skipSpacesBack(i, s);
    var c = t.skipCharsBack(i, 35, s);
    c > s && st(t.src.charCodeAt(c - 1)) && (i = c), t.line = e + 1;
    var a = t.push("heading_open", "h" + String(u), 1);
    a.markup = "########".slice(0, u), a.map = [e, t.line];
    var l = t.push("inline", "", 0);
    return l.content = t.src.slice(s, i).trim(), l.map = [e, t.line], l.children = [], t.push("heading_close", "h" + String(u), -1).markup = "########".slice(0, u), !0;
  }, ["paragraph", "reference", "blockquote"]], ["lheading", function (t, e, r) {
    var n = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[e] - t.blkIndent >= 4) return !1;
    var s = t.parentType;
    t.parentType = "paragraph";
    var i,
      o = 0,
      u = e + 1;
    for (; u < r && !t.isEmpty(u); u++) {
      if (t.sCount[u] - t.blkIndent > 3) continue;
      if (t.sCount[u] >= t.blkIndent) {
        var _e34 = t.bMarks[u] + t.tShift[u];
        var _r25 = t.eMarks[u];
        if (_e34 < _r25 && (i = t.src.charCodeAt(_e34), (45 === i || 61 === i) && (_e34 = t.skipChars(_e34, i), _e34 = t.skipSpaces(_e34), _e34 >= _r25))) {
          o = 61 === i ? 1 : 2;
          break;
        }
      }
      if (t.sCount[u] < 0) continue;
      var _e35 = !1;
      for (var _s16 = 0, _i14 = n.length; _s16 < _i14; _s16++) if (n[_s16](t, u, r, !0)) {
        _e35 = !0;
        break;
      }
      if (_e35) break;
    }
    if (!o) return !1;
    var c = t.getLines(e, u, t.blkIndent, !1).trim();
    t.line = u + 1;
    var a = t.push("heading_open", "h" + String(o), 1);
    a.markup = String.fromCharCode(i), a.map = [e, t.line];
    var l = t.push("inline", "", 0);
    return l.content = c, l.map = [e, t.line - 1], l.children = [], t.push("heading_close", "h" + String(o), -1).markup = String.fromCharCode(i), t.parentType = s, !0;
  }], ["paragraph", function (t, e, r) {
    var n = t.md.block.ruler.getRules("paragraph"),
      s = t.parentType;
    var i = e + 1;
    for (t.parentType = "paragraph"; i < r && !t.isEmpty(i); i++) {
      if (t.sCount[i] - t.blkIndent > 3) continue;
      if (t.sCount[i] < 0) continue;
      var _e36 = !1;
      for (var _s17 = 0, _o17 = n.length; _s17 < _o17; _s17++) if (n[_s17](t, i, r, !0)) {
        _e36 = !0;
        break;
      }
      if (_e36) break;
    }
    var o = t.getLines(e, i, t.blkIndent, !1).trim();
    t.line = i, t.push("paragraph_open", "p", 1).map = [e, t.line];
    var u = t.push("inline", "", 0);
    return u.content = o, u.map = [e, t.line], u.children = [], t.push("paragraph_close", "p", -1), t.parentType = s, !0;
  }]];
  function Ht() {
    this.ruler = new dt();
    for (var _t28 = 0; _t28 < Ut.length; _t28++) this.ruler.push(Ut[_t28][0], Ut[_t28][1], {
      alt: (Ut[_t28][2] || []).slice()
    });
  }
  function Vt(t, e, r, n) {
    this.src = t, this.env = r, this.md = e, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  function Gt(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  Ht.prototype.tokenize = function (t, e, r) {
    var n = this.ruler.getRules(""),
      s = n.length,
      i = t.md.options.maxNesting;
    var o = e,
      u = !1;
    for (; o < r && (t.line = o = t.skipEmptyLines(o), !(o >= r)) && !(t.sCount[o] < t.blkIndent);) {
      if (t.level >= i) {
        t.line = r;
        break;
      }
      var _e37 = t.line;
      var _c4 = !1;
      for (var _i15 = 0; _i15 < s; _i15++) if (_c4 = n[_i15](t, o, r, !1), _c4) {
        if (_e37 >= t.line) throw new Error("block rule didn't increment state.line");
        break;
      }
      if (!_c4) throw new Error("none of the block rules matched");
      t.tight = !u, t.isEmpty(t.line - 1) && (u = !0), o = t.line, o < r && t.isEmpty(o) && (u = !0, o++, t.line = o);
    }
  }, Ht.prototype.parse = function (t, e, r, n) {
    if (!t) return;
    var s = new this.State(t, e, r, n);
    this.tokenize(s, s.line, s.lineMax);
  }, Ht.prototype.State = It, Vt.prototype.pushPending = function () {
    var t = new _t("text", "", 0);
    return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
  }, Vt.prototype.push = function (t, e, r) {
    this.pending && this.pushPending();
    var n = new _t(t, e, r);
    var s = null;
    return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], s = {
      delimiters: this.delimiters
    }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(s), n;
  }, Vt.prototype.scanDelims = function (t, e) {
    var r = this.posMax,
      n = this.src.charCodeAt(t),
      s = t > 0 ? this.src.charCodeAt(t - 1) : 32;
    var i = t;
    for (; i < r && this.src.charCodeAt(i) === n;) i++;
    var o = i - t,
      u = i < r ? this.src.charCodeAt(i) : 32,
      c = ut(s) || ot(String.fromCharCode(s)),
      a = ut(u) || ot(String.fromCharCode(u)),
      l = it(s),
      h = it(u),
      p = !h && (!a || l || c),
      f = !l && (!c || h || a);
    return {
      can_open: p && (e || !f || c),
      can_close: f && (e || !p || a),
      length: o
    };
  }, Vt.prototype.Token = _t;
  var Wt = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  var Jt = [];
  for (var _t29 = 0; _t29 < 256; _t29++) Jt.push(0);
  function Qt(t, e) {
    var r;
    var n = [],
      s = e.length;
    for (var _i16 = 0; _i16 < s; _i16++) {
      var _s18 = e[_i16];
      if (126 !== _s18.marker) continue;
      if (-1 === _s18.end) continue;
      var _o18 = e[_s18.end];
      r = t.tokens[_s18.token], r.type = "s_open", r.tag = "s", r.nesting = 1, r.markup = "~~", r.content = "", r = t.tokens[_o18.token], r.type = "s_close", r.tag = "s", r.nesting = -1, r.markup = "~~", r.content = "", "text" === t.tokens[_o18.token - 1].type && "~" === t.tokens[_o18.token - 1].content && n.push(_o18.token - 1);
    }
    for (; n.length;) {
      var _e38 = n.pop();
      var _s19 = _e38 + 1;
      for (; _s19 < t.tokens.length && "s_close" === t.tokens[_s19].type;) _s19++;
      _s19--, _e38 !== _s19 && (r = t.tokens[_s19], t.tokens[_s19] = t.tokens[_e38], t.tokens[_e38] = r);
    }
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (t) {
    Jt[t.charCodeAt(0)] = 1;
  });
  var Xt = {
    tokenize: function tokenize(t, e) {
      var r = t.pos,
        n = t.src.charCodeAt(r);
      if (e) return !1;
      if (126 !== n) return !1;
      var s = t.scanDelims(t.pos, !0);
      var i = s.length;
      var o = String.fromCharCode(n);
      if (i < 2) return !1;
      var u;
      i % 2 && (u = t.push("text", "", 0), u.content = o, i--);
      for (var _e39 = 0; _e39 < i; _e39 += 2) u = t.push("text", "", 0), u.content = o + o, t.delimiters.push({
        marker: n,
        length: 0,
        token: t.tokens.length - 1,
        end: -1,
        open: s.can_open,
        close: s.can_close
      });
      return t.pos += s.length, !0;
    },
    postProcess: function postProcess(t) {
      var e = t.tokens_meta,
        r = t.tokens_meta.length;
      Qt(t, t.delimiters);
      for (var _n31 = 0; _n31 < r; _n31++) e[_n31] && e[_n31].delimiters && Qt(t, e[_n31].delimiters);
    }
  };
  function Yt(t, e) {
    for (var _r26 = e.length - 1; _r26 >= 0; _r26--) {
      var _n32 = e[_r26];
      if (95 !== _n32.marker && 42 !== _n32.marker) continue;
      if (-1 === _n32.end) continue;
      var _s20 = e[_n32.end],
        _i17 = _r26 > 0 && e[_r26 - 1].end === _n32.end + 1 && e[_r26 - 1].marker === _n32.marker && e[_r26 - 1].token === _n32.token - 1 && e[_n32.end + 1].token === _s20.token + 1,
        _o19 = String.fromCharCode(_n32.marker),
        _u6 = t.tokens[_n32.token];
      _u6.type = _i17 ? "strong_open" : "em_open", _u6.tag = _i17 ? "strong" : "em", _u6.nesting = 1, _u6.markup = _i17 ? _o19 + _o19 : _o19, _u6.content = "";
      var _c5 = t.tokens[_s20.token];
      _c5.type = _i17 ? "strong_close" : "em_close", _c5.tag = _i17 ? "strong" : "em", _c5.nesting = -1, _c5.markup = _i17 ? _o19 + _o19 : _o19, _c5.content = "", _i17 && (t.tokens[e[_r26 - 1].token].content = "", t.tokens[e[_n32.end + 1].token].content = "", _r26--);
    }
  }
  var Kt = {
    tokenize: function tokenize(t, e) {
      var r = t.pos,
        n = t.src.charCodeAt(r);
      if (e) return !1;
      if (95 !== n && 42 !== n) return !1;
      var s = t.scanDelims(t.pos, 42 === n);
      for (var _e40 = 0; _e40 < s.length; _e40++) {
        t.push("text", "", 0).content = String.fromCharCode(n), t.delimiters.push({
          marker: n,
          length: s.length,
          token: t.tokens.length - 1,
          end: -1,
          open: s.can_open,
          close: s.can_close
        });
      }
      return t.pos += s.length, !0;
    },
    postProcess: function postProcess(t) {
      var e = t.tokens_meta,
        r = t.tokens_meta.length;
      Yt(t, t.delimiters);
      for (var _n33 = 0; _n33 < r; _n33++) e[_n33] && e[_n33].delimiters && Yt(t, e[_n33].delimiters);
    }
  };
  var te = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    ee = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
  var re = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    ne = /^&([a-z][a-z0-9]{1,31});/i;
  function se(t) {
    var e = {},
      r = t.length;
    if (!r) return;
    var n = 0,
      s = -2;
    var i = [];
    for (var _o20 = 0; _o20 < r; _o20++) {
      var _r27 = t[_o20];
      if (i.push(0), t[n].marker === _r27.marker && s === _r27.token - 1 || (n = _o20), s = _r27.token, _r27.length = _r27.length || 0, !_r27.close) continue;
      e.hasOwnProperty(_r27.marker) || (e[_r27.marker] = [-1, -1, -1, -1, -1, -1]);
      var _u7 = e[_r27.marker][(_r27.open ? 3 : 0) + _r27.length % 3];
      var _c6 = n - i[n] - 1,
        _a4 = _c6;
      for (; _c6 > _u7; _c6 -= i[_c6] + 1) {
        var _e41 = t[_c6];
        if (_e41.marker === _r27.marker && _e41.open && _e41.end < 0) {
          var _n34 = !1;
          if ((_e41.close || _r27.open) && (_e41.length + _r27.length) % 3 == 0 && (_e41.length % 3 == 0 && _r27.length % 3 == 0 || (_n34 = !0)), !_n34) {
            var _n35 = _c6 > 0 && !t[_c6 - 1].open ? i[_c6 - 1] + 1 : 0;
            i[_o20] = _o20 - _c6 + _n35, i[_c6] = _n35, _r27.open = !1, _e41.end = _o20, _e41.close = !1, _a4 = -1, s = -2;
            break;
          }
        }
      }
      -1 !== _a4 && (e[_r27.marker][(_r27.open ? 3 : 0) + (_r27.length || 0) % 3] = _a4);
    }
  }
  var ie = [["text", function (t, e) {
      var r = t.pos;
      for (; r < t.posMax && !Gt(t.src.charCodeAt(r));) r++;
      return r !== t.pos && (e || (t.pending += t.src.slice(t.pos, r)), t.pos = r, !0);
    }], ["linkify", function (t, e) {
      if (!t.md.options.linkify) return !1;
      if (t.linkLevel > 0) return !1;
      var r = t.pos;
      if (r + 3 > t.posMax) return !1;
      if (58 !== t.src.charCodeAt(r)) return !1;
      if (47 !== t.src.charCodeAt(r + 1)) return !1;
      if (47 !== t.src.charCodeAt(r + 2)) return !1;
      var n = t.pending.match(Wt);
      if (!n) return !1;
      var s = n[1],
        i = t.md.linkify.matchAtStart(t.src.slice(r - s.length));
      if (!i) return !1;
      var o = i.url;
      if (o.length <= s.length) return !1;
      o = o.replace(/\*+$/, "");
      var u = t.md.normalizeLink(o);
      if (!t.md.validateLink(u)) return !1;
      if (!e) {
        t.pending = t.pending.slice(0, -s.length);
        var _e42 = t.push("link_open", "a", 1);
        _e42.attrs = [["href", u]], _e42.markup = "linkify", _e42.info = "auto";
        t.push("text", "", 0).content = t.md.normalizeLinkText(o);
        var _r28 = t.push("link_close", "a", -1);
        _r28.markup = "linkify", _r28.info = "auto";
      }
      return t.pos += o.length - s.length, !0;
    }], ["newline", function (t, e) {
      var r = t.pos;
      if (10 !== t.src.charCodeAt(r)) return !1;
      var n = t.pending.length - 1,
        s = t.posMax;
      if (!e) if (n >= 0 && 32 === t.pending.charCodeAt(n)) {
        if (n >= 1 && 32 === t.pending.charCodeAt(n - 1)) {
          var _e43 = n - 1;
          for (; _e43 >= 1 && 32 === t.pending.charCodeAt(_e43 - 1);) _e43--;
          t.pending = t.pending.slice(0, _e43), t.push("hardbreak", "br", 0);
        } else t.pending = t.pending.slice(0, -1), t.push("softbreak", "br", 0);
      } else t.push("softbreak", "br", 0);
      for (r++; r < s && st(t.src.charCodeAt(r));) r++;
      return t.pos = r, !0;
    }], ["escape", function (t, e) {
      var r = t.pos;
      var n = t.posMax;
      if (92 !== t.src.charCodeAt(r)) return !1;
      if (r++, r >= n) return !1;
      var s = t.src.charCodeAt(r);
      if (10 === s) {
        for (e || t.push("hardbreak", "br", 0), r++; r < n && (s = t.src.charCodeAt(r), st(s));) r++;
        return t.pos = r, !0;
      }
      var i = t.src[r];
      if (s >= 55296 && s <= 56319 && r + 1 < n) {
        var _e44 = t.src.charCodeAt(r + 1);
        _e44 >= 56320 && _e44 <= 57343 && (i += t.src[r + 1], r++);
      }
      var o = "\\" + i;
      if (!e) {
        var _e45 = t.push("text_special", "", 0);
        s < 256 && 0 !== Jt[s] ? _e45.content = i : _e45.content = o, _e45.markup = o, _e45.info = "escape";
      }
      return t.pos = r + 1, !0;
    }], ["backticks", function (t, e) {
      var r = t.pos;
      if (96 !== t.src.charCodeAt(r)) return !1;
      var n = r;
      r++;
      var s = t.posMax;
      for (; r < s && 96 === t.src.charCodeAt(r);) r++;
      var i = t.src.slice(n, r),
        o = i.length;
      if (t.backticksScanned && (t.backticks[o] || 0) <= n) return e || (t.pending += i), t.pos += o, !0;
      var u,
        c = r;
      for (; -1 !== (u = t.src.indexOf("`", c));) {
        for (c = u + 1; c < s && 96 === t.src.charCodeAt(c);) c++;
        var _n36 = c - u;
        if (_n36 === o) {
          if (!e) {
            var _e46 = t.push("code_inline", "code", 0);
            _e46.markup = i, _e46.content = t.src.slice(r, u).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
          }
          return t.pos = c, !0;
        }
        t.backticks[_n36] = u;
      }
      return t.backticksScanned = !0, e || (t.pending += i), t.pos += o, !0;
    }], ["strikethrough", Xt.tokenize], ["emphasis", Kt.tokenize], ["link", function (t, e) {
      var r,
        n,
        s,
        i,
        o = "",
        u = "",
        c = t.pos,
        a = !0;
      if (91 !== t.src.charCodeAt(t.pos)) return !1;
      var l = t.pos,
        h = t.posMax,
        p = t.pos + 1,
        f = t.md.helpers.parseLinkLabel(t, t.pos, !0);
      if (f < 0) return !1;
      var d = f + 1;
      if (d < h && 40 === t.src.charCodeAt(d)) {
        for (a = !1, d++; d < h && (r = t.src.charCodeAt(d), st(r) || 10 === r); d++);
        if (d >= h) return !1;
        if (c = d, s = t.md.helpers.parseLinkDestination(t.src, d, t.posMax), s.ok) {
          for (o = t.md.normalizeLink(s.str), t.md.validateLink(o) ? d = s.pos : o = "", c = d; d < h && (r = t.src.charCodeAt(d), st(r) || 10 === r); d++);
          if (s = t.md.helpers.parseLinkTitle(t.src, d, t.posMax), d < h && c !== d && s.ok) for (u = s.str, d = s.pos; d < h && (r = t.src.charCodeAt(d), st(r) || 10 === r); d++);
        }
        (d >= h || 41 !== t.src.charCodeAt(d)) && (a = !0), d++;
      }
      if (a) {
        if (void 0 === t.env.references) return !1;
        if (d < h && 91 === t.src.charCodeAt(d) ? (c = d + 1, d = t.md.helpers.parseLinkLabel(t, d), d >= 0 ? n = t.src.slice(c, d++) : d = f + 1) : d = f + 1, n || (n = t.src.slice(p, f)), i = t.env.references[ct(n)], !i) return t.pos = l, !1;
        o = i.href, u = i.title;
      }
      if (!e) {
        t.pos = p, t.posMax = f;
        var _e47 = [["href", o]];
        t.push("link_open", "a", 1).attrs = _e47, u && _e47.push(["title", u]), t.linkLevel++, t.md.inline.tokenize(t), t.linkLevel--, t.push("link_close", "a", -1);
      }
      return t.pos = d, t.posMax = h, !0;
    }], ["image", function (t, e) {
      var r,
        n,
        s,
        i,
        o,
        u,
        c,
        a,
        l = "";
      var h = t.pos,
        p = t.posMax;
      if (33 !== t.src.charCodeAt(t.pos)) return !1;
      if (91 !== t.src.charCodeAt(t.pos + 1)) return !1;
      var f = t.pos + 2,
        d = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1);
      if (d < 0) return !1;
      if (i = d + 1, i < p && 40 === t.src.charCodeAt(i)) {
        for (i++; i < p && (r = t.src.charCodeAt(i), st(r) || 10 === r); i++);
        if (i >= p) return !1;
        for (a = i, u = t.md.helpers.parseLinkDestination(t.src, i, t.posMax), u.ok && (l = t.md.normalizeLink(u.str), t.md.validateLink(l) ? i = u.pos : l = ""), a = i; i < p && (r = t.src.charCodeAt(i), st(r) || 10 === r); i++);
        if (u = t.md.helpers.parseLinkTitle(t.src, i, t.posMax), i < p && a !== i && u.ok) for (c = u.str, i = u.pos; i < p && (r = t.src.charCodeAt(i), st(r) || 10 === r); i++);else c = "";
        if (i >= p || 41 !== t.src.charCodeAt(i)) return t.pos = h, !1;
        i++;
      } else {
        if (void 0 === t.env.references) return !1;
        if (i < p && 91 === t.src.charCodeAt(i) ? (a = i + 1, i = t.md.helpers.parseLinkLabel(t, i), i >= 0 ? s = t.src.slice(a, i++) : i = d + 1) : i = d + 1, s || (s = t.src.slice(f, d)), o = t.env.references[ct(s)], !o) return t.pos = h, !1;
        l = o.href, c = o.title;
      }
      if (!e) {
        n = t.src.slice(f, d);
        var _e48 = [];
        t.md.inline.parse(n, t.md, t.env, _e48);
        var _r29 = t.push("image", "img", 0),
          _s21 = [["src", l], ["alt", ""]];
        _r29.attrs = _s21, _r29.children = _e48, _r29.content = n, c && _s21.push(["title", c]);
      }
      return t.pos = i, t.posMax = p, !0;
    }], ["autolink", function (t, e) {
      var r = t.pos;
      if (60 !== t.src.charCodeAt(r)) return !1;
      var n = t.pos,
        s = t.posMax;
      for (;;) {
        if (++r >= s) return !1;
        var _e49 = t.src.charCodeAt(r);
        if (60 === _e49) return !1;
        if (62 === _e49) break;
      }
      var i = t.src.slice(n + 1, r);
      if (ee.test(i)) {
        var _r30 = t.md.normalizeLink(i);
        if (!t.md.validateLink(_r30)) return !1;
        if (!e) {
          var _e50 = t.push("link_open", "a", 1);
          _e50.attrs = [["href", _r30]], _e50.markup = "autolink", _e50.info = "auto";
          t.push("text", "", 0).content = t.md.normalizeLinkText(i);
          var _n37 = t.push("link_close", "a", -1);
          _n37.markup = "autolink", _n37.info = "auto";
        }
        return t.pos += i.length + 2, !0;
      }
      if (te.test(i)) {
        var _r31 = t.md.normalizeLink("mailto:" + i);
        if (!t.md.validateLink(_r31)) return !1;
        if (!e) {
          var _e51 = t.push("link_open", "a", 1);
          _e51.attrs = [["href", _r31]], _e51.markup = "autolink", _e51.info = "auto";
          t.push("text", "", 0).content = t.md.normalizeLinkText(i);
          var _n38 = t.push("link_close", "a", -1);
          _n38.markup = "autolink", _n38.info = "auto";
        }
        return t.pos += i.length + 2, !0;
      }
      return !1;
    }], ["html_inline", function (t, e) {
      if (!t.md.options.html) return !1;
      var r = t.posMax,
        n = t.pos;
      if (60 !== t.src.charCodeAt(n) || n + 2 >= r) return !1;
      var s = t.src.charCodeAt(n + 1);
      if (33 !== s && 63 !== s && 47 !== s && !function (t) {
        var e = 32 | t;
        return e >= 97 && e <= 122;
      }(s)) return !1;
      var i = t.src.slice(n).match(jt);
      if (!i) return !1;
      if (!e) {
        var _e52 = t.push("html_inline", "", 0);
        _e52.content = i[0], o = _e52.content, /^<a[>\s]/i.test(o) && t.linkLevel++, function (t) {
          return /^<\/a\s*>/i.test(t);
        }(_e52.content) && t.linkLevel--;
      }
      var o;
      return t.pos += i[0].length, !0;
    }], ["entity", function (t, e) {
      var r = t.pos,
        n = t.posMax;
      if (38 !== t.src.charCodeAt(r)) return !1;
      if (r + 1 >= n) return !1;
      if (35 === t.src.charCodeAt(r + 1)) {
        var _n39 = t.src.slice(r).match(re);
        if (_n39) {
          if (!e) {
            var _e53 = "x" === _n39[1][0].toLowerCase() ? parseInt(_n39[1].slice(1), 16) : parseInt(_n39[1], 10),
              _r32 = t.push("text_special", "", 0);
            _r32.content = V(_e53) ? G(_e53) : G(65533), _r32.markup = _n39[0], _r32.info = "entity";
          }
          return t.pos += _n39[0].length, !0;
        }
      } else {
        var _n40 = t.src.slice(r).match(ne);
        if (_n40) {
          var _r33 = j(_n40[0]);
          if (_r33 !== _n40[0]) {
            if (!e) {
              var _e54 = t.push("text_special", "", 0);
              _e54.content = _r33, _e54.markup = _n40[0], _e54.info = "entity";
            }
            return t.pos += _n40[0].length, !0;
          }
        }
      }
      return !1;
    }]],
    oe = [["balance_pairs", function (t) {
      var e = t.tokens_meta,
        r = t.tokens_meta.length;
      se(t.delimiters);
      for (var _t30 = 0; _t30 < r; _t30++) e[_t30] && e[_t30].delimiters && se(e[_t30].delimiters);
    }], ["strikethrough", Xt.postProcess], ["emphasis", Kt.postProcess], ["fragments_join", function (t) {
      var e,
        r,
        n = 0;
      var s = t.tokens,
        i = t.tokens.length;
      for (e = r = 0; e < i; e++) s[e].nesting < 0 && n--, s[e].level = n, s[e].nesting > 0 && n++, "text" === s[e].type && e + 1 < i && "text" === s[e + 1].type ? s[e + 1].content = s[e].content + s[e + 1].content : (e !== r && (s[r] = s[e]), r++);
      e !== r && (s.length = r);
    }]];
  function ue() {
    this.ruler = new dt();
    for (var _t31 = 0; _t31 < ie.length; _t31++) this.ruler.push(ie[_t31][0], ie[_t31][1]);
    this.ruler2 = new dt();
    for (var _t32 = 0; _t32 < oe.length; _t32++) this.ruler2.push(oe[_t32][0], oe[_t32][1]);
  }
  function ce(t) {
    return Array.prototype.slice.call(arguments, 1).forEach(function (e) {
      e && Object.keys(e).forEach(function (r) {
        t[r] = e[r];
      });
    }), t;
  }
  function ae(t) {
    return Object.prototype.toString.call(t);
  }
  function le(t) {
    return "[object Function]" === ae(t);
  }
  function he(t) {
    return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  ue.prototype.skipToken = function (t) {
    var e = t.pos,
      r = this.ruler.getRules(""),
      n = r.length,
      s = t.md.options.maxNesting,
      i = t.cache;
    if (void 0 !== i[e]) return void (t.pos = i[e]);
    var o = !1;
    if (t.level < s) {
      for (var _s22 = 0; _s22 < n; _s22++) if (t.level++, o = r[_s22](t, !0), t.level--, o) {
        if (e >= t.pos) throw new Error("inline rule didn't increment state.pos");
        break;
      }
    } else t.pos = t.posMax;
    o || t.pos++, i[e] = t.pos;
  }, ue.prototype.tokenize = function (t) {
    var e = this.ruler.getRules(""),
      r = e.length,
      n = t.posMax,
      s = t.md.options.maxNesting;
    for (; t.pos < n;) {
      var _i18 = t.pos;
      var _o21 = !1;
      if (t.level < s) for (var _n41 = 0; _n41 < r; _n41++) if (_o21 = e[_n41](t, !1), _o21) {
        if (_i18 >= t.pos) throw new Error("inline rule didn't increment state.pos");
        break;
      }
      if (_o21) {
        if (t.pos >= n) break;
      } else t.pending += t.src[t.pos++];
    }
    t.pending && t.pushPending();
  }, ue.prototype.parse = function (t, e, r, n) {
    var s = new this.State(t, e, r, n);
    this.tokenize(s);
    var i = this.ruler2.getRules(""),
      o = i.length;
    for (var _t33 = 0; _t33 < o; _t33++) i[_t33](s);
  }, ue.prototype.State = Vt;
  var pe = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
  };
  var fe = {
      "http:": {
        validate: function validate(t, e, r) {
          var n = t.slice(e);
          return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function validate(t, e, r) {
          var n = t.slice(e);
          return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? e >= 3 && ":" === t[e - 3] || e >= 3 && "/" === t[e - 3] ? 0 : n.match(r.re.no_http)[0].length : 0;
        }
      },
      "mailto:": {
        validate: function validate(t, e, r) {
          var n = t.slice(e);
          return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0;
        }
      }
    },
    de = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    _e = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
  function me(t) {
    var e = t.re = function (t) {
        var e = {};
        t = t || {}, e.src_Any = C.source, e.src_Cc = y.source, e.src_Z = b.source, e.src_P = E.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
        var r = "[><\uFF5C]";
        return e.src_pseudo_letter = "(?:(?![><\uFF5C]|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|[><\uFF5C]|" + e.src_ZPCc + ")(?!" + (t["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + r + "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|[><\uFF5C]|\"|\\(|" + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
      }(t.__opts__),
      r = t.__tlds__.slice();
    function n(t) {
      return t.replace("%TLDS%", e.src_tlds);
    }
    t.onCompile(), t.__tlds_replaced__ || r.push(de), r.push(e.src_xn), e.src_tlds = r.join("|"), e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), "i");
    var s = [];
    function i(t, e) {
      throw new Error('(LinkifyIt) Invalid schema "' + t + '": ' + e);
    }
    t.__compiled__ = {}, Object.keys(t.__schemas__).forEach(function (e) {
      var r = t.__schemas__[e];
      if (null === r) return;
      var n = {
        validate: null,
        link: null
      };
      if (t.__compiled__[e] = n, "[object Object]" === ae(r)) return !function (t) {
        return "[object RegExp]" === ae(t);
      }(r.validate) ? le(r.validate) ? n.validate = r.validate : i(e, r) : n.validate = function (t) {
        return function (e, r) {
          var n = e.slice(r);
          return t.test(n) ? n.match(t)[0].length : 0;
        };
      }(r.validate), void (le(r.normalize) ? n.normalize = r.normalize : r.normalize ? i(e, r) : n.normalize = function (t, e) {
        e.normalize(t);
      });
      !function (t) {
        return "[object String]" === ae(t);
      }(r) ? i(e, r) : s.push(e);
    }), s.forEach(function (e) {
      t.__compiled__[t.__schemas__[e]] && (t.__compiled__[e].validate = t.__compiled__[t.__schemas__[e]].validate, t.__compiled__[e].normalize = t.__compiled__[t.__schemas__[e]].normalize);
    }), t.__compiled__[""] = {
      validate: null,
      normalize: function normalize(t, e) {
        e.normalize(t);
      }
    };
    var o = Object.keys(t.__compiled__).filter(function (e) {
      return e.length > 0 && t.__compiled__[e];
    }).map(he).join("|");
    t.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + o + ")", "ig"), t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i"), t.re.pretest = RegExp("(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i"), function (t) {
      t.__index__ = -1, t.__text_cache__ = "";
    }(t);
  }
  function ge(t, e) {
    var r = t.__index__,
      n = t.__last_index__,
      s = t.__text_cache__.slice(r, n);
    this.schema = t.__schema__.toLowerCase(), this.index = r + e, this.lastIndex = n + e, this.raw = s, this.text = s, this.url = s;
  }
  function ke(t, e) {
    var r = new ge(t, e);
    return t.__compiled__[r.schema].normalize(r, t), r;
  }
  function De(t, e) {
    if (!(this instanceof De)) return new De(t, e);
    var r;
    e || (r = t, Object.keys(r || {}).reduce(function (t, e) {
      return t || pe.hasOwnProperty(e);
    }, !1) && (e = t, t = {})), this.__opts__ = ce({}, pe, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = ce({}, fe, t), this.__compiled__ = {}, this.__tlds__ = _e, this.__tlds_replaced__ = !1, this.re = {}, me(this);
  }
  De.prototype.add = function (t, e) {
    return this.__schemas__[t] = e, me(this), this;
  }, De.prototype.set = function (t) {
    return this.__opts__ = ce(this.__opts__, t), this;
  }, De.prototype.test = function (t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return !1;
    var e, r, n, s, i, o, u, c, a;
    if (this.re.schema_test.test(t)) for (u = this.re.schema_search, u.lastIndex = 0; null !== (e = u.exec(t));) if (s = this.testSchemaAt(t, e[2], u.lastIndex), s) {
      this.__schema__ = e[2], this.__index__ = e.index + e[1].length, this.__last_index__ = e.index + e[0].length + s;
      break;
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (a = t.indexOf("@"), a >= 0 && null !== (n = t.match(this.re.email_fuzzy)) && (i = n.index + n[1].length, o = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = o))), this.__index__ >= 0;
  }, De.prototype.pretest = function (t) {
    return this.re.pretest.test(t);
  }, De.prototype.testSchemaAt = function (t, e, r) {
    return this.__compiled__[e.toLowerCase()] ? this.__compiled__[e.toLowerCase()].validate(t, r, this) : 0;
  }, De.prototype.match = function (t) {
    var e = [];
    var r = 0;
    this.__index__ >= 0 && this.__text_cache__ === t && (e.push(ke(this, r)), r = this.__last_index__);
    var n = r ? t.slice(r) : t;
    for (; this.test(n);) e.push(ke(this, r)), n = n.slice(this.__last_index__), r += this.__last_index__;
    return e.length ? e : null;
  }, De.prototype.matchAtStart = function (t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
    var e = this.re.schema_at_start.exec(t);
    if (!e) return null;
    var r = this.testSchemaAt(t, e[2], e[0].length);
    return r ? (this.__schema__ = e[2], this.__index__ = e.index + e[1].length, this.__last_index__ = e.index + e[0].length + r, ke(this, 0)) : null;
  }, De.prototype.tlds = function (t, e) {
    return t = Array.isArray(t) ? t : [t], e ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function (t, e, r) {
      return t !== r[e - 1];
    }).reverse(), me(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, me(this), this);
  }, De.prototype.normalize = function (t) {
    t.schema || (t.url = "http://" + t.url), "mailto:" !== t.schema || /^mailto:/i.test(t.url) || (t.url = "mailto:" + t.url);
  }, De.prototype.onCompile = function () {};
  var Ce = 2147483647,
    ye = 36,
    Ee = /^xn--/,
    Ae = /[^\0-\x7F]/,
    be = /[\x2E\u3002\uFF0E\uFF61]/g,
    Fe = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    },
    xe = Math.floor,
    we = String.fromCharCode;
  function ve(t) {
    throw new RangeError(Fe[t]);
  }
  function ze(t, e) {
    var r = t.split("@");
    var n = "";
    r.length > 1 && (n = r[0] + "@", t = r[1]);
    var s = function (t, e) {
      var r = [];
      var n = t.length;
      for (; n--;) r[n] = e(t[n]);
      return r;
    }((t = t.replace(be, ".")).split("."), e).join(".");
    return n + s;
  }
  function Se(t) {
    var e = [];
    var r = 0;
    var n = t.length;
    for (; r < n;) {
      var _s23 = t.charCodeAt(r++);
      if (_s23 >= 55296 && _s23 <= 56319 && r < n) {
        var _n42 = t.charCodeAt(r++);
        56320 == (64512 & _n42) ? e.push(((1023 & _s23) << 10) + (1023 & _n42) + 65536) : (e.push(_s23), r--);
      } else e.push(_s23);
    }
    return e;
  }
  var qe = function qe(t, e) {
      return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
    },
    Be = function Be(t, e, r) {
      var n = 0;
      for (t = r ? xe(t / 700) : t >> 1, t += xe(t / e); t > 455; n += ye) t = xe(t / 35);
      return xe(n + 36 * t / (t + 38));
    },
    Le = function Le(t) {
      var e = [],
        r = t.length;
      var n = 0,
        s = 128,
        i = 72,
        o = t.lastIndexOf("-");
      o < 0 && (o = 0);
      for (var _r34 = 0; _r34 < o; ++_r34) t.charCodeAt(_r34) >= 128 && ve("not-basic"), e.push(t.charCodeAt(_r34));
      for (var _c7 = o > 0 ? o + 1 : 0; _c7 < r;) {
        var _o22 = n;
        for (var _e55 = 1, _s24 = ye;; _s24 += ye) {
          _c7 >= r && ve("invalid-input");
          var _o23 = (u = t.charCodeAt(_c7++)) >= 48 && u < 58 ? u - 48 + 26 : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : ye;
          _o23 >= ye && ve("invalid-input"), _o23 > xe((Ce - n) / _e55) && ve("overflow"), n += _o23 * _e55;
          var _a5 = _s24 <= i ? 1 : _s24 >= i + 26 ? 26 : _s24 - i;
          if (_o23 < _a5) break;
          var _l3 = ye - _a5;
          _e55 > xe(Ce / _l3) && ve("overflow"), _e55 *= _l3;
        }
        var _a6 = e.length + 1;
        i = Be(n - _o22, _a6, 0 == _o22), xe(n / _a6) > Ce - s && ve("overflow"), s += xe(n / _a6), n %= _a6, e.splice(n++, 0, s);
      }
      var u;
      return String.fromCodePoint.apply(String, e);
    },
    Ie = function Ie(t) {
      var e = [],
        r = (t = Se(t)).length;
      var n = 128,
        s = 0,
        i = 72;
      var _iterator = _createForOfIteratorHelper(t),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _r38 = _step.value;
          _r38 < 128 && e.push(we(_r38));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var o = e.length;
      var u = o;
      for (o && e.push("-"); u < r;) {
        var _r35 = Ce;
        var _iterator2 = _createForOfIteratorHelper(t),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e56 = _step2.value;
            _e56 >= n && _e56 < _r35 && (_r35 = _e56);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _c8 = u + 1;
        _r35 - n > xe((Ce - s) / _c8) && ve("overflow"), s += (_r35 - n) * _c8, n = _r35;
        var _iterator3 = _createForOfIteratorHelper(t),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _r36 = _step3.value;
            if (_r36 < n && ++s > Ce && ve("overflow"), _r36 === n) {
              var _t34 = s;
              for (var _r37 = ye;; _r37 += ye) {
                var _n43 = _r37 <= i ? 1 : _r37 >= i + 26 ? 26 : _r37 - i;
                if (_t34 < _n43) break;
                var _s25 = _t34 - _n43,
                  _o24 = ye - _n43;
                e.push(we(qe(_n43 + _s25 % _o24, 0))), _t34 = xe(_s25 / _o24);
              }
              e.push(we(qe(_t34, 0))), i = Be(s, _c8, u === o), s = 0, ++u;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ++s, ++n;
      }
      return e.join("");
    },
    Me = {
      version: "2.3.1",
      ucs2: {
        decode: Se,
        encode: function encode(t) {
          return String.fromCodePoint.apply(String, _toConsumableArray(t));
        }
      },
      decode: Le,
      encode: Ie,
      toASCII: function toASCII(t) {
        return ze(t, function (t) {
          return Ae.test(t) ? "xn--" + Ie(t) : t;
        });
      },
      toUnicode: function toUnicode(t) {
        return ze(t, function (t) {
          return Ee.test(t) ? Le(t.slice(4).toLowerCase()) : t;
        });
      }
    };
  var Te = {
      "default": {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          typographer: !1,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 100
        },
        components: {
          core: {},
          block: {},
          inline: {}
        }
      },
      zero: {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          typographer: !1,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: ["normalize", "block", "inline", "text_join"]
          },
          block: {
            rules: ["paragraph"]
          },
          inline: {
            rules: ["text"],
            rules2: ["balance_pairs", "fragments_join"]
          }
        }
      },
      commonmark: {
        options: {
          html: !0,
          xhtmlOut: !0,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          typographer: !1,
          quotes: "\u201C\u201D\u2018\u2019",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: ["normalize", "block", "inline", "text_join"]
          },
          block: {
            rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
          },
          inline: {
            rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
            rules2: ["balance_pairs", "emphasis", "fragments_join"]
          }
        }
      }
    },
    Re = /^(vbscript|javascript|file|data):/,
    Ne = /^data:image\/(gif|png|jpeg|webp);/;
  function Pe(t) {
    var e = t.trim().toLowerCase();
    return !Re.test(e) || Ne.test(e);
  }
  var Oe = ["http:", "https:", "mailto:"];
  function je(t) {
    var e = g(t, !0);
    if (e.hostname && (!e.protocol || Oe.indexOf(e.protocol) >= 0)) try {
      e.hostname = Me.toASCII(e.hostname);
    } catch (t) {}
    return n(s(e));
  }
  function Ze(t) {
    var r = g(t, !0);
    if (r.hostname && (!r.protocol || Oe.indexOf(r.protocol) >= 0)) try {
      r.hostname = Me.toUnicode(r.hostname);
    } catch (t) {}
    return e(s(r), e.defaultChars + "%");
  }
  function $e(t, e) {
    if (!(this instanceof $e)) return new $e(t, e);
    e || Z(t) || (e = t || {}, t = "default"), this.inline = new ue(), this.block = new Ht(), this.core = new Lt(), this.renderer = new ft(), this.linkify = new De(), this.validateLink = Pe, this.normalizeLink = je, this.normalizeLinkText = Ze, this.utils = lt, this.helpers = U({}, ht), this.options = {}, this.configure(t), e && this.set(e);
  }
  return $e.prototype.set = function (t) {
    return U(this.options, t), this;
  }, $e.prototype.configure = function (t) {
    var e = this;
    if (Z(t)) {
      var _e57 = t;
      if (!(t = Te[_e57])) throw new Error('Wrong `markdown-it` preset "' + _e57 + '", check name');
    }
    if (!t) throw new Error("Wrong `markdown-it` preset, can't be empty");
    return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function (r) {
      t.components[r].rules && e[r].ruler.enableOnly(t.components[r].rules), t.components[r].rules2 && e[r].ruler2.enableOnly(t.components[r].rules2);
    }), this;
  }, $e.prototype.enable = function (t, e) {
    var r = [];
    Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function (e) {
      r = r.concat(this[e].ruler.enable(t, !0));
    }, this), r = r.concat(this.inline.ruler2.enable(t, !0));
    var n = t.filter(function (t) {
      return r.indexOf(t) < 0;
    });
    if (n.length && !e) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
    return this;
  }, $e.prototype.disable = function (t, e) {
    var r = [];
    Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function (e) {
      r = r.concat(this[e].ruler.disable(t, !0));
    }, this), r = r.concat(this.inline.ruler2.disable(t, !0));
    var n = t.filter(function (t) {
      return r.indexOf(t) < 0;
    });
    if (n.length && !e) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
    return this;
  }, $e.prototype.use = function (t) {
    var e = [this].concat(Array.prototype.slice.call(arguments, 1));
    return t.apply(t, e), this;
  }, $e.prototype.parse = function (t, e) {
    if ("string" != typeof t) throw new Error("Input data should be a String");
    var r = new this.core.State(t, this, e);
    return this.core.process(r), r.tokens;
  }, $e.prototype.render = function (t, e) {
    return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
  }, $e.prototype.parseInline = function (t, e) {
    var r = new this.core.State(t, this, e);
    return r.inlineMode = !0, this.core.process(r), r.tokens;
  }, $e.prototype.renderInline = function (t, e) {
    return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
  }, $e;
});

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightJS: () => (/* reexport default export from named module */ _lib_core_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
// https://nodejs.org/api/packages.html#packages_writing_dual_packages_while_avoiding_or_minimizing_hazards


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_core_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 3 */
/***/ ((module) => {

/* eslint-disable no-multi-assign */

function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear =
      obj.delete =
      obj.set =
        function () {
          throw new Error('map is read-only');
        };
  } else if (obj instanceof Set) {
    obj.add =
      obj.clear =
      obj.delete =
        function () {
          throw new Error('set is read-only');
        };
  }

  // Freeze self
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = obj[name];
    const type = typeof prop;

    // Freeze prop if it is an object or function and also not already frozen
    if ((type === 'object' || type === 'function') && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return obj;
}

/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
/** @typedef {import('highlight.js').CompiledMode} CompiledMode */
/** @implements CallbackResponse */

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit$1(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  // rarely we can have a sublanguage where language is undefined
  // TODO: track down why
  return !!node.scope;
};

/**
 *
 * @param {string} name
 * @param {{prefix:string}} options
 */
const scopeToCSSClass = (name, { prefix }) => {
  // sub-language
  if (name.startsWith("language:")) {
    return name.replace("language:", "language-");
  }
  // tiered scope: comment.line
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...(pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`))
    ].join(" ");
  }
  // simple scope
  return `${prefix}${name}`;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    const className = scopeToCSSClass(node.scope,
      { prefix: this.classPrefix });
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */
/** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */
/** @typedef {import('highlight.js').Emitter} Emitter */
/**  */

/** @returns {DataNode} */
const newNode = (opts = {}) => {
  /** @type DataNode */
  const result = { children: [] };
  Object.assign(result, opts);
  return result;
};

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = newNode();
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} scope */
  openNode(scope) {
    /** @type Node */
    const node = newNode({ scope });
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addText(text)
  - __addSublanguage(emitter, subLanguageName)
  - startScope(scope)
  - endScope()
  - finalize()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /** @param {string} scope */
  startScope(scope) {
    this.openNode(scope);
  }

  endScope() {
    this.closeNode();
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    if (name) node.scope = `language:${name}`;

    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    this.closeAllNodes();
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function anyNumberOfTimes(re) {
  return concat('(?:', re, ')*');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(?:', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];

  if (typeof opts === 'object' && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}

/** @typedef { {capture?: boolean} } RegexEitherOptions */

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */
function either(...args) {
  /** @type { object & {capture?: boolean} }  */
  const opts = stripOptionsFromArgs(args);
  const joined = '('
    + (opts.capture ? "" : "?:")
    + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp | string} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {{joinWith: string}} opts
 * @returns {string}
 */
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(joinWith);
}

/** @typedef {import('highlight.js').Mode} Mode */
/** @typedef {import('highlight.js').ModeCallback} ModeCallback */

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit$1({
    scope: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  scope: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: 'doctag',
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/, // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
  );
  // looking like plain text, more likely to be a comment
  mode.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---

      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827

      begin: concat(
        /[ ]+/, // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        '(',
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        '){3}') // look for 3 words in a row
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  scope: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [BACKSLASH_ESCAPE]
    }
  ]
};
const TITLE_MODE = {
  scope: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: APOS_STRING_MODE,
  BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
  BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
  BINARY_NUMBER_RE: BINARY_NUMBER_RE,
  COMMENT: COMMENT,
  C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
  C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
  C_NUMBER_MODE: C_NUMBER_MODE,
  C_NUMBER_RE: C_NUMBER_RE,
  END_SAME_AS_BEGIN: END_SAME_AS_BEGIN,
  HASH_COMMENT_MODE: HASH_COMMENT_MODE,
  IDENT_RE: IDENT_RE,
  MATCH_NOTHING_RE: MATCH_NOTHING_RE,
  METHOD_GUARD: METHOD_GUARD,
  NUMBER_MODE: NUMBER_MODE,
  NUMBER_RE: NUMBER_RE,
  PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
  QUOTE_STRING_MODE: QUOTE_STRING_MODE,
  REGEXP_MODE: REGEXP_MODE,
  RE_STARTERS_RE: RE_STARTERS_RE,
  SHEBANG: SHEBANG,
  TITLE_MODE: TITLE_MODE,
  UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
  UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE
});

/**
@typedef {import('highlight.js').CallbackResponse} CallbackResponse
@typedef {import('highlight.js').CompilerExt} CompilerExt
*/

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}

/**
 *
 * @type {CompilerExt}
 */
function scopeClassName(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.className !== undefined) {
    mode.scope = mode.className;
    delete mode.className;
  }
}

/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch) return;
  // starts conflicts with endsParent which we need to make sure the child
  // rule is not matched multiple times
  if (mode.starts) throw new Error("beforeMatch cannot be used with starts");

  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => { delete mode[key]; });

  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;

  delete originalMode.beforeMatch;
};

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_SCOPE = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  /** @type {import("highlight.js/private").KeywordDict} */
  const compiledKeywords = Object.create(null);

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing scopeName (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} scopeName
   * @param {Array<string>} keywordList
   */
  function compileList(scopeName, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/* eslint-disable no-throw-literal */

/**
@typedef {import('highlight.js').CompiledMode} CompiledMode
*/

const MultiClassError = new Error();

/**
 * Renumbers labeled scope names to account for additional inner match
 * groups that otherwise would break everything.
 *
 * Lets say we 3 match scopes:
 *
 *   { 1 => ..., 2 => ..., 3 => ... }
 *
 * So what we need is a clean match like this:
 *
 *   (a)(b)(c) => [ "a", "b", "c" ]
 *
 * But this falls apart with inner match groups:
 *
 * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
 *
 * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
 * What needs to happen is the numbers are remapped:
 *
 *   { 1 => ..., 2 => ..., 5 => ... }
 *
 * We also need to know that the ONLY groups that should be output
 * are 1, 2, and 5.  This function handles this behavior.
 *
 * @param {CompiledMode} mode
 * @param {Array<RegExp | string>} regexes
 * @param {{key: "beginScope"|"endScope"}} opts
 */
function remapScopeNames(mode, regexes, { key }) {
  let offset = 0;
  const scopeNames = mode[key];
  /** @type Record<number,boolean> */
  const emit = {};
  /** @type Record<number,string> */
  const positions = {};

  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset] = scopeNames[i];
    emit[i + offset] = true;
    offset += countMatchGroups(regexes[i - 1]);
  }
  // we use _emit to keep track of which match groups are "top-level" to avoid double
  // output from inside match groups
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}

/**
 * @param {CompiledMode} mode
 */
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin)) return;

  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}

/**
 * @param {CompiledMode} mode
 */
function endMultiClass(mode) {
  if (!Array.isArray(mode.end)) return;

  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}

/**
 * this exists only to allow `scope: {}` to be used beside `match:`
 * Otherwise `beginScope` would necessary and that would look weird

  {
    match: [ /def/, /\w+/ ]
    scope: { 1: "keyword" , 2: "title" }
  }

 * @param {CompiledMode} mode
 */
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}

/**
 * @param {CompiledMode} mode
 */
function MultiClass(mode) {
  scopeSugar(mode);

  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }

  beginMultiClass(mode);
  endMultiClass(mode);
}

/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
*/

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */
function compileLanguage(language) {
  /**
   * Builds a regex with the case sensitivity of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm'
      + (language.case_insensitive ? 'i' : '')
      + (language.unicodeRegex ? 'u' : '')
      + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: '|' }), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      // we need a copy because keywords might be compiled multiple times
      // so we can't go deleting $pattern from the original on the first
      // pass
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit$1(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "11.10.0";

class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/



/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').CompiledScope} CompiledScope
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSApi} HLJSApi
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').PluginEvent} PluginEvent
@typedef {import('highlight.js').HLJSOptions} HLJSOptions
@typedef {import('highlight.js').LanguageFn} LanguageFn
@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
@typedef {import('highlight.js/private').MatchType} MatchType
@typedef {import('highlight.js/private').KeywordData} KeywordData
@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
@typedef {import('highlight.js').HighlightOptions} HighlightOptions
@typedef {import('highlight.js').HighlightResult} HighlightResult
*/


const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    cssSelector: 'pre code',
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrLanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }

    // https://github.com/highlightjs/highlight.js/issues/3149
    // eslint-disable-next-line no-undefined
    if (ignoreIllegals === undefined) { ignoreIllegals = true; }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = Object.create(null);

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {string} matchText - the textual match
     * @returns {KeywordData | false}
     */
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substring(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result._top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.__addSublanguage(result._emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {string} text
     * @param {string} scope
     */
    function emitKeyword(keyword, scope) {
      if (keyword === "") return;

      emitter.startScope(scope);
      emitter.addText(keyword);
      emitter.endScope();
    }

    /**
     * @param {CompiledScope} scope
     * @param {RegExpMatchArray} match
     */
    function emitMultiClass(scope, match) {
      let i = 1;
      const max = match.length - 1;
      while (i <= max) {
        if (!scope._emit[i]) { i++; continue; }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text = match[i];
        if (klass) {
          emitKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }

    /**
     * @param {CompiledMode} mode - new mode to start
     * @param {RegExpMatchArray} match
     */
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        // beginScope just wraps the begin match itself in a scope
        if (mode.beginScope._wrap) {
          emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          // at this point modeBuffer should just be the match
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }

      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexes to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substring(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  An potential end match that was
      triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
      (this could be because a callback requests the match be ignored, etc)

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language);
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      if (!language.__emitTokens) {
        top.matcher.considerAll();

        for (;;) {
          iterations++;
          if (resumeScanAtSamePosition) {
            // only regexes not matched previously will now be
            // considered for a potential match
            resumeScanAtSamePosition = false;
          } else {
            top.matcher.considerAll();
          }
          top.matcher.lastIndex = index;

          const match = top.matcher.exec(codeToHighlight);
          // console.log("match", match[0], match.rule && match.rule.begin)

          if (!match) break;

          const beforeMatch = codeToHighlight.substring(index, match.index);
          const processedCount = processLexeme(beforeMatch, match);
          index = match.index + processedCount;
        }
        processLexeme(codeToHighlight.substring(index));
      } else {
        language.__emitTokens(codeToHighlight, emitter);
      }

      emitter.finalize();
      result = emitter.toHTML();

      return {
        language: languageName,
        value: result,
        relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - secondBest (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.secondBest = secondBest;

    return result;
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = (currentLang && aliases[currentLang]) || resultLang;

    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }

  /**
   * Applies highlighting to a DOM node containing code.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightElement",
      { el: element, language });

    if (element.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
      return;
    }

    // we should be all text, no child nodes (unescaped HTML) - this is possibly
    // an HTML injection attack - it's likely too late if this is already in
    // production (the code has likely already done its damage by the time
    // we're seeing it)... but we yell loudly about this so that hopefully it's
    // more likely to be caught in development before making it to production
    if (element.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element.innerHTML
        );
        throw err;
      }
    }

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    element.innerHTML = result.value;
    element.dataset.highlighted = "yes";
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }

    fire("after:highlightElement", { el: element, result, text });
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }

  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };

  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function removePlugin(plugin) {
    const index = plugins.indexOf(plugin);
    if (index !== -1) {
      plugins.splice(index, 1);
    }
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
   * DEPRECATED
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin,
    removePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  hljs.regex = {
    concat: concat,
    lookahead: lookahead,
    either: either,
    optional: optional,
    anyNumberOfTimes: anyNumberOfTimes
  };

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreeze(MODES[key]);
    }
  }

  // merge all the modes/regexes into our main object
  Object.assign(hljs, MODES);

  return hljs;
};

// Other names for the variable may break build script
const highlight = HLJS({});

// returns a new instance of the highlighter to be used for extensions
// check https://github.com/wooorm/lowlight/issues/47
highlight.newInstance = () => HLJS({});

module.exports = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;


/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ javascript)
/* harmony export */ });
const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
const TYPES = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];

const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);

/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/


/** @type LanguageFn */
function javascript(hljs) {
  const regex = hljs.regex;
  /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };

  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  // to avoid some special cases inside isTrulyOpeningTag
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" ||
        // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
        ) {
        response.ignoreMatch();
        return;
      }

      // `<something>`
      // Quite possibly a tag, lets look for a matching closing tag...
      if (nextChar === ">") {
        // if we cannot find a matching closing tag, then we
        // will ignore it
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }

      // `<blah />` (self-closing)
      // handled by simpleSelfClosing rule

      let m;
      const afterMatch = match.input.substring(afterMatchIndex);

      // some more template typing stuff
      //  <T = any>(key?: string) => Modify<
      if ((m = afterMatch.match(/^\s*=/))) {
        response.ignoreMatch();
        return;
      }

      // `<From extends string>`
      // technically this could be HTML, but it smells like a type
      // NOTE: This is ugh, but added specifically for https://github.com/highlightjs/highlight.js/issues/3276
      if ((m = afterMatch.match(/^\s+extends\s+/))) {
        if (m.index === 0) {
          response.ignoreMatch();
          // eslint-disable-next-line no-useless-return
          return;
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };

  // https://tc39.es/ecma262/#sec-literals-numeric-literals
  const decimalDigits = '[0-9](_?[0-9])*';
  const frac = `\\.(${decimalDigits})`;
  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: 'number',
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
        `[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" },
    ],
    relevance: 0
  };

  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS$1,
    contains: [] // defined later
  };
  const HTML_TEMPLATE = {
    begin: '\.?html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml'
    }
  };
  const CSS_TEMPLATE = {
    begin: '\.?css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css'
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: '\.?gql`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'graphql'
    }
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    '\\*/',
    {
      relevance: 0,
      contains: [
        {
          begin: '(?=@[A-Za-z]+)',
          relevance: 0,
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            },
            {
              className: 'type',
              begin: '\\{',
              end: '\\}',
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: 'variable',
              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER,
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS
    .concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: 'params',
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/, // to match the parms with 
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };

  // ES6 classes
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      },

    ]
  };

  const CLASS_REFERENCE = {
    relevance: 0,
    match:
    regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };

  const USE_STRICT = {
    label: "use_strict",
    className: 'meta',
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };

  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [ PARAMS ],
    illegal: /%/
  };

  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };

  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }

  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ].map(x => `${x}\\s*\\(`)),
      IDENT_RE$1, regex.lookahead(/\s*\(/)),
    className: "title.function",
    relevance: 0
  };

  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };

  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      { // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };

  const FUNC_LEAD_IN_RE = '(\\(' +
    '[^()]*(\\(' +
    '[^()]*(\\(' +
    '[^()]*' +
    '\\)[^()]*)*' +
    '\\)[^()]*)*' +
    '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>';

  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/, /\s+/,
      IDENT_RE$1, /\s*/,
      /=\s*/,
      /(async\s*)?/, // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };

  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: 'attr',
        begin: IDENT_RE$1 + regex.lookahead(':'),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }
            ]
          }
        ],
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: '\\b(?!function)' + hljs.UNDERSCORE_IDENT_RE +
          '\\(' + // first parens
          '[^()]*(\\(' +
            '[^()]*(\\(' +
              '[^()]*' +
            '\\)[^()]*)*' +
          '\\)[^()]*)*' +
          '\\)\\s*\\{', // end parens
        returnBegin:true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: '\\$' + IDENT_RE$1,
        relevance: 0
      },
      {
        match: [ /\bconstructor(?=\s*\()/ ],
        className: { 1: "title.function" },
        contains: [ PARAMS ]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}




/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ python)
/* harmony export */ });
/*
Language: Python
Description: Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
Website: https://www.python.org
Category: common
*/

function python(hljs) {
  const regex = hljs.regex;
  const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
  const RESERVED_WORDS = [
    'and',
    'as',
    'assert',
    'async',
    'await',
    'break',
    'case',
    'class',
    'continue',
    'def',
    'del',
    'elif',
    'else',
    'except',
    'finally',
    'for',
    'from',
    'global',
    'if',
    'import',
    'in',
    'is',
    'lambda',
    'match',
    'nonlocal|10',
    'not',
    'or',
    'pass',
    'raise',
    'return',
    'try',
    'while',
    'with',
    'yield'
  ];

  const BUILT_INS = [
    '__import__',
    'abs',
    'all',
    'any',
    'ascii',
    'bin',
    'bool',
    'breakpoint',
    'bytearray',
    'bytes',
    'callable',
    'chr',
    'classmethod',
    'compile',
    'complex',
    'delattr',
    'dict',
    'dir',
    'divmod',
    'enumerate',
    'eval',
    'exec',
    'filter',
    'float',
    'format',
    'frozenset',
    'getattr',
    'globals',
    'hasattr',
    'hash',
    'help',
    'hex',
    'id',
    'input',
    'int',
    'isinstance',
    'issubclass',
    'iter',
    'len',
    'list',
    'locals',
    'map',
    'max',
    'memoryview',
    'min',
    'next',
    'object',
    'oct',
    'open',
    'ord',
    'pow',
    'print',
    'property',
    'range',
    'repr',
    'reversed',
    'round',
    'set',
    'setattr',
    'slice',
    'sorted',
    'staticmethod',
    'str',
    'sum',
    'super',
    'tuple',
    'type',
    'vars',
    'zip'
  ];

  const LITERALS = [
    '__debug__',
    'Ellipsis',
    'False',
    'None',
    'NotImplemented',
    'True'
  ];

  // https://docs.python.org/3/library/typing.html
  // TODO: Could these be supplemented by a CamelCase matcher in certain
  // contexts, leaving these remaining only for relevance hinting?
  const TYPES = [
    "Any",
    "Callable",
    "Coroutine",
    "Dict",
    "List",
    "Literal",
    "Generic",
    "Optional",
    "Sequence",
    "Set",
    "Tuple",
    "Type",
    "Union"
  ];

  const KEYWORDS = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS,
    literal: LITERALS,
    type: TYPES
  };

  const PROMPT = {
    className: 'meta',
    begin: /^(>>>|\.\.\.) /
  };

  const SUBST = {
    className: 'subst',
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };

  const LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };

  const STRING = {
    className: 'string',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };

  // https://docs.python.org/3.9/reference/lexical_analysis.html#numeric-literals
  const digitpart = '[0-9](_?[0-9])*';
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  // Whitespace after a number (or any lexical token) is needed only if its absence
  // would change the tokenization
  // https://docs.python.org/3.9/reference/lexical_analysis.html#whitespace-between-tokens
  // We deviate slightly, requiring a word boundary or a keyword
  // to avoid accidentally recognizing *prefixes* (e.g., `0` in `0x41` or `08` or `0__1`)
  const lookahead = `\\b|${RESERVED_WORDS.join('|')}`;
  const NUMBER = {
    className: 'number',
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
      },
      {
        begin: `(${pointfloat})[jJ]?`
      },

      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
      },

      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${digitpart})[jJ](?=${lookahead})`
      }
    ]
  };
  const COMMENT_TYPE = {
    className: "comment",
    begin: regex.lookahead(/# type:/),
    end: /$/,
    keywords: KEYWORDS,
    contains: [
      { // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: true
      }
    ]
  };
  const PARAMS = {
    className: 'params',
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: true
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          'self',
          PROMPT,
          NUMBER,
          STRING,
          hljs.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  SUBST.contains = [
    STRING,
    NUMBER,
    PROMPT
  ];

  return {
    name: 'Python',
    aliases: [
      'py',
      'gyp',
      'ipython'
    ],
    unicodeRegex: true,
    keywords: KEYWORDS,
    illegal: /(<\/|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      {
        // very common convention
        scope: 'variable.language',
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      STRING,
      COMMENT_TYPE,
      hljs.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/, /\s+/,
          IDENT_RE,
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [ PARAMS ]
      },
      {
        variants: [
          {
            match: [
              /\bclass/, /\s+/,
              IDENT_RE, /\s*/,
              /\(\s*/, IDENT_RE,/\s*\)/
            ],
          },
          {
            match: [
              /\bclass/, /\s+/,
              IDENT_RE
            ],
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited",
        }
      },
      {
        className: 'meta',
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          NUMBER,
          PARAMS,
          STRING
        ]
      }
    ]
  };
}




/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/c" instead of "highlight.js/lib/languages/c.js"'
      );
    }
  }
  emitWarning();
    
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/*
Language: C
Category: common, system
Website: https://en.wikipedia.org/wiki/C_(programming_language)
*/

/** @type LanguageFn */
function c(hljs) {
  const regex = hljs.regex;
  // added for historic reasons because `hljs.C_LINE_COMMENT_MODE` does
  // not include such support nor can we be sure all the grammars depending
  // on it would desire this behavior
  const C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$', { contains: [ { begin: /\\\n/ } ] });
  const DECLTYPE_AUTO_RE = 'decltype\\(auto\\)';
  const NAMESPACE_RE = '[a-zA-Z_]\\w*::';
  const TEMPLATE_ARGUMENT_RE = '<[^<>]+>';
  const FUNCTION_TYPE_RE = '('
    + DECLTYPE_AUTO_RE + '|'
    + regex.optional(NAMESPACE_RE)
    + '[a-zA-Z_]\\w*' + regex.optional(TEMPLATE_ARGUMENT_RE)
  + ')';


  const TYPES = {
    className: 'type',
    variants: [
      { begin: '\\b[a-z\\d_]*_t\\b' },
      { match: /\batomic_[a-z]{3,6}\b/ }
    ]

  };

  // https://en.cppreference.com/w/cpp/language/escape
  // \\ \x \xFF \u2837 \u00323747 \374
  const CHARACTER_ESCAPES = '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)';
  const STRINGS = {
    className: 'string',
    variants: [
      {
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ]
      },
      {
        begin: '(u8?|U|L)?\'(' + CHARACTER_ESCAPES + "|.)",
        end: '\'',
        illegal: '.'
      },
      hljs.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })
    ]
  };

  const NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(0b[01\']+)' },
      { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)' },
      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
    ],
    relevance: 0
  };

  const PREPROCESSOR = {
    className: 'meta',
    begin: /#\s*[a-z]+\b/,
    end: /$/,
    keywords: { keyword:
        'if else elif endif define undef warning error line '
        + 'pragma _Pragma ifdef ifndef elifdef elifndef include' },
    contains: [
      {
        begin: /\\\n/,
        relevance: 0
      },
      hljs.inherit(STRINGS, { className: 'string' }),
      {
        className: 'string',
        begin: /<.*?>/
      },
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  const TITLE_MODE = {
    className: 'title',
    begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
    relevance: 0
  };

  const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\s*\\(';

  const C_KEYWORDS = [
    "asm",
    "auto",
    "break",
    "case",
    "continue",
    "default",
    "do",
    "else",
    "enum",
    "extern",
    "for",
    "fortran",
    "goto",
    "if",
    "inline",
    "register",
    "restrict",
    "return",
    "sizeof",
    "typeof",
    "typeof_unqual",
    "struct",
    "switch",
    "typedef",
    "union",
    "volatile",
    "while",
    "_Alignas",
    "_Alignof",
    "_Atomic",
    "_Generic",
    "_Noreturn",
    "_Static_assert",
    "_Thread_local",
    // aliases
    "alignas",
    "alignof",
    "noreturn",
    "static_assert",
    "thread_local",
    // not a C keyword but is, for all intents and purposes, treated exactly like one.
    "_Pragma"
  ];

  const C_TYPES = [
    "float",
    "double",
    "signed",
    "unsigned",
    "int",
    "short",
    "long",
    "char",
    "void",
    "_Bool",
    "_BitInt",
    "_Complex",
    "_Imaginary",
    "_Decimal32",
    "_Decimal64",
    "_Decimal96",
    "_Decimal128",
    "_Decimal64x",
    "_Decimal128x",
    "_Float16",
    "_Float32",
    "_Float64",
    "_Float128",
    "_Float32x",
    "_Float64x",
    "_Float128x",
    // modifiers
    "const",
    "static",
    "constexpr",
    // aliases
    "complex",
    "bool",
    "imaginary"
  ];

  const KEYWORDS = {
    keyword: C_KEYWORDS,
    type: C_TYPES,
    literal: 'true false NULL',
    // TODO: apply hinting work similar to what was done in cpp.js
    built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream '
      + 'auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set '
      + 'unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos '
      + 'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp '
      + 'fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper '
      + 'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow '
      + 'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp '
      + 'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan '
      + 'vfprintf vprintf vsprintf endl initializer_list unique_ptr',
  };

  const EXPRESSION_CONTAINS = [
    PREPROCESSOR,
    TYPES,
    C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];

  const EXPRESSION_CONTEXT = {
    // This mode covers expression context where we can't expect a function
    // definition and shouldn't highlight anything that looks like one:
    // `return some()`, `else if()`, `(x*sum(1, 2))`
    variants: [
      {
        begin: /=/,
        end: /;/
      },
      {
        begin: /\(/,
        end: /\)/
      },
      {
        beginKeywords: 'new throw return else',
        end: /;/
      }
    ],
    keywords: KEYWORDS,
    contains: EXPRESSION_CONTAINS.concat([
      {
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([ 'self' ]),
        relevance: 0
      }
    ]),
    relevance: 0
  };

  const FUNCTION_DECLARATION = {
    begin: '(' + FUNCTION_TYPE_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
    returnBegin: true,
    end: /[{;=]/,
    excludeEnd: true,
    keywords: KEYWORDS,
    illegal: /[^\w\s\*&:<>.]/,
    contains: [
      { // to prevent it from being confused as the function title
        begin: DECLTYPE_AUTO_RE,
        keywords: KEYWORDS,
        relevance: 0
      },
      {
        begin: FUNCTION_TITLE,
        returnBegin: true,
        contains: [ hljs.inherit(TITLE_MODE, { className: "title.function" }) ],
        relevance: 0
      },
      // allow for multiple declarations, e.g.:
      // extern void f(int), g(char);
      {
        relevance: 0,
        match: /,/
      },
      {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [
          C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          STRINGS,
          NUMBERS,
          TYPES,
          // Count matching parentheses.
          {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              'self',
              C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              TYPES
            ]
          }
        ]
      },
      TYPES,
      C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      PREPROCESSOR
    ]
  };

  return {
    name: "C",
    aliases: [ 'h' ],
    keywords: KEYWORDS,
    // Until differentiations are added between `c` and `cpp`, `c` will
    // not be auto-detected to avoid auto-detect conflicts between C and C++
    disableAutodetect: true,
    illegal: '</',
    contains: [].concat(
      EXPRESSION_CONTEXT,
      FUNCTION_DECLARATION,
      EXPRESSION_CONTAINS,
      [
        PREPROCESSOR,
        {
          begin: hljs.IDENT_RE + '::',
          keywords: KEYWORDS
        },
        {
          className: 'class',
          beginKeywords: 'enum class struct union',
          end: /[{;:<>=]/,
          contains: [
            { beginKeywords: "final class struct" },
            hljs.TITLE_MODE
          ]
        }
      ]),
    exports: {
      preprocessor: PREPROCESSOR,
      strings: STRINGS,
      keywords: KEYWORDS
    }
  };
}




/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_dark_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_4_0_0_webpack_5_93_0_webpack_cli_5_1_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_dark_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_dark_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_dark_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_cjs_js_dark_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


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
/* 10 */
/***/ ((module) => {

"use strict";


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
/* 11 */
/***/ ((module) => {

"use strict";


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
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";


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
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_7_1_2_webpack_5_93_0_webpack_cli_5_1_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#ddd;background:#303030}.hljs-keyword,.hljs-link,.hljs-literal,.hljs-section,.hljs-selector-tag{color:#fff}.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-name,.hljs-string,.hljs-symbol,.hljs-template-tag,.hljs-template-variable,.hljs-title,.hljs-type,.hljs-variable{color:#d88}.hljs-comment,.hljs-deletion,.hljs-meta,.hljs-quote{color:#979797}.hljs-doctag,.hljs-keyword,.hljs-literal,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-strong,.hljs-title,.hljs-type{font-weight:700}.hljs-emphasis{font-style:italic}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";


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

/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markdown_it_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _markdown_it_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_markdown_it_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var highlight_js_lib_languages_python__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var highlight_js_lib_languages_c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var highlight_js_styles_dark_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
// import "https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/dist/markdown-it.min.js"
// console.log(markdownIt)






highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage('python', highlight_js_lib_languages_python__WEBPACK_IMPORTED_MODULE_3__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage('c', highlight_js_lib_languages_c_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
// import "./Highlight/languages/javascript.js"
// import "./Highlight/styles/dark.min.css"
console.log((_markdown_it_min_js__WEBPACK_IMPORTED_MODULE_0___default()));
function loadCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}
loadCSS(chrome.runtime.getURL('./Highlight/styles/dark.min.css'));

// hljs.registerLanguage('javascript', javascript);
// hljs.registerLanguage('python', python);

var styles = "\n\npre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}\n.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}\n\n";
var md = _markdown_it_min_js__WEBPACK_IMPORTED_MODULE_0___default()({
  highlight: function highlight(str, lang) {
    console.log("highlight js", lang);
    if (lang && highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguage(lang)) {
      try {
        return "<pre class=\"hljs\"><code class=\"hljs\">".concat(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].highlight(str, {
          language: lang
        }).value, "</code></pre>");
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
});
var result = md.render('# markdown-it rulezz!');
console.log(result, "MARKDOWN RESULT");
// Wait for the DOM to load

function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    // Navigator clipboard api method'
    navigator.clipboard.writeText(text).then(function () {
      console.log('Text copied to clipboard');
    })["catch"](function (err) {
      console.error('Error in copying text: ', err);
    });
  } else {
    // Fallback method for older browsers
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Set the textArea position and style to make it invisible
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    console.log('Text copied to clipboard (fallback)');
  }
}
console.log("content script");
// document.addEventListener("DOMContentLoaded", () => {
setTimeout(function () {
  console.log("trying to find div element");
  var targetDiv_ = document.querySelector('.article-host.article-body.center-block');
  var shadowRoot = targetDiv_.shadowRoot;
  var targetDiv = shadowRoot.querySelector('.fr-view.article-body');
  console.log(targetDiv);
  // setTimeout(() => {
  //     console.log(t)
  // }, 10000);

  if (targetDiv) {
    var textBlob = "";

    // Get all p elements
    // const paragraphs = targetDiv.getElementsByTagName('p');
    targetDiv.childNodes.forEach(function (e) {
      // console.log(e, "child nodes")
      e.childNodes.forEach(function (m) {
        if (m.nodeType === Node.TEXT_NODE) {
          // Append the text content
          textBlob += m.textContent;
        } else if (m.nodeName === 'BR') {
          // Append an empty line for <br> elements
          console.log("adding white space");
          textBlob += '\n';
        }
      });
      textBlob += '\n';
    });
    // console.log(paragraphs, "paragraphs")
    // for (let p of paragraphs) {
    //   const text = p.textContent.trim();
    //   // if (text.startsWith("kofi::code::start") && text.endsWith("kofi::code::end")) {
    //     textBlob += text + "\n";
    //   // }
    // }

    console.log(textBlob, "blob");
    copyTextToClipboard(textBlob);
    // Parse markdown using a markdown library (e.g., marked.js)
    var parsedMarkdown = md.render(textBlob);
    console.log(parsedMarkdown, "helllow");

    // Create a new div with the parsed content
    var newDiv = document.createElement('div');
    var css = document.createElement("style");
    css.type = 'text/css';
    css.innerHTML = styles;
    shadowRoot.appendChild(css);
    newDiv.innerHTML = parsedMarkdown;

    // Replace the old div with the new one
    targetDiv.parentNode.replaceChild(newDiv, targetDiv);
  }
}, 3000);

//   });
})();

/******/ })()
;