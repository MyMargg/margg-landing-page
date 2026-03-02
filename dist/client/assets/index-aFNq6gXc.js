import{r as Gh,c as l0,u as Qh,a as O,b as Xh,P as Vh}from"./redux-ZgJ2Wkzd.js";import{r as Zh,u as s0,a as Kh,b as hc,L as xt,R as Jh,c as Bi,B as Fh}from"./vendor-CYazf-v1.js";import{p as te,c as u,s as me}from"./styles-CSKeg26X.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))d(x);new MutationObserver(x=>{for(const w of x)if(w.type==="childList")for(const T of w.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&d(T)}).observe(document,{childList:!0,subtree:!0});function h(x){const w={};return x.integrity&&(w.integrity=x.integrity),x.referrerPolicy&&(w.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?w.credentials="include":x.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(x){if(x.ep)return;x.ep=!0;const w=h(x);fetch(x.href,w)}})();var _r={exports:{}},Ui={};var Sp;function Wh(){if(Sp)return Ui;Sp=1;var r=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function h(d,x,w){var T=null;if(w!==void 0&&(T=""+w),x.key!==void 0&&(T=""+x.key),"key"in x){w={};for(var L in x)L!=="key"&&(w[L]=x[L])}else w=x;return x=w.ref,{$$typeof:r,type:d,key:T,ref:x!==void 0?x:null,props:w}}return Ui.Fragment=p,Ui.jsx=h,Ui.jsxs=h,Ui}var jp;function Ih(){return jp||(jp=1,_r.exports=Wh()),_r.exports}var s=Ih(),Yr={exports:{}},Ri={},Gr={exports:{}},Qr={};var zp;function Ph(){return zp||(zp=1,(function(r){function p(E,B){var Y=E.length;E.push(B);e:for(;0<Y;){var xe=Y-1>>>1,ye=E[xe];if(0<x(ye,B))E[xe]=B,E[Y]=ye,Y=xe;else break e}}function h(E){return E.length===0?null:E[0]}function d(E){if(E.length===0)return null;var B=E[0],Y=E.pop();if(Y!==B){E[0]=Y;e:for(var xe=0,ye=E.length,Je=ye>>>1;xe<Je;){var Se=2*(xe+1)-1,oe=E[Se],Re=Se+1,Ut=E[Re];if(0>x(oe,Y))Re<ye&&0>x(Ut,oe)?(E[xe]=Ut,E[Re]=Y,xe=Re):(E[xe]=oe,E[Se]=Y,xe=Se);else if(Re<ye&&0>x(Ut,Y))E[xe]=Ut,E[Re]=Y,xe=Re;else break e}}return B}function x(E,B){var Y=E.sortIndex-B.sortIndex;return Y!==0?Y:E.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var w=performance;r.unstable_now=function(){return w.now()}}else{var T=Date,L=T.now();r.unstable_now=function(){return T.now()-L}}var k=[],N=[],_=1,D=null,q=3,Z=!1,ue=!1,he=!1,ie=!1,je=typeof setTimeout=="function"?setTimeout:null,$e=typeof clearTimeout=="function"?clearTimeout:null,Ve=typeof setImmediate<"u"?setImmediate:null;function Pe(E){for(var B=h(N);B!==null;){if(B.callback===null)d(N);else if(B.startTime<=E)d(N),B.sortIndex=B.expirationTime,p(k,B);else break;B=h(N)}}function K(E){if(he=!1,Pe(E),!ue)if(h(k)!==null)ue=!0,se||(se=!0,J());else{var B=h(N);B!==null&&At(K,B.startTime-E)}}var se=!1,Be=-1,Ce=5,Bt=-1;function A(){return ie?!0:!(r.unstable_now()-Bt<Ce)}function G(){if(ie=!1,se){var E=r.unstable_now();Bt=E;var B=!0;try{e:{ue=!1,he&&(he=!1,$e(Be),Be=-1),Z=!0;var Y=q;try{t:{for(Pe(E),D=h(k);D!==null&&!(D.expirationTime>E&&A());){var xe=D.callback;if(typeof xe=="function"){D.callback=null,q=D.priorityLevel;var ye=xe(D.expirationTime<=E);if(E=r.unstable_now(),typeof ye=="function"){D.callback=ye,Pe(E),B=!0;break t}D===h(k)&&d(k),Pe(E)}else d(k);D=h(k)}if(D!==null)B=!0;else{var Je=h(N);Je!==null&&At(K,Je.startTime-E),B=!1}}break e}finally{D=null,q=Y,Z=!1}B=void 0}}finally{B?J():se=!1}}}var J;if(typeof Ve=="function")J=function(){Ve(G)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Ct=Ue.port2;Ue.port1.onmessage=G,J=function(){Ct.postMessage(null)}}else J=function(){je(G,0)};function At(E,B){Be=je(function(){E(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(E){E.callback=null},r.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<E?Math.floor(1e3/E):5},r.unstable_getCurrentPriorityLevel=function(){return q},r.unstable_next=function(E){switch(q){case 1:case 2:case 3:var B=3;break;default:B=q}var Y=q;q=B;try{return E()}finally{q=Y}},r.unstable_requestPaint=function(){ie=!0},r.unstable_runWithPriority=function(E,B){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Y=q;q=E;try{return B()}finally{q=Y}},r.unstable_scheduleCallback=function(E,B,Y){var xe=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xe+Y:xe):Y=xe,E){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Y+ye,E={id:_++,callback:B,priorityLevel:E,startTime:Y,expirationTime:ye,sortIndex:-1},Y>xe?(E.sortIndex=Y,p(N,E),h(k)===null&&E===h(N)&&(he?($e(Be),Be=-1):he=!0,At(K,Y-xe))):(E.sortIndex=ye,p(k,E),ue||Z||(ue=!0,se||(se=!0,J()))),E},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(E){var B=q;return function(){var Y=q;q=B;try{return E.apply(this,arguments)}finally{q=Y}}}})(Qr)),Qr}var Tp;function em(){return Tp||(Tp=1,Gr.exports=Ph()),Gr.exports}var Ep;function tm(){if(Ep)return Ri;Ep=1;var r=em(),p=Gh(),h=Zh();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function w(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function T(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(w(e)!==e)throw Error(d(188))}function N(e){var t=e.alternate;if(!t){if(t=w(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return k(i),e;if(l===n)return k(i),t;l=l.sibling}throw Error(d(188))}if(a.return!==n.return)a=i,n=l;else{for(var o=!1,c=i.child;c;){if(c===a){o=!0,a=i,n=l;break}if(c===n){o=!0,n=i,a=l;break}c=c.sibling}if(!o){for(c=l.child;c;){if(c===a){o=!0,a=l,n=i;break}if(c===n){o=!0,n=l,a=i;break}c=c.sibling}if(!o)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}var D=Object.assign,q=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),ue=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),$e=Symbol.for("react.consumer"),Ve=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Be=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case he:return"Fragment";case je:return"Profiler";case ie:return"StrictMode";case K:return"Suspense";case se:return"SuspenseList";case Bt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ue:return"Portal";case Ve:return e.displayName||"Context";case $e:return(e._context.displayName||"Context")+".Consumer";case Pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Be:return t=e.displayName||null,t!==null?t:Ct(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return Ct(e(t))}catch{}}return null}var At=Array.isArray,E=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xe=[],ye=-1;function Je(e){return{current:e}}function Se(e){0>ye||(e.current=xe[ye],xe[ye]=null,ye--)}function oe(e,t){ye++,xe[ye]=e.current,e.current=t}var Re=Je(null),Ut=Je(null),ia=Je(null),_i=Je(null);function Yi(e,t){switch(oe(ia,t),oe(Ut,e),oe(Re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xf(t),e=Vf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Se(Re),oe(Re,e)}function Ia(){Se(Re),Se(Ut),Se(ia)}function ws(e){e.memoizedState!==null&&oe(_i,e);var t=Re.current,a=Vf(t,e.type);t!==a&&(oe(Ut,e),oe(Re,a))}function Gi(e){Ut.current===e&&(Se(Re),Se(Ut)),_i.current===e&&(Se(_i),ki._currentValue=Y)}var Ss,vc;function La(e){if(Ss===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ss=t&&t[1]||"",vc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ss+e+vc}var js=!1;function zs(e,t){if(!e||js)return"";js=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(S){var v=S}Reflect.construct(e,[],M)}else{try{M.call()}catch(S){v=S}e.call(M.prototype)}}else{try{throw Error()}catch(S){v=S}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(S){if(S&&v&&typeof S.stack=="string")return[S.stack,v.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),o=l[0],c=l[1];if(o&&c){var f=o.split(`
`),b=c.split(`
`);for(i=n=0;n<f.length&&!f[n].includes("DetermineComponentFrameRoot");)n++;for(;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;if(n===f.length||i===b.length)for(n=f.length-1,i=b.length-1;1<=n&&0<=i&&f[n]!==b[i];)i--;for(;1<=n&&0<=i;n--,i--)if(f[n]!==b[i]){if(n!==1||i!==1)do if(n--,i--,0>i||f[n]!==b[i]){var j=`
`+f[n].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=n&&0<=i);break}}}finally{js=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?La(a):""}function v0(e,t){switch(e.tag){case 26:case 27:case 5:return La(e.type);case 16:return La("Lazy");case 13:return e.child!==t&&t!==null?La("Suspense Fallback"):La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return zs(e.type,!1);case 11:return zs(e.type.render,!1);case 1:return zs(e.type,!0);case 31:return La("Activity");default:return""}}function wc(e){try{var t="",a=null;do t+=v0(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ts=Object.prototype.hasOwnProperty,Es=r.unstable_scheduleCallback,Ms=r.unstable_cancelCallback,w0=r.unstable_shouldYield,S0=r.unstable_requestPaint,ot=r.unstable_now,j0=r.unstable_getCurrentPriorityLevel,Sc=r.unstable_ImmediatePriority,jc=r.unstable_UserBlockingPriority,Qi=r.unstable_NormalPriority,z0=r.unstable_LowPriority,zc=r.unstable_IdlePriority,T0=r.log,E0=r.unstable_setDisableYieldValue,Yn=null,rt=null;function la(e){if(typeof T0=="function"&&E0(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(Yn,e)}catch{}}var ct=Math.clz32?Math.clz32:A0,M0=Math.log,C0=Math.LN2;function A0(e){return e>>>=0,e===0?32:31-(M0(e)/C0|0)|0}var Xi=256,Vi=262144,Zi=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ki(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~l,n!==0?i=Oa(n):(o&=c,o!==0?i=Oa(o):a||(a=c&~e,a!==0&&(i=Oa(a))))):(c=n&~l,c!==0?i=Oa(c):o!==0?i=Oa(o):a||(a=n&~e,a!==0&&(i=Oa(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function Gn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function k0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tc(){var e=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),e}function Cs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Qn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function D0(e,t,a,n,i,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,b=e.hiddenUpdates;for(a=o&~a;0<a;){var j=31-ct(a),M=1<<j;c[j]=0,f[j]=-1;var v=b[j];if(v!==null)for(b[j]=null,j=0;j<v.length;j++){var S=v[j];S!==null&&(S.lane&=-536870913)}a&=~M}n!==0&&Ec(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function Ec(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ct(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Mc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ct(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Cc(e,t){var a=t&-t;return a=(a&42)!==0?1:As(a),(a&(e.suspendedLanes|t))!==0?0:a}function As(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ac(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:hp(e.type))}function kc(e,t){var a=B.p;try{return B.p=e,t()}finally{B.p=a}}var sa=Math.random().toString(36).slice(2),qe="__reactFiber$"+sa,et="__reactProps$"+sa,Pa="__reactContainer$"+sa,Ds="__reactEvents$"+sa,L0="__reactListeners$"+sa,O0="__reactHandles$"+sa,Dc="__reactResources$"+sa,Xn="__reactMarker$"+sa;function Ls(e){delete e[qe],delete e[et],delete e[Ds],delete e[L0],delete e[O0]}function en(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Pa]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Pf(e);e!==null;){if(a=e[qe])return a;e=Pf(e)}return t}e=a,a=e.parentNode}return null}function tn(e){if(e=e[qe]||e[Pa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function an(e){var t=e[Dc];return t||(t=e[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ne(e){e[Xn]=!0}var Lc=new Set,Oc={};function Ba(e,t){nn(e,t),nn(e+"Capture",t)}function nn(e,t){for(Oc[e]=t,e=0;e<t.length;e++)Lc.add(t[e])}var B0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},Uc={};function U0(e){return Ts.call(Uc,e)?!0:Ts.call(Bc,e)?!1:B0.test(e)?Uc[e]=!0:(Bc[e]=!0,!1)}function Ji(e,t,a){if(U0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Fi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R0(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Os(e){if(!e._valueTracker){var t=Rc(e)?"checked":"value";e._valueTracker=R0(e,t,""+e[t])}}function Nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Rc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var N0=/[\n"\\]/g;function bt(e){return e.replace(N0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bs(e,t,a,n,i,l,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Us(e,o,yt(t)):a!=null?Us(e,o,yt(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+yt(c):e.removeAttribute("name")}function Hc(e,t,a,n,i,l,o,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Os(e);return}a=a!=null?""+yt(a):"",t=t!=null?""+yt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Os(e)}function Us(e,t,a){t==="number"&&Wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $c(e,t,a){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+yt(a):""}function qc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(At(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=yt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Os(e)}function sn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var H0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||H0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yc(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&_c(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&_c(e,l,t[l])}function Rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return q0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _t(){}var Ns=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,rn=null;function Gc(e){var t=tn(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[et]||null;if(!i)throw Error(d(90));Bs(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Nc(n)}break e;case"textarea":$c(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ln(e,!!a.multiple,t,!1)}}}var $s=!1;function Qc(e,t,a){if($s)return e(t,a);$s=!0;try{var n=e(t);return n}finally{if($s=!1,(on!==null||rn!==null)&&($l(),on&&(t=on,e=rn,rn=on=null,Gc(t),e)))for(t=0;t<e.length;t++)Gc(e[t])}}function Zn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[et]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qs=!1;if(Yt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){qs=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{qs=!1}var oa=null,_s=null,Pi=null;function Xc(){if(Pi)return Pi;var e,t=_s,a=t.length,n,i="value"in oa?oa.value:oa.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[l-n];n++);return Pi=i.slice(e,1<n?1-n:void 0)}function el(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Vc(){return!1}function tt(e){function t(a,n,i,l,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?tl:Vc,this.isPropagationStopped=Vc,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=tt(Ua),Jn=D({},Ua,{view:0,detail:0}),_0=tt(Jn),Ys,Gs,Fn,nl=D({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(Ys=e.screenX-Fn.screenX,Gs=e.screenY-Fn.screenY):Gs=Ys=0,Fn=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Zc=tt(nl),Y0=D({},nl,{dataTransfer:0}),G0=tt(Y0),Q0=D({},Jn,{relatedTarget:0}),Qs=tt(Q0),X0=D({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=tt(X0),Z0=D({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=tt(Z0),J0=D({},Ua,{data:0}),Kc=tt(J0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I0[e])?!!t[e]:!1}function Xs(){return P0}var eg=D({},Jn,{key:function(e){if(e.key){var t=F0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=tt(eg),ag=D({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=tt(ag),ng=D({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),ig=tt(ng),lg=D({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=tt(lg),og=D({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=tt(og),cg=D({},Ua,{newState:0,oldState:0}),ug=tt(cg),dg=[9,13,27,32],Vs=Yt&&"CompositionEvent"in window,Wn=null;Yt&&"documentMode"in document&&(Wn=document.documentMode);var fg=Yt&&"TextEvent"in window&&!Wn,Fc=Yt&&(!Vs||Wn&&8<Wn&&11>=Wn),Wc=" ",Ic=!1;function Pc(e,t){switch(e){case"keyup":return dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function pg(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(Ic=!0,Wc);case"textInput":return e=t.data,e===Wc&&Ic?null:e;default:return null}}function gg(e,t){if(cn)return e==="compositionend"||!Vs&&Pc(e,t)?(e=Xc(),Pi=_s=oa=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fc&&t.locale!=="ko"?null:t.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hg[e.type]:t==="textarea"}function au(e,t,a,n){on?rn?rn.push(n):rn=[n]:on=n,t=Vl(t,"onChange"),0<t.length&&(a=new al("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var In=null,Pn=null;function mg(e){$f(e,0)}function il(e){var t=Vn(e);if(Nc(t))return e}function nu(e,t){if(e==="change")return t}var iu=!1;if(Yt){var Zs;if(Yt){var Ks="oninput"in document;if(!Ks){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),Ks=typeof lu.oninput=="function"}Zs=Ks}else Zs=!1;iu=Zs&&(!document.documentMode||9<document.documentMode)}function su(){In&&(In.detachEvent("onpropertychange",ou),Pn=In=null)}function ou(e){if(e.propertyName==="value"&&il(Pn)){var t=[];au(t,Pn,e,Hs(e)),Qc(mg,t)}}function xg(e,t,a){e==="focusin"?(su(),In=t,Pn=a,In.attachEvent("onpropertychange",ou)):e==="focusout"&&su()}function yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Pn)}function bg(e,t){if(e==="click")return il(t)}function vg(e,t){if(e==="input"||e==="change")return il(t)}function wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:wg;function ei(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Ts.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,t){var a=ru(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ru(a)}}function uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function du(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wi(e.document)}return t}function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sg=Yt&&"documentMode"in document&&11>=document.documentMode,un=null,Fs=null,ti=null,Ws=!1;function fu(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ws||un==null||un!==Wi(n)||(n=un,"selectionStart"in n&&Js(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ti&&ei(ti,n)||(ti=n,n=Vl(Fs,"onSelect"),0<n.length&&(t=new al("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=un)))}function Ra(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var dn={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},Is={},pu={};Yt&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Na(e){if(Is[e])return Is[e];if(!dn[e])return e;var t=dn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in pu)return Is[e]=t[a];return e}var gu=Na("animationend"),hu=Na("animationiteration"),mu=Na("animationstart"),jg=Na("transitionrun"),zg=Na("transitionstart"),Tg=Na("transitioncancel"),xu=Na("transitionend"),yu=new Map,Ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ps.push("scrollEnd");function kt(e,t){yu.set(e,t),Ba(t,[e])}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],fn=0,eo=0;function sl(){for(var e=fn,t=eo=fn=0;t<e;){var a=vt[t];vt[t++]=null;var n=vt[t];vt[t++]=null;var i=vt[t];vt[t++]=null;var l=vt[t];if(vt[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}l!==0&&bu(a,i,l)}}function ol(e,t,a,n){vt[fn++]=e,vt[fn++]=t,vt[fn++]=a,vt[fn++]=n,eo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function to(e,t,a,n){return ol(e,t,a,n),rl(e)}function Ha(e,t){return ol(e,null,null,t),rl(e)}function bu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-ct(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function rl(e){if(50<ji)throw ji=0,dr=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pn={};function Eg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,n){return new Eg(e,t,a,n)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cl(e,t,a,n,i,l){var o=0;if(n=e,typeof e=="function")ao(e)&&(o=1);else if(typeof e=="string")o=Dh(e,a,Re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Bt:return e=dt(31,a,t,i),e.elementType=Bt,e.lanes=l,e;case he:return $a(a.children,i,l,t);case ie:o=8,i|=24;break;case je:return e=dt(12,a,t,i|2),e.elementType=je,e.lanes=l,e;case K:return e=dt(13,a,t,i),e.elementType=K,e.lanes=l,e;case se:return e=dt(19,a,t,i),e.elementType=se,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:o=10;break e;case $e:o=9;break e;case Pe:o=11;break e;case Be:o=14;break e;case Ce:o=16,n=null;break e}o=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=dt(o,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function $a(e,t,a,n){return e=dt(7,e,n,t),e.lanes=a,e}function no(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function wu(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function io(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Su=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=Su.get(e);return a!==void 0?a:(t={value:e,source:t,stack:wc(t)},Su.set(e,t),t)}return{value:e,source:t,stack:wc(t)}}var gn=[],hn=0,ul=null,ai=0,St=[],jt=0,ra=null,Rt=1,Nt="";function Qt(e,t){gn[hn++]=ai,gn[hn++]=ul,ul=e,ai=t}function ju(e,t,a){St[jt++]=Rt,St[jt++]=Nt,St[jt++]=ra,ra=e;var n=Rt;e=Nt;var i=32-ct(n)-1;n&=~(1<<i),a+=1;var l=32-ct(t)+i;if(30<l){var o=i-i%5;l=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Rt=1<<32-ct(t)+i|a<<i|n,Nt=l+e}else Rt=1<<l|a<<i|n,Nt=e}function lo(e){e.return!==null&&(Qt(e,1),ju(e,1,0))}function so(e){for(;e===ul;)ul=gn[--hn],gn[hn]=null,ai=gn[--hn],gn[hn]=null;for(;e===ra;)ra=St[--jt],St[jt]=null,Nt=St[--jt],St[jt]=null,Rt=St[--jt],St[jt]=null}function zu(e,t){St[jt++]=Rt,St[jt++]=Nt,St[jt++]=ra,Rt=t.id,Nt=t.overflow,ra=e}var _e=null,be=null,ee=!1,ca=null,zt=!1,oo=Error(d(519));function ua(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ni(wt(t,e)),oo}function Tu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[qe]=e,t[et]=n,a){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(a=0;a<Ti.length;a++)W(Ti[a],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Hc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),qc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Gf(t.textContent,a)?(n.popover!=null&&(W("beforetoggle",t),W("toggle",t)),n.onScroll!=null&&W("scroll",t),n.onScrollEnd!=null&&W("scrollend",t),n.onClick!=null&&(t.onclick=_t),t=!0):t=!1,t||ua(e,!0)}function Eu(e){for(_e=e.return;_e;)switch(_e.tag){case 5:case 31:case 13:zt=!1;return;case 27:case 3:zt=!0;return;default:_e=_e.return}}function mn(e){if(e!==_e)return!1;if(!ee)return Eu(e),ee=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Er(e.type,e.memoizedProps)),a=!a),a&&be&&ua(e),Eu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));be=If(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));be=If(e)}else t===27?(t=be,za(e.type)?(e=Dr,Dr=null,be=e):be=t):be=_e?Et(e.stateNode.nextSibling):null;return!0}function qa(){be=_e=null,ee=!1}function ro(){var e=ca;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),ca=null),e}function ni(e){ca===null?ca=[e]:ca.push(e)}var co=Je(null),_a=null,Xt=null;function da(e,t,a){oe(co,t._currentValue),t._currentValue=a}function Vt(e){e._currentValue=co.current,Se(co)}function uo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function fo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=i;for(var f=0;f<t.length;f++)if(c.context===t[f]){l.lanes|=a,c=l.alternate,c!==null&&(c.lanes|=a),uo(l.return,a,e),n||(o=null);break e}l=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(d(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),uo(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function xn(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var c=i.type;ut(i.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(i===_i.current){if(o=i.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ki):e=[ki])}i=i.return}e!==null&&fo(t,e,a,n),t.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){_a=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return Mu(_a,e)}function fl(e,t){return _a===null&&Ya(e),Mu(e,t)}function Mu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Xt===null){if(e===null)throw Error(d(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return a}var Mg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Cg=r.unstable_scheduleCallback,Ag=r.unstable_NormalPriority,Ae={$$typeof:Ve,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function po(){return{controller:new Mg,data:new Map,refCount:0}}function ii(e){e.refCount--,e.refCount===0&&Cg(Ag,function(){e.controller.abort()})}var li=null,go=0,yn=0,bn=null;function kg(e,t){if(li===null){var a=li=[];go=0,yn=xr(),bn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return go++,t.then(Cu,Cu),t}function Cu(){if(--go===0&&li!==null){bn!==null&&(bn.status="fulfilled");var e=li;li=null,yn=0,bn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Dg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Au=E.S;E.S=function(e,t){pf=ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&kg(e,t),Au!==null&&Au(e,t)};var Ga=Je(null);function ho(){var e=Ga.current;return e!==null?e:ge.pooledCache}function pl(e,t){t===null?oe(Ga,Ga.current):oe(Ga,t.pool)}function ku(){var e=ho();return e===null?null:{parent:Ae._currentValue,pool:e}}var vn=Error(d(460)),mo=Error(d(474)),gl=Error(d(542)),hl={then:function(){}};function Du(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(_t,_t),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e;default:if(typeof t.status=="string")t.then(_t,_t);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Bu(e),e}throw Xa=t,vn}}function Qa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Xa=a,vn):a}}var Xa=null;function Ou(){if(Xa===null)throw Error(d(459));var e=Xa;return Xa=null,e}function Bu(e){if(e===vn||e===gl)throw Error(d(483))}var wn=null,si=0;function ml(e){var t=si;return si+=1,wn===null&&(wn=[]),Lu(wn,e,t)}function oi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xl(e,t){throw t.$$typeof===q?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uu(e){function t(m,g){if(e){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function a(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function n(m){for(var g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(m,g){return m=Gt(m,g),m.index=0,m.sibling=null,m}function l(m,g,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=67108866,g):y):(m.flags|=67108866,g)):(m.flags|=1048576,g)}function o(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,g,y,z){return g===null||g.tag!==6?(g=no(y,m.mode,z),g.return=m,g):(g=i(g,y),g.return=m,g)}function f(m,g,y,z){var H=y.type;return H===he?j(m,g,y.props.children,z,y.key):g!==null&&(g.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ce&&Qa(H)===g.type)?(g=i(g,y.props),oi(g,y),g.return=m,g):(g=cl(y.type,y.key,y.props,null,m.mode,z),oi(g,y),g.return=m,g)}function b(m,g,y,z){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=io(y,m.mode,z),g.return=m,g):(g=i(g,y.children||[]),g.return=m,g)}function j(m,g,y,z,H){return g===null||g.tag!==7?(g=$a(y,m.mode,z,H),g.return=m,g):(g=i(g,y),g.return=m,g)}function M(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=no(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Z:return y=cl(g.type,g.key,g.props,null,m.mode,y),oi(y,g),y.return=m,y;case ue:return g=io(g,m.mode,y),g.return=m,g;case Ce:return g=Qa(g),M(m,g,y)}if(At(g)||J(g))return g=$a(g,m.mode,y,null),g.return=m,g;if(typeof g.then=="function")return M(m,ml(g),y);if(g.$$typeof===Ve)return M(m,fl(m,g),y);xl(m,g)}return null}function v(m,g,y,z){var H=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return H!==null?null:c(m,g,""+y,z);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:return y.key===H?f(m,g,y,z):null;case ue:return y.key===H?b(m,g,y,z):null;case Ce:return y=Qa(y),v(m,g,y,z)}if(At(y)||J(y))return H!==null?null:j(m,g,y,z,null);if(typeof y.then=="function")return v(m,g,ml(y),z);if(y.$$typeof===Ve)return v(m,g,fl(m,y),z);xl(m,y)}return null}function S(m,g,y,z,H){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return m=m.get(y)||null,c(g,m,""+z,H);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:return m=m.get(z.key===null?y:z.key)||null,f(g,m,z,H);case ue:return m=m.get(z.key===null?y:z.key)||null,b(g,m,z,H);case Ce:return z=Qa(z),S(m,g,y,z,H)}if(At(z)||J(z))return m=m.get(y)||null,j(g,m,z,H,null);if(typeof z.then=="function")return S(m,g,y,ml(z),H);if(z.$$typeof===Ve)return S(m,g,y,fl(g,z),H);xl(g,z)}return null}function U(m,g,y,z){for(var H=null,ae=null,R=g,X=g=0,P=null;R!==null&&X<y.length;X++){R.index>X?(P=R,R=null):P=R.sibling;var ne=v(m,R,y[X],z);if(ne===null){R===null&&(R=P);break}e&&R&&ne.alternate===null&&t(m,R),g=l(ne,g,X),ae===null?H=ne:ae.sibling=ne,ae=ne,R=P}if(X===y.length)return a(m,R),ee&&Qt(m,X),H;if(R===null){for(;X<y.length;X++)R=M(m,y[X],z),R!==null&&(g=l(R,g,X),ae===null?H=R:ae.sibling=R,ae=R);return ee&&Qt(m,X),H}for(R=n(R);X<y.length;X++)P=S(R,m,X,y[X],z),P!==null&&(e&&P.alternate!==null&&R.delete(P.key===null?X:P.key),g=l(P,g,X),ae===null?H=P:ae.sibling=P,ae=P);return e&&R.forEach(function(Aa){return t(m,Aa)}),ee&&Qt(m,X),H}function $(m,g,y,z){if(y==null)throw Error(d(151));for(var H=null,ae=null,R=g,X=g=0,P=null,ne=y.next();R!==null&&!ne.done;X++,ne=y.next()){R.index>X?(P=R,R=null):P=R.sibling;var Aa=v(m,R,ne.value,z);if(Aa===null){R===null&&(R=P);break}e&&R&&Aa.alternate===null&&t(m,R),g=l(Aa,g,X),ae===null?H=Aa:ae.sibling=Aa,ae=Aa,R=P}if(ne.done)return a(m,R),ee&&Qt(m,X),H;if(R===null){for(;!ne.done;X++,ne=y.next())ne=M(m,ne.value,z),ne!==null&&(g=l(ne,g,X),ae===null?H=ne:ae.sibling=ne,ae=ne);return ee&&Qt(m,X),H}for(R=n(R);!ne.done;X++,ne=y.next())ne=S(R,m,X,ne.value,z),ne!==null&&(e&&ne.alternate!==null&&R.delete(ne.key===null?X:ne.key),g=l(ne,g,X),ae===null?H=ne:ae.sibling=ne,ae=ne);return e&&R.forEach(function(Yh){return t(m,Yh)}),ee&&Qt(m,X),H}function pe(m,g,y,z){if(typeof y=="object"&&y!==null&&y.type===he&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Z:e:{for(var H=y.key;g!==null;){if(g.key===H){if(H=y.type,H===he){if(g.tag===7){a(m,g.sibling),z=i(g,y.props.children),z.return=m,m=z;break e}}else if(g.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ce&&Qa(H)===g.type){a(m,g.sibling),z=i(g,y.props),oi(z,y),z.return=m,m=z;break e}a(m,g);break}else t(m,g);g=g.sibling}y.type===he?(z=$a(y.props.children,m.mode,z,y.key),z.return=m,m=z):(z=cl(y.type,y.key,y.props,null,m.mode,z),oi(z,y),z.return=m,m=z)}return o(m);case ue:e:{for(H=y.key;g!==null;){if(g.key===H)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){a(m,g.sibling),z=i(g,y.children||[]),z.return=m,m=z;break e}else{a(m,g);break}else t(m,g);g=g.sibling}z=io(y,m.mode,z),z.return=m,m=z}return o(m);case Ce:return y=Qa(y),pe(m,g,y,z)}if(At(y))return U(m,g,y,z);if(J(y)){if(H=J(y),typeof H!="function")throw Error(d(150));return y=H.call(y),$(m,g,y,z)}if(typeof y.then=="function")return pe(m,g,ml(y),z);if(y.$$typeof===Ve)return pe(m,g,fl(m,y),z);xl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,g!==null&&g.tag===6?(a(m,g.sibling),z=i(g,y),z.return=m,m=z):(a(m,g),z=no(y,m.mode,z),z.return=m,m=z),o(m)):a(m,g)}return function(m,g,y,z){try{si=0;var H=pe(m,g,y,z);return wn=null,H}catch(R){if(R===vn||R===gl)throw R;var ae=dt(29,R,null,m.mode);return ae.lanes=z,ae.return=m,ae}}}var Va=Uu(!0),Ru=Uu(!1),fa=!1;function xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(le&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=rl(e),bu(e,null,a),t}return ol(e,n,t,a),rl(e)}function ri(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Mc(e,a)}}function bo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var vo=!1;function ci(){if(vo){var e=bn;if(e!==null)throw e}}function ui(e,t,a,n){vo=!1;var i=e.updateQueue;fa=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,b=f.next;f.next=null,o===null?l=b:o.next=b,o=f;var j=e.alternate;j!==null&&(j=j.updateQueue,c=j.lastBaseUpdate,c!==o&&(c===null?j.firstBaseUpdate=b:c.next=b,j.lastBaseUpdate=f))}if(l!==null){var M=i.baseState;o=0,j=b=f=null,c=l;do{var v=c.lane&-536870913,S=v!==c.lane;if(S?(I&v)===v:(n&v)===v){v!==0&&v===yn&&(vo=!0),j!==null&&(j=j.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var U=e,$=c;v=t;var pe=a;switch($.tag){case 1:if(U=$.payload,typeof U=="function"){M=U.call(pe,M,v);break e}M=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=$.payload,v=typeof U=="function"?U.call(pe,M,v):U,v==null)break e;M=D({},M,v);break e;case 2:fa=!0}}v=c.callback,v!==null&&(e.flags|=64,S&&(e.flags|=8192),S=i.callbacks,S===null?i.callbacks=[v]:S.push(v))}else S={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},j===null?(b=j=S,f=M):j=j.next=S,o|=v;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;S=c,c=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);j===null&&(f=M),i.baseState=f,i.firstBaseUpdate=b,i.lastBaseUpdate=j,l===null&&(i.shared.lanes=0),ba|=o,e.lanes=o,e.memoizedState=M}}function Nu(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Hu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nu(a[e],t)}var Sn=Je(null),yl=Je(0);function $u(e,t){e=ta,oe(yl,e),oe(Sn,t),ta=e|t.baseLanes}function wo(){oe(yl,ta),oe(Sn,Sn.current)}function So(){ta=yl.current,Se(Sn),Se(yl)}var ft=Je(null),Tt=null;function ha(e){var t=e.alternate;oe(Ee,Ee.current&1),oe(ft,e),Tt===null&&(t===null||Sn.current!==null||t.memoizedState!==null)&&(Tt=e)}function jo(e){oe(Ee,Ee.current),oe(ft,e),Tt===null&&(Tt=e)}function qu(e){e.tag===22?(oe(Ee,Ee.current),oe(ft,e),Tt===null&&(Tt=e)):ma()}function ma(){oe(Ee,Ee.current),oe(ft,ft.current)}function pt(e){Se(ft),Tt===e&&(Tt=null),Se(Ee)}var Ee=Je(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ar(a)||kr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,Q=null,de=null,ke=null,vl=!1,jn=!1,Za=!1,wl=0,di=0,zn=null,Lg=0;function ze(){throw Error(d(321))}function zo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function To(e,t,a,n,i,l){return Zt=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?jd:qo,Za=!1,l=a(n,i),Za=!1,jn&&(l=Yu(t,a,n,i)),_u(e),l}function _u(e){E.H=gi;var t=de!==null&&de.next!==null;if(Zt=0,ke=de=Q=null,vl=!1,di=0,zn=null,t)throw Error(d(300));e===null||De||(e=e.dependencies,e!==null&&dl(e)&&(De=!0))}function Yu(e,t,a,n){Q=e;var i=0;do{if(jn&&(zn=null),di=0,jn=!1,25<=i)throw Error(d(301));if(i+=1,ke=de=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}E.H=zd,l=t(a,n)}while(jn);return l}function Og(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?fi(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Q.flags|=1024),t}function Eo(){var e=wl!==0;return wl=0,e}function Mo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Co(e){if(vl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vl=!1}Zt=0,ke=de=Q=null,jn=!1,di=wl=0,zn=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?Q.memoizedState=ke=e:ke=ke.next=e,ke}function Me(){if(de===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ke===null?Q.memoizedState:ke.next;if(t!==null)ke=t,de=e;else{if(e===null)throw Q.alternate===null?Error(d(467)):Error(d(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ke===null?Q.memoizedState=ke=e:ke=ke.next=e}return ke}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fi(e){var t=di;return di+=1,zn===null&&(zn=[]),e=Lu(zn,e,t),t=Q,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?jd:qo),e}function jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fi(e);if(e.$$typeof===Ve)return Ye(e)}throw Error(d(438,String(e)))}function Ao(e){var t=null,a=Q.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Q.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Sl(),Q.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=A;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=Me();return ko(t,de,e)}function ko(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var c=o=null,f=null,b=t,j=!1;do{var M=b.lane&-536870913;if(M!==b.lane?(I&M)===M:(Zt&M)===M){var v=b.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),M===yn&&(j=!0);else if((Zt&v)===v){b=b.next,v===yn&&(j=!0);continue}else M={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=M,o=l):f=f.next=M,Q.lanes|=v,ba|=v;M=b.action,Za&&a(l,M),l=b.hasEagerState?b.eagerState:a(l,M)}else v={lane:M,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(c=f=v,o=l):f=f.next=v,Q.lanes|=M,ba|=M;b=b.next}while(b!==null&&b!==t);if(f===null?o=l:f.next=c,!ut(l,e.memoizedState)&&(De=!0,j&&(a=bn,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=f,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Do(e){var t=Me(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ut(l,t.memoizedState)||(De=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function Gu(e,t,a){var n=Q,i=Me(),l=ee;if(l){if(a===void 0)throw Error(d(407));a=a()}else a=t();var o=!ut((de||i).memoizedState,a);if(o&&(i.memoizedState=a,De=!0),i=i.queue,Bo(Vu.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Tn(9,{destroy:void 0},Xu.bind(null,n,i,a,t),null),ge===null)throw Error(d(349));l||(Zt&127)!==0||Qu(n,t,a)}return a}function Qu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Q.updateQueue,t===null?(t=Sl(),Q.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Xu(e,t,a,n){t.value=a,t.getSnapshot=n,Zu(t)&&Ku(e)}function Vu(e,t,a){return a(function(){Zu(t)&&Ku(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function Ku(e){var t=Ha(e,2);t!==null&&st(t,e,2)}function Lo(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Za){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Ju(e,t,a,n){return e.baseState=a,ko(e,de,typeof n=="function"?n:Kt)}function Bg(e,t,a,n,i){if(Ml(e))throw Error(d(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};E.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,Fu(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Fu(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=E.T,o={};E.T=o;try{var c=a(i,n),f=E.S;f!==null&&f(o,c),Wu(e,t,c)}catch(b){Oo(e,t,b)}finally{l!==null&&o.types!==null&&(l.types=o.types),E.T=l}}else try{l=a(i,n),Wu(e,t,l)}catch(b){Oo(e,t,b)}}function Wu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Iu(e,t,n)},function(n){return Oo(e,t,n)}):Iu(e,t,a)}function Iu(e,t,a){t.status="fulfilled",t.value=a,Pu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Fu(e,a)))}function Oo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Pu(t),t=t.next;while(t!==n)}e.action=null}function Pu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ed(e,t){return t}function td(e,t){if(ee){var a=ge.formState;if(a!==null){e:{var n=Q;if(ee){if(be){t:{for(var i=be,l=zt;i.nodeType!==8;){if(!l){i=null;break t}if(i=Et(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){be=Et(i.nextSibling),n=i.data==="F!";break e}}ua(n)}n=!1}n&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ed,lastRenderedState:t},a.queue=n,a=vd.bind(null,Q,n),n.dispatch=a,n=Lo(!1),l=$o.bind(null,Q,!1,n.queue),n=Fe(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Bg.bind(null,Q,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function ad(e){var t=Me();return nd(t,de,e)}function nd(e,t,a){if(t=ko(e,t,ed)[0],e=zl(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=fi(t)}catch(o){throw o===vn?gl:o}else n=t;t=Me();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(Q.flags|=2048,Tn(9,{destroy:void 0},Ug.bind(null,i,a),null)),[n,l,e]}function Ug(e,t){e.action=t}function id(e){var t=Me(),a=de;if(a!==null)return nd(t,a,e);Me(),t=t.memoizedState,a=Me();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Tn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Q.updateQueue,t===null&&(t=Sl(),Q.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function ld(){return Me().memoizedState}function Tl(e,t,a,n){var i=Fe();Q.flags|=e,i.memoizedState=Tn(1|t,{destroy:void 0},a,n===void 0?null:n)}function El(e,t,a,n){var i=Me();n=n===void 0?null:n;var l=i.memoizedState.inst;de!==null&&n!==null&&zo(n,de.memoizedState.deps)?i.memoizedState=Tn(t,l,a,n):(Q.flags|=e,i.memoizedState=Tn(1|t,l,a,n))}function sd(e,t){Tl(8390656,8,e,t)}function Bo(e,t){El(2048,8,e,t)}function Rg(e){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=Sl(),Q.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function od(e){var t=Me().memoizedState;return Rg({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function rd(e,t){return El(4,2,e,t)}function cd(e,t){return El(4,4,e,t)}function ud(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,a){a=a!=null?a.concat([e]):null,El(4,4,ud.bind(null,t,e),a)}function Uo(){}function fd(e,t){var a=Me();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&zo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function pd(e,t){var a=Me();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&zo(t,n[1]))return n[0];if(n=e(),Za){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n}function Ro(e,t,a){return a===void 0||(Zt&1073741824)!==0&&(I&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=hf(),Q.lanes|=e,ba|=e,a)}function gd(e,t,a,n){return ut(a,t)?a:Sn.current!==null?(e=Ro(e,a,n),ut(e,t)||(De=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(I&261930)===0?(De=!0,e.memoizedState=a):(e=hf(),Q.lanes|=e,ba|=e,t)}function hd(e,t,a,n,i){var l=B.p;B.p=l!==0&&8>l?l:8;var o=E.T,c={};E.T=c,$o(e,!1,t,a);try{var f=i(),b=E.S;if(b!==null&&b(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var j=Dg(f,n);pi(e,t,j,mt(e))}else pi(e,t,n,mt(e))}catch(M){pi(e,t,{then:function(){},status:"rejected",reason:M},mt())}finally{B.p=l,o!==null&&c.types!==null&&(o.types=c.types),E.T=o}}function Ng(){}function No(e,t,a,n){if(e.tag!==5)throw Error(d(476));var i=md(e).queue;hd(e,i,t,Y,a===null?Ng:function(){return xd(e),a(n)})}function md(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:Y},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xd(e){var t=md(e);t.next===null&&(t=e.alternate.memoizedState),pi(e,t.next.queue,{},mt())}function Ho(){return Ye(ki)}function yd(){return Me().memoizedState}function bd(){return Me().memoizedState}function Hg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=mt();e=pa(a);var n=ga(t,e,a);n!==null&&(st(n,t,a),ri(n,t,a)),t={cache:po()},e.payload=t;return}t=t.return}}function $g(e,t,a){var n=mt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?wd(t,a):(a=to(e,t,a,n),a!==null&&(st(a,e,n),Sd(a,t,n)))}function vd(e,t,a){var n=mt();pi(e,t,a,n)}function pi(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))wd(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,c=l(o,a);if(i.hasEagerState=!0,i.eagerState=c,ut(c,o))return ol(e,t,i,0),ge===null&&sl(),!1}catch{}if(a=to(e,t,i,n),a!==null)return st(a,e,n),Sd(a,t,n),!0}return!1}function $o(e,t,a,n){if(n={lane:2,revertLane:xr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(t)throw Error(d(479))}else t=to(e,a,n,2),t!==null&&st(t,e,2)}function Ml(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function wd(e,t){jn=vl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Sd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Mc(e,a)}}var gi={readContext:Ye,use:jl,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};gi.useEffectEvent=ze;var jd={readContext:Ye,use:jl,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:sd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,ud.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Tl(4194308,4,e,t)},useInsertionEffect:function(e,t){Tl(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var n=e();if(Za){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Fe();if(a!==void 0){var i=a(t);if(Za){la(!0);try{a(t)}finally{la(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=$g.bind(null,Q,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=Lo(e);var t=e.queue,a=vd.bind(null,Q,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Uo,useDeferredValue:function(e,t){var a=Fe();return Ro(a,e,t)},useTransition:function(){var e=Lo(!1);return e=hd.bind(null,Q,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Q,i=Fe();if(ee){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),ge===null)throw Error(d(349));(I&127)!==0||Qu(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,sd(Vu.bind(null,n,l,e),[e]),n.flags|=2048,Tn(9,{destroy:void 0},Xu.bind(null,n,l,a,t),null),a},useId:function(){var e=Fe(),t=ge.identifierPrefix;if(ee){var a=Nt,n=Rt;a=(n&~(1<<32-ct(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Lg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ho,useFormState:td,useActionState:td,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=$o.bind(null,Q,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ao,useCacheRefresh:function(){return Fe().memoizedState=Hg.bind(null,Q)},useEffectEvent:function(e){var t=Fe(),a={impl:e};return t.memoizedState=a,function(){if((le&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},qo={readContext:Ye,use:jl,useCallback:fd,useContext:Ye,useEffect:Bo,useImperativeHandle:dd,useInsertionEffect:rd,useLayoutEffect:cd,useMemo:pd,useReducer:zl,useRef:ld,useState:function(){return zl(Kt)},useDebugValue:Uo,useDeferredValue:function(e,t){var a=Me();return gd(a,de.memoizedState,e,t)},useTransition:function(){var e=zl(Kt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:fi(e),t]},useSyncExternalStore:Gu,useId:yd,useHostTransitionStatus:Ho,useFormState:ad,useActionState:ad,useOptimistic:function(e,t){var a=Me();return Ju(a,de,e,t)},useMemoCache:Ao,useCacheRefresh:bd};qo.useEffectEvent=od;var zd={readContext:Ye,use:jl,useCallback:fd,useContext:Ye,useEffect:Bo,useImperativeHandle:dd,useInsertionEffect:rd,useLayoutEffect:cd,useMemo:pd,useReducer:Do,useRef:ld,useState:function(){return Do(Kt)},useDebugValue:Uo,useDeferredValue:function(e,t){var a=Me();return de===null?Ro(a,e,t):gd(a,de.memoizedState,e,t)},useTransition:function(){var e=Do(Kt)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:fi(e),t]},useSyncExternalStore:Gu,useId:yd,useHostTransitionStatus:Ho,useFormState:id,useActionState:id,useOptimistic:function(e,t){var a=Me();return de!==null?Ju(a,de,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ao,useCacheRefresh:bd};zd.useEffectEvent=od;function _o(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:D({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=mt(),i=pa(n);i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,n),t!==null&&(st(t,e,n),ri(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=mt(),i=pa(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,n),t!==null&&(st(t,e,n),ri(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=mt(),n=pa(a);n.tag=2,t!=null&&(n.callback=t),t=ga(e,n,a),t!==null&&(st(t,e,a),ri(t,e,a))}};function Td(e,t,a,n,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):t.prototype&&t.prototype.isPureReactComponent?!ei(a,n)||!ei(i,l):!0}function Ed(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=D({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Md(e){ll(e)}function Cd(e){console.error(e)}function Ad(e){ll(e)}function Cl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function kd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Go(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,t)},a}function Dd(e){return e=pa(e),e.tag=3,e}function Ld(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){kd(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){kd(t,a,n),typeof i!="function"&&(va===null?va=new Set([this]):va.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function qg(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&xn(t,a,i,!0),a=ft.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?ql():a.alternate===null&&Te===0&&(Te=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===hl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),gr(e,n,i)),!1;case 22:return a.flags|=65536,n===hl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),gr(e,n,i)),!1}throw Error(d(435,a.tag))}return gr(e,n,i),ql(),!1}if(ee)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==oo&&(e=Error(d(422),{cause:n}),ni(wt(e,a)))):(n!==oo&&(t=Error(d(423),{cause:n}),ni(wt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=wt(n,a),i=Go(e.stateNode,n,i),bo(e,i),Te!==4&&(Te=2)),!1;var l=Error(d(520),{cause:n});if(l=wt(l,a),Si===null?Si=[l]:Si.push(l),Te!==4&&(Te=2),t===null)return!0;n=wt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Go(a.stateNode,n,e),bo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(va===null||!va.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Dd(i),Ld(i,e,a,n),bo(a,i),!1}a=a.return}while(a!==null);return!1}var Qo=Error(d(461)),De=!1;function Ge(e,t,a,n){t.child=e===null?Ru(t,null,a,n):Va(t,e.child,a,n)}function Od(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var o={};for(var c in n)c!=="ref"&&(o[c]=n[c])}else o=n;return Ya(t),n=To(e,t,a,o,l,i),c=Eo(),e!==null&&!De?(Mo(e,t,i),Jt(e,t,i)):(ee&&c&&lo(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Bd(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!ao(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Ud(e,t,l,n,i)):(e=cl(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Io(e,i)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:ei,a(o,n)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=Gt(l,n),e.ref=t.ref,e.return=t,t.child=e}function Ud(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(ei(l,n)&&e.ref===t.ref)if(De=!1,t.pendingProps=n=l,Io(e,i))(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return Xo(e,t,a,n,i)}function Rd(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Nd(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(t,l!==null?l.cachePool:null),l!==null?$u(t,l):wo(),qu(t);else return n=t.lanes=536870912,Nd(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(pl(t,l.cachePool),$u(t,l),ma(),t.memoizedState=null):(e!==null&&pl(t,null),wo(),ma());return Ge(e,t,i,a),t.child}function hi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nd(e,t,a,n,i){var l=ho();return l=l===null?null:{parent:Ae._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&pl(t,null),wo(),qu(t),e!==null&&xn(e,t,n,!0),t.childLanes=i,null}function Al(e,t){return t=Dl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hd(e,t,a){return Va(t,e.child,null,a),e=Al(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function _g(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(n.mode==="hidden")return e=Al(t,n),t.lanes=536870912,hi(null,e);if(jo(t),(e=be)?(e=Wf(e,zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Rt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=wu(e),a.return=t,t.child=a,_e=t,be=null)):e=null,e===null)throw ua(t);return t.lanes=536870912,null}return Al(t,n)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(jo(t),i)if(t.flags&256)t.flags&=-257,t=Hd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(De||xn(e,t,a,!1),i=(a&e.childLanes)!==0,De||i){if(n=ge,n!==null&&(o=Cc(n,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Ha(e,o),st(n,e,o),Qo;ql(),t=Hd(e,t,a)}else e=l.treeContext,be=Et(o.nextSibling),_e=t,ee=!0,ca=null,zt=!1,e!==null&&zu(t,e),t=Al(t,n),t.flags|=4096;return t}return e=Gt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function kl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Xo(e,t,a,n,i){return Ya(t),a=To(e,t,a,n,void 0,i),n=Eo(),e!==null&&!De?(Mo(e,t,i),Jt(e,t,i)):(ee&&n&&lo(t),t.flags|=1,Ge(e,t,a,i),t.child)}function $d(e,t,a,n,i,l){return Ya(t),t.updateQueue=null,a=Yu(t,n,a,i),_u(e),n=Eo(),e!==null&&!De?(Mo(e,t,l),Jt(e,t,l)):(ee&&n&&lo(t),t.flags|=1,Ge(e,t,a,l),t.child)}function qd(e,t,a,n,i){if(Ya(t),t.stateNode===null){var l=pn,o=a.contextType;typeof o=="object"&&o!==null&&(l=Ye(o)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Yo,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},xo(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?Ye(o):pn,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(_o(t,a,o,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Yo.enqueueReplaceState(l,l.state,null),ui(t,n,l,i),ci(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var c=t.memoizedProps,f=Ka(a,c);l.props=f;var b=l.context,j=a.contextType;o=pn,typeof j=="object"&&j!==null&&(o=Ye(j));var M=a.getDerivedStateFromProps;j=typeof M=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,j||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||b!==o)&&Ed(t,l,n,o),fa=!1;var v=t.memoizedState;l.state=v,ui(t,n,l,i),ci(),b=t.memoizedState,c||v!==b||fa?(typeof M=="function"&&(_o(t,a,M,n),b=t.memoizedState),(f=fa||Td(t,a,f,n,v,b,o))?(j||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=b),l.props=n,l.state=b,l.context=o,n=f):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,yo(e,t),o=t.memoizedProps,j=Ka(a,o),l.props=j,M=t.pendingProps,v=l.context,b=a.contextType,f=pn,typeof b=="object"&&b!==null&&(f=Ye(b)),c=a.getDerivedStateFromProps,(b=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==M||v!==f)&&Ed(t,l,n,f),fa=!1,v=t.memoizedState,l.state=v,ui(t,n,l,i),ci();var S=t.memoizedState;o!==M||v!==S||fa||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof c=="function"&&(_o(t,a,c,n),S=t.memoizedState),(j=fa||Td(t,a,j,n,v,S,f)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(b||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,S,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,S,f)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=S),l.props=n,l.state=S,l.context=f,n=j):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,kl(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,a,i)):Ge(e,t,a,i),t.memoizedState=l.state,e=t.child):e=Jt(e,t,i),e}function _d(e,t,a,n){return qa(),t.flags|=256,Ge(e,t,a,n),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zo(e){return{baseLanes:e,cachePool:ku()}}function Ko(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ht),e}function Yd(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(Ee.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(i?ha(t):ma(),(e=be)?(e=Wf(e,zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ra!==null?{id:Rt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=wu(e),a.return=t,t.child=a,_e=t,be=null)):e=null,e===null)throw ua(t);return kr(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,i?(ma(),i=t.mode,c=Dl({mode:"hidden",children:c},i),n=$a(n,i,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=Zo(a),n.childLanes=Ko(e,o,a),t.memoizedState=Vo,hi(null,n)):(ha(t),Jo(t,c))}var f=e.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(l)t.flags&256?(ha(t),t.flags&=-257,t=Fo(e,t,a)):t.memoizedState!==null?(ma(),t.child=e.child,t.flags|=128,t=null):(ma(),c=n.fallback,i=t.mode,n=Dl({mode:"visible",children:n.children},i),c=$a(c,i,a,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,Va(t,e.child,null,a),n=t.child,n.memoizedState=Zo(a),n.childLanes=Ko(e,o,a),t.memoizedState=Vo,t=hi(null,n));else if(ha(t),kr(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var b=o.dgst;o=b,n=Error(d(419)),n.stack="",n.digest=o,ni({value:n,source:null,stack:null}),t=Fo(e,t,a)}else if(De||xn(e,t,a,!1),o=(a&e.childLanes)!==0,De||o){if(o=ge,o!==null&&(n=Cc(o,a),n!==0&&n!==f.retryLane))throw f.retryLane=n,Ha(e,n),st(o,e,n),Qo;Ar(c)||ql(),t=Fo(e,t,a)}else Ar(c)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,be=Et(c.nextSibling),_e=t,ee=!0,ca=null,zt=!1,e!==null&&zu(t,e),t=Jo(t,n.children),t.flags|=4096);return t}return i?(ma(),c=n.fallback,i=t.mode,f=e.child,b=f.sibling,n=Gt(f,{mode:"hidden",children:n.children}),n.subtreeFlags=f.subtreeFlags&65011712,b!==null?c=Gt(b,c):(c=$a(c,i,a,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,hi(null,n),n=t.child,c=e.child.memoizedState,c===null?c=Zo(a):(i=c.cachePool,i!==null?(f=Ae._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=ku(),c={baseLanes:c.baseLanes|a,cachePool:i}),n.memoizedState=c,n.childLanes=Ko(e,o,a),t.memoizedState=Vo,hi(e.child,n)):(ha(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Jo(e,t){return t=Dl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dl(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Fo(e,t,a){return Va(t,e.child,null,a),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),uo(e.return,t,a)}function Wo(e,t,a,n,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=l)}function Qd(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var o=Ee.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,oe(Ee,o),Ge(e,t,n,a),n=ee?ai:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gd(e,a,t);else if(e.tag===19)Gd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Wo(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Wo(t,!0,a,null,l,n);break;case"together":Wo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Io(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function Yg(e,t,a){switch(t.tag){case 3:Yi(t,t.stateNode.containerInfo),da(t,Ae,e.memoizedState.cache),qa();break;case 27:case 5:ws(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:da(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,jo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Yd(e,t,a):(ha(t),e=Jt(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(xn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Qd(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(Ee,Ee.current),n)break;return null;case 22:return t.lanes=0,Rd(e,t,a,t.pendingProps);case 24:da(t,Ae,e.memoizedState.cache)}return Jt(e,t,a)}function Xd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)De=!0;else{if(!Io(e,a)&&(t.flags&128)===0)return De=!1,Yg(e,t,a);De=(e.flags&131072)!==0}else De=!1,ee&&(t.flags&1048576)!==0&&ju(t,ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Qa(t.elementType),t.type=e,typeof e=="function")ao(e)?(n=Ka(e,n),t.tag=1,t=qd(null,t,e,n,a)):(t.tag=0,t=Xo(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===Pe){t.tag=11,t=Od(null,t,e,n,a);break e}else if(i===Be){t.tag=14,t=Bd(null,t,e,n,a);break e}}throw t=Ct(e)||e,Error(d(306,t,""))}}return t;case 0:return Xo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ka(n,t.pendingProps),qd(e,t,n,i,a);case 3:e:{if(Yi(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,yo(e,t),ui(t,n,null,a);var o=t.memoizedState;if(n=o.cache,da(t,Ae,n),n!==l.cache&&fo(t,[Ae],a,!0),ci(),n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=_d(e,t,n,a);break e}else if(n!==i){i=wt(Error(d(424)),t),ni(i),t=_d(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,be=Et(e.firstChild),_e=t,ee=!0,ca=null,zt=!0,a=Ru(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),n===i){t=Jt(e,t,a);break e}Ge(e,t,n,a)}t=t.child}return t;case 26:return kl(e,t),e===null?(a=np(t.type,null,t.pendingProps,null))?t.memoizedState=a:ee||(a=t.type,e=t.pendingProps,n=Zl(ia.current).createElement(a),n[qe]=t,n[et]=e,Qe(n,a,e),Ne(n),t.stateNode=n):t.memoizedState=np(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ws(t),e===null&&ee&&(n=t.stateNode=ep(t.type,t.pendingProps,ia.current),_e=t,zt=!0,i=be,za(t.type)?(Dr=i,be=Et(n.firstChild)):be=i),Ge(e,t,t.pendingProps.children,a),kl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((i=n=be)&&(n=yh(n,t.type,t.pendingProps,zt),n!==null?(t.stateNode=n,_e=t,be=Et(n.firstChild),zt=!1,i=!0):i=!1),i||ua(t)),ws(t),i=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,n=l.children,Er(i,l)?n=null:o!==null&&Er(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=To(e,t,Og,null,null,a),ki._currentValue=i),kl(e,t),Ge(e,t,n,a),t.child;case 6:return e===null&&ee&&((e=a=be)&&(a=bh(a,t.pendingProps,zt),a!==null?(t.stateNode=a,_e=t,be=null,e=!0):e=!1),e||ua(t)),null;case 13:return Yd(e,t,a);case 4:return Yi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Va(t,null,n,a):Ge(e,t,n,a),t.child;case 11:return Od(e,t,t.type,t.pendingProps,a);case 7:return Ge(e,t,t.pendingProps,a),t.child;case 8:return Ge(e,t,t.pendingProps.children,a),t.child;case 12:return Ge(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,da(t,t.type,n.value),Ge(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ya(t),i=Ye(i),n=n(i),t.flags|=1,Ge(e,t,n,a),t.child;case 14:return Bd(e,t,t.type,t.pendingProps,a);case 15:return Ud(e,t,t.type,t.pendingProps,a);case 19:return Qd(e,t,a);case 31:return _g(e,t,a);case 22:return Rd(e,t,a,t.pendingProps);case 24:return Ya(t),n=Ye(Ae),e===null?(i=ho(),i===null&&(i=ge,l=po(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},xo(t),da(t,Ae,i)):((e.lanes&a)!==0&&(yo(e,t),ui(t,null,null,a),ci()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),da(t,Ae,n)):(n=l.cache,da(t,Ae,n),n!==i.cache&&fo(t,[Ae],a,!0))),Ge(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Ft(e){e.flags|=4}function Po(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(bf())e.flags|=8192;else throw Xa=hl,mo}else e.flags&=-16777217}function Vd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rp(t))if(bf())e.flags|=8192;else throw Xa=hl,mo}function Ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tc():536870912,e.lanes|=t,An|=t)}function mi(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Gg(e,t,a){var n=t.pendingProps;switch(so(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vt(Ae),Ia(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(mn(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ro())),ve(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Ft(t),l!==null?(ve(t),Vd(t,l)):(ve(t),Po(t,i,null,n,a))):l?l!==e.memoizedState?(Ft(t),ve(t),Vd(t,l)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ft(t),ve(t),Po(t,i,e,n,a)),null;case 27:if(Gi(t),a=ia.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return ve(t),null}e=Re.current,mn(t)?Tu(t):(e=ep(i,n,a),t.stateNode=e,Ft(t))}return ve(t),null;case 5:if(Gi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return ve(t),null}if(l=Re.current,mn(t))Tu(t);else{var o=Zl(ia.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}l[qe]=t,l[et]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(Qe(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ft(t)}}return ve(t),Po(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=ia.current,mn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=_e,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Gf(e.nodeValue,a)),e||ua(t,!0)}else e=Zl(e).createTextNode(n),e[qe]=t,t.stateNode=e}return ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=mn(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else a=ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return ve(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=mn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else i=ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ll(t,t.updateQueue),ve(t),null);case 4:return Ia(),e===null&&wr(t.stateNode.containerInfo),ve(t),null;case 10:return Vt(t.type),ve(t),null;case 19:if(Se(Ee),n=t.memoizedState,n===null)return ve(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)mi(n,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=bl(e),l!==null){for(t.flags|=128,mi(n,!1),e=l.updateQueue,t.updateQueue=e,Ll(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)vu(a,e),a=a.sibling;return oe(Ee,Ee.current&1|2),ee&&Qt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ot()>Nl&&(t.flags|=128,i=!0,mi(n,!1),t.lanes=4194304)}else{if(!i)if(e=bl(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ll(t,e),mi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!ee)return ve(t),null}else 2*ot()-n.renderingStartTime>Nl&&a!==536870912&&(t.flags|=128,i=!0,mi(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ot(),e.sibling=null,a=Ee.current,oe(Ee,i?a&1|2:a&1),ee&&Qt(t,n.treeForkCount),e):(ve(t),null);case 22:case 23:return pt(t),So(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),a=t.updateQueue,a!==null&&Ll(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&Se(Ga),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Vt(Ae),ve(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Qg(e,t){switch(so(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vt(Ae),Ia(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gi(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(d(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ee),null;case 4:return Ia(),null;case 10:return Vt(t.type),null;case 22:case 23:return pt(t),So(),e!==null&&Se(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vt(Ae),null;case 25:return null;default:return null}}function Zd(e,t){switch(so(t),t.tag){case 3:Vt(Ae),Ia();break;case 26:case 27:case 5:Gi(t);break;case 4:Ia();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:Se(Ee);break;case 10:Vt(t.type);break;case 22:case 23:pt(t),So(),e!==null&&Se(Ga);break;case 24:Vt(Ae)}}function xi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,o=a.inst;n=l(),o.destroy=n}a=a.next}while(a!==i)}}catch(c){ce(t,t.return,c)}}function xa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var o=n.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,i=t;var f=a,b=c;try{b()}catch(j){ce(i,f,j)}}}n=n.next}while(n!==l)}}catch(j){ce(t,t.return,j)}}function Kd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hu(t,a)}catch(n){ce(e,e.return,n)}}}function Jd(e,t,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ce(e,t,n)}}function yi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ce(e,t,i)}}function Ht(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ce(e,t,i)}else a.current=null}function Fd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ce(e,e.return,i)}}function er(e,t,a){try{var n=e.stateNode;fh(n,e.type,a,t),n[et]=t}catch(i){ce(e,e.return,i)}}function Wd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function tr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ar(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=_t));else if(n!==4&&(n===27&&za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ar(e,t,a),e=e.sibling;e!==null;)ar(e,t,a),e=e.sibling}function Ol(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,t,a),e=e.sibling;e!==null;)Ol(e,t,a),e=e.sibling}function Id(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Qe(t,n,a),t[qe]=e,t[et]=a}catch(l){ce(e,e.return,l)}}var Wt=!1,Le=!1,nr=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,He=null;function Xg(e,t){if(e=e.containerInfo,zr=es,e=du(e),Js(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,c=-1,f=-1,b=0,j=0,M=e,v=null;t:for(;;){for(var S;M!==a||i!==0&&M.nodeType!==3||(c=o+i),M!==l||n!==0&&M.nodeType!==3||(f=o+n),M.nodeType===3&&(o+=M.nodeValue.length),(S=M.firstChild)!==null;)v=M,M=S;for(;;){if(M===e)break t;if(v===a&&++b===i&&(c=o),v===l&&++j===n&&(f=o),(S=M.nextSibling)!==null)break;M=v,v=M.parentNode}M=S}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tr={focusedElem:e,selectionRange:a},es=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var U=Ka(a.type,i);e=n.getSnapshotBeforeUpdate(U,l),n.__reactInternalSnapshotBeforeUpdate=e}catch($){ce(a,a.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function ef(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),n&4&&xi(5,a);break;case 1:if(Pt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ce(a,a.return,o)}else{var i=Ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ce(a,a.return,o)}}n&64&&Kd(a),n&512&&yi(a,a.return);break;case 3:if(Pt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hu(e,t)}catch(o){ce(a,a.return,o)}}break;case 27:t===null&&n&4&&Id(a);case 26:case 5:Pt(e,a),t===null&&n&4&&Fd(a),n&512&&yi(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),n&4&&nf(e,a);break;case 13:Pt(e,a),n&4&&lf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eh.bind(null,a),vh(e,a))));break;case 22:if(n=a.memoizedState!==null||Wt,!n){t=t!==null&&t.memoizedState!==null||Le,i=Wt;var l=Le;Wt=n,(Le=t)&&!l?ea(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),Wt=i,Le=l}break;case 30:break;default:Pt(e,a)}}function tf(e){var t=e.alternate;t!==null&&(e.alternate=null,tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ls(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,at=!1;function It(e,t,a){for(a=a.child;a!==null;)af(e,t,a),a=a.sibling}function af(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Yn,a)}catch{}switch(a.tag){case 26:Le||Ht(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Ht(a,t);var n=we,i=at;za(a.type)&&(we=a.stateNode,at=!1),It(e,t,a),Mi(a.stateNode),we=n,at=i;break;case 5:Le||Ht(a,t);case 6:if(n=we,i=at,we=null,It(e,t,a),we=n,at=i,we!==null)if(at)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(a.stateNode)}catch(l){ce(a,t,l)}else try{we.removeChild(a.stateNode)}catch(l){ce(a,t,l)}break;case 18:we!==null&&(at?(e=we,Jf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Nn(e)):Jf(we,a.stateNode));break;case 4:n=we,i=at,we=a.stateNode.containerInfo,at=!0,It(e,t,a),we=n,at=i;break;case 0:case 11:case 14:case 15:xa(2,a,t),Le||xa(4,a,t),It(e,t,a);break;case 1:Le||(Ht(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Jd(a,t,n)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:Le=(n=Le)||a.memoizedState!==null,It(e,t,a),Le=n;break;default:It(e,t,a)}}function nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Nn(e)}catch(a){ce(t,t.return,a)}}}function lf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nn(e)}catch(a){ce(t,t.return,a)}}function Vg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pd),t;default:throw Error(d(435,e.tag))}}function Bl(e,t){var a=Vg(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=th.bind(null,e,n);n.then(i,i)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(za(c.type)){we=c.stateNode,at=!1;break e}break;case 5:we=c.stateNode,at=!1;break e;case 3:case 4:we=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(we===null)throw Error(d(160));af(l,o,i),we=null,at=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sf(t,e),t=t.sibling}var Dt=null;function sf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),it(e),n&4&&(xa(3,e,e.return),xi(3,e),xa(5,e,e.return));break;case 1:nt(t,e),it(e),n&512&&(Le||a===null||Ht(a,a.return)),n&64&&Wt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Dt;if(nt(t,e),it(e),n&512&&(Le||a===null||Ht(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Xn]||l[qe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),Qe(l,n,a),l[qe]=e,Ne(l),n=l;break e;case"link":var o=sp("link","href",i).get(n+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(l=o[c],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}l=i.createElement(n),Qe(l,n,a),i.head.appendChild(l);break;case"meta":if(o=sp("meta","content",i).get(n+(a.content||""))){for(c=0;c<o.length;c++)if(l=o[c],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}l=i.createElement(n),Qe(l,n,a),i.head.appendChild(l);break;default:throw Error(d(468,n))}l[qe]=e,Ne(l),n=l}e.stateNode=n}else op(i,e.type,e.stateNode);else e.stateNode=lp(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?op(i,e.type,e.stateNode):lp(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&er(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),it(e),n&512&&(Le||a===null||Ht(a,a.return)),a!==null&&n&4&&er(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),it(e),n&512&&(Le||a===null||Ht(a,a.return)),e.flags&32){i=e.stateNode;try{sn(i,"")}catch(U){ce(e,e.return,U)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,er(e,i,a!==null?a.memoizedProps:i)),n&1024&&(nr=!0);break;case 6:if(nt(t,e),it(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(U){ce(e,e.return,U)}}break;case 3:if(Fl=null,i=Dt,Dt=Kl(t.containerInfo),nt(t,e),Dt=i,it(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Nn(t.containerInfo)}catch(U){ce(e,e.return,U)}nr&&(nr=!1,of(e));break;case 4:n=Dt,Dt=Kl(e.stateNode.containerInfo),nt(t,e),it(e),Dt=n;break;case 12:nt(t,e),it(e);break;case 31:nt(t,e),it(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Bl(e,n)));break;case 13:nt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=ot()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Bl(e,n)));break;case 22:i=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,b=Wt,j=Le;if(Wt=b||i,Le=j||f,nt(t,e),Le=j,Wt=b,it(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||f||Wt||Le||Ja(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(l=f.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=f.stateNode;var M=f.memoizedProps.style,v=M!=null&&M.hasOwnProperty("display")?M.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(U){ce(f,f.return,U)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(U){ce(f,f.return,U)}}}else if(t.tag===18){if(a===null){f=t;try{var S=f.stateNode;i?Ff(S,!0):Ff(f.stateNode,!1)}catch(U){ce(f,f.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Bl(e,a))));break;case 19:nt(t,e),it(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Bl(e,n)));break;case 30:break;case 21:break;default:nt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Wd(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,l=tr(e);Ol(e,l,i);break;case 5:var o=a.stateNode;a.flags&32&&(sn(o,""),a.flags&=-33);var c=tr(e);Ol(e,c,o);break;case 3:case 4:var f=a.stateNode.containerInfo,b=tr(e);ar(e,b,f);break;default:throw Error(d(161))}}catch(j){ce(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ef(e,t.alternate,t),t=t.sibling}function Ja(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Ja(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Jd(t,t.return,a),Ja(t);break;case 27:Mi(t.stateNode);case 26:case 5:Ht(t,t.return),Ja(t);break;case 22:t.memoizedState===null&&Ja(t);break;case 30:Ja(t);break;default:Ja(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:ea(i,l,a),xi(4,l);break;case 1:if(ea(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(b){ce(n,n.return,b)}if(n=l,i=n.updateQueue,i!==null){var c=n.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)Nu(f[i],c)}catch(b){ce(n,n.return,b)}}a&&o&64&&Kd(l),yi(l,l.return);break;case 27:Id(l);case 26:case 5:ea(i,l,a),a&&n===null&&o&4&&Fd(l),yi(l,l.return);break;case 12:ea(i,l,a);break;case 31:ea(i,l,a),a&&o&4&&nf(i,l);break;case 13:ea(i,l,a),a&&o&4&&lf(i,l);break;case 22:l.memoizedState===null&&ea(i,l,a),yi(l,l.return);break;case 30:break;default:ea(i,l,a)}t=t.sibling}}function ir(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ii(a))}function lr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ii(e))}function Lt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rf(e,t,a,n),t=t.sibling}function rf(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,n),i&2048&&xi(9,t);break;case 1:Lt(e,t,a,n);break;case 3:Lt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ii(e)));break;case 12:if(i&2048){Lt(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,c=l.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){ce(t,t.return,f)}}else Lt(e,t,a,n);break;case 31:Lt(e,t,a,n);break;case 13:Lt(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?Lt(e,t,a,n):bi(e,t):l._visibility&2?Lt(e,t,a,n):(l._visibility|=2,En(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ir(o,t);break;case 24:Lt(e,t,a,n),i&2048&&lr(t.alternate,t);break;default:Lt(e,t,a,n)}}function En(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,c=a,f=n,b=o.flags;switch(o.tag){case 0:case 11:case 15:En(l,o,c,f,i),xi(8,o);break;case 23:break;case 22:var j=o.stateNode;o.memoizedState!==null?j._visibility&2?En(l,o,c,f,i):bi(l,o):(j._visibility|=2,En(l,o,c,f,i)),i&&b&2048&&ir(o.alternate,o);break;case 24:En(l,o,c,f,i),i&&b&2048&&lr(o.alternate,o);break;default:En(l,o,c,f,i)}t=t.sibling}}function bi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:bi(a,n),i&2048&&ir(n.alternate,n);break;case 24:bi(a,n),i&2048&&lr(n.alternate,n);break;default:bi(a,n)}t=t.sibling}}var vi=8192;function Mn(e,t,a){if(e.subtreeFlags&vi)for(e=e.child;e!==null;)cf(e,t,a),e=e.sibling}function cf(e,t,a){switch(e.tag){case 26:Mn(e,t,a),e.flags&vi&&e.memoizedState!==null&&Lh(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:Mn(e,t,a);break;case 3:case 4:var n=Dt;Dt=Kl(e.stateNode.containerInfo),Mn(e,t,a),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=vi,vi=16777216,Mn(e,t,a),vi=n):Mn(e,t,a));break;default:Mn(e,t,a)}}function uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];He=n,ff(n,e)}uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)df(e),e=e.sibling}function df(e){switch(e.tag){case 0:case 11:case 15:wi(e),e.flags&2048&&xa(9,e,e.return);break;case 3:wi(e);break;case 12:wi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ul(e)):wi(e);break;default:wi(e)}}function Ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];He=n,ff(n,e)}uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Ul(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ul(t));break;default:Ul(t)}e=e.sibling}}function ff(e,t){for(;He!==null;){var a=He;switch(a.tag){case 0:case 11:case 15:xa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ii(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,He=n;else e:for(a=e;He!==null;){n=He;var i=n.sibling,l=n.return;if(tf(n),n===a){He=null;break e}if(i!==null){i.return=l,He=i;break e}He=l}}}var Zg={getCacheForType:function(e){var t=Ye(Ae),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ye(Ae).controller.signal}},Kg=typeof WeakMap=="function"?WeakMap:Map,le=0,ge=null,F=null,I=0,re=0,gt=null,ya=!1,Cn=!1,sr=!1,ta=0,Te=0,ba=0,Fa=0,or=0,ht=0,An=0,Si=null,lt=null,rr=!1,Rl=0,pf=0,Nl=1/0,Hl=null,va=null,Oe=0,wa=null,kn=null,aa=0,cr=0,ur=null,gf=null,ji=0,dr=null;function mt(){return(le&2)!==0&&I!==0?I&-I:E.T!==null?xr():Ac()}function hf(){if(ht===0)if((I&536870912)===0||ee){var e=Vi;Vi<<=1,(Vi&3932160)===0&&(Vi=262144),ht=e}else ht=536870912;return e=ft.current,e!==null&&(e.flags|=32),ht}function st(e,t,a){(e===ge&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(Dn(e,0),Sa(e,I,ht,!1)),Qn(e,a),((le&2)===0||e!==ge)&&(e===ge&&((le&2)===0&&(Fa|=a),Te===4&&Sa(e,I,ht,!1)),$t(e))}function mf(e,t,a){if((le&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Gn(e,t),i=n?Wg(e,t):pr(e,t,!0),l=n;do{if(i===0){Cn&&!n&&Sa(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!Jg(a)){i=pr(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;i=Si;var f=c.current.memoizedState.isDehydrated;if(f&&(Dn(c,o).flags|=256),o=pr(c,o,!1),o!==2){if(sr&&!f){c.errorRecoveryDisabledLanes|=l,Fa|=l,i=4;break e}l=lt,lt=i,l!==null&&(lt===null?lt=l:lt.push.apply(lt,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){Dn(e,0),Sa(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Sa(n,t,ht,!ya);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(i=Rl+300-ot(),10<i)){if(Sa(n,t,ht,!ya),Ki(n,0,!0)!==0)break e;aa=t,n.timeoutHandle=Zf(xf.bind(null,n,a,lt,Hl,rr,t,ht,Fa,An,ya,l,"Throttled",-0,0),i);break e}xf(n,a,lt,Hl,rr,t,ht,Fa,An,ya,l,null,-0,0)}}break}while(!0);$t(e)}function xf(e,t,a,n,i,l,o,c,f,b,j,M,v,S){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_t},cf(t,l,M);var U=(l&62914560)===l?Rl-ot():(l&4194048)===l?pf-ot():0;if(U=Oh(M,U),U!==null){aa=l,e.cancelPendingCommit=U(Tf.bind(null,e,t,l,a,n,i,o,c,f,j,M,null,v,S)),Sa(e,l,o,!b);return}}Tf(e,t,l,a,n,i,o,c,f)}function Jg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!ut(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sa(e,t,a,n){t&=~or,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-ct(i),o=1<<l;n[l]=-1,i&=~o}a!==0&&Ec(e,a,t)}function $l(){return(le&6)===0?(zi(0),!1):!0}function fr(){if(F!==null){if(re===0)var e=F.return;else e=F,Xt=_a=null,Co(e),wn=null,si=0,e=F;for(;e!==null;)Zd(e.alternate,e),e=e.return;F=null}}function Dn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,fr(),ge=e,F=a=Gt(e.current,null),I=t,re=0,gt=null,ya=!1,Cn=Gn(e,t),sr=!1,An=ht=or=Fa=ba=Te=0,lt=Si=null,rr=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ct(n),l=1<<i;t|=e[i],n&=~l}return ta=t,sl(),a}function yf(e,t){Q=null,E.H=gi,t===vn||t===gl?(t=Ou(),re=3):t===mo?(t=Ou(),re=4):re=t===Qo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,F===null&&(Te=1,Cl(e,wt(t,e.current)))}function bf(){var e=ft.current;return e===null?!0:(I&4194048)===I?Tt===null:(I&62914560)===I||(I&536870912)!==0?e===Tt:!1}function vf(){var e=E.H;return E.H=gi,e===null?gi:e}function wf(){var e=E.A;return E.A=Zg,e}function ql(){Te=4,ya||(I&4194048)!==I&&ft.current!==null||(Cn=!0),(ba&134217727)===0&&(Fa&134217727)===0||ge===null||Sa(ge,I,ht,!1)}function pr(e,t,a){var n=le;le|=2;var i=vf(),l=wf();(ge!==e||I!==t)&&(Hl=null,Dn(e,t)),t=!1;var o=Te;e:do try{if(re!==0&&F!==null){var c=F,f=gt;switch(re){case 8:fr(),o=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var b=re;if(re=0,gt=null,Ln(e,c,f,b),a&&Cn){o=0;break e}break;default:b=re,re=0,gt=null,Ln(e,c,f,b)}}Fg(),o=Te;break}catch(j){yf(e,j)}while(!0);return t&&e.shellSuspendCounter++,Xt=_a=null,le=n,E.H=i,E.A=l,F===null&&(ge=null,I=0,sl()),o}function Fg(){for(;F!==null;)Sf(F)}function Wg(e,t){var a=le;le|=2;var n=vf(),i=wf();ge!==e||I!==t?(Hl=null,Nl=ot()+500,Dn(e,t)):Cn=Gn(e,t);e:do try{if(re!==0&&F!==null){t=F;var l=gt;t:switch(re){case 1:re=0,gt=null,Ln(e,t,l,1);break;case 2:case 9:if(Du(l)){re=0,gt=null,jf(t);break}t=function(){re!==2&&re!==9||ge!==e||(re=7),$t(e)},l.then(t,t);break e;case 3:re=7;break e;case 4:re=5;break e;case 7:Du(l)?(re=0,gt=null,jf(t)):(re=0,gt=null,Ln(e,t,l,7));break;case 5:var o=null;switch(F.tag){case 26:o=F.memoizedState;case 5:case 27:var c=F;if(o?rp(o):c.stateNode.complete){re=0,gt=null;var f=c.sibling;if(f!==null)F=f;else{var b=c.return;b!==null?(F=b,_l(b)):F=null}break t}}re=0,gt=null,Ln(e,t,l,5);break;case 6:re=0,gt=null,Ln(e,t,l,6);break;case 8:fr(),Te=6;break e;default:throw Error(d(462))}}Ig();break}catch(j){yf(e,j)}while(!0);return Xt=_a=null,E.H=n,E.A=i,le=a,F!==null?0:(ge=null,I=0,sl(),Te)}function Ig(){for(;F!==null&&!w0();)Sf(F)}function Sf(e){var t=Xd(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?_l(e):F=t}function jf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=$d(a,t,t.pendingProps,t.type,void 0,I);break;case 11:t=$d(a,t,t.pendingProps,t.type.render,t.ref,I);break;case 5:Co(t);default:Zd(a,t),t=F=vu(t,ta),t=Xd(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?_l(e):F=t}function Ln(e,t,a,n){Xt=_a=null,Co(t),wn=null,si=0;var i=t.return;try{if(qg(e,i,t,a,I)){Te=1,Cl(e,wt(a,e.current)),F=null;return}}catch(l){if(i!==null)throw F=i,l;Te=1,Cl(e,wt(a,e.current)),F=null;return}t.flags&32768?(ee||n===1?e=!0:Cn||(I&536870912)!==0?e=!1:(ya=e=!0,(n===2||n===9||n===3||n===6)&&(n=ft.current,n!==null&&n.tag===13&&(n.flags|=16384))),zf(t,e)):_l(t)}function _l(e){var t=e;do{if((t.flags&32768)!==0){zf(t,ya);return}e=t.return;var a=Gg(t.alternate,t,ta);if(a!==null){F=a;return}if(t=t.sibling,t!==null){F=t;return}F=t=e}while(t!==null);Te===0&&(Te=5)}function zf(e,t){do{var a=Qg(e.alternate,e);if(a!==null){a.flags&=32767,F=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){F=e;return}F=e=a}while(e!==null);Te=6,F=null}function Tf(e,t,a,n,i,l,o,c,f){e.cancelPendingCommit=null;do Yl();while(Oe!==0);if((le&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(l=t.lanes|t.childLanes,l|=eo,D0(e,a,l,o,c,f),e===ge&&(F=ge=null,I=0),kn=t,wa=e,aa=a,cr=l,ur=i,gf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ah(Qi,function(){return kf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=E.T,E.T=null,i=B.p,B.p=2,o=le,le|=4;try{Xg(e,t,a)}finally{le=o,B.p=i,E.T=n}}Oe=1,Ef(),Mf(),Cf()}}function Ef(){if(Oe===1){Oe=0;var e=wa,t=kn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var n=B.p;B.p=2;var i=le;le|=4;try{sf(t,e);var l=Tr,o=du(e.containerInfo),c=l.focusedElem,f=l.selectionRange;if(o!==c&&c&&c.ownerDocument&&uu(c.ownerDocument.documentElement,c)){if(f!==null&&Js(c)){var b=f.start,j=f.end;if(j===void 0&&(j=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(j,c.value.length);else{var M=c.ownerDocument||document,v=M&&M.defaultView||window;if(v.getSelection){var S=v.getSelection(),U=c.textContent.length,$=Math.min(f.start,U),pe=f.end===void 0?$:Math.min(f.end,U);!S.extend&&$>pe&&(o=pe,pe=$,$=o);var m=cu(c,$),g=cu(c,pe);if(m&&g&&(S.rangeCount!==1||S.anchorNode!==m.node||S.anchorOffset!==m.offset||S.focusNode!==g.node||S.focusOffset!==g.offset)){var y=M.createRange();y.setStart(m.node,m.offset),S.removeAllRanges(),$>pe?(S.addRange(y),S.extend(g.node,g.offset)):(y.setEnd(g.node,g.offset),S.addRange(y))}}}}for(M=[],S=c;S=S.parentNode;)S.nodeType===1&&M.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var z=M[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}es=!!zr,Tr=zr=null}finally{le=i,B.p=n,E.T=a}}e.current=t,Oe=2}}function Mf(){if(Oe===2){Oe=0;var e=wa,t=kn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var n=B.p;B.p=2;var i=le;le|=4;try{ef(e,t.alternate,t)}finally{le=i,B.p=n,E.T=a}}Oe=3}}function Cf(){if(Oe===4||Oe===3){Oe=0,S0();var e=wa,t=kn,a=aa,n=gf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Oe=5:(Oe=0,kn=wa=null,Af(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(va=null),ks(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=E.T,i=B.p,B.p=2,E.T=null;try{for(var l=e.onRecoverableError,o=0;o<n.length;o++){var c=n[o];l(c.value,{componentStack:c.stack})}}finally{E.T=t,B.p=i}}(aa&3)!==0&&Yl(),$t(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===dr?ji++:(ji=0,dr=e):ji=0,zi(0)}}function Af(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ii(t)))}function Yl(){return Ef(),Mf(),Cf(),kf()}function kf(){if(Oe!==5)return!1;var e=wa,t=cr;cr=0;var a=ks(aa),n=E.T,i=B.p;try{B.p=32>a?32:a,E.T=null,a=ur,ur=null;var l=wa,o=aa;if(Oe=0,kn=wa=null,aa=0,(le&6)!==0)throw Error(d(331));var c=le;if(le|=4,df(l.current),rf(l,l.current,o,a),le=c,zi(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Yn,l)}catch{}return!0}finally{B.p=i,E.T=n,Af(e,t)}}function Df(e,t,a){t=wt(a,t),t=Go(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(Qn(e,2),$t(e))}function ce(e,t,a){if(e.tag===3)Df(e,e,a);else for(;t!==null;){if(t.tag===3){Df(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(va===null||!va.has(n))){e=wt(a,e),a=Dd(2),n=ga(t,a,2),n!==null&&(Ld(a,n,t,e),Qn(n,2),$t(n));break}}t=t.return}}function gr(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Kg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(sr=!0,i.add(a),e=Pg.bind(null,e,t,a),t.then(e,e))}function Pg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ge===e&&(I&a)===a&&(Te===4||Te===3&&(I&62914560)===I&&300>ot()-Rl?(le&2)===0&&Dn(e,0):or|=a,An===I&&(An=0)),$t(e)}function Lf(e,t){t===0&&(t=Tc()),e=Ha(e,t),e!==null&&(Qn(e,t),$t(e))}function eh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Lf(e,a)}function th(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),Lf(e,a)}function ah(e,t){return Es(e,t)}var Gl=null,On=null,hr=!1,Ql=!1,mr=!1,ja=0;function $t(e){e!==On&&e.next===null&&(On===null?Gl=On=e:On=On.next=e),Ql=!0,hr||(hr=!0,ih())}function zi(e,t){if(!mr&&Ql){mr=!0;do for(var a=!1,n=Gl;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var o=n.suspendedLanes,c=n.pingedLanes;l=(1<<31-ct(42|e)+1)-1,l&=i&~(o&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Rf(n,l))}else l=I,l=Ki(n,n===ge?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||Gn(n,l)||(a=!0,Rf(n,l));n=n.next}while(a);mr=!1}}function nh(){Of()}function Of(){Ql=hr=!1;var e=0;ja!==0&&gh()&&(e=ja);for(var t=ot(),a=null,n=Gl;n!==null;){var i=n.next,l=Bf(n,t);l===0?(n.next=null,a===null?Gl=i:a.next=i,i===null&&(On=a)):(a=n,(e!==0||(l&3)!==0)&&(Ql=!0)),n=i}Oe!==0&&Oe!==5||zi(e),ja!==0&&(ja=0)}function Bf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-ct(l),c=1<<o,f=i[o];f===-1?((c&a)===0||(c&n)!==0)&&(i[o]=k0(c,t)):f<=t&&(e.expiredLanes|=c),l&=~c}if(t=ge,a=I,a=Ki(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(re===2||re===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ms(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ms(n),ks(a)){case 2:case 8:a=jc;break;case 32:a=Qi;break;case 268435456:a=zc;break;default:a=Qi}return n=Uf.bind(null,e),a=Es(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ms(n),e.callbackPriority=2,e.callbackNode=null,2}function Uf(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yl()&&e.callbackNode!==a)return null;var n=I;return n=Ki(e,e===ge?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(mf(e,n,t),Bf(e,ot()),e.callbackNode!=null&&e.callbackNode===a?Uf.bind(null,e):null)}function Rf(e,t){if(Yl())return null;mf(e,t,!0)}function ih(){mh(function(){(le&6)!==0?Es(Sc,nh):Of()})}function xr(){if(ja===0){var e=yn;e===0&&(e=Xi,Xi<<=1,(Xi&261888)===0&&(Xi=256)),ja=e}return ja}function Nf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(""+e)}function Hf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function lh(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=Nf((i[et]||null).action),o=n.submitter;o&&(t=(t=o[et]||null)?Nf(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var c=new al("action","action",null,n,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ja!==0){var f=o?Hf(i,o):new FormData(i);No(a,{pending:!0,data:f,method:i.method,action:l},null,f)}}else typeof l=="function"&&(c.preventDefault(),f=o?Hf(i,o):new FormData(i),No(a,{pending:!0,data:f,method:i.method,action:l},l,f))},currentTarget:i}]})}}for(var yr=0;yr<Ps.length;yr++){var br=Ps[yr],sh=br.toLowerCase(),oh=br[0].toUpperCase()+br.slice(1);kt(sh,"on"+oh)}kt(gu,"onAnimationEnd"),kt(hu,"onAnimationIteration"),kt(mu,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(jg,"onTransitionRun"),kt(zg,"onTransitionStart"),kt(Tg,"onTransitionCancel"),kt(xu,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ti));function $f(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var o=n.length-1;0<=o;o--){var c=n[o],f=c.instance,b=c.currentTarget;if(c=c.listener,f!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=b;try{l(i)}catch(j){ll(j)}i.currentTarget=null,l=f}else for(o=0;o<n.length;o++){if(c=n[o],f=c.instance,b=c.currentTarget,c=c.listener,f!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=b;try{l(i)}catch(j){ll(j)}i.currentTarget=null,l=f}}}}function W(e,t){var a=t[Ds];a===void 0&&(a=t[Ds]=new Set);var n=e+"__bubble";a.has(n)||(qf(t,e,2,!1),a.add(n))}function vr(e,t,a){var n=0;t&&(n|=4),qf(a,e,n,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[Xl]){e[Xl]=!0,Lc.forEach(function(a){a!=="selectionchange"&&(rh.has(a)||vr(a,!1,e),vr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,vr("selectionchange",!1,t))}}function qf(e,t,a,n){switch(hp(t)){case 2:var i=Rh;break;case 8:i=Nh;break;default:i=Rr}a=i.bind(null,t,a,e),i=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Sr(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var c=n.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=n.return;o!==null;){var f=o.tag;if((f===3||f===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=en(c),o===null)return;if(f=o.tag,f===5||f===6||f===26||f===27){n=l=o;continue e}c=c.parentNode}}n=n.return}Qc(function(){var b=l,j=Hs(a),M=[];e:{var v=yu.get(e);if(v!==void 0){var S=al,U=e;switch(e){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":S=tg;break;case"focusin":U="focus",S=Qs;break;case"focusout":U="blur",S=Qs;break;case"beforeblur":case"afterblur":S=Qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=ig;break;case gu:case hu:case mu:S=V0;break;case xu:S=sg;break;case"scroll":case"scrollend":S=_0;break;case"wheel":S=rg;break;case"copy":case"cut":case"paste":S=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Jc;break;case"toggle":case"beforetoggle":S=ug}var $=(t&4)!==0,pe=!$&&(e==="scroll"||e==="scrollend"),m=$?v!==null?v+"Capture":null:v;$=[];for(var g=b,y;g!==null;){var z=g;if(y=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||y===null||m===null||(z=Zn(g,m),z!=null&&$.push(Ei(g,z,y))),pe)break;g=g.return}0<$.length&&(v=new S(v,U,null,a,j),M.push({event:v,listeners:$}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&a!==Ns&&(U=a.relatedTarget||a.fromElement)&&(en(U)||U[Pa]))break e;if((S||v)&&(v=j.window===j?j:(v=j.ownerDocument)?v.defaultView||v.parentWindow:window,S?(U=a.relatedTarget||a.toElement,S=b,U=U?en(U):null,U!==null&&(pe=w(U),$=U.tag,U!==pe||$!==5&&$!==27&&$!==6)&&(U=null)):(S=null,U=b),S!==U)){if($=Zc,z="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&($=Jc,z="onPointerLeave",m="onPointerEnter",g="pointer"),pe=S==null?v:Vn(S),y=U==null?v:Vn(U),v=new $(z,g+"leave",S,a,j),v.target=pe,v.relatedTarget=y,z=null,en(j)===b&&($=new $(m,g+"enter",U,a,j),$.target=y,$.relatedTarget=pe,z=$),pe=z,S&&U)t:{for($=ch,m=S,g=U,y=0,z=m;z;z=$(z))y++;z=0;for(var H=g;H;H=$(H))z++;for(;0<y-z;)m=$(m),y--;for(;0<z-y;)g=$(g),z--;for(;y--;){if(m===g||g!==null&&m===g.alternate){$=m;break t}m=$(m),g=$(g)}$=null}else $=null;S!==null&&_f(M,v,S,$,!1),U!==null&&pe!==null&&_f(M,pe,U,$,!0)}}e:{if(v=b?Vn(b):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var ae=nu;else if(tu(v))if(iu)ae=vg;else{ae=yg;var R=xg}else S=v.nodeName,!S||S.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?b&&Rs(b.elementType)&&(ae=nu):ae=bg;if(ae&&(ae=ae(e,b))){au(M,ae,a,j);break e}R&&R(e,v,b),e==="focusout"&&b&&v.type==="number"&&b.memoizedProps.value!=null&&Us(v,"number",v.value)}switch(R=b?Vn(b):window,e){case"focusin":(tu(R)||R.contentEditable==="true")&&(un=R,Fs=b,ti=null);break;case"focusout":ti=Fs=un=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,fu(M,a,j);break;case"selectionchange":if(Sg)break;case"keydown":case"keyup":fu(M,a,j)}var X;if(Vs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else cn?Pc(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(Fc&&a.locale!=="ko"&&(cn||P!=="onCompositionStart"?P==="onCompositionEnd"&&cn&&(X=Xc()):(oa=j,_s="value"in oa?oa.value:oa.textContent,cn=!0)),R=Vl(b,P),0<R.length&&(P=new Kc(P,e,null,a,j),M.push({event:P,listeners:R}),X?P.data=X:(X=eu(a),X!==null&&(P.data=X)))),(X=fg?pg(e,a):gg(e,a))&&(P=Vl(b,"onBeforeInput"),0<P.length&&(R=new Kc("onBeforeInput","beforeinput",null,a,j),M.push({event:R,listeners:P}),R.data=X)),lh(M,e,b,a,j)}$f(M,t)})}function Ei(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vl(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Zn(e,a),i!=null&&n.unshift(Ei(e,i,l)),i=Zn(e,t),i!=null&&n.push(Ei(e,i,l))),e.tag===3)return n;e=e.return}return[]}function ch(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _f(e,t,a,n,i){for(var l=t._reactName,o=[];a!==null&&a!==n;){var c=a,f=c.alternate,b=c.stateNode;if(c=c.tag,f!==null&&f===n)break;c!==5&&c!==26&&c!==27||b===null||(f=b,i?(b=Zn(a,l),b!=null&&o.unshift(Ei(a,b,f))):i||(b=Zn(a,l),b!=null&&o.push(Ei(a,b,f)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var uh=/\r\n?/g,dh=/\u0000|\uFFFD/g;function Yf(e){return(typeof e=="string"?e:""+e).replace(uh,`
`).replace(dh,"")}function Gf(e,t){return t=Yf(t),Yf(e)===t}function fe(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||sn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&sn(e,""+n);break;case"className":Fi(e,"class",n);break;case"tabIndex":Fi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(e,a,n);break;case"style":Yc(e,n,l);break;case"data":if(t!=="object"){Fi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ii(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&fe(e,t,"name",i.name,i,null),fe(e,t,"formEncType",i.formEncType,i,null),fe(e,t,"formMethod",i.formMethod,i,null),fe(e,t,"formTarget",i.formTarget,i,null)):(fe(e,t,"encType",i.encType,i,null),fe(e,t,"method",i.method,i,null),fe(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ii(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=_t);break;case"onScroll":n!=null&&W("scroll",e);break;case"onScrollEnd":n!=null&&W("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ii(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":W("beforetoggle",e),W("toggle",e),Ji(e,"popover",n);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ji(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$0.get(a)||a,Ji(e,a,n))}}function jr(e,t,a,n,i,l){switch(a){case"style":Yc(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?sn(e,n):(typeof n=="number"||typeof n=="bigint")&&sn(e,""+n);break;case"onScroll":n!=null&&W("scroll",e);break;case"onScrollEnd":n!=null&&W("scrollend",e);break;case"onClick":n!=null&&(e.onclick=_t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[et]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ji(e,a,n)}}}function Qe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",e),W("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:fe(e,t,l,o,a,null)}}i&&fe(e,t,"srcSet",a.srcSet,a,null),n&&fe(e,t,"src",a.src,a,null);return;case"input":W("invalid",e);var c=l=o=i=null,f=null,b=null;for(n in a)if(a.hasOwnProperty(n)){var j=a[n];if(j!=null)switch(n){case"name":i=j;break;case"type":o=j;break;case"checked":f=j;break;case"defaultChecked":b=j;break;case"value":l=j;break;case"defaultValue":c=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(d(137,t));break;default:fe(e,t,n,j,a,null)}}Hc(e,l,c,f,b,o,i,!1);return;case"select":W("invalid",e),n=o=l=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":o=c;break;case"multiple":n=c;default:fe(e,t,i,c,a,null)}t=l,a=o,e.multiple=!!n,t!=null?ln(e,!!n,t,!1):a!=null&&ln(e,!!n,a,!0);return;case"textarea":W("invalid",e),l=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":n=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:fe(e,t,o,c,a,null)}qc(e,n,i,l);return;case"option":for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!=null)&&(f==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":fe(e,t,f,n,a,null));return;case"dialog":W("beforetoggle",e),W("toggle",e),W("cancel",e),W("close",e);break;case"iframe":case"object":W("load",e);break;case"video":case"audio":for(n=0;n<Ti.length;n++)W(Ti[n],e);break;case"image":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"embed":case"source":case"link":W("error",e),W("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in a)if(a.hasOwnProperty(b)&&(n=a[b],n!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:fe(e,t,b,n,a,null)}return;default:if(Rs(t)){for(j in a)a.hasOwnProperty(j)&&(n=a[j],n!==void 0&&jr(e,t,j,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&fe(e,t,c,n,a,null))}function fh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,c=null,f=null,b=null,j=null;for(S in a){var M=a[S];if(a.hasOwnProperty(S)&&M!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":f=M;default:n.hasOwnProperty(S)||fe(e,t,S,null,n,M)}}for(var v in n){var S=n[v];if(M=a[v],n.hasOwnProperty(v)&&(S!=null||M!=null))switch(v){case"type":l=S;break;case"name":i=S;break;case"checked":b=S;break;case"defaultChecked":j=S;break;case"value":o=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(d(137,t));break;default:S!==M&&fe(e,t,v,S,n,M)}}Bs(e,o,c,f,b,j,l,i);return;case"select":S=o=c=v=null;for(l in a)if(f=a[l],a.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":S=f;default:n.hasOwnProperty(l)||fe(e,t,l,null,n,f)}for(i in n)if(l=n[i],f=a[i],n.hasOwnProperty(i)&&(l!=null||f!=null))switch(i){case"value":v=l;break;case"defaultValue":c=l;break;case"multiple":o=l;default:l!==f&&fe(e,t,i,l,n,f)}t=c,a=o,n=S,v!=null?ln(e,!!a,v,!1):!!n!=!!a&&(t!=null?ln(e,!!a,t,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":S=v=null;for(c in a)if(i=a[c],a.hasOwnProperty(c)&&i!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:fe(e,t,c,null,n,i)}for(o in n)if(i=n[o],l=a[o],n.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":v=i;break;case"defaultValue":S=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==l&&fe(e,t,o,i,n,l)}$c(e,v,S);return;case"option":for(var U in a)v=a[U],a.hasOwnProperty(U)&&v!=null&&!n.hasOwnProperty(U)&&(U==="selected"?e.selected=!1:fe(e,t,U,null,n,v));for(f in n)v=n[f],S=a[f],n.hasOwnProperty(f)&&v!==S&&(v!=null||S!=null)&&(f==="selected"?e.selected=v&&typeof v!="function"&&typeof v!="symbol":fe(e,t,f,v,n,S));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in a)v=a[$],a.hasOwnProperty($)&&v!=null&&!n.hasOwnProperty($)&&fe(e,t,$,null,n,v);for(b in n)if(v=n[b],S=a[b],n.hasOwnProperty(b)&&v!==S&&(v!=null||S!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,t));break;default:fe(e,t,b,v,n,S)}return;default:if(Rs(t)){for(var pe in a)v=a[pe],a.hasOwnProperty(pe)&&v!==void 0&&!n.hasOwnProperty(pe)&&jr(e,t,pe,void 0,n,v);for(j in n)v=n[j],S=a[j],!n.hasOwnProperty(j)||v===S||v===void 0&&S===void 0||jr(e,t,j,v,n,S);return}}for(var m in a)v=a[m],a.hasOwnProperty(m)&&v!=null&&!n.hasOwnProperty(m)&&fe(e,t,m,null,n,v);for(M in n)v=n[M],S=a[M],!n.hasOwnProperty(M)||v===S||v==null&&S==null||fe(e,t,M,v,n,S)}function Qf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ph(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,o=i.initiatorType,c=i.duration;if(l&&c&&Qf(o)){for(o=0,c=i.responseEnd,n+=1;n<a.length;n++){var f=a[n],b=f.startTime;if(b>c)break;var j=f.transferSize,M=f.initiatorType;j&&Qf(M)&&(f=f.responseEnd,o+=j*(f<c?1:(c-b)/(f-b)))}if(--n,t+=8*(l+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zr=null,Tr=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function Xf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Er(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mr=null;function gh(){var e=window.event;return e&&e.type==="popstate"?e===Mr?!1:(Mr=e,!0):(Mr=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,hh=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,mh=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(e){return Kf.resolve(null).then(e).catch(xh)}:Zf;function xh(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Jf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Nn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mi(a);for(var l=a.firstChild;l;){var o=l.nextSibling,c=l.nodeName;l[Xn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&Mi(e.ownerDocument.body);a=i}while(a);Nn(t)}function Ff(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Cr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cr(a),Ls(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function yh(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Xn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function bh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function Wf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Et(e.nextSibling),e===null))return null;return e}function Ar(e){return e.data==="$?"||e.data==="$~"}function kr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dr=null;function If(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Et(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Pf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ep(e,t,a){switch(t=Zl(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ls(e)}var Mt=new Map,tp=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=B.d;B.d={f:wh,r:Sh,D:jh,C:zh,L:Th,m:Eh,X:Ch,S:Mh,M:Ah};function wh(){var e=na.f(),t=$l();return e||t}function Sh(e){var t=tn(e);t!==null&&t.tag===5&&t.type==="form"?xd(t):na.r(e)}var Bn=typeof document>"u"?null:document;function ap(e,t,a){var n=Bn;if(n&&typeof t=="string"&&t){var i=bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),tp.has(i)||(tp.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Qe(t,"link",e),Ne(t),n.head.appendChild(t)))}}function jh(e){na.D(e),ap("dns-prefetch",e,null)}function zh(e,t){na.C(e,t),ap("preconnect",e,t)}function Th(e,t,a){na.L(e,t,a);var n=Bn;if(n&&e&&t){var i='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+bt(a.imageSizes)+'"]')):i+='[href="'+bt(e)+'"]';var l=i;switch(t){case"style":l=Un(e);break;case"script":l=Rn(e)}Mt.has(l)||(e=D({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Ci(l))||t==="script"&&n.querySelector(Ai(l))||(t=n.createElement("link"),Qe(t,"link",e),Ne(t),n.head.appendChild(t)))}}function Eh(e,t){na.m(e,t);var a=Bn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+bt(n)+'"][href="'+bt(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Rn(e)}if(!Mt.has(l)&&(e=D({rel:"modulepreload",href:e},t),Mt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ai(l)))return}n=a.createElement("link"),Qe(n,"link",e),Ne(n),a.head.appendChild(n)}}}function Mh(e,t,a){na.S(e,t,a);var n=Bn;if(n&&e){var i=an(n).hoistableStyles,l=Un(e);t=t||"default";var o=i.get(l);if(!o){var c={loading:0,preload:null};if(o=n.querySelector(Ci(l)))c.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(l))&&Lr(e,a);var f=o=n.createElement("link");Ne(f),Qe(f,"link",e),f._p=new Promise(function(b,j){f.onload=b,f.onerror=j}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Jl(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:c},i.set(l,o)}}}function Ch(e,t){na.X(e,t);var a=Bn;if(a&&e){var n=an(a).hoistableScripts,i=Rn(e),l=n.get(i);l||(l=a.querySelector(Ai(i)),l||(e=D({src:e,async:!0},t),(t=Mt.get(i))&&Or(e,t),l=a.createElement("script"),Ne(l),Qe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Ah(e,t){na.M(e,t);var a=Bn;if(a&&e){var n=an(a).hoistableScripts,i=Rn(e),l=n.get(i);l||(l=a.querySelector(Ai(i)),l||(e=D({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&Or(e,t),l=a.createElement("script"),Ne(l),Qe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function np(e,t,a,n){var i=(i=ia.current)?Kl(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Un(a.href),a=an(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Un(a.href);var l=an(i).hoistableStyles,o=l.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=i.querySelector(Ci(e)))&&!l._p&&(o.instance=l,o.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),l||kh(i,e,a,o.state))),t&&n===null)throw Error(d(528,""));return o}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rn(a),a=an(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Un(e){return'href="'+bt(e)+'"'}function Ci(e){return'link[rel="stylesheet"]['+e+"]"}function ip(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function kh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Qe(t,"link",a),Ne(t),e.head.appendChild(t))}function Rn(e){return'[src="'+bt(e)+'"]'}function Ai(e){return"script[async]"+e}function lp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+bt(a.href)+'"]');if(n)return t.instance=n,Ne(n),n;var i=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ne(n),Qe(n,"style",i),Jl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Un(a.href);var l=e.querySelector(Ci(i));if(l)return t.state.loading|=4,t.instance=l,Ne(l),l;n=ip(a),(i=Mt.get(i))&&Lr(n,i),l=(e.ownerDocument||e).createElement("link"),Ne(l);var o=l;return o._p=new Promise(function(c,f){o.onload=c,o.onerror=f}),Qe(l,"link",n),t.state.loading|=4,Jl(l,a.precedence,e),t.instance=l;case"script":return l=Rn(a.src),(i=e.querySelector(Ai(l)))?(t.instance=i,Ne(i),i):(n=a,(i=Mt.get(l))&&(n=D({},a),Or(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ne(i),Qe(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Jl(n,a.precedence,e));return t.instance}function Jl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,o=0;o<n.length;o++){var c=n[o];if(c.dataset.precedence===t)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Lr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fl=null;function sp(e,t,a){if(Fl===null){var n=new Map,i=Fl=new Map;i.set(a,n)}else i=Fl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[Xn]||l[qe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var c=n.get(o);c?c.push(l):n.set(o,[l])}}return n}function op(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Dh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Lh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Un(n.href),l=t.querySelector(Ci(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Ne(l);return}l=t.ownerDocument||t,n=ip(n),(i=Mt.get(i))&&Lr(n,i),l=l.createElement("link"),Ne(l);var o=l;o._p=new Promise(function(c,f){o.onload=c,o.onerror=f}),Qe(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Br=0;function Oh(e,t){return e.stylesheets&&e.count===0&&Pl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Pl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Br===0&&(Br=62500*ph());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Pl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Br?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function Pl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,t.forEach(Bh,e),Il=null,Wl.call(e))}function Bh(e,t){if(!(t.state.loading&4)){var a=Il.get(e);if(a)var n=a.get(null);else{a=new Map,Il.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),l=a.get(o)||n,l===n&&a.set(null,i),a.set(o,i),this.count++,n=Wl.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ki={$$typeof:Ve,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Uh(e,t,a,n,i,l,o,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cs(0),this.hiddenUpdates=Cs(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function cp(e,t,a,n,i,l,o,c,f,b,j,M){return e=new Uh(e,t,a,o,f,b,j,M,c),t=1,l===!0&&(t|=24),l=dt(3,null,null,t),e.current=l,l.stateNode=e,t=po(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},xo(l),e}function up(e){return e?(e=pn,e):pn}function dp(e,t,a,n,i,l){i=up(i),n.context===null?n.context=i:n.pendingContext=i,n=pa(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=ga(e,n,t),a!==null&&(st(a,e,t),ri(a,e,t))}function fp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ur(e,t){fp(e,t),(e=e.alternate)&&fp(e,t)}function pp(e){if(e.tag===13||e.tag===31){var t=Ha(e,67108864);t!==null&&st(t,e,67108864),Ur(e,67108864)}}function gp(e){if(e.tag===13||e.tag===31){var t=mt();t=As(t);var a=Ha(e,t);a!==null&&st(a,e,t),Ur(e,t)}}var es=!0;function Rh(e,t,a,n){var i=E.T;E.T=null;var l=B.p;try{B.p=2,Rr(e,t,a,n)}finally{B.p=l,E.T=i}}function Nh(e,t,a,n){var i=E.T;E.T=null;var l=B.p;try{B.p=8,Rr(e,t,a,n)}finally{B.p=l,E.T=i}}function Rr(e,t,a,n){if(es){var i=Nr(n);if(i===null)Sr(e,t,n,ts,a),mp(e,n);else if($h(i,e,t,a,n))n.stopPropagation();else if(mp(e,n),t&4&&-1<Hh.indexOf(e)){for(;i!==null;){var l=tn(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Oa(l.pendingLanes);if(o!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var f=1<<31-ct(o);c.entanglements[1]|=f,o&=~f}$t(l),(le&6)===0&&(Nl=ot()+500,zi(0))}}break;case 31:case 13:c=Ha(l,2),c!==null&&st(c,l,2),$l(),Ur(l,2)}if(l=Nr(n),l===null&&Sr(e,t,n,ts,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Sr(e,t,n,null,a)}}function Nr(e){return e=Hs(e),Hr(e)}var ts=null;function Hr(e){if(ts=null,e=en(e),e!==null){var t=w(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=T(t),e!==null)return e;e=null}else if(a===31){if(e=L(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ts=e,null}function hp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j0()){case Sc:return 2;case jc:return 8;case Qi:case z0:return 32;case zc:return 268435456;default:return 32}default:return 32}}var $r=!1,Ta=null,Ea=null,Ma=null,Di=new Map,Li=new Map,Ca=[],Hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mp(e,t){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(t.pointerId)}}function Oi(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=tn(t),t!==null&&pp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $h(e,t,a,n,i){switch(t){case"focusin":return Ta=Oi(Ta,e,t,a,n,i),!0;case"dragenter":return Ea=Oi(Ea,e,t,a,n,i),!0;case"mouseover":return Ma=Oi(Ma,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return Di.set(l,Oi(Di.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Li.set(l,Oi(Li.get(l)||null,e,t,a,n,i)),!0}return!1}function xp(e){var t=en(e.target);if(t!==null){var a=w(t);if(a!==null){if(t=a.tag,t===13){if(t=T(a),t!==null){e.blockedOn=t,kc(e.priority,function(){gp(a)});return}}else if(t===31){if(t=L(a),t!==null){e.blockedOn=t,kc(e.priority,function(){gp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Nr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ns=n,a.target.dispatchEvent(n),Ns=null}else return t=tn(a),t!==null&&pp(t),e.blockedOn=a,!1;t.shift()}return!0}function yp(e,t,a){as(e)&&a.delete(t)}function qh(){$r=!1,Ta!==null&&as(Ta)&&(Ta=null),Ea!==null&&as(Ea)&&(Ea=null),Ma!==null&&as(Ma)&&(Ma=null),Di.forEach(yp),Li.forEach(yp)}function ns(e,t){e.blockedOn===t&&(e.blockedOn=null,$r||($r=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qh)))}var is=null;function bp(e){is!==e&&(is=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){is===e&&(is=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Hr(n||a)===null)continue;break}var l=tn(a);l!==null&&(e.splice(t,3),t-=3,No(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Nn(e){function t(f){return ns(f,e)}Ta!==null&&ns(Ta,e),Ea!==null&&ns(Ea,e),Ma!==null&&ns(Ma,e),Di.forEach(t),Li.forEach(t);for(var a=0;a<Ca.length;a++){var n=Ca[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)xp(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],o=i[et]||null;if(typeof l=="function")o||bp(a);else if(o){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[et]||null)c=o.formAction;else if(Hr(i)!==null)continue}else c=o.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),bp(a)}}}function vp(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function qr(e){this._internalRoot=e}ls.prototype.render=qr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=mt();dp(a,n,e,t,null,null)},ls.prototype.unmount=qr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dp(e.current,2,null,e,null,null),$l(),t[Pa]=null}};function ls(e){this._internalRoot=e}ls.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ac();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ca.length&&t!==0&&t<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&xp(e)}};var wp=p.version;if(wp!=="19.2.4")throw Error(d(527,wp,"19.2.4"));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=N(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var _h={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Yn=ss.inject(_h),rt=ss}catch{}}return Ri.createRoot=function(e,t){if(!x(e))throw Error(d(299));var a=!1,n="",i=Md,l=Cd,o=Ad;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cp(e,1,!1,null,null,a,n,null,i,l,o,vp),e[Pa]=t.current,wr(e),new qr(t)},Ri.hydrateRoot=function(e,t,a){if(!x(e))throw Error(d(299));var n=!1,i="",l=Md,o=Cd,c=Ad,f=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=cp(e,1,!0,t,a??null,n,i,f,l,o,c,vp),t.context=up(null),a=t.current,n=mt(),n=As(n),i=pa(n),i.callback=null,ga(a,i,n),a=n,t.current.lanes=a,Qn(t,a),$t(t),e[Pa]=t.current,wr(e),new ls(t)},Ri.version="19.2.4",Ri}var Mp;function am(){if(Mp)return Yr.exports;Mp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(p){console.error(p)}}return r(),Yr.exports=tm(),Yr.exports}var nm=am();const im={value:0},o0=l0({name:"app",initialState:im,reducers:{increment:r=>{r.value+=1},decrement:r=>{r.value-=1},setValue:(r,p)=>{r.value=p.payload}}}),{increment:Iv,decrement:Pv,setValue:e4}=o0.actions,lm=o0.reducer,sm={logoAlt:"Margg",links:[{label:"Home",href:"#home",primary:!0},{label:"Roadmaps",href:"/roadmaps"},{label:"Our Products",href:"#products"},{label:"Contact Us",href:"#contact-us"}]},om={titleLine1:"BRING OUT YOUR",titleLine2:"BEST POTENTIAL",description:"Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry",inputPlaceholder:"Enter Email",inputButtonText:"Join the waitlist",tiles:{autoCycleIntervalMs:3e3,defaultTileId:1,row1:[{id:1,ariaLabel:"Frontend Development",title:"Frontend Development",description:"Build modern UI with React, component systems, and responsive layouts.",icon:"ScrollIcon",slug:"frontend-development"},{id:2,ariaLabel:"Backend Engineering",title:"Backend Engineering",description:"Server-side logic, APIs, and database management.",icon:"DriverIcon",slug:"backend-engineering"},{id:3,ariaLabel:"UI/UX Engineering",title:"UI/UX Engineering",description:"Design trends, spacing systems, and accessible UI patterns.",icon:"PenToolIcon",slug:"ui-ux-engineering"}],row2:[{id:4,ariaLabel:"Data Engineering",title:"Data Engineering",description:"Data modeling, pipelines, SQL, and database optimization.",icon:"FavoriteChartIcon",slug:"data-engineering"},{id:5,ariaLabel:"Business Analytics",title:"Business Analytics",description:"Data-driven decisions, reporting, and business intelligence.",icon:"MessageProgrammingIcon",slug:"business-analytics"},{id:6,ariaLabel:"DevOps Engineering",title:"DevOps Engineering",description:"Deploy apps, understand environments, and ship confidently.",icon:"CloudConnectionIcon",slug:"devops-engineering"},{id:7,ariaLabel:"Cyber Security",title:"Cyber Security",description:"Learn safe patterns, auth basics, and secure-by-default systems.",icon:"LockIcon",slug:"cyber-security"}]}},rm={waitList:!0,stats:[{value:"43+",label:`University
Partners`},{value:"12K+",label:`Students
Enrolled`},{value:"35",label:`Outstanding
Mentors`},{value:"7.5K",label:`Student
Placements`}]},cm={titleLine1:"SUPERCHARGE",titleLine2:"YOUR LEARNING POTENTIAL WITH OUR APP",description:"Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away"},um={title:"JOIN WAITLIST",subtitle:"First step towards your dream career",inputPlaceholder:"Enter Email",buttonText:"Notify Me"},dm=["Frontend Development","Backend Engineering","UI/UX Engineering","Data Engineering","Business Analytics","DevOps Engineering","Cyber Security"],fm={submissionMode:"sheets",baseUrl:"https://api.margg.xyz/service-core",endpoints:{waitlist:"/general/user-contacts/waitlist",learner:"/general/user-contacts",instructor:"/general/instructor-enquiries",partner:"/general/organisation-enquiries"},googleSheets:{scriptUrl:"https://script.google.com/macros/s/AKfycbwmmOYKHVpfZEcqWhhAlNr6G7726uUj9WT4cua0i8sSMDQrQbWoBK2jj0Pc1FpRNfuB1g/exec"},emailjs:{notifyEmail:"margglive@gmail.com",accounts:{account1:{serviceId:"service_uwxllg6",publicKey:"sS9pUpAdxxLri3bjO"},account2:{serviceId:"service_oq3tfkg",publicKey:"r9cx6ICX3cdQFxZC9"}},templates:{waitlist:{templateId:"template_ob8hs05",account:"account1"},learner:{templateId:"template_n8yn8zn",account:"account1"},instructor:{templateId:"template_a5ox0x9",account:"account2"},partner:{templateId:"template_qxq0lla",account:"account2"}}}},pm={contactTitle:"GET IN TOUCH WITH US",location:"Bangalore | Tirupati",phone:"+91 7993559974",email:"info@margg.in",tagline:"Curated routes for curious minds",companyName:"Margg Private Limited",logoAlt:"Margg Logo",socialLinks:[{name:"YouTube",icon:"YoutubeIcon",url:"https://www.youtube.com/@MarggLive"},{name:"Instagram",icon:"InstagramIcon",url:"https://instagram.com/margglive"},{name:"X (Twitter)",icon:"TwitterIcon",url:"https://x.com/MarggLive"},{name:"Discord",icon:"DiscordIcon",url:"https://discord.gg/PDzhNUnB"}]},gm={roadmap:{title:"Roadmap Based Learning"},community:{title:"Community"},focusTimer:{title:"Focus Timer"},interviewPrep:{title:"Interview Prep Materials"},jobBoard:{title:"Job Board"},mentorship:{title:"One-on-One Mentorship"},projects:{title:"Projects"},resume:{title:"Resume Builder"},skills:{title:"Skills Assessment"},streaks:{title:"Streaks"},certifications:{title:"Certifications"}},hm={title:"Margg – Roadmap Based Courses & Best LMS Platform in South India | Gagan's Application",description:"Margg is the best LMS application in South India offering roadmap based courses, structured learning paths, one-on-one mentorship, interview prep, resume building, certifications & career placement support for college students. Built by Gagan — curated routes for curious minds.",keywords:"roadmap based courses, best LMS application in south india, Gagan's application, Margg, LMS for college students, learning management system India, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development, structured learning paths, best online courses India, South India LMS, Bangalore LMS, Tirupati education platform, curated learning roadmaps, coding bootcamp India, one-on-one mentorship India, resume builder for students, job placement LMS, streaks based learning, certification courses India, Margg Private Limited, MarggLive, best e-learning platform India",author:"Margg Private Limited",robots:"index, follow",locale:"en_IN",url:"https://margg.in",ogImage:"https://margg.in/og-cover.png",twitterHandle:"@MarggLive",themeColor:"#090215",foundingYear:"2023",appCategory:"EducationApplication"},mm={navbar:sm,hero:om,analytics:rm,supercharge:cm,joinWaitlist:um,courses:dm,api:fm,footer:pm,blocks:gm,seo:hm},r0=l0({name:"content",initialState:{data:mm,status:"idle",source:"fallback"},reducers:{contentLoading(r){r.status="loading"},contentSucceeded(r,p){r.data=p.payload.data,r.status="succeeded",r.source=p.payload.source},contentFailed(r){r.status="failed",r.source="fallback"}}}),{contentLoading:t4,contentSucceeded:a4,contentFailed:n4}=r0.actions,xm=r0.reducer,ym=r=>r.content.data,c0="/assets/Margg-CT4M_ONj.webp",Hn="1920px",Cp={mobile:"1000px",tablet:"1200px"},V={mobile:`@media (max-width: ${Cp.mobile})`,tablet:`@media (max-width: ${Cp.tablet})`},C={heading:'"Bebas Neue", sans-serif',body:'"Inter", sans-serif'};function Xe(r){const p=Qh(ym);return r?p[r]??{}:p}te`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;const bm=te`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`,vm=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  isolation: isolate;
  display: flex;
  justify-content: center;
  padding-top: 36px;
  transform: translateY(${r=>r.$hidden?"-100%":"0"});
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
`,wm=u.nav`
  display: flex;
  width: 85%;
  max-width: ${Hn};
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
`,Sm=u.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,jm=u.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;u.div`
  display: flex;
  align-items: flex-start;
