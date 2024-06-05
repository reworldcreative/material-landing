System.register(["./vendor-legacy.BH0fLQgq.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.a}],execute:function(){e("u",(function(e={}){const t=r.useRef(),s=r.useRef(),[a,i]=r.useState({isDirty:!1,isValidating:!1,isLoading:$(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:$(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Se(e),formState:a});const n=t.current.control;return n._options=e,L({subject:n._subjects.state,next:e=>{U(e,n._proxyFormState,n._updateFormState,!0)&&i({...n._formState})}}),r.useEffect((()=>n._disableForm(e.disabled)),[n,e.disabled]),r.useEffect((()=>{if(n._proxyFormState.isDirty){const e=n._getDirty();e!==a.isDirty&&n._subjects.state.next({isDirty:e})}}),[n,a.isDirty]),r.useEffect((()=>{e.values&&!le(e.values,s.current)?(n._reset(e.values,n._options.resetOptions),s.current=e.values,i((e=>({...e})))):n._resetDefaultValues()}),[e.values,n]),r.useEffect((()=>{e.errors&&n._setErrors(e.errors)}),[e.errors,n]),r.useEffect((()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()})),r.useEffect((()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})}),[e.shouldUnregister,n]),t.current.formState=C(a,n),t.current}));var t=e=>"checkbox"===e.type,s=e=>e instanceof Date,a=e=>null==e;const i=e=>"object"==typeof e;var n=e=>!a(e)&&!Array.isArray(e)&&i(e)&&!s(e),l=e=>n(e)&&e.target?t(e.target)?e.target.checked:e.target.value:e,o=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),u=e=>{const t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},d="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function c(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(d&&(e instanceof Blob||e instanceof FileList)||!r&&!n(e))return e;if(t=r?[]:{},r||u(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=c(e[r]));else t=e}return t}var f=e=>Array.isArray(e)?e.filter(Boolean):[],m=e=>void 0===e,y=(e,t,r)=>{if(!t||!n(e))return r;const s=f(t.split(/[,[\].]+?/)).reduce(((e,t)=>a(e)?e:e[t]),e);return m(s)||s===e?m(e[t])?r:e[t]:s},v=e=>"boolean"==typeof e,g=e=>/^\w*$/.test(e),h=e=>f(e.replace(/["|']|\]/g,"").split(/\.|\[/)),b=(e,t,r)=>{let s=-1;const a=g(t)?[t]:h(t),i=a.length,l=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==l){const r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}if("__proto__"===t)return;e[t]=i,e=e[t]}return e};const _={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},V="max",A="min",F="maxLength",S="minLength",x="pattern",w="required",D="validate",k=r.createContext(null),E=()=>r.useContext(k);var C=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==p.all&&(t._proxyFormState[a]=!s||p.all),r&&(r[a]=!0),e[a]}});return a},O=e=>n(e)&&!Object.keys(e).length,U=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return O(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||p.all)))},j=e=>Array.isArray(e)?e:[e],T=(e,t,r)=>!e||!t||e===t||j(e).some((e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e))));function L(e){const t=r.useRef(e);t.current=e,r.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var B=e=>"string"==typeof e,N=(e,t,r,s,a)=>B(e)?(s&&t.watch.add(e),y(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),y(r,e)))):(s&&(t.watchAll=!0),r);function M(e){const t=E(),{name:s,disabled:a,control:i=t.control,shouldUnregister:n}=e,u=o(i._names.array,s),d=function(e){const t=E(),{control:s=t.control,name:a,defaultValue:i,disabled:n,exact:l}=e||{},o=r.useRef(a);o.current=a,L({disabled:n,subject:s._subjects.values,next:e=>{T(o.current,e.name,l)&&d(c(N(o.current,s._names,e.values||s._formValues,!1,i)))}});const[u,d]=r.useState(s._getWatch(a,i));return r.useEffect((()=>s._removeUnmounted())),u}({control:i,name:s,defaultValue:y(i._formValues,s,y(i._defaultValues,s,e.defaultValue)),exact:!0}),f=function(e){const t=E(),{control:s=t.control,disabled:a,name:i,exact:n}=e||{},[l,o]=r.useState(s._formState),u=r.useRef(!0),d=r.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=r.useRef(i);return c.current=i,L({disabled:a,next:e=>u.current&&T(c.current,e.name,n)&&U(e,d.current,s._updateFormState)&&o({...s._formState,...e}),subject:s._subjects.state}),r.useEffect((()=>(u.current=!0,d.current.isValid&&s._updateValid(!0),()=>{u.current=!1})),[s]),C(l,s,d.current,!1)}({control:i,name:s}),g=r.useRef(i.register(s,{...e.rules,value:d,...v(e.disabled)?{disabled:e.disabled}:{}}));return r.useEffect((()=>{const e=i._options.shouldUnregister||n,t=(e,t)=>{const r=y(i._fields,e);r&&(r._f.mount=t)};if(t(s,!0),e){const e=c(y(i._options.defaultValues,s));b(i._defaultValues,s,e),m(y(i._formValues,s))&&b(i._formValues,s,e)}return()=>{(u?e&&!i._state.action:e)?i.unregister(s):t(s,!1)}}),[s,i,u,n]),r.useEffect((()=>{y(i._fields,s)&&i._updateDisabledField({disabled:a,fields:i._fields,name:s,value:y(i._fields,s)._f.value})}),[a,s,i]),{field:{name:s,value:d,...v(a)||f.disabled?{disabled:f.disabled||a}:{},onChange:r.useCallback((e=>g.current.onChange({target:{value:l(e),name:s},type:_.CHANGE})),[s]),onBlur:r.useCallback((()=>g.current.onBlur({target:{value:y(i._formValues,s),name:s},type:_.BLUR})),[s,i]),ref:e=>{const t=y(i._fields,s);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:f,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!y(f.errors,s)},isDirty:{enumerable:!0,get:()=>!!y(f.dirtyFields,s)},isTouched:{enumerable:!0,get:()=>!!y(f.touchedFields,s)},isValidating:{enumerable:!0,get:()=>!!y(f.validatingFields,s)},error:{enumerable:!0,get:()=>y(f.errors,s)}})}}e("C",(e=>e.render(M(e))));var R=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},q=e=>({isOnSubmit:!e||e===p.onSubmit,isOnBlur:e===p.onBlur,isOnChange:e===p.onChange,isOnAll:e===p.all,isOnTouch:e===p.onTouched}),P=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const W=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=y(e,a);if(r){const{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)break;if(e.ref&&t(e.ref,e.name)&&!s)break;W(i,t)}else n(i)&&W(i,t)}}};var H=(e,t,r)=>{const s=f(y(e,r));return b(s,"root",t[r]),b(e,r,s),e},I=e=>"file"===e.type,$=e=>"function"==typeof e,G=e=>{if(!d)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},z=e=>B(e),J=e=>"radio"===e.type,K=e=>e instanceof RegExp;const Q={value:!1,isValid:!1},X={value:!0,isValid:!0};var Y=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!m(e[0].attributes.value)?m(e[0].value)||""===e[0].value?X:{value:e[0].value,isValid:!0}:X:Q}return Q};const Z={isValid:!1,value:null};var ee=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),Z):Z;function te(e,t,r="validate"){if(z(e)||Array.isArray(e)&&e.every(z)||v(e)&&!e)return{type:r,message:z(e)?e:"",ref:t}}var re=e=>n(e)&&!K(e)?e:{value:e,message:""},se=async(e,r,s,i,l)=>{const{ref:o,refs:u,required:d,maxLength:c,minLength:f,min:g,max:h,pattern:b,validate:_,name:p,valueAsNumber:k,mount:E,disabled:C}=e._f,U=y(r,p);if(!E||C)return{};const j=u?u[0]:o,T=e=>{i&&j.reportValidity&&(j.setCustomValidity(v(e)?"":e||""),j.reportValidity())},L={},N=J(o),M=t(o),q=N||M,P=(k||I(o))&&m(o.value)&&m(U)||G(o)&&""===o.value||""===U||Array.isArray(U)&&!U.length,W=R.bind(null,p,s,L),H=(e,t,r,s=F,a=S)=>{const i=e?t:r;L[p]={type:e?s:a,message:i,ref:o,...W(e?s:a,i)}};if(l?!Array.isArray(U)||!U.length:d&&(!q&&(P||a(U))||v(U)&&!U||M&&!Y(u).isValid||N&&!ee(u).isValid)){const{value:e,message:t}=z(d)?{value:!!d,message:d}:re(d);if(e&&(L[p]={type:w,message:t,ref:j,...W(w,t)},!s))return T(t),L}if(!(P||a(g)&&a(h))){let e,t;const r=re(h),i=re(g);if(a(U)||isNaN(U)){const s=o.valueAsDate||new Date(U),a=e=>new Date((new Date).toDateString()+" "+e),n="time"==o.type,l="week"==o.type;B(r.value)&&U&&(e=n?a(U)>a(r.value):l?U>r.value:s>new Date(r.value)),B(i.value)&&U&&(t=n?a(U)<a(i.value):l?U<i.value:s<new Date(i.value))}else{const s=o.valueAsNumber||(U?+U:U);a(r.value)||(e=s>r.value),a(i.value)||(t=s<i.value)}if((e||t)&&(H(!!e,r.message,i.message,V,A),!s))return T(L[p].message),L}if((c||f)&&!P&&(B(U)||l&&Array.isArray(U))){const e=re(c),t=re(f),r=!a(e.value)&&U.length>+e.value,i=!a(t.value)&&U.length<+t.value;if((r||i)&&(H(r,e.message,t.message),!s))return T(L[p].message),L}if(b&&!P&&B(U)){const{value:e,message:t}=re(b);if(K(e)&&!U.match(e)&&(L[p]={type:x,message:t,ref:o,...W(x,t)},!s))return T(t),L}if(_)if($(_)){const e=te(await _(U,r),j);if(e&&(L[p]={...e,...W(D,e.message)},!s))return T(e.message),L}else if(n(_)){let e={};for(const t in _){if(!O(e)&&!s)break;const a=te(await _[t](U,r),j,t);a&&(e={...a,...W(t,a.message)},T(a.message),s&&(L[p]=e))}if(!O(e)&&(L[p]={ref:j,...e},!s))return L}return T(!0),L};function ae(e,t){const r=Array.isArray(t)?t:g(t)?[t]:h(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=m(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(n(s)&&O(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!m(e[t]))return!1;return!0}(s))&&ae(e,r.slice(0,-1)),e}var ie=()=>{let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},ne=e=>a(e)||!i(e);function le(e,t){if(ne(e)||ne(t))return e===t;if(s(e)&&s(t))return e.getTime()===t.getTime();const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(const i of r){const r=e[i];if(!a.includes(i))return!1;if("ref"!==i){const e=t[i];if(s(r)&&s(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!le(r,e):r!==e)return!1}}return!0}var oe=e=>"select-multiple"===e.type,ue=e=>J(e)||t(e),de=e=>G(e)&&e.isConnected,ce=e=>{for(const t in e)if($(e[t]))return!0;return!1};function fe(e,t={}){const r=Array.isArray(e);if(n(e)||r)for(const s in e)Array.isArray(e[s])||n(e[s])&&!ce(e[s])?(t[s]=Array.isArray(e[s])?[]:{},fe(e[s],t[s])):a(e[s])||(t[s]=!0);return t}function me(e,t,r){const s=Array.isArray(e);if(n(e)||s)for(const i in e)Array.isArray(e[i])||n(e[i])&&!ce(e[i])?m(t)||ne(r[i])?r[i]=Array.isArray(e[i])?fe(e[i],[]):{...fe(e[i])}:me(e[i],a(t)?{}:t[i],r[i]):r[i]=!le(e[i],t[i]);return r}var ye=(e,t)=>me(e,t,fe(t)),ve=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>m(e)?e:t?""===e?NaN:e?+e:e:r&&B(e)?new Date(e):s?s(e):e;function ge(e){const r=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):r.disabled))return I(r)?r.files:J(r)?ee(e.refs).value:oe(r)?[...r.selectedOptions].map((({value:e})=>e)):t(r)?Y(e.refs).value:ve(m(r.value)?e.ref.value:r.value,e)}var he=(e,t,r,s)=>{const a={};for(const i of e){const e=y(t,i);e&&b(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},be=e=>m(e)?e:K(e)?e.source:n(e)?K(e.value)?e.value.source:e.value:e,_e=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function pe(e,t,r){const s=y(e,r);if(s||g(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=y(t,s),n=y(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var Ve=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),Ae=(e,t)=>!f(y(e,t)).length&&ae(e,t);const Fe={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0};function Se(e={}){let r,i={...Fe,...e},u={submitCount:0,isDirty:!1,isLoading:$(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1},g={},h=(n(i.defaultValues)||n(i.values))&&c(i.defaultValues||i.values)||{},V=i.shouldUnregister?{}:c(h),A={action:!1,mount:!1,watch:!1},F={mount:new Set,unMount:new Set,array:new Set,watch:new Set},S=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},w={values:ie(),array:ie(),state:ie()},D=q(i.mode),k=q(i.reValidateMode),E=i.criteriaMode===p.all,C=async e=>{if(x.isValid||e){const e=i.resolver?O((await R()).errors):await z(g,!0);e!==u.isValid&&w.state.next({isValid:e})}},U=(e,t)=>{(x.isValidating||x.validatingFields)&&((e||Array.from(F.mount)).forEach((e=>{e&&(t?b(u.validatingFields,e,t):ae(u.validatingFields,e))})),w.state.next({validatingFields:u.validatingFields,isValidating:!O(u.validatingFields)}))},T=(e,t,r,s)=>{const a=y(g,e);if(a){const i=y(V,e,m(r)?y(h,e):r);m(i)||s&&s.defaultChecked||t?b(V,e,t?i:ge(a._f)):Q(e,i),A.mount&&C()}},L=(e,t,r,s,a)=>{let i=!1,n=!1;const l={name:e},o=!(!y(g,e)||!y(g,e)._f.disabled);if(!r||s){x.isDirty&&(n=u.isDirty,u.isDirty=l.isDirty=J(),i=n!==l.isDirty);const r=o||le(y(h,e),t);n=!(o||!y(u.dirtyFields,e)),r||o?ae(u.dirtyFields,e):b(u.dirtyFields,e,!0),l.dirtyFields=u.dirtyFields,i=i||x.dirtyFields&&n!==!r}if(r){const t=y(u.touchedFields,e);t||(b(u.touchedFields,e,r),l.touchedFields=u.touchedFields,i=i||x.touchedFields&&t!==r)}return i&&a&&w.state.next(l),i?l:{}},M=(t,s,a,i)=>{const n=y(u.errors,t),l=x.isValid&&v(s)&&u.isValid!==s;var o;if(e.delayError&&a?(o=()=>((e,t)=>{b(u.errors,e,t),w.state.next({errors:u.errors})})(t,a),r=e=>{clearTimeout(S),S=setTimeout(o,e)},r(e.delayError)):(clearTimeout(S),r=null,a?b(u.errors,t,a):ae(u.errors,t)),(a?!le(n,a):n)||!O(i)||l){const e={...i,...l&&v(s)?{isValid:s}:{},errors:u.errors,name:t};u={...u,...e},w.state.next(e)}},R=async e=>{U(e,!0);const t=await i.resolver(V,i.context,he(e||F.mount,g,i.criteriaMode,i.shouldUseNativeValidation));return U(e),t},z=async(e,t,r={valid:!0})=>{for(const s in e){const a=e[s];if(a){const{_f:e,...n}=a;if(e){const n=F.array.has(e.name);U([s],!0);const l=await se(a,V,E,i.shouldUseNativeValidation&&!t,n);if(U([s]),l[e.name]&&(r.valid=!1,t))break;!t&&(y(l,e.name)?n?H(u.errors,l,e.name):b(u.errors,e.name,l[e.name]):ae(u.errors,e.name))}n&&await z(n,t,r)}}return r.valid},J=(e,t)=>(e&&t&&b(V,e,t),!le(re(),h)),K=(e,t,r)=>N(e,F,{...A.mount?V:m(t)?h:B(e)?{[e]:t}:t},r,t),Q=(e,r,s={})=>{const i=y(g,e);let n=r;if(i){const s=i._f;s&&(!s.disabled&&b(V,e,ve(r,s)),n=G(s.ref)&&a(r)?"":r,oe(s.ref)?[...s.ref.options].forEach((e=>e.selected=n.includes(e.value))):s.refs?t(s.ref)?s.refs.length>1?s.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):s.refs[0]&&(s.refs[0].checked=!!n):s.refs.forEach((e=>e.checked=e.value===n)):I(s.ref)?s.ref.value="":(s.ref.value=n,s.ref.type||w.values.next({name:e,values:{...V}})))}(s.shouldDirty||s.shouldTouch)&&L(e,n,s.shouldTouch,s.shouldDirty,!0),s.shouldValidate&&te(e)},X=(e,t,r)=>{for(const a in t){const i=t[a],n=`${e}.${a}`,l=y(g,n);!F.array.has(e)&&ne(i)&&(!l||l._f)||s(i)?Q(n,i,r):X(n,i,r)}},Y=(e,t,r={})=>{const s=y(g,e),i=F.array.has(e),n=c(t);b(V,e,n),i?(w.array.next({name:e,values:{...V}}),(x.isDirty||x.dirtyFields)&&r.shouldDirty&&w.state.next({name:e,dirtyFields:ye(h,V),isDirty:J(e,n)})):!s||s._f||a(n)?Q(e,n,r):X(e,n,r),P(e,F)&&w.state.next({...u}),w.values.next({name:A.mount?e:void 0,values:{...V}})},Z=async e=>{A.mount=!0;const t=e.target;let s=t.name,a=!0;const n=y(g,s),o=e=>{a=Number.isNaN(e)||e===y(V,s,e)};if(n){let d,c;const f=t.type?ge(n._f):l(e),m=e.type===_.BLUR||e.type===_.FOCUS_OUT,v=!_e(n._f)&&!i.resolver&&!y(u.errors,s)&&!n._f.deps||Ve(m,y(u.touchedFields,s),u.isSubmitted,k,D),h=P(s,F,m);b(V,s,f),m?(n._f.onBlur&&n._f.onBlur(e),r&&r(0)):n._f.onChange&&n._f.onChange(e);const p=L(s,f,m,!1),A=!O(p)||h;if(!m&&w.values.next({name:s,type:e.type,values:{...V}}),v)return x.isValid&&C(),A&&w.state.next({name:s,...h?{}:p});if(!m&&h&&w.state.next({...u}),i.resolver){const{errors:e}=await R([s]);if(o(f),a){const t=pe(u.errors,g,s),r=pe(e,g,t.name||s);d=r.error,s=r.name,c=O(e)}}else U([s],!0),d=(await se(n,V,E,i.shouldUseNativeValidation))[s],U([s]),o(f),a&&(d?c=!1:x.isValid&&(c=await z(g,!0)));a&&(n._f.deps&&te(n._f.deps),M(s,c,d,p))}},ee=(e,t)=>{if(y(u.errors,t)&&e.focus)return e.focus(),1},te=async(e,t={})=>{let r,s;const a=j(e);if(i.resolver){const t=await(async e=>{const{errors:t}=await R(e);if(e)for(const r of e){const e=y(t,r);e?b(u.errors,r,e):ae(u.errors,r)}else u.errors=t;return t})(m(e)?e:a);r=O(t),s=e?!a.some((e=>y(t,e))):r}else e?(s=(await Promise.all(a.map((async e=>{const t=y(g,e);return await z(t&&t._f?{[e]:t}:t)})))).every(Boolean),(s||u.isValid)&&C()):s=r=await z(g);return w.state.next({...!B(e)||x.isValid&&r!==u.isValid?{}:{name:e},...i.resolver||!e?{isValid:r}:{},errors:u.errors}),t.shouldFocus&&!s&&W(g,ee,e?a:F.mount),s},re=e=>{const t={...A.mount?V:h};return m(e)?t:B(e)?y(t,e):e.map((e=>y(t,e)))},ce=(e,t)=>({invalid:!!y((t||u).errors,e),isDirty:!!y((t||u).dirtyFields,e),isTouched:!!y((t||u).touchedFields,e),isValidating:!!y((t||u).validatingFields,e),error:y((t||u).errors,e)}),fe=(e,t,r)=>{const s=(y(g,e,{_f:{}})._f||{}).ref,a=y(u.errors,e)||{},{ref:i,message:n,type:l,...o}=a;b(u.errors,e,{...o,...t,ref:s}),w.state.next({name:e,errors:u.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},me=(e,t={})=>{for(const r of e?j(e):F.mount)F.mount.delete(r),F.array.delete(r),t.keepValue||(ae(g,r),ae(V,r)),!t.keepError&&ae(u.errors,r),!t.keepDirty&&ae(u.dirtyFields,r),!t.keepTouched&&ae(u.touchedFields,r),!t.keepIsValidating&&ae(u.validatingFields,r),!i.shouldUnregister&&!t.keepDefaultValue&&ae(h,r);w.values.next({values:{...V}}),w.state.next({...u,...t.keepDirty?{isDirty:J()}:{}}),!t.keepIsValid&&C()},Se=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(v(e)&&A.mount||e){const i=e?void 0:m(a)?ge(r?r._f:y(s,t)._f):a;b(V,t,i),L(t,i,!1,!1,!0)}},xe=(e,t={})=>{let r=y(g,e);const s=v(t.disabled);return b(g,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),F.mount.add(e),r?Se({field:r,disabled:t.disabled,name:e,value:t.value}):T(e,!0,t.value),{...s?{disabled:t.disabled}:{},...i.progressive?{required:!!t.required,min:be(t.min),max:be(t.max),minLength:be(t.minLength),maxLength:be(t.maxLength),pattern:be(t.pattern)}:{},name:e,onChange:Z,onBlur:Z,ref:s=>{if(s){xe(e,t),r=y(g,e);const a=m(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,i=ue(a),n=r._f.refs||[];if(i?n.find((e=>e===a)):a===r._f.ref)return;b(g,e,{_f:{...r._f,...i?{refs:[...n.filter(de),a,...Array.isArray(y(h,e))?[{}]:[]],ref:{type:a.type,name:e}}:{ref:a}}}),T(e,!1,void 0,a)}else r=y(g,e,{}),r._f&&(r._f.mount=!1),(i.shouldUnregister||t.shouldUnregister)&&(!o(F.array,e)||!A.action)&&F.unMount.add(e)}}},we=()=>i.shouldFocusError&&W(g,ee,F.mount),De=(e,t)=>async r=>{let s;r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let a=c(V);if(w.state.next({isSubmitting:!0}),i.resolver){const{errors:e,values:t}=await R();u.errors=e,a=t}else await z(g);if(ae(u.errors,"root"),O(u.errors)){w.state.next({errors:{}});try{await e(a,r)}catch(n){s=n}}else t&&await t({...u.errors},r),we(),setTimeout(we);if(w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(u.errors)&&!s,submitCount:u.submitCount+1,errors:u.errors}),s)throw s},ke=(t,r={})=>{const s=t?c(t):h,a=c(s),i=O(t),n=i?h:a;if(r.keepDefaultValues||(h=s),!r.keepValues){if(r.keepDirtyValues)for(const e of F.mount)y(u.dirtyFields,e)?b(n,e,y(V,e)):Y(e,y(n,e));else{if(d&&m(t))for(const e of F.mount){const t=y(g,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(G(e)){const t=e.closest("form");if(t){t.reset();break}}}}g={}}V=e.shouldUnregister?r.keepDefaultValues?c(h):{}:c(n),w.array.next({values:{...n}}),w.values.next({values:{...n}})}F={mount:r.keepDirtyValues?F.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},A.mount=!x.isValid||!!r.keepIsValid||!!r.keepDirtyValues,A.watch=!!e.shouldUnregister,w.state.next({submitCount:r.keepSubmitCount?u.submitCount:0,isDirty:!i&&(r.keepDirty?u.isDirty:!(!r.keepDefaultValues||le(t,h))),isSubmitted:!!r.keepIsSubmitted&&u.isSubmitted,dirtyFields:i?[]:r.keepDirtyValues?r.keepDefaultValues&&V?ye(h,V):u.dirtyFields:r.keepDefaultValues&&t?ye(h,t):{},touchedFields:r.keepTouched?u.touchedFields:{},errors:r.keepErrors?u.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&u.isSubmitSuccessful,isSubmitting:!1})},Ee=(e,t)=>ke($(e)?e(V):e,t);return{control:{register:xe,unregister:me,getFieldState:ce,handleSubmit:De,setError:fe,_executeSchema:R,_getWatch:K,_getDirty:J,_updateValid:C,_removeUnmounted:()=>{for(const e of F.unMount){const t=y(g,e);t&&(t._f.refs?t._f.refs.every((e=>!de(e))):!de(t._f.ref))&&me(e)}F.unMount=new Set},_updateFieldArray:(e,t=[],r,s,a=!0,i=!0)=>{if(s&&r){if(A.action=!0,i&&Array.isArray(y(g,e))){const t=r(y(g,e),s.argA,s.argB);a&&b(g,e,t)}if(i&&Array.isArray(y(u.errors,e))){const t=r(y(u.errors,e),s.argA,s.argB);a&&b(u.errors,e,t),Ae(u.errors,e)}if(x.touchedFields&&i&&Array.isArray(y(u.touchedFields,e))){const t=r(y(u.touchedFields,e),s.argA,s.argB);a&&b(u.touchedFields,e,t)}x.dirtyFields&&(u.dirtyFields=ye(h,V)),w.state.next({name:e,isDirty:J(e,t),dirtyFields:u.dirtyFields,errors:u.errors,isValid:u.isValid})}else b(V,e,t)},_updateDisabledField:Se,_getFieldArray:t=>f(y(A.mount?V:h,t,e.shouldUnregister?y(h,t,[]):[])),_reset:ke,_resetDefaultValues:()=>$(i.defaultValues)&&i.defaultValues().then((e=>{Ee(e,i.resetOptions),w.state.next({isLoading:!1})})),_updateFormState:e=>{u={...u,...e}},_disableForm:e=>{v(e)&&(w.state.next({disabled:e}),W(g,((t,r)=>{const s=y(g,r);s&&(t.disabled=s._f.disabled||e,Array.isArray(s._f.refs)&&s._f.refs.forEach((t=>{t.disabled=s._f.disabled||e})))}),0,!1))},_subjects:w,_proxyFormState:x,_setErrors:e=>{u.errors=e,w.state.next({errors:u.errors,isValid:!1})},get _fields(){return g},get _formValues(){return V},get _state(){return A},set _state(e){A=e},get _defaultValues(){return h},get _names(){return F},set _names(e){F=e},get _formState(){return u},set _formState(e){u=e},get _options(){return i},set _options(e){i={...i,...e}}},trigger:te,register:xe,handleSubmit:De,watch:(e,t)=>$(e)?w.values.subscribe({next:r=>e(K(void 0,t),r)}):K(e,t,!0),setValue:Y,getValues:re,reset:Ee,resetField:(e,t={})=>{y(g,e)&&(m(t.defaultValue)?Y(e,c(y(h,e))):(Y(e,t.defaultValue),b(h,e,c(t.defaultValue))),t.keepTouched||ae(u.touchedFields,e),t.keepDirty||(ae(u.dirtyFields,e),u.isDirty=t.defaultValue?J(e,c(y(h,e))):J()),t.keepError||(ae(u.errors,e),x.isValid&&C()),w.state.next({...u}))},clearErrors:e=>{e&&j(e).forEach((e=>ae(u.errors,e))),w.state.next({errors:e?u.errors:{}})},unregister:me,setError:fe,setFocus:(e,t={})=>{const r=y(g,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ce}}}}}));
