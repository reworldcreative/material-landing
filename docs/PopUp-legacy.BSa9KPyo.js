System.register(["./muiCommon-legacy.D-9KNmWW.js","./index-legacy.CvYpzLoJ.js","./reactHookForm-legacy.CpGJZ7M_.js","./reactDom-legacy.DtegwKBw.js","./reactRouterDom-legacy.DDdtALYJ.js","./reactHashLink-legacy.1FDeOjHp.js"],(function(e,r){"use strict";var a,i,o,t,n,l,s,d,p,c,u,m,h,x,g,b,w,v,f,y;return{setters:[e=>{a=e.c,i=e.g,o=e.s,t=e.e,n=e._,l=e.h,s=e.a,d=e.w,p=e.j,c=e.i,u=e.k,m=e.a1,h=e.L},e=>{x=e.B,g=e.M,b=e.b,w=e.d,v=e.F,f=e.e},e=>{y=e.r},null,null,null],execute:function(){function S(e){return i("MuiDialog",e)}const k=a("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),W=y.createContext({}),D=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],$=o(x,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),j=o(g,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),C=o("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.container,r[`scroll${t(a.scroll)}`]]}})((({ownerState:e})=>n({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}))),M=o(b,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.paper,r[`scrollPaper${t(a.scroll)}`],r[`paperWidth${t(String(a.maxWidth))}`],a.fullWidth&&r.paperFullWidth,a.fullScreen&&r.paperFullScreen]}})((({theme:e,ownerState:r})=>n({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}))),P=y.forwardRef((function(e,r){const a=l({props:e,name:"MuiDialog"}),i=w(),o={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":m,"aria-labelledby":h,BackdropComponent:x,BackdropProps:g,children:f,className:k,disableEscapeKeyDown:P=!1,fullScreen:B=!1,fullWidth:R=!1,maxWidth:N="sm",onBackdropClick:F,onClick:T,onClose:A,open:H,PaperComponent:E=b,PaperProps:K={},scroll:L="paper",TransitionComponent:Y=v,transitionDuration:z=o,TransitionProps:I}=a,X=s(a,D),U=n({},a,{disableEscapeKeyDown:P,fullScreen:B,fullWidth:R,maxWidth:N,scroll:L}),O=(e=>{const{classes:r,scroll:a,maxWidth:i,fullWidth:o,fullScreen:n}=e,l={root:["root"],container:["container",`scroll${t(a)}`],paper:["paper",`paperScroll${t(a)}`,`paperWidth${t(String(i))}`,o&&"paperFullWidth",n&&"paperFullScreen"]};return u(l,S,r)})(U),_=y.useRef(),q=d(h),G=y.useMemo((()=>({titleId:q})),[q]);return p.jsx(j,n({className:c(O.root,k),closeAfterTransition:!0,components:{Backdrop:$},componentsProps:{backdrop:n({transitionDuration:z,as:x},g)},disableEscapeKeyDown:P,onClose:A,open:H,ref:r,onClick:e=>{T&&T(e),_.current&&(_.current=null,F&&F(e),A&&A(e,"backdropClick"))},ownerState:U},X,{children:p.jsx(Y,n({appear:!0,in:H,timeout:z,role:"presentation"},I,{children:p.jsx(C,{className:c(O.container),onMouseDown:e=>{_.current=e.target===e.currentTarget},ownerState:U,children:p.jsx(M,n({as:E,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":q},K,{className:c(O.paper,K.className),ownerState:U,children:p.jsx(W.Provider,{value:G,children:f})}))})}))}))}));function B(e){return i("MuiDialogContent",e)}a("MuiDialogContent",["root","dividers"]);const R=a("MuiDialogTitle",["root"]),N=["className","dividers"],F=o("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.dividers&&r.dividers]}})((({theme:e,ownerState:r})=>n({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${R.root} + &`]:{paddingTop:0}}))),T=y.forwardRef((function(e,r){const a=l({props:e,name:"MuiDialogContent"}),{className:i,dividers:o=!1}=a,t=s(a,N),d=n({},a,{dividers:o}),m=(e=>{const{classes:r,dividers:a}=e;return u({root:["root",a&&"dividers"]},B,r)})(d);return p.jsx(F,n({className:c(m.root,i),ownerState:d,ref:r},t))})),A=({id:e,src:r,mediumSrc:a="",smallSrc:i="",alt:o,className:t,width:n,height:l,ariaHidden:s,loadingPriority:d})=>{const c=r.replace(/\.\w+$/,".webp"),u=a?a.replace(/\.\w+$/,".webp"):"",m=i?i.replace(/\.\w+$/,".webp"):"";return p.jsxs("picture",{children:[p.jsx("source",{type:"image/webp",srcSet:c,media:"(min-width: 1920px)"}),p.jsx("source",{type:"image/webp",srcSet:a?u:c,media:"(min-width: 500px) and (max-width: 1920px)"}),p.jsx("source",{type:"image/webp",srcSet:i?m:c,media:"(max-width: 500px)"}),p.jsx("img",{id:e,src:r,alt:o,className:t,width:n,height:l,"aria-hidden":s,loading:"lazy",...!!d&&{loading:"eager"===d?"eager":"lazy"}})]})},H=""+new URL("img/success-image.png",r.meta.url).href;e("default",(()=>{const e=w(),{openPopup:r}=f(),a=m(P)`
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
  `,i=m(T)`
    padding: 24px;
    background-color: ${e.palette.secondary.main};
    color: ${e.palette.primary.main};
  `,o=m(h)`
    color: ${e.palette.primary.main};
    margin-bottom: 55px;
  `;return p.jsx(a,{open:r,"aria-describedby":"alert-dialog-description",children:p.jsxs(i,{children:[p.jsx(o,{id:"alert-dialog-description",variant:"h1",children:"User successfully registered"}),p.jsx(A,{src:H})]})})}))}}}));
