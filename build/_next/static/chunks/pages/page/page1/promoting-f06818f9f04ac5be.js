(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4953],{9253:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/page1/promoting",function(){return t(4456)}])},9427:function(n,e,t){"use strict";var i=t(7297),a=t(5893);t(7294);var r=t(9363),o=t(3838),d=t(6468);function s(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  cursor: pointer;\n  min-width: ",";\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return s=function(){return n},n}function l(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return l=function(){return n},n}let c=(0,r.ZP)(o.E.button)(s(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.width?n.width:n.secondaryWidth?n.secondaryWidth:"15rem",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");r.ZP.div(l(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let u=n=>(0,a.jsx)(c,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,a.jsx)(d.Z,{}):n.Text});e.Z=u},9832:function(n,e,t){"use strict";var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(["\n    //min-width: 100vh;\n    min-height: ",";\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n    flex-direction: column;\n    /*     padding-top: ",";\n */\n    padding-top: ",";\n    background: linear-gradient(\n      90deg,\n      rgb(var(--background-start-rgb)) 0%,\n      rgb(var(--background-end-rgb)) 100%\n    );\n    background-image: url(",");\n    background-size: ",";\n    background-repeat: no-repeat;\n    position: relative;\n    background-position: center center;\n    overflow-x: hidden;\n    overflow: ",";\n    overflow-y: ",";\n    z-index: ",";\n\n    @media (max-width: 1200px) {\n      min-height: 100vh;\n      overflow-y: hidden;\n      background-size: ",";\n      background-position: ",";\n    }\n\n    @media (max-width: 768px) {\n      min-height: 100vh;\n      min-height: ",";\n      padding-top: ",";\n      overflow: visible;\n    }\n    @media (max-width: 400px) {\n      min-height: ",";\n    }\n  "]);return o=function(){return n},n}let d=n=>{let{children:e,bg:t,start:i,padding:d,height:s,adjustBg:l,bgColor:c,Zindex:u,Y:f,resTr:h,mheight:m,mmheight:p,mtpadding:g,hideO:x}=n,w=r.ZP.section(o(),s||"100vh",i?"flex-start":"center",d||"calc(1rem + 1rem)",d||"0",t||"",l?"100% auto":"100% 100%",x||"",f||"",u||"1",l?"100% auto":"auto 100%",l?"center center":"center top",m||"",g||"calc(1rem + 1rem)",p||"");return(0,a.jsx)(w,{children:e})};e.Z=d},6468:function(n,e,t){"use strict";var i=t(7297),a=t(5893);t(7294);var r=t(9363);function o(){let n=(0,i.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return o=function(){return n},n}let d=()=>(0,a.jsx)(s,{viewBox:"0 0 50 50",children:(0,a.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),s=r.ZP.svg(o());e.Z=d},6608:function(n,e,t){"use strict";var i=t(7297),a=t(5893);t(7294);var r=t(9363);function o(){let n=(0,i.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      font-size: ",";\n    }\n  "]);return o=function(){return n},n}let d=n=>{let e=r.ZP.p(o(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.mmsize?n.mmsize:"");return(0,a.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=d},6080:function(n,e,t){"use strict";var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(["\n    transform: ",";\n    width: ",";\n    height: ",";\n    display: flex;\n    align-items: ",";\n    justify-content: space-between;\n    flex-direction: column;\n    padding: ",";\n    margin: ",";\n    position: ",";\n    overflow: ",";\n\n    @media only screen and (max-width: 1600px) {\n      width: ",";\n    }\n    @media only screen and (max-width: 1400px) {\n      width: ",";\n    }\n    @media only screen and (max-width: 540px) {\n      width: 100%;\n      padding: ",";\n    }\n  "]);return o=function(){return n},n}let d=n=>{let{children:e,Left:t,full:i,padding:d,margin:s,sp:l,height:c,width:u,position:f,scale:h,overflow:m}=n,p=r.ZP.section(o(),h?"scale(".concat(h,")"):"",i?"100%":u||"1400px",c||"auto",t?"left":"center",d||"0",s||"0",f||"static",m||"",i?"100%":"95%","100%",l||"0 1rem");return(0,a.jsx)(p,{children:e})};e.Z=d},5904:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(["\n  position: absolute;\n  height: 25vw;\n  top: 280px;\n  left: 100px;\n  @media only screen and (max-width: 768px) {\n    left: 20px;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.img(o()),s=()=>(0,a.jsx)(d,{src:"/content/promtCircle.png",alt:"circle background"});e.default=s},2331:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(['\n  margin-top: 10rem;\n  background-image: url("/background/curve.png");\n  background-repeat: no-repeat;\n  background-size: 100vw;\n  height: 120vh;\n  width: 100vw;\n  z-index: -1;\n  @media only screen and (max-width: 1200px) {\n    background: transparent;\n  }\n']);return o=function(){return n},n}let d=r.ZP.div(o()),s=()=>(0,a.jsx)(d,{});e.default=s},4682:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(["\n  left: 125px;\n  @media only screen and (max-width: 768px) {\n    left: 0;\n    position: absolute;\n    top: -200px;\n    transform: scale(0.75);\n    display: none;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.img(o()),s=()=>(0,a.jsx)(d,{src:"/content/promtDots.png",alt:"dots background"});e.default=s},9761:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(["\n  transform: scale(0.75);\n  @media only screen and (max-width: 768px) {\n    transform: scale(0.5);\n    padding: 0 10vw;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.div(o()),s=()=>(0,a.jsx)(d,{children:(0,a.jsx)("img",{loading:"lazy",alt:"prompt",src:"/content/promt1.png"})});e.default=s},6439:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(["\n  transform: scale(0.75);\n  @media only screen and (max-width: 768px) {\n    transform: scale(0.5);\n    width: 100vw;\n    padding: 0 10vw 0 0;\n  }\n"]);return o=function(){return n},n}let d=r.ZP.div(o()),s=()=>(0,a.jsx)(d,{children:(0,a.jsx)("img",{loading:"lazy",alt:"prompt again",src:"/content/promt2.png"})});e.default=s},4650:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9363),o=t(6608),d=t(9427);function s(){let n=(0,i.Z)(["\n  width: 35vw;\n  @media only screen and (max-width: 768px) {\n    position: absolute;\n    right: 35vw;\n    top: 20vh;\n  }\n"]);return s=function(){return n},n}function l(){let n=(0,i.Z)(["\n  margin-left: 50vw;\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return l=function(){return n},n}let c=r.ZP.div(s()),u=r.ZP.div(l()),f=()=>(0,a.jsxs)(c,{children:[(0,a.jsx)(o.Z,{Text:"Empowering young talent and promoting entrepreneurships",color:"#fff",size:"32px",lh:"32px",align:"left",fw:"700",m:"0 0 0 0",mta:"center",mpadding:"0 10vw 0 20vw"}),(0,a.jsx)(o.Z,{Text:"India is the hub of entrepreneurial talent and we plan to provide these young talents the right resources. Ramaera Industries aims to give wings to the dreams of the CEOs of tomorrow",color:"#fff",size:"16px",lh:"18px",align:"left",fw:"200",m:"0 4rem 0 0",msize:"12px",mta:"center",mwidth:"100vw",mpadding:"0 10vw 0 20vw"}),(0,a.jsx)(u,{children:(0,a.jsx)(d.Z,{Text:"Read More",m:"0",lightborder:!0,fontSize:"12px",bg:"none"})})]});e.default=f},6896:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9363),o=t(6608),d=t(9427);function s(){let n=(0,i.Z)(["\n  width: 35vw;\n  @media only screen and (max-width: 768px) {\n    position: absolute;\n    left: -20vw;\n    top: 30vh;\n  }\n"]);return s=function(){return n},n}function l(){let n=(0,i.Z)(["\n  margin-right: 50vw;\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return l=function(){return n},n}let c=r.ZP.div(s()),u=r.ZP.div(l()),f=()=>(0,a.jsxs)(c,{children:[(0,a.jsx)(o.Z,{Text:"Strengthened by the people, for the benefit of the people",color:"#fff",size:"32px",lh:"32px",align:"left",fw:"700",m:"0",mwidth:"100vw",mta:"center",mpadding:"5vh 15vw 0 10vw"}),(0,a.jsx)(o.Z,{Text:"The trust of Ramaera family has been the pillar of our phenomenal growth. This has enabled us to sustain millions of livelihoods and employ lakhs of people, turning our vision of finanicial independence of every Indian into reality.",color:"#fff",size:"16px",lh:"18px",align:"left",fw:"200",m:"0 4rem 0 0",msize:"12px",mta:"center",mwidth:"100vw",mpadding:"0 15vw 0 10vw"}),(0,a.jsx)(u,{children:(0,a.jsx)(d.Z,{Text:"Read More",m:"0",lightborder:!0,fontSize:"12px",bg:"none"})})]});e.default=f},8829:function(n,e,t){"use strict";t.r(e),t.d(e,{CustomText:function(){return c},Responsive:function(){return u},bg:function(){return s},curve:function(){return l}});var i=t(7297),a=t(5893),r=t(9363);function o(){let n=(0,i.Z)(["\n  font-size: 25px;\n  line-height: 39px;\n  color: #fff;\n  line-height: 42px;\n  font-weight: 400;\n  margin: 3rem 0;\n"]);return o=function(){return n},n}function d(){let n=(0,i.Z)(["\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 0 0 0;\n"]);return d=function(){return n},n}let s="/background/blank.png",l="/background/curve.png",c=r.ZP.h1(o()),u=r.ZP.div(d()),f=()=>(0,a.jsx)("div",{children:"StyleImage"});e.default=f},4456:function(n,e,t){"use strict";t.r(e);var i=t(7297),a=t(5893),r=t(9832),o=t(6080),d=t(6608),s=t(8829),l=t(2331),c=t(5904),u=t(4682),f=t(9761),h=t(6439),m=t(4650),p=t(6896),g=t(9363);function x(){let n=(0,i.Z)(["\n  position: absolute;\n  left: 0;\n  top: 5vh;\n  margin: 20vh 0 0 10vw;\n  @media only screen and (max-width: 768px) {\n    top: -10vh;\n    right: 60%;\n  }\n"]);return x=function(){return n},n}function w(){let n=(0,i.Z)(["\n  position: absolute;\n  right: 10vw;\n  top: 82vh;\n  @media only screen and (max-width: 768px) {\n    top: 72vh;\n    right: 0;\n  }\n"]);return w=function(){return n},n}let v=g.ZP.div(x()),b=g.ZP.div(w()),y=()=>(0,a.jsx)(r.Z,{bgColor:"#f5f5f5",children:(0,a.jsxs)(o.Z,{width:"1500px",margin:"0 0 0 0 ",children:[(0,a.jsx)("div",{"data-aos":"fade-in","data-aos-duration":"500","data-aos-anchor-placement":"bottom-bottom",children:(0,a.jsx)(d.Z,{Text:"Promoting Entrepreneurship",lg:"linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",font:!0,size:"55px",fw:"400",align:"center",lh:"45px",xmsize:"4rem",xssize:"6vw",msize:"2.2rem"})}),(0,a.jsxs)(s.Responsive,{children:[(0,a.jsx)(l.default,{}),(0,a.jsx)("div",{"data-aos":"fade-down","data-aos-easing":"linear",children:(0,a.jsx)(l.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"200","data-aos-anchor-placement":"top-center",style:{position:"absolute",left:"0",top:"0",margin:"0 0 0 0  "},children:(0,a.jsx)(c.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-bottom","data-aos-duration":"200","data-aos-easing":"ease-in-back",style:{position:"absolute",left:"7vw",top:"57vh",margin:"0 0 0 0  "},children:(0,a.jsx)(u.default,{})}),(0,a.jsx)(v,{"data-aos":"slide-right","data-aos-duration":"500","data-aos-easing":"linear","data-aos-anchor-placement":"top-bottom",children:(0,a.jsx)(f.default,{})}),(0,a.jsx)(b,{"data-aos":"slide-left","data-aos-duration":"500","data-aos-easing":"linear","data-aos-anchor-placement":"top-bottom",children:(0,a.jsx)(h.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-anchor-placement":"bottom-bottom",style:{position:"absolute",right:"15vw",top:"40vh",margin:" 0 10vh 0 0 "},children:(0,a.jsx)(m.default,{})}),(0,a.jsx)("div",{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-anchor-placement":"top-bottom",style:{position:"absolute",left:"25vw",top:"90vh",margin:" 0 0 0 0 "},children:(0,a.jsx)(p.default,{})})]})]})});e.default=y}},function(n){n.O(0,[8267,3838,9774,2888,179],function(){return n(n.s=9253)}),_N_E=n.O()}]);