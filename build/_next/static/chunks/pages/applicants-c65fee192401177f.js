(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7599],{28201:function(n,e,t){"use strict";var i=t(64836);e.Z=void 0;var r=i(t(64938)),a=t(85893),o=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");e.Z=o},64938:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.createSvgIcon}});var i=t(76031)},76031:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return r.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return o.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return m},setRef:function(){return p},unstable_ClassNameGenerator:function(){return S},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return g},useControlled:function(){return x.Z},useEventCallback:function(){return w.Z},useForkRef:function(){return b.Z},useIsFocusVisible:function(){return v.Z}});var i=t(37078),r=t(98216),a=t(49064).Z,o=t(88169),l=t(57144),s=function(n,e){return()=>null},c=t(71579),u=t(8038),d=t(5340);t(87462);var m=function(n,e){return()=>null},p=t(7960).Z,f=t(58974),h=t(27909),g=function(n,e,t,i,r){return null},x=t(49299),w=t(2068),b=t(51705),v=t(18791);let S={configure:n=>{i.Z.configure(n)}}},9079:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applicants",function(){return t(43348)}])},520:function(n,e,t){"use strict";t.d(e,{At:function(){return l},Cl:function(){return s},O7:function(){return r},PH:function(){return a},uX:function(){return o}});var i=t(81621);let r=(0,i.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n    }) \n    {\n      name\n    }\n}"),a=(0,i.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),o=(0,i.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n    }\n}"),l=(0,i.Ps)("\n  query getAllApps{\n  applicants{\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n  }\n}"),s=(0,i.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},96608:function(n,e,t){"use strict";var i=t(7297),r=t(85893);t(67294);var a=t(68777);function o(){let n=(0,i.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return o=function(){return n},n}let l=n=>{let e=a.ZP.p(o(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,r.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=l},43348:function(n,e,t){"use strict";t.r(e);var i=t(85893),r=t(66083);let a=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.default,{style:{marginTop:"1000px"}})});e.default=a},66083:function(n,e,t){"use strict";t.r(e);var i=t(85893),r=t(67294),a=t(63898),o=t(87357),l=t(96608),s=t(28201),c=t(29448),u=t(18972),d=t(55370),m=t(37887),p=t(520),f=t(41664),h=t.n(f),g=t(9473),x=t(71406);let w=()=>{let n=(0,g.v9)(n=>n.applicationData.appData),e=(0,g.I0)(),{loading:t,error:f,data:w}=(0,m.a)(p.At),[b,v]=(0,r.useState)(!1);if(t)return"Loading...";e((0,x.Fw)(w.applicants)),console.log(n);let S=n=>{v(n.currentTarget)},$=()=>{v(null)},C=[];if(n)return n.forEach((n,e)=>{C.push({id:e,number:e+1,name:n.name,email:n.email,applicatant:n.applicantType,state:n.State,district:n.District,status:n.status})}),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.Container,{children:[(0,i.jsx)(l.Z,{Text:"Applicant List",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,i.jsx)(s.Z,{onClick:S,style:{color:"white",fontSize:"50px",right:"100px",top:"20px",position:"absolute",cursor:"pointer"}}),(0,i.jsxs)(c.Z,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(b),onClose:$,children:[(0,i.jsx)(u.Z,{onClick:$,children:"Name"}),(0,i.jsx)("a",{href:"/passwordChange",children:(0,i.jsx)(u.Z,{onClick:$,children:"Change Password"})}),(0,i.jsx)(u.Z,{onClick:$,children:"Logout"})]}),(0,i.jsx)(o.Z,{sx:{height:"80vh",width:"90%",margin:"auto",background:"white",padding:"20px",borderRadius:"20px",marginBottom:"50px"},children:(0,i.jsx)(a._,{rows:C,columns:[{field:"number",headerName:" Details",width:150,editable:!1,selection:!1,renderCell:n=>(0,i.jsx)(h(),{href:"/applicantDetails/".concat(n.value),children:(0,i.jsx)("button",{children:"View Details"})})},{field:"name",headerName:" Name",width:150,editable:!1,selection:!1,renderCell:n=>(0,i.jsx)(h(),{href:"/applicantDetail/".concat(n.value),children:n.value})},{field:"email",headerName:"Email",width:200},{field:"applicatant",headerName:"Applicatant",width:150},{field:"state",headerName:"State",description:"This column has a value getter and is not sortable.",sortable:!1,width:160},{field:"district",headerName:"District",description:"This column has a value getter and is not sortable.",sortable:!1,width:160},{field:"status",headerName:"Status",minWidth:150,flex:.3}],initialState:{pagination:{paginationModel:{pageSize:8}}},pageSizeOptions:[5],disablecolumnSelectionOnClick:!0,displayRowCheckbox:!1})})]})})};e.default=w},55370:function(n,e,t){"use strict";t.r(e),t.d(e,{Container:function(){return l}});var i=t(7297),r=t(85893),a=t(68777);function o(){let n=(0,i.Z)(["\n  margin-top: 100px;\n"]);return o=function(){return n},n}let l=a.ZP.div(o()),s=()=>(0,r.jsx)("div",{children:"StyleImage"});e.default=s},64836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}},function(n){n.O(0,[1502,1664,3420,2249,240,9774,2888,179],function(){return n(n.s=9079)}),_N_E=n.O()}]);