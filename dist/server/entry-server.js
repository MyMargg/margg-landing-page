import { jsx, jsxs } from "react/jsx-runtime";
import r, { createElement, useMemo, useState, useRef, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { Routes, Route, StaticRouter } from "react-router-dom";
import { useSelector, Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { __assign, __spreadArray } from "tslib";
import n from "@emotion/is-prop-valid";
import * as s from "stylis";
import i from "@emotion/unitless";
import { motion } from "framer-motion";
var a = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", c = "active", u = "data-styled-version", l = "6.3.11", p = "/*!sc*/\n", d = "undefined" != typeof window && "undefined" != typeof document, h = void 0 === r.createContext, f = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV), y = "production" !== process.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n", 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function v() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n2 = e[0], r2 = [], o = 1, s2 = e.length; o < s2; o += 1) r2.push(e[o]);
  return r2.forEach(function(e2) {
    n2 = n2.replace(/%[a-z]/, e2);
  }), n2;
}
function g(t) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
  return "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n2.length > 0 ? " Args: ".concat(n2.join(", ")) : "")) : new Error(v.apply(void 0, __spreadArray([y[t]], n2, false)).trim());
}
var S = 1 << 30, w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), N = 1, C = function(e) {
  if (w.has(e)) return w.get(e);
  for (; b.has(N); ) N++;
  var t = N++;
  if ("production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > S)) throw g(16, "".concat(t));
  return w.set(e, t), b.set(t, e), t;
}, E = function(e, t) {
  N = t + 1, w.set(e, t), b.set(t, e);
}, _ = /invalid hook call/i, A = /* @__PURE__ */ new Set(), I = function(t, n2) {
  if ("production" !== process.env.NODE_ENV) {
    if (h) return;
    var o = n2 ? ' with the id of "'.concat(n2, '"') : "", s2 = "The component ".concat(t).concat(o, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n", i2 = console.error;
    try {
      var a2 = true;
      console.error = function(t2) {
        for (var n3 = [], r2 = 1; r2 < arguments.length; r2++) n3[r2 - 1] = arguments[r2];
        _.test(t2) ? (a2 = false, A.delete(s2)) : i2.apply(void 0, __spreadArray([t2], n3, false));
      }, "function" == typeof r.useState && r.useState(null), a2 && !A.has(s2) && (console.warn(s2), A.add(s2));
    } catch (e) {
      _.test(e.message) && A.delete(s2);
    } finally {
      console.error = i2;
    }
  }
}, P = Object.freeze([]), O = Object.freeze({});
function D(e, t, n2) {
  return void 0 === n2 && (n2 = O), e.theme !== n2.theme && e.theme || t || n2.theme;
}
var T = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]), R = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, x = /(^-|-$)/g;
function j(e) {
  return e.replace(R, "-").replace(x, "");
}
var k = /(a)(d)/gi, M = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function V(e) {
  var t, n2 = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n2 = M(t % 52) + n2;
  return (M(t % 52) + n2).replace(k, "$1-$2");
}
var F, G = function(e, t) {
  for (var n2 = t.length; n2; ) e = 33 * e ^ t.charCodeAt(--n2);
  return e;
}, z = function(e) {
  return G(5381, e);
};
function B(e) {
  return V(z(e) >>> 0);
}
function L(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function $(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Y = "function" == typeof Symbol && Symbol.for, W = Y ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, q = Y ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, H = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, U = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, J = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, X = ((F = {})[q] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, F[W] = J, F);
function Z(e) {
  return ("type" in (t = e) && t.type.$$typeof) === W ? J : "$$typeof" in e ? X[e.$$typeof] : H;
  var t;
}
var K = Object.defineProperty, Q = Object.getOwnPropertyNames, ee = Object.getOwnPropertySymbols, te = Object.getOwnPropertyDescriptor, ne = Object.getPrototypeOf, re = Object.prototype;
function oe(e, t, n2) {
  if ("string" != typeof t) {
    if (re) {
      var r2 = ne(t);
      r2 && r2 !== re && oe(e, r2, n2);
    }
    var o = Q(t);
    ee && (o = o.concat(ee(t)));
    for (var s2 = Z(e), i2 = Z(t), a2 = 0; a2 < o.length; ++a2) {
      var c2 = o[a2];
      if (!(c2 in U || n2 && n2[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
        var u2 = te(t, c2);
        try {
          K(e, c2, u2);
        } catch (e2) {
        }
      }
    }
  }
  return e;
}
function se(e) {
  return "function" == typeof e;
}
function ie(e) {
  return "object" == typeof e && "styledComponentId" in e;
}
function ae(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ce(e, t) {
  return e.join(t || "");
}
function ue(e) {
  return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n2) {
  if (void 0 === n2 && (n2 = false), !n2 && !ue(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r2 = 0; r2 < t.length; r2++) e[r2] = le(e[r2], t[r2]);
  else if (ue(t)) for (var r2 in t) e[r2] = le(e[r2], t[r2]);
  return e;
}
function pe(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var de = (function() {
  function e(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2, this._cGroup = 0, this._cIndex = 0;
  }
  return e.prototype.indexOfGroup = function(e2) {
    if (e2 === this._cGroup) return this._cIndex;
    var t = this._cIndex;
    if (e2 > this._cGroup) for (var n2 = this._cGroup; n2 < e2; n2++) t += this.groupSizes[n2];
    else for (n2 = this._cGroup - 1; n2 >= e2; n2--) t -= this.groupSizes[n2];
    return this._cGroup = e2, this._cIndex = t, t;
  }, e.prototype.insertRules = function(e2, t) {
    if (e2 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o = r2; e2 >= o; ) if ((o <<= 1) < 0) throw g(16, "".concat(e2));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n2), this.length = o;
      for (var s2 = r2; s2 < o; s2++) this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e2 + 1), a2 = 0, c2 = (s2 = 0, t.length); s2 < c2; s2++) this.tag.insertRule(i2, t[s2]) && (this.groupSizes[e2]++, i2++, a2++);
    a2 > 0 && this._cGroup > e2 && (this._cIndex += a2);
  }, e.prototype.clearGroup = function(e2) {
    if (e2 < this.length) {
      var t = this.groupSizes[e2], n2 = this.indexOfGroup(e2), r2 = n2 + t;
      this.groupSizes[e2] = 0;
      for (var o = n2; o < r2; o++) this.tag.deleteRule(n2);
      t > 0 && this._cGroup > e2 && (this._cIndex -= t);
    }
  }, e.prototype.getGroup = function(e2) {
    var t = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2]) return t;
    for (var n2 = this.groupSizes[e2], r2 = this.indexOfGroup(e2), o = r2 + n2, s2 = r2; s2 < o; s2++) t += this.tag.getRule(s2) + p;
    return t;
  }, e;
})(), he = "style[".concat(a, "][").concat(u, '="').concat(l, '"]'), fe = new RegExp("^".concat(a, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), me = function(e) {
  return "undefined" != typeof ShadowRoot && e instanceof ShadowRoot || "host" in e && 11 === e.nodeType;
}, ye = function(e) {
  if (!e) return document;
  if (me(e)) return e;
  if ("getRootNode" in e) {
    var t = e.getRootNode();
    if (me(t)) return t;
  }
  return document;
}, ve = function(e, t, n2) {
  for (var r2, o = n2.split(","), s2 = 0, i2 = o.length; s2 < i2; s2++) (r2 = o[s2]) && e.registerName(t, r2);
}, ge = function(e, t) {
  for (var n2, r2 = (null !== (n2 = t.textContent) && void 0 !== n2 ? n2 : "").split(p), o = [], s2 = 0, i2 = r2.length; s2 < i2; s2++) {
    var a2 = r2[s2].trim();
    if (a2) {
      var c2 = a2.match(fe);
      if (c2) {
        var u2 = 0 | parseInt(c2[1], 10), l2 = c2[2];
        0 !== u2 && (E(l2, u2), ve(e, l2, c2[3]), e.getTag().insertRules(u2, o)), o.length = 0;
      } else o.push(a2);
    }
  }
}, Se = function(e) {
  for (var t = ye(e.options.target).querySelectorAll(he), n2 = 0, r2 = t.length; n2 < r2; n2++) {
    var o = t[n2];
    o && o.getAttribute(a) !== c && (ge(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function we() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var be = function(e) {
  var t = document.head, n2 = e || t, r2 = document.createElement("style"), o = (function(e2) {
    var t2 = Array.from(e2.querySelectorAll("style[".concat(a, "]")));
    return t2[t2.length - 1];
  })(n2), s2 = void 0 !== o ? o.nextSibling : null;
  r2.setAttribute(a, c), r2.setAttribute(u, l);
  var i2 = we();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
}, Ne = (function() {
  function e(e2) {
    this.element = be(e2), this.element.appendChild(document.createTextNode("")), this.sheet = (function(e3) {
      var t;
      if (e3.sheet) return e3.sheet;
      for (var n2 = null !== (t = e3.getRootNode().styleSheets) && void 0 !== t ? t : document.styleSheets, r2 = 0, o = n2.length; r2 < o; r2++) {
        var s2 = n2[r2];
        if (s2.ownerNode === e3) return s2;
      }
      throw g(17);
    })(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    try {
      return this.sheet.insertRule(t, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }, e.prototype.deleteRule = function(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }, e.prototype.getRule = function(e2) {
    var t = this.sheet.cssRules[e2];
    return t && t.cssText ? t.cssText : "";
  }, e;
})(), Ce = (function() {
  function e(e2) {
    this.element = be(e2), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    if (e2 <= this.length && e2 >= 0) {
      var n2 = document.createTextNode(t);
      return this.element.insertBefore(n2, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }, e.prototype.deleteRule = function(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }, e;
})(), Ee = (function() {
  function e(e2) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    return e2 <= this.length && (e2 === this.length ? this.rules.push(t) : this.rules.splice(e2, 0, t), this.length++, true);
  }, e.prototype.deleteRule = function(e2) {
    this.rules.splice(e2, 1), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }, e;
})(), _e = d, Ae = { isServer: !d, useCSSOMInjection: !f }, Ie = (function() {
  function e(e2, n2, r2) {
    void 0 === e2 && (e2 = O), void 0 === n2 && (n2 = {});
    var o = this;
    this.options = __assign(__assign({}, Ae), e2), this.gs = n2, this.names = new Map(r2), this.server = !!e2.isServer, !this.server && d && _e && (_e = false, Se(this)), pe(this, function() {
      return (function(e3) {
        for (var t = e3.getTag(), n3 = t.length, r3 = "", o2 = function(n4) {
          var o3 = (function(e4) {
            return b.get(e4);
          })(n4);
          if (void 0 === o3) return "continue";
          var s3 = e3.names.get(o3);
          if (void 0 === s3 || !s3.size) return "continue";
          var i2 = t.getGroup(n4);
          if (0 === i2.length) return "continue";
          var c2 = a + ".g" + n4 + '[id="' + o3 + '"]', u2 = "";
          s3.forEach(function(e4) {
            e4.length > 0 && (u2 += e4 + ",");
          }), r3 += i2 + c2 + '{content:"' + u2 + '"}' + p;
        }, s2 = 0; s2 < n3; s2++) o2(s2);
        return r3;
      })(o);
    });
  }
  return e.registerId = function(e2) {
    return C(e2);
  }, e.prototype.rehydrate = function() {
    !this.server && d && Se(this);
  }, e.prototype.reconstructWithOptions = function(n2, r2) {
    void 0 === r2 && (r2 = true);
    var o = new e(__assign(__assign({}, this.options), n2), this.gs, r2 && this.names || void 0);
    return !this.server && d && n2.target !== this.options.target && ye(this.options.target) !== ye(n2.target) && Se(o), o;
  }, e.prototype.allocateGSInstance = function(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (e2 = (function(e3) {
      var t = e3.useCSSOMInjection, n2 = e3.target;
      return e3.isServer ? new Ee(n2) : t ? new Ne(n2) : new Ce(n2);
    })(this.options), new de(e2)));
    var e2;
  }, e.prototype.hasNameForId = function(e2, t) {
    var n2, r2;
    return null !== (r2 = null === (n2 = this.names.get(e2)) || void 0 === n2 ? void 0 : n2.has(t)) && void 0 !== r2 && r2;
  }, e.prototype.registerName = function(e2, t) {
    C(e2);
    var n2 = this.names.get(e2);
    n2 ? n2.add(t) : this.names.set(e2, /* @__PURE__ */ new Set([t]));
  }, e.prototype.insertRules = function(e2, t, n2) {
    this.registerName(e2, t), this.getTag().insertRules(C(e2), n2);
  }, e.prototype.clearNames = function(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }, e.prototype.clearRules = function(e2) {
    this.getTag().clearGroup(C(e2)), this.clearNames(e2);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
})(), Pe = /&/g, Oe = 47, De = 42;
function Te(e) {
  if (-1 === e.indexOf("}")) return false;
  for (var t = e.length, n2 = 0, r2 = 0, o = false, s2 = 0; s2 < t; s2++) {
    var i2 = e.charCodeAt(s2);
    if (0 !== r2 || o || i2 !== Oe || e.charCodeAt(s2 + 1) !== De) if (o) i2 === De && e.charCodeAt(s2 + 1) === Oe && (o = false, s2++);
    else if (34 !== i2 && 39 !== i2 || 0 !== s2 && 92 === e.charCodeAt(s2 - 1)) {
      if (0 === r2) {
        if (123 === i2) n2++;
        else if (125 === i2 && --n2 < 0) return true;
      }
    } else 0 === r2 ? r2 = i2 : r2 === i2 && (r2 = 0);
    else o = true, s2++;
  }
  return 0 !== n2 || 0 !== r2;
}
function Re(e, t) {
  return e.map(function(e2) {
    return "rule" === e2.type && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
      return "".concat(t, " ").concat(e3);
    })), Array.isArray(e2.children) && "@keyframes" !== e2.type && (e2.children = Re(e2.children, t)), e2;
  });
}
function xe(e) {
  var t, n2, r2, o = void 0 === e ? O : e, i2 = o.options, a2 = void 0 === i2 ? O : i2, c2 = o.plugins, u2 = void 0 === c2 ? P : c2, l2 = function(e2, r3, o2) {
    return o2.startsWith(n2) && o2.endsWith(n2) && o2.replaceAll(n2, "").length > 0 ? ".".concat(t) : e2;
  }, p2 = u2.slice();
  p2.push(function(e2) {
    e2.type === s.RULESET && e2.value.includes("&") && (r2 || (r2 = new RegExp("\\".concat(n2, "\\b"), "g")), e2.props[0] = e2.props[0].replace(Pe, n2).replace(r2, l2));
  }), a2.prefix && p2.push(s.prefixer), p2.push(s.stringify);
  var d2 = [], h2 = s.middleware(p2.concat(s.rulesheet(function(e2) {
    return d2.push(e2);
  }))), f2 = function(e2, o2, i3, c3) {
    void 0 === o2 && (o2 = ""), void 0 === i3 && (i3 = ""), void 0 === c3 && (c3 = "&"), t = c3, n2 = o2, r2 = void 0;
    var u3 = (function(e3) {
      if (!Te(e3)) return e3;
      for (var t2 = e3.length, n3 = "", r3 = 0, o3 = 0, s2 = 0, i4 = false, a3 = 0; a3 < t2; a3++) {
        var c4 = e3.charCodeAt(a3);
        if (0 !== s2 || i4 || c4 !== Oe || e3.charCodeAt(a3 + 1) !== De) if (i4) c4 === De && e3.charCodeAt(a3 + 1) === Oe && (i4 = false, a3++);
        else if (34 !== c4 && 39 !== c4 || 0 !== a3 && 92 === e3.charCodeAt(a3 - 1)) {
          if (0 === s2) if (123 === c4) o3++;
          else if (125 === c4) {
            if (--o3 < 0) {
              for (var u4 = a3 + 1; u4 < t2; ) {
                var l4 = e3.charCodeAt(u4);
                if (59 === l4 || 10 === l4) break;
                u4++;
              }
              u4 < t2 && 59 === e3.charCodeAt(u4) && u4++, o3 = 0, a3 = u4 - 1, r3 = u4;
              continue;
            }
            0 === o3 && (n3 += e3.substring(r3, a3 + 1), r3 = a3 + 1);
          } else 59 === c4 && 0 === o3 && (n3 += e3.substring(r3, a3 + 1), r3 = a3 + 1);
        } else 0 === s2 ? s2 = c4 : s2 === c4 && (s2 = 0);
        else i4 = true, a3++;
      }
      if (r3 < t2) {
        var p3 = e3.substring(r3);
        Te(p3) || (n3 += p3);
      }
      return n3;
    })((function(e3) {
      if (-1 === e3.indexOf("//")) return e3;
      for (var t2 = e3.length, n3 = [], r3 = 0, o3 = 0, s2 = 0, i4 = 0; o3 < t2; ) {
        var a3 = e3.charCodeAt(o3);
        if (34 !== a3 && 39 !== a3 || 0 !== o3 && 92 === e3.charCodeAt(o3 - 1)) if (0 === s2) if (a3 === Oe && o3 + 1 < t2 && e3.charCodeAt(o3 + 1) === De) {
          for (o3 += 2; o3 + 1 < t2 && (e3.charCodeAt(o3) !== De || e3.charCodeAt(o3 + 1) !== Oe); ) o3++;
          o3 += 2;
        } else if (40 === a3 && o3 >= 3 && 108 == (32 | e3.charCodeAt(o3 - 1)) && 114 == (32 | e3.charCodeAt(o3 - 2)) && 117 == (32 | e3.charCodeAt(o3 - 3))) i4 = 1, o3++;
        else if (i4 > 0) 41 === a3 ? i4-- : 40 === a3 && i4++, o3++;
        else if (a3 === De && o3 + 1 < t2 && e3.charCodeAt(o3 + 1) === Oe) o3 > r3 && n3.push(e3.substring(r3, o3)), r3 = o3 += 2;
        else if (a3 === Oe && o3 + 1 < t2 && e3.charCodeAt(o3 + 1) === Oe) {
          for (o3 > r3 && n3.push(e3.substring(r3, o3)); o3 < t2 && 10 !== e3.charCodeAt(o3); ) o3++;
          r3 = o3;
        } else o3++;
        else o3++;
        else 0 === s2 ? s2 = a3 : s2 === a3 && (s2 = 0), o3++;
      }
      return 0 === r3 ? e3 : (r3 < t2 && n3.push(e3.substring(r3)), n3.join(""));
    })(e2)), l3 = s.compile(i3 || o2 ? "".concat(i3, " ").concat(o2, " { ").concat(u3, " }") : u3);
    return a2.namespace && (l3 = Re(l3, a2.namespace)), d2 = [], s.serialize(l3, h2), d2;
  };
  return f2.hash = u2.length ? u2.reduce(function(e2, t2) {
    return t2.name || g(15), G(e2, t2.name);
  }, 5381).toString() : "", f2;
}
var je = new Ie(), ke = xe(), Me = { shouldForwardProp: void 0, styleSheet: je, stylis: ke }, Ve = h ? { Provider: function(e) {
  return e.children;
}, Consumer: function(e) {
  return (0, e.children)(Me);
} } : r.createContext(Me);
Ve.Consumer;
var Ge = h ? { Provider: function(e) {
  return e.children;
} } : r.createContext(void 0);
function ze() {
  return h ? Me : r.useContext(Ve);
}
function Be(e) {
  if (h || !r.useMemo) return e.children;
  var t = ze().styleSheet, n2 = r.useMemo(function() {
    var n3 = t;
    return e.sheet ? n3 = e.sheet : e.target && (n3 = n3.reconstructWithOptions({ target: e.target }, false)), e.disableCSSOMInjection && (n3 = n3.reconstructWithOptions({ useCSSOMInjection: false })), n3;
  }, [e.disableCSSOMInjection, e.sheet, e.target, t]), o = r.useMemo(function() {
    return xe({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: e.stylisPlugins });
  }, [e.enableVendorPrefixes, e.namespace, e.stylisPlugins]), s2 = r.useMemo(function() {
    return { shouldForwardProp: e.shouldForwardProp, styleSheet: n2, stylis: o };
  }, [e.shouldForwardProp, n2, o]);
  return r.createElement(Ve.Provider, { value: s2 }, r.createElement(Ge.Provider, { value: o }, e.children));
}
var Le = (function() {
  function e(e2, t) {
    var n2 = this;
    this.inject = function(e3, t2) {
      void 0 === t2 && (t2 = ke);
      var r2 = n2.name + t2.hash;
      e3.hasNameForId(n2.id, r2) || e3.insertRules(n2.id, r2, t2(n2.rules, r2, "@keyframes"));
    }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, pe(this, function() {
      throw g(12, String(n2.name));
    });
  }
  return e.prototype.getName = function(e2) {
    return void 0 === e2 && (e2 = ke), this.name + e2.hash;
  }, e;
})();
function $e(e, t) {
  return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || e in i || e.startsWith("--") ? String(t).trim() : "".concat(t, "px");
}
var Ye = function(e) {
  return e >= "A" && e <= "Z";
};
function We(e) {
  for (var t = "", n2 = 0; n2 < e.length; n2++) {
    var r2 = e[n2];
    if (1 === n2 && "-" === r2 && "-" === e[0]) return e;
    Ye(r2) ? t += "-" + r2.toLowerCase() : t += r2;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var qe = function(e) {
  return null == e || false === e || "" === e;
}, He = function(t) {
  var n2 = [];
  for (var r2 in t) {
    var o = t[r2];
    t.hasOwnProperty(r2) && !qe(o) && (Array.isArray(o) && o.isCss || se(o) ? n2.push("".concat(We(r2), ":"), o, ";") : ue(o) ? n2.push.apply(n2, __spreadArray(__spreadArray(["".concat(r2, " {")], He(o), false), ["}"], false)) : n2.push("".concat(We(r2), ": ").concat($e(r2, o), ";")));
  }
  return n2;
};
function Ue(e, t, n2, r2, o) {
  if (void 0 === o && (o = []), "string" == typeof e) return e && o.push(e), o;
  if (qe(e)) return o;
  if (ie(e)) return o.push(".".concat(e.styledComponentId)), o;
  if (se(e)) {
    if (!se(i2 = e) || i2.prototype && i2.prototype.isReactComponent || !t) return o.push(e), o;
    var s2 = e(t);
    return "production" === process.env.NODE_ENV || "object" != typeof s2 || Array.isArray(s2) || s2 instanceof Le || ue(s2) || null === s2 || console.error("".concat(L(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ue(s2, t, n2, r2, o);
  }
  var i2;
  if (e instanceof Le) return n2 ? (e.inject(n2, r2), o.push(e.getName(r2))) : o.push(e), o;
  if (ue(e)) {
    for (var a2 = He(e), c2 = 0; c2 < a2.length; c2++) o.push(a2[c2]);
    return o;
  }
  if (!Array.isArray(e)) return o.push(e.toString()), o;
  for (c2 = 0; c2 < e.length; c2++) Ue(e[c2], t, n2, r2, o);
  return o;
}
function Je(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n2 = e[t];
    if (se(n2) && !ie(n2)) return false;
  }
  return true;
}
var Xe = z(l), Ze = (function() {
  function e(e2, t, n2) {
    this.rules = e2, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n2 || n2.isStatic) && Je(e2), this.componentId = t, this.baseHash = G(Xe, t), this.baseStyle = n2, Ie.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(e2, t, n2) {
    var r2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n2).className : "";
    if (this.isStatic && !n2.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r2 = ae(r2, this.staticRulesId);
    else {
      var o = ce(Ue(this.rules, e2, t, n2)), s2 = V(G(this.baseHash, o) >>> 0);
      if (!t.hasNameForId(this.componentId, s2)) {
        var i2 = n2(o, ".".concat(s2), void 0, this.componentId);
        t.insertRules(this.componentId, s2, i2);
      }
      r2 = ae(r2, s2), this.staticRulesId = s2;
    }
    else {
      for (var a2 = G(this.baseHash, n2.hash), c2 = "", u2 = 0; u2 < this.rules.length; u2++) {
        var l2 = this.rules[u2];
        if ("string" == typeof l2) c2 += l2, "production" !== process.env.NODE_ENV && (a2 = G(a2, l2));
        else if (l2) {
          var p2 = ce(Ue(l2, e2, t, n2));
          a2 = G(G(a2, String(u2)), p2), c2 += p2;
        }
      }
      if (c2) {
        var d2 = V(a2 >>> 0);
        if (!t.hasNameForId(this.componentId, d2)) {
          var h2 = n2(c2, ".".concat(d2), void 0, this.componentId);
          t.insertRules(this.componentId, d2, h2);
        }
        r2 = ae(r2, d2);
      }
    }
    return { className: r2, css: "undefined" == typeof window ? t.getTag().getGroup(C(this.componentId)) : "" };
  }, e;
})(), Ke = h ? { Provider: function(e) {
  return e.children;
}, Consumer: function(e) {
  return (0, e.children)(void 0);
} } : r.createContext(void 0);
Ke.Consumer;
var nt = {}, rt = /* @__PURE__ */ new Set();
function ot(s2, i2, a2) {
  var c2 = ie(s2), u2 = s2, p2 = !$(s2), d2 = i2.attrs, f2 = void 0 === d2 ? P : d2, m = i2.componentId, y2 = void 0 === m ? (function(e, t) {
    var n2 = "string" != typeof e ? "sc" : j(e);
    nt[n2] = (nt[n2] || 0) + 1;
    var r2 = "".concat(n2, "-").concat(B(l + n2 + nt[n2]));
    return t ? "".concat(t, "-").concat(r2) : r2;
  })(i2.displayName, i2.parentComponentId) : m, v2 = i2.displayName, g2 = void 0 === v2 ? (function(e) {
    return $(e) ? "styled.".concat(e) : "Styled(".concat(L(e), ")");
  })(s2) : v2, S2 = i2.displayName && i2.componentId ? "".concat(j(i2.displayName), "-").concat(i2.componentId) : i2.componentId || y2, w2 = c2 && u2.attrs ? u2.attrs.concat(f2).filter(Boolean) : f2, b2 = i2.shouldForwardProp;
  if (c2 && u2.shouldForwardProp) {
    var N2 = u2.shouldForwardProp;
    if (i2.shouldForwardProp) {
      var E2 = i2.shouldForwardProp;
      b2 = function(e, t) {
        return N2(e, t) && E2(e, t);
      };
    } else b2 = N2;
  }
  var _2 = new Ze(a2, S2, c2 ? u2.componentStyle : void 0);
  function A2(s3, i3) {
    return (function(s4, i4, a3) {
      var c3 = s4.attrs, u3 = s4.componentStyle, l2 = s4.defaultProps, p3 = s4.foldedComponentIds, d3 = s4.styledComponentId, f3 = s4.target, m2 = h ? void 0 : r.useContext(Ke), y3 = ze(), v3 = s4.shouldForwardProp || y3.shouldForwardProp;
      "production" !== process.env.NODE_ENV && r.useDebugValue && r.useDebugValue(d3);
      var g3 = D(i4, m2, l2) || (h ? void 0 : O), S3 = (function(e, n2, r2) {
        for (var o, s5 = __assign(__assign({}, n2), { className: void 0, theme: r2 }), i5 = 0; i5 < e.length; i5 += 1) {
          var a4 = se(o = e[i5]) ? o(s5) : o;
          for (var c4 in a4) "className" === c4 ? s5.className = ae(s5.className, a4[c4]) : "style" === c4 ? s5.style = __assign(__assign({}, s5.style), a4[c4]) : s5[c4] = a4[c4];
        }
        return "className" in n2 && "string" == typeof n2.className && (s5.className = ae(s5.className, n2.className)), s5;
      })(c3, i4, g3), w3 = S3.as || f3, b3 = {};
      for (var N3 in S3) void 0 === S3[N3] || "$" === N3[0] || "as" === N3 || "theme" === N3 && S3.theme === g3 || ("forwardedAs" === N3 ? b3.as = S3.forwardedAs : v3 && !v3(N3, w3) || (b3[N3] = S3[N3], v3 || "development" !== process.env.NODE_ENV || n(N3) || rt.has(N3) || !T.has(w3) || (rt.add(N3), console.warn('styled-components: it looks like an unknown prop "'.concat(N3, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var E3 = (function(e, t) {
        var n2 = ze(), o = e.generateAndInjectStyles(t, n2.styleSheet, n2.stylis);
        return "production" !== process.env.NODE_ENV && r.useDebugValue && r.useDebugValue(o.className), o;
      })(u3, S3), _3 = E3.className;
      "production" !== process.env.NODE_ENV && s4.warnTooManyClasses && s4.warnTooManyClasses(_3);
      var A3 = ae(p3, d3);
      _3 && (A3 += " " + _3), S3.className && (A3 += " " + S3.className), b3[$(w3) && !T.has(w3) ? "class" : "className"] = A3, a3 && (b3.ref = a3);
      var I2 = createElement(w3, b3);
      if (h) {
        for (var P2 = [], R3 = u3, x2 = function() {
          var e = y3.styleSheet.getTag().getGroup(C(R3.componentId));
          if (e) {
            var t = "", n2 = y3.styleSheet.names.get(R3.componentId);
            n2 && n2.forEach(function(e2) {
              t && (t += "_"), t += e2;
            }), P2.push(r.createElement("style", { key: "sc-".concat(R3.componentId), precedence: "styled-components", href: "sc-".concat(R3.componentId, "-").concat(t), children: e }));
          }
          R3 = R3.baseStyle;
        }; R3; ) x2();
        if (P2.length) return P2.reverse(), r.createElement.apply(r, __spreadArray(__spreadArray([r.Fragment, null], P2, false), [I2], false));
      }
      return I2;
    })(R2, s3, i3);
  }
  A2.displayName = g2;
  var R2 = r.forwardRef(A2);
  return R2.attrs = w2, R2.componentStyle = _2, R2.displayName = g2, R2.shouldForwardProp = b2, R2.foldedComponentIds = c2 ? ae(u2.foldedComponentIds, u2.styledComponentId) : "", R2.styledComponentId = S2, R2.target = c2 ? u2.target : s2, Object.defineProperty(R2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e) {
    this._foldedDefaultProps = c2 ? (function(e2) {
      for (var t = [], n2 = 1; n2 < arguments.length; n2++) t[n2 - 1] = arguments[n2];
      for (var r2 = 0, o = t; r2 < o.length; r2++) le(e2, o[r2], true);
      return e2;
    })({}, u2.defaultProps, e) : e;
  } }), "production" !== process.env.NODE_ENV && (I(g2, S2), R2.warnTooManyClasses = /* @__PURE__ */ (function(e, t) {
    var n2 = {}, r2 = false;
    return function(o) {
      if (!r2 && (n2[o] = true, Object.keys(n2).length >= 200)) {
        var s3 = t ? ' with the id of "'.concat(t, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(s3, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r2 = true, n2 = {};
      }
    };
  })(g2, S2)), pe(R2, function() {
    return ".".concat(R2.styledComponentId);
  }), p2 && oe(R2, s2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), R2;
}
function st(e, t) {
  for (var n2 = [e[0]], r2 = 0, o = t.length; r2 < o; r2 += 1) n2.push(t[r2], e[r2 + 1]);
  return n2;
}
var it = function(e) {
  return Object.assign(e, { isCss: true });
};
function at(t) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
  if (se(t) || ue(t)) return it(Ue(st(P, __spreadArray([t], n2, true))));
  var o = t;
  return 0 === n2.length && 1 === o.length && "string" == typeof o[0] ? Ue(o) : it(Ue(st(o, n2)));
}
function ct(n2, r2, o) {
  if (void 0 === o && (o = O), !r2) throw g(1, r2);
  var s2 = function(t) {
    for (var s3 = [], i2 = 1; i2 < arguments.length; i2++) s3[i2 - 1] = arguments[i2];
    return n2(r2, o, at.apply(void 0, __spreadArray([t], s3, false)));
  };
  return s2.attrs = function(e) {
    return ct(n2, r2, __assign(__assign({}, o), { attrs: Array.prototype.concat(o.attrs, e).filter(Boolean) }));
  }, s2.withConfig = function(e) {
    return ct(n2, r2, __assign(__assign({}, o), e));
  }, s2;
}
var ut = function(e) {
  return ct(ot, e);
}, lt = ut;
T.forEach(function(e) {
  lt[e] = ut(e);
});
var mt = /^\s*<\/[a-z]/i, yt = (function() {
  function e() {
    var e2 = this;
    this._emitSheetCSS = function() {
      var t = e2.instance.toString();
      if (!t) return "";
      var n2 = we(), r2 = ce([n2 && 'nonce="'.concat(n2, '"'), "".concat(a, '="true"'), "".concat(u, '="').concat(l, '"')].filter(Boolean), " ");
      return "<style ".concat(r2, ">").concat(t, "</style>");
    }, this.getStyleTags = function() {
      if (e2.sealed) throw g(2);
      return e2._emitSheetCSS();
    }, this.getStyleElement = function() {
      var n2;
      if (e2.sealed) throw g(2);
      var o = e2.instance.toString();
      if (!o) return [];
      var s2 = ((n2 = {})[a] = "", n2[u] = l, n2.dangerouslySetInnerHTML = { __html: o }, n2), i2 = we();
      return i2 && (s2.nonce = i2), [r.createElement("style", __assign({}, s2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e2.sealed = true;
    }, this.instance = new Ie({ isServer: true }), this.sealed = false;
  }
  return e.prototype.collectStyles = function(e2) {
    if (this.sealed) throw g(2);
    return r.createElement(Be, { sheet: this.instance }, e2);
  }, e.prototype.interleaveWithNodeStream = function(e2) {
    if (this.sealed) throw g(2);
    this.seal();
    var t = require("stream").Transform, n2 = this.instance, r2 = this._emitSheetCSS, o = new t({ transform: function(e3, t2, o2) {
      var s3 = e3.toString(), i2 = r2();
      if (n2.clearTag(), mt.test(s3)) {
        var a2 = s3.indexOf(">") + 1, c2 = s3.slice(0, a2), u2 = s3.slice(a2);
        this.push(c2 + i2 + u2);
      } else this.push(i2 + s3);
      o2();
    } });
    if ("on" in e2 && "function" == typeof e2.on && "pipe" in e2) {
      var s2 = e2;
      return s2.on("error", function(e3) {
        o.emit("error", e3);
      }), s2.pipe(o);
    }
    if ("pipe" in e2 && "function" == typeof e2.pipe) return e2.pipe(o);
    throw new Error("Unsupported stream type");
  }, e;
})();
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var gt = "__sc-".concat(a, "__");
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[gt] || (window[gt] = 0), 1 === window[gt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[gt] += 1);
const initialState = {
  value: 0
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    }
  }
});
const { increment, decrement, setValue } = appSlice.actions;
const appReducer = appSlice.reducer;
const navbar = { "logoAlt": "Margg", "links": [{ "label": "Home", "href": "#", "primary": true }, { "label": "Our Products", "href": "#" }, { "label": "Contact Us", "href": "#" }] };
const hero = { "titleLine1": "BRING OUT YOUR", "titleLine2": "BEST POTENTIAL", "description": "Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry", "inputPlaceholder": "Enter Email", "inputButtonText": "Join the waitlist", "tiles": { "autoCycleIntervalMs": 3e3, "defaultTileId": 1, "row1": [{ "id": 1, "ariaLabel": "Frontend Developer", "title": "Frontend Developer", "description": "Build modern UI with React, component systems, and responsive layouts.", "icon": "ScrollIcon" }, { "id": 2, "ariaLabel": "Programming Essentials", "title": "Programming Essentials", "description": "Learn core concepts, clean code, and problem-solving techniques.", "icon": "MessageProgrammingIcon" }, { "id": 3, "ariaLabel": "UI Design Fundamentals", "title": "UI Design Fundamentals", "description": "Design trends, spacing systems, and accessible UI patterns.", "icon": "PenToolIcon" }], "row2": [{ "id": 4, "ariaLabel": "Backend Development", "title": "Backend Development", "description": "Server-side logic, APIs, and database management.", "icon": "DriverIcon" }, { "id": 5, "ariaLabel": "Database Design", "title": "Database Design", "description": "Data modeling, SQL, and database optimization.", "icon": "FavoriteChartIcon" }, { "id": 6, "ariaLabel": "Cloud & DevOps", "title": "Cloud & DevOps", "description": "Deploy apps, understand environments, and ship confidently.", "icon": "CloudConnectionIcon" }, { "id": 7, "ariaLabel": "Testing & QA", "title": "Testing & QA", "description": "Write quality tests and ensure reliable applications.", "icon": "LockIcon" }], "row3": [{ "id": 8, "ariaLabel": "Security", "title": "Security", "description": "Learn safe patterns, auth basics, and secure-by-default UI.", "icon": "MessageProgrammingIcon" }, { "id": 9, "ariaLabel": "Algorithms", "title": "Algorithms", "description": "Problem-solving patterns and data structures.", "icon": "PenToolIcon" }, { "id": 10, "ariaLabel": "System Design", "title": "System Design", "description": "Architecture, scalability, and distributed systems.", "icon": "FavoriteChartIcon" }, { "id": 11, "ariaLabel": "Performance", "title": "Performance", "description": "Optimize load times, rendering, and user experience.", "icon": "DriverIcon" }] } };
const analytics = { "stats": [{ "value": "43+", "label": "University\nPartners" }, { "value": "12K+", "label": "Students\nEnrolled" }, { "value": "35", "label": "Outstanding\nMentors" }, { "value": "7.5K", "label": "Student\nPlacements" }] };
const supercharge = { "titleLine1": "SUPERCHARGE", "titleLine2": "YOUR LEARNING POTENTIAL", "description": "Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away" };
const joinWaitlist = { "title": "JOIN WAITLIST", "subtitle": "First step towards your dream career", "inputPlaceholder": "Enter Email", "buttonText": "Notify Me" };
const footer = { "contactTitle": "GET IN TOUCH WITH US", "location": "Bangalore | Tirupati", "phone": "+91 7993559974", "email": "info@margg.in", "tagline": "Curated routes for curious minds", "companyName": "Margg Private Limited", "logoAlt": "Margg Logo", "socialLinks": [{ "name": "Facebook", "icon": "FacebookIcon", "url": "https://facebook.com" }, { "name": "X (Twitter)", "icon": "TwitterIcon", "url": "https://twitter.com" }, { "name": "LinkedIn", "icon": "LinkedInIcon", "url": "https://linkedin.com" }] };
const blocks = { "roadmap": { "title": "Roadmap Based Learning" }, "community": { "title": "Community" }, "focusTimer": { "title": "Focus Timer" }, "interviewPrep": { "title": "Interview Prep Materials" }, "jobBoard": { "title": "Job Board" }, "mentorship": { "title": "One-on-One Mentorship" }, "projects": { "title": "Projects" }, "resume": { "title": "Resume Builder" }, "skills": { "title": "Skills Assessment" }, "streaks": { "title": "Streaks" }, "certifications": { "title": "Certifications" } };
const seo = { "title": "Margg – Curated Routes for Curious Minds", "description": "Margg is an LMS built for college students — structured roadmaps, one-on-one mentorship, interview prep, streaks, certifications, and career placement support all in one platform.", "keywords": "LMS for college students, learning management system, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development", "author": "Margg Private Limited", "robots": "index, follow", "locale": "en_IN", "url": "https://margg.in", "ogImage": "https://margg.in/og-cover.png", "twitterHandle": "@margg", "themeColor": "#090215" };
const fallbackContent = {
  navbar,
  hero,
  analytics,
  supercharge,
  joinWaitlist,
  footer,
  blocks,
  seo
};
const contentSlice = createSlice({
  name: "content",
  initialState: {
    /** Full content object – always valid (at minimum = fallback) */
    data: fallbackContent,
    /** 'idle' | 'loading' | 'succeeded' | 'failed' */
    status: "idle",
    /** 'fallback' | 'remote' – useful for debugging */
    source: "fallback"
  },
  reducers: {
    contentLoading(state) {
      state.status = "loading";
    },
    contentSucceeded(state, action) {
      state.data = action.payload.data;
      state.status = "succeeded";
      state.source = action.payload.source;
    },
    contentFailed(state) {
      state.status = "failed";
      state.source = "fallback";
    }
  }
});
const { contentLoading, contentSucceeded, contentFailed } = contentSlice.actions;
const contentReducer = contentSlice.reducer;
const selectAllContent = (state) => state.content.data;
const MarggLogo = "/assets/Margg-lQxeB3-A.png";
const MAX_CONTENT_WIDTH = "1920px";
const BREAKPOINTS = {
  mobile: "768px",
  tablet: "1024px"
};
const MEDIA_QUERIES = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile})`,
  tablet: `@media (max-width: ${BREAKPOINTS.tablet})`
};
const FONTS = {
  heading: '"Bebas Neue", sans-serif',
  body: '"Inter", sans-serif'
};
function useContent(section) {
  const content = useSelector(selectAllContent);
  if (section) return content[section] ?? {};
  return content;
}
const NavbarContainer = lt.div`
  position: sticky;
  top: 0;
  z-index: 50;
  isolation: isolate;
  display: flex;
  justify-content: center;
  padding-top: 36px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 140px;
    pointer-events: none;
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(9, 2, 21, 0.98) 0%,
      rgba(9, 2, 21, 0.7) 55%,
      rgba(9, 2, 21, 0) 100%
    );
  }
`;
const NavbarContent = lt.nav`
  display: flex;
  width: 85%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin-top: 0;
  height: 72px;
  padding: 16px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);

  /* Enhanced support for wide gamut displays */
  @supports (color: color(display-p3 1 1 1)) {
    background: color(display-p3 1 1 1 / 0.1);
    box-shadow: 0 4px 24px 0 color(display-p3 0 0 0 / 0.25);
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 0.75rem 1rem;
    height: auto;
  }
`;
const NavbarInner = lt.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const LogoSection = lt.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
lt.div`
  display: flex;
  align-items: flex-start;
`;
const SkillImage = lt.img`
  width: 132.156px;
  height: 40.141px;
  flex-shrink: 0;
`;
lt.img`
  width: 38.699px;
  height: 27.483px;
  flex-shrink: 0;
`;
lt.img`
  width: 79.181px;
  height: 5.559px;
  flex-shrink: 0;
`;
const NavigationMenu = lt.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
const MenuList = lt.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`;
const MenuLink = lt.a`
  color: white;
  font-family: ${FONTS.body};
  font-size: 16px;
  font-weight: ${(props) => props.primary ? "600" : "300"};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => props.primary ? "1" : "0.5"};

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`;
const Navbar = () => {
  const { logoAlt, links } = useContent("navbar");
  return /* @__PURE__ */ jsx(NavbarContainer, { children: /* @__PURE__ */ jsx(NavbarContent, { children: /* @__PURE__ */ jsxs(NavbarInner, { children: [
    /* @__PURE__ */ jsx(LogoSection, { children: /* @__PURE__ */ jsx(SkillImage, { src: MarggLogo, alt: logoAlt }) }),
    /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsx(MenuList, { children: links.map((link) => /* @__PURE__ */ jsx(
      MenuLink,
      {
        href: link.href,
        primary: link.primary ? true : void 0,
        children: link.label
      },
      link.label
    )) }) })
  ] }) }) });
};
function ScrollIcon({ color = "currentColor" }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "10",
        y: "12",
        width: "44",
        height: "40",
        rx: "10",
        fill: color,
        opacity: "0.25"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "18",
        y: "20",
        width: "28",
        height: "24",
        rx: "8",
        fill: color,
        opacity: "0.35"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M26 36L32 30L38 36",
        stroke: color,
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        opacity: "0.9"
      }
    )
  ] });
}
function MessageProgrammingIcon({ color = "currentColor" }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z",
        fill: color,
        opacity: "0.25"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M26 24L20 30L26 36",
        stroke: color,
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M38 24L44 30L38 36",
        stroke: color,
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M34 22L30 38",
        stroke: color,
        strokeWidth: "3",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    )
  ] });
}
function PenToolIcon({ color = "currentColor" }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M20 44L44 20",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx("path", { d: "M18 46L22 42L26 46L22 50L18 46Z", fill: color, opacity: "0.35" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M38 18L46 26",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    )
  ] });
}
function DriverIcon({ color = "currentColor" }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "16",
        y: "14",
        width: "32",
        height: "28",
        rx: "6",
        fill: color,
        opacity: "0.25"
      }
    ),
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "20",
        y: "18",
        width: "24",
        height: "14",
        rx: "4",
        fill: color,
        opacity: "0.35"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M26 48H38",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    )
  ] });
}
function CloudConnectionIcon({ color = "currentColor" }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z",
        fill: color,
        opacity: "0.25"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M26 46H38",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M22 52H42",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    )
  ] });
}
function FavoriteChartIcon({ color = "currentColor" }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16 44V34",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M28 44V26",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M40 44V30",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z",
        fill: color,
        opacity: "0.35"
      }
    )
  ] });
}
function LockIcon({ color = "currentColor" }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx(
      "rect",
      {
        x: "18",
        y: "30",
        width: "28",
        height: "22",
        rx: "10",
        fill: color,
        opacity: "0.25"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M32 38V44",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: "0.9"
      }
    )
  ] });
}
const resolveOverflow = (layout, hoveredId = null) => {
  const rowGroups = { 1: [], 2: [], 3: [] };
  layout.forEach((item) => {
    rowGroups[item.row].push(item);
  });
  Object.keys(rowGroups).forEach((row) => {
    rowGroups[row].sort((a2, b2) => a2.col - b2.col);
  });
  let hasOverflow = true;
  while (hasOverflow) {
    hasOverflow = false;
    for (let row = 3; row >= 2; row--) {
      const items = rowGroups[row];
      const totalSpan = items.reduce((sum, item) => sum + item.span, 0);
      if (totalSpan > 4) {
        const hoveredIndex = items.findIndex((item) => item.id === hoveredId);
        let itemToMove;
        if (hoveredIndex !== -1) {
          if (hoveredIndex <= 1) {
            itemToMove = items.pop();
          } else {
            itemToMove = items.shift();
          }
        } else {
          itemToMove = items.shift();
        }
        itemToMove.row = row - 1;
        rowGroups[row - 1].push(itemToMove);
        hasOverflow = true;
        break;
      }
    }
  }
  const resolvedLayout = [];
  Object.keys(rowGroups).forEach((row) => {
    let currentCol = 1;
    rowGroups[row].forEach((item) => {
      resolvedLayout.push({
        ...item,
        row: parseInt(row),
        col: currentCol
      });
      currentCol += item.span;
    });
  });
  return resolvedLayout;
};
const applyHover = (layout, hoveredId) => {
  if (!hoveredId) {
    return layout.map((item) => ({ ...item, span: 1 }));
  }
  const updatedLayout = layout.map((item) => ({
    ...item,
    span: item.id === hoveredId ? 2 : 1
  }));
  return resolveOverflow(updatedLayout, hoveredId);
};
const calculateInitialLayout = (items) => {
  const layout = [];
  let itemIndex = 0;
  for (let col = 1; col <= 3; col++) {
    if (itemIndex < items.length) {
      layout.push({
        id: items[itemIndex],
        row: 1,
        col,
        span: 1
      });
      itemIndex++;
    }
  }
  for (let col = 1; col <= 4; col++) {
    if (itemIndex < items.length) {
      layout.push({
        id: items[itemIndex],
        row: 2,
        col,
        span: 1
      });
      itemIndex++;
    }
  }
  for (let col = 1; col <= 4; col++) {
    if (itemIndex < items.length) {
      layout.push({
        id: items[itemIndex],
        row: 3,
        col,
        span: 1
      });
      itemIndex++;
    }
  }
  return layout;
};
const FALLBACK_CYCLE_INTERVAL = 3e3;
const FALLBACK_DEFAULT_TILE_ID = 1;
const TilePanel = lt.div`
  width: min(576px, 50%);
  // flex: 1 1 576px;

  /* CSS Grid setup */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 120px);
  gap: 32px;

  align-self: flex-start;

  @media (max-width: 1024px) {
    flex-basis: 100%;
  }

  @media (max-width: 640px) {
    width: 476px;
    grid-template-rows: repeat(3, 104px);
  }

  @media (max-width: 480px) {
    width: 100%;
    grid-template-rows: auto;
    gap: 14px;
  }
`;
const TileButton = lt(motion.div)`
  appearance: none;
  border: 0;
  background: transparent;
  border-radius: 12px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: visible;
  position: relative;

  /* Fill the grid cell completely - width auto-adjusts based on column span */
  width: 100%;
  height: 100%;

  /* Grid positioning applied via inline styles */

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: ${(props) => props.$isExpanded ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"};
    backdrop-filter: blur(10px);
    box-shadow: ${(props) => props.$isExpanded ? "0px 4px 32px 0px rgba(176, 149, 227, 0.25)" : "none"};
    transform: scale(1);
    transition:
      background 220ms ease,
      box-shadow 220ms ease;
  }

  &:hover {
    z-index: 100;
  }

  &:hover::before {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 32px 0px rgba(176, 149, 227, 0.25);
  }

  @media (max-width: 480px) {
    cursor: default;
  }
`;
const TileContent = lt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;
const InnerWrapper = lt.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$isExpanded ? "flex-start" : "center"};
  gap: ${(props) => props.$isExpanded ? "16px" : "0"};
  width: ${(props) => props.$isExpanded ? "100%" : "auto"};
  padding: ${(props) => props.$isExpanded ? "0 20px" : "0"};
  transition: none;
