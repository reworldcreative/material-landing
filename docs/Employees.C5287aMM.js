import{C as d,j as o}from"./muiPopUp.Dnrzv5zN.js";import{u as x}from"./index.D1q1WmaL.js";import{C as t,T as n,L as i,B as y}from"./muiCommon.q-rtFm_n.js";import{L as j,d as u,C as f,e as C,A as g,f as l,F as m,S as T,h as v}from"./muiEmployees.DZ8f-otS.js";import"./reactHookForm.BIi6FwHL.js";import"./reactHashLink.BQUFUxCe.js";import"./muiHeader.zbWg05PI.js";import"./muiSignUp.DNiGpa70.js";const A=()=>{const c=d(),{employeesToShow:p,employeesList:s,fetchEmployees:h,loading:r}=x();return o.jsxs(t,{component:"section",className:"employees__section",id:"Users",children:[o.jsx(n,{variant:"h2",sx:{marginBottom:"70px"},children:"Employees"}),o.jsxs(j,{children:[s&&s.slice(0,Math.floor(s.length/3)*3).map((e,a)=>o.jsx(u,{children:o.jsx(f,{children:o.jsxs(C,{children:[o.jsx(g,{src:e.image,alt:"avatar"}),o.jsx(l,{title:"".concat(e.firstName," ").concat(e.lastName),TransitionComponent:m,TransitionProps:{timeout:700},children:o.jsxs(n,{variant:"subtitle1",component:"p",color:"primary",children:[e.firstName," ",e.lastName]})}),o.jsxs(t,{component:"div",className:"employee__container",children:[o.jsx(l,{title:"".concat(e.company.name," ").concat(e.company.title),TransitionComponent:m,TransitionProps:{timeout:700},children:o.jsxs(n,{variant:"subtitle1",component:"p",color:"primary",children:[e.company.name," ",e.company.title]})}),o.jsx(i,{href:"mailto:".concat(e.email),color:"primary",underline:"none",sx:{display:"block"},children:e.email}),o.jsx(i,{href:"tel:".concat(e.phone.replace(/[\s()]/g,"")),color:"primary",underline:"none",sx:{display:"block"},children:e.phone})]})]})})},a)),r&&Array.from({length:p}).map((e,a)=>o.jsx(T,{variant:"rounded",height:250},a))]}),r?o.jsx(v,{sx:{margin:"auto",display:"block",color:c.palette.accent.main}}):o.jsx(y,{variant:"contained",className:"more-button",onClick:()=>{h()},children:"Show more"})]})};export{A as default};
