(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},107:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(83),c=a.n(r),u=(a(104),a(9)),o=(a(106),a(107),a(4)),i=a(79),m=a(163),d=a(247),E=a(218),s=a(136),b=a(250),v=a(237),g=a(243),O=a(253),f=a(238),p=a(246),h=a(137),j=a(130),C=a(236),N=(a(111),a(31)),F=a.n(N),S=Object(m.a)({palette:{mode:"dark"}});var w=function(){var e=Object(s.a)({initialValues:{},onSubmit:function(e){alert(JSON.stringify(e,null,2))}}),t=Object(n.useState)(null),a=Object(u.a)(t,2),r=(a[0],a[1],Object(n.useContext)(J)),c=r.inputFields,m=r.setInputFields,N=(r.image1,r.setImage1),w=function(e){var t=e.target,a=t.id,n=t.value;m(function(e){return Object(i.a)({},e,Object(o.a)({},a,n))})},x=Object(n.useState)(""),k=Object(u.a)(x,2),y=k[0],I=k[1],L=Object(n.useState)(),D=Object(u.a)(L,2);return D[0],D[1],l.a.createElement(d.a,{theme:S},l.a.createElement(E.a,null),l.a.createElement("br",null),l.a.createElement(b.a,{fullWidth:!0},l.a.createElement(v.a,{id:"number",label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0436\u043a\u0438",variant:"outlined",value:c.number,onChange:w}),l.a.createElement("br",null),l.a.createElement(v.a,{id:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"outlined",value:c.name,onChange:w}),l.a.createElement("br",null),l.a.createElement(v.a,{id:"costumer",label:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a",variant:"outlined",value:c.costumer,onChange:w}),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("form",{onChange:w},l.a.createElement(g.a,{"aria-labelledby":"type-label",row:!0,value:y,onChange:function(e){I(e.target.value)}},l.a.createElement(O.a,{value:"mount",control:l.a.createElement(f.a,{id:"mountOrNot"}),checked:"mount"===c.mountOrNot,label:"\u041c\u043e\u043d\u0442\u0430\u0436"}),l.a.createElement(O.a,{value:"send",control:l.a.createElement(f.a,{id:"mountOrNot"}),checked:"send"===c.mountOrNot,label:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"}),l.a.createElement(O.a,{value:"self",control:l.a.createElement(f.a,{id:"mountOrNot"}),checked:"self"===c.mountOrNot,label:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})))),"mount"===c.mountOrNot?l.a.createElement(v.a,{id:"address",label:"\u041c\u043e\u043d\u0442\u0430\u0436 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443",variant:"outlined",value:c.address,onChange:w}):"send"===c.mountOrNot?l.a.createElement(v.a,{id:"address",label:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443",variant:"outlined",value:c.address,onChange:w}):"self"===c.mountOrNot?"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0437\u0430\u0431\u0435\u0440\u0435\u0442 \u0441\u0430\u043c":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u043d\u0442\u0430\u0436 / \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 / \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437",l.a.createElement("br",null),l.a.createElement(v.a,{id:"manager",label:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440",variant:"outlined",value:c.manager,onChange:w}),l.a.createElement("br",null),l.a.createElement(j.a,{dateAdapter:h.a,adapterLocale:"ru"},l.a.createElement(C.a,{label:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438",id:"dateOne",value:F()(c.dateOne),onChange:function(e){m(function(t){return Object(i.a)({},t,{dateOne:e.$d})})},renderInput:function(e){return l.a.createElement(v.a,Object.assign({},e,{id:"dateOne-input"}))}})),l.a.createElement("br",null),l.a.createElement(v.a,{id:"work",label:"\u0424\u0440\u043e\u043d\u0442 \u0440\u0430\u0431\u043e\u0442",variant:"outlined",onChange:e.handleChange}),l.a.createElement("br",null),l.a.createElement(v.a,{id:"folder",label:"\u041f\u0443\u0442\u044c \u043a \u043f\u0430\u043f\u043a\u0435",variant:"outlined",onChange:e.handleChange,width:"80%"}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"file-upload"},l.a.createElement(p.a,{variant:"contained",component:"span"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0430\u043c\u0438")),l.a.createElement("input",{id:"file-upload",type:"file",onChange:function(e){N(URL.createObjectURL(e.target.files[0]))},style:{display:"none"}})))},x=a(254),k=a(239),y=a(255),I=function(){var e=Object(n.useContext)(J),t=e.inputFields,a=e.image1,r=new Date,c="".concat(r.getDate(),".").concat(r.getMonth()+1,".").concat(r.getFullYear());return console.log(c),l.a.createElement("div",null,l.a.createElement("p",null,"\u041d\u043e\u043c\u0435\u0440: ",l.a.createElement("b",null,t.number," ")),l.a.createElement("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",t.name),l.a.createElement("p",null,"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a: ",t.costumer),t.dateOne?l.a.createElement("p",null,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438: ",t.dateOne.toLocaleDateString()):l.a.createElement("p",null,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438: ",c),l.a.createElement("p",null,"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u0430: ",t.manager),"mount"===t.mountOrNot?l.a.createElement("p",null,"\u041c\u043e\u043d\u0442\u0430\u0436 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443: ",t.address):"send"===t.mountOrNot?l.a.createElement("p",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443: ",t.address):"self"===t.mountOrNot?"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0437\u0430\u0431\u0435\u0440\u0435\u0442 \u0441\u0430\u043c":"\u041d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u043e \u0447\u0442\u043e \u0441 \u043d\u0435\u0439 \u043f\u043e\u0442\u043e\u043c \u0434\u0435\u043b\u0430\u0442\u044c",l.a.createElement("br",null),a&&l.a.createElement("img",{src:a,alt:"\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u044b",height:"500px"}))};function L(e){var t=e.children,a=e.value,n=e.index;return l.a.createElement("div",{hidden:a!==n},a===n&&l.a.createElement(x.a,{component:"div"},t))}function D(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(k.a,{value:a,onChange:function(e,t){r(t)},centered:!0},l.a.createElement(y.a,{label:"\u0412\u0412\u041e\u0414 \u0414\u0410\u041d\u041d\u042b\u0425"}),l.a.createElement(y.a,{label:"\u0412\u042b\u0412\u041e\u0414 \u0414\u0410\u041d\u041d\u042b\u0425"}),l.a.createElement(y.a,{label:"\u041a\u041e\u041f\u0418\u0420\u0410\u0419\u0422"})),l.a.createElement(L,{value:a,index:0},l.a.createElement(w,null)),l.a.createElement(L,{value:a,index:1},l.a.createElement(I,null)),l.a.createElement(L,{value:a,index:2},"(c) Eugene Christiani 2023"))}var J=Object(n.createContext)();var P=function(){var e=Object(n.useState)({field1:"",field2:"",field3:"",mountOrNot:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(u.a)(c,2),i=o[0],m=o[1];return l.a.createElement(J.Provider,{value:{inputFields:a,setInputFields:r,image1:i,setImage1:m}},l.a.createElement(D,null))},R=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,235)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null))),R()},96:function(e,t,a){e.exports=a(164)}},[[96,3,2]]]);
//# sourceMappingURL=main.a068ea7e.chunk.js.map