System.register(["./muiEmployees-legacy.D09oYeep.js","./index-legacy.CllnEMMo.js","./muiCommon-legacy.CI3WBPbl.js","./reactHookForm-legacy.CpGJZ7M_.js","./reactDom-legacy.DtegwKBw.js","./reactRouterDom-legacy.DDdtALYJ.js","./reactHashLink-legacy.1FDeOjHp.js"],(function(e,n){"use strict";var a,o,s,t,l,r,i,c,m,p,h,d,y,j,u,x;return{setters:[e=>{a=e.O,o=e.j,s=e.$,t=e.a0,l=e.a1,r=e.a2,i=e.a3,c=e.a4,m=e.L,p=e.a5,h=e.a6},e=>{d=e.u},e=>{y=e.C,j=e.T,u=e.L,x=e.B},null,null,null,null],execute:function(){e("default",(()=>{const e=a(),{employeesToShow:n,employeesList:g,fetchEmployees:f,loading:v}=d();return o.jsxs(y,{component:"section",className:"employees__section",id:"Users",children:[o.jsx(j,{variant:"h2",sx:{marginBottom:"70px"},children:"Employees"}),o.jsxs(s,{children:[g&&g.slice(0,3*Math.floor(g.length/3)).map(((e,n)=>o.jsx(t,{children:o.jsx(l,{children:o.jsxs(r,{children:[o.jsx(i,{src:e.image,alt:"avatar"}),o.jsx(c,{title:`${e.firstName} ${e.lastName}`,TransitionComponent:m,TransitionProps:{timeout:700},children:o.jsxs(j,{variant:"subtitle1",component:"p",color:"primary",children:[e.firstName," ",e.lastName]})}),o.jsxs(y,{component:"div",className:"employee__container",children:[o.jsx(c,{title:`${e.company.name} ${e.company.title}`,TransitionComponent:m,TransitionProps:{timeout:700},children:o.jsxs(j,{variant:"subtitle1",component:"p",color:"primary",children:[e.company.name," ",e.company.title]})}),o.jsx(u,{href:`mailto:${e.email}`,color:"primary",underline:"none",sx:{display:"block"},children:e.email}),o.jsx(u,{href:`tel:${e.phone.replace(/[\s()]/g,"")}`,color:"primary",underline:"none",sx:{display:"block"},children:e.phone})]})]})})},n))),v&&Array.from({length:n}).map(((e,n)=>o.jsx(p,{variant:"rounded",height:250},n)))]}),v?o.jsx(h,{sx:{margin:"auto",display:"block",color:e.palette.accent.main}}):o.jsx(x,{variant:"contained",className:"more-button",onClick:()=>{f()},children:"Show more"})]})}))}}}));
