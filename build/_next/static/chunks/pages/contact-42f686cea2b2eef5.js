(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{8105:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(1406)}])},9889:function(n,e,t){"use strict";t.d(e,{Z:function(){return N}});var i=t(7297),r=t(5893),o=t(7294),a=t(9363),l=t(5697);function d(){let n=(0,i.Z)(["\n  position: absolute;\n  top: 50%; /* position the top  edge of the element at the middle of the parent */\n  transform: translate(0, -50%);\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n  margin: -0.25rem 0 0 0;\n\n  span {\n    width: 2rem;\n    height: 0.25rem;\n    background: linear-gradient(90deg, #ffa751 0%, #ffe259 100%);\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return d=function(){return n},n}let s=a.ZP.button(d(),n=>{let{open:e}=n;return e?"rotate(45deg)":"rotate(0)"},n=>{let{open:e}=n;return e?"0":"1"},n=>{let{open:e}=n;return e?"translateX(20px)":"translateX(0)"},n=>{let{open:e}=n;return e?"rotate(-45deg)":"rotate(0)"}),c=n=>{let{open:e,setOpen:t,...i}=n;return(0,r.jsxs)(s,{"aria-label":"Toggle menu","aria-expanded":!!e,open:e,onClick:()=>t(!e),...i,children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})};function u(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: none; //  ",";\n  transform: ",';\n  min-height: 100vh;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n  padding: 2rem;\n  position: absolute;\n  top: -40px;\n  line-height: 50px;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n  backdrop-filter: blur(2rem);\n  margin: 0;\n  a {\n    font-family: "Montserrat", sans-serif;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #fff;\n    text-decoration: none;\n    transition: color 0.3s linear;\n    margin: 1rem 0;\n  }\n']);return u=function(){return n},n}c.propTypes={open:l.bool.isRequired,setOpen:l.func.isRequired};let x=a.ZP.nav(u(),n=>{let{theme:e}=n;return e.primaryLight},n=>{let{open:e}=n;return e?"translateX(0)":"translateX(-100%)"});var p=t(1664),f=t.n(p);function h(){let n=(0,i.Z)(["\n  display: grid;\n  place-items: center;\n  margin-top: 5rem;\n"]);return h=function(){return n},n}function m(){let n=(0,i.Z)(["\n  display: flex;\n  margin: 0 2rem;\n  align-items: center;\n  text-decoration: none;\n  color: #fff;\n  position: absolute;\n  left: 2rem;\n  top: 1rem;\n  width: 3rem;\n"]);return m=function(){return n},n}function g(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 2rem 0;\n  align-items: center;\n"]);return g=function(){return n},n}function j(){let n=(0,i.Z)(["\n  color: #fff;\n  font-weight: 500;\n  font-size: 16px;\n  margin-top: 1rem;\n  @media only screen and (max-width: 768px) {\n    font-weight: 510;\n    font-size: 1rem;\n  }\n"]);return j=function(){return n},n}function w(){let n=(0,i.Z)(['\n  font-size: 1.5rem;\n  font-weight: bold;\n  cursor: pointer;\n  font-family: "Montserrat", sans-serif;\n  color: #000;\n']);return w=function(){return n},n}t(5425);let b=a.ZP.div(h()),v=a.ZP.div(m());a.ZP.div(g()),a.ZP.p(j());let y=a.ZP.div(w()),Z=n=>{let{open:e,setOpen:t,...i}=n;return e?document.body.classList.add("fixed-position"):e||document.body.classList.remove("fixed-position"),(0,r.jsxs)(x,{open:e,"aria-hidden":!e,...i,children:[(0,r.jsx)(v,{to:"home",spy:!0,smooth:!0}),(0,r.jsxs)(b,{children:[(0,r.jsx)(y,{children:(0,r.jsx)(f(),{href:"/",onClick:()=>t(!1),children:"HOME"})}),(0,r.jsx)(y,{children:(0,r.jsx)(f(),{href:"/industries",onClick:()=>t(!1),children:"OUR INDUSTRIES"})}),(0,r.jsx)(y,{children:(0,r.jsx)(f(),{href:"/companies",onClick:()=>t(!1),children:"OUR COMPANIES"})}),(0,r.jsx)(y,{children:(0,r.jsx)(f(),{href:"/career",onClick:()=>t(!1),children:"Career"})}),(0,r.jsx)(y,{children:(0,r.jsx)(f(),{href:"/contact",onClick:()=>t(!1),children:"Contact"})})]})]})};Z.propTypes={open:l.bool.isRequired};var P=t(2283);function k(){let n=(0,i.Z)(["\n  display: flex;\n  margin: 0;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n  font-weight: 500;\n  position: relative;\n  height: 3.5rem !important;\n  color: #fff;\n\n  @media (max-width: 1400px) {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 22px;\n    line-height: 33px;\n    /* identical to box height */\n\n    text-transform: uppercase;\n  }\n"]);return k=function(){return n},n}let C=a.ZP.div(k()),I=n=>{let{selectedTab:e}=n;console.log(e);let[t,i]=(0,o.useState)(!1),a=(0,o.useRef)(),l="main-menu",[d,s]=(0,o.useState)(!1),u=()=>{window.scrollY>=50?s(!0):s(!1)};return(0,o.useEffect)(()=>{u(),window.addEventListener("scroll",u)}),(0,r.jsxs)("nav",{className:"nav",children:[(0,r.jsx)("div",{children:(0,r.jsx)(f(),{href:"/",spy:!0,smooth:!0,children:(0,r.jsx)("img",{loading:"lazy",src:"/logo/logo.png",alt:"Logo",className:"Logo"})})}),(0,r.jsxs)("div",{className:"RightContainer",children:[(0,r.jsx)("div",{className:"PC LeftNav",children:(0,r.jsxs)("ul",{className:"list",children:[(0,r.jsx)(C,{children:(0,r.jsxs)(f(),{href:"/",children:["HOME",(0,r.jsx)("div",{className:"Line",style:{display:"home"===e?"block":"none"}})]})}),(0,r.jsx)(C,{children:(0,r.jsxs)(f(),{href:"/industries",children:["OUR INDUSTRIES",(0,r.jsx)("div",{className:"Line",style:{display:"industries"===e?"block":"none"}})]})}),(0,r.jsx)(C,{children:(0,r.jsxs)(f(),{href:"/companies",children:["OUR COMPANIES",(0,r.jsx)("div",{className:"Line",style:{display:"companies"===e?"block":"none"}})]})})]})}),(0,r.jsxs)("div",{className:"PC RightNav",children:[(0,r.jsx)(C,{children:(0,r.jsx)(f(),{href:"/career",style:{display:"block",fontSize:"0.9rem"},children:"Career"})}),(0,r.jsx)(C,{children:(0,r.jsx)(f(),{href:"/contact",style:{display:"block",fontSize:"0.9rem"},children:"Contact"})}),(0,r.jsx)(f(),{href:"/",children:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4373 19.2498C7.12957 19.2498 3.62494 15.7451 3.62494 11.4374C3.62494 7.12963 7.12957 3.625 11.4373 3.625C15.7451 3.625 19.2497 7.12963 19.2497 11.4374C19.2497 15.7451 15.7451 19.2498 11.4373 19.2498ZM25.0418 22.8325L20.1794 18.0013C20.1763 17.9982 20.1731 17.9982 20.17 17.995C21.5481 16.1638 22.3747 13.8982 22.3747 11.4373C22.3747 5.40774 17.4669 0.5 11.4373 0.5C5.40617 0.5 0.5 5.40774 0.5 11.4373C0.5 17.4669 5.40617 22.3747 11.4373 22.3747C13.8982 22.3747 16.1638 21.5481 17.9935 20.1716C17.9966 20.1747 17.9966 20.1778 17.9997 20.1809L22.8325 25.0418C23.1371 25.3465 23.5371 25.4996 23.9371 25.4996C24.3371 25.4996 24.7371 25.3465 25.0418 25.0418C25.6527 24.4309 25.6527 23.4434 25.0418 22.8325Z",fill:"white"})})})]}),(0,r.jsx)("div",{className:"Mobile",ref:a,children:(0,r.jsxs)(P.ZP,{disabled:!t,children:[(0,r.jsx)(c,{open:t,setOpen:i,"aria-controls":l}),(0,r.jsx)(Z,{open:t,setOpen:i,id:l})]})})]})]})};var N=I},1406:function(n,e,t){"use strict";t.r(e);var i=t(5893);t(9889);var r=t(270);t(41);var o=t(2851),a=t(2484),l=t(6621);let d=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{}),(0,i.jsx)(o.default,{}),(0,i.jsx)(l.default,{}),(0,i.jsx)(r.default,{})]});e.default=d},2851:function(n,e,t){"use strict";t.r(e);var i=t(5893);t(7294);var r=t(8626);let o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Box,{children:[(0,i.jsx)(r.Main,{children:(0,i.jsx)("img",{src:"/content/Background.png"})}),(0,i.jsxs)(r.Container,{children:[(0,i.jsx)("h1",{children:"GET IN TOUCH TODAYS"}),(0,i.jsxs)(r.HeaderIcon,{children:[(0,i.jsxs)(r.HeaderIcon1,{children:[" ",(0,i.jsxs)("div",{children:[" ",(0,i.jsx)("img",{src:"/content/icon (2).png"}),(0,i.jsx)("b",{children:"Mail us"})," "]}),(0,i.jsx)("p",{children:"suport@gmail.com"})]}),(0,i.jsxs)(r.HeaderIcon2,{children:[" ",(0,i.jsxs)("div",{children:[" ",(0,i.jsx)("img",{src:"/content/icon (1).png"})," ",(0,i.jsx)("b",{children:"Contact us"})]})," ",(0,i.jsx)("p",{children:"01199936737"})]})]}),(0,i.jsxs)(r.Form,{children:[(0,i.jsxs)(r.Fline1,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Full Name*"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Input,{type:"text",placeholder:"Enter Your Name",required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Your Email"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Input,{type:"email",placeholder:"Enter your email",required:!0})]})]}),(0,i.jsxs)(r.Fline2,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Company *"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Input,{type:"text",placeholder:"Enter Your Company Name",required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Subject "}),(0,i.jsx)("br",{}),(0,i.jsx)(r.Input,{type:"text",placeholder:"How can I help you",required:!0})]})]}),(0,i.jsxs)(r.Fline3,{children:[(0,i.jsx)("label",{children:"Message*"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.TextArea,{type:"textarea",rows:10,cols:35,placeholder:"hellow there!!!!!!",required:!0})]}),(0,i.jsx)(r.Button,{children:(0,i.jsx)("button",{children:"Message Send"})})]})]})]})});e.default=o},8626:function(n,e,t){"use strict";t.r(e),t.d(e,{Box:function(){return w},Button:function(){return M},Container:function(){return v},Fline1:function(){return C},Fline2:function(){return N},Fline3:function(){return E},Form:function(){return k},HeaderIcon:function(){return y},HeaderIcon1:function(){return Z},HeaderIcon2:function(){return P},Input:function(){return I},Main:function(){return b},TextArea:function(){return z}});var i=t(7297),r=t(5893),o=t(9363);function a(){let n=(0,i.Z)(["\n  padding-bottom: 18%;\n"]);return a=function(){return n},n}function l(){let n=(0,i.Z)(["\n  z-index: 1;\n  position: absolute;\n  img {\n    object-fit: contain;\n    width: 100vw;\n  }\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    font-weight: 100;\n    padding-top: 30px;\n    font-size: 3rem;\n    font-family: personal;\n    color: white;\n    @media (max-width: 420px) {\n      font-size: 1.8rem;\n    }\n  }\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  display: flex;\n  padding: 5px 0 15px 0;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return s=function(){return n},n}function c(){let n=(0,i.Z)(["\n  display: flex;\n  padding: 20px;\n  background: white;\n  color: black;\n  border-radius: 20px;\n  align-items: center;\n  margin: 20px;\n  width: 32vw;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 10px auto;\n  }\n  p {\n    margin-left: 10px;\n  }\n  div {\n    align-items: center;\n    display: flex;\n  }\n  img {\n    width: 55px;\n    height: 45px;\n    padding-right: 10px;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,i.Z)(["\n  display: flex;\n  padding: 20px;\n  background: white;\n  color: black;\n  border-radius: 20px;\n  align-items: center;\n  margin: 20px;\n  width: 28vw;\n  justify-content: space-between;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 10px auto;\n  }\n  p {\n    margin-left: 10px;\n  }\n  div {\n    align-items: center;\n    display: flex;\n  }\n  img {\n    width: 55px;\n    height: 45px;\n    padding-right: 10px;\n  }\n"]);return u=function(){return n},n}function x(){let n=(0,i.Z)(["\n  //margin-top:20px;\n  background: white;\n  padding: 2.5rem;\n  border-radius: 35px;\n  align-items: center;\n  width: 70%;\n  @media (max-width: 540px) {\n    width: 90%;\n    padding: 1rem;\n  }\n"]);return x=function(){return n},n}function p(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 20px 0;\n  @media (max-width: 540px) {\n    flex-direction: column;\n  }\n"]);return p=function(){return n},n}function f(){let n=(0,i.Z)(["\n  background: white;\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    text-align: left;\n  }\n  width: 31vw;\n  padding: 13px;\n  border-radius: 10px;\n  border: 1px solid lightgrey;\n  margin-top: 10px;\n  @media (max-width: 540px) {\n    width: 80vw;\n    margin: 10px 0;\n  }\n"]);return f=function(){return n},n}function h(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 20px 0;\n  @media (max-width: 540px) {\n    flex-direction: column;\n  }\n"]);return h=function(){return n},n}function m(){let n=(0,i.Z)(["\n  background: white;\n  padding: 20px 0;\n  textarea {\n    width: 100%;\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid lightgrey;\n    margin-top: 10px;\n  }\n"]);return m=function(){return n},n}function g(){let n=(0,i.Z)(["\n  background: white;\n"]);return g=function(){return n},n}function j(){let n=(0,i.Z)(["\n  button {\n    display: flex;\n    flex-direction: row;\n    background: linear-gradient(to left, #fdc830, #f37335);\n    text-align: center;\n    padding: 15px 30px;\n    border-radius: 50px;\n    margin: 3rem auto;\n    cursor: pointer;\n    color: white;\n    border: none;\n  }\n"]);return j=function(){return n},n}let w=o.ZP.div(a()),b=o.ZP.div(l()),v=o.ZP.div(d()),y=o.ZP.div(s()),Z=o.ZP.div(c()),P=o.ZP.div(u()),k=o.ZP.div(x()),C=o.ZP.div(p()),I=o.ZP.input(f()),N=o.ZP.div(h()),E=o.ZP.div(m()),z=o.ZP.textarea(g()),M=o.ZP.div(j()),O=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=O},6621:function(n,e,t){"use strict";t.r(e);var i=t(5893);t(7294);var r=t(2391);let o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Container,{children:[(0,i.jsx)("img",{src:"/content/image 49.png"}),(0,i.jsxs)(r.Heading,{children:["EXPLORE BE",(0,i.jsx)("br",{}),"EMPOWERED BUILD"]})]})});e.default=o},2391:function(n,e,t){"use strict";t.r(e),t.d(e,{Container:function(){return d},Heading:function(){return s}});var i=t(7297),r=t(5893),o=t(9363);function a(){let n=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  //height:100vh;\n  width: 100%;\n"]);return a=function(){return n},n}function l(){let n=(0,i.Z)(["\n  position: absolute;\n  text-align: center;\n  font-family: personal;\n  margin: auto;\n  //margin-top: -10rem;\n  font-weight: bold;\n  font-size: 4rem;\n  background: #ffb76b;\n  background: linear-gradient(to right, #ffa73d, gold);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  @media (max-width: 420px) {\n    font-size: 2.5rem;\n  }\n"]);return l=function(){return n},n}let d=o.ZP.div(a()),s=o.ZP.div(l()),c=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=c},2484:function(n,e,t){"use strict";t.r(e);var i=t(5893);t(7294);var r=t(2219);let o=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Container,{children:[(0,i.jsxs)(r.Heading,{children:[(0,i.jsxs)("h1",{children:["Lets ",(0,i.jsx)("br",{}),"Collaborate"]}),(0,i.jsx)("h3",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"})]}),(0,i.jsx)(r.MapIcon,{children:(0,i.jsx)(r.MapBox,{children:(0,i.jsxs)(r.ImagePoint,{children:[(0,i.jsx)(r.ImgPoint1,{style:{position:"relative",left:"80px",top:"150px",height:"50px",width:"50px"},src:"/content/pointGrey.png"}),(0,i.jsx)(r.ImgPoint2,{style:{position:"relative",left:"106px",top:"285px",height:"50px",width:"50px"},src:"/content/pointGrey.png"}),(0,i.jsx)(r.ImgPoint3,{style:{position:"relative",left:"330px",top:"100px",height:"50px",width:"50px"},src:"/content/pointGrey.png"}),(0,i.jsx)(r.ImgPointMain,{href:"#",id:"ramaera",children:(0,i.jsx)("img",{src:"/content/point.png"})}),(0,i.jsx)("h3",{children:"Ramaera Industries"})]})})})]})});e.default=o},2219:function(n,e,t){"use strict";t.r(e),t.d(e,{Container:function(){return h},Heading:function(){return m},ImagePoint:function(){return w},ImgPoint1:function(){return b},ImgPoint2:function(){return v},ImgPoint3:function(){return y},ImgPointMain:function(){return Z},MapBox:function(){return g},MapIcon:function(){return j}});var i=t(7297),r=t(5893),o=t(9363);function a(){let n=(0,i.Z)(["\n  padding: 3rem 0 5rem 0;\n  display: flex;\n"]);return a=function(){return n},n}function l(){let n=(0,i.Z)(["\n  justify-content: center;\n  width: 40%;\n  margin: auto;\n  padding-left: 1rem;\n  @media (max-width: 1000px) {\n    width: 50%;\n  }\n\n  h1 {\n    font-size: 4rem;\n    font-family: personal;\n    background: #ffb76b;\n    background: linear-gradient(to right, #ffa73d, gold);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @media (max-width: 1280px) {\n      font-size: 3rem;\n    }\n    @media (max-width: 768px) {\n      font-size: 2.5rem;\n    }\n    @media (max-width: 540px) {\n      font-size: 1.8rem;\n    }\n    @media (max-width: 420px) {\n      font-size: 1rem;\n    }\n  }\n  h3 {\n    font-size: 1rem;\n    color: white;\n    line-height: 2;\n    @media (max-width: 420px) {\n      font-size: 0.5rem;\n      line-height: 2;\n    }\n  }\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  width: 600px;\n  height: 400px;\n  @media (max-width: 600px) {\n    width: 200px;\n    height: 130px;\n  }\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  width: 60%;\n  @media (max-width: 1000px) {\n    width: 50%;\n  }\n"]);return s=function(){return n},n}function c(){let n=(0,i.Z)(['\n  background-image: url("/content/map.png");\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n\n  h3 {\n    display: none;\n    position: relative;\n    left: 374px;\n    top: 184px;\n    height: 50px;\n    font-family: personal;\n    background: #ffb76b;\n    background: linear-gradient(to right, #ffa73d, gold);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  #ramaera:hover ~ h3 {\n    display: block;\n  }\n']);return c=function(){return n},n}function u(){let n=(0,i.Z)(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]);return u=function(){return n},n}function x(){let n=(0,i.Z)(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]);return x=function(){return n},n}function p(){let n=(0,i.Z)(["\n  @media (max-width: 600px) {\n    display: none;\n  }\n"]);return p=function(){return n},n}function f(){let n=(0,i.Z)(["\n  img {\n    position: relative;\n    left: 240px;\n    top: 210px;\n    height: 50px;\n    width: 50px;\n    @media (max-width: 600px) {\n      height: 25px;\n      width: 25px;\n      top: 65px;\n      left: 122px;\n    }\n  }\n"]);return f=function(){return n},n}let h=o.ZP.div(a()),m=o.ZP.div(l()),g=o.ZP.div(d()),j=o.ZP.div(s()),w=o.ZP.div(c()),b=o.ZP.img(u()),v=o.ZP.img(x()),y=o.ZP.img(p()),Z=o.ZP.a(f()),P=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=P}},function(n){n.O(0,[3838,8702,41,270,9774,2888,179],function(){return n(n.s=8105)}),_N_E=n.O()}]);