`;
const IconWrap = lt.div`
  width: 64px;
  height: 64px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 64px;
    height: 64px;
    display: block;
  }

  @media (max-width: 640px) {
    width: 52px;
    height: 52px;

    svg {
      width: 52px;
      height: 52px;
    }
  }
`;
const TileTitle = lt.div`
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  display: ${(props) => props.$isExpanded ? "block" : "none"};
  opacity: ${(props) => props.$isExpanded ? "1" : "0"};
  transform: translateX(${(props) => props.$isExpanded ? "0" : "20px"});
  max-width: 140px;
  overflow: hidden;
  transition:
    opacity 250ms ease,
    transform 250ms ease;
  white-space: normal;
  word-wrap: break-word;

  @media (max-width: 640px) {
    font-size: 12px;
    max-width: 120px;
  }
`;
function Tile({
  ariaLabel,
  title,
  icon,
  gridRow,
  gridColumn,
  isExpanded,
  onMouseEnter,
  onMouseLeave,
  tileId
}) {
  return /* @__PURE__ */ jsx(
    TileButton,
    {
      "aria-label": ariaLabel,
      $isExpanded: isExpanded,
      layout: true,
      transition: {
        layout: {
          duration: 0.25,
          ease: "easeInOut"
        }
      },
      style: {
        gridRow,
        gridColumn
      },
      onMouseEnter: () => onMouseEnter(tileId),
      onMouseLeave,
      children: /* @__PURE__ */ jsx(TileContent, { children: /* @__PURE__ */ jsxs(InnerWrapper, { $isExpanded: isExpanded, children: [
        /* @__PURE__ */ jsx(IconWrap, { children: icon }),
        /* @__PURE__ */ jsx(TileTitle, { $isExpanded: isExpanded, children: title })
      ] }) })
    }
  );
}
const iconComponents$1 = {
  ScrollIcon,
  MessageProgrammingIcon,
  PenToolIcon,
  DriverIcon,
  CloudConnectionIcon,
  FavoriteChartIcon,
  LockIcon
};
function HeroTiles({ tileColor }) {
  const tilesConfig = useContent("hero").tiles ?? {};
  const AUTO_CYCLE_INTERVAL = tilesConfig.autoCycleIntervalMs ?? FALLBACK_CYCLE_INTERVAL;
  const DEFAULT_TILE_ID = tilesConfig.defaultTileId ?? FALLBACK_DEFAULT_TILE_ID;
  const allTilesData = useMemo(() => {
    const row1 = tilesConfig.row1 ?? [];
    const row2 = tilesConfig.row2 ?? [];
    const row3 = tilesConfig.row3 ?? [];
    return [...row1, ...row2, ...row3];
  }, [tilesConfig]);
  const MIN_TILE_ID = useMemo(
    () => allTilesData.length ? Math.min(...allTilesData.map((t) => t.id)) : 1,
    [allTilesData]
  );
  const MAX_TILE_ID = useMemo(
    () => allTilesData.length ? Math.max(...allTilesData.map((t) => t.id)) : 1,
    [allTilesData]
  );
  const [hoveredId, setHoveredId] = useState(DEFAULT_TILE_ID);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    const startAutoCycle = () => {
      intervalRef.current = setInterval(() => {
        if (!isUserHovering) {
          const randomId = Math.floor(Math.random() * (MAX_TILE_ID - MIN_TILE_ID + 1)) + MIN_TILE_ID;
          setHoveredId(randomId);
        }
      }, AUTO_CYCLE_INTERVAL);
    };
    if (!isUserHovering) {
      startAutoCycle();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isUserHovering]);
  const precomputedLayouts = useMemo(() => {
    const itemIds = allTilesData.map((tile) => tile.id);
    const layouts = {};
    const baseLayout = calculateInitialLayout(itemIds);
    layouts["default"] = baseLayout;
    itemIds.forEach((itemId) => {
      layouts[itemId] = applyHover(baseLayout, itemId);
    });
    return layouts;
  }, [allTilesData]);
  const currentLayout = useMemo(() => {
    const key = hoveredId || "default";
    return precomputedLayouts[key] || precomputedLayouts["default"];
  }, [precomputedLayouts, hoveredId]);
  const handleMouseEnter = (tileId) => {
    setIsUserHovering(true);
    setHoveredId(tileId);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const handleMouseLeave = () => {
    setHoveredId(DEFAULT_TILE_ID);
    setIsUserHovering(false);
  };
  return /* @__PURE__ */ jsx(TilePanel, { "aria-label": "intro tiles", children: currentLayout.map((layoutItem) => {
    const tileData = allTilesData.find((t) => t.id === layoutItem.id);
    if (!tileData) return null;
    const IconComponent = iconComponents$1[tileData.icon];
    const isExpanded = layoutItem.span === 2;
    return /* @__PURE__ */ jsx(
      Tile,
      {
        tileId: layoutItem.id,
        ariaLabel: tileData.ariaLabel,
        title: tileData.title,
        icon: /* @__PURE__ */ jsx(IconComponent, { color: tileColor }),
        gridRow: layoutItem.row,
        gridColumn: `${layoutItem.col} / span ${layoutItem.span}`,
        isExpanded,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      },
      layoutItem.id
    );
  }) });
}
const FormWrapper = lt.div`
  width: 100%;
  max-width: 520px;
