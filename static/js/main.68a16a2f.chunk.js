(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},28:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(16),r=t.n(o),c=(t(26),t(3)),s=t(8);function i(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(s.b,{className:"navbar-brand",href:"/"},e.siteName),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},e.navItem1)),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/about"},e.navItem2)),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Usage Guide"),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),l.a.createElement("li",null,l.a.createElement("hr",{className:"dropdown-divider"})),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))))),l.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch","aria-checked":"true",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable ","light"===e.mode?"dark":"light","Mode"))))))}function m(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1],s=Object(n.useState)(""),i=Object(c.a)(s,2),m=i[0],d=i[1],u=JSON.parse(JSON.stringify(o.split(" "))),h=[];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-1",style:{color:"light"===e.mode?"black":"#dcc2c2"}},l.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}),l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"material-symbols-outlined little-Border"},l.a.createElement("div",{onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Your text is copied","success")},style:{display:"flex",justifyContent:"end",width:"100%"}},l.a.createElement("span",{className:"material-symbols-outlined",style:{display:"flex"}},"content_copy"))),l.a.createElement("div",{className:"form-floating"},l.a.createElement("textarea",{className:"form-control textarea",value:o,style:{backgroundColor:"dark"===e.mode?"whitesmoke":"#rgb(235 210 210)",color:"black"},onChange:function(e){r(e.target.value)},placeholder:"Enter the Text",id:"floatingTextarea",rows:100,cols:150,onKeyUp:function(){d("Stopped")},onKeyDown:function(){d("Writing...")},formcontrolname:"txt"})),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"2fr 2fr"}},l.a.createElement("div",null,m),l.a.createElement("div",null,l.a.createElement("p",{style:{display:"flex",justifyContent:"end"}},.0032*(o.split(" ").length-1)," Minutes to read"),l.a.createElement("p",{style:{display:"flex",justifyContent:"end"}},o.split(" ").length-1," Words and ",o.length," Characters"))),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=o.toUpperCase();r(a),e.showAlert("Your whole data is converted to UpperCase","success")}},"convert to upper case"),l.a.createElement("button",{className:"btn btn-primary",id:"side-btn",onClick:function(){var a=o.toLowerCase();r(a),e.showAlert("Your whole data is converted to lowercase","success")}},"convert to lowecase"),l.a.createElement("button",{className:"btn btn-primary",id:"side-btn",onClick:function(){r(""),e.showAlert("TextArea is Resetted","success")}},"Clear Text Area"),l.a.createElement("button",{className:"btn btn-primary",id:"side-btn",onClick:function(){u.forEach(function(e){return h.push(e.charAt(0).toUpperCase()+e.slice(1))});var a=h.join(" ");r(a),e.showAlert("Your whole data changed to Title Form","success")}},"Title form"),l.a.createElement("button",{className:"btn btn-primary",id:"side-btn",onClick:function(){var a=o.split(/[ ]+/);r(a.join(" ")),e.showAlert("All Extra spaces are removed from Your Data","success")}},"Extra Space Remover"),l.a.createElement("div",{className:"my-5"},l.a.createElement("h2",null,"Preview"),l.a.createElement("p",{className:"preview"},o.length>0?o.slice(0,280)+"....":"Enter the text to preview"))))}i.defaultProps={siteName:"siteName",navItem1:"naveItem1",navItem2:"naveItem2"};t(28),t(31);function d(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"accordion my-5",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var u=function(e){var a;return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(a=e.alert.type).toLowerCase().charAt(0).toUpperCase()+a.slice(1)),": ",e.alert.msg)},h=t(0);var p=function(){var e=Object(n.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(null),p=Object(c.a)(r,2),b=p[0],g=p[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(i,{siteName:"Capitilizer App",mode:t,navItem1:"Home",navItem2:"About ",toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#353232",E("Dark mode has been enabled","success"),document.title="TextUtils -- DarkMode On"):(o("light"),document.body.style.backgroundColor="white",E("light mode has been enabled","success"),document.title="TextUtils -- DarkMode Off"),setTimeout(function(){document.title="TextUtils -- Home"},3e3)}}),l.a.createElement(u,{alert:b}),l.a.createElement("div",{className:"container my-1"},l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"about",element:l.a.createElement(d,null)})),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",element:l.a.createElement(m,{showAlert:E,heading:"Enter the text to analyze",mode:t})})))))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,34)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),b()}},[[17,3,2]]]);
//# sourceMappingURL=main.68a16a2f.chunk.js.map