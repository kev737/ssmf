(this.webpackJsonpssmf=this.webpackJsonpssmf||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),s=n.n(c),o=(n(60),n(61),n(62),n(63),n(25)),i=n(30),u=n(31),l=n(26),d=n(38),h=n(36),f=n(43),p=n(54),v=n.n(p),j=n(11),b=n.n(j),w=n(23),O=n(55),g=n.n(O).a.create({baseURL:"http://3.225.6.79"}),x=n(5),m=Object(r.createContext)({events:[],postEvent:function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),refresh:function(){var e=Object(w.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),deletePost:function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this,{})).state={events:[],isLoading:!0},e.refresh=e.refresh.bind(Object(l.a)(e)),e.deletePost=e.deletePost.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refresh();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"postEvent",value:function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("/events/",t).then((function(e){})).catch((function(e){window.alert("Something went wrong. Please try again.")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(w.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/events/").then((function(e){t.setState({events:e.data.map((function(e){return{start:new Date(e.start),end:new Date(e.end),title:e.title,id:e.id}})),isLoading:!1})})).catch((function(e){console.log("Something went wrong.")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(){var e=Object(w.a)(b.a.mark((function e(t){var n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.delete("/events/".concat(t)).then(Object(w.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.refresh();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).catch((function(){return window.alert("Something went wrong deleting that post. Please try again.")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoading?Object(x.jsx)("div",{children:"Loading..."}):Object(x.jsx)(m.Provider,{value:Object(o.a)(Object(o.a)({},this.state),{},{postEvent:this.postEvent,refresh:this.refresh,deletePost:this.deletePost}),children:this.props.children})}}]),n}(r.Component),k=n(94),E=n(95),P=Object(f.b)(v.a),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this,{})).state={events:[],show:!1,selectedEvent:{start:new Date(0),end:new Date(0),title:""}},e.closeModal=e.closeModal.bind(Object(l.a)(e)),e}return Object(u.a)(n,[{key:"closeModal",value:function(){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{show:!1}))}},{key:"render",value:function(){var e=this;return Object(x.jsx)(m.Consumer,{children:function(t){var n=t.events,r=t.postEvent,a=t.refresh,c=t.deletePost;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(k.a,{show:e.state.show,onHide:e.closeModal,children:[Object(x.jsx)(k.a.Header,{closeButton:!0,children:Object(x.jsx)(k.a.Title,{children:"Information about Event"})}),Object(x.jsx)(k.a.Body,{children:"Event title: ".concat(e.state.selectedEvent.title)}),Object(x.jsxs)(k.a.Footer,{children:[Object(x.jsx)(E.a,{variant:"secondary",onClick:e.closeModal,children:"Cancel"}),Object(x.jsx)(E.a,{variant:"primary",onClick:function(){return t=e.state.selectedEvent.id||-1,c(t),void e.closeModal();var t},children:"Delete Event"})]})]}),Object(x.jsx)(f.a,{selectable:!0,localizer:P,events:n||e.state.events,defaultView:"week",scrollToTime:new Date,defaultDate:new Date,onSelectEvent:function(t){return e.setState(Object(o.a)(Object(o.a)({},e.state),{},{show:!0,selectedEvent:t}))},style:{height:"737px"},onSelectSlot:function(e){"string"!==typeof e.start&&"string"!==typeof e.end?function(e){var t=e.start,n=e.end,c=window.prompt("New Event name");c?r({start:t,end:n,title:c}).then((function(){a()})).catch((function(e){console.log(e),window.alert("Something went wrong. Please try again.")})):window.alert("Please try again with a title")}({start:e.start,end:e.end}):window.alert("Something went wrong in Calendar")}})]})}})}}]),n}(a.a.Component);var C=function(){return Object(x.jsx)(y,{children:Object(x.jsx)(S,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),D()}},[[88,1,2]]]);
//# sourceMappingURL=main.304eb368.chunk.js.map