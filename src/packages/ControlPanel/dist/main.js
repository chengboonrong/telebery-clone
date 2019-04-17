/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/@osjs/gui/dist/esm.js":
/*!***********************************************************************!*\
  !*** /home/chris/beaco/proc/OS.js/node_modules/@osjs/gui/dist/esm.js ***!
  \***********************************************************************/
/*! exports provided: Element, Box, BoxContainer, BoxStyled, Button, Progressbar, Menu, Toolbar, Statusbar, MenubarItem, Menubar, Panes, ListView, listView, IconViewEntry, IconView, iconView, Image, Video, Tabs, Iframe, TextField, TextareaField, SelectField, ToggleField, RangeField, Icon, Expander, Label, GUIServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxContainer", function() { return BoxContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxStyled", function() { return BoxStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progressbar", function() { return Progressbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statusbar", function() { return Statusbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarItem", function() { return MenubarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menubar", function() { return Menubar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panes", function() { return Panes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listView", function() { return listView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconViewEntry", function() { return IconViewEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconView", function() { return IconView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconView", function() { return iconView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframe", function() { return Iframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaField", function() { return TextareaField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectField", function() { return SelectField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleField", function() { return ToggleField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeField", function() { return RangeField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expander", function() { return Expander; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUIServiceProvider", function() { return GUIServiceProvider; });
function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var arrayWithoutHoles=_arrayWithoutHoles;function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}var iterableToArray=_iterableToArray;function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var nonIterableSpread=_nonIterableSpread;function _toConsumableArray(e){return arrayWithoutHoles(e)||iterableToArray(e)||nonIterableSpread()}var toConsumableArray=_toConsumableArray;function h(e,t){for(var n=[],o=[],a=arguments.length;2<a--;)n.push(arguments[a]);for(;n.length;){var s=n.pop();if(s&&s.pop)for(a=s.length;a--;)n.push(s[a]);else null!=s&&!0!==s&&!1!==s&&o.push(s)}return"function"==typeof e?e(t||{},o):{nodeName:e,attributes:t||{},children:o,key:t&&t.key}}function app(e,t,n,o){function a(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:k.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:a(e)})}}function s(e){return"function"==typeof e?s(e(I,S)):null==e?"":e}function i(){b=!b;var e=s(n);for(o&&!b&&(j=f(o,j,w,w=e)),L=!1;_.length;)_.pop()()}function l(){b||(b=!0,setTimeout(i))}function r(e,t){var n={};for(var o in e)n[o]=e[o];for(var o in t)n[o]=t[o];return n}function c(e,t,n){var o={};return e.length?(o[e[0]]=1<e.length?c(e.slice(1),t,n[e[0]]):t,r(n,o)):t}function d(e,t){for(var n=0;n<e.length;)t=t[e[n++]];return t}function p(e,t,n){for(var o in n)"function"==typeof n[o]?function(o,a){n[o]=function(o){var s=a(o);return"function"==typeof s&&(s=s(d(e,I),n)),s&&s!==(t=d(e,I))&&!s.then&&l(I=c(e,r(t,s),I)),s}}(o,n[o]):p(e.concat(o),t[o]=r(t[o]),n[o]=r(n[o]));return n}function u(e){return e?e.key:null}function g(e){return e.currentTarget.events[e.type](e)}function h(e,t,n,o,a){if("key"===t);else if("style"!==t)"o"===t[0]&&"n"===t[1]?(t=t.slice(2),e.events?!o&&(o=e.events[t]):e.events={},e.events[t]=n,n?!o&&e.addEventListener(t,g):e.removeEventListener(t,g)):t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!a?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),(null==n||!1===n)&&e.removeAttribute(t);else if("string"==typeof n)e.style.cssText=n;else for(var s in"string"==typeof o&&(o=e.style.cssText=""),r(o,n)){var i=null==n||null==n[s]?"":n[s];"-"===s[0]?e.style.setProperty(s,i):e.style[s]=i}}function m(e,t){var n="string"==typeof e||"number"==typeof e?document.createTextNode(e):(t=t||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),o=e.attributes;if(o){o.oncreate&&_.push(function(){o.oncreate(n)});for(var a=0;a<e.children.length;a++)n.appendChild(m(e.children[a]=s(e.children[a]),t));for(var l in o)h(n,l,o[l],null,t)}return n}function v(e,t,n,o){for(var a in r(t,n))n[a]!==("value"==a||"checked"==a?e[a]:t[a])&&h(e,a,n[a],t[a],o);var s=L?n.oncreate:n.onupdate;s&&_.push(function(){s(e,t)})}function y(e,t){var n=t.attributes;if(n){for(var o=0;o<t.children.length;o++)y(e.childNodes[o],t.children[o]);n.ondestroy&&n.ondestroy(e)}return e}function x(e,t,n){function o(){e.removeChild(y(t,n))}var a=n.attributes&&n.attributes.onremove;a?a(t,o):o()}function f(e,t,n,o,a){if(o===n);else if(null==n||n.nodeName!==o.nodeName){var l=m(o,a);e.insertBefore(l,t),null!=n&&x(e,t,n),t=l}else if(null==n.nodeName)t.nodeValue=o;else{v(t,n.attributes,o.attributes,a=a||"svg"===o.nodeName);for(var r={},c={},d=[],p=n.children,g=o.children,h=0;h<p.length;h++){d[h]=t.childNodes[h];var y=u(p[h]);null!=y&&(r[y]=[d[h],p[h]])}for(var h=0,b=0;b<g.length;){var y=u(p[h]),j=u(g[b]=s(g[b]));if(c[y]){h++;continue}if(null!=j&&j===u(p[h+1])){null==y&&x(t,d[h],p[h]),h++;continue}if(null==j||L)null==y&&(f(t,d[h],p[h],g[b],a),b++),h++;else{var w=r[j]||[];y===j?(f(t,w[0],w[1],g[b],a),h++):w[0]?f(t,t.insertBefore(w[0],d[h]),w[1],g[b],a):f(t,d[h],null,g[b],a),c[j]=g[b],b++}}for(;h<p.length;)null==u(p[h])&&x(t,d[h],p[h]),h++;for(var h in r)c[h]||x(t,r[h][0],r[h][1])}return t}var b,k=[].map,j=o&&o.children[0]||null,w=j&&a(j),_=[],L=!0,I=r(e),S=p([],I,r(t));return l(),S}var unitValue=function(e,t){return"number"==typeof e?"".concat(e,"px"):!1===e?t:e},boxPropNames={grow:function(e){return{flexGrow:e}},shrink:function(e){return{flexShrink:e}},basis:function(e){return{flexBasis:unitValue(e,"auto")}},align:function(e){return{alignItems:e}},justify:function(e){return{justifyContent:e}},padding:function(e){return{margin:unitValue(e,"0")}},margin:function(e){return{margin:unitValue(e,"0")}}},Element$1=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=e.class instanceof Array?e.class:[e.class],o=["osjs-gui"].concat(toConsumableArray(n));e.orientation&&o.push("osjs-gui-"+e.orientation);var a="string"==typeof e.style?{}:Object.assign({},e.style||{}),s=Object.keys(e).reduce(function(t,n){var o=boxPropNames[n]?boxPropNames[n](e[n]):void 0;return Object.assign({},t,o)},a);return h("div",{oncreate:e.oncreate,ondestroy:e.ondestroy,class:o.filter(function(e){return!!e}).join(" "),style:s},t)},Box=function(e,t){return h(Element$1,Object.assign({orientation:"horizontal"},e,{class:["osjs-gui-box",e.class]}),t)},BoxContainer=function(e,t){return h(Element$1,Object.assign({},e,{class:["osjs-gui-box-container",e.class]}),t)},BoxStyled=function(e,t){return h(Element$1,Object.assign({},e,{class:["osjs-gui-box-styled",e.class]}),t)};function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}var _typeof_1=createCommonjsModule(function(e){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(o){return e.exports="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?n=function(e){return t(e)}:n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},n(o)}e.exports=n}),Icon=function(e){var t=e&&"object"===_typeof_1(e)?e.src:e,o=e&&"object"===_typeof_1(e)?e.name:void 0;return h("i",{"data-icon":o,class:"osjs-icon",style:{backgroundImage:"string"==typeof e?"url(".concat(t,")"):void 0}})};function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var defineProperty=_defineProperty,filteredProps=function(e,t){var n=Object.keys(e);return n.filter(function(e){return-1===t.indexOf(e)}).reduce(function(t,n){return Object.assign(defineProperty({},n,e[n]),t)},{})},doubleTap=function(){var e,t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:250,n=!1;return function(o,a){return(e=clearTimeout(e),e=setTimeout(function(){return n=!1},t),n)?(o.preventDefault(),a(o)):(n=!0,!1)}},createField=function(e,t,n,o,a){var s=t.oninput||function(){},i=t.onchange||function(){},l=t.onkeydown||function(){},r=a||function(e){return[e.target.value]},c=Object.assign({oninput:function(e){return s.apply(void 0,[e].concat(toConsumableArray(r(e))))},onchange:function(e){return i.apply(void 0,[e].concat(toConsumableArray(r(e))))},onkeydown:function(e){13===e.keyCode&&t.onenter&&t.onenter.apply(t,[e].concat(toConsumableArray(r(e)))),l(e)}},n,filteredProps(t,["choices","label","box","oninput","onchange"]));return h(Element$1,Object.assign({},t.box||{},{class:"osjs-gui-field osjs-gui-"+e}),o(c))},Button=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return createField("button",e,{},function(n){var o=[];return e.icon&&o.push(h(Icon,e.icon)),"string"==typeof e.label&&o.push(h("span",{class:"osjs-label"},e.label)),h("button",n,[].concat(o,toConsumableArray(t)))})},Progressbar=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n="number"==typeof e.value?Math.max(0,Math.abs(e.value))%100:0,o=h("div",{class:"osjs-gui-progressbar-wrapper"},[h("div",{className:"osjs-gui-progressbar-value",style:{width:n+""+"%"}}),h("div",{className:"osjs-gui-progressbar-label"},[h("span",{},[n+""+"%"])])]);return h(Element$1,Object.assign({},e.box||{},{class:["osjs-gui-progressbar",e.class]}),[o].concat(toConsumableArray(t)))},ul=function e(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:0,a=function(e){var t=[];return"checkbox"===e.type||"boolean"==typeof e.checked?t.push(h("span",{class:"osjs-gui-menu-checkbox "+(e.checked?"active":"")})):e.icon&&t.push(h(Icon,e.icon)),t.push(h("span",{},e.label)),t},s=function(t,n){if("function"==typeof n.element)return n.element();var s="separator"===n.type?"osjs-gui-menu-separator":"osjs-gui-menu-label "+(n.disabled?"osjs__disabled":""),i=[h("span",{class:s},a(n))];return n.items&&i.push(e(t,n.items,o+1)),i};return h("ul",{class:""},n.map(function(e){return h("li",{class:"osjs-gui-menu-entry"},[h("div",{class:"osjs-gui-menu-container","data-has-image":!!e.icon||void 0,"data-has-children":!!e.items||void 0,onmouseover:e.items?t.onshow:void 0,ontouchend:e.items?t.onshow:void 0,onclick:function(n){e.items||(e.onclick&&e.onclick(e,n),t.onclick&&t.onclick(e,n,e))}},s(t,e))])}))},Menu=function(e){return h("div",{id:"osjs-context-menu",className:"osjs-gui osjs-gui-menu",oncreate:e.oncreate,onupdate:e.onupdate,style:{display:!1===e.visible?"none":"block",top:e.position?e.position.top+""+"px":0,left:e.position?e.position.left+""+"px":0}},ul(e,e.menu))},Toolbar=function(e,t){return h(Element$1,Object.assign({orientation:"vertical"},e,{class:["osjs-gui-toolbar",e.class]}),t)},Statusbar=function(e,t){return h(Element$1,Object.assign({},e.box||{},{class:["osjs-gui-statusbar",e.class]}),t)},MenubarItem=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=e.onclick,o=e.data;return h("div",{onclick:function(e){if("function"==typeof n){var t=e.target.parentNode,a=Array.prototype.indexOf.call(t.children,e.target);n(e,o||{},a)}}},h("span",{},t))},Menubar=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return h(Element$1,Object.assign({},e,{class:["osjs-gui-menubar",e.class]}),[].concat(toConsumableArray((e.items||[]).map(function(t){return h(MenubarItem,{data:t.data,onclick:t.onclick||e.onclick},t.label)})),toConsumableArray(t)))};function nestable(e,t,n,o){return t._$r=function(){return{}},function(a,s){return h(o||"x-",{key:a.key,id:a.id,class:a.class,oncreate:function(o){var i=app(e,t,function(e,t){var a=n(e,t);return"function"==typeof a&&(a=a(o._$p,o._$c)),a},o);o._$p=a,o._$c=s,o._$r=i._$r,o._$u=i.uninit,i.init&&i.init(a),a.oncreate&&a.oncreate(o)},onupdate:function(e){e._$p=a,e._$c=s,e._$r(),a.onupdate&&a.onupdate(e)},ondestroy:function(e){e._$u&&e._$u()},onremove:function(e,t){return a.onremove?void a.onremove(e,t):t()}})}}var _onmousedown=function(e,t,n){var o=e.target,a=e.clientX,s=e.clientY,i=o.previousSibling,l=i.offsetWidth,r=i.offsetHeight,c=Array.from(o.parentNode.children).indexOf(i),d=.8*i.parentNode.offsetWidth,p=.8*i.parentNode.offsetHeight;if(!(0>c)){var u=function(e){var o=Math.min;e.preventDefault();var i="vertical"===n?l:r;if("vertical"===n){var u=e.clientX-a;i=o(d,i+u)}else{var g=e.clientY-s;i=o(p,i+g)}t.setSize({index:c,size:i})},g=function e(t){t.preventDefault(),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",e)};e.preventDefault(),document.addEventListener("mousemove",u),document.addEventListener("mouseup",g)}},panes=function(e,t,n,o){var a=Array(Math.ceil(n.length/2)).fill(null).map(function(){return h("div",{class:"osjs-gui-panes-spacer",onmousedown:function(e){return _onmousedown(e,t,o)}})});return n.map(function(t,n){var o=e.sizes[n]?e.sizes[n]+""+"px":void 0;return h("div",{class:"osjs-gui-panes-pane",style:{flex:o?"0 0 ".concat(o):o}},t)}).map(function(e,t){return[e,a[t]]}).reduce(function(e,t){return e.concat(t)}).filter(function(e){return"undefined"!=typeof e})},view=function(e,t){return function(n,o){var a=n.orientation||"vertical";return h(Element$1,{orientation:a,class:"osjs-gui-panes-inner"},panes(e,t,o,a))}},inner=nestable({sizes:[]},{init:function(e){return{sizes:e.sizes||[150]}},setSize:function(e){var t=e.index,n=e.size;return function(e){var o=[].concat(e.sizes);return o[t]=n,{sizes:o}}}},view,"div"),Panes=function(e,t){return h(inner,{class:"osjs-gui-panes"},t)},tapper=doubleTap(),createView=function(e){var t=function(t){return function(n,o){var a=n.columns[t]||{},s=e.selectedIndex===o,i=a.icon?h(Icon,a.icon):null,l=[h("span",{},["object"===_typeof_1(a)?a.label:a])];return i&&l.unshift(i),h("div",{"data-has-icon":!!a.icon||void 0,class:"osjs-gui-list-view-cell"+(s?" osjs__active":""),ontouchstart:function(t){return tapper(t,function(){return e.onactivate({data:n.data,index:o,ev:t})})},ondblclick:function(t){return e.onactivate({data:n.data,index:o,ev:t})},onclick:function(t){return e.onselect({data:n.data,index:o,ev:t})},oncontextmenu:function(t){return e.oncontextmenu({data:n.data,index:o,ev:t})},oncreate:function(t){return e.oncreate({data:n.data,index:o,el:t})}},l)}},n=function(n,o){return h("div",{class:"osjs-gui-list-view-pane",style:o.style||{}},[h("div",{class:"osjs-gui-list-view-header",style:{display:e.hideColumns?"none":void 0}},h("span",{},"object"===_typeof_1(o)?o.label:o)),h("div",{class:"rows","data-zebra":e.zebra+""},e.rows.map(t(n)))])};return h("div",{class:"osjs-gui-list-view-wrapper",oncreate:function(t){return t.scrollTop=e.scrollTop},onupdate:function(t){0>e.selectedIndex&&(t.scrollTop=e.scrollTop)}},e.columns.map(function(e,t){return n(t,e)}))},ListView=function(e){return h(Element$1,Object.assign({class:"osjs-gui-list-view"},e.box||{}),createView(filteredProps(e,["box"])))},listView={component:function(e,t){var n=Object.assign({zebra:!0,columns:[],rows:[],onselect:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.setSelectedIndex(o)},onactivate:function(e){var n=e.data,o=e.index,a=e.ev;t.activate({data:n,index:o,ev:a}),t.setSelectedIndex(-1)},oncontextmenu:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.contextmenu({data:n,index:o,ev:a}),t.setSelectedIndex(o)},oncreate:function(e){t.created(e)}},e);return function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return ListView(Object.assign(n,e))}},state:function(e){return Object.assign({selectedIndex:-1,scrollTop:0},e)},actions:function(e){return Object.assign({select:function(){return function(){return{}}},activate:function(){return function(){return{}}},contextmenu:function(){return function(){return{}}},created:function(){return function(){return{}}},setRows:function(e){return{rows:e}},setColumns:function(e){return{columns:e}},setScrollTop:function(e){return function(){return{scrollTop:e}}},setSelectedIndex:function(e){return function(){return{selectedIndex:e}}}},e||{})}},tapper$1=doubleTap(),IconViewEntry=function(e,t,n){return function(){var o=e.icon||{name:"application-x-executable"},a=n.selectedIndex===t;return h("div",{class:"osjs-gui-icon-view-entry"+(a?" osjs__active":""),ontouchstart:function(o){return tapper$1(o,function(){return n.onactivate({data:e.data,index:t,ev:o})})},ondblclick:function(o){return n.onactivate({data:e.data,index:t,ev:o})},onclick:function(o){return n.onselect({data:e.data,index:t,ev:o})},oncontextmenu:function(o){return n.oncontextmenu({data:e.data,index:t,ev:o})},oncreate:function(o){return n.oncreate({data:e.data,index:t,el:o})}},[h("div",{class:"osjs__container"},[h("div",{class:"osjs__image"},[h(Icon,o)]),h("div",{class:"osjs__label"},[h("span",{},e.label)])])])}},IconView=function(e){var t=h("div",{class:"osjs-gui-icon-view-wrapper",oncreate:function(t){return t.scrollTop=e.scrollTop},onupdate:function(t){0>e.selectedIndex&&(t.scrollTop=e.scrollTop)}},e.entries.map(function(t,n){return h(IconViewEntry(t,n,e))}));return h(Element$1,Object.assign({class:"osjs-gui-icon-view"},e.box||{}),t)},iconView={component:function(e,t){var n=Object.assign({entries:[],onselect:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.setSelectedIndex(o)},onactivate:function(e){var n=e.data,o=e.index,a=e.ev;t.activate({data:n,index:o,ev:a}),t.setSelectedIndex(-1)},oncontextmenu:function(e){var n=e.data,o=e.index,a=e.ev;t.select({data:n,index:o,ev:a}),t.contextmenu({data:n,index:o,ev:a}),t.setSelectedIndex(o)},oncreate:function(e){t.created(e)}},e);return function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return IconView(Object.assign(n,e))}},state:function(e){return Object.assign({selectedIndex:-1,scrollTop:0},e)},actions:function(e){return Object.assign({select:function(){return function(){return{}}},activate:function(){return function(){return{}}},contextmenu:function(){return function(){return{}}},created:function(){return function(){return{}}},setEntries:function(e){return function(){return{entries:e}}},setScrollTop:function(e){return function(){return{scrollTop:e}}},setSelectedIndex:function(e){return function(){return{selectedIndex:e}}}},e||{})}},Image=function(e){return h("div",{class:"osjs-gui osjs-gui-image",style:{width:e.width?e.width+""+"px":void 0,height:e.height?e.height+""+"px":void 0}},h("img",e))},sources=function(e){return e.map(function(e){return h("source",e)})},isTrue=function(e){return"undefined"==typeof e||!0===e},Video=function(e){return h("div",{class:"osjs-gui osjs-gui-video",style:{width:e.width?e.width+""+"px":void 0,height:e.height?e.height+""+"px":void 0}},[h("video",{src:e.src,width:e.width,height:e.height,poster:e.poster,loop:e.loop?"loop":void 0,muted:e.muted?"muted":void 0,controls:isTrue(e.controls)?"controls":void 0,autoplay:isTrue(e.autoplay)?"autoplay":void 0,onloadeddata:e.onload,oncreate:e.oncreate,onupdate:e.onupdate,ondestroy:e.ondestroy},sources(e.sources||[]))])},headers=function(e,t,n){var o=e.labels,a=e.onchange,s=e.oncontextmenu;return(o||[]).map(function(e,o){return h("div",{class:t.selectedIndex===o?"osjs__active":"",oncontextmenu:function(t){(s||function(){})(t,o,e)},onclick:function(t){n.setSelectedIndex(o),(a||function(){})(t,o,e)}},h("span",{},e))})},panes$1=function(e,t){return t.map(function(t,n){return h("div",{class:e.selectedIndex===n?"osjs__active":""},t)})},view$1=nestable({selectedIndex:0},{init:function(e){return{selectedIndex:e.selectedIndex||0}},setSelectedIndex:function(e){return function(){return{selectedIndex:e}}}},function(e,t){return function(n,o){return h("div",{class:"osjs-gui-tabs-wrapper"},[h("div",{class:"osjs-gui-tabs-header"},headers(n,e,t)),h("div",{class:"osjs-gui-tabs-panes"},panes$1(e,o))])}},"div"),Tabs=function(e,t){return h(view$1,Object.assign({class:"osjs-gui osjs-gui-tabs "+(e.class||"")},e),t)},Iframe=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return h(Element$1,Object.assign({},e.box||{},{class:["osjs-gui-iframe",e.class]}),[h("iframe",Object.assign({frameborder:0},filteredProps(e,["box"])))].concat(toConsumableArray(t)))},TextField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return createField("text-field",e,{autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",type:"text"},function(e){return h("input",e)})},TextareaField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return createField("textarea-field",e,{rows:4},function(e){return h("textarea",e,t)})},SelectField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=function(t){return t instanceof Array?t.map(function(e){return"object"===_typeof_1(e)?e:{value:e,label:e}}):Object.keys(e.choices||{}).map(function(t){return{value:t,label:e.choices[t]}})}(e.choices).map(function(t){var n=t.value,o=t.label;return h("option",{value:n,selected:e.value===n},o)});return createField("select-field",e,{selectedIndex:void 0},function(e){return h("div",{},h("select",e,[].concat(toConsumableArray(n),toConsumableArray(t))))},function(e){return[e.target.value,e.target.textContent]})},parseValue=function(t){try{return JSON.parse(t)}catch(n){return t}},ToggleField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return createField("toggle-field",e,{type:"checkbox",checked:!1},function(n){return h("label",{},[h("input",n),h("span",{class:"osjs-toggle-input"}),h("span",{class:"osjs-toggle-label"},[e.label||""].concat(toConsumableArray(t)))])},function(t){return["radio"===e.type?parseValue(t.target.value):!!t.target.checked]})},RangeField=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return createField("range-field",e,{type:"range"},function(e){return h("input",e)})},view$2=function(e,t){return function(n,o){return h(Element$1,Object.assign({},n.box||{},{class:["osjs-gui-expander-wrapper"]}),[h("div",{class:"osjs-gui-expander-header",onclick:function(o){return t.ontoggle({ev:o,active:!e.active,ontoggle:n.ontoggle})}},[h("div",{class:"osjs-gui-expander-header-icon","data-active":e.active+""}),h("div",{class:"osjs-gui-expander-header-label"},n.label)]),h("div",{class:"osjs-gui-expander-content",style:{display:!1===e.active?"none":void 0}},o)])}},inner$1=nestable({active:!0},{init:function(e){return{ative:!1!==e.active}},ontoggle:function(e){var t=e.ev,n=e.active,o=e.ontoggle;return(o||function(){})(t,n),{active:n}}},view$2,"div"),Expander=function(e,t){return h(inner$1,Object.assign({},e,{class:"osjs-gui osjs-gui-expander"}),t)},Label=function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=e.placement||"top",o=e.text||"",a=Object.assign({class:["osjs-gui-field-label","osjs-gui-field-label-on-"+n]},e.box||{});return h(Element$1,a,[h("label",{for:e.for},o),t])},runtime=createCommonjsModule(function(e){!function(t){function n(e,t,n,o){var s=t&&t.prototype instanceof a?t:a,i=Object.create(s.prototype),l=new g(o||[]);return i._invoke=c(e,n,l),i}function o(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function a(){}function s(){}function i(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function r(e){function t(n,a,s,i){var l=o(e[n],e,a);if("throw"===l.type)i(l.arg);else{var r=l.arg,c=r.value;return c&&"object"==typeof c&&y.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,s,i)},function(e){t("throw",e,s,i)}):Promise.resolve(c).then(function(e){r.value=e,s(r)},function(e){return t("throw",e,s,i)})}}function n(e,n){function o(){return new Promise(function(o,a){t(e,n,o,a)})}return a=a?a.then(o,o):o()}var a;this._invoke=n}function c(e,t,n){var a="suspendedStart";return function(s,i){if(a==="executing")throw new Error("Generator is already running");if("completed"===a){if("throw"===s)throw i;return m()}for(n.method=s,n.arg=i;;){var l=n.delegate;if(l){var r=d(l,n);if(r){if(r===w)continue;return r}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=o(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===w)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function d(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,d(e,t),"throw"===t.method))return w;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var a=o(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,w;var s=a.arg;if(!s)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,w;if(s.done)t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0);else return s;return t.delegate=null,w}function p(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function u(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function g(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(p,this),this.reset(!0)}function h(e){if(e){var t=e[f];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(y.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:m}}function m(){return{value:void 0,done:!0}}var v=Object.prototype,y=v.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},f=x.iterator||"@@iterator",b=x.asyncIterator||"@@asyncIterator",k=x.toStringTag||"@@toStringTag",j=t.regeneratorRuntime;if(j)return void(e.exports=j);j=t.regeneratorRuntime=e.exports,j.wrap=n;var w={},_={};_[f]=function(){return this};var L=Object.getPrototypeOf,I=L&&L(L(h([])));I&&I!==v&&y.call(I,f)&&(_=I);var S=i.prototype=a.prototype=Object.create(_);s.prototype=S.constructor=i,i.constructor=s,i[k]=s.displayName="GeneratorFunction",j.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},j.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,!(k in e)&&(e[k]="GeneratorFunction")),e.prototype=Object.create(S),e},j.awrap=function(e){return{__await:e}},l(r.prototype),r.prototype[b]=function(){return this},j.AsyncIterator=r,j.async=function(e,t,o,a){var s=new r(n(e,t,o,a));return j.isGeneratorFunction(t)?s:s.next().then(function(e){return e.done?e.value:s.next()})},l(S),S[k]="Generator",S[f]=function(){return this},S.toString=function(){return"[object Generator]"},j.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},j.values=h,g.prototype={constructor:g,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(u),!e)for(var t in this)"t"===t.charAt(0)&&y.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,o){return s.type="throw",s.arg=e,n.next=t,o&&(n.method="next",n.arg=void 0),!!o}if(this.done)throw e;for(var n=this,o=this.tryEntries.length-1;0<=o;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var l=y.call(a,"catchLoc"),r=y.call(a,"finallyLoc");if(l&&r){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);}else if(!r)throw new Error("try statement without catch or finally");else if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}},abrupt:function(e,t){for(var n,o=this.tryEntries.length-1;0<=o;--o)if(n=this.tryEntries[o],n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if(t=this.tryEntries[n],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),u(t),w},catch:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if(t=this.tryEntries[n],t.tryLoc===e){var o=t.completion;if("throw"===o.type){var a=o.arg;u(t)}return a}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:h(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),w}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}),g=function(){return this||"object"==typeof self&&self}()||Function("return this")(),hadRuntime=g.regeneratorRuntime&&0<=Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime"),oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=void 0;var runtimeModule=runtime;if(hadRuntime)g.regeneratorRuntime=oldRuntime;else try{delete g.regeneratorRuntime}catch(t){g.regeneratorRuntime=void 0}var regenerator=runtimeModule;function asyncGeneratorStep(e,t,n,o,a,s,i){try{var l=e[s](i),r=l.value}catch(e){return void n(e)}l.done?t(r):Promise.resolve(r).then(o,a)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){function s(e){asyncGeneratorStep(l,o,a,s,i,"next",e)}function i(e){asyncGeneratorStep(l,o,a,s,i,"throw",e)}var l=e.apply(t,n);s(void 0)})}}var asyncToGenerator=_asyncToGenerator;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var classCallCheck=_classCallCheck;function _defineProperties(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var createClass=_createClass,clampSubMenu=function(e,t){var n=t.target.querySelector("ul");if(n&&(n.classList.contains("osjs-gui-menu-container")&&(n=n.parentNode.parentNode),n&&n.offsetParent)){n.classList.remove("clamp-right");var o=n.getBoundingClientRect();o.right>e.offsetWidth&&n.classList.add("clamp-right")}},clampMenu=function(e,t,n){var o={},a=n.top+t.offsetHeight,s=n.left+t.offsetWidth,i=e.offsetHeight-n.top,l=e.offsetWidth-n.left,r=s>e.offsetWidth,c=a>e.offsetHeight;return c&&(o.top=e.offsetHeight-t.offsetHeight-i),r&&(o.left=e.offsetWidth-t.offsetWidth-l),c||r?o:null},view$3=function(e){return function(t,n){return h(Menu,{position:t.position,visible:t.visible,menu:t.menu,onclick:e,onshow:n.onshow})}},timeout=function(e){return e(),setTimeout(e,100)},ContextMenu=function(){function e(t){classCallCheck(this,e),this.core=t,this.callback=function(){},this.actions=null}return createClass(e,[{key:"destroy",value:function(){this.callback=null,this.actions=null}},{key:"init",value:function(){var e,t=this;this.actions=app({visible:!1,menu:[],position:{top:0,left:0}},{clamp:function(n){return function(o){if(n=n||document.querySelector("#osjs-context-menu"),clearTimeout(e),n){var a=t.core.$root,s=clampMenu(a,n,o.position);if(s)return{position:s}}return{}}},onshow:function(n){return function(){e=timeout(function(){return clampSubMenu(t.core.$root,n)})}},show:function(e){return function(n,o){var a=e.menu,s=e.position;if(s instanceof Event)s={left:s.clientX,top:s.clientY};else if(s instanceof Element){var i=s.getBoundingClientRect();s={left:i.left,top:i.top+i.height}}return t.callback=function(n,o,a){e.callback&&e.callback(n,o),!1!==a.closeable&&t.actions.hide()},timeout(function(){return o.clamp()}),{visible:!0,menu:a||[],position:s||{top:0,left:0}}}},hide:function(){return function(){return t.callback=null,{visible:!1}}}},view$3(function(){!t.core.destroyed&&t.callback&&t.callback.apply(t,arguments)}),this.core.$root)}},{key:"show",value:function(){var e;return this.actions?(e=this.actions).show.apply(e,arguments):null}},{key:"hide",value:function(){var e;return this.actions?(e=this.actions).hide.apply(e,arguments):null}}]),e}(),validContextMenuTarget=function(e){var t=e.target,n="TEXTAREA"===t.tagName;return n||"INPUT"!==t.tagName||(n=-1!==["text","password","number","email"].indexOf(t.type)),n},GUIServiceProvider=function(){function e(t){classCallCheck(this,e),this.core=t,this.contextmenu=new ContextMenu(t)}return createClass(e,[{key:"destroy",value:function(){var e=document.getElementById("osjs-context-menu");e&&e.remove(),this.contextmenu.destroy()}},{key:"init",value:function(){var e=asyncToGenerator(regenerator.mark(function e(){var t,n=this;return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={show:function(){var e;return(e=n.contextmenu).show.apply(e,arguments)},hide:function(){var e;return(e=n.contextmenu).hide.apply(e,arguments)}},this.core.instance("osjs/contextmenu",function(){return arguments.length?t.show.apply(t,arguments):t}),this.core.$root.addEventListener("contextmenu",function(e){validContextMenuTarget(e)||(e.stopPropagation(),e.preventDefault())});case 3:case"end":return e.stop();}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"start",value:function(){var e=this;this.core.$root.addEventListener("click",function(t){var n=document.getElementById("osjs-context-menu"),o=n.contains(t.target);!o&&e.contextmenu&&e.contextmenu.hide()},!0),this.contextmenu.init()}}]),e}();
//# sourceMappingURL=esm.js.map


/***/ }),

