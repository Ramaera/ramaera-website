"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1248],{9313:function(e,t,n){n.d(t,{Z:function(){return o}});var i,r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=(i={},function(e){return void 0===i[e]&&(i[e]=r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)),i[e]})},9434:function(e,t,n){n.r(t);var i=n(5893),r=n(5675),o=n.n(r),a=n(7294),s=n(1966),l=n(3615);let p=e=>{let{image:t=[]}=e,[n,r]=(0,a.useState)(!1),p=()=>{r(!n)};return console.log(n),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.CardContainer,{onClick:()=>{p()},children:(0,i.jsx)(s.Z,{style:{backgroundImage:"url(".concat(t.imageName,")"),backgroundPosition:"center",backgroundSize:"cover",opacity:"0.8"},shineStrength:.75,children:(0,i.jsx)(l.CardImg,{children:(0,i.jsxs)(l.CardDetails,{children:[(0,i.jsx)(l.Name,{children:t.name}),(0,i.jsx)(l.Title,{children:t.title})]})},t.id)})}),(0,i.jsx)(l.ZoomIn,{style:{zIndex:n?"100":"-1"},children:n&&(0,i.jsx)("div",{children:(0,i.jsxs)(l.Modal,{children:[(0,i.jsxs)(l.ModalContent,{children:[(0,i.jsx)(l.ZoomImage,{title:t.title,children:(0,i.jsx)(o(),{style:{objectFit:"cover"},src:t.imageName,alt:t.title,layout:"fill",objectFit:"cover",objectPosition:"center"})}),(0,i.jsx)(l.ZoomDetails,{style:{width:t.title?"50%":"0%",display:t.title?"block":"none"},children:t.title?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ZoomName,{children:t.name}),(0,i.jsx)(l.ZoomTitle,{children:t.title}),(0,i.jsx)(l.ZoomAbout,{children:t.about})]}):null})]}),(0,i.jsx)(l.CloseImg,{src:"/content/closeIcon.png",onClick:p})]})})})]})};t.default=p},3615:function(e,t,n){n.r(t),n.d(t,{CardContainer:function(){return w},CardDetails:function(){return k},CardImg:function(){return v},CloseImg:function(){return D},Modal:function(){return T},ModalContent:function(){return A},Name:function(){return Z},Title:function(){return j},ZoomAbout:function(){return N},ZoomDetails:function(){return P},ZoomImage:function(){return I},ZoomIn:function(){return M},ZoomName:function(){return C},ZoomTitle:function(){return H}});var i=n(7297),r=n(5893),o=n(9363);function a(){let e=(0,i.Z)(["\n  /* height: 50vh;\n   */\n"]);return a=function(){return e},e}function s(){let e=(0,i.Z)(["\n  color: #efefef;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 20vw;\n  height: 38vh;\n  min-width: 250px;\n  min-height: 230px;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  transition: all 0.3s;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n    vertical-align: top;\n  }\n"]);return s=function(){return e},e}function l(){let e=(0,i.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: -webkit-linear-gradient(\n    bottom,\n    rgba(0, 0, 0, 0.8) 0%,\n    transparent 100%\n  );\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  text-align: left;\n  padding: 0 0px 10px 15px;\n"]);return l=function(){return e},e}function p(){let e=(0,i.Z)(["\n  color: #a58e7c;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 1px;\n  margin: 3px 0;\n  font-size: 25px;\n"]);return p=function(){return e},e}function c(){let e=(0,i.Z)(["\n  font-weight: 300;\n  font-size: 20px;\n"]);return c=function(){return e},e}function d(){let e=(0,i.Z)(["\n  position: absolute;\n  margin: 2rem;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 600px) {\n    margin: 0;\n  }\n"]);return d=function(){return e},e}function u(){let e=(0,i.Z)(["\n  width: ",";\n  @media (max-width: 600px) {\n    width: 100% !important;\n    height: ",";\n  }\n  img {\n    width: 100%;\n    height: 100%;\n    vertical-align: top;\n    border-radius: 15px;\n    background-size: cover;\n  }\n"]);return u=function(){return e},e}function m(){let e=(0,i.Z)(["\n  padding: 0 100px 0 50px;\n  overflow-y: scroll;\n  @media (max-width: 600px) {\n    width: 100% !important;\n    padding: 0;\n  }\n"]);return m=function(){return e},e}function h(){let e=(0,i.Z)(["\n  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: personal !important;\n  font-weight: 400;\n  font-size: 2.2rem;\n"]);return h=function(){return e},e}function g(){let e=(0,i.Z)(["\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: #a58e7c;\n"]);return g=function(){return e},e}function f(){let e=(0,i.Z)(["\n  color: white;\n  margin: 20px 0;\n"]);return f=function(){return e},e}function x(){let e=(0,i.Z)(["\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n"]);return x=function(){return e},e}function y(){let e=(0,i.Z)(["\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  line-height: 1.4;\n  padding: 14px 28px;\n  width: 80%;\n  height: 75%;\n  padding: 50px;\n  display: flex;\n  justify-content: space-between;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  @media (max-width: 600px) {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    top: unset;\n    left: unset;\n    height: auto;\n    width: 90%;\n    margin: 20px;\n    max-height: 95svh;\n  }\n"]);return y=function(){return e},e}function b(){let e=(0,i.Z)(["\n  position: inherit;\n  top: 65px;\n  left: 88%;\n  width: 40px;\n  border-radius: 10px;\n  cursor: pointer;\n  @media (max-width: 600px) {\n    position: fixed;\n    top: 8px;\n    left: 88%;\n  }\n"]);return b=function(){return e},e}let w=o.ZP.div(a()),v=o.ZP.div(s()),k=o.ZP.div(l()),Z=o.ZP.div(p()),j=o.ZP.div(c()),M=o.ZP.div(d()),I=o.ZP.div(u(),e=>e.title?"50%":"100%",e=>e.title?"50vh":"100vh"),P=o.ZP.div(m()),C=o.ZP.h3(h()),H=o.ZP.h5(g()),N=o.ZP.p(f()),T=o.ZP.div(x()),A=o.ZP.div(y()),D=o.ZP.img(b()),L=()=>(0,r.jsx)("div",{children:"StyleImage"});t.default=L},5779:function(e,t,n){n.r(t),n.d(t,{images:function(){return r}});var i=n(5893);let r=[{id:"1",heading:"Our Leader",details:"With extensive industry experience, our leader leads from the front.",imageName:"https://images.unsplash.com/photo-1581014023865-4209099f2b71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",name:"Director1",title:"Director",tag:"lead",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:"2",imageName:"https://images.unsplash.com/photo-1581017601156-b4e8e53df291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",name:"Director2",title:"Director",tag:"lead",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:"3",imageName:"https://images.unsplash.com/photo-1580842579866-b985411b5bd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",name:"Director3",title:"Director",tag:"lead",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:"4",imageName:"https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Director4",title:"Director4",tag:"lead",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:"5",imageName:"https://images.unsplash.com/photo-1580986475035-f0778c60f5ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjV9&auto=format&fit=crop&w=633&q=80",name:"Director5",title:"Director5",tag:"lead",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:"11",heading:"Team",details:"This is our team, a lot of smiling happy people who work hard to empower your teams ",imageName:"https://images.unsplash.com/photo-1588676247761-be44a0265858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxkaXdhbGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",tag:"team"},{id:"12",imageName:"https://images.unsplash.com/photo-1554224116-a159ee9c504f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGhvbGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",tag:"team"},{id:"13",imageName:"https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"team"},{id:"14",imageName:"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"team"},{id:"15",imageName:"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",tag:"team"},{id:"16",imageName:"https://images.pexels.com/photos/6806085/pexels-photo-6806085.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"team"},{id:"17",imageName:"https://images.pexels.com/photos/7889239/pexels-photo-7889239.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"team"},{id:"18",imageName:"https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlYW0lMjBmZXN0dGl2YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",tag:"team"},{id:"21",heading:"Our Industry",details:"This is our team, a lot of smiling happy people who work hard to empower your teams ",imageName:"https://images.pexels.com/photos/264512/pexels-photo-264512.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"industry"},{id:"22",imageName:"https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"industry"},{id:"23",imageName:"https://plus.unsplash.com/premium_photo-1670315264837-3152c387b71d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGluZHVzdHJpYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",tag:"industry"},{id:"24",imageName:"https://images.pexels.com/photos/1058141/pexels-photo-1058141.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"industry"},{id:"25",imageName:"https://images.pexels.com/photos/3105242/pexels-photo-3105242.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"industry"},{id:"26",imageName:"https://images.pexels.com/photos/532006/pexels-photo-532006.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"industry"},{id:"27",imageName:"https://images.unsplash.com/photo-1546185058-592ead754d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",tag:"industry"},{id:"28",imageName:"https://images.unsplash.com/photo-1580088899613-487c4051af31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",tag:"industry"},{id:"29",imageName:"https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"industry"},{id:"31",heading:"We Celebrated",details:"This is our team, a lot of smiling happy people who work hard to empower your teams ",imageName:"https://images.pexels.com/photos/264512/pexels-photo-264512.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"fest"},{id:"32",imageName:"https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"fest"},{id:"33",imageName:"https://images.pexels.com/photos/532006/pexels-photo-532006.jpeg?auto=compress&cs=tinysrgb&w=1600",tag:"fest"}],o=()=>(0,i.jsx)("div",{children:"StyleImage"});t.default=o},4854:function(e,t,n){n.r(t);var i=n(5893),r=n(7294),o=n(6608),a=n(4734),s=n(5779),l=n(4930),p=n(9434);let c={},d=()=>{let[e,t]=(0,r.useState)("lead"),[n,d]=(0,r.useState)(["lead"]);return(0,r.useEffect)(()=>{d(s.images.filter(t=>t.tag===e))},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Gallery,{children:(0,i.jsxs)(a.ContainerTop,{children:[(0,i.jsx)(a.Image,{}),(0,i.jsx)(a.Heading,{children:(0,i.jsx)(o.Z,{Text:"Gallery",font:!0,lg:"linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",size:"2.5rem",fw:"400",lh:!0,xmsize:"3rem",xssize:"3rem",msize:"2.5rem",padding:"0",mpadding:"0"})}),(0,i.jsxs)(a.Tags,{className:"tags ",children:[(0,i.jsx)(u,{name:"lead",tagActive:"lead"===e,handleSetTag:t}),(0,i.jsx)(u,{name:"team",tagActive:"team"===e,handleSetTag:t}),(0,i.jsx)(u,{name:"industry",tagActive:"industry"===e,handleSetTag:t}),(0,i.jsx)(u,{name:"fest",tagActive:"fest"===e,handleSetTag:t})]})]})}),(0,i.jsx)(a.Display,{children:(0,i.jsx)(l.Iv,{options:c,children:(0,i.jsxs)(a.Container,{children:[(0,i.jsxs)(a.DisplayHeading,{children:[n[0].heading,(0,i.jsx)("p",{children:n[0].details})]}),(0,i.jsx)(a.ImageWrapper,{children:n.map(e=>(0,i.jsx)(a.DisplayWrapper,{children:(0,i.jsx)(a.DisplayCard,{children:(0,i.jsx)(p.default,{image:e},e.id)})}))})]})})})]})},u=e=>{let{name:t,handleSetTag:n,tagActive:r}=e;return(0,i.jsx)(a.Button,{className:"tag ".concat(r?"activeLine":null),onClick:()=>n(t),children:t.toUpperCase()})};t.default=d},4734:function(e,t,n){n.r(t),n.d(t,{Button:function(){return Z},Container:function(){return M},ContainerTop:function(){return b},Display:function(){return j},DisplayCard:function(){return H},DisplayHeading:function(){return I},DisplayWrapper:function(){return P},Gallery:function(){return y},Heading:function(){return v},Image:function(){return w},ImageWrapper:function(){return C},Tags:function(){return k}});var i=n(7297),r=n(5893),o=n(9363);function a(){let e=(0,i.Z)(["\n  height: 65vh;\n  width: 100vw;\n"]);return a=function(){return e},e}function s(){let e=(0,i.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n"]);return s=function(){return e},e}function l(){let e=(0,i.Z)(['\n  background-image: url("content/galleryImg.jpg");\n  height: 65vh;\n  width: 100%;\n  box-shadow: inset 0 0 50px 20px rgba(0, 0, 0, 0.5);\n  object-fit: contain;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center bottom;\n  box-shadow: inset 0 -100px 100px 1px rgb(0 0 0 / 100%);\n']);return l=function(){return e},e}function p(){let e=(0,i.Z)(["\n  position: absolute;\n  margin: auto;\n  top: 30vh;\n"]);return p=function(){return e},e}function c(){let e=(0,i.Z)(["\n  position: absolute;\n  text-align: center;\n  margin: 50px auto;\n  display: -webkit-box;\n  border-bottom: 1px solid grey;\n  -ms-flex-pack: justify;\n  padding-bottom: 10.5px;\n"]);return c=function(){return e},e}function d(){let e=(0,i.Z)(["\n  padding: 15px 40px;\n  color: white;\n  cursor: pointer;\n  @media (max-width: 600px) {\n    padding: 15px;\n  }\n"]);return d=function(){return e},e}function u(){let e=(0,i.Z)(["\n  background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(62, 62, 62) 100%);\n"]);return u=function(){return e},e}function m(){let e=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);return m=function(){return e},e}function h(){let e=(0,i.Z)(["\n  margin: 20px;\n  text-align: center;\n  color: white;\n  p {\n    font-size: 15px;\n    font-weight: 100;\n  }\n"]);return h=function(){return e},e}function g(){let e=(0,i.Z)(["\n  display: flex;\n  padding-bottom: 30px;\n"]);return g=function(){return e},e}function f(){let e=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2rem;\n  padding-bottom: 100px;\n  box-shadow: inset 0 -100px 100px 1px rgb(0 0 0 / 100%);\n"]);return f=function(){return e},e}function x(){let e=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  color: red;\n"]);return x=function(){return e},e}let y=o.ZP.div(a()),b=o.ZP.div(s()),w=o.ZP.div(l()),v=o.ZP.div(p()),k=o.ZP.div(c()),Z=o.ZP.p(d()),j=o.ZP.div(u()),M=o.ZP.div(m()),I=o.ZP.h1(h()),P=o.ZP.div(g()),C=o.ZP.div(f()),H=o.ZP.div(x()),N=()=>(0,r.jsx)("div",{children:"StyleImage"});t.default=N}}]);