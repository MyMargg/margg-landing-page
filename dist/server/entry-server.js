import{jsxs as d,Fragment as Le,jsx as r}from"react/jsx-runtime";import R,{createElement as Hn,useState as B,useRef as W,useEffect as O,useCallback as H,useMemo as Ee}from"react";import{renderToString as qn}from"react-dom/server";import{useNavigate as xn,useLocation as Gn,useParams as Xn,Link as yn,Routes as Jn,Route as Ot,StaticRouter as Qn}from"react-router-dom";import{useSelector as Kn,Provider as Zn}from"react-redux";import{createSlice as bn,configureStore as er}from"@reduxjs/toolkit";import{__spreadArray as re,__assign as q}from"tslib";import tr from"@emotion/is-prop-valid";import*as de from"stylis";import nr from"@emotion/unitless";var oe=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",wn="active",Fe="data-styled-version",xe="6.3.11",Et=`/*!sc*/
`,De=typeof window<"u"&&typeof document<"u",ne=R.createContext===void 0,rr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),or=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function ir(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],i=1,s=e.length;i<s;i+=1)o.push(e[i]);return o.forEach(function(l){n=n.replace(/%[a-z]/,l)}),n}function K(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(ir.apply(void 0,re([or[e]],t,!1)).trim())}var ar=1<<30,We=new Map,Ye=new Map,_e=1,fe=function(e){if(We.has(e))return We.get(e);for(;Ye.has(_e);)_e++;var t=_e++;if(process.env.NODE_ENV!=="production"&&((0|t)<0||t>ar))throw K(16,"".concat(t));return We.set(e,t),Ye.set(t,e),t},sr=function(e,t){_e=t+1,We.set(e,t),Ye.set(t,e)},Wt=/invalid hook call/i,ze=new Set,lr=function(e,t){if(process.env.NODE_ENV!=="production"){if(ne)return;var n=t?' with the id of "'.concat(t,'"'):"",o="The component ".concat(e).concat(n,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`,i=console.error;try{var s=!0;console.error=function(l){for(var u=[],p=1;p<arguments.length;p++)u[p-1]=arguments[p];Wt.test(l)?(s=!1,ze.delete(o)):i.apply(void 0,re([l],u,!1))},typeof R.useState=="function"&&R.useState(null),s&&!ze.has(o)&&(console.warn(o),ze.add(o))}catch(l){Wt.test(l.message)&&ze.delete(o)}finally{console.error=i}}},Tt=Object.freeze([]),ye=Object.freeze({});function cr(e,t,n){return n===void 0&&(n=ye),e.theme!==n.theme&&e.theme||t||n.theme}var gt=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),dr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pr=/(^-|-$)/g;function _t(e){return e.replace(dr,"-").replace(pr,"")}var ur=/(a)(d)/gi,Ft=function(e){return String.fromCharCode(e+(e>25?39:97))};function mt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ft(t%52)+n;return(Ft(t%52)+n).replace(ur,"$1-$2")}var tt,ae=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vn=function(e){return ae(5381,e)};function kn(e){return mt(vn(e)>>>0)}function Sn(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function nt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Cn=typeof Symbol=="function"&&Symbol.for,$n=Cn?Symbol.for("react.memo"):60115,hr=Cn?Symbol.for("react.forward_ref"):60112,gr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fr=((tt={})[hr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tt[$n]=In,tt);function Yt(e){return("type"in(t=e)&&t.type.$$typeof)===$n?In:"$$typeof"in e?fr[e.$$typeof]:gr;var t}var xr=Object.defineProperty,yr=Object.getOwnPropertyNames,Ut=Object.getOwnPropertySymbols,br=Object.getOwnPropertyDescriptor,wr=Object.getPrototypeOf,Vt=Object.prototype;function En(e,t,n){if(typeof t!="string"){if(Vt){var o=wr(t);o&&o!==Vt&&En(e,o,n)}var i=yr(t);Ut&&(i=i.concat(Ut(t)));for(var s=Yt(e),l=Yt(t),u=0;u<i.length;++u){var p=i[u];if(!(p in mr||n&&n[p]||l&&p in l||s&&p in s)){var g=br(t,p);try{xr(e,p,g)}catch{}}}}return e}function be(e){return typeof e=="function"}function Lt(e){return typeof e=="object"&&"styledComponentId"in e}function ue(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ue(e,t){return e.join(t||"")}function we(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ft(e,t,n){if(n===void 0&&(n=!1),!n&&!we(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=ft(e[o],t[o]);else if(we(t))for(var o in t)e[o]=ft(e[o],t[o]);return e}function Dt(e,t){Object.defineProperty(e,"toString",{value:t})}var vr=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var o=this._cGroup;o<t;o++)n+=this.groupSizes[o];else for(o=this._cGroup-1;o>=t;o--)n-=this.groupSizes[o];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,s=i;t>=s;)if((s<<=1)<0)throw K(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(var l=i;l<s;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),p=0,g=(l=0,n.length);l<g;l++)this.tag.insertRule(u,n[l])&&(this.groupSizes[t]++,u++,p++);p>0&&this._cGroup>t&&(this._cIndex+=p)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n;this.groupSizes[t]=0;for(var s=o;s<i;s++)this.tag.deleteRule(o);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],i=this.indexOfGroup(t),s=i+o,l=i;l<s;l++)n+=this.tag.getRule(l)+Et;return n},e})(),kr="style[".concat(oe,"][").concat(Fe,'="').concat(xe,'"]'),Sr=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ht=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},xt=function(e){if(!e)return document;if(Ht(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Ht(t))return t}return document},Cr=function(e,t,n){for(var o,i=n.split(","),s=0,l=i.length;s<l;s++)(o=i[s])&&e.registerName(t,o)},$r=function(e,t){for(var n,o=((n=t.textContent)!==null&&n!==void 0?n:"").split(Et),i=[],s=0,l=o.length;s<l;s++){var u=o[s].trim();if(u){var p=u.match(Sr);if(p){var g=0|parseInt(p[1],10),m=p[2];g!==0&&(sr(m,g),Cr(e,m,p[3]),e.getTag().insertRules(g,i)),i.length=0}else i.push(u)}}},rt=function(e){for(var t=xt(e.options.target).querySelectorAll(kr),n=0,o=t.length;n<o;n++){var i=t[n];i&&i.getAttribute(oe)!==wn&&($r(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function yt(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tn=function(e){var t=document.head,n=e||t,o=document.createElement("style"),i=(function(u){var p=Array.from(u.querySelectorAll("style[".concat(oe,"]")));return p[p.length-1]})(n),s=i!==void 0?i.nextSibling:null;o.setAttribute(oe,wn),o.setAttribute(Fe,xe);var l=yt();return l&&o.setAttribute("nonce",l),n.insertBefore(o,s),o},Ir=(function(){function e(t){this.element=Tn(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){var o;if(n.sheet)return n.sheet;for(var i=(o=n.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets,s=0,l=i.length;s<l;s++){var u=i[s];if(u.ownerNode===n)return u}throw K(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),Er=(function(){function e(t){this.element=Tn(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),Tr=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),qt=De,Lr={isServer:!De,useCSSOMInjection:!rr},Pt=(function(){function e(t,n,o){t===void 0&&(t=ye),n===void 0&&(n={});var i=this;this.options=q(q({},Lr),t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&De&&qt&&(qt=!1,rt(this)),Dt(this,function(){return(function(s){for(var l=s.getTag(),u=l.length,p="",g=function(v){var T=(function(C){return Ye.get(C)})(v);if(T===void 0)return"continue";var D=s.names.get(T);if(D===void 0||!D.size)return"continue";var I=l.getGroup(v);if(I.length===0)return"continue";var w=oe+".g"+v+'[id="'+T+'"]',x="";D.forEach(function(C){C.length>0&&(x+=C+",")}),p+=I+w+'{content:"'+x+'"}'+Et},m=0;m<u;m++)g(m);return p})(i)})}return e.registerId=function(t){return fe(t)},e.prototype.rehydrate=function(){!this.server&&De&&rt(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var o=new e(q(q({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&De&&t.target!==this.options.target&&xt(this.options.target)!==xt(t.target)&&rt(o),o},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var o=n.useCSSOMInjection,i=n.target;return n.isServer?new Tr(i):o?new Ir(i):new Er(i)})(this.options),new vr(t)));var t},e.prototype.hasNameForId=function(t,n){var o,i;return(i=(o=this.names.get(t))===null||o===void 0?void 0:o.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){fe(t);var o=this.names.get(t);o?o.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(fe(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(fe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),Dr=/&/g,te=47,pe=42;function Gt(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,o=0,i=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(o!==0||i||l!==te||e.charCodeAt(s+1)!==pe)if(i)l===pe&&e.charCodeAt(s+1)===te&&(i=!1,s++);else if(l!==34&&l!==39||s!==0&&e.charCodeAt(s-1)===92){if(o===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else o===0?o=l:o===l&&(o=0);else i=!0,s++}return n!==0||o!==0}function Ln(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ln(n.children,t)),n})}function Dn(e){var t,n,o,i=e===void 0?ye:e,s=i.options,l=s===void 0?ye:s,u=i.plugins,p=u===void 0?Tt:u,g=function(I,w,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):I},m=p.slice();m.push(function(I){I.type===de.RULESET&&I.value.includes("&")&&(o||(o=new RegExp("\\".concat(n,"\\b"),"g")),I.props[0]=I.props[0].replace(Dr,n).replace(o,g))}),l.prefix&&m.push(de.prefixer),m.push(de.stringify);var v=[],T=de.middleware(m.concat(de.rulesheet(function(I){return v.push(I)}))),D=function(I,w,x,C){w===void 0&&(w=""),x===void 0&&(x=""),C===void 0&&(C="&"),t=C,n=w,o=void 0;var M=(function(b){if(!Gt(b))return b;for(var y=b.length,k="",$=0,f=0,N=0,c=!1,h=0;h<y;h++){var E=b.charCodeAt(h);if(N!==0||c||E!==te||b.charCodeAt(h+1)!==pe)if(c)E===pe&&b.charCodeAt(h+1)===te&&(c=!1,h++);else if(E!==34&&E!==39||h!==0&&b.charCodeAt(h-1)===92){if(N===0)if(E===123)f++;else if(E===125){if(--f<0){for(var z=h+1;z<y;){var Q=b.charCodeAt(z);if(Q===59||Q===10)break;z++}z<y&&b.charCodeAt(z)===59&&z++,f=0,h=z-1,$=z;continue}f===0&&(k+=b.substring($,h+1),$=h+1)}else E===59&&f===0&&(k+=b.substring($,h+1),$=h+1)}else N===0?N=E:N===E&&(N=0);else c=!0,h++}if($<y){var ge=b.substring($);Gt(ge)||(k+=ge)}return k})((function(b){if(b.indexOf("//")===-1)return b;for(var y=b.length,k=[],$=0,f=0,N=0,c=0;f<y;){var h=b.charCodeAt(f);if(h!==34&&h!==39||f!==0&&b.charCodeAt(f-1)===92)if(N===0)if(h===te&&f+1<y&&b.charCodeAt(f+1)===pe){for(f+=2;f+1<y&&(b.charCodeAt(f)!==pe||b.charCodeAt(f+1)!==te);)f++;f+=2}else if(h===40&&f>=3&&(32|b.charCodeAt(f-1))==108&&(32|b.charCodeAt(f-2))==114&&(32|b.charCodeAt(f-3))==117)c=1,f++;else if(c>0)h===41?c--:h===40&&c++,f++;else if(h===pe&&f+1<y&&b.charCodeAt(f+1)===te)f>$&&k.push(b.substring($,f)),$=f+=2;else if(h===te&&f+1<y&&b.charCodeAt(f+1)===te){for(f>$&&k.push(b.substring($,f));f<y&&b.charCodeAt(f)!==10;)f++;$=f}else f++;else f++;else N===0?N=h:N===h&&(N=0),f++}return $===0?b:($<y&&k.push(b.substring($)),k.join(""))})(I)),P=de.compile(x||w?"".concat(x," ").concat(w," { ").concat(M," }"):M);return l.namespace&&(P=Ln(P,l.namespace)),v=[],de.serialize(P,T),v};return D.hash=p.length?p.reduce(function(I,w){return w.name||K(15),ae(I,w.name)},5381).toString():"",D}var Pr=new Pt,bt=Dn(),wt={shouldForwardProp:void 0,styleSheet:Pr,stylis:bt},At=ne?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(wt)}}:R.createContext(wt);At.Consumer;var Ar=ne?{Provider:function(e){return e.children}}:R.createContext(void 0);function vt(){return ne?wt:R.useContext(At)}function Mr(e){if(ne||!R.useMemo)return e.children;var t=vt().styleSheet,n=R.useMemo(function(){var s=t;return e.sheet?s=e.sheet:e.target&&(s=s.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(s=s.reconstructWithOptions({useCSSOMInjection:!1})),s},[e.disableCSSOMInjection,e.sheet,e.target,t]),o=R.useMemo(function(){return Dn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=R.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:o}},[e.shouldForwardProp,n,o]);return R.createElement(At.Provider,{value:i},R.createElement(Ar.Provider,{value:o},e.children))}var kt=(function(){function e(t,n){var o=this;this.inject=function(i,s){s===void 0&&(s=bt);var l=o.name+s.hash;i.hasNameForId(o.id,l)||i.insertRules(o.id,l,s(o.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Dt(this,function(){throw K(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=bt),this.name+t.hash},e})();function zr(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in nr||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Rr=function(e){return e>="A"&&e<="Z"};function Xt(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(n===1&&o==="-"&&e[0]==="-")return e;Rr(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Pn=function(e){return e==null||e===!1||e===""},An=function(e){var t=[];for(var n in e){var o=e[n];e.hasOwnProperty(n)&&!Pn(o)&&(Array.isArray(o)&&o.isCss||be(o)?t.push("".concat(Xt(n),":"),o,";"):we(o)?t.push.apply(t,re(re(["".concat(n," {")],An(o),!1),["}"],!1)):t.push("".concat(Xt(n),": ").concat(zr(n,o),";")))}return t};function he(e,t,n,o,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Pn(e))return i;if(Lt(e))return i.push(".".concat(e.styledComponentId)),i;if(be(e)){if(!be(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return i.push(e),i;var s=e(t);return process.env.NODE_ENV==="production"||typeof s!="object"||Array.isArray(s)||s instanceof kt||we(s)||s===null||console.error("".concat(Sn(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),he(s,t,n,o,i)}var l;if(e instanceof kt)return n?(e.inject(n,o),i.push(e.getName(o))):i.push(e),i;if(we(e)){for(var u=An(e),p=0;p<u.length;p++)i.push(u[p]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(p=0;p<e.length;p++)he(e[p],t,n,o,i);return i}function jr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(be(n)&&!Lt(n))return!1}return!0}var Nr=vn(xe),Br=(function(){function e(t,n,o){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(o===void 0||o.isStatic)&&jr(t),this.componentId=n,this.baseHash=ae(Nr,n),this.baseStyle=o,Pt.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,o){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ue(i,this.staticRulesId);else{var s=Ue(he(this.rules,t,n,o)),l=mt(ae(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,l)){var u=o(s,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,u)}i=ue(i,l),this.staticRulesId=l}else{for(var p=ae(this.baseHash,o.hash),g="",m=0;m<this.rules.length;m++){var v=this.rules[m];if(typeof v=="string")g+=v,process.env.NODE_ENV!=="production"&&(p=ae(p,v));else if(v){var T=Ue(he(v,t,n,o));p=ae(ae(p,String(m)),T),g+=T}}if(g){var D=mt(p>>>0);if(!n.hasNameForId(this.componentId,D)){var I=o(g,".".concat(D),void 0,this.componentId);n.insertRules(this.componentId,D,I)}i=ue(i,D)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(fe(this.componentId)):""}},e})(),Mn=ne?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:R.createContext(void 0);Mn.Consumer;var ot={},Jt=new Set;function Or(e,t,n){var o=Lt(e),i=e,s=!nt(e),l=t.attrs,u=l===void 0?Tt:l,p=t.componentId,g=p===void 0?(function(b,y){var k=typeof b!="string"?"sc":_t(b);ot[k]=(ot[k]||0)+1;var $="".concat(k,"-").concat(kn(xe+k+ot[k]));return y?"".concat(y,"-").concat($):$})(t.displayName,t.parentComponentId):p,m=t.displayName,v=m===void 0?(function(b){return nt(b)?"styled.".concat(b):"Styled(".concat(Sn(b),")")})(e):m,T=t.displayName&&t.componentId?"".concat(_t(t.displayName),"-").concat(t.componentId):t.componentId||g,D=o&&i.attrs?i.attrs.concat(u).filter(Boolean):u,I=t.shouldForwardProp;if(o&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;I=function(b,y){return w(b,y)&&x(b,y)}}else I=w}var C=new Br(n,T,o?i.componentStyle:void 0);function M(b,y){return(function(k,$,f){var N=k.attrs,c=k.componentStyle,h=k.defaultProps,E=k.foldedComponentIds,z=k.styledComponentId,Q=k.target,ge=ne?void 0:R.useContext(Mn),Ce=vt(),Qe=k.shouldForwardProp||Ce.shouldForwardProp;process.env.NODE_ENV!=="production"&&R.useDebugValue&&R.useDebugValue(z);var Nt=cr($,ge,h)||(ne?void 0:ye),Z=(function(le,X,ce){for(var ie,ee=q(q({},X),{className:void 0,theme:ce}),et=0;et<le.length;et+=1){var Me=be(ie=le[et])?ie(ee):ie;for(var me in Me)me==="className"?ee.className=ue(ee.className,Me[me]):me==="style"?ee.style=q(q({},ee.style),Me[me]):ee[me]=Me[me]}return"className"in X&&typeof X.className=="string"&&(ee.className=ue(ee.className,X.className)),ee})(N,$,Nt),$e=Z.as||Q,Ie={};for(var G in Z)Z[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&Z.theme===Nt||(G==="forwardedAs"?Ie.as=Z.forwardedAs:Qe&&!Qe(G,$e)||(Ie[G]=Z[G],Qe||process.env.NODE_ENV!=="development"||tr(G)||Jt.has(G)||!gt.has($e)||(Jt.add(G),console.warn('styled-components: it looks like an unknown prop "'.concat(G,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var Un=(function(le,X){var ce=vt(),ie=le.generateAndInjectStyles(X,ce.styleSheet,ce.stylis);return process.env.NODE_ENV!=="production"&&R.useDebugValue&&R.useDebugValue(ie.className),ie})(c,Z),Ke=Un.className;process.env.NODE_ENV!=="production"&&k.warnTooManyClasses&&k.warnTooManyClasses(Ke);var Ze=ue(E,z);Ke&&(Ze+=" "+Ke),Z.className&&(Ze+=" "+Z.className),Ie[nt($e)&&!gt.has($e)?"class":"className"]=Ze,f&&(Ie.ref=f);var Bt=Hn($e,Ie);if(ne){for(var Ae=[],se=c,Vn=function(){var le=Ce.styleSheet.getTag().getGroup(fe(se.componentId));if(le){var X="",ce=Ce.styleSheet.names.get(se.componentId);ce&&ce.forEach(function(ie){X&&(X+="_"),X+=ie}),Ae.push(R.createElement("style",{key:"sc-".concat(se.componentId),precedence:"styled-components",href:"sc-".concat(se.componentId,"-").concat(X),children:le}))}se=se.baseStyle};se;)Vn();if(Ae.length)return Ae.reverse(),R.createElement.apply(R,re(re([R.Fragment,null],Ae,!1),[Bt],!1))}return Bt})(P,b,y)}M.displayName=v;var P=R.forwardRef(M);return P.attrs=D,P.componentStyle=C,P.displayName=v,P.shouldForwardProp=I,P.foldedComponentIds=o?ue(i.foldedComponentIds,i.styledComponentId):"",P.styledComponentId=T,P.target=o?i.target:e,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=o?(function(y){for(var k=[],$=1;$<arguments.length;$++)k[$-1]=arguments[$];for(var f=0,N=k;f<N.length;f++)ft(y,N[f],!0);return y})({},i.defaultProps,b):b}}),process.env.NODE_ENV!=="production"&&(lr(v,T),P.warnTooManyClasses=(function(b,y){var k={},$=!1;return function(f){if(!$&&(k[f]=!0,Object.keys(k).length>=200)){var N=y?' with the id of "'.concat(y,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(b).concat(N,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),$=!0,k={}}}})(v,T)),Dt(P,function(){return".".concat(P.styledComponentId)}),s&&En(P,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function Qt(e,t){for(var n=[e[0]],o=0,i=t.length;o<i;o+=1)n.push(t[o],e[o+1]);return n}var Kt=function(e){return Object.assign(e,{isCss:!0})};function j(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(be(e)||we(e))return Kt(he(Qt(Tt,re([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?he(o):Kt(he(Qt(o,t)))}function St(e,t,n){if(n===void 0&&(n=ye),!t)throw K(1,t);var o=function(i){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(t,n,j.apply(void 0,re([i],s,!1)))};return o.attrs=function(i){return St(e,t,q(q({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},o.withConfig=function(i){return St(e,t,q(q({},n),i))},o}var zn=function(e){return St(Or,e)},a=zn;gt.forEach(function(e){a[e]=zn(e)});function A(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var o=Ue(j.apply(void 0,re([e],t,!1))),i=kn(o);return new kt(i,o)}var Wr=/^\s*<\/[a-z]/i,_r=(function(){function e(){var t=this;this._emitSheetCSS=function(){var n=t.instance.toString();if(!n)return"";var o=yt(),i=Ue([o&&'nonce="'.concat(o,'"'),"".concat(oe,'="true"'),"".concat(Fe,'="').concat(xe,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(n,"</style>")},this.getStyleTags=function(){if(t.sealed)throw K(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw K(2);var o=t.instance.toString();if(!o)return[];var i=((n={})[oe]="",n[Fe]=xe,n.dangerouslySetInnerHTML={__html:o},n),s=yt();return s&&(i.nonce=s),[R.createElement("style",q({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Pt({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw K(2);return R.createElement(Mr,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){if(this.sealed)throw K(2);this.seal();var n=require("stream").Transform,o=this.instance,i=this._emitSheetCSS,s=new n({transform:function(u,p,g){var m=u.toString(),v=i();if(o.clearTag(),Wr.test(m)){var T=m.indexOf(">")+1,D=m.slice(0,T),I=m.slice(T);this.push(D+v+I)}else this.push(v+m);g()}});if("on"in t&&typeof t.on=="function"&&"pipe"in t){var l=t;return l.on("error",function(u){s.emit("error",u)}),l.pipe(s)}if("pipe"in t&&typeof t.pipe=="function")return t.pipe(s);throw new Error("Unsupported stream type")},e})();process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var Re="__sc-".concat(oe,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window[Re]||(window[Re]=0),window[Re]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`),window[Re]+=1);const Fr={value:0},Rn=bn({name:"app",initialState:Fr,reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},setValue:(e,t)=>{e.value=t.payload}}}),{increment:fc,decrement:xc,setValue:yc}=Rn.actions,Yr=Rn.reducer,Ur={logoAlt:"Margg",links:[{label:"Home",href:"#home",primary:!0},{label:"Our Products",href:"#products"},{label:"Contact Us",href:"#contact-us"}]},Vr={titleLine1:"BRING OUT YOUR",titleLine2:"BEST POTENTIAL",description:"Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry",inputPlaceholder:"Enter Email",inputButtonText:"Join the waitlist",tiles:{autoCycleIntervalMs:3e3,defaultTileId:1,row1:[{id:1,ariaLabel:"Frontend Developer",title:"Frontend Developer",description:"Build modern UI with React, component systems, and responsive layouts.",icon:"ScrollIcon"},{id:2,ariaLabel:"Programming Essentials",title:"Programming Essentials",description:"Learn core concepts, clean code, and problem-solving techniques.",icon:"MessageProgrammingIcon"},{id:3,ariaLabel:"UI Design Fundamentals",title:"UI Design Fundamentals",description:"Design trends, spacing systems, and accessible UI patterns.",icon:"PenToolIcon"}],row2:[{id:4,ariaLabel:"Backend Development",title:"Backend Development",description:"Server-side logic, APIs, and database management.",icon:"DriverIcon"},{id:5,ariaLabel:"Database Design",title:"Database Design",description:"Data modeling, SQL, and database optimization.",icon:"FavoriteChartIcon"},{id:6,ariaLabel:"Cloud & DevOps",title:"Cloud & DevOps",description:"Deploy apps, understand environments, and ship confidently.",icon:"CloudConnectionIcon"},{id:7,ariaLabel:"Testing & QA",title:"Testing & QA",description:"Write quality tests and ensure reliable applications.",icon:"LockIcon"}],row3:[{id:8,ariaLabel:"Security",title:"Security",description:"Learn safe patterns, auth basics, and secure-by-default UI.",icon:"MessageProgrammingIcon"},{id:9,ariaLabel:"Algorithms",title:"Algorithms",description:"Problem-solving patterns and data structures.",icon:"PenToolIcon"},{id:10,ariaLabel:"System Design",title:"System Design",description:"Architecture, scalability, and distributed systems.",icon:"FavoriteChartIcon"},{id:11,ariaLabel:"Performance",title:"Performance",description:"Optimize load times, rendering, and user experience.",icon:"DriverIcon"}]}},Hr={waitList:!0,stats:[{value:"43+",label:`University
Partners`},{value:"12K+",label:`Students
Enrolled`},{value:"35",label:`Outstanding
Mentors`},{value:"7.5K",label:`Student
Placements`}]},qr={titleLine1:"SUPERCHARGE",titleLine2:"YOUR LEARNING POTENTIAL WITH OUR APP",description:"Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away"},Gr={title:"JOIN WAITLIST",subtitle:"First step towards your dream career",inputPlaceholder:"Enter Email",buttonText:"Notify Me"},Xr=["Frontend Development","Backend Development","Programming Essentials","UI Design Fundamentals","Database Design","Cloud & DevOps","Testing & QA","Security","Algorithms","System Design","Performance","React","Node.js","Python","Java","Data Structures","Machine Learning","Mobile Development"],Jr={submissionMode:"sheets",baseUrl:"https://api.margg.xyz/service-core",endpoints:{waitlist:"/general/user-contacts/waitlist",learner:"/general/user-contacts",instructor:"/general/instructor-enquiries",partner:"/general/organisation-enquiries"},googleSheets:{scriptUrl:"https://script.google.com/macros/s/AKfycbwmmOYKHVpfZEcqWhhAlNr6G7726uUj9WT4cua0i8sSMDQrQbWoBK2jj0Pc1FpRNfuB1g/exec"},emailjs:{notifyEmail:"margglive@gmail.com",accounts:{account1:{serviceId:"service_uwxllg6",publicKey:"sS9pUpAdxxLri3bjO"},account2:{serviceId:"service_oq3tfkg",publicKey:"r9cx6ICX3cdQFxZC9"}},templates:{waitlist:{templateId:"template_ob8hs05",account:"account1"},learner:{templateId:"template_n8yn8zn",account:"account1"},instructor:{templateId:"template_a5ox0x9",account:"account2"},partner:{templateId:"template_qxq0lla",account:"account2"}}}},Qr={contactTitle:"GET IN TOUCH WITH US",location:"Bangalore | Tirupati",phone:"+91 9000250097",email:"margglive@gmail.com",tagline:"Curated routes for curious minds",companyName:"Margg Private Limited",logoAlt:"Margg Logo",socialLinks:[{name:"YouTube",icon:"YoutubeIcon",url:"https://www.youtube.com/@MarggLive"},{name:"Instagram",icon:"InstagramIcon",url:"https://instagram.com/margglive"},{name:"X (Twitter)",icon:"TwitterIcon",url:"https://x.com/MarggLive"},{name:"Discord",icon:"DiscordIcon",url:"https://discord.gg/PDzhNUnB"}]},Kr={roadmap:{title:"Roadmap Based Learning"},community:{title:"Community"},focusTimer:{title:"Focus Timer"},interviewPrep:{title:"Interview Prep Materials"},jobBoard:{title:"Job Board"},mentorship:{title:"One-on-One Mentorship"},projects:{title:"Projects"},resume:{title:"Resume Builder"},skills:{title:"Skills Assessment"},streaks:{title:"Streaks"},certifications:{title:"Certifications"}},Zr={title:"Margg – Roadmap Based Courses & Best LMS Platform in South India | Gagan's Application",description:"Margg is the best LMS application in South India offering roadmap based courses, structured learning paths, one-on-one mentorship, interview prep, resume building, certifications & career placement support for college students. Built by Gagan — curated routes for curious minds.",keywords:"roadmap based courses, best LMS application in south india, Gagan's application, Margg, LMS for college students, learning management system India, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development, structured learning paths, best online courses India, South India LMS, Bangalore LMS, Tirupati education platform, curated learning roadmaps, coding bootcamp India, one-on-one mentorship India, resume builder for students, job placement LMS, streaks based learning, certification courses India, Margg Private Limited, MarggLive, best e-learning platform India",author:"Margg Private Limited",robots:"index, follow",locale:"en_IN",url:"https://margg.in",ogImage:"https://margg.in/og-cover.png",twitterHandle:"@MarggLive",themeColor:"#090215",foundingYear:"2023",appCategory:"EducationApplication"},eo={navbar:Ur,hero:Vr,analytics:Hr,supercharge:qr,joinWaitlist:Gr,courses:Xr,api:Jr,footer:Qr,blocks:Kr,seo:Zr},jn=bn({name:"content",initialState:{data:eo,status:"idle",source:"fallback"},reducers:{contentLoading(e){e.status="loading"},contentSucceeded(e,t){e.data=t.payload.data,e.status="succeeded",e.source=t.payload.source},contentFailed(e){e.status="failed",e.source="fallback"}}}),{contentLoading:bc,contentSucceeded:to,contentFailed:wc}=jn.actions,no=jn.reducer,ro=e=>e.content.data,oo="/assets/Margg-CT4M_ONj.webp",ve="1920px",Zt={mobile:"1000px",tablet:"1200px"},L={mobile:`@media (max-width: ${Zt.mobile})`,tablet:`@media (max-width: ${Zt.tablet})`},S={heading:'"Bebas Neue", sans-serif',body:'"Inter", sans-serif'};function _(e){const t=Kn(ro);return e?t[e]??{}:t}A`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;const io=A`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`,ao=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  isolation: isolate;
  display: flex;
  justify-content: center;
  padding-top: 36px;
  transform: translateY(${e=>e.$hidden?"-100%":"0"});
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);

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
`,so=a.nav`
  display: flex;
  width: 85%;
  max-width: ${ve};
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
`,lo=a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,co=a.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;a.div`
  display: flex;
  align-items: flex-start;
`;const po=a.img`
  width: 132.156px;
  height: 40.141px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
  }
`;a.img`
  width: 38.699px;
  height: 27.483px;
  flex-shrink: 0;
`;a.img`
  width: 79.181px;
  height: 5.559px;
  flex-shrink: 0;
`;const uo=a.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`,ho=a.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`,go=a.a`
  color: white;
  font-family: ${S.body};
  font-size: 16px;
  font-weight: ${e=>e.$active||e.$primary?"600":"300"};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${e=>e.$active||e.$primary?"1":"0.5"};
  position: relative;

  ${e=>e.$active&&j`
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;
        height: 2px;
        border-radius: 1px;
        background: #b095e3;
      }
    `}

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`,mo=a.button`
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
`,it=a.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${e=>e.$open?"50%":"0"};
    transform: ${e=>e.$open?"translateY(-50%) rotate(45deg)":"none"};
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${e=>e.$open?0:1};
  }
  &:nth-child(3) {
    bottom: ${e=>e.$open?"auto":"0"};
    top: ${e=>e.$open?"50%":"auto"};
    transform: ${e=>e.$open?"translateY(-50%) rotate(-45deg)":"none"};
  }
`,fo=a.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 49;
    background: rgba(9, 2, 21, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${e=>e.$open?1:0};
    pointer-events: ${e=>e.$open?"auto":"none"};
    transition: opacity 0.3s ease;
  }
`,xo=a.div`
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
    transform: translateX(${e=>e.$open?"0":"100%"});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`,yo=a.button`
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
`,bo=a.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,wo=a.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${S.body};
  font-size: 18px;
  font-weight: ${e=>e.$active||e.$primary?"600":"400"};
  color: #fff;
  opacity: ${e=>e.$active||e.$primary?1:.7};
  transition: all 0.2s ease;
  background: ${e=>e.$active?"rgba(80, 19, 192, 0.2)":e.$primary?"rgba(80, 19, 192, 0.15)":"transparent"};
  ${e=>e.$active&&j`
      border-left: 3px solid #b095e3;
    `};

  ${e=>e.$show&&j`
      animation: ${io} 0.4s ease forwards;
      animation-delay: ${e.$delay||"0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`,vo=a.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`,ko=a.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`,en={Home:r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:r("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Roadmaps:r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:r("path",{d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Our Products":r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:r("path",{d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Contact Us":r("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:r("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},So=["home","products","contact-us"],Ct=()=>{const{logoAlt:e,links:t}=_("navbar"),[n,o]=B(!1),[i,s]=B(!1),[l,u]=B("home"),p=W(null),g=W(0),m=xn(),v=Gn();O(()=>{const x=()=>{const C=window.scrollY;C<80?s(!1):C-g.current>10?s(!0):g.current-C>10&&s(!1),g.current=C};return window.addEventListener("scroll",x,{passive:!0}),()=>window.removeEventListener("scroll",x)},[]),O(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]),O(()=>{const w=x=>{x.key==="Escape"&&o(!1)};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[]),O(()=>{v.hash||window.scrollTo({top:0,behavior:"instant"})},[v.pathname,v.hash]),O(()=>{if(v.pathname!=="/")return;const w=new IntersectionObserver(C=>{const M=C.filter(P=>P.isIntersecting).sort((P,b)=>b.intersectionRatio-P.intersectionRatio);M.length>0&&u(M[0].target.id)},{rootMargin:"-20% 0px -50% 0px",threshold:[0,.25,.5]}),x=setTimeout(()=>{So.forEach(C=>{const M=document.getElementById(C);M&&w.observe(M)})},200);return()=>{clearTimeout(x),w.disconnect()}},[v.pathname]);const T=H(w=>{const x=v.pathname;return w==="/roadmaps"?x==="/roadmaps"||x.startsWith("/roadmap/"):x==="/"&&w.startsWith("#")?l===w.slice(1):!1},[v.pathname,l]),D=H(()=>{v.pathname==="/"?window.scrollTo({top:0,behavior:"smooth"}):(m("/"),setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),100))},[m,v.pathname]),I=H(w=>{const x=w.currentTarget.getAttribute("href");x?.startsWith("#")?(w.preventDefault(),o(!1),v.pathname!=="/"?(m("/"),setTimeout(()=>{const C=document.getElementById(x.slice(1));if(C){const P=C.getBoundingClientRect().top+window.scrollY-72;window.scrollTo({top:P,behavior:"smooth"})}},300)):setTimeout(()=>{const C=document.getElementById(x.slice(1));if(C){const M=document.querySelector("nav")?.offsetHeight||72,P=C.getBoundingClientRect().top+window.scrollY-M;window.scrollTo({top:P,behavior:"smooth"})}},100)):x?.startsWith("/")&&(w.preventDefault(),o(!1),m(x))},[m,v.pathname]);return d(Le,{children:[r(ao,{$hidden:i&&!n,children:r(so,{"aria-label":"Main navigation",children:d(lo,{children:[r(co,{onClick:D,style:{cursor:"pointer"},children:r(po,{src:oo,alt:e,loading:"eager",fetchPriority:"high"})}),r(uo,{children:r(ho,{children:t.map(w=>r(go,{href:w.href,$primary:w.primary?!0:void 0,$active:T(w.href),onClick:I,children:w.label},w.label))})}),d(mo,{onClick:()=>o(w=>!w),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:[r(it,{$open:n}),r(it,{$open:n}),r(it,{$open:n})]})]})})}),r(fo,{$open:n,onClick:()=>o(!1)}),d(xo,{$open:n,ref:p,children:[r(yo,{onClick:()=>o(!1),"aria-label":"Close menu",children:r("svg",{viewBox:"0 0 16 16",fill:"none",children:r("path",{d:"M12 4L4 12M4 4l8 8",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round"})})}),r(bo,{children:t.map((w,x)=>d(wo,{href:w.href,$primary:w.primary,$active:T(w.href),$show:n,$delay:`${.1+x*.07}s`,onClick:I,children:[r(vo,{children:en[w.label]||en.Home}),w.label]},w.label))}),r(ko,{})]})]})};function Co({color:e="currentColor"}){return d("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("rect",{x:"10",y:"12",width:"44",height:"40",rx:"10",fill:e,opacity:"0.25"}),r("rect",{x:"18",y:"20",width:"28",height:"24",rx:"8",fill:e,opacity:"0.35"}),r("path",{d:"M26 36L32 30L38 36",stroke:e,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"})]})}function $o({color:e="currentColor"}){return d("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z",fill:e,opacity:"0.25"}),r("path",{d:"M26 24L20 30L26 36",stroke:e,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),r("path",{d:"M38 24L44 30L38 36",stroke:e,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),r("path",{d:"M34 22L30 38",stroke:e,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})]})}function Io({color:e="currentColor"}){return d("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M20 44L44 20",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),r("path",{d:"M18 46L22 42L26 46L22 50L18 46Z",fill:e,opacity:"0.35"}),r("path",{d:"M38 18L46 26",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function Eo({color:e="currentColor"}){return d("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("rect",{x:"16",y:"14",width:"32",height:"28",rx:"6",fill:e,opacity:"0.25"}),r("rect",{x:"20",y:"18",width:"24",height:"14",rx:"4",fill:e,opacity:"0.35"}),r("path",{d:"M26 48H38",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function To({color:e="currentColor"}){return d("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z",fill:e,opacity:"0.25"}),r("path",{d:"M26 46H38",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),r("path",{d:"M22 52H42",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function Lo({color:e="currentColor"}){return d("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M16 44V34",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),r("path",{d:"M28 44V26",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),r("path",{d:"M40 44V30",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),r("path",{d:"M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z",fill:e,opacity:"0.35"})]})}function Do({color:e="currentColor"}){return d("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("rect",{x:"18",y:"30",width:"28",height:"22",rx:"10",fill:e,opacity:"0.25"}),r("path",{d:"M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),r("path",{d:"M32 38V44",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}const Po=(e,t=null)=>{const n={1:[],2:[],3:[]};e.forEach(s=>{n[s.row].push(s)}),Object.keys(n).forEach(s=>{n[s].sort((l,u)=>l.col-u.col)});let o=!0;for(;o;){o=!1;for(let s=3;s>=2;s--){const l=n[s];if(l.reduce((p,g)=>p+g.span,0)>4){const p=l.findIndex(m=>m.id===t);let g;p!==-1&&p<=1?g=l.pop():g=l.shift(),g.row=s-1,n[s-1].push(g),o=!0;break}}}const i=[];return Object.keys(n).forEach(s=>{let l=1;n[s].forEach(u=>{i.push({...u,row:parseInt(s),col:l}),l+=u.span})}),i},Ao=(e,t)=>{if(!t)return e.map(o=>({...o,span:1}));const n=e.map(o=>({...o,span:o.id===t?2:1}));return Po(n,t)},Mo=e=>{const t=[];let n=0;for(let o=1;o<=3;o++)n<e.length&&(t.push({id:e[n],row:1,col:o,span:1}),n++);for(let o=1;o<=4;o++)n<e.length&&(t.push({id:e[n],row:2,col:o,span:1}),n++);for(let o=1;o<=4;o++)n<e.length&&(t.push({id:e[n],row:3,col:o,span:1}),n++);return t},zo=3e3,Ro=1,jo=a.div`
  width: min(576px, 50%);
  // flex: 1 1 576px;

  /* CSS Grid setup */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 120px);
  gap: 32px;

  align-self: flex-start;

  @media (max-width: 1024px) {
    flex-basis: 100%;
  }

  @media (max-width: 1000px) {
    width: 100%;
    flex-basis: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 96px);
    gap: 14px;
  }

  @media (max-width: 480px) {
    grid-template-rows: repeat(2, 80px);
    gap: 10px;
  }
`,No=a.div`
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
  user-select: none;

  /* Fill the grid cell completely - width auto-adjusts based on column span */
  width: 100%;
  height: 100%;

  /* Grid positioning applied via inline styles */

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: ${e=>e.$isExpanded?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.1)"};
    backdrop-filter: blur(10px);
    box-shadow: ${e=>e.$isExpanded?"0px 4px 32px 0px rgba(176, 149, 227, 0.25)":"none"};
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
`,Bo=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,Oo=a.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$isExpanded?"flex-start":"center"};
  gap: ${e=>e.$isExpanded?"16px":"0"};
  width: ${e=>e.$isExpanded?"100%":"auto"};
  padding: ${e=>e.$isExpanded?"0 20px":"0"};
  transition: none;
`,Wo=a.div`
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
`,_o=a.div`
  font-family: ${S.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  display: ${e=>e.$isExpanded?"block":"none"};
  opacity: ${e=>e.$isExpanded?"1":"0"};
  transform: translateX(${e=>e.$isExpanded?"0":"20px"});
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
`;function Fo({ariaLabel:e,title:t,icon:n,gridRow:o,gridColumn:i,isExpanded:s,onMouseEnter:l,onMouseLeave:u,onClick:p,tileId:g}){return r(No,{"aria-label":e,$isExpanded:s,style:{gridRow:o,gridColumn:i},onMouseEnter:()=>l(g),onMouseLeave:u,onClick:()=>p(g),children:r(Bo,{children:d(Oo,{$isExpanded:s,children:[r(Wo,{children:n}),r(_o,{$isExpanded:s,children:t})]})})})}const Yo={ScrollIcon:Co,MessageProgrammingIcon:$o,PenToolIcon:Io,DriverIcon:Eo,CloudConnectionIcon:To,FavoriteChartIcon:Lo,LockIcon:Do};function Uo({tileColor:e}){const t=_("hero").tiles??{},n=t.autoCycleIntervalMs??zo,o=t.defaultTileId??Ro,i=xn(),s=Ee(()=>{const y=t.row1??[],k=t.row2??[];return[...y,...k]},[t]),l=Ee(()=>s.length?Math.min(...s.map(y=>y.id)):1,[s]),u=Ee(()=>s.length?Math.max(...s.map(y=>y.id)):1,[s]),[p,g]=B(o),[m,v]=B(!1),[T,D]=B(!1),I=W(null),w=W(null);O(()=>{if(typeof window<"u"){const y=()=>D(window.innerWidth<=1e3);return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)}},[]),O(()=>T?void 0:(m||(I.current=setInterval(()=>{if(!m){const k=Math.floor(Math.random()*(u-l+1))+l;g(k)}},n)),()=>{I.current&&clearInterval(I.current)}),[m,T]);const x=Ee(()=>{const y=s.map(f=>f.id),k={},$=Mo(y);return k.default=$,y.forEach(f=>{k[f]=Ao($,f)}),k},[s]),C=Ee(()=>x[p||"default"]||x.default,[x,p]),M=y=>{v(!0),g(y),I.current&&clearInterval(I.current)},P=()=>{g(o),v(!1)},b=y=>{const k=s.find($=>$.id===y);if(!T){k?.slug&&i(`/roadmap/${k.slug}`);return}if(p===y){k?.slug&&i(`/roadmap/${k.slug}`);return}w.current&&clearTimeout(w.current),g(y),w.current=setTimeout(()=>{g(o)},4e3)};return O(()=>()=>{w.current&&clearTimeout(w.current)},[]),r(jo,{"aria-label":"intro tiles",children:C.map(y=>{const k=s.find(N=>N.id===y.id);if(!k)return null;const $=Yo[k.icon],f=y.span===2;return r(Fo,{tileId:y.id,ariaLabel:k.ariaLabel,title:k.title,icon:r($,{color:e}),gridRow:y.row,gridColumn:`${y.col} / span ${y.span}`,isExpanded:f,onMouseEnter:M,onMouseLeave:P,onClick:b},y.id)})})}const tn="margg_waitlist_joined",at="margg:waitlist_joined",Vo=A`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,Ho=A`
  to { stroke-dashoffset: 0; }
`,qo=A`
  to { transform: rotate(360deg); }
`,nn=a.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,Go=a.div`
  position: relative;
  width: 100%;
  height: 56px;
`,Xo=a.input`
  width: 100%;
  height: 100%;
  padding: 16px 180px 16px 24px;
  border: 1px solid ${e=>e.$hasError?"#FF4D4F":"#2d2d2d"};
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
    border-color: ${e=>e.$hasError?"#FF4D4F":"#d3c4ef"};
  }

  @media (max-width: 640px) {
    padding: 14px 120px 14px 16px;
    font-size: 14px;
  }
`,Jo=a.button`
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
  min-width: 0;

  &:hover:not(:disabled) {
    box-shadow: 0px 6px 32px 0px #b095e3a0;
    transform: translateY(-50%) scale(1.02);
  }

  &:active:not(:disabled) {
    transform: translateY(-50%) scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (max-width: 640px) {
    padding: 10px 16px;
    font-size: 12px;
  }
`,Qo=a.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(80, 19, 192, 0.25);
  border-top-color: #5013c0;
  border-radius: 50%;
  animation: ${qo} 0.6s linear infinite;

  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`,Ko=a.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ff6b6b;
  opacity: ${e=>e.$show?"1":"0"};
  max-height: ${e=>e.$show?"30px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,Zo=a.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${Vo} 0.4s ease forwards;

  @media (max-width: 640px) {
    gap: 10px;
  }
`,ei=a.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }

  svg path {
    stroke-dasharray: 24;
    stroke-dashoffset: 24;
    animation: ${Ho} 0.4s ease 0.25s forwards;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    svg { width: 18px; height: 18px; }
  }
`,ti=a.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(238, 231, 249, 0.85);
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,Nn=({placeholder:e="Enter Email",buttonText:t="Join the waitlist",onSubmit:n})=>{const[o,i]=B(""),[s,l]=B(""),[u,p]=B(!1),[g,m]=B(!1),v=W(null),T=W(null),D=W(null);O(()=>{try{typeof window<"u"&&localStorage.getItem(tn)==="true"&&p(!0)}catch{}},[]),O(()=>{const C=()=>p(!0);return window.addEventListener(at,C),()=>window.removeEventListener(at,C)},[]),O(()=>{T.current&&!D.current&&(D.current=T.current.offsetWidth)}),O(()=>{const C=M=>{v.current&&!v.current.contains(M.target)&&s&&l("")};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[s]);const I=C=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(C),w=async C=>{if(C.preventDefault(),l(""),!I(o)){l("Please enter a valid email address");return}if(n){m(!0);try{await n(o);try{localStorage.setItem(tn,"true")}catch{}window.dispatchEvent(new Event(at)),p(!0)}catch(M){M.message==="already_registered"?l("This email is already registered"):M.message==="already_enrolled"?l("This email is already enrolled in the waitlist"):l(M.message||"Something went wrong. Please try again.")}finally{m(!1)}}},x=C=>{i(C.target.value),s&&l("")};return u?r(nn,{ref:v,children:d(Zo,{children:[r(ei,{children:r("svg",{viewBox:"0 0 24 24",fill:"none",children:r("path",{d:"M5 13l4 4L19 7",stroke:"#B095E3",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),r(ti,{children:"You have already joined the waitlist"})]})}):d(nn,{ref:v,children:[r("form",{onSubmit:w,children:d(Go,{children:[r(Xo,{type:"email",placeholder:e,value:o,onChange:x,$hasError:!!s,disabled:g}),r(Jo,{ref:T,type:"submit",disabled:g,style:g&&D.current?{width:D.current}:void 0,children:g?r(Qo,{}):t})]})}),r(Ko,{$show:!!s,children:s})]})};async function Ve(e,t,n){if(!e)throw new Error("Google Sheets integration is not configured. Please set the script URL.");const o={_sheet:t,...n};let i;try{i=await fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o),signal:AbortSignal.timeout(15e3)})}catch(s){throw s.name==="TimeoutError"||s.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach Google Sheets. Please check your internet connection and try again.")}return{ok:!0}}let st=!1,Te=null;function ni(){return st&&window.emailjs?Promise.resolve():Te||(Te=new Promise((e,t)=>{if(window.emailjs){st=!0,e();return}const n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",n.async=!0,n.onload=()=>{st=!0,e()},n.onerror=()=>{Te=null,t(new Error("Failed to load EmailJS SDK."))},document.head.appendChild(n)}),Te)}function ri(e,t){const n=e?.templates?.[t];if(!n)return null;const o=n.account,i=e?.accounts?.[o];return!i?.serviceId||!i?.publicKey?null:{serviceId:i.serviceId,publicKey:i.publicKey,templateId:n.templateId}}async function He(e,t,n){const o=ri(e,t);if(!o)return console.warn(`[EmailJS] No valid config for "${t}" — skipping.`),{ok:!0,skipped:!0};try{await ni(),window.emailjs.init(o.publicKey);const i={...n,to_email:e.notifyEmail||"info@margg.in",submission_time:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})},s=await window.emailjs.send(o.serviceId,o.templateId,i);return s.status!==200&&console.warn("[EmailJS] Non-200 status:",s),{ok:!0}}catch(i){return console.error("[EmailJS] Send failed:",i),{ok:!1,error:i.message}}}const oi=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,ii=/^[0-9\s\-+()]{10,15}$/;function J(e,t){if(!e||!String(e).trim())throw new Error(`${t} is required`);return String(e).trim()}function qe(e){const t=J(e,"Email").toLowerCase().slice(0,254);if(!oi.test(t))throw new Error("Please enter a valid email address");return t}function Mt(e){const t=J(e,"Phone number");if(!ii.test(t))throw new Error("Please enter a valid phone number");return t}async function Ge(e,t){let n;try{n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:AbortSignal.timeout(15e3)})}catch(i){throw i.name==="TimeoutError"||i.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach the server. Please check your internet connection and try again.")}if(n.ok)return{ok:!0};let o="";try{const i=await n.json();o=i?.data?.message||i?.message||i?.error||""}catch{}throw n.status===409?new Error(o||"This entry already exists. Please use a different email."):n.status===422||n.status===400?new Error(o||"Some fields are invalid. Please review and try again."):n.status===429?new Error("Too many requests. Please wait a moment and try again."):n.status>=500?new Error("Our servers are temporarily unavailable. Please try again in a few moments."):new Error(o||"Something went wrong. Please try again.")}function Xe(e){return e?.submissionMode==="sheets"}async function Bn(e,t){const n=qe(t);if(Xe(e))return await Ve(e.googleSheets?.scriptUrl,"Waitlist",{email:n}),await He(e.emailjs,"waitlist",{form_type:"Waitlist",email:n}),{ok:!0};const o=`${e.baseUrl}${e.endpoints.waitlist}`;return Ge(o,{email:n})}async function ai(e,t){const n=J(t.fullName,"Full name").split(" ")[0],o=J(t.fullName,"Full name").split(" ").slice(1).join(" ")||"",i=Mt(t.phone),s=qe(t.email),l=J(t.college,"College name"),u=J(t.branch,"Branch"),p=J(t.year,"Year"),g=t.query||"";if(Xe(e)){const T={firstName:n,lastName:o,phone:i,email:s,collegeName:l,branch:u,year:p,query:g};return await Ve(e.googleSheets?.scriptUrl,"Learners",T),await He(e.emailjs,"learner",{form_type:"Learner Enquiry",full_name:`${n} ${o}`.trim(),phone:i,email:s,college_name:l,branch:u,year:p,query:g}),{ok:!0}}const m={firstName:n,lastName:o,phone:i,email:s,collegeName:l,branch:u,year:p,query:g},v=`${e.baseUrl}${e.endpoints.learner}`;return Ge(v,m)}async function si(e,t){const n=J(t.fullName,"Full name"),o=Mt(t.phone),i=qe(t.email),s=t.topics?.length?t.topics:(()=>{throw new Error("Add at least one topic")})();if(Xe(e)){const p={fullName:n,phone:o,email:i,topics:s.join(", ")};return await Ve(e.googleSheets?.scriptUrl,"Instructors",p),await He(e.emailjs,"instructor",{form_type:"Instructor Enquiry",full_name:n,phone:o,email:i,topics:s.join(", ")}),{ok:!0}}const l={fullName:n,phone:o,email:i,topics:s},u=`${e.baseUrl}${e.endpoints.instructor}`;return Ge(u,l)}async function li(e,t){const n=J(t.orgType,"Organisation type"),o=J(t.orgName,"Organisation name"),i=Number(J(t.students,"Number of students"))||0,s=Mt(t.phone),l=qe(t.email);if(Xe(e)){const g={organisationType:n,organisationName:o,numberOfStudents:i,phone:s,email:l};return await Ve(e.googleSheets?.scriptUrl,"Partners",g),await He(e.emailjs,"partner",{form_type:"Partner / Organisation Enquiry",organisation_type:n,organisation_name:o,number_of_students:i,phone:s,email:l}),{ok:!0}}const u={organisationType:n,organisationName:o,numberOfStudents:i,phone:s,email:l},p=`${e.baseUrl}${e.endpoints.partner}`;return Ge(p,u)}const ci=a.section`
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
`,di=a.div`
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
`,Je=a.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`,pi=a(Je)`
  left: 80.3%;
  top: 67.2%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.95) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,ui=a(Je)`
  left: 13.9%;
  top: 1.4%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.95) 0%,
    rgba(176, 149, 227, 0) 70%
  );
`,hi=a(Je)`
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
`,gi=a(Je)`
  left: 7.3%;
  top: 34.9%;
  width: clamp(110px, 13vw, 171px);
  height: clamp(110px, 13vw, 171px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.9) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,mi=a.div`
  position: relative;
  z-index: 2;
  width: 100%;
  margin-top: 8vh;
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
`,fi=a.div`
  width: 100%;
  max-width: ${ve};
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
`,xi=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 520px;
  flex: 0 1 520px;
`,yi=a.h1`
  color: white;
  font-weight: 400;
  font-size: clamp(42px, 5.2vw, 64px);
  line-height: 1.2;
  letter-spacing: -0.3937px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${S.heading};

  text-wrap: balance;
`,bi=a.p`
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.35;
  font-family: ${S.body};
  margin: 0 0 32px 0;
  max-width: 425px;
  opacity: 0.95;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;a.div`
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translateX(-50%);
  width: 315px;
  text-align: center;
  font-family: ${S.body};
  font-size: 14px;
  letter-spacing: -0.3937px;
  color: #000;
  opacity: 0.18;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;a.img`
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
`;const wi=({id:e})=>{const t="rgba(176, 149, 227, 1)",{titleLine1:n,titleLine2:o,description:i,inputPlaceholder:s,inputButtonText:l}=_("hero"),u=_("api");return d(ci,{id:e,children:[r(di,{}),r(pi,{}),r(ui,{}),r(hi,{}),r(gi,{}),r(mi,{children:d(fi,{children:[d(xi,{children:[d(yi,{children:[n,r("br",{}),o]}),r(bi,{children:i}),r(Nn,{placeholder:s,buttonText:l,onSubmit:g=>Bn(u,g)})]}),r(Uo,{tileColor:t})]})})]})},vi=a.div`
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
`,ki=a.div`
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
`,Si=a.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`,Ci=a.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
  white-space: pre-line;
`;function $i({items:e}){return r(vi,{"aria-label":"analytics stats",children:e.map(t=>d(ki,{children:[r(Si,{children:t.value}),r(Ci,{children:t.label})]},t.value+t.label))})}const Ii=a.section`
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
`,Ei=a.div`
  width: 100%;
  max-width: ${ve};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`,Ti=A`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`,Li=A`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`,Di=A`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`,Pi=a.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`,zt=a.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`,Ai=a(zt)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${Ti} 12s ease-in-out infinite;
`,Mi=a(zt)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${Li} 15s ease-in-out infinite;
`,zi=a(zt)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${Di} 18s ease-in-out infinite;
`,Ri=a.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`,ji=A`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`,Ni=a.div`
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
  animation: ${ji} 8s ease-in-out infinite;
`,Bi=A`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`,Oi=a.div`
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
  animation: ${Bi} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`,Wi=A`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`,_i=[{x:5,y:15,size:3,dur:10,delay:0,op:.4},{x:12,y:72,size:2,dur:12,delay:1.2,op:.3},{x:22,y:35,size:4,dur:9,delay:.5,op:.5},{x:33,y:85,size:2,dur:14,delay:2,op:.25},{x:42,y:12,size:3,dur:11,delay:.8,op:.35},{x:55,y:78,size:4,dur:13,delay:1.5,op:.45},{x:63,y:28,size:2,dur:10,delay:3,op:.3},{x:72,y:60,size:3,dur:15,delay:.3,op:.4},{x:78,y:18,size:2,dur:12,delay:2.5,op:.25},{x:85,y:45,size:4,dur:9,delay:1,op:.5},{x:91,y:80,size:3,dur:11,delay:.7,op:.35},{x:15,y:50,size:2,dur:14,delay:1.8,op:.3},{x:48,y:42,size:3,dur:10,delay:2.2,op:.4},{x:68,y:90,size:2,dur:13,delay:.4,op:.25},{x:38,y:55,size:3,dur:11,delay:3.2,op:.35},{x:95,y:25,size:2,dur:12,delay:1.6,op:.3},{x:8,y:88,size:4,dur:15,delay:.9,op:.45},{x:28,y:8,size:2,dur:10,delay:2.8,op:.3}],Fi=a.span`
  position: absolute;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${e=>e.$op});
  left: ${e=>e.$x}%;
  top: ${e=>e.$y}%;
  animation: ${Wi} ${e=>e.$dur}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${e=>e.$size*3}px
    rgba(176, 149, 227, ${e=>e.$op*.5});
`,Yi=A`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`,Ui=a.div`
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
  animation: ${Yi} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`,Vi=a.div`
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
`,Hi=a.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`,qi=a.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`,Gi=A`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`,Xi=a.div`
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
    animation: ${Gi} 5s ease-in-out infinite;
    pointer-events: none;
  }
`,Ji=A`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`,je=a.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-color: rgba(176, 149, 227, 0.18);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: ${Ji} 0.6s ease-out 2.6s forwards;

  ${e=>e.$pos==="tl"&&j`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${e=>e.$pos==="tr"&&j`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${e=>e.$pos==="bl"&&j`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${e=>e.$pos==="br"&&j`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`,On=A`
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
`,rn=A`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`,on=A`
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
`,Qi=A`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`,an=a.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2.5vw, 40px);
  transform-style: preserve-3d;
  width: 100%;
`,Ki=a.h2`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`,Wn=a.span`
  display: inline-block;
  font-family: ${S.heading};
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

  ${e=>e.$animate&&j`
      animation:
        ${On} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${e.$delay}s
          forwards,
        ${rn} 6s linear ${e.$delay+.9}s infinite,
        ${on} 4s ease-in-out ${e.$delay+.9}s infinite,
        ${Qi} ${3.5+e.$delay%1.5}s ease-in-out ${e.$delay+.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${rn} 1.5s linear infinite,
      ${on} 1s ease-in-out infinite;
    text-shadow:
      0 0 40px rgba(176, 149, 227, 0.8),
      0 0 80px rgba(80, 19, 192, 0.3);
    transform: scale(1.12) translateY(-3px);
  }
`,sn=a(Wn)`
  font-size: clamp(64px, 12vw, 160px);
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    font-size: clamp(40px, 10vw, 64px);
  }
`,ln=a(Wn)`
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: 0.18em;
  -webkit-text-fill-color: rgba(211, 196, 239, 0.65);
  background: none;
  animation: ${e=>e.$animate?j`
          ${On} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e.$delay}s forwards
        `:"none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`,Zi=A`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`,ea=a.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${S.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${Zi} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`,ta=A`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`,na=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: clamp(20px, 2.5vw, 36px);
`,cn=a.span`
  display: inline-block;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.4) 50%,
    transparent 100%
  );
  animation: ${ta} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`,ra=A`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`,oa=A`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`,ia=a.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${ra} 0.5s ease-out 2.5s forwards,
    ${oa} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`,aa=A`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`,sa=A`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`,la=a.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${sa} 0.8s ease-out 2.8s forwards;
`,lt=a.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${aa} 1.5s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;function ca(e){return H(n=>{if(!e.current)return;const o=e.current.getBoundingClientRect(),i=(n.clientX-o.left)/o.width*100,s=(n.clientY-o.top)/o.height*100;e.current.style.setProperty("--mx",`${i}%`),e.current.style.setProperty("--my",`${s}%`)},[e])}function da(e){const t=H(o=>{if(!e.current)return;const i=e.current.getBoundingClientRect(),s=(o.clientX-i.left)/i.width-.5,l=(o.clientY-i.top)/i.height-.5;e.current.style.transform=`rotateX(${l*-5}deg) rotateY(${s*5}deg)`},[e]),n=H(()=>{e.current&&(e.current.style.transform="rotateX(0deg) rotateY(0deg)")},[e]);return{handleTiltMove:t,handleTiltLeave:n}}function pa(e=.2){const t=W(null),[n,o]=B(!1);return O(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const i=t.current;if(!i)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(o(!0),s.disconnect())},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),[t,n]}function Ne({text:e,Component:t,baseDelay:n=0,animate:o=!0}){return r("span",{style:{display:"inline-flex",flexWrap:"nowrap",whiteSpace:"nowrap"},children:e.split("").map((i,s)=>r(t,{$animate:o,$delay:n+s*.07,children:i},`${i}-${s}`))})}function ua(){const{stats:e,waitList:t}=_("analytics"),n=W(null),o=W(null),i=ca(n),{handleTiltMove:s,handleTiltLeave:l}=da(o),[u,p]=pa(.2),g=H(m=>{i(m),s(m)},[i,s]);return r(Ii,{ref:u,"aria-label":"analytics",onMouseMove:g,onMouseLeave:l,children:r(Ei,{children:t?d(Le,{children:[d(Pi,{children:[r(Ai,{}),r(Mi,{}),r(zi,{})]}),r(Ni,{}),r(Ri,{}),r(Ui,{}),r(Oi,{}),r(Vi,{ref:n}),_i.map((m,v)=>r(Fi,{$x:m.x,$y:m.y,$size:m.size,$dur:m.dur,$delay:m.delay,$op:m.op},v)),r(Hi,{children:r(qi,{ref:o,children:d(Xi,{children:[r(je,{$pos:"tl"}),r(je,{$pos:"tr"}),r(je,{$pos:"bl"}),r(je,{$pos:"br"}),d(Ki,{children:[d(an,{children:[r(Ne,{text:"WE",Component:ln,baseDelay:.1,animate:p}),r("span",{style:{width:"clamp(8px,1.5vw,20px)"}}),r(Ne,{text:"ARE",Component:ln,baseDelay:.3,animate:p})]}),d(an,{style:{marginTop:"clamp(4px, 0.8vw, 12px)"},children:[r(Ne,{text:"COMING",Component:sn,baseDelay:.5,animate:p}),r(Ne,{text:"SOON",Component:sn,baseDelay:.9,animate:p})]})]}),r(ea,{children:"Something extraordinary is on its way"}),d(na,{children:[r(cn,{}),r(ia,{}),r(cn,{})]}),d(la,{children:[r(lt,{$delay:0}),r(lt,{$delay:.3}),r(lt,{$delay:.6})]})]})})})]}):r($i,{items:e})})})}const _n=A`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function ha(e=.15){const t=W(null),[n,o]=B(!1);return O(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const i=t.current;if(!i)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(o(!0),s.disconnect())},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),[t,n]}const ga=a.section`
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
  padding: calc(40px + 72px) var(--pad) 0;

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
`,ma=a.div`
  width: 100%;
  max-width: ${ve};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,fa=a.h2`
  margin: 0;
  font-family: ${S.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
  opacity: 0;

  ${e=>e.$inView&&j`
      animation: ${_n} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,xa=a.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${S.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
  opacity: 0;

  ${e=>e.$inView&&j`
      animation: ${_n} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,ya=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;a.div`
  width: min(560px, 100%);
  margin-top: clamp(22px, 5vh, 44px);
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: min(440px, 100%);
  }
`;a.div`
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
`;a.div`
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
`;a.div`
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
`;function ba({id:e}){const{titleLine1:t,titleLine2:n,description:o}=_("supercharge"),[i,s]=ha(.15);return r(ga,{id:e,"aria-label":"supercharge",ref:i,children:r(ma,{children:d(ya,{children:[d(fa,{$inView:s,children:[t,r("br",{}),n]}),r(xa,{$inView:s,children:o})]})})})}const wa=A`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function va(e=.1){const t=W(null),[n,o]=B(!1);return O(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const i=t.current;if(!i)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(o(!0),s.disconnect())},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),[t,n]}const ka=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,Sa=/^[0-9\s\-+()]{10,15}$/;function Be(e,t){if(!t||!t.trim())return"Required";switch(e){case"email":return ka.test(t.trim())?"":"Invalid email";case"phone":return Sa.test(t.trim())?"":"Invalid phone number";case"fullName":return t.trim().length>=2?"":"At least 2 characters";case"orgName":return t.trim().length>=2?"":"At least 2 characters";default:return""}}const dn=[{key:"learner",title:"Learners",desc:"Have questions about your course, progress, or certification? Reach out and we’ll get you the support you need."},{key:"instructor",title:"Instructors",desc:"Interested in joining our platform or facing technical issues while managing your content? We’re just a message away."},{key:"partner",title:"Partners",desc:"Let’s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team."}],Ca=()=>d("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[r("path",{d:"M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z",fill:"#D3C4EF",fillOpacity:".8"}),r("path",{d:"M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",fill:"#EEE7F9"})]}),$a=()=>d("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[r("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",fill:"#D3C4EF"}),r("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",fill:"#D3C4EF",fillOpacity:".6"}),r("path",{d:"M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z",fill:"#EEE7F9"})]}),Ia=()=>d("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[r("path",{d:"M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#D3C4EF",fillOpacity:".6"}),r("path",{d:"M9 11a3 3 0 100-6 3 3 0 000 6z",fill:"#D3C4EF"}),r("path",{d:"M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z",fill:"#D3C4EF",fillOpacity:".6"}),r("path",{d:"M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",fill:"#D3C4EF"})]}),Ea={learner:Ca,instructor:$a,partner:Ia},Ta=a.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${L.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`,Rt=a.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`,La=a(Rt)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `,Da=a(Rt)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `,Pa=a(Rt)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `,Aa=a.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Pe=j`
  opacity: 0;
  ${e=>e.$show&&j`
    animation: ${wa} 0.7s ease forwards;
    animation-delay: ${e.$d||"0s"};
  `}
`,Ma=a.h2`
  margin: 0;
  font-family: ${S.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${Pe}
`,za=a.p`
  margin: 16px 0 0;
  font-family: ${S.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${Pe}
`,Ra=a.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  ${Pe}

  ${L.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`,ja=a.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${e=>e.$active?"drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))":"drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${L.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`,Na=a.button`
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

  background: ${e=>e.$active?"linear-gradient(160deg, rgba(80,19,192,0.55) 0%, rgba(60,42,96,0.7) 100%)":"linear-gradient(160deg, rgba(80,19,192,0.15) 0%, rgba(60,42,96,0.2) 100%)"};

  &:hover {
    background: linear-gradient(160deg, rgba(80,19,192,0.35) 0%, rgba(60,42,96,0.45) 100%);
  }

  ${L.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${e=>e.$active?"rgba(176,149,227,0.5)":"rgba(176,149,227,0.12)"};
  }
`,Ba=a.div`
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
`,Oa=a.span`
  font-family: ${S.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${L.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`,Wa=a.span`
  font-family: ${S.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${L.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`,_a=a.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${S.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${Pe}
  }
`,Fa=a.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: -20px;
  @media (max-width: 600px) { display: none; }
`,ct=a.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${e=>e.$pos==="left"&&j` left: 18%; transform: rotate(22deg); transform-origin: top center; `}
  ${e=>e.$pos==="center"&&j` left: 50%; `}
  ${e=>e.$pos==="right"&&j` right: 18%; transform: rotate(-22deg); transform-origin: top center; `}
`,Ya=a.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${Pe}

  ${L.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`,Ua=a.h3`
  margin: 0;
  font-family: ${S.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${L.mobile} { font-size: 32px; }
`,Va=a.p`
  margin: 8px 0 0;
  font-family: ${S.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${L.mobile} { font-size: 15px; }
`,Ha=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${L.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`,F=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${e=>e.$full&&j` grid-column: 1 / -1; `}
`,Y=a.label`
  font-family: ${S.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`,jt=j`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${S.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`,U=a.input` ${jt} `,qa=a.textarea`
  ${jt}
  min-height: 90px;
  resize: vertical;
`,Ga=a.select`
  ${jt}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${S.body};
    padding: 8px;
  }
`,V=a.span`
  font-family: ${S.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`,Xa=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`,Ja=a.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${S.body};
  font-size: 13px;
  color: #eee7f9;
`,Qa=a.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`,Ka=a.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`,Za=a.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(176, 149, 227, 0.5);
  background: ${e=>e.$checked?"#5013C0":"rgba(211,196,239,0.06)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  svg { opacity: ${e=>e.$checked?1:0}; transition: opacity 0.15s; }
`,es=a.span`
  font-family: ${S.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`,dt=a.button`
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
  font-family: ${S.body};
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
`,ts=a.div`
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
`,ns=a.span`
  font-family: ${S.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`,rs=a.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${S.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`,os=a.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,is=a.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`,as=a.h3`
  margin: 0;
  font-family: ${S.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`,ss=a.p`
  margin: 0;
  font-family: ${S.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;function Oe(e){switch(e){case"learner":return{fullName:"",phone:"",email:"",college:"",branch:"",year:"",query:"",newsletter:!1};case"instructor":return{fullName:"",phone:"",email:"",topics:[],otherTopic:void 0};case"partner":return{orgType:"",orgName:"",students:"",phone:"",email:""};default:return{}}}function ls({id:e}){const t=_("api"),[n,o]=B("learner"),[i,s]=B(Oe("learner")),[l,u]=B({}),[p,g]=B(!1),[m,v]=B(!1);W(null);const[T,D]=va(.08),I=W(null);O(()=>{const c={"#contact-learner":"learner","#contact-instructor":"instructor","#contact-partner":"partner"};function h(){const E=window.location.hash,z=c[E];z&&(o(z),s(Oe(z)),u({}),g(!1),requestAnimationFrame(()=>{const Q=I.current;if(Q){const ge=document.querySelector("nav")?.offsetHeight||72,Ce=Q.getBoundingClientRect().top+window.scrollY-ge;window.scrollTo({top:Ce,behavior:"smooth"})}}))}return h(),window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]);const w=H(c=>{o(c),s(Oe(c)),u({}),g(!1)},[]),x=H((c,h)=>{s(E=>({...E,[c]:h})),l[c]&&u(E=>({...E,[c]:""}))},[l]),C=H(c=>{c&&(s(h=>({...h,topics:h.topics.includes(c)?h.topics:[...h.topics,c]})),l.topics&&u(h=>({...h,topics:""})))},[l]),M=H(()=>{s(c=>{const h=c.otherTopic?.trim();return h?{...c,topics:c.topics.includes(h)?c.topics:[...c.topics,h],otherTopic:void 0}:c}),l.topics&&u(c=>({...c,topics:""}))},[l]),P=H(c=>{s(h=>({...h,topics:h.topics.filter(E=>E!==c)}))},[]),b=H(async c=>{c.preventDefault();const h={};if(n==="learner")["fullName","phone","email"].forEach(E=>{const z=Be(E,i[E]);z&&(h[E]=z)}),i.college||(h.college="Required"),i.branch||(h.branch="Required"),i.year||(h.year="Required");else if(n==="instructor")["fullName","phone","email"].forEach(E=>{const z=Be(E,i[E]);z&&(h[E]=z)}),i.topics.length||(h.topics="Add at least one topic");else{i.orgType||(h.orgType="Required");const E=Be("orgName",i.orgName);E&&(h.orgName=E),i.students||(h.students="Required"),["phone","email"].forEach(z=>{const Q=Be(z,i[z]);Q&&(h[z]=Q)})}if(Object.keys(h).length){u(h);return}v(!0),u(E=>({...E,_form:""}));try{n==="learner"?await ai(t,i):n==="instructor"?await si(t,i):await li(t,i),g(!0)}catch(E){u({_form:E.message||"Something went wrong. Please try again."})}finally{v(!1)}},[n,i,t]),y=H(()=>{b({preventDefault:()=>{}})},[b]),k=()=>d(Le,{children:[d(F,{children:[r(Y,{children:"Full Name"}),r(U,{placeholder:"Enter full name",value:i.fullName,onChange:c=>x("fullName",c.target.value)}),l.fullName&&r(V,{children:l.fullName})]}),d(F,{children:[r(Y,{children:"Phone Number"}),r(U,{placeholder:"Enter phone number",value:i.phone,onChange:c=>x("phone",c.target.value)}),l.phone&&r(V,{children:l.phone})]}),d(F,{children:[r(Y,{children:"Email"}),r(U,{type:"email",placeholder:"Enter email address",value:i.email,onChange:c=>x("email",c.target.value)}),l.email&&r(V,{children:l.email})]}),d(F,{children:[r(Y,{children:"College Name"}),r(U,{placeholder:"Enter college name",value:i.college,onChange:c=>x("college",c.target.value)}),l.college&&r(V,{children:l.college})]}),d(F,{children:[r(Y,{children:"Branch"}),r(U,{placeholder:"Enter branch",value:i.branch,onChange:c=>x("branch",c.target.value)}),l.branch&&r(V,{children:l.branch})]}),d(F,{children:[r(Y,{children:"Year of Passing"}),r(U,{placeholder:"Enter year of passing",value:i.year,onChange:c=>x("year",c.target.value)}),l.year&&r(V,{children:l.year})]}),d(F,{$full:!0,children:[d(Y,{children:["Query ",r("span",{style:{color:"rgba(238,231,249,0.35)",fontWeight:400},children:"(optional)"})]}),r(qa,{placeholder:"Any questions or queries that you have?",value:i.query,onChange:c=>x("query",c.target.value)})]})]}),$=_("courses")||[],f=()=>d(Le,{children:[d(F,{children:[r(Y,{children:"Full Name"}),r(U,{placeholder:"Enter full name",value:i.fullName,onChange:c=>x("fullName",c.target.value)}),l.fullName&&r(V,{children:l.fullName})]}),d(F,{children:[r(Y,{children:"Phone Number"}),r(U,{placeholder:"Enter phone number",value:i.phone,onChange:c=>x("phone",c.target.value)}),l.phone&&r(V,{children:l.phone})]}),d(F,{children:[r(Y,{children:"Email"}),r(U,{type:"email",placeholder:"Enter email address",value:i.email,onChange:c=>x("email",c.target.value)}),l.email&&r(V,{children:l.email})]}),d(F,{$full:!0,children:[r(Y,{children:"Topics you can teach"}),i.topics.length>0&&r(Xa,{children:i.topics.map(c=>d(Ja,{children:[c,r(Qa,{onClick:()=>P(c),"aria-label":`Remove ${c}`,children:r("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:r("path",{d:"M9 3L3 9M3 3l6 6",stroke:"#EEE7F9",strokeWidth:"1.5",strokeLinecap:"round"})})})]},c))}),d(Ga,{value:"",onChange:c=>{const h=c.target.value;h&&(h==="__other__"?s(E=>({...E,otherTopic:""})):C(h),c.target.value="")},children:[r("option",{value:"",children:"Select a topic"}),$.filter(c=>!i.topics.includes(c)).map(c=>r("option",{value:c,children:c},c)),r("option",{value:"__other__",children:"Other"})]}),typeof i.otherTopic=="string"&&d("div",{style:{display:"flex",gap:10,marginTop:4},children:[r(U,{placeholder:"Enter your topic",value:i.otherTopic,onChange:c=>x("otherTopic",c.target.value),onKeyDown:c=>{c.key==="Enter"&&(c.preventDefault(),M())},style:{flex:1}}),r(dt,{type:"button",onClick:M,style:{marginTop:0,width:"auto",padding:"0 24px",height:43,fontSize:14},children:"Add"})]}),l.topics&&r(V,{children:l.topics})]})]}),N=()=>d(Le,{children:[d(F,{children:[r(Y,{children:"Organisation Type"}),r(U,{placeholder:"Enter organisation type",value:i.orgType,onChange:c=>x("orgType",c.target.value)}),l.orgType&&r(V,{children:l.orgType})]}),d(F,{children:[r(Y,{children:"Organisation Name"}),r(U,{placeholder:"Enter organisation name",value:i.orgName,onChange:c=>x("orgName",c.target.value)}),l.orgName&&r(V,{children:l.orgName})]}),d(F,{children:[r(Y,{children:"Number of Students"}),r(U,{placeholder:"Enter number of students",value:i.students,onChange:c=>x("students",c.target.value)}),l.students&&r(V,{children:l.students})]}),d(F,{children:[r(Y,{children:"Phone Number"}),r(U,{placeholder:"Enter phone number",value:i.phone,onChange:c=>x("phone",c.target.value)}),l.phone&&r(V,{children:l.phone})]}),d(F,{children:[r(Y,{children:"Email"}),r(U,{type:"email",placeholder:"Enter email address",value:i.email,onChange:c=>x("email",c.target.value)}),l.email&&r(V,{children:l.email})]})]});return d(Ta,{id:e,ref:c=>{T.current=c,I.current=c},"aria-label":"Contact Us",children:[r("svg",{width:"0",height:"0",style:{position:"absolute"},children:r("defs",{children:r("clipPath",{id:"shield-clip",clipPathUnits:"objectBoundingBox",children:r("path",{d:"M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z"})})})}),r(La,{}),r(Da,{}),r(Pa,{}),d(Aa,{children:[r(Ma,{$show:D,$d:"0s",children:"We are here to help you"}),r(za,{$show:D,$d:"0.1s",children:"Whether you’re a student with a question, an educator with a suggestion, or a partner looking to collaborate — we’re always eager to hear from you."}),r(Ra,{$show:D,$d:"0.2s",children:dn.map(c=>{const h=Ea[c.key];return r(ja,{$active:n===c.key,onClick:()=>w(c.key),children:d(Na,{$active:n===c.key,type:"button","aria-pressed":n===c.key,children:[r(Ba,{children:r(h,{})}),r(Oa,{children:c.title}),r(Wa,{children:c.desc})]})},c.key)})}),r(_a,{$show:D,$d:"0.25s",children:dn.find(c=>c.key===n)?.desc},n),d(Fa,{children:[r(ct,{$pos:"left"}),r(ct,{$pos:"center"}),r(ct,{$pos:"right"})]}),r(Ya,{$show:D,$d:"0.35s",children:p?d(os,{children:[r(is,{children:r("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:r("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"#B095E3"})})}),r(as,{children:"Thank you!"}),r(ss,{children:"We’ve received your details and will contact you soon."}),r(dt,{type:"button",onClick:()=>{g(!1),s(Oe(n))},children:"Submit another"})]}):d("form",{onSubmit:b,noValidate:!0,children:[r(Ua,{children:"Drop your Details"}),r(Va,{children:"We will contact you real soon!"}),d(Ha,{children:[n==="learner"&&k(),n==="instructor"&&f(),n==="partner"&&N()]}),n==="learner"&&d(Ka,{children:[r(Za,{$checked:i.newsletter,onClick:()=>x("newsletter",!i.newsletter),role:"checkbox","aria-checked":i.newsletter,tabIndex:0,onKeyDown:c=>{(c.key===" "||c.key==="Enter")&&(c.preventDefault(),x("newsletter",!i.newsletter))},children:r("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:r("path",{d:"M2 6l3 3 5-5",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),r(es,{children:"Stay in the Loop! Subscribe to our newsletter and be the first to know about exciting features and exclusive collaborations."})]}),l._form&&d(ts,{children:[r(ns,{children:l._form}),r(rs,{type:"button",onClick:y,disabled:m,children:m?"Retrying…":"Retry"})]}),r(dt,{type:"submit",disabled:m,children:m?"Submitting…":"Submit"})]})})]})]})}const cs="/assets/Margg-lQxeB3-A.png",ds=({width:e=24,height:t=24,color:n="currentColor",...o})=>r("svg",{width:e,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:n,...o,children:r("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),ps=({width:e=24,height:t=24,color:n="currentColor",...o})=>r("svg",{width:e,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:n,...o,children:r("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),us=({width:e=30,height:t=30,color:n="currentColor"})=>r("svg",{width:e,height:t,viewBox:"0 0 24 24",fill:n,children:r("path",{d:"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),hs=({width:e=30,height:t=30,color:n="currentColor"})=>r("svg",{width:e,height:t,viewBox:"0 0 24 24",fill:n,children:r("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})}),gs=({width:e=30,height:t=30,color:n="currentColor"})=>r("svg",{width:e,height:t,viewBox:"0 0 24 24",fill:n,children:r("path",{d:"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),ms=({width:e=15,height:t=20,color:n="#B095E3",...o})=>r("svg",{width:e,height:t,viewBox:"0 0 15 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:r("path",{d:"M7.5 0C3.35813 0 0 3.35813 0 7.5C0 9.13094 0.534688 10.6275 1.42344 11.8531C1.43938 11.8825 1.44187 11.9153 1.46 11.9434L6.46 19.4434C6.69188 19.7913 7.0825 20 7.5 20C7.9175 20 8.30812 19.7913 8.54 19.4434L13.54 11.9434C13.5584 11.9153 13.5606 11.8825 13.5766 11.8531C14.4653 10.6275 15 9.13094 15 7.5C15 3.35813 11.6419 0 7.5 0ZM7.5 10C6.11937 10 5 8.88062 5 7.5C5 6.11937 6.11937 5 7.5 5C8.88062 5 10 6.11937 10 7.5C10 8.88062 8.88062 10 7.5 10Z",fill:n})}),fs=({width:e=20,height:t=20,color:n="#B095E3",...o})=>r("svg",{width:e,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:r("path",{d:"M16.6607 12.8167C15.6366 12.8167 14.6458 12.65 13.7216 12.35C13.5768 12.3009 13.4212 12.2936 13.2724 12.329C13.1237 12.3643 12.9879 12.4409 12.8807 12.55L11.5735 14.1917C9.2172 13.0667 7.01079 10.9417 5.83681 8.5L7.4604 7.11667C7.6852 6.88333 7.75181 6.55833 7.66022 6.26667C7.35216 5.34167 7.19396 4.35 7.19396 3.325C7.19396 2.875 6.81929 2.5 6.36968 2.5H3.48885C3.03924 2.5 2.49805 2.7 2.49805 3.325C2.49805 11.0667 8.93412 17.5 16.6607 17.5C17.2519 17.5 17.485 16.975 17.485 16.5167V13.6417C17.485 13.1917 17.1103 12.8167 16.6607 12.8167Z",fill:n})}),xs=({width:e=20,height:t=20,color:n="#B095E3",...o})=>r("svg",{width:e,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:r("path",{d:"M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z",fill:n})}),Fn=A`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function ys(e=.1){const t=W(null),[n,o]=B(!1);return O(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const i=t.current;if(!i)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(o(!0),s.disconnect())},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),[t,n]}const bs={FacebookIcon:ds,TwitterIcon:ps,YoutubeIcon:us,InstagramIcon:hs,DiscordIcon:gs},ws=a.footer`
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

  ${L.mobile} {
    height: auto;
    min-height: 460px;
  }
`,vs=a.div`
  width: 100%;
  max-width: ${ve};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;

  ${L.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`,ks=a.div`
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

  ${e=>e.$inView&&j`
      animation: ${Fn} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${L.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${L.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,Ss=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${L.mobile} {
    align-items: center;
  }
`,Cs=a.h2`
  margin: 0;
  font-family: ${S.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${L.mobile} {
    font-size: 32px;
    text-align: center;
  }
`,$s=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pt=a.div`
  margin: 0;
  font-family: ${S.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${L.mobile} {
    justify-content: center;
  }
`,ut=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Is=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,Es=a.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${L.mobile} {
    width: 180px;
    height: auto;
  }
`,Ts=a.p`
  margin: 0;
  font-family: ${S.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${L.mobile} {
    font-size: 14px;
  }
`,Ls=a.div`
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

  ${e=>e.$inView&&j`
      animation: ${Fn} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${L.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${L.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,Ds=a.p`
  margin: 0;
  font-family: ${S.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${L.mobile} {
    font-size: 12px;
    text-align: center;
  }
`,Ps=a.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,As=a.a`
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
`,Ms=a.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

  ${L.mobile} {
    gap: 16px;
  }
`,ht=a.a`
  font-family: ${S.body};
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
`,zs=new Date().getFullYear(),$t=({id:e})=>{const{contactTitle:t,location:n,phone:o,email:i,tagline:s,companyName:l,logoAlt:u,socialLinks:p}=_("footer"),[g,m]=ys(.1);return r(ws,{id:e,ref:g,children:d(vs,{children:[d(ks,{$inView:m,children:[d(Ss,{children:[r(Cs,{children:t}),d($s,{children:[d(pt,{children:[r(ut,{children:r(ms,{width:15,height:20,color:"#B095E3"})}),n]}),d(pt,{children:[r(ut,{children:r(fs,{width:18,height:18,color:"#B095E3"})}),o]}),d(pt,{children:[r(ut,{children:r(xs,{width:18,height:18,color:"#B095E3"})}),i]})]}),d(Ms,{children:[r(ht,{href:"#contact-learner",children:"Learner Form →"}),r(ht,{href:"#contact-instructor",children:"Instructor Form →"}),r(ht,{href:"#contact-partner",children:"Partner Form →"})]})]}),d(Is,{children:[r(Es,{src:cs,alt:u,loading:"lazy",decoding:"async"}),r(Ts,{children:s})]})]}),d(Ls,{$inView:m,children:[d(Ds,{children:["© ",zs," ",l,". All Rights Reserved."]}),r(Ps,{children:p.map(v=>{const T=bs[v.icon];return r(As,{href:v.url,target:"_blank",rel:"noopener noreferrer","aria-label":v.name,children:r(T,{})},v.name)})})]})]})})},Rs="/assets/phone-screen-Jgi4cEKU.png",js=A`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Ns(e=.15){const t=W(null),[n,o]=B(!1);return O(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const i=t.current;if(!i)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(o(!0),s.disconnect())},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),[t,n]}const Bs=a.div`
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

  ${e=>e.$inView&&j`
      animation: ${js} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${L.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${L.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
  }
`,Os=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${L.mobile} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`,Ws=a.h2`
  margin: 0;
  font-family: ${S.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${L.mobile} {
    font-size: 36px;
  }
`,_s=a.p`
  margin: 0;
  font-family: ${S.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${L.mobile} {
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
  }
`,Fs=a.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${L.mobile} {
    display: none;
  }
`,Ys=a.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`,Us=a.img`
  width: 100%;
  height: 100%;
  display: block;
`,Vs=({onSubmit:e,id:t})=>{const{title:n,subtitle:o,inputPlaceholder:i,buttonText:s}=_("joinWaitlist"),l=_("api"),[u,p]=Ns(.15);return d(Bs,{id:t,ref:u,$inView:p,children:[d(Os,{children:[r(Ws,{children:n}),r(_s,{children:o}),r(Nn,{placeholder:i,buttonText:s,onSubmit:e||(m=>Bn(l,m))})]}),r(Fs,{children:r(Ys,{children:r(Us,{src:Rs,alt:"Phone Screen",loading:"lazy",decoding:"async"})})})]})},Hs="/assets/phone-screen-2-DrcEaGKY.png",qs=a.div`
  background: #ffffff1a;
  border-radius: 24px;
`,ke=a.h3`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
`;a.p`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
`;const Gs="/assets/roadmap-Cly0yicb.png",Xs=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,Js=a.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`,Qs=()=>{const{roadmap:e}=_("blocks");return d(Xs,{children:[r(ke,{children:e.title}),r(Js,{src:Gs,alt:"roadmap",loading:"lazy",decoding:"async"})]})},Ks="/assets/mentor-B_SVnfNn.png",Zs=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,el=a.img`
  position: absolute;
  bottom: 0;
  width: 52%;
`,tl=()=>{const{mentorship:e}=_("blocks");return d(Zs,{children:[r(ke,{children:e.title}),r(el,{src:Ks,alt:"mentorship",loading:"lazy",decoding:"async"})]})},nl="/assets/community-Bm68CTui.png",rl=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,ol=a.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`,il=()=>{const{community:e}=_("blocks");return d(rl,{children:[r(ke,{children:e.title}),r(ol,{src:nl,alt:"community",loading:"lazy",decoding:"async"})]})},al="/assets/focus-timer-Dhb9AdeC.png",sl=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`,ll=a.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`,cl=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`,dl=a(ke)`
  text-align: right;
  width: 50%;
`,pl=()=>{const{focusTimer:e}=_("blocks");return d(sl,{children:[r(cl,{children:r(dl,{children:e.title})}),r(ll,{src:al,alt:"focus timer",loading:"lazy",decoding:"async"})]})},ul="/assets/streak-BhHFlVnO.png",hl=a.div`
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
`;a.img`
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
`;const gl=a(ke)`
  text-align: left;
`,ml=a.img`
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
`,fl=()=>{const{streaks:e}=_("blocks");return d(hl,{children:[r(gl,{children:e.title}),r(ml,{src:ul,alt:"streak",loading:"lazy",decoding:"async"})]})},xl="/assets/interview-prep-BdEyhCch.png",yl=a.div`
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
`,bl=a.img`
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
`,wl=()=>{const{interviewPrep:e}=_("blocks");return d(yl,{children:[r(ke,{children:e.title}),r(bl,{src:xl,alt:"screen left",loading:"lazy",decoding:"async"})]})},vl=a.div`
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
`,Se=a(qs)`
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
`,kl=a(Se)`
  grid-column: span 6;
  height: 200px;
`,Sl=a(Se)`
  grid-column: span 3;
`,Cl=a(Se)`
  grid-column: span 3;
`,$l=a(Se)`
  grid-column: span 4;
  min-height: 180px;
`,Il=a(Se)`
  grid-column: span 4;
  min-height: 60px;
`,El=a(Se)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`,Tl=()=>{const[e,t]=B(null),n=H(o=>{typeof window<"u"&&window.innerWidth>1e3||t(i=>i===o?null:o)},[]);return d(vl,{children:[r(kl,{"data-tapped":e==="roadmap",onClick:()=>n("roadmap"),children:r(Qs,{})}),r(Sl,{"data-tapped":e==="mentorship",onClick:()=>n("mentorship"),children:r(tl,{})}),r(Cl,{"data-tapped":e==="community",onClick:()=>n("community"),children:r(il,{})}),r($l,{"data-tapped":e==="focusTimer",onClick:()=>n("focusTimer"),children:r(pl,{})}),r(El,{"data-tapped":e==="interviewPrep",onClick:()=>n("interviewPrep"),children:r(wl,{})}),r(Il,{"data-tapped":e==="streaks",onClick:()=>n("streaks"),children:r(fl,{})})]})},Yn=A`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Ll(e=.1){const t=W(null),[n,o]=B(!1);return O(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const i=t.current;if(!i)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(o(!0),s.disconnect())},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),[t,n]}const Dl=a.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${L.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`,Pl=a.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${e=>e.$inView&&j`
      animation: ${Yn} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${L.mobile} {
    display: none;
  }
`,Al=a.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`,Ml=a.div`
  min-width: 0;
  opacity: 0;

  ${e=>e.$inView&&j`
      animation: ${Yn} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,zl=()=>{const[e,t]=Ll(.1);return d(Dl,{ref:e,children:[r(Pl,{$inView:t,children:r(Al,{src:Hs,alt:"Phone Screen",loading:"lazy",decoding:"async"})}),r(Ml,{$inView:t,children:r(Tl,{})})]})},Rl=a.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`,jl=a.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Nl=()=>d(Rl,{children:[r(Ct,{}),d(jl,{children:[r(wi,{id:"home"}),r(ua,{}),r(ba,{id:"products"}),r(zl,{}),r(ls,{id:"contact-us"}),r(Vs,{}),r($t,{})]})]}),It={"frontend-development-course":{slug:"frontend-development-course",title:"Frontend Development Course – Learn React, HTML, CSS & JavaScript | Margg",metaDescription:"Master frontend development with Margg's roadmap-based course. Learn React, HTML, CSS, JavaScript, responsive design, and build real-world projects with expert mentorship. Enroll now.",keywords:"frontend development course, learn React, HTML CSS JavaScript course, frontend developer roadmap course, best frontend course India, web development course, UI development, responsive web design course, React course with projects, frontend bootcamp India",heroTitle:"Frontend Development Course",heroSubtitle:"Master Modern Web Development with a Structured Roadmap",heroDescription:"Learn to build beautiful, responsive, and production-ready web applications from scratch. Our roadmap-based frontend development course takes you from HTML basics to advanced React patterns — with real projects, one-on-one mentorship, and interview preparation.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why Choose Margg's Frontend Development Course?",content:`The demand for skilled frontend developers has never been higher. Companies across India and the world are looking for developers who can build fast, accessible, and visually stunning web applications. But most online courses teach isolated topics without connecting them into a career-ready skill set.

Margg's frontend development course is different. We use a roadmap-based learning approach that mirrors how real engineering teams work. Every module builds on the previous one, giving you a clear path from beginner to job-ready developer. You won't just learn syntax — you'll understand architecture, component design, state management, and deployment.

Our course is designed for college students and early-career professionals in India who want to break into the tech industry. Whether you're in Bangalore, Tirupati, Chennai, or anywhere in South India, you can access world-class frontend education with structured learning paths and personalised mentorship.`},{heading:"What You'll Learn",content:"Our comprehensive frontend development curriculum covers everything you need to become a professional web developer:",list:["HTML5 & Semantic Markup – Build accessible, SEO-friendly page structures from day one","CSS3 & Modern Layouts – Master Flexbox, Grid, animations, and responsive design","JavaScript ES6+ – Variables, functions, closures, promises, async/await, and DOM manipulation","React.js – Components, hooks, context, routing, state management with Redux Toolkit","TypeScript Fundamentals – Add type safety to your JavaScript projects","Version Control with Git – Branching, merging, pull requests, and collaborative workflows","API Integration – Fetch data from REST APIs, handle loading and error states","Testing – Unit tests with Jest, component tests with React Testing Library","Performance Optimization – Code splitting, lazy loading, lighthouse audits, Core Web Vitals","Deployment – Ship to Vercel, Netlify, and AWS with CI/CD pipelines","UI/UX Principles – Design systems, accessibility (WCAG), and user-centered design"]},{heading:"Roadmap-Based Learning Approach",content:`Unlike traditional courses that dump video lectures on you, Margg uses visual roadmaps to guide your learning journey. Each roadmap shows you exactly what to learn, in what order, and why it matters.

You start with the fundamentals — HTML structure, CSS styling, JavaScript logic. Then the roadmap branches into intermediate topics like responsive design, component architecture, and state management. Finally, you tackle advanced concepts like server-side rendering, performance optimization, and system design for frontend applications.

Every milestone on the roadmap includes hands-on projects, quizzes, and mentor check-ins. You can track your streaks, earn certifications, and build a portfolio that impresses hiring managers. This is not passive learning — it's structured, intentional skill building designed to make you job-ready in 16 weeks.`},{heading:"Real-World Projects You'll Build",content:"Theory without practice is useless. That's why every module in our frontend development course includes real-world projects that you can add to your portfolio:",list:["Personal Portfolio Website – Responsive, animated, deployed to a custom domain","E-Commerce Product Page – Dynamic product listings, cart functionality, API integration","Social Media Dashboard – Real-time data visualization, infinite scroll, state management","Collaborative Task Manager – Multi-user app with authentication, CRUD operations, and real-time updates","Component Library – Build and publish your own reusable React component library to npm"]},{heading:"One-on-One Mentorship & Interview Prep",content:`Margg's mentorship program pairs you with experienced frontend developers from top companies. Your mentor reviews your code, provides feedback on your projects, and helps you navigate your career path.

As part of the course, you also get access to our interview preparation module. This includes mock technical interviews, common frontend interview questions (React lifecycle, closures, event delegation, CSS specificity), system design discussions, and behavioral interview coaching.

Our students have landed roles at startups, mid-size companies, and MNCs across Bangalore, Hyderabad, Chennai, and Pune. With Margg's structured preparation, you'll walk into interviews with confidence.`},{heading:"Who Is This Course For?",content:"This frontend development course is ideal for:",list:["College students (2nd to 4th year) in CS, IT, or related branches looking to build practical skills alongside their degree","Fresh graduates who want to become job-ready frontend developers within 4 months","Career switchers from non-tech backgrounds who want to enter the software industry","Self-taught developers who need structure, mentorship, and portfolio projects to level up","Anyone in India looking for the best frontend development course with placement support"]},{heading:"Course Structure & Duration",content:`The frontend development course runs for 16 weeks, with 3 live sessions per week and self-paced assignments:

• Weeks 1–4: HTML, CSS, JavaScript Fundamentals
• Weeks 5–8: Advanced CSS, Responsive Design, Git & Collaboration
• Weeks 9–12: React.js, State Management, API Integration
• Weeks 13–14: Testing, Performance, Deployment
• Weeks 15–16: Capstone Project, Interview Prep, Portfolio Polish

Each week includes 2 hours of live instruction, 1 mentor session, and 5–8 hours of hands-on practice. All sessions are recorded and available on-demand.`}],faqs:[{question:"Do I need prior programming experience for this frontend development course?",answer:"No prior experience is required. Our roadmap starts from the absolute basics — HTML structure and CSS styling. However, basic computer literacy and a willingness to practice daily will help you progress faster."},{question:"What is the duration of the frontend development course?",answer:"The full course runs for 16 weeks (4 months) with a commitment of approximately 12-15 hours per week including live sessions, self-paced learning, and project work."},{question:"Will I get a certificate after completing the course?",answer:"Yes. Upon completing all modules and the capstone project, you receive a Margg Frontend Development Certificate that you can add to your LinkedIn profile and resume."},{question:"Is this course suitable for college students?",answer:"Absolutely. The course is specifically designed for college students in India. The schedule is flexible, and all live sessions are recorded so you can watch them at your convenience."},{question:"Do you provide placement support?",answer:"Yes. Our program includes resume reviews, portfolio building, mock interviews, and connections to our hiring partner network. We also have a dedicated Job Board within the Margg platform."},{question:"What technologies will I learn?",answer:"You'll master HTML5, CSS3, JavaScript (ES6+), React.js, Redux Toolkit, TypeScript basics, Git, and deployment tools like Vercel and Netlify. You'll also learn testing with Jest and React Testing Library."},{question:"How is this different from free YouTube tutorials?",answer:"Free tutorials are fragmented and lack structure. Margg provides a complete learning roadmap, real projects, mentor feedback, peer community, streak tracking, and interview preparation — everything you need in one platform."},{question:"Can I access the course from anywhere in India?",answer:"Yes. All live sessions are online and recorded. Whether you're in Bangalore, Chennai, Tirupati, Hyderabad, or any other city, you can access the full course and mentorship remotely."}]},"backend-development-course":{slug:"backend-development-course",title:"Backend Development Course – Learn Node.js, APIs, Databases & System Design | Margg",metaDescription:"Master backend development with Margg's structured roadmap. Learn Node.js, Express, MongoDB, PostgreSQL, REST APIs, authentication, and system design with real-world projects and mentorship.",keywords:"backend development course, learn Node.js, API development course, backend developer roadmap, best backend course India, server-side programming, database design course, system design course, backend bootcamp India, job ready software courses",heroTitle:"Backend Development Course",heroSubtitle:"Build Scalable Server-Side Applications with Expert Guidance",heroDescription:"Learn to architect and build robust backends that power real applications. From RESTful APIs and database design to authentication, caching, and deployment — our roadmap-based course prepares you for production-grade backend engineering.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why Backend Development Matters",content:`Every application you use — from food delivery apps to banking platforms — depends on a well-architected backend. Backend developers build the APIs, manage databases, handle authentication, process payments, and ensure applications scale to millions of users.

The demand for backend developers in India is growing rapidly. Companies need engineers who understand not just how to write server-side code, but how to design systems that are secure, performant, and maintainable. Margg's backend development course gives you exactly these skills through structured, roadmap-based learning.

Whether you want to work at a startup shipping features fast or an enterprise building distributed systems, this course prepares you for the real challenges of backend engineering.`},{heading:"What You'll Learn",content:"Our backend development curriculum is comprehensive and industry-aligned:",list:["JavaScript/TypeScript on the Server – Node.js runtime, event loop, async patterns","Express.js Framework – Routing, middleware, error handling, request validation","RESTful API Design – Resource modeling, HTTP methods, status codes, versioning, pagination","Database Design – Relational (PostgreSQL) and NoSQL (MongoDB) modeling, migrations, indexing","Authentication & Authorization – JWT, OAuth 2.0, session management, role-based access control","Data Validation & Security – Input sanitization, SQL injection prevention, rate limiting, CORS","Caching & Performance – Redis caching strategies, query optimization, connection pooling","Testing – Unit tests, integration tests, API testing with Supertest and Jest","System Design Fundamentals – Load balancing, horizontal scaling, message queues, microservices patterns","DevOps & Deployment – Docker containers, CI/CD pipelines, AWS/GCP basics, monitoring and logging","Real-time Features – WebSockets, Server-Sent Events, pub/sub patterns"]},{heading:"Structured Roadmap for Backend Mastery",content:`Backend development can feel overwhelming — databases, servers, APIs, security, deployment. Without a clear path, most learners get stuck jumping between topics.

Margg's roadmap solves this. We've mapped out the optimal learning sequence based on how concepts build on each other. You start with Node.js fundamentals and basic API creation. Then you progressively add database integration, authentication, error handling, and testing. By the final weeks, you're building complete backend systems with caching, real-time features, and cloud deployment.

Every step on the roadmap includes hands-on coding exercises, mentor-reviewed assignments, and a project milestone. You always know where you are, what's next, and why it matters. This is structured learning designed for results, not random tutorial hopping.`},{heading:"Projects That Prove Your Skills",content:"Employers don't care about course certificates — they care about what you can build. Our backend course includes portfolio-worthy projects:",list:["RESTful Blog API – CRUD operations, authentication, pagination, search, file uploads","E-Commerce Backend – Product catalog, shopping cart, order processing, payment integration","Real-Time Chat Server – WebSocket-based messaging, user presence, message persistence","URL Shortener Service – High-throughput link shortening with analytics and rate limiting","Capstone: Full-Stack Application Backend – Complete production-grade API with documentation, tests, monitoring, and deployment"]},{heading:"Mentorship & Career Support",content:`Your Margg mentor is a working backend engineer who understands what it takes to succeed in the industry. They review your code architecture, discuss trade-offs in system design, and help you prepare for technical interviews.

The interview preparation module covers the most common backend interview topics: database normalization, indexing strategies, REST vs GraphQL, scaling patterns, and the classic system design questions (design a URL shortener, design Twitter's feed, design a rate limiter).

Our graduates have secured backend engineering roles at companies across India, including in Bangalore, Hyderabad, Pune, and Delhi NCR. Whether you're targeting product companies, service companies, or startups, we prepare you to clear the interviews.`},{heading:"Who Should Enroll?",content:"This backend development course is designed for:",list:["College students wanting to add backend engineering skills to complement their frontend knowledge","Frontend developers looking to become full-stack engineers","Fresh graduates aiming for backend developer roles in top companies","Self-taught programmers who need structured learning and mentorship","Anyone in India seeking the best backend development course with job placement support"]},{heading:"Course Structure & Timeline",content:`The backend development course spans 16 weeks:

• Weeks 1–3: JavaScript Deep Dive, Node.js Fundamentals, Express.js
• Weeks 4–6: Database Design (PostgreSQL + MongoDB), ORM/ODM
• Weeks 7–9: Authentication, Security, API Design Patterns
• Weeks 10–12: Caching, Real-time Features, Testing
• Weeks 13–14: System Design, Docker, Deployment, Monitoring
• Weeks 15–16: Capstone Project, Interview Prep, Resume Building

Commitment: ~12-15 hours per week. All sessions are live and recorded.`}],faqs:[{question:"Do I need to know frontend development before taking this backend course?",answer:"No. This course focuses entirely on backend skills. However, basic JavaScript knowledge is recommended. We cover Node.js from the ground up, but familiarity with variables, functions, and basic syntax will help you start faster."},{question:"Which programming language is used in this course?",answer:"The primary language is JavaScript/TypeScript running on Node.js with Express.js. We chose this stack because it's the most in-demand for full-stack roles in India, and it allows frontend developers to transition to backend smoothly."},{question:"Will I learn both SQL and NoSQL databases?",answer:"Yes. You'll work with PostgreSQL (relational) and MongoDB (document-based). You'll understand when to use each, how to model data effectively, write queries, handle migrations, and optimize performance."},{question:"Is system design covered in this course?",answer:"Yes. The final weeks cover system design fundamentals — load balancing, horizontal scaling, caching strategies, message queues, and common interview design problems. This prepares you for mid-level backend interviews."},{question:"Can I take this course alongside my college studies?",answer:"Absolutely. The schedule is flexible with 3 live sessions per week plus self-paced work. All sessions are recorded, so you can watch them at your own pace."},{question:"What career support do you provide?",answer:"You receive resume reviews, mock technical interviews, system design practice sessions, and access to our hiring partner network through the Margg Job Board."}]},"ui-ux-course":{slug:"ui-ux-course",title:"UI/UX Design Course with Projects – Learn User Interface & Experience Design | Margg",metaDescription:"Master UI/UX design with Margg's project-based course. Learn Figma, design systems, user research, wireframing, prototyping, and build a professional portfolio. Best UI UX course in India.",keywords:"UI UX course with projects, UI UX design course, learn Figma, user experience design course, UI design fundamentals, best UX course India, design thinking course, wireframing, prototyping course, UI UX bootcamp India",heroTitle:"UI/UX Design Course",heroSubtitle:"Design Beautiful, User-Centered Digital Experiences",heroDescription:"Learn to create interfaces that users love. From user research and wireframing to high-fidelity prototypes and design systems — our project-based UI/UX course equips you with the skills that product teams are hiring for.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why UI/UX Design Is the Most In-Demand Skill",content:`Every digital product — from mobile apps to enterprise software — needs thoughtful design. Companies have realized that good UI/UX isn't a luxury; it's the difference between a product users love and one they abandon. The demand for UI/UX designers in India has grown by over 200% in the last three years.

But becoming a great designer isn't just about making things look pretty. It's about understanding users, solving problems, and creating experiences that are intuitive, accessible, and delightful. Margg's UI/UX design course teaches you the complete design process — from research to final hand-off to developers.

Whether you want to work as a product designer at a startup, a UX researcher at a large company, or a freelance UI designer, this course gives you the portfolio and skills to get there.`},{heading:"Course Curriculum",content:"Our UI/UX curriculum covers the entire design lifecycle:",list:["Design Thinking & User Research – User interviews, surveys, persona creation, journey mapping","Information Architecture – Content hierarchy, navigation patterns, card sorting, site maps","Wireframing & Low-Fidelity Prototyping – Rapid sketching, Figma wireframes, user flow diagrams","Visual Design Fundamentals – Typography, color theory, spacing systems, visual hierarchy, grids","Figma Mastery – Components, auto-layout, variants, design tokens, prototyping, collaboration","Design Systems – Building component libraries, documentation, design tokens, atomic design methodology","High-Fidelity Prototyping – Interactive prototypes, micro-animations, transitions, user testing","Accessibility (WCAG) – Inclusive design principles, color contrast, screen reader compatibility","Responsive & Mobile-First Design – Breakpoints, adaptive layouts, touch targets, mobile UX patterns","Usability Testing – A/B testing, heuristic evaluation, user testing sessions, analyzing feedback","Developer Handoff – Design specs, asset export, design-to-code workflows, design QA"]},{heading:"Learn by Building Real Projects",content:`Design is a craft that improves with practice. Our course is built around real-world projects that become your professional portfolio:

Every project follows the full design process — research, wireframe, design, prototype, test, and iterate. You'll receive feedback from your mentor at each stage, learning to defend your design decisions and incorporate user feedback. By the end of the course, you'll have 4-5 polished case studies in your portfolio.`,list:["Mobile App Redesign – Take an existing app and improve its UX through user research and iterative design","E-Commerce Website Design – Complete responsive design with product pages, cart, checkout flow","SaaS Dashboard – Data visualization, complex forms, multi-step workflows, empty states","Design System – Build a production-ready component library with documentation and usage guidelines","Capstone: End-to-End Product Design – From user research to final prototype for a real product brief"]},{heading:"Tools You'll Master",content:`We focus on industry-standard tools that hiring managers expect you to know:

• Figma – The primary design tool used by most product teams. You'll learn components, auto-layout, variants, prototyping, and collaboration features.
• FigJam – For brainstorming, user flow mapping, and workshop facilitation.
• Maze / Useberry – For unmoderated usability testing and gathering quantitative UX data.

You don't need any prior design tool experience. We start from scratch and build expertise through daily practice.`},{heading:"Mentorship from Working Designers",content:`Your Margg mentor is a practising product designer or UX designer who reviews your work, provides portfolio feedback, and shares real-world insights about the design industry.

Mentor sessions include design critiques (reviewing your work with actionable feedback), portfolio reviews (ensuring your case studies tell compelling stories), and interview coaching (whiteboard design challenges, portfolio presentations, and behavioral questions).

Our design graduates have secured roles at product companies, design agencies, and startups across India. The mentorship component is what transforms a course into a career launchpad.`},{heading:"Who Is This Course For?",content:"This UI/UX course is perfect for:",list:["College students interested in product design, visual design, or UX research careers","Frontend developers who want to understand design principles and collaborate better with designers","Graphic designers transitioning to digital product design","Marketing professionals who want to understand UX for better conversion optimization","Anyone in India looking for the best UI/UX design course with real projects and mentorship"]},{heading:"Course Duration & Format",content:`The UI/UX design course runs for 12 weeks:

• Weeks 1–3: Design Thinking, User Research, Information Architecture
• Weeks 4–6: Visual Design, Typography, Figma Fundamentals
• Weeks 7–9: Component Design, Design Systems, High-Fidelity Prototyping
• Weeks 10–11: Usability Testing, Accessibility, Responsive Design
• Week 12: Capstone Project, Portfolio Polish, Interview Prep

Commitment: ~10-12 hours per week with live sessions and self-paced design projects.`}],faqs:[{question:"Do I need to know how to code to take this UI/UX course?",answer:"No coding skills are required. This course focuses on design thinking, visual design, and Figma. However, understanding basic HTML/CSS concepts can help you design more implementable interfaces."},{question:"What tool is used in this course?",answer:"Figma is our primary design tool. It's free to use, works in the browser, and is the industry standard for product design. You'll also use FigJam for brainstorming and user flow mapping."},{question:"Will I have a portfolio at the end of the course?",answer:"Yes. You'll build 4-5 complete case studies throughout the course, each following the full design process from research to final prototype. Your mentor helps you polish these into portfolio-ready presentations."},{question:"Is this course suitable for someone with no design background?",answer:"Absolutely. We start with design fundamentals and progressively build your skills. Many of our successful graduates had zero design experience when they started."},{question:"What job roles can I apply for after this course?",answer:"Graduates typically apply for UI Designer, UX Designer, Product Designer, UX Researcher, Interaction Designer, and Visual Designer roles. Some also pursue freelance design work."},{question:"How is this different from YouTube design tutorials?",answer:"YouTube teaches scattered skills. Margg provides a structured roadmap, real projects with mentor feedback, portfolio building, usability testing practice, and interview preparation — the full package to become employable."}]},"data-analysis-course":{slug:"data-analysis-course",title:"Data Analysis Course – Learn Python, SQL, Excel & Data Visualization | Margg",metaDescription:"Master data analysis with Margg's roadmap-based course. Learn Python, SQL, Excel, Pandas, data visualization with real datasets, and prepare for analyst roles at top companies in India.",keywords:"data analysis course, learn Python for data analysis, SQL course India, data visualization course, best data analysis course India, Excel analytics course, Pandas course, learn programming roadmap India, data analyst bootcamp, business analytics course",heroTitle:"Data Analysis Course",heroSubtitle:"Turn Raw Data into Actionable Insights",heroDescription:"Learn to clean, analyze, and visualize data using Python, SQL, and modern analytics tools. Our roadmap-based course takes you from spreadsheet basics to building dashboards that drive business decisions — with real datasets and industry mentorship.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why Data Analysis Is a Career Superpower",content:`Data is the new oil, and every company — from startups to Fortune 500s — needs people who can extract meaning from it. Data analysts are among the most in-demand professionals in India, with salaries growing year over year and opportunities across every industry.

But data analysis isn't just about running SQL queries or making charts. It's about asking the right questions, cleaning messy real-world data, finding patterns that matter, and communicating insights that drive decisions. Margg's data analysis course teaches you the complete analyst toolkit.

Whether you want to work in tech, finance, healthcare, or e-commerce, data analysis skills open doors across every sector. Our roadmap-based approach ensures you learn the right skills in the right order, building from fundamentals to advanced analytics.`},{heading:"What You'll Learn",content:"Our data analysis curriculum covers everything from spreadsheet fundamentals to Python-powered analytics:",list:["Excel & Google Sheets – Pivot tables, VLOOKUP, conditional formatting, data cleaning, dashboards","SQL for Analytics – SELECT, JOIN, GROUP BY, window functions, subqueries, query optimization","Python Fundamentals – Variables, data types, loops, functions, file I/O, error handling","Pandas & NumPy – DataFrames, data cleaning, transformation, aggregation, merging datasets","Data Visualization – Matplotlib, Seaborn, Plotly for charts, graphs, and interactive visualizations","Statistics for Analysts – Descriptive statistics, probability, distributions, hypothesis testing, correlation","Data Cleaning & Wrangling – Handling missing values, outliers, data types, normalization, feature engineering","Dashboard Building – Create interactive dashboards that tell compelling data stories","Business Analytics – KPIs, metrics, funnel analysis, cohort analysis, A/B test interpretation","Reporting & Communication – Structuring findings, presenting to stakeholders, data storytelling"]},{heading:"Roadmap-Based Learning for Data Skills",content:`Data analysis combines multiple disciplines — statistics, programming, domain knowledge, and communication. Without a clear learning path, it's easy to feel overwhelmed. Should you learn Python first or SQL? When do you need statistics?

Margg's roadmap answers these questions. We've designed the optimal learning sequence based on how concepts build on each other. You start with Excel and basic data manipulation (skills you'll use daily). Then you add SQL for querying databases. Python comes next, with Pandas for powerful data transformation. Statistics weave through every module with practical applications.

Every milestone has hands-on exercises with real datasets — not toy examples. You'll work with e-commerce transaction data, social media metrics, financial datasets, and public health data. By the end, you can tackle any dataset your future employer throws at you.`},{heading:"Real-World Projects",content:"Your portfolio as a data analyst matters more than any certificate. Our projects use real-world datasets and business scenarios:",list:["Sales Performance Dashboard – Analyze retail sales data, build KPI dashboards, identify trends and seasonality","Customer Segmentation Analysis – Use clustering techniques to segment customers by behavior and value","A/B Test Analysis – Analyze experiment results, calculate statistical significance, make data-driven recommendations","Social Media Analytics – Track engagement metrics, sentiment patterns, and content performance across platforms","Capstone: End-to-End Analytics Project – From data collection to executive presentation for a real business problem"]},{heading:"Mentorship & Career Preparation",content:`Your Margg mentor is a working data analyst or data scientist who guides your learning and career preparation. They review your analysis methodology, challenge your assumptions, and teach you to think like an analyst.

The interview preparation module covers SQL query challenges, Python data manipulation problems, case study presentations, and behavioral questions specific to analyst roles. You'll also learn how to build a compelling GitHub portfolio of data projects.

Data analyst roles are available across India — in Bangalore, Hyderabad, Mumbai, Delhi NCR, and Pune. Our graduates have secured positions at product companies, consulting firms, analytics startups, and established enterprises.`},{heading:"Who Should Take This Course?",content:"This data analysis course is designed for:",list:["College students in any branch who want to add data skills to their resume","Business and commerce graduates looking to enter the analytics industry","Marketing and operations professionals who want to become data-driven decision makers","Software developers interested in transitioning to data engineering or data science roles","Anyone in India looking for a structured, project-based data analysis course with mentorship"]},{heading:"Course Structure",content:`The data analysis course runs for 14 weeks:

• Weeks 1–2: Excel Mastery, Data Fundamentals, Basic Statistics
• Weeks 3–5: SQL for Analytics, Database Querying, Data Modeling
• Weeks 6–8: Python Fundamentals, Pandas, NumPy
• Weeks 9–11: Data Visualization, Dashboard Building, Advanced Analytics
• Weeks 12–13: Business Analytics, Case Studies, Statistical Analysis
• Week 14: Capstone Project, Portfolio Polish, Interview Preparation

Commitment: ~12-15 hours per week including live sessions, exercises, and project work.`}],faqs:[{question:"Do I need a technical background for this data analysis course?",answer:"No. We start with Excel and basic data concepts, then progressively introduce SQL and Python. Students from commerce, arts, science, and engineering backgrounds have all succeeded in this course."},{question:"Which programming language is taught?",answer:"Python, which is the most popular language for data analysis. You'll specifically learn Pandas, NumPy, Matplotlib, and Seaborn — the core data analysis stack. We also teach SQL extensively for database querying."},{question:"Will I learn data visualization and dashboards?",answer:"Yes. Data visualization is a major focus. You'll learn to create charts, graphs, and interactive dashboards using Python libraries and understand principles of effective data storytelling."},{question:"Can this course help me get into data science?",answer:"Absolutely. Data analysis is the foundation of data science. After completing this course, you'll have the programming, statistics, and data manipulation skills needed to pursue machine learning and advanced data science topics."},{question:"What kind of job roles can I target after this course?",answer:"Common roles include Data Analyst, Business Analyst, Operations Analyst, Marketing Analyst, and Junior Data Scientist. These roles are available across industries including tech, finance, healthcare, and e-commerce."},{question:"Are there real datasets used in the course?",answer:"Yes. Every project uses real-world datasets — not toy examples. You'll work with actual e-commerce transaction data, social media metrics, financial data, and public datasets from government and research sources."}]}},pn=a.div`
  background: #090215;
  min-height: 100vh;
`,un=a.section`
  position: relative;
  padding: 160px var(--pad, clamp(24px, 7vw, 120px)) 80px;
  text-align: center;
  background:
    radial-gradient(700px circle at 30% 20%, rgba(176,149,227,0.18), transparent 60%),
    radial-gradient(600px circle at 70% 80%, rgba(80,19,192,0.15), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 48px;
  }
`,hn=a.div`
  max-width: 860px;
  margin: 0 auto;
`,Bl=a.nav`
  margin-bottom: 24px;
  font-family: ${S.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,gn=a.h1`
  font-family: ${S.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Ol=a.p`
  font-family: ${S.body};
  font-size: clamp(18px, 2.5vw, 24px);
  color: #D3C4EF;
  margin: 0 0 16px;
  font-weight: 400;
`,Wl=a.p`
  font-family: ${S.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`,mn=a.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${S.body};
  font-size: 18px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid #D3C4EF;
  box-shadow: 0 4px 24px rgba(176,149,227,0.5);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 32px rgba(176,149,227,0.65);
  }
`,_l=a.main`
  max-width: ${ve};
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`,Fl=a.article`
  max-width: 820px;
  margin: 0 auto;
`,Yl=a.section`
  margin-bottom: 56px;
`,Ul=a.h2`
  font-family: ${S.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,fn=a.p`
  font-family: ${S.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`,Vl=a.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`,Hl=a.li`
  font-family: ${S.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`,ql=a.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,Gl=a.h2`
  font-family: ${S.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`,Xl=a.details`
  border: 1px solid rgba(176,149,227,0.2);
  border-radius: 12px;
  margin-bottom: 12px;
  background: rgba(211,196,239,0.04);
  overflow: hidden;
  transition: all 0.3s ease;

  &[open] {
    background: rgba(211,196,239,0.08);
    border-color: rgba(176,149,227,0.35);
  }
`,Jl=a.summary`
  font-family: ${S.body};
  font-size: 17px;
  font-weight: 600;
  color: #EEE7F9;
  padding: 20px 24px;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  &::-webkit-details-marker { display: none; }

  &::after {
    content: "+";
    font-size: 22px;
    color: #B095E3;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  details[open] > & {
    &::after {
      content: "−";
    }
  }
`,Ql=a.div`
  font-family: ${S.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`,Kl=a.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,Zl=a.h2`
  font-family: ${S.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`,ec=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`,tc=a(yn)`
  display: block;
  padding: 24px;
  border: 1px solid rgba(176,149,227,0.2);
  border-radius: 16px;
  background: rgba(211,196,239,0.05);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.5);
    background: rgba(211,196,239,0.1);
    transform: translateY(-2px);
  }
`,nc=a.h3`
  font-family: ${S.heading};
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 8px;
  text-transform: uppercase;
`,rc=a.p`
  font-family: ${S.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.5;
  margin: 0;
`,oc=Object.keys(It);function ic(){const{slug:e}=Xn(),t=It[e];if(!t)return d(pn,{children:[r(Ct,{}),r(un,{children:d(hn,{children:[r(gn,{children:"Course Not Found"}),r(fn,{children:"The course you're looking for doesn't exist."}),r(mn,{href:"/",children:"Back to Home"})]})}),r($t,{})]});const n=oc.filter(o=>o!==e).map(o=>It[o]);return d(pn,{children:[r(Ct,{}),r(un,{children:d(hn,{children:[d(Bl,{children:[r(yn,{to:"/",children:"Home"})," / ",r("span",{children:t.heroTitle})]}),r(gn,{children:t.heroTitle}),r(Ol,{children:t.heroSubtitle}),r(Wl,{children:t.heroDescription}),r(mn,{href:`/${t.ctaHash}`,children:t.ctaText})]})}),r(_l,{children:r(Fl,{children:t.sections.map((o,i)=>d(Yl,{children:[r(Ul,{children:o.heading}),r(fn,{children:o.content}),o.list&&r(Vl,{children:o.list.map((s,l)=>r(Hl,{children:s},l))})]},i))})}),t.faqs?.length>0&&d(ql,{children:[r(Gl,{children:"Frequently Asked Questions"}),t.faqs.map((o,i)=>d(Xl,{children:[r(Jl,{children:o.question}),r(Ql,{children:o.answer})]},i))]}),d(Kl,{children:[r(Zl,{children:"Explore Other Courses"}),r(ec,{children:n.map(o=>d(tc,{to:`/${o.slug}`,children:[r(nc,{children:o.heroTitle}),r(rc,{children:o.heroSubtitle})]},o.slug))})]}),r($t,{})]})}function ac(){return d(Jn,{children:[r(Ot,{path:"/",element:r(Nl,{})}),r(Ot,{path:"/:slug",element:r(ic,{})})]})}async function vc(e,t){const n=er({reducer:{app:Yr,content:no}}),o=t._source??"fallback",{_source:i,...s}=t;n.dispatch(to({data:s,source:o}));const l=new _r;try{const u=qn(l.collectStyles(r(Zn,{store:n,children:r(Qn,{location:e,children:r(ac,{})})}))),p=l.getStyleTags();return{html:u,styleTags:p,state:n.getState()}}finally{l.seal()}}export{vc as render};
