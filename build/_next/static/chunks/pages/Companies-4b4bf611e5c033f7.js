(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1238],{19536:function(e,n,t){"use strict";var i=t(64836);n.Z=void 0;var r=i(t(64938)),a=t(85893),o=(0,r.default)([(0,a.jsx)("path",{d:"M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},"0"),(0,a.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z"},"1")],"CancelPresentation");n.Z=o},46433:function(e,n){"use strict";var t=function(){return(t=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},i=function(){return"undefined"!=typeof window&&!!window.document&&!!window.document.createElement},r=function(){function e(){var e=this;this.handleWheel=function(e){e.preventDefault()},this.handleScroll=function(){window.scrollTo.apply(window,e.lockToScrollPos)},this.handleKeydown=function(n){var t=e.options.keyboardKeys;["INPUT","TEXTAREA"].includes(n.target.tagName)&&(t=t.filter(function(n){return!e.options.authorizedInInputs.includes(n)})),t.includes(n.keyCode)&&n.preventDefault()},this.element=null,this.lockToScrollPos=[0,0],this.options={authorizedInInputs:[32,37,38,39,40],disableKeys:!0,disableScroll:!0,disableWheel:!0,keyboardKeys:[32,33,34,35,36,37,38,39,40]},i()&&(this.element=document.scrollingElement)}return e.prototype.on=function(e,n){if(i()){this.element=e||this.element,this.options=t(t({},this.options),n);var r,a,o,d,s=this.options,l=s.disableKeys,c=s.disableScroll;s.disableWheel&&(document.addEventListener("wheel",this.handleWheel,{passive:!1}),document.addEventListener("touchmove",this.handleWheel,{passive:!1})),c&&(this.lockToScrollPos=[null!==(a=null===(r=this.element)||void 0===r?void 0:r.scrollLeft)&&void 0!==a?a:0,null!==(d=null===(o=this.element)||void 0===o?void 0:o.scrollTop)&&void 0!==d?d:0],document.addEventListener("scroll",this.handleScroll,{passive:!1})),l&&document.addEventListener("keydown",this.handleKeydown,{passive:!1})}},e.prototype.off=function(){i()&&(document.removeEventListener("wheel",this.handleWheel),document.removeEventListener("touchmove",this.handleWheel),document.removeEventListener("scroll",this.handleScroll),document.removeEventListener("keydown",this.handleKeydown))},e}();n.Z=new r},8611:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Companies",function(){return t(70869)}])},70869:function(e,n,t){"use strict";t.r(n);var i=t(85893),r=t(20041),a=t(99889),o=t(70270),d=t(73198),s=t(69304),l=t(82980),c=t(49314),u=t(33746),h=t(63250),m=t(16969),x=t(9008),f=t.n(x);let p=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f(),{children:(0,i.jsx)("title",{children:"Ramaera Industries - Our Companies"})}),(0,i.jsx)(a.Z,{selectedTab:"companies"}),(0,i.jsx)(r.default,{imageIndex:2}),(0,i.jsx)(d.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(l.default,{}),(0,i.jsx)(c.default,{}),(0,i.jsx)(u.default,{}),(0,i.jsx)(h.default,{}),(0,i.jsx)(m.default,{}),(0,i.jsx)(o.default,{})]});n.default=p},20041:function(e,n,t){"use strict";t.r(n);var i=t(7297),r=t(85893),a=t(67294),o=t(39832),d=t(36080),s=t(96608),l=t(39427),c=t(63114),u=t(15863);t(72054);var h=t(46433);t(9456);var m=t(62904);t(40003);var x=t(68777),f=t(25675),p=t.n(f);t(41664);var g=t(8694);function w(){let e=(0,i.Z)(["\n  transform: scale(0.8);\n"]);return w=function(){return e},e}function v(){let e=(0,i.Z)(["\n  cursor: pointer;\n"]);return v=function(){return e},e}function b(){let e=(0,i.Z)(["\n  @media only screen and (max-width: 768px) {\n    /*  transform: scale(1);\n    transform: rotateZ(90deg);\n    margin-right: auto;\n    margin-left: auto; */\n    display: none;\n  }\n"]);return b=function(){return e},e}function j(){let e=(0,i.Z)(["\n  border-radius: 20px;\n  background: linear-gradient(91deg, #000 0%, #3e3e3e 100%);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n"]);return j=function(){return e},e}function y(){let e=(0,i.Z)(["\n  padding: 10%;\n  position: fixed;\n  z-index: 101;\n  height: 100vh;\n  width: 100vw;\n  right: 0;\n  top: 0;\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  @media only screen and (max-width: 768px) {\n    padding: 25% 5%;\n  }\n  // @media only screen and (max-width: 1200px) {\n  //   padding: 5% 10%;\n  // }\n"]);return y=function(){return e},e}function Z(){let e=(0,i.Z)(["\n  cursor: pointer;\n  z-index: 100;\n  position: absolute;\n  border-radius: 20px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  background: #000;\n  @media only screen and (max-width: 768px) {\n    position: fixed;\n    scale: 0.7;\n    margin: 300px -10% 0 0;\n  }\n"]);return Z=function(){return e},e}function z(){let e=(0,i.Z)(["\n  @media only screen and (max-width: 768px) {\n    transform: scale(0.7);\n  }\n"]);return z=function(){return e},e}function k(){let e=(0,i.Z)(["\n  @media only screen and (max-width: 768px) {\n    /*  transform: rotateZ(90deg);\n    margin-right: 50%;\n    margin-top: 0vh; */\n    display: none;\n  }\n"]);return k=function(){return e},e}function P(){let e=(0,i.Z)(["\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return P=function(){return e},e}let I=x.ZP.div(w()),T=x.ZP.a(v());x.ZP.div(b());let E=x.ZP.div(j()),R=x.ZP.div(y()),C=x.ZP.div(Z());x.ZP.div(z());let S=x.ZP.div(k()),O=x.ZP.div(P()),A=[m.images,m.images2,m.images3,m.images4],N=[m.text,m.text2,m.text3,m.text4],W=e=>{let{imageIndex:n=0}=e,[t,i]=(0,a.useState)(0),[m,x]=(0,a.useState)(!1),[f,w]=(0,a.useState)(A[n]),[v,b]=(0,a.useState)(N[n]),[j,y]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{m?h.Z.on():h.Z.off()},[m]),(0,a.useEffect)(()=>{let e=setInterval(()=>{t===f.length-1?i(0):i(t+1)},3e3);return()=>clearInterval(e)},[f[t]]),console.log(n),(0,a.useEffect)(()=>{setTimeout(()=>y(!0),1e3)},[]),(0,r.jsxs)(a.Fragment,{children:[m?(0,r.jsx)(R,{onClick:()=>{x(!1)},children:(0,r.jsxs)(E,{children:[(0,r.jsx)(s.Z,{Text:"Upcoming Project",lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",font:!0,size:"44px",lh:"20px",width:"fit",fw:"500",mlh:"80px",mwidth:"100vw",align:"center",xmsize:"32px",xssize:"24px",msize:"22px",mpadding:"0 10% 0 0 "}),(0,r.jsx)(s.Z,{Text:"AGRA MART",lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",font:!0,size:"36px",lh:"20px",width:"fit",mwidth:"100vw",fw:"500",mlh:"30px",align:"center",xmsize:"28px",xssize:"24px",msize:"24px",mpadding:"0 10% 0 0 "}),(0,r.jsx)(s.Z,{Text:"Agra Mart offer a wide range of basic home and personal products under one roof. Our core objective is to offer customers good products at great value.",padding:"0 10vw ",color:"#FFF",size:"2rem",lh:"50px",fw:"400",m:"1rem 0 3rem 0",align:"center",xmsize:"2.2rem",xssize:"2rem",msize:"1.3rem",mta:"center",mpadding:"0 20% 0 10% ",mlh:"40px"})]})}):0===n&&(0,r.jsx)(C,{onClick:()=>{x(!0)},children:(0,r.jsx)(g.default,{})}),(0,r.jsx)(o.Z,{bgColor:"#fff",children:(0,r.jsxs)("div",{children:[(0,r.jsx)(p(),{src:f[t],alt:"background image",layout:"fill",objectFit:"cover",objectPosition:"center"}),(0,r.jsx)(I,{children:(0,r.jsxs)(d.Z,{width:"1500px",padding:"8rem 0 0 0",position:"relative",children:[(0,r.jsx)(s.Z,{Text:"Ramaera Industries",lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",font:!0,size:"96px",lh:"125px",width:"50rem",mwidth:"100vw",fw:"500",mlh:"80px",align:"center",xmsize:"6rem",xssize:"10vw",msize:"13vmin",mmargin:" 0 0 2rem 0"}),v[t],(0,r.jsx)(T,{href:"#"+n,children:(0,r.jsx)(l.Z,{Text:"Explore more",secondary:!0,lightborder:!0,height:"60px",m:"2rem 0 0 0",bborder:"2px solid white"})}),(0,r.jsx)(O,{children:(0,r.jsx)("img",{loading:"lazy",src:"/background/bottom.png",alt:"background bottom",style:{height:"7rem",width:"9.5rem",margin:"1rem 0 0 0"}})})]})}),(0,r.jsx)(S,{children:(0,r.jsx)(c.default,{})})]})}),(0,r.jsx)(u.default,{})]})};n.default=W},7486:function(e,n,t){"use strict";t.r(n);var i=t(85893);t(67294);var r=t(81515);let a=e=>{let{Heading:n,ParaGraph:t,percent:a,source:o}=e;return(0,i.jsxs)(r.Box,{children:[(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)(r.YellowDiv,{}),(0,i.jsx)(r.WhiteDiv,{children:(0,i.jsx)(r.Icon,{src:o})})]}),(0,i.jsxs)(r.Head,{children:[(0,i.jsx)("span",{children:a}),n]}),(0,i.jsx)(r.Para,{children:t})]})};n.default=a},49314:function(e,n,t){"use strict";t.r(n);var i=t(85893);t(67294);var r=t(96608),a=t(77361),o=t(7486),d=t(81515);let s=()=>(0,i.jsxs)(d.MainContainer,{children:[(0,i.jsx)("div",{"data-aos":"fade-right",children:(0,i.jsx)(r.Z,{Text:"Contribution to the environment",lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"40px",lh:"110%",width:"100%",mwidth:"98vw",fw:"500",mlh:"50px",align:"center",xmsize:"2rem",xssize:"4vw",msize:"1.8rem",mpadding:"0",mmargin:" 0 0 2rem 0"})}),(0,i.jsx)(a.ValParaContainer,{children:(0,i.jsx)("div",{"data-aos":"fade-left",children:(0,i.jsx)(r.Z,{Text:"“Ramaera Industry is thriving to protect and conserve the environment and hence most of its ventures are constructed on the principles of sustainability and conservation.",fw:"500",size:"25px",lh:"40px",width:"100%",m:"0rem 0 0 0",xssize:"18px",mlh:"30px",msize:"18px",mwidth:"80vw",mta:"center",align:"center",padding:"0 15vw",mmwidth:"85vw"})})}),(0,i.jsxs)(d.BoxContainer,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{"data-aos":"flip-up",children:(0,i.jsx)(o.default,{Heading:"Businesses of Tomorrow",ParaGraph:"Ramaera Industries aim to create and establish the businesses of tomorrow so that our future generation can enjoy the privilege of sustainable living.",source:"/background/Up.png"})}),(0,i.jsx)("div",{"data-aos":"flip-down",children:(0,i.jsx)(o.default,{Heading:"Water Positive",ParaGraph:"Ramaera Industries is committed to conservation of water as it is a great resource and hence, successfully being implementing conservational measures to become water positive.",source:"/background/smile.png"})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{"data-aos":"flip-up",children:(0,i.jsx)(o.default,{Heading:"Carbon Positive",ParaGraph:"We are concerned about the climate change and increased levels of carbon dioxide. Ramaera Industries is taking efforts to reduce its carbon emission and remain carbon positive.",source:"/background/smile.png"})}),(0,i.jsx)("div",{"data-aos":"flip-down",children:(0,i.jsx)(o.default,{percent:"59%",Heading:" of Total Energy is Renewable",ParaGraph:"We are on a mission to become ecofriendly and replace energy consumption with renewable resources. Almost 59% of our industrial operations are powered by renewable energy.",source:"/background/Group.png"})})]})]})]});n.default=s},81515:function(e,n,t){"use strict";t.r(n),t.d(n,{Box:function(){return p},BoxContainer:function(){return f},Head:function(){return v},Icon:function(){return j},MainContainer:function(){return x},Para:function(){return b},WhiteDiv:function(){return w},YellowDiv:function(){return g}});var i=t(7297),r=t(85893),a=t(68777);function o(){let e=(0,i.Z)(["\n  width: 100%;\n"]);return o=function(){return e},e}function d(){let e=(0,i.Z)(['\n  width: 80%;\n  margin: 10% auto;\n  background: url("/background/blurBg.png");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: space-around;\n  @media (max-width: 600px) {\n    width: 95%;\n    margin: 0px auto;\n    flex-direction: column;\n  }\n']);return d=function(){return e},e}function s(){let e=(0,i.Z)(["\n  width: 390px;\n  height: 470px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);\n  border-radius: 30px;\n  margin-bottom: 30px;\n  position: relative;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  border: 0.5px solid white;\n  transition: all 0.2s ease;\n  &:hover {\n    border: 2px solid white;\n  }\n\n  @media (max-width: 600px) {\n    width: 80%;\n    height: 60%;\n    margin: 20px auto;\n    padding-top: 20px;\n    border: 2px solid white;\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,i.Z)(["\n  width: 55px;\n  height: 55px;\n  background: linear-gradient(90deg, #ece9e6 0%, #ffffff 100%);\n  border-radius: 15px;\n\n  ",":hover & {\n    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n  }\n  @media (max-width: 600px) {\n    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i.Z)(['\n  width: 55px;\n  height: 55px;\n  background-image: url("/background/white.png");\n  border-radius: 15px;\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']);return c=function(){return e},e}function u(){let e=(0,i.Z)(['\n  font-family: "personal";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1.3rem;\n  line-height: 35px;\n  width: 80%;\n  /* margin-top: 20px; */\n  text-align: center;\n  background: linear-gradient(90deg, #9a9a9a 0%, #9a9a9a 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  transition: all 1s ease-in-out;\n  ',":hover & {\n    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n  @media (max-width: 600px) {\n    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n    font-size: 1rem;\n  }\n"]);return u=function(){return e},e}function h(){let e=(0,i.Z)(['\n  font-family: "Montserrat Alternates";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 1.1rem;\n  line-height: 30px;\n  text-align: center;\n  background: linear-gradient(90deg, #9a9a9a 0%, #9a9a9a 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  width: 75%;\n  margin-bottom: 30px;\n  transition: all 0.5s ease-in-out;\n  ',":hover & {\n    background: linear-gradient(90deg, #fdfdfd 0%, #fefdfd 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n  @media (max-width: 600px) {\n    font-size: 1rem;\n    line-height: 25px;\n    background: linear-gradient(90deg, #fdfdfd 0%, #fefdfd 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n"]);return h=function(){return e},e}function m(){let e=(0,i.Z)(["\n  width: 35px;\n"]);return m=function(){return e},e}let x=a.ZP.div(o()),f=a.ZP.div(d()),p=a.ZP.div(s()),g=a.ZP.div(l(),p),w=a.ZP.div(c()),v=a.ZP.p(u(),p),b=a.ZP.p(h(),p),j=a.ZP.img(m()),y=()=>(0,r.jsx)("div",{children:"StyleImage"});n.default=y},16338:function(e,n,t){"use strict";t.r(n);var i=t(85893);t(67294);var r=t(96608),a=t(82856);let o=()=>(0,i.jsx)("div",{style:{width:"70%"},children:(0,i.jsx)(a.RightContainer,{children:(0,i.jsx)("div",{"data-aos":"fade-left",children:(0,i.jsxs)(a.ImgBg,{children:[(0,i.jsx)("div",{"data-aos":"fade-up",children:(0,i.jsx)(r.Z,{Text:"Ramaera Industries",lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"2.5rem",lh:"45px",width:"71%",mwidth:"95%",fw:"500",m:"0px auto",mlh:"25px",xmsize:"2rem",xssize:"4vw",msize:"1rem",mpadding:"0rem 0 0 1rem",padding:"0 0 0 0rem",mmargin:"0rem 0 0 0",align:"center"})}),(0,i.jsx)(a.ReverseText,{src:"/background/reverse.png"}),(0,i.jsxs)(a.Info,{children:[(0,i.jsxs)(a.InfoContainer,{children:[(0,i.jsx)("div",{style:{margin:"0px 20px"},children:(0,i.jsxs)("div",{"data-aos":"fade-right",children:[(0,i.jsx)(a.InfoHead,{children:"200+"}),(0,i.jsx)(a.InfoPara,{children:"Ramaera Group Direct Employees"})]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{"data-aos":"fade-right",children:[(0,i.jsx)(a.InfoHead,{children:"1000"}),(0,i.jsx)(a.InfoPara,{children:"FMCG Upcoming Mother Brands"})]})})]}),(0,i.jsxs)(a.InfoContainer,{children:[(0,i.jsx)("div",{style:{margin:"0px 20px"},children:(0,i.jsxs)("div",{"data-aos":"fade-left",children:[(0,i.jsx)(a.InfoHead,{children:"15000+"}),(0,i.jsx)(a.InfoPara,{children:"Community Members"})]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{"data-aos":"fade-left",children:[(0,i.jsx)(a.InfoHead,{children:"15"}),(0,i.jsx)(a.InfoPara,{children:"States Reach"})]})})]})]})]})})})});n.default=o},69304:function(e,n,t){"use strict";t.r(n);var i=t(85893);t(67294);var r=t(11905),a=t(16338),o=t(82856),d=t(96608);let s=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{"data-aos":"fade-up",children:(0,i.jsx)(d.Z,{Text:"INITIATIVES TO PROMOTE SUSTAINABILITY",lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"2.8rem",lh:"90px",width:"90rem",mwidth:"100vw",miwidth:"100vw",m:"10rem 0 0 0",fw:"500",mlh:"50px",align:"center",xmsize:"2rem",xssize:"4vw",msize:"2rem",mpadding:"0",mmargin:" 2rem 0 2rem 0"})}),(0,i.jsxs)(o.Best,{children:[(0,i.jsx)(r.default,{}),(0,i.jsx)(a.default,{})]})]});n.default=s},73198:function(e,n,t){"use strict";t.r(n),t.d(n,{ParaContainer:function(){return h}});var i=t(7297),r=t(85893);t(67294);var a=t(68777),o=t(96608);function d(){let e=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  flex-direction: column;\n"]);return d=function(){return e},e}function s(){let e=(0,i.Z)(["\n  margin-top: 20px;\n  width: 85%;\n  @media (max-width: 1200px) {\n    width: 100%;\n  }\n  @media (max-width: 600px) {\n    width: 85%;\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,i.Z)(["\n  width: 100%;\n  display: flex;\n  position: absolute;\n  justify-content: flex-end;\n  top: 5%;\n"]);return l=function(){return e},e}function c(){let e=(0,i.Z)(["\n  width: 18rem;\n  height: 45rem;\n  /* position: relative;\n   bottom: 20vh; */\n  @media (max-width: 600px) {\n    width: 8rem;\n    height: 22rem;\n    opacity: 70%;\n  }\n"]);return c=function(){return e},e}let u=a.ZP.div(d()),h=a.ZP.div(s()),m=a.ZP.div(l()),x=a.ZP.img(c()),f=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(u,{children:[(0,r.jsx)("div",{"data-aos":"fade-right","data-aos-anchor-placement":"top-bottom",children:(0,r.jsx)(o.Z,{Text:"An initiative of today for a perfect tomorrow",lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"3.8rem",lh:"90px",width:"80rem",mwidth:"100vw",fw:"500",mlh:"50px",align:"center",xmsize:"2rem",xssize:"4vw",msize:"2rem",mpadding:"0",mmargin:" 2rem 0 2rem 0"})}),(0,r.jsx)(h,{children:(0,r.jsx)("div",{"data-aos":"fade-left","data-aos-anchor-placement":"top-bottom",children:(0,r.jsx)(o.Z,{Text:"Innovation and excellence are our guiding principles and the execution of these in technology is helping us to carry out various policies that contribute to the upliftment of the society for a better tomorrow.",fw:"500",size:"30px",lh:"45px",width:"75rem",m:"0rem 0 0 0",xssize:"18px",mlh:"30px",msize:"18px",miwidth:"100vw",mwidth:"85vw",mta:"center",align:"center",mmwidth:"85vw"})})}),(0,r.jsx)(m,{children:(0,r.jsx)("div",{"data-aos":"fade-left","data-aos-anchor-placement":"top-bottom",children:(0,r.jsx)(x,{src:"/background/polygon.png"})})})]})});n.default=f},98595:function(e,n,t){"use strict";t.r(n);var i=t(7297),r=t(85893);t(67294);var a=t(68777),o=t(96608);function d(){let e=(0,i.Z)(["\n  width: 95%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 600px) {\n    flex-direction: column;\n  }\n"]);return d=function(){return e},e}function s(){let e=(0,i.Z)(["\n  width: 60%;\n  @media (max-width: 600px) {\n    width: 90%;\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,i.Z)(["\n  width: 40%;\n  @media (max-width: 1200px) {\n    margin: 0px 15vw 0  0;\n  }\n  @media (max-width: 600px) {\n    width: 90%;\n    margin: 0px auto;\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i.Z)(["\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"]);return c=function(){return e},e}function u(){let e=(0,i.Z)(["\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"]);return u=function(){return e},e}let h=a.ZP.div(d()),m=a.ZP.div(s()),x=a.ZP.div(l());a.ZP.img(c());let f=a.ZP.video(u()),p=()=>(0,r.jsxs)(h,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)("div",{"data-aos":"slide-right","data-aos-duration":"1000","data-aos-anchor-placement":"top-bottom",children:(0,r.jsx)(o.Z,{Text:" To make this investor relation transparent , we will provide complete insights on the project gain and other relevant information. So what are you waiting for, enrol yourself as a partner with successful Ramaera Projects for a promised sustainable output today and tomorrow.",fw:"500",size:"23px",lh:"45px",width:"100%",m:"2rem 0 0 0",xssize:"18px",mlh:"25px",msize:"13px",mwidth:"85vw",mta:"center",align:"center",mmwidth:"85vw"})}),(0,r.jsx)("div",{"data-aos":"slide-right","data-aos-duration":"1000","data-aos-anchor-placement":"top-bottom",children:(0,r.jsx)(o.Z,{Text:"Ramaera Industries are bringing out collaborative opportunities where you can become a part of a major Ramaera project by investing a minimal amount. This investment will benefit you by providing a monthly return on investment.",fw:"500",size:"23px",lh:"45px",width:"100%",m:"0rem 0 0 0",xssize:"18px",mlh:"25px",msize:"13px",mwidth:"85vw",mta:"center",align:"center",mmwidth:"85vw"})})]}),(0,r.jsx)(x,{children:(0,r.jsxs)("div",{"data-aos":"slide-left","data-aos-duration":"2000","data-aos-anchor-placement":"top-bottom",children:[(0,r.jsx)(f,{autoPlay:!0,loop:!0,muted:!0,children:(0,r.jsx)("source",{src:"/background/Partner.webm",type:"video/webm"})})," "]})})]});n.default=p},33746:function(e,n,t){"use strict";t.r(n);var i=t(7297),r=t(85893);t(67294);var a=t(68777),o=t(96608),d=t(77361),s=t(98595),l=t(39341);function c(){let e=(0,i.Z)(["\n  width: 100%;\n"]);return c=function(){return e},e}function u(){let e=(0,i.Z)(["\n  width: 90%;\n  margin: 50px auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media (max-width: 1200px) {\n   margin: 100px auto;\n  }\n  @media (max-width: 600px) {\n    width: 90%;\n    margin: 0px auto;\n    flex-direction: column;\n  }\n"]);return u=function(){return e},e}let h=a.ZP.div(c()),m=a.ZP.div(u()),x=()=>(0,r.jsxs)(h,{children:[(0,r.jsx)("div",{"data-aos":"fade-right",children:(0,r.jsx)(o.Z,{Text:"Become a partner with Ramaera",lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"40px",lh:"110%",width:"100%",mwidth:"100vw",fw:"500",mlh:"50px",align:"center",xmsize:"2rem",xssize:"4vw",msize:"2rem",mpadding:"0",mmargin:" 0 0 2rem 0"})}),(0,r.jsx)(d.ValParaContainer,{children:(0,r.jsx)("div",{"data-aos":"fade-left",children:(0,r.jsx)(o.Z,{Text:"Join us on our entrepreneurial venture by becoming a trustee and embark on the journey of success",fw:"500",size:"30px",lh:"45px",width:"100%",padding:"0 15vw",m:"2rem 0 0 0",xssize:"18px",mlh:"30px",msize:"18px",mwidth:"83vw",mta:"center",align:"center",mmwidth:"85vw"})})}),(0,r.jsxs)(m,{children:[(0,r.jsx)(l.default,{Heading:"INVESTMENT SHARE PERCENTAGE",Para:"We believe in honesty and fair share and hence, a percentage will be allotted to each and every project investor depending on the investment they do. They will also receive a monthly return of investment along with various other benefits."}),(0,r.jsx)(l.default,{Heading:"COMPLETE OPERATIONAL TRANSPARENCY",Para:"All our investors in the Ramaera industry will be fairly aware of all the operations and revenue based management. They will have information about each and every penny utilised out of their investment."}),(0,r.jsx)(l.default,{Heading:"LIFELONG SOURCE OF PASSIVE INCOME",Para:"The investment stakes in Ramaera projects will be based on the life of the project invested and hence, promise a generational output that will be delivered to the children and so on."})]}),(0,r.jsx)(s.default,{})]});n.default=x},39341:function(e,n,t){"use strict";t.r(n);var i=t(7297),r=t(85893);t(67294);var a=t(68777),o=t(96608);function d(){let e=(0,i.Z)(["\n  width: 32%;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0px auto;\n  @media (max-width: 600px) {\n    width: 80%;\n    margin: 15% auto;\n    height: 20vh;\n  }\n"]);return d=function(){return e},e}let s=a.ZP.div(d()),l=e=>{let{Heading:n,Para:t}=e;return(0,r.jsxs)(s,{children:[(0,r.jsx)("div",{"data-aos":"fade-up",children:(0,r.jsx)(o.Z,{Text:n,lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"1.4rem",lh:"35px",width:"100%",mwidth:"100%",fw:"500",mlh:"30px",xmsize:"2rem",xssize:"4vw",msize:"1rem",mpadding:"0rem 0 0 0 ",padding:"4rem 0 0 0",mmargin:"1rem 0 0 0",align:"center"})}),(0,r.jsx)("div",{"data-aos":"fade-down",children:(0,r.jsx)(o.Z,{Text:t,fw:"400",size:"0.9rem",lh:"23px",width:"100%",m:"0px auto",xssize:"18px",mlh:"25px",msize:"13px",mwidth:"90vw",mta:"center",align:"center"})})]})};n.default=l},51816:function(e,n,t){"use strict";t.r(n);var i=t(85893);t(67294);var r=t(10615);t(67731);var a=t(96608),o=t(18697),d=t(77361);let s=()=>(0,i.jsx)(d.CarouselWrapper,{children:(0,i.jsx)(r.lr,{showThumbs:!1,infiniteLoop:!0,children:o.SliderData.map(e=>(0,i.jsxs)(d.InnovationDiv,{children:[(0,i.jsxs)(d.InnovationLeft,{children:[(0,i.jsx)(a.Z,{Text:e.title,lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"50px",lh:"110%",width:"100%",mwidth:"100%",fw:"500",mlh:"50px",align:"center",xmsize:"2rem",xssize:"10vw",msize:"2rem",mpadding:"0",mmargin:" 0 0 0 0",mmwidth:"80vw"}),(0,i.jsx)(d.Img,{autoPlay:!0,loop:!0,muted:!0,children:(0,i.jsx)("source",{src:e.bgImg,type:"video/webm"})})]}),(0,i.jsxs)(d.InnovatinRight,{children:[(0,i.jsx)(d.InnoParaContainer,{children:(0,i.jsx)(a.Z,{Text:e.paragraph,fw:"500",size:"25px",lh:"40px",width:"27rem",m:"0rem 0 0 1rem",xssize:"18px",mlh:"20px",msize:"13px",mwidth:"50vw",mta:"center",mmwidth:"60vw"})}),(0,i.jsx)(d.Arrow,{src:"/background/arrow.png",style:{width:"60px"}})]})]}))})});n.default=s},18697:function(e,n,t){"use strict";t.r(n),t.d(n,{SliderData:function(){return r}});var i=t(85893);let r=[{title:"INNOVATION",bgImg:"/background/InnoGif.webm",paragraph:"INNOVATION Redefining excellence and the magnitude of Innovation to realise the convenience today and tomorrow"},{title:"RESPECTED FOR PEOPLE",bgImg:"/background/respect.webm",paragraph:"We reiterate our love and respect for the people that is the driving force of our journey to become the most trusted enterprise of the Nation"},{title:"CUSTOMER FOCUS",bgImg:"/background/customer.webm",paragraph:"We are devoted to serve the exceptional services with complete emphasis on CUSTOMER satisfaction."},{title:"GROWTH",bgImg:"/background/growth.webm",paragraph:"We aim for GROWTH and thrive to create growth"}],a=()=>(0,i.jsx)("div",{children:"StyleImage"});n.default=a},77361:function(e,n,t){"use strict";t.r(n),t.d(n,{Arrow:function(){return Z},CarouselWrapper:function(){return j},Img:function(){return w},InnoParaContainer:function(){return b},InnovatinRight:function(){return y},InnovationDiv:function(){return g},InnovationLeft:function(){return v},ValParaContainer:function(){return p},ValueContainer:function(){return f}});var i=t(7297),r=t(85893),a=t(68777);function o(){let e=(0,i.Z)(["\n  width: 100%;\n  margin: 20% auto;\n"]);return o=function(){return e},e}function d(){let e=(0,i.Z)(["\n  width: 100%;\n  margin: 20px auto;\n  @media (max-width: 600px) {\n    width: 80%;\n  }\n"]);return d=function(){return e},e}function s(){let e=(0,i.Z)(["\n  width: 85%;\n  margin: 50px auto;\n  border: 2px solid white;\n  border-radius: 20px;\n  display: flex;\n  height: 80vh;\n  @media (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,i.Z)(["\n  width: 100%;\n  margin: 20px;\n  object-fit: contain;\n  @media (max-width: 600px) {\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i.Z)(["\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-left: 5%;\n  @media (max-width: 600px) {\n    width: 100%;\n  }\n"]);return c=function(){return e},e}function u(){let e=(0,i.Z)(["\n  width: 50%;\n  border-left: 2px solid white;\n  @media (max-width: 600px) {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n"]);return u=function(){return e},e}function h(){let e=(0,i.Z)(["\n  @media (max-width: 600px) {\n    /* height: 70vh;\n    overflow: hidden; */\n  }\n"]);return h=function(){return e},e}function m(){let e=(0,i.Z)(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  @media (max-width: 600px) {\n    width: 80%;\n  }\n"]);return m=function(){return e},e}function x(){let e=(0,i.Z)(["\n  width: 70px;\n  position: absolute;\n  top: -30px;\n  right: 40px;\n  z-index: -10;\n  @media (max-width: 600px) {\n    width: 40px;\n    top: 160%;\n    left: -20%;\n    display: none;\n  }\n"]);return x=function(){return e},e}let f=a.ZP.div(o()),p=a.ZP.div(d()),g=a.ZP.div(s()),w=a.ZP.video(l()),v=a.ZP.div(c()),b=a.ZP.div(u()),j=a.ZP.div(h()),y=a.ZP.div(m()),Z=a.ZP.img(x()),z=()=>(0,r.jsx)("div",{children:"StyleImage"});n.default=z},82980:function(e,n,t){"use strict";t.r(n);var i=t(85893);t(67294);var r=t(77361),a=t(96608),o=t(51816);let d=()=>(0,i.jsxs)(r.ValueContainer,{children:[(0,i.jsx)("div",{"data-aos":"fade-right","data-aos-anchor-placement":"top-bottom",children:(0,i.jsx)(a.Z,{Text:"THE VALUES OF RAMAERA",lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"50px",lh:"110%",width:"100%",mwidth:"100vw",fw:"500",mlh:"50px",align:"center",xmsize:"2rem",xssize:"4vw",msize:"2rem",mpadding:"0",mmargin:" 0 0 0rem 0"})}),(0,i.jsx)(r.ValParaContainer,{children:(0,i.jsx)("div",{"data-aos":"fade-left","data-aos-anchor-placement":"top-bottom",children:(0,i.jsx)(a.Z,{Text:"The Love and the trust of our Ramaera Family has been the foundation of our growth and has helped us to strengthen our core values as an industry for the people",fw:"500",size:"25px",lh:"40px",width:"100%",m:"0rem 0 0 0",xssize:"18px",mlh:"30px",msize:"18px",mwidth:"80vw",mta:"center",align:"center",padding:"0 15vw",mmwidth:"85vw"})})}),(0,i.jsx)(o.default,{})]});n.default=d},63250:function(e,n,t){"use strict";t.r(n);var i=t(85893);t(67294);var r=t(96608),a=t(89950);let o=()=>(0,i.jsx)(a.VisionBox,{children:(0,i.jsxs)(a.VisionBG,{children:[(0,i.jsx)("div",{"data-aos":"zoom-in",children:(0,i.jsx)(r.Z,{Text:"ramaera vision",lg:"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)",font:!0,size:"2.8rem",lh:"90px",width:"100%",mwidth:"100%",fw:"500",mlh:"50px",align:"center",xmsize:"2rem",xssize:"10vw",msize:"2rem",mpadding:"4rem 0 0 0 ",padding:"4rem 0 0 0",mmargin:"0 0 0 0",mmwidth:"auto"})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{"data-aos":"fade-right",children:(0,i.jsx)(r.Z,{Text:"“Ramaera Industries has begun with the primary motive of nation orientation and strengthening the vision of a sustainable and prosperous nation. With the idea of encompassing and emboldening our presence in industrial sectors such as FMCG, Hotels, Packaging, Agriculture & IT Businesses. We are consistent in serving you the best with due honesty and world class standards. Your trust has crucially been the main pillar of our phenomenal growth and has enabled us to uphold the core values of establishing sustainability along with excellence and innovation in customer services.",fw:"300",size:"22px",lh:"40px",width:"100%",m:"0px auto",xssize:"18px",mlh:"25px",msize:"18px",mwidth:"90vw",mta:"center",padding:"0 10vw",align:"center",mmwidth:"auto"})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{"data-aos":"fade-left",children:(0,i.jsx)(r.Z,{Text:"“Ramaera Industries plans to redefine the existing industrial sector by abiding on the principles of transparency, trusteeship and empowerment .We are dedicated not only to delivering the best quality products at the most reasonable prices in the comfort of your homes but also establishing financial stability through our numerous investment policies .",fw:"300",size:"22px",lh:"40px",width:"100%",m:"0px auto",xssize:"18px",mlh:"25px",msize:"18px",mwidth:"90vw",mta:"center",padding:"0 10vw",align:"center",mmwidth:"auto"})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{"data-aos":"fade-right",children:(0,i.jsx)(r.Z,{Text:"“ Our belief of revolutionising the traditional industries by merging them to the world of decentralisation keeps us a step further and hence, we are one of the most trusted and loved industrial enterprises in India.",fw:"300",size:"22px",lh:"40px",width:"100%",m:"0px auto",xssize:"18px",mlh:"25px",msize:"18px",mwidth:"90vw",mta:"center",padding:"0 10vw",align:"center",mmwidth:"auto"})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{"data-aos":"fade-left",children:(0,i.jsx)(r.Z,{Text:"“Keeping pace with the advancements of technology , we thrive to exceed the expectations of our customer base on prices, delivery and convenience by our consistent improvement and efforts. Innovation and excellence are our guiding principles and the execution of these in technology is helping us to carry out various policies that contribute to the upliftment of the society for a better tomorrow.",fw:"300",size:"22px",lh:"40px",width:"100%",m:"0px auto",xssize:"18px",mlh:"25px",msize:"18px",mwidth:"90vw",mta:"center",padding:"0 10vw",align:"center",mmwidth:"auto"})}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{"data-aos":"fade-right",children:(0,i.jsx)(r.Z,{Text:"“ Ramaera Industries aims to make a mark in all of the most popular industrial sectors and provide employment to thousands of diligent youth striving to earn and secure their future under the shade of ethical corporate citizenship. We also ensure that our industrial ventures do not pose any threat to the environment and thus, we have embarked on the mission to be the first company in the world to be completely carbon positive, waste recycling and water conserving. In a nutshell, we stand true to our commitment to protect the environment, creating a resourceful Ramaera community and delivering the best with ethical industrial practices.",fw:"300",size:"22px",lh:"40px",width:"100%",m:"0px auto",xssize:"18px",mlh:"25px",msize:"18px",mwidth:"90vw",mta:"center",padding:"0 10vw",align:"center",mmwidth:"auto"})})]})});n.default=o},89950:function(e,n,t){"use strict";t.r(n),t.d(n,{VisionBG:function(){return c},VisionBox:function(){return l},VisionHead:function(){return u}});var i=t(7297),r=t(85893),a=t(68777);function o(){let e=(0,i.Z)(['\n  background: url("/background/Rectangle.svg");\n  width: 100%;\n  height: 202.6vh;\n  min-height: 1500px;\n  background-size: cover;\n  background-position: center;\n  box-sizing: border-box;\n  @media (max-width: 1200px) {\n    min-height: 1600px;\n  }\n  @media (max-width: 600px) {\n    height: 220vh;\n    min-height: 1800px;\n    width: 95%;\n    margin: 0px auto;\n  }\n  @media (max-width: 400px) {\n  min-height: 2100px;\n}\n']);return o=function(){return e},e}function d(){let e=(0,i.Z)(['\n  width: 95%;\n  margin: 50px auto;\n  background: url("/background/3dTriangle.png");\n  height: 100vh;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin: auto;\n']);return d=function(){return e},e}function s(){let e=(0,i.Z)(['\n  font-family: "personal";\n\n  font-style: normal;\n  font-weight: 400;\n  font-size: 2.5rem;\n  line-height: 65px;\n  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  text-align: center;\n  padding-top: 70px;\n  @media (max-width: 600px) {\n    font-size: 2rem;\n  }\n']);return s=function(){return e},e}let l=a.ZP.div(o()),c=a.ZP.div(d()),u=a.ZP.h1(s()),h=()=>(0,r.jsx)("div",{children:"StyleImage"});n.default=h}},function(e){e.O(0,[1228,1502,7285,1664,273,606,637,2581,5675,8525,5416,7163,270,9456,3698,6969,9774,2888,179],function(){return e(e.s=8611)}),_N_E=e.O()}]);