/***/ "../../../node_modules/hyperapp/src/index.js":
/*!***********************************************************************!*\
  !*** /home/chris/beaco/proc/OS.js/node_modules/hyperapp/src/index.js ***!
  \***********************************************************************/
/*! exports provided: h, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
function h(name, attributes) {
  var rest = []
  var children = []
  var length = arguments.length

  while (length-- > 2) rest.push(arguments[length])

  while (rest.length) {
    var node = rest.pop()
    if (node && node.pop) {
      for (length = node.length; length--; ) {
        rest.push(node[length])
      }
    } else if (node != null && node !== true && node !== false) {
      children.push(node)
    }
  }

  return typeof name === "function"
    ? name(attributes || {}, children)
    : {
        nodeName: name,
        attributes: attributes || {},
        children: children,
        key: attributes && attributes.key
      }
}

function app(state, actions, view, container) {
  var map = [].map
  var rootElement = (container && container.children[0]) || null
  var oldNode = rootElement && recycleElement(rootElement)
  var lifecycle = []
  var skipRender
  var isRecycling = true
  var globalState = clone(state)
  var wiredActions = wireStateToActions([], globalState, clone(actions))

  scheduleRender()

  return wiredActions

  function recycleElement(element) {
    return {
      nodeName: element.nodeName.toLowerCase(),
      attributes: {},
      children: map.call(element.childNodes, function(element) {
        return element.nodeType === 3 // Node.TEXT_NODE
          ? element.nodeValue
          : recycleElement(element)
      })
    }
  }

  function resolveNode(node) {
    return typeof node === "function"
      ? resolveNode(node(globalState, wiredActions))
      : node != null
        ? node
        : ""
  }

  function render() {
    skipRender = !skipRender

    var node = resolveNode(view)

    if (container && !skipRender) {
      rootElement = patch(container, rootElement, oldNode, (oldNode = node))
    }

    isRecycling = false

    while (lifecycle.length) lifecycle.pop()()
  }

  function scheduleRender() {
    if (!skipRender) {
      skipRender = true
      setTimeout(render)
    }
  }

  function clone(target, source) {
    var out = {}

    for (var i in target) out[i] = target[i]
    for (var i in source) out[i] = source[i]

    return out
  }

  function setPartialState(path, value, source) {
    var target = {}
    if (path.length) {
      target[path[0]] =
        path.length > 1
          ? setPartialState(path.slice(1), value, source[path[0]])
          : value
      return clone(source, target)
    }
    return value
  }

  function getPartialState(path, source) {
    var i = 0
    while (i < path.length) {
      source = source[path[i++]]
    }
    return source
  }

  function wireStateToActions(path, state, actions) {
    for (var key in actions) {
      typeof actions[key] === "function"
        ? (function(key, action) {
            actions[key] = function(data) {
              var result = action(data)

              if (typeof result === "function") {
                result = result(getPartialState(path, globalState), actions)
              }

              if (
                result &&
                result !== (state = getPartialState(path, globalState)) &&
                !result.then // !isPromise
              ) {
                scheduleRender(
                  (globalState = setPartialState(
                    path,
                    clone(state, result),
                    globalState
                  ))
                )
              }

              return result
            }
          })(key, actions[key])
        : wireStateToActions(
            path.concat(key),
            (state[key] = clone(state[key])),
            (actions[key] = clone(actions[key]))
          )
    }

    return actions
  }

  function getKey(node) {
    return node ? node.key : null
  }

  function eventListener(event) {
    return event.currentTarget.events[event.type](event)
  }

  function updateAttribute(element, name, value, oldValue, isSvg) {
    if (name === "key") {
    } else if (name === "style") {
      if (typeof value === "string") {
        element.style.cssText = value
      } else {
        if (typeof oldValue === "string") oldValue = element.style.cssText = ""
        for (var i in clone(oldValue, value)) {
          var style = value == null || value[i] == null ? "" : value[i]
          if (i[0] === "-") {
            element.style.setProperty(i, style)
          } else {
            element.style[i] = style
          }
        }
      }
    } else {
      if (name[0] === "o" && name[1] === "n") {
        name = name.slice(2)

        if (element.events) {
          if (!oldValue) oldValue = element.events[name]
        } else {
          element.events = {}
        }

        element.events[name] = value

        if (value) {
          if (!oldValue) {
            element.addEventListener(name, eventListener)
          }
        } else {
          element.removeEventListener(name, eventListener)
        }
      } else if (
        name in element &&
        name !== "list" &&
        name !== "type" &&
        name !== "draggable" &&
        name !== "spellcheck" &&
        name !== "translate" &&
        !isSvg
      ) {
        element[name] = value == null ? "" : value
      } else if (value != null && value !== false) {
        element.setAttribute(name, value)
      }

      if (value == null || value === false) {
        element.removeAttribute(name)
      }
    }
  }

  function createElement(node, isSvg) {
    var element =
      typeof node === "string" || typeof node === "number"
        ? document.createTextNode(node)
        : (isSvg = isSvg || node.nodeName === "svg")
          ? document.createElementNS(
              "http://www.w3.org/2000/svg",
              node.nodeName
            )
          : document.createElement(node.nodeName)

    var attributes = node.attributes
    if (attributes) {
      if (attributes.oncreate) {
        lifecycle.push(function() {
          attributes.oncreate(element)
        })
      }

      for (var i = 0; i < node.children.length; i++) {
        element.appendChild(
          createElement(
            (node.children[i] = resolveNode(node.children[i])),
            isSvg
          )
        )
      }

      for (var name in attributes) {
        updateAttribute(element, name, attributes[name], null, isSvg)
      }
    }

    return element
  }

  function updateElement(element, oldAttributes, attributes, isSvg) {
    for (var name in clone(oldAttributes, attributes)) {
      if (
        attributes[name] !==
        (name === "value" || name === "checked"
          ? element[name]
          : oldAttributes[name])
      ) {
        updateAttribute(
          element,
          name,
          attributes[name],
          oldAttributes[name],
          isSvg
        )
      }
    }

    var cb = isRecycling ? attributes.oncreate : attributes.onupdate
    if (cb) {
      lifecycle.push(function() {
        cb(element, oldAttributes)
      })
    }
  }

  function removeChildren(element, node) {
    var attributes = node.attributes
    if (attributes) {
      for (var i = 0; i < node.children.length; i++) {
        removeChildren(element.childNodes[i], node.children[i])
      }

      if (attributes.ondestroy) {
        attributes.ondestroy(element)
      }
    }
    return element
  }

  function removeElement(parent, element, node) {
    function done() {
      parent.removeChild(removeChildren(element, node))
    }

    var cb = node.attributes && node.attributes.onremove
    if (cb) {
      cb(element, done)
    } else {
      done()
    }
  }

  function patch(parent, element, oldNode, node, isSvg) {
    if (node === oldNode) {
    } else if (oldNode == null || oldNode.nodeName !== node.nodeName) {
      var newElement = createElement(node, isSvg)
      parent.insertBefore(newElement, element)

      if (oldNode != null) {
        removeElement(parent, element, oldNode)
      }

      element = newElement
    } else if (oldNode.nodeName == null) {
      element.nodeValue = node
    } else {
      updateElement(
        element,
        oldNode.attributes,
        node.attributes,
        (isSvg = isSvg || node.nodeName === "svg")
      )

      var oldKeyed = {}
      var newKeyed = {}
      var oldElements = []
      var oldChildren = oldNode.children
      var children = node.children

      for (var i = 0; i < oldChildren.length; i++) {
        oldElements[i] = element.childNodes[i]

        var oldKey = getKey(oldChildren[i])
        if (oldKey != null) {
          oldKeyed[oldKey] = [oldElements[i], oldChildren[i]]
        }
      }

      var i = 0
      var k = 0

      while (k < children.length) {
        var oldKey = getKey(oldChildren[i])
        var newKey = getKey((children[k] = resolveNode(children[k])))

        if (newKeyed[oldKey]) {
          i++
          continue
        }

        if (newKey != null && newKey === getKey(oldChildren[i + 1])) {
          if (oldKey == null) {
            removeElement(element, oldElements[i], oldChildren[i])
          }
          i++
          continue
        }

        if (newKey == null || isRecycling) {
          if (oldKey == null) {
            patch(element, oldElements[i], oldChildren[i], children[k], isSvg)
            k++
          }
          i++
        } else {
          var keyedNode = oldKeyed[newKey] || []

          if (oldKey === newKey) {
            patch(element, keyedNode[0], keyedNode[1], children[k], isSvg)
            i++
          } else if (keyedNode[0]) {
            patch(
              element,
              element.insertBefore(keyedNode[0], oldElements[i]),
              keyedNode[1],
              children[k],
              isSvg
            )
          } else {
            patch(element, oldElements[i], null, children[k], isSvg)
          }

          newKeyed[newKey] = children[k]
          k++
        }
      }

      while (i < oldChildren.length) {
        if (getKey(oldChildren[i]) == null) {
          removeElement(element, oldElements[i], oldChildren[i])
        }
        i++
      }

      for (var i in oldKeyed) {
        if (!newKeyed[i]) {
          removeElement(element, oldKeyed[i][0], oldKeyed[i][1])
        }
      }
    }
    return element
  }
}


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! osjs */ "osjs");
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(osjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metadata_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata.json */ "./metadata.json");
var _metadata_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./metadata.json */ "./metadata.json", 1);
/* harmony import */ var hyperapp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hyperapp */ "../../../node_modules/hyperapp/src/index.js");
/* harmony import */ var _osjs_gui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osjs/gui */ "../../../node_modules/@osjs/gui/dist/esm.js");







