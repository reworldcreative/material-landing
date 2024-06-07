var U=Object.freeze,oe=Object.defineProperty;var C=(e,o)=>U(oe(e,"raw",{value:U(o||e.slice())}));import{a as S,g as I,s as g,af as ae,Y as re,c as d,_ as s,J as L,u as Y,S as _,b as z,a0 as te,j as t,d as y,f as E,a5 as ie,ag as $}from"./muiHeader.CQ08udww.js";import{r as u}from"./reactHookForm.CyKqO0fe.js";import{u as se}from"./index.no9Lk1pu.js";import{T as ne}from"./muiCommon.CowhOKTc.js";import"./reactDom.jVsZHl2L.js";import"./reactRouterDom.D_X8HglC.js";import"./reactHashLink.DsdfKRjE.js";function le(e){return I("MuiDialog",e)}const P=S("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),pe=u.createContext({}),ce=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],de=g(ae,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),ue=e=>{const{classes:o,scroll:a,maxWidth:r,fullWidth:i,fullScreen:n}=e,l={root:["root"],container:["container","scroll".concat(d(a))],paper:["paper","paperScroll".concat(d(a)),"paperWidth".concat(d(String(r))),i&&"paperFullWidth",n&&"paperFullScreen"]};return E(l,le,o)},me=g(re,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),xe=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.container,o["scroll".concat(d(a.scroll))]]}})(({ownerState:e})=>s({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),ge=g(L,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.paper,o["scrollPaper".concat(d(a.scroll))],o["paperWidth".concat(d(String(a.maxWidth)))],a.fullWidth&&o.paperFullWidth,a.fullScreen&&o.paperFullScreen]}})(({theme:e,ownerState:o})=>s({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):"max(".concat(e.breakpoints.values.xs).concat(e.breakpoints.unit,", 444px)"),["&.".concat(P.paperScrollBody)]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:"".concat(e.breakpoints.values[o.maxWidth]).concat(e.breakpoints.unit),["&.".concat(P.paperScrollBody)]:{[e.breakpoints.down(e.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(P.paperScrollBody)]:{margin:0,maxWidth:"100%"}})),he=u.forwardRef(function(o,a){const r=Y({props:o,name:"MuiDialog"}),i=_(),n={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":p,BackdropComponent:m,BackdropProps:h,children:x,className:v,disableEscapeKeyDown:b=!1,fullScreen:X=!1,fullWidth:H=!1,maxWidth:K="sm",onBackdropClick:M,onClick:j,onClose:k,open:B,PaperComponent:G=L,PaperProps:T={},scroll:J="paper",TransitionComponent:O=ie,transitionDuration:R=n,TransitionProps:V}=r,q=z(r,ce),f=s({},r,{disableEscapeKeyDown:b,fullScreen:X,fullWidth:H,maxWidth:K,scroll:J}),D=ue(f),W=u.useRef(),Q=c=>{W.current=c.target===c.currentTarget},Z=c=>{j&&j(c),W.current&&(W.current=null,M&&M(c),k&&k(c,"backdropClick"))},w=te(p),ee=u.useMemo(()=>({titleId:w}),[w]);return t.jsx(me,s({className:y(D.root,v),closeAfterTransition:!0,components:{Backdrop:de},componentsProps:{backdrop:s({transitionDuration:R,as:m},h)},disableEscapeKeyDown:b,onClose:k,open:B,ref:a,onClick:Z,ownerState:f},q,{children:t.jsx(O,s({appear:!0,in:B,timeout:R,role:"presentation"},V,{children:t.jsx(xe,{className:y(D.container),onMouseDown:Q,ownerState:f,children:t.jsx(ge,s({as:G,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":w},T,{className:y(D.paper,T.className),ownerState:f,children:t.jsx(pe.Provider,{value:ee,children:x})}))})}))}))});function be(e){return I("MuiDialogContent",e)}S("MuiDialogContent",["root","dividers"]);const fe=S("MuiDialogTitle",["root"]),Ce=["className","dividers"],ye=e=>{const{classes:o,dividers:a}=e;return E({root:["root",a&&"dividers"]},be,o)},ve=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.dividers&&o.dividers]}})(({theme:e,ownerState:o})=>s({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((e.vars||e).palette.divider),borderBottom:"1px solid ".concat((e.vars||e).palette.divider)}:{[".".concat(fe.root," + &")]:{paddingTop:0}})),ke=u.forwardRef(function(o,a){const r=Y({props:o,name:"MuiDialogContent"}),{className:i,dividers:n=!1}=r,l=z(r,Ce),p=s({},r,{dividers:n}),m=ye(p);return t.jsx(ve,s({className:y(m.root,i),ownerState:p,ref:a},l))}),De=({id:e,src:o,mediumSrc:a="",smallSrc:r="",alt:i,className:n,width:l,height:p,ariaHidden:m,loadingPriority:h})=>{const x=o.replace(/\.\w+$/,".webp"),v=a?a.replace(/\.\w+$/,".webp"):"",b=r?r.replace(/\.\w+$/,".webp"):"";return t.jsxs("picture",{children:[t.jsx("source",{type:"image/webp",srcSet:x,media:"(min-width: 1920px)"}),t.jsx("source",{type:"image/webp",srcSet:a?v:x,media:"(min-width: 500px) and (max-width: 1920px)"}),t.jsx("source",{type:"image/webp",srcSet:r?b:x,media:"(max-width: 500px)"}),t.jsx("img",{id:e,src:o,alt:i,className:n,width:l,height:p,"aria-hidden":m,loading:"lazy",...h?{loading:h==="eager"?"eager":"lazy"}:!1})]})},We=""+new URL("img/success-image.png",import.meta.url).href;var N,F,A;const Re=u.memo(()=>{const e=_(),{openPopup:o}=se(),a=$(he)(N||(N=C(["\n    background-color: ",";\n    width: 80%;\n    margin: auto;\n    height: 100%;\n    & .MuiDialog-paper {\n      background-color: ",";\n      max-width: 100%;\n      width: 100%;\n      text-align: center;\n    }\n  "])),e.palette.secondary.main,e.palette.secondary.main),r=$(ke)(F||(F=C(["\n    padding: 24px;\n    background-color: ",";\n    color: ",";\n  "])),e.palette.secondary.main,e.palette.primary.main),i=$(ne)(A||(A=C(["\n    color: ",";\n    margin-bottom: 55px;\n  "])),e.palette.primary.main);return t.jsx(a,{open:o,"aria-describedby":"alert-dialog-description",children:t.jsxs(r,{children:[t.jsx(i,{id:"alert-dialog-description",variant:"h1",children:"User successfully registered"}),t.jsx(De,{src:We})]})})});export{Re as default};
