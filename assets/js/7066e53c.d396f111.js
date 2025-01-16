"use strict";(self.webpackChunkcodevs_co=self.webpackChunkcodevs_co||[]).push([[9086],{3081:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var r=s(6761),a=s(4848),o=s(8453);const c={slug:"regular-vs-arrow",title:"Diferencia entre funciones normales y funciones flecha en javascript",authors:["juanjo"],tags:["javascript","frontend","conceptos-basicos"],image:"./functions.png",hide_table_of_contents:!1},i=void 0,t={image:s(5154).A,authorsImageUrls:[void 0]},l=[{value:"1. <strong>Sintaxis</strong>",id:"1-sintaxis",level:3},{value:"Veamos la transformaci\xf3n de una funci\xf3n normal a una funci\xf3n flecha en su m\xednima expreci\xf3n:",id:"veamos-la-transformaci\xf3n-de-una-funci\xf3n-normal-a-una-funci\xf3n-flecha-en-su-m\xednima-expreci\xf3n",level:3},{value:"2. <strong><code>this</code> y el contexto</strong>",id:"2-this-y-el-contexto",level:3},{value:"3. <strong>Uso con constructores</strong>",id:"3-uso-con-constructores",level:3},{value:"4. <strong><code>arguments</code></strong>",id:"4-arguments",level:3},{value:"Resumen:",id:"resumen",level:3}];function d(n){const e={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"funciones JS",src:s(3908).A+"",width:"1080",height:"380"})}),"\n",(0,a.jsxs)(e.p,{children:["La diferencia principal entre una ",(0,a.jsx)(e.strong,{children:"funcion flecha - arrow function"})," y una ",(0,a.jsx)(e.strong,{children:"funci\xf3n normal"})," en JavaScript  radica en c\xf3mo manejan el contexto de ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"this"})}),", aunque tambi\xe9n hay diferencias de sintaxis."]}),"\n",(0,a.jsxs)(e.h3,{id:"1-sintaxis",children:["1. ",(0,a.jsx)(e.strong,{children:"Sintaxis"})]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Funci\xf3n normal"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"function sumar(a, b) {\r\n  return a + b;\r\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Funcion flecha - Arrow function"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:"showLineNumbers",children:"const sumar = (a, b) => {\r\n  return a + b;\r\n};\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Diferencias:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Las ",(0,a.jsx)(e.strong,{children:"arrow functions"})," pueden tener una sintaxis m\xe1s corta."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Si solo tienen una expresi\xf3n, el resultado se retorna autom\xe1ticamente (sin necesidad de usar ",(0,a.jsx)(e.code,{children:"return"}),"), esto se conoce como ",(0,a.jsx)(e.strong,{children:"retorno impl\xedcito"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"const sumar = (a, b) => a + b;\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Si hay un solo par\xe1metro, se pueden omitir los par\xe9ntesis:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const cuadrado = (x) => x * x;\n"})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(e.h3,{id:"veamos-la-transformaci\xf3n-de-una-funci\xf3n-normal-a-una-funci\xf3n-flecha-en-su-m\xednima-expreci\xf3n",children:"Veamos la transformaci\xf3n de una funci\xf3n normal a una funci\xf3n flecha en su m\xednima expreci\xf3n:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Funci\xf3n normal"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"function sumar(a, b) {\r\n  return a + b;\r\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Convirtiendola en funci\xf3n flecha"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:"showLineNumbers",children:"const sumar = (a, b) => {\r\n  return a + b;\r\n};\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Al solo retornar una exprei\xf3n se deja el retorno impl\xedcito"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",metastring:"showLineNumbers",children:"const sumar = (a, b) => a + b;\n"})}),"\n"]}),"\n",(0,a.jsx)(e.li,{}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.h3,{id:"2-this-y-el-contexto",children:["2. ",(0,a.jsxs)(e.strong,{children:[(0,a.jsx)(e.code,{children:"this"})," y el contexto"]})]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Funci\xf3n normal"}),":"]}),"\n",(0,a.jsxs)(e.p,{children:["El valor de ",(0,a.jsx)(e.code,{children:"this"})," depende de c\xf3mo se llama a la funci\xf3n. Puede cambiar seg\xfan el contexto, por ejemplo, si se usa en un objeto, evento o funci\xf3n constructora."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const obj = {\r\n  valor: 10,\r\n  sumar: function () {\r\n    return this.valor + 5;\r\n  },\r\n};\r\n\r\nconsole.log(obj.sumar()); // 15\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Arrow function"}),":"]}),"\n",(0,a.jsxs)(e.p,{children:["Al utilizar una funci\xf3n de flecha esta no crea autom\xe1ticamente una variable ",(0,a.jsx)(e.code,{children:"this"}),". Como resultado, cualquier referencia a ",(0,a.jsx)(e.code,{children:"this"})," apuntar\xeda a lo que ",(0,a.jsx)(e.code,{children:"this"})," era antes de que se creara la funci\xf3n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const obj = {\r\n  valor: 10,\r\n  sumar: () => this.valor + 5, // `this` no apunta al objeto\r\n};\r\n\r\nconsole.log(obj.sumar()); // NaN, porque `this.valor` es undefined\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const obj = {\r\n  nombre: 'Juanjo',\r\n  print: () => console.log(this) // `this` no apunta al objeto\r\n};\r\n\r\nconsole.log(obj.print()); // Window (objeto global)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Esto hace que las ",(0,a.jsx)(e.strong,{children:"arrow functions"})," sean ideales para callbacks, como en los m\xe9todos de array o los manejadores de eventos, donde no se desea que ",(0,a.jsx)(e.code,{children:"this"})," cambie."]}),"\n",(0,a.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.h3,{id:"3-uso-con-constructores",children:["3. ",(0,a.jsx)(e.strong,{children:"Uso con constructores"})]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Funci\xf3n normal"}),":\r\nSe pueden usar funciones normales como constructores con ",(0,a.jsx)(e.code,{children:"new"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'function Persona(nombre) {\r\n  this.nombre = nombre;\r\n}\r\nconst persona = new Persona("Juan");\r\nconsole.log(persona.nombre); // "Juan"\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Arrow function"}),":\r\nNo se pueden usar como constructores y lanzan un error si intentas hacerlo."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'const Persona = (nombre) => {\r\n  this.nombre = nombre;\r\n};\r\nconst persona = new Persona("Juan"); // Error: Persona is not a constructor\n'})}),"\n",(0,a.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.h3,{id:"4-arguments",children:["4. ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.code,{children:"arguments"})})]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Funci\xf3n normal"}),":\r\nLas funciones normales tienen acceso al objeto especial ",(0,a.jsx)(e.code,{children:"arguments"}),", que contiene los par\xe1metros pasados."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"function sumar() {\r\n  return Array.from(arguments).reduce((a, b) => a + b);\r\n}\r\n\r\nconsole.log(sumar(1, 2, 3)); // 6\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Arrow function"}),":\r\nLas arrow functions no tienen ",(0,a.jsx)(e.code,{children:"arguments"}),", pero se puede usar el operador ",(0,a.jsx)(e.a,{href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters",children:(0,a.jsx)(e.strong,{children:"rest"})})," agregado en la versi\xf3n de Ecmascript 2015 ES5 (",(0,a.jsx)(e.code,{children:"...args"}),")."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const sumar = (...args) => args.reduce((a, b) => a + b);\r\n\r\nconsole.log(sumar(1, 2, 3)); // 6\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"resumen",children:"Resumen:"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Caracter\xedstica"}),(0,a.jsx)(e.th,{children:"Funci\xf3n Normal"}),(0,a.jsx)(e.th,{children:"Arrow Function"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Sintaxis"}),(0,a.jsx)(e.td,{children:"Verbosa"}),(0,a.jsx)(e.td,{children:"M\xe1s corta"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"this"})}),(0,a.jsx)(e.td,{children:"Depende del contexto de ejecuci\xf3n"}),(0,a.jsxs)(e.td,{children:["Hereda el ",(0,a.jsx)(e.code,{children:"this"})," del contexto"]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Uso como constructor"}),(0,a.jsx)(e.td,{children:"Permitido"}),(0,a.jsx)(e.td,{children:"No permitido"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:(0,a.jsx)(e.code,{children:"arguments"})}),(0,a.jsx)(e.td,{children:"Disponible"}),(0,a.jsxs)(e.td,{children:["No disponible, usa ",(0,a.jsx)(e.code,{children:"...args"})]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Retorno impl\xedcito"}),(0,a.jsx)(e.td,{children:"No"}),(0,a.jsx)(e.td,{children:"S\xed, si es una sola expresi\xf3n"})]})]})]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},5154:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/functions-3d5aef12bf4c28af562484e3800885ba.png"},3908:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/functions-3d5aef12bf4c28af562484e3800885ba.png"},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>i});var r=s(6540);const a={},o=r.createContext(a);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),r.createElement(o.Provider,{value:e},n.children)}},6761:n=>{n.exports=JSON.parse('{"permalink":"/blog/regular-vs-arrow","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/regular-vs-arrow/regular-vs-arrow.md","source":"@site/blog/regular-vs-arrow/regular-vs-arrow.md","title":"Diferencia entre funciones normales y funciones flecha en javascript","description":"funciones JS","date":"2025-01-16T18:38:20.000Z","tags":[{"inline":false,"label":"JavaScript","permalink":"/blog/tags/javascript","description":"Aprende sobre JavaScript, el lenguaje de programaci\xf3n esencial para el desarrollo web interactivo."},{"inline":false,"label":"Frontend","permalink":"/blog/tags/frontend","description":"Explora el desarrollo front-end, desde el dise\xf1o hasta la interacci\xf3n del usuario."},{"inline":false,"label":"Conceptos b\xe1sicos","permalink":"/blog/tags/conceptos-basicos","description":"Aprende los conceptos b\xe1sicos de tecnolog\xedas y herramientas."}],"readingTime":3.095,"hasTruncateMarker":true,"authors":[{"name":"Juan Jos\xe9 Pel\xe1ez","title":"Codevs member","url":"https://soyjuanjohernandez.github.io/juanjoWeb/","page":{"permalink":"/blog/authors/all-juanjo-articles"},"socials":{"x":"https://x.com/soyjuanjoh","linkedin":"https://www.linkedin.com/in/soyjuanjohernandez/","github":"https://github.com/soyjuanjohernandez","newsletter":"https://soyjuanjohernandez.github.io/juanjoWeb/"},"imageURL":"https://github.com/soyjuanjohernandez.png","key":"juanjo"}],"frontMatter":{"slug":"regular-vs-arrow","title":"Diferencia entre funciones normales y funciones flecha en javascript","authors":["juanjo"],"tags":["javascript","frontend","conceptos-basicos"],"image":"./functions.png","hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Expresiones regulares en CSS","permalink":"/blog/regex-in-css"}}')}}]);