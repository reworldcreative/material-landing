System.register(["./muiHeader-legacy.BhCpRF_o.js","./reactDom-legacy.DtegwKBw.js","./reactRouterDom-legacy.DDdtALYJ.js","./reactHookForm-legacy.CpGJZ7M_.js","./muiCommon-legacy.CTkxsxLT.js","./reactHashLink-legacy.1FDeOjHp.js"],(function(e,t){"use strict";var r,a,o,n,i,s,l,p,d,c,m,u,h,x,g,f,y,b,k,v,j,C,w,S,M,F,z,B,E,O,_;return{setters:[e=>{r=e._,a=e.o,o=e.b,n=e.T,i=e.j,s=e.p,l=e.G,p=e.q,d=e.u,c=e.t,m=e.v,u=e.w,h=e.x,x=e.I,g=e.y,f=e.A,y=e.z,b=e.D,k=e.C},e=>{v=e.r},e=>{j=e.L,C=e.O,w=e.R,S=e.a,M=e.H},e=>{F=e.r},e=>{z=e.C,B=e.L,E=e.T,O=e.B},e=>{_=e.H}],execute:function(){var N,T=document.createElement("style");T.textContent='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;padding:0}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}a{background-color:transparent}img{border-style:none}[type=reset],[type=submit]{-webkit-appearance:button}[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[hidden]{display:none}body{font-family:"Nunito, sans-serif";background:#f8f8f8;padding:0}\n',document.head.appendChild(T),e({G:$,g:H,t:D});var W=v;function A(e){return String(parseFloat(e)).length===String(e).length}function H(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function D(e){return parseFloat(e)}function L({lineHeight:e,pixels:t,htmlFontSize:r}){return t/(e*r)}N=W.createRoot,W.hydrateRoot;const P=["theme"];function I(e){let{theme:t}=e,a=o(e,P);const l=t[n];return i.jsx(s,r({},a,{themeId:l?n:void 0,theme:l||t}))}const R=function(e,t,r){let a=Promise.resolve();return a.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))};function $(e){return i.jsx(l,r({},e,{defaultTheme:p,themeId:n}))}const U=(e,t)=>r({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),G=e=>r({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),K=(e,t=!1)=>{var a;const o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((([t,r])=>{var a;o[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(a=r.palette)?void 0:a.mode}}));let n=r({html:U(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:r({margin:0},G(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o);const i=null==(a=e.components)||null==(a=a.MuiCssBaseline)?void 0:a.styleOverrides;return i&&(n=[n,i]),n};function Z(e){const t=d({props:e,name:"MuiCssBaseline"}),{children:r,enableColorScheme:a=!1}=t;return i.jsxs(F.Fragment,{children:[i.jsx($,{styles:e=>K(e,a)}),r]})}const V=F.lazy((()=>R((()=>t.import("./Hero-legacy.Cl205eZT.js")),0,t.meta.url))),q=F.lazy((()=>R((()=>t.import("./Employees-legacy.D2UjFtG7.js")),0,t.meta.url))),J=F.lazy((()=>R((()=>t.import("./SignUp-legacy.BZ_vjEA5.js")),0,t.meta.url))),Y=F.lazy((()=>R((()=>t.import("./PopUp-legacy.izHI1h_Y.js")),0,t.meta.url))),Q=()=>i.jsxs(i.Fragment,{children:[i.jsx(F.Suspense,{fallback:i.jsx(i.Fragment,{}),children:i.jsx(V,{})}),i.jsx(F.Suspense,{fallback:i.jsx(i.Fragment,{}),children:i.jsx(Y,{})}),i.jsxs(z,{component:"div",className:"main__container",children:[i.jsx(F.Suspense,{fallback:i.jsx(i.Fragment,{}),children:i.jsx(q,{})}),i.jsx(F.Suspense,{fallback:i.jsx(i.Fragment,{}),children:i.jsx(J,{})})]})]}),X=e("n",{id:1,firstName:"1234",lastName:"5544545",maidenName:"Smith",age:30,gender:"male",email:"john.doe@example.com",phone:"+1234567890",birthDate:"1993-01-01",image:"https://example.com/avatar.jpg",address:{address:"123 Main St",city:"Anytown",coordinates:{lat:40.7128,lng:-74.006},postalCode:"12345",state:"NY"},macAddress:"00:1B:44:11:3A:B7",university:"Example University",bank:{cardExpire:"12/25",cardNumber:"1234-5678-9876-5432",cardType:"Visa",currency:"USD",iban:"US29NWBK60161331926819"},company:{address:{address:"456 Corporate Blvd",city:"Business City",coordinates:{lat:37.7749,lng:-122.4194},postalCode:"67890",state:"CA"},department:"Engineering",name:"Tech Corp",title:"Software Engineer"},ein:"12-3456789",ssn:"123-45-6789",userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",username:"johndoe",password:"password123",bloodGroup:"A+",height:180,weight:75,eyeColor:"brown",hair:{color:"black",type:"straight"},domain:"example.com",ip:"192.168.1.1"}),ee=F.createContext(void 0),te=({children:e})=>{const[t,r]=F.useState("light"),[a,o]=F.useState(6),[n,s]=F.useState([]),[l,p]=F.useState(!0),[d,c]=F.useState(!1),m=F.useCallback((()=>{r((e=>"light"===e?"dark":"light"))}),[]),u=F.useCallback((()=>{c(!0),setTimeout((()=>{c(!1)}),3e3)}),[]),h=F.useCallback((async e=>{s((t=>[e,...t]));try{const t=await fetch("http://dummyjson.com/users/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:e.firstName,lastName:e.lastName,image:e.image,email:e.email,phone:e.phone,company:{...X.company,title:e.company.title}})});await t.json()}catch(t){}}),[]),x=F.useCallback((async()=>{p(!0),await fetch(`https://dummyjson.com/users?limit=${a.toString()}&skip=${n.length.toString()}`).then((e=>{if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()})).then((e=>{s((t=>[...t,...e.users])),p(!1)})).catch((e=>{}))}),[a,n]);return F.useEffect((()=>{x()}),[]),i.jsx(ee.Provider,{value:{theme:t,toggleTheme:m,setTheme:r,employeesToShow:a,setEmployeesToShow:o,employeesList:n,setEmployeesList:s,addEmployees:h,fetchEmployees:x,loading:l,openPopup:d,showPopup:u},children:e})},re=e("u",(()=>{const e=F.useContext(ee);if(!e)throw new Error("GlobalContext is not found");return e})),ae={fontSize:"16px",lineHeight:"1.625"},oe={...ae,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical"},ne=c({palette:{primary:{main:"rgba(0, 0, 0, 0.87)",light:"rgba(0, 0, 0, 0.87)",dark:"#ffffff"},secondary:{main:"#ffffff",light:"#ffffff",dark:"#000000"},accent:{main:"#0E1F3D",light:"#0E1F3D",dark:"#ffffff"}},typography:{fontFamily:"Nunito, sans-serif",h1:{color:"#ffffff",fontSize:"40px",lineHeight:"1"},main:ae,h2:{fontSize:"40px",lineHeight:"1",textAlign:"center",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},subtitle1:oe},custom:{maxWidth:"1172px"},components:{MuiButton:{styleOverrides:{root:{borderRadius:"80px",padding:"0px 5px",minWidth:"100px",height:"34px",fontSize:"16px","&:disabled":{color:"#ffffff",background:"#B4B4B4"}}},variants:[{props:{variant:"contained",className:"more-button"},style:{display:"block",width:"120px",margin:"auto",textTransform:"none"}},{props:{variant:"outlined"},style:{display:"block",textTransform:"none",border:"1px solid #01636F",borderRadius:"4px 0px 0px 4px",padding:"14px 15px",height:"auto"}}]},MuiAppBar:{styleOverrides:{root:{padding:"13px 16px",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",position:"relative"}}},MuiContainer:{styleOverrides:{root:({ownerState:e})=>({...e.className?.includes("main__container")&&{[ne.breakpoints.up("xs")]:{maxWidth:ne.custom.maxWidth,padding:"0px"},[ne.breakpoints.up("sm")]:{padding:"0px"},[ne.breakpoints.up("lg")]:{maxWidth:ne.custom.maxWidth}},...e.className?.includes("header__wrapper")&&{alignItems:"center",justifyContent:"space-between",[ne.breakpoints.up("xs")]:{display:"flex"}},..."flex-container"===e.className&&{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0px",padding:"0px"},..."flex-container header__container"===e.className&&{width:"100%",[ne.breakpoints.up("xs")]:{display:"grid",gap:"10px",padding:"0px",justifyContent:"center"},[ne.breakpoints.up("sm")]:{display:"flex",justifyContent:"space-between"}},..."hero"===e.className&&{display:"block",[ne.breakpoints.up("xs")]:{maxWidth:ne.custom.maxWidth,backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",padding:"73px 16px"},[ne.breakpoints.up("sm")]:{padding:"102px 16px"},[ne.breakpoints.up("md")]:{padding:"177px 16px"}},..."hero__wrapper"===e.className&&{[ne.breakpoints.up("xs")]:{textAlign:"center",maxWidth:"380px",padding:"0px"}},...e.className?.includes("section")&&{[ne.breakpoints.up("xs")]:{marginTop:"50px"},[ne.breakpoints.up("sm")]:{marginTop:"70px",padding:"0px 16px"}},..."employee__container"===e.className&&{[ne.breakpoints.up("sm")]:{padding:"0px"}},..."sign-up__form"===e.className&&{display:"grid",gap:"50px",maxWidth:"380px",[ne.breakpoints.up("sm")]:{padding:"0px"},[ne.breakpoints.up("lg")]:{maxWidth:"380px"}},..."fileLoader__wrapper"===e.className&&{display:"flex",alignItems:"center",borderRadius:"4px",border:"1px solid #00BDD3",padding:"0px",[ne.breakpoints.up("sm")]:{padding:"0px"}}})}},MuiList:{styleOverrides:{root:()=>({padding:"0px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(282px, 1fr))",justifyContent:"space-between",alignItems:"stretch",gridAutoRows:"1fr",marginBottom:"50px",gap:"29px",[ne.breakpoints.up("xs")]:{gap:"20px"},[ne.breakpoints.up("sm")]:{gap:"16px"},[ne.breakpoints.up("md")]:{gap:"29px"}})}},MuiListItem:{styleOverrides:{root:{padding:"0px",flexDirection:"column",justifyContent:"stretch",width:"100%"}}},MuiCard:{styleOverrides:{root:{textAlign:"center",borderRadius:"10px",background:"#ffffff",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",width:"100%","&:hover":{outline:"2px solid #000000"}}}},MuiCardContent:{styleOverrides:{root:{padding:"20px",display:"grid",gap:"20px",":last-child":{paddingBottom:"20px"}}}},MuiAvatar:{styleOverrides:{root:{margin:"auto",width:"70px",height:"70px"}}},MuiLink:{styleOverrides:{root:{wordBreak:"break-word",overflowWrap:"break-word","&:hover":{color:"blue"}}}},MuiTooltip:{defaultProps:{PopperProps:{modifiers:[{name:"offset",options:{offset:[0,-15]}}]}},styleOverrides:{tooltip:{fontSize:"16px"}}},MuiTextField:{styleOverrides:{root:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#00BDD3"},"&:hover fieldset":{borderColor:"#0E1F3D"},"&.Mui-focused fieldset":{borderColor:"#023573"},"&.Mui-error.Mui-focused fieldset":{borderColor:"#d32f2f"},"&.Mui-error fieldset":{borderColor:"#d32f2f"}}}}},MuiRadio:{styleOverrides:{root:{color:"#D0CFCF","&.Mui-checked":{color:"#00BDD3"}}}}},breakpoints:{values:{xs:0,sm:450,md:960,lg:1200,xl:1920}}}),ie=c(ne,{palette:{mode:"light",primary:{main:ne.palette.primary.light},secondary:{main:ne.palette.secondary.light},accent:{main:ne.palette.accent.light},background:{default:"#f8f8f8"}},typography:{...ne.typography,h2:{color:ne.palette.primary.light}},components:{MuiButton:{variants:[...ne.components?.MuiButton?.variants||[],{props:{variant:"contained"},style:{backgroundColor:ne.palette.accent.light,color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:ne.palette.secondary.light}}},MuiCard:{styleOverrides:{root:{background:"#ffffff"}}},MuiFormLabel:{styleOverrides:{root:{color:ne.palette.primary.light}}},MuiFormHelperText:{styleOverrides:{root:{color:ne.palette.primary.light}}},MuiFormControlLabel:{styleOverrides:{label:{color:ne.palette.primary.light}}}}}),se=c(ne,{palette:{mode:"dark",primary:{main:ne.palette.primary.dark},secondary:{main:ne.palette.secondary.dark},accent:{main:ne.palette.accent.dark},background:{default:"#1B1B1B"}},typography:{...ne.typography,h2:{color:ne.palette.primary.dark}},components:{MuiButton:{variants:[...ne.components?.MuiButton?.variants||[],{props:{variant:"contained"},style:{backgroundColor:"#01636F",color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:ne.palette.secondary.dark}}},MuiCard:{styleOverrides:{root:{background:"#565656"}}},MuiFormLabel:{styleOverrides:{root:{color:ne.palette.primary.dark}}},MuiFormHelperText:{styleOverrides:{root:{color:ne.palette.primary.dark}}},MuiFormControlLabel:{styleOverrides:{label:{color:ne.palette.primary.dark}}}}});!function(e,t={}){const{breakpoints:o=["sm","md","lg"],disableAlign:n=!1,factor:i=2,variants:s=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,l=r({},e);l.typography=r({},l.typography);const p=l.typography,d=(c=p.htmlFontSize,(e,t)=>{const r=H(e);if(r===t)return e;let a=D(e);"px"!==r&&("em"===r||"rem"===r)&&(a=D(e)*D(c));let o=a;if("px"!==t)if("em"===t)o=a/D(c);else{if("rem"!==t)return e;o=a/D(c)}return parseFloat(o.toFixed(5))+t});var c;const m=o.map((e=>l.breakpoints.values[e]));s.forEach((e=>{const t=p[e],o=parseFloat(d(t.fontSize,"rem"));if(o<=1)return;const s=o,l=1+(s-1)/i;let{lineHeight:c}=t;if(!A(c)&&!n)throw new Error(a(6));A(c)||(c=parseFloat(d(c,"rem"))/parseFloat(o));let u=null;n||(u=e=>function({size:e,grid:t}){const r=e-e%t,a=r+t;return e-r<a-e?r:a}({size:e,grid:L({pixels:4,lineHeight:c,htmlFontSize:p.htmlFontSize})})),p[e]=r({},t,function({cssProperty:e,min:t,max:r,unit:a="rem",breakpoints:o=[600,900,1200],transform:n=null}){const i={[e]:`${t}${a}`},s=(r-t)/o[o.length-1];return o.forEach((r=>{let o=t+s*r;null!==n&&(o=n(o)),i[`@media (min-width:${r}px)`]={[e]:`${Math.round(1e4*o)/1e4}${a}`}})),i}({cssProperty:"fontSize",min:l,max:s,unit:"rem",breakpoints:m,transform:u}))}))}(ne);const le=F.forwardRef((({title:e,titleId:t,...r},a)=>F.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":t,...r},e?F.createElement("title",{id:t},e):null,F.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.5121 9.42749H18.579C22.6696 9.42749 24.715 9.42749 25.864 10.661C27.0128 11.8946 26.7425 13.8004 26.2019 17.6119L25.6892 21.2264C25.2652 24.2154 25.0533 25.7099 23.9658 26.6049C22.8783 27.4999 21.2743 27.4999 18.0663 27.4999H11.0248C7.81681 27.4999 6.21284 27.4999 5.12534 26.6049C4.03783 25.7099 3.82584 24.2154 3.40187 21.2264L2.88918 17.6119C2.34854 13.8004 2.07822 11.8946 3.22713 10.661C4.37604 9.42749 6.42138 9.42749 10.5121 9.42749ZM9.69704 22.5001C9.69704 21.9824 10.1493 21.5626 10.7071 21.5626H18.384C18.9418 21.5626 19.394 21.9824 19.394 22.5001C19.394 23.0179 18.9418 23.4376 18.384 23.4376H10.7071C10.1493 23.4376 9.69704 23.0179 9.69704 22.5001Z",fill:"current"}),F.createElement("g",{opacity:.4},F.createElement("path",{d:"M10.3152 2.50001H18.7758C19.0576 2.49993 19.2738 2.49988 19.4626 2.51893C20.8054 2.6544 21.9044 3.48697 22.3706 4.60847H6.72046C7.18654 3.48697 8.28564 2.6544 9.62845 2.51893C9.81731 2.49988 10.0334 2.49993 10.3152 2.50001Z",fill:"current"})),F.createElement("g",{opacity:.7},F.createElement("path",{d:"M7.64942 5.90332C5.96382 5.90332 4.58167 6.95301 4.12042 8.34556C4.11081 8.37458 4.1016 8.40377 4.09277 8.43308C4.57538 8.28237 5.07765 8.18391 5.58609 8.1167C6.89563 7.94356 8.55059 7.94365 10.4731 7.94376H10.6166H18.8271C20.7495 7.94365 22.4046 7.94356 23.714 8.1167C24.2225 8.18391 24.7248 8.28237 25.2074 8.43308C25.1985 8.40377 25.1893 8.37458 25.1797 8.34556C24.7185 6.95301 23.3363 5.90332 21.6508 5.90332H7.64942Z",fill:"current"}))))),pe=F.memo((()=>{const e=m();return i.jsxs(B,{component:j,to:"/",underline:"none",color:e.palette.primary.main,alignItems:"end",display:"flex",children:[i.jsx(le,{fill:e.palette.accent.main,width:"30",height:"30"}),i.jsx(E,{variant:"main",sx:{marginLeft:"4px"},children:"MATERIAL"})]})}));var de={},ce=h;Object.defineProperty(de,"__esModule",{value:!0});var me=de.default=void 0,ue=ce(u()),he=i;me=de.default=(0,ue.default)((0,he.jsx)("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"}),"WbSunny");var xe={},ge=h;Object.defineProperty(xe,"__esModule",{value:!0});var fe=xe.default=void 0,ye=ge(u()),be=i;fe=xe.default=(0,ye.default)((0,be.jsx)("path",{d:"M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2"}),"ModeNight");const ke=F.memo((()=>{const{toggleTheme:e}=re(),t=m();return i.jsx(x,{"aria-label":"change theme",onClick:e,sx:{width:"fit-content",margin:"auto",padding:"5px"},children:"light"===t.palette.mode?i.jsx(me,{sx:{color:t.palette.primary.main}}):i.jsx(fe,{sx:{color:t.palette.primary.main}})})})),ve=F.memo((()=>{const[e,t]=F.useState(!1),r=m(),a=g(r.breakpoints.down("sm")),o=e=>r=>{("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&t(e)},n=["Users","Sign up"],s=()=>i.jsxs(z,{component:"div",className:"flex-container header__container",onClick:o(!1),onKeyDown:o(!1),sx:{maxWidth:"260px",width:"100%",margin:"0px",[r.breakpoints.up("lg")]:{maxWidth:"260px",width:"100%"}},children:[i.jsx(ke,{}),i.jsx(z,{component:"div","aria-label":"header menu",className:"flex-container header__container",sx:{maxWidth:"210px",margin:"0px",justifyContent:"space-between"},children:n.map(((e,t)=>i.jsx(O,{variant:"contained",component:_,to:`#${e}`,smooth:!0,children:e},t)))})]});return i.jsxs("div",{children:[i.jsx(f,{className:"header",sx:{backgroundImage:"none"},children:i.jsxs(z,{className:"header__wrapper main__container",children:[i.jsx(pe,{}),a?i.jsx(x,{sx:{color:r.palette.primary.main,padding:"2px"},edge:"start","aria-label":"menu",onClick:o(!0),children:i.jsx(y,{sx:{width:"30px",height:"30px"}})}):s()]})}),i.jsx(b,{anchor:"left",open:e,onClose:o(!1),PaperProps:{sx:{backgroundColor:r.palette.background.default,width:"100%",maxWidth:"260px"}},children:i.jsxs(z,{sx:{maxWidth:260},children:[i.jsx(x,{onClick:o(!1),sx:{color:r.palette.primary.main},children:i.jsx(k,{})}),s()]})})]})})),je=()=>i.jsxs(i.Fragment,{children:[i.jsx(ve,{}),i.jsx(z,{component:"main",className:"main__container pageContainer__main",children:i.jsx(C,{})})]});function Ce(){const{theme:e,setTheme:t}=re(),r=g("(prefers-color-scheme: dark)");return F.useEffect((()=>{t(r?"dark":"light")}),[r]),i.jsx(i.Fragment,{children:i.jsxs(I,{theme:"light"===e?ie:se,children:[i.jsx(Z,{}),i.jsxs(w,{children:[i.jsx(S,{path:"/",element:i.jsx(je,{}),children:i.jsx(S,{index:!0,element:i.jsx(Q,{})})}),i.jsx(S,{path:"*",element:i.jsx("h1",{children:"Page not found"})})]})]})})}N(document.getElementById("root")).render(i.jsx(te,{children:i.jsx(M,{children:i.jsx(Ce,{})})}))}}}));