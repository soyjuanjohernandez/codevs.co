"use strict";(self.webpackChunkcodevs_co=self.webpackChunkcodevs_co||[]).push([[9476],{365:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var a=r(1822),n=r(4848),t=r(8453),o=r(8478);const l={slug:"regex-in-css",title:"Expresiones regulares en CSS",authors:["juanjo"],tags:["css","regex","expresiones-regulares","frontend"],image:"./header_regex_css.PNG",hide_table_of_contents:!1},i=void 0,c={image:r(277).A,authorsImageUrls:[void 0]},d=[{value:"Selectores de Atributos en CSS",id:"selectores-de-atributos-en-css",level:2},{value:"Tipos de Selectores de Atributos",id:"tipos-de-selectores-de-atributos",level:2},{value:"1. <strong>Selector exacto (<code>[attr=&quot;value&quot;]</code>)</strong>:",id:"1-selector-exacto-attrvalue",level:3},{value:"2. <strong>Contiene una palabra exacta (<code>[attr~=&quot;value&quot;]</code>)</strong>:",id:"2-contiene-una-palabra-exacta-attrvalue",level:3},{value:"3. <strong>Empieza con (<code>[attr^=&quot;value&quot;]</code>)</strong>:",id:"3-empieza-con-attrvalue",level:3},{value:"4. <strong>Termina con (<code>[attr$=&quot;value&quot;]</code>)</strong>:",id:"4-termina-con-attrvalue",level:3},{value:"5. <strong>Contiene (<code>[attr*=&quot;value&quot;]</code>)</strong>:",id:"5-contiene-attrvalue",level:3}];function u(e){const s={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Regex in css",src:r(3599).A+"",width:"1000",height:"270"})}),"\n",(0,n.jsxs)(s.p,{children:["Las expresiones regulares, tambi\xe9n llamadas regex, son una herramienta poderosa para buscar y manipular textos. Aunque las expresiones regulares no son nativas de CSS, se pueden utilizar en combinaci\xf3n con ",(0,n.jsx)(s.strong,{children:"selectores de atributos"})," para aplicar estilos de manera precisa."]}),"\n",(0,n.jsx)(s.p,{children:"En este art\xedculo, exploraremos c\xf3mo las regex pueden ser aprovechadas en CSS para mejorar la flexibilidad y eficiencia de tus hojas de estilo."}),"\n",(0,n.jsx)(s.h2,{id:"selectores-de-atributos-en-css",children:"Selectores de Atributos en CSS"}),"\n",(0,n.jsxs)(s.p,{children:["Los selectores de atributos en CSS permiten seleccionar elementos bas\xe1ndose en el valor de uno de sus atributos. Estos selectores son muy \xfatiles para aplicar estilos a elementos espec\xedficos sin necesidad de a\xf1adir clases adicionales o modificar el HTML. Los selectores de atributos se escriben entre corchetes (",(0,n.jsx)(s.code,{children:"[]"}),") y pueden ser utilizados de varias maneras para lograr diferentes niveles de coincidencia."]}),"\n",(0,n.jsx)(s.h2,{id:"tipos-de-selectores-de-atributos",children:"Tipos de Selectores de Atributos"}),"\n",(0,n.jsxs)(s.h3,{id:"1-selector-exacto-attrvalue",children:["1. ",(0,n.jsxs)(s.strong,{children:["Selector exacto (",(0,n.jsx)(s.code,{children:'[attr="value"]'}),")"]}),":"]}),"\n",(0,n.jsxs)(s.p,{children:["Selecciona elementos cuyo atributo ",(0,n.jsx)(s.code,{children:"attr"})," es exactamente igual a ",(0,n.jsx)(s.code,{children:"value"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",metastring:'title="CSS"',children:'a[href="https://example.com"] {\r\n    color: red;\r\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",metastring:'title="HTML"',children:'<a href="https://example.com">Example</a>\r\n<a href="https://another.com">Another</a>\n'})}),"\n",(0,n.jsx)(s.admonition,{title:"Resultado",type:"info",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{href:"https://example.com",style:{color:"red"},children:"Example"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://another.com",children:"Another"})]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.h3,{id:"2-contiene-una-palabra-exacta-attrvalue",children:["2. ",(0,n.jsxs)(s.strong,{children:["Contiene una palabra exacta (",(0,n.jsx)(s.code,{children:'[attr~="value"]'}),")"]}),":"]}),"\n",(0,n.jsxs)(s.p,{children:["Selecciona elementos cuyo atributo ",(0,n.jsx)(s.code,{children:"attr"})," contiene una palabra exacta ",(0,n.jsx)(s.code,{children:"value"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",metastring:'title="CSS"',children:'[title~="flower"] {\r\n    border: 1px solid red;\r\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",metastring:'title="HTML"',children:'<div title="red flower">Red Flower</div>\r\n<div title="blue sky">Blue Sky</div>\n'})}),"\n",(0,n.jsxs)(s.admonition,{title:"Resultado",type:"info",children:[(0,n.jsx)("div",{title:"red flower",style:{border:"1px solid red"},children:"Red Flower"}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{title:"blue sky",children:"Blue Sky"})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.h3,{id:"3-empieza-con-attrvalue",children:["3. ",(0,n.jsxs)(s.strong,{children:["Empieza con (",(0,n.jsx)(s.code,{children:'[attr^="value"]'}),")"]}),":"]}),"\n",(0,n.jsxs)(s.p,{children:["Selecciona elementos cuyo atributo ",(0,n.jsx)(s.code,{children:"attr"})," empieza con ",(0,n.jsx)(s.code,{children:"value"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",metastring:'title="CSS"',children:'a[href^="https"] {\r\n    color: green;\r\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",metastring:'title="HTML"',children:'<a href="https://example.com">Secure Link</a>\r\n<a href="http://example.com">Insecure Link</a>\n'})}),"\n",(0,n.jsxs)(s.admonition,{title:"Resultado",type:"info",children:[(0,n.jsx)("a",{href:"https://example.com",style:{color:"green"},children:"Secure Link"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"http://example.com",children:"Insecure Link"})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.h3,{id:"4-termina-con-attrvalue",children:["4. ",(0,n.jsxs)(s.strong,{children:["Termina con (",(0,n.jsx)(s.code,{children:'[attr$="value"]'}),")"]}),":"]}),"\n",(0,n.jsxs)(s.p,{children:["Selecciona elementos cuyo atributo ",(0,n.jsx)(s.code,{children:"attr"})," termina con ",(0,n.jsx)(s.code,{children:"value"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",metastring:'title="CSS"',children:'a[href$=".pdf"] {\r\n    color: red;\r\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",metastring:'title="HTML"',children:'<a href="document.pdf">PDF Document</a>\r\n<a href="image.png">Image</a>\n'})}),"\n",(0,n.jsxs)(s.admonition,{title:"Resultado",type:"info",children:[(0,n.jsx)("a",{href:"document.pdf",style:{color:"red"},children:"PDF Document"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"image.png",children:"Image"})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.h3,{id:"5-contiene-attrvalue",children:["5. ",(0,n.jsxs)(s.strong,{children:["Contiene (",(0,n.jsx)(s.code,{children:'[attr*="value"]'}),")"]}),":"]}),"\n",(0,n.jsxs)(s.p,{children:["Selecciona elementos cuyo atributo ",(0,n.jsx)(s.code,{children:"attr"})," contiene ",(0,n.jsx)(s.code,{children:"value"})," en cualquier parte."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",metastring:'title="CSS"',children:'a[href*="example"] {\r\n     color: red;\r\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",metastring:'title="HTML"',children:'<a href="https://example.com">Example</a>\r\n<a href="https://test.com">Test</a>\n'})}),"\n",(0,n.jsxs)(s.admonition,{title:"Resultado",type:"info",children:[(0,n.jsx)("a",{href:"https://example.com",style:{color:"red"},children:"Example"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://test.com",children:"Test"})]}),"\n",(0,n.jsx)(s.p,{children:"Estos selectores permiten una gran flexibilidad y pueden ser combinados con otros selectores para crear reglas de estilo m\xe1s espec\xedficas y poderosas."}),"\n",(0,n.jsx)(o.A,{})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8478:(e,s,r)=>{r.d(s,{A:()=>t});var a=r(1399),n=r(4848);function t(){const e="window.location.href",s="document.title",r=48;return(0,n.jsxs)("div",{className:"share-buttons",children:[(0,n.jsx)("br",{}),(0,n.jsx)("h3",{children:"Compartir"}),(0,n.jsx)("br",{}),(0,n.jsx)(a.Yh,{url:e,quote:s,borderRadius:8,size:r,className:"cosa"}),(0,n.jsx)(a.LK,{url:e,title:s,borderRadius:8,size:r}),(0,n.jsx)(a.Sz,{url:e,blankTarget:!0,borderRadius:8,size:r}),(0,n.jsx)(a.gM,{url:e,title:s,separator:":: ",blankTarget:!0,borderRadius:8,size:r}),(0,n.jsx)(a.VS,{url:e,borderRadius:8,size:r}),(0,n.jsx)(a.mc,{url:e,borderRadius:8,size:r})]})}},277:(e,s,r)=>{r.d(s,{A:()=>a});const a=r.p+"assets/images/header_regex_css-d57304bd92f83319f1ef1d53d5433e76.PNG"},3599:(e,s,r)=>{r.d(s,{A:()=>a});const a=r.p+"assets/images/header_regex_css-d57304bd92f83319f1ef1d53d5433e76.PNG"},1822:e=>{e.exports=JSON.parse('{"permalink":"/blog/regex-in-css","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/regex-css/regex-css.mdx","source":"@site/blog/regex-css/regex-css.mdx","title":"Expresiones regulares en CSS","description":"Regex in css","date":"2025-01-10T14:44:24.979Z","tags":[{"inline":false,"label":"CSS","permalink":"/blog/tags/css","description":"Aprende CSS, el lenguaje de estilos para dise\xf1ar p\xe1ginas web atractivas."},{"inline":false,"label":"Regex","permalink":"/blog/tags/regex","description":"Todo sobre expresiones regulares, patrones de b\xfasqueda y manipulaci\xf3n de texto."},{"inline":false,"label":"Expresiones regulares","permalink":"/blog/tags/expresiones-regulares","description":"Todo sobre expresiones regulares, patrones de b\xfasqueda y manipulaci\xf3n de texto."},{"inline":false,"label":"Frontend","permalink":"/blog/tags/frontend","description":"Explora el desarrollo front-end, desde el dise\xf1o hasta la interacci\xf3n del usuario."}],"readingTime":1.92,"hasTruncateMarker":true,"authors":[{"name":"Juan Jos\xe9 Pel\xe1ez","title":"Codevs member","url":"https://soyjuanjohernandez.github.io/juanjoWeb/","page":{"permalink":"/blog/authors/all-juanjo-articles"},"socials":{"x":"https://x.com/soyjuanjoh","linkedin":"https://www.linkedin.com/in/soyjuanjohernandez/","github":"https://github.com/soyjuanjohernandez","newsletter":"https://soyjuanjohernandez.github.io/juanjoWeb/"},"imageURL":"https://github.com/soyjuanjohernandez.png","key":"juanjo"}],"frontMatter":{"slug":"regex-in-css","title":"Expresiones regulares en CSS","authors":["juanjo"],"tags":["css","regex","expresiones-regulares","frontend"],"image":"./header_regex_css.PNG","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Diferencia entre funciones normales y funciones flecha en javascript","permalink":"/blog/regular-vs-arrow"},"nextItem":{"title":"\xa1Bienvenidos a codevs.co!","permalink":"/blog/welcome"}}')}}]);