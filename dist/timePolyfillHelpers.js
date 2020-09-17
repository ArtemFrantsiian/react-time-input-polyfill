!function i(s,l,c){function u(t,e){if(!l[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=l[t]={exports:{}};s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,i,s,l,c)}return l[t].exports}for(var a="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,r){t.exports=function(){var e=document.createElement("div");return e.setAttribute("aria-live","assertive"),e.setAttribute("style","position: absolute; opacity: 0; height: 0; width: 0; overflow: hidden; pointer-events: none;"),e.classList.add("time-input-polyfill-accessibility-block"),document.querySelector("body").appendChild(e),e}},{}],2:[function(e,t,r){var a=e("../getters/get_current_segment"),p=e("../getters/get_values");t.exports=function(c,u){setTimeout(function(){var e=a(c),t=p(c)[e],r="--"==t?"blank":t,n={hrs:"Hours",min:"Minutes",mode:"AM/PM"}[e],o={initial:"$label grouping $fullValue.",select:"$segmentName spin button $segmentValue.",update:"$segmentValue."},i=u.map(function(e){return o[e]?o[e]:e}),s=c.value.replace(/--/g,"blank"),l="<p>"+i.join("</p><p>")+"</p>";l=(l=(l=(l=l.replace(/\$label/g,c.polyfill.label)).replace(/\$segmentName/g,n)).replace(/\$segmentValue/g,r)).replace(/\$fullValue/g,s),c.polyfill.$a11y.innerHTML=l},1)}},{"../getters/get_current_segment":9,"../getters/get_values":12}],3:[function(e,t,r){t.exports=function(e){return e<=12?0===e?12:e:e-12}},{}],4:[function(e,t,r){t.exports=function(e){return isNaN(e)?e:parseInt(e)}},{}],5:[function(e,t,r){var s=e("./convert_number"),l=e("./convert_hours_to_12hr_time"),c=e("./leading_zero");t.exports=function(e){if(""===e)return"--:-- --";var t=/([0-9]{2})\:([0-9]{2})/.exec(e),r=s(t[1]),n=t[2],o=l(r),i=12<=r?"PM":"AM";return[c(o),":",n," ",i].join("")}},{"./convert_hours_to_12hr_time":3,"./convert_number":4,"./leading_zero":7}],6:[function(e,t,r){var s=e("./leading_zero");t.exports=function(e){if(/-/.test(e))return"";var t,r=-1<e.indexOf("PM"),n=/^([0-9]{2})/.exec(e),o=n?parseInt(n[1]):"",i=24===(t=12===o?r?12:0:r?o+12:o)?0:t;return e.replace(/^[0-9]{2}:([0-9]{2}) (AM|PM)/,s(i)+":$1")}},{"./leading_zero":7}],7:[function(e,t,r){t.exports=function(e){if(isNaN(e))return e;var t=parseInt(e);return t<10?"0"+t:e}},{}],8:[function(e,t,r){t.exports=function(e,t){for(var r=e,n=[];r;){if(n.push(r),r.msMatchesSelector?r.msMatchesSelector(t):r.matches(t))return n;r=r.parentElement}return n}},{}],9:[function(e,t,r){var s=e("../static-values/ranges"),l=e("./get_selected_range");t.exports=function(e){var t=l(e);for(var r in s){var n=s[r],o=n.start<=t.start,i=n.end>=t.end;if(o&&i)return r}return"hrs"}},{"../static-values/ranges":19,"./get_selected_range":11}],10:[function(e,t,r){var o=e("./get_ancestors");t.exports=function(e){var t,r,n=function(e){var t=e.getAttribute("aria-labelledby");if(t){var r=document.getElementById(t);if(r)return r.textContent}return!1}(e)||(e.getAttribute("aria-label")||!1)||function(e){if(e.id){var t=document.querySelector('label[for="'+e.id+'"]');if(t)return t.textContent}return!1}(e)||(t=o(e,"label"),"LABEL"==(r=t[t.length-1]).nodeName&&r.textContent)||(e.getAttribute("title")||!1);if(n)return n;throw console.error("Label text for input not found.",e),new Error("Cannot polyfill time input due to a missing label.")}},{"./get_ancestors":8}],11:[function(e,t,r){t.exports=function(e){return{start:e.selectionStart,end:e.selectionEnd}}},{}],12:[function(e,t,r){var o=e("../converters/convert_number");t.exports=function(e,t){var r=t||e.value,n=/([0-9-]{1,2})\:([0-9-]{1,2})\s?(AM|PM|\-\-)?/.exec(r);return{hrs:o(n[1]),min:o(n[2]),mode:n[3]}}},{"../converters/convert_number":4}],13:[function(e,t,r){var n=[];t.exports={items:function(){return n},clear:function(){n=[]},add:function(e){n.push(e)}}},{}],14:[function(e,t,r){var n=e("./traverse");t.exports=function(e){n(e,"next")}},{"./traverse":18}],15:[function(e,t,r){var n=e("./traverse");t.exports=function(e){n(e,"prev")}},{"./traverse":18}],16:[function(e,t,r){var n=e("../getters/get_current_segment"),o=e("./select_segment");t.exports=function(e){var t=n(e);o(e,t)}},{"../getters/get_current_segment":9,"./select_segment":17}],17:[function(e,t,r){t.exports=function(r,e){var t;function n(e,t){return function(){r.setSelectionRange(e,t)}}t="mode"===e?"text":"tel",r.setAttribute("type",t),{hrs:n(0,2),min:n(3,5),mode:n(6,8)}[e](r)}},{}],18:[function(e,t,r){var s=e("../getters/get_current_segment"),l=e("../selectors/select_segment"),c=e("../helpers/manual_entry_log"),u=e("../static-values/segments"),a=e("../accessibility/update_a11y");t.exports=function(e,t){var r=s(e),n="next"===t?1:-1,o=u.indexOf(r)+n,i={next:u[o]||"mode",prev:o<0?"hrs":u[o]}[t];l(e,i),c.clear(),a(e,["select"])}},{"../accessibility/update_a11y":2,"../getters/get_current_segment":9,"../helpers/manual_entry_log":13,"../selectors/select_segment":17,"../static-values/segments":20}],19:[function(e,t,r){t.exports={hrs:{start:0,end:2},min:{start:3,end:5},mode:{start:6,end:8}}},{}],20:[function(e,t,r){var n=e("./ranges"),o=Object.keys(n);t.exports=o},{"./ranges":19}],21:[function(e,t,r){Element.prototype.matches=Element.prototype.matches||Element.prototype.msMatchesSelector;var n=e("time-input-polyfill/core/static-values/segments"),o=e("time-input-polyfill/core/converters/convert_to_12hr_time"),i=e("time-input-polyfill/core/converters/convert_to_24hr_time"),s=e("time-input-polyfill/core/converters/convert_hours_to_12hr_time"),l=e("time-input-polyfill/core/selectors/select_cursor_segment"),c=e("time-input-polyfill/core/selectors/select_segment"),u=e("time-input-polyfill/core/selectors/next_segment"),a=e("time-input-polyfill/core/selectors/prev_segment"),p=e("time-input-polyfill/core/getters/get_label"),m=e("time-input-polyfill/core/getters/get_current_segment"),_=e("time-input-polyfill/core/getters/get_values");function f(){this.items=[]}f.prototype.clear=function(){this.items=[]},f.prototype.add=function(e){this.items.push(parseInt(e))};var g=e("time-input-polyfill/core/accessibility/create_a11y_block"),v=e("time-input-polyfill/core/accessibility/update_a11y");window.timePolyfillHelpers={segments:n,convert_to_12hr_time:o,convert_to_24hr_time:i,convert_hours_to_12hr_time:s,select_cursor_segment:l,select_segment:c,next_segment:u,prev_segment:a,get_label:p,get_current_segment:m,get_values:_,get_values_from_24hr:function(e){var t=o(e);return _(null,t)},create_a11y_block:g,update_a11y:v,manual_entry_log:f}},{"time-input-polyfill/core/accessibility/create_a11y_block":1,"time-input-polyfill/core/accessibility/update_a11y":2,"time-input-polyfill/core/converters/convert_hours_to_12hr_time":3,"time-input-polyfill/core/converters/convert_to_12hr_time":5,"time-input-polyfill/core/converters/convert_to_24hr_time":6,"time-input-polyfill/core/getters/get_current_segment":9,"time-input-polyfill/core/getters/get_label":10,"time-input-polyfill/core/getters/get_values":12,"time-input-polyfill/core/selectors/next_segment":14,"time-input-polyfill/core/selectors/prev_segment":15,"time-input-polyfill/core/selectors/select_cursor_segment":16,"time-input-polyfill/core/selectors/select_segment":17,"time-input-polyfill/core/static-values/segments":20}]},{},[21]);