var createView = function createView(state, actions) {
  return Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["Box"], {}, [Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["BoxContainer"], {}, String(state.username)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    onchange: function onchange(ev, value) {
      return actions.submitName(value);
    }
  }, String(state.user_name)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["BoxContainer"], {}, String(state.password)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    onchange: function onchange(ev, value) {
      return actions.submitPass(value);
    }
  }, String(state.user_pass)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["BoxContainer"], {}, String(state.group)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    onchange: function onchange(ev, value) {
      return actions.submitGroup(value);
    }
  }, String(state.user_group)), Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onclick: function onclick() {
      return actions.submitAll();
    },
    label: 'Apply'
  }), Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["h"])(_osjs_gui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onclick: function onclick() {
      return actions.show();
    },
    label: 'Show'
  })]);
};

var settings;
var submit = false;

var applySubmit =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(proc, settings) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (settings[0] == undefined || settings[0] == []) {
              console.log("Please type in your username");
            }

            if (settings[1] == undefined || settings[0] == []) {
              console.log("Please type in your password");
            }

            if (!(settings[2] == undefined || settings[0] == [])) {
              _context.next = 6;
              break;
            }

            console.log("Please type in your group");
            _context.next = 9;
            break;

          case 6:
            submit = true;
            _context.next = 9;
            return proc.send(submit, settings);

          case 9:
            console.log(submit);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function applySubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createApp = function createApp(proc, win, $content) {
  Object(hyperapp__WEBPACK_IMPORTED_MODULE_4__["app"])({
    username: "Input your username",
    password: "Input your password",
    group: "Input your group"
  }, {
    submitName: function submitName(input) {
      return function () {
        return {
          user_name: input
        };
      };
    },
    submitPass: function submitPass(input) {
      return function () {
        return {
          user_pass: input
        };
      };
    },
    submitGroup: function submitGroup(input) {
      return function () {
        return {
          user_group: input
        };
      };
    },
    submitAll: function submitAll() {
      return function (state) {
        settings = [state.user_name, state.user_pass, state.user_group], applySubmit(proc, settings);
      };
    },
    show: function show() {
      return function () {
        return console.log(settings);
      };
    }
  }, createView, $content);
}; // Our launcher


