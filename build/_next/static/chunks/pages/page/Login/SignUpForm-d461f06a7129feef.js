(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6816],{50891:function(n,e,t){"use strict";var r=t(64836);e.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");e.Z=a},31306:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/Login/SignUpForm",function(){return t(85124)}])},36468:function(n,e,t){"use strict";var r=t(7297),i=t(85893);t(67294);var o=t(68777);function a(){let n=(0,r.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return a=function(){return n},n}let s=()=>(0,i.jsx)(l,{viewBox:"0 0 50 50",children:(0,i.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),l=o.ZP.svg(a());e.Z=s},96608:function(n,e,t){"use strict";var r=t(7297),i=t(85893);t(67294);var o=t(68777);function a(){let n=(0,r.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n      width: ",";\n    //  margin: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n      overflow-wrap: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return a=function(){return n},n}let s=n=>{let e=o.ZP.p(a(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.miwidth?n.miwidth:"",n.mimargin?n.mimargin:"",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.ow?n.ow:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,i.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=s},49917:function(n,e,t){"use strict";t.r(e);var r=t(85893),i=t(24433);let o=()=>{try{return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.default,{})})}catch(n){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Link,{style:{color:"white"},href:" /Login",children:"Login to continue"})})}};e.default=o},85124:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(85893),i=t(96608),o=t(90682),a=t(50891),s=t(73595),l=t(81621);let d=(0,l.Ps)("\nmutation signup(\n  $name: String!\n  $email: String!\n  $password: String!\n  $role: Role!\n) {\n  signup(\n    data: { name: $name, email: $email, password: $password, role: $role }\n  ) {\n    user {\n      name\n      role\n      email\n    }\n  }\n}\n");var m=t(50319),c=t(11163),p=t(72450),h=t(47586),u=t(55678);t(57134);var g=t(67294);t(49917);var x=t(41664),f=t.n(x);let w=()=>{let n=(0,c.useRouter)(),[e,t]=(0,g.useState)(!1),[l,x]=(0,g.useState)(""),[w,v]=(0,g.useState)(""),[b,j]=(0,g.useState)(""),[y,k]=(0,g.useState)(""),[z,{loading:T,data:C}]=(0,m.D)(d);if(!localStorage.getItem("accessToken"))return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(f(),{style:{color:"white"},href:" /Login",children:"Login to continue"})});let Z=async e=>{e.preventDefault();try{await z({variables:{email:w,password:b,name:l,role:y}}),u.Am.success("User Created ",{position:"top-center",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{n.push("/Dashboard")},"3200")}catch(t){t&&u.Am.error("Please check your email and password",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"})}};return(0,r.jsx)(h.Container,{children:(0,r.jsxs)(h.FormBox,{onSubmit:n=>Z(n),children:[(0,r.jsx)(i.Z,{Text:"Create User",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,r.jsx)("div",{style:{height:"50px"}}),(0,r.jsx)(u.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,r.jsxs)(h.LoginContainer,{children:[(0,r.jsxs)(h.LoginTitle,{children:[(0,r.jsx)(a.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"7px"}}),(0,r.jsx)("input",{type:"text",placeholder:"Name",required:!0,onChange:n=>x(n.target.value),style:{width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput"})]}),(0,r.jsxs)(h.LoginTitle,{children:[(0,r.jsx)(a.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"7px"}}),(0,r.jsxs)("select",{required:!0,placeholder:"Role",onChange:n=>k(n.target.value),style:{width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput",children:[(0,r.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Role Type"}),(0,r.jsx)("option",{value:"ADMIN",children:"ADMIN"}),(0,r.jsx)("option",{value:"EXECUTIVE",children:"EXECUTIVE"}),(0,r.jsx)("option",{value:"HR",children:"HR"}),(0,r.jsx)("option",{value:"SALES",children:"SALES"})]})]}),(0,r.jsxs)(h.LoginTitle,{children:[(0,r.jsx)(a.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"7px"}}),(0,r.jsx)("input",{type:"email",placeholder:"Email Id",required:!0,onChange:n=>v(n.target.value),style:{width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput"})]}),(0,r.jsxs)(h.LoginTitle,{children:[(0,r.jsx)(s.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"6px"}}),(0,r.jsx)("input",{type:e?"text":"password",placeholder:"Password",required:!0,onChange:n=>j(n.target.value),style:{position:"static",width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput"}),(0,r.jsx)("span",{style:{cursor:"pointer",position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",margin:"6px 0 0 -50px"},onClick:()=>t(!e),children:(0,r.jsx)(p.Z,{})})]}),(0,r.jsx)("button",{type:"submit",style:{background:"none",border:"none"},children:(0,r.jsx)(o.Z,{Text:"Create User",width:"170px",padding:"0.85rem 1rem",height:"2.75rem",inheight:"2rem",sh:"none",m:"50px 0 0 0"})})]})]})})};var v=w},47586:function(n,e,t){"use strict";t.r(e),t.d(e,{Container:function(){return m},FormBox:function(){return c},LoginContainer:function(){return p},LoginTitle:function(){return h}});var r=t(7297),i=t(85893),o=t(68777);function a(){let n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  margin-top: -25vh;\n  // width: 100%;\n"]);return a=function(){return n},n}function s(){let n=(0,r.Z)(["\n  background-color: whitesmoke;\n  width: 35vw;\n  min-width: 400px;\n  height: 65vh;\n  min-height: 450px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 2%;\n  box-shadow: 0 0 10px rgb(0 0 0 / 27%);\n  padding: 2rem;\n  @media (max-width: 450px) {\n    width: 100vw;\n    min-width: unset;\n     }\n"]);return s=function(){return n},n}function l(){let n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 70%;\n  gap: 30px;\n  transition: all 0.5s;\n"]);return l=function(){return n},n}function d(){let n=(0,r.Z)([""]);return d=function(){return n},n}let m=o.ZP.div(a()),c=o.ZP.form(s()),p=o.ZP.div(l()),h=o.ZP.div(d()),u=()=>(0,i.jsx)("div",{children:"StyleImage"});e.default=u}},function(n){n.O(0,[1502,3838,1664,8158,2249,8600,4433,9774,2888,179],function(){return n(n.s=31306)}),_N_E=n.O()}]);