`;
const InputWrapper = lt.div`
  position: relative;
  width: 440px;
  height: 56px;
`;
const StyledInput = lt.input`
  width: 100%;
  height: 100%;
  padding: 16px 180px 16px 24px;
  border: 1px solid ${(props) => props.$hasError ? "#FF4D4F" : "#2d2d2d"};
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    rgba(214, 195, 242, 0.09) 0%,
    rgba(214, 195, 242, 0.36) 100%
  );

  /* Enhanced support for wide gamut displays */
  @supports (color: color(display-p3 1 1 1)) {
    background: linear-gradient(
      90deg,
      color(display-p3 0.827 0.769 0.937 / 0.09) 0%,
      color(display-p3 0.827 0.769 0.937 / 0.36) 100%
    );
  }

  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #ffffff;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #eee7f966;
  }

  &:focus {
    border-color: ${(props) => props.$hasError ? "#FF4D4F" : "#d3c4ef"};
  }

  @media (max-width: 640px) {
    padding: 14px 160px 14px 20px;
    font-size: 14px;
  }
`;
const StyledButton = lt.button`
  position: absolute;
  right: 4px;
  top: 50%;
  height: 48px;
  transform: translateY(-50%);
  padding: 12px 24px;
  border: 1px solid #d3c4ef;
  border-radius: 14px;
  background: #ffffff;
  color: #5013c0;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0px 4px 24px 0px #b095e380;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 6px 32px 0px #b095e3a0;
    transform: translateY(-50%) scale(1.02);
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    font-size: 12px;
  }
