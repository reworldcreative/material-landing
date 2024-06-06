System.register(["./muiPopUp-legacy.CnWz6xIX.js","./index-legacy.DQNmqEqN.js","./muiCommon-legacy.DQlMUecZ.js","./reactHookForm-legacy.BJe_7uwt.js","./muiEmployees-legacy.g8Oxd-_B.js","./reactHashLink-legacy.t-HyoPTp.js","./muiHeader-legacy.CdeajVP_.js","./muiSignUp-legacy.D0rbXPsD.js"],(function(e,a){"use strict";var i,r,t,s,c,l,n;return{setters:[e=>{i=e.j,r=e.C,t=e.a8,s=e.a9,c=e.aa},e=>{l=e.u},e=>{n=e.T},null,null,null,null,null],execute:function(){const d=({id:e,src:a,mediumSrc:r="",smallSrc:t="",alt:s,className:c,width:l,height:n,ariaHidden:d,loadingPriority:o})=>{const m=a.replace(/\.\w+$/,".webp"),p=r?r.replace(/\.\w+$/,".webp"):"",g=t?t.replace(/\.\w+$/,".webp"):"";return i.jsxs("picture",{children:[i.jsx("source",{type:"image/webp",srcSet:m,media:"(min-width: 1920px)"}),i.jsx("source",{type:"image/webp",srcSet:r?p:m,media:"(min-width: 500px) and (max-width: 1920px)"}),i.jsx("source",{type:"image/webp",srcSet:t?g:m,media:"(max-width: 500px)"}),i.jsx("img",{id:e,src:a,alt:s,className:c,width:l,height:n,"aria-hidden":d,loading:"lazy",...!!o&&{loading:"eager"===o?"eager":"lazy"}})]})},o=""+new URL("img/success-image.png",a.meta.url).href;e("default",(()=>{const e=r(),{openPopup:a}=l(),m=t(s)`
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
  `,p=t(c)`
    padding: 24px;
    background-color: ${e.palette.secondary.main};
    color: ${e.palette.primary.main};
  `,g=t(n)`
    color: ${e.palette.primary.main};
    margin-bottom: 55px;
  `;return i.jsx(m,{open:a,"aria-describedby":"alert-dialog-description",children:i.jsxs(p,{children:[i.jsx(g,{id:"alert-dialog-description",variant:"h1",children:"User successfully registered"}),i.jsx(d,{src:o})]})})}))}}}));
