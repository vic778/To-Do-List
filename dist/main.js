(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  margin-left: 150px;\n  margin-top: 100px;\n}\n\n.text-title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n}\n\n.description {\n  padding-left: 10px;\n}\n\n.checked {\n  text-decoration: line-through;\n  color: rgb(15, 146, 179);\n}\n\n.list-group-item {\n  list-style-type: none;\n  border: 3px solid rgb(233, 224, 224);\n  margin-left: -40px;\n}\n\n.list-todo {\n  display: flex;\n  margin: 15px 15px;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.card {\n  border: 3px solid rgb(233, 224, 224);\n  width: 50%;\n  background-color: antiquewhite;\n  padding: 1px 20px;\n}\n\n.group-items {\n  display: flex;\n}\n\n.fas fa {\n  font-weight: 900;\n  align-self: flex-end;\n}\n\n.form-control {\n  border: 10px solid white;\n  padding: 1px 245px;\n  text-align: start;\n}\n\n.btn-clear1 {\n  border: 5px solid rgb(57, 57, 59);\n  font-weight: bold;\n  padding: 8px 280px;\n  background-color: blue;\n  color: aliceblue;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),d=n.n(l),p=n(589),u=n.n(p),f=n(28),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector("#todoList"),v=document.querySelector("#inputFaild"),h=document.querySelector("#clearAllToDo"),y=[];function x(){const e=localStorage.getItem("stock");e&&JSON.parse(e).forEach((e=>{const t=document.createElement("li");t.classList.add("list-group-item");const n=`<div class="list-todo" >\n      <div class="group-items" id="${e.index}">\n    <input class="form-check-input" type="checkbox" value="" ${e.completed?"checked":""} id="defaultCheck1"/>\n          <div class="description ${e.completed?"checked":""}" contenteditable="${!e.completed}">${e.description}</div>\n          </div>\n          <i class="fas fa-trash delete"></i>\n       </div>`;t.innerHTML=n,g.appendChild(t)})),v.addEventListener("keypress",(e=>{"Enter"===e.key&&v.value&&(((e,t)=>{e.push({description:t,completed:0,index:e.length+1}),localStorage.setItem("stock",JSON.stringify(e))})(y,v.value),g.innerHTML="",x(),v.value="")})),document.querySelectorAll("#defaultCheck1").forEach((e=>{e.addEventListener("change",(e=>{(e=>{const t=localStorage.getItem("stock"),n=JSON.parse(t),r=n.find((t=>t.index===Number(e.target.parentNode.id))),o=n.indexOf(r);n[o].completed?(n[o].completed=0,e.target.parentNode.children[1].classList.remove("checked"),localStorage.setItem("stock",JSON.stringify(n))):(n[o].completed=1,e.target.parentNode.children[1].classList.add("checked"),localStorage.setItem("stock",JSON.stringify(n)))})(e)}))})),document.querySelectorAll(".description").forEach((e=>{e.addEventListener("keypress",(e=>{"Enter"===e.key&&((e=>{const t=localStorage.getItem("stock"),n=JSON.parse(t),r=n.find((t=>t.index===Number(e.target.parentNode.id))),o=n.indexOf(r);n[o].description=e.target.textContent,localStorage.setItem("stock",JSON.stringify(n))})(e),g.innerHTML="",x())}))})),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",(e=>{(e=>{const t=localStorage.getItem("stock"),n=JSON.parse(t),r=n.find((t=>t.index===Number(e.target.parentNode.id)));n.splice(n.indexOf(r),1),localStorage.setItem("stock",JSON.stringify(n))})(e),g.innerHTML="",x()}))}))}x(),h.addEventListener("click",(()=>{(()=>{const e=JSON.parse(localStorage.getItem("stock"));e.filter((e=>e.completed)).forEach((t=>{const n=e.indexOf(t);e.splice(n,1)})),localStorage.setItem("stock",JSON.stringify(e))})(),g.innerHTML="",x()}))})()})();