(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t=document.querySelector("#bill"),n=document.querySelectorAll("button.tip-btn"),r=document.querySelector("#num-of-ppl"),a=document.querySelector("#tip-pp"),o=document.querySelector("#total-pp"),i=document.querySelector("#custom-tip"),c=document.querySelector("#reset_calc"),l=document.querySelector("#tip-selectors"),u=document.querySelector("#people-alert"),s=document.querySelector("#bill-alert");c.addEventListener("click",(function(){m()}));for(var d=function(e){n[e].addEventListener("click",(function(){v(t.value,r.value,n[e].value),y(),n[e].classList.add("clicked")}))},f=0;f<n.length;f++)d(f);i.addEventListener("change",(function(){v(t.value,r.value,i.value),y(),i.classList.add("clicked")})),t.addEventListener("change",(function(){var e=t.value;0==e?(s.innerText="Can't be zero",t.classList.add("input-alert")):e.match(/^-/)?(s.innerText="Can't be lower than zero",t.classList.add("input-alert")):(s.innerText="",t.classList.remove("input-alert"))})),r.addEventListener("change",(function(){var e=r.value;0==e?(u.innerText="Can't be zero",r.classList.add("input-alert")):e.match(/^-/)?(u.innerText="Can't be lower than zero",r.classList.add("input-alert")):(u.innerText="",r.classList.remove("input-alert"))}));var v=function(e,t,n){var r=e/t*(n/100),i=e/t+r;a.innerText="$".concat(r.toFixed(2)),o.innerText="$".concat(i.toFixed(2))},m=function(){t.value="",r.value="",a.innerText="$0.00",o.innerText="$0.00"},y=function(){var t,n=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(l.children);try{for(n.s();!(t=n.n()).done;)sib=t.value,sib.classList.remove("clicked")}catch(e){n.e(e)}finally{n.f()}}})();