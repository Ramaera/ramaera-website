(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3365],{45042:function(e,t,n){"use strict";function o(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}n.d(t,{Z:function(){return o}})},97882:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/delete",function(){return n(79657)}])},79657:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return en}});var o=n(85893),r=n(11057),a=n(63366),i=n(87462),s=n(67294),l=n(90512),c=n(94780),u=n(92996),d=n(98216),p=n(11994),m=n(16628),f=n(90629),h=n(71657),g=n(90948),v=n(1588),y=n(34867);function T(e){return(0,y.Z)("MuiDialog",e)}let b=(0,v.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),x=s.createContext({});var E=n(84808),C=n(2734);let Z=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],w=(0,g.ZP)(E.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),_=e=>{let{classes:t,scroll:n,maxWidth:o,fullWidth:r,fullScreen:a}=e,i={root:["root"],container:["container",`scroll${(0,d.Z)(n)}`],paper:["paper",`paperScroll${(0,d.Z)(n)}`,`paperWidth${(0,d.Z)(String(o))}`,r&&"paperFullWidth",a&&"paperFullScreen"]};return(0,c.Z)(i,T,t)},I=(0,g.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),k=(0,g.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.container,t[`scroll${(0,d.Z)(n.scroll)}`]]}})(({ownerState:e})=>(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),R=(0,g.ZP)(f.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.paper,t[`scrollPaper${(0,d.Z)(n.scroll)}`],t[`paperWidth${(0,d.Z)(String(n.maxWidth))}`],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${b.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&"xs"!==t.maxWidth&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${b.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${b.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),M=s.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiDialog"}),r=(0,C.Z)(),c={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":d,"aria-labelledby":p,BackdropComponent:g,BackdropProps:v,children:y,className:T,disableEscapeKeyDown:b=!1,fullScreen:E=!1,fullWidth:M=!1,maxWidth:N="sm",onBackdropClick:D,onClose:L,open:O,PaperComponent:P=f.Z,PaperProps:S={},scroll:$="paper",TransitionComponent:A=m.Z,transitionDuration:W=c,TransitionProps:B}=n,j=(0,a.Z)(n,Z),F=(0,i.Z)({},n,{disableEscapeKeyDown:b,fullScreen:E,fullWidth:M,maxWidth:N,scroll:$}),z=_(F),H=s.useRef(),q=e=>{H.current=e.target===e.currentTarget},X=e=>{H.current&&(H.current=null,D&&D(e),L&&L(e,"backdropClick"))},Y=(0,u.Z)(p),Q=s.useMemo(()=>({titleId:Y}),[Y]);return(0,o.jsx)(I,(0,i.Z)({className:(0,l.Z)(z.root,T),closeAfterTransition:!0,components:{Backdrop:w},componentsProps:{backdrop:(0,i.Z)({transitionDuration:W,as:g},v)},disableEscapeKeyDown:b,onClose:L,open:O,ref:t,onClick:X,ownerState:F},j,{children:(0,o.jsx)(A,(0,i.Z)({appear:!0,in:O,timeout:W,role:"presentation"},B,{children:(0,o.jsx)(k,{className:(0,l.Z)(z.container),onMouseDown:q,ownerState:F,children:(0,o.jsx)(R,(0,i.Z)({as:P,elevation:24,role:"dialog","aria-describedby":d,"aria-labelledby":Y},S,{className:(0,l.Z)(z.paper,S.className),ownerState:F,children:(0,o.jsx)(x.Provider,{value:Q,children:y})}))})}))}))});var N=n(15861);function D(e){return(0,y.Z)("MuiDialogTitle",e)}let L=(0,v.Z)("MuiDialogTitle",["root"]),O=["className","id"],P=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},D,t)},S=(0,g.ZP)(N.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),$=s.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiDialogTitle"}),{className:r,id:c}=n,u=(0,a.Z)(n,O),d=P(n),{titleId:p=c}=s.useContext(x);return(0,o.jsx)(S,(0,i.Z)({component:"h2",className:(0,l.Z)(d.root,r),ownerState:n,ref:t,variant:"h6",id:null!=c?c:p},u))});function A(e){return(0,y.Z)("MuiDialogContent",e)}(0,v.Z)("MuiDialogContent",["root","dividers"]);let W=["className","dividers"],B=e=>{let{classes:t,dividers:n}=e;return(0,c.Z)({root:["root",n&&"dividers"]},A,t)},j=(0,g.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>(0,i.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${L.root} + &`]:{paddingTop:0}})),F=s.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiDialogContent"}),{className:r,dividers:s=!1}=n,c=(0,a.Z)(n,W),u=(0,i.Z)({},n,{dividers:s}),d=B(u);return(0,o.jsx)(j,(0,i.Z)({className:(0,l.Z)(d.root,r),ownerState:u,ref:t},c))});function z(e){return(0,y.Z)("MuiDialogContentText",e)}(0,v.Z)("MuiDialogContentText",["root"]);let H=["children","className"],q=e=>{let{classes:t}=e,n=(0,c.Z)({root:["root"]},z,t);return(0,i.Z)({},t,n)},X=(0,g.ZP)(N.Z,{shouldForwardProp:e=>(0,g.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Y=s.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiDialogContentText"}),{className:r}=n,s=(0,a.Z)(n,H),c=q(s);return(0,o.jsx)(X,(0,i.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:s,className:(0,l.Z)(c.root,r)},n,{classes:c}))});function Q(e){return(0,y.Z)("MuiDialogActions",e)}(0,v.Z)("MuiDialogActions",["root","spacing"]);let V=["className","disableSpacing"],K=e=>{let{classes:t,disableSpacing:n}=e;return(0,c.Z)({root:["root",!n&&"spacing"]},Q,t)},G=(0,g.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,i.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),U=s.forwardRef(function(e,t){let n=(0,h.Z)({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:s=!1}=n,c=(0,a.Z)(n,V),u=(0,i.Z)({},n,{disableSpacing:s}),d=K(u);return(0,o.jsx)(G,(0,i.Z)({className:(0,l.Z)(d.root,r),ownerState:u,ref:t},c))});var J=n(11163),ee=n(9473);n(91444),n(57134);let et=()=>{(0,J.useRouter)(),(0,ee.I0)();let[e,t]=(0,s.useState)(!1),n=()=>{t(!0)},a=()=>{t(!1)},i=async()=>{t(!1)};return(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:[(0,o.jsx)(r.Z,{onClick:()=>n(),variant:"contained",sx:{backgroundColor:"#8C7CF0",color:"white !important","&:hover":{backgroundColor:"#b1a6f3 "}},children:"Delete Account"}),(0,o.jsx)("div",{children:(0,o.jsxs)(M,{open:e,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,o.jsx)($,{id:"alert-dialog-title",children:"Delete Account Forever?"}),(0,o.jsx)(F,{children:(0,o.jsxs)(Y,{id:"alert-dialog-description",children:["You won't be able to recover this account.",(0,o.jsx)("br",{}),"Account will be deleted in 15 Days"]})}),(0,o.jsxs)(U,{children:[(0,o.jsx)(r.Z,{onClick:a,children:"Dismiss"}),(0,o.jsx)(r.Z,{onClick:i,autoFocus:!0,children:"DELETE"})]})]})})]})};var en=et},57134:function(){},91444:function(e,t,n){"use strict";n.d(t,{Ix:function(){return E},Am:function(){return M}});var o=n(67294),r=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(r&&(r+=" "),r+=o);else for(n in t)t[n]&&(r&&(r+=" "),r+=n)}return r}(e))&&(o&&(o+=" "),o+=t);return o};let a=e=>"number"==typeof e&&!isNaN(e),i=e=>"string"==typeof e,s=e=>"function"==typeof e,l=e=>i(e)||s(e)?e:null,c=e=>(0,o.isValidElement)(e)||i(e)||s(e)||a(e);function u(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:a=!0,collapseDuration:i=300}=e;return function(e){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p}=e,m=r?`${t}--${l}`:t,f=r?`${n}--${l}`:n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=m.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:r}=e;requestAnimationFrame(()=>{r.minHeight="initial",r.height=o+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)})})}(e,u,i):u()};p||(c?t():(h.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))},[p]),o.createElement(o.Fragment,null,s)}}function d(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},m=e=>{let{theme:t,type:n,...r}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...r})},f={info:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function v(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":r},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function y(e){let{delay:t,isRunning:n,closeToast:a,type:i="default",hide:l,className:c,style:u,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:h}=e,g=l||d&&0===p,v={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};d&&(v.transform=`scaleX(${p})`);let y=r("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":m}),T=s(c)?c({rtl:m,type:i,defaultClassName:y}):r(y,c);return o.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:T,style:v,[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&a()}})}let T=e=>{let{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:i}=function(e){let[t,n]=(0,o.useState)(!1),[r,a]=(0,o.useState)(!1),i=(0,o.useRef)(null),l=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:p,onClick:m,closeOnClick:f}=e;function v(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",E),document.addEventListener("touchmove",x),document.addEventListener("touchend",E);let n=i.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=h(t.nativeEvent),l.y=g(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(l.boundingRect){let{top:n,bottom:o,left:r,right:a}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=r&&l.x<=a&&l.y>=n&&l.y<=o?b():T()}}function T(){n(!0)}function b(){n(!1)}function x(n){let o=i.current;l.canDrag&&o&&(l.didMove=!0,t&&b(),l.x=h(n),l.y=g(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function E(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",E);let t=i.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{c.current=e}),(0,o.useEffect)(()=>(i.current&&i.current.addEventListener("d",T,{once:!0}),s(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;s(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",T),window.addEventListener("blur",b)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",b))}),[e.pauseOnFocusLoss]);let C={onMouseDown:v,onTouchStart:v,onMouseUp:y,onTouchEnd:y};return u&&d&&(C.onMouseEnter=b,C.onMouseLeave=T),f&&(C.onClick=e=>{m&&m(e),l.canCloseOnClick&&p()}),{playToast:T,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:C}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:p,hideProgressBar:m,closeToast:f,transition:T,position:b,className:x,style:E,bodyClassName:C,bodyStyle:Z,progressClassName:w,progressStyle:_,updateId:I,role:k,progress:R,rtl:M,toastId:N,deleteToast:D,isIn:L,isLoading:O,iconOut:P,closeOnClick:S,theme:$}=e,A=r("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":M},{"Toastify__toast--close-on-click":S}),W=s(x)?x({rtl:M,position:b,type:p,defaultClassName:A}):r(A,x),B=!!R||!u,j={closeToast:f,type:p,theme:$},F=null;return!1===l||(F=s(l)?l(j):(0,o.isValidElement)(l)?(0,o.cloneElement)(l,j):v(j)),o.createElement(T,{isIn:L,done:D,position:b,preventExitTransition:n,nodeRef:a},o.createElement("div",{id:N,onClick:d,className:W,...i,style:E,ref:a},o.createElement("div",{...L&&{role:k},className:s(C)?C({type:p}):r("Toastify__toast-body",C),style:Z},null!=P&&o.createElement("div",{className:r("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},P),o.createElement("div",null,c)),F,o.createElement(y,{...I&&!B?{key:`pb-${I}`}:{},rtl:M,theme:$,delay:u,isRunning:t,isIn:L,closeToast:f,hide:m,type:p,style:_,className:w,controlledProgress:B,progress:R||0})))},b=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},x=u(b("bounce",!0)),E=(u(b("slide",!0)),u(b("zoom")),u(b("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:u,isToastActive:m}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,r]=(0,o.useState)([]),u=(0,o.useRef)(null),m=(0,o.useRef)(new Map).current,h=e=>-1!==n.indexOf(e),g=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:h,getToast:e=>m.get(e)}).current;function v(e){let{containerId:t}=e,{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function y(e){r(t=>null==e?[]:t.filter(t=>t!==e))}function T(){let{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();x(e,t,n)}function b(e,n){var r,h;let{delay:v,staleId:b,...E}=n;if(!c(e)||!u.current||g.props.enableMultiContainer&&E.containerId!==g.props.containerId||m.has(E.toastId)&&null==E.updateId)return;let{toastId:C,updateId:Z,data:w}=E,{props:_}=g,I=()=>y(C),k=null==Z;k&&g.count++;let R={..._,style:_.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(E).filter(e=>{let[t,n]=e;return null!=n})),toastId:C,updateId:Z,data:w,closeToast:I,isIn:!1,className:l(E.className||_.toastClassName),bodyClassName:l(E.bodyClassName||_.bodyClassName),progressClassName:l(E.progressClassName||_.progressClassName),autoClose:!E.isLoading&&(r=E.autoClose,h=_.autoClose,!1===r||a(r)&&r>0?r:h),deleteToast(){let e=d(m.get(C),"removed");m.delete(C),p.emit(4,e);let n=g.queue.length;if(g.count=null==C?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){let o=null==C?g.props.limit:1;if(1===n||1===o)g.displayedToast++,T();else{let r=o>n?n:o;g.displayedToast=r;for(let a=0;a<r;a++)T()}}else t()}};R.iconOut=function(e){let{theme:t,type:n,isLoading:r,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(s(l)?c=l(u):(0,o.isValidElement)(l)?c=(0,o.cloneElement)(l,u):i(l)||a(l)?c=l:r?c=f.spinner():n in f&&(c=f[n](u))),c}(R),s(E.onOpen)&&(R.onOpen=E.onOpen),s(E.onClose)&&(R.onClose=E.onClose),R.closeButton=_.closeButton,!1===E.closeButton||c(E.closeButton)?R.closeButton=E.closeButton:!0===E.closeButton&&(R.closeButton=!c(_.closeButton)||_.closeButton);let M=e;(0,o.isValidElement)(e)&&!i(e.type)?M=(0,o.cloneElement)(e,{closeToast:I,toastProps:R,data:w}):s(e)&&(M=e({closeToast:I,toastProps:R,data:w})),_.limit&&_.limit>0&&g.count>_.limit&&k?g.queue.push({toastContent:M,toastProps:R,staleId:b}):a(v)?setTimeout(()=>{x(M,R,b)},v):x(M,R,b)}function x(e,t,n){let{toastId:o}=t;n&&m.delete(n);let a={content:e,props:t};m.set(o,a),r(e=>[...e,o].filter(e=>e!==n)),p.emit(4,d(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(g.containerId=e.containerId,p.cancelEmit(3).on(0,b).on(1,e=>u.current&&y(e)).on(5,v).emit(2,g),()=>{m.clear(),p.emit(3,g)}),[]),(0,o.useEffect)(()=>{g.props=e,g.isToastActive=h,g.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(m.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:h}}(e),{className:h,style:g,rtl:v,containerId:y}=e;return(0,o.useEffect)(()=>{t&&(t.current=u.current)},[]),o.createElement("div",{ref:u,className:"Toastify",id:y},n((e,t)=>{let n=t.length?{...g}:{...g,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=r("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return s(h)?h({position:e,rtl:v,defaultClassName:t}):r(t,l(h))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:r,props:a}=e;return o.createElement(T,{...a,isIn:m(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},r)}))}))}));E.displayName="ToastContainer",E.defaultProps={position:"top-right",transition:x,autoClose:5e3,closeButton:v,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let C,Z=new Map,w=[],_=1;function I(e,t){return Z.size>0?p.emit(0,e,t):w.push({content:e,options:t}),t.toastId}function k(e,t){return{...t,type:t&&t.type||e,toastId:t&&(i(t.toastId)||a(t.toastId))?t.toastId:""+_++}}function R(e){return(t,n)=>I(t,k(e,n))}function M(e,t){return I(e,k("default",t))}M.loading=(e,t)=>I(e,k("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),M.promise=function(e,t,n){let o,{pending:r,error:a,success:l}=t;r&&(o=i(r)?M.loading(r,n):M.loading(r.render,{...n,...r}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,r)=>{if(null==t)return void M.dismiss(o);let a={type:e,...c,...n,data:r},s=i(t)?{render:t}:t;return o?M.update(o,{...a,...s}):M(s.render,{...a,...s}),r},d=s(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",a,e)),d},M.success=R("success"),M.info=R("info"),M.error=R("error"),M.warning=R("warning"),M.warn=M.warning,M.dark=(e,t)=>I(e,k("default",{theme:"dark",...t})),M.dismiss=e=>{Z.size>0?p.emit(1,e):w=w.filter(t=>null!=e&&t.options.toastId!==e)},M.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},M.isActive=e=>{let t=!1;return Z.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},M.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=Z.get(n||C);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:r}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:""+_++};a.toastId!==e&&(a.staleId=e);let i=a.render||r;delete a.render,I(i,a)}},0)},M.done=e=>{M.update(e,{progress:1})},M.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),M.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},M.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,e=>{C=e.containerId||e,Z.set(C,e),w.forEach(e=>{p.emit(0,e.content,e.options)}),w=[]}).on(3,e=>{Z.delete(e.containerId||e),0===Z.size&&p.off(0).off(1).off(5)})}},function(e){e.O(0,[273,9313,3076,9774,2888,179],function(){return e(e.s=97882)}),_N_E=e.O()}]);