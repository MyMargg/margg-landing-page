import{r as am,c as w0,u as nm,a as D,b as lm,P as im}from"./redux-ZgJ2Wkzd.js";import{r as om,u as S0,a as sm,b as um,L as j0,R as cm,c as Ff,B as rm}from"./vendor-CYazf-v1.js";import{p as re,c as f,s as Te}from"./styles-CSKeg26X.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))r(y);new MutationObserver(y=>{for(const S of y)if(S.type==="childList")for(const M of S.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&r(M)}).observe(document,{childList:!0,subtree:!0});function g(y){const S={};return y.integrity&&(S.integrity=y.integrity),y.referrerPolicy&&(S.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?S.credentials="include":y.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function r(y){if(y.ep)return;y.ep=!0;const S=g(y);fetch(y.href,S)}})();var Du={exports:{}},Dl={};var If;function dm(){if(If)return Dl;If=1;var u=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function g(r,y,S){var M=null;if(S!==void 0&&(M=""+S),y.key!==void 0&&(M=""+y.key),"key"in y){S={};for(var Y in y)Y!=="key"&&(S[Y]=y[Y])}else S=y;return y=S.ref,{$$typeof:u,type:r,key:M,ref:y!==void 0?y:null,props:S}}return Dl.Fragment=m,Dl.jsx=g,Dl.jsxs=g,Dl}var Pf;function fm(){return Pf||(Pf=1,Du.exports=dm()),Du.exports}var s=fm(),Cu={exports:{}},Cl={},Ou={exports:{}},Uu={};var e0;function pm(){return e0||(e0=1,(function(u){function m(T,O){var G=T.length;T.push(O);e:for(;0<G;){var ye=G-1>>>1,xe=T[ye];if(0<y(xe,O))T[ye]=O,T[G]=xe,G=ye;else break e}}function g(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],G=T.pop();if(G!==O){T[0]=G;e:for(var ye=0,xe=T.length,We=xe>>>1;ye<We;){var ze=2*(ye+1)-1,se=T[ze],He=ze+1,Bt=T[He];if(0>y(se,G))He<xe&&0>y(Bt,se)?(T[ye]=Bt,T[He]=G,ye=He):(T[ye]=se,T[ze]=G,ye=ze);else if(He<xe&&0>y(Bt,G))T[ye]=Bt,T[He]=G,ye=He;else break e}}return O}function y(T,O){var G=T.sortIndex-O.sortIndex;return G!==0?G:T.id-O.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;u.unstable_now=function(){return S.now()}}else{var M=Date,Y=M.now();u.unstable_now=function(){return M.now()-Y}}var H=[],B=[],V=1,C=null,ee=3,je=!1,ge=!1,N=!1,_=!1,J=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;function Ze(T){for(var O=g(B);O!==null;){if(O.callback===null)r(B);else if(O.startTime<=T)r(B),O.sortIndex=O.expirationTime,m(H,O);else break;O=g(B)}}function Z(T){if(N=!1,Ze(T),!ge)if(g(H)!==null)ge=!0,oe||(oe=!0,K());else{var O=g(B);O!==null&&At(Z,O.startTime-T)}}var oe=!1,Ne=-1,Ce=5,Lt=-1;function A(){return _?!0:!(u.unstable_now()-Lt<Ce)}function X(){if(_=!1,oe){var T=u.unstable_now();Lt=T;var O=!0;try{e:{ge=!1,N&&(N=!1,me(Ne),Ne=-1),je=!0;var G=ee;try{t:{for(Ze(T),C=g(H);C!==null&&!(C.expirationTime>T&&A());){var ye=C.callback;if(typeof ye=="function"){C.callback=null,ee=C.priorityLevel;var xe=ye(C.expirationTime<=T);if(T=u.unstable_now(),typeof xe=="function"){C.callback=xe,Ze(T),O=!0;break t}C===g(H)&&r(H),Ze(T)}else r(H);C=g(H)}if(C!==null)O=!0;else{var We=g(B);We!==null&&At(Z,We.startTime-T),O=!1}}break e}finally{C=null,ee=G,je=!1}O=void 0}}finally{O?K():oe=!1}}}var K;if(typeof we=="function")K=function(){we(X)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Mt=Re.port2;Re.port1.onmessage=X,K=function(){Mt.postMessage(null)}}else K=function(){J(X,0)};function At(T,O){Ne=J(function(){T(u.unstable_now())},O)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(T){T.callback=null},u.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<T?Math.floor(1e3/T):5},u.unstable_getCurrentPriorityLevel=function(){return ee},u.unstable_next=function(T){switch(ee){case 1:case 2:case 3:var O=3;break;default:O=ee}var G=ee;ee=O;try{return T()}finally{ee=G}},u.unstable_requestPaint=function(){_=!0},u.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var G=ee;ee=T;try{return O()}finally{ee=G}},u.unstable_scheduleCallback=function(T,O,G){var ye=u.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ye+G:ye):G=ye,T){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=G+xe,T={id:V++,callback:O,priorityLevel:T,startTime:G,expirationTime:xe,sortIndex:-1},G>ye?(T.sortIndex=G,m(B,T),g(H)===null&&T===g(B)&&(N?(me(Ne),Ne=-1):N=!0,At(Z,G-ye))):(T.sortIndex=xe,m(H,T),ge||je||(ge=!0,oe||(oe=!0,K()))),T},u.unstable_shouldYield=A,u.unstable_wrapCallback=function(T){var O=ee;return function(){var G=ee;ee=O;try{return T.apply(this,arguments)}finally{ee=G}}}})(Uu)),Uu}var t0;function hm(){return t0||(t0=1,Ou.exports=pm()),Ou.exports}var a0;function mm(){if(a0)return Cl;a0=1;var u=hm(),m=am(),g=om();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function H(e){if(S(e)!==e)throw Error(r(188))}function B(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return H(l),e;if(i===n)return H(l),t;i=i.sibling}throw Error(r(188))}if(a.return!==n.return)a=l,n=i;else{for(var o=!1,c=l.child;c;){if(c===a){o=!0,a=l,n=i;break}if(c===n){o=!0,n=l,a=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===a){o=!0,a=i,n=l;break}if(c===n){o=!0,n=i,a=l;break}c=c.sibling}if(!o)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function V(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=V(e),t!==null)return t;e=e.sibling}return null}var C=Object.assign,ee=Symbol.for("react.element"),je=Symbol.for("react.transitional.element"),ge=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),me=Symbol.for("react.consumer"),we=Symbol.for("react.context"),Ze=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Lt=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case J:return"Profiler";case _:return"StrictMode";case Z:return"Suspense";case oe:return"SuspenseList";case Lt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ge:return"Portal";case we:return e.displayName||"Context";case me:return(e._context.displayName||"Context")+".Consumer";case Ze:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:Mt(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return Mt(e(t))}catch{}}return null}var At=Array.isArray,T=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ye=[],xe=-1;function We(e){return{current:e}}function ze(e){0>xe||(e.current=ye[xe],ye[xe]=null,xe--)}function se(e,t){xe++,ye[xe]=e.current,e.current=t}var He=We(null),Bt=We(null),na=We(null),Ll=We(null);function Bl(e,t){switch(se(na,t),se(Bt,e),se(He,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bf(t),e=wf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ze(He),se(He,e)}function Ja(){ze(He),ze(Bt),ze(na)}function co(e){e.memoizedState!==null&&se(Ll,e);var t=He.current,a=wf(t,e.type);t!==a&&(se(Bt,e),se(He,a))}function kl(e){Bt.current===e&&(ze(He),ze(Bt)),Ll.current===e&&(ze(Ll),Tl._currentValue=G)}var ro,Ku;function Da(e){if(ro===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ro=t&&t[1]||"",Ku=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ro+e+Ku}var fo=!1;function po(e,t){if(!e||fo)return"";fo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(w){var b=w}Reflect.construct(e,[],E)}else{try{E.call()}catch(w){b=w}e.call(E.prototype)}}else{try{throw Error()}catch(w){b=w}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(w){if(w&&b&&typeof w.stack=="string")return[w.stack,b.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),o=i[0],c=i[1];if(o&&c){var d=o.split(`
`),v=c.split(`
`);for(l=n=0;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;for(;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;if(n===d.length||l===v.length)for(n=d.length-1,l=v.length-1;1<=n&&0<=l&&d[n]!==v[l];)l--;for(;1<=n&&0<=l;n--,l--)if(d[n]!==v[l]){if(n!==1||l!==1)do if(n--,l--,0>l||d[n]!==v[l]){var j=`
`+d[n].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=n&&0<=l);break}}}finally{fo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Da(a):""}function L0(e,t){switch(e.tag){case 26:case 27:case 5:return Da(e.type);case 16:return Da("Lazy");case 13:return e.child!==t&&t!==null?Da("Suspense Fallback"):Da("Suspense");case 19:return Da("SuspenseList");case 0:case 15:return po(e.type,!1);case 11:return po(e.type.render,!1);case 1:return po(e.type,!0);case 31:return Da("Activity");default:return""}}function Wu(e){try{var t="",a=null;do t+=L0(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ho=Object.prototype.hasOwnProperty,mo=u.unstable_scheduleCallback,go=u.unstable_cancelCallback,B0=u.unstable_shouldYield,k0=u.unstable_requestPaint,st=u.unstable_now,N0=u.unstable_getCurrentPriorityLevel,Fu=u.unstable_ImmediatePriority,Iu=u.unstable_UserBlockingPriority,Nl=u.unstable_NormalPriority,R0=u.unstable_LowPriority,Pu=u.unstable_IdlePriority,H0=u.log,_0=u.unstable_setDisableYieldValue,Rn=null,ut=null;function la(e){if(typeof H0=="function"&&_0(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(Rn,e)}catch{}}var ct=Math.clz32?Math.clz32:G0,q0=Math.log,Y0=Math.LN2;function G0(e){return e>>>=0,e===0?32:31-(q0(e)/Y0|0)|0}var Rl=256,Hl=262144,_l=4194304;function Ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ql(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~i,n!==0?l=Ca(n):(o&=c,o!==0?l=Ca(o):a||(a=c&~e,a!==0&&(l=Ca(a))))):(c=n&~i,c!==0?l=Ca(c):o!==0?l=Ca(o):a||(a=n&~e,a!==0&&(l=Ca(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function Hn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function X0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(){var e=_l;return _l<<=1,(_l&62914560)===0&&(_l=4194304),e}function yo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Q0(e,t,a,n,l,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,v=e.hiddenUpdates;for(a=o&~a;0<a;){var j=31-ct(a),E=1<<j;c[j]=0,d[j]=-1;var b=v[j];if(b!==null)for(v[j]=null,j=0;j<b.length;j++){var w=b[j];w!==null&&(w.lane&=-536870913)}a&=~E}n!==0&&tc(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function tc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ct(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function ac(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ct(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function nc(e,t){var a=t&-t;return a=(a&42)!==0?1:xo(a),(a&(e.suspendedLanes|t))!==0?0:a}function xo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lc(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:Qf(e.type))}function ic(e,t){var a=O.p;try{return O.p=e,t()}finally{O.p=a}}var ia=Math.random().toString(36).slice(2),Ye="__reactFiber$"+ia,et="__reactProps$"+ia,Ka="__reactContainer$"+ia,bo="__reactEvents$"+ia,V0="__reactListeners$"+ia,$0="__reactHandles$"+ia,oc="__reactResources$"+ia,qn="__reactMarker$"+ia;function wo(e){delete e[Ye],delete e[et],delete e[bo],delete e[V0],delete e[$0]}function Wa(e){var t=e[Ye];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ka]||a[Ye]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Af(e);e!==null;){if(a=e[Ye])return a;e=Af(e)}return t}e=a,a=e.parentNode}return null}function Fa(e){if(e=e[Ye]||e[Ka]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Yn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Ia(e){var t=e[oc];return t||(t=e[oc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[qn]=!0}var sc=new Set,uc={};function Oa(e,t){Pa(e,t),Pa(e+"Capture",t)}function Pa(e,t){for(uc[e]=t,e=0;e<t.length;e++)sc.add(t[e])}var Z0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cc={},rc={};function J0(e){return ho.call(rc,e)?!0:ho.call(cc,e)?!1:Z0.test(e)?rc[e]=!0:(cc[e]=!0,!1)}function Yl(e,t,a){if(J0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function K0(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){if(!e._valueTracker){var t=dc(e)?"checked":"value";e._valueTracker=K0(e,t,""+e[t])}}function fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=dc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W0=/[\n"\\]/g;function xt(e){return e.replace(W0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jo(e,t,a,n,l,i,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?zo(e,o,yt(t)):a!=null?zo(e,o,yt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+yt(c):e.removeAttribute("name")}function pc(e,t,a,n,l,i,o,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){So(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),So(e)}function zo(e,t,a){t==="number"&&Xl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function hc(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function mc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(r(92));if(At(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),So(e)}function tn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||F0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yc(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&gc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&gc(e,i,t[i])}function To(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(e){return P0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var Eo=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,nn=null;function xc(e){var t=Fa(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[et]||null;if(!l)throw Error(r(90));jo(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&fc(n)}break e;case"textarea":hc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&en(e,!!a.multiple,t,!1)}}}var Ao=!1;function vc(e,t,a){if(Ao)return e(t,a);Ao=!0;try{var n=e(t);return n}finally{if(Ao=!1,(an!==null||nn!==null)&&(Oi(),an&&(t=an,e=nn,nn=an=null,xc(t),e)))for(t=0;t<e.length;t++)xc(e[t])}}function Gn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[et]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Do=!1;if(Yt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Do=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Do=!1}var oa=null,Co=null,Vl=null;function bc(){if(Vl)return Vl;var e,t=Co,a=t.length,n,l="value"in oa?oa.value:oa.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===l[i-n];n++);return Vl=l.slice(e,1<n?1-n:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function wc(){return!1}function tt(e){function t(a,n,l,i,o){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zl:wc,this.isPropagationStopped=wc,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=tt(Ua),Qn=C({},Ua,{view:0,detail:0}),ep=tt(Qn),Oo,Uo,Vn,Kl=C({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(Oo=e.screenX-Vn.screenX,Uo=e.screenY-Vn.screenY):Uo=Oo=0,Vn=e),Oo)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),Sc=tt(Kl),tp=C({},Kl,{dataTransfer:0}),ap=tt(tp),np=C({},Qn,{relatedTarget:0}),Lo=tt(np),lp=C({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=tt(lp),op=C({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sp=tt(op),up=C({},Ua,{data:0}),jc=tt(up),cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dp[e])?!!t[e]:!1}function Bo(){return fp}var pp=C({},Qn,{key:function(e){if(e.key){var t=cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bo,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=tt(pp),mp=C({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=tt(mp),gp=C({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bo}),yp=tt(gp),xp=C({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=tt(xp),bp=C({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=tt(bp),Sp=C({},Ua,{newState:0,oldState:0}),jp=tt(Sp),zp=[9,13,27,32],ko=Yt&&"CompositionEvent"in window,$n=null;Yt&&"documentMode"in document&&($n=document.documentMode);var Tp=Yt&&"TextEvent"in window&&!$n,Tc=Yt&&(!ko||$n&&8<$n&&11>=$n),Ec=" ",Mc=!1;function Ac(e,t){switch(e){case"keyup":return zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function Ep(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Mc=!0,Ec);case"textInput":return e=t.data,e===Ec&&Mc?null:e;default:return null}}function Mp(e,t){if(ln)return e==="compositionend"||!ko&&Ac(e,t)?(e=bc(),Vl=Co=oa=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Oc(e,t,a,n){an?nn?nn.push(n):nn=[n]:an=n,t=Hi(t,"onChange"),0<t.length&&(a=new Jl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Zn=null,Jn=null;function Dp(e){hf(e,0)}function Wl(e){var t=Yn(e);if(fc(t))return e}function Uc(e,t){if(e==="change")return t}var Lc=!1;if(Yt){var No;if(Yt){var Ro="oninput"in document;if(!Ro){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Ro=typeof Bc.oninput=="function"}No=Ro}else No=!1;Lc=No&&(!document.documentMode||9<document.documentMode)}function kc(){Zn&&(Zn.detachEvent("onpropertychange",Nc),Jn=Zn=null)}function Nc(e){if(e.propertyName==="value"&&Wl(Jn)){var t=[];Oc(t,Jn,e,Mo(e)),vc(Dp,t)}}function Cp(e,t,a){e==="focusin"?(kc(),Zn=t,Jn=a,Zn.attachEvent("onpropertychange",Nc)):e==="focusout"&&kc()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(Jn)}function Up(e,t){if(e==="click")return Wl(t)}function Lp(e,t){if(e==="input"||e==="change")return Wl(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Bp;function Kn(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ho.call(t,l)||!rt(e[l],t[l]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var a=Rc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rc(a)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xl(e.document)}return t}function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kp=Yt&&"documentMode"in document&&11>=document.documentMode,on=null,_o=null,Wn=null,qo=!1;function Yc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qo||on==null||on!==Xl(n)||(n=on,"selectionStart"in n&&Ho(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wn&&Kn(Wn,n)||(Wn=n,n=Hi(_o,"onSelect"),0<n.length&&(t=new Jl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=on)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var sn={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Yo={},Gc={};Yt&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function Ba(e){if(Yo[e])return Yo[e];if(!sn[e])return e;var t=sn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Gc)return Yo[e]=t[a];return e}var Xc=Ba("animationend"),Qc=Ba("animationiteration"),Vc=Ba("animationstart"),Np=Ba("transitionrun"),Rp=Ba("transitionstart"),Hp=Ba("transitioncancel"),$c=Ba("transitionend"),Zc=new Map,Go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Go.push("scrollEnd");function Dt(e,t){Zc.set(e,t),Oa(t,[e])}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],un=0,Xo=0;function Il(){for(var e=un,t=Xo=un=0;t<e;){var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var i=vt[t];if(vt[t++]=null,n!==null&&l!==null){var o=n.pending;o===null?l.next=l:(l.next=o.next,o.next=l),n.pending=l}i!==0&&Jc(a,l,i)}}function Pl(e,t,a,n){vt[un++]=e,vt[un++]=t,vt[un++]=a,vt[un++]=n,Xo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Qo(e,t,a,n){return Pl(e,t,a,n),ei(e)}function ka(e,t){return Pl(e,null,null,t),ei(e)}function Jc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-ct(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function ei(e){if(50<xl)throw xl=0,Ps=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cn={};function _p(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,n){return new _p(e,t,a,n)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,a,n,l,i){var o=0;if(n=e,typeof e=="function")Vo(e)&&(o=1);else if(typeof e=="string")o=Qh(e,a,He.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Lt:return e=dt(31,a,t,l),e.elementType=Lt,e.lanes=i,e;case N:return Na(a.children,l,i,t);case _:o=8,l|=24;break;case J:return e=dt(12,a,t,l|2),e.elementType=J,e.lanes=i,e;case Z:return e=dt(13,a,t,l),e.elementType=Z,e.lanes=i,e;case oe:return e=dt(19,a,t,l),e.elementType=oe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case we:o=10;break e;case me:o=9;break e;case Ze:o=11;break e;case Ne:o=14;break e;case Ce:o=16,n=null;break e}o=29,a=Error(r(130,e===null?"null":typeof e,"")),n=null}return t=dt(o,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Na(e,t,a,n){return e=dt(7,e,n,t),e.lanes=a,e}function $o(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function Wc(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Zo(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fc=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var a=Fc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Wu(t)},Fc.set(e,t),t)}return{value:e,source:t,stack:Wu(t)}}var rn=[],dn=0,ai=null,Fn=0,wt=[],St=0,sa=null,kt=1,Nt="";function Xt(e,t){rn[dn++]=Fn,rn[dn++]=ai,ai=e,Fn=t}function Ic(e,t,a){wt[St++]=kt,wt[St++]=Nt,wt[St++]=sa,sa=e;var n=kt;e=Nt;var l=32-ct(n)-1;n&=~(1<<l),a+=1;var i=32-ct(t)+l;if(30<i){var o=l-l%5;i=(n&(1<<o)-1).toString(32),n>>=o,l-=o,kt=1<<32-ct(t)+l|a<<l|n,Nt=i+e}else kt=1<<i|a<<l|n,Nt=e}function Jo(e){e.return!==null&&(Xt(e,1),Ic(e,1,0))}function Ko(e){for(;e===ai;)ai=rn[--dn],rn[dn]=null,Fn=rn[--dn],rn[dn]=null;for(;e===sa;)sa=wt[--St],wt[St]=null,Nt=wt[--St],wt[St]=null,kt=wt[--St],wt[St]=null}function Pc(e,t){wt[St++]=kt,wt[St++]=Nt,wt[St++]=sa,kt=t.id,Nt=t.overflow,sa=e}var Ge=null,ve=null,te=!1,ua=null,jt=!1,Wo=Error(r(519));function ca(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw In(bt(t,e)),Wo}function er(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ye]=e,t[et]=n,a){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(a=0;a<bl.length;a++)F(bl[a],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),pc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),mc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||xf(t.textContent,a)?(n.popover!=null&&(F("beforetoggle",t),F("toggle",t)),n.onScroll!=null&&F("scroll",t),n.onScrollEnd!=null&&F("scrollend",t),n.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ca(e,!0)}function tr(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:Ge=Ge.return}}function fn(e){if(e!==Ge)return!1;if(!te)return tr(e),te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hu(e.type,e.memoizedProps)),a=!a),a&&ve&&ca(e),tr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ve=Mf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ve=Mf(e)}else t===27?(t=ve,ja(e.type)?(e=vu,vu=null,ve=e):ve=t):ve=Ge?Tt(e.stateNode.nextSibling):null;return!0}function Ra(){ve=Ge=null,te=!1}function Fo(){var e=ua;return e!==null&&(it===null?it=e:it.push.apply(it,e),ua=null),e}function In(e){ua===null?ua=[e]:ua.push(e)}var Io=We(null),Ha=null,Qt=null;function ra(e,t,a){se(Io,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=Io.current,ze(Io)}function Po(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function es(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=l;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Po(i.return,a,e),n||(o=null);break e}i=c.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(r(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Po(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function pn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var c=l.type;rt(l.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(l===Ll.current){if(o=l.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Tl):e=[Tl])}l=l.return}e!==null&&es(t,e,a,n),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){Ha=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return ar(Ha,e)}function li(e,t){return Ha===null&&_a(e),ar(e,t)}function ar(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(e===null)throw Error(r(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return a}var qp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yp=u.unstable_scheduleCallback,Gp=u.unstable_NormalPriority,Oe={$$typeof:we,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ts(){return{controller:new qp,data:new Map,refCount:0}}function Pn(e){e.refCount--,e.refCount===0&&Yp(Gp,function(){e.controller.abort()})}var el=null,as=0,hn=0,mn=null;function Xp(e,t){if(el===null){var a=el=[];as=0,hn=iu(),mn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return as++,t.then(nr,nr),t}function nr(){if(--as===0&&el!==null){mn!==null&&(mn.status="fulfilled");var e=el;el=null,hn=0,mn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var lr=T.S;T.S=function(e,t){Yd=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xp(e,t),lr!==null&&lr(e,t)};var qa=We(null);function ns(){var e=qa.current;return e!==null?e:he.pooledCache}function ii(e,t){t===null?se(qa,qa.current):se(qa,t.pool)}function ir(){var e=ns();return e===null?null:{parent:Oe._currentValue,pool:e}}var gn=Error(r(460)),ls=Error(r(474)),oi=Error(r(542)),si={then:function(){}};function or(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cr(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cr(e),e}throw Ga=t,gn}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,gn):a}}var Ga=null;function ur(){if(Ga===null)throw Error(r(459));var e=Ga;return Ga=null,e}function cr(e){if(e===gn||e===oi)throw Error(r(483))}var yn=null,tl=0;function ui(e){var t=tl;return tl+=1,yn===null&&(yn=[]),sr(yn,e,t)}function al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ci(e,t){throw t.$$typeof===ee?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rr(e){function t(h,p){if(e){var x=h.deletions;x===null?(h.deletions=[p],h.flags|=16):x.push(p)}}function a(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function n(h){for(var p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function l(h,p){return h=Gt(h,p),h.index=0,h.sibling=null,h}function i(h,p,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<p?(h.flags|=67108866,p):x):(h.flags|=67108866,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function c(h,p,x,z){return p===null||p.tag!==6?(p=$o(x,h.mode,z),p.return=h,p):(p=l(p,x),p.return=h,p)}function d(h,p,x,z){var k=x.type;return k===N?j(h,p,x.props.children,z,x.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ce&&Ya(k)===p.type)?(p=l(p,x.props),al(p,x),p.return=h,p):(p=ti(x.type,x.key,x.props,null,h.mode,z),al(p,x),p.return=h,p)}function v(h,p,x,z){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Zo(x,h.mode,z),p.return=h,p):(p=l(p,x.children||[]),p.return=h,p)}function j(h,p,x,z,k){return p===null||p.tag!==7?(p=Na(x,h.mode,z,k),p.return=h,p):(p=l(p,x),p.return=h,p)}function E(h,p,x){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=$o(""+p,h.mode,x),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case je:return x=ti(p.type,p.key,p.props,null,h.mode,x),al(x,p),x.return=h,x;case ge:return p=Zo(p,h.mode,x),p.return=h,p;case Ce:return p=Ya(p),E(h,p,x)}if(At(p)||K(p))return p=Na(p,h.mode,x,null),p.return=h,p;if(typeof p.then=="function")return E(h,ui(p),x);if(p.$$typeof===we)return E(h,li(h,p),x);ci(h,p)}return null}function b(h,p,x,z){var k=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return k!==null?null:c(h,p,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case je:return x.key===k?d(h,p,x,z):null;case ge:return x.key===k?v(h,p,x,z):null;case Ce:return x=Ya(x),b(h,p,x,z)}if(At(x)||K(x))return k!==null?null:j(h,p,x,z,null);if(typeof x.then=="function")return b(h,p,ui(x),z);if(x.$$typeof===we)return b(h,p,li(h,x),z);ci(h,x)}return null}function w(h,p,x,z,k){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return h=h.get(x)||null,c(p,h,""+z,k);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case je:return h=h.get(z.key===null?x:z.key)||null,d(p,h,z,k);case ge:return h=h.get(z.key===null?x:z.key)||null,v(p,h,z,k);case Ce:return z=Ya(z),w(h,p,x,z,k)}if(At(z)||K(z))return h=h.get(x)||null,j(p,h,z,k,null);if(typeof z.then=="function")return w(h,p,x,ui(z),k);if(z.$$typeof===we)return w(h,p,x,li(p,z),k);ci(p,z)}return null}function U(h,p,x,z){for(var k=null,ae=null,L=p,$=p=0,P=null;L!==null&&$<x.length;$++){L.index>$?(P=L,L=null):P=L.sibling;var ne=b(h,L,x[$],z);if(ne===null){L===null&&(L=P);break}e&&L&&ne.alternate===null&&t(h,L),p=i(ne,p,$),ae===null?k=ne:ae.sibling=ne,ae=ne,L=P}if($===x.length)return a(h,L),te&&Xt(h,$),k;if(L===null){for(;$<x.length;$++)L=E(h,x[$],z),L!==null&&(p=i(L,p,$),ae===null?k=L:ae.sibling=L,ae=L);return te&&Xt(h,$),k}for(L=n(L);$<x.length;$++)P=w(L,h,$,x[$],z),P!==null&&(e&&P.alternate!==null&&L.delete(P.key===null?$:P.key),p=i(P,p,$),ae===null?k=P:ae.sibling=P,ae=P);return e&&L.forEach(function(Aa){return t(h,Aa)}),te&&Xt(h,$),k}function R(h,p,x,z){if(x==null)throw Error(r(151));for(var k=null,ae=null,L=p,$=p=0,P=null,ne=x.next();L!==null&&!ne.done;$++,ne=x.next()){L.index>$?(P=L,L=null):P=L.sibling;var Aa=b(h,L,ne.value,z);if(Aa===null){L===null&&(L=P);break}e&&L&&Aa.alternate===null&&t(h,L),p=i(Aa,p,$),ae===null?k=Aa:ae.sibling=Aa,ae=Aa,L=P}if(ne.done)return a(h,L),te&&Xt(h,$),k;if(L===null){for(;!ne.done;$++,ne=x.next())ne=E(h,ne.value,z),ne!==null&&(p=i(ne,p,$),ae===null?k=ne:ae.sibling=ne,ae=ne);return te&&Xt(h,$),k}for(L=n(L);!ne.done;$++,ne=x.next())ne=w(L,h,$,ne.value,z),ne!==null&&(e&&ne.alternate!==null&&L.delete(ne.key===null?$:ne.key),p=i(ne,p,$),ae===null?k=ne:ae.sibling=ne,ae=ne);return e&&L.forEach(function(tm){return t(h,tm)}),te&&Xt(h,$),k}function pe(h,p,x,z){if(typeof x=="object"&&x!==null&&x.type===N&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case je:e:{for(var k=x.key;p!==null;){if(p.key===k){if(k=x.type,k===N){if(p.tag===7){a(h,p.sibling),z=l(p,x.props.children),z.return=h,h=z;break e}}else if(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ce&&Ya(k)===p.type){a(h,p.sibling),z=l(p,x.props),al(z,x),z.return=h,h=z;break e}a(h,p);break}else t(h,p);p=p.sibling}x.type===N?(z=Na(x.props.children,h.mode,z,x.key),z.return=h,h=z):(z=ti(x.type,x.key,x.props,null,h.mode,z),al(z,x),z.return=h,h=z)}return o(h);case ge:e:{for(k=x.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){a(h,p.sibling),z=l(p,x.children||[]),z.return=h,h=z;break e}else{a(h,p);break}else t(h,p);p=p.sibling}z=Zo(x,h.mode,z),z.return=h,h=z}return o(h);case Ce:return x=Ya(x),pe(h,p,x,z)}if(At(x))return U(h,p,x,z);if(K(x)){if(k=K(x),typeof k!="function")throw Error(r(150));return x=k.call(x),R(h,p,x,z)}if(typeof x.then=="function")return pe(h,p,ui(x),z);if(x.$$typeof===we)return pe(h,p,li(h,x),z);ci(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,p!==null&&p.tag===6?(a(h,p.sibling),z=l(p,x),z.return=h,h=z):(a(h,p),z=$o(x,h.mode,z),z.return=h,h=z),o(h)):a(h,p)}return function(h,p,x,z){try{tl=0;var k=pe(h,p,x,z);return yn=null,k}catch(L){if(L===gn||L===oi)throw L;var ae=dt(29,L,null,h.mode);return ae.lanes=z,ae.return=h,ae}}}var Xa=rr(!0),dr=rr(!1),da=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(le&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ei(e),Jc(e,null,a),t}return Pl(e,n,t,a),ei(e)}function nl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ac(e,a)}}function ss(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var us=!1;function ll(){if(us){var e=mn;if(e!==null)throw e}}function il(e,t,a,n){us=!1;var l=e.updateQueue;da=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,v=d.next;d.next=null,o===null?i=v:o.next=v,o=d;var j=e.alternate;j!==null&&(j=j.updateQueue,c=j.lastBaseUpdate,c!==o&&(c===null?j.firstBaseUpdate=v:c.next=v,j.lastBaseUpdate=d))}if(i!==null){var E=l.baseState;o=0,j=v=d=null,c=i;do{var b=c.lane&-536870913,w=b!==c.lane;if(w?(I&b)===b:(n&b)===b){b!==0&&b===hn&&(us=!0),j!==null&&(j=j.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var U=e,R=c;b=t;var pe=a;switch(R.tag){case 1:if(U=R.payload,typeof U=="function"){E=U.call(pe,E,b);break e}E=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=R.payload,b=typeof U=="function"?U.call(pe,E,b):U,b==null)break e;E=C({},E,b);break e;case 2:da=!0}}b=c.callback,b!==null&&(e.flags|=64,w&&(e.flags|=8192),w=l.callbacks,w===null?l.callbacks=[b]:w.push(b))}else w={lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},j===null?(v=j=w,d=E):j=j.next=w,o|=b;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;w=c,c=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);j===null&&(d=E),l.baseState=d,l.firstBaseUpdate=v,l.lastBaseUpdate=j,i===null&&(l.shared.lanes=0),xa|=o,e.lanes=o,e.memoizedState=E}}function fr(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function pr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fr(a[e],t)}var xn=We(null),ri=We(0);function hr(e,t){e=ea,se(ri,e),se(xn,t),ea=e|t.baseLanes}function cs(){se(ri,ea),se(xn,xn.current)}function rs(){ea=ri.current,ze(xn),ze(ri)}var ft=We(null),zt=null;function ha(e){var t=e.alternate;se(Ae,Ae.current&1),se(ft,e),zt===null&&(t===null||xn.current!==null||t.memoizedState!==null)&&(zt=e)}function ds(e){se(Ae,Ae.current),se(ft,e),zt===null&&(zt=e)}function mr(e){e.tag===22?(se(Ae,Ae.current),se(ft,e),zt===null&&(zt=e)):ma()}function ma(){se(Ae,Ae.current),se(ft,ft.current)}function pt(e){ze(ft),zt===e&&(zt=null),ze(Ae)}var Ae=We(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yu(a)||xu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $t=0,Q=null,de=null,Ue=null,fi=!1,vn=!1,Qa=!1,pi=0,ol=0,bn=null,Vp=0;function Ee(){throw Error(r(321))}function fs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function ps(e,t,a,n,l,i){return $t=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Ir:As,Qa=!1,i=a(n,l),Qa=!1,vn&&(i=yr(t,a,n,l)),gr(e),i}function gr(e){T.H=cl;var t=de!==null&&de.next!==null;if($t=0,Ue=de=Q=null,fi=!1,ol=0,bn=null,t)throw Error(r(300));e===null||Le||(e=e.dependencies,e!==null&&ni(e)&&(Le=!0))}function yr(e,t,a,n){Q=e;var l=0;do{if(vn&&(bn=null),ol=0,vn=!1,25<=l)throw Error(r(301));if(l+=1,Ue=de=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Pr,i=t(a,n)}while(vn);return i}function $p(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?sl(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Q.flags|=1024),t}function hs(){var e=pi!==0;return pi=0,e}function ms(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function gs(e){if(fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fi=!1}$t=0,Ue=de=Q=null,vn=!1,ol=pi=0,bn=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Q.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function De(){if(de===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Ue===null?Q.memoizedState:Ue.next;if(t!==null)Ue=t,de=e;else{if(e===null)throw Q.alternate===null?Error(r(467)):Error(r(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Ue===null?Q.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function hi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var t=ol;return ol+=1,bn===null&&(bn=[]),e=sr(bn,e,t),t=Q,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Ir:As),e}function mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===we)return Xe(e)}throw Error(r(438,String(e)))}function ys(e){var t=null,a=Q.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Q.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=hi(),Q.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=A;return t.index++,a}function Zt(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=De();return xs(t,de,e)}function xs(e,t,a){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var c=o=null,d=null,v=t,j=!1;do{var E=v.lane&-536870913;if(E!==v.lane?(I&E)===E:($t&E)===E){var b=v.revertLane;if(b===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),E===hn&&(j=!0);else if(($t&b)===b){v=v.next,b===hn&&(j=!0);continue}else E={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(c=d=E,o=i):d=d.next=E,Q.lanes|=b,xa|=b;E=v.action,Qa&&a(i,E),i=v.hasEagerState?v.eagerState:a(i,E)}else b={lane:E,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},d===null?(c=d=b,o=i):d=d.next=b,Q.lanes|=E,xa|=E;v=v.next}while(v!==null&&v!==t);if(d===null?o=i:d.next=c,!rt(i,e.memoizedState)&&(Le=!0,j&&(a=mn,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=d,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function vs(e){var t=De(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);rt(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function xr(e,t,a){var n=Q,l=De(),i=te;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=t();var o=!rt((de||l).memoizedState,a);if(o&&(l.memoizedState=a,Le=!0),l=l.queue,Ss(wr.bind(null,n,l,e),[e]),l.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,wn(9,{destroy:void 0},br.bind(null,n,l,a,t),null),he===null)throw Error(r(349));i||($t&127)!==0||vr(n,t,a)}return a}function vr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Q.updateQueue,t===null?(t=hi(),Q.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function br(e,t,a,n){t.value=a,t.getSnapshot=n,Sr(t)&&jr(e)}function wr(e,t,a){return a(function(){Sr(t)&&jr(e)})}function Sr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function jr(e){var t=ka(e,2);t!==null&&ot(t,e,2)}function bs(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Qa){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function zr(e,t,a,n){return e.baseState=a,xs(e,de,typeof n=="function"?n:Zt)}function Zp(e,t,a,n,l){if(vi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};T.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Tr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Tr(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=T.T,o={};T.T=o;try{var c=a(l,n),d=T.S;d!==null&&d(o,c),Er(e,t,c)}catch(v){ws(e,t,v)}finally{i!==null&&o.types!==null&&(i.types=o.types),T.T=i}}else try{i=a(l,n),Er(e,t,i)}catch(v){ws(e,t,v)}}function Er(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Mr(e,t,n)},function(n){return ws(e,t,n)}):Mr(e,t,a)}function Mr(e,t,a){t.status="fulfilled",t.value=a,Ar(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Tr(e,a)))}function ws(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Ar(t),t=t.next;while(t!==n)}e.action=null}function Ar(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dr(e,t){return t}function Cr(e,t){if(te){var a=he.formState;if(a!==null){e:{var n=Q;if(te){if(ve){t:{for(var l=ve,i=jt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Tt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ve=Tt(l.nextSibling),n=l.data==="F!";break e}}ca(n)}n=!1}n&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:t},a.queue=n,a=Kr.bind(null,Q,n),n.dispatch=a,n=bs(!1),i=Ms.bind(null,Q,!1,n.queue),n=Fe(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Zp.bind(null,Q,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Or(e){var t=De();return Ur(t,de,e)}function Ur(e,t,a){if(t=xs(e,t,Dr)[0],e=gi(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=sl(t)}catch(o){throw o===gn?oi:o}else n=t;t=De();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(Q.flags|=2048,wn(9,{destroy:void 0},Jp.bind(null,l,a),null)),[n,i,e]}function Jp(e,t){e.action=t}function Lr(e){var t=De(),a=de;if(a!==null)return Ur(t,a,e);De(),t=t.memoizedState,a=De();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function wn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Q.updateQueue,t===null&&(t=hi(),Q.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Br(){return De().memoizedState}function yi(e,t,a,n){var l=Fe();Q.flags|=e,l.memoizedState=wn(1|t,{destroy:void 0},a,n===void 0?null:n)}function xi(e,t,a,n){var l=De();n=n===void 0?null:n;var i=l.memoizedState.inst;de!==null&&n!==null&&fs(n,de.memoizedState.deps)?l.memoizedState=wn(t,i,a,n):(Q.flags|=e,l.memoizedState=wn(1|t,i,a,n))}function kr(e,t){yi(8390656,8,e,t)}function Ss(e,t){xi(2048,8,e,t)}function Kp(e){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=hi(),Q.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Nr(e){var t=De().memoizedState;return Kp({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Rr(e,t){return xi(4,2,e,t)}function Hr(e,t){return xi(4,4,e,t)}function _r(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qr(e,t,a){a=a!=null?a.concat([e]):null,xi(4,4,_r.bind(null,t,e),a)}function js(){}function Yr(e,t){var a=De();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&fs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Gr(e,t){var a=De();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&fs(t,n[1]))return n[0];if(n=e(),Qa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n}function zs(e,t,a){return a===void 0||($t&1073741824)!==0&&(I&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Xd(),Q.lanes|=e,xa|=e,a)}function Xr(e,t,a,n){return rt(a,t)?a:xn.current!==null?(e=zs(e,a,n),rt(e,t)||(Le=!0),e):($t&42)===0||($t&1073741824)!==0&&(I&261930)===0?(Le=!0,e.memoizedState=a):(e=Xd(),Q.lanes|=e,xa|=e,t)}function Qr(e,t,a,n,l){var i=O.p;O.p=i!==0&&8>i?i:8;var o=T.T,c={};T.T=c,Ms(e,!1,t,a);try{var d=l(),v=T.S;if(v!==null&&v(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var j=Qp(d,n);ul(e,t,j,gt(e))}else ul(e,t,n,gt(e))}catch(E){ul(e,t,{then:function(){},status:"rejected",reason:E},gt())}finally{O.p=i,o!==null&&c.types!==null&&(o.types=c.types),T.T=o}}function Wp(){}function Ts(e,t,a,n){if(e.tag!==5)throw Error(r(476));var l=Vr(e).queue;Qr(e,l,t,G,a===null?Wp:function(){return $r(e),a(n)})}function Vr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:G},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $r(e){var t=Vr(e);t.next===null&&(t=e.alternate.memoizedState),ul(e,t.next.queue,{},gt())}function Es(){return Xe(Tl)}function Zr(){return De().memoizedState}function Jr(){return De().memoizedState}function Fp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=fa(a);var n=pa(t,e,a);n!==null&&(ot(n,t,a),nl(n,t,a)),t={cache:ts()},e.payload=t;return}t=t.return}}function Ip(e,t,a){var n=gt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vi(e)?Wr(t,a):(a=Qo(e,t,a,n),a!==null&&(ot(a,e,n),Fr(a,t,n)))}function Kr(e,t,a){var n=gt();ul(e,t,a,n)}function ul(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vi(e))Wr(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,c=i(o,a);if(l.hasEagerState=!0,l.eagerState=c,rt(c,o))return Pl(e,t,l,0),he===null&&Il(),!1}catch{}if(a=Qo(e,t,l,n),a!==null)return ot(a,e,n),Fr(a,t,n),!0}return!1}function Ms(e,t,a,n){if(n={lane:2,revertLane:iu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vi(e)){if(t)throw Error(r(479))}else t=Qo(e,a,n,2),t!==null&&ot(t,e,2)}function vi(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Wr(e,t){vn=fi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fr(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ac(e,a)}}var cl={readContext:Xe,use:mi,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};cl.useEffectEvent=Ee;var Ir={readContext:Xe,use:mi,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:kr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,yi(4194308,4,_r.bind(null,t,e),a)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){yi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var n=e();if(Qa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Fe();if(a!==void 0){var l=a(t);if(Qa){la(!0);try{a(t)}finally{la(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Ip.bind(null,Q,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=bs(e);var t=e.queue,a=Kr.bind(null,Q,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:js,useDeferredValue:function(e,t){var a=Fe();return zs(a,e,t)},useTransition:function(){var e=bs(!1);return e=Qr.bind(null,Q,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Q,l=Fe();if(te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),he===null)throw Error(r(349));(I&127)!==0||vr(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,kr(wr.bind(null,n,i,e),[e]),n.flags|=2048,wn(9,{destroy:void 0},br.bind(null,n,i,a,t),null),a},useId:function(){var e=Fe(),t=he.identifierPrefix;if(te){var a=Nt,n=kt;a=(n&~(1<<32-ct(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=pi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Vp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:Cr,useActionState:Cr,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ms.bind(null,Q,!0,a),a.dispatch=t,[e,t]},useMemoCache:ys,useCacheRefresh:function(){return Fe().memoizedState=Fp.bind(null,Q)},useEffectEvent:function(e){var t=Fe(),a={impl:e};return t.memoizedState=a,function(){if((le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},As={readContext:Xe,use:mi,useCallback:Yr,useContext:Xe,useEffect:Ss,useImperativeHandle:qr,useInsertionEffect:Rr,useLayoutEffect:Hr,useMemo:Gr,useReducer:gi,useRef:Br,useState:function(){return gi(Zt)},useDebugValue:js,useDeferredValue:function(e,t){var a=De();return Xr(a,de.memoizedState,e,t)},useTransition:function(){var e=gi(Zt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:xr,useId:Zr,useHostTransitionStatus:Es,useFormState:Or,useActionState:Or,useOptimistic:function(e,t){var a=De();return zr(a,de,e,t)},useMemoCache:ys,useCacheRefresh:Jr};As.useEffectEvent=Nr;var Pr={readContext:Xe,use:mi,useCallback:Yr,useContext:Xe,useEffect:Ss,useImperativeHandle:qr,useInsertionEffect:Rr,useLayoutEffect:Hr,useMemo:Gr,useReducer:vs,useRef:Br,useState:function(){return vs(Zt)},useDebugValue:js,useDeferredValue:function(e,t){var a=De();return de===null?zs(a,e,t):Xr(a,de.memoizedState,e,t)},useTransition:function(){var e=vs(Zt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:sl(e),t]},useSyncExternalStore:xr,useId:Zr,useHostTransitionStatus:Es,useFormState:Lr,useActionState:Lr,useOptimistic:function(e,t){var a=De();return de!==null?zr(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ys,useCacheRefresh:Jr};Pr.useEffectEvent=Nr;function Ds(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:C({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cs={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=gt(),l=fa(n);l.payload=t,a!=null&&(l.callback=a),t=pa(e,l,n),t!==null&&(ot(t,e,n),nl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=gt(),l=fa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=pa(e,l,n),t!==null&&(ot(t,e,n),nl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),n=fa(a);n.tag=2,t!=null&&(n.callback=t),t=pa(e,n,a),t!==null&&(ot(t,e,a),nl(t,e,a))}};function ed(e,t,a,n,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(a,n)||!Kn(l,i):!0}function td(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=C({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function ad(e){Fl(e)}function nd(e){console.error(e)}function ld(e){Fl(e)}function bi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function id(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Os(e,t,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){bi(e,t)},a}function od(e){return e=fa(e),e.tag=3,e}function sd(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){id(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){id(t,a,n),typeof l!="function"&&(va===null?va=new Set([this]):va.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Pp(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&pn(t,a,l,!0),a=ft.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Ui():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===si?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),au(e,n,l)),!1;case 22:return a.flags|=65536,n===si?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),au(e,n,l)),!1}throw Error(r(435,a.tag))}return au(e,n,l),Ui(),!1}if(te)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Wo&&(e=Error(r(422),{cause:n}),In(bt(e,a)))):(n!==Wo&&(t=Error(r(423),{cause:n}),In(bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=bt(n,a),l=Os(e.stateNode,n,l),ss(e,l),Me!==4&&(Me=2)),!1;var i=Error(r(520),{cause:n});if(i=bt(i,a),yl===null?yl=[i]:yl.push(i),Me!==4&&(Me=2),t===null)return!0;n=bt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Os(a.stateNode,n,e),ss(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(va===null||!va.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=od(l),sd(l,e,a,n),ss(a,l),!1}a=a.return}while(a!==null);return!1}var Us=Error(r(461)),Le=!1;function Qe(e,t,a,n){t.child=e===null?dr(t,null,a,n):Xa(t,e.child,a,n)}function ud(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var o={};for(var c in n)c!=="ref"&&(o[c]=n[c])}else o=n;return _a(t),n=ps(e,t,a,o,i,l),c=hs(),e!==null&&!Le?(ms(e,t,l),Jt(e,t,l)):(te&&c&&Jo(t),t.flags|=1,Qe(e,t,n,l),t.child)}function cd(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Vo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,rd(e,t,i,n,l)):(e=ti(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qs(e,l)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Kn,a(o,n)&&e.ref===t.ref)return Jt(e,t,l)}return t.flags|=1,e=Gt(i,n),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Kn(i,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=i,qs(e,l))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,Jt(e,t,l)}return Ls(e,t,a,n,l)}function dd(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return fd(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?hr(t,i):cs(),mr(t);else return n=t.lanes=536870912,fd(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(ii(t,i.cachePool),hr(t,i),ma(),t.memoizedState=null):(e!==null&&ii(t,null),cs(),ma());return Qe(e,t,l,a),t.child}function rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fd(e,t,a,n,l){var i=ns();return i=i===null?null:{parent:Oe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ii(t,null),cs(),mr(t),e!==null&&pn(e,t,n,!0),t.childLanes=l,null}function wi(e,t){return t=ji({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pd(e,t,a){return Xa(t,e.child,null,a),e=wi(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function eh(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(n.mode==="hidden")return e=wi(t,n),t.lanes=536870912,rl(null,e);if(ds(t),(e=ve)?(e=Ef(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:kt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=Wc(e),a.return=t,t.child=a,Ge=t,ve=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return wi(t,n)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(ds(t),l)if(t.flags&256)t.flags&=-257,t=pd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Le||pn(e,t,a,!1),l=(a&e.childLanes)!==0,Le||l){if(n=he,n!==null&&(o=nc(n,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,ka(e,o),ot(n,e,o),Us;Ui(),t=pd(e,t,a)}else e=i.treeContext,ve=Tt(o.nextSibling),Ge=t,te=!0,ua=null,jt=!1,e!==null&&Pc(t,e),t=wi(t,n),t.flags|=4096;return t}return e=Gt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ls(e,t,a,n,l){return _a(t),a=ps(e,t,a,n,void 0,l),n=hs(),e!==null&&!Le?(ms(e,t,l),Jt(e,t,l)):(te&&n&&Jo(t),t.flags|=1,Qe(e,t,a,l),t.child)}function hd(e,t,a,n,l,i){return _a(t),t.updateQueue=null,a=yr(t,n,a,l),gr(e),n=hs(),e!==null&&!Le?(ms(e,t,i),Jt(e,t,i)):(te&&n&&Jo(t),t.flags|=1,Qe(e,t,a,i),t.child)}function md(e,t,a,n,l){if(_a(t),t.stateNode===null){var i=cn,o=a.contextType;typeof o=="object"&&o!==null&&(i=Xe(o)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},is(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Xe(o):cn,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Ds(t,a,o,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Cs.enqueueReplaceState(i,i.state,null),il(t,n,i,l),ll(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,d=Va(a,c);i.props=d;var v=i.context,j=a.contextType;o=cn,typeof j=="object"&&j!==null&&(o=Xe(j));var E=a.getDerivedStateFromProps;j=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||v!==o)&&td(t,i,n,o),da=!1;var b=t.memoizedState;i.state=b,il(t,n,i,l),ll(),v=t.memoizedState,c||b!==v||da?(typeof E=="function"&&(Ds(t,a,E,n),v=t.memoizedState),(d=da||ed(t,a,d,n,b,v,o))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=v),i.props=n,i.state=v,i.context=o,n=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,os(e,t),o=t.memoizedProps,j=Va(a,o),i.props=j,E=t.pendingProps,b=i.context,v=a.contextType,d=cn,typeof v=="object"&&v!==null&&(d=Xe(v)),c=a.getDerivedStateFromProps,(v=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==E||b!==d)&&td(t,i,n,d),da=!1,b=t.memoizedState,i.state=b,il(t,n,i,l),ll();var w=t.memoizedState;o!==E||b!==w||da||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof c=="function"&&(Ds(t,a,c,n),w=t.memoizedState),(j=da||ed(t,a,j,n,b,w,d)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,w,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,w,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),i.props=n,i.state=w,i.context=d,n=j):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Si(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=Xa(t,e.child,null,l),t.child=Xa(t,null,a,l)):Qe(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Jt(e,t,l),e}function gd(e,t,a,n){return Ra(),t.flags|=256,Qe(e,t,a,n),t.child}var Bs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ks(e){return{baseLanes:e,cachePool:ir()}}function Ns(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mt),e}function yd(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ae.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(l?ha(t):ma(),(e=ve)?(e=Ef(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa!==null?{id:kt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=Wc(e),a.return=t,t.child=a,Ge=t,ve=null)):e=null,e===null)throw ca(t);return xu(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,l?(ma(),l=t.mode,c=ji({mode:"hidden",children:c},l),n=Na(n,l,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=ks(a),n.childLanes=Ns(e,o,a),t.memoizedState=Bs,rl(null,n)):(ha(t),Rs(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(ha(t),t.flags&=-257,t=Hs(e,t,a)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),c=n.fallback,l=t.mode,n=ji({mode:"visible",children:n.children},l),c=Na(c,l,a,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,Xa(t,e.child,null,a),n=t.child,n.memoizedState=ks(a),n.childLanes=Ns(e,o,a),t.memoizedState=Bs,t=rl(null,n));else if(ha(t),xu(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var v=o.dgst;o=v,n=Error(r(419)),n.stack="",n.digest=o,In({value:n,source:null,stack:null}),t=Hs(e,t,a)}else if(Le||pn(e,t,a,!1),o=(a&e.childLanes)!==0,Le||o){if(o=he,o!==null&&(n=nc(o,a),n!==0&&n!==d.retryLane))throw d.retryLane=n,ka(e,n),ot(o,e,n),Us;yu(c)||Ui(),t=Hs(e,t,a)}else yu(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,ve=Tt(c.nextSibling),Ge=t,te=!0,ua=null,jt=!1,e!==null&&Pc(t,e),t=Rs(t,n.children),t.flags|=4096);return t}return l?(ma(),c=n.fallback,l=t.mode,d=e.child,v=d.sibling,n=Gt(d,{mode:"hidden",children:n.children}),n.subtreeFlags=d.subtreeFlags&65011712,v!==null?c=Gt(v,c):(c=Na(c,l,a,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,rl(null,n),n=t.child,c=e.child.memoizedState,c===null?c=ks(a):(l=c.cachePool,l!==null?(d=Oe._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=ir(),c={baseLanes:c.baseLanes|a,cachePool:l}),n.memoizedState=c,n.childLanes=Ns(e,o,a),t.memoizedState=Bs,rl(e.child,n)):(ha(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Rs(e,t){return t=ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ji(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Hs(e,t,a){return Xa(t,e.child,null,a),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Po(e.return,t,a)}function _s(e,t,a,n,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l,o.treeForkCount=i)}function vd(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var o=Ae.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,se(Ae,o),Qe(e,t,n,a),n=te?Fn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,a,t);else if(e.tag===19)xd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&di(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),_s(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&di(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}_s(t,!0,a,null,i,n);break;case"together":_s(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function th(e,t,a){switch(t.tag){case 3:Bl(t,t.stateNode.containerInfo),ra(t,Oe,e.memoizedState.cache),Ra();break;case 27:case 5:co(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ds(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?yd(e,t,a):(ha(t),e=Jt(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(pn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return vd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),se(Ae,Ae.current),n)break;return null;case 22:return t.lanes=0,dd(e,t,a,t.pendingProps);case 24:ra(t,Oe,e.memoizedState.cache)}return Jt(e,t,a)}function bd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!qs(e,a)&&(t.flags&128)===0)return Le=!1,th(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,te&&(t.flags&1048576)!==0&&Ic(t,Fn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")Vo(e)?(n=Va(e,n),t.tag=1,t=md(null,t,e,n,a)):(t.tag=0,t=Ls(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Ze){t.tag=11,t=ud(null,t,e,n,a);break e}else if(l===Ne){t.tag=14,t=cd(null,t,e,n,a);break e}}throw t=Mt(e)||e,Error(r(306,t,""))}}return t;case 0:return Ls(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Va(n,t.pendingProps),md(e,t,n,l,a);case 3:e:{if(Bl(t,t.stateNode.containerInfo),e===null)throw Error(r(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,os(e,t),il(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ra(t,Oe,n),n!==i.cache&&es(t,[Oe],a,!0),ll(),n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=gd(e,t,n,a);break e}else if(n!==l){l=bt(Error(r(424)),t),In(l),t=gd(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=Tt(e.firstChild),Ge=t,te=!0,ua=null,jt=!0,a=dr(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ra(),n===l){t=Jt(e,t,a);break e}Qe(e,t,n,a)}t=t.child}return t;case 26:return Si(e,t),e===null?(a=Uf(t.type,null,t.pendingProps,null))?t.memoizedState=a:te||(a=t.type,e=t.pendingProps,n=_i(na.current).createElement(a),n[Ye]=t,n[et]=e,Ve(n,a,e),_e(n),t.stateNode=n):t.memoizedState=Uf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return co(t),e===null&&te&&(n=t.stateNode=Df(t.type,t.pendingProps,na.current),Ge=t,jt=!0,l=ve,ja(t.type)?(vu=l,ve=Tt(n.firstChild)):ve=l),Qe(e,t,t.pendingProps.children,a),Si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((l=n=ve)&&(n=Oh(n,t.type,t.pendingProps,jt),n!==null?(t.stateNode=n,Ge=t,ve=Tt(n.firstChild),jt=!1,l=!0):l=!1),l||ca(t)),co(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,hu(l,i)?n=null:o!==null&&hu(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ps(e,t,$p,null,null,a),Tl._currentValue=l),Si(e,t),Qe(e,t,n,a),t.child;case 6:return e===null&&te&&((e=a=ve)&&(a=Uh(a,t.pendingProps,jt),a!==null?(t.stateNode=a,Ge=t,ve=null,e=!0):e=!1),e||ca(t)),null;case 13:return yd(e,t,a);case 4:return Bl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Xa(t,null,n,a):Qe(e,t,n,a),t.child;case 11:return ud(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ra(t,t.type,n.value),Qe(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,_a(t),l=Xe(l),n=n(l),t.flags|=1,Qe(e,t,n,a),t.child;case 14:return cd(e,t,t.type,t.pendingProps,a);case 15:return rd(e,t,t.type,t.pendingProps,a);case 19:return vd(e,t,a);case 31:return eh(e,t,a);case 22:return dd(e,t,a,t.pendingProps);case 24:return _a(t),n=Xe(Oe),e===null?(l=ns(),l===null&&(l=he,i=ts(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},is(t),ra(t,Oe,l)):((e.lanes&a)!==0&&(os(e,t),il(t,null,null,a),ll()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ra(t,Oe,n)):(n=i.cache,ra(t,Oe,n),n!==l.cache&&es(t,[Oe],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Kt(e){e.flags|=4}function Ys(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Zd())e.flags|=8192;else throw Ga=si,ls}else e.flags&=-16777217}function wd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rf(t))if(Zd())e.flags|=8192;else throw Ga=si,ls}function zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ec():536870912,e.lanes|=t,Tn|=t)}function dl(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function ah(e,t,a){var n=t.pendingProps;switch(Ko(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vt(Oe),Ja(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fn(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fo())),be(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Kt(t),i!==null?(be(t),wd(t,i)):(be(t),Ys(t,l,null,n,a))):i?i!==e.memoizedState?(Kt(t),be(t),wd(t,i)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Kt(t),be(t),Ys(t,l,e,n,a)),null;case 27:if(kl(t),a=na.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Kt(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return be(t),null}e=He.current,fn(t)?er(t):(e=Df(l,n,a),t.stateNode=e,Kt(t))}return be(t),null;case 5:if(kl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Kt(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return be(t),null}if(i=He.current,fn(t))er(t);else{var o=_i(na.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?o.createElement(l,{is:n.is}):o.createElement(l)}}i[Ye]=t,i[et]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Ve(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Kt(t)}}return be(t),Ys(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Kt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(r(166));if(e=na.current,fn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ge,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ye]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||xf(e.nodeValue,a)),e||ca(t,!0)}else e=_i(e).createTextNode(n),e[Ye]=t,t.stateNode=e}return be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=fn(t),a!==null){if(e===null){if(!n)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ye]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else a=Fo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return be(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Ye]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),l=!1}else l=Fo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zi(t,t.updateQueue),be(t),null);case 4:return Ja(),e===null&&cu(t.stateNode.containerInfo),be(t),null;case 10:return Vt(t.type),be(t),null;case 19:if(ze(Ae),n=t.memoizedState,n===null)return be(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)dl(n,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=di(e),i!==null){for(t.flags|=128,dl(n,!1),e=i.updateQueue,t.updateQueue=e,zi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Kc(a,e),a=a.sibling;return se(Ae,Ae.current&1|2),te&&Xt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&st()>Di&&(t.flags|=128,l=!0,dl(n,!1),t.lanes=4194304)}else{if(!l)if(e=di(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,zi(t,e),dl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!te)return be(t),null}else 2*st()-n.renderingStartTime>Di&&a!==536870912&&(t.flags|=128,l=!0,dl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=st(),e.sibling=null,a=Ae.current,se(Ae,l?a&1|2:a&1),te&&Xt(t,n.treeForkCount),e):(be(t),null);case 22:case 23:return pt(t),rs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),a=t.updateQueue,a!==null&&zi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&ze(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Oe),be(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function nh(e,t){switch(Ko(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Oe),Ja(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kl(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ae),null;case 4:return Ja(),null;case 10:return Vt(t.type),null;case 22:case 23:return pt(t),rs(),e!==null&&ze(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Oe),null;case 25:return null;default:return null}}function Sd(e,t){switch(Ko(t),t.tag){case 3:Vt(Oe),Ja();break;case 26:case 27:case 5:kl(t);break;case 4:Ja();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:ze(Ae);break;case 10:Vt(t.type);break;case 22:case 23:pt(t),rs(),e!==null&&ze(qa);break;case 24:Vt(Oe)}}function fl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,o=a.inst;n=i(),o.destroy=n}a=a.next}while(a!==l)}}catch(c){ce(t,t.return,c)}}function ga(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var o=n.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,l=t;var d=a,v=c;try{v()}catch(j){ce(l,d,j)}}}n=n.next}while(n!==i)}}catch(j){ce(t,t.return,j)}}function jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{pr(t,a)}catch(n){ce(e,e.return,n)}}}function zd(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ce(e,t,n)}}function pl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ce(e,t,l)}}function Rt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ce(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ce(e,t,l)}else a.current=null}function Td(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ce(e,e.return,l)}}function Gs(e,t,a){try{var n=e.stateNode;Th(n,e.type,a,t),n[et]=t}catch(l){ce(e,e.return,l)}}function Ed(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Xs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(n!==4&&(n===27&&ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Qs(e,t,a),e=e.sibling;e!==null;)Qs(e,t,a),e=e.sibling}function Ti(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ti(e,t,a),e=e.sibling;e!==null;)Ti(e,t,a),e=e.sibling}function Md(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ve(t,n,a),t[Ye]=e,t[et]=a}catch(i){ce(e,e.return,i)}}var Wt=!1,Be=!1,Vs=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,qe=null;function lh(e,t){if(e=e.containerInfo,fu=$i,e=qc(e),Ho(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,c=-1,d=-1,v=0,j=0,E=e,b=null;t:for(;;){for(var w;E!==a||l!==0&&E.nodeType!==3||(c=o+l),E!==i||n!==0&&E.nodeType!==3||(d=o+n),E.nodeType===3&&(o+=E.nodeValue.length),(w=E.firstChild)!==null;)b=E,E=w;for(;;){if(E===e)break t;if(b===a&&++v===l&&(c=o),b===i&&++j===n&&(d=o),(w=E.nextSibling)!==null)break;E=b,b=E.parentNode}E=w}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(pu={focusedElem:e,selectionRange:a},$i=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var U=Va(a.type,l);e=n.getSnapshotBeforeUpdate(U,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(R){ce(a,a.return,R)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)gu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Dd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:It(e,a),n&4&&fl(5,a);break;case 1:if(It(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ce(a,a.return,o)}else{var l=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ce(a,a.return,o)}}n&64&&jd(a),n&512&&pl(a,a.return);break;case 3:if(It(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{pr(e,t)}catch(o){ce(a,a.return,o)}}break;case 27:t===null&&n&4&&Md(a);case 26:case 5:It(e,a),t===null&&n&4&&Td(a),n&512&&pl(a,a.return);break;case 12:It(e,a);break;case 31:It(e,a),n&4&&Ud(e,a);break;case 13:It(e,a),n&4&&Ld(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ph.bind(null,a),Lh(e,a))));break;case 22:if(n=a.memoizedState!==null||Wt,!n){t=t!==null&&t.memoizedState!==null||Be,l=Wt;var i=Be;Wt=n,(Be=t)&&!i?Pt(e,a,(a.subtreeFlags&8772)!==0):It(e,a),Wt=l,Be=i}break;case 30:break;default:It(e,a)}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,at=!1;function Ft(e,t,a){for(a=a.child;a!==null;)Od(e,t,a),a=a.sibling}function Od(e,t,a){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Rn,a)}catch{}switch(a.tag){case 26:Be||Rt(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Rt(a,t);var n=Se,l=at;ja(a.type)&&(Se=a.stateNode,at=!1),Ft(e,t,a),Sl(a.stateNode),Se=n,at=l;break;case 5:Be||Rt(a,t);case 6:if(n=Se,l=at,Se=null,Ft(e,t,a),Se=n,at=l,Se!==null)if(at)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(i){ce(a,t,i)}else try{Se.removeChild(a.stateNode)}catch(i){ce(a,t,i)}break;case 18:Se!==null&&(at?(e=Se,zf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ln(e)):zf(Se,a.stateNode));break;case 4:n=Se,l=at,Se=a.stateNode.containerInfo,at=!0,Ft(e,t,a),Se=n,at=l;break;case 0:case 11:case 14:case 15:ga(2,a,t),Be||ga(4,a,t),Ft(e,t,a);break;case 1:Be||(Rt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&zd(a,t,n)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:Be=(n=Be)||a.memoizedState!==null,Ft(e,t,a),Be=n;break;default:Ft(e,t,a)}}function Ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ln(e)}catch(a){ce(t,t.return,a)}}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ln(e)}catch(a){ce(t,t.return,a)}}function ih(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ad),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ad),t;default:throw Error(r(435,e.tag))}}function Ei(e,t){var a=ih(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=hh.bind(null,e,n);n.then(l,l)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(ja(c.type)){Se=c.stateNode,at=!1;break e}break;case 5:Se=c.stateNode,at=!1;break e;case 3:case 4:Se=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(Se===null)throw Error(r(160));Od(i,o,l),Se=null,at=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}var Ct=null;function Bd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),lt(e),n&4&&(ga(3,e,e.return),fl(3,e),ga(5,e,e.return));break;case 1:nt(t,e),lt(e),n&512&&(Be||a===null||Rt(a,a.return)),n&64&&Wt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Ct;if(nt(t,e),lt(e),n&512&&(Be||a===null||Rt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[qn]||i[Ye]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Ve(i,n,a),i[Ye]=e,_e(i),n=i;break e;case"link":var o=kf("link","href",l).get(n+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(i=o[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}i=l.createElement(n),Ve(i,n,a),l.head.appendChild(i);break;case"meta":if(o=kf("meta","content",l).get(n+(a.content||""))){for(c=0;c<o.length;c++)if(i=o[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}i=l.createElement(n),Ve(i,n,a),l.head.appendChild(i);break;default:throw Error(r(468,n))}i[Ye]=e,_e(i),n=i}e.stateNode=n}else Nf(l,e.type,e.stateNode);else e.stateNode=Bf(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Nf(l,e.type,e.stateNode):Bf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Gs(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),lt(e),n&512&&(Be||a===null||Rt(a,a.return)),a!==null&&n&4&&Gs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),lt(e),n&512&&(Be||a===null||Rt(a,a.return)),e.flags&32){l=e.stateNode;try{tn(l,"")}catch(U){ce(e,e.return,U)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Gs(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Vs=!0);break;case 6:if(nt(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(U){ce(e,e.return,U)}}break;case 3:if(Gi=null,l=Ct,Ct=qi(t.containerInfo),nt(t,e),Ct=l,lt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(U){ce(e,e.return,U)}Vs&&(Vs=!1,kd(e));break;case 4:n=Ct,Ct=qi(e.stateNode.containerInfo),nt(t,e),lt(e),Ct=n;break;case 12:nt(t,e),lt(e);break;case 31:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ei(e,n)));break;case 13:nt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ai=st()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ei(e,n)));break;case 22:l=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,v=Wt,j=Be;if(Wt=v||l,Be=j||d,nt(t,e),Be=j,Wt=v,lt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||d||Wt||Be||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var E=d.memoizedProps.style,b=E!=null&&E.hasOwnProperty("display")?E.display:null;c.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(U){ce(d,d.return,U)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(U){ce(d,d.return,U)}}}else if(t.tag===18){if(a===null){d=t;try{var w=d.stateNode;l?Tf(w,!0):Tf(d.stateNode,!1)}catch(U){ce(d,d.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ei(e,a))));break;case 19:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ei(e,n)));break;case 30:break;case 21:break;default:nt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Ed(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,i=Xs(e);Ti(e,i,l);break;case 5:var o=a.stateNode;a.flags&32&&(tn(o,""),a.flags&=-33);var c=Xs(e);Ti(e,c,o);break;case 3:case 4:var d=a.stateNode.containerInfo,v=Xs(e);Qs(e,v,d);break;default:throw Error(r(161))}}catch(j){ce(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dd(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),$a(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&zd(t,t.return,a),$a(t);break;case 27:Sl(t.stateNode);case 26:case 5:Rt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function Pt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(l,i,a),fl(4,i);break;case 1:if(Pt(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(v){ce(n,n.return,v)}if(n=i,l=n.updateQueue,l!==null){var c=n.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)fr(d[l],c)}catch(v){ce(n,n.return,v)}}a&&o&64&&jd(i),pl(i,i.return);break;case 27:Md(i);case 26:case 5:Pt(l,i,a),a&&n===null&&o&4&&Td(i),pl(i,i.return);break;case 12:Pt(l,i,a);break;case 31:Pt(l,i,a),a&&o&4&&Ud(l,i);break;case 13:Pt(l,i,a),a&&o&4&&Ld(l,i);break;case 22:i.memoizedState===null&&Pt(l,i,a),pl(i,i.return);break;case 30:break;default:Pt(l,i,a)}t=t.sibling}}function $s(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Pn(a))}function Zs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pn(e))}function Ot(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nd(e,t,a,n),t=t.sibling}function Nd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,n),l&2048&&fl(9,t);break;case 1:Ot(e,t,a,n);break;case 3:Ot(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pn(e)));break;case 12:if(l&2048){Ot(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){ce(t,t.return,d)}}else Ot(e,t,a,n);break;case 31:Ot(e,t,a,n);break;case 13:Ot(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Ot(e,t,a,n):hl(e,t):i._visibility&2?Ot(e,t,a,n):(i._visibility|=2,Sn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&$s(o,t);break;case 24:Ot(e,t,a,n),l&2048&&Zs(t.alternate,t);break;default:Ot(e,t,a,n)}}function Sn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,c=a,d=n,v=o.flags;switch(o.tag){case 0:case 11:case 15:Sn(i,o,c,d,l),fl(8,o);break;case 23:break;case 22:var j=o.stateNode;o.memoizedState!==null?j._visibility&2?Sn(i,o,c,d,l):hl(i,o):(j._visibility|=2,Sn(i,o,c,d,l)),l&&v&2048&&$s(o.alternate,o);break;case 24:Sn(i,o,c,d,l),l&&v&2048&&Zs(o.alternate,o);break;default:Sn(i,o,c,d,l)}t=t.sibling}}function hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:hl(a,n),l&2048&&$s(n.alternate,n);break;case 24:hl(a,n),l&2048&&Zs(n.alternate,n);break;default:hl(a,n)}t=t.sibling}}var ml=8192;function jn(e,t,a){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)Rd(e,t,a),e=e.sibling}function Rd(e,t,a){switch(e.tag){case 26:jn(e,t,a),e.flags&ml&&e.memoizedState!==null&&Vh(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:jn(e,t,a);break;case 3:case 4:var n=Ct;Ct=qi(e.stateNode.containerInfo),jn(e,t,a),Ct=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ml,ml=16777216,jn(e,t,a),ml=n):jn(e,t,a));break;default:jn(e,t,a)}}function Hd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];qe=n,qd(n,e)}Hd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_d(e),e=e.sibling}function _d(e){switch(e.tag){case 0:case 11:case 15:gl(e),e.flags&2048&&ga(9,e,e.return);break;case 3:gl(e);break;case 12:gl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mi(e)):gl(e);break;default:gl(e)}}function Mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];qe=n,qd(n,e)}Hd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mi(t));break;default:Mi(t)}e=e.sibling}}function qd(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Pn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,qe=n;else e:for(a=e;qe!==null;){n=qe;var l=n.sibling,i=n.return;if(Cd(n),n===a){qe=null;break e}if(l!==null){l.return=i,qe=l;break e}qe=i}}}var oh={getCacheForType:function(e){var t=Xe(Oe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Xe(Oe).controller.signal}},sh=typeof WeakMap=="function"?WeakMap:Map,le=0,he=null,W=null,I=0,ue=0,ht=null,ya=!1,zn=!1,Js=!1,ea=0,Me=0,xa=0,Za=0,Ks=0,mt=0,Tn=0,yl=null,it=null,Ws=!1,Ai=0,Yd=0,Di=1/0,Ci=null,va=null,ke=0,ba=null,En=null,ta=0,Fs=0,Is=null,Gd=null,xl=0,Ps=null;function gt(){return(le&2)!==0&&I!==0?I&-I:T.T!==null?iu():lc()}function Xd(){if(mt===0)if((I&536870912)===0||te){var e=Hl;Hl<<=1,(Hl&3932160)===0&&(Hl=262144),mt=e}else mt=536870912;return e=ft.current,e!==null&&(e.flags|=32),mt}function ot(e,t,a){(e===he&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Mn(e,0),wa(e,I,mt,!1)),_n(e,a),((le&2)===0||e!==he)&&(e===he&&((le&2)===0&&(Za|=a),Me===4&&wa(e,I,mt,!1)),Ht(e))}function Qd(e,t,a){if((le&6)!==0)throw Error(r(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Hn(e,t),l=n?rh(e,t):tu(e,t,!0),i=n;do{if(l===0){zn&&!n&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!uh(a)){l=tu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;l=yl;var d=c.current.memoizedState.isDehydrated;if(d&&(Mn(c,o).flags|=256),o=tu(c,o,!1),o!==2){if(Js&&!d){c.errorRecoveryDisabledLanes|=i,Za|=i,l=4;break e}i=it,it=l,i!==null&&(it===null?it=i:it.push.apply(it,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Mn(e,0),wa(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:wa(n,t,mt,!ya);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=Ai+300-st(),10<l)){if(wa(n,t,mt,!ya),ql(n,0,!0)!==0)break e;ta=t,n.timeoutHandle=Sf(Vd.bind(null,n,a,it,Ci,Ws,t,mt,Za,Tn,ya,i,"Throttled",-0,0),l);break e}Vd(n,a,it,Ci,Ws,t,mt,Za,Tn,ya,i,null,-0,0)}}break}while(!0);Ht(e)}function Vd(e,t,a,n,l,i,o,c,d,v,j,E,b,w){if(e.timeoutHandle=-1,E=t.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Rd(t,i,E);var U=(i&62914560)===i?Ai-st():(i&4194048)===i?Yd-st():0;if(U=$h(E,U),U!==null){ta=i,e.cancelPendingCommit=U(Pd.bind(null,e,t,i,a,n,l,o,c,d,j,E,null,b,w)),wa(e,i,o,!v);return}}Pd(e,t,i,a,n,l,o,c,d)}function uh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!rt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,n){t&=~Ks,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-ct(l),o=1<<i;n[i]=-1,l&=~o}a!==0&&tc(e,a,t)}function Oi(){return(le&6)===0?(vl(0),!1):!0}function eu(){if(W!==null){if(ue===0)var e=W.return;else e=W,Qt=Ha=null,gs(e),yn=null,tl=0,e=W;for(;e!==null;)Sd(e.alternate,e),e=e.return;W=null}}function Mn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ah(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,eu(),he=e,W=a=Gt(e.current,null),I=t,ue=0,ht=null,ya=!1,zn=Hn(e,t),Js=!1,Tn=mt=Ks=Za=xa=Me=0,it=yl=null,Ws=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-ct(n),i=1<<l;t|=e[l],n&=~i}return ea=t,Il(),a}function $d(e,t){Q=null,T.H=cl,t===gn||t===oi?(t=ur(),ue=3):t===ls?(t=ur(),ue=4):ue=t===Us?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,W===null&&(Me=1,bi(e,bt(t,e.current)))}function Zd(){var e=ft.current;return e===null?!0:(I&4194048)===I?zt===null:(I&62914560)===I||(I&536870912)!==0?e===zt:!1}function Jd(){var e=T.H;return T.H=cl,e===null?cl:e}function Kd(){var e=T.A;return T.A=oh,e}function Ui(){Me=4,ya||(I&4194048)!==I&&ft.current!==null||(zn=!0),(xa&134217727)===0&&(Za&134217727)===0||he===null||wa(he,I,mt,!1)}function tu(e,t,a){var n=le;le|=2;var l=Jd(),i=Kd();(he!==e||I!==t)&&(Ci=null,Mn(e,t)),t=!1;var o=Me;e:do try{if(ue!==0&&W!==null){var c=W,d=ht;switch(ue){case 8:eu(),o=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var v=ue;if(ue=0,ht=null,An(e,c,d,v),a&&zn){o=0;break e}break;default:v=ue,ue=0,ht=null,An(e,c,d,v)}}ch(),o=Me;break}catch(j){$d(e,j)}while(!0);return t&&e.shellSuspendCounter++,Qt=Ha=null,le=n,T.H=l,T.A=i,W===null&&(he=null,I=0,Il()),o}function ch(){for(;W!==null;)Wd(W)}function rh(e,t){var a=le;le|=2;var n=Jd(),l=Kd();he!==e||I!==t?(Ci=null,Di=st()+500,Mn(e,t)):zn=Hn(e,t);e:do try{if(ue!==0&&W!==null){t=W;var i=ht;t:switch(ue){case 1:ue=0,ht=null,An(e,t,i,1);break;case 2:case 9:if(or(i)){ue=0,ht=null,Fd(t);break}t=function(){ue!==2&&ue!==9||he!==e||(ue=7),Ht(e)},i.then(t,t);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:or(i)?(ue=0,ht=null,Fd(t)):(ue=0,ht=null,An(e,t,i,7));break;case 5:var o=null;switch(W.tag){case 26:o=W.memoizedState;case 5:case 27:var c=W;if(o?Rf(o):c.stateNode.complete){ue=0,ht=null;var d=c.sibling;if(d!==null)W=d;else{var v=c.return;v!==null?(W=v,Li(v)):W=null}break t}}ue=0,ht=null,An(e,t,i,5);break;case 6:ue=0,ht=null,An(e,t,i,6);break;case 8:eu(),Me=6;break e;default:throw Error(r(462))}}dh();break}catch(j){$d(e,j)}while(!0);return Qt=Ha=null,T.H=n,T.A=l,le=a,W!==null?0:(he=null,I=0,Il(),Me)}function dh(){for(;W!==null&&!B0();)Wd(W)}function Wd(e){var t=bd(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Li(e):W=t}function Fd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hd(a,t,t.pendingProps,t.type,void 0,I);break;case 11:t=hd(a,t,t.pendingProps,t.type.render,t.ref,I);break;case 5:gs(t);default:Sd(a,t),t=W=Kc(t,ea),t=bd(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Li(e):W=t}function An(e,t,a,n){Qt=Ha=null,gs(t),yn=null,tl=0;var l=t.return;try{if(Pp(e,l,t,a,I)){Me=1,bi(e,bt(a,e.current)),W=null;return}}catch(i){if(l!==null)throw W=l,i;Me=1,bi(e,bt(a,e.current)),W=null;return}t.flags&32768?(te||n===1?e=!0:zn||(I&536870912)!==0?e=!1:(ya=e=!0,(n===2||n===9||n===3||n===6)&&(n=ft.current,n!==null&&n.tag===13&&(n.flags|=16384))),Id(t,e)):Li(t)}function Li(e){var t=e;do{if((t.flags&32768)!==0){Id(t,ya);return}e=t.return;var a=ah(t.alternate,t,ea);if(a!==null){W=a;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Me===0&&(Me=5)}function Id(e,t){do{var a=nh(e.alternate,e);if(a!==null){a.flags&=32767,W=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=a}while(e!==null);Me=6,W=null}function Pd(e,t,a,n,l,i,o,c,d){e.cancelPendingCommit=null;do Bi();while(ke!==0);if((le&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=Xo,Q0(e,a,i,o,c,d),e===he&&(W=he=null,I=0),En=t,ba=e,ta=a,Fs=i,Is=l,Gd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mh(Nl,function(){return lf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null,l=O.p,O.p=2,o=le,le|=4;try{lh(e,t,a)}finally{le=o,O.p=l,T.T=n}}ke=1,ef(),tf(),af()}}function ef(){if(ke===1){ke=0;var e=ba,t=En,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var n=O.p;O.p=2;var l=le;le|=4;try{Bd(t,e);var i=pu,o=qc(e.containerInfo),c=i.focusedElem,d=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&_c(c.ownerDocument.documentElement,c)){if(d!==null&&Ho(c)){var v=d.start,j=d.end;if(j===void 0&&(j=v),"selectionStart"in c)c.selectionStart=v,c.selectionEnd=Math.min(j,c.value.length);else{var E=c.ownerDocument||document,b=E&&E.defaultView||window;if(b.getSelection){var w=b.getSelection(),U=c.textContent.length,R=Math.min(d.start,U),pe=d.end===void 0?R:Math.min(d.end,U);!w.extend&&R>pe&&(o=pe,pe=R,R=o);var h=Hc(c,R),p=Hc(c,pe);if(h&&p&&(w.rangeCount!==1||w.anchorNode!==h.node||w.anchorOffset!==h.offset||w.focusNode!==p.node||w.focusOffset!==p.offset)){var x=E.createRange();x.setStart(h.node,h.offset),w.removeAllRanges(),R>pe?(w.addRange(x),w.extend(p.node,p.offset)):(x.setEnd(p.node,p.offset),w.addRange(x))}}}}for(E=[],w=c;w=w.parentNode;)w.nodeType===1&&E.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<E.length;c++){var z=E[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}$i=!!fu,pu=fu=null}finally{le=l,O.p=n,T.T=a}}e.current=t,ke=2}}function tf(){if(ke===2){ke=0;var e=ba,t=En,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var n=O.p;O.p=2;var l=le;le|=4;try{Dd(e,t.alternate,t)}finally{le=l,O.p=n,T.T=a}}ke=3}}function af(){if(ke===4||ke===3){ke=0,k0();var e=ba,t=En,a=ta,n=Gd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,En=ba=null,nf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(va=null),vo(a),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Rn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=T.T,l=O.p,O.p=2,T.T=null;try{for(var i=e.onRecoverableError,o=0;o<n.length;o++){var c=n[o];i(c.value,{componentStack:c.stack})}}finally{T.T=t,O.p=l}}(ta&3)!==0&&Bi(),Ht(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Ps?xl++:(xl=0,Ps=e):xl=0,vl(0)}}function nf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pn(t)))}function Bi(){return ef(),tf(),af(),lf()}function lf(){if(ke!==5)return!1;var e=ba,t=Fs;Fs=0;var a=vo(ta),n=T.T,l=O.p;try{O.p=32>a?32:a,T.T=null,a=Is,Is=null;var i=ba,o=ta;if(ke=0,En=ba=null,ta=0,(le&6)!==0)throw Error(r(331));var c=le;if(le|=4,_d(i.current),Nd(i,i.current,o,a),le=c,vl(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Rn,i)}catch{}return!0}finally{O.p=l,T.T=n,nf(e,t)}}function of(e,t,a){t=bt(a,t),t=Os(e.stateNode,t,2),e=pa(e,t,2),e!==null&&(_n(e,2),Ht(e))}function ce(e,t,a){if(e.tag===3)of(e,e,a);else for(;t!==null;){if(t.tag===3){of(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(va===null||!va.has(n))){e=bt(a,e),a=od(2),n=pa(t,a,2),n!==null&&(sd(a,n,t,e),_n(n,2),Ht(n));break}}t=t.return}}function au(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new sh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Js=!0,l.add(a),e=fh.bind(null,e,t,a),t.then(e,e))}function fh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,he===e&&(I&a)===a&&(Me===4||Me===3&&(I&62914560)===I&&300>st()-Ai?(le&2)===0&&Mn(e,0):Ks|=a,Tn===I&&(Tn=0)),Ht(e)}function sf(e,t){t===0&&(t=ec()),e=ka(e,t),e!==null&&(_n(e,t),Ht(e))}function ph(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sf(e,a)}function hh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(t),sf(e,a)}function mh(e,t){return mo(e,t)}var ki=null,Dn=null,nu=!1,Ni=!1,lu=!1,Sa=0;function Ht(e){e!==Dn&&e.next===null&&(Dn===null?ki=Dn=e:Dn=Dn.next=e),Ni=!0,nu||(nu=!0,yh())}function vl(e,t){if(!lu&&Ni){lu=!0;do for(var a=!1,n=ki;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var o=n.suspendedLanes,c=n.pingedLanes;i=(1<<31-ct(42|e)+1)-1,i&=l&~(o&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,df(n,i))}else i=I,i=ql(n,n===he?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Hn(n,i)||(a=!0,df(n,i));n=n.next}while(a);lu=!1}}function gh(){uf()}function uf(){Ni=nu=!1;var e=0;Sa!==0&&Mh()&&(e=Sa);for(var t=st(),a=null,n=ki;n!==null;){var l=n.next,i=cf(n,t);i===0?(n.next=null,a===null?ki=l:a.next=l,l===null&&(Dn=a)):(a=n,(e!==0||(i&3)!==0)&&(Ni=!0)),n=l}ke!==0&&ke!==5||vl(e),Sa!==0&&(Sa=0)}function cf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ct(i),c=1<<o,d=l[o];d===-1?((c&a)===0||(c&n)!==0)&&(l[o]=X0(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}if(t=he,a=I,a=ql(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&go(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&go(n),vo(a)){case 2:case 8:a=Iu;break;case 32:a=Nl;break;case 268435456:a=Pu;break;default:a=Nl}return n=rf.bind(null,e),a=mo(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&go(n),e.callbackPriority=2,e.callbackNode=null,2}function rf(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bi()&&e.callbackNode!==a)return null;var n=I;return n=ql(e,e===he?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Qd(e,n,t),cf(e,st()),e.callbackNode!=null&&e.callbackNode===a?rf.bind(null,e):null)}function df(e,t){if(Bi())return null;Qd(e,t,!0)}function yh(){Dh(function(){(le&6)!==0?mo(Fu,gh):uf()})}function iu(){if(Sa===0){var e=hn;e===0&&(e=Rl,Rl<<=1,(Rl&261888)===0&&(Rl=256)),Sa=e}return Sa}function ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ql(""+e)}function pf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=ff((l[et]||null).action),o=n.submitter;o&&(t=(t=o[et]||null)?ff(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var c=new Jl("action","action",null,n,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Sa!==0){var d=o?pf(l,o):new FormData(l);Ts(a,{pending:!0,data:d,method:l.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=o?pf(l,o):new FormData(l),Ts(a,{pending:!0,data:d,method:l.method,action:i},i,d))},currentTarget:l}]})}}for(var ou=0;ou<Go.length;ou++){var su=Go[ou],vh=su.toLowerCase(),bh=su[0].toUpperCase()+su.slice(1);Dt(vh,"on"+bh)}Dt(Xc,"onAnimationEnd"),Dt(Qc,"onAnimationIteration"),Dt(Vc,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Np,"onTransitionRun"),Dt(Rp,"onTransitionStart"),Dt(Hp,"onTransitionCancel"),Dt($c,"onTransitionEnd"),Pa("onMouseEnter",["mouseout","mouseover"]),Pa("onMouseLeave",["mouseout","mouseover"]),Pa("onPointerEnter",["pointerout","pointerover"]),Pa("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function hf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var c=n[o],d=c.instance,v=c.currentTarget;if(c=c.listener,d!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=v;try{i(l)}catch(j){Fl(j)}l.currentTarget=null,i=d}else for(o=0;o<n.length;o++){if(c=n[o],d=c.instance,v=c.currentTarget,c=c.listener,d!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=v;try{i(l)}catch(j){Fl(j)}l.currentTarget=null,i=d}}}}function F(e,t){var a=t[bo];a===void 0&&(a=t[bo]=new Set);var n=e+"__bubble";a.has(n)||(mf(t,e,2,!1),a.add(n))}function uu(e,t,a){var n=0;t&&(n|=4),mf(a,e,n,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function cu(e){if(!e[Ri]){e[Ri]=!0,sc.forEach(function(a){a!=="selectionchange"&&(wh.has(a)||uu(a,!1,e),uu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,uu("selectionchange",!1,t))}}function mf(e,t,a,n){switch(Qf(t)){case 2:var l=Kh;break;case 8:l=Wh;break;default:l=zu}a=l.bind(null,t,a,e),l=void 0,!Do||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ru(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var c=n.stateNode.containerInfo;if(c===l)break;if(o===4)for(o=n.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;c!==null;){if(o=Wa(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){n=i=o;continue e}c=c.parentNode}}n=n.return}vc(function(){var v=i,j=Mo(a),E=[];e:{var b=Zc.get(e);if(b!==void 0){var w=Jl,U=e;switch(e){case"keypress":if($l(a)===0)break e;case"keydown":case"keyup":w=hp;break;case"focusin":U="focus",w=Lo;break;case"focusout":U="blur",w=Lo;break;case"beforeblur":case"afterblur":w=Lo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=yp;break;case Xc:case Qc:case Vc:w=ip;break;case $c:w=vp;break;case"scroll":case"scrollend":w=ep;break;case"wheel":w=wp;break;case"copy":case"cut":case"paste":w=sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=zc;break;case"toggle":case"beforetoggle":w=jp}var R=(t&4)!==0,pe=!R&&(e==="scroll"||e==="scrollend"),h=R?b!==null?b+"Capture":null:b;R=[];for(var p=v,x;p!==null;){var z=p;if(x=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||x===null||h===null||(z=Gn(p,h),z!=null&&R.push(wl(p,z,x))),pe)break;p=p.return}0<R.length&&(b=new w(b,U,null,a,j),E.push({event:b,listeners:R}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",b&&a!==Eo&&(U=a.relatedTarget||a.fromElement)&&(Wa(U)||U[Ka]))break e;if((w||b)&&(b=j.window===j?j:(b=j.ownerDocument)?b.defaultView||b.parentWindow:window,w?(U=a.relatedTarget||a.toElement,w=v,U=U?Wa(U):null,U!==null&&(pe=S(U),R=U.tag,U!==pe||R!==5&&R!==27&&R!==6)&&(U=null)):(w=null,U=v),w!==U)){if(R=Sc,z="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(R=zc,z="onPointerLeave",h="onPointerEnter",p="pointer"),pe=w==null?b:Yn(w),x=U==null?b:Yn(U),b=new R(z,p+"leave",w,a,j),b.target=pe,b.relatedTarget=x,z=null,Wa(j)===v&&(R=new R(h,p+"enter",U,a,j),R.target=x,R.relatedTarget=pe,z=R),pe=z,w&&U)t:{for(R=Sh,h=w,p=U,x=0,z=h;z;z=R(z))x++;z=0;for(var k=p;k;k=R(k))z++;for(;0<x-z;)h=R(h),x--;for(;0<z-x;)p=R(p),z--;for(;x--;){if(h===p||p!==null&&h===p.alternate){R=h;break t}h=R(h),p=R(p)}R=null}else R=null;w!==null&&gf(E,b,w,R,!1),U!==null&&pe!==null&&gf(E,pe,U,R,!0)}}e:{if(b=v?Yn(v):window,w=b.nodeName&&b.nodeName.toLowerCase(),w==="select"||w==="input"&&b.type==="file")var ae=Uc;else if(Cc(b))if(Lc)ae=Lp;else{ae=Op;var L=Cp}else w=b.nodeName,!w||w.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?v&&To(v.elementType)&&(ae=Uc):ae=Up;if(ae&&(ae=ae(e,v))){Oc(E,ae,a,j);break e}L&&L(e,b,v),e==="focusout"&&v&&b.type==="number"&&v.memoizedProps.value!=null&&zo(b,"number",b.value)}switch(L=v?Yn(v):window,e){case"focusin":(Cc(L)||L.contentEditable==="true")&&(on=L,_o=v,Wn=null);break;case"focusout":Wn=_o=on=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,Yc(E,a,j);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":Yc(E,a,j)}var $;if(ko)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ln?Ac(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(Tc&&a.locale!=="ko"&&(ln||P!=="onCompositionStart"?P==="onCompositionEnd"&&ln&&($=bc()):(oa=j,Co="value"in oa?oa.value:oa.textContent,ln=!0)),L=Hi(v,P),0<L.length&&(P=new jc(P,e,null,a,j),E.push({event:P,listeners:L}),$?P.data=$:($=Dc(a),$!==null&&(P.data=$)))),($=Tp?Ep(e,a):Mp(e,a))&&(P=Hi(v,"onBeforeInput"),0<P.length&&(L=new jc("onBeforeInput","beforeinput",null,a,j),E.push({event:L,listeners:P}),L.data=$)),xh(E,e,v,a,j)}hf(E,t)})}function wl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hi(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Gn(e,a),l!=null&&n.unshift(wl(e,l,i)),l=Gn(e,t),l!=null&&n.push(wl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Sh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gf(e,t,a,n,l){for(var i=t._reactName,o=[];a!==null&&a!==n;){var c=a,d=c.alternate,v=c.stateNode;if(c=c.tag,d!==null&&d===n)break;c!==5&&c!==26&&c!==27||v===null||(d=v,l?(v=Gn(a,i),v!=null&&o.unshift(wl(a,v,d))):l||(v=Gn(a,i),v!=null&&o.push(wl(a,v,d)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var jh=/\r\n?/g,zh=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(jh,`
`).replace(zh,"")}function xf(e,t){return t=yf(t),yf(e)===t}function fe(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||tn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&tn(e,""+n);break;case"className":Gl(e,"class",n);break;case"tabIndex":Gl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(e,a,n);break;case"style":yc(e,n,i);break;case"data":if(t!=="object"){Gl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ql(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&fe(e,t,"name",l.name,l,null),fe(e,t,"formEncType",l.formEncType,l,null),fe(e,t,"formMethod",l.formMethod,l,null),fe(e,t,"formTarget",l.formTarget,l,null)):(fe(e,t,"encType",l.encType,l,null),fe(e,t,"method",l.method,l,null),fe(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ql(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=qt);break;case"onScroll":n!=null&&F("scroll",e);break;case"onScrollEnd":n!=null&&F("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ql(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":F("beforetoggle",e),F("toggle",e),Yl(e,"popover",n);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Yl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=I0.get(a)||a,Yl(e,a,n))}}function du(e,t,a,n,l,i){switch(a){case"style":yc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof n=="string"?tn(e,n):(typeof n=="number"||typeof n=="bigint")&&tn(e,""+n);break;case"onScroll":n!=null&&F("scroll",e);break;case"onScrollEnd":n!=null&&F("scrollend",e);break;case"onClick":n!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[et]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Yl(e,a,n)}}}function Ve(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",e),F("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:fe(e,t,i,o,a,null)}}l&&fe(e,t,"srcSet",a.srcSet,a,null),n&&fe(e,t,"src",a.src,a,null);return;case"input":F("invalid",e);var c=i=o=l=null,d=null,v=null;for(n in a)if(a.hasOwnProperty(n)){var j=a[n];if(j!=null)switch(n){case"name":l=j;break;case"type":o=j;break;case"checked":d=j;break;case"defaultChecked":v=j;break;case"value":i=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,t));break;default:fe(e,t,n,j,a,null)}}pc(e,i,c,d,v,o,l,!1);return;case"select":F("invalid",e),n=o=i=null;for(l in a)if(a.hasOwnProperty(l)&&(c=a[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":o=c;break;case"multiple":n=c;default:fe(e,t,l,c,a,null)}t=i,a=o,e.multiple=!!n,t!=null?en(e,!!n,t,!1):a!=null&&en(e,!!n,a,!0);return;case"textarea":F("invalid",e),i=l=n=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":n=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:fe(e,t,o,c,a,null)}mc(e,n,l,i);return;case"option":for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null)&&(d==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":fe(e,t,d,n,a,null));return;case"dialog":F("beforetoggle",e),F("toggle",e),F("cancel",e),F("close",e);break;case"iframe":case"object":F("load",e);break;case"video":case"audio":for(n=0;n<bl.length;n++)F(bl[n],e);break;case"image":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"embed":case"source":case"link":F("error",e),F("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:fe(e,t,v,n,a,null)}return;default:if(To(t)){for(j in a)a.hasOwnProperty(j)&&(n=a[j],n!==void 0&&du(e,t,j,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&fe(e,t,c,n,a,null))}function Th(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,c=null,d=null,v=null,j=null;for(w in a){var E=a[w];if(a.hasOwnProperty(w)&&E!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":d=E;default:n.hasOwnProperty(w)||fe(e,t,w,null,n,E)}}for(var b in n){var w=n[b];if(E=a[b],n.hasOwnProperty(b)&&(w!=null||E!=null))switch(b){case"type":i=w;break;case"name":l=w;break;case"checked":v=w;break;case"defaultChecked":j=w;break;case"value":o=w;break;case"defaultValue":c=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,t));break;default:w!==E&&fe(e,t,b,w,n,E)}}jo(e,o,c,d,v,j,i,l);return;case"select":w=o=c=b=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":w=d;default:n.hasOwnProperty(i)||fe(e,t,i,null,n,d)}for(l in n)if(i=n[l],d=a[l],n.hasOwnProperty(l)&&(i!=null||d!=null))switch(l){case"value":b=i;break;case"defaultValue":c=i;break;case"multiple":o=i;default:i!==d&&fe(e,t,l,i,n,d)}t=c,a=o,n=w,b!=null?en(e,!!a,b,!1):!!n!=!!a&&(t!=null?en(e,!!a,t,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":w=b=null;for(c in a)if(l=a[c],a.hasOwnProperty(c)&&l!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:fe(e,t,c,null,n,l)}for(o in n)if(l=n[o],i=a[o],n.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":b=l;break;case"defaultValue":w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==i&&fe(e,t,o,l,n,i)}hc(e,b,w);return;case"option":for(var U in a)b=a[U],a.hasOwnProperty(U)&&b!=null&&!n.hasOwnProperty(U)&&(U==="selected"?e.selected=!1:fe(e,t,U,null,n,b));for(d in n)b=n[d],w=a[d],n.hasOwnProperty(d)&&b!==w&&(b!=null||w!=null)&&(d==="selected"?e.selected=b&&typeof b!="function"&&typeof b!="symbol":fe(e,t,d,b,n,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in a)b=a[R],a.hasOwnProperty(R)&&b!=null&&!n.hasOwnProperty(R)&&fe(e,t,R,null,n,b);for(v in n)if(b=n[v],w=a[v],n.hasOwnProperty(v)&&b!==w&&(b!=null||w!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(137,t));break;default:fe(e,t,v,b,n,w)}return;default:if(To(t)){for(var pe in a)b=a[pe],a.hasOwnProperty(pe)&&b!==void 0&&!n.hasOwnProperty(pe)&&du(e,t,pe,void 0,n,b);for(j in n)b=n[j],w=a[j],!n.hasOwnProperty(j)||b===w||b===void 0&&w===void 0||du(e,t,j,b,n,w);return}}for(var h in a)b=a[h],a.hasOwnProperty(h)&&b!=null&&!n.hasOwnProperty(h)&&fe(e,t,h,null,n,b);for(E in n)b=n[E],w=a[E],!n.hasOwnProperty(E)||b===w||b==null&&w==null||fe(e,t,E,b,n,w)}function vf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,o=l.initiatorType,c=l.duration;if(i&&c&&vf(o)){for(o=0,c=l.responseEnd,n+=1;n<a.length;n++){var d=a[n],v=d.startTime;if(v>c)break;var j=d.transferSize,E=d.initiatorType;j&&vf(E)&&(d=d.responseEnd,o+=j*(d<c?1:(c-v)/(d-v)))}if(--n,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fu=null,pu=null;function _i(e){return e.nodeType===9?e:e.ownerDocument}function bf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=null;function Mh(){var e=window.event;return e&&e.type==="popstate"?e===mu?!1:(mu=e,!0):(mu=null,!1)}var Sf=typeof setTimeout=="function"?setTimeout:void 0,Ah=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Dh=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Ch)}:Sf;function Ch(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function zf(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Ln(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Sl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sl(a);for(var i=a.firstChild;i;){var o=i.nextSibling,c=i.nodeName;i[qn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&Sl(e.ownerDocument.body);a=l}while(a);Ln(t)}function Tf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function gu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gu(a),wo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Oh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Uh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function Ef(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function yu(e){return e.data==="$?"||e.data==="$~"}function xu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vu=null;function Mf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Df(e,t,a){switch(t=_i(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Sl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wo(e)}var Et=new Map,Cf=new Set;function qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=O.d;O.d={f:Bh,r:kh,D:Nh,C:Rh,L:Hh,m:_h,X:Yh,S:qh,M:Gh};function Bh(){var e=aa.f(),t=Oi();return e||t}function kh(e){var t=Fa(e);t!==null&&t.tag===5&&t.type==="form"?$r(t):aa.r(e)}var Cn=typeof document>"u"?null:document;function Of(e,t,a){var n=Cn;if(n&&typeof t=="string"&&t){var l=xt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Cf.has(l)||(Cf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Ve(t,"link",e),_e(t),n.head.appendChild(t)))}}function Nh(e){aa.D(e),Of("dns-prefetch",e,null)}function Rh(e,t){aa.C(e,t),Of("preconnect",e,t)}function Hh(e,t,a){aa.L(e,t,a);var n=Cn;if(n&&e&&t){var l='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+xt(a.imageSizes)+'"]')):l+='[href="'+xt(e)+'"]';var i=l;switch(t){case"style":i=On(e);break;case"script":i=Un(e)}Et.has(i)||(e=C({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Et.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(jl(i))||t==="script"&&n.querySelector(zl(i))||(t=n.createElement("link"),Ve(t,"link",e),_e(t),n.head.appendChild(t)))}}function _h(e,t){aa.m(e,t);var a=Cn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+xt(n)+'"][href="'+xt(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Un(e)}if(!Et.has(i)&&(e=C({rel:"modulepreload",href:e},t),Et.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zl(i)))return}n=a.createElement("link"),Ve(n,"link",e),_e(n),a.head.appendChild(n)}}}function qh(e,t,a){aa.S(e,t,a);var n=Cn;if(n&&e){var l=Ia(n).hoistableStyles,i=On(e);t=t||"default";var o=l.get(i);if(!o){var c={loading:0,preload:null};if(o=n.querySelector(jl(i)))c.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Et.get(i))&&bu(e,a);var d=o=n.createElement("link");_e(d),Ve(d,"link",e),d._p=new Promise(function(v,j){d.onload=v,d.onerror=j}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Yi(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:c},l.set(i,o)}}}function Yh(e,t){aa.X(e,t);var a=Cn;if(a&&e){var n=Ia(a).hoistableScripts,l=Un(e),i=n.get(l);i||(i=a.querySelector(zl(l)),i||(e=C({src:e,async:!0},t),(t=Et.get(l))&&wu(e,t),i=a.createElement("script"),_e(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Gh(e,t){aa.M(e,t);var a=Cn;if(a&&e){var n=Ia(a).hoistableScripts,l=Un(e),i=n.get(l);i||(i=a.querySelector(zl(l)),i||(e=C({src:e,async:!0,type:"module"},t),(t=Et.get(l))&&wu(e,t),i=a.createElement("script"),_e(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Uf(e,t,a,n){var l=(l=na.current)?qi(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=On(a.href),a=Ia(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=On(a.href);var i=Ia(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(jl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Et.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Et.set(e,a),i||Xh(l,e,a,o.state))),t&&n===null)throw Error(r(528,""));return o}if(t&&n!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Un(a),a=Ia(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function On(e){return'href="'+xt(e)+'"'}function jl(e){return'link[rel="stylesheet"]['+e+"]"}function Lf(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Xh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ve(t,"link",a),_e(t),e.head.appendChild(t))}function Un(e){return'[src="'+xt(e)+'"]'}function zl(e){return"script[async]"+e}function Bf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(n)return t.instance=n,_e(n),n;var l=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),_e(n),Ve(n,"style",l),Yi(n,a.precedence,e),t.instance=n;case"stylesheet":l=On(a.href);var i=e.querySelector(jl(l));if(i)return t.state.loading|=4,t.instance=i,_e(i),i;n=Lf(a),(l=Et.get(l))&&bu(n,l),i=(e.ownerDocument||e).createElement("link"),_e(i);var o=i;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Ve(i,"link",n),t.state.loading|=4,Yi(i,a.precedence,e),t.instance=i;case"script":return i=Un(a.src),(l=e.querySelector(zl(i)))?(t.instance=l,_e(l),l):(n=a,(l=Et.get(i))&&(n=C({},a),wu(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),_e(l),Ve(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Yi(n,a.precedence,e));return t.instance}function Yi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,o=0;o<n.length;o++){var c=n[o];if(c.dataset.precedence===t)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function kf(e,t,a){if(Gi===null){var n=new Map,l=Gi=new Map;l.set(a,n)}else l=Gi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[qn]||i[Ye]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var c=n.get(o);c?c.push(i):n.set(o,[i])}}return n}function Nf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Qh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=On(n.href),i=t.querySelector(jl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,_e(i);return}i=t.ownerDocument||t,n=Lf(n),(l=Et.get(l))&&bu(n,l),i=i.createElement("link"),_e(i);var o=i;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Ve(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Su=0;function $h(e,t){return e.stylesheets&&e.count===0&&Vi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Su===0&&(Su=62500*Eh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Su?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qi=null;function Vi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qi=new Map,t.forEach(Zh,e),Qi=null,Xi.call(e))}function Zh(e,t){if(!(t.state.loading&4)){var a=Qi.get(e);if(a)var n=a.get(null);else{a=new Map,Qi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}l=t.instance,o=l.getAttribute("data-precedence"),i=a.get(o)||n,i===n&&a.set(null,l),a.set(o,l),this.count++,n=Xi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Tl={$$typeof:we,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Jh(e,t,a,n,l,i,o,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.hiddenUpdates=yo(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Hf(e,t,a,n,l,i,o,c,d,v,j,E){return e=new Jh(e,t,a,o,d,v,j,E,c),t=1,i===!0&&(t|=24),i=dt(3,null,null,t),e.current=i,i.stateNode=e,t=ts(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},is(i),e}function _f(e){return e?(e=cn,e):cn}function qf(e,t,a,n,l,i){l=_f(l),n.context===null?n.context=l:n.pendingContext=l,n=fa(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=pa(e,n,t),a!==null&&(ot(a,e,t),nl(a,e,t))}function Yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ju(e,t){Yf(e,t),(e=e.alternate)&&Yf(e,t)}function Gf(e){if(e.tag===13||e.tag===31){var t=ka(e,67108864);t!==null&&ot(t,e,67108864),ju(e,67108864)}}function Xf(e){if(e.tag===13||e.tag===31){var t=gt();t=xo(t);var a=ka(e,t);a!==null&&ot(a,e,t),ju(e,t)}}var $i=!0;function Kh(e,t,a,n){var l=T.T;T.T=null;var i=O.p;try{O.p=2,zu(e,t,a,n)}finally{O.p=i,T.T=l}}function Wh(e,t,a,n){var l=T.T;T.T=null;var i=O.p;try{O.p=8,zu(e,t,a,n)}finally{O.p=i,T.T=l}}function zu(e,t,a,n){if($i){var l=Tu(n);if(l===null)ru(e,t,n,Zi,a),Vf(e,n);else if(Ih(l,e,t,a,n))n.stopPropagation();else if(Vf(e,n),t&4&&-1<Fh.indexOf(e)){for(;l!==null;){var i=Fa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ca(i.pendingLanes);if(o!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-ct(o);c.entanglements[1]|=d,o&=~d}Ht(i),(le&6)===0&&(Di=st()+500,vl(0))}}break;case 31:case 13:c=ka(i,2),c!==null&&ot(c,i,2),Oi(),ju(i,2)}if(i=Tu(n),i===null&&ru(e,t,n,Zi,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else ru(e,t,n,null,a)}}function Tu(e){return e=Mo(e),Eu(e)}var Zi=null;function Eu(e){if(Zi=null,e=Wa(e),e!==null){var t=S(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=M(t),e!==null)return e;e=null}else if(a===31){if(e=Y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Qf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(N0()){case Fu:return 2;case Iu:return 8;case Nl:case R0:return 32;case Pu:return 268435456;default:return 32}default:return 32}}var Mu=!1,za=null,Ta=null,Ea=null,El=new Map,Ml=new Map,Ma=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vf(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":El.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(t.pointerId)}}function Al(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Fa(t),t!==null&&Gf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ih(e,t,a,n,l){switch(t){case"focusin":return za=Al(za,e,t,a,n,l),!0;case"dragenter":return Ta=Al(Ta,e,t,a,n,l),!0;case"mouseover":return Ea=Al(Ea,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return El.set(i,Al(El.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,Ml.set(i,Al(Ml.get(i)||null,e,t,a,n,l)),!0}return!1}function $f(e){var t=Wa(e.target);if(t!==null){var a=S(t);if(a!==null){if(t=a.tag,t===13){if(t=M(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Xf(a)});return}}else if(t===31){if(t=Y(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Xf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Tu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Eo=n,a.target.dispatchEvent(n),Eo=null}else return t=Fa(a),t!==null&&Gf(t),e.blockedOn=a,!1;t.shift()}return!0}function Zf(e,t,a){Ji(e)&&a.delete(t)}function Ph(){Mu=!1,za!==null&&Ji(za)&&(za=null),Ta!==null&&Ji(Ta)&&(Ta=null),Ea!==null&&Ji(Ea)&&(Ea=null),El.forEach(Zf),Ml.forEach(Zf)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,Mu||(Mu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Ph)))}var Wi=null;function Jf(e){Wi!==e&&(Wi=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Wi===e&&(Wi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Eu(n||a)===null)continue;break}var i=Fa(a);i!==null&&(e.splice(t,3),t-=3,Ts(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Ln(e){function t(d){return Ki(d,e)}za!==null&&Ki(za,e),Ta!==null&&Ki(Ta,e),Ea!==null&&Ki(Ea,e),El.forEach(t),Ml.forEach(t);for(var a=0;a<Ma.length;a++){var n=Ma[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)$f(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],o=l[et]||null;if(typeof i=="function")o||Jf(a);else if(o){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[et]||null)c=o.formAction;else if(Eu(l)!==null)continue}else c=o.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),Jf(a)}}}function Kf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Au(e){this._internalRoot=e}Fi.prototype.render=Au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,n=gt();qf(a,n,e,t,null,null)},Fi.prototype.unmount=Au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qf(e.current,2,null,e,null,null),Oi(),t[Ka]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&$f(e)}};var Wf=m.version;if(Wf!=="19.2.4")throw Error(r(527,Wf,"19.2.4"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=B(t),e=e!==null?V(e):null,e=e===null?null:e.stateNode,e};var em={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Rn=Ii.inject(em),ut=Ii}catch{}}return Cl.createRoot=function(e,t){if(!y(e))throw Error(r(299));var a=!1,n="",l=ad,i=nd,o=ld;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Hf(e,1,!1,null,null,a,n,null,l,i,o,Kf),e[Ka]=t.current,cu(e),new Au(t)},Cl.hydrateRoot=function(e,t,a){if(!y(e))throw Error(r(299));var n=!1,l="",i=ad,o=nd,c=ld,d=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=Hf(e,1,!0,t,a??null,n,l,d,i,o,c,Kf),t.context=_f(null),a=t.current,n=gt(),n=xo(n),l=fa(n),l.callback=null,pa(a,l,n),a=n,t.current.lanes=a,_n(t,a),Ht(t),e[Ka]=t.current,cu(e),new Fi(t)},Cl.version="19.2.4",Cl}var n0;function gm(){if(n0)return Cu.exports;n0=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(m){console.error(m)}}return u(),Cu.exports=mm(),Cu.exports}var ym=gm();const xm={value:0},z0=w0({name:"app",initialState:xm,reducers:{increment:u=>{u.value+=1},decrement:u=>{u.value-=1},setValue:(u,m)=>{u.value=m.payload}}}),{increment:qx,decrement:Yx,setValue:Gx}=z0.actions,vm=z0.reducer,bm={logoAlt:"Margg",links:[{label:"Home",href:"#home",primary:!0},{label:"Our Products",href:"#products"},{label:"Contact Us",href:"#contact-us"}]},wm={titleLine1:"BRING OUT YOUR",titleLine2:"BEST POTENTIAL",description:"Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry",inputPlaceholder:"Enter Email",inputButtonText:"Join the waitlist",tiles:{autoCycleIntervalMs:3e3,defaultTileId:1,row1:[{id:1,ariaLabel:"Frontend Developer",title:"Frontend Developer",description:"Build modern UI with React, component systems, and responsive layouts.",icon:"ScrollIcon"},{id:2,ariaLabel:"Programming Essentials",title:"Programming Essentials",description:"Learn core concepts, clean code, and problem-solving techniques.",icon:"MessageProgrammingIcon"},{id:3,ariaLabel:"UI Design Fundamentals",title:"UI Design Fundamentals",description:"Design trends, spacing systems, and accessible UI patterns.",icon:"PenToolIcon"}],row2:[{id:4,ariaLabel:"Backend Development",title:"Backend Development",description:"Server-side logic, APIs, and database management.",icon:"DriverIcon"},{id:5,ariaLabel:"Database Design",title:"Database Design",description:"Data modeling, SQL, and database optimization.",icon:"FavoriteChartIcon"},{id:6,ariaLabel:"Cloud & DevOps",title:"Cloud & DevOps",description:"Deploy apps, understand environments, and ship confidently.",icon:"CloudConnectionIcon"},{id:7,ariaLabel:"Testing & QA",title:"Testing & QA",description:"Write quality tests and ensure reliable applications.",icon:"LockIcon"}],row3:[{id:8,ariaLabel:"Security",title:"Security",description:"Learn safe patterns, auth basics, and secure-by-default UI.",icon:"MessageProgrammingIcon"},{id:9,ariaLabel:"Algorithms",title:"Algorithms",description:"Problem-solving patterns and data structures.",icon:"PenToolIcon"},{id:10,ariaLabel:"System Design",title:"System Design",description:"Architecture, scalability, and distributed systems.",icon:"FavoriteChartIcon"},{id:11,ariaLabel:"Performance",title:"Performance",description:"Optimize load times, rendering, and user experience.",icon:"DriverIcon"}]}},Sm={waitList:!0,stats:[{value:"43+",label:`University
Partners`},{value:"12K+",label:`Students
Enrolled`},{value:"35",label:`Outstanding
Mentors`},{value:"7.5K",label:`Student
Placements`}]},jm={titleLine1:"SUPERCHARGE",titleLine2:"YOUR LEARNING POTENTIAL WITH OUR APP",description:"Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away"},zm={title:"JOIN WAITLIST",subtitle:"First step towards your dream career",inputPlaceholder:"Enter Email",buttonText:"Notify Me"},Tm=["Frontend Development","Backend Development","Programming Essentials","UI Design Fundamentals","Database Design","Cloud & DevOps","Testing & QA","Security","Algorithms","System Design","Performance","React","Node.js","Python","Java","Data Structures","Machine Learning","Mobile Development"],Em={submissionMode:"sheets",baseUrl:"https://api.margg.xyz/service-core",endpoints:{waitlist:"/general/user-contacts/waitlist",learner:"/general/user-contacts",instructor:"/general/instructor-enquiries",partner:"/general/organisation-enquiries"},googleSheets:{scriptUrl:"https://script.google.com/macros/s/AKfycbwmmOYKHVpfZEcqWhhAlNr6G7726uUj9WT4cua0i8sSMDQrQbWoBK2jj0Pc1FpRNfuB1g/exec"},emailjs:{notifyEmail:"margglive@gmail.com",accounts:{account1:{serviceId:"service_uwxllg6",publicKey:"sS9pUpAdxxLri3bjO"},account2:{serviceId:"service_oq3tfkg",publicKey:"r9cx6ICX3cdQFxZC9"}},templates:{waitlist:{templateId:"template_ob8hs05",account:"account1"},learner:{templateId:"template_n8yn8zn",account:"account1"},instructor:{templateId:"template_a5ox0x9",account:"account2"},partner:{templateId:"template_qxq0lla",account:"account2"}}}},Mm={contactTitle:"GET IN TOUCH WITH US",location:"Bangalore | Tirupati",phone:"+91 9000250097",email:"margglive@gmail.com",tagline:"Curated routes for curious minds",companyName:"Margg Private Limited",logoAlt:"Margg Logo",socialLinks:[{name:"YouTube",icon:"YoutubeIcon",url:"https://www.youtube.com/@MarggLive"},{name:"Instagram",icon:"InstagramIcon",url:"https://instagram.com/margglive"},{name:"X (Twitter)",icon:"TwitterIcon",url:"https://x.com/MarggLive"},{name:"Discord",icon:"DiscordIcon",url:"https://discord.gg/PDzhNUnB"}]},Am={roadmap:{title:"Roadmap Based Learning"},community:{title:"Community"},focusTimer:{title:"Focus Timer"},interviewPrep:{title:"Interview Prep Materials"},jobBoard:{title:"Job Board"},mentorship:{title:"One-on-One Mentorship"},projects:{title:"Projects"},resume:{title:"Resume Builder"},skills:{title:"Skills Assessment"},streaks:{title:"Streaks"},certifications:{title:"Certifications"}},Dm={title:"Margg – Roadmap Based Courses & Best LMS Platform in South India | Gagan's Application",description:"Margg is the best LMS application in South India offering roadmap based courses, structured learning paths, one-on-one mentorship, interview prep, resume building, certifications & career placement support for college students. Built by Gagan — curated routes for curious minds.",keywords:"roadmap based courses, best LMS application in south india, Gagan's application, Margg, LMS for college students, learning management system India, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development, structured learning paths, best online courses India, South India LMS, Bangalore LMS, Tirupati education platform, curated learning roadmaps, coding bootcamp India, one-on-one mentorship India, resume builder for students, job placement LMS, streaks based learning, certification courses India, Margg Private Limited, MarggLive, best e-learning platform India",author:"Margg Private Limited",robots:"index, follow",locale:"en_IN",url:"https://margg.in",ogImage:"https://margg.in/og-cover.png",twitterHandle:"@MarggLive",themeColor:"#090215",foundingYear:"2023",appCategory:"EducationApplication"},Cm={navbar:bm,hero:wm,analytics:Sm,supercharge:jm,joinWaitlist:zm,courses:Tm,api:Em,footer:Mm,blocks:Am,seo:Dm},T0=w0({name:"content",initialState:{data:Cm,status:"idle",source:"fallback"},reducers:{contentLoading(u){u.status="loading"},contentSucceeded(u,m){u.data=m.payload.data,u.status="succeeded",u.source=m.payload.source},contentFailed(u){u.status="failed",u.source="fallback"}}}),{contentLoading:Xx,contentSucceeded:Qx,contentFailed:Vx}=T0.actions,Om=T0.reducer,Um=u=>u.content.data,Lm="/assets/Margg-CT4M_ONj.webp",Bn="1920px",l0={mobile:"1000px",tablet:"1200px"},ie={mobile:`@media (max-width: ${l0.mobile})`,tablet:`@media (max-width: ${l0.tablet})`},q={heading:'"Bebas Neue", sans-serif',body:'"Inter", sans-serif'};function $e(u){const m=nm(Um);return u?m[u]??{}:m}re`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;const Bm=re`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`,km=f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  isolation: isolate;
  display: flex;
  justify-content: center;
  padding-top: 36px;
  transform: translateY(${u=>u.$hidden?"-100%":"0"});
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
`,Nm=f.nav`
  display: flex;
  width: 85%;
  max-width: ${Bn};
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
`,Rm=f.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,Hm=f.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;f.div`
  display: flex;
  align-items: flex-start;
