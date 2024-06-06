System.register(["./muiPopUp-legacy.CnWz6xIX.js","./reactHookForm-legacy.BJe_7uwt.js","./muiCommon-legacy.DQlMUecZ.js","./muiSignUp-legacy.D0rbXPsD.js","./index-legacy.DQNmqEqN.js","./reactHashLink-legacy.t-HyoPTp.js","./muiEmployees-legacy.g8Oxd-_B.js","./muiHeader-legacy.CdeajVP_.js"],(function(e,a){"use strict";var o,l,n,t,r,s,i,m,p,d,c,u,g,y,x,h,j,f,v,b,k;return{setters:[e=>{o=e.j},e=>{l=e.r,n=e.u,t=e.C},e=>{r=e.C,s=e.B,i=e.T},e=>{m=e.O,p=e.I,d=e.a,c=e.u,u=e.e,g=e.t,y=e.T,x=e.F,h=e.b,j=e.R,f=e.c,v=e.d},e=>{b=e.u,k=e.n},null,null,null],execute:function(){const a=({onImageChange:e})=>{const[a,n]=l.useState("Upload your photo");return o.jsxs(r,{component:"div",className:"fileLoader__wrapper",children:[o.jsx(m,{sx:{display:"none"},id:"file-upload",type:"file",onChange:a=>{const o=a.target.files?a.target.files[0]:null;o?(e=>{const a=e.split("."),o=a[a.length-1].toLowerCase();return["jpg","jpeg","png"].includes(o)})(o.name)?(e=>parseFloat((e.size/1048576).toFixed(2))<5)(o)?(n(o.name),e(o)):n("file is not an image"):n("file is too big"):n("Upload your photo")}}),o.jsxs(p,{htmlFor:"file-upload",sx:{display:"flex",width:"100%"},children:[o.jsx(s,{variant:"outlined",component:"span",sx:{minWidth:"auto",display:"flex"},children:"Upload"}),o.jsx(i,{variant:"main",sx:{padding:"14px 16px",cursor:"text"},children:a})]})]})};var _=["component","mask","replacement","showMask","separate","track","modify","onMask"];l.forwardRef((function(e,a){var l=e.component,n=e.mask,t=e.replacement,r=e.showMask,s=e.separate,i=e.track,m=e.modify,p=e.onMask,y=d(e,_),x=c({mask:n,replacement:t,showMask:r,separate:s,track:i,modify:m,onMask:p}),h=u(x,a);return o.jsx(l||"input",g({ref:h},y))})),e("default",(()=>{const{employeesList:e,addEmployees:l,showPopup:m}=b(),{register:p,handleSubmit:d,control:u,reset:g,formState:{errors:_,isValid:S}}=n({mode:"onChange"}),F=c({mask:"+38 (___) ___-__-__",replacement:"_"});return o.jsxs(r,{component:"section",className:"sign-up__section",id:"Sign up",children:[o.jsx(i,{variant:"h2",sx:{marginBottom:"50px"},children:"Sign Up"}),o.jsxs(r,{component:"form",className:"sign-up__form",onSubmit:d((a=>{l({...k,id:e.length+1,image:""!==a.employeeAvatar?URL.createObjectURL(a.employeeAvatar):"",firstName:a.employeeName,lastName:a.employeeName,email:a.employeeEmail,phone:a.employeePhone,company:{...k.company,title:a.employeePosition}}),g(),m()})),children:[o.jsx(y,{id:"employeeName",label:"Your name",variant:"outlined",color:"primary",...p("employeeName",{required:!0,minLength:{value:2,message:"Minimum length should be 2"},maxLength:{value:60,message:"Maximum length should be 60"},validate:{correctFormat:e=>/^[a-zA-Z]+$/.test(e)||"Only letters"}}),error:!!_.employeeName,helperText:_?.employeeName?.message?.toString()||""}),o.jsx(y,{id:"employeeEmail",label:"Email",variant:"outlined",color:"primary",...p("employeeEmail",{validate:{correctFormat:e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)||"Invalid email address"}}),error:!!_.employeeEmail,helperText:_?.employeeEmail?.message?.toString()||""}),o.jsx(y,{error:!!_.employeePhone,inputRef:F,id:"employeePhone",label:"Phone",variant:"outlined",color:"primary",...p("employeePhone",{validate:{correctFormat:e=>/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(e)}}),helperText:_?.employeePhone?.message?.toString()||"+38 (XXX) XXX - XX - XX"}),o.jsxs(x,{children:[o.jsx(h,{id:"radio-buttons-group-label",children:"Select your position"}),o.jsx(t,{name:"employeePosition",control:u,defaultValue:"Frontend developer",render:({field:e})=>o.jsxs(j,{"aria-labelledby":"radio-buttons-group-label",...e,children:[o.jsx(f,{value:"Frontend developer",control:o.jsx(v,{}),label:"Frontend developer"}),o.jsx(f,{value:"Backend developer",control:o.jsx(v,{}),label:"Backend developer"}),o.jsx(f,{value:"Designer",control:o.jsx(v,{}),label:"Designer"}),o.jsx(f,{value:"QA",control:o.jsx(v,{}),label:"QA"})]})})]}),o.jsx(t,{name:"employeeAvatar",control:u,defaultValue:"",render:({field:{onChange:e}})=>o.jsx(a,{onImageChange:e})}),o.jsx(s,{variant:"contained",sx:{margin:"auto",display:"block"},type:"submit",disabled:!S,children:"Sign up"})]})]})}))}}}));