var register = function register(core, args, options, metadata) {
  // Create a new Application instance
  var proc = core.make('osjs/application', {
    args: args,
    options: options,
    metadata: metadata
  }); // Create  a new Window instance

  proc.createWindow({
    id: 'ControlPanelWindow',
    title: metadata.title.en_EN,
    dimension: {
      width: 400,
      height: 400
    },
    position: {
      left: 700,
      top: 200
    }
  }).on('destroy', function () {
    return proc.destroy();
  }).render(function ($content, win) {
    return createApp(proc, win, $content);
  }); // Creates a new WebSocket connection (see server.js)
  // const sock = proc.socket('/socket');
  // sock.on('message', ev => console.log('got data',ev.data));
  // sock.send(submit);
  // sock.on('open', () => sock.send('Ping'));
  // Use the internally core bound websocket
  // proc.on('ws:message', args => console.log(args));
  // if(submit){
  //   proc.send('submit');
  // }else{
  //   proc.send('not submit');
  // }
  // Creates a HTTP call (see server.js)
  //proc.request('/test', {method: 'post'})
  //.then(response => console.log(response));

  return proc;
}; // Creates the internal callback function when OS.js launches an application


osjs__WEBPACK_IMPORTED_MODULE_2___default.a.register(_metadata_json__WEBPACK_IMPORTED_MODULE_3__["name"], register);

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./metadata.json":
/*!***********************!*\
  !*** ./metadata.json ***!
  \***********************/
/*! exports provided: type, name, category, server, title, description, files, default */
/***/ (function(module) {

module.exports = {"type":"application","name":"ControlPanel","category":"utilities","server":"server.js","title":{"en_EN":"ControlPanel"},"description":{"en_EN":"ControlPanel"},"files":["main.js","main.css"]};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./index.js ./index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/chris/beaco/proc/OS.js/src/packages/ControlPanel/index.js */"./index.js");
module.exports = __webpack_require__(/*! /home/chris/beaco/proc/OS.js/src/packages/ControlPanel/index.scss */"./index.scss");


/***/ }),

/***/ "osjs":
/*!***********************!*\
  !*** external "OSjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = OSjs;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map