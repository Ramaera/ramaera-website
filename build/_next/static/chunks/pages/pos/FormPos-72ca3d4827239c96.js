(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5871],{84807:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pos/FormPos",function(){return t(47934)}])},520:function(n,e,t){"use strict";t.d(e,{K$:function(){return a},TK:function(){return o},ap:function(){return d},fD:function(){return c},qh:function(){return r},ui:function(){return s},xr:function(){return l},zM:function(){return m}});var i=t(68806);let r=(0,i.Ps)("\nmutation UpdateVisitorForm (\n$visitorID: String!,\n$email: String!,\n){UpdateVisitorForm(\n    data: {\n      visitorID: $visitorID\n      email: $email\n    }) \n    {\n      email\n    }\n}"),a=(0,i.Ps)("\nmutation createPosenquiry(\n  $name: String!\n  $email: String!\n  $Number_of_persons_in_POS_City: String!\n  $mobileNumber: String!\n  $pwid: String!\n  $CityName: String!\n) {\n  createPosenquiry(\n    createPosenquiryInput: {\n      name: $name\n      email: $email\n      Number_of_persons_in_POS_City: $Number_of_persons_in_POS_City\n      mobileNumber: $mobileNumber\n      pwid: $pwid\n      CityName: $CityName\n    }\n  ) {\n    email\n    name\n    CityName\n    mobileNumber\n    Number_of_persons_in_POS_City\n    pwid\n  }\n}\n"),o=(0,i.Ps)("\nmutation UpdateApplication (\n$applicationId: String!,\n$email: String!,\n){UpdateApplication(\n    data: {\n      applicationId: $applicationId\n      email: $email\n    }) \n    {\n      email\n    }\n}"),s=(0,i.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n$extraInfo: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n      extraInfo :$extraInfo\n    }) \n    {\n      name\n    }\n}"),m=(0,i.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),l=(0,i.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n      user{\n      role\n      name\n    }\n    }\n}"),d=(0,i.Ps)("\n  query getAllApps{\n  applicants{\n    id\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n    extraInfo\n    createdAt\n    updatedAt\n  }\n}"),c=(0,i.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(n,e,t){"use strict";var i=t(7297),r=t(85893);t(67294);var a=t(68777),o=t(67285),s=t(36468);function m(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return m=function(){return n},n}function l(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return l=function(){return n},n}let d=(0,a.ZP)(o.E.div)(m(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.disabled?"#acacac":n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");a.ZP.div(l(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let c=n=>(0,r.jsx)(d,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,r.jsx)(s.Z,{}):n.Text});e.Z=c},36468:function(n,e,t){"use strict";var i=t(7297),r=t(85893);t(67294);var a=t(68777);function o(){let n=(0,i.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return o=function(){return n},n}let s=()=>(0,r.jsx)(m,{viewBox:"0 0 50 50",children:(0,r.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),m=a.ZP.svg(o());e.Z=s},96608:function(n,e,t){"use strict";var i=t(7297),r=t(85893);t(67294);var a=t(68777);function o(){let n=(0,i.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n      width: ",";\n      //  margin: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n      overflow-wrap: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return o=function(){return n},n}let s=n=>{let e=a.ZP.p(o(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.miwidth?n.miwidth:"",n.mimargin?n.mimargin:"",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.ow?n.ow:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,r.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=s},47934:function(n,e,t){"use strict";t.r(e),t.d(e,{ButtonContainer:function(){return x},Container:function(){return f},Form:function(){return b},FormInput:function(){return w}});var i=t(7297),r=t(85893),a=t(68777),o=t(96608),s=t(90682),m=t(67294),l=t(50319),d=t(520),c=t(91444);function p(){let n=(0,i.Z)(["\n  display: flex;\n  margin-top: 2rem;\n  justify-content: center;\n  align-items: flex-end;\n\n  @media (max-width: 450px) {\n    justify-content: center;\n    width: 90%;\n  }\n"]);return p=function(){return n},n}function u(){let n=(0,i.Z)(["\n  background: white;\n  width: 80vw;\n  padding: 2rem;\n  margin: 1rem;\n  border-radius: 0.5rem;\n  @media (max-width: 500px) {\n    width: 100vw;\n    padding: 1.5rem;\n  }\n"]);return u=function(){return n},n}function g(){let n=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return g=function(){return n},n}function h(){let n=(0,i.Z)(["\n  width: 45%;\n  @media (max-width: 768px) {\n    width: 90%;\n  }\n"]);return h=function(){return n},n}t(57134);let x=a.ZP.div(p()),f=a.ZP.div(u()),b=a.ZP.form(g()),w=a.ZP.div(h()),y=n=>{let{title:e}=n,[t]=(0,l.D)(d.K$),[i,a]=(0,m.useState)({name:"",number:"",email:"",pwid:"",persons:"",city:""}),p=async()=>{await t({variables:{name:i.name,email:i.email,Number_of_persons_in_POS_City:i.persons,mobileNumber:i.number,pwid:i.pwid,CityName:i.city}}),c.Am.success("Form Submitted",{position:"bottom-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),a({name:"",number:"",email:"",pwid:"",persons:"",city:""})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f,{children:[(0,r.jsx)(o.Z,{Text:"Ramaera Industries",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(3.6rem, 1.5vw, 2rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,r.jsx)(o.Z,{Text:e,lg:"linear-gradient(to right, #000, #000)",font:!0,size:"clamp(2.4rem, 1.5vw, 2rem)",fw:"200",align:"center",lh:"50px",m:"0 0 2rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,r.jsxs)(b,{children:[(0,r.jsxs)(w,{children:[(0,r.jsx)("label",{children:"Name"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{required:!0,value:i.name,type:"text",onChange:n=>a(e=>({...e,name:n.target.value})),placeholder:"Type your name"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("label",{children:"Contact number"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{required:!0,value:i.number,type:"number",onChange:n=>a(e=>({...e,number:n.target.value})),placeholder:"Type your contact number"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("label",{children:"Email ID"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{required:!0,value:i.email,type:"text",onChange:n=>a(e=>({...e,email:n.target.value})),placeholder:"Type your Email ID"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("label",{children:"PW ID"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{required:!0,value:i.pwid,type:"text",onChange:n=>a(e=>({...e,pwid:n.target.value})),placeholder:"Type your PW ID"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("label",{children:"Number of persons in your POS City"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{required:!0,value:i.persons,type:"number",onChange:n=>a(e=>({...e,persons:n.target.value})),placeholder:"Type number of person in POS City"})]}),(0,r.jsxs)(w,{children:[(0,r.jsx)("label",{children:"City Name"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{required:!0,value:i.city,type:"text",onChange:n=>a(e=>({...e,city:n.target.value})),placeholder:"Type City name"})]}),(0,r.jsx)(x,{children:(0,r.jsx)("button",{style:{background:"none",border:"none"},disabled:!i.city||!i.name||!i.number||!i.email||!i.persons||!i.pwid,onClick:n=>{n.preventDefault(),p()},children:(0,r.jsx)(s.Z,{disabled:!i.city||!i.name||!i.number||!i.email||!i.persons||!i.pwid,nav:!0,width:"140px",height:"2.75rem",Text:"Submit",inheight:"2.5rem"})})})]})]}),(0,r.jsx)(c.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})};e.default=y}},function(n){n.O(0,[1502,7285,559,638,9774,2888,179],function(){return n(n.s=84807)}),_N_E=n.O()}]);