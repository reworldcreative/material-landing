import{O as d,j as a,$ as x,a0 as y,a1 as j,a2 as u,a3 as f,a4 as t,L as i,a5 as g,a6 as C}from"./muiEmployees.83mC08oC.js";import{u as T}from"./index.B-uD2z3M.js";import{C as l,T as n,L as c,B as v}from"./muiCommon.BdMjn5zs.js";import"./reactHookForm.CyKqO0fe.js";import"./reactDom.jVsZHl2L.js";import"./reactRouterDom.D_X8HglC.js";import"./reactHashLink.DsdfKRjE.js";const B=()=>{const m=d(),{employeesToShow:p,employeesList:o,fetchEmployees:h,loading:r}=T();return a.jsxs(l,{component:"section",className:"employees__section",id:"Users",children:[a.jsx(n,{variant:"h2",sx:{marginBottom:"70px"},children:"Employees"}),a.jsxs(x,{children:[o&&o.slice(0,Math.floor(o.length/3)*3).map((e,s)=>a.jsx(y,{children:a.jsx(j,{children:a.jsxs(u,{children:[a.jsx(f,{src:e.image,alt:"avatar"}),a.jsx(t,{title:"".concat(e.firstName," ").concat(e.lastName),TransitionComponent:i,TransitionProps:{timeout:700},children:a.jsxs(n,{variant:"subtitle1",component:"p",color:"primary",children:[e.firstName," ",e.lastName]})}),a.jsxs(l,{component:"div",className:"employee__container",children:[a.jsx(t,{title:"".concat(e.company.name," ").concat(e.company.title),TransitionComponent:i,TransitionProps:{timeout:700},children:a.jsxs(n,{variant:"subtitle1",component:"p",color:"primary",children:[e.company.name," ",e.company.title]})}),a.jsx(c,{href:"mailto:".concat(e.email),color:"primary",underline:"none",sx:{display:"block"},children:e.email}),a.jsx(c,{href:"tel:".concat(e.phone.replace(/[\s()]/g,"")),color:"primary",underline:"none",sx:{display:"block"},children:e.phone})]})]})})},s)),r&&Array.from({length:p}).map((e,s)=>a.jsx(g,{variant:"rounded",height:250},s))]}),r?a.jsx(C,{sx:{margin:"auto",display:"block",color:m.palette.accent.main}}):a.jsx(v,{variant:"contained",className:"more-button",onClick:()=>{h()},children:"Show more"})]})};export{B as default};
