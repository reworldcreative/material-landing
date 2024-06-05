System.register(["./reactDom-legacy.DzbhJU52.js"],(function(e,t){"use strict";var n,r,a;return{setters:[e=>{n=e.r,r=e.a,a=e.R}],execute:function(){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}var o;e({O:function(e){return function(e){let t=n.useContext(M).outlet;return t?n.createElement(q.Provider,{value:e},t):t}(e.context)},R:function(e){let{children:t,location:r}=e;return function(e,t,r,a){K()||l(!1);let{navigator:i}=n.useContext(_),{matches:s}=n.useContext(M),u=s[s.length-1],c=u?u.params:{};!u||u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let d,m=V();if(t){var v;let e="string"==typeof t?p(t):t;"/"===h||(null==(v=e.pathname)?void 0:v.startsWith(h))||l(!1),d=e}else d=m;let g=d.pathname||"/",y=g;if("/"!==h){let e=h.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=function(e,t,n){void 0===n&&(n="/");let r="string"==typeof t?p(t):t,a=P(r.pathname||"/",n);if(null==a)return null;let o=f(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=O(a);i=S(o[l],e)}return i}(e,{pathname:y}),w=function(e,t,r,a){var o,i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){if(null==(i=r)||!i.errors)return null;e=r.matches}let s=e,u=null==(o=r)?void 0:o.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,h=-1;if(r&&a&&a.v7_partialHydration)for(let n=0;n<s.length;n++){let e=s[n];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(h=n),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,s=h>=0?s.slice(0,h+1):[s[0]];break}}}return s.reduceRight(((e,a,o)=>{let i,l=!1,p=null,d=null;r&&(i=u&&a.route.id?u[a.route.id]:void 0,p=a.route.errorElement||Q,c&&(h<0&&0===o?(l=!0,d=null):h===o&&(l=!0,d=a.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,o+1)),m=()=>{let t;return t=i?p:l?d:a.route.Component?n.createElement(a.route.Component,null):a.route.element?a.route.element:e,n.createElement(Z,{match:a,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:t})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?n.createElement(Y,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:j([h,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:j([h,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,r,a);return t&&w?n.createElement(F.Provider,{value:{location:D({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:o.Pop}},w):w}(oe(t),r)},a:re,b:function(e){let{basename:r,children:a,future:d,window:f}=e,m=n.useRef();null==m.current&&(m.current=function(e){function n(e,t){let{pathname:n="/",search:r="",hash:a=""}=p(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function r(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:h(t))}function a(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}return void 0===e&&(e={}),function(e,n,r,a){void 0===a&&(a={});let{window:s=document.defaultView,v5Compat:p=!1}=a,d=s.history,f=o.Pop,m=null,v=g();function g(){return(d.state||{idx:null}).idx}function y(){f=o.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:C.location,delta:t})}function b(e,t){f=o.Push;let n=c(C.location,e,t);r&&r(n,e),v=g()+1;let a=u(n,v),i=C.createHref(n);try{d.pushState(a,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}p&&m&&m({action:f,location:C.location,delta:1})}function w(e,t){f=o.Replace;let n=c(C.location,e,t);r&&r(n,e),v=g();let a=u(n,v),i=C.createHref(n);d.replaceState(a,"",i),p&&m&&m({action:f,location:C.location,delta:0})}function x(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"==typeof e?e:h(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==v&&(v=0,d.replaceState(t({},d.state,{idx:v}),""));let C={get action(){return f},get location(){return e(s,d)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(i,y),m=e,()=>{s.removeEventListener(i,y),m=null}},createHref:e=>n(s,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:b,replace:w,go:e=>d.go(e)};return C}(n,r,a,e)}({window:f,v5Compat:!0}));let v=m.current,[g,y]=n.useState({action:v.action,location:v.location}),{v7_startTransition:b}=d||{},w=n.useCallback((e=>{b&&he?he((()=>y(e))):y(e)}),[y,b]);return n.useLayoutEffect((()=>v.listen(w)),[v,w]),n.createElement(ae,{basename:r,children:a,location:g.location,navigationType:g.action,navigator:v,future:d})}}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(o||(o={}));const i="popstate";function l(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e)try{throw new Error(t)}catch(n){}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,n,r,a){return void 0===r&&(r=null),t({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof n?p(n):n,{state:r,key:n&&n.key||a||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var d;function f(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=j([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),f(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of m(e.path))a(e,t,r);else a(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=m(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(d||(d={}));const v=/^:[\w-]+$/,g=3,y=2,b=1,w=10,x=-2,C=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=x),t&&(r+=y),n.filter((e=>!C(e))).reduce(((e,t)=>e+(v.test(t)?g:""===t?b:w)),r)}function S(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let i=0;i<n.length;++i){let e=n[i],l=i===n.length-1,s="/"===a?t:t.slice(a.length)||"/",u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},s);if(!u)return null;Object.assign(r,u.params);let c=e.route;o.push({params:r,pathname:j([a,u.pathname]),pathnameBase:k(j([a,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(a=j([a,u.pathnameBase]))}return o}function R(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function O(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function U(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)):n.map((e=>e.pathnameBase))}function T(e,n,r,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=p(e):(o=t({},e),l(!o.pathname||!o.pathname.includes("?"),L("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),L("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),L("#","search","hash",o)));let i,s=""===e||""===o.pathname,u=s?"/":o.pathname;if(null==u)i=r;else{let e=n.length-1;if(!a&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?n[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:A(r),hash:B(a)}}(o,i),h=u&&"/"!==u&&u.endsWith("/"),d=(s||"."===u)&&r.endsWith("/");return c.pathname.endsWith("/")||!h&&!d||(c.pathname+="/"),c}const j=e=>e.join("/").replace(/\/\/+/g,"/"),k=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",N=["post","put","patch","delete"];new Set(N);const W=["get",...N];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}new Set(W);const I=n.createContext(null),$=n.createContext(null),_=n.createContext(null),F=n.createContext(null),M=n.createContext({outlet:null,matches:[],isDataRoute:!1}),H=n.createContext(null);function K(){return null!=n.useContext(F)}function V(){return K()||l(!1),n.useContext(F).location}function J(e){n.useContext(_).static||n.useLayoutEffect(e)}function z(){let{isDataRoute:e}=n.useContext(M);return e?function(){let{router:e}=function(e){let t=n.useContext(I);return t||l(!1),t}(ee.UseNavigateStable),t=ne(te.UseNavigateStable),r=n.useRef(!1);return J((()=>{r.current=!0})),n.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,D({fromRouteId:t},a)))}),[e,t])}():function(){K()||l(!1);let e=n.useContext(I),{basename:t,future:r,navigator:a}=n.useContext(_),{matches:o}=n.useContext(M),{pathname:i}=V(),s=JSON.stringify(U(o,r.v7_relativeSplatPath)),u=n.useRef(!1);return J((()=>{u.current=!0})),n.useCallback((function(n,r){if(void 0===r&&(r={}),!u.current)return;if("number"==typeof n)return void a.go(n);let o=T(n,JSON.parse(s),i,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:j([t,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[t,a,s,i,e])}()}const q=n.createContext(null);function X(e,t){let{relative:r}=void 0===t?{}:t,{future:a}=n.useContext(_),{matches:o}=n.useContext(M),{pathname:i}=V(),l=JSON.stringify(U(o,a.v7_relativeSplatPath));return n.useMemo((()=>T(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function G(){let e=function(){var e;let t=n.useContext(H),r=function(e){let t=n.useContext($);return t||l(!1),t}(te.UseRouteError),a=ne(te.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[a]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:a},r):null,null)}const Q=n.createElement(G,null);class Y extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?n.createElement(M.Provider,{value:this.props.routeContext},n.createElement(H.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(I);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(M.Provider,{value:t},a)}var ee=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ee||{}),te=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(te||{});function ne(e){let t=function(e){let t=n.useContext(M);return t||l(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||l(!1),r.route.id}function re(e){l(!1)}function ae(e){let{basename:t="/",children:r=null,location:a,navigationType:i=o.Pop,navigator:s,static:u=!1,future:c}=e;K()&&l(!1);let h=t.replace(/^\/*/,"/"),d=n.useMemo((()=>({basename:h,navigator:s,static:u,future:D({v7_relativeSplatPath:!1},c)})),[h,c,s,u]);"string"==typeof a&&(a=p(a));let{pathname:f="/",search:m="",hash:v="",state:g=null,key:y="default"}=a,b=n.useMemo((()=>{let e=P(f,h);return null==e?null:{location:{pathname:e,search:m,hash:v,state:g,key:y},navigationType:i}}),[h,f,m,v,g,y,i]);return null==b?null:n.createElement(_.Provider,{value:d},n.createElement(F.Provider,{children:r,value:b}))}function oe(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,a)=>{if(!n.isValidElement(e))return;let o=[...t,a];if(e.type===n.Fragment)return void r.push.apply(r,oe(e.props.children,o));e.type!==re&&l(!1),e.props.index&&e.props.children&&l(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=oe(e.props.children,o)),r.push(i)})),r}function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ie.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Promise((()=>{}));const se=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ue=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch(Ue){}const ce=n.createContext({isTransitioning:!1}),he=r.startTransition,pe="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,de=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=e("L",n.forwardRef((function(e,t){let r,{onClick:a,relative:o,reloadDocument:i,replace:s,state:u,target:c,to:p,preventScrollReset:d,unstable_viewTransition:f}=e,m=le(e,se),{basename:v}=n.useContext(_),g=!1;if("string"==typeof p&&de.test(p)&&(r=p,pe))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=P(t.pathname,v);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:g=!0}catch(Ue){}let y=function(e,t){let{relative:r}=void 0===t?{}:t;K()||l(!1);let{basename:a,navigator:o}=n.useContext(_),{hash:i,pathname:s,search:u}=X(e,{relative:r}),c=s;return"/"!==a&&(c="/"===s?a:j([a,s])),o.createHref({pathname:c,search:u,hash:i})}(p,{relative:o}),b=function(e,t){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s}=void 0===t?{}:t,u=z(),c=V(),p=X(e,{relative:l});return n.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let n=void 0!==a?a:h(c)===h(p);u(e,{replace:n,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s})}}),[c,u,p,a,o,r,e,i,l,s])}(p,{replace:s,state:u,target:c,preventScrollReset:d,relative:o,unstable_viewTransition:f});return n.createElement("a",ie({},m,{href:r||y,onClick:g||i?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:t,target:c}))}))),me=n.forwardRef((function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:i=!1,style:s,to:u,unstable_viewTransition:c,children:h}=e,p=le(e,ue),d=X(u,{relative:p.relative}),f=V(),m=n.useContext($),{navigator:v,basename:g}=n.useContext(_),y=null!=m&&function(e,t){void 0===t&&(t={});let r=n.useContext(ce);null==r&&l(!1);let{basename:a}=function(e){let t=n.useContext(I);return t||l(!1),t}(ve.useViewTransitionState),o=X(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=P(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=P(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=R(o.pathname,s)||null!=R(o.pathname,i)}(d)&&!0===c,b=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,w=f.pathname,x=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(w=w.toLowerCase(),x=x?x.toLowerCase():null,b=b.toLowerCase()),x&&g&&(x=P(x,g)||x);const C="/"!==b&&b.endsWith("/")?b.length-1:b.length;let E,S=w===b||!i&&w.startsWith(b)&&"/"===w.charAt(C),O=null!=x&&(x===b||!i&&x.startsWith(b)&&"/"===x.charAt(b.length)),L={isActive:S,isPending:O,isTransitioning:y},U=S?r:void 0;E="function"==typeof o?o(L):[o,S?"active":null,O?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T="function"==typeof s?s(L):s;return n.createElement(fe,ie({},p,{"aria-current":U,className:E,ref:t,style:T,to:u,unstable_viewTransition:c}),"function"==typeof h?h(L):h)}));var ve,ge,ye,be;(ge=ve||(ve={})).UseScrollRestoration="useScrollRestoration",ge.UseSubmit="useSubmit",ge.UseSubmitFetcher="useSubmitFetcher",ge.UseFetcher="useFetcher",ge.useViewTransitionState="useViewTransitionState",(be=ye||(ye={})).UseFetcher="useFetcher",be.UseFetchers="useFetchers",be.UseScrollRestoration="useScrollRestoration";var we=function(){return we=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},we.apply(this,arguments)},xe="",Ce=null,Ee=null,Se=null;function Re(){xe="",null!==Ce&&Ce.disconnect(),null!==Ee&&(window.clearTimeout(Ee),Ee=null)}function Oe(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function Pe(){var e=null;if("#"===xe)e=document.body;else{var t=xe.replace("#","");null===(e=document.getElementById(t))&&"#top"===xe&&(e=document.body)}if(null!==e){Se(e);var n=e.getAttribute("tabindex");return null!==n||Oe(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||Oe(e)||(e.blur(),e.removeAttribute("tabindex")),Re(),!0}return!1}function Le(e){return a.forwardRef((function(t,n){var r="";"string"==typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"==typeof t.to&&"string"==typeof t.to.hash&&(r=t.to.hash);var o={};e===me&&(o.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["scroll","smooth","timeout","elementId"]);return a.createElement(e,we({},o,i,{onClick:function(e){var n;Re(),xe=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===xe||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(Se=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===Pe()&&(null===Ce&&(Ce=new MutationObserver(Pe)),Ce.observe(document,{attributes:!0,childList:!0,subtree:!0}),Ee=window.setTimeout((function(){Re()}),n||1e4))}),0))},ref:n}),t.children)}))}e("H",Le(fe)),Le(me)}}}));
