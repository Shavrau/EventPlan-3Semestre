function dI(t,e){for(var c=0;c<e.length;c++){const n=e[c];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(n,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=c(a);fetch(a.href,r)}})();function t9(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kv={exports:{}},c9={},Qv={exports:{}},p1={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D7=Symbol.for("react.element"),mI=Symbol.for("react.portal"),pI=Symbol.for("react.fragment"),vI=Symbol.for("react.strict_mode"),gI=Symbol.for("react.profiler"),zI=Symbol.for("react.provider"),CI=Symbol.for("react.context"),HI=Symbol.for("react.forward_ref"),MI=Symbol.for("react.suspense"),VI=Symbol.for("react.memo"),yI=Symbol.for("react.lazy"),Uh=Symbol.iterator;function _I(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var Yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xv=Object.assign,Zv={};function z8(t,e,c){this.props=t,this.context=e,this.refs=Zv,this.updater=c||Yv}z8.prototype.isReactComponent={};z8.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};z8.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jv(){}Jv.prototype=z8.prototype;function ro(t,e,c){this.props=t,this.context=e,this.refs=Zv,this.updater=c||Yv}var io=ro.prototype=new Jv;io.constructor=ro;Xv(io,z8.prototype);io.isPureReactComponent=!0;var jh=Array.isArray,eg=Object.prototype.hasOwnProperty,so={current:null},tg={key:!0,ref:!0,__self:!0,__source:!0};function cg(t,e,c){var n,a={},r=null,i=null;if(e!=null)for(n in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(r=""+e.key),e)eg.call(e,n)&&!tg.hasOwnProperty(n)&&(a[n]=e[n]);var s=arguments.length-2;if(s===1)a.children=c;else if(1<s){for(var o=Array(s),f=0;f<s;f++)o[f]=arguments[f+2];a.children=o}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:D7,type:t,key:r,ref:i,props:a,_owner:so.current}}function LI(t,e){return{$$typeof:D7,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oo(t){return typeof t=="object"&&t!==null&&t.$$typeof===D7}function wI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(c){return e[c]})}var $h=/\/+/g;function Ga(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wI(""+t.key):e.toString(36)}function mc(t,e,c,n,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case D7:case mI:i=!0}}if(i)return i=t,a=a(i),t=n===""?"."+Ga(i,0):n,jh(a)?(c="",t!=null&&(c=t.replace($h,"$&/")+"/"),mc(a,e,c,"",function(f){return f})):a!=null&&(oo(a)&&(a=LI(a,c+(!a.key||i&&i.key===a.key?"":(""+a.key).replace($h,"$&/")+"/")+t)),e.push(a)),1;if(i=0,n=n===""?".":n+":",jh(t))for(var s=0;s<t.length;s++){r=t[s];var o=n+Ga(r,s);i+=mc(r,e,c,o,a)}else if(o=_I(t),typeof o=="function")for(t=o.call(t),s=0;!(r=t.next()).done;)r=r.value,o=n+Ga(r,s++),i+=mc(r,e,c,o,a);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function Et(t,e,c){if(t==null)return t;var n=[],a=0;return mc(t,n,"","",function(r){return e.call(c,r,a++)}),n}function xI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(c){(t._status===0||t._status===-1)&&(t._status=1,t._result=c)},function(c){(t._status===0||t._status===-1)&&(t._status=2,t._result=c)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Z2={current:null},pc={transition:null},SI={ReactCurrentDispatcher:Z2,ReactCurrentBatchConfig:pc,ReactCurrentOwner:so};function ng(){throw Error("act(...) is not supported in production builds of React.")}p1.Children={map:Et,forEach:function(t,e,c){Et(t,function(){e.apply(this,arguments)},c)},count:function(t){var e=0;return Et(t,function(){e++}),e},toArray:function(t){return Et(t,function(e){return e})||[]},only:function(t){if(!oo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};p1.Component=z8;p1.Fragment=pI;p1.Profiler=gI;p1.PureComponent=ro;p1.StrictMode=vI;p1.Suspense=MI;p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SI;p1.act=ng;p1.cloneElement=function(t,e,c){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Xv({},t.props),a=t.key,r=t.ref,i=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,i=so.current),e.key!==void 0&&(a=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(o in e)eg.call(e,o)&&!tg.hasOwnProperty(o)&&(n[o]=e[o]===void 0&&s!==void 0?s[o]:e[o])}var o=arguments.length-2;if(o===1)n.children=c;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];n.children=s}return{$$typeof:D7,type:t.type,key:a,ref:r,props:n,_owner:i}};p1.createContext=function(t){return t={$$typeof:CI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zI,_context:t},t.Consumer=t};p1.createElement=cg;p1.createFactory=function(t){var e=cg.bind(null,t);return e.type=t,e};p1.createRef=function(){return{current:null}};p1.forwardRef=function(t){return{$$typeof:HI,render:t}};p1.isValidElement=oo;p1.lazy=function(t){return{$$typeof:yI,_payload:{_status:-1,_result:t},_init:xI}};p1.memo=function(t,e){return{$$typeof:VI,type:t,compare:e===void 0?null:e}};p1.startTransition=function(t){var e=pc.transition;pc.transition={};try{t()}finally{pc.transition=e}};p1.unstable_act=ng;p1.useCallback=function(t,e){return Z2.current.useCallback(t,e)};p1.useContext=function(t){return Z2.current.useContext(t)};p1.useDebugValue=function(){};p1.useDeferredValue=function(t){return Z2.current.useDeferredValue(t)};p1.useEffect=function(t,e){return Z2.current.useEffect(t,e)};p1.useId=function(){return Z2.current.useId()};p1.useImperativeHandle=function(t,e,c){return Z2.current.useImperativeHandle(t,e,c)};p1.useInsertionEffect=function(t,e){return Z2.current.useInsertionEffect(t,e)};p1.useLayoutEffect=function(t,e){return Z2.current.useLayoutEffect(t,e)};p1.useMemo=function(t,e){return Z2.current.useMemo(t,e)};p1.useReducer=function(t,e,c){return Z2.current.useReducer(t,e,c)};p1.useRef=function(t){return Z2.current.useRef(t)};p1.useState=function(t){return Z2.current.useState(t)};p1.useSyncExternalStore=function(t,e,c){return Z2.current.useSyncExternalStore(t,e,c)};p1.useTransition=function(){return Z2.current.useTransition()};p1.version="18.3.1";Qv.exports=p1;var _=Qv.exports;const l1=t9(_),NI=dI({__proto__:null,default:l1},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bI=_,EI=Symbol.for("react.element"),TI=Symbol.for("react.fragment"),kI=Object.prototype.hasOwnProperty,AI=bI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,II={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,c){var n,a={},r=null,i=null;c!==void 0&&(r=""+c),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(i=e.ref);for(n in e)kI.call(e,n)&&!II.hasOwnProperty(n)&&(a[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)a[n]===void 0&&(a[n]=e[n]);return{$$typeof:EI,type:t,key:r,ref:i,props:a,_owner:AI.current}}c9.Fragment=TI;c9.jsx=ag;c9.jsxs=ag;Kv.exports=c9;var g=Kv.exports,ei={},rg={exports:{}},V3={},ig={exports:{}},sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,W){var Q=D.length;D.push(W);e:for(;0<Q;){var i1=Q-1>>>1,n1=D[i1];if(0<a(n1,W))D[i1]=W,D[Q]=n1,Q=i1;else break e}}function c(D){return D.length===0?null:D[0]}function n(D){if(D.length===0)return null;var W=D[0],Q=D.pop();if(Q!==W){D[0]=Q;e:for(var i1=0,n1=D.length,t1=n1>>>1;i1<t1;){var H1=2*(i1+1)-1,f1=D[H1],s1=H1+1,o2=D[s1];if(0>a(f1,Q))s1<n1&&0>a(o2,f1)?(D[i1]=o2,D[s1]=Q,i1=s1):(D[i1]=f1,D[H1]=Q,i1=H1);else if(s1<n1&&0>a(o2,Q))D[i1]=o2,D[s1]=Q,i1=s1;else break e}}return W}function a(D,W){var Q=D.sortIndex-W.sortIndex;return Q!==0?Q:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var o=[],f=[],u=1,h=null,m=3,v=!1,H=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(D){for(var W=c(f);W!==null;){if(W.callback===null)n(f);else if(W.startTime<=D)n(f),W.sortIndex=W.expirationTime,e(o,W);else break;W=c(f)}}function E(D){if(w=!1,V(D),!H)if(c(o)!==null)H=!0,J1(R);else{var W=c(f);W!==null&&d1(E,W.startTime-D)}}function R(D,W){H=!1,w&&(w=!1,M(z),z=-1),v=!0;var Q=m;try{for(V(W),h=c(o);h!==null&&(!(h.expirationTime>W)||D&&!T());){var i1=h.callback;if(typeof i1=="function"){h.callback=null,m=h.priorityLevel;var n1=i1(h.expirationTime<=W);W=t.unstable_now(),typeof n1=="function"?h.callback=n1:h===c(o)&&n(o),V(W)}else n(o);h=c(o)}if(h!==null)var t1=!0;else{var H1=c(f);H1!==null&&d1(E,H1.startTime-W),t1=!1}return t1}finally{h=null,m=Q,v=!1}}var I=!1,L=null,z=-1,x=5,N=-1;function T(){return!(t.unstable_now()-N<x)}function k(){if(L!==null){var D=t.unstable_now();N=D;var W=!0;try{W=L(!0,D)}finally{W?b():(I=!1,L=null)}}else I=!1}var b;if(typeof C=="function")b=function(){C(k)};else if(typeof MessageChannel<"u"){var b1=new MessageChannel,$1=b1.port2;b1.port1.onmessage=k,b=function(){$1.postMessage(null)}}else b=function(){S(k,0)};function J1(D){L=D,I||(I=!0,b())}function d1(D,W){z=S(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){H||v||(H=!0,J1(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return c(o)},t.unstable_next=function(D){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var Q=m;m=W;try{return D()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=m;m=D;try{return W()}finally{m=Q}},t.unstable_scheduleCallback=function(D,W,Q){var i1=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?i1+Q:i1):Q=i1,D){case 1:var n1=-1;break;case 2:n1=250;break;case 5:n1=1073741823;break;case 4:n1=1e4;break;default:n1=5e3}return n1=Q+n1,D={id:u++,callback:W,priorityLevel:D,startTime:Q,expirationTime:n1,sortIndex:-1},Q>i1?(D.sortIndex=Q,e(f,D),c(o)===null&&D===c(f)&&(w?(M(z),z=-1):w=!0,d1(E,Q-i1))):(D.sortIndex=n1,e(o,D),H||v||(H=!0,J1(R))),D},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(D){var W=m;return function(){var Q=m;m=W;try{return D.apply(this,arguments)}finally{m=Q}}}})(sg);ig.exports=sg;var RI=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PI=_,M3=RI;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,c=1;c<arguments.length;c++)e+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og=new Set,K5={};function K0(t,e){Ye(t,e),Ye(t+"Capture",e)}function Ye(t,e){for(K5[t]=e,t=0;t<e.length;t++)og.add(e[t])}var F4=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,DI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qh={},Wh={};function OI(t){return ti.call(Wh,t)?!0:ti.call(qh,t)?!1:DI.test(t)?Wh[t]=!0:(qh[t]=!0,!1)}function FI(t,e,c,n){if(c!==null&&c.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:c!==null?!c.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BI(t,e,c,n){if(e===null||typeof e>"u"||FI(t,e,c,n))return!0;if(n)return!1;if(c!==null)switch(c.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function J2(t,e,c,n,a,r,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=c,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=i}var k2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){k2[t]=new J2(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];k2[e]=new J2(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){k2[t]=new J2(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){k2[t]=new J2(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){k2[t]=new J2(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){k2[t]=new J2(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){k2[t]=new J2(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){k2[t]=new J2(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){k2[t]=new J2(t,5,!1,t.toLowerCase(),null,!1,!1)});var lo=/[\-:]([a-z])/g;function fo(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lo,fo);k2[e]=new J2(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lo,fo);k2[e]=new J2(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lo,fo);k2[e]=new J2(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){k2[t]=new J2(t,1,!1,t.toLowerCase(),null,!1,!1)});k2.xlinkHref=new J2("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){k2[t]=new J2(t,1,!1,t.toLowerCase(),null,!0,!0)});function uo(t,e,c,n){var a=k2.hasOwnProperty(e)?k2[e]:null;(a!==null?a.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BI(e,c,a,n)&&(c=null),n||a===null?OI(e)&&(c===null?t.removeAttribute(e):t.setAttribute(e,""+c)):a.mustUseProperty?t[a.propertyName]=c===null?a.type===3?!1:"":c:(e=a.attributeName,n=a.attributeNamespace,c===null?t.removeAttribute(e):(a=a.type,c=a===3||a===4&&c===!0?"":""+c,n?t.setAttributeNS(n,e,c):t.setAttribute(e,c))))}var Z4=PI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tt=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),ho=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),mo=Symbol.for("react.forward_ref"),ni=Symbol.for("react.suspense"),ai=Symbol.for("react.suspense_list"),po=Symbol.for("react.memo"),g6=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),Gh=Symbol.iterator;function X8(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var K1=Object.assign,Ka;function h5(t){if(Ka===void 0)try{throw Error()}catch(c){var e=c.stack.trim().match(/\n( *(at )?)/);Ka=e&&e[1]||""}return`
`+Ka+t}var Qa=!1;function Ya(t,e){if(!t||Qa)return"";Qa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var n=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){n=f}t.call(e.prototype)}else{try{throw Error()}catch(f){n=f}t()}}catch(f){if(f&&n&&typeof f.stack=="string"){for(var a=f.stack.split(`
`),r=n.stack.split(`
`),i=a.length-1,s=r.length-1;1<=i&&0<=s&&a[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==r[s]){var o=`
`+a[i].replace(" at new "," at ");return t.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",t.displayName)),o}while(1<=i&&0<=s);break}}}finally{Qa=!1,Error.prepareStackTrace=c}return(t=t?t.displayName||t.name:"")?h5(t):""}function UI(t){switch(t.tag){case 5:return h5(t.type);case 16:return h5("Lazy");case 13:return h5("Suspense");case 19:return h5("SuspenseList");case 0:case 2:case 15:return t=Ya(t.type,!1),t;case 11:return t=Ya(t.type.render,!1),t;case 1:return t=Ya(t.type,!0),t;default:return""}}function ri(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case He:return"Fragment";case Ce:return"Portal";case ci:return"Profiler";case ho:return"StrictMode";case ni:return"Suspense";case ai:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fg:return(t.displayName||"Context")+".Consumer";case lg:return(t._context.displayName||"Context")+".Provider";case mo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case po:return e=t.displayName||null,e!==null?e:ri(t.type)||"Memo";case g6:e=t._payload,t=t._init;try{return ri(t(e))}catch{}}return null}function jI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(e);case 8:return e===ho?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function j6(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $I(t){var e=hg(t)?"checked":"value",c=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var a=c.get,r=c.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,r.call(this,i)}}),Object.defineProperty(t,e,{enumerable:c.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kt(t){t._valueTracker||(t._valueTracker=$I(t))}function dg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var c=e.getValue(),n="";return t&&(n=hg(t)?t.checked?"true":"false":t.value),t=n,t!==c?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ii(t,e){var c=e.checked;return K1({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??t._wrapperState.initialChecked})}function Kh(t,e){var c=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;c=j6(e.value!=null?e.value:c),t._wrapperState={initialChecked:n,initialValue:c,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mg(t,e){e=e.checked,e!=null&&uo(t,"checked",e,!1)}function si(t,e){mg(t,e);var c=j6(e.value),n=e.type;if(c!=null)n==="number"?(c===0&&t.value===""||t.value!=c)&&(t.value=""+c):t.value!==""+c&&(t.value=""+c);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oi(t,e.type,c):e.hasOwnProperty("defaultValue")&&oi(t,e.type,j6(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qh(t,e,c){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,c||e===t.value||(t.value=e),t.defaultValue=e}c=t.name,c!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,c!==""&&(t.name=c)}function oi(t,e,c){(e!=="number"||Oc(t.ownerDocument)!==t)&&(c==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+c&&(t.defaultValue=""+c))}var d5=Array.isArray;function Re(t,e,c,n){if(t=t.options,e){e={};for(var a=0;a<c.length;a++)e["$"+c[a]]=!0;for(c=0;c<t.length;c++)a=e.hasOwnProperty("$"+t[c].value),t[c].selected!==a&&(t[c].selected=a),a&&n&&(t[c].defaultSelected=!0)}else{for(c=""+j6(c),e=null,a=0;a<t.length;a++){if(t[a].value===c){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function li(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return K1({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yh(t,e){var c=e.value;if(c==null){if(c=e.children,e=e.defaultValue,c!=null){if(e!=null)throw Error(B(92));if(d5(c)){if(1<c.length)throw Error(B(93));c=c[0]}e=c}e==null&&(e=""),c=e}t._wrapperState={initialValue:j6(c)}}function pg(t,e){var c=j6(e.value),n=j6(e.defaultValue);c!=null&&(c=""+c,c!==t.value&&(t.value=c),e.defaultValue==null&&t.defaultValue!==c&&(t.defaultValue=c)),n!=null&&(t.defaultValue=""+n)}function Xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fi(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var At,gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,c,n,a){MSApp.execUnsafeLocalFunction(function(){return t(e,c,n,a)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(At=At||document.createElement("div"),At.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=At.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Q5(t,e){if(e){var c=t.firstChild;if(c&&c===t.lastChild&&c.nodeType===3){c.nodeValue=e;return}}t.textContent=e}var L5={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qI=["Webkit","ms","Moz","O"];Object.keys(L5).forEach(function(t){qI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),L5[e]=L5[t]})});function zg(t,e,c){return e==null||typeof e=="boolean"||e===""?"":c||typeof e!="number"||e===0||L5.hasOwnProperty(t)&&L5[t]?(""+e).trim():e+"px"}function Cg(t,e){t=t.style;for(var c in e)if(e.hasOwnProperty(c)){var n=c.indexOf("--")===0,a=zg(c,e[c],n);c==="float"&&(c="cssFloat"),n?t.setProperty(c,a):t[c]=a}}var WI=K1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(t,e){if(e){if(WI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function hi(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function vo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mi=null,Pe=null,De=null;function Zh(t){if(t=B7(t)){if(typeof mi!="function")throw Error(B(280));var e=t.stateNode;e&&(e=s9(e),mi(t.stateNode,t.type,e))}}function Hg(t){Pe?De?De.push(t):De=[t]:Pe=t}function Mg(){if(Pe){var t=Pe,e=De;if(De=Pe=null,Zh(t),e)for(t=0;t<e.length;t++)Zh(e[t])}}function Vg(t,e){return t(e)}function yg(){}var Xa=!1;function _g(t,e,c){if(Xa)return t(e,c);Xa=!0;try{return Vg(t,e,c)}finally{Xa=!1,(Pe!==null||De!==null)&&(yg(),Mg())}}function Y5(t,e){var c=t.stateNode;if(c===null)return null;var n=s9(c);if(n===null)return null;c=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(c&&typeof c!="function")throw Error(B(231,e,typeof c));return c}var pi=!1;if(F4)try{var Z8={};Object.defineProperty(Z8,"passive",{get:function(){pi=!0}}),window.addEventListener("test",Z8,Z8),window.removeEventListener("test",Z8,Z8)}catch{pi=!1}function GI(t,e,c,n,a,r,i,s,o){var f=Array.prototype.slice.call(arguments,3);try{e.apply(c,f)}catch(u){this.onError(u)}}var w5=!1,Fc=null,Bc=!1,vi=null,KI={onError:function(t){w5=!0,Fc=t}};function QI(t,e,c,n,a,r,i,s,o){w5=!1,Fc=null,GI.apply(KI,arguments)}function YI(t,e,c,n,a,r,i,s,o){if(QI.apply(this,arguments),w5){if(w5){var f=Fc;w5=!1,Fc=null}else throw Error(B(198));Bc||(Bc=!0,vi=f)}}function Q0(t){var e=t,c=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(c=e.return),t=e.return;while(t)}return e.tag===3?c:null}function Lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jh(t){if(Q0(t)!==t)throw Error(B(188))}function XI(t){var e=t.alternate;if(!e){if(e=Q0(t),e===null)throw Error(B(188));return e!==t?null:t}for(var c=t,n=e;;){var a=c.return;if(a===null)break;var r=a.alternate;if(r===null){if(n=a.return,n!==null){c=n;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===c)return Jh(a),t;if(r===n)return Jh(a),e;r=r.sibling}throw Error(B(188))}if(c.return!==n.return)c=a,n=r;else{for(var i=!1,s=a.child;s;){if(s===c){i=!0,c=a,n=r;break}if(s===n){i=!0,n=a,c=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===c){i=!0,c=r,n=a;break}if(s===n){i=!0,n=r,c=a;break}s=s.sibling}if(!i)throw Error(B(189))}}if(c.alternate!==n)throw Error(B(190))}if(c.tag!==3)throw Error(B(188));return c.stateNode.current===c?t:e}function wg(t){return t=XI(t),t!==null?xg(t):null}function xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xg(t);if(e!==null)return e;t=t.sibling}return null}var Sg=M3.unstable_scheduleCallback,ed=M3.unstable_cancelCallback,ZI=M3.unstable_shouldYield,JI=M3.unstable_requestPaint,e2=M3.unstable_now,eR=M3.unstable_getCurrentPriorityLevel,go=M3.unstable_ImmediatePriority,Ng=M3.unstable_UserBlockingPriority,Uc=M3.unstable_NormalPriority,tR=M3.unstable_LowPriority,bg=M3.unstable_IdlePriority,n9=null,l4=null;function cR(t){if(l4&&typeof l4.onCommitFiberRoot=="function")try{l4.onCommitFiberRoot(n9,t,void 0,(t.current.flags&128)===128)}catch{}}var X3=Math.clz32?Math.clz32:rR,nR=Math.log,aR=Math.LN2;function rR(t){return t>>>=0,t===0?32:31-(nR(t)/aR|0)|0}var It=64,Rt=4194304;function m5(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jc(t,e){var c=t.pendingLanes;if(c===0)return 0;var n=0,a=t.suspendedLanes,r=t.pingedLanes,i=c&268435455;if(i!==0){var s=i&~a;s!==0?n=m5(s):(r&=i,r!==0&&(n=m5(r)))}else i=c&~a,i!==0?n=m5(i):r!==0&&(n=m5(r));if(n===0)return 0;if(e!==0&&e!==n&&!(e&a)&&(a=n&-n,r=e&-e,a>=r||a===16&&(r&4194240)!==0))return e;if(n&4&&(n|=c&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)c=31-X3(e),a=1<<c,n|=t[c],e&=~a;return n}function iR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sR(t,e){for(var c=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes;0<r;){var i=31-X3(r),s=1<<i,o=a[i];o===-1?(!(s&c)||s&n)&&(a[i]=iR(s,e)):o<=e&&(t.expiredLanes|=s),r&=~s}}function gi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eg(){var t=It;return It<<=1,!(It&4194240)&&(It=64),t}function Za(t){for(var e=[],c=0;31>c;c++)e.push(t);return e}function O7(t,e,c){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-X3(e),t[e]=c}function oR(t,e){var c=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<c;){var a=31-X3(c),r=1<<a;e[a]=0,n[a]=-1,t[a]=-1,c&=~r}}function zo(t,e){var c=t.entangledLanes|=e;for(t=t.entanglements;c;){var n=31-X3(c),a=1<<n;a&e|t[n]&e&&(t[n]|=e),c&=~a}}var S1=0;function Tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,Co,Ag,Ig,Rg,zi=!1,Pt=[],N6=null,b6=null,E6=null,X5=new Map,Z5=new Map,H6=[],lR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(t,e){switch(t){case"focusin":case"focusout":N6=null;break;case"dragenter":case"dragleave":b6=null;break;case"mouseover":case"mouseout":E6=null;break;case"pointerover":case"pointerout":X5.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Z5.delete(e.pointerId)}}function J8(t,e,c,n,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:c,eventSystemFlags:n,nativeEvent:r,targetContainers:[a]},e!==null&&(e=B7(e),e!==null&&Co(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function fR(t,e,c,n,a){switch(e){case"focusin":return N6=J8(N6,t,e,c,n,a),!0;case"dragenter":return b6=J8(b6,t,e,c,n,a),!0;case"mouseover":return E6=J8(E6,t,e,c,n,a),!0;case"pointerover":var r=a.pointerId;return X5.set(r,J8(X5.get(r)||null,t,e,c,n,a)),!0;case"gotpointercapture":return r=a.pointerId,Z5.set(r,J8(Z5.get(r)||null,t,e,c,n,a)),!0}return!1}function Pg(t){var e=p0(t.target);if(e!==null){var c=Q0(e);if(c!==null){if(e=c.tag,e===13){if(e=Lg(c),e!==null){t.blockedOn=e,Rg(t.priority,function(){Ag(c)});return}}else if(e===3&&c.stateNode.current.memoizedState.isDehydrated){t.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var c=Ci(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(c===null){c=t.nativeEvent;var n=new c.constructor(c.type,c);di=n,c.target.dispatchEvent(n),di=null}else return e=B7(c),e!==null&&Co(e),t.blockedOn=c,!1;e.shift()}return!0}function cd(t,e,c){vc(t)&&c.delete(e)}function uR(){zi=!1,N6!==null&&vc(N6)&&(N6=null),b6!==null&&vc(b6)&&(b6=null),E6!==null&&vc(E6)&&(E6=null),X5.forEach(cd),Z5.forEach(cd)}function e5(t,e){t.blockedOn===e&&(t.blockedOn=null,zi||(zi=!0,M3.unstable_scheduleCallback(M3.unstable_NormalPriority,uR)))}function J5(t){function e(a){return e5(a,t)}if(0<Pt.length){e5(Pt[0],t);for(var c=1;c<Pt.length;c++){var n=Pt[c];n.blockedOn===t&&(n.blockedOn=null)}}for(N6!==null&&e5(N6,t),b6!==null&&e5(b6,t),E6!==null&&e5(E6,t),X5.forEach(e),Z5.forEach(e),c=0;c<H6.length;c++)n=H6[c],n.blockedOn===t&&(n.blockedOn=null);for(;0<H6.length&&(c=H6[0],c.blockedOn===null);)Pg(c),c.blockedOn===null&&H6.shift()}var Oe=Z4.ReactCurrentBatchConfig,$c=!0;function hR(t,e,c,n){var a=S1,r=Oe.transition;Oe.transition=null;try{S1=1,Ho(t,e,c,n)}finally{S1=a,Oe.transition=r}}function dR(t,e,c,n){var a=S1,r=Oe.transition;Oe.transition=null;try{S1=4,Ho(t,e,c,n)}finally{S1=a,Oe.transition=r}}function Ho(t,e,c,n){if($c){var a=Ci(t,e,c,n);if(a===null)or(t,e,n,qc,c),td(t,n);else if(fR(a,t,e,c,n))n.stopPropagation();else if(td(t,n),e&4&&-1<lR.indexOf(t)){for(;a!==null;){var r=B7(a);if(r!==null&&kg(r),r=Ci(t,e,c,n),r===null&&or(t,e,n,qc,c),r===a)break;a=r}a!==null&&n.stopPropagation()}else or(t,e,n,null,c)}}var qc=null;function Ci(t,e,c,n){if(qc=null,t=vo(n),t=p0(t),t!==null)if(e=Q0(t),e===null)t=null;else if(c=e.tag,c===13){if(t=Lg(e),t!==null)return t;t=null}else if(c===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eR()){case go:return 1;case Ng:return 4;case Uc:case tR:return 16;case bg:return 536870912;default:return 16}default:return 16}}var _6=null,Mo=null,gc=null;function Og(){if(gc)return gc;var t,e=Mo,c=e.length,n,a="value"in _6?_6.value:_6.textContent,r=a.length;for(t=0;t<c&&e[t]===a[t];t++);var i=c-t;for(n=1;n<=i&&e[c-n]===a[r-n];n++);return gc=a.slice(t,1<n?1-n:void 0)}function zc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dt(){return!0}function nd(){return!1}function y3(t){function e(c,n,a,r,i){this._reactName=c,this._targetInst=a,this.type=n,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(c=t[s],this[s]=c?c(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Dt:nd,this.isPropagationStopped=nd,this}return K1(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Dt)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Dt)},persist:function(){},isPersistent:Dt}),e}var C8={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=y3(C8),F7=K1({},C8,{view:0,detail:0}),mR=y3(F7),Ja,er,t5,a9=K1({},F7,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==t5&&(t5&&t.type==="mousemove"?(Ja=t.screenX-t5.screenX,er=t.screenY-t5.screenY):er=Ja=0,t5=t),Ja)},movementY:function(t){return"movementY"in t?t.movementY:er}}),ad=y3(a9),pR=K1({},a9,{dataTransfer:0}),vR=y3(pR),gR=K1({},F7,{relatedTarget:0}),tr=y3(gR),zR=K1({},C8,{animationName:0,elapsedTime:0,pseudoElement:0}),CR=y3(zR),HR=K1({},C8,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MR=y3(HR),VR=K1({},C8,{data:0}),rd=y3(VR),yR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_R={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LR[t])?!!e[t]:!1}function yo(){return wR}var xR=K1({},F7,{key:function(t){if(t.key){var e=yR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_R[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(t){return t.type==="keypress"?zc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),SR=y3(xR),NR=K1({},a9,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=y3(NR),bR=K1({},F7,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),ER=y3(bR),TR=K1({},C8,{propertyName:0,elapsedTime:0,pseudoElement:0}),kR=y3(TR),AR=K1({},a9,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),IR=y3(AR),RR=[9,13,27,32],_o=F4&&"CompositionEvent"in window,x5=null;F4&&"documentMode"in document&&(x5=document.documentMode);var PR=F4&&"TextEvent"in window&&!x5,Fg=F4&&(!_o||x5&&8<x5&&11>=x5),sd=" ",od=!1;function Bg(t,e){switch(t){case"keyup":return RR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Me=!1;function DR(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(od=!0,sd);case"textInput":return t=e.data,t===sd&&od?null:t;default:return null}}function OR(t,e){if(Me)return t==="compositionend"||!_o&&Bg(t,e)?(t=Og(),gc=Mo=_6=null,Me=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fg&&e.locale!=="ko"?null:e.data;default:return null}}var FR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FR[t.type]:e==="textarea"}function jg(t,e,c,n){Hg(n),e=Wc(e,"onChange"),0<e.length&&(c=new Vo("onChange","change",null,c,n),t.push({event:c,listeners:e}))}var S5=null,e7=null;function BR(t){ez(t,0)}function r9(t){var e=_e(t);if(dg(e))return t}function UR(t,e){if(t==="change")return e}var $g=!1;if(F4){var cr;if(F4){var nr="oninput"in document;if(!nr){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),nr=typeof fd.oninput=="function"}cr=nr}else cr=!1;$g=cr&&(!document.documentMode||9<document.documentMode)}function ud(){S5&&(S5.detachEvent("onpropertychange",qg),e7=S5=null)}function qg(t){if(t.propertyName==="value"&&r9(e7)){var e=[];jg(e,e7,t,vo(t)),_g(BR,e)}}function jR(t,e,c){t==="focusin"?(ud(),S5=e,e7=c,S5.attachEvent("onpropertychange",qg)):t==="focusout"&&ud()}function $R(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return r9(e7)}function qR(t,e){if(t==="click")return r9(e)}function WR(t,e){if(t==="input"||t==="change")return r9(e)}function GR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var t4=typeof Object.is=="function"?Object.is:GR;function t7(t,e){if(t4(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var c=Object.keys(t),n=Object.keys(e);if(c.length!==n.length)return!1;for(n=0;n<c.length;n++){var a=c[n];if(!ti.call(e,a)||!t4(t[a],e[a]))return!1}return!0}function hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dd(t,e){var c=hd(t);t=0;for(var n;c;){if(c.nodeType===3){if(n=t+c.textContent.length,t<=e&&n>=e)return{node:c,offset:e-t};t=n}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=hd(c)}}function Wg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var c=typeof e.contentWindow.location.href=="string"}catch{c=!1}if(c)t=e.contentWindow;else break;e=Oc(t.document)}return e}function Lo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KR(t){var e=Gg(),c=t.focusedElem,n=t.selectionRange;if(e!==c&&c&&c.ownerDocument&&Wg(c.ownerDocument.documentElement,c)){if(n!==null&&Lo(c)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in c)c.selectionStart=e,c.selectionEnd=Math.min(t,c.value.length);else if(t=(e=c.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var a=c.textContent.length,r=Math.min(n.start,a);n=n.end===void 0?r:Math.min(n.end,a),!t.extend&&r>n&&(a=n,n=r,r=a),a=dd(c,r);var i=dd(c,n);a&&i&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==i.node||t.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),t.removeAllRanges(),r>n?(t.addRange(e),t.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),t.addRange(e)))}}for(e=[],t=c;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<e.length;c++)t=e[c],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QR=F4&&"documentMode"in document&&11>=document.documentMode,Ve=null,Hi=null,N5=null,Mi=!1;function md(t,e,c){var n=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Mi||Ve==null||Ve!==Oc(n)||(n=Ve,"selectionStart"in n&&Lo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),N5&&t7(N5,n)||(N5=n,n=Wc(Hi,"onSelect"),0<n.length&&(e=new Vo("onSelect","select",null,e,c),t.push({event:e,listeners:n}),e.target=Ve)))}function Ot(t,e){var c={};return c[t.toLowerCase()]=e.toLowerCase(),c["Webkit"+t]="webkit"+e,c["Moz"+t]="moz"+e,c}var ye={animationend:Ot("Animation","AnimationEnd"),animationiteration:Ot("Animation","AnimationIteration"),animationstart:Ot("Animation","AnimationStart"),transitionend:Ot("Transition","TransitionEnd")},ar={},Kg={};F4&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete ye.animationend.animation,delete ye.animationiteration.animation,delete ye.animationstart.animation),"TransitionEvent"in window||delete ye.transitionend.transition);function i9(t){if(ar[t])return ar[t];if(!ye[t])return t;var e=ye[t],c;for(c in e)if(e.hasOwnProperty(c)&&c in Kg)return ar[t]=e[c];return t}var Qg=i9("animationend"),Yg=i9("animationiteration"),Xg=i9("animationstart"),Zg=i9("transitionend"),Jg=new Map,pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function J6(t,e){Jg.set(t,e),K0(e,[t])}for(var rr=0;rr<pd.length;rr++){var ir=pd[rr],YR=ir.toLowerCase(),XR=ir[0].toUpperCase()+ir.slice(1);J6(YR,"on"+XR)}J6(Qg,"onAnimationEnd");J6(Yg,"onAnimationIteration");J6(Xg,"onAnimationStart");J6("dblclick","onDoubleClick");J6("focusin","onFocus");J6("focusout","onBlur");J6(Zg,"onTransitionEnd");Ye("onMouseEnter",["mouseout","mouseover"]);Ye("onMouseLeave",["mouseout","mouseover"]);Ye("onPointerEnter",["pointerout","pointerover"]);Ye("onPointerLeave",["pointerout","pointerover"]);K0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));K0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));K0("onBeforeInput",["compositionend","keypress","textInput","paste"]);K0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));K0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));K0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var p5="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZR=new Set("cancel close invalid load scroll toggle".split(" ").concat(p5));function vd(t,e,c){var n=t.type||"unknown-event";t.currentTarget=c,YI(n,e,void 0,t),t.currentTarget=null}function ez(t,e){e=(e&4)!==0;for(var c=0;c<t.length;c++){var n=t[c],a=n.event;n=n.listeners;e:{var r=void 0;if(e)for(var i=n.length-1;0<=i;i--){var s=n[i],o=s.instance,f=s.currentTarget;if(s=s.listener,o!==r&&a.isPropagationStopped())break e;vd(a,s,f),r=o}else for(i=0;i<n.length;i++){if(s=n[i],o=s.instance,f=s.currentTarget,s=s.listener,o!==r&&a.isPropagationStopped())break e;vd(a,s,f),r=o}}}if(Bc)throw t=vi,Bc=!1,vi=null,t}function P1(t,e){var c=e[wi];c===void 0&&(c=e[wi]=new Set);var n=t+"__bubble";c.has(n)||(tz(e,t,2,!1),c.add(n))}function sr(t,e,c){var n=0;e&&(n|=4),tz(c,t,n,e)}var Ft="_reactListening"+Math.random().toString(36).slice(2);function c7(t){if(!t[Ft]){t[Ft]=!0,og.forEach(function(c){c!=="selectionchange"&&(ZR.has(c)||sr(c,!1,t),sr(c,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ft]||(e[Ft]=!0,sr("selectionchange",!1,e))}}function tz(t,e,c,n){switch(Dg(e)){case 1:var a=hR;break;case 4:a=dR;break;default:a=Ho}c=a.bind(null,e,c,t),a=void 0,!pi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,c,{capture:!0,passive:a}):t.addEventListener(e,c,!0):a!==void 0?t.addEventListener(e,c,{passive:a}):t.addEventListener(e,c,!1)}function or(t,e,c,n,a){var r=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;i=i.return}for(;s!==null;){if(i=p0(s),i===null)return;if(o=i.tag,o===5||o===6){n=r=i;continue e}s=s.parentNode}}n=n.return}_g(function(){var f=r,u=vo(c),h=[];e:{var m=Jg.get(t);if(m!==void 0){var v=Vo,H=t;switch(t){case"keypress":if(zc(c)===0)break e;case"keydown":case"keyup":v=SR;break;case"focusin":H="focus",v=tr;break;case"focusout":H="blur",v=tr;break;case"beforeblur":case"afterblur":v=tr;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=vR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ER;break;case Qg:case Yg:case Xg:v=CR;break;case Zg:v=kR;break;case"scroll":v=mR;break;case"wheel":v=IR;break;case"copy":case"cut":case"paste":v=MR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=id}var w=(e&4)!==0,S=!w&&t==="scroll",M=w?m!==null?m+"Capture":null:m;w=[];for(var C=f,V;C!==null;){V=C;var E=V.stateNode;if(V.tag===5&&E!==null&&(V=E,M!==null&&(E=Y5(C,M),E!=null&&w.push(n7(C,E,V)))),S)break;C=C.return}0<w.length&&(m=new v(m,H,null,c,u),h.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&c!==di&&(H=c.relatedTarget||c.fromElement)&&(p0(H)||H[B4]))break e;if((v||m)&&(m=u.window===u?u:(m=u.ownerDocument)?m.defaultView||m.parentWindow:window,v?(H=c.relatedTarget||c.toElement,v=f,H=H?p0(H):null,H!==null&&(S=Q0(H),H!==S||H.tag!==5&&H.tag!==6)&&(H=null)):(v=null,H=f),v!==H)){if(w=ad,E="onMouseLeave",M="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(w=id,E="onPointerLeave",M="onPointerEnter",C="pointer"),S=v==null?m:_e(v),V=H==null?m:_e(H),m=new w(E,C+"leave",v,c,u),m.target=S,m.relatedTarget=V,E=null,p0(u)===f&&(w=new w(M,C+"enter",H,c,u),w.target=V,w.relatedTarget=S,E=w),S=E,v&&H)t:{for(w=v,M=H,C=0,V=w;V;V=le(V))C++;for(V=0,E=M;E;E=le(E))V++;for(;0<C-V;)w=le(w),C--;for(;0<V-C;)M=le(M),V--;for(;C--;){if(w===M||M!==null&&w===M.alternate)break t;w=le(w),M=le(M)}w=null}else w=null;v!==null&&gd(h,m,v,w,!1),H!==null&&S!==null&&gd(h,S,H,w,!0)}}e:{if(m=f?_e(f):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var R=UR;else if(ld(m))if($g)R=WR;else{R=$R;var I=jR}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=qR);if(R&&(R=R(t,f))){jg(h,R,c,u);break e}I&&I(t,m,f),t==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&oi(m,"number",m.value)}switch(I=f?_e(f):window,t){case"focusin":(ld(I)||I.contentEditable==="true")&&(Ve=I,Hi=f,N5=null);break;case"focusout":N5=Hi=Ve=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,md(h,c,u);break;case"selectionchange":if(QR)break;case"keydown":case"keyup":md(h,c,u)}var L;if(_o)e:{switch(t){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Me?Bg(t,c)&&(z="onCompositionEnd"):t==="keydown"&&c.keyCode===229&&(z="onCompositionStart");z&&(Fg&&c.locale!=="ko"&&(Me||z!=="onCompositionStart"?z==="onCompositionEnd"&&Me&&(L=Og()):(_6=u,Mo="value"in _6?_6.value:_6.textContent,Me=!0)),I=Wc(f,z),0<I.length&&(z=new rd(z,t,null,c,u),h.push({event:z,listeners:I}),L?z.data=L:(L=Ug(c),L!==null&&(z.data=L)))),(L=PR?DR(t,c):OR(t,c))&&(f=Wc(f,"onBeforeInput"),0<f.length&&(u=new rd("onBeforeInput","beforeinput",null,c,u),h.push({event:u,listeners:f}),u.data=L))}ez(h,e)})}function n7(t,e,c){return{instance:t,listener:e,currentTarget:c}}function Wc(t,e){for(var c=e+"Capture",n=[];t!==null;){var a=t,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Y5(t,c),r!=null&&n.unshift(n7(t,r,a)),r=Y5(t,e),r!=null&&n.push(n7(t,r,a))),t=t.return}return n}function le(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gd(t,e,c,n,a){for(var r=e._reactName,i=[];c!==null&&c!==n;){var s=c,o=s.alternate,f=s.stateNode;if(o!==null&&o===n)break;s.tag===5&&f!==null&&(s=f,a?(o=Y5(c,r),o!=null&&i.unshift(n7(c,o,s))):a||(o=Y5(c,r),o!=null&&i.push(n7(c,o,s)))),c=c.return}i.length!==0&&t.push({event:e,listeners:i})}var JR=/\r\n?/g,eP=/\u0000|\uFFFD/g;function zd(t){return(typeof t=="string"?t:""+t).replace(JR,`
`).replace(eP,"")}function Bt(t,e,c){if(e=zd(e),zd(t)!==e&&c)throw Error(B(425))}function Gc(){}var Vi=null,yi=null;function _i(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,tP=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,cP=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(t){return Cd.resolve(null).then(t).catch(nP)}:Li;function nP(t){setTimeout(function(){throw t})}function lr(t,e){var c=e,n=0;do{var a=c.nextSibling;if(t.removeChild(c),a&&a.nodeType===8)if(c=a.data,c==="/$"){if(n===0){t.removeChild(a),J5(e);return}n--}else c!=="$"&&c!=="$?"&&c!=="$!"||n++;c=a}while(c);J5(e)}function T6(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var c=t.data;if(c==="$"||c==="$!"||c==="$?"){if(e===0)return t;e--}else c==="/$"&&e++}t=t.previousSibling}return null}var H8=Math.random().toString(36).slice(2),s4="__reactFiber$"+H8,a7="__reactProps$"+H8,B4="__reactContainer$"+H8,wi="__reactEvents$"+H8,aP="__reactListeners$"+H8,rP="__reactHandles$"+H8;function p0(t){var e=t[s4];if(e)return e;for(var c=t.parentNode;c;){if(e=c[B4]||c[s4]){if(c=e.alternate,e.child!==null||c!==null&&c.child!==null)for(t=Hd(t);t!==null;){if(c=t[s4])return c;t=Hd(t)}return e}t=c,c=t.parentNode}return null}function B7(t){return t=t[s4]||t[B4],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _e(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function s9(t){return t[a7]||null}var xi=[],Le=-1;function e0(t){return{current:t}}function F1(t){0>Le||(t.current=xi[Le],xi[Le]=null,Le--)}function A1(t,e){Le++,xi[Le]=t.current,t.current=e}var $6={},q2=e0($6),r3=e0(!1),N0=$6;function Xe(t,e){var c=t.type.contextTypes;if(!c)return $6;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in c)a[r]=e[r];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=a),a}function i3(t){return t=t.childContextTypes,t!=null}function Kc(){F1(r3),F1(q2)}function Md(t,e,c){if(q2.current!==$6)throw Error(B(168));A1(q2,e),A1(r3,c)}function cz(t,e,c){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return c;n=n.getChildContext();for(var a in n)if(!(a in e))throw Error(B(108,jI(t)||"Unknown",a));return K1({},c,n)}function Qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$6,N0=q2.current,A1(q2,t),A1(r3,r3.current),!0}function Vd(t,e,c){var n=t.stateNode;if(!n)throw Error(B(169));c?(t=cz(t,e,N0),n.__reactInternalMemoizedMergedChildContext=t,F1(r3),F1(q2),A1(q2,t)):F1(r3),A1(r3,c)}var y4=null,o9=!1,fr=!1;function nz(t){y4===null?y4=[t]:y4.push(t)}function iP(t){o9=!0,nz(t)}function t0(){if(!fr&&y4!==null){fr=!0;var t=0,e=S1;try{var c=y4;for(S1=1;t<c.length;t++){var n=c[t];do n=n(!0);while(n!==null)}y4=null,o9=!1}catch(a){throw y4!==null&&(y4=y4.slice(t+1)),Sg(go,t0),a}finally{S1=e,fr=!1}}return null}var we=[],xe=0,Yc=null,Xc=0,w3=[],x3=0,b0=null,S4=1,N4="";function f0(t,e){we[xe++]=Xc,we[xe++]=Yc,Yc=t,Xc=e}function az(t,e,c){w3[x3++]=S4,w3[x3++]=N4,w3[x3++]=b0,b0=t;var n=S4;t=N4;var a=32-X3(n)-1;n&=~(1<<a),c+=1;var r=32-X3(e)+a;if(30<r){var i=a-a%5;r=(n&(1<<i)-1).toString(32),n>>=i,a-=i,S4=1<<32-X3(e)+a|c<<a|n,N4=r+t}else S4=1<<r|c<<a|n,N4=t}function wo(t){t.return!==null&&(f0(t,1),az(t,1,0))}function xo(t){for(;t===Yc;)Yc=we[--xe],we[xe]=null,Xc=we[--xe],we[xe]=null;for(;t===b0;)b0=w3[--x3],w3[x3]=null,N4=w3[--x3],w3[x3]=null,S4=w3[--x3],w3[x3]=null}var C3=null,g3=null,U1=!1,j3=null;function rz(t,e){var c=N3(5,null,null,0);c.elementType="DELETED",c.stateNode=e,c.return=t,e=t.deletions,e===null?(t.deletions=[c],t.flags|=16):e.push(c)}function yd(t,e){switch(t.tag){case 5:var c=t.type;return e=e.nodeType!==1||c.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,C3=t,g3=T6(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,C3=t,g3=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(c=b0!==null?{id:S4,overflow:N4}:null,t.memoizedState={dehydrated:e,treeContext:c,retryLane:1073741824},c=N3(18,null,null,0),c.stateNode=e,c.return=t,t.child=c,C3=t,g3=null,!0):!1;default:return!1}}function Si(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ni(t){if(U1){var e=g3;if(e){var c=e;if(!yd(t,e)){if(Si(t))throw Error(B(418));e=T6(c.nextSibling);var n=C3;e&&yd(t,e)?rz(n,c):(t.flags=t.flags&-4097|2,U1=!1,C3=t)}}else{if(Si(t))throw Error(B(418));t.flags=t.flags&-4097|2,U1=!1,C3=t}}}function _d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;C3=t}function Ut(t){if(t!==C3)return!1;if(!U1)return _d(t),U1=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_i(t.type,t.memoizedProps)),e&&(e=g3)){if(Si(t))throw iz(),Error(B(418));for(;e;)rz(t,e),e=T6(e.nextSibling)}if(_d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var c=t.data;if(c==="/$"){if(e===0){g3=T6(t.nextSibling);break e}e--}else c!=="$"&&c!=="$!"&&c!=="$?"||e++}t=t.nextSibling}g3=null}}else g3=C3?T6(t.stateNode.nextSibling):null;return!0}function iz(){for(var t=g3;t;)t=T6(t.nextSibling)}function Ze(){g3=C3=null,U1=!1}function So(t){j3===null?j3=[t]:j3.push(t)}var sP=Z4.ReactCurrentBatchConfig;function c5(t,e,c){if(t=c.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(B(309));var n=c.stateNode}if(!n)throw Error(B(147,t));var a=n,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(i){var s=a.refs;i===null?delete s[r]:s[r]=i},e._stringRef=r,e)}if(typeof t!="string")throw Error(B(284));if(!c._owner)throw Error(B(290,t))}return t}function jt(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ld(t){var e=t._init;return e(t._payload)}function sz(t){function e(M,C){if(t){var V=M.deletions;V===null?(M.deletions=[C],M.flags|=16):V.push(C)}}function c(M,C){if(!t)return null;for(;C!==null;)e(M,C),C=C.sibling;return null}function n(M,C){for(M=new Map;C!==null;)C.key!==null?M.set(C.key,C):M.set(C.index,C),C=C.sibling;return M}function a(M,C){return M=R6(M,C),M.index=0,M.sibling=null,M}function r(M,C,V){return M.index=V,t?(V=M.alternate,V!==null?(V=V.index,V<C?(M.flags|=2,C):V):(M.flags|=2,C)):(M.flags|=1048576,C)}function i(M){return t&&M.alternate===null&&(M.flags|=2),M}function s(M,C,V,E){return C===null||C.tag!==6?(C=gr(V,M.mode,E),C.return=M,C):(C=a(C,V),C.return=M,C)}function o(M,C,V,E){var R=V.type;return R===He?u(M,C,V.props.children,E,V.key):C!==null&&(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===g6&&Ld(R)===C.type)?(E=a(C,V.props),E.ref=c5(M,C,V),E.return=M,E):(E=Lc(V.type,V.key,V.props,null,M.mode,E),E.ref=c5(M,C,V),E.return=M,E)}function f(M,C,V,E){return C===null||C.tag!==4||C.stateNode.containerInfo!==V.containerInfo||C.stateNode.implementation!==V.implementation?(C=zr(V,M.mode,E),C.return=M,C):(C=a(C,V.children||[]),C.return=M,C)}function u(M,C,V,E,R){return C===null||C.tag!==7?(C=w0(V,M.mode,E,R),C.return=M,C):(C=a(C,V),C.return=M,C)}function h(M,C,V){if(typeof C=="string"&&C!==""||typeof C=="number")return C=gr(""+C,M.mode,V),C.return=M,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Tt:return V=Lc(C.type,C.key,C.props,null,M.mode,V),V.ref=c5(M,null,C),V.return=M,V;case Ce:return C=zr(C,M.mode,V),C.return=M,C;case g6:var E=C._init;return h(M,E(C._payload),V)}if(d5(C)||X8(C))return C=w0(C,M.mode,V,null),C.return=M,C;jt(M,C)}return null}function m(M,C,V,E){var R=C!==null?C.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return R!==null?null:s(M,C,""+V,E);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Tt:return V.key===R?o(M,C,V,E):null;case Ce:return V.key===R?f(M,C,V,E):null;case g6:return R=V._init,m(M,C,R(V._payload),E)}if(d5(V)||X8(V))return R!==null?null:u(M,C,V,E,null);jt(M,V)}return null}function v(M,C,V,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return M=M.get(V)||null,s(C,M,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Tt:return M=M.get(E.key===null?V:E.key)||null,o(C,M,E,R);case Ce:return M=M.get(E.key===null?V:E.key)||null,f(C,M,E,R);case g6:var I=E._init;return v(M,C,V,I(E._payload),R)}if(d5(E)||X8(E))return M=M.get(V)||null,u(C,M,E,R,null);jt(C,E)}return null}function H(M,C,V,E){for(var R=null,I=null,L=C,z=C=0,x=null;L!==null&&z<V.length;z++){L.index>z?(x=L,L=null):x=L.sibling;var N=m(M,L,V[z],E);if(N===null){L===null&&(L=x);break}t&&L&&N.alternate===null&&e(M,L),C=r(N,C,z),I===null?R=N:I.sibling=N,I=N,L=x}if(z===V.length)return c(M,L),U1&&f0(M,z),R;if(L===null){for(;z<V.length;z++)L=h(M,V[z],E),L!==null&&(C=r(L,C,z),I===null?R=L:I.sibling=L,I=L);return U1&&f0(M,z),R}for(L=n(M,L);z<V.length;z++)x=v(L,M,z,V[z],E),x!==null&&(t&&x.alternate!==null&&L.delete(x.key===null?z:x.key),C=r(x,C,z),I===null?R=x:I.sibling=x,I=x);return t&&L.forEach(function(T){return e(M,T)}),U1&&f0(M,z),R}function w(M,C,V,E){var R=X8(V);if(typeof R!="function")throw Error(B(150));if(V=R.call(V),V==null)throw Error(B(151));for(var I=R=null,L=C,z=C=0,x=null,N=V.next();L!==null&&!N.done;z++,N=V.next()){L.index>z?(x=L,L=null):x=L.sibling;var T=m(M,L,N.value,E);if(T===null){L===null&&(L=x);break}t&&L&&T.alternate===null&&e(M,L),C=r(T,C,z),I===null?R=T:I.sibling=T,I=T,L=x}if(N.done)return c(M,L),U1&&f0(M,z),R;if(L===null){for(;!N.done;z++,N=V.next())N=h(M,N.value,E),N!==null&&(C=r(N,C,z),I===null?R=N:I.sibling=N,I=N);return U1&&f0(M,z),R}for(L=n(M,L);!N.done;z++,N=V.next())N=v(L,M,z,N.value,E),N!==null&&(t&&N.alternate!==null&&L.delete(N.key===null?z:N.key),C=r(N,C,z),I===null?R=N:I.sibling=N,I=N);return t&&L.forEach(function(k){return e(M,k)}),U1&&f0(M,z),R}function S(M,C,V,E){if(typeof V=="object"&&V!==null&&V.type===He&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case Tt:e:{for(var R=V.key,I=C;I!==null;){if(I.key===R){if(R=V.type,R===He){if(I.tag===7){c(M,I.sibling),C=a(I,V.props.children),C.return=M,M=C;break e}}else if(I.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===g6&&Ld(R)===I.type){c(M,I.sibling),C=a(I,V.props),C.ref=c5(M,I,V),C.return=M,M=C;break e}c(M,I);break}else e(M,I);I=I.sibling}V.type===He?(C=w0(V.props.children,M.mode,E,V.key),C.return=M,M=C):(E=Lc(V.type,V.key,V.props,null,M.mode,E),E.ref=c5(M,C,V),E.return=M,M=E)}return i(M);case Ce:e:{for(I=V.key;C!==null;){if(C.key===I)if(C.tag===4&&C.stateNode.containerInfo===V.containerInfo&&C.stateNode.implementation===V.implementation){c(M,C.sibling),C=a(C,V.children||[]),C.return=M,M=C;break e}else{c(M,C);break}else e(M,C);C=C.sibling}C=zr(V,M.mode,E),C.return=M,M=C}return i(M);case g6:return I=V._init,S(M,C,I(V._payload),E)}if(d5(V))return H(M,C,V,E);if(X8(V))return w(M,C,V,E);jt(M,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,C!==null&&C.tag===6?(c(M,C.sibling),C=a(C,V),C.return=M,M=C):(c(M,C),C=gr(V,M.mode,E),C.return=M,M=C),i(M)):c(M,C)}return S}var Je=sz(!0),oz=sz(!1),Zc=e0(null),Jc=null,Se=null,No=null;function bo(){No=Se=Jc=null}function Eo(t){var e=Zc.current;F1(Zc),t._currentValue=e}function bi(t,e,c){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===c)break;t=t.return}}function Fe(t,e){Jc=t,No=Se=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(c3=!0),t.firstContext=null)}function T3(t){var e=t._currentValue;if(No!==t)if(t={context:t,memoizedValue:e,next:null},Se===null){if(Jc===null)throw Error(B(308));Se=t,Jc.dependencies={lanes:0,firstContext:t}}else Se=Se.next=t;return e}var v0=null;function To(t){v0===null?v0=[t]:v0.push(t)}function lz(t,e,c,n){var a=e.interleaved;return a===null?(c.next=c,To(e)):(c.next=a.next,a.next=c),e.interleaved=c,U4(t,n)}function U4(t,e){t.lanes|=e;var c=t.alternate;for(c!==null&&(c.lanes|=e),c=t,t=t.return;t!==null;)t.childLanes|=e,c=t.alternate,c!==null&&(c.childLanes|=e),c=t,t=t.return;return c.tag===3?c.stateNode:null}var z6=!1;function ko(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fz(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function A4(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function k6(t,e,c){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,y1&2){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,U4(t,c)}return a=n.interleaved,a===null?(e.next=e,To(n)):(e.next=a.next,a.next=e),n.interleaved=e,U4(t,c)}function Cc(t,e,c){if(e=e.updateQueue,e!==null&&(e=e.shared,(c&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,c|=n,e.lanes=c,zo(t,c)}}function wd(t,e){var c=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,c===n)){var a=null,r=null;if(c=c.firstBaseUpdate,c!==null){do{var i={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};r===null?a=r=i:r=r.next=i,c=c.next}while(c!==null);r===null?a=r=e:r=r.next=e}else a=r=e;c={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:n.shared,effects:n.effects},t.updateQueue=c;return}t=c.lastBaseUpdate,t===null?c.firstBaseUpdate=e:t.next=e,c.lastBaseUpdate=e}function en(t,e,c,n){var a=t.updateQueue;z6=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,f=o.next;o.next=null,i===null?r=f:i.next=f,i=o;var u=t.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==i&&(s===null?u.firstBaseUpdate=f:s.next=f,u.lastBaseUpdate=o))}if(r!==null){var h=a.baseState;i=0,u=f=o=null,s=r;do{var m=s.lane,v=s.eventTime;if((n&m)===m){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var H=t,w=s;switch(m=e,v=c,w.tag){case 1:if(H=w.payload,typeof H=="function"){h=H.call(v,h,m);break e}h=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=w.payload,m=typeof H=="function"?H.call(v,h,m):H,m==null)break e;h=K1({},h,m);break e;case 2:z6=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,m=a.effects,m===null?a.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(f=u=v,o=h):u=u.next=v,i|=m;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(u===null&&(o=h),a.baseState=o,a.firstBaseUpdate=f,a.lastBaseUpdate=u,e=a.shared.interleaved,e!==null){a=e;do i|=a.lane,a=a.next;while(a!==e)}else r===null&&(a.shared.lanes=0);T0|=i,t.lanes=i,t.memoizedState=h}}function xd(t,e,c){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],a=n.callback;if(a!==null){if(n.callback=null,n=c,typeof a!="function")throw Error(B(191,a));a.call(n)}}}var U7={},f4=e0(U7),r7=e0(U7),i7=e0(U7);function g0(t){if(t===U7)throw Error(B(174));return t}function Ao(t,e){switch(A1(i7,e),A1(r7,t),A1(f4,U7),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fi(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fi(e,t)}F1(f4),A1(f4,e)}function e8(){F1(f4),F1(r7),F1(i7)}function uz(t){g0(i7.current);var e=g0(f4.current),c=fi(e,t.type);e!==c&&(A1(r7,t),A1(f4,c))}function Io(t){r7.current===t&&(F1(f4),F1(r7))}var q1=e0(0);function tn(t){for(var e=t;e!==null;){if(e.tag===13){var c=e.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ur=[];function Ro(){for(var t=0;t<ur.length;t++)ur[t]._workInProgressVersionPrimary=null;ur.length=0}var Hc=Z4.ReactCurrentDispatcher,hr=Z4.ReactCurrentBatchConfig,E0=0,W1=null,l2=null,z2=null,cn=!1,b5=!1,s7=0,oP=0;function P2(){throw Error(B(321))}function Po(t,e){if(e===null)return!1;for(var c=0;c<e.length&&c<t.length;c++)if(!t4(t[c],e[c]))return!1;return!0}function Do(t,e,c,n,a,r){if(E0=r,W1=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hc.current=t===null||t.memoizedState===null?hP:dP,t=c(n,a),b5){r=0;do{if(b5=!1,s7=0,25<=r)throw Error(B(301));r+=1,z2=l2=null,e.updateQueue=null,Hc.current=mP,t=c(n,a)}while(b5)}if(Hc.current=nn,e=l2!==null&&l2.next!==null,E0=0,z2=l2=W1=null,cn=!1,e)throw Error(B(300));return t}function Oo(){var t=s7!==0;return s7=0,t}function r4(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z2===null?W1.memoizedState=z2=t:z2=z2.next=t,z2}function k3(){if(l2===null){var t=W1.alternate;t=t!==null?t.memoizedState:null}else t=l2.next;var e=z2===null?W1.memoizedState:z2.next;if(e!==null)z2=e,l2=t;else{if(t===null)throw Error(B(310));l2=t,t={memoizedState:l2.memoizedState,baseState:l2.baseState,baseQueue:l2.baseQueue,queue:l2.queue,next:null},z2===null?W1.memoizedState=z2=t:z2=z2.next=t}return z2}function o7(t,e){return typeof e=="function"?e(t):e}function dr(t){var e=k3(),c=e.queue;if(c===null)throw Error(B(311));c.lastRenderedReducer=t;var n=l2,a=n.baseQueue,r=c.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}n.baseQueue=a=r,c.pending=null}if(a!==null){r=a.next,n=n.baseState;var s=i=null,o=null,f=r;do{var u=f.lane;if((E0&u)===u)o!==null&&(o=o.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),n=f.hasEagerState?f.eagerState:t(n,f.action);else{var h={lane:u,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};o===null?(s=o=h,i=n):o=o.next=h,W1.lanes|=u,T0|=u}f=f.next}while(f!==null&&f!==r);o===null?i=n:o.next=s,t4(n,e.memoizedState)||(c3=!0),e.memoizedState=n,e.baseState=i,e.baseQueue=o,c.lastRenderedState=n}if(t=c.interleaved,t!==null){a=t;do r=a.lane,W1.lanes|=r,T0|=r,a=a.next;while(a!==t)}else a===null&&(c.lanes=0);return[e.memoizedState,c.dispatch]}function mr(t){var e=k3(),c=e.queue;if(c===null)throw Error(B(311));c.lastRenderedReducer=t;var n=c.dispatch,a=c.pending,r=e.memoizedState;if(a!==null){c.pending=null;var i=a=a.next;do r=t(r,i.action),i=i.next;while(i!==a);t4(r,e.memoizedState)||(c3=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),c.lastRenderedState=r}return[r,n]}function hz(){}function dz(t,e){var c=W1,n=k3(),a=e(),r=!t4(n.memoizedState,a);if(r&&(n.memoizedState=a,c3=!0),n=n.queue,Fo(vz.bind(null,c,n,t),[t]),n.getSnapshot!==e||r||z2!==null&&z2.memoizedState.tag&1){if(c.flags|=2048,l7(9,pz.bind(null,c,n,a,e),void 0,null),V2===null)throw Error(B(349));E0&30||mz(c,e,a)}return a}function mz(t,e,c){t.flags|=16384,t={getSnapshot:e,value:c},e=W1.updateQueue,e===null?(e={lastEffect:null,stores:null},W1.updateQueue=e,e.stores=[t]):(c=e.stores,c===null?e.stores=[t]:c.push(t))}function pz(t,e,c,n){e.value=c,e.getSnapshot=n,gz(e)&&zz(t)}function vz(t,e,c){return c(function(){gz(e)&&zz(t)})}function gz(t){var e=t.getSnapshot;t=t.value;try{var c=e();return!t4(t,c)}catch{return!0}}function zz(t){var e=U4(t,1);e!==null&&Z3(e,t,1,-1)}function Sd(t){var e=r4();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o7,lastRenderedState:t},e.queue=t,t=t.dispatch=uP.bind(null,W1,t),[e.memoizedState,t]}function l7(t,e,c,n){return t={tag:t,create:e,destroy:c,deps:n,next:null},e=W1.updateQueue,e===null?(e={lastEffect:null,stores:null},W1.updateQueue=e,e.lastEffect=t.next=t):(c=e.lastEffect,c===null?e.lastEffect=t.next=t:(n=c.next,c.next=t,t.next=n,e.lastEffect=t)),t}function Cz(){return k3().memoizedState}function Mc(t,e,c,n){var a=r4();W1.flags|=t,a.memoizedState=l7(1|e,c,void 0,n===void 0?null:n)}function l9(t,e,c,n){var a=k3();n=n===void 0?null:n;var r=void 0;if(l2!==null){var i=l2.memoizedState;if(r=i.destroy,n!==null&&Po(n,i.deps)){a.memoizedState=l7(e,c,r,n);return}}W1.flags|=t,a.memoizedState=l7(1|e,c,r,n)}function Nd(t,e){return Mc(8390656,8,t,e)}function Fo(t,e){return l9(2048,8,t,e)}function Hz(t,e){return l9(4,2,t,e)}function Mz(t,e){return l9(4,4,t,e)}function Vz(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yz(t,e,c){return c=c!=null?c.concat([t]):null,l9(4,4,Vz.bind(null,e,t),c)}function Bo(){}function _z(t,e){var c=k3();e=e===void 0?null:e;var n=c.memoizedState;return n!==null&&e!==null&&Po(e,n[1])?n[0]:(c.memoizedState=[t,e],t)}function Lz(t,e){var c=k3();e=e===void 0?null:e;var n=c.memoizedState;return n!==null&&e!==null&&Po(e,n[1])?n[0]:(t=t(),c.memoizedState=[t,e],t)}function wz(t,e,c){return E0&21?(t4(c,e)||(c=Eg(),W1.lanes|=c,T0|=c,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,c3=!0),t.memoizedState=c)}function lP(t,e){var c=S1;S1=c!==0&&4>c?c:4,t(!0);var n=hr.transition;hr.transition={};try{t(!1),e()}finally{S1=c,hr.transition=n}}function xz(){return k3().memoizedState}function fP(t,e,c){var n=I6(t);if(c={lane:n,action:c,hasEagerState:!1,eagerState:null,next:null},Sz(t))Nz(e,c);else if(c=lz(t,e,c,n),c!==null){var a=X2();Z3(c,t,n,a),bz(c,e,n)}}function uP(t,e,c){var n=I6(t),a={lane:n,action:c,hasEagerState:!1,eagerState:null,next:null};if(Sz(t))Nz(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,s=r(i,c);if(a.hasEagerState=!0,a.eagerState=s,t4(s,i)){var o=e.interleaved;o===null?(a.next=a,To(e)):(a.next=o.next,o.next=a),e.interleaved=a;return}}catch{}finally{}c=lz(t,e,a,n),c!==null&&(a=X2(),Z3(c,t,n,a),bz(c,e,n))}}function Sz(t){var e=t.alternate;return t===W1||e!==null&&e===W1}function Nz(t,e){b5=cn=!0;var c=t.pending;c===null?e.next=e:(e.next=c.next,c.next=e),t.pending=e}function bz(t,e,c){if(c&4194240){var n=e.lanes;n&=t.pendingLanes,c|=n,e.lanes=c,zo(t,c)}}var nn={readContext:T3,useCallback:P2,useContext:P2,useEffect:P2,useImperativeHandle:P2,useInsertionEffect:P2,useLayoutEffect:P2,useMemo:P2,useReducer:P2,useRef:P2,useState:P2,useDebugValue:P2,useDeferredValue:P2,useTransition:P2,useMutableSource:P2,useSyncExternalStore:P2,useId:P2,unstable_isNewReconciler:!1},hP={readContext:T3,useCallback:function(t,e){return r4().memoizedState=[t,e===void 0?null:e],t},useContext:T3,useEffect:Nd,useImperativeHandle:function(t,e,c){return c=c!=null?c.concat([t]):null,Mc(4194308,4,Vz.bind(null,e,t),c)},useLayoutEffect:function(t,e){return Mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mc(4,2,t,e)},useMemo:function(t,e){var c=r4();return e=e===void 0?null:e,t=t(),c.memoizedState=[t,e],t},useReducer:function(t,e,c){var n=r4();return e=c!==void 0?c(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=fP.bind(null,W1,t),[n.memoizedState,t]},useRef:function(t){var e=r4();return t={current:t},e.memoizedState=t},useState:Sd,useDebugValue:Bo,useDeferredValue:function(t){return r4().memoizedState=t},useTransition:function(){var t=Sd(!1),e=t[0];return t=lP.bind(null,t[1]),r4().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,c){var n=W1,a=r4();if(U1){if(c===void 0)throw Error(B(407));c=c()}else{if(c=e(),V2===null)throw Error(B(349));E0&30||mz(n,e,c)}a.memoizedState=c;var r={value:c,getSnapshot:e};return a.queue=r,Nd(vz.bind(null,n,r,t),[t]),n.flags|=2048,l7(9,pz.bind(null,n,r,c,e),void 0,null),c},useId:function(){var t=r4(),e=V2.identifierPrefix;if(U1){var c=N4,n=S4;c=(n&~(1<<32-X3(n)-1)).toString(32)+c,e=":"+e+"R"+c,c=s7++,0<c&&(e+="H"+c.toString(32)),e+=":"}else c=oP++,e=":"+e+"r"+c.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dP={readContext:T3,useCallback:_z,useContext:T3,useEffect:Fo,useImperativeHandle:yz,useInsertionEffect:Hz,useLayoutEffect:Mz,useMemo:Lz,useReducer:dr,useRef:Cz,useState:function(){return dr(o7)},useDebugValue:Bo,useDeferredValue:function(t){var e=k3();return wz(e,l2.memoizedState,t)},useTransition:function(){var t=dr(o7)[0],e=k3().memoizedState;return[t,e]},useMutableSource:hz,useSyncExternalStore:dz,useId:xz,unstable_isNewReconciler:!1},mP={readContext:T3,useCallback:_z,useContext:T3,useEffect:Fo,useImperativeHandle:yz,useInsertionEffect:Hz,useLayoutEffect:Mz,useMemo:Lz,useReducer:mr,useRef:Cz,useState:function(){return mr(o7)},useDebugValue:Bo,useDeferredValue:function(t){var e=k3();return l2===null?e.memoizedState=t:wz(e,l2.memoizedState,t)},useTransition:function(){var t=mr(o7)[0],e=k3().memoizedState;return[t,e]},useMutableSource:hz,useSyncExternalStore:dz,useId:xz,unstable_isNewReconciler:!1};function B3(t,e){if(t&&t.defaultProps){e=K1({},e),t=t.defaultProps;for(var c in t)e[c]===void 0&&(e[c]=t[c]);return e}return e}function Ei(t,e,c,n){e=t.memoizedState,c=c(n,e),c=c==null?e:K1({},e,c),t.memoizedState=c,t.lanes===0&&(t.updateQueue.baseState=c)}var f9={isMounted:function(t){return(t=t._reactInternals)?Q0(t)===t:!1},enqueueSetState:function(t,e,c){t=t._reactInternals;var n=X2(),a=I6(t),r=A4(n,a);r.payload=e,c!=null&&(r.callback=c),e=k6(t,r,a),e!==null&&(Z3(e,t,a,n),Cc(e,t,a))},enqueueReplaceState:function(t,e,c){t=t._reactInternals;var n=X2(),a=I6(t),r=A4(n,a);r.tag=1,r.payload=e,c!=null&&(r.callback=c),e=k6(t,r,a),e!==null&&(Z3(e,t,a,n),Cc(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var c=X2(),n=I6(t),a=A4(c,n);a.tag=2,e!=null&&(a.callback=e),e=k6(t,a,n),e!==null&&(Z3(e,t,n,c),Cc(e,t,n))}};function bd(t,e,c,n,a,r,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,r,i):e.prototype&&e.prototype.isPureReactComponent?!t7(c,n)||!t7(a,r):!0}function Ez(t,e,c){var n=!1,a=$6,r=e.contextType;return typeof r=="object"&&r!==null?r=T3(r):(a=i3(e)?N0:q2.current,n=e.contextTypes,r=(n=n!=null)?Xe(t,a):$6),e=new e(c,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=f9,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=r),e}function Ed(t,e,c,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(c,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(c,n),e.state!==t&&f9.enqueueReplaceState(e,e.state,null)}function Ti(t,e,c,n){var a=t.stateNode;a.props=c,a.state=t.memoizedState,a.refs={},ko(t);var r=e.contextType;typeof r=="object"&&r!==null?a.context=T3(r):(r=i3(e)?N0:q2.current,a.context=Xe(t,r)),a.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Ei(t,e,r,c),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&f9.enqueueReplaceState(a,a.state,null),en(t,c,a,n),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function t8(t,e){try{var c="",n=e;do c+=UI(n),n=n.return;while(n);var a=c}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:a,digest:null}}function pr(t,e,c){return{value:t,source:null,stack:c??null,digest:e??null}}function ki(t,e){try{console.error(e.value)}catch(c){setTimeout(function(){throw c})}}var pP=typeof WeakMap=="function"?WeakMap:Map;function Tz(t,e,c){c=A4(-1,c),c.tag=3,c.payload={element:null};var n=e.value;return c.callback=function(){rn||(rn=!0,ji=n),ki(t,e)},c}function kz(t,e,c){c=A4(-1,c),c.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var a=e.value;c.payload=function(){return n(a)},c.callback=function(){ki(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(c.callback=function(){ki(t,e),typeof n!="function"&&(A6===null?A6=new Set([this]):A6.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),c}function Td(t,e,c){var n=t.pingCache;if(n===null){n=t.pingCache=new pP;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(c)||(a.add(c),t=NP.bind(null,t,e,c),e.then(t,t))}function kd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ad(t,e,c,n,a){return t.mode&1?(t.flags|=65536,t.lanes=a,t):(t===e?t.flags|=65536:(t.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(e=A4(-1,1),e.tag=2,k6(c,e,1))),c.lanes|=1),t)}var vP=Z4.ReactCurrentOwner,c3=!1;function Q2(t,e,c,n){e.child=t===null?oz(e,null,c,n):Je(e,t.child,c,n)}function Id(t,e,c,n,a){c=c.render;var r=e.ref;return Fe(e,a),n=Do(t,e,c,n,r,a),c=Oo(),t!==null&&!c3?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,j4(t,e,a)):(U1&&c&&wo(e),e.flags|=1,Q2(t,e,n,a),e.child)}function Rd(t,e,c,n,a){if(t===null){var r=c.type;return typeof r=="function"&&!Qo(r)&&r.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(e.tag=15,e.type=r,Az(t,e,r,n,a)):(t=Lc(c.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&a)){var i=r.memoizedProps;if(c=c.compare,c=c!==null?c:t7,c(i,n)&&t.ref===e.ref)return j4(t,e,a)}return e.flags|=1,t=R6(r,n),t.ref=e.ref,t.return=e,e.child=t}function Az(t,e,c,n,a){if(t!==null){var r=t.memoizedProps;if(t7(r,n)&&t.ref===e.ref)if(c3=!1,e.pendingProps=n=r,(t.lanes&a)!==0)t.flags&131072&&(c3=!0);else return e.lanes=t.lanes,j4(t,e,a)}return Ai(t,e,c,n,a)}function Iz(t,e,c){var n=e.pendingProps,a=n.children,r=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},A1(be,p3),p3|=c;else{if(!(c&1073741824))return t=r!==null?r.baseLanes|c:c,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,A1(be,p3),p3|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:c,A1(be,p3),p3|=n}else r!==null?(n=r.baseLanes|c,e.memoizedState=null):n=c,A1(be,p3),p3|=n;return Q2(t,e,a,c),e.child}function Rz(t,e){var c=e.ref;(t===null&&c!==null||t!==null&&t.ref!==c)&&(e.flags|=512,e.flags|=2097152)}function Ai(t,e,c,n,a){var r=i3(c)?N0:q2.current;return r=Xe(e,r),Fe(e,a),c=Do(t,e,c,n,r,a),n=Oo(),t!==null&&!c3?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,j4(t,e,a)):(U1&&n&&wo(e),e.flags|=1,Q2(t,e,c,a),e.child)}function Pd(t,e,c,n,a){if(i3(c)){var r=!0;Qc(e)}else r=!1;if(Fe(e,a),e.stateNode===null)Vc(t,e),Ez(e,c,n),Ti(e,c,n,a),n=!0;else if(t===null){var i=e.stateNode,s=e.memoizedProps;i.props=s;var o=i.context,f=c.contextType;typeof f=="object"&&f!==null?f=T3(f):(f=i3(c)?N0:q2.current,f=Xe(e,f));var u=c.getDerivedStateFromProps,h=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||o!==f)&&Ed(e,i,n,f),z6=!1;var m=e.memoizedState;i.state=m,en(e,n,i,a),o=e.memoizedState,s!==n||m!==o||r3.current||z6?(typeof u=="function"&&(Ei(e,c,u,n),o=e.memoizedState),(s=z6||bd(e,c,s,n,m,o,f))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),i.props=n,i.state=o,i.context=f,n=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{i=e.stateNode,fz(t,e),s=e.memoizedProps,f=e.type===e.elementType?s:B3(e.type,s),i.props=f,h=e.pendingProps,m=i.context,o=c.contextType,typeof o=="object"&&o!==null?o=T3(o):(o=i3(c)?N0:q2.current,o=Xe(e,o));var v=c.getDerivedStateFromProps;(u=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==o)&&Ed(e,i,n,o),z6=!1,m=e.memoizedState,i.state=m,en(e,n,i,a);var H=e.memoizedState;s!==h||m!==H||r3.current||z6?(typeof v=="function"&&(Ei(e,c,v,n),H=e.memoizedState),(f=z6||bd(e,c,f,n,m,H,o)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,H,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,H,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=H),i.props=n,i.state=H,i.context=o,n=f):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),n=!1)}return Ii(t,e,c,n,r,a)}function Ii(t,e,c,n,a,r){Rz(t,e);var i=(e.flags&128)!==0;if(!n&&!i)return a&&Vd(e,c,!1),j4(t,e,r);n=e.stateNode,vP.current=e;var s=i&&typeof c.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&i?(e.child=Je(e,t.child,null,r),e.child=Je(e,null,s,r)):Q2(t,e,s,r),e.memoizedState=n.state,a&&Vd(e,c,!0),e.child}function Pz(t){var e=t.stateNode;e.pendingContext?Md(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Md(t,e.context,!1),Ao(t,e.containerInfo)}function Dd(t,e,c,n,a){return Ze(),So(a),e.flags|=256,Q2(t,e,c,n),e.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function Pi(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dz(t,e,c){var n=e.pendingProps,a=q1.current,r=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(a&2)!==0),s?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),A1(q1,a&1),t===null)return Ni(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=n.children,t=n.fallback,r?(n=e.mode,r=e.child,i={mode:"hidden",children:i},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=d9(i,n,0,null),t=w0(t,n,c,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=Pi(c),e.memoizedState=Ri,t):Uo(e,i));if(a=t.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return gP(t,e,i,n,s,a,c);if(r){r=n.fallback,i=e.mode,a=t.child,s=a.sibling;var o={mode:"hidden",children:n.children};return!(i&1)&&e.child!==a?(n=e.child,n.childLanes=0,n.pendingProps=o,e.deletions=null):(n=R6(a,o),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?r=R6(s,r):(r=w0(r,i,c,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,n=r,r=e.child,i=t.child.memoizedState,i=i===null?Pi(c):{baseLanes:i.baseLanes|c,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=t.childLanes&~c,e.memoizedState=Ri,n}return r=t.child,t=r.sibling,n=R6(r,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=c),n.return=e,n.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=n,e.memoizedState=null,n}function Uo(t,e){return e=d9({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $t(t,e,c,n){return n!==null&&So(n),Je(e,t.child,null,c),t=Uo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gP(t,e,c,n,a,r,i){if(c)return e.flags&256?(e.flags&=-257,n=pr(Error(B(422))),$t(t,e,i,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=n.fallback,a=e.mode,n=d9({mode:"visible",children:n.children},a,0,null),r=w0(r,a,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,e.mode&1&&Je(e,t.child,null,i),e.child.memoizedState=Pi(i),e.memoizedState=Ri,r);if(!(e.mode&1))return $t(t,e,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,r=Error(B(419)),n=pr(r,n,void 0),$t(t,e,i,n)}if(s=(i&t.childLanes)!==0,c3||s){if(n=V2,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,U4(t,a),Z3(n,t,a,-1))}return Ko(),n=pr(Error(B(421))),$t(t,e,i,n)}return a.data==="$?"?(e.flags|=128,e.child=t.child,e=bP.bind(null,t),a._reactRetry=e,null):(t=r.treeContext,g3=T6(a.nextSibling),C3=e,U1=!0,j3=null,t!==null&&(w3[x3++]=S4,w3[x3++]=N4,w3[x3++]=b0,S4=t.id,N4=t.overflow,b0=e),e=Uo(e,n.children),e.flags|=4096,e)}function Od(t,e,c){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),bi(t.return,e,c)}function vr(t,e,c,n,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:c,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=c,r.tailMode=a)}function Oz(t,e,c){var n=e.pendingProps,a=n.revealOrder,r=n.tail;if(Q2(t,e,n.children,c),n=q1.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Od(t,c,e);else if(t.tag===19)Od(t,c,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(A1(q1,n),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(c=e.child,a=null;c!==null;)t=c.alternate,t!==null&&tn(t)===null&&(a=c),c=c.sibling;c=a,c===null?(a=e.child,e.child=null):(a=c.sibling,c.sibling=null),vr(e,!1,a,c,r);break;case"backwards":for(c=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&tn(t)===null){e.child=a;break}t=a.sibling,a.sibling=c,c=a,a=t}vr(e,!0,c,null,r);break;case"together":vr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function j4(t,e,c){if(t!==null&&(e.dependencies=t.dependencies),T0|=e.lanes,!(c&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,c=R6(t,t.pendingProps),e.child=c,c.return=e;t.sibling!==null;)t=t.sibling,c=c.sibling=R6(t,t.pendingProps),c.return=e;c.sibling=null}return e.child}function zP(t,e,c){switch(e.tag){case 3:Pz(e),Ze();break;case 5:uz(e);break;case 1:i3(e.type)&&Qc(e);break;case 4:Ao(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,a=e.memoizedProps.value;A1(Zc,n._currentValue),n._currentValue=a;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(A1(q1,q1.current&1),e.flags|=128,null):c&e.child.childLanes?Dz(t,e,c):(A1(q1,q1.current&1),t=j4(t,e,c),t!==null?t.sibling:null);A1(q1,q1.current&1);break;case 19:if(n=(c&e.childLanes)!==0,t.flags&128){if(n)return Oz(t,e,c);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),A1(q1,q1.current),n)break;return null;case 22:case 23:return e.lanes=0,Iz(t,e,c)}return j4(t,e,c)}var Fz,Di,Bz,Uz;Fz=function(t,e){for(var c=e.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break;for(;c.sibling===null;){if(c.return===null||c.return===e)return;c=c.return}c.sibling.return=c.return,c=c.sibling}};Di=function(){};Bz=function(t,e,c,n){var a=t.memoizedProps;if(a!==n){t=e.stateNode,g0(f4.current);var r=null;switch(c){case"input":a=ii(t,a),n=ii(t,n),r=[];break;case"select":a=K1({},a,{value:void 0}),n=K1({},n,{value:void 0}),r=[];break;case"textarea":a=li(t,a),n=li(t,n),r=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Gc)}ui(c,n);var i;c=null;for(f in a)if(!n.hasOwnProperty(f)&&a.hasOwnProperty(f)&&a[f]!=null)if(f==="style"){var s=a[f];for(i in s)s.hasOwnProperty(i)&&(c||(c={}),c[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(K5.hasOwnProperty(f)?r||(r=[]):(r=r||[]).push(f,null));for(f in n){var o=n[f];if(s=a!=null?a[f]:void 0,n.hasOwnProperty(f)&&o!==s&&(o!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||(c||(c={}),c[i]="");for(i in o)o.hasOwnProperty(i)&&s[i]!==o[i]&&(c||(c={}),c[i]=o[i])}else c||(r||(r=[]),r.push(f,c)),c=o;else f==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,s=s?s.__html:void 0,o!=null&&s!==o&&(r=r||[]).push(f,o)):f==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(f,""+o):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(K5.hasOwnProperty(f)?(o!=null&&f==="onScroll"&&P1("scroll",t),r||s===o||(r=[])):(r=r||[]).push(f,o))}c&&(r=r||[]).push("style",c);var f=r;(e.updateQueue=f)&&(e.flags|=4)}};Uz=function(t,e,c,n){c!==n&&(e.flags|=4)};function n5(t,e){if(!U1)switch(t.tailMode){case"hidden":e=t.tail;for(var c=null;e!==null;)e.alternate!==null&&(c=e),e=e.sibling;c===null?t.tail=null:c.sibling=null;break;case"collapsed":c=t.tail;for(var n=null;c!==null;)c.alternate!==null&&(n=c),c=c.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function D2(t){var e=t.alternate!==null&&t.alternate.child===t.child,c=0,n=0;if(e)for(var a=t.child;a!==null;)c|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)c|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=c,e}function CP(t,e,c){var n=e.pendingProps;switch(xo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return D2(e),null;case 1:return i3(e.type)&&Kc(),D2(e),null;case 3:return n=e.stateNode,e8(),F1(r3),F1(q2),Ro(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ut(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,j3!==null&&(Wi(j3),j3=null))),Di(t,e),D2(e),null;case 5:Io(e);var a=g0(i7.current);if(c=e.type,t!==null&&e.stateNode!=null)Bz(t,e,c,n,a),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(B(166));return D2(e),null}if(t=g0(f4.current),Ut(e)){n=e.stateNode,c=e.type;var r=e.memoizedProps;switch(n[s4]=e,n[a7]=r,t=(e.mode&1)!==0,c){case"dialog":P1("cancel",n),P1("close",n);break;case"iframe":case"object":case"embed":P1("load",n);break;case"video":case"audio":for(a=0;a<p5.length;a++)P1(p5[a],n);break;case"source":P1("error",n);break;case"img":case"image":case"link":P1("error",n),P1("load",n);break;case"details":P1("toggle",n);break;case"input":Kh(n,r),P1("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},P1("invalid",n);break;case"textarea":Yh(n,r),P1("invalid",n)}ui(c,r),a=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?n.textContent!==s&&(r.suppressHydrationWarning!==!0&&Bt(n.textContent,s,t),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&Bt(n.textContent,s,t),a=["children",""+s]):K5.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&P1("scroll",n)}switch(c){case"input":kt(n),Qh(n,r,!0);break;case"textarea":kt(n),Xh(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=Gc)}n=a,e.updateQueue=n,n!==null&&(e.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vg(c)),t==="http://www.w3.org/1999/xhtml"?c==="script"?(t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=i.createElement(c,{is:n.is}):(t=i.createElement(c),c==="select"&&(i=t,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):t=i.createElementNS(t,c),t[s4]=e,t[a7]=n,Fz(t,e,!1,!1),e.stateNode=t;e:{switch(i=hi(c,n),c){case"dialog":P1("cancel",t),P1("close",t),a=n;break;case"iframe":case"object":case"embed":P1("load",t),a=n;break;case"video":case"audio":for(a=0;a<p5.length;a++)P1(p5[a],t);a=n;break;case"source":P1("error",t),a=n;break;case"img":case"image":case"link":P1("error",t),P1("load",t),a=n;break;case"details":P1("toggle",t),a=n;break;case"input":Kh(t,n),a=ii(t,n),P1("invalid",t);break;case"option":a=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},a=K1({},n,{value:void 0}),P1("invalid",t);break;case"textarea":Yh(t,n),a=li(t,n),P1("invalid",t);break;default:a=n}ui(c,a),s=a;for(r in s)if(s.hasOwnProperty(r)){var o=s[r];r==="style"?Cg(t,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&gg(t,o)):r==="children"?typeof o=="string"?(c!=="textarea"||o!=="")&&Q5(t,o):typeof o=="number"&&Q5(t,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(K5.hasOwnProperty(r)?o!=null&&r==="onScroll"&&P1("scroll",t):o!=null&&uo(t,r,o,i))}switch(c){case"input":kt(t),Qh(t,n,!1);break;case"textarea":kt(t),Xh(t);break;case"option":n.value!=null&&t.setAttribute("value",""+j6(n.value));break;case"select":t.multiple=!!n.multiple,r=n.value,r!=null?Re(t,!!n.multiple,r,!1):n.defaultValue!=null&&Re(t,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=Gc)}switch(c){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return D2(e),null;case 6:if(t&&e.stateNode!=null)Uz(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(B(166));if(c=g0(i7.current),g0(f4.current),Ut(e)){if(n=e.stateNode,c=e.memoizedProps,n[s4]=e,(r=n.nodeValue!==c)&&(t=C3,t!==null))switch(t.tag){case 3:Bt(n.nodeValue,c,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bt(n.nodeValue,c,(t.mode&1)!==0)}r&&(e.flags|=4)}else n=(c.nodeType===9?c:c.ownerDocument).createTextNode(n),n[s4]=e,e.stateNode=n}return D2(e),null;case 13:if(F1(q1),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(U1&&g3!==null&&e.mode&1&&!(e.flags&128))iz(),Ze(),e.flags|=98560,r=!1;else if(r=Ut(e),n!==null&&n.dehydrated!==null){if(t===null){if(!r)throw Error(B(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(B(317));r[s4]=e}else Ze(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;D2(e),r=!1}else j3!==null&&(Wi(j3),j3=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=c,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||q1.current&1?h2===0&&(h2=3):Ko())),e.updateQueue!==null&&(e.flags|=4),D2(e),null);case 4:return e8(),Di(t,e),t===null&&c7(e.stateNode.containerInfo),D2(e),null;case 10:return Eo(e.type._context),D2(e),null;case 17:return i3(e.type)&&Kc(),D2(e),null;case 19:if(F1(q1),r=e.memoizedState,r===null)return D2(e),null;if(n=(e.flags&128)!==0,i=r.rendering,i===null)if(n)n5(r,!1);else{if(h2!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=tn(t),i!==null){for(e.flags|=128,n5(r,!1),n=i.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=c,c=e.child;c!==null;)r=c,t=n,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,t=i.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),c=c.sibling;return A1(q1,q1.current&1|2),e.child}t=t.sibling}r.tail!==null&&e2()>c8&&(e.flags|=128,n=!0,n5(r,!1),e.lanes=4194304)}else{if(!n)if(t=tn(i),t!==null){if(e.flags|=128,n=!0,c=t.updateQueue,c!==null&&(e.updateQueue=c,e.flags|=4),n5(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!U1)return D2(e),null}else 2*e2()-r.renderingStartTime>c8&&c!==1073741824&&(e.flags|=128,n=!0,n5(r,!1),e.lanes=4194304);r.isBackwards?(i.sibling=e.child,e.child=i):(c=r.last,c!==null?c.sibling=i:e.child=i,r.last=i)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=e2(),e.sibling=null,c=q1.current,A1(q1,n?c&1|2:c&1),e):(D2(e),null);case 22:case 23:return Go(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?p3&1073741824&&(D2(e),e.subtreeFlags&6&&(e.flags|=8192)):D2(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function HP(t,e){switch(xo(e),e.tag){case 1:return i3(e.type)&&Kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return e8(),F1(r3),F1(q2),Ro(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Io(e),null;case 13:if(F1(q1),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ze()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return F1(q1),null;case 4:return e8(),null;case 10:return Eo(e.type._context),null;case 22:case 23:return Go(),null;case 24:return null;default:return null}}var qt=!1,U2=!1,MP=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ne(t,e){var c=t.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(n){Y1(t,e,n)}else c.current=null}function Oi(t,e,c){try{c()}catch(n){Y1(t,e,n)}}var Fd=!1;function VP(t,e){if(Vi=$c,t=Gg(),Lo(t)){if("selectionStart"in t)var c={start:t.selectionStart,end:t.selectionEnd};else e:{c=(c=t.ownerDocument)&&c.defaultView||window;var n=c.getSelection&&c.getSelection();if(n&&n.rangeCount!==0){c=n.anchorNode;var a=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{c.nodeType,r.nodeType}catch{c=null;break e}var i=0,s=-1,o=-1,f=0,u=0,h=t,m=null;t:for(;;){for(var v;h!==c||a!==0&&h.nodeType!==3||(s=i+a),h!==r||n!==0&&h.nodeType!==3||(o=i+n),h.nodeType===3&&(i+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===t)break t;if(m===c&&++f===a&&(s=i),m===r&&++u===n&&(o=i),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}c=s===-1||o===-1?null:{start:s,end:o}}else c=null}c=c||{start:0,end:0}}else c=null;for(yi={focusedElem:t,selectionRange:c},$c=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var H=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var w=H.memoizedProps,S=H.memoizedState,M=e.stateNode,C=M.getSnapshotBeforeUpdate(e.elementType===e.type?w:B3(e.type,w),S);M.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var V=e.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(E){Y1(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return H=Fd,Fd=!1,H}function E5(t,e,c){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var r=a.destroy;a.destroy=void 0,r!==void 0&&Oi(e,c,r)}a=a.next}while(a!==n)}}function u9(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var c=e=e.next;do{if((c.tag&t)===t){var n=c.create;c.destroy=n()}c=c.next}while(c!==e)}}function Fi(t){var e=t.ref;if(e!==null){var c=t.stateNode;switch(t.tag){case 5:t=c;break;default:t=c}typeof e=="function"?e(t):e.current=t}}function jz(t){var e=t.alternate;e!==null&&(t.alternate=null,jz(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[s4],delete e[a7],delete e[wi],delete e[aP],delete e[rP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $z(t){return t.tag===5||t.tag===3||t.tag===4}function Bd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$z(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bi(t,e,c){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?c.nodeType===8?c.parentNode.insertBefore(t,e):c.insertBefore(t,e):(c.nodeType===8?(e=c.parentNode,e.insertBefore(t,c)):(e=c,e.appendChild(t)),c=c._reactRootContainer,c!=null||e.onclick!==null||(e.onclick=Gc));else if(n!==4&&(t=t.child,t!==null))for(Bi(t,e,c),t=t.sibling;t!==null;)Bi(t,e,c),t=t.sibling}function Ui(t,e,c){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?c.insertBefore(t,e):c.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Ui(t,e,c),t=t.sibling;t!==null;)Ui(t,e,c),t=t.sibling}var S2=null,U3=!1;function u6(t,e,c){for(c=c.child;c!==null;)qz(t,e,c),c=c.sibling}function qz(t,e,c){if(l4&&typeof l4.onCommitFiberUnmount=="function")try{l4.onCommitFiberUnmount(n9,c)}catch{}switch(c.tag){case 5:U2||Ne(c,e);case 6:var n=S2,a=U3;S2=null,u6(t,e,c),S2=n,U3=a,S2!==null&&(U3?(t=S2,c=c.stateNode,t.nodeType===8?t.parentNode.removeChild(c):t.removeChild(c)):S2.removeChild(c.stateNode));break;case 18:S2!==null&&(U3?(t=S2,c=c.stateNode,t.nodeType===8?lr(t.parentNode,c):t.nodeType===1&&lr(t,c),J5(t)):lr(S2,c.stateNode));break;case 4:n=S2,a=U3,S2=c.stateNode.containerInfo,U3=!0,u6(t,e,c),S2=n,U3=a;break;case 0:case 11:case 14:case 15:if(!U2&&(n=c.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var r=a,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&Oi(c,e,i),a=a.next}while(a!==n)}u6(t,e,c);break;case 1:if(!U2&&(Ne(c,e),n=c.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=c.memoizedProps,n.state=c.memoizedState,n.componentWillUnmount()}catch(s){Y1(c,e,s)}u6(t,e,c);break;case 21:u6(t,e,c);break;case 22:c.mode&1?(U2=(n=U2)||c.memoizedState!==null,u6(t,e,c),U2=n):u6(t,e,c);break;default:u6(t,e,c)}}function Ud(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var c=t.stateNode;c===null&&(c=t.stateNode=new MP),e.forEach(function(n){var a=EP.bind(null,t,n);c.has(n)||(c.add(n),n.then(a,a))})}}function F3(t,e){var c=e.deletions;if(c!==null)for(var n=0;n<c.length;n++){var a=c[n];try{var r=t,i=e,s=i;e:for(;s!==null;){switch(s.tag){case 5:S2=s.stateNode,U3=!1;break e;case 3:S2=s.stateNode.containerInfo,U3=!0;break e;case 4:S2=s.stateNode.containerInfo,U3=!0;break e}s=s.return}if(S2===null)throw Error(B(160));qz(r,i,a),S2=null,U3=!1;var o=a.alternate;o!==null&&(o.return=null),a.return=null}catch(f){Y1(a,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wz(e,t),e=e.sibling}function Wz(t,e){var c=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(F3(e,t),a4(t),n&4){try{E5(3,t,t.return),u9(3,t)}catch(w){Y1(t,t.return,w)}try{E5(5,t,t.return)}catch(w){Y1(t,t.return,w)}}break;case 1:F3(e,t),a4(t),n&512&&c!==null&&Ne(c,c.return);break;case 5:if(F3(e,t),a4(t),n&512&&c!==null&&Ne(c,c.return),t.flags&32){var a=t.stateNode;try{Q5(a,"")}catch(w){Y1(t,t.return,w)}}if(n&4&&(a=t.stateNode,a!=null)){var r=t.memoizedProps,i=c!==null?c.memoizedProps:r,s=t.type,o=t.updateQueue;if(t.updateQueue=null,o!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&mg(a,r),hi(s,i);var f=hi(s,r);for(i=0;i<o.length;i+=2){var u=o[i],h=o[i+1];u==="style"?Cg(a,h):u==="dangerouslySetInnerHTML"?gg(a,h):u==="children"?Q5(a,h):uo(a,u,h,f)}switch(s){case"input":si(a,r);break;case"textarea":pg(a,r);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?Re(a,!!r.multiple,v,!1):m!==!!r.multiple&&(r.defaultValue!=null?Re(a,!!r.multiple,r.defaultValue,!0):Re(a,!!r.multiple,r.multiple?[]:"",!1))}a[a7]=r}catch(w){Y1(t,t.return,w)}}break;case 6:if(F3(e,t),a4(t),n&4){if(t.stateNode===null)throw Error(B(162));a=t.stateNode,r=t.memoizedProps;try{a.nodeValue=r}catch(w){Y1(t,t.return,w)}}break;case 3:if(F3(e,t),a4(t),n&4&&c!==null&&c.memoizedState.isDehydrated)try{J5(e.containerInfo)}catch(w){Y1(t,t.return,w)}break;case 4:F3(e,t),a4(t);break;case 13:F3(e,t),a4(t),a=t.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(qo=e2())),n&4&&Ud(t);break;case 22:if(u=c!==null&&c.memoizedState!==null,t.mode&1?(U2=(f=U2)||u,F3(e,t),U2=f):F3(e,t),a4(t),n&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!u&&t.mode&1)for(q=t,u=t.child;u!==null;){for(h=q=u;q!==null;){switch(m=q,v=m.child,m.tag){case 0:case 11:case 14:case 15:E5(4,m,m.return);break;case 1:Ne(m,m.return);var H=m.stateNode;if(typeof H.componentWillUnmount=="function"){n=m,c=m.return;try{e=n,H.props=e.memoizedProps,H.state=e.memoizedState,H.componentWillUnmount()}catch(w){Y1(n,c,w)}}break;case 5:Ne(m,m.return);break;case 22:if(m.memoizedState!==null){$d(h);continue}}v!==null?(v.return=m,q=v):$d(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{a=h.stateNode,f?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=h.stateNode,o=h.memoizedProps.style,i=o!=null&&o.hasOwnProperty("display")?o.display:null,s.style.display=zg("display",i))}catch(w){Y1(t,t.return,w)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(w){Y1(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:F3(e,t),a4(t),n&4&&Ud(t);break;case 21:break;default:F3(e,t),a4(t)}}function a4(t){var e=t.flags;if(e&2){try{e:{for(var c=t.return;c!==null;){if($z(c)){var n=c;break e}c=c.return}throw Error(B(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Q5(a,""),n.flags&=-33);var r=Bd(t);Ui(t,r,a);break;case 3:case 4:var i=n.stateNode.containerInfo,s=Bd(t);Bi(t,s,i);break;default:throw Error(B(161))}}catch(o){Y1(t,t.return,o)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yP(t,e,c){q=t,Gz(t)}function Gz(t,e,c){for(var n=(t.mode&1)!==0;q!==null;){var a=q,r=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||qt;if(!i){var s=a.alternate,o=s!==null&&s.memoizedState!==null||U2;s=qt;var f=U2;if(qt=i,(U2=o)&&!f)for(q=a;q!==null;)i=q,o=i.child,i.tag===22&&i.memoizedState!==null?qd(a):o!==null?(o.return=i,q=o):qd(a);for(;r!==null;)q=r,Gz(r),r=r.sibling;q=a,qt=s,U2=f}jd(t)}else a.subtreeFlags&8772&&r!==null?(r.return=a,q=r):jd(t)}}function jd(t){for(;q!==null;){var e=q;if(e.flags&8772){var c=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:U2||u9(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!U2)if(c===null)n.componentDidMount();else{var a=e.elementType===e.type?c.memoizedProps:B3(e.type,c.memoizedProps);n.componentDidUpdate(a,c.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&xd(e,r,n);break;case 3:var i=e.updateQueue;if(i!==null){if(c=null,e.child!==null)switch(e.child.tag){case 5:c=e.child.stateNode;break;case 1:c=e.child.stateNode}xd(e,i,c)}break;case 5:var s=e.stateNode;if(c===null&&e.flags&4){c=s;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break;case"img":o.src&&(c.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var u=f.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&J5(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}U2||e.flags&512&&Fi(e)}catch(m){Y1(e,e.return,m)}}if(e===t){q=null;break}if(c=e.sibling,c!==null){c.return=e.return,q=c;break}q=e.return}}function $d(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var c=e.sibling;if(c!==null){c.return=e.return,q=c;break}q=e.return}}function qd(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var c=e.return;try{u9(4,e)}catch(o){Y1(e,c,o)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var a=e.return;try{n.componentDidMount()}catch(o){Y1(e,a,o)}}var r=e.return;try{Fi(e)}catch(o){Y1(e,r,o)}break;case 5:var i=e.return;try{Fi(e)}catch(o){Y1(e,i,o)}}}catch(o){Y1(e,e.return,o)}if(e===t){q=null;break}var s=e.sibling;if(s!==null){s.return=e.return,q=s;break}q=e.return}}var _P=Math.ceil,an=Z4.ReactCurrentDispatcher,jo=Z4.ReactCurrentOwner,b3=Z4.ReactCurrentBatchConfig,y1=0,V2=null,i2=null,E2=0,p3=0,be=e0(0),h2=0,f7=null,T0=0,h9=0,$o=0,T5=null,e3=null,qo=0,c8=1/0,V4=null,rn=!1,ji=null,A6=null,Wt=!1,L6=null,sn=0,k5=0,$i=null,yc=-1,_c=0;function X2(){return y1&6?e2():yc!==-1?yc:yc=e2()}function I6(t){return t.mode&1?y1&2&&E2!==0?E2&-E2:sP.transition!==null?(_c===0&&(_c=Eg()),_c):(t=S1,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function Z3(t,e,c,n){if(50<k5)throw k5=0,$i=null,Error(B(185));O7(t,c,n),(!(y1&2)||t!==V2)&&(t===V2&&(!(y1&2)&&(h9|=c),h2===4&&M6(t,E2)),s3(t,n),c===1&&y1===0&&!(e.mode&1)&&(c8=e2()+500,o9&&t0()))}function s3(t,e){var c=t.callbackNode;sR(t,e);var n=jc(t,t===V2?E2:0);if(n===0)c!==null&&ed(c),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(c!=null&&ed(c),e===1)t.tag===0?iP(Wd.bind(null,t)):nz(Wd.bind(null,t)),cP(function(){!(y1&6)&&t0()}),c=null;else{switch(Tg(n)){case 1:c=go;break;case 4:c=Ng;break;case 16:c=Uc;break;case 536870912:c=bg;break;default:c=Uc}c=tC(c,Kz.bind(null,t))}t.callbackPriority=e,t.callbackNode=c}}function Kz(t,e){if(yc=-1,_c=0,y1&6)throw Error(B(327));var c=t.callbackNode;if(Be()&&t.callbackNode!==c)return null;var n=jc(t,t===V2?E2:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=on(t,n);else{e=n;var a=y1;y1|=2;var r=Yz();(V2!==t||E2!==e)&&(V4=null,c8=e2()+500,L0(t,e));do try{xP();break}catch(s){Qz(t,s)}while(!0);bo(),an.current=r,y1=a,i2!==null?e=0:(V2=null,E2=0,e=h2)}if(e!==0){if(e===2&&(a=gi(t),a!==0&&(n=a,e=qi(t,a))),e===1)throw c=f7,L0(t,0),M6(t,n),s3(t,e2()),c;if(e===6)M6(t,n);else{if(a=t.current.alternate,!(n&30)&&!LP(a)&&(e=on(t,n),e===2&&(r=gi(t),r!==0&&(n=r,e=qi(t,r))),e===1))throw c=f7,L0(t,0),M6(t,n),s3(t,e2()),c;switch(t.finishedWork=a,t.finishedLanes=n,e){case 0:case 1:throw Error(B(345));case 2:u0(t,e3,V4);break;case 3:if(M6(t,n),(n&130023424)===n&&(e=qo+500-e2(),10<e)){if(jc(t,0)!==0)break;if(a=t.suspendedLanes,(a&n)!==n){X2(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=Li(u0.bind(null,t,e3,V4),e);break}u0(t,e3,V4);break;case 4:if(M6(t,n),(n&4194240)===n)break;for(e=t.eventTimes,a=-1;0<n;){var i=31-X3(n);r=1<<i,i=e[i],i>a&&(a=i),n&=~r}if(n=a,n=e2()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*_P(n/1960))-n,10<n){t.timeoutHandle=Li(u0.bind(null,t,e3,V4),n);break}u0(t,e3,V4);break;case 5:u0(t,e3,V4);break;default:throw Error(B(329))}}}return s3(t,e2()),t.callbackNode===c?Kz.bind(null,t):null}function qi(t,e){var c=T5;return t.current.memoizedState.isDehydrated&&(L0(t,e).flags|=256),t=on(t,e),t!==2&&(e=e3,e3=c,e!==null&&Wi(e)),t}function Wi(t){e3===null?e3=t:e3.push.apply(e3,t)}function LP(t){for(var e=t;;){if(e.flags&16384){var c=e.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var n=0;n<c.length;n++){var a=c[n],r=a.getSnapshot;a=a.value;try{if(!t4(r(),a))return!1}catch{return!1}}}if(c=e.child,e.subtreeFlags&16384&&c!==null)c.return=e,e=c;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function M6(t,e){for(e&=~$o,e&=~h9,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var c=31-X3(e),n=1<<c;t[c]=-1,e&=~n}}function Wd(t){if(y1&6)throw Error(B(327));Be();var e=jc(t,0);if(!(e&1))return s3(t,e2()),null;var c=on(t,e);if(t.tag!==0&&c===2){var n=gi(t);n!==0&&(e=n,c=qi(t,n))}if(c===1)throw c=f7,L0(t,0),M6(t,e),s3(t,e2()),c;if(c===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,u0(t,e3,V4),s3(t,e2()),null}function Wo(t,e){var c=y1;y1|=1;try{return t(e)}finally{y1=c,y1===0&&(c8=e2()+500,o9&&t0())}}function k0(t){L6!==null&&L6.tag===0&&!(y1&6)&&Be();var e=y1;y1|=1;var c=b3.transition,n=S1;try{if(b3.transition=null,S1=1,t)return t()}finally{S1=n,b3.transition=c,y1=e,!(y1&6)&&t0()}}function Go(){p3=be.current,F1(be)}function L0(t,e){t.finishedWork=null,t.finishedLanes=0;var c=t.timeoutHandle;if(c!==-1&&(t.timeoutHandle=-1,tP(c)),i2!==null)for(c=i2.return;c!==null;){var n=c;switch(xo(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Kc();break;case 3:e8(),F1(r3),F1(q2),Ro();break;case 5:Io(n);break;case 4:e8();break;case 13:F1(q1);break;case 19:F1(q1);break;case 10:Eo(n.type._context);break;case 22:case 23:Go()}c=c.return}if(V2=t,i2=t=R6(t.current,null),E2=p3=e,h2=0,f7=null,$o=h9=T0=0,e3=T5=null,v0!==null){for(e=0;e<v0.length;e++)if(c=v0[e],n=c.interleaved,n!==null){c.interleaved=null;var a=n.next,r=c.pending;if(r!==null){var i=r.next;r.next=a,n.next=i}c.pending=n}v0=null}return t}function Qz(t,e){do{var c=i2;try{if(bo(),Hc.current=nn,cn){for(var n=W1.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}cn=!1}if(E0=0,z2=l2=W1=null,b5=!1,s7=0,jo.current=null,c===null||c.return===null){h2=1,f7=e,i2=null;break}e:{var r=t,i=c.return,s=c,o=e;if(e=E2,s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var f=o,u=s,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=kd(i);if(v!==null){v.flags&=-257,Ad(v,i,s,r,e),v.mode&1&&Td(r,f,e),e=v,o=f;var H=e.updateQueue;if(H===null){var w=new Set;w.add(o),e.updateQueue=w}else H.add(o);break e}else{if(!(e&1)){Td(r,f,e),Ko();break e}o=Error(B(426))}}else if(U1&&s.mode&1){var S=kd(i);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ad(S,i,s,r,e),So(t8(o,s));break e}}r=o=t8(o,s),h2!==4&&(h2=2),T5===null?T5=[r]:T5.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var M=Tz(r,o,e);wd(r,M);break e;case 1:s=o;var C=r.type,V=r.stateNode;if(!(r.flags&128)&&(typeof C.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(A6===null||!A6.has(V)))){r.flags|=65536,e&=-e,r.lanes|=e;var E=kz(r,s,e);wd(r,E);break e}}r=r.return}while(r!==null)}Zz(c)}catch(R){e=R,i2===c&&c!==null&&(i2=c=c.return);continue}break}while(!0)}function Yz(){var t=an.current;return an.current=nn,t===null?nn:t}function Ko(){(h2===0||h2===3||h2===2)&&(h2=4),V2===null||!(T0&268435455)&&!(h9&268435455)||M6(V2,E2)}function on(t,e){var c=y1;y1|=2;var n=Yz();(V2!==t||E2!==e)&&(V4=null,L0(t,e));do try{wP();break}catch(a){Qz(t,a)}while(!0);if(bo(),y1=c,an.current=n,i2!==null)throw Error(B(261));return V2=null,E2=0,h2}function wP(){for(;i2!==null;)Xz(i2)}function xP(){for(;i2!==null&&!ZI();)Xz(i2)}function Xz(t){var e=eC(t.alternate,t,p3);t.memoizedProps=t.pendingProps,e===null?Zz(t):i2=e,jo.current=null}function Zz(t){var e=t;do{var c=e.alternate;if(t=e.return,e.flags&32768){if(c=HP(c,e),c!==null){c.flags&=32767,i2=c;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{h2=6,i2=null;return}}else if(c=CP(c,e,p3),c!==null){i2=c;return}if(e=e.sibling,e!==null){i2=e;return}i2=e=t}while(e!==null);h2===0&&(h2=5)}function u0(t,e,c){var n=S1,a=b3.transition;try{b3.transition=null,S1=1,SP(t,e,c,n)}finally{b3.transition=a,S1=n}return null}function SP(t,e,c,n){do Be();while(L6!==null);if(y1&6)throw Error(B(327));c=t.finishedWork;var a=t.finishedLanes;if(c===null)return null;if(t.finishedWork=null,t.finishedLanes=0,c===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var r=c.lanes|c.childLanes;if(oR(t,r),t===V2&&(i2=V2=null,E2=0),!(c.subtreeFlags&2064)&&!(c.flags&2064)||Wt||(Wt=!0,tC(Uc,function(){return Be(),null})),r=(c.flags&15990)!==0,c.subtreeFlags&15990||r){r=b3.transition,b3.transition=null;var i=S1;S1=1;var s=y1;y1|=4,jo.current=null,VP(t,c),Wz(c,t),KR(yi),$c=!!Vi,yi=Vi=null,t.current=c,yP(c),JI(),y1=s,S1=i,b3.transition=r}else t.current=c;if(Wt&&(Wt=!1,L6=t,sn=a),r=t.pendingLanes,r===0&&(A6=null),cR(c.stateNode),s3(t,e2()),e!==null)for(n=t.onRecoverableError,c=0;c<e.length;c++)a=e[c],n(a.value,{componentStack:a.stack,digest:a.digest});if(rn)throw rn=!1,t=ji,ji=null,t;return sn&1&&t.tag!==0&&Be(),r=t.pendingLanes,r&1?t===$i?k5++:(k5=0,$i=t):k5=0,t0(),null}function Be(){if(L6!==null){var t=Tg(sn),e=b3.transition,c=S1;try{if(b3.transition=null,S1=16>t?16:t,L6===null)var n=!1;else{if(t=L6,L6=null,sn=0,y1&6)throw Error(B(331));var a=y1;for(y1|=4,q=t.current;q!==null;){var r=q,i=r.child;if(q.flags&16){var s=r.deletions;if(s!==null){for(var o=0;o<s.length;o++){var f=s[o];for(q=f;q!==null;){var u=q;switch(u.tag){case 0:case 11:case 15:E5(8,u,r)}var h=u.child;if(h!==null)h.return=u,q=h;else for(;q!==null;){u=q;var m=u.sibling,v=u.return;if(jz(u),u===f){q=null;break}if(m!==null){m.return=v,q=m;break}q=v}}}var H=r.alternate;if(H!==null){var w=H.child;if(w!==null){H.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}q=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,q=i;else e:for(;q!==null;){if(r=q,r.flags&2048)switch(r.tag){case 0:case 11:case 15:E5(9,r,r.return)}var M=r.sibling;if(M!==null){M.return=r.return,q=M;break e}q=r.return}}var C=t.current;for(q=C;q!==null;){i=q;var V=i.child;if(i.subtreeFlags&2064&&V!==null)V.return=i,q=V;else e:for(i=C;q!==null;){if(s=q,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:u9(9,s)}}catch(R){Y1(s,s.return,R)}if(s===i){q=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}if(y1=a,t0(),l4&&typeof l4.onPostCommitFiberRoot=="function")try{l4.onPostCommitFiberRoot(n9,t)}catch{}n=!0}return n}finally{S1=c,b3.transition=e}}return!1}function Gd(t,e,c){e=t8(c,e),e=Tz(t,e,1),t=k6(t,e,1),e=X2(),t!==null&&(O7(t,1,e),s3(t,e))}function Y1(t,e,c){if(t.tag===3)Gd(t,t,c);else for(;e!==null;){if(e.tag===3){Gd(e,t,c);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(A6===null||!A6.has(n))){t=t8(c,t),t=kz(e,t,1),e=k6(e,t,1),t=X2(),e!==null&&(O7(e,1,t),s3(e,t));break}}e=e.return}}function NP(t,e,c){var n=t.pingCache;n!==null&&n.delete(e),e=X2(),t.pingedLanes|=t.suspendedLanes&c,V2===t&&(E2&c)===c&&(h2===4||h2===3&&(E2&130023424)===E2&&500>e2()-qo?L0(t,0):$o|=c),s3(t,e)}function Jz(t,e){e===0&&(t.mode&1?(e=Rt,Rt<<=1,!(Rt&130023424)&&(Rt=4194304)):e=1);var c=X2();t=U4(t,e),t!==null&&(O7(t,e,c),s3(t,c))}function bP(t){var e=t.memoizedState,c=0;e!==null&&(c=e.retryLane),Jz(t,c)}function EP(t,e){var c=0;switch(t.tag){case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(c=a.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(B(314))}n!==null&&n.delete(e),Jz(t,c)}var eC;eC=function(t,e,c){if(t!==null)if(t.memoizedProps!==e.pendingProps||r3.current)c3=!0;else{if(!(t.lanes&c)&&!(e.flags&128))return c3=!1,zP(t,e,c);c3=!!(t.flags&131072)}else c3=!1,U1&&e.flags&1048576&&az(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Vc(t,e),t=e.pendingProps;var a=Xe(e,q2.current);Fe(e,c),a=Do(null,e,n,t,a,c);var r=Oo();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,i3(n)?(r=!0,Qc(e)):r=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ko(e),a.updater=f9,e.stateNode=a,a._reactInternals=e,Ti(e,n,t,c),e=Ii(null,e,n,!0,r,c)):(e.tag=0,U1&&r&&wo(e),Q2(null,e,a,c),e=e.child),e;case 16:n=e.elementType;e:{switch(Vc(t,e),t=e.pendingProps,a=n._init,n=a(n._payload),e.type=n,a=e.tag=kP(n),t=B3(n,t),a){case 0:e=Ai(null,e,n,t,c);break e;case 1:e=Pd(null,e,n,t,c);break e;case 11:e=Id(null,e,n,t,c);break e;case 14:e=Rd(null,e,n,B3(n.type,t),c);break e}throw Error(B(306,n,""))}return e;case 0:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:B3(n,a),Ai(t,e,n,a,c);case 1:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:B3(n,a),Pd(t,e,n,a,c);case 3:e:{if(Pz(e),t===null)throw Error(B(387));n=e.pendingProps,r=e.memoizedState,a=r.element,fz(t,e),en(e,n,null,c);var i=e.memoizedState;if(n=i.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){a=t8(Error(B(423)),e),e=Dd(t,e,n,c,a);break e}else if(n!==a){a=t8(Error(B(424)),e),e=Dd(t,e,n,c,a);break e}else for(g3=T6(e.stateNode.containerInfo.firstChild),C3=e,U1=!0,j3=null,c=oz(e,null,n,c),e.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Ze(),n===a){e=j4(t,e,c);break e}Q2(t,e,n,c)}e=e.child}return e;case 5:return uz(e),t===null&&Ni(e),n=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,i=a.children,_i(n,a)?i=null:r!==null&&_i(n,r)&&(e.flags|=32),Rz(t,e),Q2(t,e,i,c),e.child;case 6:return t===null&&Ni(e),null;case 13:return Dz(t,e,c);case 4:return Ao(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Je(e,null,n,c):Q2(t,e,n,c),e.child;case 11:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:B3(n,a),Id(t,e,n,a,c);case 7:return Q2(t,e,e.pendingProps,c),e.child;case 8:return Q2(t,e,e.pendingProps.children,c),e.child;case 12:return Q2(t,e,e.pendingProps.children,c),e.child;case 10:e:{if(n=e.type._context,a=e.pendingProps,r=e.memoizedProps,i=a.value,A1(Zc,n._currentValue),n._currentValue=i,r!==null)if(t4(r.value,i)){if(r.children===a.children&&!r3.current){e=j4(t,e,c);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var o=s.firstContext;o!==null;){if(o.context===n){if(r.tag===1){o=A4(-1,c&-c),o.tag=2;var f=r.updateQueue;if(f!==null){f=f.shared;var u=f.pending;u===null?o.next=o:(o.next=u.next,u.next=o),f.pending=o}}r.lanes|=c,o=r.alternate,o!==null&&(o.lanes|=c),bi(r.return,c,e),s.lanes|=c;break}o=o.next}}else if(r.tag===10)i=r.type===e.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(B(341));i.lanes|=c,s=i.alternate,s!==null&&(s.lanes|=c),bi(i,c,e),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===e){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}Q2(t,e,a.children,c),e=e.child}return e;case 9:return a=e.type,n=e.pendingProps.children,Fe(e,c),a=T3(a),n=n(a),e.flags|=1,Q2(t,e,n,c),e.child;case 14:return n=e.type,a=B3(n,e.pendingProps),a=B3(n.type,a),Rd(t,e,n,a,c);case 15:return Az(t,e,e.type,e.pendingProps,c);case 17:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:B3(n,a),Vc(t,e),e.tag=1,i3(n)?(t=!0,Qc(e)):t=!1,Fe(e,c),Ez(e,n,a),Ti(e,n,a,c),Ii(null,e,n,!0,t,c);case 19:return Oz(t,e,c);case 22:return Iz(t,e,c)}throw Error(B(156,e.tag))};function tC(t,e){return Sg(t,e)}function TP(t,e,c,n){this.tag=t,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function N3(t,e,c,n){return new TP(t,e,c,n)}function Qo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kP(t){if(typeof t=="function")return Qo(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mo)return 11;if(t===po)return 14}return 2}function R6(t,e){var c=t.alternate;return c===null?(c=N3(t.tag,e,t.key,t.mode),c.elementType=t.elementType,c.type=t.type,c.stateNode=t.stateNode,c.alternate=t,t.alternate=c):(c.pendingProps=e,c.type=t.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=t.flags&14680064,c.childLanes=t.childLanes,c.lanes=t.lanes,c.child=t.child,c.memoizedProps=t.memoizedProps,c.memoizedState=t.memoizedState,c.updateQueue=t.updateQueue,e=t.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},c.sibling=t.sibling,c.index=t.index,c.ref=t.ref,c}function Lc(t,e,c,n,a,r){var i=2;if(n=t,typeof t=="function")Qo(t)&&(i=1);else if(typeof t=="string")i=5;else e:switch(t){case He:return w0(c.children,a,r,e);case ho:i=8,a|=8;break;case ci:return t=N3(12,c,e,a|2),t.elementType=ci,t.lanes=r,t;case ni:return t=N3(13,c,e,a),t.elementType=ni,t.lanes=r,t;case ai:return t=N3(19,c,e,a),t.elementType=ai,t.lanes=r,t;case ug:return d9(c,a,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lg:i=10;break e;case fg:i=9;break e;case mo:i=11;break e;case po:i=14;break e;case g6:i=16,n=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=N3(i,c,e,a),e.elementType=t,e.type=n,e.lanes=r,e}function w0(t,e,c,n){return t=N3(7,t,n,e),t.lanes=c,t}function d9(t,e,c,n){return t=N3(22,t,n,e),t.elementType=ug,t.lanes=c,t.stateNode={isHidden:!1},t}function gr(t,e,c){return t=N3(6,t,null,e),t.lanes=c,t}function zr(t,e,c){return e=N3(4,t.children!==null?t.children:[],t.key,e),e.lanes=c,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AP(t,e,c,n,a){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Za(0),this.expirationTimes=Za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Za(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Yo(t,e,c,n,a,r,i,s,o){return t=new AP(t,e,c,s,o),e===1?(e=1,r===!0&&(e|=8)):e=0,r=N3(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:n,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(r),t}function IP(t,e,c){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:n==null?null:""+n,children:t,containerInfo:e,implementation:c}}function cC(t){if(!t)return $6;t=t._reactInternals;e:{if(Q0(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(i3(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var c=t.type;if(i3(c))return cz(t,c,e)}return e}function nC(t,e,c,n,a,r,i,s,o){return t=Yo(c,n,!0,t,a,r,i,s,o),t.context=cC(null),c=t.current,n=X2(),a=I6(c),r=A4(n,a),r.callback=e??null,k6(c,r,a),t.current.lanes=a,O7(t,a,n),s3(t,n),t}function m9(t,e,c,n){var a=e.current,r=X2(),i=I6(a);return c=cC(c),e.context===null?e.context=c:e.pendingContext=c,e=A4(r,i),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=k6(a,e,i),t!==null&&(Z3(t,a,i,r),Cc(t,a,i)),i}function ln(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var c=t.retryLane;t.retryLane=c!==0&&c<e?c:e}}function Xo(t,e){Kd(t,e),(t=t.alternate)&&Kd(t,e)}function RP(){return null}var aC=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zo(t){this._internalRoot=t}p9.prototype.render=Zo.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));m9(t,e,null,null)};p9.prototype.unmount=Zo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;k0(function(){m9(null,t,null,null)}),e[B4]=null}};function p9(t){this._internalRoot=t}p9.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ig();t={blockedOn:null,target:t,priority:e};for(var c=0;c<H6.length&&e!==0&&e<H6[c].priority;c++);H6.splice(c,0,t),c===0&&Pg(t)}};function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function v9(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function PP(t,e,c,n,a){if(a){if(typeof n=="function"){var r=n;n=function(){var f=ln(i);r.call(f)}}var i=nC(e,n,t,0,null,!1,!1,"",Qd);return t._reactRootContainer=i,t[B4]=i.current,c7(t.nodeType===8?t.parentNode:t),k0(),i}for(;a=t.lastChild;)t.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var f=ln(o);s.call(f)}}var o=Yo(t,0,!1,null,null,!1,!1,"",Qd);return t._reactRootContainer=o,t[B4]=o.current,c7(t.nodeType===8?t.parentNode:t),k0(function(){m9(e,o,c,n)}),o}function g9(t,e,c,n,a){var r=c._reactRootContainer;if(r){var i=r;if(typeof a=="function"){var s=a;a=function(){var o=ln(i);s.call(o)}}m9(e,i,t,a)}else i=PP(c,e,t,a,n);return ln(i)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var c=m5(e.pendingLanes);c!==0&&(zo(e,c|1),s3(e,e2()),!(y1&6)&&(c8=e2()+500,t0()))}break;case 13:k0(function(){var n=U4(t,1);if(n!==null){var a=X2();Z3(n,t,1,a)}}),Xo(t,1)}};Co=function(t){if(t.tag===13){var e=U4(t,134217728);if(e!==null){var c=X2();Z3(e,t,134217728,c)}Xo(t,134217728)}};Ag=function(t){if(t.tag===13){var e=I6(t),c=U4(t,e);if(c!==null){var n=X2();Z3(c,t,e,n)}Xo(t,e)}};Ig=function(){return S1};Rg=function(t,e){var c=S1;try{return S1=t,e()}finally{S1=c}};mi=function(t,e,c){switch(e){case"input":if(si(t,c),e=c.name,c.type==="radio"&&e!=null){for(c=t;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<c.length;e++){var n=c[e];if(n!==t&&n.form===t.form){var a=s9(n);if(!a)throw Error(B(90));dg(n),si(n,a)}}}break;case"textarea":pg(t,c);break;case"select":e=c.value,e!=null&&Re(t,!!c.multiple,e,!1)}};Vg=Wo;yg=k0;var DP={usingClientEntryPoint:!1,Events:[B7,_e,s9,Hg,Mg,Wo]},a5={findFiberByHostInstance:p0,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OP={bundleType:a5.bundleType,version:a5.version,rendererPackageName:a5.rendererPackageName,rendererConfig:a5.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z4.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wg(t),t===null?null:t.stateNode},findFiberByHostInstance:a5.findFiberByHostInstance||RP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gt.isDisabled&&Gt.supportsFiber)try{n9=Gt.inject(OP),l4=Gt}catch{}}V3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DP;V3.createPortal=function(t,e){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jo(e))throw Error(B(200));return IP(t,e,null,c)};V3.createRoot=function(t,e){if(!Jo(t))throw Error(B(299));var c=!1,n="",a=aC;return e!=null&&(e.unstable_strictMode===!0&&(c=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Yo(t,1,!1,null,null,c,!1,n,a),t[B4]=e.current,c7(t.nodeType===8?t.parentNode:t),new Zo(e)};V3.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=wg(e),t=t===null?null:t.stateNode,t};V3.flushSync=function(t){return k0(t)};V3.hydrate=function(t,e,c){if(!v9(e))throw Error(B(200));return g9(null,t,e,!0,c)};V3.hydrateRoot=function(t,e,c){if(!Jo(t))throw Error(B(405));var n=c!=null&&c.hydratedSources||null,a=!1,r="",i=aC;if(c!=null&&(c.unstable_strictMode===!0&&(a=!0),c.identifierPrefix!==void 0&&(r=c.identifierPrefix),c.onRecoverableError!==void 0&&(i=c.onRecoverableError)),e=nC(e,null,t,1,c??null,a,!1,r,i),t[B4]=e.current,c7(t),n)for(t=0;t<n.length;t++)c=n[t],a=c._getVersion,a=a(c._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[c,a]:e.mutableSourceEagerHydrationData.push(c,a);return new p9(e)};V3.render=function(t,e,c){if(!v9(e))throw Error(B(200));return g9(null,t,e,!1,c)};V3.unmountComponentAtNode=function(t){if(!v9(t))throw Error(B(40));return t._reactRootContainer?(k0(function(){g9(null,null,t,!1,function(){t._reactRootContainer=null,t[B4]=null})}),!0):!1};V3.unstable_batchedUpdates=Wo;V3.unstable_renderSubtreeIntoContainer=function(t,e,c,n){if(!v9(c))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return g9(t,e,c,!1,n)};V3.version="18.3.1-next-f1338f8080-20240426";function rC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rC)}catch(t){console.error(t)}}rC(),rg.exports=V3;var iC=rg.exports;const Ee=t9(iC);var Yd=iC;ei.createRoot=Yd.createRoot,ei.hydrateRoot=Yd.hydrateRoot;function Xd(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),c.push.apply(c,n)}return c}function $(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?Xd(Object(c),!0).forEach(function(n){m2(t,n,c[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):Xd(Object(c)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(c,n))})}return t}function fn(t){"@babel/helpers - typeof";return fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fn(t)}function FP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function BP(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function UP(t,e,c){return e&&BP(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function m2(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function el(t,e){return $P(t)||WP(t,e)||sC(t,e)||KP()}function j7(t){return jP(t)||qP(t)||sC(t)||GP()}function jP(t){if(Array.isArray(t))return Gi(t)}function $P(t){if(Array.isArray(t))return t}function qP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function WP(t,e){var c=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var n=[],a=!0,r=!1,i,s;try{for(c=c.call(t);!(a=(i=c.next()).done)&&(n.push(i.value),!(e&&n.length===e));a=!0);}catch(o){r=!0,s=o}finally{try{!a&&c.return!=null&&c.return()}finally{if(r)throw s}}return n}}function sC(t,e){if(t){if(typeof t=="string")return Gi(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Gi(t,e)}}function Gi(t,e){(e==null||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}function GP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zd=function(){},tl={},oC={},lC=null,fC={mark:Zd,measure:Zd};try{typeof window<"u"&&(tl=window),typeof document<"u"&&(oC=document),typeof MutationObserver<"u"&&(lC=MutationObserver),typeof performance<"u"&&(fC=performance)}catch{}var QP=tl.navigator||{},Jd=QP.userAgent,em=Jd===void 0?"":Jd,q6=tl,B1=oC,tm=lC,Kt=fC;q6.document;var J4=!!B1.documentElement&&!!B1.head&&typeof B1.addEventListener=="function"&&typeof B1.createElement=="function",uC=~em.indexOf("MSIE")||~em.indexOf("Trident/"),Qt,Yt,Xt,Zt,Jt,$4="___FONT_AWESOME___",Ki=16,hC="fa",dC="svg-inline--fa",A0="data-fa-i2svg",Qi="data-fa-pseudo-element",YP="data-fa-pseudo-element-pending",cl="data-prefix",nl="data-icon",cm="fontawesome-i2svg",XP="async",ZP=["HTML","HEAD","STYLE","SCRIPT"],mC=function(){try{return!0}catch{return!1}}(),O1="classic",X1="sharp",al=[O1,X1];function $7(t){return new Proxy(t,{get:function(c,n){return n in c?c[n]:c[O1]}})}var u7=$7((Qt={},m2(Qt,O1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),m2(Qt,X1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Qt)),h7=$7((Yt={},m2(Yt,O1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),m2(Yt,X1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Yt)),d7=$7((Xt={},m2(Xt,O1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),m2(Xt,X1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xt)),JP=$7((Zt={},m2(Zt,O1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),m2(Zt,X1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Zt)),eD=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,pC="fa-layers-text",tD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,cD=$7((Jt={},m2(Jt,O1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),m2(Jt,X1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Jt)),vC=[1,2,3,4,5,6,7,8,9,10],nD=vC.concat([11,12,13,14,15,16,17,18,19,20]),aD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],z0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m7=new Set;Object.keys(h7[O1]).map(m7.add.bind(m7));Object.keys(h7[X1]).map(m7.add.bind(m7));var rD=[].concat(al,j7(m7),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",z0.GROUP,z0.SWAP_OPACITY,z0.PRIMARY,z0.SECONDARY]).concat(vC.map(function(t){return"".concat(t,"x")})).concat(nD.map(function(t){return"w-".concat(t)})),A5=q6.FontAwesomeConfig||{};function iD(t){var e=B1.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(B1&&typeof B1.querySelector=="function"){var oD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oD.forEach(function(t){var e=el(t,2),c=e[0],n=e[1],a=sD(iD(c));a!=null&&(A5[n]=a)})}var gC={styleDefault:"solid",familyDefault:"classic",cssPrefix:hC,replacementClass:dC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};A5.familyPrefix&&(A5.cssPrefix=A5.familyPrefix);var n8=$($({},gC),A5);n8.autoReplaceSvg||(n8.observeMutations=!1);var K={};Object.keys(gC).forEach(function(t){Object.defineProperty(K,t,{enumerable:!0,set:function(c){n8[t]=c,I5.forEach(function(n){return n(K)})},get:function(){return n8[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){n8.cssPrefix=e,I5.forEach(function(c){return c(K)})},get:function(){return n8.cssPrefix}});q6.FontAwesomeConfig=K;var I5=[];function lD(t){return I5.push(t),function(){I5.splice(I5.indexOf(t),1)}}var h6=Ki,o4={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fD(t){if(!(!t||!J4)){var e=B1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var c=B1.head.childNodes,n=null,a=c.length-1;a>-1;a--){var r=c[a],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=r)}return B1.head.insertBefore(e,n),t}}var uD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p7(){for(var t=12,e="";t-- >0;)e+=uD[Math.random()*62|0];return e}function M8(t){for(var e=[],c=(t||[]).length>>>0;c--;)e[c]=t[c];return e}function rl(t){return t.classList?M8(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hD(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,'="').concat(zC(t[c]),'" ')},"").trim()}function z9(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,": ").concat(t[c].trim(),";")},"")}function il(t){return t.size!==o4.size||t.x!==o4.x||t.y!==o4.y||t.rotate!==o4.rotate||t.flipX||t.flipY}function dD(t){var e=t.transform,c=t.containerWidth,n=t.iconWidth,a={transform:"translate(".concat(c/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(i," ").concat(s)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:o,path:f}}function mD(t){var e=t.transform,c=t.width,n=c===void 0?Ki:c,a=t.height,r=a===void 0?Ki:a,i=t.startCentered,s=i===void 0?!1:i,o="";return s&&uC?o+="translate(".concat(e.x/h6-n/2,"em, ").concat(e.y/h6-r/2,"em) "):s?o+="translate(calc(-50% + ".concat(e.x/h6,"em), calc(-50% + ").concat(e.y/h6,"em)) "):o+="translate(".concat(e.x/h6,"em, ").concat(e.y/h6,"em) "),o+="scale(".concat(e.size/h6*(e.flipX?-1:1),", ").concat(e.size/h6*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var pD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function CC(){var t=hC,e=dC,c=K.cssPrefix,n=K.replacementClass,a=pD;if(c!==t||n!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(r,".".concat(c,"-")).replace(i,"--".concat(c,"-")).replace(s,".".concat(n))}return a}var nm=!1;function Cr(){K.autoAddCss&&!nm&&(fD(CC()),nm=!0)}var vD={mixout:function(){return{dom:{css:CC,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},q4=q6||{};q4[$4]||(q4[$4]={});q4[$4].styles||(q4[$4].styles={});q4[$4].hooks||(q4[$4].hooks={});q4[$4].shims||(q4[$4].shims=[]);var W3=q4[$4],HC=[],gD=function t(){B1.removeEventListener("DOMContentLoaded",t),un=1,HC.map(function(e){return e()})},un=!1;J4&&(un=(B1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B1.readyState),un||B1.addEventListener("DOMContentLoaded",gD));function zD(t){J4&&(un?setTimeout(t,0):HC.push(t))}function q7(t){var e=t.tag,c=t.attributes,n=c===void 0?{}:c,a=t.children,r=a===void 0?[]:a;return typeof t=="string"?zC(t):"<".concat(e," ").concat(hD(n),">").concat(r.map(q7).join(""),"</").concat(e,">")}function am(t,e,c){if(t&&t[e]&&t[e][c])return{prefix:e,iconName:c,icon:t[e][c]}}var Hr=function(e,c,n,a){var r=Object.keys(e),i=r.length,s=c,o,f,u;for(n===void 0?(o=1,u=e[r[0]]):(o=0,u=n);o<i;o++)f=r[o],u=s(u,e[f],f,e);return u};function CD(t){for(var e=[],c=0,n=t.length;c<n;){var a=t.charCodeAt(c++);if(a>=55296&&a<=56319&&c<n){var r=t.charCodeAt(c++);(r&64512)==56320?e.push(((a&1023)<<10)+(r&1023)+65536):(e.push(a),c--)}else e.push(a)}return e}function Yi(t){var e=CD(t);return e.length===1?e[0].toString(16):null}function HD(t,e){var c=t.length,n=t.charCodeAt(e),a;return n>=55296&&n<=56319&&c>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function rm(t){return Object.keys(t).reduce(function(e,c){var n=t[c],a=!!n.icon;return a?e[n.iconName]=n.icon:e[c]=n,e},{})}function Xi(t,e){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=c.skipHooks,a=n===void 0?!1:n,r=rm(e);typeof W3.hooks.addPack=="function"&&!a?W3.hooks.addPack(t,rm(e)):W3.styles[t]=$($({},W3.styles[t]||{}),r),t==="fas"&&Xi("fa",e)}var ec,tc,cc,Te=W3.styles,MD=W3.shims,VD=(ec={},m2(ec,O1,Object.values(d7[O1])),m2(ec,X1,Object.values(d7[X1])),ec),sl=null,MC={},VC={},yC={},_C={},LC={},yD=(tc={},m2(tc,O1,Object.keys(u7[O1])),m2(tc,X1,Object.keys(u7[X1])),tc);function _D(t){return~rD.indexOf(t)}function LD(t,e){var c=e.split("-"),n=c[0],a=c.slice(1).join("-");return n===t&&a!==""&&!_D(a)?a:null}var wC=function(){var e=function(r){return Hr(Te,function(i,s,o){return i[o]=Hr(s,r,{}),i},{})};MC=e(function(a,r,i){if(r[3]&&(a[r[3]]=i),r[2]){var s=r[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){a[o.toString(16)]=i})}return a}),VC=e(function(a,r,i){if(a[i]=i,r[2]){var s=r[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){a[o]=i})}return a}),LC=e(function(a,r,i){var s=r[2];return a[i]=i,s.forEach(function(o){a[o]=i}),a});var c="far"in Te||K.autoFetchSvg,n=Hr(MD,function(a,r){var i=r[0],s=r[1],o=r[2];return s==="far"&&!c&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});yC=n.names,_C=n.unicodes,sl=C9(K.styleDefault,{family:K.familyDefault})};lD(function(t){sl=C9(t.styleDefault,{family:K.familyDefault})});wC();function ol(t,e){return(MC[t]||{})[e]}function wD(t,e){return(VC[t]||{})[e]}function C0(t,e){return(LC[t]||{})[e]}function xC(t){return yC[t]||{prefix:null,iconName:null}}function xD(t){var e=_C[t],c=ol("fas",t);return e||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function W6(){return sl}var ll=function(){return{prefix:null,iconName:null,rest:[]}};function C9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.family,n=c===void 0?O1:c,a=u7[n][t],r=h7[n][t]||h7[n][a],i=t in W3.styles?t:null;return r||i||null}var im=(cc={},m2(cc,O1,Object.keys(d7[O1])),m2(cc,X1,Object.keys(d7[X1])),cc);function H9(t){var e,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.skipLookups,a=n===void 0?!1:n,r=(e={},m2(e,O1,"".concat(K.cssPrefix,"-").concat(O1)),m2(e,X1,"".concat(K.cssPrefix,"-").concat(X1)),e),i=null,s=O1;(t.includes(r[O1])||t.some(function(f){return im[O1].includes(f)}))&&(s=O1),(t.includes(r[X1])||t.some(function(f){return im[X1].includes(f)}))&&(s=X1);var o=t.reduce(function(f,u){var h=LD(K.cssPrefix,u);if(Te[u]?(u=VD[s].includes(u)?JP[s][u]:u,i=u,f.prefix=u):yD[s].indexOf(u)>-1?(i=u,f.prefix=C9(u,{family:s})):h?f.iconName=h:u!==K.replacementClass&&u!==r[O1]&&u!==r[X1]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var m=i==="fa"?xC(f.iconName):{},v=C0(f.prefix,f.iconName);m.prefix&&(i=null),f.iconName=m.iconName||v||f.iconName,f.prefix=m.prefix||f.prefix,f.prefix==="far"&&!Te.far&&Te.fas&&!K.autoFetchSvg&&(f.prefix="fas")}return f},ll());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===X1&&(Te.fass||K.autoFetchSvg)&&(o.prefix="fass",o.iconName=C0(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=W6()||"fas"),o}var SD=function(){function t(){FP(this,t),this.definitions={}}return UP(t,[{key:"add",value:function(){for(var c=this,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){c.definitions[s]=$($({},c.definitions[s]||{}),i[s]),Xi(s,i[s]);var o=d7[O1][s];o&&Xi(o,i[s]),wC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,n){var a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(function(r){var i=a[r],s=i.prefix,o=i.iconName,f=i.icon,u=f[2];c[s]||(c[s]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(c[s][h]=f)}),c[s][o]=f}),c}}]),t}(),sm=[],ke={},Ue={},ND=Object.keys(Ue);function bD(t,e){var c=e.mixoutsTo;return sm=t,ke={},Object.keys(Ue).forEach(function(n){ND.indexOf(n)===-1&&delete Ue[n]}),sm.forEach(function(n){var a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(function(i){typeof a[i]=="function"&&(c[i]=a[i]),fn(a[i])==="object"&&Object.keys(a[i]).forEach(function(s){c[i]||(c[i]={}),c[i][s]=a[i][s]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(i){ke[i]||(ke[i]=[]),ke[i].push(r[i])})}n.provides&&n.provides(Ue)}),c}function Zi(t,e){for(var c=arguments.length,n=new Array(c>2?c-2:0),a=2;a<c;a++)n[a-2]=arguments[a];var r=ke[t]||[];return r.forEach(function(i){e=i.apply(null,[e].concat(n))}),e}function I0(t){for(var e=arguments.length,c=new Array(e>1?e-1:0),n=1;n<e;n++)c[n-1]=arguments[n];var a=ke[t]||[];a.forEach(function(r){r.apply(null,c)})}function W4(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ue[t]?Ue[t].apply(null,e):void 0}function Ji(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,c=t.prefix||W6();if(e)return e=C0(c,e)||e,am(SC.definitions,c,e)||am(W3.styles,c,e)}var SC=new SD,ED=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,I0("noAuto")},TD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J4?(I0("beforeI2svg",e),W4("pseudoElements2svg",e),W4("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,zD(function(){AD({autoReplaceSvgRoot:c}),I0("watch",e)})}},kD={icon:function(e){if(e===null)return null;if(fn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:C0(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=C9(e[0]);return{prefix:n,iconName:C0(n,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(eD))){var a=H9(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||W6(),iconName:C0(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var r=W6();return{prefix:r,iconName:C0(r,e)||e}}}},_3={noAuto:ED,config:K,dom:TD,parse:kD,library:SC,findIconDefinition:Ji,toHtml:q7},AD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot,n=c===void 0?B1:c;(Object.keys(W3.styles).length>0||K.autoFetchSvg)&&J4&&K.autoReplaceSvg&&_3.dom.i2svg({node:n})};function M9(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return q7(n)})}}),Object.defineProperty(t,"node",{get:function(){if(J4){var n=B1.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function ID(t){var e=t.children,c=t.main,n=t.mask,a=t.attributes,r=t.styles,i=t.transform;if(il(i)&&c.found&&!n.found){var s=c.width,o=c.height,f={x:s/o/2,y:.5};a.style=z9($($({},r),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function RD(t){var e=t.prefix,c=t.iconName,n=t.children,a=t.attributes,r=t.symbol,i=r===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(c):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},a),{},{id:i}),children:n}]}]}function fl(t){var e=t.icons,c=e.main,n=e.mask,a=t.prefix,r=t.iconName,i=t.transform,s=t.symbol,o=t.title,f=t.maskId,u=t.titleId,h=t.extra,m=t.watchable,v=m===void 0?!1:m,H=n.found?n:c,w=H.width,S=H.height,M=a==="fak",C=[K.replacementClass,r?"".concat(K.cssPrefix,"-").concat(r):""].filter(function(x){return h.classes.indexOf(x)===-1}).filter(function(x){return x!==""||!!x}).concat(h.classes).join(" "),V={children:[],attributes:$($({},h.attributes),{},{"data-prefix":a,"data-icon":r,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},E=M&&!~h.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};v&&(V.attributes[A0]=""),o&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(u||p7())},children:[o]}),delete V.attributes.title);var R=$($({},V),{},{prefix:a,iconName:r,main:c,mask:n,maskId:f,transform:i,symbol:s,styles:$($({},E),h.styles)}),I=n.found&&c.found?W4("generateAbstractMask",R)||{children:[],attributes:{}}:W4("generateAbstractIcon",R)||{children:[],attributes:{}},L=I.children,z=I.attributes;return R.children=L,R.attributes=z,s?RD(R):ID(R)}function om(t){var e=t.content,c=t.width,n=t.height,a=t.transform,r=t.title,i=t.extra,s=t.watchable,o=s===void 0?!1:s,f=$($($({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});o&&(f[A0]="");var u=$({},i.styles);il(a)&&(u.transform=mD({transform:a,startCentered:!0,width:c,height:n}),u["-webkit-transform"]=u.transform);var h=z9(u);h.length>0&&(f.style=h);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function PD(t){var e=t.content,c=t.title,n=t.extra,a=$($($({},n.attributes),c?{title:c}:{}),{},{class:n.classes.join(" ")}),r=z9(n.styles);r.length>0&&(a.style=r);var i=[];return i.push({tag:"span",attributes:a,children:[e]}),c&&i.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),i}var Mr=W3.styles;function es(t){var e=t[0],c=t[1],n=t.slice(4),a=el(n,1),r=a[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(z0.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(z0.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(z0.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:c,icon:i}}var DD={found:!1,width:512,height:512};function OD(t,e){!mC&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ts(t,e){var c=e;return e==="fa"&&K.styleDefault!==null&&(e=W6()),new Promise(function(n,a){if(W4("missingIconAbstract"),c==="fa"){var r=xC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Mr[e]&&Mr[e][t]){var i=Mr[e][t];return n(es(i))}OD(t,e),n($($({},DD),{},{icon:K.showMissingIcons&&t?W4("missingIconAbstract")||{}:{}}))})}var lm=function(){},cs=K.measurePerformance&&Kt&&Kt.mark&&Kt.measure?Kt:{mark:lm,measure:lm},v5='FA "6.5.2"',FD=function(e){return cs.mark("".concat(v5," ").concat(e," begins")),function(){return NC(e)}},NC=function(e){cs.mark("".concat(v5," ").concat(e," ends")),cs.measure("".concat(v5," ").concat(e),"".concat(v5," ").concat(e," begins"),"".concat(v5," ").concat(e," ends"))},ul={begin:FD,end:NC},wc=function(){};function fm(t){var e=t.getAttribute?t.getAttribute(A0):null;return typeof e=="string"}function BD(t){var e=t.getAttribute?t.getAttribute(cl):null,c=t.getAttribute?t.getAttribute(nl):null;return e&&c}function UD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function jD(){if(K.autoReplaceSvg===!0)return xc.replace;var t=xc[K.autoReplaceSvg];return t||xc.replace}function $D(t){return B1.createElementNS("http://www.w3.org/2000/svg",t)}function qD(t){return B1.createElement(t)}function bC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.ceFn,n=c===void 0?t.tag==="svg"?$D:qD:c;if(typeof t=="string")return B1.createTextNode(t);var a=n(t.tag);Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])});var r=t.children||[];return r.forEach(function(i){a.appendChild(bC(i,{ceFn:n}))}),a}function WD(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var xc={replace:function(e){var c=e[0];if(c.parentNode)if(e[1].forEach(function(a){c.parentNode.insertBefore(bC(a),c)}),c.getAttribute(A0)===null&&K.keepOriginalSource){var n=B1.createComment(WD(c));c.parentNode.replaceChild(n,c)}else c.remove()},nest:function(e){var c=e[0],n=e[1];if(~rl(c).indexOf(K.replacementClass))return xc.replace(e);var a=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(s,o){return o===K.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",r.toNode.join(" "))}var i=n.map(function(s){return q7(s)}).join(`
`);c.setAttribute(A0,""),c.innerHTML=i}};function um(t){t()}function EC(t,e){var c=typeof e=="function"?e:wc;if(t.length===0)c();else{var n=um;K.mutateApproach===XP&&(n=q6.requestAnimationFrame||um),n(function(){var a=jD(),r=ul.begin("mutate");t.map(a),r(),c()})}}var hl=!1;function TC(){hl=!0}function ns(){hl=!1}var hn=null;function hm(t){if(tm&&K.observeMutations){var e=t.treeCallback,c=e===void 0?wc:e,n=t.nodeCallback,a=n===void 0?wc:n,r=t.pseudoElementsCallback,i=r===void 0?wc:r,s=t.observeMutationsRoot,o=s===void 0?B1:s;hn=new tm(function(f){if(!hl){var u=W6();M8(f).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!fm(h.addedNodes[0])&&(K.searchPseudoElements&&i(h.target),c(h.target)),h.type==="attributes"&&h.target.parentNode&&K.searchPseudoElements&&i(h.target.parentNode),h.type==="attributes"&&fm(h.target)&&~aD.indexOf(h.attributeName))if(h.attributeName==="class"&&BD(h.target)){var m=H9(rl(h.target)),v=m.prefix,H=m.iconName;h.target.setAttribute(cl,v||u),H&&h.target.setAttribute(nl,H)}else UD(h.target)&&a(h.target)})}}),J4&&hn.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function GD(){hn&&hn.disconnect()}function KD(t){var e=t.getAttribute("style"),c=[];return e&&(c=e.split(";").reduce(function(n,a){var r=a.split(":"),i=r[0],s=r.slice(1);return i&&s.length>0&&(n[i]=s.join(":").trim()),n},{})),c}function QD(t){var e=t.getAttribute("data-prefix"),c=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",a=H9(rl(t));return a.prefix||(a.prefix=W6()),e&&c&&(a.prefix=e,a.iconName=c),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=wD(a.prefix,t.innerText)||ol(a.prefix,Yi(t.innerText))),!a.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function YD(t){var e=M8(t.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{}),c=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return K.autoA11y&&(c?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(n||p7()):(e["aria-hidden"]="true",e.focusable="false")),e}function XD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:o4,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=QD(t),n=c.iconName,a=c.prefix,r=c.rest,i=YD(t),s=Zi("parseNodeAttributes",{},t),o=e.styleParser?KD(t):[];return $({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:o4,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}var ZD=W3.styles;function kC(t){var e=K.autoReplaceSvg==="nest"?dm(t,{styleParser:!1}):dm(t);return~e.extra.classes.indexOf(pC)?W4("generateLayersText",t,e):W4("generateSvgReplacementMutation",t,e)}var G6=new Set;al.map(function(t){G6.add("fa-".concat(t))});Object.keys(u7[O1]).map(G6.add.bind(G6));Object.keys(u7[X1]).map(G6.add.bind(G6));G6=j7(G6);function mm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J4)return Promise.resolve();var c=B1.documentElement.classList,n=function(h){return c.add("".concat(cm,"-").concat(h))},a=function(h){return c.remove("".concat(cm,"-").concat(h))},r=K.autoFetchSvg?G6:al.map(function(u){return"fa-".concat(u)}).concat(Object.keys(ZD));r.includes("fa")||r.push("fa");var i=[".".concat(pC,":not([").concat(A0,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(A0,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=M8(t.querySelectorAll(i))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();var o=ul.begin("onTree"),f=s.reduce(function(u,h){try{var m=kC(h);m&&u.push(m)}catch(v){mC||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,h){Promise.all(f).then(function(m){EC(m,function(){n("active"),n("complete"),a("pending"),typeof e=="function"&&e(),o(),u()})}).catch(function(m){o(),h(m)})})}function JD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kC(t).then(function(c){c&&EC([c],e)})}function eO(t){return function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Ji(e||{}),a=c.mask;return a&&(a=(a||{}).icon?a:Ji(a||{})),t(n,$($({},c),{},{mask:a}))}}var tO=function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.transform,a=n===void 0?o4:n,r=c.symbol,i=r===void 0?!1:r,s=c.mask,o=s===void 0?null:s,f=c.maskId,u=f===void 0?null:f,h=c.title,m=h===void 0?null:h,v=c.titleId,H=v===void 0?null:v,w=c.classes,S=w===void 0?[]:w,M=c.attributes,C=M===void 0?{}:M,V=c.styles,E=V===void 0?{}:V;if(e){var R=e.prefix,I=e.iconName,L=e.icon;return M9($({type:"icon"},e),function(){return I0("beforeDOMElementCreation",{iconDefinition:e,params:c}),K.autoA11y&&(m?C["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(H||p7()):(C["aria-hidden"]="true",C.focusable="false")),fl({icons:{main:es(L),mask:o?es(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:I,transform:$($({},o4),a),symbol:i,title:m,maskId:u,titleId:H,extra:{attributes:C,styles:E,classes:S}})})}},cO={mixout:function(){return{icon:eO(tO)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=mm,c.nodeCallback=JD,c}}},provides:function(e){e.i2svg=function(c){var n=c.node,a=n===void 0?B1:n,r=c.callback,i=r===void 0?function(){}:r;return mm(a,i)},e.generateSvgReplacementMutation=function(c,n){var a=n.iconName,r=n.title,i=n.titleId,s=n.prefix,o=n.transform,f=n.symbol,u=n.mask,h=n.maskId,m=n.extra;return new Promise(function(v,H){Promise.all([ts(a,s),u.iconName?ts(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=el(w,2),M=S[0],C=S[1];v([c,fl({icons:{main:M,mask:C},prefix:s,iconName:a,transform:o,symbol:f,maskId:h,title:r,titleId:i,extra:m,watchable:!0})])}).catch(H)})},e.generateAbstractIcon=function(c){var n=c.children,a=c.attributes,r=c.main,i=c.transform,s=c.styles,o=z9(s);o.length>0&&(a.style=o);var f;return il(i)&&(f=W4("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},nO={mixout:function(){return{layer:function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.classes,r=a===void 0?[]:a;return M9({type:"layer"},function(){I0("beforeDOMElementCreation",{assembler:c,params:n});var i=[];return c(function(s){Array.isArray(s)?s.map(function(o){i=i.concat(o.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(j7(r)).join(" ")},children:i}]})}}}},aO={mixout:function(){return{counter:function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.title,r=a===void 0?null:a,i=n.classes,s=i===void 0?[]:i,o=n.attributes,f=o===void 0?{}:o,u=n.styles,h=u===void 0?{}:u;return M9({type:"counter",content:c},function(){return I0("beforeDOMElementCreation",{content:c,params:n}),PD({content:c.toString(),title:r,extra:{attributes:f,styles:h,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(j7(s))}})})}}}},rO={mixout:function(){return{text:function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?o4:a,i=n.title,s=i===void 0?null:i,o=n.classes,f=o===void 0?[]:o,u=n.attributes,h=u===void 0?{}:u,m=n.styles,v=m===void 0?{}:m;return M9({type:"text",content:c},function(){return I0("beforeDOMElementCreation",{content:c,params:n}),om({content:c,transform:$($({},o4),r),title:s,extra:{attributes:h,styles:v,classes:["".concat(K.cssPrefix,"-layers-text")].concat(j7(f))}})})}}},provides:function(e){e.generateLayersText=function(c,n){var a=n.title,r=n.transform,i=n.extra,s=null,o=null;if(uC){var f=parseInt(getComputedStyle(c).fontSize,10),u=c.getBoundingClientRect();s=u.width/f,o=u.height/f}return K.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([c,om({content:c.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}},iO=new RegExp('"',"ug"),pm=[1105920,1112319];function sO(t){var e=t.replace(iO,""),c=HD(e,0),n=c>=pm[0]&&c<=pm[1],a=e.length===2?e[0]===e[1]:!1;return{value:Yi(a?e[0]:e),isSecondary:n||a}}function vm(t,e){var c="".concat(YP).concat(e.replace(":","-"));return new Promise(function(n,a){if(t.getAttribute(c)!==null)return n();var r=M8(t.children),i=r.filter(function(L){return L.getAttribute(Qi)===e})[0],s=q6.getComputedStyle(t,e),o=s.getPropertyValue("font-family").match(tD),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(i&&!o)return t.removeChild(i),n();if(o&&u!=="none"&&u!==""){var h=s.getPropertyValue("content"),m=~["Sharp"].indexOf(o[2])?X1:O1,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?h7[m][o[2].toLowerCase()]:cD[m][f],H=sO(h),w=H.value,S=H.isSecondary,M=o[0].startsWith("FontAwesome"),C=ol(v,w),V=C;if(M){var E=xD(w);E.iconName&&E.prefix&&(C=E.iconName,v=E.prefix)}if(C&&!S&&(!i||i.getAttribute(cl)!==v||i.getAttribute(nl)!==V)){t.setAttribute(c,V),i&&t.removeChild(i);var R=XD(),I=R.extra;I.attributes[Qi]=e,ts(C,v).then(function(L){var z=fl($($({},R),{},{icons:{main:L,mask:ll()},prefix:v,iconName:V,extra:I,watchable:!0})),x=B1.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(x,t.firstChild):t.appendChild(x),x.outerHTML=z.map(function(N){return q7(N)}).join(`
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v7(){return v7=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var c=arguments[e];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n])}return t},v7.apply(this,arguments)}var w6;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(w6||(w6={}));const Mm="popstate";function ip1(t){t===void 0&&(t={});function e(n,a){let{pathname:r,search:i,hash:s}=n.location;return rs("",{pathname:r,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function c(n,a){return typeof a=="string"?a:dn(a)}return op1(e,c,null,t)}function G1(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mN(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sp1(){return Math.random().toString(36).substr(2,8)}function Vm(t,e){return{usr:t.state,key:t.key,idx:e}}function rs(t,e,c,n){return c===void 0&&(c=null),v7({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?V8(e):e,{state:c,key:e&&e.key||n||sp1()})}function dn(t){let{pathname:e="/",search:c="",hash:n=""}=t;return c&&c!=="?"&&(e+=c.charAt(0)==="?"?c:"?"+c),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function V8(t){let e={};if(t){let c=t.indexOf("#");c>=0&&(e.hash=t.substr(c),t=t.substr(0,c));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function op1(t,e,c,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:r=!1}=n,i=a.history,s=w6.Pop,o=null,f=u();f==null&&(f=0,i.replaceState(v7({},i.state,{idx:f}),""));function u(){return(i.state||{idx:null}).idx}function h(){s=w6.Pop;let S=u(),M=S==null?null:S-f;f=S,o&&o({action:s,location:w.location,delta:M})}function m(S,M){s=w6.Push;let C=rs(w.location,S,M);f=u()+1;let V=Vm(C,f),E=w.createHref(C);try{i.pushState(V,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(E)}r&&o&&o({action:s,location:w.location,delta:1})}function v(S,M){s=w6.Replace;let C=rs(w.location,S,M);f=u();let V=Vm(C,f),E=w.createHref(C);i.replaceState(V,"",E),r&&o&&o({action:s,location:w.location,delta:0})}function H(S){let M=a.location.origin!=="null"?a.location.origin:a.location.href,C=typeof S=="string"?S:dn(S);return C=C.replace(/ $/,"%20"),G1(M,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,M)}let w={get action(){return s},get location(){return t(a,i)},listen(S){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(Mm,h),o=S,()=>{a.removeEventListener(Mm,h),o=null}},createHref(S){return e(a,S)},createURL:H,encodeLocation(S){let M=H(S);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:m,replace:v,go(S){return i.go(S)}};return w}var ym;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ym||(ym={}));function lp1(t,e,c){c===void 0&&(c="/");let n=typeof e=="string"?V8(e):e,a=a8(n.pathname||"/",c);if(a==null)return null;let r=pN(t);fp1(r);let i=null;for(let s=0;i==null&&s<r.length;++s){let o=Mp1(a);i=Cp1(r[s],o)}return i}function pN(t,e,c,n){e===void 0&&(e=[]),c===void 0&&(c=[]),n===void 0&&(n="");let a=(r,i,s)=>{let o={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};o.relativePath.startsWith("/")&&(G1(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let f=P6([n,o.relativePath]),u=c.concat(o);r.children&&r.children.length>0&&(G1(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),pN(r.children,e,u,f)),!(r.path==null&&!r.index)&&e.push({path:f,score:gp1(f,r.index),routesMeta:u})};return t.forEach((r,i)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))a(r,i);else for(let o of vN(r.path))a(r,i,o)}),e}function vN(t){let e=t.split("/");if(e.length===0)return[];let[c,...n]=e,a=c.endsWith("?"),r=c.replace(/\?$/,"");if(n.length===0)return a?[r,""]:[r];let i=vN(n.join("/")),s=[];return s.push(...i.map(o=>o===""?r:[r,o].join("/"))),a&&s.push(...i),s.map(o=>t.startsWith("/")&&o===""?"/":o)}function fp1(t){t.sort((e,c)=>e.score!==c.score?c.score-e.score:zp1(e.routesMeta.map(n=>n.childrenIndex),c.routesMeta.map(n=>n.childrenIndex)))}const up1=/^:[\w-]+$/,hp1=3,dp1=2,mp1=1,pp1=10,vp1=-2,_m=t=>t==="*";function gp1(t,e){let c=t.split("/"),n=c.length;return c.some(_m)&&(n+=vp1),e&&(n+=dp1),c.filter(a=>!_m(a)).reduce((a,r)=>a+(up1.test(r)?hp1:r===""?mp1:pp1),n)}function zp1(t,e){return t.length===e.length&&t.slice(0,-1).every((n,a)=>n===e[a])?t[t.length-1]-e[e.length-1]:0}function Cp1(t,e){let{routesMeta:c}=t,n={},a="/",r=[];for(let i=0;i<c.length;++i){let s=c[i],o=i===c.length-1,f=a==="/"?e:e.slice(a.length)||"/",u=is({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},f);if(!u)return null;Object.assign(n,u.params);let h=s.route;r.push({params:n,pathname:P6([a,u.pathname]),pathnameBase:Lp1(P6([a,u.pathnameBase])),route:h}),u.pathnameBase!=="/"&&(a=P6([a,u.pathnameBase]))}return r}function is(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[c,n]=Hp1(t.path,t.caseSensitive,t.end),a=e.match(c);if(!a)return null;let r=a[0],i=r.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((f,u,h)=>{let{paramName:m,isOptional:v}=u;if(m==="*"){let w=s[h]||"";i=r.slice(0,r.length-w.length).replace(/(.)\/+$/,"$1")}const H=s[h];return v&&!H?f[m]=void 0:f[m]=(H||"").replace(/%2F/g,"/"),f},{}),pathname:r,pathnameBase:i,pattern:t}}function Hp1(t,e,c){e===void 0&&(e=!1),c===void 0&&(c=!0),mN(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,o)=>(n.push({paramName:s,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),n]}function Mp1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mN(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function a8(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let c=e.endsWith("/")?e.length-1:e.length,n=t.charAt(c);return n&&n!=="/"?null:t.slice(c)||"/"}function Vp1(t,e){e===void 0&&(e="/");let{pathname:c,search:n="",hash:a=""}=typeof t=="string"?V8(t):t;return{pathname:c?c.startsWith("/")?c:yp1(c,e):e,search:wp1(n),hash:xp1(a)}}function yp1(t,e){let c=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?c.length>1&&c.pop():a!=="."&&c.push(a)}),c.length>1?c.join("/"):"/"}function yr(t,e,c,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+c+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _p1(t){return t.filter((e,c)=>c===0||e.route.path&&e.route.path.length>0)}function hf(t,e){let c=_p1(t);return e?c.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase):c.map(n=>n.pathnameBase)}function df(t,e,c,n){n===void 0&&(n=!1);let a;typeof t=="string"?a=V8(t):(a=v7({},t),G1(!a.pathname||!a.pathname.includes("?"),yr("?","pathname","search",a)),G1(!a.pathname||!a.pathname.includes("#"),yr("#","pathname","hash",a)),G1(!a.search||!a.search.includes("#"),yr("#","search","hash",a)));let r=t===""||a.pathname==="",i=r?"/":a.pathname,s;if(i==null)s=c;else{let h=e.length-1;if(!n&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),h-=1;a.pathname=m.join("/")}s=h>=0?e[h]:"/"}let o=Vp1(a,s),f=i&&i!=="/"&&i.endsWith("/"),u=(r||i===".")&&c.endsWith("/");return!o.pathname.endsWith("/")&&(f||u)&&(o.pathname+="/"),o}const P6=t=>t.join("/").replace(/\/\/+/g,"/"),Lp1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wp1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xp1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Sp1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gN=["post","put","patch","delete"];new Set(gN);const Np1=["get",...gN];new Set(Np1);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function g7(){return g7=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var c=arguments[e];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n])}return t},g7.apply(this,arguments)}const O9=_.createContext(null),zN=_.createContext(null),e6=_.createContext(null),F9=_.createContext(null),t6=_.createContext({outlet:null,matches:[],isDataRoute:!1}),CN=_.createContext(null);function bp1(t,e){let{relative:c}=e===void 0?{}:e;y8()||G1(!1);let{basename:n,navigator:a}=_.useContext(e6),{hash:r,pathname:i,search:s}=U9(t,{relative:c}),o=i;return n!=="/"&&(o=i==="/"?n:P6([n,i])),a.createHref({pathname:o,search:s,hash:r})}function y8(){return _.useContext(F9)!=null}function _8(){return y8()||G1(!1),_.useContext(F9).location}function HN(t){_.useContext(e6).static||_.useLayoutEffect(t)}function B9(){let{isDataRoute:t}=_.useContext(t6);return t?$p1():Ep1()}function Ep1(){y8()||G1(!1);let t=_.useContext(O9),{basename:e,future:c,navigator:n}=_.useContext(e6),{matches:a}=_.useContext(t6),{pathname:r}=_8(),i=JSON.stringify(hf(a,c.v7_relativeSplatPath)),s=_.useRef(!1);return HN(()=>{s.current=!0}),_.useCallback(function(f,u){if(u===void 0&&(u={}),!s.current)return;if(typeof f=="number"){n.go(f);return}let h=df(f,JSON.parse(i),r,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:P6([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,i,r,t])}function Tp1(){let{matches:t}=_.useContext(t6),e=t[t.length-1];return e?e.params:{}}function U9(t,e){let{relative:c}=e===void 0?{}:e,{future:n}=_.useContext(e6),{matches:a}=_.useContext(t6),{pathname:r}=_8(),i=JSON.stringify(hf(a,n.v7_relativeSplatPath));return _.useMemo(()=>df(t,JSON.parse(i),r,c==="path"),[t,i,r,c])}function kp1(t,e){return Ap1(t,e)}function Ap1(t,e,c,n){y8()||G1(!1);let{navigator:a}=_.useContext(e6),{matches:r}=_.useContext(t6),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let f=_8(),u;if(e){var h;let S=typeof e=="string"?V8(e):e;o==="/"||(h=S.pathname)!=null&&h.startsWith(o)||G1(!1),u=S}else u=f;let m=u.pathname||"/",v=m;if(o!=="/"){let S=o.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let H=lp1(t,{pathname:v}),w=Op1(H&&H.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:P6([o,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?o:P6([o,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),r,c,n);return e&&w?_.createElement(F9.Provider,{value:{location:g7({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:w6.Pop}},w):w}function Ip1(){let t=jp1(),e=Sp1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),c=t instanceof Error?t.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),c?_.createElement("pre",{style:a},c):null,null)}const Rp1=_.createElement(Ip1,null);class Pp1 extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,c){return c.location!==e.location||c.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:c.error,location:c.location,revalidation:e.revalidation||c.revalidation}}componentDidCatch(e,c){console.error("React Router caught the following error during render",e,c)}render(){return this.state.error!==void 0?_.createElement(t6.Provider,{value:this.props.routeContext},_.createElement(CN.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dp1(t){let{routeContext:e,match:c,children:n}=t,a=_.useContext(O9);return a&&a.static&&a.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=c.route.id),_.createElement(t6.Provider,{value:e},n)}function Op1(t,e,c,n){var a;if(e===void 0&&(e=[]),c===void 0&&(c=null),n===void 0&&(n=null),t==null){var r;if((r=c)!=null&&r.errors)t=c.matches;else return null}let i=t,s=(a=c)==null?void 0:a.errors;if(s!=null){let u=i.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);u>=0||G1(!1),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,f=-1;if(c&&n&&n.v7_partialHydration)for(let u=0;u<i.length;u++){let h=i[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=u),h.route.id){let{loaderData:m,errors:v}=c,H=h.route.loader&&m[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||H){o=!0,f>=0?i=i.slice(0,f+1):i=[i[0]];break}}}return i.reduceRight((u,h,m)=>{let v,H=!1,w=null,S=null;c&&(v=s&&h.route.id?s[h.route.id]:void 0,w=h.route.errorElement||Rp1,o&&(f<0&&m===0?(H=!0,S=null):f===m&&(H=!0,S=h.route.hydrateFallbackElement||null)));let M=e.concat(i.slice(0,m+1)),C=()=>{let V;return v?V=w:H?V=S:h.route.Component?V=_.createElement(h.route.Component,null):h.route.element?V=h.route.element:V=u,_.createElement(Dp1,{match:h,routeContext:{outlet:u,matches:M,isDataRoute:c!=null},children:V})};return c&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?_.createElement(Pp1,{location:c.location,revalidation:c.revalidation,component:w,error:v,children:C(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):C()},null)}var MN=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(MN||{}),mn=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(mn||{});function Fp1(t){let e=_.useContext(O9);return e||G1(!1),e}function Bp1(t){let e=_.useContext(zN);return e||G1(!1),e}function Up1(t){let e=_.useContext(t6);return e||G1(!1),e}function VN(t){let e=Up1(),c=e.matches[e.matches.length-1];return c.route.id||G1(!1),c.route.id}function jp1(){var t;let e=_.useContext(CN),c=Bp1(mn.UseRouteError),n=VN(mn.UseRouteError);return e!==void 0?e:(t=c.errors)==null?void 0:t[n]}function $p1(){let{router:t}=Fp1(MN.UseNavigateStable),e=VN(mn.UseNavigateStable),c=_.useRef(!1);return HN(()=>{c.current=!0}),_.useCallback(function(a,r){r===void 0&&(r={}),c.current&&(typeof a=="number"?t.navigate(a):t.navigate(a,g7({fromRouteId:e},r)))},[t,e])}function qp1(t){let{to:e,replace:c,state:n,relative:a}=t;y8()||G1(!1);let{future:r,static:i}=_.useContext(e6),{matches:s}=_.useContext(t6),{pathname:o}=_8(),f=B9(),u=df(e,hf(s,r.v7_relativeSplatPath),o,a==="path"),h=JSON.stringify(u);return _.useEffect(()=>f(JSON.parse(h),{replace:c,state:n,relative:a}),[f,h,a,c,n]),null}function H4(t){G1(!1)}function Wp1(t){let{basename:e="/",children:c=null,location:n,navigationType:a=w6.Pop,navigator:r,static:i=!1,future:s}=t;y8()&&G1(!1);let o=e.replace(/^\/*/,"/"),f=_.useMemo(()=>({basename:o,navigator:r,static:i,future:g7({v7_relativeSplatPath:!1},s)}),[o,s,r,i]);typeof n=="string"&&(n=V8(n));let{pathname:u="/",search:h="",hash:m="",state:v=null,key:H="default"}=n,w=_.useMemo(()=>{let S=a8(u,o);return S==null?null:{location:{pathname:S,search:h,hash:m,state:v,key:H},navigationType:a}},[o,u,h,m,v,H,a]);return w==null?null:_.createElement(e6.Provider,{value:f},_.createElement(F9.Provider,{children:c,value:w}))}function Gp1(t){let{children:e,location:c}=t;return kp1(ss(e),c)}new Promise(()=>{});function ss(t,e){e===void 0&&(e=[]);let c=[];return _.Children.forEach(t,(n,a)=>{if(!_.isValidElement(n))return;let r=[...e,a];if(n.type===_.Fragment){c.push.apply(c,ss(n.props.children,r));return}n.type!==H4&&G1(!1),!n.props.index||!n.props.children||G1(!1);let i={id:n.props.id||r.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=ss(n.props.children,r)),c.push(i)}),c}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pn(){return pn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var c=arguments[e];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n])}return t},pn.apply(this,arguments)}function yN(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}function Kp1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Qp1(t,e){return t.button===0&&(!e||e==="_self")&&!Kp1(t)}const Yp1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Xp1=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Zp1="6";try{window.__reactRouterVersion=Zp1}catch{}const Jp1=_.createContext({isTransitioning:!1}),ev1="startTransition",Lm=NI[ev1];function tv1(t){let{basename:e,children:c,future:n,window:a}=t,r=_.useRef();r.current==null&&(r.current=ip1({window:a,v5Compat:!0}));let i=r.current,[s,o]=_.useState({action:i.action,location:i.location}),{v7_startTransition:f}=n||{},u=_.useCallback(h=>{f&&Lm?Lm(()=>o(h)):o(h)},[o,f]);return _.useLayoutEffect(()=>i.listen(u),[i,u]),_.createElement(Wp1,{basename:e,children:c,location:s.location,navigationType:s.action,navigator:i,future:n})}const cv1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nv1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_N=_.forwardRef(function(e,c){let{onClick:n,relative:a,reloadDocument:r,replace:i,state:s,target:o,to:f,preventScrollReset:u,unstable_viewTransition:h}=e,m=yN(e,Yp1),{basename:v}=_.useContext(e6),H,w=!1;if(typeof f=="string"&&nv1.test(f)&&(H=f,cv1))try{let V=new URL(window.location.href),E=f.startsWith("//")?new URL(V.protocol+f):new URL(f),R=a8(E.pathname,v);E.origin===V.origin&&R!=null?f=R+E.search+E.hash:w=!0}catch{}let S=bp1(f,{relative:a}),M=rv1(f,{replace:i,state:s,target:o,preventScrollReset:u,relative:a,unstable_viewTransition:h});function C(V){n&&n(V),V.defaultPrevented||M(V)}return _.createElement("a",pn({},m,{href:H||S,onClick:w||r?n:C,ref:c,target:o}))}),H2=_.forwardRef(function(e,c){let{"aria-current":n="page",caseSensitive:a=!1,className:r="",end:i=!1,style:s,to:o,unstable_viewTransition:f,children:u}=e,h=yN(e,Xp1),m=U9(o,{relative:h.relative}),v=_8(),H=_.useContext(zN),{navigator:w,basename:S}=_.useContext(e6),M=H!=null&&iv1(m)&&f===!0,C=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,V=v.pathname,E=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;a||(V=V.toLowerCase(),E=E?E.toLowerCase():null,C=C.toLowerCase()),E&&S&&(E=a8(E,S)||E);const R=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let I=V===C||!i&&V.startsWith(C)&&V.charAt(R)==="/",L=E!=null&&(E===C||!i&&E.startsWith(C)&&E.charAt(C.length)==="/"),z={isActive:I,isPending:L,isTransitioning:M},x=I?n:void 0,N;typeof r=="function"?N=r(z):N=[r,I?"active":null,L?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let T=typeof s=="function"?s(z):s;return _.createElement(_N,pn({},h,{"aria-current":x,className:N,ref:c,style:T,to:o,unstable_viewTransition:f}),typeof u=="function"?u(z):u)});var os;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(os||(os={}));var wm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wm||(wm={}));function av1(t){let e=_.useContext(O9);return e||G1(!1),e}function rv1(t,e){let{target:c,replace:n,state:a,preventScrollReset:r,relative:i,unstable_viewTransition:s}=e===void 0?{}:e,o=B9(),f=_8(),u=U9(t,{relative:i});return _.useCallback(h=>{if(Qp1(h,c)){h.preventDefault();let m=n!==void 0?n:dn(f)===dn(u);o(t,{replace:m,state:a,preventScrollReset:r,relative:i,unstable_viewTransition:s})}},[f,o,u,n,a,c,t,r,i,s])}function iv1(t,e){e===void 0&&(e={});let c=_.useContext(Jp1);c==null&&G1(!1);let{basename:n}=av1(os.useViewTransitionState),a=U9(t,{relative:e.relative});if(!c.isTransitioning)return!1;let r=a8(c.currentLocation.pathname,n)||c.currentLocation.pathname,i=a8(c.nextLocation.pathname,n)||c.nextLocation.pathname;return is(a.pathname,i)!=null||is(a.pathname,r)!=null}const sv1=_.createContext();function ov1({children:t}){const[e,c]=_.useState(null);return g.jsx(sv1.Provider,{value:{user:e,setUser:c},children:t})}function LN(t){const e=_.useRef(t);return _.useEffect(()=>{e.current=t},[t]),e}function t3(t){const e=LN(t);return _.useCallback(function(...c){return e.current&&e.current(...c)},[e])}function lv1(t,e){const c=_.useRef(!0);_.useEffect(()=>{if(c.current){c.current=!1;return}return t()},e)}function wN(){const t=_.useRef(!0),e=_.useRef(()=>t.current);return _.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function fv1(t){const e=_.useRef(t);return e.current=t,e}function xN(t){const e=fv1(t);_.useEffect(()=>()=>e.current(),[])}const ls=2**31-1;function SN(t,e,c){const n=c-Date.now();t.current=n<=ls?setTimeout(e,n):setTimeout(()=>SN(t,e,c),ls)}function uv1(){const t=wN(),e=_.useRef();return xN(()=>clearTimeout(e.current)),_.useMemo(()=>{const c=()=>clearTimeout(e.current);function n(a,r=0){t()&&(c(),r<=ls?e.current=setTimeout(a,r):SN(e,a,Date.now()+r))}return{set:n,clear:c,handleRef:e}},[])}function hv1(t){const e=_.useRef(null);return _.useEffect(()=>{e.current=t}),e.current}const dv1=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",mv1=typeof document<"u",fs=mv1||dv1?_.useLayoutEffect:_.useEffect,pv1=["as","disabled"];function vv1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}function gv1(t){return!t||t.trim()==="#"}function NN({tagName:t,disabled:e,href:c,target:n,rel:a,role:r,onClick:i,tabIndex:s=0,type:o}){t||(c!=null||n!=null||a!=null?t="a":t="button");const f={tagName:t};if(t==="button")return[{type:o||"button",disabled:e},f];const u=m=>{if((e||t==="a"&&gv1(c))&&m.preventDefault(),e){m.stopPropagation();return}i==null||i(m)},h=m=>{m.key===" "&&(m.preventDefault(),u(m))};return t==="a"&&(c||(c="#"),e&&(c=void 0)),[{role:r??"button",disabled:void 0,tabIndex:e?void 0:s,href:c,target:t==="a"?n:void 0,"aria-disabled":e||void 0,rel:t==="a"?a:void 0,onClick:u,onKeyDown:h},f]}const bN=_.forwardRef((t,e)=>{let{as:c,disabled:n}=t,a=vv1(t,pv1);const[r,{tagName:i}]=NN(Object.assign({tagName:c,disabled:n},a));return g.jsx(i,Object.assign({},a,r,{ref:e}))});bN.displayName="Button";const zv1=bN,Cv1=["onKeyDown"];function Hv1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}function Mv1(t){return!t||t.trim()==="#"}const vn=_.forwardRef((t,e)=>{let{onKeyDown:c}=t,n=Hv1(t,Cv1);const[a]=NN(Object.assign({tagName:"a"},n)),r=t3(i=>{a.onKeyDown(i),c==null||c(i)});return Mv1(n.href)||n.role==="button"?g.jsx("a",Object.assign({ref:e},n,a,{onKeyDown:r})):g.jsx("a",Object.assign({ref:e},n,{onKeyDown:c}))});vn.displayName="Anchor";var EN={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function c(){for(var r="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(r=a(r,n(s)))}return r}function n(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return c.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var i="";for(var s in r)e.call(r,s)&&r[s]&&(i=a(i,s));return i}function a(r,i){return i?r?r+" "+i:r+i:r}t.exports?(c.default=c,t.exports=c):window.classNames=c})()})(EN);var Vv1=EN.exports;const C1=t9(Vv1);function us(){return us=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var c=arguments[e];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n])}return t},us.apply(this,arguments)}function TN(t,e){if(t==null)return{};var c={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;c[n]=t[n]}return c}function xm(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function yv1(t){var e=_v1(t,"string");return typeof e=="symbol"?e:String(e)}function _v1(t,e){if(typeof t!="object"||t===null)return t;var c=t[Symbol.toPrimitive];if(c!==void 0){var n=c.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function Lv1(t,e,c){var n=_.useRef(t!==void 0),a=_.useState(e),r=a[0],i=a[1],s=t!==void 0,o=n.current;return n.current=s,!s&&o&&r!==e&&i(e),[s?t:r,_.useCallback(function(f){for(var u=arguments.length,h=new Array(u>1?u-1:0),m=1;m<u;m++)h[m-1]=arguments[m];c&&c.apply(void 0,[f].concat(h)),i(f)},[c])]}function mf(t,e){return Object.keys(e).reduce(function(c,n){var a,r=c,i=r[xm(n)],s=r[n],o=TN(r,[xm(n),n].map(yv1)),f=e[n],u=Lv1(s,i,t[f]),h=u[0],m=u[1];return us({},o,(a={},a[n]=h,a[f]=m,a))},t)}function hs(t,e){return hs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},hs(t,e)}function wv1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hs(t,e)}const xv1=["xxl","xl","lg","md","sm","xs"],Sv1="xs",j9=_.createContext({prefixes:{},breakpoints:xv1,minBreakpoint:Sv1});function N1(t,e){const{prefixes:c}=_.useContext(j9);return t||c[e]||e}function kN(){const{breakpoints:t}=_.useContext(j9);return t}function AN(){const{minBreakpoint:t}=_.useContext(j9);return t}function Nv1(){const{dir:t}=_.useContext(j9);return t==="rtl"}const IN=_.forwardRef(({className:t,bsPrefix:e,as:c="div",...n},a)=>(e=N1(e,"carousel-caption"),g.jsx(c,{ref:a,className:C1(t,e),...n})));IN.displayName="CarouselCaption";const RN=_.forwardRef(({as:t="div",bsPrefix:e,className:c,...n},a)=>{const r=C1(c,N1(e,"carousel-item"));return g.jsx(t,{ref:a,...n,className:r})});RN.displayName="CarouselItem";function Sm(t,e){let c=0;return _.Children.map(t,n=>_.isValidElement(n)?e(n,c++):n)}function bv1(t,e){let c=0;_.Children.forEach(t,n=>{_.isValidElement(n)&&e(n,c++)})}function pf(t){return t&&t.ownerDocument||document}function Ev1(t){var e=pf(t);return e&&e.defaultView||window}function Tv1(t,e){return Ev1(t).getComputedStyle(t,e)}var kv1=/([A-Z])/g;function Av1(t){return t.replace(kv1,"-$1").toLowerCase()}var Iv1=/^ms-/;function nc(t){return Av1(t).replace(Iv1,"-ms-")}var Rv1=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Pv1(t){return!!(t&&Rv1.test(t))}function I4(t,e){var c="",n="";if(typeof e=="string")return t.style.getPropertyValue(nc(e))||Tv1(t).getPropertyValue(nc(e));Object.keys(e).forEach(function(a){var r=e[a];!r&&r!==0?t.style.removeProperty(nc(a)):Pv1(a)?n+=a+"("+r+") ":c+=nc(a)+": "+r+";"}),n&&(c+="transform: "+n+";"),t.style.cssText+=";"+c}const $9=!!(typeof window<"u"&&window.document&&window.document.createElement);var ds=!1,ms=!1;try{var _r={get passive(){return ds=!0},get once(){return ms=ds=!0}};$9&&(window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,!0))}catch{}function Dv1(t,e,c,n){if(n&&typeof n!="boolean"&&!ms){var a=n.once,r=n.capture,i=c;!ms&&a&&(i=c.__once||function s(o){this.removeEventListener(e,s,r),c.call(this,o)},c.__once=i),t.addEventListener(e,i,ds?n:r)}t.addEventListener(e,c,n)}function Ov1(t,e,c,n){var a=n&&typeof n!="boolean"?n.capture:n;t.removeEventListener(e,c,a),c.__once&&t.removeEventListener(e,c.__once,a)}function gn(t,e,c,n){return Dv1(t,e,c,n),function(){Ov1(t,e,c,n)}}function Fv1(t,e,c,n){if(n===void 0&&(n=!0),t){var a=document.createEvent("HTMLEvents");a.initEvent(e,c,n),t.dispatchEvent(a)}}function Bv1(t){var e=I4(t,"transitionDuration")||"",c=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*c}function Uv1(t,e,c){c===void 0&&(c=5);var n=!1,a=setTimeout(function(){n||Fv1(t,"transitionend",!0)},e+c),r=gn(t,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(a),r()}}function jv1(t,e,c,n){c==null&&(c=Bv1(t)||0);var a=Uv1(t,c,n),r=gn(t,"transitionend",e);return function(){a(),r()}}function Nm(t,e){const c=I4(t,e)||"",n=c.indexOf("ms")===-1?1e3:1;return parseFloat(c)*n}function q9(t,e){const c=Nm(t,"transitionDuration"),n=Nm(t,"transitionDelay"),a=jv1(t,r=>{r.target===t&&(a(),e(r))},c+n)}function vf(t){t.offsetHeight}var PN={exports:{}},$v1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qv1=$v1,Wv1=qv1;function DN(){}function ON(){}ON.resetWarningCache=DN;var Gv1=function(){function t(n,a,r,i,s,o){if(o!==Wv1){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var c={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ON,resetWarningCache:DN};return c.PropTypes=c,c};PN.exports=Gv1();var Kv1=PN.exports;const o1=t9(Kv1),bm={disabled:!1},FN=l1.createContext(null);var Qv1=function(e){return e.scrollTop},g5="unmounted",C6="exited",$3="entering",L4="entered",z7="exiting",c6=function(t){wv1(e,t);function e(n,a){var r;r=t.call(this,n,a)||this;var i=a,s=i&&!i.isMounting?n.enter:n.appear,o;return r.appearStatus=null,n.in?s?(o=C6,r.appearStatus=$3):o=L4:n.unmountOnExit||n.mountOnEnter?o=g5:o=C6,r.state={status:o},r.nextCallback=null,r}e.getDerivedStateFromProps=function(a,r){var i=a.in;return i&&r.status===g5?{status:C6}:null};var c=e.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(a){var r=null;if(a!==this.props){var i=this.state.status;this.props.in?i!==$3&&i!==L4&&(r=$3):(i===$3||i===L4)&&(r=z7)}this.updateStatus(!1,r)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var a=this.props.timeout,r,i,s;return r=i=s=a,a!=null&&typeof a!="number"&&(r=a.exit,i=a.enter,s=a.appear!==void 0?a.appear:i),{exit:r,enter:i,appear:s}},c.updateStatus=function(a,r){if(a===void 0&&(a=!1),r!==null)if(this.cancelNextCallback(),r===$3){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:Ee.findDOMNode(this);i&&Qv1(i)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===C6&&this.setState({status:g5})},c.performEnter=function(a){var r=this,i=this.props.enter,s=this.context?this.context.isMounting:a,o=this.props.nodeRef?[s]:[Ee.findDOMNode(this),s],f=o[0],u=o[1],h=this.getTimeouts(),m=s?h.appear:h.enter;if(!a&&!i||bm.disabled){this.safeSetState({status:L4},function(){r.props.onEntered(f)});return}this.props.onEnter(f,u),this.safeSetState({status:$3},function(){r.props.onEntering(f,u),r.onTransitionEnd(m,function(){r.safeSetState({status:L4},function(){r.props.onEntered(f,u)})})})},c.performExit=function(){var a=this,r=this.props.exit,i=this.getTimeouts(),s=this.props.nodeRef?void 0:Ee.findDOMNode(this);if(!r||bm.disabled){this.safeSetState({status:C6},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:z7},function(){a.props.onExiting(s),a.onTransitionEnd(i.exit,function(){a.safeSetState({status:C6},function(){a.props.onExited(s)})})})},c.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(a,r){r=this.setNextCallback(r),this.setState(a,r)},c.setNextCallback=function(a){var r=this,i=!0;return this.nextCallback=function(s){i&&(i=!1,r.nextCallback=null,a(s))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},c.onTransitionEnd=function(a,r){this.setNextCallback(r);var i=this.props.nodeRef?this.props.nodeRef.current:Ee.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!i||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],f=o[0],u=o[1];this.props.addEndListener(f,u)}a!=null&&setTimeout(this.nextCallback,a)},c.render=function(){var a=this.state.status;if(a===g5)return null;var r=this.props,i=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var s=TN(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return l1.createElement(FN.Provider,{value:null},typeof i=="function"?i(a,s):l1.cloneElement(l1.Children.only(i),s))},e}(l1.Component);c6.contextType=FN;c6.propTypes={};function fe(){}c6.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:fe,onEntering:fe,onEntered:fe,onExit:fe,onExiting:fe,onExited:fe};c6.UNMOUNTED=g5;c6.EXITED=C6;c6.ENTERING=$3;c6.ENTERED=L4;c6.EXITING=z7;const Em=t=>!t||typeof t=="function"?t:e=>{t.current=e};function Yv1(t,e){const c=Em(t),n=Em(e);return a=>{c&&c(a),n&&n(a)}}function X7(t,e){return _.useMemo(()=>Yv1(t,e),[t,e])}function Xv1(t){return t&&"setState"in t?Ee.findDOMNode(t):t??null}const W9=l1.forwardRef(({onEnter:t,onEntering:e,onEntered:c,onExit:n,onExiting:a,onExited:r,addEndListener:i,children:s,childRef:o,...f},u)=>{const h=_.useRef(null),m=X7(h,o),v=I=>{m(Xv1(I))},H=I=>L=>{I&&h.current&&I(h.current,L)},w=_.useCallback(H(t),[t]),S=_.useCallback(H(e),[e]),M=_.useCallback(H(c),[c]),C=_.useCallback(H(n),[n]),V=_.useCallback(H(a),[a]),E=_.useCallback(H(r),[r]),R=_.useCallback(H(i),[i]);return g.jsx(c6,{ref:u,...f,onEnter:w,onEntered:M,onEntering:S,onExit:C,onExited:E,onExiting:V,addEndListener:R,nodeRef:h,children:typeof s=="function"?(I,L)=>s(I,{...L,ref:v}):l1.cloneElement(s,{ref:v})})}),Zv1=40;function Jv1(t){if(!t||!t.style||!t.parentNode||!t.parentNode.style)return!1;const e=getComputedStyle(t);return e.display!=="none"&&e.visibility!=="hidden"&&getComputedStyle(t.parentNode).display!=="none"}const BN=_.forwardRef(({defaultActiveIndex:t=0,...e},c)=>{const{as:n="div",bsPrefix:a,slide:r=!0,fade:i=!1,controls:s=!0,indicators:o=!0,indicatorLabels:f=[],activeIndex:u,onSelect:h,onSlide:m,onSlid:v,interval:H=5e3,keyboard:w=!0,onKeyDown:S,pause:M="hover",onMouseOver:C,onMouseOut:V,wrap:E=!0,touch:R=!0,onTouchStart:I,onTouchMove:L,onTouchEnd:z,prevIcon:x=g.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:N="Previous",nextIcon:T=g.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:k="Next",variant:b,className:b1,children:$1,...J1}=mf({defaultActiveIndex:t,...e},{activeIndex:"onSelect"}),d1=N1(a,"carousel"),D=Nv1(),W=_.useRef(null),[Q,i1]=_.useState("next"),[n1,t1]=_.useState(!1),[H1,f1]=_.useState(!1),[s1,o2]=_.useState(u||0);_.useEffect(()=>{!H1&&u!==s1&&(W.current?i1(W.current):i1((u||0)>s1?"next":"prev"),r&&f1(!0),o2(u||0))},[u,H1,s1,r]),_.useEffect(()=>{W.current&&(W.current=null)});let h3=0,i6;bv1($1,(Z,x1)=>{++h3,x1===u&&(i6=Z.props.interval)});const R3=LN(i6),y2=_.useCallback(Z=>{if(H1)return;let x1=s1-1;if(x1<0){if(!E)return;x1=h3-1}W.current="prev",h==null||h(x1,Z)},[H1,s1,h,E,h3]),_2=t3(Z=>{if(H1)return;let x1=s1+1;if(x1>=h3){if(!E)return;x1=0}W.current="next",h==null||h(x1,Z)}),P3=_.useRef();_.useImperativeHandle(c,()=>({element:P3.current,prev:y2,next:_2}));const D3=t3(()=>{!document.hidden&&Jv1(P3.current)&&(D?y2():_2())}),V1=Q==="next"?"start":"end";lv1(()=>{r||(m==null||m(s1,V1),v==null||v(s1,V1))},[s1]);const a0=`${d1}-item-${Q}`,r0=`${d1}-item-${V1}`,Na=_.useCallback(Z=>{vf(Z),m==null||m(s1,V1)},[m,s1,V1]),mt=_.useCallback(()=>{f1(!1),v==null||v(s1,V1)},[v,s1,V1]),I8=_.useCallback(Z=>{if(w&&!/input|textarea/i.test(Z.target.tagName))switch(Z.key){case"ArrowLeft":Z.preventDefault(),D?_2(Z):y2(Z);return;case"ArrowRight":Z.preventDefault(),D?y2(Z):_2(Z);return}S==null||S(Z)},[w,S,y2,_2,D]),pt=_.useCallback(Z=>{M==="hover"&&t1(!0),C==null||C(Z)},[M,C]),ba=_.useCallback(Z=>{t1(!1),V==null||V(Z)},[V]),ce=_.useRef(0),s6=_.useRef(0),R8=uv1(),p2=_.useCallback(Z=>{ce.current=Z.touches[0].clientX,s6.current=0,M==="hover"&&t1(!0),I==null||I(Z)},[M,I]),L2=_.useCallback(Z=>{Z.touches&&Z.touches.length>1?s6.current=0:s6.current=Z.touches[0].clientX-ce.current,L==null||L(Z)},[L]),ne=_.useCallback(Z=>{if(R){const x1=s6.current;Math.abs(x1)>Zv1&&(x1>0?y2(Z):_2(Z))}M==="hover"&&R8.set(()=>{t1(!1)},H||void 0),z==null||z(Z)},[R,M,y2,_2,R8,H,z]),P8=H!=null&&!n1&&!H1,ae=_.useRef();_.useEffect(()=>{var Z,x1;if(!P8)return;const L3=D?y2:_2;return ae.current=window.setInterval(document.visibilityState?D3:L3,(Z=(x1=R3.current)!=null?x1:H)!=null?Z:void 0),()=>{ae.current!==null&&clearInterval(ae.current)}},[P8,y2,_2,R3,H,D3,D]);const vt=_.useMemo(()=>o&&Array.from({length:h3},(Z,x1)=>L3=>{h==null||h(x1,L3)}),[o,h3,h]);return g.jsxs(n,{ref:P3,...J1,onKeyDown:I8,onMouseOver:pt,onMouseOut:ba,onTouchStart:p2,onTouchMove:L2,onTouchEnd:ne,className:C1(b1,d1,r&&"slide",i&&`${d1}-fade`,b&&`${d1}-${b}`),children:[o&&g.jsx("div",{className:`${d1}-indicators`,children:Sm($1,(Z,x1)=>g.jsx("button",{type:"button","data-bs-target":"","aria-label":f!=null&&f.length?f[x1]:`Slide ${x1+1}`,className:x1===s1?"active":void 0,onClick:vt?vt[x1]:void 0,"aria-current":x1===s1},x1))}),g.jsx("div",{className:`${d1}-inner`,children:Sm($1,(Z,x1)=>{const L3=x1===s1;return r?g.jsx(W9,{in:L3,onEnter:L3?Na:void 0,onEntered:L3?mt:void 0,addEndListener:q9,children:(g4,Ea)=>_.cloneElement(Z,{...Ea,className:C1(Z.props.className,L3&&g4!=="entered"&&a0,(g4==="entered"||g4==="exiting")&&"active",(g4==="entering"||g4==="exiting")&&r0)})}):_.cloneElement(Z,{className:C1(Z.props.className,L3&&"active")})})}),s&&g.jsxs(g.Fragment,{children:[(E||u!==0)&&g.jsxs(vn,{className:`${d1}-control-prev`,onClick:y2,children:[x,N&&g.jsx("span",{className:"visually-hidden",children:N})]}),(E||u!==h3-1)&&g.jsxs(vn,{className:`${d1}-control-next`,onClick:_2,children:[T,k&&g.jsx("span",{className:"visually-hidden",children:k})]})]})]})});BN.displayName="Carousel";const ac=Object.assign(BN,{Caption:IN,Item:RN});function Tm(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),c.push.apply(c,n)}return c}function i4(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?Tm(Object(c),!0).forEach(function(n){Ae(t,n,c[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):Tm(Object(c)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(c,n))})}return t}function zn(t){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zn(t)}function Ae(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function eg1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}function tg1(t,e){if(t==null)return{};var c=eg1(t,e),n,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function ps(t){return cg1(t)||ng1(t)||ag1(t)||rg1()}function cg1(t){if(Array.isArray(t))return vs(t)}function ng1(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ag1(t,e){if(t){if(typeof t=="string")return vs(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return vs(t,e)}}function vs(t,e){(e==null||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}function rg1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ig1(t){var e,c=t.beat,n=t.fade,a=t.beatFade,r=t.bounce,i=t.shake,s=t.flash,o=t.spin,f=t.spinPulse,u=t.spinReverse,h=t.pulse,m=t.fixedWidth,v=t.inverse,H=t.border,w=t.listItem,S=t.flip,M=t.size,C=t.rotation,V=t.pull,E=(e={"fa-beat":c,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":m,"fa-inverse":v,"fa-border":H,"fa-li":w,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Ae(e,"fa-".concat(M),typeof M<"u"&&M!==null),Ae(e,"fa-rotate-".concat(C),typeof C<"u"&&C!==null&&C!==0),Ae(e,"fa-pull-".concat(V),typeof V<"u"&&V!==null),Ae(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(R){return E[R]?R:null}).filter(function(R){return R})}function sg1(t){return t=t-0,t===t}function UN(t){return sg1(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,c){return c?c.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var og1=["style"];function lg1(t){return t.charAt(0).toUpperCase()+t.slice(1)}function fg1(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,c){var n=c.indexOf(":"),a=UN(c.slice(0,n)),r=c.slice(n+1).trim();return a.startsWith("webkit")?e[lg1(a)]=r:e[a]=r,e},{})}function jN(t,e){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(o){return jN(t,o)}),a=Object.keys(e.attributes||{}).reduce(function(o,f){var u=e.attributes[f];switch(f){case"class":o.attrs.className=u,delete e.attributes.class;break;case"style":o.attrs.style=fg1(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?o.attrs[f.toLowerCase()]=u:o.attrs[UN(f)]=u}return o},{attrs:{}}),r=c.style,i=r===void 0?{}:r,s=tg1(c,og1);return a.attrs.style=i4(i4({},a.attrs.style),i),t.apply(void 0,[e.tag,i4(i4({},a.attrs),s)].concat(ps(n)))}var $N=!1;try{$N=!0}catch{}function ug1(){if(!$N&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function km(t){if(t&&zn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(as.icon)return as.icon(t);if(t===null)return null;if(t&&zn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Lr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ae({},t,e):{}}var Am={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},t2=l1.forwardRef(function(t,e){var c=i4(i4({},Am),t),n=c.icon,a=c.mask,r=c.symbol,i=c.className,s=c.title,o=c.titleId,f=c.maskId,u=km(n),h=Lr("classes",[].concat(ps(ig1(c)),ps(i.split(" ")))),m=Lr("transform",typeof c.transform=="string"?as.transform(c.transform):c.transform),v=Lr("mask",km(a)),H=CO(u,i4(i4(i4(i4({},h),m),v),{},{symbol:r,title:s,titleId:o,maskId:f}));if(!H)return ug1("Could not find icon",u),null;var w=H.abstract,S={ref:e};return Object.keys(c).forEach(function(M){Am.hasOwnProperty(M)||(S[M]=c[M])}),hg1(w[0],S)});t2.displayName="FontAwesomeIcon";t2.propTypes={beat:o1.bool,border:o1.bool,beatFade:o1.bool,bounce:o1.bool,className:o1.string,fade:o1.bool,flash:o1.bool,mask:o1.oneOfType([o1.object,o1.array,o1.string]),maskId:o1.string,fixedWidth:o1.bool,inverse:o1.bool,flip:o1.oneOf([!0,!1,"horizontal","vertical","both"]),icon:o1.oneOfType([o1.object,o1.array,o1.string]),listItem:o1.bool,pull:o1.oneOf(["right","left"]),pulse:o1.bool,rotation:o1.oneOf([0,90,180,270]),shake:o1.bool,size:o1.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o1.bool,spinPulse:o1.bool,spinReverse:o1.bool,symbol:o1.oneOfType([o1.bool,o1.string]),title:o1.string,titleId:o1.string,transform:o1.oneOfType([o1.string,o1.object]),swapOpacity:o1.bool};var hg1=jN.bind(null,l1.createElement);function r5(...t){return t.filter(e=>e!=null).reduce((e,c)=>{if(typeof c!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?c:function(...a){e.apply(this,a),c.apply(this,a)}},null)}const dg1={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function mg1(t,e){const c=`offset${t[0].toUpperCase()}${t.slice(1)}`,n=e[c],a=dg1[t];return n+parseInt(I4(e,a[0]),10)+parseInt(I4(e,a[1]),10)}const pg1={[C6]:"collapse",[z7]:"collapsing",[$3]:"collapsing",[L4]:"collapse show"},vg1=l1.forwardRef(({onEnter:t,onEntering:e,onEntered:c,onExit:n,onExiting:a,className:r,children:i,dimension:s="height",in:o=!1,timeout:f=300,mountOnEnter:u=!1,unmountOnExit:h=!1,appear:m=!1,getDimensionValue:v=mg1,...H},w)=>{const S=typeof s=="function"?s():s,M=_.useMemo(()=>r5(I=>{I.style[S]="0"},t),[S,t]),C=_.useMemo(()=>r5(I=>{const L=`scroll${S[0].toUpperCase()}${S.slice(1)}`;I.style[S]=`${I[L]}px`},e),[S,e]),V=_.useMemo(()=>r5(I=>{I.style[S]=null},c),[S,c]),E=_.useMemo(()=>r5(I=>{I.style[S]=`${v(S,I)}px`,vf(I)},n),[n,v,S]),R=_.useMemo(()=>r5(I=>{I.style[S]=null},a),[S,a]);return g.jsx(W9,{ref:w,addEndListener:q9,...H,"aria-expanded":H.role?o:null,onEnter:M,onEntering:C,onEntered:V,onExit:E,onExiting:R,childRef:i.ref,in:o,timeout:f,mountOnEnter:u,unmountOnExit:h,appear:m,children:(I,L)=>l1.cloneElement(i,{...L,className:C1(r,i.props.className,pg1[I],S==="width"&&"collapse-horizontal")})})}),gf=t=>_.forwardRef((e,c)=>g.jsx("div",{...e,ref:c,className:C1(e.className,t)})),gg1={[$3]:"show",[L4]:"show"},qN=_.forwardRef(({className:t,children:e,transitionClasses:c={},onEnter:n,...a},r)=>{const i={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},s=_.useCallback((o,f)=>{vf(o),n==null||n(o,f)},[n]);return g.jsx(W9,{ref:r,addEndListener:q9,...i,onEnter:s,childRef:e.ref,children:(o,f)=>_.cloneElement(e,{...f,className:C1("fade",t,e.props.className,gg1[o],c[o])})})});qN.displayName="Fade";const zg1={"aria-label":o1.string,onClick:o1.func,variant:o1.oneOf(["white"])},zf=_.forwardRef(({className:t,variant:e,"aria-label":c="Close",...n},a)=>g.jsx("button",{ref:a,type:"button",className:C1("btn-close",e&&`btn-close-${e}`,t),"aria-label":c,...n}));zf.displayName="CloseButton";zf.propTypes=zg1;const Cf=_.forwardRef(({className:t,bsPrefix:e,as:c="div",...n},a)=>(e=N1(e,"card-body"),g.jsx(c,{ref:a,className:C1(t,e),...n})));Cf.displayName="CardBody";const WN=_.forwardRef(({className:t,bsPrefix:e,as:c="div",...n},a)=>(e=N1(e,"card-footer"),g.jsx(c,{ref:a,className:C1(t,e),...n})));WN.displayName="CardFooter";const Hf=_.createContext(null);Hf.displayName="CardHeaderContext";const GN=_.forwardRef(({bsPrefix:t,className:e,as:c="div",...n},a)=>{const r=N1(t,"card-header"),i=_.useMemo(()=>({cardHeaderBsPrefix:r}),[r]);return g.jsx(Hf.Provider,{value:i,children:g.jsx(c,{ref:a,...n,className:C1(e,r)})})});GN.displayName="CardHeader";const KN=_.forwardRef(({bsPrefix:t,className:e,variant:c,as:n="img",...a},r)=>{const i=N1(t,"card-img");return g.jsx(n,{ref:r,className:C1(c?`${i}-${c}`:i,e),...a})});KN.displayName="CardImg";const QN=_.forwardRef(({className:t,bsPrefix:e,as:c="div",...n},a)=>(e=N1(e,"card-img-overlay"),g.jsx(c,{ref:a,className:C1(t,e),...n})));QN.displayName="CardImgOverlay";const YN=_.forwardRef(({className:t,bsPrefix:e,as:c="a",...n},a)=>(e=N1(e,"card-link"),g.jsx(c,{ref:a,className:C1(t,e),...n})));YN.displayName="CardLink";const Cg1=gf("h6"),XN=_.forwardRef(({className:t,bsPrefix:e,as:c=Cg1,...n},a)=>(e=N1(e,"card-subtitle"),g.jsx(c,{ref:a,className:C1(t,e),...n})));XN.displayName="CardSubtitle";const ZN=_.forwardRef(({className:t,bsPrefix:e,as:c="p",...n},a)=>(e=N1(e,"card-text"),g.jsx(c,{ref:a,className:C1(t,e),...n})));ZN.displayName="CardText";const Hg1=gf("h5"),JN=_.forwardRef(({className:t,bsPrefix:e,as:c=Hg1,...n},a)=>(e=N1(e,"card-title"),g.jsx(c,{ref:a,className:C1(t,e),...n})));JN.displayName="CardTitle";const eb=_.forwardRef(({bsPrefix:t,className:e,bg:c,text:n,border:a,body:r=!1,children:i,as:s="div",...o},f)=>{const u=N1(t,"card");return g.jsx(s,{ref:f,...o,className:C1(e,u,c&&`bg-${c}`,n&&`text-${n}`,a&&`border-${a}`),children:r?g.jsx(Cf,{children:i}):i})});eb.displayName="Card";const wr=Object.assign(eb,{Img:KN,Title:JN,Subtitle:XN,Body:Cf,Link:YN,Text:ZN,Header:GN,Footer:WN,ImgOverlay:QN});function Mg1({as:t,bsPrefix:e,className:c,...n}){e=N1(e,"col");const a=kN(),r=AN(),i=[],s=[];return a.forEach(o=>{const f=n[o];delete n[o];let u,h,m;typeof f=="object"&&f!=null?{span:u,offset:h,order:m}=f:u=f;const v=o!==r?`-${o}`:"";u&&i.push(u===!0?`${e}${v}`:`${e}${v}-${u}`),m!=null&&s.push(`order${v}-${m}`),h!=null&&s.push(`offset${v}-${h}`)}),[{...n,className:C1(c,...i,...s)},{as:t,bsPrefix:e,spans:i}]}const v3=_.forwardRef((t,e)=>{const[{className:c,...n},{as:a="div",bsPrefix:r,spans:i}]=Mg1(t);return g.jsx(a,{...n,ref:e,className:C1(c,!i.length&&r)})});v3.displayName="Col";const Mf=_.forwardRef(({bsPrefix:t,fluid:e=!1,as:c="div",className:n,...a},r)=>{const i=N1(t,"container"),s=typeof e=="string"?`-${e}`:"-fluid";return g.jsx(c,{ref:r,...a,className:C1(n,e?`${i}${s}`:i)})});Mf.displayName="Container";var Vg1=Function.prototype.bind.call(Function.prototype.call,[].slice);function h0(t,e){return Vg1(t.querySelectorAll(e))}function yg1(){const[,t]=_.useReducer(e=>!e,!1);return t}function Im(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const _g1=_.createContext(null),Vf=(t,e=null)=>t!=null?String(t):e||null,Cn=_g1,yf=_.createContext(null);yf.displayName="NavContext";const Lg1="data-rr-ui-",wg1="rrUi";function G9(t){return`${Lg1}${t}`}function xg1(t){return`${wg1}${t}`}const tb=_.createContext($9?window:void 0);tb.Provider;function _f(){return _.useContext(tb)}const Y0=_.createContext(null);Y0.displayName="NavbarContext";const cb=_.createContext(null),Sg1=["as","active","eventKey"];function Ng1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}function nb({key:t,onClick:e,active:c,id:n,role:a,disabled:r}){const i=_.useContext(Cn),s=_.useContext(yf),o=_.useContext(cb);let f=c;const u={role:a};if(s){!a&&s.role==="tablist"&&(u.role="tab");const h=s.getControllerId(t??null),m=s.getControlledId(t??null);u[G9("event-key")]=t,u.id=h||n,f=c==null&&t!=null?s.activeKey===t:c,(f||!(o!=null&&o.unmountOnExit)&&!(o!=null&&o.mountOnEnter))&&(u["aria-controls"]=m)}return u.role==="tab"&&(u["aria-selected"]=f,f||(u.tabIndex=-1),r&&(u.tabIndex=-1,u["aria-disabled"]=!0)),u.onClick=t3(h=>{r||(e==null||e(h),t!=null&&i&&!h.isPropagationStopped()&&i(t,h))}),[u,{isActive:f}]}const ab=_.forwardRef((t,e)=>{let{as:c=zv1,active:n,eventKey:a}=t,r=Ng1(t,Sg1);const[i,s]=nb(Object.assign({key:Vf(a,r.href),active:n},r));return i[G9("active")]=s.isActive,g.jsx(c,Object.assign({},r,i,{ref:e}))});ab.displayName="NavItem";const bg1=ab,Eg1=["as","onSelect","activeKey","role","onKeyDown"];function Tg1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}const Rm=()=>{},Pm=G9("event-key"),rb=_.forwardRef((t,e)=>{let{as:c="div",onSelect:n,activeKey:a,role:r,onKeyDown:i}=t,s=Tg1(t,Eg1);const o=yg1(),f=_.useRef(!1),u=_.useContext(Cn),h=_.useContext(cb);let m,v;h&&(r=r||"tablist",a=h.activeKey,m=h.getControlledId,v=h.getControllerId);const H=_.useRef(null),w=V=>{const E=H.current;if(!E)return null;const R=h0(E,`[${Pm}]:not([aria-disabled=true])`),I=E.querySelector("[aria-selected=true]");if(!I||I!==document.activeElement)return null;const L=R.indexOf(I);if(L===-1)return null;let z=L+V;return z>=R.length&&(z=0),z<0&&(z=R.length-1),R[z]},S=(V,E)=>{V!=null&&(n==null||n(V,E),u==null||u(V,E))},M=V=>{if(i==null||i(V),!h)return;let E;switch(V.key){case"ArrowLeft":case"ArrowUp":E=w(-1);break;case"ArrowRight":case"ArrowDown":E=w(1);break;default:return}E&&(V.preventDefault(),S(E.dataset[xg1("EventKey")]||null,V),f.current=!0,o())};_.useEffect(()=>{if(H.current&&f.current){const V=H.current.querySelector(`[${Pm}][aria-selected=true]`);V==null||V.focus()}f.current=!1});const C=X7(e,H);return g.jsx(Cn.Provider,{value:S,children:g.jsx(yf.Provider,{value:{role:r,activeKey:Vf(a),getControlledId:m||Rm,getControllerId:v||Rm},children:g.jsx(c,Object.assign({},s,{onKeyDown:M,ref:C,role:r}))})})});rb.displayName="Nav";const kg1=Object.assign(rb,{Item:bg1});function xr(t){t===void 0&&(t=pf());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Ag1(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Dm=G9("modal-open");class Lf{constructor({ownerDocument:e,handleContainerOverflow:c=!0,isRTL:n=!1}={}){this.handleContainerOverflow=c,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return Ag1(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const c={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();e.style={overflow:a.style.overflow,[n]:a.style[n]},e.scrollBarWidth&&(c[n]=`${parseInt(I4(a,n)||"0",10)+e.scrollBarWidth}px`),a.setAttribute(Dm,""),I4(a,c)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const c=this.getElement();c.removeAttribute(Dm),Object.assign(c.style,e.style)}add(e){let c=this.modals.indexOf(e);return c!==-1||(c=this.modals.length,this.modals.push(e),this.setModalAttributes(e),c!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),c}remove(e){const c=this.modals.indexOf(e);c!==-1&&(this.modals.splice(c,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Sr=(t,e)=>$9?t==null?(e||pf()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Ig1(t,e){const c=_f(),[n,a]=_.useState(()=>Sr(t,c==null?void 0:c.document));if(!n){const r=Sr(t);r&&a(r)}return _.useEffect(()=>{},[e,n]),_.useEffect(()=>{const r=Sr(t);r!==n&&a(r)},[t,n]),n}function Rg1({children:t,in:e,onExited:c,mountOnEnter:n,unmountOnExit:a}){const r=_.useRef(null),i=_.useRef(e),s=t3(c);_.useEffect(()=>{e?i.current=!0:s(r.current)},[e,s]);const o=X7(r,t.ref),f=_.cloneElement(t,{ref:o});return e?f:a||!i.current&&n?null:f}function Pg1(t){return t.code==="Escape"||t.keyCode===27}function Dg1(){const t=_.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}const Og1=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Fg1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}function Bg1(t){let{onEnter:e,onEntering:c,onEntered:n,onExit:a,onExiting:r,onExited:i,addEndListener:s,children:o}=t,f=Fg1(t,Og1);const{major:u}=Dg1(),h=u>=19?o.props.ref:o.ref,m=_.useRef(null),v=X7(m,typeof o=="function"?null:h),H=I=>L=>{I&&m.current&&I(m.current,L)},w=_.useCallback(H(e),[e]),S=_.useCallback(H(c),[c]),M=_.useCallback(H(n),[n]),C=_.useCallback(H(a),[a]),V=_.useCallback(H(r),[r]),E=_.useCallback(H(i),[i]),R=_.useCallback(H(s),[s]);return Object.assign({},f,{nodeRef:m},e&&{onEnter:w},c&&{onEntering:S},n&&{onEntered:M},a&&{onExit:C},r&&{onExiting:V},i&&{onExited:E},s&&{addEndListener:R},{children:typeof o=="function"?(I,L)=>o(I,Object.assign({},L,{ref:v})):_.cloneElement(o,{ref:v})})}const Ug1=["component"];function jg1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}const $g1=_.forwardRef((t,e)=>{let{component:c}=t,n=jg1(t,Ug1);const a=Bg1(n);return g.jsx(c,Object.assign({ref:e},a))});function qg1({in:t,onTransition:e}){const c=_.useRef(null),n=_.useRef(!0),a=t3(e);return fs(()=>{if(!c.current)return;let r=!1;return a({in:t,element:c.current,initial:n.current,isStale:()=>r}),()=>{r=!0}},[t,a]),fs(()=>(n.current=!1,()=>{n.current=!0}),[]),c}function Wg1({children:t,in:e,onExited:c,onEntered:n,transition:a}){const[r,i]=_.useState(!e);e&&r&&i(!1);const s=qg1({in:!!e,onTransition:f=>{const u=()=>{f.isStale()||(f.in?n==null||n(f.element,f.initial):(i(!0),c==null||c(f.element)))};Promise.resolve(a(f)).then(u,h=>{throw f.in||i(!0),h})}}),o=X7(s,t.ref);return r&&!e?null:_.cloneElement(t,{ref:o})}function Om(t,e,c){return t?g.jsx($g1,Object.assign({},c,{component:t})):e?g.jsx(Wg1,Object.assign({},c,{transition:e})):g.jsx(Rg1,Object.assign({},c))}const Gg1=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Kg1(t,e){if(t==null)return{};var c={},n=Object.keys(t),a,r;for(r=0;r<n.length;r++)a=n[r],!(e.indexOf(a)>=0)&&(c[a]=t[a]);return c}let Nr;function Qg1(t){return Nr||(Nr=new Lf({ownerDocument:t==null?void 0:t.document})),Nr}function Yg1(t){const e=_f(),c=t||Qg1(e),n=_.useRef({dialog:null,backdrop:null});return Object.assign(n.current,{add:()=>c.add(n.current),remove:()=>c.remove(n.current),isTopModal:()=>c.isTopModal(n.current),setDialogRef:_.useCallback(a=>{n.current.dialog=a},[]),setBackdropRef:_.useCallback(a=>{n.current.backdrop=a},[])})}const ib=_.forwardRef((t,e)=>{let{show:c=!1,role:n="dialog",className:a,style:r,children:i,backdrop:s=!0,keyboard:o=!0,onBackdropClick:f,onEscapeKeyDown:u,transition:h,runTransition:m,backdropTransition:v,runBackdropTransition:H,autoFocus:w=!0,enforceFocus:S=!0,restoreFocus:M=!0,restoreFocusOptions:C,renderDialog:V,renderBackdrop:E=V1=>g.jsx("div",Object.assign({},V1)),manager:R,container:I,onShow:L,onHide:z=()=>{},onExit:x,onExited:N,onExiting:T,onEnter:k,onEntering:b,onEntered:b1}=t,$1=Kg1(t,Gg1);const J1=_f(),d1=Ig1(I),D=Yg1(R),W=wN(),Q=hv1(c),[i1,n1]=_.useState(!c),t1=_.useRef(null);_.useImperativeHandle(e,()=>D,[D]),$9&&!Q&&c&&(t1.current=xr(J1==null?void 0:J1.document)),c&&i1&&n1(!1);const H1=t3(()=>{if(D.add(),R3.current=gn(document,"keydown",h3),i6.current=gn(document,"focus",()=>setTimeout(s1),!0),L&&L(),w){var V1,a0;const r0=xr((V1=(a0=D.dialog)==null?void 0:a0.ownerDocument)!=null?V1:J1==null?void 0:J1.document);D.dialog&&r0&&!Im(D.dialog,r0)&&(t1.current=r0,D.dialog.focus())}}),f1=t3(()=>{if(D.remove(),R3.current==null||R3.current(),i6.current==null||i6.current(),M){var V1;(V1=t1.current)==null||V1.focus==null||V1.focus(C),t1.current=null}});_.useEffect(()=>{!c||!d1||H1()},[c,d1,H1]),_.useEffect(()=>{i1&&f1()},[i1,f1]),xN(()=>{f1()});const s1=t3(()=>{if(!S||!W()||!D.isTopModal())return;const V1=xr(J1==null?void 0:J1.document);D.dialog&&V1&&!Im(D.dialog,V1)&&D.dialog.focus()}),o2=t3(V1=>{V1.target===V1.currentTarget&&(f==null||f(V1),s===!0&&z())}),h3=t3(V1=>{o&&Pg1(V1)&&D.isTopModal()&&(u==null||u(V1),V1.defaultPrevented||z())}),i6=_.useRef(),R3=_.useRef(),y2=(...V1)=>{n1(!0),N==null||N(...V1)};if(!d1)return null;const _2=Object.assign({role:n,ref:D.setDialogRef,"aria-modal":n==="dialog"?!0:void 0},$1,{style:r,className:a,tabIndex:-1});let P3=V?V(_2):g.jsx("div",Object.assign({},_2,{children:_.cloneElement(i,{role:"document"})}));P3=Om(h,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!c,onExit:x,onExiting:T,onExited:y2,onEnter:k,onEntering:b,onEntered:b1,children:P3});let D3=null;return s&&(D3=E({ref:D.setBackdropRef,onClick:o2}),D3=Om(v,H,{in:!!c,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:D3})),g.jsx(g.Fragment,{children:Ee.createPortal(g.jsxs(g.Fragment,{children:[D3,P3]}),d1)})});ib.displayName="Modal";const Xg1=Object.assign(ib,{Manager:Lf});function Zg1(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Jg1(t,e){t.classList?t.classList.add(e):Zg1(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Fm(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ez1(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Fm(t.className,e):t.setAttribute("class",Fm(t.className&&t.className.baseVal||"",e))}const ue={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class sb extends Lf{adjustAndStore(e,c,n){const a=c.style[e];c.dataset[e]=a,I4(c,{[e]:`${parseFloat(I4(c,e))+n}px`})}restore(e,c){const n=c.dataset[e];n!==void 0&&(delete c.dataset[e],I4(c,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const c=this.getElement();if(Jg1(c,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";h0(c,ue.FIXED_CONTENT).forEach(r=>this.adjustAndStore(n,r,e.scrollBarWidth)),h0(c,ue.STICKY_CONTENT).forEach(r=>this.adjustAndStore(a,r,-e.scrollBarWidth)),h0(c,ue.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(a,r,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const c=this.getElement();ez1(c,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";h0(c,ue.FIXED_CONTENT).forEach(r=>this.restore(n,r)),h0(c,ue.STICKY_CONTENT).forEach(r=>this.restore(a,r)),h0(c,ue.NAVBAR_TOGGLER).forEach(r=>this.restore(a,r))}}let br;function tz1(t){return br||(br=new sb(t)),br}const ob=_.createContext({onHide(){}}),cz1=_.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:c=!1,onHide:n,children:a,...r},i)=>{const s=_.useContext(ob),o=t3(()=>{s==null||s.onHide(),n==null||n()});return g.jsxs("div",{ref:i,...r,children:[a,c&&g.jsx(zf,{"aria-label":t,variant:e,onClick:o})]})});var Bm={exports:{}},gs={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;function c(n){function a(i,s,o,f,u,h){var m=f||"<<anonymous>>",v=h||o;if(s[o]==null)return i?new Error("Required "+u+" `"+v+"` was not specified "+("in `"+m+"`.")):null;for(var H=arguments.length,w=Array(H>6?H-6:0),S=6;S<H;S++)w[S-6]=arguments[S];return n.apply(void 0,[s,o,m,u,v].concat(w))}var r=a.bind(null,!1);return r.isRequired=a.bind(null,!0),r}t.exports=e.default})(gs,gs.exports);var nz1=gs.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var c=nz1,n=a(c);function a(i){return i&&i.__esModule?i:{default:i}}function r(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];function f(){for(var u=arguments.length,h=Array(u),m=0;m<u;m++)h[m]=arguments[m];var v=null;return s.forEach(function(H){if(v==null){var w=H.apply(void 0,h);w!=null&&(v=w)}}),v}return(0,n.default)(f)}t.exports=e.default})(Bm,Bm.exports);const lb=_.forwardRef(({className:t,bsPrefix:e,as:c="div",...n},a)=>(e=N1(e,"nav-item"),g.jsx(c,{ref:a,className:C1(t,e),...n})));lb.displayName="NavItem";const fb=_.forwardRef(({bsPrefix:t,className:e,as:c=vn,active:n,eventKey:a,disabled:r=!1,...i},s)=>{t=N1(t,"nav-link");const[o,f]=nb({key:Vf(a,i.href),active:n,disabled:r,...i});return g.jsx(c,{...i,...o,ref:s,disabled:r,className:C1(e,t,r&&"disabled",f.isActive&&"active")})});fb.displayName="NavLink";const ub=_.forwardRef((t,e)=>{const{as:c="div",bsPrefix:n,variant:a,fill:r=!1,justify:i=!1,navbar:s,navbarScroll:o,className:f,activeKey:u,...h}=mf(t,{activeKey:"onSelect"}),m=N1(n,"nav");let v,H,w=!1;const S=_.useContext(Y0),M=_.useContext(Hf);return S?(v=S.bsPrefix,w=s??!0):M&&({cardHeaderBsPrefix:H}=M),g.jsx(kg1,{as:c,ref:e,activeKey:u,className:C1(f,{[m]:!w,[`${v}-nav`]:w,[`${v}-nav-scroll`]:w&&o,[`${H}-${a}`]:!!H,[`${m}-${a}`]:!!a,[`${m}-fill`]:r,[`${m}-justified`]:i}),...h})});ub.displayName="Nav";const az1=Object.assign(ub,{Item:lb,Link:fb}),hb=_.forwardRef(({bsPrefix:t,className:e,as:c,...n},a)=>{t=N1(t,"navbar-brand");const r=c||(n.href?"a":"span");return g.jsx(r,{...n,ref:a,className:C1(e,t)})});hb.displayName="NavbarBrand";const db=_.forwardRef(({children:t,bsPrefix:e,...c},n)=>{e=N1(e,"navbar-collapse");const a=_.useContext(Y0);return g.jsx(vg1,{in:!!(a&&a.expanded),...c,children:g.jsx("div",{ref:n,className:e,children:t})})});db.displayName="NavbarCollapse";const mb=_.forwardRef(({bsPrefix:t,className:e,children:c,label:n="Toggle navigation",as:a="button",onClick:r,...i},s)=>{t=N1(t,"navbar-toggler");const{onToggle:o,expanded:f}=_.useContext(Y0)||{},u=t3(h=>{r&&r(h),o&&o()});return a==="button"&&(i.type="button"),g.jsx(a,{...i,ref:s,onClick:u,"aria-label":n,className:C1(e,t,!f&&"collapsed"),children:c||g.jsx("span",{className:`${t}-icon`})})});mb.displayName="NavbarToggle";const zs=new WeakMap,Um=(t,e)=>{if(!t||!e)return;const c=zs.get(e)||new Map;zs.set(e,c);let n=c.get(t);return n||(n=e.matchMedia(t),n.refCount=0,c.set(n.media,n)),n};function rz1(t,e=typeof window>"u"?void 0:window){const c=Um(t,e),[n,a]=_.useState(()=>c?c.matches:!1);return fs(()=>{let r=Um(t,e);if(!r)return a(!1);let i=zs.get(e);const s=()=>{a(r.matches)};return r.refCount++,r.addListener(s),s(),()=>{r.removeListener(s),r.refCount--,r.refCount<=0&&(i==null||i.delete(r.media)),r=void 0}},[t]),n}function iz1(t){const e=Object.keys(t);function c(s,o){return s===o?o:s?`${s} and ${o}`:o}function n(s){return e[Math.min(e.indexOf(s)+1,e.length-1)]}function a(s){const o=n(s);let f=t[o];return typeof f=="number"?f=`${f-.2}px`:f=`calc(${f} - 0.2px)`,`(max-width: ${f})`}function r(s){let o=t[s];return typeof o=="number"&&(o=`${o}px`),`(min-width: ${o})`}function i(s,o,f){let u;typeof s=="object"?(u=s,f=o,o=!0):(o=o||!0,u={[s]:o});let h=_.useMemo(()=>Object.entries(u).reduce((m,[v,H])=>((H==="up"||H===!0)&&(m=c(m,r(v))),(H==="down"||H===!0)&&(m=c(m,a(v))),m),""),[JSON.stringify(u)]);return rz1(h,f)}return i}const sz1=iz1({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),pb=_.forwardRef(({className:t,bsPrefix:e,as:c="div",...n},a)=>(e=N1(e,"offcanvas-body"),g.jsx(c,{ref:a,className:C1(t,e),...n})));pb.displayName="OffcanvasBody";const oz1={[$3]:"show",[L4]:"show"},vb=_.forwardRef(({bsPrefix:t,className:e,children:c,in:n=!1,mountOnEnter:a=!1,unmountOnExit:r=!1,appear:i=!1,...s},o)=>(t=N1(t,"offcanvas"),g.jsx(W9,{ref:o,addEndListener:q9,in:n,mountOnEnter:a,unmountOnExit:r,appear:i,...s,childRef:c.ref,children:(f,u)=>_.cloneElement(c,{...u,className:C1(e,c.props.className,(f===$3||f===z7)&&`${t}-toggling`,oz1[f])})})));vb.displayName="OffcanvasToggling";const gb=_.forwardRef(({bsPrefix:t,className:e,closeLabel:c="Close",closeButton:n=!1,...a},r)=>(t=N1(t,"offcanvas-header"),g.jsx(cz1,{ref:r,...a,className:C1(e,t),closeLabel:c,closeButton:n})));gb.displayName="OffcanvasHeader";const lz1=gf("h5"),zb=_.forwardRef(({className:t,bsPrefix:e,as:c=lz1,...n},a)=>(e=N1(e,"offcanvas-title"),g.jsx(c,{ref:a,className:C1(t,e),...n})));zb.displayName="OffcanvasTitle";function fz1(t){return g.jsx(vb,{...t})}function uz1(t){return g.jsx(qN,{...t})}const Cb=_.forwardRef(({bsPrefix:t,className:e,children:c,"aria-labelledby":n,placement:a="start",responsive:r,show:i=!1,backdrop:s=!0,keyboard:o=!0,scroll:f=!1,onEscapeKeyDown:u,onShow:h,onHide:m,container:v,autoFocus:H=!0,enforceFocus:w=!0,restoreFocus:S=!0,restoreFocusOptions:M,onEntered:C,onExit:V,onExiting:E,onEnter:R,onEntering:I,onExited:L,backdropClassName:z,manager:x,renderStaticNode:N=!1,...T},k)=>{const b=_.useRef();t=N1(t,"offcanvas");const{onToggle:b1}=_.useContext(Y0)||{},[$1,J1]=_.useState(!1),d1=sz1(r||"xs","up");_.useEffect(()=>{J1(r?i&&!d1:i)},[i,r,d1]);const D=t3(()=>{b1==null||b1(),m==null||m()}),W=_.useMemo(()=>({onHide:D}),[D]);function Q(){return x||(f?(b.current||(b.current=new sb({handleContainerOverflow:!1})),b.current):tz1())}const i1=(f1,...s1)=>{f1&&(f1.style.visibility="visible"),R==null||R(f1,...s1)},n1=(f1,...s1)=>{f1&&(f1.style.visibility=""),L==null||L(...s1)},t1=_.useCallback(f1=>g.jsx("div",{...f1,className:C1(`${t}-backdrop`,z)}),[z,t]),H1=f1=>g.jsx("div",{...f1,...T,className:C1(e,r?`${t}-${r}`:t,`${t}-${a}`),"aria-labelledby":n,children:c});return g.jsxs(g.Fragment,{children:[!$1&&(r||N)&&H1({}),g.jsx(ob.Provider,{value:W,children:g.jsx(Xg1,{show:$1,ref:k,backdrop:s,container:v,keyboard:o,autoFocus:H,enforceFocus:w&&!f,restoreFocus:S,restoreFocusOptions:M,onEscapeKeyDown:u,onShow:h,onHide:D,onEnter:i1,onEntering:I,onEntered:C,onExit:V,onExiting:E,onExited:n1,manager:Q(),transition:fz1,backdropTransition:uz1,renderBackdrop:t1,renderDialog:H1})})]})});Cb.displayName="Offcanvas";const z5=Object.assign(Cb,{Body:pb,Header:gb,Title:zb}),Hb=_.forwardRef((t,e)=>{const c=_.useContext(Y0);return g.jsx(z5,{ref:e,show:!!(c!=null&&c.expanded),...t,renderStaticNode:!0})});Hb.displayName="NavbarOffcanvas";const Mb=_.forwardRef(({className:t,bsPrefix:e,as:c="span",...n},a)=>(e=N1(e,"navbar-text"),g.jsx(c,{ref:a,className:C1(t,e),...n})));Mb.displayName="NavbarText";const Vb=_.forwardRef((t,e)=>{const{bsPrefix:c,expand:n=!0,variant:a="light",bg:r,fixed:i,sticky:s,className:o,as:f="nav",expanded:u,onToggle:h,onSelect:m,collapseOnSelect:v=!1,...H}=mf(t,{expanded:"onToggle"}),w=N1(c,"navbar"),S=_.useCallback((...V)=>{m==null||m(...V),v&&u&&(h==null||h(!1))},[m,v,u,h]);H.role===void 0&&f!=="nav"&&(H.role="navigation");let M=`${w}-expand`;typeof n=="string"&&(M=`${M}-${n}`);const C=_.useMemo(()=>({onToggle:()=>h==null?void 0:h(!u),bsPrefix:w,expanded:!!u,expand:n}),[w,u,n,h]);return g.jsx(Y0.Provider,{value:C,children:g.jsx(Cn.Provider,{value:S,children:g.jsx(f,{ref:e,...H,className:C1(o,w,n&&M,a&&`${w}-${a}`,r&&`bg-${r}`,s&&`sticky-${s}`,i&&`fixed-${i}`)})})})});Vb.displayName="Navbar";const Er=Object.assign(Vb,{Brand:hb,Collapse:db,Offcanvas:Hb,Text:Mb,Toggle:mb}),_4=_.forwardRef(({bsPrefix:t,className:e,as:c="div",...n},a)=>{const r=N1(t,"row"),i=kN(),s=AN(),o=`${r}-cols`,f=[];return i.forEach(u=>{const h=n[u];delete n[u];let m;h!=null&&typeof h=="object"?{cols:m}=h:m=h;const v=u!==s?`-${u}`:"";m!=null&&f.push(`${o}${v}-${m}`)}),g.jsx(c,{ref:a,...n,className:C1(e,r,...f)})});_4.displayName="Row";const hz1="_card_3gohi_1",dz1="_cardLeft_3gohi_15",mz1="_cardRight_3gohi_35",pz1="_cardInfo_3gohi_47",vz1="_image_3gohi_69",gz1="_cardTitle_3gohi_109",he={card:hz1,cardLeft:dz1,cardRight:mz1,cardInfo:pz1,image:vz1,cardTitle:gz1},zz1=({event:t})=>{const e="1.25rem";return g.jsx(_N,{to:`/event/${t.id}`,className:he.cardLink,children:g.jsx(wr,{className:`${he.card} mb-3`,children:g.jsxs(_4,{children:[g.jsx(v3,{xs:12,md:4,className:he.cardLeft,children:g.jsx("div",{className:he.image,children:g.jsx("img",{src:t.img,alt:"Imagem do evento"})})}),g.jsx(v3,{xs:12,md:8,className:he.cardRight,children:g.jsxs(wr.Body,{children:[g.jsx(wr.Title,{className:"d-none d-md-block",children:t.nome}),g.jsxs("div",{className:he.cardInfo,children:[g.jsxs("p",{children:[g.jsx(t2,{icon:"fa-regular fa-calendar",style:{fontSize:e,marginRight:"8px"}})," ",t.data," ",g.jsx("br",{})," ",t.horario]}),g.jsxs("p",{children:[g.jsx(t2,{icon:"fa-regular fa-map",style:{fontSize:e,marginRight:"8px"}})," ",t.local]})]})]})})]})})})};var jm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(t,e){if(!t)throw L8(e)},L8=function(t){return new Error("Firebase Database ("+yb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=function(t){const e=[];let c=0;for(let n=0;n<t.length;n++){let a=t.charCodeAt(n);a<128?e[c++]=a:a<2048?(e[c++]=a>>6|192,e[c++]=a&63|128):(a&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++n)&1023),e[c++]=a>>18|240,e[c++]=a>>12&63|128,e[c++]=a>>6&63|128,e[c++]=a&63|128):(e[c++]=a>>12|224,e[c++]=a>>6&63|128,e[c++]=a&63|128)}return e},Cz1=function(t){const e=[];let c=0,n=0;for(;c<t.length;){const a=t[c++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const r=t[c++];e[n++]=String.fromCharCode((a&31)<<6|r&63)}else if(a>239&&a<365){const r=t[c++],i=t[c++],s=t[c++],o=((a&7)<<18|(r&63)<<12|(i&63)<<6|s&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const r=t[c++],i=t[c++];e[n++]=String.fromCharCode((a&15)<<12|(r&63)<<6|i&63)}}return e.join("")},wf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<t.length;a+=3){const r=t[a],i=a+1<t.length,s=i?t[a+1]:0,o=a+2<t.length,f=o?t[a+2]:0,u=r>>2,h=(r&3)<<4|s>>4;let m=(s&15)<<2|f>>6,v=f&63;o||(v=64,i||(m=64)),n.push(c[u],c[h],c[m],c[v])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_b(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cz1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const c=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<t.length;){const r=c[t.charAt(a++)],s=a<t.length?c[t.charAt(a)]:0;++a;const f=a<t.length?c[t.charAt(a)]:64;++a;const h=a<t.length?c[t.charAt(a)]:64;if(++a,r==null||s==null||f==null||h==null)throw new Hz1;const m=r<<2|s>>4;if(n.push(m),f!==64){const v=s<<4&240|f>>2;if(n.push(v),h!==64){const H=f<<6&192|h;n.push(H)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hz1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lb=function(t){const e=_b(t);return wf.encodeByteArray(e,!0)},Hn=function(t){return Lb(t).replace(/\./g,"")},Mn=function(t){try{return wf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mz1(t){return wb(void 0,t)}function wb(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const c=e;return new Date(c.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const c in e)!e.hasOwnProperty(c)||!Vz1(c)||(t[c]=wb(t[c],e[c]));return t}function Vz1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yz1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _z1=()=>yz1().__FIREBASE_DEFAULTS__,Lz1=()=>{if(typeof process>"u"||typeof jm>"u")return;const t=jm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wz1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mn(t[1]);return e&&JSON.parse(e)},K9=()=>{try{return _z1()||Lz1()||wz1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xb=t=>{var e,c;return(c=(e=K9())===null||e===void 0?void 0:e.emulatorHosts)===null||c===void 0?void 0:c[t]},Sb=t=>{const e=xb(t);if(!e)return;const c=e.lastIndexOf(":");if(c<=0||c+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(c+1),10);return e[0]==="["?[e.substring(1,c-1),n]:[e.substring(0,c),n]},Nb=()=>{var t;return(t=K9())===null||t===void 0?void 0:t.config},bb=t=>{var e;return(e=K9())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q9{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}wrapCallback(e){return(c,n)=>{c?this.reject(c):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(c):e(c,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},n=e||"demo-project",a=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hn(JSON.stringify(c)),Hn(JSON.stringify(i)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(A2())}function xz1(){var t;const e=(t=K9())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sz1(){const t=A2();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ab(){return yb.NODE_ADMIN===!0}function Nz1(){return!xz1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ib(){try{return typeof indexedDB=="object"}catch{return!1}}function Rb(){return new Promise((t,e)=>{try{let c=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),c||self.indexedDB.deleteDatabase(n),t(!0)},a.onupgradeneeded=()=>{c=!1},a.onerror=()=>{var r;e(((r=a.error)===null||r===void 0?void 0:r.message)||"")}}catch(c){e(c)}})}function bz1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ez1="FirebaseError";class n4 extends Error{constructor(e,c,n){super(c),this.code=e,this.customData=n,this.name=Ez1,Object.setPrototypeOf(this,n4.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X0.prototype.create)}}class X0{constructor(e,c,n){this.service=e,this.serviceName=c,this.errors=n}create(e,...c){const n=c[0]||{},a=`${this.service}/${e}`,r=this.errors[e],i=r?Tz1(r,n):"Error",s=`${this.serviceName}: ${i} (${a}).`;return new n4(a,s,n)}}function Tz1(t,e){return t.replace(kz1,(c,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const kz1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C7(t){return JSON.parse(t)}function M2(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=function(t){let e={},c={},n={},a="";try{const r=t.split(".");e=C7(Mn(r[0])||""),c=C7(Mn(r[1])||""),a=r[2],n=c.d||{},delete c.d}catch{}return{header:e,claims:c,data:n,signature:a}},Az1=function(t){const e=Pb(t),c=e.claims;return!!c&&typeof c=="object"&&c.hasOwnProperty("iat")},Iz1=function(t){const e=Pb(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n6(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function r8(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vn(t,e,c){const n={};for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=e.call(c,t[a],a,t));return n}function H7(t,e){if(t===e)return!0;const c=Object.keys(t),n=Object.keys(e);for(const a of c){if(!n.includes(a))return!1;const r=t[a],i=e[a];if($m(r)&&$m(i)){if(!H7(r,i))return!1}else if(r!==i)return!1}for(const a of n)if(!c.includes(a))return!1;return!0}function $m(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w8(t){const e=[];for(const[c,n]of Object.entries(t))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function C5(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,r]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(r)}}),e}function H5(t){const e=t.indexOf("?");if(!e)return"";const c=t.indexOf("#",e);return t.substring(e,c>0?c:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rz1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,c){c||(c=0);const n=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)n[h]=e.charCodeAt(c)<<24|e.charCodeAt(c+1)<<16|e.charCodeAt(c+2)<<8|e.charCodeAt(c+3),c+=4;else for(let h=0;h<16;h++)n[h]=e[c]<<24|e[c+1]<<16|e[c+2]<<8|e[c+3],c+=4;for(let h=16;h<80;h++){const m=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=(m<<1|m>>>31)&4294967295}let a=this.chain_[0],r=this.chain_[1],i=this.chain_[2],s=this.chain_[3],o=this.chain_[4],f,u;for(let h=0;h<80;h++){h<40?h<20?(f=s^r&(i^s),u=1518500249):(f=r^i^s,u=1859775393):h<60?(f=r&i|s&(r|i),u=2400959708):(f=r^i^s,u=3395469782);const m=(a<<5|a>>>27)+f+o+u+n[h]&4294967295;o=s,s=i,i=(r<<30|r>>>2)&4294967295,r=a,a=m}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,c){if(e==null)return;c===void 0&&(c=e.length);const n=c-this.blockSize;let a=0;const r=this.buf_;let i=this.inbuf_;for(;a<c;){if(i===0)for(;a<=n;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<c;)if(r[i]=e.charCodeAt(a),++i,++a,i===this.blockSize){this.compress_(r),i=0;break}}else for(;a<c;)if(r[i]=e[a],++i,++a,i===this.blockSize){this.compress_(r),i=0;break}}this.inbuf_=i,this.total_+=c}digest(){const e=[];let c=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=c&255,c/=256;this.compress_(this.buf_);let n=0;for(let a=0;a<5;a++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[a]>>r&255,++n;return e}}function Pz1(t,e){const c=new Dz1(t,e);return c.subscribe.bind(c)}class Dz1{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(c=>{c.next(e)})}error(e){this.forEachObserver(c=>{c.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,c,n){let a;if(e===void 0&&c===void 0&&n===void 0)throw new Error("Missing Observer.");Oz1(e,["next","error","complete"])?a=e:a={next:e,error:c,complete:n},a.next===void 0&&(a.next=Tr),a.error===void 0&&(a.error=Tr),a.complete===void 0&&(a.complete=Tr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{c(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Oz1(t,e){if(typeof t!="object"||t===null)return!1;for(const c of e)if(c in t&&typeof t[c]=="function")return!0;return!1}function Tr(){}function Sf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fz1=function(t){const e=[];let c=0;for(let n=0;n<t.length;n++){let a=t.charCodeAt(n);if(a>=55296&&a<=56319){const r=a-55296;n++,U(n<t.length,"Surrogate pair missing trail surrogate.");const i=t.charCodeAt(n)-56320;a=65536+(r<<10)+i}a<128?e[c++]=a:a<2048?(e[c++]=a>>6|192,e[c++]=a&63|128):a<65536?(e[c++]=a>>12|224,e[c++]=a>>6&63|128,e[c++]=a&63|128):(e[c++]=a>>18|240,e[c++]=a>>12&63|128,e[c++]=a>>6&63|128,e[c++]=a&63|128)}return e},Y9=function(t){let e=0;for(let c=0;c<t.length;c++){const n=t.charCodeAt(c);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,c++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bz1=1e3,Uz1=2,jz1=4*60*60*1e3,$z1=.5;function qm(t,e=Bz1,c=Uz1){const n=e*Math.pow(c,t),a=Math.round($z1*n*(Math.random()-.5)*2);return Math.min(jz1,n+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){return t&&t._delegate?t._delegate:t}class A3{constructor(e,c,n){this.name=e,this.instanceFactory=c,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz1{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const n=new Q9;if(this.instancesDeferred.set(c,n),this.isInitialized(c)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:c});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(c=e==null?void 0:e.optional)!==null&&c!==void 0?c:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(a)return null;throw r}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gz1(e))try{this.getOrInitializeService({instanceIdentifier:d0})}catch{}for(const[c,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(c);try{const r=this.getOrInitializeService({instanceIdentifier:a});n.resolve(r)}catch{}}}}clearInstance(e=d0){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(c=>"INTERNAL"in c).map(c=>c.INTERNAL.delete()),...e.filter(c=>"_delete"in c).map(c=>c._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=d0){return this.instances.has(e)}getOptions(e=d0){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:c});for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);n===s&&i.resolve(a)}return a}onInit(e,c){var n;const a=this.normalizeInstanceIdentifier(c),r=(n=this.onInitCallbacks.get(a))!==null&&n!==void 0?n:new Set;r.add(e),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&e(i,a),()=>{r.delete(e)}}invokeOnInitCallbacks(e,c){const n=this.onInitCallbacks.get(c);if(n)for(const a of n)try{a(e,c)}catch{}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Wz1(e),options:c}),this.instances.set(e,n),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=d0){return this.component?this.component.multipleInstances?e:d0:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wz1(t){return t===d0?void 0:t}function Gz1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kz1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new qz1(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g1;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(g1||(g1={}));const Qz1={debug:g1.DEBUG,verbose:g1.VERBOSE,info:g1.INFO,warn:g1.WARN,error:g1.ERROR,silent:g1.SILENT},Yz1=g1.INFO,Xz1={[g1.DEBUG]:"log",[g1.VERBOSE]:"log",[g1.INFO]:"info",[g1.WARN]:"warn",[g1.ERROR]:"error"},Zz1=(t,e,...c)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),a=Xz1[e];if(a)console[a](`[${n}]  ${t.name}:`,...c);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Z7{constructor(e){this.name=e,this._logLevel=Yz1,this._logHandler=Zz1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g1))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qz1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g1.DEBUG,...e),this._logHandler(this,g1.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g1.VERBOSE,...e),this._logHandler(this,g1.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g1.INFO,...e),this._logHandler(this,g1.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g1.WARN,...e),this._logHandler(this,g1.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g1.ERROR,...e),this._logHandler(this,g1.ERROR,...e)}}const Jz1=(t,e)=>e.some(c=>t instanceof c);let Wm,Gm;function eC1(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tC1(){return Gm||(Gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Db=new WeakMap,Hs=new WeakMap,Ob=new WeakMap,kr=new WeakMap,Nf=new WeakMap;function cC1(t){const e=new Promise((c,n)=>{const a=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{c(D6(t.result)),a()},i=()=>{n(t.error),a()};t.addEventListener("success",r),t.addEventListener("error",i)});return e.then(c=>{c instanceof IDBCursor&&Db.set(c,t)}).catch(()=>{}),Nf.set(e,t),e}function nC1(t){if(Hs.has(t))return;const e=new Promise((c,n)=>{const a=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{c(),a()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)});Hs.set(t,e)}let Ms={get(t,e,c){if(t instanceof IDBTransaction){if(e==="done")return Hs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ob.get(t);if(e==="store")return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return D6(t[e])},set(t,e,c){return t[e]=c,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aC1(t){Ms=t(Ms)}function rC1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...c){const n=t.call(Ar(this),e,...c);return Ob.set(n,e.sort?e.sort():[e]),D6(n)}:tC1().includes(t)?function(...e){return t.apply(Ar(this),e),D6(Db.get(this))}:function(...e){return D6(t.apply(Ar(this),e))}}function iC1(t){return typeof t=="function"?rC1(t):(t instanceof IDBTransaction&&nC1(t),Jz1(t,eC1())?new Proxy(t,Ms):t)}function D6(t){if(t instanceof IDBRequest)return cC1(t);if(kr.has(t))return kr.get(t);const e=iC1(t);return e!==t&&(kr.set(t,e),Nf.set(e,t)),e}const Ar=t=>Nf.get(t);function Fb(t,e,{blocked:c,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(t,e),s=D6(i);return n&&i.addEventListener("upgradeneeded",o=>{n(D6(i.result),o.oldVersion,o.newVersion,D6(i.transaction),o)}),c&&i.addEventListener("blocked",o=>c(o.oldVersion,o.newVersion,o)),s.then(o=>{r&&o.addEventListener("close",()=>r()),a&&o.addEventListener("versionchange",f=>a(f.oldVersion,f.newVersion,f))}).catch(()=>{}),s}const sC1=["get","getKey","getAll","getAllKeys","count"],oC1=["put","add","delete","clear"],Ir=new Map;function Km(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ir.get(e))return Ir.get(e);const c=e.replace(/FromIndex$/,""),n=e!==c,a=oC1.includes(c);if(!(c in(n?IDBIndex:IDBObjectStore).prototype)||!(a||sC1.includes(c)))return;const r=async function(i,...s){const o=this.transaction(i,a?"readwrite":"readonly");let f=o.store;return n&&(f=f.index(s.shift())),(await Promise.all([f[c](...s),a&&o.done]))[0]};return Ir.set(e,r),r}aC1(t=>({...t,get:(e,c,n)=>Km(e,c)||t.get(e,c,n),has:(e,c)=>!!Km(e,c)||t.has(e,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(c=>{if(fC1(c)){const n=c.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(c=>c).join(" ")}}function fC1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vs="@firebase/app",Qm="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Z7("@firebase/app"),uC1="@firebase/app-compat",hC1="@firebase/analytics-compat",dC1="@firebase/analytics",mC1="@firebase/app-check-compat",pC1="@firebase/app-check",vC1="@firebase/auth",gC1="@firebase/auth-compat",zC1="@firebase/database",CC1="@firebase/database-compat",HC1="@firebase/functions",MC1="@firebase/functions-compat",VC1="@firebase/installations",yC1="@firebase/installations-compat",_C1="@firebase/messaging",LC1="@firebase/messaging-compat",wC1="@firebase/performance",xC1="@firebase/performance-compat",SC1="@firebase/remote-config",NC1="@firebase/remote-config-compat",bC1="@firebase/storage",EC1="@firebase/storage-compat",TC1="@firebase/firestore",kC1="@firebase/vertexai-preview",AC1="@firebase/firestore-compat",IC1="firebase",RC1="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",PC1={[Vs]:"fire-core",[uC1]:"fire-core-compat",[dC1]:"fire-analytics",[hC1]:"fire-analytics-compat",[pC1]:"fire-app-check",[mC1]:"fire-app-check-compat",[vC1]:"fire-auth",[gC1]:"fire-auth-compat",[zC1]:"fire-rtdb",[CC1]:"fire-rtdb-compat",[HC1]:"fire-fn",[MC1]:"fire-fn-compat",[VC1]:"fire-iid",[yC1]:"fire-iid-compat",[_C1]:"fire-fcm",[LC1]:"fire-fcm-compat",[wC1]:"fire-perf",[xC1]:"fire-perf-compat",[SC1]:"fire-rc",[NC1]:"fire-rc-compat",[bC1]:"fire-gcs",[EC1]:"fire-gcs-compat",[TC1]:"fire-fst",[AC1]:"fire-fst-compat",[kC1]:"fire-vertex","fire-js":"fire-js",[IC1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Map,DC1=new Map,_s=new Map;function Ym(t,e){try{t.container.addComponent(e)}catch(c){R0.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,c)}}function c4(t){const e=t.name;if(_s.has(e))return R0.debug(`There were multiple attempts to register component ${e}.`),!1;_s.set(e,t);for(const c of yn.values())Ym(c,t);for(const c of DC1.values())Ym(c,t);return!0}function c0(t,e){const c=t.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),t.container.getProvider(e)}function G3(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},O6=new X0("app","Firebase",OC1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC1{constructor(e,c,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new A3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw O6.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=RC1;function Bb(t,e={}){let c=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ys,automaticDataCollectionEnabled:!1},e),a=n.name;if(typeof a!="string"||!a)throw O6.create("bad-app-name",{appName:String(a)});if(c||(c=Nb()),!c)throw O6.create("no-options");const r=yn.get(a);if(r){if(H7(c,r.options)&&H7(n,r.config))return r;throw O6.create("duplicate-app",{appName:a})}const i=new Kz1(a);for(const o of _s.values())i.addComponent(o);const s=new FC1(c,n,i);return yn.set(a,s),s}function X9(t=ys){const e=yn.get(t);if(!e&&t===ys&&Nb())return Bb();if(!e)throw O6.create("no-app",{appName:t});return e}function o3(t,e,c){var n;let a=(n=PC1[t])!==null&&n!==void 0?n:t;c&&(a+=`-${c}`);const r=a.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const s=[`Unable to register library "${a}" with version "${e}":`];r&&s.push(`library name "${a}" contains illegal characters (whitespace or "/")`),r&&i&&s.push("and"),i&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R0.warn(s.join(" "));return}c4(new A3(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC1="firebase-heartbeat-database",UC1=1,M7="firebase-heartbeat-store";let Rr=null;function Ub(){return Rr||(Rr=Fb(BC1,UC1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(M7)}catch(c){console.warn(c)}}}}).catch(t=>{throw O6.create("idb-open",{originalErrorMessage:t.message})})),Rr}async function jC1(t){try{const c=(await Ub()).transaction(M7),n=await c.objectStore(M7).get(jb(t));return await c.done,n}catch(e){if(e instanceof n4)R0.warn(e.message);else{const c=O6.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});R0.warn(c.message)}}}async function Xm(t,e){try{const n=(await Ub()).transaction(M7,"readwrite");await n.objectStore(M7).put(e,jb(t)),await n.done}catch(c){if(c instanceof n4)R0.warn(c.message);else{const n=O6.create("idb-set",{originalErrorMessage:c==null?void 0:c.message});R0.warn(n.message)}}}function jb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C1=1024,qC1=30*24*60*60*1e3;class WC1{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new KC1(c),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,c;const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qC1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const c=Zm(),{heartbeatsToSend:n,unsentEntries:a}=GC1(this._heartbeatsCache.heartbeats),r=Hn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=c,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Zm(){return new Date().toISOString().substring(0,10)}function GC1(t,e=$C1){const c=[];let n=t.slice();for(const a of t){const r=c.find(i=>i.agent===a.agent);if(r){if(r.dates.push(a.date),Jm(c)>e){r.dates.pop();break}}else if(c.push({agent:a.agent,dates:[a.date]}),Jm(c)>e){c.pop();break}n=n.slice(1)}return{heartbeatsToSend:c,unsentEntries:n}}class KC1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ib()?Rb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const c=await jC1(this.app);return c!=null&&c.heartbeats?c:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var c;if(await this._canUseIndexedDBPromise){const a=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var c;if(await this._canUseIndexedDBPromise){const a=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Jm(t){return Hn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC1(t){c4(new A3("platform-logger",e=>new lC1(e),"PRIVATE")),c4(new A3("heartbeat",e=>new WC1(e),"PRIVATE")),o3(Vs,Qm,t),o3(Vs,Qm,"esm2017"),o3("fire-js","")}QC1("");var YC1="firebase",XC1="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */o3(YC1,XC1,"app");const $b="@firebase/installations",bf="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=1e4,Wb=`w:${bf}`,Gb="FIS_v2",ZC1="https://firebaseinstallations.googleapis.com/v1",JC1=60*60*1e3,eH1="installations",tH1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cH1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},P0=new X0(eH1,tH1,cH1);function Kb(t){return t instanceof n4&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb({projectId:t}){return`${ZC1}/projects/${t}/installations`}function Yb(t){return{token:t.token,requestStatus:2,expiresIn:aH1(t.expiresIn),creationTime:Date.now()}}async function Xb(t,e){const n=(await e.json()).error;return P0.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Zb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nH1(t,{refreshToken:e}){const c=Zb(t);return c.append("Authorization",rH1(e)),c}async function Jb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function aH1(t){return Number(t.replace("s","000"))}function rH1(t){return`${Gb} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iH1({appConfig:t,heartbeatServiceProvider:e},{fid:c}){const n=Qb(t),a=Zb(t),r=e.getImmediate({optional:!0});if(r){const f=await r.getHeartbeatsHeader();f&&a.append("x-firebase-client",f)}const i={fid:c,authVersion:Gb,appId:t.appId,sdkVersion:Wb},s={method:"POST",headers:a,body:JSON.stringify(i)},o=await Jb(()=>fetch(n,s));if(o.ok){const f=await o.json();return{fid:f.fid||c,registrationStatus:2,refreshToken:f.refreshToken,authToken:Yb(f.authToken)}}else throw await Xb("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sH1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oH1=/^[cdef][\w-]{21}$/,Ls="";function lH1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const c=fH1(t);return oH1.test(c)?c:Ls}catch{return Ls}}function fH1(t){return sH1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z9(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new Map;function cE(t,e){const c=Z9(t);nE(c,e),uH1(c,e)}function nE(t,e){const c=tE.get(t);if(c)for(const n of c)n(e)}function uH1(t,e){const c=hH1();c&&c.postMessage({key:t,fid:e}),dH1()}let H0=null;function hH1(){return!H0&&"BroadcastChannel"in self&&(H0=new BroadcastChannel("[Firebase] FID Change"),H0.onmessage=t=>{nE(t.data.key,t.data.fid)}),H0}function dH1(){tE.size===0&&H0&&(H0.close(),H0=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mH1="firebase-installations-database",pH1=1,D0="firebase-installations-store";let Pr=null;function Ef(){return Pr||(Pr=Fb(mH1,pH1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(D0)}}})),Pr}async function _n(t,e){const c=Z9(t),a=(await Ef()).transaction(D0,"readwrite"),r=a.objectStore(D0),i=await r.get(c);return await r.put(e,c),await a.done,(!i||i.fid!==e.fid)&&cE(t,e.fid),e}async function aE(t){const e=Z9(t),n=(await Ef()).transaction(D0,"readwrite");await n.objectStore(D0).delete(e),await n.done}async function J9(t,e){const c=Z9(t),a=(await Ef()).transaction(D0,"readwrite"),r=a.objectStore(D0),i=await r.get(c),s=e(i);return s===void 0?await r.delete(c):await r.put(s,c),await a.done,s&&(!i||i.fid!==s.fid)&&cE(t,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(t){let e;const c=await J9(t.appConfig,n=>{const a=vH1(n),r=gH1(t,a);return e=r.registrationPromise,r.installationEntry});return c.fid===Ls?{installationEntry:await e}:{installationEntry:c,registrationPromise:e}}function vH1(t){const e=t||{fid:lH1(),registrationStatus:0};return rE(e)}function gH1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(P0.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const c={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=zH1(t,c);return{installationEntry:c,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CH1(t)}:{installationEntry:e}}async function zH1(t,e){try{const c=await iH1(t,e);return _n(t.appConfig,c)}catch(c){throw Kb(c)&&c.customData.serverCode===409?await aE(t.appConfig):await _n(t.appConfig,{fid:e.fid,registrationStatus:0}),c}}async function CH1(t){let e=await ep(t.appConfig);for(;e.registrationStatus===1;)await eE(100),e=await ep(t.appConfig);if(e.registrationStatus===0){const{installationEntry:c,registrationPromise:n}=await Tf(t);return n||c}return e}function ep(t){return J9(t,e=>{if(!e)throw P0.create("installation-not-found");return rE(e)})}function rE(t){return HH1(t)?{fid:t.fid,registrationStatus:0}:t}function HH1(t){return t.registrationStatus===1&&t.registrationTime+qb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MH1({appConfig:t,heartbeatServiceProvider:e},c){const n=VH1(t,c),a=nH1(t,c),r=e.getImmediate({optional:!0});if(r){const f=await r.getHeartbeatsHeader();f&&a.append("x-firebase-client",f)}const i={installation:{sdkVersion:Wb,appId:t.appId}},s={method:"POST",headers:a,body:JSON.stringify(i)},o=await Jb(()=>fetch(n,s));if(o.ok){const f=await o.json();return Yb(f)}else throw await Xb("Generate Auth Token",o)}function VH1(t,{fid:e}){return`${Qb(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(t,e=!1){let c;const n=await J9(t.appConfig,r=>{if(!iE(r))throw P0.create("not-registered");const i=r.authToken;if(!e&&LH1(i))return r;if(i.requestStatus===1)return c=yH1(t,e),r;{if(!navigator.onLine)throw P0.create("app-offline");const s=xH1(r);return c=_H1(t,s),s}});return c?await c:n.authToken}async function yH1(t,e){let c=await tp(t.appConfig);for(;c.authToken.requestStatus===1;)await eE(100),c=await tp(t.appConfig);const n=c.authToken;return n.requestStatus===0?kf(t,e):n}function tp(t){return J9(t,e=>{if(!iE(e))throw P0.create("not-registered");const c=e.authToken;return SH1(c)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _H1(t,e){try{const c=await MH1(t,e),n=Object.assign(Object.assign({},e),{authToken:c});return await _n(t.appConfig,n),c}catch(c){if(Kb(c)&&(c.customData.serverCode===401||c.customData.serverCode===404))await aE(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _n(t.appConfig,n)}throw c}}function iE(t){return t!==void 0&&t.registrationStatus===2}function LH1(t){return t.requestStatus===2&&!wH1(t)}function wH1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+JC1}function xH1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function SH1(t){return t.requestStatus===1&&t.requestTime+qb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NH1(t){const e=t,{installationEntry:c,registrationPromise:n}=await Tf(e);return n?n.catch(console.error):kf(e).catch(console.error),c.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bH1(t,e=!1){const c=t;return await EH1(c),(await kf(c,e)).token}async function EH1(t){const{registrationPromise:e}=await Tf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TH1(t){if(!t||!t.options)throw Dr("App Configuration");if(!t.name)throw Dr("App Name");const e=["projectId","apiKey","appId"];for(const c of e)if(!t.options[c])throw Dr(c);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Dr(t){return P0.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="installations",kH1="installations-internal",AH1=t=>{const e=t.getProvider("app").getImmediate(),c=TH1(e),n=c0(e,"heartbeat");return{app:e,appConfig:c,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},IH1=t=>{const e=t.getProvider("app").getImmediate(),c=c0(e,sE).getImmediate();return{getId:()=>NH1(c),getToken:a=>bH1(c,a)}};function RH1(){c4(new A3(sE,AH1,"PUBLIC")),c4(new A3(kH1,IH1,"PRIVATE"))}RH1();o3($b,bf);o3($b,bf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="analytics",PH1="firebase_id",DH1="origin",OH1=60*1e3,FH1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Af="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l3=new Z7("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BH1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},H3=new X0("analytics","Analytics",BH1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UH1(t){if(!t.startsWith(Af)){const e=H3.create("invalid-gtag-resource",{gtagURL:t});return l3.warn(e.message),""}return t}function oE(t){return Promise.all(t.map(e=>e.catch(c=>c)))}function jH1(t,e){let c;return window.trustedTypes&&(c=window.trustedTypes.createPolicy(t,e)),c}function $H1(t,e){const c=jH1("firebase-js-sdk-policy",{createScriptURL:UH1}),n=document.createElement("script"),a=`${Af}?l=${t}&id=${e}`;n.src=c?c==null?void 0:c.createScriptURL(a):a,n.async=!0,document.head.appendChild(n)}function qH1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function WH1(t,e,c,n,a,r){const i=n[a];try{if(i)await e[i];else{const o=(await oE(c)).find(f=>f.measurementId===a);o&&await e[o.appId]}}catch(s){l3.error(s)}t("config",a,r)}async function GH1(t,e,c,n,a){try{let r=[];if(a&&a.send_to){let i=a.send_to;Array.isArray(i)||(i=[i]);const s=await oE(c);for(const o of i){const f=s.find(h=>h.measurementId===o),u=f&&e[f.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",n,a||{})}catch(r){l3.error(r)}}function KH1(t,e,c,n){async function a(r,...i){try{if(r==="event"){const[s,o]=i;await GH1(t,e,c,s,o)}else if(r==="config"){const[s,o]=i;await WH1(t,e,c,n,s,o)}else if(r==="consent"){const[s,o]=i;t("consent",s,o)}else if(r==="get"){const[s,o,f]=i;t("get",s,o,f)}else if(r==="set"){const[s]=i;t("set",s)}else t(r,...i)}catch(s){l3.error(s)}}return a}function QH1(t,e,c,n,a){let r=function(...i){window[n].push(arguments)};return window[a]&&typeof window[a]=="function"&&(r=window[a]),window[a]=KH1(r,t,e,c),{gtagCore:r,wrappedGtag:window[a]}}function YH1(t){const e=window.document.getElementsByTagName("script");for(const c of Object.values(e))if(c.src&&c.src.includes(Af)&&c.src.includes(t))return c;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XH1=30,ZH1=1e3;class JH1{constructor(e={},c=ZH1){this.throttleMetadata=e,this.intervalMillis=c}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,c){this.throttleMetadata[e]=c}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lE=new JH1;function eM1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tM1(t){var e;const{appId:c,apiKey:n}=t,a={method:"GET",headers:eM1(n)},r=FH1.replace("{app-id}",c),i=await fetch(r,a);if(i.status!==200&&i.status!==304){let s="";try{const o=await i.json();!((e=o.error)===null||e===void 0)&&e.message&&(s=o.error.message)}catch{}throw H3.create("config-fetch-failed",{httpStatus:i.status,responseMessage:s})}return i.json()}async function cM1(t,e=lE,c){const{appId:n,apiKey:a,measurementId:r}=t.options;if(!n)throw H3.create("no-app-id");if(!a){if(r)return{measurementId:r,appId:n};throw H3.create("no-api-key")}const i=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new rM1;return setTimeout(async()=>{s.abort()},OH1),fE({appId:n,apiKey:a,measurementId:r},i,s,e)}async function fE(t,{throttleEndTimeMillis:e,backoffCount:c},n,a=lE){var r;const{appId:i,measurementId:s}=t;try{await nM1(n,e)}catch(o){if(s)return l3.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o==null?void 0:o.message}]`),{appId:i,measurementId:s};throw o}try{const o=await tM1(t);return a.deleteThrottleMetadata(i),o}catch(o){const f=o;if(!aM1(f)){if(a.deleteThrottleMetadata(i),s)return l3.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:s};throw o}const u=Number((r=f==null?void 0:f.customData)===null||r===void 0?void 0:r.httpStatus)===503?qm(c,a.intervalMillis,XH1):qm(c,a.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:c+1};return a.setThrottleMetadata(i,h),l3.debug(`Calling attemptFetch again in ${u} millis`),fE(t,h,n,a)}}function nM1(t,e){return new Promise((c,n)=>{const a=Math.max(e-Date.now(),0),r=setTimeout(c,a);t.addEventListener(()=>{clearTimeout(r),n(H3.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function aM1(t){if(!(t instanceof n4)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rM1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iM1(t,e,c,n,a){if(a&&a.global){t("event",c,n);return}else{const r=await e,i=Object.assign(Object.assign({},n),{send_to:r});t("event",c,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sM1(){if(Ib())try{await Rb()}catch(t){return l3.warn(H3.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return l3.warn(H3.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oM1(t,e,c,n,a,r,i){var s;const o=cM1(t);o.then(v=>{c[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&l3.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>l3.error(v)),e.push(o);const f=sM1().then(v=>{if(v)return n.getId()}),[u,h]=await Promise.all([o,f]);YH1(r)||$H1(r,u.measurementId),a("js",new Date);const m=(s=i==null?void 0:i.config)!==null&&s!==void 0?s:{};return m[DH1]="firebase",m.update=!0,h!=null&&(m[PH1]=h),a("config",u.measurementId,m),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM1{constructor(e){this.app=e}_delete(){return delete R5[this.app.options.appId],Promise.resolve()}}let R5={},cp=[];const np={};let Or="dataLayer",fM1="gtag",ap,uE,rp=!1;function uM1(){const t=[];if(Tb()&&t.push("This is a browser extension environment."),bz1()||t.push("Cookies are not available."),t.length>0){const e=t.map((n,a)=>`(${a+1}) ${n}`).join(" "),c=H3.create("invalid-analytics-context",{errorInfo:e});l3.warn(c.message)}}function hM1(t,e,c){uM1();const n=t.options.appId;if(!n)throw H3.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)l3.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw H3.create("no-api-key");if(R5[n]!=null)throw H3.create("already-exists",{id:n});if(!rp){qH1(Or);const{wrappedGtag:r,gtagCore:i}=QH1(R5,cp,np,Or,fM1);uE=r,ap=i,rp=!0}return R5[n]=oM1(t,cp,np,e,ap,Or,c),new lM1(t)}function dM1(t=X9()){t=c2(t);const e=c0(t,Ln);return e.isInitialized()?e.getImmediate():mM1(t)}function mM1(t,e={}){const c=c0(t,Ln);if(c.isInitialized()){const a=c.getImmediate();if(H7(e,c.getOptions()))return a;throw H3.create("already-initialized")}return c.initialize({options:e})}function pM1(t,e,c,n){t=c2(t),iM1(uE,R5[t.app.options.appId],e,c,n).catch(a=>l3.error(a))}const ip="@firebase/analytics",sp="0.10.4";function vM1(){c4(new A3(Ln,(e,{options:c})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return hM1(n,a,c)},"PUBLIC")),c4(new A3("analytics-internal",t,"PRIVATE")),o3(ip,sp),o3(ip,sp,"esm2017");function t(e){try{const c=e.getProvider(Ln).getImmediate();return{logEvent:(n,a,r)=>pM1(c,n,a,r)}}catch(c){throw H3.create("interop-component-reg-failed",{reason:c})}}}vM1();var op=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x0,hE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(L,z){function x(){}x.prototype=z.prototype,L.D=z.prototype,L.prototype=new x,L.prototype.constructor=L,L.C=function(N,T,k){for(var b=Array(arguments.length-2),b1=2;b1<arguments.length;b1++)b[b1-2]=arguments[b1];return z.prototype[T].apply(N,b)}}function c(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,c),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(L,z,x){x||(x=0);var N=Array(16);if(typeof z=="string")for(var T=0;16>T;++T)N[T]=z.charCodeAt(x++)|z.charCodeAt(x++)<<8|z.charCodeAt(x++)<<16|z.charCodeAt(x++)<<24;else for(T=0;16>T;++T)N[T]=z[x++]|z[x++]<<8|z[x++]<<16|z[x++]<<24;z=L.g[0],x=L.g[1],T=L.g[2];var k=L.g[3],b=z+(k^x&(T^k))+N[0]+3614090360&4294967295;z=x+(b<<7&4294967295|b>>>25),b=k+(T^z&(x^T))+N[1]+3905402710&4294967295,k=z+(b<<12&4294967295|b>>>20),b=T+(x^k&(z^x))+N[2]+606105819&4294967295,T=k+(b<<17&4294967295|b>>>15),b=x+(z^T&(k^z))+N[3]+3250441966&4294967295,x=T+(b<<22&4294967295|b>>>10),b=z+(k^x&(T^k))+N[4]+4118548399&4294967295,z=x+(b<<7&4294967295|b>>>25),b=k+(T^z&(x^T))+N[5]+1200080426&4294967295,k=z+(b<<12&4294967295|b>>>20),b=T+(x^k&(z^x))+N[6]+2821735955&4294967295,T=k+(b<<17&4294967295|b>>>15),b=x+(z^T&(k^z))+N[7]+4249261313&4294967295,x=T+(b<<22&4294967295|b>>>10),b=z+(k^x&(T^k))+N[8]+1770035416&4294967295,z=x+(b<<7&4294967295|b>>>25),b=k+(T^z&(x^T))+N[9]+2336552879&4294967295,k=z+(b<<12&4294967295|b>>>20),b=T+(x^k&(z^x))+N[10]+4294925233&4294967295,T=k+(b<<17&4294967295|b>>>15),b=x+(z^T&(k^z))+N[11]+2304563134&4294967295,x=T+(b<<22&4294967295|b>>>10),b=z+(k^x&(T^k))+N[12]+1804603682&4294967295,z=x+(b<<7&4294967295|b>>>25),b=k+(T^z&(x^T))+N[13]+4254626195&4294967295,k=z+(b<<12&4294967295|b>>>20),b=T+(x^k&(z^x))+N[14]+2792965006&4294967295,T=k+(b<<17&4294967295|b>>>15),b=x+(z^T&(k^z))+N[15]+1236535329&4294967295,x=T+(b<<22&4294967295|b>>>10),b=z+(T^k&(x^T))+N[1]+4129170786&4294967295,z=x+(b<<5&4294967295|b>>>27),b=k+(x^T&(z^x))+N[6]+3225465664&4294967295,k=z+(b<<9&4294967295|b>>>23),b=T+(z^x&(k^z))+N[11]+643717713&4294967295,T=k+(b<<14&4294967295|b>>>18),b=x+(k^z&(T^k))+N[0]+3921069994&4294967295,x=T+(b<<20&4294967295|b>>>12),b=z+(T^k&(x^T))+N[5]+3593408605&4294967295,z=x+(b<<5&4294967295|b>>>27),b=k+(x^T&(z^x))+N[10]+38016083&4294967295,k=z+(b<<9&4294967295|b>>>23),b=T+(z^x&(k^z))+N[15]+3634488961&4294967295,T=k+(b<<14&4294967295|b>>>18),b=x+(k^z&(T^k))+N[4]+3889429448&4294967295,x=T+(b<<20&4294967295|b>>>12),b=z+(T^k&(x^T))+N[9]+568446438&4294967295,z=x+(b<<5&4294967295|b>>>27),b=k+(x^T&(z^x))+N[14]+3275163606&4294967295,k=z+(b<<9&4294967295|b>>>23),b=T+(z^x&(k^z))+N[3]+4107603335&4294967295,T=k+(b<<14&4294967295|b>>>18),b=x+(k^z&(T^k))+N[8]+1163531501&4294967295,x=T+(b<<20&4294967295|b>>>12),b=z+(T^k&(x^T))+N[13]+2850285829&4294967295,z=x+(b<<5&4294967295|b>>>27),b=k+(x^T&(z^x))+N[2]+4243563512&4294967295,k=z+(b<<9&4294967295|b>>>23),b=T+(z^x&(k^z))+N[7]+1735328473&4294967295,T=k+(b<<14&4294967295|b>>>18),b=x+(k^z&(T^k))+N[12]+2368359562&4294967295,x=T+(b<<20&4294967295|b>>>12),b=z+(x^T^k)+N[5]+4294588738&4294967295,z=x+(b<<4&4294967295|b>>>28),b=k+(z^x^T)+N[8]+2272392833&4294967295,k=z+(b<<11&4294967295|b>>>21),b=T+(k^z^x)+N[11]+1839030562&4294967295,T=k+(b<<16&4294967295|b>>>16),b=x+(T^k^z)+N[14]+4259657740&4294967295,x=T+(b<<23&4294967295|b>>>9),b=z+(x^T^k)+N[1]+2763975236&4294967295,z=x+(b<<4&4294967295|b>>>28),b=k+(z^x^T)+N[4]+1272893353&4294967295,k=z+(b<<11&4294967295|b>>>21),b=T+(k^z^x)+N[7]+4139469664&4294967295,T=k+(b<<16&4294967295|b>>>16),b=x+(T^k^z)+N[10]+3200236656&4294967295,x=T+(b<<23&4294967295|b>>>9),b=z+(x^T^k)+N[13]+681279174&4294967295,z=x+(b<<4&4294967295|b>>>28),b=k+(z^x^T)+N[0]+3936430074&4294967295,k=z+(b<<11&4294967295|b>>>21),b=T+(k^z^x)+N[3]+3572445317&4294967295,T=k+(b<<16&4294967295|b>>>16),b=x+(T^k^z)+N[6]+76029189&4294967295,x=T+(b<<23&4294967295|b>>>9),b=z+(x^T^k)+N[9]+3654602809&4294967295,z=x+(b<<4&4294967295|b>>>28),b=k+(z^x^T)+N[12]+3873151461&4294967295,k=z+(b<<11&4294967295|b>>>21),b=T+(k^z^x)+N[15]+530742520&4294967295,T=k+(b<<16&4294967295|b>>>16),b=x+(T^k^z)+N[2]+3299628645&4294967295,x=T+(b<<23&4294967295|b>>>9),b=z+(T^(x|~k))+N[0]+4096336452&4294967295,z=x+(b<<6&4294967295|b>>>26),b=k+(x^(z|~T))+N[7]+1126891415&4294967295,k=z+(b<<10&4294967295|b>>>22),b=T+(z^(k|~x))+N[14]+2878612391&4294967295,T=k+(b<<15&4294967295|b>>>17),b=x+(k^(T|~z))+N[5]+4237533241&4294967295,x=T+(b<<21&4294967295|b>>>11),b=z+(T^(x|~k))+N[12]+1700485571&4294967295,z=x+(b<<6&4294967295|b>>>26),b=k+(x^(z|~T))+N[3]+2399980690&4294967295,k=z+(b<<10&4294967295|b>>>22),b=T+(z^(k|~x))+N[10]+4293915773&4294967295,T=k+(b<<15&4294967295|b>>>17),b=x+(k^(T|~z))+N[1]+2240044497&4294967295,x=T+(b<<21&4294967295|b>>>11),b=z+(T^(x|~k))+N[8]+1873313359&4294967295,z=x+(b<<6&4294967295|b>>>26),b=k+(x^(z|~T))+N[15]+4264355552&4294967295,k=z+(b<<10&4294967295|b>>>22),b=T+(z^(k|~x))+N[6]+2734768916&4294967295,T=k+(b<<15&4294967295|b>>>17),b=x+(k^(T|~z))+N[13]+1309151649&4294967295,x=T+(b<<21&4294967295|b>>>11),b=z+(T^(x|~k))+N[4]+4149444226&4294967295,z=x+(b<<6&4294967295|b>>>26),b=k+(x^(z|~T))+N[11]+3174756917&4294967295,k=z+(b<<10&4294967295|b>>>22),b=T+(z^(k|~x))+N[2]+718787259&4294967295,T=k+(b<<15&4294967295|b>>>17),b=x+(k^(T|~z))+N[9]+3951481745&4294967295,L.g[0]=L.g[0]+z&4294967295,L.g[1]=L.g[1]+(T+(b<<21&4294967295|b>>>11))&4294967295,L.g[2]=L.g[2]+T&4294967295,L.g[3]=L.g[3]+k&4294967295}n.prototype.u=function(L,z){z===void 0&&(z=L.length);for(var x=z-this.blockSize,N=this.B,T=this.h,k=0;k<z;){if(T==0)for(;k<=x;)a(this,L,k),k+=this.blockSize;if(typeof L=="string"){for(;k<z;)if(N[T++]=L.charCodeAt(k++),T==this.blockSize){a(this,N),T=0;break}}else for(;k<z;)if(N[T++]=L[k++],T==this.blockSize){a(this,N),T=0;break}}this.h=T,this.o+=z},n.prototype.v=function(){var L=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);L[0]=128;for(var z=1;z<L.length-8;++z)L[z]=0;var x=8*this.o;for(z=L.length-8;z<L.length;++z)L[z]=x&255,x/=256;for(this.u(L),L=Array(16),z=x=0;4>z;++z)for(var N=0;32>N;N+=8)L[x++]=this.g[z]>>>N&255;return L};function r(L,z){var x=s;return Object.prototype.hasOwnProperty.call(x,L)?x[L]:x[L]=z(L)}function i(L,z){this.h=z;for(var x=[],N=!0,T=L.length-1;0<=T;T--){var k=L[T]|0;N&&k==z||(x[T]=k,N=!1)}this.g=x}var s={};function o(L){return-128<=L&&128>L?r(L,function(z){return new i([z|0],0>z?-1:0)}):new i([L|0],0>L?-1:0)}function f(L){if(isNaN(L)||!isFinite(L))return h;if(0>L)return S(f(-L));for(var z=[],x=1,N=0;L>=x;N++)z[N]=L/x|0,x*=4294967296;return new i(z,0)}function u(L,z){if(L.length==0)throw Error("number format error: empty string");if(z=z||10,2>z||36<z)throw Error("radix out of range: "+z);if(L.charAt(0)=="-")return S(u(L.substring(1),z));if(0<=L.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=f(Math.pow(z,8)),N=h,T=0;T<L.length;T+=8){var k=Math.min(8,L.length-T),b=parseInt(L.substring(T,T+k),z);8>k?(k=f(Math.pow(z,k)),N=N.j(k).add(f(b))):(N=N.j(x),N=N.add(f(b)))}return N}var h=o(0),m=o(1),v=o(16777216);t=i.prototype,t.m=function(){if(w(this))return-S(this).m();for(var L=0,z=1,x=0;x<this.g.length;x++){var N=this.i(x);L+=(0<=N?N:4294967296+N)*z,z*=4294967296}return L},t.toString=function(L){if(L=L||10,2>L||36<L)throw Error("radix out of range: "+L);if(H(this))return"0";if(w(this))return"-"+S(this).toString(L);for(var z=f(Math.pow(L,6)),x=this,N="";;){var T=E(x,z).g;x=M(x,T.j(z));var k=((0<x.g.length?x.g[0]:x.h)>>>0).toString(L);if(x=T,H(x))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},t.i=function(L){return 0>L?0:L<this.g.length?this.g[L]:this.h};function H(L){if(L.h!=0)return!1;for(var z=0;z<L.g.length;z++)if(L.g[z]!=0)return!1;return!0}function w(L){return L.h==-1}t.l=function(L){return L=M(this,L),w(L)?-1:H(L)?0:1};function S(L){for(var z=L.g.length,x=[],N=0;N<z;N++)x[N]=~L.g[N];return new i(x,~L.h).add(m)}t.abs=function(){return w(this)?S(this):this},t.add=function(L){for(var z=Math.max(this.g.length,L.g.length),x=[],N=0,T=0;T<=z;T++){var k=N+(this.i(T)&65535)+(L.i(T)&65535),b=(k>>>16)+(this.i(T)>>>16)+(L.i(T)>>>16);N=b>>>16,k&=65535,b&=65535,x[T]=b<<16|k}return new i(x,x[x.length-1]&-2147483648?-1:0)};function M(L,z){return L.add(S(z))}t.j=function(L){if(H(this)||H(L))return h;if(w(this))return w(L)?S(this).j(S(L)):S(S(this).j(L));if(w(L))return S(this.j(S(L)));if(0>this.l(v)&&0>L.l(v))return f(this.m()*L.m());for(var z=this.g.length+L.g.length,x=[],N=0;N<2*z;N++)x[N]=0;for(N=0;N<this.g.length;N++)for(var T=0;T<L.g.length;T++){var k=this.i(N)>>>16,b=this.i(N)&65535,b1=L.i(T)>>>16,$1=L.i(T)&65535;x[2*N+2*T]+=b*$1,C(x,2*N+2*T),x[2*N+2*T+1]+=k*$1,C(x,2*N+2*T+1),x[2*N+2*T+1]+=b*b1,C(x,2*N+2*T+1),x[2*N+2*T+2]+=k*b1,C(x,2*N+2*T+2)}for(N=0;N<z;N++)x[N]=x[2*N+1]<<16|x[2*N];for(N=z;N<2*z;N++)x[N]=0;return new i(x,0)};function C(L,z){for(;(L[z]&65535)!=L[z];)L[z+1]+=L[z]>>>16,L[z]&=65535,z++}function V(L,z){this.g=L,this.h=z}function E(L,z){if(H(z))throw Error("division by zero");if(H(L))return new V(h,h);if(w(L))return z=E(S(L),z),new V(S(z.g),S(z.h));if(w(z))return z=E(L,S(z)),new V(S(z.g),z.h);if(30<L.g.length){if(w(L)||w(z))throw Error("slowDivide_ only works with positive integers.");for(var x=m,N=z;0>=N.l(L);)x=R(x),N=R(N);var T=I(x,1),k=I(N,1);for(N=I(N,2),x=I(x,2);!H(N);){var b=k.add(N);0>=b.l(L)&&(T=T.add(x),k=b),N=I(N,1),x=I(x,1)}return z=M(L,T.j(z)),new V(T,z)}for(T=h;0<=L.l(z);){for(x=Math.max(1,Math.floor(L.m()/z.m())),N=Math.ceil(Math.log(x)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=f(x),b=k.j(z);w(b)||0<b.l(L);)x-=N,k=f(x),b=k.j(z);H(k)&&(k=m),T=T.add(k),L=M(L,b)}return new V(T,L)}t.A=function(L){return E(this,L).h},t.and=function(L){for(var z=Math.max(this.g.length,L.g.length),x=[],N=0;N<z;N++)x[N]=this.i(N)&L.i(N);return new i(x,this.h&L.h)},t.or=function(L){for(var z=Math.max(this.g.length,L.g.length),x=[],N=0;N<z;N++)x[N]=this.i(N)|L.i(N);return new i(x,this.h|L.h)},t.xor=function(L){for(var z=Math.max(this.g.length,L.g.length),x=[],N=0;N<z;N++)x[N]=this.i(N)^L.i(N);return new i(x,this.h^L.h)};function R(L){for(var z=L.g.length+1,x=[],N=0;N<z;N++)x[N]=L.i(N)<<1|L.i(N-1)>>>31;return new i(x,L.h)}function I(L,z){var x=z>>5;z%=32;for(var N=L.g.length-x,T=[],k=0;k<N;k++)T[k]=0<z?L.i(k+x)>>>z|L.i(k+x+1)<<32-z:L.i(k+x);return new i(T,L.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,hE=n,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=f,i.fromString=u,x0=i}).apply(typeof op<"u"?op:typeof self<"u"?self:typeof window<"u"?window:{});var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dE,mE,M5,pE,Sc,ws,vE,gE,zE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function c(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof rc=="object"&&rc];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var n=c(this);function a(l,d){if(d)e:{var p=n;l=l.split(".");for(var y=0;y<l.length-1;y++){var A=l[y];if(!(A in p))break e;p=p[A]}l=l[l.length-1],y=p[l],d=d(y),d!=y&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function r(l,d){l instanceof String&&(l+="");var p=0,y=!1,A={next:function(){if(!y&&p<l.length){var P=p++;return{value:d(P,l[P]),done:!1}}return y=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}a("Array.prototype.values",function(l){return l||function(){return r(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},s=this||self;function o(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function f(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function u(l,d,p){return l.call.apply(l.bind,arguments)}function h(l,d,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,y),l.apply(d,A)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:h,m.apply(null,arguments)}function v(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function H(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,A,P){for(var j=Array(arguments.length-2),E1=2;E1<arguments.length;E1++)j[E1-2]=arguments[E1];return d.prototype[A].apply(y,j)}}function w(l){const d=l.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=l[y];return p}return[]}function S(l,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(o(y)){const A=l.length||0,P=y.length||0;l.length=A+P;for(let j=0;j<P;j++)l[A+j]=y[j]}else l.push(y)}}class M{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function C(l){return/^[\s\xa0]*$/.test(l)}function V(){var l=s.navigator;return l&&(l=l.userAgent)?l:""}function E(l){return E[" "](l),l}E[" "]=function(){};var R=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function I(l,d,p){for(const y in l)d.call(p,l[y],y,l)}function L(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function z(l){const d={};for(const p in l)d[p]=l[p];return d}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,d){let p,y;for(let A=1;A<arguments.length;A++){y=arguments[A];for(p in y)l[p]=y[p];for(let P=0;P<x.length;P++)p=x[P],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function T(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function k(l){s.setTimeout(()=>{throw l},0)}function b(){var l=W;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class b1{constructor(){this.h=this.g=null}add(d,p){const y=$1.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var $1=new M(()=>new J1,l=>l.reset());class J1{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let d1,D=!1,W=new b1,Q=()=>{const l=s.Promise.resolve(void 0);d1=()=>{l.then(i1)}};var i1=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(p){k(p)}var d=$1;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}D=!1};function n1(){this.s=this.s,this.C=this.C}n1.prototype.s=!1,n1.prototype.ma=function(){this.s||(this.s=!0,this.N())},n1.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function t1(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}t1.prototype.h=function(){this.defaultPrevented=!0};var H1=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};s.addEventListener("test",p,d),s.removeEventListener("test",p,d)}catch{}return l}();function f1(l,d){if(t1.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(R){e:{try{E(d.nodeName);var A=!0;break e}catch{}A=!1}A||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:s1[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&f1.aa.h.call(this)}}H(f1,t1);var s1={2:"touch",3:"pen",4:"mouse"};f1.prototype.h=function(){f1.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var o2="closure_listenable_"+(1e6*Math.random()|0),h3=0;function i6(l,d,p,y,A){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=A,this.key=++h3,this.da=this.fa=!1}function R3(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function y2(l){this.src=l,this.g={},this.h=0}y2.prototype.add=function(l,d,p,y,A){var P=l.toString();l=this.g[P],l||(l=this.g[P]=[],this.h++);var j=P3(l,d,y,A);return-1<j?(d=l[j],p||(d.fa=!1)):(d=new i6(d,this.src,P,!!y,A),d.fa=p,l.push(d)),d};function _2(l,d){var p=d.type;if(p in l.g){var y=l.g[p],A=Array.prototype.indexOf.call(y,d,void 0),P;(P=0<=A)&&Array.prototype.splice.call(y,A,1),P&&(R3(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function P3(l,d,p,y){for(var A=0;A<l.length;++A){var P=l[A];if(!P.da&&P.listener==d&&P.capture==!!p&&P.ha==y)return A}return-1}var D3="closure_lm_"+(1e6*Math.random()|0),V1={};function a0(l,d,p,y,A){if(Array.isArray(d)){for(var P=0;P<d.length;P++)a0(l,d[P],p,y,A);return null}return p=R8(p),l&&l[o2]?l.K(d,p,f(y)?!!y.capture:!!y,A):r0(l,d,p,!1,y,A)}function r0(l,d,p,y,A,P){if(!d)throw Error("Invalid event type");var j=f(A)?!!A.capture:!!A,E1=ce(l);if(E1||(l[D3]=E1=new y2(l)),p=E1.add(d,p,y,j,P),p.proxy)return p;if(y=Na(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)H1||(A=j),A===void 0&&(A=!1),l.addEventListener(d.toString(),y,A);else if(l.attachEvent)l.attachEvent(pt(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Na(){function l(p){return d.call(l.src,l.listener,p)}const d=ba;return l}function mt(l,d,p,y,A){if(Array.isArray(d))for(var P=0;P<d.length;P++)mt(l,d[P],p,y,A);else y=f(y)?!!y.capture:!!y,p=R8(p),l&&l[o2]?(l=l.i,d=String(d).toString(),d in l.g&&(P=l.g[d],p=P3(P,p,y,A),-1<p&&(R3(P[p]),Array.prototype.splice.call(P,p,1),P.length==0&&(delete l.g[d],l.h--)))):l&&(l=ce(l))&&(d=l.g[d.toString()],l=-1,d&&(l=P3(d,p,y,A)),(p=-1<l?d[l]:null)&&I8(p))}function I8(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[o2])_2(d.i,l);else{var p=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(p,y,l.capture):d.detachEvent?d.detachEvent(pt(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=ce(d))?(_2(p,l),p.h==0&&(p.src=null,d[D3]=null)):R3(l)}}}function pt(l){return l in V1?V1[l]:V1[l]="on"+l}function ba(l,d){if(l.da)l=!0;else{d=new f1(d,this);var p=l.listener,y=l.ha||l.src;l.fa&&I8(l),l=p.call(y,d)}return l}function ce(l){return l=l[D3],l instanceof y2?l:null}var s6="__closure_events_fn_"+(1e9*Math.random()>>>0);function R8(l){return typeof l=="function"?l:(l[s6]||(l[s6]=function(d){return l.handleEvent(d)}),l[s6])}function p2(){n1.call(this),this.i=new y2(this),this.M=this,this.F=null}H(p2,n1),p2.prototype[o2]=!0,p2.prototype.removeEventListener=function(l,d,p,y){mt(this,l,d,p,y)};function L2(l,d){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new t1(d,l);else if(d instanceof t1)d.target=d.target||l;else{var A=d;d=new t1(y,l),N(d,A)}if(A=!0,p)for(var P=p.length-1;0<=P;P--){var j=d.g=p[P];A=ne(j,y,!0,d)&&A}if(j=d.g=l,A=ne(j,y,!0,d)&&A,A=ne(j,y,!1,d)&&A,p)for(P=0;P<p.length;P++)j=d.g=p[P],A=ne(j,y,!1,d)&&A}p2.prototype.N=function(){if(p2.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],y=0;y<p.length;y++)R3(p[y]);delete l.g[d],l.h--}}this.F=null},p2.prototype.K=function(l,d,p,y){return this.i.add(String(l),d,!1,p,y)},p2.prototype.L=function(l,d,p,y){return this.i.add(String(l),d,!0,p,y)};function ne(l,d,p,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var A=!0,P=0;P<d.length;++P){var j=d[P];if(j&&!j.da&&j.capture==p){var E1=j.listener,w2=j.ha||j.src;j.fa&&_2(l.i,j),A=E1.call(w2,y)!==!1&&A}}return A&&!y.defaultPrevented}function P8(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:s.setTimeout(l,d||0)}function ae(l){l.g=P8(()=>{l.g=null,l.i&&(l.i=!1,ae(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class vt extends n1{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ae(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(l){n1.call(this),this.h=l,this.g={}}H(Z,n1);var x1=[];function L3(l){I(l.g,function(d,p){this.g.hasOwnProperty(p)&&I8(d)},l),l.g={}}Z.prototype.N=function(){Z.aa.N.call(this),L3(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var g4=s.JSON.stringify,Ea=s.JSON.parse,jA=class{stringify(l){return s.JSON.stringify(l,void 0)}parse(l){return s.JSON.parse(l,void 0)}};function Ta(){}Ta.prototype.h=null;function Xu(l){return l.h||(l.h=l.i())}function Zu(){}var D8={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ka(){t1.call(this,"d")}H(ka,t1);function Aa(){t1.call(this,"c")}H(Aa,t1);var i0={},Ju=null;function gt(){return Ju=Ju||new p2}i0.La="serverreachability";function eh(l){t1.call(this,i0.La,l)}H(eh,t1);function O8(l){const d=gt();L2(d,new eh(d))}i0.STAT_EVENT="statevent";function th(l,d){t1.call(this,i0.STAT_EVENT,l),this.stat=d}H(th,t1);function G2(l){const d=gt();L2(d,new th(d,l))}i0.Ma="timingevent";function ch(l,d){t1.call(this,i0.Ma,l),this.size=d}H(ch,t1);function F8(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){l()},d)}function B8(){this.g=!0}B8.prototype.xa=function(){this.g=!1};function $A(l,d,p,y,A,P){l.info(function(){if(l.g)if(P)for(var j="",E1=P.split("&"),w2=0;w2<E1.length;w2++){var _1=E1[w2].split("=");if(1<_1.length){var I2=_1[0];_1=_1[1];var R2=I2.split("_");j=2<=R2.length&&R2[1]=="type"?j+(I2+"="+_1+"&"):j+(I2+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+y+") [attempt "+A+"]: "+d+`
`+p+`
`+j})}function qA(l,d,p,y,A,P,j){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+A+"]: "+d+`
`+p+`
`+P+" "+j})}function re(l,d,p,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+GA(l,p)+(y?" "+y:"")})}function WA(l,d){l.info(function(){return"TIMEOUT: "+d})}B8.prototype.info=function(){};function GA(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var A=y[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<A.length;j++)A[j]=""}}}}return g4(p)}catch{return d}}var zt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ia;function Ct(){}H(Ct,Ta),Ct.prototype.g=function(){return new XMLHttpRequest},Ct.prototype.i=function(){return{}},Ia=new Ct;function o6(l,d,p,y){this.j=l,this.i=d,this.l=p,this.R=y||1,this.U=new Z(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var rh={},Ra={};function Pa(l,d,p){l.L=1,l.v=yt(z4(d)),l.m=p,l.P=!0,ih(l,null)}function ih(l,d){l.F=Date.now(),Ht(l),l.A=z4(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Hh(p.i,"t",y),l.C=0,p=l.j.J,l.h=new ah,l.g=Dh(l.j,p?d:null,!l.m),0<l.O&&(l.M=new vt(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,y=l.ca;var A="readystatechange";Array.isArray(A)||(A&&(x1[0]=A.toString()),A=x1);for(var P=0;P<A.length;P++){var j=a0(p,A[P],y||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=l.H?z(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),O8(),$A(l.i,l.u,l.A,l.l,l.R,l.m)}o6.prototype.ca=function(l){l=l.target;const d=this.M;d&&C4(l)==3?d.j():this.Y(l)},o6.prototype.Y=function(l){try{if(l==this.g)e:{const R2=C4(this.g);var d=this.g.Ba();const oe=this.g.Z();if(!(3>R2)&&(R2!=3||this.g&&(this.h.h||this.g.oa()||xh(this.g)))){this.J||R2!=4||d==7||(d==8||0>=oe?O8(3):O8(2)),Da(this);var p=this.g.Z();this.X=p;t:if(sh(this)){var y=xh(this.g);l="";var A=y.length,P=C4(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){s0(this),U8(this);var j="";break t}this.h.i=new s.TextDecoder}for(d=0;d<A;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(P&&d==A-1)});y.length=0,this.h.g+=l,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=p==200,qA(this.i,this.u,this.A,this.l,this.R,R2,p),this.o){if(this.T&&!this.K){t:{if(this.g){var E1,w2=this.g;if((E1=w2.g?w2.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(E1)){var _1=E1;break t}}_1=null}if(p=_1)re(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oa(this,p);else{this.o=!1,this.s=3,G2(12),s0(this),U8(this);break e}}if(this.P){p=!0;let O3;for(;!this.J&&this.C<j.length;)if(O3=KA(this,j),O3==Ra){R2==4&&(this.s=4,G2(14),p=!1),re(this.i,this.l,null,"[Incomplete Response]");break}else if(O3==rh){this.s=4,G2(15),re(this.i,this.l,j,"[Invalid Chunk]"),p=!1;break}else re(this.i,this.l,O3,null),Oa(this,O3);if(sh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),R2!=4||j.length!=0||this.h.h||(this.s=1,G2(16),p=!1),this.o=this.o&&p,!p)re(this.i,this.l,j,"[Invalid Chunked Response]"),s0(this),U8(this);else if(0<j.length&&!this.W){this.W=!0;var I2=this.j;I2.g==this&&I2.ba&&!I2.M&&(I2.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),qa(I2),I2.M=!0,G2(11))}}else re(this.i,this.l,j,null),Oa(this,j);R2==4&&s0(this),this.o&&!this.J&&(R2==4?Ah(this.j,this):(this.o=!1,Ht(this)))}else uI(this.g),p==400&&0<j.indexOf("Unknown SID")?(this.s=3,G2(12)):(this.s=0,G2(13)),s0(this),U8(this)}}}catch{}finally{}};function sh(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function KA(l,d){var p=l.C,y=d.indexOf(`
`,p);return y==-1?Ra:(p=Number(d.substring(p,y)),isNaN(p)?rh:(y+=1,y+p>d.length?Ra:(d=d.slice(y,y+p),l.C=y+p,d)))}o6.prototype.cancel=function(){this.J=!0,s0(this)};function Ht(l){l.S=Date.now()+l.I,oh(l,l.I)}function oh(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=F8(m(l.ba,l),d)}function Da(l){l.B&&(s.clearTimeout(l.B),l.B=null)}o6.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(WA(this.i,this.A),this.L!=2&&(O8(),G2(17)),s0(this),this.s=2,U8(this)):oh(this,this.S-l)};function U8(l){l.j.G==0||l.J||Ah(l.j,l)}function s0(l){Da(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,L3(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Oa(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Fa(p.h,l))){if(!l.K&&Fa(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var A=y;if(A[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)St(p),wt(p);else break e;$a(p),G2(18)}}else p.za=A[1],0<p.za-p.T&&37500>A[2]&&p.F&&p.v==0&&!p.C&&(p.C=F8(m(p.Za,p),6e3));if(1>=uh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else l0(p,11)}else if((l.K||p.g==l)&&St(p),!C(d))for(A=p.Da.g.parse(d),d=0;d<A.length;d++){let _1=A[d];if(p.T=_1[0],_1=_1[1],p.G==2)if(_1[0]=="c"){p.K=_1[1],p.ia=_1[2];const I2=_1[3];I2!=null&&(p.la=I2,p.j.info("VER="+p.la));const R2=_1[4];R2!=null&&(p.Aa=R2,p.j.info("SVER="+p.Aa));const oe=_1[5];oe!=null&&typeof oe=="number"&&0<oe&&(y=1.5*oe,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const O3=l.g;if(O3){const bt=O3.g?O3.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bt){var P=y.h;P.g||bt.indexOf("spdy")==-1&&bt.indexOf("quic")==-1&&bt.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ba(P,P.h),P.h=null))}if(y.D){const Wa=O3.g?O3.g.getResponseHeader("X-HTTP-Session-Id"):null;Wa&&(y.ya=Wa,R1(y.I,y.D,Wa))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var j=l;if(y.qa=Ph(y,y.J?y.ia:null,y.W),j.K){hh(y.h,j);var E1=j,w2=y.L;w2&&(E1.I=w2),E1.B&&(Da(E1),Ht(E1)),y.g=j}else Th(y);0<p.i.length&&xt(p)}else _1[0]!="stop"&&_1[0]!="close"||l0(p,7);else p.G==3&&(_1[0]=="stop"||_1[0]=="close"?_1[0]=="stop"?l0(p,7):ja(p):_1[0]!="noop"&&p.l&&p.l.ta(_1),p.v=0)}}O8(4)}catch{}}var QA=class{constructor(l,d){this.g=l,this.map=d}};function lh(l){this.l=l||10,s.PerformanceNavigationTiming?(l=s.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fh(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function uh(l){return l.h?1:l.g?l.g.size:0}function Fa(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Ba(l,d){l.g?l.g.add(d):l.h=d}function hh(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}lh.prototype.cancel=function(){if(this.i=dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function dh(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return w(l.i)}function YA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(o(l)){for(var d=[],p=l.length,y=0;y<p;y++)d.push(l[y]);return d}d=[],p=0;for(y in l)d[p++]=l[y];return d}function XA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(o(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const y in l)d[p++]=y;return d}}}function mh(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(o(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=XA(l),y=YA(l),A=y.length,P=0;P<A;P++)d.call(void 0,y[P],p&&p[P],l)}var ph=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZA(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),A=null;if(0<=y){var P=l[p].substring(0,y);A=l[p].substring(y+1)}else P=l[p];d(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function o0(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof o0){this.h=l.h,Mt(this,l.j),this.o=l.o,this.g=l.g,Vt(this,l.s),this.l=l.l;var d=l.i,p=new q8;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),vh(this,p),this.m=l.m}else l&&(d=String(l).match(ph))?(this.h=!1,Mt(this,d[1]||"",!0),this.o=j8(d[2]||""),this.g=j8(d[3]||"",!0),Vt(this,d[4]),this.l=j8(d[5]||"",!0),vh(this,d[6]||"",!0),this.m=j8(d[7]||"")):(this.h=!1,this.i=new q8(null,this.h))}o0.prototype.toString=function(){var l=[],d=this.j;d&&l.push($8(d,gh,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push($8(d,gh,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push($8(p,p.charAt(0)=="/"?tI:eI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",$8(p,nI)),l.join("")};function z4(l){return new o0(l)}function Mt(l,d,p){l.j=p?j8(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Vt(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function vh(l,d,p){d instanceof q8?(l.i=d,aI(l.i,l.h)):(p||(d=$8(d,cI)),l.i=new q8(d,l.h))}function R1(l,d,p){l.i.set(d,p)}function yt(l){return R1(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function j8(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function $8(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,JA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function JA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var gh=/[#\/\?@]/g,eI=/[#\?:]/g,tI=/[#\?]/g,cI=/[#\?@]/g,nI=/#/g;function q8(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function l6(l){l.g||(l.g=new Map,l.h=0,l.i&&ZA(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=q8.prototype,t.add=function(l,d){l6(this),this.i=null,l=ie(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function zh(l,d){l6(l),d=ie(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ch(l,d){return l6(l),d=ie(l,d),l.g.has(d)}t.forEach=function(l,d){l6(this),this.g.forEach(function(p,y){p.forEach(function(A){l.call(d,A,y,this)},this)},this)},t.na=function(){l6(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const A=l[y];for(let P=0;P<A.length;P++)p.push(d[y])}return p},t.V=function(l){l6(this);let d=[];if(typeof l=="string")Ch(this,l)&&(d=d.concat(this.g.get(ie(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return l6(this),this.i=null,l=ie(this,l),Ch(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Hh(l,d,p){zh(l,d),0<p.length&&(l.i=null,l.g.set(ie(l,d),w(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const P=encodeURIComponent(String(y)),j=this.V(y);for(y=0;y<j.length;y++){var A=P;j[y]!==""&&(A+="="+encodeURIComponent(String(j[y]))),l.push(A)}}return this.i=l.join("&")};function ie(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function aI(l,d){d&&!l.j&&(l6(l),l.i=null,l.g.forEach(function(p,y){var A=y.toLowerCase();y!=A&&(zh(this,y),Hh(this,A,p))},l)),l.j=d}function rI(l,d){const p=new B8;if(s.Image){const y=new Image;y.onload=v(f6,p,"TestLoadImage: loaded",!0,d,y),y.onerror=v(f6,p,"TestLoadImage: error",!1,d,y),y.onabort=v(f6,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=v(f6,p,"TestLoadImage: timeout",!1,d,y),s.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function iI(l,d){const p=new B8,y=new AbortController,A=setTimeout(()=>{y.abort(),f6(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(P=>{clearTimeout(A),P.ok?f6(p,"TestPingServer: ok",!0,d):f6(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(A),f6(p,"TestPingServer: error",!1,d)})}function f6(l,d,p,y,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),y(p)}catch{}}function sI(){this.g=new jA}function oI(l,d,p){const y=p||"";try{mh(l,function(A,P){let j=A;f(A)&&(j=g4(A)),d.push(y+P+"="+encodeURIComponent(j))})}catch(A){throw d.push(y+"type="+encodeURIComponent("_badmap")),A}}function W8(l){this.l=l.Ub||null,this.j=l.eb||!1}H(W8,Ta),W8.prototype.g=function(){return new _t(this.l,this.j)},W8.prototype.i=function(l){return function(){return l}}({});function _t(l,d){p2.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(_t,p2),t=_t.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,K8(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||s).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,G8(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,K8(this)),this.g&&(this.readyState=3,K8(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof s.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mh(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mh(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?G8(this):K8(this),this.readyState==3&&Mh(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,G8(this))},t.Qa=function(l){this.g&&(this.response=l,G8(this))},t.ga=function(){this.g&&G8(this)};function G8(l){l.readyState=4,l.l=null,l.j=null,l.v=null,K8(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function K8(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(_t.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Vh(l){let d="";return I(l,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Ua(l,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Vh(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):R1(l,d,p))}function Q1(l){p2.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(Q1,p2);var lI=/^https?$/i,fI=["POST","PUT"];t=Q1.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ia.g(),this.v=this.o?Xu(this.o):Xu(Ia),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(P){yh(this,P);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var A in y)p.set(A,y[A]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const P of y.keys())p.set(P,y.get(P));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(P=>P.toLowerCase()=="content-type"),A=s.FormData&&l instanceof s.FormData,!(0<=Array.prototype.indexOf.call(fI,d,void 0))||y||A||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of p)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wh(this),this.u=!0,this.g.send(l),this.u=!1}catch(P){yh(this,P)}};function yh(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,_h(l),Lt(l)}function _h(l){l.A||(l.A=!0,L2(l,"complete"),L2(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,L2(this,"complete"),L2(this,"abort"),Lt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lt(this,!0)),Q1.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lh(this):this.bb())},t.bb=function(){Lh(this)};function Lh(l){if(l.h&&typeof i<"u"&&(!l.v[1]||C4(l)!=4||l.Z()!=2)){if(l.u&&C4(l)==4)P8(l.Ea,0,l);else if(L2(l,"readystatechange"),C4(l)==4){l.h=!1;try{const j=l.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=j===0){var A=String(l.D).match(ph)[1]||null;!A&&s.self&&s.self.location&&(A=s.self.location.protocol.slice(0,-1)),y=!lI.test(A?A.toLowerCase():"")}p=y}if(p)L2(l,"complete"),L2(l,"success");else{l.m=6;try{var P=2<C4(l)?l.g.statusText:""}catch{P=""}l.l=P+" ["+l.Z()+"]",_h(l)}}finally{Lt(l)}}}}function Lt(l,d){if(l.g){wh(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||L2(l,"ready");try{p.onreadystatechange=y}catch{}}}function wh(l){l.I&&(s.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function C4(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<C4(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ea(d)}};function xh(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function uI(l){const d={};l=(l.g&&2<=C4(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(C(l[y]))continue;var p=T(l[y]);const A=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const P=d[A]||[];d[A]=P,P.push(p)}L(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Q8(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Sh(l){this.Aa=0,this.i=[],this.j=new B8,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Q8("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Q8("baseRetryDelayMs",5e3,l),this.cb=Q8("retryDelaySeedMs",1e4,l),this.Wa=Q8("forwardChannelMaxRetries",2,l),this.wa=Q8("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new lh(l&&l.concurrentRequestLimit),this.Da=new sI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sh.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,y){G2(0),this.W=l,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Ph(this,null,this.W),xt(this)};function ja(l){if(Nh(l),l.G==3){var d=l.U++,p=z4(l.I);if(R1(p,"SID",l.K),R1(p,"RID",d),R1(p,"TYPE","terminate"),Y8(l,p),d=new o6(l,l.j,d),d.L=2,d.v=yt(z4(p)),p=!1,s.navigator&&s.navigator.sendBeacon)try{p=s.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&s.Image&&(new Image().src=d.v,p=!0),p||(d.g=Dh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ht(d)}Rh(l)}function wt(l){l.g&&(qa(l),l.g.cancel(),l.g=null)}function Nh(l){wt(l),l.u&&(s.clearTimeout(l.u),l.u=null),St(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&s.clearTimeout(l.s),l.s=null)}function xt(l){if(!fh(l.h)&&!l.s){l.s=!0;var d=l.Ga;d1||Q(),D||(d1(),D=!0),W.add(d,l),l.B=0}}function hI(l,d){return uh(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=F8(m(l.Ga,l,d),Ih(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const A=new o6(this,this.j,l);let P=this.o;if(this.S&&(P?(P=z(P),N(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Eh(this,A,d),p=z4(this.I),R1(p,"RID",l),R1(p,"CVER",22),this.D&&R1(p,"X-HTTP-Session-Id",this.D),Y8(this,p),P&&(this.O?d="headers="+encodeURIComponent(String(Vh(P)))+"&"+d:this.m&&Ua(p,this.m,P)),Ba(this.h,A),this.Ua&&R1(p,"TYPE","init"),this.P?(R1(p,"$req",d),R1(p,"SID","null"),A.T=!0,Pa(A,p,null)):Pa(A,p,d),this.G=2}}else this.G==3&&(l?bh(this,l):this.i.length==0||fh(this.h)||bh(this))};function bh(l,d){var p;d?p=d.l:p=l.U++;const y=z4(l.I);R1(y,"SID",l.K),R1(y,"RID",p),R1(y,"AID",l.T),Y8(l,y),l.m&&l.o&&Ua(y,l.m,l.o),p=new o6(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Eh(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ba(l.h,p),Pa(p,y,d)}function Y8(l,d){l.H&&I(l.H,function(p,y){R1(d,y,p)}),l.l&&mh({},function(p,y){R1(d,y,p)})}function Eh(l,d,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var A=l.i;let P=-1;for(;;){const j=["count="+p];P==-1?0<p?(P=A[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let E1=!0;for(let w2=0;w2<p;w2++){let _1=A[w2].g;const I2=A[w2].map;if(_1-=P,0>_1)P=Math.max(0,A[w2].g-100),E1=!1;else try{oI(I2,j,"req"+_1+"_")}catch{y&&y(I2)}}if(E1){y=j.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,y}function Th(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;d1||Q(),D||(d1(),D=!0),W.add(d,l),l.v=0}}function $a(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=F8(m(l.Fa,l),Ih(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=F8(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,G2(10),wt(this),kh(this))};function qa(l){l.A!=null&&(s.clearTimeout(l.A),l.A=null)}function kh(l){l.g=new o6(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=z4(l.qa);R1(d,"RID","rpc"),R1(d,"SID",l.K),R1(d,"AID",l.T),R1(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&R1(d,"TO",l.ja),R1(d,"TYPE","xmlhttp"),Y8(l,d),l.m&&l.o&&Ua(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=yt(z4(d)),p.m=null,p.P=!0,ih(p,l)}t.Za=function(){this.C!=null&&(this.C=null,wt(this),$a(this),G2(19))};function St(l){l.C!=null&&(s.clearTimeout(l.C),l.C=null)}function Ah(l,d){var p=null;if(l.g==d){St(l),qa(l),l.g=null;var y=2}else if(Fa(l.h,d))p=d.D,hh(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var A=l.B;y=gt(),L2(y,new ch(y,p)),xt(l)}else Th(l);else if(A=d.s,A==3||A==0&&0<d.X||!(y==1&&hI(l,d)||y==2&&$a(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),A){case 1:l0(l,5);break;case 4:l0(l,10);break;case 3:l0(l,6);break;default:l0(l,2)}}}function Ih(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function l0(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),y=l.Xa;const A=!y;y=new o0(y||"//www.google.com/images/cleardot.gif"),s.location&&s.location.protocol=="http"||Mt(y,"https"),yt(y),A?rI(y.toString(),p):iI(y.toString(),p)}else G2(2);l.G=0,l.l&&l.l.sa(d),Rh(l),Nh(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),G2(2)):(this.j.info("Failed to ping google.com"),G2(1))};function Rh(l){if(l.G=0,l.ka=[],l.l){const d=dh(l.h);(d.length!=0||l.i.length!=0)&&(S(l.ka,d),S(l.ka,l.i),l.h.i.length=0,w(l.i),l.i.length=0),l.l.ra()}}function Ph(l,d,p){var y=p instanceof o0?z4(p):new o0(p);if(y.g!="")d&&(y.g=d+"."+y.g),Vt(y,y.s);else{var A=s.location;y=A.protocol,d=d?d+"."+A.hostname:A.hostname,A=+A.port;var P=new o0(null);y&&Mt(P,y),d&&(P.g=d),A&&Vt(P,A),p&&(P.l=p),y=P}return p=l.D,d=l.ya,p&&d&&R1(y,p,d),R1(y,"VER",l.la),Y8(l,y),y}function Dh(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Q1(new W8({eb:p})):new Q1(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oh(){}t=Oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Nt(){}Nt.prototype.g=function(l,d){return new d3(l,d)};function d3(l,d){p2.call(this),this.g=new Sh(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!C(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new se(this)}H(d3,p2),d3.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},d3.prototype.close=function(){ja(this.g)},d3.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=g4(l),l=p);d.i.push(new QA(d.Ya++,l)),d.G==3&&xt(d)},d3.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,d3.aa.N.call(this)};function Fh(l){ka.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}H(Fh,ka);function Bh(){Aa.call(this),this.status=1}H(Bh,Aa);function se(l){this.g=l}H(se,Oh),se.prototype.ua=function(){L2(this.g,"a")},se.prototype.ta=function(l){L2(this.g,new Fh(l))},se.prototype.sa=function(l){L2(this.g,new Bh)},se.prototype.ra=function(){L2(this.g,"b")},Nt.prototype.createWebChannel=Nt.prototype.g,d3.prototype.send=d3.prototype.o,d3.prototype.open=d3.prototype.m,d3.prototype.close=d3.prototype.close,zE=function(){return new Nt},gE=function(){return gt()},vE=i0,ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zt.NO_ERROR=0,zt.TIMEOUT=8,zt.HTTP_ERROR=6,Sc=zt,nh.COMPLETE="complete",pE=nh,Zu.EventType=D8,D8.OPEN="a",D8.CLOSE="b",D8.ERROR="c",D8.MESSAGE="d",p2.prototype.listen=p2.prototype.K,M5=Zu,mE=W8,Q1.prototype.listenOnce=Q1.prototype.L,Q1.prototype.getLastError=Q1.prototype.Ka,Q1.prototype.getLastErrorCode=Q1.prototype.Ba,Q1.prototype.getStatus=Q1.prototype.Z,Q1.prototype.getResponseJson=Q1.prototype.Oa,Q1.prototype.getResponseText=Q1.prototype.oa,Q1.prototype.send=Q1.prototype.ea,Q1.prototype.setWithCredentials=Q1.prototype.Ha,dE=Q1}).apply(typeof rc<"u"?rc:typeof self<"u"?self:typeof window<"u"?window:{});const lp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}B2.UNAUTHENTICATED=new B2(null),B2.GOOGLE_CREDENTIALS=new B2("google-credentials-uid"),B2.FIRST_PARTY=new B2("first-party-uid"),B2.MOCK_USER=new B2("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x8="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new Z7("@firebase/firestore");function i5(){return O0.logLevel}function G(t,...e){if(O0.logLevel<=g1.DEBUG){const c=e.map(If);O0.debug(`Firestore (${x8}): ${t}`,...c)}}function G4(t,...e){if(O0.logLevel<=g1.ERROR){const c=e.map(If);O0.error(`Firestore (${x8}): ${t}`,...c)}}function i8(t,...e){if(O0.logLevel<=g1.WARN){const c=e.map(If);O0.warn(`Firestore (${x8}): ${t}`,...c)}}function If(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(c){return JSON.stringify(c)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t="Unexpected state"){const e=`FIRESTORE (${x8}) INTERNAL ASSERTION FAILED: `+t;throw G4(e),new Error(e)}function I1(t,e){t||c1()}function r1(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends n4{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(){this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gM1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable(()=>c(B2.UNAUTHENTICATED))}shutdown(){}}class zM1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable(()=>c(this.token.user))}shutdown(){this.changeListener=null}}class CM1{constructor(e){this.t=e,this.currentUser=B2.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,c){let n=this.i;const a=o=>this.i!==n?(n=this.i,c(o)):Promise.resolve();let r=new R4;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new R4,e.enqueueRetryable(()=>a(this.currentUser))};const i=()=>{const o=r;e.enqueueRetryable(async()=>{await o.promise,await a(this.currentUser)})},s=o=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(o=>s(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?s(o):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new R4)}},0),i()}getToken(){const e=this.i,c=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(c).then(n=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(I1(typeof n.accessToken=="string"),new CE(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return I1(e===null||typeof e=="string"),new B2(e)}}class HM1{constructor(e,c,n){this.l=e,this.h=c,this.P=n,this.type="FirstParty",this.user=B2.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MM1{constructor(e,c,n){this.l=e,this.h=c,this.P=n}getToken(){return Promise.resolve(new HM1(this.l,this.h,this.P))}start(e,c){e.enqueueRetryable(()=>c(B2.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VM1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yM1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,c){const n=r=>{r.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const i=r.token!==this.R;return this.R=r.token,G("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?c(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>n(r))};const a=r=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>a(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?a(r):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(c=>c?(I1(typeof c.token=="string"),this.R=c.token,new VM1(c.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),c=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(c);else for(let n=0;n<t;n++)c[n]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const a=_M1(40);for(let r=0;r<a.length;++r)n.length<20&&a[r]<c&&(n+=e.charAt(a[r]%e.length))}return n}}function L1(t,e){return t<e?-1:t>e?1:0}function s8(t,e,c){return t.length===e.length&&t.every((n,a)=>c(n,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return d2.fromMillis(Date.now())}static fromDate(e){return d2.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*c));return new d2(c,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L1(this.nanoseconds,e.nanoseconds):L1(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.timestamp=e}static fromTimestamp(e){return new a1(e)}static min(){return new a1(new d2(0,0))}static max(){return new a1(new d2(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V7{constructor(e,c,n){c===void 0?c=0:c>e.length&&c1(),n===void 0?n=e.length-c:n>e.length-c&&c1(),this.segments=e,this.offset=c,this.len=n}get length(){return this.len}isEqual(e){return V7.comparator(this,e)===0}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof V7?e.forEach(n=>{c.push(n)}):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,n=this.limit();c<n;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const n=Math.min(e.length,c.length);for(let a=0;a<n;a++){const r=e.get(a),i=c.get(a);if(r<i)return-1;if(r>i)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class j1 extends V7{construct(e,c,n){return new j1(e,c,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const c=[];for(const n of e){if(n.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);c.push(...n.split("/").filter(a=>a.length>0))}return new j1(c)}static emptyPath(){return new j1([])}}const LM1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class b2 extends V7{construct(e,c,n){return new b2(e,c,n)}static isValidIdentifier(e){return LM1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),b2.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new b2(["__name__"])}static fromServerFormat(e){const c=[];let n="",a=0;const r=()=>{if(n.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(n),n=""};let i=!1;for(;a<e.length;){const s=e[a];if(s==="\\"){if(a+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[a+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,a+=2}else s==="`"?(i=!i,a++):s!=="."||i?(n+=s,a++):(r(),a++)}if(r(),i)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new b2(c)}static emptyPath(){return new b2([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(j1.fromString(e))}static fromName(e){return new X(j1.fromString(e).popFirst(5))}static empty(){return new X(j1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&j1.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,c){return j1.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new j1(e.slice()))}}function wM1(t,e){const c=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,a=a1.fromTimestamp(n===1e9?new d2(c+1,0):new d2(c,n));return new K6(a,X.empty(),e)}function xM1(t){return new K6(t.readTime,t.key,-1)}class K6{constructor(e,c,n){this.readTime=e,this.documentKey=c,this.largestBatchId=n}static min(){return new K6(a1.min(),X.empty(),-1)}static max(){return new K6(a1.max(),X.empty(),-1)}}function SM1(t,e){let c=t.readTime.compareTo(e.readTime);return c!==0?c:(c=X.comparator(t.documentKey,e.documentKey),c!==0?c:L1(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bM1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J7(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==NM1)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(c=>{this.isDone=!0,this.result=c,this.nextCallback&&this.nextCallback(c)},c=>{this.isDone=!0,this.error=c,this.catchCallback&&this.catchCallback(c)})}catch(e){return this.next(void 0,e)}next(e,c){return this.callbackAttached&&c1(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(c,this.error):this.wrapSuccess(e,this.result):new F((n,a)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(n,a)},this.catchCallback=r=>{this.wrapFailure(c,r).next(n,a)}})}toPromise(){return new Promise((e,c)=>{this.next(e,c)})}wrapUserFunction(e){try{const c=e();return c instanceof F?c:F.resolve(c)}catch(c){return F.reject(c)}}wrapSuccess(e,c){return e?this.wrapUserFunction(()=>e(c)):F.resolve(c)}wrapFailure(e,c){return e?this.wrapUserFunction(()=>e(c)):F.reject(c)}static resolve(e){return new F((c,n)=>{c(e)})}static reject(e){return new F((c,n)=>{n(e)})}static waitFor(e){return new F((c,n)=>{let a=0,r=0,i=!1;e.forEach(s=>{++a,s.next(()=>{++r,i&&r===a&&c()},o=>n(o))}),i=!0,r===a&&c()})}static or(e){let c=F.resolve(!1);for(const n of e)c=c.next(a=>a?F.resolve(a):n());return c}static forEach(e,c){const n=[];return e.forEach((a,r)=>{n.push(c.call(this,a,r))}),this.waitFor(n)}static mapArray(e,c){return new F((n,a)=>{const r=e.length,i=new Array(r);let s=0;for(let o=0;o<r;o++){const f=o;c(e[f]).next(u=>{i[f]=u,++s,s===r&&n(i)},u=>a(u))}})}static doWhile(e,c){return new F((n,a)=>{const r=()=>{e()===!0?c().next(()=>{r()},a):n()};r()})}}function EM1(t){const e=t.match(/Android ([\d.]+)/i),c=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(c)}function et(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,c){this.previousValue=e,c&&(c.sequenceNumberHandler=n=>this.ie(n),this.se=n=>c.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rf.oe=-1;function ea(t){return t==null}function wn(t){return t===0&&1/t==-1/0}function TM1(t){return typeof t=="number"&&Number.isInteger(t)&&!wn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){let e=0;for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e++;return e}function S8(t,e){for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e(c,t[c])}function ME(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s2=class xs{constructor(e,c){this.comparator=e,this.root=c||F6.EMPTY}insert(e,c){return new xs(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,F6.BLACK,null,null))}remove(e){return new xs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,F6.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const n=this.comparator(e,c.key);if(n===0)return c.value;n<0?c=c.left:n>0&&(c=c.right)}return null}indexOf(e){let c=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return c+n.left.size;a<0?n=n.left:(c+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((c,n)=>(e(c,n),!1))}toString(){const e=[];return this.inorderTraversal((c,n)=>(e.push(`${c}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}},ic=class{constructor(e,c,n,a){this.isReverse=a,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=c?n(e.key,c):1,c&&a&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},F6=class M4{constructor(e,c,n,a,r){this.key=e,this.value=c,this.color=n??M4.RED,this.left=a??M4.EMPTY,this.right=r??M4.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,n,a,r){return new M4(e??this.key,c??this.value,n??this.color,a??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,n){let a=this;const r=n(e,a.key);return a=r<0?a.copy(null,null,null,a.left.insert(e,c,n),null):r===0?a.copy(null,c,null,null,null):a.copy(null,null,null,null,a.right.insert(e,c,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return M4.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let n,a=this;if(c(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,c),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),c(e,a.key)===0){if(a.right.isEmpty())return M4.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,c))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,M4.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,M4.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw c1();const e=this.left.check();if(e!==this.right.check())throw c1();return e+(this.isRed()?0:1)}};F6.EMPTY=null,F6.RED=!0,F6.BLACK=!1;F6.EMPTY=new class{constructor(){this.size=0}get key(){throw c1()}get value(){throw c1()}get color(){throw c1()}get left(){throw c1()}get right(){throw c1()}copy(e,c,n,a,r){return this}insert(e,c,n){return new F6(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.comparator=e,this.data=new s2(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((c,n)=>(e(c),!1))}forEachInRange(e,c){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,e[1])>=0)return;c(a.key)}}forEachWhile(e,c){let n;for(n=c!==void 0?this.data.getIteratorFrom(c):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new up(this.data.getIterator())}getIteratorFrom(e){return new up(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach(n=>{c=c.add(n)}),c}isEqual(e){if(!(e instanceof T2)||this.size!==e.size)return!1;const c=this.data.getIterator(),n=e.data.getIterator();for(;c.hasNext();){const a=c.getNext().key,r=n.getNext().key;if(this.comparator(a,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(c=>{e.push(c)}),e}toString(){const e=[];return this.forEach(c=>e.push(c)),"SortedSet("+e.toString()+")"}copy(e){const c=new T2(this.comparator);return c.data=e,c}}class up{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e){this.fields=e,e.sort(b2.comparator)}static empty(){return new K3([])}unionWith(e){let c=new T2(b2.comparator);for(const n of this.fields)c=c.add(n);for(const n of e)c=c.add(n);return new K3(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return s8(this.fields,e.fields,(c,n)=>c.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(a){try{return atob(a)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new VE("Invalid base64 string: "+r):r}}(e);return new W2(c)}static fromUint8Array(e){const c=function(a){let r="";for(let i=0;i<a.length;++i)r+=String.fromCharCode(a[i]);return r}(e);return new W2(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(c){return btoa(c)}(this.binaryString)}toUint8Array(){return function(c){const n=new Uint8Array(c.length);for(let a=0;a<c.length;a++)n[a]=c.charCodeAt(a);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L1(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}W2.EMPTY_BYTE_STRING=new W2("");const kM1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Q6(t){if(I1(!!t),typeof t=="string"){let e=0;const c=kM1.exec(t);if(I1(!!c),c[1]){let a=c[1];a=(a+"000000000").substr(0,9),e=Number(a)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:r2(t.seconds),nanos:r2(t.nanos)}}function r2(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function F0(t){return typeof t=="string"?W2.fromBase64String(t):W2.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){var e,c;return((c=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||c===void 0?void 0:c.stringValue)==="server_timestamp"}function Df(t){const e=t.mapValue.fields.__previous_value__;return Pf(e)?Df(e):e}function y7(t){const e=Q6(t.mapValue.fields.__local_write_time__.timestampValue);return new d2(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM1{constructor(e,c,n,a,r,i,s,o,f){this.databaseId=e,this.appId=c,this.persistenceKey=n,this.host=a,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.longPollingOptions=o,this.useFetchStreams=f}}class _7{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new _7("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _7&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function B0(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:IM1(t)?9007199254740991:10:c1()}function m4(t,e){if(t===e)return!0;const c=B0(t);if(c!==B0(e))return!1;switch(c){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return y7(t).isEqual(y7(e));case 3:return function(a,r){if(typeof a.timestampValue=="string"&&typeof r.timestampValue=="string"&&a.timestampValue.length===r.timestampValue.length)return a.timestampValue===r.timestampValue;const i=Q6(a.timestampValue),s=Q6(r.timestampValue);return i.seconds===s.seconds&&i.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(a,r){return F0(a.bytesValue).isEqual(F0(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(a,r){return r2(a.geoPointValue.latitude)===r2(r.geoPointValue.latitude)&&r2(a.geoPointValue.longitude)===r2(r.geoPointValue.longitude)}(t,e);case 2:return function(a,r){if("integerValue"in a&&"integerValue"in r)return r2(a.integerValue)===r2(r.integerValue);if("doubleValue"in a&&"doubleValue"in r){const i=r2(a.doubleValue),s=r2(r.doubleValue);return i===s?wn(i)===wn(s):isNaN(i)&&isNaN(s)}return!1}(t,e);case 9:return s8(t.arrayValue.values||[],e.arrayValue.values||[],m4);case 10:return function(a,r){const i=a.mapValue.fields||{},s=r.mapValue.fields||{};if(fp(i)!==fp(s))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(s[o]===void 0||!m4(i[o],s[o])))return!1;return!0}(t,e);default:return c1()}}function L7(t,e){return(t.values||[]).find(c=>m4(c,e))!==void 0}function o8(t,e){if(t===e)return 0;const c=B0(t),n=B0(e);if(c!==n)return L1(c,n);switch(c){case 0:case 9007199254740991:return 0;case 1:return L1(t.booleanValue,e.booleanValue);case 2:return function(r,i){const s=r2(r.integerValue||r.doubleValue),o=r2(i.integerValue||i.doubleValue);return s<o?-1:s>o?1:s===o?0:isNaN(s)?isNaN(o)?0:-1:1}(t,e);case 3:return hp(t.timestampValue,e.timestampValue);case 4:return hp(y7(t),y7(e));case 5:return L1(t.stringValue,e.stringValue);case 6:return function(r,i){const s=F0(r),o=F0(i);return s.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const s=r.split("/"),o=i.split("/");for(let f=0;f<s.length&&f<o.length;f++){const u=L1(s[f],o[f]);if(u!==0)return u}return L1(s.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const s=L1(r2(r.latitude),r2(i.latitude));return s!==0?s:L1(r2(r.longitude),r2(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const s=r.values||[],o=i.values||[];for(let f=0;f<s.length&&f<o.length;++f){const u=o8(s[f],o[f]);if(u)return u}return L1(s.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===sc.mapValue&&i===sc.mapValue)return 0;if(r===sc.mapValue)return 1;if(i===sc.mapValue)return-1;const s=r.fields||{},o=Object.keys(s),f=i.fields||{},u=Object.keys(f);o.sort(),u.sort();for(let h=0;h<o.length&&h<u.length;++h){const m=L1(o[h],u[h]);if(m!==0)return m;const v=o8(s[o[h]],f[u[h]]);if(v!==0)return v}return L1(o.length,u.length)}(t.mapValue,e.mapValue);default:throw c1()}}function hp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return L1(t,e);const c=Q6(t),n=Q6(e),a=L1(c.seconds,n.seconds);return a!==0?a:L1(c.nanos,n.nanos)}function l8(t){return Ss(t)}function Ss(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(c){const n=Q6(c);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(c){return F0(c).toBase64()}(t.bytesValue):"referenceValue"in t?function(c){return X.fromName(c).toString()}(t.referenceValue):"geoPointValue"in t?function(c){return`geo(${c.latitude},${c.longitude})`}(t.geoPointValue):"arrayValue"in t?function(c){let n="[",a=!0;for(const r of c.values||[])a?a=!1:n+=",",n+=Ss(r);return n+"]"}(t.arrayValue):"mapValue"in t?function(c){const n=Object.keys(c.fields||{}).sort();let a="{",r=!0;for(const i of n)r?r=!1:a+=",",a+=`${i}:${Ss(c.fields[i])}`;return a+"}"}(t.mapValue):c1()}function Ns(t){return!!t&&"integerValue"in t}function Of(t){return!!t&&"arrayValue"in t}function dp(t){return!!t&&"nullValue"in t}function mp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nc(t){return!!t&&"mapValue"in t}function P5(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return S8(t.mapValue.fields,(c,n)=>e.mapValue.fields[c]=P5(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let c=0;c<(t.arrayValue.values||[]).length;++c)e.arrayValue.values[c]=P5(t.arrayValue.values[c]);return e}return Object.assign({},t)}function IM1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e){this.value=e}static empty(){return new S3({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let n=0;n<e.length-1;++n)if(c=(c.mapValue.fields||{})[e.get(n)],!Nc(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=P5(c)}setAll(e){let c=b2.emptyPath(),n={},a=[];e.forEach((i,s)=>{if(!c.isImmediateParentOf(s)){const o=this.getFieldsMap(c);this.applyChanges(o,n,a),n={},a=[],c=s.popLast()}i?n[s.lastSegment()]=P5(i):a.push(s.lastSegment())});const r=this.getFieldsMap(c);this.applyChanges(r,n,a)}delete(e){const c=this.field(e.popLast());Nc(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return m4(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let n=0;n<e.length;++n){let a=c.mapValue.fields[e.get(n)];Nc(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},c.mapValue.fields[e.get(n)]=a),c=a}return c.mapValue.fields}applyChanges(e,c,n){S8(c,(a,r)=>e[a]=r);for(const a of n)delete e[a]}clone(){return new S3(P5(this.value))}}function yE(t){const e=[];return S8(t.fields,(c,n)=>{const a=new b2([c]);if(Nc(n)){const r=yE(n.mapValue).fields;if(r.length===0)e.push(a);else for(const i of r)e.push(a.child(i))}else e.push(a)}),new K3(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,c,n,a,r,i,s){this.key=e,this.documentType=c,this.version=n,this.readTime=a,this.createTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new j2(e,0,a1.min(),a1.min(),a1.min(),S3.empty(),0)}static newFoundDocument(e,c,n,a){return new j2(e,1,c,a1.min(),n,a,0)}static newNoDocument(e,c){return new j2(e,2,c,a1.min(),a1.min(),S3.empty(),0)}static newUnknownDocument(e,c){return new j2(e,3,c,a1.min(),a1.min(),S3.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(a1.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=S3.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=S3.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=a1.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof j2&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new j2(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,c){this.position=e,this.inclusive=c}}function pp(t,e,c){let n=0;for(let a=0;a<t.position.length;a++){const r=e[a],i=t.position[a];if(r.field.isKeyField()?n=X.comparator(X.fromName(i.referenceValue),c.key):n=o8(i,c.data.field(r.field)),r.dir==="desc"&&(n*=-1),n!==0)break}return n}function vp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let c=0;c<t.position.length;c++)if(!m4(t.position[c],e.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,c="asc"){this.field=e,this.dir=c}}function RM1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{}class f2 extends _E{constructor(e,c,n){super(),this.field=e,this.op=c,this.value=n}static create(e,c,n){return e.isKeyField()?c==="in"||c==="not-in"?this.createKeyFieldInFilter(e,c,n):new DM1(e,c,n):c==="array-contains"?new BM1(e,n):c==="in"?new UM1(e,n):c==="not-in"?new jM1(e,n):c==="array-contains-any"?new $M1(e,n):new f2(e,c,n)}static createKeyFieldInFilter(e,c,n){return c==="in"?new OM1(e,n):new FM1(e,n)}matches(e){const c=e.data.field(this.field);return this.op==="!="?c!==null&&this.matchesComparison(o8(c,this.value)):c!==null&&B0(this.value)===B0(c)&&this.matchesComparison(o8(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return c1()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class p4 extends _E{constructor(e,c){super(),this.filters=e,this.op=c,this.ae=null}static create(e,c){return new p4(e,c)}matches(e){return LE(this)?this.filters.find(c=>!c.matches(e))===void 0:this.filters.find(c=>c.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,c)=>e.concat(c.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function LE(t){return t.op==="and"}function wE(t){return PM1(t)&&LE(t)}function PM1(t){for(const e of t.filters)if(e instanceof p4)return!1;return!0}function bs(t){if(t instanceof f2)return t.field.canonicalString()+t.op.toString()+l8(t.value);if(wE(t))return t.filters.map(e=>bs(e)).join(",");{const e=t.filters.map(c=>bs(c)).join(",");return`${t.op}(${e})`}}function xE(t,e){return t instanceof f2?function(n,a){return a instanceof f2&&n.op===a.op&&n.field.isEqual(a.field)&&m4(n.value,a.value)}(t,e):t instanceof p4?function(n,a){return a instanceof p4&&n.op===a.op&&n.filters.length===a.filters.length?n.filters.reduce((r,i,s)=>r&&xE(i,a.filters[s]),!0):!1}(t,e):void c1()}function SE(t){return t instanceof f2?function(c){return`${c.field.canonicalString()} ${c.op} ${l8(c.value)}`}(t):t instanceof p4?function(c){return c.op.toString()+" {"+c.getFilters().map(SE).join(" ,")+"}"}(t):"Filter"}class DM1 extends f2{constructor(e,c,n){super(e,c,n),this.key=X.fromName(n.referenceValue)}matches(e){const c=X.comparator(e.key,this.key);return this.matchesComparison(c)}}class OM1 extends f2{constructor(e,c){super(e,"in",c),this.keys=NE("in",c)}matches(e){return this.keys.some(c=>c.isEqual(e.key))}}class FM1 extends f2{constructor(e,c){super(e,"not-in",c),this.keys=NE("not-in",c)}matches(e){return!this.keys.some(c=>c.isEqual(e.key))}}function NE(t,e){var c;return(((c=e.arrayValue)===null||c===void 0?void 0:c.values)||[]).map(n=>X.fromName(n.referenceValue))}class BM1 extends f2{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return Of(c)&&L7(c.arrayValue,this.value)}}class UM1 extends f2{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return c!==null&&L7(this.value.arrayValue,c)}}class jM1 extends f2{constructor(e,c){super(e,"not-in",c)}matches(e){if(L7(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return c!==null&&!L7(this.value.arrayValue,c)}}class $M1 extends f2{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!Of(c)||!c.arrayValue.values)&&c.arrayValue.values.some(n=>L7(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM1{constructor(e,c=null,n=[],a=[],r=null,i=null,s=null){this.path=e,this.collectionGroup=c,this.orderBy=n,this.filters=a,this.limit=r,this.startAt=i,this.endAt=s,this.ue=null}}function gp(t,e=null,c=[],n=[],a=null,r=null,i=null){return new qM1(t,e,c,n,a,r,i)}function Ff(t){const e=r1(t);if(e.ue===null){let c=e.path.canonicalString();e.collectionGroup!==null&&(c+="|cg:"+e.collectionGroup),c+="|f:",c+=e.filters.map(n=>bs(n)).join(","),c+="|ob:",c+=e.orderBy.map(n=>function(r){return r.field.canonicalString()+r.dir}(n)).join(","),ea(e.limit)||(c+="|l:",c+=e.limit),e.startAt&&(c+="|lb:",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(n=>l8(n)).join(",")),e.endAt&&(c+="|ub:",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(n=>l8(n)).join(",")),e.ue=c}return e.ue}function Bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let c=0;c<t.orderBy.length;c++)if(!RM1(t.orderBy[c],e.orderBy[c]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let c=0;c<t.filters.length;c++)if(!xE(t.filters[c],e.filters[c]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vp(t.startAt,e.startAt)&&vp(t.endAt,e.endAt)}function Es(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,c=null,n=[],a=[],r=null,i="F",s=null,o=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=n,this.filters=a,this.limit=r,this.limitType=i,this.startAt=s,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function WM1(t,e,c,n,a,r,i,s){return new ta(t,e,c,n,a,r,i,s)}function Uf(t){return new ta(t)}function zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GM1(t){return t.collectionGroup!==null}function D5(t){const e=r1(t);if(e.ce===null){e.ce=[];const c=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),c.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let s=new T2(b2.comparator);return i.filters.forEach(o=>{o.getFlattenedFilters().forEach(f=>{f.isInequality()&&(s=s.add(f.field))})}),s})(e).forEach(r=>{c.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Sn(r,n))}),c.has(b2.keyField().canonicalString())||e.ce.push(new Sn(b2.keyField(),n))}return e.ce}function u4(t){const e=r1(t);return e.le||(e.le=KM1(e,D5(t))),e.le}function KM1(t,e){if(t.limitType==="F")return gp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(a=>{const r=a.dir==="desc"?"asc":"desc";return new Sn(a.field,r)});const c=t.endAt?new xn(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new xn(t.startAt.position,t.startAt.inclusive):null;return gp(t.path,t.collectionGroup,e,t.filters,t.limit,c,n)}}function Ts(t,e,c){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,c,t.startAt,t.endAt)}function ca(t,e){return Bf(u4(t),u4(e))&&t.limitType===e.limitType}function bE(t){return`${Ff(u4(t))}|lt:${t.limitType}`}function ve(t){return`Query(target=${function(c){let n=c.path.canonicalString();return c.collectionGroup!==null&&(n+=" collectionGroup="+c.collectionGroup),c.filters.length>0&&(n+=`, filters: [${c.filters.map(a=>SE(a)).join(", ")}]`),ea(c.limit)||(n+=", limit: "+c.limit),c.orderBy.length>0&&(n+=`, orderBy: [${c.orderBy.map(a=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(a)).join(", ")}]`),c.startAt&&(n+=", startAt: ",n+=c.startAt.inclusive?"b:":"a:",n+=c.startAt.position.map(a=>l8(a)).join(",")),c.endAt&&(n+=", endAt: ",n+=c.endAt.inclusive?"a:":"b:",n+=c.endAt.position.map(a=>l8(a)).join(",")),`Target(${n})`}(u4(t))}; limitType=${t.limitType})`}function na(t,e){return e.isFoundDocument()&&function(n,a){const r=a.key.path;return n.collectionGroup!==null?a.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):X.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,a){for(const r of D5(n))if(!r.field.isKeyField()&&a.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,a){for(const r of n.filters)if(!r.matches(a))return!1;return!0}(t,e)&&function(n,a){return!(n.startAt&&!function(i,s,o){const f=pp(i,s,o);return i.inclusive?f<=0:f<0}(n.startAt,D5(n),a)||n.endAt&&!function(i,s,o){const f=pp(i,s,o);return i.inclusive?f>=0:f>0}(n.endAt,D5(n),a))}(t,e)}function QM1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function EE(t){return(e,c)=>{let n=!1;for(const a of D5(t)){const r=YM1(a,e,c);if(r!==0)return r;n=n||a.field.isKeyField()}return 0}}function YM1(t,e,c){const n=t.field.isKeyField()?X.comparator(e.key,c.key):function(r,i,s){const o=i.data.field(r),f=s.data.field(r);return o!==null&&f!==null?o8(o,f):c1()}(t.field,e,c);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return c1()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N8{constructor(e,c){this.mapKeyFn=e,this.equalsFn=c,this.inner={},this.innerSize=0}get(e){const c=this.mapKeyFn(e),n=this.inner[c];if(n!==void 0){for(const[a,r]of n)if(this.equalsFn(a,e))return r}}has(e){return this.get(e)!==void 0}set(e,c){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return this.inner[n]=[[e,c]],void this.innerSize++;for(let r=0;r<a.length;r++)if(this.equalsFn(a[r][0],e))return void(a[r]=[e,c]);a.push([e,c]),this.innerSize++}delete(e){const c=this.mapKeyFn(e),n=this.inner[c];if(n===void 0)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return n.length===1?delete this.inner[c]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(e){S8(this.inner,(c,n)=>{for(const[a,r]of n)e(a,r)})}isEmpty(){return ME(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM1=new s2(X.comparator);function K4(){return XM1}const TE=new s2(X.comparator);function V5(...t){let e=TE;for(const c of t)e=e.insert(c.key,c);return e}function kE(t){let e=TE;return t.forEach((c,n)=>e=e.insert(c,n.overlayedDocument)),e}function M0(){return O5()}function AE(){return O5()}function O5(){return new N8(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZM1=new s2(X.comparator),JM1=new T2(X.comparator);function z1(...t){let e=JM1;for(const c of t)e=e.add(c);return e}const eV1=new T2(L1);function tV1(){return eV1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wn(e)?"-0":e}}function RE(t){return{integerValue:""+t}}function cV1(t,e){return TM1(e)?RE(e):IE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this._=void 0}}function nV1(t,e,c){return t instanceof Nn?function(a,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return r&&Pf(r)&&(r=Df(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(c,e):t instanceof w7?DE(t,e):t instanceof x7?OE(t,e):function(a,r){const i=PE(a,r),s=Cp(i)+Cp(a.Pe);return Ns(i)&&Ns(a.Pe)?RE(s):IE(a.serializer,s)}(t,e)}function aV1(t,e,c){return t instanceof w7?DE(t,e):t instanceof x7?OE(t,e):c}function PE(t,e){return t instanceof bn?function(n){return Ns(n)||function(r){return!!r&&"doubleValue"in r}(n)}(e)?e:{integerValue:0}:null}class Nn extends aa{}class w7 extends aa{constructor(e){super(),this.elements=e}}function DE(t,e){const c=FE(e);for(const n of t.elements)c.some(a=>m4(a,n))||c.push(n);return{arrayValue:{values:c}}}class x7 extends aa{constructor(e){super(),this.elements=e}}function OE(t,e){let c=FE(e);for(const n of t.elements)c=c.filter(a=>!m4(a,n));return{arrayValue:{values:c}}}class bn extends aa{constructor(e,c){super(),this.serializer=e,this.Pe=c}}function Cp(t){return r2(t.integerValue||t.doubleValue)}function FE(t){return Of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rV1(t,e){return t.field.isEqual(e.field)&&function(n,a){return n instanceof w7&&a instanceof w7||n instanceof x7&&a instanceof x7?s8(n.elements,a.elements,m4):n instanceof bn&&a instanceof bn?m4(n.Pe,a.Pe):n instanceof Nn&&a instanceof Nn}(t.transform,e.transform)}class iV1{constructor(e,c){this.version=e,this.transformResults=c}}class P4{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new P4}static exists(e){return new P4(void 0,e)}static updateTime(e){return new P4(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ra{}function BE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jE(t.key,P4.none()):new tt(t.key,t.data,P4.none());{const c=t.data,n=S3.empty();let a=new T2(b2.comparator);for(let r of e.fields)if(!a.has(r)){let i=c.field(r);i===null&&r.length>1&&(r=r.popLast(),i=c.field(r)),i===null?n.delete(r):n.set(r,i),a=a.add(r)}return new J0(t.key,n,new K3(a.toArray()),P4.none())}}function sV1(t,e,c){t instanceof tt?function(a,r,i){const s=a.value.clone(),o=Mp(a.fieldTransforms,r,i.transformResults);s.setAll(o),r.convertToFoundDocument(i.version,s).setHasCommittedMutations()}(t,e,c):t instanceof J0?function(a,r,i){if(!bc(a.precondition,r))return void r.convertToUnknownDocument(i.version);const s=Mp(a.fieldTransforms,r,i.transformResults),o=r.data;o.setAll(UE(a)),o.setAll(s),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,c):function(a,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,c)}function F5(t,e,c,n){return t instanceof tt?function(r,i,s,o){if(!bc(r.precondition,i))return s;const f=r.value.clone(),u=Vp(r.fieldTransforms,o,i);return f.setAll(u),i.convertToFoundDocument(i.version,f).setHasLocalMutations(),null}(t,e,c,n):t instanceof J0?function(r,i,s,o){if(!bc(r.precondition,i))return s;const f=Vp(r.fieldTransforms,o,i),u=i.data;return u.setAll(UE(r)),u.setAll(f),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),s===null?null:s.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,c,n):function(r,i,s){return bc(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s}(t,e,c)}function oV1(t,e){let c=null;for(const n of t.fieldTransforms){const a=e.data.field(n.field),r=PE(n.transform,a||null);r!=null&&(c===null&&(c=S3.empty()),c.set(n.field,r))}return c||null}function Hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,a){return n===void 0&&a===void 0||!(!n||!a)&&s8(n,a,(r,i)=>rV1(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tt extends ra{constructor(e,c,n,a=[]){super(),this.key=e,this.value=c,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class J0 extends ra{constructor(e,c,n,a,r=[]){super(),this.key=e,this.data=c,this.fieldMask=n,this.precondition=a,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function UE(t){const e=new Map;return t.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){const n=t.data.field(c);e.set(c,n)}}),e}function Mp(t,e,c){const n=new Map;I1(t.length===c.length);for(let a=0;a<c.length;a++){const r=t[a],i=r.transform,s=e.data.field(r.field);n.set(r.field,aV1(i,s,c[a]))}return n}function Vp(t,e,c){const n=new Map;for(const a of t){const r=a.transform,i=c.data.field(a.field);n.set(a.field,nV1(r,i,e))}return n}class jE extends ra{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lV1 extends ra{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV1{constructor(e,c,n,a){this.batchId=e,this.localWriteTime=c,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(e,c){const n=c.mutationResults;for(let a=0;a<this.mutations.length;a++){const r=this.mutations[a];r.key.isEqual(e.key)&&sV1(r,e,n[a])}}applyToLocalView(e,c){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(c=F5(n,e,c,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(c=F5(n,e,c,this.localWriteTime));return c}applyToLocalDocumentSet(e,c){const n=AE();return this.mutations.forEach(a=>{const r=e.get(a.key),i=r.overlayedDocument;let s=this.applyToLocalView(i,r.mutatedFields);s=c.has(a.key)?null:s;const o=BE(i,s);o!==null&&n.set(a.key,o),i.isValidDocument()||i.convertToNoDocument(a1.min())}),n}keys(){return this.mutations.reduce((e,c)=>e.add(c.key),z1())}isEqual(e){return this.batchId===e.batchId&&s8(this.mutations,e.mutations,(c,n)=>Hp(c,n))&&s8(this.baseMutations,e.baseMutations,(c,n)=>Hp(c,n))}}class jf{constructor(e,c,n,a){this.batch=e,this.commitVersion=c,this.mutationResults=n,this.docVersions=a}static from(e,c,n){I1(e.mutations.length===n.length);let a=function(){return ZM1}();const r=e.mutations;for(let i=0;i<r.length;i++)a=a.insert(r[i].key,n[i].version);return new jf(e,c,n,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV1{constructor(e,c){this.largestBatchId=e,this.mutation=c}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV1{constructor(e,c){this.count=e,this.unchangedNames=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var a2,M1;function dV1(t){switch(t){default:return c1();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function $E(t){if(t===void 0)return G4("GRPC error has no .code"),O.UNKNOWN;switch(t){case a2.OK:return O.OK;case a2.CANCELLED:return O.CANCELLED;case a2.UNKNOWN:return O.UNKNOWN;case a2.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case a2.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case a2.INTERNAL:return O.INTERNAL;case a2.UNAVAILABLE:return O.UNAVAILABLE;case a2.UNAUTHENTICATED:return O.UNAUTHENTICATED;case a2.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case a2.NOT_FOUND:return O.NOT_FOUND;case a2.ALREADY_EXISTS:return O.ALREADY_EXISTS;case a2.PERMISSION_DENIED:return O.PERMISSION_DENIED;case a2.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case a2.ABORTED:return O.ABORTED;case a2.OUT_OF_RANGE:return O.OUT_OF_RANGE;case a2.UNIMPLEMENTED:return O.UNIMPLEMENTED;case a2.DATA_LOSS:return O.DATA_LOSS;default:return c1()}}(M1=a2||(a2={}))[M1.OK=0]="OK",M1[M1.CANCELLED=1]="CANCELLED",M1[M1.UNKNOWN=2]="UNKNOWN",M1[M1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M1[M1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M1[M1.NOT_FOUND=5]="NOT_FOUND",M1[M1.ALREADY_EXISTS=6]="ALREADY_EXISTS",M1[M1.PERMISSION_DENIED=7]="PERMISSION_DENIED",M1[M1.UNAUTHENTICATED=16]="UNAUTHENTICATED",M1[M1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M1[M1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M1[M1.ABORTED=10]="ABORTED",M1[M1.OUT_OF_RANGE=11]="OUT_OF_RANGE",M1[M1.UNIMPLEMENTED=12]="UNIMPLEMENTED",M1[M1.INTERNAL=13]="INTERNAL",M1[M1.UNAVAILABLE=14]="UNAVAILABLE",M1[M1.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV1=new x0([4294967295,4294967295],0);function yp(t){const e=mV1().encode(t),c=new hE;return c.update(e),new Uint8Array(c.digest())}function _p(t){const e=new DataView(t.buffer),c=e.getUint32(0,!0),n=e.getUint32(4,!0),a=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new x0([c,n],0),new x0([a,r],0)]}class $f{constructor(e,c,n){if(this.bitmap=e,this.padding=c,this.hashCount=n,c<0||c>=8)throw new y5(`Invalid padding: ${c}`);if(n<0)throw new y5(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new y5(`Invalid hash count: ${n}`);if(e.length===0&&c!==0)throw new y5(`Invalid padding when bitmap length is 0: ${c}`);this.Ie=8*e.length-c,this.Te=x0.fromNumber(this.Ie)}Ee(e,c,n){let a=e.add(c.multiply(x0.fromNumber(n)));return a.compare(pV1)===1&&(a=new x0([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const c=yp(e),[n,a]=_p(c);for(let r=0;r<this.hashCount;r++){const i=this.Ee(n,a,r);if(!this.de(i))return!1}return!0}static create(e,c,n){const a=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),i=new $f(r,a,c);return n.forEach(s=>i.insert(s)),i}insert(e){if(this.Ie===0)return;const c=yp(e),[n,a]=_p(c);for(let r=0;r<this.hashCount;r++){const i=this.Ee(n,a,r);this.Ae(i)}}Ae(e){const c=Math.floor(e/8),n=e%8;this.bitmap[c]|=1<<n}}class y5 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,c,n,a,r){this.snapshotVersion=e,this.targetChanges=c,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,c,n){const a=new Map;return a.set(e,ct.createSynthesizedTargetChangeForCurrentChange(e,c,n)),new ia(a1.min(),a,new s2(L1),K4(),z1())}}class ct{constructor(e,c,n,a,r){this.resumeToken=e,this.current=c,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,c,n){return new ct(n,c,z1(),z1(),z1())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,c,n,a){this.Re=e,this.removedTargetIds=c,this.key=n,this.Ve=a}}class qE{constructor(e,c){this.targetId=e,this.me=c}}class WE{constructor(e,c,n=W2.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=c,this.resumeToken=n,this.cause=a}}class Lp{constructor(){this.fe=0,this.ge=xp(),this.pe=W2.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=z1(),c=z1(),n=z1();return this.ge.forEach((a,r)=>{switch(r){case 0:e=e.add(a);break;case 2:c=c.add(a);break;case 1:n=n.add(a);break;default:c1()}}),new ct(this.pe,this.ye,e,c,n)}ve(){this.we=!1,this.ge=xp()}Fe(e,c){this.we=!0,this.ge=this.ge.insert(e,c)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,I1(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class vV1{constructor(e){this.Le=e,this.Be=new Map,this.ke=K4(),this.qe=wp(),this.Qe=new s2(L1)}Ke(e){for(const c of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(c,e.Ve):this.Ue(c,e.key,e.Ve);for(const c of e.removedTargetIds)this.Ue(c,e.key,e.Ve)}We(e){this.forEachTarget(e,c=>{const n=this.Ge(c);switch(e.state){case 0:this.ze(c)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(c);break;case 3:this.ze(c)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(c)&&(this.je(c),n.De(e.resumeToken));break;default:c1()}})}forEachTarget(e,c){e.targetIds.length>0?e.targetIds.forEach(c):this.Be.forEach((n,a)=>{this.ze(a)&&c(a)})}He(e){const c=e.targetId,n=e.me.count,a=this.Je(c);if(a){const r=a.target;if(Es(r))if(n===0){const i=new X(r.path);this.Ue(c,i,j2.newNoDocument(i,a1.min()))}else I1(n===1);else{const i=this.Ye(c);if(i!==n){const s=this.Ze(e),o=s?this.Xe(s,e,i):1;if(o!==0){this.je(c);const f=o===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(c,f)}}}}}Ze(e){const c=e.me.unchangedNames;if(!c||!c.bits)return null;const{bits:{bitmap:n="",padding:a=0},hashCount:r=0}=c;let i,s;try{i=F0(n).toUint8Array()}catch(o){if(o instanceof VE)return i8("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{s=new $f(i,a,r)}catch(o){return i8(o instanceof y5?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return s.Ie===0?null:s}Xe(e,c,n){return c.me.count===n-this.nt(e,c.targetId)?0:2}nt(e,c){const n=this.Le.getRemoteKeysForTarget(c);let a=0;return n.forEach(r=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.Ue(c,r,null),a++)}),a}rt(e){const c=new Map;this.Be.forEach((r,i)=>{const s=this.Je(i);if(s){if(r.current&&Es(s.target)){const o=new X(s.target.path);this.ke.get(o)!==null||this.it(i,o)||this.Ue(i,o,j2.newNoDocument(o,e))}r.be&&(c.set(i,r.Ce()),r.ve())}});let n=z1();this.qe.forEach((r,i)=>{let s=!0;i.forEachWhile(o=>{const f=this.Je(o);return!f||f.purpose==="TargetPurposeLimboResolution"||(s=!1,!1)}),s&&(n=n.add(r))}),this.ke.forEach((r,i)=>i.setReadTime(e));const a=new ia(e,c,this.Qe,this.ke,n);return this.ke=K4(),this.qe=wp(),this.Qe=new s2(L1),a}$e(e,c){if(!this.ze(e))return;const n=this.it(e,c.key)?2:0;this.Ge(e).Fe(c.key,n),this.ke=this.ke.insert(c.key,c),this.qe=this.qe.insert(c.key,this.st(c.key).add(e))}Ue(e,c,n){if(!this.ze(e))return;const a=this.Ge(e);this.it(e,c)?a.Fe(c,1):a.Me(c),this.qe=this.qe.insert(c,this.st(c).delete(e)),n&&(this.ke=this.ke.insert(c,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const c=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+c.addedDocuments.size-c.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let c=this.Be.get(e);return c||(c=new Lp,this.Be.set(e,c)),c}st(e){let c=this.qe.get(e);return c||(c=new T2(L1),this.qe=this.qe.insert(e,c)),c}ze(e){const c=this.Je(e)!==null;return c||G("WatchChangeAggregator","Detected inactive target",e),c}Je(e){const c=this.Be.get(e);return c&&c.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Lp),this.Le.getRemoteKeysForTarget(e).forEach(c=>{this.Ue(e,c,null)})}it(e,c){return this.Le.getRemoteKeysForTarget(e).has(c)}}function wp(){return new s2(X.comparator)}function xp(){return new s2(X.comparator)}const gV1={asc:"ASCENDING",desc:"DESCENDING"},zV1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CV1={and:"AND",or:"OR"};class HV1{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function ks(t,e){return t.useProto3Json||ea(e)?e:{value:e}}function En(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MV1(t,e){return En(t,e.toTimestamp())}function h4(t){return I1(!!t),a1.fromTimestamp(function(c){const n=Q6(c);return new d2(n.seconds,n.nanos)}(t))}function qf(t,e){return As(t,e).canonicalString()}function As(t,e){const c=function(a){return new j1(["projects",a.projectId,"databases",a.database])}(t).child("documents");return e===void 0?c:c.child(e)}function KE(t){const e=j1.fromString(t);return I1(JE(e)),e}function Is(t,e){return qf(t.databaseId,e.path)}function Fr(t,e){const c=KE(e);if(c.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+t.databaseId.projectId);if(c.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+t.databaseId.database);return new X(YE(c))}function QE(t,e){return qf(t.databaseId,e)}function VV1(t){const e=KE(t);return e.length===4?j1.emptyPath():YE(e)}function Rs(t){return new j1(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YE(t){return I1(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sp(t,e,c){return{name:Is(t,e),fields:c.value.mapValue.fields}}function yV1(t,e){let c;if("targetChange"in e){e.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:c1()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],r=function(f,u){return f.useProto3Json?(I1(u===void 0||typeof u=="string"),W2.fromBase64String(u||"")):(I1(u===void 0||u instanceof Buffer||u instanceof Uint8Array),W2.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),i=e.targetChange.cause,s=i&&function(f){const u=f.code===void 0?O.UNKNOWN:$E(f.code);return new Y(u,f.message||"")}(i);c=new WE(n,a,r,s||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const a=Fr(t,n.document.name),r=h4(n.document.updateTime),i=n.document.createTime?h4(n.document.createTime):a1.min(),s=new S3({mapValue:{fields:n.document.fields}}),o=j2.newFoundDocument(a,r,i,s),f=n.targetIds||[],u=n.removedTargetIds||[];c=new Ec(f,u,o.key,o)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const a=Fr(t,n.document),r=n.readTime?h4(n.readTime):a1.min(),i=j2.newNoDocument(a,r),s=n.removedTargetIds||[];c=new Ec([],s,i.key,i)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const a=Fr(t,n.document),r=n.removedTargetIds||[];c=new Ec([],r,a,null)}else{if(!("filter"in e))return c1();{e.filter;const n=e.filter;n.targetId;const{count:a=0,unchangedNames:r}=n,i=new hV1(a,r),s=n.targetId;c=new qE(s,i)}}return c}function _V1(t,e){let c;if(e instanceof tt)c={update:Sp(t,e.key,e.value)};else if(e instanceof jE)c={delete:Is(t,e.key)};else if(e instanceof J0)c={update:Sp(t,e.key,e.data),updateMask:kV1(e.fieldMask)};else{if(!(e instanceof lV1))return c1();c={verify:Is(t,e.key)}}return e.fieldTransforms.length>0&&(c.updateTransforms=e.fieldTransforms.map(n=>function(r,i){const s=i.transform;if(s instanceof Nn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof w7)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof x7)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof bn)return{fieldPath:i.field.canonicalString(),increment:s.Pe};throw c1()}(0,n))),e.precondition.isNone||(c.currentDocument=function(a,r){return r.updateTime!==void 0?{updateTime:MV1(a,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:c1()}(t,e.precondition)),c}function LV1(t,e){return t&&t.length>0?(I1(e!==void 0),t.map(c=>function(a,r){let i=a.updateTime?h4(a.updateTime):h4(r);return i.isEqual(a1.min())&&(i=h4(r)),new iV1(i,a.transformResults||[])}(c,e))):[]}function wV1(t,e){return{documents:[QE(t,e.path)]}}function xV1(t,e){const c={structuredQuery:{}},n=e.path;let a;e.collectionGroup!==null?(a=n,c.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=n.popLast(),c.structuredQuery.from=[{collectionId:n.lastSegment()}]),c.parent=QE(t,a);const r=function(f){if(f.length!==0)return ZE(p4.create(f,"and"))}(e.filters);r&&(c.structuredQuery.where=r);const i=function(f){if(f.length!==0)return f.map(u=>function(m){return{field:ge(m.field),direction:bV1(m.dir)}}(u))}(e.orderBy);i&&(c.structuredQuery.orderBy=i);const s=ks(t,e.limit);return s!==null&&(c.structuredQuery.limit=s),e.startAt&&(c.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(c.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{_t:c,parent:a}}function SV1(t){let e=VV1(t.parent);const c=t.structuredQuery,n=c.from?c.from.length:0;let a=null;if(n>0){I1(n===1);const u=c.from[0];u.allDescendants?a=u.collectionId:e=e.child(u.collectionId)}let r=[];c.where&&(r=function(h){const m=XE(h);return m instanceof p4&&wE(m)?m.getFilters():[m]}(c.where));let i=[];c.orderBy&&(i=function(h){return h.map(m=>function(H){return new Sn(ze(H.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(H.direction))}(m))}(c.orderBy));let s=null;c.limit&&(s=function(h){let m;return m=typeof h=="object"?h.value:h,ea(m)?null:m}(c.limit));let o=null;c.startAt&&(o=function(h){const m=!!h.before,v=h.values||[];return new xn(v,m)}(c.startAt));let f=null;return c.endAt&&(f=function(h){const m=!h.before,v=h.values||[];return new xn(v,m)}(c.endAt)),WM1(e,a,i,r,s,"F",o,f)}function NV1(t,e){const c=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return c1()}}(e.purpose);return c==null?null:{"goog-listen-tags":c}}function XE(t){return t.unaryFilter!==void 0?function(c){switch(c.unaryFilter.op){case"IS_NAN":const n=ze(c.unaryFilter.field);return f2.create(n,"==",{doubleValue:NaN});case"IS_NULL":const a=ze(c.unaryFilter.field);return f2.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ze(c.unaryFilter.field);return f2.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ze(c.unaryFilter.field);return f2.create(i,"!=",{nullValue:"NULL_VALUE"});default:return c1()}}(t):t.fieldFilter!==void 0?function(c){return f2.create(ze(c.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return c1()}}(c.fieldFilter.op),c.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(c){return p4.create(c.compositeFilter.filters.map(n=>XE(n)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return c1()}}(c.compositeFilter.op))}(t):c1()}function bV1(t){return gV1[t]}function EV1(t){return zV1[t]}function TV1(t){return CV1[t]}function ge(t){return{fieldPath:t.canonicalString()}}function ze(t){return b2.fromServerFormat(t.fieldPath)}function ZE(t){return t instanceof f2?function(c){if(c.op==="=="){if(mp(c.value))return{unaryFilter:{field:ge(c.field),op:"IS_NAN"}};if(dp(c.value))return{unaryFilter:{field:ge(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(mp(c.value))return{unaryFilter:{field:ge(c.field),op:"IS_NOT_NAN"}};if(dp(c.value))return{unaryFilter:{field:ge(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(c.field),op:EV1(c.op),value:c.value}}}(t):t instanceof p4?function(c){const n=c.getFilters().map(a=>ZE(a));return n.length===1?n[0]:{compositeFilter:{op:TV1(c.op),filters:n}}}(t):c1()}function kV1(t){const e=[];return t.fields.forEach(c=>e.push(c.canonicalString())),{fieldPaths:e}}function JE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x6{constructor(e,c,n,a,r=a1.min(),i=a1.min(),s=W2.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=c,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=s,this.expectedCount=o}withSequenceNumber(e){return new x6(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,c){return new x6(this.target,this.targetId,this.purpose,this.sequenceNumber,c,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new x6(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new x6(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV1{constructor(e){this.ct=e}}function IV1(t){const e=SV1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ts(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV1{constructor(){this._n=new PV1}addToCollectionParentIndex(e,c){return this._n.add(c),F.resolve()}getCollectionParents(e,c){return F.resolve(this._n.getEntries(c))}addFieldIndex(e,c){return F.resolve()}deleteFieldIndex(e,c){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,c){return F.resolve()}getDocumentsMatchingTarget(e,c){return F.resolve(null)}getIndexType(e,c){return F.resolve(0)}getFieldIndexes(e,c){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,c){return F.resolve(K6.min())}getMinOffsetFromCollectionGroup(e,c){return F.resolve(K6.min())}updateCollectionGroup(e,c,n){return F.resolve()}updateIndexEntries(e,c){return F.resolve()}}class PV1{constructor(){this.index={}}add(e){const c=e.lastSegment(),n=e.popLast(),a=this.index[c]||new T2(j1.comparator),r=!a.has(n);return this.index[c]=a.add(n),r}has(e){const c=e.lastSegment(),n=e.popLast(),a=this.index[c];return a&&a.has(n)}getEntries(e){return(this.index[e]||new T2(j1.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f8{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new f8(0)}static Ln(){return new f8(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV1{constructor(){this.changes=new N8(e=>e.toString(),(e,c)=>e.isEqual(c)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,c){this.assertNotApplied(),this.changes.set(e,j2.newInvalidDocument(e).setReadTime(c))}getEntry(e,c){this.assertNotApplied();const n=this.changes.get(c);return n!==void 0?F.resolve(n):this.getFromCache(e,c)}getEntries(e,c){return this.getAllFromCache(e,c)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV1{constructor(e,c){this.overlayedDocument=e,this.mutatedFields=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV1{constructor(e,c,n,a){this.remoteDocumentCache=e,this.mutationQueue=c,this.documentOverlayCache=n,this.indexManager=a}getDocument(e,c){let n=null;return this.documentOverlayCache.getOverlay(e,c).next(a=>(n=a,this.remoteDocumentCache.getEntry(e,c))).next(a=>(n!==null&&F5(n.mutation,a,K3.empty(),d2.now()),a))}getDocuments(e,c){return this.remoteDocumentCache.getEntries(e,c).next(n=>this.getLocalViewOfDocuments(e,n,z1()).next(()=>n))}getLocalViewOfDocuments(e,c,n=z1()){const a=M0();return this.populateOverlays(e,a,c).next(()=>this.computeViews(e,c,a,n).next(r=>{let i=V5();return r.forEach((s,o)=>{i=i.insert(s,o.overlayedDocument)}),i}))}getOverlayedDocuments(e,c){const n=M0();return this.populateOverlays(e,n,c).next(()=>this.computeViews(e,c,n,z1()))}populateOverlays(e,c,n){const a=[];return n.forEach(r=>{c.has(r)||a.push(r)}),this.documentOverlayCache.getOverlays(e,a).next(r=>{r.forEach((i,s)=>{c.set(i,s)})})}computeViews(e,c,n,a){let r=K4();const i=O5(),s=function(){return O5()}();return c.forEach((o,f)=>{const u=n.get(f.key);a.has(f.key)&&(u===void 0||u.mutation instanceof J0)?r=r.insert(f.key,f):u!==void 0?(i.set(f.key,u.mutation.getFieldMask()),F5(u.mutation,f,u.mutation.getFieldMask(),d2.now())):i.set(f.key,K3.empty())}),this.recalculateAndSaveOverlays(e,r).next(o=>(o.forEach((f,u)=>i.set(f,u)),c.forEach((f,u)=>{var h;return s.set(f,new OV1(u,(h=i.get(f))!==null&&h!==void 0?h:null))}),s))}recalculateAndSaveOverlays(e,c){const n=O5();let a=new s2((i,s)=>i-s),r=z1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,c).next(i=>{for(const s of i)s.keys().forEach(o=>{const f=c.get(o);if(f===null)return;let u=n.get(o)||K3.empty();u=s.applyToLocalView(f,u),n.set(o,u);const h=(a.get(s.batchId)||z1()).add(o);a=a.insert(s.batchId,h)})}).next(()=>{const i=[],s=a.getReverseIterator();for(;s.hasNext();){const o=s.getNext(),f=o.key,u=o.value,h=AE();u.forEach(m=>{if(!r.has(m)){const v=BE(c.get(m),n.get(m));v!==null&&h.set(m,v),r=r.add(m)}}),i.push(this.documentOverlayCache.saveOverlays(e,f,h))}return F.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,c){return this.remoteDocumentCache.getEntries(e,c).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,c,n,a){return function(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(c)?this.getDocumentsMatchingDocumentQuery(e,c.path):GM1(c)?this.getDocumentsMatchingCollectionGroupQuery(e,c,n,a):this.getDocumentsMatchingCollectionQuery(e,c,n,a)}getNextDocuments(e,c,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,c,n,a).next(r=>{const i=a-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,c,n.largestBatchId,a-r.size):F.resolve(M0());let s=-1,o=r;return i.next(f=>F.forEach(f,(u,h)=>(s<h.largestBatchId&&(s=h.largestBatchId),r.get(u)?F.resolve():this.remoteDocumentCache.getEntry(e,u).next(m=>{o=o.insert(u,m)}))).next(()=>this.populateOverlays(e,f,r)).next(()=>this.computeViews(e,o,f,z1())).next(u=>({batchId:s,changes:kE(u)})))})}getDocumentsMatchingDocumentQuery(e,c){return this.getDocument(e,new X(c)).next(n=>{let a=V5();return n.isFoundDocument()&&(a=a.insert(n.key,n)),a})}getDocumentsMatchingCollectionGroupQuery(e,c,n,a){const r=c.collectionGroup;let i=V5();return this.indexManager.getCollectionParents(e,r).next(s=>F.forEach(s,o=>{const f=function(h,m){return new ta(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(c,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,f,n,a).next(u=>{u.forEach((h,m)=>{i=i.insert(h,m)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,c,n,a){let r;return this.documentOverlayCache.getOverlaysForCollection(e,c.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,c,n,r,a))).next(i=>{r.forEach((o,f)=>{const u=f.getKey();i.get(u)===null&&(i=i.insert(u,j2.newInvalidDocument(u)))});let s=V5();return i.forEach((o,f)=>{const u=r.get(o);u!==void 0&&F5(u.mutation,f,K3.empty(),d2.now()),na(c,f)&&(s=s.insert(o,f))}),s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV1{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,c){return F.resolve(this.cr.get(c))}saveBundleMetadata(e,c){return this.cr.set(c.id,function(a){return{id:a.id,version:a.version,createTime:h4(a.createTime)}}(c)),F.resolve()}getNamedQuery(e,c){return F.resolve(this.lr.get(c))}saveNamedQuery(e,c){return this.lr.set(c.name,function(a){return{name:a.name,query:IV1(a.bundledQuery),readTime:h4(a.readTime)}}(c)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV1{constructor(){this.overlays=new s2(X.comparator),this.hr=new Map}getOverlay(e,c){return F.resolve(this.overlays.get(c))}getOverlays(e,c){const n=M0();return F.forEach(c,a=>this.getOverlay(e,a).next(r=>{r!==null&&n.set(a,r)})).next(()=>n)}saveOverlays(e,c,n){return n.forEach((a,r)=>{this.ht(e,c,r)}),F.resolve()}removeOverlaysForBatchId(e,c,n){const a=this.hr.get(n);return a!==void 0&&(a.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(n)),F.resolve()}getOverlaysForCollection(e,c,n){const a=M0(),r=c.length+1,i=new X(c.child("")),s=this.overlays.getIteratorFrom(i);for(;s.hasNext();){const o=s.getNext().value,f=o.getKey();if(!c.isPrefixOf(f.path))break;f.path.length===r&&o.largestBatchId>n&&a.set(o.getKey(),o)}return F.resolve(a)}getOverlaysForCollectionGroup(e,c,n,a){let r=new s2((f,u)=>f-u);const i=this.overlays.getIterator();for(;i.hasNext();){const f=i.getNext().value;if(f.getKey().getCollectionGroup()===c&&f.largestBatchId>n){let u=r.get(f.largestBatchId);u===null&&(u=M0(),r=r.insert(f.largestBatchId,u)),u.set(f.getKey(),f)}}const s=M0(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((f,u)=>s.set(f,u)),!(s.size()>=a)););return F.resolve(s)}ht(e,c,n){const a=this.overlays.get(n.key);if(a!==null){const i=this.hr.get(a.largestBatchId).delete(n.key);this.hr.set(a.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new uV1(c,n));let r=this.hr.get(c);r===void 0&&(r=z1(),this.hr.set(c,r)),this.hr.set(c,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.Pr=new T2(g2.Ir),this.Tr=new T2(g2.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,c){const n=new g2(e,c);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,c){e.forEach(n=>this.addReference(n,c))}removeReference(e,c){this.Ar(new g2(e,c))}Rr(e,c){e.forEach(n=>this.removeReference(n,c))}Vr(e){const c=new X(new j1([])),n=new g2(c,e),a=new g2(c,e+1),r=[];return this.Tr.forEachInRange([n,a],i=>{this.Ar(i),r.push(i.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const c=new X(new j1([])),n=new g2(c,e),a=new g2(c,e+1);let r=z1();return this.Tr.forEachInRange([n,a],i=>{r=r.add(i.key)}),r}containsKey(e){const c=new g2(e,0),n=this.Pr.firstAfterOrEqual(c);return n!==null&&e.isEqual(n.key)}}class g2{constructor(e,c){this.key=e,this.pr=c}static Ir(e,c){return X.comparator(e.key,c.key)||L1(e.pr,c.pr)}static Er(e,c){return L1(e.pr,c.pr)||X.comparator(e.key,c.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV1{constructor(e,c){this.indexManager=e,this.referenceDelegate=c,this.mutationQueue=[],this.yr=1,this.wr=new T2(g2.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,c,n,a){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new fV1(r,c,n,a);this.mutationQueue.push(i);for(const s of a)this.wr=this.wr.add(new g2(s.key,r)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return F.resolve(i)}lookupMutationBatch(e,c){return F.resolve(this.Sr(c))}getNextMutationBatchAfterBatchId(e,c){const n=c+1,a=this.br(n),r=a<0?0:a;return F.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,c){const n=new g2(c,0),a=new g2(c,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,a],i=>{const s=this.Sr(i.pr);r.push(s)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,c){let n=new T2(L1);return c.forEach(a=>{const r=new g2(a,0),i=new g2(a,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,i],s=>{n=n.add(s.pr)})}),F.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,c){const n=c.path,a=n.length+1;let r=n;X.isDocumentKey(r)||(r=r.child(""));const i=new g2(new X(r),0);let s=new T2(L1);return this.wr.forEachWhile(o=>{const f=o.key.path;return!!n.isPrefixOf(f)&&(f.length===a&&(s=s.add(o.pr)),!0)},i),F.resolve(this.Dr(s))}Dr(e){const c=[];return e.forEach(n=>{const a=this.Sr(n);a!==null&&c.push(a)}),c}removeMutationBatch(e,c){I1(this.Cr(c.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return F.forEach(c.mutations,a=>{const r=new g2(a.key,c.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,c){const n=new g2(c,0),a=this.wr.firstAfterOrEqual(n);return F.resolve(c.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,c){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const c=this.br(e);return c<0||c>=this.mutationQueue.length?null:this.mutationQueue[c]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V1{constructor(e){this.vr=e,this.docs=function(){return new s2(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,c){const n=c.key,a=this.docs.get(n),r=a?a.size:0,i=this.vr(c);return this.docs=this.docs.insert(n,{document:c.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const c=this.docs.get(e);c&&(this.docs=this.docs.remove(e),this.size-=c.size)}getEntry(e,c){const n=this.docs.get(c);return F.resolve(n?n.document.mutableCopy():j2.newInvalidDocument(c))}getEntries(e,c){let n=K4();return c.forEach(a=>{const r=this.docs.get(a);n=n.insert(a,r?r.document.mutableCopy():j2.newInvalidDocument(a))}),F.resolve(n)}getDocumentsMatchingQuery(e,c,n,a){let r=K4();const i=c.path,s=new X(i.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:f,value:{document:u}}=o.getNext();if(!i.isPrefixOf(f.path))break;f.path.length>i.length+1||SM1(xM1(u),n)<=0||(a.has(u.key)||na(c,u))&&(r=r.insert(u.key,u.mutableCopy()))}return F.resolve(r)}getAllFromCollectionGroup(e,c,n,a){c1()}Fr(e,c){return F.forEach(this.docs,n=>c(n))}newChangeBuffer(e){return new qV1(this)}getSize(e){return F.resolve(this.size)}}class qV1 extends DV1{constructor(e){super(),this.ar=e}applyChanges(e){const c=[];return this.changes.forEach((n,a)=>{a.isValidDocument()?c.push(this.ar.addEntry(e,a)):this.ar.removeEntry(n)}),F.waitFor(c)}getFromCache(e,c){return this.ar.getEntry(e,c)}getAllFromCache(e,c){return this.ar.getEntries(e,c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV1{constructor(e){this.persistence=e,this.Mr=new N8(c=>Ff(c),Bf),this.lastRemoteSnapshotVersion=a1.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wf,this.targetCount=0,this.Lr=f8.Nn()}forEachTarget(e,c){return this.Mr.forEach((n,a)=>c(a)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,c,n){return n&&(this.lastRemoteSnapshotVersion=n),c>this.Or&&(this.Or=c),F.resolve()}qn(e){this.Mr.set(e.target,e);const c=e.targetId;c>this.highestTargetId&&(this.Lr=new f8(c),this.highestTargetId=c),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,c){return this.qn(c),this.targetCount+=1,F.resolve()}updateTargetData(e,c){return this.qn(c),F.resolve()}removeTargetData(e,c){return this.Mr.delete(c.target),this.Nr.Vr(c.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,c,n){let a=0;const r=[];return this.Mr.forEach((i,s)=>{s.sequenceNumber<=c&&n.get(s.targetId)===null&&(this.Mr.delete(i),r.push(this.removeMatchingKeysForTargetId(e,s.targetId)),a++)}),F.waitFor(r).next(()=>a)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,c){const n=this.Mr.get(c)||null;return F.resolve(n)}addMatchingKeys(e,c,n){return this.Nr.dr(c,n),F.resolve()}removeMatchingKeys(e,c,n){this.Nr.Rr(c,n);const a=this.persistence.referenceDelegate,r=[];return a&&c.forEach(i=>{r.push(a.markPotentiallyOrphaned(e,i))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,c){return this.Nr.Vr(c),F.resolve()}getMatchingKeysForTargetId(e,c){const n=this.Nr.gr(c);return F.resolve(n)}containsKey(e,c){return F.resolve(this.Nr.containsKey(c))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV1{constructor(e,c){this.Br={},this.overlays={},this.kr=new Rf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new WV1(this),this.indexManager=new RV1,this.remoteDocumentCache=function(a){return new $V1(a)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new AV1(c),this.$r=new BV1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let c=this.overlays[e.toKey()];return c||(c=new UV1,this.overlays[e.toKey()]=c),c}getMutationQueue(e,c){let n=this.Br[e.toKey()];return n||(n=new jV1(c,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,c,n){G("MemoryPersistence","Starting transaction:",e);const a=new KV1(this.kr.next());return this.referenceDelegate.Ur(),n(a).next(r=>this.referenceDelegate.Wr(a).next(()=>r)).toPromise().then(r=>(a.raiseOnCommittedEvent(),r))}Gr(e,c){return F.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,c)))}}class KV1 extends bM1{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.zr=new Wf,this.jr=null}static Hr(e){return new Gf(e)}get Jr(){if(this.jr)return this.jr;throw c1()}addReference(e,c,n){return this.zr.addReference(n,c),this.Jr.delete(n.toString()),F.resolve()}removeReference(e,c,n){return this.zr.removeReference(n,c),this.Jr.add(n.toString()),F.resolve()}markPotentiallyOrphaned(e,c){return this.Jr.add(c.toString()),F.resolve()}removeTarget(e,c){this.zr.Vr(c.targetId).forEach(a=>this.Jr.add(a.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,c.targetId).next(a=>{a.forEach(r=>this.Jr.add(r.toString()))}).next(()=>n.removeTargetData(e,c))}Ur(){this.jr=new Set}Wr(e){const c=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,n=>{const a=X.fromPath(n);return this.Yr(e,a).next(r=>{r||c.removeEntry(a,a1.min())})}).next(()=>(this.jr=null,c.apply(e)))}updateLimboDocument(e,c){return this.Yr(e,c).next(n=>{n?this.Jr.delete(c.toString()):this.Jr.add(c.toString())})}Kr(e){return 0}Yr(e,c){return F.or([()=>F.resolve(this.zr.containsKey(c)),()=>this.persistence.getTargetCache().containsKey(e,c),()=>this.persistence.Gr(e,c)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,c,n,a){this.targetId=e,this.fromCache=c,this.qi=n,this.Qi=a}static Ki(e,c){let n=z1(),a=z1();for(const r of c.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:a=a.add(r.doc.key)}return new Kf(e,c.fromCache,n,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV1{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Nz1()?8:EM1(A2())>0?6:4}()}initialize(e,c){this.zi=e,this.indexManager=c,this.$i=!0}getDocumentsMatchingQuery(e,c,n,a){const r={result:null};return this.ji(e,c).next(i=>{r.result=i}).next(()=>{if(!r.result)return this.Hi(e,c,a,n).next(i=>{r.result=i})}).next(()=>{if(r.result)return;const i=new QV1;return this.Ji(e,c,i).next(s=>{if(r.result=s,this.Ui)return this.Yi(e,c,i,s.size)})}).next(()=>r.result)}Yi(e,c,n,a){return n.documentReadCount<this.Wi?(i5()<=g1.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ve(c),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(i5()<=g1.DEBUG&&G("QueryEngine","Query:",ve(c),"scans",n.documentReadCount,"local documents and returns",a,"documents as results."),n.documentReadCount>this.Gi*a?(i5()<=g1.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ve(c),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,u4(c))):F.resolve())}ji(e,c){if(zp(c))return F.resolve(null);let n=u4(c);return this.indexManager.getIndexType(e,n).next(a=>a===0?null:(c.limit!==null&&a===1&&(c=Ts(c,null,"F"),n=u4(c)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=z1(...r);return this.zi.getDocuments(e,i).next(s=>this.indexManager.getMinOffset(e,n).next(o=>{const f=this.Zi(c,s);return this.Xi(c,f,i,o.readTime)?this.ji(e,Ts(c,null,"F")):this.es(e,f,c,o)}))})))}Hi(e,c,n,a){return zp(c)||a.isEqual(a1.min())?F.resolve(null):this.zi.getDocuments(e,n).next(r=>{const i=this.Zi(c,r);return this.Xi(c,i,n,a)?F.resolve(null):(i5()<=g1.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ve(c)),this.es(e,i,c,wM1(a,-1)).next(s=>s))})}Zi(e,c){let n=new T2(EE(e));return c.forEach((a,r)=>{na(e,r)&&(n=n.add(r))}),n}Xi(e,c,n,a){if(e.limit===null)return!1;if(n.size!==c.size)return!0;const r=e.limitType==="F"?c.last():c.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(a)>0)}Ji(e,c,n){return i5()<=g1.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ve(c)),this.zi.getDocumentsMatchingQuery(e,c,K6.min(),n)}es(e,c,n,a){return this.zi.getDocumentsMatchingQuery(e,n,a).next(r=>(c.forEach(i=>{r=r.insert(i.key,i)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV1{constructor(e,c,n,a){this.persistence=e,this.ts=c,this.serializer=a,this.ns=new s2(L1),this.rs=new N8(r=>Ff(r),Bf),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FV1(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",c=>e.collect(c,this.ns))}}function ZV1(t,e,c,n){return new XV1(t,e,c,n)}async function eT(t,e){const c=r1(t);return await c.persistence.runTransaction("Handle user change","readonly",n=>{let a;return c.mutationQueue.getAllMutationBatches(n).next(r=>(a=r,c._s(e),c.mutationQueue.getAllMutationBatches(n))).next(r=>{const i=[],s=[];let o=z1();for(const f of a){i.push(f.batchId);for(const u of f.mutations)o=o.add(u.key)}for(const f of r){s.push(f.batchId);for(const u of f.mutations)o=o.add(u.key)}return c.localDocuments.getDocuments(n,o).next(f=>({us:f,removedBatchIds:i,addedBatchIds:s}))})})}function JV1(t,e){const c=r1(t);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const a=e.batch.keys(),r=c.os.newChangeBuffer({trackRemovals:!0});return function(s,o,f,u){const h=f.batch,m=h.keys();let v=F.resolve();return m.forEach(H=>{v=v.next(()=>u.getEntry(o,H)).next(w=>{const S=f.docVersions.get(H);I1(S!==null),w.version.compareTo(S)<0&&(h.applyToRemoteDocument(w,f),w.isValidDocument()&&(w.setReadTime(f.commitVersion),u.addEntry(w)))})}),v.next(()=>s.mutationQueue.removeMutationBatch(o,h))}(c,n,e,r).next(()=>r.apply(n)).next(()=>c.mutationQueue.performConsistencyCheck(n)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(n,a,e.batch.batchId)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(s){let o=z1();for(let f=0;f<s.mutationResults.length;++f)s.mutationResults[f].transformResults.length>0&&(o=o.add(s.batch.mutations[f].key));return o}(e))).next(()=>c.localDocuments.getDocuments(n,a))})}function tT(t){const e=r1(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",c=>e.Qr.getLastRemoteSnapshotVersion(c))}function ey1(t,e){const c=r1(t),n=e.snapshotVersion;let a=c.ns;return c.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const i=c.os.newChangeBuffer({trackRemovals:!0});a=c.ns;const s=[];e.targetChanges.forEach((u,h)=>{const m=a.get(h);if(!m)return;s.push(c.Qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>c.Qr.addMatchingKeys(r,u.addedDocuments,h)));let v=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?v=v.withResumeToken(W2.EMPTY_BYTE_STRING,a1.min()).withLastLimboFreeSnapshotVersion(a1.min()):u.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(u.resumeToken,n)),a=a.insert(h,v),function(w,S,M){return w.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,v,u)&&s.push(c.Qr.updateTargetData(r,v))});let o=K4(),f=z1();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&s.push(c.persistence.referenceDelegate.updateLimboDocument(r,u))}),s.push(ty1(r,i,e.documentUpdates).next(u=>{o=u.cs,f=u.ls})),!n.isEqual(a1.min())){const u=c.Qr.getLastRemoteSnapshotVersion(r).next(h=>c.Qr.setTargetsMetadata(r,r.currentSequenceNumber,n));s.push(u)}return F.waitFor(s).next(()=>i.apply(r)).next(()=>c.localDocuments.getLocalViewOfDocuments(r,o,f)).next(()=>o)}).then(r=>(c.ns=a,r))}function ty1(t,e,c){let n=z1(),a=z1();return c.forEach(r=>n=n.add(r)),e.getEntries(t,n).next(r=>{let i=K4();return c.forEach((s,o)=>{const f=r.get(s);o.isFoundDocument()!==f.isFoundDocument()&&(a=a.add(s)),o.isNoDocument()&&o.version.isEqual(a1.min())?(e.removeEntry(s,o.readTime),i=i.insert(s,o)):!f.isValidDocument()||o.version.compareTo(f.version)>0||o.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(o),i=i.insert(s,o)):G("LocalStore","Ignoring outdated watch update for ",s,". Current version:",f.version," Watch version:",o.version)}),{cs:i,ls:a}})}function cy1(t,e){const c=r1(t);return c.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function ny1(t,e){const c=r1(t);return c.persistence.runTransaction("Allocate target","readwrite",n=>{let a;return c.Qr.getTargetData(n,e).next(r=>r?(a=r,F.resolve(a)):c.Qr.allocateTargetId(n).next(i=>(a=new x6(e,i,"TargetPurposeListen",n.currentSequenceNumber),c.Qr.addTargetData(n,a).next(()=>a))))}).then(n=>{const a=c.ns.get(n.targetId);return(a===null||n.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(c.ns=c.ns.insert(n.targetId,n),c.rs.set(e,n.targetId)),n})}async function Ps(t,e,c){const n=r1(t),a=n.ns.get(e),r=c?"readwrite":"readwrite-primary";try{c||await n.persistence.runTransaction("Release target",r,i=>n.persistence.referenceDelegate.removeTarget(i,a))}catch(i){if(!et(i))throw i;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${i}`)}n.ns=n.ns.remove(e),n.rs.delete(a.target)}function Np(t,e,c){const n=r1(t);let a=a1.min(),r=z1();return n.persistence.runTransaction("Execute query","readwrite",i=>function(o,f,u){const h=r1(o),m=h.rs.get(u);return m!==void 0?F.resolve(h.ns.get(m)):h.Qr.getTargetData(f,u)}(n,i,u4(e)).next(s=>{if(s)return a=s.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(i,s.targetId).next(o=>{r=o})}).next(()=>n.ts.getDocumentsMatchingQuery(i,e,c?a:a1.min(),c?r:z1())).next(s=>(ay1(n,QM1(e),s),{documents:s,hs:r})))}function ay1(t,e,c){let n=t.ss.get(e)||a1.min();c.forEach((a,r)=>{r.readTime.compareTo(n)>0&&(n=r.readTime)}),t.ss.set(e,n)}class bp{constructor(){this.activeTargetIds=tV1()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ry1{constructor(){this.no=new bp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,c,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,c,n){this.ro[e]=c}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new bp,Promise.resolve()}handleUserChange(e,c,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy1{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc=null;function Br(){return oc===null?oc=function(){return 268435456+Math.round(2147483648*Math.random())}():oc++,"0x"+oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy1{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){return new HV1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");