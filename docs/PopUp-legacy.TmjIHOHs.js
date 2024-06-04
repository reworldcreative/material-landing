System.register(["./mui-legacy.DuCquhK1.js","./index-legacy.C6D-_qnb.js","./vendor-legacy.BH0fLQgq.js"],(function(e,a){"use strict";var i,r,t,s,c,n,d;return{setters:[e=>{i=e.j,r=e.u,t=e.w,s=e.x,c=e.y,n=e.T},e=>{d=e.u},null],execute:function(){const l=({id:e,src:a,mediumSrc:r="",smallSrc:t="",alt:s,className:c,width:n,height:d,ariaHidden:l,loadingPriority:o})=>{const p=a.replace(/\.\w+$/,".webp"),m=r?r.replace(/\.\w+$/,".webp"):"",g=t?t.replace(/\.\w+$/,".webp"):"";return i.jsxs("picture",{children:[i.jsx("source",{type:"image/webp",srcSet:p,media:"(min-width: 1920px)"}),i.jsx("source",{type:"image/webp",srcSet:r?m:p,media:"(min-width: 500px) and (max-width: 1920px)"}),i.jsx("source",{type:"image/webp",srcSet:t?g:p,media:"(max-width: 500px)"}),i.jsx("img",{id:e,src:a,alt:s,className:c,width:n,height:d,"aria-hidden":l,loading:"lazy",...!!o&&{loading:"eager"===o?"eager":"lazy"}})]})},o=""+new URL("img/success-image.png",a.meta.url).href;e("default",(()=>{const e=r(),{openPopup:a}=d(),p=t(s)`
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
  `,m=t(c)`
    padding: 24px;
    background-color: ${e.palette.secondary.main};
    color: ${e.palette.primary.main};
  `,g=t(n)`
    color: ${e.palette.primary.main};
    margin-bottom: 55px;
  `;return i.jsx(p,{open:a,"aria-describedby":"alert-dialog-description",children:i.jsxs(m,{children:[i.jsx(g,{id:"alert-dialog-description",variant:"h1",children:"User successfully registered"}),i.jsx(l,{src:o})]})})}))}}}));
