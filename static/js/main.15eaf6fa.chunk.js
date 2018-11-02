(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),i=n(4),u=(n(13),n(1)),c=n(7),s=n(2),m=n.n(s),d=n(3),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,l=u}finally{try{!a&&i.return&&i.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e,t){var n=e.initialValues,a=t.validate,r=void 0===a?function(){return!0}:a,l=Object(d.useState)(n||{}),o=h(l,2),i=o[0],u=o[1],c=Object(d.useState)({}),s=h(c,2),m=s[0],v=s[1],p=Object(d.useState)({}),b=h(p,2),g=b[0],C=b[1],k=Object(d.useState)(!1),y=h(k,2),x=y[0],w=y[1],B=function(e,t){u(f({},i,E({},e,t)))},O=function(e){!function(e){if("function"!==typeof r)throw Error("validate option should be a function");var t=r({values:i})[e];v(f({},m,E({},e,t)))}(e),C(f({},g,E({},e,!0)))},S=function(e){var t=r({values:e}),n=Object.keys(t).every(function(e){return""===t[e]});return v(t),j(),w(n),n},j=function(){C(Object.keys(i).reduce(function(e,t){return f({},e,E({},t,!0))},{}))};return{values:i,touched:g,errors:m,reset:function(){C({}),v({}),u(n),w(!1)},isValid:x,setAllValues:function(e){j(),u(e),S(e)},setValue:B,touchValue:O,validateValues:S,submitProps:function(e){var t=e.onSuccess,n=e.onError;return{onSubmit:function(e){S(i)?t():(e.preventDefault(),n())}}},inputFieldProps:function(e){return{name:e,value:i[e],onInput:function(t){var n=t.target.value;return B(e,n)},onBlur:function(){return O(e)}}}}},p=function(e){var t=e.isHidden,n=v({initialValues:{name:"",email:"juan@amezQA",checkbox:!1,select:"",radioButton:"yes"}},{validate:function(e){var t=e.values;return{name:""===t.name?"This field is required":"",email:""===t.email?"This field is required":"",username:""===t.username?"This field is required":"",select:""===t.select?"This field is required":"",checkbox:t.checkbox?"":"Please select this field"}}}),l=n.values,o=n.errors,s=n.touched,d=n.setValue,E=n.touchValue,f=n.isValid,h=n.reset,p=n.setAllValues,b=n.submitProps,g=n.inputFieldProps,C=Object(a.useState)(!1),k=Object(i.a)(C,2),y=k[0],x=k[1],w=function(e){var t=e.target,n=t.name,a=t.value;d(n,a),x(!1)},B=function(e){return m()({success:""===o[e],danger:o[e]&&s[e]})},O=function(e){return m()(Object(c.a)({},o[e],o[e]&&s[e]))};return r.a.createElement(a.Fragment,null,r.a.createElement(u.Notification,{isHidden:!y,isColor:m()({success:f,danger:!f})},r.a.createElement(u.Delete,{onClick:function(){return x(!1)}}),f?"Success message here!":"Validations form has failed, please check the fields again!"),r.a.createElement(u.TextArea,{rows:10,className:m()({"is-hidden":t}),value:JSON.stringify({values:l,touched:s,errors:o},null,2)}),r.a.createElement(u.Title,{isHidden:!y,isSize:1},"Form example"),r.a.createElement("form",Object.assign({action:""},b({onSuccess:function(){x(!0)},onError:function(){x(!0)}}),{className:m()({"is-hidden":t})}),r.a.createElement(u.Field,null,r.a.createElement(u.Label,null,"Name"),r.a.createElement(u.Control,null,r.a.createElement(u.Input,{isColor:B("name"),type:"text",placeholder:"Your name",value:l.name,name:"name",onInput:w,onBlur:function(){return E("name")}})),r.a.createElement(u.Help,{isColor:"danger"},O("name"))),r.a.createElement(u.Field,null,r.a.createElement(u.Label,null,"Username"),r.a.createElement(u.Control,null,r.a.createElement(u.Input,Object.assign({isColor:B("username"),type:"text",placeholder:"Your username"},g("username")))),r.a.createElement(u.Help,{isColor:"danger"},O("username"))),r.a.createElement(u.Field,null,r.a.createElement(u.Label,null,"Email"),r.a.createElement(u.Control,null,r.a.createElement(u.Input,{isColor:B("email"),placeholder:"You email",value:l.email,name:"email",onInput:w,onBlur:function(){return E("email")}})),r.a.createElement(u.Help,{isColor:"danger"},O("email"))),r.a.createElement(u.Field,null,r.a.createElement(u.Label,null,"Select:"),r.a.createElement(u.Control,null,r.a.createElement(u.Select,Object.assign({isColor:B("select")},g("select")),r.a.createElement("option",{value:""},"Gender"),r.a.createElement("option",{value:"M"},"Male"),r.a.createElement("option",{value:"F"},"Female"))),r.a.createElement(u.Help,{isColor:"danger"},O("select"))),r.a.createElement(u.Field,null,r.a.createElement(u.Label,null,"Message"),r.a.createElement(u.Control,null,r.a.createElement(u.TextArea,Object.assign({},g("textArea"),{placeholder:"<TextArea />"}))),r.a.createElement(u.Help,{isColor:"danger"},O("textArea"))),r.a.createElement(u.Field,null,r.a.createElement(u.Control,null,r.a.createElement(u.Checkbox,{onChange:function(e){var t=e.target,n=t.name,a=t.checked;return d(n,a)},checked:l.checkbox,name:"checkbox",onBlur:function(){return E("checkbox")}},"I agree")),r.a.createElement(u.Help,{isColor:"danger"},O("checkbox"))),r.a.createElement(u.Field,null,r.a.createElement(u.Control,null,r.a.createElement(u.Radio,{name:"radioButton",value:"yes",checked:"yes"===l.radioButton,onChange:w,onBlur:function(){return E("radioButton")}},"Yes"),r.a.createElement(u.Radio,{name:"radioButton",value:"no",checked:"no"===l.radioButton,onChange:w,onBlur:function(){return E("radioButton")}},"No"))),r.a.createElement(u.Field,{isGrouped:!0},r.a.createElement(u.Control,null,r.a.createElement(u.Button,{isColor:"primary",type:"submit"},"Submit")),r.a.createElement(u.Control,null,r.a.createElement(u.Button,{isColor:"info",onClick:h},"Reset")),r.a.createElement(u.Control,null,r.a.createElement(u.Button,{isColor:"link",onClick:function(){return p({name:"default name",email:"default email",checkbox:!0,radioButton:"no",select:"M",textArea:"text area example"})}},"set new values")))))},b=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],l=t[1];return r.a.createElement(a.Fragment,null,r.a.createElement(u.Nav,{hasShadow:!0},r.a.createElement(u.NavLeft,null,r.a.createElement(u.NavItem,{isBrand:!0},"React Hooks Training")),r.a.createElement(u.NavRight,{isMenu:!0},r.a.createElement(u.NavItem,null,r.a.createElement(u.Button,{isColor:"success"},"Go to home")))),r.a.createElement(u.Section,null,r.a.createElement(u.Container,{isFluid:!0},r.a.createElement(u.Columns,null,r.a.createElement(u.Column,{isSize:"1/4"},r.a.createElement(u.Menu,null,r.a.createElement(u.MenuLabel,null,"Custom hooks"),r.a.createElement(u.MenuList,null,r.a.createElement("li",null,r.a.createElement(u.MenuLink,{hasTextColor:"grey-light",onClick:function(){return l("Register")}},"useForm"))))),r.a.createElement(u.Column,{isSize:"3/4"},r.a.createElement(p,{isHidden:"Register"!==n}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.15eaf6fa.chunk.js.map