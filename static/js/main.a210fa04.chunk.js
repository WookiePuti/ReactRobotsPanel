(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{21:function(e,t,n){e.exports=n(52)},26:function(e,t,n){},33:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=(n(26),n(5)),s=(n(33),function(e){return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"photo",src:"https://robohash.org/".concat(e.id,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))}),i=function(e){return e.robots.map((function(e,t){return r.a.createElement(s,{key:t,name:e.name,email:e.email,id:e.id})}))},u=(n(34),function(e){var t=e.setSearchValue;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"bg-lightest-blue pa3 ba b--green",type:"search",placeholder:"search Robots",onChange:t})))}),d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},E=n(19),h=n.n(E),m=Object(l.b)((function(e){return{searchField:e.searchRobots.searchField,allRobots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{OnRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),h.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t.data})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))},setSearchValue:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}}))((function(e){Object(a.useEffect)((function(){console.log("start"),e.OnRequestRobots()}),[]);var t=e.searchField,n=e.allRobots,o=e.setSearchValue,c=e.isPending,l=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robots"),r.a.createElement(u,{setSearchValue:o}),r.a.createElement(d,null,c?r.a.createElement("h1",null,"Loading"):r.a.createElement(i,{robots:l})),";")}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(2),p=n(3),g={searchField:""},f={isPending:!1,robots:[],error:null},R=n(20),O=Object(b.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(p.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(p.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(p.a)({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object(p.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,_=Object(b.e)(O,S(Object(b.a)(R.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:_},r.a.createElement(m,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a210fa04.chunk.js.map