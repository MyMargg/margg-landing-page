import{r as am,c as w0,u as nm,a as D,b as lm,P as im}from"./redux-ZgJ2Wkzd.js";import{r as om,u as um,L as S0,R as sm,a as Ff,B as cm}from"./vendor-C8045NFy.js";import{p as ue,c as f,s as Ee}from"./styles-CSKeg26X.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))r(g);new MutationObserver(g=>{for(const S of g)if(S.type==="childList")for(const j of S.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&r(j)}).observe(document,{childList:!0,subtree:!0});function y(g){const S={};return g.integrity&&(S.integrity=g.integrity),g.referrerPolicy&&(S.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?S.credentials="include":g.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function r(g){if(g.ep)return;g.ep=!0;const S=y(g);fetch(g.href,S)}})();var Ds={exports:{}},Dl={};var If;function rm(){if(If)return Dl;If=1;var s=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function y(r,g,S){var j=null;if(S!==void 0&&(j=""+S),g.key!==void 0&&(j=""+g.key),"key"in g){S={};for(var k in g)k!=="key"&&(S[k]=g[k])}else S=g;return g=S.ref,{$$typeof:s,type:r,key:j,ref:g!==void 0?g:null,props:S}}return Dl.Fragment=m,Dl.jsx=y,Dl.jsxs=y,Dl}var Pf;function dm(){return Pf||(Pf=1,Ds.exports=rm()),Ds.exports}var u=dm(),Cs={exports:{}},Cl={},Os={exports:{}},Us={};var e0;function fm(){return e0||(e0=1,(function(s){function m(E,C){var q=E.length;E.push(C);e:for(;0<q;){var pe=q-1>>>1,he=E[pe];if(0<g(he,C))E[pe]=C,E[q]=he,q=pe;else break e}}function y(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var C=E[0],q=E.pop();if(q!==C){E[0]=q;e:for(var pe=0,he=E.length,We=he>>>1;pe<We;){var xe=2*(pe+1)-1,ne=E[xe],Ne=xe+1,Lt=E[Ne];if(0>g(ne,q))Ne<he&&0>g(Lt,ne)?(E[pe]=Lt,E[Ne]=q,pe=Ne):(E[pe]=ne,E[xe]=q,pe=xe);else if(Ne<he&&0>g(Lt,q))E[pe]=Lt,E[Ne]=q,pe=Ne;else break e}}return C}function g(E,C){var q=E.sortIndex-C.sortIndex;return q!==0?q:E.id-C.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;s.unstable_now=function(){return S.now()}}else{var j=Date,k=j.now();s.unstable_now=function(){return j.now()-k}}var N=[],R=[],J=1,L=null,ae=3,fe=!1,be=!1,Me=!1,le=!1,ve=typeof setTimeout=="function"?setTimeout:null,He=typeof clearTimeout=="function"?clearTimeout:null,$e=typeof setImmediate<"u"?setImmediate:null;function Q(E){for(var C=y(R);C!==null;){if(C.callback===null)r(R);else if(C.startTime<=E)r(R),C.sortIndex=C.expirationTime,m(N,C);else break;C=y(R)}}function we(E){if(Me=!1,Q(E),!be)if(y(N)!==null)be=!0,Ue||(Ue=!0,V());else{var C=y(R);C!==null&&At(we,C.startTime-E)}}var Ue=!1,Be=-1,Ke=5,aa=-1;function A(){return le?!0:!(s.unstable_now()-aa<Ke)}function Y(){if(le=!1,Ue){var E=s.unstable_now();aa=E;var C=!0;try{e:{be=!1,Me&&(Me=!1,He(Be),Be=-1),fe=!0;var q=ae;try{t:{for(Q(E),L=y(N);L!==null&&!(L.expirationTime>E&&A());){var pe=L.callback;if(typeof pe=="function"){L.callback=null,ae=L.priorityLevel;var he=pe(L.expirationTime<=E);if(E=s.unstable_now(),typeof he=="function"){L.callback=he,Q(E),C=!0;break t}L===y(N)&&r(N),Q(E)}else r(N);L=y(N)}if(L!==null)C=!0;else{var We=y(R);We!==null&&At(we,We.startTime-E),C=!1}}break e}finally{L=null,ae=q,fe=!1}C=void 0}}finally{C?V():Ue=!1}}}var V;if(typeof $e=="function")V=function(){$e(Y)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Mt=ke.port2;ke.port1.onmessage=Y,V=function(){Mt.postMessage(null)}}else V=function(){ve(Y,0)};function At(E,C){Be=ve(function(){E(s.unstable_now())},C)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ke=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return ae},s.unstable_next=function(E){switch(ae){case 1:case 2:case 3:var C=3;break;default:C=ae}var q=ae;ae=C;try{return E()}finally{ae=q}},s.unstable_requestPaint=function(){le=!0},s.unstable_runWithPriority=function(E,C){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var q=ae;ae=E;try{return C()}finally{ae=q}},s.unstable_scheduleCallback=function(E,C,q){var pe=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,E){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=q+he,E={id:J++,callback:C,priorityLevel:E,startTime:q,expirationTime:he,sortIndex:-1},q>pe?(E.sortIndex=q,m(R,E),y(N)===null&&E===y(R)&&(Me?(He(Be),Be=-1):Me=!0,At(we,q-pe))):(E.sortIndex=he,m(N,E),be||fe||(be=!0,Ue||(Ue=!0,V()))),E},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(E){var C=ae;return function(){var q=ae;ae=C;try{return E.apply(this,arguments)}finally{ae=q}}}})(Us)),Us}var t0;function pm(){return t0||(t0=1,Os.exports=fm()),Os.exports}var a0;function hm(){if(a0)return Cl;a0=1;var s=pm(),m=am(),y=om();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function j(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(S(e)!==e)throw Error(r(188))}function R(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return N(l),e;if(i===n)return N(l),t;i=i.sibling}throw Error(r(188))}if(a.return!==n.return)a=l,n=i;else{for(var o=!1,c=l.child;c;){if(c===a){o=!0,a=l,n=i;break}if(c===n){o=!0,n=l,a=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===a){o=!0,a=i,n=l;break}if(c===n){o=!0,n=i,a=l;break}c=c.sibling}if(!o)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function J(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=J(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,ae=Symbol.for("react.element"),fe=Symbol.for("react.transitional.element"),be=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),He=Symbol.for("react.consumer"),$e=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),aa=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case ve:return"Profiler";case le:return"StrictMode";case we:return"Suspense";case Ue:return"SuspenseList";case aa:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case be:return"Portal";case $e:return e.displayName||"Context";case He:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Be:return t=e.displayName||null,t!==null?t:Mt(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Mt(e(t))}catch{}}return null}var At=Array.isArray,E=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},pe=[],he=-1;function We(e){return{current:e}}function xe(e){0>he||(e.current=pe[he],pe[he]=null,he--)}function ne(e,t){he++,pe[he]=e.current,e.current=t}var Ne=We(null),Lt=We(null),na=We(null),Ll=We(null);function Bl(e,t){switch(ne(na,t),ne(Lt,e),ne(Ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vf(t),e=wf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xe(Ne),ne(Ne,e)}function Ja(){xe(Ne),xe(Lt),xe(na)}function co(e){e.memoizedState!==null&&ne(Ll,e);var t=Ne.current,a=wf(t,e.type);t!==a&&(ne(Lt,e),ne(Ne,a))}function kl(e){Lt.current===e&&(xe(Ne),xe(Lt)),Ll.current===e&&(xe(Ll),Tl._currentValue=q)}var ro,Ks;function Da(e){if(ro===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ro=t&&t[1]||"",Ks=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ro+e+Ks}var fo=!1;function po(e,t){if(!e||fo)return"";fo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(w){var v=w}Reflect.construct(e,[],M)}else{try{M.call()}catch(w){v=w}e.call(M.prototype)}}else{try{throw Error()}catch(w){v=w}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(w){if(w&&v&&typeof w.stack=="string")return[w.stack,v.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),o=i[0],c=i[1];if(o&&c){var d=o.split(`
`),b=c.split(`
`);for(l=n=0;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;for(;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;if(n===d.length||l===b.length)for(n=d.length-1,l=b.length-1;1<=n&&0<=l&&d[n]!==b[l];)l--;for(;1<=n&&0<=l;n--,l--)if(d[n]!==b[l]){if(n!==1||l!==1)do if(n--,l--,0>l||d[n]!==b[l]){var z=`
`+d[n].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=n&&0<=l);break}}}finally{fo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Da(a):""}function L0(e,t){switch(e.tag){case 26:case 27:case 5:return Da(e.type);case 16:return Da("Lazy");case 13:return e.child!==t&&t!==null?Da("Suspense Fallback"):Da("Suspense");case 19:return Da("SuspenseList");case 0:case 15:return po(e.type,!1);case 11:return po(e.type.render,!1);case 1:return po(e.type,!0);case 31:return Da("Activity");default:return""}}function Ws(e){try{var t="",a=null;do t+=L0(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ho=Object.prototype.hasOwnProperty,mo=s.unstable_scheduleCallback,go=s.unstable_cancelCallback,B0=s.unstable_shouldYield,k0=s.unstable_requestPaint,ut=s.unstable_now,N0=s.unstable_getCurrentPriorityLevel,Fs=s.unstable_ImmediatePriority,Is=s.unstable_UserBlockingPriority,Nl=s.unstable_NormalPriority,R0=s.unstable_LowPriority,Ps=s.unstable_IdlePriority,_0=s.log,H0=s.unstable_setDisableYieldValue,Rn=null,st=null;function la(e){if(typeof _0=="function"&&H0(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(Rn,e)}catch{}}var ct=Math.clz32?Math.clz32:G0,q0=Math.log,Y0=Math.LN2;function G0(e){return e>>>=0,e===0?32:31-(q0(e)/Y0|0)|0}var Rl=256,_l=262144,Hl=4194304;function Ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ql(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~i,n!==0?l=Ca(n):(o&=c,o!==0?l=Ca(o):a||(a=c&~e,a!==0&&(l=Ca(a))))):(c=n&~i,c!==0?l=Ca(c):o!==0?l=Ca(o):a||(a=n&~e,a!==0&&(l=Ca(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function _n(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function X0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(){var e=Hl;return Hl<<=1,(Hl&62914560)===0&&(Hl=4194304),e}function yo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Hn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Q0(e,t,a,n,l,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,b=e.hiddenUpdates;for(a=o&~a;0<a;){var z=31-ct(a),M=1<<z;c[z]=0,d[z]=-1;var v=b[z];if(v!==null)for(b[z]=null,z=0;z<v.length;z++){var w=v[z];w!==null&&(w.lane&=-536870913)}a&=~M}n!==0&&tc(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function tc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ct(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function ac(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ct(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function nc(e,t){var a=t&-t;return a=(a&42)!==0?1:xo(a),(a&(e.suspendedLanes|t))!==0?0:a}function xo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lc(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:Qf(e.type))}function ic(e,t){var a=C.p;try{return C.p=e,t()}finally{C.p=a}}var ia=Math.random().toString(36).slice(2),qe="__reactFiber$"+ia,et="__reactProps$"+ia,Ka="__reactContainer$"+ia,vo="__reactEvents$"+ia,V0="__reactListeners$"+ia,$0="__reactHandles$"+ia,oc="__reactResources$"+ia,qn="__reactMarker$"+ia;function wo(e){delete e[qe],delete e[et],delete e[vo],delete e[V0],delete e[$0]}function Wa(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ka]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Af(e);e!==null;){if(a=e[qe])return a;e=Af(e)}return t}e=a,a=e.parentNode}return null}function Fa(e){if(e=e[qe]||e[Ka]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Yn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Ia(e){var t=e[oc];return t||(t=e[oc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Re(e){e[qn]=!0}var uc=new Set,sc={};function Oa(e,t){Pa(e,t),Pa(e+"Capture",t)}function Pa(e,t){for(sc[e]=t,e=0;e<t.length;e++)uc.add(t[e])}var Z0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cc={},rc={};function J0(e){return ho.call(rc,e)?!0:ho.call(cc,e)?!1:Z0.test(e)?rc[e]=!0:(cc[e]=!0,!1)}function Yl(e,t,a){if(J0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function K0(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){if(!e._valueTracker){var t=dc(e)?"checked":"value";e._valueTracker=K0(e,t,""+e[t])}}function fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=dc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W0=/[\n"\\]/g;function xt(e){return e.replace(W0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jo(e,t,a,n,l,i,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?zo(e,o,yt(t)):a!=null?zo(e,o,yt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+yt(c):e.removeAttribute("name")}function pc(e,t,a,n,l,i,o,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){So(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),So(e)}function zo(e,t,a){t==="number"&&Xl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function hc(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function mc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(r(92));if(At(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),So(e)}function tn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||F0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yc(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&gc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&gc(e,i,t[i])}function To(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(e){return P0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var Eo=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,nn=null;function xc(e){var t=Fa(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[et]||null;if(!l)throw Error(r(90));jo(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&fc(n)}break e;case"textarea":hc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&en(e,!!a.multiple,t,!1)}}}var Ao=!1;function bc(e,t,a){if(Ao)return e(t,a);Ao=!0;try{var n=e(t);return n}finally{if(Ao=!1,(an!==null||nn!==null)&&(Oi(),an&&(t=an,e=nn,nn=an=null,xc(t),e)))for(t=0;t<e.length;t++)xc(e[t])}}function Gn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[et]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Do=!1;if(qt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Do=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Do=!1}var oa=null,Co=null,Vl=null;function vc(){if(Vl)return Vl;var e,t=Co,a=t.length,n,l="value"in oa?oa.value:oa.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===l[i-n];n++);return Vl=l.slice(e,1<n?1-n:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function wc(){return!1}function tt(e){function t(a,n,l,i,o){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zl:wc,this.isPropagationStopped=wc,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=tt(Ua),Qn=L({},Ua,{view:0,detail:0}),ep=tt(Qn),Oo,Uo,Vn,Kl=L({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(Oo=e.screenX-Vn.screenX,Uo=e.screenY-Vn.screenY):Uo=Oo=0,Vn=e),Oo)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),Sc=tt(Kl),tp=L({},Kl,{dataTransfer:0}),ap=tt(tp),np=L({},Qn,{relatedTarget:0}),Lo=tt(np),lp=L({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=tt(lp),op=L({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),up=tt(op),sp=L({},Ua,{data:0}),jc=tt(sp),cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dp[e])?!!t[e]:!1}function Bo(){return fp}var pp=L({},Qn,{key:function(e){if(e.key){var t=cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bo,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=tt(pp),mp=L({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=tt(mp),gp=L({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bo}),yp=tt(gp),xp=L({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=tt(xp),vp=L({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=tt(vp),Sp=L({},Ua,{newState:0,oldState:0}),jp=tt(Sp),zp=[9,13,27,32],ko=qt&&"CompositionEvent"in window,$n=null;qt&&"documentMode"in document&&($n=document.documentMode);var Tp=qt&&"TextEvent"in window&&!$n,Tc=qt&&(!ko||$n&&8<$n&&11>=$n),Ec=" ",Mc=!1;function Ac(e,t){switch(e){case"keyup":return zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function Ep(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Mc=!0,Ec);case"textInput":return e=t.data,e===Ec&&Mc?null:e;default:return null}}function Mp(e,t){if(ln)return e==="compositionend"||!ko&&Ac(e,t)?(e=vc(),Vl=Co=oa=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Oc(e,t,a,n){an?nn?nn.push(n):nn=[n]:an=n,t=_i(t,"onChange"),0<t.length&&(a=new Jl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Zn=null,Jn=null;function Dp(e){hf(e,0)}function Wl(e){var t=Yn(e);if(fc(t))return e}function Uc(e,t){if(e==="change")return t}var Lc=!1;if(qt){var No;if(qt){var Ro="oninput"in document;if(!Ro){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Ro=typeof Bc.oninput=="function"}No=Ro}else No=!1;Lc=No&&(!document.documentMode||9<document.documentMode)}function kc(){Zn&&(Zn.detachEvent("onpropertychange",Nc),Jn=Zn=null)}function Nc(e){if(e.propertyName==="value"&&Wl(Jn)){var t=[];Oc(t,Jn,e,Mo(e)),bc(Dp,t)}}function Cp(e,t,a){e==="focusin"?(kc(),Zn=t,Jn=a,Zn.attachEvent("onpropertychange",Nc)):e==="focusout"&&kc()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(Jn)}function Up(e,t){if(e==="click")return Wl(t)}function Lp(e,t){if(e==="input"||e==="change")return Wl(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Bp;function Kn(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ho.call(t,l)||!rt(e[l],t[l]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var a=Rc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rc(a)}}function Hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xl(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kp=qt&&"documentMode"in document&&11>=document.documentMode,on=null,Ho=null,Wn=null,qo=!1;function Yc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qo||on==null||on!==Xl(n)||(n=on,"selectionStart"in n&&_o(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wn&&Kn(Wn,n)||(Wn=n,n=_i(Ho,"onSelect"),0<n.length&&(t=new Jl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=on)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var un={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Yo={},Gc={};qt&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete un.animationend.animation,delete un.animationiteration.animation,delete un.animationstart.animation),"TransitionEvent"in window||delete un.transitionend.transition);function Ba(e){if(Yo[e])return Yo[e];if(!un[e])return e;var t=un[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Gc)return Yo[e]=t[a];return e}var Xc=Ba("animationend"),Qc=Ba("animationiteration"),Vc=Ba("animationstart"),Np=Ba("transitionrun"),Rp=Ba("transitionstart"),_p=Ba("transitioncancel"),$c=Ba("transitionend"),Zc=new Map,Go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Go.push("scrollEnd");function Dt(e,t){Zc.set(e,t),Oa(t,[e])}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],sn=0,Xo=0;function Il(){for(var e=sn,t=Xo=sn=0;t<e;){var a=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var l=bt[t];bt[t++]=null;var i=bt[t];if(bt[t++]=null,n!==null&&l!==null){var o=n.pending;o===null?l.next=l:(l.next=o.next,o.next=l),n.pending=l}i!==0&&Jc(a,l,i)}}function Pl(e,t,a,n){bt[sn++]=e,bt[sn++]=t,bt[sn++]=a,bt[sn++]=n,Xo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Qo(e,t,a,n){return Pl(e,t,a,n),ei(e)}function ka(e,t){return Pl(e,null,null,t),ei(e)}function Jc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-ct(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function ei(e){if(50<xl)throw xl=0,Pu=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cn={};function Hp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,n){return new Hp(e,t,a,n)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,a,n,l,i){var o=0;if(n=e,typeof e=="function")Vo(e)&&(o=1);else if(typeof e=="string")o=Qh(e,a,Ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case aa:return e=dt(31,a,t,l),e.elementType=aa,e.lanes=i,e;case Me:return Na(a.children,l,i,t);case le:o=8,l|=24;break;case ve:return e=dt(12,a,t,l|2),e.elementType=ve,e.lanes=i,e;case we:return e=dt(13,a,t,l),e.elementType=we,e.lanes=i,e;case Ue:return e=dt(19,a,t,l),e.elementType=Ue,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $e:o=10;break e;case He:o=9;break e;case Q:o=11;break e;case Be:o=14;break e;case Ke:o=16,n=null;break e}o=29,a=Error(r(130,e===null?"null":typeof e,"")),n=null}return t=dt(o,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Na(e,t,a,n){return e=dt(7,e,n,t),e.lanes=a,e}function $o(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function Wc(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Zo(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fc=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var a=Fc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ws(t)},Fc.set(e,t),t)}return{value:e,source:t,stack:Ws(t)}}var rn=[],dn=0,ai=null,Fn=0,wt=[],St=0,ua=null,Bt=1,kt="";function Gt(e,t){rn[dn++]=Fn,rn[dn++]=ai,ai=e,Fn=t}function Ic(e,t,a){wt[St++]=Bt,wt[St++]=kt,wt[St++]=ua,ua=e;var n=Bt;e=kt;var l=32-ct(n)-1;n&=~(1<<l),a+=1;var i=32-ct(t)+l;if(30<i){var o=l-l%5;i=(n&(1<<o)-1).toString(32),n>>=o,l-=o,Bt=1<<32-ct(t)+l|a<<l|n,kt=i+e}else Bt=1<<i|a<<l|n,kt=e}function Jo(e){e.return!==null&&(Gt(e,1),Ic(e,1,0))}function Ko(e){for(;e===ai;)ai=rn[--dn],rn[dn]=null,Fn=rn[--dn],rn[dn]=null;for(;e===ua;)ua=wt[--St],wt[St]=null,kt=wt[--St],wt[St]=null,Bt=wt[--St],wt[St]=null}function Pc(e,t){wt[St++]=Bt,wt[St++]=kt,wt[St++]=ua,Bt=t.id,kt=t.overflow,ua=e}var Ye=null,me=null,F=!1,sa=null,jt=!1,Wo=Error(r(519));function ca(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw In(vt(t,e)),Wo}function er(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[qe]=e,t[et]=n,a){case"dialog":Z("cancel",t),Z("close",t);break;case"iframe":case"object":case"embed":Z("load",t);break;case"video":case"audio":for(a=0;a<vl.length;a++)Z(vl[a],t);break;case"source":Z("error",t);break;case"img":case"image":case"link":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"input":Z("invalid",t),pc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Z("invalid",t);break;case"textarea":Z("invalid",t),mc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||xf(t.textContent,a)?(n.popover!=null&&(Z("beforetoggle",t),Z("toggle",t)),n.onScroll!=null&&Z("scroll",t),n.onScrollEnd!=null&&Z("scrollend",t),n.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||ca(e,!0)}function tr(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:Ye=Ye.return}}function fn(e){if(e!==Ye)return!1;if(!F)return tr(e),F=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hs(e.type,e.memoizedProps)),a=!a),a&&me&&ca(e),tr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));me=Mf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));me=Mf(e)}else t===27?(t=me,ja(e.type)?(e=bs,bs=null,me=e):me=t):me=Ye?Tt(e.stateNode.nextSibling):null;return!0}function Ra(){me=Ye=null,F=!1}function Fo(){var e=sa;return e!==null&&(it===null?it=e:it.push.apply(it,e),sa=null),e}function In(e){sa===null?sa=[e]:sa.push(e)}var Io=We(null),_a=null,Xt=null;function ra(e,t,a){ne(Io,t._currentValue),t._currentValue=a}function Qt(e){e._currentValue=Io.current,xe(Io)}function Po(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function eu(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=l;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Po(i.return,a,e),n||(o=null);break e}i=c.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(r(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Po(o,a,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function pn(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var c=l.type;rt(l.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(l===Ll.current){if(o=l.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Tl):e=[Tl])}l=l.return}e!==null&&eu(t,e,a,n),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){_a=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return ar(_a,e)}function li(e,t){return _a===null&&Ha(e),ar(e,t)}function ar(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Xt===null){if(e===null)throw Error(r(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return a}var qp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Yp=s.unstable_scheduleCallback,Gp=s.unstable_NormalPriority,Ae={$$typeof:$e,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tu(){return{controller:new qp,data:new Map,refCount:0}}function Pn(e){e.refCount--,e.refCount===0&&Yp(Gp,function(){e.controller.abort()})}var el=null,au=0,hn=0,mn=null;function Xp(e,t){if(el===null){var a=el=[];au=0,hn=is(),mn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return au++,t.then(nr,nr),t}function nr(){if(--au===0&&el!==null){mn!==null&&(mn.status="fulfilled");var e=el;el=null,hn=0,mn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var lr=E.S;E.S=function(e,t){Yd=ut(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xp(e,t),lr!==null&&lr(e,t)};var qa=We(null);function nu(){var e=qa.current;return e!==null?e:de.pooledCache}function ii(e,t){t===null?ne(qa,qa.current):ne(qa,t.pool)}function ir(){var e=nu();return e===null?null:{parent:Ae._currentValue,pool:e}}var gn=Error(r(460)),lu=Error(r(474)),oi=Error(r(542)),ui={then:function(){}};function or(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ur(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ht,Ht),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cr(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cr(e),e}throw Ga=t,gn}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ga=a,gn):a}}var Ga=null;function sr(){if(Ga===null)throw Error(r(459));var e=Ga;return Ga=null,e}function cr(e){if(e===gn||e===oi)throw Error(r(483))}var yn=null,tl=0;function si(e){var t=tl;return tl+=1,yn===null&&(yn=[]),ur(yn,e,t)}function al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ci(e,t){throw t.$$typeof===ae?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rr(e){function t(h,p){if(e){var x=h.deletions;x===null?(h.deletions=[p],h.flags|=16):x.push(p)}}function a(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function n(h){for(var p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function l(h,p){return h=Yt(h,p),h.index=0,h.sibling=null,h}function i(h,p,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<p?(h.flags|=67108866,p):x):(h.flags|=67108866,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function c(h,p,x,T){return p===null||p.tag!==6?(p=$o(x,h.mode,T),p.return=h,p):(p=l(p,x),p.return=h,p)}function d(h,p,x,T){var B=x.type;return B===Me?z(h,p,x.props.children,T,x.key):p!==null&&(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ke&&Ya(B)===p.type)?(p=l(p,x.props),al(p,x),p.return=h,p):(p=ti(x.type,x.key,x.props,null,h.mode,T),al(p,x),p.return=h,p)}function b(h,p,x,T){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Zo(x,h.mode,T),p.return=h,p):(p=l(p,x.children||[]),p.return=h,p)}function z(h,p,x,T,B){return p===null||p.tag!==7?(p=Na(x,h.mode,T,B),p.return=h,p):(p=l(p,x),p.return=h,p)}function M(h,p,x){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=$o(""+p,h.mode,x),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fe:return x=ti(p.type,p.key,p.props,null,h.mode,x),al(x,p),x.return=h,x;case be:return p=Zo(p,h.mode,x),p.return=h,p;case Ke:return p=Ya(p),M(h,p,x)}if(At(p)||V(p))return p=Na(p,h.mode,x,null),p.return=h,p;if(typeof p.then=="function")return M(h,si(p),x);if(p.$$typeof===$e)return M(h,li(h,p),x);ci(h,p)}return null}function v(h,p,x,T){var B=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return B!==null?null:c(h,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fe:return x.key===B?d(h,p,x,T):null;case be:return x.key===B?b(h,p,x,T):null;case Ke:return x=Ya(x),v(h,p,x,T)}if(At(x)||V(x))return B!==null?null:z(h,p,x,T,null);if(typeof x.then=="function")return v(h,p,si(x),T);if(x.$$typeof===$e)return v(h,p,li(h,x),T);ci(h,x)}return null}function w(h,p,x,T,B){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return h=h.get(x)||null,c(p,h,""+T,B);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case fe:return h=h.get(T.key===null?x:T.key)||null,d(p,h,T,B);case be:return h=h.get(T.key===null?x:T.key)||null,b(p,h,T,B);case Ke:return T=Ya(T),w(h,p,x,T,B)}if(At(T)||V(T))return h=h.get(x)||null,z(p,h,T,B,null);if(typeof T.then=="function")return w(h,p,x,si(T),B);if(T.$$typeof===$e)return w(h,p,x,li(p,T),B);ci(p,T)}return null}function O(h,p,x,T){for(var B=null,I=null,U=p,X=p=0,W=null;U!==null&&X<x.length;X++){U.index>X?(W=U,U=null):W=U.sibling;var P=v(h,U,x[X],T);if(P===null){U===null&&(U=W);break}e&&U&&P.alternate===null&&t(h,U),p=i(P,p,X),I===null?B=P:I.sibling=P,I=P,U=W}if(X===x.length)return a(h,U),F&&Gt(h,X),B;if(U===null){for(;X<x.length;X++)U=M(h,x[X],T),U!==null&&(p=i(U,p,X),I===null?B=U:I.sibling=U,I=U);return F&&Gt(h,X),B}for(U=n(U);X<x.length;X++)W=w(U,h,X,x[X],T),W!==null&&(e&&W.alternate!==null&&U.delete(W.key===null?X:W.key),p=i(W,p,X),I===null?B=W:I.sibling=W,I=W);return e&&U.forEach(function(Aa){return t(h,Aa)}),F&&Gt(h,X),B}function _(h,p,x,T){if(x==null)throw Error(r(151));for(var B=null,I=null,U=p,X=p=0,W=null,P=x.next();U!==null&&!P.done;X++,P=x.next()){U.index>X?(W=U,U=null):W=U.sibling;var Aa=v(h,U,P.value,T);if(Aa===null){U===null&&(U=W);break}e&&U&&Aa.alternate===null&&t(h,U),p=i(Aa,p,X),I===null?B=Aa:I.sibling=Aa,I=Aa,U=W}if(P.done)return a(h,U),F&&Gt(h,X),B;if(U===null){for(;!P.done;X++,P=x.next())P=M(h,P.value,T),P!==null&&(p=i(P,p,X),I===null?B=P:I.sibling=P,I=P);return F&&Gt(h,X),B}for(U=n(U);!P.done;X++,P=x.next())P=w(U,h,X,P.value,T),P!==null&&(e&&P.alternate!==null&&U.delete(P.key===null?X:P.key),p=i(P,p,X),I===null?B=P:I.sibling=P,I=P);return e&&U.forEach(function(tm){return t(h,tm)}),F&&Gt(h,X),B}function re(h,p,x,T){if(typeof x=="object"&&x!==null&&x.type===Me&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case fe:e:{for(var B=x.key;p!==null;){if(p.key===B){if(B=x.type,B===Me){if(p.tag===7){a(h,p.sibling),T=l(p,x.props.children),T.return=h,h=T;break e}}else if(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ke&&Ya(B)===p.type){a(h,p.sibling),T=l(p,x.props),al(T,x),T.return=h,h=T;break e}a(h,p);break}else t(h,p);p=p.sibling}x.type===Me?(T=Na(x.props.children,h.mode,T,x.key),T.return=h,h=T):(T=ti(x.type,x.key,x.props,null,h.mode,T),al(T,x),T.return=h,h=T)}return o(h);case be:e:{for(B=x.key;p!==null;){if(p.key===B)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){a(h,p.sibling),T=l(p,x.children||[]),T.return=h,h=T;break e}else{a(h,p);break}else t(h,p);p=p.sibling}T=Zo(x,h.mode,T),T.return=h,h=T}return o(h);case Ke:return x=Ya(x),re(h,p,x,T)}if(At(x))return O(h,p,x,T);if(V(x)){if(B=V(x),typeof B!="function")throw Error(r(150));return x=B.call(x),_(h,p,x,T)}if(typeof x.then=="function")return re(h,p,si(x),T);if(x.$$typeof===$e)return re(h,p,li(h,x),T);ci(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,p!==null&&p.tag===6?(a(h,p.sibling),T=l(p,x),T.return=h,h=T):(a(h,p),T=$o(x,h.mode,T),T.return=h,h=T),o(h)):a(h,p)}return function(h,p,x,T){try{tl=0;var B=re(h,p,x,T);return yn=null,B}catch(U){if(U===gn||U===oi)throw U;var I=dt(29,U,null,h.mode);return I.lanes=T,I.return=h,I}}}var Xa=rr(!0),dr=rr(!1),da=!1;function iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ee&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ei(e),Jc(e,null,a),t}return Pl(e,n,t,a),ei(e)}function nl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ac(e,a)}}function uu(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var su=!1;function ll(){if(su){var e=mn;if(e!==null)throw e}}function il(e,t,a,n){su=!1;var l=e.updateQueue;da=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,b=d.next;d.next=null,o===null?i=b:o.next=b,o=d;var z=e.alternate;z!==null&&(z=z.updateQueue,c=z.lastBaseUpdate,c!==o&&(c===null?z.firstBaseUpdate=b:c.next=b,z.lastBaseUpdate=d))}if(i!==null){var M=l.baseState;o=0,z=b=d=null,c=i;do{var v=c.lane&-536870913,w=v!==c.lane;if(w?(K&v)===v:(n&v)===v){v!==0&&v===hn&&(su=!0),z!==null&&(z=z.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var O=e,_=c;v=t;var re=a;switch(_.tag){case 1:if(O=_.payload,typeof O=="function"){M=O.call(re,M,v);break e}M=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=_.payload,v=typeof O=="function"?O.call(re,M,v):O,v==null)break e;M=L({},M,v);break e;case 2:da=!0}}v=c.callback,v!==null&&(e.flags|=64,w&&(e.flags|=8192),w=l.callbacks,w===null?l.callbacks=[v]:w.push(v))}else w={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},z===null?(b=z=w,d=M):z=z.next=w,o|=v;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;w=c,c=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);z===null&&(d=M),l.baseState=d,l.firstBaseUpdate=b,l.lastBaseUpdate=z,i===null&&(l.shared.lanes=0),xa|=o,e.lanes=o,e.memoizedState=M}}function fr(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function pr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fr(a[e],t)}var xn=We(null),ri=We(0);function hr(e,t){e=Pt,ne(ri,e),ne(xn,t),Pt=e|t.baseLanes}function cu(){ne(ri,Pt),ne(xn,xn.current)}function ru(){Pt=ri.current,xe(xn),xe(ri)}var ft=We(null),zt=null;function ha(e){var t=e.alternate;ne(ze,ze.current&1),ne(ft,e),zt===null&&(t===null||xn.current!==null||t.memoizedState!==null)&&(zt=e)}function du(e){ne(ze,ze.current),ne(ft,e),zt===null&&(zt=e)}function mr(e){e.tag===22?(ne(ze,ze.current),ne(ft,e),zt===null&&(zt=e)):ma()}function ma(){ne(ze,ze.current),ne(ft,ft.current)}function pt(e){xe(ft),zt===e&&(zt=null),xe(ze)}var ze=We(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ys(a)||xs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,G=null,se=null,De=null,fi=!1,bn=!1,Qa=!1,pi=0,ol=0,vn=null,Vp=0;function Se(){throw Error(r(321))}function fu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!rt(e[a],t[a]))return!1;return!0}function pu(e,t,a,n,l,i){return Vt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ir:Au,Qa=!1,i=a(n,l),Qa=!1,bn&&(i=yr(t,a,n,l)),gr(e),i}function gr(e){E.H=cl;var t=se!==null&&se.next!==null;if(Vt=0,De=se=G=null,fi=!1,ol=0,vn=null,t)throw Error(r(300));e===null||Ce||(e=e.dependencies,e!==null&&ni(e)&&(Ce=!0))}function yr(e,t,a,n){G=e;var l=0;do{if(bn&&(vn=null),ol=0,bn=!1,25<=l)throw Error(r(301));if(l+=1,De=se=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}E.H=Pr,i=t(a,n)}while(bn);return i}function $p(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?ul(t):t,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(G.flags|=1024),t}function hu(){var e=pi!==0;return pi=0,e}function mu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function gu(e){if(fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fi=!1}Vt=0,De=se=G=null,bn=!1,ol=pi=0,vn=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?G.memoizedState=De=e:De=De.next=e,De}function Te(){if(se===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=De===null?G.memoizedState:De.next;if(t!==null)De=t,se=e;else{if(e===null)throw G.alternate===null?Error(r(467)):Error(r(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},De===null?G.memoizedState=De=e:De=De.next=e}return De}function hi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var t=ol;return ol+=1,vn===null&&(vn=[]),e=ur(vn,e,t),t=G,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ir:Au),e}function mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===$e)return Ge(e)}throw Error(r(438,String(e)))}function yu(e){var t=null,a=G.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=G.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=hi(),G.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=A;return t.index++,a}function $t(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=Te();return xu(t,se,e)}function xu(e,t,a){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var c=o=null,d=null,b=t,z=!1;do{var M=b.lane&-536870913;if(M!==b.lane?(K&M)===M:(Vt&M)===M){var v=b.revertLane;if(v===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),M===hn&&(z=!0);else if((Vt&v)===v){b=b.next,v===hn&&(z=!0);continue}else M={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(c=d=M,o=i):d=d.next=M,G.lanes|=v,xa|=v;M=b.action,Qa&&a(i,M),i=b.hasEagerState?b.eagerState:a(i,M)}else v={lane:M,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},d===null?(c=d=v,o=i):d=d.next=v,G.lanes|=M,xa|=M;b=b.next}while(b!==null&&b!==t);if(d===null?o=i:d.next=c,!rt(i,e.memoizedState)&&(Ce=!0,z&&(a=mn,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=d,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function bu(e){var t=Te(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);rt(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function xr(e,t,a){var n=G,l=Te(),i=F;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=t();var o=!rt((se||l).memoizedState,a);if(o&&(l.memoizedState=a,Ce=!0),l=l.queue,Su(wr.bind(null,n,l,e),[e]),l.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,wn(9,{destroy:void 0},vr.bind(null,n,l,a,t),null),de===null)throw Error(r(349));i||(Vt&127)!==0||br(n,t,a)}return a}function br(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t=hi(),G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function vr(e,t,a,n){t.value=a,t.getSnapshot=n,Sr(t)&&jr(e)}function wr(e,t,a){return a(function(){Sr(t)&&jr(e)})}function Sr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!rt(e,a)}catch{return!0}}function jr(e){var t=ka(e,2);t!==null&&ot(t,e,2)}function vu(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Qa){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function zr(e,t,a,n){return e.baseState=a,xu(e,se,typeof n=="function"?n:$t)}function Zp(e,t,a,n,l){if(bi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};E.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Tr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Tr(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=E.T,o={};E.T=o;try{var c=a(l,n),d=E.S;d!==null&&d(o,c),Er(e,t,c)}catch(b){wu(e,t,b)}finally{i!==null&&o.types!==null&&(i.types=o.types),E.T=i}}else try{i=a(l,n),Er(e,t,i)}catch(b){wu(e,t,b)}}function Er(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Mr(e,t,n)},function(n){return wu(e,t,n)}):Mr(e,t,a)}function Mr(e,t,a){t.status="fulfilled",t.value=a,Ar(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Tr(e,a)))}function wu(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Ar(t),t=t.next;while(t!==n)}e.action=null}function Ar(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dr(e,t){return t}function Cr(e,t){if(F){var a=de.formState;if(a!==null){e:{var n=G;if(F){if(me){t:{for(var l=me,i=jt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Tt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){me=Tt(l.nextSibling),n=l.data==="F!";break e}}ca(n)}n=!1}n&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:t},a.queue=n,a=Kr.bind(null,G,n),n.dispatch=a,n=vu(!1),i=Mu.bind(null,G,!1,n.queue),n=Fe(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Zp.bind(null,G,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Or(e){var t=Te();return Ur(t,se,e)}function Ur(e,t,a){if(t=xu(e,t,Dr)[0],e=gi($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ul(t)}catch(o){throw o===gn?oi:o}else n=t;t=Te();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(G.flags|=2048,wn(9,{destroy:void 0},Jp.bind(null,l,a),null)),[n,i,e]}function Jp(e,t){e.action=t}function Lr(e){var t=Te(),a=se;if(a!==null)return Ur(t,a,e);Te(),t=t.memoizedState,a=Te();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function wn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=G.updateQueue,t===null&&(t=hi(),G.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Br(){return Te().memoizedState}function yi(e,t,a,n){var l=Fe();G.flags|=e,l.memoizedState=wn(1|t,{destroy:void 0},a,n===void 0?null:n)}function xi(e,t,a,n){var l=Te();n=n===void 0?null:n;var i=l.memoizedState.inst;se!==null&&n!==null&&fu(n,se.memoizedState.deps)?l.memoizedState=wn(t,i,a,n):(G.flags|=e,l.memoizedState=wn(1|t,i,a,n))}function kr(e,t){yi(8390656,8,e,t)}function Su(e,t){xi(2048,8,e,t)}function Kp(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=hi(),G.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Nr(e){var t=Te().memoizedState;return Kp({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Rr(e,t){return xi(4,2,e,t)}function _r(e,t){return xi(4,4,e,t)}function Hr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qr(e,t,a){a=a!=null?a.concat([e]):null,xi(4,4,Hr.bind(null,t,e),a)}function ju(){}function Yr(e,t){var a=Te();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&fu(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Gr(e,t){var a=Te();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&fu(t,n[1]))return n[0];if(n=e(),Qa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n}function zu(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(K&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Xd(),G.lanes|=e,xa|=e,a)}function Xr(e,t,a,n){return rt(a,t)?a:xn.current!==null?(e=zu(e,a,n),rt(e,t)||(Ce=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(K&261930)===0?(Ce=!0,e.memoizedState=a):(e=Xd(),G.lanes|=e,xa|=e,t)}function Qr(e,t,a,n,l){var i=C.p;C.p=i!==0&&8>i?i:8;var o=E.T,c={};E.T=c,Mu(e,!1,t,a);try{var d=l(),b=E.S;if(b!==null&&b(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var z=Qp(d,n);sl(e,t,z,gt(e))}else sl(e,t,n,gt(e))}catch(M){sl(e,t,{then:function(){},status:"rejected",reason:M},gt())}finally{C.p=i,o!==null&&c.types!==null&&(o.types=c.types),E.T=o}}function Wp(){}function Tu(e,t,a,n){if(e.tag!==5)throw Error(r(476));var l=Vr(e).queue;Qr(e,l,t,q,a===null?Wp:function(){return $r(e),a(n)})}function Vr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $r(e){var t=Vr(e);t.next===null&&(t=e.alternate.memoizedState),sl(e,t.next.queue,{},gt())}function Eu(){return Ge(Tl)}function Zr(){return Te().memoizedState}function Jr(){return Te().memoizedState}function Fp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=fa(a);var n=pa(t,e,a);n!==null&&(ot(n,t,a),nl(n,t,a)),t={cache:tu()},e.payload=t;return}t=t.return}}function Ip(e,t,a){var n=gt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bi(e)?Wr(t,a):(a=Qo(e,t,a,n),a!==null&&(ot(a,e,n),Fr(a,t,n)))}function Kr(e,t,a){var n=gt();sl(e,t,a,n)}function sl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bi(e))Wr(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,c=i(o,a);if(l.hasEagerState=!0,l.eagerState=c,rt(c,o))return Pl(e,t,l,0),de===null&&Il(),!1}catch{}if(a=Qo(e,t,l,n),a!==null)return ot(a,e,n),Fr(a,t,n),!0}return!1}function Mu(e,t,a,n){if(n={lane:2,revertLane:is(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},bi(e)){if(t)throw Error(r(479))}else t=Qo(e,a,n,2),t!==null&&ot(t,e,2)}function bi(e){var t=e.alternate;return e===G||t!==null&&t===G}function Wr(e,t){bn=fi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fr(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ac(e,a)}}var cl={readContext:Ge,use:mi,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};cl.useEffectEvent=Se;var Ir={readContext:Ge,use:mi,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:kr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,yi(4194308,4,Hr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){yi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var n=e();if(Qa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Fe();if(a!==void 0){var l=a(t);if(Qa){la(!0);try{a(t)}finally{la(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Ip.bind(null,G,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=vu(e);var t=e.queue,a=Kr.bind(null,G,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,t){var a=Fe();return zu(a,e,t)},useTransition:function(){var e=vu(!1);return e=Qr.bind(null,G,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=G,l=Fe();if(F){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),de===null)throw Error(r(349));(K&127)!==0||br(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,kr(wr.bind(null,n,i,e),[e]),n.flags|=2048,wn(9,{destroy:void 0},vr.bind(null,n,i,a,t),null),a},useId:function(){var e=Fe(),t=de.identifierPrefix;if(F){var a=kt,n=Bt;a=(n&~(1<<32-ct(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=pi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Vp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Eu,useFormState:Cr,useActionState:Cr,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mu.bind(null,G,!0,a),a.dispatch=t,[e,t]},useMemoCache:yu,useCacheRefresh:function(){return Fe().memoizedState=Fp.bind(null,G)},useEffectEvent:function(e){var t=Fe(),a={impl:e};return t.memoizedState=a,function(){if((ee&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Au={readContext:Ge,use:mi,useCallback:Yr,useContext:Ge,useEffect:Su,useImperativeHandle:qr,useInsertionEffect:Rr,useLayoutEffect:_r,useMemo:Gr,useReducer:gi,useRef:Br,useState:function(){return gi($t)},useDebugValue:ju,useDeferredValue:function(e,t){var a=Te();return Xr(a,se.memoizedState,e,t)},useTransition:function(){var e=gi($t)[0],t=Te().memoizedState;return[typeof e=="boolean"?e:ul(e),t]},useSyncExternalStore:xr,useId:Zr,useHostTransitionStatus:Eu,useFormState:Or,useActionState:Or,useOptimistic:function(e,t){var a=Te();return zr(a,se,e,t)},useMemoCache:yu,useCacheRefresh:Jr};Au.useEffectEvent=Nr;var Pr={readContext:Ge,use:mi,useCallback:Yr,useContext:Ge,useEffect:Su,useImperativeHandle:qr,useInsertionEffect:Rr,useLayoutEffect:_r,useMemo:Gr,useReducer:bu,useRef:Br,useState:function(){return bu($t)},useDebugValue:ju,useDeferredValue:function(e,t){var a=Te();return se===null?zu(a,e,t):Xr(a,se.memoizedState,e,t)},useTransition:function(){var e=bu($t)[0],t=Te().memoizedState;return[typeof e=="boolean"?e:ul(e),t]},useSyncExternalStore:xr,useId:Zr,useHostTransitionStatus:Eu,useFormState:Lr,useActionState:Lr,useOptimistic:function(e,t){var a=Te();return se!==null?zr(a,se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yu,useCacheRefresh:Jr};Pr.useEffectEvent=Nr;function Du(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:L({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cu={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=gt(),l=fa(n);l.payload=t,a!=null&&(l.callback=a),t=pa(e,l,n),t!==null&&(ot(t,e,n),nl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=gt(),l=fa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=pa(e,l,n),t!==null&&(ot(t,e,n),nl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),n=fa(a);n.tag=2,t!=null&&(n.callback=t),t=pa(e,n,a),t!==null&&(ot(t,e,a),nl(t,e,a))}};function ed(e,t,a,n,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(a,n)||!Kn(l,i):!0}function td(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Cu.enqueueReplaceState(t,t.state,null)}function Va(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=L({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function ad(e){Fl(e)}function nd(e){console.error(e)}function ld(e){Fl(e)}function vi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function id(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ou(e,t,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){vi(e,t)},a}function od(e){return e=fa(e),e.tag=3,e}function ud(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){id(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){id(t,a,n),typeof l!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Pp(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&pn(t,a,l,!0),a=ft.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Ui():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===ui?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),as(e,n,l)),!1;case 22:return a.flags|=65536,n===ui?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),as(e,n,l)),!1}throw Error(r(435,a.tag))}return as(e,n,l),Ui(),!1}if(F)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Wo&&(e=Error(r(422),{cause:n}),In(vt(e,a)))):(n!==Wo&&(t=Error(r(423),{cause:n}),In(vt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=vt(n,a),l=Ou(e.stateNode,n,l),uu(e,l),je!==4&&(je=2)),!1;var i=Error(r(520),{cause:n});if(i=vt(i,a),yl===null?yl=[i]:yl.push(i),je!==4&&(je=2),t===null)return!0;n=vt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ou(a.stateNode,n,e),uu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ba===null||!ba.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=od(l),ud(l,e,a,n),uu(a,l),!1}a=a.return}while(a!==null);return!1}var Uu=Error(r(461)),Ce=!1;function Xe(e,t,a,n){t.child=e===null?dr(t,null,a,n):Xa(t,e.child,a,n)}function sd(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var o={};for(var c in n)c!=="ref"&&(o[c]=n[c])}else o=n;return Ha(t),n=pu(e,t,a,o,i,l),c=hu(),e!==null&&!Ce?(mu(e,t,l),Zt(e,t,l)):(F&&c&&Jo(t),t.flags|=1,Xe(e,t,n,l),t.child)}function cd(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Vo(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,rd(e,t,i,n,l)):(e=ti(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qu(e,l)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Kn,a(o,n)&&e.ref===t.ref)return Zt(e,t,l)}return t.flags|=1,e=Yt(i,n),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Kn(i,n)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=n=i,qu(e,l))(e.flags&131072)!==0&&(Ce=!0);else return t.lanes=e.lanes,Zt(e,t,l)}return Lu(e,t,a,n,l)}function dd(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return fd(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ii(t,i!==null?i.cachePool:null),i!==null?hr(t,i):cu(),mr(t);else return n=t.lanes=536870912,fd(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(ii(t,i.cachePool),hr(t,i),ma(),t.memoizedState=null):(e!==null&&ii(t,null),cu(),ma());return Xe(e,t,l,a),t.child}function rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fd(e,t,a,n,l){var i=nu();return i=i===null?null:{parent:Ae._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ii(t,null),cu(),mr(t),e!==null&&pn(e,t,n,!0),t.childLanes=l,null}function wi(e,t){return t=ji({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pd(e,t,a){return Xa(t,e.child,null,a),e=wi(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function eh(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(F){if(n.mode==="hidden")return e=wi(t,n),t.lanes=536870912,rl(null,e);if(du(t),(e=me)?(e=Ef(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Bt,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Wc(e),a.return=t,t.child=a,Ye=t,me=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return wi(t,n)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(du(t),l)if(t.flags&256)t.flags&=-257,t=pd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ce||pn(e,t,a,!1),l=(a&e.childLanes)!==0,Ce||l){if(n=de,n!==null&&(o=nc(n,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,ka(e,o),ot(n,e,o),Uu;Ui(),t=pd(e,t,a)}else e=i.treeContext,me=Tt(o.nextSibling),Ye=t,F=!0,sa=null,jt=!1,e!==null&&Pc(t,e),t=wi(t,n),t.flags|=4096;return t}return e=Yt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Si(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Lu(e,t,a,n,l){return Ha(t),a=pu(e,t,a,n,void 0,l),n=hu(),e!==null&&!Ce?(mu(e,t,l),Zt(e,t,l)):(F&&n&&Jo(t),t.flags|=1,Xe(e,t,a,l),t.child)}function hd(e,t,a,n,l,i){return Ha(t),t.updateQueue=null,a=yr(t,n,a,l),gr(e),n=hu(),e!==null&&!Ce?(mu(e,t,i),Zt(e,t,i)):(F&&n&&Jo(t),t.flags|=1,Xe(e,t,a,i),t.child)}function md(e,t,a,n,l){if(Ha(t),t.stateNode===null){var i=cn,o=a.contextType;typeof o=="object"&&o!==null&&(i=Ge(o)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Cu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},iu(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Ge(o):cn,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Du(t,a,o,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Cu.enqueueReplaceState(i,i.state,null),il(t,n,i,l),ll(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,d=Va(a,c);i.props=d;var b=i.context,z=a.contextType;o=cn,typeof z=="object"&&z!==null&&(o=Ge(z));var M=a.getDerivedStateFromProps;z=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||b!==o)&&td(t,i,n,o),da=!1;var v=t.memoizedState;i.state=v,il(t,n,i,l),ll(),b=t.memoizedState,c||v!==b||da?(typeof M=="function"&&(Du(t,a,M,n),b=t.memoizedState),(d=da||ed(t,a,d,n,v,b,o))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=b),i.props=n,i.state=b,i.context=o,n=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,ou(e,t),o=t.memoizedProps,z=Va(a,o),i.props=z,M=t.pendingProps,v=i.context,b=a.contextType,d=cn,typeof b=="object"&&b!==null&&(d=Ge(b)),c=a.getDerivedStateFromProps,(b=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==M||v!==d)&&td(t,i,n,d),da=!1,v=t.memoizedState,i.state=v,il(t,n,i,l),ll();var w=t.memoizedState;o!==M||v!==w||da||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof c=="function"&&(Du(t,a,c,n),w=t.memoizedState),(z=da||ed(t,a,z,n,v,w,d)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,w,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,w,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),i.props=n,i.state=w,i.context=d,n=z):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,Si(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=Xa(t,e.child,null,l),t.child=Xa(t,null,a,l)):Xe(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Zt(e,t,l),e}function gd(e,t,a,n){return Ra(),t.flags|=256,Xe(e,t,a,n),t.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(e){return{baseLanes:e,cachePool:ir()}}function Nu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mt),e}function yd(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(F){if(l?ha(t):ma(),(e=me)?(e=Ef(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Bt,overflow:kt}:null,retryLane:536870912,hydrationErrors:null},a=Wc(e),a.return=t,t.child=a,Ye=t,me=null)):e=null,e===null)throw ca(t);return xs(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,l?(ma(),l=t.mode,c=ji({mode:"hidden",children:c},l),n=Na(n,l,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=ku(a),n.childLanes=Nu(e,o,a),t.memoizedState=Bu,rl(null,n)):(ha(t),Ru(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(ha(t),t.flags&=-257,t=_u(e,t,a)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),c=n.fallback,l=t.mode,n=ji({mode:"visible",children:n.children},l),c=Na(c,l,a,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,Xa(t,e.child,null,a),n=t.child,n.memoizedState=ku(a),n.childLanes=Nu(e,o,a),t.memoizedState=Bu,t=rl(null,n));else if(ha(t),xs(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var b=o.dgst;o=b,n=Error(r(419)),n.stack="",n.digest=o,In({value:n,source:null,stack:null}),t=_u(e,t,a)}else if(Ce||pn(e,t,a,!1),o=(a&e.childLanes)!==0,Ce||o){if(o=de,o!==null&&(n=nc(o,a),n!==0&&n!==d.retryLane))throw d.retryLane=n,ka(e,n),ot(o,e,n),Uu;ys(c)||Ui(),t=_u(e,t,a)}else ys(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,me=Tt(c.nextSibling),Ye=t,F=!0,sa=null,jt=!1,e!==null&&Pc(t,e),t=Ru(t,n.children),t.flags|=4096);return t}return l?(ma(),c=n.fallback,l=t.mode,d=e.child,b=d.sibling,n=Yt(d,{mode:"hidden",children:n.children}),n.subtreeFlags=d.subtreeFlags&65011712,b!==null?c=Yt(b,c):(c=Na(c,l,a,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,rl(null,n),n=t.child,c=e.child.memoizedState,c===null?c=ku(a):(l=c.cachePool,l!==null?(d=Ae._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=ir(),c={baseLanes:c.baseLanes|a,cachePool:l}),n.memoizedState=c,n.childLanes=Nu(e,o,a),t.memoizedState=Bu,rl(e.child,n)):(ha(t),a=e.child,e=a.sibling,a=Yt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Ru(e,t){return t=ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ji(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function _u(e,t,a){return Xa(t,e.child,null,a),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Po(e.return,t,a)}function Hu(e,t,a,n,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l,o.treeForkCount=i)}function bd(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var o=ze.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,ne(ze,o),Xe(e,t,n,a),n=F?Fn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,a,t);else if(e.tag===19)xd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&di(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Hu(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&di(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Hu(t,!0,a,null,i,n);break;case"together":Hu(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Zt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Yt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Yt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function th(e,t,a){switch(t.tag){case 3:Bl(t,t.stateNode.containerInfo),ra(t,Ae,e.memoizedState.cache),Ra();break;case 27:case 5:co(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,du(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?yd(e,t,a):(ha(t),e=Zt(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(pn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return bd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(ze,ze.current),n)break;return null;case 22:return t.lanes=0,dd(e,t,a,t.pendingProps);case 24:ra(t,Ae,e.memoizedState.cache)}return Zt(e,t,a)}function vd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ce=!0;else{if(!qu(e,a)&&(t.flags&128)===0)return Ce=!1,th(e,t,a);Ce=(e.flags&131072)!==0}else Ce=!1,F&&(t.flags&1048576)!==0&&Ic(t,Fn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")Vo(e)?(n=Va(e,n),t.tag=1,t=md(null,t,e,n,a)):(t.tag=0,t=Lu(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===Q){t.tag=11,t=sd(null,t,e,n,a);break e}else if(l===Be){t.tag=14,t=cd(null,t,e,n,a);break e}}throw t=Mt(e)||e,Error(r(306,t,""))}}return t;case 0:return Lu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Va(n,t.pendingProps),md(e,t,n,l,a);case 3:e:{if(Bl(t,t.stateNode.containerInfo),e===null)throw Error(r(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,ou(e,t),il(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ra(t,Ae,n),n!==i.cache&&eu(t,[Ae],a,!0),ll(),n=o.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=gd(e,t,n,a);break e}else if(n!==l){l=vt(Error(r(424)),t),In(l),t=gd(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=Tt(e.firstChild),Ye=t,F=!0,sa=null,jt=!0,a=dr(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ra(),n===l){t=Zt(e,t,a);break e}Xe(e,t,n,a)}t=t.child}return t;case 26:return Si(e,t),e===null?(a=Uf(t.type,null,t.pendingProps,null))?t.memoizedState=a:F||(a=t.type,e=t.pendingProps,n=Hi(na.current).createElement(a),n[qe]=t,n[et]=e,Qe(n,a,e),Re(n),t.stateNode=n):t.memoizedState=Uf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return co(t),e===null&&F&&(n=t.stateNode=Df(t.type,t.pendingProps,na.current),Ye=t,jt=!0,l=me,ja(t.type)?(bs=l,me=Tt(n.firstChild)):me=l),Xe(e,t,t.pendingProps.children,a),Si(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((l=n=me)&&(n=Oh(n,t.type,t.pendingProps,jt),n!==null?(t.stateNode=n,Ye=t,me=Tt(n.firstChild),jt=!1,l=!0):l=!1),l||ca(t)),co(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,n=i.children,hs(l,i)?n=null:o!==null&&hs(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=pu(e,t,$p,null,null,a),Tl._currentValue=l),Si(e,t),Xe(e,t,n,a),t.child;case 6:return e===null&&F&&((e=a=me)&&(a=Uh(a,t.pendingProps,jt),a!==null?(t.stateNode=a,Ye=t,me=null,e=!0):e=!1),e||ca(t)),null;case 13:return yd(e,t,a);case 4:return Bl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Xa(t,null,n,a):Xe(e,t,n,a),t.child;case 11:return sd(e,t,t.type,t.pendingProps,a);case 7:return Xe(e,t,t.pendingProps,a),t.child;case 8:return Xe(e,t,t.pendingProps.children,a),t.child;case 12:return Xe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ra(t,t.type,n.value),Xe(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ha(t),l=Ge(l),n=n(l),t.flags|=1,Xe(e,t,n,a),t.child;case 14:return cd(e,t,t.type,t.pendingProps,a);case 15:return rd(e,t,t.type,t.pendingProps,a);case 19:return bd(e,t,a);case 31:return eh(e,t,a);case 22:return dd(e,t,a,t.pendingProps);case 24:return Ha(t),n=Ge(Ae),e===null?(l=nu(),l===null&&(l=de,i=tu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},iu(t),ra(t,Ae,l)):((e.lanes&a)!==0&&(ou(e,t),il(t,null,null,a),ll()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ra(t,Ae,n)):(n=i.cache,ra(t,Ae,n),n!==l.cache&&eu(t,[Ae],a,!0))),Xe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Jt(e){e.flags|=4}function Yu(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Zd())e.flags|=8192;else throw Ga=ui,lu}else e.flags&=-16777217}function wd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rf(t))if(Zd())e.flags|=8192;else throw Ga=ui,lu}function zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ec():536870912,e.lanes|=t,Tn|=t)}function dl(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function ah(e,t,a){var n=t.pendingProps;switch(Ko(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ge(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qt(Ae),Ja(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fn(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fo())),ge(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Jt(t),i!==null?(ge(t),wd(t,i)):(ge(t),Yu(t,l,null,n,a))):i?i!==e.memoizedState?(Jt(t),ge(t),wd(t,i)):(ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Jt(t),ge(t),Yu(t,l,e,n,a)),null;case 27:if(kl(t),a=na.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Jt(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return ge(t),null}e=Ne.current,fn(t)?er(t):(e=Df(l,n,a),t.stateNode=e,Jt(t))}return ge(t),null;case 5:if(kl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Jt(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return ge(t),null}if(i=Ne.current,fn(t))er(t);else{var o=Hi(na.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?o.createElement(l,{is:n.is}):o.createElement(l)}}i[qe]=t,i[et]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Qe(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Jt(t)}}return ge(t),Yu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Jt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(r(166));if(e=na.current,fn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ye,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||xf(e.nodeValue,a)),e||ca(t,!0)}else e=Hi(e).createTextNode(n),e[qe]=t,t.stateNode=e}return ge(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=fn(t),a!==null){if(e===null){if(!n)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[qe]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),e=!1}else a=Fo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return ge(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[qe]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ge(t),l=!1}else l=Fo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zi(t,t.updateQueue),ge(t),null);case 4:return Ja(),e===null&&cs(t.stateNode.containerInfo),ge(t),null;case 10:return Qt(t.type),ge(t),null;case 19:if(xe(ze),n=t.memoizedState,n===null)return ge(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)dl(n,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=di(e),i!==null){for(t.flags|=128,dl(n,!1),e=i.updateQueue,t.updateQueue=e,zi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Kc(a,e),a=a.sibling;return ne(ze,ze.current&1|2),F&&Gt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ut()>Di&&(t.flags|=128,l=!0,dl(n,!1),t.lanes=4194304)}else{if(!l)if(e=di(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,zi(t,e),dl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!F)return ge(t),null}else 2*ut()-n.renderingStartTime>Di&&a!==536870912&&(t.flags|=128,l=!0,dl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ut(),e.sibling=null,a=ze.current,ne(ze,l?a&1|2:a&1),F&&Gt(t,n.treeForkCount),e):(ge(t),null);case 22:case 23:return pt(t),ru(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),a=t.updateQueue,a!==null&&zi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&xe(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Ae),ge(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function nh(e,t){switch(Ko(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Ae),Ja(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kl(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(ze),null;case 4:return Ja(),null;case 10:return Qt(t.type),null;case 22:case 23:return pt(t),ru(),e!==null&&xe(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Ae),null;case 25:return null;default:return null}}function Sd(e,t){switch(Ko(t),t.tag){case 3:Qt(Ae),Ja();break;case 26:case 27:case 5:kl(t);break;case 4:Ja();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:xe(ze);break;case 10:Qt(t.type);break;case 22:case 23:pt(t),ru(),e!==null&&xe(qa);break;case 24:Qt(Ae)}}function fl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,o=a.inst;n=i(),o.destroy=n}a=a.next}while(a!==l)}}catch(c){oe(t,t.return,c)}}function ga(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var o=n.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,l=t;var d=a,b=c;try{b()}catch(z){oe(l,d,z)}}}n=n.next}while(n!==i)}}catch(z){oe(t,t.return,z)}}function jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{pr(t,a)}catch(n){oe(e,e.return,n)}}}function zd(e,t,a){a.props=Va(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){oe(e,t,n)}}function pl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){oe(e,t,l)}}function Nt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){oe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){oe(e,t,l)}else a.current=null}function Td(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){oe(e,e.return,l)}}function Gu(e,t,a){try{var n=e.stateNode;Th(n,e.type,a,t),n[et]=t}catch(l){oe(e,e.return,l)}}function Ed(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ht));else if(n!==4&&(n===27&&ja(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Qu(e,t,a),e=e.sibling;e!==null;)Qu(e,t,a),e=e.sibling}function Ti(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ti(e,t,a),e=e.sibling;e!==null;)Ti(e,t,a),e=e.sibling}function Md(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Qe(t,n,a),t[qe]=e,t[et]=a}catch(i){oe(e,e.return,i)}}var Kt=!1,Oe=!1,Vu=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,_e=null;function lh(e,t){if(e=e.containerInfo,fs=$i,e=qc(e),_o(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,c=-1,d=-1,b=0,z=0,M=e,v=null;t:for(;;){for(var w;M!==a||l!==0&&M.nodeType!==3||(c=o+l),M!==i||n!==0&&M.nodeType!==3||(d=o+n),M.nodeType===3&&(o+=M.nodeValue.length),(w=M.firstChild)!==null;)v=M,M=w;for(;;){if(M===e)break t;if(v===a&&++b===l&&(c=o),v===i&&++z===n&&(d=o),(w=M.nextSibling)!==null)break;M=v,v=M.parentNode}M=w}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(ps={focusedElem:e,selectionRange:a},$i=!1,_e=t;_e!==null;)if(t=_e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_e=e;else for(;_e!==null;){switch(t=_e,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var O=Va(a.type,l);e=n.getSnapshotBeforeUpdate(O,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(_){oe(a,a.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)gs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,_e=e;break}_e=t.return}}function Dd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ft(e,a),n&4&&fl(5,a);break;case 1:if(Ft(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){oe(a,a.return,o)}else{var l=Va(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){oe(a,a.return,o)}}n&64&&jd(a),n&512&&pl(a,a.return);break;case 3:if(Ft(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{pr(e,t)}catch(o){oe(a,a.return,o)}}break;case 27:t===null&&n&4&&Md(a);case 26:case 5:Ft(e,a),t===null&&n&4&&Td(a),n&512&&pl(a,a.return);break;case 12:Ft(e,a);break;case 31:Ft(e,a),n&4&&Ud(e,a);break;case 13:Ft(e,a),n&4&&Ld(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ph.bind(null,a),Lh(e,a))));break;case 22:if(n=a.memoizedState!==null||Kt,!n){t=t!==null&&t.memoizedState!==null||Oe,l=Kt;var i=Oe;Kt=n,(Oe=t)&&!i?It(e,a,(a.subtreeFlags&8772)!==0):Ft(e,a),Kt=l,Oe=i}break;case 30:break;default:Ft(e,a)}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,at=!1;function Wt(e,t,a){for(a=a.child;a!==null;)Od(e,t,a),a=a.sibling}function Od(e,t,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Rn,a)}catch{}switch(a.tag){case 26:Oe||Nt(a,t),Wt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Oe||Nt(a,t);var n=ye,l=at;ja(a.type)&&(ye=a.stateNode,at=!1),Wt(e,t,a),Sl(a.stateNode),ye=n,at=l;break;case 5:Oe||Nt(a,t);case 6:if(n=ye,l=at,ye=null,Wt(e,t,a),ye=n,at=l,ye!==null)if(at)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(i){oe(a,t,i)}else try{ye.removeChild(a.stateNode)}catch(i){oe(a,t,i)}break;case 18:ye!==null&&(at?(e=ye,zf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ln(e)):zf(ye,a.stateNode));break;case 4:n=ye,l=at,ye=a.stateNode.containerInfo,at=!0,Wt(e,t,a),ye=n,at=l;break;case 0:case 11:case 14:case 15:ga(2,a,t),Oe||ga(4,a,t),Wt(e,t,a);break;case 1:Oe||(Nt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&zd(a,t,n)),Wt(e,t,a);break;case 21:Wt(e,t,a);break;case 22:Oe=(n=Oe)||a.memoizedState!==null,Wt(e,t,a),Oe=n;break;default:Wt(e,t,a)}}function Ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ln(e)}catch(a){oe(t,t.return,a)}}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ln(e)}catch(a){oe(t,t.return,a)}}function ih(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ad),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ad),t;default:throw Error(r(435,e.tag))}}function Ei(e,t){var a=ih(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=hh.bind(null,e,n);n.then(l,l)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(ja(c.type)){ye=c.stateNode,at=!1;break e}break;case 5:ye=c.stateNode,at=!1;break e;case 3:case 4:ye=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(ye===null)throw Error(r(160));Od(i,o,l),ye=null,at=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bd(t,e),t=t.sibling}var Ct=null;function Bd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),lt(e),n&4&&(ga(3,e,e.return),fl(3,e),ga(5,e,e.return));break;case 1:nt(t,e),lt(e),n&512&&(Oe||a===null||Nt(a,a.return)),n&64&&Kt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Ct;if(nt(t,e),lt(e),n&512&&(Oe||a===null||Nt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[qn]||i[qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Qe(i,n,a),i[qe]=e,Re(i),n=i;break e;case"link":var o=kf("link","href",l).get(n+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(i=o[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}i=l.createElement(n),Qe(i,n,a),l.head.appendChild(i);break;case"meta":if(o=kf("meta","content",l).get(n+(a.content||""))){for(c=0;c<o.length;c++)if(i=o[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}i=l.createElement(n),Qe(i,n,a),l.head.appendChild(i);break;default:throw Error(r(468,n))}i[qe]=e,Re(i),n=i}e.stateNode=n}else Nf(l,e.type,e.stateNode);else e.stateNode=Bf(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Nf(l,e.type,e.stateNode):Bf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Gu(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),lt(e),n&512&&(Oe||a===null||Nt(a,a.return)),a!==null&&n&4&&Gu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),lt(e),n&512&&(Oe||a===null||Nt(a,a.return)),e.flags&32){l=e.stateNode;try{tn(l,"")}catch(O){oe(e,e.return,O)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Gu(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Vu=!0);break;case 6:if(nt(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(O){oe(e,e.return,O)}}break;case 3:if(Gi=null,l=Ct,Ct=qi(t.containerInfo),nt(t,e),Ct=l,lt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(t.containerInfo)}catch(O){oe(e,e.return,O)}Vu&&(Vu=!1,kd(e));break;case 4:n=Ct,Ct=qi(e.stateNode.containerInfo),nt(t,e),lt(e),Ct=n;break;case 12:nt(t,e),lt(e);break;case 31:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ei(e,n)));break;case 13:nt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ai=ut()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ei(e,n)));break;case 22:l=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,b=Kt,z=Oe;if(Kt=b||l,Oe=z||d,nt(t,e),Oe=z,Kt=b,lt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||d||Kt||Oe||$a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(i=d.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var M=d.memoizedProps.style,v=M!=null&&M.hasOwnProperty("display")?M.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(O){oe(d,d.return,O)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(O){oe(d,d.return,O)}}}else if(t.tag===18){if(a===null){d=t;try{var w=d.stateNode;l?Tf(w,!0):Tf(d.stateNode,!1)}catch(O){oe(d,d.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ei(e,a))));break;case 19:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ei(e,n)));break;case 30:break;case 21:break;default:nt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Ed(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,i=Xu(e);Ti(e,i,l);break;case 5:var o=a.stateNode;a.flags&32&&(tn(o,""),a.flags&=-33);var c=Xu(e);Ti(e,c,o);break;case 3:case 4:var d=a.stateNode.containerInfo,b=Xu(e);Qu(e,b,d);break;default:throw Error(r(161))}}catch(z){oe(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ft(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dd(e,t.alternate,t),t=t.sibling}function $a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),$a(t);break;case 1:Nt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&zd(t,t.return,a),$a(t);break;case 27:Sl(t.stateNode);case 26:case 5:Nt(t,t.return),$a(t);break;case 22:t.memoizedState===null&&$a(t);break;case 30:$a(t);break;default:$a(t)}e=e.sibling}}function It(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:It(l,i,a),fl(4,i);break;case 1:if(It(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(b){oe(n,n.return,b)}if(n=i,l=n.updateQueue,l!==null){var c=n.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)fr(d[l],c)}catch(b){oe(n,n.return,b)}}a&&o&64&&jd(i),pl(i,i.return);break;case 27:Md(i);case 26:case 5:It(l,i,a),a&&n===null&&o&4&&Td(i),pl(i,i.return);break;case 12:It(l,i,a);break;case 31:It(l,i,a),a&&o&4&&Ud(l,i);break;case 13:It(l,i,a),a&&o&4&&Ld(l,i);break;case 22:i.memoizedState===null&&It(l,i,a),pl(i,i.return);break;case 30:break;default:It(l,i,a)}t=t.sibling}}function $u(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Pn(a))}function Zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pn(e))}function Ot(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nd(e,t,a,n),t=t.sibling}function Nd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,n),l&2048&&fl(9,t);break;case 1:Ot(e,t,a,n);break;case 3:Ot(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pn(e)));break;case 12:if(l&2048){Ot(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){oe(t,t.return,d)}}else Ot(e,t,a,n);break;case 31:Ot(e,t,a,n);break;case 13:Ot(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Ot(e,t,a,n):hl(e,t):i._visibility&2?Ot(e,t,a,n):(i._visibility|=2,Sn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&$u(o,t);break;case 24:Ot(e,t,a,n),l&2048&&Zu(t.alternate,t);break;default:Ot(e,t,a,n)}}function Sn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,c=a,d=n,b=o.flags;switch(o.tag){case 0:case 11:case 15:Sn(i,o,c,d,l),fl(8,o);break;case 23:break;case 22:var z=o.stateNode;o.memoizedState!==null?z._visibility&2?Sn(i,o,c,d,l):hl(i,o):(z._visibility|=2,Sn(i,o,c,d,l)),l&&b&2048&&$u(o.alternate,o);break;case 24:Sn(i,o,c,d,l),l&&b&2048&&Zu(o.alternate,o);break;default:Sn(i,o,c,d,l)}t=t.sibling}}function hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:hl(a,n),l&2048&&$u(n.alternate,n);break;case 24:hl(a,n),l&2048&&Zu(n.alternate,n);break;default:hl(a,n)}t=t.sibling}}var ml=8192;function jn(e,t,a){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)Rd(e,t,a),e=e.sibling}function Rd(e,t,a){switch(e.tag){case 26:jn(e,t,a),e.flags&ml&&e.memoizedState!==null&&Vh(a,Ct,e.memoizedState,e.memoizedProps);break;case 5:jn(e,t,a);break;case 3:case 4:var n=Ct;Ct=qi(e.stateNode.containerInfo),jn(e,t,a),Ct=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ml,ml=16777216,jn(e,t,a),ml=n):jn(e,t,a));break;default:jn(e,t,a)}}function _d(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];_e=n,qd(n,e)}_d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hd(e),e=e.sibling}function Hd(e){switch(e.tag){case 0:case 11:case 15:gl(e),e.flags&2048&&ga(9,e,e.return);break;case 3:gl(e);break;case 12:gl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mi(e)):gl(e);break;default:gl(e)}}function Mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];_e=n,qd(n,e)}_d(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mi(t));break;default:Mi(t)}e=e.sibling}}function qd(e,t){for(;_e!==null;){var a=_e;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Pn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,_e=n;else e:for(a=e;_e!==null;){n=_e;var l=n.sibling,i=n.return;if(Cd(n),n===a){_e=null;break e}if(l!==null){l.return=i,_e=l;break e}_e=i}}}var oh={getCacheForType:function(e){var t=Ge(Ae),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ge(Ae).controller.signal}},uh=typeof WeakMap=="function"?WeakMap:Map,ee=0,de=null,$=null,K=0,ie=0,ht=null,ya=!1,zn=!1,Ju=!1,Pt=0,je=0,xa=0,Za=0,Ku=0,mt=0,Tn=0,yl=null,it=null,Wu=!1,Ai=0,Yd=0,Di=1/0,Ci=null,ba=null,Le=0,va=null,En=null,ea=0,Fu=0,Iu=null,Gd=null,xl=0,Pu=null;function gt(){return(ee&2)!==0&&K!==0?K&-K:E.T!==null?is():lc()}function Xd(){if(mt===0)if((K&536870912)===0||F){var e=_l;_l<<=1,(_l&3932160)===0&&(_l=262144),mt=e}else mt=536870912;return e=ft.current,e!==null&&(e.flags|=32),mt}function ot(e,t,a){(e===de&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(Mn(e,0),wa(e,K,mt,!1)),Hn(e,a),((ee&2)===0||e!==de)&&(e===de&&((ee&2)===0&&(Za|=a),je===4&&wa(e,K,mt,!1)),Rt(e))}function Qd(e,t,a){if((ee&6)!==0)throw Error(r(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||_n(e,t),l=n?rh(e,t):ts(e,t,!0),i=n;do{if(l===0){zn&&!n&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!sh(a)){l=ts(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;l=yl;var d=c.current.memoizedState.isDehydrated;if(d&&(Mn(c,o).flags|=256),o=ts(c,o,!1),o!==2){if(Ju&&!d){c.errorRecoveryDisabledLanes|=i,Za|=i,l=4;break e}i=it,it=l,i!==null&&(it===null?it=i:it.push.apply(it,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Mn(e,0),wa(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:wa(n,t,mt,!ya);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=Ai+300-ut(),10<l)){if(wa(n,t,mt,!ya),ql(n,0,!0)!==0)break e;ea=t,n.timeoutHandle=Sf(Vd.bind(null,n,a,it,Ci,Wu,t,mt,Za,Tn,ya,i,"Throttled",-0,0),l);break e}Vd(n,a,it,Ci,Wu,t,mt,Za,Tn,ya,i,null,-0,0)}}break}while(!0);Rt(e)}function Vd(e,t,a,n,l,i,o,c,d,b,z,M,v,w){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},Rd(t,i,M);var O=(i&62914560)===i?Ai-ut():(i&4194048)===i?Yd-ut():0;if(O=$h(M,O),O!==null){ea=i,e.cancelPendingCommit=O(Pd.bind(null,e,t,i,a,n,l,o,c,d,z,M,null,v,w)),wa(e,i,o,!b);return}}Pd(e,t,i,a,n,l,o,c,d)}function sh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!rt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,n){t&=~Ku,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-ct(l),o=1<<i;n[i]=-1,l&=~o}a!==0&&tc(e,a,t)}function Oi(){return(ee&6)===0?(bl(0),!1):!0}function es(){if($!==null){if(ie===0)var e=$.return;else e=$,Xt=_a=null,gu(e),yn=null,tl=0,e=$;for(;e!==null;)Sd(e.alternate,e),e=e.return;$=null}}function Mn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ah(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,es(),de=e,$=a=Yt(e.current,null),K=t,ie=0,ht=null,ya=!1,zn=_n(e,t),Ju=!1,Tn=mt=Ku=Za=xa=je=0,it=yl=null,Wu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-ct(n),i=1<<l;t|=e[l],n&=~i}return Pt=t,Il(),a}function $d(e,t){G=null,E.H=cl,t===gn||t===oi?(t=sr(),ie=3):t===lu?(t=sr(),ie=4):ie=t===Uu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,$===null&&(je=1,vi(e,vt(t,e.current)))}function Zd(){var e=ft.current;return e===null?!0:(K&4194048)===K?zt===null:(K&62914560)===K||(K&536870912)!==0?e===zt:!1}function Jd(){var e=E.H;return E.H=cl,e===null?cl:e}function Kd(){var e=E.A;return E.A=oh,e}function Ui(){je=4,ya||(K&4194048)!==K&&ft.current!==null||(zn=!0),(xa&134217727)===0&&(Za&134217727)===0||de===null||wa(de,K,mt,!1)}function ts(e,t,a){var n=ee;ee|=2;var l=Jd(),i=Kd();(de!==e||K!==t)&&(Ci=null,Mn(e,t)),t=!1;var o=je;e:do try{if(ie!==0&&$!==null){var c=$,d=ht;switch(ie){case 8:es(),o=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var b=ie;if(ie=0,ht=null,An(e,c,d,b),a&&zn){o=0;break e}break;default:b=ie,ie=0,ht=null,An(e,c,d,b)}}ch(),o=je;break}catch(z){$d(e,z)}while(!0);return t&&e.shellSuspendCounter++,Xt=_a=null,ee=n,E.H=l,E.A=i,$===null&&(de=null,K=0,Il()),o}function ch(){for(;$!==null;)Wd($)}function rh(e,t){var a=ee;ee|=2;var n=Jd(),l=Kd();de!==e||K!==t?(Ci=null,Di=ut()+500,Mn(e,t)):zn=_n(e,t);e:do try{if(ie!==0&&$!==null){t=$;var i=ht;t:switch(ie){case 1:ie=0,ht=null,An(e,t,i,1);break;case 2:case 9:if(or(i)){ie=0,ht=null,Fd(t);break}t=function(){ie!==2&&ie!==9||de!==e||(ie=7),Rt(e)},i.then(t,t);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:or(i)?(ie=0,ht=null,Fd(t)):(ie=0,ht=null,An(e,t,i,7));break;case 5:var o=null;switch($.tag){case 26:o=$.memoizedState;case 5:case 27:var c=$;if(o?Rf(o):c.stateNode.complete){ie=0,ht=null;var d=c.sibling;if(d!==null)$=d;else{var b=c.return;b!==null?($=b,Li(b)):$=null}break t}}ie=0,ht=null,An(e,t,i,5);break;case 6:ie=0,ht=null,An(e,t,i,6);break;case 8:es(),je=6;break e;default:throw Error(r(462))}}dh();break}catch(z){$d(e,z)}while(!0);return Xt=_a=null,E.H=n,E.A=l,ee=a,$!==null?0:(de=null,K=0,Il(),je)}function dh(){for(;$!==null&&!B0();)Wd($)}function Wd(e){var t=vd(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Li(e):$=t}function Fd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hd(a,t,t.pendingProps,t.type,void 0,K);break;case 11:t=hd(a,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:gu(t);default:Sd(a,t),t=$=Kc(t,Pt),t=vd(a,t,Pt)}e.memoizedProps=e.pendingProps,t===null?Li(e):$=t}function An(e,t,a,n){Xt=_a=null,gu(t),yn=null,tl=0;var l=t.return;try{if(Pp(e,l,t,a,K)){je=1,vi(e,vt(a,e.current)),$=null;return}}catch(i){if(l!==null)throw $=l,i;je=1,vi(e,vt(a,e.current)),$=null;return}t.flags&32768?(F||n===1?e=!0:zn||(K&536870912)!==0?e=!1:(ya=e=!0,(n===2||n===9||n===3||n===6)&&(n=ft.current,n!==null&&n.tag===13&&(n.flags|=16384))),Id(t,e)):Li(t)}function Li(e){var t=e;do{if((t.flags&32768)!==0){Id(t,ya);return}e=t.return;var a=ah(t.alternate,t,Pt);if(a!==null){$=a;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);je===0&&(je=5)}function Id(e,t){do{var a=nh(e.alternate,e);if(a!==null){a.flags&=32767,$=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){$=e;return}$=e=a}while(e!==null);je=6,$=null}function Pd(e,t,a,n,l,i,o,c,d){e.cancelPendingCommit=null;do Bi();while(Le!==0);if((ee&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=Xo,Q0(e,a,i,o,c,d),e===de&&($=de=null,K=0),En=t,va=e,ea=a,Fu=i,Iu=l,Gd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mh(Nl,function(){return lf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=E.T,E.T=null,l=C.p,C.p=2,o=ee,ee|=4;try{lh(e,t,a)}finally{ee=o,C.p=l,E.T=n}}Le=1,ef(),tf(),af()}}function ef(){if(Le===1){Le=0;var e=va,t=En,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var n=C.p;C.p=2;var l=ee;ee|=4;try{Bd(t,e);var i=ps,o=qc(e.containerInfo),c=i.focusedElem,d=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&Hc(c.ownerDocument.documentElement,c)){if(d!==null&&_o(c)){var b=d.start,z=d.end;if(z===void 0&&(z=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(z,c.value.length);else{var M=c.ownerDocument||document,v=M&&M.defaultView||window;if(v.getSelection){var w=v.getSelection(),O=c.textContent.length,_=Math.min(d.start,O),re=d.end===void 0?_:Math.min(d.end,O);!w.extend&&_>re&&(o=re,re=_,_=o);var h=_c(c,_),p=_c(c,re);if(h&&p&&(w.rangeCount!==1||w.anchorNode!==h.node||w.anchorOffset!==h.offset||w.focusNode!==p.node||w.focusOffset!==p.offset)){var x=M.createRange();x.setStart(h.node,h.offset),w.removeAllRanges(),_>re?(w.addRange(x),w.extend(p.node,p.offset)):(x.setEnd(p.node,p.offset),w.addRange(x))}}}}for(M=[],w=c;w=w.parentNode;)w.nodeType===1&&M.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var T=M[c];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}$i=!!fs,ps=fs=null}finally{ee=l,C.p=n,E.T=a}}e.current=t,Le=2}}function tf(){if(Le===2){Le=0;var e=va,t=En,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var n=C.p;C.p=2;var l=ee;ee|=4;try{Dd(e,t.alternate,t)}finally{ee=l,C.p=n,E.T=a}}Le=3}}function af(){if(Le===4||Le===3){Le=0,k0();var e=va,t=En,a=ea,n=Gd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,En=va=null,nf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ba=null),bo(a),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Rn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=E.T,l=C.p,C.p=2,E.T=null;try{for(var i=e.onRecoverableError,o=0;o<n.length;o++){var c=n[o];i(c.value,{componentStack:c.stack})}}finally{E.T=t,C.p=l}}(ea&3)!==0&&Bi(),Rt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===Pu?xl++:(xl=0,Pu=e):xl=0,bl(0)}}function nf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pn(t)))}function Bi(){return ef(),tf(),af(),lf()}function lf(){if(Le!==5)return!1;var e=va,t=Fu;Fu=0;var a=bo(ea),n=E.T,l=C.p;try{C.p=32>a?32:a,E.T=null,a=Iu,Iu=null;var i=va,o=ea;if(Le=0,En=va=null,ea=0,(ee&6)!==0)throw Error(r(331));var c=ee;if(ee|=4,Hd(i.current),Nd(i,i.current,o,a),ee=c,bl(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Rn,i)}catch{}return!0}finally{C.p=l,E.T=n,nf(e,t)}}function of(e,t,a){t=vt(a,t),t=Ou(e.stateNode,t,2),e=pa(e,t,2),e!==null&&(Hn(e,2),Rt(e))}function oe(e,t,a){if(e.tag===3)of(e,e,a);else for(;t!==null;){if(t.tag===3){of(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ba===null||!ba.has(n))){e=vt(a,e),a=od(2),n=pa(t,a,2),n!==null&&(ud(a,n,t,e),Hn(n,2),Rt(n));break}}t=t.return}}function as(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new uh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Ju=!0,l.add(a),e=fh.bind(null,e,t,a),t.then(e,e))}function fh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,de===e&&(K&a)===a&&(je===4||je===3&&(K&62914560)===K&&300>ut()-Ai?(ee&2)===0&&Mn(e,0):Ku|=a,Tn===K&&(Tn=0)),Rt(e)}function uf(e,t){t===0&&(t=ec()),e=ka(e,t),e!==null&&(Hn(e,t),Rt(e))}function ph(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),uf(e,a)}function hh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(t),uf(e,a)}function mh(e,t){return mo(e,t)}var ki=null,Dn=null,ns=!1,Ni=!1,ls=!1,Sa=0;function Rt(e){e!==Dn&&e.next===null&&(Dn===null?ki=Dn=e:Dn=Dn.next=e),Ni=!0,ns||(ns=!0,yh())}function bl(e,t){if(!ls&&Ni){ls=!0;do for(var a=!1,n=ki;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var o=n.suspendedLanes,c=n.pingedLanes;i=(1<<31-ct(42|e)+1)-1,i&=l&~(o&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,df(n,i))}else i=K,i=ql(n,n===de?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||_n(n,i)||(a=!0,df(n,i));n=n.next}while(a);ls=!1}}function gh(){sf()}function sf(){Ni=ns=!1;var e=0;Sa!==0&&Mh()&&(e=Sa);for(var t=ut(),a=null,n=ki;n!==null;){var l=n.next,i=cf(n,t);i===0?(n.next=null,a===null?ki=l:a.next=l,l===null&&(Dn=a)):(a=n,(e!==0||(i&3)!==0)&&(Ni=!0)),n=l}Le!==0&&Le!==5||bl(e),Sa!==0&&(Sa=0)}function cf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ct(i),c=1<<o,d=l[o];d===-1?((c&a)===0||(c&n)!==0)&&(l[o]=X0(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}if(t=de,a=K,a=ql(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&go(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_n(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&go(n),bo(a)){case 2:case 8:a=Is;break;case 32:a=Nl;break;case 268435456:a=Ps;break;default:a=Nl}return n=rf.bind(null,e),a=mo(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&go(n),e.callbackPriority=2,e.callbackNode=null,2}function rf(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bi()&&e.callbackNode!==a)return null;var n=K;return n=ql(e,e===de?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Qd(e,n,t),cf(e,ut()),e.callbackNode!=null&&e.callbackNode===a?rf.bind(null,e):null)}function df(e,t){if(Bi())return null;Qd(e,t,!0)}function yh(){Dh(function(){(ee&6)!==0?mo(Fs,gh):sf()})}function is(){if(Sa===0){var e=hn;e===0&&(e=Rl,Rl<<=1,(Rl&261888)===0&&(Rl=256)),Sa=e}return Sa}function ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ql(""+e)}function pf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=ff((l[et]||null).action),o=n.submitter;o&&(t=(t=o[et]||null)?ff(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var c=new Jl("action","action",null,n,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Sa!==0){var d=o?pf(l,o):new FormData(l);Tu(a,{pending:!0,data:d,method:l.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=o?pf(l,o):new FormData(l),Tu(a,{pending:!0,data:d,method:l.method,action:i},i,d))},currentTarget:l}]})}}for(var os=0;os<Go.length;os++){var us=Go[os],bh=us.toLowerCase(),vh=us[0].toUpperCase()+us.slice(1);Dt(bh,"on"+vh)}Dt(Xc,"onAnimationEnd"),Dt(Qc,"onAnimationIteration"),Dt(Vc,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Np,"onTransitionRun"),Dt(Rp,"onTransitionStart"),Dt(_p,"onTransitionCancel"),Dt($c,"onTransitionEnd"),Pa("onMouseEnter",["mouseout","mouseover"]),Pa("onMouseLeave",["mouseout","mouseover"]),Pa("onPointerEnter",["pointerout","pointerover"]),Pa("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function hf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var o=n.length-1;0<=o;o--){var c=n[o],d=c.instance,b=c.currentTarget;if(c=c.listener,d!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=b;try{i(l)}catch(z){Fl(z)}l.currentTarget=null,i=d}else for(o=0;o<n.length;o++){if(c=n[o],d=c.instance,b=c.currentTarget,c=c.listener,d!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=b;try{i(l)}catch(z){Fl(z)}l.currentTarget=null,i=d}}}}function Z(e,t){var a=t[vo];a===void 0&&(a=t[vo]=new Set);var n=e+"__bubble";a.has(n)||(mf(t,e,2,!1),a.add(n))}function ss(e,t,a){var n=0;t&&(n|=4),mf(a,e,n,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[Ri]){e[Ri]=!0,uc.forEach(function(a){a!=="selectionchange"&&(wh.has(a)||ss(a,!1,e),ss(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,ss("selectionchange",!1,t))}}function mf(e,t,a,n){switch(Qf(t)){case 2:var l=Kh;break;case 8:l=Wh;break;default:l=zs}a=l.bind(null,t,a,e),l=void 0,!Do||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function rs(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var c=n.stateNode.containerInfo;if(c===l)break;if(o===4)for(o=n.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;c!==null;){if(o=Wa(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){n=i=o;continue e}c=c.parentNode}}n=n.return}bc(function(){var b=i,z=Mo(a),M=[];e:{var v=Zc.get(e);if(v!==void 0){var w=Jl,O=e;switch(e){case"keypress":if($l(a)===0)break e;case"keydown":case"keyup":w=hp;break;case"focusin":O="focus",w=Lo;break;case"focusout":O="blur",w=Lo;break;case"beforeblur":case"afterblur":w=Lo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=yp;break;case Xc:case Qc:case Vc:w=ip;break;case $c:w=bp;break;case"scroll":case"scrollend":w=ep;break;case"wheel":w=wp;break;case"copy":case"cut":case"paste":w=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=zc;break;case"toggle":case"beforetoggle":w=jp}var _=(t&4)!==0,re=!_&&(e==="scroll"||e==="scrollend"),h=_?v!==null?v+"Capture":null:v;_=[];for(var p=b,x;p!==null;){var T=p;if(x=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||x===null||h===null||(T=Gn(p,h),T!=null&&_.push(wl(p,T,x))),re)break;p=p.return}0<_.length&&(v=new w(v,O,null,a,z),M.push({event:v,listeners:_}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&a!==Eo&&(O=a.relatedTarget||a.fromElement)&&(Wa(O)||O[Ka]))break e;if((w||v)&&(v=z.window===z?z:(v=z.ownerDocument)?v.defaultView||v.parentWindow:window,w?(O=a.relatedTarget||a.toElement,w=b,O=O?Wa(O):null,O!==null&&(re=S(O),_=O.tag,O!==re||_!==5&&_!==27&&_!==6)&&(O=null)):(w=null,O=b),w!==O)){if(_=Sc,T="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(_=zc,T="onPointerLeave",h="onPointerEnter",p="pointer"),re=w==null?v:Yn(w),x=O==null?v:Yn(O),v=new _(T,p+"leave",w,a,z),v.target=re,v.relatedTarget=x,T=null,Wa(z)===b&&(_=new _(h,p+"enter",O,a,z),_.target=x,_.relatedTarget=re,T=_),re=T,w&&O)t:{for(_=Sh,h=w,p=O,x=0,T=h;T;T=_(T))x++;T=0;for(var B=p;B;B=_(B))T++;for(;0<x-T;)h=_(h),x--;for(;0<T-x;)p=_(p),T--;for(;x--;){if(h===p||p!==null&&h===p.alternate){_=h;break t}h=_(h),p=_(p)}_=null}else _=null;w!==null&&gf(M,v,w,_,!1),O!==null&&re!==null&&gf(M,re,O,_,!0)}}e:{if(v=b?Yn(b):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var I=Uc;else if(Cc(v))if(Lc)I=Lp;else{I=Op;var U=Cp}else w=v.nodeName,!w||w.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?b&&To(b.elementType)&&(I=Uc):I=Up;if(I&&(I=I(e,b))){Oc(M,I,a,z);break e}U&&U(e,v,b),e==="focusout"&&b&&v.type==="number"&&b.memoizedProps.value!=null&&zo(v,"number",v.value)}switch(U=b?Yn(b):window,e){case"focusin":(Cc(U)||U.contentEditable==="true")&&(on=U,Ho=b,Wn=null);break;case"focusout":Wn=Ho=on=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,Yc(M,a,z);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":Yc(M,a,z)}var X;if(ko)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else ln?Ac(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(Tc&&a.locale!=="ko"&&(ln||W!=="onCompositionStart"?W==="onCompositionEnd"&&ln&&(X=vc()):(oa=z,Co="value"in oa?oa.value:oa.textContent,ln=!0)),U=_i(b,W),0<U.length&&(W=new jc(W,e,null,a,z),M.push({event:W,listeners:U}),X?W.data=X:(X=Dc(a),X!==null&&(W.data=X)))),(X=Tp?Ep(e,a):Mp(e,a))&&(W=_i(b,"onBeforeInput"),0<W.length&&(U=new jc("onBeforeInput","beforeinput",null,a,z),M.push({event:U,listeners:W}),U.data=X)),xh(M,e,b,a,z)}hf(M,t)})}function wl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function _i(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Gn(e,a),l!=null&&n.unshift(wl(e,l,i)),l=Gn(e,t),l!=null&&n.push(wl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Sh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gf(e,t,a,n,l){for(var i=t._reactName,o=[];a!==null&&a!==n;){var c=a,d=c.alternate,b=c.stateNode;if(c=c.tag,d!==null&&d===n)break;c!==5&&c!==26&&c!==27||b===null||(d=b,l?(b=Gn(a,i),b!=null&&o.unshift(wl(a,b,d))):l||(b=Gn(a,i),b!=null&&o.push(wl(a,b,d)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var jh=/\r\n?/g,zh=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(jh,`
`).replace(zh,"")}function xf(e,t){return t=yf(t),yf(e)===t}function ce(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||tn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&tn(e,""+n);break;case"className":Gl(e,"class",n);break;case"tabIndex":Gl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(e,a,n);break;case"style":yc(e,n,i);break;case"data":if(t!=="object"){Gl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ql(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ce(e,t,"name",l.name,l,null),ce(e,t,"formEncType",l.formEncType,l,null),ce(e,t,"formMethod",l.formMethod,l,null),ce(e,t,"formTarget",l.formTarget,l,null)):(ce(e,t,"encType",l.encType,l,null),ce(e,t,"method",l.method,l,null),ce(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ql(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ht);break;case"onScroll":n!=null&&Z("scroll",e);break;case"onScrollEnd":n!=null&&Z("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ql(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Z("beforetoggle",e),Z("toggle",e),Yl(e,"popover",n);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Yl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=I0.get(a)||a,Yl(e,a,n))}}function ds(e,t,a,n,l,i){switch(a){case"style":yc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof n=="string"?tn(e,n):(typeof n=="number"||typeof n=="bigint")&&tn(e,""+n);break;case"onScroll":n!=null&&Z("scroll",e);break;case"onScrollEnd":n!=null&&Z("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[et]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Yl(e,a,n)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",e),Z("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ce(e,t,i,o,a,null)}}l&&ce(e,t,"srcSet",a.srcSet,a,null),n&&ce(e,t,"src",a.src,a,null);return;case"input":Z("invalid",e);var c=i=o=l=null,d=null,b=null;for(n in a)if(a.hasOwnProperty(n)){var z=a[n];if(z!=null)switch(n){case"name":l=z;break;case"type":o=z;break;case"checked":d=z;break;case"defaultChecked":b=z;break;case"value":i=z;break;case"defaultValue":c=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,t));break;default:ce(e,t,n,z,a,null)}}pc(e,i,c,d,b,o,l,!1);return;case"select":Z("invalid",e),n=o=i=null;for(l in a)if(a.hasOwnProperty(l)&&(c=a[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":o=c;break;case"multiple":n=c;default:ce(e,t,l,c,a,null)}t=i,a=o,e.multiple=!!n,t!=null?en(e,!!n,t,!1):a!=null&&en(e,!!n,a,!0);return;case"textarea":Z("invalid",e),i=l=n=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":n=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:ce(e,t,o,c,a,null)}mc(e,n,l,i);return;case"option":for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!=null)&&(d==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":ce(e,t,d,n,a,null));return;case"dialog":Z("beforetoggle",e),Z("toggle",e),Z("cancel",e),Z("close",e);break;case"iframe":case"object":Z("load",e);break;case"video":case"audio":for(n=0;n<vl.length;n++)Z(vl[n],e);break;case"image":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"embed":case"source":case"link":Z("error",e),Z("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in a)if(a.hasOwnProperty(b)&&(n=a[b],n!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ce(e,t,b,n,a,null)}return;default:if(To(t)){for(z in a)a.hasOwnProperty(z)&&(n=a[z],n!==void 0&&ds(e,t,z,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&ce(e,t,c,n,a,null))}function Th(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,c=null,d=null,b=null,z=null;for(w in a){var M=a[w];if(a.hasOwnProperty(w)&&M!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":d=M;default:n.hasOwnProperty(w)||ce(e,t,w,null,n,M)}}for(var v in n){var w=n[v];if(M=a[v],n.hasOwnProperty(v)&&(w!=null||M!=null))switch(v){case"type":i=w;break;case"name":l=w;break;case"checked":b=w;break;case"defaultChecked":z=w;break;case"value":o=w;break;case"defaultValue":c=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,t));break;default:w!==M&&ce(e,t,v,w,n,M)}}jo(e,o,c,d,b,z,i,l);return;case"select":w=o=c=v=null;for(i in a)if(d=a[i],a.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":w=d;default:n.hasOwnProperty(i)||ce(e,t,i,null,n,d)}for(l in n)if(i=n[l],d=a[l],n.hasOwnProperty(l)&&(i!=null||d!=null))switch(l){case"value":v=i;break;case"defaultValue":c=i;break;case"multiple":o=i;default:i!==d&&ce(e,t,l,i,n,d)}t=c,a=o,n=w,v!=null?en(e,!!a,v,!1):!!n!=!!a&&(t!=null?en(e,!!a,t,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":w=v=null;for(c in a)if(l=a[c],a.hasOwnProperty(c)&&l!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ce(e,t,c,null,n,l)}for(o in n)if(l=n[o],i=a[o],n.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":v=l;break;case"defaultValue":w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==i&&ce(e,t,o,l,n,i)}hc(e,v,w);return;case"option":for(var O in a)v=a[O],a.hasOwnProperty(O)&&v!=null&&!n.hasOwnProperty(O)&&(O==="selected"?e.selected=!1:ce(e,t,O,null,n,v));for(d in n)v=n[d],w=a[d],n.hasOwnProperty(d)&&v!==w&&(v!=null||w!=null)&&(d==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":ce(e,t,d,v,n,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in a)v=a[_],a.hasOwnProperty(_)&&v!=null&&!n.hasOwnProperty(_)&&ce(e,t,_,null,n,v);for(b in n)if(v=n[b],w=a[b],n.hasOwnProperty(b)&&v!==w&&(v!=null||w!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(r(137,t));break;default:ce(e,t,b,v,n,w)}return;default:if(To(t)){for(var re in a)v=a[re],a.hasOwnProperty(re)&&v!==void 0&&!n.hasOwnProperty(re)&&ds(e,t,re,void 0,n,v);for(z in n)v=n[z],w=a[z],!n.hasOwnProperty(z)||v===w||v===void 0&&w===void 0||ds(e,t,z,v,n,w);return}}for(var h in a)v=a[h],a.hasOwnProperty(h)&&v!=null&&!n.hasOwnProperty(h)&&ce(e,t,h,null,n,v);for(M in n)v=n[M],w=a[M],!n.hasOwnProperty(M)||v===w||v==null&&w==null||ce(e,t,M,v,n,w)}function bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,o=l.initiatorType,c=l.duration;if(i&&c&&bf(o)){for(o=0,c=l.responseEnd,n+=1;n<a.length;n++){var d=a[n],b=d.startTime;if(b>c)break;var z=d.transferSize,M=d.initiatorType;z&&bf(M)&&(d=d.responseEnd,o+=z*(d<c?1:(c-b)/(d-b)))}if(--n,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fs=null,ps=null;function Hi(e){return e.nodeType===9?e:e.ownerDocument}function vf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ms=null;function Mh(){var e=window.event;return e&&e.type==="popstate"?e===ms?!1:(ms=e,!0):(ms=null,!1)}var Sf=typeof setTimeout=="function"?setTimeout:void 0,Ah=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Dh=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(Ch)}:Sf;function Ch(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function zf(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Ln(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Sl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Sl(a);for(var i=a.firstChild;i;){var o=i.nextSibling,c=i.nodeName;i[qn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&Sl(e.ownerDocument.body);a=l}while(a);Ln(t)}function Tf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function gs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gs(a),wo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Oh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Uh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function Ef(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function ys(e){return e.data==="$?"||e.data==="$~"}function xs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bs=null;function Mf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Df(e,t,a){switch(t=Hi(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Sl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wo(e)}var Et=new Map,Cf=new Set;function qi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=C.d;C.d={f:Bh,r:kh,D:Nh,C:Rh,L:_h,m:Hh,X:Yh,S:qh,M:Gh};function Bh(){var e=ta.f(),t=Oi();return e||t}function kh(e){var t=Fa(e);t!==null&&t.tag===5&&t.type==="form"?$r(t):ta.r(e)}var Cn=typeof document>"u"?null:document;function Of(e,t,a){var n=Cn;if(n&&typeof t=="string"&&t){var l=xt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Cf.has(l)||(Cf.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Qe(t,"link",e),Re(t),n.head.appendChild(t)))}}function Nh(e){ta.D(e),Of("dns-prefetch",e,null)}function Rh(e,t){ta.C(e,t),Of("preconnect",e,t)}function _h(e,t,a){ta.L(e,t,a);var n=Cn;if(n&&e&&t){var l='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+xt(a.imageSizes)+'"]')):l+='[href="'+xt(e)+'"]';var i=l;switch(t){case"style":i=On(e);break;case"script":i=Un(e)}Et.has(i)||(e=L({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Et.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(jl(i))||t==="script"&&n.querySelector(zl(i))||(t=n.createElement("link"),Qe(t,"link",e),Re(t),n.head.appendChild(t)))}}function Hh(e,t){ta.m(e,t);var a=Cn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+xt(n)+'"][href="'+xt(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Un(e)}if(!Et.has(i)&&(e=L({rel:"modulepreload",href:e},t),Et.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zl(i)))return}n=a.createElement("link"),Qe(n,"link",e),Re(n),a.head.appendChild(n)}}}function qh(e,t,a){ta.S(e,t,a);var n=Cn;if(n&&e){var l=Ia(n).hoistableStyles,i=On(e);t=t||"default";var o=l.get(i);if(!o){var c={loading:0,preload:null};if(o=n.querySelector(jl(i)))c.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Et.get(i))&&vs(e,a);var d=o=n.createElement("link");Re(d),Qe(d,"link",e),d._p=new Promise(function(b,z){d.onload=b,d.onerror=z}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Yi(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:c},l.set(i,o)}}}function Yh(e,t){ta.X(e,t);var a=Cn;if(a&&e){var n=Ia(a).hoistableScripts,l=Un(e),i=n.get(l);i||(i=a.querySelector(zl(l)),i||(e=L({src:e,async:!0},t),(t=Et.get(l))&&ws(e,t),i=a.createElement("script"),Re(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Gh(e,t){ta.M(e,t);var a=Cn;if(a&&e){var n=Ia(a).hoistableScripts,l=Un(e),i=n.get(l);i||(i=a.querySelector(zl(l)),i||(e=L({src:e,async:!0,type:"module"},t),(t=Et.get(l))&&ws(e,t),i=a.createElement("script"),Re(i),Qe(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Uf(e,t,a,n){var l=(l=na.current)?qi(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=On(a.href),a=Ia(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=On(a.href);var i=Ia(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(jl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Et.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Et.set(e,a),i||Xh(l,e,a,o.state))),t&&n===null)throw Error(r(528,""));return o}if(t&&n!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Un(a),a=Ia(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function On(e){return'href="'+xt(e)+'"'}function jl(e){return'link[rel="stylesheet"]['+e+"]"}function Lf(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function Xh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Qe(t,"link",a),Re(t),e.head.appendChild(t))}function Un(e){return'[src="'+xt(e)+'"]'}function zl(e){return"script[async]"+e}function Bf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(n)return t.instance=n,Re(n),n;var l=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Re(n),Qe(n,"style",l),Yi(n,a.precedence,e),t.instance=n;case"stylesheet":l=On(a.href);var i=e.querySelector(jl(l));if(i)return t.state.loading|=4,t.instance=i,Re(i),i;n=Lf(a),(l=Et.get(l))&&vs(n,l),i=(e.ownerDocument||e).createElement("link"),Re(i);var o=i;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Qe(i,"link",n),t.state.loading|=4,Yi(i,a.precedence,e),t.instance=i;case"script":return i=Un(a.src),(l=e.querySelector(zl(i)))?(t.instance=l,Re(l),l):(n=a,(l=Et.get(i))&&(n=L({},a),ws(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Re(l),Qe(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Yi(n,a.precedence,e));return t.instance}function Yi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,o=0;o<n.length;o++){var c=n[o];if(c.dataset.precedence===t)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function vs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function kf(e,t,a){if(Gi===null){var n=new Map,l=Gi=new Map;l.set(a,n)}else l=Gi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[qn]||i[qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var c=n.get(o);c?c.push(i):n.set(o,[i])}}return n}function Nf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Qh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=On(n.href),i=t.querySelector(jl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Re(i);return}i=t.ownerDocument||t,n=Lf(n),(l=Et.get(l))&&vs(n,l),i=i.createElement("link"),Re(i);var o=i;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Qe(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ss=0;function $h(e,t){return e.stylesheets&&e.count===0&&Vi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ss===0&&(Ss=62500*Eh());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ss?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qi=null;function Vi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qi=new Map,t.forEach(Zh,e),Qi=null,Xi.call(e))}function Zh(e,t){if(!(t.state.loading&4)){var a=Qi.get(e);if(a)var n=a.get(null);else{a=new Map,Qi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}l=t.instance,o=l.getAttribute("data-precedence"),i=a.get(o)||n,i===n&&a.set(null,l),a.set(o,l),this.count++,n=Xi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Tl={$$typeof:$e,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Jh(e,t,a,n,l,i,o,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.hiddenUpdates=yo(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function _f(e,t,a,n,l,i,o,c,d,b,z,M){return e=new Jh(e,t,a,o,d,b,z,M,c),t=1,i===!0&&(t|=24),i=dt(3,null,null,t),e.current=i,i.stateNode=e,t=tu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},iu(i),e}function Hf(e){return e?(e=cn,e):cn}function qf(e,t,a,n,l,i){l=Hf(l),n.context===null?n.context=l:n.pendingContext=l,n=fa(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=pa(e,n,t),a!==null&&(ot(a,e,t),nl(a,e,t))}function Yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function js(e,t){Yf(e,t),(e=e.alternate)&&Yf(e,t)}function Gf(e){if(e.tag===13||e.tag===31){var t=ka(e,67108864);t!==null&&ot(t,e,67108864),js(e,67108864)}}function Xf(e){if(e.tag===13||e.tag===31){var t=gt();t=xo(t);var a=ka(e,t);a!==null&&ot(a,e,t),js(e,t)}}var $i=!0;function Kh(e,t,a,n){var l=E.T;E.T=null;var i=C.p;try{C.p=2,zs(e,t,a,n)}finally{C.p=i,E.T=l}}function Wh(e,t,a,n){var l=E.T;E.T=null;var i=C.p;try{C.p=8,zs(e,t,a,n)}finally{C.p=i,E.T=l}}function zs(e,t,a,n){if($i){var l=Ts(n);if(l===null)rs(e,t,n,Zi,a),Vf(e,n);else if(Ih(l,e,t,a,n))n.stopPropagation();else if(Vf(e,n),t&4&&-1<Fh.indexOf(e)){for(;l!==null;){var i=Fa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Ca(i.pendingLanes);if(o!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-ct(o);c.entanglements[1]|=d,o&=~d}Rt(i),(ee&6)===0&&(Di=ut()+500,bl(0))}}break;case 31:case 13:c=ka(i,2),c!==null&&ot(c,i,2),Oi(),js(i,2)}if(i=Ts(n),i===null&&rs(e,t,n,Zi,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else rs(e,t,n,null,a)}}function Ts(e){return e=Mo(e),Es(e)}var Zi=null;function Es(e){if(Zi=null,e=Wa(e),e!==null){var t=S(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=j(t),e!==null)return e;e=null}else if(a===31){if(e=k(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Qf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(N0()){case Fs:return 2;case Is:return 8;case Nl:case R0:return 32;case Ps:return 268435456;default:return 32}default:return 32}}var Ms=!1,za=null,Ta=null,Ea=null,El=new Map,Ml=new Map,Ma=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vf(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":El.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(t.pointerId)}}function Al(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Fa(t),t!==null&&Gf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ih(e,t,a,n,l){switch(t){case"focusin":return za=Al(za,e,t,a,n,l),!0;case"dragenter":return Ta=Al(Ta,e,t,a,n,l),!0;case"mouseover":return Ea=Al(Ea,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return El.set(i,Al(El.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,Ml.set(i,Al(Ml.get(i)||null,e,t,a,n,l)),!0}return!1}function $f(e){var t=Wa(e.target);if(t!==null){var a=S(t);if(a!==null){if(t=a.tag,t===13){if(t=j(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Xf(a)});return}}else if(t===31){if(t=k(a),t!==null){e.blockedOn=t,ic(e.priority,function(){Xf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ts(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Eo=n,a.target.dispatchEvent(n),Eo=null}else return t=Fa(a),t!==null&&Gf(t),e.blockedOn=a,!1;t.shift()}return!0}function Zf(e,t,a){Ji(e)&&a.delete(t)}function Ph(){Ms=!1,za!==null&&Ji(za)&&(za=null),Ta!==null&&Ji(Ta)&&(Ta=null),Ea!==null&&Ji(Ea)&&(Ea=null),El.forEach(Zf),Ml.forEach(Zf)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,Ms||(Ms=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ph)))}var Wi=null;function Jf(e){Wi!==e&&(Wi=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Wi===e&&(Wi=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(Es(n||a)===null)continue;break}var i=Fa(a);i!==null&&(e.splice(t,3),t-=3,Tu(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Ln(e){function t(d){return Ki(d,e)}za!==null&&Ki(za,e),Ta!==null&&Ki(Ta,e),Ea!==null&&Ki(Ea,e),El.forEach(t),Ml.forEach(t);for(var a=0;a<Ma.length;a++){var n=Ma[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)$f(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],o=l[et]||null;if(typeof i=="function")o||Jf(a);else if(o){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[et]||null)c=o.formAction;else if(Es(l)!==null)continue}else c=o.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),Jf(a)}}}function Kf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function As(e){this._internalRoot=e}Fi.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,n=gt();qf(a,n,e,t,null,null)},Fi.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qf(e.current,2,null,e,null,null),Oi(),t[Ka]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&$f(e)}};var Wf=m.version;if(Wf!=="19.2.4")throw Error(r(527,Wf,"19.2.4"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=R(t),e=e!==null?J(e):null,e=e===null?null:e.stateNode,e};var em={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Rn=Ii.inject(em),st=Ii}catch{}}return Cl.createRoot=function(e,t){if(!g(e))throw Error(r(299));var a=!1,n="",l=ad,i=nd,o=ld;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_f(e,1,!1,null,null,a,n,null,l,i,o,Kf),e[Ka]=t.current,cs(e),new As(t)},Cl.hydrateRoot=function(e,t,a){if(!g(e))throw Error(r(299));var n=!1,l="",i=ad,o=nd,c=ld,d=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=_f(e,1,!0,t,a??null,n,l,d,i,o,c,Kf),t.context=Hf(null),a=t.current,n=gt(),n=xo(n),l=fa(n),l.callback=null,pa(a,l,n),a=n,t.current.lanes=a,Hn(t,a),Rt(t),e[Ka]=t.current,cs(e),new Fi(t)},Cl.version="19.2.4",Cl}var n0;function mm(){if(n0)return Cs.exports;n0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(m){console.error(m)}}return s(),Cs.exports=hm(),Cs.exports}var gm=mm();const ym={value:0},j0=w0({name:"app",initialState:ym,reducers:{increment:s=>{s.value+=1},decrement:s=>{s.value-=1},setValue:(s,m)=>{s.value=m.payload}}}),{increment:Nx,decrement:Rx,setValue:_x}=j0.actions,xm=j0.reducer,bm={logoAlt:"Margg",links:[{label:"Home",href:"#home",primary:!0},{label:"Our Products",href:"#products"},{label:"Contact Us",href:"#contact-us"}]},vm={titleLine1:"BRING OUT YOUR",titleLine2:"BEST POTENTIAL",description:"Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry",inputPlaceholder:"Enter Email",inputButtonText:"Join the waitlist",tiles:{autoCycleIntervalMs:3e3,defaultTileId:1,row1:[{id:1,ariaLabel:"Frontend Developer",title:"Frontend Developer",description:"Build modern UI with React, component systems, and responsive layouts.",icon:"ScrollIcon"},{id:2,ariaLabel:"Programming Essentials",title:"Programming Essentials",description:"Learn core concepts, clean code, and problem-solving techniques.",icon:"MessageProgrammingIcon"},{id:3,ariaLabel:"UI Design Fundamentals",title:"UI Design Fundamentals",description:"Design trends, spacing systems, and accessible UI patterns.",icon:"PenToolIcon"}],row2:[{id:4,ariaLabel:"Backend Development",title:"Backend Development",description:"Server-side logic, APIs, and database management.",icon:"DriverIcon"},{id:5,ariaLabel:"Database Design",title:"Database Design",description:"Data modeling, SQL, and database optimization.",icon:"FavoriteChartIcon"},{id:6,ariaLabel:"Cloud & DevOps",title:"Cloud & DevOps",description:"Deploy apps, understand environments, and ship confidently.",icon:"CloudConnectionIcon"},{id:7,ariaLabel:"Testing & QA",title:"Testing & QA",description:"Write quality tests and ensure reliable applications.",icon:"LockIcon"}],row3:[{id:8,ariaLabel:"Security",title:"Security",description:"Learn safe patterns, auth basics, and secure-by-default UI.",icon:"MessageProgrammingIcon"},{id:9,ariaLabel:"Algorithms",title:"Algorithms",description:"Problem-solving patterns and data structures.",icon:"PenToolIcon"},{id:10,ariaLabel:"System Design",title:"System Design",description:"Architecture, scalability, and distributed systems.",icon:"FavoriteChartIcon"},{id:11,ariaLabel:"Performance",title:"Performance",description:"Optimize load times, rendering, and user experience.",icon:"DriverIcon"}]}},wm={waitList:!0,stats:[{value:"43+",label:`University
Partners`},{value:"12K+",label:`Students
Enrolled`},{value:"35",label:`Outstanding
Mentors`},{value:"7.5K",label:`Student
Placements`}]},Sm={titleLine1:"SUPERCHARGE",titleLine2:"YOUR LEARNING POTENTIAL WITH OUR APP",description:"Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away"},jm={title:"JOIN WAITLIST",subtitle:"First step towards your dream career",inputPlaceholder:"Enter Email",buttonText:"Notify Me"},zm=["Frontend Development","Backend Development","Programming Essentials","UI Design Fundamentals","Database Design","Cloud & DevOps","Testing & QA","Security","Algorithms","System Design","Performance","React","Node.js","Python","Java","Data Structures","Machine Learning","Mobile Development"],Tm={submissionMode:"sheets",baseUrl:"https://api.margg.xyz/service-core",endpoints:{waitlist:"/general/user-contacts/waitlist",learner:"/general/user-contacts",instructor:"/general/instructor-enquiries",partner:"/general/organisation-enquiries"},googleSheets:{scriptUrl:"https://script.google.com/macros/s/AKfycbwmmOYKHVpfZEcqWhhAlNr6G7726uUj9WT4cua0i8sSMDQrQbWoBK2jj0Pc1FpRNfuB1g/exec"},emailjs:{notifyEmail:"margglive@gmail.com",accounts:{account1:{serviceId:"service_uwxllg6",publicKey:"sS9pUpAdxxLri3bjO"},account2:{serviceId:"service_oq3tfkg",publicKey:"r9cx6ICX3cdQFxZC9"}},templates:{waitlist:{templateId:"template_ob8hs05",account:"account1"},learner:{templateId:"template_n8yn8zn",account:"account1"},instructor:{templateId:"template_a5ox0x9",account:"account2"},partner:{templateId:"template_qxq0lla",account:"account2"}}}},Em={contactTitle:"GET IN TOUCH WITH US",location:"Bangalore | Tirupati",phone:"+91 7993559974",email:"info@margg.in",tagline:"Curated routes for curious minds",companyName:"Margg Private Limited",logoAlt:"Margg Logo",socialLinks:[{name:"YouTube",icon:"YoutubeIcon",url:"https://www.youtube.com/@MarggLive"},{name:"Instagram",icon:"InstagramIcon",url:"https://instagram.com/margglive"},{name:"X (Twitter)",icon:"TwitterIcon",url:"https://x.com/MarggLive"},{name:"Discord",icon:"DiscordIcon",url:"https://discord.gg/PDzhNUnB"}]},Mm={roadmap:{title:"Roadmap Based Learning"},community:{title:"Community"},focusTimer:{title:"Focus Timer"},interviewPrep:{title:"Interview Prep Materials"},jobBoard:{title:"Job Board"},mentorship:{title:"One-on-One Mentorship"},projects:{title:"Projects"},resume:{title:"Resume Builder"},skills:{title:"Skills Assessment"},streaks:{title:"Streaks"},certifications:{title:"Certifications"}},Am={title:"Margg – Roadmap Based Courses & Best LMS Platform in South India | Gagan's Application",description:"Margg is the best LMS application in South India offering roadmap based courses, structured learning paths, one-on-one mentorship, interview prep, resume building, certifications & career placement support for college students. Built by Gagan — curated routes for curious minds.",keywords:"roadmap based courses, best LMS application in south india, Gagan's application, Margg, LMS for college students, learning management system India, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development, structured learning paths, best online courses India, South India LMS, Bangalore LMS, Tirupati education platform, curated learning roadmaps, coding bootcamp India, one-on-one mentorship India, resume builder for students, job placement LMS, streaks based learning, certification courses India, Margg Private Limited, MarggLive, best e-learning platform India",author:"Margg Private Limited",robots:"index, follow",locale:"en_IN",url:"https://margg.in",ogImage:"https://margg.in/og-cover.png",twitterHandle:"@MarggLive",themeColor:"#090215",foundingYear:"2023",appCategory:"EducationApplication"},Dm={navbar:bm,hero:vm,analytics:wm,supercharge:Sm,joinWaitlist:jm,courses:zm,api:Tm,footer:Em,blocks:Mm,seo:Am},z0=w0({name:"content",initialState:{data:Dm,status:"idle",source:"fallback"},reducers:{contentLoading(s){s.status="loading"},contentSucceeded(s,m){s.data=m.payload.data,s.status="succeeded",s.source=m.payload.source},contentFailed(s){s.status="failed",s.source="fallback"}}}),{contentLoading:Hx,contentSucceeded:qx,contentFailed:Yx}=z0.actions,Cm=z0.reducer,Om=s=>s.content.data,T0="/assets/Margg-CT4M_ONj.webp",Bn="1920px",l0={mobile:"1000px",tablet:"1200px"},te={mobile:`@media (max-width: ${l0.mobile})`,tablet:`@media (max-width: ${l0.tablet})`},H={heading:'"Bebas Neue", sans-serif',body:'"Inter", sans-serif'};function Ve(s){const m=nm(Om);return s?m[s]??{}:m}ue`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;const Um=ue`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`,Lm=f.div`
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
`,Bm=f.nav`
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
`,km=f.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,Nm=f.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;f.div`
  display: flex;
  align-items: flex-start;
`;const Rm=f.img`
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
`;const _m=f.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`,Hm=f.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`,qm=f.a`
  color: white;
  font-family: ${H.body};
  font-size: 16px;
  font-weight: ${s=>s.$primary?"600":"300"};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${s=>s.$primary?"1":"0.5"};

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`,Ym=f.button`
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
`,Ls=f.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${s=>s.$open?"50%":"0"};
    transform: ${s=>s.$open?"translateY(-50%) rotate(45deg)":"none"};
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${s=>s.$open?0:1};
  }
  &:nth-child(3) {
    bottom: ${s=>s.$open?"auto":"0"};
    top: ${s=>s.$open?"50%":"auto"};
    transform: ${s=>s.$open?"translateY(-50%) rotate(-45deg)":"none"};
  }
