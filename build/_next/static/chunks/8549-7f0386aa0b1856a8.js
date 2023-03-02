"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8549],{9427:function(i,e,t){var n=t(7297),a=t(5893);t(7294);var r=t(9363),u=t(3838),s=t(6468);function o(){let i=(0,n.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  cursor: pointer;\n  min-width: ",";\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return o=function(){return i},i}function m(){let i=(0,n.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return m=function(){return i},i}let c=(0,r.ZP)(u.E.button)(o(),i=>i.color?i.color:"#FFFFFF",i=>i.fontSize?i.fontSize:"20px",i=>i.fw?i.fw:"600",i=>i.noLineHeight?"1":"18px",i=>i.ls?i.ls:"0em",i=>i.secondary?"2px":i.padding?i.padding:"0.85rem 2rem",i=>i.br?i.br:i.secondary?"1.2rem":"0.8rem",i=>i.lightBorder?"2px solid #FFFFFF":"none",i=>i.width?i.width:i.secondaryWidth?i.secondaryWidth:"15rem",i=>i.bg?i.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",i=>i.m?i.m:"",i=>i.height?i.height:"",i=>i.sh?i.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",i=>i.secondarySmall?i.secondarySmall:i.navWidth?i.navWidth:"15rem",i=>i.secondary?"18px":i.fontSize?i.fontSize:"18px",i=>i.sm?i.sm:"");r.ZP.div(m(),i=>i.secondaryBg?i.secondaryBg:"#13132F",i=>i.secondaryBr?i.secondaryBr:"1.45rem",i=>i.secondaryP?i.secondaryP:"0.5rem 2rem",i=>i.Inheight?i.Inheight:"",i=>i.sm?i.sm:"",i=>i.secondaryPs?i.secondaryPs:i.secondaryP?i.secondaryP:"0 2rem");let d=i=>(0,a.jsx)(c,{...i,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:i.loading?(0,a.jsx)(s.Z,{}):i.Text});e.Z=d},6468:function(i,e,t){var n=t(7297),a=t(5893);t(7294);var r=t(9363);function u(){let i=(0,n.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return u=function(){return i},i}let s=()=>(0,a.jsx)(o,{viewBox:"0 0 50 50",children:(0,a.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),o=r.ZP.svg(u());e.Z=s},8549:function(i,e,t){t.r(e);var n=t(5893),a=t(7294),r=t(9427),u=t(3636),s=t(6567);let o=()=>{let[i,e]=(0,a.useState)(!1),t=()=>{e(!i)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{id:"policy",children:[(0,n.jsx)(u.Section,{children:s.data.map(i=>(0,n.jsxs)(u.Item,{children:[(0,n.jsx)(u.Icon,{children:(0,n.jsx)(u.Vector,{src:i.icon})}),(0,n.jsx)(u.Title,{children:i.heading}),(0,n.jsxs)(u.Text,{children:[i.para[0].slice(0,150)," . . . . . "]}),(0,n.jsx)(r.Z,{br:"5px",bg:"linear-gradient(90deg,#FFE259 0%,#FFA751 100%);",width:"20px",height:"45px",Text:"Read More ",fontSize:"1rem",padding:"10px 20px",fw:"500",sh:!0,onClick:()=>{t()}})]}))}),(0,n.jsx)(u.ZoomIn,{style:{zIndex:i?"100":"-1"},children:i&&(0,n.jsx)("div",{children:s.data.map(i=>(0,n.jsxs)(u.Modal,{children:[(0,n.jsx)(u.ModalContent,{children:(0,n.jsxs)(u.ZoomDetails,{children:[(0,n.jsxs)(u.ZoomName,{children:[i.heading," ",console.log(i.heading)]}),(0,n.jsx)(u.ZoomTitle,{children:i.heading}),(0,n.jsx)(u.ZoomAbout,{children:i.para.map(i=>(0,n.jsx)("p",{style:{paddingBottom:"10px"},children:i}))})]})}),(0,n.jsx)(u.CloseImg,{src:"/content/closeIcon.png",onClick:t})]}))})})]})})};e.default=o},3636:function(i,e,t){t.r(e),t.d(e,{CloseImg:function(){return T},Icon:function(){return y},Item:function(){return A},Modal:function(){return z},ModalContent:function(){return S},Section:function(){return w},Text:function(){return Z},Title:function(){return L},Vector:function(){return k},ZoomAbout:function(){return I},ZoomDetails:function(){return F},ZoomIn:function(){return v},ZoomName:function(){return j},ZoomTitle:function(){return P}});var n=t(7297),a=t(5893),r=t(9363);function u(){let i=(0,n.Z)(["\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  text-align: center;\n  width: 100%;\n  padding-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  box-shadow: inset 0 100px 100px 1px rgb(0 0 0);\n"]);return u=function(){return i},i}function s(){let i=(0,n.Z)(["\n  padding: 50px 40px;\n  margin: 2rem;\n  margin-bottom: 3rem;\n  width: 300px;\n  height: 350px;\n  padding: 30px;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 0px 0px 0 white, 0px 0px 4px white, 0px 0px 4px white,\n    0px 0px 10px white;\n\n  &:hover {\n    box-shadow: 0px 0px 0 white, 0px 0px 10px white, 0px 0px 10px white,\n      0px 0px 10px white;\n    transform: scale(1.05);\n  }\n"]);return s=function(){return i},i}function o(){let i=(0,n.Z)(["\n  margin-top: 1rem;\n  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: personal !important;\n  text-overflow: ellipsis;\n"]);return o=function(){return i},i}function m(){let i=(0,n.Z)(["\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n  padding: 15px 0;\n  color: whitesmoke;\n  text-align: left;\n  word-break: break-all;\n"]);return m=function(){return i},i}function c(){let i=(0,n.Z)(['\n  display: "flex";\n  justify-content: "center";\n  align-items: "center";\n  height: 5rem;\n  width: 5rem;\n  border-radius: 50%;\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow-x: visible;\n  box-shadow: 0 0 0.2em 0.2em white;\n']);return c=function(){return i},i}function d(){let i=(0,n.Z)(["\n  width: 100%;\n"]);return d=function(){return i},i}function l(){let i=(0,n.Z)(["\n  position: absolute;\n  margin: 2rem;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 600px) {\n    margin: 0;\n  }\n"]);return l=function(){return i},i}function p(){let i=(0,n.Z)(["\n  overflow-y: scroll;\n  @media (max-width: 600px) {\n    width: 100% !important;\n    padding: 0;\n  }\n"]);return p=function(){return i},i}function g(){let i=(0,n.Z)(["\n  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: personal !important;\n  font-weight: 400;\n  font-size: 2.2rem;\n"]);return g=function(){return i},i}function f(){let i=(0,n.Z)(["\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #a58e7c;\n"]);return f=function(){return i},i}function x(){let i=(0,n.Z)(["\n  color: white;\n  margin: 20px 0;\n"]);return x=function(){return i},i}function h(){let i=(0,n.Z)(["\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.2);\n"]);return h=function(){return i},i}function b(){let i=(0,n.Z)(["\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  line-height: 1.4;\n  padding: 14px 28px;\n  width: 80%;\n  height: 75%;\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  @media (max-width: 600px) {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    top: unset;\n    left: unset;\n    height: auto;\n    width: 90%;\n    margin: 20px;\n    max-height: 95svh;\n  }\n"]);return b=function(){return i},i}function q(){let i=(0,n.Z)(["\n  position: inherit;\n  top: 65px;\n  left: 88%;\n  width: 40px;\n  border-radius: 10px;\n  cursor: pointer;\n  @media (max-width: 600px) {\n    position: fixed;\n    top: 8px;\n    left: 88%;\n  }\n"]);return q=function(){return i},i}let w=r.ZP.div(u()),A=r.ZP.div(s()),L=r.ZP.h3(o()),Z=r.ZP.p(m()),y=r.ZP.div(c()),k=r.ZP.img(d()),v=r.ZP.div(l()),F=r.ZP.div(p()),j=r.ZP.h3(g()),P=r.ZP.h5(f()),I=r.ZP.p(x()),z=r.ZP.div(h()),S=r.ZP.div(b()),T=r.ZP.img(q()),C=()=>(0,a.jsx)("div",{children:"StyleImage"});e.default=C},6567:function(i,e,t){t.r(e),t.d(e,{data:function(){return a}});var n=t(5893);let a=[{id:"1",heading:"Terms of use rights",icon:"./content/bolt.png",para:[" Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"]},{id:"2",heading:"Intellectual property rights",icon:"./content/book.png",para:[" Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"]},{id:"3",heading:"Prohibited activities",icon:"./content/brow.png",para:[" Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"]},{id:"4",heading:"Termination clause",icon:"./content/caut.png",para:[" Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"]},{id:"5",heading:"Terms of use rights",icon:"./content/chat.png",para:[" Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"," Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugit praesentium reiciendis aut debitis minima earum fugiat quam aspernatur qui. Labore, aliquam iste. A quasi ut accusantium laboriosam eius sequi"]}],r=()=>(0,n.jsx)("div",{children:"StyleImage"});e.default=r}}]);