`;
const ErrorMessage = lt.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ff6b6b;
  opacity: ${(props) => props.$show ? "1" : "0"};
  max-height: ${(props) => props.$show ? "30px" : "0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;
const Input1 = ({
  placeholder = "Enter Email",
  buttonText = "Join the waitlist",
  onSubmit
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const formWrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formWrapperRef.current && !formWrapperRef.current.contains(event.target)) {
        if (error) {
          setError("");
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [error]);
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (onSubmit) {
      try {
        await onSubmit(email);
      } catch (err) {
        if (err.message === "already_registered") {
          setError("This email is already registered");
        } else if (err.message === "already_enrolled") {
          setError("This email is already enrolled in the waitlist");
        } else {
          setError(err.message || "Something went wrong. Please try again.");
        }
      }
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };
  return /* @__PURE__ */ jsxs(FormWrapper, { ref: formWrapperRef, children: [
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(InputWrapper, { children: [
      /* @__PURE__ */ jsx(
        StyledInput,
        {
          type: "email",
          placeholder,
          value: email,
          onChange: handleChange,
          $hasError: !!error
        }
      ),
      /* @__PURE__ */ jsx(StyledButton, { type: "submit", children: buttonText })
    ] }) }),
    /* @__PURE__ */ jsx(ErrorMessage, { $show: !!error, children: error })
  ] });
};
const IntroSection = lt.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  z-index: 2;
  isolation: isolate;

  /* Base fill (BackgroundWash sits on top) */
  background: #090215;

  /* Match the rounded bottom corners from the screenshot */
  --hero-bottom-radius: 72px;
  border-bottom-left-radius: var(--hero-bottom-radius);
  border-bottom-right-radius: var(--hero-bottom-radius);
`;
const BackgroundWash = lt.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%),
    radial-gradient(
      700px circle at 14% 2%,
      rgba(176, 149, 227, 0.22),
      transparent 62%
    ),
    radial-gradient(
      760px circle at 80% 67%,
      rgba(80, 19, 192, 0.22),
      transparent 62%
    ),
    radial-gradient(
      520px circle at 66% 88%,
      rgba(176, 149, 227, 0.16),
      transparent 60%
    ),
    radial-gradient(
      560px circle at 7% 35%,
      rgba(80, 19, 192, 0.18),
      transparent 60%
    );