`,Gm=f.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 49;
    background: rgba(9, 2, 21, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${s=>s.$open?1:0};
    pointer-events: ${s=>s.$open?"auto":"none"};
    transition: opacity 0.3s ease;
  }
`,Xm=f.div`
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
    transform: translateX(${s=>s.$open?"0":"100%"});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`,Qm=f.button`
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
`,Vm=f.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$m=f.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${H.body};
  font-size: 18px;
  font-weight: ${s=>s.$primary?"600":"400"};
  color: #fff;
  opacity: ${s=>s.$primary?1:.7};
  transition: all 0.2s ease;
  background: ${s=>s.$primary?"rgba(80, 19, 192, 0.15)":"transparent"};

  ${s=>s.$show&&Ee`
      animation: ${Um} 0.4s ease forwards;
      animation-delay: ${s.$delay||"0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`,Zm=f.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`,Jm=f.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`,i0={Home:u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:u.jsx("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Our Products":u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:u.jsx("path",{d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Contact Us":u.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:u.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},Gs=()=>{const{logoAlt:s,links:m}=Ve("navbar"),[y,r]=D.useState(!1),g=D.useRef(null);D.useEffect(()=>(y?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[y]),D.useEffect(()=>{const j=k=>{k.key==="Escape"&&r(!1)};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[]);const S=D.useCallback(j=>{const k=j.currentTarget.getAttribute("href");k?.startsWith("#")&&(j.preventDefault(),r(!1),setTimeout(()=>{const N=document.getElementById(k.slice(1));if(N){const R=document.querySelector("nav")?.offsetHeight||72,J=N.getBoundingClientRect().top+window.scrollY-R;window.scrollTo({top:J,behavior:"smooth"})}},100))},[]);return u.jsxs(u.Fragment,{children:[u.jsx(Lm,{children:u.jsx(Bm,{"aria-label":"Main navigation",children:u.jsxs(km,{children:[u.jsx(Nm,{children:u.jsx(Rm,{src:T0,alt:s,loading:"eager",fetchPriority:"high"})}),u.jsx(_m,{children:u.jsx(Hm,{children:m.map(j=>u.jsx(qm,{href:j.href,$primary:j.primary?!0:void 0,onClick:S,children:j.label},j.label))})}),u.jsxs(Ym,{onClick:()=>r(j=>!j),"aria-label":y?"Close menu":"Open menu","aria-expanded":y,children:[u.jsx(Ls,{$open:y}),u.jsx(Ls,{$open:y}),u.jsx(Ls,{$open:y})]})]})})}),u.jsx(Gm,{$open:y,onClick:()=>r(!1)}),u.jsxs(Xm,{$open:y,ref:g,children:[u.jsx(Qm,{onClick:()=>r(!1),"aria-label":"Close menu",children:u.jsx("svg",{viewBox:"0 0 16 16",fill:"none",children:u.jsx("path",{d:"M12 4L4 12M4 4l8 8",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round"})})}),u.jsx(Vm,{children:m.map((j,k)=>u.jsxs($m,{href:j.href,$primary:j.primary,$show:y,$delay:`${.1+k*.07}s`,onClick:S,children:[u.jsx(Zm,{children:i0[j.label]||i0.Home}),j.label]},j.label))}),u.jsx(Jm,{})]})]})};function Km({color:s="currentColor"}){return u.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("rect",{x:"10",y:"12",width:"44",height:"40",rx:"10",fill:s,opacity:"0.25"}),u.jsx("rect",{x:"18",y:"20",width:"28",height:"24",rx:"8",fill:s,opacity:"0.35"}),u.jsx("path",{d:"M26 36L32 30L38 36",stroke:s,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"})]})}function Wm({color:s="currentColor"}){return u.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z",fill:s,opacity:"0.25"}),u.jsx("path",{d:"M26 24L20 30L26 36",stroke:s,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),u.jsx("path",{d:"M38 24L44 30L38 36",stroke:s,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),u.jsx("path",{d:"M34 22L30 38",stroke:s,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})]})}function Fm({color:s="currentColor"}){return u.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M20 44L44 20",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),u.jsx("path",{d:"M18 46L22 42L26 46L22 50L18 46Z",fill:s,opacity:"0.35"}),u.jsx("path",{d:"M38 18L46 26",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function Im({color:s="currentColor"}){return u.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("rect",{x:"16",y:"14",width:"32",height:"28",rx:"6",fill:s,opacity:"0.25"}),u.jsx("rect",{x:"20",y:"18",width:"24",height:"14",rx:"4",fill:s,opacity:"0.35"}),u.jsx("path",{d:"M26 48H38",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function Pm({color:s="currentColor"}){return u.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z",fill:s,opacity:"0.25"}),u.jsx("path",{d:"M26 46H38",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),u.jsx("path",{d:"M22 52H42",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function e1({color:s="currentColor"}){return u.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M16 44V34",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),u.jsx("path",{d:"M28 44V26",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),u.jsx("path",{d:"M40 44V30",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),u.jsx("path",{d:"M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z",fill:s,opacity:"0.35"})]})}function t1({color:s="currentColor"}){return u.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("rect",{x:"18",y:"30",width:"28",height:"22",rx:"10",fill:s,opacity:"0.25"}),u.jsx("path",{d:"M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),u.jsx("path",{d:"M32 38V44",stroke:s,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}const a1=(s,m=null)=>{const y={1:[],2:[],3:[]};s.forEach(S=>{y[S.row].push(S)}),Object.keys(y).forEach(S=>{y[S].sort((j,k)=>j.col-k.col)});let r=!0;for(;r;){r=!1;for(let S=3;S>=2;S--){const j=y[S];if(j.reduce((N,R)=>N+R.span,0)>4){const N=j.findIndex(J=>J.id===m);let R;N!==-1&&N<=1?R=j.pop():R=j.shift(),R.row=S-1,y[S-1].push(R),r=!0;break}}}const g=[];return Object.keys(y).forEach(S=>{let j=1;y[S].forEach(k=>{g.push({...k,row:parseInt(S),col:j}),j+=k.span})}),g},n1=(s,m)=>{if(!m)return s.map(r=>({...r,span:1}));const y=s.map(r=>({...r,span:r.id===m?2:1}));return a1(y,m)},l1=s=>{const m=[];let y=0;for(let r=1;r<=3;r++)y<s.length&&(m.push({id:s[y],row:1,col:r,span:1}),y++);for(let r=1;r<=4;r++)y<s.length&&(m.push({id:s[y],row:2,col:r,span:1}),y++);for(let r=1;r<=4;r++)y<s.length&&(m.push({id:s[y],row:3,col:r,span:1}),y++);return m},i1=3e3,o1=1,u1=f.div`
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
`,s1=f.div`
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
    background: ${s=>s.$isExpanded?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.1)"};
    backdrop-filter: blur(10px);
    box-shadow: ${s=>s.$isExpanded?"0px 4px 32px 0px rgba(176, 149, 227, 0.25)":"none"};
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
`,c1=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,r1=f.div`
  display: flex;
  align-items: center;
  justify-content: ${s=>s.$isExpanded?"flex-start":"center"};
  gap: ${s=>s.$isExpanded?"16px":"0"};
  width: ${s=>s.$isExpanded?"100%":"auto"};
  padding: ${s=>s.$isExpanded?"0 20px":"0"};
  transition: none;
`,d1=f.div`
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
`,f1=f.div`
  font-family: ${H.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  display: ${s=>s.$isExpanded?"block":"none"};
  opacity: ${s=>s.$isExpanded?"1":"0"};
  transform: translateX(${s=>s.$isExpanded?"0":"20px"});
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
`;function p1({ariaLabel:s,title:m,icon:y,gridRow:r,gridColumn:g,isExpanded:S,onMouseEnter:j,onMouseLeave:k,onClick:N,tileId:R}){return u.jsx(s1,{"aria-label":s,$isExpanded:S,style:{gridRow:r,gridColumn:g},onMouseEnter:()=>j(R),onMouseLeave:k,onClick:()=>N(R),children:u.jsx(c1,{children:u.jsxs(r1,{$isExpanded:S,children:[u.jsx(d1,{children:y}),u.jsx(f1,{$isExpanded:S,children:m})]})})})}const h1={ScrollIcon:Km,MessageProgrammingIcon:Wm,PenToolIcon:Fm,DriverIcon:Im,CloudConnectionIcon:Pm,FavoriteChartIcon:e1,LockIcon:t1};function m1({tileColor:s}){const m=Ve("hero").tiles??{},y=m.autoCycleIntervalMs??i1,r=m.defaultTileId??o1,g=D.useMemo(()=>{const Q=m.row1??[],we=m.row2??[],Ue=m.row3??[];return[...Q,...we,...Ue]},[m]),S=D.useMemo(()=>g.length?Math.min(...g.map(Q=>Q.id)):1,[g]),j=D.useMemo(()=>g.length?Math.max(...g.map(Q=>Q.id)):1,[g]),[k,N]=D.useState(r),[R,J]=D.useState(!1),[L,ae]=D.useState(!1),fe=D.useRef(null),be=D.useRef(null);D.useEffect(()=>{if(typeof window<"u"){const Q=()=>ae(window.innerWidth<=1e3);return Q(),window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)}},[]),D.useEffect(()=>L?void 0:(R||(fe.current=setInterval(()=>{if(!R){const we=Math.floor(Math.random()*(j-S+1))+S;N(we)}},y)),()=>{fe.current&&clearInterval(fe.current)}),[R,L]);const Me=D.useMemo(()=>{const Q=g.map(Be=>Be.id),we={},Ue=l1(Q);return we.default=Ue,Q.forEach(Be=>{we[Be]=n1(Ue,Be)}),we},[g]),le=D.useMemo(()=>Me[k||"default"]||Me.default,[Me,k]),ve=Q=>{J(!0),N(Q),fe.current&&clearInterval(fe.current)},He=()=>{N(r),J(!1)},$e=Q=>{L&&(be.current&&clearTimeout(be.current),k===Q?N(r):(N(Q),be.current=setTimeout(()=>{N(r)},4e3)))};return D.useEffect(()=>()=>{be.current&&clearTimeout(be.current)},[]),u.jsx(u1,{"aria-label":"intro tiles",children:le.map(Q=>{const we=g.find(Ke=>Ke.id===Q.id);if(!we)return null;const Ue=h1[we.icon],Be=Q.span===2;return u.jsx(p1,{tileId:Q.id,ariaLabel:we.ariaLabel,title:we.title,icon:u.jsx(Ue,{color:s}),gridRow:Q.row,gridColumn:`${Q.col} / span ${Q.span}`,isExpanded:Be,onMouseEnter:ve,onMouseLeave:He,onClick:$e},Q.id)})})}const o0="margg_waitlist_joined",Bs="margg:waitlist_joined",g1=ue`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,y1=ue`
  to { stroke-dashoffset: 0; }
`,x1=ue`
  to { transform: rotate(360deg); }
`,u0=f.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,b1=f.div`
  position: relative;
  width: 100%;
  height: 56px;
`,v1=f.input`
  width: 100%;
  height: 100%;
  padding: 16px 180px 16px 24px;
  border: 1px solid ${s=>s.$hasError?"#FF4D4F":"#2d2d2d"};
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
    border-color: ${s=>s.$hasError?"#FF4D4F":"#d3c4ef"};
  }

  @media (max-width: 640px) {
    padding: 14px 120px 14px 16px;
    font-size: 14px;
  }
`,w1=f.button`
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
`,S1=f.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(80, 19, 192, 0.25);
  border-top-color: #5013c0;
  border-radius: 50%;
  animation: ${x1} 0.6s linear infinite;

  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`,j1=f.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ff6b6b;
  opacity: ${s=>s.$show?"1":"0"};
  max-height: ${s=>s.$show?"30px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,z1=f.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${g1} 0.4s ease forwards;

  @media (max-width: 640px) {
    gap: 10px;
  }
`,T1=f.div`
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
    animation: ${y1} 0.4s ease 0.25s forwards;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    svg { width: 18px; height: 18px; }
  }
`,E1=f.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(238, 231, 249, 0.85);
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,E0=({placeholder:s="Enter Email",buttonText:m="Join the waitlist",onSubmit:y})=>{const[r,g]=D.useState(""),[S,j]=D.useState(""),[k,N]=D.useState(!1),[R,J]=D.useState(!1),L=D.useRef(null),ae=D.useRef(null),fe=D.useRef(null);D.useEffect(()=>{try{typeof window<"u"&&localStorage.getItem(o0)==="true"&&N(!0)}catch{}},[]),D.useEffect(()=>{const ve=()=>N(!0);return window.addEventListener(Bs,ve),()=>window.removeEventListener(Bs,ve)},[]),D.useEffect(()=>{ae.current&&!fe.current&&(fe.current=ae.current.offsetWidth)}),D.useEffect(()=>{const ve=He=>{L.current&&!L.current.contains(He.target)&&S&&j("")};return document.addEventListener("mousedown",ve),()=>{document.removeEventListener("mousedown",ve)}},[S]);const be=ve=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ve),Me=async ve=>{if(ve.preventDefault(),j(""),!be(r)){j("Please enter a valid email address");return}if(y){J(!0);try{await y(r);try{localStorage.setItem(o0,"true")}catch{}window.dispatchEvent(new Event(Bs)),N(!0)}catch(He){He.message==="already_registered"?j("This email is already registered"):He.message==="already_enrolled"?j("This email is already enrolled in the waitlist"):j(He.message||"Something went wrong. Please try again.")}finally{J(!1)}}},le=ve=>{g(ve.target.value),S&&j("")};return k?u.jsx(u0,{ref:L,children:u.jsxs(z1,{children:[u.jsx(T1,{children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:u.jsx("path",{d:"M5 13l4 4L19 7",stroke:"#B095E3",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.jsx(E1,{children:"You have already joined the waitlist"})]})}):u.jsxs(u0,{ref:L,children:[u.jsx("form",{onSubmit:Me,children:u.jsxs(b1,{children:[u.jsx(v1,{type:"email",placeholder:s,value:r,onChange:le,$hasError:!!S,disabled:R}),u.jsx(w1,{ref:ae,type:"submit",disabled:R,style:R&&fe.current?{width:fe.current}:void 0,children:R?u.jsx(S1,{}):m})]})}),u.jsx(j1,{$show:!!S,children:S})]})};async function no(s,m,y){if(!s)throw new Error("Google Sheets integration is not configured. Please set the script URL.");const r={_sheet:m,...y};let g;try{g=await fetch(s,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(r),signal:AbortSignal.timeout(15e3)})}catch(S){throw S.name==="TimeoutError"||S.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach Google Sheets. Please check your internet connection and try again.")}return{ok:!0}}let ks=!1,Ol=null;function M1(){return ks&&window.emailjs?Promise.resolve():Ol||(Ol=new Promise((s,m)=>{if(window.emailjs){ks=!0,s();return}const y=document.createElement("script");y.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",y.async=!0,y.onload=()=>{ks=!0,s()},y.onerror=()=>{Ol=null,m(new Error("Failed to load EmailJS SDK."))},document.head.appendChild(y)}),Ol)}function A1(s,m){const y=s?.templates?.[m];if(!y)return null;const r=y.account,g=s?.accounts?.[r];return!g?.serviceId||!g?.publicKey?null:{serviceId:g.serviceId,publicKey:g.publicKey,templateId:y.templateId}}async function lo(s,m,y){const r=A1(s,m);if(!r)return console.warn(`[EmailJS] No valid config for "${m}" — skipping.`),{ok:!0,skipped:!0};try{await M1(),window.emailjs.init(r.publicKey);const g={...y,to_email:s.notifyEmail||"info@margg.in",submission_time:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})},S=await window.emailjs.send(r.serviceId,r.templateId,g);return S.status!==200&&console.warn("[EmailJS] Non-200 status:",S),{ok:!0}}catch(g){return console.error("[EmailJS] Send failed:",g),{ok:!1,error:g.message}}}const D1=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,C1=/^[0-9\s\-+()]{10,15}$/;function Ut(s,m){if(!s||!String(s).trim())throw new Error(`${m} is required`);return String(s).trim()}function io(s){const m=Ut(s,"Email").toLowerCase().slice(0,254);if(!D1.test(m))throw new Error("Please enter a valid email address");return m}function Vs(s){const m=Ut(s,"Phone number");if(!C1.test(m))throw new Error("Please enter a valid phone number");return m}async function oo(s,m){let y;try{y=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m),signal:AbortSignal.timeout(15e3)})}catch(g){throw g.name==="TimeoutError"||g.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach the server. Please check your internet connection and try again.")}if(y.ok)return{ok:!0};let r="";try{const g=await y.json();r=g?.data?.message||g?.message||g?.error||""}catch{}throw y.status===409?new Error(r||"This entry already exists. Please use a different email."):y.status===422||y.status===400?new Error(r||"Some fields are invalid. Please review and try again."):y.status===429?new Error("Too many requests. Please wait a moment and try again."):y.status>=500?new Error("Our servers are temporarily unavailable. Please try again in a few moments."):new Error(r||"Something went wrong. Please try again.")}function uo(s){return s?.submissionMode==="sheets"}async function M0(s,m){const y=io(m);if(uo(s))return await no(s.googleSheets?.scriptUrl,"Waitlist",{email:y}),await lo(s.emailjs,"waitlist",{form_type:"Waitlist",email:y}),{ok:!0};const r=`${s.baseUrl}${s.endpoints.waitlist}`;return oo(r,{email:y})}async function O1(s,m){const y=Ut(m.fullName,"Full name").split(" ")[0],r=Ut(m.fullName,"Full name").split(" ").slice(1).join(" ")||"",g=Vs(m.phone),S=io(m.email),j=Ut(m.college,"College name"),k=Ut(m.branch,"Branch"),N=Ut(m.year,"Year"),R=m.query||"";if(uo(s)){const ae={firstName:y,lastName:r,phone:g,email:S,collegeName:j,branch:k,year:N,query:R};return await no(s.googleSheets?.scriptUrl,"Learners",ae),await lo(s.emailjs,"learner",{form_type:"Learner Enquiry",full_name:`${y} ${r}`.trim(),phone:g,email:S,college_name:j,branch:k,year:N,query:R}),{ok:!0}}const J={firstName:y,lastName:r,phone:g,email:S,collegeName:j,branch:k,year:N,query:R},L=`${s.baseUrl}${s.endpoints.learner}`;return oo(L,J)}async function U1(s,m){const y=Ut(m.fullName,"Full name"),r=Vs(m.phone),g=io(m.email),S=m.topics?.length?m.topics:(()=>{throw new Error("Add at least one topic")})();if(uo(s)){const N={fullName:y,phone:r,email:g,topics:S.join(", ")};return await no(s.googleSheets?.scriptUrl,"Instructors",N),await lo(s.emailjs,"instructor",{form_type:"Instructor Enquiry",full_name:y,phone:r,email:g,topics:S.join(", ")}),{ok:!0}}const j={fullName:y,phone:r,email:g,topics:S},k=`${s.baseUrl}${s.endpoints.instructor}`;return oo(k,j)}async function L1(s,m){const y=Ut(m.orgType,"Organisation type"),r=Ut(m.orgName,"Organisation name"),g=Number(Ut(m.students,"Number of students"))||0,S=Vs(m.phone),j=io(m.email);if(uo(s)){const R={organisationType:y,organisationName:r,numberOfStudents:g,phone:S,email:j};return await no(s.googleSheets?.scriptUrl,"Partners",R),await lo(s.emailjs,"partner",{form_type:"Partner / Organisation Enquiry",organisation_type:y,organisation_name:r,number_of_students:g,phone:S,email:j}),{ok:!0}}const k={organisationType:y,organisationName:r,numberOfStudents:g,phone:S,email:j},N=`${s.baseUrl}${s.endpoints.partner}`;return oo(N,k)}const B1=f.section`
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
`,k1=f.div`
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
`,so=f.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`,N1=f(so)`
  left: 80.3%;
  top: 67.2%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.95) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,R1=f(so)`
  left: 13.9%;
  top: 1.4%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.95) 0%,
    rgba(176, 149, 227, 0) 70%
  );
`,_1=f(so)`
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
`,H1=f(so)`
  left: 7.3%;
  top: 34.9%;
  width: clamp(110px, 13vw, 171px);
  height: clamp(110px, 13vw, 171px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.9) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,q1=f.div`
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
`,Y1=f.div`
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
`,G1=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 520px;
  flex: 0 1 520px;
`,X1=f.h1`
  color: white;
  font-weight: 400;
  font-size: clamp(42px, 5.2vw, 64px);
  line-height: 1.2;
  letter-spacing: -0.3937px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${H.heading};

  text-wrap: balance;
`,Q1=f.p`
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.35;
  font-family: ${H.body};
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
  font-family: ${H.body};
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
`;const V1=({id:s})=>{const m="rgba(176, 149, 227, 1)",{titleLine1:y,titleLine2:r,description:g,inputPlaceholder:S,inputButtonText:j}=Ve("hero"),k=Ve("api"),N=R=>M0(k,R);return u.jsxs(B1,{id:s,children:[u.jsx(k1,{}),u.jsx(N1,{}),u.jsx(R1,{}),u.jsx(_1,{}),u.jsx(H1,{}),u.jsx(q1,{children:u.jsxs(Y1,{children:[u.jsxs(G1,{children:[u.jsxs(X1,{children:[y,u.jsx("br",{}),r]}),u.jsx(Q1,{children:g}),u.jsx(E0,{placeholder:S,buttonText:j,onSubmit:N})]}),u.jsx(m1,{tileColor:m})]})})]})},$1=f.div`
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
`,Z1=f.div`
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
`,J1=f.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`,K1=f.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
  white-space: pre-line;
`;function W1({items:s}){return u.jsx($1,{"aria-label":"analytics stats",children:s.map(m=>u.jsxs(Z1,{children:[u.jsx(J1,{children:m.value}),u.jsx(K1,{children:m.label})]},m.value+m.label))})}const F1=f.section`
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
`,I1=f.div`
  width: 100%;
  max-width: ${Bn};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`,P1=ue`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`,eg=ue`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`,tg=ue`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`,ag=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`,$s=f.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`,ng=f($s)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${P1} 12s ease-in-out infinite;
`,lg=f($s)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${eg} 15s ease-in-out infinite;
`,ig=f($s)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${tg} 18s ease-in-out infinite;
`,og=f.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`,ug=ue`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`,sg=f.div`
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
  animation: ${ug} 8s ease-in-out infinite;
`,cg=ue`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`,rg=f.div`
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
  animation: ${cg} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`,dg=ue`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`,fg=[{x:5,y:15,size:3,dur:10,delay:0,op:.4},{x:12,y:72,size:2,dur:12,delay:1.2,op:.3},{x:22,y:35,size:4,dur:9,delay:.5,op:.5},{x:33,y:85,size:2,dur:14,delay:2,op:.25},{x:42,y:12,size:3,dur:11,delay:.8,op:.35},{x:55,y:78,size:4,dur:13,delay:1.5,op:.45},{x:63,y:28,size:2,dur:10,delay:3,op:.3},{x:72,y:60,size:3,dur:15,delay:.3,op:.4},{x:78,y:18,size:2,dur:12,delay:2.5,op:.25},{x:85,y:45,size:4,dur:9,delay:1,op:.5},{x:91,y:80,size:3,dur:11,delay:.7,op:.35},{x:15,y:50,size:2,dur:14,delay:1.8,op:.3},{x:48,y:42,size:3,dur:10,delay:2.2,op:.4},{x:68,y:90,size:2,dur:13,delay:.4,op:.25},{x:38,y:55,size:3,dur:11,delay:3.2,op:.35},{x:95,y:25,size:2,dur:12,delay:1.6,op:.3},{x:8,y:88,size:4,dur:15,delay:.9,op:.45},{x:28,y:8,size:2,dur:10,delay:2.8,op:.3}],pg=f.span`
  position: absolute;
  width: ${s=>s.$size}px;
  height: ${s=>s.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${s=>s.$op});
  left: ${s=>s.$x}%;
  top: ${s=>s.$y}%;
  animation: ${dg} ${s=>s.$dur}s ease-in-out infinite;
  animation-delay: ${s=>s.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${s=>s.$size*3}px
    rgba(176, 149, 227, ${s=>s.$op*.5});
`,hg=ue`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`,mg=f.div`
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
  animation: ${hg} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`,gg=f.div`
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
`,yg=f.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`,xg=f.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`,bg=ue`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`,vg=f.div`
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
    animation: ${bg} 5s ease-in-out infinite;
    pointer-events: none;
  }
`,wg=ue`
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
  animation: ${wg} 0.6s ease-out 2.6s forwards;

  ${s=>s.$pos==="tl"&&Ee`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${s=>s.$pos==="tr"&&Ee`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${s=>s.$pos==="bl"&&Ee`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${s=>s.$pos==="br"&&Ee`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`,A0=ue`
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
`,s0=ue`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`,c0=ue`
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
`,Sg=ue`
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
`,jg=f.h2`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`,D0=f.span`
  display: inline-block;
  font-family: ${H.heading};
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

  ${s=>s.$animate&&Ee`
      animation:
        ${A0} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${s.$delay}s
          forwards,
        ${s0} 6s linear ${s.$delay+.9}s infinite,
        ${c0} 4s ease-in-out ${s.$delay+.9}s infinite,
        ${Sg} ${3.5+s.$delay%1.5}s ease-in-out ${s.$delay+.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${s0} 1.5s linear infinite,
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
  animation: ${s=>s.$animate?Ee`
          ${A0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${s.$delay}s forwards
        `:"none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`,zg=ue`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`,Tg=f.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${H.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${zg} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`,Eg=ue`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`,Mg=f.div`
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
  animation: ${Eg} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`,Ag=ue`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`,Dg=ue`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`,Cg=f.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${Ag} 0.5s ease-out 2.5s forwards,
    ${Dg} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`,Og=ue`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`,Ug=ue`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`,Lg=f.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${Ug} 0.8s ease-out 2.8s forwards;
`,Ns=f.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${Og} 1.5s ease-in-out infinite;
  animation-delay: ${s=>s.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;function Bg(s){return D.useCallback(y=>{if(!s.current)return;const r=s.current.getBoundingClientRect(),g=(y.clientX-r.left)/r.width*100,S=(y.clientY-r.top)/r.height*100;s.current.style.setProperty("--mx",`${g}%`),s.current.style.setProperty("--my",`${S}%`)},[s])}function kg(s){const m=D.useCallback(r=>{if(!s.current)return;const g=s.current.getBoundingClientRect(),S=(r.clientX-g.left)/g.width-.5,j=(r.clientY-g.top)/g.height-.5;s.current.style.transform=`rotateX(${j*-5}deg) rotateY(${S*5}deg)`},[s]),y=D.useCallback(()=>{s.current&&(s.current.style.transform="rotateX(0deg) rotateY(0deg)")},[s]);return{handleTiltMove:m,handleTiltLeave:y}}function Ng(s=.2){const m=D.useRef(null),[y,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const g=m.current;if(!g)return;const S=new IntersectionObserver(([j])=>{j.isIntersecting&&(r(!0),S.disconnect())},{threshold:s});return S.observe(g),()=>S.disconnect()},[s]),[m,y]}function eo({text:s,Component:m,baseDelay:y=0,animate:r=!0}){return u.jsx("span",{style:{display:"inline-flex",flexWrap:"nowrap",whiteSpace:"nowrap"},children:s.split("").map((g,S)=>u.jsx(m,{$animate:r,$delay:y+S*.07,children:g},`${g}-${S}`))})}function Rg(){const{stats:s,waitList:m}=Ve("analytics"),y=D.useRef(null),r=D.useRef(null),g=Bg(y),{handleTiltMove:S,handleTiltLeave:j}=kg(r),[k,N]=Ng(.2),R=D.useCallback(J=>{g(J),S(J)},[g,S]);return u.jsx(F1,{ref:k,"aria-label":"analytics",onMouseMove:R,onMouseLeave:j,children:u.jsx(I1,{children:m?u.jsxs(u.Fragment,{children:[u.jsxs(ag,{children:[u.jsx(ng,{}),u.jsx(lg,{}),u.jsx(ig,{})]}),u.jsx(sg,{}),u.jsx(og,{}),u.jsx(mg,{}),u.jsx(rg,{}),u.jsx(gg,{ref:y}),fg.map((J,L)=>u.jsx(pg,{$x:J.x,$y:J.y,$size:J.size,$dur:J.dur,$delay:J.delay,$op:J.op},L)),u.jsx(yg,{children:u.jsx(xg,{ref:r,children:u.jsxs(vg,{children:[u.jsx(Pi,{$pos:"tl"}),u.jsx(Pi,{$pos:"tr"}),u.jsx(Pi,{$pos:"bl"}),u.jsx(Pi,{$pos:"br"}),u.jsxs(jg,{children:[u.jsxs(r0,{children:[u.jsx(eo,{text:"WE",Component:f0,baseDelay:.1,animate:N}),u.jsx("span",{style:{width:"clamp(8px,1.5vw,20px)"}}),u.jsx(eo,{text:"ARE",Component:f0,baseDelay:.3,animate:N})]}),u.jsxs(r0,{style:{marginTop:"clamp(4px, 0.8vw, 12px)"},children:[u.jsx(eo,{text:"COMING",Component:d0,baseDelay:.5,animate:N}),u.jsx(eo,{text:"SOON",Component:d0,baseDelay:.9,animate:N})]})]}),u.jsx(Tg,{children:"Something extraordinary is on its way"}),u.jsxs(Mg,{children:[u.jsx(p0,{}),u.jsx(Cg,{}),u.jsx(p0,{})]}),u.jsxs(Lg,{children:[u.jsx(Ns,{$delay:0}),u.jsx(Ns,{$delay:.3}),u.jsx(Ns,{$delay:.6})]})]})})})]}):u.jsx(W1,{items:s})})})}const C0=ue`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function _g(s=.15){const m=D.useRef(null),[y,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const g=m.current;if(!g)return;const S=new IntersectionObserver(([j])=>{j.isIntersecting&&(r(!0),S.disconnect())},{threshold:s});return S.observe(g),()=>S.disconnect()},[s]),[m,y]}const Hg=f.section`
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
`,qg=f.div`
  width: 100%;
  max-width: ${Bn};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Yg=f.h2`
  margin: 0;
  font-family: ${H.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
  opacity: 0;

  ${s=>s.$inView&&Ee`
      animation: ${C0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,Gg=f.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${H.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
  opacity: 0;

  ${s=>s.$inView&&Ee`
      animation: ${C0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,Xg=f.div`
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
`;function Qg({id:s}){const{titleLine1:m,titleLine2:y,description:r}=Ve("supercharge"),[g,S]=_g(.15);return u.jsx(Hg,{id:s,"aria-label":"supercharge",ref:g,children:u.jsx(qg,{children:u.jsxs(Xg,{children:[u.jsxs(Yg,{$inView:S,children:[m,u.jsx("br",{}),y]}),u.jsx(Gg,{$inView:S,children:r})]})})})}const Vg=ue`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function $g(s=.1){const m=D.useRef(null),[y,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const g=m.current;if(!g)return;const S=new IntersectionObserver(([j])=>{j.isIntersecting&&(r(!0),S.disconnect())},{threshold:s});return S.observe(g),()=>S.disconnect()},[s]),[m,y]}const Zg=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,Jg=/^[0-9\s\-+()]{10,15}$/;function to(s,m){if(!m||!m.trim())return"Required";switch(s){case"email":return Zg.test(m.trim())?"":"Invalid email";case"phone":return Jg.test(m.trim())?"":"Invalid phone number";case"fullName":return m.trim().length>=2?"":"At least 2 characters";case"orgName":return m.trim().length>=2?"":"At least 2 characters";default:return""}}const h0=[{key:"learner",title:"Learners",desc:"Have questions about your course, progress, or certification? Reach out and we’ll get you the support you need."},{key:"instructor",title:"Instructors",desc:"Interested in joining our platform or facing technical issues while managing your content? We’re just a message away."},{key:"partner",title:"Partners",desc:"Let’s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team."}],Kg=()=>u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[u.jsx("path",{d:"M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z",fill:"#D3C4EF",fillOpacity:".8"}),u.jsx("path",{d:"M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",fill:"#EEE7F9"})]}),Wg=()=>u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[u.jsx("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",fill:"#D3C4EF"}),u.jsx("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",fill:"#D3C4EF",fillOpacity:".6"}),u.jsx("path",{d:"M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z",fill:"#EEE7F9"})]}),Fg=()=>u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[u.jsx("path",{d:"M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#D3C4EF",fillOpacity:".6"}),u.jsx("path",{d:"M9 11a3 3 0 100-6 3 3 0 000 6z",fill:"#D3C4EF"}),u.jsx("path",{d:"M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z",fill:"#D3C4EF",fillOpacity:".6"}),u.jsx("path",{d:"M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",fill:"#D3C4EF"})]}),Ig={learner:Kg,instructor:Wg,partner:Fg},Pg=f.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${te.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`,Zs=f.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`,e2=f(Zs)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `,t2=f(Zs)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `,a2=f(Zs)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `,n2=f.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ul=Ee`
  opacity: 0;
  ${s=>s.$show&&Ee`
    animation: ${Vg} 0.7s ease forwards;
    animation-delay: ${s.$d||"0s"};
  `}
`,l2=f.h2`
  margin: 0;
  font-family: ${H.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${Ul}
`,i2=f.p`
  margin: 16px 0 0;
  font-family: ${H.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${Ul}
`,o2=f.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  ${Ul}

  ${te.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`,u2=f.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${s=>s.$active?"drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))":"drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${te.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`,s2=f.button`
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

  background: ${s=>s.$active?"linear-gradient(160deg, rgba(80,19,192,0.55) 0%, rgba(60,42,96,0.7) 100%)":"linear-gradient(160deg, rgba(80,19,192,0.15) 0%, rgba(60,42,96,0.2) 100%)"};

  &:hover {
    background: linear-gradient(160deg, rgba(80,19,192,0.35) 0%, rgba(60,42,96,0.45) 100%);
  }

  ${te.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${s=>s.$active?"rgba(176,149,227,0.5)":"rgba(176,149,227,0.12)"};
  }
`,c2=f.div`
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
`,r2=f.span`
  font-family: ${H.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${te.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`,d2=f.span`
  font-family: ${H.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${te.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`,f2=f.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${H.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${Ul}
  }
`,p2=f.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: -20px;
  @media (max-width: 600px) { display: none; }
`,Rs=f.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${s=>s.$pos==="left"&&Ee` left: 18%; transform: rotate(22deg); transform-origin: top center; `}
  ${s=>s.$pos==="center"&&Ee` left: 50%; `}
  ${s=>s.$pos==="right"&&Ee` right: 18%; transform: rotate(-22deg); transform-origin: top center; `}
`,h2=f.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${Ul}

  ${te.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`,m2=f.h3`
  margin: 0;
  font-family: ${H.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${te.mobile} { font-size: 32px; }
`,g2=f.p`
  margin: 8px 0 0;
  font-family: ${H.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${te.mobile} { font-size: 15px; }
`,y2=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${te.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`,Ze=f.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${s=>s.$full&&Ee` grid-column: 1 / -1; `}
`,Je=f.label`
  font-family: ${H.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`,Js=Ee`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${H.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`,Ie=f.input` ${Js} `,x2=f.textarea`
  ${Js}
  min-height: 90px;
  resize: vertical;
`,b2=f.select`
  ${Js}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${H.body};
    padding: 8px;
  }
`,Pe=f.span`
  font-family: ${H.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`,v2=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`,w2=f.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${H.body};
  font-size: 13px;
  color: #eee7f9;
`,S2=f.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`,j2=f.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`,z2=f.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(176, 149, 227, 0.5);
  background: ${s=>s.$checked?"#5013C0":"rgba(211,196,239,0.06)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  svg { opacity: ${s=>s.$checked?1:0}; transition: opacity 0.15s; }
`,T2=f.span`
  font-family: ${H.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`,_s=f.button`
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
  font-family: ${H.body};
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
`,E2=f.div`
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
`,M2=f.span`
  font-family: ${H.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`,A2=f.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${H.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`,D2=f.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,C2=f.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`,O2=f.h3`
  margin: 0;
  font-family: ${H.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`,U2=f.p`
  margin: 0;
  font-family: ${H.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;function ao(s){switch(s){case"learner":return{fullName:"",phone:"",email:"",college:"",branch:"",year:"",query:"",newsletter:!1};case"instructor":return{fullName:"",phone:"",email:"",topics:[],otherTopic:void 0};case"partner":return{orgType:"",orgName:"",students:"",phone:"",email:""};default:return{}}}function L2({id:s}){const m=Ve("api"),[y,r]=D.useState("learner"),[g,S]=D.useState(ao("learner")),[j,k]=D.useState({}),[N,R]=D.useState(!1),[J,L]=D.useState(!1);D.useRef(null);const[ae,fe]=$g(.08),be=D.useRef(null);D.useEffect(()=>{const A={"#contact-learner":"learner","#contact-instructor":"instructor","#contact-partner":"partner"};function Y(){const V=window.location.hash,ke=A[V];ke&&(r(ke),S(ao(ke)),k({}),R(!1),requestAnimationFrame(()=>{const Mt=be.current;if(Mt){const At=document.querySelector("nav")?.offsetHeight||72,E=Mt.getBoundingClientRect().top+window.scrollY-At;window.scrollTo({top:E,behavior:"smooth"})}}))}return Y(),window.addEventListener("hashchange",Y),()=>window.removeEventListener("hashchange",Y)},[]);const Me=D.useCallback(A=>{r(A),S(ao(A)),k({}),R(!1)},[]),le=D.useCallback((A,Y)=>{S(V=>({...V,[A]:Y})),j[A]&&k(V=>({...V,[A]:""}))},[j]),ve=D.useCallback(A=>{A&&(S(Y=>({...Y,topics:Y.topics.includes(A)?Y.topics:[...Y.topics,A]})),j.topics&&k(Y=>({...Y,topics:""})))},[j]),He=D.useCallback(()=>{S(A=>{const Y=A.otherTopic?.trim();return Y?{...A,topics:A.topics.includes(Y)?A.topics:[...A.topics,Y],otherTopic:void 0}:A}),j.topics&&k(A=>({...A,topics:""}))},[j]),$e=D.useCallback(A=>{S(Y=>({...Y,topics:Y.topics.filter(V=>V!==A)}))},[]),Q=D.useCallback(async A=>{A.preventDefault();const Y={};if(y==="learner")["fullName","phone","email"].forEach(V=>{const ke=to(V,g[V]);ke&&(Y[V]=ke)}),g.college||(Y.college="Required"),g.branch||(Y.branch="Required"),g.year||(Y.year="Required");else if(y==="instructor")["fullName","phone","email"].forEach(V=>{const ke=to(V,g[V]);ke&&(Y[V]=ke)}),g.topics.length||(Y.topics="Add at least one topic");else{g.orgType||(Y.orgType="Required");const V=to("orgName",g.orgName);V&&(Y.orgName=V),g.students||(Y.students="Required"),["phone","email"].forEach(ke=>{const Mt=to(ke,g[ke]);Mt&&(Y[ke]=Mt)})}if(Object.keys(Y).length){k(Y);return}L(!0),k(V=>({...V,_form:""}));try{y==="learner"?await O1(m,g):y==="instructor"?await U1(m,g):await L1(m,g),R(!0)}catch(V){k({_form:V.message||"Something went wrong. Please try again."})}finally{L(!1)}},[y,g,m]),we=D.useCallback(()=>{Q({preventDefault:()=>{}})},[Q]),Ue=()=>u.jsxs(u.Fragment,{children:[u.jsxs(Ze,{children:[u.jsx(Je,{children:"Full Name"}),u.jsx(Ie,{placeholder:"Enter full name",value:g.fullName,onChange:A=>le("fullName",A.target.value)}),j.fullName&&u.jsx(Pe,{children:j.fullName})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Phone Number"}),u.jsx(Ie,{placeholder:"Enter phone number",value:g.phone,onChange:A=>le("phone",A.target.value)}),j.phone&&u.jsx(Pe,{children:j.phone})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Email"}),u.jsx(Ie,{type:"email",placeholder:"Enter email address",value:g.email,onChange:A=>le("email",A.target.value)}),j.email&&u.jsx(Pe,{children:j.email})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"College Name"}),u.jsx(Ie,{placeholder:"Enter college name",value:g.college,onChange:A=>le("college",A.target.value)}),j.college&&u.jsx(Pe,{children:j.college})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Branch"}),u.jsx(Ie,{placeholder:"Enter branch",value:g.branch,onChange:A=>le("branch",A.target.value)}),j.branch&&u.jsx(Pe,{children:j.branch})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Year of Passing"}),u.jsx(Ie,{placeholder:"Enter year of passing",value:g.year,onChange:A=>le("year",A.target.value)}),j.year&&u.jsx(Pe,{children:j.year})]}),u.jsxs(Ze,{$full:!0,children:[u.jsxs(Je,{children:["Query ",u.jsx("span",{style:{color:"rgba(238,231,249,0.35)",fontWeight:400},children:"(optional)"})]}),u.jsx(x2,{placeholder:"Any questions or queries that you have?",value:g.query,onChange:A=>le("query",A.target.value)})]})]}),Be=Ve("courses")||[],Ke=()=>u.jsxs(u.Fragment,{children:[u.jsxs(Ze,{children:[u.jsx(Je,{children:"Full Name"}),u.jsx(Ie,{placeholder:"Enter full name",value:g.fullName,onChange:A=>le("fullName",A.target.value)}),j.fullName&&u.jsx(Pe,{children:j.fullName})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Phone Number"}),u.jsx(Ie,{placeholder:"Enter phone number",value:g.phone,onChange:A=>le("phone",A.target.value)}),j.phone&&u.jsx(Pe,{children:j.phone})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Email"}),u.jsx(Ie,{type:"email",placeholder:"Enter email address",value:g.email,onChange:A=>le("email",A.target.value)}),j.email&&u.jsx(Pe,{children:j.email})]}),u.jsxs(Ze,{$full:!0,children:[u.jsx(Je,{children:"Topics you can teach"}),g.topics.length>0&&u.jsx(v2,{children:g.topics.map(A=>u.jsxs(w2,{children:[A,u.jsx(S2,{onClick:()=>$e(A),"aria-label":`Remove ${A}`,children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M9 3L3 9M3 3l6 6",stroke:"#EEE7F9",strokeWidth:"1.5",strokeLinecap:"round"})})})]},A))}),u.jsxs(b2,{value:"",onChange:A=>{const Y=A.target.value;Y&&(Y==="__other__"?S(V=>({...V,otherTopic:""})):ve(Y),A.target.value="")},children:[u.jsx("option",{value:"",children:"Select a topic"}),Be.filter(A=>!g.topics.includes(A)).map(A=>u.jsx("option",{value:A,children:A},A)),u.jsx("option",{value:"__other__",children:"Other"})]}),typeof g.otherTopic=="string"&&u.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[u.jsx(Ie,{placeholder:"Enter your topic",value:g.otherTopic,onChange:A=>le("otherTopic",A.target.value),onKeyDown:A=>{A.key==="Enter"&&(A.preventDefault(),He())},style:{flex:1}}),u.jsx(_s,{type:"button",onClick:He,style:{marginTop:0,width:"auto",padding:"0 24px",height:43,fontSize:14},children:"Add"})]}),j.topics&&u.jsx(Pe,{children:j.topics})]})]}),aa=()=>u.jsxs(u.Fragment,{children:[u.jsxs(Ze,{children:[u.jsx(Je,{children:"Organisation Type"}),u.jsx(Ie,{placeholder:"Enter organisation type",value:g.orgType,onChange:A=>le("orgType",A.target.value)}),j.orgType&&u.jsx(Pe,{children:j.orgType})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Organisation Name"}),u.jsx(Ie,{placeholder:"Enter organisation name",value:g.orgName,onChange:A=>le("orgName",A.target.value)}),j.orgName&&u.jsx(Pe,{children:j.orgName})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Number of Students"}),u.jsx(Ie,{placeholder:"Enter number of students",value:g.students,onChange:A=>le("students",A.target.value)}),j.students&&u.jsx(Pe,{children:j.students})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Phone Number"}),u.jsx(Ie,{placeholder:"Enter phone number",value:g.phone,onChange:A=>le("phone",A.target.value)}),j.phone&&u.jsx(Pe,{children:j.phone})]}),u.jsxs(Ze,{children:[u.jsx(Je,{children:"Email"}),u.jsx(Ie,{type:"email",placeholder:"Enter email address",value:g.email,onChange:A=>le("email",A.target.value)}),j.email&&u.jsx(Pe,{children:j.email})]})]});return u.jsxs(Pg,{id:s,ref:A=>{ae.current=A,be.current=A},"aria-label":"Contact Us",children:[u.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:u.jsx("defs",{children:u.jsx("clipPath",{id:"shield-clip",clipPathUnits:"objectBoundingBox",children:u.jsx("path",{d:"M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z"})})})}),u.jsx(e2,{}),u.jsx(t2,{}),u.jsx(a2,{}),u.jsxs(n2,{children:[u.jsx(l2,{$show:fe,$d:"0s",children:"We are here to help you"}),u.jsx(i2,{$show:fe,$d:"0.1s",children:"Whether you’re a student with a question, an educator with a suggestion, or a partner looking to collaborate — we’re always eager to hear from you."}),u.jsx(o2,{$show:fe,$d:"0.2s",children:h0.map(A=>{const Y=Ig[A.key];return u.jsx(u2,{$active:y===A.key,onClick:()=>Me(A.key),children:u.jsxs(s2,{$active:y===A.key,type:"button","aria-pressed":y===A.key,children:[u.jsx(c2,{children:u.jsx(Y,{})}),u.jsx(r2,{children:A.title}),u.jsx(d2,{children:A.desc})]})},A.key)})}),u.jsx(f2,{$show:fe,$d:"0.25s",children:h0.find(A=>A.key===y)?.desc},y),u.jsxs(p2,{children:[u.jsx(Rs,{$pos:"left"}),u.jsx(Rs,{$pos:"center"}),u.jsx(Rs,{$pos:"right"})]}),u.jsx(h2,{$show:fe,$d:"0.35s",children:N?u.jsxs(D2,{children:[u.jsx(C2,{children:u.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:u.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"#B095E3"})})}),u.jsx(O2,{children:"Thank you!"}),u.jsx(U2,{children:"We’ve received your details and will contact you soon."}),u.jsx(_s,{type:"button",onClick:()=>{R(!1),S(ao(y))},children:"Submit another"})]}):u.jsxs("form",{onSubmit:Q,noValidate:!0,children:[u.jsx(m2,{children:"Drop your Details"}),u.jsx(g2,{children:"We will contact you real soon!"}),u.jsxs(y2,{children:[y==="learner"&&Ue(),y==="instructor"&&Ke(),y==="partner"&&aa()]}),y==="learner"&&u.jsxs(j2,{children:[u.jsx(z2,{$checked:g.newsletter,onClick:()=>le("newsletter",!g.newsletter),role:"checkbox","aria-checked":g.newsletter,tabIndex:0,onKeyDown:A=>{(A.key===" "||A.key==="Enter")&&(A.preventDefault(),le("newsletter",!g.newsletter))},children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:u.jsx("path",{d:"M2 6l3 3 5-5",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.jsx(T2,{children:"Stay in the Loop! Subscribe to our newsletter and be the first to know about exciting features and exclusive collaborations."})]}),j._form&&u.jsxs(E2,{children:[u.jsx(M2,{children:j._form}),u.jsx(A2,{type:"button",onClick:we,disabled:J,children:J?"Retrying…":"Retry"})]}),u.jsx(_s,{type:"submit",disabled:J,children:J?"Submitting…":"Submit"})]})})]})]})}const B2=({width:s=24,height:m=24,color:y="currentColor",...r})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:y,...r,children:u.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),k2=({width:s=24,height:m=24,color:y="currentColor",...r})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:y,...r,children:u.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),N2=({width:s=30,height:m=30,color:y="currentColor"})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 24 24",fill:y,children:u.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),R2=({width:s=30,height:m=30,color:y="currentColor"})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 24 24",fill:y,children:u.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})}),_2=({width:s=30,height:m=30,color:y="currentColor"})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 24 24",fill:y,children:u.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),H2=({width:s=15,height:m=20,color:y="#B095E3",...r})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 15 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:u.jsx("path",{d:"M7.5 0C3.35813 0 0 3.35813 0 7.5C0 9.13094 0.534688 10.6275 1.42344 11.8531C1.43938 11.8825 1.44187 11.9153 1.46 11.9434L6.46 19.4434C6.69188 19.7913 7.0825 20 7.5 20C7.9175 20 8.30812 19.7913 8.54 19.4434L13.54 11.9434C13.5584 11.9153 13.5606 11.8825 13.5766 11.8531C14.4653 10.6275 15 9.13094 15 7.5C15 3.35813 11.6419 0 7.5 0ZM7.5 10C6.11937 10 5 8.88062 5 7.5C5 6.11937 6.11937 5 7.5 5C8.88062 5 10 6.11937 10 7.5C10 8.88062 8.88062 10 7.5 10Z",fill:y})}),q2=({width:s=20,height:m=20,color:y="#B095E3",...r})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:u.jsx("path",{d:"M16.6607 12.8167C15.6366 12.8167 14.6458 12.65 13.7216 12.35C13.5768 12.3009 13.4212 12.2936 13.2724 12.329C13.1237 12.3643 12.9879 12.4409 12.8807 12.55L11.5735 14.1917C9.2172 13.0667 7.01079 10.9417 5.83681 8.5L7.4604 7.11667C7.6852 6.88333 7.75181 6.55833 7.66022 6.26667C7.35216 5.34167 7.19396 4.35 7.19396 3.325C7.19396 2.875 6.81929 2.5 6.36968 2.5H3.48885C3.03924 2.5 2.49805 2.7 2.49805 3.325C2.49805 11.0667 8.93412 17.5 16.6607 17.5C17.2519 17.5 17.485 16.975 17.485 16.5167V13.6417C17.485 13.1917 17.1103 12.8167 16.6607 12.8167Z",fill:y})}),Y2=({width:s=20,height:m=20,color:y="#B095E3",...r})=>u.jsx("svg",{width:s,height:m,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:u.jsx("path",{d:"M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z",fill:y})}),O0=ue`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function G2(s=.1){const m=D.useRef(null),[y,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const g=m.current;if(!g)return;const S=new IntersectionObserver(([j])=>{j.isIntersecting&&(r(!0),S.disconnect())},{threshold:s});return S.observe(g),()=>S.disconnect()},[s]),[m,y]}const X2={FacebookIcon:B2,TwitterIcon:k2,YoutubeIcon:N2,InstagramIcon:R2,DiscordIcon:_2},Q2=f.footer`
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

  ${te.mobile} {
    height: auto;
    min-height: 460px;
  }
`,V2=f.div`
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

  ${te.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`,$2=f.div`
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

  ${s=>s.$inView&&Ee`
      animation: ${O0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${te.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${te.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,Z2=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${te.mobile} {
    align-items: center;
  }
`,J2=f.h2`
  margin: 0;
  font-family: ${H.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${te.mobile} {
    font-size: 32px;
    text-align: center;
  }
`,K2=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Hs=f.div`
  margin: 0;
  font-family: ${H.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${te.mobile} {
    justify-content: center;
  }
`,qs=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,W2=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,F2=f.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${te.mobile} {
    width: 180px;
    height: auto;
  }
`,I2=f.p`
  margin: 0;
  font-family: ${H.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${te.mobile} {
    font-size: 14px;
  }
`,P2=f.div`
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

  ${s=>s.$inView&&Ee`
      animation: ${O0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${te.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${te.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,ey=f.p`
  margin: 0;
  font-family: ${H.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${te.mobile} {
    font-size: 12px;
    text-align: center;
  }
`,ty=f.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,ay=f.a`
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
`,ny=f.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

  ${te.mobile} {
    gap: 16px;
  }
`,Ys=f.a`
  font-family: ${H.body};
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
`,ly=new Date().getFullYear(),Xs=({id:s})=>{const{contactTitle:m,location:y,phone:r,email:g,tagline:S,companyName:j,logoAlt:k,socialLinks:N}=Ve("footer"),[R,J]=G2(.1);return u.jsx(Q2,{id:s,ref:R,children:u.jsxs(V2,{children:[u.jsxs($2,{$inView:J,children:[u.jsxs(Z2,{children:[u.jsx(J2,{children:m}),u.jsxs(K2,{children:[u.jsxs(Hs,{children:[u.jsx(qs,{children:u.jsx(H2,{width:15,height:20,color:"#B095E3"})}),y]}),u.jsxs(Hs,{children:[u.jsx(qs,{children:u.jsx(q2,{width:18,height:18,color:"#B095E3"})}),r]}),u.jsxs(Hs,{children:[u.jsx(qs,{children:u.jsx(Y2,{width:18,height:18,color:"#B095E3"})}),g]})]}),u.jsxs(ny,{children:[u.jsx(Ys,{href:"#contact-learner",children:"Learner Form →"}),u.jsx(Ys,{href:"#contact-instructor",children:"Instructor Form →"}),u.jsx(Ys,{href:"#contact-partner",children:"Partner Form →"})]})]}),u.jsxs(W2,{children:[u.jsx(F2,{src:T0,alt:k,loading:"lazy",decoding:"async"}),u.jsx(I2,{children:S})]})]}),u.jsxs(P2,{$inView:J,children:[u.jsxs(ey,{children:["© ",ly," ",j,". All Rights Reserved."]}),u.jsx(ty,{children:N.map(L=>{const ae=X2[L.icon];return u.jsx(ay,{href:L.url,target:"_blank",rel:"noopener noreferrer","aria-label":L.name,children:u.jsx(ae,{})},L.name)})})]})]})})},iy="/assets/phone-screen-uLB7OkVb.webp",oy=ue`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function uy(s=.15){const m=D.useRef(null),[y,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const g=m.current;if(!g)return;const S=new IntersectionObserver(([j])=>{j.isIntersecting&&(r(!0),S.disconnect())},{threshold:s});return S.observe(g),()=>S.disconnect()},[s]),[m,y]}const sy=f.div`
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

  ${s=>s.$inView&&Ee`
      animation: ${oy} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${te.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${te.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
  }
`,cy=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${te.mobile} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`,ry=f.h2`
  margin: 0;
  font-family: ${H.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${te.mobile} {
    font-size: 36px;
  }
`,dy=f.p`
  margin: 0;
  font-family: ${H.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${te.mobile} {
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
  }
`,fy=f.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${te.mobile} {
    display: none;
  }
`,py=f.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`,hy=f.img`
  width: 100%;
  height: 100%;
  display: block;
`,my=({onSubmit:s,id:m})=>{const{title:y,subtitle:r,inputPlaceholder:g,buttonText:S}=Ve("joinWaitlist"),j=Ve("api"),[k,N]=uy(.15),R=s||(J=>M0(j,J));return u.jsxs(sy,{id:m,ref:k,$inView:N,children:[u.jsxs(cy,{children:[u.jsx(ry,{children:y}),u.jsx(dy,{children:r}),u.jsx(E0,{placeholder:g,buttonText:S,onSubmit:R})]}),u.jsx(fy,{children:u.jsx(py,{children:u.jsx(hy,{src:iy,alt:"Margg app interface showing roadmap-based learning features",width:1036,height:1248,loading:"lazy",decoding:"async"})})})]})},gy="/assets/phone-screen-2-DEQ8AWQ-.webp",yy=f.div`
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
`;const xy="/assets/roadmap-Dn-5xO1L.webp",by=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,vy=f.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`,wy=()=>{const{roadmap:s}=Ve("blocks");return u.jsxs(by,{children:[u.jsx(kn,{children:s.title}),u.jsx(vy,{src:xy,alt:"Roadmap based learning path on Margg education platform",width:1120,height:608,loading:"lazy",decoding:"async"})]})},Sy="/assets/mentor-B3u5TnvR.webp",jy=f.div`
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
  width: 52%;
`,Ty=()=>{const{mentorship:s}=Ve("blocks");return u.jsxs(jy,{children:[u.jsx(kn,{children:s.title}),u.jsx(zy,{src:Sy,alt:"One-on-one mentorship sessions on Margg LMS platform",width:457,height:539,loading:"lazy",decoding:"async"})]})},Ey="/assets/community-DUEL_A6f.webp",My=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,Ay=f.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`,Dy=()=>{const{community:s}=Ve("blocks");return u.jsxs(My,{children:[u.jsx(kn,{children:s.title}),u.jsx(Ay,{src:Ey,alt:"Margg peer learning community for collaborative education",width:1236,height:1136,loading:"lazy",decoding:"async"})]})},Cy="/assets/focus-timer-C5HEcCmJ.webp",Oy=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`,Uy=f.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`,Ly=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`,By=f(kn)`
  text-align: right;
  width: 50%;
`,ky=()=>{const{focusTimer:s}=Ve("blocks");return u.jsxs(Oy,{children:[u.jsx(Ly,{children:u.jsx(By,{children:s.title})}),u.jsx(Uy,{src:Cy,alt:"Focus timer for productive study sessions on Margg",width:479,height:648,loading:"lazy",decoding:"async"})]})},Ny="/assets/streak-DyGuKhiQ.webp",Ry=f.div`
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
`;const _y=f(kn)`
  text-align: left;
`,Hy=f.img`
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
`,qy=()=>{const{streaks:s}=Ve("blocks");return u.jsxs(Ry,{children:[u.jsx(_y,{children:s.title}),u.jsx(Hy,{src:Ny,alt:"Learning streak tracking and consistency feature",width:1108,height:412,loading:"lazy",decoding:"async"})]})},Yy="/assets/interview-prep-DeoMkukO.webp",Gy=f.div`
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
`,Xy=f.img`
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
`,Qy=()=>{const{interviewPrep:s}=Ve("blocks");return u.jsxs(Gy,{children:[u.jsx(kn,{children:s.title}),u.jsx(Xy,{src:Yy,alt:"Interview preparation materials and mock tests on Margg",width:1500,height:1136,loading:"lazy",decoding:"async"})]})},Vy=f.div`
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
`,Nn=f(yy)`
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
`,$y=f(Nn)`
  grid-column: span 6;
  height: 200px;
`,Zy=f(Nn)`
  grid-column: span 3;
`,Jy=f(Nn)`
  grid-column: span 3;
`,Ky=f(Nn)`
  grid-column: span 4;
  min-height: 180px;
`,Wy=f(Nn)`
  grid-column: span 4;
  min-height: 60px;
`,Fy=f(Nn)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`,Iy=()=>{const[s,m]=D.useState(null),y=D.useCallback(r=>{typeof window<"u"&&window.innerWidth>1e3||m(g=>g===r?null:r)},[]);return u.jsxs(Vy,{children:[u.jsx($y,{"data-tapped":s==="roadmap",onClick:()=>y("roadmap"),children:u.jsx(wy,{})}),u.jsx(Zy,{"data-tapped":s==="mentorship",onClick:()=>y("mentorship"),children:u.jsx(Ty,{})}),u.jsx(Jy,{"data-tapped":s==="community",onClick:()=>y("community"),children:u.jsx(Dy,{})}),u.jsx(Ky,{"data-tapped":s==="focusTimer",onClick:()=>y("focusTimer"),children:u.jsx(ky,{})}),u.jsx(Fy,{"data-tapped":s==="interviewPrep",onClick:()=>y("interviewPrep"),children:u.jsx(Qy,{})}),u.jsx(Wy,{"data-tapped":s==="streaks",onClick:()=>y("streaks"),children:u.jsx(qy,{})})]})},U0=ue`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Py(s=.1){const m=D.useRef(null),[y,r]=D.useState(!1);return D.useEffect(()=>{if(typeof IntersectionObserver>"u"){r(!0);return}const g=m.current;if(!g)return;const S=new IntersectionObserver(([j])=>{j.isIntersecting&&(r(!0),S.disconnect())},{threshold:s});return S.observe(g),()=>S.disconnect()},[s]),[m,y]}const ex=f.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${te.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`,tx=f.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${s=>s.$inView&&Ee`
      animation: ${U0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${te.mobile} {
    display: none;
  }
`,ax=f.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`,nx=f.div`
  min-width: 0;
  opacity: 0;

  ${s=>s.$inView&&Ee`
      animation: ${U0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,lx=()=>{const[s,m]=Py(.1);return u.jsxs(ex,{ref:s,children:[u.jsx(tx,{$inView:m,children:u.jsx(ax,{src:gy,alt:"Margg mobile app screenshot showing learning dashboard",width:1113,height:2340,loading:"lazy",decoding:"async"})}),u.jsx(nx,{$inView:m,children:u.jsx(Iy,{})})]})},ix=f.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`,ox=f.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ux=()=>u.jsxs(ix,{children:[u.jsx(Gs,{}),u.jsxs(ox,{children:[u.jsx(V1,{id:"home"}),u.jsx(Rg,{}),u.jsx(Qg,{id:"products"}),u.jsx(lx,{}),u.jsx(L2,{id:"contact-us"}),u.jsx(my,{}),u.jsx(Xs,{})]})]}),Qs={"frontend-development-course":{slug:"frontend-development-course",title:"Frontend Development Course – Learn React, HTML, CSS & JavaScript | Margg",metaDescription:"Master frontend development with Margg's roadmap-based course. Learn React, HTML, CSS, JavaScript, responsive design, and build real-world projects with expert mentorship. Enroll now.",keywords:"frontend development course, learn React, HTML CSS JavaScript course, frontend developer roadmap course, best frontend course India, web development course, UI development, responsive web design course, React course with projects, frontend bootcamp India",heroTitle:"Frontend Development Course",heroSubtitle:"Master Modern Web Development with a Structured Roadmap",heroDescription:"Learn to build beautiful, responsive, and production-ready web applications from scratch. Our roadmap-based frontend development course takes you from HTML basics to advanced React patterns — with real projects, one-on-one mentorship, and interview preparation.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why Choose Margg's Frontend Development Course?",content:`The demand for skilled frontend developers has never been higher. Companies across India and the world are looking for developers who can build fast, accessible, and visually stunning web applications. But most online courses teach isolated topics without connecting them into a career-ready skill set.

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
`,sx=f.nav`
  margin-bottom: 24px;
  font-family: ${H.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,x0=f.h1`
  font-family: ${H.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,cx=f.p`
  font-family: ${H.body};
  font-size: clamp(18px, 2.5vw, 24px);
  color: #D3C4EF;
  margin: 0 0 16px;
  font-weight: 400;
`,rx=f.p`
  font-family: ${H.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`,b0=f.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${H.body};
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
`,dx=f.main`
  max-width: ${Bn};
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`,fx=f.article`
  max-width: 820px;
  margin: 0 auto;
`,px=f.section`
  margin-bottom: 56px;
`,hx=f.h2`
  font-family: ${H.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,v0=f.p`
  font-family: ${H.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`,mx=f.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`,gx=f.li`
  font-family: ${H.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`,yx=f.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,xx=f.h2`
  font-family: ${H.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`,bx=f.details`
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
`,vx=f.summary`
  font-family: ${H.body};
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
`,wx=f.div`
  font-family: ${H.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`,Sx=f.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,jx=f.h2`
  font-family: ${H.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`,zx=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`,Tx=f(S0)`
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
`,Ex=f.h3`
  font-family: ${H.heading};
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 8px;
  text-transform: uppercase;
`,Mx=f.p`
  font-family: ${H.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.5;
  margin: 0;
`,Ax=Object.keys(Qs);function Dx(){const{slug:s}=um(),m=Qs[s];if(!m)return u.jsxs(m0,{children:[u.jsx(Gs,{}),u.jsx(g0,{children:u.jsxs(y0,{children:[u.jsx(x0,{children:"Course Not Found"}),u.jsx(v0,{children:"The course you're looking for doesn't exist."}),u.jsx(b0,{href:"/",children:"Back to Home"})]})}),u.jsx(Xs,{})]});const y=Ax.filter(r=>r!==s).map(r=>Qs[r]);return u.jsxs(m0,{children:[u.jsx(Gs,{}),u.jsx(g0,{children:u.jsxs(y0,{children:[u.jsxs(sx,{children:[u.jsx(S0,{to:"/",children:"Home"})," / ",u.jsx("span",{children:m.heroTitle})]}),u.jsx(x0,{children:m.heroTitle}),u.jsx(cx,{children:m.heroSubtitle}),u.jsx(rx,{children:m.heroDescription}),u.jsx(b0,{href:`/${m.ctaHash}`,children:m.ctaText})]})}),u.jsx(dx,{children:u.jsx(fx,{children:m.sections.map((r,g)=>u.jsxs(px,{children:[u.jsx(hx,{children:r.heading}),u.jsx(v0,{children:r.content}),r.list&&u.jsx(mx,{children:r.list.map((S,j)=>u.jsx(gx,{children:S},j))})]},g))})}),m.faqs?.length>0&&u.jsxs(yx,{children:[u.jsx(xx,{children:"Frequently Asked Questions"}),m.faqs.map((r,g)=>u.jsxs(bx,{children:[u.jsx(vx,{children:r.question}),u.jsx(wx,{children:r.answer})]},g))]}),u.jsxs(Sx,{children:[u.jsx(jx,{children:"Explore Other Courses"}),u.jsx(zx,{children:y.map(r=>u.jsxs(Tx,{to:`/${r.slug}`,children:[u.jsx(Ex,{children:r.heroTitle}),u.jsx(Mx,{children:r.heroSubtitle})]},r.slug))})]}),u.jsx(Xs,{})]})}function Cx(){return u.jsxs(sm,{children:[u.jsx(Ff,{path:"/",element:u.jsx(ux,{})}),u.jsx(Ff,{path:"/:slug",element:u.jsx(Dx,{})})]})}const Ox=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const Ux=lm({reducer:{app:xm,content:Cm},preloadedState:Ox});gm.hydrateRoot(document.getElementById("root"),u.jsx(D.StrictMode,{children:u.jsx(im,{store:Ux,children:u.jsx(cm,{children:u.jsx(Cx,{})})})}));
