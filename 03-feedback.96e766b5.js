!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(w,t),s?j(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=b();if(O(e))return h(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function h(e){return f=void 0,p&&r?j(e):(r=i=void 0,u)}function T(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(w,t),j(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=g(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(g(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(b())},T}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),S=j.querySelector('input[name="email"]'),O=j.querySelector('textarea[name="message"]');j.addEventListener("input",(function(){var e={email:S.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),!1),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);S.value=t.email,O.value=t.message}})),j.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");var t={email:S.value,message:O.value};console.log("Form data submitted:",t)}))}();
//# sourceMappingURL=03-feedback.96e766b5.js.map