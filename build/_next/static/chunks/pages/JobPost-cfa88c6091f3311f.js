(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1994],{22305:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/JobPost",function(){return t(61705)}])},90682:function(n,e,t){"use strict";var i=t(7297),r=t(85893);t(67294);var o=t(68777),a=t(43838),l=t(36468);function d(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return s=function(){return n},n}let c=(0,o.ZP)(a.E.div)(d(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");o.ZP.div(s(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let u=n=>(0,r.jsx)(c,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,r.jsx)(l.Z,{}):n.Text});e.Z=u},61705:function(n,e,t){"use strict";t.r(e);var i=t(85893),r=t(99889),o=t(39832),a=t(36080),l=t(98253),d=t(70270);let s=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Z,{mheight:"100vh",height:"120vh",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)("div",{className:"navSpace"}),(0,i.jsx)(a.Z,{full:!0,scale:"95%",width:"1500px",position:"relative",children:(0,i.jsx)(l.default,{})}),(0,i.jsx)("hr",{style:{borderBottom:"1px solid white",width:"80vw"}}),(0,i.jsx)(d.default,{})]})});e.default=s},98253:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var i=t(85893),r=t(1807),o=t(90682),a=t(81621);let l=(0,a.Ps)("\nmutation createJob (\n$department: String!,\n$jobDescription: String!,\n$jobLocation: String!,\n$jobTitle: String!,\n$jobType: String!,\n$jobStatus: JOBSTATUS!,\n){createJob(\n    data: {\n      department: $department\n      jobDescription: $jobDescription\n      jobLocation: $jobLocation\n      jobTitle: $jobTitle\n      jobType: $jobType\n      jobStatus:$jobStatus\n    }) \n    {\n      jobType\n    }\n}");(0,a.Ps)("\n  query getAllJobDetails{\n    AllJobDetails{\n    department\n    jobDescription\n    jobLocation\n    jobTitle\n    jobType\n    jobStatus\n  }\n}");var d=t(50319),s=t(9473),c=t(55678);t(57134);var u=t(14427);t(67294);let x=()=>{let[n]=(0,d.D)(l),e=(0,s.v9)(n=>n.jobApplication.department),t=(0,s.v9)(n=>n.jobApplication.jobDescription),a=(0,s.v9)(n=>n.jobApplication.jobLocation),x=(0,s.v9)(n=>n.jobApplication.jobTitle),p=(0,s.v9)(n=>n.jobApplication.jobType),m=(0,s.v9)(n=>n.jobApplication.jobStatus),h=i=>{i.preventDefault(),n({variables:{department:e,jobDescription:t,jobLocation:a,jobTitle:x,jobType:p,jobStatus:m}}),f()},f=()=>{c.Am.success("New Job Added Successfully!",{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout(()=>{location.reload()},"3200")};return(0,i.jsx)(u.Container,{children:(0,i.jsxs)("form",{onSubmit:n=>h(n),children:[(0,i.jsx)(c.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,i.jsx)("div",{style:{position:"absolute",top:".5rem",right:".5rem",fontSize:".8rem"}}),(0,i.jsx)(r.JobForm,{}),(0,i.jsx)(u.ButtonContainer,{children:(0,i.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,i.jsx)(o.Z,{nav:!0,width:"140px",height:"2.75rem",Text:"Submit",inheight:"2.5rem"})})})]})})};var p=x},95637:function(n,e,t){"use strict";t.r(e),t.d(e,{FormWrapper:function(){return o}});var i=t(85893),r=t(96608);function o(n){let{title:e,children:t}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{Text:"Ramaera Industries Limited",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(3rem, 1.5vw, 2rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)(r.Z,{Text:e,lg:"linear-gradient(to right, #000, #000)",font:!0,size:"clamp(1.4rem, 1.5vw, 2rem)",fw:"200",align:"center",lh:"50px",m:"0 0 2rem 0",xmsize:"clamp(1.4rem, 1.5vw, 1rem)",xssize:"clamp(1.4rem, 1.5vw, 1rem)",msize:"1.2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)("div",{className:"formWrapper",children:t})]})}let a=()=>(0,i.jsx)("div",{children:"StyleImage"});e.default=a},1807:function(n,e,t){"use strict";t.r(e),t.d(e,{JobForm:function(){return l}});var i=t(85893),r=t(95637),o=t(9473),a=t(65622);function l(n){let{}=n,e=(0,o.I0)();return(0,i.jsxs)(r.FormWrapper,{title:"JOB POST",children:[(0,i.jsx)("div",{style:{width:"500px",marginTop:"30px"},children:(0,i.jsx)("label",{style:{fontSize:"1.3rem",opacity:".9",fontWeight:"600",color:"#5a5a5a"},children:"Job Details"})}),(0,i.jsx)("div",{style:{width:"450px"}}),(0,i.jsx)("hr",{className:"lineHr1"}),(0,i.jsx)("hr",{className:"lineHr2"}),(0,i.jsxs)("div",{style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Job Department"}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{required:!0,onChange:n=>e((0,a.qT)(n.target.value)),children:[(0,i.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Job Department"}),(0,i.jsx)("option",{value:"Marketing",children:"Marketing"}),(0,i.jsx)("option",{value:"Development",children:"Development"}),(0,i.jsx)("option",{value:"Product",children:"Product"})]})]}),(0,i.jsxs)("div",{style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Job Title"}),(0,i.jsx)("br",{}),(0,i.jsx)("input",{required:!0,type:"text",onChange:n=>e((0,a.tE)(n.target.value)),placeholder:"Type Job Title"})]}),(0,i.jsxs)("div",{style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Job location"}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{required:!0,onChange:n=>e((0,a.Wl)(n.target.value)),children:[(0,i.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Job location"}),(0,i.jsx)("option",{value:"Noida,IN",children:"Noida,IN"}),(0,i.jsx)("option",{value:"Remote",children:"Remote"})]})]}),(0,i.jsxs)("div",{style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Job Type "}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{required:!0,onChange:n=>e((0,a.H_)(n.target.value)),children:[(0,i.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Job Type"}),(0,i.jsx)("option",{value:"Full Time",children:"Full Time"}),(0,i.jsx)("option",{value:"Internship",children:"Internship"})]})]}),(0,i.jsxs)("div",{style:{width:"500px"},children:[(0,i.jsx)("label",{children:"Job Description"}),(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{required:!0,rows:5,cols:80,type:"text",onChange:n=>e((0,a.e_)(n.target.value)),placeholder:"Type Job Description"})]}),(0,i.jsxs)("div",{style:{width:"450px"},children:[(0,i.jsx)("label",{children:"Job Status "}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{required:!0,onChange:n=>e((0,a.Bu)(n.target.value)),children:[(0,i.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Job Status"}),(0,i.jsx)("option",{value:"ACTIVE",children:"ACTIVE"}),(0,i.jsx)("option",{value:"COMPLETED",children:"COMPLETED"}),(0,i.jsx)("option",{value:"PENDING",children:"PENDING"})]})]})]})}let d=()=>(0,i.jsx)("div",{children:"StyleImage"});e.default=d},14427:function(n,e,t){"use strict";t.r(e),t.d(e,{ButtonContainer:function(){return s},Container:function(){return d}});var i=t(7297),r=t(85893),o=t(68777);function a(){let n=(0,i.Z)(["\n  position: relative;\n  background: white;\n  padding: 2rem;\n  margin: 1rem;\n  border-radius: 0.5rem;\n  max-width: max-content;\n  @media (max-width: 500px) {\n    width: 100vw;\n    padding: 1.5rem;\n  }\n"]);return a=function(){return n},n}function l(){let n=(0,i.Z)(["\n  margin-top: 1rem;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  @media (max-width: 450px) {\n    justify-content: center;\n  }\n"]);return l=function(){return n},n}let d=o.ZP.div(a()),s=o.ZP.div(l()),c=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=c},29492:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),o=t(68777),a=t(96608),l=t(41664),d=t.n(l);function s(){let n=(0,i.Z)(["\n  position: absolute;\n  bottom: 100px;\n  left: 50px;\n  display: flex;\n  gap: 50px;\n  bottom: 100px;\n  left: 10vw;\n  color: white;\n  align-items: center;\n  @media only screen and (max-width: 1200px) {\n    left: auto;\n    right: auto;\n    gap: 20px;\n  }\n  @media only screen and (max-width: 768px) {\n    position: static;\n    height: 10px;\n    flex-direction: column;\n    margin: 0 auto;\n  }\n  @media only screen and (max-width: 450px) {\n    gap: 10px;\n    width: 85vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]);return s=function(){return n},n}function c(){let n=(0,i.Z)(["\n  font-size: 10px;\n  margin-bottom: 1rem;\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n  @media only screen and (max-width: 450px) {\n    margin: 1rem;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,i.Z)(["\n  position: absolute;\n  bottom: 160px;\n  left: 10vw;\n  color: white;\n  height: 2px;\n  width: 80vw;\n  background: #fff;\n"]);return u=function(){return n},n}function x(){let n=(0,i.Z)(["\n  position: absolute;\n  font-weight: 100;\n  bottom: 110px;\n  left: 900px;\n  color: white;\n  height: 13px;\n  width: 80vw;\n  font-size: 10px;\n  margin-bottom: 1rem;\n  color: white;\n  @media only screen and (max-width: 768px) {\n    width: fit-content;\n    left: auto;\n    right: auto;\n    bottom: 80px;\n  }\n"]);return x=function(){return n},n}let p=new Date,m=p.getFullYear(),h=o.ZP.div(s()),f=(0,o.ZP)(d())(c()),g=o.ZP.hr(u()),b=o.ZP.div(x()),j=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(h,{children:(0,r.jsx)(f,{href:"/DistributionChannel",children:(0,r.jsx)("div",{class:"glow_button",children:(0,r.jsx)(a.Z,{Text:"Become a part of Distribution Channel",lg:"linear-gradient(90deg, white 0%, white 100%)",font:!0,padding:" 0 ",size:"14px",msize:"14px",align:"center",mpadding:"1vw"})})})}),(0,r.jsxs)(b,{children:["\xa9 ",m," All Rights Reserved"]})]});e.default=j},72193:function(n,e,t){"use strict";t.r(e),t.d(e,{DispFlex:function(){return S},Input:function(){return P},Sub:function(){return F},SubHeading:function(){return y},SubText:function(){return Z}});var i=t(7297),r=t(85893),o=t(68777),a=t(41664),l=t.n(a);function d(){let n=(0,i.Z)(["\n  display: flex;\n  gap: 4rem;\n  align-items: top;\n\n  @media only screen and (max-width: 1000px) {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n    text-align: center;\n  }\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  text-transform: uppercase;\n  margin: auto;\n  display: flex;\n  text-align: left;\n  padding-bottom: 220px;\n  flex-direction: column;\n\n  @media only screen and (max-width: 1000px) {\n    padding-bottom: 20px;\n  }\n"]);return s=function(){return n},n}function c(){let n=(0,i.Z)(["\n  font-size: 14px;\n  margin-bottom: 1rem;\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n  &:hover {\n    color: whitesmoke;\n  }\n  @media only screen and (max-width: 1000px) {\n    font-size: 0.8rem;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,i.Z)(["\n  border-bottom: solid white 2px;\n  padding-bottom: 10px;\n  width: 60px;\n  font-size: 18px;\n  color: white;\n  margin-bottom: 2rem;\n"]);return u=function(){return n},n}function x(){let n=(0,i.Z)(["\n  color: white;\n  margin-bottom: 1rem;\n"]);return x=function(){return n},n}function p(){let n=(0,i.Z)(["\n  color: white;\n  font-weight: 100;\n  font-size: 8px;\n  line-height: 16px;\n"]);return p=function(){return n},n}function m(){let n=(0,i.Z)(["\n  margin-bottom: 1rem;\n  height: 35px;\n  border: 1.5px solid #ffffff;\n  border-radius: 6px;\n  padding-left: 1rem;\n  @media only screen and (max-width: 1000px) {\n    padding-left: 0;\n    width: 100%;\n  }\n"]);return m=function(){return n},n}function h(){let n=(0,i.Z)(["\n  display: flex;\n  gap: 4rem;\n\n  @media only screen and (max-width: 1000px) {\n    display: flex;\n    gap: 20vw;\n  }\n"]);return h=function(){return n},n}function f(){let n=(0,i.Z)(["\n  color: white;\n  padding: 2rem;\n  width: 250px;\n  height: 200px;\n  margin-left: 3rem;\n  border: 1px solid #ffffff;\n  border-radius: 6px;\n  background-color: rgba(63, 63, 63, 0.3);\n  @media only screen and (max-width: 1000px) {\n    overflow: hidden;\n    width: 40vw;\n    margin: 0 0 20px 0;\n  }\n  @media only screen and (max-width: 768px) {\n    width: 80vw;\n    margin: 0 0 20px 0;\n    padding-bottom: 50px;\n  }\n"]);return f=function(){return n},n}function g(){let n=(0,i.Z)(["\n  display: flex;\n  width: 100vw;\n  justify-content: space-evenly;\n  @media only screen and (max-width: 1000px) {\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  @media only screen and (max-width: 768px) {\n  }\n"]);return g=function(){return n},n}let b=o.ZP.div(d()),j=o.ZP.div(s()),w=(0,o.ZP)(l())(c()),v=o.ZP.h3(u()),y=o.ZP.h3(x()),Z=o.ZP.h3(p()),P=o.ZP.input(m()),T=o.ZP.div(h()),F=o.ZP.div(f()),S=o.ZP.div(g()),D=()=>(0,r.jsx)(b,{children:(0,r.jsx)(T,{children:(0,r.jsxs)(j,{children:[(0,r.jsx)(v,{href:"",children:"Links"}),(0,r.jsx)(w,{href:"/PrivacyPolicy",children:"Privacy Policy"}),(0,r.jsx)(w,{href:"/TermsAndConditions",children:"Terms & Conditions"}),(0,r.jsx)(w,{href:"/Legal",children:"Legal"}),(0,r.jsx)(w,{href:"/Login",children:"Login"}),(0,r.jsx)(w,{href:"/VisitUs",children:"Visit Us"})]})})});e.default=D},55875:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),o=t(41664),a=t.n(o),l=t(68777),d=t(96608);function s(){let n=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 15vw;\n  margin: 30px 0 30px 80px;\n  position: relative;\n  left: -50px;\n  @media only screen and (max-width: 1000px) {\n    margin: 0 0 0 0;\n    margin-bottom: 20px;\n    left: unset;\n    width: auto;\n  }\n"]);return s=function(){return n},n}function c(){let n=(0,i.Z)(["\n  /* height: 150px;\n  width: 165px; */\n  width: 80%;\n  @media only screen and (max-width: 1000px) {\n    width: auto;\n  }\n"]);return c=function(){return n},n}let u=l.ZP.div(s()),x=l.ZP.img(c()),p=()=>(0,r.jsx)(a(),{href:"/",children:(0,r.jsxs)(u,{children:[(0,r.jsx)(x,{src:"/logo/logo.png",alt:"logo"}),(0,r.jsx)(d.Z,{Text:"Ramaera Industries",lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",font:!0,size:"25px",align:"center"})]})});e.default=p},49883:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),o=t(68777);function a(){let n=(0,i.Z)(["\n  display: flex;\n  padding-bottom: 140px;\n  align-items: center;\n  flex-direction: column;\n  //width: 20vw;\n  /*   margin-left: 2rem;*/\n  margin-bottom: 100px;\n  @media only screen and (max-width: 450px) {\n    margin-bottom: 0px;\n  }\n"]);return a=function(){return n},n}function l(){let n=(0,i.Z)(["\n  border: 3px solid #959595;\n  border-radius: 20px;\n  overflow: hidden;\n  width: 500px;\n  height: 300px;\n  @media only screen and (max-width: 768px) {\n    width: 300px;\n    height: 210px;\n  }\n"]);return l=function(){return n},n}let d=o.ZP.a(a()),s=o.ZP.iframe(l()),c=()=>(0,r.jsx)(d,{href:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.121357850357!2d77.37442991604617!3d28.62612468242031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5422cddcbd5%3A0xfabca9cd7a99f34d!2sRamaera%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1676369134463!5m2!1sen!2sin",children:(0,r.jsx)(s,{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.306681470596!2d77.375918!3d28.625166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5422cddcbd5%3A0xfabca9cd7a99f34d!2sRamaera%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1679897392722!5m2!1sen!2sin",width:"500",height:"300",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})});e.default=c},53256:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893),o=t(68777);function a(){let n=(0,i.Z)(["\n  height: 20px;\n  margin: 5px;\n"]);return a=function(){return n},n}function l(){let n=(0,i.Z)(["\n  font-size: 14px;\n  margin-left: 5px;\n  color: white;\n\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n  }\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  position: absolute;\n  bottom: 100px;\n  right: 150px;\n  @media only screen and (max-width: 1200px) {\n    bottom: 20px;\n    right: auto;\n    left: auto;\n  }\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  cursor: pointer;\n"]);return s=function(){return n},n}let c=o.ZP.img(a()),u=o.ZP.h4(l()),x=o.ZP.div(d()),p=o.ZP.a(s()),m=()=>(0,r.jsxs)(x,{children:[(0,r.jsx)(u,{children:"Let's Do it!"}),(0,r.jsx)(p,{href:"https://www.facebook.com/ramaeraindustries",target:"_blank",children:(0,r.jsx)(c,{src:"/content/social-5.png",alt:"facebook icon"})}),(0,r.jsx)(p,{href:"https://twitter.com/ramaeraltd",target:"_blank",children:(0,r.jsx)(c,{src:"/content/social-2.png",alt:"twitter icon"})}),(0,r.jsxs)(p,{href:"https://www.instagram.com/ramaeraindustries/",target:"_blank",children:[" ",(0,r.jsx)(c,{src:"/content/social.png",alt:"instagram icon"})]})]});e.default=m},12032:function(n,e,t){"use strict";t.r(e),t.d(e,{CustomText:function(){return s},Responsive:function(){return c},bg:function(){return d}});var i=t(7297),r=t(85893),o=t(68777);function a(){let n=(0,i.Z)(["\n  font-size: 25px;\n  line-height: 39px;\n  color: #fff;\n  line-height: 42px;\n  font-weight: 400;\n  margin: 3rem 0;\n"]);return a=function(){return n},n}function l(){let n=(0,i.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4rem 0 0 0;\n\n  @media only screen and (max-width: 1200px) {\n  }\n  @media only screen and (max-width: 1000px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 768px) {\n  }\n"]);return l=function(){return n},n}let d="/background/blank.png",s=o.ZP.h1(a()),c=o.ZP.div(l()),u=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=u},70270:function(n,e,t){"use strict";t.r(e);var i=t(7297),r=t(85893);t(67294);var o=t(39832),a=t(36080),l=t(12032),d=t(72193),s=t(55875),c=t(49883),u=t(53256),x=t(29492),p=t(68777);function m(){let n=(0,i.Z)(["\n  height: 300px;\n  @media only screen and (min-width: 800px) {\n    display: none;\n  }\n"]);return m=function(){return n},n}let h=p.ZP.div(m()),f=()=>(0,r.jsx)(o.Z,{bgColor:"#000000",height:"40vh",children:(0,r.jsx)(a.Z,{width:"1500px",margin:"0 0 0 0",children:(0,r.jsxs)(l.Responsive,{children:[(0,r.jsxs)(d.DispFlex,{children:[(0,r.jsx)(s.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(c.default,{})]}),(0,r.jsx)(u.default,{}),(0,r.jsx)(x.default,{}),(0,r.jsx)(h,{})]})})});e.default=f}},function(n){n.O(0,[1502,3838,1664,2249,2283,1754,4649,9774,2888,179],function(){return n(n.s=22305)}),_N_E=n.O()}]);