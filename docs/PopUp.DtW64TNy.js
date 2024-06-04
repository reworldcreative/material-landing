var U=Object.freeze,oe=Object.defineProperty;var C=(e,o)=>U(oe(e,"raw",{value:U(o||e.slice())}));import{q as M,p as I,r as g,s as m,ah as ae,a8 as re,x as d,b as s,v as L,u as _,F as z,_ as E,J as te,j as t,t as v,k as Y,Q as ie,M as se,V as $,O as ne}from"./index.BhUnmLRo.js";import"./__commonjsHelpers__.C932wzq6.js";function le(e){return I("MuiDialog",e)}const P=M("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),pe=g.createContext({}),ce=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],de=m(ae,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),ue=e=>{const{classes:o,scroll:a,maxWidth:r,fullWidth:i,fullScreen:n}=e,l={root:["root"],container:["container","scroll".concat(d(a))],paper:["paper","paperScroll".concat(d(a)),"paperWidth".concat(d(String(r))),i&&"paperFullWidth",n&&"paperFullScreen"]};return Y(l,le,o)},xe=m(re,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),ge=m("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.container,o["scroll".concat(d(a.scroll))]]}})(({ownerState:e})=>s({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),me=m(L,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.paper,o["scrollPaper".concat(d(a.scroll))],o["paperWidth".concat(d(String(a.maxWidth)))],a.fullWidth&&o.paperFullWidth,a.fullScreen&&o.paperFullScreen]}})(({theme:e,ownerState:o})=>s({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):"max(".concat(e.breakpoints.values.xs).concat(e.breakpoints.unit,", 444px)"),["&.".concat(P.paperScrollBody)]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:"".concat(e.breakpoints.values[o.maxWidth]).concat(e.breakpoints.unit),["&.".concat(P.paperScrollBody)]:{[e.breakpoints.down(e.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(P.paperScrollBody)]:{margin:0,maxWidth:"100%"}})),he=g.forwardRef(function(o,a){const r=_({props:o,name:"MuiDialog"}),i=z(),n={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":p,BackdropComponent:u,BackdropProps:h,children:x,className:y,disableEscapeKeyDown:b=!1,fullScreen:X=!1,fullWidth:H=!1,maxWidth:K="sm",onBackdropClick:S,onClick:j,onClose:k,open:B,PaperComponent:O=L,PaperProps:T={},scroll:V="paper",TransitionComponent:q=ie,transitionDuration:R=n,TransitionProps:G}=r,J=E(r,ce),f=s({},r,{disableEscapeKeyDown:b,fullScreen:X,fullWidth:H,maxWidth:K,scroll:V}),D=ue(f),W=g.useRef(),Q=c=>{W.current=c.target===c.currentTarget},Z=c=>{j&&j(c),W.current&&(W.current=null,S&&S(c),k&&k(c,"backdropClick"))},w=te(p),ee=g.useMemo(()=>({titleId:w}),[w]);return t.jsx(xe,s({className:v(D.root,y),closeAfterTransition:!0,components:{Backdrop:de},componentsProps:{backdrop:s({transitionDuration:R,as:u},h)},disableEscapeKeyDown:b,onClose:k,open:B,ref:a,onClick:Z,ownerState:f},J,{children:t.jsx(q,s({appear:!0,in:B,timeout:R,role:"presentation"},G,{children:t.jsx(ge,{className:v(D.container),onMouseDown:Q,ownerState:f,children:t.jsx(me,s({as:O,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":w},T,{className:v(D.paper,T.className),ownerState:f,children:t.jsx(pe.Provider,{value:ee,children:x})}))})}))}))});function be(e){return I("MuiDialogContent",e)}M("MuiDialogContent",["root","dividers"]);const fe=M("MuiDialogTitle",["root"]),Ce=["className","dividers"],ve=e=>{const{classes:o,dividers:a}=e;return Y({root:["root",a&&"dividers"]},be,o)},ye=m("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,a.dividers&&o.dividers]}})(({theme:e,ownerState:o})=>s({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((e.vars||e).palette.divider),borderBottom:"1px solid ".concat((e.vars||e).palette.divider)}:{[".".concat(fe.root," + &")]:{paddingTop:0}})),ke=g.forwardRef(function(o,a){const r=_({props:o,name:"MuiDialogContent"}),{className:i,dividers:n=!1}=r,l=E(r,Ce),p=s({},r,{dividers:n}),u=ve(p);return t.jsx(ye,s({className:v(u.root,i),ownerState:p,ref:a},l))}),De=({id:e,src:o,mediumSrc:a="",smallSrc:r="",alt:i,className:n,width:l,height:p,ariaHidden:u,loadingPriority:h})=>{const x=o.replace(/\.\w+$/,".webp"),y=a?a.replace(/\.\w+$/,".webp"):"",b=r?r.replace(/\.\w+$/,".webp"):"";return t.jsxs("picture",{children:[t.jsx("source",{type:"image/webp",srcSet:x,media:"(min-width: 1920px)"}),t.jsx("source",{type:"image/webp",srcSet:a?y:x,media:"(min-width: 500px) and (max-width: 1920px)"}),t.jsx("source",{type:"image/webp",srcSet:r?b:x,media:"(max-width: 500px)"}),t.jsx("img",{id:e,src:o,alt:i,className:n,width:l,height:p,"aria-hidden":u,loading:"lazy",...h?{loading:h==="eager"?"eager":"lazy"}:!1})]})},We=""+new URL("img/success-image.png",import.meta.url).href;var F,N,A;const Me=()=>{const e=z(),{openPopup:o}=se(),a=$(he)(F||(F=C(["\n    background-color: ",";\n    width: 80%;\n    margin: auto;\n    height: 100%;\n    & .MuiDialog-paper {\n      background-color: ",";\n      max-width: 100%;\n      width: 100%;\n      text-align: center;\n    }\n  "])),e.palette.secondary.main,e.palette.secondary.main),r=$(ke)(N||(N=C(["\n    padding: 24px;\n    background-color: ",";\n    color: ",";\n  "])),e.palette.secondary.main,e.palette.primary.main),i=$(ne)(A||(A=C(["\n    color: ",";\n    margin-bottom: 55px;\n  "])),e.palette.primary.main);return t.jsx(a,{open:o,"aria-describedby":"alert-dialog-description",children:t.jsxs(r,{children:[t.jsx(i,{id:"alert-dialog-description",variant:"h1",children:"User successfully registered"}),t.jsx(De,{src:We})]})})};export{Me as default};