import{U as d,j as a,L as x,a6 as y,a7 as j,a8 as u,a9 as f,aa as t,F as i,ab as g,ac as C}from"./muiEmployees.CHnAm83k.js";import{u as T}from"./index.2XFlJBz5.js";import{C as l,T as n,L as c,B as b}from"./muiCommon.BOxp-NZB.js";import"./reactHookForm.CyKqO0fe.js";import"./reactDom.jVsZHl2L.js";import"./reactRouterDom.D_X8HglC.js";import"./reactHashLink.DsdfKRjE.js";import"./muiHeader.DbSBYLHa.js";import"./muiSignUp.DHFYiVE-.js";const S=()=>{const m=d(),{employeesToShow:p,employeesList:e,fetchEmployees:h,loading:r}=T();return a.jsxs(l,{component:"section",className:"employees__section",id:"Users",children:[a.jsx(n,{variant:"h2",sx:{marginBottom:"70px"},children:"Employees"}),a.jsxs(x,{children:[e&&e.slice(0,Math.floor(e.length/3)*3).map((o,s)=>a.jsx(y,{children:a.jsx(j,{children:a.jsxs(u,{children:[a.jsx(f,{src:o.image,alt:"avatar"}),a.jsx(t,{title:"".concat(o.firstName," ").concat(o.lastName),TransitionComponent:i,TransitionProps:{timeout:700},children:a.jsxs(n,{variant:"subtitle1",component:"p",color:"primary",children:[o.firstName," ",o.lastName]})}),a.jsxs(l,{component:"div",className:"employee__container",children:[a.jsx(t,{title:"".concat(o.company.name," ").concat(o.company.title),TransitionComponent:i,TransitionProps:{timeout:700},children:a.jsxs(n,{variant:"subtitle1",component:"p",color:"primary",children:[o.company.name," ",o.company.title]})}),a.jsx(c,{href:"mailto:".concat(o.email),color:"primary",underline:"none",sx:{display:"block"},children:o.email}),a.jsx(c,{href:"tel:".concat(o.phone.replace(/[\s()]/g,"")),color:"primary",underline:"none",sx:{display:"block"},children:o.phone})]})]})})},s)),r&&Array.from({length:p}).map((o,s)=>a.jsx(g,{variant:"rounded",height:250},s))]}),r?a.jsx(C,{sx:{margin:"auto",display:"block",color:m.palette.accent.main}}):a.jsx(b,{variant:"contained",className:"more-button",onClick:()=>{h()},children:"Show more"})]})};export{S as default};
