(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2581],{69308:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var o=r(t(64938)),i=t(85893),u=(0,o.default)((0,i.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");n.Z=u},64938:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(76031)},56863:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(63366),o=t(87462),i=t(67294),u=t(90512),a=t(94780),c=t(41796),d=t(98216),l=t(90948),s=t(71657),f=t(1588),v=t(34867);function p(e){return(0,v.Z)("MuiButtonGroup",e)}let m=(0,f.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var h=t(98363),g=t(85893);let b=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],y=(e,n)=>{let{ownerState:t}=e;return[{[`& .${m.grouped}`]:n.grouped},{[`& .${m.grouped}`]:n[`grouped${(0,d.Z)(t.orientation)}`]},{[`& .${m.grouped}`]:n[`grouped${(0,d.Z)(t.variant)}`]},{[`& .${m.grouped}`]:n[`grouped${(0,d.Z)(t.variant)}${(0,d.Z)(t.orientation)}`]},{[`& .${m.grouped}`]:n[`grouped${(0,d.Z)(t.variant)}${(0,d.Z)(t.color)}`]},n.root,n[t.variant],!0===t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth,"vertical"===t.orientation&&n.vertical]},x=e=>{let{classes:n,color:t,disabled:r,disableElevation:o,fullWidth:i,orientation:u,variant:c}=e,l={root:["root",c,"vertical"===u&&"vertical",i&&"fullWidth",o&&"disableElevation"],grouped:["grouped",`grouped${(0,d.Z)(u)}`,`grouped${(0,d.Z)(c)}`,`grouped${(0,d.Z)(c)}${(0,d.Z)(u)}`,`grouped${(0,d.Z)(c)}${(0,d.Z)(t)}`,r&&"disabled"]};return(0,a.Z)(l,p,n)},E=(0,l.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:y})(({theme:e,ownerState:n})=>(0,o.Z)({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},"contained"===n.variant&&{boxShadow:(e.vars||e).shadows[2]},n.disableElevation&&{boxShadow:"none"},n.fullWidth&&{width:"100%"},"vertical"===n.orientation&&{flexDirection:"column"},{[`& .${m.grouped}`]:(0,o.Z)({minWidth:40,"&:not(:first-of-type)":(0,o.Z)({},"horizontal"===n.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===n.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===n.variant&&"horizontal"===n.orientation&&{marginLeft:-1},"outlined"===n.variant&&"vertical"===n.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,o.Z)({},"horizontal"===n.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===n.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===n.variant&&"horizontal"===n.orientation&&{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${m.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},"text"===n.variant&&"vertical"===n.orientation&&{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${m.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},"text"===n.variant&&"inherit"!==n.color&&{borderColor:e.vars?`rgba(${e.vars.palette[n.color].mainChannel} / 0.5)`:(0,c.Fq)(e.palette[n.color].main,.5)},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"transparent"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"transparent"},"contained"===n.variant&&"horizontal"===n.orientation&&{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${m.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},"contained"===n.variant&&"vertical"===n.orientation&&{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${m.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},"contained"===n.variant&&"inherit"!==n.color&&{borderColor:(e.vars||e).palette[n.color].dark},{"&:hover":(0,o.Z)({},"outlined"===n.variant&&"horizontal"===n.orientation&&{borderRightColor:"currentColor"},"outlined"===n.variant&&"vertical"===n.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,o.Z)({},"contained"===n.variant&&{boxShadow:"none"})},"contained"===n.variant&&{boxShadow:"none"})})),w=i.forwardRef(function(e,n){let t=(0,s.Z)({props:e,name:"MuiButtonGroup"}),{children:a,className:c,color:d="primary",component:l="div",disabled:f=!1,disableElevation:v=!1,disableFocusRipple:p=!1,disableRipple:m=!1,fullWidth:y=!1,orientation:w="horizontal",size:Z="medium",variant:N="outlined"}=t,O=(0,r.Z)(t,b),C=(0,o.Z)({},t,{color:d,component:l,disabled:f,disableElevation:v,disableFocusRipple:p,disableRipple:m,fullWidth:y,orientation:w,size:Z,variant:N}),T=x(C),M=i.useMemo(()=>({className:T.grouped,color:d,disabled:f,disableElevation:v,disableFocusRipple:p,disableRipple:m,fullWidth:y,size:Z,variant:N}),[d,f,v,p,m,y,Z,N,T.grouped]);return(0,g.jsx)(E,(0,o.Z)({as:l,role:"group",className:(0,u.Z)(T.root,c),ref:n,ownerState:C},O,{children:(0,g.jsx)(h.Z.Provider,{value:M,children:a})}))});var Z=w},76031:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return u.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return d.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return s.Z},requirePropFactory:function(){return f},setRef:function(){return v},unstable_ClassNameGenerator:function(){return E},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return h},useControlled:function(){return g.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return x.Z}});var r=t(37078),o=t(98216),i=t(49064).Z,u=t(88169),a=t(57144),c=function(e,n){return()=>null},d=t(71579),l=t(8038),s=t(5340);t(87462);var f=function(e,n){return()=>null},v=t(7960).Z,p=t(58974),m=t(27909),h=function(e,n,t,r,o){return null},g=t(49299),b=t(2068),y=t(51705),x=t(18791);let E={configure:e=>{r.Z.configure(e)}}},54522:function(e,n,t){"use strict";t.d(n,{ZP:function(){return eA}});var r,o,i=t(63366),u=t(87462),a=t(67294),c="data-focus-lock",d="data-focus-lock-disabled",l={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},s=function(e){var n=e.children;return a.createElement(a.Fragment,null,a.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:l}),n,n&&a.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:l}))};s.propTypes={},s.defaultProps={children:null};var f=t(97582);function v(e){return e}function p(e,n){void 0===n&&(n=v);var t=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(e){var o=n(e,r);return t.push(o),function(){t=t.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;t.length;){var n=t;t=[],n.forEach(e)}t={push:function(n){return e(n)},filter:function(){return t}}},assignMedium:function(e){r=!0;var n=[];if(t.length){var o=t;t=[],o.forEach(e),n=t}var i=function(){var t=n;n=[],t.forEach(e)},u=function(){return Promise.resolve().then(i)};u(),t={push:function(e){n.push(e),u()},filter:function(e){return n=n.filter(e),t}}}}}function m(e,n){return void 0===n&&(n=v),p(e,n)}var h=m({},function(e){return{target:e.target,currentTarget:e.currentTarget}}),g=m(),b=m(),y=((r=p(null)).options=(0,f.pi)({async:!0,ssr:!1},{async:!0}),r),x=[],E=a.forwardRef(function(e,n){var t,r,o,i,s=a.useState(),f=s[0],v=s[1],p=a.useRef(),m=a.useRef(!1),b=a.useRef(null),E=e.children,w=e.disabled,Z=e.noFocusGuards,N=e.persistentFocus,O=e.crossFrame,C=e.autoFocus,T=(e.allowTextSelection,e.group),M=e.className,R=e.whiteList,k=e.hasPositiveIndices,F=e.shards,I=e.as,$=e.lockProps,S=e.sideCar,P=e.returnFocus,B=e.focusOptions,D=e.onActivation,_=e.onDeactivation,A=a.useState({})[0],L=a.useCallback(function(){b.current=b.current||document&&document.activeElement,p.current&&D&&D(p.current),m.current=!0},[D]),z=a.useCallback(function(){m.current=!1,_&&_(p.current)},[_]);(0,a.useEffect)(function(){w||(b.current=null)},[]);var W=a.useCallback(function(e){var n=b.current;if(n&&n.focus){var t="function"==typeof P?P(n):P;if(t){var r="object"==typeof t?t:void 0;b.current=null,e?Promise.resolve().then(function(){return n.focus(r)}):n.focus(r)}}},[P]),G=a.useCallback(function(e){m.current&&h.useMedium(e)},[]),j=g.useMedium,U=a.useCallback(function(e){p.current!==e&&(p.current=e,v(e))},[]),V=(0,u.Z)(((i={})[d]=w&&"disabled",i[c]=T,i),void 0===$?{}:$),q=!0!==Z,H=(t=[n,U],r=function(e){return t.forEach(function(n){var t;return"function"==typeof(t=n)?t(e):t&&(t.current=e),t})},(o=(0,a.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade);return a.createElement(a.Fragment,null,q&&[a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:w?-1:0,style:l}),k?a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:w?-1:1,style:l}):null],!w&&a.createElement(S,{id:A,sideCar:y,observed:f,disabled:w,persistentFocus:N,crossFrame:O,autoFocus:C,whiteList:R,shards:void 0===F?x:F,onActivation:L,onDeactivation:z,returnFocus:W,focusOptions:B}),a.createElement(void 0===I?"div":I,(0,u.Z)({ref:H},V,{className:M,onBlur:j,onFocus:G}),E),q&&"tail"!==Z&&a.createElement("div",{"data-focus-guard":!0,tabIndex:w?-1:0,style:l}))});E.propTypes={},E.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var w=t(75068),Z=t(4942),N=function(e){for(var n=Array(e.length),t=0;t<e.length;++t)n[t]=e[t];return n},O=function(e){return Array.isArray(e)?e:[e]},C=function(e){return Array.isArray(e)?e[0]:e},T=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e,null);return!!n&&!!n.getPropertyValue&&("none"===n.getPropertyValue("display")||"hidden"===n.getPropertyValue("visibility"))},M=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},R=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},k=function(e,n){var t,r=e.get(n);if(void 0!==r)return r;var o=(t=k.bind(void 0,e),!n||R(n)||!T(n)&&t(M(n)));return e.set(n,o),o},F=function(e,n){var t,r=e.get(n);if(void 0!==r)return r;var o=(t=F.bind(void 0,e),!n||!!R(n)||!!P(n)&&t(M(n)));return e.set(n,o),o},I=function(e){return e.dataset},$=function(e){return"INPUT"===e.tagName},S=function(e){return $(e)&&"radio"===e.type},P=function(e){return![!0,"true",""].includes(e.getAttribute("data-no-autofocus"))},B=function(e){var n;return Boolean(e&&(null===(n=I(e))||void 0===n?void 0:n.focusGuard))},D=function(e){return!B(e)},_=function(e){return Boolean(e)},A=function(e,n){var t=e.tabIndex-n.tabIndex,r=e.index-n.index;if(t){if(!e.tabIndex)return 1;if(!n.tabIndex)return -1}return t||r},L=function(e,n,t){return N(e).map(function(e,n){return{node:e,index:n,tabIndex:t&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}}).filter(function(e){return!n||e.tabIndex>=0}).sort(A)},z="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",W="".concat(z,", [data-focus-guard]"),G=function(e,n){return N((e.shadowRoot||e).children).reduce(function(e,t){return e.concat(t.matches(n?W:z)?[t]:[],G(t))},[])},j=function(e,n){var t;return e instanceof HTMLIFrameElement&&(null===(t=e.contentDocument)||void 0===t?void 0:t.body)?U([e.contentDocument.body],n):[e]},U=function(e,n){return e.reduce(function(e,t){var r,o=G(t,n),i=(r=[]).concat.apply(r,o.map(function(e){return j(e,n)}));return e.concat(i,t.parentNode?N(t.parentNode.querySelectorAll(z)).filter(function(e){return e===t}):[])},[])},V=function(e,n){return N(e).filter(function(e){return k(n,e)}).filter(function(e){return!(($(e)||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))})},q=function(e,n){return void 0===n&&(n=new Map),N(e).filter(function(e){return F(n,e)})},H=function(e,n,t){return L(V(U(e,t),n),!0,t)},K=function(e,n){return L(V(U(e),n),!1)},Y=function(e,n){return e.shadowRoot?Y(e.shadowRoot,n):!!(void 0!==Object.getPrototypeOf(e).contains&&Object.getPrototypeOf(e).contains.call(e,n))||N(e.children).some(function(e){var t;if(e instanceof HTMLIFrameElement){var r=null===(t=e.contentDocument)||void 0===t?void 0:t.body;return!!r&&Y(r,n)}return Y(e,n)})},J=function(e){try{return e()}catch(n){return}},Q=function(e){if(void 0===e&&(e=document),e&&e.activeElement){var n=e.activeElement;return n.shadowRoot?Q(n.shadowRoot):n instanceof HTMLIFrameElement&&J(function(){return n.contentWindow.document})?Q(n.contentWindow.document):n}},X=function(e){void 0===e&&(e=document);var n=Q(e);return!!n&&N(e.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(e){return Y(e,n)})},ee=function(e){for(var n=new Set,t=e.length,r=0;r<t;r+=1)for(var o=r+1;o<t;o+=1){var i=e[r].compareDocumentPosition(e[o]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&n.add(o),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&n.add(r)}return e.filter(function(e,t){return!n.has(t)})},en=function(e){return e.parentNode?en(e.parentNode):e},et=function(e){return O(e).filter(Boolean).reduce(function(e,n){var t=n.getAttribute(c);return e.push.apply(e,t?ee(N(en(n).querySelectorAll("[".concat(c,'="').concat(t,'"]:not([').concat(d,'="disabled"])')))):[n]),e},[])},er=function(e,n){return void 0===n&&(n=Q(C(e).ownerDocument)),!!n&&(!n.dataset||!n.dataset.focusGuard)&&et(e).some(function(e){var t;return Y(e,n)||(t=n,Boolean(N(e.querySelectorAll("iframe")).some(function(e){return e===t})))})},eo=function(e,n){return S(e)&&e.name&&n.filter(S).filter(function(n){return n.name===e.name}).filter(function(e){return e.checked})[0]||e},ei=function(e){var n=new Set;return e.forEach(function(t){return n.add(eo(t,e))}),e.filter(function(e){return n.has(e)})},eu=function(e){return e[0]&&e.length>1?eo(e[0],e):e[0]},ea=function(e,n){return e.length>1?e.indexOf(eo(e[n],e)):n},ec="NEW_FOCUS",ed=function(e,n,t,r){var o=e.length,i=e[0],u=e[o-1],a=B(t);if(!(t&&e.indexOf(t)>=0)){var c=void 0!==t?n.indexOf(t):-1,d=r?n.indexOf(r):c,l=r?e.indexOf(r):-1,s=c-d,f=n.indexOf(i),v=n.indexOf(u),p=ei(n),m=(void 0!==t?p.indexOf(t):-1)-(r?p.indexOf(r):c),h=ea(e,0),g=ea(e,o-1);if(-1===c||-1===l)return ec;if(!s&&l>=0)return l;if(c<=f&&a&&Math.abs(s)>1)return g;if(c>=v&&a&&Math.abs(s)>1)return h;if(s&&Math.abs(m)>1)return l;if(c<=f)return g;if(c>v)return h;if(s)return Math.abs(s)>1?l:(o+l+s)%o}},el=function(e,n,t){var r=q(e.map(function(e){return e.node}).filter(function(e){var n,r=null===(n=I(e))||void 0===n?void 0:n.autofocus;return e.autofocus||void 0!==r&&"false"!==r||t.indexOf(e)>=0}));return r&&r.length?eu(r):eu(q(n))},es=function(e,n){return void 0===n&&(n=[]),n.push(e),e.parentNode&&es(e.parentNode.host||e.parentNode,n),n},ef=function(e,n){for(var t=es(e),r=es(n),o=0;o<t.length;o+=1){var i=t[o];if(r.indexOf(i)>=0)return i}return!1},ev=function(e,n,t){var r=O(e),o=O(n),i=r[0],u=!1;return o.filter(Boolean).forEach(function(e){u=ef(u||e,e)||u,t.filter(Boolean).forEach(function(e){var n=ef(i,e);n&&(u=!u||Y(n,u)?n:ef(n,u))})}),u},ep=function(e,n){var t=new Map;return n.forEach(function(e){return t.set(e.node,e)}),e.map(function(e){return t.get(e)}).filter(_)},em=function(e,n){var t=Q(O(e).length>0?document:C(e).ownerDocument),r=et(e).filter(D),o=ev(t||e,e,r),i=new Map,u=K(r,i),a=H(r,i).filter(function(e){return D(e.node)});if(a[0]||(a=u)[0]){var c=K([o],i).map(function(e){return e.node}),d=ep(c,a),l=d.map(function(e){return e.node}),s=ed(l,c,t,n);if(s===ec){var f=el(u,l,r.reduce(function(e,n){return e.concat(V(N(n.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(e){return U([e])}).reduce(function(e,n){return e.concat(n)},[]),i))},[]));return f?{node:f}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===s?s:d[s]}},eh=function(e,n){"focus"in e&&e.focus(n),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},eg=0,eb=!1,ey=function(e,n,t){void 0===t&&(t={});var r=em(e,n);if(!eb&&r){if(eg>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),eb=!0,setTimeout(function(){eb=!1},1);return}eg++,eh(r.node,t.focusOptions),eg--}},ex=function(e){var n=et(e).filter(D),t=ev(e,e,n),r=new Map,o=H([t],r,!0),i=H(n,r).filter(function(e){return D(e.node)}).map(function(e){return e.node});return o.map(function(e){var n=e.node;return{node:n,index:e.index,lockItem:i.indexOf(n)>=0,guard:B(n)}})};function eE(e){setTimeout(e,1)}var ew=null,eZ=null,eN=null,eO=!1,eC=function(){return!0},eT=function(e,n){eN={observerNode:e,portaledElement:n}};function eM(e,n,t,r){var o=null,i=e;do{var u=r[i];if(u.guard)u.node.dataset.focusAutoGuard&&(o=u);else if(u.lockItem){if(i!==e)return;o=null}else break}while((i+=t)!==n);o&&(o.node.tabIndex=0)}var eR=function(e){return e&&"current"in e?e.current:e},ek=function(){var e=!1;if(ew){var n=ew,t=n.observed,r=n.persistentFocus,o=n.autoFocus,i=n.shards,u=n.crossFrame,a=n.focusOptions,c=t||eN&&eN.portaledElement,d=document&&document.activeElement;if(c){var l=[c].concat(i.map(eR).filter(Boolean));if((!d||(ew.whiteList||eC)(d))&&(r||(u?Boolean(eO):"meanwhile"===eO)||!(document&&document.activeElement===document.body||X())||!eZ&&o)&&(c&&!(er(l)||d&&l.some(function(e){return function e(n,t,r){return t&&(t.host===n&&(!t.activeElement||r.contains(t.activeElement))||t.parentNode&&e(n,t.parentNode,r))}(d,e,e)})||eN&&eN.portaledElement===d)&&(document&&!eZ&&d&&!o?(d.blur&&d.blur(),document.body.focus()):(e=ey(l,eZ,{focusOptions:a}),eN={})),eO=!1,eZ=document&&document.activeElement),document){var s=document&&document.activeElement,f=ex(l),v=f.map(function(e){return e.node}).indexOf(s);v>-1&&(f.filter(function(e){var n=e.guard,t=e.node;return n&&t.dataset.focusAutoGuard}).forEach(function(e){return e.node.removeAttribute("tabIndex")}),eM(v,f.length,1,f),eM(v,-1,-1,f))}}}return e},eF=function(e){ek()&&e&&(e.stopPropagation(),e.preventDefault())},eI=function(){return eE(ek)},e$=function(){eO="just",eE(function(){eO="meanwhile"})},eS=function(){document.addEventListener("focusin",eF),document.addEventListener("focusout",eI),window.addEventListener("blur",e$)},eP=function(){document.removeEventListener("focusin",eF),document.removeEventListener("focusout",eI),window.removeEventListener("blur",e$)};h.assignSyncMedium(function(e){var n=e.target,t=e.currentTarget;t.contains(n)||eT(t,n)}),g.assignMedium(eI),b.assignMedium(function(e){return e({moveFocusInside:ey,focusInside:er})});var eB=(o=function(e){var n=e.slice(-1)[0];n&&!ew&&eS();var t=ew,r=t&&n&&n.id===t.id;ew=n,!t||r||(t.onDeactivation(),e.filter(function(e){return e.id===t.id}).length||t.returnFocus(!n)),n?(eZ=null,r&&t.observed===n.observed||n.onActivation(),ek(!0),eE(ek)):(eP(),eZ=null)},function(e){var n,t=[];function r(){o(n=t.map(function(e){return e.props}).filter(function(e){return!e.disabled}))}var i=function(o){function i(){return o.apply(this,arguments)||this}(0,w.Z)(i,o),i.peek=function(){return n};var u=i.prototype;return u.componentDidMount=function(){t.push(this),r()},u.componentDidUpdate=function(){r()},u.componentWillUnmount=function(){var e=t.indexOf(this);t.splice(e,1),r()},u.render=function(){return a.createElement(e,this.props)},i}(a.PureComponent);return(0,Z.Z)(i,"displayName","SideEffect("+(e.displayName||e.name||"Component")+")"),i})(function(){return null}),eD=a.forwardRef(function(e,n){return a.createElement(E,(0,u.Z)({sideCar:eB,ref:n},e))}),e_=E.propTypes||{};e_.sideCar,(0,i.Z)(e_,["sideCar"]),eD.propTypes={};var eA=eD},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);