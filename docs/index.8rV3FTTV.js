const __vite__fileDeps=["./Employees.K0CmdZtf.js","./muiEmployees.DwwKykrJ.js","./reactHookForm.CyKqO0fe.js","./reactDom.jVsZHl2L.js","./muiCommon.PypXOZdT.js","./reactRouterDom.D_X8HglC.js","./reactHashLink.DsdfKRjE.js","./muiHeader.CHdvzhXN.js","./SignUp.DYWZGCPI.js","./PopUp.vQz4VlHc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{x as e,S as X,_ as b,U as ee,V as te,v as re,W as _,X as oe,H as M,M as D,Y as I,Z as ae}from"./muiEmployees.DwwKykrJ.js";import{r as ne}from"./reactDom.jVsZHl2L.js";import{L as se,O as ie,R as le,a as C,H as pe}from"./reactRouterDom.D_X8HglC.js";import{r as o}from"./reactHookForm.CyKqO0fe.js";import{H as P}from"./reactHashLink.DsdfKRjE.js";import{C as h,T as j,B as H,L as ce}from"./muiCommon.PypXOZdT.js";import{r as z,I as w,A as de,d as me,D as ue,a as he}from"./muiHeader.CHdvzhXN.js";function Ve(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))p(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function p(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();var $,L=ne;$=L.createRoot,L.hydrateRoot;const fe="modulepreload",xe=function(t,n){return new URL(t,n).href},B={},S=function(n,s,p){let a=Promise.resolve();if(s&&s.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),m=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.all(s.map(c=>{if(c=xe(c,p),c in B)return;B[c]=!0;const f=c.endsWith(".css"),v=f?'[rel="stylesheet"]':"";if(!!p)for(let x=i.length-1;x>=0;x--){const g=i[x];if(g.href===c&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(c,'"]').concat(v)))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":fe,f||(u.as="script",u.crossOrigin=""),u.href=c,m&&u.setAttribute("nonce",m),document.head.appendChild(u),f)return new Promise((x,g)=>{u.addEventListener("load",x),u.addEventListener("error",()=>g(new Error("Unable to preload CSS for ".concat(c))))})}))}return a.then(()=>n()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};function ge(t){return e.jsx(X,b({},t,{defaultTheme:ee,themeId:te}))}const ye=(t,n)=>b({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},n&&!t.vars&&{colorScheme:t.palette.mode}),be=t=>b({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),ve=(t,n=!1)=>{var s;const p={};n&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([l,m])=>{var c;p[t.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(c=m.palette)==null?void 0:c.mode}});let a=b({html:ye(t,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:b({margin:0},be(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},p);const i=(s=t.components)==null||(s=s.MuiCssBaseline)==null?void 0:s.styleOverrides;return i&&(a=[a,i]),a};function ke(t){const n=re({props:t,name:"MuiCssBaseline"}),{children:s,enableColorScheme:p=!1}=n;return e.jsxs(o.Fragment,{children:[e.jsx(ge,{styles:a=>ve(a,p)}),s]})}const N=""+new URL("img/hero-bunner.jpg",import.meta.url).href,Ce=o.memo(()=>e.jsx(h,{component:"div",className:"hero",sx:{backgroundImage:"url(".concat(N,")"),"@supports (background-image: url('example.webp'))":{backgroundImage:"url(".concat(N.replace(/\.[^/.]+$/,"")+".webp",")")}},children:e.jsxs(h,{component:"div",className:"hero__wrapper",children:[e.jsxs(j,{variant:"h1",children:["Introducing the ",e.jsx("br",{})," MUI Library"]}),e.jsx(j,{variant:"main",sx:{color:"#ffffff",marginTop:"21px",marginBottom:"57px",display:"block"},children:"Now the MUI library is very popular among the development of UI interfaces in React. Therefore, a good React development specialist must know the UI component MUI library, since it is often in demand"}),e.jsx(H,{variant:"contained",sx:{margin:"auto"},component:P,to:"#Sign up",smooth:!0,children:"Sign up"})]})})),je=o.lazy(()=>S(()=>import("./Employees.K0CmdZtf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)),we=o.lazy(()=>S(()=>import("./SignUp.DYWZGCPI.js"),__vite__mapDeps([8,1,2,3,4,7,5,6]),import.meta.url)),_e=o.lazy(()=>S(()=>import("./PopUp.vQz4VlHc.js"),__vite__mapDeps([9,1,2,3,7,4,5,6]),import.meta.url)),Me=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ce,{}),e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(_e,{})}),e.jsxs(h,{component:"div",className:"main__container",children:[e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(je,{})}),e.jsx(o.Suspense,{fallback:e.jsx(e.Fragment,{}),children:e.jsx(we,{})})]})]}),Se={id:1,firstName:"1234",lastName:"5544545",maidenName:"Smith",age:30,gender:"male",email:"john.doe@example.com",phone:"+1234567890",birthDate:"1993-01-01",image:"https://example.com/avatar.jpg",address:{address:"123 Main St",city:"Anytown",coordinates:{lat:40.7128,lng:-74.006},postalCode:"12345",state:"NY"},macAddress:"00:1B:44:11:3A:B7",university:"Example University",bank:{cardExpire:"12/25",cardNumber:"1234-5678-9876-5432",cardType:"Visa",currency:"USD",iban:"US29NWBK60161331926819"},company:{address:{address:"456 Corporate Blvd",city:"Business City",coordinates:{lat:37.7749,lng:-122.4194},postalCode:"67890",state:"CA"},department:"Engineering",name:"Tech Corp",title:"Software Engineer"},ein:"12-3456789",ssn:"123-45-6789",userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",username:"johndoe",password:"password123",bloodGroup:"A+",height:180,weight:75,eyeColor:"brown",hair:{color:"black",type:"straight"},domain:"example.com",ip:"192.168.1.1"},U=o.createContext(void 0),Ee=({children:t})=>{const[n,s]=o.useState("light"),[p,a]=o.useState(6),[i,l]=o.useState([]),[m,c]=o.useState(!0),[f,v]=o.useState(!1),T=o.useCallback(async()=>{s(d=>d==="light"?"dark":"light")},[]),u=o.useCallback(async()=>{v(!0),setTimeout(()=>{v(!1)},3e3)},[]),x=o.useCallback(async d=>{l(y=>[d,...y]);try{const k=await(await fetch("http://dummyjson.com/users/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:d.firstName,lastName:d.lastName,image:d.image,email:d.email,phone:d.phone,company:{...Se.company,title:d.company.title}})})).json();console.log(k)}catch(y){console.error("Error adding employee:",y)}},[]),g=o.useCallback(()=>{const d=new Worker(new URL(""+new URL("assets/dataWorker-By7GMqLW.js",import.meta.url).href,import.meta.url),{type:"module"});c(!0),d.onmessage=k=>{const{success:Z,data:Y,error:J}=k.data;Z?l(Q=>[...Q,...Y]):console.error("Error fetching users:",J),c(!1),d.terminate()};const y="https://dummyjson.com/users?limit=".concat(p.toString(),"&skip=").concat(i.length.toString());d.postMessage({url:y})},[p,i]);return o.useEffect(()=>{g()},[]),e.jsx(U.Provider,{value:{theme:n,toggleTheme:T,setTheme:s,employeesToShow:p,setEmployeesToShow:a,employeesList:i,setEmployeesList:l,addEmployees:x,fetchEmployees:g,loading:m,openPopup:f,showPopup:u},children:t})},G=()=>{const t=o.useContext(U);if(!t)throw new Error("GlobalContext is not found");return t},q={fontSize:"16px",lineHeight:"1.625"},Oe={...q,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical"},r=_({palette:{primary:{main:"rgba(0, 0, 0, 0.87)",light:"rgba(0, 0, 0, 0.87)",dark:"#ffffff"},secondary:{main:"#ffffff",light:"#ffffff",dark:"#000000"},accent:{main:"#0E1F3D",light:"#0E1F3D",dark:"#ffffff"}},typography:{fontFamily:"Nunito, sans-serif",h1:{color:"#ffffff",fontSize:"40px",lineHeight:"1"},main:q,h2:{fontSize:"40px",lineHeight:"1",textAlign:"center",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},subtitle1:Oe},custom:{maxWidth:"1172px"},components:{MuiButton:{styleOverrides:{root:{borderRadius:"80px",padding:"0px 5px",minWidth:"100px",height:"34px",fontSize:"16px","&:disabled":{color:"#ffffff",background:"#B4B4B4"}}},variants:[{props:{variant:"contained",className:"more-button"},style:{display:"block",width:"120px",margin:"auto",textTransform:"none"}},{props:{variant:"outlined"},style:{display:"block",textTransform:"none",border:"1px solid #01636F",borderRadius:"4px 0px 0px 4px",padding:"14px 15px",height:"auto"}}]},MuiAppBar:{styleOverrides:{root:{padding:"13px 16px",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",position:"relative"}}},MuiContainer:{styleOverrides:{root:({ownerState:t})=>{var n,s,p;return{...((n=t.className)==null?void 0:n.includes("main__container"))&&{[r.breakpoints.up("xs")]:{maxWidth:r.custom.maxWidth,padding:"0px"},[r.breakpoints.up("sm")]:{padding:"0px"},[r.breakpoints.up("lg")]:{maxWidth:r.custom.maxWidth}},...((s=t.className)==null?void 0:s.includes("header__wrapper"))&&{alignItems:"center",justifyContent:"space-between",[r.breakpoints.up("xs")]:{display:"flex"}},...t.className==="flex-container"&&{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0px",padding:"0px"},...t.className==="flex-container header__container"&&{width:"100%",[r.breakpoints.up("xs")]:{display:"grid",gap:"10px",padding:"0px",justifyContent:"center"},[r.breakpoints.up("sm")]:{display:"flex",justifyContent:"space-between"}},...t.className==="hero"&&{display:"block",[r.breakpoints.up("xs")]:{maxWidth:r.custom.maxWidth,backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",padding:"73px 16px"},[r.breakpoints.up("sm")]:{padding:"102px 16px"},[r.breakpoints.up("md")]:{padding:"177px 16px"}},...t.className==="hero__wrapper"&&{[r.breakpoints.up("xs")]:{textAlign:"center",maxWidth:"380px",padding:"0px"}},...((p=t.className)==null?void 0:p.includes("section"))&&{[r.breakpoints.up("xs")]:{marginTop:"50px"},[r.breakpoints.up("sm")]:{marginTop:"70px",padding:"0px 16px"}},...t.className==="employee__container"&&{[r.breakpoints.up("sm")]:{padding:"0px"}},...t.className==="sign-up__form"&&{display:"grid",gap:"50px",maxWidth:"380px",[r.breakpoints.up("sm")]:{padding:"0px"},[r.breakpoints.up("lg")]:{maxWidth:"380px"}},...t.className==="fileLoader__wrapper"&&{display:"flex",alignItems:"center",borderRadius:"4px",border:"1px solid #00BDD3",padding:"0px",[r.breakpoints.up("sm")]:{padding:"0px"}}}}}},MuiList:{styleOverrides:{root:()=>({padding:"0px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(282px, 1fr))",justifyContent:"space-between",alignItems:"stretch",gridAutoRows:"1fr",marginBottom:"50px",gap:"29px",[r.breakpoints.up("xs")]:{gap:"20px"},[r.breakpoints.up("sm")]:{gap:"16px"},[r.breakpoints.up("md")]:{gap:"29px"}})}},MuiListItem:{styleOverrides:{root:{padding:"0px",flexDirection:"column",justifyContent:"stretch",width:"100%"}}},MuiCard:{styleOverrides:{root:{textAlign:"center",borderRadius:"10px",background:"#ffffff",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",width:"100%","&:hover":{outline:"2px solid #000000"}}}},MuiCardContent:{styleOverrides:{root:{padding:"20px",display:"grid",gap:"20px",":last-child":{paddingBottom:"20px"}}}},MuiAvatar:{styleOverrides:{root:{margin:"auto",width:"70px",height:"70px"}}},MuiLink:{styleOverrides:{root:{wordBreak:"break-word",overflowWrap:"break-word","&:hover":{color:"blue"}}}},MuiTooltip:{defaultProps:{PopperProps:{modifiers:[{name:"offset",options:{offset:[0,-15]}}]}},styleOverrides:{tooltip:{fontSize:"16px"}}},MuiTextField:{styleOverrides:{root:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#00BDD3"},"&:hover fieldset":{borderColor:"#0E1F3D"},"&.Mui-focused fieldset":{borderColor:"#023573"},"&.Mui-error.Mui-focused fieldset":{borderColor:"#d32f2f"},"&.Mui-error fieldset":{borderColor:"#d32f2f"}}}}},MuiRadio:{styleOverrides:{root:{color:"#D0CFCF","&.Mui-checked":{color:"#00BDD3"}}}}},breakpoints:{values:{xs:0,sm:450,md:960,lg:1200,xl:1920}}});var R,W;const Te=_(r,{palette:{mode:"light",primary:{main:r.palette.primary.light},secondary:{main:r.palette.secondary.light},accent:{main:r.palette.accent.light},background:{default:"#f8f8f8"}},typography:{...r.typography,h2:{color:r.palette.primary.light}},components:{MuiButton:{variants:[...((W=(R=r.components)==null?void 0:R.MuiButton)==null?void 0:W.variants)||[],{props:{variant:"contained"},style:{backgroundColor:r.palette.accent.light,color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:r.palette.secondary.light}}},MuiCard:{styleOverrides:{root:{background:"#ffffff"}}},MuiFormLabel:{styleOverrides:{root:{color:r.palette.primary.light}}},MuiFormHelperText:{styleOverrides:{root:{color:r.palette.primary.light}}},MuiFormControlLabel:{styleOverrides:{label:{color:r.palette.primary.light}}}}});var A,F;const Le=_(r,{palette:{mode:"dark",primary:{main:r.palette.primary.dark},secondary:{main:r.palette.secondary.dark},accent:{main:r.palette.accent.dark},background:{default:"#1B1B1B"}},typography:{...r.typography,h2:{color:r.palette.primary.dark}},components:{MuiButton:{variants:[...((F=(A=r.components)==null?void 0:A.MuiButton)==null?void 0:F.variants)||[],{props:{variant:"contained"},style:{backgroundColor:"#01636F",color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:r.palette.secondary.dark}}},MuiCard:{styleOverrides:{root:{background:"#565656"}}},MuiFormLabel:{styleOverrides:{root:{color:r.palette.primary.dark}}},MuiFormHelperText:{styleOverrides:{root:{color:r.palette.primary.dark}}},MuiFormControlLabel:{styleOverrides:{label:{color:r.palette.primary.dark}}}}});oe(r);const Be=({title:t,titleId:n,...s},p)=>o.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:p,"aria-labelledby":n,...s},t?o.createElement("title",{id:n},t):null,o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.5121 9.42749H18.579C22.6696 9.42749 24.715 9.42749 25.864 10.661C27.0128 11.8946 26.7425 13.8004 26.2019 17.6119L25.6892 21.2264C25.2652 24.2154 25.0533 25.7099 23.9658 26.6049C22.8783 27.4999 21.2743 27.4999 18.0663 27.4999H11.0248C7.81681 27.4999 6.21284 27.4999 5.12534 26.6049C4.03783 25.7099 3.82584 24.2154 3.40187 21.2264L2.88918 17.6119C2.34854 13.8004 2.07822 11.8946 3.22713 10.661C4.37604 9.42749 6.42138 9.42749 10.5121 9.42749ZM9.69704 22.5001C9.69704 21.9824 10.1493 21.5626 10.7071 21.5626H18.384C18.9418 21.5626 19.394 21.9824 19.394 22.5001C19.394 23.0179 18.9418 23.4376 18.384 23.4376H10.7071C10.1493 23.4376 9.69704 23.0179 9.69704 22.5001Z",fill:"current"}),o.createElement("g",{opacity:.4},o.createElement("path",{d:"M10.3152 2.50001H18.7758C19.0576 2.49993 19.2738 2.49988 19.4626 2.51893C20.8054 2.6544 21.9044 3.48697 22.3706 4.60847H6.72046C7.18654 3.48697 8.28564 2.6544 9.62845 2.51893C9.81731 2.49988 10.0334 2.49993 10.3152 2.50001Z",fill:"current"})),o.createElement("g",{opacity:.7},o.createElement("path",{d:"M7.64942 5.90332C5.96382 5.90332 4.58167 6.95301 4.12042 8.34556C4.11081 8.37458 4.1016 8.40377 4.09277 8.43308C4.57538 8.28237 5.07765 8.18391 5.58609 8.1167C6.89563 7.94356 8.55059 7.94365 10.4731 7.94376H10.6166H18.8271C20.7495 7.94365 22.4046 7.94356 23.714 8.1167C24.2225 8.18391 24.7248 8.28237 25.2074 8.43308C25.1985 8.40377 25.1893 8.37458 25.1797 8.34556C24.7185 6.95301 23.3363 5.90332 21.6508 5.90332H7.64942Z",fill:"current"}))),Ne=o.forwardRef(Be),Re=o.memo(()=>{const t=M();return e.jsxs(ce,{component:se,to:"/",underline:"none",color:t.palette.primary.main,alignItems:"end",display:"flex",children:[e.jsx(Ne,{fill:t.palette.accent.main,width:"30",height:"30"}),e.jsx(j,{variant:"main",sx:{marginLeft:"4px"},children:"MATERIAL"})]})});var E={},We=D;Object.defineProperty(E,"__esModule",{value:!0});var V=E.default=void 0,Ae=We(z()),Fe=e;V=E.default=(0,Ae.default)((0,Fe.jsx)("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"}),"WbSunny");var O={},De=D;Object.defineProperty(O,"__esModule",{value:!0});var K=O.default=void 0,Ie=De(z()),Pe=e;K=O.default=(0,Ie.default)((0,Pe.jsx)("path",{d:"M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2"}),"ModeNight");const He=o.memo(()=>{const{toggleTheme:t}=G(),n=M();return e.jsx(w,{"aria-label":"change theme",onClick:t,sx:{width:"fit-content",margin:"auto",padding:"5px"},children:n.palette.mode==="light"?e.jsx(V,{sx:{color:n.palette.primary.main}}):e.jsx(K,{sx:{color:n.palette.primary.main}})})}),ze=o.memo(()=>{const[t,n]=o.useState(!1),s=M(),p=I(s.breakpoints.down("sm")),a=m=>c=>{c.type==="keydown"&&(c.key==="Tab"||c.key==="Shift")||n(m)},i=["Users","Sign up"],l=()=>e.jsxs(h,{component:"div",className:"flex-container header__container",onClick:a(!1),onKeyDown:a(!1),sx:{maxWidth:"260px",width:"100%",margin:"0px",[s.breakpoints.up("lg")]:{maxWidth:"260px",width:"100%"}},children:[e.jsx(He,{}),e.jsx(h,{component:"div","aria-label":"header menu",className:"flex-container header__container",sx:{maxWidth:"210px",margin:"0px",justifyContent:"space-between"},children:i.map((m,c)=>e.jsx(H,{variant:"contained",component:P,to:"#".concat(m),smooth:!0,children:m},c))})]});return e.jsxs("div",{children:[e.jsx(de,{className:"header",sx:{backgroundImage:"none"},children:e.jsxs(h,{className:"header__wrapper main__container",children:[e.jsx(Re,{}),p?e.jsx(w,{sx:{color:s.palette.primary.main,padding:"2px"},edge:"start","aria-label":"menu",onClick:a(!0),children:e.jsx(me,{sx:{width:"30px",height:"30px"}})}):l()]})}),e.jsx(ue,{anchor:"left",open:t,onClose:a(!1),PaperProps:{sx:{backgroundColor:s.palette.background.default,width:"100%",maxWidth:"260px"}},children:e.jsxs(h,{sx:{maxWidth:260},children:[e.jsx(w,{onClick:a(!1),sx:{color:s.palette.primary.main},children:e.jsx(he,{})}),l()]})})]})}),$e=()=>e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx(h,{component:"main",className:"main__container pageContainer__main",children:e.jsx(ie,{})})]});function Ue(){const{theme:t,setTheme:n}=G(),s=I("(prefers-color-scheme: dark)");return o.useEffect(()=>{n(s?"dark":"light")},[s]),e.jsx(e.Fragment,{children:e.jsxs(ae,{theme:t==="light"?Te:Le,children:[e.jsx(ke,{}),e.jsxs(le,{children:[e.jsx(C,{path:"/",element:e.jsx($e,{}),children:e.jsx(C,{index:!0,element:e.jsx(Me,{})})}),e.jsx(C,{path:"*",element:e.jsx("h1",{children:"Page not found"})})]})]})})}const Ge=document.getElementById("root"),qe=$(Ge);qe.render(e.jsx(Ee,{children:e.jsx(pe,{children:e.jsx(Ue,{})})}));export{ge as G,Ve as __vite_legacy_guard,Se as n,G as u};