(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4666],{32841:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DistributionChannel",function(){return t(60649)}])},520:function(n,e,t){"use strict";t.d(e,{At:function(){return s},Cl:function(){return c},O7:function(){return r},PH:function(){return a},uX:function(){return o}});var i=t(81621);let r=(0,i.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n    }) \n    {\n      name\n    }\n}"),a=(0,i.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),o=(0,i.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n    }\n}"),s=(0,i.Ps)("\n  query getAllApps{\n  applicants{\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n  }\n}"),c=(0,i.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(n,e,t){"use strict";var i=t(7297),r=t(85893);t(67294);var a=t(68777),o=t(43838),s=t(36468);function c(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return c=function(){return n},n}function l(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return l=function(){return n},n}let d=(0,a.ZP)(o.E.div)(c(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");a.ZP.div(l(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let p=n=>(0,r.jsx)(d,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,r.jsx)(s.Z,{}):n.Text});e.Z=p},60649:function(n,e,t){"use strict";t.r(e);var i=t(85893),r=t(99889),a=t(39832),o=t(36080),s=t(62823),c=t(70270);let l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Z,{mheight:"100vh",height:"120vh",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)("div",{className:"navSpace"}),(0,i.jsx)(o.Z,{full:!0,scale:"95%",width:"1500px",position:"relative",children:(0,i.jsx)(s.default,{})}),(0,i.jsx)("hr",{style:{borderBottom:"1px solid white",width:"80vw"}}),(0,i.jsx)(c.default,{})]})});e.default=l},62823:function(n,e,t){"use strict";t.r(e);var i=t(85893),r=t(30709),a=t(90682),o=t(520),s=t(50319),c=t(9473),l=t(55678);t(57134);var d=t(99216);let p=()=>{let[n,{data:e,loading:t,error:p}]=(0,s.D)(o.O7),m=(0,c.v9)(n=>n.application.name),u=(0,c.v9)(n=>n.application.applicantType),g=(0,c.v9)(n=>n.application.applicantAddress),h=(0,c.v9)(n=>n.application.email),x=(0,c.v9)(n=>n.application.firmName),f=(0,c.v9)(n=>n.application.mobileNumber),b=(0,c.v9)(n=>n.application.District),y=(0,c.v9)(n=>n.application.State),v=e=>{e.preventDefault(),n({variables:{name:m,applicantType:u,applicantAddress:g,email:h,firmName:x,mobileNumber:f,District:b,State:y}}),S()},S=()=>{l.Am.success("Application Submitted!",{position:"bottom-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{location.reload()},"3200")};return(0,i.jsx)(d.Container,{children:(0,i.jsxs)("form",{onSubmit:n=>v(n),children:[(0,i.jsx)(l.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,i.jsx)("div",{style:{position:"absolute",top:".5rem",right:".5rem",fontSize:".8rem"}}),(0,i.jsx)(r.UserForm,{}),(0,i.jsx)(d.ButtonContainer,{children:(0,i.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,i.jsx)(a.Z,{nav:!0,width:"140px",height:"2.75rem",Text:"Submit",inheight:"2.5rem"})})})]})})};e.default=p},99216:function(n,e,t){"use strict";t.r(e),t.d(e,{ButtonContainer:function(){return l},Container:function(){return c}});var i=t(7297),r=t(85893),a=t(68777);function o(){let n=(0,i.Z)(['\n        position: relative;\n        background: white;\n        padding: 2rem;\n        margin: 1rem;\n        border-radius: .5rem;\n        max-width: "max-content";\n        color: "black";\n        @media (max-width: 450px) {\n        width: 100vw;\n        padding: 1.5rem;\n     }\n']);return o=function(){return n},n}function s(){let n=(0,i.Z)(["\n        margin-top: 1rem;\n        display: flex;\n        gap: .5rem;\n        justify-content: flex-end;\n        @media (max-width: 450px) {\n        justify-content: center;\n     }\n"]);return s=function(){return n},n}let c=a.ZP.div(o()),l=a.ZP.div(s()),d=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=d}},function(n){n.O(0,[1502,3838,1664,2283,2249,1754,7163,270,709,9774,2888,179],function(){return n(n.s=32841)}),_N_E=n.O()}]);