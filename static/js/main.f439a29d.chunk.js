(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(14),a(1));function s(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.siteName),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},e.navItem1)),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Usage Guide"),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Another action")),l.a.createElement("li",null,l.a.createElement("hr",{className:"dropdown-divider"})),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"/"},"Something else here"))))),l.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch","aria-checked":"true",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable ","light"===e.mode?"dark":"light","Mode"))))))}s.defaultProps={siteName:"siteName",navItem1:"naveItem1",navItem2:"naveItem2"};var i=a(4),m=a.n(i);function d(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),i=Object(c.a)(s,2),d=i[0],u=i[1],p=JSON.parse(JSON.stringify(r.split(" "))),g=[];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-1",style:{color:"light"===e.mode?"black":"#dcc2c2"}},l.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}),l.a.createElement("h1",null,e.heading),l.a.createElement("span",{className:"material-symbols-outlined",onClick:function(){navigator.clipboard.writeText(r),e.showAlert("Your text is copied","success")},style:{position:"relative",left:"64rem",top:"3rem",zIndex:1}},l.a.createElement("img",{src:m.a,alt:"image not found",style:{width:"2rem"}})),l.a.createElement("div",{className:"form-floating"},l.a.createElement("textarea",{className:"form-control textarea",value:r,style:{backgroundColor:"dark"===e.mode?"whitesmoke":"#rgb(235 210 210)",color:"black"},onChange:function(e){o(e.target.value)},placeholder:"Enter the Text",id:"floatingTextarea",rows:100,cols:150,onKeyUp:function(){u("Stopped")},onKeyDown:function(){u("Writing...")},formcontrolname:"txt"})),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"2fr 2fr"}},l.a.createElement("div",null,d),l.a.createElement("div",null,l.a.createElement("p",{style:{display:"flex",justifyContent:"end"}},.0032*(r.split(" ").length-1)," Minutes to read"),l.a.createElement("p",{style:{display:"flex",justifyContent:"end"}},r.split(" ").length-1," Words and ",r.length," Characters"))),l.a.createElement("br",null),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Your whole data is converted to UpperCase","success")}},"convert to upper case"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary",id:"side-btn",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Your whole data is converted to lowercase","success")}},"convert to lowecase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary",id:"side-btn",onClick:function(){o(""),e.showAlert("TextArea is Resetted","success")}},"Clear Text Area"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary",id:"side-btn",onClick:function(){p.forEach(function(e){return g.push(e.charAt(0).toUpperCase()+e.slice(1))});var t=g.join(" ");o(t),e.showAlert("Your whole data changed to Title Form","success")}},"Title form"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary",id:"side-btn",onClick:function(){var t=r.split(/[ ]+/);o(t.join(" ")),e.showAlert("All Extra spaces are removed from Your Data","success")}},"Extra Space Remover"),l.a.createElement("div",{className:"my-3"},l.a.createElement("h2",null,"Preview"),l.a.createElement("p",{className:"preview"},r.length>0?r.slice(0,280)+"....":"Enter the text to preview"))))}a(16),a(19);var u=function(e){var t;return l.a.createElement("div",{style:{height:"50px",marginTop:"-2%",marginBottom:"2%"}},";",e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(t=e.alert.type).toLowerCase().charAt(0).toUpperCase()+t.slice(1)),": ",e.alert.msg))};var p=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),i=Object(c.a)(o,2),m=i[0],p=i[1],g=function(e,t){p({msg:e,type:t}),setTimeout(function(){p(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{siteName:"Capitilizer App",mode:a,navItem1:"Home",navItem2:"About ",toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#353232",g("Dark mode has been enabled","success"),document.title="TextUtils -- DarkMode On"):(r("light"),document.body.style.backgroundColor="white",g("light mode has been enabled","success"),document.title="TextUtils -- DarkMode Off"),setTimeout(function(){document.title="TextUtils -- Home"},3e3)}}),l.a.createElement(u,{alert:m}),l.a.createElement("div",{className:"container my-1"},l.a.createElement(d,{showAlert:g,heading:"Enter the text to analyze",mode:a})))};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)))},4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAehJREFUaEPtmf1RwzAMxX9hApgANugIMEI3ASagTEDZgFU6AhvABDBBwzkNxWkiR1awW/fSv3Ln6ONJes+xW1H4ryo8f2YAx+6gtQMvwIOUvHNamxZ9o4s1bB/HCmQBsAbuxxz3131YQYi+6WuoUO5FC4Av4FIHQEpUDeYbuArFsgDwp8Nir8GujmFJoG76tgthsT8BAH8pJAXQ1ikYI7R465Vq4z2r26sptfCOOkYIQOukqYP/ntr58QEMz3oxHJAqfQYAMpG4DWMmsdyBYgBIHCgGwHCikjpNEJ2eqVrpFDLa3XErqD3vJ72RDVYhJ4B0JN7vbZ0N7rRGKFBp9XxOQKSOEc2Bg8NWeRzICSAdB7LsA/tNyLYTzxyYwOCYMZ1A4t45YVrKXet6d1ptxMg2QoEqqCVuAiJ1DEUHSj6RBT/mUt9KzCP0e705j5CFy3v5aeVI9KEgcW/Wiz/UfwDX8WX1L3S71vIKn8BNKFZ0By5gtYWnQad+JtJzHPJnYGUC0HwLDR/qnT/ndAks9PlEdeAdeAPcfxHBX3QHxhzmXj9fACMjlLvQJhk1qk00Nnd1fxdtpTiuOaIeqI1ERFlyFGKUDECrNtUS6sXu8/z/dRKqDdRJOmDtala7VNci2UDMALKVWgj0A8KaoTEKrQGaAAAAAElFTkSuQmCC"},5:function(e,t,a){e.exports=a(21)}},[[5,2,1]]]);
//# sourceMappingURL=main.f439a29d.chunk.js.map