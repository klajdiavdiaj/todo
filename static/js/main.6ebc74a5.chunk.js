(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),l=a.n(c),r=(a(18),a(11)),s=a(1),o=a(2),m=a(4),d=a(3),u=a(5),h=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleChange,n=e.handleSubmit,c=e.editItem;return i.a.createElement("form",{onSubmit:n},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("div",{className:"input-group-text text-white bg-primary text-white"},i.a.createElement("i",{className:"fas fa-book"}))),i.a.createElement("input",{type:"text",className:"form-control text-capitalize",placeholder:"Add todo item",value:t,onChange:a,required:!0,maxlength:"20"})),i.a.createElement("button",{type:"submit",className:c?"btn btn-block btn-outline-warning mt-3 text-capitalize":"btn btn-block btn-outline-success mt-3 text-capitalize"},c?"edit item":"add todo"))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.handleDelete,n=e.handleEdit,c=e.handleChecked,l=e.checked;return i.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between my-2"},i.a.createElement("h6",{className:l?"line-through":"text"},t," "),i.a.createElement("div",{className:"todo-icon"},l?"":i.a.createElement("button",{className:"rounded mx-2 btn btn-outline-dark btn-sm ",onClick:c},i.a.createElement("i",{className:"fas fa-check"})),i.a.createElement("button",{className:"rounded mx-2 btn btn-outline-warning btn-sm",onClick:n},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("button",{className:"btn btn-rounded btn-outline-danger btn-sm",onClick:a},i.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.clearList,n=e.handleDelete,c=e.handleEdit,l=e.handleChecked;return i.a.createElement("ul",{className:"list-group my-5"},i.a.createElement("h3",{className:"text-capitalize text-center"},"todo List"),t.map(function(e){return i.a.createElement(b,{key:e.id,title:e.title,handleDelete:function(){return n(e.id)},handleEdit:function(){return c(e.id)},handleChecked:function(){return l(e.id)},checked:e.checked})}),i.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-block text-capitalize mt-5",onClick:a},"Clear List"))}}]),t}(n.Component),f=a(6),E=a.n(f),k=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={items:[],id:E()(),item:"",editItem:!1,checked:!1},a.handleChange=function(e){a.setState({item:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={id:a.state.id,title:a.state.item,checked:a.state.checked},n=[].concat(Object(r.a)(a.state.items),[t]);a.setState({items:n,item:"",id:E()(),editItem:!1})},a.clearList=function(){a.setState({items:[]})},a.handleDelete=function(e){var t=a.state.items.filter(function(t){return t.id!==e});a.setState({items:t})},a.handleEdit=function(e){var t=a.state.items.filter(function(t){return t.id!==e}),n=a.state.items.find(function(t){return t.id===e});console.log(n),a.setState({items:t,item:n.title,editItem:!0,id:e})},a.handleChecked=function(e){var t=a.state.items.find(function(t){return t.id===e});console.log(t),a.setState({}),t.checked=!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"mx-auto col-lg-5 col-md-5 col-sm-12 mt-4"},i.a.createElement("h3",{className:"text-capitalize text-center"},"react to do list"),i.a.createElement("div",{className:"card card-body my-3"},i.a.createElement(h,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem}),0!==this.state.items.length?i.a.createElement(p,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit,handleChecked:this.handleChecked}):""))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.6ebc74a5.chunk.js.map