`;const _m=f.img`
  width: 132.156px;
  height: 40.141px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
  }
`;f.img`
  width: 38.699px;
  height: 27.483px;
  flex-shrink: 0;
`;f.img`
  width: 79.181px;
  height: 5.559px;
  flex-shrink: 0;
`;const qm=f.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`,Ym=f.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`,Gm=f.a`
  color: white;
  font-family: ${q.body};
  font-size: 16px;
  font-weight: ${u=>u.$active||u.$primary?"600":"300"};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${u=>u.$active||u.$primary?"1":"0.5"};
  position: relative;

  ${u=>u.$active&&Te`
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
`,Xm=f.button`
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
`,Lu=f.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${u=>u.$open?"50%":"0"};
    transform: ${u=>u.$open?"translateY(-50%) rotate(45deg)":"none"};
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${u=>u.$open?0:1};
  }
  &:nth-child(3) {
    bottom: ${u=>u.$open?"auto":"0"};
    top: ${u=>u.$open?"50%":"auto"};
    transform: ${u=>u.$open?"translateY(-50%) rotate(-45deg)":"none"};
  }
`,Qm=f.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 49;
    background: rgba(9, 2, 21, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${u=>u.$open?1:0};
    pointer-events: ${u=>u.$open?"auto":"none"};
    transition: opacity 0.3s ease;
  }
`,Vm=f.div`
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
    transform: translateX(${u=>u.$open?"0":"100%"});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`,$m=f.button`
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
`,Zm=f.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Jm=f.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${q.body};
  font-size: 18px;
  font-weight: ${u=>u.$active||u.$primary?"600":"400"};
  color: #fff;
  opacity: ${u=>u.$active||u.$primary?1:.7};
  transition: all 0.2s ease;
  background: ${u=>u.$active?"rgba(80, 19, 192, 0.2)":u.$primary?"rgba(80, 19, 192, 0.15)":"transparent"};
  ${u=>u.$active&&Te`
      border-left: 3px solid #b095e3;
    `};

  ${u=>u.$show&&Te`
      animation: ${Bm} 0.4s ease forwards;
      animation-delay: ${u.$delay||"0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`,Km=f.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`,Wm=f.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`,i0={Home:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Roadmaps:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Our Products":s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Contact Us":s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},Fm=["home","products","contact-us"],Gu=()=>{const{logoAlt:u,links:m}=$e("navbar"),[g,r]=D.useState(!1),[y,S]=D.useState(!1),[M,Y]=D.useState("home"),H=D.useRef(null),B=D.useRef(0),V=S0(),C=sm();D.useEffect(()=>{const _=()=>{const J=window.scrollY;J<80?S(!1):J-B.current>10?S(!0):B.current-J>10&&S(!1),B.current=J};return window.addEventListener("scroll",_,{passive:!0}),()=>window.removeEventListener("scroll",_)},[]),D.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),D.useEffect(()=>{const N=_=>{_.key==="Escape"&&r(!1)};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[]),D.useEffect(()=>{C.hash||window.scrollTo({top:0,behavior:"instant"})},[C.pathname,C.hash]),D.useEffect(()=>{if(C.pathname!=="/")return;const N=new IntersectionObserver(J=>{const me=J.filter(we=>we.isIntersecting).sort((we,Ze)=>Ze.intersectionRatio-we.intersectionRatio);me.length>0&&Y(me[0].target.id)},{rootMargin:"-20% 0px -50% 0px",threshold:[0,.25,.5]}),_=setTimeout(()=>{Fm.forEach(J=>{const me=document.getElementById(J);me&&N.observe(me)})},200);return()=>{clearTimeout(_),N.disconnect()}},[C.pathname]);const ee=D.useCallback(N=>{const _=C.pathname;return N==="/roadmaps"?_==="/roadmaps"||_.startsWith("/roadmap/"):_==="/"&&N.startsWith("#")?M===N.slice(1):!1},[C.pathname,M]),je=D.useCallback(()=>{C.pathname==="/"?window.scrollTo({top:0,behavior:"smooth"}):(V("/"),setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),100))},[V,C.pathname]),ge=D.useCallback(N=>{const _=N.currentTarget.getAttribute("href");_?.startsWith("#")?(N.preventDefault(),r(!1),C.pathname!=="/"?(V("/"),setTimeout(()=>{const J=document.getElementById(_.slice(1));if(J){const we=J.getBoundingClientRect().top+window.scrollY-72;window.scrollTo({top:we,behavior:"smooth"})}},300)):setTimeout(()=>{const J=document.getElementById(_.slice(1));if(J){const me=document.querySelector("nav")?.offsetHeight||72,we=J.getBoundingClientRect().top+window.scrollY-me;window.scrollTo({top:we,behavior:"smooth"})}},100)):_?.startsWith("/")&&(N.preventDefault(),r(!1),V(_))},[V,C.pathname]);return s.jsxs(s.Fragment,{children:[s.jsx(km,{$hidden:y&&!g,children:s.jsx(Nm,{"aria-label":"Main navigation",children:s.jsxs(Rm,{children:[s.jsx(Hm,{onClick:je,style:{cursor:"pointer"},children:s.jsx(_m,{src:Lm,alt:u,loading:"eager",fetchPriority:"high"})}),s.jsx(qm,{children:s.jsx(Ym,{children:m.map(N=>s.jsx(Gm,{href:N.href,$primary:N.primary?!0:void 0,$active:ee(N.href),onClick:ge,children:N.label},N.label))})}),s.jsxs(Xm,{onClick:()=>r(N=>!N),"aria-label":g?"Close menu":"Open menu","aria-expanded":g,children:[s.jsx(Lu,{$open:g}),s.jsx(Lu,{$open:g}),s.jsx(Lu,{$open:g})]})]})})}),s.jsx(Qm,{$open:g,onClick:()=>r(!1)}),s.jsxs(Vm,{$open:g,ref:H,children:[s.jsx($m,{onClick:()=>r(!1),"aria-label":"Close menu",children:s.jsx("svg",{viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M12 4L4 12M4 4l8 8",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round"})})}),s.jsx(Zm,{children:m.map((N,_)=>s.jsxs(Jm,{href:N.href,$primary:N.primary,$active:ee(N.href),$show:g,$delay:`${.1+_*.07}s`,onClick:ge,children:[s.jsx(Km,{children:i0[N.label]||i0.Home}),N.label]},N.label))}),s.jsx(Wm,{})]})]})};function Im({color:u="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{x:"10",y:"12",width:"44",height:"40",rx:"10",fill:u,opacity:"0.25"}),s.jsx("rect",{x:"18",y:"20",width:"28",height:"24",rx:"8",fill:u,opacity:"0.35"}),s.jsx("path",{d:"M26 36L32 30L38 36",stroke:u,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"})]})}function Pm({color:u="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z",fill:u,opacity:"0.25"}),s.jsx("path",{d:"M26 24L20 30L26 36",stroke:u,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),s.jsx("path",{d:"M38 24L44 30L38 36",stroke:u,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),s.jsx("path",{d:"M34 22L30 38",stroke:u,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})]})}function e1({color:u="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M20 44L44 20",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M18 46L22 42L26 46L22 50L18 46Z",fill:u,opacity:"0.35"}),s.jsx("path",{d:"M38 18L46 26",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function t1({color:u="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{x:"16",y:"14",width:"32",height:"28",rx:"6",fill:u,opacity:"0.25"}),s.jsx("rect",{x:"20",y:"18",width:"24",height:"14",rx:"4",fill:u,opacity:"0.35"}),s.jsx("path",{d:"M26 48H38",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function a1({color:u="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z",fill:u,opacity:"0.25"}),s.jsx("path",{d:"M26 46H38",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M22 52H42",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function n1({color:u="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M16 44V34",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M28 44V26",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M40 44V30",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z",fill:u,opacity:"0.35"})]})}function l1({color:u="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{x:"18",y:"30",width:"28",height:"22",rx:"10",fill:u,opacity:"0.25"}),s.jsx("path",{d:"M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M32 38V44",stroke:u,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}const i1=(u,m=null)=>{const g={1:[],2:[],3:[]};u.forEach(S=>{g[S.row].push(S)}),Object.keys(g).forEach(S=>{g[S].sort((M,Y)=>M.col-Y.col)});let r=!0;for(;r;){r=!1;for(let S=3;S>=2;S--){const M=g[S];if(M.reduce((H,B)=>H+B.span,0)>4){const H=M.findIndex(V=>V.id===m);let B;H!==-1&&H<=1?B=M.pop():B=M.shift(),B.row=S-1,g[S-1].push(B),r=!0;break}}}const y=[];return Object.keys(g).forEach(S=>{let M=1;g[S].forEach(Y=>{y.push({...Y,row:parseInt(S),col:M}),M+=Y.span})}),y},o1=(u,m)=>{if(!m)return u.map(r=>({...r,span:1}));const g=u.map(r=>({...r,span:r.id===m?2:1}));return i1(g,m)},s1=u=>{const m=[];let g=0;for(let r=1;r<=3;r++)g<u.length&&(m.push({id:u[g],row:1,col:r,span:1}),g++);for(let r=1;r<=4;r++)g<u.length&&(m.push({id:u[g],row:2,col:r,span:1}),g++);for(let r=1;r<=4;r++)g<u.length&&(m.push({id:u[g],row:3,col:r,span:1}),g++);return m},u1=3e3,c1=1,r1=f.div`
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
`,d1=f.div`
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
    background: ${u=>u.$isExpanded?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.1)"};
    backdrop-filter: blur(10px);
    box-shadow: ${u=>u.$isExpanded?"0px 4px 32px 0px rgba(176, 149, 227, 0.25)":"none"};
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
`,f1=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,p1=f.div`
  display: flex;
  align-items: center;
  justify-content: ${u=>u.$isExpanded?"flex-start":"center"};
  gap: ${u=>u.$isExpanded?"16px":"0"};
  width: ${u=>u.$isExpanded?"100%":"auto"};
  padding: ${u=>u.$isExpanded?"0 20px":"0"};
  transition: none;
`,h1=f.div`
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
`,m1=f.div`
  font-family: ${q.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  display: ${u=>u.$isExpanded?"block":"none"};
  opacity: ${u=>u.$isExpanded?"1":"0"};
  transform: translateX(${u=>u.$isExpanded?"0":"20px"});
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
`;function g1({ariaLabel:u,title:m,icon:g,gridRow:r,gridColumn:y,isExpanded:S,onMouseEnter:M,onMouseLeave:Y,onClick:H,tileId:B}){return s.jsx(d1,{"aria-label":u,$isExpanded:S,style:{gridRow:r,gridColumn:y},onMouseEnter:()=>M(B),onMouseLeave:Y,onClick:()=>H(B),children:s.jsx(f1,{children:s.jsxs(p1,{$isExpanded:S,children:[s.jsx(h1,{children:g}),s.jsx(m1,{$isExpanded:S,children:m})]})})})}const y1={ScrollIcon:Im,MessageProgrammingIcon:Pm,PenToolIcon:e1,DriverIcon:t1,CloudConnectionIcon:a1,FavoriteChartIcon:n1,LockIcon:l1};function x1({tileColor:u}){const m=$e("hero").tiles??{},g=m.autoCycleIntervalMs??u1,r=m.defaultTileId??c1,y=S0(),S=D.useMemo(()=>{const Z=m.row1??[],oe=m.row2??[];return[...Z,...oe]},[m]),M=D.useMemo(()=>S.length?Math.min(...S.map(Z=>Z.id)):1,[S]),Y=D.useMemo(()=>S.length?Math.max(...S.map(Z=>Z.id)):1,[S]),[H,B]=D.useState(r),[V,C]=D.useState(!1),[ee,je]=D.useState(!1),ge=D.useRef(null),N=D.useRef(null);D.useEffect(()=>{if(typeof window<"u"){const Z=()=>je(window.innerWidth<=1e3);return Z(),window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)}},[]),D.useEffect(()=>ee?void 0:(V||(ge.current=setInterval(()=>{if(!V){const oe=Math.floor(Math.random()*(Y-M+1))+M;B(oe)}},g)),()=>{ge.current&&clearInterval(ge.current)}),[V,ee]);const _=D.useMemo(()=>{const Z=S.map(Ce=>Ce.id),oe={},Ne=s1(Z);return oe.default=Ne,Z.forEach(Ce=>{oe[Ce]=o1(Ne,Ce)}),oe},[S]),J=D.useMemo(()=>_[H||"default"]||_.default,[_,H]),me=Z=>{C(!0),B(Z),ge.current&&clearInterval(ge.current)},we=()=>{B(r),C(!1)},Ze=Z=>{const oe=S.find(Ne=>Ne.id===Z);if(!ee){oe?.slug&&y(`/roadmap/${oe.slug}`);return}if(H===Z){oe?.slug&&y(`/roadmap/${oe.slug}`);return}N.current&&clearTimeout(N.current),B(Z),N.current=setTimeout(()=>{B(r)},4e3)};return D.useEffect(()=>()=>{N.current&&clearTimeout(N.current)},[]),s.jsx(r1,{"aria-label":"intro tiles",children:J.map(Z=>{const oe=S.find(Lt=>Lt.id===Z.id);if(!oe)return null;const Ne=y1[oe.icon],Ce=Z.span===2;return s.jsx(g1,{tileId:Z.id,ariaLabel:oe.ariaLabel,title:oe.title,icon:s.jsx(Ne,{color:u}),gridRow:Z.row,gridColumn:`${Z.col} / span ${Z.span}`,isExpanded:Ce,onMouseEnter:me,onMouseLeave:we,onClick:Ze},Z.id)})})}const o0="margg_waitlist_joined",Bu="margg:waitlist_joined",v1=re`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,b1=re`
  to { stroke-dashoffset: 0; }
`,w1=re`
  to { transform: rotate(360deg); }
`,s0=f.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,S1=f.div`
  position: relative;
  width: 100%;
  height: 56px;
`,j1=f.input`
  width: 100%;
  height: 100%;
  padding: 16px 180px 16px 24px;
  border: 1px solid ${u=>u.$hasError?"#FF4D4F":"#2d2d2d"};
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
    border-color: ${u=>u.$hasError?"#FF4D4F":"#d3c4ef"};
  }

  @media (max-width: 640px) {
    padding: 14px 120px 14px 16px;
    font-size: 14px;
  }
`,z1=f.button`
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
`,T1=f.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(80, 19, 192, 0.25);
  border-top-color: #5013c0;
  border-radius: 50%;
  animation: ${w1} 0.6s linear infinite;

  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`,E1=f.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ff6b6b;
  opacity: ${u=>u.$show?"1":"0"};
  max-height: ${u=>u.$show?"30px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,M1=f.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${v1} 0.4s ease forwards;

  @media (max-width: 640px) {
    gap: 10px;
  }
`,A1=f.div`
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
    animation: ${b1} 0.4s ease 0.25s forwards;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    svg { width: 18px; height: 18px; }
  }
`,D1=f.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(238, 231, 249, 0.85);
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,E0=({placeholder:u="Enter Email",buttonText:m="Join the waitlist",onSubmit:g})=>{const[r,y]=D.useState(""),[S,M]=D.useState(""),[Y,H]=D.useState(!1),[B,V]=D.useState(!1),C=D.useRef(null),ee=D.useRef(null),je=D.useRef(null);D.useEffect(()=>{try{typeof window<"u"&&localStorage.getItem(o0)==="true"&&H(!0)}catch{}},[]),D.useEffect(()=>{const J=()=>H(!0);return window.addEventListener(Bu,J),()=>window.removeEventListener(Bu,J)},[]),D.useEffect(()=>{ee.current&&!je.current&&(je.current=ee.current.offsetWidth)}),D.useEffect(()=>{const J=me=>{C.current&&!C.current.contains(me.target)&&S&&M("")};return document.addEventListener("mousedown",J),()=>{document.removeEventListener("mousedown",J)}},[S]);const ge=J=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(J),N=async J=>{if(J.preventDefault(),M(""),!ge(r)){M("Please enter a valid email address");return}if(g){V(!0);try{await g(r);try{localStorage.setItem(o0,"true")}catch{}window.dispatchEvent(new Event(Bu)),H(!0)}catch(me){me.message==="already_registered"?M("This email is already registered"):me.message==="already_enrolled"?M("This email is already enrolled in the waitlist"):M(me.message||"Something went wrong. Please try again.")}finally{V(!1)}}},_=J=>{y(J.target.value),S&&M("")};return Y?s.jsx(s0,{ref:C,children:s.jsxs(M1,{children:[s.jsx(A1,{children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M5 13l4 4L19 7",stroke:"#B095E3",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx(D1,{children:"You have already joined the waitlist"})]})}):s.jsxs(s0,{ref:C,children:[s.jsx("form",{onSubmit:N,children:s.jsxs(S1,{children:[s.jsx(j1,{type:"email",placeholder:u,value:r,onChange:_,$hasError:!!S,disabled:B}),s.jsx(z1,{ref:ee,type:"submit",disabled:B,style:B&&je.current?{width:je.current}:void 0,children:B?s.jsx(T1,{}):m})]})}),s.jsx(E1,{$show:!!S,children:S})]})};async function no(u,m,g){if(!u)throw new Error("Google Sheets integration is not configured. Please set the script URL.");const r={_sheet:m,...g};let y;try{y=await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r),signal:AbortSignal.timeout(15e3)})}catch(S){throw S.name==="TimeoutError"||S.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach Google Sheets. Please check your internet connection and try again.")}return{ok:!0}}let ku=!1,Ol=null;function C1(){return ku&&window.emailjs?Promise.resolve():Ol||(Ol=new Promise((u,m)=>{if(window.emailjs){ku=!0,u();return}const g=document.createElement("script");g.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",g.async=!0,g.onload=()=>{ku=!0,u()},g.onerror=()=>{Ol=null,m(new Error("Failed to load EmailJS SDK."))},document.head.appendChild(g)}),Ol)}function O1(u,m){const g=u?.templates?.[m];if(!g)return null;const r=g.account,y=u?.accounts?.[r];return!y?.serviceId||!y?.publicKey?null:{serviceId:y.serviceId,publicKey:y.publicKey,templateId:g.templateId}}async function lo(u,m,g){const r=O1(u,m);if(!r)return console.warn(`[EmailJS] No valid config for "${m}" — skipping.`),{ok:!0,skipped:!0};try{await C1(),window.emailjs.init(r.publicKey);const y={...g,to_email:u.notifyEmail||"info@margg.in",submission_time:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})},S=await window.emailjs.send(r.serviceId,r.templateId,y);return S.status!==200&&console.warn("[EmailJS] Non-200 status:",S),{ok:!0}}catch(y){return console.error("[EmailJS] Send failed:",y),{ok:!1,error:y.message}}}const U1=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,L1=/^[0-9\s\-+()]{10,15}$/;function Ut(u,m){if(!u||!String(u).trim())throw new Error(`${m} is required`);return String(u).trim()}function io(u){const m=Ut(u,"Email").toLowerCase().slice(0,254);if(!U1.test(m))throw new Error("Please enter a valid email address");return m}function Vu(u){const m=Ut(u,"Phone number");if(!L1.test(m))throw new Error("Please enter a valid phone number");return m}async function oo(u,m){let g;try{g=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m),signal:AbortSignal.timeout(15e3)})}catch(y){throw y.name==="TimeoutError"||y.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach the server. Please check your internet connection and try again.")}if(g.ok)return{ok:!0};let r="";try{const y=await g.json();r=y?.data?.message||y?.message||y?.error||""}catch{}throw g.status===409?new Error(r||"This entry already exists. Please use a different email."):g.status===422||g.status===400?new Error(r||"Some fields are invalid. Please review and try again."):g.status===429?new Error("Too many requests. Please wait a moment and try again."):g.status>=500?new Error("Our servers are temporarily unavailable. Please try again in a few moments."):new Error(r||"Something went wrong. Please try again.")}function so(u){return u?.submissionMode==="sheets"}async function M0(u,m){const g=io(m);if(so(u))return await no(u.googleSheets?.scriptUrl,"Waitlist",{email:g}),await lo(u.emailjs,"waitlist",{form_type:"Waitlist",email:g}),{ok:!0};const r=`${u.baseUrl}${u.endpoints.waitlist}`;return oo(r,{email:g})}async function B1(u,m){const g=Ut(m.fullName,"Full name").split(" ")[0],r=Ut(m.fullName,"Full name").split(" ").slice(1).join(" ")||"",y=Vu(m.phone),S=io(m.email),M=Ut(m.college,"College name"),Y=Ut(m.branch,"Branch"),H=Ut(m.year,"Year"),B=m.query||"";if(so(u)){const ee={firstName:g,lastName:r,phone:y,email:S,collegeName:M,branch:Y,year:H,query:B};return await no(u.googleSheets?.scriptUrl,"Learners",ee),await lo(u.emailjs,"learner",{form_type:"Learner Enquiry",full_name:`${g} ${r}`.trim(),phone:y,email:S,college_name:M,branch:Y,year:H,query:B}),{ok:!0}}const V={firstName:g,lastName:r,phone:y,email:S,collegeName:M,branch:Y,year:H,query:B},C=`${u.baseUrl}${u.endpoints.learner}`;return oo(C,V)}async function k1(u,m){const g=Ut(m.fullName,"Full name"),r=Vu(m.phone),y=io(m.email),S=m.topics?.length?m.topics:(()=>{throw new Error("Add at least one topic")})();if(so(u)){const H={fullName:g,phone:r,email:y,topics:S.join(", ")};return await no(u.googleSheets?.scriptUrl,"Instructors",H),await lo(u.emailjs,"instructor",{form_type:"Instructor Enquiry",full_name:g,phone:r,email:y,topics:S.join(", ")}),{ok:!0}}const M={fullName:g,phone:r,email:y,topics:S},Y=`${u.baseUrl}${u.endpoints.instructor}`;return oo(Y,M)}async function N1(u,m){const g=Ut(m.orgType,"Organisation type"),r=Ut(m.orgName,"Organisation name"),y=Number(Ut(m.students,"Number of students"))||0,S=Vu(m.phone),M=io(m.email);if(so(u)){const B={organisationType:g,organisationName:r,numberOfStudents:y,phone:S,email:M};return await no(u.googleSheets?.scriptUrl,"Partners",B),await lo(u.emailjs,"partner",{form_type:"Partner / Organisation Enquiry",organisation_type:g,organisation_name:r,number_of_students:y,phone:S,email:M}),{ok:!0}}const Y={organisationType:g,organisationName:r,numberOfStudents:y,phone:S,email:M},H=`${u.baseUrl}${u.endpoints.partner}`;return oo(H,Y)}const R1=f.section`
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
`,H1=f.div`
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
`,uo=f.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`,_1=f(uo)`
  left: 80.3%;
  top: 67.2%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.95) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,q1=f(uo)`
  left: 13.9%;
  top: 1.4%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.95) 0%,
    rgba(176, 149, 227, 0) 70%
  );
`,Y1=f(uo)`
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
`,G1=f(uo)`
  left: 7.3%;
  top: 34.9%;
  width: clamp(110px, 13vw, 171px);
  height: clamp(110px, 13vw, 171px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.9) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,X1=f.div`
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
`,Q1=f.div`
  width: 100%;
  max-width: ${Bn};
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
`,V1=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 520px;
  flex: 0 1 520px;
`,$1=f.h1`
  color: white;
  font-weight: 400;
  font-size: clamp(42px, 5.2vw, 64px);
  line-height: 1.2;
  letter-spacing: -0.3937px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${q.heading};

  text-wrap: balance;
`,Z1=f.p`
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.35;
  font-family: ${q.body};
  margin: 0 0 32px 0;
  max-width: 425px;
  opacity: 0.95;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;f.div`
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translateX(-50%);
  width: 315px;
  text-align: center;
  font-family: ${q.body};
  font-size: 14px;
  letter-spacing: -0.3937px;
  color: #000;
  opacity: 0.18;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;f.img`
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
`;const J1=({id:u})=>{const m="rgba(176, 149, 227, 1)",{titleLine1:g,titleLine2:r,description:y,inputPlaceholder:S,inputButtonText:M}=$e("hero"),Y=$e("api"),H=B=>M0(Y,B);return s.jsxs(R1,{id:u,children:[s.jsx(H1,{}),s.jsx(_1,{}),s.jsx(q1,{}),s.jsx(Y1,{}),s.jsx(G1,{}),s.jsx(X1,{children:s.jsxs(Q1,{children:[s.jsxs(V1,{children:[s.jsxs($1,{children:[g,s.jsx("br",{}),r]}),s.jsx(Z1,{children:y}),s.jsx(E0,{placeholder:S,buttonText:M,onSubmit:H})]}),s.jsx(x1,{tileColor:m})]})})]})},K1=f.div`
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
`,W1=f.div`
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
`,F1=f.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`,I1=f.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
  white-space: pre-line;
`;function P1({items:u}){return s.jsx(K1,{"aria-label":"analytics stats",children:u.map(m=>s.jsxs(W1,{children:[s.jsx(F1,{children:m.value}),s.jsx(I1,{children:m.label})]},m.value+m.label))})}const eg=f.section`
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
`,tg=f.div`
  width: 100%;
  max-width: ${Bn};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`,ag=re`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`,ng=re`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`,lg=re`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`,ig=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`,$u=f.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`,og=f($u)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${ag} 12s ease-in-out infinite;
`,sg=f($u)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${ng} 15s ease-in-out infinite;
`,ug=f($u)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${lg} 18s ease-in-out infinite;
`,cg=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`,rg=re`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`,dg=f.div`
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
  animation: ${rg} 8s ease-in-out infinite;
`,fg=re`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`,pg=f.div`
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
  animation: ${fg} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`,hg=re`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`,mg=[{x:5,y:15,size:3,dur:10,delay:0,op:.4},{x:12,y:72,size:2,dur:12,delay:1.2,op:.3},{x:22,y:35,size:4,dur:9,delay:.5,op:.5},{x:33,y:85,size:2,dur:14,delay:2,op:.25},{x:42,y:12,size:3,dur:11,delay:.8,op:.35},{x:55,y:78,size:4,dur:13,delay:1.5,op:.45},{x:63,y:28,size:2,dur:10,delay:3,op:.3},{x:72,y:60,size:3,dur:15,delay:.3,op:.4},{x:78,y:18,size:2,dur:12,delay:2.5,op:.25},{x:85,y:45,size:4,dur:9,delay:1,op:.5},{x:91,y:80,size:3,dur:11,delay:.7,op:.35},{x:15,y:50,size:2,dur:14,delay:1.8,op:.3},{x:48,y:42,size:3,dur:10,delay:2.2,op:.4},{x:68,y:90,size:2,dur:13,delay:.4,op:.25},{x:38,y:55,size:3,dur:11,delay:3.2,op:.35},{x:95,y:25,size:2,dur:12,delay:1.6,op:.3},{x:8,y:88,size:4,dur:15,delay:.9,op:.45},{x:28,y:8,size:2,dur:10,delay:2.8,op:.3}],gg=f.span`
  position: absolute;
  width: ${u=>u.$size}px;
  height: ${u=>u.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${u=>u.$op});
  left: ${u=>u.$x}%;
  top: ${u=>u.$y}%;
  animation: ${hg} ${u=>u.$dur}s ease-in-out infinite;
  animation-delay: ${u=>u.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${u=>u.$size*3}px
    rgba(176, 149, 227, ${u=>u.$op*.5});
`,yg=re`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`,xg=f.div`
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
  animation: ${yg} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`,vg=f.div`
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
`,bg=f.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`,wg=f.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`,Sg=re`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`,jg=f.div`
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
    animation: ${Sg} 5s ease-in-out infinite;
    pointer-events: none;
  }
`,zg=re`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`,Pi=f.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-color: rgba(176, 149, 227, 0.18);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: ${zg} 0.6s ease-out 2.6s forwards;

  ${u=>u.$pos==="tl"&&Te`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${u=>u.$pos==="tr"&&Te`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${u=>u.$pos==="bl"&&Te`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${u=>u.$pos==="br"&&Te`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`,A0=re`
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
`,u0=re`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`,c0=re`
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
`,Tg=re`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`,r0=f.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2.5vw, 40px);
  transform-style: preserve-3d;
  width: 100%;
`,Eg=f.h2`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`,D0=f.span`
  display: inline-block;
  font-family: ${q.heading};
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

  ${u=>u.$animate&&Te`
      animation:
        ${A0} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${u.$delay}s
          forwards,
        ${u0} 6s linear ${u.$delay+.9}s infinite,
        ${c0} 4s ease-in-out ${u.$delay+.9}s infinite,
        ${Tg} ${3.5+u.$delay%1.5}s ease-in-out ${u.$delay+.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${u0} 1.5s linear infinite,
      ${c0} 1s ease-in-out infinite;
    text-shadow:
      0 0 40px rgba(176, 149, 227, 0.8),
      0 0 80px rgba(80, 19, 192, 0.3);
    transform: scale(1.12) translateY(-3px);
  }
`,d0=f(D0)`
  font-size: clamp(64px, 12vw, 160px);
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    font-size: clamp(40px, 10vw, 64px);
  }
`,f0=f(D0)`
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: 0.18em;
  -webkit-text-fill-color: rgba(211, 196, 239, 0.65);
  background: none;
  animation: ${u=>u.$animate?Te`
          ${A0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${u.$delay}s forwards
        `:"none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`,Mg=re`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`,Ag=f.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${q.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${Mg} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`,Dg=re`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`,Cg=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: clamp(20px, 2.5vw, 36px);
`,p0=f.span`
  display: inline-block;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.4) 50%,
    transparent 100%
  );
  animation: ${Dg} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`,Og=re`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`,Ug=re`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`,Lg=f.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${Og} 0.5s ease-out 2.5s forwards,
    ${Ug} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`,Bg=re`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`,kg=re`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`,Ng=f.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${kg} 0.8s ease-out 2.8s forwards;
`,Nu=f.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${Bg} 1.5s ease-in-out infinite;
  animation-delay: ${u=>u.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;function Rg(u){return D.useCallback(g=>{if(!u.current)return;const r=u.current.getBoundingClientRect(),y=(g.clientX-r.left)/r.width*100,S=(g.clientY-r.top)/r.height*100;u.current.style.setProperty("--mx",`${y}%`),u.current.style.setProperty("--my",`${S}%`)},[u])}function Hg(u){const m=D.useCallback(r=>{if(!u.current)return;const y=u.current.getBoundingClientRect(),S=(r.clientX-y.left)/y.width-.5,M=(r.clientY-y.top)/y.height-.5;u.current.style.transform=`rotateX(${M*-5}deg) rotateY(${S*5}deg)`},[u]),g=D.useCallback(()=>{u.current&&(u.current.style.transform="rotateX(0deg) rotateY(0deg)")},[u]);return{handleTiltMove:m,handleTiltLeave:g}}function _g(u=.2){const m=D.useRef(null),[g,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const y=m.current;if(!y)return;const S=new IntersectionObserver(([M])=>{M.isIntersecting&&(r(!0),S.disconnect())},{threshold:u});return S.observe(y),()=>S.disconnect()},[u]),[m,g]}function eo({text:u,Component:m,baseDelay:g=0,animate:r=!0}){return s.jsx("span",{style:{display:"inline-flex",flexWrap:"nowrap",whiteSpace:"nowrap"},children:u.split("").map((y,S)=>s.jsx(m,{$animate:r,$delay:g+S*.07,children:y},`${y}-${S}`))})}function qg(){const{stats:u,waitList:m}=$e("analytics"),g=D.useRef(null),r=D.useRef(null),y=Rg(g),{handleTiltMove:S,handleTiltLeave:M}=Hg(r),[Y,H]=_g(.2),B=D.useCallback(V=>{y(V),S(V)},[y,S]);return s.jsx(eg,{ref:Y,"aria-label":"analytics",onMouseMove:B,onMouseLeave:M,children:s.jsx(tg,{children:m?s.jsxs(s.Fragment,{children:[s.jsxs(ig,{children:[s.jsx(og,{}),s.jsx(sg,{}),s.jsx(ug,{})]}),s.jsx(dg,{}),s.jsx(cg,{}),s.jsx(xg,{}),s.jsx(pg,{}),s.jsx(vg,{ref:g}),mg.map((V,C)=>s.jsx(gg,{$x:V.x,$y:V.y,$size:V.size,$dur:V.dur,$delay:V.delay,$op:V.op},C)),s.jsx(bg,{children:s.jsx(wg,{ref:r,children:s.jsxs(jg,{children:[s.jsx(Pi,{$pos:"tl"}),s.jsx(Pi,{$pos:"tr"}),s.jsx(Pi,{$pos:"bl"}),s.jsx(Pi,{$pos:"br"}),s.jsxs(Eg,{children:[s.jsxs(r0,{children:[s.jsx(eo,{text:"WE",Component:f0,baseDelay:.1,animate:H}),s.jsx("span",{style:{width:"clamp(8px,1.5vw,20px)"}}),s.jsx(eo,{text:"ARE",Component:f0,baseDelay:.3,animate:H})]}),s.jsxs(r0,{style:{marginTop:"clamp(4px, 0.8vw, 12px)"},children:[s.jsx(eo,{text:"COMING",Component:d0,baseDelay:.5,animate:H}),s.jsx(eo,{text:"SOON",Component:d0,baseDelay:.9,animate:H})]})]}),s.jsx(Ag,{children:"Something extraordinary is on its way"}),s.jsxs(Cg,{children:[s.jsx(p0,{}),s.jsx(Lg,{}),s.jsx(p0,{})]}),s.jsxs(Ng,{children:[s.jsx(Nu,{$delay:0}),s.jsx(Nu,{$delay:.3}),s.jsx(Nu,{$delay:.6})]})]})})})]}):s.jsx(P1,{items:u})})})}const C0=re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Yg(u=.15){const m=D.useRef(null),[g,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const y=m.current;if(!y)return;const S=new IntersectionObserver(([M])=>{M.isIntersecting&&(r(!0),S.disconnect())},{threshold:u});return S.observe(y),()=>S.disconnect()},[u]),[m,g]}const Gg=f.section`
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
`,Xg=f.div`
  width: 100%;
  max-width: ${Bn};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Qg=f.h2`
  margin: 0;
  font-family: ${q.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
  opacity: 0;

  ${u=>u.$inView&&Te`
      animation: ${C0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,Vg=f.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${q.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
  opacity: 0;

  ${u=>u.$inView&&Te`
      animation: ${C0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,$g=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;f.div`
  width: min(560px, 100%);
  margin-top: clamp(22px, 5vh, 44px);
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: min(440px, 100%);
  }
`;f.div`
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
`;f.div`
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
`;f.div`
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
`;function Zg({id:u}){const{titleLine1:m,titleLine2:g,description:r}=$e("supercharge"),[y,S]=Yg(.15);return s.jsx(Gg,{id:u,"aria-label":"supercharge",ref:y,children:s.jsx(Xg,{children:s.jsxs($g,{children:[s.jsxs(Qg,{$inView:S,children:[m,s.jsx("br",{}),g]}),s.jsx(Vg,{$inView:S,children:r})]})})})}const Jg=re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Kg(u=.1){const m=D.useRef(null),[g,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const y=m.current;if(!y)return;const S=new IntersectionObserver(([M])=>{M.isIntersecting&&(r(!0),S.disconnect())},{threshold:u});return S.observe(y),()=>S.disconnect()},[u]),[m,g]}const Wg=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,Fg=/^[0-9\s\-+()]{10,15}$/;function to(u,m){if(!m||!m.trim())return"Required";switch(u){case"email":return Wg.test(m.trim())?"":"Invalid email";case"phone":return Fg.test(m.trim())?"":"Invalid phone number";case"fullName":return m.trim().length>=2?"":"At least 2 characters";case"orgName":return m.trim().length>=2?"":"At least 2 characters";default:return""}}const h0=[{key:"learner",title:"Learners",desc:"Have questions about your course, progress, or certification? Reach out and we’ll get you the support you need."},{key:"instructor",title:"Instructors",desc:"Interested in joining our platform or facing technical issues while managing your content? We’re just a message away."},{key:"partner",title:"Partners",desc:"Let’s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team."}],Ig=()=>s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z",fill:"#D3C4EF",fillOpacity:".8"}),s.jsx("path",{d:"M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",fill:"#EEE7F9"})]}),Pg=()=>s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",fill:"#D3C4EF"}),s.jsx("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",fill:"#D3C4EF",fillOpacity:".6"}),s.jsx("path",{d:"M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z",fill:"#EEE7F9"})]}),e2=()=>s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#D3C4EF",fillOpacity:".6"}),s.jsx("path",{d:"M9 11a3 3 0 100-6 3 3 0 000 6z",fill:"#D3C4EF"}),s.jsx("path",{d:"M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z",fill:"#D3C4EF",fillOpacity:".6"}),s.jsx("path",{d:"M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",fill:"#D3C4EF"})]}),t2={learner:Ig,instructor:Pg,partner:e2},a2=f.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${ie.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`,Zu=f.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`,n2=f(Zu)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `,l2=f(Zu)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `,i2=f(Zu)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `,o2=f.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ul=Te`
  opacity: 0;
  ${u=>u.$show&&Te`
    animation: ${Jg} 0.7s ease forwards;
    animation-delay: ${u.$d||"0s"};
  `}
`,s2=f.h2`
  margin: 0;
  font-family: ${q.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${Ul}
`,u2=f.p`
  margin: 16px 0 0;
  font-family: ${q.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${Ul}
`,c2=f.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  ${Ul}

  ${ie.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`,r2=f.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${u=>u.$active?"drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))":"drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${ie.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`,d2=f.button`
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

  background: ${u=>u.$active?"linear-gradient(160deg, rgba(80,19,192,0.55) 0%, rgba(60,42,96,0.7) 100%)":"linear-gradient(160deg, rgba(80,19,192,0.15) 0%, rgba(60,42,96,0.2) 100%)"};

  &:hover {
    background: linear-gradient(160deg, rgba(80,19,192,0.35) 0%, rgba(60,42,96,0.45) 100%);
  }

  ${ie.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${u=>u.$active?"rgba(176,149,227,0.5)":"rgba(176,149,227,0.12)"};
  }
`,f2=f.div`
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
`,p2=f.span`
  font-family: ${q.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${ie.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`,h2=f.span`
  font-family: ${q.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${ie.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`,m2=f.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${q.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${Ul}
  }
`,g2=f.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: -20px;
  @media (max-width: 600px) { display: none; }
`,Ru=f.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${u=>u.$pos==="left"&&Te` left: 18%; transform: rotate(22deg); transform-origin: top center; `}
  ${u=>u.$pos==="center"&&Te` left: 50%; `}
  ${u=>u.$pos==="right"&&Te` right: 18%; transform: rotate(-22deg); transform-origin: top center; `}
`,y2=f.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${Ul}

  ${ie.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`,x2=f.h3`
  margin: 0;
  font-family: ${q.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${ie.mobile} { font-size: 32px; }
`,v2=f.p`
  margin: 8px 0 0;
  font-family: ${q.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${ie.mobile} { font-size: 15px; }
`,b2=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${ie.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`,Je=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${u=>u.$full&&Te` grid-column: 1 / -1; `}
`,Ke=f.label`
  font-family: ${q.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`,Ju=Te`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${q.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`,Ie=f.input` ${Ju} `,w2=f.textarea`
  ${Ju}
  min-height: 90px;
  resize: vertical;
`,S2=f.select`
  ${Ju}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${q.body};
    padding: 8px;
  }
`,Pe=f.span`
  font-family: ${q.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`,j2=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`,z2=f.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${q.body};
  font-size: 13px;
  color: #eee7f9;
`,T2=f.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`,E2=f.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`,M2=f.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(176, 149, 227, 0.5);
  background: ${u=>u.$checked?"#5013C0":"rgba(211,196,239,0.06)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  svg { opacity: ${u=>u.$checked?1:0}; transition: opacity 0.15s; }
`,A2=f.span`
  font-family: ${q.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`,Hu=f.button`
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
  font-family: ${q.body};
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
`,D2=f.div`
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
`,C2=f.span`
  font-family: ${q.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`,O2=f.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${q.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`,U2=f.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,L2=f.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`,B2=f.h3`
  margin: 0;
  font-family: ${q.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`,k2=f.p`
  margin: 0;
  font-family: ${q.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;function ao(u){switch(u){case"learner":return{fullName:"",phone:"",email:"",college:"",branch:"",year:"",query:"",newsletter:!1};case"instructor":return{fullName:"",phone:"",email:"",topics:[],otherTopic:void 0};case"partner":return{orgType:"",orgName:"",students:"",phone:"",email:""};default:return{}}}function N2({id:u}){const m=$e("api"),[g,r]=D.useState("learner"),[y,S]=D.useState(ao("learner")),[M,Y]=D.useState({}),[H,B]=D.useState(!1),[V,C]=D.useState(!1);D.useRef(null);const[ee,je]=Kg(.08),ge=D.useRef(null);D.useEffect(()=>{const A={"#contact-learner":"learner","#contact-instructor":"instructor","#contact-partner":"partner"};function X(){const K=window.location.hash,Re=A[K];Re&&(r(Re),S(ao(Re)),Y({}),B(!1),requestAnimationFrame(()=>{const Mt=ge.current;if(Mt){const At=document.querySelector("nav")?.offsetHeight||72,T=Mt.getBoundingClientRect().top+window.scrollY-At;window.scrollTo({top:T,behavior:"smooth"})}}))}return X(),window.addEventListener("hashchange",X),()=>window.removeEventListener("hashchange",X)},[]);const N=D.useCallback(A=>{r(A),S(ao(A)),Y({}),B(!1)},[]),_=D.useCallback((A,X)=>{S(K=>({...K,[A]:X})),M[A]&&Y(K=>({...K,[A]:""}))},[M]),J=D.useCallback(A=>{A&&(S(X=>({...X,topics:X.topics.includes(A)?X.topics:[...X.topics,A]})),M.topics&&Y(X=>({...X,topics:""})))},[M]),me=D.useCallback(()=>{S(A=>{const X=A.otherTopic?.trim();return X?{...A,topics:A.topics.includes(X)?A.topics:[...A.topics,X],otherTopic:void 0}:A}),M.topics&&Y(A=>({...A,topics:""}))},[M]),we=D.useCallback(A=>{S(X=>({...X,topics:X.topics.filter(K=>K!==A)}))},[]),Ze=D.useCallback(async A=>{A.preventDefault();const X={};if(g==="learner")["fullName","phone","email"].forEach(K=>{const Re=to(K,y[K]);Re&&(X[K]=Re)}),y.college||(X.college="Required"),y.branch||(X.branch="Required"),y.year||(X.year="Required");else if(g==="instructor")["fullName","phone","email"].forEach(K=>{const Re=to(K,y[K]);Re&&(X[K]=Re)}),y.topics.length||(X.topics="Add at least one topic");else{y.orgType||(X.orgType="Required");const K=to("orgName",y.orgName);K&&(X.orgName=K),y.students||(X.students="Required"),["phone","email"].forEach(Re=>{const Mt=to(Re,y[Re]);Mt&&(X[Re]=Mt)})}if(Object.keys(X).length){Y(X);return}C(!0),Y(K=>({...K,_form:""}));try{g==="learner"?await B1(m,y):g==="instructor"?await k1(m,y):await N1(m,y),B(!0)}catch(K){Y({_form:K.message||"Something went wrong. Please try again."})}finally{C(!1)}},[g,y,m]),Z=D.useCallback(()=>{Ze({preventDefault:()=>{}})},[Ze]),oe=()=>s.jsxs(s.Fragment,{children:[s.jsxs(Je,{children:[s.jsx(Ke,{children:"Full Name"}),s.jsx(Ie,{placeholder:"Enter full name",value:y.fullName,onChange:A=>_("fullName",A.target.value)}),M.fullName&&s.jsx(Pe,{children:M.fullName})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Phone Number"}),s.jsx(Ie,{placeholder:"Enter phone number",value:y.phone,onChange:A=>_("phone",A.target.value)}),M.phone&&s.jsx(Pe,{children:M.phone})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Email"}),s.jsx(Ie,{type:"email",placeholder:"Enter email address",value:y.email,onChange:A=>_("email",A.target.value)}),M.email&&s.jsx(Pe,{children:M.email})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"College Name"}),s.jsx(Ie,{placeholder:"Enter college name",value:y.college,onChange:A=>_("college",A.target.value)}),M.college&&s.jsx(Pe,{children:M.college})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Branch"}),s.jsx(Ie,{placeholder:"Enter branch",value:y.branch,onChange:A=>_("branch",A.target.value)}),M.branch&&s.jsx(Pe,{children:M.branch})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Year of Passing"}),s.jsx(Ie,{placeholder:"Enter year of passing",value:y.year,onChange:A=>_("year",A.target.value)}),M.year&&s.jsx(Pe,{children:M.year})]}),s.jsxs(Je,{$full:!0,children:[s.jsxs(Ke,{children:["Query ",s.jsx("span",{style:{color:"rgba(238,231,249,0.35)",fontWeight:400},children:"(optional)"})]}),s.jsx(w2,{placeholder:"Any questions or queries that you have?",value:y.query,onChange:A=>_("query",A.target.value)})]})]}),Ne=$e("courses")||[],Ce=()=>s.jsxs(s.Fragment,{children:[s.jsxs(Je,{children:[s.jsx(Ke,{children:"Full Name"}),s.jsx(Ie,{placeholder:"Enter full name",value:y.fullName,onChange:A=>_("fullName",A.target.value)}),M.fullName&&s.jsx(Pe,{children:M.fullName})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Phone Number"}),s.jsx(Ie,{placeholder:"Enter phone number",value:y.phone,onChange:A=>_("phone",A.target.value)}),M.phone&&s.jsx(Pe,{children:M.phone})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Email"}),s.jsx(Ie,{type:"email",placeholder:"Enter email address",value:y.email,onChange:A=>_("email",A.target.value)}),M.email&&s.jsx(Pe,{children:M.email})]}),s.jsxs(Je,{$full:!0,children:[s.jsx(Ke,{children:"Topics you can teach"}),y.topics.length>0&&s.jsx(j2,{children:y.topics.map(A=>s.jsxs(z2,{children:[A,s.jsx(T2,{onClick:()=>we(A),"aria-label":`Remove ${A}`,children:s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:s.jsx("path",{d:"M9 3L3 9M3 3l6 6",stroke:"#EEE7F9",strokeWidth:"1.5",strokeLinecap:"round"})})})]},A))}),s.jsxs(S2,{value:"",onChange:A=>{const X=A.target.value;X&&(X==="__other__"?S(K=>({...K,otherTopic:""})):J(X),A.target.value="")},children:[s.jsx("option",{value:"",children:"Select a topic"}),Ne.filter(A=>!y.topics.includes(A)).map(A=>s.jsx("option",{value:A,children:A},A)),s.jsx("option",{value:"__other__",children:"Other"})]}),typeof y.otherTopic=="string"&&s.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[s.jsx(Ie,{placeholder:"Enter your topic",value:y.otherTopic,onChange:A=>_("otherTopic",A.target.value),onKeyDown:A=>{A.key==="Enter"&&(A.preventDefault(),me())},style:{flex:1}}),s.jsx(Hu,{type:"button",onClick:me,style:{marginTop:0,width:"auto",padding:"0 24px",height:43,fontSize:14},children:"Add"})]}),M.topics&&s.jsx(Pe,{children:M.topics})]})]}),Lt=()=>s.jsxs(s.Fragment,{children:[s.jsxs(Je,{children:[s.jsx(Ke,{children:"Organisation Type"}),s.jsx(Ie,{placeholder:"Enter organisation type",value:y.orgType,onChange:A=>_("orgType",A.target.value)}),M.orgType&&s.jsx(Pe,{children:M.orgType})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Organisation Name"}),s.jsx(Ie,{placeholder:"Enter organisation name",value:y.orgName,onChange:A=>_("orgName",A.target.value)}),M.orgName&&s.jsx(Pe,{children:M.orgName})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Number of Students"}),s.jsx(Ie,{placeholder:"Enter number of students",value:y.students,onChange:A=>_("students",A.target.value)}),M.students&&s.jsx(Pe,{children:M.students})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Phone Number"}),s.jsx(Ie,{placeholder:"Enter phone number",value:y.phone,onChange:A=>_("phone",A.target.value)}),M.phone&&s.jsx(Pe,{children:M.phone})]}),s.jsxs(Je,{children:[s.jsx(Ke,{children:"Email"}),s.jsx(Ie,{type:"email",placeholder:"Enter email address",value:y.email,onChange:A=>_("email",A.target.value)}),M.email&&s.jsx(Pe,{children:M.email})]})]});return s.jsxs(a2,{id:u,ref:A=>{ee.current=A,ge.current=A},"aria-label":"Contact Us",children:[s.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:s.jsx("defs",{children:s.jsx("clipPath",{id:"shield-clip",clipPathUnits:"objectBoundingBox",children:s.jsx("path",{d:"M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z"})})})}),s.jsx(n2,{}),s.jsx(l2,{}),s.jsx(i2,{}),s.jsxs(o2,{children:[s.jsx(s2,{$show:je,$d:"0s",children:"We are here to help you"}),s.jsx(u2,{$show:je,$d:"0.1s",children:"Whether you’re a student with a question, an educator with a suggestion, or a partner looking to collaborate — we’re always eager to hear from you."}),s.jsx(c2,{$show:je,$d:"0.2s",children:h0.map(A=>{const X=t2[A.key];return s.jsx(r2,{$active:g===A.key,onClick:()=>N(A.key),children:s.jsxs(d2,{$active:g===A.key,type:"button","aria-pressed":g===A.key,children:[s.jsx(f2,{children:s.jsx(X,{})}),s.jsx(p2,{children:A.title}),s.jsx(h2,{children:A.desc})]})},A.key)})}),s.jsx(m2,{$show:je,$d:"0.25s",children:h0.find(A=>A.key===g)?.desc},g),s.jsxs(g2,{children:[s.jsx(Ru,{$pos:"left"}),s.jsx(Ru,{$pos:"center"}),s.jsx(Ru,{$pos:"right"})]}),s.jsx(y2,{$show:je,$d:"0.35s",children:H?s.jsxs(U2,{children:[s.jsx(L2,{children:s.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"#B095E3"})})}),s.jsx(B2,{children:"Thank you!"}),s.jsx(k2,{children:"We’ve received your details and will contact you soon."}),s.jsx(Hu,{type:"button",onClick:()=>{B(!1),S(ao(g))},children:"Submit another"})]}):s.jsxs("form",{onSubmit:Ze,noValidate:!0,children:[s.jsx(x2,{children:"Drop your Details"}),s.jsx(v2,{children:"We will contact you real soon!"}),s.jsxs(b2,{children:[g==="learner"&&oe(),g==="instructor"&&Ce(),g==="partner"&&Lt()]}),g==="learner"&&s.jsxs(E2,{children:[s.jsx(M2,{$checked:y.newsletter,onClick:()=>_("newsletter",!y.newsletter),role:"checkbox","aria-checked":y.newsletter,tabIndex:0,onKeyDown:A=>{(A.key===" "||A.key==="Enter")&&(A.preventDefault(),_("newsletter",!y.newsletter))},children:s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:s.jsx("path",{d:"M2 6l3 3 5-5",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx(A2,{children:"Stay in the Loop! Subscribe to our newsletter and be the first to know about exciting features and exclusive collaborations."})]}),M._form&&s.jsxs(D2,{children:[s.jsx(C2,{children:M._form}),s.jsx(O2,{type:"button",onClick:Z,disabled:V,children:V?"Retrying…":"Retry"})]}),s.jsx(Hu,{type:"submit",disabled:V,children:V?"Submitting…":"Submit"})]})})]})]})}const R2="/assets/Margg-lQxeB3-A.png",H2=({width:u=24,height:m=24,color:g="currentColor",...r})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:g,...r,children:s.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),_2=({width:u=24,height:m=24,color:g="currentColor",...r})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:g,...r,children:s.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),q2=({width:u=30,height:m=30,color:g="currentColor"})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 24 24",fill:g,children:s.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Y2=({width:u=30,height:m=30,color:g="currentColor"})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 24 24",fill:g,children:s.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})}),G2=({width:u=30,height:m=30,color:g="currentColor"})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 24 24",fill:g,children:s.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),X2=({width:u=15,height:m=20,color:g="#B095E3",...r})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 15 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:s.jsx("path",{d:"M7.5 0C3.35813 0 0 3.35813 0 7.5C0 9.13094 0.534688 10.6275 1.42344 11.8531C1.43938 11.8825 1.44187 11.9153 1.46 11.9434L6.46 19.4434C6.69188 19.7913 7.0825 20 7.5 20C7.9175 20 8.30812 19.7913 8.54 19.4434L13.54 11.9434C13.5584 11.9153 13.5606 11.8825 13.5766 11.8531C14.4653 10.6275 15 9.13094 15 7.5C15 3.35813 11.6419 0 7.5 0ZM7.5 10C6.11937 10 5 8.88062 5 7.5C5 6.11937 6.11937 5 7.5 5C8.88062 5 10 6.11937 10 7.5C10 8.88062 8.88062 10 7.5 10Z",fill:g})}),Q2=({width:u=20,height:m=20,color:g="#B095E3",...r})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:s.jsx("path",{d:"M16.6607 12.8167C15.6366 12.8167 14.6458 12.65 13.7216 12.35C13.5768 12.3009 13.4212 12.2936 13.2724 12.329C13.1237 12.3643 12.9879 12.4409 12.8807 12.55L11.5735 14.1917C9.2172 13.0667 7.01079 10.9417 5.83681 8.5L7.4604 7.11667C7.6852 6.88333 7.75181 6.55833 7.66022 6.26667C7.35216 5.34167 7.19396 4.35 7.19396 3.325C7.19396 2.875 6.81929 2.5 6.36968 2.5H3.48885C3.03924 2.5 2.49805 2.7 2.49805 3.325C2.49805 11.0667 8.93412 17.5 16.6607 17.5C17.2519 17.5 17.485 16.975 17.485 16.5167V13.6417C17.485 13.1917 17.1103 12.8167 16.6607 12.8167Z",fill:g})}),V2=({width:u=20,height:m=20,color:g="#B095E3",...r})=>s.jsx("svg",{width:u,height:m,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:s.jsx("path",{d:"M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z",fill:g})}),O0=re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function $2(u=.1){const m=D.useRef(null),[g,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const y=m.current;if(!y)return;const S=new IntersectionObserver(([M])=>{M.isIntersecting&&(r(!0),S.disconnect())},{threshold:u});return S.observe(y),()=>S.disconnect()},[u]),[m,g]}const Z2={FacebookIcon:H2,TwitterIcon:_2,YoutubeIcon:q2,InstagramIcon:Y2,DiscordIcon:G2},J2=f.footer`
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

  ${ie.mobile} {
    height: auto;
    min-height: 460px;
  }
`,K2=f.div`
  width: 100%;
  max-width: ${Bn};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;

  ${ie.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`,W2=f.div`
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

  ${u=>u.$inView&&Te`
      animation: ${O0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ie.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${ie.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,F2=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${ie.mobile} {
    align-items: center;
  }
`,I2=f.h2`
  margin: 0;
  font-family: ${q.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${ie.mobile} {
    font-size: 32px;
    text-align: center;
  }
`,P2=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_u=f.div`
  margin: 0;
  font-family: ${q.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${ie.mobile} {
    justify-content: center;
  }
`,qu=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ey=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,ty=f.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${ie.mobile} {
    width: 180px;
    height: auto;
  }
`,ay=f.p`
  margin: 0;
  font-family: ${q.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${ie.mobile} {
    font-size: 14px;
  }
`,ny=f.div`
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

  ${u=>u.$inView&&Te`
      animation: ${O0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ie.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${ie.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,ly=f.p`
  margin: 0;
  font-family: ${q.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${ie.mobile} {
    font-size: 12px;
    text-align: center;
  }
`,iy=f.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,oy=f.a`
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
`,sy=f.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

  ${ie.mobile} {
    gap: 16px;
  }
`,Yu=f.a`
  font-family: ${q.body};
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
`,uy=new Date().getFullYear(),Xu=({id:u})=>{const{contactTitle:m,location:g,phone:r,email:y,tagline:S,companyName:M,logoAlt:Y,socialLinks:H}=$e("footer"),[B,V]=$2(.1);return s.jsx(J2,{id:u,ref:B,children:s.jsxs(K2,{children:[s.jsxs(W2,{$inView:V,children:[s.jsxs(F2,{children:[s.jsx(I2,{children:m}),s.jsxs(P2,{children:[s.jsxs(_u,{children:[s.jsx(qu,{children:s.jsx(X2,{width:15,height:20,color:"#B095E3"})}),g]}),s.jsxs(_u,{children:[s.jsx(qu,{children:s.jsx(Q2,{width:18,height:18,color:"#B095E3"})}),r]}),s.jsxs(_u,{children:[s.jsx(qu,{children:s.jsx(V2,{width:18,height:18,color:"#B095E3"})}),y]})]}),s.jsxs(sy,{children:[s.jsx(Yu,{href:"#contact-learner",children:"Learner Form →"}),s.jsx(Yu,{href:"#contact-instructor",children:"Instructor Form →"}),s.jsx(Yu,{href:"#contact-partner",children:"Partner Form →"})]})]}),s.jsxs(ey,{children:[s.jsx(ty,{src:R2,alt:Y,loading:"lazy",decoding:"async"}),s.jsx(ay,{children:S})]})]}),s.jsxs(ny,{$inView:V,children:[s.jsxs(ly,{children:["© ",uy," ",M,". All Rights Reserved."]}),s.jsx(iy,{children:H.map(C=>{const ee=Z2[C.icon];return s.jsx(oy,{href:C.url,target:"_blank",rel:"noopener noreferrer","aria-label":C.name,children:s.jsx(ee,{})},C.name)})})]})]})})},cy="/assets/phone-screen-Jgi4cEKU.png",ry=re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function dy(u=.15){const m=D.useRef(null),[g,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const y=m.current;if(!y)return;const S=new IntersectionObserver(([M])=>{M.isIntersecting&&(r(!0),S.disconnect())},{threshold:u});return S.observe(y),()=>S.disconnect()},[u]),[m,g]}const fy=f.div`
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

  ${u=>u.$inView&&Te`
      animation: ${ry} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ie.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${ie.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
  }
`,py=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${ie.mobile} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`,hy=f.h2`
  margin: 0;
  font-family: ${q.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${ie.mobile} {
    font-size: 36px;
  }
`,my=f.p`
  margin: 0;
  font-family: ${q.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${ie.mobile} {
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
  }
`,gy=f.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${ie.mobile} {
    display: none;
  }
`,yy=f.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`,xy=f.img`
  width: 100%;
  height: 100%;
  display: block;
`,vy=({onSubmit:u,id:m})=>{const{title:g,subtitle:r,inputPlaceholder:y,buttonText:S}=$e("joinWaitlist"),M=$e("api"),[Y,H]=dy(.15),B=u||(V=>M0(M,V));return s.jsxs(fy,{id:m,ref:Y,$inView:H,children:[s.jsxs(py,{children:[s.jsx(hy,{children:g}),s.jsx(my,{children:r}),s.jsx(E0,{placeholder:y,buttonText:S,onSubmit:B})]}),s.jsx(gy,{children:s.jsx(yy,{children:s.jsx(xy,{src:cy,alt:"Phone Screen",loading:"lazy",decoding:"async"})})})]})},by="/assets/phone-screen-2-DrcEaGKY.png",wy=f.div`
  background: #ffffff1a;
  border-radius: 24px;
`,kn=f.h3`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
`;f.p`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
`;const Sy="/assets/roadmap-Cly0yicb.png",jy=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,zy=f.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`,Ty=()=>{const{roadmap:u}=$e("blocks");return s.jsxs(jy,{children:[s.jsx(kn,{children:u.title}),s.jsx(zy,{src:Sy,alt:"roadmap",loading:"lazy",decoding:"async"})]})},Ey="/assets/mentor-B_SVnfNn.png",My=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,Ay=f.img`
  position: absolute;
  bottom: 0;
  width: 52%;
`,Dy=()=>{const{mentorship:u}=$e("blocks");return s.jsxs(My,{children:[s.jsx(kn,{children:u.title}),s.jsx(Ay,{src:Ey,alt:"mentorship",loading:"lazy",decoding:"async"})]})},Cy="/assets/community-Bm68CTui.png",Oy=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,Uy=f.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`,Ly=()=>{const{community:u}=$e("blocks");return s.jsxs(Oy,{children:[s.jsx(kn,{children:u.title}),s.jsx(Uy,{src:Cy,alt:"community",loading:"lazy",decoding:"async"})]})},By="/assets/focus-timer-Dhb9AdeC.png",ky=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`,Ny=f.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`,Ry=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`,Hy=f(kn)`
  text-align: right;
  width: 50%;
`,_y=()=>{const{focusTimer:u}=$e("blocks");return s.jsxs(ky,{children:[s.jsx(Ry,{children:s.jsx(Hy,{children:u.title})}),s.jsx(Ny,{src:By,alt:"focus timer",loading:"lazy",decoding:"async"})]})},qy="/assets/streak-BhHFlVnO.png",Yy=f.div`
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
`;f.img`
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
`;const Gy=f(kn)`
  text-align: left;
`,Xy=f.img`
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
`,Qy=()=>{const{streaks:u}=$e("blocks");return s.jsxs(Yy,{children:[s.jsx(Gy,{children:u.title}),s.jsx(Xy,{src:qy,alt:"streak",loading:"lazy",decoding:"async"})]})},Vy="/assets/interview-prep-BdEyhCch.png",$y=f.div`
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
`,Zy=f.img`
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
`,Jy=()=>{const{interviewPrep:u}=$e("blocks");return s.jsxs($y,{children:[s.jsx(kn,{children:u.title}),s.jsx(Zy,{src:Vy,alt:"screen left",loading:"lazy",decoding:"async"})]})},Ky=f.div`
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
`,Nn=f(wy)`
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
`,Wy=f(Nn)`
  grid-column: span 6;
  height: 200px;
`,Fy=f(Nn)`
  grid-column: span 3;
`,Iy=f(Nn)`
  grid-column: span 3;
`,Py=f(Nn)`
  grid-column: span 4;
  min-height: 180px;
`,ex=f(Nn)`
  grid-column: span 4;
  min-height: 60px;
`,tx=f(Nn)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`,ax=()=>{const[u,m]=D.useState(null),g=D.useCallback(r=>{typeof window<"u"&&window.innerWidth>1e3||m(y=>y===r?null:r)},[]);return s.jsxs(Ky,{children:[s.jsx(Wy,{"data-tapped":u==="roadmap",onClick:()=>g("roadmap"),children:s.jsx(Ty,{})}),s.jsx(Fy,{"data-tapped":u==="mentorship",onClick:()=>g("mentorship"),children:s.jsx(Dy,{})}),s.jsx(Iy,{"data-tapped":u==="community",onClick:()=>g("community"),children:s.jsx(Ly,{})}),s.jsx(Py,{"data-tapped":u==="focusTimer",onClick:()=>g("focusTimer"),children:s.jsx(_y,{})}),s.jsx(tx,{"data-tapped":u==="interviewPrep",onClick:()=>g("interviewPrep"),children:s.jsx(Jy,{})}),s.jsx(ex,{"data-tapped":u==="streaks",onClick:()=>g("streaks"),children:s.jsx(Qy,{})})]})},U0=re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function nx(u=.1){const m=D.useRef(null),[g,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const y=m.current;if(!y)return;const S=new IntersectionObserver(([M])=>{M.isIntersecting&&(r(!0),S.disconnect())},{threshold:u});return S.observe(y),()=>S.disconnect()},[u]),[m,g]}const lx=f.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${ie.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`,ix=f.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${u=>u.$inView&&Te`
      animation: ${U0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ie.mobile} {
    display: none;
  }
`,ox=f.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`,sx=f.div`
  min-width: 0;
  opacity: 0;

  ${u=>u.$inView&&Te`
      animation: ${U0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,ux=()=>{const[u,m]=nx(.1);return s.jsxs(lx,{ref:u,children:[s.jsx(ix,{$inView:m,children:s.jsx(ox,{src:by,alt:"Phone Screen",loading:"lazy",decoding:"async"})}),s.jsx(sx,{$inView:m,children:s.jsx(ax,{})})]})},cx=f.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`,rx=f.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,dx=()=>s.jsxs(cx,{children:[s.jsx(Gu,{}),s.jsxs(rx,{children:[s.jsx(J1,{id:"home"}),s.jsx(qg,{}),s.jsx(Zg,{id:"products"}),s.jsx(ux,{}),s.jsx(N2,{id:"contact-us"}),s.jsx(vy,{}),s.jsx(Xu,{})]})]}),Qu={"frontend-development-course":{slug:"frontend-development-course",title:"Frontend Development Course – Learn React, HTML, CSS & JavaScript | Margg",metaDescription:"Master frontend development with Margg's roadmap-based course. Learn React, HTML, CSS, JavaScript, responsive design, and build real-world projects with expert mentorship. Enroll now.",keywords:"frontend development course, learn React, HTML CSS JavaScript course, frontend developer roadmap course, best frontend course India, web development course, UI development, responsive web design course, React course with projects, frontend bootcamp India",heroTitle:"Frontend Development Course",heroSubtitle:"Master Modern Web Development with a Structured Roadmap",heroDescription:"Learn to build beautiful, responsive, and production-ready web applications from scratch. Our roadmap-based frontend development course takes you from HTML basics to advanced React patterns — with real projects, one-on-one mentorship, and interview preparation.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why Choose Margg's Frontend Development Course?",content:`The demand for skilled frontend developers has never been higher. Companies across India and the world are looking for developers who can build fast, accessible, and visually stunning web applications. But most online courses teach isolated topics without connecting them into a career-ready skill set.

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

Commitment: ~12-15 hours per week including live sessions, exercises, and project work.`}],faqs:[{question:"Do I need a technical background for this data analysis course?",answer:"No. We start with Excel and basic data concepts, then progressively introduce SQL and Python. Students from commerce, arts, science, and engineering backgrounds have all succeeded in this course."},{question:"Which programming language is taught?",answer:"Python, which is the most popular language for data analysis. You'll specifically learn Pandas, NumPy, Matplotlib, and Seaborn — the core data analysis stack. We also teach SQL extensively for database querying."},{question:"Will I learn data visualization and dashboards?",answer:"Yes. Data visualization is a major focus. You'll learn to create charts, graphs, and interactive dashboards using Python libraries and understand principles of effective data storytelling."},{question:"Can this course help me get into data science?",answer:"Absolutely. Data analysis is the foundation of data science. After completing this course, you'll have the programming, statistics, and data manipulation skills needed to pursue machine learning and advanced data science topics."},{question:"What kind of job roles can I target after this course?",answer:"Common roles include Data Analyst, Business Analyst, Operations Analyst, Marketing Analyst, and Junior Data Scientist. These roles are available across industries including tech, finance, healthcare, and e-commerce."},{question:"Are there real datasets used in the course?",answer:"Yes. Every project uses real-world datasets — not toy examples. You'll work with actual e-commerce transaction data, social media metrics, financial data, and public datasets from government and research sources."}]}},m0=f.div`
  background: #090215;
  min-height: 100vh;
`,g0=f.section`
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
`,y0=f.div`
  max-width: 860px;
  margin: 0 auto;
`,fx=f.nav`
  margin-bottom: 24px;
  font-family: ${q.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,x0=f.h1`
  font-family: ${q.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,px=f.p`
  font-family: ${q.body};
  font-size: clamp(18px, 2.5vw, 24px);
  color: #D3C4EF;
  margin: 0 0 16px;
  font-weight: 400;
`,hx=f.p`
  font-family: ${q.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`,v0=f.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${q.body};
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
`,mx=f.main`
  max-width: ${Bn};
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`,gx=f.article`
  max-width: 820px;
  margin: 0 auto;
`,yx=f.section`
  margin-bottom: 56px;
`,xx=f.h2`
  font-family: ${q.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,b0=f.p`
  font-family: ${q.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`,vx=f.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`,bx=f.li`
  font-family: ${q.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`,wx=f.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,Sx=f.h2`
  font-family: ${q.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`,jx=f.details`
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
`,zx=f.summary`
  font-family: ${q.body};
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
`,Tx=f.div`
  font-family: ${q.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`,Ex=f.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,Mx=f.h2`
  font-family: ${q.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`,Ax=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`,Dx=f(j0)`
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
`,Cx=f.h3`
  font-family: ${q.heading};
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 8px;
  text-transform: uppercase;
`,Ox=f.p`
  font-family: ${q.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.5;
  margin: 0;
`,Ux=Object.keys(Qu);function Lx(){const{slug:u}=um(),m=Qu[u];if(!m)return s.jsxs(m0,{children:[s.jsx(Gu,{}),s.jsx(g0,{children:s.jsxs(y0,{children:[s.jsx(x0,{children:"Course Not Found"}),s.jsx(b0,{children:"The course you're looking for doesn't exist."}),s.jsx(v0,{href:"/",children:"Back to Home"})]})}),s.jsx(Xu,{})]});const g=Ux.filter(r=>r!==u).map(r=>Qu[r]);return s.jsxs(m0,{children:[s.jsx(Gu,{}),s.jsx(g0,{children:s.jsxs(y0,{children:[s.jsxs(fx,{children:[s.jsx(j0,{to:"/",children:"Home"})," / ",s.jsx("span",{children:m.heroTitle})]}),s.jsx(x0,{children:m.heroTitle}),s.jsx(px,{children:m.heroSubtitle}),s.jsx(hx,{children:m.heroDescription}),s.jsx(v0,{href:`/${m.ctaHash}`,children:m.ctaText})]})}),s.jsx(mx,{children:s.jsx(gx,{children:m.sections.map((r,y)=>s.jsxs(yx,{children:[s.jsx(xx,{children:r.heading}),s.jsx(b0,{children:r.content}),r.list&&s.jsx(vx,{children:r.list.map((S,M)=>s.jsx(bx,{children:S},M))})]},y))})}),m.faqs?.length>0&&s.jsxs(wx,{children:[s.jsx(Sx,{children:"Frequently Asked Questions"}),m.faqs.map((r,y)=>s.jsxs(jx,{children:[s.jsx(zx,{children:r.question}),s.jsx(Tx,{children:r.answer})]},y))]}),s.jsxs(Ex,{children:[s.jsx(Mx,{children:"Explore Other Courses"}),s.jsx(Ax,{children:g.map(r=>s.jsxs(Dx,{to:`/${r.slug}`,children:[s.jsx(Cx,{children:r.heroTitle}),s.jsx(Ox,{children:r.heroSubtitle})]},r.slug))})]}),s.jsx(Xu,{})]})}function Bx(){return s.jsxs(cm,{children:[s.jsx(Ff,{path:"/",element:s.jsx(dx,{})}),s.jsx(Ff,{path:"/:slug",element:s.jsx(Lx,{})})]})}const kx=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const Nx=lm({reducer:{app:vm,content:Om},preloadedState:kx});ym.hydrateRoot(document.getElementById("root"),s.jsx(D.StrictMode,{children:s.jsx(im,{store:Nx,children:s.jsx(rm,{children:s.jsx(Bx,{})})})}));
