"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3517],{520:function(n,e,t){t.d(e,{TK:function(){return r},ap:function(){return d},fD:function(){return c},qh:function(){return a},ui:function(){return s},xr:function(){return l},zM:function(){return o}});var i=t(81621);let a=(0,i.Ps)("\nmutation UpdateVisitorForm (\n$visitorID: String!,\n$email: String!,\n){UpdateVisitorForm(\n    data: {\n      visitorID: $visitorID\n      email: $email\n    }) \n    {\n      email\n    }\n}"),r=(0,i.Ps)("\nmutation UpdateApplication (\n$applicationId: String!,\n$email: String!,\n){UpdateApplication(\n    data: {\n      applicationId: $applicationId\n      email: $email\n    }) \n    {\n      email\n    }\n}"),s=(0,i.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n$extraInfo: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n      extraInfo :$extraInfo\n    }) \n    {\n      name\n    }\n}"),o=(0,i.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),l=(0,i.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n      user{\n      role\n      name\n    }\n    }\n}"),d=(0,i.Ps)("\n  query getAllApps{\n  applicants{\n    id\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n    extraInfo\n    createdAt\n    updatedAt\n  }\n}"),c=(0,i.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},90682:function(n,e,t){var i=t(7297),a=t(85893);t(67294);var r=t(68777),s=t(43838),o=t(36468);function l(){let n=(0,i.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return d=function(){return n},n}let c=(0,r.ZP)(s.E.div)(l(),n=>n.color?n.color:"#FFFFFF",n=>n.fontSize?n.fontSize:"20px",n=>n.fw?n.fw:"600",n=>n.noLineHeight?"1":"18px",n=>n.ls?n.ls:"0em",n=>n.secondary?"2px":n.padding?n.padding:"0.85rem 2rem",n=>n.br?n.br:n.secondary?"1.2rem":"0.8rem",n=>n.lightBorder?"2px solid #FFFFFF":"none",n=>n.bborder?n.bborder:"none",n=>n.width?n.width:"100px",n=>n.bg?n.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",n=>n.m?n.m:"",n=>n.height?n.height:"",n=>n.sh?n.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",n=>n.secondarySmall?n.secondarySmall:n.navWidth?n.navWidth:"15rem",n=>n.secondary?"18px":n.fontSize?n.fontSize:"18px",n=>n.sm?n.sm:"");r.ZP.div(d(),n=>n.secondaryBg?n.secondaryBg:"#13132F",n=>n.secondaryBr?n.secondaryBr:"1.45rem",n=>n.secondaryP?n.secondaryP:"0.5rem 2rem",n=>n.Inheight?n.Inheight:"",n=>n.sm?n.sm:"",n=>n.secondaryPs?n.secondaryPs:n.secondaryP?n.secondaryP:"0 2rem");let m=n=>(0,a.jsx)(c,{...n,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:n.loading?(0,a.jsx)(o.Z,{}):n.Text});e.Z=m},36468:function(n,e,t){var i=t(7297),a=t(85893);t(67294);var r=t(68777);function s(){let n=(0,i.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return s=function(){return n},n}let o=()=>(0,a.jsx)(l,{viewBox:"0 0 50 50",children:(0,a.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),l=r.ZP.svg(s());e.Z=o},96608:function(n,e,t){var i=t(7297),a=t(85893);t(67294);var r=t(68777);function s(){let n=(0,i.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n      width: ",";\n      //  margin: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n      overflow-wrap: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return s=function(){return n},n}let o=n=>{let e=r.ZP.p(s(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.miwidth?n.miwidth:"",n.mimargin?n.mimargin:"",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.ow?n.ow:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,a.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=o},53517:function(n,e,t){t.r(e);var i=t(85893),a=t(67294),r=t(69129),s=t(27798),o=t(87357),l=t(96608),d=t(37887),c=t(520),m=t(41664),p=t.n(m),h=t(9473),x=t(71406);t(80836);var g=t(90682);t(71170);var f=t(34866);let u=()=>{let n=(0,h.I0)(),{loading:e,error:t,data:m}=(0,d.a)(c.fD),[u,b]=(0,a.useState)(!1);if(e)return(0,i.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"white"},children:"Loading..."});let w=window.localStorage.getItem("accessToken");if(!w)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p(),{style:{color:"white"},href:" /Login",children:"Login to continue"})});let y=async()=>{try{n((0,x.I1)(m.contactUsRepsonses))}catch(e){}},j=[];return m?(y(),m.contactUsRepsonses.forEach((n,e)=>{j.unshift({id:e,number:e+1,name:n.name,email:n.email,company:n.company,subject:n.Subject,message:n.message})}),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{Text:"Contact Us Responses",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)("div",{style:{color:"white",fontSize:"50px",right:"5%",top:"20px",zIndex:"10",position:"absolute",cursor:"pointer"},children:(0,i.jsx)(f.default,{})}),(0,i.jsx)(o.Z,{className:"boxGird",children:(0,i.jsx)(r._,{slots:{toolbar:s.n},rows:j,columns:[{field:"number",headerName:" Details",width:150,editable:!1,selection:!1,filterable:!1,sortable:!1,renderCell:n=>(0,i.jsx)(p(),{href:"/ContactUsResponses/".concat(n.value),children:(0,i.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,i.jsx)(g.Z,{nav:!0,width:"auto",height:"auto",Text:"View Details",inheight:"auto",fontSize:"auto",padding:" 5px 8px"})})})},{field:"name",headerName:" Name",minWidth:200,flex:1},{field:"email",headerName:"Email",minWidth:250,flex:1},{field:"company",headerName:"Company",minWidth:280,flex:1},{field:"subject",headerName:"Subject",minWidth:350,flex:1},{field:"message",headerName:"Message",minWidth:350,flex:1}],initialState:{pagination:{paginationModel:{pageSize:8}}},pageSizeOptions:[8],disablecolumnSelectionOnClick:!0,displayRowCheckbox:!1,disableRowSelectionOnClick:!0})})]})})):(0,i.jsx)("div",{onClick:location.reload()})};e.default=u},34866:function(n,e,t){t.r(e);var i=t(85893),a=t(28201),r=t(13540),s=t(88567),o=t(41687),l=t(15398),d=t(47120),c=t(15861),m=t(9473),p=t(80836),h=t(41664),x=t.n(h),g=t(11163),f=t(28922);let u=()=>{let n=(0,g.useRouter)(),e=(0,m.I0)(),t=(0,m.v9)(n=>n.logInUser.name),h=(0,m.v9)(n=>n.logInUser.role),u=()=>{e((0,p.kS)())};return(0,i.jsxs)("label",{class:"dropdown",children:[(0,i.jsx)("div",{class:"dd-button",children:"Dropdown"}),(0,i.jsx)(a.Z,{style:{fontSize:"50px",color:"white",cursor:"pointer"}}),(0,i.jsx)("input",{type:"checkbox",class:"dd-input",id:"test"}),(0,i.jsxs)("ul",{class:"dd-menu",children:[(0,i.jsx)("li",{style:{cursor:"default"},children:(0,i.jsx)("span",{style:{color:"black"},children:(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(d.Z,{style:{marginRight:"10px"}}),t?"Name : ".concat(t):"Name : "]})})}),(0,i.jsx)("li",{class:"divider"}),(0,i.jsx)("li",{style:{cursor:"default"},children:(0,i.jsx)("span",{style:{color:"black"},children:(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(l.Z,{style:{marginRight:"10px"}}),h?"Role : ".concat(h):"Role : "]})})}),"/Dashboard"!==n.pathname&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{className:"divider"}),(0,i.jsx)("li",{children:(0,i.jsx)(x(),{href:"/Dashboard",children:(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(f.Z,{style:{marginRight:"10px"}}),"Dashboard"]})})})]}),"ADMIN"===h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{className:"divider"}),(0,i.jsx)("li",{children:(0,i.jsx)(x(),{href:"/Dashboard/CreateUser",children:(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(o.Z,{style:{marginRight:"10px"}}),"Create User"]})})})]}),(0,i.jsx)("li",{class:"divider"}),(0,i.jsx)("li",{className:"divider"}),(0,i.jsx)("li",{children:(0,i.jsx)(x(),{href:"/Dashboard/ChangePassword",children:(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(s.Z,{style:{marginRight:"10px"}}),"Change Password"]})})}),(0,i.jsx)("li",{class:"divider"}),(0,i.jsx)("li",{children:(0,i.jsx)(x(),{onClick:()=>u(),href:"/Login",children:(0,i.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(r.Z,{style:{marginRight:"10px"}}),"Logout"]})})})]})]})};e.default=u}}]);