`;const zm=u.img`
  width: 132.156px;
  height: 40.141px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
  }
`;u.img`
  width: 38.699px;
  height: 27.483px;
  flex-shrink: 0;
`;u.img`
  width: 79.181px;
  height: 5.559px;
  flex-shrink: 0;
`;const Tm=u.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`,Em=u.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`,Mm=u.a`
  color: white;
  font-family: ${C.body};
  font-size: 16px;
  font-weight: ${r=>r.$primary?"600":"300"};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${r=>r.$primary?"1":"0.5"};

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`,Cm=u.button`
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
`,Xr=u.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${r=>r.$open?"50%":"0"};
    transform: ${r=>r.$open?"translateY(-50%) rotate(45deg)":"none"};
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${r=>r.$open?0:1};
  }
  &:nth-child(3) {
    bottom: ${r=>r.$open?"auto":"0"};
    top: ${r=>r.$open?"50%":"auto"};
    transform: ${r=>r.$open?"translateY(-50%) rotate(-45deg)":"none"};
  }
`,Am=u.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 49;
    background: rgba(9, 2, 21, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${r=>r.$open?1:0};
    pointer-events: ${r=>r.$open?"auto":"none"};
    transition: opacity 0.3s ease;
  }
`,km=u.div`
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
    transform: translateX(${r=>r.$open?"0":"100%"});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`,Dm=u.button`
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
`,Lm=u.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Om=u.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${C.body};
  font-size: 18px;
  font-weight: ${r=>r.$primary?"600":"400"};
  color: #fff;
  opacity: ${r=>r.$primary?1:.7};
  transition: all 0.2s ease;
  background: ${r=>r.$primary?"rgba(80, 19, 192, 0.15)":"transparent"};

  ${r=>r.$show&&me`
      animation: ${bm} 0.4s ease forwards;
      animation-delay: ${r.$delay||"0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`,Bm=u.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`,Um=u.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`,Ap={Home:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Roadmaps:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Our Products":s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Contact Us":s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},ka=()=>{const{logoAlt:r,links:p}=Xe("navbar"),[h,d]=O.useState(!1),[x,w]=O.useState(!1),T=O.useRef(null),L=O.useRef(0),k=s0(),N=Kh();O.useEffect(()=>{const q=()=>{const Z=window.scrollY;Z<80?w(!1):Z-L.current>10?w(!0):L.current-Z>10&&w(!1),L.current=Z};return window.addEventListener("scroll",q,{passive:!0}),()=>window.removeEventListener("scroll",q)},[]),O.useEffect(()=>(h?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[h]),O.useEffect(()=>{const D=q=>{q.key==="Escape"&&d(!1)};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[]);const _=O.useCallback(D=>{const q=D.currentTarget.getAttribute("href");q?.startsWith("#")?(D.preventDefault(),d(!1),N.pathname!=="/"?(k("/"),setTimeout(()=>{const Z=document.getElementById(q.slice(1));if(Z){const he=Z.getBoundingClientRect().top+window.scrollY-72;window.scrollTo({top:he,behavior:"smooth"})}},300)):setTimeout(()=>{const Z=document.getElementById(q.slice(1));if(Z){const ue=document.querySelector("nav")?.offsetHeight||72,he=Z.getBoundingClientRect().top+window.scrollY-ue;window.scrollTo({top:he,behavior:"smooth"})}},100)):q?.startsWith("/")&&(D.preventDefault(),d(!1),k(q))},[k,N.pathname]);return s.jsxs(s.Fragment,{children:[s.jsx(vm,{$hidden:x&&!h,children:s.jsx(wm,{"aria-label":"Main navigation",children:s.jsxs(Sm,{children:[s.jsx(jm,{onClick:()=>k("/"),style:{cursor:"pointer"},children:s.jsx(zm,{src:c0,alt:r,loading:"eager",fetchPriority:"high"})}),s.jsx(Tm,{children:s.jsx(Em,{children:p.map(D=>s.jsx(Mm,{href:D.href,$primary:D.primary?!0:void 0,onClick:_,children:D.label},D.label))})}),s.jsxs(Cm,{onClick:()=>d(D=>!D),"aria-label":h?"Close menu":"Open menu","aria-expanded":h,children:[s.jsx(Xr,{$open:h}),s.jsx(Xr,{$open:h}),s.jsx(Xr,{$open:h})]})]})})}),s.jsx(Am,{$open:h,onClick:()=>d(!1)}),s.jsxs(km,{$open:h,ref:T,children:[s.jsx(Dm,{onClick:()=>d(!1),"aria-label":"Close menu",children:s.jsx("svg",{viewBox:"0 0 16 16",fill:"none",children:s.jsx("path",{d:"M12 4L4 12M4 4l8 8",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round"})})}),s.jsx(Lm,{children:p.map((D,q)=>s.jsxs(Om,{href:D.href,$primary:D.primary,$show:h,$delay:`${.1+q*.07}s`,onClick:_,children:[s.jsx(Bm,{children:Ap[D.label]||Ap.Home}),D.label]},D.label))}),s.jsx(Um,{})]})]})};function Rm({color:r="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{x:"10",y:"12",width:"44",height:"40",rx:"10",fill:r,opacity:"0.25"}),s.jsx("rect",{x:"18",y:"20",width:"28",height:"24",rx:"8",fill:r,opacity:"0.35"}),s.jsx("path",{d:"M26 36L32 30L38 36",stroke:r,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"})]})}function Nm({color:r="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z",fill:r,opacity:"0.25"}),s.jsx("path",{d:"M26 24L20 30L26 36",stroke:r,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),s.jsx("path",{d:"M38 24L44 30L38 36",stroke:r,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),s.jsx("path",{d:"M34 22L30 38",stroke:r,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})]})}function Hm({color:r="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M20 44L44 20",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M18 46L22 42L26 46L22 50L18 46Z",fill:r,opacity:"0.35"}),s.jsx("path",{d:"M38 18L46 26",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function $m({color:r="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{x:"16",y:"14",width:"32",height:"28",rx:"6",fill:r,opacity:"0.25"}),s.jsx("rect",{x:"20",y:"18",width:"24",height:"14",rx:"4",fill:r,opacity:"0.35"}),s.jsx("path",{d:"M26 48H38",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function qm({color:r="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z",fill:r,opacity:"0.25"}),s.jsx("path",{d:"M26 46H38",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M22 52H42",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function _m({color:r="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M16 44V34",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M28 44V26",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M40 44V30",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z",fill:r,opacity:"0.35"})]})}function Ym({color:r="currentColor"}){return s.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("rect",{x:"18",y:"30",width:"28",height:"22",rx:"10",fill:r,opacity:"0.25"}),s.jsx("path",{d:"M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),s.jsx("path",{d:"M32 38V44",stroke:r,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}const Gm=(r,p=null)=>{const h={1:[],2:[],3:[]};r.forEach(w=>{h[w.row].push(w)}),Object.keys(h).forEach(w=>{h[w].sort((T,L)=>T.col-L.col)});let d=!0;for(;d;){d=!1;for(let w=3;w>=2;w--){const T=h[w];if(T.reduce((k,N)=>k+N.span,0)>4){const k=T.findIndex(_=>_.id===p);let N;k!==-1&&k<=1?N=T.pop():N=T.shift(),N.row=w-1,h[w-1].push(N),d=!0;break}}}const x=[];return Object.keys(h).forEach(w=>{let T=1;h[w].forEach(L=>{x.push({...L,row:parseInt(w),col:T}),T+=L.span})}),x},Qm=(r,p)=>{if(!p)return r.map(d=>({...d,span:1}));const h=r.map(d=>({...d,span:d.id===p?2:1}));return Gm(h,p)},Xm=r=>{const p=[];let h=0;for(let d=1;d<=3;d++)h<r.length&&(p.push({id:r[h],row:1,col:d,span:1}),h++);for(let d=1;d<=4;d++)h<r.length&&(p.push({id:r[h],row:2,col:d,span:1}),h++);for(let d=1;d<=4;d++)h<r.length&&(p.push({id:r[h],row:3,col:d,span:1}),h++);return p},Vm=3e3,Zm=1,Km=u.div`
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
`,Jm=u.div`
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
    background: ${r=>r.$isExpanded?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.1)"};
    backdrop-filter: blur(10px);
    box-shadow: ${r=>r.$isExpanded?"0px 4px 32px 0px rgba(176, 149, 227, 0.25)":"none"};
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
`,Fm=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,Wm=u.div`
  display: flex;
  align-items: center;
  justify-content: ${r=>r.$isExpanded?"flex-start":"center"};
  gap: ${r=>r.$isExpanded?"16px":"0"};
  width: ${r=>r.$isExpanded?"100%":"auto"};
  padding: ${r=>r.$isExpanded?"0 20px":"0"};
  transition: none;
`,Im=u.div`
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
`,Pm=u.div`
  font-family: ${C.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  display: ${r=>r.$isExpanded?"block":"none"};
  opacity: ${r=>r.$isExpanded?"1":"0"};
  transform: translateX(${r=>r.$isExpanded?"0":"20px"});
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
`;function e1({ariaLabel:r,title:p,icon:h,gridRow:d,gridColumn:x,isExpanded:w,onMouseEnter:T,onMouseLeave:L,onClick:k,tileId:N}){return s.jsx(Jm,{"aria-label":r,$isExpanded:w,style:{gridRow:d,gridColumn:x},onMouseEnter:()=>T(N),onMouseLeave:L,onClick:()=>k(N),children:s.jsx(Fm,{children:s.jsxs(Wm,{$isExpanded:w,children:[s.jsx(Im,{children:h}),s.jsx(Pm,{$isExpanded:w,children:p})]})})})}const t1={ScrollIcon:Rm,MessageProgrammingIcon:Nm,PenToolIcon:Hm,DriverIcon:$m,CloudConnectionIcon:qm,FavoriteChartIcon:_m,LockIcon:Ym};function a1({tileColor:r}){const p=Xe("hero").tiles??{},h=p.autoCycleIntervalMs??Vm,d=p.defaultTileId??Zm,x=s0(),w=O.useMemo(()=>{const K=p.row1??[],se=p.row2??[];return[...K,...se]},[p]),T=O.useMemo(()=>w.length?Math.min(...w.map(K=>K.id)):1,[w]),L=O.useMemo(()=>w.length?Math.max(...w.map(K=>K.id)):1,[w]),[k,N]=O.useState(d),[_,D]=O.useState(!1),[q,Z]=O.useState(!1),ue=O.useRef(null),he=O.useRef(null);O.useEffect(()=>{if(typeof window<"u"){const K=()=>Z(window.innerWidth<=1e3);return K(),window.addEventListener("resize",K),()=>window.removeEventListener("resize",K)}},[]),O.useEffect(()=>q?void 0:(_||(ue.current=setInterval(()=>{if(!_){const se=Math.floor(Math.random()*(L-T+1))+T;N(se)}},h)),()=>{ue.current&&clearInterval(ue.current)}),[_,q]);const ie=O.useMemo(()=>{const K=w.map(Ce=>Ce.id),se={},Be=Xm(K);return se.default=Be,K.forEach(Ce=>{se[Ce]=Qm(Be,Ce)}),se},[w]),je=O.useMemo(()=>ie[k||"default"]||ie.default,[ie,k]),$e=K=>{D(!0),N(K),ue.current&&clearInterval(ue.current)},Ve=()=>{N(d),D(!1)},Pe=K=>{const se=w.find(Be=>Be.id===K);if(!q){se?.slug&&x(`/roadmap/${se.slug}`);return}if(k===K){se?.slug&&x(`/roadmap/${se.slug}`);return}he.current&&clearTimeout(he.current),N(K),he.current=setTimeout(()=>{N(d)},4e3)};return O.useEffect(()=>()=>{he.current&&clearTimeout(he.current)},[]),s.jsx(Km,{"aria-label":"intro tiles",children:je.map(K=>{const se=w.find(Bt=>Bt.id===K.id);if(!se)return null;const Be=t1[se.icon],Ce=K.span===2;return s.jsx(e1,{tileId:K.id,ariaLabel:se.ariaLabel,title:se.title,icon:s.jsx(Be,{color:r}),gridRow:K.row,gridColumn:`${K.col} / span ${K.span}`,isExpanded:Ce,onMouseEnter:$e,onMouseLeave:Ve,onClick:Pe},K.id)})})}const kp="margg_waitlist_joined",Vr="margg:waitlist_joined",n1=te`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,i1=te`
  to { stroke-dashoffset: 0; }
`,l1=te`
  to { transform: rotate(360deg); }
`,Dp=u.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,s1=u.div`
  position: relative;
  width: 100%;
  height: 56px;
`,o1=u.input`
  width: 100%;
  height: 100%;
  padding: 16px 180px 16px 24px;
  border: 1px solid ${r=>r.$hasError?"#FF4D4F":"#2d2d2d"};
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
    border-color: ${r=>r.$hasError?"#FF4D4F":"#d3c4ef"};
  }

  @media (max-width: 640px) {
    padding: 14px 120px 14px 16px;
    font-size: 14px;
  }
`,r1=u.button`
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
`,c1=u.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(80, 19, 192, 0.25);
  border-top-color: #5013c0;
  border-radius: 50%;
  animation: ${l1} 0.6s linear infinite;

  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`,u1=u.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ff6b6b;
  opacity: ${r=>r.$show?"1":"0"};
  max-height: ${r=>r.$show?"30px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,d1=u.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${n1} 0.4s ease forwards;

  @media (max-width: 640px) {
    gap: 10px;
  }
`,f1=u.div`
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
    animation: ${i1} 0.4s ease 0.25s forwards;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    svg { width: 18px; height: 18px; }
  }
`,p1=u.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(238, 231, 249, 0.85);
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,u0=({placeholder:r="Enter Email",buttonText:p="Join the waitlist",onSubmit:h})=>{const[d,x]=O.useState(""),[w,T]=O.useState(""),[L,k]=O.useState(!1),[N,_]=O.useState(!1),D=O.useRef(null),q=O.useRef(null),Z=O.useRef(null);O.useEffect(()=>{try{typeof window<"u"&&localStorage.getItem(kp)==="true"&&k(!0)}catch{}},[]),O.useEffect(()=>{const je=()=>k(!0);return window.addEventListener(Vr,je),()=>window.removeEventListener(Vr,je)},[]),O.useEffect(()=>{q.current&&!Z.current&&(Z.current=q.current.offsetWidth)}),O.useEffect(()=>{const je=$e=>{D.current&&!D.current.contains($e.target)&&w&&T("")};return document.addEventListener("mousedown",je),()=>{document.removeEventListener("mousedown",je)}},[w]);const ue=je=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(je),he=async je=>{if(je.preventDefault(),T(""),!ue(d)){T("Please enter a valid email address");return}if(h){_(!0);try{await h(d);try{localStorage.setItem(kp,"true")}catch{}window.dispatchEvent(new Event(Vr)),k(!0)}catch($e){$e.message==="already_registered"?T("This email is already registered"):$e.message==="already_enrolled"?T("This email is already enrolled in the waitlist"):T($e.message||"Something went wrong. Please try again.")}finally{_(!1)}}},ie=je=>{x(je.target.value),w&&T("")};return L?s.jsx(Dp,{ref:D,children:s.jsxs(d1,{children:[s.jsx(f1,{children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M5 13l4 4L19 7",stroke:"#B095E3",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx(p1,{children:"You have already joined the waitlist"})]})}):s.jsxs(Dp,{ref:D,children:[s.jsx("form",{onSubmit:he,children:s.jsxs(s1,{children:[s.jsx(o1,{type:"email",placeholder:r,value:d,onChange:ie,$hasError:!!w,disabled:N}),s.jsx(r1,{ref:q,type:"submit",disabled:N,style:N&&Z.current?{width:Z.current}:void 0,children:N?s.jsx(c1,{}):p})]})}),s.jsx(u1,{$show:!!w,children:w})]})};async function ps(r,p,h){if(!r)throw new Error("Google Sheets integration is not configured. Please set the script URL.");const d={_sheet:p,...h};let x;try{x=await fetch(r,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(d),signal:AbortSignal.timeout(15e3)})}catch(w){throw w.name==="TimeoutError"||w.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach Google Sheets. Please check your internet connection and try again.")}return{ok:!0}}let Zr=!1,Ni=null;function g1(){return Zr&&window.emailjs?Promise.resolve():Ni||(Ni=new Promise((r,p)=>{if(window.emailjs){Zr=!0,r();return}const h=document.createElement("script");h.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",h.async=!0,h.onload=()=>{Zr=!0,r()},h.onerror=()=>{Ni=null,p(new Error("Failed to load EmailJS SDK."))},document.head.appendChild(h)}),Ni)}function h1(r,p){const h=r?.templates?.[p];if(!h)return null;const d=h.account,x=r?.accounts?.[d];return!x?.serviceId||!x?.publicKey?null:{serviceId:x.serviceId,publicKey:x.publicKey,templateId:h.templateId}}async function gs(r,p,h){const d=h1(r,p);if(!d)return console.warn(`[EmailJS] No valid config for "${p}" — skipping.`),{ok:!0,skipped:!0};try{await g1(),window.emailjs.init(d.publicKey);const x={...h,to_email:r.notifyEmail||"info@margg.in",submission_time:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})},w=await window.emailjs.send(d.serviceId,d.templateId,x);return w.status!==200&&console.warn("[EmailJS] Non-200 status:",w),{ok:!0}}catch(x){return console.error("[EmailJS] Send failed:",x),{ok:!1,error:x.message}}}const m1=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,x1=/^[0-9\s\-+()]{10,15}$/;function Ot(r,p){if(!r||!String(r).trim())throw new Error(`${p} is required`);return String(r).trim()}function hs(r){const p=Ot(r,"Email").toLowerCase().slice(0,254);if(!m1.test(p))throw new Error("Please enter a valid email address");return p}function mc(r){const p=Ot(r,"Phone number");if(!x1.test(p))throw new Error("Please enter a valid phone number");return p}async function ms(r,p){let h;try{h=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p),signal:AbortSignal.timeout(15e3)})}catch(x){throw x.name==="TimeoutError"||x.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach the server. Please check your internet connection and try again.")}if(h.ok)return{ok:!0};let d="";try{const x=await h.json();d=x?.data?.message||x?.message||x?.error||""}catch{}throw h.status===409?new Error(d||"This entry already exists. Please use a different email."):h.status===422||h.status===400?new Error(d||"Some fields are invalid. Please review and try again."):h.status===429?new Error("Too many requests. Please wait a moment and try again."):h.status>=500?new Error("Our servers are temporarily unavailable. Please try again in a few moments."):new Error(d||"Something went wrong. Please try again.")}function xs(r){return r?.submissionMode==="sheets"}async function d0(r,p){const h=hs(p);if(xs(r))return await ps(r.googleSheets?.scriptUrl,"Waitlist",{email:h}),await gs(r.emailjs,"waitlist",{form_type:"Waitlist",email:h}),{ok:!0};const d=`${r.baseUrl}${r.endpoints.waitlist}`;return ms(d,{email:h})}async function y1(r,p){const h=Ot(p.fullName,"Full name").split(" ")[0],d=Ot(p.fullName,"Full name").split(" ").slice(1).join(" ")||"",x=mc(p.phone),w=hs(p.email),T=Ot(p.college,"College name"),L=Ot(p.branch,"Branch"),k=Ot(p.year,"Year"),N=p.query||"";if(xs(r)){const q={firstName:h,lastName:d,phone:x,email:w,collegeName:T,branch:L,year:k,query:N};return await ps(r.googleSheets?.scriptUrl,"Learners",q),await gs(r.emailjs,"learner",{form_type:"Learner Enquiry",full_name:`${h} ${d}`.trim(),phone:x,email:w,college_name:T,branch:L,year:k,query:N}),{ok:!0}}const _={firstName:h,lastName:d,phone:x,email:w,collegeName:T,branch:L,year:k,query:N},D=`${r.baseUrl}${r.endpoints.learner}`;return ms(D,_)}async function b1(r,p){const h=Ot(p.fullName,"Full name"),d=mc(p.phone),x=hs(p.email),w=p.topics?.length?p.topics:(()=>{throw new Error("Add at least one topic")})();if(xs(r)){const k={fullName:h,phone:d,email:x,topics:w.join(", ")};return await ps(r.googleSheets?.scriptUrl,"Instructors",k),await gs(r.emailjs,"instructor",{form_type:"Instructor Enquiry",full_name:h,phone:d,email:x,topics:w.join(", ")}),{ok:!0}}const T={fullName:h,phone:d,email:x,topics:w},L=`${r.baseUrl}${r.endpoints.instructor}`;return ms(L,T)}async function v1(r,p){const h=Ot(p.orgType,"Organisation type"),d=Ot(p.orgName,"Organisation name"),x=Number(Ot(p.students,"Number of students"))||0,w=mc(p.phone),T=hs(p.email);if(xs(r)){const N={organisationType:h,organisationName:d,numberOfStudents:x,phone:w,email:T};return await ps(r.googleSheets?.scriptUrl,"Partners",N),await gs(r.emailjs,"partner",{form_type:"Partner / Organisation Enquiry",organisation_type:h,organisation_name:d,number_of_students:x,phone:w,email:T}),{ok:!0}}const L={organisationType:h,organisationName:d,numberOfStudents:x,phone:w,email:T},k=`${r.baseUrl}${r.endpoints.partner}`;return ms(k,L)}const w1=u.section`
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
`,S1=u.div`
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
`,ys=u.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`,j1=u(ys)`
  left: 80.3%;
  top: 67.2%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.95) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,z1=u(ys)`
  left: 13.9%;
  top: 1.4%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.95) 0%,
    rgba(176, 149, 227, 0) 70%
  );
`,T1=u(ys)`
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
`,E1=u(ys)`
  left: 7.3%;
  top: 34.9%;
  width: clamp(110px, 13vw, 171px);
  height: clamp(110px, 13vw, 171px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.9) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,M1=u.div`
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
`,C1=u.div`
  width: 100%;
  max-width: ${Hn};
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
`,A1=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 520px;
  flex: 0 1 520px;
`,k1=u.h1`
  color: white;
  font-weight: 400;
  font-size: clamp(42px, 5.2vw, 64px);
  line-height: 1.2;
  letter-spacing: -0.3937px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${C.heading};

  text-wrap: balance;
`,D1=u.p`
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.35;
  font-family: ${C.body};
  margin: 0 0 32px 0;
  max-width: 425px;
  opacity: 0.95;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;u.div`
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translateX(-50%);
  width: 315px;
  text-align: center;
  font-family: ${C.body};
  font-size: 14px;
  letter-spacing: -0.3937px;
  color: #000;
  opacity: 0.18;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;u.img`
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
`;const L1=({id:r})=>{const p="rgba(176, 149, 227, 1)",{titleLine1:h,titleLine2:d,description:x,inputPlaceholder:w,inputButtonText:T}=Xe("hero"),L=Xe("api"),k=N=>d0(L,N);return s.jsxs(w1,{id:r,children:[s.jsx(S1,{}),s.jsx(j1,{}),s.jsx(z1,{}),s.jsx(T1,{}),s.jsx(E1,{}),s.jsx(M1,{children:s.jsxs(C1,{children:[s.jsxs(A1,{children:[s.jsxs(k1,{children:[h,s.jsx("br",{}),d]}),s.jsx(D1,{children:x}),s.jsx(u0,{placeholder:w,buttonText:T,onSubmit:k})]}),s.jsx(a1,{tileColor:p})]})})]})},O1=u.div`
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
`,B1=u.div`
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
`,U1=u.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`,R1=u.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
  white-space: pre-line;
`;function N1({items:r}){return s.jsx(O1,{"aria-label":"analytics stats",children:r.map(p=>s.jsxs(B1,{children:[s.jsx(U1,{children:p.value}),s.jsx(R1,{children:p.label})]},p.value+p.label))})}const H1=u.section`
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
`,$1=u.div`
  width: 100%;
  max-width: ${Hn};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`,q1=te`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`,_1=te`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`,Y1=te`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`,G1=u.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`,xc=u.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`,Q1=u(xc)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${q1} 12s ease-in-out infinite;
`,X1=u(xc)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${_1} 15s ease-in-out infinite;
`,V1=u(xc)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${Y1} 18s ease-in-out infinite;
`,Z1=u.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`,K1=te`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`,J1=u.div`
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
  animation: ${K1} 8s ease-in-out infinite;
`,F1=te`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`,W1=u.div`
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
  animation: ${F1} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`,I1=te`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`,P1=[{x:5,y:15,size:3,dur:10,delay:0,op:.4},{x:12,y:72,size:2,dur:12,delay:1.2,op:.3},{x:22,y:35,size:4,dur:9,delay:.5,op:.5},{x:33,y:85,size:2,dur:14,delay:2,op:.25},{x:42,y:12,size:3,dur:11,delay:.8,op:.35},{x:55,y:78,size:4,dur:13,delay:1.5,op:.45},{x:63,y:28,size:2,dur:10,delay:3,op:.3},{x:72,y:60,size:3,dur:15,delay:.3,op:.4},{x:78,y:18,size:2,dur:12,delay:2.5,op:.25},{x:85,y:45,size:4,dur:9,delay:1,op:.5},{x:91,y:80,size:3,dur:11,delay:.7,op:.35},{x:15,y:50,size:2,dur:14,delay:1.8,op:.3},{x:48,y:42,size:3,dur:10,delay:2.2,op:.4},{x:68,y:90,size:2,dur:13,delay:.4,op:.25},{x:38,y:55,size:3,dur:11,delay:3.2,op:.35},{x:95,y:25,size:2,dur:12,delay:1.6,op:.3},{x:8,y:88,size:4,dur:15,delay:.9,op:.45},{x:28,y:8,size:2,dur:10,delay:2.8,op:.3}],e2=u.span`
  position: absolute;
  width: ${r=>r.$size}px;
  height: ${r=>r.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${r=>r.$op});
  left: ${r=>r.$x}%;
  top: ${r=>r.$y}%;
  animation: ${I1} ${r=>r.$dur}s ease-in-out infinite;
  animation-delay: ${r=>r.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${r=>r.$size*3}px
    rgba(176, 149, 227, ${r=>r.$op*.5});
`,t2=te`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`,a2=u.div`
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
  animation: ${t2} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`,n2=u.div`
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
`,i2=u.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`,l2=u.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`,s2=te`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`,o2=u.div`
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
    animation: ${s2} 5s ease-in-out infinite;
    pointer-events: none;
  }
`,r2=te`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`,os=u.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-color: rgba(176, 149, 227, 0.18);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: ${r2} 0.6s ease-out 2.6s forwards;

  ${r=>r.$pos==="tl"&&me`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${r=>r.$pos==="tr"&&me`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${r=>r.$pos==="bl"&&me`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${r=>r.$pos==="br"&&me`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`,f0=te`
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
`,Lp=te`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`,Op=te`
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
`,c2=te`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`,Bp=u.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2.5vw, 40px);
  transform-style: preserve-3d;
  width: 100%;
`,u2=u.h2`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`,p0=u.span`
  display: inline-block;
  font-family: ${C.heading};
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

  ${r=>r.$animate&&me`
      animation:
        ${f0} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${r.$delay}s
          forwards,
        ${Lp} 6s linear ${r.$delay+.9}s infinite,
        ${Op} 4s ease-in-out ${r.$delay+.9}s infinite,
        ${c2} ${3.5+r.$delay%1.5}s ease-in-out ${r.$delay+.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${Lp} 1.5s linear infinite,
      ${Op} 1s ease-in-out infinite;
    text-shadow:
      0 0 40px rgba(176, 149, 227, 0.8),
      0 0 80px rgba(80, 19, 192, 0.3);
    transform: scale(1.12) translateY(-3px);
  }
`,Up=u(p0)`
  font-size: clamp(64px, 12vw, 160px);
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    font-size: clamp(40px, 10vw, 64px);
  }
`,Rp=u(p0)`
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: 0.18em;
  -webkit-text-fill-color: rgba(211, 196, 239, 0.65);
  background: none;
  animation: ${r=>r.$animate?me`
          ${f0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${r.$delay}s forwards
        `:"none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`,d2=te`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`,f2=u.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${C.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${d2} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`,p2=te`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`,g2=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: clamp(20px, 2.5vw, 36px);
`,Np=u.span`
  display: inline-block;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.4) 50%,
    transparent 100%
  );
  animation: ${p2} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`,h2=te`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`,m2=te`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`,x2=u.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${h2} 0.5s ease-out 2.5s forwards,
    ${m2} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`,y2=te`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`,b2=te`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`,v2=u.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${b2} 0.8s ease-out 2.8s forwards;
`,Kr=u.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${y2} 1.5s ease-in-out infinite;
  animation-delay: ${r=>r.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;function w2(r){return O.useCallback(h=>{if(!r.current)return;const d=r.current.getBoundingClientRect(),x=(h.clientX-d.left)/d.width*100,w=(h.clientY-d.top)/d.height*100;r.current.style.setProperty("--mx",`${x}%`),r.current.style.setProperty("--my",`${w}%`)},[r])}function S2(r){const p=O.useCallback(d=>{if(!r.current)return;const x=r.current.getBoundingClientRect(),w=(d.clientX-x.left)/x.width-.5,T=(d.clientY-x.top)/x.height-.5;r.current.style.transform=`rotateX(${T*-5}deg) rotateY(${w*5}deg)`},[r]),h=O.useCallback(()=>{r.current&&(r.current.style.transform="rotateX(0deg) rotateY(0deg)")},[r]);return{handleTiltMove:p,handleTiltLeave:h}}function j2(r=.2){const p=O.useRef(null),[h,d]=O.useState(!1);return O.useEffect(()=>{if(typeof IntersectionObserver>"u"){d(!0);return}const x=p.current;if(!x)return;const w=new IntersectionObserver(([T])=>{T.isIntersecting&&(d(!0),w.disconnect())},{threshold:r});return w.observe(x),()=>w.disconnect()},[r]),[p,h]}function rs({text:r,Component:p,baseDelay:h=0,animate:d=!0}){return s.jsx("span",{style:{display:"inline-flex",flexWrap:"nowrap",whiteSpace:"nowrap"},children:r.split("").map((x,w)=>s.jsx(p,{$animate:d,$delay:h+w*.07,children:x},`${x}-${w}`))})}function z2(){const{stats:r,waitList:p}=Xe("analytics"),h=O.useRef(null),d=O.useRef(null),x=w2(h),{handleTiltMove:w,handleTiltLeave:T}=S2(d),[L,k]=j2(.2),N=O.useCallback(_=>{x(_),w(_)},[x,w]);return s.jsx(H1,{ref:L,"aria-label":"analytics",onMouseMove:N,onMouseLeave:T,children:s.jsx($1,{children:p?s.jsxs(s.Fragment,{children:[s.jsxs(G1,{children:[s.jsx(Q1,{}),s.jsx(X1,{}),s.jsx(V1,{})]}),s.jsx(J1,{}),s.jsx(Z1,{}),s.jsx(a2,{}),s.jsx(W1,{}),s.jsx(n2,{ref:h}),P1.map((_,D)=>s.jsx(e2,{$x:_.x,$y:_.y,$size:_.size,$dur:_.dur,$delay:_.delay,$op:_.op},D)),s.jsx(i2,{children:s.jsx(l2,{ref:d,children:s.jsxs(o2,{children:[s.jsx(os,{$pos:"tl"}),s.jsx(os,{$pos:"tr"}),s.jsx(os,{$pos:"bl"}),s.jsx(os,{$pos:"br"}),s.jsxs(u2,{children:[s.jsxs(Bp,{children:[s.jsx(rs,{text:"WE",Component:Rp,baseDelay:.1,animate:k}),s.jsx("span",{style:{width:"clamp(8px,1.5vw,20px)"}}),s.jsx(rs,{text:"ARE",Component:Rp,baseDelay:.3,animate:k})]}),s.jsxs(Bp,{style:{marginTop:"clamp(4px, 0.8vw, 12px)"},children:[s.jsx(rs,{text:"COMING",Component:Up,baseDelay:.5,animate:k}),s.jsx(rs,{text:"SOON",Component:Up,baseDelay:.9,animate:k})]})]}),s.jsx(f2,{children:"Something extraordinary is on its way"}),s.jsxs(g2,{children:[s.jsx(Np,{}),s.jsx(x2,{}),s.jsx(Np,{})]}),s.jsxs(v2,{children:[s.jsx(Kr,{$delay:0}),s.jsx(Kr,{$delay:.3}),s.jsx(Kr,{$delay:.6})]})]})})})]}):s.jsx(N1,{items:r})})})}const g0=te`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function T2(r=.15){const p=O.useRef(null),[h,d]=O.useState(!1);return O.useEffect(()=>{if(typeof IntersectionObserver>"u"){d(!0);return}const x=p.current;if(!x)return;const w=new IntersectionObserver(([T])=>{T.isIntersecting&&(d(!0),w.disconnect())},{threshold:r});return w.observe(x),()=>w.disconnect()},[r]),[p,h]}const E2=u.section`
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
`,M2=u.div`
  width: 100%;
  max-width: ${Hn};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,C2=u.h2`
  margin: 0;
  font-family: ${C.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
  opacity: 0;

  ${r=>r.$inView&&me`
      animation: ${g0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,A2=u.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${C.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
  opacity: 0;

  ${r=>r.$inView&&me`
      animation: ${g0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,k2=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;u.div`
  width: min(560px, 100%);
  margin-top: clamp(22px, 5vh, 44px);
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: min(440px, 100%);
  }
`;u.div`
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
`;u.div`
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
`;u.div`
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
`;function D2({id:r}){const{titleLine1:p,titleLine2:h,description:d}=Xe("supercharge"),[x,w]=T2(.15);return s.jsx(E2,{id:r,"aria-label":"supercharge",ref:x,children:s.jsx(M2,{children:s.jsxs(k2,{children:[s.jsxs(C2,{$inView:w,children:[p,s.jsx("br",{}),h]}),s.jsx(A2,{$inView:w,children:d})]})})})}const L2=te`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function O2(r=.1){const p=O.useRef(null),[h,d]=O.useState(!1);return O.useEffect(()=>{if(typeof IntersectionObserver>"u"){d(!0);return}const x=p.current;if(!x)return;const w=new IntersectionObserver(([T])=>{T.isIntersecting&&(d(!0),w.disconnect())},{threshold:r});return w.observe(x),()=>w.disconnect()},[r]),[p,h]}const B2=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,U2=/^[0-9\s\-+()]{10,15}$/;function cs(r,p){if(!p||!p.trim())return"Required";switch(r){case"email":return B2.test(p.trim())?"":"Invalid email";case"phone":return U2.test(p.trim())?"":"Invalid phone number";case"fullName":return p.trim().length>=2?"":"At least 2 characters";case"orgName":return p.trim().length>=2?"":"At least 2 characters";default:return""}}const Hp=[{key:"learner",title:"Learners",desc:"Have questions about your course, progress, or certification? Reach out and we’ll get you the support you need."},{key:"instructor",title:"Instructors",desc:"Interested in joining our platform or facing technical issues while managing your content? We’re just a message away."},{key:"partner",title:"Partners",desc:"Let’s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team."}],R2=()=>s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z",fill:"#D3C4EF",fillOpacity:".8"}),s.jsx("path",{d:"M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",fill:"#EEE7F9"})]}),N2=()=>s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",fill:"#D3C4EF"}),s.jsx("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",fill:"#D3C4EF",fillOpacity:".6"}),s.jsx("path",{d:"M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z",fill:"#EEE7F9"})]}),H2=()=>s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#D3C4EF",fillOpacity:".6"}),s.jsx("path",{d:"M9 11a3 3 0 100-6 3 3 0 000 6z",fill:"#D3C4EF"}),s.jsx("path",{d:"M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z",fill:"#D3C4EF",fillOpacity:".6"}),s.jsx("path",{d:"M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",fill:"#D3C4EF"})]}),$2={learner:R2,instructor:N2,partner:H2},q2=u.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${V.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`,yc=u.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`,_2=u(yc)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `,Y2=u(yc)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `,G2=u(yc)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `,Q2=u.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,qi=me`
  opacity: 0;
  ${r=>r.$show&&me`
    animation: ${L2} 0.7s ease forwards;
    animation-delay: ${r.$d||"0s"};
  `}
`,X2=u.h2`
  margin: 0;
  font-family: ${C.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${qi}
`,V2=u.p`
  margin: 16px 0 0;
  font-family: ${C.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${qi}
`,Z2=u.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  ${qi}

  ${V.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`,K2=u.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${r=>r.$active?"drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))":"drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${V.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`,J2=u.button`
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

  background: ${r=>r.$active?"linear-gradient(160deg, rgba(80,19,192,0.55) 0%, rgba(60,42,96,0.7) 100%)":"linear-gradient(160deg, rgba(80,19,192,0.15) 0%, rgba(60,42,96,0.2) 100%)"};

  &:hover {
    background: linear-gradient(160deg, rgba(80,19,192,0.35) 0%, rgba(60,42,96,0.45) 100%);
  }

  ${V.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${r=>r.$active?"rgba(176,149,227,0.5)":"rgba(176,149,227,0.12)"};
  }
`,F2=u.div`
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
`,W2=u.span`
  font-family: ${C.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${V.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`,I2=u.span`
  font-family: ${C.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${V.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`,P2=u.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${C.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${qi}
  }
`,ex=u.div`
  position: relative;
  width: 100%;
  height: 80px;
  margin-top: 0;
  @media (max-width: 600px) { display: none; }
`,Jr=u.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${r=>r.$pos==="left"&&me` left: 18%; transform: rotate(18deg); transform-origin: top center; `}
  ${r=>r.$pos==="center"&&me` left: 50%; `}
  ${r=>r.$pos==="right"&&me` left: 82%; transform: rotate(-18deg); transform-origin: top center; `}
`,tx=u.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${qi}

  ${V.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`,ax=u.h3`
  margin: 0;
  font-family: ${C.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${V.mobile} { font-size: 32px; }
`,nx=u.p`
  margin: 8px 0 0;
  font-family: ${C.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${V.mobile} { font-size: 15px; }
`,ix=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${V.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`,Ze=u.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${r=>r.$full&&me` grid-column: 1 / -1; `}
`,Ke=u.label`
  font-family: ${C.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`,bc=me`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${C.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`,We=u.input` ${bc} `,lx=u.textarea`
  ${bc}
  min-height: 90px;
  resize: vertical;
`,sx=u.select`
  ${bc}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${C.body};
    padding: 8px;
  }
`,Ie=u.span`
  font-family: ${C.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`,ox=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`,rx=u.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${C.body};
  font-size: 13px;
  color: #eee7f9;
`,cx=u.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`,ux=u.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`,dx=u.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(176, 149, 227, 0.5);
  background: ${r=>r.$checked?"#5013C0":"rgba(211,196,239,0.06)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  svg { opacity: ${r=>r.$checked?1:0}; transition: opacity 0.15s; }
`,fx=u.span`
  font-family: ${C.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`,Fr=u.button`
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
  font-family: ${C.body};
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
`,px=u.div`
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
`,gx=u.span`
  font-family: ${C.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`,hx=u.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${C.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`,mx=u.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,xx=u.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`,yx=u.h3`
  margin: 0;
  font-family: ${C.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`,bx=u.p`
  margin: 0;
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;function us(r){switch(r){case"learner":return{fullName:"",phone:"",email:"",college:"",branch:"",year:"",query:"",newsletter:!1};case"instructor":return{fullName:"",phone:"",email:"",topics:[],otherTopic:void 0};case"partner":return{orgType:"",orgName:"",students:"",phone:"",email:""};default:return{}}}function vx({id:r}){const p=Xe("api"),[h,d]=O.useState("learner"),[x,w]=O.useState(us("learner")),[T,L]=O.useState({}),[k,N]=O.useState(!1),[_,D]=O.useState(!1);O.useRef(null);const[q,Z]=O2(.08),ue=O.useRef(null);O.useEffect(()=>{const A={"#contact-learner":"learner","#contact-instructor":"instructor","#contact-partner":"partner"};function G(){const J=window.location.hash,Ue=A[J];Ue&&(d(Ue),w(us(Ue)),L({}),N(!1),requestAnimationFrame(()=>{const Ct=ue.current;if(Ct){const At=document.querySelector("nav")?.offsetHeight||72,E=Ct.getBoundingClientRect().top+window.scrollY-At;window.scrollTo({top:E,behavior:"smooth"})}}))}return G(),window.addEventListener("hashchange",G),()=>window.removeEventListener("hashchange",G)},[]);const he=O.useCallback(A=>{d(A),w(us(A)),L({}),N(!1)},[]),ie=O.useCallback((A,G)=>{w(J=>({...J,[A]:G})),T[A]&&L(J=>({...J,[A]:""}))},[T]),je=O.useCallback(A=>{A&&(w(G=>({...G,topics:G.topics.includes(A)?G.topics:[...G.topics,A]})),T.topics&&L(G=>({...G,topics:""})))},[T]),$e=O.useCallback(()=>{w(A=>{const G=A.otherTopic?.trim();return G?{...A,topics:A.topics.includes(G)?A.topics:[...A.topics,G],otherTopic:void 0}:A}),T.topics&&L(A=>({...A,topics:""}))},[T]),Ve=O.useCallback(A=>{w(G=>({...G,topics:G.topics.filter(J=>J!==A)}))},[]),Pe=O.useCallback(async A=>{A.preventDefault();const G={};if(h==="learner")["fullName","phone","email"].forEach(J=>{const Ue=cs(J,x[J]);Ue&&(G[J]=Ue)}),x.college||(G.college="Required"),x.branch||(G.branch="Required"),x.year||(G.year="Required");else if(h==="instructor")["fullName","phone","email"].forEach(J=>{const Ue=cs(J,x[J]);Ue&&(G[J]=Ue)}),x.topics.length||(G.topics="Add at least one topic");else{x.orgType||(G.orgType="Required");const J=cs("orgName",x.orgName);J&&(G.orgName=J),x.students||(G.students="Required"),["phone","email"].forEach(Ue=>{const Ct=cs(Ue,x[Ue]);Ct&&(G[Ue]=Ct)})}if(Object.keys(G).length){L(G);return}D(!0),L(J=>({...J,_form:""}));try{h==="learner"?await y1(p,x):h==="instructor"?await b1(p,x):await v1(p,x),N(!0)}catch(J){L({_form:J.message||"Something went wrong. Please try again."})}finally{D(!1)}},[h,x,p]),K=O.useCallback(()=>{Pe({preventDefault:()=>{}})},[Pe]),se=()=>s.jsxs(s.Fragment,{children:[s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Full Name"}),s.jsx(We,{placeholder:"Enter full name",value:x.fullName,onChange:A=>ie("fullName",A.target.value)}),T.fullName&&s.jsx(Ie,{children:T.fullName})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Phone Number"}),s.jsx(We,{placeholder:"Enter phone number",value:x.phone,onChange:A=>ie("phone",A.target.value)}),T.phone&&s.jsx(Ie,{children:T.phone})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Email"}),s.jsx(We,{type:"email",placeholder:"Enter email address",value:x.email,onChange:A=>ie("email",A.target.value)}),T.email&&s.jsx(Ie,{children:T.email})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"College Name"}),s.jsx(We,{placeholder:"Enter college name",value:x.college,onChange:A=>ie("college",A.target.value)}),T.college&&s.jsx(Ie,{children:T.college})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Branch"}),s.jsx(We,{placeholder:"Enter branch",value:x.branch,onChange:A=>ie("branch",A.target.value)}),T.branch&&s.jsx(Ie,{children:T.branch})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Year of Passing"}),s.jsx(We,{placeholder:"Enter year of passing",value:x.year,onChange:A=>ie("year",A.target.value)}),T.year&&s.jsx(Ie,{children:T.year})]}),s.jsxs(Ze,{$full:!0,children:[s.jsxs(Ke,{children:["Query ",s.jsx("span",{style:{color:"rgba(238,231,249,0.35)",fontWeight:400},children:"(optional)"})]}),s.jsx(lx,{placeholder:"Any questions or queries that you have?",value:x.query,onChange:A=>ie("query",A.target.value)})]})]}),Be=Xe("courses")||[],Ce=()=>s.jsxs(s.Fragment,{children:[s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Full Name"}),s.jsx(We,{placeholder:"Enter full name",value:x.fullName,onChange:A=>ie("fullName",A.target.value)}),T.fullName&&s.jsx(Ie,{children:T.fullName})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Phone Number"}),s.jsx(We,{placeholder:"Enter phone number",value:x.phone,onChange:A=>ie("phone",A.target.value)}),T.phone&&s.jsx(Ie,{children:T.phone})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Email"}),s.jsx(We,{type:"email",placeholder:"Enter email address",value:x.email,onChange:A=>ie("email",A.target.value)}),T.email&&s.jsx(Ie,{children:T.email})]}),s.jsxs(Ze,{$full:!0,children:[s.jsx(Ke,{children:"Topics you can teach"}),x.topics.length>0&&s.jsx(ox,{children:x.topics.map(A=>s.jsxs(rx,{children:[A,s.jsx(cx,{onClick:()=>Ve(A),"aria-label":`Remove ${A}`,children:s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:s.jsx("path",{d:"M9 3L3 9M3 3l6 6",stroke:"#EEE7F9",strokeWidth:"1.5",strokeLinecap:"round"})})})]},A))}),s.jsxs(sx,{value:"",onChange:A=>{const G=A.target.value;G&&(G==="__other__"?w(J=>({...J,otherTopic:""})):je(G),A.target.value="")},children:[s.jsx("option",{value:"",children:"Select a topic"}),Be.filter(A=>!x.topics.includes(A)).map(A=>s.jsx("option",{value:A,children:A},A)),s.jsx("option",{value:"__other__",children:"Other"})]}),typeof x.otherTopic=="string"&&s.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[s.jsx(We,{placeholder:"Enter your topic",value:x.otherTopic,onChange:A=>ie("otherTopic",A.target.value),onKeyDown:A=>{A.key==="Enter"&&(A.preventDefault(),$e())},style:{flex:1}}),s.jsx(Fr,{type:"button",onClick:$e,style:{marginTop:0,width:"auto",padding:"0 24px",height:43,fontSize:14},children:"Add"})]}),T.topics&&s.jsx(Ie,{children:T.topics})]})]}),Bt=()=>s.jsxs(s.Fragment,{children:[s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Organisation Type"}),s.jsx(We,{placeholder:"Enter organisation type",value:x.orgType,onChange:A=>ie("orgType",A.target.value)}),T.orgType&&s.jsx(Ie,{children:T.orgType})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Organisation Name"}),s.jsx(We,{placeholder:"Enter organisation name",value:x.orgName,onChange:A=>ie("orgName",A.target.value)}),T.orgName&&s.jsx(Ie,{children:T.orgName})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Number of Students"}),s.jsx(We,{placeholder:"Enter number of students",value:x.students,onChange:A=>ie("students",A.target.value)}),T.students&&s.jsx(Ie,{children:T.students})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Phone Number"}),s.jsx(We,{placeholder:"Enter phone number",value:x.phone,onChange:A=>ie("phone",A.target.value)}),T.phone&&s.jsx(Ie,{children:T.phone})]}),s.jsxs(Ze,{children:[s.jsx(Ke,{children:"Email"}),s.jsx(We,{type:"email",placeholder:"Enter email address",value:x.email,onChange:A=>ie("email",A.target.value)}),T.email&&s.jsx(Ie,{children:T.email})]})]});return s.jsxs(q2,{id:r,ref:A=>{q.current=A,ue.current=A},"aria-label":"Contact Us",children:[s.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:s.jsx("defs",{children:s.jsx("clipPath",{id:"shield-clip",clipPathUnits:"objectBoundingBox",children:s.jsx("path",{d:"M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z"})})})}),s.jsx(_2,{}),s.jsx(Y2,{}),s.jsx(G2,{}),s.jsxs(Q2,{children:[s.jsx(X2,{$show:Z,$d:"0s",children:"We are here to help you"}),s.jsx(V2,{$show:Z,$d:"0.1s",children:"Whether you’re a student with a question, an educator with a suggestion, or a partner looking to collaborate — we’re always eager to hear from you."}),s.jsx(Z2,{$show:Z,$d:"0.2s",children:Hp.map(A=>{const G=$2[A.key];return s.jsx(K2,{$active:h===A.key,onClick:()=>he(A.key),children:s.jsxs(J2,{$active:h===A.key,type:"button","aria-pressed":h===A.key,children:[s.jsx(F2,{children:s.jsx(G,{})}),s.jsx(W2,{children:A.title}),s.jsx(I2,{children:A.desc})]})},A.key)})}),s.jsx(P2,{$show:Z,$d:"0.25s",children:Hp.find(A=>A.key===h)?.desc},h),s.jsxs(ex,{children:[s.jsx(Jr,{$pos:"left"}),s.jsx(Jr,{$pos:"center"}),s.jsx(Jr,{$pos:"right"})]}),s.jsx(tx,{$show:Z,$d:"0.35s",children:k?s.jsxs(mx,{children:[s.jsx(xx,{children:s.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"#B095E3"})})}),s.jsx(yx,{children:"Thank you!"}),s.jsx(bx,{children:"We’ve received your details and will contact you soon."}),s.jsx(Fr,{type:"button",onClick:()=>{N(!1),w(us(h))},children:"Submit another"})]}):s.jsxs("form",{onSubmit:Pe,noValidate:!0,children:[s.jsx(ax,{children:"Drop your Details"}),s.jsx(nx,{children:"We will contact you real soon!"}),s.jsxs(ix,{children:[h==="learner"&&se(),h==="instructor"&&Ce(),h==="partner"&&Bt()]}),h==="learner"&&s.jsxs(ux,{children:[s.jsx(dx,{$checked:x.newsletter,onClick:()=>ie("newsletter",!x.newsletter),role:"checkbox","aria-checked":x.newsletter,tabIndex:0,onKeyDown:A=>{(A.key===" "||A.key==="Enter")&&(A.preventDefault(),ie("newsletter",!x.newsletter))},children:s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:s.jsx("path",{d:"M2 6l3 3 5-5",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx(fx,{children:"Stay in the Loop! Subscribe to our newsletter and be the first to know about exciting features and exclusive collaborations."})]}),T._form&&s.jsxs(px,{children:[s.jsx(gx,{children:T._form}),s.jsx(hx,{type:"button",onClick:K,disabled:_,children:_?"Retrying…":"Retry"})]}),s.jsx(Fr,{type:"submit",disabled:_,children:_?"Submitting…":"Submit"})]})})]})]})}const wx=({width:r=24,height:p=24,color:h="currentColor",...d})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:h,...d,children:s.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),Sx=({width:r=24,height:p=24,color:h="currentColor",...d})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:h,...d,children:s.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),jx=({width:r=30,height:p=30,color:h="currentColor"})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 24 24",fill:h,children:s.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),zx=({width:r=30,height:p=30,color:h="currentColor"})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 24 24",fill:h,children:s.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})}),Tx=({width:r=30,height:p=30,color:h="currentColor"})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 24 24",fill:h,children:s.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),Ex=({width:r=15,height:p=20,color:h="#B095E3",...d})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 15 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...d,children:s.jsx("path",{d:"M7.5 0C3.35813 0 0 3.35813 0 7.5C0 9.13094 0.534688 10.6275 1.42344 11.8531C1.43938 11.8825 1.44187 11.9153 1.46 11.9434L6.46 19.4434C6.69188 19.7913 7.0825 20 7.5 20C7.9175 20 8.30812 19.7913 8.54 19.4434L13.54 11.9434C13.5584 11.9153 13.5606 11.8825 13.5766 11.8531C14.4653 10.6275 15 9.13094 15 7.5C15 3.35813 11.6419 0 7.5 0ZM7.5 10C6.11937 10 5 8.88062 5 7.5C5 6.11937 6.11937 5 7.5 5C8.88062 5 10 6.11937 10 7.5C10 8.88062 8.88062 10 7.5 10Z",fill:h})}),Mx=({width:r=20,height:p=20,color:h="#B095E3",...d})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...d,children:s.jsx("path",{d:"M16.6607 12.8167C15.6366 12.8167 14.6458 12.65 13.7216 12.35C13.5768 12.3009 13.4212 12.2936 13.2724 12.329C13.1237 12.3643 12.9879 12.4409 12.8807 12.55L11.5735 14.1917C9.2172 13.0667 7.01079 10.9417 5.83681 8.5L7.4604 7.11667C7.6852 6.88333 7.75181 6.55833 7.66022 6.26667C7.35216 5.34167 7.19396 4.35 7.19396 3.325C7.19396 2.875 6.81929 2.5 6.36968 2.5H3.48885C3.03924 2.5 2.49805 2.7 2.49805 3.325C2.49805 11.0667 8.93412 17.5 16.6607 17.5C17.2519 17.5 17.485 16.975 17.485 16.5167V13.6417C17.485 13.1917 17.1103 12.8167 16.6607 12.8167Z",fill:h})}),Cx=({width:r=20,height:p=20,color:h="#B095E3",...d})=>s.jsx("svg",{width:r,height:p,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...d,children:s.jsx("path",{d:"M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z",fill:h})}),h0=te`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Ax(r=.1){const p=O.useRef(null),[h,d]=O.useState(!1);return O.useEffect(()=>{if(typeof IntersectionObserver>"u"){d(!0);return}const x=p.current;if(!x)return;const w=new IntersectionObserver(([T])=>{T.isIntersecting&&(d(!0),w.disconnect())},{threshold:r});return w.observe(x),()=>w.disconnect()},[r]),[p,h]}const kx={FacebookIcon:wx,TwitterIcon:Sx,YoutubeIcon:jx,InstagramIcon:zx,DiscordIcon:Tx},Dx=u.footer`
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

  ${V.mobile} {
    height: auto;
    min-height: 460px;
  }
