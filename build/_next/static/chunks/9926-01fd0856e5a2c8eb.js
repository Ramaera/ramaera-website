"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9926],{69926:function(e,t,r){r.d(t,{q:function(){return tf},vc:function(){return e1}});var n,a,i,s,o=r(67294),l=Object.defineProperty,u={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(u,{assign:()=>q,colors:()=>M,createStringInterpolator:()=>a,skipAnimation:()=>I,to:()=>i,willAdvance:()=>j});var d=P(),c=e=>_(e,d),h=P();c.write=e=>_(e,h);var p=P();c.onStart=e=>_(e,p);var f=P();c.onFrame=e=>_(e,f);var g=P();c.onFinish=e=>_(e,g);var m=[];c.setTimeout=(e,t)=>{let r=c.now()+t,n=()=>{let e=m.findIndex(e=>e.cancel==n);~e&&m.splice(e,1),w-=~e?1:0},a={time:r,handler:e,cancel:n};return m.splice(y(r),0,a),w+=1,x(),a};var y=e=>~(~m.findIndex(t=>t.time>e)||~m.length);c.cancel=e=>{p.delete(e),f.delete(e),g.delete(e),d.delete(e),h.delete(e)},c.sync=e=>{k=!0,c.batchedUpdates(e),k=!1},c.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,c.onStart(r)}return n.handler=e,n.cancel=()=>{p.delete(r),t=null},n};var b="undefined"!=typeof window?window.requestAnimationFrame:()=>{};c.use=e=>b=e,c.now="undefined"!=typeof performance?()=>performance.now():Date.now,c.batchedUpdates=e=>e(),c.catch=console.error,c.frameLoop="always",c.advance=()=>{"demand"!==c.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):S()};var v=-1,w=0,k=!1;function _(e,t){k?(t.delete(e),e(0)):(t.add(e),x())}function x(){v<0&&(v=0,"demand"!==c.frameLoop&&b(A))}function A(){~v&&(b(A),c.batchedUpdates(S))}function S(){let e=v;v=c.now();let t=y(v);if(t&&(C(m.splice(0,t),e=>e.handler()),w-=t),!w){v=-1;return}p.flush(),d.flush(e?Math.min(64,v-e):16.667),f.flush(),h.flush(),g.flush()}function P(){let e=new Set,t=e;return{add(r){w+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(w-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,w-=t.size,C(t,t=>t(r)&&e.add(t)),w+=e.size,t=e)}}}function C(e,t){e.forEach(e=>{try{t(e)}catch(r){c.catch(r)}})}var E=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),O={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e},$=(e,t)=>e.forEach(t);function V(e,t,r){if(O.arr(e)){for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);return}for(let a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a)}var F=e=>O.und(e)?[]:O.arr(e)?e:[e],R=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),M=null,I=!1,j=function(){},q=e=>{e.to&&(i=e.to),e.now&&(c.now=e.now),void 0!==e.colors&&(M=e.colors),null!=e.skipAnimation&&(I=e.skipAnimation),e.createStringInterpolator&&(a=e.createStringInterpolator),e.requestAnimationFrame&&c.use(e.requestAnimationFrame),e.batchedUpdates&&(c.batchedUpdates=e.batchedUpdates),e.willAdvance&&(j=e.willAdvance),e.frameLoop&&(c.frameLoop=e.frameLoop)},z=new Set,N=[],L=[],U=0,W={get idle(){return!z.size&&!N.length},start(e){U>e.priority?(z.add(e),c.onStart(T)):(G(e),c(D))},advance:D,sort(e){if(U)c.onFrame(()=>W.sort(e));else{let t=N.indexOf(e);~t&&(N.splice(t,1),B(e))}},clear(){N=[],z.clear()}};function T(){z.forEach(G),z.clear(),c(D)}function G(e){N.includes(e)||B(e)}function B(e){N.splice(function(e,t){let r=e.findIndex(t);return r<0?e.length:r}(N,t=>t.priority>e.priority),0,e)}function D(e){let t=L;for(let r=0;r<N.length;r++){let n=N[r];U=n.priority,n.idle||(j(n),n.advance(e),n.idle||t.push(n))}return U=0,(L=N).length=0,(N=t).length>0}var Z="[-+]?\\d*\\.?\\d+",H=Z+"%";function J(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var K=RegExp("rgb"+J(Z,Z,Z)),Q=RegExp("rgba"+J(Z,Z,Z,Z)),X=RegExp("hsl"+J(Z,H,H)),Y=RegExp("hsla"+J(Z,H,H,Z)),ee=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,et=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,er=/^#([0-9a-fA-F]{6})$/,en=/^#([0-9a-fA-F]{8})$/;function ea(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ei(e,t,r){let n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=ea(a,n,e+1/3),s=ea(a,n,e),o=ea(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*s)<<16|Math.round(255*o)<<8}function es(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function eo(e){let t=parseFloat(e);return(t%360+360)%360/360}function el(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function eu(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}function ed(e){let t;let r="number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=er.exec(e))?parseInt(t[1]+"ff",16)>>>0:M&&void 0!==M[e]?M[e]:(t=K.exec(e))?(es(t[1])<<24|es(t[2])<<16|es(t[3])<<8|255)>>>0:(t=Q.exec(e))?(es(t[1])<<24|es(t[2])<<16|es(t[3])<<8|el(t[4]))>>>0:(t=ee.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=en.exec(e))?parseInt(t[1],16)>>>0:(t=et.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=X.exec(e))?(255|ei(eo(t[1]),eu(t[2]),eu(t[3])))>>>0:(t=Y.exec(e))?(ei(eo(t[1]),eu(t[2]),eu(t[3]))|el(t[4]))>>>0:null;if(null===r)return e;r=r||0;let n=(4278190080&r)>>>24,a=(16711680&r)>>>16,i=(65280&r)>>>8,s=(255&r)/255;return`rgba(${n}, ${a}, ${i}, ${s})`}var ec=(e,t,r)=>{if(O.fun(e))return e;if(O.arr(e))return ec({range:e,output:t,extrapolate:r});if(O.str(e.output[0]))return a(e);let n=e.output,i=e.range||[0,1],s=e.extrapolateLeft||e.extrapolate||"extend",o=e.extrapolateRight||e.extrapolate||"extend",l=e.easing||(e=>e);return t=>{let r=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(t,i);return function(e,t,r,n,a,i,s,o,l){let u=l?l(e):e;if(u<t){if("identity"===s)return u;"clamp"===s&&(u=t)}if(u>r){if("identity"===o)return u;"clamp"===o&&(u=r)}return n===a?n:t===r?e<=t?n:a:(t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t),u=i(u),n===-1/0?u=-u:a===1/0?u+=n:u=u*(a-n)+n,u)}(t,i[r],i[r+1],n[r],n[r+1],l,s,o,e.map)}},eh=Symbol.for("FluidValue.get"),ep=Symbol.for("FluidValue.observers"),ef=e=>Boolean(e&&e[eh]),eg=e=>e&&e[eh]?e[eh]():e;function em(e,t){let r=e[ep];r&&r.forEach(e=>{e.eventObserved?e.eventObserved(t):e(t)})}var ey=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");eb(this,e)}},eb=(e,t)=>ek(e,eh,t);function ev(e,t){if(e[eh]){let r=e[ep];r||ek(e,ep,r=new Set),!r.has(t)&&(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function ew(e,t){let r=e[ep];if(r&&r.has(t)){let n=r.size-1;n?r.delete(t):e[ep]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var ek=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),e_=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ex=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,eA=RegExp(`(${e_.source})(%|[a-z]+)`,"i"),eS=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,eP=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,eC=e=>{let[t,r]=eE(e);if(!t||R())return e;let n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){let a=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(a)return a}else if(r&&eP.test(r))return eC(r);else if(r)return r;return e},eE=e=>{let t=eP.exec(e);if(!t)return[,];let[,r,n]=t;return[r,n]},eO=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,e$=e=>{s||(s=M?RegExp(`(${Object.keys(M).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(e=>eg(e).replace(eP,eC).replace(ex,ed).replace(s,ed)),r=t.map(e=>e.match(e_).map(Number)),n=r[0].map((e,t)=>r.map(e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})),a=n.map(t=>ec({...e,output:t}));return e=>{let r=!eA.test(t[0])&&t.find(e=>eA.test(e))?.replace(e_,""),n=0;return t[0].replace(e_,()=>`${a[n++](e)}${r||""}`).replace(eS,eO)}},eV="react-spring: ",eF=e=>{let t=!1;if("function"!=typeof e)throw TypeError(`${eV}once requires a function parameter`);return(...r)=>{t||(e(...r),t=!0)}},eR=eF(console.warn);function eM(e){return O.str(e)&&("#"==e[0]||/\d/.test(e)||!R()&&eP.test(e)||e in(M||{}))}eF(console.warn),new WeakMap,new WeakMap,new WeakMap,new WeakMap;var eI=R()?o.useEffect:o.useLayoutEffect,ej=()=>{let e=(0,o.useRef)(!1);return eI(()=>(e.current=!0,()=>{e.current=!1}),[]),e},eq=e=>(0,o.useEffect)(e,ez),ez=[],eN=Symbol.for("Animated:node"),eL=e=>!!e&&e[eN]===e,eU=e=>e&&e[eN],eW=(e,t)=>E(e,eN,t),eT=e=>e&&e[eN]&&e[eN].getPayload(),eG=class{constructor(){eW(this,this)}getPayload(){return this.payload||[]}},eB=class extends eG{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,O.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new eB(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return O.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,O.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},eD=class extends eB{constructor(e){super(0),this._string=null,this._toString=ec({output:[e,e]})}static create(e){return new eD(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(O.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ec({output:[this.getValue(),e]})),this._value=0,super.reset()}},eZ={dependencies:null},eH=class extends eG{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return V(this.source,(r,n)=>{eL(r)?t[n]=r.getValue(e):ef(r)?t[n]=eg(r):e||(t[n]=r)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&$(this.payload,e=>e.reset())}_makePayload(e){if(e){let t=new Set;return V(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){eZ.dependencies&&ef(e)&&eZ.dependencies.add(e);let t=eT(e);t&&$(t,e=>this.add(e))}},eJ=class extends eH{constructor(e){super(e)}static create(e){return new eJ(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let t=this.getPayload();return e.length==t.length?t.map((t,r)=>t.setValue(e[r])).some(Boolean):(super.setValue(e.map(eK)),!0)}};function eK(e){let t=eM(e)?eD:eB;return t.create(e)}var eQ=(e,t)=>{let r=!O.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,o.forwardRef)((n,a)=>{let i=(0,o.useRef)(null),s=r&&(0,o.useCallback)(e=>{var t;i.current=((t=a)&&(O.fun(t)?t(e):t.current=e),e)},[a]),[l,u]=function(e,t){let r=new Set;return eZ.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new eH(e),eZ.dependencies=null,[e,r]}(n,t),d=function(){let e=(0,o.useState)()[1],t=ej();return()=>{t.current&&e(Math.random())}}(),h=()=>{let e=i.current;if(r&&!e)return;let n=!!e&&t.applyAnimatedValues(e,l.getValue(!0));!1===n&&d()},p=new eX(h,u),f=(0,o.useRef)();eI(()=>(f.current=p,$(u,e=>ev(e,p)),()=>{f.current&&($(f.current.deps,e=>ew(e,f.current)),c.cancel(f.current.update))})),(0,o.useEffect)(h,[]),eq(()=>()=>{let e=f.current;$(e.deps,t=>ew(t,e))});let g=t.getComponentProps(l.getValue());return o.createElement(e,{...g,ref:s})})},eX=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&c.write(this.update)}},eY=Symbol.for("AnimatedComponent"),e0=e=>O.str(e)?e:e&&O.str(e.displayName)?e.displayName:O.fun(e)&&e.name||null,e1={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}};({...e1.default});var e2=e=>e instanceof e3,e5=1,e3=class extends ey{constructor(){super(...arguments),this.id=e5++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){let e=eU(this);return e&&e.getValue()}to(...e){return u.to(this,e)}interpolate(...e){return eR(`${eV}The "interpolate" function is deprecated in v9 (use "to" instead)`),u.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){em(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||W.sort(this),em(this,{type:"priority",parent:this,priority:e})}};Symbol.for("SpringPhase");var e9=({children:e,...t})=>{let r=(0,o.useContext)(e4),n=t.pause||!!r.pause,a=t.immediate||!!r.immediate;t=function(e,t){let[r]=(0,o.useState)(()=>({inputs:t,result:e()})),n=(0,o.useRef)(),a=n.current,i=a;if(i){let s=Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,i.inputs));s||(i={inputs:t,result:e()})}else i=r;return(0,o.useEffect)(()=>{n.current=i,a==r&&(r.inputs=r.result=void 0)},[i]),i.result}(()=>({pause:n,immediate:a}),[n,a]);let{Provider:i}=e4;return o.createElement(i,{value:t},e)},e4=(Object.assign(n=e9,o.createContext({})),n.Provider._context=n,n.Consumer._context=n,n);e9.Provider=e4.Provider,e9.Consumer=e4.Consumer;var e7=class extends e3{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ec(...t);let r=this._get(),n=function(e){let t=eU(e);return t?t.constructor:O.arr(e)?eJ:eM(e)?eD:eB}(r);eW(this,n.create(r))}advance(e){let t=this._get(),r=this.get();!function(e,t){if(O.arr(e)){if(!O.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}(t,r)&&(eU(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&e6(this._active)&&te(this)}_get(){let e=O.arr(this.source)?this.source.map(eg):F(eg(this.source));return this.calc(...e)}_start(){this.idle&&!e6(this._active)&&(this.idle=!1,$(eT(this),e=>{e.done=!1}),u.skipAnimation?(c.batchedUpdates(()=>this.advance()),te(this)):W.start(this))}_attach(){let e=1;$(F(this.source),t=>{ef(t)&&ev(t,this),e2(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){$(F(this.source),e=>{ef(e)&&ew(e,this)}),this._active.clear(),te(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=F(this.source).reduce((e,t)=>Math.max(e,(e2(t)?t.priority:0)+1),0))}};function e8(e){return!1!==e.idle}function e6(e){return!e.size||Array.from(e).every(e8)}function te(e){e.idle||(e.idle=!0,$(eT(e),e=>{e.done=!0}),em(e,{type:"idle",parent:e}))}u.assign({createStringInterpolator:e$,to:(e,t)=>new e7(e,t)}),W.advance;var tt=r(73935),tr=/^--/,tn={},ta={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ti=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),ts=["Webkit","Ms","Moz","O"];ta=Object.keys(ta).reduce((e,t)=>(ts.forEach(r=>e[ti(r,t)]=e[t]),e),ta);var to=/^(matrix|translate|scale|rotate|skew)/,tl=/^(translate)/,tu=/^(rotate|skew)/,td=(e,t)=>O.num(e)&&0!==e?e+t:e,tc=(e,t)=>O.arr(e)?e.every(e=>tc(e,t)):O.num(e)?e===t:parseFloat(e)===t,th=class extends eH{constructor({x:e,y:t,z:r,...n}){let a=[],i=[];(e||t||r)&&(a.push([e||0,t||0,r||0]),i.push(e=>[`translate3d(${e.map(e=>td(e,"px")).join(",")})`,tc(e,0)])),V(n,(e,t)=>{if("transform"===t)a.push([e||""]),i.push(e=>[e,""===e]);else if(to.test(t)){if(delete n[t],O.und(e))return;let r=tl.test(t)?"px":tu.test(t)?"deg":"";a.push(F(e)),i.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${td(a,r)})`,tc(a,0)]:e=>[`${t}(${e.map(e=>td(e,r)).join(",")})`,tc(e,t.startsWith("scale")?1:0)])}}),a.length&&(n.transform=new tp(a,i)),super(n)}},tp=class extends ey{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return $(this.inputs,(r,n)=>{let a=eg(r[0]),[i,s]=this.transforms[n](O.arr(a)?a:r.map(eg));e+=" "+i,t=t&&s}),t?"none":e}observerAdded(e){1==e&&$(this.inputs,e=>$(e,e=>ef(e)&&ev(e,this)))}observerRemoved(e){0==e&&$(this.inputs,e=>$(e,e=>ef(e)&&ew(e,this)))}eventObserved(e){"change"==e.type&&(this._value=null),em(this,e)}};u.assign({batchedUpdates:tt.unstable_batchedUpdates,createStringInterpolator:e$,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var tf=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new eH(e),getComponentProps:n=e=>e}={})=>{let a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{let t=e0(e)||"Anonymous";return(e=O.str(e)?i[e]||(i[e]=eQ(e,a)):e[eY]||(e[eY]=eQ(e,a))).displayName=`Animated(${t})`,e};return V(e,(t,r)=>{O.arr(e)&&(r=e0(t)),i[r]=i(t)}),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;let r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:a,scrollTop:i,scrollLeft:s,viewBox:o,...l}=t,u=Object.values(l),d=Object.keys(l).map(t=>r||e.hasAttribute(t)?t:tn[t]||(tn[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())));for(let c in void 0!==a&&(e.textContent=a),n)if(n.hasOwnProperty(c)){var h,p;let f=(h=c,null==(p=n[c])||"boolean"==typeof p||""===p?"":"number"!=typeof p||0===p||tr.test(h)||ta.hasOwnProperty(h)&&ta[h]?(""+p).trim():p+"px");tr.test(c)?e.style.setProperty(c,f):e.style[c]=f}d.forEach((t,r)=>{e.setAttribute(t,u[r])}),void 0!==i&&(e.scrollTop=i),void 0!==s&&(e.scrollLeft=s),void 0!==o&&e.setAttribute("viewBox",o)},createAnimatedStyle:e=>new th(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}).animated}}]);