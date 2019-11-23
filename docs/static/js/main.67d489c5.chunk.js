(this["webpackJsonpreact-time-input-polyfill"]=this["webpackJsonpreact-time-input-polyfill"]||[]).push([[0],{246:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n.n(r),a=n(29),i=n.n(a),u=(n(45),n(6)),o=(n(46),n(37)),s=n(14),c=n(30),h=n(31),m=n(38),p=n(32),f=n(5),y=n(39),v=n(15),g=n.n(v),_=n(33),d=n.n(_);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=!1,P=[],E=function(t){if(isNaN(t))return t;var e=parseInt(t);return e<10?"0"+e:t};window.addEventListener("keyup",(function(t){return w=t.shiftKey})),window.addEventListener("keydown",(function(t){return w=t.shiftKey}));var S,C=!1,I=function(){if(C)return null;C=!0,d()("./timePolyfillHelpers.js",(function(){P.forEach((function(t){return t.onPolyfillLoad(window.timePolyfillHelpers)}))}))},O=!1,j=document.createElement("style");j.innerHTML=".".concat("react-time-input-polyfill-target","::-ms-clear { display: none; }"),document.getElementsByTagName("head")[0].appendChild(j);var T=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(m.a)(this,Object(p.a)(e).call(this,t))).$input=l.a.createRef(),n.focused_via_click=!1,n.state={time:{hrs:"--",min:"--",mode:"--"},value24hr:t.value||"",currentSegment:null,usePolyfill:!g.a},!t.forcePolyfill&&g.a||(P.push(Object(f.a)(n)),I()),n}return Object(y.a)(e,t),Object(h.a)(e,[{key:"onPolyfillLoad",value:function(t){this.polyfill=t,this.setState({usePolyfill:!0,time:this.polyfill.get_values_from_24hr(this.state.value24hr)}),O||(S=this.polyfill.create_a11y_block(),O=!0),this.manual_entry_log={hrs:new this.polyfill.manual_entry_log,min:new this.polyfill.manual_entry_log};var e=this.$input.current;e.polyfill={label:this.polyfill.get_label(e),$a11y:S}}},{key:"update_a11y",value:function(t){if(!this.state.usePolyfill)return null;this.polyfill.update_a11y(this.$input.current,t)}},{key:"componentDidUpdate",value:function(t,e){var n=t.value!==this.props.value,r=e.value24hr!==this.state.value24hr;if(!n&&!r)return null;r?this.onTimeChange():n&&!this.state.usePolyfill&&this.set_time(this.props.value)}},{key:"set_time",value:function(t){var e=t.split(":").map((function(t){return isNaN(t)?t:parseInt(t)})),n=Object(u.a)(e,2),r=n[0],l=n[1],a=this.state.usePolyfill?{hrs:this.polyfill.convert_hours_to_12hr_time(r),min:l,mode:r>12?"PM":"AM"}:null;this.setState({time:this.state.usePolyfill?t?a:this.state.time:null,value24hr:t})}},{key:"nudge_current_segment",value:function(t){var e=this,n=this.state.currentSegment,r=this.state.time,l={},a="up"===t?1:-1;if("--"===r[n]){var i=function(){return new Date};l={hrs:function(){return e.polyfill.convert_hours_to_12hr_time(i().getHours())},min:function(){return i().getMinutes()},mode:function(){return i().getHours()>11?"PM":"AM"}}}else{var u={up:r.min<59?r.min+a:0,down:0===r.min?59:r.min+a};l={hrs:function(){return e.polyfill.convert_hours_to_12hr_time(r.hrs+a)},min:function(){return u[t]},mode:function(){return"AM"===r.mode?"PM":"AM"}}}this.set_segment(n,l[n]())}},{key:"get_12hr_value",value:function(t){var e=t||this.state.time;return e?[E(e.hrs),":",E(e.min)," ",e.mode].join(""):""}},{key:"set_segment",value:function(t,e){var n=k({},this.state.time,Object(s.a)({},t,isNaN(e)?e:parseInt(e))),r=this.get_12hr_value(n),l=this.polyfill.convert_to_24hr_time(r);this.setState({time:n,value24hr:l})}},{key:"traverse_segments",value:function(t){var e=this,n=this.polyfill.segments,r="left"==t?-1:1,l=n.indexOf(this.state.currentSegment)+r,a=n[l<=0?0:l>=2?2:l];this.clear_entry_log(),this.setState({currentSegment:a}),setTimeout((function(){e.update_a11y(["select"])}),0)}},{key:"clear_entry_log",value:function(){var t=this.state.currentSegment;"mode"!==t&&this.manual_entry_log[t].clear()}},{key:"next_segment",value:function(){this.traverse_segments("right")}},{key:"prev_segment",value:function(){this.traverse_segments("left")}},{key:"clear_current_segment",value:function(){this.set_segment(this.state.currentSegment,"--")}},{key:"onTimeChange",value:function(){var t=this;this.props.onChange&&this.props.onChange({value:this.state.value24hr,element:this.$input.current}),setTimeout((function(){t.update_a11y(["update"])}),0)}},{key:"handleChange",value:function(t){if(this.state.usePolyfill)return null;this.setState({value24hr:t.target.value})}},{key:"handleMouseDown",value:function(t){this.props.onMouseDown&&this.props.onMouseDown(t),this.focused_via_click=!0,this.$input.current.matches(":focus")&&this.update_a11y(["select"])}},{key:"handleClick",value:function(t){if(this.props.onClick&&this.props.onClick(t),!this.state.usePolyfill)return null;this.polyfill.select_cursor_segment(this.$input.current),this.setState({currentSegment:this.polyfill.get_current_segment(this.$input.current)})}},{key:"handleFocus",value:function(t){if(this.props.onFocus&&this.props.onFocus(t),!this.state.usePolyfill)return null;var e=w?"mode":"hrs";this.focused_via_click||this.setState({currentSegment:e}),this.update_a11y(["initial","select"])}},{key:"handleBlur",value:function(t){this.props.onBlur&&this.props.onBlur(t),this.focused_via_click=!1,this.setState({currentSegment:null})}},{key:"handleTab",value:function(t){t.shiftKey&&"hrs"!==this.state.currentSegment?(t.preventDefault(),this.prev_segment()):t.shiftKey||"mode"===this.state.currentSegment||(t.preventDefault(),this.next_segment())}},{key:"handleKeyDown",value:function(t){var e=this;if(!this.state.usePolyfill)return null;var n=t.key,r={ArrowRight:function(){return e.next_segment()},ArrowLeft:function(){return e.prev_segment()},ArrowUp:function(){return e.nudge_current_segment("up")},ArrowDown:function(){return e.nudge_current_segment("down")},Delete:function(){return e.clear_current_segment()},Backspace:function(){return e.clear_current_segment()},numberKey:function(){return e.enter_number(t.key)},A_or_P:function(){return e.enter_A_or_P(t.key)}},l=/\d/.test(t.key),a=/[ap]/i.test(t.key);"Tab"===n?this.handleTab(t):r[n]?(t.preventDefault(),r[n]()):l?r.numberKey():a?r.A_or_P():"Escape"!==n&&t.preventDefault()}},{key:"enter_A_or_P",value:function(t){var e=/a/i.test(t);this.set_segment("mode",e?"AM":"PM")}},{key:"enter_number",value:function(t){var e=this.state.currentSegment,n=parseInt(t),r=this.manual_entry_log[e],l=r.items.length,a={hrs:[1,2],min:[5,9]},i=a[e][l];l<2&&r.add(n);var u=parseInt(a[e].join("")),o=parseInt(r.items.join(""));u>=o&&this.set_segment(e,o),(n>i||2===r.items.length)&&this.next_segment()}},{key:"render",value:function(){var t=this,e=this.props,n=(e.value,e.forcePolyfill,e.className),r=Object(o.a)(e,["value","forcePolyfill","className"]),a=this.state,i=a.usePolyfill,u=a.value24hr,s=a.currentSegment,c=i?this.get_12hr_value():null;if(i&&null!==s){setTimeout((function(){return t.polyfill.select_segment(t.$input.current,s)}),0)}var h=this.state.usePolyfill?"react-time-input-polyfill-target":"";return l.a.createElement("input",k({},r,{onChange:function(e){return t.handleChange(e)},onFocus:function(e){return t.handleFocus(e)},onBlur:function(e){return t.handleBlur(e)},onMouseDown:function(e){return t.handleMouseDown(e)},onClick:function(e){return t.handleClick(e)},onKeyDown:function(e){return t.handleKeyDown(e)},ref:this.$input,type:i?"text":"time",value:i?c:u,className:[n||"",h].join(" ").trim()||void 0}),null)}}]),e}(l.a.Component),V=n(250),N=n(249),D=function(t){var e=t.label,n=t.Input,a=t.codeString,i=Object(r.useState)("20:30"),o=Object(u.a)(i,2),s=o[0],c=o[1];return l.a.createElement("div",{style:{marginBottom:"2em"}},l.a.createElement("h2",null,e," time input"),l.a.createElement("label",{style:{display:"inline-block"}},l.a.createElement("span",{style:{marginRight:"0.5em"}},e," time input"),l.a.createElement(n,{currentValue:s,setValue:c,className:"exampleClass"})),l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){return c("07:15")}},"Set ",e," time to 7:15 AM"),l.a.createElement("button",{onClick:function(){return c("15:45")}},"Set ",e," time to 3:45 PM")),l.a.createElement("p",null,e,' returned value: "',s,'"'),!!a&&l.a.createElement(V.a,{style:N.a,className:"code",language:"javascript",showLineNumbers:!0},a.replace(/^\n/,"")))};var M=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"React Time Input Polyfill"),l.a.createElement("p",null,"Code examples are simplified guides,"," ",l.a.createElement("strong",null,"not exact code replicas"),"."),l.a.createElement(D,{label:"Non-forced polyfill",Input:function(t){var e=t.currentValue,n=t.setValue,r=t.className;return l.a.createElement(T,{value:e,onChange:function(t){var e=t.value;return n(e)},className:r})},codeString:"\nimport React, { useState } from 'react'\nimport TimeInputPolyfill from 'react-time-input-polyfill'\n\nconst TimeInput = ({ label, currentValue, onInputChange }) => {\n\treturn (\n\t\t<label>\n\t\t\t<span>{label}</span>\n\t\t\t<TimeInputPolyfill\n\n\t\t\t\t// set the value through props\n\t\t\t\tvalue={currentValue}\n\n\t\t\t\t// onChange will run every time the value is updated\n\t\t\t\tonChange={({ value, element }) => {\n\t\t\t\t\tconsole.log({\n\n\t\t\t\t\t\t// The current value in 24 hour time format\n\t\t\t\t\t\tvalue,\n\n\t\t\t\t\t\t// The <input> HTML element\n\t\t\t\t\t\telement,\n\n\t\t\t\t\t})\n\n\t\t\t\t\t// Export the new value to the parent component\n\t\t\t\t\tonInputChange(value)\n\t\t\t\t}}\n\t\t\t/>\n\t\t</label>\n\t)\n}\n\n//////////////////////////////////////\n\nconst ExampleForm = ()=> {\n\n\t// Use state to keep track of the value\n\tconst [inputValue, setInputValue] = useState('20:30') // default to 8:30 PM\n\n\treturn (\n\t\t<form>\n\t\t\t<TimeInput\n\t\t\t\tlabel=\"Label text\"\n\n\t\t\t\t// Use the state value to set the time\n\t\t\t\tcurrentValue={inputValue}\n\n\t\t\t\t// Use the set state function to update the time when it changes\n\t\t\t\tonInputChange={ newValue => setInputValue(newValue) }\n\t\t\t/>\n\t\t\t<button type=\"submit\">Submit</button>\n\t\t</form>\n\t)\n}\n"}),l.a.createElement(D,{label:"Forced polyfill",Input:function(t){var e=t.currentValue,n=t.setValue;t.className;return l.a.createElement(T,{value:e,onChange:function(t){var e=t.value;return n(e)},forcePolyfill:!0})},codeString:"\nimport React from 'react'\nimport TimeInputPolyfill from 'react-time-input-polyfill'\n\nconst TimeInput = ({ label, currentValue, onInputChange }) => {\n\treturn (\n\t\t<label>\n\t\t\t<span>{label}</span>\n\t\t\t<TimeInputPolyfill\n\t\t\t\tvalue={currentValue}\n\n\t\t\t\t/*  Force browsers that support input[type=time]\n\t\t\t\t\tto use the polyfill.\n\t\t\t\t\t(useful for testing and debugging)\n\t\t\t\t*/  forcePolyfill={true}\n\n\t\t\t\tonChange={({ value, element }) => {\n\t\t\t\t\tonInputChange(value)\n\t\t\t\t}\n\t\t\t/>\n\t\t</label>\n\t)\n}"}),l.a.createElement(D,{label:"Non-polyfill",Input:function(t){var e=t.currentValue,n=t.setValue,r=t.className;return l.a.createElement("input",{type:"time",value:e,onChange:function(t){return n(t.target.value)},className:r})},codeString:"\n// View this example in Internet Explorer\n// This is a normal time input with no polyfill applied\n\nimport React from 'react'\n\nexport const TimeInput = ({ label, currentValue, onInputChange }) => {\n\treturn (\n\t\t<label>\n\t\t\t<span>{label}</span>\n\t\t\t<input\n\t\t\t\ttype=\"time\"\n\t\t\t\tvalue={currentValue}\n\t\t\t\tonChange={(e) => {\n\t\t\t\t\tconsole.log(e) // the default browser event\n\t\t\t\t\tonInputChange(e.target.value)\n\t\t\t\t}}\n\t\t\t/>\n\t\t</label>\n\t)\n}"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},40:function(t,e,n){t.exports=n(246)},45:function(t,e,n){},46:function(t,e,n){}},[[40,1,2]]]);
//# sourceMappingURL=main.67d489c5.chunk.js.map