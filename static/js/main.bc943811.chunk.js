(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(8),c=n(6),i=n(9),r=n(2),o=(n(18),n(0));function l(){return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsx)("span",{children:"React Kanban"})})}var d=n(5),u=n.n(d);n(20),n(21);function j(t){var e=t.id,n=t.title,s=t.taskState,c=t.onTaskUpdate,i=t.onDeleteTask,l=Object(a.useState)(!1),d=Object(r.a)(l,2),u=d[0],j=d[1],b=Object(a.useState)(n),k=Object(r.a)(b,2),O=k[0],f=k[1];return u?Object(o.jsx)("div",{className:"task-item",children:Object(o.jsx)("input",{type:"text",value:O,onChange:function(t){var n=t.target.value;f(n),c(e,n,s)},onKeyPress:function(t){"Enter"===t.key&&(j(!1),0===O.length&&i(e))}})}):Object(o.jsxs)("div",{className:"task-item",children:[Object(o.jsx)("div",{onClick:function(t){return j(!0)},children:O}),Object(o.jsxs)("select",{onChange:function(t){c(e,n,t.target.value)},value:s,children:[Object(o.jsx)("option",{value:"Pendente",children:"Pendente"}),Object(o.jsx)("option",{value:"Fazendo",children:"Fazendo"}),Object(o.jsx)("option",{value:"Completa",children:"Completa"})]})]})}var b=n.p+"static/media/plus-icon.7f679a12.svg";function k(t){var e=t.title,n=t.taskState,s=t.onAddTask,c=t.tasks,i=t.onTaskUpdate,l=t.onDeleteTask,d=Object(a.useState)(0),u=Object(r.a)(d,2);u[0],u[1];return Object(o.jsxs)("div",{className:"tasklist",children:[Object(o.jsx)("div",{className:"title",children:e}),Object(o.jsxs)("div",{className:"content",children:[c.map((function(t){return Object(o.jsx)(j,{id:t.id,title:t.title,taskState:t.state,onTaskUpdate:i,onDeleteTask:l},t.id)})),0===c.length&&Object(o.jsx)("div",{className:"empty-list",children:"Lista vazia"}),Object(o.jsxs)("button",{onClick:function(){s("Nova Tarefa",n)},className:"btn",children:[Object(o.jsx)("img",{src:b,alt:"plus"}),"Adicionar Tarefa"]})]})]})}k.prototype={title:u.a.string.isRequired,onAddTask:u.a.func.isRequired,tasks:u.a.array.isRequired};n(24);var O=0;function f(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],s=e[1],d=function(t,e){var n={id:O+=1,title:t,state:e};s((function(t){return[].concat(Object(i.a)(t),[n])}))},u=function(t,e,n){s((function(a){return a.map((function(a){return a.id===t?Object(c.a)(Object(c.a)({},a),{},{title:e,state:n}):a}))}))},j=function(t){s((function(e){return e.filter((function(e){return e.id!==t}))}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(k,{title:"Pendente",onAddTask:d,taskState:"Pendente",tasks:n.filter((function(t){return"Pendente"===t.state})),onTaskUpdate:u,onDeleteTask:j}),Object(o.jsx)(k,{title:"Fazendo",onAddTask:d,taskState:"Fazendo",tasks:n.filter((function(t){return"Fazendo"===t.state})),onTaskUpdate:u,onDeleteTask:j}),Object(o.jsx)(k,{title:"Completa",onAddTask:d,taskState:"Completa",tasks:n.filter((function(t){return"Completa"===t.state})),onTaskUpdate:u,onDeleteTask:j})]})]})}var p=document.getElementById("root");Object(s.createRoot)(p).render(Object(o.jsx)(f,{}))}},[[25,1,2]]]);
//# sourceMappingURL=main.bc943811.chunk.js.map