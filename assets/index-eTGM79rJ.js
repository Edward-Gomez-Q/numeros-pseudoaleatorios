(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function l8(c,a){const e=new Set(c.split(","));return a?r=>e.has(r.toLowerCase()):r=>e.has(r)}const r1={},X2=[],F1=()=>{},rf=()=>!1,R4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),f8=c=>c.startsWith("onUpdate:"),C1=Object.assign,o8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},sf=Object.prototype.hasOwnProperty,$=(c,a)=>sf.call(c,a),U=Array.isArray,Y2=c=>D3(c)==="[object Map]",_4=c=>D3(c)==="[object Set]",q0=c=>D3(c)==="[object Date]",G=c=>typeof c=="function",m1=c=>typeof c=="string",d2=c=>typeof c=="symbol",e1=c=>c!==null&&typeof c=="object",o7=c=>(e1(c)||G(c))&&G(c.then)&&G(c.catch),t7=Object.prototype.toString,D3=c=>t7.call(c),nf=c=>D3(c).slice(8,-1),m7=c=>D3(c)==="[object Object]",t8=c=>m1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,V3=l8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),B4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},lf=/-(\w)/g,J1=B4(c=>c.replace(lf,(a,e)=>e?e.toUpperCase():"")),ff=/\B([A-Z])/g,f3=B4(c=>c.replace(ff,"-$1").toLowerCase()),F4=B4(c=>c.charAt(0).toUpperCase()+c.slice(1)),V6=B4(c=>c?`on${F4(c)}`:""),L2=(c,a)=>!Object.is(c,a),z4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},L4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},S3=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let O0;const v7=()=>O0||(O0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function m8(c){if(U(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=m1(r)?vf(r):m8(r);if(i)for(const s in i)a[s]=i[s]}return a}else if(m1(c)||e1(c))return c}const of=/;(?![^(]*\))/g,tf=/:([^]+)/,mf=/\/\*[^]*?\*\//g;function vf(c){const a={};return c.replace(mf,"").split(of).forEach(e=>{if(e){const r=e.split(tf);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function v8(c){let a="";if(m1(c))a=c;else if(U(c))for(let e=0;e<c.length;e++){const r=v8(c[e]);r&&(a+=r+" ")}else if(e1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hf=l8(zf);function z7(c){return!!c||c===""}function uf(c,a){if(c.length!==a.length)return!1;let e=!0;for(let r=0;e&&r<c.length;r++)e=E4(c[r],a[r]);return e}function E4(c,a){if(c===a)return!0;let e=q0(c),r=q0(a);if(e||r)return e&&r?c.getTime()===a.getTime():!1;if(e=d2(c),r=d2(a),e||r)return c===a;if(e=U(c),r=U(a),e||r)return e&&r?uf(c,a):!1;if(e=e1(c),r=e1(a),e||r){if(!e||!r)return!1;const i=Object.keys(c).length,s=Object.keys(a).length;if(i!==s)return!1;for(const n in c){const l=c.hasOwnProperty(n),f=a.hasOwnProperty(n);if(l&&!f||!l&&f||!E4(c[n],a[n]))return!1}}return String(c)===String(a)}function Hf(c,a){return c.findIndex(e=>E4(e,a))}const V1=c=>m1(c)?c:c==null?"":U(c)||e1(c)&&(c.toString===t7||!G(c.toString))?JSON.stringify(c,h7,2):String(c),h7=(c,a)=>a&&a.__v_isRef?h7(c,a.value):Y2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,i],s)=>(e[M6(r,s)+" =>"]=i,e),{})}:_4(a)?{[`Set(${a.size})`]:[...a.values()].map(e=>M6(e))}:d2(a)?M6(a):e1(a)&&!U(a)&&!m7(a)?String(a):a,M6=(c,a="")=>{var e;return d2(c)?`Symbol(${(e=c.description)!=null?e:a})`:c};/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let D1;class pf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=D1,!a&&D1&&(this.index=(D1.scopes||(D1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=D1;try{return D1=this,a()}finally{D1=e}}}on(){D1=this}off(){D1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Vf(c,a=D1){a&&a.active&&a.effects.push(c)}function Mf(){return D1}let _2;class z8{constructor(a,e,r,i){this.fn=a,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Vf(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,q2();for(let a=0;a<this._depsLength;a++){const e=this.deps[a];if(e.computed&&(Cf(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),O2()}return this._dirtyLevel>=4}set dirty(a){this._dirtyLevel=a?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let a=M2,e=_2;try{return M2=!0,_2=this,this._runnings++,U0(this),this.fn()}finally{I0(this),this._runnings--,_2=e,M2=a}}stop(){var a;this.active&&(U0(this),I0(this),(a=this.onStop)==null||a.call(this),this.active=!1)}}function Cf(c){return c.value}function U0(c){c._trackId++,c._depsLength=0}function I0(c){if(c.deps.length>c._depsLength){for(let a=c._depsLength;a<c.deps.length;a++)u7(c.deps[a],c);c.deps.length=c._depsLength}}function u7(c,a){const e=c.get(a);e!==void 0&&a._trackId!==e&&(c.delete(a),c.size===0&&c.cleanup())}let M2=!0,R6=0;const H7=[];function q2(){H7.push(M2),M2=!1}function O2(){const c=H7.pop();M2=c===void 0?!0:c}function h8(){R6++}function u8(){for(R6--;!R6&&_6.length;)_6.shift()()}function p7(c,a,e){if(a.get(c)!==c._trackId){a.set(c,c._trackId);const r=c.deps[c._depsLength];r!==a?(r&&u7(r,c),c.deps[c._depsLength++]=a):c._depsLength++}}const _6=[];function V7(c,a,e){h8();for(const r of c.keys()){let i;r._dirtyLevel<a&&(i??(i=c.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=a),r._shouldSchedule&&(i??(i=c.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&_6.push(r.scheduler)))}u8()}const M7=(c,a)=>{const e=new Map;return e.cleanup=c,e.computed=a,e},B6=new WeakMap,B2=Symbol(""),F6=Symbol("");function P1(c,a,e){if(M2&&_2){let r=B6.get(c);r||B6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=M7(()=>r.delete(e))),p7(_2,i)}}function r2(c,a,e,r,i,s){const n=B6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&U(c)){const f=Number(r);n.forEach((t,o)=>{(o==="length"||!d2(o)&&o>=f)&&l.push(t)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":U(c)?t8(e)&&l.push(n.get("length")):(l.push(n.get(B2)),Y2(c)&&l.push(n.get(F6)));break;case"delete":U(c)||(l.push(n.get(B2)),Y2(c)&&l.push(n.get(F6)));break;case"set":Y2(c)&&l.push(n.get(B2));break}h8();for(const f of l)f&&V7(f,4);u8()}const df=l8("__proto__,__v_isRef,__isVue"),C7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(d2)),G0=Lf();function Lf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=K(this);for(let s=0,n=this.length;s<n;s++)P1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(K)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){q2(),h8();const r=K(this)[a].apply(this,e);return u8(),O2(),r}}),c}function gf(c){const a=K(this);return P1(a,"has",c),a.hasOwnProperty(c)}class d7{constructor(a=!1,e=!1){this._isReadonly=a,this._isShallow=e}get(a,e,r){const i=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return s;if(e==="__v_raw")return r===(i?s?Bf:x7:s?b7:g7).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(r)?a:void 0;const n=U(a);if(!i){if(n&&$(G0,e))return Reflect.get(G0,e,r);if(e==="hasOwnProperty")return gf}const l=Reflect.get(a,e,r);return(d2(e)?C7.has(e):df(e))||(i||P1(a,"get",e),s)?l:T1(l)?n&&t8(e)?l:l.value:e1(l)?i?S7(l):q4(l):l}}class L7 extends d7{constructor(a=!1){super(!1,a)}set(a,e,r,i){let s=a[e];if(!this._isShallow){const f=r3(s);if(!g4(r)&&!r3(r)&&(s=K(s),r=K(r)),!U(a)&&T1(s)&&!T1(r))return f?!1:(s.value=r,!0)}const n=U(a)&&t8(e)?Number(e)<a.length:$(a,e),l=Reflect.set(a,e,r,i);return a===K(i)&&(n?L2(r,s)&&r2(a,"set",e,r):r2(a,"add",e,r)),l}deleteProperty(a,e){const r=$(a,e);a[e];const i=Reflect.deleteProperty(a,e);return i&&r&&r2(a,"delete",e,void 0),i}has(a,e){const r=Reflect.has(a,e);return(!d2(e)||!C7.has(e))&&P1(a,"has",e),r}ownKeys(a){return P1(a,"iterate",U(a)?"length":B2),Reflect.ownKeys(a)}}class bf extends d7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const xf=new L7,Nf=new bf,Sf=new L7(!0),H8=c=>c,D4=c=>Reflect.getPrototypeOf(c);function Q3(c,a,e=!1,r=!1){c=c.__v_raw;const i=K(c),s=K(a);e||(L2(a,s)&&P1(i,"get",a),P1(i,"get",s));const{has:n}=D4(i),l=r?H8:e?M8:y3;if(n.call(i,a))return l(c.get(a));if(n.call(i,s))return l(c.get(s));c!==i&&c.get(a)}function J3(c,a=!1){const e=this.__v_raw,r=K(e),i=K(c);return a||(L2(c,i)&&P1(r,"has",c),P1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function c4(c,a=!1){return c=c.__v_raw,!a&&P1(K(c),"iterate",B2),Reflect.get(c,"size",c)}function W0(c){c=K(c);const a=K(this);return D4(a).has.call(a,c)||(a.add(c),r2(a,"add",c,c)),this}function Z0(c,a){a=K(a);const e=K(this),{has:r,get:i}=D4(e);let s=r.call(e,c);s||(c=K(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?L2(a,n)&&r2(e,"set",c,a):r2(e,"add",c,a),this}function j0(c){const a=K(this),{has:e,get:r}=D4(a);let i=e.call(a,c);i||(c=K(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&r2(a,"delete",c,void 0),s}function $0(){const c=K(this),a=c.size!==0,e=c.clear();return a&&r2(c,"clear",void 0,void 0),e}function a4(c,a){return function(r,i){const s=this,n=s.__v_raw,l=K(n),f=a?H8:c?M8:y3;return!c&&P1(l,"iterate",B2),n.forEach((t,o)=>r.call(i,f(t),f(o),s))}}function e4(c,a,e){return function(...r){const i=this.__v_raw,s=K(i),n=Y2(s),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,t=i[c](...r),o=e?H8:a?M8:y3;return!a&&P1(s,"iterate",f?F6:B2),{next(){const{value:h,done:u}=t.next();return u?{value:h,done:u}:{value:l?[o(h[0]),o(h[1])]:o(h),done:u}},[Symbol.iterator](){return this}}}}function v2(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function yf(){const c={get(s){return Q3(this,s)},get size(){return c4(this)},has:J3,add:W0,set:Z0,delete:j0,clear:$0,forEach:a4(!1,!1)},a={get(s){return Q3(this,s,!1,!0)},get size(){return c4(this)},has:J3,add:W0,set:Z0,delete:j0,clear:$0,forEach:a4(!1,!0)},e={get(s){return Q3(this,s,!0)},get size(){return c4(this,!0)},has(s){return J3.call(this,s,!0)},add:v2("add"),set:v2("set"),delete:v2("delete"),clear:v2("clear"),forEach:a4(!0,!1)},r={get(s){return Q3(this,s,!0,!0)},get size(){return c4(this,!0)},has(s){return J3.call(this,s,!0)},add:v2("add"),set:v2("set"),delete:v2("delete"),clear:v2("clear"),forEach:a4(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=e4(s,!1,!1),e[s]=e4(s,!0,!1),a[s]=e4(s,!1,!0),r[s]=e4(s,!0,!0)}),[c,e,a,r]}const[wf,kf,Af,Pf]=yf();function p8(c,a){const e=a?c?Pf:Af:c?kf:wf;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get($(e,i)&&i in r?e:r,i,s)}const Tf={get:p8(!1,!1)},Rf={get:p8(!1,!0)},_f={get:p8(!0,!1)},g7=new WeakMap,b7=new WeakMap,x7=new WeakMap,Bf=new WeakMap;function Ff(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ef(c){return c.__v_skip||!Object.isExtensible(c)?0:Ff(nf(c))}function q4(c){return r3(c)?c:V8(c,!1,xf,Tf,g7)}function N7(c){return V8(c,!1,Sf,Rf,b7)}function S7(c){return V8(c,!0,Nf,_f,x7)}function V8(c,a,e,r,i){if(!e1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=Ef(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return i.set(c,l),l}function Q2(c){return r3(c)?Q2(c.__v_raw):!!(c&&c.__v_isReactive)}function r3(c){return!!(c&&c.__v_isReadonly)}function g4(c){return!!(c&&c.__v_isShallow)}function y7(c){return Q2(c)||r3(c)}function K(c){const a=c&&c.__v_raw;return a?K(a):c}function w7(c){return Object.isExtensible(c)&&L4(c,"__v_skip",!0),c}const y3=c=>e1(c)?q4(c):c,M8=c=>e1(c)?S7(c):c;class k7{constructor(a,e,r,i){this.getter=a,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new z8(()=>a(this._value),()=>h4(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=K(this);return(!a._cacheable||a.effect.dirty)&&L2(a._value,a._value=a.effect.run())&&h4(a,4),A7(a),a.effect._dirtyLevel>=2&&h4(a,2),a._value}set value(a){this._setter(a)}get _dirty(){return this.effect.dirty}set _dirty(a){this.effect.dirty=a}}function Df(c,a,e=!1){let r,i;const s=G(c);return s?(r=c,i=F1):(r=c.get,i=c.set),new k7(r,i,s||!i,e)}function A7(c){var a;M2&&_2&&(c=K(c),p7(_2,(a=c.dep)!=null?a:c.dep=M7(()=>c.dep=void 0,c instanceof k7?c:void 0)))}function h4(c,a=4,e){c=K(c);const r=c.dep;r&&V7(r,a)}function T1(c){return!!(c&&c.__v_isRef===!0)}function qf(c){return P7(c,!1)}function Of(c){return P7(c,!0)}function P7(c,a){return T1(c)?c:new Uf(c,a)}class Uf{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:K(a),this._value=e?a:y3(a)}get value(){return A7(this),this._value}set value(a){const e=this.__v_isShallow||g4(a)||r3(a);a=e?a:K(a),L2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:y3(a),h4(this,4))}}function J2(c){return T1(c)?c.value:c}const If={get:(c,a,e)=>J2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return T1(i)&&!T1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function T7(c){return Q2(c)?c:new Proxy(c,If)}/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function C2(c,a,e,r){try{return r?c(...r):c()}catch(i){O4(i,a,e)}}function U1(c,a,e,r){if(G(c)){const s=C2(c,a,e,r);return s&&o7(s)&&s.catch(n=>{O4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(U1(c[s],a,e,r));return i}function O4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,l=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const t=s.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,l)===!1)return}s=s.parent}const f=a.appContext.config.errorHandler;if(f){C2(f,null,10,[c,n,l]);return}}Gf(c,e,i,r)}function Gf(c,a,e,r=!0){console.error(c)}let w3=!1,E6=!1;const b1=[];let Y1=0;const c3=[];let u2=null,k2=0;const R7=Promise.resolve();let C8=null;function d8(c){const a=C8||R7;return c?a.then(this?c.bind(this):c):a}function Wf(c){let a=Y1+1,e=b1.length;for(;a<e;){const r=a+e>>>1,i=b1[r],s=k3(i);s<c||s===c&&i.pre?a=r+1:e=r}return a}function L8(c){(!b1.length||!b1.includes(c,w3&&c.allowRecurse?Y1+1:Y1))&&(c.id==null?b1.push(c):b1.splice(Wf(c.id),0,c),_7())}function _7(){!w3&&!E6&&(E6=!0,C8=R7.then(F7))}function Zf(c){const a=b1.indexOf(c);a>Y1&&b1.splice(a,1)}function jf(c){U(c)?c3.push(...c):(!u2||!u2.includes(c,c.allowRecurse?k2+1:k2))&&c3.push(c),_7()}function K0(c,a,e=w3?Y1+1:0){for(;e<b1.length;e++){const r=b1[e];if(r&&r.pre){if(c&&r.id!==c.uid)continue;b1.splice(e,1),e--,r()}}}function B7(c){if(c3.length){const a=[...new Set(c3)].sort((e,r)=>k3(e)-k3(r));if(c3.length=0,u2){u2.push(...a);return}for(u2=a,k2=0;k2<u2.length;k2++)u2[k2]();u2=null,k2=0}}const k3=c=>c.id==null?1/0:c.id,$f=(c,a)=>{const e=k3(c)-k3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function F7(c){E6=!1,w3=!0,b1.sort($f);try{for(Y1=0;Y1<b1.length;Y1++){const a=b1[Y1];a&&a.active!==!1&&C2(a,null,14)}}finally{Y1=0,b1.length=0,B7(),w3=!1,C8=null,(b1.length||c3.length)&&F7()}}function Kf(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||r1;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:h,trim:u}=r[o]||r1;u&&(i=e.map(p=>m1(p)?p.trim():p)),h&&(i=e.map(S3))}let l,f=r[l=V6(a)]||r[l=V6(J1(a))];!f&&s&&(f=r[l=V6(f3(a))]),f&&U1(f,c,6,i);const t=r[l+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,U1(t,c,6,i)}}function E7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},l=!1;if(!G(c)){const f=t=>{const o=E7(t,a,!0);o&&(l=!0,C1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!s&&!l?(e1(c)&&r.set(c,null),null):(U(s)?s.forEach(f=>n[f]=null):C1(n,s),e1(c)&&r.set(c,n),n)}function U4(c,a){return!c||!R4(a)?!1:(a=a.slice(2).replace(/Once$/,""),$(c,a[0].toLowerCase()+a.slice(1))||$(c,f3(a))||$(c,a))}let A1=null,I4=null;function b4(c){const a=A1;return A1=c,I4=c&&c.type.__scopeId||null,a}function q3(c){I4=c}function O3(){I4=null}function Xf(c,a=A1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&n5(-1);const s=b4(a);let n;try{n=c(...i)}finally{b4(s),r._d&&n5(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function C6(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:l,attrs:f,emit:t,render:o,renderCache:h,data:u,setupState:p,ctx:S,inheritAttrs:A}=c;let F,C;const L=b4(c);try{if(e.shapeFlag&4){const q=i||r,W=q;F=X1(o.call(W,q,h,s,p,u,S)),C=f}else{const q=a;F=X1(q.length>1?q(s,{attrs:f,slots:l,emit:t}):q(s,null)),C=a.props?f:Yf(f)}}catch(q){L3.length=0,O4(q,c,1),F=M1(F2)}let k=F;if(C&&A!==!1){const q=Object.keys(C),{shapeFlag:W}=k;q.length&&W&7&&(n&&q.some(f8)&&(C=Qf(C,n)),k=i3(k,C))}return e.dirs&&(k=i3(k),k.dirs=k.dirs?k.dirs.concat(e.dirs):e.dirs),e.transition&&(k.transition=e.transition),F=k,b4(L),F}const Yf=c=>{let a;for(const e in c)(e==="class"||e==="style"||R4(e))&&((a||(a={}))[e]=c[e]);return a},Qf=(c,a)=>{const e={};for(const r in c)(!f8(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Jf(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:l,patchFlag:f}=a,t=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?X0(r,n,t):!!n;if(f&8){const o=a.dynamicProps;for(let h=0;h<o.length;h++){const u=o[h];if(n[u]!==r[u]&&!U4(t,u))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?X0(r,n,t):!0:!!n;return!1}function X0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!U4(e,s))return!0}return!1}function co({vnode:c,parent:a},e){for(;a;){const r=a.subTree;if(r.suspense&&r.suspense.activeBranch===c&&(r.el=c.el),r===c)(c=a.vnode).el=e,a=a.parent;else break}}const g8="components";function D7(c,a){return O7(g8,c,!0,a)||c}const q7=Symbol.for("v-ndc");function ao(c){return m1(c)?O7(g8,c,!1)||c:c||q7}function O7(c,a,e=!0,r=!1){const i=A1||x1;if(i){const s=i.type;if(c===g8){const l=Xo(s,!1);if(l&&(l===a||l===J1(a)||l===F4(J1(a))))return s}const n=Y0(i[c]||s[c],a)||Y0(i.appContext[c],a);return!n&&r?s:n}}function Y0(c,a){return c&&(c[a]||c[J1(a)]||c[F4(J1(a))])}const eo=c=>c.__isSuspense;function ro(c,a){a&&a.pendingBranch?U(c)?a.effects.push(...c):a.effects.push(c):jf(c)}const io=Symbol.for("v-scx"),so=()=>i2(io),r4={};function M3(c,a,e){return U7(c,a,e)}function U7(c,a,{immediate:e,deep:r,flush:i,once:s,onTrack:n,onTrigger:l}=r1){if(a&&s){const D=a;a=(...a1)=>{D(...a1),W()}}const f=x1,t=D=>r===!0?D:P2(D,r===!1?1:void 0);let o,h=!1,u=!1;if(T1(c)?(o=()=>c.value,h=g4(c)):Q2(c)?(o=()=>t(c),h=!0):U(c)?(u=!0,h=c.some(D=>Q2(D)||g4(D)),o=()=>c.map(D=>{if(T1(D))return D.value;if(Q2(D))return t(D);if(G(D))return C2(D,f,2)})):G(c)?a?o=()=>C2(c,f,2):o=()=>(p&&p(),U1(c,f,3,[S])):o=F1,a&&r){const D=o;o=()=>P2(D())}let p,S=D=>{p=k.onStop=()=>{C2(D,f,4),p=k.onStop=void 0}},A;if($4)if(S=F1,a?e&&U1(a,f,3,[o(),u?[]:void 0,S]):o(),i==="sync"){const D=so();A=D.__watcherHandles||(D.__watcherHandles=[])}else return F1;let F=u?new Array(c.length).fill(r4):r4;const C=()=>{if(!(!k.active||!k.dirty))if(a){const D=k.run();(r||h||(u?D.some((a1,d1)=>L2(a1,F[d1])):L2(D,F)))&&(p&&p(),U1(a,f,3,[D,F===r4?void 0:u&&F[0]===r4?[]:F,S]),F=D)}else k.run()};C.allowRecurse=!!a;let L;i==="sync"?L=C:i==="post"?L=()=>k1(C,f&&f.suspense):(C.pre=!0,f&&(C.id=f.uid),L=()=>L8(C));const k=new z8(o,F1,L),q=Mf(),W=()=>{k.stop(),q&&o8(q.effects,k)};return a?e?C():F=k.run():i==="post"?k1(k.run.bind(k),f&&f.suspense):k.run(),A&&A.push(W),W}function no(c,a,e){const r=this.proxy,i=m1(c)?c.includes(".")?I7(r,c):()=>r[c]:c.bind(r,r);let s;G(a)?s=a:(s=a.handler,e=a);const n=U3(this),l=U7(i,s.bind(r),e);return n(),l}function I7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function P2(c,a,e=0,r){if(!e1(c)||c.__v_skip)return c;if(a&&a>0){if(e>=a)return c;e++}if(r=r||new Set,r.has(c))return c;if(r.add(c),T1(c))P2(c.value,a,e,r);else if(U(c))for(let i=0;i<c.length;i++)P2(c[i],a,e,r);else if(_4(c)||Y2(c))c.forEach(i=>{P2(i,a,e,r)});else if(m7(c))for(const i in c)P2(c[i],a,e,r);return c}function i1(c,a){if(A1===null)return c;const e=K4(A1)||A1.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[s,n,l,f=r1]=a[i];s&&(G(s)&&(s={mounted:s,updated:s}),s.deep&&P2(n),r.push({dir:s,instance:e,value:n,oldValue:void 0,arg:l,modifiers:f}))}return c}function y2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const l=i[n];s&&(l.oldValue=s[n].value);let f=l.dir[r];f&&(q2(),U1(f,e,8,[c.el,l,c,a]),O2())}}/*! #__NO_SIDE_EFFECTS__ */function b8(c,a){return G(c)?C1({name:c.name},a,{setup:c}):c}const u4=c=>!!c.type.__asyncLoader,G7=c=>c.type.__isKeepAlive;function lo(c,a){W7(c,"a",a)}function fo(c,a){W7(c,"da",a)}function W7(c,a,e=x1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(G4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)G7(i.parent.vnode)&&oo(r,a,e,i),i=i.parent}}function oo(c,a,e,r){const i=G4(a,c,r,!0);Z7(()=>{o8(r[a],i)},e)}function G4(c,a,e=x1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;q2();const l=U3(e),f=U1(a,e,c,n);return l(),O2(),f});return r?i.unshift(s):i.push(s),s}}const f2=c=>(a,e=x1)=>(!$4||c==="sp")&&G4(c,(...r)=>a(...r),e),to=f2("bm"),mo=f2("m"),vo=f2("bu"),zo=f2("u"),ho=f2("bum"),Z7=f2("um"),uo=f2("sp"),Ho=f2("rtg"),po=f2("rtc");function Vo(c,a=x1){G4("ec",c,a)}function W4(c,a,e,r){let i;const s=e&&e[r];if(U(c)||m1(c)){i=new Array(c.length);for(let n=0,l=c.length;n<l;n++)i[n]=a(c[n],n,void 0,s&&s[n])}else if(typeof c=="number"){i=new Array(c);for(let n=0;n<c;n++)i[n]=a(n+1,n,void 0,s&&s[n])}else if(e1(c))if(c[Symbol.iterator])i=Array.from(c,(n,l)=>a(n,l,void 0,s&&s[l]));else{const n=Object.keys(c);i=new Array(n.length);for(let l=0,f=n.length;l<f;l++){const t=n[l];i[l]=a(c[t],t,l,s&&s[l])}}else i=[];return e&&(e[r]=i),i}const D6=c=>c?n9(c)?K4(c)||c.proxy:D6(c.parent):null,C3=C1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>D6(c.parent),$root:c=>D6(c.root),$emit:c=>c.emit,$options:c=>x8(c),$forceUpdate:c=>c.f||(c.f=()=>{c.effect.dirty=!0,L8(c.update)}),$nextTick:c=>c.n||(c.n=d8.bind(c.proxy)),$watch:c=>no.bind(c)}),d6=(c,a)=>c!==r1&&!c.__isScriptSetup&&$(c,a),Mo={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:l,appContext:f}=c;let t;if(a[0]!=="$"){const p=n[a];if(p!==void 0)switch(p){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(d6(r,a))return n[a]=1,r[a];if(i!==r1&&$(i,a))return n[a]=2,i[a];if((t=c.propsOptions[0])&&$(t,a))return n[a]=3,s[a];if(e!==r1&&$(e,a))return n[a]=4,e[a];q6&&(n[a]=0)}}const o=C3[a];let h,u;if(o)return a==="$attrs"&&P1(c,"get",a),o(c);if((h=l.__cssModules)&&(h=h[a]))return h;if(e!==r1&&$(e,a))return n[a]=4,e[a];if(u=f.config.globalProperties,$(u,a))return u[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return d6(i,a)?(i[a]=e,!0):r!==r1&&$(r,a)?(r[a]=e,!0):$(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let l;return!!e[n]||c!==r1&&$(c,n)||d6(a,n)||(l=s[0])&&$(l,n)||$(r,n)||$(C3,n)||$(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:$(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function Q0(c){return U(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let q6=!0;function Co(c){const a=x8(c),e=c.proxy,r=c.ctx;q6=!1,a.beforeCreate&&J0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:l,provide:f,inject:t,created:o,beforeMount:h,mounted:u,beforeUpdate:p,updated:S,activated:A,deactivated:F,beforeDestroy:C,beforeUnmount:L,destroyed:k,unmounted:q,render:W,renderTracked:D,renderTriggered:a1,errorCaptured:d1,serverPrefetch:L1,expose:B1,inheritAttrs:t2,components:S2,directives:Z1,filters:m3}=a;if(t&&Lo(t,r,null),n)for(const J in n){const X=n[J];G(X)&&(r[J]=X.bind(e))}if(i){const J=i.call(e,e);e1(J)&&(c.data=q4(J))}if(q6=!0,s)for(const J in s){const X=s[J],c2=G(X)?X.bind(e,e):G(X.get)?X.get.bind(e,e):F1,m2=!G(X)&&G(X.set)?X.set.bind(e):F1,j1=p1({get:c2,set:m2});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>j1.value,set:y1=>j1.value=y1})}if(l)for(const J in l)j7(l[J],r,e,J);if(f){const J=G(f)?f.call(e):f;Reflect.ownKeys(J).forEach(X=>{H4(X,J[X])})}o&&J0(o,c,"c");function z1(J,X){U(X)?X.forEach(c2=>J(c2.bind(e))):X&&J(X.bind(e))}if(z1(to,h),z1(mo,u),z1(vo,p),z1(zo,S),z1(lo,A),z1(fo,F),z1(Vo,d1),z1(po,D),z1(Ho,a1),z1(ho,L),z1(Z7,q),z1(uo,L1),U(B1))if(B1.length){const J=c.exposed||(c.exposed={});B1.forEach(X=>{Object.defineProperty(J,X,{get:()=>e[X],set:c2=>e[X]=c2})})}else c.exposed||(c.exposed={});W&&c.render===F1&&(c.render=W),t2!=null&&(c.inheritAttrs=t2),S2&&(c.components=S2),Z1&&(c.directives=Z1)}function Lo(c,a,e=F1){U(c)&&(c=O6(c));for(const r in c){const i=c[r];let s;e1(i)?"default"in i?s=i2(i.from||r,i.default,!0):s=i2(i.from||r):s=i2(i),T1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function J0(c,a,e){U1(U(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function j7(c,a,e,r){const i=r.includes(".")?I7(e,r):()=>e[r];if(m1(c)){const s=a[c];G(s)&&M3(i,s)}else if(G(c))M3(i,c.bind(e));else if(e1(c))if(U(c))c.forEach(s=>j7(s,a,e,r));else{const s=G(c.handler)?c.handler.bind(e):a[c.handler];G(s)&&M3(i,s,c)}}function x8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,l=s.get(a);let f;return l?f=l:!i.length&&!e&&!r?f=a:(f={},i.length&&i.forEach(t=>x4(f,t,n,!0)),x4(f,a,n)),e1(a)&&s.set(a,f),f}function x4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&x4(c,s,e,!0),i&&i.forEach(n=>x4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=go[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const go={data:c5,props:a5,emits:a5,methods:H3,computed:H3,beforeCreate:S1,created:S1,beforeMount:S1,mounted:S1,beforeUpdate:S1,updated:S1,beforeDestroy:S1,beforeUnmount:S1,destroyed:S1,unmounted:S1,activated:S1,deactivated:S1,errorCaptured:S1,serverPrefetch:S1,components:H3,directives:H3,watch:xo,provide:c5,inject:bo};function c5(c,a){return a?c?function(){return C1(G(c)?c.call(this,this):c,G(a)?a.call(this,this):a)}:a:c}function bo(c,a){return H3(O6(c),O6(a))}function O6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function S1(c,a){return c?[...new Set([].concat(c,a))]:a}function H3(c,a){return c?C1(Object.create(null),c,a):a}function a5(c,a){return c?U(c)&&U(a)?[...new Set([...c,...a])]:C1(Object.create(null),Q0(c),Q0(a??{})):a}function xo(c,a){if(!c)return a;if(!a)return c;const e=C1(Object.create(null),c);for(const r in a)e[r]=S1(c[r],a[r]);return e}function $7(){return{app:null,config:{isNativeTag:rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let No=0;function So(c,a){return function(r,i=null){G(r)||(r=C1({},r)),i!=null&&!e1(i)&&(i=null);const s=$7(),n=new WeakSet;let l=!1;const f=s.app={_uid:No++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Qo,get config(){return s.config},set config(t){},use(t,...o){return n.has(t)||(t&&G(t.install)?(n.add(t),t.install(f,...o)):G(t)&&(n.add(t),t(f,...o))),f},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),f},component(t,o){return o?(s.components[t]=o,f):s.components[t]},directive(t,o){return o?(s.directives[t]=o,f):s.directives[t]},mount(t,o,h){if(!l){const u=M1(r,i);return u.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),o&&a?a(u,t):c(u,t,h),l=!0,f._container=t,t.__vue_app__=f,K4(u.component)||u.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,o){return s.provides[t]=o,f},runWithContext(t){const o=d3;d3=f;try{return t()}finally{d3=o}}};return f}}let d3=null;function H4(c,a){if(x1){let e=x1.provides;const r=x1.parent&&x1.parent.provides;r===e&&(e=x1.provides=Object.create(r)),e[c]=a}}function i2(c,a,e=!1){const r=x1||A1;if(r||d3){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:d3._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&G(a)?a.call(r&&r.proxy):a}}function yo(c,a,e,r=!1){const i={},s={};L4(s,j4,1),c.propsDefaults=Object.create(null),K7(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:N7(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function wo(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,l=K(i),[f]=c.propsOptions;let t=!1;if((r||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let h=0;h<o.length;h++){let u=o[h];if(U4(c.emitsOptions,u))continue;const p=a[u];if(f)if($(s,u))p!==s[u]&&(s[u]=p,t=!0);else{const S=J1(u);i[S]=U6(f,l,S,p,c,!1)}else p!==s[u]&&(s[u]=p,t=!0)}}}else{K7(c,a,i,s)&&(t=!0);let o;for(const h in l)(!a||!$(a,h)&&((o=f3(h))===h||!$(a,o)))&&(f?e&&(e[h]!==void 0||e[o]!==void 0)&&(i[h]=U6(f,l,h,void 0,c,!0)):delete i[h]);if(s!==l)for(const h in s)(!a||!$(a,h))&&(delete s[h],t=!0)}t&&r2(c,"set","$attrs")}function K7(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(V3(f))continue;const t=a[f];let o;i&&$(i,o=J1(f))?!s||!s.includes(o)?e[o]=t:(l||(l={}))[o]=t:U4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,n=!0)}if(s){const f=K(e),t=l||r1;for(let o=0;o<s.length;o++){const h=s[o];e[h]=U6(i,f,h,t[h],c,!$(t,h))}}return n}function U6(c,a,e,r,i,s){const n=c[e];if(n!=null){const l=$(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&G(f)){const{propsDefaults:t}=i;if(e in t)r=t[e];else{const o=U3(i);r=t[e]=f.call(null,a),o()}}else r=f}n[0]&&(s&&!l?r=!1:n[1]&&(r===""||r===f3(e))&&(r=!0))}return r}function X7(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},l=[];let f=!1;if(!G(c)){const o=h=>{f=!0;const[u,p]=X7(h,a,!0);C1(n,u),p&&l.push(...p)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!s&&!f)return e1(c)&&r.set(c,X2),X2;if(U(s))for(let o=0;o<s.length;o++){const h=J1(s[o]);e5(h)&&(n[h]=r1)}else if(s)for(const o in s){const h=J1(o);if(e5(h)){const u=s[o],p=n[h]=U(u)||G(u)?{type:u}:C1({},u);if(p){const S=s5(Boolean,p.type),A=s5(String,p.type);p[0]=S>-1,p[1]=A<0||S<A,(S>-1||$(p,"default"))&&l.push(h)}}}const t=[n,l];return e1(c)&&r.set(c,t),t}function e5(c){return c[0]!=="$"&&!V3(c)}function r5(c){return c===null?"null":typeof c=="function"?c.name||"":typeof c=="object"&&c.constructor&&c.constructor.name||""}function i5(c,a){return r5(c)===r5(a)}function s5(c,a){return U(a)?a.findIndex(e=>i5(e,c)):G(a)&&i5(a,c)?0:-1}const Y7=c=>c[0]==="_"||c==="$stable",N8=c=>U(c)?c.map(X1):[X1(c)],ko=(c,a,e)=>{if(a._n)return a;const r=Xf((...i)=>N8(a(...i)),e);return r._c=!1,r},Q7=(c,a,e)=>{const r=c._ctx;for(const i in c){if(Y7(i))continue;const s=c[i];if(G(s))a[i]=ko(i,s,r);else if(s!=null){const n=N8(s);a[i]=()=>n}}},J7=(c,a)=>{const e=N8(a);c.slots.default=()=>e},Ao=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=K(a),L4(a,"_",e)):Q7(a,c.slots={})}else c.slots={},a&&J7(c,a);L4(c.slots,j4,1)},Po=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=r1;if(r.shapeFlag&32){const l=a._;l?e&&l===1?s=!1:(C1(i,a),!e&&l===1&&delete i._):(s=!a.$stable,Q7(a,i)),n=a}else a&&(J7(c,a),n={default:1});if(s)for(const l in i)!Y7(l)&&n[l]==null&&delete i[l]};function I6(c,a,e,r,i=!1){if(U(c)){c.forEach((u,p)=>I6(u,a&&(U(a)?a[p]:a),e,r,i));return}if(u4(r)&&!i)return;const s=r.shapeFlag&4?K4(r.component)||r.component.proxy:r.el,n=i?null:s,{i:l,r:f}=c,t=a&&a.r,o=l.refs===r1?l.refs={}:l.refs,h=l.setupState;if(t!=null&&t!==f&&(m1(t)?(o[t]=null,$(h,t)&&(h[t]=null)):T1(t)&&(t.value=null)),G(f))C2(f,l,12,[n,o]);else{const u=m1(f),p=T1(f);if(u||p){const S=()=>{if(c.f){const A=u?$(h,f)?h[f]:o[f]:f.value;i?U(A)&&o8(A,s):U(A)?A.includes(s)||A.push(s):u?(o[f]=[s],$(h,f)&&(h[f]=o[f])):(f.value=[s],c.k&&(o[c.k]=f.value))}else u?(o[f]=n,$(h,f)&&(h[f]=n)):p&&(f.value=n,c.k&&(o[c.k]=n))};n?(S.id=-1,k1(S,e)):S()}}}const k1=ro;function To(c){return Ro(c)}function Ro(c,a){const e=v7();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:l,createComment:f,setText:t,setElementText:o,parentNode:h,nextSibling:u,setScopeId:p=F1,insertStaticContent:S}=c,A=(m,v,H,d=null,V=null,x=null,w=void 0,b=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!z3(m,v)&&(d=M(m),y1(m,V,x,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:g,ref:R,shapeFlag:O}=v;switch(g){case Z4:F(m,v,H,d);break;case F2:C(m,v,H,d);break;case p4:m==null&&L(v,H,d,w);break;case H1:S2(m,v,H,d,V,x,w,b,N);break;default:O&1?W(m,v,H,d,V,x,w,b,N):O&6?Z1(m,v,H,d,V,x,w,b,N):(O&64||O&128)&&g.process(m,v,H,d,V,x,w,b,N,B)}R!=null&&V&&I6(R,m&&m.ref,x,v||m,!v)},F=(m,v,H,d)=>{if(m==null)r(v.el=l(v.children),H,d);else{const V=v.el=m.el;v.children!==m.children&&t(V,v.children)}},C=(m,v,H,d)=>{m==null?r(v.el=f(v.children||""),H,d):v.el=m.el},L=(m,v,H,d)=>{[m.el,m.anchor]=S(m.children,v,H,d,m.el,m.anchor)},k=({el:m,anchor:v},H,d)=>{let V;for(;m&&m!==v;)V=u(m),r(m,H,d),m=V;r(v,H,d)},q=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=u(m),i(m),m=H;i(v)},W=(m,v,H,d,V,x,w,b,N)=>{v.type==="svg"?w="svg":v.type==="math"&&(w="mathml"),m==null?D(v,H,d,V,x,w,b,N):L1(m,v,V,x,w,b,N)},D=(m,v,H,d,V,x,w,b)=>{let N,g;const{props:R,shapeFlag:O,transition:E,dirs:I}=m;if(N=m.el=n(m.type,x,R&&R.is,R),O&8?o(N,m.children):O&16&&d1(m.children,N,null,d,V,L6(m,x),w,b),I&&y2(m,null,d,"created"),a1(N,m,m.scopeId,w,d),R){for(const c1 in R)c1!=="value"&&!V3(c1)&&s(N,c1,null,R[c1],x,m.children,d,V,g1);"value"in R&&s(N,"value",null,R.value,x),(g=R.onVnodeBeforeMount)&&K1(g,d,m)}I&&y2(m,null,d,"beforeMount");const Z=_o(V,E);Z&&E.beforeEnter(N),r(N,v,H),((g=R&&R.onVnodeMounted)||Z||I)&&k1(()=>{g&&K1(g,d,m),Z&&E.enter(N),I&&y2(m,null,d,"mounted")},V)},a1=(m,v,H,d,V)=>{if(H&&p(m,H),d)for(let x=0;x<d.length;x++)p(m,d[x]);if(V){let x=V.subTree;if(v===x){const w=V.vnode;a1(m,w,w.scopeId,w.slotScopeIds,V.parent)}}},d1=(m,v,H,d,V,x,w,b,N=0)=>{for(let g=N;g<m.length;g++){const R=m[g]=b?H2(m[g]):X1(m[g]);A(null,R,v,H,d,V,x,w,b)}},L1=(m,v,H,d,V,x,w)=>{const b=v.el=m.el;let{patchFlag:N,dynamicChildren:g,dirs:R}=v;N|=m.patchFlag&16;const O=m.props||r1,E=v.props||r1;let I;if(H&&w2(H,!1),(I=E.onVnodeBeforeUpdate)&&K1(I,H,v,m),R&&y2(v,m,H,"beforeUpdate"),H&&w2(H,!0),g?B1(m.dynamicChildren,g,b,H,d,L6(v,V),x):w||X(m,v,b,null,H,d,L6(v,V),x,!1),N>0){if(N&16)t2(b,v,O,E,H,d,V);else if(N&2&&O.class!==E.class&&s(b,"class",null,E.class,V),N&4&&s(b,"style",O.style,E.style,V),N&8){const Z=v.dynamicProps;for(let c1=0;c1<Z.length;c1++){const f1=Z[c1],h1=O[f1],E1=E[f1];(E1!==h1||f1==="value")&&s(b,f1,h1,E1,V,m.children,H,d,g1)}}N&1&&m.children!==v.children&&o(b,v.children)}else!w&&g==null&&t2(b,v,O,E,H,d,V);((I=E.onVnodeUpdated)||R)&&k1(()=>{I&&K1(I,H,v,m),R&&y2(v,m,H,"updated")},d)},B1=(m,v,H,d,V,x,w)=>{for(let b=0;b<v.length;b++){const N=m[b],g=v[b],R=N.el&&(N.type===H1||!z3(N,g)||N.shapeFlag&70)?h(N.el):H;A(N,g,R,null,d,V,x,w,!0)}},t2=(m,v,H,d,V,x,w)=>{if(H!==d){if(H!==r1)for(const b in H)!V3(b)&&!(b in d)&&s(m,b,H[b],null,w,v.children,V,x,g1);for(const b in d){if(V3(b))continue;const N=d[b],g=H[b];N!==g&&b!=="value"&&s(m,b,g,N,w,v.children,V,x,g1)}"value"in d&&s(m,"value",H.value,d.value,w)}},S2=(m,v,H,d,V,x,w,b,N)=>{const g=v.el=m?m.el:l(""),R=v.anchor=m?m.anchor:l("");let{patchFlag:O,dynamicChildren:E,slotScopeIds:I}=v;I&&(b=b?b.concat(I):I),m==null?(r(g,H,d),r(R,H,d),d1(v.children||[],H,R,V,x,w,b,N)):O>0&&O&64&&E&&m.dynamicChildren?(B1(m.dynamicChildren,E,H,V,x,w,b),(v.key!=null||V&&v===V.subTree)&&c9(m,v,!0)):X(m,v,H,R,V,x,w,b,N)},Z1=(m,v,H,d,V,x,w,b,N)=>{v.slotScopeIds=b,m==null?v.shapeFlag&512?V.ctx.activate(v,H,d,w,N):m3(v,H,d,V,x,w,N):I2(m,v,N)},m3=(m,v,H,d,V,x,w)=>{const b=m.component=Wo(m,d,V);if(G7(m)&&(b.ctx.renderer=B),Zo(b),b.asyncDep){if(V&&V.registerDep(b,z1),!m.el){const N=b.subTree=M1(F2);C(null,N,v,H)}}else z1(b,m,v,H,V,x,w)},I2=(m,v,H)=>{const d=v.component=m.component;if(Jf(m,v,H))if(d.asyncDep&&!d.asyncResolved){J(d,v,H);return}else d.next=v,Zf(d.update),d.effect.dirty=!0,d.update();else v.el=m.el,d.vnode=v},z1=(m,v,H,d,V,x,w)=>{const b=()=>{if(m.isMounted){let{next:R,bu:O,u:E,parent:I,vnode:Z}=m;{const Z2=a9(m);if(Z2){R&&(R.el=Z.el,J(m,R,w)),Z2.asyncDep.then(()=>{m.isUnmounted||b()});return}}let c1=R,f1;w2(m,!1),R?(R.el=Z.el,J(m,R,w)):R=Z,O&&z4(O),(f1=R.props&&R.props.onVnodeBeforeUpdate)&&K1(f1,I,R,Z),w2(m,!0);const h1=C6(m),E1=m.subTree;m.subTree=h1,A(E1,h1,h(E1.el),M(E1),m,V,x),R.el=h1.el,c1===null&&co(m,h1.el),E&&k1(E,V),(f1=R.props&&R.props.onVnodeUpdated)&&k1(()=>K1(f1,I,R,Z),V)}else{let R;const{el:O,props:E}=v,{bm:I,m:Z,parent:c1}=m,f1=u4(v);if(w2(m,!1),I&&z4(I),!f1&&(R=E&&E.onVnodeBeforeMount)&&K1(R,c1,v),w2(m,!0),O&&l1){const h1=()=>{m.subTree=C6(m),l1(O,m.subTree,m,V,null)};f1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&h1()):h1()}else{const h1=m.subTree=C6(m);A(null,h1,H,d,m,V,x),v.el=h1.el}if(Z&&k1(Z,V),!f1&&(R=E&&E.onVnodeMounted)){const h1=v;k1(()=>K1(R,c1,h1),V)}(v.shapeFlag&256||c1&&u4(c1.vnode)&&c1.vnode.shapeFlag&256)&&m.a&&k1(m.a,V),m.isMounted=!0,v=H=d=null}},N=m.effect=new z8(b,F1,()=>L8(g),m.scope),g=m.update=()=>{N.dirty&&N.run()};g.id=m.uid,w2(m,!0),g()},J=(m,v,H)=>{v.component=m;const d=m.vnode.props;m.vnode=v,m.next=null,wo(m,v.props,d,H),Po(m,v.children,H),q2(),K0(m),O2()},X=(m,v,H,d,V,x,w,b,N=!1)=>{const g=m&&m.children,R=m?m.shapeFlag:0,O=v.children,{patchFlag:E,shapeFlag:I}=v;if(E>0){if(E&128){m2(g,O,H,d,V,x,w,b,N);return}else if(E&256){c2(g,O,H,d,V,x,w,b,N);return}}I&8?(R&16&&g1(g,V,x),O!==g&&o(H,O)):R&16?I&16?m2(g,O,H,d,V,x,w,b,N):g1(g,V,x,!0):(R&8&&o(H,""),I&16&&d1(O,H,d,V,x,w,b,N))},c2=(m,v,H,d,V,x,w,b,N)=>{m=m||X2,v=v||X2;const g=m.length,R=v.length,O=Math.min(g,R);let E;for(E=0;E<O;E++){const I=v[E]=N?H2(v[E]):X1(v[E]);A(m[E],I,H,null,V,x,w,b,N)}g>R?g1(m,V,x,!0,!1,O):d1(v,H,d,V,x,w,b,N,O)},m2=(m,v,H,d,V,x,w,b,N)=>{let g=0;const R=v.length;let O=m.length-1,E=R-1;for(;g<=O&&g<=E;){const I=m[g],Z=v[g]=N?H2(v[g]):X1(v[g]);if(z3(I,Z))A(I,Z,H,null,V,x,w,b,N);else break;g++}for(;g<=O&&g<=E;){const I=m[O],Z=v[E]=N?H2(v[E]):X1(v[E]);if(z3(I,Z))A(I,Z,H,null,V,x,w,b,N);else break;O--,E--}if(g>O){if(g<=E){const I=E+1,Z=I<R?v[I].el:d;for(;g<=E;)A(null,v[g]=N?H2(v[g]):X1(v[g]),H,Z,V,x,w,b,N),g++}}else if(g>E)for(;g<=O;)y1(m[g],V,x,!0),g++;else{const I=g,Z=g,c1=new Map;for(g=Z;g<=E;g++){const R1=v[g]=N?H2(v[g]):X1(v[g]);R1.key!=null&&c1.set(R1.key,g)}let f1,h1=0;const E1=E-Z+1;let Z2=!1,F0=0;const v3=new Array(E1);for(g=0;g<E1;g++)v3[g]=0;for(g=I;g<=O;g++){const R1=m[g];if(h1>=E1){y1(R1,V,x,!0);continue}let $1;if(R1.key!=null)$1=c1.get(R1.key);else for(f1=Z;f1<=E;f1++)if(v3[f1-Z]===0&&z3(R1,v[f1])){$1=f1;break}$1===void 0?y1(R1,V,x,!0):(v3[$1-Z]=g+1,$1>=F0?F0=$1:Z2=!0,A(R1,v[$1],H,null,V,x,w,b,N),h1++)}const E0=Z2?Bo(v3):X2;for(f1=E0.length-1,g=E1-1;g>=0;g--){const R1=Z+g,$1=v[R1],D0=R1+1<R?v[R1+1].el:d;v3[g]===0?A(null,$1,H,D0,V,x,w,b,N):Z2&&(f1<0||g!==E0[f1]?j1($1,H,D0,2):f1--)}}},j1=(m,v,H,d,V=null)=>{const{el:x,type:w,transition:b,children:N,shapeFlag:g}=m;if(g&6){j1(m.component.subTree,v,H,d);return}if(g&128){m.suspense.move(v,H,d);return}if(g&64){w.move(m,v,H,B);return}if(w===H1){r(x,v,H);for(let O=0;O<N.length;O++)j1(N[O],v,H,d);r(m.anchor,v,H);return}if(w===p4){k(m,v,H);return}if(d!==2&&g&1&&b)if(d===0)b.beforeEnter(x),r(x,v,H),k1(()=>b.enter(x),V);else{const{leave:O,delayLeave:E,afterLeave:I}=b,Z=()=>r(x,v,H),c1=()=>{O(x,()=>{Z(),I&&I()})};E?E(x,Z,c1):c1()}else r(x,v,H)},y1=(m,v,H,d=!1,V=!1)=>{const{type:x,props:w,ref:b,children:N,dynamicChildren:g,shapeFlag:R,patchFlag:O,dirs:E}=m;if(b!=null&&I6(b,null,H,m,!0),R&256){v.ctx.deactivate(m);return}const I=R&1&&E,Z=!u4(m);let c1;if(Z&&(c1=w&&w.onVnodeBeforeUnmount)&&K1(c1,v,m),R&6)Y3(m.component,H,d);else{if(R&128){m.suspense.unmount(H,d);return}I&&y2(m,null,v,"beforeUnmount"),R&64?m.type.remove(m,v,H,V,B,d):g&&(x!==H1||O>0&&O&64)?g1(g,v,H,!1,!0):(x===H1&&O&384||!V&&R&16)&&g1(N,v,H),d&&G2(m)}(Z&&(c1=w&&w.onVnodeUnmounted)||I)&&k1(()=>{c1&&K1(c1,v,m),I&&y2(m,null,v,"unmounted")},H)},G2=m=>{const{type:v,el:H,anchor:d,transition:V}=m;if(v===H1){W2(H,d);return}if(v===p4){q(m);return}const x=()=>{i(H),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(m.shapeFlag&1&&V&&!V.persisted){const{leave:w,delayLeave:b}=V,N=()=>w(H,x);b?b(m.el,x,N):N()}else x()},W2=(m,v)=>{let H;for(;m!==v;)H=u(m),i(m),m=H;i(v)},Y3=(m,v,H)=>{const{bum:d,scope:V,update:x,subTree:w,um:b}=m;d&&z4(d),V.stop(),x&&(x.active=!1,y1(w,m,v,H)),b&&k1(b,v),k1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},g1=(m,v,H,d=!1,V=!1,x=0)=>{for(let w=x;w<m.length;w++)y1(m[w],v,H,d,V)},M=m=>m.shapeFlag&6?M(m.component.subTree):m.shapeFlag&128?m.suspense.next():u(m.anchor||m.el);let T=!1;const y=(m,v,H)=>{m==null?v._vnode&&y1(v._vnode,null,null,!0):A(v._vnode||null,m,v,null,null,null,H),T||(T=!0,K0(),B7(),T=!1),v._vnode=m},B={p:A,um:y1,m:j1,r:G2,mt:m3,mc:d1,pc:X,pbc:B1,n:M,o:c};let Y,l1;return a&&([Y,l1]=a(B)),{render:y,hydrate:Y,createApp:So(y,Y)}}function L6({type:c,props:a},e){return e==="svg"&&c==="foreignObject"||e==="mathml"&&c==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:e}function w2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function _o(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function c9(c,a,e=!1){const r=c.children,i=a.children;if(U(r)&&U(i))for(let s=0;s<r.length;s++){const n=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=H2(i[s]),l.el=n.el),e||c9(n,l)),l.type===Z4&&(l.el=n.el)}}function Bo(c){const a=c.slice(),e=[0];let r,i,s,n,l;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(i=e[e.length-1],c[i]<t){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)l=s+n>>1,c[e[l]]<t?s=l+1:n=l;t<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}function a9(c){const a=c.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:a9(a)}const Fo=c=>c.__isTeleport,H1=Symbol.for("v-fgt"),Z4=Symbol.for("v-txt"),F2=Symbol.for("v-cmt"),p4=Symbol.for("v-stc"),L3=[];let q1=null;function u1(c=!1){L3.push(q1=c?null:[])}function Eo(){L3.pop(),q1=L3[L3.length-1]||null}let A3=1;function n5(c){A3+=c}function e9(c){return c.dynamicChildren=A3>0?q1||X2:null,Eo(),A3>0&&q1&&q1.push(c),c}function N1(c,a,e,r,i,s){return e9(z(c,a,e,r,i,s,!0))}function r9(c,a,e,r,i){return e9(M1(c,a,e,r,i,!0))}function G6(c){return c?c.__v_isVNode===!0:!1}function z3(c,a){return c.type===a.type&&c.key===a.key}const j4="__vInternal",i9=({key:c})=>c??null,V4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?m1(c)||T1(c)||G(c)?{i:A1,r:c,k:a,f:!!e}:c:null);function z(c,a=null,e=null,r=0,i=null,s=c===H1?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&i9(a),ref:a&&V4(a),scopeId:I4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:A1};return l?(S8(f,e),s&128&&c.normalize(f)):e&&(f.shapeFlag|=m1(e)?8:16),A3>0&&!n&&q1&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&q1.push(f),f}const M1=Do;function Do(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===q7)&&(c=F2),G6(c)){const l=i3(c,a,!0);return e&&S8(l,e),A3>0&&!s&&q1&&(l.shapeFlag&6?q1[q1.indexOf(c)]=l:q1.push(l)),l.patchFlag|=-2,l}if(Yo(c)&&(c=c.__vccOpts),a){a=qo(a);let{class:l,style:f}=a;l&&!m1(l)&&(a.class=v8(l)),e1(f)&&(y7(f)&&!U(f)&&(f=C1({},f)),a.style=m8(f))}const n=m1(c)?1:eo(c)?128:Fo(c)?64:e1(c)?4:G(c)?2:0;return z(c,a,e,r,i,n,s,!0)}function qo(c){return c?y7(c)||j4 in c?C1({},c):c:null}function i3(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,l=a?Uo(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&i9(l),ref:a&&a.ref?e&&i?U(i)?i.concat(V4(a)):[i,V4(a)]:V4(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==H1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&i3(c.ssContent),ssFallback:c.ssFallback&&i3(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function j(c=" ",a=0){return M1(Z4,null,c,a)}function Oo(c,a){const e=M1(p4,null,c);return e.staticCount=a,e}function s9(c="",a=!1){return a?(u1(),r9(F2,null,c)):M1(F2,null,c)}function X1(c){return c==null||typeof c=="boolean"?M1(F2):U(c)?M1(H1,null,c.slice()):typeof c=="object"?H2(c):M1(Z4,null,String(c))}function H2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:i3(c)}function S8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(U(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),S8(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(j4 in a)?a._ctx=A1:i===3&&A1&&(A1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else G(a)?(a={default:a,_ctx:A1},e=32):(a=String(a),r&64?(e=16,a=[j(a)]):e=8);c.children=a,c.shapeFlag|=e}function Uo(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=v8([a.class,r.class]));else if(i==="style")a.style=m8([a.style,r.style]);else if(R4(i)){const s=a[i],n=r[i];n&&s!==n&&!(U(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function K1(c,a,e,r=null){U1(c,a,7,[e,r])}const Io=$7();let Go=0;function Wo(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||Io,s={uid:Go++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new pf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:X7(r,i),emitsOptions:E7(r,i),emit:null,emitted:null,propsDefaults:r1,inheritAttrs:r.inheritAttrs,ctx:r1,data:r1,props:r1,attrs:r1,slots:r1,refs:r1,setupState:r1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=Kf.bind(null,s),c.ce&&c.ce(s),s}let x1=null,N4,W6;{const c=v7(),a=(e,r)=>{let i;return(i=c[e])||(i=c[e]=[]),i.push(r),s=>{i.length>1?i.forEach(n=>n(s)):i[0](s)}};N4=a("__VUE_INSTANCE_SETTERS__",e=>x1=e),W6=a("__VUE_SSR_SETTERS__",e=>$4=e)}const U3=c=>{const a=x1;return N4(c),c.scope.on(),()=>{c.scope.off(),N4(a)}},l5=()=>{x1&&x1.scope.off(),N4(null)};function n9(c){return c.vnode.shapeFlag&4}let $4=!1;function Zo(c,a=!1){a&&W6(a);const{props:e,children:r}=c.vnode,i=n9(c);yo(c,e,i,a),Ao(c,r);const s=i?jo(c,a):void 0;return a&&W6(!1),s}function jo(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=w7(new Proxy(c.ctx,Mo));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?Ko(c):null,s=U3(c);q2();const n=C2(r,c,0,[c.props,i]);if(O2(),s(),o7(n)){if(n.then(l5,l5),a)return n.then(l=>{f5(c,l,a)}).catch(l=>{O4(l,c,0)});c.asyncDep=n}else f5(c,n,a)}else l9(c,a)}function f5(c,a,e){G(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:e1(a)&&(c.setupState=T7(a)),l9(c,e)}let o5;function l9(c,a,e){const r=c.type;if(!c.render){if(!a&&o5&&!r.render){const i=r.template||x8(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,t=C1(C1({isCustomElement:s,delimiters:l},n),f);r.render=o5(i,t)}}c.render=r.render||F1}{const i=U3(c);q2();try{Co(c)}finally{O2(),i()}}}function $o(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return P1(c,"get","$attrs"),a[e]}}))}function Ko(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return $o(c)},slots:c.slots,emit:c.emit,expose:a}}function K4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(T7(w7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in C3)return C3[e](c)},has(a,e){return e in a||e in C3}}))}function Xo(c,a=!0){return G(c)?c.displayName||c.name:c.name||a&&c.__name}function Yo(c){return G(c)&&"__vccOpts"in c}const p1=(c,a)=>Df(c,a,$4);function y8(c,a,e){const r=arguments.length;return r===2?e1(a)&&!U(a)?G6(a)?M1(c,null,[a]):M1(c,a):M1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&G6(e)&&(e=[e]),M1(c,a,e))}const Qo="3.4.20";/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Jo="http://www.w3.org/2000/svg",ct="http://www.w3.org/1998/Math/MathML",p2=typeof document<"u"?document:null,t5=p2&&p2.createElement("template"),at={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a==="svg"?p2.createElementNS(Jo,c):a==="mathml"?p2.createElementNS(ct,c):p2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>p2.createTextNode(c),createComment:c=>p2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>p2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{t5.innerHTML=r==="svg"?`<svg>${c}</svg>`:r==="mathml"?`<math>${c}</math>`:c;const l=t5.content;if(r==="svg"||r==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},et=Symbol("_vtc");function rt(c,a,e){const r=c[et];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const S4=Symbol("_vod"),f9=Symbol("_vsh"),g6={beforeMount(c,{value:a},{transition:e}){c[S4]=c.style.display==="none"?"":c.style.display,e&&a?e.beforeEnter(c):h3(c,a)},mounted(c,{value:a},{transition:e}){e&&a&&e.enter(c)},updated(c,{value:a,oldValue:e},{transition:r}){!a!=!e&&(r?a?(r.beforeEnter(c),h3(c,!0),r.enter(c)):r.leave(c,()=>{h3(c,!1)}):h3(c,a))},beforeUnmount(c,{value:a}){h3(c,a)}};function h3(c,a){c.style.display=a?c[S4]:"none",c[f9]=!a}const it=Symbol(""),st=/(^|;)\s*display\s*:/;function nt(c,a,e){const r=c.style,i=m1(e);let s=!1;if(e&&!i){if(a)if(m1(a))for(const n of a.split(";")){const l=n.slice(0,n.indexOf(":")).trim();e[l]==null&&M4(r,l,"")}else for(const n in a)e[n]==null&&M4(r,n,"");for(const n in e)n==="display"&&(s=!0),M4(r,n,e[n])}else if(i){if(a!==e){const n=r[it];n&&(e+=";"+n),r.cssText=e,s=st.test(e)}}else a&&c.removeAttribute("style");S4 in c&&(c[S4]=s?r.display:"",c[f9]&&(r.display="none"))}const m5=/\s*!important$/;function M4(c,a,e){if(U(e))e.forEach(r=>M4(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=lt(c,a);m5.test(e)?c.setProperty(f3(r),e.replace(m5,""),"important"):c[r]=e}}const v5=["Webkit","Moz","ms"],b6={};function lt(c,a){const e=b6[a];if(e)return e;let r=J1(a);if(r!=="filter"&&r in c)return b6[a]=r;r=F4(r);for(let i=0;i<v5.length;i++){const s=v5[i]+r;if(s in c)return b6[a]=s}return a}const z5="http://www.w3.org/1999/xlink";function ft(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(z5,a.slice(6,a.length)):c.setAttributeNS(z5,a,e);else{const s=hf(a);e==null||s&&!z7(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function ot(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){c._value=e;const t=l==="OPTION"?c.getAttribute("value")||"":c.value,o=e??"";t!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=z7(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function A2(c,a,e,r){c.addEventListener(a,e,r)}function tt(c,a,e,r){c.removeEventListener(a,e,r)}const h5=Symbol("_vei");function mt(c,a,e,r,i=null){const s=c[h5]||(c[h5]={}),n=s[a];if(r&&n)n.value=r;else{const[l,f]=vt(a);if(r){const t=s[a]=ut(r,i);A2(c,l,t,f)}else n&&(tt(c,l,n,f),s[a]=void 0)}}const u5=/(?:Once|Passive|Capture)$/;function vt(c){let a;if(u5.test(c)){a={};let r;for(;r=c.match(u5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):f3(c.slice(2)),a]}let x6=0;const zt=Promise.resolve(),ht=()=>x6||(zt.then(()=>x6=0),x6=Date.now());function ut(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;U1(Ht(r,e.value),a,5,[r])};return e.value=c,e.attached=ht(),e}function Ht(c,a){if(U(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const H5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,pt=(c,a,e,r,i,s,n,l,f)=>{const t=i==="svg";a==="class"?rt(c,r,t):a==="style"?nt(c,e,r):R4(a)?f8(a)||mt(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Vt(c,a,r,t))?ot(c,a,r,s,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),ft(c,a,r,t))};function Vt(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&H5(a)&&G(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const i=c.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return H5(a)&&m1(e)?!1:a in c}const y4=c=>{const a=c.props["onUpdate:modelValue"]||!1;return U(a)?e=>z4(a,e):a};function Mt(c){c.target.composing=!0}function p5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const a3=Symbol("_assign"),t1={created(c,{modifiers:{lazy:a,trim:e,number:r}},i){c[a3]=y4(i);const s=r||i.props&&i.props.type==="number";A2(c,a?"change":"input",n=>{if(n.target.composing)return;let l=c.value;e&&(l=l.trim()),s&&(l=S3(l)),c[a3](l)}),e&&A2(c,"change",()=>{c.value=c.value.trim()}),a||(A2(c,"compositionstart",Mt),A2(c,"compositionend",p5),A2(c,"change",p5))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:r,number:i}},s){if(c[a3]=y4(s),c.composing)return;const n=i||c.type==="number"?S3(c.value):c.value,l=a??"";n!==l&&(document.activeElement===c&&c.type!=="range"&&(e||r&&c.value.trim()===l)||(c.value=l))}},Ct={deep:!0,created(c,{value:a,modifiers:{number:e}},r){const i=_4(a);A2(c,"change",()=>{const s=Array.prototype.filter.call(c.options,n=>n.selected).map(n=>e?S3(w4(n)):w4(n));c[a3](c.multiple?i?new Set(s):s:s[0]),c._assigning=!0,d8(()=>{c._assigning=!1})}),c[a3]=y4(r)},mounted(c,{value:a,modifiers:{number:e}}){V5(c,a,e)},beforeUpdate(c,a,e){c[a3]=y4(e)},updated(c,{value:a,modifiers:{number:e}}){c._assigning||V5(c,a,e)}};function V5(c,a,e){const r=c.multiple,i=U(a);if(!(r&&!i&&!_4(a))){for(let s=0,n=c.options.length;s<n;s++){const l=c.options[s],f=w4(l);if(r)if(i){const t=typeof f;t==="string"||t==="number"?l.selected=a.includes(e?S3(f):f):l.selected=Hf(a,f)>-1}else l.selected=a.has(f);else if(E4(w4(l),a)){c.selectedIndex!==s&&(c.selectedIndex=s);return}}!r&&c.selectedIndex!==-1&&(c.selectedIndex=-1)}}function w4(c){return"_value"in c?c._value:c.value}const dt=C1({patchProp:pt},at);let M5;function Lt(){return M5||(M5=To(dt))}const gt=(...c)=>{const a=Lt().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=xt(r);if(!i)return;const s=a._component;!G(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,bt(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function bt(c){if(c instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&c instanceof MathMLElement)return"mathml"}function xt(c){return m1(c)?document.querySelector(c):c}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const j2=typeof document<"u";function Nt(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const Q=Object.assign;function N6(c,a){const e={};for(const r in a){const i=a[r];e[r]=I1(i)?i.map(c):c(i)}return e}const g3=()=>{},I1=Array.isArray,o9=/#/g,St=/&/g,yt=/\//g,wt=/=/g,kt=/\?/g,t9=/\+/g,At=/%5B/g,Pt=/%5D/g,m9=/%5E/g,Tt=/%60/g,v9=/%7B/g,Rt=/%7C/g,z9=/%7D/g,_t=/%20/g;function w8(c){return encodeURI(""+c).replace(Rt,"|").replace(At,"[").replace(Pt,"]")}function Bt(c){return w8(c).replace(v9,"{").replace(z9,"}").replace(m9,"^")}function Z6(c){return w8(c).replace(t9,"%2B").replace(_t,"+").replace(o9,"%23").replace(St,"%26").replace(Tt,"`").replace(v9,"{").replace(z9,"}").replace(m9,"^")}function Ft(c){return Z6(c).replace(wt,"%3D")}function Et(c){return w8(c).replace(o9,"%23").replace(kt,"%3F")}function Dt(c){return c==null?"":Et(c).replace(yt,"%2F")}function P3(c){try{return decodeURIComponent(""+c)}catch{}return""+c}const qt=/\/$/,Ot=c=>c.replace(qt,"");function S6(c,a,e="/"){let r,i={},s="",n="";const l=a.indexOf("#");let f=a.indexOf("?");return l<f&&l>=0&&(f=-1),f>-1&&(r=a.slice(0,f),s=a.slice(f+1,l>-1?l:a.length),i=c(s)),l>-1&&(r=r||a.slice(0,l),n=a.slice(l,a.length)),r=Wt(r??a,e),{fullPath:r+(s&&"?")+s+n,path:r,query:i,hash:P3(n)}}function Ut(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function C5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function It(c,a,e){const r=a.matched.length-1,i=e.matched.length-1;return r>-1&&r===i&&s3(a.matched[r],e.matched[i])&&h9(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function s3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function h9(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Gt(c[e],a[e]))return!1;return!0}function Gt(c,a){return I1(c)?d5(c,a):I1(a)?d5(a,c):c===a}function d5(c,a){return I1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Wt(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=e.length-1,n,l;for(n=0;n<r.length;n++)if(l=r[n],l!==".")if(l==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+r.slice(n).join("/")}var T3;(function(c){c.pop="pop",c.push="push"})(T3||(T3={}));var b3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(b3||(b3={}));function Zt(c){if(!c)if(j2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Ot(c)}const jt=/^[^#]+#/;function $t(c,a){return c.replace(jt,"#")+a}function Kt(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const X4=()=>({left:window.scrollX,top:window.scrollY});function Xt(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),i=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!i)return;a=Kt(i,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.scrollX,a.top!=null?a.top:window.scrollY)}function L5(c,a){return(history.state?history.state.position-a:-1)+c}const j6=new Map;function Yt(c,a){j6.set(c,a)}function Qt(c){const a=j6.get(c);return j6.delete(c),a}let Jt=()=>location.protocol+"//"+location.host;function u9(c,a){const{pathname:e,search:r,hash:i}=a,s=c.indexOf("#");if(s>-1){let l=i.includes(c.slice(s))?c.slice(s).length:1,f=i.slice(l);return f[0]!=="/"&&(f="/"+f),C5(f,"")}return C5(e,c)+r+i}function cm(c,a,e,r){let i=[],s=[],n=null;const l=({state:u})=>{const p=u9(c,location),S=e.value,A=a.value;let F=0;if(u){if(e.value=p,a.value=u,n&&n===S){n=null;return}F=A?u.position-A.position:0}else r(p);i.forEach(C=>{C(e.value,S,{delta:F,type:T3.pop,direction:F?F>0?b3.forward:b3.back:b3.unknown})})};function f(){n=e.value}function t(u){i.push(u);const p=()=>{const S=i.indexOf(u);S>-1&&i.splice(S,1)};return s.push(p),p}function o(){const{history:u}=window;u.state&&u.replaceState(Q({},u.state,{scroll:X4()}),"")}function h(){for(const u of s)u();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:f,listen:t,destroy:h}}function g5(c,a,e,r=!1,i=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:i?X4():null}}function am(c){const{history:a,location:e}=window,r={value:u9(c,e)},i={value:a.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function s(f,t,o){const h=c.indexOf("#"),u=h>-1?(e.host&&document.querySelector("base")?c:c.slice(h))+f:Jt()+c+f;try{a[o?"replaceState":"pushState"](t,"",u),i.value=t}catch(p){console.error(p),e[o?"replace":"assign"](u)}}function n(f,t){const o=Q({},a.state,g5(i.value.back,f,i.value.forward,!0),t,{position:i.value.position});s(f,o,!0),r.value=f}function l(f,t){const o=Q({},i.value,a.state,{forward:f,scroll:X4()});s(o.current,o,!0);const h=Q({},g5(r.value,f,null),{position:o.position+1},t);s(f,h,!1),r.value=f}return{location:r,state:i,push:l,replace:n}}function em(c){c=Zt(c);const a=am(c),e=cm(c,a.state,a.location,a.replace);function r(s,n=!0){n||e.pauseListeners(),history.go(s)}const i=Q({location:"",base:c,go:r,createHref:$t.bind(null,c)},a,e);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>a.state.value}),i}function rm(c){return typeof c=="string"||c&&typeof c=="object"}function H9(c){return typeof c=="string"||typeof c=="symbol"}const z2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},p9=Symbol("");var b5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(b5||(b5={}));function n3(c,a){return Q(new Error,{type:c,[p9]:!0},a)}function a2(c,a){return c instanceof Error&&p9 in c&&(a==null||!!(c.type&a))}const x5="[^/]+?",im={sensitive:!1,strict:!1,start:!0,end:!0},sm=/[.+*?^${}()[\]/\\]/g;function nm(c,a){const e=Q({},im,a),r=[];let i=e.start?"^":"";const s=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(i+="/");for(let h=0;h<t.length;h++){const u=t[h];let p=40+(e.sensitive?.25:0);if(u.type===0)h||(i+="/"),i+=u.value.replace(sm,"\\$&"),p+=40;else if(u.type===1){const{value:S,repeatable:A,optional:F,regexp:C}=u;s.push({name:S,repeatable:A,optional:F});const L=C||x5;if(L!==x5){p+=10;try{new RegExp(`(${L})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${L}): `+q.message)}}let k=A?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(k=F&&t.length<2?`(?:/${k})`:"/"+k),F&&(k+="?"),i+=k,p+=20,F&&(p+=-8),A&&(p+=-20),L===".*"&&(p+=-50)}o.push(p)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(i+="/?"),e.end?i+="$":e.strict&&(i+="(?:/|$)");const n=new RegExp(i,e.sensitive?"":"i");function l(t){const o=t.match(n),h={};if(!o)return null;for(let u=1;u<o.length;u++){const p=o[u]||"",S=s[u-1];h[S.name]=p&&S.repeatable?p.split("/"):p}return h}function f(t){let o="",h=!1;for(const u of c){(!h||!o.endsWith("/"))&&(o+="/"),h=!1;for(const p of u)if(p.type===0)o+=p.value;else if(p.type===1){const{value:S,repeatable:A,optional:F}=p,C=S in t?t[S]:"";if(I1(C)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const L=I1(C)?C.join("/"):C;if(!L)if(F)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);o+=L}}return o||"/"}return{re:n,score:r,keys:s,parse:l,stringify:f}}function lm(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===80?-1:1:c.length>a.length?a.length===1&&a[0]===80?1:-1:0}function fm(c,a){let e=0;const r=c.score,i=a.score;for(;e<r.length&&e<i.length;){const s=lm(r[e],i[e]);if(s)return s;e++}if(Math.abs(i.length-r.length)===1){if(N5(r))return 1;if(N5(i))return-1}return i.length-r.length}function N5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const om={type:0,value:""},tm=/[a-zA-Z0-9_]/;function mm(c){if(!c)return[[]];if(c==="/")return[[om]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(p){throw new Error(`ERR (${e})/"${t}": ${p}`)}let e=0,r=e;const i=[];let s;function n(){s&&i.push(s),s=[]}let l=0,f,t="",o="";function h(){t&&(e===0?s.push({type:0,value:t}):e===1||e===2||e===3?(s.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:t,regexp:o,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),t="")}function u(){t+=f}for(;l<c.length;){if(f=c[l++],f==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:f==="/"?(t&&h(),n()):f===":"?(h(),e=1):u();break;case 4:u(),e=r;break;case 1:f==="("?e=2:tm.test(f)?u():(h(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--);break;case 2:f===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+f:e=3:o+=f;break;case 3:h(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),h(),n(),i}function vm(c,a,e){const r=nm(mm(c.path),e),i=Q(r,{record:c,parent:a,children:[],alias:[]});return a&&!i.record.aliasOf==!a.record.aliasOf&&a.children.push(i),i}function zm(c,a){const e=[],r=new Map;a=w5({strict:!1,end:!0,sensitive:!1},a);function i(o){return r.get(o)}function s(o,h,u){const p=!u,S=hm(o);S.aliasOf=u&&u.record;const A=w5(a,o),F=[S];if("alias"in o){const k=typeof o.alias=="string"?[o.alias]:o.alias;for(const q of k)F.push(Q({},S,{components:u?u.record.components:S.components,path:q,aliasOf:u?u.record:S}))}let C,L;for(const k of F){const{path:q}=k;if(h&&q[0]!=="/"){const W=h.record.path,D=W[W.length-1]==="/"?"":"/";k.path=h.record.path+(q&&D+q)}if(C=vm(k,h,A),u?u.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),p&&o.name&&!y5(C)&&n(o.name)),S.children){const W=S.children;for(let D=0;D<W.length;D++)s(W[D],C,u&&u.children[D])}u=u||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&f(C)}return L?()=>{n(L)}:g3}function n(o){if(H9(o)){const h=r.get(o);h&&(r.delete(o),e.splice(e.indexOf(h),1),h.children.forEach(n),h.alias.forEach(n))}else{const h=e.indexOf(o);h>-1&&(e.splice(h,1),o.record.name&&r.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function l(){return e}function f(o){let h=0;for(;h<e.length&&fm(o,e[h])>=0&&(o.record.path!==e[h].record.path||!V9(o,e[h]));)h++;e.splice(h,0,o),o.record.name&&!y5(o)&&r.set(o.record.name,o)}function t(o,h){let u,p={},S,A;if("name"in o&&o.name){if(u=r.get(o.name),!u)throw n3(1,{location:o});A=u.record.name,p=Q(S5(h.params,u.keys.filter(L=>!L.optional).concat(u.parent?u.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),o.params&&S5(o.params,u.keys.map(L=>L.name))),S=u.stringify(p)}else if(o.path!=null)S=o.path,u=e.find(L=>L.re.test(S)),u&&(p=u.parse(S),A=u.record.name);else{if(u=h.name?r.get(h.name):e.find(L=>L.re.test(h.path)),!u)throw n3(1,{location:o,currentLocation:h});A=u.record.name,p=Q({},h.params,o.params),S=u.stringify(p)}const F=[];let C=u;for(;C;)F.unshift(C.record),C=C.parent;return{name:A,path:S,params:p,matched:F,meta:Hm(F)}}return c.forEach(o=>s(o)),{addRoute:s,resolve:t,removeRoute:n,getRoutes:l,getRecordMatcher:i}}function S5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function hm(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:um(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function um(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function y5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function Hm(c){return c.reduce((a,e)=>Q(a,e.meta),{})}function w5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function V9(c,a){return a.children.some(e=>e===c||V9(c,e))}function pm(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(t9," "),n=s.indexOf("="),l=P3(n<0?s:s.slice(0,n)),f=n<0?null:P3(s.slice(n+1));if(l in a){let t=a[l];I1(t)||(t=a[l]=[t]),t.push(f)}else a[l]=f}return a}function k5(c){let a="";for(let e in c){const r=c[e];if(e=Ft(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(I1(r)?r.map(s=>s&&Z6(s)):[r&&Z6(r)]).forEach(s=>{s!==void 0&&(a+=(a.length?"&":"")+e,s!=null&&(a+="="+s))})}return a}function Vm(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=I1(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return a}const Mm=Symbol(""),A5=Symbol(""),k8=Symbol(""),M9=Symbol(""),$6=Symbol("");function u3(){let c=[];function a(r){return c.push(r),()=>{const i=c.indexOf(r);i>-1&&c.splice(i,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function V2(c,a,e,r,i,s=n=>n()){const n=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,f)=>{const t=u=>{u===!1?f(n3(4,{from:e,to:a})):u instanceof Error?f(u):rm(u)?f(n3(2,{from:a,to:u})):(n&&r.enterCallbacks[i]===n&&typeof u=="function"&&n.push(u),l())},o=s(()=>c.call(r&&r.instances[i],a,e,t));let h=Promise.resolve(o);c.length<3&&(h=h.then(t)),h.catch(u=>f(u))})}function y6(c,a,e,r,i=s=>s()){const s=[];for(const n of c)for(const l in n.components){let f=n.components[l];if(!(a!=="beforeRouteEnter"&&!n.instances[l]))if(Cm(f)){const o=(f.__vccOpts||f)[a];o&&s.push(V2(o,e,r,n,l,i))}else{let t=f();s.push(()=>t.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${n.path}"`));const h=Nt(o)?o.default:o;n.components[l]=h;const p=(h.__vccOpts||h)[a];return p&&V2(p,e,r,n,l,i)()}))}}return s}function Cm(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function P5(c){const a=i2(k8),e=i2(M9),r=p1(()=>a.resolve(J2(c.to))),i=p1(()=>{const{matched:f}=r.value,{length:t}=f,o=f[t-1],h=e.matched;if(!o||!h.length)return-1;const u=h.findIndex(s3.bind(null,o));if(u>-1)return u;const p=T5(f[t-2]);return t>1&&T5(o)===p&&h[h.length-1].path!==p?h.findIndex(s3.bind(null,f[t-2])):u}),s=p1(()=>i.value>-1&&bm(e.params,r.value.params)),n=p1(()=>i.value>-1&&i.value===e.matched.length-1&&h9(e.params,r.value.params));function l(f={}){return gm(f)?a[J2(c.replace)?"replace":"push"](J2(c.to)).catch(g3):Promise.resolve()}return{route:r,href:p1(()=>r.value.href),isActive:s,isExactActive:n,navigate:l}}const dm=b8({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:P5,setup(c,{slots:a}){const e=q4(P5(c)),{options:r}=i2(k8),i=p1(()=>({[R5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[R5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=a.default&&a.default(e);return c.custom?s:y8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:i.value},s)}}}),Lm=dm;function gm(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function bm(c,a){for(const e in a){const r=a[e],i=c[e];if(typeof r=="string"){if(r!==i)return!1}else if(!I1(i)||i.length!==r.length||r.some((s,n)=>s!==i[n]))return!1}return!0}function T5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const R5=(c,a,e)=>c??a??e,xm=b8({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=i2($6),i=p1(()=>c.route||r.value),s=i2(A5,0),n=p1(()=>{let t=J2(s);const{matched:o}=i.value;let h;for(;(h=o[t])&&!h.components;)t++;return t}),l=p1(()=>i.value.matched[n.value]);H4(A5,p1(()=>n.value+1)),H4(Mm,l),H4($6,i);const f=qf();return M3(()=>[f.value,l.value,c.name],([t,o,h],[u,p,S])=>{o&&(o.instances[h]=t,p&&p!==o&&t&&t===u&&(o.leaveGuards.size||(o.leaveGuards=p.leaveGuards),o.updateGuards.size||(o.updateGuards=p.updateGuards))),t&&o&&(!p||!s3(o,p)||!u)&&(o.enterCallbacks[h]||[]).forEach(A=>A(t))},{flush:"post"}),()=>{const t=i.value,o=c.name,h=l.value,u=h&&h.components[o];if(!u)return _5(e.default,{Component:u,route:t});const p=h.props[o],S=p?p===!0?t.params:typeof p=="function"?p(t):p:null,F=y8(u,Q({},S,a,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[o]=null)},ref:f}));return _5(e.default,{Component:F,route:t})||F}}});function _5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const Nm=xm;function Sm(c){const a=zm(c.routes,c),e=c.parseQuery||pm,r=c.stringifyQuery||k5,i=c.history,s=u3(),n=u3(),l=u3(),f=Of(z2);let t=z2;j2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=N6.bind(null,M=>""+M),h=N6.bind(null,Dt),u=N6.bind(null,P3);function p(M,T){let y,B;return H9(M)?(y=a.getRecordMatcher(M),B=T):B=M,a.addRoute(B,y)}function S(M){const T=a.getRecordMatcher(M);T&&a.removeRoute(T)}function A(){return a.getRoutes().map(M=>M.record)}function F(M){return!!a.getRecordMatcher(M)}function C(M,T){if(T=Q({},T||f.value),typeof M=="string"){const v=S6(e,M,T.path),H=a.resolve({path:v.path},T),d=i.createHref(v.fullPath);return Q(v,H,{params:u(H.params),hash:P3(v.hash),redirectedFrom:void 0,href:d})}let y;if(M.path!=null)y=Q({},M,{path:S6(e,M.path,T.path).path});else{const v=Q({},M.params);for(const H in v)v[H]==null&&delete v[H];y=Q({},M,{params:h(v)}),T.params=h(T.params)}const B=a.resolve(y,T),Y=M.hash||"";B.params=o(u(B.params));const l1=Ut(r,Q({},M,{hash:Bt(Y),path:B.path})),m=i.createHref(l1);return Q({fullPath:l1,hash:Y,query:r===k5?Vm(M.query):M.query||{}},B,{redirectedFrom:void 0,href:m})}function L(M){return typeof M=="string"?S6(e,M,f.value.path):Q({},M)}function k(M,T){if(t!==M)return n3(8,{from:T,to:M})}function q(M){return a1(M)}function W(M){return q(Q(L(M),{replace:!0}))}function D(M){const T=M.matched[M.matched.length-1];if(T&&T.redirect){const{redirect:y}=T;let B=typeof y=="function"?y(M):y;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=L(B):{path:B},B.params={}),Q({query:M.query,hash:M.hash,params:B.path!=null?{}:M.params},B)}}function a1(M,T){const y=t=C(M),B=f.value,Y=M.state,l1=M.force,m=M.replace===!0,v=D(y);if(v)return a1(Q(L(v),{state:typeof v=="object"?Q({},Y,v.state):Y,force:l1,replace:m}),T||y);const H=y;H.redirectedFrom=T;let d;return!l1&&It(r,B,y)&&(d=n3(16,{to:H,from:B}),j1(B,B,!0,!1)),(d?Promise.resolve(d):B1(H,B)).catch(V=>a2(V)?a2(V,2)?V:m2(V):X(V,H,B)).then(V=>{if(V){if(a2(V,2))return a1(Q({replace:m},L(V.to),{state:typeof V.to=="object"?Q({},Y,V.to.state):Y,force:l1}),T||H)}else V=S2(H,B,!0,m,Y);return t2(H,B,V),V})}function d1(M,T){const y=k(M,T);return y?Promise.reject(y):Promise.resolve()}function L1(M){const T=W2.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(M):M()}function B1(M,T){let y;const[B,Y,l1]=ym(M,T);y=y6(B.reverse(),"beforeRouteLeave",M,T);for(const v of B)v.leaveGuards.forEach(H=>{y.push(V2(H,M,T))});const m=d1.bind(null,M,T);return y.push(m),g1(y).then(()=>{y=[];for(const v of s.list())y.push(V2(v,M,T));return y.push(m),g1(y)}).then(()=>{y=y6(Y,"beforeRouteUpdate",M,T);for(const v of Y)v.updateGuards.forEach(H=>{y.push(V2(H,M,T))});return y.push(m),g1(y)}).then(()=>{y=[];for(const v of l1)if(v.beforeEnter)if(I1(v.beforeEnter))for(const H of v.beforeEnter)y.push(V2(H,M,T));else y.push(V2(v.beforeEnter,M,T));return y.push(m),g1(y)}).then(()=>(M.matched.forEach(v=>v.enterCallbacks={}),y=y6(l1,"beforeRouteEnter",M,T,L1),y.push(m),g1(y))).then(()=>{y=[];for(const v of n.list())y.push(V2(v,M,T));return y.push(m),g1(y)}).catch(v=>a2(v,8)?v:Promise.reject(v))}function t2(M,T,y){l.list().forEach(B=>L1(()=>B(M,T,y)))}function S2(M,T,y,B,Y){const l1=k(M,T);if(l1)return l1;const m=T===z2,v=j2?history.state:{};y&&(B||m?i.replace(M.fullPath,Q({scroll:m&&v&&v.scroll},Y)):i.push(M.fullPath,Y)),f.value=M,j1(M,T,y,m),m2()}let Z1;function m3(){Z1||(Z1=i.listen((M,T,y)=>{if(!Y3.listening)return;const B=C(M),Y=D(B);if(Y){a1(Q(Y,{replace:!0}),B).catch(g3);return}t=B;const l1=f.value;j2&&Yt(L5(l1.fullPath,y.delta),X4()),B1(B,l1).catch(m=>a2(m,12)?m:a2(m,2)?(a1(m.to,B).then(v=>{a2(v,20)&&!y.delta&&y.type===T3.pop&&i.go(-1,!1)}).catch(g3),Promise.reject()):(y.delta&&i.go(-y.delta,!1),X(m,B,l1))).then(m=>{m=m||S2(B,l1,!1),m&&(y.delta&&!a2(m,8)?i.go(-y.delta,!1):y.type===T3.pop&&a2(m,20)&&i.go(-1,!1)),t2(B,l1,m)}).catch(g3)}))}let I2=u3(),z1=u3(),J;function X(M,T,y){m2(M);const B=z1.list();return B.length?B.forEach(Y=>Y(M,T,y)):console.error(M),Promise.reject(M)}function c2(){return J&&f.value!==z2?Promise.resolve():new Promise((M,T)=>{I2.add([M,T])})}function m2(M){return J||(J=!M,m3(),I2.list().forEach(([T,y])=>M?y(M):T()),I2.reset()),M}function j1(M,T,y,B){const{scrollBehavior:Y}=c;if(!j2||!Y)return Promise.resolve();const l1=!y&&Qt(L5(M.fullPath,0))||(B||!y)&&history.state&&history.state.scroll||null;return d8().then(()=>Y(M,T,l1)).then(m=>m&&Xt(m)).catch(m=>X(m,M,T))}const y1=M=>i.go(M);let G2;const W2=new Set,Y3={currentRoute:f,listening:!0,addRoute:p,removeRoute:S,hasRoute:F,getRoutes:A,resolve:C,options:c,push:q,replace:W,go:y1,back:()=>y1(-1),forward:()=>y1(1),beforeEach:s.add,beforeResolve:n.add,afterEach:l.add,onError:z1.add,isReady:c2,install(M){const T=this;M.component("RouterLink",Lm),M.component("RouterView",Nm),M.config.globalProperties.$router=T,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>J2(f)}),j2&&!G2&&f.value===z2&&(G2=!0,q(i.location).catch(Y=>{}));const y={};for(const Y in z2)Object.defineProperty(y,Y,{get:()=>f.value[Y],enumerable:!0});M.provide(k8,T),M.provide(M9,N7(y)),M.provide($6,f);const B=M.unmount;W2.add(M),M.unmount=function(){W2.delete(M),W2.size<1&&(t=z2,Z1&&Z1(),Z1=null,f.value=z2,G2=!1,J=!1),B()}}};function g1(M){return M.reduce((T,y)=>T.then(()=>L1(y)),Promise.resolve())}return Y3}function ym(c,a){const e=[],r=[],i=[],s=Math.max(a.matched.length,c.matched.length);for(let n=0;n<s;n++){const l=a.matched[n];l&&(c.matched.find(t=>s3(t,l))?r.push(l):e.push(l));const f=c.matched[n];f&&(a.matched.find(t=>s3(t,f))||i.push(f))}return[e,r,i]}const o3=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},wm={data(){return{digitos:0,semilla:0,iteraciones:0,table:[],numeros:[],degenerateInfo:"",degenerate:!1,decimales:0,tableOriginal:[]}},methods:{generar(){if(this.degenerate=!1,this.numeros=[],this.table=[],this.digitos=parseInt(this.semilla.toString().length),this.decimales=this.digitos,this.digitos>2&&this.semilla>0&&this.iteraciones>0&&this.digitos===this.semilla.toString().length){let c=this.semilla;for(let a=0;a<this.iteraciones;a++){let e=Math.pow(c,2),r="("+c.toString()+")^2 ="+e.toString(),i=this.hallarXi(e),s=parseFloat(`0.${i}`);this.numeros.includes(i)&&this.degenerate===!1&&(this.degenerate=!0,this.degenerateInfo=`El periodo se degenera 
                        en la iteración ${a+1} con el número ${s}, este número ya se encuentra en la lista 
                        de números pseudoaleatorios generados en la iteración ${this.numeros.indexOf(i)+1} con el número ${s}.`),this.numeros.push(i),this.table.push({iteracion:a+1,yi:r,xi:i,ri:s.toFixed(this.decimales)}),c=i}this.tableOriginal=this.table}else alert(`Datos incorrecto, considere: 
Los dígitos deben ser mayor a 2, la semilla debe ser mayor a 0, las iteraciones deben ser mayor a 0 y la semilla debe tener la misma cantidad de dígitos que la variable dígitos.`)},hallarXi(c){let a=c.toString(),e=(a.length-this.digitos)/2,r=e+this.digitos;return a=a.substring(e,r),a},limpiar(){this.semilla=0,this.iteraciones=0,this.table=[],this.numeros=[],this.degenerateInfo="",this.degenerate=!1,this.decimales=0,this.tableOriginal=[]}},computed:{getTable(){return this.table},isdegenerate(){return this.degenerate},getDegenerateInfo(){return this.degenerateInfo},changeDecimals(){this.table=this.tableOriginal.map(c=>({iteracion:c.iteracion,yi:c.yi,xi:c.xi,ri:parseFloat(c.ri).toFixed(this.decimales)}))}}},U2=c=>(q3("data-v-1ff4e3a1"),c=c(),O3(),c),km={class:"main--section"},Am=U2(()=>z("h1",null,"Cuadrados Medios",-1)),Pm={class:"main--section--content"},Tm={class:"main--section--content--form"},Rm={class:"form--group"},_m=U2(()=>z("label",null,[j("Semilla (X"),z("sub",null,"0"),j(")")],-1)),Bm={class:"form--group"},Fm=U2(()=>z("label",null," Iteraciones ",-1)),Em=U2(()=>z("hr",{style:{width:"100%",margin:"1rem 0",border:"1px solid var(--color-line)"}},null,-1)),Dm={class:"form--group--buttons"},qm={class:"count--decimals"},Om=U2(()=>z("label",null,"Décimales (No necesario para el cálculo): ",-1)),Um={key:0,class:"isDegenerate"},Im=U2(()=>z("h2",null,"El periodo es degenerado",-1)),Gm={class:"main--section--content--table"},Wm=U2(()=>z("thead",null,[z("tr",null,[z("th",null,"Iteración (i)"),z("th",null,[j("Y"),z("sub",null,"i"),j(" = (X"),z("sub",null,"i"),j(")"),z("sup",null,"2")]),z("th",null,[j("X"),z("sub",null,"i")]),z("th",null,[j("r"),z("sub",null,"i")])])],-1));function Zm(c,a,e,r,i,s){return u1(),N1(H1,null,[z("div",km,[Am,z("div",Pm,[z("div",Tm,[z("div",Rm,[_m,i1(z("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>i.semilla=n),type:"number",min:"0"},null,512),[[t1,i.semilla]])]),z("div",Bm,[Fm,i1(z("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>i.iteraciones=n),type:"number",min:"0"},null,512),[[t1,i.iteraciones]])])]),Em,z("div",Dm,[z("button",{onClick:a[2]||(a[2]=(...n)=>s.generar&&s.generar(...n))},"Generar"),z("button",{onClick:a[3]||(a[3]=(...n)=>s.limpiar&&s.limpiar(...n))},"Limpiar")]),z("div",qm,[Om,i1(z("input",{"onUpdate:modelValue":a[4]||(a[4]=n=>i.decimales=n),type:"number",min:"0",max:"10",step:"1",onChange:a[5]||(a[5]=(...n)=>s.changeDecimals&&s.changeDecimals(...n))},null,544),[[t1,i.decimales]])])])]),i.degenerate?(u1(),N1("div",Um,[Im,z("p",null,V1(i.degenerateInfo),1)])):s9("",!0),z("div",Gm,[z("table",null,[Wm,z("tbody",null,[(u1(!0),N1(H1,null,W4(s.getTable,n=>(u1(),N1("tr",{key:n.iteracion},[z("td",null,V1(n.iteracion),1),z("td",null,V1(n.yi),1),z("td",null,V1(n.xi),1),z("td",null,V1(n.ri),1)]))),128))])])])],64)}const jm=o3(wm,[["render",Zm],["__scopeId","data-v-1ff4e3a1"]]),$m={data(){return{semilla0:0,semilla1:0,iteraciones:0,table:[],digitos:0,numeros:[],degenerateInfo:"",degenerate:!1,decimales:0,tableOriginal:[]}},methods:{generar(){this.table=[],this.numeros=[],this.degenerate=!1;let c=parseInt(this.semilla0.toString().length),a=parseInt(this.semilla1.toString().length);if(c===a){this.digitos=c,this.decimales=this.digitos;let e=this.semilla0,r=this.semilla1;for(let i=0;i<this.iteraciones;i++){let s=e*r,n=`(${e})(${r}) = ${s}`,l=this.hallarXi(s),f=parseFloat(`0.${l}`);this.numeros.includes(l)&&this.degenerate===!1&&(this.degenerate=!0,this.degenerateInfo=`El periodo se degenera 
                        en la iteración ${i+1} con el número ${f}, este número ya se encuentra en la lista 
                        de números pseudoaleatorios generados en la iteración ${this.numeros.indexOf(l)+1} con el número ${f}.`),this.numeros.push(l),this.table.push({iteracion:i+1,yi:n,xi:l,ri:f.toFixed(this.decimales)}),e=r,r=l}this.tableOriginal=this.table}else alert("Las semillas deben tener la misma cantidad de digitos")},hallarXi(c){let a=c.toString(),e=(a.length-this.digitos)/2,r=e+this.digitos;return a=a.substring(e,r),a},limpiar(){this.semilla0=0,this.semilla1=0,this.iteraciones=0,this.table=[],this.numeros=[],this.degenerateInfo="",this.degenerate=!1,this.decimales=0,this.tableOriginal=[]}},computed:{getTable(){return this.table},isdegenerate(){return this.degenerate},getDegenerateInfo(){return this.degenerateInfo},changeDecimals(){this.table=this.tableOriginal.map(c=>({...c,ri:parseFloat(c.ri).toFixed(this.decimales)}))}}},N2=c=>(q3("data-v-6c245058"),c=c(),O3(),c),Km={class:"main--section"},Xm=N2(()=>z("h1",null,"Productos Medios",-1)),Ym={class:"main--section--content"},Qm={class:"main--section--content--form"},Jm={class:"form--group"},cv=N2(()=>z("label",null,[j("Semilla (X"),z("sub",null,"0"),j(")")],-1)),av={class:"form--group"},ev=N2(()=>z("label",null,[j("Semilla (X"),z("sub",null,"1"),j(")")],-1)),rv={class:"form--group"},iv=N2(()=>z("label",null," Iteraciones ",-1)),sv=N2(()=>z("hr",{style:{width:"100%",margin:"1rem 0",border:"1px solid var(--color-line)"}},null,-1)),nv={class:"form--group--buttons"},lv={class:"count--decimals"},fv=N2(()=>z("label",null,"Décimales (No necesario para el cálculo): ",-1)),ov={key:0,class:"isDegenerate"},tv=N2(()=>z("h2",null,"El periodo es degenerado",-1)),mv={class:"main--section--content--table"},vv=N2(()=>z("thead",null,[z("tr",null,[z("th",null,"Iteración (i)"),z("th",null,[j("Y"),z("sub",null,"i"),j("= X"),z("sub",null,"i-1"),j(" * X"),z("sub",null,"i")]),z("th",null,[j("X"),z("sub",null,"i")]),z("th",null,[j("r"),z("sub",null,"i")])])],-1));function zv(c,a,e,r,i,s){return u1(),N1(H1,null,[z("div",Km,[Xm,z("div",Ym,[z("div",Qm,[z("div",Jm,[cv,i1(z("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>i.semilla0=n),type:"number",min:"0"},null,512),[[t1,i.semilla0]])]),z("div",av,[ev,i1(z("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>i.semilla1=n),type:"number",min:"0"},null,512),[[t1,i.semilla1]])]),z("div",rv,[iv,i1(z("input",{"onUpdate:modelValue":a[2]||(a[2]=n=>i.iteraciones=n),type:"number",min:"0"},null,512),[[t1,i.iteraciones]])])]),sv,z("div",nv,[z("button",{onClick:a[3]||(a[3]=(...n)=>s.generar&&s.generar(...n))},"Generar"),z("button",{onClick:a[4]||(a[4]=(...n)=>s.limpiar&&s.limpiar(...n))},"Limpiar")]),z("div",lv,[fv,i1(z("input",{"onUpdate:modelValue":a[5]||(a[5]=n=>i.decimales=n),type:"number",min:"0",max:"10",step:"1",onChange:a[6]||(a[6]=(...n)=>s.changeDecimals&&s.changeDecimals(...n))},null,544),[[t1,i.decimales]])])])]),i.degenerate?(u1(),N1("div",ov,[tv,z("p",null,V1(i.degenerateInfo),1)])):s9("",!0),z("div",mv,[z("table",null,[vv,z("tbody",null,[(u1(!0),N1(H1,null,W4(s.getTable,n=>(u1(),N1("tr",{key:n.iteracion},[z("td",null,V1(n.iteracion),1),z("td",null,V1(n.yi),1),z("td",null,V1(n.xi),1),z("td",null,V1(n.ri),1)]))),128))])])])],64)}const hv=o3($m,[["render",zv],["__scopeId","data-v-6c245058"]]),uv={data(){return{periodo:0,semilla:0,k:0,m:0,table:[],decimales:10,tableOriginal:[]}},methods:{generar(){this.table=[];let c=0,a=0,e=this.getConstA,r=this.getConstC,i=this.getModulo,s="",n=this.semilla;for(let l=0;l<this.periodo+2;l++)a=(e*n+r)%i,s="("+e+"*"+n+"+"+r+") mod ("+i+") = "+a,c=a/(i-1),this.table.push({iteracion:l+1,xi:s,ri:c.toFixed(this.decimales)}),n=a;this.tableOriginal=this.table},limpiar(){this.periodo=0,this.semilla=0,this.k=0,this.m=0,this.table=[],this.tableOriginal=[],this.decimales=10},esPrimo(c){for(let a=2;a<c;a++)if(c%a===0)return!1;return c!==1}},computed:{getTable(){return this.table},updateG(){return Math.log(this.periodo)/Math.log(2)},getConstA(){return 1+4*this.k},getConstC(){let c=this.periodo;if(c>2){let a=c,e=c;for(;!this.esPrimo(a);)a++;for(;!this.esPrimo(e);)e--;return a-c<c-e?a:e}return 0},getModulo(){return Math.pow(2,this.updateG)},changeDecimals(){this.table=this.tableOriginal.map(c=>({...c,ri:parseFloat(c.ri).toFixed(this.decimales)}))}}},G1=c=>(q3("data-v-98264de4"),c=c(),O3(),c),Hv={class:"main--section"},pv=G1(()=>z("h1",null,"Congruencial Lineal",-1)),Vv={class:"main--section--content"},Mv={class:"main--section--content--form"},Cv={class:"main--section--content--form"},dv={class:"form--group"},Lv=G1(()=>z("label",null," Periodo (P) ",-1)),gv={class:"form--group"},bv=G1(()=>z("label",null,[j("Semilla (X"),z("sub",null,"0"),j(")")],-1)),xv={class:"form--group"},Nv=G1(()=>z("label",null,"K(Numero entero)",-1)),Sv={class:"main--section--content--form"},yv={class:"form--group"},wv=G1(()=>z("label",null," Constante Multiplicativa (a) = 1 + 4*(K)",-1)),kv={class:"form--group"},Av=G1(()=>z("label",null," Constante Aditiva (c) = El primo más cercano de [m]",-1)),Pv={class:"form--group"},Tv=G1(()=>z("label",null," g = ln(P)/ln(2) ",-1)),Rv={class:"form--group"},_v=G1(()=>z("label",null,[j(" Módulo (m) = 2 "),z("sup",null,"g")],-1)),Bv=G1(()=>z("hr",{style:{width:"100%",margin:"1rem 0",border:"1px solid var(--color-line)"}},null,-1)),Fv={class:"form--group--buttons"},Ev={class:"count--decimals"},Dv=G1(()=>z("label",null,"Décimales (No necesario para el cálculo): ",-1)),qv={class:"main--section--content--table"},Ov=G1(()=>z("thead",null,[z("tr",null,[z("th",null,"Iteración (i)"),z("th",null,[j("X"),z("sub",null,"i"),j(" = (a * X"),z("sub",null,"i-1"),j(" + c) mod (m)")]),z("th",null,[j("r"),z("sub",null,"i"),j(" = X"),z("sub",null,"i"),j(" / (m-1)")])])],-1));function Uv(c,a,e,r,i,s){return u1(),N1(H1,null,[z("div",Hv,[pv,z("div",Vv,[z("div",Mv,[z("div",Cv,[z("div",dv,[Lv,i1(z("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>i.periodo=n),type:"number",min:"0"},null,512),[[t1,i.periodo]])]),z("div",gv,[bv,i1(z("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>i.semilla=n),type:"number",min:"0"},null,512),[[t1,i.semilla]])]),z("div",xv,[Nv,i1(z("input",{"onUpdate:modelValue":a[2]||(a[2]=n=>i.k=n),type:"number",min:"0"},null,512),[[t1,i.k]])])]),z("div",Sv,[z("div",yv,[wv,i1(z("input",{"onUpdate:modelValue":a[3]||(a[3]=n=>s.getConstA=n),type:"number",min:"0",disabled:""},null,512),[[t1,s.getConstA]])]),z("div",kv,[Av,i1(z("input",{"onUpdate:modelValue":a[4]||(a[4]=n=>s.getConstC=n),type:"number",min:"0",disabled:""},null,512),[[t1,s.getConstC]])]),z("div",Pv,[Tv,i1(z("input",{"onUpdate:modelValue":a[5]||(a[5]=n=>s.updateG=n),type:"number",min:"0",disabled:""},null,512),[[t1,s.updateG]])]),z("div",Rv,[_v,i1(z("input",{"onUpdate:modelValue":a[6]||(a[6]=n=>s.getModulo=n),type:"number",min:"0",disabled:""},null,512),[[t1,s.getModulo]])])]),Bv,z("div",Fv,[z("button",{onClick:a[7]||(a[7]=(...n)=>s.generar&&s.generar(...n))},"Generar"),z("button",{onClick:a[8]||(a[8]=(...n)=>s.limpiar&&s.limpiar(...n))},"Limpiar")]),z("div",Ev,[Dv,i1(z("input",{"onUpdate:modelValue":a[9]||(a[9]=n=>i.decimales=n),type:"number",min:"0",max:"10",step:"1",onChange:a[10]||(a[10]=(...n)=>s.changeDecimals&&s.changeDecimals(...n))},null,544),[[t1,i.decimales]])])])])]),z("div",qv,[z("table",null,[Ov,z("tbody",null,[(u1(!0),N1(H1,null,W4(s.getTable,n=>(u1(),N1("tr",{key:n.iteracion},[z("td",null,V1(n.iteracion),1),z("td",null,V1(n.xi),1),z("td",null,V1(n.ri),1)]))),128))])])])],64)}const Iv=o3(uv,[["render",Uv],["__scopeId","data-v-98264de4"]]),Gv={data(){return{periodo:0,semilla:0,k:0,m:0,table:[],decimales:0,modeSelect:0,tableOriginal:[]}},methods:{generar(){this.table=[];let c=this.semilla,a=0,e=0,r=0;this.decimales=10;let i="";if(this.modeSelect==0?r=3+8*this.k:this.modeSelect==1&&(r=5+8*this.k),this.periodo==0||this.semilla==0||this.k==0){alert("Por favor complete los campos");return}if(this.semilla%2==0){alert("La semilla tiene que ser un número impar");return}for(;e<this.periodo+2;)c=r*c%this.getModulo,i="("+r+"*"+c+") mod ("+this.getModulo+") = "+c,a=c/(this.getModulo-1),this.table.push({iteracion:e+1,xi:i,ri:a.toFixed(this.decimales)}),e++;this.tableOriginal=this.table},limpiar(){this.periodo=0,this.semilla=0,this.k=0,this.m=0,this.table=[],this.tableOriginal=[],this.modeSelect=0,this.decimales=0},selectA(){this.modeSelect=0},selectB(){this.modeSelect=1}},computed:{getTable(){return this.table},updateG(){return Math.log(this.periodo)/Math.log(2)+2},getConstA(){return this.modeSelect==0?3+8*this.k:this.modeSelect==1?5+8*this.k:0},getModulo(){return Math.pow(2,this.updateG)},changeDecimals(){this.table=this.tableOriginal.map(c=>({...c,ri:parseFloat(c.ri).toFixed(this.decimales)}))}}},W1=c=>(q3("data-v-16be2d13"),c=c(),O3(),c),Wv={class:"main--section"},Zv=W1(()=>z("h1",null,"Congruencial Multiplicativo",-1)),jv={class:"main--section--content"},$v={class:"main--section--content--form"},Kv={class:"main--section--content--form"},Xv={class:"form--group"},Yv=W1(()=>z("label",null," Periodo (P) ",-1)),Qv={class:"form--group"},Jv=W1(()=>z("label",null,[j("Semilla (X"),z("sub",null,"0"),j(" que tiene que ser un número impar)")],-1)),cz={class:"form--group"},az=W1(()=>z("label",null,"K(Numero entero)",-1)),ez={class:"main--section--content--form"},rz={class:"form--group"},iz=W1(()=>z("label",null," g = (ln(P)/ln(2)) + 2 ",-1)),sz={class:"form--group"},nz=W1(()=>z("label",null,[j(" Módulo (m) = 2 "),z("sup",null,"g")],-1)),lz={class:"form--group-select"},fz=W1(()=>z("option",{value:"0"},"a=3+8k",-1)),oz=W1(()=>z("option",{value:"1"},"a=5+8k",-1)),tz=[fz,oz],mz=W1(()=>z("hr",{style:{width:"100%",margin:"1rem 0",border:"1px solid var(--color-line)"}},null,-1)),vz={class:"form--group--buttons"},zz={class:"count--decimals"},hz=W1(()=>z("label",null,"Décimales (No necesario para el cálculo): ",-1)),uz={class:"main--section--content--table"},Hz=W1(()=>z("thead",null,[z("tr",null,[z("th",null,"Iteración (i)"),z("th",null,[j("X"),z("sub",null,"i"),j(" = (a * X"),z("sub",null,"i-1"),j(") mod (m)")]),z("th",null,[j("r"),z("sub",null,"i"),j(" = X"),z("sub",null,"i"),j(" / (m-1)")])])],-1));function pz(c,a,e,r,i,s){return u1(),N1(H1,null,[z("div",Wv,[Zv,z("div",jv,[z("div",$v,[z("div",Kv,[z("div",Xv,[Yv,i1(z("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>i.periodo=n),type:"number",min:"0"},null,512),[[t1,i.periodo]])]),z("div",Qv,[Jv,i1(z("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>i.semilla=n),type:"number",min:"0"},null,512),[[t1,i.semilla]])]),z("div",cz,[az,i1(z("input",{"onUpdate:modelValue":a[2]||(a[2]=n=>i.k=n),type:"number",min:"0"},null,512),[[t1,i.k]])])]),z("div",ez,[z("div",rz,[iz,i1(z("input",{"onUpdate:modelValue":a[3]||(a[3]=n=>s.updateG=n),type:"number",min:"0",disabled:""},null,512),[[t1,s.updateG]])]),z("div",sz,[nz,i1(z("input",{"onUpdate:modelValue":a[4]||(a[4]=n=>s.getModulo=n),type:"number",min:"0",disabled:""},null,512),[[t1,s.getModulo]])]),z("div",lz,[z("label",null," Constante Multiplicativa (a) = "+V1(s.getConstA),1),i1(z("select",{"onUpdate:modelValue":a[5]||(a[5]=n=>i.modeSelect=n)},tz,512),[[Ct,i.modeSelect]])])]),mz,z("div",vz,[z("button",{onClick:a[6]||(a[6]=(...n)=>s.generar&&s.generar(...n))},"Generar"),z("button",{onClick:a[7]||(a[7]=(...n)=>s.limpiar&&s.limpiar(...n))},"Limpiar")]),z("div",zz,[hz,i1(z("input",{"onUpdate:modelValue":a[8]||(a[8]=n=>i.decimales=n),type:"number",min:"0",max:"10",step:"1",onChange:a[9]||(a[9]=(...n)=>s.changeDecimals&&s.changeDecimals(...n))},null,544),[[t1,i.decimales]])])])])]),z("div",uz,[z("table",null,[Hz,z("tbody",null,[(u1(!0),N1(H1,null,W4(s.getTable,n=>(u1(),N1("tr",{key:n.iteracion},[z("td",null,V1(n.iteracion),1),z("td",null,V1(n.xi),1),z("td",null,V1(n.ri),1)]))),128))])])])],64)}const Vz=o3(Gv,[["render",pz],["__scopeId","data-v-16be2d13"]]),Mz={components:{CuadradosMedios:jm,ProductosMedios:hv,CongruencialLineal:Iv,CongruencialMultiplicativo:Vz},data(){return{selected:"CuadradosMedios",showSidebar:!1,showModal:!1}},computed:{method(){return this.selected}},methods:{changeComponent(c){this.selected=c,this.showSidebar=!1},changeSidebar(){this.showSidebar=!this.showSidebar},closeSidebar(){this.showSidebar=!1},openModal(){this.showModal=!0},closeModal(){this.showModal=!1}}},Y4=c=>(q3("data-v-a85adce4"),c=c(),O3(),c),Cz={class:"main--container"},dz={class:"sticky-header"},Lz={class:"app-header"},gz={class:"main--container--header"},bz={class:"header-content"},xz={class:"header-start"},Nz=Y4(()=>z("div",{class:"header-title"},[z("h1",null,"SIS-224")],-1)),Sz=Y4(()=>z("hr",{class:"header-lineVertical"},null,-1)),yz=Y4(()=>z("div",{class:"header-description"},[z("h2",null,"Práctica 2")],-1)),wz={class:"header-end"},kz={class:"header-sidebar-menu"},Az={class:"sidebar-menu-content"},Pz={class:"sidebar-menu"},Tz=Y4(()=>z("h1",null,[z("strong",null,"Seleccione un algoritmo: ")],-1)),Rz={class:"modal"},_z={class:"modal-content"},Bz=Oo("<h2 data-v-a85adce4>¡Bienvenido!</h2><p data-v-a85adce4> Página web para la generación de números pseudoaleatorios utilizando diferentes algoritmos. <br data-v-a85adce4> <br data-v-a85adce4><strong data-v-a85adce4>Cómo utilizar la página:</strong> <br data-v-a85adce4><strong data-v-a85adce4>1.-</strong> Selecciona el algoritmo que deseas utilizar en el menú lateral. <br data-v-a85adce4><strong data-v-a85adce4>2.-</strong> Ingresa los datos necesarios para el algoritmo. <br data-v-a85adce4><strong data-v-a85adce4>3.-</strong> Da click en el botón &quot;Generar&quot;. <br data-v-a85adce4><strong data-v-a85adce4>4.-</strong> Observa los resultados en la tabla. <br data-v-a85adce4><br data-v-a85adce4><br data-v-a85adce4><strong data-v-a85adce4>Nota:</strong> <br data-v-a85adce4> Página desarrollada por Edward Gómez para la materia de Modelado, Dinámica de Sistemas y Simulación. </p>",2);function Fz(c,a,e,r,i,s){const n=D7("font-awesome-icon");return u1(),N1("div",Cz,[z("div",dz,[z("div",Lz,[z("header",gz,[z("div",bz,[z("div",xz,[z("button",{class:"header-button",onClick:a[0]||(a[0]=(...l)=>s.changeSidebar&&s.changeSidebar(...l))},[M1(n,{icon:["fas","bars"],class:"sidebarIcon"})]),Nz,Sz,yz]),z("div",wz,[z("button",{class:"header-button",onClick:a[1]||(a[1]=(...l)=>s.openModal&&s.openModal(...l))},[M1(n,{icon:["fas","circle-question"],class:"aboutUsIcon"})])])])])]),i1(z("div",{class:"overlay",onClick:a[2]||(a[2]=(...l)=>s.closeSidebar&&s.closeSidebar(...l))},null,512),[[g6,i.showSidebar]]),i1(z("div",kz,[z("div",Az,[z("nav",Pz,[Tz,z("ul",null,[z("li",null,[z("button",{onClick:a[3]||(a[3]=l=>s.changeComponent("CuadradosMedios"))}," Cuadrados Medios ")]),z("li",null,[z("button",{onClick:a[4]||(a[4]=l=>s.changeComponent("ProductosMedios"))}," Productos Medios ")]),z("li",null,[z("button",{onClick:a[5]||(a[5]=l=>s.changeComponent("CongruencialLineal"))}," Congruencial Lineal ")]),z("li",null,[z("button",{onClick:a[6]||(a[6]=l=>s.changeComponent("CongruencialMultiplicativo"))}," Congruencial Multiplicativo ")])])])])],512),[[g6,i.showSidebar]])]),(u1(),r9(ao(s.method))),z("div",null,[i1(z("div",Rz,[z("div",_z,[Bz,z("button",{class:"modal-close",onClick:a[7]||(a[7]=(...l)=>s.closeModal&&s.closeModal(...l))},"Cerrar")])],512),[[g6,i.showModal]])])])}const Ez=o3(Mz,[["render",Fz],["__scopeId","data-v-a85adce4"]]),Dz={name:"App"},qz={id:"app"};function Oz(c,a,e,r,i,s){const n=D7("router-view");return u1(),N1("div",qz,[M1(n)])}const Uz=o3(Dz,[["render",Oz]]);function B5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?B5(Object(e),!0).forEach(function(r){v1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):B5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function k4(c){"@babel/helpers - typeof";return k4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k4(c)}function Iz(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function F5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Gz(c,a,e){return a&&F5(c.prototype,a),e&&F5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function A8(c,a){return Zz(c)||$z(c,a)||C9(c,a)||Xz()}function I3(c){return Wz(c)||jz(c)||C9(c)||Kz()}function Wz(c){if(Array.isArray(c))return K6(c)}function Zz(c){if(Array.isArray(c))return c}function jz(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function $z(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,l;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(f){s=!0,l=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw l}}return r}}function C9(c,a){if(c){if(typeof c=="string")return K6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return K6(c,a)}}function K6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Kz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E5=function(){},P8={},d9={},L9=null,g9={mark:E5,measure:E5};try{typeof window<"u"&&(P8=window),typeof document<"u"&&(d9=document),typeof MutationObserver<"u"&&(L9=MutationObserver),typeof performance<"u"&&(g9=performance)}catch{}var Yz=P8.navigator||{},D5=Yz.userAgent,q5=D5===void 0?"":D5,g2=P8,n1=d9,O5=L9,i4=g9;g2.document;var o2=!!n1.documentElement&&!!n1.head&&typeof n1.addEventListener=="function"&&typeof n1.createElement=="function",b9=~q5.indexOf("MSIE")||~q5.indexOf("Trident/"),s4,n4,l4,f4,o4,s2="___FONT_AWESOME___",X6=16,x9="fa",N9="svg-inline--fa",E2="data-fa-i2svg",Y6="data-fa-pseudo-element",Qz="data-fa-pseudo-element-pending",T8="data-prefix",R8="data-icon",U5="fontawesome-i2svg",Jz="async",ch=["HTML","HEAD","STYLE","SCRIPT"],S9=function(){try{return!0}catch{return!1}}(),s1="classic",o1="sharp",_8=[s1,o1];function G3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[s1]}})}var R3=G3((s4={},v1(s4,s1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),v1(s4,o1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),s4)),_3=G3((n4={},v1(n4,s1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v1(n4,o1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),n4)),B3=G3((l4={},v1(l4,s1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v1(l4,o1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),l4)),ah=G3((f4={},v1(f4,s1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v1(f4,o1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),f4)),eh=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,y9="fa-layers-text",rh=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ih=G3((o4={},v1(o4,s1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v1(o4,o1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),o4)),w9=[1,2,3,4,5,6,7,8,9,10],sh=w9.concat([11,12,13,14,15,16,17,18,19,20]),nh=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],T2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},F3=new Set;Object.keys(_3[s1]).map(F3.add.bind(F3));Object.keys(_3[o1]).map(F3.add.bind(F3));var lh=[].concat(_8,I3(F3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",T2.GROUP,T2.SWAP_OPACITY,T2.PRIMARY,T2.SECONDARY]).concat(w9.map(function(c){return"".concat(c,"x")})).concat(sh.map(function(c){return"w-".concat(c)})),x3=g2.FontAwesomeConfig||{};function fh(c){var a=n1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function oh(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(n1&&typeof n1.querySelector=="function"){var th=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];th.forEach(function(c){var a=A8(c,2),e=a[0],r=a[1],i=oh(fh(e));i!=null&&(x3[r]=i)})}var k9={styleDefault:"solid",familyDefault:"classic",cssPrefix:x9,replacementClass:N9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};x3.familyPrefix&&(x3.cssPrefix=x3.familyPrefix);var l3=P(P({},k9),x3);l3.autoReplaceSvg||(l3.observeMutations=!1);var _={};Object.keys(k9).forEach(function(c){Object.defineProperty(_,c,{enumerable:!0,set:function(e){l3[c]=e,N3.forEach(function(r){return r(_)})},get:function(){return l3[c]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(a){l3.cssPrefix=a,N3.forEach(function(e){return e(_)})},get:function(){return l3.cssPrefix}});g2.FontAwesomeConfig=_;var N3=[];function mh(c){return N3.push(c),function(){N3.splice(N3.indexOf(c),1)}}var h2=X6,Q1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vh(c){if(!(!c||!o2)){var a=n1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=n1.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return n1.head.insertBefore(a,r),c}}var zh="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function E3(){for(var c=12,a="";c-- >0;)a+=zh[Math.random()*62|0];return a}function t3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function B8(c){return c.classList?t3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function A9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hh(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(A9(c[e]),'" ')},"").trim()}function Q4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function F8(c){return c.size!==Q1.size||c.x!==Q1.x||c.y!==Q1.y||c.rotate!==Q1.rotate||c.flipX||c.flipY}function uh(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(n," ").concat(l)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:t}}function Hh(c){var a=c.transform,e=c.width,r=e===void 0?X6:e,i=c.height,s=i===void 0?X6:i,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&b9?f+="translate(".concat(a.x/h2-r/2,"em, ").concat(a.y/h2-s/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/h2,"em), calc(-50% + ").concat(a.y/h2,"em)) "):f+="translate(".concat(a.x/h2,"em, ").concat(a.y/h2,"em) "),f+="scale(".concat(a.size/h2*(a.flipX?-1:1),", ").concat(a.size/h2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var ph=`:root, :host {
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
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}`;function P9(){var c=x9,a=N9,e=_.cssPrefix,r=_.replacementClass,i=ph;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return i}var I5=!1;function w6(){_.autoAddCss&&!I5&&(vh(P9()),I5=!0)}var Vh={mixout:function(){return{dom:{css:P9,insertCss:w6}}},hooks:function(){return{beforeDOMElementCreation:function(){w6()},beforeI2svg:function(){w6()}}}},n2=g2||{};n2[s2]||(n2[s2]={});n2[s2].styles||(n2[s2].styles={});n2[s2].hooks||(n2[s2].hooks={});n2[s2].shims||(n2[s2].shims=[]);var O1=n2[s2],T9=[],Mh=function c(){n1.removeEventListener("DOMContentLoaded",c),A4=1,T9.map(function(a){return a()})},A4=!1;o2&&(A4=(n1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(n1.readyState),A4||n1.addEventListener("DOMContentLoaded",Mh));function Ch(c){o2&&(A4?setTimeout(c,0):T9.push(c))}function W3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?A9(c):"<".concat(a," ").concat(hh(r),">").concat(s.map(W3).join(""),"</").concat(a,">")}function G5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var dh=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},k6=function(a,e,r,i){var s=Object.keys(a),n=s.length,l=i!==void 0?dh(e,i):e,f,t,o;for(r===void 0?(f=1,o=a[s[0]]):(f=0,o=r);f<n;f++)t=s[f],o=l(o,a[t],t,a);return o};function Lh(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function Q6(c){var a=Lh(c);return a.length===1?a[0].toString(16):null}function gh(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function W5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function J6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=W5(a);typeof O1.hooks.addPack=="function"&&!i?O1.hooks.addPack(c,W5(a)):O1.styles[c]=P(P({},O1.styles[c]||{}),s),c==="fas"&&J6("fa",a)}var t4,m4,v4,$2=O1.styles,bh=O1.shims,xh=(t4={},v1(t4,s1,Object.values(B3[s1])),v1(t4,o1,Object.values(B3[o1])),t4),E8=null,R9={},_9={},B9={},F9={},E9={},Nh=(m4={},v1(m4,s1,Object.keys(R3[s1])),v1(m4,o1,Object.keys(R3[o1])),m4);function Sh(c){return~lh.indexOf(c)}function yh(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!Sh(i)?i:null}var D9=function(){var a=function(s){return k6($2,function(n,l,f){return n[f]=k6(l,s,{}),n},{})};R9=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var l=s[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){i[f.toString(16)]=n})}return i}),_9=a(function(i,s,n){if(i[n]=n,s[2]){var l=s[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){i[f]=n})}return i}),E9=a(function(i,s,n){var l=s[2];return i[n]=n,l.forEach(function(f){i[f]=n}),i});var e="far"in $2||_.autoFetchSvg,r=k6(bh,function(i,s){var n=s[0],l=s[1],f=s[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(i.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:l,iconName:f}),i},{names:{},unicodes:{}});B9=r.names,F9=r.unicodes,E8=J4(_.styleDefault,{family:_.familyDefault})};mh(function(c){E8=J4(c.styleDefault,{family:_.familyDefault})});D9();function D8(c,a){return(R9[c]||{})[a]}function wh(c,a){return(_9[c]||{})[a]}function R2(c,a){return(E9[c]||{})[a]}function q9(c){return B9[c]||{prefix:null,iconName:null}}function kh(c){var a=F9[c],e=D8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function b2(){return E8}var q8=function(){return{prefix:null,iconName:null,rest:[]}};function J4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?s1:e,i=R3[r][c],s=_3[r][c]||_3[r][i],n=c in O1.styles?c:null;return s||n||null}var Z5=(v4={},v1(v4,s1,Object.keys(B3[s1])),v1(v4,o1,Object.keys(B3[o1])),v4);function c6(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},v1(a,s1,"".concat(_.cssPrefix,"-").concat(s1)),v1(a,o1,"".concat(_.cssPrefix,"-").concat(o1)),a),n=null,l=s1;(c.includes(s[s1])||c.some(function(t){return Z5[s1].includes(t)}))&&(l=s1),(c.includes(s[o1])||c.some(function(t){return Z5[o1].includes(t)}))&&(l=o1);var f=c.reduce(function(t,o){var h=yh(_.cssPrefix,o);if($2[o]?(o=xh[l].includes(o)?ah[l][o]:o,n=o,t.prefix=o):Nh[l].indexOf(o)>-1?(n=o,t.prefix=J4(o,{family:l})):h?t.iconName=h:o!==_.replacementClass&&o!==s[s1]&&o!==s[o1]&&t.rest.push(o),!i&&t.prefix&&t.iconName){var u=n==="fa"?q9(t.iconName):{},p=R2(t.prefix,t.iconName);u.prefix&&(n=null),t.iconName=u.iconName||p||t.iconName,t.prefix=u.prefix||t.prefix,t.prefix==="far"&&!$2.far&&$2.fas&&!_.autoFetchSvg&&(t.prefix="fas")}return t},q8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===o1&&($2.fass||_.autoFetchSvg)&&(f.prefix="fass",f.iconName=R2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=b2()||"fas"),f}var Ah=function(){function c(){Iz(this,c),this.definitions={}}return Gz(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=P(P({},e.definitions[l]||{}),n[l]),J6(l,n[l]);var f=B3[s1][l];f&&J6(f,n[l]),D9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],l=n.prefix,f=n.iconName,t=n.icon,o=t[2];e[l]||(e[l]={}),o.length>0&&o.forEach(function(h){typeof h=="string"&&(e[l][h]=t)}),e[l][f]=t}),e}}]),c}(),j5=[],K2={},e3={},Ph=Object.keys(e3);function Th(c,a){var e=a.mixoutsTo;return j5=c,K2={},Object.keys(e3).forEach(function(r){Ph.indexOf(r)===-1&&delete e3[r]}),j5.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),k4(i[n])==="object"&&Object.keys(i[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=i[n][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){K2[n]||(K2[n]=[]),K2[n].push(s[n])})}r.provides&&r.provides(e3)}),e}function c8(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=K2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function D2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=K2[c]||[];i.forEach(function(s){s.apply(null,e)})}function l2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return e3[c]?e3[c].apply(null,a):void 0}function a8(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||b2();if(a)return a=R2(e,a)||a,G5(O9.definitions,e,a)||G5(O1.styles,e,a)}var O9=new Ah,Rh=function(){_.autoReplaceSvg=!1,_.observeMutations=!1,D2("noAuto")},_h={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o2?(D2("beforeI2svg",a),l2("pseudoElements2svg",a),l2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,Ch(function(){Fh({autoReplaceSvgRoot:e}),D2("watch",a)})}},Bh={icon:function(a){if(a===null)return null;if(k4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:R2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=J4(a[0]);return{prefix:r,iconName:R2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(_.cssPrefix,"-"))>-1||a.match(eh))){var i=c6(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||b2(),iconName:R2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=b2();return{prefix:s,iconName:R2(s,a)||a}}}},_1={noAuto:Rh,config:_,dom:_h,parse:Bh,library:O9,findIconDefinition:a8,toHtml:W3},Fh=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?n1:e;(Object.keys(O1.styles).length>0||_.autoFetchSvg)&&o2&&_.autoReplaceSvg&&_1.dom.i2svg({node:r})};function a6(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return W3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(o2){var r=n1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Eh(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(F8(n)&&e.found&&!r.found){var l=e.width,f=e.height,t={x:l/f/2,y:.5};i.style=Q4(P(P({},s),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Dh(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(_.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:n}),children:r}]}]}function O8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,l=c.symbol,f=c.title,t=c.maskId,o=c.titleId,h=c.extra,u=c.watchable,p=u===void 0?!1:u,S=r.found?r:e,A=S.width,F=S.height,C=i==="fak",L=[_.replacementClass,s?"".concat(_.cssPrefix,"-").concat(s):""].filter(function(L1){return h.classes.indexOf(L1)===-1}).filter(function(L1){return L1!==""||!!L1}).concat(h.classes).join(" "),k={children:[],attributes:P(P({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:L,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(F)})},q=C&&!~h.classes.indexOf("fa-fw")?{width:"".concat(A/F*16*.0625,"em")}:{};p&&(k.attributes[E2]=""),f&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(o||E3())},children:[f]}),delete k.attributes.title);var W=P(P({},k),{},{prefix:i,iconName:s,main:e,mask:r,maskId:t,transform:n,symbol:l,styles:P(P({},q),h.styles)}),D=r.found&&e.found?l2("generateAbstractMask",W)||{children:[],attributes:{}}:l2("generateAbstractIcon",W)||{children:[],attributes:{}},a1=D.children,d1=D.attributes;return W.children=a1,W.attributes=d1,l?Dh(W):Eh(W)}function $5(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,t=P(P(P({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});f&&(t[E2]="");var o=P({},n.styles);F8(i)&&(o.transform=Hh({transform:i,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var h=Q4(o);h.length>0&&(t.style=h);var u=[];return u.push({tag:"span",attributes:t,children:[a]}),s&&u.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),u}function qh(c){var a=c.content,e=c.title,r=c.extra,i=P(P(P({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=Q4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var A6=O1.styles;function e8(c){var a=c[0],e=c[1],r=c.slice(4),i=A8(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(T2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(T2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(T2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var Oh={found:!1,width:512,height:512};function Uh(c,a){!S9&&!_.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function r8(c,a){var e=a;return a==="fa"&&_.styleDefault!==null&&(a=b2()),new Promise(function(r,i){if(l2("missingIconAbstract"),e==="fa"){var s=q9(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&A6[a]&&A6[a][c]){var n=A6[a][c];return r(e8(n))}Uh(c,a),r(P(P({},Oh),{},{icon:_.showMissingIcons&&c?l2("missingIconAbstract")||{}:{}}))})}var K5=function(){},i8=_.measurePerformance&&i4&&i4.mark&&i4.measure?i4:{mark:K5,measure:K5},p3='FA "6.5.1"',Ih=function(a){return i8.mark("".concat(p3," ").concat(a," begins")),function(){return U9(a)}},U9=function(a){i8.mark("".concat(p3," ").concat(a," ends")),i8.measure("".concat(p3," ").concat(a),"".concat(p3," ").concat(a," begins"),"".concat(p3," ").concat(a," ends"))},U8={begin:Ih,end:U9},C4=function(){};function X5(c){var a=c.getAttribute?c.getAttribute(E2):null;return typeof a=="string"}function Gh(c){var a=c.getAttribute?c.getAttribute(T8):null,e=c.getAttribute?c.getAttribute(R8):null;return a&&e}function Wh(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(_.replacementClass)}function Zh(){if(_.autoReplaceSvg===!0)return d4.replace;var c=d4[_.autoReplaceSvg];return c||d4.replace}function jh(c){return n1.createElementNS("http://www.w3.org/2000/svg",c)}function $h(c){return n1.createElement(c)}function I9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?jh:$h:e;if(typeof c=="string")return n1.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(I9(n,{ceFn:r}))}),i}function Kh(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var d4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(I9(i),e)}),e.getAttribute(E2)===null&&_.keepOriginalSource){var r=n1.createComment(Kh(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~B8(e).indexOf(_.replacementClass))return d4.replace(a);var i=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,f){return f===_.replacementClass||f.match(i)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(l){return W3(l)}).join(`
`);e.setAttribute(E2,""),e.innerHTML=n}};function Y5(c){c()}function G9(c,a){var e=typeof a=="function"?a:C4;if(c.length===0)e();else{var r=Y5;_.mutateApproach===Jz&&(r=g2.requestAnimationFrame||Y5),r(function(){var i=Zh(),s=U8.begin("mutate");c.map(i),s(),e()})}}var I8=!1;function W9(){I8=!0}function s8(){I8=!1}var P4=null;function Q5(c){if(O5&&_.observeMutations){var a=c.treeCallback,e=a===void 0?C4:a,r=c.nodeCallback,i=r===void 0?C4:r,s=c.pseudoElementsCallback,n=s===void 0?C4:s,l=c.observeMutationsRoot,f=l===void 0?n1:l;P4=new O5(function(t){if(!I8){var o=b2();t3(t).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!X5(h.addedNodes[0])&&(_.searchPseudoElements&&n(h.target),e(h.target)),h.type==="attributes"&&h.target.parentNode&&_.searchPseudoElements&&n(h.target.parentNode),h.type==="attributes"&&X5(h.target)&&~nh.indexOf(h.attributeName))if(h.attributeName==="class"&&Gh(h.target)){var u=c6(B8(h.target)),p=u.prefix,S=u.iconName;h.target.setAttribute(T8,p||o),S&&h.target.setAttribute(R8,S)}else Wh(h.target)&&i(h.target)})}}),o2&&P4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xh(){P4&&P4.disconnect()}function Yh(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function Qh(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=c6(B8(c));return i.prefix||(i.prefix=b2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=wh(i.prefix,c.innerText)||D8(i.prefix,Q6(c.innerText))),!i.iconName&&_.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Jh(c){var a=t3(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return _.autoA11y&&(e?a["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(r||E3()):(a["aria-hidden"]="true",a.focusable="false")),a}function cu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Q1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Qh(c),r=e.iconName,i=e.prefix,s=e.rest,n=Jh(c),l=c8("parseNodeAttributes",{},c),f=a.styleParser?Yh(c):[];return P({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:Q1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:n}},l)}var au=O1.styles;function Z9(c){var a=_.autoReplaceSvg==="nest"?J5(c,{styleParser:!1}):J5(c);return~a.extra.classes.indexOf(y9)?l2("generateLayersText",c,a):l2("generateSvgReplacementMutation",c,a)}var x2=new Set;_8.map(function(c){x2.add("fa-".concat(c))});Object.keys(R3[s1]).map(x2.add.bind(x2));Object.keys(R3[o1]).map(x2.add.bind(x2));x2=I3(x2);function c7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!o2)return Promise.resolve();var e=n1.documentElement.classList,r=function(h){return e.add("".concat(U5,"-").concat(h))},i=function(h){return e.remove("".concat(U5,"-").concat(h))},s=_.autoFetchSvg?x2:_8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(au));s.includes("fa")||s.push("fa");var n=[".".concat(y9,":not([").concat(E2,"])")].concat(s.map(function(o){return".".concat(o,":not([").concat(E2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=t3(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var f=U8.begin("onTree"),t=l.reduce(function(o,h){try{var u=Z9(h);u&&o.push(u)}catch(p){S9||p.name==="MissingIcon"&&console.error(p)}return o},[]);return new Promise(function(o,h){Promise.all(t).then(function(u){G9(u,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),f(),o()})}).catch(function(u){f(),h(u)})})}function eu(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Z9(c).then(function(e){e&&G9([e],a)})}function ru(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:a8(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:a8(i||{})),c(r,P(P({},e),{},{mask:i}))}}var iu=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?Q1:r,s=e.symbol,n=s===void 0?!1:s,l=e.mask,f=l===void 0?null:l,t=e.maskId,o=t===void 0?null:t,h=e.title,u=h===void 0?null:h,p=e.titleId,S=p===void 0?null:p,A=e.classes,F=A===void 0?[]:A,C=e.attributes,L=C===void 0?{}:C,k=e.styles,q=k===void 0?{}:k;if(a){var W=a.prefix,D=a.iconName,a1=a.icon;return a6(P({type:"icon"},a),function(){return D2("beforeDOMElementCreation",{iconDefinition:a,params:e}),_.autoA11y&&(u?L["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(S||E3()):(L["aria-hidden"]="true",L.focusable="false")),O8({icons:{main:e8(a1),mask:f?e8(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:D,transform:P(P({},Q1),i),symbol:n,title:u,maskId:o,titleId:S,extra:{attributes:L,styles:q,classes:F}})})}},su={mixout:function(){return{icon:ru(iu)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=c7,e.nodeCallback=eu,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?n1:r,s=e.callback,n=s===void 0?function(){}:s;return c7(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,l=r.prefix,f=r.transform,t=r.symbol,o=r.mask,h=r.maskId,u=r.extra;return new Promise(function(p,S){Promise.all([r8(i,l),o.iconName?r8(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var F=A8(A,2),C=F[0],L=F[1];p([e,O8({icons:{main:C,mask:L},prefix:l,iconName:i,transform:f,symbol:t,maskId:h,title:s,titleId:n,extra:u,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,l=e.styles,f=Q4(l);f.length>0&&(i.style=f);var t;return F8(n)&&(t=l2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(t||s.icon),{children:r,attributes:i}}}},nu={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return a6({type:"layer"},function(){D2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers")].concat(I3(s)).join(" ")},children:n}]})}}}},lu={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,l=n===void 0?[]:n,f=r.attributes,t=f===void 0?{}:f,o=r.styles,h=o===void 0?{}:o;return a6({type:"counter",content:e},function(){return D2("beforeDOMElementCreation",{content:e,params:r}),qh({content:e.toString(),title:s,extra:{attributes:t,styles:h,classes:["".concat(_.cssPrefix,"-layers-counter")].concat(I3(l))}})})}}}},fu={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Q1:i,n=r.title,l=n===void 0?null:n,f=r.classes,t=f===void 0?[]:f,o=r.attributes,h=o===void 0?{}:o,u=r.styles,p=u===void 0?{}:u;return a6({type:"text",content:e},function(){return D2("beforeDOMElementCreation",{content:e,params:r}),$5({content:e,transform:P(P({},Q1),s),title:l,extra:{attributes:h,styles:p,classes:["".concat(_.cssPrefix,"-layers-text")].concat(I3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,l=null,f=null;if(b9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();l=o.width/t,f=o.height/t}return _.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,$5({content:e.innerHTML,width:l,height:f,transform:s,title:i,extra:n,watchable:!0})])}}},ou=new RegExp('"',"ug"),a7=[1105920,1112319];function tu(c){var a=c.replace(ou,""),e=gh(a,0),r=e>=a7[0]&&e<=a7[1],i=a.length===2?a[0]===a[1]:!1;return{value:Q6(i?a[0]:a),isSecondary:r||i}}function e7(c,a){var e="".concat(Qz).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=t3(c.children),n=s.filter(function(a1){return a1.getAttribute(Y6)===a})[0],l=g2.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(rh),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&o!=="none"&&o!==""){var h=l.getPropertyValue("content"),u=~["Sharp"].indexOf(f[2])?o1:s1,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?_3[u][f[2].toLowerCase()]:ih[u][t],S=tu(h),A=S.value,F=S.isSecondary,C=f[0].startsWith("FontAwesome"),L=D8(p,A),k=L;if(C){var q=kh(A);q.iconName&&q.prefix&&(L=q.iconName,p=q.prefix)}if(L&&!F&&(!n||n.getAttribute(T8)!==p||n.getAttribute(R8)!==k)){c.setAttribute(e,k),n&&c.removeChild(n);var W=cu(),D=W.extra;D.attributes[Y6]=a,r8(L,p).then(function(a1){var d1=O8(P(P({},W),{},{icons:{main:a1,mask:q8()},prefix:p,iconName:k,extra:D,watchable:!0})),L1=n1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(L1,c.firstChild):c.appendChild(L1),L1.outerHTML=d1.map(function(B1){return W3(B1)}).join(`