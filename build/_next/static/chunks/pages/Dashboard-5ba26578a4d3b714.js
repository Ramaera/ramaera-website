(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4156],{77064:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Dashboard",function(){return s(27482)}])},90682:function(e,n,s){"use strict";var t=s(7297),r=s(85893);s(67294);var i=s(68777),a=s(67285),d=s(36468);function l(){let e=(0,t.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return l=function(){return e},e}function o(){let e=(0,t.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return o=function(){return e},e}let h=(0,i.ZP)(a.E.div)(l(),e=>e.color?e.color:"#FFFFFF",e=>e.fontSize?e.fontSize:"20px",e=>e.fw?e.fw:"600",e=>e.noLineHeight?"1":"18px",e=>e.ls?e.ls:"0em",e=>e.secondary?"2px":e.padding?e.padding:"0.85rem 2rem",e=>e.br?e.br:e.secondary?"1.2rem":"0.8rem",e=>e.lightBorder?"2px solid #FFFFFF":"none",e=>e.bborder?e.bborder:"none",e=>e.width?e.width:"100px",e=>e.disabled?"#acacac":e.bg?e.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",e=>e.m?e.m:"",e=>e.height?e.height:"",e=>e.sh?e.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",e=>e.secondarySmall?e.secondarySmall:e.navWidth?e.navWidth:"15rem",e=>e.secondary?"18px":e.fontSize?e.fontSize:"18px",e=>e.sm?e.sm:"");i.ZP.div(o(),e=>e.secondaryBg?e.secondaryBg:"#13132F",e=>e.secondaryBr?e.secondaryBr:"1.45rem",e=>e.secondaryP?e.secondaryP:"0.5rem 2rem",e=>e.Inheight?e.Inheight:"",e=>e.sm?e.sm:"",e=>e.secondaryPs?e.secondaryPs:e.secondaryP?e.secondaryP:"0 2rem");let c=e=>(0,r.jsx)(h,{...e,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:e.loading?(0,r.jsx)(d.Z,{}):e.Text});n.Z=c},36468:function(e,n,s){"use strict";var t=s(7297),r=s(85893);s(67294);var i=s(68777);function a(){let e=(0,t.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return a=function(){return e},e}let d=()=>(0,r.jsx)(l,{viewBox:"0 0 50 50",children:(0,r.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),l=i.ZP.svg(a());n.Z=d},27482:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return u}});var t=s(85893),r=s(41664),i=s.n(r),a=s(67294),d=s(9473),l=s(90682),o=s(34866),h=s(11163);let c=()=>{let e;let n=(0,h.useRouter)(),s=(0,d.v9)(e=>e.logInUser.role);(0,a.useEffect)(()=>{e=localStorage.getItem("accessToken")},[]),(0,a.useEffect)(()=>{e||n.push("/Login")},[e]);try{return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"container heading-container",children:[(0,t.jsx)("h1",{className:"heading-text",children:"Dashboard"}),(0,t.jsx)(o.Z,{})]}),(0,t.jsxs)("div",{className:"container table-container",children:[(0,t.jsx)("div",{className:"basis-2/12 table-2"}),(0,t.jsx)("div",{className:"basis-8/12 table-8",children:(0,t.jsxs)("table",{id:"myTable",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"header",children:[(0,t.jsx)("th",{children:"S. No."}),(0,t.jsx)("th",{children:"Dashboard"}),(0,t.jsx)("th",{children:"Details"})]})}),(0,t.jsxs)("tbody",{children:["ADMIN"===s||"EXECUTIVE"===s?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{className:"dashboardText",children:"Project (Idea) Responses Data"}),(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:"/SubmitProjectResponses",children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(l.Z,{nav:!0,width:"auto",height:"auto",Text:"Responses",inheight:"auto",fontSize:"auto",padding:" 15px 10px"})})})})]}):null,"ADMIN"===s?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{className:"dashboardText",children:"Visit Us Responses"}),(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:"/VisitUsResponses",children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(l.Z,{nav:!0,width:"auto",height:"auto",Text:"Responses",inheight:"auto",fontSize:"auto",padding:" 15px 10px"})})})})]}):null,"ADMIN"===s?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{className:"dashboardText",children:"Contact Us Responses Data"}),(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:"/ContactUsResponses",children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(l.Z,{nav:!0,width:"auto",height:"auto",Text:"Responses",inheight:"auto",fontSize:"auto",padding:" 15px 10px"})})})})]}):null,"ADMIN"===s||"SALES"===s?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ADMIN"===s?"4":"1"}),(0,t.jsx)("td",{className:"dashboardText",children:"Distributor Channel Responses Data"}),(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:"/DistributionChannelResponses",children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(l.Z,{nav:!0,width:"auto",height:"auto",Text:"Responses",inheight:"auto",fontSize:"auto",padding:" 15px 10px"})})})})]}):null,"ADMIN"===s||"EXECUTIVE"===s?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"5"}),(0,t.jsx)("td",{className:"dashboardText",children:"Sales Enquiry Responses Data"}),(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:"/SalesEnquiryResponses",children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(l.Z,{nav:!0,width:"auto",height:"auto",Text:"Responses",inheight:"auto",fontSize:"auto",padding:" 15px 10px"})})})})]}):null,"ADMIN"===s||"EXECUTIVE"===s?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"6"}),(0,t.jsx)("td",{className:"dashboardText",children:"POSD Enquiry Responses Data"}),(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:"/PosdEnquiryResponses",children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(l.Z,{nav:!0,width:"auto",height:"auto",Text:"Responses",inheight:"auto",fontSize:"auto",padding:" 15px 10px"})})})})]}):null,"ADMIN"===s||"AGRAMART"===s?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ADMIN"===s?"7":"1"}),(0,t.jsx)("td",{className:"dashboardText",children:"Billing Amount Agra Mart"}),(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:"/BillingAmountAgraMart",children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(l.Z,{nav:!0,width:"auto",height:"auto",Text:"Responses",inheight:"auto",fontSize:"auto",padding:" 15px 10px"})})})})]}):null,(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"\xa0"}),(0,t.jsx)("td",{children:"\xa0"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"\xa0"}),(0,t.jsx)("td",{children:"\xa0"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"\xa0"}),(0,t.jsx)("td",{children:"\xa0"})]})]})]})}),(0,t.jsx)("div",{className:"basis-2/12 table-2"})]})]})}catch(r){return console.log(r.message),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i(),{style:{color:"white"},href:" /Login",children:"Login to continue"})})}},x=()=>{try{return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c,{})})}catch(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Link,{style:{color:"white"},href:" /Login",children:"Login to continue"})})}};var u=x},34866:function(e,n,s){"use strict";var t=s(85893),r=s(28201),i=s(13540),a=s(88567),d=s(41687),l=s(15398),o=s(47120),h=s(15861),c=s(9473),x=s(80836),u=s(41664),j=s.n(u),p=s(11163),g=s(28922);let m=()=>{let e=(0,p.useRouter)(),n=(0,c.I0)(),s=(0,c.v9)(e=>e.logInUser.name),u=(0,c.v9)(e=>e.logInUser.role),m=()=>{n((0,x.kS)())};return(0,t.jsxs)("label",{class:"dropdown",children:[(0,t.jsx)("div",{class:"dd-button",children:"Dropdown"}),(0,t.jsx)(r.Z,{style:{fontSize:"50px",color:"white",cursor:"pointer"}}),(0,t.jsx)("input",{type:"checkbox",class:"dd-input",id:"test"}),(0,t.jsxs)("ul",{class:"dd-menu",children:[(0,t.jsx)("li",{style:{cursor:"default"},children:(0,t.jsx)("span",{style:{color:"black"},children:(0,t.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(o.Z,{style:{marginRight:"10px"}}),s?"Name : ".concat(s):"Name : "]})})}),(0,t.jsx)("li",{class:"divider"}),(0,t.jsx)("li",{style:{cursor:"default"},children:(0,t.jsx)("span",{style:{color:"black"},children:(0,t.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(l.Z,{style:{marginRight:"10px"}}),u?"Role : ".concat(u):"Role : "]})})}),"/Dashboard"!==e.pathname&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{className:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(j(),{href:"/Dashboard",children:(0,t.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(g.Z,{style:{marginRight:"10px"}}),"Dashboard"]})})})]}),"ADMIN"===u&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{className:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(j(),{href:"/Dashboard/CreateUser",children:(0,t.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(d.Z,{style:{marginRight:"10px"}}),"Create User"]})})})]}),(0,t.jsx)("li",{class:"divider"}),(0,t.jsx)("li",{className:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(j(),{href:"/Dashboard/ChangePassword",children:(0,t.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(a.Z,{style:{marginRight:"10px"}}),"Change Password"]})})}),(0,t.jsx)("li",{class:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(j(),{onClick:()=>m(),href:"/Login",children:(0,t.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(i.Z,{style:{marginRight:"10px"}}),"Logout"]})})})]})]})};n.Z=m}},function(e){e.O(0,[1502,7285,1664,273,9736,9774,2888,179],function(){return e(e.s=77064)}),_N_E=e.O()}]);