`;
const Glow = lt.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`;
const GlowOne = lt(Glow)`
  left: 80.3%;
  top: 67.2%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.95) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`;
const GlowTwo = lt(Glow)`
  left: 13.9%;
  top: 1.4%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.95) 0%,
    rgba(176, 149, 227, 0) 70%
  );
`;
const GlowThree = lt(Glow)`
  left: 65.9%;
  top: 87.6%;
  width: clamp(110px, 12vw, 166px);
  height: clamp(110px, 12vw, 166px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.85) 0%,
    rgba(176, 149, 227, 0) 70%
  );
  opacity: 0.75;
`;
const GlowFour = lt(Glow)`
  left: 7.3%;
  top: 34.9%;
  width: clamp(110px, 13vw, 171px);
  height: clamp(110px, 13vw, 171px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.9) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`;
const TopGrid = lt.div`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 98px 5vw 98px 5vw;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding-top: 168px;
  }

  @media (max-width: 480px) {
    padding: 152px 20px 0;
  }
`;
const ContentWrapper = lt.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(32px, 5vw, 88px);

  @media (max-width: 1024px) {
    gap: 48px;
    align-items: start;
  }

  @media (max-width: 480px) {
    gap: 32px;
  }
`;
const TextSection = lt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 520px;
  flex: 0 1 520px;
`;
const HeroTitle = lt.h1`
  color: white;
  font-weight: 400;
  font-size: clamp(42px, 5.2vw, 64px);
  line-height: 1.2;
  letter-spacing: -0.3937px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${FONTS.heading};

  text-wrap: balance;
`;
const HeroDescription = lt.p`
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.35;
  font-family: ${FONTS.body};
  margin: 0 0 32px 0;
  max-width: 425px;
  opacity: 0.95;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
lt.div`
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translateX(-50%);
  width: 315px;
  text-align: center;
  font-family: ${FONTS.body};
  font-size: 14px;
  letter-spacing: -0.3937px;
  color: #000;
  opacity: 0.18;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;
