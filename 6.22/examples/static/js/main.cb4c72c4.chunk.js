(this["webpackJsonpjs-dos-examples"]=this["webpackJsonpjs-dos-examples"]||[]).push([[0],{38:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(18),r=a.n(o),c=a(10),i=a(25),s=a.n(i),u=a(26),m=a(12),d=a(51),p=a(28),h=a(29),E=a(52),f=a(27),g=a(53),b=a(15),y=a(56),w=a(30),x=a(20),j=a(19),v=(a(43),a(44),a(17));var k=a(54),O=a(55),C=a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46),a(47),a(48),a(49);var S=window.location.search;switch(S){case"?digger":case"?arkanoid":case"?dhry2":r.a.render(l.a.createElement((function(e){var t="https://js-dos.com/6.22/current/test/"+e.path+".html",a=Object(n.useState)(0),o=Object(c.a)(a,2),r=o[0],i=o[1],k=Object(n.useState)(null),O=Object(c.a)(k,2),C=O[0],S=O[1],T=Object(n.useState)(null),R=Object(c.a)(T,2),W=R[0],F=R[1],I=Object(n.useState)(null),H=Object(c.a)(I,2),M=H[0],N=H[1],U=Object(n.useState)(null),B=Object(c.a)(U,2),D=B[0],A=B[1],L=Object(n.useState)(1e3),z=Object(c.a)(L,2),G=z[0],P=z[1],V=Object(n.useState)("wdosbox.js"),J=Object(c.a)(V,2),q=J[0],X=J[1],Y=Object(n.useState)(!1),$=Object(c.a)(Y,2),_=$[0],K=$[1],Q=Object(n.useState)(null),Z=Object(c.a)(Q,2),ee=Z[0],te=Z[1],ae=Object(n.useCallback)((function(e){if(null!==e&&null!=W){var t=e.contentWindow;t.document.write(W),e.focus(),te(t)}}),[r]);if(null!=D)return l.a.createElement("div",null,"Unexpected error: ",D);if(!(null!==C)){if(!M){var ne=new XMLHttpRequest;ne.open("GET",t),ne.onerror=function(){A("Unable to download url: "+t)},ne.onreadystatechange=function(){4===ne.readyState&&(200===ne.status?(S(ne.responseText),F(ne.responseText),i(r+1)):A("Wrong response code: "+ne.status))},ne.send(),N(ne)}return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1em"}},l.a.createElement("div",{style:{marginRight:"1em"}},l.a.createElement(u.a,{intent:m.a.PRIMARY})),l.a.createElement("div",null,"Loading documentation",l.a.createElement("span",{className:"bp3-text-large",style:{color:"#48AFF0",fontWeight:"bold"}},window.location.pathname)))}return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},l.a.createElement("iframe",{title:"frame",tabIndex:1,key:"iframe_"+r,ref:ae,allowFullScreen:!0,style:{border:"none",height:"400px"}}),l.a.createElement(d.a,{style:{width:"100%",display:"flex",justifyContent:"space-between",height:"auto",paddingTop:"5px",paddingBottom:"5px"}},l.a.createElement(p.a,{style:{flexWrap:"wrap",height:"auto"}},l.a.createElement(h.a,null,"Variant"),l.a.createElement(E.a,{options:["wdosbox.js","wdosbox-emterp.js","wdosbox-nosync.js","dosbox-emterp.js","dosbox-nosync.js"],value:q,onChange:function(e){return function(e){var t=(C+"").replace(/wdosboxUrl:.*/,'wdosboxUrl: "https://js-dos.com/6.22/current/'+e+'",');X(e),S(t)}(e.currentTarget.value)}}),l.a.createElement(f.a,null),l.a.createElement(g.a,{checked:_,label:"Mouselock",large:!0,onChange:function(e){return function(e){var t=(C+"").replace(/autolock:.*/,"autolock: "+e+",");K(e),S(t)}(e.currentTarget.checked)},style:{marginBottom:0},alignIndicator:b.a.RIGHT}),l.a.createElement(f.a,null),l.a.createElement(h.a,null,"Cycles"),l.a.createElement("div",{style:{width:"100px"}},l.a.createElement(y.a,{value:G,stepSize:100,majorStepSize:1e3,fill:!0,onValueChange:function(e){var t=(C+"").replace(/cycles:.*/,"cycles: "+e+",");P(e),S(t)}}))),l.a.createElement(p.a,null,l.a.createElement(w.a,null,l.a.createElement(x.a,{text:"Fullscreen",icon:v.a.FULLSCREEN,onClick:function(){ee.ci.fullscreen()}}),l.a.createElement(x.a,{icon:v.a.REFRESH,onClick:function(){F(C),i(r+1)},intent:C!==W?m.a.DANGER:m.a.NONE})))),l.a.createElement("div",{style:{overflow:"auto"}},l.a.createElement(s.a,{value:C,onValueChange:S,highlight:function(e){return Object(j.highlight)(e,j.languages.html,"html")},padding:10,style:{backgroundColor:"#2d2d2d",fontFamily:'"Fira code", "Fira Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',fontSize:12}})))}),{path:S.substr(1)}),document.getElementById("root"));break;default:r.a.render(l.a.createElement((function(){return l.a.createElement("div",{style:{padding:"1em"}},l.a.createElement(d.a,{fixedToTop:!0},l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement("a",{href:"https://js-dos.com"},"js-dos 6.22")))),l.a.createElement(k.a,{style:{paddingTop:"50px"}},"Examples"),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement(O.a,{elevation:C.a.TWO,style:{margin:"1em"}},l.a.createElement(k.b,null,"Digger"),l.a.createElement("p",null,"Classic dos game devloped in 1983. Here you can undestand:",l.a.createElement("ul",null,l.a.createElement("li",null,"how to run dos game in browser"),l.a.createElement("li",null,"how to configure dosbox performance"))),l.a.createElement(x.a,{text:"Run",onClick:function(){return window.location.search="digger"}})),l.a.createElement(O.a,{elevation:C.a.TWO,style:{margin:"1em"}},l.a.createElement(k.b,null,"Arkanoid"),l.a.createElement("p",null,"Original arcade game released by Tito in 1986. Here you can undestand:",l.a.createElement("ul",null,l.a.createElement("li",null,"how to use autolock feature to capture browser mouse"),l.a.createElement("li",null,"how to enter fullscreen mode"))),l.a.createElement(x.a,{text:"Run",onClick:function(){return window.location.search="arkanoid"}})),l.a.createElement(O.a,{elevation:C.a.TWO,style:{margin:"1em"}},l.a.createElement(k.b,null,"Dhrystone benchmark"),l.a.createElement("p",null,'The Dhrystone "C" benchmark provides a measure of integer performance (no floating point instructions). It became the key standard benchmark from 1984, with the growth of Unix systems.'),l.a.createElement("p",null,"Here you can examine your PC and find comparable old PC model."),l.a.createElement(x.a,{text:"Run",onClick:function(){return window.location.search="dhry2"}}))))}),null),document.getElementById("root"))}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.cb4c72c4.chunk.js.map