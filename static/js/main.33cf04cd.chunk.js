(this.webpackJsonpkomly=this.webpackJsonpkomly||[]).push([[0],{62:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(8),s=n.n(a),r=(n(62),n(63),n(4)),l={nav:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",width:"40%",margin:"auto",borderBottom:"1px solid black"},navTitles:{display:"flex"},navLogo:{margin:"none"},margins:{margin:"10% 4px 15px 4px"}};function o(){return Object(r.jsxs)("nav",{style:l.nav,children:[Object(r.jsx)("div",{style:l.navLogo,children:Object(r.jsx)("h1",{style:l.margins,children:"Komly"})}),Object(r.jsxs)("div",{style:l.navTitles,children:[Object(r.jsx)("h4",{style:l.margins,children:"Home |"}),Object(r.jsx)("h4",{style:l.margins,children:"Create Event |"}),Object(r.jsx)("h4",{style:l.margins,children:"My Events"})]})]})}n(122),n(123);var j=n(29),d=n(52),u=n.n(d),h=n(121),b={eventContainer:{display:"flex",width:"80%",margin:"auto",marginTop:"2%",justifyContent:"space-around",alignItems:"flex-start"},atendees:{display:"flex",flexDirection:"column",justifyContent:"flex-end"}};function x(e){var t=e.event;return Object(r.jsxs)("div",{style:b.eventContainer,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:t.name}),Object(r.jsx)("h3",{children:t.description})]}),Object(r.jsx)("div",{style:b.atendees,children:t.atendees.map((function(e){return Object(r.jsx)("h4",{children:e})}))})]})}var v={paper:{padding:1,margin:5},eventContainer:{width:"25%",margin:"auto",marginTop:"5%"}};function f(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)({}),s=Object(j.a)(a,2),l=s[0],o=s[1],d=Object(i.useState)(!1),b=Object(j.a)(d,2),f=b[0],O=b[1];Object(i.useEffect)((function(){u.a.get("http://localhost:3001/users/604461283dca7f17814267a2").then((function(e){c(e.data.data.events)})).catch((function(e){console.log(e)}))}),[]);var m=n.map((function(e){return Object(r.jsx)(h.a,{elevation:3,style:v.paper,onClick:function(){return function(e){o(e),O(!0)}(e)},children:Object(r.jsx)("h1",{children:e.name})})}));return f?Object(r.jsx)(x,{event:l}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{style:v.eventContainer,children:m})})}var O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),m()}},[[91,1,2]]]);
//# sourceMappingURL=main.33cf04cd.chunk.js.map