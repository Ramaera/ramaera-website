(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9531],{37162:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/ContactDetails/contactInfo",function(){return a(93916)}])},520:function(n,e,a){"use strict";a.d(e,{At:function(){return s},Cl:function(){return r},O7:function(){return i},PH:function(){return m},uX:function(){return o}});var t=a(81621);let i=(0,t.Ps)("\nmutation creator ($District: String!,\n$State: String!,\n$applicantAddress: String!,\n$applicantType: ApplicantType!,\n$email: String!,\n$firmName: String!,\n$mobileNumber: String!,\n$name: String!,\n){createApplication(\n    data: {\n      name: $name\n      applicantType: $applicantType\n      applicantAddress: $applicantAddress\n      email: $email\n      firmName: $firmName\n      mobileNumber: $mobileNumber\n      District: $District\n      State: $State\n    }) \n    {\n      name\n    }\n}"),m=(0,t.Ps)("\nmutation createUs (\n  $name: String!,\n      $email: String!\n      $company: String!,\n      $Subject: String!,\n     $message: String!,\n){createContactUsResponse(\n    data: {\n      name: $name\n      email: $email\n      company: $company\n      Subject: $Subject\n      message: $message\n    }) \n    {\n      name\n    }\n}"),o=(0,t.Ps)("\nmutation loginUser (\n$email: String!,\n$password: String!,\n){login(\n    data: {\n      email: $email\n      password: $password\n    }) \n    {\n      accessToken\n    }\n}"),s=(0,t.Ps)("\n  query getAllApps{\n  applicants{\n    name\n    email\n    District\n    State\n    applicantType\n    applicantAddress\n    firmName\n    mobileNumber\n  }\n}"),r=(0,t.Ps)("\n  query getContactResponses{\n    contactUsRepsonses{\n      name\n      email\n      company\n      Subject\n      message\n  }\n}")},96608:function(n,e,a){"use strict";var t=a(7297),i=a(85893);a(67294);var m=a(68777);function o(){let n=(0,t.Z)(["\n    font-size: ",";\n    color: ",";\n    border-bottom: ",";\n    text-align: ",";\n    letter-spacing: ",";\n    line-height: ",";\n    font-weight: ",";\n    margin: ",";\n    background: ",";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: ",";\n    background-clip: text;\n    text-fill-color: transparent;\n    font-family: "," !important;\n    width: ",";\n    opacity: 0.99;\n    text-shadow: ",";\n\n    padding: ",";\n    overflow-y: ",";\n    text-transform: ",";\n    &:hover {\n      color: ",";\n    }\n\n    &:hover {\n      background: ",";\n      -webkit-background-clip: ",";\n      -webkit-text-fill-color: ",";\n      background-clip: ",";\n      text-fill-color: ",";\n    }\n    @media only screen and (max-width: 1200px) {\n      font-size: ",";\n      width: ",";\n    //  margin: ",";\n    }\n    @media only screen and (max-width: 1000px) {\n      font-size: ",";\n    }\n\n    @media only screen and (max-width: 768px) {\n      font-size: ",";\n      width: ",";\n      text-align: ",";\n      line-height: ",";\n      padding: ",";\n      margin: ",";\n    }\n    @media only screen and (max-width: 400px) {\n      width: ",";\n      font-size: ",";\n      margin: ",";\n    }\n  "]);return o=function(){return n},n}let s=n=>{let e=m.ZP.p(o(),n.size?n.size:"22px",n.color?n.color:"#ffffff",n.bbottom?n.bbottom:"",n.align?n.align:"left",n.ls?n.ls:"0em",n.lh?n.lh:"25px",n.fw?n.fw:"bold",n.m?n.m:"",n.lg?n.lg:"linear-gradient(90deg, #E65C00 0%, #F9D423 100%)",n.lg?"transparent":"",n.font?"personal":"",n.width?n.width:"",n.tsdo?n.tsdo:"",n.padding?n.padding:"2vw",n.overflowY?n.overflowY:"",n.ttransform?n.ttransform:"",n.hoverColor?n.hoverColor:null,n.headHover?"linear-gradient(90deg, #ffe259 0%, #ffa751 100%)":"",n.headHover?"text":"",n.headHover?"transparent":"",n.headHover?"text":"",n.headHover?"transparent":"",n.xmsize?n.xmsize:"20px",n.miwidth?n.miwidth:"",n.mimargin?n.mimargin:"",n.xssize?n.xssize:"18px",n.msize?n.msize:"17px",n.mwidth?n.mwidth:"100vw;",n.mta?n.mta:"center",n.mlh&&n.mlh,n.mpadding?n.mpadding:"2vw",n.mmargin?n.mmargin:"",n.mmwidth?n.mmwidth:"100vw;",n.mmsize?n.mmsize:"",n.mm?n.mm:"");return(0,i.jsx)(e,{children:n.Text?n.Text:"Default Text"})};e.Z=s},3707:function(n,e,a){"use strict";a.r(e),a.d(e,{data:function(){return i}});var t=a(85893);let i=[{id:"1",name:"kabir",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Distributor",firm:"abc",subject:"Bihar",message:"Banka",status:"Accepted"},{id:"2",name:"kavish",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"UP",message:"...",status:"Rejected"},{id:"3",name:"Qubees",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Accepted"},{id:"4",name:"Xyz",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Accepted"},{id:"5",name:"moh",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Rejected"},{id:"6",name:"moh",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Rejected"},{id:"7",name:"moh",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Rejected"},{id:"8",name:"moh",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Rejected"},{id:"9",name:"moh",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Rejected"},{id:"10",name:"moh",email:"kab@gmail.com",dob:"12/2/1990",contact:"9876543210",company:"Stockist",firm:"abc",subject:"Bihar",message:"Banka",status:"Rejected"}],m=()=>(0,t.jsx)("div",{children:"StyleImage"});e.default=m},93916:function(n,e,a){"use strict";a.r(e);var t=a(85893);a(67294);var i=a(63898),m=a(87357),o=a(96608);a(3707);var s=a(37887),r=a(520);let c=()=>{let{loading:n,error:e,data:a}=(0,s.a)(r.Cl),c=[];return a&&a.contactUsRepsonses.forEach(n=>{c.push({id:n.name,name:n.name,email:n.email,company:n.company,subject:n.Subject,message:n.message})}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(o.Z,{Text:"Contact Us Page Submittions",lg:"linear-gradient(to right, #ffa73d, gold)",font:!0,size:"clamp(2.2rem, 1.2vw, 1.5rem)",fw:"400",align:"center",lh:"50px",m:"0 0 1rem 0",xmsize:"clamp(2.4rem, 1.5vw, 2rem)",xssize:"clamp(2.4rem, 1.5vw, 2rem)",msize:"2rem",mwidth:"100%",padding:"0",mpadding:"0",mta:"center",mlh:"unset"}),(0,t.jsx)(m.Z,{sx:{height:"80vh",width:"90%",margin:"auto",background:"white",padding:"20px",borderRadius:"20px",marginBottom:"50px"},children:(0,t.jsx)(i._,{rows:c,columns:[{field:"name",headerName:" Name",width:150,editable:!1,selection:!1},{field:"email",headerName:"Email",width:200},{field:"company",headerName:"Company",width:200},{field:"subject",headerName:"Subject",description:"This column has a value getter and is not sortable.",sortable:!1,width:250},{field:"message",headerName:"Message",description:"This column has a value getter and is not sortable.",sortable:!1,width:450}],initialState:{pagination:{paginationModel:{pageSize:8}}},pageSizeOptions:[8],disablecolumnSelectionOnClick:!0,displayRowCheckbox:!1,disableRowSelectionOnClick:!0})})]})})};e.default=c}},function(n){n.O(0,[1502,3420,2249,240,9774,2888,179],function(){return n(n.s=37162)}),_N_E=n.O()}]);