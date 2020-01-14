(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{12:function(e,a,t){e.exports=t(22)},17:function(e,a,t){},18:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),i=t(10),n=t.n(i),r=(t(17),t(1)),l=t(2),m=t(4),o=t(3),g=t(5),d=(t(18),function(e){return c.a.createElement("div",{className:"container"},e.children)}),u=function(e){return c.a.createElement("nav",{className:"navbar navbar-dark primary-color"},c.a.createElement("span",{className:"navbar-brand"},c.a.createElement("img",{src:"./assets/svg/click.svg",alt:"icon"})," Clicky"),c.a.createElement("span",{className:"navbar-text text-white"},"Score: ",e.score))},p=t(6),k=t(11),h=t.n(k),f=function(e){return c.a.createElement("div",{className:"col-6 col-lg-3 col-md-3 col-sm-4 mt-4"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:e.image,alt:"i has value",onClick:e.handleCardClick})))},v=[{image:"./assets/images/1.png",clicked:!1},{image:"./assets/images/2.png",clicked:!1},{image:"./assets/images/3.png",clicked:!1},{image:"./assets/images/4.png",clicked:!1},{image:"./assets/images/5.png",clicked:!1},{image:"./assets/images/6.png",clicked:!1},{image:"./assets/images/7.png",clicked:!1},{image:"./assets/images/8.png",clicked:!1},{image:"./assets/images/9.png",clicked:!1},{image:"./assets/images/10.png",clicked:!1},{image:"./assets/images/11.png",clicked:!1},{image:"./assets/images/12.png",clicked:!1}],E=function(e){function a(){var e,t;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={cards:v},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"shuffleCards",value:function(){for(var e,a,t=Object(p.a)(this.state.cards).slice(0),s=t.length;0!==s;)a=Math.floor(Math.random()*s),e=t[s-=1],t[s]=t[a],t[a]=e;this.setState({cards:t})}},{key:"handleCardClick",value:function(e,a,t){if(console.log("Card ".concat(t," has been clicked!")),this.state.cards[a].clicked)h()({title:"You Lost!",text:"You scored ".concat(this.props.score," point").concat(1!==this.props.score?"s":"","!"),icon:"error",button:"Okay"}),this.setState({cards:[{image:"./assets/images/1.png",clicked:!1},{image:"./assets/images/2.png",clicked:!1},{image:"./assets/images/3.png",clicked:!1},{image:"./assets/images/4.png",clicked:!1},{image:"./assets/images/5.png",clicked:!1},{image:"./assets/images/6.png",clicked:!1},{image:"./assets/images/7.png",clicked:!1},{image:"./assets/images/8.png",clicked:!1},{image:"./assets/images/9.png",clicked:!1},{image:"./assets/images/10.png",clicked:!1},{image:"./assets/images/11.png",clicked:!1},{image:"./assets/images/12.png",clicked:!1}]}),this.props.resetScore();else{var s=Object(p.a)(this.state.cards).slice(0);s[a].clicked=!0,this.setState({cards:s}),this.props.incrementScore(),this.shuffleCards()}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"row mb-4"},this.state.cards.map((function(a,t){return c.a.createElement(f,{key:t,image:a.image,clicked:a.clicked,handleCardClick:function(s){return e.handleCardClick(s,t,a.image)}})})))}}]),a}(c.a.Component),b=(t(21),function(e){return c.a.createElement("footer",{className:"page-footer font-small primary-color"},c.a.createElement(d,null,c.a.createElement("div",{className:"row d-flex align-items-center"},c.a.createElement("div",{className:"col-md-6 col-lg-6 ml-lg-0"},c.a.createElement("div",{className:"text-center text-md-left py"},c.a.createElement("span",null,"\xa9 2020 Nathanael Hauser"))),c.a.createElement("div",{className:"col-md-6 col-lg-6 ml-lg-0 d-flex "},c.a.createElement("div",{className:"text-center text-md-right py"},c.a.createElement("a",{href:"https://github.com/mesmerizingYeti/clicky-game"},"Githup Repo"))))))}),y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={score:0},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"incrementScore",value:function(){this.setState({score:this.state.score+1})}},{key:"resetScore",value:function(){this.setState({score:0})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{score:this.state.score}),c.a.createElement(d,null,c.a.createElement(E,{incrementScore:function(){return e.incrementScore()},resetScore:function(){return e.resetScore()},score:this.state.score})),c.a.createElement(b,null))}}]),a}(c.a.Component);n.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.35f15da4.chunk.js.map