(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2581],{69308:function(t,e,n){"use strict";var r=n(64836);e.Z=void 0;var o=r(n(64938)),u=n(85893),i=(0,o.default)((0,u.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");e.Z=i},64938:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(76031)},56863:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var r=n(63366),o=n(87462),u=n(67294),i=n(90512),a=n(94780),c=n(41796),d=n(98216),l=n(90948),s=n(71657),f=n(1588),v=n(34867);function p(t){return(0,v.Z)("MuiButtonGroup",t)}let m=(0,f.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var h=n(98363),g=n(93326),b=n(85893);let y=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],x=(t,e)=>{let{ownerState:n}=t;return[{[`& .${m.grouped}`]:e.grouped},{[`& .${m.grouped}`]:e[`grouped${(0,d.Z)(n.orientation)}`]},{[`& .${m.grouped}`]:e[`grouped${(0,d.Z)(n.variant)}`]},{[`& .${m.grouped}`]:e[`grouped${(0,d.Z)(n.variant)}${(0,d.Z)(n.orientation)}`]},{[`& .${m.grouped}`]:e[`grouped${(0,d.Z)(n.variant)}${(0,d.Z)(n.color)}`]},{[`& .${m.firstButton}`]:e.firstButton},{[`& .${m.lastButton}`]:e.lastButton},{[`& .${m.middleButton}`]:e.middleButton},e.root,e[n.variant],!0===n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth,"vertical"===n.orientation&&e.vertical]},E=t=>{let{classes:e,color:n,disabled:r,disableElevation:o,fullWidth:u,orientation:i,variant:c}=t,l={root:["root",c,"vertical"===i&&"vertical",u&&"fullWidth",o&&"disableElevation"],grouped:["grouped",`grouped${(0,d.Z)(i)}`,`grouped${(0,d.Z)(c)}`,`grouped${(0,d.Z)(c)}${(0,d.Z)(i)}`,`grouped${(0,d.Z)(c)}${(0,d.Z)(n)}`,r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,a.Z)(l,p,e)},Z=(0,l.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:x})(({theme:t,ownerState:e})=>(0,o.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},"vertical"===e.orientation&&{flexDirection:"column"},{[`& .${m.grouped}`]:(0,o.Z)({minWidth:40,"&:hover":(0,o.Z)({},"contained"===e.variant&&{boxShadow:"none"})},"contained"===e.variant&&{boxShadow:"none"}),[`& .${m.firstButton},& .${m.middleButton}`]:(0,o.Z)({},"horizontal"===e.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===e.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===e.variant&&"horizontal"===e.orientation&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${m.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},"text"===e.variant&&"vertical"===e.orientation&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${m.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},"text"===e.variant&&"inherit"!==e.color&&{borderColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:(0,c.Fq)(t.palette[e.color].main,.5)},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"transparent"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"transparent"},"contained"===e.variant&&"horizontal"===e.orientation&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${m.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},"contained"===e.variant&&"vertical"===e.orientation&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${m.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},"contained"===e.variant&&"inherit"!==e.color&&{borderColor:(t.vars||t).palette[e.color].dark},{"&:hover":(0,o.Z)({},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"currentColor"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"currentColor"})}),[`& .${m.lastButton},& .${m.middleButton}`]:(0,o.Z)({},"horizontal"===e.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===e.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===e.variant&&"horizontal"===e.orientation&&{marginLeft:-1},"outlined"===e.variant&&"vertical"===e.orientation&&{marginTop:-1})})),w=u.forwardRef(function(t,e){let n=(0,s.Z)({props:t,name:"MuiButtonGroup"}),{children:a,className:c,color:d="primary",component:l="div",disabled:f=!1,disableElevation:v=!1,disableFocusRipple:p=!1,disableRipple:m=!1,fullWidth:x=!1,orientation:w="horizontal",size:N="medium",variant:B="outlined"}=n,O=(0,r.Z)(n,y),C=(0,o.Z)({},n,{color:d,component:l,disabled:f,disableElevation:v,disableFocusRipple:p,disableRipple:m,fullWidth:x,orientation:w,size:N,variant:B}),T=E(C),$=u.useMemo(()=>({className:T.grouped,color:d,disabled:f,disableElevation:v,disableFocusRipple:p,disableRipple:m,fullWidth:x,size:N,variant:B}),[d,f,v,p,m,x,N,B,T.grouped]),M=(t,e)=>{let n=0===t,r=t===u.Children.count(e)-1;return n&&r?"":n?T.firstButton:r?T.lastButton:T.middleButton};return(0,b.jsx)(Z,(0,o.Z)({as:l,role:"group",className:(0,i.Z)(T.root,c),ref:e,ownerState:C},O,{children:(0,b.jsx)(h.Z.Provider,{value:$,children:u.Children.map(a,(t,e)=>u.isValidElement(t)?(0,b.jsx)(g.Z.Provider,{value:M(e,a),children:t}):t)})}))});var N=w},76031:function(t,e,n){"use strict";n.r(e),n.d(e,{capitalize:function(){return o.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return i.Z},debounce:function(){return a.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return d.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return s.Z},requirePropFactory:function(){return f},setRef:function(){return v},unstable_ClassNameGenerator:function(){return E},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return h},useControlled:function(){return g.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return x.Z}});var r=n(37078),o=n(98216),u=n(49064).Z,i=n(88169),a=n(57144),c=function(t,e){return()=>null},d=n(71579),l=n(8038),s=n(5340);n(87462);var f=function(t,e){return()=>null},v=n(7960).Z,p=n(58974),m=n(27909),h=function(t,e,n,r,o){return null},g=n(49299),b=n(2068),y=n(51705),x=n(18791);let E={configure:t=>{r.Z.configure(t)}}},54522:function(t,e,n){"use strict";n.d(e,{ZP:function(){return tA}});var r,o,u=n(63366),i=n(87462),a=n(67294),c="data-focus-lock",d="data-focus-lock-disabled",l={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},s=function(t){var e=t.children;return a.createElement(a.Fragment,null,a.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:l}),e,e&&a.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:l}))};s.propTypes={},s.defaultProps={children:null};var f=n(97582);function v(t){return t}function p(t,e){void 0===e&&(e=v);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(t){var o=e(t,r);return n.push(o),function(){n=n.filter(function(t){return t!==o})}},assignSyncMedium:function(t){for(r=!0;n.length;){var e=n;n=[],e.forEach(t)}n={push:function(e){return t(e)},filter:function(){return n}}},assignMedium:function(t){r=!0;var e=[];if(n.length){var o=n;n=[],o.forEach(t),e=n}var u=function(){var n=e;e=[],n.forEach(t)},i=function(){return Promise.resolve().then(u)};i(),n={push:function(t){e.push(t),i()},filter:function(t){return e=e.filter(t),n}}}}}function m(t,e){return void 0===e&&(e=v),p(t,e)}var h=m({},function(t){return{target:t.target,currentTarget:t.currentTarget}}),g=m(),b=m(),y=((r=p(null)).options=(0,f.__assign)({async:!0,ssr:!1},{async:!0}),r),x=[],E=a.forwardRef(function(t,e){var n,r,o,u,s=a.useState(),f=s[0],v=s[1],p=a.useRef(),m=a.useRef(!1),b=a.useRef(null),E=t.children,Z=t.disabled,w=t.noFocusGuards,N=t.persistentFocus,B=t.crossFrame,O=t.autoFocus,C=(t.allowTextSelection,t.group),T=t.className,$=t.whiteList,M=t.hasPositiveIndices,R=t.shards,k=t.as,F=t.lockProps,I=t.sideCar,S=t.returnFocus,P=t.focusOptions,_=t.onActivation,D=t.onDeactivation,A=a.useState({})[0],L=a.useCallback(function(){b.current=b.current||document&&document.activeElement,p.current&&_&&_(p.current),m.current=!0},[_]),z=a.useCallback(function(){m.current=!1,D&&D(p.current)},[D]);(0,a.useEffect)(function(){Z||(b.current=null)},[]);var W=a.useCallback(function(t){var e=b.current;if(e&&e.focus){var n="function"==typeof S?S(e):S;if(n){var r="object"==typeof n?n:void 0;b.current=null,t?Promise.resolve().then(function(){return e.focus(r)}):e.focus(r)}}},[S]),G=a.useCallback(function(t){m.current&&h.useMedium(t)},[]),j=g.useMedium,U=a.useCallback(function(t){p.current!==t&&(p.current=t,v(t))},[]),V=(0,i.Z)(((u={})[d]=Z&&"disabled",u[c]=C,u),void 0===F?{}:F),q=!0!==w,H=(n=[e,U],r=function(t){return n.forEach(function(e){var n;return"function"==typeof(n=e)?n(t):n&&(n.current=t),n})},(o=(0,a.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var t=o.value;t!==value&&(o.value=value,o.callback(value,t))}}}})[0]).callback=r,o.facade);return a.createElement(a.Fragment,null,q&&[a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:Z?-1:0,style:l}),M?a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:Z?-1:1,style:l}):null],!Z&&a.createElement(I,{id:A,sideCar:y,observed:f,disabled:Z,persistentFocus:N,crossFrame:B,autoFocus:O,whiteList:$,shards:void 0===R?x:R,onActivation:L,onDeactivation:z,returnFocus:W,focusOptions:P}),a.createElement(void 0===k?"div":k,(0,i.Z)({ref:H},V,{className:T,onBlur:j,onFocus:G}),E),q&&"tail"!==w&&a.createElement("div",{"data-focus-guard":!0,tabIndex:Z?-1:0,style:l}))});E.propTypes={},E.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var Z=n(75068),w=n(4942),N=function(t){for(var e=Array(t.length),n=0;n<t.length;++n)e[n]=t[n];return e},B=function(t){return Array.isArray(t)?t:[t]},O=function(t){return Array.isArray(t)?t[0]:t},C=function(t){if(t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t,null);return!!e&&!!e.getPropertyValue&&("none"===e.getPropertyValue("display")||"hidden"===e.getPropertyValue("visibility"))},T=function(t){return t.parentNode&&t.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.parentNode.host:t.parentNode},$=function(t){return t===document||t&&t.nodeType===Node.DOCUMENT_NODE},M=function(t,e){var n,r=t.get(e);if(void 0!==r)return r;var o=(n=M.bind(void 0,t),!e||$(e)||!C(e)&&n(T(e)));return t.set(e,o),o},R=function(t,e){var n,r=t.get(e);if(void 0!==r)return r;var o=(n=R.bind(void 0,t),!e||!!$(e)||!!S(e)&&n(T(e)));return t.set(e,o),o},k=function(t){return t.dataset},F=function(t){return"INPUT"===t.tagName},I=function(t){return F(t)&&"radio"===t.type},S=function(t){return![!0,"true",""].includes(t.getAttribute("data-no-autofocus"))},P=function(t){var e;return Boolean(t&&(null===(e=k(t))||void 0===e?void 0:e.focusGuard))},_=function(t){return!P(t)},D=function(t){return Boolean(t)},A=function(t,e){var n=t.tabIndex-e.tabIndex,r=t.index-e.index;if(n){if(!t.tabIndex)return 1;if(!e.tabIndex)return -1}return n||r},L=function(t,e,n){return N(t).map(function(t,e){return{node:t,index:e,tabIndex:n&&-1===t.tabIndex?(t.dataset||{}).focusGuard?0:-1:t.tabIndex}}).filter(function(t){return!e||t.tabIndex>=0}).sort(A)},z="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",W="".concat(z,", [data-focus-guard]"),G=function(t,e){return N((t.shadowRoot||t).children).reduce(function(t,n){return t.concat(n.matches(e?W:z)?[n]:[],G(n))},[])},j=function(t,e){var n;return t instanceof HTMLIFrameElement&&(null===(n=t.contentDocument)||void 0===n?void 0:n.body)?U([t.contentDocument.body],e):[t]},U=function(t,e){return t.reduce(function(t,n){var r,o=G(n,e),u=(r=[]).concat.apply(r,o.map(function(t){return j(t,e)}));return t.concat(u,n.parentNode?N(n.parentNode.querySelectorAll(z)).filter(function(t){return t===n}):[])},[])},V=function(t,e){return N(t).filter(function(t){return M(e,t)}).filter(function(t){return!((F(t)||"BUTTON"===t.tagName)&&("hidden"===t.type||t.disabled))})},q=function(t,e){return void 0===e&&(e=new Map),N(t).filter(function(t){return R(e,t)})},H=function(t,e,n){return L(V(U(t,n),e),!0,n)},K=function(t,e){return L(V(U(t),e),!1)},Y=function(t,e){return t.shadowRoot?Y(t.shadowRoot,e):!!(void 0!==Object.getPrototypeOf(t).contains&&Object.getPrototypeOf(t).contains.call(t,e))||N(t.children).some(function(t){var n;if(t instanceof HTMLIFrameElement){var r=null===(n=t.contentDocument)||void 0===n?void 0:n.body;return!!r&&Y(r,e)}return Y(t,e)})},J=function(t){try{return t()}catch(e){return}},Q=function(t){if(void 0===t&&(t=document),t&&t.activeElement){var e=t.activeElement;return e.shadowRoot?Q(e.shadowRoot):e instanceof HTMLIFrameElement&&J(function(){return e.contentWindow.document})?Q(e.contentWindow.document):e}},X=function(t){void 0===t&&(t=document);var e=Q(t);return!!e&&N(t.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(t){return Y(t,e)})},tt=function(t){for(var e=new Set,n=t.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var u=t[r].compareDocumentPosition(t[o]);(u&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&e.add(o),(u&Node.DOCUMENT_POSITION_CONTAINS)>0&&e.add(r)}return t.filter(function(t,n){return!e.has(n)})},te=function(t){return t.parentNode?te(t.parentNode):t},tn=function(t){return B(t).filter(Boolean).reduce(function(t,e){var n=e.getAttribute(c);return t.push.apply(t,n?tt(N(te(e).querySelectorAll("[".concat(c,'="').concat(n,'"]:not([').concat(d,'="disabled"])')))):[e]),t},[])},tr=function(t,e){return void 0===e&&(e=Q(O(t).ownerDocument)),!!e&&(!e.dataset||!e.dataset.focusGuard)&&tn(t).some(function(t){var n;return Y(t,e)||(n=e,Boolean(N(t.querySelectorAll("iframe")).some(function(t){return t===n})))})},to=function(t,e){return I(t)&&t.name&&e.filter(I).filter(function(e){return e.name===t.name}).filter(function(t){return t.checked})[0]||t},tu=function(t){var e=new Set;return t.forEach(function(n){return e.add(to(n,t))}),t.filter(function(t){return e.has(t)})},ti=function(t){return t[0]&&t.length>1?to(t[0],t):t[0]},ta=function(t,e){return t.length>1?t.indexOf(to(t[e],t)):e},tc="NEW_FOCUS",td=function(t,e,n,r){var o=t.length,u=t[0],i=t[o-1],a=P(n);if(!(n&&t.indexOf(n)>=0)){var c=void 0!==n?e.indexOf(n):-1,d=r?e.indexOf(r):c,l=r?t.indexOf(r):-1,s=c-d,f=e.indexOf(u),v=e.indexOf(i),p=tu(e),m=(void 0!==n?p.indexOf(n):-1)-(r?p.indexOf(r):c),h=ta(t,0),g=ta(t,o-1);if(-1===c||-1===l)return tc;if(!s&&l>=0)return l;if(c<=f&&a&&Math.abs(s)>1)return g;if(c>=v&&a&&Math.abs(s)>1)return h;if(s&&Math.abs(m)>1)return l;if(c<=f)return g;if(c>v)return h;if(s)return Math.abs(s)>1?l:(o+l+s)%o}},tl=function(t,e,n){var r=q(t.map(function(t){return t.node}).filter(function(t){var e,r=null===(e=k(t))||void 0===e?void 0:e.autofocus;return t.autofocus||void 0!==r&&"false"!==r||n.indexOf(t)>=0}));return r&&r.length?ti(r):ti(q(e))},ts=function(t,e){return void 0===e&&(e=[]),e.push(t),t.parentNode&&ts(t.parentNode.host||t.parentNode,e),e},tf=function(t,e){for(var n=ts(t),r=ts(e),o=0;o<n.length;o+=1){var u=n[o];if(r.indexOf(u)>=0)return u}return!1},tv=function(t,e,n){var r=B(t),o=B(e),u=r[0],i=!1;return o.filter(Boolean).forEach(function(t){i=tf(i||t,t)||i,n.filter(Boolean).forEach(function(t){var e=tf(u,t);e&&(i=!i||Y(e,i)?e:tf(e,i))})}),i},tp=function(t,e){var n=new Map;return e.forEach(function(t){return n.set(t.node,t)}),t.map(function(t){return n.get(t)}).filter(D)},tm=function(t,e){var n=Q(B(t).length>0?document:O(t).ownerDocument),r=tn(t).filter(_),o=tv(n||t,t,r),u=new Map,i=K(r,u),a=H(r,u).filter(function(t){return _(t.node)});if(a[0]||(a=i)[0]){var c=K([o],u).map(function(t){return t.node}),d=tp(c,a),l=d.map(function(t){return t.node}),s=td(l,c,n,e);if(s===tc){var f=tl(i,l,r.reduce(function(t,e){return t.concat(V(N(e.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(t){return U([t])}).reduce(function(t,e){return t.concat(e)},[]),u))},[]));return f?{node:f}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===s?s:d[s]}},th=function(t,e){"focus"in t&&t.focus(e),"contentWindow"in t&&t.contentWindow&&t.contentWindow.focus()},tg=0,tb=!1,ty=function(t,e,n){void 0===n&&(n={});var r=tm(t,e);if(!tb&&r){if(tg>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),tb=!0,setTimeout(function(){tb=!1},1);return}tg++,th(r.node,n.focusOptions),tg--}},tx=function(t){var e=tn(t).filter(_),n=tv(t,t,e),r=new Map,o=H([n],r,!0),u=H(e,r).filter(function(t){return _(t.node)}).map(function(t){return t.node});return o.map(function(t){var e=t.node;return{node:e,index:t.index,lockItem:u.indexOf(e)>=0,guard:P(e)}})};function tE(t){setTimeout(t,1)}var tZ=null,tw=null,tN=null,tB=!1,tO=function(){return!0},tC=function(t,e){tN={observerNode:t,portaledElement:e}};function tT(t,e,n,r){var o=null,u=t;do{var i=r[u];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(u!==t)return;o=null}else break}while((u+=n)!==e);o&&(o.node.tabIndex=0)}var t$=function(t){return t&&"current"in t?t.current:t},tM=function(){var t=!1;if(tZ){var e=tZ,n=e.observed,r=e.persistentFocus,o=e.autoFocus,u=e.shards,i=e.crossFrame,a=e.focusOptions,c=n||tN&&tN.portaledElement,d=document&&document.activeElement;if(c){var l=[c].concat(u.map(t$).filter(Boolean));if((!d||(tZ.whiteList||tO)(d))&&(r||(i?Boolean(tB):"meanwhile"===tB)||!(document&&document.activeElement===document.body||X())||!tw&&o)&&(c&&!(tr(l)||d&&l.some(function(t){return function t(e,n,r){return n&&(n.host===e&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&t(e,n.parentNode,r))}(d,t,t)})||tN&&tN.portaledElement===d)&&(document&&!tw&&d&&!o?(d.blur&&d.blur(),document.body.focus()):(t=ty(l,tw,{focusOptions:a}),tN={})),tB=!1,tw=document&&document.activeElement),document){var s=document&&document.activeElement,f=tx(l),v=f.map(function(t){return t.node}).indexOf(s);v>-1&&(f.filter(function(t){var e=t.guard,n=t.node;return e&&n.dataset.focusAutoGuard}).forEach(function(t){return t.node.removeAttribute("tabIndex")}),tT(v,f.length,1,f),tT(v,-1,-1,f))}}}return t},tR=function(t){tM()&&t&&(t.stopPropagation(),t.preventDefault())},tk=function(){return tE(tM)},tF=function(){tB="just",tE(function(){tB="meanwhile"})},tI=function(){document.addEventListener("focusin",tR),document.addEventListener("focusout",tk),window.addEventListener("blur",tF)},tS=function(){document.removeEventListener("focusin",tR),document.removeEventListener("focusout",tk),window.removeEventListener("blur",tF)};h.assignSyncMedium(function(t){var e=t.target,n=t.currentTarget;n.contains(e)||tC(n,e)}),g.assignMedium(tk),b.assignMedium(function(t){return t({moveFocusInside:ty,focusInside:tr})});var tP=(o=function(t){var e=t.slice(-1)[0];e&&!tZ&&tI();var n=tZ,r=n&&e&&e.id===n.id;tZ=e,!n||r||(n.onDeactivation(),t.filter(function(t){return t.id===n.id}).length||n.returnFocus(!e)),e?(tw=null,r&&n.observed===e.observed||e.onActivation(),tM(!0),tE(tM)):(tS(),tw=null)},function(t){var e,n=[];function r(){o(e=n.map(function(t){return t.props}).filter(function(t){return!t.disabled}))}var u=function(o){function u(){return o.apply(this,arguments)||this}(0,Z.Z)(u,o),u.peek=function(){return e};var i=u.prototype;return i.componentDidMount=function(){n.push(this),r()},i.componentDidUpdate=function(){r()},i.componentWillUnmount=function(){var t=n.indexOf(this);n.splice(t,1),r()},i.render=function(){return a.createElement(t,this.props)},u}(a.PureComponent);return(0,w.Z)(u,"displayName","SideEffect("+(t.displayName||t.name||"Component")+")"),u})(function(){return null}),t_=a.forwardRef(function(t,e){return a.createElement(E,(0,i.Z)({sideCar:tP,ref:e},t))}),tD=E.propTypes||{};tD.sideCar,(0,u.Z)(tD,["sideCar"]),t_.propTypes={};var tA=t_},64836:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);