`,Lx=u.div`
  width: 100%;
  max-width: ${Hn};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;

  ${V.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`,Ox=u.div`
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

  ${r=>r.$inView&&me`
      animation: ${h0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${V.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${V.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,Bx=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${V.mobile} {
    align-items: center;
  }
`,Ux=u.h2`
  margin: 0;
  font-family: ${C.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${V.mobile} {
    font-size: 32px;
    text-align: center;
  }
`,Rx=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Wr=u.div`
  margin: 0;
  font-family: ${C.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${V.mobile} {
    justify-content: center;
  }
`,Ir=u.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Nx=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,Hx=u.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${V.mobile} {
    width: 180px;
    height: auto;
  }
`,$x=u.p`
  margin: 0;
  font-family: ${C.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${V.mobile} {
    font-size: 14px;
  }
`,qx=u.div`
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

  ${r=>r.$inView&&me`
      animation: ${h0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${V.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${V.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,_x=u.p`
  margin: 0;
  font-family: ${C.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${V.mobile} {
    font-size: 12px;
    text-align: center;
  }
`,Yx=u.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Gx=u.a`
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
`,Qx=u.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

  ${V.mobile} {
    gap: 16px;
  }
`,Pr=u.a`
  font-family: ${C.body};
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
`,Xx=new Date().getFullYear(),Da=({id:r})=>{const{contactTitle:p,location:h,phone:d,email:x,tagline:w,companyName:T,logoAlt:L,socialLinks:k}=Xe("footer"),[N,_]=Ax(.1);return s.jsx(Dx,{id:r,ref:N,children:s.jsxs(Lx,{children:[s.jsxs(Ox,{$inView:_,children:[s.jsxs(Bx,{children:[s.jsx(Ux,{children:p}),s.jsxs(Rx,{children:[s.jsxs(Wr,{children:[s.jsx(Ir,{children:s.jsx(Ex,{width:15,height:20,color:"#B095E3"})}),h]}),s.jsxs(Wr,{children:[s.jsx(Ir,{children:s.jsx(Mx,{width:18,height:18,color:"#B095E3"})}),d]}),s.jsxs(Wr,{children:[s.jsx(Ir,{children:s.jsx(Cx,{width:18,height:18,color:"#B095E3"})}),x]})]}),s.jsxs(Qx,{children:[s.jsx(Pr,{href:"#contact-learner",children:"Learner Form →"}),s.jsx(Pr,{href:"#contact-instructor",children:"Instructor Form →"}),s.jsx(Pr,{href:"#contact-partner",children:"Partner Form →"})]})]}),s.jsxs(Nx,{children:[s.jsx(Hx,{src:c0,alt:L,loading:"lazy",decoding:"async"}),s.jsx($x,{children:w})]})]}),s.jsxs(qx,{$inView:_,children:[s.jsxs(_x,{children:["© ",Xx," ",T,". All Rights Reserved."]}),s.jsx(Yx,{children:k.map(D=>{const q=kx[D.icon];return s.jsx(Gx,{href:D.url,target:"_blank",rel:"noopener noreferrer","aria-label":D.name,children:s.jsx(q,{})},D.name)})})]})]})})},Vx="/assets/phone-screen-uLB7OkVb.webp",Zx=te`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function Kx(r=.15){const p=O.useRef(null),[h,d]=O.useState(!1);return O.useEffect(()=>{if(typeof IntersectionObserver>"u"){d(!0);return}const x=p.current;if(!x)return;const w=new IntersectionObserver(([T])=>{T.isIntersecting&&(d(!0),w.disconnect())},{threshold:r});return w.observe(x),()=>w.disconnect()},[r]),[p,h]}const Jx=u.div`
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

  ${r=>r.$inView&&me`
      animation: ${Zx} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${V.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${V.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
  }
`,Fx=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${V.mobile} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`,Wx=u.h2`
  margin: 0;
  font-family: ${C.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${V.mobile} {
    font-size: 36px;
  }
`,Ix=u.p`
  margin: 0;
  font-family: ${C.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${V.mobile} {
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
  }
`,Px=u.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${V.mobile} {
    display: none;
  }
`,ey=u.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`,ty=u.img`
  width: 100%;
  height: 100%;
  display: block;
`,ay=({onSubmit:r,id:p})=>{const{title:h,subtitle:d,inputPlaceholder:x,buttonText:w}=Xe("joinWaitlist"),T=Xe("api"),[L,k]=Kx(.15),N=r||(_=>d0(T,_));return s.jsxs(Jx,{id:p,ref:L,$inView:k,children:[s.jsxs(Fx,{children:[s.jsx(Wx,{children:h}),s.jsx(Ix,{children:d}),s.jsx(u0,{placeholder:x,buttonText:w,onSubmit:N})]}),s.jsx(Px,{children:s.jsx(ey,{children:s.jsx(ty,{src:Vx,alt:"Margg app interface showing roadmap-based learning features",width:1036,height:1248,loading:"lazy",decoding:"async"})})})]})},ny="/assets/phone-screen-2-DEQ8AWQ-.webp",iy=u.div`
  background: #ffffff1a;
  border-radius: 24px;
`,$n=u.h3`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
`;u.p`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
`;const ly="/assets/roadmap-Dn-5xO1L.webp",sy=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,oy=u.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`,ry=()=>{const{roadmap:r}=Xe("blocks");return s.jsxs(sy,{children:[s.jsx($n,{children:r.title}),s.jsx(oy,{src:ly,alt:"Roadmap based learning path on Margg education platform",width:1120,height:608,loading:"lazy",decoding:"async"})]})},cy="/assets/mentor-B3u5TnvR.webp",uy=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,dy=u.img`
  position: absolute;
  bottom: 0;
  width: 52%;
`,fy=()=>{const{mentorship:r}=Xe("blocks");return s.jsxs(uy,{children:[s.jsx($n,{children:r.title}),s.jsx(dy,{src:cy,alt:"One-on-one mentorship sessions on Margg LMS platform",width:457,height:539,loading:"lazy",decoding:"async"})]})},py="/assets/community-DUEL_A6f.webp",gy=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,hy=u.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`,my=()=>{const{community:r}=Xe("blocks");return s.jsxs(gy,{children:[s.jsx($n,{children:r.title}),s.jsx(hy,{src:py,alt:"Margg peer learning community for collaborative education",width:1236,height:1136,loading:"lazy",decoding:"async"})]})},xy="/assets/focus-timer-C5HEcCmJ.webp",yy=u.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`,by=u.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`,vy=u.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`,wy=u($n)`
  text-align: right;
  width: 50%;
`,Sy=()=>{const{focusTimer:r}=Xe("blocks");return s.jsxs(yy,{children:[s.jsx(vy,{children:s.jsx(wy,{children:r.title})}),s.jsx(by,{src:xy,alt:"Focus timer for productive study sessions on Margg",width:479,height:648,loading:"lazy",decoding:"async"})]})},jy="/assets/streak-DyGuKhiQ.webp",zy=u.div`
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
`;u.img`
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
`;const Ty=u($n)`
  text-align: left;
`,Ey=u.img`
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
`,My=()=>{const{streaks:r}=Xe("blocks");return s.jsxs(zy,{children:[s.jsx(Ty,{children:r.title}),s.jsx(Ey,{src:jy,alt:"Learning streak tracking and consistency feature",width:1108,height:412,loading:"lazy",decoding:"async"})]})},Cy="/assets/interview-prep-DeoMkukO.webp",Ay=u.div`
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
`,ky=u.img`
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
`,Dy=()=>{const{interviewPrep:r}=Xe("blocks");return s.jsxs(Ay,{children:[s.jsx($n,{children:r.title}),s.jsx(ky,{src:Cy,alt:"Interview preparation materials and mock tests on Margg",width:1500,height:1136,loading:"lazy",decoding:"async"})]})},Ly=u.div`
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
`,qn=u(iy)`
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
`,Oy=u(qn)`
  grid-column: span 6;
  height: 200px;
`,By=u(qn)`
  grid-column: span 3;
`,Uy=u(qn)`
  grid-column: span 3;
`,Ry=u(qn)`
  grid-column: span 4;
  min-height: 180px;
`,Ny=u(qn)`
  grid-column: span 4;
  min-height: 60px;
`,Hy=u(qn)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`,$y=()=>{const[r,p]=O.useState(null),h=O.useCallback(d=>{typeof window<"u"&&window.innerWidth>1e3||p(x=>x===d?null:d)},[]);return s.jsxs(Ly,{children:[s.jsx(Oy,{"data-tapped":r==="roadmap",onClick:()=>h("roadmap"),children:s.jsx(ry,{})}),s.jsx(By,{"data-tapped":r==="mentorship",onClick:()=>h("mentorship"),children:s.jsx(fy,{})}),s.jsx(Uy,{"data-tapped":r==="community",onClick:()=>h("community"),children:s.jsx(my,{})}),s.jsx(Ry,{"data-tapped":r==="focusTimer",onClick:()=>h("focusTimer"),children:s.jsx(Sy,{})}),s.jsx(Hy,{"data-tapped":r==="interviewPrep",onClick:()=>h("interviewPrep"),children:s.jsx(Dy,{})}),s.jsx(Ny,{"data-tapped":r==="streaks",onClick:()=>h("streaks"),children:s.jsx(My,{})})]})},m0=te`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function qy(r=.1){const p=O.useRef(null),[h,d]=O.useState(!1);return O.useEffect(()=>{if(typeof IntersectionObserver>"u"){d(!0);return}const x=p.current;if(!x)return;const w=new IntersectionObserver(([T])=>{T.isIntersecting&&(d(!0),w.disconnect())},{threshold:r});return w.observe(x),()=>w.disconnect()},[r]),[p,h]}const _y=u.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${V.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`,Yy=u.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${r=>r.$inView&&me`
      animation: ${m0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${V.mobile} {
    display: none;
  }
`,Gy=u.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`,Qy=u.div`
  min-width: 0;
  opacity: 0;

  ${r=>r.$inView&&me`
      animation: ${m0} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,Xy=()=>{const[r,p]=qy(.1);return s.jsxs(_y,{ref:r,children:[s.jsx(Yy,{$inView:p,children:s.jsx(Gy,{src:ny,alt:"Margg mobile app screenshot showing learning dashboard",width:1113,height:2340,loading:"lazy",decoding:"async"})}),s.jsx(Qy,{$inView:p,children:s.jsx($y,{})})]})},Vy=u.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`,Zy=u.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ky=()=>s.jsxs(Vy,{children:[s.jsx(ka,{}),s.jsxs(Zy,{children:[s.jsx(L1,{id:"home"}),s.jsx(z2,{}),s.jsx(D2,{id:"products"}),s.jsx(Xy,{}),s.jsx(vx,{id:"contact-us"}),s.jsx(ay,{}),s.jsx(Da,{})]})]}),pc={"frontend-development-course":{slug:"frontend-development-course",title:"Frontend Development Course – Learn React, HTML, CSS & JavaScript | Margg",metaDescription:"Master frontend development with Margg's roadmap-based course. Learn React, HTML, CSS, JavaScript, responsive design, and build real-world projects with expert mentorship. Enroll now.",keywords:"frontend development course, learn React, HTML CSS JavaScript course, frontend developer roadmap course, best frontend course India, web development course, UI development, responsive web design course, React course with projects, frontend bootcamp India",heroTitle:"Frontend Development Course",heroSubtitle:"Master Modern Web Development with a Structured Roadmap",heroDescription:"Learn to build beautiful, responsive, and production-ready web applications from scratch. Our roadmap-based frontend development course takes you from HTML basics to advanced React patterns — with real projects, one-on-one mentorship, and interview preparation.",ctaText:"Join the Waitlist",ctaHash:"#contact-learner",sections:[{heading:"Why Choose Margg's Frontend Development Course?",content:`The demand for skilled frontend developers has never been higher. Companies across India and the world are looking for developers who can build fast, accessible, and visually stunning web applications. But most online courses teach isolated topics without connecting them into a career-ready skill set.

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

Commitment: ~12-15 hours per week including live sessions, exercises, and project work.`}],faqs:[{question:"Do I need a technical background for this data analysis course?",answer:"No. We start with Excel and basic data concepts, then progressively introduce SQL and Python. Students from commerce, arts, science, and engineering backgrounds have all succeeded in this course."},{question:"Which programming language is taught?",answer:"Python, which is the most popular language for data analysis. You'll specifically learn Pandas, NumPy, Matplotlib, and Seaborn — the core data analysis stack. We also teach SQL extensively for database querying."},{question:"Will I learn data visualization and dashboards?",answer:"Yes. Data visualization is a major focus. You'll learn to create charts, graphs, and interactive dashboards using Python libraries and understand principles of effective data storytelling."},{question:"Can this course help me get into data science?",answer:"Absolutely. Data analysis is the foundation of data science. After completing this course, you'll have the programming, statistics, and data manipulation skills needed to pursue machine learning and advanced data science topics."},{question:"What kind of job roles can I target after this course?",answer:"Common roles include Data Analyst, Business Analyst, Operations Analyst, Marketing Analyst, and Junior Data Scientist. These roles are available across industries including tech, finance, healthcare, and e-commerce."},{question:"Are there real datasets used in the course?",answer:"Yes. Every project uses real-world datasets — not toy examples. You'll work with actual e-commerce transaction data, social media metrics, financial data, and public datasets from government and research sources."}]}},$p=u.div`
  background: #090215;
  min-height: 100vh;
`,qp=u.section`
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
`,_p=u.div`
  max-width: 860px;
  margin: 0 auto;
`,Jy=u.nav`
  margin-bottom: 24px;
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,Yp=u.h1`
  font-family: ${C.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,Fy=u.p`
  font-family: ${C.body};
  font-size: clamp(18px, 2.5vw, 24px);
  color: #D3C4EF;
  margin: 0 0 16px;
  font-weight: 400;
`,Wy=u.p`
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`,Gp=u.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${C.body};
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
`,Iy=u.main`
  max-width: ${Hn};
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`,Py=u.article`
  max-width: 820px;
  margin: 0 auto;
`,eb=u.section`
  margin-bottom: 56px;
`,tb=u.h2`
  font-family: ${C.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Qp=u.p`
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`,ab=u.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`,nb=u.li`
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`,ib=u.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,lb=u.h2`
  font-family: ${C.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`,sb=u.details`
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
`,ob=u.summary`
  font-family: ${C.body};
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
`,rb=u.div`
  font-family: ${C.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`,cb=u.section`
  max-width: 820px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,ub=u.h2`
  font-family: ${C.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`,db=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`,fb=u(xt)`
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
`,pb=u.h3`
  font-family: ${C.heading};
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 8px;
  text-transform: uppercase;
`,gb=u.p`
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.5;
  margin: 0;
`,hb=Object.keys(pc);function mb(){const{slug:r}=hc(),p=pc[r];if(!p)return s.jsxs($p,{children:[s.jsx(ka,{}),s.jsx(qp,{children:s.jsxs(_p,{children:[s.jsx(Yp,{children:"Course Not Found"}),s.jsx(Qp,{children:"The course you're looking for doesn't exist."}),s.jsx(Gp,{href:"/",children:"Back to Home"})]})}),s.jsx(Da,{})]});const h=hb.filter(d=>d!==r).map(d=>pc[d]);return s.jsxs($p,{children:[s.jsx(ka,{}),s.jsx(qp,{children:s.jsxs(_p,{children:[s.jsxs(Jy,{children:[s.jsx(xt,{to:"/",children:"Home"})," / ",s.jsx("span",{children:p.heroTitle})]}),s.jsx(Yp,{children:p.heroTitle}),s.jsx(Fy,{children:p.heroSubtitle}),s.jsx(Wy,{children:p.heroDescription}),s.jsx(Gp,{href:`/${p.ctaHash}`,children:p.ctaText})]})}),s.jsx(Iy,{children:s.jsx(Py,{children:p.sections.map((d,x)=>s.jsxs(eb,{children:[s.jsx(tb,{children:d.heading}),s.jsx(Qp,{children:d.content}),d.list&&s.jsx(ab,{children:d.list.map((w,T)=>s.jsx(nb,{children:w},T))})]},x))})}),p.faqs?.length>0&&s.jsxs(ib,{children:[s.jsx(lb,{children:"Frequently Asked Questions"}),p.faqs.map((d,x)=>s.jsxs(sb,{children:[s.jsx(ob,{children:d.question}),s.jsx(rb,{children:d.answer})]},x))]}),s.jsxs(cb,{children:[s.jsx(ub,{children:"Explore Other Courses"}),s.jsx(db,{children:h.map(d=>s.jsxs(fb,{to:`/${d.slug}`,children:[s.jsx(pb,{children:d.heroTitle}),s.jsx(gb,{children:d.heroSubtitle})]},d.slug))})]}),s.jsx(Da,{})]})}const xb=JSON.parse(`[{"id":1,"slug":"frontend-development","name":"Frontend Application Development","shortName":"Frontend","description":"Master modern web development with HTML, CSS, JavaScript, React, and TypeScript. Build production-ready web applications with structured learning.","icon":"🖥️","color":"#61DAFB","duration":"16 weeks","totalCourses":12,"metaTitle":"Frontend Development Roadmap – Learn HTML, CSS, React & JavaScript | Margg","metaDescription":"Follow Margg's structured frontend development roadmap. Master HTML, CSS, JavaScript, React, TypeScript & more with hands-on projects, mentorship, and career support.","keywords":"frontend roadmap, frontend developer path, learn React roadmap, web development roadmap India, frontend course structure","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":110,"slug":"html5-css3-deep-dive","title":"HTML5 & CSS3 Deep Dive","description":"Build accessible, SEO-friendly web pages with semantic HTML5 and modern CSS3. Master Flexbox, Grid, animations, and responsive design patterns.","level":"beginner","duration":"3 weeks","sections":["Semantic HTML5","CSS Fundamentals","Flexbox & Grid","Responsive Design"]},{"id":114,"slug":"dom-and-event-handling","title":"DOM & Event Handling","description":"Master DOM manipulation and event handling in JavaScript. Learn to create interactive web applications with efficient DOM operations.","level":"beginner","duration":"2 weeks","sections":["DOM Traversal","Element Manipulation","Event Listeners","Performance Optimization"]},{"id":113,"slug":"typescript-fundamentals","title":"TypeScript Fundamentals","description":"Master TypeScript for scalable JavaScript applications. Learn types, interfaces, generics, and advanced TypeScript features.","level":"intermediate","duration":"3 weeks","sections":["TypeScript Basics","Interfaces & Types","Generics","Advanced Patterns"]},{"id":115,"slug":"responsive-design-mastery","title":"Responsive Design Mastery","description":"Create responsive websites that work on all devices. Learn mobile-first design, CSS Grid, Flexbox, and modern responsive techniques.","level":"intermediate","duration":"2 weeks","sections":["Mobile-First Approach","Media Queries","Fluid Typography","Cross-Device Testing"]},{"id":111,"slug":"advanced-javascript-es6-plus","title":"Advanced JavaScript (ES6+)","description":"Deep dive into modern JavaScript — advanced closures, prototypes, async patterns, modules, and performance optimization for production apps.","level":"advanced","duration":"3 weeks","sections":["Closures & Prototypes","Async Patterns","Module Systems","Performance Tuning"]},{"id":112,"slug":"react-js-mastery","title":"React.js Mastery","description":"Build modern web applications with React. Master components, hooks, context, routing, and state management patterns.","level":"advanced","duration":"4 weeks","sections":["React Fundamentals","Hooks Deep Dive","Context & Routing","Advanced Patterns"]}],"addOns":[{"id":106,"slug":"redux-and-state-management","title":"Redux & State Management","description":"Master Redux, Redux Toolkit, and modern state management patterns for React applications. Learn when and how to manage complex application state.","level":"add-on","duration":"2 weeks","sections":["Redux Fundamentals","Redux Toolkit","Middleware & Thunks","State Architecture"]},{"id":107,"slug":"testing-react-applications","title":"Testing React Applications","description":"Comprehensive testing course covering Jest, React Testing Library, and E2E testing with Cypress. Build reliable, well-tested applications.","level":"add-on","duration":"2 weeks","sections":["Jest Fundamentals","React Testing Library","Integration Testing","E2E with Cypress"]}]},{"id":2,"slug":"backend-engineering","name":"Backend Engineering","shortName":"Backend","description":"Build scalable server-side applications with Node.js, Express, databases, and microservices. Master API design, security, and deployment.","icon":"⚙️","color":"#68A063","duration":"16 weeks","totalCourses":8,"metaTitle":"Backend Engineering Roadmap – Learn Node.js, APIs & Databases | Margg","metaDescription":"Follow Margg's structured backend engineering roadmap. Master Node.js, Express, PostgreSQL, MongoDB, microservices & DevOps with real projects and mentorship.","keywords":"backend roadmap, backend developer path, learn Node.js roadmap, API development roadmap, backend course India","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":116,"slug":"nodejs-fundamentals","title":"Node.js Fundamentals","description":"Master server-side JavaScript with Node.js. Learn core concepts, modules, file system, and building your first backend applications.","level":"beginner","duration":"3 weeks","sections":["Node.js Basics","Core Modules & NPM","File System & Streams","Event-Driven Programming"]},{"id":117,"slug":"expressjs-and-api-development","title":"Express.js & API Development","description":"Build robust REST APIs with Express.js. Learn middleware, routing, authentication, and modern API development practices.","level":"intermediate","duration":"3 weeks","sections":["Express.js Fundamentals","Middleware & Request Handling","REST API Design","Authentication & Authorization"]},{"id":118,"slug":"database-design-and-integration","title":"Database Design & Integration","description":"Master database design, SQL, NoSQL, and integration patterns. Learn MongoDB, PostgreSQL, and data modeling best practices.","level":"advanced","duration":"3 weeks","sections":["Database Fundamentals","SQL & PostgreSQL","MongoDB & NoSQL","Database Integration Patterns"]}],"addOns":[{"id":119,"slug":"microservices-architecture","title":"Microservices Architecture","description":"Design and implement microservices architecture. Learn service communication, API gateways, and distributed system patterns.","level":"add-on","duration":"3 weeks","sections":["Microservices Fundamentals","Service Communication","API Gateway & Load Balancing","Monitoring & Observability"]},{"id":120,"slug":"backend-security-and-devops","title":"Backend Security & DevOps","description":"Secure your backend applications and implement DevOps practices. Learn security best practices, CI/CD, and deployment strategies.","level":"add-on","duration":"3 weeks","sections":["Security Fundamentals","Authentication & Encryption","CI/CD Pipelines","Production Deployment"]}]},{"id":3,"slug":"ui-ux-engineering","name":"UI/UX Engineering","shortName":"UI/UX","description":"Design beautiful, user-centered digital experiences. Master Figma, design systems, user research, wireframing, and prototyping.","icon":"🎨","color":"#F24E1E","duration":"12 weeks","totalCourses":8,"metaTitle":"UI/UX Design Roadmap – Learn Design Thinking, Figma & Prototyping | Margg","metaDescription":"Follow Margg's structured UI/UX design roadmap. Master design thinking, Figma, prototyping, user research & design systems with real projects and mentorship.","keywords":"UI/UX roadmap, designer path, learn Figma roadmap, UX research roadmap, design course India","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":121,"slug":"design-thinking-fundamentals","title":"Design Thinking Fundamentals","description":"Master the design thinking process and user-centered design principles. Learn to empathize, define, ideate, prototype, and test digital solutions.","level":"beginner","duration":"3 weeks","sections":["Introduction to Design Thinking","Empathy & User Research","Problem Definition & Ideation","Prototyping & Testing"]},{"id":122,"slug":"ui-design-and-prototyping","title":"UI Design & Prototyping","description":"Create stunning user interfaces and interactive prototypes. Master Figma, design systems, and modern UI design principles.","level":"intermediate","duration":"3 weeks","sections":["Visual Design Principles","Interface Design Patterns","Figma Mastery","Interactive Prototyping"]},{"id":123,"slug":"user-experience-research","title":"User Experience Research","description":"Conduct comprehensive UX research and usability testing. Learn research methodologies, user interviews, and data-driven design decisions.","level":"advanced","duration":"3 weeks","sections":["Research Methodologies","User Interviews & Surveys","Usability Testing","Data Analysis & Insights"]}],"addOns":[{"id":124,"slug":"design-systems-and-frontend-collaboration","title":"Design Systems & Frontend Collaboration","description":"Build scalable design systems and collaborate effectively with developers. Learn component libraries and design-to-development workflows.","level":"add-on","duration":"2 weeks","sections":["Design Systems Fundamentals","Component Libraries","Developer Handoff","Design Tokens & Automation"]},{"id":125,"slug":"advanced-ux-strategy-and-business-impact","title":"Advanced UX Strategy & Business Impact","description":"Align UX strategy with business goals and measure design impact. Learn UX metrics, stakeholder management, and design leadership.","level":"add-on","duration":"2 weeks","sections":["UX Strategy & Business Alignment","UX Metrics & KPIs","Stakeholder Management","Design Leadership"]}]},{"id":4,"slug":"data-engineering","name":"Data Engineering","shortName":"Data","description":"Build robust data systems with Python, SQL, big data tools, and cloud platforms. Master ETL pipelines, distributed computing, and MLOps.","icon":"📊","color":"#3776AB","duration":"16 weeks","totalCourses":8,"metaTitle":"Data Engineering Roadmap – Learn Python, SQL, Spark & Cloud Data | Margg","metaDescription":"Follow Margg's structured data engineering roadmap. Master Python, SQL, Apache Spark, ETL pipelines, cloud services & MLOps with hands-on projects and mentorship.","keywords":"data engineering roadmap, data engineer path, learn Python data roadmap, SQL course roadmap, big data course India","starterKit":[{"id":104,"slug":"communication-skills-for-developers","title":"Communication Skills for Developers","description":"Build essential communication skills for the tech industry. Learn to present ideas clearly, write effective documentation, and collaborate in team environments.","level":"starter-kit","duration":"2 weeks","sections":["Professional Communication","Technical Writing","Presentation Skills","Team Collaboration"]},{"id":105,"slug":"javascript-fundamentals","title":"JavaScript Fundamentals","description":"Master the core of JavaScript — variables, functions, closures, promises, and async/await. Build a solid foundation for frontend and backend development.","level":"starter-kit","duration":"3 weeks","sections":["JavaScript Basics","Functions & Scope","Async Programming","ES6+ Features"]},{"id":106,"slug":"git-and-github-mastery","title":"Git & GitHub Mastery","description":"Learn version control with Git and collaborative workflows with GitHub. Master branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching & Merging","GitHub Workflows","Collaboration Best Practices"]}],"levels":[{"id":126,"slug":"python-for-data-engineering","title":"Python for Data Engineering","description":"Master Python fundamentals for data engineering. Learn data structures, file handling, APIs, and essential libraries for data processing.","level":"beginner","duration":"3 weeks","sections":["Python Fundamentals","Data Processing Libraries","File Handling & APIs","Data Engineering Tools"]},{"id":127,"slug":"sql-and-database-systems","title":"SQL & Database Systems","description":"Master SQL and database design for data engineering. Learn advanced queries, optimization, and working with various database systems.","level":"intermediate","duration":"3 weeks","sections":["SQL Fundamentals","Advanced SQL Techniques","Database Design & Modeling","NoSQL & Modern Databases"]},{"id":128,"slug":"big-data-and-distributed-systems","title":"Big Data & Distributed Systems","description":"Master big data technologies and distributed computing. Learn Hadoop, Spark, Kafka, and cloud-based data processing at scale.","level":"advanced","duration":"3 weeks","sections":["Big Data Fundamentals","Hadoop Ecosystem","Apache Spark","Stream Processing"]}],"addOns":[{"id":129,"slug":"data-pipeline-and-etl-engineering","title":"Data Pipeline & ETL Engineering","description":"Build robust data pipelines and ETL processes. Learn workflow orchestration, data quality, and pipeline monitoring and optimization.","level":"add-on","duration":"3 weeks","sections":["ETL Fundamentals","Workflow Orchestration","Data Quality & Validation","Pipeline Monitoring & Optimization"]},{"id":130,"slug":"cloud-data-engineering-and-mlops","title":"Cloud Data Engineering & MLOps","description":"Master cloud data engineering and MLOps practices. Learn AWS/Azure data services, infrastructure as code, and ML pipeline automation.","level":"add-on","duration":"3 weeks","sections":["Cloud Data Services","Infrastructure as Code","MLOps & Model Deployment","Monitoring & Governance"]}]},{"id":5,"slug":"business-analytics","name":"Business Analytics","shortName":"Business","description":"Master business analysis, requirements engineering, process optimization, and data analytics for informed decision-making.","icon":"📈","color":"#FF6B35","duration":"14 weeks","totalCourses":8,"metaTitle":"Business Analytics Roadmap – Learn BA, Data Analysis & Process Optimization | Margg","metaDescription":"Follow Margg's structured business analytics roadmap. Master business analysis, requirements engineering, data analytics, process modeling & digital transformation.","keywords":"business analytics roadmap, business analyst path, BA course India, requirements engineering, process optimization course","starterKit":[{"id":146,"slug":"data-analysis-fundamentals","title":"Data Analysis Fundamentals","description":"Essential data analysis skills for business professionals. Learn Excel, basic statistics, data visualization, and interpreting business metrics.","level":"starter-kit","duration":"2 weeks","sections":["Excel for Data Analysis","Statistical Basics for Business","Data Visualization Fundamentals"]},{"id":147,"slug":"business-intelligence-basics","title":"Business Intelligence Basics","description":"Introduction to business intelligence concepts. Learn KPIs, dashboards, reporting, and data-driven decision making for business success.","level":"starter-kit","duration":"2 weeks","sections":["Power BI Interface","Data Modeling in Power BI","Interactive Dashboard Creation"]},{"id":148,"slug":"sql-for-business-analytics","title":"SQL for Business Analytics","description":"Essential SQL skills for business analysts. Learn to query databases, extract insights, and create reports for business decision-making.","level":"starter-kit","duration":"2 weeks","sections":["SQL Basics for Analysts","Advanced Queries and Joins","Business Intelligence with SQL"]}],"levels":[{"id":141,"slug":"business-analysis-fundamentals","title":"Business Analysis Fundamentals","description":"Master the core principles of business analysis. Learn requirements gathering, stakeholder management, process analysis, and business documentation fundamentals.","level":"beginner","duration":"3 weeks","sections":["Introduction to Business Analysis","Stakeholder Analysis & Management","Requirements Elicitation Techniques","Business Documentation & Communication"]},{"id":142,"slug":"requirements-engineering-and-management","title":"Requirements Engineering & Management","description":"Advanced requirements gathering, analysis, and management techniques. Learn elicitation methods, traceability, and change management for complex projects.","level":"intermediate","duration":"3 weeks","sections":["Advanced Elicitation Methods","Requirements Analysis & Validation","Requirements Traceability & Management","Change Management & Impact Analysis"]},{"id":143,"slug":"advanced-process-modeling-and-optimization","title":"Advanced Process Modeling & Optimization","description":"Master advanced business process analysis, modeling, and optimization. Learn BPMN, process mining, lean six sigma, and digital transformation strategies.","level":"advanced","duration":"3 weeks","sections":["Business Process Mapping & Modeling","BPMN & Process Notation Standards","Process Analysis & Optimization","Lean Six Sigma & Process Excellence"]}],"addOns":[{"id":144,"slug":"data-analytics-for-business-analysis","title":"Data Analytics for Business Analysis","description":"Leverage data analytics and business intelligence for informed decision-making. Learn SQL, data visualization, statistical analysis, and predictive modeling for business insights.","level":"add-on","duration":"3 weeks","sections":["Business Intelligence Fundamentals","SQL & Database Analysis","Data Visualization & Reporting","Statistical Analysis & Predictive Modeling"]},{"id":145,"slug":"digital-transformation-and-agile-ba","title":"Digital Transformation & Agile BA","description":"Navigate digital transformation initiatives and agile methodologies. Learn agile BA practices, user story writing, product ownership, and change management in digital environments.","level":"add-on","duration":"3 weeks","sections":["Digital Transformation Strategy","Agile Business Analysis Practices","User Stories & Product Backlog","Change Management & Adoption"]}]},{"id":8,"slug":"devops-engineering","name":"DevOps Engineering","shortName":"DevOps","description":"Master DevOps practices, CI/CD pipelines, containerization, cloud infrastructure, and site reliability engineering.","icon":"🔄","color":"#0DB7ED","duration":"16 weeks","totalCourses":8,"metaTitle":"DevOps Engineering Roadmap – Learn Docker, Kubernetes, CI/CD & Cloud | Margg","metaDescription":"Follow Margg's structured DevOps roadmap. Master Linux, CI/CD, Docker, Kubernetes, cloud infrastructure, IaC & SRE with real projects and mentorship.","keywords":"DevOps roadmap, DevOps engineer path, learn Docker Kubernetes roadmap, CI/CD course India, cloud infrastructure course","starterKit":[{"id":149,"slug":"linux-fundamentals-for-devops","title":"Linux Fundamentals for DevOps","description":"Essential Linux skills for DevOps engineers. Learn command line, file systems, process management, and basic system administration.","level":"starter-kit","duration":"2 weeks","sections":["Linux Command Line","File Systems & Permissions","Process Management","Shell Basics"]},{"id":150,"slug":"version-control-and-collaboration","title":"Version Control & Collaboration","description":"Master Git and collaborative development workflows. Learn branching, merging, pull requests, and team collaboration best practices.","level":"starter-kit","duration":"2 weeks","sections":["Git Fundamentals","Branching Strategies","Pull Requests & Reviews","Team Workflows"]},{"id":151,"slug":"infrastructure-as-code-basics","title":"Infrastructure as Code Basics","description":"Introduction to Infrastructure as Code principles. Learn automation, configuration management, and basic scripting for infrastructure.","level":"starter-kit","duration":"2 weeks","sections":["IaC Principles","Configuration Management","Automation Scripting","Environment Setup"]}],"levels":[{"id":131,"slug":"linux-and-system-administration","title":"Linux & System Administration","description":"Master Linux fundamentals and system administration. Learn command line, shell scripting, system monitoring, and server management essentials.","level":"beginner","duration":"3 weeks","sections":["Linux Fundamentals","Shell Scripting & Automation","System Monitoring & Performance","Network & Security Basics"]},{"id":132,"slug":"cicd-and-automation","title":"CI/CD & Automation","description":"Build automated CI/CD pipelines and deployment workflows. Master Jenkins, GitHub Actions, and modern DevOps automation practices.","level":"intermediate","duration":"3 weeks","sections":["Version Control & Git Workflows","CI/CD Pipeline Design","Jenkins & Automation Tools","Testing & Quality Assurance"]},{"id":133,"slug":"container-orchestration-and-kubernetes","title":"Container Orchestration & Kubernetes","description":"Master containerization with Docker and orchestration with Kubernetes. Learn microservices deployment, scaling, and management at enterprise scale.","level":"advanced","duration":"3 weeks","sections":["Docker Fundamentals","Kubernetes Architecture","Kubernetes Workloads","Advanced Kubernetes"]}],"addOns":[{"id":134,"slug":"cloud-infrastructure-and-iac","title":"Cloud Infrastructure & IaC","description":"Design and manage cloud infrastructure using Infrastructure as Code. Master Terraform, AWS/Azure services, and cloud architecture patterns.","level":"add-on","duration":"3 weeks","sections":["Cloud Architecture Fundamentals","Infrastructure as Code","AWS/Azure Services","Security & Compliance"]},{"id":135,"slug":"monitoring-and-site-reliability-engineering","title":"Monitoring & Site Reliability Engineering","description":"Implement comprehensive monitoring, alerting, and SRE practices. Learn observability, incident response, and maintaining high-availability systems.","level":"add-on","duration":"3 weeks","sections":["Observability Fundamentals","Monitoring Stack Implementation","Incident Response & Management","Reliability & Performance"]}]},{"id":9,"slug":"cyber-security","name":"Cyber Security Engineering","shortName":"Security","description":"Master network security, penetration testing, threat detection, cloud security, and compliance frameworks to protect digital assets.","icon":"🔐","color":"#E53935","duration":"16 weeks","totalCourses":8,"metaTitle":"Cyber Security Roadmap – Learn Ethical Hacking, Network Security & DevSecOps | Margg","metaDescription":"Follow Margg's structured cyber security roadmap. Master network security, penetration testing, threat detection, cloud security & compliance with hands-on labs.","keywords":"cyber security roadmap, security engineer path, ethical hacking course India, penetration testing roadmap, DevSecOps course","starterKit":[{"id":152,"slug":"information-security-fundamentals","title":"Information Security Fundamentals","description":"Essential cybersecurity concepts and principles. Learn CIA triad, threat landscape, risk management, and security best practices.","level":"starter-kit","duration":"2 weeks","sections":["CIA Triad & Principles","Threat Landscape","Risk Management","Security Best Practices"]},{"id":153,"slug":"network-security-basics","title":"Network Security Basics","description":"Foundation of network security concepts. Learn firewalls, VPNs, network protocols, intrusion detection, and secure network design.","level":"starter-kit","duration":"2 weeks","sections":["Network Protocols","Firewall Configuration","VPN & Encryption","Secure Design"]},{"id":154,"slug":"ethical-hacking-introduction","title":"Ethical Hacking Introduction","description":"Introduction to ethical hacking and penetration testing. Learn vulnerability assessment, testing methodologies, and responsible disclosure.","level":"starter-kit","duration":"2 weeks","sections":["Hacking Methodologies","Vulnerability Assessment","Testing Tools","Responsible Disclosure"]}],"levels":[{"id":136,"slug":"network-security-fundamentals","title":"Network Security Fundamentals","description":"Master network security basics, protocols, and threat detection. Learn firewalls, VPNs, intrusion detection, and network monitoring fundamentals.","level":"beginner","duration":"3 weeks","sections":["Network Protocols & Architecture","Firewall & Network Defense","Intrusion Detection & Prevention","VPN & Secure Communications"]},{"id":137,"slug":"application-security-and-penetration-testing","title":"Application Security & Penetration Testing","description":"Learn web application security, vulnerability assessment, and ethical hacking. Master OWASP Top 10, penetration testing, and security testing methodologies.","level":"intermediate","duration":"3 weeks","sections":["Web Application Security","OWASP Top 10 & Mitigation","Penetration Testing Methodology","Security Testing & Tools"]},{"id":138,"slug":"advanced-threat-detection-and-response","title":"Advanced Threat Detection & Response","description":"Master advanced cybersecurity operations, incident response, and threat hunting. Learn SIEM, SOC operations, digital forensics, and advanced persistent threat detection.","level":"advanced","duration":"3 weeks","sections":["SIEM & Security Operations","Incident Response & Forensics","Threat Hunting & Intelligence","Advanced Persistent Threats"]}],"addOns":[{"id":139,"slug":"cloud-security-and-devsecops","title":"Cloud Security & DevSecOps","description":"Secure cloud infrastructure and implement DevSecOps practices. Learn cloud security frameworks, container security, and security automation in CI/CD pipelines.","level":"add-on","duration":"3 weeks","sections":["Cloud Security Architecture","Container & Kubernetes Security","DevSecOps Pipeline Security","Security Automation & Orchestration"]},{"id":140,"slug":"compliance-and-risk-management","title":"Compliance & Risk Management","description":"Master cybersecurity governance, compliance frameworks, and risk assessment. Learn ISO 27001, NIST, SOX compliance, and security program management.","level":"add-on","duration":"3 weeks","sections":["Security Governance & Frameworks","Risk Assessment & Management","Compliance & Auditing","Business Continuity & Recovery"]}]}]`),bs={roadmaps:xb},vs=te`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;te`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;const yb=u.div`
  background: #090215;
  min-height: 100vh;
`,bb=u.section`
  position: relative;
  padding: 160px clamp(24px, 7vw, 120px) 60px;
  text-align: center;
  background:
    radial-gradient(900px circle at 50% 30%, rgba(176,149,227,0.15), transparent 60%),
    radial-gradient(600px circle at 20% 80%, rgba(80,19,192,0.12), transparent 60%),
    radial-gradient(600px circle at 80% 80%, rgba(176,149,227,0.08), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${V.mobile} {
    padding-top: 120px;
    padding-bottom: 40px;
  }
`,vb=u.nav`
  margin-bottom: 24px;
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,wb=u.h1`
  font-family: ${C.heading};
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${vs} 0.6s ease-out;
`,Sb=u.p`
  font-family: ${C.body};
  font-size: clamp(16px, 2vw, 20px);
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 16px;
  animation: ${vs} 0.6s ease-out 0.1s both;
`,jb=u.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
  animation: ${vs} 0.6s ease-out 0.2s both;

  ${V.mobile} {
    gap: 24px;
    flex-wrap: wrap;
  }
`,ec=u.div`
  text-align: center;
`,tc=u.div`
  font-family: ${C.heading};
  font-size: clamp(32px, 5vw, 48px);
  color: #B095E3;
  letter-spacing: 1px;
`,ac=u.div`
  font-family: ${C.body};
  font-size: 13px;
  color: rgba(238,231,249,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;
`,zb=u.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px clamp(24px, 5vw, 80px) 100px;
`,Tb=u.p`
  font-family: ${C.body};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #B095E3;
  text-align: center;
  margin: 0 0 12px;
`,Eb=u.h2`
  font-family: ${C.heading};
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 48px;
`,Mb=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;

  ${V.mobile} {
    grid-template-columns: 1fr;
  }
`,x0=u(xt)`
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
  animation: ${vs} 0.5s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${r=>r.$color||"#B095E3"};
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
`,Cb=u.span`
  font-size: 40px;
  margin-bottom: 16px;
  display: block;
`,Ab=u.h3`
  font-family: ${C.heading};
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
`,kb=u.p`
  font-family: ${C.body};
  font-size: 15px;
  color: rgba(238,231,249,0.65);
  line-height: 1.65;
  margin: 0 0 20px;
  flex: 1;
`,Db=u.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,Xp=u.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${C.body};
  font-size: 12px;
  color: rgba(238,231,249,0.5);
  background: rgba(176,149,227,0.1);
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
`,Lb=u.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
`,nc=u.span`
  font-family: ${C.body};
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
`,Ob=u.span`
  font-family: ${C.body};
  font-size: 14px;
  color: #B095E3;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;

  ${x0}:hover & {
    gap: 14px;
  }
`,Bb=u.section`
  text-align: center;
  padding: 60px clamp(24px, 7vw, 120px) 100px;
  background:
    radial-gradient(600px circle at 50% 50%, rgba(80,19,192,0.12), transparent 60%);
`,Ub=u.h2`
  font-family: ${C.heading};
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 16px;
`,Rb=u.p`
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238,231,249,0.65);
  max-width: 560px;
  margin: 0 auto 32px;
  line-height: 1.7;
`,Nb=u.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${C.body};
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
`,{roadmaps:gc}=bs,Hb=gc.reduce((r,p)=>r+p.starterKit.length+p.levels.length+p.addOns.length,0);function $b(){return s.jsxs(yb,{children:[s.jsx(ka,{}),s.jsxs(bb,{children:[s.jsxs(vb,{children:[s.jsx(xt,{to:"/",children:"Home"})," / ",s.jsx("span",{children:"Roadmaps"})]}),s.jsx(wb,{children:"Learning Roadmaps"}),s.jsx(Sb,{children:"Structured, roadmap-based learning paths designed to take you from beginner to job-ready. Each roadmap is divided into Starter-Kit, progressive Levels, and specialized Add-Ons."}),s.jsxs(jb,{children:[s.jsxs(ec,{children:[s.jsx(tc,{children:gc.length}),s.jsx(ac,{children:"Roadmaps"})]}),s.jsxs(ec,{children:[s.jsxs(tc,{children:[Hb,"+"]}),s.jsx(ac,{children:"Courses"})]}),s.jsxs(ec,{children:[s.jsx(tc,{children:"3"}),s.jsx(ac,{children:"Categories"})]})]})]}),s.jsxs(zb,{children:[s.jsx(Tb,{children:"Choose your path"}),s.jsx(Eb,{children:"Explore All Roadmaps"}),s.jsx(Mb,{children:gc.map((r,p)=>s.jsxs(x0,{to:`/roadmap/${r.slug}`,$color:r.color,style:{animationDelay:`${p*.08}s`},children:[s.jsx(Cb,{children:r.icon}),s.jsx(Ab,{children:r.name}),s.jsx(kb,{children:r.description}),s.jsxs(Db,{children:[s.jsxs(Xp,{children:["⏱ ",r.duration]}),s.jsxs(Xp,{children:["📚 ",r.totalCourses," courses"]})]}),s.jsxs(Lb,{children:[s.jsxs(nc,{className:"starter",children:[r.starterKit.length," Starter-Kit"]}),s.jsxs(nc,{className:"levels",children:[r.levels.length," Levels"]}),s.jsxs(nc,{className:"addons",children:[r.addOns.length," Add-Ons"]})]}),s.jsx(Ob,{children:"Explore roadmap →"})]},r.id))})]}),s.jsxs(Bb,{children:[s.jsx(Ub,{children:"Ready to Start Learning?"}),s.jsx(Rb,{children:"Join thousands of learners building real skills with Margg's structured roadmaps. Pick your path and start today."}),s.jsx(Nb,{href:"/#contact-learner",children:"Join the Waitlist"})]}),s.jsx(Da,{})]})}const _n=te`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Vp=u.div`
  background: #090215;
  min-height: 100vh;
`,Zp=u.section`
  position: relative;
  padding: 160px clamp(24px, 7vw, 120px) 60px;
  text-align: center;
  background:
    radial-gradient(800px circle at 40% 20%, ${r=>r.$glow||"rgba(176,149,227,0.15)"}, transparent 60%),
    radial-gradient(600px circle at 70% 80%, rgba(80,19,192,0.12), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${V.mobile} {
    padding-top: 120px;
    padding-bottom: 40px;
  }
`,qb=u.nav`
  margin-bottom: 24px;
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);
  animation: ${_n} 0.5s ease-out;

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,_b=u.span`
  font-size: 56px;
  display: block;
  margin-bottom: 16px;
  animation: ${_n} 0.5s ease-out 0.05s both;
`,Kp=u.h1`
  font-family: ${C.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  animation: ${_n} 0.5s ease-out 0.1s both;
`,Jp=u.p`
  font-family: ${C.body};
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  max-width: 640px;
  margin: 0 auto 24px;
  animation: ${_n} 0.5s ease-out 0.15s both;
`,Yb=u.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  animation: ${_n} 0.5s ease-out 0.2s both;
`,Hi=u.span`
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  background: rgba(176,149,227,0.1);
  border: 1px solid rgba(176,149,227,0.15);
  padding: 8px 16px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Gb=u.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 24px clamp(24px, 5vw, 80px) 0;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;

  ${V.mobile} {
    gap: 6px;
  }
`,ds=u.button`
  font-family: ${C.body};
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  white-space: nowrap;

  ${r=>r.$active&&r.$variant==="starter"&&me`
    background: rgba(76,175,80,0.15);
    border-color: rgba(76,175,80,0.4);
    color: #4CAF50;
  `}
  ${r=>r.$active&&r.$variant==="levels"&&me`
    background: rgba(33,150,243,0.15);
    border-color: rgba(33,150,243,0.4);
    color: #2196F3;
  `}
  ${r=>r.$active&&r.$variant==="addons"&&me`
    background: rgba(255,152,0,0.15);
    border-color: rgba(255,152,0,0.4);
    color: #FF9800;
  `}
  ${r=>r.$active&&r.$variant==="all"&&me`
    background: rgba(176,149,227,0.15);
    border-color: rgba(176,149,227,0.4);
    color: #B095E3;
  `}
  ${r=>!r.$active&&me`
    border-color: rgba(176,149,227,0.15);
    color: rgba(238,231,249,0.5);
    &:hover {
      border-color: rgba(176,149,227,0.3);
      color: rgba(238,231,249,0.8);
    }
  `}

  ${V.mobile} {
    font-size: 12px;
    padding: 10px 16px;
  }
`,Qb=u.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px clamp(24px, 5vw, 80px) 80px;
`,ic=u.section`
  margin-bottom: 64px;
  animation: ${_n} 0.4s ease-out;
`,lc=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`,sc=u.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;

  &.starter { background: #4CAF50; }
  &.levels  { background: #2196F3; }
  &.addons  { background: #FF9800; }
`,oc=u.h2`
  font-family: ${C.heading};
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`,rc=u.p`
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);
  margin: -20px 0 28px 28px;
`,Xb=u.div`
  margin-bottom: 32px;
  &:last-child { margin-bottom: 0; }
`,Vb=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-left: 4px;
`,Zb=u.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
`,Kb=u.h3`
  font-family: ${C.heading};
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0;
`,Jb=u.span`
  font-family: ${C.body};
  font-size: 12px;
  color: rgba(238,231,249,0.35);
  margin-left: 4px;
`,cc=u.div`
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
`,Fb=u.div`
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
`,y0=u(xt)`
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
`,Wb=u.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;

  ${V.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`,Ib=u.h3`
  font-family: ${C.heading};
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0;
`,Pb=u.span`
  font-family: ${C.body};
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
`,ev=u.p`
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.65;
  margin: 0 0 16px;
`,tv=u.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,av=u.span`
  font-family: ${C.body};
  font-size: 12px;
  color: rgba(238,231,249,0.45);
  background: rgba(176,149,227,0.06);
  border: 1px solid rgba(176,149,227,0.1);
  padding: 4px 10px;
  border-radius: 6px;
`,nv=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`,iv=u.span`
  font-family: ${C.body};
  font-size: 13px;
  color: rgba(238,231,249,0.4);
`,lv=u.span`
  font-family: ${C.body};
  font-size: 13px;
  color: #B095E3;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease;

  ${y0}:hover & {
    gap: 10px;
  }
`,sv=u.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px) 100px;
`,ov=u.h2`
  font-family: ${C.heading};
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 32px;
`,rv=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`,cv=u(xt)`
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
`,uv=u.span`
  font-size: 32px;
  flex-shrink: 0;
`,dv=u.div``,fv=u.h3`
  font-family: ${C.heading};
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 4px;
`,pv=u.span`
  font-family: ${C.body};
  font-size: 12px;
  color: rgba(238,231,249,0.4);
`,gv=u.section`
  text-align: center;
  padding: 60px clamp(24px, 7vw, 120px) 80px;
  background: radial-gradient(500px circle at 50% 50%, rgba(80,19,192,0.12), transparent 60%);
`,Fp=u.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${C.body};
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
`,hv={"starter-kit":"Starter Kit",beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced","add-on":"Add-On"};function uc({course:r}){const p=r.slug,h=r.level;return s.jsx(Fb,{className:h,children:s.jsxs(y0,{to:`/course/${p}`,children:[s.jsxs(Wb,{children:[s.jsx(Ib,{children:r.title}),s.jsx(Pb,{className:h,children:hv[r.level]||r.level})]}),s.jsx(ev,{children:r.description}),r.sections?.length>0&&s.jsx(tv,{children:r.sections.map((d,x)=>s.jsx(av,{children:d},x))}),s.jsxs(nv,{children:[s.jsxs(iv,{children:["⏱ ",r.duration]}),s.jsx(lv,{children:"View course →"})]})]})})}const{roadmaps:Wp}=bs;function mv(){const{roadmapSlug:r}=hc(),p=Wp.find(k=>k.slug===r),[h,d]=O.useState("all");if(!p)return s.jsxs(Vp,{children:[s.jsx(ka,{}),s.jsxs(Zp,{children:[s.jsx(Kp,{children:"Roadmap Not Found"}),s.jsx(Jp,{children:"The roadmap you're looking for doesn't exist."}),s.jsx(Fp,{href:"/roadmaps",children:"Browse All Roadmaps"})]}),s.jsx(Da,{})]});const x=Wp.filter(k=>k.slug!==r),w=h==="all"||h==="starter",T=h==="all"||h==="levels",L=h==="all"||h==="addons";return s.jsxs(Vp,{children:[s.jsx(ka,{}),s.jsxs(Zp,{$glow:`${p.color}22`,children:[s.jsxs(qb,{children:[s.jsx(xt,{to:"/",children:"Home"})," / ",s.jsx(xt,{to:"/roadmaps",children:"Roadmaps"})," /"," ",s.jsx("span",{children:p.shortName})]}),s.jsx(_b,{children:p.icon}),s.jsx(Kp,{children:p.name}),s.jsx(Jp,{children:p.description}),s.jsxs(Yb,{children:[s.jsxs(Hi,{children:["⏱ ",p.duration]}),s.jsxs(Hi,{children:["📚 ",p.totalCourses," courses"]}),s.jsxs(Hi,{children:["🟢 ",p.starterKit.length," Starter-Kit"]}),s.jsxs(Hi,{children:["🔵 ",p.levels.length," Levels"]}),s.jsxs(Hi,{children:["🟠 ",p.addOns.length," Add-Ons"]})]})]}),s.jsxs(Gb,{children:[s.jsx(ds,{$active:h==="all",$variant:"all",onClick:()=>d("all"),children:"All Courses"}),s.jsxs(ds,{$active:h==="starter",$variant:"starter",onClick:()=>d("starter"),children:["Starter-Kit (",p.starterKit.length,")"]}),s.jsxs(ds,{$active:h==="levels",$variant:"levels",onClick:()=>d("levels"),children:["Levels (",p.levels.length,")"]}),s.jsxs(ds,{$active:h==="addons",$variant:"addons",onClick:()=>d("addons"),children:["Add-Ons (",p.addOns.length,")"]})]}),s.jsxs(Qb,{children:[w&&p.starterKit.length>0&&s.jsxs(ic,{children:[s.jsxs(lc,{children:[s.jsx(sc,{className:"starter"}),s.jsx(oc,{children:"Starter-Kit"})]}),s.jsx(rc,{children:"Foundational courses to build your core skills before diving into the specialisation."}),s.jsx(cc,{children:p.starterKit.map(k=>s.jsx(uc,{course:k},k.id))})]}),T&&p.levels.length>0&&(()=>{const k={beginner:[],intermediate:[],advanced:[]};p.levels.forEach(_=>{k[_.level]&&k[_.level].push(_)});const N={beginner:{label:"Beginner",color:"#29B6F6"},intermediate:{label:"Intermediate",color:"#42A5F5"},advanced:{label:"Advanced",color:"#1565C0"}};return s.jsxs(ic,{children:[s.jsxs(lc,{children:[s.jsx(sc,{className:"levels"}),s.jsx(oc,{children:"Levels"})]}),s.jsx(rc,{children:"Progressive courses from beginner to advanced — each building on the previous one."}),Object.entries(N).map(([_,{label:D,color:q}])=>{const Z=k[_];return!Z||Z.length===0?null:s.jsxs(Xb,{children:[s.jsxs(Vb,{children:[s.jsx(Zb,{style:{background:q}}),s.jsx(Kb,{style:{color:q},children:D}),s.jsxs(Jb,{children:[Z.length," course",Z.length>1?"s":""]})]}),s.jsx(cc,{children:Z.map(ue=>s.jsx(uc,{course:ue},ue.id))})]},_)})]})})(),L&&p.addOns.length>0&&s.jsxs(ic,{children:[s.jsxs(lc,{children:[s.jsx(sc,{className:"addons"}),s.jsx(oc,{children:"Add-Ons"})]}),s.jsx(rc,{children:"Optional specialty courses to deepen expertise in niche areas."}),s.jsx(cc,{children:p.addOns.map(k=>s.jsx(uc,{course:k},k.id))})]})]}),s.jsxs(sv,{children:[s.jsx(ov,{children:"Explore Other Roadmaps"}),s.jsx(rv,{children:x.map(k=>s.jsxs(cv,{to:`/roadmap/${k.slug}`,children:[s.jsx(uv,{children:k.icon}),s.jsxs(dv,{children:[s.jsx(fv,{children:k.shortName}),s.jsxs(pv,{children:[k.totalCourses," courses · ",k.duration]})]})]},k.id))})]}),s.jsx(gv,{children:s.jsx(Fp,{href:"/#contact-learner",children:"Join the Waitlist"})}),s.jsx(Da,{})]})}const b0={},fs={};bs.roadmaps.forEach(r=>{[...r.starterKit,...r.levels,...r.addOns].forEach(h=>{b0[h.slug]={...h,roadmapSlug:r.slug,roadmapName:r.name,roadmapIcon:r.icon,roadmapColor:r.color},fs[h.slug]||(fs[h.slug]=[]),fs[h.slug].push({slug:r.slug,name:r.name,icon:r.icon})})});const Wa=te`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Ip=u.div`
  background: #090215;
  min-height: 100vh;
`,Pp=u.section`
  position: relative;
  padding: 160px clamp(24px, 7vw, 120px) 80px;
  text-align: center;
  background:
    radial-gradient(700px circle at 30% 20%, rgba(176,149,227,0.18), transparent 60%),
    radial-gradient(600px circle at 70% 80%, rgba(80,19,192,0.15), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${V.mobile} {
    padding-top: 120px;
    padding-bottom: 48px;
  }
`,e0=u.div`
  max-width: 860px;
  margin: 0 auto;
`,xv=u.nav`
  margin-bottom: 24px;
  font-family: ${C.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);
  animation: ${Wa} 0.5s ease-out;

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`,yv=u.span`
  display: inline-block;
  font-family: ${C.body};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 6px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  animation: ${Wa} 0.5s ease-out 0.05s both;

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
`,t0=u.h1`
  font-family: ${C.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${Wa} 0.5s ease-out 0.1s both;
`,bv=u.p`
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 28px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  animation: ${Wa} 0.5s ease-out 0.15s both;
`,vv=u.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  animation: ${Wa} 0.5s ease-out 0.2s both;
`,dc=u.span`
  font-family: ${C.body};
  font-size: 13px;
  color: rgba(238,231,249,0.55);
  background: rgba(176,149,227,0.08);
  border: 1px solid rgba(176,149,227,0.12);
  padding: 6px 14px;
  border-radius: 8px;
`,a0=u.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${C.body};
  font-size: 18px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid #D3C4EF;
  box-shadow: 0 4px 24px rgba(176,149,227,0.5);
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${Wa} 0.5s ease-out 0.25s both;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 32px rgba(176,149,227,0.65);
  }
`,wv=u.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`,n0=u.section`
  margin-bottom: 56px;
  animation: ${Wa} 0.4s ease-out;
`,fc=u.h2`
  font-family: ${C.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,i0=u.p`
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`,Sv=u.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`,jv=u.li`
  font-family: ${C.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`,zv=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 24px;
`,Tv=u.div`
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(176,149,227,0.12);
  background: rgba(211,196,239,0.04);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.3);
    background: rgba(211,196,239,0.08);
  }
`,Ev=u.div`
  font-family: ${C.heading};
  font-size: 32px;
  color: rgba(176,149,227,0.3);
  margin-bottom: 8px;
`,Mv=u.h3`
  font-family: ${C.body};
  font-size: 15px;
  font-weight: 600;
  color: #EEE7F9;
  margin: 0;
`,Cv=u.section`
  margin-bottom: 56px;
`,Av=u(xt)`
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
`,kv=u.span`
  font-size: 24px;
`,Dv=u.span`
  font-family: ${C.body};
  font-size: 14px;
  color: #B095E3;
`,Lv=u.section`
  max-width: 860px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,Ov=u.h2`
  font-family: ${C.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`,Bv=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`,Uv=u(xt)`
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
`,Rv=u.h3`
  font-family: ${C.heading};
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 6px;
`,Nv=u.p`
  font-family: ${C.body};
  font-size: 13px;
  color: rgba(238,231,249,0.5);
  line-height: 1.5;
  margin: 0;
`,$i={"starter-kit":"Starter Kit",beginner:"Beginner",intermediate:"Intermediate",advanced:"Advanced","add-on":"Add-On"};function Hv(r){const p=[];return p.push({heading:"About This Course",content:`${r.description}

This course is part of the ${r.roadmapName} roadmap at Margg. It is categorised as a ${$i[r.level]||r.level} course, designed to ${r.level==="starter-kit"?"build your foundational skills before you dive into specialised topics":r.level==="beginner"?"introduce you to the core concepts and give you hands-on experience from day one":r.level==="intermediate"?"deepen your understanding and prepare you for advanced challenges":r.level==="advanced"?"push your skills to a professional level with complex, real-world scenarios":"add specialised expertise to your skill set beyond the core curriculum"}.

At Margg, we believe in roadmap-based learning where every course connects to the next, building a coherent path from beginner to job-ready professional. Each module includes hands-on projects, mentor-reviewed assignments, and community discussions.`}),r.sections?.length>0&&p.push({heading:"Course Curriculum",content:`This course is structured into ${r.sections.length} modules, each building on the previous one. You'll progress through the following topics:`,list:r.sections.map((h,d)=>`Module ${d+1}: ${h} — Hands-on exercises, quizzes, and a mini-project`)}),p.push({heading:"What You'll Gain",content:"By completing this course, you will:",list:[`Deep understanding of ${r.title.toLowerCase()} concepts and best practices`,"Hands-on experience through real-world projects and exercises","Mentor-reviewed code and design feedback","Industry-aligned skills that employers are actively hiring for","A portfolio project you can showcase in interviews","Streak tracking and XP rewards to keep you motivated"]}),p.push({heading:"Who Is This Course For?",content:"This course is designed for:",list:["College students (2nd to 4th year) looking to build practical, career-ready skills","Fresh graduates preparing for technical interviews and their first role","Working professionals looking to upskill or transition into a new domain","Self-taught learners who need structured guidance and mentorship",`Anyone interested in ${r.roadmapName.toLowerCase()} as a career path`]}),p.push({heading:"How Margg's Learning Works",content:`Every Margg course follows our proven roadmap-based methodology:

1. Visual Roadmap — See the complete path from start to finish. Know exactly what to learn, in what order, and why.
2. Structured Modules — Each module (${r.duration} total) includes live sessions, recorded content, and hands-on exercises.
3. Mentor Check-ins — Your assigned mentor reviews your work, provides feedback, and answers your questions.
4. Streak Tracking — Build daily learning habits with our streak system. Earn XP and level up from Bronze to Diamond.
5. Community — Connect with peers, share progress, and collaborate on projects.
6. Interview Prep — Every course ends with an interview preparation module specific to the domain.`}),p}function $v(r){return[{question:`Do I need prior experience to take ${r.title}?`,answer:r.level==="starter-kit"||r.level==="beginner"?"No prior experience is required. This course starts from the fundamentals and builds up progressively. Basic computer literacy is all you need.":`This is a ${$i[r.level].toLowerCase()}-level course, so familiarity with the prerequisite topics is recommended. Check the roadmap order to see what courses come before this one.`},{question:"What is the format of the course?",answer:`The course runs for ${r.duration} with live sessions, recorded content, hands-on projects, and mentor feedback. All sessions are recorded and available on-demand. You'll need approximately 10-15 hours per week.`},{question:"Will I receive a certificate?",answer:"Yes. Upon completing all modules and the final project, you'll receive a Margg course completion certificate that you can add to your LinkedIn profile and resume."},{question:"Is this course available online?",answer:"Yes, 100% online. Whether you're in Bangalore, Chennai, Hyderabad, Delhi, or any other city in India, you can access the full course, mentorship, and community remotely."},{question:"How does this course fit into the overall roadmap?",answer:`This course is part of the ${r.roadmapName} roadmap at Margg. It's categorised as a ${$i[r.level]} course. You can view the complete roadmap to see how this course connects to others in the learning path.`}]}const qv=u.section`
  max-width: 860px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`,_v=u.h2`
  font-family: ${C.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`,Yv=u.details`
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
`,Gv=u.summary`
  font-family: ${C.body};
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
`,Qv=u.div`
  font-family: ${C.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`;function Xv(){const{courseSlug:r}=hc(),p=b0[r];if(!p)return s.jsxs(Ip,{children:[s.jsx(ka,{}),s.jsx(Pp,{children:s.jsxs(e0,{children:[s.jsx(t0,{children:"Course Not Found"}),s.jsx(i0,{children:"The course you're looking for doesn't exist."}),s.jsx(a0,{href:"/roadmaps",children:"Browse All Roadmaps"})]})}),s.jsx(Da,{})]});const h=Hv(p),d=$v(p),x=bs.roadmaps.find(L=>L.slug===p.roadmapSlug),w=x?[...x.starterKit,...x.levels,...x.addOns].filter(L=>L.slug!==r).slice(0,4):[],T=fs[r]||[];return s.jsxs(Ip,{children:[s.jsx(ka,{}),s.jsx(Pp,{children:s.jsxs(e0,{children:[s.jsxs(xv,{children:[s.jsx(xt,{to:"/",children:"Home"})," /"," ",s.jsx(xt,{to:"/roadmaps",children:"Roadmaps"})," /"," ",s.jsx(xt,{to:`/roadmap/${p.roadmapSlug}`,children:p.roadmapName})," ","/ ",s.jsx("span",{children:p.title})]}),s.jsx(yv,{className:p.level,children:$i[p.level]}),s.jsx(t0,{children:p.title}),s.jsx(bv,{children:p.description}),s.jsxs(vv,{children:[s.jsxs(dc,{children:["⏱ ",p.duration]}),s.jsxs(dc,{children:[p.roadmapIcon," ",p.roadmapName]}),s.jsxs(dc,{children:["📋 ",p.sections?.length||0," modules"]})]}),s.jsx(a0,{href:"/#contact-learner",children:"Join the Waitlist"})]})}),s.jsxs(wv,{children:[p.sections?.length>0&&s.jsxs(n0,{children:[s.jsx(fc,{children:"Course Modules"}),s.jsx(zv,{children:p.sections.map((L,k)=>s.jsxs(Tv,{children:[s.jsx(Ev,{children:String(k+1).padStart(2,"0")}),s.jsx(Mv,{children:L})]},k))})]}),h.map((L,k)=>s.jsxs(n0,{children:[s.jsx(fc,{children:L.heading}),s.jsx(i0,{children:L.content}),L.list&&s.jsx(Sv,{children:L.list.map((N,_)=>s.jsx(jv,{children:N},_))})]},k)),T.length>0&&s.jsxs(Cv,{children:[s.jsx(fc,{children:"Part Of These Roadmaps"}),s.jsx("div",{children:T.map(L=>s.jsxs(Av,{to:`/roadmap/${L.slug}`,children:[s.jsx(kv,{children:L.icon}),s.jsx(Dv,{children:L.name})]},L.slug))})]})]}),s.jsxs(qv,{children:[s.jsx(_v,{children:"Frequently Asked Questions"}),d.map((L,k)=>s.jsxs(Yv,{children:[s.jsx(Gv,{children:L.question}),s.jsx(Qv,{children:L.answer})]},k))]}),w.length>0&&s.jsxs(Lv,{children:[s.jsxs(Ov,{children:["More in ",p.roadmapName]}),s.jsx(Bv,{children:w.map(L=>s.jsxs(Uv,{to:`/course/${L.slug}`,children:[s.jsx(Rv,{children:L.title}),s.jsxs(Nv,{children:[$i[L.level]," · ",L.duration]})]},L.slug))})]}),s.jsx(Da,{})]})}function Vv(){return s.jsxs(Jh,{children:[s.jsx(Bi,{path:"/",element:s.jsx(Ky,{})}),s.jsx(Bi,{path:"/roadmaps",element:s.jsx($b,{})}),s.jsx(Bi,{path:"/roadmap/:roadmapSlug",element:s.jsx(mv,{})}),s.jsx(Bi,{path:"/course/:courseSlug",element:s.jsx(Xv,{})}),s.jsx(Bi,{path:"/:slug",element:s.jsx(mb,{})})]})}const Zv=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const Kv=Xh({reducer:{app:lm,content:xm},preloadedState:Zv});nm.hydrateRoot(document.getElementById("root"),s.jsx(O.StrictMode,{children:s.jsx(Vh,{store:Kv,children:s.jsx(Fh,{children:s.jsx(Vv,{})})})}));
