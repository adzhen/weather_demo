(this.webpackJsonpweather_demo=this.webpackJsonpweather_demo||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(4),l=c.n(n),a=(c(15),c(6)),d=c(7),r=c(2),j=c(10),o=c(8),b=(c.p,c(16),c(17),c(9)),h=c(0),u=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(e){var s;return Object(a.a)(this,c),(s=t.call(this,e)).fetchData=function(){var e=s.state.city+"";fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=e857492510d175feff667d7dc5fcccfd").then((function(e){return e.json()})).then((function(t){s.setState({isLoaded:!0,items:t});var c=s.state.items.cod;if(200==c){document.getElementById("lbl_val_inputCity").innerHTML="",console.log(s.state.items);var i=s.state.items,n=document.getElementById("galleryForm"),a=s.newWeatherCard(i);n&&l.a.render(l.a.createPortal(a,n),document.createElement("div"))}else console.log(e),"undefined"==e||""==e?document.getElementById("lbl_val_inputCity").innerHTML="Cannot Be Empty.":404==c&&(document.getElementById("lbl_val_inputCity").innerHTML="City Not Found.")}),(function(e){s.setState({isLoaded:!0,error:e})}));s.state.items},s.removeCard=function(e){var t=document.getElementById(e.currentTarget.id);console.log(t),t.parentNode.removeChild(t)},s.newWeatherCard=function(e){var t=new b.a,c=t.get("card_index"),i="weatherCard_"+c,n=e.weather[0].main,l=e.name,a=e.main.temp,d=e.main.humidity;return null==c&&(c=0),t.set("card_index",+c+1,{path:"/"}),n.includes("Clear")?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:i,class:"col-4 mx-auto  mt-2 weatherCard",children:[Object(h.jsx)("div",{class:"div_remove",children:Object(h.jsx)("button",{type:"submit",onClick:function(e){return s.removeCard(e)},id:i,class:"btn_remove",children:"X"})}),Object(h.jsxs)("div",{class:"col-10 mx-auto",children:[Object(h.jsxs)("div",{id:"lbl_cityDesc",class:"lbl_cityDesc col-4 mt-2",children:[Object(h.jsx)("div",{class:"row",children:l}),Object(h.jsxs)("div",{class:"row",children:[" ",n," "]}),Object(h.jsxs)("div",{class:"row",children:["  ",a,"\xb0C"]}),Object(h.jsxs)("div",{class:"row",children:["HUM ",d]})]}),Object(h.jsxs)("div",{class:"hot",children:[Object(h.jsx)("span",{class:"sun"}),Object(h.jsx)("span",{class:"sunx"})]})]})]})}):n.includes("Snow")?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:i,class:"col-4 mx-auto  mt-2 weatherCard",children:[Object(h.jsx)("div",{class:"div_remove",children:Object(h.jsx)("button",{type:"submit",onClick:function(e){return s.removeCard(e)},id:i,class:"btn_remove",children:"X"})}),Object(h.jsxs)("div",{class:"col-10 mx-auto",children:[Object(h.jsxs)("div",{id:"lbl_cityDesc",class:"lbl_cityDesc col-4 mt-2",children:[Object(h.jsx)("div",{class:"row",children:l}),Object(h.jsxs)("div",{class:"row",children:["  ",n]}),Object(h.jsxs)("div",{class:"row",children:["  ",a,"\xb0C"]}),Object(h.jsxs)("div",{class:"row",children:["HUM ",d]})]}),Object(h.jsx)("div",{class:"stormy",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{})]})})]})]})}):n.includes("Rain")?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:i,class:"col-4 mx-auto  mt-2 weatherCard",children:[Object(h.jsx)("div",{class:"div_remove",children:Object(h.jsx)("button",{type:"submit",onClick:function(e){return s.removeCard(e)},id:i,class:"btn_remove",children:"X"})}),Object(h.jsxs)("div",{class:"col-10 mx-auto",children:[Object(h.jsxs)("div",{id:"lbl_cityDesc",class:"lbl_cityDesc col-4 mt-2",children:[Object(h.jsx)("div",{class:"row",children:l}),Object(h.jsxs)("div",{class:"row",children:["  ",n]}),Object(h.jsxs)("div",{class:"row",children:["  ",a,"\xb0C"]}),Object(h.jsxs)("div",{class:"row",children:["HUM ",d]})]}),Object(h.jsxs)("div",{class:"breezy",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{}),Object(h.jsx)("li",{})]}),Object(h.jsx)("span",{class:"cloudr"})]})]})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:i,class:"col-4 mx-auto  mt-2 weatherCard",children:[Object(h.jsx)("div",{class:"div_remove",children:Object(h.jsx)("button",{type:"submit",onClick:function(e){return s.removeCard(e)},id:i,class:"btn_remove",children:"X"})}),Object(h.jsxs)("div",{class:"col-10 mx-auto",children:[Object(h.jsxs)("div",{id:"lbl_cityDesc",class:"lbl_cityDesc col-4 mt-2",children:[Object(h.jsx)("div",{class:"row",children:l}),Object(h.jsxs)("div",{class:"row",children:[" ",n," "]}),Object(h.jsxs)("div",{class:"row",children:["  ",a,"\xb0C"]}),Object(h.jsxs)("div",{class:"row",children:["HUM ",d]})]}),Object(h.jsxs)("div",{class:"cloudy div_weather",children:[Object(h.jsx)("span",{class:"cloud"}),Object(h.jsx)("span",{class:"cloudx"})]})]})]})})},s.state={error:null,isLoaded:!1,items:[],city:s.props.value},s.handleChange=s.handleChange.bind(Object(r.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(r.a)(s)),s.removeCard=s.removeCard.bind(Object(r.a)(s)),s}return Object(d.a)(c,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){this.setState({city:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.handleChange(e),this.fetchData();this.state.city;this.mainInput.value=""}},{key:"render",value:function(){var e=this,t=this.state,c=t.error;t.isLoaded,t.items;return c?Object(h.jsxs)("div",{children:["Error: ",c.message]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{class:"row col-12 f-navbar",children:[Object(h.jsx)("div",{class:" col-3 "}),Object(h.jsx)("div",{class:" col-6 mt-2",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{class:"col-12 ",children:[Object(h.jsx)("label",{id:"lbl_val_inputCity",class:"lbl_val_inputCity"}),Object(h.jsx)("input",{ref:function(t){return e.mainInput=t},id:"inputCity",type:"text",value:this.state.value,onChange:this.handleChange,class:"inputTx_card",placeholder:"Enter City...",required:!0})]}),Object(h.jsx)("div",{class:"col-12 mt-1 mb-1",style:{textAlign:"center"},children:Object(h.jsx)("button",{onClick:this.handleSubmit,class:"btn_addCard",children:"Insert New"})})]})}),Object(h.jsx)("div",{class:" col-3"})]})})}}]),c}(i.a.Component),x=(document.getElementById("api"),u),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),i(e),n(e),l(e)}))};l.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.5c54540a.chunk.js.map