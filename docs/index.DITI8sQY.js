const __vite__fileDeps=["./Employees.dHLn9klQ.js","./muiHeader.K0GI9Lig.js","./reactHookForm.CyKqO0fe.js","./reactDom.jVsZHl2L.js","./muiCommon.CuGAWNW0.js","./List.B9pb5e9g.js","./reactRouterDom.D_X8HglC.js","./reactHashLink.DsdfKRjE.js","./SignUp.Cu4u4JT-.js","./PopUp.BQmUSG--.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as b,o as re,b as oe,T as S,j as t,p as ne,G as ae,q as se,u as ie,t as T,v as O,w as z,x as $,I as M,y as H,A as le,z as pe,C as ce}from"./muiHeader.K0GI9Lig.js";import{r as de}from"./reactDom.jVsZHl2L.js";import{L as me,O as ue,R as he,a as _,H as fe}from"./reactRouterDom.D_X8HglC.js";import{r as l}from"./reactHookForm.CyKqO0fe.js";import{H as U}from"./reactHashLink.DsdfKRjE.js";import{C as v,T as E,B as G,L as xe}from"./muiCommon.CuGAWNW0.js";function nt(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();var q,B=de;q=B.createRoot,B.hydrateRoot;function N(e){return String(parseFloat(e)).length===String(e).length}function ge(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function k(e){return parseFloat(e)}function ye(e){return(r,o)=>{const s=ge(r);if(s===o)return r;let a=k(r);s!=="px"&&(s==="em"||s==="rem")&&(a=k(r)*k(e));let i=a;if(o!=="px")if(o==="em")i=a/k(e);else if(o==="rem")i=a/k(e);else return r;return parseFloat(i.toFixed(5))+o}}function be({size:e,grid:r}){const o=e-e%r,s=o+r;return e-o<s-e?o:s}function ve({lineHeight:e,pixels:r,htmlFontSize:o}){return r/(e*o)}function ke({cssProperty:e,min:r,max:o,unit:s="rem",breakpoints:a=[600,900,1200],transform:i=null}){const p={[e]:"".concat(r).concat(s)},m=(o-r)/a[a.length-1];return a.forEach(c=>{let h=r+m*c;i!==null&&(h=i(h)),p["@media (min-width:".concat(c,"px)")]={[e]:"".concat(Math.round(h*1e4)/1e4).concat(s)}}),p}function Ce(e,r={}){const{breakpoints:o=["sm","md","lg"],disableAlign:s=!1,factor:a=2,variants:i=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=r,p=b({},e);p.typography=b({},p.typography);const m=p.typography,c=ye(m.htmlFontSize),h=o.map(x=>p.breakpoints.values[x]);return i.forEach(x=>{const C=m[x],u=parseFloat(c(C.fontSize,"rem"));if(u<=1)return;const f=u,g=1+(f-1)/a;let{lineHeight:d}=C;if(!N(d)&&!s)throw new Error(re(6));N(d)||(d=parseFloat(c(d,"rem"))/parseFloat(u));let y=null;s||(y=j=>be({size:j,grid:ve({pixels:4,lineHeight:d,htmlFontSize:m.htmlFontSize})})),m[x]=b({},C,ke({cssProperty:"fontSize",min:g,max:f,unit:"rem",breakpoints:h,transform:y}))}),p}const je=["theme"];function we(e){let{theme:r}=e,o=oe(e,je);const s=r[S];return t.jsx(ne,b({},o,{themeId:s?S:void 0,theme:s||r}))}const _e="modulepreload",Se=function(e,r){return new URL(e,r).href},R={},w=function(r,o,s){let a=Promise.resolve();if(o&&o.length>0){const i=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),m=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));a=Promise.all(o.map(c=>{if(c=Se(c,s),c in R)return;R[c]=!0;const h=c.endsWith(".css"),x=h?'[rel="stylesheet"]':"";if(!!s)for(let f=i.length-1;f>=0;f--){const g=i[f];if(g.href===c&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(c,'"]').concat(x)))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":_e,h||(u.as="script",u.crossOrigin=""),u.href=c,m&&u.setAttribute("nonce",m),document.head.appendChild(u),h)return new Promise((f,g)=>{u.addEventListener("load",f),u.addEventListener("error",()=>g(new Error("Unable to preload CSS for ".concat(c))))})}))}return a.then(()=>r()).catch(i=>{const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=i,window.dispatchEvent(p),!p.defaultPrevented)throw i})};function Me(e){return t.jsx(ae,b({},e,{defaultTheme:se,themeId:S}))}const Ee=(e,r)=>b({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!e.vars&&{colorScheme:e.palette.mode}),Te=e=>b({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Oe=(e,r=!1)=>{var o;const s={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([p,m])=>{var c;s[e.getColorSchemeSelector(p).replace(/\s*&/,"")]={colorScheme:(c=m.palette)==null?void 0:c.mode}});let a=b({html:Ee(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:b({margin:0},Te(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},s);const i=(o=e.components)==null||(o=o.MuiCssBaseline)==null?void 0:o.styleOverrides;return i&&(a=[a,i]),a};function Le(e){const r=ie({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:s=!1}=r;return t.jsxs(l.Fragment,{children:[t.jsx(Me,{styles:a=>Oe(a,s)}),o]})}const A=""+new URL("img/hero-bunner.jpg",import.meta.url).href,Fe=l.memo(()=>t.jsx(v,{component:"div",className:"hero",sx:{backgroundImage:"url(".concat(A,")"),"@supports (background-image: url('example.webp'))":{backgroundImage:"url(".concat(A.replace(/\.[^/.]+$/,"")+".webp",")")}},children:t.jsxs(v,{component:"div",className:"hero__wrapper",children:[t.jsxs(E,{variant:"h1",children:["Introducing the ",t.jsx("br",{})," MUI Library"]}),t.jsx(E,{variant:"main",sx:{color:"#ffffff",marginTop:"21px",marginBottom:"57px",display:"block"},children:"Now the MUI library is very popular among the development of UI interfaces in React. Therefore, a good React development specialist must know the UI component MUI library, since it is often in demand"}),t.jsx(G,{variant:"contained",sx:{margin:"auto"},component:U,to:"#Sign up",smooth:!0,children:"Sign up"})]})})),Be=l.lazy(()=>w(()=>import("./Employees.dHLn9klQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)),Ne=l.lazy(()=>w(()=>import("./SignUp.Cu4u4JT-.js"),__vite__mapDeps([8,1,2,3,4,5,6,7]),import.meta.url)),Re=l.lazy(()=>w(()=>import("./PopUp.BQmUSG--.js"),__vite__mapDeps([9,1,2,3,4,6,7]),import.meta.url)),Ae=()=>t.jsxs(t.Fragment,{children:[t.jsx(Fe,{}),t.jsx(l.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(Re,{})}),t.jsxs(v,{component:"div",className:"main__container",children:[t.jsx(l.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(Be,{})}),t.jsx(l.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(Ne,{})})]})]}),Pe={id:1,firstName:"1234",lastName:"5544545",maidenName:"Smith",age:30,gender:"male",email:"john.doe@example.com",phone:"+1234567890",birthDate:"1993-01-01",image:"https://example.com/avatar.jpg",address:{address:"123 Main St",city:"Anytown",coordinates:{lat:40.7128,lng:-74.006},postalCode:"12345",state:"NY"},macAddress:"00:1B:44:11:3A:B7",university:"Example University",bank:{cardExpire:"12/25",cardNumber:"1234-5678-9876-5432",cardType:"Visa",currency:"USD",iban:"US29NWBK60161331926819"},company:{address:{address:"456 Corporate Blvd",city:"Business City",coordinates:{lat:37.7749,lng:-122.4194},postalCode:"67890",state:"CA"},department:"Engineering",name:"Tech Corp",title:"Software Engineer"},ein:"12-3456789",ssn:"123-45-6789",userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",username:"johndoe",password:"password123",bloodGroup:"A+",height:180,weight:75,eyeColor:"brown",hair:{color:"black",type:"straight"},domain:"example.com",ip:"192.168.1.1"},V=l.createContext(void 0),Ie=({children:e})=>{const[r,o]=l.useState("light"),[s,a]=l.useState(6),[i,p]=l.useState([]),[m,c]=l.useState(!0),[h,x]=l.useState(!1),C=l.useCallback(async()=>{o(d=>d==="light"?"dark":"light")},[]),u=l.useCallback(async()=>{x(!0),setTimeout(()=>{x(!1)},3e3)},[]),f=l.useCallback(async d=>{p(y=>[d,...y]);try{const j=await(await fetch("http://dummyjson.com/users/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:d.firstName,lastName:d.lastName,image:d.image,email:d.email,phone:d.phone,company:{...Pe.company,title:d.company.title}})})).json();console.log(j)}catch(y){console.error("Error adding employee:",y)}},[]),g=l.useCallback(()=>{const d=new Worker(new URL(""+new URL("assets/dataWorker-By7GMqLW.js",import.meta.url).href,import.meta.url),{type:"module"});c(!0),d.onmessage=j=>{const{success:Y,data:X,error:ee}=j.data;Y?p(te=>[...te,...X]):console.error("Error fetching users:",ee),c(!1),d.terminate()};const y="https://dummyjson.com/users?limit=".concat(s.toString(),"&skip=").concat(i.length.toString());d.postMessage({url:y})},[s,i]);return l.useEffect(()=>{g()},[]),t.jsx(V.Provider,{value:{theme:r,toggleTheme:C,setTheme:o,employeesToShow:s,setEmployeesToShow:a,employeesList:i,setEmployeesList:p,addEmployees:f,fetchEmployees:g,loading:m,openPopup:h,showPopup:u},children:e})},K=()=>{const e=l.useContext(V);if(!e)throw new Error("GlobalContext is not found");return e},Z={fontSize:"16px",lineHeight:"1.625"},We={...Z,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical"},n=T({palette:{primary:{main:"rgba(0, 0, 0, 0.87)",light:"rgba(0, 0, 0, 0.87)",dark:"#ffffff"},secondary:{main:"#ffffff",light:"#ffffff",dark:"#000000"},accent:{main:"#0E1F3D",light:"#0E1F3D",dark:"#ffffff"}},typography:{fontFamily:"Nunito, sans-serif",h1:{color:"#ffffff",fontSize:"40px",lineHeight:"1"},main:Z,h2:{fontSize:"40px",lineHeight:"1",textAlign:"center",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},subtitle1:We},custom:{maxWidth:"1172px"},components:{MuiButton:{styleOverrides:{root:{borderRadius:"80px",padding:"0px 5px",minWidth:"100px",height:"34px",fontSize:"16px","&:disabled":{color:"#ffffff",background:"#B4B4B4"}}},variants:[{props:{variant:"contained",className:"more-button"},style:{display:"block",width:"120px",margin:"auto",textTransform:"none"}},{props:{variant:"outlined"},style:{display:"block",textTransform:"none",border:"1px solid #01636F",borderRadius:"4px 0px 0px 4px",padding:"14px 15px",height:"auto"}}]},MuiAppBar:{styleOverrides:{root:{padding:"13px 16px",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",position:"relative"}}},MuiContainer:{styleOverrides:{root:({ownerState:e})=>{var r,o,s;return{...((r=e.className)==null?void 0:r.includes("main__container"))&&{[n.breakpoints.up("xs")]:{maxWidth:n.custom.maxWidth,padding:"0px"},[n.breakpoints.up("sm")]:{padding:"0px"},[n.breakpoints.up("lg")]:{maxWidth:n.custom.maxWidth}},...((o=e.className)==null?void 0:o.includes("header__wrapper"))&&{alignItems:"center",justifyContent:"space-between",[n.breakpoints.up("xs")]:{display:"flex"}},...e.className==="flex-container"&&{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0px",padding:"0px"},...e.className==="flex-container header__container"&&{width:"100%",[n.breakpoints.up("xs")]:{display:"grid",gap:"10px",padding:"0px",justifyContent:"center"},[n.breakpoints.up("sm")]:{display:"flex",justifyContent:"space-between"}},...e.className==="hero"&&{display:"block",[n.breakpoints.up("xs")]:{maxWidth:n.custom.maxWidth,backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",padding:"73px 16px"},[n.breakpoints.up("sm")]:{padding:"102px 16px"},[n.breakpoints.up("md")]:{padding:"177px 16px"}},...e.className==="hero__wrapper"&&{[n.breakpoints.up("xs")]:{textAlign:"center",maxWidth:"380px",padding:"0px"}},...((s=e.className)==null?void 0:s.includes("section"))&&{[n.breakpoints.up("xs")]:{marginTop:"50px"},[n.breakpoints.up("sm")]:{marginTop:"70px",padding:"0px 16px"}},...e.className==="employee__container"&&{[n.breakpoints.up("sm")]:{padding:"0px"}},...e.className==="sign-up__form"&&{display:"grid",gap:"50px",maxWidth:"380px",[n.breakpoints.up("sm")]:{padding:"0px"},[n.breakpoints.up("lg")]:{maxWidth:"380px"}},...e.className==="fileLoader__wrapper"&&{display:"flex",alignItems:"center",borderRadius:"4px",border:"1px solid #00BDD3",padding:"0px",[n.breakpoints.up("sm")]:{padding:"0px"}}}}}},MuiList:{styleOverrides:{root:()=>({padding:"0px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(282px, 1fr))",justifyContent:"space-between",alignItems:"stretch",gridAutoRows:"1fr",marginBottom:"50px",gap:"29px",[n.breakpoints.up("xs")]:{gap:"20px"},[n.breakpoints.up("sm")]:{gap:"16px"},[n.breakpoints.up("md")]:{gap:"29px"}})}},MuiListItem:{styleOverrides:{root:{padding:"0px",flexDirection:"column",justifyContent:"stretch",width:"100%"}}},MuiCard:{styleOverrides:{root:{textAlign:"center",borderRadius:"10px",background:"#ffffff",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",width:"100%","&:hover":{outline:"2px solid #000000"}}}},MuiCardContent:{styleOverrides:{root:{padding:"20px",display:"grid",gap:"20px",":last-child":{paddingBottom:"20px"}}}},MuiAvatar:{styleOverrides:{root:{margin:"auto",width:"70px",height:"70px"}}},MuiLink:{styleOverrides:{root:{wordBreak:"break-word",overflowWrap:"break-word","&:hover":{color:"blue"}}}},MuiTooltip:{defaultProps:{PopperProps:{modifiers:[{name:"offset",options:{offset:[0,-15]}}]}},styleOverrides:{tooltip:{fontSize:"16px"}}},MuiTextField:{styleOverrides:{root:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#00BDD3"},"&:hover fieldset":{borderColor:"#0E1F3D"},"&.Mui-focused fieldset":{borderColor:"#023573"},"&.Mui-error.Mui-focused fieldset":{borderColor:"#d32f2f"},"&.Mui-error fieldset":{borderColor:"#d32f2f"}}}}},MuiRadio:{styleOverrides:{root:{color:"#D0CFCF","&.Mui-checked":{color:"#00BDD3"}}}}},breakpoints:{values:{xs:0,sm:450,md:960,lg:1200,xl:1920}}});var P,I;const De=T(n,{palette:{mode:"light",primary:{main:n.palette.primary.light},secondary:{main:n.palette.secondary.light},accent:{main:n.palette.accent.light},background:{default:"#f8f8f8"}},typography:{...n.typography,h2:{color:n.palette.primary.light}},components:{MuiButton:{variants:[...((I=(P=n.components)==null?void 0:P.MuiButton)==null?void 0:I.variants)||[],{props:{variant:"contained"},style:{backgroundColor:n.palette.accent.light,color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:n.palette.secondary.light}}},MuiCard:{styleOverrides:{root:{background:"#ffffff"}}},MuiFormLabel:{styleOverrides:{root:{color:n.palette.primary.light}}},MuiFormHelperText:{styleOverrides:{root:{color:n.palette.primary.light}}},MuiFormControlLabel:{styleOverrides:{label:{color:n.palette.primary.light}}}}});var W,D;const ze=T(n,{palette:{mode:"dark",primary:{main:n.palette.primary.dark},secondary:{main:n.palette.secondary.dark},accent:{main:n.palette.accent.dark},background:{default:"#1B1B1B"}},typography:{...n.typography,h2:{color:n.palette.primary.dark}},components:{MuiButton:{variants:[...((D=(W=n.components)==null?void 0:W.MuiButton)==null?void 0:D.variants)||[],{props:{variant:"contained"},style:{backgroundColor:"#01636F",color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:n.palette.secondary.dark}}},MuiCard:{styleOverrides:{root:{background:"#565656"}}},MuiFormLabel:{styleOverrides:{root:{color:n.palette.primary.dark}}},MuiFormHelperText:{styleOverrides:{root:{color:n.palette.primary.dark}}},MuiFormControlLabel:{styleOverrides:{label:{color:n.palette.primary.dark}}}}});Ce(n);const $e=({title:e,titleId:r,...o},s)=>l.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":r,...o},e?l.createElement("title",{id:r},e):null,l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.5121 9.42749H18.579C22.6696 9.42749 24.715 9.42749 25.864 10.661C27.0128 11.8946 26.7425 13.8004 26.2019 17.6119L25.6892 21.2264C25.2652 24.2154 25.0533 25.7099 23.9658 26.6049C22.8783 27.4999 21.2743 27.4999 18.0663 27.4999H11.0248C7.81681 27.4999 6.21284 27.4999 5.12534 26.6049C4.03783 25.7099 3.82584 24.2154 3.40187 21.2264L2.88918 17.6119C2.34854 13.8004 2.07822 11.8946 3.22713 10.661C4.37604 9.42749 6.42138 9.42749 10.5121 9.42749ZM9.69704 22.5001C9.69704 21.9824 10.1493 21.5626 10.7071 21.5626H18.384C18.9418 21.5626 19.394 21.9824 19.394 22.5001C19.394 23.0179 18.9418 23.4376 18.384 23.4376H10.7071C10.1493 23.4376 9.69704 23.0179 9.69704 22.5001Z",fill:"current"}),l.createElement("g",{opacity:.4},l.createElement("path",{d:"M10.3152 2.50001H18.7758C19.0576 2.49993 19.2738 2.49988 19.4626 2.51893C20.8054 2.6544 21.9044 3.48697 22.3706 4.60847H6.72046C7.18654 3.48697 8.28564 2.6544 9.62845 2.51893C9.81731 2.49988 10.0334 2.49993 10.3152 2.50001Z",fill:"current"})),l.createElement("g",{opacity:.7},l.createElement("path",{d:"M7.64942 5.90332C5.96382 5.90332 4.58167 6.95301 4.12042 8.34556C4.11081 8.37458 4.1016 8.40377 4.09277 8.43308C4.57538 8.28237 5.07765 8.18391 5.58609 8.1167C6.89563 7.94356 8.55059 7.94365 10.4731 7.94376H10.6166H18.8271C20.7495 7.94365 22.4046 7.94356 23.714 8.1167C24.2225 8.18391 24.7248 8.28237 25.2074 8.43308C25.1985 8.40377 25.1893 8.37458 25.1797 8.34556C24.7185 6.95301 23.3363 5.90332 21.6508 5.90332H7.64942Z",fill:"current"}))),He=l.forwardRef($e),Ue=l.memo(()=>{const e=O();return t.jsxs(xe,{component:me,to:"/",underline:"none",color:e.palette.primary.main,alignItems:"end",display:"flex",children:[t.jsx(He,{fill:e.palette.accent.main,width:"30",height:"30"}),t.jsx(E,{variant:"main",sx:{marginLeft:"4px"},children:"MATERIAL"})]})});var L={},Ge=$;Object.defineProperty(L,"__esModule",{value:!0});var J=L.default=void 0,qe=Ge(z()),Ve=t;J=L.default=(0,qe.default)((0,Ve.jsx)("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"}),"WbSunny");var F={},Ke=$;Object.defineProperty(F,"__esModule",{value:!0});var Q=F.default=void 0,Ze=Ke(z()),Je=t;Q=F.default=(0,Ze.default)((0,Je.jsx)("path",{d:"M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2"}),"ModeNight");const Qe=l.memo(()=>{const{toggleTheme:e}=K(),r=O();return t.jsx(M,{"aria-label":"change theme",onClick:e,sx:{width:"fit-content",margin:"auto",padding:"5px"},children:r.palette.mode==="light"?t.jsx(J,{sx:{color:r.palette.primary.main}}):t.jsx(Q,{sx:{color:r.palette.primary.main}})})}),Ye=l.lazy(()=>w(()=>import("./muiHeader.K0GI9Lig.js").then(e=>e.ag),__vite__mapDeps([1,2,3]),import.meta.url)),Xe=l.memo(()=>{const[e,r]=l.useState(!1),o=O(),s=H(o.breakpoints.down("sm")),a=m=>c=>{c.type==="keydown"&&(c.key==="Tab"||c.key==="Shift")||r(m)},i=["Users","Sign up"],p=()=>t.jsxs(v,{component:"div",className:"flex-container header__container",onClick:a(!1),onKeyDown:a(!1),sx:{maxWidth:"260px",width:"100%",margin:"0px",[o.breakpoints.up("lg")]:{maxWidth:"260px",width:"100%"}},children:[t.jsx(Qe,{}),t.jsx(v,{component:"div","aria-label":"header menu",className:"flex-container header__container",sx:{maxWidth:"210px",margin:"0px",justifyContent:"space-between"},children:i.map((m,c)=>t.jsx(G,{variant:"contained",component:U,to:"#".concat(m),smooth:!0,children:m},c))})]});return t.jsxs("div",{children:[t.jsx(le,{className:"header",sx:{backgroundImage:"none"},children:t.jsxs(v,{className:"header__wrapper main__container",children:[t.jsx(Ue,{}),s?t.jsx(M,{sx:{color:o.palette.primary.main,padding:"2px"},edge:"start","aria-label":"menu",onClick:a(!0),children:t.jsx(pe,{sx:{width:"30px",height:"30px"}})}):p()]})}),t.jsx(l.Suspense,{fallback:t.jsx(t.Fragment,{}),children:t.jsx(Ye,{anchor:"left",open:e,onClose:a(!1),PaperProps:{sx:{backgroundColor:o.palette.background.default,width:"100%",maxWidth:"260px"}},children:t.jsxs(v,{sx:{maxWidth:260},children:[t.jsx(M,{onClick:a(!1),sx:{color:o.palette.primary.main},children:t.jsx(ce,{})}),p()]})})})]})}),et=()=>t.jsxs(t.Fragment,{children:[t.jsx(Xe,{}),t.jsx(v,{component:"main",className:"main__container pageContainer__main",children:t.jsx(ue,{})})]});function tt(){const{theme:e,setTheme:r}=K(),o=H("(prefers-color-scheme: dark)");return l.useEffect(()=>{r(o?"dark":"light")},[o]),t.jsx(t.Fragment,{children:t.jsxs(we,{theme:e==="light"?De:ze,children:[t.jsx(Le,{}),t.jsxs(he,{children:[t.jsx(_,{path:"/",element:t.jsx(et,{}),children:t.jsx(_,{index:!0,element:t.jsx(Ae,{})})}),t.jsx(_,{path:"*",element:t.jsx("h1",{children:"Page not found"})})]})]})})}const rt=document.getElementById("root"),ot=q(rt);ot.render(t.jsx(Ie,{children:t.jsx(fe,{children:t.jsx(tt,{})})}));export{Me as G,nt as __vite_legacy_guard,ge as g,Pe as n,k as t,K as u};
