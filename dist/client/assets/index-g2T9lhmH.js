(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function c(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(s){if(s.ep)return;s.ep=!0;const f=c(s);fetch(s.href,f)}})();function Ox(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var js={exports:{}},ji={};var Yh;function Dx(){if(Yh)return ji;Yh=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(o,s,f){var p=null;if(f!==void 0&&(p=""+f),s.key!==void 0&&(p=""+s.key),"key"in s){f={};for(var x in s)x!=="key"&&(f[x]=s[x])}else f=s;return s=f.ref,{$$typeof:a,type:o,key:p,ref:s!==void 0?s:null,props:f}}return ji.Fragment=i,ji.jsx=c,ji.jsxs=c,ji}var qh;function Nx(){return qh||(qh=1,js.exports=Dx()),js.exports}var h=Nx(),As={exports:{}},ue={};var Gh;function Lx(){if(Gh)return ue;Gh=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),p=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),D=Symbol.iterator;function q(C){return C===null||typeof C!="object"?null:(C=D&&C[D]||C["@@iterator"],typeof C=="function"?C:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,R={};function X(C,H,I){this.props=C,this.context=H,this.refs=R,this.updater=I||B}X.prototype.isReactComponent={},X.prototype.setState=function(C,H){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,H,"setState")},X.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Z(){}Z.prototype=X.prototype;function V(C,H,I){this.props=C,this.context=H,this.refs=R,this.updater=I||B}var M=V.prototype=new Z;M.constructor=V,G(M,X.prototype),M.isPureReactComponent=!0;var Q=Array.isArray;function J(){}var N={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function de(C,H,I){var P=I.ref;return{$$typeof:a,type:C,key:H,ref:P!==void 0?P:null,props:I}}function k(C,H){return de(C.type,H,C.props)}function W(C){return typeof C=="object"&&C!==null&&C.$$typeof===a}function ae(C){var H={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(I){return H[I]})}var ve=/\/+/g;function Ye(C,H){return typeof C=="object"&&C!==null&&C.key!=null?ae(""+C.key):H.toString(36)}function Ne(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(J,J):(C.status="pending",C.then(function(H){C.status==="pending"&&(C.status="fulfilled",C.value=H)},function(H){C.status==="pending"&&(C.status="rejected",C.reason=H)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function L(C,H,I,P,re){var oe=typeof C;(oe==="undefined"||oe==="boolean")&&(C=null);var he=!1;if(C===null)he=!0;else switch(oe){case"bigint":case"string":case"number":he=!0;break;case"object":switch(C.$$typeof){case a:case i:he=!0;break;case b:return he=C._init,L(he(C._payload),H,I,P,re)}}if(he)return re=re(C),he=P===""?"."+Ye(C,0):P,Q(re)?(I="",he!=null&&(I=he.replace(ve,"$&/")+"/"),L(re,H,I,"",function(ht){return ht})):re!=null&&(W(re)&&(re=k(re,I+(re.key==null||C&&C.key===re.key?"":(""+re.key).replace(ve,"$&/")+"/")+he)),H.push(re)),1;he=0;var Ke=P===""?".":P+":";if(Q(C))for(var Le=0;Le<C.length;Le++)P=C[Le],oe=Ke+Ye(P,Le),he+=L(P,H,I,oe,re);else if(Le=q(C),typeof Le=="function")for(C=Le.call(C),Le=0;!(P=C.next()).done;)P=P.value,oe=Ke+Ye(P,Le++),he+=L(P,H,I,oe,re);else if(oe==="object"){if(typeof C.then=="function")return L(Ne(C),H,I,P,re);throw H=String(C),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return he}function F(C,H,I){if(C==null)return C;var P=[],re=0;return L(C,P,"","",function(oe){return H.call(I,oe,re++)}),P}function le(C){if(C._status===-1){var H=C._result;H=H(),H.then(function(I){(C._status===0||C._status===-1)&&(C._status=1,C._result=I)},function(I){(C._status===0||C._status===-1)&&(C._status=2,C._result=I)}),C._status===-1&&(C._status=0,C._result=H)}if(C._status===1)return C._result.default;throw C._result}var pe=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},we={map:F,forEach:function(C,H,I){F(C,function(){H.apply(this,arguments)},I)},count:function(C){var H=0;return F(C,function(){H++}),H},toArray:function(C){return F(C,function(H){return H})||[]},only:function(C){if(!W(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ue.Activity=v,ue.Children=we,ue.Component=X,ue.Fragment=c,ue.Profiler=s,ue.PureComponent=V,ue.StrictMode=o,ue.Suspense=g,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ue.__COMPILER_RUNTIME={__proto__:null,c:function(C){return N.H.useMemoCache(C)}},ue.cache=function(C){return function(){return C.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(C,H,I){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var P=G({},C.props),re=C.key;if(H!=null)for(oe in H.key!==void 0&&(re=""+H.key),H)!K.call(H,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&H.ref===void 0||(P[oe]=H[oe]);var oe=arguments.length-2;if(oe===1)P.children=I;else if(1<oe){for(var he=Array(oe),Ke=0;Ke<oe;Ke++)he[Ke]=arguments[Ke+2];P.children=he}return de(C.type,re,P)},ue.createContext=function(C){return C={$$typeof:p,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},ue.createElement=function(C,H,I){var P,re={},oe=null;if(H!=null)for(P in H.key!==void 0&&(oe=""+H.key),H)K.call(H,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(re[P]=H[P]);var he=arguments.length-2;if(he===1)re.children=I;else if(1<he){for(var Ke=Array(he),Le=0;Le<he;Le++)Ke[Le]=arguments[Le+2];re.children=Ke}if(C&&C.defaultProps)for(P in he=C.defaultProps,he)re[P]===void 0&&(re[P]=he[P]);return de(C,oe,re)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(C){return{$$typeof:x,render:C}},ue.isValidElement=W,ue.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:le}},ue.memo=function(C,H){return{$$typeof:y,type:C,compare:H===void 0?null:H}},ue.startTransition=function(C){var H=N.T,I={};N.T=I;try{var P=C(),re=N.S;re!==null&&re(I,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(J,pe)}catch(oe){pe(oe)}finally{H!==null&&I.types!==null&&(H.types=I.types),N.T=H}},ue.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ue.use=function(C){return N.H.use(C)},ue.useActionState=function(C,H,I){return N.H.useActionState(C,H,I)},ue.useCallback=function(C,H){return N.H.useCallback(C,H)},ue.useContext=function(C){return N.H.useContext(C)},ue.useDebugValue=function(){},ue.useDeferredValue=function(C,H){return N.H.useDeferredValue(C,H)},ue.useEffect=function(C,H){return N.H.useEffect(C,H)},ue.useEffectEvent=function(C){return N.H.useEffectEvent(C)},ue.useId=function(){return N.H.useId()},ue.useImperativeHandle=function(C,H,I){return N.H.useImperativeHandle(C,H,I)},ue.useInsertionEffect=function(C,H){return N.H.useInsertionEffect(C,H)},ue.useLayoutEffect=function(C,H){return N.H.useLayoutEffect(C,H)},ue.useMemo=function(C,H){return N.H.useMemo(C,H)},ue.useOptimistic=function(C,H){return N.H.useOptimistic(C,H)},ue.useReducer=function(C,H,I){return N.H.useReducer(C,H,I)},ue.useRef=function(C){return N.H.useRef(C)},ue.useState=function(C){return N.H.useState(C)},ue.useSyncExternalStore=function(C,H,I){return N.H.useSyncExternalStore(C,H,I)},ue.useTransition=function(){return N.H.useTransition()},ue.version="19.2.4",ue}var Vh;function Gu(){return Vh||(Vh=1,As.exports=Lx()),As.exports}var E=Gu();const _l=Ox(E);var Rs={exports:{}},Ai={},Ms={exports:{}},Os={};var Xh;function Ux(){return Xh||(Xh=1,(function(a){function i(L,F){var le=L.length;L.push(F);e:for(;0<le;){var pe=le-1>>>1,we=L[pe];if(0<s(we,F))L[pe]=F,L[le]=we,le=pe;else break e}}function c(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var F=L[0],le=L.pop();if(le!==F){L[0]=le;e:for(var pe=0,we=L.length,C=we>>>1;pe<C;){var H=2*(pe+1)-1,I=L[H],P=H+1,re=L[P];if(0>s(I,le))P<we&&0>s(re,I)?(L[pe]=re,L[P]=le,pe=P):(L[pe]=I,L[H]=le,pe=H);else if(P<we&&0>s(re,le))L[pe]=re,L[P]=le,pe=P;else break e}}return F}function s(L,F){var le=L.sortIndex-F.sortIndex;return le!==0?le:L.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var p=Date,x=p.now();a.unstable_now=function(){return p.now()-x}}var g=[],y=[],b=1,v=null,D=3,q=!1,B=!1,G=!1,R=!1,X=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function M(L){for(var F=c(y);F!==null;){if(F.callback===null)o(y);else if(F.startTime<=L)o(y),F.sortIndex=F.expirationTime,i(g,F);else break;F=c(y)}}function Q(L){if(G=!1,M(L),!B)if(c(g)!==null)B=!0,J||(J=!0,ae());else{var F=c(y);F!==null&&Ne(Q,F.startTime-L)}}var J=!1,N=-1,K=5,de=-1;function k(){return R?!0:!(a.unstable_now()-de<K)}function W(){if(R=!1,J){var L=a.unstable_now();de=L;var F=!0;try{e:{B=!1,G&&(G=!1,Z(N),N=-1),q=!0;var le=D;try{t:{for(M(L),v=c(g);v!==null&&!(v.expirationTime>L&&k());){var pe=v.callback;if(typeof pe=="function"){v.callback=null,D=v.priorityLevel;var we=pe(v.expirationTime<=L);if(L=a.unstable_now(),typeof we=="function"){v.callback=we,M(L),F=!0;break t}v===c(g)&&o(g),M(L)}else o(g);v=c(g)}if(v!==null)F=!0;else{var C=c(y);C!==null&&Ne(Q,C.startTime-L),F=!1}}break e}finally{v=null,D=le,q=!1}F=void 0}}finally{F?ae():J=!1}}}var ae;if(typeof V=="function")ae=function(){V(W)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Ye=ve.port2;ve.port1.onmessage=W,ae=function(){Ye.postMessage(null)}}else ae=function(){X(W,0)};function Ne(L,F){N=X(function(){L(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return D},a.unstable_next=function(L){switch(D){case 1:case 2:case 3:var F=3;break;default:F=D}var le=D;D=F;try{return L()}finally{D=le}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var le=D;D=L;try{return F()}finally{D=le}},a.unstable_scheduleCallback=function(L,F,le){var pe=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?pe+le:pe):le=pe,L){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=le+we,L={id:b++,callback:F,priorityLevel:L,startTime:le,expirationTime:we,sortIndex:-1},le>pe?(L.sortIndex=le,i(y,L),c(g)===null&&L===c(y)&&(G?(Z(N),N=-1):G=!0,Ne(Q,le-pe))):(L.sortIndex=we,i(g,L),B||q||(B=!0,J||(J=!0,ae()))),L},a.unstable_shouldYield=k,a.unstable_wrapCallback=function(L){var F=D;return function(){var le=D;D=F;try{return L.apply(this,arguments)}finally{D=le}}}})(Os)),Os}var Qh;function Bx(){return Qh||(Qh=1,Ms.exports=Ux()),Ms.exports}var Ds={exports:{}},ft={};var Zh;function Hx(){if(Zh)return ft;Zh=1;var a=Gu();function i(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},s=Symbol.for("react.portal");function f(g,y,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:g,containerInfo:y,implementation:b}}var p=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ft.createPortal=function(g,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return f(g,y,null,b)},ft.flushSync=function(g){var y=p.T,b=o.p;try{if(p.T=null,o.p=2,g)return g()}finally{p.T=y,o.p=b,o.d.f()}},ft.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(g,y))},ft.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ft.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var b=y.as,v=x(b,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?o.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:v,integrity:D,fetchPriority:q}):b==="script"&&o.d.X(g,{crossOrigin:v,integrity:D,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ft.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=x(y.as,y.crossOrigin);o.d.M(g,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(g)},ft.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,v=x(b,y.crossOrigin);o.d.L(g,b,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ft.preloadModule=function(g,y){if(typeof g=="string")if(y){var b=x(y.as,y.crossOrigin);o.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(g)},ft.requestFormReset=function(g){o.d.r(g)},ft.unstable_batchedUpdates=function(g,y){return g(y)},ft.useFormState=function(g,y,b){return p.H.useFormState(g,y,b)},ft.useFormStatus=function(){return p.H.useHostTransitionStatus()},ft.version="19.2.4",ft}var Kh;function $x(){if(Kh)return Ds.exports;Kh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Ds.exports=Hx(),Ds.exports}var Jh;function kx(){if(Jh)return Ai;Jh=1;var a=Bx(),i=Gu(),c=$x();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),e;if(u===l)return g(r),t;u=u.sibling}throw Error(o(188))}if(n.return!==l.return)n=r,l=u;else{for(var d=!1,m=r.child;m;){if(m===n){d=!0,n=r,l=u;break}if(m===l){d=!0,l=r,n=u;break}m=m.sibling}if(!d){for(m=u.child;m;){if(m===n){d=!0,n=u,l=r;break}if(m===l){d=!0,l=u,n=r;break}m=m.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,D=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),V=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case X:return"Profiler";case R:return"StrictMode";case Q:return"Suspense";case J:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case V:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case M:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var Ne=Array.isArray,L=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},pe=[],we=-1;function C(e){return{current:e}}function H(e){0>we||(e.current=pe[we],pe[we]=null,we--)}function I(e,t){we++,pe[we]=e.current,e.current=t}var P=C(null),re=C(null),oe=C(null),he=C(null);function Ke(e,t){switch(I(oe,t),I(re,e),I(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sh(t),e=fh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(P),I(P,e)}function Le(){H(P),H(re),H(oe)}function ht(e){e.memoizedState!==null&&I(he,e);var t=P.current,n=fh(t,e.type);t!==n&&(I(re,e),I(P,n))}function Hn(e){re.current===e&&(H(P),H(re)),he.current===e&&(H(he),Ci._currentValue=le)}var $n,dn;function ha(e){if($n===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$n=t&&t[1]||"",dn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$n+e+dn}var so=!1;function fo(e,t){if(!e||so)return"";so=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(O){var A=O}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(O){A=O}e.call(Y.prototype)}}else{try{throw Error()}catch(O){A=O}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(O){if(O&&A&&typeof O.stack=="string")return[O.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),d=u[0],m=u[1];if(d&&m){var S=d.split(`
`),j=m.split(`
`);for(r=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;r<j.length&&!j[r].includes("DetermineComponentFrameRoot");)r++;if(l===S.length||r===j.length)for(l=S.length-1,r=j.length-1;1<=l&&0<=r&&S[l]!==j[r];)r--;for(;1<=l&&0<=r;l--,r--)if(S[l]!==j[r]){if(l!==1||r!==1)do if(l--,r--,0>r||S[l]!==j[r]){var U=`
`+S[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=r);break}}}finally{so=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function cg(e,t){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return e.child!==t&&t!==null?ha("Suspense Fallback"):ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return fo(e.type,!1);case 11:return fo(e.type.render,!1);case 1:return fo(e.type,!0);case 31:return ha("Activity");default:return""}}function Yf(e){try{var t="",n=null;do t+=cg(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var po=Object.prototype.hasOwnProperty,ho=a.unstable_scheduleCallback,mo=a.unstable_cancelCallback,sg=a.unstable_shouldYield,fg=a.unstable_requestPaint,zt=a.unstable_now,dg=a.unstable_getCurrentPriorityLevel,qf=a.unstable_ImmediatePriority,Gf=a.unstable_UserBlockingPriority,Fi=a.unstable_NormalPriority,pg=a.unstable_LowPriority,Vf=a.unstable_IdlePriority,hg=a.log,mg=a.unstable_setDisableYieldValue,Ul=null,jt=null;function kn(e){if(typeof hg=="function"&&mg(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Ul,e)}catch{}}var At=Math.clz32?Math.clz32:xg,gg=Math.log,yg=Math.LN2;function xg(e){return e>>>=0,e===0?32:31-(gg(e)/yg|0)|0}var Ii=256,Pi=262144,er=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tr(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~u,l!==0?r=ma(l):(d&=m,d!==0?r=ma(d):n||(n=m&~e,n!==0&&(r=ma(n))))):(m=l&~u,m!==0?r=ma(m):d!==0?r=ma(d):n||(n=l&~e,n!==0&&(r=ma(n)))),r===0?0:t!==0&&t!==r&&(t&u)===0&&(u=r&-r,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:r}function Bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xf(){var e=er;return er<<=1,(er&62914560)===0&&(er=4194304),e}function go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bg(e,t,n,l,r,u){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var m=e.entanglements,S=e.expirationTimes,j=e.hiddenUpdates;for(n=d&~n;0<n;){var U=31-At(n),Y=1<<U;m[U]=0,S[U]=-1;var A=j[U];if(A!==null)for(j[U]=null,U=0;U<A.length;U++){var O=A[U];O!==null&&(O.lane&=-536870913)}n&=~Y}l!==0&&Qf(e,l,0),u!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function Qf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-At(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Zf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-At(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function Kf(e,t){var n=t&-t;return n=(n&42)!==0?1:yo(n),(n&(e.suspendedLanes|t))!==0?0:n}function yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jf(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Nh(e.type))}function Wf(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Yn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Yn,vt="__reactProps$"+Yn,$a="__reactContainer$"+Yn,vo="__reactEvents$"+Yn,Sg="__reactListeners$"+Yn,wg="__reactHandles$"+Yn,Ff="__reactResources$"+Yn,$l="__reactMarker$"+Yn;function bo(e){delete e[lt],delete e[vt],delete e[vo],delete e[Sg],delete e[wg]}function ka(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$a]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xh(e);e!==null;){if(n=e[lt])return n;e=xh(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){if(e=e[lt]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function qa(e){var t=e[Ff];return t||(t=e[Ff]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[$l]=!0}var If=new Set,Pf={};function ga(e,t){Ga(e,t),Ga(e+"Capture",t)}function Ga(e,t){for(Pf[e]=t,e=0;e<t.length;e++)If.add(t[e])}var Eg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ed={},td={};function Cg(e){return po.call(td,e)?!0:po.call(ed,e)?!1:Eg.test(e)?td[e]=!0:(ed[e]=!0,!1)}function nr(e,t,n){if(Cg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ar(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function pn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _g(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){if(!e._valueTracker){var t=nd(e)?"checked":"value";e._valueTracker=_g(e,t,""+e[t])}}function ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=nd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tg=/[\n"\\]/g;function kt(e){return e.replace(Tg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wo(e,t,n,l,r,u,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Eo(e,d,$t(t)):n!=null?Eo(e,d,$t(n)):l!=null&&e.removeAttribute("value"),r==null&&u!=null&&(e.defaultChecked=!!u),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+$t(m):e.removeAttribute("name")}function ld(e,t,n,l,r,u,d,m){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){So(e);return}n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),So(e)}function Eo(e,t,n){t==="number"&&lr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Va(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function id(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function rd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(Ne(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),So(e)}function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ud(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||zg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function od(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&ud(e,r,l)}else for(var u in t)t.hasOwnProperty(u)&&ud(e,u,t[u])}function Co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ag=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ir(e){return Ag.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function hn(){}var _o=null;function To(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Za=null;function cd(e){var t=Ya(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(wo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[vt]||null;if(!r)throw Error(o(90));wo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ad(l)}break e;case"textarea":id(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Va(e,!!n.multiple,t,!1)}}}var zo=!1;function sd(e,t,n){if(zo)return e(t,n);zo=!0;try{var l=e(t);return l}finally{if(zo=!1,(Qa!==null||Za!==null)&&(Qr(),Qa&&(t=Qa,e=Za,Za=Qa=null,cd(t),e)))for(t=0;t<e.length;t++)cd(e[t])}}function Yl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[vt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=!1;if(mn)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){jo=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{jo=!1}var qn=null,Ao=null,rr=null;function fd(){if(rr)return rr;var e,t=Ao,n=t.length,l,r="value"in qn?qn.value:qn.textContent,u=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(l=1;l<=d&&t[n-l]===r[u-l];l++);return rr=r.slice(e,1<l?1-l:void 0)}function ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function or(){return!0}function dd(){return!1}function bt(e){function t(n,l,r,u,d){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(n=e[m],this[m]=n?n(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?or:dd,this.isPropagationStopped=dd,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=or)},persist:function(){},isPersistent:or}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=bt(ya),Gl=v({},ya,{view:0,detail:0}),Rg=bt(Gl),Ro,Mo,Vl,sr=v({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Do,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(Ro=e.screenX-Vl.screenX,Mo=e.screenY-Vl.screenY):Mo=Ro=0,Vl=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),pd=bt(sr),Mg=v({},sr,{dataTransfer:0}),Og=bt(Mg),Dg=v({},Gl,{relatedTarget:0}),Oo=bt(Dg),Ng=v({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=bt(Ng),Ug=v({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bg=bt(Ug),Hg=v({},ya,{data:0}),hd=bt(Hg),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yg[e])?!!t[e]:!1}function Do(){return qg}var Gg=v({},Gl,{key:function(e){if(e.key){var t=$g[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Do,charCode:function(e){return e.type==="keypress"?ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vg=bt(Gg),Xg=v({},sr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=bt(Xg),Qg=v({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Do}),Zg=bt(Qg),Kg=v({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=bt(Kg),Wg=v({},sr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=bt(Wg),Ig=v({},ya,{newState:0,oldState:0}),Pg=bt(Ig),ey=[9,13,27,32],No=mn&&"CompositionEvent"in window,Xl=null;mn&&"documentMode"in document&&(Xl=document.documentMode);var ty=mn&&"TextEvent"in window&&!Xl,gd=mn&&(!No||Xl&&8<Xl&&11>=Xl),yd=" ",xd=!1;function vd(e,t){switch(e){case"keyup":return ey.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function ny(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(xd=!0,yd);case"textInput":return e=t.data,e===yd&&xd?null:e;default:return null}}function ay(e,t){if(Ka)return e==="compositionend"||!No&&vd(e,t)?(e=fd(),rr=Ao=qn=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gd&&t.locale!=="ko"?null:t.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ly[e.type]:t==="textarea"}function wd(e,t,n,l){Qa?Za?Za.push(l):Za=[l]:Qa=l,t=Pr(t,"onChange"),0<t.length&&(n=new cr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ql=null,Zl=null;function iy(e){lh(e,0)}function fr(e){var t=kl(e);if(ad(t))return e}function Ed(e,t){if(e==="change")return t}var Cd=!1;if(mn){var Lo;if(mn){var Uo="oninput"in document;if(!Uo){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),Uo=typeof _d.oninput=="function"}Lo=Uo}else Lo=!1;Cd=Lo&&(!document.documentMode||9<document.documentMode)}function Td(){Ql&&(Ql.detachEvent("onpropertychange",zd),Zl=Ql=null)}function zd(e){if(e.propertyName==="value"&&fr(Zl)){var t=[];wd(t,Zl,e,To(e)),sd(iy,t)}}function ry(e,t,n){e==="focusin"?(Td(),Ql=t,Zl=n,Ql.attachEvent("onpropertychange",zd)):e==="focusout"&&Td()}function uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fr(Zl)}function oy(e,t){if(e==="click")return fr(t)}function cy(e,t){if(e==="input"||e==="change")return fr(t)}function sy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:sy;function Kl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!po.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,t){var n=jd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jd(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Md(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=lr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lr(e.document)}return t}function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fy=mn&&"documentMode"in document&&11>=document.documentMode,Ja=null,Ho=null,Jl=null,$o=!1;function Od(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$o||Ja==null||Ja!==lr(l)||(l=Ja,"selectionStart"in l&&Bo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jl&&Kl(Jl,l)||(Jl=l,l=Pr(Ho,"onSelect"),0<l.length&&(t=new cr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ja)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},ko={},Dd={};mn&&(Dd=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function va(e){if(ko[e])return ko[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dd)return ko[e]=t[n];return e}var Nd=va("animationend"),Ld=va("animationiteration"),Ud=va("animationstart"),dy=va("transitionrun"),py=va("transitionstart"),hy=va("transitioncancel"),Bd=va("transitionend"),Hd=new Map,Yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yo.push("scrollEnd");function Ft(e,t){Hd.set(e,t),ga(t,[e])}var dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Yt=[],Fa=0,qo=0;function pr(){for(var e=Fa,t=qo=Fa=0;t<e;){var n=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var r=Yt[t];Yt[t++]=null;var u=Yt[t];if(Yt[t++]=null,l!==null&&r!==null){var d=l.pending;d===null?r.next=r:(r.next=d.next,d.next=r),l.pending=r}u!==0&&$d(n,r,u)}}function hr(e,t,n,l){Yt[Fa++]=e,Yt[Fa++]=t,Yt[Fa++]=n,Yt[Fa++]=l,qo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Go(e,t,n,l){return hr(e,t,n,l),mr(e)}function ba(e,t){return hr(e,null,null,t),mr(e)}function $d(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(r=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,r&&t!==null&&(r=31-At(n),e=u.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),u):null}function mr(e){if(50<yi)throw yi=0,Ic=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ia={};function my(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,l){return new my(e,t,n,l)}function Vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function kd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gr(e,t,n,l,r,u){var d=0;if(l=e,typeof e=="function")Vo(e)&&(d=1);else if(typeof e=="string")d=bx(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=Mt(31,n,t,r),e.elementType=de,e.lanes=u,e;case G:return Sa(n.children,r,u,t);case R:d=8,r|=24;break;case X:return e=Mt(12,n,t,r|2),e.elementType=X,e.lanes=u,e;case Q:return e=Mt(13,n,t,r),e.elementType=Q,e.lanes=u,e;case J:return e=Mt(19,n,t,r),e.elementType=J,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:d=10;break e;case Z:d=9;break e;case M:d=11;break e;case N:d=14;break e;case K:d=16,l=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Mt(d,n,t,r),t.elementType=e,t.type=l,t.lanes=u,t}function Sa(e,t,n,l){return e=Mt(7,e,l,t),e.lanes=n,e}function Xo(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Yd(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Qo(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qd=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var n=qd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Yf(t)},qd.set(e,t),t)}return{value:e,source:t,stack:Yf(t)}}var Pa=[],el=0,yr=null,Wl=0,Gt=[],Vt=0,Gn=null,rn=1,un="";function yn(e,t){Pa[el++]=Wl,Pa[el++]=yr,yr=e,Wl=t}function Gd(e,t,n){Gt[Vt++]=rn,Gt[Vt++]=un,Gt[Vt++]=Gn,Gn=e;var l=rn;e=un;var r=32-At(l)-1;l&=~(1<<r),n+=1;var u=32-At(t)+r;if(30<u){var d=r-r%5;u=(l&(1<<d)-1).toString(32),l>>=d,r-=d,rn=1<<32-At(t)+r|n<<r|l,un=u+e}else rn=1<<u|n<<r|l,un=e}function Zo(e){e.return!==null&&(yn(e,1),Gd(e,1,0))}function Ko(e){for(;e===yr;)yr=Pa[--el],Pa[el]=null,Wl=Pa[--el],Pa[el]=null;for(;e===Gn;)Gn=Gt[--Vt],Gt[Vt]=null,un=Gt[--Vt],Gt[Vt]=null,rn=Gt[--Vt],Gt[Vt]=null}function Vd(e,t){Gt[Vt++]=rn,Gt[Vt++]=un,Gt[Vt++]=Gn,rn=t.id,un=t.overflow,Gn=e}var it=null,Be=null,be=!1,Vn=null,Xt=!1,Jo=Error(o(519));function Xn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(qt(t,e)),Jo}function Xd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[lt]=e,t[vt]=l,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<vi.length;n++)ge(vi[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),ld(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),rd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||oh(t.textContent,n)?(l.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),l.onScroll!=null&&ge("scroll",t),l.onScrollEnd!=null&&ge("scrollend",t),l.onClick!=null&&(t.onclick=hn),t=!0):t=!1,t||Xn(e,!0)}function Qd(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:it=it.return}}function tl(e){if(e!==it)return!1;if(!be)return Qd(e),be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ps(e.type,e.memoizedProps)),n=!n),n&&Be&&Xn(e),Qd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Be=yh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Be=yh(e)}else t===27?(t=Be,ia(e.type)?(e=xs,xs=null,Be=e):Be=t):Be=it?Zt(e.stateNode.nextSibling):null;return!0}function wa(){Be=it=null,be=!1}function Wo(){var e=Vn;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Vn=null),e}function Fl(e){Vn===null?Vn=[e]:Vn.push(e)}var Fo=C(null),Ea=null,xn=null;function Qn(e,t,n){I(Fo,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=Fo.current,H(Fo)}function Io(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Po(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var u=r.dependencies;if(u!==null){var d=r.child;u=u.firstContext;e:for(;u!==null;){var m=u;u=r;for(var S=0;S<t.length;S++)if(m.context===t[S]){u.lanes|=n,m=u.alternate,m!==null&&(m.lanes|=n),Io(u.return,n,e),l||(d=null);break e}u=m.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(o(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),Io(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function nl(e,t,n,l){e=null;for(var r=t,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var m=r.type;Rt(r.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(r===he.current){if(d=r.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ci):e=[Ci])}r=r.return}e!==null&&Po(t,e,n,l),t.flags|=262144}function xr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Ea=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return Zd(Ea,e)}function vr(e,t){return Ea===null&&Ca(e),Zd(e,t)}function Zd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(o(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var gy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},yy=a.unstable_scheduleCallback,xy=a.unstable_NormalPriority,Je={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ec(){return{controller:new gy,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&yy(xy,function(){e.controller.abort()})}var Pl=null,tc=0,al=0,ll=null;function vy(e,t){if(Pl===null){var n=Pl=[];tc=0,al=ls(),ll={status:"pending",value:void 0,then:function(l){n.push(l)}}}return tc++,t.then(Kd,Kd),t}function Kd(){if(--tc===0&&Pl!==null){ll!==null&&(ll.status="fulfilled");var e=Pl;Pl=null,al=0,ll=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function by(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var Jd=L.S;L.S=function(e,t){Op=zt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vy(e,t),Jd!==null&&Jd(e,t)};var _a=C(null);function nc(){var e=_a.current;return e!==null?e:Ue.pooledCache}function br(e,t){t===null?I(_a,_a.current):I(_a,t.pool)}function Wd(){var e=nc();return e===null?null:{parent:Je._currentValue,pool:e}}var il=Error(o(460)),ac=Error(o(474)),Sr=Error(o(542)),wr={then:function(){}};function Fd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Id(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hn,hn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e0(e),e;default:if(typeof t.status=="string")t.then(hn,hn);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e0(e),e}throw za=t,il}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(za=n,il):n}}var za=null;function Pd(){if(za===null)throw Error(o(459));var e=za;return za=null,e}function e0(e){if(e===il||e===Sr)throw Error(o(483))}var rl=null,ei=0;function Er(e){var t=ei;return ei+=1,rl===null&&(rl=[]),Id(rl,e,t)}function ti(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cr(e,t){throw t.$$typeof===D?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function t0(e){function t(T,w){if(e){var z=T.deletions;z===null?(T.deletions=[w],T.flags|=16):z.push(w)}}function n(T,w){if(!e)return null;for(;w!==null;)t(T,w),w=w.sibling;return null}function l(T){for(var w=new Map;T!==null;)T.key!==null?w.set(T.key,T):w.set(T.index,T),T=T.sibling;return w}function r(T,w){return T=gn(T,w),T.index=0,T.sibling=null,T}function u(T,w,z){return T.index=z,e?(z=T.alternate,z!==null?(z=z.index,z<w?(T.flags|=67108866,w):z):(T.flags|=67108866,w)):(T.flags|=1048576,w)}function d(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function m(T,w,z,$){return w===null||w.tag!==6?(w=Xo(z,T.mode,$),w.return=T,w):(w=r(w,z),w.return=T,w)}function S(T,w,z,$){var ne=z.type;return ne===G?U(T,w,z.props.children,$,z.key):w!==null&&(w.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===K&&Ta(ne)===w.type)?(w=r(w,z.props),ti(w,z),w.return=T,w):(w=gr(z.type,z.key,z.props,null,T.mode,$),ti(w,z),w.return=T,w)}function j(T,w,z,$){return w===null||w.tag!==4||w.stateNode.containerInfo!==z.containerInfo||w.stateNode.implementation!==z.implementation?(w=Qo(z,T.mode,$),w.return=T,w):(w=r(w,z.children||[]),w.return=T,w)}function U(T,w,z,$,ne){return w===null||w.tag!==7?(w=Sa(z,T.mode,$,ne),w.return=T,w):(w=r(w,z),w.return=T,w)}function Y(T,w,z){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=Xo(""+w,T.mode,z),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case q:return z=gr(w.type,w.key,w.props,null,T.mode,z),ti(z,w),z.return=T,z;case B:return w=Qo(w,T.mode,z),w.return=T,w;case K:return w=Ta(w),Y(T,w,z)}if(Ne(w)||ae(w))return w=Sa(w,T.mode,z,null),w.return=T,w;if(typeof w.then=="function")return Y(T,Er(w),z);if(w.$$typeof===V)return Y(T,vr(T,w),z);Cr(T,w)}return null}function A(T,w,z,$){var ne=w!==null?w.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ne!==null?null:m(T,w,""+z,$);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case q:return z.key===ne?S(T,w,z,$):null;case B:return z.key===ne?j(T,w,z,$):null;case K:return z=Ta(z),A(T,w,z,$)}if(Ne(z)||ae(z))return ne!==null?null:U(T,w,z,$,null);if(typeof z.then=="function")return A(T,w,Er(z),$);if(z.$$typeof===V)return A(T,w,vr(T,z),$);Cr(T,z)}return null}function O(T,w,z,$,ne){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return T=T.get(z)||null,m(w,T,""+$,ne);if(typeof $=="object"&&$!==null){switch($.$$typeof){case q:return T=T.get($.key===null?z:$.key)||null,S(w,T,$,ne);case B:return T=T.get($.key===null?z:$.key)||null,j(w,T,$,ne);case K:return $=Ta($),O(T,w,z,$,ne)}if(Ne($)||ae($))return T=T.get(z)||null,U(w,T,$,ne,null);if(typeof $.then=="function")return O(T,w,z,Er($),ne);if($.$$typeof===V)return O(T,w,z,vr(w,$),ne);Cr(w,$)}return null}function ee(T,w,z,$){for(var ne=null,Ee=null,te=w,se=w=0,xe=null;te!==null&&se<z.length;se++){te.index>se?(xe=te,te=null):xe=te.sibling;var Ce=A(T,te,z[se],$);if(Ce===null){te===null&&(te=xe);break}e&&te&&Ce.alternate===null&&t(T,te),w=u(Ce,w,se),Ee===null?ne=Ce:Ee.sibling=Ce,Ee=Ce,te=xe}if(se===z.length)return n(T,te),be&&yn(T,se),ne;if(te===null){for(;se<z.length;se++)te=Y(T,z[se],$),te!==null&&(w=u(te,w,se),Ee===null?ne=te:Ee.sibling=te,Ee=te);return be&&yn(T,se),ne}for(te=l(te);se<z.length;se++)xe=O(te,T,se,z[se],$),xe!==null&&(e&&xe.alternate!==null&&te.delete(xe.key===null?se:xe.key),w=u(xe,w,se),Ee===null?ne=xe:Ee.sibling=xe,Ee=xe);return e&&te.forEach(function(sa){return t(T,sa)}),be&&yn(T,se),ne}function ie(T,w,z,$){if(z==null)throw Error(o(151));for(var ne=null,Ee=null,te=w,se=w=0,xe=null,Ce=z.next();te!==null&&!Ce.done;se++,Ce=z.next()){te.index>se?(xe=te,te=null):xe=te.sibling;var sa=A(T,te,Ce.value,$);if(sa===null){te===null&&(te=xe);break}e&&te&&sa.alternate===null&&t(T,te),w=u(sa,w,se),Ee===null?ne=sa:Ee.sibling=sa,Ee=sa,te=xe}if(Ce.done)return n(T,te),be&&yn(T,se),ne;if(te===null){for(;!Ce.done;se++,Ce=z.next())Ce=Y(T,Ce.value,$),Ce!==null&&(w=u(Ce,w,se),Ee===null?ne=Ce:Ee.sibling=Ce,Ee=Ce);return be&&yn(T,se),ne}for(te=l(te);!Ce.done;se++,Ce=z.next())Ce=O(te,T,se,Ce.value,$),Ce!==null&&(e&&Ce.alternate!==null&&te.delete(Ce.key===null?se:Ce.key),w=u(Ce,w,se),Ee===null?ne=Ce:Ee.sibling=Ce,Ee=Ce);return e&&te.forEach(function(Mx){return t(T,Mx)}),be&&yn(T,se),ne}function De(T,w,z,$){if(typeof z=="object"&&z!==null&&z.type===G&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case q:e:{for(var ne=z.key;w!==null;){if(w.key===ne){if(ne=z.type,ne===G){if(w.tag===7){n(T,w.sibling),$=r(w,z.props.children),$.return=T,T=$;break e}}else if(w.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===K&&Ta(ne)===w.type){n(T,w.sibling),$=r(w,z.props),ti($,z),$.return=T,T=$;break e}n(T,w);break}else t(T,w);w=w.sibling}z.type===G?($=Sa(z.props.children,T.mode,$,z.key),$.return=T,T=$):($=gr(z.type,z.key,z.props,null,T.mode,$),ti($,z),$.return=T,T=$)}return d(T);case B:e:{for(ne=z.key;w!==null;){if(w.key===ne)if(w.tag===4&&w.stateNode.containerInfo===z.containerInfo&&w.stateNode.implementation===z.implementation){n(T,w.sibling),$=r(w,z.children||[]),$.return=T,T=$;break e}else{n(T,w);break}else t(T,w);w=w.sibling}$=Qo(z,T.mode,$),$.return=T,T=$}return d(T);case K:return z=Ta(z),De(T,w,z,$)}if(Ne(z))return ee(T,w,z,$);if(ae(z)){if(ne=ae(z),typeof ne!="function")throw Error(o(150));return z=ne.call(z),ie(T,w,z,$)}if(typeof z.then=="function")return De(T,w,Er(z),$);if(z.$$typeof===V)return De(T,w,vr(T,z),$);Cr(T,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,w!==null&&w.tag===6?(n(T,w.sibling),$=r(w,z),$.return=T,T=$):(n(T,w),$=Xo(z,T.mode,$),$.return=T,T=$),d(T)):n(T,w)}return function(T,w,z,$){try{ei=0;var ne=De(T,w,z,$);return rl=null,ne}catch(te){if(te===il||te===Sr)throw te;var Ee=Mt(29,te,null,T.mode);return Ee.lanes=$,Ee.return=T,Ee}}}var ja=t0(!0),n0=t0(!1),Zn=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(_e&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=mr(e),$d(e,null,n),t}return hr(e,l,t,n),mr(e)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zf(e,n)}}function rc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?r=u=t:u=u.next=t}else r=u=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uc=!1;function ai(){if(uc){var e=ll;if(e!==null)throw e}}function li(e,t,n,l){uc=!1;var r=e.updateQueue;Zn=!1;var u=r.firstBaseUpdate,d=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var S=m,j=S.next;S.next=null,d===null?u=j:d.next=j,d=S;var U=e.alternate;U!==null&&(U=U.updateQueue,m=U.lastBaseUpdate,m!==d&&(m===null?U.firstBaseUpdate=j:m.next=j,U.lastBaseUpdate=S))}if(u!==null){var Y=r.baseState;d=0,U=j=S=null,m=u;do{var A=m.lane&-536870913,O=A!==m.lane;if(O?(ye&A)===A:(l&A)===A){A!==0&&A===al&&(uc=!0),U!==null&&(U=U.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var ee=e,ie=m;A=t;var De=n;switch(ie.tag){case 1:if(ee=ie.payload,typeof ee=="function"){Y=ee.call(De,Y,A);break e}Y=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ie.payload,A=typeof ee=="function"?ee.call(De,Y,A):ee,A==null)break e;Y=v({},Y,A);break e;case 2:Zn=!0}}A=m.callback,A!==null&&(e.flags|=64,O&&(e.flags|=8192),O=r.callbacks,O===null?r.callbacks=[A]:O.push(A))}else O={lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},U===null?(j=U=O,S=Y):U=U.next=O,d|=A;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;O=m,m=O.next,O.next=null,r.lastBaseUpdate=O,r.shared.pending=null}}while(!0);U===null&&(S=Y),r.baseState=S,r.firstBaseUpdate=j,r.lastBaseUpdate=U,u===null&&(r.shared.lanes=0),ea|=d,e.lanes=d,e.memoizedState=Y}}function a0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function l0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)a0(n[e],t)}var ul=C(null),_r=C(0);function i0(e,t){e=jn,I(_r,e),I(ul,t),jn=e|t.baseLanes}function oc(){I(_r,jn),I(ul,ul.current)}function cc(){jn=_r.current,H(ul),H(_r)}var Ot=C(null),Qt=null;function Wn(e){var t=e.alternate;I(Qe,Qe.current&1),I(Ot,e),Qt===null&&(t===null||ul.current!==null||t.memoizedState!==null)&&(Qt=e)}function sc(e){I(Qe,Qe.current),I(Ot,e),Qt===null&&(Qt=e)}function r0(e){e.tag===22?(I(Qe,Qe.current),I(Ot,e),Qt===null&&(Qt=e)):Fn()}function Fn(){I(Qe,Qe.current),I(Ot,Ot.current)}function Dt(e){H(Ot),Qt===e&&(Qt=null),H(Qe)}var Qe=C(0);function Tr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||gs(n)||ys(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bn=0,ce=null,Me=null,We=null,zr=!1,ol=!1,Aa=!1,jr=0,ii=0,cl=null,Sy=0;function Ve(){throw Error(o(321))}function fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function dc(e,t,n,l,r,u){return bn=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?G0:zc,Aa=!1,u=n(l,r),Aa=!1,ol&&(u=o0(t,n,l,r)),u0(e),u}function u0(e){L.H=oi;var t=Me!==null&&Me.next!==null;if(bn=0,We=Me=ce=null,zr=!1,ii=0,cl=null,t)throw Error(o(300));e===null||Fe||(e=e.dependencies,e!==null&&xr(e)&&(Fe=!0))}function o0(e,t,n,l){ce=e;var r=0;do{if(ol&&(cl=null),ii=0,ol=!1,25<=r)throw Error(o(301));if(r+=1,We=Me=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}L.H=V0,u=t(n,l)}while(ol);return u}function wy(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?ri(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(ce.flags|=1024),t}function pc(){var e=jr!==0;return jr=0,e}function hc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mc(e){if(zr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zr=!1}bn=0,We=Me=ce=null,ol=!1,ii=jr=0,cl=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ce.memoizedState=We=e:We=We.next=e,We}function Ze(){if(Me===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=We===null?ce.memoizedState:We.next;if(t!==null)We=t,Me=e;else{if(e===null)throw ce.alternate===null?Error(o(467)):Error(o(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},We===null?ce.memoizedState=We=e:We=We.next=e}return We}function Ar(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ri(e){var t=ii;return ii+=1,cl===null&&(cl=[]),e=Id(cl,e,t),t=ce,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?G0:zc),e}function Rr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ri(e);if(e.$$typeof===V)return rt(e)}throw Error(o(438,String(e)))}function gc(e){var t=null,n=ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ar(),ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=k;return t.index++,n}function Sn(e,t){return typeof t=="function"?t(e):t}function Mr(e){var t=Ze();return yc(t,Me,e)}function yc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var r=e.baseQueue,u=l.pending;if(u!==null){if(r!==null){var d=r.next;r.next=u.next,u.next=d}t.baseQueue=r=u,l.pending=null}if(u=e.baseState,r===null)e.memoizedState=u;else{t=r.next;var m=d=null,S=null,j=t,U=!1;do{var Y=j.lane&-536870913;if(Y!==j.lane?(ye&Y)===Y:(bn&Y)===Y){var A=j.revertLane;if(A===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Y===al&&(U=!0);else if((bn&A)===A){j=j.next,A===al&&(U=!0);continue}else Y={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(m=S=Y,d=u):S=S.next=Y,ce.lanes|=A,ea|=A;Y=j.action,Aa&&n(u,Y),u=j.hasEagerState?j.eagerState:n(u,Y)}else A={lane:Y,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(m=S=A,d=u):S=S.next=A,ce.lanes|=Y,ea|=Y;j=j.next}while(j!==null&&j!==t);if(S===null?d=u:S.next=m,!Rt(u,e.memoizedState)&&(Fe=!0,U&&(n=ll,n!==null)))throw n;e.memoizedState=u,e.baseState=d,e.baseQueue=S,l.lastRenderedState=u}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function xc(e){var t=Ze(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,u=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do u=e(u,d.action),d=d.next;while(d!==r);Rt(u,t.memoizedState)||(Fe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function c0(e,t,n){var l=ce,r=Ze(),u=be;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!Rt((Me||r).memoizedState,n);if(d&&(r.memoizedState=n,Fe=!0),r=r.queue,Sc(d0.bind(null,l,r,e),[e]),r.getSnapshot!==t||d||We!==null&&We.memoizedState.tag&1){if(l.flags|=2048,sl(9,{destroy:void 0},f0.bind(null,l,r,n,t),null),Ue===null)throw Error(o(349));u||(bn&127)!==0||s0(l,t,n)}return n}function s0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t=Ar(),ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function f0(e,t,n,l){t.value=n,t.getSnapshot=l,p0(t)&&h0(e)}function d0(e,t,n){return n(function(){p0(t)&&h0(e)})}function p0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function h0(e){var t=ba(e,2);t!==null&&_t(t,e,2)}function vc(e){var t=mt();if(typeof e=="function"){var n=e;if(e=n(),Aa){kn(!0);try{n()}finally{kn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},t}function m0(e,t,n,l){return e.baseState=n,yc(e,Me,typeof l=="function"?l:Sn)}function Ey(e,t,n,l,r){if(Nr(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};L.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,g0(t,u)):(u.next=n.next,t.pending=n.next=u)}}function g0(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var u=L.T,d={};L.T=d;try{var m=n(r,l),S=L.S;S!==null&&S(d,m),y0(e,t,m)}catch(j){bc(e,t,j)}finally{u!==null&&d.types!==null&&(u.types=d.types),L.T=u}}else try{u=n(r,l),y0(e,t,u)}catch(j){bc(e,t,j)}}function y0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){x0(e,t,l)},function(l){return bc(e,t,l)}):x0(e,t,n)}function x0(e,t,n){t.status="fulfilled",t.value=n,v0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,g0(e,n)))}function bc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,v0(t),t=t.next;while(t!==l)}e.action=null}function v0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function b0(e,t){return t}function S0(e,t){if(be){var n=Ue.formState;if(n!==null){e:{var l=ce;if(be){if(Be){t:{for(var r=Be,u=Xt;r.nodeType!==8;){if(!u){r=null;break t}if(r=Zt(r.nextSibling),r===null){r=null;break t}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){Be=Zt(r.nextSibling),l=r.data==="F!";break e}}Xn(l)}l=!1}l&&(t=n[0])}}return n=mt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:t},n.queue=l,n=k0.bind(null,ce,l),l.dispatch=n,l=vc(!1),u=Tc.bind(null,ce,!1,l.queue),l=mt(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=Ey.bind(null,ce,r,u,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function w0(e){var t=Ze();return E0(t,Me,e)}function E0(e,t,n){if(t=yc(e,t,b0)[0],e=Mr(Sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ri(t)}catch(d){throw d===il?Sr:d}else l=t;t=Ze();var r=t.queue,u=r.dispatch;return n!==t.memoizedState&&(ce.flags|=2048,sl(9,{destroy:void 0},Cy.bind(null,r,n),null)),[l,u,e]}function Cy(e,t){e.action=t}function C0(e){var t=Ze(),n=Me;if(n!==null)return E0(t,n,e);Ze(),t=t.memoizedState,n=Ze();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function sl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ar(),ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function _0(){return Ze().memoizedState}function Or(e,t,n,l){var r=mt();ce.flags|=e,r.memoizedState=sl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Dr(e,t,n,l){var r=Ze();l=l===void 0?null:l;var u=r.memoizedState.inst;Me!==null&&l!==null&&fc(l,Me.memoizedState.deps)?r.memoizedState=sl(t,u,n,l):(ce.flags|=e,r.memoizedState=sl(1|t,u,n,l))}function T0(e,t){Or(8390656,8,e,t)}function Sc(e,t){Dr(2048,8,e,t)}function _y(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ar(),ce.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function z0(e){var t=Ze().memoizedState;return _y({ref:t,nextImpl:e}),function(){if((_e&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function j0(e,t){return Dr(4,2,e,t)}function A0(e,t){return Dr(4,4,e,t)}function R0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function M0(e,t,n){n=n!=null?n.concat([e]):null,Dr(4,4,R0.bind(null,t,e),n)}function wc(){}function O0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&fc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function D0(e,t){var n=Ze();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&fc(t,l[1]))return l[0];if(l=e(),Aa){kn(!0);try{e()}finally{kn(!1)}}return n.memoizedState=[l,t],l}function Ec(e,t,n){return n===void 0||(bn&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Np(),ce.lanes|=e,ea|=e,n)}function N0(e,t,n,l){return Rt(n,t)?n:ul.current!==null?(e=Ec(e,n,l),Rt(e,t)||(Fe=!0),e):(bn&42)===0||(bn&1073741824)!==0&&(ye&261930)===0?(Fe=!0,e.memoizedState=n):(e=Np(),ce.lanes|=e,ea|=e,t)}function L0(e,t,n,l,r){var u=F.p;F.p=u!==0&&8>u?u:8;var d=L.T,m={};L.T=m,Tc(e,!1,t,n);try{var S=r(),j=L.S;if(j!==null&&j(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var U=by(S,l);ui(e,t,U,Ut(e))}else ui(e,t,l,Ut(e))}catch(Y){ui(e,t,{then:function(){},status:"rejected",reason:Y},Ut())}finally{F.p=u,d!==null&&m.types!==null&&(d.types=m.types),L.T=d}}function Ty(){}function Cc(e,t,n,l){if(e.tag!==5)throw Error(o(476));var r=U0(e).queue;L0(e,r,t,le,n===null?Ty:function(){return B0(e),n(l)})}function U0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function B0(e){var t=U0(e);t.next===null&&(t=e.alternate.memoizedState),ui(e,t.next.queue,{},Ut())}function _c(){return rt(Ci)}function H0(){return Ze().memoizedState}function $0(){return Ze().memoizedState}function zy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ut();e=Kn(n);var l=Jn(t,e,n);l!==null&&(_t(l,t,n),ni(l,t,n)),t={cache:ec()},e.payload=t;return}t=t.return}}function jy(e,t,n){var l=Ut();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Nr(e)?Y0(t,n):(n=Go(e,t,n,l),n!==null&&(_t(n,e,l),q0(n,t,l)))}function k0(e,t,n){var l=Ut();ui(e,t,n,l)}function ui(e,t,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nr(e))Y0(t,r);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,m=u(d,n);if(r.hasEagerState=!0,r.eagerState=m,Rt(m,d))return hr(e,t,r,0),Ue===null&&pr(),!1}catch{}if(n=Go(e,t,r,l),n!==null)return _t(n,e,l),q0(n,t,l),!0}return!1}function Tc(e,t,n,l){if(l={lane:2,revertLane:ls(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Nr(e)){if(t)throw Error(o(479))}else t=Go(e,n,l,2),t!==null&&_t(t,e,2)}function Nr(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Y0(e,t){ol=zr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function q0(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zf(e,n)}}var oi={readContext:rt,use:Rr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};oi.useEffectEvent=Ve;var G0={readContext:rt,use:Rr,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:T0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Or(4194308,4,R0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){Or(4,2,e,t)},useMemo:function(e,t){var n=mt();t=t===void 0?null:t;var l=e();if(Aa){kn(!0);try{e()}finally{kn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=mt();if(n!==void 0){var r=n(t);if(Aa){kn(!0);try{n(t)}finally{kn(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=jy.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=vc(e);var t=e.queue,n=k0.bind(null,ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wc,useDeferredValue:function(e,t){var n=mt();return Ec(n,e,t)},useTransition:function(){var e=vc(!1);return e=L0.bind(null,ce,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ce,r=mt();if(be){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ue===null)throw Error(o(349));(ye&127)!==0||s0(l,t,n)}r.memoizedState=n;var u={value:n,getSnapshot:t};return r.queue=u,T0(d0.bind(null,l,u,e),[e]),l.flags|=2048,sl(9,{destroy:void 0},f0.bind(null,l,u,n,t),null),n},useId:function(){var e=mt(),t=Ue.identifierPrefix;if(be){var n=un,l=rn;n=(l&~(1<<32-At(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Sy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_c,useFormState:S0,useActionState:S0,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Tc.bind(null,ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:gc,useCacheRefresh:function(){return mt().memoizedState=zy.bind(null,ce)},useEffectEvent:function(e){var t=mt(),n={impl:e};return t.memoizedState=n,function(){if((_e&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},zc={readContext:rt,use:Rr,useCallback:O0,useContext:rt,useEffect:Sc,useImperativeHandle:M0,useInsertionEffect:j0,useLayoutEffect:A0,useMemo:D0,useReducer:Mr,useRef:_0,useState:function(){return Mr(Sn)},useDebugValue:wc,useDeferredValue:function(e,t){var n=Ze();return N0(n,Me.memoizedState,e,t)},useTransition:function(){var e=Mr(Sn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ri(e),t]},useSyncExternalStore:c0,useId:H0,useHostTransitionStatus:_c,useFormState:w0,useActionState:w0,useOptimistic:function(e,t){var n=Ze();return m0(n,Me,e,t)},useMemoCache:gc,useCacheRefresh:$0};zc.useEffectEvent=z0;var V0={readContext:rt,use:Rr,useCallback:O0,useContext:rt,useEffect:Sc,useImperativeHandle:M0,useInsertionEffect:j0,useLayoutEffect:A0,useMemo:D0,useReducer:xc,useRef:_0,useState:function(){return xc(Sn)},useDebugValue:wc,useDeferredValue:function(e,t){var n=Ze();return Me===null?Ec(n,e,t):N0(n,Me.memoizedState,e,t)},useTransition:function(){var e=xc(Sn)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ri(e),t]},useSyncExternalStore:c0,useId:H0,useHostTransitionStatus:_c,useFormState:C0,useActionState:C0,useOptimistic:function(e,t){var n=Ze();return Me!==null?m0(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:gc,useCacheRefresh:$0};V0.useEffectEvent=z0;function jc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ac={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ut(),r=Kn(l);r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,l),t!==null&&(_t(t,e,l),ni(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ut(),r=Kn(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Jn(e,r,l),t!==null&&(_t(t,e,l),ni(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ut(),l=Kn(n);l.tag=2,t!=null&&(l.callback=t),t=Jn(e,l,n),t!==null&&(_t(t,e,n),ni(t,e,n))}};function X0(e,t,n,l,r,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,d):t.prototype&&t.prototype.isPureReactComponent?!Kl(n,l)||!Kl(r,u):!0}function Q0(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Ac.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Z0(e){dr(e)}function K0(e){console.error(e)}function J0(e){dr(e)}function Lr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function W0(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Rc(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Lr(e,t)},n}function F0(e){return e=Kn(e),e.tag=3,e}function I0(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=l.value;e.payload=function(){return r(u)},e.callback=function(){W0(t,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){W0(t,n,l),typeof r!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function Ay(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&nl(t,n,r,!0),n=Ot.current,n!==null){switch(n.tag){case 31:case 13:return Qt===null?Zr():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===wr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),ts(e,l,r)),!1;case 22:return n.flags|=65536,l===wr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),ts(e,l,r)),!1}throw Error(o(435,n.tag))}return ts(e,l,r),Zr(),!1}if(be)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==Jo&&(e=Error(o(422),{cause:l}),Fl(qt(e,n)))):(l!==Jo&&(t=Error(o(423),{cause:l}),Fl(qt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=qt(l,n),r=Rc(e.stateNode,l,r),rc(e,r),Xe!==4&&(Xe=2)),!1;var u=Error(o(520),{cause:l});if(u=qt(u,n),gi===null?gi=[u]:gi.push(u),Xe!==4&&(Xe=2),t===null)return!0;l=qt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Rc(n.stateNode,l,e),rc(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ta===null||!ta.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=F0(r),I0(r,e,n,l),rc(n,r),!1}n=n.return}while(n!==null);return!1}var Mc=Error(o(461)),Fe=!1;function ut(e,t,n,l){t.child=e===null?n0(t,null,n,l):ja(t,e.child,n,l)}function P0(e,t,n,l,r){n=n.render;var u=t.ref;if("ref"in l){var d={};for(var m in l)m!=="ref"&&(d[m]=l[m])}else d=l;return Ca(t),l=dc(e,t,n,d,u,r),m=pc(),e!==null&&!Fe?(hc(e,t,r),wn(e,t,r)):(be&&m&&Zo(t),t.flags|=1,ut(e,t,l,r),t.child)}function ep(e,t,n,l,r){if(e===null){var u=n.type;return typeof u=="function"&&!Vo(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,tp(e,t,u,l,r)):(e=gr(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!$c(e,r)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Kl,n(d,l)&&e.ref===t.ref)return wn(e,t,r)}return t.flags|=1,e=gn(u,l),e.ref=t.ref,e.return=t,t.child=e}function tp(e,t,n,l,r){if(e!==null){var u=e.memoizedProps;if(Kl(u,l)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=l=u,$c(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,wn(e,t,r)}return Oc(e,t,n,l,r)}function np(e,t,n,l){var r=l.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~u}else l=0,t.child=null;return ap(e,t,u,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&br(t,u!==null?u.cachePool:null),u!==null?i0(t,u):oc(),r0(t);else return l=t.lanes=536870912,ap(e,t,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(br(t,u.cachePool),i0(t,u),Fn(),t.memoizedState=null):(e!==null&&br(t,null),oc(),Fn());return ut(e,t,r,n),t.child}function ci(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ap(e,t,n,l,r){var u=nc();return u=u===null?null:{parent:Je._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&br(t,null),oc(),r0(t),e!==null&&nl(e,t,l,!0),t.childLanes=r,null}function Ur(e,t){return t=Hr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lp(e,t,n){return ja(t,e.child,null,n),e=Ur(t,t.pendingProps),e.flags|=2,Dt(t),t.memoizedState=null,e}function Ry(e,t,n){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(be){if(l.mode==="hidden")return e=Ur(t,l),t.lanes=536870912,ci(null,e);if(sc(t),(e=Be)?(e=gh(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Yd(e),n.return=t,t.child=n,it=t,Be=null)):e=null,e===null)throw Xn(t);return t.lanes=536870912,null}return Ur(t,l)}var u=e.memoizedState;if(u!==null){var d=u.dehydrated;if(sc(t),r)if(t.flags&256)t.flags&=-257,t=lp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Fe||nl(e,t,n,!1),r=(n&e.childLanes)!==0,Fe||r){if(l=Ue,l!==null&&(d=Kf(l,n),d!==0&&d!==u.retryLane))throw u.retryLane=d,ba(e,d),_t(l,e,d),Mc;Zr(),t=lp(e,t,n)}else e=u.treeContext,Be=Zt(d.nextSibling),it=t,be=!0,Vn=null,Xt=!1,e!==null&&Vd(t,e),t=Ur(t,l),t.flags|=4096;return t}return e=gn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Br(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Oc(e,t,n,l,r){return Ca(t),n=dc(e,t,n,l,void 0,r),l=pc(),e!==null&&!Fe?(hc(e,t,r),wn(e,t,r)):(be&&l&&Zo(t),t.flags|=1,ut(e,t,n,r),t.child)}function ip(e,t,n,l,r,u){return Ca(t),t.updateQueue=null,n=o0(t,l,n,r),u0(e),l=pc(),e!==null&&!Fe?(hc(e,t,u),wn(e,t,u)):(be&&l&&Zo(t),t.flags|=1,ut(e,t,n,u),t.child)}function rp(e,t,n,l,r){if(Ca(t),t.stateNode===null){var u=Ia,d=n.contextType;typeof d=="object"&&d!==null&&(u=rt(d)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ac,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},lc(t),d=n.contextType,u.context=typeof d=="object"&&d!==null?rt(d):Ia,u.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(jc(t,n,d,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&Ac.enqueueReplaceState(u,u.state,null),li(t,l,u,r),ai(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var m=t.memoizedProps,S=Ra(n,m);u.props=S;var j=u.context,U=n.contextType;d=Ia,typeof U=="object"&&U!==null&&(d=rt(U));var Y=n.getDerivedStateFromProps;U=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m||j!==d)&&Q0(t,u,l,d),Zn=!1;var A=t.memoizedState;u.state=A,li(t,l,u,r),ai(),j=t.memoizedState,m||A!==j||Zn?(typeof Y=="function"&&(jc(t,n,Y,l),j=t.memoizedState),(S=Zn||X0(t,n,S,l,A,j,d))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),u.props=l,u.state=j,u.context=d,l=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,ic(e,t),d=t.memoizedProps,U=Ra(n,d),u.props=U,Y=t.pendingProps,A=u.context,j=n.contextType,S=Ia,typeof j=="object"&&j!==null&&(S=rt(j)),m=n.getDerivedStateFromProps,(j=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==Y||A!==S)&&Q0(t,u,l,S),Zn=!1,A=t.memoizedState,u.state=A,li(t,l,u,r),ai();var O=t.memoizedState;d!==Y||A!==O||Zn||e!==null&&e.dependencies!==null&&xr(e.dependencies)?(typeof m=="function"&&(jc(t,n,m,l),O=t.memoizedState),(U=Zn||X0(t,n,U,l,A,O,S)||e!==null&&e.dependencies!==null&&xr(e.dependencies))?(j||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,O,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,O,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),u.props=l,u.state=O,u.context=S,l=U):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,Br(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=ja(t,e.child,null,r),t.child=ja(t,null,n,r)):ut(e,t,n,r),t.memoizedState=u.state,e=t.child):e=wn(e,t,r),e}function up(e,t,n,l){return wa(),t.flags|=256,ut(e,t,n,l),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:Wd()}}function Lc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function op(e,t,n){var l=t.pendingProps,r=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(r?Wn(t):Fn(),(e=Be)?(e=gh(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:rn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},n=Yd(e),n.return=t,t.child=n,it=t,Be=null)):e=null,e===null)throw Xn(t);return ys(e)?t.lanes=32:t.lanes=536870912,null}var m=l.children;return l=l.fallback,r?(Fn(),r=t.mode,m=Hr({mode:"hidden",children:m},r),l=Sa(l,r,n,null),m.return=t,l.return=t,m.sibling=l,t.child=m,l=t.child,l.memoizedState=Nc(n),l.childLanes=Lc(e,d,n),t.memoizedState=Dc,ci(null,l)):(Wn(t),Uc(t,m))}var S=e.memoizedState;if(S!==null&&(m=S.dehydrated,m!==null)){if(u)t.flags&256?(Wn(t),t.flags&=-257,t=Bc(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),m=l.fallback,r=t.mode,l=Hr({mode:"visible",children:l.children},r),m=Sa(m,r,n,null),m.flags|=2,l.return=t,m.return=t,l.sibling=m,t.child=l,ja(t,e.child,null,n),l=t.child,l.memoizedState=Nc(n),l.childLanes=Lc(e,d,n),t.memoizedState=Dc,t=ci(null,l));else if(Wn(t),ys(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var j=d.dgst;d=j,l=Error(o(419)),l.stack="",l.digest=d,Fl({value:l,source:null,stack:null}),t=Bc(e,t,n)}else if(Fe||nl(e,t,n,!1),d=(n&e.childLanes)!==0,Fe||d){if(d=Ue,d!==null&&(l=Kf(d,n),l!==0&&l!==S.retryLane))throw S.retryLane=l,ba(e,l),_t(d,e,l),Mc;gs(m)||Zr(),t=Bc(e,t,n)}else gs(m)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Be=Zt(m.nextSibling),it=t,be=!0,Vn=null,Xt=!1,e!==null&&Vd(t,e),t=Uc(t,l.children),t.flags|=4096);return t}return r?(Fn(),m=l.fallback,r=t.mode,S=e.child,j=S.sibling,l=gn(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,j!==null?m=gn(j,m):(m=Sa(m,r,n,null),m.flags|=2),m.return=t,l.return=t,l.sibling=m,t.child=l,ci(null,l),l=t.child,m=e.child.memoizedState,m===null?m=Nc(n):(r=m.cachePool,r!==null?(S=Je._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=Wd(),m={baseLanes:m.baseLanes|n,cachePool:r}),l.memoizedState=m,l.childLanes=Lc(e,d,n),t.memoizedState=Dc,ci(e.child,l)):(Wn(t),n=e.child,e=n.sibling,n=gn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Uc(e,t){return t=Hr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Bc(e,t,n){return ja(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cp(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Io(e.return,t,n)}function Hc(e,t,n,l,r,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=n,d.tailMode=r,d.treeForkCount=u)}function sp(e,t,n){var l=t.pendingProps,r=l.revealOrder,u=l.tail;l=l.children;var d=Qe.current,m=(d&2)!==0;if(m?(d=d&1|2,t.flags|=128):d&=1,I(Qe,d),ut(e,t,l,n),l=be?Wl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cp(e,n,t);else if(e.tag===19)cp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Tr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Hc(t,!1,r,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Tr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Hc(t,!0,n,null,u,l);break;case"together":Hc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(nl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $c(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xr(e)))}function My(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),Qn(t,Je,e.memoizedState.cache),wa();break;case 27:case 5:ht(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:Qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,sc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?op(e,t,n):(Wn(t),e=wn(e,t,n),e!==null?e.sibling:null);Wn(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(nl(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return sp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),I(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,np(e,t,n,t.pendingProps);case 24:Qn(t,Je,e.memoizedState.cache)}return wn(e,t,n)}function fp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!$c(e,n)&&(t.flags&128)===0)return Fe=!1,My(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,be&&(t.flags&1048576)!==0&&Gd(t,Wl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Vo(e)?(l=Ra(e,l),t.tag=1,t=rp(null,t,e,l,n)):(t.tag=0,t=Oc(null,t,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===M){t.tag=11,t=P0(null,t,e,l,n);break e}else if(r===N){t.tag=14,t=ep(null,t,e,l,n);break e}}throw t=Ye(e)||e,Error(o(306,t,""))}}return t;case 0:return Oc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=Ra(l,t.pendingProps),rp(e,t,l,r,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var u=t.memoizedState;r=u.element,ic(e,t),li(t,l,null,n);var d=t.memoizedState;if(l=d.cache,Qn(t,Je,l),l!==u.cache&&Po(t,[Je],n,!0),ai(),l=d.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=up(e,t,l,n);break e}else if(l!==r){r=qt(Error(o(424)),t),Fl(r),t=up(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Be=Zt(e.firstChild),it=t,be=!0,Vn=null,Xt=!0,n=n0(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wa(),l===r){t=wn(e,t,n);break e}ut(e,t,l,n)}t=t.child}return t;case 26:return Br(e,t),e===null?(n=wh(t.type,null,t.pendingProps,null))?t.memoizedState=n:be||(n=t.type,e=t.pendingProps,l=eu(oe.current).createElement(n),l[lt]=t,l[vt]=e,ot(l,n,e),nt(l),t.stateNode=l):t.memoizedState=wh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ht(t),e===null&&be&&(l=t.stateNode=vh(t.type,t.pendingProps,oe.current),it=t,Xt=!0,r=Be,ia(t.type)?(xs=r,Be=Zt(l.firstChild)):Be=r),ut(e,t,t.pendingProps.children,n),Br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((r=l=Be)&&(l=ux(l,t.type,t.pendingProps,Xt),l!==null?(t.stateNode=l,it=t,Be=Zt(l.firstChild),Xt=!1,r=!0):r=!1),r||Xn(t)),ht(t),r=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,l=u.children,ps(r,u)?l=null:d!==null&&ps(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=dc(e,t,wy,null,null,n),Ci._currentValue=r),Br(e,t),ut(e,t,l,n),t.child;case 6:return e===null&&be&&((e=n=Be)&&(n=ox(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,it=t,Be=null,e=!0):e=!1),e||Xn(t)),null;case 13:return op(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ja(t,null,l,n):ut(e,t,l,n),t.child;case 11:return P0(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Qn(t,t.type,l.value),ut(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,Ca(t),r=rt(r),l=l(r),t.flags|=1,ut(e,t,l,n),t.child;case 14:return ep(e,t,t.type,t.pendingProps,n);case 15:return tp(e,t,t.type,t.pendingProps,n);case 19:return sp(e,t,n);case 31:return Ry(e,t,n);case 22:return np(e,t,n,t.pendingProps);case 24:return Ca(t),l=rt(Je),e===null?(r=nc(),r===null&&(r=Ue,u=ec(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),t.memoizedState={parent:l,cache:r},lc(t),Qn(t,Je,r)):((e.lanes&n)!==0&&(ic(e,t),li(t,null,null,n),ai()),r=e.memoizedState,u=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Qn(t,Je,l)):(l=u.cache,Qn(t,Je,l),l!==r.cache&&Po(t,[Je],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function En(e){e.flags|=4}function kc(e,t,n,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Hp())e.flags|=8192;else throw za=wr,ac}else e.flags&=-16777217}function dp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zh(t))if(Hp())e.flags|=8192;else throw za=wr,ac}function $r(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Xf():536870912,e.lanes|=t,hl|=t)}function si(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Oy(e,t,n){var l=t.pendingProps;switch(Ko(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return He(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),vn(Je),Le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(tl(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wo())),He(t),null;case 26:var r=t.type,u=t.memoizedState;return e===null?(En(t),u!==null?(He(t),dp(t,u)):(He(t),kc(t,r,null,l,n))):u?u!==e.memoizedState?(En(t),He(t),dp(t,u)):(He(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&En(t),He(t),kc(t,r,e,l,n)),null;case 27:if(Hn(t),n=oe.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&En(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return He(t),null}e=P.current,tl(t)?Xd(t):(e=vh(r,l,n),t.stateNode=e,En(t))}return He(t),null;case 5:if(Hn(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&En(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return He(t),null}if(u=P.current,tl(t))Xd(t);else{var d=eu(oe.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?d.createElement(r,{is:l.is}):d.createElement(r)}}u[lt]=t,u[vt]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=u;e:switch(ot(u,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&En(t)}}return He(t),kc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&En(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=oe.current,tl(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=it,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||oh(e.nodeValue,n)),e||Xn(t,!0)}else e=eu(e).createTextNode(l),e[lt]=t,t.stateNode=e}return He(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=tl(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),e=!1}else n=Wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Dt(t),t):(Dt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return He(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=tl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[lt]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),r=!1}else r=Wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Dt(t),t):(Dt(t),null)}return Dt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==r&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),$r(t,t.updateQueue),He(t),null);case 4:return Le(),e===null&&os(t.stateNode.containerInfo),He(t),null;case 10:return vn(t.type),He(t),null;case 19:if(H(Qe),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,u=l.rendering,u===null)if(r)si(l,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Tr(e),u!==null){for(t.flags|=128,si(l,!1),e=u.updateQueue,t.updateQueue=e,$r(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)kd(n,e),n=n.sibling;return I(Qe,Qe.current&1|2),be&&yn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&zt()>Vr&&(t.flags|=128,r=!0,si(l,!1),t.lanes=4194304)}else{if(!r)if(e=Tr(u),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,$r(t,e),si(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!be)return He(t),null}else 2*zt()-l.renderingStartTime>Vr&&n!==536870912&&(t.flags|=128,r=!0,si(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=zt(),e.sibling=null,n=Qe.current,I(Qe,r?n&1|2:n&1),be&&yn(t,l.treeForkCount),e):(He(t),null);case 22:case 23:return Dt(t),cc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),n=t.updateQueue,n!==null&&$r(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&H(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(Je),He(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Dy(e,t){switch(Ko(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(Je),Le(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Hn(t),null;case 31:if(t.memoizedState!==null){if(Dt(t),t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Qe),null;case 4:return Le(),null;case 10:return vn(t.type),null;case 22:case 23:return Dt(t),cc(),e!==null&&H(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(Je),null;case 25:return null;default:return null}}function pp(e,t){switch(Ko(t),t.tag){case 3:vn(Je),Le();break;case 26:case 27:case 5:Hn(t);break;case 4:Le();break;case 31:t.memoizedState!==null&&Dt(t);break;case 13:Dt(t);break;case 19:H(Qe);break;case 10:vn(t.type);break;case 22:case 23:Dt(t),cc(),e!==null&&H(_a);break;case 24:vn(Je)}}function fi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var u=n.create,d=n.inst;l=u(),d.destroy=l}n=n.next}while(n!==r)}}catch(m){Ae(t,t.return,m)}}function In(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var u=r.next;l=u;do{if((l.tag&e)===e){var d=l.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,r=t;var S=n,j=m;try{j()}catch(U){Ae(r,S,U)}}}l=l.next}while(l!==u)}}catch(U){Ae(t,t.return,U)}}function hp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{l0(t,n)}catch(l){Ae(e,e.return,l)}}}function mp(e,t,n){n.props=Ra(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ae(e,t,l)}}function di(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Ae(e,t,r)}}function on(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Ae(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function gp(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Ae(e,e.return,r)}}function Yc(e,t,n){try{var l=e.stateNode;tx(l,e.type,n,t),l[vt]=t}catch(r){Ae(e,e.return,r)}}function yp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hn));else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}function kr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(kr(e,t,n),e=e.sibling;e!==null;)kr(e,t,n),e=e.sibling}function xp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);ot(t,l,n),t[lt]=e,t[vt]=n}catch(u){Ae(e,e.return,u)}}var Cn=!1,Ie=!1,Vc=!1,vp=typeof WeakSet=="function"?WeakSet:Set,at=null;function Ny(e,t){if(e=e.containerInfo,fs=uu,e=Md(e),Bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,m=-1,S=-1,j=0,U=0,Y=e,A=null;t:for(;;){for(var O;Y!==n||r!==0&&Y.nodeType!==3||(m=d+r),Y!==u||l!==0&&Y.nodeType!==3||(S=d+l),Y.nodeType===3&&(d+=Y.nodeValue.length),(O=Y.firstChild)!==null;)A=Y,Y=O;for(;;){if(Y===e)break t;if(A===n&&++j===r&&(m=d),A===u&&++U===l&&(S=d),(O=Y.nextSibling)!==null)break;Y=A,A=Y.parentNode}Y=O}n=m===-1||S===-1?null:{start:m,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(ds={focusedElem:e,selectionRange:n},uu=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,r=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var ee=Ra(n.type,r);e=l.getSnapshotBeforeUpdate(ee,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ae(n,n.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ms(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ms(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function bp(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),l&4&&fi(5,n);break;case 1:if(Tn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ae(n,n.return,d)}else{var r=Ra(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ae(n,n.return,d)}}l&64&&hp(n),l&512&&di(n,n.return);break;case 3:if(Tn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{l0(e,t)}catch(d){Ae(n,n.return,d)}}break;case 27:t===null&&l&4&&xp(n);case 26:case 5:Tn(e,n),t===null&&l&4&&gp(n),l&512&&di(n,n.return);break;case 12:Tn(e,n);break;case 31:Tn(e,n),l&4&&Ep(e,n);break;case 13:Tn(e,n),l&4&&Cp(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Gy.bind(null,n),cx(e,n))));break;case 22:if(l=n.memoizedState!==null||Cn,!l){t=t!==null&&t.memoizedState!==null||Ie,r=Cn;var u=Ie;Cn=l,(Ie=t)&&!u?zn(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),Cn=r,Ie=u}break;case 30:break;default:Tn(e,n)}}function Sp(e){var t=e.alternate;t!==null&&(e.alternate=null,Sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,St=!1;function _n(e,t,n){for(n=n.child;n!==null;)wp(e,t,n),n=n.sibling}function wp(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 26:Ie||on(n,t),_n(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ie||on(n,t);var l=ke,r=St;ia(n.type)&&(ke=n.stateNode,St=!1),_n(e,t,n),Si(n.stateNode),ke=l,St=r;break;case 5:Ie||on(n,t);case 6:if(l=ke,r=St,ke=null,_n(e,t,n),ke=l,St=r,ke!==null)if(St)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode)}catch(u){Ae(n,t,u)}else try{ke.removeChild(n.stateNode)}catch(u){Ae(n,t,u)}break;case 18:ke!==null&&(St?(e=ke,hh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wl(e)):hh(ke,n.stateNode));break;case 4:l=ke,r=St,ke=n.stateNode.containerInfo,St=!0,_n(e,t,n),ke=l,St=r;break;case 0:case 11:case 14:case 15:In(2,n,t),Ie||In(4,n,t),_n(e,t,n);break;case 1:Ie||(on(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&mp(n,t,l)),_n(e,t,n);break;case 21:_n(e,t,n);break;case 22:Ie=(l=Ie)||n.memoizedState!==null,_n(e,t,n),Ie=l;break;default:_n(e,t,n)}}function Ep(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wl(e)}catch(n){Ae(t,t.return,n)}}}function Cp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(n){Ae(t,t.return,n)}}function Ly(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vp),t;default:throw Error(o(435,e.tag))}}function Yr(e,t){var n=Ly(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var r=Vy.bind(null,e,l);l.then(r,r)}})}function wt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],u=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(ia(m.type)){ke=m.stateNode,St=!1;break e}break;case 5:ke=m.stateNode,St=!1;break e;case 3:case 4:ke=m.stateNode.containerInfo,St=!0;break e}m=m.return}if(ke===null)throw Error(o(160));wp(u,d,r),ke=null,St=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_p(t,e),t=t.sibling}var It=null;function _p(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wt(t,e),Et(e),l&4&&(In(3,e,e.return),fi(3,e),In(5,e,e.return));break;case 1:wt(t,e),Et(e),l&512&&(Ie||n===null||on(n,n.return)),l&64&&Cn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=It;if(wt(t,e),Et(e),l&512&&(Ie||n===null||on(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":u=r.getElementsByTagName("title")[0],(!u||u[$l]||u[lt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(l),r.head.insertBefore(u,r.querySelector("head > title"))),ot(u,l,n),u[lt]=e,nt(u),l=u;break e;case"link":var d=_h("link","href",r).get(l+(n.href||""));if(d){for(var m=0;m<d.length;m++)if(u=d[m],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(m,1);break t}}u=r.createElement(l),ot(u,l,n),r.head.appendChild(u);break;case"meta":if(d=_h("meta","content",r).get(l+(n.content||""))){for(m=0;m<d.length;m++)if(u=d[m],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(m,1);break t}}u=r.createElement(l),ot(u,l,n),r.head.appendChild(u);break;default:throw Error(o(468,l))}u[lt]=e,nt(u),l=u}e.stateNode=l}else Th(r,e.type,e.stateNode);else e.stateNode=Ch(r,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?Th(r,e.type,e.stateNode):Ch(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps)}break;case 27:wt(t,e),Et(e),l&512&&(Ie||n===null||on(n,n.return)),n!==null&&l&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(wt(t,e),Et(e),l&512&&(Ie||n===null||on(n,n.return)),e.flags&32){r=e.stateNode;try{Xa(r,"")}catch(ee){Ae(e,e.return,ee)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Yc(e,r,n!==null?n.memoizedProps:r)),l&1024&&(Vc=!0);break;case 6:if(wt(t,e),Et(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ee){Ae(e,e.return,ee)}}break;case 3:if(au=null,r=It,It=tu(t.containerInfo),wt(t,e),It=r,Et(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{wl(t.containerInfo)}catch(ee){Ae(e,e.return,ee)}Vc&&(Vc=!1,Tp(e));break;case 4:l=It,It=tu(e.stateNode.containerInfo),wt(t,e),Et(e),It=l;break;case 12:wt(t,e),Et(e);break;case 31:wt(t,e),Et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yr(e,l)));break;case 13:wt(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Gr=zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yr(e,l)));break;case 22:r=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,j=Cn,U=Ie;if(Cn=j||r,Ie=U||S,wt(t,e),Ie=U,Cn=j,Et(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||S||Cn||Ie||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(u=S.stateNode,r)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=S.stateNode;var Y=S.memoizedProps.style,A=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;m.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(ee){Ae(S,S.return,ee)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(ee){Ae(S,S.return,ee)}}}else if(t.tag===18){if(n===null){S=t;try{var O=S.stateNode;r?mh(O,!0):mh(S.stateNode,!1)}catch(ee){Ae(S,S.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Yr(e,n))));break;case 19:wt(t,e),Et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yr(e,l)));break;case 30:break;case 21:break;default:wt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(yp(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,u=qc(e);kr(e,u,r);break;case 5:var d=n.stateNode;n.flags&32&&(Xa(d,""),n.flags&=-33);var m=qc(e);kr(e,m,d);break;case 3:case 4:var S=n.stateNode.containerInfo,j=qc(e);Gc(e,j,S);break;default:throw Error(o(161))}}catch(U){Ae(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Tp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bp(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:In(4,t,t.return),Ma(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mp(t,t.return,n),Ma(t);break;case 27:Si(t.stateNode);case 26:case 5:on(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:zn(r,u,n),fi(4,u);break;case 1:if(zn(r,u,n),l=u,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(j){Ae(l,l.return,j)}if(l=u,r=l.updateQueue,r!==null){var m=l.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)a0(S[r],m)}catch(j){Ae(l,l.return,j)}}n&&d&64&&hp(u),di(u,u.return);break;case 27:xp(u);case 26:case 5:zn(r,u,n),n&&l===null&&d&4&&gp(u),di(u,u.return);break;case 12:zn(r,u,n);break;case 31:zn(r,u,n),n&&d&4&&Ep(r,u);break;case 13:zn(r,u,n),n&&d&4&&Cp(r,u);break;case 22:u.memoizedState===null&&zn(r,u,n),di(u,u.return);break;case 30:break;default:zn(r,u,n)}t=t.sibling}}function Xc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Il(n))}function Qc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e))}function Pt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zp(e,t,n,l),t=t.sibling}function zp(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,n,l),r&2048&&fi(9,t);break;case 1:Pt(e,t,n,l);break;case 3:Pt(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e)));break;case 12:if(r&2048){Pt(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,m=u.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ae(t,t.return,S)}}else Pt(e,t,n,l);break;case 31:Pt(e,t,n,l);break;case 13:Pt(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?Pt(e,t,n,l):pi(e,t):u._visibility&2?Pt(e,t,n,l):(u._visibility|=2,fl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Xc(d,t);break;case 24:Pt(e,t,n,l),r&2048&&Qc(t.alternate,t);break;default:Pt(e,t,n,l)}}function fl(e,t,n,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,d=t,m=n,S=l,j=d.flags;switch(d.tag){case 0:case 11:case 15:fl(u,d,m,S,r),fi(8,d);break;case 23:break;case 22:var U=d.stateNode;d.memoizedState!==null?U._visibility&2?fl(u,d,m,S,r):pi(u,d):(U._visibility|=2,fl(u,d,m,S,r)),r&&j&2048&&Xc(d.alternate,d);break;case 24:fl(u,d,m,S,r),r&&j&2048&&Qc(d.alternate,d);break;default:fl(u,d,m,S,r)}t=t.sibling}}function pi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:pi(n,l),r&2048&&Xc(l.alternate,l);break;case 24:pi(n,l),r&2048&&Qc(l.alternate,l);break;default:pi(n,l)}t=t.sibling}}var hi=8192;function dl(e,t,n){if(e.subtreeFlags&hi)for(e=e.child;e!==null;)jp(e,t,n),e=e.sibling}function jp(e,t,n){switch(e.tag){case 26:dl(e,t,n),e.flags&hi&&e.memoizedState!==null&&Sx(n,It,e.memoizedState,e.memoizedProps);break;case 5:dl(e,t,n);break;case 3:case 4:var l=It;It=tu(e.stateNode.containerInfo),dl(e,t,n),It=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=hi,hi=16777216,dl(e,t,n),hi=l):dl(e,t,n));break;default:dl(e,t,n)}}function Ap(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];at=l,Mp(l,e)}Ap(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rp(e),e=e.sibling}function Rp(e){switch(e.tag){case 0:case 11:case 15:mi(e),e.flags&2048&&In(9,e,e.return);break;case 3:mi(e);break;case 12:mi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qr(e)):mi(e);break;default:mi(e)}}function qr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];at=l,Mp(l,e)}Ap(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),qr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qr(t));break;default:qr(t)}e=e.sibling}}function Mp(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Il(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,at=l;else e:for(n=e;at!==null;){l=at;var r=l.sibling,u=l.return;if(Sp(l),l===n){at=null;break e}if(r!==null){r.return=u,at=r;break e}at=u}}}var Uy={getCacheForType:function(e){var t=rt(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Je).controller.signal}},By=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ue=null,me=null,ye=0,je=0,Nt=null,Pn=!1,pl=!1,Zc=!1,jn=0,Xe=0,ea=0,Oa=0,Kc=0,Lt=0,hl=0,gi=null,Ct=null,Jc=!1,Gr=0,Op=0,Vr=1/0,Xr=null,ta=null,et=0,na=null,ml=null,An=0,Wc=0,Fc=null,Dp=null,yi=0,Ic=null;function Ut(){return(_e&2)!==0&&ye!==0?ye&-ye:L.T!==null?ls():Jf()}function Np(){if(Lt===0)if((ye&536870912)===0||be){var e=Pi;Pi<<=1,(Pi&3932160)===0&&(Pi=262144),Lt=e}else Lt=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Lt}function _t(e,t,n){(e===Ue&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(gl(e,0),aa(e,ye,Lt,!1)),Hl(e,n),((_e&2)===0||e!==Ue)&&(e===Ue&&((_e&2)===0&&(Oa|=n),Xe===4&&aa(e,ye,Lt,!1)),cn(e))}function Lp(e,t,n){if((_e&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bl(e,t),r=l?ky(e,t):es(e,t,!0),u=l;do{if(r===0){pl&&!l&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Hy(n)){r=es(e,t,!1),u=!1;continue}if(r===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;r=gi;var S=m.current.memoizedState.isDehydrated;if(S&&(gl(m,d).flags|=256),d=es(m,d,!1),d!==2){if(Zc&&!S){m.errorRecoveryDisabledLanes|=u,Oa|=u,r=4;break e}u=Ct,Ct=r,u!==null&&(Ct===null?Ct=u:Ct.push.apply(Ct,u))}r=d}if(u=!1,r!==2)continue}}if(r===1){gl(e,0),aa(e,t,0,!0);break}e:{switch(l=e,u=r,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:aa(l,t,Lt,!Pn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Gr+300-zt(),10<r)){if(aa(l,t,Lt,!Pn),tr(l,0,!0)!==0)break e;An=t,l.timeoutHandle=dh(Up.bind(null,l,n,Ct,Xr,Jc,t,Lt,Oa,hl,Pn,u,"Throttled",-0,0),r);break e}Up(l,n,Ct,Xr,Jc,t,Lt,Oa,hl,Pn,u,null,-0,0)}}break}while(!0);cn(e)}function Up(e,t,n,l,r,u,d,m,S,j,U,Y,A,O){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hn},jp(t,u,Y);var ee=(u&62914560)===u?Gr-zt():(u&4194048)===u?Op-zt():0;if(ee=wx(Y,ee),ee!==null){An=u,e.cancelPendingCommit=ee(Vp.bind(null,e,t,u,n,l,r,d,m,S,U,Y,null,A,O)),aa(e,u,d,!j);return}}Vp(e,t,u,n,l,r,d,m,S)}function Hy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],u=r.getSnapshot;r=r.value;try{if(!Rt(u(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,l){t&=~Kc,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var u=31-At(r),d=1<<u;l[u]=-1,r&=~d}n!==0&&Qf(e,n,t)}function Qr(){return(_e&6)===0?(xi(0),!1):!0}function Pc(){if(me!==null){if(je===0)var e=me.return;else e=me,xn=Ea=null,mc(e),rl=null,ei=0,e=me;for(;e!==null;)pp(e.alternate,e),e=e.return;me=null}}function gl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,lx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),An=0,Pc(),Ue=e,me=n=gn(e.current,null),ye=t,je=0,Nt=null,Pn=!1,pl=Bl(e,t),Zc=!1,hl=Lt=Kc=Oa=ea=Xe=0,Ct=gi=null,Jc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-At(l),u=1<<r;t|=e[r],l&=~u}return jn=t,pr(),n}function Bp(e,t){ce=null,L.H=oi,t===il||t===Sr?(t=Pd(),je=3):t===ac?(t=Pd(),je=4):je=t===Mc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,me===null&&(Xe=1,Lr(e,qt(t,e.current)))}function Hp(){var e=Ot.current;return e===null?!0:(ye&4194048)===ye?Qt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Qt:!1}function $p(){var e=L.H;return L.H=oi,e===null?oi:e}function kp(){var e=L.A;return L.A=Uy,e}function Zr(){Xe=4,Pn||(ye&4194048)!==ye&&Ot.current!==null||(pl=!0),(ea&134217727)===0&&(Oa&134217727)===0||Ue===null||aa(Ue,ye,Lt,!1)}function es(e,t,n){var l=_e;_e|=2;var r=$p(),u=kp();(Ue!==e||ye!==t)&&(Xr=null,gl(e,t)),t=!1;var d=Xe;e:do try{if(je!==0&&me!==null){var m=me,S=Nt;switch(je){case 8:Pc(),d=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var j=je;if(je=0,Nt=null,yl(e,m,S,j),n&&pl){d=0;break e}break;default:j=je,je=0,Nt=null,yl(e,m,S,j)}}$y(),d=Xe;break}catch(U){Bp(e,U)}while(!0);return t&&e.shellSuspendCounter++,xn=Ea=null,_e=l,L.H=r,L.A=u,me===null&&(Ue=null,ye=0,pr()),d}function $y(){for(;me!==null;)Yp(me)}function ky(e,t){var n=_e;_e|=2;var l=$p(),r=kp();Ue!==e||ye!==t?(Xr=null,Vr=zt()+500,gl(e,t)):pl=Bl(e,t);e:do try{if(je!==0&&me!==null){t=me;var u=Nt;t:switch(je){case 1:je=0,Nt=null,yl(e,t,u,1);break;case 2:case 9:if(Fd(u)){je=0,Nt=null,qp(t);break}t=function(){je!==2&&je!==9||Ue!==e||(je=7),cn(e)},u.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:Fd(u)?(je=0,Nt=null,qp(t)):(je=0,Nt=null,yl(e,t,u,7));break;case 5:var d=null;switch(me.tag){case 26:d=me.memoizedState;case 5:case 27:var m=me;if(d?zh(d):m.stateNode.complete){je=0,Nt=null;var S=m.sibling;if(S!==null)me=S;else{var j=m.return;j!==null?(me=j,Kr(j)):me=null}break t}}je=0,Nt=null,yl(e,t,u,5);break;case 6:je=0,Nt=null,yl(e,t,u,6);break;case 8:Pc(),Xe=6;break e;default:throw Error(o(462))}}Yy();break}catch(U){Bp(e,U)}while(!0);return xn=Ea=null,L.H=l,L.A=r,_e=n,me!==null?0:(Ue=null,ye=0,pr(),Xe)}function Yy(){for(;me!==null&&!sg();)Yp(me)}function Yp(e){var t=fp(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?Kr(e):me=t}function qp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ip(n,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=ip(n,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:mc(t);default:pp(n,t),t=me=kd(t,jn),t=fp(n,t,jn)}e.memoizedProps=e.pendingProps,t===null?Kr(e):me=t}function yl(e,t,n,l){xn=Ea=null,mc(t),rl=null,ei=0;var r=t.return;try{if(Ay(e,r,t,n,ye)){Xe=1,Lr(e,qt(n,e.current)),me=null;return}}catch(u){if(r!==null)throw me=r,u;Xe=1,Lr(e,qt(n,e.current)),me=null;return}t.flags&32768?(be||l===1?e=!0:pl||(ye&536870912)!==0?e=!1:(Pn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ot.current,l!==null&&l.tag===13&&(l.flags|=16384))),Gp(t,e)):Kr(t)}function Kr(e){var t=e;do{if((t.flags&32768)!==0){Gp(t,Pn);return}e=t.return;var n=Oy(t.alternate,t,jn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Xe===0&&(Xe=5)}function Gp(e,t){do{var n=Dy(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Xe=6,me=null}function Vp(e,t,n,l,r,u,d,m,S){e.cancelPendingCommit=null;do Jr();while(et!==0);if((_e&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=qo,bg(e,n,u,d,m,S),e===Ue&&(me=Ue=null,ye=0),ml=t,na=e,An=n,Wc=u,Fc=r,Dp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xy(Fi,function(){return Jp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,r=F.p,F.p=2,d=_e,_e|=4;try{Ny(e,t,n)}finally{_e=d,F.p=r,L.T=l}}et=1,Xp(),Qp(),Zp()}}function Xp(){if(et===1){et=0;var e=na,t=ml,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var l=F.p;F.p=2;var r=_e;_e|=4;try{_p(t,e);var u=ds,d=Md(e.containerInfo),m=u.focusedElem,S=u.selectionRange;if(d!==m&&m&&m.ownerDocument&&Rd(m.ownerDocument.documentElement,m)){if(S!==null&&Bo(m)){var j=S.start,U=S.end;if(U===void 0&&(U=j),"selectionStart"in m)m.selectionStart=j,m.selectionEnd=Math.min(U,m.value.length);else{var Y=m.ownerDocument||document,A=Y&&Y.defaultView||window;if(A.getSelection){var O=A.getSelection(),ee=m.textContent.length,ie=Math.min(S.start,ee),De=S.end===void 0?ie:Math.min(S.end,ee);!O.extend&&ie>De&&(d=De,De=ie,ie=d);var T=Ad(m,ie),w=Ad(m,De);if(T&&w&&(O.rangeCount!==1||O.anchorNode!==T.node||O.anchorOffset!==T.offset||O.focusNode!==w.node||O.focusOffset!==w.offset)){var z=Y.createRange();z.setStart(T.node,T.offset),O.removeAllRanges(),ie>De?(O.addRange(z),O.extend(w.node,w.offset)):(z.setEnd(w.node,w.offset),O.addRange(z))}}}}for(Y=[],O=m;O=O.parentNode;)O.nodeType===1&&Y.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<Y.length;m++){var $=Y[m];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}uu=!!fs,ds=fs=null}finally{_e=r,F.p=l,L.T=n}}e.current=t,et=2}}function Qp(){if(et===2){et=0;var e=na,t=ml,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var l=F.p;F.p=2;var r=_e;_e|=4;try{bp(e,t.alternate,t)}finally{_e=r,F.p=l,L.T=n}}et=3}}function Zp(){if(et===4||et===3){et=0,fg();var e=na,t=ml,n=An,l=Dp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,ml=na=null,Kp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ta=null),xo(n),t=t.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=L.T,r=F.p,F.p=2,L.T=null;try{for(var u=e.onRecoverableError,d=0;d<l.length;d++){var m=l[d];u(m.value,{componentStack:m.stack})}}finally{L.T=t,F.p=r}}(An&3)!==0&&Jr(),cn(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Ic?yi++:(yi=0,Ic=e):yi=0,xi(0)}}function Kp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Il(t)))}function Jr(){return Xp(),Qp(),Zp(),Jp()}function Jp(){if(et!==5)return!1;var e=na,t=Wc;Wc=0;var n=xo(An),l=L.T,r=F.p;try{F.p=32>n?32:n,L.T=null,n=Fc,Fc=null;var u=na,d=An;if(et=0,ml=na=null,An=0,(_e&6)!==0)throw Error(o(331));var m=_e;if(_e|=4,Rp(u.current),zp(u,u.current,d,n),_e=m,xi(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Ul,u)}catch{}return!0}finally{F.p=r,L.T=l,Kp(e,t)}}function Wp(e,t,n){t=qt(n,t),t=Rc(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(Hl(e,2),cn(e))}function Ae(e,t,n){if(e.tag===3)Wp(e,e,n);else for(;t!==null;){if(t.tag===3){Wp(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ta===null||!ta.has(l))){e=qt(n,e),n=F0(2),l=Jn(t,n,2),l!==null&&(I0(n,l,t,e),Hl(l,2),cn(l));break}}t=t.return}}function ts(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new By;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Zc=!0,r.add(n),e=qy.bind(null,e,t,n),t.then(e,e))}function qy(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ue===e&&(ye&n)===n&&(Xe===4||Xe===3&&(ye&62914560)===ye&&300>zt()-Gr?(_e&2)===0&&gl(e,0):Kc|=n,hl===ye&&(hl=0)),cn(e)}function Fp(e,t){t===0&&(t=Xf()),e=ba(e,t),e!==null&&(Hl(e,t),cn(e))}function Gy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fp(e,n)}function Vy(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Fp(e,n)}function Xy(e,t){return ho(e,t)}var Wr=null,xl=null,ns=!1,Fr=!1,as=!1,la=0;function cn(e){e!==xl&&e.next===null&&(xl===null?Wr=xl=e:xl=xl.next=e),Fr=!0,ns||(ns=!0,Zy())}function xi(e,t){if(!as&&Fr){as=!0;do for(var n=!1,l=Wr;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var u=0;else{var d=l.suspendedLanes,m=l.pingedLanes;u=(1<<31-At(42|e)+1)-1,u&=r&~(d&~m),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,th(l,u))}else u=ye,u=tr(l,l===Ue?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Bl(l,u)||(n=!0,th(l,u));l=l.next}while(n);as=!1}}function Qy(){Ip()}function Ip(){Fr=ns=!1;var e=0;la!==0&&ax()&&(e=la);for(var t=zt(),n=null,l=Wr;l!==null;){var r=l.next,u=Pp(l,t);u===0?(l.next=null,n===null?Wr=r:n.next=r,r===null&&(xl=n)):(n=l,(e!==0||(u&3)!==0)&&(Fr=!0)),l=r}et!==0&&et!==5||xi(e),la!==0&&(la=0)}function Pp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-At(u),m=1<<d,S=r[d];S===-1?((m&n)===0||(m&l)!==0)&&(r[d]=vg(m,t)):S<=t&&(e.expiredLanes|=m),u&=~m}if(t=Ue,n=ye,n=tr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&mo(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&mo(l),xo(n)){case 2:case 8:n=Gf;break;case 32:n=Fi;break;case 268435456:n=Vf;break;default:n=Fi}return l=eh.bind(null,e),n=ho(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&mo(l),e.callbackPriority=2,e.callbackNode=null,2}function eh(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var l=ye;return l=tr(e,e===Ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Lp(e,l,t),Pp(e,zt()),e.callbackNode!=null&&e.callbackNode===n?eh.bind(null,e):null)}function th(e,t){if(Jr())return null;Lp(e,t,!0)}function Zy(){ix(function(){(_e&6)!==0?ho(qf,Qy):Ip()})}function ls(){if(la===0){var e=al;e===0&&(e=Ii,Ii<<=1,(Ii&261888)===0&&(Ii=256)),la=e}return la}function nh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ir(""+e)}function ah(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ky(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var u=nh((r[vt]||null).action),d=l.submitter;d&&(t=(t=d[vt]||null)?nh(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var m=new cr("action","action",null,l,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(la!==0){var S=d?ah(r,d):new FormData(r);Cc(n,{pending:!0,data:S,method:r.method,action:u},null,S)}}else typeof u=="function"&&(m.preventDefault(),S=d?ah(r,d):new FormData(r),Cc(n,{pending:!0,data:S,method:r.method,action:u},u,S))},currentTarget:r}]})}}for(var is=0;is<Yo.length;is++){var rs=Yo[is],Jy=rs.toLowerCase(),Wy=rs[0].toUpperCase()+rs.slice(1);Ft(Jy,"on"+Wy)}Ft(Nd,"onAnimationEnd"),Ft(Ld,"onAnimationIteration"),Ft(Ud,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(dy,"onTransitionRun"),Ft(py,"onTransitionStart"),Ft(hy,"onTransitionCancel"),Ft(Bd,"onTransitionEnd"),Ga("onMouseEnter",["mouseout","mouseover"]),Ga("onMouseLeave",["mouseout","mouseover"]),Ga("onPointerEnter",["pointerout","pointerover"]),Ga("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vi));function lh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var d=l.length-1;0<=d;d--){var m=l[d],S=m.instance,j=m.currentTarget;if(m=m.listener,S!==u&&r.isPropagationStopped())break e;u=m,r.currentTarget=j;try{u(r)}catch(U){dr(U)}r.currentTarget=null,u=S}else for(d=0;d<l.length;d++){if(m=l[d],S=m.instance,j=m.currentTarget,m=m.listener,S!==u&&r.isPropagationStopped())break e;u=m,r.currentTarget=j;try{u(r)}catch(U){dr(U)}r.currentTarget=null,u=S}}}}function ge(e,t){var n=t[vo];n===void 0&&(n=t[vo]=new Set);var l=e+"__bubble";n.has(l)||(ih(t,e,2,!1),n.add(l))}function us(e,t,n){var l=0;t&&(l|=4),ih(n,e,l,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[Ir]){e[Ir]=!0,If.forEach(function(n){n!=="selectionchange"&&(Fy.has(n)||us(n,!1,e),us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,us("selectionchange",!1,t))}}function ih(e,t,n,l){switch(Nh(t)){case 2:var r=_x;break;case 8:r=Tx;break;default:r=Es}n=r.bind(null,t,n,e),r=void 0,!jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function cs(e,t,n,l,r){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var m=l.stateNode.containerInfo;if(m===r)break;if(d===4)for(d=l.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;m!==null;){if(d=ka(m),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){l=u=d;continue e}m=m.parentNode}}l=l.return}sd(function(){var j=u,U=To(n),Y=[];e:{var A=Hd.get(e);if(A!==void 0){var O=cr,ee=e;switch(e){case"keypress":if(ur(n)===0)break e;case"keydown":case"keyup":O=Vg;break;case"focusin":ee="focus",O=Oo;break;case"focusout":ee="blur",O=Oo;break;case"beforeblur":case"afterblur":O=Oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Zg;break;case Nd:case Ld:case Ud:O=Lg;break;case Bd:O=Jg;break;case"scroll":case"scrollend":O=Rg;break;case"wheel":O=Fg;break;case"copy":case"cut":case"paste":O=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=md;break;case"toggle":case"beforetoggle":O=Pg}var ie=(t&4)!==0,De=!ie&&(e==="scroll"||e==="scrollend"),T=ie?A!==null?A+"Capture":null:A;ie=[];for(var w=j,z;w!==null;){var $=w;if(z=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||z===null||T===null||($=Yl(w,T),$!=null&&ie.push(bi(w,$,z))),De)break;w=w.return}0<ie.length&&(A=new O(A,ee,null,n,U),Y.push({event:A,listeners:ie}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",A&&n!==_o&&(ee=n.relatedTarget||n.fromElement)&&(ka(ee)||ee[$a]))break e;if((O||A)&&(A=U.window===U?U:(A=U.ownerDocument)?A.defaultView||A.parentWindow:window,O?(ee=n.relatedTarget||n.toElement,O=j,ee=ee?ka(ee):null,ee!==null&&(De=f(ee),ie=ee.tag,ee!==De||ie!==5&&ie!==27&&ie!==6)&&(ee=null)):(O=null,ee=j),O!==ee)){if(ie=pd,$="onMouseLeave",T="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ie=md,$="onPointerLeave",T="onPointerEnter",w="pointer"),De=O==null?A:kl(O),z=ee==null?A:kl(ee),A=new ie($,w+"leave",O,n,U),A.target=De,A.relatedTarget=z,$=null,ka(U)===j&&(ie=new ie(T,w+"enter",ee,n,U),ie.target=z,ie.relatedTarget=De,$=ie),De=$,O&&ee)t:{for(ie=Iy,T=O,w=ee,z=0,$=T;$;$=ie($))z++;$=0;for(var ne=w;ne;ne=ie(ne))$++;for(;0<z-$;)T=ie(T),z--;for(;0<$-z;)w=ie(w),$--;for(;z--;){if(T===w||w!==null&&T===w.alternate){ie=T;break t}T=ie(T),w=ie(w)}ie=null}else ie=null;O!==null&&rh(Y,A,O,ie,!1),ee!==null&&De!==null&&rh(Y,De,ee,ie,!0)}}e:{if(A=j?kl(j):window,O=A.nodeName&&A.nodeName.toLowerCase(),O==="select"||O==="input"&&A.type==="file")var Ee=Ed;else if(Sd(A))if(Cd)Ee=cy;else{Ee=uy;var te=ry}else O=A.nodeName,!O||O.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?j&&Co(j.elementType)&&(Ee=Ed):Ee=oy;if(Ee&&(Ee=Ee(e,j))){wd(Y,Ee,n,U);break e}te&&te(e,A,j),e==="focusout"&&j&&A.type==="number"&&j.memoizedProps.value!=null&&Eo(A,"number",A.value)}switch(te=j?kl(j):window,e){case"focusin":(Sd(te)||te.contentEditable==="true")&&(Ja=te,Ho=j,Jl=null);break;case"focusout":Jl=Ho=Ja=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,Od(Y,n,U);break;case"selectionchange":if(fy)break;case"keydown":case"keyup":Od(Y,n,U)}var se;if(No)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Ka?vd(e,n)&&(xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(xe="onCompositionStart");xe&&(gd&&n.locale!=="ko"&&(Ka||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ka&&(se=fd()):(qn=U,Ao="value"in qn?qn.value:qn.textContent,Ka=!0)),te=Pr(j,xe),0<te.length&&(xe=new hd(xe,e,null,n,U),Y.push({event:xe,listeners:te}),se?xe.data=se:(se=bd(n),se!==null&&(xe.data=se)))),(se=ty?ny(e,n):ay(e,n))&&(xe=Pr(j,"onBeforeInput"),0<xe.length&&(te=new hd("onBeforeInput","beforeinput",null,n,U),Y.push({event:te,listeners:xe}),te.data=se)),Ky(Y,e,j,n,U)}lh(Y,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pr(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=Yl(e,n),r!=null&&l.unshift(bi(e,r,u)),r=Yl(e,t),r!=null&&l.push(bi(e,r,u))),e.tag===3)return l;e=e.return}return[]}function Iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rh(e,t,n,l,r){for(var u=t._reactName,d=[];n!==null&&n!==l;){var m=n,S=m.alternate,j=m.stateNode;if(m=m.tag,S!==null&&S===l)break;m!==5&&m!==26&&m!==27||j===null||(S=j,r?(j=Yl(n,u),j!=null&&d.unshift(bi(n,j,S))):r||(j=Yl(n,u),j!=null&&d.push(bi(n,j,S)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Py=/\r\n?/g,ex=/\u0000|\uFFFD/g;function uh(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(ex,"")}function oh(e,t){return t=uh(t),uh(e)===t}function Oe(e,t,n,l,r,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Xa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Xa(e,""+l);break;case"className":ar(e,"class",l);break;case"tabIndex":ar(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ar(e,n,l);break;case"style":od(e,l,u);break;case"data":if(t!=="object"){ar(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ir(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Oe(e,t,"name",r.name,r,null),Oe(e,t,"formEncType",r.formEncType,r,null),Oe(e,t,"formMethod",r.formMethod,r,null),Oe(e,t,"formTarget",r.formTarget,r,null)):(Oe(e,t,"encType",r.encType,r,null),Oe(e,t,"method",r.method,r,null),Oe(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ir(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=hn);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ir(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),nr(e,"popover",l);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":nr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=jg.get(n)||n,nr(e,n,l))}}function ss(e,t,n,l,r,u){switch(n){case"style":od(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Xa(e,l):(typeof l=="number"||typeof l=="bigint")&&Xa(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),u=e[vt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,r),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):nr(e,n,l)}}}function ot(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Oe(e,t,u,d,n,null)}}r&&Oe(e,t,"srcSet",n.srcSet,n,null),l&&Oe(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var m=u=d=r=null,S=null,j=null;for(l in n)if(n.hasOwnProperty(l)){var U=n[l];if(U!=null)switch(l){case"name":r=U;break;case"type":d=U;break;case"checked":S=U;break;case"defaultChecked":j=U;break;case"value":u=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Oe(e,t,l,U,n,null)}}ld(e,u,m,S,j,d,r,!1);return;case"select":ge("invalid",e),l=d=u=null;for(r in n)if(n.hasOwnProperty(r)&&(m=n[r],m!=null))switch(r){case"value":u=m;break;case"defaultValue":d=m;break;case"multiple":l=m;default:Oe(e,t,r,m,n,null)}t=u,n=d,e.multiple=!!l,t!=null?Va(e,!!l,t,!1):n!=null&&Va(e,!!l,n,!0);return;case"textarea":ge("invalid",e),u=r=l=null;for(d in n)if(n.hasOwnProperty(d)&&(m=n[d],m!=null))switch(d){case"value":l=m;break;case"defaultValue":r=m;break;case"children":u=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(o(91));break;default:Oe(e,t,d,m,n,null)}rd(e,l,r,u);return;case"option":for(S in n)n.hasOwnProperty(S)&&(l=n[S],l!=null)&&(S==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Oe(e,t,S,l,n,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<vi.length;l++)ge(vi[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Oe(e,t,j,l,n,null)}return;default:if(Co(t)){for(U in n)n.hasOwnProperty(U)&&(l=n[U],l!==void 0&&ss(e,t,U,l,n,void 0));return}}for(m in n)n.hasOwnProperty(m)&&(l=n[m],l!=null&&Oe(e,t,m,l,n,null))}function tx(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,d=null,m=null,S=null,j=null,U=null;for(O in n){var Y=n[O];if(n.hasOwnProperty(O)&&Y!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":S=Y;default:l.hasOwnProperty(O)||Oe(e,t,O,null,l,Y)}}for(var A in l){var O=l[A];if(Y=n[A],l.hasOwnProperty(A)&&(O!=null||Y!=null))switch(A){case"type":u=O;break;case"name":r=O;break;case"checked":j=O;break;case"defaultChecked":U=O;break;case"value":d=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:O!==Y&&Oe(e,t,A,O,l,Y)}}wo(e,d,m,S,j,U,u,r);return;case"select":O=d=m=A=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":O=S;default:l.hasOwnProperty(u)||Oe(e,t,u,null,l,S)}for(r in l)if(u=l[r],S=n[r],l.hasOwnProperty(r)&&(u!=null||S!=null))switch(r){case"value":A=u;break;case"defaultValue":m=u;break;case"multiple":d=u;default:u!==S&&Oe(e,t,r,u,l,S)}t=m,n=d,l=O,A!=null?Va(e,!!n,A,!1):!!l!=!!n&&(t!=null?Va(e,!!n,t,!0):Va(e,!!n,n?[]:"",!1));return;case"textarea":O=A=null;for(m in n)if(r=n[m],n.hasOwnProperty(m)&&r!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Oe(e,t,m,null,l,r)}for(d in l)if(r=l[d],u=n[d],l.hasOwnProperty(d)&&(r!=null||u!=null))switch(d){case"value":A=r;break;case"defaultValue":O=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==u&&Oe(e,t,d,r,l,u)}id(e,A,O);return;case"option":for(var ee in n)A=n[ee],n.hasOwnProperty(ee)&&A!=null&&!l.hasOwnProperty(ee)&&(ee==="selected"?e.selected=!1:Oe(e,t,ee,null,l,A));for(S in l)A=l[S],O=n[S],l.hasOwnProperty(S)&&A!==O&&(A!=null||O!=null)&&(S==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Oe(e,t,S,A,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in n)A=n[ie],n.hasOwnProperty(ie)&&A!=null&&!l.hasOwnProperty(ie)&&Oe(e,t,ie,null,l,A);for(j in l)if(A=l[j],O=n[j],l.hasOwnProperty(j)&&A!==O&&(A!=null||O!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:Oe(e,t,j,A,l,O)}return;default:if(Co(t)){for(var De in n)A=n[De],n.hasOwnProperty(De)&&A!==void 0&&!l.hasOwnProperty(De)&&ss(e,t,De,void 0,l,A);for(U in l)A=l[U],O=n[U],!l.hasOwnProperty(U)||A===O||A===void 0&&O===void 0||ss(e,t,U,A,l,O);return}}for(var T in n)A=n[T],n.hasOwnProperty(T)&&A!=null&&!l.hasOwnProperty(T)&&Oe(e,t,T,null,l,A);for(Y in l)A=l[Y],O=n[Y],!l.hasOwnProperty(Y)||A===O||A==null&&O==null||Oe(e,t,Y,A,l,O)}function ch(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],u=r.transferSize,d=r.initiatorType,m=r.duration;if(u&&m&&ch(d)){for(d=0,m=r.responseEnd,l+=1;l<n.length;l++){var S=n[l],j=S.startTime;if(j>m)break;var U=S.transferSize,Y=S.initiatorType;U&&ch(Y)&&(S=S.responseEnd,d+=U*(S<m?1:(m-j)/(S-j)))}if(--l,t+=8*(u+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fs=null,ds=null;function eu(e){return e.nodeType===9?e:e.ownerDocument}function sh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hs=null;function ax(){var e=window.event;return e&&e.type==="popstate"?e===hs?!1:(hs=e,!0):(hs=null,!1)}var dh=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(e){return ph.resolve(null).then(e).catch(rx)}:dh;function rx(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function hh(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),wl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Si(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Si(n);for(var u=n.firstChild;u;){var d=u.nextSibling,m=u.nodeName;u[$l]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=d}}else n==="body"&&Si(e.ownerDocument.body);n=r}while(n);wl(t)}function mh(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function ms(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ms(n),bo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ux(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[$l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function ox(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function gh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function gs(e){return e.data==="$?"||e.data==="$~"}function ys(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xs=null;function yh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function vh(e,t,n){switch(t=eu(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Si(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bo(e)}var Kt=new Map,bh=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=F.d;F.d={f:sx,r:fx,D:dx,C:px,L:hx,m:mx,X:yx,S:gx,M:xx};function sx(){var e=Rn.f(),t=Qr();return e||t}function fx(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?B0(t):Rn.r(e)}var vl=typeof document>"u"?null:document;function Sh(e,t,n){var l=vl;if(l&&typeof t=="string"&&t){var r=kt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),bh.has(r)||(bh.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),ot(t,"link",e),nt(t),l.head.appendChild(t)))}}function dx(e){Rn.D(e),Sh("dns-prefetch",e,null)}function px(e,t){Rn.C(e,t),Sh("preconnect",e,t)}function hx(e,t,n){Rn.L(e,t,n);var l=vl;if(l&&e&&t){var r='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+kt(n.imageSizes)+'"]')):r+='[href="'+kt(e)+'"]';var u=r;switch(t){case"style":u=bl(e);break;case"script":u=Sl(e)}Kt.has(u)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(u,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(wi(u))||t==="script"&&l.querySelector(Ei(u))||(t=l.createElement("link"),ot(t,"link",e),nt(t),l.head.appendChild(t)))}}function mx(e,t){Rn.m(e,t);var n=vl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',u=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Sl(e)}if(!Kt.has(u)&&(e=v({rel:"modulepreload",href:e},t),Kt.set(u,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ei(u)))return}l=n.createElement("link"),ot(l,"link",e),nt(l),n.head.appendChild(l)}}}function gx(e,t,n){Rn.S(e,t,n);var l=vl;if(l&&e){var r=qa(l).hoistableStyles,u=bl(e);t=t||"default";var d=r.get(u);if(!d){var m={loading:0,preload:null};if(d=l.querySelector(wi(u)))m.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(u))&&vs(e,n);var S=d=l.createElement("link");nt(S),ot(S,"link",e),S._p=new Promise(function(j,U){S.onload=j,S.onerror=U}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,nu(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:m},r.set(u,d)}}}function yx(e,t){Rn.X(e,t);var n=vl;if(n&&e){var l=qa(n).hoistableScripts,r=Sl(e),u=l.get(r);u||(u=n.querySelector(Ei(r)),u||(e=v({src:e,async:!0},t),(t=Kt.get(r))&&bs(e,t),u=n.createElement("script"),nt(u),ot(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(r,u))}}function xx(e,t){Rn.M(e,t);var n=vl;if(n&&e){var l=qa(n).hoistableScripts,r=Sl(e),u=l.get(r);u||(u=n.querySelector(Ei(r)),u||(e=v({src:e,async:!0,type:"module"},t),(t=Kt.get(r))&&bs(e,t),u=n.createElement("script"),nt(u),ot(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(r,u))}}function wh(e,t,n,l){var r=(r=oe.current)?tu(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=bl(n.href),n=qa(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=bl(n.href);var u=qa(r).hoistableStyles,d=u.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=r.querySelector(wi(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),u||vx(r,e,n,d.state))),t&&l===null)throw Error(o(528,""));return d}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Sl(n),n=qa(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bl(e){return'href="'+kt(e)+'"'}function wi(e){return'link[rel="stylesheet"]['+e+"]"}function Eh(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function vx(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ot(t,"link",n),nt(t),e.head.appendChild(t))}function Sl(e){return'[src="'+kt(e)+'"]'}function Ei(e){return"script[async]"+e}function Ch(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+kt(n.href)+'"]');if(l)return t.instance=l,nt(l),l;var r=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nt(l),ot(l,"style",r),nu(l,n.precedence,e),t.instance=l;case"stylesheet":r=bl(n.href);var u=e.querySelector(wi(r));if(u)return t.state.loading|=4,t.instance=u,nt(u),u;l=Eh(n),(r=Kt.get(r))&&vs(l,r),u=(e.ownerDocument||e).createElement("link"),nt(u);var d=u;return d._p=new Promise(function(m,S){d.onload=m,d.onerror=S}),ot(u,"link",l),t.state.loading|=4,nu(u,n.precedence,e),t.instance=u;case"script":return u=Sl(n.src),(r=e.querySelector(Ei(u)))?(t.instance=r,nt(r),r):(l=n,(r=Kt.get(u))&&(l=v({},n),bs(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),nt(r),ot(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,nu(l,n.precedence,e));return t.instance}function nu(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,u=r,d=0;d<l.length;d++){var m=l[d];if(m.dataset.precedence===t)u=m;else if(u!==r)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function vs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var au=null;function _h(e,t,n){if(au===null){var l=new Map,r=au=new Map;r.set(n,l)}else r=au,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var u=n[r];if(!(u[$l]||u[lt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var m=l.get(d);m?m.push(u):l.set(d,[u])}}return l}function Th(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function bx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sx(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=bl(l.href),u=t.querySelector(wi(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=lu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,nt(u);return}u=t.ownerDocument||t,l=Eh(l),(r=Kt.get(r))&&vs(l,r),u=u.createElement("link"),nt(u);var d=u;d._p=new Promise(function(m,S){d.onload=m,d.onerror=S}),ot(u,"link",l),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=lu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ss=0;function wx(e,t){return e.stylesheets&&e.count===0&&ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Ss===0&&(Ss=62500*nx());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ss?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function lu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var iu=null;function ru(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,iu=new Map,t.forEach(Ex,e),iu=null,lu.call(e))}function Ex(e,t){if(!(t.state.loading&4)){var n=iu.get(e);if(n)var l=n.get(null);else{n=new Map,iu.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var d=r[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}r=t.instance,d=r.getAttribute("data-precedence"),u=n.get(d)||l,u===l&&n.set(null,r),n.set(d,r),this.count++,l=lu.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),u?u.parentNode.insertBefore(r,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ci={$$typeof:V,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Cx(e,t,n,l,r,u,d,m,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.hiddenUpdates=go(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function jh(e,t,n,l,r,u,d,m,S,j,U,Y){return e=new Cx(e,t,n,d,S,j,U,Y,m),t=1,u===!0&&(t|=24),u=Mt(3,null,null,t),e.current=u,u.stateNode=e,t=ec(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},lc(u),e}function Ah(e){return e?(e=Ia,e):Ia}function Rh(e,t,n,l,r,u){r=Ah(r),l.context===null?l.context=r:l.pendingContext=r,l=Kn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=Jn(e,l,t),n!==null&&(_t(n,e,t),ni(n,e,t))}function Mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ws(e,t){Mh(e,t),(e=e.alternate)&&Mh(e,t)}function Oh(e){if(e.tag===13||e.tag===31){var t=ba(e,67108864);t!==null&&_t(t,e,67108864),ws(e,67108864)}}function Dh(e){if(e.tag===13||e.tag===31){var t=Ut();t=yo(t);var n=ba(e,t);n!==null&&_t(n,e,t),ws(e,t)}}var uu=!0;function _x(e,t,n,l){var r=L.T;L.T=null;var u=F.p;try{F.p=2,Es(e,t,n,l)}finally{F.p=u,L.T=r}}function Tx(e,t,n,l){var r=L.T;L.T=null;var u=F.p;try{F.p=8,Es(e,t,n,l)}finally{F.p=u,L.T=r}}function Es(e,t,n,l){if(uu){var r=Cs(l);if(r===null)cs(e,t,l,ou,n),Lh(e,l);else if(jx(r,e,t,n,l))l.stopPropagation();else if(Lh(e,l),t&4&&-1<zx.indexOf(e)){for(;r!==null;){var u=Ya(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=ma(u.pendingLanes);if(d!==0){var m=u;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var S=1<<31-At(d);m.entanglements[1]|=S,d&=~S}cn(u),(_e&6)===0&&(Vr=zt()+500,xi(0))}}break;case 31:case 13:m=ba(u,2),m!==null&&_t(m,u,2),Qr(),ws(u,2)}if(u=Cs(l),u===null&&cs(e,t,l,ou,n),u===r)break;r=u}r!==null&&l.stopPropagation()}else cs(e,t,l,null,n)}}function Cs(e){return e=To(e),_s(e)}var ou=null;function _s(e){if(ou=null,e=ka(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ou=e,null}function Nh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dg()){case qf:return 2;case Gf:return 8;case Fi:case pg:return 32;case Vf:return 268435456;default:return 32}default:return 32}}var Ts=!1,ra=null,ua=null,oa=null,_i=new Map,Ti=new Map,ca=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lh(e,t){switch(e){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function zi(e,t,n,l,r,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[r]},t!==null&&(t=Ya(t),t!==null&&Oh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function jx(e,t,n,l,r){switch(t){case"focusin":return ra=zi(ra,e,t,n,l,r),!0;case"dragenter":return ua=zi(ua,e,t,n,l,r),!0;case"mouseover":return oa=zi(oa,e,t,n,l,r),!0;case"pointerover":var u=r.pointerId;return _i.set(u,zi(_i.get(u)||null,e,t,n,l,r)),!0;case"gotpointercapture":return u=r.pointerId,Ti.set(u,zi(Ti.get(u)||null,e,t,n,l,r)),!0}return!1}function Uh(e){var t=ka(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Dh(n)});return}}else if(t===31){if(t=x(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Dh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);_o=l,n.target.dispatchEvent(l),_o=null}else return t=Ya(n),t!==null&&Oh(t),e.blockedOn=n,!1;t.shift()}return!0}function Bh(e,t,n){cu(e)&&n.delete(t)}function Ax(){Ts=!1,ra!==null&&cu(ra)&&(ra=null),ua!==null&&cu(ua)&&(ua=null),oa!==null&&cu(oa)&&(oa=null),_i.forEach(Bh),Ti.forEach(Bh)}function su(e,t){e.blockedOn===t&&(e.blockedOn=null,Ts||(Ts=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ax)))}var fu=null;function Hh(e){fu!==e&&(fu=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){fu===e&&(fu=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(_s(l||n)===null)continue;break}var u=Ya(n);u!==null&&(e.splice(t,3),t-=3,Cc(u,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function wl(e){function t(S){return su(S,e)}ra!==null&&su(ra,e),ua!==null&&su(ua,e),oa!==null&&su(oa,e),_i.forEach(t),Ti.forEach(t);for(var n=0;n<ca.length;n++){var l=ca[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ca.length&&(n=ca[0],n.blockedOn===null);)Uh(n),n.blockedOn===null&&ca.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],u=n[l+1],d=r[vt]||null;if(typeof u=="function")d||Hh(n);else if(d){var m=null;if(u&&u.hasAttribute("formAction")){if(r=u,d=u[vt]||null)m=d.formAction;else if(_s(r)!==null)continue}else m=d.action;typeof m=="function"?n[l+1]=m:(n.splice(l,3),l-=3),Hh(n)}}}function $h(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function zs(e){this._internalRoot=e}du.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=Ut();Rh(n,l,e,t,null,null)},du.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rh(e.current,2,null,e,null,null),Qr(),t[$a]=null}};function du(e){this._internalRoot=e}du.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ca.length&&t!==0&&t<ca[n].priority;n++);ca.splice(n,0,e),n===0&&Uh(e)}};var kh=i.version;if(kh!=="19.2.4")throw Error(o(527,kh,"19.2.4"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Rx={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Ul=pu.inject(Rx),jt=pu}catch{}}return Ai.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,l="",r=Z0,u=K0,d=J0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=jh(e,1,!1,null,null,n,l,null,r,u,d,$h),e[$a]=t.current,os(e),new zs(t)},Ai.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var l=!1,r="",u=Z0,d=K0,m=J0,S=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=jh(e,1,!0,t,n??null,l,r,S,u,d,m,$h),t.context=Ah(null),n=t.current,l=Ut(),l=yo(l),r=Kn(l),r.callback=null,Jn(n,r,l),n=l,t.current.lanes=n,Hl(t,n),cn(t),e[$a]=t.current,os(e),new du(t)},Ai.version="19.2.4",Ai}var Wh;function Yx(){if(Wh)return Rs.exports;Wh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Rs.exports=kx(),Rs.exports}var qx=Yx(),Ns={exports:{}},Ls={};var Fh;function Gx(){if(Fh)return Ls;Fh=1;var a=Gu();function i(g,y){return g===y&&(g!==0||1/g===1/y)||g!==g&&y!==y}var c=typeof Object.is=="function"?Object.is:i,o=a.useSyncExternalStore,s=a.useRef,f=a.useEffect,p=a.useMemo,x=a.useDebugValue;return Ls.useSyncExternalStoreWithSelector=function(g,y,b,v,D){var q=s(null);if(q.current===null){var B={hasValue:!1,value:null};q.current=B}else B=q.current;q=p(function(){function R(Q){if(!X){if(X=!0,Z=Q,Q=v(Q),D!==void 0&&B.hasValue){var J=B.value;if(D(J,Q))return V=J}return V=Q}if(J=V,c(Z,Q))return J;var N=v(Q);return D!==void 0&&D(J,N)?(Z=Q,J):(Z=Q,V=N)}var X=!1,Z,V,M=b===void 0?null:b;return[function(){return R(y())},M===null?void 0:function(){return R(M())}]},[y,b,v,D]);var G=o(g,q[0],q[1]);return f(function(){B.hasValue=!0,B.value=G},[G]),x(G),G},Ls}var Ih;function Vx(){return Ih||(Ih=1,Ns.exports=Gx()),Ns.exports}var Xx=Vx();function Qx(a){a()}function Zx(){let a=null,i=null;return{clear(){a=null,i=null},notify(){Qx(()=>{let c=a;for(;c;)c.callback(),c=c.next})},get(){const c=[];let o=a;for(;o;)c.push(o),o=o.next;return c},subscribe(c){let o=!0;const s=i={callback:c,next:null,prev:i};return s.prev?s.prev.next=s:a=s,function(){!o||a===null||(o=!1,s.next?s.next.prev=s.prev:i=s.prev,s.prev?s.prev.next=s.next:a=s.next)}}}}var Ph={notify(){},get:()=>[]};function Kx(a,i){let c,o=Ph,s=0,f=!1;function p(G){b();const R=o.subscribe(G);let X=!1;return()=>{X||(X=!0,R(),v())}}function x(){o.notify()}function g(){B.onStateChange&&B.onStateChange()}function y(){return f}function b(){s++,c||(c=a.subscribe(g),o=Zx())}function v(){s--,c&&s===0&&(c(),c=void 0,o.clear(),o=Ph)}function D(){f||(f=!0,b())}function q(){f&&(f=!1,v())}const B={addNestedSub:p,notifyNestedSubs:x,handleChangeWrapper:g,isSubscribed:y,trySubscribe:D,tryUnsubscribe:q,getListeners:()=>o};return B}var Jx=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wx=Jx(),Fx=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Ix=Fx(),Px=()=>Wx||Ix?E.useLayoutEffect:E.useEffect,ev=Px(),tv=Symbol.for("react-redux-context"),nv=typeof globalThis<"u"?globalThis:{};function av(){if(!E.createContext)return{};const a=nv[tv]??=new Map;let i=a.get(E.createContext);return i||(i=E.createContext(null),a.set(E.createContext,i)),i}var Mu=av();function lv(a){const{children:i,context:c,serverState:o,store:s}=a,f=E.useMemo(()=>{const g=Kx(s);return{store:s,subscription:g,getServerState:o?()=>o:void 0}},[s,o]),p=E.useMemo(()=>s.getState(),[s]);ev(()=>{const{subscription:g}=f;return g.onStateChange=g.notifyNestedSubs,g.trySubscribe(),p!==s.getState()&&g.notifyNestedSubs(),()=>{g.tryUnsubscribe(),g.onStateChange=void 0}},[f,p]);const x=c||Mu;return E.createElement(x.Provider,{value:f},i)}var iv=lv;function Qm(a=Mu){return function(){return E.useContext(a)}}var rv=Qm(),uv=(a,i)=>a===i;function ov(a=Mu){const i=a===Mu?rv:Qm(a),c=(o,s={})=>{const{equalityFn:f=uv}=typeof s=="function"?{equalityFn:s}:s,p=i(),{store:x,subscription:g,getServerState:y}=p;E.useRef(!0);const b=E.useCallback({[o.name](D){return o(D)}}[o.name],[o]),v=Xx.useSyncExternalStoreWithSelector(g.addNestedSub,x.getState,y||x.getState,b,f);return E.useDebugValue(v),v};return Object.assign(c,{withTypes:()=>c}),c}var cv=ov();var em="popstate";function tm(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function sv(a={}){function i(o,s){let f=s.state?.masked,{pathname:p,search:x,hash:g}=f||o.location;return nf("",{pathname:p,search:x,hash:g},s.state&&s.state.usr||null,s.state&&s.state.key||"default",f?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function c(o,s){return typeof s=="string"?s:Bi(s)}return dv(i,c,null,a)}function Ge(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function fn(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function fv(){return Math.random().toString(36).substring(2,10)}function nm(a,i){return{usr:a.state,key:a.key,idx:i,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function nf(a,i,c=null,o,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Ml(i):i,state:c,key:i&&i.key||o||fv(),unstable_mask:s}}function Bi({pathname:a="/",search:i="",hash:c=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),c&&c!=="#"&&(a+=c.charAt(0)==="#"?c:"#"+c),a}function Ml(a){let i={};if(a){let c=a.indexOf("#");c>=0&&(i.hash=a.substring(c),a=a.substring(0,c));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function dv(a,i,c,o={}){let{window:s=document.defaultView,v5Compat:f=!1}=o,p=s.history,x="POP",g=null,y=b();y==null&&(y=0,p.replaceState({...p.state,idx:y},""));function b(){return(p.state||{idx:null}).idx}function v(){x="POP";let R=b(),X=R==null?null:R-y;y=R,g&&g({action:x,location:G.location,delta:X})}function D(R,X){x="PUSH";let Z=tm(R)?R:nf(G.location,R,X);y=b()+1;let V=nm(Z,y),M=G.createHref(Z.unstable_mask||Z);try{p.pushState(V,"",M)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;s.location.assign(M)}f&&g&&g({action:x,location:G.location,delta:1})}function q(R,X){x="REPLACE";let Z=tm(R)?R:nf(G.location,R,X);y=b();let V=nm(Z,y),M=G.createHref(Z.unstable_mask||Z);p.replaceState(V,"",M),f&&g&&g({action:x,location:G.location,delta:0})}function B(R){return pv(R)}let G={get action(){return x},get location(){return a(s,p)},listen(R){if(g)throw new Error("A history only accepts one active listener");return s.addEventListener(em,v),g=R,()=>{s.removeEventListener(em,v),g=null}},createHref(R){return i(s,R)},createURL:B,encodeLocation(R){let X=B(R);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:D,replace:q,go(R){return p.go(R)}};return G}function pv(a,i=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(c,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Bi(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function Zm(a,i,c="/"){return hv(a,i,c,!1)}function hv(a,i,c,o){let s=typeof i=="string"?Ml(i):i,f=Ln(s.pathname||"/",c);if(f==null)return null;let p=Km(a);mv(p);let x=null;for(let g=0;x==null&&g<p.length;++g){let y=Tv(f);x=Cv(p[g],y,o)}return x}function Km(a,i=[],c=[],o="",s=!1){let f=(p,x,g=s,y)=>{let b={relativePath:y===void 0?p.path||"":y,caseSensitive:p.caseSensitive===!0,childrenIndex:x,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&g)return;Ge(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let v=sn([o,b.relativePath]),D=c.concat(b);p.children&&p.children.length>0&&(Ge(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Km(p.children,i,D,v,g)),!(p.path==null&&!p.index)&&i.push({path:v,score:wv(v,p.index),routesMeta:D})};return a.forEach((p,x)=>{if(p.path===""||!p.path?.includes("?"))f(p,x);else for(let g of Jm(p.path))f(p,x,!0,g)}),i}function Jm(a){let i=a.split("/");if(i.length===0)return[];let[c,...o]=i,s=c.endsWith("?"),f=c.replace(/\?$/,"");if(o.length===0)return s?[f,""]:[f];let p=Jm(o.join("/")),x=[];return x.push(...p.map(g=>g===""?f:[f,g].join("/"))),s&&x.push(...p),x.map(g=>a.startsWith("/")&&g===""?"/":g)}function mv(a){a.sort((i,c)=>i.score!==c.score?c.score-i.score:Ev(i.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var gv=/^:[\w-]+$/,yv=3,xv=2,vv=1,bv=10,Sv=-2,am=a=>a==="*";function wv(a,i){let c=a.split("/"),o=c.length;return c.some(am)&&(o+=Sv),i&&(o+=xv),c.filter(s=>!am(s)).reduce((s,f)=>s+(gv.test(f)?yv:f===""?vv:bv),o)}function Ev(a,i){return a.length===i.length&&a.slice(0,-1).every((o,s)=>o===i[s])?a[a.length-1]-i[i.length-1]:0}function Cv(a,i,c=!1){let{routesMeta:o}=a,s={},f="/",p=[];for(let x=0;x<o.length;++x){let g=o[x],y=x===o.length-1,b=f==="/"?i:i.slice(f.length)||"/",v=Ou({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},b),D=g.route;if(!v&&y&&c&&!o[o.length-1].route.index&&(v=Ou({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},b)),!v)return null;Object.assign(s,v.params),p.push({params:s,pathname:sn([f,v.pathname]),pathnameBase:Rv(sn([f,v.pathnameBase])),route:D}),v.pathnameBase!=="/"&&(f=sn([f,v.pathnameBase]))}return p}function Ou(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[c,o]=_v(a.path,a.caseSensitive,a.end),s=i.match(c);if(!s)return null;let f=s[0],p=f.replace(/(.)\/+$/,"$1"),x=s.slice(1);return{params:o.reduce((y,{paramName:b,isOptional:v},D)=>{if(b==="*"){let B=x[D]||"";p=f.slice(0,f.length-B.length).replace(/(.)\/+$/,"$1")}const q=x[D];return v&&!q?y[b]=void 0:y[b]=(q||"").replace(/%2F/g,"/"),y},{}),pathname:f,pathnameBase:p,pattern:a}}function _v(a,i=!1,c=!0){fn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,x,g,y,b)=>{if(o.push({paramName:x,isOptional:g!=null}),g){let v=b.charAt(y+p.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),o]}function Tv(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return fn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function Ln(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let c=i.endsWith("/")?i.length-1:i.length,o=a.charAt(c);return o&&o!=="/"?null:a.slice(c)||"/"}var zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function jv(a,i="/"){let{pathname:c,search:o="",hash:s=""}=typeof a=="string"?Ml(a):a,f;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?f=lm(c.substring(1),"/"):f=lm(c,i)):f=i,{pathname:f,search:Mv(o),hash:Ov(s)}}function lm(a,i){let c=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?c.length>1&&c.pop():s!=="."&&c.push(s)}),c.length>1?c.join("/"):"/"}function Us(a,i,c,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Av(a){return a.filter((i,c)=>c===0||i.route.path&&i.route.path.length>0)}function Wm(a){let i=Av(a);return i.map((c,o)=>o===i.length-1?c.pathname:c.pathnameBase)}function Sf(a,i,c,o=!1){let s;typeof a=="string"?s=Ml(a):(s={...a},Ge(!s.pathname||!s.pathname.includes("?"),Us("?","pathname","search",s)),Ge(!s.pathname||!s.pathname.includes("#"),Us("#","pathname","hash",s)),Ge(!s.search||!s.search.includes("#"),Us("#","search","hash",s)));let f=a===""||s.pathname==="",p=f?"/":s.pathname,x;if(p==null)x=c;else{let v=i.length-1;if(!o&&p.startsWith("..")){let D=p.split("/");for(;D[0]==="..";)D.shift(),v-=1;s.pathname=D.join("/")}x=v>=0?i[v]:"/"}let g=jv(s,x),y=p&&p!=="/"&&p.endsWith("/"),b=(f||p===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(y||b)&&(g.pathname+="/"),g}var sn=a=>a.join("/").replace(/\/\/+/g,"/"),Rv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Mv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Ov=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Dv=class{constructor(a,i,c,o=!1){this.status=a,this.statusText=i||"",this.internal=o,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Nv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Lv(a){return a.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Im(a,i){let c=a;if(typeof c!="string"||!zv.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let o=c,s=!1;if(Fm)try{let f=new URL(window.location.href),p=c.startsWith("//")?new URL(f.protocol+c):new URL(c),x=Ln(p.pathname,i);p.origin===f.origin&&x!=null?c=x+p.search+p.hash:s=!0}catch{fn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pm=["POST","PUT","PATCH","DELETE"];new Set(Pm);var Uv=["GET",...Pm];new Set(Uv);var Ol=E.createContext(null);Ol.displayName="DataRouter";var Vu=E.createContext(null);Vu.displayName="DataRouterState";var Bv=E.createContext(!1),e1=E.createContext({isTransitioning:!1});e1.displayName="ViewTransition";var Hv=E.createContext(new Map);Hv.displayName="Fetchers";var $v=E.createContext(null);$v.displayName="Await";var Wt=E.createContext(null);Wt.displayName="Navigation";var Vi=E.createContext(null);Vi.displayName="Location";var Bn=E.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var wf=E.createContext(null);wf.displayName="RouteError";var t1="REACT_ROUTER_ERROR",kv="REDIRECT",Yv="ROUTE_ERROR_RESPONSE";function qv(a){if(a.startsWith(`${t1}:${kv}:{`))try{let i=JSON.parse(a.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function Gv(a){if(a.startsWith(`${t1}:${Yv}:{`))try{let i=JSON.parse(a.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new Dv(i.status,i.statusText,i.data)}catch{}}function Vv(a,{relative:i}={}){Ge(Xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=E.useContext(Wt),{hash:s,pathname:f,search:p}=Qi(a,{relative:i}),x=f;return c!=="/"&&(x=f==="/"?c:sn([c,f])),o.createHref({pathname:x,search:p,hash:s})}function Xi(){return E.useContext(Vi)!=null}function pa(){return Ge(Xi(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Vi).location}var n1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function a1(a){E.useContext(Wt).static||E.useLayoutEffect(a)}function Xv(){let{isDataRoute:a}=E.useContext(Bn);return a?l2():Qv()}function Qv(){Ge(Xi(),"useNavigate() may be used only in the context of a <Router> component.");let a=E.useContext(Ol),{basename:i,navigator:c}=E.useContext(Wt),{matches:o}=E.useContext(Bn),{pathname:s}=pa(),f=JSON.stringify(Wm(o)),p=E.useRef(!1);return a1(()=>{p.current=!0}),E.useCallback((g,y={})=>{if(fn(p.current,n1),!p.current)return;if(typeof g=="number"){c.go(g);return}let b=Sf(g,JSON.parse(f),s,y.relative==="path");a==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:sn([i,b.pathname])),(y.replace?c.replace:c.push)(b,y.state,y)},[i,c,f,s,a])}E.createContext(null);function Qi(a,{relative:i}={}){let{matches:c}=E.useContext(Bn),{pathname:o}=pa(),s=JSON.stringify(Wm(c));return E.useMemo(()=>Sf(a,JSON.parse(s),o,i==="path"),[a,s,o,i])}function Zv(a,i){return l1(a,i)}function l1(a,i,c){Ge(Xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=E.useContext(Wt),{matches:s}=E.useContext(Bn),f=s[s.length-1],p=f?f.params:{},x=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let R=y&&y.path||"";r1(x,!y||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let b=pa(),v;if(i){let R=typeof i=="string"?Ml(i):i;Ge(g==="/"||R.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),v=R}else v=b;let D=v.pathname||"/",q=D;if(g!=="/"){let R=g.replace(/^\//,"").split("/");q="/"+D.replace(/^\//,"").split("/").slice(R.length).join("/")}let B=Zm(a,{pathname:q});fn(y||B!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),fn(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Iv(B&&B.map(R=>Object.assign({},R,{params:Object.assign({},p,R.params),pathname:sn([g,o.encodeLocation?o.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:sn([g,o.encodeLocation?o.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),s,c);return i&&G?E.createElement(Vi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},G):G}function Kv(){let a=a2(),i=Nv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),c=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},p=null;return console.error("Error handled by React Router default ErrorBoundary:",a),p=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:f},"ErrorBoundary")," or"," ",E.createElement("code",{style:f},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},i),c?E.createElement("pre",{style:s},c):null,p)}var Jv=E.createElement(Kv,null),i1=class extends E.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.onError?this.props.onError(a,i):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const c=Gv(a.digest);c&&(a=c)}let i=a!==void 0?E.createElement(Bn.Provider,{value:this.props.routeContext},E.createElement(wf.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?E.createElement(Wv,{error:a},i):i}};i1.contextType=Bv;var Bs=new WeakMap;function Wv({children:a,error:i}){let{basename:c}=E.useContext(Wt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let o=qv(i.digest);if(o){let s=Bs.get(i);if(s)throw s;let f=Im(o.location,c);if(Fm&&!Bs.get(i))if(f.isExternal||o.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:o.replace}));throw Bs.set(i,p),p}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return a}function Fv({routeContext:a,match:i,children:c}){let o=E.useContext(Ol);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),E.createElement(Bn.Provider,{value:a},c)}function Iv(a,i=[],c){let o=c?.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let s=a,f=o?.errors;if(f!=null){let b=s.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);Ge(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),s=s.slice(0,Math.min(s.length,b+1))}let p=!1,x=-1;if(c&&o){p=o.renderFallback;for(let b=0;b<s.length;b++){let v=s[b];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(x=b),v.route.id){let{loaderData:D,errors:q}=o,B=v.route.loader&&!D.hasOwnProperty(v.route.id)&&(!q||q[v.route.id]===void 0);if(v.route.lazy||B){c.isStatic&&(p=!0),x>=0?s=s.slice(0,x+1):s=[s[0]];break}}}}let g=c?.onError,y=o&&g?(b,v)=>{g(b,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Lv(o.matches),errorInfo:v})}:void 0;return s.reduceRight((b,v,D)=>{let q,B=!1,G=null,R=null;o&&(q=f&&v.route.id?f[v.route.id]:void 0,G=v.route.errorElement||Jv,p&&(x<0&&D===0?(r1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,R=null):x===D&&(B=!0,R=v.route.hydrateFallbackElement||null)));let X=i.concat(s.slice(0,D+1)),Z=()=>{let V;return q?V=G:B?V=R:v.route.Component?V=E.createElement(v.route.Component,null):v.route.element?V=v.route.element:V=b,E.createElement(Fv,{match:v,routeContext:{outlet:b,matches:X,isDataRoute:o!=null},children:V})};return o&&(v.route.ErrorBoundary||v.route.errorElement||D===0)?E.createElement(i1,{location:o.location,revalidation:o.revalidation,component:G,error:q,children:Z(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:y}):Z()},null)}function Ef(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pv(a){let i=E.useContext(Ol);return Ge(i,Ef(a)),i}function e2(a){let i=E.useContext(Vu);return Ge(i,Ef(a)),i}function t2(a){let i=E.useContext(Bn);return Ge(i,Ef(a)),i}function Cf(a){let i=t2(a),c=i.matches[i.matches.length-1];return Ge(c.route.id,`${a} can only be used on routes that contain a unique "id"`),c.route.id}function n2(){return Cf("useRouteId")}function a2(){let a=E.useContext(wf),i=e2("useRouteError"),c=Cf("useRouteError");return a!==void 0?a:i.errors?.[c]}function l2(){let{router:a}=Pv("useNavigate"),i=Cf("useNavigate"),c=E.useRef(!1);return a1(()=>{c.current=!0}),E.useCallback(async(s,f={})=>{fn(c.current,n1),c.current&&(typeof s=="number"?await a.navigate(s):await a.navigate(s,{fromRouteId:i,...f}))},[a,i])}var im={};function r1(a,i,c){!i&&!im[a]&&(im[a]=!0,fn(!1,c))}E.memo(i2);function i2({routes:a,future:i,state:c,isStatic:o,onError:s}){return l1(a,void 0,{state:c,isStatic:o,onError:s})}function u1(a){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function r2({basename:a="/",children:i=null,location:c,navigationType:o="POP",navigator:s,static:f=!1,unstable_useTransitions:p}){Ge(!Xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=a.replace(/^\/*/,"/"),g=E.useMemo(()=>({basename:x,navigator:s,static:f,unstable_useTransitions:p,future:{}}),[x,s,f,p]);typeof c=="string"&&(c=Ml(c));let{pathname:y="/",search:b="",hash:v="",state:D=null,key:q="default",unstable_mask:B}=c,G=E.useMemo(()=>{let R=Ln(y,x);return R==null?null:{location:{pathname:R,search:b,hash:v,state:D,key:q,unstable_mask:B},navigationType:o}},[x,y,b,v,D,q,o,B]);return fn(G!=null,`<Router basename="${x}"> is not able to match the URL "${y}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:E.createElement(Wt.Provider,{value:g},E.createElement(Vi.Provider,{children:i,value:G}))}function u2({children:a,location:i}){return Zv(af(a),i)}function af(a,i=[]){let c=[];return E.Children.forEach(a,(o,s)=>{if(!E.isValidElement(o))return;let f=[...i,s];if(o.type===E.Fragment){c.push.apply(c,af(o.props.children,f));return}Ge(o.type===u1,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!o.props.index||!o.props.children,"An index route cannot have child routes.");let p={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=af(o.props.children,f)),c.push(p)}),c}var wu="get",Eu="application/x-www-form-urlencoded";function Xu(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function o2(a){return Xu(a)&&a.tagName.toLowerCase()==="button"}function c2(a){return Xu(a)&&a.tagName.toLowerCase()==="form"}function s2(a){return Xu(a)&&a.tagName.toLowerCase()==="input"}function f2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function d2(a,i){return a.button===0&&(!i||i==="_self")&&!f2(a)}var hu=null;function p2(){if(hu===null)try{new FormData(document.createElement("form"),0),hu=!1}catch{hu=!0}return hu}var h2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hs(a){return a!=null&&!h2.has(a)?(fn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eu}"`),null):a}function m2(a,i){let c,o,s,f,p;if(c2(a)){let x=a.getAttribute("action");o=x?Ln(x,i):null,c=a.getAttribute("method")||wu,s=Hs(a.getAttribute("enctype"))||Eu,f=new FormData(a)}else if(o2(a)||s2(a)&&(a.type==="submit"||a.type==="image")){let x=a.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||x.getAttribute("action");if(o=g?Ln(g,i):null,c=a.getAttribute("formmethod")||x.getAttribute("method")||wu,s=Hs(a.getAttribute("formenctype"))||Hs(x.getAttribute("enctype"))||Eu,f=new FormData(x,a),!p2()){let{name:y,type:b,value:v}=a;if(b==="image"){let D=y?`${y}.`:"";f.append(`${D}x`,"0"),f.append(`${D}y`,"0")}else y&&f.append(y,v)}}else{if(Xu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=wu,o=null,s=Eu,p=a}return f&&s==="text/plain"&&(p=f,f=void 0),{action:o,method:c.toLowerCase(),encType:s,formData:f,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _f(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function g2(a,i,c,o){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:i&&Ln(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function y2(a,i){if(a.id in i)return i[a.id];try{let c=await import(a.module);return i[a.id]=c,c}catch(c){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function x2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function v2(a,i,c){let o=await Promise.all(a.map(async s=>{let f=i.routes[s.route.id];if(f){let p=await y2(f,c);return p.links?p.links():[]}return[]}));return E2(o.flat(1).filter(x2).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function rm(a,i,c,o,s,f){let p=(g,y)=>c[y]?g.route.id!==c[y].route.id:!0,x=(g,y)=>c[y].pathname!==g.pathname||c[y].route.path?.endsWith("*")&&c[y].params["*"]!==g.params["*"];return f==="assets"?i.filter((g,y)=>p(g,y)||x(g,y)):f==="data"?i.filter((g,y)=>{let b=o.routes[g.route.id];if(!b||!b.hasLoader)return!1;if(p(g,y)||x(g,y))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function b2(a,i,{includeHydrateFallback:c}={}){return S2(a.map(o=>{let s=i.routes[o.route.id];if(!s)return[];let f=[s.module];return s.clientActionModule&&(f=f.concat(s.clientActionModule)),s.clientLoaderModule&&(f=f.concat(s.clientLoaderModule)),c&&s.hydrateFallbackModule&&(f=f.concat(s.hydrateFallbackModule)),s.imports&&(f=f.concat(s.imports)),f}).flat(1))}function S2(a){return[...new Set(a)]}function w2(a){let i={},c=Object.keys(a).sort();for(let o of c)i[o]=a[o];return i}function E2(a,i){let c=new Set;return new Set(i),a.reduce((o,s)=>{let f=JSON.stringify(w2(s));return c.has(f)||(c.add(f),o.push({key:f,link:s})),o},[])}function o1(){let a=E.useContext(Ol);return _f(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function C2(){let a=E.useContext(Vu);return _f(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Tf=E.createContext(void 0);Tf.displayName="FrameworkContext";function c1(){let a=E.useContext(Tf);return _f(a,"You must render this element inside a <HydratedRouter> element"),a}function _2(a,i){let c=E.useContext(Tf),[o,s]=E.useState(!1),[f,p]=E.useState(!1),{onFocus:x,onBlur:g,onMouseEnter:y,onMouseLeave:b,onTouchStart:v}=i,D=E.useRef(null);E.useEffect(()=>{if(a==="render"&&p(!0),a==="viewport"){let G=X=>{X.forEach(Z=>{p(Z.isIntersecting)})},R=new IntersectionObserver(G,{threshold:.5});return D.current&&R.observe(D.current),()=>{R.disconnect()}}},[a]),E.useEffect(()=>{if(o){let G=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(G)}}},[o]);let q=()=>{s(!0)},B=()=>{s(!1),p(!1)};return c?a!=="intent"?[f,D,{}]:[f,D,{onFocus:Ri(x,q),onBlur:Ri(g,B),onMouseEnter:Ri(y,q),onMouseLeave:Ri(b,B),onTouchStart:Ri(v,q)}]:[!1,D,{}]}function Ri(a,i){return c=>{a&&a(c),c.defaultPrevented||i(c)}}function T2({page:a,...i}){let{router:c}=o1(),o=E.useMemo(()=>Zm(c.routes,a,c.basename),[c.routes,a,c.basename]);return o?E.createElement(j2,{page:a,matches:o,...i}):null}function z2(a){let{manifest:i,routeModules:c}=c1(),[o,s]=E.useState([]);return E.useEffect(()=>{let f=!1;return v2(a,i,c).then(p=>{f||s(p)}),()=>{f=!0}},[a,i,c]),o}function j2({page:a,matches:i,...c}){let o=pa(),{future:s,manifest:f,routeModules:p}=c1(),{basename:x}=o1(),{loaderData:g,matches:y}=C2(),b=E.useMemo(()=>rm(a,i,y,f,o,"data"),[a,i,y,f,o]),v=E.useMemo(()=>rm(a,i,y,f,o,"assets"),[a,i,y,f,o]),D=E.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let G=new Set,R=!1;if(i.forEach(Z=>{let V=f.routes[Z.route.id];!V||!V.hasLoader||(!b.some(M=>M.route.id===Z.route.id)&&Z.route.id in g&&p[Z.route.id]?.shouldRevalidate||V.hasClientLoader?R=!0:G.add(Z.route.id))}),G.size===0)return[];let X=g2(a,x,s.unstable_trailingSlashAwareDataRequests,"data");return R&&G.size>0&&X.searchParams.set("_routes",i.filter(Z=>G.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[X.pathname+X.search]},[x,s.unstable_trailingSlashAwareDataRequests,g,o,f,b,i,a,p]),q=E.useMemo(()=>b2(v,f),[v,f]),B=z2(v);return E.createElement(E.Fragment,null,D.map(G=>E.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...c})),q.map(G=>E.createElement("link",{key:G,rel:"modulepreload",href:G,...c})),B.map(({key:G,link:R})=>E.createElement("link",{key:G,nonce:c.nonce,...R,crossOrigin:R.crossOrigin??c.crossOrigin})))}function A2(...a){return i=>{a.forEach(c=>{typeof c=="function"?c(i):c!=null&&(c.current=i)})}}var R2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R2&&(window.__reactRouterVersion="7.13.1")}catch{}function M2({basename:a,children:i,unstable_useTransitions:c,window:o}){let s=E.useRef();s.current==null&&(s.current=sv({window:o,v5Compat:!0}));let f=s.current,[p,x]=E.useState({action:f.action,location:f.location}),g=E.useCallback(y=>{c===!1?x(y):E.startTransition(()=>x(y))},[c]);return E.useLayoutEffect(()=>f.listen(g),[f,g]),E.createElement(r2,{basename:a,children:i,location:p.location,navigationType:p.action,navigator:f,unstable_useTransitions:c})}var s1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f1=E.forwardRef(function({onClick:i,discover:c="render",prefetch:o="none",relative:s,reloadDocument:f,replace:p,unstable_mask:x,state:g,target:y,to:b,preventScrollReset:v,viewTransition:D,unstable_defaultShouldRevalidate:q,...B},G){let{basename:R,navigator:X,unstable_useTransitions:Z}=E.useContext(Wt),V=typeof b=="string"&&s1.test(b),M=Im(b,R);b=M.to;let Q=Vv(b,{relative:s}),J=pa(),N=null;if(x){let Ne=Sf(x,[],J.unstable_mask?J.unstable_mask.pathname:"/",!0);R!=="/"&&(Ne.pathname=Ne.pathname==="/"?R:sn([R,Ne.pathname])),N=X.createHref(Ne)}let[K,de,k]=_2(o,B),W=L2(b,{replace:p,unstable_mask:x,state:g,target:y,preventScrollReset:v,relative:s,viewTransition:D,unstable_defaultShouldRevalidate:q,unstable_useTransitions:Z});function ae(Ne){i&&i(Ne),Ne.defaultPrevented||W(Ne)}let ve=!(M.isExternal||f),Ye=E.createElement("a",{...B,...k,href:(ve?N:void 0)||M.absoluteURL||Q,onClick:ve?ae:i,ref:A2(G,de),target:y,"data-discover":!V&&c==="render"?"true":void 0});return K&&!V?E.createElement(E.Fragment,null,Ye,E.createElement(T2,{page:Q})):Ye});f1.displayName="Link";var O2=E.forwardRef(function({"aria-current":i="page",caseSensitive:c=!1,className:o="",end:s=!1,style:f,to:p,viewTransition:x,children:g,...y},b){let v=Qi(p,{relative:y.relative}),D=pa(),q=E.useContext(Vu),{navigator:B,basename:G}=E.useContext(Wt),R=q!=null&&k2(v)&&x===!0,X=B.encodeLocation?B.encodeLocation(v).pathname:v.pathname,Z=D.pathname,V=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;c||(Z=Z.toLowerCase(),V=V?V.toLowerCase():null,X=X.toLowerCase()),V&&G&&(V=Ln(V,G)||V);const M=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let Q=Z===X||!s&&Z.startsWith(X)&&Z.charAt(M)==="/",J=V!=null&&(V===X||!s&&V.startsWith(X)&&V.charAt(X.length)==="/"),N={isActive:Q,isPending:J,isTransitioning:R},K=Q?i:void 0,de;typeof o=="function"?de=o(N):de=[o,Q?"active":null,J?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let k=typeof f=="function"?f(N):f;return E.createElement(f1,{...y,"aria-current":K,className:de,ref:b,style:k,to:p,viewTransition:x},typeof g=="function"?g(N):g)});O2.displayName="NavLink";var D2=E.forwardRef(({discover:a="render",fetcherKey:i,navigate:c,reloadDocument:o,replace:s,state:f,method:p=wu,action:x,onSubmit:g,relative:y,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:D,...q},B)=>{let{unstable_useTransitions:G}=E.useContext(Wt),R=H2(),X=$2(x,{relative:y}),Z=p.toLowerCase()==="get"?"get":"post",V=typeof x=="string"&&s1.test(x),M=Q=>{if(g&&g(Q),Q.defaultPrevented)return;Q.preventDefault();let J=Q.nativeEvent.submitter,N=J?.getAttribute("formmethod")||p,K=()=>R(J||Q.currentTarget,{fetcherKey:i,method:N,navigate:c,replace:s,state:f,relative:y,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:D});G&&c!==!1?E.startTransition(()=>K()):K()};return E.createElement("form",{ref:B,method:Z,action:X,onSubmit:o?g:M,...q,"data-discover":!V&&a==="render"?"true":void 0})});D2.displayName="Form";function N2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d1(a){let i=E.useContext(Ol);return Ge(i,N2(a)),i}function L2(a,{target:i,replace:c,unstable_mask:o,state:s,preventScrollReset:f,relative:p,viewTransition:x,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y}={}){let b=Xv(),v=pa(),D=Qi(a,{relative:p});return E.useCallback(q=>{if(d2(q,i)){q.preventDefault();let B=c!==void 0?c:Bi(v)===Bi(D),G=()=>b(a,{replace:B,unstable_mask:o,state:s,preventScrollReset:f,relative:p,viewTransition:x,unstable_defaultShouldRevalidate:g});y?E.startTransition(()=>G()):G()}},[v,b,D,c,o,s,i,a,f,p,x,g,y])}var U2=0,B2=()=>`__${String(++U2)}__`;function H2(){let{router:a}=d1("useSubmit"),{basename:i}=E.useContext(Wt),c=n2(),o=a.fetch,s=a.navigate;return E.useCallback(async(f,p={})=>{let{action:x,method:g,encType:y,formData:b,body:v}=m2(f,i);if(p.navigate===!1){let D=p.fetcherKey||B2();await o(D,c,p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:b,body:v,formMethod:p.method||g,formEncType:p.encType||y,flushSync:p.flushSync})}else await s(p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:b,body:v,formMethod:p.method||g,formEncType:p.encType||y,replace:p.replace,state:p.state,fromRouteId:c,flushSync:p.flushSync,viewTransition:p.viewTransition})},[o,s,i,c])}function $2(a,{relative:i}={}){let{basename:c}=E.useContext(Wt),o=E.useContext(Bn);Ge(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),f={...Qi(a||".",{relative:i})},p=pa();if(a==null){f.search=p.search;let x=new URLSearchParams(f.search),g=x.getAll("index");if(g.some(b=>b==="")){x.delete("index"),g.filter(v=>v).forEach(v=>x.append("index",v));let b=x.toString();f.search=b?`?${b}`:""}}return(!a||a===".")&&s.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:sn([c,f.pathname])),Bi(f)}function k2(a,{relative:i}={}){let c=E.useContext(e1);Ge(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=d1("useViewTransitionState"),s=Qi(a,{relative:i});if(!c.isTransitioning)return!1;let f=Ln(c.currentLocation.pathname,o)||c.currentLocation.pathname,p=Ln(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Ou(s.pathname,p)!=null||Ou(s.pathname,f)!=null}function ct(a){return`Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}var Y2=typeof Symbol=="function"&&Symbol.observable||"@@observable",um=Y2,$s=()=>Math.random().toString(36).substring(7).split("").join("."),q2={INIT:`@@redux/INIT${$s()}`,REPLACE:`@@redux/REPLACE${$s()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${$s()}`},Du=q2;function zf(a){if(typeof a!="object"||a===null)return!1;let i=a;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(a)===i||Object.getPrototypeOf(a)===null}function p1(a,i,c){if(typeof a!="function")throw new Error(ct(2));if(typeof i=="function"&&typeof c=="function"||typeof c=="function"&&typeof arguments[3]=="function")throw new Error(ct(0));if(typeof i=="function"&&typeof c>"u"&&(c=i,i=void 0),typeof c<"u"){if(typeof c!="function")throw new Error(ct(1));return c(p1)(a,i)}let o=a,s=i,f=new Map,p=f,x=0,g=!1;function y(){p===f&&(p=new Map,f.forEach((R,X)=>{p.set(X,R)}))}function b(){if(g)throw new Error(ct(3));return s}function v(R){if(typeof R!="function")throw new Error(ct(4));if(g)throw new Error(ct(5));let X=!0;y();const Z=x++;return p.set(Z,R),function(){if(X){if(g)throw new Error(ct(6));X=!1,y(),p.delete(Z),f=null}}}function D(R){if(!zf(R))throw new Error(ct(7));if(typeof R.type>"u")throw new Error(ct(8));if(typeof R.type!="string")throw new Error(ct(17));if(g)throw new Error(ct(9));try{g=!0,s=o(s,R)}finally{g=!1}return(f=p).forEach(Z=>{Z()}),R}function q(R){if(typeof R!="function")throw new Error(ct(10));o=R,D({type:Du.REPLACE})}function B(){const R=v;return{subscribe(X){if(typeof X!="object"||X===null)throw new Error(ct(11));function Z(){const M=X;M.next&&M.next(b())}return Z(),{unsubscribe:R(Z)}},[um](){return this}}}return D({type:Du.INIT}),{dispatch:D,subscribe:v,getState:b,replaceReducer:q,[um]:B}}function G2(a){Object.keys(a).forEach(i=>{const c=a[i];if(typeof c(void 0,{type:Du.INIT})>"u")throw new Error(ct(12));if(typeof c(void 0,{type:Du.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ct(13))})}function V2(a){const i=Object.keys(a),c={};for(let f=0;f<i.length;f++){const p=i[f];typeof a[p]=="function"&&(c[p]=a[p])}const o=Object.keys(c);let s;try{G2(c)}catch(f){s=f}return function(p={},x){if(s)throw s;let g=!1;const y={};for(let b=0;b<o.length;b++){const v=o[b],D=c[v],q=p[v],B=D(q,x);if(typeof B>"u")throw x&&x.type,new Error(ct(14));y[v]=B,g=g||B!==q}return g=g||o.length!==Object.keys(p).length,g?y:p}}function Nu(...a){return a.length===0?i=>i:a.length===1?a[0]:a.reduce((i,c)=>(...o)=>i(c(...o)))}function X2(...a){return i=>(c,o)=>{const s=i(c,o);let f=()=>{throw new Error(ct(15))};const p={getState:s.getState,dispatch:(g,...y)=>f(g,...y)},x=a.map(g=>g(p));return f=Nu(...x)(s.dispatch),{...s,dispatch:f}}}function Q2(a){return zf(a)&&"type"in a&&typeof a.type=="string"}var h1=Symbol.for("immer-nothing"),om=Symbol.for("immer-draftable"),xt=Symbol.for("immer-state");function tn(a,...i){throw new Error(`[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`)}var Ht=Object,Tl=Ht.getPrototypeOf,Lu="constructor",Qu="prototype",lf="configurable",Uu="enumerable",Cu="writable",Hi="value",Un=a=>!!a&&!!a[xt];function ln(a){return a?m1(a)||Ku(a)||!!a[om]||!!a[Lu]?.[om]||Ju(a)||Wu(a):!1}var Z2=Ht[Qu][Lu].toString(),cm=new WeakMap;function m1(a){if(!a||!jf(a))return!1;const i=Tl(a);if(i===null||i===Ht[Qu])return!0;const c=Ht.hasOwnProperty.call(i,Lu)&&i[Lu];if(c===Object)return!0;if(!Cl(c))return!1;let o=cm.get(c);return o===void 0&&(o=Function.toString.call(c),cm.set(c,o)),o===Z2}function Zu(a,i,c=!0){Zi(a)===0?(c?Reflect.ownKeys(a):Ht.keys(a)).forEach(s=>{i(s,a[s],a)}):a.forEach((o,s)=>i(s,o,a))}function Zi(a){const i=a[xt];return i?i.type_:Ku(a)?1:Ju(a)?2:Wu(a)?3:0}var sm=(a,i,c=Zi(a))=>c===2?a.has(i):Ht[Qu].hasOwnProperty.call(a,i),rf=(a,i,c=Zi(a))=>c===2?a.get(i):a[i],Bu=(a,i,c,o=Zi(a))=>{o===2?a.set(i,c):o===3?a.add(c):a[i]=c};function K2(a,i){return a===i?a!==0||1/a===1/i:a!==a&&i!==i}var Ku=Array.isArray,Ju=a=>a instanceof Map,Wu=a=>a instanceof Set,jf=a=>typeof a=="object",Cl=a=>typeof a=="function",ks=a=>typeof a=="boolean";function J2(a){const i=+a;return Number.isInteger(i)&&String(i)===a}var Dn=a=>a.copy_||a.base_,Af=a=>a.modified_?a.copy_:a.base_;function uf(a,i){if(Ju(a))return new Map(a);if(Wu(a))return new Set(a);if(Ku(a))return Array[Qu].slice.call(a);const c=m1(a);if(i===!0||i==="class_only"&&!c){const o=Ht.getOwnPropertyDescriptors(a);delete o[xt];let s=Reflect.ownKeys(o);for(let f=0;f<s.length;f++){const p=s[f],x=o[p];x[Cu]===!1&&(x[Cu]=!0,x[lf]=!0),(x.get||x.set)&&(o[p]={[lf]:!0,[Cu]:!0,[Uu]:x[Uu],[Hi]:a[p]})}return Ht.create(Tl(a),o)}else{const o=Tl(a);if(o!==null&&c)return{...a};const s=Ht.create(o);return Ht.assign(s,a)}}function Rf(a,i=!1){return Fu(a)||Un(a)||!ln(a)||(Zi(a)>1&&Ht.defineProperties(a,{set:mu,add:mu,clear:mu,delete:mu}),Ht.freeze(a),i&&Zu(a,(c,o)=>{Rf(o,!0)},!1)),a}function W2(){tn(2)}var mu={[Hi]:W2};function Fu(a){return a===null||!jf(a)?!0:Ht.isFrozen(a)}var Hu="MapSet",of="Patches",fm="ArrayMethods",g1={};function Ba(a){const i=g1[a];return i||tn(0,a),i}var dm=a=>!!g1[a],$i,y1=()=>$i,F2=(a,i)=>({drafts_:[],parent_:a,immer_:i,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:dm(Hu)?Ba(Hu):void 0,arrayMethodsPlugin_:dm(fm)?Ba(fm):void 0});function pm(a,i){i&&(a.patchPlugin_=Ba(of),a.patches_=[],a.inversePatches_=[],a.patchListener_=i)}function cf(a){sf(a),a.drafts_.forEach(I2),a.drafts_=null}function sf(a){a===$i&&($i=a.parent_)}var hm=a=>$i=F2($i,a);function I2(a){const i=a[xt];i.type_===0||i.type_===1?i.revoke_():i.revoked_=!0}function mm(a,i){i.unfinalizedDrafts_=i.drafts_.length;const c=i.drafts_[0];if(a!==void 0&&a!==c){c[xt].modified_&&(cf(i),tn(4)),ln(a)&&(a=gm(i,a));const{patchPlugin_:s}=i;s&&s.generateReplacementPatches_(c[xt].base_,a,i)}else a=gm(i,c);return P2(i,a,!0),cf(i),i.patches_&&i.patchListener_(i.patches_,i.inversePatches_),a!==h1?a:void 0}function gm(a,i){if(Fu(i))return i;const c=i[xt];if(!c)return $u(i,a.handledSet_,a);if(!Iu(c,a))return i;if(!c.modified_)return c.base_;if(!c.finalized_){const{callbacks_:o}=c;if(o)for(;o.length>0;)o.pop()(a);b1(c,a)}return c.copy_}function P2(a,i,c=!1){!a.parent_&&a.immer_.autoFreeze_&&a.canAutoFreeze_&&Rf(i,c)}function x1(a){a.finalized_=!0,a.scope_.unfinalizedDrafts_--}var Iu=(a,i)=>a.scope_===i,eb=[];function v1(a,i,c,o){const s=Dn(a),f=a.type_;if(o!==void 0&&rf(s,o,f)===i){Bu(s,o,c,f);return}if(!a.draftLocations_){const x=a.draftLocations_=new Map;Zu(s,(g,y)=>{if(Un(y)){const b=x.get(y)||[];b.push(g),x.set(y,b)}})}const p=a.draftLocations_.get(i)??eb;for(const x of p)Bu(s,x,c,f)}function tb(a,i,c){a.callbacks_.push(function(s){const f=i;if(!f||!Iu(f,s))return;s.mapSetPlugin_?.fixSetContents(f);const p=Af(f);v1(a,f.draft_??f,p,c),b1(f,s)})}function b1(a,i){if(a.modified_&&!a.finalized_&&(a.type_===3||a.type_===1&&a.allIndicesReassigned_||(a.assigned_?.size??0)>0)){const{patchPlugin_:o}=i;if(o){const s=o.getPath(a);s&&o.generatePatches_(a,s,i)}x1(a)}}function nb(a,i,c){const{scope_:o}=a;if(Un(c)){const s=c[xt];Iu(s,o)&&s.callbacks_.push(function(){_u(a);const p=Af(s);v1(a,c,p,i)})}else ln(c)&&a.callbacks_.push(function(){const f=Dn(a);a.type_===3?f.has(c)&&$u(c,o.handledSet_,o):rf(f,i,a.type_)===c&&o.drafts_.length>1&&(a.assigned_.get(i)??!1)===!0&&a.copy_&&$u(rf(a.copy_,i,a.type_),o.handledSet_,o)})}function $u(a,i,c){return!c.immer_.autoFreeze_&&c.unfinalizedDrafts_<1||Un(a)||i.has(a)||!ln(a)||Fu(a)||(i.add(a),Zu(a,(o,s)=>{if(Un(s)){const f=s[xt];if(Iu(f,c)){const p=Af(f);Bu(a,o,p,a.type_),x1(f)}}else ln(s)&&$u(s,i,c)})),a}function ab(a,i){const c=Ku(a),o={type_:c?1:0,scope_:i?i.scope_:y1(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:i,base_:a,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let s=o,f=ku;c&&(s=[o],f=ki);const{revoke:p,proxy:x}=Proxy.revocable(s,f);return o.draft_=x,o.revoke_=p,[x,o]}var ku={get(a,i){if(i===xt)return a;let c=a.scope_.arrayMethodsPlugin_;const o=a.type_===1&&typeof i=="string";if(o&&c?.isArrayOperationMethod(i))return c.createMethodInterceptor(a,i);const s=Dn(a);if(!sm(s,i,a.type_))return lb(a,s,i);const f=s[i];if(a.finalized_||!ln(f)||o&&a.operationMethod&&c?.isMutatingArrayMethod(a.operationMethod)&&J2(i))return f;if(f===Ys(a.base_,i)){_u(a);const p=a.type_===1?+i:i,x=df(a.scope_,f,a,p);return a.copy_[p]=x}return f},has(a,i){return i in Dn(a)},ownKeys(a){return Reflect.ownKeys(Dn(a))},set(a,i,c){const o=S1(Dn(a),i);if(o?.set)return o.set.call(a.draft_,c),!0;if(!a.modified_){const s=Ys(Dn(a),i),f=s?.[xt];if(f&&f.base_===c)return a.copy_[i]=c,a.assigned_.set(i,!1),!0;if(K2(c,s)&&(c!==void 0||sm(a.base_,i,a.type_)))return!0;_u(a),ff(a)}return a.copy_[i]===c&&(c!==void 0||i in a.copy_)||Number.isNaN(c)&&Number.isNaN(a.copy_[i])||(a.copy_[i]=c,a.assigned_.set(i,!0),nb(a,i,c)),!0},deleteProperty(a,i){return _u(a),Ys(a.base_,i)!==void 0||i in a.base_?(a.assigned_.set(i,!1),ff(a)):a.assigned_.delete(i),a.copy_&&delete a.copy_[i],!0},getOwnPropertyDescriptor(a,i){const c=Dn(a),o=Reflect.getOwnPropertyDescriptor(c,i);return o&&{[Cu]:!0,[lf]:a.type_!==1||i!=="length",[Uu]:o[Uu],[Hi]:c[i]}},defineProperty(){tn(11)},getPrototypeOf(a){return Tl(a.base_)},setPrototypeOf(){tn(12)}},ki={};for(let a in ku){let i=ku[a];ki[a]=function(){const c=arguments;return c[0]=c[0][0],i.apply(this,c)}}ki.deleteProperty=function(a,i){return ki.set.call(this,a,i,void 0)};ki.set=function(a,i,c){return ku.set.call(this,a[0],i,c,a[0])};function Ys(a,i){const c=a[xt];return(c?Dn(c):a)[i]}function lb(a,i,c){const o=S1(i,c);return o?Hi in o?o[Hi]:o.get?.call(a.draft_):void 0}function S1(a,i){if(!(i in a))return;let c=Tl(a);for(;c;){const o=Object.getOwnPropertyDescriptor(c,i);if(o)return o;c=Tl(c)}}function ff(a){a.modified_||(a.modified_=!0,a.parent_&&ff(a.parent_))}function _u(a){a.copy_||(a.assigned_=new Map,a.copy_=uf(a.base_,a.scope_.immer_.useStrictShallowCopy_))}var ib=class{constructor(a){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(i,c,o)=>{if(Cl(i)&&!Cl(c)){const f=c;c=i;const p=this;return function(g=f,...y){return p.produce(g,b=>c.call(this,b,...y))}}Cl(c)||tn(6),o!==void 0&&!Cl(o)&&tn(7);let s;if(ln(i)){const f=hm(this),p=df(f,i,void 0);let x=!0;try{s=c(p),x=!1}finally{x?cf(f):sf(f)}return pm(f,o),mm(s,f)}else if(!i||!jf(i)){if(s=c(i),s===void 0&&(s=i),s===h1&&(s=void 0),this.autoFreeze_&&Rf(s,!0),o){const f=[],p=[];Ba(of).generateReplacementPatches_(i,s,{patches_:f,inversePatches_:p}),o(f,p)}return s}else tn(1,i)},this.produceWithPatches=(i,c)=>{if(Cl(i))return(p,...x)=>this.produceWithPatches(p,g=>i(g,...x));let o,s;return[this.produce(i,c,(p,x)=>{o=p,s=x}),o,s]},ks(a?.autoFreeze)&&this.setAutoFreeze(a.autoFreeze),ks(a?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(a.useStrictShallowCopy),ks(a?.useStrictIteration)&&this.setUseStrictIteration(a.useStrictIteration)}createDraft(a){ln(a)||tn(8),Un(a)&&(a=rb(a));const i=hm(this),c=df(i,a,void 0);return c[xt].isManual_=!0,sf(i),c}finishDraft(a,i){const c=a&&a[xt];(!c||!c.isManual_)&&tn(9);const{scope_:o}=c;return pm(o,i),mm(void 0,o)}setAutoFreeze(a){this.autoFreeze_=a}setUseStrictShallowCopy(a){this.useStrictShallowCopy_=a}setUseStrictIteration(a){this.useStrictIteration_=a}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(a,i){let c;for(c=i.length-1;c>=0;c--){const s=i[c];if(s.path.length===0&&s.op==="replace"){a=s.value;break}}c>-1&&(i=i.slice(c+1));const o=Ba(of).applyPatches_;return Un(a)?o(a,i):this.produce(a,s=>o(s,i))}};function df(a,i,c,o){const[s,f]=Ju(i)?Ba(Hu).proxyMap_(i,c):Wu(i)?Ba(Hu).proxySet_(i,c):ab(i,c);return(c?.scope_??y1()).drafts_.push(s),f.callbacks_=c?.callbacks_??[],f.key_=o,c&&o!==void 0?tb(c,f,o):f.callbacks_.push(function(g){g.mapSetPlugin_?.fixSetContents(f);const{patchPlugin_:y}=g;f.modified_&&y&&y.generatePatches_(f,[],g)}),s}function rb(a){return Un(a)||tn(10,a),w1(a)}function w1(a){if(!ln(a)||Fu(a))return a;const i=a[xt];let c,o=!0;if(i){if(!i.modified_)return i.base_;i.finalized_=!0,c=uf(a,i.scope_.immer_.useStrictShallowCopy_),o=i.scope_.immer_.shouldUseStrictIteration()}else c=uf(a,!0);return Zu(c,(s,f)=>{Bu(c,s,w1(f))},o),i&&(i.finalized_=!1),c}var ub=new ib,E1=ub.produce;function C1(a){return({dispatch:c,getState:o})=>s=>f=>typeof f=="function"?f(c,o,a):s(f)}var ob=C1(),cb=C1,sb=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Nu:Nu.apply(null,arguments)};function ym(a,i){function c(...o){if(i){let s=i(...o);if(!s)throw new Error(Nn(0));return{type:a,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:a,payload:o[0]}}return c.toString=()=>`${a}`,c.type=a,c.match=o=>Q2(o)&&o.type===a,c}var _1=class Oi extends Array{constructor(...i){super(...i),Object.setPrototypeOf(this,Oi.prototype)}static get[Symbol.species](){return Oi}concat(...i){return super.concat.apply(this,i)}prepend(...i){return i.length===1&&Array.isArray(i[0])?new Oi(...i[0].concat(this)):new Oi(...i.concat(this))}};function xm(a){return ln(a)?E1(a,()=>{}):a}function gu(a,i,c){return a.has(i)?a.get(i):a.set(i,c(i)).get(i)}function fb(a){return typeof a=="boolean"}var db=()=>function(i){const{thunk:c=!0,immutableCheck:o=!0,serializableCheck:s=!0,actionCreatorCheck:f=!0}=i??{};let p=new _1;return c&&(fb(c)?p.push(ob):p.push(cb(c.extraArgument))),p},pb="RTK_autoBatch",vm=a=>i=>{setTimeout(i,a)},hb=(a={type:"raf"})=>i=>(...c)=>{const o=i(...c);let s=!0,f=!1,p=!1;const x=new Set,g=a.type==="tick"?queueMicrotask:a.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:vm(10):a.type==="callback"?a.queueNotification:vm(a.timeout),y=()=>{p=!1,f&&(f=!1,x.forEach(b=>b()))};return Object.assign({},o,{subscribe(b){const v=()=>s&&b(),D=o.subscribe(v);return x.add(b),()=>{D(),x.delete(b)}},dispatch(b){try{return s=!b?.meta?.[pb],f=!s,f&&(p||(p=!0,g(y))),o.dispatch(b)}finally{s=!0}}})},mb=a=>function(c){const{autoBatch:o=!0}=c??{};let s=new _1(a);return o&&s.push(hb(typeof o=="object"?o:void 0)),s};function gb(a){const i=db(),{reducer:c=void 0,middleware:o,devTools:s=!0,preloadedState:f=void 0,enhancers:p=void 0}=a||{};let x;if(typeof c=="function")x=c;else if(zf(c))x=V2(c);else throw new Error(Nn(1));let g;typeof o=="function"?g=o(i):g=i();let y=Nu;s&&(y=sb({trace:!1,...typeof s=="object"&&s}));const b=X2(...g),v=mb(b);let D=typeof p=="function"?p(v):v();const q=y(...D);return p1(x,f,q)}function T1(a){const i={},c=[];let o;const s={addCase(f,p){const x=typeof f=="string"?f:f.type;if(!x)throw new Error(Nn(28));if(x in i)throw new Error(Nn(29));return i[x]=p,s},addAsyncThunk(f,p){return p.pending&&(i[f.pending.type]=p.pending),p.rejected&&(i[f.rejected.type]=p.rejected),p.fulfilled&&(i[f.fulfilled.type]=p.fulfilled),p.settled&&c.push({matcher:f.settled,reducer:p.settled}),s},addMatcher(f,p){return c.push({matcher:f,reducer:p}),s},addDefaultCase(f){return o=f,s}};return a(s),[i,c,o]}function yb(a){return typeof a=="function"}function xb(a,i){let[c,o,s]=T1(i),f;if(yb(a))f=()=>xm(a());else{const x=xm(a);f=()=>x}function p(x=f(),g){let y=[c[g.type],...o.filter(({matcher:b})=>b(g)).map(({reducer:b})=>b)];return y.filter(b=>!!b).length===0&&(y=[s]),y.reduce((b,v)=>{if(v)if(Un(b)){const q=v(b,g);return q===void 0?b:q}else{if(ln(b))return E1(b,D=>v(D,g));{const D=v(b,g);if(D===void 0){if(b===null)return b;throw Error("A case reducer on a non-draftable value must not return undefined")}return D}}return b},x)}return p.getInitialState=f,p}var vb=Symbol.for("rtk-slice-createasyncthunk");function bb(a,i){return`${a}/${i}`}function Sb({creators:a}={}){const i=a?.asyncThunk?.[vb];return function(o){const{name:s,reducerPath:f=s}=o;if(!s)throw new Error(Nn(11));const p=(typeof o.reducers=="function"?o.reducers(Eb()):o.reducers)||{},x=Object.keys(p),g={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},y={addCase(V,M){const Q=typeof V=="string"?V:V.type;if(!Q)throw new Error(Nn(12));if(Q in g.sliceCaseReducersByType)throw new Error(Nn(13));return g.sliceCaseReducersByType[Q]=M,y},addMatcher(V,M){return g.sliceMatchers.push({matcher:V,reducer:M}),y},exposeAction(V,M){return g.actionCreators[V]=M,y},exposeCaseReducer(V,M){return g.sliceCaseReducersByName[V]=M,y}};x.forEach(V=>{const M=p[V],Q={reducerName:V,type:bb(s,V),createNotation:typeof o.reducers=="function"};_b(M)?zb(Q,M,y,i):Cb(Q,M,y)});function b(){const[V={},M=[],Q=void 0]=typeof o.extraReducers=="function"?T1(o.extraReducers):[o.extraReducers],J={...V,...g.sliceCaseReducersByType};return xb(o.initialState,N=>{for(let K in J)N.addCase(K,J[K]);for(let K of g.sliceMatchers)N.addMatcher(K.matcher,K.reducer);for(let K of M)N.addMatcher(K.matcher,K.reducer);Q&&N.addDefaultCase(Q)})}const v=V=>V,D=new Map,q=new WeakMap;let B;function G(V,M){return B||(B=b()),B(V,M)}function R(){return B||(B=b()),B.getInitialState()}function X(V,M=!1){function Q(N){let K=N[V];return typeof K>"u"&&M&&(K=gu(q,Q,R)),K}function J(N=v){const K=gu(D,M,()=>new WeakMap);return gu(K,N,()=>{const de={};for(const[k,W]of Object.entries(o.selectors??{}))de[k]=wb(W,N,()=>gu(q,N,R),M);return de})}return{reducerPath:V,getSelectors:J,get selectors(){return J(Q)},selectSlice:Q}}const Z={name:s,reducer:G,actions:g.actionCreators,caseReducers:g.sliceCaseReducersByName,getInitialState:R,...X(f),injectInto(V,{reducerPath:M,...Q}={}){const J=M??f;return V.inject({reducerPath:J,reducer:G},Q),{...Z,...X(J,!0)}}};return Z}}function wb(a,i,c,o){function s(f,...p){let x=i(f);return typeof x>"u"&&o&&(x=c()),a(x,...p)}return s.unwrapped=a,s}var z1=Sb();function Eb(){function a(i,c){return{_reducerDefinitionType:"asyncThunk",payloadCreator:i,...c}}return a.withTypes=()=>a,{reducer(i){return Object.assign({[i.name](...c){return i(...c)}}[i.name],{_reducerDefinitionType:"reducer"})},preparedReducer(i,c){return{_reducerDefinitionType:"reducerWithPrepare",prepare:i,reducer:c}},asyncThunk:a}}function Cb({type:a,reducerName:i,createNotation:c},o,s){let f,p;if("reducer"in o){if(c&&!Tb(o))throw new Error(Nn(17));f=o.reducer,p=o.prepare}else f=o;s.addCase(a,f).exposeCaseReducer(i,f).exposeAction(i,p?ym(a,p):ym(a))}function _b(a){return a._reducerDefinitionType==="asyncThunk"}function Tb(a){return a._reducerDefinitionType==="reducerWithPrepare"}function zb({type:a,reducerName:i},c,o,s){if(!s)throw new Error(Nn(18));const{payloadCreator:f,fulfilled:p,pending:x,rejected:g,settled:y,options:b}=c,v=s(a,f,b);o.exposeAction(i,v),p&&o.addCase(v.fulfilled,p),x&&o.addCase(v.pending,x),g&&o.addCase(v.rejected,g),y&&o.addMatcher(v.settled,y),o.exposeCaseReducer(i,{fulfilled:p||yu,pending:x||yu,rejected:g||yu,settled:y||yu})}function yu(){}function Nn(a){return`Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}const jb={value:0},j1=z1({name:"app",initialState:jb,reducers:{increment:a=>{a.value+=1},decrement:a=>{a.value-=1},setValue:(a,i)=>{a.value=i.payload}}}),{increment:Ew,decrement:Cw,setValue:_w}=j1.actions,Ab=j1.reducer,Rb={logoAlt:"Margg",links:[{label:"Home",href:"#home",primary:!0},{label:"Our Products",href:"#products"},{label:"Contact Us",href:"#contact-us"}]},Mb={titleLine1:"BRING OUT YOUR",titleLine2:"BEST POTENTIAL",description:"Learn from the best mentors from all around the world, Save notes & Prep for interviews with best interviewers from the industry",inputPlaceholder:"Enter Email",inputButtonText:"Join the waitlist",tiles:{autoCycleIntervalMs:3e3,defaultTileId:1,row1:[{id:1,ariaLabel:"Frontend Developer",title:"Frontend Developer",description:"Build modern UI with React, component systems, and responsive layouts.",icon:"ScrollIcon"},{id:2,ariaLabel:"Programming Essentials",title:"Programming Essentials",description:"Learn core concepts, clean code, and problem-solving techniques.",icon:"MessageProgrammingIcon"},{id:3,ariaLabel:"UI Design Fundamentals",title:"UI Design Fundamentals",description:"Design trends, spacing systems, and accessible UI patterns.",icon:"PenToolIcon"}],row2:[{id:4,ariaLabel:"Backend Development",title:"Backend Development",description:"Server-side logic, APIs, and database management.",icon:"DriverIcon"},{id:5,ariaLabel:"Database Design",title:"Database Design",description:"Data modeling, SQL, and database optimization.",icon:"FavoriteChartIcon"},{id:6,ariaLabel:"Cloud & DevOps",title:"Cloud & DevOps",description:"Deploy apps, understand environments, and ship confidently.",icon:"CloudConnectionIcon"},{id:7,ariaLabel:"Testing & QA",title:"Testing & QA",description:"Write quality tests and ensure reliable applications.",icon:"LockIcon"}],row3:[{id:8,ariaLabel:"Security",title:"Security",description:"Learn safe patterns, auth basics, and secure-by-default UI.",icon:"MessageProgrammingIcon"},{id:9,ariaLabel:"Algorithms",title:"Algorithms",description:"Problem-solving patterns and data structures.",icon:"PenToolIcon"},{id:10,ariaLabel:"System Design",title:"System Design",description:"Architecture, scalability, and distributed systems.",icon:"FavoriteChartIcon"},{id:11,ariaLabel:"Performance",title:"Performance",description:"Optimize load times, rendering, and user experience.",icon:"DriverIcon"}]}},Ob={waitList:!0,stats:[{value:"43+",label:`University
Partners`},{value:"12K+",label:`Students
Enrolled`},{value:"35",label:`Outstanding
Mentors`},{value:"7.5K",label:`Student
Placements`}]},Db={titleLine1:"SUPERCHARGE",titleLine2:"YOUR LEARNING POTENTIAL WITH OUR APP",description:"Step out of the ordinary and into a place where roadmaps are designed for you, and interview prep is just a click away"},Nb={title:"JOIN WAITLIST",subtitle:"First step towards your dream career",inputPlaceholder:"Enter Email",buttonText:"Notify Me"},Lb=["Frontend Development","Backend Development","Programming Essentials","UI Design Fundamentals","Database Design","Cloud & DevOps","Testing & QA","Security","Algorithms","System Design","Performance","React","Node.js","Python","Java","Data Structures","Machine Learning","Mobile Development"],Ub={submissionMode:"sheets",baseUrl:"https://api.margg.xyz/service-core",endpoints:{waitlist:"/general/user-contacts/waitlist",learner:"/general/user-contacts",instructor:"/general/instructor-enquiries",partner:"/general/organisation-enquiries"},googleSheets:{scriptUrl:"https://script.google.com/macros/s/AKfycbwmmOYKHVpfZEcqWhhAlNr6G7726uUj9WT4cua0i8sSMDQrQbWoBK2jj0Pc1FpRNfuB1g/exec"},emailjs:{notifyEmail:"margglive@gmail.com",accounts:{account1:{serviceId:"service_uwxllg6",publicKey:"sS9pUpAdxxLri3bjO"},account2:{serviceId:"service_oq3tfkg",publicKey:"r9cx6ICX3cdQFxZC9"}},templates:{waitlist:{templateId:"template_ob8hs05",account:"account1"},learner:{templateId:"template_n8yn8zn",account:"account1"},instructor:{templateId:"template_a5ox0x9",account:"account2"},partner:{templateId:"template_qxq0lla",account:"account2"}}}},Bb={contactTitle:"GET IN TOUCH WITH US",location:"Bangalore | Tirupati",phone:"+91 7993559974",email:"info@margg.in",tagline:"Curated routes for curious minds",companyName:"Margg Private Limited",logoAlt:"Margg Logo",socialLinks:[{name:"YouTube",icon:"YoutubeIcon",url:"https://www.youtube.com/@MarggLive"},{name:"Instagram",icon:"InstagramIcon",url:"https://instagram.com/margglive"},{name:"X (Twitter)",icon:"TwitterIcon",url:"https://x.com/MarggLive"},{name:"Discord",icon:"DiscordIcon",url:"https://discord.gg/PDzhNUnB"}]},Hb={roadmap:{title:"Roadmap Based Learning"},community:{title:"Community"},focusTimer:{title:"Focus Timer"},interviewPrep:{title:"Interview Prep Materials"},jobBoard:{title:"Job Board"},mentorship:{title:"One-on-One Mentorship"},projects:{title:"Projects"},resume:{title:"Resume Builder"},skills:{title:"Skills Assessment"},streaks:{title:"Streaks"},certifications:{title:"Certifications"}},$b={title:"Margg – Roadmap Based Courses & Best LMS Platform in South India | Gagan's Application",description:"Margg is the best LMS application in South India offering roadmap based courses, structured learning paths, one-on-one mentorship, interview prep, resume building, certifications & career placement support for college students. Built by Gagan — curated routes for curious minds.",keywords:"roadmap based courses, best LMS application in south india, Gagan's application, Margg, LMS for college students, learning management system India, mentorship platform, interview prep, career placement, roadmap learning, college learning app, online education India, skill development, structured learning paths, best online courses India, South India LMS, Bangalore LMS, Tirupati education platform, curated learning roadmaps, coding bootcamp India, one-on-one mentorship India, resume builder for students, job placement LMS, streaks based learning, certification courses India, Margg Private Limited, MarggLive, best e-learning platform India",author:"Margg Private Limited",robots:"index, follow",locale:"en_IN",url:"https://margg.in",ogImage:"https://margg.in/og-cover.png",twitterHandle:"@MarggLive",themeColor:"#090215",foundingYear:"2023",appCategory:"EducationApplication"},kb={navbar:Rb,hero:Mb,analytics:Ob,supercharge:Db,joinWaitlist:Nb,courses:Lb,api:Ub,footer:Bb,blocks:Hb,seo:$b},A1=z1({name:"content",initialState:{data:kb,status:"idle",source:"fallback"},reducers:{contentLoading(a){a.status="loading"},contentSucceeded(a,i){a.data=i.payload.data,a.status="succeeded",a.source=i.payload.source},contentFailed(a){a.status="failed",a.source="fallback"}}}),{contentLoading:Tw,contentSucceeded:zw,contentFailed:jw}=A1.actions,Yb=A1.reducer,qb=a=>a.content.data;var Tt=function(){return Tt=Object.assign||function(i){for(var c,o=1,s=arguments.length;o<s;o++){c=arguments[o];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(i[f]=c[f])}return i},Tt.apply(this,arguments)};function Yi(a,i,c){if(c||arguments.length===2)for(var o=0,s=i.length,f;o<s;o++)(f||!(o in i))&&(f||(f=Array.prototype.slice.call(i,0,o)),f[o]=i[o]);return a.concat(f||Array.prototype.slice.call(i))}var $e="-ms-",Li="-moz-",Te="-webkit-",R1="comm",Pu="rule",Mf="decl",Gb="@import",Vb="@namespace",M1="@keyframes",Xb="@layer",O1=Math.abs,Of=String.fromCharCode,pf=Object.assign;function Qb(a,i){return tt(a,0)^45?(((i<<2^tt(a,0))<<2^tt(a,1))<<2^tt(a,2))<<2^tt(a,3):0}function D1(a){return a.trim()}function Mn(a,i){return(a=i.exec(a))?a[0]:a}function fe(a,i,c){return a.replace(i,c)}function Tu(a,i,c){return a.indexOf(i,c)}function tt(a,i){return a.charCodeAt(i)|0}function Ha(a,i,c){return a.slice(i,c)}function en(a){return a.length}function N1(a){return a.length}function Di(a,i){return i.push(a),a}function Zb(a,i){return a.map(i).join("")}function bm(a,i){return a.filter(function(c){return!Mn(c,i)})}var eo=1,zl=1,L1=0,Jt=0,Pe=0,Dl="";function to(a,i,c,o,s,f,p,x){return{value:a,root:i,parent:c,type:o,props:s,children:f,line:eo,column:zl,length:p,return:"",siblings:x}}function fa(a,i){return pf(to("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function El(a){for(;a.root;)a=fa(a.root,{children:[a]});Di(a,a.siblings)}function Kb(){return Pe}function Jb(){return Pe=Jt>0?tt(Dl,--Jt):0,zl--,Pe===10&&(zl=1,eo--),Pe}function an(){return Pe=Jt<L1?tt(Dl,Jt++):0,zl++,Pe===10&&(zl=1,eo++),Pe}function da(){return tt(Dl,Jt)}function zu(){return Jt}function no(a,i){return Ha(Dl,a,i)}function qi(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wb(a){return eo=zl=1,L1=en(Dl=a),Jt=0,[]}function Fb(a){return Dl="",a}function qs(a){return D1(no(Jt-1,hf(a===91?a+2:a===40?a+1:a)))}function Ib(a){for(;(Pe=da())&&Pe<33;)an();return qi(a)>2||qi(Pe)>3?"":" "}function Pb(a,i){for(;--i&&an()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return no(a,zu()+(i<6&&da()==32&&an()==32))}function hf(a){for(;an();)switch(Pe){case a:return Jt;case 34:case 39:a!==34&&a!==39&&hf(Pe);break;case 40:a===41&&hf(a);break;case 92:an();break}return Jt}function e3(a,i){for(;an()&&a+Pe!==57;)if(a+Pe===84&&da()===47)break;return"/*"+no(i,Jt-1)+"*"+Of(a===47?a:an())}function t3(a){for(;!qi(da());)an();return no(a,Jt)}function n3(a){return Fb(ju("",null,null,null,[""],a=Wb(a),0,[0],a))}function ju(a,i,c,o,s,f,p,x,g){for(var y=0,b=0,v=p,D=0,q=0,B=0,G=1,R=1,X=1,Z=0,V="",M=s,Q=f,J=o,N=V;R;)switch(B=Z,Z=an()){case 40:if(B!=108&&tt(N,v-1)==58){Tu(N+=fe(qs(Z),"&","&\f"),"&\f",O1(y?x[y-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:N+=qs(Z);break;case 9:case 10:case 13:case 32:N+=Ib(B);break;case 92:N+=Pb(zu()-1,7);continue;case 47:switch(da()){case 42:case 47:Di(a3(e3(an(),zu()),i,c,g),g),(qi(B||1)==5||qi(da()||1)==5)&&en(N)&&Ha(N,-1,void 0)!==" "&&(N+=" ");break;default:N+="/"}break;case 123*G:x[y++]=en(N)*X;case 125*G:case 59:case 0:switch(Z){case 0:case 125:R=0;case 59+b:X==-1&&(N=fe(N,/\f/g,"")),q>0&&(en(N)-v||G===0&&B===47)&&Di(q>32?wm(N+";",o,c,v-1,g):wm(fe(N," ","")+";",o,c,v-2,g),g);break;case 59:N+=";";default:if(Di(J=Sm(N,i,c,y,b,s,x,V,M=[],Q=[],v,f),f),Z===123)if(b===0)ju(N,i,J,J,M,f,v,x,Q);else{switch(D){case 99:if(tt(N,3)===110)break;case 108:if(tt(N,2)===97)break;default:b=0;case 100:case 109:case 115:}b?ju(a,J,J,o&&Di(Sm(a,J,J,0,0,s,x,V,s,M=[],v,Q),Q),s,Q,v,x,o?M:Q):ju(N,J,J,J,[""],Q,0,x,Q)}}y=b=q=0,G=X=1,V=N="",v=p;break;case 58:v=1+en(N),q=B;default:if(G<1){if(Z==123)--G;else if(Z==125&&G++==0&&Jb()==125)continue}switch(N+=Of(Z),Z*G){case 38:X=b>0?1:(N+="\f",-1);break;case 44:x[y++]=(en(N)-1)*X,X=1;break;case 64:da()===45&&(N+=qs(an())),D=da(),b=v=en(V=N+=t3(zu())),Z++;break;case 45:B===45&&en(N)==2&&(G=0)}}return f}function Sm(a,i,c,o,s,f,p,x,g,y,b,v){for(var D=s-1,q=s===0?f:[""],B=N1(q),G=0,R=0,X=0;G<o;++G)for(var Z=0,V=Ha(a,D+1,D=O1(R=p[G])),M=a;Z<B;++Z)(M=D1(R>0?q[Z]+" "+V:fe(V,/&\f/g,q[Z])))&&(g[X++]=M);return to(a,i,c,s===0?Pu:x,g,y,b,v)}function a3(a,i,c,o){return to(a,i,c,R1,Of(Kb()),Ha(a,2,-2),0,o)}function wm(a,i,c,o,s){return to(a,i,c,Mf,Ha(a,0,o),Ha(a,o+1,-1),o,s)}function U1(a,i,c){switch(Qb(a,i)){case 5103:return Te+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Te+a+a;case 4855:return Te+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return Li+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+a+Li+a+$e+a+a;case 5936:switch(tt(a,i+11)){case 114:return Te+a+$e+fe(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Te+a+$e+fe(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Te+a+$e+fe(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Te+a+$e+a+a;case 6165:return Te+a+$e+"flex-"+a+a;case 5187:return Te+a+fe(a,/(\w+).+(:[^]+)/,Te+"box-$1$2"+$e+"flex-$1$2")+a;case 5443:return Te+a+$e+"flex-item-"+fe(a,/flex-|-self/g,"")+(Mn(a,/flex-|baseline/)?"":$e+"grid-row-"+fe(a,/flex-|-self/g,""))+a;case 4675:return Te+a+$e+"flex-line-pack"+fe(a,/align-content|flex-|-self/g,"")+a;case 5548:return Te+a+$e+fe(a,"shrink","negative")+a;case 5292:return Te+a+$e+fe(a,"basis","preferred-size")+a;case 6060:return Te+"box-"+fe(a,"-grow","")+Te+a+$e+fe(a,"grow","positive")+a;case 4554:return Te+fe(a,/([^-])(transform)/g,"$1"+Te+"$2")+a;case 6187:return fe(fe(fe(a,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),a,"")+a;case 5495:case 3959:return fe(a,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return fe(fe(a,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+$e+"flex-pack:$3"),/space-between/,"justify")+Te+a+a;case 4200:if(!Mn(a,/flex-|baseline/))return $e+"grid-column-align"+Ha(a,i)+a;break;case 2592:case 3360:return $e+fe(a,"template-","")+a;case 4384:case 3616:return c&&c.some(function(o,s){return i=s,Mn(o.props,/grid-\w+-end/)})?~Tu(a+(c=c[i].value),"span",0)?a:$e+fe(a,"-start","")+a+$e+"grid-row-span:"+(~Tu(c,"span",0)?Mn(c,/\d+/):+Mn(c,/\d+/)-+Mn(a,/\d+/))+";":$e+fe(a,"-start","")+a;case 4896:case 4128:return c&&c.some(function(o){return Mn(o.props,/grid-\w+-start/)})?a:$e+fe(fe(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return fe(a,/(.+)-inline(.+)/,Te+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(a)-1-i>6)switch(tt(a,i+1)){case 109:if(tt(a,i+4)!==45)break;case 102:return fe(a,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Li+(tt(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Tu(a,"stretch",0)?U1(fe(a,"stretch","fill-available"),i,c)+a:a}break;case 5152:case 5920:return fe(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,f,p,x,g,y){return $e+s+":"+f+y+(p?$e+s+"-span:"+(x?g:+g-+f)+y:"")+a});case 4949:if(tt(a,i+6)===121)return fe(a,":",":"+Te)+a;break;case 6444:switch(tt(a,tt(a,14)===45?18:11)){case 120:return fe(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(tt(a,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+$e+"$2box$3")+a;case 100:return fe(a,":",":"+$e)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(a,"scroll-","scroll-snap-")+a}return a}function Yu(a,i){for(var c="",o=0;o<a.length;o++)c+=i(a[o],o,a,i)||"";return c}function l3(a,i,c,o){switch(a.type){case Xb:if(a.children.length)break;case Gb:case Vb:case Mf:return a.return=a.return||a.value;case R1:return"";case M1:return a.return=a.value+"{"+Yu(a.children,o)+"}";case Pu:if(!en(a.value=a.props.join(",")))return""}return en(c=Yu(a.children,o))?a.return=a.value+"{"+c+"}":""}function i3(a){var i=N1(a);return function(c,o,s,f){for(var p="",x=0;x<i;x++)p+=a[x](c,o,s,f)||"";return p}}function r3(a){return function(i){i.root||(i=i.return)&&a(i)}}function u3(a,i,c,o){if(a.length>-1&&!a.return)switch(a.type){case Mf:a.return=U1(a.value,a.length,c);return;case M1:return Yu([fa(a,{value:fe(a.value,"@","@"+Te)})],o);case Pu:if(a.length)return Zb(c=a.props,function(s){switch(Mn(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":El(fa(a,{props:[fe(s,/:(read-\w+)/,":"+Li+"$1")]})),El(fa(a,{props:[s]})),pf(a,{props:bm(c,o)});break;case"::placeholder":El(fa(a,{props:[fe(s,/:(plac\w+)/,":"+Te+"input-$1")]})),El(fa(a,{props:[fe(s,/:(plac\w+)/,":"+Li+"$1")]})),El(fa(a,{props:[fe(s,/:(plac\w+)/,$e+"input-$1")]})),El(fa(a,{props:[s]})),pf(a,{props:bm(c,o)});break}return""})}}var o3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},jl=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",B1="active",H1="data-styled-version",ao="6.3.11",Df=`/*!sc*/
`,Ui=typeof window<"u"&&typeof document<"u",c3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY);function Ki(a){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Au=new Map,qu=new Map,Ru=1,Ni=function(a){if(Au.has(a))return Au.get(a);for(;qu.has(Ru);)Ru++;var i=Ru++;return Au.set(a,i),qu.set(i,a),i},s3=function(a,i){Ru=i+1,Au.set(a,i),qu.set(i,a)},Nf=Object.freeze([]),Al=Object.freeze({});function f3(a,i,c){return c===void 0&&(c=Al),a.theme!==c.theme&&a.theme||i||c.theme}var $1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),d3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,p3=/(^-|-$)/g;function Em(a){return a.replace(d3,"-").replace(p3,"")}var h3=/(a)(d)/gi,Cm=function(a){return String.fromCharCode(a+(a>25?39:97))};function mf(a){var i,c="";for(i=Math.abs(a);i>52;i=i/52|0)c=Cm(i%52)+c;return(Cm(i%52)+c).replace(h3,"$1-$2")}var Gs,Da=function(a,i){for(var c=i.length;c;)a=33*a^i.charCodeAt(--c);return a},k1=function(a){return Da(5381,a)};function Y1(a){return mf(k1(a)>>>0)}function m3(a){return a.displayName||a.name||"Component"}function Vs(a){return typeof a=="string"&&!0}var q1=typeof Symbol=="function"&&Symbol.for,G1=q1?Symbol.for("react.memo"):60115,g3=q1?Symbol.for("react.forward_ref"):60112,y3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},V1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v3=((Gs={})[g3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gs[G1]=V1,Gs);function _m(a){return("type"in(i=a)&&i.type.$$typeof)===G1?V1:"$$typeof"in a?v3[a.$$typeof]:y3;var i}var b3=Object.defineProperty,S3=Object.getOwnPropertyNames,Tm=Object.getOwnPropertySymbols,w3=Object.getOwnPropertyDescriptor,E3=Object.getPrototypeOf,zm=Object.prototype;function X1(a,i,c){if(typeof i!="string"){if(zm){var o=E3(i);o&&o!==zm&&X1(a,o,c)}var s=S3(i);Tm&&(s=s.concat(Tm(i)));for(var f=_m(a),p=_m(i),x=0;x<s.length;++x){var g=s[x];if(!(g in x3||c&&c[g]||p&&g in p||f&&g in f)){var y=w3(i,g);try{b3(a,g,y)}catch{}}}}return a}function Rl(a){return typeof a=="function"}function Lf(a){return typeof a=="object"&&"styledComponentId"in a}function La(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function gf(a,i){return a.join("")}function Gi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function yf(a,i,c){if(c===void 0&&(c=!1),!c&&!Gi(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)a[o]=yf(a[o],i[o]);else if(Gi(i))for(var o in i)a[o]=yf(a[o],i[o]);return a}function Uf(a,i){Object.defineProperty(a,"toString",{value:i})}var C3=(function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(i){if(i===this._cGroup)return this._cIndex;var c=this._cIndex;if(i>this._cGroup)for(var o=this._cGroup;o<i;o++)c+=this.groupSizes[o];else for(o=this._cGroup-1;o>=i;o--)c-=this.groupSizes[o];return this._cGroup=i,this._cIndex=c,c},a.prototype.insertRules=function(i,c){if(i>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,f=s;i>=f;)if((f<<=1)<0)throw Ki(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var p=s;p<f;p++)this.groupSizes[p]=0}for(var x=this.indexOfGroup(i+1),g=0,y=(p=0,c.length);p<y;p++)this.tag.insertRule(x,c[p])&&(this.groupSizes[i]++,x++,g++);g>0&&this._cGroup>i&&(this._cIndex+=g)},a.prototype.clearGroup=function(i){if(i<this.length){var c=this.groupSizes[i],o=this.indexOfGroup(i),s=o+c;this.groupSizes[i]=0;for(var f=o;f<s;f++)this.tag.deleteRule(o);c>0&&this._cGroup>i&&(this._cIndex-=c)}},a.prototype.getGroup=function(i){var c="";if(i>=this.length||this.groupSizes[i]===0)return c;for(var o=this.groupSizes[i],s=this.indexOfGroup(i),f=s+o,p=s;p<f;p++)c+=this.tag.getRule(p)+Df;return c},a})(),_3="style[".concat(jl,"][").concat(H1,'="').concat(ao,'"]'),T3=new RegExp("^".concat(jl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jm=function(a){return typeof ShadowRoot<"u"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},xf=function(a){if(!a)return document;if(jm(a))return a;if("getRootNode"in a){var i=a.getRootNode();if(jm(i))return i}return document},z3=function(a,i,c){for(var o,s=c.split(","),f=0,p=s.length;f<p;f++)(o=s[f])&&a.registerName(i,o)},j3=function(a,i){for(var c,o=((c=i.textContent)!==null&&c!==void 0?c:"").split(Df),s=[],f=0,p=o.length;f<p;f++){var x=o[f].trim();if(x){var g=x.match(T3);if(g){var y=0|parseInt(g[1],10),b=g[2];y!==0&&(s3(b,y),z3(a,b,g[3]),a.getTag().insertRules(y,s)),s.length=0}else s.push(x)}}},Xs=function(a){for(var i=xf(a.options.target).querySelectorAll(_3),c=0,o=i.length;c<o;c++){var s=i[c];s&&s.getAttribute(jl)!==B1&&(j3(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function A3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Q1=function(a){var i=document.head,c=a||i,o=document.createElement("style"),s=(function(x){var g=Array.from(x.querySelectorAll("style[".concat(jl,"]")));return g[g.length-1]})(c),f=s!==void 0?s.nextSibling:null;o.setAttribute(jl,B1),o.setAttribute(H1,ao);var p=A3();return p&&o.setAttribute("nonce",p),c.insertBefore(o,f),o},R3=(function(){function a(i){this.element=Q1(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var o;if(c.sheet)return c.sheet;for(var s=(o=c.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets,f=0,p=s.length;f<p;f++){var x=s[f];if(x.ownerNode===c)return x}throw Ki(17)})(this.element),this.length=0}return a.prototype.insertRule=function(i,c){try{return this.sheet.insertRule(c,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var c=this.sheet.cssRules[i];return c&&c.cssText?c.cssText:""},a})(),M3=(function(){function a(i){this.element=Q1(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,c){if(i<=this.length&&i>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a})(),O3=(function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,c){return i<=this.length&&(i===this.length?this.rules.push(c):this.rules.splice(i,0,c),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a})(),Am=Ui,D3={isServer:!Ui,useCSSOMInjection:!c3},Z1=(function(){function a(i,c,o){i===void 0&&(i=Al),c===void 0&&(c={});var s=this;this.options=Tt(Tt({},D3),i),this.gs=c,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Ui&&Am&&(Am=!1,Xs(this)),Uf(this,function(){return(function(f){for(var p=f.getTag(),x=p.length,g="",y=function(v){var D=(function(X){return qu.get(X)})(v);if(D===void 0)return"continue";var q=f.names.get(D);if(q===void 0||!q.size)return"continue";var B=p.getGroup(v);if(B.length===0)return"continue";var G=jl+".g"+v+'[id="'+D+'"]',R="";q.forEach(function(X){X.length>0&&(R+=X+",")}),g+=B+G+'{content:"'+R+'"}'+Df},b=0;b<x;b++)y(b);return g})(s)})}return a.registerId=function(i){return Ni(i)},a.prototype.rehydrate=function(){!this.server&&Ui&&Xs(this)},a.prototype.reconstructWithOptions=function(i,c){c===void 0&&(c=!0);var o=new a(Tt(Tt({},this.options),i),this.gs,c&&this.names||void 0);return!this.server&&Ui&&i.target!==this.options.target&&xf(this.options.target)!==xf(i.target)&&Xs(o),o},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(c){var o=c.useCSSOMInjection,s=c.target;return c.isServer?new O3(s):o?new R3(s):new M3(s)})(this.options),new C3(i)));var i},a.prototype.hasNameForId=function(i,c){var o,s;return(s=(o=this.names.get(i))===null||o===void 0?void 0:o.has(c))!==null&&s!==void 0&&s},a.prototype.registerName=function(i,c){Ni(i);var o=this.names.get(i);o?o.add(c):this.names.set(i,new Set([c]))},a.prototype.insertRules=function(i,c,o){this.registerName(i,c),this.getTag().insertRules(Ni(i),o)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(Ni(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a})(),N3=/&/g,On=47,Na=42;function Rm(a){if(a.indexOf("}")===-1)return!1;for(var i=a.length,c=0,o=0,s=!1,f=0;f<i;f++){var p=a.charCodeAt(f);if(o!==0||s||p!==On||a.charCodeAt(f+1)!==Na)if(s)p===Na&&a.charCodeAt(f+1)===On&&(s=!1,f++);else if(p!==34&&p!==39||f!==0&&a.charCodeAt(f-1)===92){if(o===0){if(p===123)c++;else if(p===125&&--c<0)return!0}}else o===0?o=p:o===p&&(o=0);else s=!0,f++}return c!==0||o!==0}function K1(a,i){return a.map(function(c){return c.type==="rule"&&(c.value="".concat(i," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(i," ")),c.props=c.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=K1(c.children,i)),c})}function L3(a){var i,c,o,s=Al,f=s.options,p=f===void 0?Al:f,x=s.plugins,g=x===void 0?Nf:x,y=function(B,G,R){return R.startsWith(c)&&R.endsWith(c)&&R.replaceAll(c,"").length>0?".".concat(i):B},b=g.slice();b.push(function(B){B.type===Pu&&B.value.includes("&")&&(o||(o=new RegExp("\\".concat(c,"\\b"),"g")),B.props[0]=B.props[0].replace(N3,c).replace(o,y))}),p.prefix&&b.push(u3),b.push(l3);var v=[],D=i3(b.concat(r3(function(B){return v.push(B)}))),q=function(B,G,R,X){G===void 0&&(G=""),R===void 0&&(R=""),X===void 0&&(X="&"),i=X,c=G,o=void 0;var Z=(function(M){if(!Rm(M))return M;for(var Q=M.length,J="",N=0,K=0,de=0,k=!1,W=0;W<Q;W++){var ae=M.charCodeAt(W);if(de!==0||k||ae!==On||M.charCodeAt(W+1)!==Na)if(k)ae===Na&&M.charCodeAt(W+1)===On&&(k=!1,W++);else if(ae!==34&&ae!==39||W!==0&&M.charCodeAt(W-1)===92){if(de===0)if(ae===123)K++;else if(ae===125){if(--K<0){for(var ve=W+1;ve<Q;){var Ye=M.charCodeAt(ve);if(Ye===59||Ye===10)break;ve++}ve<Q&&M.charCodeAt(ve)===59&&ve++,K=0,W=ve-1,N=ve;continue}K===0&&(J+=M.substring(N,W+1),N=W+1)}else ae===59&&K===0&&(J+=M.substring(N,W+1),N=W+1)}else de===0?de=ae:de===ae&&(de=0);else k=!0,W++}if(N<Q){var Ne=M.substring(N);Rm(Ne)||(J+=Ne)}return J})((function(M){if(M.indexOf("//")===-1)return M;for(var Q=M.length,J=[],N=0,K=0,de=0,k=0;K<Q;){var W=M.charCodeAt(K);if(W!==34&&W!==39||K!==0&&M.charCodeAt(K-1)===92)if(de===0)if(W===On&&K+1<Q&&M.charCodeAt(K+1)===Na){for(K+=2;K+1<Q&&(M.charCodeAt(K)!==Na||M.charCodeAt(K+1)!==On);)K++;K+=2}else if(W===40&&K>=3&&(32|M.charCodeAt(K-1))==108&&(32|M.charCodeAt(K-2))==114&&(32|M.charCodeAt(K-3))==117)k=1,K++;else if(k>0)W===41?k--:W===40&&k++,K++;else if(W===Na&&K+1<Q&&M.charCodeAt(K+1)===On)K>N&&J.push(M.substring(N,K)),N=K+=2;else if(W===On&&K+1<Q&&M.charCodeAt(K+1)===On){for(K>N&&J.push(M.substring(N,K));K<Q&&M.charCodeAt(K)!==10;)K++;N=K}else K++;else K++;else de===0?de=W:de===W&&(de=0),K++}return N===0?M:(N<Q&&J.push(M.substring(N)),J.join(""))})(B)),V=n3(R||G?"".concat(R," ").concat(G," { ").concat(Z," }"):Z);return p.namespace&&(V=K1(V,p.namespace)),v=[],Yu(V,D),v};return q.hash=g.length?g.reduce(function(B,G){return G.name||Ki(15),Da(B,G.name)},5381).toString():"",q}var U3=new Z1,vf=L3(),J1=_l.createContext({shouldForwardProp:void 0,styleSheet:U3,stylis:vf});J1.Consumer;_l.createContext(void 0);function Mm(){return _l.useContext(J1)}var W1=(function(){function a(i,c){var o=this;this.inject=function(s,f){f===void 0&&(f=vf);var p=o.name+f.hash;s.hasNameForId(o.id,p)||s.insertRules(o.id,p,f(o.rules,p,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=c,Uf(this,function(){throw Ki(12,String(o.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=vf),this.name+i.hash},a})();function B3(a,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||a in o3||a.startsWith("--")?String(i).trim():"".concat(i,"px")}var H3=function(a){return a>="A"&&a<="Z"};function Om(a){for(var i="",c=0;c<a.length;c++){var o=a[c];if(c===1&&o==="-"&&a[0]==="-")return a;H3(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var F1=function(a){return a==null||a===!1||a===""},I1=function(a){var i=[];for(var c in a){var o=a[c];a.hasOwnProperty(c)&&!F1(o)&&(Array.isArray(o)&&o.isCss||Rl(o)?i.push("".concat(Om(c),":"),o,";"):Gi(o)?i.push.apply(i,Yi(Yi(["".concat(c," {")],I1(o),!1),["}"],!1)):i.push("".concat(Om(c),": ").concat(B3(c,o),";")))}return i};function Ua(a,i,c,o,s){if(s===void 0&&(s=[]),typeof a=="string")return a&&s.push(a),s;if(F1(a))return s;if(Lf(a))return s.push(".".concat(a.styledComponentId)),s;if(Rl(a)){if(!Rl(p=a)||p.prototype&&p.prototype.isReactComponent||!i)return s.push(a),s;var f=a(i);return Ua(f,i,c,o,s)}var p;if(a instanceof W1)return c?(a.inject(c,o),s.push(a.getName(o))):s.push(a),s;if(Gi(a)){for(var x=I1(a),g=0;g<x.length;g++)s.push(x[g]);return s}if(!Array.isArray(a))return s.push(a.toString()),s;for(g=0;g<a.length;g++)Ua(a[g],i,c,o,s);return s}function $3(a){for(var i=0;i<a.length;i+=1){var c=a[i];if(Rl(c)&&!Lf(c))return!1}return!0}var k3=k1(ao),Y3=(function(){function a(i,c,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&$3(i),this.componentId=c,this.baseHash=Da(k3,c),this.baseStyle=o,Z1.registerId(c)}return a.prototype.generateAndInjectStyles=function(i,c,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,c,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))s=La(s,this.staticRulesId);else{var f=gf(Ua(this.rules,i,c,o)),p=mf(Da(this.baseHash,f)>>>0);if(!c.hasNameForId(this.componentId,p)){var x=o(f,".".concat(p),void 0,this.componentId);c.insertRules(this.componentId,p,x)}s=La(s,p),this.staticRulesId=p}else{for(var g=Da(this.baseHash,o.hash),y="",b=0;b<this.rules.length;b++){var v=this.rules[b];if(typeof v=="string")y+=v;else if(v){var D=gf(Ua(v,i,c,o));g=Da(Da(g,String(b)),D),y+=D}}if(y){var q=mf(g>>>0);if(!c.hasNameForId(this.componentId,q)){var B=o(y,".".concat(q),void 0,this.componentId);c.insertRules(this.componentId,q,B)}s=La(s,q)}}return{className:s,css:typeof window>"u"?c.getTag().getGroup(Ni(this.componentId)):""}},a})(),P1=_l.createContext(void 0);P1.Consumer;var Qs={};function q3(a,i,c){var o=Lf(a),s=a,f=!Vs(a),p=i.attrs,x=p===void 0?Nf:p,g=i.componentId,y=g===void 0?(function(M,Q){var J=typeof M!="string"?"sc":Em(M);Qs[J]=(Qs[J]||0)+1;var N="".concat(J,"-").concat(Y1(ao+J+Qs[J]));return Q?"".concat(Q,"-").concat(N):N})(i.displayName,i.parentComponentId):g,b=i.displayName,v=b===void 0?(function(M){return Vs(M)?"styled.".concat(M):"Styled(".concat(m3(M),")")})(a):b,D=i.displayName&&i.componentId?"".concat(Em(i.displayName),"-").concat(i.componentId):i.componentId||y,q=o&&s.attrs?s.attrs.concat(x).filter(Boolean):x,B=i.shouldForwardProp;if(o&&s.shouldForwardProp){var G=s.shouldForwardProp;if(i.shouldForwardProp){var R=i.shouldForwardProp;B=function(M,Q){return G(M,Q)&&R(M,Q)}}else B=G}var X=new Y3(c,D,o?s.componentStyle:void 0);function Z(M,Q){return(function(J,N,K){var de=J.attrs,k=J.componentStyle,W=J.defaultProps,ae=J.foldedComponentIds,ve=J.styledComponentId,Ye=J.target,Ne=_l.useContext(P1),L=Mm(),F=J.shouldForwardProp||L.shouldForwardProp,le=f3(N,Ne,W)||Al,pe=(function(oe,he,Ke){for(var Le,ht=Tt(Tt({},he),{className:void 0,theme:Ke}),Hn=0;Hn<oe.length;Hn+=1){var $n=Rl(Le=oe[Hn])?Le(ht):Le;for(var dn in $n)dn==="className"?ht.className=La(ht.className,$n[dn]):dn==="style"?ht.style=Tt(Tt({},ht.style),$n[dn]):ht[dn]=$n[dn]}return"className"in he&&typeof he.className=="string"&&(ht.className=La(ht.className,he.className)),ht})(de,N,le),we=pe.as||Ye,C={};for(var H in pe)pe[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&pe.theme===le||(H==="forwardedAs"?C.as=pe.forwardedAs:F&&!F(H,we)||(C[H]=pe[H]));var I=(function(oe,he){var Ke=Mm(),Le=oe.generateAndInjectStyles(he,Ke.styleSheet,Ke.stylis);return Le})(k,pe),P=I.className,re=La(ae,ve);return P&&(re+=" "+P),pe.className&&(re+=" "+pe.className),C[Vs(we)&&!$1.has(we)?"class":"className"]=re,K&&(C.ref=K),E.createElement(we,C)})(V,M,Q)}Z.displayName=v;var V=_l.forwardRef(Z);return V.attrs=q,V.componentStyle=X,V.displayName=v,V.shouldForwardProp=B,V.foldedComponentIds=o?La(s.foldedComponentIds,s.styledComponentId):"",V.styledComponentId=D,V.target=o?s.target:a,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=o?(function(Q){for(var J=[],N=1;N<arguments.length;N++)J[N-1]=arguments[N];for(var K=0,de=J;K<de.length;K++)yf(Q,de[K],!0);return Q})({},s.defaultProps,M):M}}),Uf(V,function(){return".".concat(V.styledComponentId)}),f&&X1(V,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function Dm(a,i){for(var c=[a[0]],o=0,s=i.length;o<s;o+=1)c.push(i[o],a[o+1]);return c}var Nm=function(a){return Object.assign(a,{isCss:!0})};function qe(a){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];if(Rl(a)||Gi(a))return Nm(Ua(Dm(Nf,Yi([a],i,!0))));var o=a;return i.length===0&&o.length===1&&typeof o[0]=="string"?Ua(o):Nm(Ua(Dm(o,i)))}function bf(a,i,c){if(c===void 0&&(c=Al),!i)throw Ki(1,i);var o=function(s){for(var f=[],p=1;p<arguments.length;p++)f[p-1]=arguments[p];return a(i,c,qe.apply(void 0,Yi([s],f,!1)))};return o.attrs=function(s){return bf(a,i,Tt(Tt({},c),{attrs:Array.prototype.concat(c.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return bf(a,i,Tt(Tt({},c),s))},o}var eg=function(a){return bf(q3,a)},_=eg;$1.forEach(function(a){_[a]=eg(a)});function Re(a){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];var o=gf(qe.apply(void 0,Yi([a],i,!1))),s=Y1(o);return new W1(s,o)}const tg="/assets/Margg-lQxeB3-A.png",Ji="1920px",Lm={mobile:"1000px",tablet:"1200px"},ze={mobile:`@media (max-width: ${Lm.mobile})`,tablet:`@media (max-width: ${Lm.tablet})`},Se={heading:'"Bebas Neue", sans-serif',body:'"Inter", sans-serif'};function st(a){const i=cv(qb);return a?i[a]??{}:i}Re`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;const G3=Re`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`,V3=_.div`
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
`,X3=_.nav`
  display: flex;
  width: 85%;
  max-width: ${Ji};
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
`,Q3=_.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,Z3=_.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;_.div`
  display: flex;
  align-items: flex-start;
`;const K3=_.img`
  width: 132.156px;
  height: 40.141px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
  }
`;_.img`
  width: 38.699px;
  height: 27.483px;
  flex-shrink: 0;
`;_.img`
  width: 79.181px;
  height: 5.559px;
  flex-shrink: 0;
`;const J3=_.div`
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
`,W3=_.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`,F3=_.a`
  color: white;
  font-family: ${Se.body};
  font-size: 16px;
  font-weight: ${a=>a.primary?"600":"300"};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${a=>a.primary?"1":"0.5"};

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`,I3=_.button`
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
`,Zs=_.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${a=>a.$open?"50%":"0"};
    transform: ${a=>a.$open?"translateY(-50%) rotate(45deg)":"none"};
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${a=>a.$open?0:1};
  }
  &:nth-child(3) {
    bottom: ${a=>a.$open?"auto":"0"};
    top: ${a=>a.$open?"50%":"auto"};
    transform: ${a=>a.$open?"translateY(-50%) rotate(-45deg)":"none"};
  }
`,P3=_.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 49;
    background: rgba(9, 2, 21, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${a=>a.$open?1:0};
    pointer-events: ${a=>a.$open?"auto":"none"};
    transition: opacity 0.3s ease;
  }
`,e5=_.div`
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
    transform: translateX(${a=>a.$open?"0":"100%"});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`,t5=_.button`
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
`,n5=_.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,a5=_.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${Se.body};
  font-size: 18px;
  font-weight: ${a=>a.$primary?"600":"400"};
  color: #fff;
  opacity: ${a=>a.$primary?1:.7};
  transition: all 0.2s ease;
  background: ${a=>a.$primary?"rgba(80, 19, 192, 0.15)":"transparent"};

  ${a=>a.$show&&qe`
      animation: ${G3} 0.4s ease forwards;
      animation-delay: ${a.$delay||"0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`,l5=_.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`,i5=_.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`,Um={Home:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Our Products":h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"Contact Us":h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},r5=()=>{const{logoAlt:a,links:i}=st("navbar"),[c,o]=E.useState(!1),s=E.useRef(null);E.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[c]),E.useEffect(()=>{const p=x=>{x.key==="Escape"&&o(!1)};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]);const f=E.useCallback(p=>{const x=p.currentTarget.getAttribute("href");x?.startsWith("#")&&(p.preventDefault(),o(!1),setTimeout(()=>{const g=document.getElementById(x.slice(1));if(g){const y=document.querySelector("nav")?.offsetHeight||72,b=g.getBoundingClientRect().top+window.scrollY-y;window.scrollTo({top:b,behavior:"smooth"})}},100))},[]);return h.jsxs(h.Fragment,{children:[h.jsx(V3,{children:h.jsx(X3,{children:h.jsxs(Q3,{children:[h.jsx(Z3,{children:h.jsx(K3,{src:tg,alt:a})}),h.jsx(J3,{children:h.jsx(W3,{children:i.map(p=>h.jsx(F3,{href:p.href,primary:p.primary?!0:void 0,onClick:f,children:p.label},p.label))})}),h.jsxs(I3,{onClick:()=>o(p=>!p),"aria-label":c?"Close menu":"Open menu","aria-expanded":c,children:[h.jsx(Zs,{$open:c}),h.jsx(Zs,{$open:c}),h.jsx(Zs,{$open:c})]})]})})}),h.jsx(P3,{$open:c,onClick:()=>o(!1)}),h.jsxs(e5,{$open:c,ref:s,children:[h.jsx(t5,{onClick:()=>o(!1),"aria-label":"Close menu",children:h.jsx("svg",{viewBox:"0 0 16 16",fill:"none",children:h.jsx("path",{d:"M12 4L4 12M4 4l8 8",stroke:"#B095E3",strokeWidth:"1.5",strokeLinecap:"round"})})}),h.jsx(n5,{children:i.map((p,x)=>h.jsxs(a5,{href:p.href,$primary:p.primary,$show:c,$delay:`${.1+x*.07}s`,onClick:f,children:[h.jsx(l5,{children:Um[p.label]||Um.Home}),p.label]},p.label))}),h.jsx(i5,{})]})]})};function u5({color:a="currentColor"}){return h.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("rect",{x:"10",y:"12",width:"44",height:"40",rx:"10",fill:a,opacity:"0.25"}),h.jsx("rect",{x:"18",y:"20",width:"28",height:"24",rx:"8",fill:a,opacity:"0.35"}),h.jsx("path",{d:"M26 36L32 30L38 36",stroke:a,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"})]})}function o5({color:a="currentColor"}){return h.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z",fill:a,opacity:"0.25"}),h.jsx("path",{d:"M26 24L20 30L26 36",stroke:a,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),h.jsx("path",{d:"M38 24L44 30L38 36",stroke:a,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),h.jsx("path",{d:"M34 22L30 38",stroke:a,strokeWidth:"3",strokeLinecap:"round",opacity:"0.9"})]})}function c5({color:a="currentColor"}){return h.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M20 44L44 20",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),h.jsx("path",{d:"M18 46L22 42L26 46L22 50L18 46Z",fill:a,opacity:"0.35"}),h.jsx("path",{d:"M38 18L46 26",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function s5({color:a="currentColor"}){return h.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("rect",{x:"16",y:"14",width:"32",height:"28",rx:"6",fill:a,opacity:"0.25"}),h.jsx("rect",{x:"20",y:"18",width:"24",height:"14",rx:"4",fill:a,opacity:"0.35"}),h.jsx("path",{d:"M26 48H38",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function f5({color:a="currentColor"}){return h.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z",fill:a,opacity:"0.25"}),h.jsx("path",{d:"M26 46H38",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),h.jsx("path",{d:"M22 52H42",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}function d5({color:a="currentColor"}){return h.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M16 44V34",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),h.jsx("path",{d:"M28 44V26",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),h.jsx("path",{d:"M40 44V30",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),h.jsx("path",{d:"M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z",fill:a,opacity:"0.35"})]})}function p5({color:a="currentColor"}){return h.jsxs("svg",{viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("rect",{x:"18",y:"30",width:"28",height:"22",rx:"10",fill:a,opacity:"0.25"}),h.jsx("path",{d:"M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"}),h.jsx("path",{d:"M32 38V44",stroke:a,strokeWidth:"4",strokeLinecap:"round",opacity:"0.9"})]})}const h5=(a,i=null)=>{const c={1:[],2:[],3:[]};a.forEach(f=>{c[f.row].push(f)}),Object.keys(c).forEach(f=>{c[f].sort((p,x)=>p.col-x.col)});let o=!0;for(;o;){o=!1;for(let f=3;f>=2;f--){const p=c[f];if(p.reduce((g,y)=>g+y.span,0)>4){const g=p.findIndex(b=>b.id===i);let y;g!==-1&&g<=1?y=p.pop():y=p.shift(),y.row=f-1,c[f-1].push(y),o=!0;break}}}const s=[];return Object.keys(c).forEach(f=>{let p=1;c[f].forEach(x=>{s.push({...x,row:parseInt(f),col:p}),p+=x.span})}),s},m5=(a,i)=>{if(!i)return a.map(o=>({...o,span:1}));const c=a.map(o=>({...o,span:o.id===i?2:1}));return h5(c,i)},g5=a=>{const i=[];let c=0;for(let o=1;o<=3;o++)c<a.length&&(i.push({id:a[c],row:1,col:o,span:1}),c++);for(let o=1;o<=4;o++)c<a.length&&(i.push({id:a[c],row:2,col:o,span:1}),c++);for(let o=1;o<=4;o++)c<a.length&&(i.push({id:a[c],row:3,col:o,span:1}),c++);return i},y5=3e3,x5=1,v5=_.div`
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
`,b5=_.div`
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
    background: ${a=>a.$isExpanded?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.1)"};
    backdrop-filter: blur(10px);
    box-shadow: ${a=>a.$isExpanded?"0px 4px 32px 0px rgba(176, 149, 227, 0.25)":"none"};
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
`,S5=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`,w5=_.div`
  display: flex;
  align-items: center;
  justify-content: ${a=>a.$isExpanded?"flex-start":"center"};
  gap: ${a=>a.$isExpanded?"16px":"0"};
  width: ${a=>a.$isExpanded?"100%":"auto"};
  padding: ${a=>a.$isExpanded?"0 20px":"0"};
  transition: none;
`,E5=_.div`
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
`,C5=_.div`
  font-family: ${Se.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  display: ${a=>a.$isExpanded?"block":"none"};
  opacity: ${a=>a.$isExpanded?"1":"0"};
  transform: translateX(${a=>a.$isExpanded?"0":"20px"});
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
`;function _5({ariaLabel:a,title:i,icon:c,gridRow:o,gridColumn:s,isExpanded:f,onMouseEnter:p,onMouseLeave:x,onClick:g,tileId:y}){return h.jsx(b5,{"aria-label":a,$isExpanded:f,style:{gridRow:o,gridColumn:s},onMouseEnter:()=>p(y),onMouseLeave:x,onClick:()=>g(y),children:h.jsx(S5,{children:h.jsxs(w5,{$isExpanded:f,children:[h.jsx(E5,{children:c}),h.jsx(C5,{$isExpanded:f,children:i})]})})})}const T5={ScrollIcon:u5,MessageProgrammingIcon:o5,PenToolIcon:c5,DriverIcon:s5,CloudConnectionIcon:f5,FavoriteChartIcon:d5,LockIcon:p5};function z5({tileColor:a}){const i=st("hero").tiles??{},c=i.autoCycleIntervalMs??y5,o=i.defaultTileId??x5,s=E.useMemo(()=>{const M=i.row1??[],Q=i.row2??[],J=i.row3??[];return[...M,...Q,...J]},[i]),f=E.useMemo(()=>s.length?Math.min(...s.map(M=>M.id)):1,[s]),p=E.useMemo(()=>s.length?Math.max(...s.map(M=>M.id)):1,[s]),[x,g]=E.useState(o),[y,b]=E.useState(!1),[v,D]=E.useState(!1),q=E.useRef(null),B=E.useRef(null);E.useEffect(()=>{if(typeof window<"u"){const M=()=>D(window.innerWidth<=1e3);return M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)}},[]),E.useEffect(()=>v?void 0:(y||(q.current=setInterval(()=>{if(!y){const Q=Math.floor(Math.random()*(p-f+1))+f;g(Q)}},c)),()=>{q.current&&clearInterval(q.current)}),[y,v]);const G=E.useMemo(()=>{const M=s.map(N=>N.id),Q={},J=g5(M);return Q.default=J,M.forEach(N=>{Q[N]=m5(J,N)}),Q},[s]),R=E.useMemo(()=>G[x||"default"]||G.default,[G,x]),X=M=>{b(!0),g(M),q.current&&clearInterval(q.current)},Z=()=>{g(o),b(!1)},V=M=>{v&&(B.current&&clearTimeout(B.current),x===M?g(o):(g(M),B.current=setTimeout(()=>{g(o)},4e3)))};return E.useEffect(()=>()=>{B.current&&clearTimeout(B.current)},[]),h.jsx(v5,{"aria-label":"intro tiles",children:R.map(M=>{const Q=s.find(K=>K.id===M.id);if(!Q)return null;const J=T5[Q.icon],N=M.span===2;return h.jsx(_5,{tileId:M.id,ariaLabel:Q.ariaLabel,title:Q.title,icon:h.jsx(J,{color:a}),gridRow:M.row,gridColumn:`${M.col} / span ${M.span}`,isExpanded:N,onMouseEnter:X,onMouseLeave:Z,onClick:V},M.id)})})}const Bm="margg_waitlist_joined",Ks="margg:waitlist_joined",j5=Re`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`,A5=Re`
  to { stroke-dashoffset: 0; }
`,R5=Re`
  to { transform: rotate(360deg); }
`,Hm=_.div`
  width: 100%;
  max-width: 520px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`,M5=_.div`
  position: relative;
  width: 100%;
  height: 56px;
`,O5=_.input`
  width: 100%;
  height: 100%;
  padding: 16px 180px 16px 24px;
  border: 1px solid ${a=>a.$hasError?"#FF4D4F":"#2d2d2d"};
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
    border-color: ${a=>a.$hasError?"#FF4D4F":"#d3c4ef"};
  }

  @media (max-width: 640px) {
    padding: 14px 120px 14px 16px;
    font-size: 14px;
  }
`,D5=_.button`
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
`,N5=_.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid rgba(80, 19, 192, 0.25);
  border-top-color: #5013c0;
  border-radius: 50%;
  animation: ${R5} 0.6s linear infinite;

  @media (max-width: 640px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }
`,L5=_.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ff6b6b;
  opacity: ${a=>a.$show?"1":"0"};
  max-height: ${a=>a.$show?"30px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,U5=_.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${j5} 0.4s ease forwards;

  @media (max-width: 640px) {
    gap: 10px;
  }
`,B5=_.div`
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
    animation: ${A5} 0.4s ease 0.25s forwards;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    svg { width: 18px; height: 18px; }
  }
`,H5=_.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(238, 231, 249, 0.85);
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,ng=({placeholder:a="Enter Email",buttonText:i="Join the waitlist",onSubmit:c})=>{const[o,s]=E.useState(""),[f,p]=E.useState(""),[x,g]=E.useState(!1),[y,b]=E.useState(!1),v=E.useRef(null),D=E.useRef(null),q=E.useRef(null);E.useEffect(()=>{try{typeof window<"u"&&localStorage.getItem(Bm)==="true"&&g(!0)}catch{}},[]),E.useEffect(()=>{const X=()=>g(!0);return window.addEventListener(Ks,X),()=>window.removeEventListener(Ks,X)},[]),E.useEffect(()=>{D.current&&!q.current&&(q.current=D.current.offsetWidth)}),E.useEffect(()=>{const X=Z=>{v.current&&!v.current.contains(Z.target)&&f&&p("")};return document.addEventListener("mousedown",X),()=>{document.removeEventListener("mousedown",X)}},[f]);const B=X=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X),G=async X=>{if(X.preventDefault(),p(""),!B(o)){p("Please enter a valid email address");return}if(c){b(!0);try{await c(o);try{localStorage.setItem(Bm,"true")}catch{}window.dispatchEvent(new Event(Ks)),g(!0)}catch(Z){Z.message==="already_registered"?p("This email is already registered"):Z.message==="already_enrolled"?p("This email is already enrolled in the waitlist"):p(Z.message||"Something went wrong. Please try again.")}finally{b(!1)}}},R=X=>{s(X.target.value),f&&p("")};return x?h.jsx(Hm,{ref:v,children:h.jsxs(U5,{children:[h.jsx(B5,{children:h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M5 13l4 4L19 7",stroke:"#B095E3",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),h.jsx(H5,{children:"You have already joined the waitlist"})]})}):h.jsxs(Hm,{ref:v,children:[h.jsx("form",{onSubmit:G,children:h.jsxs(M5,{children:[h.jsx(O5,{type:"email",placeholder:a,value:o,onChange:R,$hasError:!!f,disabled:y}),h.jsx(D5,{ref:D,type:"submit",disabled:y,style:y&&q.current?{width:q.current}:void 0,children:y?h.jsx(N5,{}):i})]})}),h.jsx(L5,{$show:!!f,children:f})]})};async function lo(a,i,c){if(!a)throw new Error("Google Sheets integration is not configured. Please set the script URL.");const o={_sheet:i,...c};let s;try{s=await fetch(a,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(o),signal:AbortSignal.timeout(15e3)})}catch(f){throw f.name==="TimeoutError"||f.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach Google Sheets. Please check your internet connection and try again.")}return{ok:!0}}let Js=!1,Mi=null;function $5(){return Js&&window.emailjs?Promise.resolve():Mi||(Mi=new Promise((a,i)=>{if(window.emailjs){Js=!0,a();return}const c=document.createElement("script");c.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",c.async=!0,c.onload=()=>{Js=!0,a()},c.onerror=()=>{Mi=null,i(new Error("Failed to load EmailJS SDK."))},document.head.appendChild(c)}),Mi)}function k5(a,i){const c=a?.templates?.[i];if(!c)return null;const o=c.account,s=a?.accounts?.[o];return!s?.serviceId||!s?.publicKey?null:{serviceId:s.serviceId,publicKey:s.publicKey,templateId:c.templateId}}async function io(a,i,c){const o=k5(a,i);if(!o)return console.warn(`[EmailJS] No valid config for "${i}" — skipping.`),{ok:!0,skipped:!0};try{await $5(),window.emailjs.init(o.publicKey);const s={...c,to_email:a.notifyEmail||"info@margg.in",submission_time:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})},f=await window.emailjs.send(o.serviceId,o.templateId,s);return f.status!==200&&console.warn("[EmailJS] Non-200 status:",f),{ok:!0}}catch(s){return console.error("[EmailJS] Send failed:",s),{ok:!1,error:s.message}}}const Y5=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,q5=/^[0-9\s\-+()]{10,15}$/;function nn(a,i){if(!a||!String(a).trim())throw new Error(`${i} is required`);return String(a).trim()}function ro(a){const i=nn(a,"Email").toLowerCase().slice(0,254);if(!Y5.test(i))throw new Error("Please enter a valid email address");return i}function Bf(a){const i=nn(a,"Phone number");if(!q5.test(i))throw new Error("Please enter a valid phone number");return i}async function uo(a,i){let c;try{c=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),signal:AbortSignal.timeout(15e3)})}catch(s){throw s.name==="TimeoutError"||s.name==="AbortError"?new Error("The request timed out. Please check your connection and try again."):new Error("Unable to reach the server. Please check your internet connection and try again.")}if(c.ok)return{ok:!0};let o="";try{const s=await c.json();o=s?.data?.message||s?.message||s?.error||""}catch{}throw c.status===409?new Error(o||"This entry already exists. Please use a different email."):c.status===422||c.status===400?new Error(o||"Some fields are invalid. Please review and try again."):c.status===429?new Error("Too many requests. Please wait a moment and try again."):c.status>=500?new Error("Our servers are temporarily unavailable. Please try again in a few moments."):new Error(o||"Something went wrong. Please try again.")}function oo(a){return a?.submissionMode==="sheets"}async function ag(a,i){const c=ro(i);if(oo(a))return await lo(a.googleSheets?.scriptUrl,"Waitlist",{email:c}),await io(a.emailjs,"waitlist",{form_type:"Waitlist",email:c}),{ok:!0};const o=`${a.baseUrl}${a.endpoints.waitlist}`;return uo(o,{email:c})}async function G5(a,i){const c=nn(i.fullName,"Full name").split(" ")[0],o=nn(i.fullName,"Full name").split(" ").slice(1).join(" ")||"",s=Bf(i.phone),f=ro(i.email),p=nn(i.college,"College name"),x=nn(i.branch,"Branch"),g=nn(i.year,"Year"),y=i.query||"";if(oo(a)){const D={firstName:c,lastName:o,phone:s,email:f,collegeName:p,branch:x,year:g,query:y};return await lo(a.googleSheets?.scriptUrl,"Learners",D),await io(a.emailjs,"learner",{form_type:"Learner Enquiry",full_name:`${c} ${o}`.trim(),phone:s,email:f,college_name:p,branch:x,year:g,query:y}),{ok:!0}}const b={firstName:c,lastName:o,phone:s,email:f,collegeName:p,branch:x,year:g,query:y},v=`${a.baseUrl}${a.endpoints.learner}`;return uo(v,b)}async function V5(a,i){const c=nn(i.fullName,"Full name"),o=Bf(i.phone),s=ro(i.email),f=i.topics?.length?i.topics:(()=>{throw new Error("Add at least one topic")})();if(oo(a)){const g={fullName:c,phone:o,email:s,topics:f.join(", ")};return await lo(a.googleSheets?.scriptUrl,"Instructors",g),await io(a.emailjs,"instructor",{form_type:"Instructor Enquiry",full_name:c,phone:o,email:s,topics:f.join(", ")}),{ok:!0}}const p={fullName:c,phone:o,email:s,topics:f},x=`${a.baseUrl}${a.endpoints.instructor}`;return uo(x,p)}async function X5(a,i){const c=nn(i.orgType,"Organisation type"),o=nn(i.orgName,"Organisation name"),s=Number(nn(i.students,"Number of students"))||0,f=Bf(i.phone),p=ro(i.email);if(oo(a)){const y={organisationType:c,organisationName:o,numberOfStudents:s,phone:f,email:p};return await lo(a.googleSheets?.scriptUrl,"Partners",y),await io(a.emailjs,"partner",{form_type:"Partner / Organisation Enquiry",organisation_type:c,organisation_name:o,number_of_students:s,phone:f,email:p}),{ok:!0}}const x={organisationType:c,organisationName:o,numberOfStudents:s,phone:f,email:p},g=`${a.baseUrl}${a.endpoints.partner}`;return uo(g,x)}const Q5=_.section`
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
`,Z5=_.div`
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
`,co=_.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(160px);
  opacity: 0.9;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 1;
`,K5=_(co)`
  left: 80.3%;
  top: 67.2%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.95) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,J5=_(co)`
  left: 13.9%;
  top: 1.4%;
  width: clamp(140px, 16vw, 216px);
  height: clamp(140px, 16vw, 216px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.95) 0%,
    rgba(176, 149, 227, 0) 70%
  );
`,W5=_(co)`
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
`,F5=_(co)`
  left: 7.3%;
  top: 34.9%;
  width: clamp(110px, 13vw, 171px);
  height: clamp(110px, 13vw, 171px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.9) 0%,
    rgba(80, 19, 192, 0) 70%
  );
`,I5=_.div`
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
`,P5=_.div`
  width: 100%;
  max-width: ${Ji};
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
`,e4=_.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 520px;
  flex: 0 1 520px;
`,t4=_.h1`
  color: white;
  font-weight: 400;
  font-size: clamp(42px, 5.2vw, 64px);
  line-height: 1.2;
  letter-spacing: -0.3937px;
  margin: 0;
  text-transform: uppercase;
  font-family: ${Se.heading};

  text-wrap: balance;
`,n4=_.p`
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(16px, 2.1vw, 24px);
  line-height: 1.35;
  font-family: ${Se.body};
  margin: 0 0 32px 0;
  max-width: 425px;
  opacity: 0.95;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;_.div`
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translateX(-50%);
  width: 315px;
  text-align: center;
  font-family: ${Se.body};
  font-size: 14px;
  letter-spacing: -0.3937px;
  color: #000;
  opacity: 0.18;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;_.img`
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
`;const a4=({id:a})=>{const i="rgba(176, 149, 227, 1)",{titleLine1:c,titleLine2:o,description:s,inputPlaceholder:f,inputButtonText:p}=st("hero"),x=st("api"),g=y=>ag(x,y);return h.jsxs(Q5,{id:a,children:[h.jsx(Z5,{}),h.jsx(K5,{}),h.jsx(J5,{}),h.jsx(W5,{}),h.jsx(F5,{}),h.jsx(I5,{children:h.jsxs(P5,{children:[h.jsxs(e4,{children:[h.jsxs(t4,{children:[c,h.jsx("br",{}),o]}),h.jsx(n4,{children:s}),h.jsx(ng,{placeholder:f,buttonText:p,onSubmit:g})]}),h.jsx(z5,{tileColor:i})]})})]})},l4=_.div`
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
`,i4=_.div`
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
`,r4=_.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`,u4=_.div`
  margin-top: 8px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
  white-space: pre-line;
`;function o4({items:a}){return h.jsx(l4,{"aria-label":"analytics stats",children:a.map(i=>h.jsxs(i4,{children:[h.jsx(r4,{children:i.value}),h.jsx(u4,{children:i.label})]},i.value+i.label))})}const c4=_.section`
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
`,s4=_.div`
  width: 100%;
  max-width: ${Ji};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`,f4=Re`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`,d4=Re`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`,p4=Re`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`,h4=_.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`,Hf=_.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`,m4=_(Hf)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${f4} 12s ease-in-out infinite;
`,g4=_(Hf)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${d4} 15s ease-in-out infinite;
`,y4=_(Hf)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${p4} 18s ease-in-out infinite;
`,x4=_.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`,v4=Re`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`,b4=_.div`
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
  animation: ${v4} 8s ease-in-out infinite;
`,S4=Re`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`,w4=_.div`
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
  animation: ${S4} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`,E4=Re`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`,C4=[{x:5,y:15,size:3,dur:10,delay:0,op:.4},{x:12,y:72,size:2,dur:12,delay:1.2,op:.3},{x:22,y:35,size:4,dur:9,delay:.5,op:.5},{x:33,y:85,size:2,dur:14,delay:2,op:.25},{x:42,y:12,size:3,dur:11,delay:.8,op:.35},{x:55,y:78,size:4,dur:13,delay:1.5,op:.45},{x:63,y:28,size:2,dur:10,delay:3,op:.3},{x:72,y:60,size:3,dur:15,delay:.3,op:.4},{x:78,y:18,size:2,dur:12,delay:2.5,op:.25},{x:85,y:45,size:4,dur:9,delay:1,op:.5},{x:91,y:80,size:3,dur:11,delay:.7,op:.35},{x:15,y:50,size:2,dur:14,delay:1.8,op:.3},{x:48,y:42,size:3,dur:10,delay:2.2,op:.4},{x:68,y:90,size:2,dur:13,delay:.4,op:.25},{x:38,y:55,size:3,dur:11,delay:3.2,op:.35},{x:95,y:25,size:2,dur:12,delay:1.6,op:.3},{x:8,y:88,size:4,dur:15,delay:.9,op:.45},{x:28,y:8,size:2,dur:10,delay:2.8,op:.3}],_4=_.span`
  position: absolute;
  width: ${a=>a.$size}px;
  height: ${a=>a.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${a=>a.$op});
  left: ${a=>a.$x}%;
  top: ${a=>a.$y}%;
  animation: ${E4} ${a=>a.$dur}s ease-in-out infinite;
  animation-delay: ${a=>a.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${a=>a.$size*3}px
    rgba(176, 149, 227, ${a=>a.$op*.5});
`,T4=Re`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`,z4=_.div`
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
  animation: ${T4} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`,j4=_.div`
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
`,A4=_.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`,R4=_.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`,M4=Re`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`,O4=_.div`
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
    animation: ${M4} 5s ease-in-out infinite;
    pointer-events: none;
  }
`,D4=Re`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`,xu=_.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-color: rgba(176, 149, 227, 0.18);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: ${D4} 0.6s ease-out 2.6s forwards;

  ${a=>a.$pos==="tl"&&qe`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${a=>a.$pos==="tr"&&qe`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${a=>a.$pos==="bl"&&qe`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${a=>a.$pos==="br"&&qe`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`,lg=Re`
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
`,$m=Re`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`,km=Re`
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
`,N4=Re`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`,Ym=_.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2.5vw, 40px);
  transform-style: preserve-3d;
  width: 100%;
`,ig=_.span`
  display: inline-block;
  font-family: ${Se.heading};
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

  ${a=>a.$animate&&qe`
      animation:
        ${lg} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${a.$delay}s
          forwards,
        ${$m} 6s linear ${a.$delay+.9}s infinite,
        ${km} 4s ease-in-out ${a.$delay+.9}s infinite,
        ${N4} ${3.5+a.$delay%1.5}s ease-in-out ${a.$delay+.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${$m} 1.5s linear infinite,
      ${km} 1s ease-in-out infinite;
    text-shadow:
      0 0 40px rgba(176, 149, 227, 0.8),
      0 0 80px rgba(80, 19, 192, 0.3);
    transform: scale(1.12) translateY(-3px);
  }
`,qm=_(ig)`
  font-size: clamp(64px, 12vw, 160px);
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    font-size: clamp(40px, 10vw, 64px);
  }
`,Gm=_(ig)`
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: 0.18em;
  -webkit-text-fill-color: rgba(211, 196, 239, 0.65);
  background: none;
  animation: ${a=>a.$animate?qe`
          ${lg} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${a.$delay}s forwards
        `:"none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`,L4=Re`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`,U4=_.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${Se.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${L4} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`,B4=Re`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`,H4=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: clamp(20px, 2.5vw, 36px);
`,Vm=_.span`
  display: inline-block;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.4) 50%,
    transparent 100%
  );
  animation: ${B4} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`,$4=Re`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`,k4=Re`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`,Y4=_.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${$4} 0.5s ease-out 2.5s forwards,
    ${k4} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`,q4=Re`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`,G4=Re`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`,V4=_.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${G4} 0.8s ease-out 2.8s forwards;
`,Ws=_.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${q4} 1.5s ease-in-out infinite;
  animation-delay: ${a=>a.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;function X4(a){return E.useCallback(c=>{if(!a.current)return;const o=a.current.getBoundingClientRect(),s=(c.clientX-o.left)/o.width*100,f=(c.clientY-o.top)/o.height*100;a.current.style.setProperty("--mx",`${s}%`),a.current.style.setProperty("--my",`${f}%`)},[a])}function Q4(a){const i=E.useCallback(o=>{if(!a.current)return;const s=a.current.getBoundingClientRect(),f=(o.clientX-s.left)/s.width-.5,p=(o.clientY-s.top)/s.height-.5;a.current.style.transform=`rotateX(${p*-5}deg) rotateY(${f*5}deg)`},[a]),c=E.useCallback(()=>{a.current&&(a.current.style.transform="rotateX(0deg) rotateY(0deg)")},[a]);return{handleTiltMove:i,handleTiltLeave:c}}function Z4(a=.2){const i=E.useRef(null),[c,o]=E.useState(!1);return E.useEffect(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const s=i.current;if(!s)return;const f=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),f.disconnect())},{threshold:a});return f.observe(s),()=>f.disconnect()},[a]),[i,c]}function vu({text:a,Component:i,baseDelay:c=0,animate:o=!0}){return h.jsx("span",{style:{display:"inline-flex",flexWrap:"nowrap",whiteSpace:"nowrap"},children:a.split("").map((s,f)=>h.jsx(i,{$animate:o,$delay:c+f*.07,children:s},`${s}-${f}`))})}function K4(){const{stats:a,waitList:i}=st("analytics"),c=E.useRef(null),o=E.useRef(null),s=X4(c),{handleTiltMove:f,handleTiltLeave:p}=Q4(o),[x,g]=Z4(.2),y=E.useCallback(b=>{s(b),f(b)},[s,f]);return h.jsx(c4,{ref:x,"aria-label":"analytics",onMouseMove:y,onMouseLeave:p,children:h.jsx(s4,{children:i?h.jsxs(h.Fragment,{children:[h.jsxs(h4,{children:[h.jsx(m4,{}),h.jsx(g4,{}),h.jsx(y4,{})]}),h.jsx(b4,{}),h.jsx(x4,{}),h.jsx(z4,{}),h.jsx(w4,{}),h.jsx(j4,{ref:c}),C4.map((b,v)=>h.jsx(_4,{$x:b.x,$y:b.y,$size:b.size,$dur:b.dur,$delay:b.delay,$op:b.op},v)),h.jsx(A4,{children:h.jsx(R4,{ref:o,children:h.jsxs(O4,{children:[h.jsx(xu,{$pos:"tl"}),h.jsx(xu,{$pos:"tr"}),h.jsx(xu,{$pos:"bl"}),h.jsx(xu,{$pos:"br"}),h.jsxs(Ym,{children:[h.jsx(vu,{text:"WE",Component:Gm,baseDelay:.1,animate:g}),h.jsx("span",{style:{width:"clamp(8px,1.5vw,20px)"}}),h.jsx(vu,{text:"ARE",Component:Gm,baseDelay:.3,animate:g})]}),h.jsxs(Ym,{style:{marginTop:"clamp(4px, 0.8vw, 12px)"},children:[h.jsx(vu,{text:"COMING",Component:qm,baseDelay:.5,animate:g}),h.jsx(vu,{text:"SOON",Component:qm,baseDelay:.9,animate:g})]}),h.jsx(U4,{children:"Something extraordinary is on its way"}),h.jsxs(H4,{children:[h.jsx(Vm,{}),h.jsx(Y4,{}),h.jsx(Vm,{})]}),h.jsxs(V4,{children:[h.jsx(Ws,{$delay:0}),h.jsx(Ws,{$delay:.3}),h.jsx(Ws,{$delay:.6})]})]})})})]}):h.jsx(o4,{items:a})})})}const rg=Re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function J4(a=.15){const i=E.useRef(null),[c,o]=E.useState(!1);return E.useEffect(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const s=i.current;if(!s)return;const f=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),f.disconnect())},{threshold:a});return f.observe(s),()=>f.disconnect()},[a]),[i,c]}const W4=_.section`
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
`,F4=_.div`
  width: 100%;
  max-width: ${Ji};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,I4=_.h2`
  margin: 0;
  font-family: ${Se.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
  opacity: 0;

  ${a=>a.$inView&&qe`
      animation: ${rg} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,P4=_.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: ${Se.body};
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
  opacity: 0;

  ${a=>a.$inView&&qe`
      animation: ${rg} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,e6=_.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;_.div`
  width: min(560px, 100%);
  margin-top: clamp(22px, 5vh, 44px);
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: min(440px, 100%);
  }
`;_.div`
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
`;_.div`
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
`;_.div`
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
`;function t6({id:a}){const{titleLine1:i,titleLine2:c,description:o}=st("supercharge"),[s,f]=J4(.15);return h.jsx(W4,{id:a,"aria-label":"supercharge",ref:s,children:h.jsx(F4,{children:h.jsxs(e6,{children:[h.jsxs(I4,{$inView:f,children:[i,h.jsx("br",{}),c]}),h.jsx(P4,{$inView:f,children:o})]})})})}const n6=Re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function a6(a=.1){const i=E.useRef(null),[c,o]=E.useState(!1);return E.useEffect(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const s=i.current;if(!s)return;const f=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),f.disconnect())},{threshold:a});return f.observe(s),()=>f.disconnect()},[a]),[i,c]}const l6=/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,i6=/^[0-9\s\-+()]{10,15}$/;function bu(a,i){if(!i||!i.trim())return"Required";switch(a){case"email":return l6.test(i.trim())?"":"Invalid email";case"phone":return i6.test(i.trim())?"":"Invalid phone number";case"fullName":return i.trim().length>=2?"":"At least 2 characters";case"orgName":return i.trim().length>=2?"":"At least 2 characters";default:return""}}const Xm=[{key:"learner",title:"Learners",desc:"Have questions about your course, progress, or certification? Reach out and we’ll get you the support you need."},{key:"instructor",title:"Instructors",desc:"Interested in joining our platform or facing technical issues while managing your content? We’re just a message away."},{key:"partner",title:"Partners",desc:"Let’s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team."}],r6=()=>h.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[h.jsx("path",{d:"M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z",fill:"#D3C4EF",fillOpacity:".8"}),h.jsx("path",{d:"M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",fill:"#EEE7F9"})]}),u6=()=>h.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[h.jsx("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",fill:"#D3C4EF"}),h.jsx("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z",fill:"#D3C4EF",fillOpacity:".6"}),h.jsx("path",{d:"M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z",fill:"#EEE7F9"})]}),o6=()=>h.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[h.jsx("path",{d:"M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",fill:"#D3C4EF",fillOpacity:".6"}),h.jsx("path",{d:"M9 11a3 3 0 100-6 3 3 0 000 6z",fill:"#D3C4EF"}),h.jsx("path",{d:"M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z",fill:"#D3C4EF",fillOpacity:".6"}),h.jsx("path",{d:"M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z",fill:"#D3C4EF"})]}),c6={learner:r6,instructor:u6,partner:o6},s6=_.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${ze.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`,$f=_.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`,f6=_($f)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `,d6=_($f)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `,p6=_($f)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `,h6=_.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Wi=qe`
  opacity: 0;
  ${a=>a.$show&&qe`
    animation: ${n6} 0.7s ease forwards;
    animation-delay: ${a.$d||"0s"};
  `}
`,m6=_.h2`
  margin: 0;
  font-family: ${Se.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${Wi}
`,g6=_.p`
  margin: 16px 0 0;
  font-family: ${Se.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${Wi}
`,y6=_.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  ${Wi}

  ${ze.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`,x6=_.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${a=>a.$active?"drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))":"drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${ze.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`,v6=_.button`
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

  background: ${a=>a.$active?"linear-gradient(160deg, rgba(80,19,192,0.55) 0%, rgba(60,42,96,0.7) 100%)":"linear-gradient(160deg, rgba(80,19,192,0.15) 0%, rgba(60,42,96,0.2) 100%)"};

  &:hover {
    background: linear-gradient(160deg, rgba(80,19,192,0.35) 0%, rgba(60,42,96,0.45) 100%);
  }

  ${ze.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${a=>a.$active?"rgba(176,149,227,0.5)":"rgba(176,149,227,0.12)"};
  }
`,b6=_.div`
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
`,S6=_.span`
  font-family: ${Se.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${ze.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`,w6=_.span`
  font-family: ${Se.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${ze.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`,E6=_.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${Se.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${Wi}
  }
`,C6=_.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: -20px;
  @media (max-width: 600px) { display: none; }
`,Fs=_.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${a=>a.$pos==="left"&&qe` left: 18%; transform: rotate(22deg); transform-origin: top center; `}
  ${a=>a.$pos==="center"&&qe` left: 50%; `}
  ${a=>a.$pos==="right"&&qe` right: 18%; transform: rotate(-22deg); transform-origin: top center; `}
`,_6=_.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${Wi}

  ${ze.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`,T6=_.h3`
  margin: 0;
  font-family: ${Se.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${ze.mobile} { font-size: 32px; }
`,z6=_.p`
  margin: 8px 0 0;
  font-family: ${Se.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${ze.mobile} { font-size: 15px; }
`,j6=_.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${ze.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`,dt=_.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${a=>a.$full&&qe` grid-column: 1 / -1; `}
`,pt=_.label`
  font-family: ${Se.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`,kf=qe`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${Se.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`,gt=_.input` ${kf} `,A6=_.textarea`
  ${kf}
  min-height: 90px;
  resize: vertical;
`,R6=_.select`
  ${kf}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${Se.body};
    padding: 8px;
  }
`,yt=_.span`
  font-family: ${Se.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`,M6=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`,O6=_.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${Se.body};
  font-size: 13px;
  color: #eee7f9;
`,D6=_.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`,N6=_.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`,L6=_.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(176, 149, 227, 0.5);
  background: ${a=>a.$checked?"#5013C0":"rgba(211,196,239,0.06)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  svg { opacity: ${a=>a.$checked?1:0}; transition: opacity 0.15s; }
`,U6=_.span`
  font-family: ${Se.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`,Is=_.button`
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
  font-family: ${Se.body};
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
`,B6=_.div`
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
`,H6=_.span`
  font-family: ${Se.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`,$6=_.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${Se.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`,k6=_.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,Y6=_.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`,q6=_.h3`
  margin: 0;
  font-family: ${Se.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`,G6=_.p`
  margin: 0;
  font-family: ${Se.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;function Su(a){switch(a){case"learner":return{fullName:"",phone:"",email:"",college:"",branch:"",year:"",query:"",newsletter:!1};case"instructor":return{fullName:"",phone:"",email:"",topics:[],otherTopic:void 0};case"partner":return{orgType:"",orgName:"",students:"",phone:"",email:""};default:return{}}}function V6({id:a}){const i=st("api"),[c,o]=E.useState("learner"),[s,f]=E.useState(Su("learner")),[p,x]=E.useState({}),[g,y]=E.useState(!1),[b,v]=E.useState(!1);E.useRef(null);const[D,q]=a6(.08),B=E.useRef(null);E.useEffect(()=>{const k={"#contact-learner":"learner","#contact-instructor":"instructor","#contact-partner":"partner"};function W(){const ae=window.location.hash,ve=k[ae];ve&&(o(ve),f(Su(ve)),x({}),y(!1),requestAnimationFrame(()=>{const Ye=B.current;if(Ye){const Ne=document.querySelector("nav")?.offsetHeight||72,L=Ye.getBoundingClientRect().top+window.scrollY-Ne;window.scrollTo({top:L,behavior:"smooth"})}}))}return W(),window.addEventListener("hashchange",W),()=>window.removeEventListener("hashchange",W)},[]);const G=E.useCallback(k=>{o(k),f(Su(k)),x({}),y(!1)},[]),R=E.useCallback((k,W)=>{f(ae=>({...ae,[k]:W})),p[k]&&x(ae=>({...ae,[k]:""}))},[p]),X=E.useCallback(k=>{k&&(f(W=>({...W,topics:W.topics.includes(k)?W.topics:[...W.topics,k]})),p.topics&&x(W=>({...W,topics:""})))},[p]),Z=E.useCallback(()=>{f(k=>{const W=k.otherTopic?.trim();return W?{...k,topics:k.topics.includes(W)?k.topics:[...k.topics,W],otherTopic:void 0}:k}),p.topics&&x(k=>({...k,topics:""}))},[p]),V=E.useCallback(k=>{f(W=>({...W,topics:W.topics.filter(ae=>ae!==k)}))},[]),M=E.useCallback(async k=>{k.preventDefault();const W={};if(c==="learner")["fullName","phone","email"].forEach(ae=>{const ve=bu(ae,s[ae]);ve&&(W[ae]=ve)}),s.college||(W.college="Required"),s.branch||(W.branch="Required"),s.year||(W.year="Required");else if(c==="instructor")["fullName","phone","email"].forEach(ae=>{const ve=bu(ae,s[ae]);ve&&(W[ae]=ve)}),s.topics.length||(W.topics="Add at least one topic");else{s.orgType||(W.orgType="Required");const ae=bu("orgName",s.orgName);ae&&(W.orgName=ae),s.students||(W.students="Required"),["phone","email"].forEach(ve=>{const Ye=bu(ve,s[ve]);Ye&&(W[ve]=Ye)})}if(Object.keys(W).length){x(W);return}v(!0),x(ae=>({...ae,_form:""}));try{c==="learner"?await G5(i,s):c==="instructor"?await V5(i,s):await X5(i,s),y(!0)}catch(ae){x({_form:ae.message||"Something went wrong. Please try again."})}finally{v(!1)}},[c,s,i]),Q=E.useCallback(()=>{M({preventDefault:()=>{}})},[M]),J=()=>h.jsxs(h.Fragment,{children:[h.jsxs(dt,{children:[h.jsx(pt,{children:"Full Name"}),h.jsx(gt,{placeholder:"Enter full name",value:s.fullName,onChange:k=>R("fullName",k.target.value)}),p.fullName&&h.jsx(yt,{children:p.fullName})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Phone Number"}),h.jsx(gt,{placeholder:"Enter phone number",value:s.phone,onChange:k=>R("phone",k.target.value)}),p.phone&&h.jsx(yt,{children:p.phone})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Email"}),h.jsx(gt,{type:"email",placeholder:"Enter email address",value:s.email,onChange:k=>R("email",k.target.value)}),p.email&&h.jsx(yt,{children:p.email})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"College Name"}),h.jsx(gt,{placeholder:"Enter college name",value:s.college,onChange:k=>R("college",k.target.value)}),p.college&&h.jsx(yt,{children:p.college})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Branch"}),h.jsx(gt,{placeholder:"Enter branch",value:s.branch,onChange:k=>R("branch",k.target.value)}),p.branch&&h.jsx(yt,{children:p.branch})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Year of Passing"}),h.jsx(gt,{placeholder:"Enter year of passing",value:s.year,onChange:k=>R("year",k.target.value)}),p.year&&h.jsx(yt,{children:p.year})]}),h.jsxs(dt,{$full:!0,children:[h.jsxs(pt,{children:["Query ",h.jsx("span",{style:{color:"rgba(238,231,249,0.35)",fontWeight:400},children:"(optional)"})]}),h.jsx(A6,{placeholder:"Any questions or queries that you have?",value:s.query,onChange:k=>R("query",k.target.value)})]})]}),N=st("courses")||[],K=()=>h.jsxs(h.Fragment,{children:[h.jsxs(dt,{children:[h.jsx(pt,{children:"Full Name"}),h.jsx(gt,{placeholder:"Enter full name",value:s.fullName,onChange:k=>R("fullName",k.target.value)}),p.fullName&&h.jsx(yt,{children:p.fullName})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Phone Number"}),h.jsx(gt,{placeholder:"Enter phone number",value:s.phone,onChange:k=>R("phone",k.target.value)}),p.phone&&h.jsx(yt,{children:p.phone})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Email"}),h.jsx(gt,{type:"email",placeholder:"Enter email address",value:s.email,onChange:k=>R("email",k.target.value)}),p.email&&h.jsx(yt,{children:p.email})]}),h.jsxs(dt,{$full:!0,children:[h.jsx(pt,{children:"Topics you can teach"}),s.topics.length>0&&h.jsx(M6,{children:s.topics.map(k=>h.jsxs(O6,{children:[k,h.jsx(D6,{onClick:()=>V(k),"aria-label":`Remove ${k}`,children:h.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:h.jsx("path",{d:"M9 3L3 9M3 3l6 6",stroke:"#EEE7F9",strokeWidth:"1.5",strokeLinecap:"round"})})})]},k))}),h.jsxs(R6,{value:"",onChange:k=>{const W=k.target.value;W&&(W==="__other__"?f(ae=>({...ae,otherTopic:""})):X(W),k.target.value="")},children:[h.jsx("option",{value:"",children:"Select a topic"}),N.filter(k=>!s.topics.includes(k)).map(k=>h.jsx("option",{value:k,children:k},k)),h.jsx("option",{value:"__other__",children:"Other"})]}),typeof s.otherTopic=="string"&&h.jsxs("div",{style:{display:"flex",gap:10,marginTop:4},children:[h.jsx(gt,{placeholder:"Enter your topic",value:s.otherTopic,onChange:k=>R("otherTopic",k.target.value),onKeyDown:k=>{k.key==="Enter"&&(k.preventDefault(),Z())},style:{flex:1}}),h.jsx(Is,{type:"button",onClick:Z,style:{marginTop:0,width:"auto",padding:"0 24px",height:43,fontSize:14},children:"Add"})]}),p.topics&&h.jsx(yt,{children:p.topics})]})]}),de=()=>h.jsxs(h.Fragment,{children:[h.jsxs(dt,{children:[h.jsx(pt,{children:"Organisation Type"}),h.jsx(gt,{placeholder:"Enter organisation type",value:s.orgType,onChange:k=>R("orgType",k.target.value)}),p.orgType&&h.jsx(yt,{children:p.orgType})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Organisation Name"}),h.jsx(gt,{placeholder:"Enter organisation name",value:s.orgName,onChange:k=>R("orgName",k.target.value)}),p.orgName&&h.jsx(yt,{children:p.orgName})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Number of Students"}),h.jsx(gt,{placeholder:"Enter number of students",value:s.students,onChange:k=>R("students",k.target.value)}),p.students&&h.jsx(yt,{children:p.students})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Phone Number"}),h.jsx(gt,{placeholder:"Enter phone number",value:s.phone,onChange:k=>R("phone",k.target.value)}),p.phone&&h.jsx(yt,{children:p.phone})]}),h.jsxs(dt,{children:[h.jsx(pt,{children:"Email"}),h.jsx(gt,{type:"email",placeholder:"Enter email address",value:s.email,onChange:k=>R("email",k.target.value)}),p.email&&h.jsx(yt,{children:p.email})]})]});return h.jsxs(s6,{id:a,ref:k=>{D.current=k,B.current=k},"aria-label":"Contact Us",children:[h.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:h.jsx("defs",{children:h.jsx("clipPath",{id:"shield-clip",clipPathUnits:"objectBoundingBox",children:h.jsx("path",{d:"M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z"})})})}),h.jsx(f6,{}),h.jsx(d6,{}),h.jsx(p6,{}),h.jsxs(h6,{children:[h.jsx(m6,{$show:q,$d:"0s",children:"We are here to help you"}),h.jsx(g6,{$show:q,$d:"0.1s",children:"Whether you’re a student with a question, an educator with a suggestion, or a partner looking to collaborate — we’re always eager to hear from you."}),h.jsx(y6,{$show:q,$d:"0.2s",children:Xm.map(k=>{const W=c6[k.key];return h.jsx(x6,{$active:c===k.key,onClick:()=>G(k.key),children:h.jsxs(v6,{$active:c===k.key,type:"button","aria-pressed":c===k.key,children:[h.jsx(b6,{children:h.jsx(W,{})}),h.jsx(S6,{children:k.title}),h.jsx(w6,{children:k.desc})]})},k.key)})}),h.jsx(E6,{$show:q,$d:"0.25s",children:Xm.find(k=>k.key===c)?.desc},c),h.jsxs(C6,{children:[h.jsx(Fs,{$pos:"left"}),h.jsx(Fs,{$pos:"center"}),h.jsx(Fs,{$pos:"right"})]}),h.jsx(_6,{$show:q,$d:"0.35s",children:g?h.jsxs(k6,{children:[h.jsx(Y6,{children:h.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",fill:"#B095E3"})})}),h.jsx(q6,{children:"Thank you!"}),h.jsx(G6,{children:"We’ve received your details and will contact you soon."}),h.jsx(Is,{type:"button",onClick:()=>{y(!1),f(Su(c))},children:"Submit another"})]}):h.jsxs("form",{onSubmit:M,noValidate:!0,children:[h.jsx(T6,{children:"Drop your Details"}),h.jsx(z6,{children:"We will contact you real soon!"}),h.jsxs(j6,{children:[c==="learner"&&J(),c==="instructor"&&K(),c==="partner"&&de()]}),c==="learner"&&h.jsxs(N6,{children:[h.jsx(L6,{$checked:s.newsletter,onClick:()=>R("newsletter",!s.newsletter),role:"checkbox","aria-checked":s.newsletter,tabIndex:0,onKeyDown:k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),R("newsletter",!s.newsletter))},children:h.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:h.jsx("path",{d:"M2 6l3 3 5-5",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),h.jsx(U6,{children:"Stay in the Loop! Subscribe to our newsletter and be the first to know about exciting features and exclusive collaborations."})]}),p._form&&h.jsxs(B6,{children:[h.jsx(H6,{children:p._form}),h.jsx($6,{type:"button",onClick:Q,disabled:b,children:b?"Retrying…":"Retry"})]}),h.jsx(Is,{type:"submit",disabled:b,children:b?"Submitting…":"Submit"})]})})]})]})}const X6=({width:a=24,height:i=24,color:c="currentColor",...o})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:c,...o,children:h.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),Q6=({width:a=24,height:i=24,color:c="currentColor",...o})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:c,...o,children:h.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Z6=({width:a=30,height:i=30,color:c="currentColor"})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 24 24",fill:c,children:h.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),K6=({width:a=30,height:i=30,color:c="currentColor"})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 24 24",fill:c,children:h.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})}),J6=({width:a=30,height:i=30,color:c="currentColor"})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 24 24",fill:c,children:h.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})}),W6=({width:a=15,height:i=20,color:c="#B095E3",...o})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 15 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:h.jsx("path",{d:"M7.5 0C3.35813 0 0 3.35813 0 7.5C0 9.13094 0.534688 10.6275 1.42344 11.8531C1.43938 11.8825 1.44187 11.9153 1.46 11.9434L6.46 19.4434C6.69188 19.7913 7.0825 20 7.5 20C7.9175 20 8.30812 19.7913 8.54 19.4434L13.54 11.9434C13.5584 11.9153 13.5606 11.8825 13.5766 11.8531C14.4653 10.6275 15 9.13094 15 7.5C15 3.35813 11.6419 0 7.5 0ZM7.5 10C6.11937 10 5 8.88062 5 7.5C5 6.11937 6.11937 5 7.5 5C8.88062 5 10 6.11937 10 7.5C10 8.88062 8.88062 10 7.5 10Z",fill:c})}),F6=({width:a=20,height:i=20,color:c="#B095E3",...o})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:h.jsx("path",{d:"M16.6607 12.8167C15.6366 12.8167 14.6458 12.65 13.7216 12.35C13.5768 12.3009 13.4212 12.2936 13.2724 12.329C13.1237 12.3643 12.9879 12.4409 12.8807 12.55L11.5735 14.1917C9.2172 13.0667 7.01079 10.9417 5.83681 8.5L7.4604 7.11667C7.6852 6.88333 7.75181 6.55833 7.66022 6.26667C7.35216 5.34167 7.19396 4.35 7.19396 3.325C7.19396 2.875 6.81929 2.5 6.36968 2.5H3.48885C3.03924 2.5 2.49805 2.7 2.49805 3.325C2.49805 11.0667 8.93412 17.5 16.6607 17.5C17.2519 17.5 17.485 16.975 17.485 16.5167V13.6417C17.485 13.1917 17.1103 12.8167 16.6607 12.8167Z",fill:c})}),I6=({width:a=20,height:i=20,color:c="#B095E3",...o})=>h.jsx("svg",{width:a,height:i,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:h.jsx("path",{d:"M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z",fill:c})}),ug=Re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function P6(a=.1){const i=E.useRef(null),[c,o]=E.useState(!1);return E.useEffect(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const s=i.current;if(!s)return;const f=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),f.disconnect())},{threshold:a});return f.observe(s),()=>f.disconnect()},[a]),[i,c]}const eS={FacebookIcon:X6,TwitterIcon:Q6,YoutubeIcon:Z6,InstagramIcon:K6,DiscordIcon:J6},tS=_.footer`
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

  ${ze.mobile} {
    height: auto;
    min-height: 460px;
  }
`,nS=_.div`
  width: 100%;
  max-width: ${Ji};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;

  ${ze.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`,aS=_.div`
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

  ${a=>a.$inView&&qe`
      animation: ${ug} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ze.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${ze.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,lS=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${ze.mobile} {
    align-items: center;
  }
`,iS=_.h2`
  margin: 0;
  font-family: ${Se.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${ze.mobile} {
    font-size: 32px;
    text-align: center;
  }
`,rS=_.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ps=_.div`
  margin: 0;
  font-family: ${Se.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${ze.mobile} {
    justify-content: center;
  }
`,ef=_.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,uS=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,oS=_.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${ze.mobile} {
    width: 180px;
    height: auto;
  }
`,cS=_.p`
  margin: 0;
  font-family: ${Se.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${ze.mobile} {
    font-size: 14px;
  }
`,sS=_.div`
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

  ${a=>a.$inView&&qe`
      animation: ${ug} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ze.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${ze.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`,fS=_.p`
  margin: 0;
  font-family: ${Se.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${ze.mobile} {
    font-size: 12px;
    text-align: center;
  }
`,dS=_.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,pS=_.a`
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
`,hS=_.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;

  ${ze.mobile} {
    gap: 16px;
  }
`,tf=_.a`
  font-family: ${Se.body};
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
`,mS=new Date().getFullYear(),gS=({id:a})=>{const{contactTitle:i,location:c,phone:o,email:s,tagline:f,companyName:p,logoAlt:x,socialLinks:g}=st("footer"),[y,b]=P6(.1);return h.jsx(tS,{id:a,ref:y,children:h.jsxs(nS,{children:[h.jsxs(aS,{$inView:b,children:[h.jsxs(lS,{children:[h.jsx(iS,{children:i}),h.jsxs(rS,{children:[h.jsxs(Ps,{children:[h.jsx(ef,{children:h.jsx(W6,{width:15,height:20,color:"#B095E3"})}),c]}),h.jsxs(Ps,{children:[h.jsx(ef,{children:h.jsx(F6,{width:18,height:18,color:"#B095E3"})}),o]}),h.jsxs(Ps,{children:[h.jsx(ef,{children:h.jsx(I6,{width:18,height:18,color:"#B095E3"})}),s]})]}),h.jsxs(hS,{children:[h.jsx(tf,{href:"#contact-learner",children:"Learner Form →"}),h.jsx(tf,{href:"#contact-instructor",children:"Instructor Form →"}),h.jsx(tf,{href:"#contact-partner",children:"Partner Form →"})]})]}),h.jsxs(uS,{children:[h.jsx(oS,{src:tg,alt:x}),h.jsx(cS,{children:f})]})]}),h.jsxs(sS,{$inView:b,children:[h.jsxs(fS,{children:["© ",mS," ",p,". All Rights Reserved."]}),h.jsx(dS,{children:g.map(v=>{const D=eS[v.icon];return h.jsx(pS,{href:v.url,target:"_blank",rel:"noopener noreferrer","aria-label":v.name,children:h.jsx(D,{})},v.name)})})]})]})})},yS="/assets/phone-screen-Jgi4cEKU.png",xS=Re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function vS(a=.15){const i=E.useRef(null),[c,o]=E.useState(!1);return E.useEffect(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const s=i.current;if(!s)return;const f=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),f.disconnect())},{threshold:a});return f.observe(s),()=>f.disconnect()},[a]),[i,c]}const bS=_.div`
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

  ${a=>a.$inView&&qe`
      animation: ${xS} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ze.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${ze.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
  }
`,SS=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${ze.mobile} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`,wS=_.h2`
  margin: 0;
  font-family: ${Se.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${ze.mobile} {
    font-size: 36px;
  }
`,ES=_.p`
  margin: 0;
  font-family: ${Se.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${ze.mobile} {
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
  }
`,CS=_.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${ze.mobile} {
    display: none;
  }
`,_S=_.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`,TS=_.img`
  width: 100%;
  height: 100%;
  display: block;
`,zS=({onSubmit:a,id:i})=>{const{title:c,subtitle:o,inputPlaceholder:s,buttonText:f}=st("joinWaitlist"),p=st("api"),[x,g]=vS(.15),y=a||(b=>ag(p,b));return h.jsxs(bS,{id:i,ref:x,$inView:g,children:[h.jsxs(SS,{children:[h.jsx(wS,{children:c}),h.jsx(ES,{children:o}),h.jsx(ng,{placeholder:s,buttonText:f,onSubmit:y})]}),h.jsx(CS,{children:h.jsx(_S,{children:h.jsx(TS,{src:yS,alt:"Phone Screen"})})})]})},jS="/assets/phone-screen-2-DrcEaGKY.png",AS=_.div`
  background: #ffffff1a;
  border-radius: 24px;
`,Nl=_.h3`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
`;_.p`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  color: #ffffff;
`;const RS="/assets/roadmap-Cly0yicb.png",MS=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,OS=_.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`,DS=()=>{const{roadmap:a}=st("blocks");return h.jsxs(MS,{children:[h.jsx(Nl,{children:a.title}),h.jsx(OS,{src:RS,alt:"roadmap"})]})},NS="/assets/mentor-B_SVnfNn.png",LS=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,US=_.img`
  position: absolute;
  bottom: 0;
  width: 52%;
`,BS=()=>{const{mentorship:a}=st("blocks");return h.jsxs(LS,{children:[h.jsx(Nl,{children:a.title}),h.jsx(US,{src:NS,alt:"mentorship"})]})},HS="/assets/community-Bm68CTui.png",$S=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`,kS=_.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`,YS=()=>{const{community:a}=st("blocks");return h.jsxs($S,{children:[h.jsx(Nl,{children:a.title}),h.jsx(kS,{src:HS,alt:"community"})]})},qS="/assets/focus-timer-Dhb9AdeC.png",GS=_.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`,VS=_.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`,XS=_.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`,QS=_(Nl)`
  text-align: right;
  width: 50%;
`,ZS=()=>{const{focusTimer:a}=st("blocks");return h.jsxs(GS,{children:[h.jsx(XS,{children:h.jsx(QS,{children:a.title})}),h.jsx(VS,{src:qS,alt:"focus timer"})]})},KS="/assets/streak-BhHFlVnO.png",JS=_.div`
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
`;_.img`
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
`;const WS=_(Nl)`
  text-align: left;
`,FS=_.img`
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
`,IS=()=>{const{streaks:a}=st("blocks");return h.jsxs(JS,{children:[h.jsx(WS,{children:a.title}),h.jsx(FS,{src:KS,alt:"streak"})]})},PS="/assets/interview-prep-BdEyhCch.png",ew=_.div`
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
`,tw=_.img`
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
`,nw=()=>{const{interviewPrep:a}=st("blocks");return h.jsxs(ew,{children:[h.jsx(Nl,{children:a.title}),h.jsx(tw,{src:PS,alt:"screen left"})]})},aw=_.div`
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
`,Ll=_(AS)`
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
`,lw=_(Ll)`
  grid-column: span 6;
  height: 200px;
`,iw=_(Ll)`
  grid-column: span 3;
`,rw=_(Ll)`
  grid-column: span 3;
`,uw=_(Ll)`
  grid-column: span 4;
  min-height: 180px;
`,ow=_(Ll)`
  grid-column: span 4;
  min-height: 60px;
`,cw=_(Ll)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`,sw=()=>{const[a,i]=E.useState(null),c=E.useCallback(o=>{typeof window<"u"&&window.innerWidth>1e3||i(s=>s===o?null:o)},[]);return h.jsxs(aw,{children:[h.jsx(lw,{"data-tapped":a==="roadmap",onClick:()=>c("roadmap"),children:h.jsx(DS,{})}),h.jsx(iw,{"data-tapped":a==="mentorship",onClick:()=>c("mentorship"),children:h.jsx(BS,{})}),h.jsx(rw,{"data-tapped":a==="community",onClick:()=>c("community"),children:h.jsx(YS,{})}),h.jsx(uw,{"data-tapped":a==="focusTimer",onClick:()=>c("focusTimer"),children:h.jsx(ZS,{})}),h.jsx(cw,{"data-tapped":a==="interviewPrep",onClick:()=>c("interviewPrep"),children:h.jsx(nw,{})}),h.jsx(ow,{"data-tapped":a==="streaks",onClick:()=>c("streaks"),children:h.jsx(IS,{})})]})},og=Re`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;function fw(a=.1){const i=E.useRef(null),[c,o]=E.useState(!1);return E.useEffect(()=>{if(typeof IntersectionObserver>"u"){o(!0);return}const s=i.current;if(!s)return;const f=new IntersectionObserver(([p])=>{p.isIntersecting&&(o(!0),f.disconnect())},{threshold:a});return f.observe(s),()=>f.disconnect()},[a]),[i,c]}const dw=_.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${ze.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`,pw=_.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${a=>a.$inView&&qe`
      animation: ${og} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${ze.mobile} {
    display: none;
  }
`,hw=_.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`,mw=_.div`
  min-width: 0;
  opacity: 0;

  ${a=>a.$inView&&qe`
      animation: ${og} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`,gw=()=>{const[a,i]=fw(.1);return h.jsxs(dw,{ref:a,children:[h.jsx(pw,{$inView:i,children:h.jsx(hw,{src:jS,alt:"Phone Screen"})}),h.jsx(mw,{$inView:i,children:h.jsx(sw,{})})]})},yw=_.div`
  background: #090215;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`,xw=_.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,vw=()=>h.jsxs(yw,{children:[h.jsx(r5,{}),h.jsxs(xw,{children:[h.jsx(a4,{id:"home"}),h.jsx(K4,{}),h.jsx(t6,{id:"products"}),h.jsx(gw,{}),h.jsx(V6,{id:"contact-us"}),h.jsx(zS,{}),h.jsx(gS,{})]})]});function bw(){return h.jsx(u2,{children:h.jsx(u1,{path:"/",element:h.jsx(vw,{})})})}const Sw=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;const ww=gb({reducer:{app:Ab,content:Yb},preloadedState:Sw});qx.hydrateRoot(document.getElementById("root"),h.jsx(E.StrictMode,{children:h.jsx(iv,{store:ww,children:h.jsx(M2,{children:h.jsx(bw,{})})})}));
