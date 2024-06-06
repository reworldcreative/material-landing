System.register(["./reactHookForm-legacy.CpGJZ7M_.js","./react-legacy.DtegwKBw.js"],(function(e,t){"use strict";var n,r;return{setters:[e=>{n=e.r,r=e.a},null],execute:function(){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}var a;e({H:function(e){let{basename:r,children:p,future:d,window:f}=e,m=n.useRef();null==m.current&&(m.current=function(e){function n(e,t){let{pathname:n="/",search:r="",hash:a=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),u("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function r(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:c(t))}function p(e,t){l("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}return void 0===e&&(e={}),function(e,n,r,l){void 0===l&&(l={});let{window:h=document.defaultView,v5Compat:p=!1}=l,d=h.history,f=a.Pop,m=null,v=g();function g(){return(d.state||{idx:null}).idx}function y(){f=a.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:C.location,delta:t})}function b(e,t){f=a.Push;let n=u(C.location,e,t);r&&r(n,e),v=g()+1;let o=s(n,v),i=C.createHref(n);try{d.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;h.location.assign(i)}p&&m&&m({action:f,location:C.location,delta:1})}function x(e,t){f=a.Replace;let n=u(C.location,e,t);r&&r(n,e),v=g();let o=s(n,v),i=C.createHref(n);d.replaceState(o,"",i),p&&m&&m({action:f,location:C.location,delta:0})}function w(e){let t="null"!==h.location.origin?h.location.origin:h.location.href,n="string"==typeof e?e:c(e);return n=n.replace(/ $/,"%20"),i(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==v&&(v=0,d.replaceState(t({},d.state,{idx:v}),""));let C={get action(){return f},get location(){return e(h,d)},listen(e){if(m)throw new Error("A history only accepts one active listener");return h.addEventListener(o,y),m=e,()=>{h.removeEventListener(o,y),m=null}},createHref:e=>n(h,e),createURL:w,encodeLocation(e){let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:b,replace:x,go:e=>d.go(e)};return C}(n,r,p,e)}({window:f,v5Compat:!0}));let v=m.current,[g,y]=n.useState({action:v.action,location:v.location}),{v7_startTransition:b}=d||{},x=n.useCallback((e=>{b&&ce?ce((()=>y(e))):y(e)}),[y,b]);return n.useLayoutEffect((()=>v.listen(x)),[v,x]),n.createElement(re,{basename:r,children:p,location:g.location,navigationType:g.action,navigator:v,future:d})},O:function(e){return function(e){let t=n.useContext(M).outlet;return t?n.createElement(K.Provider,{value:e},t):t}(e.context)},R:function(e){let{children:t,location:r}=e;return function(e,t,r,o){H()||i(!1);let{navigator:l}=n.useContext(_),{matches:s}=n.useContext(M),u=s[s.length-1],c=u?u.params:{};!u||u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let f,m=J();if(t){var v;let e="string"==typeof t?h(t):t;"/"===p||(null==(v=e.pathname)?void 0:v.startsWith(p))||i(!1),f=e}else f=m;let g=f.pathname||"/",y=g;if("/"!==p){let e=p.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=function(e,t,n){void 0===n&&(n="/");let r="string"==typeof t?h(t):t,a=P(r.pathname||"/",n);if(null==a)return null;let o=d(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=R(a);i=E(o[l],e)}return i}(e,{pathname:y}),x=function(e,t,r,a){var o,l;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){if(null==(l=r)||!l.errors)return null;e=r.matches}let s=e,u=null==(o=r)?void 0:o.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||i(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,h=-1;if(r&&a&&a.v7_partialHydration)for(let n=0;n<s.length;n++){let e=s[n];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(h=n),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,s=h>=0?s.slice(0,h+1):[s[0]];break}}}return s.reduceRight(((e,a,o)=>{let i,l=!1,p=null,d=null;r&&(i=u&&a.route.id?u[a.route.id]:void 0,p=a.route.errorElement||Q,c&&(h<0&&0===o?(l=!0,d=null):h===o&&(l=!0,d=a.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,o+1)),m=()=>{let t;return t=i?p:l?d:a.route.Component?n.createElement(a.route.Component,null):a.route.element?a.route.element:e,n.createElement(Y,{match:a,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:t})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?n.createElement(X,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:k([p,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:k([p,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,r,o);return t&&x?n.createElement(A.Provider,{value:{location:D({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:a.Pop}},x):x}(ae(t),r)},a:ne}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function i(e,t){if(!1===e||null==e)throw new Error(t)}function l(e,t){if(!e)try{throw new Error(t)}catch(n){}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,n,r,a){return void 0===r&&(r=null),t({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof n?h(n):n,{state:r,key:n&&n.key||a||Math.random().toString(36).substr(2,8)})}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var p;function d(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length));let s=k([r,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),d(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:C(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of f(e.path))a(e,t,r);else a(e,t)})),t}function f(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=f(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(p||(p={}));const m=/^:[\w-]+$/,v=3,g=2,y=1,b=10,x=-2,w=e=>"*"===e;function C(e,t){let n=e.split("/"),r=n.length;return n.some(w)&&(r+=x),t&&(r+=g),n.filter((e=>!w(e))).reduce(((e,t)=>e+(m.test(t)?v:""===t?y:b)),r)}function E(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let i=0;i<n.length;++i){let e=n[i],l=i===n.length-1,s="/"===a?t:t.slice(a.length)||"/",u=S({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},s);if(!u)return null;Object.assign(r,u.params);let c=e.route;o.push({params:r,pathname:k([a,u.pathname]),pathnameBase:T(k([a,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(a=k([a,u.pathnameBase]))}return o}function S(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),l("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=a&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function R(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function U(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)):n.map((e=>e.pathnameBase))}function O(e,n,r,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=h(e):(o=t({},e),i(!o.pathname||!o.pathname.includes("?"),L("?","pathname","search",o)),i(!o.pathname||!o.pathname.includes("#"),L("#","pathname","hash",o)),i(!o.search||!o.search.includes("#"),L("#","search","hash",o)));let l,s=""===e||""===o.pathname,u=s?"/":o.pathname;if(null==u)l=r;else{let e=n.length-1;if(!a&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}l=e>=0?n[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?h(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:j(r),hash:B(a)}}(o,l),p=u&&"/"!==u&&u.endsWith("/"),d=(s||"."===u)&&r.endsWith("/");return c.pathname.endsWith("/")||!p&&!d||(c.pathname+="/"),c}const k=e=>e.join("/").replace(/\/\/+/g,"/"),T=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",N=["post","put","patch","delete"];new Set(N);const W=["get",...N];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}new Set(W);const F=n.createContext(null),$=n.createContext(null),_=n.createContext(null),A=n.createContext(null),M=n.createContext({outlet:null,matches:[],isDataRoute:!1}),I=n.createContext(null);function H(){return null!=n.useContext(A)}function J(){return H()||i(!1),n.useContext(A).location}function V(e){n.useContext(_).static||n.useLayoutEffect(e)}function z(){let{isDataRoute:e}=n.useContext(M);return e?function(){let{router:e}=function(e){let t=n.useContext(F);return t||i(!1),t}(Z.UseNavigateStable),t=te(ee.UseNavigateStable),r=n.useRef(!1);return V((()=>{r.current=!0})),n.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"==typeof n?e.navigate(n):e.navigate(n,D({fromRouteId:t},a)))}),[e,t])}():function(){H()||i(!1);let e=n.useContext(F),{basename:t,future:r,navigator:a}=n.useContext(_),{matches:o}=n.useContext(M),{pathname:l}=J(),s=JSON.stringify(U(o,r.v7_relativeSplatPath)),u=n.useRef(!1);return V((()=>{u.current=!0})),n.useCallback((function(n,r){if(void 0===r&&(r={}),!u.current)return;if("number"==typeof n)return void a.go(n);let o=O(n,JSON.parse(s),l,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:k([t,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[t,a,s,l,e])}()}const K=n.createContext(null);function q(e,t){let{relative:r}=void 0===t?{}:t,{future:a}=n.useContext(_),{matches:o}=n.useContext(M),{pathname:i}=J(),l=JSON.stringify(U(o,a.v7_relativeSplatPath));return n.useMemo((()=>O(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function G(){let e=function(){var e;let t=n.useContext(I),r=function(e){let t=n.useContext($);return t||i(!1),t}(ee.UseRouteError),a=te(ee.UseRouteError);return void 0!==t?t:null==(e=r.errors)?void 0:e[a]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:a},r):null,null)}const Q=n.createElement(G,null);class X extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?n.createElement(M.Provider,{value:this.props.routeContext},n.createElement(I.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(F);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(M.Provider,{value:t},a)}var Z=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Z||{}),ee=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ee||{});function te(e){let t=function(e){let t=n.useContext(M);return t||i(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||i(!1),r.route.id}function ne(e){i(!1)}function re(e){let{basename:t="/",children:r=null,location:o,navigationType:l=a.Pop,navigator:s,static:u=!1,future:c}=e;H()&&i(!1);let p=t.replace(/^\/*/,"/"),d=n.useMemo((()=>({basename:p,navigator:s,static:u,future:D({v7_relativeSplatPath:!1},c)})),[p,c,s,u]);"string"==typeof o&&(o=h(o));let{pathname:f="/",search:m="",hash:v="",state:g=null,key:y="default"}=o,b=n.useMemo((()=>{let e=P(f,p);return null==e?null:{location:{pathname:e,search:m,hash:v,state:g,key:y},navigationType:l}}),[p,f,m,v,g,y,l]);return null==b?null:n.createElement(_.Provider,{value:d},n.createElement(A.Provider,{children:r,value:b}))}function ae(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,a)=>{if(!n.isValidElement(e))return;let o=[...t,a];if(e.type===n.Fragment)return void r.push.apply(r,ae(e.props.children,o));e.type!==ne&&i(!1),e.props.index&&e.props.children&&i(!1);let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=ae(e.props.children,o)),r.push(l)})),r}function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Promise((()=>{}));const le=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],se=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch(ye){}const ue=n.createContext({isTransitioning:!1}),ce=r.startTransition,he="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,pe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=e("L",n.forwardRef((function(e,t){let r,{onClick:a,relative:o,reloadDocument:l,replace:s,state:u,target:h,to:p,preventScrollReset:d,unstable_viewTransition:f}=e,m=ie(e,le),{basename:v}=n.useContext(_),g=!1;if("string"==typeof p&&pe.test(p)&&(r=p,he))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=P(t.pathname,v);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:g=!0}catch(ye){}let y=function(e,t){let{relative:r}=void 0===t?{}:t;H()||i(!1);let{basename:a,navigator:o}=n.useContext(_),{hash:l,pathname:s,search:u}=q(e,{relative:r}),c=s;return"/"!==a&&(c="/"===s?a:k([a,s])),o.createHref({pathname:c,search:u,hash:l})}(p,{relative:o}),b=function(e,t){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s}=void 0===t?{}:t,u=z(),h=J(),p=q(e,{relative:l});return n.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let n=void 0!==a?a:c(h)===c(p);u(e,{replace:n,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s})}}),[h,u,p,a,o,r,e,i,l,s])}(p,{replace:s,state:u,target:h,preventScrollReset:d,relative:o,unstable_viewTransition:f});return n.createElement("a",oe({},m,{href:r||y,onClick:g||l?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:t,target:h}))})));var fe,me,ve,ge;e("N",n.forwardRef((function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:l=!1,style:s,to:u,unstable_viewTransition:c,children:h}=e,p=ie(e,se),d=q(u,{relative:p.relative}),f=J(),m=n.useContext($),{navigator:v,basename:g}=n.useContext(_),y=null!=m&&function(e,t){void 0===t&&(t={});let r=n.useContext(ue);null==r&&i(!1);let{basename:a}=function(e){let t=n.useContext(F);return t||i(!1),t}(fe.useViewTransitionState),o=q(e,{relative:t.relative});if(!r.isTransitioning)return!1;let l=P(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=P(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=S(o.pathname,s)||null!=S(o.pathname,l)}(d)&&!0===c,b=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,x=f.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&g&&(w=P(w,g)||w);const C="/"!==b&&b.endsWith("/")?b.length-1:b.length;let E,R=x===b||!l&&x.startsWith(b)&&"/"===x.charAt(C),L=null!=w&&(w===b||!l&&w.startsWith(b)&&"/"===w.charAt(b.length)),U={isActive:R,isPending:L,isTransitioning:y},O=R?r:void 0;E="function"==typeof o?o(U):[o,R?"active":null,L?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let k="function"==typeof s?s(U):s;return n.createElement(de,oe({},p,{"aria-current":O,className:E,ref:t,style:k,to:u,unstable_viewTransition:c}),"function"==typeof h?h(U):h)}))),(me=fe||(fe={})).UseScrollRestoration="useScrollRestoration",me.UseSubmit="useSubmit",me.UseSubmitFetcher="useSubmitFetcher",me.UseFetcher="useFetcher",me.useViewTransitionState="useViewTransitionState",(ge=ve||(ve={})).UseFetcher="useFetcher",ge.UseFetchers="useFetchers",ge.UseScrollRestoration="useScrollRestoration"}}}));
