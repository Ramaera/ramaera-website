(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5540],{2703:function(e,n,t){"use strict";var r=t(414);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,u,i){if(i!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:o};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2283:function(e,n,t){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{ZP:function(){return eD}});var o,u,i=t(7294),a="data-focus-lock",c="data-focus-lock-disabled",f={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},d=function(e){var n=e.children;return i.createElement(i.Fragment,null,i.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:f}),n,n&&i.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:f}))};d.propTypes={},d.defaultProps={children:null};var s=function(){return(s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function l(e){return e}function v(e,n){void 0===n&&(n=l);var t=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(e){var o=n(e,r);return t.push(o),function(){t=t.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;t.length;){var n=t;t=[],n.forEach(e)}t={push:function(n){return e(n)},filter:function(){return t}}},assignMedium:function(e){r=!0;var n=[];if(t.length){var o=t;t=[],o.forEach(e),n=t}var u=function(){var t=n;n=[],t.forEach(e)},i=function(){return Promise.resolve().then(u)};i(),t={push:function(e){n.push(e),i()},filter:function(e){return n=n.filter(e),t}}}}}function p(e,n){return void 0===n&&(n=l),v(e,n)}var m=p({},function(e){return{target:e.target,currentTarget:e.currentTarget}}),h=p(),b=p(),y=((o=v(null)).options=s({async:!0,ssr:!1},{async:!0}),o),g=[],E=i.forwardRef(function(e,n){var t,o,u,d,s=i.useState(),l=s[0],v=s[1],p=i.useRef(),b=i.useRef(!1),E=i.useRef(null),O=e.children,N=e.disabled,w=e.noFocusGuards,x=e.persistentFocus,T=e.crossFrame,k=e.autoFocus,S=(e.allowTextSelection,e.group),P=e.className,I=e.whiteList,_=e.hasPositiveIndices,C=e.shards,F=e.as,M=e.lockProps,A=e.sideCar,j=e.returnFocus,D=e.focusOptions,R=e.onActivation,L=e.onDeactivation,B=i.useState({})[0],U=i.useCallback(function(){E.current=E.current||document&&document.activeElement,p.current&&R&&R(p.current),b.current=!0},[R]),G=i.useCallback(function(){b.current=!1,L&&L(p.current)},[L]);(0,i.useEffect)(function(){N||(E.current=null)},[]);var W=i.useCallback(function(e){var n=E.current;if(n&&n.focus){var t="function"==typeof j?j(n):j;if(t){var r="object"==typeof t?t:void 0;E.current=null,e?Promise.resolve().then(function(){return n.focus(r)}):n.focus(r)}}},[j]),q=i.useCallback(function(e){b.current&&m.useMedium(e)},[]),V=h.useMedium,Y=i.useCallback(function(e){p.current!==e&&(p.current=e,v(e))},[]),H=r(((d={})[c]=N&&"disabled",d[a]=S,d),void 0===M?{}:M),K=!0!==w,Z=(t=[n,Y],o=function(e){return t.forEach(function(n){var t;return"function"==typeof(t=n)?t(e):t&&(t.current=e),t})},(u=(0,i.useState)(function(){return{value:null,callback:o,facade:{get current(){return u.value},set current(value){var e=u.value;e!==value&&(u.value=value,u.callback(value,e))}}}})[0]).callback=o,u.facade);return i.createElement(i.Fragment,null,K&&[i.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:N?-1:0,style:f}),_?i.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:N?-1:1,style:f}):null],!N&&i.createElement(A,{id:B,sideCar:y,observed:l,disabled:N,persistentFocus:x,crossFrame:T,autoFocus:k,whiteList:I,shards:void 0===C?g:C,onActivation:U,onDeactivation:G,returnFocus:W,focusOptions:D}),i.createElement(void 0===F?"div":F,r({ref:Z},H,{className:P,onBlur:V,onFocus:q}),O),K&&"tail"!==w&&i.createElement("div",{"data-focus-guard":!0,tabIndex:N?-1:0,style:f}))});function O(e,n){return(O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e})(e,n)}function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}E.propTypes={},E.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};var w=function(e){for(var n=Array(e.length),t=0;t<e.length;++t)n[t]=e[t];return n},x=function(e){return Array.isArray(e)?e:[e]},T=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e,null);return!!n&&!!n.getPropertyValue&&("none"===n.getPropertyValue("display")||"hidden"===n.getPropertyValue("visibility"))},k=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},S=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},P=function(e,n){var t,r=e.get(n);if(void 0!==r)return r;var o=(t=P.bind(void 0,e),!n||S(n)||!T(n)&&t(k(n)));return e.set(n,o),o},I=function(e,n){var t,r=e.get(n);if(void 0!==r)return r;var o=(t=I.bind(void 0,e),!n||!!S(n)||!!M(n)&&t(k(n)));return e.set(n,o),o},_=function(e){return e.dataset},C=function(e){return"INPUT"===e.tagName},F=function(e){return C(e)&&"radio"===e.type},M=function(e){return![!0,"true",""].includes(e.getAttribute("data-no-autofocus"))},A=function(e){var n;return Boolean(e&&(null===(n=_(e))||void 0===n?void 0:n.focusGuard))},j=function(e){return!A(e)},D=function(e){return Boolean(e)},R=function(e,n){var t=e.tabIndex-n.tabIndex,r=e.index-n.index;if(t){if(!e.tabIndex)return 1;if(!n.tabIndex)return -1}return t||r},L=function(e,n,t){return w(e).map(function(e,n){return{node:e,index:n,tabIndex:t&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}}).filter(function(e){return!n||e.tabIndex>=0}).sort(R)},B="button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",U="".concat(B,", [data-focus-guard]"),G=function(e,n){var t;return w((null===(t=e.shadowRoot)||void 0===t?void 0:t.children)||e.children).reduce(function(e,t){return e.concat(t.matches(n?U:B)?[t]:[],G(t))},[])},W=function(e,n){return e.reduce(function(e,t){return e.concat(G(t,n),t.parentNode?w(t.parentNode.querySelectorAll(B)).filter(function(e){return e===t}):[])},[])},q=function(e,n){return w(e).filter(function(e){return P(n,e)}).filter(function(e){return!((C(e)||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))})},V=function(e,n){return void 0===n&&(n=new Map),w(e).filter(function(e){return I(n,e)})},Y=function(e,n,t){return L(q(W(e,t),n),!0,t)},H=function(e,n){return L(q(W(e),n),!1)},K=function(e,n){return e.shadowRoot?K(e.shadowRoot,n):!!(void 0!==Object.getPrototypeOf(e).contains&&Object.getPrototypeOf(e).contains.call(e,n))||w(e.children).some(function(e){return K(e,n)})},Z=function(e){return e.activeElement?e.activeElement.shadowRoot?Z(e.activeElement.shadowRoot):e.activeElement:void 0},z=function(){return document.activeElement?document.activeElement.shadowRoot?Z(document.activeElement.shadowRoot):document.activeElement:void 0},J=function(){var e=document&&z();return!!e&&w(document.querySelectorAll("[".concat("data-no-focus-lock","]"))).some(function(n){return K(n,e)})},Q=function(e){for(var n=new Set,t=e.length,r=0;r<t;r+=1)for(var o=r+1;o<t;o+=1){var u=e[r].compareDocumentPosition(e[o]);(u&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&n.add(o),(u&Node.DOCUMENT_POSITION_CONTAINS)>0&&n.add(r)}return e.filter(function(e,t){return!n.has(t)})},X=function(e){return e.parentNode?X(e.parentNode):e},$=function(e){return x(e).filter(Boolean).reduce(function(e,n){var t=n.getAttribute(a);return e.push.apply(e,t?Q(w(X(n).querySelectorAll("[".concat(a,'="').concat(t,'"]:not([').concat(c,'="disabled"])')))):[n]),e},[])},ee=function(e){var n=document&&z();return!!n&&(!n.dataset||!n.dataset.focusGuard)&&$(e).some(function(e){return K(e,n)||Boolean(w(e.querySelectorAll("iframe")).some(function(e){return e===document.activeElement}))})},en=function(e,n){return F(e)&&e.name&&n.filter(F).filter(function(n){return n.name===e.name}).filter(function(e){return e.checked})[0]||e},et=function(e){var n=new Set;return e.forEach(function(t){return n.add(en(t,e))}),e.filter(function(e){return n.has(e)})},er=function(e){return e[0]&&e.length>1?en(e[0],e):e[0]},eo=function(e,n){return e.length>1?e.indexOf(en(e[n],e)):n},eu="NEW_FOCUS",ei=function(e,n,t,r){var o=e.length,u=e[0],i=e[o-1],a=A(t);if(!(t&&e.indexOf(t)>=0)){var c=void 0!==t?n.indexOf(t):-1,f=r?n.indexOf(r):c,d=r?e.indexOf(r):-1,s=c-f,l=n.indexOf(u),v=n.indexOf(i),p=et(n),m=(void 0!==t?p.indexOf(t):-1)-(r?p.indexOf(r):c),h=eo(e,0),b=eo(e,o-1);if(-1===c||-1===d)return eu;if(!s&&d>=0)return d;if(c<=l&&a&&Math.abs(s)>1)return b;if(c>=v&&a&&Math.abs(s)>1)return h;if(s&&Math.abs(m)>1)return d;if(c<=l)return b;if(c>v)return h;if(s)return Math.abs(s)>1?d:(o+d+s)%o}},ea=function(e,n,t){var r=V(e.map(function(e){return e.node}).filter(function(e){var n,r=null===(n=_(e))||void 0===n?void 0:n.autofocus;return e.autofocus||void 0!==r&&"false"!==r||t.indexOf(e)>=0}));return r&&r.length?er(r):er(V(n))},ec=function(e,n){return void 0===n&&(n=[]),n.push(e),e.parentNode&&ec(e.parentNode.host||e.parentNode,n),n},ef=function(e,n){for(var t=ec(e),r=ec(n),o=0;o<t.length;o+=1){var u=t[o];if(r.indexOf(u)>=0)return u}return!1},ed=function(e,n,t){var r=x(e),o=x(n),u=r[0],i=!1;return o.filter(Boolean).forEach(function(e){i=ef(i||e,e)||i,t.filter(Boolean).forEach(function(e){var n=ef(u,e);n&&(i=!i||K(n,i)?n:ef(n,i))})}),i},es=function(e,n){var t=new Map;return n.forEach(function(e){return t.set(e.node,e)}),e.map(function(e){return t.get(e)}).filter(D)},el=function(e,n){var t=document&&z(),r=$(e).filter(j),o=ed(t||e,e,r),u=new Map,i=H(r,u),a=Y(r,u).filter(function(e){return j(e.node)});if(a[0]||(a=i)[0]){var c=H([o],u).map(function(e){return e.node}),f=es(c,a),d=f.map(function(e){return e.node}),s=ei(d,c,t,n);if(s===eu){var l=ea(i,d,r.reduce(function(e,n){return e.concat(q(w(n.querySelectorAll("[".concat("data-autofocus-inside","]"))).map(function(e){return W([e])}).reduce(function(e,n){return e.concat(n)},[]),u))},[]));return l?{node:l}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===s?s:f[s]}},ev=function(e,n){"focus"in e&&e.focus(n),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},ep=0,em=!1,eh=function(e,n,t){void 0===t&&(t={});var r=el(e,n);if(!em&&r){if(ep>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),em=!0,setTimeout(function(){em=!1},1);return}ep++,ev(r.node,t.focusOptions),ep--}},eb=function(e){var n=$(e).filter(j),t=ed(e,e,n),r=new Map,o=Y([t],r,!0),u=Y(n,r).filter(function(e){return j(e.node)}).map(function(e){return e.node});return o.map(function(e){var n=e.node;return{node:n,index:e.index,lockItem:u.indexOf(n)>=0,guard:A(n)}})};function ey(e){var n=window.setImmediate;void 0!==n?n(e):setTimeout(e,1)}var eg=null,eE=null,eO=null,eN=!1,ew=function(){return!0},ex=function(e,n){eO={observerNode:e,portaledElement:n}};function eT(e,n,t,r){var o=null,u=e;do{var i=r[u];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(u!==e)return;o=null}else break}while((u+=t)!==n);o&&(o.node.tabIndex=0)}var ek=function(e){return e&&"current"in e?e.current:e},eS=function(){var e=!1;if(eg){var n=eg,t=n.observed,r=n.persistentFocus,o=n.autoFocus,u=n.shards,i=n.crossFrame,a=n.focusOptions,c=t||eO&&eO.portaledElement,f=document&&document.activeElement;if(c){var d=[c].concat(u.map(ek).filter(Boolean));if((!f||(eg.whiteList||ew)(f))&&(r||(i?Boolean(eN):"meanwhile"===eN)||!(document&&document.activeElement===document.body||J())||!eE&&o)&&(c&&!(ee(d)||f&&d.some(function(e){return function e(n,t,r){return t&&(t.host===n&&(!t.activeElement||r.contains(t.activeElement))||t.parentNode&&e(n,t.parentNode,r))}(f,e,e)})||eO&&eO.portaledElement===f)&&(document&&!eE&&f&&!o?(f.blur&&f.blur(),document.body.focus()):(e=eh(d,eE,{focusOptions:a}),eO={})),eN=!1,eE=document&&document.activeElement),document){var s=document&&document.activeElement,l=eb(d),v=l.map(function(e){return e.node}).indexOf(s);v>-1&&(l.filter(function(e){var n=e.guard,t=e.node;return n&&t.dataset.focusAutoGuard}).forEach(function(e){return e.node.removeAttribute("tabIndex")}),eT(v,l.length,1,l),eT(v,-1,-1,l))}}}return e},eP=function(e){eS()&&e&&(e.stopPropagation(),e.preventDefault())},eI=function(){return ey(eS)},e_=function(){eN="just",setTimeout(function(){eN="meanwhile"},0)},eC=function(){document.addEventListener("focusin",eP),document.addEventListener("focusout",eI),window.addEventListener("blur",e_)},eF=function(){document.removeEventListener("focusin",eP),document.removeEventListener("focusout",eI),window.removeEventListener("blur",e_)};m.assignSyncMedium(function(e){var n=e.target,t=e.currentTarget;t.contains(n)||ex(t,n)}),h.assignMedium(eI),b.assignMedium(function(e){return e({moveFocusInside:eh,focusInside:ee})});var eM=(u=function(e){var n=e.slice(-1)[0];n&&!eg&&eC();var t=eg,r=t&&n&&n.id===t.id;eg=n,!t||r||(t.onDeactivation(),e.filter(function(e){return e.id===t.id}).length||t.returnFocus(!n)),n?(eE=null,r&&t.observed===n.observed||n.onActivation(),eS(!0),ey(eS)):(eF(),eE=null)},function(e){var n,t,r,o,a,c=[];function f(){u(a=c.map(function(e){return e.props}).filter(function(e){return!e.disabled}))}var d=function(n){function t(){return n.apply(this,arguments)||this}(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,O(r,n),t.peek=function(){return a};var r,o=t.prototype;return o.componentDidMount=function(){c.push(this),f()},o.componentDidUpdate=function(){f()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),f()},o.render=function(){return i.createElement(e,this.props)},t}(i.PureComponent);return n=d,t="displayName",r="SideEffect("+(e.displayName||e.name||"Component")+")",o=function(e,n){if("object"!==N(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==N(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(t,"string"),(t="symbol"===N(o)?o:String(o))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,d})(function(){return null}),eA=i.forwardRef(function(e,n){return i.createElement(E,r({sideCar:eM,ref:n},e))}),ej=E.propTypes||{};ej.sideCar,function(e,n){if(null!=e){var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n.indexOf(t=u[r])>=0||(o[t]=e[t])}}(ej,["sideCar"]),eA.propTypes={};var eD=eA}}]);