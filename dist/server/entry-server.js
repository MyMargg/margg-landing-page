import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import r, { createElement, useState, useRef, useEffect, useCallback, useMemo } from "react";
import { renderToString } from "react-dom/server";
import { Routes, Route, StaticRouter } from "react-router-dom";
import { useSelector, Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { __spreadArray, __assign } from "tslib";
import n from "@emotion/is-prop-valid";
import * as s from "stylis";
import i from "@emotion/unitless";
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
function ht(t) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
  "production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var o = ce(at.apply(void 0, __spreadArray([t], n2, false))), s2 = B(o);
  return new Le(s2, o);
}
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
const initialState$1 = {
  value: 0
};
const appSlice = createSlice({
  name: "app",
  initialState: initialState$1,
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
const navbar = { "logoAlt": "Margg", "links": [{ "label": "Home", "href": "#home", "primary": true }, { "label": "Our Products", "href": "#products" }, { "label": "Contact Us", "href": "#contact-us" }] };
const hero = { "titleLine1": "BRING OUT YOUR", "titleLine2": "BEST POTENTIAL", "description": "Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry", "inputPlaceholder": "Enter Email", "inputButtonText": "Join the waitlist", "tiles": { "autoCycleIntervalMs": 3e3, "defaultTileId": 1, "row1": [{ "id": 1, "ariaLabel": "Frontend Developer", "title": "Frontend Developer", "description": "Build modern UI with React, component systems, and responsive layouts.", "icon": "ScrollIcon" }, { "id": 2, "ariaLabel": "Programming Essentials", "title": "Programming Essentials", "description": "Learn core concepts, clean code, and problem-solving techniques.", "icon": "MessageProgrammingIcon" }, { "id": 3, "ariaLabel": "UI Design Fundamentals", "title": "UI Design Fundamentals", "description": "Design trends, spacing systems, and accessible UI patterns.", "icon": "PenToolIcon" }], "row2": [{ "id": 4, "ariaLabel": "Backend Development", "title": "Backend Development", "description": "Server-side logic, APIs, and database management.", "icon": "DriverIcon" }, { "id": 5, "ariaLabel": "Database Design", "title": "Database Design", "description": "Data modeling, SQL, and database optimization.", "icon": "FavoriteChartIcon" }, { "id": 6, "ariaLabel": "Cloud & DevOps", "title": "Cloud & DevOps", "description": "Deploy apps, understand environments, and ship confidently.", "icon": "CloudConnectionIcon" }, { "id": 7, "ariaLabel": "Testing & QA", "title": "Testing & QA", "description": "Write quality tests and ensure reliable applications.", "icon": "LockIcon" }], "row3": [{ "id": 8, "ariaLabel": "Security", "title": "Security", "description": "Learn safe patterns, auth basics, and secure-by-default UI.", "icon": "MessageProgrammingIcon" }, { "id": 9, "ariaLabel": "Algorithms", "title": "Algorithms", "description": "Problem-solving patterns and data structures.", "icon": "PenToolIcon" }, { "id": 10, "ariaLabel": "System Design", "title": "System Design", "description": "Architecture, scalability, and distributed systems.", "icon": "FavoriteChartIcon" }, { "id": 11, "ariaLabel": "Performance", "title": "Performance", "description": "Optimize load times, rendering, and user experience.", "icon": "DriverIcon" }] } };
const analytics = { "waitList": true, "stats": [{ "value": "43+", "label": "University\nPartners" }, { "value": "12K+", "label": "Students\nEnrolled" }, { "value": "35", "label": "Outstanding\nMentors" }, { "value": "7.5K", "label": "Student\nPlacements" }] };
const supercharge = { "titleLine1": "SUPERCHARGE", "titleLine2": "YOUR LEARNING POTENTIAL WITH OUR APP", "description": "Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away" };
const joinWaitlist = { "title": "JOIN WAITLIST", "subtitle": "First step towards your dream career", "inputPlaceholder": "Enter Email", "buttonText": "Notify Me" };
const courses = ["Frontend Development", "Backend Development", "Programming Essentials", "UI Design Fundamentals", "Database Design", "Cloud & DevOps", "Testing & QA", "Security", "Algorithms", "System Design", "Performance", "React", "Node.js", "Python", "Java", "Data Structures", "Machine Learning", "Mobile Development"];
const api = { "submissionMode": "sheets", "baseUrl": "https://api.margg.xyz/service-core", "endpoints": { "waitlist": "/general/user-contacts/waitlist", "learner": "/general/user-contacts", "instructor": "/general/instructor-enquiries", "partner": "/general/organisation-enquiries" }, "googleSheets": { "scriptUrl": "https://script.google.com/macros/s/AKfycbwmmOYKHVpfZEcqWhhAlNr6G7726uUj9WT4cua0i8sSMDQrQbWoBK2jj0Pc1FpRNfuB1g/exec" }, "emailjs": { "notifyEmail": "info@margg.in", "accounts": { "account1": { "serviceId": "service_uwxllg6", "publicKey": "sS9pUpAdxxLri3bjO" }, "account2": { "serviceId": "service_oq3tfkg", "publicKey": "r9cx6ICX3cdQFxZC9" } }, "templates": { "waitlist": { "templateId": "template_ob8hs05", "account": "account1" }, "learner": { "templateId": "template_n8yn8zn", "account": "account1" }, "instructor": { "templateId": "template_a5ox0x9", "account": "account2" }, "partner": { "templateId": "template_qxq0lla", "account": "account2" } } } };
const footer = { "contactTitle": "GET IN TOUCH WITH US", "location": "Bangalore | Tirupati", "phone": "+91 7993559974", "email": "info@margg.in", "tagline": "Curated routes for curious minds", "companyName": "Margg Private Limited", "logoAlt": "Margg Logo", "socialLinks": [{ "name": "YouTube", "icon": "YoutubeIcon", "url": "https://www.youtube.com/@MarggLive" }, { "name": "Instagram", "icon": "InstagramIcon", "url": "https://instagram.com/margglive" }, { "name": "X (Twitter)", "icon": "TwitterIcon", "url": "https://x.com/MarggLive" }, { "name": "Discord", "icon": "DiscordIcon", "url": "https://discord.gg/PDzhNUnB" }] };
const blocks = { "roadmap": { "title": "Roadmap Based Learning" }, "community": { "title": "Community" }, "focusTimer": { "title": "Focus Timer" }, "interviewPrep": { "title": "Interview Prep Materials" }, "jobBoard": { "title": "Job Board" }, "mentorship": { "title": "One-on-One Mentorship" }, "projects": { "title": "Projects" }, "resume": { "title": "Resume Builder" }, "skills": { "title": "Skills Assessment" }, "streaks": { "title": "Streaks" }, "certifications": { "title": "Certifications" } };
const seo = { "title": "Margg – Roadmap Based Courses & Best LMS Platform in South India | Gagan's Application", "description": "Margg is the best LMS application in South India offering roadmap based courses, structured learning paths, one-on-one mentorship, interview prep, resume building, certifications & career placement support for college students. Built by Gagan — curated routes for curious minds.", "keywords": "roadmap based courses, best LMS application in south india, Gagan's application, Margg, LMS for college students, learning management system India, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development, structured learning paths, best online courses India, South India LMS, Bangalore LMS, Tirupati education platform, curated learning roadmaps, coding bootcamp India, one-on-one mentorship India, resume builder for students, job placement LMS, streaks based learning, certification courses India, Margg Private Limited, MarggLive, best e-learning platform India", "author": "Margg Private Limited", "robots": "index, follow", "locale": "en_IN", "url": "https://margg.in", "ogImage": "https://margg.in/og-cover.png", "twitterHandle": "@MarggLive", "themeColor": "#090215", "foundingYear": "2023", "appCategory": "EducationApplication" };
const fallbackContent = {
  navbar,
  hero,
  analytics,
  supercharge,
  joinWaitlist,
  courses,
  api,
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
  mobile: "1000px",
  tablet: "1200px"
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
ht`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const slideIn = ht`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const NavbarContainer = lt.div`
  position: sticky;
  top: 0;
  z-index: 50;
  isolation: isolate;
  display: flex;
  justify-content: center;
  padding-top: 36px;

  @media (max-width: 768px) {
    padding-top: 16px;
  }

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

  @supports (color: color(display-p3 1 1 1)) {
    background: color(display-p3 1 1 1 / 0.1);
    box-shadow: 0 4px 24px 0 color(display-p3 0 0 0 / 0.25);
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding: 14px 20px;
    height: auto;
    border-radius: 18px;
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

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
  }
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

  @media (min-width: 769px) {
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
const HamburgerBtn = lt.button`
  all: unset;
  display: none;
  cursor: pointer;
  position: relative;
  width: 28px;
  height: 20px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const HamburgerLine = lt.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${(p2) => p2.$open ? "50%" : "0"};
    transform: ${(p2) => p2.$open ? "translateY(-50%) rotate(45deg)" : "none"};
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${(p2) => p2.$open ? 0 : 1};
  }
  &:nth-child(3) {
    bottom: ${(p2) => p2.$open ? "auto" : "0"};
    top: ${(p2) => p2.$open ? "50%" : "auto"};
    transform: ${(p2) => p2.$open ? "translateY(-50%) rotate(-45deg)" : "none"};
  }
`;
const MobileOverlay = lt.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 49;
    background: rgba(9, 2, 21, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${(p2) => p2.$open ? 1 : 0};
    pointer-events: ${(p2) => p2.$open ? "auto" : "none"};
    transition: opacity 0.3s ease;
  }
`;
const MobileDrawer = lt.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    width: min(320px, 80vw);
    height: 100dvh;
    padding: 80px 32px 40px;
    box-sizing: border-box;
    background: linear-gradient(
      170deg,
      rgba(30, 15, 55, 0.98) 0%,
      rgba(13, 2, 23, 0.99) 100%
    );
    border-left: 1px solid rgba(176, 149, 227, 0.15);
    box-shadow: -8px 0 40px rgba(0, 0, 0, 0.5);
    transform: translateX(${(p2) => p2.$open ? "0" : "100%"});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`;
const DrawerCloseBtn = lt.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(176, 149, 227, 0.1);
  transition: background 0.2s;

  &:hover {
    background: rgba(176, 149, 227, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
const DrawerNav = lt.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const DrawerLink = lt.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${FONTS.body};
  font-size: 18px;
  font-weight: ${(p2) => p2.$primary ? "600" : "400"};
  color: #fff;
  opacity: ${(p2) => p2.$primary ? 1 : 0.7};
  transition: all 0.2s ease;
  background: ${(p2) => p2.$primary ? "rgba(80, 19, 192, 0.15)" : "transparent"};

  ${(p2) => p2.$show && at`
      animation: ${slideIn} 0.4s ease forwards;
      animation-delay: ${p2.$delay || "0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`;
const DrawerLinkIcon = lt.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`;
const DrawerDivider = lt.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`;
const NAV_ICONS = {
  Home: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z", stroke: "#B095E3", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  "Our Products": /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", stroke: "#B095E3", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }),
  "Contact Us": /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", stroke: "#B095E3", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
};
const Navbar = () => {
  const { logoAlt, links } = useContent("navbar");
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const handleClick = useCallback((e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById(href.slice(1));
        if (el) {
          const navHeight = document.querySelector("nav")?.offsetHeight || 72;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavbarContainer, { children: /* @__PURE__ */ jsx(NavbarContent, { children: /* @__PURE__ */ jsxs(NavbarInner, { children: [
      /* @__PURE__ */ jsx(LogoSection, { children: /* @__PURE__ */ jsx(SkillImage, { src: MarggLogo, alt: logoAlt }) }),
      /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsx(MenuList, { children: links.map((link) => /* @__PURE__ */ jsx(
        MenuLink,
        {
          href: link.href,
          primary: link.primary ? true : void 0,
          onClick: handleClick,
          children: link.label
        },
        link.label
      )) }) }),
      /* @__PURE__ */ jsxs(
        HamburgerBtn,
        {
          onClick: () => setMenuOpen((v2) => !v2),
          "aria-label": menuOpen ? "Close menu" : "Open menu",
          "aria-expanded": menuOpen,
          children: [
            /* @__PURE__ */ jsx(HamburgerLine, { $open: menuOpen }),
            /* @__PURE__ */ jsx(HamburgerLine, { $open: menuOpen }),
            /* @__PURE__ */ jsx(HamburgerLine, { $open: menuOpen })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(MobileOverlay, { $open: menuOpen, onClick: () => setMenuOpen(false) }),
    /* @__PURE__ */ jsxs(MobileDrawer, { $open: menuOpen, ref: drawerRef, children: [
      /* @__PURE__ */ jsx(DrawerCloseBtn, { onClick: () => setMenuOpen(false), "aria-label": "Close menu", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M12 4L4 12M4 4l8 8", stroke: "#B095E3", strokeWidth: "1.5", strokeLinecap: "round" }) }) }),
      /* @__PURE__ */ jsx(DrawerNav, { children: links.map((link, i2) => /* @__PURE__ */ jsxs(
        DrawerLink,
        {
          href: link.href,
          $primary: link.primary,
          $show: menuOpen,
          $delay: `${0.1 + i2 * 0.07}s`,
          onClick: handleClick,
          children: [
            /* @__PURE__ */ jsx(DrawerLinkIcon, { children: NAV_ICONS[link.label] || NAV_ICONS.Home }),
            link.label
          ]
        },
        link.label
      )) }),
      /* @__PURE__ */ jsx(DrawerDivider, {})
    ] })
  ] });
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

  @media (max-width: 1000px) {
    width: 100%;
    flex-basis: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 96px);
    gap: 14px;
  }

  @media (max-width: 480px) {
    grid-template-rows: repeat(3, 80px);
    gap: 10px;
  }
`;
const TileButton = lt.div`
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
    cursor: pointer;
    /* Tap feedback */
    -webkit-tap-highlight-color: transparent;
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
  onClick,
  tileId
}) {
  return /* @__PURE__ */ jsx(
    TileButton,
    {
      "aria-label": ariaLabel,
      $isExpanded: isExpanded,
      style: {
        gridRow,
        gridColumn
      },
      onMouseEnter: () => onMouseEnter(tileId),
      onMouseLeave,
      onClick: () => onClick(tileId),
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
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);
  const clickTimeoutRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth <= 1e3);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);
  useEffect(() => {
    if (isMobile) return;
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
  }, [isUserHovering, isMobile]);
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
  const handleClick = (tileId) => {
    if (!isMobile) return;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    if (hoveredId === tileId) {
      setHoveredId(DEFAULT_TILE_ID);
    } else {
      setHoveredId(tileId);
      clickTimeoutRef.current = setTimeout(() => {
        setHoveredId(DEFAULT_TILE_ID);
      }, 4e3);
    }
  };
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);
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
        onMouseLeave: handleMouseLeave,
        onClick: handleClick
      },
      layoutItem.id
    );
  }) });
}
const FormWrapper = lt.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;
const InputWrapper = lt.div`
  position: relative;
  width: 100%;
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
    padding: 14px 120px 14px 16px;
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
async function postToSheet(scriptUrl, sheetTab, data) {
  if (!scriptUrl) {
    throw new Error(
      "Google Sheets integration is not configured. Please set the script URL."
    );
  }
  const payload = { _sheet: sheetTab, ...data };
  let res;
  try {
    res = await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      // Apps Script doesn't return CORS headers
      headers: { "Content-Type": "text/plain" },
      // avoid preflight
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15e3)
    });
  } catch (err) {
    if (err.name === "TimeoutError" || err.name === "AbortError") {
      throw new Error(
        "The request timed out. Please check your connection and try again."
      );
    }
    throw new Error(
      "Unable to reach Google Sheets. Please check your internet connection and try again."
    );
  }
  return { ok: true };
}
let emailjsLoaded = false;
let loadPromise = null;
function loadEmailJS() {
  if (emailjsLoaded && window.emailjs) return Promise.resolve();
  if (loadPromise) return loadPromise;
  loadPromise = new Promise((resolve, reject) => {
    if (window.emailjs) {
      emailjsLoaded = true;
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      emailjsLoaded = true;
      resolve();
    };
    script.onerror = () => {
      loadPromise = null;
      reject(new Error("Failed to load EmailJS SDK."));
    };
    document.head.appendChild(script);
  });
  return loadPromise;
}
function resolveTemplate(emailjsConfig, templateKey) {
  const tmpl = emailjsConfig?.templates?.[templateKey];
  if (!tmpl) return null;
  const accountName = tmpl.account;
  const account = emailjsConfig?.accounts?.[accountName];
  if (!account?.serviceId || !account?.publicKey) return null;
  return {
    serviceId: account.serviceId,
    publicKey: account.publicKey,
    templateId: tmpl.templateId
  };
}
async function sendNotification(emailjsConfig, templateKey, templateVars) {
  const resolved = resolveTemplate(emailjsConfig, templateKey);
  if (!resolved) {
    console.warn(`[EmailJS] No valid config for "${templateKey}" — skipping.`);
    return { ok: true, skipped: true };
  }
  try {
    await loadEmailJS();
    window.emailjs.init(resolved.publicKey);
    const vars = {
      ...templateVars,
      to_email: emailjsConfig.notifyEmail || "info@margg.in",
      submission_time: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };
    const result = await window.emailjs.send(
      resolved.serviceId,
      resolved.templateId,
      vars
    );
    if (result.status !== 200) {
      console.warn("[EmailJS] Non-200 status:", result);
    }
    return { ok: true };
  } catch (err) {
    console.error("[EmailJS] Send failed:", err);
    return { ok: false, error: err.message };
  }
}
const EMAIL_RE$1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_RE$1 = /^[0-9\s\-+()]{10,15}$/;
function required(val, label) {
  if (!val || !String(val).trim()) throw new Error(`${label} is required`);
  return String(val).trim();
}
function emailOk(val) {
  const v2 = required(val, "Email").toLowerCase().slice(0, 254);
  if (!EMAIL_RE$1.test(v2)) throw new Error("Please enter a valid email address");
  return v2;
}
function phoneOk(val) {
  const v2 = required(val, "Phone number");
  if (!PHONE_RE$1.test(v2)) throw new Error("Please enter a valid phone number");
  return v2;
}
async function post(url, body) {
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15e3)
    });
  } catch (err) {
    if (err.name === "TimeoutError" || err.name === "AbortError") {
      throw new Error(
        "The request timed out. Please check your connection and try again."
      );
    }
    throw new Error(
      "Unable to reach the server. Please check your internet connection and try again."
    );
  }
  if (res.ok) return { ok: true };
  let serverMsg = "";
  try {
    const json = await res.json();
    serverMsg = json?.data?.message || json?.message || json?.error || "";
  } catch {
  }
  if (res.status === 409) {
    throw new Error(
      serverMsg || "This entry already exists. Please use a different email."
    );
  }
  if (res.status === 422 || res.status === 400) {
    throw new Error(
      serverMsg || "Some fields are invalid. Please review and try again."
    );
  }
  if (res.status === 429) {
    throw new Error(
      "Too many requests. Please wait a moment and try again."
    );
  }
  if (res.status >= 500) {
    throw new Error(
      "Our servers are temporarily unavailable. Please try again in a few moments."
    );
  }
  throw new Error(
    serverMsg || "Something went wrong. Please try again."
  );
}
function useSheets(apiConfig) {
  return apiConfig?.submissionMode === "sheets";
}
async function submitWaitlist(apiConfig, rawEmail) {
  const email = emailOk(rawEmail);
  if (useSheets(apiConfig)) {
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Waitlist", { email });
    await sendNotification(apiConfig.emailjs, "waitlist", {
      form_type: "Waitlist",
      email
    });
    return { ok: true };
  }
  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.waitlist}`;
  return post(url, { email });
}
async function submitLearner(apiConfig, form) {
  const firstName = required(form.fullName, "Full name").split(" ")[0];
  const lastName = required(form.fullName, "Full name").split(" ").slice(1).join(" ") || "";
  const phone = phoneOk(form.phone);
  const email = emailOk(form.email);
  const collegeName = required(form.college, "College name");
  const branch = required(form.branch, "Branch");
  const year = required(form.year, "Year");
  const query = form.query || "";
  if (useSheets(apiConfig)) {
    const row = { firstName, lastName, phone, email, collegeName, branch, year, query };
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Learners", row);
    await sendNotification(apiConfig.emailjs, "learner", {
      form_type: "Learner Enquiry",
      full_name: `${firstName} ${lastName}`.trim(),
      phone,
      email,
      college_name: collegeName,
      branch,
      year,
      query
    });
    return { ok: true };
  }
  const body = { firstName, lastName, phone, email, collegeName, branch, year, query };
  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.learner}`;
  return post(url, body);
}
async function submitInstructor(apiConfig, form) {
  const fullName = required(form.fullName, "Full name");
  const phone = phoneOk(form.phone);
  const email = emailOk(form.email);
  const topics = form.topics?.length ? form.topics : (() => {
    throw new Error("Add at least one topic");
  })();
  if (useSheets(apiConfig)) {
    const row = { fullName, phone, email, topics: topics.join(", ") };
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Instructors", row);
    await sendNotification(apiConfig.emailjs, "instructor", {
      form_type: "Instructor Enquiry",
      full_name: fullName,
      phone,
      email,
      topics: topics.join(", ")
    });
    return { ok: true };
  }
  const body = { fullName, phone, email, topics };
  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.instructor}`;
  return post(url, body);
}
async function submitPartner(apiConfig, form) {
  const organisationType = required(form.orgType, "Organisation type");
  const organisationName = required(form.orgName, "Organisation name");
  const numberOfStudents = Number(required(form.students, "Number of students")) || 0;
  const phone = phoneOk(form.phone);
  const email = emailOk(form.email);
  if (useSheets(apiConfig)) {
    const row = { organisationType, organisationName, numberOfStudents, phone, email };
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Partners", row);
    await sendNotification(apiConfig.emailjs, "partner", {
      form_type: "Partner / Organisation Enquiry",
      organisation_type: organisationType,
      organisation_name: organisationName,
      number_of_students: numberOfStudents,
      phone,
      email
    });
    return { ok: true };
  }
  const body = { organisationType, organisationName, numberOfStudents, phone, email };
  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.partner}`;
  return post(url, body);
}
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
const Glow$1 = lt.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`;
const GlowOne = lt(Glow$1)`
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
const GlowTwo = lt(Glow$1)`
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
const GlowThree = lt(Glow$1)`
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
const GlowFour = lt(Glow$1)`
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

  @media (max-width: 1000px) {
    padding: 152px 20px 60px;
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
const Hero = ({ id }) => {
  const tileColor = "rgba(176, 149, 227, 1)";
  const {
    titleLine1,
    titleLine2,
    description,
    inputPlaceholder,
    inputButtonText
  } = useContent("hero");
  const apiConfig = useContent("api");
  const handleWaitlistSubmit = (email) => submitWaitlist(apiConfig, email);
  return /* @__PURE__ */ jsxs(IntroSection, { id, children: [
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
            buttonText: inputButtonText,
            onSubmit: handleWaitlistSubmit
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
const Label$1 = lt.div`
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
    /* @__PURE__ */ jsx(Label$1, { children: item.label })
  ] }, item.value + item.label)) });
}
const AnalyticsSection = lt.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  --hero-bottom-radius: clamp(56px, 6vw, 120px);
  margin-top: calc(-1 * var(--hero-bottom-radius));
  --pad: clamp(24px, 7vw, 120px);

  padding: calc(clamp(72px, 10vh, 130px) + var(--hero-bottom-radius)) var(--pad)
    calc(clamp(72px, 10vh, 130px) + 72px);

  background: linear-gradient(180deg, #3c2a60 0%, #4b3577 52%, #3c2a60 100%);

  @media (max-width: 1000px) {
    padding: calc(64px + var(--hero-bottom-radius)) 20px calc(80px + 72px);
  }
`;
const Inner$3 = lt.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`;
const auroraShift1 = ht`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`;
const auroraShift2 = ht`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`;
const auroraShift3 = ht`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`;
const AuroraCanvas = lt.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;
const AuroraBlob = lt.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`;
const Blob1 = lt(AuroraBlob)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${auroraShift1} 12s ease-in-out infinite;
`;
const Blob2 = lt(AuroraBlob)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${auroraShift2} 15s ease-in-out infinite;
`;
const Blob3 = lt(AuroraBlob)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${auroraShift3} 18s ease-in-out infinite;
`;
const NoiseOverlay = lt.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`;
const gridFade = ht`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`;
const GridLines = lt.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(176, 149, 227, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(176, 149, 227, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(
    ellipse 60% 50% at 50% 50%,
    black 0%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 60% 50% at 50% 50%,
    black 0%,
    transparent 100%
  );
  animation: ${gridFade} 8s ease-in-out infinite;
`;
const scanAnim = ht`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`;
const ScanLine = lt.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -2px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(176, 149, 227, 0.35),
    transparent
  );
  animation: ${scanAnim} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`;
const floatParticle = ht`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`;
const CONSTELLATION = [
  { x: 5, y: 15, size: 3, dur: 10, delay: 0, op: 0.4 },
  { x: 12, y: 72, size: 2, dur: 12, delay: 1.2, op: 0.3 },
  { x: 22, y: 35, size: 4, dur: 9, delay: 0.5, op: 0.5 },
  { x: 33, y: 85, size: 2, dur: 14, delay: 2, op: 0.25 },
  { x: 42, y: 12, size: 3, dur: 11, delay: 0.8, op: 0.35 },
  { x: 55, y: 78, size: 4, dur: 13, delay: 1.5, op: 0.45 },
  { x: 63, y: 28, size: 2, dur: 10, delay: 3, op: 0.3 },
  { x: 72, y: 60, size: 3, dur: 15, delay: 0.3, op: 0.4 },
  { x: 78, y: 18, size: 2, dur: 12, delay: 2.5, op: 0.25 },
  { x: 85, y: 45, size: 4, dur: 9, delay: 1, op: 0.5 },
  { x: 91, y: 80, size: 3, dur: 11, delay: 0.7, op: 0.35 },
  { x: 15, y: 50, size: 2, dur: 14, delay: 1.8, op: 0.3 },
  { x: 48, y: 42, size: 3, dur: 10, delay: 2.2, op: 0.4 },
  { x: 68, y: 90, size: 2, dur: 13, delay: 0.4, op: 0.25 },
  { x: 38, y: 55, size: 3, dur: 11, delay: 3.2, op: 0.35 },
  { x: 95, y: 25, size: 2, dur: 12, delay: 1.6, op: 0.3 },
  { x: 8, y: 88, size: 4, dur: 15, delay: 0.9, op: 0.45 },
  { x: 28, y: 8, size: 2, dur: 10, delay: 2.8, op: 0.3 }
];
const ConstellationDot = lt.span`
  position: absolute;
  width: ${(p2) => p2.$size}px;
  height: ${(p2) => p2.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${(p2) => p2.$op});
  left: ${(p2) => p2.$x}%;
  top: ${(p2) => p2.$y}%;
  animation: ${floatParticle} ${(p2) => p2.$dur}s ease-in-out infinite;
  animation-delay: ${(p2) => p2.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${(p2) => p2.$size * 3}px
    rgba(176, 149, 227, ${(p2) => p2.$op * 0.5});
`;
const sweepLine = ht`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`;
const SweepLight = lt.div`
  position: absolute;
  top: 50%;
  width: 200px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.5) 50%,
    transparent 100%
  );
  animation: ${sweepLine} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;
const CursorGlow = lt.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  --mx: 50%;
  --my: 50%;

  &::after {
    content: "";
    position: absolute;
    left: var(--mx);
    top: var(--my);
    width: 180px;
    height: 180px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(176, 149, 227, 0.14) 0%,
      rgba(80, 19, 192, 0.04) 40%,
      transparent 70%
    );
    transition:
      left 0.12s ease-out,
      top 0.12s ease-out;
  }
`;
const PerspectiveWrapper = lt.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`;
const TiltContent = lt.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`;
const borderBreathe = ht`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`;
const ComingSoonWrapper = lt.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 56px 32px;
  z-index: 2;

  @media (max-width: 1000px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 32px 12px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    border: 1px solid rgba(176, 149, 227, 0.12);
    background: rgba(75, 53, 119, 0.06);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    animation: ${borderBreathe} 5s ease-in-out infinite;
    pointer-events: none;
  }
`;
const cornerFade = ht`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;
const Corner = lt.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-color: rgba(176, 149, 227, 0.18);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: ${cornerFade} 0.6s ease-out 2.6s forwards;

  ${(p2) => p2.$pos === "tl" && at`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${(p2) => p2.$pos === "tr" && at`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${(p2) => p2.$pos === "bl" && at`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${(p2) => p2.$pos === "br" && at`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`;
const letterReveal3D = ht`
  0%   {
    opacity: 0;
    transform: translateY(60px) rotateX(90deg) scale(0.5);
    filter: blur(12px);
  }
  60%  {
    opacity: 0.85;
    transform: translateY(-6px) rotateX(-8deg) scale(1.02);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
    filter: blur(0);
  }
`;
const shimmer = ht`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`;
const glowBreathe = ht`
  0%, 100% {
    text-shadow:
      0 0 20px rgba(176, 149, 227, 0.3),
      0 0 40px rgba(80, 19, 192, 0.12),
      0 0 80px rgba(80, 19, 192, 0.04);
  }
  50% {
    text-shadow:
      0 0 30px rgba(176, 149, 227, 0.5),
      0 0 60px rgba(80, 19, 192, 0.2),
      0 0 120px rgba(80, 19, 192, 0.08);
  }
`;
const gentleFloat = ht`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`;
const TitleRow = lt.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2.5vw, 40px);
  transform-style: preserve-3d;
  width: 100%;
`;
const Letter = lt.span`
  display: inline-block;
  font-family: ${FONTS.heading};
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  cursor: default;
  user-select: none;
  position: relative;
  transform-style: preserve-3d;

  /* Rich animated gradient */
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(211, 196, 239, 1) 20%,
    rgba(176, 149, 227, 1) 40%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(176, 149, 227, 1) 60%,
    rgba(211, 196, 239, 1) 80%,
    rgba(255, 255, 255, 0.9) 100%
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  opacity: 0;
  transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${(p2) => p2.$animate && at`
      animation:
        ${letterReveal3D} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${p2.$delay}s
          forwards,
        ${shimmer} 6s linear ${p2.$delay + 0.9}s infinite,
        ${glowBreathe} 4s ease-in-out ${p2.$delay + 0.9}s infinite,
        ${gentleFloat} ${3.5 + p2.$delay % 1.5}s ease-in-out ${p2.$delay + 0.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${shimmer} 1.5s linear infinite,
      ${glowBreathe} 1s ease-in-out infinite;
    text-shadow:
      0 0 40px rgba(176, 149, 227, 0.8),
      0 0 80px rgba(80, 19, 192, 0.3);
    transform: scale(1.12) translateY(-3px);
  }
`;
const BigLetter = lt(Letter)`
  font-size: clamp(64px, 12vw, 160px);
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    font-size: clamp(40px, 10vw, 64px);
  }
`;
const SmallLetter = lt(Letter)`
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: 0.18em;
  -webkit-text-fill-color: rgba(211, 196, 239, 0.65);
  background: none;
  animation: ${(p2) => p2.$animate ? at`
          ${letterReveal3D} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${p2.$delay}s forwards
        ` : "none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`;
const subtitleReveal = ht`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`;
const Subtitle$1 = lt.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${FONTS.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${subtitleReveal} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`;
const lineExpand = ht`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`;
const DividerGroup = lt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: clamp(20px, 2.5vw, 36px);
`;
const DividerLine = lt.span`
  display: inline-block;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.4) 50%,
    transparent 100%
  );
  animation: ${lineExpand} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`;
const diamondReveal = ht`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`;
const diamondPulse = ht`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`;
const Diamond = lt.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${diamondReveal} 0.5s ease-out 2.5s forwards,
    ${diamondPulse} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`;
const pulseDot = ht`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`;
const dotsFade = ht`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`;
const PulseDotsRow = lt.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${dotsFade} 0.8s ease-out 2.8s forwards;
`;
const PulseDot = lt.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${pulseDot} 1.5s ease-in-out infinite;
  animation-delay: ${(p2) => p2.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;
function useMouseGlow(ref) {
  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x2 = (e.clientX - rect.left) / rect.width * 100;
      const y2 = (e.clientY - rect.top) / rect.height * 100;
      ref.current.style.setProperty("--mx", `${x2}%`);
      ref.current.style.setProperty("--my", `${y2}%`);
    },
    [ref]
  );
  return handleMouseMove;
}
function use3DTilt(ref) {
  const handleTiltMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x2 = (e.clientX - rect.left) / rect.width - 0.5;
      const y2 = (e.clientY - rect.top) / rect.height - 0.5;
      ref.current.style.transform = `rotateX(${y2 * -5}deg) rotateY(${x2 * 5}deg)`;
    },
    [ref]
  );
  const handleTiltLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  }, [ref]);
  return { handleTiltMove, handleTiltLeave };
}
function useInView$5(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}
function StaggeredWord({ text, Component, baseDelay = 0, animate = true }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      style: {
        display: "inline-flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap"
      },
      children: text.split("").map((ch, i2) => /* @__PURE__ */ jsx(
        Component,
        {
          $animate: animate,
          $delay: baseDelay + i2 * 0.07,
          children: ch
        },
        `${ch}-${i2}`
      ))
    }
  );
}
function Analytics() {
  const { stats, waitList } = useContent("analytics");
  const cursorRef = useRef(null);
  const tiltRef = useRef(null);
  const handleCursorMove = useMouseGlow(cursorRef);
  const { handleTiltMove, handleTiltLeave } = use3DTilt(tiltRef);
  const [viewRef, inView] = useInView$5(0.2);
  const handleMouseMove = useCallback(
    (e) => {
      handleCursorMove(e);
      handleTiltMove(e);
    },
    [handleCursorMove, handleTiltMove]
  );
  return /* @__PURE__ */ jsx(
    AnalyticsSection,
    {
      ref: viewRef,
      "aria-label": "analytics",
      onMouseMove: handleMouseMove,
      onMouseLeave: handleTiltLeave,
      children: /* @__PURE__ */ jsx(Inner$3, { children: waitList ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(AuroraCanvas, { children: [
          /* @__PURE__ */ jsx(Blob1, {}),
          /* @__PURE__ */ jsx(Blob2, {}),
          /* @__PURE__ */ jsx(Blob3, {})
        ] }),
        /* @__PURE__ */ jsx(GridLines, {}),
        /* @__PURE__ */ jsx(NoiseOverlay, {}),
        /* @__PURE__ */ jsx(SweepLight, {}),
        /* @__PURE__ */ jsx(ScanLine, {}),
        /* @__PURE__ */ jsx(CursorGlow, { ref: cursorRef }),
        CONSTELLATION.map((p2, i2) => /* @__PURE__ */ jsx(
          ConstellationDot,
          {
            $x: p2.x,
            $y: p2.y,
            $size: p2.size,
            $dur: p2.dur,
            $delay: p2.delay,
            $op: p2.op
          },
          i2
        )),
        /* @__PURE__ */ jsx(PerspectiveWrapper, { children: /* @__PURE__ */ jsx(TiltContent, { ref: tiltRef, children: /* @__PURE__ */ jsxs(ComingSoonWrapper, { children: [
          /* @__PURE__ */ jsx(Corner, { $pos: "tl" }),
          /* @__PURE__ */ jsx(Corner, { $pos: "tr" }),
          /* @__PURE__ */ jsx(Corner, { $pos: "bl" }),
          /* @__PURE__ */ jsx(Corner, { $pos: "br" }),
          /* @__PURE__ */ jsxs(TitleRow, { children: [
            /* @__PURE__ */ jsx(
              StaggeredWord,
              {
                text: "WE",
                Component: SmallLetter,
                baseDelay: 0.1,
                animate: inView
              }
            ),
            /* @__PURE__ */ jsx("span", { style: { width: "clamp(8px,1.5vw,20px)" } }),
            /* @__PURE__ */ jsx(
              StaggeredWord,
              {
                text: "ARE",
                Component: SmallLetter,
                baseDelay: 0.3,
                animate: inView
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(TitleRow, { style: { marginTop: "clamp(4px, 0.8vw, 12px)" }, children: [
            /* @__PURE__ */ jsx(
              StaggeredWord,
              {
                text: "COMING",
                Component: BigLetter,
                baseDelay: 0.5,
                animate: inView
              }
            ),
            /* @__PURE__ */ jsx(
              StaggeredWord,
              {
                text: "SOON",
                Component: BigLetter,
                baseDelay: 0.9,
                animate: inView
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Subtitle$1, { children: "Something extraordinary is on its way" }),
          /* @__PURE__ */ jsxs(DividerGroup, { children: [
            /* @__PURE__ */ jsx(DividerLine, {}),
            /* @__PURE__ */ jsx(Diamond, {}),
            /* @__PURE__ */ jsx(DividerLine, {})
          ] }),
          /* @__PURE__ */ jsxs(PulseDotsRow, { children: [
            /* @__PURE__ */ jsx(PulseDot, { $delay: 0 }),
            /* @__PURE__ */ jsx(PulseDot, { $delay: 0.3 }),
            /* @__PURE__ */ jsx(PulseDot, { $delay: 0.6 })
          ] })
        ] }) }) })
      ] }) : /* @__PURE__ */ jsx(StatsCards, { items: stats }) })
    }
  );
}
const fadeUp$4 = ht`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;
function useInView$4(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}
const Section$1 = lt.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 2;

  /* Match Hero's bottom corner radius */
  border-top-left-radius: 72px;
  border-top-right-radius: 72px;

  /* Pull up over Analytics so rounded corners are visible against its purple bg */
  margin-top: -72px;

  --pad: clamp(24px, 7vw, 120px);
  padding: calc(140px + 72px) var(--pad) 0;

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

  @media (max-width: 1000px) {
    padding: calc(100px + 72px) 20px 0;
  }

  @media (max-width: 480px) {
    padding: calc(80px + 72px) 16px 0;
  }
`;
const Inner$2 = lt.div`
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
  opacity: 0;

  ${(p2) => p2.$inView && at`
      animation: ${fadeUp$4} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`;
const Description = lt.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${FONTS.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
  opacity: 0;

  ${(p2) => p2.$inView && at`
      animation: ${fadeUp$4} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
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
function Supercharge({ id }) {
  const { titleLine1, titleLine2, description } = useContent("supercharge");
  const [viewRef, inView] = useInView$4(0.15);
  return /* @__PURE__ */ jsx(Section$1, { id, "aria-label": "supercharge", ref: viewRef, children: /* @__PURE__ */ jsx(Inner$2, { children: /* @__PURE__ */ jsxs(Stack, { children: [
    /* @__PURE__ */ jsxs(Title$4, { $inView: inView, children: [
      titleLine1,
      /* @__PURE__ */ jsx("br", {}),
      titleLine2
    ] }),
    /* @__PURE__ */ jsx(Description, { $inView: inView, children: description })
  ] }) }) });
}
const fadeUp$3 = ht`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;
function useInView$3(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^[0-9\s\-+()]{10,15}$/;
function validate(name, value) {
  if (!value || !value.trim()) return "Required";
  switch (name) {
    case "email":
      return EMAIL_RE.test(value.trim()) ? "" : "Invalid email";
    case "phone":
      return PHONE_RE.test(value.trim()) ? "" : "Invalid phone number";
    case "fullName":
      return value.trim().length >= 2 ? "" : "At least 2 characters";
    case "orgName":
      return value.trim().length >= 2 ? "" : "At least 2 characters";
    default:
      return "";
  }
}
const ROLES = [
  {
    key: "learner",
    title: "Learners",
    desc: "Have questions about your course, progress, or certification? Reach out and we’ll get you the support you need."
  },
  {
    key: "instructor",
    title: "Instructors",
    desc: "Interested in joining our platform or facing technical issues while managing your content? We’re just a message away."
  },
  {
    key: "partner",
    title: "Partners",
    desc: "Let’s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team."
  }
];
const LearnerIcon = () => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", children: [
  /* @__PURE__ */ jsx("path", { d: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z", fill: "#D3C4EF", fillOpacity: ".8" }),
  /* @__PURE__ */ jsx("path", { d: "M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z", fill: "#EEE7F9" })
] });
const InstructorIcon = () => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", children: [
  /* @__PURE__ */ jsx("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z", fill: "#D3C4EF" }),
  /* @__PURE__ */ jsx("path", { d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z", fill: "#D3C4EF", fillOpacity: ".6" }),
  /* @__PURE__ */ jsx("path", { d: "M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z", fill: "#EEE7F9" })
] });
const PartnerIcon = () => /* @__PURE__ */ jsxs("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", children: [
  /* @__PURE__ */ jsx("path", { d: "M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: "#D3C4EF", fillOpacity: ".6" }),
  /* @__PURE__ */ jsx("path", { d: "M9 11a3 3 0 100-6 3 3 0 000 6z", fill: "#D3C4EF" }),
  /* @__PURE__ */ jsx("path", { d: "M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z", fill: "#D3C4EF", fillOpacity: ".6" }),
  /* @__PURE__ */ jsx("path", { d: "M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z", fill: "#D3C4EF" })
] });
const ROLE_ICONS = { learner: LearnerIcon, instructor: InstructorIcon, partner: PartnerIcon };
const Section = lt.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${MEDIA_QUERIES.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`;
const Glow = lt.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`;
const Glow1 = lt(Glow)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `;
const Glow2 = lt(Glow)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `;
const Glow3 = lt(Glow)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `;
const Inner$1 = lt.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const animMixin = at`
  opacity: 0;
  ${(p2) => p2.$show && at`
    animation: ${fadeUp$3} 0.7s ease forwards;
    animation-delay: ${p2.$d || "0s"};
  `}
`;
const SectionTitle = lt.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${animMixin}
`;
const SectionSub = lt.p`
  margin: 16px 0 0;
  font-family: ${FONTS.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${animMixin}
`;
const CardsRow = lt.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  ${animMixin}

  ${MEDIA_QUERIES.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`;
const CardWrapper = lt.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${(p2) => p2.$active ? "drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))" : "drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${MEDIA_QUERIES.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`;
const RoleCard = lt.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px 72px;
  clip-path: url(#shield-clip);
  transition: background 0.35s ease;

  background: ${(p2) => p2.$active ? "linear-gradient(160deg, rgba(80,19,192,0.55) 0%, rgba(60,42,96,0.7) 100%)" : "linear-gradient(160deg, rgba(80,19,192,0.15) 0%, rgba(60,42,96,0.2) 100%)"};

  &:hover {
    background: linear-gradient(160deg, rgba(80,19,192,0.35) 0%, rgba(60,42,96,0.45) 100%);
  }

  ${MEDIA_QUERIES.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${(p2) => p2.$active ? "rgba(176,149,227,0.5)" : "rgba(176,149,227,0.12)"};
  }
`;
const CardIcon = lt.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.12);
  margin-bottom: 16px;

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    margin-bottom: 8px;
    svg { width: 20px; height: 20px; }
  }
`;
const CardTitle = lt.span`
  font-family: ${FONTS.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${MEDIA_QUERIES.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`;
const CardDesc = lt.span`
  font-family: ${FONTS.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${MEDIA_QUERIES.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`;
const MobileDesc = lt.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${FONTS.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${animMixin}
  }
`;
const ConnectorArea = lt.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: -20px;
  @media (max-width: 600px) { display: none; }
`;
const DashedLine = lt.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${(p2) => p2.$pos === "left" && at` left: 18%; transform: rotate(22deg); transform-origin: top center; `}
  ${(p2) => p2.$pos === "center" && at` left: 50%; `}
  ${(p2) => p2.$pos === "right" && at` right: 18%; transform: rotate(-22deg); transform-origin: top center; `}
`;
const FormCard = lt.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${animMixin}

  ${MEDIA_QUERIES.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`;
const FormTitle = lt.h3`
  margin: 0;
  font-family: ${FONTS.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${MEDIA_QUERIES.mobile} { font-size: 32px; }
`;
const FormSub = lt.p`
  margin: 8px 0 0;
  font-family: ${FONTS.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${MEDIA_QUERIES.mobile} { font-size: 15px; }
`;
const FieldsGrid = lt.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${MEDIA_QUERIES.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`;
const FieldWrap = lt.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${(p2) => p2.$full && at` grid-column: 1 / -1; `}
`;
const Label = lt.label`
  font-family: ${FONTS.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`;
const inputBase = at`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${FONTS.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`;
const Input = lt.input` ${inputBase} `;
const Select = lt.select`
  ${inputBase}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${FONTS.body};
    padding: 8px;
  }
`;
const ErrorText = lt.span`
  font-family: ${FONTS.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`;
const TagsArea = lt.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;
const Tag = lt.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${FONTS.body};
  font-size: 13px;
  color: #eee7f9;
`;
const TagRemove = lt.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`;
const CheckRow = lt.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`;
const Checkbox = lt.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(176, 149, 227, 0.5);
  background: ${(p2) => p2.$checked ? "#5013C0" : "rgba(211,196,239,0.06)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  svg { opacity: ${(p2) => p2.$checked ? 1 : 0}; transition: opacity 0.15s; }
`;
const CheckLabel = lt.span`
  font-family: ${FONTS.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`;
const SubmitBtn = lt.button`
  all: unset;
  cursor: pointer;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 197px;
  height: 43px;
  border-radius: 40px;
  background: #fff;
  border: 1px solid #d3c4ef;
  box-shadow: 0 4px 24px rgba(176, 149, 227, 0.5);
  font-family: ${FONTS.body};
  font-weight: 700;
  font-size: 16px;
  color: #5013c0;
  letter-spacing: -0.3px;
  transition: all 0.25s ease;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 28px;
  }

  &:hover { transform: translateY(-2px); box-shadow: 0 6px 32px rgba(176,149,227,0.6); }
  &:active { transform: translateY(0); }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
`;
const FormErrorBanner = lt.div`
  margin-top: 20px;
  padding: 14px 20px;
  border-radius: 12px;
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) { padding: 12px 14px; gap: 10px; }
`;
const ErrorBannerText = lt.span`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`;
const RetryBtn = lt.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${FONTS.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`;
const SuccessMsg = lt.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const SuccessIcon = lt.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SuccessTitle = lt.h3`
  margin: 0;
  font-family: ${FONTS.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`;
const SuccessText = lt.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;
function initialState(role) {
  switch (role) {
    case "learner":
      return { fullName: "", phone: "", email: "", college: "", branch: "", year: "", newsletter: false };
    case "instructor":
      return { fullName: "", phone: "", email: "", topics: [], otherTopic: void 0 };
    case "partner":
      return { orgType: "", orgName: "", students: "", phone: "", email: "" };
    default:
      return {};
  }
}
function Contact({ id }) {
  const apiConfig = useContent("api");
  const [role, setRole] = useState("learner");
  const [form, setForm] = useState(initialState("learner"));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  useRef(null);
  const [viewRef, inView] = useInView$3(0.08);
  const sectionRef = useRef(null);
  useEffect(() => {
    const ROLE_HASHES = {
      "#contact-learner": "learner",
      "#contact-instructor": "instructor",
      "#contact-partner": "partner"
    };
    function handleHash() {
      const hash = window.location.hash;
      const r2 = ROLE_HASHES[hash];
      if (r2) {
        setRole(r2);
        setForm(initialState(r2));
        setErrors({});
        setSubmitted(false);
        requestAnimationFrame(() => {
          const el = sectionRef.current;
          if (el) {
            const navHeight = document.querySelector("nav")?.offsetHeight || 72;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
          }
        });
      }
    }
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);
  const handleRole = useCallback((r2) => {
    setRole(r2);
    setForm(initialState(r2));
    setErrors({});
    setSubmitted(false);
  }, []);
  const set = useCallback(
    (key, value) => {
      setForm((f2) => ({ ...f2, [key]: value }));
      if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
    },
    [errors]
  );
  const addTopic = useCallback((topic) => {
    if (!topic) return;
    setForm((f2) => ({
      ...f2,
      topics: f2.topics.includes(topic) ? f2.topics : [...f2.topics, topic]
    }));
    if (errors.topics) setErrors((e) => ({ ...e, topics: "" }));
  }, [errors]);
  const addOtherTopic = useCallback(() => {
    setForm((f2) => {
      const t = f2.otherTopic?.trim();
      if (!t) return f2;
      return {
        ...f2,
        topics: f2.topics.includes(t) ? f2.topics : [...f2.topics, t],
        otherTopic: void 0
      };
    });
    if (errors.topics) setErrors((e) => ({ ...e, topics: "" }));
  }, [errors]);
  const removeTopic = useCallback((topic) => {
    setForm((f2) => ({ ...f2, topics: f2.topics.filter((t) => t !== topic) }));
  }, []);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const errs = {};
      if (role === "learner") {
        ["fullName", "phone", "email"].forEach((k2) => {
          const msg = validate(k2, form[k2]);
          if (msg) errs[k2] = msg;
        });
        if (!form.college) errs.college = "Required";
        if (!form.branch) errs.branch = "Required";
        if (!form.year) errs.year = "Required";
      } else if (role === "instructor") {
        ["fullName", "phone", "email"].forEach((k2) => {
          const msg = validate(k2, form[k2]);
          if (msg) errs[k2] = msg;
        });
        if (!form.topics.length) errs.topics = "Add at least one topic";
      } else {
        if (!form.orgType) errs.orgType = "Required";
        const orgMsg = validate("orgName", form.orgName);
        if (orgMsg) errs.orgName = orgMsg;
        if (!form.students) errs.students = "Required";
        ["phone", "email"].forEach((k2) => {
          const msg = validate(k2, form[k2]);
          if (msg) errs[k2] = msg;
        });
      }
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
      setLoading(true);
      setErrors((prev) => ({ ...prev, _form: "" }));
      try {
        if (role === "learner") {
          await submitLearner(apiConfig, form);
        } else if (role === "instructor") {
          await submitInstructor(apiConfig, form);
        } else {
          await submitPartner(apiConfig, form);
        }
        setSubmitted(true);
      } catch (err) {
        setErrors({ _form: err.message || "Something went wrong. Please try again." });
      } finally {
        setLoading(false);
      }
    },
    [role, form, apiConfig]
  );
  const handleRetry = useCallback(() => {
    const syntheticEvent = { preventDefault: () => {
    } };
    handleSubmit(syntheticEvent);
  }, [handleSubmit]);
  const renderLearnerFields = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Full Name" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter full name", value: form.fullName, onChange: (e) => set("fullName", e.target.value) }),
      errors.fullName && /* @__PURE__ */ jsx(ErrorText, { children: errors.fullName })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Phone Number" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter phone number", value: form.phone, onChange: (e) => set("phone", e.target.value) }),
      errors.phone && /* @__PURE__ */ jsx(ErrorText, { children: errors.phone })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Email" }),
      /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "Enter email address", value: form.email, onChange: (e) => set("email", e.target.value) }),
      errors.email && /* @__PURE__ */ jsx(ErrorText, { children: errors.email })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "College Name" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter college name", value: form.college, onChange: (e) => set("college", e.target.value) }),
      errors.college && /* @__PURE__ */ jsx(ErrorText, { children: errors.college })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Branch" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter branch", value: form.branch, onChange: (e) => set("branch", e.target.value) }),
      errors.branch && /* @__PURE__ */ jsx(ErrorText, { children: errors.branch })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Year of Passing" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter year of passing", value: form.year, onChange: (e) => set("year", e.target.value) }),
      errors.year && /* @__PURE__ */ jsx(ErrorText, { children: errors.year })
    ] })
  ] });
  const courseOptions = useContent("courses") || [];
  const renderInstructorFields = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Full Name" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter full name", value: form.fullName, onChange: (e) => set("fullName", e.target.value) }),
      errors.fullName && /* @__PURE__ */ jsx(ErrorText, { children: errors.fullName })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Phone Number" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter phone number", value: form.phone, onChange: (e) => set("phone", e.target.value) }),
      errors.phone && /* @__PURE__ */ jsx(ErrorText, { children: errors.phone })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Email" }),
      /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "Enter email address", value: form.email, onChange: (e) => set("email", e.target.value) }),
      errors.email && /* @__PURE__ */ jsx(ErrorText, { children: errors.email })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { $full: true, children: [
      /* @__PURE__ */ jsx(Label, { children: "Topics you can teach" }),
      form.topics.length > 0 && /* @__PURE__ */ jsx(TagsArea, { children: form.topics.map((t) => /* @__PURE__ */ jsxs(Tag, { children: [
        t,
        /* @__PURE__ */ jsx(TagRemove, { onClick: () => removeTopic(t), "aria-label": `Remove ${t}`, children: /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M9 3L3 9M3 3l6 6", stroke: "#EEE7F9", strokeWidth: "1.5", strokeLinecap: "round" }) }) })
      ] }, t)) }),
      /* @__PURE__ */ jsxs(
        Select,
        {
          value: "",
          onChange: (e) => {
            const val = e.target.value;
            if (!val) return;
            if (val === "__other__") {
              setForm((f2) => ({ ...f2, otherTopic: "" }));
            } else {
              addTopic(val);
            }
            e.target.value = "";
          },
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select a topic" }),
            courseOptions.filter((c2) => !form.topics.includes(c2)).map((c2) => /* @__PURE__ */ jsx("option", { value: c2, children: c2 }, c2)),
            /* @__PURE__ */ jsx("option", { value: "__other__", children: "Other" })
          ]
        }
      ),
      typeof form.otherTopic === "string" && /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 10, marginTop: 4 }, children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Enter your topic",
            value: form.otherTopic,
            onChange: (e) => set("otherTopic", e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addOtherTopic();
              }
            },
            style: { flex: 1 }
          }
        ),
        /* @__PURE__ */ jsx(
          SubmitBtn,
          {
            type: "button",
            onClick: addOtherTopic,
            style: { marginTop: 0, width: "auto", padding: "0 24px", height: 43, fontSize: 14 },
            children: "Add"
          }
        )
      ] }),
      errors.topics && /* @__PURE__ */ jsx(ErrorText, { children: errors.topics })
    ] })
  ] });
  const renderPartnerFields = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Organisation Type" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter organisation type", value: form.orgType, onChange: (e) => set("orgType", e.target.value) }),
      errors.orgType && /* @__PURE__ */ jsx(ErrorText, { children: errors.orgType })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Organisation Name" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter organisation name", value: form.orgName, onChange: (e) => set("orgName", e.target.value) }),
      errors.orgName && /* @__PURE__ */ jsx(ErrorText, { children: errors.orgName })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Number of Students" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter number of students", value: form.students, onChange: (e) => set("students", e.target.value) }),
      errors.students && /* @__PURE__ */ jsx(ErrorText, { children: errors.students })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Phone Number" }),
      /* @__PURE__ */ jsx(Input, { placeholder: "Enter phone number", value: form.phone, onChange: (e) => set("phone", e.target.value) }),
      errors.phone && /* @__PURE__ */ jsx(ErrorText, { children: errors.phone })
    ] }),
    /* @__PURE__ */ jsxs(FieldWrap, { children: [
      /* @__PURE__ */ jsx(Label, { children: "Email" }),
      /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "Enter email address", value: form.email, onChange: (e) => set("email", e.target.value) }),
      errors.email && /* @__PURE__ */ jsx(ErrorText, { children: errors.email })
    ] })
  ] });
  return /* @__PURE__ */ jsxs(Section, { id, ref: (el) => {
    viewRef.current = el;
    sectionRef.current = el;
  }, "aria-label": "Contact Us", children: [
    /* @__PURE__ */ jsx("svg", { width: "0", height: "0", style: { position: "absolute" }, children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "shield-clip", clipPathUnits: "objectBoundingBox", children: /* @__PURE__ */ jsx("path", { d: "M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z" }) }) }) }),
    /* @__PURE__ */ jsx(Glow1, {}),
    /* @__PURE__ */ jsx(Glow2, {}),
    /* @__PURE__ */ jsx(Glow3, {}),
    /* @__PURE__ */ jsxs(Inner$1, { children: [
      /* @__PURE__ */ jsx(SectionTitle, { $show: inView, $d: "0s", children: "We are here to help you" }),
      /* @__PURE__ */ jsx(SectionSub, { $show: inView, $d: "0.1s", children: "Whether you’re a student with a question, an educator with a suggestion, or a partner looking to collaborate — we’re always eager to hear from you." }),
      /* @__PURE__ */ jsx(CardsRow, { $show: inView, $d: "0.2s", children: ROLES.map((r2) => {
        const Icon = ROLE_ICONS[r2.key];
        return /* @__PURE__ */ jsx(
          CardWrapper,
          {
            $active: role === r2.key,
            onClick: () => handleRole(r2.key),
            children: /* @__PURE__ */ jsxs(
              RoleCard,
              {
                $active: role === r2.key,
                type: "button",
                "aria-pressed": role === r2.key,
                children: [
                  /* @__PURE__ */ jsx(CardIcon, { children: /* @__PURE__ */ jsx(Icon, {}) }),
                  /* @__PURE__ */ jsx(CardTitle, { children: r2.title }),
                  /* @__PURE__ */ jsx(CardDesc, { children: r2.desc })
                ]
              }
            )
          },
          r2.key
        );
      }) }),
      /* @__PURE__ */ jsx(MobileDesc, { $show: inView, $d: "0.25s", children: ROLES.find((r2) => r2.key === role)?.desc }, role),
      /* @__PURE__ */ jsxs(ConnectorArea, { children: [
        /* @__PURE__ */ jsx(DashedLine, { $pos: "left" }),
        /* @__PURE__ */ jsx(DashedLine, { $pos: "center" }),
        /* @__PURE__ */ jsx(DashedLine, { $pos: "right" })
      ] }),
      /* @__PURE__ */ jsx(FormCard, { $show: inView, $d: "0.35s", children: submitted ? /* @__PURE__ */ jsxs(SuccessMsg, { children: [
        /* @__PURE__ */ jsx(SuccessIcon, { children: /* @__PURE__ */ jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z", fill: "#B095E3" }) }) }),
        /* @__PURE__ */ jsx(SuccessTitle, { children: "Thank you!" }),
        /* @__PURE__ */ jsx(SuccessText, { children: "We’ve received your details and will contact you soon." }),
        /* @__PURE__ */ jsx(SubmitBtn, { type: "button", onClick: () => {
          setSubmitted(false);
          setForm(initialState(role));
        }, children: "Submit another" })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, children: [
        /* @__PURE__ */ jsx(FormTitle, { children: "Drop your Details" }),
        /* @__PURE__ */ jsx(FormSub, { children: "We will contact you real soon!" }),
        /* @__PURE__ */ jsxs(FieldsGrid, { children: [
          role === "learner" && renderLearnerFields(),
          role === "instructor" && renderInstructorFields(),
          role === "partner" && renderPartnerFields()
        ] }),
        role === "learner" && /* @__PURE__ */ jsxs(CheckRow, { children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              $checked: form.newsletter,
              onClick: () => set("newsletter", !form.newsletter),
              role: "checkbox",
              "aria-checked": form.newsletter,
              tabIndex: 0,
              onKeyDown: (e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  set("newsletter", !form.newsletter);
                }
              },
              children: /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M2 6l3 3 5-5", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
            }
          ),
          /* @__PURE__ */ jsx(CheckLabel, { children: "Stay in the Loop! Subscribe to our newsletter and be the first to know about exciting features and exclusive collaborations." })
        ] }),
        errors._form && /* @__PURE__ */ jsxs(FormErrorBanner, { children: [
          /* @__PURE__ */ jsx(ErrorBannerText, { children: errors._form }),
          /* @__PURE__ */ jsx(RetryBtn, { type: "button", onClick: handleRetry, disabled: loading, children: loading ? "Retrying…" : "Retry" })
        ] }),
        /* @__PURE__ */ jsx(SubmitBtn, { type: "submit", disabled: loading, children: loading ? "Submitting…" : "Submit" })
      ] }) })
    ] })
  ] });
}
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
const YoutubeIcon = ({ width = 30, height = 30, color = "currentColor" }) => /* @__PURE__ */ jsx("svg", { width, height, viewBox: "0 0 24 24", fill: color, children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) });
const InstagramIcon = ({ width = 30, height = 30, color = "currentColor" }) => /* @__PURE__ */ jsx("svg", { width, height, viewBox: "0 0 24 24", fill: color, children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }) });
const DiscordIcon = ({ width = 30, height = 30, color = "currentColor" }) => /* @__PURE__ */ jsx("svg", { width, height, viewBox: "0 0 24 24", fill: color, children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" }) });
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
const fadeUp$2 = ht`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;
function useInView$2(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}
const iconComponents = {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  DiscordIcon
};
const FooterSection = lt.footer`
  scroll-margin-top: 100px;
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
  opacity: 0;

  ${(p2) => p2.$inView && at`
      animation: ${fadeUp$2} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

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
  opacity: 0;

  ${(p2) => p2.$inView && at`
      animation: ${fadeUp$2} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

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
const ContactLinksRow = lt.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

  ${MEDIA_QUERIES.mobile} {
    gap: 16px;
  }
`;
const ContactRoleLink = lt.a`
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 500;
  color: #B095E3;
  text-decoration: none;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: #D3C4EF;
    text-decoration: underline;
  }
`;
const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
const Footer = ({ id }) => {
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
  const [viewRef, inView] = useInView$2(0.1);
  return /* @__PURE__ */ jsx(FooterSection, { id, ref: viewRef, children: /* @__PURE__ */ jsxs(Inner, { children: [
    /* @__PURE__ */ jsxs(Box, { $inView: inView, children: [
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
        ] }),
        /* @__PURE__ */ jsxs(ContactLinksRow, { children: [
          /* @__PURE__ */ jsx(ContactRoleLink, { href: "#contact-learner", children: "Learner Form →" }),
          /* @__PURE__ */ jsx(ContactRoleLink, { href: "#contact-instructor", children: "Instructor Form →" }),
          /* @__PURE__ */ jsx(ContactRoleLink, { href: "#contact-partner", children: "Partner Form →" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(RightColumn$1, { children: [
        /* @__PURE__ */ jsx(Logo, { src: MarggLogo, alt: logoAlt }),
        /* @__PURE__ */ jsx(Tagline, { children: tagline })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CopyrightBox, { $inView: inView, children: [
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
const fadeUp$1 = ht`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;
function useInView$1(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}
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
  opacity: 0;

  ${(p2) => p2.$inView && at`
      animation: ${fadeUp$1} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
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
    width: 100%;
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
    margin-bottom: 8px;
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
const JoinWaitList = ({ onSubmit, id }) => {
  const { title, subtitle, inputPlaceholder, buttonText } = useContent("joinWaitlist");
  const apiConfig = useContent("api");
  const [viewRef, inView] = useInView$1(0.15);
  const handleSubmit = onSubmit || ((email) => submitWaitlist(apiConfig, email));
  return /* @__PURE__ */ jsxs(WaitlistContainer, { id, ref: viewRef, $inView: inView, children: [
    /* @__PURE__ */ jsxs(LeftColumn, { children: [
      /* @__PURE__ */ jsx(Title$3, { children: title }),
      /* @__PURE__ */ jsx(Subtitle, { children: subtitle }),
      /* @__PURE__ */ jsx(
        Input1,
        {
          placeholder: inputPlaceholder,
          buttonText,
          onSubmit: handleSubmit
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

  @media (max-width: 1000px) {
    padding: 20px 16px;
    justify-content: flex-start;
  }
`;
lt.img`
  position: absolute;
  left: 30%;
  bottom: 0%;
  width: 50%;

  @media (max-width: 1000px) {
    position: relative;
    left: auto;
    bottom: auto;
    width: 60px;
    margin-top: auto;
    margin-bottom: 16px;
  }
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

  @media (max-width: 1000px) {
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
    margin-top: auto;
  }
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

  @media (max-width: 1000px) {
    padding: 20px 16px;
    align-items: flex-start;
  }
`;
const Image = lt.img`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -40%;
  z-index: 1;

  @media (max-width: 1000px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: 90%;
    margin: auto auto 0;
  }
`;
const InterviewPrepBlock = () => {
  const { interviewPrep } = useContent("blocks");
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Title$2, { children: interviewPrep.title }),
    /* @__PURE__ */ jsx(Image, { src: InterviewPrep, alt: "screen left" })
  ] });
};
const GridContainer = lt.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 32px;
  width: 100%;
  max-width: 800px;
  height: 512px;
  opacity: 1;
  padding: 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    gap: 16px;

    & > * {
      grid-column: span 1 !important;
      grid-row: auto !important;
      min-height: 200px;
    }
  }

  @media (max-width: 480px) {
    gap: 12px;

    & > * {
      min-height: 180px;
    }
  }
`;
const GridBlock = lt(Block)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  overflow: hidden;
  transition:
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s ease;
  will-change: transform;
  cursor: pointer;

  /* Desktop: hover to zoom */
  @media (min-width: 1001px) {
    &:hover {
      transform: scale(1.04);
      box-shadow: 0 8px 32px rgba(176, 149, 227, 0.15);
      z-index: 2;
    }
  }

  /* Mobile: tap to zoom via data attribute */
  &[data-tapped="true"] {
    transform: scale(1.04);
    box-shadow: 0 8px 32px rgba(176, 149, 227, 0.15);
    z-index: 2;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover,
    &[data-tapped="true"] {
      transform: none;
      box-shadow: none;
    }
  }
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
  const [tappedId, setTappedId] = useState(null);
  const handleTap = useCallback((id) => {
    if (typeof window !== "undefined" && window.innerWidth > 1e3) return;
    setTappedId((prev) => prev === id ? null : id);
  }, []);
  return /* @__PURE__ */ jsxs(GridContainer, { children: [
    /* @__PURE__ */ jsx(
      RoadmapWrapper,
      {
        "data-tapped": tappedId === "roadmap",
        onClick: () => handleTap("roadmap"),
        children: /* @__PURE__ */ jsx(RoadmapBlock, {})
      }
    ),
    /* @__PURE__ */ jsx(
      MentorshipWrapper,
      {
        "data-tapped": tappedId === "mentorship",
        onClick: () => handleTap("mentorship"),
        children: /* @__PURE__ */ jsx(MentorshipBlock, {})
      }
    ),
    /* @__PURE__ */ jsx(
      CommunityWrapper,
      {
        "data-tapped": tappedId === "community",
        onClick: () => handleTap("community"),
        children: /* @__PURE__ */ jsx(CommunityBlock, {})
      }
    ),
    /* @__PURE__ */ jsx(
      FocusTimerWrapper,
      {
        "data-tapped": tappedId === "focusTimer",
        onClick: () => handleTap("focusTimer"),
        children: /* @__PURE__ */ jsx(FocusTimerBlock, {})
      }
    ),
    /* @__PURE__ */ jsx(
      InterviewPrepWrapper,
      {
        "data-tapped": tappedId === "interviewPrep",
        onClick: () => handleTap("interviewPrep"),
        children: /* @__PURE__ */ jsx(InterviewPrepBlock, {})
      }
    ),
    /* @__PURE__ */ jsx(
      StreaksWrapper,
      {
        "data-tapped": tappedId === "streaks",
        onClick: () => handleTap("streaks"),
        children: /* @__PURE__ */ jsx(StreaksBlock, {})
      }
    )
  ] });
};
const fadeUp = ht`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}
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
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`;
const PhoneWrapper = lt.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${(p2) => p2.$inView && at`
      animation: ${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;
const PhoneImage = lt.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`;
const GridWrapper = lt.div`
  min-width: 0;
  opacity: 0;

  ${(p2) => p2.$inView && at`
      animation: ${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`;
const GridSection = () => {
  const [viewRef, inView] = useInView(0.1);
  return /* @__PURE__ */ jsxs(SectionContainer, { ref: viewRef, children: [
    /* @__PURE__ */ jsx(PhoneWrapper, { $inView: inView, children: /* @__PURE__ */ jsx(PhoneImage, { src: Phone, alt: "Phone Screen" }) }),
    /* @__PURE__ */ jsx(GridWrapper, { $inView: inView, children: /* @__PURE__ */ jsx(Grid, {}) })
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
      /* @__PURE__ */ jsx(Hero, { id: "home" }),
      /* @__PURE__ */ jsx(Analytics, {}),
      /* @__PURE__ */ jsx(Supercharge, { id: "products" }),
      /* @__PURE__ */ jsx(GridSection, {}),
      /* @__PURE__ */ jsx(Contact, { id: "contact-us" }),
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
