(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{33:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n.n(c),o=n(18),u=n(26),i=n.n(u);var m=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:""},l.a.createElement(i.a,null)," ",l.a.createElement("span",null," "),"Quick Note"))},s=n(28),E=n.n(s);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.clickDelete(e.id)}},l.a.createElement(E.a,null)))};let f=(new Date).getFullYear();var d=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"\xa9 Copyright ",f))},h=n(24),v=n(60),k=n(29),b=n.n(k),g=n(61);var j=function(e){let t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),c=n[0],r=n[1];function u(e){let t=e.target,n=t.name,a=t.value;r(e=>Object(h.a)(Object(h.a)({},e),{},{[n]:a}))}let i=Object(a.useState)(!1),m=Object(o.a)(i,2),s=m[0],E=m[1];return l.a.createElement("div",null,l.a.createElement("form",{className:"add-note"},s?l.a.createElement("input",{name:"title",placeholder:"Title",onChange:u,value:c.title,autoFocus:!0,autoComplete:"off"}):null,l.a.createElement("textarea",{name:"content",placeholder:s?"write note here...":"click here to start...",onChange:u,value:c.content,onClick:function(){E(e=>!e)},rows:s?"3":"1"}),l.a.createElement(g.a,{in:s},l.a.createElement(v.a,{onClick:function(t){e.onAdd(c),r({title:"",content:""}),E(!1),t.preventDefault()}},l.a.createElement(b.a,null)))))};var O=function(){let e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];function r(e){c(t=>t.filter((t,n)=>e!==n))}return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(j,{onAdd:function(e){c(t=>[...t,e])}}),n.map((e,t)=>l.a.createElement(p,{title:e.title,content:e.content,key:t,id:t,clickDelete:r})),l.a.createElement(d,null))};r.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.79d6ec3d.chunk.js.map