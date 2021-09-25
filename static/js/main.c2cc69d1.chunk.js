(this["webpackJsonpmovies-react"]=this["webpackJsonpmovies-react"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(7),i=a.n(n),r=a(0);function o(){return Object(r.jsx)("nav",{className:"#1de9b6 teal accent-3",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"https://dimassspb.github.io/movies-react/",className:"brand-logo",children:"React movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/dimassspb/movies-react",children:"Repo"})})})]})})}function l(){return Object(r.jsx)("footer",{className:"page-footer #1de9b6 teal accent-3",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var h=a(2),j=a(3),d=a(5),b=a(4),p=a(8);function m(e){var t=e.Title,a=e.Year,s=e.imdbID,c=e.Type,n=e.Poster;return Object(r.jsxs)("div",{id:s,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===n?Object(r.jsx)("img",{alt:"film-img",className:"activator",src:"https://via.placeholder.com/300x500.png?text=".concat(t)}):Object(r.jsx)("img",{alt:"film-img",className:"activator",src:n})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(r.jsxs)("p",{children:[a," ",Object(r.jsx)("span",{className:"right",children:c})]})]})]})}function u(e){var t=e.movies,a=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(r.jsx)(m,Object(p.a)({},e),e.imdbID)})):Object(r.jsxs)("h4",{children:["Nothing found",Object(r.jsx)("i",{class:"material-icons",children:"sentiment_very_dissatisfied"})]})})}var v=function(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})},O=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(r.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(r.jsx)("span",{children:"Movies only"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(r.jsx)("span",{children:"Series Only"})]})]})]})}}]),a}(c.a.Component),x="4347b7ec",f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],loading:!0},e.searchMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(O,{searchMovies:this.searchMovies}),a?Object(r.jsx)(v,{}):Object(r.jsx)(u,{movies:t})]})}}]),a}(c.a.Component);function g(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(f,{}),Object(r.jsx)(l,{})]})}a(14);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c2cc69d1.chunk.js.map