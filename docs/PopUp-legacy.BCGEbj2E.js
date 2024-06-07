System.register(["./muiEmployees-legacy.Bpbpomlj.js","./reactHookForm-legacy.CpGJZ7M_.js","./index-legacy.BRRycaqi.js","./muiSignUp-legacy.ILKCRZpI.js","./muiCommon-legacy.BW_yw6cM.js","./reactDom-legacy.DtegwKBw.js","./reactRouterDom-legacy.DDdtALYJ.js","./reactHashLink-legacy.1FDeOjHp.js","./muiHeader-legacy.3YXNpoYB.js"],(function(e,r){"use strict";var a,i,o,t,n,l,s,d,p,c,u,m,h,x,g,b,w,y,v,f;return{setters:[e=>{a=e.k,i=e.l,o=e.s,t=e.m,n=e._,l=e.D,s=e.n,d=e.U,p=e.f,c=e.J,u=e.j,m=e.p,h=e.r,x=e.F,g=e.ad},e=>{b=e.r},e=>{w=e.u},e=>{y=e.B,v=e.M},e=>{f=e.T},null,null,null,null],execute:function(){function S(e){return i("MuiDialog",e)}const k=a("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),W=b.createContext({}),j=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],D=o(y,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),$=o(v,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),C=o("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.container,r[`scroll${t(a.scroll)}`]]}})((({ownerState:e})=>n({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),M=o(l,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.paper,r[`scrollPaper${t(a.scroll)}`],r[`paperWidth${t(String(a.maxWidth))}`],a.fullWidth&&r.paperFullWidth,a.fullScreen&&r.paperFullScreen]}})((({theme:e,ownerState:r})=>n({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),P=b.forwardRef((function(e,r){const a=s({props:e,name:"MuiDialog"}),i=d(),o={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":w,BackdropComponent:y,BackdropProps:v,children:f,className:k,disableEscapeKeyDown:P=!1,fullScreen:B=!1,fullWidth:R=!1,maxWidth:N="sm",onBackdropClick:T,onClick:F,onClose:H,open:A,PaperComponent:E=l,PaperProps:K={},scroll:U="paper",TransitionComponent:Y=x,transitionDuration:z=o,TransitionProps:I}=a,L=p(a,j),X=n({},a,{disableEscapeKeyDown:P,fullScreen:B,fullWidth:R,maxWidth:N,scroll:U}),J=(e=>{const{classes:r,scroll:a,maxWidth:i,fullWidth:o,fullScreen:n}=e,l={root:["root"],container:["container",`scroll${t(a)}`],paper:["paper",`paperScroll${t(a)}`,`paperWidth${t(String(i))}`,o&&"paperFullWidth",n&&"paperFullScreen"]};return h(l,S,r)})(X),O=b.useRef(),_=c(w),q=b.useMemo((()=>({titleId:_})),[_]);return u.jsx($,n({className:m(J.root,k),closeAfterTransition:!0,components:{Backdrop:D},componentsProps:{backdrop:n({transitionDuration:z,as:y},v)},disableEscapeKeyDown:P,onClose:H,open:A,ref:r,onClick:e=>{F&&F(e),O.current&&(O.current=null,T&&T(e),H&&H(e,"backdropClick"))},ownerState:X},L,{children:u.jsx(Y,n({appear:!0,in:A,timeout:z,role:"presentation"},I,{children:u.jsx(C,{className:m(J.container),onMouseDown:e=>{O.current=e.target===e.currentTarget},ownerState:X,children:u.jsx(M,n({as:E,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":_},K,{className:m(J.paper,K.className),ownerState:X,children:u.jsx(W.Provider,{value:q,children:f})}))})}))}))}));function B(e){return i("MuiDialogContent",e)}a("MuiDialogContent",["root","dividers"]);const R=a("MuiDialogTitle",["root"]),N=["className","dividers"],T=o("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.dividers&&r.dividers]}})((({theme:e,ownerState:r})=>n({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${R.root} + &`]:{paddingTop:0}}))),F=b.forwardRef((function(e,r){const a=s({props:e,name:"MuiDialogContent"}),{className:i,dividers:o=!1}=a,t=p(a,N),l=n({},a,{dividers:o}),d=(e=>{const{classes:r,dividers:a}=e;return h({root:["root",a&&"dividers"]},B,r)})(l);return u.jsx(T,n({className:m(d.root,i),ownerState:l,ref:r},t))})),H=({id:e,src:r,mediumSrc:a="",smallSrc:i="",alt:o,className:t,width:n,height:l,ariaHidden:s,loadingPriority:d})=>{const p=r.replace(/\.\w+$/,".webp"),c=a?a.replace(/\.\w+$/,".webp"):"",m=i?i.replace(/\.\w+$/,".webp"):"";return u.jsxs("picture",{children:[u.jsx("source",{type:"image/webp",srcSet:p,media:"(min-width: 1920px)"}),u.jsx("source",{type:"image/webp",srcSet:a?c:p,media:"(min-width: 500px) and (max-width: 1920px)"}),u.jsx("source",{type:"image/webp",srcSet:i?m:p,media:"(max-width: 500px)"}),u.jsx("img",{id:e,src:r,alt:o,className:t,width:n,height:l,"aria-hidden":s,loading:"lazy",...!!d&&{loading:"eager"===d?"eager":"lazy"}})]})},A=""+new URL("img/success-image.png",r.meta.url).href;e("default",b.memo((()=>{const e=d(),{openPopup:r}=w(),a=g(P)`
    background-color: ${e.palette.secondary.main};
    width: 80%;
    margin: auto;
    height: 100%;
    & .MuiDialog-paper {
      background-color: ${e.palette.secondary.main};
      max-width: 100%;
      width: 100%;
      text-align: center;
    }
  `,i=g(F)`
    padding: 24px;
    background-color: ${e.palette.secondary.main};
    color: ${e.palette.primary.main};
  `,o=g(f)`
    color: ${e.palette.primary.main};
    margin-bottom: 55px;
  `;return u.jsx(a,{open:r,"aria-describedby":"alert-dialog-description",children:u.jsxs(i,{children:[u.jsx(o,{id:"alert-dialog-description",variant:"h1",children:"User successfully registered"}),u.jsx(H,{src:A})]})})})))}}}));
