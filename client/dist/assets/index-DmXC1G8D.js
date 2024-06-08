function aI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function h_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f_={exports:{}},Uu={},d_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),lI=Symbol.for("react.portal"),uI=Symbol.for("react.fragment"),cI=Symbol.for("react.strict_mode"),hI=Symbol.for("react.profiler"),fI=Symbol.for("react.provider"),dI=Symbol.for("react.context"),pI=Symbol.for("react.forward_ref"),mI=Symbol.for("react.suspense"),gI=Symbol.for("react.memo"),vI=Symbol.for("react.lazy"),fg=Symbol.iterator;function yI(t){return t===null||typeof t!="object"?null:(t=fg&&t[fg]||t["@@iterator"],typeof t=="function"?t:null)}var p_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m_=Object.assign,g_={};function ys(t,e,n){this.props=t,this.context=e,this.refs=g_,this.updater=n||p_}ys.prototype.isReactComponent={};ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v_(){}v_.prototype=ys.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=g_,this.updater=n||p_}var gd=md.prototype=new v_;gd.constructor=md;m_(gd,ys.prototype);gd.isPureReactComponent=!0;var dg=Array.isArray,y_=Object.prototype.hasOwnProperty,vd={current:null},__={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)y_.call(e,r)&&!__.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:la,type:t,key:s,ref:o,props:i,_owner:vd.current}}function _I(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function wI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pg=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wI(""+t.key):e.toString(36)}function kl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case lI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kc(o,0):r,dg(i)?(n="",t!=null&&(n=t.replace(pg,"$&/")+"/"),kl(i,e,n,"",function(c){return c})):i!=null&&(yd(i)&&(i=_I(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Kc(s,l);o+=kl(s,e,n,u,i)}else if(u=yI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Kc(s,l++),o+=kl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return kl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Al={transition:null},TI={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Al,ReactCurrentOwner:vd};function E_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ys;ne.Fragment=uI;ne.Profiler=hI;ne.PureComponent=md;ne.StrictMode=cI;ne.Suspense=mI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TI;ne.act=E_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=m_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)y_.call(e,u)&&!__.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:la,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:dI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fI,_context:t},t.Consumer=t};ne.createElement=w_;ne.createFactory=function(t){var e=w_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:pI,render:t}};ne.isValidElement=yd;ne.lazy=function(t){return{$$typeof:vI,_payload:{_status:-1,_result:t},_init:EI}};ne.memo=function(t,e){return{$$typeof:gI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};ne.unstable_act=E_;ne.useCallback=function(t,e){return pt.current.useCallback(t,e)};ne.useContext=function(t){return pt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return pt.current.useEffect(t,e)};ne.useId=function(){return pt.current.useId()};ne.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return pt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ne.useRef=function(t){return pt.current.useRef(t)};ne.useState=function(t){return pt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return pt.current.useTransition()};ne.version="18.3.1";d_.exports=ne;var z=d_.exports;const ju=h_(z),II=aI({__proto__:null,default:ju},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SI=z,kI=Symbol.for("react.element"),AI=Symbol.for("react.fragment"),PI=Object.prototype.hasOwnProperty,CI=SI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RI={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PI.call(e,r)&&!RI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kI,type:t,key:s,ref:o,props:i,_owner:CI.current}}Uu.Fragment=AI;Uu.jsx=T_;Uu.jsxs=T_;f_.exports=Uu;var C=f_.exports,I_={exports:{}},Ct={},S_={exports:{}},k_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var ee=B.length;B.push(Y);e:for(;0<ee;){var Ee=ee-1>>>1,he=B[Ee];if(0<i(he,Y))B[Ee]=Y,B[ee]=he,ee=Ee;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],ee=B.pop();if(ee!==Y){B[0]=ee;e:for(var Ee=0,he=B.length,be=he>>>1;Ee<be;){var vn=2*(Ee+1)-1,yn=B[vn],_n=vn+1,wn=B[_n];if(0>i(yn,ee))_n<he&&0>i(wn,yn)?(B[Ee]=wn,B[_n]=ee,Ee=_n):(B[Ee]=yn,B[vn]=ee,Ee=vn);else if(_n<he&&0>i(wn,ee))B[Ee]=wn,B[_n]=ee,Ee=_n;else break e}}return Y}function i(B,Y){var ee=B.sortIndex-Y.sortIndex;return ee!==0?ee:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,w=!1,P=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function O(B){if(R=!1,I(B),!P)if(n(u)!==null)P=!0,Rs(L);else{var Y=n(c);Y!==null&&gn(O,Y.startTime-B)}}function L(B,Y){P=!1,R&&(R=!1,T(v),v=-1),w=!0;var ee=g;try{for(I(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||B&&!A());){var Ee=p.callback;if(typeof Ee=="function"){p.callback=null,g=p.priorityLevel;var he=Ee(p.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(u)&&r(u),I(Y)}else r(u);p=n(u)}if(p!==null)var be=!0;else{var vn=n(c);vn!==null&&gn(O,vn.startTime-Y),be=!1}return be}finally{p=null,g=ee,w=!1}}var U=!1,E=null,v=-1,_=5,S=-1;function A(){return!(t.unstable_now()-S<_)}function x(){if(E!==null){var B=t.unstable_now();S=B;var Y=!0;try{Y=E(!0,B)}finally{Y?k():(U=!1,E=null)}}else U=!1}var k;if(typeof y=="function")k=function(){y(x)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Vr=xt.port2;xt.port1.onmessage=x,k=function(){Vr.postMessage(null)}}else k=function(){N(x,0)};function Rs(B){E=B,U||(U=!0,k())}function gn(B,Y){v=N(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||w||(P=!0,Rs(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var ee=g;g=Y;try{return B()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=g;g=B;try{return Y()}finally{g=ee}},t.unstable_scheduleCallback=function(B,Y,ee){var Ee=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ee+ee:Ee):ee=Ee,B){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,B={id:f++,callback:Y,priorityLevel:B,startTime:ee,expirationTime:he,sortIndex:-1},ee>Ee?(B.sortIndex=ee,e(c,B),n(u)===null&&B===n(c)&&(R?(T(v),v=-1):R=!0,gn(O,ee-Ee))):(B.sortIndex=he,e(u,B),P||w||(P=!0,Rs(L))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Y=g;return function(){var ee=g;g=Y;try{return B.apply(this,arguments)}finally{g=ee}}}})(k_);S_.exports=k_;var bI=S_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xI=z,At=bI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A_=new Set,Po={};function pi(t,e){ns(t,e),ns(t+"Capture",e)}function ns(t,e){for(Po[t]=e,t=0;t<e.length;t++)A_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vh=Object.prototype.hasOwnProperty,NI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mg={},gg={};function OI(t){return Vh.call(gg,t)?!0:Vh.call(mg,t)?!1:NI.test(t)?gg[t]=!0:(mg[t]=!0,!1)}function DI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LI(t,e,n,r){if(e===null||typeof e>"u"||DI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,wd);Ye[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,wd);Ye[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,wd);Ye[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LI(e,n,i,r)&&(n=null),r||i===null?OI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=xI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),Mh=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Fh=Symbol.for("react.suspense"),Uh=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),R_=Symbol.for("react.offscreen"),vg=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Gc;function eo(t){if(Gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gc=e&&e[1]||""}return`
`+Gc+t}var Qc=!1;function Yc(t,e){if(!t||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function VI(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Yc(t.type,!1),t;case 11:return t=Yc(t.type.render,!1),t;case 1:return t=Yc(t.type,!0),t;default:return""}}function jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bi:return"Fragment";case Ri:return"Portal";case Mh:return"Profiler";case Td:return"StrictMode";case Fh:return"Suspense";case Uh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C_:return(t.displayName||"Context")+".Consumer";case P_:return(t._context.displayName||"Context")+".Provider";case Id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:jh(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return jh(t(e))}catch{}}return null}function MI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jh(e);case 8:return e===Td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FI(t){var e=b_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=FI(t))}function x_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=b_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zh(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N_(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function Bh(t,e){N_(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$h(t,e.type,n):e.hasOwnProperty("defaultValue")&&$h(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _g(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $h(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(to(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function O_(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,L_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UI=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){UI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function V_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function M_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var jI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(t,e){if(e){if(jI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=null;function kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qh=null,qi=null,Ki=null;function Tg(t){if(t=ha(t)){if(typeof Qh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Hu(e),Qh(t.stateNode,t.type,e))}}function F_(t){qi?Ki?Ki.push(t):Ki=[t]:qi=t}function U_(){if(qi){var t=qi,e=Ki;if(Ki=qi=null,Tg(t),e)for(t=0;t<e.length;t++)Tg(e[t])}}function j_(t,e){return t(e)}function z_(){}var Xc=!1;function B_(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return j_(t,e,n)}finally{Xc=!1,(qi!==null||Ki!==null)&&(z_(),U_())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Hu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Yh=!1;if(On)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Yh=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Yh=!1}function zI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ho=!1,Gl=null,Ql=!1,Xh=null,BI={onError:function(t){ho=!0,Gl=t}};function $I(t,e,n,r,i,s,o,l,u){ho=!1,Gl=null,zI.apply(BI,arguments)}function WI(t,e,n,r,i,s,o,l,u){if($I.apply(this,arguments),ho){if(ho){var c=Gl;ho=!1,Gl=null}else throw Error(F(198));Ql||(Ql=!0,Xh=c)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ig(t){if(mi(t)!==t)throw Error(F(188))}function HI(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ig(i),t;if(s===r)return Ig(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function W_(t){return t=HI(t),t!==null?H_(t):null}function H_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=H_(t);if(e!==null)return e;t=t.sibling}return null}var q_=At.unstable_scheduleCallback,Sg=At.unstable_cancelCallback,qI=At.unstable_shouldYield,KI=At.unstable_requestPaint,xe=At.unstable_now,GI=At.unstable_getCurrentPriorityLevel,Ad=At.unstable_ImmediatePriority,K_=At.unstable_UserBlockingPriority,Yl=At.unstable_NormalPriority,QI=At.unstable_LowPriority,G_=At.unstable_IdlePriority,zu=null,ln=null;function YI(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(zu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:ZI,XI=Math.log,JI=Math.LN2;function ZI(t){return t>>>=0,t===0?32:31-(XI(t)/JI|0)|0}var Xa=64,Ja=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=no(l):(s&=o,s!==0&&(r=no(s)))}else o=n&~i,o!==0?r=no(o):s!==0&&(r=no(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function eS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q_(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function nS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function Y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X_,Cd,J_,Z_,e0,Zh=!1,Za=[],cr=null,hr=null,fr=null,bo=new Map,xo=new Map,er=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ha(e),e!==null&&Cd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iS(t,e,n,r,i){switch(e){case"focusin":return cr=qs(cr,t,e,n,r,i),!0;case"dragenter":return hr=qs(hr,t,e,n,r,i),!0;case"mouseover":return fr=qs(fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,qs(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,qs(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function t0(t){var e=Wr(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=$_(n),e!==null){t.blockedOn=e,e0(t.priority,function(){J_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gh=r,n.target.dispatchEvent(r),Gh=null}else return e=ha(n),e!==null&&Cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ag(t,e,n){Pl(t)&&n.delete(e)}function sS(){Zh=!1,cr!==null&&Pl(cr)&&(cr=null),hr!==null&&Pl(hr)&&(hr=null),fr!==null&&Pl(fr)&&(fr=null),bo.forEach(Ag),xo.forEach(Ag)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Zh||(Zh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,sS)))}function No(t){function e(i){return Ks(i,t)}if(0<Za.length){Ks(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Ks(cr,t),hr!==null&&Ks(hr,t),fr!==null&&Ks(fr,t),bo.forEach(e),xo.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)t0(n),n.blockedOn===null&&er.shift()}var Gi=$n.ReactCurrentBatchConfig,Jl=!0;function oS(t,e,n,r){var i=ue,s=Gi.transition;Gi.transition=null;try{ue=1,Rd(t,e,n,r)}finally{ue=i,Gi.transition=s}}function aS(t,e,n,r){var i=ue,s=Gi.transition;Gi.transition=null;try{ue=4,Rd(t,e,n,r)}finally{ue=i,Gi.transition=s}}function Rd(t,e,n,r){if(Jl){var i=ef(t,e,n,r);if(i===null)lh(t,e,r,Zl,n),kg(t,r);else if(iS(i,t,e,n,r))r.stopPropagation();else if(kg(t,r),e&4&&-1<rS.indexOf(t)){for(;i!==null;){var s=ha(i);if(s!==null&&X_(s),s=ef(t,e,n,r),s===null&&lh(t,e,r,Zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else lh(t,e,r,null,n)}}var Zl=null;function ef(t,e,n,r){if(Zl=null,t=kd(r),t=Wr(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function n0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GI()){case Ad:return 1;case K_:return 4;case Yl:case QI:return 16;case G_:return 536870912;default:return 16}default:return 16}}var or=null,bd=null,Cl=null;function r0(){if(Cl)return Cl;var t,e=bd,n=e.length,r,i="value"in or?or.value:or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Pg(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:Pg,this.isPropagationStopped=Pg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=Rt(_s),ca=Se({},_s,{view:0,detail:0}),lS=Rt(ca),Zc,eh,Gs,Bu=Se({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(Zc=t.screenX-Gs.screenX,eh=t.screenY-Gs.screenY):eh=Zc=0,Gs=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:eh}}),Cg=Rt(Bu),uS=Se({},Bu,{dataTransfer:0}),cS=Rt(uS),hS=Se({},ca,{relatedTarget:0}),th=Rt(hS),fS=Se({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),dS=Rt(fS),pS=Se({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mS=Rt(pS),gS=Se({},_s,{data:0}),Rg=Rt(gS),vS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_S[t])?!!e[t]:!1}function Nd(){return wS}var ES=Se({},ca,{key:function(t){if(t.key){var e=vS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=Rt(ES),IS=Se({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=Rt(IS),SS=Se({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),kS=Rt(SS),AS=Se({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=Rt(AS),CS=Se({},Bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=Rt(CS),bS=[9,13,27,32],Od=On&&"CompositionEvent"in window,fo=null;On&&"documentMode"in document&&(fo=document.documentMode);var xS=On&&"TextEvent"in window&&!fo,i0=On&&(!Od||fo&&8<fo&&11>=fo),xg=" ",Ng=!1;function s0(t,e){switch(t){case"keyup":return bS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function NS(t,e){switch(t){case"compositionend":return o0(e);case"keypress":return e.which!==32?null:(Ng=!0,xg);case"textInput":return t=e.data,t===xg&&Ng?null:t;default:return null}}function OS(t,e){if(xi)return t==="compositionend"||!Od&&s0(t,e)?(t=r0(),Cl=bd=or=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return i0&&e.locale!=="ko"?null:e.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DS[t.type]:e==="textarea"}function a0(t,e,n,r){F_(r),e=eu(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,Oo=null;function LS(t){y0(t,0)}function $u(t){var e=Di(t);if(x_(e))return t}function VS(t,e){if(t==="change")return e}var l0=!1;if(On){var nh;if(On){var rh="oninput"in document;if(!rh){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),rh=typeof Dg.oninput=="function"}nh=rh}else nh=!1;l0=nh&&(!document.documentMode||9<document.documentMode)}function Lg(){po&&(po.detachEvent("onpropertychange",u0),Oo=po=null)}function u0(t){if(t.propertyName==="value"&&$u(Oo)){var e=[];a0(e,Oo,t,kd(t)),B_(LS,e)}}function MS(t,e,n){t==="focusin"?(Lg(),po=e,Oo=n,po.attachEvent("onpropertychange",u0)):t==="focusout"&&Lg()}function FS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(Oo)}function US(t,e){if(t==="click")return $u(e)}function jS(t,e){if(t==="input"||t==="change")return $u(e)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:zS;function Do(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vh.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function Vg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mg(t,e){var n=Vg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vg(n)}}function c0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?c0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function h0(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BS(t){var e=h0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&c0(n.ownerDocument.documentElement,n)){if(r!==null&&Dd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Mg(n,s);var o=Mg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $S=On&&"documentMode"in document&&11>=document.documentMode,Ni=null,tf=null,mo=null,nf=!1;function Fg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nf||Ni==null||Ni!==Kl(r)||(r=Ni,"selectionStart"in r&&Dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Do(mo,r)||(mo=r,r=eu(tf,"onSelect"),0<r.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ih={},f0={};On&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Wu(t){if(ih[t])return ih[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f0)return ih[t]=e[n];return t}var d0=Wu("animationend"),p0=Wu("animationiteration"),m0=Wu("animationstart"),g0=Wu("transitionend"),v0=new Map,Ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){v0.set(t,e),pi(e,[t])}for(var sh=0;sh<Ug.length;sh++){var oh=Ug[sh],WS=oh.toLowerCase(),HS=oh[0].toUpperCase()+oh.slice(1);xr(WS,"on"+HS)}xr(d0,"onAnimationEnd");xr(p0,"onAnimationIteration");xr(m0,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(g0,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function jg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,WI(r,e,void 0,t),t.currentTarget=null}function y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;jg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;jg(i,l,c),s=u}}}if(Ql)throw t=Xh,Ql=!1,Xh=null,t}function ge(t,e){var n=e[lf];n===void 0&&(n=e[lf]=new Set);var r=t+"__bubble";n.has(r)||(_0(e,t,2,!1),n.add(r))}function ah(t,e,n){var r=0;e&&(r|=4),_0(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[nl]){t[nl]=!0,A_.forEach(function(n){n!=="selectionchange"&&(qS.has(n)||ah(n,!1,t),ah(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,ah("selectionchange",!1,e))}}function _0(t,e,n,r){switch(n0(e)){case 1:var i=oS;break;case 4:i=aS;break;default:i=Rd}n=i.bind(null,e,n,t),i=void 0,!Yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function lh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}B_(function(){var c=s,f=kd(n),p=[];e:{var g=v0.get(t);if(g!==void 0){var w=xd,P=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":w=TS;break;case"focusin":P="focus",w=th;break;case"focusout":P="blur",w=th;break;case"beforeblur":case"afterblur":w=th;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=kS;break;case d0:case p0:case m0:w=dS;break;case g0:w=PS;break;case"scroll":w=lS;break;case"wheel":w=RS;break;case"copy":case"cut":case"paste":w=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bg}var R=(e&4)!==0,N=!R&&t==="scroll",T=R?g!==null?g+"Capture":null:g;R=[];for(var y=c,I;y!==null;){I=y;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,T!==null&&(O=Ro(y,T),O!=null&&R.push(Vo(y,O,I)))),N)break;y=y.return}0<R.length&&(g=new w(g,P,null,n,f),p.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Gh&&(P=n.relatedTarget||n.fromElement)&&(Wr(P)||P[Dn]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(P=n.relatedTarget||n.toElement,w=c,P=P?Wr(P):null,P!==null&&(N=mi(P),P!==N||P.tag!==5&&P.tag!==6)&&(P=null)):(w=null,P=c),w!==P)){if(R=Cg,O="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(R=bg,O="onPointerLeave",T="onPointerEnter",y="pointer"),N=w==null?g:Di(w),I=P==null?g:Di(P),g=new R(O,y+"leave",w,n,f),g.target=N,g.relatedTarget=I,O=null,Wr(f)===c&&(R=new R(T,y+"enter",P,n,f),R.target=I,R.relatedTarget=N,O=R),N=O,w&&P)t:{for(R=w,T=P,y=0,I=R;I;I=ki(I))y++;for(I=0,O=T;O;O=ki(O))I++;for(;0<y-I;)R=ki(R),y--;for(;0<I-y;)T=ki(T),I--;for(;y--;){if(R===T||T!==null&&R===T.alternate)break t;R=ki(R),T=ki(T)}R=null}else R=null;w!==null&&zg(p,g,w,R,!1),P!==null&&N!==null&&zg(p,N,P,R,!0)}}e:{if(g=c?Di(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var L=VS;else if(Og(g))if(l0)L=jS;else{L=FS;var U=MS}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=US);if(L&&(L=L(t,c))){a0(p,L,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&$h(g,"number",g.value)}switch(U=c?Di(c):window,t){case"focusin":(Og(U)||U.contentEditable==="true")&&(Ni=U,tf=c,mo=null);break;case"focusout":mo=tf=Ni=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Fg(p,n,f);break;case"selectionchange":if($S)break;case"keydown":case"keyup":Fg(p,n,f)}var E;if(Od)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else xi?s0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(i0&&n.locale!=="ko"&&(xi||v!=="onCompositionStart"?v==="onCompositionEnd"&&xi&&(E=r0()):(or=f,bd="value"in or?or.value:or.textContent,xi=!0)),U=eu(c,v),0<U.length&&(v=new Rg(v,t,null,n,f),p.push({event:v,listeners:U}),E?v.data=E:(E=o0(n),E!==null&&(v.data=E)))),(E=xS?NS(t,n):OS(t,n))&&(c=eu(c,"onBeforeInput"),0<c.length&&(f=new Rg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}y0(p,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Vo(t,s,i)),s=Ro(t,e),s!=null&&r.push(Vo(t,s,i))),t=t.return}return r}function ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ro(n,s),u!=null&&o.unshift(Vo(n,u,l))):i||(u=Ro(n,s),u!=null&&o.push(Vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function Bg(t){return(typeof t=="string"?t:""+t).replace(KS,`
`).replace(GS,"")}function rl(t,e,n){if(e=Bg(e),Bg(t)!==e&&n)throw Error(F(425))}function tu(){}var rf=null,sf=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,YS=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(XS)}:af;function XS(t){setTimeout(function(){throw t})}function uh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),sn="__reactFiber$"+ws,Mo="__reactProps$"+ws,Dn="__reactContainer$"+ws,lf="__reactEvents$"+ws,JS="__reactListeners$"+ws,ZS="__reactHandles$"+ws;function Wr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wg(t);t!==null;){if(n=t[sn])return n;t=Wg(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[sn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Hu(t){return t[Mo]||null}var uf=[],Li=-1;function Nr(t){return{current:t}}function ye(t){0>Li||(t.current=uf[Li],uf[Li]=null,Li--)}function de(t,e){Li++,uf[Li]=t.current,t.current=e}var Sr={},at=Nr(Sr),yt=Nr(!1),Zr=Sr;function rs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function nu(){ye(yt),ye(at)}function Hg(t,e,n){if(at.current!==Sr)throw Error(F(168));de(at,e),de(yt,n)}function w0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,MI(t)||"Unknown",i));return Se({},n,r)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Zr=at.current,de(at,t),de(yt,yt.current),!0}function qg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=w0(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,ye(yt),ye(at),de(at,t)):ye(yt),de(yt,n)}var Sn=null,qu=!1,ch=!1;function E0(t){Sn===null?Sn=[t]:Sn.push(t)}function ek(t){qu=!0,E0(t)}function Or(){if(!ch&&Sn!==null){ch=!0;var t=0,e=ue;try{var n=Sn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,qu=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),q_(Ad,Or),i}finally{ue=e,ch=!1}}return null}var Vi=[],Mi=0,iu=null,su=0,Dt=[],Lt=0,ei=null,kn=1,An="";function zr(t,e){Vi[Mi++]=su,Vi[Mi++]=iu,iu=t,su=e}function T0(t,e,n){Dt[Lt++]=kn,Dt[Lt++]=An,Dt[Lt++]=ei,ei=t;var r=kn;t=An;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Yt(e)+i|n<<i|r,An=s+t}else kn=1<<s|n<<i|r,An=t}function Ld(t){t.return!==null&&(zr(t,1),T0(t,1,0))}function Vd(t){for(;t===iu;)iu=Vi[--Mi],Vi[Mi]=null,su=Vi[--Mi],Vi[Mi]=null;for(;t===ei;)ei=Dt[--Lt],Dt[Lt]=null,An=Dt[--Lt],Dt[Lt]=null,kn=Dt[--Lt],Dt[Lt]=null}var kt=null,St=null,we=!1,Kt=null;function I0(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,St=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:kn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,St=null,!0):!1;default:return!1}}function cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hf(t){if(we){var e=St;if(e){var n=e;if(!Kg(t,e)){if(cf(t))throw Error(F(418));e=dr(n.nextSibling);var r=kt;e&&Kg(t,e)?I0(r,n):(t.flags=t.flags&-4097|2,we=!1,kt=t)}}else{if(cf(t))throw Error(F(418));t.flags=t.flags&-4097|2,we=!1,kt=t}}}function Gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function il(t){if(t!==kt)return!1;if(!we)return Gg(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=St)){if(cf(t))throw S0(),Error(F(418));for(;e;)I0(t,e),e=dr(e.nextSibling)}if(Gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=kt?dr(t.stateNode.nextSibling):null;return!0}function S0(){for(var t=St;t;)t=dr(t.nextSibling)}function is(){St=kt=null,we=!1}function Md(t){Kt===null?Kt=[t]:Kt.push(t)}var tk=$n.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qg(t){var e=t._init;return e(t._payload)}function k0(t){function e(T,y){if(t){var I=T.deletions;I===null?(T.deletions=[y],T.flags|=16):I.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=vr(T,y),T.index=0,T.sibling=null,T}function s(T,y,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<y?(T.flags|=2,y):I):(T.flags|=2,y)):(T.flags|=1048576,y)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,y,I,O){return y===null||y.tag!==6?(y=vh(I,T.mode,O),y.return=T,y):(y=i(y,I),y.return=T,y)}function u(T,y,I,O){var L=I.type;return L===bi?f(T,y,I.props.children,O,I.key):y!==null&&(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Jn&&Qg(L)===y.type)?(O=i(y,I.props),O.ref=Qs(T,y,I),O.return=T,O):(O=Vl(I.type,I.key,I.props,null,T.mode,O),O.ref=Qs(T,y,I),O.return=T,O)}function c(T,y,I,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=yh(I,T.mode,O),y.return=T,y):(y=i(y,I.children||[]),y.return=T,y)}function f(T,y,I,O,L){return y===null||y.tag!==7?(y=Xr(I,T.mode,O,L),y.return=T,y):(y=i(y,I),y.return=T,y)}function p(T,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=vh(""+y,T.mode,I),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ga:return I=Vl(y.type,y.key,y.props,null,T.mode,I),I.ref=Qs(T,null,y),I.return=T,I;case Ri:return y=yh(y,T.mode,I),y.return=T,y;case Jn:var O=y._init;return p(T,O(y._payload),I)}if(to(y)||Ws(y))return y=Xr(y,T.mode,I,null),y.return=T,y;sl(T,y)}return null}function g(T,y,I,O){var L=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(T,y,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ga:return I.key===L?u(T,y,I,O):null;case Ri:return I.key===L?c(T,y,I,O):null;case Jn:return L=I._init,g(T,y,L(I._payload),O)}if(to(I)||Ws(I))return L!==null?null:f(T,y,I,O,null);sl(T,I)}return null}function w(T,y,I,O,L){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(I)||null,l(y,T,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ga:return T=T.get(O.key===null?I:O.key)||null,u(y,T,O,L);case Ri:return T=T.get(O.key===null?I:O.key)||null,c(y,T,O,L);case Jn:var U=O._init;return w(T,y,I,U(O._payload),L)}if(to(O)||Ws(O))return T=T.get(I)||null,f(y,T,O,L,null);sl(y,O)}return null}function P(T,y,I,O){for(var L=null,U=null,E=y,v=y=0,_=null;E!==null&&v<I.length;v++){E.index>v?(_=E,E=null):_=E.sibling;var S=g(T,E,I[v],O);if(S===null){E===null&&(E=_);break}t&&E&&S.alternate===null&&e(T,E),y=s(S,y,v),U===null?L=S:U.sibling=S,U=S,E=_}if(v===I.length)return n(T,E),we&&zr(T,v),L;if(E===null){for(;v<I.length;v++)E=p(T,I[v],O),E!==null&&(y=s(E,y,v),U===null?L=E:U.sibling=E,U=E);return we&&zr(T,v),L}for(E=r(T,E);v<I.length;v++)_=w(E,T,v,I[v],O),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?v:_.key),y=s(_,y,v),U===null?L=_:U.sibling=_,U=_);return t&&E.forEach(function(A){return e(T,A)}),we&&zr(T,v),L}function R(T,y,I,O){var L=Ws(I);if(typeof L!="function")throw Error(F(150));if(I=L.call(I),I==null)throw Error(F(151));for(var U=L=null,E=y,v=y=0,_=null,S=I.next();E!==null&&!S.done;v++,S=I.next()){E.index>v?(_=E,E=null):_=E.sibling;var A=g(T,E,S.value,O);if(A===null){E===null&&(E=_);break}t&&E&&A.alternate===null&&e(T,E),y=s(A,y,v),U===null?L=A:U.sibling=A,U=A,E=_}if(S.done)return n(T,E),we&&zr(T,v),L;if(E===null){for(;!S.done;v++,S=I.next())S=p(T,S.value,O),S!==null&&(y=s(S,y,v),U===null?L=S:U.sibling=S,U=S);return we&&zr(T,v),L}for(E=r(T,E);!S.done;v++,S=I.next())S=w(E,T,v,S.value,O),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),y=s(S,y,v),U===null?L=S:U.sibling=S,U=S);return t&&E.forEach(function(x){return e(T,x)}),we&&zr(T,v),L}function N(T,y,I,O){if(typeof I=="object"&&I!==null&&I.type===bi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ga:e:{for(var L=I.key,U=y;U!==null;){if(U.key===L){if(L=I.type,L===bi){if(U.tag===7){n(T,U.sibling),y=i(U,I.props.children),y.return=T,T=y;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Jn&&Qg(L)===U.type){n(T,U.sibling),y=i(U,I.props),y.ref=Qs(T,U,I),y.return=T,T=y;break e}n(T,U);break}else e(T,U);U=U.sibling}I.type===bi?(y=Xr(I.props.children,T.mode,O,I.key),y.return=T,T=y):(O=Vl(I.type,I.key,I.props,null,T.mode,O),O.ref=Qs(T,y,I),O.return=T,T=O)}return o(T);case Ri:e:{for(U=I.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(T,y.sibling),y=i(y,I.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=yh(I,T.mode,O),y.return=T,T=y}return o(T);case Jn:return U=I._init,N(T,y,U(I._payload),O)}if(to(I))return P(T,y,I,O);if(Ws(I))return R(T,y,I,O);sl(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,I),y.return=T,T=y):(n(T,y),y=vh(I,T.mode,O),y.return=T,T=y),o(T)):n(T,y)}return N}var ss=k0(!0),A0=k0(!1),ou=Nr(null),au=null,Fi=null,Fd=null;function Ud(){Fd=Fi=au=null}function jd(t){var e=ou.current;ye(ou),t._currentValue=e}function ff(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qi(t,e){au=t,Fd=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Fd!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(au===null)throw Error(F(308));Fi=t,au.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Hr=null;function zd(t){Hr===null?Hr=[t]:Hr.push(t)}function P0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}function Yg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,R=l;switch(g=e,w=n,R.tag){case 1:if(P=R.payload,typeof P=="function"){p=P.call(w,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=R.payload,g=typeof P=="function"?P.call(w,p,g):P,g==null)break e;p=Se({},p,g);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=w,u=p):f=f.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=p}}function Xg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var fa={},un=Nr(fa),Fo=Nr(fa),Uo=Nr(fa);function qr(t){if(t===fa)throw Error(F(174));return t}function $d(t,e){switch(de(Uo,e),de(Fo,t),de(un,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hh(e,t)}ye(un),de(un,e)}function os(){ye(un),ye(Fo),ye(Uo)}function R0(t){qr(Uo.current);var e=qr(un.current),n=Hh(e,t.type);e!==n&&(de(Fo,t),de(un,n))}function Wd(t){Fo.current===t&&(ye(un),ye(Fo))}var Te=Nr(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hh=[];function Hd(){for(var t=0;t<hh.length;t++)hh[t]._workInProgressVersionPrimary=null;hh.length=0}var xl=$n.ReactCurrentDispatcher,fh=$n.ReactCurrentBatchConfig,ti=0,Ie=null,Ve=null,Be=null,cu=!1,go=!1,jo=0,nk=0;function tt(){throw Error(F(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Kd(t,e,n,r,i,s){if(ti=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?ok:ak,t=n(r,i),go){s=0;do{if(go=!1,jo=0,25<=s)throw Error(F(301));s+=1,Be=Ve=null,e.updateQueue=null,xl.current=lk,t=n(r,i)}while(go)}if(xl.current=hu,e=Ve!==null&&Ve.next!==null,ti=0,Be=Ve=Ie=null,cu=!1,e)throw Error(F(300));return t}function Gd(){var t=jo!==0;return jo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ie.memoizedState=Be=t:Be=Be.next=t,Be}function zt(){if(Ve===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Be===null?Ie.memoizedState:Be.next;if(e!==null)Be=e,Ve=t;else{if(t===null)throw Error(F(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Be===null?Ie.memoizedState=Be=t:Be=Be.next=t}return Be}function zo(t,e){return typeof e=="function"?e(t):e}function dh(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ti&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=f,ni|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ph(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function b0(){}function x0(t,e){var n=Ie,r=zt(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Qd(D0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Bo(9,O0.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(F(349));ti&30||N0(n,e,i)}return i}function N0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,r){e.value=n,e.getSnapshot=r,L0(e)&&V0(t)}function D0(t,e,n){return n(function(){L0(e)&&V0(t)})}function L0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function V0(t){var e=Ln(t,1);e!==null&&Xt(e,t,1,-1)}function Jg(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=sk.bind(null,Ie,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function M0(){return zt().memoizedState}function Nl(t,e,n,r){var i=nn();Ie.flags|=t,i.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function Ku(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&qd(r,o.deps)){i.memoizedState=Bo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Bo(1|e,n,s,r)}function Zg(t,e){return Nl(8390656,8,t,e)}function Qd(t,e){return Ku(2048,8,t,e)}function F0(t,e){return Ku(4,2,t,e)}function U0(t,e){return Ku(4,4,t,e)}function j0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z0(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,j0.bind(null,e,t),n)}function Yd(){}function B0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function W0(t,e,n){return ti&21?(Jt(n,e)||(n=Q_(),Ie.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function rk(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=fh.transition;fh.transition={};try{t(!1),e()}finally{ue=n,fh.transition=r}}function H0(){return zt().memoizedState}function ik(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},q0(t))K0(e,n);else if(n=P0(t,e,n,r),n!==null){var i=dt();Xt(n,t,r,i),G0(n,e,r)}}function sk(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(q0(t))K0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(i.next=i,zd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=P0(t,e,i,r),n!==null&&(i=dt(),Xt(n,t,r,i),G0(n,e,r))}}function q0(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function K0(t,e){go=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}var hu={readContext:jt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},ok={readContext:jt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Zg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,j0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ik.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Jg,useDebugValue:Yd,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Jg(!1),e=t[0];return t=rk.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=nn();if(we){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),$e===null)throw Error(F(349));ti&30||N0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zg(D0.bind(null,r,s,t),[t]),r.flags|=2048,Bo(9,O0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=$e.identifierPrefix;if(we){var n=An,r=kn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ak={readContext:jt,useCallback:B0,useContext:jt,useEffect:Qd,useImperativeHandle:z0,useInsertionEffect:F0,useLayoutEffect:U0,useMemo:$0,useReducer:dh,useRef:M0,useState:function(){return dh(zo)},useDebugValue:Yd,useDeferredValue:function(t){var e=zt();return W0(e,Ve.memoizedState,t)},useTransition:function(){var t=dh(zo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:b0,useSyncExternalStore:x0,useId:H0,unstable_isNewReconciler:!1},lk={readContext:jt,useCallback:B0,useContext:jt,useEffect:Qd,useImperativeHandle:z0,useInsertionEffect:F0,useLayoutEffect:U0,useMemo:$0,useReducer:ph,useRef:M0,useState:function(){return ph(zo)},useDebugValue:Yd,useDeferredValue:function(t){var e=zt();return Ve===null?e.memoizedState=t:W0(e,Ve.memoizedState,t)},useTransition:function(){var t=ph(zo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:b0,useSyncExternalStore:x0,useId:H0,unstable_isNewReconciler:!1};function Ht(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function df(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=gr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Xt(e,t,i,r),bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=gr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Xt(e,t,i,r),bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=gr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(Xt(e,t,r,n),bl(e,t,r))}};function ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function Q0(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=_t(e)?Zr:at.current,r=e.contextTypes,s=(r=r!=null)?rs(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function pf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=_t(e)?Zr:at.current,i.context=rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(df(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gu.enqueueReplaceState(i,i.state,null),lu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,e){try{var n="",r=e;do n+=VI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function mh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uk=typeof WeakMap=="function"?WeakMap:Map;function Y0(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,kf=r),mf(t,e)},n}function X0(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mf(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ik.bind(null,t,e,n),e.then(t,t))}function rv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function iv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var ck=$n.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?A0(e,null,n,r):ss(e,t.child,n,r)}function sv(t,e,n,r,i){n=n.render;var s=e.ref;return Qi(e,i),r=Kd(t,e,n,r,s,i),n=Gd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(we&&n&&Ld(e),e.flags|=1,ht(t,e,r,i),e.child)}function ov(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ip(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,J0(t,e,s,r,i)):(t=Vl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function J0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Do(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return gf(t,e,n,r,i)}function Z0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ji,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(ji,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(ji,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(ji,Tt),Tt|=r;return ht(t,e,i,n),e.child}function ew(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gf(t,e,n,r,i){var s=_t(n)?Zr:at.current;return s=rs(e,s),Qi(e,i),n=Kd(t,e,n,r,s,i),r=Gd(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(we&&r&&Ld(e),e.flags|=1,ht(t,e,n,i),e.child)}function av(t,e,n,r,i){if(_t(n)){var s=!0;ru(e)}else s=!1;if(Qi(e,i),e.stateNode===null)Ol(t,e),Q0(e,n,r),pf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jt(c):(c=_t(n)?Zr:at.current,c=rs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&tv(e,o,r,c),Zn=!1;var g=e.memoizedState;o.state=g,lu(e,r,o,i),u=e.memoizedState,l!==r||g!==u||yt.current||Zn?(typeof f=="function"&&(df(e,n,f,r),u=e.memoizedState),(l=Zn||ev(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,C0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ht(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=_t(n)?Zr:at.current,u=rs(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&tv(e,o,r,u),Zn=!1,g=e.memoizedState,o.state=g,lu(e,r,o,i);var P=e.memoizedState;l!==p||g!==P||yt.current||Zn?(typeof w=="function"&&(df(e,n,w,r),P=e.memoizedState),(c=Zn||ev(e,n,c,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return vf(t,e,n,r,s,i)}function vf(t,e,n,r,i,s){ew(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qg(e,n,!1),Vn(t,e,s);r=e.stateNode,ck.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ss(e,t.child,null,s),e.child=ss(e,null,l,s)):ht(t,e,l,s),e.memoizedState=r.state,i&&qg(e,n,!0),e.child}function tw(t){var e=t.stateNode;e.pendingContext?Hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hg(t,e.context,!1),$d(t,e.containerInfo)}function lv(t,e,n,r,i){return is(),Md(i),e.flags|=256,ht(t,e,n,r),e.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function _f(t){return{baseLanes:t,cachePool:null,transitions:null}}function nw(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Te,i&1),t===null)return hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xu(o,r,0,null),t=Xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_f(n),e.memoizedState=yf,t):Xd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hk(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vr(l,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_f(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yf,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xd(t,e){return e=Xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&Md(r),ss(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=mh(Error(F(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xu({mode:"visible",children:r.children},i,0,null),s=Xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ss(e,t.child,null,o),e.child.memoizedState=_f(o),e.memoizedState=yf,s);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=mh(s,r,void 0),ol(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),Xt(r,t,i,-1))}return rp(),r=mh(Error(F(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=dr(i.nextSibling),kt=e,we=!0,Kt=null,t!==null&&(Dt[Lt++]=kn,Dt[Lt++]=An,Dt[Lt++]=ei,kn=t.id,An=t.overflow,ei=e),e=Xd(e,r.children),e.flags|=4096,e)}function uv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ff(t.return,e,n)}function gh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uv(t,n,e);else if(t.tag===19)uv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),gh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}gh(e,!0,n,null,s);break;case"together":gh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fk(t,e,n){switch(e.tag){case 3:tw(e),is();break;case 5:R0(e);break;case 1:_t(e.type)&&ru(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?nw(t,e,n):(de(Te,Te.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);de(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,Z0(t,e,n)}return Vn(t,e,n)}var iw,wf,sw,ow;iw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};sw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qr(un.current);var s=null;switch(n){case"input":i=zh(t,i),r=zh(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=Wh(t,i),r=Wh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tu)}qh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Po.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Po.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ow=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ys(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dk(t,e,n){var r=e.pendingProps;switch(Vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return _t(e.type)&&nu(),nt(e),null;case 3:return r=e.stateNode,os(),ye(yt),ye(at),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Cf(Kt),Kt=null))),wf(t,e),nt(e),null;case 5:Wd(e);var i=qr(Uo.current);if(n=e.type,t!==null&&e.stateNode!=null)sw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return nt(e),null}if(t=qr(un.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ro.length;i++)ge(ro[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":yg(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":wg(r,s),ge("invalid",r)}qh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",""+l]):Po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Qa(r),_g(r,s,!0);break;case"textarea":Qa(r),Eg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[Mo]=r,iw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<ro.length;i++)ge(ro[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":yg(t,r),i=zh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ge("invalid",t);break;case"textarea":wg(t,r),i=Wh(t,r),ge("invalid",t);break;default:i=r}qh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?M_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&L_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Co(t,u):typeof u=="number"&&Co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Ed(t,s,u,o))}switch(n){case"input":Qa(t),_g(t,r,!1);break;case"textarea":Qa(t),Eg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)ow(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=qr(Uo.current),qr(un.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return nt(e),null;case 13:if(ye(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&St!==null&&e.mode&1&&!(e.flags&128))S0(),is(),e.flags|=98560,s=!1;else if(s=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[sn]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Kt!==null&&(Cf(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Fe===0&&(Fe=3):rp())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return os(),wf(t,e),t===null&&Lo(e.stateNode.containerInfo),nt(e),null;case 10:return jd(e.type._context),nt(e),null;case 17:return _t(e.type)&&nu(),nt(e),null;case 19:if(ye(Te),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ys(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,Ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ls&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return nt(e),null}else 2*xe()-s.renderingStartTime>ls&&n!==1073741824&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Te.current,de(Te,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return np(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function pk(t,e){switch(Vd(e),e.tag){case 1:return _t(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),ye(yt),ye(at),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(ye(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Te),null;case 4:return os(),null;case 10:return jd(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var al=!1,st=!1,mk=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Ef(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var cv=!1;function gk(t,e){if(rf=Jl,t=h0(),Dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sf={focusedElem:t,selectionRange:n},Jl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var R=P.memoizedProps,N=P.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?R:Ht(e.type,R),N);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Pe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=cv,cv=!1,P}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ef(e,n,s)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function aw(t){var e=t.alternate;e!==null&&(t.alternate=null,aw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[Mo],delete e[lf],delete e[JS],delete e[ZS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lw(t){return t.tag===5||t.tag===3||t.tag===4}function hv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function If(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(r!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}function Sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sf(t,e,n),t=t.sibling;t!==null;)Sf(t,e,n),t=t.sibling}var He=null,qt=!1;function Qn(t,e,n){for(n=n.child;n!==null;)uw(t,e,n),n=n.sibling}function uw(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(zu,n)}catch{}switch(n.tag){case 5:st||Ui(n,e);case 6:var r=He,i=qt;He=null,Qn(t,e,n),He=r,qt=i,He!==null&&(qt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(qt?(t=He,n=n.stateNode,t.nodeType===8?uh(t.parentNode,n):t.nodeType===1&&uh(t,n),No(t)):uh(He,n.stateNode));break;case 4:r=He,i=qt,He=n.stateNode.containerInfo,qt=!0,Qn(t,e,n),He=r,qt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ef(n,e,o),i=i.next}while(i!==r)}Qn(t,e,n);break;case 1:if(!st&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Qn(t,e,n),st=r):Qn(t,e,n);break;default:Qn(t,e,n)}}function fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mk),e.forEach(function(r){var i=kk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,qt=!1;break e;case 3:He=l.stateNode.containerInfo,qt=!0;break e;case 4:He=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(He===null)throw Error(F(160));uw(s,o,i),He=null,qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cw(e,t),e=e.sibling}function cw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),en(t),r&4){try{vo(3,t,t.return),Qu(3,t)}catch(R){Pe(t,t.return,R)}try{vo(5,t,t.return)}catch(R){Pe(t,t.return,R)}}break;case 1:$t(e,t),en(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if($t(e,t),en(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{Co(i,"")}catch(R){Pe(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&N_(i,s),Kh(l,o);var c=Kh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?M_(i,p):f==="dangerouslySetInnerHTML"?L_(i,p):f==="children"?Co(i,p):Ed(i,f,p,c)}switch(l){case"input":Bh(i,s);break;case"textarea":O_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Hi(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?Hi(i,!!s.multiple,s.defaultValue,!0):Hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mo]=s}catch(R){Pe(t,t.return,R)}}break;case 6:if($t(e,t),en(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Pe(t,t.return,R)}}break;case 3:if($t(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(R){Pe(t,t.return,R)}break;case 4:$t(e,t),en(t);break;case 13:$t(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ep=xe())),r&4&&fv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(c=st)||f,$t(e,t),st=c):$t(e,t),en(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(g=W,w=g.child,g.tag){case 0:case 11:case 14:case 15:vo(4,g,g.return);break;case 1:Ui(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(R){Pe(r,n,R)}}break;case 5:Ui(g,g.return);break;case 22:if(g.memoizedState!==null){pv(p);continue}}w!==null?(w.return=g,W=w):pv(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=V_("display",o))}catch(R){Pe(t,t.return,R)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(R){Pe(t,t.return,R)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$t(e,t),en(t),r&4&&fv(t);break;case 21:break;default:$t(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Co(i,""),r.flags&=-33);var s=hv(t);Sf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hv(t);If(t,l,o);break;default:throw Error(F(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vk(t,e,n){W=t,hw(t)}function hw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||al;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=al;var c=st;if(al=o,(st=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?mv(i):u!==null?(u.return=o,W=u):mv(i);for(;s!==null;)W=s,hw(s),s=s.sibling;W=i,al=l,st=c}dv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):dv(t)}}function dv(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&No(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}st||e.flags&512&&Tf(e)}catch(g){Pe(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function pv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function mv(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Tf(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Tf(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var yk=Math.ceil,fu=$n.ReactCurrentDispatcher,Jd=$n.ReactCurrentOwner,Ft=$n.ReactCurrentBatchConfig,oe=0,$e=null,De=null,Ge=0,Tt=0,ji=Nr(0),Fe=0,$o=null,ni=0,Yu=0,Zd=0,yo=null,gt=null,ep=0,ls=1/0,In=null,du=!1,kf=null,mr=null,ll=!1,ar=null,pu=0,_o=0,Af=null,Dl=-1,Ll=0;function dt(){return oe&6?xe():Dl!==-1?Dl:Dl=xe()}function gr(t){return t.mode&1?oe&2&&Ge!==0?Ge&-Ge:tk.transition!==null?(Ll===0&&(Ll=Q_()),Ll):(t=ue,t!==0||(t=window.event,t=t===void 0?16:n0(t.type)),t):1}function Xt(t,e,n,r){if(50<_o)throw _o=0,Af=null,Error(F(185));ua(t,n,r),(!(oe&2)||t!==$e)&&(t===$e&&(!(oe&2)&&(Yu|=n),Fe===4&&tr(t,Ge)),wt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ls=xe()+500,qu&&Or()))}function wt(t,e){var n=t.callbackNode;tS(t,e);var r=Xl(t,t===$e?Ge:0);if(r===0)n!==null&&Sg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sg(n),e===1)t.tag===0?ek(gv.bind(null,t)):E0(gv.bind(null,t)),YS(function(){!(oe&6)&&Or()}),n=null;else{switch(Y_(r)){case 1:n=Ad;break;case 4:n=K_;break;case 16:n=Yl;break;case 536870912:n=G_;break;default:n=Yl}n=_w(n,fw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fw(t,e){if(Dl=-1,Ll=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Xl(t,t===$e?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mu(t,r);else{e=r;var i=oe;oe|=2;var s=pw();($e!==t||Ge!==e)&&(In=null,ls=xe()+500,Yr(t,e));do try{Ek();break}catch(l){dw(t,l)}while(!0);Ud(),fu.current=s,oe=i,De!==null?e=0:($e=null,Ge=0,e=Fe)}if(e!==0){if(e===2&&(i=Jh(t),i!==0&&(r=i,e=Pf(t,i))),e===1)throw n=$o,Yr(t,0),tr(t,r),wt(t,xe()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!_k(i)&&(e=mu(t,r),e===2&&(s=Jh(t),s!==0&&(r=s,e=Pf(t,s))),e===1))throw n=$o,Yr(t,0),tr(t,r),wt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Br(t,gt,In);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=ep+500-xe(),10<e)){if(Xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=af(Br.bind(null,t,gt,In),e);break}Br(t,gt,In);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yk(r/1960))-r,10<r){t.timeoutHandle=af(Br.bind(null,t,gt,In),r);break}Br(t,gt,In);break;case 5:Br(t,gt,In);break;default:throw Error(F(329))}}}return wt(t,xe()),t.callbackNode===n?fw.bind(null,t):null}function Pf(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=mu(t,e),t!==2&&(e=gt,gt=n,e!==null&&Cf(e)),t}function Cf(t){gt===null?gt=t:gt.push.apply(gt,t)}function _k(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Zd,e&=~Yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function gv(t){if(oe&6)throw Error(F(327));Yi();var e=Xl(t,0);if(!(e&1))return wt(t,xe()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var r=Jh(t);r!==0&&(e=r,n=Pf(t,r))}if(n===1)throw n=$o,Yr(t,0),tr(t,e),wt(t,xe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,gt,In),wt(t,xe()),null}function tp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ls=xe()+500,qu&&Or())}}function ri(t){ar!==null&&ar.tag===0&&!(oe&6)&&Yi();var e=oe;oe|=1;var n=Ft.transition,r=ue;try{if(Ft.transition=null,ue=1,t)return t()}finally{ue=r,Ft.transition=n,oe=e,!(oe&6)&&Or()}}function np(){Tt=ji.current,ye(ji)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QS(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:os(),ye(yt),ye(at),Hd();break;case 5:Wd(r);break;case 4:os();break;case 13:ye(Te);break;case 19:ye(Te);break;case 10:jd(r.type._context);break;case 22:case 23:np()}n=n.return}if($e=t,De=t=vr(t.current,null),Ge=Tt=e,Fe=0,$o=null,Zd=Yu=ni=0,gt=yo=null,Hr!==null){for(e=0;e<Hr.length;e++)if(n=Hr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hr=null}return t}function dw(t,e){do{var n=De;try{if(Ud(),xl.current=hu,cu){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cu=!1}if(ti=0,Be=Ve=Ie=null,go=!1,jo=0,Jd.current=null,n===null||n.return===null){Fe=1,$o=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=rv(o);if(w!==null){w.flags&=-257,iv(w,o,l,s,e),w.mode&1&&nv(s,c,e),e=w,u=c;var P=e.updateQueue;if(P===null){var R=new Set;R.add(u),e.updateQueue=R}else P.add(u);break e}else{if(!(e&1)){nv(s,c,e),rp();break e}u=Error(F(426))}}else if(we&&l.mode&1){var N=rv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),iv(N,o,l,s,e),Md(as(u,l));break e}}s=u=as(u,l),Fe!==4&&(Fe=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Y0(s,u,e);Yg(s,T);break e;case 1:l=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(mr===null||!mr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=X0(s,l,e);Yg(s,O);break e}}s=s.return}while(s!==null)}gw(n)}catch(L){e=L,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function pw(){var t=fu.current;return fu.current=hu,t===null?hu:t}function rp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||!(ni&268435455)&&!(Yu&268435455)||tr($e,Ge)}function mu(t,e){var n=oe;oe|=2;var r=pw();($e!==t||Ge!==e)&&(In=null,Yr(t,e));do try{wk();break}catch(i){dw(t,i)}while(!0);if(Ud(),oe=n,fu.current=r,De!==null)throw Error(F(261));return $e=null,Ge=0,Fe}function wk(){for(;De!==null;)mw(De)}function Ek(){for(;De!==null&&!qI();)mw(De)}function mw(t){var e=yw(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?gw(t):De=e,Jd.current=null}function gw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pk(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=dk(n,e,Tt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Br(t,e,n){var r=ue,i=Ft.transition;try{Ft.transition=null,ue=1,Tk(t,e,n,r)}finally{Ft.transition=i,ue=r}return null}function Tk(t,e,n,r){do Yi();while(ar!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nS(t,s),t===$e&&(De=$e=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,_w(Yl,function(){return Yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=ue;ue=1;var l=oe;oe|=4,Jd.current=null,gk(t,n),cw(n,t),BS(sf),Jl=!!rf,sf=rf=null,t.current=n,vk(n),KI(),oe=l,ue=o,Ft.transition=s}else t.current=n;if(ll&&(ll=!1,ar=t,pu=i),s=t.pendingLanes,s===0&&(mr=null),YI(n.stateNode),wt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(du)throw du=!1,t=kf,kf=null,t;return pu&1&&t.tag!==0&&Yi(),s=t.pendingLanes,s&1?t===Af?_o++:(_o=0,Af=t):_o=0,Or(),null}function Yi(){if(ar!==null){var t=Y_(pu),e=Ft.transition,n=ue;try{if(Ft.transition=null,ue=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,pu=0,oe&6)throw Error(F(331));var i=oe;for(oe|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:vo(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var g=f.sibling,w=f.return;if(aw(f),f===c){W=null;break}if(g!==null){g.return=w,W=g;break}W=w}}}var P=s.alternate;if(P!==null){var R=P.child;if(R!==null){P.child=null;do{var N=R.sibling;R.sibling=null,R=N}while(R!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qu(9,l)}}catch(L){Pe(l,l.return,L)}if(l===o){W=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,W=O;break e}W=l.return}}if(oe=i,Or(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(zu,t)}catch{}r=!0}return r}finally{ue=n,Ft.transition=e}}return!1}function vv(t,e,n){e=as(n,e),e=Y0(t,e,1),t=pr(t,e,1),e=dt(),t!==null&&(ua(t,1,e),wt(t,e))}function Pe(t,e,n){if(t.tag===3)vv(t,t,n);else for(;e!==null;){if(e.tag===3){vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=as(n,t),t=X0(e,t,1),e=pr(e,t,1),t=dt(),e!==null&&(ua(e,1,t),wt(e,t));break}}e=e.return}}function Ik(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ge&n)===n&&(Fe===4||Fe===3&&(Ge&130023424)===Ge&&500>xe()-ep?Yr(t,0):Zd|=n),wt(t,e)}function vw(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=dt();t=Ln(t,e),t!==null&&(ua(t,e,n),wt(t,n))}function Sk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vw(t,n)}function kk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),vw(t,n)}var yw;yw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,fk(t,e,n);vt=!!(t.flags&131072)}else vt=!1,we&&e.flags&1048576&&T0(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ol(t,e),t=e.pendingProps;var i=rs(e,at.current);Qi(e,n),i=Kd(null,e,r,t,i,n);var s=Gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,ru(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bd(e),i.updater=Gu,e.stateNode=i,i._reactInternals=e,pf(e,r,t,n),e=vf(null,e,r,!0,s,n)):(e.tag=0,we&&s&&Ld(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Pk(r),t=Ht(r,t),i){case 0:e=gf(null,e,r,t,n);break e;case 1:e=av(null,e,r,t,n);break e;case 11:e=sv(null,e,r,t,n);break e;case 14:e=ov(null,e,r,Ht(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),av(t,e,r,i,n);case 3:e:{if(tw(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,C0(t,e),lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=as(Error(F(423)),e),e=lv(t,e,r,n,i);break e}else if(r!==i){i=as(Error(F(424)),e),e=lv(t,e,r,n,i);break e}else for(St=dr(e.stateNode.containerInfo.firstChild),kt=e,we=!0,Kt=null,n=A0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===i){e=Vn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return R0(e),t===null&&hf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,of(r,i)?o=null:s!==null&&of(r,s)&&(e.flags|=32),ew(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&hf(e),null;case 13:return nw(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ss(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),sv(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(ou,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!yt.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ff(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qi(e,n),i=jt(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),ov(t,e,r,i,n);case 15:return J0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Ol(t,e),e.tag=1,_t(r)?(t=!0,ru(e)):t=!1,Qi(e,n),Q0(e,r,i),pf(e,r,i,n),vf(null,e,r,!0,t,n);case 19:return rw(t,e,n);case 22:return Z0(t,e,n)}throw Error(F(156,e.tag))};function _w(t,e){return q_(t,e)}function Ak(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new Ak(t,e,n,r)}function ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pk(t){if(typeof t=="function")return ip(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Id)return 11;if(t===Sd)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ip(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bi:return Xr(n.children,i,s,e);case Td:o=8,i|=8;break;case Mh:return t=Mt(12,n,e,i|2),t.elementType=Mh,t.lanes=s,t;case Fh:return t=Mt(13,n,e,i),t.elementType=Fh,t.lanes=s,t;case Uh:return t=Mt(19,n,e,i),t.elementType=Uh,t.lanes=s,t;case R_:return Xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P_:o=10;break e;case C_:o=9;break e;case Id:o=11;break e;case Sd:o=14;break e;case Jn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xr(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Xu(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=R_,t.lanes=n,t.stateNode={isHidden:!1},t}function vh(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function yh(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ck(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sp(t,e,n,r,i,s,o,l,u){return t=new Ck(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function Rk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ww(t){if(!t)return Sr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(_t(n))return w0(t,n,e)}return e}function Ew(t,e,n,r,i,s,o,l,u){return t=sp(n,r,!0,t,i,s,o,l,u),t.context=ww(null),n=t.current,r=dt(),i=gr(n),s=bn(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,ua(t,i,r),wt(t,r),t}function Ju(t,e,n,r){var i=e.current,s=dt(),o=gr(i);return n=ww(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(Xt(t,i,o,s),bl(t,i,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function op(t,e){yv(t,e),(t=t.alternate)&&yv(t,e)}function bk(){return null}var Tw=typeof reportError=="function"?reportError:function(t){console.error(t)};function ap(t){this._internalRoot=t}Zu.prototype.render=ap.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ju(t,e,null,null)};Zu.prototype.unmount=ap.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Ju(null,t,null,null)}),e[Dn]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&t0(t)}};function lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _v(){}function xk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=gu(o);s.call(c)}}var o=Ew(e,r,t,0,null,!1,!1,"",_v);return t._reactRootContainer=o,t[Dn]=o.current,Lo(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=gu(u);l.call(c)}}var u=sp(t,0,!1,null,null,!1,!1,"",_v);return t._reactRootContainer=u,t[Dn]=u.current,Lo(t.nodeType===8?t.parentNode:t),ri(function(){Ju(e,u,n,r)}),u}function tc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=gu(o);l.call(u)}}Ju(e,o,t,i)}else o=xk(n,e,t,i,r);return gu(o)}X_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(Pd(e,n|1),wt(e,xe()),!(oe&6)&&(ls=xe()+500,Or()))}break;case 13:ri(function(){var r=Ln(t,1);if(r!==null){var i=dt();Xt(r,t,1,i)}}),op(t,1)}};Cd=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=dt();Xt(e,t,134217728,n)}op(t,134217728)}};J_=function(t){if(t.tag===13){var e=gr(t),n=Ln(t,e);if(n!==null){var r=dt();Xt(n,t,e,r)}op(t,e)}};Z_=function(){return ue};e0=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Qh=function(t,e,n){switch(e){case"input":if(Bh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hu(r);if(!i)throw Error(F(90));x_(r),Bh(r,i)}}}break;case"textarea":O_(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};j_=tp;z_=ri;var Nk={usingClientEntryPoint:!1,Events:[ha,Di,Hu,F_,U_,tp]},Xs={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ok={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W_(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||bk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{zu=ul.inject(Ok),ln=ul}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nk;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(e))throw Error(F(200));return Rk(t,e,null,n)};Ct.createRoot=function(t,e){if(!lp(t))throw Error(F(299));var n=!1,r="",i=Tw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sp(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,Lo(t.nodeType===8?t.parentNode:t),new ap(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=W_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ri(t)};Ct.hydrate=function(t,e,n){if(!ec(e))throw Error(F(200));return tc(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!lp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ew(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,Lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zu(e)};Ct.render=function(t,e,n){if(!ec(e))throw Error(F(200));return tc(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!ec(t))throw Error(F(40));return t._reactRootContainer?(ri(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Ct.unstable_batchedUpdates=tp;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ec(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return tc(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function Iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iw)}catch(t){console.error(t)}}Iw(),I_.exports=Ct;var Dk=I_.exports;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wo.apply(this,arguments)}var lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lr||(lr={}));const wv="popstate";function Lk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Rf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vu(i)}return Mk(e,n,null,t)}function Le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vk(){return Math.random().toString(36).substr(2,8)}function Ev(t,e){return{usr:t.state,key:t.key,idx:e}}function Rf(t,e,n,r){return n===void 0&&(n=null),Wo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Es(e):e,{state:n,key:e&&e.key||r||Vk()})}function vu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Mk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=lr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Wo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=lr.Pop;let N=f(),T=N==null?null:N-c;c=N,u&&u({action:l,location:R.location,delta:T})}function g(N,T){l=lr.Push;let y=Rf(R.location,N,T);c=f()+1;let I=Ev(y,c),O=R.createHref(y);try{o.pushState(I,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(O)}s&&u&&u({action:l,location:R.location,delta:1})}function w(N,T){l=lr.Replace;let y=Rf(R.location,N,T);c=f();let I=Ev(y,c),O=R.createHref(y);o.replaceState(I,"",O),s&&u&&u({action:l,location:R.location,delta:0})}function P(N){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof N=="string"?N:vu(N);return y=y.replace(/ $/,"%20"),Le(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let R={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(wv,p),u=N,()=>{i.removeEventListener(wv,p),u=null}},createHref(N){return e(i,N)},createURL:P,encodeLocation(N){let T=P(N);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:w,go(N){return o.go(N)}};return R}var Tv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tv||(Tv={}));function Fk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Es(e):e,i=up(r.pathname||"/",n);if(i==null)return null;let s=kw(t);Uk(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=Xk(i);o=Gk(s[l],u)}return o}function kw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Le(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=yr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),kw(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:qk(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Aw(s.path))i(s,o,u)}),e}function Aw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Aw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Uk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Kk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jk=/^:[\w-]+$/,zk=3,Bk=2,$k=1,Wk=10,Hk=-2,Iv=t=>t==="*";function qk(t,e){let n=t.split("/"),r=n.length;return n.some(Iv)&&(r+=Hk),e&&(r+=Bk),n.filter(i=>!Iv(i)).reduce((i,s)=>i+(jk.test(s)?zk:s===""?$k:Wk),r)}function Kk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Gk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=Qk({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c);if(!f)return null;Object.assign(r,f.params);let p=l.route;s.push({params:r,pathname:yr([i,f.pathname]),pathnameBase:tA(yr([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=yr([i,f.pathnameBase]))}return s}function Qk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Yk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let R=l[p]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const P=l[p];return w&&!P?c[g]=void 0:c[g]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Yk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Xk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Sw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function up(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Jk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Es(t):t;return{pathname:n?n.startsWith("/")?n:Zk(n,e):e,search:nA(r),hash:rA(i)}}function Zk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _h(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pw(t,e){let n=eA(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Cw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Es(t):(i=Wo({},t),Le(!i.pathname||!i.pathname.includes("?"),_h("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),_h("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),_h("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=Jk(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const yr=t=>t.join("/").replace(/\/\/+/g,"/"),tA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function iA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Rw=["post","put","patch","delete"];new Set(Rw);const sA=["get",...Rw];new Set(sA);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ho.apply(this,arguments)}const cp=z.createContext(null),oA=z.createContext(null),gi=z.createContext(null),nc=z.createContext(null),vi=z.createContext({outlet:null,matches:[],isDataRoute:!1}),bw=z.createContext(null);function aA(t,e){let{relative:n}=e===void 0?{}:e;da()||Le(!1);let{basename:r,navigator:i}=z.useContext(gi),{hash:s,pathname:o,search:l}=Nw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:yr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function da(){return z.useContext(nc)!=null}function rc(){return da()||Le(!1),z.useContext(nc).location}function xw(t){z.useContext(gi).static||z.useLayoutEffect(t)}function ic(){let{isDataRoute:t}=z.useContext(vi);return t?wA():lA()}function lA(){da()||Le(!1);let t=z.useContext(cp),{basename:e,future:n,navigator:r}=z.useContext(gi),{matches:i}=z.useContext(vi),{pathname:s}=rc(),o=JSON.stringify(Pw(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return xw(()=>{l.current=!0}),z.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Cw(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:yr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function Nw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(gi),{matches:i}=z.useContext(vi),{pathname:s}=rc(),o=JSON.stringify(Pw(i,r.v7_relativeSplatPath));return z.useMemo(()=>Cw(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function uA(t,e){return cA(t,e)}function cA(t,e,n,r){da()||Le(!1);let{navigator:i}=z.useContext(gi),{matches:s}=z.useContext(vi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=rc(),f;if(e){var p;let N=typeof e=="string"?Es(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||Le(!1),f=N}else f=c;let g=f.pathname||"/",w=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let P=Fk(t,{pathname:w}),R=mA(P&&P.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:yr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:yr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&R?z.createElement(nc.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:lr.Pop}},R):R}function hA(){let t=_A(),e=iA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const fA=z.createElement(hA,null);class dA extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(vi.Provider,{value:this.props.routeContext},z.createElement(bw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pA(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(cp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(vi.Provider,{value:e},r)}function mA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Le(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:g,errors:w}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let w,P=!1,R=null,N=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,R=p.route.errorElement||fA,u&&(c<0&&g===0?(P=!0,N=null):c===g&&(P=!0,N=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),y=()=>{let I;return w?I=R:P?I=N:p.route.Component?I=z.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=f,z.createElement(pA,{match:p,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?z.createElement(dA,{location:n.location,revalidation:n.revalidation,component:R,error:w,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var Ow=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ow||{}),yu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yu||{});function gA(t){let e=z.useContext(cp);return e||Le(!1),e}function vA(t){let e=z.useContext(oA);return e||Le(!1),e}function yA(t){let e=z.useContext(vi);return e||Le(!1),e}function Dw(t){let e=yA(),n=e.matches[e.matches.length-1];return n.route.id||Le(!1),n.route.id}function _A(){var t;let e=z.useContext(bw),n=vA(yu.UseRouteError),r=Dw(yu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function wA(){let{router:t}=gA(Ow.UseNavigateStable),e=Dw(yu.UseNavigateStable),n=z.useRef(!1);return xw(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ho({fromRouteId:e},s)))},[t,e])}function tn(t){Le(!1)}function EA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:s,static:o=!1,future:l}=t;da()&&Le(!1);let u=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:Ho({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Es(r));let{pathname:f="/",search:p="",hash:g="",state:w=null,key:P="default"}=r,R=z.useMemo(()=>{let N=up(f,u);return N==null?null:{location:{pathname:N,search:p,hash:g,state:w,key:P},navigationType:i}},[u,f,p,g,w,P,i]);return R==null?null:z.createElement(gi.Provider,{value:c},z.createElement(nc.Provider,{children:n,value:R}))}function TA(t){let{children:e,location:n}=t;return uA(bf(e),n)}new Promise(()=>{});function bf(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,bf(r.props.children,s));return}r.type!==tn&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xf(){return xf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xf.apply(this,arguments)}function IA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function SA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kA(t,e){return t.button===0&&(!e||e==="_self")&&!SA(t)}const AA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],PA="6";try{window.__reactRouterVersion=PA}catch{}const CA="startTransition",Sv=II[CA];function RA(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=Lk({window:i,v5Compat:!0}));let o=s.current,[l,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=z.useCallback(p=>{c&&Sv?Sv(()=>u(p)):u(p)},[u,c]);return z.useLayoutEffect(()=>o.listen(f),[o,f]),z.createElement(EA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const bA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,It=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,unstable_viewTransition:p}=e,g=IA(e,AA),{basename:w}=z.useContext(gi),P,R=!1;if(typeof c=="string"&&xA.test(c)&&(P=c,bA))try{let I=new URL(window.location.href),O=c.startsWith("//")?new URL(I.protocol+c):new URL(c),L=up(O.pathname,w);O.origin===I.origin&&L!=null?c=L+O.search+O.hash:R=!0}catch{}let N=aA(c,{relative:i}),T=NA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:p});function y(I){r&&r(I),I.defaultPrevented||T(I)}return z.createElement("a",xf({},g,{href:P||N,onClick:R||s?r:y,ref:n,target:u}))});var kv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kv||(kv={}));var Av;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Av||(Av={}));function NA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=ic(),c=rc(),f=Nw(t,{relative:o});return z.useCallback(p=>{if(kA(p,n)){p.preventDefault();let g=r!==void 0?r:vu(c)===vu(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}var Pv={};/**
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
 */const Lw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(g=64)),r.push(n[f],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new DA;const g=s<<2|l>>4;if(r.push(g),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LA=function(t){const e=Lw(t);return Vw.encodeByteArray(e,!0)},_u=function(t){return LA(t).replace(/\./g,"")},Mw=function(t){try{return Vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MA=()=>VA().__FIREBASE_DEFAULTS__,FA=()=>{if(typeof process>"u"||typeof Pv>"u")return;const t=Pv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mw(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return MA()||FA()||UA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fw=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jA=t=>{const e=Fw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uw=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},jw=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function BA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $A(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function WA(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KA(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GA(){return!WA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QA(){try{return typeof indexedDB=="object"}catch{return!1}}function YA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const XA="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XA,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,l,r)}}function JA(t,e){return t.replace(ZA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZA=/\{\$([^}]+)}/g;function eP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cv(s)&&Cv(o)){if(!wu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cv(t){return t!==null&&typeof t=="object"}/**
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
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function so(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tP(t,e){const n=new nP(t,e);return n.subscribe.bind(n)}class nP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wh),i.error===void 0&&(i.error=wh),i.complete===void 0&&(i.complete=wh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wh(){}/**
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}class ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $r="[DEFAULT]";/**
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
 */class iP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oP(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sP(t){return t===$r?void 0:t}function oP(t){return t.instantiationMode==="EAGER"}/**
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
 */class aP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const lP={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},uP=ie.INFO,cP={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},hP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hp{constructor(e){this.name=e,this._logLevel=uP,this._logHandler=hP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const fP=(t,e)=>e.some(n=>t instanceof n);let Rv,bv;function dP(){return Rv||(Rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pP(){return bv||(bv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zw=new WeakMap,Nf=new WeakMap,Bw=new WeakMap,Eh=new WeakMap,fp=new WeakMap;function mP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zw.set(n,t)}).catch(()=>{}),fp.set(e,t),e}function gP(t){if(Nf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nf.set(t,e)}let Of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vP(t){Of=t(Of)}function yP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Th(this),e,...n);return Bw.set(r,e.sort?e.sort():[e]),_r(r)}:pP().includes(t)?function(...e){return t.apply(Th(this),e),_r(zw.get(this))}:function(...e){return _r(t.apply(Th(this),e))}}function _P(t){return typeof t=="function"?yP(t):(t instanceof IDBTransaction&&gP(t),fP(t,dP())?new Proxy(t,Of):t)}function _r(t){if(t instanceof IDBRequest)return mP(t);if(Eh.has(t))return Eh.get(t);const e=_P(t);return e!==t&&(Eh.set(t,e),fp.set(e,t)),e}const Th=t=>fp.get(t);function wP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_r(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_r(o.result),u.oldVersion,u.newVersion,_r(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const EP=["get","getKey","getAll","getAllKeys","count"],TP=["put","add","delete","clear"],Ih=new Map;function xv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ih.get(e))return Ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Ih.set(e,s),s}vP(t=>({...t,get:(e,n,r)=>xv(e,n)||t.get(e,n,r),has:(e,n)=>!!xv(e,n)||t.has(e,n)}));/**
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
 */class IP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Df="@firebase/app",Nv="0.10.4";/**
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
 */const si=new hp("@firebase/app"),kP="@firebase/app-compat",AP="@firebase/analytics-compat",PP="@firebase/analytics",CP="@firebase/app-check-compat",RP="@firebase/app-check",bP="@firebase/auth",xP="@firebase/auth-compat",NP="@firebase/database",OP="@firebase/database-compat",DP="@firebase/functions",LP="@firebase/functions-compat",VP="@firebase/installations",MP="@firebase/installations-compat",FP="@firebase/messaging",UP="@firebase/messaging-compat",jP="@firebase/performance",zP="@firebase/performance-compat",BP="@firebase/remote-config",$P="@firebase/remote-config-compat",WP="@firebase/storage",HP="@firebase/storage-compat",qP="@firebase/firestore",KP="@firebase/vertexai-preview",GP="@firebase/firestore-compat",QP="firebase",YP="10.12.1";/**
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
 */const Lf="[DEFAULT]",XP={[Df]:"fire-core",[kP]:"fire-core-compat",[PP]:"fire-analytics",[AP]:"fire-analytics-compat",[RP]:"fire-app-check",[CP]:"fire-app-check-compat",[bP]:"fire-auth",[xP]:"fire-auth-compat",[NP]:"fire-rtdb",[OP]:"fire-rtdb-compat",[DP]:"fire-fn",[LP]:"fire-fn-compat",[VP]:"fire-iid",[MP]:"fire-iid-compat",[FP]:"fire-fcm",[UP]:"fire-fcm-compat",[jP]:"fire-perf",[zP]:"fire-perf-compat",[BP]:"fire-rc",[$P]:"fire-rc-compat",[WP]:"fire-gcs",[HP]:"fire-gcs-compat",[qP]:"fire-fst",[GP]:"fire-fst-compat",[KP]:"fire-vertex","fire-js":"fire-js",[QP]:"fire-js-all"};/**
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
 */const Eu=new Map,JP=new Map,Vf=new Map;function Ov(t,e){try{t.container.addComponent(e)}catch(n){si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(Vf.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of Eu.values())Ov(n,t);for(const n of JP.values())Ov(n,t);return!0}function dp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
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
 */const ZP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new pa("app","Firebase",ZP);/**
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
 */class eC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=YP;function $w(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=Uw()),!n)throw wr.create("no-options");const s=Eu.get(i);if(s){if(wu(n,s.options)&&wu(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new aP(i);for(const u of Vf.values())o.addComponent(u);const l=new eC(n,r,o);return Eu.set(i,l),l}function Ww(t=Lf){const e=Eu.get(t);if(!e&&t===Lf&&Uw())return $w();if(!e)throw wr.create("no-app",{appName:t});return e}function Er(t,e,n){var r;let i=(r=XP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(l.join(" "));return}us(new ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tC="firebase-heartbeat-database",nC=1,qo="firebase-heartbeat-store";let Sh=null;function Hw(){return Sh||(Sh=wP(tC,nC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Sh}async function rC(t){try{const n=(await Hw()).transaction(qo),r=await n.objectStore(qo).get(qw(t));return await n.done,r}catch(e){if(e instanceof Wn)si.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});si.warn(n.message)}}}async function Dv(t,e){try{const r=(await Hw()).transaction(qo,"readwrite");await r.objectStore(qo).put(e,qw(t)),await r.done}catch(n){if(n instanceof Wn)si.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});si.warn(r.message)}}}function qw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iC=1024,sC=30*24*60*60*1e3;class oC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=sC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lv(),{heartbeatsToSend:r,unsentEntries:i}=aC(this._heartbeatsCache.heartbeats),s=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lv(){return new Date().toISOString().substring(0,10)}function aC(t,e=iC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QA()?YA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vv(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uC(t){us(new ii("platform-logger",e=>new IP(e),"PRIVATE")),us(new ii("heartbeat",e=>new oC(e),"PRIVATE")),Er(Df,Nv,t),Er(Df,Nv,"esm2017"),Er("fire-js","")}uC("");var cC="firebase",hC="10.12.1";/**
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
 */Er(cC,hC,"app");function pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fC=Kw,Gw=new pa("auth","Firebase",Kw());/**
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
 */const Tu=new hp("@firebase/auth");function dC(t,...e){Tu.logLevel<=ie.WARN&&Tu.warn(`Auth (${Ts}): ${t}`,...e)}function Ml(t,...e){Tu.logLevel<=ie.ERROR&&Tu.error(`Auth (${Ts}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw mp(t,...e)}function cn(t,...e){return mp(t,...e)}function Qw(t,e,n){const r=Object.assign(Object.assign({},fC()),{[e]:n});return new pa("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return Qw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gw.create(t,...e)}function Q(t,e,...n){if(!t)throw mp(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function Mn(t,e){t||Pn(e)}/**
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
 */function Mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pC(){return Mv()==="http:"||Mv()==="https:"}function Mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pC()||HA()||"connection"in navigator)?navigator.onLine:!0}function gC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=$A()||qA()}get(){return mC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gp(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yC=new ga(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,r,i={}){return Xw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ma(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Yw.fetch()(Jw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vC),e);try{const i=new wC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qw(t,f,c);Zt(t,f)}}catch(i){if(i instanceof Wn)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function va(t,e,n,r,i={}){const s=await Lr(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gp(t.config,i):`${t.config.apiScheme}://${i}`}function _C(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),yC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}function Fv(t){return t!==void 0&&t.enterprise!==void 0}class EC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _C(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function TC(t,e){return Lr(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
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
 */async function IC(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function Zw(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SC(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),i=vp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(kh(i.auth_time)),issuedAtTime:wo(kh(i.iat)),expirationTime:wo(kh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kh(t){return Number(t)*1e3}function vp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mw(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uv(t){const e=vp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&kC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class AC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ff{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Iu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ko(t,Zw(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eE(s.providerUserInfo):[],l=CC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ff(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function PC(t){const e=Pt(t);await Iu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eE(t){return t.map(e=>{var{providerId:n}=e,r=pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RC(t,e){const n=await Xw(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Jw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Yw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bC(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
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
 */class Xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Uv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xi,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Yn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ff(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Iu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await Ko(this,IC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:O,isAnonymous:L,providerData:U,stsTokenManager:E}=n;Q(I&&E,e,"internal-error");const v=Xi.fromJSON(this.name,E);Q(typeof I=="string",e,"internal-error"),Yn(p,e.name),Yn(g,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof L=="boolean",e,"internal-error"),Yn(w,e.name),Yn(P,e.name),Yn(R,e.name),Yn(N,e.name),Yn(T,e.name),Yn(y,e.name);const _=new Cn({uid:I,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:L,photoURL:P,phoneNumber:w,tenantId:R,stsTokenManager:v,createdAt:T,lastLoginAt:y});return U&&Array.isArray(U)&&(_.providerData=U.map(S=>Object.assign({},S))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Iu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?eE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Xi;l.updateFromIdToken(r);const u=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ff(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const jv=new Map;function Rn(t){Mn(t instanceof Function,"Expected a class definition");let e=jv.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jv.set(t,e),e)}/**
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
 */class tE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tE.type="NONE";const zv=tE;/**
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
 */function Fl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ji(Rn(zv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(zv);const o=Fl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Cn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ji(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ji(s,e,r))}}/**
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
 */function Bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oE(e))return"Blackberry";if(aE(e))return"Webos";if(yp(e))return"Safari";if((e.includes("chrome/")||rE(e))&&!e.includes("edge/"))return"Chrome";if(sE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nE(t=Xe()){return/firefox\//i.test(t)}function yp(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rE(t=Xe()){return/crios\//i.test(t)}function iE(t=Xe()){return/iemobile/i.test(t)}function sE(t=Xe()){return/android/i.test(t)}function oE(t=Xe()){return/blackberry/i.test(t)}function aE(t=Xe()){return/webos/i.test(t)}function oc(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xC(t=Xe()){var e;return oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NC(){return KA()&&document.documentMode===10}function lE(t=Xe()){return oc(t)||sE(t)||aE(t)||oE(t)||/windows phone/i.test(t)||iE(t)}function OC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function uE(t,e=[]){let n;switch(t){case"Browser":n=Bv(Xe());break;case"Worker":n=`${Bv(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */class DC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function LC(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const VC=6;class MC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new DC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zw(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Iu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(xn(this));const n=e?Pt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LC(this),n=new MC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return Pt(t)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=tP(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UC(t){ac=t}function cE(t){return ac.loadJS(t)}function jC(){return ac.recaptchaEnterpriseScript}function zC(){return ac.gapiScript}function BC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $C="recaptcha-enterprise",WC="NO_RECAPTCHA";class HC{constructor(e){this.type=$C,this.auth=yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{TC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new EC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Fv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(WC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jC();u.length!==0&&(u+=l),cE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wv(t,e,n,r=!1){const i=new HC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function qC(t,e){const n=dp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wu(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function KC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GC(t,e,n){const r=yi(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=hE(e),{host:o,port:l}=QC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),YC()}function hE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QC(t){const e=hE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hv(o)}}}function Hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function XC(t,e){return Lr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JC(t,e){return va(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function ZC(t,e){return va(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function eR(t,e){return va(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class Go extends _p{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uf(e,n,"signInWithPassword",JC);case"emailLink":return ZC(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uf(e,r,"signUpPassword",XC);case"emailLink":return eR(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zi(t,e){return va(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const tR="http://localhost";class oi extends _p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zi(e,n)}buildRequest(){const e={requestUri:tR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
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
 */function nR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rR(t){const e=io(so(t)).link,n=e?io(so(e)).deep_link_id:null,r=io(so(t)).deep_link_id;return(r?io(so(r)).link:null)||r||n||e||t}class wp{constructor(e){var n,r,i,s,o,l;const u=io(so(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=nR((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=rR(e);try{return new wp(n)}catch{return null}}}/**
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
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wp.parseLink(n);return Q(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ya extends fE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends ya{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class ir extends ya{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends ya{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function iR(t,e){return va(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=qv(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qv(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Su extends Wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Su.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Su(e,n,r,i)}}function dE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Su._fromErrorAndOperation(t,s,e,r):s})}async function sR(t,e,n=!1){const r=await Ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
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
 */async function oR(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(xn(r));const i="reauthenticate";try{const s=await Ko(t,dE(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=vp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
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
 */async function pE(t,e,n=!1){if(on(t.app))return Promise.reject(xn(t));const r="signIn",i=await dE(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aR(t,e){return pE(yi(t),e)}/**
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
 */async function mE(t){const e=yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lR(t,e,n){if(on(t.app))return Promise.reject(xn(t));const r=yi(t),o=await Uf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&mE(t),u}),l=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function uR(t,e,n){return on(t.app)?Promise.reject(xn(t)):aR(Pt(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mE(t),r})}function cR(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function hR(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function fR(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function dR(t){return Pt(t).signOut()}const ku="__sak";/**
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
 */class gE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pR(){const t=Xe();return yp(t)||oc(t)}const mR=1e3,gR=10;class vE extends gE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pR()&&OC(),this.fallbackToPolling=lE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vE.type="LOCAL";const vR=vE;/**
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
 */class yE extends gE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yE.type="SESSION";const _E=yE;/**
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
 */function yR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await yR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
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
 */function Ep(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _R{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Ep("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function wR(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function wE(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IR(){return wE()?self:null}/**
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
 */const EE="firebaseLocalStorageDb",SR=1,Au="firebaseLocalStorage",TE="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function kR(){const t=indexedDB.deleteDatabase(EE);return new _a(t).toPromise()}function jf(){const t=indexedDB.open(EE,SR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Au,{keyPath:TE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Au)?e(r):(r.close(),await kR(),e(await jf()))})})}async function Kv(t,e,n){const r=uc(t,!0).put({[TE]:e,value:n});return new _a(r).toPromise()}async function AR(t,e){const n=uc(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=uc(t,!0).delete(e);return new _a(n).toPromise()}const PR=800,CR=3;class IE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(IR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new _R(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jf();return await Kv(e,ku,"1"),await Gv(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IE.type="LOCAL";const RR=IE;new ga(3e4,6e4);/**
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
 */function bR(t,e){return e?Rn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tp extends _p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xR(t){return pE(t.auth,new Tp(t),t.bypassAuthState)}function NR(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),oR(n,new Tp(t),t.bypassAuthState)}async function OR(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),sR(n,new Tp(t),t.bypassAuthState)}/**
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
 */class SE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return OR;case"reauthViaPopup":case"reauthViaRedirect":return NR;default:Zt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DR=new ga(2e3,1e4);class zi extends SE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DR.get())};e()}}zi.currentPopupAction=null;/**
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
 */const LR="pendingRedirect",Ul=new Map;class VR extends SE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await MR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MR(t,e){const n=jR(e),r=UR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FR(t,e){Ul.set(t._key(),e)}function UR(t){return Rn(t._redirectPersistence)}function jR(t){return Fl(LR,t.config.apiKey,t.name)}async function zR(t,e,n=!1){if(on(t.app))return Promise.reject(xn(t));const r=yi(t),i=bR(r,e),o=await new VR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const BR=10*60*1e3;class $R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qv(e))}saveEventToCache(e){this.cachedEventUids.add(Qv(e)),this.lastProcessedEventTime=Date.now()}}function Qv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kE(t);default:return!1}}/**
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
 */async function HR(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
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
 */const qR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KR=/^https?/;async function GR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HR(t);for(const n of e)try{if(QR(n))return}catch{}Zt(t,"unauthorized-domain")}function QR(t){const e=Mf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KR.test(n))return!1;if(qR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const YR=new ga(3e4,6e4);function Yv(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XR(t){return new Promise((e,n)=>{var r,i,s;function o(){Yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yv(),n(cn(t,"network-request-failed"))},timeout:YR.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const l=BC("iframefcb");return hn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},cE(`${zC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw jl=null,e})}let jl=null;function JR(t){return jl=jl||XR(t),jl}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ZR=new ga(5e3,15e3),eb="__/auth/iframe",tb="emulator/auth/iframe",nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ib(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gp(e,tb):`https://${t.config.authDomain}/${eb}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},i=rb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function sb(t){const e=await JR(t),n=hn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:ib(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=hn().setTimeout(()=>{s(o)},ZR.get());function u(){hn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ab=500,lb=600,ub="_blank",cb="http://localhost";class Xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hb(t,e,n,r=ab,i=lb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},ob),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Xe().toLowerCase();n&&(l=rE(c)?ub:n),nE(c)&&(e=e||cb,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[w,P])=>`${g}${w}=${P},`,"");if(xC(c)&&l!=="_self")return fb(e||"",l),new Xv(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new Xv(p)}function fb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const db="__/auth/handler",pb="emulator/auth/handler",mb=encodeURIComponent("fac");async function Jv(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:i};if(e instanceof fE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ya){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${mb}=${encodeURIComponent(u)}`:"";return`${gb(t)}?${ma(l).slice(1)}${c}`}function gb({config:t}){return t.emulator?gp(t,pb):`https://${t.authDomain}/${db}`}/**
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
 */const Ah="webStorageSupport";class vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_E,this._completeRedirectFn=zR,this._overrideRedirectResult=FR}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jv(e,n,r,Mf(),i);return hb(e,o,Ep())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jv(e,n,r,Mf(),i);return wR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sb(e),r=new $R(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ah,{type:Ah},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ah];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lE()||yp()||oc()}}const yb=vb;var Zv="@firebase/auth",ey="1.7.3";/**
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
 */class _b{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Eb(t){us(new ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uE(t)},c=new FC(r,i,s,u);return KC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),us(new ii("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new _b(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(Zv,ey,wb(t)),Er(Zv,ey,"esm2017")}/**
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
 */const Tb=5*60,Ib=jw("authIdTokenMaxAge")||Tb;let ty=null;const Sb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ib)return;const i=n==null?void 0:n.token;ty!==i&&(ty=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kb(t=Ww()){const e=dp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qC(t,{popupRedirectResolver:yb,persistence:[RR,vR,_E]}),r=jw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Sb(s.toString());hR(n,o,()=>o(n.currentUser)),cR(n,l=>o(l))}}const i=Fw("auth");return i&&GC(n,`http://${i}`),n}function Ab(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ab().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Eb("Browser");var ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,AE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function _(){}_.prototype=v.prototype,E.D=v.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(S,A,x){for(var k=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)k[xt-2]=arguments[xt];return v.prototype[A].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,_){_||(_=0);var S=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)S[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)S[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=E.g[0],_=E.g[1],A=E.g[2];var x=E.g[3],k=v+(x^_&(A^x))+S[0]+3614090360&4294967295;v=_+(k<<7&4294967295|k>>>25),k=x+(A^v&(_^A))+S[1]+3905402710&4294967295,x=v+(k<<12&4294967295|k>>>20),k=A+(_^x&(v^_))+S[2]+606105819&4294967295,A=x+(k<<17&4294967295|k>>>15),k=_+(v^A&(x^v))+S[3]+3250441966&4294967295,_=A+(k<<22&4294967295|k>>>10),k=v+(x^_&(A^x))+S[4]+4118548399&4294967295,v=_+(k<<7&4294967295|k>>>25),k=x+(A^v&(_^A))+S[5]+1200080426&4294967295,x=v+(k<<12&4294967295|k>>>20),k=A+(_^x&(v^_))+S[6]+2821735955&4294967295,A=x+(k<<17&4294967295|k>>>15),k=_+(v^A&(x^v))+S[7]+4249261313&4294967295,_=A+(k<<22&4294967295|k>>>10),k=v+(x^_&(A^x))+S[8]+1770035416&4294967295,v=_+(k<<7&4294967295|k>>>25),k=x+(A^v&(_^A))+S[9]+2336552879&4294967295,x=v+(k<<12&4294967295|k>>>20),k=A+(_^x&(v^_))+S[10]+4294925233&4294967295,A=x+(k<<17&4294967295|k>>>15),k=_+(v^A&(x^v))+S[11]+2304563134&4294967295,_=A+(k<<22&4294967295|k>>>10),k=v+(x^_&(A^x))+S[12]+1804603682&4294967295,v=_+(k<<7&4294967295|k>>>25),k=x+(A^v&(_^A))+S[13]+4254626195&4294967295,x=v+(k<<12&4294967295|k>>>20),k=A+(_^x&(v^_))+S[14]+2792965006&4294967295,A=x+(k<<17&4294967295|k>>>15),k=_+(v^A&(x^v))+S[15]+1236535329&4294967295,_=A+(k<<22&4294967295|k>>>10),k=v+(A^x&(_^A))+S[1]+4129170786&4294967295,v=_+(k<<5&4294967295|k>>>27),k=x+(_^A&(v^_))+S[6]+3225465664&4294967295,x=v+(k<<9&4294967295|k>>>23),k=A+(v^_&(x^v))+S[11]+643717713&4294967295,A=x+(k<<14&4294967295|k>>>18),k=_+(x^v&(A^x))+S[0]+3921069994&4294967295,_=A+(k<<20&4294967295|k>>>12),k=v+(A^x&(_^A))+S[5]+3593408605&4294967295,v=_+(k<<5&4294967295|k>>>27),k=x+(_^A&(v^_))+S[10]+38016083&4294967295,x=v+(k<<9&4294967295|k>>>23),k=A+(v^_&(x^v))+S[15]+3634488961&4294967295,A=x+(k<<14&4294967295|k>>>18),k=_+(x^v&(A^x))+S[4]+3889429448&4294967295,_=A+(k<<20&4294967295|k>>>12),k=v+(A^x&(_^A))+S[9]+568446438&4294967295,v=_+(k<<5&4294967295|k>>>27),k=x+(_^A&(v^_))+S[14]+3275163606&4294967295,x=v+(k<<9&4294967295|k>>>23),k=A+(v^_&(x^v))+S[3]+4107603335&4294967295,A=x+(k<<14&4294967295|k>>>18),k=_+(x^v&(A^x))+S[8]+1163531501&4294967295,_=A+(k<<20&4294967295|k>>>12),k=v+(A^x&(_^A))+S[13]+2850285829&4294967295,v=_+(k<<5&4294967295|k>>>27),k=x+(_^A&(v^_))+S[2]+4243563512&4294967295,x=v+(k<<9&4294967295|k>>>23),k=A+(v^_&(x^v))+S[7]+1735328473&4294967295,A=x+(k<<14&4294967295|k>>>18),k=_+(x^v&(A^x))+S[12]+2368359562&4294967295,_=A+(k<<20&4294967295|k>>>12),k=v+(_^A^x)+S[5]+4294588738&4294967295,v=_+(k<<4&4294967295|k>>>28),k=x+(v^_^A)+S[8]+2272392833&4294967295,x=v+(k<<11&4294967295|k>>>21),k=A+(x^v^_)+S[11]+1839030562&4294967295,A=x+(k<<16&4294967295|k>>>16),k=_+(A^x^v)+S[14]+4259657740&4294967295,_=A+(k<<23&4294967295|k>>>9),k=v+(_^A^x)+S[1]+2763975236&4294967295,v=_+(k<<4&4294967295|k>>>28),k=x+(v^_^A)+S[4]+1272893353&4294967295,x=v+(k<<11&4294967295|k>>>21),k=A+(x^v^_)+S[7]+4139469664&4294967295,A=x+(k<<16&4294967295|k>>>16),k=_+(A^x^v)+S[10]+3200236656&4294967295,_=A+(k<<23&4294967295|k>>>9),k=v+(_^A^x)+S[13]+681279174&4294967295,v=_+(k<<4&4294967295|k>>>28),k=x+(v^_^A)+S[0]+3936430074&4294967295,x=v+(k<<11&4294967295|k>>>21),k=A+(x^v^_)+S[3]+3572445317&4294967295,A=x+(k<<16&4294967295|k>>>16),k=_+(A^x^v)+S[6]+76029189&4294967295,_=A+(k<<23&4294967295|k>>>9),k=v+(_^A^x)+S[9]+3654602809&4294967295,v=_+(k<<4&4294967295|k>>>28),k=x+(v^_^A)+S[12]+3873151461&4294967295,x=v+(k<<11&4294967295|k>>>21),k=A+(x^v^_)+S[15]+530742520&4294967295,A=x+(k<<16&4294967295|k>>>16),k=_+(A^x^v)+S[2]+3299628645&4294967295,_=A+(k<<23&4294967295|k>>>9),k=v+(A^(_|~x))+S[0]+4096336452&4294967295,v=_+(k<<6&4294967295|k>>>26),k=x+(_^(v|~A))+S[7]+1126891415&4294967295,x=v+(k<<10&4294967295|k>>>22),k=A+(v^(x|~_))+S[14]+2878612391&4294967295,A=x+(k<<15&4294967295|k>>>17),k=_+(x^(A|~v))+S[5]+4237533241&4294967295,_=A+(k<<21&4294967295|k>>>11),k=v+(A^(_|~x))+S[12]+1700485571&4294967295,v=_+(k<<6&4294967295|k>>>26),k=x+(_^(v|~A))+S[3]+2399980690&4294967295,x=v+(k<<10&4294967295|k>>>22),k=A+(v^(x|~_))+S[10]+4293915773&4294967295,A=x+(k<<15&4294967295|k>>>17),k=_+(x^(A|~v))+S[1]+2240044497&4294967295,_=A+(k<<21&4294967295|k>>>11),k=v+(A^(_|~x))+S[8]+1873313359&4294967295,v=_+(k<<6&4294967295|k>>>26),k=x+(_^(v|~A))+S[15]+4264355552&4294967295,x=v+(k<<10&4294967295|k>>>22),k=A+(v^(x|~_))+S[6]+2734768916&4294967295,A=x+(k<<15&4294967295|k>>>17),k=_+(x^(A|~v))+S[13]+1309151649&4294967295,_=A+(k<<21&4294967295|k>>>11),k=v+(A^(_|~x))+S[4]+4149444226&4294967295,v=_+(k<<6&4294967295|k>>>26),k=x+(_^(v|~A))+S[11]+3174756917&4294967295,x=v+(k<<10&4294967295|k>>>22),k=A+(v^(x|~_))+S[2]+718787259&4294967295,A=x+(k<<15&4294967295|k>>>17),k=_+(x^(A|~v))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var _=v-this.blockSize,S=this.B,A=this.h,x=0;x<v;){if(A==0)for(;x<=_;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<v;)if(S[A++]=E.charCodeAt(x++),A==this.blockSize){i(this,S),A=0;break}}else for(;x<v;)if(S[A++]=E[x++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var _=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=_&255,_/=256;for(this.u(E),E=Array(16),v=_=0;4>v;++v)for(var S=0;32>S;S+=8)E[_++]=this.g[v]>>>S&255;return E};function s(E,v){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=v(E)}function o(E,v){this.h=v;for(var _=[],S=!0,A=E.length-1;0<=A;A--){var x=E[A]|0;S&&x==v||(_[A]=x,S=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return N(c(-E));for(var v=[],_=1,S=0;E>=_;S++)v[S]=E/_|0,_*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return N(f(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=c(Math.pow(v,8)),S=p,A=0;A<E.length;A+=8){var x=Math.min(8,E.length-A),k=parseInt(E.substring(A,A+x),v);8>x?(x=c(Math.pow(v,x)),S=S.j(x).add(c(k))):(S=S.j(_),S=S.add(c(k)))}return S}var p=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();for(var E=0,v=1,_=0;_<this.g.length;_++){var S=this.i(_);E+=(0<=S?S:4294967296+S)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(R(this))return"-"+N(this).toString(E);for(var v=c(Math.pow(E,6)),_=this,S="";;){var A=O(_,v).g;_=T(_,A.j(v));var x=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,P(_))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function R(E){return E.h==-1}t.l=function(E){return E=T(this,E),R(E)?-1:P(E)?0:1};function N(E){for(var v=E.g.length,_=[],S=0;S<v;S++)_[S]=~E.g[S];return new o(_,~E.h).add(g)}t.abs=function(){return R(this)?N(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],S=0,A=0;A<=v;A++){var x=S+(this.i(A)&65535)+(E.i(A)&65535),k=(x>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);S=k>>>16,x&=65535,k&=65535,_[A]=k<<16|x}return new o(_,_[_.length-1]&-2147483648?-1:0)};function T(E,v){return E.add(N(v))}t.j=function(E){if(P(this)||P(E))return p;if(R(this))return R(E)?N(this).j(N(E)):N(N(this).j(E));if(R(E))return N(this.j(N(E)));if(0>this.l(w)&&0>E.l(w))return c(this.m()*E.m());for(var v=this.g.length+E.g.length,_=[],S=0;S<2*v;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<E.g.length;A++){var x=this.i(S)>>>16,k=this.i(S)&65535,xt=E.i(A)>>>16,Vr=E.i(A)&65535;_[2*S+2*A]+=k*Vr,y(_,2*S+2*A),_[2*S+2*A+1]+=x*Vr,y(_,2*S+2*A+1),_[2*S+2*A+1]+=k*xt,y(_,2*S+2*A+1),_[2*S+2*A+2]+=x*xt,y(_,2*S+2*A+2)}for(S=0;S<v;S++)_[S]=_[2*S+1]<<16|_[2*S];for(S=v;S<2*v;S++)_[S]=0;return new o(_,0)};function y(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function I(E,v){this.g=E,this.h=v}function O(E,v){if(P(v))throw Error("division by zero");if(P(E))return new I(p,p);if(R(E))return v=O(N(E),v),new I(N(v.g),N(v.h));if(R(v))return v=O(E,N(v)),new I(N(v.g),v.h);if(30<E.g.length){if(R(E)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,S=v;0>=S.l(E);)_=L(_),S=L(S);var A=U(_,1),x=U(S,1);for(S=U(S,2),_=U(_,2);!P(S);){var k=x.add(S);0>=k.l(E)&&(A=A.add(_),x=k),S=U(S,1),_=U(_,1)}return v=T(E,A.j(v)),new I(A,v)}for(A=p;0<=E.l(v);){for(_=Math.max(1,Math.floor(E.m()/v.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=c(_),k=x.j(v);R(k)||0<k.l(E);)_-=S,x=c(_),k=x.j(v);P(x)&&(x=g),A=A.add(x),E=T(E,k)}return new I(A,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],S=0;S<v;S++)_[S]=this.i(S)&E.i(S);return new o(_,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],S=0;S<v;S++)_[S]=this.i(S)|E.i(S);return new o(_,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],S=0;S<v;S++)_[S]=this.i(S)^E.i(S);return new o(_,this.h^E.h)};function L(E){for(var v=E.g.length+1,_=[],S=0;S<v;S++)_[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(_,E.h)}function U(E,v){var _=v>>5;v%=32;for(var S=E.g.length-_,A=[],x=0;x<S;x++)A[x]=0<v?E.i(x+_)>>>v|E.i(x+_+1)<<32-v:E.i(x+_);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,AE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Jr=o}).apply(typeof ny<"u"?ny:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PE,CE,oo,RE,zl,zf,bE,xE,NE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,m=!1,b={next:function(){if(!m&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function w(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,b,D){for(var j=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)j[fe-2]=arguments[fe];return h.prototype[b].apply(m,j)}}function R(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const b=a.length||0,D=m.length||0;a.length=b+D;for(let j=0;j<D;j++)a[b+j]=m[j]}else a.push(m)}}class T{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function E(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let D=0;D<_.length;D++)d=_[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class xt{constructor(){this.h=this.g=null}add(h,d){const m=Vr.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Vr=new T(()=>new Rs,a=>a.reset());class Rs{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let gn,B=!1,Y=new xt,ee=()=>{const a=l.Promise.resolve(void 0);gn=()=>{a.then(Ee)}};var Ee=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(d){x(d)}var h=Vr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function yn(a,h){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{O(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_n[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}P(yn,be);var _n={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),bT=0;function xT(a,h,d,m,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=b,this.key=++bT,this.da=this.fa=!1}function ba(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xa(a){this.src=a,this.g={},this.h=0}xa.prototype.add=function(a,h,d,m,b){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var j=kc(a,h,m,b);return-1<j?(h=a[j],d||(h.fa=!1)):(h=new xT(h,this.src,D,!!m,b),h.fa=d,a.push(h)),h};function Sc(a,h){var d=h.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=b)&&Array.prototype.splice.call(m,b,1),D&&(ba(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function kc(a,h,d,m){for(var b=0;b<a.length;++b){var D=a[b];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==m)return b}return-1}var Ac="closure_lm_"+(1e6*Math.random()|0),Pc={};function dm(a,h,d,m,b){if(Array.isArray(h)){for(var D=0;D<h.length;D++)dm(a,h[D],d,m,b);return null}return d=gm(d),a&&a[wn]?a.K(h,d,c(m)?!!m.capture:!!m,b):NT(a,h,d,!1,m,b)}function NT(a,h,d,m,b,D){if(!h)throw Error("Invalid event type");var j=c(b)?!!b.capture:!!b,fe=Rc(a);if(fe||(a[Ac]=fe=new xa(a)),d=fe.add(h,d,m,j,D),d.proxy)return d;if(m=OT(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)vn||(b=j),b===void 0&&(b=!1),a.addEventListener(h.toString(),m,b);else if(a.attachEvent)a.attachEvent(mm(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function OT(){function a(d){return h.call(a.src,a.listener,d)}const h=DT;return a}function pm(a,h,d,m,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)pm(a,h[D],d,m,b);else m=c(m)?!!m.capture:!!m,d=gm(d),a&&a[wn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=kc(D,d,m,b),-1<d&&(ba(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Rc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=kc(h,d,m,b)),(d=-1<a?h[a]:null)&&Cc(d))}function Cc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wn])Sc(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(mm(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Rc(h))?(Sc(d,a),d.h==0&&(d.src=null,h[Ac]=null)):ba(a)}}}function mm(a){return a in Pc?Pc[a]:Pc[a]="on"+a}function DT(a,h){if(a.da)a=!0;else{h=new yn(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&Cc(a),a=d.call(m,h)}return a}function Rc(a){return a=a[Ac],a instanceof xa?a:null}var bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function gm(a){return typeof a=="function"?a:(a[bc]||(a[bc]=function(h){return a.handleEvent(h)}),a[bc])}function Je(){he.call(this),this.i=new xa(this),this.M=this,this.F=null}P(Je,he),Je.prototype[wn]=!0,Je.prototype.removeEventListener=function(a,h,d,m){pm(this,a,h,d,m)};function ut(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new be(h,a);else if(h instanceof be)h.target=h.target||a;else{var b=h;h=new be(m,a),S(h,b)}if(b=!0,d)for(var D=d.length-1;0<=D;D--){var j=h.g=d[D];b=Na(j,m,!0,h)&&b}if(j=h.g=a,b=Na(j,m,!0,h)&&b,b=Na(j,m,!1,h)&&b,d)for(D=0;D<d.length;D++)j=h.g=d[D],b=Na(j,m,!1,h)&&b}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)ba(d[m]);delete a.g[h],a.h--}}this.F=null},Je.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},Je.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Na(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,D=0;D<h.length;++D){var j=h[D];if(j&&!j.da&&j.capture==d){var fe=j.listener,We=j.ha||j.src;j.fa&&Sc(a.i,j),b=fe.call(We,m)!==!1&&b}}return b&&!m.defaultPrevented}function vm(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ym(a){a.g=vm(()=>{a.g=null,a.i&&(a.i=!1,ym(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class LT extends he{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ym(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(a){he.call(this),this.h=a,this.g={}}P(bs,he);var _m=[];function wm(a){U(a.g,function(h,d){this.g.hasOwnProperty(d)&&Cc(h)},a),a.g={}}bs.prototype.N=function(){bs.aa.N.call(this),wm(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xc=l.JSON.stringify,VT=l.JSON.parse,MT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Nc(){}Nc.prototype.h=null;function Em(a){return a.h||(a.h=a.i())}function Tm(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oc(){be.call(this,"d")}P(Oc,be);function Dc(){be.call(this,"c")}P(Dc,be);var Mr={},Im=null;function Oa(){return Im=Im||new Je}Mr.La="serverreachability";function Sm(a){be.call(this,Mr.La,a)}P(Sm,be);function Ns(a){const h=Oa();ut(h,new Sm(h))}Mr.STAT_EVENT="statevent";function km(a,h){be.call(this,Mr.STAT_EVENT,a),this.stat=h}P(km,be);function ct(a){const h=Oa();ut(h,new km(h,a))}Mr.Ma="timingevent";function Am(a,h){be.call(this,Mr.Ma,a),this.size=h}P(Am,be);function Os(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function FT(a,h,d,m,b,D){a.info(function(){if(a.g)if(D)for(var j="",fe=D.split("&"),We=0;We<fe.length;We++){var ae=fe[We].split("=");if(1<ae.length){var Ze=ae[0];ae=ae[1];var et=Ze.split("_");j=2<=et.length&&et[1]=="type"?j+(Ze+"="+ae+"&"):j+(Ze+"=redacted&")}}else j=null;else j=D;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+h+`
`+d+`
`+j})}function UT(a,h,d,m,b,D,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+h+`
`+d+`
`+D+" "+j})}function Ei(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+zT(a,d)+(m?" "+m:"")})}function jT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ds.prototype.info=function(){};function zT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var j=1;j<b.length;j++)b[j]=""}}}}return xc(d)}catch{return h}}var Da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lc;function La(){}P(La,Nc),La.prototype.g=function(){return new XMLHttpRequest},La.prototype.i=function(){return{}},Lc=new La;function qn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cm}function Cm(){this.i=null,this.g="",this.h=!1}var Rm={},Vc={};function Mc(a,h,d){a.L=1,a.v=Ua(En(h)),a.m=d,a.P=!0,bm(a,null)}function bm(a,h){a.F=Date.now(),Va(a),a.A=En(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Wm(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Cm,a.g=lg(a.j,d?h:null,!a.m),0<a.O&&(a.M=new LT(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(_m[0]=b.toString()),b=_m);for(var D=0;D<b.length;D++){var j=dm(d,b[D],m||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ns(),FT(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const et=Tn(this.g);var h=this.g.Ba();const Si=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Xm(this.g)))){this.J||et!=4||h==7||(h==8||0>=Si?Ns(3):Ns(2)),Fc(this);var d=this.g.Z();this.X=d;t:if(xm(this)){var m=Xm(this.g);a="";var b=m.length,D=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),Ls(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==b-1)});m.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,UT(this.i,this.u,this.A,this.l,this.R,et,d),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,We=this.g;if((fe=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(fe)){var ae=fe;break t}}ae=null}if(d=ae)Ei(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uc(this,d);else{this.o=!1,this.s=3,ct(12),Fr(this),Ls(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<j.length;)if(Bt=BT(this,j),Bt==Vc){et==4&&(this.s=4,ct(14),d=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Rm){this.s=4,ct(15),Ei(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Ei(this.i,this.l,Bt,null),Uc(this,Bt);if(xm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||j.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)Ei(this.i,this.l,j,"[Invalid Chunked Response]"),Fr(this),Ls(this);else if(0<j.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Hc(Ze),Ze.M=!0,ct(11))}}else Ei(this.i,this.l,j,null),Uc(this,j);et==4&&Fr(this),this.o&&!this.J&&(et==4?ig(this.j,this):(this.o=!1,Va(this)))}else sI(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Fr(this),Ls(this)}}}catch{}finally{}};function xm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function BT(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?Vc:(d=Number(h.substring(d,m)),isNaN(d)?Rm:(m+=1,m+d>h.length?Vc:(h=h.slice(m,m+d),a.C=m+d,h)))}qn.prototype.cancel=function(){this.J=!0,Fr(this)};function Va(a){a.S=Date.now()+a.I,Nm(a,a.I)}function Nm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Os(g(a.ba,a),h)}function Fc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jT(this.i,this.A),this.L!=2&&(Ns(),ct(17)),Fr(this),this.s=2,Ls(this)):Nm(this,this.S-a)};function Ls(a){a.j.G==0||a.J||ig(a.j,a)}function Fr(a){Fc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,wm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Uc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||jc(d.h,a))){if(!a.K&&jc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wa(d),Ba(d);else break e;Wc(d),ct(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Os(g(d.Za,d),6e3));if(1>=Lm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else jr(d,11)}else if((a.K||d.g==a)&&Wa(d),!y(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let ae=b[h];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Ze=ae[3];Ze!=null&&(d.la=Ze,d.j.info("VER="+d.la));const et=ae[4];et!=null&&(d.Aa=et,d.j.info("SVER="+d.Aa));const Si=ae[5];Si!=null&&typeof Si=="number"&&0<Si&&(m=1.5*Si,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Bt=a.g;if(Bt){const qa=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qa){var D=m.h;D.g||qa.indexOf("spdy")==-1&&qa.indexOf("quic")==-1&&qa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(zc(D,D.h),D.h=null))}if(m.D){const qc=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;qc&&(m.ya=qc,me(m.I,m.D,qc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=a;if(m.qa=ag(m,m.J?m.ia:null,m.W),j.K){Vm(m.h,j);var fe=j,We=m.L;We&&(fe.I=We),fe.B&&(Fc(fe),Va(fe)),m.g=j}else ng(m);0<d.i.length&&$a(d)}else ae[0]!="stop"&&ae[0]!="close"||jr(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?jr(d,7):$c(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}Ns(4)}catch{}}var $T=class{constructor(a,h){this.g=a,this.map=h}};function Om(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lm(a){return a.h?1:a.g?a.g.size:0}function jc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function zc(a,h){a.g?a.g.add(h):a.h=h}function Vm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Om.prototype.cancel=function(){if(this.i=Mm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Mm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return R(a.i)}function WT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function HT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function Fm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=HT(a),m=WT(a),b=m.length,D=0;D<b;D++)h.call(void 0,m[D],d&&d[D],a)}var Um=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),b=null;if(0<=m){var D=a[d].substring(0,m);b=a[d].substring(m+1)}else D=a[d];h(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ur){this.h=a.h,Ma(this,a.j),this.o=a.o,this.g=a.g,Fa(this,a.s),this.l=a.l;var h=a.i,d=new Fs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),jm(this,d),this.m=a.m}else a&&(h=String(a).match(Um))?(this.h=!1,Ma(this,h[1]||"",!0),this.o=Vs(h[2]||""),this.g=Vs(h[3]||"",!0),Fa(this,h[4]),this.l=Vs(h[5]||"",!0),jm(this,h[6]||"",!0),this.m=Vs(h[7]||"")):(this.h=!1,this.i=new Fs(null,this.h))}Ur.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ms(h,zm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ms(h,zm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ms(d,d.charAt(0)=="/"?QT:GT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ms(d,XT)),a.join("")};function En(a){return new Ur(a)}function Ma(a,h,d){a.j=d?Vs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function jm(a,h,d){h instanceof Fs?(a.i=h,JT(a.i,a.h)):(d||(h=Ms(h,YT)),a.i=new Fs(h,a.h))}function me(a,h,d){a.i.set(h,d)}function Ua(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,KT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function KT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zm=/[#\/\?@]/g,GT=/[#\?:]/g,QT=/[#\?]/g,YT=/[#\?@]/g,XT=/#/g;function Fs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&qT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Fs.prototype,t.add=function(a,h){Kn(this),this.i=null,a=Ti(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Bm(a,h){Kn(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $m(a,h){return Kn(a),h=Ti(a,h),a.g.has(h)}t.forEach=function(a,h){Kn(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(h,b,m,this)},this)},this)},t.na=function(){Kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const b=a[m];for(let D=0;D<b.length;D++)d.push(h[m])}return d},t.V=function(a){Kn(this);let h=[];if(typeof a=="string")$m(this,a)&&(h=h.concat(this.g.get(Ti(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Kn(this),this.i=null,a=Ti(this,a),$m(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Wm(a,h,d){Bm(a,h),0<d.length&&(a.i=null,a.g.set(Ti(a,h),R(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const D=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var b=D;j[m]!==""&&(b+="="+encodeURIComponent(String(j[m]))),a.push(b)}}return this.i=a.join("&")};function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function JT(a,h){h&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(d,m){var b=m.toLowerCase();m!=b&&(Bm(this,m),Wm(this,b,d))},a)),a.j=h}function ZT(a,h){const d=new Ds;if(l.Image){const m=new Image;m.onload=w(Gn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=w(Gn,d,"TestLoadImage: error",!1,h,m),m.onabort=w(Gn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=w(Gn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function eI(a,h){const d=new Ds,m=new AbortController,b=setTimeout(()=>{m.abort(),Gn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(b),D.ok?Gn(d,"TestPingServer: ok",!0,h):Gn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Gn(d,"TestPingServer: error",!1,h)})}function Gn(a,h,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function tI(){this.g=new MT}function nI(a,h,d){const m=d||"";try{Fm(a,function(b,D){let j=b;c(b)&&(j=xc(b)),h.push(m+D+"="+encodeURIComponent(j))})}catch(b){throw h.push(m+"type="+encodeURIComponent("_badmap")),b}}function Us(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Us,Nc),Us.prototype.g=function(){return new ja(this.l,this.j)},Us.prototype.i=function(a){return function(){return a}}({});function ja(a,h){Je.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ja,Je),t=ja.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?js(this):zs(this),this.readyState==3&&Hm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,js(this))},t.Qa=function(a){this.g&&(this.response=a,js(this))},t.ga=function(){this.g&&js(this)};function js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qm(a){let h="";return U(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Bc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=qm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):me(a,h,d))}function Ae(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ae,Je);var rI=/^https?$/i,iI=["POST","PUT"];t=Ae.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lc.g(),this.v=this.o?Em(this.o):Em(Lc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Km(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(iI,h,void 0))||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of d)this.g.setRequestHeader(D,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ym(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Km(this,D)}};function Km(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Gm(a),za(a)}function Gm(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),za(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qm(this):this.bb())},t.bb=function(){Qm(this)};function Qm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)vm(a.Ea,0,a);else if(ut(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=j===0){var b=String(a.D).match(Um)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),m=!rI.test(b?b.toLowerCase():"")}d=m}if(d)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var D=2<Tn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Gm(a)}}finally{za(a)}}}}function za(a,h){if(a.g){Ym(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ut(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ym(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),VT(h)}};function Xm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sI(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=A(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[b]||[];h[b]=D,D.push(d)}E(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Jm(a){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bs("baseRetryDelayMs",5e3,a),this.cb=Bs("retryDelaySeedMs",1e4,a),this.Wa=Bs("forwardChannelMaxRetries",2,a),this.wa=Bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Om(a&&a.concurrentRequestLimit),this.Da=new tI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){ct(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ag(this,null,this.W),$a(this)};function $c(a){if(Zm(a),a.G==3){var h=a.U++,d=En(a.I);if(me(d,"SID",a.K),me(d,"RID",h),me(d,"TYPE","terminate"),$s(a,d),h=new qn(a,a.j,h),h.L=2,h.v=Ua(En(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=lg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Va(h)}og(a)}function Ba(a){a.g&&(Hc(a),a.g.cancel(),a.g=null)}function Zm(a){Ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function $a(a){if(!Dm(a.h)&&!a.s){a.s=!0;var h=a.Ga;gn||ee(),B||(gn(),B=!0),Y.add(h,a),a.B=0}}function oI(a,h){return Lm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Os(g(a.Ga,a,h),sg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new qn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=tg(this,b,h),d=En(this.I),me(d,"RID",a),me(d,"CVER",22),this.D&&me(d,"X-HTTP-Session-Id",this.D),$s(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(qm(D)))+"&"+h:this.m&&Bc(d,this.m,D)),zc(this.h,b),this.Ua&&me(d,"TYPE","init"),this.P?(me(d,"$req",h),me(d,"SID","null"),b.T=!0,Mc(b,d,null)):Mc(b,d,h),this.G=2}}else this.G==3&&(a?eg(this,a):this.i.length==0||Dm(this.h)||eg(this))};function eg(a,h){var d;h?d=h.l:d=a.U++;const m=En(a.I);me(m,"SID",a.K),me(m,"RID",d),me(m,"AID",a.T),$s(a,m),a.m&&a.o&&Bc(m,a.m,a.o),d=new qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=tg(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),zc(a.h,d),Mc(d,m,h)}function $s(a,h){a.H&&U(a.H,function(d,m){me(h,m,d)}),a.l&&Fm({},function(d,m){me(h,m,d)})}function tg(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var b=a.i;let D=-1;for(;;){const j=["count="+d];D==-1?0<d?(D=b[0].g,j.push("ofs="+D)):D=0:j.push("ofs="+D);let fe=!0;for(let We=0;We<d;We++){let ae=b[We].g;const Ze=b[We].map;if(ae-=D,0>ae)D=Math.max(0,b[We].g-100),fe=!1;else try{nI(Ze,j,"req"+ae+"_")}catch{m&&m(Ze)}}if(fe){m=j.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function ng(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;gn||ee(),B||(gn(),B=!0),Y.add(h,a),a.v=0}}function Wc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Os(g(a.Fa,a),sg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Os(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Ba(this),rg(this))};function Hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rg(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=En(a.qa);me(h,"RID","rpc"),me(h,"SID",a.K),me(h,"AID",a.T),me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(h,"TO",a.ja),me(h,"TYPE","xmlhttp"),$s(a,h),a.m&&a.o&&Bc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ua(En(h)),d.m=null,d.P=!0,bm(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ba(this),Wc(this),ct(19))};function Wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ig(a,h){var d=null;if(a.g==h){Wa(a),Hc(a),a.g=null;var m=2}else if(jc(a.h,h))d=h.D,Vm(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;m=Oa(),ut(m,new Am(m,d)),$a(a)}else ng(a);else if(b=h.s,b==3||b==0&&0<h.X||!(m==1&&oI(a,h)||m==2&&Wc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function sg(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function jr(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const b=!m;m=new Ur(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ma(m,"https"),Ua(m),b?ZT(m.toString(),d):eI(m.toString(),d)}else ct(2);a.G=0,a.l&&a.l.sa(h),og(a),Zm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function og(a){if(a.G=0,a.ka=[],a.l){const h=Mm(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function ag(a,h,d){var m=d instanceof Ur?En(d):new Ur(d);if(m.g!="")h&&(m.g=h+"."+m.g),Fa(m,m.s);else{var b=l.location;m=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var D=new Ur(null);m&&Ma(D,m),h&&(D.g=h),b&&Fa(D,b),d&&(D.l=d),m=D}return d=a.D,h=a.ya,d&&h&&me(m,d,h),me(m,"VER",a.la),$s(a,m),m}function lg(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ae(new Us({eb:d})):new Ae(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ug(){}t=ug.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ha(){}Ha.prototype.g=function(a,h){return new Et(a,h)};function Et(a,h){Je.call(this),this.g=new Jm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ii(this)}P(Et,Je),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){$c(this.g)},Et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=xc(a),a=d);h.i.push(new $T(h.Ya++,a)),h.G==3&&$a(h)},Et.prototype.N=function(){this.g.l=null,delete this.j,$c(this.g),delete this.g,Et.aa.N.call(this)};function cg(a){Oc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(cg,Oc);function hg(){Dc.call(this),this.status=1}P(hg,Dc);function Ii(a){this.g=a}P(Ii,ug),Ii.prototype.ua=function(){ut(this.g,"a")},Ii.prototype.ta=function(a){ut(this.g,new cg(a))},Ii.prototype.sa=function(a){ut(this.g,new hg)},Ii.prototype.ra=function(){ut(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,NE=function(){return new Ha},xE=function(){return Oa()},bE=Mr,zf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Da.NO_ERROR=0,Da.TIMEOUT=8,Da.HTTP_ERROR=6,zl=Da,Pm.COMPLETE="complete",RE=Pm,Tm.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",Je.prototype.listen=Je.prototype.K,oo=Tm,CE=Us,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,PE=Ae}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const ry="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Ss="10.12.1";/**
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
 */const li=new hp("@firebase/firestore");function Js(){return li.logLevel}function H(t,...e){if(li.logLevel<=ie.DEBUG){const n=e.map(Ip);li.debug(`Firestore (${Ss}): ${t}`,...n)}}function Fn(t,...e){if(li.logLevel<=ie.ERROR){const n=e.map(Ip);li.error(`Firestore (${Ss}): ${t}`,...n)}}function cs(t,...e){if(li.logLevel<=ie.WARN){const n=e.map(Ip);li.warn(`Firestore (${Ss}): ${t}`,...n)}}function Ip(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function pe(t,e){t||X()}function Z(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class OE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rb{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new OE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new it(e)}}class bb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ob{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new Nb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Db(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class DE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Db(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Qo{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const Lb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Qo{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return Lb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Re.fromString(e))}static fromName(e){return new K(Re.fromString(e).popFirst(5))}static empty(){return new K(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Re(e.slice()))}}function Vb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new kr(i,K.empty(),e)}function Mb(t){return new kr(t.readTime,t.key,-1)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(J.min(),K.empty(),-1)}static max(){return new kr(J.max(),K.empty(),-1)}}function Fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wa(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Ub)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function zb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sp.oe=-1;function cc(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function Bb(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function iy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}}class fl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sy(this.data.getIterator())}getIteratorFrom(e){return new sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Qe(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VE("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const $b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(pe(!!t),typeof t=="string"){let e=0;const n=$b.exec(t);if(pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function kp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ap(t){const e=t.mapValue.fields.__previous_value__;return kp(e)?Ap(e):e}function Yo(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class Wb{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const dl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kp(t)?4:Hb(t)?9007199254740991:10:X()}function pn(t,e){if(t===e)return!0;const n=ci(t);if(n!==ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),l=Ar(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),l=Oe(s.doubleValue);return o===l?Pu(o)===Pu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(iy(o)!==iy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Jo(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=ci(t),r=ci(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Oe(s.integerValue||s.doubleValue),u=Oe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return oy(t.timestampValue,e.timestampValue);case 4:return oy(Yo(t),Yo(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ui(s),u=ui(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=le(l[c],u[c]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(Oe(s.latitude),Oe(o.latitude));return l!==0?l:le(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const f=fs(l[c],u[c]);if(f)return f}return le(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===dl.mapValue&&o===dl.mapValue)return 0;if(s===dl.mapValue)return 1;if(o===dl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=le(u[p],f[p]);if(g!==0)return g;const w=fs(l[u[p]],c[f[p]]);if(w!==0)return w}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Ar(t),r=Ar(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function ds(t){return Bf(t)}function Bf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bf(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function $f(t){return!!t&&"integerValue"in t}function Pp(t){return!!t&&"arrayValue"in t}function ay(t){return!!t&&"nullValue"in t}function ly(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bl(t){return!!t&&"mapValue"in t}function Eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Eo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(Eo(this.value))}}function ME(t){const e=[];return ks(t.fields,(n,r)=>{const i=new Ke([n]);if(Bl(r)){const s=ME(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,J.min(),J.min(),J.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,J.min(),J.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,J.min(),J.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cu{constructor(e,n){this.position=e,this.inclusive=n}}function uy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ru{constructor(e,n="asc"){this.field=e,this.dir=n}}function qb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class FE{}class Me extends FE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gb(e,n,r):n==="array-contains"?new Xb(e,r):n==="in"?new Jb(e,r):n==="not-in"?new Zb(e,r):n==="array-contains-any"?new e2(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Qb(e,r):new Yb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fs(n,this.value)):n!==null&&ci(this.value)===ci(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends FE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new mn(e,n)}matches(e){return UE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function UE(t){return t.op==="and"}function jE(t){return Kb(t)&&UE(t)}function Kb(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Wf(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(jE(t))return t.filters.map(e=>Wf(e)).join(",");{const e=t.filters.map(n=>Wf(n)).join(",");return`${t.op}(${e})`}}function zE(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(t,e):t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&zE(o,i.filters[l]),!0):!1}(t,e):void X()}function BE(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(BE).join(" ,")+"}"}(t):"Filter"}class Gb extends Me{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qb extends Me{constructor(e,n){super(e,"in",n),this.keys=$E("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Yb extends Me{constructor(e,n){super(e,"not-in",n),this.keys=$E("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $E(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Xb extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pp(n)&&Jo(n.arrayValue,this.value)}}class Jb extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class Zb extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class e2 extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
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
 */class t2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function hy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new t2(t,e,n,r,i,s,o)}function Cp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.ue=n}return e.ue}function Rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cy(t.startAt,e.startAt)&&cy(t.endAt,e.endAt)}function Hf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class hc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function n2(t,e,n,r,i,s,o,l){return new hc(t,e,n,r,i,s,o,l)}function bp(t){return new hc(t)}function fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r2(t){return t.collectionGroup!==null}function To(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Qe(Ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ru(s,r))}),n.has(Ke.keyField().canonicalString())||e.ce.push(new Ru(Ke.keyField(),r))}return e.ce}function fn(t){const e=Z(t);return e.le||(e.le=i2(e,To(t))),e.le}function i2(t,e){if(t.limitType==="F")return hy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ru(i.field,s)});const n=t.endAt?new Cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cu(t.startAt.position,t.startAt.inclusive):null;return hy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qf(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fc(t,e){return Rp(fn(t),fn(e))&&t.limitType===e.limitType}function WE(t){return`${Cp(fn(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>BE(i)).join(", ")}]`),cc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ds(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=uy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,To(r),i)||r.endAt&&!function(o,l,u){const c=uy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,To(r),i))}(t,e)}function s2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HE(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=o2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function o2(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?fs(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LE(this.inner)}size(){return this.innerSize}}/**
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
 */const a2=new ke(K.comparator);function Un(){return a2}const qE=new ke(K.comparator);function ao(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function KE(t){let e=qE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Io()}function GE(){return Io()}function Io(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const l2=new ke(K.comparator),u2=new Qe(K.comparator);function re(...t){let e=u2;for(const n of t)e=e.add(n);return e}const c2=new Qe(le);function h2(){return c2}/**
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
 */function QE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function YE(t){return{integerValue:""+t}}function f2(t,e){return Bb(e)?YE(e):QE(t,e)}/**
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
 */class pc{constructor(){this._=void 0}}function d2(t,e,n){return t instanceof bu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kp(s)&&(s=Ap(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Zo?JE(t,e):t instanceof ea?ZE(t,e):function(i,s){const o=XE(i,s),l=dy(o)+dy(i.Pe);return $f(o)&&$f(i.Pe)?YE(l):QE(i.serializer,l)}(t,e)}function p2(t,e,n){return t instanceof Zo?JE(t,e):t instanceof ea?ZE(t,e):n}function XE(t,e){return t instanceof xu?function(r){return $f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bu extends pc{}class Zo extends pc{constructor(e){super(),this.elements=e}}function JE(t,e){const n=e1(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends pc{constructor(e){super(),this.elements=e}}function ZE(t,e){let n=e1(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class xu extends pc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dy(t){return Oe(t.integerValue||t.doubleValue)}function e1(t){return Pp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function m2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Zo&&i instanceof Zo||r instanceof ea&&i instanceof ea?hs(r.elements,i.elements,pn):r instanceof xu&&i instanceof xu?pn(r.Pe,i.Pe):r instanceof bu&&i instanceof bu}(t.transform,e.transform)}class g2{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function t1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new r1(t.key,Nn.none()):new Ta(t.key,t.data,Nn.none());{const n=t.data,r=Vt.empty();let i=new Qe(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _i(t.key,r,new Gt(i.toArray()),Nn.none())}}function v2(t,e,n){t instanceof Ta?function(i,s,o){const l=i.value.clone(),u=my(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(i,s,o){if(!$l(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=my(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(n1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof Ta?function(s,o,l,u){if(!$l(s.precondition,o))return l;const c=s.value.clone(),f=gy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(s,o,l,u){if(!$l(s.precondition,o))return l;const c=gy(s.fieldTransforms,u,o),f=o.data;return f.setAll(n1(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return $l(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function y2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=XE(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function py(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hs(r,i,(s,o)=>m2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends mc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _i extends mc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function n1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function my(t,e,n){const r=new Map;pe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,p2(o,l,n[i]))}return r}function gy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,d2(s,o,e))}return r}class r1 extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _2 extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class w2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&v2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=GE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=t1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>py(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>py(n,r))}}class xp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length);let i=function(){return l2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xp(e,n,r,i)}}/**
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
 */class E2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class T2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,se;function I2(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function i1(t){if(t===void 0)return Fn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ne.OK:return M.OK;case Ne.CANCELLED:return M.CANCELLED;case Ne.UNKNOWN:return M.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return M.INTERNAL;case Ne.UNAVAILABLE:return M.UNAVAILABLE;case Ne.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ne.NOT_FOUND:return M.NOT_FOUND;case Ne.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ne.ABORTED:return M.ABORTED;case Ne.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ne.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(se=Ne||(Ne={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function S2(){return new TextEncoder}/**
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
 */const k2=new Jr([4294967295,4294967295],0);function vy(t){const e=S2().encode(t),n=new AE;return n.update(e),new Uint8Array(n.digest())}function yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class Np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Jr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Jr.fromNumber(r)));return i.compare(k2)===1&&(i=new Jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vy(e),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Np(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=vy(e),[r,i]=yy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(J.min(),i,new ke(le),Un(),re())}}class Ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,re(),re(),re())}}/**
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
 */class Wl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class s1{constructor(e,n){this.targetId=e,this.me=n}}class o1{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class _y{constructor(){this.fe=0,this.ge=Ey(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Ia(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Ey()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class A2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=wy(),this.Qe=new ke(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Hf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ot.newNoDocument(o,J.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ui(r).toUint8Array()}catch(u){if(u instanceof VE)return cs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Np(o,i,s)}catch(u){return cs(u instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Hf(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ot.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=re();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new gc(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=wy(),this.Qe=new ke(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new _y,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Qe(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _y),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wy(){return new ke(K.comparator)}function Ey(){return new ke(K.comparator)}const P2={asc:"ASCENDING",desc:"DESCENDING"},C2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R2={and:"AND",or:"OR"};class b2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kf(t,e){return t.useProto3Json||cc(e)?e:{value:e}}function Nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function a1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function x2(t,e){return Nu(t,e.toTimestamp())}function dn(t){return pe(!!t),J.fromTimestamp(function(n){const r=Ar(n);return new Ue(r.seconds,r.nanos)}(t))}function Op(t,e){return Gf(t,e).canonicalString()}function Gf(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function l1(t){const e=Re.fromString(t);return pe(d1(e)),e}function Qf(t,e){return Op(t.databaseId,e.path)}function Ph(t,e){const n=l1(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(c1(n))}function u1(t,e){return Op(t.databaseId,e)}function N2(t){const e=l1(t);return e.length===4?Re.emptyPath():c1(e)}function Yf(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function c1(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ty(t,e,n){return{name:Qf(t,e),fields:n.value.mapValue.fields}}function O2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(pe(f===void 0||typeof f=="string"),lt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:i1(c.code);return new G(f,c.message||"")}(o);n=new o1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ph(t,r.document.name),s=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):J.min(),l=new Vt({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Wl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ph(t,r.document),s=r.readTime?dn(r.readTime):J.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Wl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ph(t,r.document),s=r.removedTargetIds||[];n=new Wl([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new T2(i,s),l=r.targetId;n=new s1(l,o)}}return n}function D2(t,e){let n;if(e instanceof Ta)n={update:Ty(t,e.key,e.value)};else if(e instanceof r1)n={delete:Qf(t,e.key)};else if(e instanceof _i)n={update:Ty(t,e.key,e.data),updateMask:$2(e.fieldMask)};else{if(!(e instanceof _2))return X();n={verify:Qf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof bu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:x2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function L2(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?dn(i.updateTime):dn(s);return o.isEqual(J.min())&&(o=dn(s)),new g2(o,i.transformResults||[])}(n,e))):[]}function V2(t,e){return{documents:[u1(t,e.path)]}}function M2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=u1(t,i);const s=function(c){if(c.length!==0)return f1(mn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Pi(g.field),direction:j2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Kf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function F2(t){let e=N2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=h1(p);return g instanceof mn&&jE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Ru(Ci(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,cc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,w=p.values||[];return new Cu(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,w=p.values||[];return new Cu(w,g)}(n.endAt)),n2(e,i,o,s,l,"F",u,c)}function U2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function h1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ci(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ci(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>h1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function j2(t){return P2[t]}function z2(t){return C2[t]}function B2(t){return R2[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Ci(t){return Ke.fromServerFormat(t.fieldPath)}function f1(t){return t instanceof Me?function(n){if(n.op==="=="){if(ly(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(ay(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ly(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(ay(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:z2(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(i=>f1(i));return r.length===1?r[0]:{compositeFilter:{op:B2(n.op),filters:r}}}(t):X()}function $2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function d1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ur{constructor(e,n,r,i,s=J.min(),o=J.min(),l=lt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class W2{constructor(e){this.ct=e}}function H2(t){const e=F2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qf(e,e.limit,"L"):e}/**
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
 */class q2{constructor(){this._n=new K2}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(kr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class K2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(Re.comparator)).toArray()}}/**
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
 */class ps{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ps(0)}static Ln(){return new ps(-1)}}/**
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
 */class G2{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Q2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Y2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,Gt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ao();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Un();const o=Io(),l=function(){return Io()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof _i)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),So(f.mutation,c,f.mutation.getFieldMask(),Ue.now())):o.set(c.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new Q2(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Io();let i=new ke((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Gt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=GE();f.forEach(g=>{if(!s.has(g)){const w=t1(n.get(g),r.get(g));w!==null&&p.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Kr());let l=-1,u=s;return o.next(c=>V.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:KE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ao();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,g){return new hc(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,ot.newInvalidDocument(f)))});let l=ao();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&So(f.mutation,c,Gt.empty(),Ue.now()),dc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class X2{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:H2(i.bundledQuery),readTime:dn(i.readTime)}}(n)),V.resolve()}}/**
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
 */class J2{constructor(){this.overlays=new ke(K.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Kr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new E2(n,r));let s=this.hr.get(n);s===void 0&&(s=re(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Dp{constructor(){this.Pr=new Qe(ze.Ir),this.Tr=new Qe(ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new Re([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new Re([])),r=new ze(n,e),i=new ze(n,e+1);let s=re();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
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
 */class Z2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Qe(ze.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new w2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(le);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new ze(new K(s),0);let l=new Qe(le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),V.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ze(n,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ex{constructor(e){this.vr=e,this.docs=function(){return new ke(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Fb(Mb(f),r)<=0||(i.has(f.key)||dc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Fr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tx(this)}getSize(e){return V.resolve(this.size)}}class tx extends G2{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class nx{constructor(e){this.persistence=e,this.Mr=new As(n=>Cp(n),Rp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Dp,this.targetCount=0,this.Lr=ps.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
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
 */class rx{constructor(e,n){this.Br={},this.overlays={},this.kr=new Sp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nx(this),this.indexManager=new q2,this.remoteDocumentCache=function(i){return new ex(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new W2(n),this.$r=new X2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new J2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Z2(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new ix(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class ix extends jb{constructor(e){super(),this.currentSequenceNumber=e}}class Lp{constructor(e){this.persistence=e,this.zr=new Dp,this.jr=null}static Hr(e){return new Lp(e)}get Jr(){if(this.jr)return this.jr;throw X()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=K.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Vp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vp(e,n.fromCache,r,i)}}/**
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
 */class sx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ox{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return GA()?8:zb(Xe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sx;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Js()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(Js()<=ie.DEBUG&&H("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Js()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):V.resolve())}ji(e,n){if(fy(n))return V.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qf(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,qf(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return fy(n)||i.isEqual(J.min())?V.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?V.resolve(null):(Js()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.es(e,o,n,Vb(i,-1)).next(l=>l))})}Zi(e,n){let r=new Qe(HE(e));return n.forEach((i,s)=>{dc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Js()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.zi.getDocumentsMatchingQuery(e,n,kr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ax{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ke(le),this.rs=new As(s=>Cp(s),Rp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y2(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function lx(t,e,n,r){return new ax(t,e,n,r)}async function p1(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function ux(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let w=V.resolve();return g.forEach(P=>{w=w.next(()=>f.getEntry(u,P)).next(R=>{const N=c.docVersions.get(P);pe(N!==null),R.version.compareTo(N)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),f.addEntry(R)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function m1(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function cx(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,p)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(lt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(p,w),function(R,N,T){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,w,f)&&l.push(n.Qr.updateTargetData(s,w))});let u=Un(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(hx(s,o,e.documentUpdates).next(f=>{u=f.cs,c=f.ls})),!r.isEqual(J.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function hx(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function fx(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dx(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Xf(t,e,n){const r=Z(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ea(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Iy(t,e,n){const r=Z(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Z(u),g=p.rs.get(f);return g!==void 0?V.resolve(p.ns.get(g)):p.Qr.getTargetData(c,f)}(r,o,fn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(l=>(px(r,s2(e),l),{documents:l,hs:s})))}function px(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Sy{constructor(){this.activeTargetIds=h2()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mx{constructor(){this.no=new Sy,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Sy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gx{io(e){}shutdown(){}}/**
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
 */class ky{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pl=null;function Ch(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}/**
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
 */const vx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yx{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const rt="WebChannelConnection";class _x extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=Ch(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw cs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ss}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=vx[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Ch();return new Promise((o,l)=>{const u=new PE;u.setWithCredentials(!0),u.listenOnce(RE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case zl.NO_ERROR:const f=u.getResponseJson();H(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case zl.TIMEOUT:H(rt,`RPC '${e}' ${s} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case zl.HTTP_ERROR:const p=u.getStatus();if(H(rt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const P=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(w.status);l(new G(P,w.message))}else l(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(rt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(rt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Ch(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NE(),l=xE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new CE({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(rt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,w=!1;const P=new yx({lo:N=>{w?H(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(H(rt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(rt,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},ho:()=>p.close()}),R=(N,T,y)=>{N.listen(T,I=>{try{y(I)}catch(O){setTimeout(()=>{throw O},0)}})};return R(p,oo.EventType.OPEN,()=>{w||(H(rt,`RPC '${e}' stream ${i} transport opened.`),P.mo())}),R(p,oo.EventType.CLOSE,()=>{w||(w=!0,H(rt,`RPC '${e}' stream ${i} transport closed`),P.po())}),R(p,oo.EventType.ERROR,N=>{w||(w=!0,cs(rt,`RPC '${e}' stream ${i} transport errored:`,N),P.po(new G(M.UNAVAILABLE,"The operation could not be completed")))}),R(p,oo.EventType.MESSAGE,N=>{var T;if(!w){const y=N.data[0];pe(!!y);const I=y,O=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(O){H(rt,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let U=function(_){const S=Ne[_];if(S!==void 0)return i1(S)}(L),E=O.message;U===void 0&&(U=M.INTERNAL,E="Unknown error status: "+L+" with message "+O.message),w=!0,P.po(new G(U,E)),p.close()}else H(rt,`RPC '${e}' stream ${i} received:`,y),P.yo(y)}}),R(l,bE.STAT_EVENT,N=>{N.stat===zf.PROXY?H(rt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===zf.NOPROXY&&H(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function Rh(){return typeof document<"u"?document:null}/**
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
 */function vc(t){return new b2(t,!0)}/**
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
 */class g1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class v1{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new g1(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wx extends v1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=O2(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?dn(o.readTime):J.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Yf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Hf(u)?{documents:V2(s,u)}:{query:M2(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=a1(s,o.resumeToken);const c=Kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Nu(s,o.snapshotVersion.toTimestamp());const c=Kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=U2(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Yf(this.serializer),n.removeTarget=e,this.i_(n)}}class Ex extends v1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=L2(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.A_(r,n)}return pe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Yf(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>D2(this.serializer,r))};this.i_(n)}}/**
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
 */class Tx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Gf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Gf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Ix{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Fn(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Sx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{wi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.M_.add(4),await Sa(c),c.N_.set("Unknown"),c.M_.delete(4),await yc(c)}(this))})}),this.N_=new Ix(r,i)}}async function yc(t){if(wi(t))for(const e of t.x_)await e(!0)}async function Sa(t){for(const e of t.x_)await e(!1)}function y1(t,e){const n=Z(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),jp(n)?Up(n):Ps(n).Xo()&&Fp(n,e))}function Mp(t,e){const n=Z(t),r=Ps(n);n.F_.delete(e),r.Xo()&&_1(n,e),n.F_.size===0&&(r.Xo()?r.n_():wi(n)&&n.N_.set("Unknown"))}function Fp(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).P_(e)}function _1(t,e){t.L_.xe(e),Ps(t).I_(e)}function Up(t){t.L_=new A2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.N_.w_()}function jp(t){return wi(t)&&!Ps(t).Zo()&&t.F_.size>0}function wi(t){return Z(t).M_.size===0}function w1(t){t.L_=void 0}async function kx(t){t.N_.set("Online")}async function Ax(t){t.F_.forEach((e,n)=>{Fp(t,e)})}async function Px(t,e){w1(t),jp(t)?(t.N_.D_(e),Up(t)):t.N_.set("Unknown")}async function Cx(t,e,n){if(t.N_.set("Online"),e instanceof o1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof Wl?t.L_.Ke(e):e instanceof s1?t.L_.He(e):t.L_.We(e),!n.isEqual(J.min()))try{const r=await m1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.F_.get(c);f&&s.F_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.F_.get(u);if(!f)return;s.F_.set(u,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),_1(s,u);const p=new ur(f.target,u,c,f.sequenceNumber);Fp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!Ea(e))throw e;t.M_.add(1),await Sa(t),t.N_.set("Offline"),n||(n=()=>m1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await yc(t)})}function E1(t,e){return e().catch(n=>Ou(t,n,e))}async function _c(t){const e=Z(t),n=Pr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Rx(e);)try{const i=await fx(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,bx(e,i)}catch(i){await Ou(e,i)}T1(e)&&I1(e)}function Rx(t){return wi(t)&&t.v_.length<10}function bx(t,e){t.v_.push(e);const n=Pr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function T1(t){return wi(t)&&!Pr(t).Zo()&&t.v_.length>0}function I1(t){Pr(t).start()}async function xx(t){Pr(t).V_()}async function Nx(t){const e=Pr(t);for(const n of t.v_)e.d_(n.mutations)}async function Ox(t,e,n){const r=t.v_.shift(),i=xp.from(r,e,n);await E1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _c(t)}async function Dx(t,e){e&&Pr(t).E_&&await async function(r,i){if(function(o){return I2(o)&&o!==M.ABORTED}(i.code)){const s=r.v_.shift();Pr(r).t_(),await E1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _c(r)}}(t,e),T1(t)&&I1(t)}async function Ay(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.M_.add(3),await Sa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await yc(n)}async function Lx(t,e){const n=Z(t);e?(n.M_.delete(2),await yc(n)):e||(n.M_.add(2),await Sa(n),n.N_.set("Unknown"))}function Ps(t){return t.B_||(t.B_=function(n,r,i){const s=Z(n);return s.f_(),new wx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:kx.bind(null,t),To:Ax.bind(null,t),Ao:Px.bind(null,t),h_:Cx.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),jp(t)?Up(t):t.N_.set("Unknown")):(await t.B_.stop(),w1(t))})),t.B_}function Pr(t){return t.k_||(t.k_=function(n,r,i){const s=Z(n);return s.f_(),new Ex(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:xx.bind(null,t),Ao:Dx.bind(null,t),R_:Nx.bind(null,t),A_:Ox.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await _c(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class zp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new zp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bp(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Ea(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Py{constructor(){this.q_=new ke(K.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):X():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ms{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ms(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Vx{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Mx{constructor(){this.queries=new As(e=>WE(e),fc),this.onlineState="Unknown",this.z_=new Set}}async function Fx(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Vx,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Bp(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&$p(n)}async function Ux(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jx(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&$p(n)}function zx(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function $p(t){t.z_.forEach(e=>{e.next()})}var Jf,Cy;(Cy=Jf||(Jf={})).J_="default",Cy.Cache="cache";class Bx{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Jf.Cache}}/**
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
 */class S1{constructor(e){this.key=e}}class k1{constructor(e){this.key=e}}class $x{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=re(),this.mutatedKeys=re(),this.Ia=HE(e),this.Ta=new es(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Py,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),w=dc(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;g&&w?g.data.isEqual(w.data)?P!==R&&(r.track({type:3,doc:w}),N=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),N=!0,(u&&this.Ia(w,u)>0||c&&this.Ia(w,c)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),N=!0):g&&!w&&(r.track({type:1,doc:g}),N=!0,(u||c)&&(l=!0)),N&&(w?(o=o.add(w),s=R?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,p)=>function(w,P){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return R(w)-R(P)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ms(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Py,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=re(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new k1(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new S1(r))}),n}pa(e){this.la=e.hs,this.Pa=re();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ms.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Wx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Hx{constructor(e){this.key=e,this.wa=!1}}class qx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new As(l=>WE(l),fc),this.Da=new Map,this.Ca=new Set,this.va=new ke(K.comparator),this.Fa=new Map,this.Ma=new Dp,this.xa={},this.Oa=new Map,this.Na=ps.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Kx(t,e,n=!0){const r=x1(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await A1(r,e,n,!0),i}async function Gx(t,e){const n=x1(t);await A1(n,e,!0,!1)}async function A1(t,e,n,r){const i=await dx(t.localStore,fn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Qx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&y1(t.remoteStore,i),l}async function Qx(t,e,n,r,i){t.Ba=(p,g,w)=>async function(R,N,T,y){let I=N.view.da(T);I.Xi&&(I=await Iy(R.localStore,N.query,!1).then(({documents:E})=>N.view.da(E,I)));const O=y&&y.targetChanges.get(N.targetId),L=y&&y.targetMismatches.get(N.targetId)!=null,U=N.view.applyChanges(I,R.isPrimaryClient,O,L);return by(R,N.targetId,U.fa),U.snapshot}(t,p,g,w);const s=await Iy(t.localStore,e,!0),o=new $x(e,s.hs),l=o.da(s.documents),u=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);by(t,n,c.fa);const f=new Wx(e,n,o);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function Yx(t,e,n){const r=Z(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!fc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Xf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Mp(r.remoteStore,i.targetId),Zf(r,i.targetId)}).catch(wa)):(Zf(r,i.targetId),await Xf(r.localStore,i.targetId,!0))}async function Xx(t,e){const n=Z(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mp(n.remoteStore,r.targetId))}async function Jx(t,e,n){const r=sN(t);try{const i=await function(o,l){const u=Z(o),c=Ue.now(),f=l.reduce((w,P)=>w.add(P.key),re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Un(),R=re();return u.os.getEntries(w,f).next(N=>{P=N,P.forEach((T,y)=>{y.isValidDocument()||(R=R.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,P)).next(N=>{p=N;const T=[];for(const y of l){const I=y2(y,p.get(y.key).overlayedDocument);I!=null&&T.push(new _i(y.key,I,ME(I.value.mapValue),Nn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,T,l)}).next(N=>{g=N;const T=N.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(w,N.batchId,T)})}).then(()=>({batchId:g.batchId,changes:KE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ke(le)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ka(r,i.changes),await _c(r.remoteStore)}catch(i){const s=Bp(i,"Failed to persist write");n.reject(s)}}async function P1(t,e){const n=Z(t);try{const r=await cx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?pe(o.wa):i.removedDocuments.size>0&&(pe(o.wa),o.wa=!1))}),await ka(n,r,e)}catch(r){await wa(r)}}function Ry(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.U_)g.j_(l)&&(c=!0)}),c&&$p(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zx(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ke(K.comparator);o=o.insert(s,ot.newNoDocument(s,J.min()));const l=re().add(s),u=new gc(J.min(),new Map,new ke(le),o,l);await P1(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Wp(r)}else await Xf(r.localStore,e,!1).then(()=>Zf(r,e,n)).catch(wa)}async function eN(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await ux(n.localStore,e);R1(n,r,null),C1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,i)}catch(i){await wa(i)}}async function tN(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(pe(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);R1(r,e,n),C1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,i)}catch(i){await wa(i)}}function C1(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function R1(t,e,n){const r=Z(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Zf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||b1(t,r)})}function b1(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Mp(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Wp(t))}function by(t,e,n){for(const r of n)r instanceof S1?(t.Ma.addReference(r.key,e),nN(t,r)):r instanceof k1?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||b1(t,r.key)):X()}function nN(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Wp(t))}function Wp(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new K(Re.fromString(e)),r=t.Na.next();t.Fa.set(r,new Hx(n)),t.va=t.va.insert(n,r),y1(t.remoteStore,new ur(fn(bp(n.path)),r,"TargetPurposeLimboResolution",Sp.oe))}}async function ka(t,e,n){const r=Z(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const f=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Vp.Ki(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,g=>V.forEach(g.qi,w=>f.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>V.forEach(g.Qi,w=>f.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!Ea(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const w=f.ns.get(g),P=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(P);f.ns=f.ns.insert(g,R)}}}(r.localStore,s))}async function rN(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await p1(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.us)}}function iN(t,e){const n=Z(t),r=n.Fa.get(e);if(r&&r.wa)return re().add(r.key);{let i=re();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function x1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=P1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zx.bind(null,e),e.Sa.h_=jx.bind(null,e.eventManager),e.Sa.ka=zx.bind(null,e.eventManager),e}function sN(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tN.bind(null,e),e}class xy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lx(this.persistence,new ox,e.initialUser,this.serializer)}createPersistence(e){return new rx(Lp.Hr,this.serializer)}createSharedClientState(e){return new mx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ry(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rN.bind(null,this.syncEngine),await Lx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Mx}()}createDatastore(e){const n=vc(e.databaseInfo.databaseId),r=function(s){return new _x(s)}(e.databaseInfo);return function(s,o,l,u){return new Tx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Sx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ry(this.syncEngine,n,0),function(){return ky.D()?new ky:new gx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new qx(i,s,o,l,u,c);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Z(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Sa(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class aN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class lN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=DE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await p1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ny(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ay(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ay(e.remoteStore,i)),t._onlineComponents=e}function uN(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function cN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uN(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await bh(t,new xy)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await bh(t,new xy);return t._offlineComponents}async function N1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Ny(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Ny(t,new oN))),t._onlineComponents}function hN(t){return N1(t).then(e=>e.syncEngine)}async function fN(t){const e=await N1(t),n=e.eventManager;return n.onListen=Kx.bind(null,e.syncEngine),n.onUnlisten=Yx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Gx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Xx.bind(null,e.syncEngine),n}function dN(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new aN({next:g=>{o.enqueueAndForget(()=>Ux(s,p));const w=g.docs.has(l);!w&&g.fromCache?c.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?c.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new Bx(bp(l.path),f,{includeMetadataChanges:!0,ra:!0});return Fx(s,p)}(await fN(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function O1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Oy=new Map;/**
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
 */function pN(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mN(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dy(t){if(!K.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hp(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ly{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ly({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ly(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pb;switch(r.type){case"firstParty":return new xb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Oy.get(n);r&&(H("ComponentProvider","Removing Datastore"),Oy.delete(n),r.terminate())}(this),Promise.resolve()}}function gN(t,e,n,r={}){var i;const s=(t=ta(t,qp))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=it.MOCK_USER;else{l=BA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(c)}t._authCredentials=new Cb(new OE(l,u))}}/**
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
 */class Kp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kp(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new na(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class na extends Kp{constructor(e,n,r){super(e,n,bp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new K(e))}withConverter(e){return new na(this.firestore,e,this._path)}}function Gp(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=DE.newId()),pN("doc","path",e),t instanceof qp){const r=Re.fromString(e,...n);return Dy(r),new Ut(t,null,new K(r))}{if(!(t instanceof Ut||t instanceof na))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Dy(r),new Ut(t.firestore,t instanceof na?t.converter:null,new K(r))}}/**
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
 */class vN{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new g1(this,"async_queue_retry"),this.hu=()=>{const n=Rh();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Rh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Tr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ea(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=zp.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&X()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Qp extends qp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new vN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||L1(this),this._firestoreClient.terminate()}}function yN(t,e){const n=typeof t=="object"?t:Ww(),r=typeof t=="string"?t:"(default)",i=dp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jA("firestore");s&&gN(i,...s)}return i}function D1(t){return t._firestoreClient||L1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function L1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new Wb(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,O1(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new lN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gs(lt.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class V1{constructor(e){this._methodName=e}}/**
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
 */class Xp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const _N=/^__.*__$/;class wN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}function M1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Jp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Du(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(M1(this.fu)&&_N.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class EN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vc(e)}Fu(e,n,r,i=!1){return new Jp({fu:e,methodName:n,vu:r,path:Ke.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TN(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new EN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IN(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);z1("Data must be an object, but it was:",o,r);const l=U1(r,o);let u,c;if(s.merge)u=new Gt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=SN(e,p,n);if(!o.contains(g))throw new G(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);AN(f,g)||f.push(g)}u=new Gt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new wN(new Vt(l),u,c)}function F1(t,e){if(j1(t=Pt(t)))return z1("Unsupported field value:",e,t),U1(t,e);if(t instanceof V1)return function(r,i){if(!M1(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=F1(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Nu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nu(i.serializer,s)}}if(r instanceof Xp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gs)return{bytesValue:a1(i.serializer,r._byteString)};if(r instanceof Ut){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Op(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Hp(r)}`)}(t,e)}function U1(t,e){const n={};return LE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,i)=>{const s=F1(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function j1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Xp||t instanceof gs||t instanceof Ut||t instanceof V1)}function z1(t,e,n){if(!j1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hp(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function SN(t,e,n){if((e=Pt(e))instanceof Yp)return e._internalPath;if(typeof e=="string")return B1(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const kN=new RegExp("[~\\*/\\[\\]]");function B1(t,e,n){if(e.search(kN)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yp(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(M.INVALID_ARGUMENT,l+t+u)}function AN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(W1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PN extends $1{data(){return super.data()}}function W1(t,e){return typeof e=="string"?B1(t,e):e instanceof Yp?e._internalPath:e._delegate._internalPath}class CN{convertValue(e,n="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Xp(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ap(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);pe(d1(r));const i=new Xo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function RN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class bN{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class H1 extends $1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(W1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xN extends H1{data(e={}){return super.data(e)}}/**
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
 */function q1(t){t=ta(t,Ut);const e=ta(t.firestore,Qp);return dN(D1(e),t._key).then(n=>LN(e,t,n))}class NN extends CN{constructor(e){super(),this.firestore=e}convertBytes(e){return new gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function ON(t,e,n){t=ta(t,Ut);const r=ta(t.firestore,Qp),i=RN(t.converter,e);return DN(r,[IN(TN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nn.none())])}function DN(t,e){return function(r,i){const s=new Tr;return r.asyncQueue.enqueueAndForget(async()=>Jx(await hN(r),i,s)),s.promise}(D1(t),e)}function LN(t,e,n){const r=n.docs.get(e._key),i=new NN(t);return new H1(t,i,e._key,r,new bN(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ss=i})(Ts),us(new ii("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Qp(new Rb(r.getProvider("auth-internal")),new Ob(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Er(ry,"4.6.3",e),Er(ry,"4.6.3","esm2017")})();const VN={apiKey:"AIzaSyBqmVfoEIdv7WdIQJBRJ_nBODHWeUQZ7Z4",authDomain:"healthhub-ddadd.firebaseapp.com",projectId:"healthhub-ddadd",storageBucket:"healthhub-ddadd.appspot.com",messagingSenderId:"649780624951",appId:"1:649780624951:web:fdb16d327a06ba39b589b2",measurementId:"G-47M3SK3XC9"},K1=$w(VN),Zs=kb(K1),MN=yN(K1),hi={register:(t,e)=>lR(Zs,t,e),login:(t,e)=>uR(Zs,t,e),logout:()=>dR(Zs),onAuthStateChanged:t=>fR(Zs,t),currentUser:()=>Zs.currentUser,db:()=>MN},G1=z.createContext(),FN=({children:t})=>{const[e,n]=z.useState({userId:"",email:"",username:""}),[r,i]=z.useState(!0),s=async o=>(await q1(Gp(hi.db(),"users",o))).data();return z.useEffect(()=>{const o=hi.onAuthStateChanged(l=>{l?s(l.uid).then(u=>{n({userId:l.uid,email:l.email,username:u.username})}):n({userId:"",email:""}),i(!1)});return()=>o()},[]),C.jsx(G1.Provider,{value:{user:e,setUser:n,loading:r},children:t})},Aa=()=>z.useContext(G1);var ed={},Vy=Dk;ed.createRoot=Vy.createRoot,ed.hydrateRoot=Vy.hydrateRoot;const UN="_navWrapper_178ws_5",jN="_navContent_178ws_15",zN="_siteNavigation_178ws_25",BN="_username_178ws_87",ml={navWrapper:UN,navContent:jN,siteNavigation:zN,username:BN},$N=()=>{const t=ic(),{user:e,setUser:n}=Aa(),r=async()=>{await hi.logout(),n({}),t("/")};return C.jsx("div",{className:ml.navWrapper,children:C.jsxs("div",{className:ml.navContent,children:[e.username&&C.jsxs("p",{className:ml.username,children:["Welcome, ",e.username,"!"]}),C.jsxs("nav",{className:ml.siteNavigation,children:[C.jsxs("ul",{children:[C.jsx(It,{to:"/",children:"Home"}),C.jsx(It,{to:"catalog",children:"Catalog"}),e.username&&C.jsx(It,{to:"create",children:"Add"})]}),C.jsx("ul",{children:e.email?C.jsx(It,{onClick:r,children:"Logout"}):C.jsxs(C.Fragment,{children:[C.jsx(It,{to:"users/login",children:"Login"}),C.jsx(It,{to:"users/register",children:"Register"})]})})]})]})})};function My(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?My(Object(n),!0).forEach(function(r){je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):My(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Lu(t){"@babel/helpers - typeof";return Lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lu(t)}function WN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function HN(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function qN(t,e,n){return e&&HN(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zp(t,e){return GN(t)||YN(t,e)||Q1(t,e)||JN()}function Pa(t){return KN(t)||QN(t)||Q1(t)||XN()}function KN(t){if(Array.isArray(t))return td(t)}function GN(t){if(Array.isArray(t))return t}function QN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function YN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,l;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw l}}return r}}function Q1(t,e){if(t){if(typeof t=="string")return td(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return td(t,e)}}function td(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function XN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fy=function(){},em={},Y1={},X1=null,J1={mark:Fy,measure:Fy};try{typeof window<"u"&&(em=window),typeof document<"u"&&(Y1=document),typeof MutationObserver<"u"&&(X1=MutationObserver),typeof performance<"u"&&(J1=performance)}catch{}var ZN=em.navigator||{},Uy=ZN.userAgent,jy=Uy===void 0?"":Uy,Cr=em,_e=Y1,zy=X1,gl=J1;Cr.document;var Hn=!!_e.documentElement&&!!_e.head&&typeof _e.addEventListener=="function"&&typeof _e.createElement=="function",Z1=~jy.indexOf("MSIE")||~jy.indexOf("Trident/"),vl,yl,_l,wl,El,jn="___FONT_AWESOME___",nd=16,eT="fa",tT="svg-inline--fa",fi="data-fa-i2svg",rd="data-fa-pseudo-element",eO="data-fa-pseudo-element-pending",tm="data-prefix",nm="data-icon",By="fontawesome-i2svg",tO="async",nO=["HTML","HEAD","STYLE","SCRIPT"],nT=function(){try{return!0}catch{return!1}}(),ve="classic",Ce="sharp",rm=[ve,Ce];function Ca(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var ra=Ca((vl={},je(vl,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),je(vl,Ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),vl)),ia=Ca((yl={},je(yl,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),je(yl,Ce,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),yl)),sa=Ca((_l={},je(_l,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),je(_l,Ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_l)),rO=Ca((wl={},je(wl,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),je(wl,Ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),wl)),iO=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,rT="fa-layers-text",sO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oO=Ca((El={},je(El,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),je(El,Ce,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),El)),iT=[1,2,3,4,5,6,7,8,9,10],aO=iT.concat([11,12,13,14,15,16,17,18,19,20]),lO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oa=new Set;Object.keys(ia[ve]).map(oa.add.bind(oa));Object.keys(ia[Ce]).map(oa.add.bind(oa));var uO=[].concat(rm,Pa(oa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gr.GROUP,Gr.SWAP_OPACITY,Gr.PRIMARY,Gr.SECONDARY]).concat(iT.map(function(t){return"".concat(t,"x")})).concat(aO.map(function(t){return"w-".concat(t)})),ko=Cr.FontAwesomeConfig||{};function cO(t){var e=_e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(_e&&typeof _e.querySelector=="function"){var fO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fO.forEach(function(t){var e=Zp(t,2),n=e[0],r=e[1],i=hO(cO(n));i!=null&&(ko[r]=i)})}var sT={styleDefault:"solid",familyDefault:"classic",cssPrefix:eT,replacementClass:tT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ko.familyPrefix&&(ko.cssPrefix=ko.familyPrefix);var vs=$($({},sT),ko);vs.autoReplaceSvg||(vs.observeMutations=!1);var q={};Object.keys(sT).forEach(function(t){Object.defineProperty(q,t,{enumerable:!0,set:function(n){vs[t]=n,Ao.forEach(function(r){return r(q)})},get:function(){return vs[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){vs.cssPrefix=e,Ao.forEach(function(n){return n(q)})},get:function(){return vs.cssPrefix}});Cr.FontAwesomeConfig=q;var Ao=[];function dO(t){return Ao.push(t),function(){Ao.splice(Ao.indexOf(t),1)}}var Xn=nd,an={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pO(t){if(!(!t||!Hn)){var e=_e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=_e.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return _e.head.insertBefore(e,r),t}}var mO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){for(var t=12,e="";t-- >0;)e+=mO[Math.random()*62|0];return e}function Cs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function im(t){return t.classList?Cs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function oT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gO(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(oT(t[n]),'" ')},"").trim()}function wc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function sm(t){return t.size!==an.size||t.x!==an.x||t.y!==an.y||t.rotate!==an.rotate||t.flipX||t.flipY}function vO(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function yO(t){var e=t.transform,n=t.width,r=n===void 0?nd:n,i=t.height,s=i===void 0?nd:i,o=t.startCentered,l=o===void 0?!1:o,u="";return l&&Z1?u+="translate(".concat(e.x/Xn-r/2,"em, ").concat(e.y/Xn-s/2,"em) "):l?u+="translate(calc(-50% + ".concat(e.x/Xn,"em), calc(-50% + ").concat(e.y/Xn,"em)) "):u+="translate(".concat(e.x/Xn,"em, ").concat(e.y/Xn,"em) "),u+="scale(".concat(e.size/Xn*(e.flipX?-1:1),", ").concat(e.size/Xn*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var _O=`:root, :host {
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
}`;function aT(){var t=eT,e=tT,n=q.cssPrefix,r=q.replacementClass,i=_O;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var $y=!1;function xh(){q.autoAddCss&&!$y&&(pO(aT()),$y=!0)}var wO={mixout:function(){return{dom:{css:aT,insertCss:xh}}},hooks:function(){return{beforeDOMElementCreation:function(){xh()},beforeI2svg:function(){xh()}}}},zn=Cr||{};zn[jn]||(zn[jn]={});zn[jn].styles||(zn[jn].styles={});zn[jn].hooks||(zn[jn].hooks={});zn[jn].shims||(zn[jn].shims=[]);var Qt=zn[jn],lT=[],EO=function t(){_e.removeEventListener("DOMContentLoaded",t),Vu=1,lT.map(function(e){return e()})},Vu=!1;Hn&&(Vu=(_e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_e.readyState),Vu||_e.addEventListener("DOMContentLoaded",EO));function TO(t){Hn&&(Vu?setTimeout(t,0):lT.push(t))}function Ra(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?oT(t):"<".concat(e," ").concat(gO(r),">").concat(s.map(Ra).join(""),"</").concat(e,">")}function Wy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Nh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<o;u++)c=s[u],f=l(f,e[c],c,e);return f};function IO(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function id(t){var e=IO(t);return e.length===1?e[0].toString(16):null}function SO(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Hy(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function sd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Hy(e);typeof Qt.hooks.addPack=="function"&&!i?Qt.hooks.addPack(t,Hy(e)):Qt.styles[t]=$($({},Qt.styles[t]||{}),s),t==="fas"&&sd("fa",e)}var Tl,Il,Sl,Bi=Qt.styles,kO=Qt.shims,AO=(Tl={},je(Tl,ve,Object.values(sa[ve])),je(Tl,Ce,Object.values(sa[Ce])),Tl),om=null,uT={},cT={},hT={},fT={},dT={},PO=(Il={},je(Il,ve,Object.keys(ra[ve])),je(Il,Ce,Object.keys(ra[Ce])),Il);function CO(t){return~uO.indexOf(t)}function RO(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!CO(i)?i:null}var pT=function(){var e=function(s){return Nh(Bi,function(o,l,u){return o[u]=Nh(l,s,{}),o},{})};uT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var l=s[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=o})}return i}),cT=e(function(i,s,o){if(i[o]=o,s[2]){var l=s[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=o})}return i}),dT=e(function(i,s,o){var l=s[2];return i[o]=o,l.forEach(function(u){i[u]=o}),i});var n="far"in Bi||q.autoFetchSvg,r=Nh(kO,function(i,s){var o=s[0],l=s[1],u=s[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});hT=r.names,fT=r.unicodes,om=Ec(q.styleDefault,{family:q.familyDefault})};dO(function(t){om=Ec(t.styleDefault,{family:q.familyDefault})});pT();function am(t,e){return(uT[t]||{})[e]}function bO(t,e){return(cT[t]||{})[e]}function Qr(t,e){return(dT[t]||{})[e]}function mT(t){return hT[t]||{prefix:null,iconName:null}}function xO(t){var e=fT[t],n=am("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rr(){return om}var lm=function(){return{prefix:null,iconName:null,rest:[]}};function Ec(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=ra[r][t],s=ia[r][t]||ia[r][i],o=t in Qt.styles?t:null;return s||o||null}var qy=(Sl={},je(Sl,ve,Object.keys(sa[ve])),je(Sl,Ce,Object.keys(sa[Ce])),Sl);function Tc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},je(e,ve,"".concat(q.cssPrefix,"-").concat(ve)),je(e,Ce,"".concat(q.cssPrefix,"-").concat(Ce)),e),o=null,l=ve;(t.includes(s[ve])||t.some(function(c){return qy[ve].includes(c)}))&&(l=ve),(t.includes(s[Ce])||t.some(function(c){return qy[Ce].includes(c)}))&&(l=Ce);var u=t.reduce(function(c,f){var p=RO(q.cssPrefix,f);if(Bi[f]?(f=AO[l].includes(f)?rO[l][f]:f,o=f,c.prefix=f):PO[l].indexOf(f)>-1?(o=f,c.prefix=Ec(f,{family:l})):p?c.iconName=p:f!==q.replacementClass&&f!==s[ve]&&f!==s[Ce]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var g=o==="fa"?mT(c.iconName):{},w=Qr(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||w||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!Bi.far&&Bi.fas&&!q.autoFetchSvg&&(c.prefix="fas")}return c},lm());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&l===Ce&&(Bi.fass||q.autoFetchSvg)&&(u.prefix="fass",u.iconName=Qr(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Rr()||"fas"),u}var NO=function(){function t(){WN(this,t),this.definitions={}}return qN(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=$($({},n.definitions[l]||{}),o[l]),sd(l,o[l]);var u=sa[ve][l];u&&sd(u,o[l]),pT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],l=o.prefix,u=o.iconName,c=o.icon,f=c[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[l][p]=c)}),n[l][u]=c}),n}}]),t}(),Ky=[],$i={},ts={},OO=Object.keys(ts);function DO(t,e){var n=e.mixoutsTo;return Ky=t,$i={},Object.keys(ts).forEach(function(r){OO.indexOf(r)===-1&&delete ts[r]}),Ky.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Lu(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){$i[o]||($i[o]=[]),$i[o].push(s[o])})}r.provides&&r.provides(ts)}),n}function od(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=$i[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=$i[t]||[];i.forEach(function(s){s.apply(null,n)})}function Bn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ts[t]?ts[t].apply(null,e):void 0}function ad(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Rr();if(e)return e=Qr(n,e)||e,Wy(gT.definitions,n,e)||Wy(Qt.styles,n,e)}var gT=new NO,LO=function(){q.autoReplaceSvg=!1,q.observeMutations=!1,di("noAuto")},VO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Hn?(di("beforeI2svg",e),Bn("pseudoElements2svg",e),Bn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,TO(function(){FO({autoReplaceSvgRoot:n}),di("watch",e)})}},MO={icon:function(e){if(e===null)return null;if(Lu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ec(e[0]);return{prefix:r,iconName:Qr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(q.cssPrefix,"-"))>-1||e.match(iO))){var i=Tc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Rr(),iconName:Qr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Rr();return{prefix:s,iconName:Qr(s,e)||e}}}},bt={noAuto:LO,config:q,dom:VO,parse:MO,library:gT,findIconDefinition:ad,toHtml:Ra},FO=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?_e:n;(Object.keys(Qt.styles).length>0||q.autoFetchSvg)&&Hn&&q.autoReplaceSvg&&bt.dom.i2svg({node:r})};function Ic(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ra(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Hn){var r=_e.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function UO(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(sm(o)&&n.found&&!r.found){var l=n.width,u=n.height,c={x:l/u/2,y:.5};i.style=wc($($({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function jO(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:o}),children:r}]}]}function um(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,l=t.symbol,u=t.title,c=t.maskId,f=t.titleId,p=t.extra,g=t.watchable,w=g===void 0?!1:g,P=r.found?r:n,R=P.width,N=P.height,T=i==="fak",y=[q.replacementClass,s?"".concat(q.cssPrefix,"-").concat(s):""].filter(function(_){return p.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(p.classes).join(" "),I={children:[],attributes:$($({},p.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(N)})},O=T&&!~p.classes.indexOf("fa-fw")?{width:"".concat(R/N*16*.0625,"em")}:{};w&&(I.attributes[fi]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(f||aa())},children:[u]}),delete I.attributes.title);var L=$($({},I),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:l,styles:$($({},O),p.styles)}),U=r.found&&n.found?Bn("generateAbstractMask",L)||{children:[],attributes:{}}:Bn("generateAbstractIcon",L)||{children:[],attributes:{}},E=U.children,v=U.attributes;return L.children=E,L.attributes=v,l?jO(L):UO(L)}function Gy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,l=t.watchable,u=l===void 0?!1:l,c=$($($({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[fi]="");var f=$({},o.styles);sm(i)&&(f.transform=yO({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=wc(f);p.length>0&&(c.style=p);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function zO(t){var e=t.content,n=t.title,r=t.extra,i=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=wc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Oh=Qt.styles;function ld(t){var e=t[0],n=t[1],r=t.slice(4),i=Zp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Gr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Gr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Gr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var BO={found:!1,width:512,height:512};function $O(t,e){!nT&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ud(t,e){var n=e;return e==="fa"&&q.styleDefault!==null&&(e=Rr()),new Promise(function(r,i){if(Bn("missingIconAbstract"),n==="fa"){var s=mT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Oh[e]&&Oh[e][t]){var o=Oh[e][t];return r(ld(o))}$O(t,e),r($($({},BO),{},{icon:q.showMissingIcons&&t?Bn("missingIconAbstract")||{}:{}}))})}var Qy=function(){},cd=q.measurePerformance&&gl&&gl.mark&&gl.measure?gl:{mark:Qy,measure:Qy},uo='FA "6.5.2"',WO=function(e){return cd.mark("".concat(uo," ").concat(e," begins")),function(){return vT(e)}},vT=function(e){cd.mark("".concat(uo," ").concat(e," ends")),cd.measure("".concat(uo," ").concat(e),"".concat(uo," ").concat(e," begins"),"".concat(uo," ").concat(e," ends"))},cm={begin:WO,end:vT},Hl=function(){};function Yy(t){var e=t.getAttribute?t.getAttribute(fi):null;return typeof e=="string"}function HO(t){var e=t.getAttribute?t.getAttribute(tm):null,n=t.getAttribute?t.getAttribute(nm):null;return e&&n}function qO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function KO(){if(q.autoReplaceSvg===!0)return ql.replace;var t=ql[q.autoReplaceSvg];return t||ql.replace}function GO(t){return _e.createElementNS("http://www.w3.org/2000/svg",t)}function QO(t){return _e.createElement(t)}function yT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?GO:QO:n;if(typeof t=="string")return _e.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(yT(o,{ceFn:r}))}),i}function YO(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ql={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(yT(i),n)}),n.getAttribute(fi)===null&&q.keepOriginalSource){var r=_e.createComment(YO(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~im(n).indexOf(q.replacementClass))return ql.replace(e);var i=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,u){return u===q.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(l){return Ra(l)}).join(`
`);n.setAttribute(fi,""),n.innerHTML=o}};function Xy(t){t()}function _T(t,e){var n=typeof e=="function"?e:Hl;if(t.length===0)n();else{var r=Xy;q.mutateApproach===tO&&(r=Cr.requestAnimationFrame||Xy),r(function(){var i=KO(),s=cm.begin("mutate");t.map(i),s(),n()})}}var hm=!1;function wT(){hm=!0}function hd(){hm=!1}var Mu=null;function Jy(t){if(zy&&q.observeMutations){var e=t.treeCallback,n=e===void 0?Hl:e,r=t.nodeCallback,i=r===void 0?Hl:r,s=t.pseudoElementsCallback,o=s===void 0?Hl:s,l=t.observeMutationsRoot,u=l===void 0?_e:l;Mu=new zy(function(c){if(!hm){var f=Rr();Cs(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Yy(p.addedNodes[0])&&(q.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&q.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Yy(p.target)&&~lO.indexOf(p.attributeName))if(p.attributeName==="class"&&HO(p.target)){var g=Tc(im(p.target)),w=g.prefix,P=g.iconName;p.target.setAttribute(tm,w||f),P&&p.target.setAttribute(nm,P)}else qO(p.target)&&i(p.target)})}}),Hn&&Mu.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function XO(){Mu&&Mu.disconnect()}function JO(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function ZO(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Tc(im(t));return i.prefix||(i.prefix=Rr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=bO(i.prefix,t.innerText)||am(i.prefix,id(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function eD(t){var e=Cs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function tD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:an,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ZO(t),r=n.iconName,i=n.prefix,s=n.rest,o=eD(t),l=od("parseNodeAttributes",{},t),u=e.styleParser?JO(t):[];return $({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:an,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},l)}var nD=Qt.styles;function ET(t){var e=q.autoReplaceSvg==="nest"?Zy(t,{styleParser:!1}):Zy(t);return~e.extra.classes.indexOf(rT)?Bn("generateLayersText",t,e):Bn("generateSvgReplacementMutation",t,e)}var br=new Set;rm.map(function(t){br.add("fa-".concat(t))});Object.keys(ra[ve]).map(br.add.bind(br));Object.keys(ra[Ce]).map(br.add.bind(br));br=Pa(br);function e_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Hn)return Promise.resolve();var n=_e.documentElement.classList,r=function(p){return n.add("".concat(By,"-").concat(p))},i=function(p){return n.remove("".concat(By,"-").concat(p))},s=q.autoFetchSvg?br:rm.map(function(f){return"fa-".concat(f)}).concat(Object.keys(nD));s.includes("fa")||s.push("fa");var o=[".".concat(rT,":not([").concat(fi,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(fi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Cs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=cm.begin("onTree"),c=l.reduce(function(f,p){try{var g=ET(p);g&&f.push(g)}catch(w){nT||w.name==="MissingIcon"&&console.error(w)}return f},[]);return new Promise(function(f,p){Promise.all(c).then(function(g){_T(g,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(function(g){u(),p(g)})})}function rD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ET(t).then(function(n){n&&_T([n],e)})}function iD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ad(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ad(i||{})),t(r,$($({},n),{},{mask:i}))}}var sD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?an:r,s=n.symbol,o=s===void 0?!1:s,l=n.mask,u=l===void 0?null:l,c=n.maskId,f=c===void 0?null:c,p=n.title,g=p===void 0?null:p,w=n.titleId,P=w===void 0?null:w,R=n.classes,N=R===void 0?[]:R,T=n.attributes,y=T===void 0?{}:T,I=n.styles,O=I===void 0?{}:I;if(e){var L=e.prefix,U=e.iconName,E=e.icon;return Ic($({type:"icon"},e),function(){return di("beforeDOMElementCreation",{iconDefinition:e,params:n}),q.autoA11y&&(g?y["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(P||aa()):(y["aria-hidden"]="true",y.focusable="false")),um({icons:{main:ld(E),mask:u?ld(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:U,transform:$($({},an),i),symbol:o,title:g,maskId:f,titleId:P,extra:{attributes:y,styles:O,classes:N}})})}},oD={mixout:function(){return{icon:iD(sD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=e_,n.nodeCallback=rD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?_e:r,s=n.callback,o=s===void 0?function(){}:s;return e_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,l=r.prefix,u=r.transform,c=r.symbol,f=r.mask,p=r.maskId,g=r.extra;return new Promise(function(w,P){Promise.all([ud(i,l),f.iconName?ud(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var N=Zp(R,2),T=N[0],y=N[1];w([n,um({icons:{main:T,mask:y},prefix:l,iconName:i,transform:u,symbol:c,maskId:p,title:s,titleId:o,extra:g,watchable:!0})])}).catch(P)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,l=n.styles,u=wc(l);u.length>0&&(i.style=u);var c;return sm(o)&&(c=Bn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},aD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ic({type:"layer"},function(){di("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(u){o=o.concat(u.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers")].concat(Pa(s)).join(" ")},children:o}]})}}}},lD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,f=r.styles,p=f===void 0?{}:f;return Ic({type:"counter",content:n},function(){return di("beforeDOMElementCreation",{content:n,params:r}),zO({content:n.toString(),title:s,extra:{attributes:c,styles:p,classes:["".concat(q.cssPrefix,"-layers-counter")].concat(Pa(l))}})})}}}},uD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?an:i,o=r.title,l=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,f=r.attributes,p=f===void 0?{}:f,g=r.styles,w=g===void 0?{}:g;return Ic({type:"text",content:n},function(){return di("beforeDOMElementCreation",{content:n,params:r}),Gy({content:n,transform:$($({},an),s),title:l,extra:{attributes:p,styles:w,classes:["".concat(q.cssPrefix,"-layers-text")].concat(Pa(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,l=null,u=null;if(Z1){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/c,u=f.height/c}return q.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Gy({content:n.innerHTML,width:l,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},cD=new RegExp('"',"ug"),t_=[1105920,1112319];function hD(t){var e=t.replace(cD,""),n=SO(e,0),r=n>=t_[0]&&n<=t_[1],i=e.length===2?e[0]===e[1]:!1;return{value:id(i?e[0]:e),isSecondary:r||i}}function n_(t,e){var n="".concat(eO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Cs(t.children),o=s.filter(function(E){return E.getAttribute(rd)===e})[0],l=Cr.getComputedStyle(t,e),u=l.getPropertyValue("font-family").match(sO),c=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){var p=l.getPropertyValue("content"),g=~["Sharp"].indexOf(u[2])?Ce:ve,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?ia[g][u[2].toLowerCase()]:oO[g][c],P=hD(p),R=P.value,N=P.isSecondary,T=u[0].startsWith("FontAwesome"),y=am(w,R),I=y;if(T){var O=xO(R);O.iconName&&O.prefix&&(y=O.iconName,w=O.prefix)}if(y&&!N&&(!o||o.getAttribute(tm)!==w||o.getAttribute(nm)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var L=tD(),U=L.extra;U.attributes[rd]=e,ud(y,w).then(function(E){var v=um($($({},L),{},{icons:{main:E,mask:lm()},prefix:w,iconName:I,extra:U,watchable:!0})),_=_e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(_,t.firstChild):t.appendChild(_),_.outerHTML=v.map(function(S){return Ra(S)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function fD(t){return Promise.all([n_(t,"::before"),n_(t,"::after")])}function dD(t){return t.parentNode!==document.head&&!~nO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(rd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function r_(t){if(Hn)return new Promise(function(e,n){var r=Cs(t.querySelectorAll("*")).filter(dD).map(fD),i=cm.begin("searchPseudoElements");wT(),Promise.all(r).then(function(){i(),hd(),e()}).catch(function(){i(),hd(),n()})})}var pD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=r_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?_e:r;q.searchPseudoElements&&r_(i)}}},i_=!1,mD={mixout:function(){return{dom:{unwatch:function(){wT(),i_=!0}}}},hooks:function(){return{bootstrap:function(){Jy(od("mutationObserverCallbacks",{}))},noAuto:function(){XO()},watch:function(n){var r=n.observeMutationsRoot;i_?hd():Jy(od("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},s_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],l=s.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},gD={mixout:function(){return{parse:{transform:function(n){return s_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=s_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(u," ").concat(c," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},w={outer:l,inner:p,path:g};return{tag:"g",attributes:$({},w.outer),children:[{tag:"g",attributes:$({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),w.path)}]}]}}}},Dh={x:0,y:0,width:"100%",height:"100%"};function o_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vD(t){return t.tag==="g"?t.children:[t]}var yD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Tc(i.split(" ").map(function(o){return o.trim()})):lm();return s.prefix||(s.prefix=Rr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,l=n.maskId,u=n.transform,c=s.width,f=s.icon,p=o.width,g=o.icon,w=vO({transform:u,containerWidth:p,iconWidth:c}),P={tag:"rect",attributes:$($({},Dh),{},{fill:"white"})},R=f.children?{children:f.children.map(o_)}:{},N={tag:"g",attributes:$({},w.inner),children:[o_($({tag:f.tag,attributes:$($({},f.attributes),w.path)},R))]},T={tag:"g",attributes:$({},w.outer),children:[N]},y="mask-".concat(l||aa()),I="clip-".concat(l||aa()),O={tag:"mask",attributes:$($({},Dh),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,T]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:vD(g)},O]};return r.push(L,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(y,")")},Dh)}),{children:r,attributes:i}}}},_D={provides:function(e){var n=!1;Cr.matchMedia&&(n=Cr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:$($({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},ED=[wO,oD,aD,lD,uD,pD,mD,gD,yD,_D,wD];DO(ED,{mixoutsTo:bt});bt.noAuto;bt.config;bt.library;bt.dom;var fd=bt.parse;bt.findIconDefinition;bt.toHtml;var TD=bt.icon;bt.layer;bt.text;bt.counter;var TT={exports:{}},ID="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",SD=ID,kD=SD;function IT(){}function ST(){}ST.resetWarningCache=IT;var AD=function(){function t(r,i,s,o,l,u){if(u!==kD){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ST,resetWarningCache:IT};return n.PropTypes=n,n};TT.exports=AD();var PD=TT.exports;const te=h_(PD);function a_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function rn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?a_(Object(n),!0).forEach(function(r){Wi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fu(t){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fu(t)}function Wi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function RD(t,e){if(t==null)return{};var n=CD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function dd(t){return bD(t)||xD(t)||ND(t)||OD()}function bD(t){if(Array.isArray(t))return pd(t)}function xD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ND(t,e){if(t){if(typeof t=="string")return pd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pd(t,e)}}function pd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function OD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,p=t.pulse,g=t.fixedWidth,w=t.inverse,P=t.border,R=t.listItem,N=t.flip,T=t.size,y=t.rotation,I=t.pull,O=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":g,"fa-inverse":w,"fa-border":P,"fa-li":R,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},Wi(e,"fa-".concat(T),typeof T<"u"&&T!==null),Wi(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),Wi(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),Wi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(O).map(function(L){return O[L]?L:null}).filter(function(L){return L})}function LD(t){return t=t-0,t===t}function kT(t){return LD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var VD=["style"];function MD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function FD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=kT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[MD(i)]=s:e[i]=s,e},{})}function AT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return AT(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=FD(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[kT(c)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=RD(n,VD);return i.attrs.style=rn(rn({},i.attrs.style),o),t.apply(void 0,[e.tag,rn(rn({},i.attrs),l)].concat(dd(r)))}var PT=!1;try{PT=!0}catch{}function UD(){if(!PT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function l_(t){if(t&&Fu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(fd.icon)return fd.icon(t);if(t===null)return null;if(t&&Fu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Lh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Wi({},t,e):{}}var u_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},fm=ju.forwardRef(function(t,e){var n=rn(rn({},u_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,f=l_(r),p=Lh("classes",[].concat(dd(DD(n)),dd((o||"").split(" ")))),g=Lh("transform",typeof n.transform=="string"?fd.transform(n.transform):n.transform),w=Lh("mask",l_(i)),P=TD(f,rn(rn(rn(rn({},p),g),w),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!P)return UD("Could not find icon",f),null;var R=P.abstract,N={ref:e};return Object.keys(n).forEach(function(T){u_.hasOwnProperty(T)||(N[T]=n[T])}),jD(R[0],N)});fm.displayName="FontAwesomeIcon";fm.propTypes={beat:te.bool,border:te.bool,beatFade:te.bool,bounce:te.bool,className:te.string,fade:te.bool,flash:te.bool,mask:te.oneOfType([te.object,te.array,te.string]),maskId:te.string,fixedWidth:te.bool,inverse:te.bool,flip:te.oneOf([!0,!1,"horizontal","vertical","both"]),icon:te.oneOfType([te.object,te.array,te.string]),listItem:te.bool,pull:te.oneOf(["right","left"]),pulse:te.bool,rotation:te.oneOf([0,90,180,270]),shake:te.bool,size:te.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:te.bool,spinPulse:te.bool,spinReverse:te.bool,symbol:te.oneOfType([te.bool,te.string]),title:te.string,titleId:te.string,transform:te.oneOfType([te.string,te.object]),swapOpacity:te.bool};var jD=AT.bind(null,ju.createElement),zD={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};const BD="_home_6ybj6_13",$D="_homeContent_6ybj6_65",WD="_features_6ybj6_99",HD="_feature_6ybj6_99",qD="_featureButton_6ybj6_171",KD="_catalogIntro_6ybj6_209",GD="_catalogContent_6ybj6_223",QD="_catalogLink_6ybj6_253",YD="_catalog_6ybj6_209",XD="_arrow_6ybj6_311",Wt={home:BD,homeContent:$D,features:WD,feature:HD,featureButton:qD,catalogIntro:KD,catalogContent:GD,catalogLink:QD,catalog:YD,arrow:XD},JD=()=>{const t=z.useRef(null),e=()=>{t.current&&t.current.scrollIntoView({behavior:"smooth"})};return C.jsxs(C.Fragment,{children:[C.jsx("section",{className:Wt.home,children:C.jsxs("div",{className:Wt.homeContent,children:[C.jsx("h1",{children:"Welcome to HealthHub"}),C.jsx("p",{children:"Your gateway to delicious recipes and invigorating workouts."})]})}),C.jsxs("section",{className:Wt.features,children:[C.jsxs("div",{className:Wt.feature,children:[C.jsx("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",alt:"Create Recipe"}),C.jsx("h2",{children:"Create a Recipe"}),C.jsx("p",{children:"Craft and share your unique recipes with the community."}),C.jsx(It,{to:"/create/recipe",className:Wt.featureButton,children:"Start Now"})]}),C.jsxs("div",{className:Wt.arrow,onClick:e,children:[C.jsx("p",{children:"Check out what other users have created"}),C.jsx(fm,{icon:zD})]}),C.jsxs("div",{className:Wt.feature,children:[C.jsx("img",{src:"https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=",alt:"Create Workout"}),C.jsx("h2",{children:"Create a Workout"}),C.jsx("p",{children:"Design and share workout routines tailored to your needs."}),C.jsx(It,{to:"/create/workout",className:Wt.featureButton,children:"Start Now"})]})]}),C.jsx("section",{ref:t,className:Wt.catalogIntro,children:C.jsxs("div",{className:Wt.catalogContent,children:[C.jsx("h2",{children:"Discover More"}),C.jsx("p",{children:"Explore our catalog of recipes and workouts designed to inspire and motivate you."}),C.jsx(It,{to:"/catalog",className:Wt.catalogLink,children:"Go to Catalog"})]})})]})},ZD="_catalogIntro_1r7nn_7",eL="_createHomeView_1r7nn_25",tL="_groupLink_1r7nn_51",nL="_upperSide_1r7nn_79",rL="_bottomSide_1r7nn_95",iL="_reverse_1r7nn_141",Nt={catalogIntro:ZD,createHomeView:eL,groupLink:tL,upperSide:nL,bottomSide:rL,reverse:iL},sL=()=>C.jsxs(C.Fragment,{children:[C.jsx("h2",{className:Nt.catalogIntro,children:"Explore our catalog"}),C.jsxs("div",{className:Nt.createHomeView,children:[C.jsx(It,{className:Nt.groupLink,to:"/catalog/recipes",children:C.jsxs("div",{className:Nt.groupLink,children:[C.jsx("div",{className:Nt.upperSide,children:C.jsx("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",alt:""})}),C.jsx("div",{className:Nt.bottomSide,children:C.jsx("h3",{children:"Recipes"})})]})}),C.jsx(It,{className:`${Nt.groupLink} ${Nt.reverse}`,to:"/catalog/workouts",children:C.jsxs("div",{className:`${Nt.groupLink} ${Nt.reverse}`,children:[C.jsx("div",{className:Nt.bottomSide,children:C.jsx("img",{src:"https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=",alt:""})}),C.jsx("div",{className:Nt.upperSide,children:C.jsx("h3",{children:"Workouts"})})]})})]})]}),oL="_authFormIntro_1e40s_5",aL="_authForm_1e40s_5",lL="_field_1e40s_53",uL="_fieldError_1e40s_71",cL="_buttons_1e40s_89",hL="_button_1e40s_89",fL="_error_1e40s_141",ce={authFormIntro:oL,authForm:aL,field:lL,fieldError:uL,buttons:cL,button:hL,error:fL},CT=(t,e,n)=>{if(!t.target.value){n({...e,email:"Email is required!"});return}const r=t.target.value.trim(),s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r).toLowerCase());n(s?{...e,email:""}:{...e,email:"Invalid email!"})},RT=(t,e,n)=>{if(!t.target.value){n({...e,password:"Password is required!"});return}if(t.target.value.length<6){n({...e,password:"Password must be at least 6 characters long!"});return}if(t.target.value.length>20){n({...e,password:"Password must be at most 20 characters long!"});return}n({...e,password:""})},dL=(t,e,n,r)=>{if(!t.target.value){r({...n,rePassword:"Repeat password is required!"});return}if(e&&t.target.value!==e){r({...n,rePassword:"Passwords do not match!"});return}r({...n,rePassword:""})},pL=(t,e,n)=>{if(!t.target.value){n({...e,username:"Username is required!"});return}if(!/^[^\s]+$/.test(t.target.value.trim())){n({...e,username:"Username can not include whitespaces!"});return}n({...e,username:""})},mL=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState({email:"",password:""}),o=ic(),{setUser:l}=Aa(),u=async c=>{if(c.preventDefault(),!(!t||!n))try{const p=(await hi.login(t,n)).user,w=(await q1(Gp(hi.db(),"users",p.uid))).data();l({userId:p.uid,email:p.email,username:w.username}),o("/catalog")}catch(f){s({...f,email:"Invalid email or password!"}),r("")}};return C.jsxs(C.Fragment,{children:[C.jsx("h2",{className:ce.authFormIntro,children:"It's nice to have you back!"}),C.jsxs("form",{className:ce.authForm,onSubmit:u,children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"email",children:"Email:"}),C.jsx("input",{className:i.email?ce.fieldError:ce.field,type:"email",id:"email",value:t,onChange:c=>e(c.target.value),onBlur:c=>CT(c,i,s)})]}),i.email&&C.jsx("p",{className:ce.error,children:i.email}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"password",children:"Password:"}),C.jsx("input",{className:i.password?ce.fieldError:ce.field,type:"password",id:"password",value:n,onChange:c=>r(c.target.value),onBlur:c=>RT(c,i,s)})]}),i.password&&C.jsx("p",{className:ce.error,children:i.password}),C.jsxs("div",{className:ce.buttons,children:[C.jsx("button",{className:ce.button,type:"submit",children:"Login"}),C.jsx("button",{className:ce.button,type:"button",onClick:()=>o("/users/register"),children:"Not an user ?"})]})]})]})},gL=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(""),[o,l]=z.useState(""),[u,c]=z.useState({email:"",password:"",rePassword:""}),f=ic(),{setUser:p}=Aa(),g=async w=>{if(w.preventDefault(),!(!n||!i)){if(i!==o){console.log("Passwords do not match");return}try{const R=(await hi.register(n,i)).user;await ON(Gp(hi.db(),"users",R.uid),{username:t,email:n}),p({userId:R.uid,email:R.email,username:t}),f("/catalog")}catch(P){c({...P,email:"Email already registered!"}),s(""),l("");return}}};return C.jsxs(C.Fragment,{children:[C.jsx("h2",{className:ce.authFormIntro,children:"Join our community!"}),C.jsxs("form",{className:ce.authForm,onSubmit:g,children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"username",children:"Username:"}),C.jsx("input",{className:u.username?ce.fieldError:ce.field,type:"text",id:"username",value:t,onChange:w=>e(w.target.value),onBlur:w=>pL(w,u,c)})]}),u.username&&C.jsx("p",{className:ce.error,children:u.username}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"email",children:"Email:"}),C.jsx("input",{className:u.email?ce.fieldError:ce.field,type:"email",id:"email",value:n,onChange:w=>r(w.target.value),onBlur:w=>CT(w,u,c)})]}),u.email&&C.jsx("p",{className:ce.error,children:u.email}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"password",children:"Password:"}),C.jsx("input",{className:u.email?ce.fieldError:ce.field,type:"password",id:"password",value:i,onChange:w=>s(w.target.value),onBlur:w=>RT(w,u,c)})]}),u.password&&C.jsx("p",{className:ce.error,children:u.password}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"rePassword",children:"Repeat Password:"}),C.jsx("input",{className:u.email?ce.fieldError:ce.field,type:"password",id:"rePassword",value:o,onChange:w=>l(w.target.value),onBlur:w=>dL(w,i,u,c)})]}),u.rePassword&&C.jsx("p",{className:ce.error,children:u.rePassword}),C.jsxs("div",{className:ce.buttons,children:[C.jsx("button",{className:ce.button,type:"submit",children:"Register"}),C.jsx("button",{className:ce.button,type:"button",onClick:()=>f("/users/login"),children:"Already an user ?"})]})]})]})},vL="_loader_l0bng_1",yL="_rotate_l0bng_1",_L="_container_l0bng_51",c_={loader:vL,rotate:yL,container:_L},wL=()=>{const{loading:t}=Aa();return t?C.jsx("div",{className:c_.container,children:C.jsx("span",{className:c_.loader})}):null},EL="_formTitle_aijlo_1",TL="_form_aijlo_1",IL="_formGroup_aijlo_45",SL="_buttons_aijlo_77",kL="_button_aijlo_77",ft={formTitle:EL,form:TL,formGroup:IL,buttons:SL,button:kL},AL=()=>C.jsxs(C.Fragment,{children:[C.jsx("h1",{className:ft.formTitle,children:"Create Recipe"}),C.jsxs("form",{className:ft.form,children:[C.jsxs("div",{className:ft.formGroup,children:[C.jsx("label",{htmlFor:"title",children:"Title:"}),C.jsx("input",{type:"text",name:"title",id:"title"})]}),C.jsxs("div",{className:ft.formGroup,children:[C.jsx("label",{htmlFor:"description",children:"Description:"}),C.jsx("textarea",{name:"description",id:"description"})]}),C.jsxs("div",{className:ft.formGroup,children:[C.jsx("label",{htmlFor:"ingredients",children:"Ingredients:"}),C.jsx("textarea",{name:"ingredients",id:"ingredients"})]}),C.jsxs("div",{className:ft.formGroup,children:[C.jsx("label",{htmlFor:"image",children:"ImageURL:"}),C.jsx("input",{type:"text",name:"image",id:"image"})]}),C.jsx("div",{className:ft.buttons,children:C.jsx("button",{className:ft.button,type:"submit",children:"Add Recipe"})})]})]}),PL="_catalogIntro_hexqv_5",CL="_createHomeView_hexqv_23",RL="_groupLink_hexqv_49",bL="_upperSide_hexqv_77",xL="_bottomSide_hexqv_93",NL="_reverse_hexqv_139",Ot={catalogIntro:PL,createHomeView:CL,groupLink:RL,upperSide:bL,bottomSide:xL,reverse:NL},OL=()=>C.jsxs(C.Fragment,{children:[C.jsx("h2",{className:Ot.catalogIntro,children:"Create your own"}),C.jsxs("div",{className:Ot.createHomeView,children:[C.jsx(It,{className:Ot.groupLink,to:"/create/recipe",children:C.jsxs("div",{className:Ot.groupLink,children:[C.jsx("div",{className:Ot.upperSide,children:C.jsx("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",alt:""})}),C.jsx("div",{className:Ot.bottomSide,children:C.jsx("h3",{children:"Recipes"})})]})}),C.jsx(It,{className:`${Ot.groupLink} ${Ot.reverse}`,to:"/create/workout",children:C.jsxs("div",{className:`${Ot.groupLink} ${Ot.reverse}`,children:[C.jsx("div",{className:Ot.bottomSide,children:C.jsx("img",{src:"https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=",alt:""})}),C.jsx("div",{className:Ot.upperSide,children:C.jsx("h3",{children:"Workouts"})})]})})]})]}),DL=()=>C.jsxs(C.Fragment,{children:[C.jsx("h1",{className:ft.formTitle,children:"Create Workout"}),C.jsxs("form",{className:ft.form,children:[C.jsxs("div",{className:ft.formGroup,children:[C.jsx("label",{htmlFor:"title",children:"Title:"}),C.jsx("input",{type:"text",name:"title",id:"title"})]}),C.jsxs("div",{className:ft.formGroup,children:[C.jsx("label",{htmlFor:"description",children:"Description:"}),C.jsx("textarea",{name:"description",id:"description"})]}),C.jsxs("div",{className:ft.formGroup,children:[C.jsx("label",{htmlFor:"ingredients",children:"Exercises:"}),C.jsx("textarea",{name:"ingredients",id:"ingredients"})]}),C.jsx("div",{className:ft.buttons,children:C.jsx("button",{className:ft.button,type:"submit",children:"Add Workout"})})]})]}),LL=()=>C.jsx("div",{children:C.jsx("h1",{children:"Recipes Catalog"})}),VL=()=>C.jsx("div",{children:C.jsx("h1",{children:"Workouts Catalog"})});function ML(){const{loading:t}=Aa();return t?C.jsx(wL,{}):C.jsxs(C.Fragment,{children:[C.jsx($N,{}),C.jsx("div",{className:"site",children:C.jsx("div",{className:"content",children:C.jsxs(TA,{children:[C.jsx(tn,{path:"/",element:C.jsx(JD,{})}),C.jsx(tn,{path:"catalog",element:C.jsx(sL,{})}),C.jsx(tn,{path:"catalog/recipes",element:C.jsx(LL,{})}),C.jsx(tn,{path:"catalog/workouts",element:C.jsx(VL,{})}),C.jsx(tn,{path:"create",element:C.jsx(OL,{})}),C.jsx(tn,{path:"create/recipe",element:C.jsx(AL,{})}),C.jsx(tn,{path:"create/workout",element:C.jsx(DL,{})}),C.jsx(tn,{path:"users/login",element:C.jsx(mL,{})}),C.jsx(tn,{path:"users/register",element:C.jsx(gL,{})})]})})})]})}ed.createRoot(document.getElementById("root")).render(C.jsx(ju.StrictMode,{children:C.jsx(RA,{children:C.jsx(FN,{children:C.jsx(ML,{})})})}));
