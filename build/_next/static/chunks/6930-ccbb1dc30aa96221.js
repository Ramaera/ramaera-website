"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6930],{520:function(n,e,t){t.d(e,{TK:function(){return a},ap:function(){return d},fD:function(){return c},qh:function(){return r},ui:function(){return s},xr:function(){return o},zM:function(){return l}});var i=t(81621);let r=(0,i.Ps)("\nmutation UpdateVisitorForm (\n$visitorID: String!,\n$email: String!,\n){UpdateVisitorForm(\n    data: {\n      visitorID: $visitorID\n      email: $email\n    }) \n    {\n      email\n    }\n}"),a=(0,i.Ps)("\nmutation UpdateApplication (\n$applicationId: String!,\n$email: String!,\n){UpdateApplication(\n    data: {\n      applicationId: $applicationId\n      email: $email\n    }) \n    {\n      email\n    }\n}"),s=(0,i.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n$extraInfo: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n      extraInfo :$extraInfo\n    }) \n    {\n      name\n    }\n}"),l=(0,i.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),o=(0,i.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n      user{\n      role\n      name\n    }\n    }\n}"),d=(0,i.Ps)("\n  query getAllApps{\n  applicants{\n    id\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n    extraInfo\n    createdAt\n    updatedAt\n  }\n}"),c=(0,i.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(n,e,t){var i=t(7297),r=t(85893);t(67294);var a=t(68777),s=t(43838),l=t(36468);function o(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return o=function(){return n},n}function d(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return d=function(){return n},n}let c=(0,a.ZP)(s.E.div)(o(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");a.ZP.div(d(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let m=n=>(0,r.jsx)(c,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,r.jsx)(l.Z,{}):n.Text});e.Z=m},36468:function(n,e,t){var i=t(7297),r=t(85893);t(67294);var a=t(68777);function s(){let n=(0,i.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return s=function(){return n},n}let l=()=>(0,r.jsx)(o,{viewBox:"0 0 50 50",children:(0,r.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),o=a.ZP.svg(s());e.Z=l},96608:function(n,e,t){var i=t(7297),r=t(85893);t(67294);var a=t(68777);function s(){let n=(0,i.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n      width: ",";\n      //  margin: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n      overflow-wrap: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return s=function(){return n},n}let l=n=>{let e=a.ZP.p(s(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.miwidth?n.miwidth:"",n.mimargin?n.mimargin:"",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.ow?n.ow:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,r.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=l},36861:function(n,e,t){t.r(e),t.d(e,{FormWrapper:function(){return a}});var i=t(85893),r=t(96608);function a(n){let{title:e,children:t}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{Text:"Ramaera Industries LIMITED",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(3rem, 1.5vw, 2rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"1.7rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)(r.Z,{Text:"Visitor Details",lg:"linear-gradient(to right, #000, #000)",font:!0,size:"clamp(1.4rem, 1.5vw, 2rem)",fw:"200",align:"center",lh:"50px",m:"0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"1.5rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)("div",{className:"formWrapper",children:t})]})}let s=()=>(0,i.jsx)("div",{children:"StyleImage"});e.default=s},36930:function(n,e,t){t.r(e);var i=t(85893),r=t(41664),a=t.n(r),s=t(36861),l=t(62596),o=t(520),d=t(50319),c=t(67294),m=t(90682);let p=n=>{let{VisitUsData:e}=n,[t]=(0,d.D)(o.qh),[r,p]=(0,c.useState)(!1),[u,h]=(0,c.useState)(""),[x,g]=(0,c.useState)(!1),[f,v]=(0,c.useState)(""),[b,w]=(0,c.useState)("");(0,c.useEffect)(()=>{try{h(e.email.split("%_%")[0]),g(e.email.split("%_%")[1].split("%~%")[0]),v(e.email.split("%~%")[1].split("%*%")[0]),w(e.email.split("%*%")[1])}catch(n){h(e.email)}},[e]);let j=async()=>{await t({variables:{visitorID:e.id,email:u+"%_%true%~%"+f+"%*%"+b}}),y()},y=()=>{p(!0),setTimeout(()=>{history.back()},"1500")};try{return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Container,{children:(0,i.jsxs)(s.FormWrapper,{children:[(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px",marginTop:"30px"},children:[(0,i.jsx)("br",{}),(0,i.jsx)("label",{style:{fontSize:"1.3rem",opacity:".9",fontWeight:"600",color:"#5a5a5a"},children:"Visitor Details"})]}),(0,i.jsx)("div",{className:"divResponsive",style:{width:"450px"}}),(0,i.jsx)("hr",{className:"lineHr1"}),(0,i.jsx)("hr",{className:"lineHr2"}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Name "}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:e.name})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:" Email "}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:u})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Reason for Visit"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:e.reason})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Address "}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[e.address," "]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Location of Visit"}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:e.plantName})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Type of Visit "}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[e.typeOfVisit," "]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Date"}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[e.date.slice(0,10)," "]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Time"}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[e.date.slice(11)," "]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"PWID "}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[e.pwId," "]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Number Of People "}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[e.numberOfPeople," "]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Phone Number "}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:[e.mobileNumber," "]}),(0,i.jsx)("br",{}),(0,i.jsx)("label",{children:"Status "}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{value:b,onChange:n=>{w(n.target.value),console.log(n.target.value)},children:[(0,i.jsx)("option",{selected:!0,children:"Pending"}),(0,i.jsx)("option",{children:"Cancelled"}),(0,i.jsx)("option",{children:"Postponed"}),(0,i.jsx)("option",{children:"Completed"})]})]}),(0,i.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Remarks "}),(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{value:f,onChange:n=>v(n.target.value),type:"text"})]}),(0,i.jsx)("div",{className:"divResponsive",style:{width:"500px"}}),(0,i.jsx)("button",{style:{cursor:"pointer",background:"none",border:"none"},onClick:()=>{j()},children:(0,i.jsx)(m.Z,{fontSize:"16px",Text:"Submit",width:"fit-content"})})]})})})}catch(S){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a(),{style:{color:"white"},href:" /Login",children:"Login to continue"})})}};e.default=p},62596:function(n,e,t){t.r(e),t.d(e,{Container:function(){return l}});var i=t(7297),r=t(85893),a=t(68777);function s(){let n=(0,i.Z)(["\n  position: relative;\n  background: white;\n  padding: 2rem 2rem 3.5rem 2rem;\n  margin: 1rem;\n  border-radius: 0.5rem;\n  max-width: max-content;\n  @media (max-width: 500px) {\n    width: 100vw;\n    padding: 1.5rem;\n  }\n"]);return s=function(){return n},n}let l=a.ZP.div(s()),o=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=o},50319:function(n,e,t){t.d(e,{D:function(){return c}});var i=t(23564),r=t(67294),a=t(14012),s=t(82152),l=t(14692),o=t(30990),d=t(66252);function c(n,e){var t=(0,d.x)(null==e?void 0:e.client);(0,l.Vp)(n,l.n_.Mutation);var c=(0,r.useState)({called:!1,loading:!1,client:t}),m=c[0],p=c[1],u=(0,r.useRef)({result:m,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(u.current,{client:t,options:e,mutation:n});var h=(0,r.useCallback)(function(n){void 0===n&&(n={});var e=u.current,t=e.options,r=e.mutation,l=(0,i.pi)((0,i.pi)({},t),{mutation:r}),d=n.client||u.current.client;u.current.result.loading||l.ignoreResults||!u.current.isMounted||p(u.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:d});var c=++u.current.mutationId,m=(0,a.J)(l,n);return d.mutate(m).then(function(e){var t,i=e.data,r=e.errors,a=r&&r.length>0?new o.c({graphQLErrors:r}):void 0;if(c===u.current.mutationId&&!m.ignoreResults){var l={called:!0,loading:!1,data:i,error:a,client:d};u.current.isMounted&&!(0,s.D)(u.current.result,l)&&p(u.current.result=l)}var h=n.onCompleted||(null===(t=u.current.options)||void 0===t?void 0:t.onCompleted);return null==h||h(e.data,m),e}).catch(function(e){if(c===u.current.mutationId&&u.current.isMounted){var t,i={loading:!1,error:e,data:void 0,called:!0,client:d};(0,s.D)(u.current.result,i)||p(u.current.result=i)}var r=n.onError||(null===(t=u.current.options)||void 0===t?void 0:t.onError);if(r)return r(e,m),{data:void 0,errors:e};throw e})},[]),x=(0,r.useCallback)(function(){u.current.isMounted&&p({called:!1,loading:!1,client:t})},[]);return(0,r.useEffect)(function(){return u.current.isMounted=!0,function(){u.current.isMounted=!1}},[]),[h,(0,i.pi)({reset:x},m)]}}}]);