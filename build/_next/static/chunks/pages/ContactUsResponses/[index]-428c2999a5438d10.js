(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8134],{97591:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ContactUsResponses/[index]",function(){return i(96558)}])},39832:function(e,n,i){"use strict";var t=i(7297),r=i(85893),s=i(68777);function a(){let e=(0,t.Z)(["\n    //min-width: 100vh;\n    min-height: ",";\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n    flex-direction: column;\n    /*     padding-top: ",";\n */\n    padding-top: ",";\n    background: linear-gradient(\n      90deg,\n      rgb(var(--background-start-rgb)) 0%,\n      rgb(var(--background-end-rgb)) 100%\n    );\n    background-image: url(",");\n    background-size: ",";\n    background-repeat: no-repeat;\n    position: relative;\n    background-position: center center;\n    /* overflow-x: hidden; */\n    overflow: ",";\n    overflow-y: ",";\n    z-index: ",";\n\n    @media (max-width: 1200px) {\n      min-height: 100vh;\n      overflow-y: hidden;\n      background-size: ",";\n      background-position: ",";\n    }\n\n    @media (max-width: 768px) {\n      min-height: 100vh;\n      min-height: ",";\n      padding-top: ",";\n      overflow: visible;\n    }\n    @media (max-width: 400px) {\n      min-height: ",";\n    }\n  "]);return a=function(){return e},e}let d=e=>{let{children:n,bg:i,start:t,padding:d,height:l,adjustBg:c,bgColor:o,Zindex:m,Y:h,resTr:x,mheight:p,mmheight:u,mtpadding:g,hideO:v}=e,f=s.ZP.section(a(),l||"100vh",t?"flex-start":"center",d||"calc(1rem + 1rem)",d||"0",i||"",c?"100% auto":"100% 100%",v||"",h||"",m||"1",c?"100% auto":"auto 100%",c?"center center":"center top",p||"",g||"calc(1rem + 1rem)",u||"");return(0,r.jsx)(f,{children:n})};n.Z=d},36080:function(e,n,i){"use strict";var t=i(7297),r=i(85893),s=i(68777);function a(){let e=(0,t.Z)(["\n    transform: ",";\n    background: ",";\n    width: ",";\n    height: ",";\n    display: flex;\n    display: ",";\n    align-items: ",";\n    justify-content: space-between;\n    flex-direction: column;\n    padding: ",";\n    margin: ",";\n    position: ",";\n    overflow: ",";\n\n    @media only screen and (max-width: 1600px) {\n      width: ",";\n    }\n    @media only screen and (max-width: 1400px) {\n      width: ",";\n    }\n    @media only screen and (max-width: 540px) {\n      width: 100%;\n      padding: ",";\n    }\n  "]);return a=function(){return e},e}let d=e=>{let{children:n,Left:i,full:t,padding:d,margin:l,sp:c,height:o,width:m,position:h,scale:x,overflow:p,df:u,bg:g}=e,v=s.ZP.section(a(),x?"scale(".concat(x,")"):"",g||"",t?"100%":m||"1400px",o||"auto",u||"flex",i?"left":"center",d||"0",l||"0",h||"static",p||"",t?"100%":"95%","100%",c||"0 1rem");return(0,r.jsx)(v,{children:n})};n.Z=d},96558:function(e,n,i){"use strict";i.r(n);var t=i(85893),r=i(11163),s=i(9473),a=i(99889),d=i(39832),l=i(36080),c=i(15710);let o=()=>{let e=(0,r.useRouter)(),n=(0,s.v9)(e=>e.applicationData.contactUsData),{index:i}=e.query;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(d.Z,{mheight:"100vh",height:"120vh",children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)("div",{className:"responseSpaceDetail"}),(0,t.jsx)(l.Z,{full:!0,scale:"95%",width:"1500px",position:"relative",children:(0,t.jsx)(c.default,{ContactUsData:n[i-1]})})]})})};n.default=o},15710:function(e,n,i){"use strict";i.r(n);var t=i(85893),r=i(41664),s=i.n(r),a=i(49955),d=i(32119);let l=e=>{let{ContactUsData:n}=e;try{return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.Container,{children:(0,t.jsxs)(a.FormWrapper,{children:[(0,t.jsx)("div",{className:"divResponsive",tyle:{width:"500px",marginTop:"30px"},children:(0,t.jsx)("label",{style:{fontSize:".8rem",opacity:".9",fontWeight:"600"},children:"Contact Us Details"})}),(0,t.jsx)("div",{className:"divResponsive",style:{width:"450px"}}),(0,t.jsx)("hr",{className:"lineHr1"}),(0,t.jsx)("hr",{className:"lineHr2"}),(0,t.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,t.jsx)("label",{children:"Name "}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:n.name})]}),(0,t.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,t.jsx)("label",{children:" Email "}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:n.email})]}),(0,t.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,t.jsx)("label",{children:"Company"}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:n.company})]}),(0,t.jsxs)("div",{className:"divResponsive",style:{width:"450px"},children:[(0,t.jsx)("label",{children:"Subject "}),(0,t.jsx)("br",{}),(0,t.jsxs)("p",{children:[n.Subject," "]})]}),(0,t.jsxs)("div",{className:"divResponsive",style:{width:"500px"},children:[(0,t.jsx)("label",{children:"Message"}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:n.message})]})]})})})}catch(i){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s(),{style:{color:"white"},href:" /Login",children:"Login to continue"})})}};n.default=l},32119:function(e,n,i){"use strict";i.r(n),i.d(n,{Container:function(){return d}});var t=i(7297),r=i(85893),s=i(68777);function a(){let e=(0,t.Z)(['\n  position: relative;\n  background: white;\n  padding: 2rem 2rem 3.5rem 2rem;\n  margin: 1rem;\n  border-radius: 0.5rem;\n  max-width: "max-content";\n  @media (max-width: 450px) {\n    width: 100vw;\n    padding: 1.5rem;\n  }\n']);return a=function(){return e},e}let d=s.ZP.div(a()),l=()=>(0,r.jsx)("div",{children:"StyleImage"});n.default=l},49955:function(e,n,i){"use strict";i.r(n),i.d(n,{FormWrapper:function(){return s}});var t=i(85893),r=i(96608);function s(e){let{title:n,children:i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{Text:"Ramaera Industries LIMITED",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(3rem, 1.5vw, 2rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,t.jsx)(r.Z,{Text:"Contact Application Details",lg:"linear-gradient(to right, #000, #000)",font:!0,size:"clamp(1.4rem, 1.5vw, 2rem)",fw:"200",align:"center",lh:"50px",m:"0 0 2rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"1.6rem",mwidth:"100%",mmwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,t.jsx)("div",{className:"formWrapper",children:i})]})}let a=()=>(0,t.jsx)("div",{children:"StyleImage"});n.default=a}},function(e){e.O(0,[1502,3838,1664,2283,7163,9774,2888,179],function(){return e(e.s=97591)}),_N_E=e.O()}]);