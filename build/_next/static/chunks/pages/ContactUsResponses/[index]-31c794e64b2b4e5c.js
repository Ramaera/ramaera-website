(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8134],{97591:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ContactUsResponses/[index]",function(){return r(96558)}])},90682:function(e,n,r){"use strict";var i=r(7297),t=r(85893);r(67294);var s=r(68777),a=r(43838),d=r(36468);function l(){let e=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return c=function(){return e},e}let o=(0,s.ZP)(a.E.div)(l(),e=>e.color?e.color:"#FFFFFF",e=>e.fontSize?e.fontSize:"20px",e=>e.fw?e.fw:"600",e=>e.noLineHeight?"1":"18px",e=>e.ls?e.ls:"0em",e=>e.secondary?"2px":e.padding?e.padding:"0.85rem 2rem",e=>e.br?e.br:e.secondary?"1.2rem":"0.8rem",e=>e.lightBorder?"2px solid #FFFFFF":"none",e=>e.bborder?e.bborder:"none",e=>e.width?e.width:"100px",e=>e.bg?e.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",e=>e.m?e.m:"",e=>e.height?e.height:"",e=>e.sh?e.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",e=>e.secondarySmall?e.secondarySmall:e.navWidth?e.navWidth:"15rem",e=>e.secondary?"18px":e.fontSize?e.fontSize:"18px",e=>e.sm?e.sm:"");s.ZP.div(c(),e=>e.secondaryBg?e.secondaryBg:"#13132F",e=>e.secondaryBr?e.secondaryBr:"1.45rem",e=>e.secondaryP?e.secondaryP:"0.5rem 2rem",e=>e.Inheight?e.Inheight:"",e=>e.sm?e.sm:"",e=>e.secondaryPs?e.secondaryPs:e.secondaryP?e.secondaryP:"0 2rem");let m=e=>(0,t.jsx)(o,{...e,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:e.loading?(0,t.jsx)(d.Z,{}):e.Text});n.Z=m},96558:function(e,n,r){"use strict";r.r(n);var i=r(85893),t=r(11163),s=r(9473),a=r(99889),d=r(39832),l=r(36080),c=r(15710),o=r(48256),m=r.n(o),h=r(67294),x=r(41664),p=r.n(x),u=r(90682);let g=()=>{let e=(0,t.useRouter)(),n=(0,s.v9)(e=>e.applicationData.contactUsData),r=(0,h.createRef)(),{index:o}=e.query;try{return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.Z,{mheight:"100vh",height:"120vh",children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)("div",{className:"responseSpaceDetail"}),(0,i.jsxs)(l.Z,{full:!0,scale:"95%",width:"1500px",position:"relative",children:[(0,i.jsx)(m(),{targetRef:r,filename:n[o-1].name.split(" ").join("")+"_ContactUs.pdf",scale:.8,children:e=>{let{toPdf:n}=e;return(0,i.jsx)("button",{style:{cursor:"pointer",background:"none",border:"none"},onClick:n,children:(0,i.jsx)(u.Z,{Text:"Download PDF",width:"fit-content"})})}}),(0,i.jsx)("div",{ref:r,children:(0,i.jsx)(c.default,{ContactUsData:n[o-1]})})]})]})})}catch(x){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p(),{style:{color:"white"},href:" /Login",children:"Login to continue"})})}};n.default=g},15710:function(e,n,r){"use strict";r.r(n);var i=r(85893),t=r(41664),s=r.n(t),a=r(49955),d=r(32119);let l=e=>{let{ContactUsData:n}=e;try{return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d.Container,{children:(0,i.jsxs)(a.FormWrapper,{children:[(0,i.jsx)("div",{className:"divResponsive",tyle:{width:"500px",marginTop:"30px"},children:(0,i.jsx)("label",{style:{fontSize:"1.3rem",opacity:".9",fontWeight:"600",color:"#5a5a5a"},children:"Contact Us Details"})}),(0,i.jsx)("div",{className:"divResponsive",style:{width:"450px"}}),(0,i.jsx)("hr",{className:"lineHr1"}),(0,i.jsx)("hr",{className:"lineHr2"}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Name "}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:n.name})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:" Email "}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:n.email})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Company"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:n.company})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Subject "}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[n.Subject," "]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Message"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:n.message})]})]})})})}catch(r){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s(),{style:{color:"white"},href:" /Login",children:"Login to continue"})})}};n.default=l},32119:function(e,n,r){"use strict";r.r(n),r.d(n,{Container:function(){return d}});var i=r(7297),t=r(85893),s=r(68777);function a(){let e=(0,i.Z)(["\n  position: relative;\n  background: white;\n  padding: 2rem 2rem 3.5rem 2rem;\n  margin: 1rem;\n  border-radius: 0.5rem;\n  max-width:max-content;\n  @media (max-width: 500px) {\n    width: 100vw;\n    padding: 1.5rem;\n  }\n"]);return a=function(){return e},e}let d=s.ZP.div(a()),l=()=>(0,t.jsx)("div",{children:"StyleImage"});n.default=l},49955:function(e,n,r){"use strict";r.r(n),r.d(n,{FormWrapper:function(){return s}});var i=r(85893),t=r(96608);function s(e){let{title:n,children:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{Text:"Ramaera Industries LIMITED",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(3rem, 1.5vw, 2rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"1.7rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)(t.Z,{Text:"Contact Application Details",lg:"linear-gradient(to right, #000, #000)",font:!0,size:"clamp(1.4rem, 1.5vw, 2rem)",fw:"200",align:"center",lh:"50px",m:"0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"1.5rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)("div",{className:"formWrapper",children:r})]})}let a=()=>(0,i.jsx)("div",{children:"StyleImage"});n.default=a}},function(e){e.O(0,[7847,1502,3838,1664,2283,1302,4649,9774,2888,179],function(){return e(e.s=97591)}),_N_E=e.O()}]);