(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2049],{83169:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/page1/tomorrow/components/Holder",function(){return n(73372)}])},54564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,n(92648).Z)(n(67294));var r=n(92983)},37645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=i.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r({},a,e)),a=r({},a,t);let l=a.loader,o=()=>l().then(u);if(a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated,{loader:o})).loadableGenerated,"boolean"==typeof a.ssr){if(!a.ssr)return delete a.ssr,s(o,a);delete a.ssr}return n(a)},t.noSSR=s;var r=n(6495).Z,a=n(92648).Z,l=(0,n(91598).Z)(n(67294)),i=a(n(14588)),o=a(n(54564));function u(e){return{default:e.default||e}}function s(e,t){delete t.webpack,delete t.modules;let n=l.lazy(e),r=t.loading,a=l.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>l.default.createElement(l.Suspense,{fallback:a},l.default.createElement(o.default,null,l.default.createElement(n,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294));let a=r.default.createContext(null);t.LoadableContext=a},14588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,a=(0,n(92648).Z)(n(67294)),l=n(33644);let i=[],o=[],u=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);n.lazy=a.default.lazy(n.loader);let r=null;function i(){if(!r){let t=new d(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!u){let s=n.webpack?n.webpack():n.modules;s&&o.push(e=>{for(let t of s)if(-1!==e.indexOf(t))return i()})}function c(e){!function(){i();let e=a.default.useContext(l.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let t=a.default.createElement(n.loading,{isLoading:!0,pastDelay:!0,error:null});return a.default.createElement(a.default.Suspense,{fallback:t},a.default.createElement(n.lazy,e))}return c.preload=()=>i(),c.displayName="LoadableComponent",c}(s,e)}function f(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(u=!0,t());f(o,e).then(n,n)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},6392:function(e,t,n){"use strict";n.r(t);var r=n(7297),a=n(85893),l=n(69926),i=n(68777);function o(){let e=(0,r.Z)(["\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 10px;\n  @media only screen and (max-width: 1000px) {\n    transform: scale(0.6);\n  }\n"]);return o=function(){return e},e}function u(){let e=(0,r.Z)(["\n  border-radius: 20px;\n  border: 3px solid white;\n"]);return u=function(){return e},e}function s(){let e=(0,r.Z)(["\n  position: absolute;\n  text-align: center;\n  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);\n"]);return s=function(){return e},e}function d(){let e=(0,r.Z)(["\n  padding: 0 3rem;\n  padding-bottom: 20px;\n  font-size: 2rem;\n  font-weight: 700;\n"]);return d=function(){return e},e}function c(){let e=(0,r.Z)(["\n  padding: 0 5rem;\n\n  font-size: 1rem;\n"]);return c=function(){return e},e}function f(){let e=(0,r.Z)(["\n  position: absolute;\n  top: -100px;\n  padding: 10px 25px;\n  font-size: 0.6rem;\n"]);return f=function(){return e},e}let p=i.ZP.div(o()),h=i.ZP.img(u()),m=i.ZP.div(s()),_=i.ZP.div(d()),g=i.ZP.div(c()),b=i.ZP.div(f());t.default=function(e){let{imagen:t,onDate:n,title:r,subTitle:i}=e;return(0,a.jsx)(l.q.div,{children:(0,a.jsxs)(p,{children:[(0,a.jsx)(h,{src:t,alt:r}),(0,a.jsxs)(m,{children:[(0,a.jsx)(b,{children:n}),(0,a.jsx)(_,{children:r}),(0,a.jsx)(g,{children:i})]})]})})}},62724:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(85893),a=n(5152),l=n.n(a),i=n(67294),o=n(69926);let u=l()(()=>n.e(5020).then(n.t.bind(n,4368,23)),{loadableGenerated:{webpack:()=>[4368]},ssr:!1});function s(e){var t;let n=(null!==(t=e.cards)&&void 0!==t?t:[]).map((e,t)=>({...e,onClick:()=>d(t)})),[a,l]=(0,i.useState)(2),[s,d]=(0,i.useState)(null),[c]=(0,i.useState)(n);return(0,i.useEffect)(()=>{l(e.offset)},[e.offset]),(0,r.jsx)("div",{style:{width:e.width,height:e.height,margin:e.margin},children:(0,r.jsx)(u,{slides:c,goToSlide:s,offsetRadius:a,goToSlideDelay:100,animationConfig:{config:o.vc.stiff}})})}},73372:function(e,t,n){"use strict";n.r(t);var r=n(7297),a=n(85893),l=n(68777),i=n(6392),o=n(62724),u=n(69763);function s(){let e=(0,r.Z)(["\n  padding: 13.5rem 2rem;\n  position: absolute;\n  transform: scale(0.6);\n  @media only screen and (max-width: 1000px) {\n    opacity: 0;\n  }\n"]);return s=function(){return e},e}let d=l.ZP.img(s());t.default=function(){let e=[{key:0,content:(0,a.jsx)(i.default,{imagen:u.images[0],onDate:"19 JUNE, 2019 | Blog",title:"Ramaera Narmada - an ode to the Grandeur of Gujarat",subTitle:""})},{key:1,content:(0,a.jsx)(i.default,{imagen:u.images[1],onDate:"19 JUNE, 2019 | Blog",title:"Ramaera Narmada - an ode to the Grandeur of Gujarat",subTitle:""})},{key:2,content:(0,a.jsx)(i.default,{imagen:u.images[2],onDate:"19 JUNE, 2019 | Blog",title:"Ramaera Narmada - an ode to the Grandeur of Gujarat",subTitle:""})}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{style:{left:0},src:"/content/right.png",alt:"left background"}),(0,a.jsx)(d,{style:{right:0},src:"/content/left.png",alt:"right background"}),(0,a.jsx)(o.default,{showArrows:!0,cards:e,height:"500px",width:"100%",offset:1})]})}},69763:function(e,t,n){"use strict";n.r(t),n.d(t,{Responsive:function(){return s},bg:function(){return o},images:function(){return u}});var r=n(7297),a=n(85893),l=n(68777);function i(){let e=(0,r.Z)(["\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-bottom: 20vh;\n"]);return i=function(){return e},e}let o="/background/blank.png",u=["/content/tom1.png","/content/tom2.png","/content/tom3.png"],s=l.ZP.div(i()),d=()=>(0,a.jsx)("div",{children:"StyleImage"});t.default=d},5152:function(e,t,n){e.exports=n(37645)}},function(e){e.O(0,[1502,9926,9774,2888,179],function(){return e(e.s=83169)}),_N_E=e.O()}]);