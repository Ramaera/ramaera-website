(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4666],{95377:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DistributionChannel",function(){return t(88267)}])},520:function(n,e,t){"use strict";t.d(e,{ap:function(){return s},fD:function(){return d},ui:function(){return r},xr:function(){return o},zM:function(){return a}});var i=t(81621);let r=(0,i.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n$extraInfo: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n      extraInfo :$extraInfo\n    }) \n    {\n      name\n    }\n}"),a=(0,i.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),o=(0,i.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n      user{\n      role\n      name\n    }\n    }\n}"),s=(0,i.Ps)("\n  query getAllApps{\n  applicants{\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n    extraInfo\n  }\n}"),d=(0,i.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(n,e,t){"use strict";var i=t(7297),r=t(85893);t(67294);var a=t(68777),o=t(43838),s=t(36468);function d(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return d=function(){return n},n}function l(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return l=function(){return n},n}let c=(0,a.ZP)(o.E.div)(d(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");a.ZP.div(l(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let u=n=>(0,r.jsx)(c,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,r.jsx)(s.Z,{}):n.Text});e.Z=u},88267:function(n,e,t){"use strict";t.r(e);var i=t(85893),r=t(99889),a=t(39832),o=t(36080),s=t(62823),d=t(70270);let l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{mheight:"100vh",height:"120vh",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)("div",{className:"navSpace"}),(0,i.jsx)(o.Z,{full:!0,scale:"95%",width:"1500px",position:"relative",children:(0,i.jsx)(s.default,{})}),(0,i.jsx)("hr",{style:{borderBottom:"1px solid white",width:"80vw"}}),(0,i.jsx)(d.default,{})]})});e.default=l},62823:function(n,e,t){"use strict";t.r(e);var i=t(85893),r=t(30709),a=t(90682),o=t(520),s=t(50319),d=t(9473),l=t(55678);t(57134);var c=t(99216),u=t(67294);let m=()=>{let[n,e]=(0,u.useState)(0),[t]=(0,s.D)(o.ui),m=(0,d.v9)(n=>n.application.name),p=(0,d.v9)(n=>n.application.applicantType),x=(0,d.v9)(n=>n.application.applicantAddress),f=(0,d.v9)(n=>n.application.email),h=(0,d.v9)(n=>n.application.firmName),g=(0,d.v9)(n=>n.application.mobileNumber),w=(0,d.v9)(n=>n.application.District),b=(0,d.v9)(n=>n.application.State),y=(0,d.v9)(n=>n.application.extraInfo),v=i=>{i.preventDefault(),0===n&&(t({variables:{name:m,applicantType:p,applicantAddress:x,email:f,firmName:h,mobileNumber:g,District:w,State:b,extraInfo:y}}),e(2)),j()},j=()=>{l.Am.success("Application Submitted!",{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{location.reload()},"3200")};return(0,i.jsx)(c.Container,{children:(0,i.jsxs)("form",{onSubmit:n=>v(n),children:[(0,i.jsx)(l.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,i.jsx)("div",{style:{position:"absolute",top:".5rem",right:".5rem",fontSize:".8rem"}}),(0,i.jsx)(r.UserForm,{}),(0,i.jsx)(c.ButtonContainer,{children:(0,i.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,i.jsx)(a.Z,{nav:!0,width:"140px",height:"2.75rem",Text:"Submit",inheight:"2.5rem"})})})]})})};e.default=m},99216:function(n,e,t){"use strict";t.r(e),t.d(e,{ButtonContainer:function(){return l},Container:function(){return d}});var i=t(7297),r=t(85893),a=t(68777);function o(){let n=(0,i.Z)(["\n  position: relative;\n  background: white;\n  padding: 2rem;\n  margin: 1rem;\n  border-radius: 0.5rem;\n  max-width: max-content;\n  @media (max-width: 500px) {\n    width: 100vw;\n    padding: 1.5rem;\n  }\n"]);return o=function(){return n},n}function s(){let n=(0,i.Z)(["\n  margin-top: 1rem;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  @media (max-width: 450px) {\n    justify-content: center;\n  }\n"]);return s=function(){return n},n}let d=a.ZP.div(o()),l=a.ZP.div(s()),c=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=c},29492:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),a=t(68777),o=t(96608),s=t(41664),d=t.n(s);function l(){let n=(0,i.Z)(["\n  position: absolute;\n  bottom: 100px;\n  left: 50px;\n  display: flex;\n  gap: 50px;\n  bottom: 100px;\n  left: 10vw;\n  color: white;\n  align-items: center;\n  @media only screen and (max-width: 1200px) {\n    left: auto;\n    right: auto;\n    gap: 20px;\n  }\n  @media only screen and (max-width: 768px) {\n    position: static;\n    height: 10px;\n    flex-direction: column;\n    margin: 0 auto;\n  }\n  @media only screen and (max-width: 450px) {\n    gap: 10px;\n    width: 85vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]);return l=function(){return n},n}function c(){let n=(0,i.Z)(["\n  font-size: 10px;\n  margin-bottom: 1rem;\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n  @media only screen and (max-width: 450px) {\n    margin: 1rem;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,i.Z)(["\n  position: absolute;\n  bottom: 160px;\n  left: 10vw;\n  color: white;\n  height: 2px;\n  width: 80vw;\n  background: #fff;\n"]);return u=function(){return n},n}function m(){let n=(0,i.Z)(["\n  position: absolute;\n  font-weight: 100;\n  bottom: 110px;\n  left: 900px;\n  color: white;\n  height: 13px;\n  width: 80vw;\n  font-size: 10px;\n  margin-bottom: 1rem;\n  color: white;\n  @media only screen and (max-width: 768px) {\n    width: fit-content;\n    left: auto;\n    right: auto;\n    bottom: 80px;\n  }\n"]);return m=function(){return n},n}let p=new Date,x=p.getFullYear(),f=a.ZP.div(l()),h=(0,a.ZP)(d())(c()),g=a.ZP.hr(u()),w=a.ZP.div(m()),b=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(f,{children:(0,r.jsx)(h,{href:"/DistributionChannel",children:(0,r.jsx)("div",{class:"glow_button",children:(0,r.jsx)(o.Z,{Text:"Become a part of Distribution Channel",lg:"linear-gradient(90deg, white 0%, white 100%)",font:!0,padding:" 0 ",size:"14px",msize:"14px",align:"center",mpadding:"1vw"})})})}),(0,r.jsxs)(w,{children:["\xa9 ",x," All Rights Reserved"]})]});e.default=b},72193:function(n,e,t){"use strict";t.r(e),t.d(e,{DispFlex:function(){return $},Input:function(){return P},Sub:function(){return F},SubHeading:function(){return j},SubText:function(){return Z}});var i=t(7297),r=t(85893),a=t(68777),o=t(41664),s=t.n(o);function d(){let n=(0,i.Z)(["\n  display: flex;\n  gap: 4rem;\n  align-items: top;\n\n  @media only screen and (max-width: 1000px) {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n    text-align: center;\n  }\n"]);return d=function(){return n},n}function l(){let n=(0,i.Z)(["\n  text-transform: uppercase;\n  margin: auto;\n  display: flex;\n  text-align: left;\n  padding-bottom: 220px;\n  flex-direction: column;\n\n  @media only screen and (max-width: 1000px) {\n    padding-bottom: 20px;\n  }\n"]);return l=function(){return n},n}function c(){let n=(0,i.Z)(["\n  font-size: 14px;\n  margin-bottom: 1rem;\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n  &:hover {\n    color: whitesmoke;\n  }\n  @media only screen and (max-width: 1000px) {\n    font-size: 0.8rem;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,i.Z)(["\n  border-bottom: solid white 2px;\n  padding-bottom: 10px;\n  width: 60px;\n  font-size: 18px;\n  color: white;\n  margin-bottom: 2rem;\n"]);return u=function(){return n},n}function m(){let n=(0,i.Z)(["\n  color: white;\n  margin-bottom: 1rem;\n"]);return m=function(){return n},n}function p(){let n=(0,i.Z)(["\n  color: white;\n  font-weight: 100;\n  font-size: 8px;\n  line-height: 16px;\n"]);return p=function(){return n},n}function x(){let n=(0,i.Z)(["\n  margin-bottom: 1rem;\n  height: 35px;\n  border: 1.5px solid #ffffff;\n  border-radius: 6px;\n  padding-left: 1rem;\n  @media only screen and (max-width: 1000px) {\n    padding-left: 0;\n    width: 100%;\n  }\n"]);return x=function(){return n},n}function f(){let n=(0,i.Z)(["\n  display: flex;\n  gap: 4rem;\n\n  @media only screen and (max-width: 1000px) {\n    display: flex;\n    gap: 20vw;\n  }\n"]);return f=function(){return n},n}function h(){let n=(0,i.Z)(["\n  color: white;\n  padding: 2rem;\n  width: 250px;\n  height: 200px;\n  margin-left: 3rem;\n  border: 1px solid #ffffff;\n  border-radius: 6px;\n  background-color: rgba(63, 63, 63, 0.3);\n  @media only screen and (max-width: 1000px) {\n    overflow: hidden;\n    width: 40vw;\n    margin: 0 0 20px 0;\n  }\n  @media only screen and (max-width: 768px) {\n    width: 80vw;\n    margin: 0 0 20px 0;\n    padding-bottom: 50px;\n  }\n"]);return h=function(){return n},n}function g(){let n=(0,i.Z)(["\n  display: flex;\n  width: 100vw;\n  justify-content: space-evenly;\n  @media only screen and (max-width: 1000px) {\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  @media only screen and (max-width: 768px) {\n  }\n"]);return g=function(){return n},n}let w=a.ZP.div(d()),b=a.ZP.div(l()),y=(0,a.ZP)(s())(c()),v=a.ZP.h3(u()),j=a.ZP.h3(m()),Z=a.ZP.h3(p()),P=a.ZP.input(x()),S=a.ZP.div(f()),F=a.ZP.div(h()),$=a.ZP.div(g()),k=()=>(0,r.jsx)(w,{children:(0,r.jsx)(S,{children:(0,r.jsxs)(b,{children:[(0,r.jsx)(v,{href:"",children:"Links"}),(0,r.jsx)(y,{href:"/PrivacyPolicy",children:"Privacy Policy"}),(0,r.jsx)(y,{href:"/TermsAndConditions",children:"Terms & Conditions"}),(0,r.jsx)(y,{href:"/Legal",children:"Legal"}),(0,r.jsx)(y,{href:"/Login",children:"Login"}),(0,r.jsx)(y,{href:"/VisitUs",children:"Visit Us"})]})})});e.default=k},55875:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),a=t(41664),o=t.n(a),s=t(68777),d=t(96608);function l(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 15vw;\n  margin: 30px 0 30px 80px;\n  position: relative;\n  left: -50px;\n  @media only screen and (max-width: 1000px) {\n    margin: 0 0 0 0;\n    margin-bottom: 20px;\n    left: unset;\n    width: auto;\n  }\n"]);return l=function(){return n},n}function c(){let n=(0,i.Z)(["\n  /* height: 150px;\n  width: 165px; */\n  width: 80%;\n  @media only screen and (max-width: 1000px) {\n    width: auto;\n  }\n"]);return c=function(){return n},n}let u=s.ZP.div(l()),m=s.ZP.img(c()),p=()=>(0,r.jsx)(o(),{href:"/",children:(0,r.jsxs)(u,{children:[(0,r.jsx)(m,{src:"/logo/logo.png",alt:"logo"}),(0,r.jsx)(d.Z,{Text:"Ramaera Industries",lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",font:!0,size:"25px",align:"center"})]})});e.default=p},49883:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),a=t(68777);function o(){let n=(0,i.Z)(["\n  display: flex;\n  padding-bottom: 140px;\n  align-items: center;\n  flex-direction: column;\n  //width: 20vw;\n  /*   margin-left: 2rem;*/\n  margin-bottom: 100px;\n  @media only screen and (max-width: 450px) {\n    margin-bottom: 0px;\n  }\n"]);return o=function(){return n},n}function s(){let n=(0,i.Z)(["\n  border: 3px solid #959595;\n  border-radius: 20px;\n  overflow: hidden;\n  width: 500px;\n  height: 300px;\n  @media only screen and (max-width: 768px) {\n    width: 300px;\n    height: 210px;\n  }\n"]);return s=function(){return n},n}let d=a.ZP.a(o()),l=a.ZP.iframe(s()),c=()=>(0,r.jsx)(d,{href:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.121357850357!2d77.37442991604617!3d28.62612468242031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5422cddcbd5%3A0xfabca9cd7a99f34d!2sRamaera%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1676369134463!5m2!1sen!2sin",children:(0,r.jsx)(l,{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.306681470596!2d77.375918!3d28.625166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5422cddcbd5%3A0xfabca9cd7a99f34d!2sRamaera%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1679897392722!5m2!1sen!2sin",width:"500",height:"300",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})});e.default=c},53256:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),a=t(68777);function o(){let n=(0,i.Z)(["\n  height: 20px;\n  margin: 5px;\n"]);return o=function(){return n},n}function s(){let n=(0,i.Z)(["\n  font-size: 14px;\n  margin-left: 5px;\n  color: white;\n\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n  }\n"]);return s=function(){return n},n}function d(){let n=(0,i.Z)(["\n  position: absolute;\n  bottom: 100px;\n  right: 150px;\n  @media only screen and (max-width: 1200px) {\n    bottom: 20px;\n    right: auto;\n    left: auto;\n  }\n"]);return d=function(){return n},n}function l(){let n=(0,i.Z)(["\n  cursor: pointer;\n"]);return l=function(){return n},n}let c=a.ZP.img(o()),u=a.ZP.h4(s()),m=a.ZP.div(d()),p=a.ZP.a(l()),x=()=>(0,r.jsxs)(m,{children:[(0,r.jsx)(u,{children:"Let's Do it!"}),(0,r.jsx)(p,{href:"https://www.facebook.com/ramaeraindustries",target:"_blank",children:(0,r.jsx)(c,{src:"/content/social-5.png",alt:"facebook icon"})}),(0,r.jsx)(p,{href:"https://twitter.com/ramaeraltd",target:"_blank",children:(0,r.jsx)(c,{src:"/content/social-2.png",alt:"twitter icon"})}),(0,r.jsxs)(p,{href:"https://www.instagram.com/ramaeraindustries/",target:"_blank",children:[" ",(0,r.jsx)(c,{src:"/content/social.png",alt:"instagram icon"})]})]});e.default=x},12032:function(n,e,t){"use strict";t.r(e),t.d(e,{CustomText:function(){return l},Responsive:function(){return c},bg:function(){return d}});var i=t(7297),r=t(85893),a=t(68777);function o(){let n=(0,i.Z)(["\n  font-size: 25px;\n  line-height: 39px;\n  color: #fff;\n  line-height: 42px;\n  font-weight: 400;\n  margin: 3rem 0;\n"]);return o=function(){return n},n}function s(){let n=(0,i.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4rem 0 0 0;\n\n  @media only screen and (max-width: 1200px) {\n  }\n  @media only screen and (max-width: 1000px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 768px) {\n  }\n"]);return s=function(){return n},n}let d="/background/blank.png",l=a.ZP.h1(o()),c=a.ZP.div(s()),u=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=u},70270:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893);t(67294);var a=t(39832),o=t(36080),s=t(12032),d=t(72193),l=t(55875),c=t(49883),u=t(53256),m=t(29492),p=t(68777);function x(){let n=(0,i.Z)(["\n  height: 300px;\n  @media only screen and (min-width: 800px) {\n    display: none;\n  }\n"]);return x=function(){return n},n}let f=p.ZP.div(x()),h=()=>(0,r.jsx)(a.Z,{bgColor:"#000000",height:"40vh",children:(0,r.jsx)(o.Z,{width:"1500px",margin:"0 0 0 0",children:(0,r.jsxs)(s.Responsive,{children:[(0,r.jsxs)(d.DispFlex,{children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(c.default,{})]}),(0,r.jsx)(u.default,{}),(0,r.jsx)(m.default,{}),(0,r.jsx)(f,{})]})})});e.default=h}},function(n){n.O(0,[1502,3838,1664,2249,2283,9373,4649,709,9774,2888,179],function(){return n(n.s=95377)}),_N_E=n.O()}]);