lt.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  aspect-ratio: 1280 / 420;
  object-fit: cover;
  object-position: bottom;
  transform: scaleY(-1);
  opacity: 0.8;
  z-index: 0;

  @media (max-width: 768px) {
    opacity: 0.75;
  }
`;
const Hero = () => {
  const tileColor = "rgba(176, 149, 227, 1)";
  const {
    titleLine1,
    titleLine2,
    description,
    inputPlaceholder,
    inputButtonText
  } = useContent("hero");
  return /* @__PURE__ */ jsxs(IntroSection, { children: [
    /* @__PURE__ */ jsx(BackgroundWash, {}),
    /* @__PURE__ */ jsx(GlowOne, {}),
    /* @__PURE__ */ jsx(GlowTwo, {}),
    /* @__PURE__ */ jsx(GlowThree, {}),
    /* @__PURE__ */ jsx(GlowFour, {}),
    /* @__PURE__ */ jsx(TopGrid, { children: /* @__PURE__ */ jsxs(ContentWrapper, { children: [
      /* @__PURE__ */ jsxs(TextSection, { children: [
        /* @__PURE__ */ jsxs(HeroTitle, { children: [
          titleLine1,
          /* @__PURE__ */ jsx("br", {}),
          titleLine2
        ] }),
        /* @__PURE__ */ jsx(HeroDescription, { children: description }),
        /* @__PURE__ */ jsx(
          Input1,
          {
            placeholder: inputPlaceholder,
            buttonText: inputButtonText
          }
        )
      ] }),
      /* @__PURE__ */ jsx(HeroTiles, { tileColor })
    ] }) })
  ] });
};
const Grid$1 = lt.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 222px));
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 222px));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-content: stretch;
  }
`;
const Card = lt.div`
  position: relative;
  width: 222px;
  height: 220px;
  border-radius: 40px;
  padding: 32px;
  overflow: hidden;
  background: #eee7f9;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.25),
    0px 4px 32px 0px rgba(255, 255, 255, 0.25);

  transition: transform 240ms ease, box-shadow 240ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    box-shadow: inset 0px -8px 60px 0px #b095e3, inset 0px 12px 40px 0px #d3c4ef;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
`;
const Value = lt.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`;
const Label = lt.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
  white-space: pre-line;
`;
function StatsCards({ items }) {
  return /* @__PURE__ */ jsx(Grid$1, { "aria-label": "analytics stats", children: items.map((item) => /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(Value, { children: item.value }),
    /* @__PURE__ */ jsx(Label, { children: item.label })
  ] }, item.value + item.label)) });
}
const AnalyticsSection = lt.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  /* Let Analytics background sit behind the hero's rounded corners */
  --hero-bottom-radius: clamp(56px, 6vw, 120px);
  margin-top: calc(-1 * var(--hero-bottom-radius));

  /* keep consistent spacing with hero */
  --pad: clamp(24px, 7vw, 120px);

  padding: calc(clamp(56px, 7vh, 96px) + var(--hero-bottom-radius)) var(--pad)
    clamp(56px, 8vh, 110px);

  /* screenshot-like band: solid purple lift (not transparent over the dark page bg) */
  background: linear-gradient(180deg, #3c2a60 0%, #4b3577 52%, #3c2a60 100%);

  @media (max-width: 480px) {
    padding: 48px 20px 72px;
  }
`;
const Inner$2 = lt.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;

  /* Limit content width on large screens while keeping background full-width */
`;
function Analytics() {
  const { stats } = useContent("analytics");
  return /* @__PURE__ */ jsx(AnalyticsSection, { "aria-label": "analytics", children: /* @__PURE__ */ jsx(Inner$2, { children: /* @__PURE__ */ jsx(StatsCards, { items: stats }) }) });
}
const Section = lt.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  --pad: clamp(24px, 7vw, 120px);
  padding: 140px var(--pad) 0;

  background:
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%),
    radial-gradient(
      740px circle at 16% 6%,
      rgba(176, 149, 227, 0.22),
      transparent 62%
    ),
    radial-gradient(
      760px circle at 82% 58%,
      rgba(80, 19, 192, 0.22),
      transparent 62%
    ),
    radial-gradient(
      560px circle at 7% 35%,
      rgba(80, 19, 192, 0.18),
      transparent 60%
    ),
    radial-gradient(
      520px circle at 66% 88%,
      rgba(176, 149, 227, 0.16),
      transparent 60%
    );

  @media (max-width: 480px) {
    padding: 124px 20px 0;
  }
