(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3667],{50891:function(n,e,t){"use strict";var r=t(64836);e.Z=void 0;var i=r(t(64938)),a=t(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");e.Z=o},73595:function(n,e,t){"use strict";var r=t(64836);e.Z=void 0;var i=r(t(64938)),a=t(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");e.Z=o},38608:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return t(15351)}])},520:function(n,e,t){"use strict";t.d(e,{At:function(){return s},Cl:function(){return c},O7:function(){return i},PH:function(){return a},uX:function(){return o}});var r=t(81621);let i=(0,r.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n    }) \n    {\n      name\n    }\n}"),a=(0,r.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),o=(0,r.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n    }\n}"),s=(0,r.Ps)("\n  query getAllApps{\n  applicants{\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n  }\n}"),c=(0,r.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(n,e,t){"use strict";var r=t(7297),i=t(85893);t(67294);var a=t(68777),o=t(43838),s=t(36468);function c(){let n=(0,r.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return c=function(){return n},n}function l(){let n=(0,r.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return l=function(){return n},n}let d=(0,a.ZP)(o.E.div)(c(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");a.ZP.div(l(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let u=n=>(0,i.jsx)(d,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,i.jsx)(s.Z,{}):n.Text});e.Z=u},15351:function(n,e,t){"use strict";t.r(e);var r=t(85893),i=t(99889),a=t(39832),o=t(36080),s=t(5605);let c=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{mheight:"100vh",height:"120vh",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{style:{height:"200px"}}),(0,r.jsx)(o.Z,{full:!0,scale:"95%",width:"1500px",position:"relative",children:(0,r.jsx)(s.default,{})})]})});e.default=c},5605:function(n,e,t){"use strict";t.r(e);var r=t(85893),i=t(96608),a=t(90682),o=t(50891),s=t(73595),c=t(520),l=t(50319),d=t(9473),u=t(11163),m=t(71170),p=t(47586),g=t(80836);let h=()=>{let n=(0,u.useRouter)(),[e]=(0,l.D)(c.uX),t=(0,d.v9)(n=>n.logInUser.password),h=(0,d.v9)(n=>n.logInUser.email),f=(0,d.I0)(),x=async r=>{r.preventDefault();try{let i=await e({variables:{email:h,password:t}});window.localStorage.setItem("accessToken",i.data.login.accessToken),f((0,m.M8)(i.data.login.accessToken)),n.push("/DistributionChannelResponses")}catch(a){}};return(0,r.jsx)(p.Container,{children:(0,r.jsxs)(p.FormBox,{onSubmit:n=>x(n),children:[(0,r.jsx)(i.Z,{Text:"EMPLOYEE",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,r.jsx)(i.Z,{Text:"LOGIN",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,r.jsxs)(p.LoginContainer,{children:[(0,r.jsxs)(p.LoginTitle,{children:[(0,r.jsx)(o.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"7px"}}),(0,r.jsx)("input",{type:"email",placeholder:"Email Id",required:!0,onChange:n=>f((0,g.OD)(n.target.value)),style:{width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput"})]}),(0,r.jsxs)(p.LoginTitle,{children:[(0,r.jsx)(s.Z,{style:{position:"absolute",transform:"translateX(1vmax)",fontSize:"30px",color:"#ff8800",marginTop:"6px"}}),(0,r.jsx)("input",{type:"password",placeholder:"Password",required:!0,onChange:n=>f((0,g.Ij)(n.target.value)),style:{width:"380px",height:"45px",paddingLeft:"60px",marginTop:"0"},className:"loginInput"})]}),(0,r.jsx)("button",{type:"submit",style:{background:"none",border:"none"},children:(0,r.jsx)(a.Z,{width:"150px",padding:"0.85rem 1rem",height:"2.75rem",Text:"Login",inheight:"2rem",sh:"none",m:"50px 0 0 0"})})]})]})})};e.default=h},47586:function(n,e,t){"use strict";t.r(e),t.d(e,{Container:function(){return d},FormBox:function(){return u},LoginContainer:function(){return m},LoginTitle:function(){return p}});var r=t(7297),i=t(85893),a=t(68777);function o(){let n=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  margin-top: -25vh;\n  // width: 100%;\n"]);return o=function(){return n},n}function s(){let n=(0,r.Z)(["\n  background-color: whitesmoke;\n  width: 35vw;\n  min-width: 400px;\n  height: 65vh;\n  min-height: 450px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 2%;\n  box-shadow: 0 0 10px rgb(0 0 0 / 27%);\n  padding: 2rem;\n  @media (max-width: 450px) {\n    width: 100vw;\n    min-width: unset;\n     }\n"]);return s=function(){return n},n}function c(){let n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 70%;\n  gap: 30px;\n  transition: all 0.5s;\n"]);return c=function(){return n},n}function l(){let n=(0,r.Z)([""]);return l=function(){return n},n}let d=a.ZP.div(o()),u=a.ZP.form(s()),m=a.ZP.div(c()),p=a.ZP.div(l()),g=()=>(0,i.jsx)("div",{children:"StyleImage"});e.default=g},50319:function(n,e,t){"use strict";t.d(e,{D:function(){return d}});var r=t(23564),i=t(67294),a=t(14012),o=t(82152),s=t(14692),c=t(30990),l=t(66252);function d(n,e){var t=(0,l.x)(null==e?void 0:e.client);(0,s.Vp)(n,s.n_.Mutation);var d=(0,i.useState)({called:!1,loading:!1,client:t}),u=d[0],m=d[1],p=(0,i.useRef)({result:u,mutationId:0,isMounted:!0,client:t,mutation:n,options:e});Object.assign(p.current,{client:t,options:e,mutation:n});var g=(0,i.useCallback)(function(n){void 0===n&&(n={});var e=p.current,t=e.options,i=e.mutation,s=(0,r.pi)((0,r.pi)({},t),{mutation:i}),l=n.client||p.current.client;p.current.result.loading||s.ignoreResults||!p.current.isMounted||m(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:l});var d=++p.current.mutationId,u=(0,a.J)(s,n);return l.mutate(u).then(function(e){var t,r=e.data,i=e.errors,a=i&&i.length>0?new c.c({graphQLErrors:i}):void 0;if(d===p.current.mutationId&&!u.ignoreResults){var s={called:!0,loading:!1,data:r,error:a,client:l};p.current.isMounted&&!(0,o.D)(p.current.result,s)&&m(p.current.result=s)}var g=n.onCompleted||(null===(t=p.current.options)||void 0===t?void 0:t.onCompleted);return null==g||g(e.data,u),e}).catch(function(e){if(d===p.current.mutationId&&p.current.isMounted){var t,r={loading:!1,error:e,data:void 0,called:!0,client:l};(0,o.D)(p.current.result,r)||m(p.current.result=r)}var i=n.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(i)return i(e,u),{data:void 0,errors:e};throw e})},[]),h=(0,i.useCallback)(function(){p.current.isMounted&&m({called:!1,loading:!1,client:t})},[]);return(0,i.useEffect)(function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}},[]),[g,(0,r.pi)({reset:h},u)]}}},function(n){n.O(0,[1502,3838,1664,8158,2283,2249,4649,9774,2888,179],function(){return n(n.s=38608)}),_N_E=n.O()}]);