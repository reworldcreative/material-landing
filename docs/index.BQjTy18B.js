const __vite__fileDeps=["./Employees.WS982pJE.js","./mui.CDg8bc38.js","./vendor.ByHWR8bp.js","./SignUp.yYU0dr4l.js","./PopUp.D0F1Osp4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as u,C as j,T as H,B as be,c as G,r as $e,u as Z,L as Ae,a as De,i as F,I as V,b as Ce,A as ze,D as He,d as Ve,e as qe}from"./mui.CDg8bc38.js";import{c as Ke,r as s,R as Je,g as Ge}from"./vendor.ByHWR8bp.js";function Tr(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var we,oe=Ke;we=oe.createRoot,oe.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const ie="popstate";function Ze(e){e===void 0&&(e={});function t(a,o){let{pathname:i="/",search:c="",hash:l=""}=P(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),q("",{pathname:i,search:c,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){let i=a.document.querySelector("base"),c="";if(i&&i.getAttribute("href")){let l=a.location.href,d=l.indexOf("#");c=d===-1?l:l.slice(0,d)}return c+"#"+(typeof o=="string"?o:I(o))}function n(a,o){Q(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Xe(t,r,n,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Q(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch(r){}}}function Qe(){return Math.random().toString(36).substr(2,8)}function le(e,t){return{usr:e.state,key:e.key,idx:t}}function q(e,t,r,n){return r===void 0&&(r=null),L({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:r,key:t&&t.key||n||Qe()})}function I(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function P(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Xe(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,c=R.Pop,l=null,d=p();d==null&&(d=0,i.replaceState(L({},i.state,{idx:d}),""));function p(){return(i.state||{idx:null}).idx}function h(){c=R.Pop;let f=p(),C=f==null?null:f-d;d=f,l&&l({action:c,location:g.location,delta:C})}function x(f,C){c=R.Push;let E=q(g.location,f,C);r&&r(E,f),d=p()+1;let w=le(E,d),k=g.createHref(E);try{i.pushState(w,"",k)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(k)}o&&l&&l({action:c,location:g.location,delta:1})}function y(f,C){c=R.Replace;let E=q(g.location,f,C);r&&r(E,f),d=p();let w=le(E,d),k=g.createHref(E);i.replaceState(w,"",k),o&&l&&l({action:c,location:g.location,delta:0})}function v(f){let C=a.location.origin!=="null"?a.location.origin:a.location.href,E=typeof f=="string"?f:I(f);return E=E.replace(/ $/,"%20"),b(C,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,C)}let g={get action(){return c},get location(){return e(a,i)},listen(f){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(ie,h),l=f,()=>{a.removeEventListener(ie,h),l=null}},createHref(f){return t(a,f)},createURL:v,encodeLocation(f){let C=v(f);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:x,replace:y,go(f){return i.go(f)}};return g}var se;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(se||(se={}));function Ye(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?P(t):t,a=X(n.pathname||"/",r);if(a==null)return null;let o=Ee(e);et(o);let i=null;for(let c=0;i==null&&c<o.length;++c){let l=pt(a);i=ct(o[c],l)}return i}function Ee(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(o,i,c)=>{let l={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(b(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let d=_([n,l.relativePath]),p=r.concat(l);o.children&&o.children.length>0&&(b(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Ee(o.children,t,p,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:lt(d,o.index),routesMeta:p})};return e.forEach((o,i)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,i);else for(let l of ke(o.path))a(o,i,l)}),t}function ke(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let i=ke(n.join("/")),c=[];return c.push(...i.map(l=>l===""?o:[o,l].join("/"))),a&&c.push(...i),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function et(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:st(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const tt=/^:[\w-]+$/,rt=3,nt=2,at=1,ot=10,it=-2,ce=e=>e==="*";function lt(e,t){let r=e.split("/"),n=r.length;return r.some(ce)&&(n+=it),t&&(n+=nt),r.filter(a=>!ce(a)).reduce((a,o)=>a+(tt.test(o)?rt:o===""?at:ot),n)}function st(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function ct(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let i=0;i<r.length;++i){let c=r[i],l=i===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=ut({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},d);if(!p)return null;Object.assign(n,p.params);let h=c.route;o.push({params:n,pathname:_([a,p.pathname]),pathnameBase:gt(_([a,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(a=_([a,p.pathnameBase]))}return o}function ut(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=dt(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:n.reduce((d,p,h)=>{let{paramName:x,isOptional:y}=p;if(x==="*"){let g=c[h]||"";i=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const v=c[h];return y&&!v?d[x]=void 0:d[x]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:i,pattern:e}}function dt(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Q(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,l)=>(n.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function pt(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Q(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function X(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function ht(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?P(e):e;return{pathname:r?r.startsWith("/")?r:ft(r,t):t,search:xt(n),hash:vt(a)}}function ft(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function D(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mt(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function je(e,t){let r=mt(e);return t?r.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Re(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=P(e):(a=L({},e),b(!a.pathname||!a.pathname.includes("?"),D("?","pathname","search",a)),b(!a.pathname||!a.pathname.includes("#"),D("#","pathname","hash",a)),b(!a.search||!a.search.includes("#"),D("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,c;if(i==null)c=r;else{let h=t.length-1;if(!n&&i.startsWith("..")){let x=i.split("/");for(;x[0]==="..";)x.shift(),h-=1;a.pathname=x.join("/")}c=h>=0?t[h]:"/"}let l=ht(a,c),d=i&&i!=="/"&&i.endsWith("/"),p=(o||i===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||p)&&(l.pathname+="/"),l}const _=e=>e.join("/").replace(/\/\/+/g,"/"),gt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _e=["post","put","patch","delete"];new Set(_e);const bt=["get",..._e];new Set(bt);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}const Y=s.createContext(null),Ct=s.createContext(null),O=s.createContext(null),W=s.createContext(null),S=s.createContext({outlet:null,matches:[],isDataRoute:!1}),Se=s.createContext(null);function wt(e,t){let{relative:r}=t===void 0?{}:t;B()||b(!1);let{basename:n,navigator:a}=s.useContext(O),{hash:o,pathname:i,search:c}=Oe(e,{relative:r}),l=i;return n!=="/"&&(l=i==="/"?n:_([n,i])),a.createHref({pathname:l,search:c,hash:o})}function B(){return s.useContext(W)!=null}function $(){return B()||b(!1),s.useContext(W).location}function Pe(e){s.useContext(O).static||s.useLayoutEffect(e)}function Et(){let{isDataRoute:e}=s.useContext(S);return e?Ft():kt()}function kt(){B()||b(!1);let e=s.useContext(Y),{basename:t,future:r,navigator:n}=s.useContext(O),{matches:a}=s.useContext(S),{pathname:o}=$(),i=JSON.stringify(je(a,r.v7_relativeSplatPath)),c=s.useRef(!1);return Pe(()=>{c.current=!0}),s.useCallback(function(d,p){if(p===void 0&&(p={}),!c.current)return;if(typeof d=="number"){n.go(d);return}let h=Re(d,JSON.parse(i),o,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:_([t,h.pathname])),(p.replace?n.replace:n.push)(h,p.state,p)},[t,n,i,o,e])}const jt=s.createContext(null);function Rt(e){let t=s.useContext(S).outlet;return t&&s.createElement(jt.Provider,{value:e},t)}function Oe(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=s.useContext(O),{matches:a}=s.useContext(S),{pathname:o}=$(),i=JSON.stringify(je(a,n.v7_relativeSplatPath));return s.useMemo(()=>Re(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function _t(e,t){return St(e,t)}function St(e,t,r,n){B()||b(!1);let{navigator:a}=s.useContext(O),{matches:o}=s.useContext(S),i=o[o.length-1],c=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let d=$(),p;if(t){var h;let f=typeof t=="string"?P(t):t;l==="/"||(h=f.pathname)!=null&&h.startsWith(l)||b(!1),p=f}else p=d;let x=p.pathname||"/",y=x;if(l!=="/"){let f=l.replace(/^\//,"").split("/");y="/"+x.replace(/^\//,"").split("/").slice(f.length).join("/")}let v=Ye(e,{pathname:y}),g=Tt(v&&v.map(f=>Object.assign({},f,{params:Object.assign({},c,f.params),pathname:_([l,a.encodeLocation?a.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?l:_([l,a.encodeLocation?a.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),o,r,n);return t&&g?s.createElement(W.Provider,{value:{location:T({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:R.Pop}},g):g}function Pt(){let e=Ut(),t=yt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return s.createElement(s.Fragment,null,s.createElement("h2",null,"Unexpected Application Error!"),s.createElement("h3",{style:{fontStyle:"italic"}},t),r?s.createElement("pre",{style:a},r):null,null)}const Ot=s.createElement(Pt,null);class Mt extends s.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?s.createElement(S.Provider,{value:this.props.routeContext},s.createElement(Se.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lt(e){let{routeContext:t,match:r,children:n}=e,a=s.useContext(Y);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),s.createElement(S.Provider,{value:t},n)}function Tt(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if((o=r)!=null&&o.errors)e=r.matches;else return null}let i=e,c=(a=r)==null?void 0:a.errors;if(c!=null){let p=i.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);p>=0||b(!1),i=i.slice(0,Math.min(i.length,p+1))}let l=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let p=0;p<i.length;p++){let h=i[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:x,errors:y}=r,v=h.route.loader&&x[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){l=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((p,h,x)=>{let y,v=!1,g=null,f=null;r&&(y=c&&h.route.id?c[h.route.id]:void 0,g=h.route.errorElement||Ot,l&&(d<0&&x===0?(v=!0,f=null):d===x&&(v=!0,f=h.route.hydrateFallbackElement||null)));let C=t.concat(i.slice(0,x+1)),E=()=>{let w;return y?w=g:v?w=f:h.route.Component?w=s.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=p,s.createElement(Lt,{match:h,routeContext:{outlet:p,matches:C,isDataRoute:r!=null},children:w})};return r&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?s.createElement(Mt,{location:r.location,revalidation:r.revalidation,component:g,error:y,children:E(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):E()},null)}var Me=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Me||{}),U=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(U||{});function Bt(e){let t=s.useContext(Y);return t||b(!1),t}function Nt(e){let t=s.useContext(Ct);return t||b(!1),t}function It(e){let t=s.useContext(S);return t||b(!1),t}function Le(e){let t=It(),r=t.matches[t.matches.length-1];return r.route.id||b(!1),r.route.id}function Ut(){var e;let t=s.useContext(Se),r=Nt(U.UseRouteError),n=Le(U.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Ft(){let{router:e}=Bt(Me.UseNavigateStable),t=Le(U.UseNavigateStable),r=s.useRef(!1);return Pe(()=>{r.current=!0}),s.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,T({fromRouteId:t},o)))},[e,t])}function Wt(e){return Rt(e.context)}function N(e){b(!1)}function $t(e){let{basename:t="/",children:r=null,location:n,navigationType:a=R.Pop,navigator:o,static:i=!1,future:c}=e;B()&&b(!1);let l=t.replace(/^\/*/,"/"),d=s.useMemo(()=>({basename:l,navigator:o,static:i,future:T({v7_relativeSplatPath:!1},c)}),[l,c,o,i]);typeof n=="string"&&(n=P(n));let{pathname:p="/",search:h="",hash:x="",state:y=null,key:v="default"}=n,g=s.useMemo(()=>{let f=X(p,l);return f==null?null:{location:{pathname:f,search:h,hash:x,state:y,key:v},navigationType:a}},[l,p,h,x,y,v,a]);return g==null?null:s.createElement(O.Provider,{value:d},s.createElement(W.Provider,{children:r,value:g}))}function At(e){let{children:t,location:r}=e;return _t(K(t),r)}new Promise(()=>{});function K(e,t){t===void 0&&(t=[]);let r=[];return s.Children.forEach(e,(n,a)=>{if(!s.isValidElement(n))return;let o=[...t,a];if(n.type===s.Fragment){r.push.apply(r,K(n.props.children,o));return}n.type!==N&&b(!1),!n.props.index||!n.props.children||b(!1);let i={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=K(n.props.children,o)),r.push(i)}),r}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},J.apply(this,arguments)}function Dt(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function zt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ht(e,t){return e.button===0&&(!t||t==="_self")&&!zt(e)}const Vt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],qt="6";try{window.__reactRouterVersion=qt}catch(e){}const Kt="startTransition",ue=Je[Kt];function Jt(e){let{basename:t,children:r,future:n,window:a}=e,o=s.useRef();o.current==null&&(o.current=Ze({window:a,v5Compat:!0}));let i=o.current,[c,l]=s.useState({action:i.action,location:i.location}),{v7_startTransition:d}=n||{},p=s.useCallback(h=>{d&&ue?ue(()=>l(h)):l(h)},[l,d]);return s.useLayoutEffect(()=>i.listen(p),[i,p]),s.createElement($t,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:i,future:n})}const Gt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qt=s.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:o,replace:i,state:c,target:l,to:d,preventScrollReset:p,unstable_viewTransition:h}=t,x=Dt(t,Vt),{basename:y}=s.useContext(O),v,g=!1;if(typeof d=="string"&&Zt.test(d)&&(v=d,Gt))try{let w=new URL(window.location.href),k=d.startsWith("//")?new URL(w.protocol+d):new URL(d),M=X(k.pathname,y);k.origin===w.origin&&M!=null?d=M+k.search+k.hash:g=!0}catch(w){}let f=wt(d,{relative:a}),C=Xt(d,{replace:i,state:c,target:l,preventScrollReset:p,relative:a,unstable_viewTransition:h});function E(w){n&&n(w),w.defaultPrevented||C(w)}return s.createElement("a",J({},x,{href:v||f,onClick:g||o?n:E,ref:r,target:l}))});var de;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(de||(de={}));var pe;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pe||(pe={}));function Xt(e,t){let{target:r,replace:n,state:a,preventScrollReset:o,relative:i,unstable_viewTransition:c}=t===void 0?{}:t,l=Et(),d=$(),p=Oe(e,{relative:i});return s.useCallback(h=>{if(Ht(h,r)){h.preventDefault();let x=n!==void 0?n:I(d)===I(p);l(e,{replace:x,state:a,preventScrollReset:o,relative:i,unstable_viewTransition:c})}},[d,l,p,n,a,r,e,o,i,c])}const Yt="modulepreload",er=function(e,t){return new URL(e,t).href},he={},ee=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.all(r.map(l=>{if(l=er(l,n),l in he)return;he[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!n)for(let y=o.length-1;y>=0;y--){const v=o[y];if(v.href===l&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(l,'"]').concat(p)))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":Yt,d||(x.as="script",x.crossOrigin=""),x.href=l,c&&x.setAttribute("nonce",c),document.head.appendChild(x),d)return new Promise((y,v)=>{x.addEventListener("load",y),x.addEventListener("error",()=>v(new Error("Unable to preload CSS for ".concat(l))))})}))}return a.then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},fe=""+new URL("img/hero-bunner.jpg",import.meta.url).href,tr=()=>u.jsx(j,{component:"div",className:"hero",sx:{backgroundImage:"url(".concat(fe,")"),"@supports (background-image: url('example.webp'))":{backgroundImage:"url(".concat(fe.replace(/\.[^/.]+$/,"")+".webp",")")}},children:u.jsxs(j,{component:"div",className:"hero__wrapper",children:[u.jsxs(H,{variant:"h1",children:["Introducing the ",u.jsx("br",{})," MUI Library"]}),u.jsx(H,{variant:"main",sx:{color:"#ffffff",marginTop:"21px",marginBottom:"57px",display:"block"},children:"Now the MUI library is very popular among the development of UI interfaces in React. Therefore, a good React development specialist must know the UI component MUI library, since it is often in demand"}),u.jsx(be,{variant:"contained",sx:{margin:"auto",display:"block"},children:"Sign up"})]})}),rr=s.lazy(()=>ee(()=>import("./Employees.WS982pJE.js"),__vite__mapDeps([0,1,2]),import.meta.url)),nr=s.lazy(()=>ee(()=>import("./SignUp.yYU0dr4l.js"),__vite__mapDeps([3,1,2]),import.meta.url)),ar=s.lazy(()=>ee(()=>import("./PopUp.D0F1Osp4.js"),__vite__mapDeps([4,1,2]),import.meta.url)),or=()=>u.jsxs(u.Fragment,{children:[u.jsx(tr,{}),u.jsx(s.Suspense,{fallback:u.jsx(u.Fragment,{}),children:u.jsx(ar,{})}),u.jsxs(j,{component:"div",className:"main__container",children:[u.jsx(s.Suspense,{fallback:u.jsx(u.Fragment,{}),children:u.jsx(rr,{})}),u.jsx(s.Suspense,{fallback:u.jsx(u.Fragment,{}),children:u.jsx(nr,{})})]})]}),ir={id:1,firstName:"1234",lastName:"5544545",maidenName:"Smith",age:30,gender:"male",email:"john.doe@example.com",phone:"+1234567890",birthDate:"1993-01-01",image:"https://example.com/avatar.jpg",address:{address:"123 Main St",city:"Anytown",coordinates:{lat:40.7128,lng:-74.006},postalCode:"12345",state:"NY"},macAddress:"00:1B:44:11:3A:B7",university:"Example University",bank:{cardExpire:"12/25",cardNumber:"1234-5678-9876-5432",cardType:"Visa",currency:"USD",iban:"US29NWBK60161331926819"},company:{address:{address:"456 Corporate Blvd",city:"Business City",coordinates:{lat:37.7749,lng:-122.4194},postalCode:"67890",state:"CA"},department:"Engineering",name:"Tech Corp",title:"Software Engineer"},ein:"12-3456789",ssn:"123-45-6789",userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",username:"johndoe",password:"password123",bloodGroup:"A+",height:180,weight:75,eyeColor:"brown",hair:{color:"black",type:"straight"},domain:"example.com",ip:"192.168.1.1"},Te=s.createContext(void 0),lr=({children:e})=>{const[t,r]=s.useState("light"),[n,a]=s.useState(6),[o,i]=s.useState([]),[c,l]=s.useState(!0),[d,p]=s.useState(!1),h=s.useCallback(()=>{r(g=>g==="light"?"dark":"light")},[]),x=s.useCallback(()=>{p(!0),setTimeout(()=>{p(!1)},3e3)},[]),y=s.useCallback(g=>{i(f=>[g,...f]),fetch("http://dummyjson.com/users/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:g.firstName,lastName:g.lastName,image:g.image,email:g.email,phone:g.phone,company:{...ir.company,title:g.company.title}})}).then(f=>f.json())},[]),v=s.useCallback(async()=>{l(!0),await fetch("https://dummyjson.com/users?limit=".concat(n.toString(),"&skip=").concat(o.length.toString())).then(g=>{if(!g.ok)throw new Error("HTTP error! status: ".concat(g.status));return g.json()}).then(g=>{i(f=>[...f,...g.users]),l(!1)}).catch(g=>{console.error("Error fetching users:",g)})},[n,o]);return u.jsx(Te.Provider,{value:{theme:t,toggleTheme:h,setTheme:r,employeesToShow:n,setEmployeesToShow:a,employeesList:o,setEmployeesList:i,addEmployees:y,fetchEmployees:v,loading:c,openPopup:d,showPopup:x},children:e})},Be=()=>{const e=s.useContext(Te);if(!e)throw new Error("GlobalContext is not found");return e},Ne={fontSize:"16px",lineHeight:"1.625"},sr={...Ne,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical"},m=G({palette:{primary:{main:"rgba(0, 0, 0, 0.87)",light:"rgba(0, 0, 0, 0.87)",dark:"#ffffff"},secondary:{main:"#ffffff",light:"#ffffff",dark:"#000000"},accent:{main:"#0E1F3D",light:"#0E1F3D",dark:"#ffffff"}},typography:{fontFamily:"Nunito, sans-serif",h1:{color:"#ffffff",fontSize:"40px",lineHeight:"1"},main:Ne,h2:{fontSize:"40px",lineHeight:"1",textAlign:"center",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},subtitle1:sr},custom:{maxWidth:"1172px"},components:{MuiButton:{styleOverrides:{root:{borderRadius:"80px",padding:"0px 5px",minWidth:"100px",height:"34px",fontSize:"16px","&:disabled":{color:"#ffffff",background:"#B4B4B4"}}},variants:[{props:{variant:"contained",className:"more-button"},style:{display:"block",width:"120px",margin:"auto",textTransform:"none"}},{props:{variant:"outlined"},style:{display:"block",textTransform:"none",border:"1px solid #01636F",borderRadius:"4px 0px 0px 4px",padding:"14px 15px",height:"auto"}}]},MuiAppBar:{styleOverrides:{root:{padding:"13px 16px",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",position:"relative"}}},MuiContainer:{styleOverrides:{root:({ownerState:e})=>{var t,r,n;return{...((t=e.className)==null?void 0:t.includes("main__container"))&&{[m.breakpoints.up("xs")]:{maxWidth:m.custom.maxWidth,padding:"0px"},[m.breakpoints.up("sm")]:{padding:"0px"},[m.breakpoints.up("lg")]:{maxWidth:m.custom.maxWidth}},...((r=e.className)==null?void 0:r.includes("header__wrapper"))&&{alignItems:"center",justifyContent:"space-between",[m.breakpoints.up("xs")]:{display:"flex"}},...e.className==="flex-container"&&{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0px",padding:"0px"},...e.className==="flex-container header__container"&&{width:"100%",[m.breakpoints.up("xs")]:{display:"grid",gap:"10px",padding:"0px",justifyContent:"center"},[m.breakpoints.up("sm")]:{display:"flex",justifyContent:"space-between"}},...e.className==="hero"&&{display:"block",[m.breakpoints.up("xs")]:{maxWidth:m.custom.maxWidth,backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",padding:"73px 16px"},[m.breakpoints.up("sm")]:{padding:"102px 16px"},[m.breakpoints.up("md")]:{padding:"177px 16px"}},...e.className==="hero__wrapper"&&{[m.breakpoints.up("xs")]:{textAlign:"center",maxWidth:"380px",padding:"0px"}},...((n=e.className)==null?void 0:n.includes("section"))&&{[m.breakpoints.up("xs")]:{marginTop:"50px"},[m.breakpoints.up("sm")]:{marginTop:"70px",padding:"0px 16px"}},...e.className==="employee__container"&&{[m.breakpoints.up("sm")]:{padding:"0px"}},...e.className==="sign-up__form"&&{display:"grid",gap:"50px",maxWidth:"380px",[m.breakpoints.up("sm")]:{padding:"0px"},[m.breakpoints.up("lg")]:{maxWidth:"380px"}},...e.className==="fileLoader__wrapper"&&{display:"flex",alignItems:"center",borderRadius:"4px",border:"1px solid #00BDD3",padding:"0px",[m.breakpoints.up("sm")]:{padding:"0px"}}}}}},MuiList:{styleOverrides:{root:()=>({padding:"0px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(282px, 1fr))",justifyContent:"space-between",alignItems:"stretch",gridAutoRows:"1fr",marginBottom:"50px",gap:"29px",[m.breakpoints.up("xs")]:{gap:"20px"},[m.breakpoints.up("sm")]:{gap:"16px"},[m.breakpoints.up("md")]:{gap:"29px"}})}},MuiListItem:{styleOverrides:{root:{padding:"0px",flexDirection:"column",justifyContent:"stretch",width:"100%"}}},MuiCard:{styleOverrides:{root:{textAlign:"center",borderRadius:"10px",background:"#ffffff",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",height:"100%",width:"100%","&:hover":{outline:"2px solid #000000"}}}},MuiCardContent:{styleOverrides:{root:{padding:"20px",display:"grid",gap:"20px",":last-child":{paddingBottom:"20px"}}}},MuiAvatar:{styleOverrides:{root:{margin:"auto",width:"70px",height:"70px"}}},MuiLink:{styleOverrides:{root:{wordBreak:"break-word",overflowWrap:"break-word","&:hover":{color:"blue"}}}},MuiTooltip:{defaultProps:{PopperProps:{modifiers:[{name:"offset",options:{offset:[0,-15]}}]}},styleOverrides:{tooltip:{fontSize:"16px"}}},MuiTextField:{styleOverrides:{root:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#00BDD3"},"&:hover fieldset":{borderColor:"#0E1F3D"},"&.Mui-focused fieldset":{borderColor:"#023573"},"&.Mui-error.Mui-focused fieldset":{borderColor:"#d32f2f"},"&.Mui-error fieldset":{borderColor:"#d32f2f"}}}}},MuiRadio:{styleOverrides:{root:{color:"#D0CFCF","&.Mui-checked":{color:"#00BDD3"}}}}},breakpoints:{values:{xs:0,sm:450,md:960,lg:1200,xl:1920}}});var ge,xe;const cr=G(m,{palette:{mode:"light",primary:{main:m.palette.primary.light},secondary:{main:m.palette.secondary.light},accent:{main:m.palette.accent.light},background:{default:"#f8f8f8"}},typography:{...m.typography,h2:{color:m.palette.primary.light}},components:{MuiButton:{variants:[...((xe=(ge=m.components)==null?void 0:ge.MuiButton)==null?void 0:xe.variants)||[],{props:{variant:"contained"},style:{backgroundColor:m.palette.accent.light,color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:m.palette.secondary.light}}},MuiCard:{styleOverrides:{root:{background:"#ffffff"}}},MuiFormLabel:{styleOverrides:{root:{color:m.palette.primary.light}}},MuiFormHelperText:{styleOverrides:{root:{color:m.palette.primary.light}}},MuiFormControlLabel:{styleOverrides:{label:{color:m.palette.primary.light}}}}});var ve,ye;const ur=G(m,{palette:{mode:"dark",primary:{main:m.palette.primary.dark},secondary:{main:m.palette.secondary.dark},accent:{main:m.palette.accent.dark},background:{default:"#1B1B1B"}},typography:{...m.typography,h2:{color:m.palette.primary.dark}},components:{MuiButton:{variants:[...((ye=(ve=m.components)==null?void 0:ve.MuiButton)==null?void 0:ye.variants)||[],{props:{variant:"contained"},style:{backgroundColor:"#01636F",color:"#FAFAFA","&:hover":{backgroundColor:"#093789",color:"#D9D9D9"}}}]},MuiAppBar:{styleOverrides:{root:{backgroundColor:m.palette.secondary.dark}}},MuiCard:{styleOverrides:{root:{background:"#565656"}}},MuiFormLabel:{styleOverrides:{root:{color:m.palette.primary.dark}}},MuiFormHelperText:{styleOverrides:{root:{color:m.palette.primary.dark}}},MuiFormControlLabel:{styleOverrides:{label:{color:m.palette.primary.dark}}}}});$e(m);const dr=({title:e,titleId:t,...r},n)=>s.createElement("svg",{width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t,...r},e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.5121 9.42749H18.579C22.6696 9.42749 24.715 9.42749 25.864 10.661C27.0128 11.8946 26.7425 13.8004 26.2019 17.6119L25.6892 21.2264C25.2652 24.2154 25.0533 25.7099 23.9658 26.6049C22.8783 27.4999 21.2743 27.4999 18.0663 27.4999H11.0248C7.81681 27.4999 6.21284 27.4999 5.12534 26.6049C4.03783 25.7099 3.82584 24.2154 3.40187 21.2264L2.88918 17.6119C2.34854 13.8004 2.07822 11.8946 3.22713 10.661C4.37604 9.42749 6.42138 9.42749 10.5121 9.42749ZM9.69704 22.5001C9.69704 21.9824 10.1493 21.5626 10.7071 21.5626H18.384C18.9418 21.5626 19.394 21.9824 19.394 22.5001C19.394 23.0179 18.9418 23.4376 18.384 23.4376H10.7071C10.1493 23.4376 9.69704 23.0179 9.69704 22.5001Z",fill:"current"}),s.createElement("g",{opacity:.4},s.createElement("path",{d:"M10.3152 2.50001H18.7758C19.0576 2.49993 19.2738 2.49988 19.4626 2.51893C20.8054 2.6544 21.9044 3.48697 22.3706 4.60847H6.72046C7.18654 3.48697 8.28564 2.6544 9.62845 2.51893C9.81731 2.49988 10.0334 2.49993 10.3152 2.50001Z",fill:"current"})),s.createElement("g",{opacity:.7},s.createElement("path",{d:"M7.64942 5.90332C5.96382 5.90332 4.58167 6.95301 4.12042 8.34556C4.11081 8.37458 4.1016 8.40377 4.09277 8.43308C4.57538 8.28237 5.07765 8.18391 5.58609 8.1167C6.89563 7.94356 8.55059 7.94365 10.4731 7.94376H10.6166H18.8271C20.7495 7.94365 22.4046 7.94356 23.714 8.1167C24.2225 8.18391 24.7248 8.28237 25.2074 8.43308C25.1985 8.40377 25.1893 8.37458 25.1797 8.34556C24.7185 6.95301 23.3363 5.90332 21.6508 5.90332H7.64942Z",fill:"current"}))),pr=s.forwardRef(dr),hr=()=>{const e=Z();return u.jsxs(Ae,{component:Qt,to:"/",underline:"none",color:e.palette.primary.main,alignItems:"end",display:"flex",children:[u.jsx(pr,{fill:e.palette.accent.main,width:"30",height:"30"}),u.jsx(H,{variant:"main",sx:{marginLeft:"4px"},children:"MATERIAL"})]})};var te={},z={};const fr=Ge(De);var me;function A(){return me||(me=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=fr}(z)),z}var mr=F;Object.defineProperty(te,"__esModule",{value:!0});var Ie=te.default=void 0,gr=mr(A()),xr=u;Ie=te.default=(0,gr.default)((0,xr.jsx)("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"}),"WbSunny");var re={},vr=F;Object.defineProperty(re,"__esModule",{value:!0});var Ue=re.default=void 0,yr=vr(A()),br=u;Ue=re.default=(0,yr.default)((0,br.jsx)("path",{d:"M9.5 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2"}),"ModeNight");const Cr=()=>{const{toggleTheme:e}=Be(),t=Z();return u.jsx(V,{"aria-label":"change theme",onClick:e,sx:{width:"fit-content",margin:"auto",padding:"5px"},children:t.palette.mode==="light"?u.jsx(Ie,{sx:{color:t.palette.primary.main}}):u.jsx(Ue,{sx:{color:t.palette.primary.main}})})};var ne={},wr=F;Object.defineProperty(ne,"__esModule",{value:!0});var Fe=ne.default=void 0,Er=wr(A()),kr=u;Fe=ne.default=(0,Er.default)((0,kr.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");var ae={},jr=F;Object.defineProperty(ae,"__esModule",{value:!0});var We=ae.default=void 0,Rr=jr(A()),_r=u;We=ae.default=(0,Rr.default)((0,_r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const Sr=()=>{const[e,t]=s.useState(!1),r=Z(),n=Ce(r.breakpoints.down("sm")),a=c=>l=>{l.type==="keydown"&&(l.key==="Tab"||l.key==="Shift")||t(c)},o=["Users","Sign up"],i=()=>u.jsxs(j,{component:"div",className:"flex-container header__container",onClick:a(!1),onKeyDown:a(!1),sx:{maxWidth:"260px",width:"100%",margin:"0px",[r.breakpoints.up("lg")]:{maxWidth:"260px",width:"100%"}},children:[u.jsx(Cr,{}),u.jsx(j,{component:"div","aria-label":"header menu",className:"flex-container header__container",sx:{maxWidth:"210px",margin:"0px",justifyContent:"space-between"},children:o.map((c,l)=>u.jsx(be,{variant:"contained",children:c},l))})]});return u.jsxs("div",{children:[u.jsx(ze,{className:"header",sx:{backgroundImage:"none"},children:u.jsxs(j,{className:"header__wrapper main__container",children:[u.jsx(hr,{}),n?u.jsx(V,{sx:{color:r.palette.primary.main,padding:"2px"},edge:"start","aria-label":"menu",onClick:a(!0),children:u.jsx(Fe,{sx:{width:"30px",height:"30px"}})}):i()]})}),u.jsx(He,{anchor:"left",open:e,onClose:a(!1),PaperProps:{sx:{backgroundColor:r.palette.background.default,width:"100%",maxWidth:"260px"}},children:u.jsxs(j,{sx:{maxWidth:260},children:[u.jsx(V,{onClick:a(!1),sx:{color:r.palette.primary.main},children:u.jsx(We,{})}),i()]})})]})},Pr=()=>u.jsxs(u.Fragment,{children:[u.jsx(Sr,{}),u.jsx(j,{component:"main",className:"main__container pageContainer__main",children:u.jsx(Wt,{})})]});function Or(){const{theme:e,setTheme:t}=Be(),r=Ce("(prefers-color-scheme: dark)");return s.useEffect(()=>{t(r?"dark":"light")},[r]),u.jsx(u.Fragment,{children:u.jsxs(Ve,{theme:e==="light"?cr:ur,children:[u.jsx(qe,{}),u.jsxs(At,{children:[u.jsx(N,{path:"/",element:u.jsx(Pr,{}),children:u.jsx(N,{index:!0,element:u.jsx(or,{})})}),u.jsx(N,{path:"*",element:u.jsx("h1",{children:"Page not found"})})]})]})})}const Mr=document.getElementById("root"),Lr=we(Mr);Lr.render(u.jsx(lr,{children:u.jsx(Jt,{children:u.jsx(Or,{})})}));export{Tr as __vite_legacy_guard,ir as n,Be as u};
