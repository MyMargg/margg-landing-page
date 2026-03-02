import{jsxs as c,Fragment as Re,jsx as n}from"react/jsx-runtime";import z,{createElement as Pi,useState as F,useRef as j,useEffect as N,useCallback as V,useMemo as Ae}from"react";import{renderToString as zi}from"react-dom/server";import{useNavigate as ti,useLocation as Bi,useParams as Xt,Link as G,Routes as Ri,Route as Pe,StaticRouter as Fi}from"react-router-dom";import{useSelector as Oi,Provider as Ni}from"react-redux";import{createSlice as ni,configureStore as ji}from"@reduxjs/toolkit";import{__spreadArray as ae,__assign as Y}from"tslib";import Wi from"@emotion/is-prop-valid";import*as ge from"stylis";import _i from"@emotion/unitless";var re=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ii="active",Ke="data-styled-version",we="6.3.11",Kt=`/*!sc*/
`,Fe=typeof window<"u"&&typeof document<"u",ie=z.createContext===void 0,Hi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),Ui=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function qi(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=e[0],r=[],o=1,s=e.length;o<s;o+=1)r.push(e[o]);return r.forEach(function(l){i=i.replace(/%[a-z]/,l)}),i}function Z(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):"")):new Error(qi.apply(void 0,ae([Ui[e]],t,!1)).trim())}var Vi=1<<30,Qe=new Map,Ze=new Map,Je=1,ve=function(e){if(Qe.has(e))return Qe.get(e);for(;Ze.has(Je);)Je++;var t=Je++;if(process.env.NODE_ENV!=="production"&&((0|t)<0||t>Vi))throw Z(16,"".concat(t));return Qe.set(e,t),Ze.set(t,e),t},Yi=function(e,t){Je=t+1,Qe.set(e,t),Ze.set(t,e)},pn=/invalid hook call/i,_e=new Set,Gi=function(e,t){if(process.env.NODE_ENV!=="production"){if(ie)return;var i=t?' with the id of "'.concat(t,'"'):"",r="The component ".concat(e).concat(i,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`,o=console.error;try{var s=!0;console.error=function(l){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];pn.test(l)?(s=!1,_e.delete(r)):o.apply(void 0,ae([l],u,!1))},typeof z.useState=="function"&&z.useState(null),s&&!_e.has(r)&&(console.warn(r),_e.add(r))}catch(l){pn.test(l.message)&&_e.delete(r)}finally{console.error=o}}},Zt=Object.freeze([]),ke=Object.freeze({});function Qi(e,t,i){return i===void 0&&(i=ke),e.theme!==i.theme&&e.theme||t||i.theme}var Nt=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Ji=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xi=/(^-|-$)/g;function un(e){return e.replace(Ji,"-").replace(Xi,"")}var Ki=/(a)(d)/gi,gn=function(e){return String.fromCharCode(e+(e>25?39:97))};function jt(e){var t,i="";for(t=Math.abs(e);t>52;t=t/52|0)i=gn(t%52)+i;return(gn(t%52)+i).replace(Ki,"$1-$2")}var gt,se=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},ai=function(e){return se(5381,e)};function ri(e){return jt(ai(e)>>>0)}function oi(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function ht(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var si=typeof Symbol=="function"&&Symbol.for,li=si?Symbol.for("react.memo"):60115,Zi=si?Symbol.for("react.forward_ref"):60112,ea={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ta={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ci={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},na=((gt={})[Zi]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gt[li]=ci,gt);function hn(e){return("type"in(t=e)&&t.type.$$typeof)===li?ci:"$$typeof"in e?na[e.$$typeof]:ea;var t}var ia=Object.defineProperty,aa=Object.getOwnPropertyNames,mn=Object.getOwnPropertySymbols,ra=Object.getOwnPropertyDescriptor,oa=Object.getPrototypeOf,fn=Object.prototype;function di(e,t,i){if(typeof t!="string"){if(fn){var r=oa(t);r&&r!==fn&&di(e,r,i)}var o=aa(t);mn&&(o=o.concat(mn(t)));for(var s=hn(e),l=hn(t),u=0;u<o.length;++u){var d=o[u];if(!(d in ta||i&&i[d]||l&&d in l||s&&d in s)){var f=ra(t,d);try{ia(e,d,f)}catch{}}}}return e}function Se(e){return typeof e=="function"}function en(e){return typeof e=="object"&&"styledComponentId"in e}function me(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function et(e,t){return e.join(t||"")}function Ce(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wt(e,t,i){if(i===void 0&&(i=!1),!i&&!Ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wt(e[r],t[r]);else if(Ce(t))for(var r in t)e[r]=Wt(e[r],t[r]);return e}function tn(e,t){Object.defineProperty(e,"toString",{value:t})}var sa=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var i=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)i+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)i-=this.groupSizes[r];return this._cGroup=t,this._cIndex=i,i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,s=o;t>=s;)if((s<<=1)<0)throw Z(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var l=o;l<s;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),d=0,f=(l=0,i.length);l<f;l++)this.tag.insertRule(u,i[l])&&(this.groupSizes[t]++,u++,d++);d>0&&this._cGroup>t&&(this._cIndex+=d)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],r=this.indexOfGroup(t),o=r+i;this.groupSizes[t]=0;for(var s=r;s<o;s++)this.tag.deleteRule(r);i>0&&this._cGroup>t&&(this._cIndex-=i)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),s=o+r,l=o;l<s;l++)i+=this.tag.getRule(l)+Kt;return i},e})(),la="style[".concat(re,"][").concat(Ke,'="').concat(we,'"]'),ca=new RegExp("^".concat(re,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xn=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},_t=function(e){if(!e)return document;if(xn(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(xn(t))return t}return document},da=function(e,t,i){for(var r,o=i.split(","),s=0,l=o.length;s<l;s++)(r=o[s])&&e.registerName(t,r)},pa=function(e,t){for(var i,r=((i=t.textContent)!==null&&i!==void 0?i:"").split(Kt),o=[],s=0,l=r.length;s<l;s++){var u=r[s].trim();if(u){var d=u.match(ca);if(d){var f=0|parseInt(d[1],10),h=d[2];f!==0&&(Yi(h,f),da(e,h,d[3]),e.getTag().insertRules(f,o)),o.length=0}else o.push(u)}}},mt=function(e){for(var t=_t(e.options.target).querySelectorAll(la),i=0,r=t.length;i<r;i++){var o=t[i];o&&o.getAttribute(re)!==ii&&(pa(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Ht(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pi=function(e){var t=document.head,i=e||t,r=document.createElement("style"),o=(function(u){var d=Array.from(u.querySelectorAll("style[".concat(re,"]")));return d[d.length-1]})(i),s=o!==void 0?o.nextSibling:null;r.setAttribute(re,ii),r.setAttribute(Ke,we);var l=Ht();return l&&r.setAttribute("nonce",l),i.insertBefore(r,s),r},ua=(function(){function e(t){this.element=pi(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){var r;if(i.sheet)return i.sheet;for(var o=(r=i.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,s=0,l=o.length;s<l;s++){var u=o[s];if(u.ownerNode===i)return u}throw Z(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e})(),ga=(function(){function e(t){this.element=pi(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),ha=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(t===this.length?this.rules.push(i):this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),bn=Fe,ma={isServer:!Fe,useCSSOMInjection:!Hi},nn=(function(){function e(t,i,r){t===void 0&&(t=ke),i===void 0&&(i={});var o=this;this.options=Y(Y({},ma),t),this.gs=i,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fe&&bn&&(bn=!1,mt(this)),tn(this,function(){return(function(s){for(var l=s.getTag(),u=l.length,d="",f=function(x){var k=(function(A){return Ze.get(A)})(x);if(k===void 0)return"continue";var S=s.names.get(k);if(S===void 0||!S.size)return"continue";var C=l.getGroup(x);if(C.length===0)return"continue";var M=re+".g"+x+'[id="'+k+'"]',L="";S.forEach(function(A){A.length>0&&(L+=A+",")}),d+=C+M+'{content:"'+L+'"}'+Kt},h=0;h<u;h++)f(h);return d})(o)})}return e.registerId=function(t){return ve(t)},e.prototype.rehydrate=function(){!this.server&&Fe&&mt(this)},e.prototype.reconstructWithOptions=function(t,i){i===void 0&&(i=!0);var r=new e(Y(Y({},this.options),t),this.gs,i&&this.names||void 0);return!this.server&&Fe&&t.target!==this.options.target&&_t(this.options.target)!==_t(t.target)&&mt(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(i){var r=i.useCSSOMInjection,o=i.target;return i.isServer?new ha(o):r?new ua(o):new ga(o)})(this.options),new sa(t)));var t},e.prototype.hasNameForId=function(t,i){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(i))!==null&&o!==void 0&&o},e.prototype.registerName=function(t,i){ve(t);var r=this.names.get(t);r?r.add(i):this.names.set(t,new Set([i]))},e.prototype.insertRules=function(t,i,r){this.registerName(t,i),this.getTag().insertRules(ve(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ve(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),fa=/&/g,ne=47,he=42;function yn(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,i=0,r=0,o=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(r!==0||o||l!==ne||e.charCodeAt(s+1)!==he)if(o)l===he&&e.charCodeAt(s+1)===ne&&(o=!1,s++);else if(l!==34&&l!==39||s!==0&&e.charCodeAt(s-1)===92){if(r===0){if(l===123)i++;else if(l===125&&--i<0)return!0}}else r===0?r=l:r===l&&(r=0);else o=!0,s++}return i!==0||r!==0}function ui(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=ui(i.children,t)),i})}function gi(e){var t,i,r,o=e===void 0?ke:e,s=o.options,l=s===void 0?ke:s,u=o.plugins,d=u===void 0?Zt:u,f=function(C,M,L){return L.startsWith(i)&&L.endsWith(i)&&L.replaceAll(i,"").length>0?".".concat(t):C},h=d.slice();h.push(function(C){C.type===ge.RULESET&&C.value.includes("&")&&(r||(r=new RegExp("\\".concat(i,"\\b"),"g")),C.props[0]=C.props[0].replace(fa,i).replace(r,f))}),l.prefix&&h.push(ge.prefixer),h.push(ge.stringify);var x=[],k=ge.middleware(h.concat(ge.rulesheet(function(C){return x.push(C)}))),S=function(C,M,L,A){M===void 0&&(M=""),L===void 0&&(L=""),A===void 0&&(A="&"),t=A,i=M,r=void 0;var O=(function(v){if(!yn(v))return v;for(var y=v.length,w="",$=0,b=0,B=0,p=!1,m=0;m<y;m++){var E=v.charCodeAt(m);if(B!==0||p||E!==ne||v.charCodeAt(m+1)!==he)if(p)E===he&&v.charCodeAt(m+1)===ne&&(p=!1,m++);else if(E!==34&&E!==39||m!==0&&v.charCodeAt(m-1)===92){if(B===0)if(E===123)b++;else if(E===125){if(--b<0){for(var P=m+1;P<y;){var K=v.charCodeAt(P);if(K===59||K===10)break;P++}P<y&&v.charCodeAt(P)===59&&P++,b=0,m=P-1,$=P;continue}b===0&&(w+=v.substring($,m+1),$=m+1)}else E===59&&b===0&&(w+=v.substring($,m+1),$=m+1)}else B===0?B=E:B===E&&(B=0);else p=!0,m++}if($<y){var be=v.substring($);yn(be)||(w+=be)}return w})((function(v){if(v.indexOf("//")===-1)return v;for(var y=v.length,w=[],$=0,b=0,B=0,p=0;b<y;){var m=v.charCodeAt(b);if(m!==34&&m!==39||b!==0&&v.charCodeAt(b-1)===92)if(B===0)if(m===ne&&b+1<y&&v.charCodeAt(b+1)===he){for(b+=2;b+1<y&&(v.charCodeAt(b)!==he||v.charCodeAt(b+1)!==ne);)b++;b+=2}else if(m===40&&b>=3&&(32|v.charCodeAt(b-1))==108&&(32|v.charCodeAt(b-2))==114&&(32|v.charCodeAt(b-3))==117)p=1,b++;else if(p>0)m===41?p--:m===40&&p++,b++;else if(m===he&&b+1<y&&v.charCodeAt(b+1)===ne)b>$&&w.push(v.substring($,b)),$=b+=2;else if(m===ne&&b+1<y&&v.charCodeAt(b+1)===ne){for(b>$&&w.push(v.substring($,b));b<y&&v.charCodeAt(b)!==10;)b++;$=b}else b++;else b++;else B===0?B=m:B===m&&(B=0),b++}return $===0?v:($<y&&w.push(v.substring($)),w.join(""))})(C)),R=ge.compile(L||M?"".concat(L," ").concat(M," { ").concat(O," }"):O);return l.namespace&&(R=ui(R,l.namespace)),x=[],ge.serialize(R,k),x};return S.hash=d.length?d.reduce(function(C,M){return M.name||Z(15),se(C,M.name)},5381).toString():"",S}var xa=new nn,Ut=gi(),qt={shouldForwardProp:void 0,styleSheet:xa,stylis:Ut},an=ie?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(qt)}}:z.createContext(qt);an.Consumer;var ba=ie?{Provider:function(e){return e.children}}:z.createContext(void 0);function Vt(){return ie?qt:z.useContext(an)}function ya(e){if(ie||!z.useMemo)return e.children;var t=Vt().styleSheet,i=z.useMemo(function(){var s=t;return e.sheet?s=e.sheet:e.target&&(s=s.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(s=s.reconstructWithOptions({useCSSOMInjection:!1})),s},[e.disableCSSOMInjection,e.sheet,e.target,t]),r=z.useMemo(function(){return gi({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=z.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:r}},[e.shouldForwardProp,i,r]);return z.createElement(an.Provider,{value:o},z.createElement(ba.Provider,{value:r},e.children))}var Yt=(function(){function e(t,i){var r=this;this.inject=function(o,s){s===void 0&&(s=Ut);var l=r.name+s.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,s(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,tn(this,function(){throw Z(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ut),this.name+t.hash},e})();function va(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in _i||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var wa=function(e){return e>="A"&&e<="Z"};function vn(e){for(var t="",i=0;i<e.length;i++){var r=e[i];if(i===1&&r==="-"&&e[0]==="-")return e;wa(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var hi=function(e){return e==null||e===!1||e===""},mi=function(e){var t=[];for(var i in e){var r=e[i];e.hasOwnProperty(i)&&!hi(r)&&(Array.isArray(r)&&r.isCss||Se(r)?t.push("".concat(vn(i),":"),r,";"):Ce(r)?t.push.apply(t,ae(ae(["".concat(i," {")],mi(r),!1),["}"],!1)):t.push("".concat(vn(i),": ").concat(va(i,r),";")))}return t};function fe(e,t,i,r,o){if(o===void 0&&(o=[]),typeof e=="string")return e&&o.push(e),o;if(hi(e))return o;if(en(e))return o.push(".".concat(e.styledComponentId)),o;if(Se(e)){if(!Se(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return o.push(e),o;var s=e(t);return process.env.NODE_ENV==="production"||typeof s!="object"||Array.isArray(s)||s instanceof Yt||Ce(s)||s===null||console.error("".concat(oi(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),fe(s,t,i,r,o)}var l;if(e instanceof Yt)return i?(e.inject(i,r),o.push(e.getName(r))):o.push(e),o;if(Ce(e)){for(var u=mi(e),d=0;d<u.length;d++)o.push(u[d]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(d=0;d<e.length;d++)fe(e[d],t,i,r,o);return o}function ka(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(Se(i)&&!en(i))return!1}return!0}var Sa=ai(we),Ca=(function(){function e(t,i,r){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&ka(t),this.componentId=i,this.baseHash=se(Sa,i),this.baseStyle=r,nn.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=me(o,this.staticRulesId);else{var s=et(fe(this.rules,t,i,r)),l=jt(se(this.baseHash,s)>>>0);if(!i.hasNameForId(this.componentId,l)){var u=r(s,".".concat(l),void 0,this.componentId);i.insertRules(this.componentId,l,u)}o=me(o,l),this.staticRulesId=l}else{for(var d=se(this.baseHash,r.hash),f="",h=0;h<this.rules.length;h++){var x=this.rules[h];if(typeof x=="string")f+=x,process.env.NODE_ENV!=="production"&&(d=se(d,x));else if(x){var k=et(fe(x,t,i,r));d=se(se(d,String(h)),k),f+=k}}if(f){var S=jt(d>>>0);if(!i.hasNameForId(this.componentId,S)){var C=r(f,".".concat(S),void 0,this.componentId);i.insertRules(this.componentId,S,C)}o=me(o,S)}}return{className:o,css:typeof window>"u"?i.getTag().getGroup(ve(this.componentId)):""}},e})(),fi=ie?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:z.createContext(void 0);fi.Consumer;var ft={},wn=new Set;function $a(e,t,i){var r=en(e),o=e,s=!ht(e),l=t.attrs,u=l===void 0?Zt:l,d=t.componentId,f=d===void 0?(function(v,y){var w=typeof v!="string"?"sc":un(v);ft[w]=(ft[w]||0)+1;var $="".concat(w,"-").concat(ri(we+w+ft[w]));return y?"".concat(y,"-").concat($):$})(t.displayName,t.parentComponentId):d,h=t.displayName,x=h===void 0?(function(v){return ht(v)?"styled.".concat(v):"Styled(".concat(oi(v),")")})(e):h,k=t.displayName&&t.componentId?"".concat(un(t.displayName),"-").concat(t.componentId):t.componentId||f,S=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,C=t.shouldForwardProp;if(r&&o.shouldForwardProp){var M=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;C=function(v,y){return M(v,y)&&L(v,y)}}else C=M}var A=new Ca(i,k,r?o.componentStyle:void 0);function O(v,y){return(function(w,$,b){var B=w.attrs,p=w.componentStyle,m=w.defaultProps,E=w.foldedComponentIds,P=w.styledComponentId,K=w.target,be=ie?void 0:z.useContext(fi),Te=Vt(),ct=w.shouldForwardProp||Te.shouldForwardProp;process.env.NODE_ENV!=="production"&&z.useDebugValue&&z.useDebugValue(P);var cn=Qi($,be,m)||(ie?void 0:ke),ee=(function(pe,J,ue){for(var oe,te=Y(Y({},J),{className:void 0,theme:ue}),ut=0;ut<pe.length;ut+=1){var We=Se(oe=pe[ut])?oe(te):oe;for(var ye in We)ye==="className"?te.className=me(te.className,We[ye]):ye==="style"?te.style=Y(Y({},te.style),We[ye]):te[ye]=We[ye]}return"className"in J&&typeof J.className=="string"&&(te.className=me(te.className,J.className)),te})(B,$,cn),Me=ee.as||K,De={};for(var Q in ee)ee[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&ee.theme===cn||(Q==="forwardedAs"?De.as=ee.forwardedAs:ct&&!ct(Q,Me)||(De[Q]=ee[Q],ct||process.env.NODE_ENV!=="development"||Wi(Q)||wn.has(Q)||!Nt.has(Me)||(wn.add(Q),console.warn('styled-components: it looks like an unknown prop "'.concat(Q,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var Di=(function(pe,J){var ue=Vt(),oe=pe.generateAndInjectStyles(J,ue.styleSheet,ue.stylis);return process.env.NODE_ENV!=="production"&&z.useDebugValue&&z.useDebugValue(oe.className),oe})(p,ee),dt=Di.className;process.env.NODE_ENV!=="production"&&w.warnTooManyClasses&&w.warnTooManyClasses(dt);var pt=me(E,P);dt&&(pt+=" "+dt),ee.className&&(pt+=" "+ee.className),De[ht(Me)&&!Nt.has(Me)?"class":"className"]=pt,b&&(De.ref=b);var dn=Pi(Me,De);if(ie){for(var je=[],de=p,Ai=function(){var pe=Te.styleSheet.getTag().getGroup(ve(de.componentId));if(pe){var J="",ue=Te.styleSheet.names.get(de.componentId);ue&&ue.forEach(function(oe){J&&(J+="_"),J+=oe}),je.push(z.createElement("style",{key:"sc-".concat(de.componentId),precedence:"styled-components",href:"sc-".concat(de.componentId,"-").concat(J),children:pe}))}de=de.baseStyle};de;)Ai();if(je.length)return je.reverse(),z.createElement.apply(z,ae(ae([z.Fragment,null],je,!1),[dn],!1))}return dn})(R,v,y)}O.displayName=x;var R=z.forwardRef(O);return R.attrs=S,R.componentStyle=A,R.displayName=x,R.shouldForwardProp=C,R.foldedComponentIds=r?me(o.foldedComponentIds,o.styledComponentId):"",R.styledComponentId=k,R.target=r?o.target:e,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?(function(y){for(var w=[],$=1;$<arguments.length;$++)w[$-1]=arguments[$];for(var b=0,B=w;b<B.length;b++)Wt(y,B[b],!0);return y})({},o.defaultProps,v):v}}),process.env.NODE_ENV!=="production"&&(Gi(x,k),R.warnTooManyClasses=(function(v,y){var w={},$=!1;return function(b){if(!$&&(w[b]=!0,Object.keys(w).length>=200)){var B=y?' with the id of "'.concat(y,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(v).concat(B,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),$=!0,w={}}}})(x,k)),tn(R,function(){return".".concat(R.styledComponentId)}),s&&di(R,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function kn(e,t){for(var i=[e[0]],r=0,o=t.length;r<o;r+=1)i.push(t[r],e[r+1]);return i}var Sn=function(e){return Object.assign(e,{isCss:!0})};function D(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(Se(e)||Ce(e))return Sn(fe(kn(Zt,ae([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?fe(r):Sn(fe(kn(r,t)))}function Gt(e,t,i){if(i===void 0&&(i=ke),!t)throw Z(1,t);var r=function(o){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(t,i,D.apply(void 0,ae([o],s,!1)))};return r.attrs=function(o){return Gt(e,t,Y(Y({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Gt(e,t,Y(Y({},i),o))},r}var xi=function(e){return Gt($a,e)},a=xi;Nt.forEach(function(e){a[e]=xi(e)});function T(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var r=et(D.apply(void 0,ae([e],t,!1))),o=ri(r);return new Yt(o,r)}var Ia=/^\s*<\/[a-z]/i,La=(function(){function e(){var t=this;this._emitSheetCSS=function(){var i=t.instance.toString();if(!i)return"";var r=Ht(),o=et([r&&'nonce="'.concat(r,'"'),"".concat(re,'="true"'),"".concat(Ke,'="').concat(we,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(i,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Z(2);return t._emitSheetCSS()},this.getStyleElement=function(){var i;if(t.sealed)throw Z(2);var r=t.instance.toString();if(!r)return[];var o=((i={})[re]="",i[Ke]=we,i.dangerouslySetInnerHTML={__html:r},i),s=Ht();return s&&(o.nonce=s),[z.createElement("style",Y({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new nn({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw Z(2);return z.createElement(ya,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){if(this.sealed)throw Z(2);this.seal();var i=require("stream").Transform,r=this.instance,o=this._emitSheetCSS,s=new i({transform:function(u,d,f){var h=u.toString(),x=o();if(r.clearTag(),Ia.test(h)){var k=h.indexOf(">")+1,S=h.slice(0,k),C=h.slice(k);this.push(S+x+C)}else this.push(x+h);f()}});if("on"in t&&typeof t.on=="function"&&"pipe"in t){var l=t;return l.on("error",function(u){s.emit("error",u)}),l.pipe(s)}if("pipe"in t&&typeof t.pipe=="function")return t.pipe(s);throw new Error("Unsupported stream type")},e})();process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var He="__sc-".concat(re,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window[He]||(window[He]=0),window[He]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`),window[He]+=1);const Ea={value:0},bi=ni({name:"app",initialState:Ea,reducers:{increment:e=>{e.value+=1},decrement:e=>{e.value-=1},setValue:(e,t)=>{e.value=t.payload}}}),{increment:Ep,decrement:Tp,setValue:Mp}=bi.actions,Ta=bi.reducer,Ma={logoAlt:"Margg",links:[{label:"Home",href:"#home",primary:!0},{label:"Roadmaps",href:"/roadmaps"},{label:"Our Products",href:"#products"},{label:"Contact Us",href:"#contact-us"}]},Da={titleLine1:"BRING OUT YOUR",titleLine2:"BEST POTENTIAL",description:"Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry",inputPlaceholder:"Enter Email",inputButtonText:"Join the waitlist",tiles:{autoCycleIntervalMs:3e3,defaultTileId:1,row1:[{id:1,ariaLabel:"Frontend Development",title:"Frontend Development",description:"Build modern UI with React, component systems, and responsive layouts.",icon:"ScrollIcon",slug:"frontend-development"},{id:2,ariaLabel:"Backend Engineering",title:"Backend Engineering",description:"Server-side logic, APIs, and database management.",icon:"DriverIcon",slug:"backend-engineering"},{id:3,ariaLabel:"UI/UX Engineering",title:"UI/UX Engineering",description:"Design trends, spacing systems, and accessible UI patterns.",icon:"PenToolIcon",slug:"ui-ux-engineering"}],row2:[{id:4,ariaLabel:"Data Engineering",title:"Data Engineering",description:"Data modeling, pipelines, SQL, and database optimization.",icon:"FavoriteChartIcon",slug:"data-engineering"},{id:5,ariaLabel:"Business Analytics",title:"Business Analytics",description:"Data-driven decisions, reporting, and business intelligence.",icon:"MessageProgrammingIcon",slug:"business-analytics"},{id:6,ariaLabel:"DevOps Engineering",title:"DevOps Engineering",description:"Deploy apps, understand environments, and ship confidently.",icon:"CloudConnectionIcon",slug:"devops-engineering"},{id:7,ariaLabel:"Cyber Security",title:"Cyber Security",description:"Learn safe patterns, auth basics, and secure-by-default systems.",icon:"LockIcon",slug:"cyber-security"}]}},Aa={waitList:!0,stats:[{value:"43+",label:`University
Partners`},{value:"12K+",label:`Students
Enrolled`},{value:"35",label:`Outstanding
Mentors`},{value:"7.5K",label:`Student
Placements`}]},Pa={titleLine1:"SUPERCHARGE",titleLine2:"YOUR LEARNING POTENTIAL WITH OUR APP",description:"Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away"},za={title:"JOIN WAITLIST",subtitle:"First step towards your dream career",inputPlaceholder:"Enter Email",buttonText:"Notify Me"},Ba=["Frontend Development","Backend Engineering","UI/UX Engineering","Data Engineering","Business Analytics","DevOps Engineering","Cyber Security"],Ra={submissionMode:"sheets",baseUrl:"https://api.margg.xyz/service-core",endpoints:{waitlist:"/general/user-contacts/waitlist",learner:"/general/user-contacts",instructor:"/general/instructor-enquiries",partner:"/general/organisation-enquiries"},googleSheets:{scriptUrl:"https://script.google.com/macros/s/AKfycbwmmOYKHVpfZEcqWhhAlNr6G7726uUj9WT4cua0i8sSMDQrQbWoBK2jj0Pc1FpRNfuB1g/exec"},emailjs:{notifyEmail:"margglive@gmail.com",accounts:{account1:{serviceId:"service_uwxllg6",publicKey:"sS9pUpAdxxLri3bjO"},account2:{serviceId:"service_oq3tfkg",publicKey:"r9cx6ICX3cdQFxZC9"}},templates:{waitlist:{templateId:"template_ob8hs05",account:"account1"},learner:{templateId:"template_n8yn8zn",account:"account1"},instructor:{templateId:"template_a5ox0x9",account:"account2"},partner:{templateId:"template_qxq0lla",account:"account2"}}}},Fa={contactTitle:"GET IN TOUCH WITH US",location:"Bangalore | Tirupati",phone:"+91 7993559974",email:"info@margg.in",tagline:"Curated routes for curious minds",companyName:"Margg Private Limited",logoAlt:"Margg Logo",socialLinks:[{name:"YouTube",icon:"YoutubeIcon",url:"https://www.youtube.com/@MarggLive"},{name:"Instagram",icon:"InstagramIcon",url:"https://instagram.com/margglive"},{name:"X (Twitter)",icon:"TwitterIcon",url:"https://x.com/MarggLive"},{name:"Discord",icon:"DiscordIcon",url:"https://discord.gg/PDzhNUnB"}]},Oa={roadmap:{title:"Roadmap Based Learning"},community:{title:"Community"},focusTimer:{title:"Focus Timer"},interviewPrep:{title:"Interview Prep Materials"},jobBoard:{title:"Job Board"},mentorship:{title:"One-on-One Mentorship"},projects:{title:"Projects"},resume:{title:"Resume Builder"},skills:{title:"Skills Assessment"},streaks:{title:"Streaks"},certifications:{title:"Certifications"}},Na={title:"Margg – Roadmap Based Courses & Best LMS Platform in South India | Gagan's Application",description:"Margg is the best LMS application in South India offering roadmap based courses, structured learning paths, one-on-one mentorship, interview prep, resume building, certifications & career placement support for college students. Built by Gagan — curated routes for curious minds.",keywords:"roadmap based courses, best LMS application in south india, Gagan's application, Margg, LMS for college students, learning management system India, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development, structured learning paths, best online courses India, South India LMS, Bangalore LMS, Tirupati education platform, curated learning roadmaps, coding bootcamp India, one-on-one mentorship India, resume builder for students, job placement LMS, streaks based learning, certification courses India, Margg Private Limited, MarggLive, best e-learning platform India",author:"Margg Private Limited",robots:"index, follow",locale:"en_IN",url:"https://margg.in",ogImage:"https://margg.in/og-cover.png",twitterHandle:"@MarggLive",themeColor:"#090215",foundingYear:"2023",appCategory:"EducationApplication"},ja={navbar:Ma,hero:Da,analytics:Aa,supercharge:Pa,joinWaitlist:za,courses:Ba,api:Ra,footer:Fa,blocks:Oa,seo:Na},yi=ni({name:"content",initialState:{data:ja,status:"idle",source:"fallback"},reducers:{contentLoading(e){e.status="loading"},contentSucceeded(e,t){e.data=t.payload.data,e.status="succeeded",e.source=t.payload.source},contentFailed(e){e.status="failed",e.source="fallback"}}}),{contentLoading:Dp,contentSucceeded:Wa,contentFailed:Ap}=yi.actions,_a=yi.reducer,Ha=e=>e.content.data,vi="/assets/Margg-CT4M_ONj.webp",$e="1920px",Cn={mobile:"1000px",tablet:"1200px"},I={mobile:`@media (max-width: ${Cn.mobile})`,tablet:`@media (max-width: ${Cn.tablet})`},g={heading:'"Bebas Neue", sans-serif',body:'"Inter", sans-serif'};function W(e){const t=Oi(Ha);return e?t[e]??{}:t}T`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;const Ua=T`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`,qa=a.div`
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
`,Va=a.nav`
  display: flex;
  width: 85%;
  max-width: ${$e};
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
`,Ya=a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,Ga=a.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;a.div`
  display: flex;
  align-items: flex-start;
`;const Qa=a.img`
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
`;const Ja=a.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`,Xa=a.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`,Ka=a.a`
  color: white;
  font-family: ${g.body};
  font-size: 16px;
  font-weight: ${e=>e.$primary?"600":"300"};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${e=>e.$primary?"1":"0.5"};

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`,Za=a.button`
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
`,xt=a.span`
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
`,er=a.div`
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
`,tr=a.div`
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
`,nr=a.button`
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
`,ir=a.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ar=a.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${g.body};
  font-size: 18px;
  font-weight: ${e=>e.$primary?"600":"400"};
  color: #fff;
  opacity: ${e=>e.$primary?1:.7};
  transition: all 0.2s ease;
  background: ${e=>e.$primary?"rgba(80, 19, 192, 0.15)":"transparent"};

  ${e=>e.$show&&D`
      animation: ${Ua} 0.4s ease forwards;
      animation-delay: ${e.$delay||"0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`,rr=a.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`,or=a.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`,$n={Home:n("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:n("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Roadmaps:n("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:n("path",{d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Our Products":n("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:n("path",{d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Contact Us":n("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:n("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},le=()=>{const{logoAlt:e,links:t}=W("navbar"),[i,r]=F(!1),[o,s]=F(!1),l=j(null),u=j(0),d=ti(),f=Bi();N(()=>{const k=()=>{const S=window.scrollY;S<80?s(!1):S-u.current>10?s(!0):u.current-S>10&&s(!1),u.current=S};return window.addEventListener("scroll",k,{passive:!0}),()=>window.removeEventListener("scroll",k)},[]),N(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]),N(()=>{const x=k=>{k.key==="Escape"&&r(!1)};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[]);const h=V(x=>{const k=x.currentTarget.getAttribute("href");k?.startsWith("#")?(x.preventDefault(),r(!1),f.pathname!=="/"?(d("/"),setTimeout(()=>{const S=document.getElementById(k.slice(1));if(S){const M=S.getBoundingClientRect().top+window.scrollY-72;window.scrollTo({top:M,behavior:"smooth"})}},300)):setTimeout(()=>{const S=document.getElementById(k.slice(1));if(S){const C=document.querySelector("nav")?.offsetHeight||72,M=S.getBoundingClientRect().top+window.scrollY-C;window.scrollTo({top:M,behavior:"smooth"})}},100)):k?.startsWith("/")&&(x.preventDefault(),r(!1),d(k))},[d,f.pathname]);return c(Re,{children:[n(qa,{$hidden:o&&!i,children:n(Va,{"aria-label":"Main navigation",children:c(Ya,{children:[n(Ga,{onClick:()=>d("/"),style:{cursor:"pointer"},children:n(Qa,{src:vi,alt:e,loading:"eager",fetchPriority:"high"})}),n(Ja,{children:n(Xa,{children:t.map(x=>n(Ka,{href:x.href,$primary:x.primary?!0:void 0,onClick:h,children:x.label},x.label))})}),c(Za,{onClick:()=>r(x=>!x),"aria-label":i?"Close menu":"Open menu","aria-expanded":i,children:[n(xt,{$open:i}),n(xt,{$open:i}),n(xt,{$open:i})]})]})})}),n(er,{$open:i,onClick:()=>r(!1)}),c(tr,{$open:i,ref:l,children:[n(nr,{onClick:()=>r(!1),"aria-label":"Close menu",children:n("svg",{viewBox:"0 0 16 16",fill:"none",children:n("path",{d:"M12 4L4 12M4 4l8 8",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round"})})}),n(ir,{children:t.map((x,k)=>c(ar,{href:x.href,$primary:x.primary,$show:i,$delay:`${.1+k*.07}s`,onClick:h,children:[n(rr,{children:$n[x.label]||$n.Home}),x.label]},x.label))}),n(or,{})]})]})};function sr({color:e="currentColor"}){return c("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("rect",{x:"10",y:"12",width:"44",height:"40",rx:"10",fill:e,opacity:"0.25"}),n("rect",{x:"18",y:"20",width:"28",height:"24",rx:"8",fill:e,opacity:"0.35"}),n("path",{d:"M26 36L32 30L38 36",stroke:e,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"})]})}function lr({color:e="currentColor"}){return c("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z",fill:e,opacity:"0.25"}),n("path",{d:"M26 24L20 30L26 36",stroke:e,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),n("path",{d:"M38 24L44 30L38 36",stroke:e,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),n("path",{d:"M34 22L30 38",stroke:e,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})]})}function cr({color:e="currentColor"}){return c("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M20 44L44 20",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),n("path",{d:"M18 46L22 42L26 46L22 50L18 46Z",fill:e,opacity:"0.35"}),n("path",{d:"M38 18L46 26",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function dr({color:e="currentColor"}){return c("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("rect",{x:"16",y:"14",width:"32",height:"28",rx:"6",fill:e,opacity:"0.25"}),n("rect",{x:"20",y:"18",width:"24",height:"14",rx:"4",fill:e,opacity:"0.35"}),n("path",{d:"M26 48H38",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function pr({color:e="currentColor"}){return c("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z",fill:e,opacity:"0.25"}),n("path",{d:"M26 46H38",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),n("path",{d:"M22 52H42",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function ur({color:e="currentColor"}){return c("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("path",{d:"M16 44V34",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),n("path",{d:"M28 44V26",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),n("path",{d:"M40 44V30",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),n("path",{d:"M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z",fill:e,opacity:"0.35"})]})}function gr({color:e="currentColor"}){return c("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n("rect",{x:"18",y:"30",width:"28",height:"22",rx:"10",fill:e,opacity:"0.25"}),n("path",{d:"M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),n("path",{d:"M32 38V44",stroke:e,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}const hr=(e,t=null)=>{const i={1:[],2:[],3:[]};e.forEach(s=>{i[s.row].push(s)}),Object.keys(i).forEach(s=>{i[s].sort((l,u)=>l.col-u.col)});let r=!0;for(;r;){r=!1;for(let s=3;s>=2;s--){const l=i[s];if(l.reduce((d,f)=>d+f.span,0)>4){const d=l.findIndex(h=>h.id===t);let f;d!==-1&&d<=1?f=l.pop():f=l.shift(),f.row=s-1,i[s-1].push(f),r=!0;break}}}const o=[];return Object.keys(i).forEach(s=>{let l=1;i[s].forEach(u=>{o.push({...u,row:parseInt(s),col:l}),l+=u.span})}),o},mr=(e,t)=>{if(!t)return e.map(r=>({...r,span:1}));const i=e.map(r=>({...r,span:r.id===t?2:1}));return hr(i,t)},fr=e=>{const t=[];let i=0;for(let r=1;r<=3;r++)i<e.length&&(t.push({id:e[i],row:1,col:r,span:1}),i++);for(let r=1;r<=4;r++)i<e.length&&(t.push({id:e[i],row:2,col:r,span:1}),i++);for(let r=1;r<=4;r++)i<e.length&&(t.push({id:e[i],row:3,col:r,span:1}),i++);return t},xr=3e3,br=1,yr=a.div`
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
`,vr=a.div`
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
`,wr=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,kr=a.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$isExpanded?"flex-start":"center"};
  gap: ${e=>e.$isExpanded?"16px":"0"};
  width: ${e=>e.$isExpanded?"100%":"auto"};
  padding: ${e=>e.$isExpanded?"0 20px":"0"};
  transition: none;
`,Sr=a.div`
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
`,Cr=a.div`
  font-family: ${g.body};
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
`;function $r({ariaLabel:e,title:t,icon:i,gridRow:r,gridColumn:o,isExpanded:s,onMouseEnter:l,onMouseLeave:u,onClick:d,tileId:f}){return n(vr,{"aria-label":e,$isExpanded:s,style:{gridRow:r,gridColumn:o},onMouseEnter:()=>l(f),onMouseLeave:u,onClick:()=>d(f),children:n(wr,{children:c(kr,{$isExpanded:s,children:[n(Sr,{children:i}),n(Cr,{$isExpanded:s,children:t})]})})})}const Ir={ScrollIcon:sr,MessageProgrammingIcon:lr,PenToolIcon:cr,DriverIcon:dr,CloudConnectionIcon:pr,FavoriteChartIcon:ur,LockIcon:gr};function Lr({tileColor:e}){const t=W("hero").tiles??{},i=t.autoCycleIntervalMs??xr,r=t.defaultTileId??br,o=ti(),s=Ae(()=>{const y=t.row1??[],w=t.row2??[];return[...y,...w]},[t]),l=Ae(()=>s.length?Math.min(...s.map(y=>y.id)):1,[s]),u=Ae(()=>s.length?Math.max(...s.map(y=>y.id)):1,[s]),[d,f]=F(r),[h,x]=F(!1),[k,S]=F(!1),C=j(null),M=j(null);N(()=>{if(typeof window<"u"){const y=()=>S(window.innerWidth<=1e3);return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)}},[]),N(()=>k?void 0:(h||(C.current=setInterval(()=>{if(!h){const w=Math.floor(Math.random()*(u-l+1))+l;f(w)}},i)),()=>{C.current&&clearInterval(C.current)}),[h,k]);const L=Ae(()=>{const y=s.map(b=>b.id),w={},$=fr(y);return w.default=$,y.forEach(b=>{w[b]=mr($,b)}),w},[s]),A=Ae(()=>L[d||"default"]||L.default,[L,d]),O=y=>{x(!0),f(y),C.current&&clearInterval(C.current)},R=()=>{f(r),x(!1)},v=y=>{const w=s.find($=>$.id===y);if(!k){w?.slug&&o(`/roadmap/${w.slug}`);return}if(d===y){w?.slug&&o(`/roadmap/${w.slug}`);return}M.current&&clearTimeout(M.current),f(y),M.current=setTimeout(()=>{f(r)},4e3)};return N(()=>()=>{M.current&&clearTimeout(M.current)},[]),n(yr,{"aria-label":"intro tiles",children:A.map(y=>{const w=s.find(B=>B.id===y.id);if(!w)return null;const $=Ir[w.icon],b=y.span===2;return n($r,{tileId:y.id,ariaLabel:w.ariaLabel,title:w.title,icon:n($,{color:e}),gridRow:y.row,gridColumn:`${y.col} / span ${y.span}`,isExpanded:b,onMouseEnter:O,onMouseLeave:R,onClick:v},y.id)})})}const In="margg_waitlist_joined",bt="margg:waitlist_joined",Er=T`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,Tr=T`
  to { stroke-dashoffset: 0; }
`,Mr=T`
  to { transform: rotate(360deg); }
`,Ln=a.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,Dr=a.div`
  position: relative;
  width: 100%;
  height: 56px;
`,Ar=a.input`
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
`,Pr=a.button`
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
`,zr=a.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(80, 19, 192, 0.25);
  border-top-color: #5013c0;
  border-radius: 50%;
  animation: ${Mr} 0.6s linear infinite;

  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`,Br=a.div`
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
`,Rr=a.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${Er} 0.4s ease forwards;

  @media (max-width: 640px) {
    gap: 10px;
  }
`,Fr=a.div`
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
    animation: ${Tr} 0.4s ease 0.25s forwards;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    svg { width: 18px; height: 18px; }
  }
`,Or=a.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(238, 231, 249, 0.85);
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,wi=({placeholder:e="Enter Email",buttonText:t="Join the waitlist",onSubmit:i})=>{const[r,o]=F(""),[s,l]=F(""),[u,d]=F(!1),[f,h]=F(!1),x=j(null),k=j(null),S=j(null);N(()=>{try{typeof window<"u"&&localStorage.getItem(In)==="true"&&d(!0)}catch{}},[]),N(()=>{const A=()=>d(!0);return window.addEventListener(bt,A),()=>window.removeEventListener(bt,A)},[]),N(()=>{k.current&&!S.current&&(S.current=k.current.offsetWidth)}),N(()=>{const A=O=>{x.current&&!x.current.contains(O.target)&&s&&l("")};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[s]);const C=A=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A),M=async A=>{if(A.preventDefault(),l(""),!C(r)){l("Please enter a valid email address");return}if(i){h(!0);try{await i(r);try{localStorage.setItem(In,"true")}catch{}window.dispatchEvent(new Event(bt)),d(!0)}catch(O){O.message==="already_registered"?l("This email is already registered"):O.message==="already_enrolled"?l("This email is already enrolled in the waitlist"):l(O.message||"Something went wrong. Please try again.")}finally{h(!1)}}},L=A=>{o(A.target.value),s&&l("")};return u?n(Ln,{ref:x,children:c(Rr,{children:[n(Fr,{children:n("svg",{viewBox:"0 0 24 24",fill:"none",children:n("path",{d:"M5 13l4 4L19 7",stroke:"#B095E3",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),n(Or,{children:"You have already joined the waitlist"})]})}):c(Ln,{ref:x,children:[n("form",{onSubmit:M,children:c(Dr,{children:[n(Ar,{type:"email",placeholder:e,value:r,onChange:L,$hasError:!!s,disabled:f}),n(Pr,{ref:k,type:"submit",disabled:f,style:f&&S.current?{width:S.current}:void 0,children:f?n(zr,{}):t})]})}),n(Br,{$show:!!s,children:s})]})};async function tt(e,t,i){if(!e)throw new Error("Google Sheets integration is not configured. Please set the script URL.");const r={_sheet:t,...i};let o;try{o=await fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r),signal:AbortSignal.timeout(15e3)})}catch(s){throw s.name==="TimeoutError"||s.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach Google Sheets. Please check your internet connection and try again.")}return{ok:!0}}let yt=!1,ze=null;function Nr(){return yt&&window.emailjs?Promise.resolve():ze||(ze=new Promise((e,t)=>{if(window.emailjs){yt=!0,e();return}const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",i.async=!0,i.onload=()=>{yt=!0,e()},i.onerror=()=>{ze=null,t(new Error("Failed to load EmailJS SDK."))},document.head.appendChild(i)}),ze)}function jr(e,t){const i=e?.templates?.[t];if(!i)return null;const r=i.account,o=e?.accounts?.[r];return!o?.serviceId||!o?.publicKey?null:{serviceId:o.serviceId,publicKey:o.publicKey,templateId:i.templateId}}async function nt(e,t,i){const r=jr(e,t);if(!r)return console.warn(`[EmailJS] No valid config for "${t}" — skipping.`),{ok:!0,skipped:!0};try{await Nr(),window.emailjs.init(r.publicKey);const o={...i,to_email:e.notifyEmail||"info@margg.in",submission_time:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})},s=await window.emailjs.send(r.serviceId,r.templateId,o);return s.status!==200&&console.warn("[EmailJS] Non-200 status:",s),{ok:!0}}catch(o){return console.error("[EmailJS] Send failed:",o),{ok:!1,error:o.message}}}const Wr=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,_r=/^[0-9\s\-+()]{10,15}$/;function X(e,t){if(!e||!String(e).trim())throw new Error(`${t} is required`);return String(e).trim()}function it(e){const t=X(e,"Email").toLowerCase().slice(0,254);if(!Wr.test(t))throw new Error("Please enter a valid email address");return t}function rn(e){const t=X(e,"Phone number");if(!_r.test(t))throw new Error("Please enter a valid phone number");return t}async function at(e,t){let i;try{i=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:AbortSignal.timeout(15e3)})}catch(o){throw o.name==="TimeoutError"||o.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach the server. Please check your internet connection and try again.")}if(i.ok)return{ok:!0};let r="";try{const o=await i.json();r=o?.data?.message||o?.message||o?.error||""}catch{}throw i.status===409?new Error(r||"This entry already exists. Please use a different email."):i.status===422||i.status===400?new Error(r||"Some fields are invalid. Please review and try again."):i.status===429?new Error("Too many requests. Please wait a moment and try again."):i.status>=500?new Error("Our servers are temporarily unavailable. Please try again in a few moments."):new Error(r||"Something went wrong. Please try again.")}function rt(e){return e?.submissionMode==="sheets"}async function ki(e,t){const i=it(t);if(rt(e))return await tt(e.googleSheets?.scriptUrl,"Waitlist",{email:i}),await nt(e.emailjs,"waitlist",{form_type:"Waitlist",email:i}),{ok:!0};const r=`${e.baseUrl}${e.endpoints.waitlist}`;return at(r,{email:i})}async function Hr(e,t){const i=X(t.fullName,"Full name").split(" ")[0],r=X(t.fullName,"Full name").split(" ").slice(1).join(" ")||"",o=rn(t.phone),s=it(t.email),l=X(t.college,"College name"),u=X(t.branch,"Branch"),d=X(t.year,"Year"),f=t.query||"";if(rt(e)){const k={firstName:i,lastName:r,phone:o,email:s,collegeName:l,branch:u,year:d,query:f};return await tt(e.googleSheets?.scriptUrl,"Learners",k),await nt(e.emailjs,"learner",{form_type:"Learner Enquiry",full_name:`${i} ${r}`.trim(),phone:o,email:s,college_name:l,branch:u,year:d,query:f}),{ok:!0}}const h={firstName:i,lastName:r,phone:o,email:s,collegeName:l,branch:u,year:d,query:f},x=`${e.baseUrl}${e.endpoints.learner}`;return at(x,h)}async function Ur(e,t){const i=X(t.fullName,"Full name"),r=rn(t.phone),o=it(t.email),s=t.topics?.length?t.topics:(()=>{throw new Error("Add at least one topic")})();if(rt(e)){const d={fullName:i,phone:r,email:o,topics:s.join(", ")};return await tt(e.googleSheets?.scriptUrl,"Instructors",d),await nt(e.emailjs,"instructor",{form_type:"Instructor Enquiry",full_name:i,phone:r,email:o,topics:s.join(", ")}),{ok:!0}}const l={fullName:i,phone:r,email:o,topics:s},u=`${e.baseUrl}${e.endpoints.instructor}`;return at(u,l)}async function qr(e,t){const i=X(t.orgType,"Organisation type"),r=X(t.orgName,"Organisation name"),o=Number(X(t.students,"Number of students"))||0,s=rn(t.phone),l=it(t.email);if(rt(e)){const f={organisationType:i,organisationName:r,numberOfStudents:o,phone:s,email:l};return await tt(e.googleSheets?.scriptUrl,"Partners",f),await nt(e.emailjs,"partner",{form_type:"Partner / Organisation Enquiry",organisation_type:i,organisation_name:r,number_of_students:o,phone:s,email:l}),{ok:!0}}const u={organisationType:i,organisationName:r,numberOfStudents:o,phone:s,email:l},d=`${e.baseUrl}${e.endpoints.partner}`;return at(d,u)}const Vr=a.section`
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
`,Yr=a.div`
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
`,ot=a.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`,Gr=a(ot)`
  left: 80.3%;
  top: 67.2%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.95) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,Qr=a(ot)`
  left: 13.9%;
  top: 1.4%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.95) 0%,
    rgba(176, 149, 227, 0) 70%
  );
`,Jr=a(ot)`
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
`,Xr=a(ot)`
  left: 7.3%;
  top: 34.9%;
  width: clamp(110px, 13vw, 171px);
  height: clamp(110px, 13vw, 171px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.9) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,Kr=a.div`
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
`,Zr=a.div`
  width: 100%;
  max-width: ${$e};
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
`,eo=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 520px;
  flex: 0 1 520px;
`,to=a.h1`
  color: white;
  font-weight: 400;
  font-size: clamp(42px, 5.2vw, 64px);
  line-height: 1.2;
  letter-spacing: -0.3937px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${g.heading};

  text-wrap: balance;
`,no=a.p`
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.35;
  font-family: ${g.body};
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
  font-family: ${g.body};
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
`;const io=({id:e})=>{const t="rgba(176, 149, 227, 1)",{titleLine1:i,titleLine2:r,description:o,inputPlaceholder:s,inputButtonText:l}=W("hero"),u=W("api");return c(Vr,{id:e,children:[n(Yr,{}),n(Gr,{}),n(Qr,{}),n(Jr,{}),n(Xr,{}),n(Kr,{children:c(Zr,{children:[c(eo,{children:[c(to,{children:[i,n("br",{}),r]}),n(no,{children:o}),n(wi,{placeholder:s,buttonText:l,onSubmit:f=>ki(u,f)})]}),n(Lr,{tileColor:t})]})})]})},ao=a.div`
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
`,ro=a.div`
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
`,oo=a.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`,so=a.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
  white-space: pre-line;
`;function lo({items:e}){return n(ao,{"aria-label":"analytics stats",children:e.map(t=>c(ro,{children:[n(oo,{children:t.value}),n(so,{children:t.label})]},t.value+t.label))})}const co=a.section`
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
`,po=a.div`
  width: 100%;
  max-width: ${$e};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`,uo=T`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`,go=T`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`,ho=T`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`,mo=a.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`,on=a.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`,fo=a(on)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${uo} 12s ease-in-out infinite;
`,xo=a(on)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${go} 15s ease-in-out infinite;
`,bo=a(on)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${ho} 18s ease-in-out infinite;
`,yo=a.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`,vo=T`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`,wo=a.div`
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
  animation: ${vo} 8s ease-in-out infinite;
`,ko=T`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`,So=a.div`
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
  animation: ${ko} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`,Co=T`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`,$o=[{x:5,y:15,size:3,dur:10,delay:0,op:.4},{x:12,y:72,size:2,dur:12,delay:1.2,op:.3},{x:22,y:35,size:4,dur:9,delay:.5,op:.5},{x:33,y:85,size:2,dur:14,delay:2,op:.25},{x:42,y:12,size:3,dur:11,delay:.8,op:.35},{x:55,y:78,size:4,dur:13,delay:1.5,op:.45},{x:63,y:28,size:2,dur:10,delay:3,op:.3},{x:72,y:60,size:3,dur:15,delay:.3,op:.4},{x:78,y:18,size:2,dur:12,delay:2.5,op:.25},{x:85,y:45,size:4,dur:9,delay:1,op:.5},{x:91,y:80,size:3,dur:11,delay:.7,op:.35},{x:15,y:50,size:2,dur:14,delay:1.8,op:.3},{x:48,y:42,size:3,dur:10,delay:2.2,op:.4},{x:68,y:90,size:2,dur:13,delay:.4,op:.25},{x:38,y:55,size:3,dur:11,delay:3.2,op:.35},{x:95,y:25,size:2,dur:12,delay:1.6,op:.3},{x:8,y:88,size:4,dur:15,delay:.9,op:.45},{x:28,y:8,size:2,dur:10,delay:2.8,op:.3}],Io=a.span`
  position: absolute;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${e=>e.$op});
  left: ${e=>e.$x}%;
  top: ${e=>e.$y}%;
  animation: ${Co} ${e=>e.$dur}s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${e=>e.$size*3}px
    rgba(176, 149, 227, ${e=>e.$op*.5});
`,Lo=T`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`,Eo=a.div`
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
  animation: ${Lo} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`,To=a.div`
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
`,Mo=a.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`,Do=a.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`,Ao=T`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`,Po=a.div`
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
    animation: ${Ao} 5s ease-in-out infinite;
    pointer-events: none;
  }
`,zo=T`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`,Ue=a.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-color: rgba(176, 149, 227, 0.18);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: ${zo} 0.6s ease-out 2.6s forwards;

  ${e=>e.$pos==="tl"&&D`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${e=>e.$pos==="tr"&&D`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${e=>e.$pos==="bl"&&D`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${e=>e.$pos==="br"&&D`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`,Si=T`
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
`,En=T`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`,Tn=T`
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
`,Bo=T`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`,Mn=a.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2.5vw, 40px);
  transform-style: preserve-3d;
  width: 100%;
`,Ro=a.h2`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`,Ci=a.span`
  display: inline-block;
  font-family: ${g.heading};
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

  ${e=>e.$animate&&D`
      animation:
        ${Si} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${e.$delay}s
          forwards,
        ${En} 6s linear ${e.$delay+.9}s infinite,
        ${Tn} 4s ease-in-out ${e.$delay+.9}s infinite,
        ${Bo} ${3.5+e.$delay%1.5}s ease-in-out ${e.$delay+.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${En} 1.5s linear infinite,
      ${Tn} 1s ease-in-out infinite;
    text-shadow:
      0 0 40px rgba(176, 149, 227, 0.8),
      0 0 80px rgba(80, 19, 192, 0.3);
    transform: scale(1.12) translateY(-3px);
  }
`,Dn=a(Ci)`
  font-size: clamp(64px, 12vw, 160px);
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    font-size: clamp(40px, 10vw, 64px);
  }
`,An=a(Ci)`
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: 0.18em;
  -webkit-text-fill-color: rgba(211, 196, 239, 0.65);
  background: none;
  animation: ${e=>e.$animate?D`
          ${Si} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${e.$delay}s forwards
        `:"none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`,Fo=T`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`,Oo=a.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${g.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${Fo} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`,No=T`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`,jo=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: clamp(20px, 2.5vw, 36px);
`,Pn=a.span`
  display: inline-block;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.4) 50%,
    transparent 100%
  );
  animation: ${No} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`,Wo=T`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`,_o=T`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`,Ho=a.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${Wo} 0.5s ease-out 2.5s forwards,
    ${_o} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`,Uo=T`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`,qo=T`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`,Vo=a.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${qo} 0.8s ease-out 2.8s forwards;
`,vt=a.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${Uo} 1.5s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;function Yo(e){return V(i=>{if(!e.current)return;const r=e.current.getBoundingClientRect(),o=(i.clientX-r.left)/r.width*100,s=(i.clientY-r.top)/r.height*100;e.current.style.setProperty("--mx",`${o}%`),e.current.style.setProperty("--my",`${s}%`)},[e])}function Go(e){const t=V(r=>{if(!e.current)return;const o=e.current.getBoundingClientRect(),s=(r.clientX-o.left)/o.width-.5,l=(r.clientY-o.top)/o.height-.5;e.current.style.transform=`rotateX(${l*-5}deg) rotateY(${s*5}deg)`},[e]),i=V(()=>{e.current&&(e.current.style.transform="rotateX(0deg) rotateY(0deg)")},[e]);return{handleTiltMove:t,handleTiltLeave:i}}function Qo(e=.2){const t=j(null),[i,r]=F(!1);return N(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const o=t.current;if(!o)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),s.disconnect())},{threshold:e});return s.observe(o),()=>s.disconnect()},[e]),[t,i]}function qe({text:e,Component:t,baseDelay:i=0,animate:r=!0}){return n("span",{style:{display:"inline-flex",flexWrap:"nowrap",whiteSpace:"nowrap"},children:e.split("").map((o,s)=>n(t,{$animate:r,$delay:i+s*.07,children:o},`${o}-${s}`))})}function Jo(){const{stats:e,waitList:t}=W("analytics"),i=j(null),r=j(null),o=Yo(i),{handleTiltMove:s,handleTiltLeave:l}=Go(r),[u,d]=Qo(.2),f=V(h=>{o(h),s(h)},[o,s]);return n(co,{ref:u,"aria-label":"analytics",onMouseMove:f,onMouseLeave:l,children:n(po,{children:t?c(Re,{children:[c(mo,{children:[n(fo,{}),n(xo,{}),n(bo,{})]}),n(wo,{}),n(yo,{}),n(Eo,{}),n(So,{}),n(To,{ref:i}),$o.map((h,x)=>n(Io,{$x:h.x,$y:h.y,$size:h.size,$dur:h.dur,$delay:h.delay,$op:h.op},x)),n(Mo,{children:n(Do,{ref:r,children:c(Po,{children:[n(Ue,{$pos:"tl"}),n(Ue,{$pos:"tr"}),n(Ue,{$pos:"bl"}),n(Ue,{$pos:"br"}),c(Ro,{children:[c(Mn,{children:[n(qe,{text:"WE",Component:An,baseDelay:.1,animate:d}),n("span",{style:{width:"clamp(8px,1.5vw,20px)"}}),n(qe,{text:"ARE",Component:An,baseDelay:.3,animate:d})]}),c(Mn,{style:{marginTop:"clamp(4px, 0.8vw, 12px)"},children:[n(qe,{text:"COMING",Component:Dn,baseDelay:.5,animate:d}),n(qe,{text:"SOON",Component:Dn,baseDelay:.9,animate:d})]})]}),n(Oo,{children:"Something extraordinary is on its way"}),c(jo,{children:[n(Pn,{}),n(Ho,{}),n(Pn,{})]}),c(Vo,{children:[n(vt,{$delay:0}),n(vt,{$delay:.3}),n(vt,{$delay:.6})]})]})})})]}):n(lo,{items:e})})})}const $i=T`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Xo(e=.15){const t=j(null),[i,r]=F(!1);return N(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const o=t.current;if(!o)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),s.disconnect())},{threshold:e});return s.observe(o),()=>s.disconnect()},[e]),[t,i]}const Ko=a.section`
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
`,Zo=a.div`
  width: 100%;
  max-width: ${$e};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,es=a.h2`
  margin: 0;
  font-family: ${g.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
  opacity: 0;

  ${e=>e.$inView&&D`
      animation: ${$i} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,ts=a.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${g.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
  opacity: 0;

  ${e=>e.$inView&&D`
      animation: ${$i} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,ns=a.div`
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
`;function is({id:e}){const{titleLine1:t,titleLine2:i,description:r}=W("supercharge"),[o,s]=Xo(.15);return n(Ko,{id:e,"aria-label":"supercharge",ref:o,children:n(Zo,{children:c(ns,{children:[c(es,{$inView:s,children:[t,n("br",{}),i]}),n(ts,{$inView:s,children:r})]})})})}const as=T`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function rs(e=.1){const t=j(null),[i,r]=F(!1);return N(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const o=t.current;if(!o)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),s.disconnect())},{threshold:e});return s.observe(o),()=>s.disconnect()},[e]),[t,i]}const os=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,ss=/^[0-9\s\-+()]{10,15}$/;function Ve(e,t){if(!t||!t.trim())return"Required";switch(e){case"email":return os.test(t.trim())?"":"Invalid email";case"phone":return ss.test(t.trim())?"":"Invalid phone number";case"fullName":return t.trim().length>=2?"":"At least 2 characters";case"orgName":return t.trim().length>=2?"":"At least 2 characters";default:return""}}const zn=[{key:"learner",title:"Learners",desc:"Have questions about your course, progress, or certification? Reach out and we’ll get you the support you need."},{key:"instructor",title:"Instructors",desc:"Interested in joining our platform or facing technical issues while managing your content? We’re just a message away."},{key:"partner",title:"Partners",desc:"Let’s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team."}],ls=()=>c("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[n("path",{d:"M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z",fill:"#D3C4EF",fillOpacity:".8"}),n("path",{d:"M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",fill:"#EEE7F9"})]}),cs=()=>c("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[n("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",fill:"#D3C4EF"}),n("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",fill:"#D3C4EF",fillOpacity:".6"}),n("path",{d:"M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z",fill:"#EEE7F9"})]}),ds=()=>c("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[n("path",{d:"M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#D3C4EF",fillOpacity:".6"}),n("path",{d:"M9 11a3 3 0 100-6 3 3 0 000 6z",fill:"#D3C4EF"}),n("path",{d:"M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z",fill:"#D3C4EF",fillOpacity:".6"}),n("path",{d:"M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",fill:"#D3C4EF"})]}),ps={learner:ls,instructor:cs,partner:ds},us=a.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${I.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`,sn=a.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`,gs=a(sn)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `,hs=a(sn)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `,ms=a(sn)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `,fs=a.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ne=D`
  opacity: 0;
  ${e=>e.$show&&D`
    animation: ${as} 0.7s ease forwards;
    animation-delay: ${e.$d||"0s"};
  `}
`,xs=a.h2`
  margin: 0;
  font-family: ${g.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${Ne}
`,bs=a.p`
  margin: 16px 0 0;
  font-family: ${g.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${Ne}
`,ys=a.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  ${Ne}

  ${I.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`,vs=a.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${e=>e.$active?"drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))":"drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${I.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`,ws=a.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
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

  ${I.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${e=>e.$active?"rgba(176,149,227,0.5)":"rgba(176,149,227,0.12)"};
  }
`,ks=a.div`
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
`,Ss=a.span`
  font-family: ${g.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${I.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`,Cs=a.span`
  font-family: ${g.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${I.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`,$s=a.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${g.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${Ne}
  }
`,Is=a.div`
  position: relative;
  width: 100%;
  height: 80px;
  margin-top: 0;
  @media (max-width: 600px) { display: none; }
`,wt=a.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${e=>e.$pos==="left"&&D` left: 18%; transform: rotate(18deg); transform-origin: top center; `}
  ${e=>e.$pos==="center"&&D` left: 50%; `}
  ${e=>e.$pos==="right"&&D` left: 82%; transform: rotate(-18deg); transform-origin: top center; `}
`,Ls=a.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${Ne}

  ${I.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`,Es=a.h3`
  margin: 0;
  font-family: ${g.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${I.mobile} { font-size: 32px; }
`,Ts=a.p`
  margin: 8px 0 0;
  font-family: ${g.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${I.mobile} { font-size: 15px; }
`,Ms=a.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${I.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`,_=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${e=>e.$full&&D` grid-column: 1 / -1; `}
`,H=a.label`
  font-family: ${g.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`,ln=D`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${g.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`,U=a.input` ${ln} `,Ds=a.textarea`
  ${ln}
  min-height: 90px;
  resize: vertical;
`,As=a.select`
  ${ln}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${g.body};
    padding: 8px;
  }
`,q=a.span`
  font-family: ${g.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`,Ps=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`,zs=a.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${g.body};
  font-size: 13px;
  color: #eee7f9;
`,Bs=a.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`,Rs=a.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`,Fs=a.div`
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
`,Os=a.span`
  font-family: ${g.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`,kt=a.button`
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
  font-family: ${g.body};
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
`,Ns=a.div`
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
`,js=a.span`
  font-family: ${g.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`,Ws=a.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${g.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`,_s=a.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Hs=a.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`,Us=a.h3`
  margin: 0;
  font-family: ${g.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`,qs=a.p`
  margin: 0;
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;function Ye(e){switch(e){case"learner":return{fullName:"",phone:"",email:"",college:"",branch:"",year:"",query:"",newsletter:!1};case"instructor":return{fullName:"",phone:"",email:"",topics:[],otherTopic:void 0};case"partner":return{orgType:"",orgName:"",students:"",phone:"",email:""};default:return{}}}function Vs({id:e}){const t=W("api"),[i,r]=F("learner"),[o,s]=F(Ye("learner")),[l,u]=F({}),[d,f]=F(!1),[h,x]=F(!1);j(null);const[k,S]=rs(.08),C=j(null);N(()=>{const p={"#contact-learner":"learner","#contact-instructor":"instructor","#contact-partner":"partner"};function m(){const E=window.location.hash,P=p[E];P&&(r(P),s(Ye(P)),u({}),f(!1),requestAnimationFrame(()=>{const K=C.current;if(K){const be=document.querySelector("nav")?.offsetHeight||72,Te=K.getBoundingClientRect().top+window.scrollY-be;window.scrollTo({top:Te,behavior:"smooth"})}}))}return m(),window.addEventListener("hashchange",m),()=>window.removeEventListener("hashchange",m)},[]);const M=V(p=>{r(p),s(Ye(p)),u({}),f(!1)},[]),L=V((p,m)=>{s(E=>({...E,[p]:m})),l[p]&&u(E=>({...E,[p]:""}))},[l]),A=V(p=>{p&&(s(m=>({...m,topics:m.topics.includes(p)?m.topics:[...m.topics,p]})),l.topics&&u(m=>({...m,topics:""})))},[l]),O=V(()=>{s(p=>{const m=p.otherTopic?.trim();return m?{...p,topics:p.topics.includes(m)?p.topics:[...p.topics,m],otherTopic:void 0}:p}),l.topics&&u(p=>({...p,topics:""}))},[l]),R=V(p=>{s(m=>({...m,topics:m.topics.filter(E=>E!==p)}))},[]),v=V(async p=>{p.preventDefault();const m={};if(i==="learner")["fullName","phone","email"].forEach(E=>{const P=Ve(E,o[E]);P&&(m[E]=P)}),o.college||(m.college="Required"),o.branch||(m.branch="Required"),o.year||(m.year="Required");else if(i==="instructor")["fullName","phone","email"].forEach(E=>{const P=Ve(E,o[E]);P&&(m[E]=P)}),o.topics.length||(m.topics="Add at least one topic");else{o.orgType||(m.orgType="Required");const E=Ve("orgName",o.orgName);E&&(m.orgName=E),o.students||(m.students="Required"),["phone","email"].forEach(P=>{const K=Ve(P,o[P]);K&&(m[P]=K)})}if(Object.keys(m).length){u(m);return}x(!0),u(E=>({...E,_form:""}));try{i==="learner"?await Hr(t,o):i==="instructor"?await Ur(t,o):await qr(t,o),f(!0)}catch(E){u({_form:E.message||"Something went wrong. Please try again."})}finally{x(!1)}},[i,o,t]),y=V(()=>{v({preventDefault:()=>{}})},[v]),w=()=>c(Re,{children:[c(_,{children:[n(H,{children:"Full Name"}),n(U,{placeholder:"Enter full name",value:o.fullName,onChange:p=>L("fullName",p.target.value)}),l.fullName&&n(q,{children:l.fullName})]}),c(_,{children:[n(H,{children:"Phone Number"}),n(U,{placeholder:"Enter phone number",value:o.phone,onChange:p=>L("phone",p.target.value)}),l.phone&&n(q,{children:l.phone})]}),c(_,{children:[n(H,{children:"Email"}),n(U,{type:"email",placeholder:"Enter email address",value:o.email,onChange:p=>L("email",p.target.value)}),l.email&&n(q,{children:l.email})]}),c(_,{children:[n(H,{children:"College Name"}),n(U,{placeholder:"Enter college name",value:o.college,onChange:p=>L("college",p.target.value)}),l.college&&n(q,{children:l.college})]}),c(_,{children:[n(H,{children:"Branch"}),n(U,{placeholder:"Enter branch",value:o.branch,onChange:p=>L("branch",p.target.value)}),l.branch&&n(q,{children:l.branch})]}),c(_,{children:[n(H,{children:"Year of Passing"}),n(U,{placeholder:"Enter year of passing",value:o.year,onChange:p=>L("year",p.target.value)}),l.year&&n(q,{children:l.year})]}),c(_,{$full:!0,children:[c(H,{children:["Query ",n("span",{style:{color:"rgba(238,231,249,0.35)",fontWeight:400},children:"(optional)"})]}),n(Ds,{placeholder:"Any questions or queries that you have?",value:o.query,onChange:p=>L("query",p.target.value)})]})]}),$=W("courses")||[],b=()=>c(Re,{children:[c(_,{children:[n(H,{children:"Full Name"}),n(U,{placeholder:"Enter full name",value:o.fullName,onChange:p=>L("fullName",p.target.value)}),l.fullName&&n(q,{children:l.fullName})]}),c(_,{children:[n(H,{children:"Phone Number"}),n(U,{placeholder:"Enter phone number",value:o.phone,onChange:p=>L("phone",p.target.value)}),l.phone&&n(q,{children:l.phone})]}),c(_,{children:[n(H,{children:"Email"}),n(U,{type:"email",placeholder:"Enter email address",value:o.email,onChange:p=>L("email",p.target.value)}),l.email&&n(q,{children:l.email})]}),c(_,{$full:!0,children:[n(H,{children:"Topics you can teach"}),o.topics.length>0&&n(Ps,{children:o.topics.map(p=>c(zs,{children:[p,n(Bs,{onClick:()=>R(p),"aria-label":`Remove ${p}`,children:n("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n("path",{d:"M9 3L3 9M3 3l6 6",stroke:"#EEE7F9",strokeWidth:"1.5",strokeLinecap:"round"})})})]},p))}),c(As,{value:"",onChange:p=>{const m=p.target.value;m&&(m==="__other__"?s(E=>({...E,otherTopic:""})):A(m),p.target.value="")},children:[n("option",{value:"",children:"Select a topic"}),$.filter(p=>!o.topics.includes(p)).map(p=>n("option",{value:p,children:p},p)),n("option",{value:"__other__",children:"Other"})]}),typeof o.otherTopic=="string"&&c("div",{style:{display:"flex",gap:10,marginTop:4},children:[n(U,{placeholder:"Enter your topic",value:o.otherTopic,onChange:p=>L("otherTopic",p.target.value),onKeyDown:p=>{p.key==="Enter"&&(p.preventDefault(),O())},style:{flex:1}}),n(kt,{type:"button",onClick:O,style:{marginTop:0,width:"auto",padding:"0 24px",height:43,fontSize:14},children:"Add"})]}),l.topics&&n(q,{children:l.topics})]})]}),B=()=>c(Re,{children:[c(_,{children:[n(H,{children:"Organisation Type"}),n(U,{placeholder:"Enter organisation type",value:o.orgType,onChange:p=>L("orgType",p.target.value)}),l.orgType&&n(q,{children:l.orgType})]}),c(_,{children:[n(H,{children:"Organisation Name"}),n(U,{placeholder:"Enter organisation name",value:o.orgName,onChange:p=>L("orgName",p.target.value)}),l.orgName&&n(q,{children:l.orgName})]}),c(_,{children:[n(H,{children:"Number of Students"}),n(U,{placeholder:"Enter number of students",value:o.students,onChange:p=>L("students",p.target.value)}),l.students&&n(q,{children:l.students})]}),c(_,{children:[n(H,{children:"Phone Number"}),n(U,{placeholder:"Enter phone number",value:o.phone,onChange:p=>L("phone",p.target.value)}),l.phone&&n(q,{children:l.phone})]}),c(_,{children:[n(H,{children:"Email"}),n(U,{type:"email",placeholder:"Enter email address",value:o.email,onChange:p=>L("email",p.target.value)}),l.email&&n(q,{children:l.email})]})]});return c(us,{id:e,ref:p=>{k.current=p,C.current=p},"aria-label":"Contact Us",children:[n("svg",{width:"0",height:"0",style:{position:"absolute"},children:n("defs",{children:n("clipPath",{id:"shield-clip",clipPathUnits:"objectBoundingBox",children:n("path",{d:"M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z"})})})}),n(gs,{}),n(hs,{}),n(ms,{}),c(fs,{children:[n(xs,{$show:S,$d:"0s",children:"We are here to help you"}),n(bs,{$show:S,$d:"0.1s",children:"Whether you’re a student with a question, an educator with a suggestion, or a partner looking to collaborate — we’re always eager to hear from you."}),n(ys,{$show:S,$d:"0.2s",children:zn.map(p=>{const m=ps[p.key];return n(vs,{$active:i===p.key,onClick:()=>M(p.key),children:c(ws,{$active:i===p.key,type:"button","aria-pressed":i===p.key,children:[n(ks,{children:n(m,{})}),n(Ss,{children:p.title}),n(Cs,{children:p.desc})]})},p.key)})}),n($s,{$show:S,$d:"0.25s",children:zn.find(p=>p.key===i)?.desc},i),c(Is,{children:[n(wt,{$pos:"left"}),n(wt,{$pos:"center"}),n(wt,{$pos:"right"})]}),n(Ls,{$show:S,$d:"0.35s",children:d?c(_s,{children:[n(Hs,{children:n("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:n("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"#B095E3"})})}),n(Us,{children:"Thank you!"}),n(qs,{children:"We’ve received your details and will contact you soon."}),n(kt,{type:"button",onClick:()=>{f(!1),s(Ye(i))},children:"Submit another"})]}):c("form",{onSubmit:v,noValidate:!0,children:[n(Es,{children:"Drop your Details"}),n(Ts,{children:"We will contact you real soon!"}),c(Ms,{children:[i==="learner"&&w(),i==="instructor"&&b(),i==="partner"&&B()]}),i==="learner"&&c(Rs,{children:[n(Fs,{$checked:o.newsletter,onClick:()=>L("newsletter",!o.newsletter),role:"checkbox","aria-checked":o.newsletter,tabIndex:0,onKeyDown:p=>{(p.key===" "||p.key==="Enter")&&(p.preventDefault(),L("newsletter",!o.newsletter))},children:n("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n("path",{d:"M2 6l3 3 5-5",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),n(Os,{children:"Stay in the Loop! Subscribe to our newsletter and be the first to know about exciting features and exclusive collaborations."})]}),l._form&&c(Ns,{children:[n(js,{children:l._form}),n(Ws,{type:"button",onClick:y,disabled:h,children:h?"Retrying…":"Retry"})]}),n(kt,{type:"submit",disabled:h,children:h?"Submitting…":"Submit"})]})})]})]})}const Ys=({width:e=24,height:t=24,color:i="currentColor",...r})=>n("svg",{width:e,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:i,...r,children:n("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),Gs=({width:e=24,height:t=24,color:i="currentColor",...r})=>n("svg",{width:e,height:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:i,...r,children:n("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Qs=({width:e=30,height:t=30,color:i="currentColor"})=>n("svg",{width:e,height:t,viewBox:"0 0 24 24",fill:i,children:n("path",{d:"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Js=({width:e=30,height:t=30,color:i="currentColor"})=>n("svg",{width:e,height:t,viewBox:"0 0 24 24",fill:i,children:n("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})}),Xs=({width:e=30,height:t=30,color:i="currentColor"})=>n("svg",{width:e,height:t,viewBox:"0 0 24 24",fill:i,children:n("path",{d:"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),Ks=({width:e=15,height:t=20,color:i="#B095E3",...r})=>n("svg",{width:e,height:t,viewBox:"0 0 15 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:n("path",{d:"M7.5 0C3.35813 0 0 3.35813 0 7.5C0 9.13094 0.534688 10.6275 1.42344 11.8531C1.43938 11.8825 1.44187 11.9153 1.46 11.9434L6.46 19.4434C6.69188 19.7913 7.0825 20 7.5 20C7.9175 20 8.30812 19.7913 8.54 19.4434L13.54 11.9434C13.5584 11.9153 13.5606 11.8825 13.5766 11.8531C14.4653 10.6275 15 9.13094 15 7.5C15 3.35813 11.6419 0 7.5 0ZM7.5 10C6.11937 10 5 8.88062 5 7.5C5 6.11937 6.11937 5 7.5 5C8.88062 5 10 6.11937 10 7.5C10 8.88062 8.88062 10 7.5 10Z",fill:i})}),Zs=({width:e=20,height:t=20,color:i="#B095E3",...r})=>n("svg",{width:e,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:n("path",{d:"M16.6607 12.8167C15.6366 12.8167 14.6458 12.65 13.7216 12.35C13.5768 12.3009 13.4212 12.2936 13.2724 12.329C13.1237 12.3643 12.9879 12.4409 12.8807 12.55L11.5735 14.1917C9.2172 13.0667 7.01079 10.9417 5.83681 8.5L7.4604 7.11667C7.6852 6.88333 7.75181 6.55833 7.66022 6.26667C7.35216 5.34167 7.19396 4.35 7.19396 3.325C7.19396 2.875 6.81929 2.5 6.36968 2.5H3.48885C3.03924 2.5 2.49805 2.7 2.49805 3.325C2.49805 11.0667 8.93412 17.5 16.6607 17.5C17.2519 17.5 17.485 16.975 17.485 16.5167V13.6417C17.485 13.1917 17.1103 12.8167 16.6607 12.8167Z",fill:i})}),el=({width:e=20,height:t=20,color:i="#B095E3",...r})=>n("svg",{width:e,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:n("path",{d:"M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z",fill:i})}),Ii=T`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function tl(e=.1){const t=j(null),[i,r]=F(!1);return N(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const o=t.current;if(!o)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),s.disconnect())},{threshold:e});return s.observe(o),()=>s.disconnect()},[e]),[t,i]}const nl={FacebookIcon:Ys,TwitterIcon:Gs,YoutubeIcon:Qs,InstagramIcon:Js,DiscordIcon:Xs},il=a.footer`
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

  ${I.mobile} {
    height: auto;
    min-height: 460px;
  }
`,al=a.div`
  width: 100%;
  max-width: ${$e};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;

  ${I.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`,rl=a.div`
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

  ${e=>e.$inView&&D`
      animation: ${Ii} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${I.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${I.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,ol=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${I.mobile} {
    align-items: center;
  }
`,sl=a.h2`
  margin: 0;
  font-family: ${g.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${I.mobile} {
    font-size: 32px;
    text-align: center;
  }
`,ll=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,St=a.div`
  margin: 0;
  font-family: ${g.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${I.mobile} {
    justify-content: center;
  }
`,Ct=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,cl=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,dl=a.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${I.mobile} {
    width: 180px;
    height: auto;
  }
`,pl=a.p`
  margin: 0;
  font-family: ${g.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${I.mobile} {
    font-size: 14px;
  }
`,ul=a.div`
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

  ${e=>e.$inView&&D`
      animation: ${Ii} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${I.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${I.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,gl=a.p`
  margin: 0;
  font-family: ${g.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${I.mobile} {
    font-size: 12px;
    text-align: center;
  }
`,hl=a.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,ml=a.a`
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
`,fl=a.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

  ${I.mobile} {
    gap: 16px;
  }
`,$t=a.a`
  font-family: ${g.body};
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
`,xl=new Date().getFullYear(),ce=({id:e})=>{const{contactTitle:t,location:i,phone:r,email:o,tagline:s,companyName:l,logoAlt:u,socialLinks:d}=W("footer"),[f,h]=tl(.1);return n(il,{id:e,ref:f,children:c(al,{children:[c(rl,{$inView:h,children:[c(ol,{children:[n(sl,{children:t}),c(ll,{children:[c(St,{children:[n(Ct,{children:n(Ks,{width:15,height:20,color:"#B095E3"})}),i]}),c(St,{children:[n(Ct,{children:n(Zs,{width:18,height:18,color:"#B095E3"})}),r]}),c(St,{children:[n(Ct,{children:n(el,{width:18,height:18,color:"#B095E3"})}),o]})]}),c(fl,{children:[n($t,{href:"#contact-learner",children:"Learner Form →"}),n($t,{href:"#contact-instructor",children:"Instructor Form →"}),n($t,{href:"#contact-partner",children:"Partner Form →"})]})]}),c(cl,{children:[n(dl,{src:vi,alt:u,loading:"lazy",decoding:"async"}),n(pl,{children:s})]})]}),c(ul,{$inView:h,children:[c(gl,{children:["© ",xl," ",l,". All Rights Reserved."]}),n(hl,{children:d.map(x=>{const k=nl[x.icon];return n(ml,{href:x.url,target:"_blank",rel:"noopener noreferrer","aria-label":x.name,children:n(k,{})},x.name)})})]})]})})},bl="/assets/phone-screen-uLB7OkVb.webp",yl=T`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function vl(e=.15){const t=j(null),[i,r]=F(!1);return N(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const o=t.current;if(!o)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),s.disconnect())},{threshold:e});return s.observe(o),()=>s.disconnect()},[e]),[t,i]}const wl=a.div`
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

  ${e=>e.$inView&&D`
      animation: ${yl} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${I.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${I.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
  }
`,kl=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${I.mobile} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`,Sl=a.h2`
  margin: 0;
  font-family: ${g.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${I.mobile} {
    font-size: 36px;
  }
`,Cl=a.p`
  margin: 0;
  font-family: ${g.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${I.mobile} {
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
  }
`,$l=a.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${I.mobile} {
    display: none;
  }
`,Il=a.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`,Ll=a.img`
  width: 100%;
  height: 100%;
  display: block;
`,El=({onSubmit:e,id:t})=>{const{title:i,subtitle:r,inputPlaceholder:o,buttonText:s}=W("joinWaitlist"),l=W("api"),[u,d]=vl(.15);return c(wl,{id:t,ref:u,$inView:d,children:[c(kl,{children:[n(Sl,{children:i}),n(Cl,{children:r}),n(wi,{placeholder:o,buttonText:s,onSubmit:e||(h=>ki(l,h))})]}),n($l,{children:n(Il,{children:n(Ll,{src:bl,alt:"Margg app interface showing roadmap-based learning features",width:1036,height:1248,loading:"lazy",decoding:"async"})})})]})},Tl="/assets/phone-screen-2-DEQ8AWQ-.webp",Ml=a.div`
  background: #ffffff1a;
  border-radius: 24px;
`,Ie=a.h3`
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
`;const Dl="/assets/roadmap-Dn-5xO1L.webp",Al=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,Pl=a.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`,zl=()=>{const{roadmap:e}=W("blocks");return c(Al,{children:[n(Ie,{children:e.title}),n(Pl,{src:Dl,alt:"Roadmap based learning path on Margg education platform",width:1120,height:608,loading:"lazy",decoding:"async"})]})},Bl="/assets/mentor-B3u5TnvR.webp",Rl=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,Fl=a.img`
  position: absolute;
  bottom: 0;
  width: 52%;
`,Ol=()=>{const{mentorship:e}=W("blocks");return c(Rl,{children:[n(Ie,{children:e.title}),n(Fl,{src:Bl,alt:"One-on-one mentorship sessions on Margg LMS platform",width:457,height:539,loading:"lazy",decoding:"async"})]})},Nl="/assets/community-DUEL_A6f.webp",jl=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,Wl=a.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`,_l=()=>{const{community:e}=W("blocks");return c(jl,{children:[n(Ie,{children:e.title}),n(Wl,{src:Nl,alt:"Margg peer learning community for collaborative education",width:1236,height:1136,loading:"lazy",decoding:"async"})]})},Hl="/assets/focus-timer-C5HEcCmJ.webp",Ul=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`,ql=a.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`,Vl=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`,Yl=a(Ie)`
  text-align: right;
  width: 50%;
`,Gl=()=>{const{focusTimer:e}=W("blocks");return c(Ul,{children:[n(Vl,{children:n(Yl,{children:e.title})}),n(ql,{src:Hl,alt:"Focus timer for productive study sessions on Margg",width:479,height:648,loading:"lazy",decoding:"async"})]})},Ql="/assets/streak-DyGuKhiQ.webp",Jl=a.div`
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
`;const Xl=a(Ie)`
  text-align: left;
`,Kl=a.img`
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
`,Zl=()=>{const{streaks:e}=W("blocks");return c(Jl,{children:[n(Xl,{children:e.title}),n(Kl,{src:Ql,alt:"Learning streak tracking and consistency feature",width:1108,height:412,loading:"lazy",decoding:"async"})]})},ec="/assets/interview-prep-DeoMkukO.webp",tc=a.div`
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
`,nc=a.img`
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
`,ic=()=>{const{interviewPrep:e}=W("blocks");return c(tc,{children:[n(Ie,{children:e.title}),n(nc,{src:ec,alt:"Interview preparation materials and mock tests on Margg",width:1500,height:1136,loading:"lazy",decoding:"async"})]})},ac=a.div`
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
`,Le=a(Ml)`
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
`,rc=a(Le)`
  grid-column: span 6;
  height: 200px;
`,oc=a(Le)`
  grid-column: span 3;
`,sc=a(Le)`
  grid-column: span 3;
`,lc=a(Le)`
  grid-column: span 4;
  min-height: 180px;
`,cc=a(Le)`
  grid-column: span 4;
  min-height: 60px;
`,dc=a(Le)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`,pc=()=>{const[e,t]=F(null),i=V(r=>{typeof window<"u"&&window.innerWidth>1e3||t(o=>o===r?null:r)},[]);return c(ac,{children:[n(rc,{"data-tapped":e==="roadmap",onClick:()=>i("roadmap"),children:n(zl,{})}),n(oc,{"data-tapped":e==="mentorship",onClick:()=>i("mentorship"),children:n(Ol,{})}),n(sc,{"data-tapped":e==="community",onClick:()=>i("community"),children:n(_l,{})}),n(lc,{"data-tapped":e==="focusTimer",onClick:()=>i("focusTimer"),children:n(Gl,{})}),n(dc,{"data-tapped":e==="interviewPrep",onClick:()=>i("interviewPrep"),children:n(ic,{})}),n(cc,{"data-tapped":e==="streaks",onClick:()=>i("streaks"),children:n(Zl,{})})]})},Li=T`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function uc(e=.1){const t=j(null),[i,r]=F(!1);return N(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const o=t.current;if(!o)return;const s=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),s.disconnect())},{threshold:e});return s.observe(o),()=>s.disconnect()},[e]),[t,i]}const gc=a.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${I.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`,hc=a.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${e=>e.$inView&&D`
      animation: ${Li} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${I.mobile} {
    display: none;
  }
`,mc=a.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`,fc=a.div`
  min-width: 0;
  opacity: 0;

  ${e=>e.$inView&&D`
      animation: ${Li} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,xc=()=>{const[e,t]=uc(.1);return c(gc,{ref:e,children:[n(hc,{$inView:t,children:n(mc,{src:Tl,alt:"Margg mobile app screenshot showing learning dashboard",width:1113,height:2340,loading:"lazy",decoding:"async"})}),n(fc,{$inView:t,children:n(pc,{})})]})},bc=a.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`,yc=a.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,vc=()=>c(bc,{children:[n(le,{}),c(yc,{children:[n(io,{id:"home"}),n(Jo,{}),n(is,{id:"products"}),n(xc,{}),n(Vs,{id:"contact-us"}),n(El,{}),n(ce,{})]})]}),Qt={"frontend-development-course":{slug:"frontend-development-course",title:"Frontend Development Course – Learn React, HTML, CSS & JavaScript | Margg",metaDescription:"Master frontend development with Margg's roadmap-based course. Learn React, HTML, CSS, JavaScript, responsive design, and build real-world projects with expert mentorship. Enroll now.",keywords:"frontend development course, learn React, HTML CSS JavaScript course, frontend developer roadmap course, best frontend course India, web development course, UI development, responsive web design course, React course with projects, frontend bootcamp India",heroTitle:"Frontend Development Course",heroSubtitle:"Master Modern Web Development with a Structured Roadmap",heroDescription:"Learn to build beautiful, responsive, and production-ready web applications from scratch. Our roadmap-based frontend development course takes you from HTML basics to advanced React patterns — with real projects, one-on-one mentorship, and interview preparation.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why Choose Margg's Frontend Development Course?",content:`The demand for skilled frontend developers has never been higher. Companies across India and the world are looking for developers who can build fast, accessible, and visually stunning web applications. But most online courses teach isolated topics without connecting them into a career-ready skill set.

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

Commitment: ~12-15 hours per week including live sessions, exercises, and project work.`}],faqs:[{question:"Do I need a technical background for this data analysis course?",answer:"No. We start with Excel and basic data concepts, then progressively introduce SQL and Python. Students from commerce, arts, science, and engineering backgrounds have all succeeded in this course."},{question:"Which programming language is taught?",answer:"Python, which is the most popular language for data analysis. You'll specifically learn Pandas, NumPy, Matplotlib, and Seaborn — the core data analysis stack. We also teach SQL extensively for database querying."},{question:"Will I learn data visualization and dashboards?",answer:"Yes. Data visualization is a major focus. You'll learn to create charts, graphs, and interactive dashboards using Python libraries and understand principles of effective data storytelling."},{question:"Can this course help me get into data science?",answer:"Absolutely. Data analysis is the foundation of data science. After completing this course, you'll have the programming, statistics, and data manipulation skills needed to pursue machine learning and advanced data science topics."},{question:"What kind of job roles can I target after this course?",answer:"Common roles include Data Analyst, Business Analyst, Operations Analyst, Marketing Analyst, and Junior Data Scientist. These roles are available across industries including tech, finance, healthcare, and e-commerce."},{question:"Are there real datasets used in the course?",answer:"Yes. Every project uses real-world datasets — not toy examples. You'll work with actual e-commerce transaction data, social media metrics, financial data, and public datasets from government and research sources."}]}},Bn=a.div`
  background: #090215;
  min-height: 100vh;
`,Rn=a.section`
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
`,Fn=a.div`
  max-width: 860px;
  margin: 0 auto;
`,wc=a.nav`
  margin-bottom: 24px;
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,On=a.h1`
  font-family: ${g.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,kc=a.p`
  font-family: ${g.body};
  font-size: clamp(18px, 2.5vw, 24px);
  color: #D3C4EF;
  margin: 0 0 16px;
  font-weight: 400;
`,Sc=a.p`
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`,Nn=a.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${g.body};
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
`,Cc=a.main`
  max-width: ${$e};
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`,$c=a.article`
  max-width: 820px;
  margin: 0 auto;
`,Ic=a.section`
  margin-bottom: 56px;
`,Lc=a.h2`
  font-family: ${g.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,jn=a.p`
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`,Ec=a.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`,Tc=a.li`
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`,Mc=a.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,Dc=a.h2`
  font-family: ${g.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`,Ac=a.details`
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
`,Pc=a.summary`
  font-family: ${g.body};
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
`,zc=a.div`
  font-family: ${g.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`,Bc=a.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,Rc=a.h2`
  font-family: ${g.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`,Fc=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`,Oc=a(G)`
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
`,Nc=a.h3`
  font-family: ${g.heading};
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 8px;
  text-transform: uppercase;
`,jc=a.p`
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.5;
  margin: 0;
`,Wc=Object.keys(Qt);function _c(){const{slug:e}=Xt(),t=Qt[e];if(!t)return c(Bn,{children:[n(le,{}),n(Rn,{children:c(Fn,{children:[n(On,{children:"Course Not Found"}),n(jn,{children:"The course you're looking for doesn't exist."}),n(Nn,{href:"/",children:"Back to Home"})]})}),n(ce,{})]});const i=Wc.filter(r=>r!==e).map(r=>Qt[r]);return c(Bn,{children:[n(le,{}),n(Rn,{children:c(Fn,{children:[c(wc,{children:[n(G,{to:"/",children:"Home"})," / ",n("span",{children:t.heroTitle})]}),n(On,{children:t.heroTitle}),n(kc,{children:t.heroSubtitle}),n(Sc,{children:t.heroDescription}),n(Nn,{href:`/${t.ctaHash}`,children:t.ctaText})]})}),n(Cc,{children:n($c,{children:t.sections.map((r,o)=>c(Ic,{children:[n(Lc,{children:r.heading}),n(jn,{children:r.content}),r.list&&n(Ec,{children:r.list.map((s,l)=>n(Tc,{children:s},l))})]},o))})}),t.faqs?.length>0&&c(Mc,{children:[n(Dc,{children:"Frequently Asked Questions"}),t.faqs.map((r,o)=>c(Ac,{children:[n(Pc,{children:r.question}),n(zc,{children:r.answer})]},o))]}),c(Bc,{children:[n(Rc,{children:"Explore Other Courses"}),n(Fc,{children:i.map(r=>c(Oc,{to:`/${r.slug}`,children:[n(Nc,{children:r.heroTitle}),n(jc,{children:r.heroSubtitle})]},r.slug))})]}),n(ce,{})]})}const Hc=JSON.parse(`[{"id":1,"slug":"frontend-development","name":"Frontend Application Development","shortName":"Frontend","description":"Master modern web development with HTML, CSS, JavaScript, React, and TypeScript. Build production-ready web applications with structured learning.","icon":"🖥️","color":"#61DAFB","duration":"16 weeks","totalCourses":12,"metaTitle":"Frontend Development Roadmap – Learn HTML, CSS, React & JavaScript | Margg","metaDescription":"Follow Margg's structured frontend development roadmap. Master HTML, CSS, JavaScript, React, TypeScript & more with hands-on projects, mentorship, and career support.","keywords":"frontend roadmap, frontend developer path, learn React roadmap, web development roadmap India, frontend course structure","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":110,"slug":"html5-css3-deep-dive","title":"HTML5 & CSS3 Deep Dive","description":"Build accessible, SEO-friendly web pages with semantic HTML5 and modern CSS3. Master Flexbox, Grid, animations, and responsive design patterns.","level":"beginner","duration":"3 weeks","sections":["Semantic HTML5","CSS Fundamentals","Flexbox & Grid","Responsive Design"]},{"id":114,"slug":"dom-and-event-handling","title":"DOM & Event Handling","description":"Master DOM manipulation and event handling in JavaScript. Learn to create interactive web applications with efficient DOM operations.","level":"beginner","duration":"2 weeks","sections":["DOM Traversal","Element Manipulation","Event Listeners","Performance Optimization"]},{"id":113,"slug":"typescript-fundamentals","title":"TypeScript Fundamentals","description":"Master TypeScript for scalable JavaScript applications. Learn types, interfaces, generics, and advanced TypeScript features.","level":"intermediate","duration":"3 weeks","sections":["TypeScript Basics","Interfaces & Types","Generics","Advanced Patterns"]},{"id":115,"slug":"responsive-design-mastery","title":"Responsive Design Mastery","description":"Create responsive websites that work on all devices. Learn mobile-first design, CSS Grid, Flexbox, and modern responsive techniques.","level":"intermediate","duration":"2 weeks","sections":["Mobile-First Approach","Media Queries","Fluid Typography","Cross-Device Testing"]},{"id":111,"slug":"advanced-javascript-es6-plus","title":"Advanced JavaScript (ES6+)","description":"Deep dive into modern JavaScript — advanced closures, prototypes, async patterns, modules, and performance optimization for production apps.","level":"advanced","duration":"3 weeks","sections":["Closures & Prototypes","Async Patterns","Module Systems","Performance Tuning"]},{"id":112,"slug":"react-js-mastery","title":"React.js Mastery","description":"Build modern web applications with React. Master components, hooks, context, routing, and state management patterns.","level":"advanced","duration":"4 weeks","sections":["React Fundamentals","Hooks Deep Dive","Context & Routing","Advanced Patterns"]}],"addOns":[{"id":106,"slug":"redux-and-state-management","title":"Redux & State Management","description":"Master Redux, Redux Toolkit, and modern state management patterns for React applications. Learn when and how to manage complex application state.","level":"add-on","duration":"2 weeks","sections":["Redux Fundamentals","Redux Toolkit","Middleware & Thunks","State Architecture"]},{"id":107,"slug":"testing-react-applications","title":"Testing React Applications","description":"Comprehensive testing course covering Jest, React Testing Library, and E2E testing with Cypress. Build reliable, well-tested applications.","level":"add-on","duration":"2 weeks","sections":["Jest Fundamentals","React Testing Library","Integration Testing","E2E with Cypress"]}]},{"id":2,"slug":"backend-engineering","name":"Backend Engineering","shortName":"Backend","description":"Build scalable server-side applications with Node.js, Express, databases, and microservices. Master API design, security, and deployment.","icon":"⚙️","color":"#68A063","duration":"16 weeks","totalCourses":8,"metaTitle":"Backend Engineering Roadmap – Learn Node.js, APIs & Databases | Margg","metaDescription":"Follow Margg's structured backend engineering roadmap. Master Node.js, Express, PostgreSQL, MongoDB, microservices & DevOps with real projects and mentorship.","keywords":"backend roadmap, backend developer path, learn Node.js roadmap, API development roadmap, backend course India","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":116,"slug":"nodejs-fundamentals","title":"Node.js Fundamentals","description":"Master server-side JavaScript with Node.js. Learn core concepts, modules, file system, and building your first backend applications.","level":"beginner","duration":"3 weeks","sections":["Node.js Basics","Core Modules & NPM","File System & Streams","Event-Driven Programming"]},{"id":117,"slug":"expressjs-and-api-development","title":"Express.js & API Development","description":"Build robust REST APIs with Express.js. Learn middleware, routing, authentication, and modern API development practices.","level":"intermediate","duration":"3 weeks","sections":["Express.js Fundamentals","Middleware & Request Handling","REST API Design","Authentication & Authorization"]},{"id":118,"slug":"database-design-and-integration","title":"Database Design & Integration","description":"Master database design, SQL, NoSQL, and integration patterns. Learn MongoDB, PostgreSQL, and data modeling best practices.","level":"advanced","duration":"3 weeks","sections":["Database Fundamentals","SQL & PostgreSQL","MongoDB & NoSQL","Database Integration Patterns"]}],"addOns":[{"id":119,"slug":"microservices-architecture","title":"Microservices Architecture","description":"Design and implement microservices architecture. Learn service communication, API gateways, and distributed system patterns.","level":"add-on","duration":"3 weeks","sections":["Microservices Fundamentals","Service Communication","API Gateway & Load Balancing","Monitoring & Observability"]},{"id":120,"slug":"backend-security-and-devops","title":"Backend Security & DevOps","description":"Secure your backend applications and implement DevOps practices. Learn security best practices, CI/CD, and deployment strategies.","level":"add-on","duration":"3 weeks","sections":["Security Fundamentals","Authentication & Encryption","CI/CD Pipelines","Production Deployment"]}]},{"id":3,"slug":"ui-ux-engineering","name":"UI/UX Engineering","shortName":"UI/UX","description":"Design beautiful, user-centered digital experiences. Master Figma, design systems, user research, wireframing, and prototyping.","icon":"🎨","color":"#F24E1E","duration":"12 weeks","totalCourses":8,"metaTitle":"UI/UX Design Roadmap – Learn Design Thinking, Figma & Prototyping | Margg","metaDescription":"Follow Margg's structured UI/UX design roadmap. Master design thinking, Figma, prototyping, user research & design systems with real projects and mentorship.","keywords":"UI/UX roadmap, designer path, learn Figma roadmap, UX research roadmap, design course India","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":121,"slug":"design-thinking-fundamentals","title":"Design Thinking Fundamentals","description":"Master the design thinking process and user-centered design principles. Learn to empathize, define, ideate, prototype, and test digital solutions.","level":"beginner","duration":"3 weeks","sections":["Introduction to Design Thinking","Empathy & User Research","Problem Definition & Ideation","Prototyping & Testing"]},{"id":122,"slug":"ui-design-and-prototyping","title":"UI Design & Prototyping","description":"Create stunning user interfaces and interactive prototypes. Master Figma, design systems, and modern UI design principles.","level":"intermediate","duration":"3 weeks","sections":["Visual Design Principles","Interface Design Patterns","Figma Mastery","Interactive Prototyping"]},{"id":123,"slug":"user-experience-research","title":"User Experience Research","description":"Conduct comprehensive UX research and usability testing. Learn research methodologies, user interviews, and data-driven design decisions.","level":"advanced","duration":"3 weeks","sections":["Research Methodologies","User Interviews & Surveys","Usability Testing","Data Analysis & Insights"]}],"addOns":[{"id":124,"slug":"design-systems-and-frontend-collaboration","title":"Design Systems & Frontend Collaboration","description":"Build scalable design systems and collaborate effectively with developers. Learn component libraries and design-to-development workflows.","level":"add-on","duration":"2 weeks","sections":["Design Systems Fundamentals","Component Libraries","Developer Handoff","Design Tokens & Automation"]},{"id":125,"slug":"advanced-ux-strategy-and-business-impact","title":"Advanced UX Strategy & Business Impact","description":"Align UX strategy with business goals and measure design impact. Learn UX metrics, stakeholder management, and design leadership.","level":"add-on","duration":"2 weeks","sections":["UX Strategy & Business Alignment","UX Metrics & KPIs","Stakeholder Management","Design Leadership"]}]},{"id":4,"slug":"data-engineering","name":"Data Engineering","shortName":"Data","description":"Build robust data systems with Python, SQL, big data tools, and cloud platforms. Master ETL pipelines, distributed computing, and MLOps.","icon":"📊","color":"#3776AB","duration":"16 weeks","totalCourses":8,"metaTitle":"Data Engineering Roadmap – Learn Python, SQL, Spark & Cloud Data | Margg","metaDescription":"Follow Margg's structured data engineering roadmap. Master Python, SQL, Apache Spark, ETL pipelines, cloud services & MLOps with hands-on projects and mentorship.","keywords":"data engineering roadmap, data engineer path, learn Python data roadmap, SQL course roadmap, big data course India","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":126,"slug":"python-for-data-engineering","title":"Python for Data Engineering","description":"Master Python fundamentals for data engineering. Learn data structures, file handling, APIs, and essential libraries for data processing.","level":"beginner","duration":"3 weeks","sections":["Python Fundamentals","Data Processing Libraries","File Handling & APIs","Data Engineering Tools"]},{"id":127,"slug":"sql-and-database-systems","title":"SQL & Database Systems","description":"Master SQL and database design for data engineering. Learn advanced queries, optimization, and working with various database systems.","level":"intermediate","duration":"3 weeks","sections":["SQL Fundamentals","Advanced SQL Techniques","Database Design & Modeling","NoSQL & Modern Databases"]},{"id":128,"slug":"big-data-and-distributed-systems","title":"Big Data & Distributed Systems","description":"Master big data technologies and distributed computing. Learn Hadoop, Spark, Kafka, and cloud-based data processing at scale.","level":"advanced","duration":"3 weeks","sections":["Big Data Fundamentals","Hadoop Ecosystem","Apache Spark","Stream Processing"]}],"addOns":[{"id":129,"slug":"data-pipeline-and-etl-engineering","title":"Data Pipeline & ETL Engineering","description":"Build robust data pipelines and ETL processes. Learn workflow orchestration, data quality, and pipeline monitoring and optimization.","level":"add-on","duration":"3 weeks","sections":["ETL Fundamentals","Workflow Orchestration","Data Quality & Validation","Pipeline Monitoring & Optimization"]},{"id":130,"slug":"cloud-data-engineering-and-mlops","title":"Cloud Data Engineering & MLOps","description":"Master cloud data engineering and MLOps practices. Learn AWS/Azure data services, infrastructure as code, and ML pipeline automation.","level":"add-on","duration":"3 weeks","sections":["Cloud Data Services","Infrastructure as Code","MLOps & Model Deployment","Monitoring & Governance"]}]},{"id":5,"slug":"business-analytics","name":"Business Analytics","shortName":"Business","description":"Master business analysis, requirements engineering, process optimization, and data analytics for informed decision-making.","icon":"📈","color":"#FF6B35","duration":"14 weeks","totalCourses":8,"metaTitle":"Business Analytics Roadmap – Learn BA, Data Analysis & Process Optimization | Margg","metaDescription":"Follow Margg's structured business analytics roadmap. Master business analysis, requirements engineering, data analytics, process modeling & digital transformation.","keywords":"business analytics roadmap, business analyst path, BA course India, requirements engineering, process optimization course","starterKit":[{"id":146,"slug":"data-analysis-fundamentals","title":"Data Analysis Fundamentals","description":"Essential data analysis skills for business professionals. Learn Excel, basic statistics, data visualization, and interpreting business metrics.","level":"starter-kit","duration":"2 weeks","sections":["Excel for Data Analysis","Statistical Basics for Business","Data Visualization Fundamentals"]},{"id":147,"slug":"business-intelligence-basics","title":"Business Intelligence Basics","description":"Introduction to business intelligence concepts. Learn KPIs, dashboards, reporting, and data-driven decision making for business success.","level":"starter-kit","duration":"2 weeks","sections":["Power BI Interface","Data Modeling in Power BI","Interactive Dashboard Creation"]},{"id":148,"slug":"sql-for-business-analytics","title":"SQL for Business Analytics","description":"Essential SQL skills for business analysts. Learn to query databases, extract insights, and create reports for business decision-making.","level":"starter-kit","duration":"2 weeks","sections":["SQL Basics for Analysts","Advanced Queries and Joins","Business Intelligence with SQL"]}],"levels":[{"id":141,"slug":"business-analysis-fundamentals","title":"Business Analysis Fundamentals","description":"Master the core principles of business analysis. Learn requirements gathering, stakeholder management, process analysis, and business documentation fundamentals.","level":"beginner","duration":"3 weeks","sections":["Introduction to Business Analysis","Stakeholder Analysis & Management","Requirements Elicitation Techniques","Business Documentation & Communication"]},{"id":142,"slug":"requirements-engineering-and-management","title":"Requirements Engineering & Management","description":"Advanced requirements gathering, analysis, and management techniques. Learn elicitation methods, traceability, and change management for complex projects.","level":"intermediate","duration":"3 weeks","sections":["Advanced Elicitation Methods","Requirements Analysis & Validation","Requirements Traceability & Management","Change Management & Impact Analysis"]},{"id":143,"slug":"advanced-process-modeling-and-optimization","title":"Advanced Process Modeling & Optimization","description":"Master advanced business process analysis, modeling, and optimization. Learn BPMN, process mining, lean six sigma, and digital transformation strategies.","level":"advanced","duration":"3 weeks","sections":["Business Process Mapping & Modeling","BPMN & Process Notation Standards","Process Analysis & Optimization","Lean Six Sigma & Process Excellence"]}],"addOns":[{"id":144,"slug":"data-analytics-for-business-analysis","title":"Data Analytics for Business Analysis","description":"Leverage data analytics and business intelligence for informed decision-making. Learn SQL, data visualization, statistical analysis, and predictive modeling for business insights.","level":"add-on","duration":"3 weeks","sections":["Business Intelligence Fundamentals","SQL & Database Analysis","Data Visualization & Reporting","Statistical Analysis & Predictive Modeling"]},{"id":145,"slug":"digital-transformation-and-agile-ba","title":"Digital Transformation & Agile BA","description":"Navigate digital transformation initiatives and agile methodologies. Learn agile BA practices, user story writing, product ownership, and change management in digital environments.","level":"add-on","duration":"3 weeks","sections":["Digital Transformation Strategy","Agile Business Analysis Practices","User Stories & Product Backlog","Change Management & Adoption"]}]},{"id":8,"slug":"devops-engineering","name":"DevOps Engineering","shortName":"DevOps","description":"Master DevOps practices, CI/CD pipelines, containerization, cloud infrastructure, and site reliability engineering.","icon":"🔄","color":"#0DB7ED","duration":"16 weeks","totalCourses":8,"metaTitle":"DevOps Engineering Roadmap – Learn Docker, Kubernetes, CI/CD & Cloud | Margg","metaDescription":"Follow Margg's structured DevOps roadmap. Master Linux, CI/CD, Docker, Kubernetes, cloud infrastructure, IaC & SRE with real projects and mentorship.","keywords":"DevOps roadmap, DevOps engineer path, learn Docker Kubernetes roadmap, CI/CD course India, cloud infrastructure course","starterKit":[{"id":149,"slug":"linux-fundamentals-for-devops","title":"Linux Fundamentals for DevOps","description":"Essential Linux skills for DevOps engineers. Learn command line, file systems, process management, and basic system administration.","level":"starter-kit","duration":"2 weeks","sections":["Linux Command Line","File Systems & Permissions","Process Management","Shell Basics"]},{"id":150,"slug":"version-control-and-collaboration","title":"Version Control & Collaboration","description":"Master Git and collaborative development workflows. Learn branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching Strategies","Pull Requests & Reviews","Team Workflows"]},{"id":151,"slug":"infrastructure-as-code-basics","title":"Infrastructure as Code Basics","description":"Introduction to Infrastructure as Code principles. Learn automation, configuration management, and basic scripting for infrastructure.","level":"starter-kit","duration":"2 weeks","sections":["IaC Principles","Configuration Management","Automation Scripting","Environment Setup"]}],"levels":[{"id":131,"slug":"linux-and-system-administration","title":"Linux & System Administration","description":"Master Linux fundamentals and system administration. Learn command line, shell scripting, system monitoring, and server management essentials.","level":"beginner","duration":"3 weeks","sections":["Linux Fundamentals","Shell Scripting & Automation","System Monitoring & Performance","Network & Security Basics"]},{"id":132,"slug":"cicd-and-automation","title":"CI/CD & Automation","description":"Build automated CI/CD pipelines and deployment workflows. Master Jenkins, GitHub Actions, and modern DevOps automation practices.","level":"intermediate","duration":"3 weeks","sections":["Version Control & Git Workflows","CI/CD Pipeline Design","Jenkins & Automation Tools","Testing & Quality Assurance"]},{"id":133,"slug":"container-orchestration-and-kubernetes","title":"Container Orchestration & Kubernetes","description":"Master containerization with Docker and orchestration with Kubernetes. Learn microservices deployment, scaling, and management at enterprise scale.","level":"advanced","duration":"3 weeks","sections":["Docker Fundamentals","Kubernetes Architecture","Kubernetes Workloads","Advanced Kubernetes"]}],"addOns":[{"id":134,"slug":"cloud-infrastructure-and-iac","title":"Cloud Infrastructure & IaC","description":"Design and manage cloud infrastructure using Infrastructure as Code. Master Terraform, AWS/Azure services, and cloud architecture patterns.","level":"add-on","duration":"3 weeks","sections":["Cloud Architecture Fundamentals","Infrastructure as Code","AWS/Azure Services","Security & Compliance"]},{"id":135,"slug":"monitoring-and-site-reliability-engineering","title":"Monitoring & Site Reliability Engineering","description":"Implement comprehensive monitoring, alerting, and SRE practices. Learn observability, incident response, and maintaining high-availability systems.","level":"add-on","duration":"3 weeks","sections":["Observability Fundamentals","Monitoring Stack Implementation","Incident Response & Management","Reliability & Performance"]}]},{"id":9,"slug":"cyber-security","name":"Cyber Security Engineering","shortName":"Security","description":"Master network security, penetration testing, threat detection, cloud security, and compliance frameworks to protect digital assets.","icon":"🔐","color":"#E53935","duration":"16 weeks","totalCourses":8,"metaTitle":"Cyber Security Roadmap – Learn Ethical Hacking, Network Security & DevSecOps | Margg","metaDescription":"Follow Margg's structured cyber security roadmap. Master network security, penetration testing, threat detection, cloud security & compliance with hands-on labs.","keywords":"cyber security roadmap, security engineer path, ethical hacking course India, penetration testing roadmap, DevSecOps course","starterKit":[{"id":152,"slug":"information-security-fundamentals","title":"Information Security Fundamentals","description":"Essential cybersecurity concepts and principles. Learn CIA triad, threat landscape, risk management, and security best practices.","level":"starter-kit","duration":"2 weeks","sections":["CIA Triad & Principles","Threat Landscape","Risk Management","Security Best Practices"]},{"id":153,"slug":"network-security-basics","title":"Network Security Basics","description":"Foundation of network security concepts. Learn firewalls, VPNs, network protocols, intrusion detection, and secure network design.","level":"starter-kit","duration":"2 weeks","sections":["Network Protocols","Firewall Configuration","VPN & Encryption","Secure Design"]},{"id":154,"slug":"ethical-hacking-introduction","title":"Ethical Hacking Introduction","description":"Introduction to ethical hacking and penetration testing. Learn vulnerability assessment, testing methodologies, and responsible disclosure.","level":"starter-kit","duration":"2 weeks","sections":["Hacking Methodologies","Vulnerability Assessment","Testing Tools","Responsible Disclosure"]}],"levels":[{"id":136,"slug":"network-security-fundamentals","title":"Network Security Fundamentals","description":"Master network security basics, protocols, and threat detection. Learn firewalls, VPNs, intrusion detection, and network monitoring fundamentals.","level":"beginner","duration":"3 weeks","sections":["Network Protocols & Architecture","Firewall & Network Defense","Intrusion Detection & Prevention","VPN & Secure Communications"]},{"id":137,"slug":"application-security-and-penetration-testing","title":"Application Security & Penetration Testing","description":"Learn web application security, vulnerability assessment, and ethical hacking. Master OWASP Top 10, penetration testing, and security testing methodologies.","level":"intermediate","duration":"3 weeks","sections":["Web Application Security","OWASP Top 10 & Mitigation","Penetration Testing Methodology","Security Testing & Tools"]},{"id":138,"slug":"advanced-threat-detection-and-response","title":"Advanced Threat Detection & Response","description":"Master advanced cybersecurity operations, incident response, and threat hunting. Learn SIEM, SOC operations, digital forensics, and advanced persistent threat detection.","level":"advanced","duration":"3 weeks","sections":["SIEM & Security Operations","Incident Response & Forensics","Threat Hunting & Intelligence","Advanced Persistent Threats"]}],"addOns":[{"id":139,"slug":"cloud-security-and-devsecops","title":"Cloud Security & DevSecOps","description":"Secure cloud infrastructure and implement DevSecOps practices. Learn cloud security frameworks, container security, and security automation in CI/CD pipelines.","level":"add-on","duration":"3 weeks","sections":["Cloud Security Architecture","Container & Kubernetes Security","DevSecOps Pipeline Security","Security Automation & Orchestration"]},{"id":140,"slug":"compliance-and-risk-management","title":"Compliance & Risk Management","description":"Master cybersecurity governance, compliance frameworks, and risk assessment. Learn ISO 27001, NIST, SOX compliance, and security program management.","level":"add-on","duration":"3 weeks","sections":["Security Governance & Frameworks","Risk Assessment & Management","Compliance & Auditing","Business Continuity & Recovery"]}]}]`),st={roadmaps:Hc},lt=T`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;T`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;const Uc=a.div`
  background: #090215;
  min-height: 100vh;
`,qc=a.section`
  position: relative;
  padding: 160px clamp(24px, 7vw, 120px) 60px;
  text-align: center;
  background:
    radial-gradient(900px circle at 50% 30%, rgba(176,149,227,0.15), transparent 60%),
    radial-gradient(600px circle at 20% 80%, rgba(80,19,192,0.12), transparent 60%),
    radial-gradient(600px circle at 80% 80%, rgba(176,149,227,0.08), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${I.mobile} {
    padding-top: 120px;
    padding-bottom: 40px;
  }
`,Vc=a.nav`
  margin-bottom: 24px;
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,Yc=a.h1`
  font-family: ${g.heading};
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${lt} 0.6s ease-out;
`,Gc=a.p`
  font-family: ${g.body};
  font-size: clamp(16px, 2vw, 20px);
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 16px;
  animation: ${lt} 0.6s ease-out 0.1s both;
`,Qc=a.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
  animation: ${lt} 0.6s ease-out 0.2s both;

  ${I.mobile} {
    gap: 24px;
    flex-wrap: wrap;
  }
`,It=a.div`
  text-align: center;
`,Lt=a.div`
  font-family: ${g.heading};
  font-size: clamp(32px, 5vw, 48px);
  color: #B095E3;
  letter-spacing: 1px;
`,Et=a.div`
  font-family: ${g.body};
  font-size: 13px;
  color: rgba(238,231,249,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;
`,Jc=a.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px clamp(24px, 5vw, 80px) 100px;
`,Xc=a.p`
  font-family: ${g.body};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #B095E3;
  text-align: center;
  margin: 0 0 12px;
`,Kc=a.h2`
  font-family: ${g.heading};
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 48px;
`,Zc=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;

  ${I.mobile} {
    grid-template-columns: 1fr;
  }
`,Ei=a(G)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  border-radius: 20px;
  border: 1px solid rgba(176,149,227,0.15);
  background: rgba(211,196,239,0.04);
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: ${lt} 0.5s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${e=>e.$color||"#B095E3"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(176,149,227,0.4);
    background: rgba(211,196,239,0.08);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(80,19,192,0.2);

    &::before {
      opacity: 1;
    }
  }
`,ed=a.span`
  font-size: 40px;
  margin-bottom: 16px;
  display: block;
`,td=a.h3`
  font-family: ${g.heading};
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
`,nd=a.p`
  font-family: ${g.body};
  font-size: 15px;
  color: rgba(238,231,249,0.65);
  line-height: 1.65;
  margin: 0 0 20px;
  flex: 1;
`,id=a.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,Wn=a.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${g.body};
  font-size: 12px;
  color: rgba(238,231,249,0.5);
  background: rgba(176,149,227,0.1);
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
`,ad=a.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
`,Tt=a.span`
  font-family: ${g.body};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid;
  white-space: nowrap;

  &.starter {
    color: #4CAF50;
    border-color: rgba(76,175,80,0.3);
    background: rgba(76,175,80,0.08);
  }
  &.levels {
    color: #2196F3;
    border-color: rgba(33,150,243,0.3);
    background: rgba(33,150,243,0.08);
  }
  &.addons {
    color: #FF9800;
    border-color: rgba(255,152,0,0.3);
    background: rgba(255,152,0,0.08);
  }
`,rd=a.span`
  font-family: ${g.body};
  font-size: 14px;
  color: #B095E3;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;

  ${Ei}:hover & {
    gap: 14px;
  }
`,od=a.section`
  text-align: center;
  padding: 60px clamp(24px, 7vw, 120px) 100px;
  background:
    radial-gradient(600px circle at 50% 50%, rgba(80,19,192,0.12), transparent 60%);
`,sd=a.h2`
  font-family: ${g.heading};
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 16px;
`,ld=a.p`
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238,231,249,0.65);
  max-width: 560px;
  margin: 0 auto 32px;
  line-height: 1.7;
`,cd=a.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${g.body};
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
`,{roadmaps:Jt}=st,dd=Jt.reduce((e,t)=>e+t.starterKit.length+t.levels.length+t.addOns.length,0);function pd(){return c(Uc,{children:[n(le,{}),c(qc,{children:[c(Vc,{children:[n(G,{to:"/",children:"Home"})," / ",n("span",{children:"Roadmaps"})]}),n(Yc,{children:"Learning Roadmaps"}),n(Gc,{children:"Structured, roadmap-based learning paths designed to take you from beginner to job-ready. Each roadmap is divided into Starter-Kit, progressive Levels, and specialized Add-Ons."}),c(Qc,{children:[c(It,{children:[n(Lt,{children:Jt.length}),n(Et,{children:"Roadmaps"})]}),c(It,{children:[c(Lt,{children:[dd,"+"]}),n(Et,{children:"Courses"})]}),c(It,{children:[n(Lt,{children:"3"}),n(Et,{children:"Categories"})]})]})]}),c(Jc,{children:[n(Xc,{children:"Choose your path"}),n(Kc,{children:"Explore All Roadmaps"}),n(Zc,{children:Jt.map((e,t)=>c(Ei,{to:`/roadmap/${e.slug}`,$color:e.color,style:{animationDelay:`${t*.08}s`},children:[n(ed,{children:e.icon}),n(td,{children:e.name}),n(nd,{children:e.description}),c(id,{children:[c(Wn,{children:["⏱ ",e.duration]}),c(Wn,{children:["📚 ",e.totalCourses," courses"]})]}),c(ad,{children:[c(Tt,{className:"starter",children:[e.starterKit.length," Starter-Kit"]}),c(Tt,{className:"levels",children:[e.levels.length," Levels"]}),c(Tt,{className:"addons",children:[e.addOns.length," Add-Ons"]})]}),n(rd,{children:"Explore roadmap →"})]},e.id))})]}),c(od,{children:[n(sd,{children:"Ready to Start Learning?"}),n(ld,{children:"Join thousands of learners building real skills with Margg's structured roadmaps. Pick your path and start today."}),n(cd,{href:"/#contact-learner",children:"Join the Waitlist"})]}),n(ce,{})]})}const Ee=T`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,_n=a.div`
  background: #090215;
  min-height: 100vh;
`,Hn=a.section`
  position: relative;
  padding: 160px clamp(24px, 7vw, 120px) 60px;
  text-align: center;
  background:
    radial-gradient(800px circle at 40% 20%, ${e=>e.$glow||"rgba(176,149,227,0.15)"}, transparent 60%),
    radial-gradient(600px circle at 70% 80%, rgba(80,19,192,0.12), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${I.mobile} {
    padding-top: 120px;
    padding-bottom: 40px;
  }
`,ud=a.nav`
  margin-bottom: 24px;
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);
  animation: ${Ee} 0.5s ease-out;

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,gd=a.span`
  font-size: 56px;
  display: block;
  margin-bottom: 16px;
  animation: ${Ee} 0.5s ease-out 0.05s both;
`,Un=a.h1`
  font-family: ${g.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  animation: ${Ee} 0.5s ease-out 0.1s both;
`,qn=a.p`
  font-family: ${g.body};
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  max-width: 640px;
  margin: 0 auto 24px;
  animation: ${Ee} 0.5s ease-out 0.15s both;
`,hd=a.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  animation: ${Ee} 0.5s ease-out 0.2s both;
`,Be=a.span`
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  background: rgba(176,149,227,0.1);
  border: 1px solid rgba(176,149,227,0.15);
  padding: 8px 16px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,md=a.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 24px clamp(24px, 5vw, 80px) 0;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;

  ${I.mobile} {
    gap: 6px;
  }
`,Ge=a.button`
  font-family: ${g.body};
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  white-space: nowrap;

  ${e=>e.$active&&e.$variant==="starter"&&D`
    background: rgba(76,175,80,0.15);
    border-color: rgba(76,175,80,0.4);
    color: #4CAF50;
  `}
  ${e=>e.$active&&e.$variant==="levels"&&D`
    background: rgba(33,150,243,0.15);
    border-color: rgba(33,150,243,0.4);
    color: #2196F3;
  `}
  ${e=>e.$active&&e.$variant==="addons"&&D`
    background: rgba(255,152,0,0.15);
    border-color: rgba(255,152,0,0.4);
    color: #FF9800;
  `}
  ${e=>e.$active&&e.$variant==="all"&&D`
    background: rgba(176,149,227,0.15);
    border-color: rgba(176,149,227,0.4);
    color: #B095E3;
  `}
  ${e=>!e.$active&&D`
    border-color: rgba(176,149,227,0.15);
    color: rgba(238,231,249,0.5);
    &:hover {
      border-color: rgba(176,149,227,0.3);
      color: rgba(238,231,249,0.8);
    }
  `}

  ${I.mobile} {
    font-size: 12px;
    padding: 10px 16px;
  }
`,fd=a.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px clamp(24px, 5vw, 80px) 80px;
`,Mt=a.section`
  margin-bottom: 64px;
  animation: ${Ee} 0.4s ease-out;
`,Dt=a.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`,At=a.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;

  &.starter { background: #4CAF50; }
  &.levels  { background: #2196F3; }
  &.addons  { background: #FF9800; }
`,Pt=a.h2`
  font-family: ${g.heading};
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`,zt=a.p`
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);
  margin: -20px 0 28px 28px;
`,xd=a.div`
  margin-bottom: 32px;
  &:last-child { margin-bottom: 0; }
`,bd=a.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-left: 4px;
`,yd=a.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
`,vd=a.h3`
  font-family: ${g.heading};
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0;
`,wd=a.span`
  font-family: ${g.body};
  font-size: 12px;
  color: rgba(238,231,249,0.35);
  margin-left: 4px;
`,Bt=a.div`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(176,149,227,0.4) 0%,
      rgba(176,149,227,0.15) 100%
    );
    border-radius: 1px;
  }
`,kd=a.div`
  position: relative;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    left: -32px;
    top: 28px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid;
    background: #090215;
    z-index: 1;
  }

  &.starter::before { border-color: #4CAF50; }
  &.beginner::before { border-color: #29B6F6; }
  &.intermediate::before { border-color: #42A5F5; }
  &.advanced::before { border-color: #1565C0; }
  &.add-on::before { border-color: #FF9800; }
`,Ti=a(G)`
  display: block;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(176,149,227,0.12);
  background: rgba(211,196,239,0.03);
  text-decoration: none;
  transition: all 0.35s ease;

  &:hover {
    border-color: rgba(176,149,227,0.35);
    background: rgba(211,196,239,0.07);
    transform: translateX(4px);
    box-shadow: 0 8px 32px rgba(80,19,192,0.12);
  }
`,Sd=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;

  ${I.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`,Cd=a.h3`
  font-family: ${g.heading};
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0;
`,$d=a.span`
  font-family: ${g.body};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;

  &.starter-kit {
    color: #4CAF50;
    background: rgba(76,175,80,0.12);
    border: 1px solid rgba(76,175,80,0.25);
  }
  &.beginner {
    color: #29B6F6;
    background: rgba(41,182,246,0.12);
    border: 1px solid rgba(41,182,246,0.25);
  }
  &.intermediate {
    color: #42A5F5;
    background: rgba(66,165,245,0.12);
    border: 1px solid rgba(66,165,245,0.25);
  }
  &.advanced {
    color: #1565C0;
    background: rgba(21,101,192,0.15);
    border: 1px solid rgba(21,101,192,0.3);
  }
  &.add-on {
    color: #FF9800;
    background: rgba(255,152,0,0.12);
    border: 1px solid rgba(255,152,0,0.25);
  }
`,Id=a.p`
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.65;
  margin: 0 0 16px;
`,Ld=a.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Ed=a.span`
  font-family: ${g.body};
  font-size: 12px;
  color: rgba(238,231,249,0.45);
  background: rgba(176,149,227,0.06);
  border: 1px solid rgba(176,149,227,0.1);
  padding: 4px 10px;
  border-radius: 6px;
`,Td=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`,Md=a.span`
  font-family: ${g.body};
  font-size: 13px;
  color: rgba(238,231,249,0.4);
`,Dd=a.span`
  font-family: ${g.body};
  font-size: 13px;
  color: #B095E3;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease;

  ${Ti}:hover & {
    gap: 10px;
  }
`,Ad=a.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px) 100px;
`,Pd=a.h2`
  font-family: ${g.heading};
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 32px;
`,zd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`,Bd=a(G)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(176,149,227,0.12);
  background: rgba(211,196,239,0.03);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.35);
    background: rgba(211,196,239,0.07);
    transform: translateY(-2px);
  }
`,Rd=a.span`
  font-size: 32px;
  flex-shrink: 0;
`,Fd=a.div``,Od=a.h3`
  font-family: ${g.heading};
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 4px;
`,Nd=a.span`
  font-family: ${g.body};
  font-size: 12px;
  color: rgba(238,231,249,0.4);
`,jd=a.section`
  text-align: center;
  padding: 60px clamp(24px, 7vw, 120px) 80px;
  background: radial-gradient(500px circle at 50% 50%, rgba(80,19,192,0.12), transparent 60%);
`,Vn=a.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${g.body};
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
`,Wd={"starter-kit":"Starter Kit",beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced","add-on":"Add-On"};function Rt({course:e}){const t=e.slug,i=e.level;return n(kd,{className:i,children:c(Ti,{to:`/course/${t}`,children:[c(Sd,{children:[n(Cd,{children:e.title}),n($d,{className:i,children:Wd[e.level]||e.level})]}),n(Id,{children:e.description}),e.sections?.length>0&&n(Ld,{children:e.sections.map((r,o)=>n(Ed,{children:r},o))}),c(Td,{children:[c(Md,{children:["⏱ ",e.duration]}),n(Dd,{children:"View course →"})]})]})})}const{roadmaps:Yn}=st;function _d(){const{roadmapSlug:e}=Xt(),t=Yn.find(d=>d.slug===e),[i,r]=F("all");if(!t)return c(_n,{children:[n(le,{}),c(Hn,{children:[n(Un,{children:"Roadmap Not Found"}),n(qn,{children:"The roadmap you're looking for doesn't exist."}),n(Vn,{href:"/roadmaps",children:"Browse All Roadmaps"})]}),n(ce,{})]});const o=Yn.filter(d=>d.slug!==e),s=i==="all"||i==="starter",l=i==="all"||i==="levels",u=i==="all"||i==="addons";return c(_n,{children:[n(le,{}),c(Hn,{$glow:`${t.color}22`,children:[c(ud,{children:[n(G,{to:"/",children:"Home"})," / ",n(G,{to:"/roadmaps",children:"Roadmaps"})," /"," ",n("span",{children:t.shortName})]}),n(gd,{children:t.icon}),n(Un,{children:t.name}),n(qn,{children:t.description}),c(hd,{children:[c(Be,{children:["⏱ ",t.duration]}),c(Be,{children:["📚 ",t.totalCourses," courses"]}),c(Be,{children:["🟢 ",t.starterKit.length," Starter-Kit"]}),c(Be,{children:["🔵 ",t.levels.length," Levels"]}),c(Be,{children:["🟠 ",t.addOns.length," Add-Ons"]})]})]}),c(md,{children:[n(Ge,{$active:i==="all",$variant:"all",onClick:()=>r("all"),children:"All Courses"}),c(Ge,{$active:i==="starter",$variant:"starter",onClick:()=>r("starter"),children:["Starter-Kit (",t.starterKit.length,")"]}),c(Ge,{$active:i==="levels",$variant:"levels",onClick:()=>r("levels"),children:["Levels (",t.levels.length,")"]}),c(Ge,{$active:i==="addons",$variant:"addons",onClick:()=>r("addons"),children:["Add-Ons (",t.addOns.length,")"]})]}),c(fd,{children:[s&&t.starterKit.length>0&&c(Mt,{children:[c(Dt,{children:[n(At,{className:"starter"}),n(Pt,{children:"Starter-Kit"})]}),n(zt,{children:"Foundational courses to build your core skills before diving into the specialisation."}),n(Bt,{children:t.starterKit.map(d=>n(Rt,{course:d},d.id))})]}),l&&t.levels.length>0&&(()=>{const d={beginner:[],intermediate:[],advanced:[]};return t.levels.forEach(h=>{d[h.level]&&d[h.level].push(h)}),c(Mt,{children:[c(Dt,{children:[n(At,{className:"levels"}),n(Pt,{children:"Levels"})]}),n(zt,{children:"Progressive courses from beginner to advanced — each building on the previous one."}),Object.entries({beginner:{label:"Beginner",color:"#29B6F6"},intermediate:{label:"Intermediate",color:"#42A5F5"},advanced:{label:"Advanced",color:"#1565C0"}}).map(([h,{label:x,color:k}])=>{const S=d[h];return!S||S.length===0?null:c(xd,{children:[c(bd,{children:[n(yd,{style:{background:k}}),n(vd,{style:{color:k},children:x}),c(wd,{children:[S.length," course",S.length>1?"s":""]})]}),n(Bt,{children:S.map(C=>n(Rt,{course:C},C.id))})]},h)})]})})(),u&&t.addOns.length>0&&c(Mt,{children:[c(Dt,{children:[n(At,{className:"addons"}),n(Pt,{children:"Add-Ons"})]}),n(zt,{children:"Optional specialty courses to deepen expertise in niche areas."}),n(Bt,{children:t.addOns.map(d=>n(Rt,{course:d},d.id))})]})]}),c(Ad,{children:[n(Pd,{children:"Explore Other Roadmaps"}),n(zd,{children:o.map(d=>c(Bd,{to:`/roadmap/${d.slug}`,children:[n(Rd,{children:d.icon}),c(Fd,{children:[n(Od,{children:d.shortName}),c(Nd,{children:[d.totalCourses," courses · ",d.duration]})]})]},d.id))})]}),n(jd,{children:n(Vn,{href:"/#contact-learner",children:"Join the Waitlist"})}),n(ce,{})]})}const Mi={},Xe={};st.roadmaps.forEach(e=>{[...e.starterKit,...e.levels,...e.addOns].forEach(i=>{Mi[i.slug]={...i,roadmapSlug:e.slug,roadmapName:e.name,roadmapIcon:e.icon,roadmapColor:e.color},Xe[i.slug]||(Xe[i.slug]=[]),Xe[i.slug].push({slug:e.slug,name:e.name,icon:e.icon})})});const xe=T`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Gn=a.div`
  background: #090215;
  min-height: 100vh;
`,Qn=a.section`
  position: relative;
  padding: 160px clamp(24px, 7vw, 120px) 80px;
  text-align: center;
  background:
    radial-gradient(700px circle at 30% 20%, rgba(176,149,227,0.18), transparent 60%),
    radial-gradient(600px circle at 70% 80%, rgba(80,19,192,0.15), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${I.mobile} {
    padding-top: 120px;
    padding-bottom: 48px;
  }
`,Jn=a.div`
  max-width: 860px;
  margin: 0 auto;
`,Hd=a.nav`
  margin-bottom: 24px;
  font-family: ${g.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);
  animation: ${xe} 0.5s ease-out;

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,Ud=a.span`
  display: inline-block;
  font-family: ${g.body};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 6px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  animation: ${xe} 0.5s ease-out 0.05s both;

  &.starter-kit {
    color: #4CAF50;
    background: rgba(76,175,80,0.15);
    border: 1px solid rgba(76,175,80,0.3);
  }
  &.beginner {
    color: #29B6F6;
    background: rgba(41,182,246,0.15);
    border: 1px solid rgba(41,182,246,0.3);
  }
  &.intermediate {
    color: #42A5F5;
    background: rgba(66,165,245,0.15);
    border: 1px solid rgba(66,165,245,0.3);
  }
  &.advanced {
    color: #1565C0;
    background: rgba(21,101,192,0.2);
    border: 1px solid rgba(21,101,192,0.35);
  }
  &.add-on {
    color: #FF9800;
    background: rgba(255,152,0,0.15);
    border: 1px solid rgba(255,152,0,0.3);
  }
`,Xn=a.h1`
  font-family: ${g.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${xe} 0.5s ease-out 0.1s both;
`,qd=a.p`
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 28px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  animation: ${xe} 0.5s ease-out 0.15s both;
`,Vd=a.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  animation: ${xe} 0.5s ease-out 0.2s both;
`,Ft=a.span`
  font-family: ${g.body};
  font-size: 13px;
  color: rgba(238,231,249,0.55);
  background: rgba(176,149,227,0.08);
  border: 1px solid rgba(176,149,227,0.12);
  padding: 6px 14px;
  border-radius: 8px;
`,Kn=a.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${g.body};
  font-size: 18px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid #D3C4EF;
  box-shadow: 0 4px 24px rgba(176,149,227,0.5);
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${xe} 0.5s ease-out 0.25s both;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 32px rgba(176,149,227,0.65);
  }
`,Yd=a.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`,Zn=a.section`
  margin-bottom: 56px;
  animation: ${xe} 0.4s ease-out;
`,Ot=a.h2`
  font-family: ${g.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,ei=a.p`
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`,Gd=a.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`,Qd=a.li`
  font-family: ${g.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`,Jd=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 24px;
`,Xd=a.div`
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(176,149,227,0.12);
  background: rgba(211,196,239,0.04);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.3);
    background: rgba(211,196,239,0.08);
  }
`,Kd=a.div`
  font-family: ${g.heading};
  font-size: 32px;
  color: rgba(176,149,227,0.3);
  margin-bottom: 8px;
`,Zd=a.h3`
  font-family: ${g.body};
  font-size: 15px;
  font-weight: 600;
  color: #EEE7F9;
  margin: 0;
`,ep=a.section`
  margin-bottom: 56px;
`,tp=a(G)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(176,149,227,0.15);
  background: rgba(211,196,239,0.04);
  text-decoration: none;
  margin-right: 12px;
  margin-bottom: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.35);
    background: rgba(211,196,239,0.08);
  }
`,np=a.span`
  font-size: 24px;
`,ip=a.span`
  font-family: ${g.body};
  font-size: 14px;
  color: #B095E3;
`,ap=a.section`
  max-width: 860px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,rp=a.h2`
  font-family: ${g.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`,op=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`,sp=a(G)`
  display: block;
  padding: 24px;
  border: 1px solid rgba(176,149,227,0.15);
  border-radius: 16px;
  background: rgba(211,196,239,0.04);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.4);
    background: rgba(211,196,239,0.08);
    transform: translateY(-2px);
  }
`,lp=a.h3`
  font-family: ${g.heading};
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 6px;
`,cp=a.p`
  font-family: ${g.body};
  font-size: 13px;
  color: rgba(238,231,249,0.5);
  line-height: 1.5;
  margin: 0;
`,Oe={"starter-kit":"Starter Kit",beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced","add-on":"Add-On"};function dp(e){const t=[];return t.push({heading:"About This Course",content:`${e.description}

This course is part of the ${e.roadmapName} roadmap at Margg. It is categorised as a ${Oe[e.level]||e.level} course, designed to ${e.level==="starter-kit"?"build your foundational skills before you dive into specialised topics":e.level==="beginner"?"introduce you to the core concepts and give you hands-on experience from day one":e.level==="intermediate"?"deepen your understanding and prepare you for advanced challenges":e.level==="advanced"?"push your skills to a professional level with complex, real-world scenarios":"add specialised expertise to your skill set beyond the core curriculum"}.

At Margg, we believe in roadmap-based learning where every course connects to the next, building a coherent path from beginner to job-ready professional. Each module includes hands-on projects, mentor-reviewed assignments, and community discussions.`}),e.sections?.length>0&&t.push({heading:"Course Curriculum",content:`This course is structured into ${e.sections.length} modules, each building on the previous one. You'll progress through the following topics:`,list:e.sections.map((i,r)=>`Module ${r+1}: ${i} — Hands-on exercises, quizzes, and a mini-project`)}),t.push({heading:"What You'll Gain",content:"By completing this course, you will:",list:[`Deep understanding of ${e.title.toLowerCase()} concepts and best practices`,"Hands-on experience through real-world projects and exercises","Mentor-reviewed code and design feedback","Industry-aligned skills that employers are actively hiring for","A portfolio project you can showcase in interviews","Streak tracking and XP rewards to keep you motivated"]}),t.push({heading:"Who Is This Course For?",content:"This course is designed for:",list:["College students (2nd to 4th year) looking to build practical, career-ready skills","Fresh graduates preparing for technical interviews and their first role","Working professionals looking to upskill or transition into a new domain","Self-taught learners who need structured guidance and mentorship",`Anyone interested in ${e.roadmapName.toLowerCase()} as a career path`]}),t.push({heading:"How Margg's Learning Works",content:`Every Margg course follows our proven roadmap-based methodology:

1. Visual Roadmap — See the complete path from start to finish. Know exactly what to learn, in what order, and why.
2. Structured Modules — Each module (${e.duration} total) includes live sessions, recorded content, and hands-on exercises.
3. Mentor Check-ins — Your assigned mentor reviews your work, provides feedback, and answers your questions.
4. Streak Tracking — Build daily learning habits with our streak system. Earn XP and level up from Bronze to Diamond.
5. Community — Connect with peers, share progress, and collaborate on projects.
6. Interview Prep — Every course ends with an interview preparation module specific to the domain.`}),t}function pp(e){return[{question:`Do I need prior experience to take ${e.title}?`,answer:e.level==="starter-kit"||e.level==="beginner"?"No prior experience is required. This course starts from the fundamentals and builds up progressively. Basic computer literacy is all you need.":`This is a ${Oe[e.level].toLowerCase()}-level course, so familiarity with the prerequisite topics is recommended. Check the roadmap order to see what courses come before this one.`},{question:"What is the format of the course?",answer:`The course runs for ${e.duration} with live sessions, recorded content, hands-on projects, and mentor feedback. All sessions are recorded and available on-demand. You'll need approximately 10-15 hours per week.`},{question:"Will I receive a certificate?",answer:"Yes. Upon completing all modules and the final project, you'll receive a Margg course completion certificate that you can add to your LinkedIn profile and resume."},{question:"Is this course available online?",answer:"Yes, 100% online. Whether you're in Bangalore, Chennai, Hyderabad, Delhi, or any other city in India, you can access the full course, mentorship, and community remotely."},{question:"How does this course fit into the overall roadmap?",answer:`This course is part of the ${e.roadmapName} roadmap at Margg. It's categorised as a ${Oe[e.level]} course. You can view the complete roadmap to see how this course connects to others in the learning path.`}]}const up=a.section`
  max-width: 860px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,gp=a.h2`
  font-family: ${g.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`,hp=a.details`
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
`,mp=a.summary`
  font-family: ${g.body};
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
    &::after { content: "−"; }
  }
`,fp=a.div`
  font-family: ${g.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`;function xp(){const{courseSlug:e}=Xt(),t=Mi[e];if(!t)return c(Gn,{children:[n(le,{}),n(Qn,{children:c(Jn,{children:[n(Xn,{children:"Course Not Found"}),n(ei,{children:"The course you're looking for doesn't exist."}),n(Kn,{href:"/roadmaps",children:"Browse All Roadmaps"})]})}),n(ce,{})]});const i=dp(t),r=pp(t),o=st.roadmaps.find(u=>u.slug===t.roadmapSlug),s=o?[...o.starterKit,...o.levels,...o.addOns].filter(u=>u.slug!==e).slice(0,4):[],l=Xe[e]||[];return c(Gn,{children:[n(le,{}),n(Qn,{children:c(Jn,{children:[c(Hd,{children:[n(G,{to:"/",children:"Home"})," /"," ",n(G,{to:"/roadmaps",children:"Roadmaps"})," /"," ",n(G,{to:`/roadmap/${t.roadmapSlug}`,children:t.roadmapName})," ","/ ",n("span",{children:t.title})]}),n(Ud,{className:t.level,children:Oe[t.level]}),n(Xn,{children:t.title}),n(qd,{children:t.description}),c(Vd,{children:[c(Ft,{children:["⏱ ",t.duration]}),c(Ft,{children:[t.roadmapIcon," ",t.roadmapName]}),c(Ft,{children:["📋 ",t.sections?.length||0," modules"]})]}),n(Kn,{href:"/#contact-learner",children:"Join the Waitlist"})]})}),c(Yd,{children:[t.sections?.length>0&&c(Zn,{children:[n(Ot,{children:"Course Modules"}),n(Jd,{children:t.sections.map((u,d)=>c(Xd,{children:[n(Kd,{children:String(d+1).padStart(2,"0")}),n(Zd,{children:u})]},d))})]}),i.map((u,d)=>c(Zn,{children:[n(Ot,{children:u.heading}),n(ei,{children:u.content}),u.list&&n(Gd,{children:u.list.map((f,h)=>n(Qd,{children:f},h))})]},d)),l.length>0&&c(ep,{children:[n(Ot,{children:"Part Of These Roadmaps"}),n("div",{children:l.map(u=>c(tp,{to:`/roadmap/${u.slug}`,children:[n(np,{children:u.icon}),n(ip,{children:u.name})]},u.slug))})]})]}),c(up,{children:[n(gp,{children:"Frequently Asked Questions"}),r.map((u,d)=>c(hp,{children:[n(mp,{children:u.question}),n(fp,{children:u.answer})]},d))]}),s.length>0&&c(ap,{children:[c(rp,{children:["More in ",t.roadmapName]}),n(op,{children:s.map(u=>c(sp,{to:`/course/${u.slug}`,children:[n(lp,{children:u.title}),c(cp,{children:[Oe[u.level]," · ",u.duration]})]},u.slug))})]}),n(ce,{})]})}function bp(){return c(Ri,{children:[n(Pe,{path:"/",element:n(vc,{})}),n(Pe,{path:"/roadmaps",element:n(pd,{})}),n(Pe,{path:"/roadmap/:roadmapSlug",element:n(_d,{})}),n(Pe,{path:"/course/:courseSlug",element:n(xp,{})}),n(Pe,{path:"/:slug",element:n(_c,{})})]})}async function Pp(e,t){const i=ji({reducer:{app:Ta,content:_a}}),r=t._source??"fallback",{_source:o,...s}=t;i.dispatch(Wa({data:s,source:r}));const l=new La;try{const u=zi(l.collectStyles(n(Ni,{store:i,children:n(Fi,{location:e,children:n(bp,{})})}))),d=l.getStyleTags();return{html:u,styleTags:d,state:i.getState()}}finally{l.seal()}}export{Pp as render};
