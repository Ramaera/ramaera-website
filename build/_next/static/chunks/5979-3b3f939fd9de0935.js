"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5979],{28110:function(e,n,i){i.d(n,{Dh:function(){return s},N4:function(){return r},XM:function(){return a}});var t=i(81621);let r=(0,t.Ps)("\nmutation createVisitorForm (\n  $date: String!,\n$email: String!,\n$mobileNumber: String!,\n$name: String!,\n$numberOfPeople: String,\n$plantName: String!,\n$pwId: String,\n$reason: String!,\n$typeOfVisit: String!,\n$address: String!,\n){createVisitorForm(\n    data: {\n      date: $date\nemail: $email\nmobileNumber: $mobileNumber\nname: $name\nnumberOfPeople: $numberOfPeople\nplantName: $plantName\npwId: $pwId\nreason: $reason\ntypeOfVisit: $typeOfVisit\naddress: $address\n    }) \n    {\n      name\n    }\n}"),a=(0,t.Ps)("\nmutation createGeneralMeetingVisitorForm (\n  $date: String!,\n$email: String!,\n$mobileNumber: String!,\n$name: String!,\n$numberOfPeople: String,\n$plantName: String!,\n$pwId: String,\n$reason: String!,\n$typeOfVisit: String!,\n$address: String!,\n){createGeneralMeetingVisitorForm(\n    data: {\n      date: $date\nemail: $email\nmobileNumber: $mobileNumber\nname: $name\nnumberOfPeople: $numberOfPeople\nplantName: $plantName\npwId: $pwId\nreason: $reason\ntypeOfVisit: $typeOfVisit\naddress: $address\n    }) \n    {\n      name\n    }\n}"),s=(0,t.Ps)("\n  query {\n  findAllVisitorsList {\n    id\n    date\n    name\n    email\n    id\n    reason\n    mobileNumber\n    numberOfPeople\n    pwId\n    typeOfVisit\n    plantName\n    address\n    createdAt\n  }\n}")},90682:function(e,n,i){var t=i(7297),r=i(85893);i(67294);var a=i(68777),s=i(43838),l=i(36468);function o(){let e=(0,t.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  text-align: center;\n  letter-spacing: ",";\n  padding: ",";\n  border-radius: ",";\n  border: ",";\n  border: ",";\n  cursor: pointer;\n  width: ",";\n\n  background: ",";\n  margin: ",";\n  height: ",";\n  box-shadow: ",";\n\n  @media (max-width: 768px) {\n    max-width: ",";\n    font-size: ",";\n  }\n\n  @media (max-width: 450px) {\n    margin: ",";\n  }\n"]);return o=function(){return e},e}function d(){let e=(0,t.Z)(["\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  padding: ",";\n  height: ",";\n\n  @media (max-width: 768px) {\n    width: ",";\n    padding: ",";\n  }\n"]);return d=function(){return e},e}let m=(0,a.ZP)(s.E.div)(o(),e=>e.color?e.color:"#FFFFFF",e=>e.fontSize?e.fontSize:"20px",e=>e.fw?e.fw:"600",e=>e.noLineHeight?"1":"18px",e=>e.ls?e.ls:"0em",e=>e.secondary?"2px":e.padding?e.padding:"0.85rem 2rem",e=>e.br?e.br:e.secondary?"1.2rem":"0.8rem",e=>e.lightBorder?"2px solid #FFFFFF":"none",e=>e.bborder?e.bborder:"none",e=>e.width?e.width:"100px",e=>e.bg?e.bg:"linear-gradient(90deg, #F9D423 0%, #E65C00 100%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",e=>e.m?e.m:"",e=>e.height?e.height:"",e=>e.sh?e.sh:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",e=>e.secondarySmall?e.secondarySmall:e.navWidth?e.navWidth:"15rem",e=>e.secondary?"18px":e.fontSize?e.fontSize:"18px",e=>e.sm?e.sm:"");a.ZP.div(d(),e=>e.secondaryBg?e.secondaryBg:"#13132F",e=>e.secondaryBr?e.secondaryBr:"1.45rem",e=>e.secondaryP?e.secondaryP:"0.5rem 2rem",e=>e.Inheight?e.Inheight:"",e=>e.sm?e.sm:"",e=>e.secondaryPs?e.secondaryPs:e.secondaryP?e.secondaryP:"0 2rem");let c=e=>(0,r.jsx)(m,{...e,type:"button",whileHover:{scale:1.05},whileTap:{scale:.75},children:e.loading?(0,r.jsx)(l.Z,{}):e.Text});n.Z=c},36468:function(e,n,i){var t=i(7297),r=i(85893);i(67294);var a=i(68777);function s(){let e=(0,t.Z)(["\n  animation: rotate 2s linear infinite;\n  margin: -10px 0 0 -10px;\n\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    strokelinecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return s=function(){return e},e}let l=()=>(0,r.jsx)(o,{viewBox:"0 0 50 50",children:(0,r.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}),o=a.ZP.svg(s());n.Z=l},96608:function(e,n,i){var t=i(7297),r=i(85893);i(67294);var a=i(68777);function s(){let e=(0,t.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n      width: ",";\n    //  margin: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n      overflow-wrap: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return s=function(){return e},e}let l=e=>{let n=a.ZP.p(s(),e.size?e.size:"22px",e.color?e.color:"#ffffff",e.bbottom?e.bbottom:"",e.align?e.align:"left",e.ls?e.ls:"0em",e.lh?e.lh:"25px",e.fw?e.fw:"bold",e.m?e.m:"",e.lg?e.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",e.lg?"transparent":"",e.font?"personal":"",e.width?e.width:"",e.tsdo?e.tsdo:"",e.padding?e.padding:"2vw",e.overflowY?e.overflowY:"",e.ttransform?e.ttransform:"",e.hoverColor?e.hoverColor:null,e.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",e.headHover?"text":"",e.headHover?"transparent":"",e.headHover?"text":"",e.headHover?"transparent":"",e.xmsize?e.xmsize:"20px",e.miwidth?e.miwidth:"",e.mimargin?e.mimargin:"",e.xssize?e.xssize:"18px",e.msize?e.msize:"17px",e.mwidth?e.mwidth:"100vw;",e.mta?e.mta:"center",e.mlh&&e.mlh,e.mpadding?e.mpadding:"2vw",e.mmargin?e.mmargin:"",e.ow?e.ow:"",e.mmwidth?e.mmwidth:"100vw;",e.mmsize?e.mmsize:"",e.mm?e.mm:"");return(0,r.jsx)(n,{children:e.Text?e.Text:"Default Text"})};n.Z=l},34866:function(e,n,i){var t=i(85893),r=i(28201),a=i(13540),s=i(88567),l=i(41687),o=i(15398),d=i(47120),m=i(15861),c=i(9473),h=i(80836),x=i(41664),p=i.n(x),f=i(11163),g=i(28922);let u=()=>{let e=(0,f.useRouter)(),n=(0,c.I0)(),i=(0,c.v9)(e=>e.logInUser.name),x=(0,c.v9)(e=>e.logInUser.role),u=()=>{n((0,h.kS)())};return(0,t.jsxs)("label",{class:"dropdown",children:[(0,t.jsx)("div",{class:"dd-button",children:"Dropdown"}),(0,t.jsx)(r.Z,{style:{fontSize:"50px",color:"white",cursor:"pointer"}}),(0,t.jsx)("input",{type:"checkbox",class:"dd-input",id:"test"}),(0,t.jsxs)("ul",{class:"dd-menu",children:[(0,t.jsx)("li",{style:{cursor:"default"},children:(0,t.jsx)("span",{style:{color:"black"},children:(0,t.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(d.Z,{style:{marginRight:"10px"}}),i?"Name : ".concat(i):"Name : "]})})}),(0,t.jsx)("li",{class:"divider"}),(0,t.jsx)("li",{style:{cursor:"default"},children:(0,t.jsx)("span",{style:{color:"black"},children:(0,t.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(o.Z,{style:{marginRight:"10px"}}),x?"Role : ".concat(x):"Role : "]})})}),"/Dashboard"!==e.pathname&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{className:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(p(),{href:"/Dashboard",children:(0,t.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(g.Z,{style:{marginRight:"10px"}}),"Dashboard"]})})})]}),"ADMIN"===x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{className:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(p(),{href:"/Dashboard/CreateUser",children:(0,t.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(l.Z,{style:{marginRight:"10px"}}),"Create User"]})})})]}),(0,t.jsx)("li",{class:"divider"}),(0,t.jsx)("li",{className:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(p(),{href:"/Dashboard/ChangePassword",children:(0,t.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(s.Z,{style:{marginRight:"10px"}}),"Change Password"]})})}),(0,t.jsx)("li",{class:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)(p(),{onClick:()=>u(),href:"/Login",children:(0,t.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(a.Z,{style:{marginRight:"10px"}}),"Logout"]})})})]})]})};n.Z=u},15979:function(e,n,i){i.r(n);var t=i(85893),r=i(67294),a=i(54984),s=i(27798),l=i(87357),o=i(96608);i(80836);var d=i(37887),m=i(28110),c=i(9473),h=i(71406),x=i(41664),p=i.n(x),f=i(90682);i(71170);var g=i(34866);let u=()=>{(0,c.v9)(e=>e.applicationData.projectData);let e=(0,c.I0)(),{loading:n,error:i,data:x}=(0,d.a)(m.Dh),[u,b]=(0,r.useState)(!1),[w,y]=(0,r.useState)("");if(n)return"Loading...";let j=window.localStorage.getItem("accessToken");if(!j)return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(p(),{style:{color:"white"},href:" /Login",children:"Login to continue"})});let v=e=>{let n=e.row.isRead;return n?"custom-row-color-read":"custom-row-color-unread"},N=async()=>{try{e((0,h.pZ)(x.findAllVisitorsList))}catch(n){console.log(n)}},$=[];return x?(N(),x.findAllVisitorsList.forEach((e,n)=>{$.unshift({id:n,number:n+1,name:e.name,email:e.email,mobileNumber:e.mobileNumber,reason:e.reason,numberOfPeople:e.numberOfPeople,pwId:e.pwId,typeOfVisit:e.typeOfVisit,plantName:e.plantName,address:e.address,date:e.date,time:e.time,createdAt:e.createdAt.slice(0,10),isRead:e.email.match("true")})}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(o.Z,{Text:"Visit Us Responses",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,t.jsx)("div",{style:{color:"white",fontSize:"50px",right:"5%",top:"20px",zIndex:"10",position:"absolute",cursor:"pointer"},children:(0,t.jsx)(g.Z,{})}),(0,t.jsx)(l.Z,{className:"boxGird",children:(0,t.jsx)(a._,{slots:{toolbar:s.n},rows:$,columns:[{field:"number",headerName:" Details",width:150,editable:!1,selection:!1,filterable:!1,sortable:!1,renderCell:e=>(0,t.jsx)(p(),{href:"/VisitUsResponses/".concat(e.value),children:(0,t.jsx)("button",{style:{background:"none",border:"none"},type:"submit",children:(0,t.jsx)(f.Z,{nav:!0,width:"auto",height:"auto",Text:"View Details",inheight:"auto",fontSize:"auto",padding:" 5px 8px"})})})},{field:"createdAt",headerName:"Ceated At",minWidth:150,flex:1},{field:"name",headerName:" Name",minWidth:200,flex:1},{field:"email",headerName:"Email",minWidth:250,flex:1},{field:"pwId",headerName:"PWID",minWidth:200,flex:1},{field:"reason",headerName:"Reason for Visit",minWidth:200,flex:1},{field:"address",headerName:"Address",minWidth:300,flex:1},{field:"plantName",headerName:"Location of Visit",minWidth:200,flex:1},{field:"typeOfVisit",headerName:"Type of Visit",minWidth:200,flex:1},{field:"date",headerName:"Date",minWidth:200,flex:1},{field:"time",headerName:"Time",minWidth:200,flex:1},{field:"numberOfPeople",headerName:"Number Of People",minWidth:200,flex:1},{field:"mobileNumber",headerName:"Phone Number",minWidth:200,flex:1}],initialState:{pagination:{paginationModel:{pageSize:8}}},getRowClassName:v,onSelectionModelChange:e=>{y(e.length>0?"custom-row-color-read":"")},pageSizeOptions:[8],disablecolumnSelectionOnClick:!0,displayRowCheckbox:!1,disableRowSelectionOnClick:!0})})]})})):(0,t.jsx)("div",{onClick:location.reload()})};n.default=u}}]);