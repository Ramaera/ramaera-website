(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2851],{520:function(e,n,t){"use strict";t.d(n,{ap:function(){return s},fD:function(){return l},ui:function(){return i},xr:function(){return a},zM:function(){return o}});var r=t(81621);let i=(0,r.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n$extraInfo: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n      extraInfo :$extraInfo\n    }) \n    {\n      name\n    }\n}"),o=(0,r.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),a=(0,r.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n      user{\n      role\n      name\n    }\n    }\n}"),s=(0,r.Ps)("\n  query getAllApps{\n  applicants{\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n    extraInfo\n  }\n}"),l=(0,r.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(e,n,t){"use strict";var r=t(7297),i=t(85893);t(67294);var o=t(68777),a=t(43838),s=t(36468);function l(){let e=(0,r.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,r.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return c=function(){return e},e}let u=(0,o.ZP)(a.E.div)(l(),e=>e.color?e.color:"#FFFFFF",e=>e.fontSize?e.fontSize:"20px",e=>e.fw?e.fw:"600",e=>e.noLineHeight?"1":"18px",e=>e.ls?e.ls:"0em",e=>e.secondary?"2px":e.padding?e.padding:"0.85rem 2rem",e=>e.br?e.br:e.secondary?"1.2rem":"0.8rem",e=>e.lightBorder?"2px solid #FFFFFF":"none",e=>e.bborder?e.bborder:"none",e=>e.width?e.width:"100px",e=>e.bg?e.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",e=>e.m?e.m:"",e=>e.height?e.height:"",e=>e.sh?e.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",e=>e.secondarySmall?e.secondarySmall:e.navWidth?e.navWidth:"15rem",e=>e.secondary?"18px":e.fontSize?e.fontSize:"18px",e=>e.sm?e.sm:"");o.ZP.div(c(),e=>e.secondaryBg?e.secondaryBg:"#13132F",e=>e.secondaryBr?e.secondaryBr:"1.45rem",e=>e.secondaryP?e.secondaryP:"0.5rem 2rem",e=>e.Inheight?e.Inheight:"",e=>e.sm?e.sm:"",e=>e.secondaryPs?e.secondaryPs:e.secondaryP?e.secondaryP:"0 2rem");let d=e=>(0,i.jsx)(u,{...e,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:e.loading?(0,i.jsx)(s.Z,{}):e.Text});n.Z=d},42851:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=t(67294),o=t(96608),a=t(90682),s=t(520),l=t(50319),c=t(55678);t(57134);var u=t(98626);let d=()=>{let[e,n]=(0,i.useState)(0),[t]=(0,l.D)(s.zM),[d,p]=(0,i.useState)(""),[m,f]=(0,i.useState)(""),[g,h]=(0,i.useState)(""),[x,v]=(0,i.useState)(""),[y,b]=(0,i.useState)(""),T=r=>{r.preventDefault(),0===e&&(t({variables:{name:d,email:m,company:g,Subject:x,message:y}}),n(2)),E()},E=()=>{c.Am.success("Message Submitted!",{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{location.reload()},"3200")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(u.Box,{children:[(0,r.jsx)(u.BackgroundImg,{src:"/content/Background.png"}),(0,r.jsxs)(u.Container,{children:[(0,r.jsx)(o.Z,{Text:"GET IN TOUCH TODAY",font:!0,size:"3rem",fw:"100",lh:"70px",xmsize:"4rem",xssize:"3rem",msize:"1.5rem",padding:"0",mpadding:"0"}),(0,r.jsxs)(u.HeaderIcon,{children:[(0,r.jsxs)(u.HeaderIcon1,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:"/content/mailIcon.png",alt:"mail Icon"}),(0,r.jsx)("b",{children:"Mail us"})]}),(0,r.jsx)("p",{children:"support@ramaera.com"})]}),(0,r.jsxs)(u.HeaderIcon2,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:"/content/phoneIcon.png",alt:"phone Icon"}),(0,r.jsx)("b",{children:"Contact us"})]}),(0,r.jsx)("p",{children:"0120-4152818"})]})]}),(0,r.jsx)(u.Form,{children:(0,r.jsxs)("form",{onSubmit:e=>{T(e)},children:[(0,r.jsx)(c.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,r.jsxs)(u.Fline1,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Full Name"}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Input,{type:"text",onChange:e=>{p(e.target.value)},placeholder:"Enter Your Name",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Your Email"}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Input,{type:"email",onChange:e=>{f(e.target.value)},placeholder:"Enter your email",required:!0})]})]}),(0,r.jsxs)(u.Fline2,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Company"}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Input,{type:"text",placeholder:"Enter Your Company Name",required:!0,onChange:e=>{h(e.target.value)}})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Subject "}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Input,{type:"text",onChange:e=>{v(e.target.value)},placeholder:"How can I help you",required:!0})]})]}),(0,r.jsxs)(u.Fline3,{children:[(0,r.jsx)("label",{children:"Message"}),(0,r.jsx)("br",{}),(0,r.jsx)(u.TextArea,{type:"textarea",rows:10,cols:35,onChange:e=>{b(e.target.value)},placeholder:"Hello there ,I would like to talk about...",required:!0})]}),(0,r.jsx)(u.ButtonHolder,{children:(0,r.jsx)("button",{type:"submit",style:{background:"none",border:"none"},children:(0,r.jsx)(a.Z,{br:"999px",bg:"linear-gradient(to left,#ffd456,#ff9765)",width:"200px",height:"50px",noLineHeight:!0,Text:"Send Message ",fontSize:"1rem",padding:"18px 30px",fw:"500",sh:!0})})})]})})]})]})})};n.default=d},98626:function(e,n,t){"use strict";t.r(n),t.d(n,{BackgroundImg:function(){return b},Box:function(){return y},ButtonHolder:function(){return N},Container:function(){return T},Fline1:function(){return j},Fline2:function(){return $},Fline3:function(){return _},Form:function(){return C},HeaderIcon:function(){return E},HeaderIcon1:function(){return w},HeaderIcon2:function(){return I},Input:function(){return S},TextArea:function(){return k}});var r=t(7297),i=t(85893),o=t(68777);function a(){let e=(0,r.Z)(["\n  padding-bottom: 18%;\n  color: black;\n"]);return a=function(){return e},e}function s(){let e=(0,r.Z)(["\n  z-index: 1;\n  position: absolute;\n  object-fit: contain;\n  width: 100vw;\n  @media (max-width: 768px) {\n    height: 100vh;\n    object-fit: cover;\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,r.Z)(["\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return l=function(){return e},e}function c(){let e=(0,r.Z)(["\n  display: flex;\n  padding: 5px 0 30px 0;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return c=function(){return e},e}function u(){let e=(0,r.Z)(["\n  display: flex;\n  padding: 20px;\n  background: white;\n  color: black;\n  border-radius: 20px;\n  align-items: center;\n  margin: 20px;\n  width: 32vw;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 10px auto;\n  }\n  b {\n    margin-right: 15px;\n  }\n  p {\n    margin-left: 10px;\n    color: grey;\n    @media (max-width: 768px) {\n      margin-left: 0px;\n    }\n  }\n  div {\n    align-items: center;\n    display: flex;\n  }\n  img {\n    width: 55px;\n    height: 45px;\n    padding-right: 10px;\n  }\n"]);return u=function(){return e},e}function d(){let e=(0,r.Z)(["\n  display: flex;\n  padding: 20px;\n  background: white;\n  color: black;\n  border-radius: 20px;\n  align-items: center;\n  margin: 20px;\n  width: 28vw;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 10px auto;\n  }\n  p {\n    margin-left: 10px;\n    color: grey;\n    @media (max-width: 768px) {\n      margin-left: 0px;\n    }\n  }\n  div {\n    align-items: center;\n    display: flex;\n  }\n  img {\n    width: 55px;\n    height: 45px;\n    padding-right: 10px;\n  }\n"]);return d=function(){return e},e}function p(){let e=(0,r.Z)(["\n  background: white;\n  padding: 2.5rem;\n  border-radius: 35px;\n  align-items: center;\n  width: 70%;\n  @media (max-width: 540px) {\n    width: 90%;\n    padding: 1rem;\n  }\n"]);return p=function(){return e},e}function m(){let e=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 20px 0;\n  @media (max-width: 540px) {\n    flex-direction: column;\n  }\n"]);return m=function(){return e},e}function f(){let e=(0,r.Z)(["\n  background: white;\n  color: black;\n\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    text-align: left;\n  }\n  width: 31vw;\n  padding: 13px;\n  border-radius: 10px;\n  border: 1px solid lightgrey;\n  margin-top: 10px;\n  @media (max-width: 540px) {\n    width: 80vw;\n    margin: 10px 0;\n  }\n"]);return f=function(){return e},e}function g(){let e=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 20px 0;\n  @media (max-width: 540px) {\n    flex-direction: column;\n  }\n"]);return g=function(){return e},e}function h(){let e=(0,r.Z)(["\n  background: white;\n  padding: 20px 0;\n  textarea {\n    background: white;\n    width: 100%;\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid lightgrey;\n    margin-top: 10px;\n  }\n"]);return h=function(){return e},e}function x(){let e=(0,r.Z)(["\n  color: black;\n\n  background: white;\n  max-width: 100%;\n  min-height: 220px;\n"]);return x=function(){return e},e}function v(){let e=(0,r.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin: 3rem auto;\n"]);return v=function(){return e},e}let y=o.ZP.div(a()),b=o.ZP.img(s()),T=o.ZP.div(l()),E=o.ZP.div(c()),w=o.ZP.div(u()),I=o.ZP.div(d()),C=o.ZP.div(p()),j=o.ZP.div(m()),S=o.ZP.input(f()),$=o.ZP.div(g()),_=o.ZP.div(h()),k=o.ZP.textarea(x()),N=o.ZP.div(v()),P=()=>(0,i.jsx)("div",{children:"StyleImage"});n.default=P},57134:function(){},50319:function(e,n,t){"use strict";t.d(n,{D:function(){return u}});var r=t(23564),i=t(67294),o=t(14012),a=t(82152),s=t(14692),l=t(30990),c=t(66252);function u(e,n){var t=(0,c.x)(null==n?void 0:n.client);(0,s.Vp)(e,s.n_.Mutation);var u=(0,i.useState)({called:!1,loading:!1,client:t}),d=u[0],p=u[1],m=(0,i.useRef)({result:d,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(m.current,{client:t,options:n,mutation:e});var f=(0,i.useCallback)(function(e){void 0===e&&(e={});var n=m.current,t=n.options,i=n.mutation,s=(0,r.pi)((0,r.pi)({},t),{mutation:i}),c=e.client||m.current.client;m.current.result.loading||s.ignoreResults||!m.current.isMounted||p(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:c});var u=++m.current.mutationId,d=(0,o.J)(s,e);return c.mutate(d).then(function(n){var t,r=n.data,i=n.errors,o=i&&i.length>0?new l.c({graphQLErrors:i}):void 0;if(u===m.current.mutationId&&!d.ignoreResults){var s={called:!0,loading:!1,data:r,error:o,client:c};m.current.isMounted&&!(0,a.D)(m.current.result,s)&&p(m.current.result=s)}var f=e.onCompleted||(null===(t=m.current.options)||void 0===t?void 0:t.onCompleted);return null==f||f(n.data,d),n}).catch(function(n){if(u===m.current.mutationId&&m.current.isMounted){var t,r={loading:!1,error:n,data:void 0,called:!0,client:c};(0,a.D)(m.current.result,r)||p(m.current.result=r)}var i=e.onError||(null===(t=m.current.options)||void 0===t?void 0:t.onError);if(i)return i(n,d),{data:void 0,errors:n};throw n})},[]),g=(0,i.useCallback)(function(){m.current.isMounted&&p({called:!1,loading:!1,client:t})},[]);return(0,i.useEffect)(function(){return m.current.isMounted=!0,function(){m.current.isMounted=!1}},[]),[f,(0,r.pi)({reset:g},d)]}},55678:function(e,n,t){"use strict";t.d(n,{Am:function(){return k},Ix:function(){return E}});var r=t(67294),i=t(86010);let o=e=>"number"==typeof e&&!isNaN(e),a=e=>"string"==typeof e,s=e=>"function"==typeof e,l=e=>a(e)||s(e)?e:null,c=e=>(0,r.isValidElement)(e)||a(e)||s(e)||o(e);function u(e){let{enter:n,exit:t,appendPosition:i=!1,collapse:o=!0,collapseDuration:a=300}=e;return function(e){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p}=e,m=i?`${n}--${l}`:n,f=i?`${t}--${l}`:t,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)(()=>{let e=d.current,n=m.split(" "),t=r=>{r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...n))};e.classList.add(...n),e.addEventListener("animationend",t),e.addEventListener("animationcancel",t)},[]),(0,r.useEffect)(()=>{let e=d.current,n=()=>{e.removeEventListener("animationend",n),o?function(e,n,t){void 0===t&&(t=300);let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${t}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(n,t)})})}(e,u,a):u()};p||(c?n():(g.current=1,e.className+=` ${f}`,e.addEventListener("animationend",n)))},[p]),r.createElement(r.Fragment,null,s)}}function d(e,n){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:n}}let p={list:new Map,emitQueue:new Map,on(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off(e,n){if(n){let t=this.list.get(e).filter(e=>e!==n);return this.list.set(e,t),this}return this.list.delete(e),this},cancelEmit(e){let n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(n=>{let t=setTimeout(()=>{n(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(t)})}},m=e=>{let{theme:n,type:t,...i}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${t})`,...i})},f={info:function(e){return r.createElement(m,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(m,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(m,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(m,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function x(e){let{closeToast:n,theme:t,ariaLabel:i="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":i},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function v(e){let{delay:n,isRunning:t,closeToast:o,type:a="default",hide:l,className:c,style:u,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:g}=e,h=l||d&&0===p,x={...u,animationDuration:`${n}ms`,animationPlayState:t?"running":"paused",opacity:h?0:1};d&&(x.transform=`scaleX(${p})`);let v=(0,i.Z)("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),y=s(c)?c({rtl:m,type:a,defaultClassName:v}):(0,i.Z)(v,c);return r.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:y,style:x,[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&o()}})}let y=e=>{let{isRunning:n,preventExitTransition:t,toastRef:o,eventHandlers:a}=function(e){let[n,t]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,r.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:p,onClick:m,closeOnClick:f}=e;function x(n){if(e.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T),document.addEventListener("touchend",E);let t=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=t.getBoundingClientRect(),t.style.transition="",l.x=g(n.nativeEvent),l.y=h(n.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=t.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=t.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(n){if(l.boundingRect){let{top:t,bottom:r,left:i,right:o}=l.boundingRect;"touchend"!==n.nativeEvent.type&&e.pauseOnHover&&l.x>=i&&l.x<=o&&l.y>=t&&l.y<=r?b():y()}}function y(){t(!0)}function b(){t(!1)}function T(t){let r=a.current;l.canDrag&&r&&(l.didMove=!0,n&&b(),l.x=g(t),l.y=h(t),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,r.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function E(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E);let n=a.current;if(l.canDrag&&l.didMove&&n){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return o(!0),void e.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform=`translate${e.draggableDirection}(0)`,n.style.opacity="1"}}(0,r.useEffect)(()=>{c.current=e}),(0,r.useEffect)(()=>(a.current&&a.current.addEventListener("d",y,{once:!0}),s(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;s(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}),[]),(0,r.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",y),window.addEventListener("blur",b)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",b))}),[e.pauseOnFocusLoss]);let w={onMouseDown:x,onTouchStart:x,onMouseUp:v,onTouchEnd:v};return u&&d&&(w.onMouseEnter=b,w.onMouseLeave=y),f&&(w.onClick=e=>{m&&m(e),l.canCloseOnClick&&p()}),{playToast:y,pauseToast:b,isRunning:n,preventExitTransition:i,toastRef:a,eventHandlers:w}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:p,hideProgressBar:m,closeToast:f,transition:y,position:b,className:T,style:E,bodyClassName:w,bodyStyle:I,progressClassName:C,progressStyle:j,updateId:S,role:$,progress:_,rtl:k,toastId:N,deleteToast:P,isIn:F,isLoading:L,iconOut:O,closeOnClick:Z,theme:R}=e,M=(0,i.Z)("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":Z}),B=s(T)?T({rtl:k,position:b,type:p,defaultClassName:M}):(0,i.Z)(M,T),z=!!_||!u,D={closeToast:f,type:p,theme:R},A=null;return!1===l||(A=s(l)?l(D):(0,r.isValidElement)(l)?(0,r.cloneElement)(l,D):x(D)),r.createElement(y,{isIn:F,done:P,position:b,preventExitTransition:t,nodeRef:o},r.createElement("div",{id:N,onClick:d,className:B,...a,style:E,ref:o},r.createElement("div",{...F&&{role:$},className:s(w)?w({type:p}):(0,i.Z)("Toastify__toast-body",w),style:I},null!=O&&r.createElement("div",{className:(0,i.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!L})},O),r.createElement("div",null,c)),A,r.createElement(v,{...S&&!z?{key:`pb-${S}`}:{},rtl:k,theme:R,delay:u,isRunning:n,isIn:F,closeToast:f,hide:m,type:p,style:j,className:C,controlledProgress:z,progress:_||0})))},b=function(e,n){return void 0===n&&(n=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:n}},T=u(b("bounce",!0)),E=(u(b("slide",!0)),u(b("zoom")),u(b("flip")),(0,r.forwardRef)((e,n)=>{let{getToastToRender:t,containerRef:u,isToastActive:m}=function(e){let[,n]=(0,r.useReducer)(e=>e+1,0),[t,i]=(0,r.useState)([]),u=(0,r.useRef)(null),m=(0,r.useRef)(new Map).current,g=e=>-1!==t.indexOf(e),h=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:g,getToast:e=>m.get(e)}).current;function x(e){let{containerId:n}=e,{limit:t}=h.props;!t||n&&h.containerId!==n||(h.count-=h.queue.length,h.queue=[])}function v(e){i(n=>null==e?[]:n.filter(n=>n!==e))}function y(){let{toastContent:e,toastProps:n,staleId:t}=h.queue.shift();T(e,n,t)}function b(e,t){var i,g;let{delay:x,staleId:b,...E}=t;if(!c(e)||!u.current||h.props.enableMultiContainer&&E.containerId!==h.props.containerId||m.has(E.toastId)&&null==E.updateId)return;let{toastId:w,updateId:I,data:C}=E,{props:j}=h,S=()=>v(w),$=null==I;$&&h.count++;let _={...j,style:j.toastStyle,key:h.toastKey++,...E,toastId:w,updateId:I,data:C,closeToast:S,isIn:!1,className:l(E.className||j.toastClassName),bodyClassName:l(E.bodyClassName||j.bodyClassName),progressClassName:l(E.progressClassName||j.progressClassName),autoClose:!E.isLoading&&(i=E.autoClose,g=j.autoClose,!1===i||o(i)&&i>0?i:g),deleteToast(){let e=d(m.get(w),"removed");m.delete(w),p.emit(4,e);let t=h.queue.length;if(h.count=null==w?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),t>0){let r=null==w?h.props.limit:1;if(1===t||1===r)h.displayedToast++,y();else{let i=r>t?t:r;h.displayedToast=i;for(let o=0;o<i;o++)y()}}else n()}};_.iconOut=function(e){let{theme:n,type:t,isLoading:i,icon:l}=e,c=null,u={theme:n,type:t};return!1===l||(s(l)?c=l(u):(0,r.isValidElement)(l)?c=(0,r.cloneElement)(l,u):a(l)||o(l)?c=l:i?c=f.spinner():t in f&&(c=f[t](u))),c}(_),s(E.onOpen)&&(_.onOpen=E.onOpen),s(E.onClose)&&(_.onClose=E.onClose),_.closeButton=j.closeButton,!1===E.closeButton||c(E.closeButton)?_.closeButton=E.closeButton:!0===E.closeButton&&(_.closeButton=!c(j.closeButton)||j.closeButton);let k=e;(0,r.isValidElement)(e)&&!a(e.type)?k=(0,r.cloneElement)(e,{closeToast:S,toastProps:_,data:C}):s(e)&&(k=e({closeToast:S,toastProps:_,data:C})),j.limit&&j.limit>0&&h.count>j.limit&&$?h.queue.push({toastContent:k,toastProps:_,staleId:b}):o(x)?setTimeout(()=>{T(k,_,b)},x):T(k,_,b)}function T(e,n,t){let{toastId:r}=n;t&&m.delete(t);let o={content:e,props:n};m.set(r,o),i(e=>[...e,r].filter(e=>e!==t)),p.emit(4,d(o,null==o.props.updateId?"added":"updated"))}return(0,r.useEffect)(()=>(h.containerId=e.containerId,p.cancelEmit(3).on(0,b).on(1,e=>u.current&&v(e)).on(5,x).emit(2,h),()=>{m.clear(),p.emit(3,h)}),[]),(0,r.useEffect)(()=>{h.props=e,h.isToastActive=g,h.displayedToast=t.length}),{getToastToRender:function(n){let t=new Map,r=Array.from(m.values());return e.newestOnTop&&r.reverse(),r.forEach(e=>{let{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,e=>n(e[0],e[1]))},containerRef:u,isToastActive:g}}(e),{className:g,style:h,rtl:x,containerId:v}=e;return(0,r.useEffect)(()=>{n&&(n.current=u.current)},[]),r.createElement("div",{ref:u,className:"Toastify",id:v},t((e,n)=>{let t=n.length?{...h}:{...h,pointerEvents:"none"};return r.createElement("div",{className:function(e){let n=(0,i.Z)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":x});return s(g)?g({position:e,rtl:x,defaultClassName:n}):(0,i.Z)(n,l(g))}(e),style:t,key:`container-${e}`},n.map((e,t)=>{let{content:i,props:o}=e;return r.createElement(y,{...o,isIn:m(o.toastId),style:{...o.style,"--nth":t+1,"--len":n.length},key:`toast-${o.key}`},i)}))}))}));E.displayName="ToastContainer",E.defaultProps={position:"top-right",transition:T,autoClose:5e3,closeButton:x,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let w,I=new Map,C=[],j=1;function S(e,n){return I.size>0?p.emit(0,e,n):C.push({content:e,options:n}),n.toastId}function $(e,n){return{...n,type:n&&n.type||e,toastId:n&&(a(n.toastId)||o(n.toastId))?n.toastId:""+j++}}function _(e){return(n,t)=>S(n,$(e,t))}function k(e,n){return S(e,$("default",n))}k.loading=(e,n)=>S(e,$("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...n})),k.promise=function(e,n,t){let r,{pending:i,error:o,success:l}=n;i&&(r=a(i)?k.loading(i,t):k.loading(i.render,{...t,...i}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,n,i)=>{if(null==n)return void k.dismiss(r);let o={type:e,...c,...t,data:i},s=a(n)?{render:n}:n;return r?k.update(r,{...o,...s}):k(s.render,{...o,...s}),i},d=s(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",o,e)),d},k.success=_("success"),k.info=_("info"),k.error=_("error"),k.warning=_("warning"),k.warn=k.warning,k.dark=(e,n)=>S(e,$("default",{theme:"dark",...n})),k.dismiss=e=>{I.size>0?p.emit(1,e):C=C.filter(n=>null!=e&&n.options.toastId!==e)},k.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},k.isActive=e=>{let n=!1;return I.forEach(t=>{t.isToastActive&&t.isToastActive(e)&&(n=!0)}),n},k.update=function(e,n){void 0===n&&(n={}),setTimeout(()=>{let t=function(e,n){let{containerId:t}=n,r=I.get(t||w);return r&&r.getToast(e)}(e,n);if(t){let{props:r,content:i}=t,o={...r,...n,toastId:n.toastId||e,updateId:""+j++};o.toastId!==e&&(o.staleId=e);let a=o.render||i;delete o.render,S(a,o)}},0)},k.done=e=>{k.update(e,{progress:1})},k.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),k.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},k.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,e=>{w=e.containerId||e,I.set(w,e),C.forEach(e=>{p.emit(0,e.content,e.options)}),C=[]}).on(3,e=>{I.delete(e.containerId||e),0===I.size&&p.off(0).off(1).off(5)})}}]);