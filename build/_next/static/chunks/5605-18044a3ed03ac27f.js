"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5605],{50891:function(n,e,t){var i=t(64836);e.Z=void 0;var r=i(t(64938)),a=t(85893),o=(0,r.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");e.Z=o},520:function(n,e,t){t.d(e,{ap:function(){return s},fD:function(){return l},ui:function(){return r},xr:function(){return o},zM:function(){return a}});var i=t(81621);let r=(0,i.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n$extraInfo: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n      extraInfo :$extraInfo\n    }) \n    {\n      name\n    }\n}"),a=(0,i.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),o=(0,i.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n      user{\n      role\n      name\n    }\n    }\n}"),s=(0,i.Ps)("\n  query getAllApps{\n  applicants{\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n    extraInfo\n  }\n}"),l=(0,i.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(n,e,t){var i=t(7297),r=t(85893);t(67294);var a=t(14141),o=t(43838),s=t(36468);function l(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return d=function(){return n},n}let m=(0,a.ZP)(o.E.div)(l(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");a.ZP.div(d(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let c=n=>(0,r.jsx)(m,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,r.jsx)(s.Z,{}):n.Text});e.Z=c},96608:function(n,e,t){var i=t(7297),r=t(85893);t(67294);var a=t(14141);function o(){let n=(0,i.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n      width: ",";\n    //  margin: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n      overflow-wrap: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return o=function(){return n},n}let s=n=>{let e=a.ZP.p(o(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.miwidth?n.miwidth:"",n.mimargin?n.mimargin:"",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.ow?n.ow:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,r.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=s},5605:function(n,e,t){t.r(e);var i=t(85893),r=t(96608),a=t(90682),o=t(50891),s=t(73595),l=t(520),d=t(50319),m=t(9473),c=t(11163);t(71170);var p=t(72450),g=t(22961),u=t(47586),x=t(80836),h=t(55678);t(57134);var f=t(67294);let w=()=>{let n=(0,c.useRouter)(),[e,t]=(0,f.useState)(!1),[w,b]=(0,f.useState)(""),[v,y]=(0,f.useState)(""),[S,{loading:z,data:Z}]=(0,d.D)(l.xr),$=(0,m.I0)();Z&&($((0,x.oY)(Z.login.user.name)),$((0,x.cY)(Z.login.user.role)));let k=async e=>{e.preventDefault();try{let t=await S({variables:{email:w,password:v}});window.localStorage.setItem("accessToken",t.data.login.accessToken),n.push("/Dashboard")}catch(i){i&&h.Am.error("Please check your email and password",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"light"})}};return(0,i.jsx)(u.Container,{children:(0,i.jsxs)(u.FormBox,{onSubmit:n=>k(n),children:[(0,i.jsx)(r.Z,{Text:"EMPLOYEE",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)(r.Z,{Text:"LOGIN",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)(h.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,i.jsxs)(u.LoginContainer,{children:[(0,i.jsxs)(u.LoginTitle,{children:[(0,i.jsx)(o.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"7px"}}),(0,i.jsx)("input",{type:"email",placeholder:"Email Id",required:!0,onChange:n=>{b(n.target.value)},style:{width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput"})]}),(0,i.jsxs)(u.LoginTitle,{children:[(0,i.jsx)(s.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"6px"}}),(0,i.jsx)("input",{type:e?"text":"password",placeholder:"Password",required:!0,onChange:n=>{y(n.target.value)},style:{position:"static",width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput"}),(0,i.jsx)("span",{style:{cursor:"pointer",position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",margin:"6px 0 0 -50px"},onClick:()=>t(!e),children:e?(0,i.jsx)(g.Z,{}):(0,i.jsx)(p.Z,{})})]}),(0,i.jsx)("button",{type:"submit",style:{background:"none",border:"none"},children:(0,i.jsx)(a.Z,{width:"150px",padding:"0.85rem 1rem",height:"2.75rem",Text:"Login",inheight:"2rem",sh:"none",m:"50px 0 0 0"})})]})]})})};e.default=w},47586:function(n,e,t){t.r(e),t.d(e,{Access:function(){return z},Container:function(){return x},Details:function(){return S},FormBox:function(){return w},Li:function(){return f},LoginContainer:function(){return b},LoginTitle:function(){return v},LoginTitlee:function(){return y},P:function(){return h}});var i=t(7297),r=t(85893),a=t(14141);function o(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  margin-top: -25vh;\n  // width: 100%;\n"]);return o=function(){return n},n}function s(){let n=(0,i.Z)(["\n  font-weight: bold;\n  margin-top: 5px;\n"]);return s=function(){return n},n}function l(){let n=(0,i.Z)(["\n  list-style: circle;\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  background-color: whitesmoke;\n  width: 35vw;\n  min-width: 400px;\n  height: 65vh;\n  min-height: 450px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 2%;\n  box-shadow: 0 0 10px rgb(0 0 0 / 27%);\n  padding: 2rem;\n  @media (max-width: 450px) {\n    width: 100vw;\n    min-width: unset;\n  }\n"]);return d=function(){return n},n}function m(){let n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 70%;\n  gap: 30px;\n  transition: all 0.5s;\n"]);return m=function(){return n},n}function c(){let n=(0,i.Z)([""]);return c=function(){return n},n}function p(){let n=(0,i.Z)(["\n  display: flex;\n"]);return p=function(){return n},n}function g(){let n=(0,i.Z)(["\n  position: absolute;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 12px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  width: 270px;\n  right: -322px;\n  text-align: left;\n  top: -70px;\n  display: none;\n  &:hover {\n    display: block;\n  }\n"]);return g=function(){return n},n}function u(){let n=(0,i.Z)(["\n  display: flex;\n  margin: 0 10px;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n  font-weight: 500;\n  position: relative;\n  height: 4.5rem;\n  &:hover "," {\n    display: block;\n  }\n"]);return u=function(){return n},n}let x=a.ZP.div(o()),h=a.ZP.p(s()),f=a.ZP.li(l()),w=a.ZP.form(d()),b=a.ZP.div(m()),v=a.ZP.div(c()),y=a.ZP.div(p()),S=a.ZP.div(g()),z=a.ZP.div(u(),S),Z=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=Z}}]);