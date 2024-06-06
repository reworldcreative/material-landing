import{r as s,a as me}from"./reactHookForm.CyKqO0fe.js";import"./reactDom.jVsZHl2L.js";/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}var b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));const X="popstate";function ve(e){e===void 0&&(e={});function t(a,l){let{pathname:i="/",search:u="",hash:o=""}=U(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),J("",{pathname:i,search:u,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){let i=a.document.querySelector("base"),u="";if(i&&i.getAttribute("href")){let o=a.location.href,c=o.indexOf("#");u=c===-1?o:o.slice(0,c)}return u+"#"+(typeof l=="string"?l:k(l))}function r(a,l){q(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return ye(t,n,r,e)}function x(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function q(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch(n){}}}function ge(){return Math.random().toString(36).substr(2,8)}function Q(e,t){return{usr:e.state,key:e.key,idx:t}}function J(e,t,n,r){return n===void 0&&(n=null),N({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:n,key:t&&t.key||r||ge()})}function k(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ye(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,u=b.Pop,o=null,c=h();c==null&&(c=0,i.replaceState(N({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function f(){u=b.Pop;let d=h(),C=d==null?null:d-c;c=d,o&&o({action:u,location:v.location,delta:C})}function p(d,C){u=b.Push;let m=J(v.location,d,C);n&&n(m,d),c=h()+1;let y=Q(m,c),E=v.createHref(m);try{i.pushState(y,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(E)}l&&o&&o({action:u,location:v.location,delta:1})}function P(d,C){u=b.Replace;let m=J(v.location,d,C);n&&n(m,d),c=h();let y=Q(m,c),E=v.createHref(m);i.replaceState(y,"",E),l&&o&&o({action:u,location:v.location,delta:0})}function g(d){let C=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof d=="string"?d:k(d);return m=m.replace(/ $/,"%20"),x(C,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,C)}let v={get action(){return u},get location(){return e(a,i)},listen(d){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(X,f),o=d,()=>{a.removeEventListener(X,f),o=null}},createHref(d){return t(a,d)},createURL:g,encodeLocation(d){let C=g(d);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:p,replace:P,go(d){return i.go(d)}};return v}var Y;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Y||(Y={}));function xe(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?U(t):t,a=O(r.pathname||"/",n);if(a==null)return null;let l=ne(e);Ce(l);let i=null;for(let u=0;i==null&&u<l.length;++u){let o=Te(a);i=Oe(l[u],o)}return i}function ne(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,i,u)=>{let o={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(x(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let c=w([r,o.relativePath]),h=n.concat(o);l.children&&l.children.length>0&&(x(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ne(l.children,t,h,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Le(c,l.index),routesMeta:h})};return e.forEach((l,i)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))a(l,i);else for(let o of re(l.path))a(l,i,o)}),t}function re(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=re(r.join("/")),u=[];return u.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&u.push(...i),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function Ce(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ue(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ee=/^:[\w-]+$/,Pe=3,Re=2,be=1,we=10,Se=-2,Z=e=>e==="*";function Le(e,t){let n=e.split("/"),r=n.length;return n.some(Z)&&(r+=Se),t&&(r+=Re),n.filter(a=>!Z(a)).reduce((a,l)=>a+(Ee.test(l)?Pe:l===""?be:we),r)}function Ue(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Oe(e,t){let{routesMeta:n}=e,r={},a="/",l=[];for(let i=0;i<n.length;++i){let u=n[i],o=i===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",h=z({path:u.relativePath,caseSensitive:u.caseSensitive,end:o},c);if(!h)return null;Object.assign(r,h.params);let f=u.route;l.push({params:r,pathname:w([a,h.pathname]),pathnameBase:We(w([a,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(a=w([a,h.pathnameBase]))}return l}function z(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ne(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:P}=h;if(p==="*"){let v=u[f]||"";i=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const g=u[f];return P&&!g?c[p]=void 0:c[p]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function Ne(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),q(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Te(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return q(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function O(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ie(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:Be(n,t):t,search:je(r),hash:_e(a)}}function Be(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function D(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ke(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ae(e,t){let n=ke(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function le(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=U(e):(a=N({},e),x(!a.pathname||!a.pathname.includes("?"),D("?","pathname","search",a)),x(!a.pathname||!a.pathname.includes("#"),D("#","pathname","hash",a)),x(!a.search||!a.search.includes("#"),D("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,u;if(i==null)u=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;a.pathname=p.join("/")}u=f>=0?t[f]:"/"}let o=Ie(a,u),c=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}const w=e=>e.join("/").replace(/\/\/+/g,"/"),We=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),je=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_e=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $e(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ie=["post","put","patch","delete"];new Set(ie);const Fe=["get",...ie];new Set(Fe);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}const _=s.createContext(null),oe=s.createContext(null),S=s.createContext(null),$=s.createContext(null),L=s.createContext({outlet:null,matches:[],isDataRoute:!1}),se=s.createContext(null);function Me(e,t){let{relative:n}=t===void 0?{}:t;I()||x(!1);let{basename:r,navigator:a}=s.useContext(S),{hash:l,pathname:i,search:u}=F(e,{relative:n}),o=i;return r!=="/"&&(o=i==="/"?r:w([r,i])),a.createHref({pathname:o,search:u,hash:l})}function I(){return s.useContext($)!=null}function B(){return I()||x(!1),s.useContext($).location}function ue(e){s.useContext(S).static||s.useLayoutEffect(e)}function Ve(){let{isDataRoute:e}=s.useContext(L);return e?nt():Ae()}function Ae(){I()||x(!1);let e=s.useContext(_),{basename:t,future:n,navigator:r}=s.useContext(S),{matches:a}=s.useContext(L),{pathname:l}=B(),i=JSON.stringify(ae(a,n.v7_relativeSplatPath)),u=s.useRef(!1);return ue(()=>{u.current=!0}),s.useCallback(function(c,h){if(h===void 0&&(h={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let f=le(c,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:w([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,i,l,e])}const De=s.createContext(null);function Je(e){let t=s.useContext(L).outlet;return t&&s.createElement(De.Provider,{value:e},t)}function F(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(S),{matches:a}=s.useContext(L),{pathname:l}=B(),i=JSON.stringify(ae(a,r.v7_relativeSplatPath));return s.useMemo(()=>le(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function ze(e,t){return Ke(e,t)}function Ke(e,t,n,r){I()||x(!1);let{navigator:a}=s.useContext(S),{matches:l}=s.useContext(L),i=l[l.length-1],u=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let c=B(),h;if(t){var f;let d=typeof t=="string"?U(t):t;o==="/"||(f=d.pathname)!=null&&f.startsWith(o)||x(!1),h=d}else h=c;let p=h.pathname||"/",P=p;if(o!=="/"){let d=o.replace(/^\//,"").split("/");P="/"+p.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=xe(e,{pathname:P}),v=Qe(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},u,d.params),pathname:w([o,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:w([o,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),l,n,r);return t&&v?s.createElement($.Provider,{value:{location:T({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:b.Pop}},v):v}function He(){let e=tt(),t=$e(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return s.createElement(s.Fragment,null,s.createElement("h2",null,"Unexpected Application Error!"),s.createElement("h3",{style:{fontStyle:"italic"}},t),n?s.createElement("pre",{style:a},n):null,null)}const qe=s.createElement(He,null);class Ge extends s.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?s.createElement(L.Provider,{value:this.props.routeContext},s.createElement(se.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xe(e){let{routeContext:t,match:n,children:r}=e,a=s.useContext(_);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),s.createElement(L.Provider,{value:t},r)}function Qe(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,u=(a=n)==null?void 0:a.errors;if(u!=null){let h=i.findIndex(f=>f.route.id&&(u==null?void 0:u[f.route.id])!==void 0);h>=0||x(!1),i=i.slice(0,Math.min(i.length,h+1))}let o=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:P}=n,g=f.route.loader&&p[f.route.id]===void 0&&(!P||P[f.route.id]===void 0);if(f.route.lazy||g){o=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,f,p)=>{let P,g=!1,v=null,d=null;n&&(P=u&&f.route.id?u[f.route.id]:void 0,v=f.route.errorElement||qe,o&&(c<0&&p===0?(g=!0,d=null):c===p&&(g=!0,d=f.route.hydrateFallbackElement||null)));let C=t.concat(i.slice(0,p+1)),m=()=>{let y;return P?y=v:g?y=d:f.route.Component?y=s.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=h,s.createElement(Xe,{match:f,routeContext:{outlet:h,matches:C,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?s.createElement(Ge,{location:n.location,revalidation:n.revalidation,component:v,error:P,children:m(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):m()},null)}var ce=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ce||{}),W=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(W||{});function Ye(e){let t=s.useContext(_);return t||x(!1),t}function Ze(e){let t=s.useContext(oe);return t||x(!1),t}function et(e){let t=s.useContext(L);return t||x(!1),t}function he(e){let t=et(),n=t.matches[t.matches.length-1];return n.route.id||x(!1),n.route.id}function tt(){var e;let t=s.useContext(se),n=Ze(W.UseRouteError),r=he(W.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function nt(){let{router:e}=Ye(ce.UseNavigateStable),t=he(W.UseNavigateStable),n=s.useRef(!1);return ue(()=>{n.current=!0}),s.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,T({fromRouteId:t},l)))},[e,t])}function Ct(e){return Je(e.context)}function rt(e){x(!1)}function at(e){let{basename:t="/",children:n=null,location:r,navigationType:a=b.Pop,navigator:l,static:i=!1,future:u}=e;I()&&x(!1);let o=t.replace(/^\/*/,"/"),c=s.useMemo(()=>({basename:o,navigator:l,static:i,future:T({v7_relativeSplatPath:!1},u)}),[o,u,l,i]);typeof r=="string"&&(r=U(r));let{pathname:h="/",search:f="",hash:p="",state:P=null,key:g="default"}=r,v=s.useMemo(()=>{let d=O(h,o);return d==null?null:{location:{pathname:d,search:f,hash:p,state:P,key:g},navigationType:a}},[o,h,f,p,P,g,a]);return v==null?null:s.createElement(S.Provider,{value:c},s.createElement($.Provider,{children:n,value:v}))}function Et(e){let{children:t,location:n}=e;return ze(K(t),n)}new Promise(()=>{});function K(e,t){t===void 0&&(t=[]);let n=[];return s.Children.forEach(e,(r,a)=>{if(!s.isValidElement(r))return;let l=[...t,a];if(r.type===s.Fragment){n.push.apply(n,K(r.props.children,l));return}r.type!==rt&&x(!1),!r.props.index||!r.props.children||x(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=K(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function fe(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function lt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function it(e,t){return e.button===0&&(!t||t==="_self")&&!lt(e)}const ot=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],st=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ut="6";try{window.__reactRouterVersion=ut}catch(e){}const ct=s.createContext({isTransitioning:!1}),ht="startTransition",ee=me[ht];function Pt(e){let{basename:t,children:n,future:r,window:a}=e,l=s.useRef();l.current==null&&(l.current=ve({window:a,v5Compat:!0}));let i=l.current,[u,o]=s.useState({action:i.action,location:i.location}),{v7_startTransition:c}=r||{},h=s.useCallback(f=>{c&&ee?ee(()=>o(f)):o(f)},[o,c]);return s.useLayoutEffect(()=>i.listen(h),[i,h]),s.createElement(at,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:i,future:r})}const ft=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pt=s.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:i,state:u,target:o,to:c,preventScrollReset:h,unstable_viewTransition:f}=t,p=fe(t,ot),{basename:P}=s.useContext(S),g,v=!1;if(typeof c=="string"&&dt.test(c)&&(g=c,ft))try{let y=new URL(window.location.href),E=c.startsWith("//")?new URL(y.protocol+c):new URL(c),R=O(E.pathname,P);E.origin===y.origin&&R!=null?c=R+E.search+E.hash:v=!0}catch(y){}let d=Me(c,{relative:a}),C=vt(c,{replace:i,state:u,target:o,preventScrollReset:h,relative:a,unstable_viewTransition:f});function m(y){r&&r(y),y.defaultPrevented||C(y)}return s.createElement("a",j({},p,{href:g||d,onClick:v||l?r:m,ref:n,target:o}))}),Rt=s.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:i=!1,style:u,to:o,unstable_viewTransition:c,children:h}=t,f=fe(t,st),p=F(o,{relative:f.relative}),P=B(),g=s.useContext(oe),{navigator:v,basename:d}=s.useContext(S),C=g!=null&&gt(p)&&c===!0,m=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,y=P.pathname,E=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(y=y.toLowerCase(),E=E?E.toLowerCase():null,m=m.toLowerCase()),E&&d&&(E=O(E,d)||E);const R=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let M=y===m||!i&&y.startsWith(m)&&y.charAt(R)==="/",G=E!=null&&(E===m||!i&&E.startsWith(m)&&E.charAt(m.length)==="/"),V={isActive:M,isPending:G,isTransitioning:C},de=M?r:void 0,A;typeof l=="function"?A=l(V):A=[l,M?"active":null,G?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let pe=typeof u=="function"?u(V):u;return s.createElement(pt,j({},f,{"aria-current":de,className:A,ref:n,style:pe,to:o,unstable_viewTransition:c}),typeof h=="function"?h(V):h)});var H;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(H||(H={}));var te;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(te||(te={}));function mt(e){let t=s.useContext(_);return t||x(!1),t}function vt(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:u}=t===void 0?{}:t,o=Ve(),c=B(),h=F(e,{relative:i});return s.useCallback(f=>{if(it(f,n)){f.preventDefault();let p=r!==void 0?r:k(c)===k(h);o(e,{replace:p,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:u})}},[c,o,h,r,a,n,e,l,i,u])}function gt(e,t){t===void 0&&(t={});let n=s.useContext(ct);n==null&&x(!1);let{basename:r}=mt(H.useViewTransitionState),a=F(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=O(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=O(n.nextLocation.pathname,r)||n.nextLocation.pathname;return z(a.pathname,i)!=null||z(a.pathname,l)!=null}export{Pt as H,pt as L,Rt as N,Ct as O,Et as R,rt as a};