`;
const Inner$1 = lt.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Title$4 = lt.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
`;
const Description = lt.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${FONTS.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
`;
const Stack = lt.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
lt.div`
  width: min(560px, 100%);
  margin-top: clamp(22px, 5vh, 44px);
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: min(440px, 100%);
  }
`;
lt.div`
  width: 100%;
  aspect-ratio: 9 / 19;
  border-radius: 46px;
  padding: 10px;

  background: linear-gradient(
    180deg,
    rgba(210, 173, 124, 0.9) 0%,
    rgba(133, 97, 60, 0.92) 45%,
    rgba(210, 173, 124, 0.88) 100%
  );

  box-shadow:
    0px 26px 90px rgba(0, 0, 0, 0.55),
    0px 0px 0px 1px rgba(255, 255, 255, 0.08);
`;
lt.div`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  background:
    radial-gradient(
      1200px circle at 30% 20%,
      rgba(255, 255, 255, 0.08),
      transparent 55%
    ),
    radial-gradient(
      900px circle at 70% 75%,
      rgba(176, 149, 227, 0.16),
      transparent 60%
    ),
    #070110;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
    width: 120px;
    height: 28px;
    border-radius: 22px;
    background: rgba(0, 0, 0, 0.75);
  }
`;
lt.div`
  position: absolute;
  inset: 0;
  transform: translate3d(0, 0, 0);

  /* Dummy "screen" (no copyrighted wallpaper/video) */
  background:
    radial-gradient(
      640px circle at 35% 18%,
      rgba(255, 255, 255, 0.16),
      transparent 55%
    ),
    radial-gradient(
      560px circle at 78% 72%,
      rgba(176, 149, 227, 0.28),
      transparent 60%
    ),
    radial-gradient(
      520px circle at 52% 92%,
      rgba(80, 19, 192, 0.22),
      transparent 60%
    ),
    linear-gradient(180deg, rgba(7, 1, 16, 0.86) 0%, rgba(7, 1, 16, 1) 100%);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0) 28%,
      rgba(255, 255, 255, 0.06) 54%,
      rgba(255, 255, 255, 0) 78%
    );
    opacity: 0.7;
    mix-blend-mode: screen;
    pointer-events: none;
  }
`;
function Supercharge() {
  const { titleLine1, titleLine2, description } = useContent("supercharge");
  return /* @__PURE__ */ jsx(Section, { "aria-label": "supercharge", children: /* @__PURE__ */ jsx(Inner$1, { children: /* @__PURE__ */ jsxs(Stack, { children: [
    /* @__PURE__ */ jsxs(Title$4, { children: [
      titleLine1,
      /* @__PURE__ */ jsx("br", {}),
      titleLine2
    ] }),
    /* @__PURE__ */ jsx(Description, { children: description })
  ] }) }) });
}
lt.section`
  scroll-margin-top: 100px;
  position: relative;
  width: 100%;
  overflow: hidden;

  --pad: clamp(24px, 7vw, 120px);
  padding: 140px var(--pad) 120px;

  background:
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%),
    radial-gradient(
      740px circle at 16% 6%,
      rgba(176, 149, 227, 0.22),
      transparent 62%
    ),
    radial-gradient(
      760px circle at 82% 58%,
      rgba(80, 19, 192, 0.22),
      transparent 62%
    );

  @media (max-width: 480px) {
    padding: 100px 20px 80px;
  }
`;
lt.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
`;
lt.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(48px, 6vw, 72px);
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;
lt.p`
  margin: 0;
  font-family: ${FONTS.body};
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(16px, 1.8vw, 20px);
  line-height: 1.6;
  max-width: 600px;
`;
lt.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;
lt.a`
  color: rgba(255, 255, 255, 0.9);
  font-family: ${FONTS.body};
  font-size: clamp(18px, 2vw, 24px);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #b095e3;
    text-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
  }
`;
const FacebookIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}) => /* @__PURE__ */ jsx(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
  }
);
const TwitterIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}) => /* @__PURE__ */ jsx(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
  }
);
const LinkedInIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  ...props
}) => /* @__PURE__ */ jsx(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
  }
);
const LocationIcon = ({
  width = 15,
  height = 20,
  color = "#B095E3",
  ...props
}) => /* @__PURE__ */ jsx(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 15 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7.5 0C3.35813 0 0 3.35813 0 7.5C0 9.13094 0.534688 10.6275 1.42344 11.8531C1.43938 11.8825 1.44187 11.9153 1.46 11.9434L6.46 19.4434C6.69188 19.7913 7.0825 20 7.5 20C7.9175 20 8.30812 19.7913 8.54 19.4434L13.54 11.9434C13.5584 11.9153 13.5606 11.8825 13.5766 11.8531C14.4653 10.6275 15 9.13094 15 7.5C15 3.35813 11.6419 0 7.5 0ZM7.5 10C6.11937 10 5 8.88062 5 7.5C5 6.11937 6.11937 5 7.5 5C8.88062 5 10 6.11937 10 7.5C10 8.88062 8.88062 10 7.5 10Z",
        fill: color
      }
    )
  }
);
const PhoneIcon = ({
  width = 20,
  height = 20,
  color = "#B095E3",
  ...props
}) => /* @__PURE__ */ jsx(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16.6607 12.8167C15.6366 12.8167 14.6458 12.65 13.7216 12.35C13.5768 12.3009 13.4212 12.2936 13.2724 12.329C13.1237 12.3643 12.9879 12.4409 12.8807 12.55L11.5735 14.1917C9.2172 13.0667 7.01079 10.9417 5.83681 8.5L7.4604 7.11667C7.6852 6.88333 7.75181 6.55833 7.66022 6.26667C7.35216 5.34167 7.19396 4.35 7.19396 3.325C7.19396 2.875 6.81929 2.5 6.36968 2.5H3.48885C3.03924 2.5 2.49805 2.7 2.49805 3.325C2.49805 11.0667 8.93412 17.5 16.6607 17.5C17.2519 17.5 17.485 16.975 17.485 16.5167V13.6417C17.485 13.1917 17.1103 12.8167 16.6607 12.8167Z",
        fill: color
      }
    )
  }
);
const MailIcon = ({ width = 20, height = 20, color = "#B095E3", ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    width,
    height,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z",
        fill: color
      }
    )
  }
);
const iconComponents = {
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon
};
const FooterSection = lt.footer`
  position: relative;
  width: 100%;
  height: 460px;
  overflow: hidden;

  background: linear-gradient(
    360deg,
    rgba(31, 6, 70, 0.6) -5%,
    rgba(214, 195, 242, 0.6) 170.11%
  );

  /* Enhanced support for wide gamut displays */
  @supports (color: color(display-p3 1 1 1)) {
    background: linear-gradient(
      360deg,
      color(display-p3 0.11 0.027 0.263 / 0.6) -5%,
      color(display-p3 0.827 0.769 0.937 / 0.6) 170.11%
    );
  }

  ${MEDIA_QUERIES.mobile} {
    height: auto;
    min-height: 460px;
  }
`;
const Inner = lt.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;

  ${MEDIA_QUERIES.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`;
const Box = lt.div`
  width: 960px;
  height: 203px;
  border-radius: 32px;
  border: 1px solid #ffffff4d;
  background: #ffffff1a;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 12px 32px 0px #00000040;

  backdrop-filter: blur(32px);

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`;
const LeftColumn$1 = lt.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${MEDIA_QUERIES.mobile} {
    align-items: center;
  }
`;
const ContactTitle = lt.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 32px;
    text-align: center;
  }
`;
const ContactInfo = lt.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ContactItem = lt.div`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${MEDIA_QUERIES.mobile} {
    justify-content: center;
  }
`;
const IconWrapper = lt.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const RightColumn$1 = lt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const Logo = lt.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${MEDIA_QUERIES.mobile} {
    width: 180px;
    height: auto;
  }
`;
const Tagline = lt.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 14px;
  }
