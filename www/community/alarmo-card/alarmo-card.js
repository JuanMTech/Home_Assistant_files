!function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,t,i,a){var s,r=arguments.length,n=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),s=new Map;class r{constructor(e,t){if(this._$cssResult$=!0,t!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=s.get(this.cssText);return i&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=e=>new r("string"==typeof e?e:e+"",a),o=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new r(i,a)},l=(e,t)=>{i?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)})},c=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return n(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var d,h;const u={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},m=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const a=this._$Eh(i,t);void 0!==a&&(this._$Eu.set(a,i),e.push(a))}),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const s=this[e];this[t]=a,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$Eg(e,t,i=p){var a,s;const r=this.constructor._$Eh(e,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(s=null===(a=i.converter)||void 0===a?void 0:a.toAttribute)&&void 0!==s?s:u.toAttribute)(t,i.type);this._$Ei=e,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(e,t){var i,a,s;const r=this.constructor,n=r._$Eu.get(e);if(void 0!==n&&this._$Ei!==n){const e=r.getPropertyOptions(n),o=e.converter,l=null!==(s=null!==(a=null===(i=o)||void 0===i?void 0:i.fromAttribute)&&void 0!==a?a:"function"==typeof o?o:null)&&void 0!==s?s:u.fromAttribute;this._$Ei=n,this[n]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let a=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((e,t)=>this[t]=e),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Em)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach((e,t)=>this._$Eg(t,this[t],e)),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var b,f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(d=globalThis.reactiveElementPlatformSupport)||void 0===d||d.call(globalThis,{ReactiveElement:g}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const _=globalThis.trustedTypes,v=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,w="?"+y,$=`<${w}>`,x=document,k=(e="")=>x.createComment(e),A=e=>null===e||"object"!=typeof e&&"function"!=typeof e,C=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,O=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,D=/"/g,z=/^(?:script|style|textarea)$/i,N=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),P=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),H=new WeakMap,U=x.createTreeWalker(x,129,null,!1),L=(e,t)=>{const i=e.length-1,a=[];let s,r=2===t?"<svg>":"",n=S;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===S?"!--"===l[1]?n=E:void 0!==l[1]?n=O:void 0!==l[2]?(z.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=T):void 0!==l[3]&&(n=T):n===T?">"===l[0]?(n=null!=s?s:S,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?T:'"'===l[3]?D:M):n===D||n===M?n=T:n===E||n===O?n=S:(n=T,s=void 0);const h=n===T&&e[t+1].startsWith("/>")?" ":"";r+=n===S?i+$:c>=0?(a.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(a.push(void 0),t):h)}const o=r+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==v?v.createHTML(o):o,a]};class R{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let s=0,r=0;const n=e.length-1,o=this.parts,[l,c]=L(e,t);if(this.el=R.createElement(l,i),U.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(a=U.nextNode())&&o.length<n;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const t of a.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(y)){const i=c[r++];if(e.push(t),void 0!==i){const e=a.getAttribute(i.toLowerCase()+"$lit$").split(y),t=/([.?@])?(.*)/.exec(i);o.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?q:"?"===t[1]?V:"@"===t[1]?Z:F})}else o.push({type:6,index:s})}for(const t of e)a.removeAttribute(t)}if(z.test(a.tagName)){const e=a.textContent.split(y),t=e.length-1;if(t>0){a.textContent=_?_.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],k()),U.nextNode(),o.push({type:2,index:++s});a.append(e[t],k())}}}else if(8===a.nodeType)if(a.data===w)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=a.data.indexOf(y,e+1));)o.push({type:7,index:s}),e+=y.length-1}s++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,a){var s,r,n,o;if(t===P)return t;let l=void 0!==a?null===(s=i._$Cl)||void 0===s?void 0:s[a]:i._$Cu;const c=A(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,a)),void 0!==a?(null!==(n=(o=i)._$Cl)&&void 0!==n?n:o._$Cl=[])[a]=l:i._$Cu=l),void 0!==l&&(t=Y(e,l._$AS(e,t.values),l,a)),t}class I{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:a}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(i,!0);U.currentNode=s;let r=U.nextNode(),n=0,o=0,l=a[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new B(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new W(r,this,e)),this.v.push(t),l=a[++o]}n!==(null==l?void 0:l.index)&&(r=U.nextNode(),n++)}return s}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class B{constructor(e,t,i,a){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cg=null===(s=null==a?void 0:a.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),A(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==P&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return C(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==j&&A(this._$AH)?this._$AA.nextSibling.data=e:this.S(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:a}=e,s="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=R.createElement(a.h,this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.m(i);else{const e=new I(s,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new R(e)),t}M(e){C(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const s of e)a===t.length?t.push(i=new B(this.A(k()),this.A(k()),this,this.options)):i=t[a],i._$AI(s),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class F{constructor(e,t,i,a,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,a){const s=this.strings;let r=!1;if(void 0===s)e=Y(this,e,t,0),r=!A(e)||e!==this._$AH&&e!==P,r&&(this._$AH=e);else{const a=e;let n,o;for(e=s[0],n=0;n<s.length-1;n++)o=Y(this,a[i+n],t,n),o===P&&(o=this._$AH[n]),r||(r=!A(o)||o!==this._$AH[n]),o===j?e=j:e!==j&&(e+=(null!=o?o:"")+s[n+1]),this._$AH[n]=o}r&&!a&&this.k(e)}k(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class q extends F{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===j?void 0:e}}class V extends F{constructor(){super(...arguments),this.type=4}k(e){e&&e!==j?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Z extends F{constructor(e,t,i,a,s){super(e,t,i,a,s),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=Y(this,e,t,0))&&void 0!==i?i:j)===P)return;const a=this._$AH,s=e===j&&a!==j||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,r=e!==j&&(a===j||s);s&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var K,J,G;null===(b=globalThis.litHtmlPlatformSupport)||void 0===b||b.call(globalThis,R,B),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class Q extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var a,s;const r=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t;let n=r._$litPart$;if(void 0===n){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;r._$litPart$=n=new B(t.insertBefore(k(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return P}}Q.finalized=!0,Q._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Q}),null===(J=globalThis.litElementPlatformSupport)||void 0===J||J.call(globalThis,{LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.0.0-rc.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:a}=t;return{kind:i,elements:a,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,ee=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function te(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ee(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function ie(e){return te({...e,state:!0})}var ae=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,se="[^\\s]+",re=/\[([^]*?)\]/gm;function ne(e,t){for(var i=[],a=0,s=e.length;a<s;a++)i.push(e[a].substr(0,t));return i}var oe=function(e){return function(t,i){var a=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return a>-1?a:null}};function le(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var a=0,s=t;a<s.length;a++){var r=s[a];for(var n in r)e[n]=r[n]}return e}var ce=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de=["January","February","March","April","May","June","July","August","September","October","November","December"],he=ne(de,3),ue={dayNamesShort:ne(ce,3),dayNames:ce,monthNamesShort:he,monthNames:de,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},me=le({},ue),pe=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ge={D:function(e){return String(e.getDate())},DD:function(e){return pe(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return pe(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return pe(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return pe(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return pe(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return pe(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return pe(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return pe(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return pe(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return pe(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return pe(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+pe(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+pe(Math.floor(Math.abs(t)/60),2)+":"+pe(Math.abs(t)%60,2)}},be=function(e){return+e-1},fe=[null,"[1-9]\\d?"],_e=[null,se],ve=["isPm",se,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],ye=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],we=(oe("monthNamesShort"),oe("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var $e,xe,ke=function(e,t,i){if(void 0===t&&(t=we.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var a=[];t=(t=we[t]||t).replace(re,(function(e,t){return a.push(t),"@@@"}));var s=le(le({},me),i);return(t=t.replace(ae,(function(t){return ge[t](e,s)}))).replace(/@@@/g,(function(){return a.shift()}))},Ae=function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}return!1}()?function(e,t){return e.toLocaleDateString(t.language,{year:"numeric",month:"long",day:"numeric"})}:function(e){return ke(e,"mediumDate")},Ce=function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()?function(e,t){return e.toLocaleString(t.language,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(e){return ke(e,"haDateTime")},Se=function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}return!1}()?function(e,t){return e.toLocaleTimeString(t.language,{hour:"numeric",minute:"2-digit"})}:function(e){return ke(e,"shortTime")};function Ee(e){return e.substr(0,e.indexOf("."))}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}($e||($e={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(xe||(xe={}));var Oe=function(e,t,i){var a;switch(null==t?void 0:t.number_format){case $e.comma_decimal:a=["en-US","en"];break;case $e.decimal_comma:a=["de","es","it"];break;case $e.space_comma:a=["fr","sv","cs"];break;case $e.system:a=void 0;break;default:a=null==t?void 0:t.language}if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},!Number.isNaN(Number(e))&&Intl&&(null==t?void 0:t.number_format)!==$e.none)try{return new Intl.NumberFormat(a,Te(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Te(e,i)).format(Number(e))}return e?e.toString():""},Te=function(e,t){var i=t||{};if("string"!=typeof e)return i;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var a=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=a,i.maximumFractionDigits=a}return i};function Me(e,t,i,a){var s=void 0!==a?a:t.state;if("unknown"===s||"unavailable"===s)return e("state.default."+s);if(t.attributes.unit_of_measurement)return Oe(s,i)+" "+t.attributes.unit_of_measurement;var r=function(e){return Ee(e.entity_id)}(t);if("input_datetime"===r){var n;if(!t.attributes.has_time)return n=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),Ae(n,i);if(!t.attributes.has_date){var o=new Date;return n=new Date(o.getFullYear(),o.getMonth(),o.getDay(),t.attributes.hour,t.attributes.minute),Se(n,i)}return n=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),Ce(n,i)}return"humidifier"===r&&"on"===s&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===r||"number"===r?Oe(s,i):t.attributes.device_class&&e("component."+r+".state."+t.attributes.device_class+"."+t.state)||e("component."+r+".state._."+t.state)||t.state}var De=function(e,t,i,a){a=a||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,e.dispatchEvent(s),s},ze={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Ne(e,t){if(e in ze)return ze[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"hass:bookmark"}}var Pe={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},je={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Ne("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in Pe)return Pe[t];if("battery"===t){var i=Number(e.state);if(isNaN(i))return"hass:battery-unknown";var a=10*Math.round(i/10);return a>=100?"hass:battery":a<=0?"hass:battery-alert":"hass:battery-"+a}var s=e.attributes.unit_of_measurement;return"°C"===s||"°F"===s?"hass:thermometer":Ne("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Ne("input_datetime"):"hass:calendar":"hass:clock"}};const He=["1","2","3","4","5","6","7","8","9","","0","clear"];var Ue;!function(e){e.Disarmed="disarmed",e.Arming="arming",e.Pending="pending",e.Triggered="triggered",e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustomBypass="armed_custom_bypass"}(Ue||(Ue={}));const Le={[Ue.ArmedAway]:"hass:shield-lock",[Ue.ArmedHome]:"hass:shield-home",[Ue.ArmedNight]:"hass:shield-moon",[Ue.ArmedVacation]:"hass:shield-airplane",[Ue.ArmedCustomBypass]:"hass:security",[Ue.Disarmed]:"hass:shield-off",[Ue.Arming]:"hass:shield-outline",[Ue.Pending]:"hass:shield-outline",[Ue.Triggered]:"hass:bell-ring"};var Re;!function(e){e.ArmAway="arm_away",e.ArmHome="arm_home",e.ArmNight="arm_night",e.ArmVacation="arm_vacation",e.ArmCustomBypass="arm_custom_bypass",e.Disarm="disarm"}(Re||(Re={}));const Ye={[Re.ArmAway]:Ue.ArmedAway,[Re.ArmHome]:Ue.ArmedHome,[Re.ArmNight]:Ue.ArmedNight,[Re.ArmVacation]:Ue.ArmedVacation,[Re.ArmCustomBypass]:Ue.ArmedCustomBypass,[Re.Disarm]:Ue.Disarmed};var Ie;!function(e){e.Arm="arm",e.Trigger="trigger",e.FailedToArm="failed_to_arm",e.CommandNotAllowed="command_not_allowed",e.NoCodeProvided="no_code_provided",e.InvalidCodeProvided="invalid_code_provided",e.TriggerTimeExpired="trigger_time_expired"}(Ie||(Ie={}));const Be=["arming","pending"],Fe={type:"",entity:"",name:"",keep_keypad_visible:!1,use_clear_icon:!1,button_scale_actions:1,button_scale_keypad:1,states:{},show_messages:!0},qe={skip_delay:!1,force:!1};var Ve={heading:"Options for arming",skip_delay:"Skip exit delay",force:"Bypass open sensors"},Ze={keep_keypad_visible:"Keep the keypad always visible, also when no code input is required.",button_scale_actions:"Scaling factor to apply for resizing the action buttons.",button_scale_keypad:"Scaling factor to apply for resizing the keypad buttons.",use_clear_icon:"Show icon (instead of text) in keypad for clearing code input.",show_messages:"Display diagnostic messages when alarm is triggered or cannot be armed.",available_actions:"Available actions:",action_dialog:{title:"Customize display of action '{action}'",button_label:"Override button label",state_label:"Override state label"}},We={blocking_sensors:"Could not arm due to the following sensors",triggered_sensors:"Alarm was triggered by the following sensors"},Ke={arm_options:Ve,editor:Ze,errors:We},Je=Object.freeze({__proto__:null,arm_options:Ve,editor:Ze,errors:We,default:Ke}),Ge={heading:"Options pour l'armement",skip_delay:"Ignorer le délai de sortie",force:"Bypasser les capteurs ouverts"},Qe={keep_keypad_visible:"Gardez le clavier toujours visible, même lorsqu'aucune saisie de code n'est requise.",button_scale_actions:"Facteur d'échelle à appliquer pour le redimensionnement des boutons des actions.",button_scale_keypad:"Facteur d'échelle à appliquer pour le redimensionnement des boutons du clavier.",use_clear_icon:"Afficher l'icône (au lieu du texte) sur le clavier pour effacer la saisie du code.",show_messages:"Afficher les messages de diagnostic lorsque l'alarme est déclenchée ou ne peut pas être armée.",available_actions:"Actions disponibles:",action_dialog:{title:"Personnaliser l'affichage de l'action '{action}'",button_label:"Remplacer le libellé du bouton",state_label:"Remplacer l'étiquette d'état"}},Xe={blocking_sensors:"Impossible d'armer en raison du(es) capteur(s) suivant(s)",triggered_sensors:"L'alarme a été déclenchée par le(s) capteur(s) suivant(s)"},et={arm_options:Ge,editor:Qe,errors:Xe},tt={heading:"Opciones de armado",skip_delay:"Omitir el retardo de salida",force:"Pasar por alto los sensores abiertos"},it={keep_keypad_visible:"Mantener el teclado siempre visible, también cuando no se requiere ninguna entrada de código.",button_scale_actions:"Factor de escalado para cambiar el tamaño de los botones de acción.",button_scale_keypad:"Factor de escalado para cambiar el tamaño de los botones del teclado.",use_clear_icon:"Mostrar icono (en lugar de texto) en el teclado para borrar la entrada de código.",show_messages:"Mostrar mensajes de diagnóstico cuando se activa la alarma o no se puede activar.",available_actions:"Acciones disponibles:",action_dialog:{title:"Personalizar la visualización de la acción '{action}'",button_label:"Sobrescribir el texto del botón",state_label:"Sobrescribir el texto de estado"}},at={blocking_sensors:"No se pudo armar debido a los siguientes sensores",triggered_sensors:"La alarma fue disparada por los siguientes sensores"},st={arm_options:tt,editor:it,errors:at},rt={fr:Object.freeze({__proto__:null,arm_options:Ge,editor:Qe,errors:Xe,default:et}),en:Je,es:Object.freeze({__proto__:null,arm_options:tt,editor:it,errors:at,default:st})};function nt(e,t,i="",a=""){const s=t.replace(/['"]+/g,"").replace("-","_");var r;try{r=e.split(".").reduce((e,t)=>e[t],rt[s])}catch(t){r=e.split(".").reduce((e,t)=>e[t],rt.en)}if(void 0===r&&(r=e.split(".").reduce((e,t)=>e[t],rt.en)),""!==i&&""!==a){Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]);for(let e=0;e<i.length;e++)r=r.replace(i[e],a[e])}return r}function ot(e){return null!=e}function lt(e){switch(typeof e){case"object":return 0==Object.keys(e).length;case"string":return 0==String(e).length;default:return!ot(e)}}const ct=(e,t)=>{let i={hide:!1,button_label:"",state_label:""};return(t.states||{}).hasOwnProperty(e)&&(i=Object.assign(Object.assign({},i),t.states[e])),i},dt=e=>{if(!e)return[];const t=e.attributes.supported_features||0;let i=[];return 2&t&&i.push(Re.ArmAway),1&t&&i.push(Re.ArmHome),4&t&&i.push(Re.ArmNight),32&t&&i.push(Re.ArmVacation),16&t&&i.push(Re.ArmCustomBypass),i},ht=e=>null!==e.attributes.code_format;let ut=class extends Q{async showDialog(e){this._params=e}closeDialog(){return this._params=void 0,!0}_createCloseHeading(){return N`
      <span class="header_title"
        >${nt("editor.action_dialog.title",this.hass.language,"{action}",this.hass.localize("ui.card.alarm_control_panel."+this._params.action))}</span
      >
      <ha-icon-button
        aria-label=${this.hass.localize("ui.dialogs.generic.close")}
        dialogAction="close"
        class="header_button"
        .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
      >
      </ha-icon-button>
    `}render(){return this._params?N`
      <ha-dialog
        open
        scrimClickAction
        .heading=${this._createCloseHeading()}
        @keydown=${this._ignoreKeydown}
        @closed=${this._cancel}
      >
        <paper-input
          label="${nt("editor.action_dialog.button_label",this.hass.language)}"
          .value="${this._params.config.button_label||""}"
          placeholder="${this.hass.localize("ui.card.alarm_control_panel."+this._params.action)}"
          @change=${e=>this._updateConfig({button_label:String(e.target.value).trim()})}
        ></paper-input>

        <paper-input
          label="${nt("editor.action_dialog.state_label",this.hass.language)}"
          .value="${this._params.config.state_label||""}"
          placeholder="${this.hass.localize("component.alarm_control_panel.state._."+Ye[this._params.action])}"
          @change=${e=>this._updateConfig({state_label:String(e.target.value).trim()})}
        ></paper-input>

        <div slot="primaryAction">
          <mwc-button @click=${this._cancel}>
            ${this.hass.localize("ui.common.cancel")}
          </mwc-button>
        </div>
        <div slot="secondaryAction">
          <mwc-button @click=${this._save}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-dialog>
    `:N``}_ignoreKeydown(e){e.stopPropagation()}_cancel(e){e&&e.stopPropagation(),this.closeDialog()}_save(e){var t;e&&e.stopPropagation(),null===(t=this._params)||void 0===t||t.confirm(this._params.config),this.closeDialog()}_updateConfig(e){this._params&&(this._params=Object.assign(Object.assign({},this._params),{config:Object.assign(Object.assign({},this._params.config),e)}))}static get styles(){return o`
      paper-dialog-scrollable {
        --paper-dialog-scrollable: {
          -webkit-overflow-scrolling: auto;
        }
      }
      /* force smooth scrolling for iOS 10 */
      paper-dialog-scrollable.can-scroll {
        --paper-dialog-scrollable: {
          -webkit-overflow-scrolling: touch;
        }
      }
      .paper-dialog-buttons {
        align-items: flex-end;
        padding: 8px;
        padding-bottom: max(env(safe-area-inset-bottom), 8px);
      }
      @media all and (min-width: 450px) and (min-height: 500px) {
        ha-paper-dialog {
          min-width: 400px;
        }
      }
      @media all and (max-width: 450px), all and (max-height: 500px) {
        paper-dialog,
        ha-paper-dialog {
          margin: 0;
          width: calc(100% - env(safe-area-inset-right) - env(safe-area-inset-left)) !important;
          min-width: calc(100% - env(safe-area-inset-right) - env(safe-area-inset-left)) !important;
          max-width: calc(100% - env(safe-area-inset-right) - env(safe-area-inset-left)) !important;
          max-height: calc(100% - var(--header-height));
          position: fixed !important;
          bottom: 0px;
          left: env(safe-area-inset-left);
          right: env(safe-area-inset-right);
          overflow: scroll;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      }
      /* mwc-dialog (ha-dialog) styles */
      ha-dialog {
        --mdc-dialog-min-width: 400px;
        --mdc-dialog-max-width: 600px;
        --mdc-dialog-heading-ink-color: var(--primary-text-color);
        --mdc-dialog-content-ink-color: var(--primary-text-color);
        --justify-action-buttons: space-between;
      }
      ha-dialog .form {
        padding-bottom: 24px;
        color: var(--primary-text-color);
      }
      a {
        color: var(--primary-color);
      }
      /* make dialog fullscreen on small screens */
      @media all and (max-width: 450px), all and (max-height: 500px) {
        ha-dialog {
          --mdc-dialog-min-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
          --mdc-dialog-max-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
          --mdc-dialog-min-height: 100%;
          --mdc-dialog-max-height: 100%;
          --mdc-shape-medium: 0px;
          --vertial-align-dialog: flex-end;
        }
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      .error {
        color: var(--error-color);
      }
      @media all and (max-width: 450px), all and (max-height: 500px) {
        /* overrule the ha-style-dialog max-height on small screens */
        ha-dialog {
          --mdc-dialog-max-height: 100%;
          height: 100%;
        }
      }
      @media all and (min-width: 850px) {
        ha-dialog {
          --mdc-dialog-min-width: 550px;
        }
      }
      ha-dialog {
        --mdc-dialog-max-width: 550px;
        --dialog-content-padding: 2px 24px 20px 24px;
        --dialog-z-index: 5;
      }
      .spinner,
      ha-card {
        width: calc(50% - 8px);
        text-align: center;
        margin: 4px;
      }
      ha-card {
        box-sizing: border-box;
        padding: 8px;
        color: var(--secondary-text-color);
        font-size: 16px;
        cursor: pointer;
      }
      ha-svg-icon {
        padding-bottom: 4px;
        --mdc-icon-size: 38px;
      }
      span.header {
        font-weight: 600;
      }
    `}};t([te({attribute:!1})],ut.prototype,"hass",void 0),t([ie()],ut.prototype,"_params",void 0),ut=t([X("alarmo-action-config-dialog")],ut);var mt=Object.freeze({__proto__:null,get AlarmoActionConfigDialog(){return ut}});const pt=e=>e.callWS({type:"alarmo/entities"}),gt=e=>e.callWS({type:"alarmo/config"});let bt=class extends Q{constructor(){super(...arguments),this._entities=null}async firstUpdated(){pt(this.hass).then(e=>{this._entities=e.map(e=>e.entity_id)}).catch(e=>{}),this._alarmoConfig=await gt(this.hass)}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),this._config=Object.assign({},e)}render(){var e,t,i;if(!this._config||!this.hass||!this._entities)return N``;if(!this._entities.length)return N`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;const a=this._config.entity?this.hass.states[this._config.entity]:void 0,s="number"===(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)&&(this._alarmoConfig.code_arm_required||this._alarmoConfig.code_disarm_required);return N`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
            .hass=${this.hass}
            .value="${this._config.entity||""}"
            .includeDomains=${["alarm_control_panel"]}
            .entityFilter=${e=>this._entities.includes(e.entity_id)}
            @change=${e=>this._updateConfig("entity",e.target.value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._config.name||""}"
            @input=${e=>this._updateConfig("name",String(e.target.value).trim())}
          ></ha-textfield>
        </div>

        ${a?N`
              <div class="config-item">
                <span>${nt("editor.available_actions",this.hass.language)}</span>
              </div>
              <div class="config-row">
                ${[...dt(a),Re.Disarm].map(e=>{const t=dt(a).map(e=>Ye[e]),i=ct(Ye[e],this._config).hide;return N`
                    <div class="checkbox-item ${i?"disabled":""}">
                      <ha-checkbox
                        ?checked=${!i}
                        ?disabled=${!i&&1==t.filter(e=>!ct(e,this._config).hide).length||e==Re.Disarm}
                        @change=${t=>this._updateStateConfig(Ye[e],t.target.checked?{hide:void 0}:{hide:!0})}
                      >
                      </ha-checkbox>
                      <span
                        @click=${e=>{const t=e.target.previousElementSibling;t.click(),t.blur()}}
                      >
                        ${this.hass.localize("ui.card.alarm_control_panel."+e)}
                      </span>
                      <ha-icon-button
                        .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                        style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
                        ?disabled=${ct(Ye[e],this._config).hide}
                        @click=${t=>this._openActionLabelDialog(t,e)}
                      >
                      </ha-icon-button>
                    </div>
                  `})}
              </div>
            `:""}

        <div class="grid">
          <ha-formfield .label=${nt("editor.button_scale_actions",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_actions||1}
              @change=${e=>this._updateConfig("button_scale_actions",Number(e.target.value))}
              min="${1}"
              max="${2.5}"
              step="0.1"
              pin
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${nt("editor.button_scale_keypad",this.hass.language)}>
            <ha-slider
              value=${this._config.button_scale_keypad||1}
              @change=${e=>this._updateConfig("button_scale_keypad",Number(e.target.value))}
              min="${1}"
              max="${2.5}"
              step="0.1"
              pin
              ?disabled=${!a||!s}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${nt("editor.use_clear_icon",this.hass.language)}>
            <ha-switch
              .checked=${this._config.use_clear_icon}
              @change=${e=>this._updateConfig("use_clear_icon",e.target.checked)}
              ?disabled=${!a||!s}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${nt("editor.show_messages",this.hass.language)}>
            <ha-switch
              .checked=${this._config.show_messages||!ot(this._config.show_messages)}
              @change=${e=>this._updateConfig("show_messages",e.target.checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${nt("editor.keep_keypad_visible",this.hass.language)}>
            <ha-switch
              .checked=${this._config.keep_keypad_visible}
              @change=${e=>this._updateConfig("keep_keypad_visible",e.target.checked)}
              ?disabled=${!a||!s||(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_arm_required)==(null===(i=this._alarmoConfig)||void 0===i?void 0:i.code_disarm_required)}
            ></ha-switch
          ></ha-formfield>
        </div>
      </div>
    `}_updateConfig(e,t){if(this.hass){if(this._config=Object.assign(Object.assign({},this._config),{[e]:t}),"entity"==e){const e=this._config.entity?this.hass.states[this._config.entity]:void 0;e&&e.attributes.code_arm_required!=e.attributes.code_disarm_required||(this._config=Object.assign(Object.assign({},this._config),{keep_keypad_visible:!1}))}De(this,"config-changed",{config:this._config})}}_updateStateConfig(e,t){var i;const a=e=>function(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}):{}}(e,Object.keys(e).filter(t=>!lt(e[t])));let s=(null===(i=this._config)||void 0===i?void 0:i.states)||{};const r=a(Object.assign(Object.assign({},s[e]),t));s=a(Object.assign(Object.assign({},s),{[e]:r})),this._updateConfig("states",s)}_openActionLabelDialog(e,t){const i={action:t,config:ct(Ye[t],this._config),confirm:e=>{this._updateStateConfig(Ye[t],e)}};De(e.target,"show-dialog",{dialogTag:"alarmo-action-config-dialog",dialogImport:()=>Promise.resolve().then((function(){return mt})),dialogParams:i})}static get styles(){return o`
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      ha-textfield {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.checkbox-item {
        font-size: 0.875rem;
      }
      div.checkbox-item.disabled {
        color: var(--disabled-text-color);
      }
    `}};t([te({attribute:!1})],bt.prototype,"hass",void 0),t([ie()],bt.prototype,"_config",void 0),t([ie()],bt.prototype,"_alarmoConfig",void 0),t([ie()],bt.prototype,"_entities",void 0),bt=t([X("alarmo-card-editor")],bt);var ft=Object.freeze({__proto__:null,get AlarmoCardEditor(){return bt}});class _t extends Q{constructor(){super(...arguments),this.duration=0,this.datetime=null,this.timer=0}shouldUpdate(e){if(!e.size)return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language)return!0;if(t.states[this.entity].state!==this.hass.states[this.entity].state||t.states[this.entity].attributes.delay!==this.hass.states[this.entity].attributes.delay){const e=t.states[this.entity].state,i=this.hass.states[this.entity].state;return Be.includes(i)?this.startTimer():Be.includes(e)&&this.stopTimer(),!0}return!1}firstUpdated(){const e=this.hass.states[this.entity].state;Be.includes(e)&&this.startTimer()}async startTimer(){var e,t;clearInterval(this.timer),(e=this.hass,t=this.entity,e.callWS({type:"alarmo/countdown",entity_id:t})).then(e=>{this.duration=e.delay,this.datetime=new Date((new Date).getTime()+1e3*e.remaining)}).catch(e=>{}),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3)}stopTimer(){clearInterval(this.timer),this.datetime=null,this.duration=0}getRemaining(){if(!this.datetime)return 0;const e=(this.datetime.getTime()-(new Date).getTime())/1e3;return e<0?(clearInterval(this.timer),0):e}getFraction(){return this.duration?(Math.round(this.getRemaining())-1)/this.duration:1}_stateValue(e){return this.datetime&&this.duration?N`
        ${Math.max(Math.round(this.getRemaining()),0)}
      `:N`
        <ha-icon .icon=${Le[e]}></ha-icon>
      `}render(){let e=45,t=2*Math.PI*e;const i=this.hass.states[this.entity],a=this.datetime&&this.duration;return N`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${i.state.split("_").shift()} ${a?"timer":""}">
          <circle cx="${50}" cy="${50}" r="${e}"></circle>
          <path
            stroke-dasharray="${(this.getFraction()*t).toFixed(2)} ${t.toFixed(2)}"
            class="remaining"
            d="
              M ${50}, ${50}
              m -${e}, 0
              a ${e},${e} 0 1,0 90,0
              a ${e},${e} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${i.state.split("_").shift()} ${a?"timer":""}">
        <div class="value">
          ${this._stateValue(i.state)}
        </div>
      </div>
    `}static get styles(){return o`
      :host {
        --alarm-color-disarmed: var(--label-badge-green);
        --alarm-color-pending: var(--label-badge-yellow);
        --alarm-color-triggered: var(--label-badge-red);
        --alarm-color-armed: var(--label-badge-red);
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 3;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed {
        --alarm-state-color: var(--alarm-color-disarmed);
        animation: none;
      }
      .triggered {
        --alarm-state-color: var(--alarm-color-triggered);
        animation: pulse 1s infinite;
      }
      .arming,
      .pending {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        --alarm-state-color: var(--primary-color);
        animation: none;
      }
      .armed {
        --alarm-state-color: var(--alarm-color-armed);
        animation: none;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}}t([te()],_t.prototype,"hass",void 0),t([te()],_t.prototype,"entity",void 0),customElements.define("alarmo-state-badge",_t);class vt extends Q{shouldUpdate(e){const t=e.get("hass");return!t||!(!this.entity||t.states[this.entity]===this.hass.states[this.entity])}render(){if(!this.hass||!this.entity)return N``;let e=Object.assign({},this.hass.states[this.entity]);void 0!==this.state&&(e=Object.assign(Object.assign({},e),{state:this.state}));const t=function(e){if(!e)return"hass:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=Ee(e.entity_id);return t in je?je[t](e):Ne(t,e.state)}(e),i=Me(this.hass.localize,e,this.hass.locale||{language:this.hass.language,number_format:$e.language}),a=e.attributes.friendly_name||function(e){return e.substr(e.indexOf(".")+1)}(e.entity_id);let s=!!this.state||"on"==e.state;return N`
      <div class="badge-container" @click=${()=>De(this,"hass-more-info",{entityId:this.entity})}>
        <div class="label-badge ${s?"active":""}" id="badge">
          <div class="value">
            <ha-icon .icon=${t}></ha-icon>
            <div class="label">
              <span>${i}</span>
            </div>
          </div>
        </div>
        <div class="title">${a}</div>
      </div>
    `}static get styles(){return o`
      .badge-container {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        padding: var(--ha-label-badge-padding, 0 0 0 0);
        cursor: pointer;
      }
      .label-badge {
        position: relative;
        display: block;
        margin: 0 auto;
        width: var(--ha-label-badge-size, 2.5em);
        text-align: center;
        height: var(--ha-label-badge-size, 2.5em);
        line-height: var(--ha-label-badge-size, 2.5em);
        font-size: var(--ha-label-badge-font-size, 1.5em);
        border-radius: 50%;
        border: 0.1em solid var(--primary-color);
        color: var(--label-badge-text-color, rgb(76, 76, 76));
        white-space: nowrap;
        background-color: none;
        background-size: cover;
        transition: border 0.3s ease-in-out;
      }
      .label-badge.active {
        border: 0.1em solid var(--label-badge-red);
      }
      .label-badge .value {
        font-size: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .label-badge .label {
        position: absolute;
        bottom: -1em;
        left: -0.2em;
        right: -0.2em;
        line-height: 1em;
        font-size: 0.5em;
      }
      .label-badge .label span {
        box-sizing: border-box;
        max-width: 100%;
        display: inline-block;
        background-color: var(--primary-color);
        color: var(--ha-label-badge-label-color, white);
        border-radius: 1em;
        padding: 9% 16% 8% 16%;
        font-weight: 500;
        overflow: hidden;
        text-transform: uppercase;
        text-overflow: ellipsis;
        transition: background-color 0.3s ease-in-out;
        text-transform: var(--ha-label-badge-label-text-transform, uppercase);
      }
      .label-badge.active .label span {
        background-color: var(--label-badge-red);
      }
      .badge-container .title {
        margin-top: 1em;
        font-size: var(--ha-label-badge-title-font-size, 0.9em);
        width: var(--ha-label-badge-title-width, 5em);
        font-weight: var(--ha-label-badge-title-font-weight, 400);
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
      }
    `}}t([te()],vt.prototype,"hass",void 0),t([te()],vt.prototype,"entity",void 0),t([te()],vt.prototype,"state",void 0),customElements.define("alarmo-sensor-badge",vt);class yt extends Q{constructor(){super(...arguments),this.disabled=!1,this.scaled=!1}render(){return N`
      ${this.scaled?N`
            <button ?disabled=${this.disabled}>
              <slot></slot>
            </button>
          `:N`
            <mwc-button ?disabled=${this.disabled} ?outlined=${!this.disabled}>
              <slot></slot>
            </mwc-button>
          `}
    `}handleFocus(e){e.target.blur()}static get styles(){return o`
      button {
        width: 100%;
        border-width: calc(var(--content-scale, 1) * 1px);
        border-color: var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12));
        color: var(--mdc-theme-primary, #6200ee);
        border-radius: var(--mdc-shape-small, 4px);
        padding: calc(var(--content-scale, 1) * 0.875rem);
        background-color: transparent;
        font-size: calc(var(--content-scale, 1) * 0.875rem);
        font-weight: var(--mdc-typography-button-font-weight, 500);
        letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857em);
        text-decoration: var(--mdc-typography-button-text-decoration, none);
        text-transform: var(--mdc-typography-button-text-transform, uppercase);
        -webkit-font-smoothing: antialiased;
        font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
      }
      button:not(:disabled) {
        cursor: pointer;
        transition: background-color 0.1s ease;
      }
      button:disabled {
        color: var(--disabled-text-color);
        border: none;
      }
      button:not(:disabled):hover {
        background-color: rgba(var(--rgb-primary-color), 0.06);
      }
      button:not(:disabled):active {
        background-color: rgba(var(--rgb-primary-color), 0.12);
      }
      button:focus {
        outline: none;
      }
      mwc-button {
        width: 100%;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.25rem);
        margin: -0.1875rem 0px;
        display: block;
      }
    `}}t([te({type:Boolean})],yt.prototype,"disabled",void 0),t([te({type:Boolean})],yt.prototype,"scaled",void 0),customElements.define("alarmo-button",yt);const wt=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([te({attribute:!1})],i.prototype,"hass",void 0),i};e.AlarmoCard=class extends(wt(Q)){constructor(){super(...arguments),this._input="",this.warning="",this.area_id=void 0,this.armOptions=Object.assign({},qe),this.backendConnection=null,this.subscribedEntities=[],this._codeClearTimer=0}static async getConfigElement(){return await Promise.resolve().then((function(){return ft})),document.createElement("alarmo-card-editor")}async getCardSize(){var e;if(!this._config||!this.hass)return 9;const t=this.hass.states[this._config.entity];return t&&"number"===(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)&&(ht(t)||this._config.keep_keypad_visible)?9:4}setConfig(e){!(null==e?void 0:e.button_scale_actions)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_actions:null==e?void 0:e.button_scale})),!(null==e?void 0:e.button_scale_keypad)&&(null==e?void 0:e.button_scale)&&(e=Object.assign(Object.assign({},e),{button_scale_keypad:null==e?void 0:e.button_scale})),(e=>{if(!e||!e.entity||"alarm_control_panel"!==Ee(e.entity))throw new Error("Invalid configuration provided for entity");if(ot(e.button_scale_keypad)&&("number"!=typeof e.button_scale_keypad||e.button_scale_keypad<1||e.button_scale_keypad>2.5))throw new Error("Invalid configuration provided for button_scale_keypad");if(ot(e.button_scale_actions)&&("number"!=typeof e.button_scale_actions||e.button_scale_actions<1||e.button_scale_actions>2.5))throw new Error("Invalid configuration provided for button_scale_actions")})(e),this._config=Object.assign(Object.assign({},Fe),e)}hassSubscribe(){return[this.hass.connection.subscribeMessage(e=>this._fetchData(e),{type:"alarmo_updated"})]}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement(),await this.loadBackendConfig()}async loadBackendConfig(){this.backendConnection||pt(this.hass).then(e=>{let t=e.find(e=>e.entity_id==this._config.entity);t&&(this.area_id=t.area_id?t.area_id:null)}).then(()=>gt(this.hass)).then(e=>{this._alarmoConfig=e,this.backendConnection=!0}).catch(e=>{this.backendConnection=!1})}async _fetchData(e){if(e.data.area_id===this.area_id)switch(e.data.event){case Ie.Arm:this._clearCode();break;case Ie.Trigger:break;case Ie.InvalidCodeProvided:case Ie.NoCodeProvided:this._showCodeError(),this.subscribedEntities=[];break;case Ie.FailedToArm:this.warning="blocking_sensors",this._clearCode();break;case Ie.CommandNotAllowed:this._clearCode();break;case Ie.TriggerTimeExpired:}}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||t.themes!==this.hass.themes||t.language!==this.hass.language||t.config.state!==this.hass.config.state)return!0;if(t.states[this._config.entity]!==this.hass.states[this._config.entity]){const e=t.states[this._config.entity],i=this.hass.states[this._config.entity];return!1===this.backendConnection&&(async()=>{await this.loadBackendConfig()})(),this.processStateUpdate(e,i),!0}return!(!this.subscribedEntities.length||!this.subscribedEntities.some(e=>t.states[e]!==this.hass.states[e]))}processStateUpdate(e,t){t.state!=e.state&&(this.subscribedEntities=[]),t.state==Ue.Disarmed&&this._clearCode()}render(){var e,t;if(!this._config||!this.hass||null===this.backendConnection)return N``;const i=this.hass.states[this._config.entity];return i?!1===this.backendConnection?N`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `:N`
      <ha-card>
        ${i.state===Ue.Disarmed?N`
              <ha-button-menu
                corner="BOTTOM_START"
                multi
                @action=${this._toggleArmOptions}
                @click=${e=>e.preventDefault()}
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize("ui.common.menu")} .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}>
                </ha-icon-button>
                <mwc-list-item noninteractive>
                  <span class="title">
                    ${nt("arm_options.heading",this.hass.language)}
                  </span>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <mwc-checkbox
                    slot="graphic"
                    ?checked=${this.armOptions.skip_delay}
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></mwc-checkbox>
                  ${nt("arm_options.skip_delay",this.hass.language)}
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <mwc-checkbox
                    slot="graphic"
                    ?checked=${this.armOptions.force}
                    @click=${e=>{var t;null===(t=e.target.parentElement)||void 0===t||t.click(),e.stopPropagation()}}
                  ></mwc-checkbox>
                  ${nt("arm_options.force",this.hass.language)}
                </mwc-list-item>
              </ha-button-menu>
            `:""}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${()=>De(this,"hass-more-info",{entityId:this._config.entity})}
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${((e,t)=>lt(t.name)?e.attributes.friendly_name:t.name)(i,this._config)}
            </div>
            <div class="state">
              ${((e,t,i)=>{const a=e.state;if(Object.values(Ue).includes(a)){const e=ct(a,i);if(!lt(e.state_label))return e.state_label}return t("component.alarm_control_panel.state._."+e.state)})(i,this.hass.localize,this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="armActions" class="actions">
          ${this._renderActions()}
        </div>

        ${ht(i)||this._config.keep_keypad_visible?N`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!ht(i)}
                @input=${e=>{this._clearCodeError(),this._input=e.target.value,this._setCodeClearTimer()}}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${"number"===(null===(e=this._alarmoConfig)||void 0===e?void 0:e.code_format)?"numeric":"text"}
              ></ha-textfield>
            `:N``}
        ${!ht(i)&&!this._config.keep_keypad_visible||"number"!==(null===(t=this._alarmoConfig)||void 0===t?void 0:t.code_format)?N``:N`
              <div id="keypad" style="max-width: ${300*this._config.button_scale_keypad}px">
                ${He.map(e=>""===e?N`
                        <alarmo-button
                          disabled
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        ></alarmo-button>
                      `:N`
                        <alarmo-button
                          .value="${e}"
                          @click=${this._handlePadClick}
                          ?disabled=${!ht(i)}
                          class="${"clear"!==e?"numberKey":""}"
                          style="--content-scale: ${this._config.button_scale_keypad}"
                          ?scaled=${1!=this._config.button_scale_keypad}
                        >
                          ${"clear"===e?this._config.use_clear_icon?N`
                                  <ha-icon icon="hass:backspace-outline"></ha-icon>
                                `:this.hass.localize("ui.card.alarm_control_panel.clear_code"):e}
                        </alarmo-button>
                      `)}
              </div>
            `}
      </ha-card>
    `:N`
        <hui-warning>
          ${"NOT_RUNNING"!==this.hass.config.state?this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity||"[empty]"):this.hass.localize("ui.panel.lovelace.warning.starting")}
        </hui-warning>
      `}_renderActions(){if(!this.hass||!this._config)return N``;const e=this.hass.states[this._config.entity];return(e.state===Ue.Disarmed?dt(e).filter(e=>!ct(Ye[e],this._config).hide):[Re.Disarm]).map(e=>{const t=ct(Ye[e],this._config);return N`
        <alarmo-button
          @click=${t=>this._handleActionClick(t,e)}
          style="--content-scale: ${this._config.button_scale_actions}"
          ?scaled=${1!=this._config.button_scale_actions}
        >
          ${lt(t.button_label)?this.hass.localize("ui.card.alarm_control_panel."+e):t.button_label}
        </alarmo-button>
      `})}_renderWarning(){if(!this.hass||!this._config||!this._config.show_messages)return N``;const e=this.hass.states[this._config.entity];return e.attributes.open_sensors&&e.state==Ue.Triggered||"blocking_sensors"==this.warning&&e.attributes.open_sensors?N`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${"blocking_sensors"==this.warning?nt("errors.blocking_sensors",this.hass.language):nt("errors.triggered_sensors",this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(e.attributes.open_sensors).map(([e])=>(this.subscribedEntities.includes(e)||this.subscribedEntities.push(e),N`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `))}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `:N``}_handlePadClick(e){const t=e.currentTarget.value;this._clearCodeError(),this._input="clear"===t?"":this._input+t}_handleActionClick(e,t){e.target.blur(),this._clearCodeError(),t==Re.Disarm?this.hass.callService("alarmo","disarm",{entity_id:this._config.entity,code:this._input}):this.hass.callService("alarmo","arm",Object.assign(Object.assign({},this.armOptions),{entity_id:this._config.entity,mode:Ye[t],code:this._input})),this.warning="",this.armOptions=Object.assign({},qe)}_showCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&(t.classList.remove("error"),t.classList.add("error"),t.invalid=!0)}_clearCodeError(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#code_input");t&&t.classList.contains("error")&&(t.classList.remove("error"),t.invalid=!1,this._input="",this._cancelCodeClearTimer())}_clearCode(){this._input="",this._clearCodeError(),this._cancelCodeClearTimer()}_setCodeClearTimer(){this._cancelCodeClearTimer(),this._input.length&&(this._codeClearTimer=window.setTimeout(()=>{this._clearCode()},12e4))}_cancelCodeClearTimer(){this._codeClearTimer&&clearTimeout(this._codeClearTimer)}_toggleArmOptions(e){switch(e.detail.index){case 0:this.armOptions=Object.assign(Object.assign({},this.armOptions),{skip_delay:!this.armOptions.skip_delay});break;case 1:this.armOptions=Object.assign(Object.assign({},this.armOptions),{force:!this.armOptions.force})}e.preventDefault();const t=e.target;setTimeout(()=>{t.firstElementChild.blur()},50)}static get styles(){return o`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
      }
      .header .icon {
        display: flex;
        padding-right: 20px;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button {
        margin: 0 8px 8px;
      }
      ha-textfield {
        margin: 8px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 100%;
      }
      #keypad alarmo-button {
        padding: 8px;
        width: 30%;
        box-sizing: border-box;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--label-badge-red);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--label-badge-red);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--label-badge-red);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--label-badge-red);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
      ha-button-menu {
        position: absolute;
        right: 4px;
        top: 4px;
      }
      mwc-list-item {
        --mdc-theme-secondary: var(--primary-color);
        --mdc-list-item-graphic-margin: 16px;
      }
      mwc-list-item .title {
        font-weight: 500;
        font-size: 1.1em;
      }
    `}},t([te({attribute:!1})],e.AlarmoCard.prototype,"hass",void 0),t([ie()],e.AlarmoCard.prototype,"_config",void 0),t([ie()],e.AlarmoCard.prototype,"_alarmoConfig",void 0),t([ie()],e.AlarmoCard.prototype,"_input",void 0),t([ie()],e.AlarmoCard.prototype,"warning",void 0),t([ie()],e.AlarmoCard.prototype,"area_id",void 0),t([ie()],e.AlarmoCard.prototype,"armOptions",void 0),t([ie()],e.AlarmoCard.prototype,"backendConnection",void 0),e.AlarmoCard=t([X("alarmo-card")],e.AlarmoCard),window.customCards=window.customCards||[],window.customCards.push({type:"alarmo-card",name:"Alarmo Card",description:"Card for operating Alarmo through Lovelace."}),console.info("%c  ALARMO-CARD  \n%c  Version: "+"v1.4.1".padEnd(7," "),"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray")}({});
