(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1936],{48186:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/Gallery/Card",function(){return e(9434)}])},9434:function(n,t,e){"use strict";e.r(t);var i=e(85893),r=e(25675),o=e.n(r),l=e(67294),u=e(91966),a=e(83615);let c=n=>{let{image:t=[]}=n,[e,r]=(0,l.useState)(!1),c=()=>{r(!e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.CardContainer,{onClick:()=>{c()},children:(0,i.jsx)(u.Z,{style:{backgroundImage:"url(".concat(t.imageName,")"),backgroundPosition:"top",backgroundSize:"cover",opacity:"0.8"},shineStrength:.25,children:(0,i.jsx)(a.CardImg,{children:(0,i.jsxs)(a.CardDetails,{children:[(0,i.jsx)(a.Name,{children:t.name}),(0,i.jsx)(a.Title,{children:t.title})]})},t.id)})}),(0,i.jsx)(a.ZoomIn,{style:{zIndex:e?"100":"-1"},children:e&&(0,i.jsx)("div",{children:(0,i.jsxs)(a.Modal,{children:[(0,i.jsxs)(a.ModalContent,{children:[(0,i.jsx)(a.ZoomImage,{title:t.title,children:(0,i.jsx)(o(),{style:{objectFit:"contain"},src:t.imageName,alt:t.title,layout:"fill",objectFit:"cover"})}),(0,i.jsx)(a.ZoomDetails,{style:{width:t.title?"50%":"0%",display:t.title?"block":"none"},children:t.title?(0,i.jsx)(i.Fragment,{}):null})]}),(0,i.jsx)(a.CloseImg,{src:"/content/closeIcon.png",onClick:c})]})})})]})};t.default=c},83615:function(n,t,e){"use strict";e.r(t),e.d(t,{CardContainer:function(){return Z},CardDetails:function(){return j},CardImg:function(){return v},CloseImg:function(){return D},Modal:function(){return E},ModalContent:function(){return T},Name:function(){return k},Title:function(){return y},ZoomAbout:function(){return z},ZoomDetails:function(){return I},ZoomImage:function(){return P},ZoomIn:function(){return C},ZoomName:function(){return _},ZoomTitle:function(){return N}});var i=e(7297),r=e(85893),o=e(68777);function l(){let n=(0,i.Z)(["\n  /* height: 50vh;\n   */\n"]);return l=function(){return n},n}function u(){let n=(0,i.Z)(["\n  color: #efefef;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 20vw;\n  height: 38vh;\n  min-width: 250px;\n  min-height: 230px;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  transition: all 0.3s;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n    // vertical-align: top;\n    object-position: center top;\n  }\n"]);return u=function(){return n},n}function a(){let n=(0,i.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: -webkit-linear-gradient(\n    bottom,\n    rgba(0, 0, 0, 0.8) 0%,\n    transparent 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  text-align: left;\n  padding: 0 0px 10px 15px;\n"]);return a=function(){return n},n}function c(){let n=(0,i.Z)(["\n  color: #fda751;\n  font-weight: 700;\n  line-height: 1;\n  letter-spacing: 1px;\n  margin: 3px 0;\n  font-size: 25px;\n"]);return c=function(){return n},n}function d(){let n=(0,i.Z)(["\n  font-weight: 300;\n  font-size: 20px;\n"]);return d=function(){return n},n}function f(){let n=(0,i.Z)(["\n  position: absolute;\n  margin: 2rem;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 600px) {\n    margin: 0;\n  }\n"]);return f=function(){return n},n}function s(){let n=(0,i.Z)(["\n  width: ",";\n  @media (max-width: 600px) {\n    width: 100% !important;\n    height: ",";\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    vertical-align: top;\n    border-radius: 15px;\n    background-size: cover;\n  }\n"]);return s=function(){return n},n}function p(){let n=(0,i.Z)(["\n  padding: 0 100px 0 50px;\n  overflow-y: scroll;\n  @media (max-width: 600px) {\n    width: 100% !important;\n    padding: 0;\n  }\n"]);return p=function(){return n},n}function h(){let n=(0,i.Z)(["\n  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: personal !important;\n  font-weight: 400;\n  font-size: 2.2rem;\n"]);return h=function(){return n},n}function x(){let n=(0,i.Z)(["\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #a58e7c;\n"]);return x=function(){return n},n}function g(){let n=(0,i.Z)(["\n  color: white;\n  margin: 20px 0;\n"]);return g=function(){return n},n}function m(){let n=(0,i.Z)(["\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n"]);return m=function(){return n},n}function w(){let n=(0,i.Z)(["\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  line-height: 1.4;\n  padding: 14px 28px;\n  width: 80%;\n  height: 75%;\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  @media (max-width: 600px) {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    top: unset;\n    left: unset;\n    height: auto;\n    width: 90%;\n    margin: 20px;\n    max-height: 95svh;\n  }\n"]);return w=function(){return n},n}function b(){let n=(0,i.Z)(["\n  position: inherit;\n  top: 65px;\n  left: 88%;\n  width: 40px;\n  border-radius: 10px;\n  cursor: pointer;\n  @media (max-width: 600px) {\n    position: fixed;\n    top: 8px;\n    left: 88%;\n  }\n"]);return b=function(){return n},n}let Z=o.ZP.div(l()),v=o.ZP.div(u()),j=o.ZP.div(a()),k=o.ZP.div(c()),y=o.ZP.div(d()),C=o.ZP.div(f()),P=o.ZP.div(s(),n=>n.title?"50%":"100%",n=>n.title?"50vh":"100vh"),I=o.ZP.div(p()),_=o.ZP.h3(h()),N=o.ZP.h5(x()),z=o.ZP.p(g()),E=o.ZP.div(m()),T=o.ZP.div(w()),D=o.ZP.img(b()),F=()=>(0,r.jsx)("div",{children:"StyleImage"});t.default=F}},function(n){n.O(0,[1502,5675,1966,9774,2888,179],function(){return n(n.s=48186)}),_N_E=n.O()}]);