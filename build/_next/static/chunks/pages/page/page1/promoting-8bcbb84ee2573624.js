(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4953],{79253:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/page1/promoting",function(){return t(64456)}])},39427:function(n,e,t){"use strict";var i=t(7297),a=t(85893);t(67294);var r=t(68777),o=t(43838),d=t(36468);function s(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  min-width: ",";\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return s=function(){return n},n}function l(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return l=function(){return n},n}let c=(0,r.ZP)(o.E.button)(s(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?n.noLineHeight:"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:n.secondaryWidth?n.secondaryWidth:"15rem",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");r.ZP.div(l(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let m=n=>(0,a.jsx)(c,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,a.jsx)(d.Z,{}):n.Text});e.Z=m},39832:function(n,e,t){"use strict";var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(["\n    //min-width: 100vh;\n    min-height: ",";\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n    flex-direction: column;\n    /*     padding-top: ",";\n */\n    padding-top: ",";\n    background: linear-gradient(\n      90deg,\n      rgb(var(--background-start-rgb)) 0%,\n      rgb(var(--background-end-rgb)) 100%\n    );\n    background-image: url(",");\n    background-size: ",";\n    background-repeat: no-repeat;\n    position: relative;\n    background-position: center center;\n    /* overflow-x: hidden; */\n    overflow: ",";\n    overflow-y: ",";\n    z-index: ",";\n\n    @media (max-width: 1200px) {\n      min-height: 100vh;\n      overflow-y: hidden;\n      background-size: ",";\n      background-position: ",";\n    }\n\n    @media (max-width: 768px) {\n      min-height: 100vh;\n      min-height: ",";\n      padding-top: ",";\n      overflow: visible;\n    }\n    @media (max-width: 400px) {\n      min-height: ",";\n    }\n  "]);return o=function(){return n},n}let d=n=>{let{children:e,bg:t,start:i,padding:d,height:s,adjustBg:l,bgColor:c,Zindex:m,Y:p,resTr:h,mheight:u,mmheight:f,mtpadding:x,hideO:g}=n,w=r.ZP.section(o(),s||"100vh",i?"flex-start":"center",d||"calc(1rem + 1rem)",d||"0",t||"",l?"100% auto":"100% 100%",g||"",p||"",m||"1",l?"100% auto":"auto 100%",l?"center center":"center top",u||"",x||"calc(1rem + 1rem)",f||"");return(0,a.jsx)(w,{children:e})};e.Z=d},36468:function(n,e,t){"use strict";var i=t(7297),a=t(85893);t(67294);var r=t(68777);function o(){let n=(0,i.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return o=function(){return n},n}let d=()=>(0,a.jsx)(s,{viewBox:"0 0 50 50",children:(0,a.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),s=r.ZP.svg(o());e.Z=d},96608:function(n,e,t){"use strict";var i=t(7297),a=t(85893);t(67294);var r=t(68777);function o(){let n=(0,i.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return o=function(){return n},n}let d=n=>{let e=r.ZP.p(o(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,a.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=d},36080:function(n,e,t){"use strict";var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(["\n    transform: ",";\n    background: ",";\n    width: ",";\n    height: ",";\n    display: flex;\n    display: ",";\n    align-items: ",";\n    justify-content: space-between;\n    flex-direction: column;\n    padding: ",";\n    margin: ",";\n    position: ",";\n    overflow: ",";\n\n    @media only screen and (max-width: 1600px) {\n      width: ",";\n    }\n    @media only screen and (max-width: 1400px) {\n      width: ",";\n    }\n    @media only screen and (max-width: 540px) {\n      width: 100%;\n      padding: ",";\n    }\n  "]);return o=function(){return n},n}let d=n=>{let{children:e,Left:t,full:i,padding:d,margin:s,sp:l,height:c,width:m,position:p,scale:h,overflow:u,df:f,bg:x}=n,g=r.ZP.section(o(),h?"scale(".concat(h,")"):"",x||"",i?"100%":m||"1400px",c||"auto",f||"flex",t?"left":"center",d||"0",s||"0",p||"static",u||"",i?"100%":"95%","100%",l||"0 1rem");return(0,a.jsx)(g,{children:e})};e.Z=d},65904:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(["\n  position: absolute;\n  height: 350px;\n  top: 340px;\n  left: 155px;\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.img(o()),s=()=>(0,a.jsx)(d,{src:"/content/promtCircle.png",alt:"circle background"});e.default=s},12331:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(['\n  margin-top: 10rem;\n  background-image: url("/background/curve.png");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 1000px;\n  width: 100vw;\n  z-index: -1;\n  @media only screen and (max-width: 1200px) {\n    height: 100vh;\n    background: transparent;\n  }\n']);return o=function(){return n},n}let d=r.ZP.div(o()),s=()=>(0,a.jsx)(d,{});e.default=s},24682:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(["\n  left: 125px;\n  @media only screen and (max-width: 768px) {\n    left: 0;\n    position: absolute;\n    top: -200px;\n    transform: scale(0.75);\n    display: none;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.img(o()),s=()=>(0,a.jsx)(d,{src:"/content/promtDots.png",alt:"dots background"});e.default=s},29761:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(["\n  transform: scale(0.75);\n  @media only screen and (max-width: 768px) {\n    transform: scale(0.5);\n    padding: 0 20vw;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.div(o()),s=()=>(0,a.jsx)(d,{children:(0,a.jsx)("img",{loading:"lazy",alt:"prompt",src:"/content/promt1.png"})});e.default=s},96439:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(["\n  transform: scale(0.75);\n  @media only screen and (max-width: 768px) {\n    transform: scale(0.5);\n    width: 100vw;\n    padding: 0 10vw 0 0;\n  }\n  @media only screen and (max-width: 450px) {\n    display: none;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.div(o()),s=()=>(0,a.jsx)(d,{children:(0,a.jsx)("img",{loading:"lazy",alt:"prompt again",src:"/content/promt2.png"})});e.default=s},94650:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(68777),o=t(96608);function d(){let n=(0,i.Z)(["\n  width: 38vw;\n  @media only screen and (max-width: 768px) {\n    position: absolute;\n    right: 35vw;\n    top: 20vh;\n  }\n  @media only screen and (max-width: 450px) {\n    padding: 30px 10px 0 10px;\n    right: 26vw;\n  }\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  margin-left: 50vw;\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return s=function(){return n},n}t(39427);let l=r.ZP.div(d());r.ZP.div(s());let c=()=>(0,a.jsxs)(l,{children:[(0,a.jsx)(o.Z,{Text:"Empowering young talent and promoting entrepreneurship",color:"#fff",size:"26px",lh:"32px",align:"left",fw:"600",m:"0 0 0 0",mta:"center",padding:"1.5vw 0",mpadding:"0",mmwidth:"90vw"}),(0,a.jsx)(o.Z,{Text:"India is the hub of entrepreneurial talent and we plan to provide these young talents the right resources. Ramaera Industries aims to give wings to the dreams of the CEOs of tomorrow.",color:"#fff",size:"14px",lh:"23px",align:"left",fw:"200",m:"0 4rem 0 0",msize:"12px",mta:"center",mwidth:"100vw",padding:"1vw 8vw 1vw 0",mpadding:"0",mmwidth:"90vw"})]});e.default=c},66896:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(68777),o=t(96608);function d(){let n=(0,i.Z)(["\n  width: 36vw;\n  @media only screen and (max-width: 768px) {\n    position: absolute;\n    left: -20vw;\n    top: 30vh;\n  }\n  @media only screen and (max-width: 450px) {\n    top: 15vh;\n  }\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  margin-right: 50vw;\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return s=function(){return n},n}t(39427);let l=r.ZP.div(d());r.ZP.div(s());let c=()=>(0,a.jsxs)(l,{children:[(0,a.jsx)(o.Z,{Text:"Strengthened by the people, for the benefit of the people",color:"#fff",size:"26px",lh:"32px",align:"left",fw:"600",m:"0",mwidth:"100vw",mta:"center",padding:"1.5vw 2vw 1.5vw 5vw",mpadding:"0 ",mmwidth:"90vw"}),(0,a.jsx)(o.Z,{Text:"The trust of Ramaera family has been the pillar of our phenomenal growth. This has enabled us to sustain millions of livelihoods and employ lakhs of people, turning our vision of finanicial independence of every Indian into reality.",color:"#fff",size:"14px",lh:"23px",align:"left",fw:"200",m:"0 1.5rem 0 0",msize:"12px",mta:"center",mwidth:"100vw",padding:"1vw 2vw 2vw 5vw",mpadding:"0",mmwidth:"90vw"})]});e.default=c},88829:function(n,e,t){"use strict";t.r(e),t.d(e,{CustomText:function(){return c},Responsive:function(){return m},bg:function(){return s},curve:function(){return l}});var i=t(7297),a=t(85893),r=t(68777);function o(){let n=(0,i.Z)(["\n  font-size: 25px;\n  line-height: 39px;\n  color: #fff;\n  line-height: 42px;\n  font-weight: 400;\n  margin: 3rem 0;\n"]);return o=function(){return n},n}function d(){let n=(0,i.Z)(["\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 0 0 0;\n"]);return d=function(){return n},n}let s="/background/blank.png",l="/background/curve.png",c=r.ZP.h1(o()),m=r.ZP.div(d()),p=()=>(0,a.jsx)("div",{children:"StyleImage"});e.default=p},64456:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(85893),r=t(39832),o=t(36080),d=t(96608),s=t(88829),l=t(12331),c=t(65904),m=t(24682),p=t(29761),h=t(96439),u=t(94650),f=t(66896),x=t(68777);function g(){let n=(0,i.Z)(["\n  position: absolute;\n  left: 0;\n  top: 5vh;\n  margin: 120px 0 0 200px;\n  @media only screen and (max-width: 768px) {\n    margin: 0;\n    top: 2vh;\n    right: 50%;\n  }\n"]);return g=function(){return n},n}function w(){let n=(0,i.Z)(["\n  position: absolute;\n  right: 10vw;\n  top: 630px;\n  @media only screen and (max-width: 768px) {\n    top: 72vh;\n    right: 0;\n  }\n"]);return w=function(){return n},n}let v=x.ZP.div(g()),b=x.ZP.div(w()),y=()=>(0,a.jsx)(r.Z,{bgColor:"#f5f5f5",children:(0,a.jsxs)(o.Z,{width:"1500px",margin:"0 0 0 0 ",children:[(0,a.jsx)("div",{"data-aos":"fade-in","data-aos-duration":"500","data-aos-anchor-placement":"bottom-bottom",children:(0,a.jsx)(d.Z,{Text:"Promoting Entrepreneurship",lg:"linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",font:!0,size:"55px",fw:"400",align:"center",lh:"45px",xmsize:"4rem",xssize:"6vw",msize:"1.6rem"})}),(0,a.jsxs)(s.Responsive,{children:[(0,a.jsx)(l.default,{}),(0,a.jsx)("div",{"data-aos":"fade-down","data-aos-easing":"linear",children:(0,a.jsx)(l.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"200","data-aos-anchor-placement":"top-center",style:{position:"absolute",left:"0",top:"0",margin:"0 0 0 0  "},children:(0,a.jsx)(c.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-bottom","data-aos-duration":"200","data-aos-easing":"ease-in-back",style:{position:"absolute",left:"150px",top:"500px",margin:"0 0 0 0  "},children:(0,a.jsx)(m.default,{})}),(0,a.jsx)(v,{"data-aos":"slide-right","data-aos-duration":"500","data-aos-easing":"linear","data-aos-anchor-placement":"top-bottom",children:(0,a.jsx)(p.default,{})}),(0,a.jsx)(b,{"data-aos":"slide-left","data-aos-duration":"500","data-aos-easing":"linear","data-aos-anchor-placement":"top-bottom",children:(0,a.jsx)(h.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-anchor-placement":"bottom-bottom",style:{position:"absolute",right:"12vw",top:"320px",margin:" 0 10vh 0 0 "},children:(0,a.jsx)(u.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-anchor-placement":"top-bottom",style:{position:"absolute",left:"29vw",top:"700px",margin:" 0 0 0 0 "},children:(0,a.jsx)(f.default,{})})]})]})});e.default=y}},function(n){n.O(0,[1502,3838,9774,2888,179],function(){return n(n.s=79253)}),_N_E=n.O()}]);