`;
const CopyrightBox = lt.div`
  width: 960px;
  height: 78px;
  border-radius: 32px;
  border: 1px solid #ffffff4d;
  background: #ffffff1a;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 12px 32px 0px #00000040;
  backdrop-filter: blur(32px);

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`;
const CopyrightText = lt.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 12px;
    text-align: center;
  }
`;
const SocialIcons = lt.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const SocialIcon = lt.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0.7;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
const Footer = () => {
  const {
    contactTitle,
    location,
    phone,
    email,
    tagline,
    companyName,
    logoAlt,
    socialLinks
  } = useContent("footer");
  return /* @__PURE__ */ jsx(FooterSection, { children: /* @__PURE__ */ jsxs(Inner, { children: [
    /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsxs(LeftColumn$1, { children: [
        /* @__PURE__ */ jsx(ContactTitle, { children: contactTitle }),
        /* @__PURE__ */ jsxs(ContactInfo, { children: [
          /* @__PURE__ */ jsxs(ContactItem, { children: [
            /* @__PURE__ */ jsx(IconWrapper, { children: /* @__PURE__ */ jsx(LocationIcon, { width: 15, height: 20, color: "#B095E3" }) }),
            location
          ] }),
          /* @__PURE__ */ jsxs(ContactItem, { children: [
            /* @__PURE__ */ jsx(IconWrapper, { children: /* @__PURE__ */ jsx(PhoneIcon, { width: 18, height: 18, color: "#B095E3" }) }),
            phone
          ] }),
          /* @__PURE__ */ jsxs(ContactItem, { children: [
            /* @__PURE__ */ jsx(IconWrapper, { children: /* @__PURE__ */ jsx(MailIcon, { width: 18, height: 18, color: "#B095E3" }) }),
            email
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(RightColumn$1, { children: [
        /* @__PURE__ */ jsx(Logo, { src: MarggLogo, alt: logoAlt }),
        /* @__PURE__ */ jsx(Tagline, { children: tagline })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CopyrightBox, { children: [
      /* @__PURE__ */ jsxs(CopyrightText, { children: [
        "© ",
        currentYear,
        " ",
        companyName,
        ". All Rights Reserved."
      ] }),
      /* @__PURE__ */ jsx(SocialIcons, { children: socialLinks.map((social) => {
        const IconComponent = iconComponents[social.icon];
        return /* @__PURE__ */ jsx(
          SocialIcon,
          {
            href: social.url,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": social.name,
            children: /* @__PURE__ */ jsx(IconComponent, {})
          },
          social.name
        );
      }) })
    ] })
  ] }) });
};
const PhoneScreenImg = "/assets/phone-screen-Jgi4cEKU.png";
const WaitlistContainer = lt.div`
  width: 960px;
  height: 240px;
  border-radius: 40px;
  border: 1px solid #b095e37a;
  background: #ffffff1a;
  box-shadow: 0px 4px 32px 0px #b095e366;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  padding-top: 20px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 80px;
  margin-top: 160px;

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    padding: 32px 24px;
    gap: 24px;
  }
`;
const LeftColumn = lt.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${MEDIA_QUERIES.mobile} {
    align-items: center;
    text-align: center;
  }
`;
const Title$3 = lt.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 36px;
  }
`;
const Subtitle = lt.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${MEDIA_QUERIES.mobile} {
    font-size: 16px;
    text-align: center;
  }
`;
const RightColumn = lt.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;
const PhoneScreenWrapper = lt.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`;
const PhoneImage$1 = lt.img`
  width: 100%;
  height: 100%;
  display: block;
`;
const JoinWaitList = ({ onSubmit }) => {
  const { title, subtitle, inputPlaceholder, buttonText } = useContent("joinWaitlist");
  return /* @__PURE__ */ jsxs(WaitlistContainer, { children: [
    /* @__PURE__ */ jsxs(LeftColumn, { children: [
      /* @__PURE__ */ jsx(Title$3, { children: title }),
      /* @__PURE__ */ jsx(Subtitle, { children: subtitle }),
      /* @__PURE__ */ jsx(
        Input1,
        {
          placeholder: inputPlaceholder,
          buttonText,
          onSubmit
        }
      )
    ] }),
    /* @__PURE__ */ jsx(RightColumn, { children: /* @__PURE__ */ jsx(PhoneScreenWrapper, { children: /* @__PURE__ */ jsx(PhoneImage$1, { src: PhoneScreenImg, alt: "Phone Screen" }) }) })
  ] });
};
const Phone = "/assets/phone-screen-2-DrcEaGKY.png";
const Block = lt.div`
  background: #ffffff1a;
  border-radius: 24px;
`;
const Title$2 = lt.h3`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
`;
lt.p`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
`;
const Roadmap = "/assets/roadmap-Cly0yicb.png";
const Container$5 = lt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`;
const Image$4 = lt.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`;
const RoadmapBlock = () => {
  const { roadmap } = useContent("blocks");
  return /* @__PURE__ */ jsxs(Container$5, { children: [
    /* @__PURE__ */ jsx(Title$2, { children: roadmap.title }),
    /* @__PURE__ */ jsx(Image$4, { src: Roadmap, alt: "roadmap" })
  ] });
};
const Mentorship = "/assets/mentor-B_SVnfNn.png";
const Container$4 = lt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`;
const Image$3 = lt.img`
  position: absolute;
  bottom: 0;
  width: 52%;
`;
const MentorshipBlock = () => {
  const { mentorship } = useContent("blocks");
  return /* @__PURE__ */ jsxs(Container$4, { children: [
    /* @__PURE__ */ jsx(Title$2, { children: mentorship.title }),
    /* @__PURE__ */ jsx(Image$3, { src: Mentorship, alt: "mentorship" })
  ] });
};
const Community = "/assets/community-Bm68CTui.png";
const Container$3 = lt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`;
const Image$2 = lt.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`;
const CommunityBlock = () => {
  const { community } = useContent("blocks");
  return /* @__PURE__ */ jsxs(Container$3, { children: [
    /* @__PURE__ */ jsx(Title$2, { children: community.title }),
    /* @__PURE__ */ jsx(Image$2, { src: Community, alt: "community" })
  ] });
};
const FocusTimer = "/assets/focus-timer-Dhb9AdeC.png";
const Container$2 = lt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`;
const Image$1 = lt.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`;
const TextContainer = lt.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`;
const Title$1 = lt(Title$2)`
  text-align: right;
  width: 50%;
`;
const FocusTimerBlock = () => {
  const { focusTimer } = useContent("blocks");
  return /* @__PURE__ */ jsxs(Container$2, { children: [
    /* @__PURE__ */ jsx(TextContainer, { children: /* @__PURE__ */ jsx(Title$1, { children: focusTimer.title }) }),
    /* @__PURE__ */ jsx(Image$1, { src: FocusTimer, alt: "focus timer" })
  ] });
};
const Streak = "/assets/streak-BhHFlVnO.png";
const Container$1 = lt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100%;
  padding-left: 20px;
  justify-content: center;
  overflow: hidden;
`;
lt.img`
  position: absolute;
  left: 30%;
  bottom: 0%;
  width: 50%;
`;
const Title = lt(Title$2)`
  text-align: left;
`;
const Image2 = lt.img`
  width: 80%;
  position: absolute;
  right: -30px;
  top: 0;
  z-index: -1;
`;
const StreaksBlock = () => {
  const { streaks } = useContent("blocks");
  return /* @__PURE__ */ jsxs(Container$1, { children: [
    /* @__PURE__ */ jsx(Title, { children: streaks.title }),
    /* @__PURE__ */ jsx(Image2, { src: Streak, alt: "streak" })
  ] });
};
const InterviewPrep = "/assets/interview-prep-BdEyhCch.png";
const Container = lt.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100%;
  padding-top: 30px;
  overflow: hidden;
  z-index: 0;
`;
const Image = lt.img`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -40%;
  z-index: 1;
`;
const InterviewPrepBlock = () => {
  const { interviewPrep } = useContent("blocks");
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Title$2, { children: interviewPrep.title }),
    ";",
    /* @__PURE__ */ jsx(Image, { src: InterviewPrep, alt: "screen left" })
  ] });
};
const GridContainer = lt.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 32px;
  width: 800px;
  height: 512px;
  opacity: 1;
  padding: 0;
`;
const GridBlock = lt(Block)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  overflow: hidden;
`;
const RoadmapWrapper = lt(GridBlock)`
  grid-column: span 6;
  height: 200px;
`;
const MentorshipWrapper = lt(GridBlock)`
  grid-column: span 3;
`;
const CommunityWrapper = lt(GridBlock)`
  grid-column: span 3;
`;
const FocusTimerWrapper = lt(GridBlock)`
  grid-column: span 4;
  min-height: 180px;
`;
const StreaksWrapper = lt(GridBlock)`
  grid-column: span 4;
  min-height: 60px;
`;
const InterviewPrepWrapper = lt(GridBlock)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`;
const Grid = () => {
  return /* @__PURE__ */ jsxs(GridContainer, { children: [
    /* @__PURE__ */ jsx(RoadmapWrapper, { children: /* @__PURE__ */ jsx(RoadmapBlock, {}) }),
    /* @__PURE__ */ jsx(MentorshipWrapper, { children: /* @__PURE__ */ jsx(MentorshipBlock, {}) }),
    /* @__PURE__ */ jsx(CommunityWrapper, { children: /* @__PURE__ */ jsx(CommunityBlock, {}) }),
    /* @__PURE__ */ jsx(FocusTimerWrapper, { children: /* @__PURE__ */ jsx(FocusTimerBlock, {}) }),
    /* @__PURE__ */ jsx(InterviewPrepWrapper, { children: /* @__PURE__ */ jsx(InterviewPrepBlock, {}) }),
    /* @__PURE__ */ jsx(StreaksWrapper, { children: /* @__PURE__ */ jsx(StreaksBlock, {}) })
  ] });
};
const SectionContainer = lt.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${MEDIA_QUERIES.mobile} {
    padding: 0 24px;
    gap: 24px;
  }
`;
const PhoneWrapper = lt.div`
  flex-shrink: 0;
`;
const PhoneImage = lt.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;

  ${MEDIA_QUERIES.mobile} {
    width: 200px;
    height: auto;
  }
`;
const GridWrapper = lt.div`
  min-width: 0;
`;
const GridSection = () => {
  return /* @__PURE__ */ jsxs(SectionContainer, { children: [
    /* @__PURE__ */ jsx(PhoneWrapper, { children: /* @__PURE__ */ jsx(PhoneImage, { src: Phone, alt: "Phone Screen" }) }),
    /* @__PURE__ */ jsx(GridWrapper, { children: /* @__PURE__ */ jsx(Grid, {}) })
  ] });
};
const HomeContainer = lt.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`;
const SectionsContainer = lt.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Home = () => {
  return /* @__PURE__ */ jsxs(HomeContainer, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs(SectionsContainer, { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Analytics, {}),
      /* @__PURE__ */ jsx(Supercharge, {}),
      /* @__PURE__ */ jsx(GridSection, {}),
      /* @__PURE__ */ jsx(JoinWaitList, {}),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
function App() {
  return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }) });
}
async function render(url, content) {
  const store = configureStore({
    reducer: {
      app: appReducer,
      content: contentReducer
    }
  });
  const source = content._source ?? "fallback";
  const { _source, ...contentData } = content;
  store.dispatch(contentSucceeded({ data: contentData, source }));
  const sheet = new yt();
  try {
    const html = renderToString(
      sheet.collectStyles(
        /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
      )
    );
    const styleTags = sheet.getStyleTags();
    return {
      html,
      styleTags,
      state: store.getState()
    };
  } finally {
    sheet.seal();
  }
}
export {
  render
};
