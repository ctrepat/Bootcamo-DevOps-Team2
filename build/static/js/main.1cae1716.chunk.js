(this["webpackJsonplandingpage-react-template"]=this["webpackJsonplandingpage-react-template"]||[]).push([[0],{14:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var s=t(1),i=t.n(s),c=t(6),l=t.n(c),o=(t(14),t(3)),n=t(0),r=function(e){return Object(n.jsx)("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"navbar-header",children:[Object(n.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[" ",Object(n.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(n.jsx)("span",{className:"icon-bar"})," ",Object(n.jsx)("span",{className:"icon-bar"})," ",Object(n.jsx)("span",{className:"icon-bar"})," "]}),Object(n.jsx)("a",{className:"navbar-brand page-scroll",href:"#page-top",children:"Bootcamp DevOps"})," "]}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:Object(n.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#features",className:"page-scroll"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#about",className:"page-scroll"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#services",className:"page-scroll"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#portfolio",className:"page-scroll"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#testimonials",className:"page-scroll"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#team",className:"page-scroll",children:"Team"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#contact",className:"page-scroll",children:"Contact"})})]})})]})})},m=function(e){return Object(n.jsx)("header",{id:"header",children:Object(n.jsx)("div",{className:"intro",children:Object(n.jsx)("div",{className:"overlay",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-md-8 col-md-offset-2 intro-text",children:[Object(n.jsxs)("h1",{children:[e.data?e.data.title:"Loading",Object(n.jsx)("span",{})]}),Object(n.jsx)("p",{children:e.data?e.data.paragraph:"Loading"}),Object(n.jsx)("a",{href:"#Team",className:"btn btn-custom btn-lg page-scroll",children:"Learn More"})," "]})})})})})})},d=function(e){return Object(n.jsx)("div",{id:"team",className:"text-center",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"col-md-8 col-md-offset-2 section-title",children:[Object(n.jsx)("h2",{children:"Meet the Team"}),Object(n.jsx)("p",{children:"Equipo 2"})]}),Object(n.jsx)("div",{id:"row",children:e.data?e.data.map((function(e,a){return Object(n.jsx)("div",{className:"col-md-3 col-sm-6 team",children:Object(n.jsxs)("div",{className:"thumbnail",children:[" ",Object(n.jsx)("img",{src:e.img,alt:"...",className:"team-img"}),Object(n.jsxs)("div",{className:"caption",children:[Object(n.jsx)("h4",{children:e.name}),Object(n.jsx)("p",{children:e.job})]})]})},"".concat(e.name,"-").concat(a))})):"loading"})]})})},j=t(2),b=t(4),p=t(7),g=t.n(p),u={name:"",email:"",message:""},h=function(e){var a=Object(s.useState)(u),t=Object(o.a)(a,2),i=t[0],c=i.name,l=i.email,r=i.message,m=t[1],d=function(e){var a=e.target,t=a.name,s=a.value;m((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},t,s))}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"contact",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h2",{children:"Get In Touch"}),Object(n.jsx)("p",{children:"Please fill out the form below to send us an email and we will get back to you as soon as possible."})]}),Object(n.jsxs)("form",{name:"sentMessage",validate:!0,onSubmit:function(e){e.preventDefault(),console.log(c,l,r),g.a.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",e.target,"YOUR_USER_ID").then((function(e){console.log(e.text),m(Object(b.a)({},u))}),(function(e){console.log(e.text)}))},children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",placeholder:"Name",required:!0,onChange:d}),Object(n.jsx)("p",{className:"help-block text-danger"})]})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"Email",required:!0,onChange:d}),Object(n.jsx)("p",{className:"help-block text-danger"})]})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0,onChange:d}),Object(n.jsx)("p",{className:"help-block text-danger"})]}),Object(n.jsx)("div",{id:"success"}),Object(n.jsx)("button",{type:"submit",className:"btn btn-custom btn-lg",children:"Send Message"})]})]})}),Object(n.jsxs)("div",{className:"col-md-3 col-md-offset-1 contact-info",children:[Object(n.jsxs)("div",{className:"contact-item",children:[Object(n.jsx)("h3",{children:"Contact Info"}),Object(n.jsxs)("p",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-map-marker"})," Address"]}),e.data?e.data.address:"loading"]})]}),Object(n.jsx)("div",{className:"contact-item",children:Object(n.jsxs)("p",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-phone"})," Phone"]})," ",e.data?e.data.phone:"loading"]})}),Object(n.jsx)("div",{className:"contact-item",children:Object(n.jsxs)("p",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})," ",e.data?e.data.email:"loading"]})})]}),Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"social",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.data?e.data.facebook:"/",children:Object(n.jsx)("i",{className:"fa fa-facebook"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.data?e.data.twitter:"/",children:Object(n.jsx)("i",{className:"fa fa-twitter"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:e.data?e.data.youtube:"/",children:Object(n.jsx)("i",{className:"fa fa-youtube"})})})]})})})})]})}),Object(n.jsx)("div",{id:"footer",children:Object(n.jsx)("div",{className:"container text-center",children:Object(n.jsxs)("p",{children:["\xa9 2020 Issaaf Kattan React Land Page Template. Design by"," ",Object(n.jsx)("a",{href:"http://www.templatewire.com",rel:"nofollow",children:"TemplateWire"})]})})})]})},f=t(8),x=t(9),O=t.n(x),v=(t(19),new O.a('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),function(){var e=Object(s.useState)({}),a=Object(o.a)(e,2),t=a[0],i=a[1];return Object(s.useEffect)((function(){i(f)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(r,{}),Object(n.jsx)(m,{data:t.Header}),Object(n.jsx)(d,{data:t.Team}),Object(n.jsx)(h,{data:t.Contact})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"Header":{"title":"Trabajo Integrador Equipo 2","paragraph":"FASE 3 del Bootcamp DevOps Enginner de EducacionIT"},"About":{"paragraph":"Equipo 2","Why":["Lorem ipsum dolor","Tempor incididunt","Lorem ipsum dolor","Incididunt ut labore"],"Why2":["Aliquip ex ea commodo","Lorem ipsum dolor","Exercitation ullamco","Lorem ipsum dolor"]},"Gallery":[{"title":"Project Title","largeImage":"img/portfolio/01-large.jpg","smallImage":"img/portfolio/01-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/02-large.jpg","smallImage":"img/portfolio/02-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/03-large.jpg","smallImage":"img/portfolio/03-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/04-large.jpg","smallImage":"img/portfolio/04-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/05-large.jpg","smallImage":"img/portfolio/05-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/06-large.jpg","smallImage":"img/portfolio/06-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/07-large.jpg","smallImage":"img/portfolio/07-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/08-large.jpg","smallImage":"img/portfolio/08-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/09-large.jpg","smallImage":"img/portfolio/09-small.jpg"}],"Services":[{"icon":"fa fa-wordpress","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cart-arrow-down","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cloud-download","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-language","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-plane","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-pie-chart","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."}],"Team":[{"img":"img/team/Team1.jpg","name":"\xc1vila Rafael","job":"IT Cordinador"},{"img":"img/team/Team2.jpg","name":"Lucha Fabian","job":"Recepcionista Hotel Royal Princess"},{"img":"img/team/Team3.jpg","name":"Bell\xf3n Lorena","job":"Ingeniero de Software"},{"img":"img/team/Team4.jpg","name":"Luna Diego Mart\xedn","job":"Gerente de Sistemas"},{"img":"img/team/Team5.jpg","name":"Quiroga Agustin","job":"Analista de Infraestructura"},{"img":"img/team/Team6.jpg","name":"Trepat Carlos","job":"Analista de Sistemas"}],"Contact":{"address":"4321 California St, San Francisco, CA 12345 ","phone":"+1 123 456 1234","email":"info@company.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"},"Features":[{"icon":"fa fa-comments-o","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-bullhorn","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-group","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-magic","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."}]}')}},[[20,1,2]]]);
//# sourceMappingURL=main.1cae1716.chunk.js.map