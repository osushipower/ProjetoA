(this["webpackJsonpmeu-primeiro-app"]=this["webpackJsonpmeu-primeiro-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/payments_black_24dp.27fa9ff9.svg"},20:function(e,a,t){e.exports=t(44)},25:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),o=t.n(l),m=t(2),r=t(17),s=(t(25),t(18)),i=t.n(s),u=t(5),d=t.n(u),b=t(6),p=t.n(b),E=t(19),f=t.n(E),v=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){i.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce",{method:"GET"}).then((function(e){l(e.data)}))}),[]);var o=[{card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}],s=Object(n.useState)("none"),u=Object(m.a)(s,2),b=u[0],E=u[1],v=Object(n.useState)(""),g=Object(m.a)(v,2),N=g[0],O=g[1],j=Object(n.useState)("none"),h=Object(m.a)(j,2),y=h[0],x=h[1],_=Object(n.useState)(""),k=Object(m.a)(_,2),S=k[0],C=k[1],w=Object(n.useState)("1"),F=Object(m.a)(w,2),P=F[0],M=F[1],R=Object(n.useState)(""),I=Object(m.a)(R,2),J=I[0],$=I[1],B=Object(n.useState)("none"),G=Object(m.a)(B,2),T=G[0],q=G[1],z=Object(n.useState)(!1),A=Object(m.a)(z,2),D=A[0],H=A[1],K=function(e){E("flex"),O(e),H(!0)},L=function(){x("none"),E("none"),H(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"teste ".concat(D?"aberto":""),id:"blur"},t.map((function(e){return c.a.createElement("div",{className:"container",key:e.index},c.a.createElement("div",{className:"profile-container"},c.a.createElement("img",{className:"thumbnail",src:e.img,alt:"Foto do usu\xe1rio"}),c.a.createElement("button",{type:"submit",className:"btn-pgto",onClick:function(){K(e.name)}},c.a.createElement("img",{src:d.a,className:"icon",alt:"Pagar"}))),c.a.createElement("div",{className:"infos"},c.a.createElement("p",{className:"item-id"},"#",e.id),c.a.createElement("p",{className:"item-name"},e.name),c.a.createElement("p",{className:"item-username"},e.username)),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"submit",className:"btn-pgto2",onClick:function(){K(e.name)}},c.a.createElement("img",{src:d.a,className:"icon",alt:"Pagar"}))))}))),c.a.createElement("div",{className:"abrirModal",style:{display:b}},c.a.createElement("div",{className:"modal-body"},c.a.createElement("p",{className:"texto-cabecalho-modal"},"Pagamento para ",N),c.a.createElement("div",{className:"valorInput"},c.a.createElement(r.a,{thousandSeparator:!0,value:J,onChange:function(e){$(e.target.value),q("none")},prefix:"R$ ",inputmode:"numeric",placeholder:"R$ 0,00"}),c.a.createElement("p",{id:"alert-lbl",style:{display:T}},"Campo obrigat\xf3rio"),c.a.createElement("p",null,"Cart\xe3o de final:"),c.a.createElement("select",{value:P,onChange:function(e){M(e.target.value)}},c.a.createElement("option",{value:"1"},o[0].card_number.substr(-4)),c.a.createElement("option",{value:"2"},o[1].card_number.substr(-4))),c.a.createElement("button",{className:"btn-pgto-final",onClick:function(){""===J?q("flex"):(C("1"===P?"":"n\xe3o"),E("none"),x("flex"),$(""),q("none"))}},c.a.createElement("img",{src:f.a,className:"icon",alt:"Fechar"})),c.a.createElement("button",{id:"modal-close",onClick:function(){L()}},c.a.createElement("img",{src:p.a,className:"icon",alt:"Fechar"}))))),c.a.createElement("div",{className:"abrirModal",style:{display:y}},c.a.createElement("div",{className:"modal-body"},c.a.createElement("p",{className:"texto-cabecalho-modal",id:"p-recibo"},"Recibo de pagamento"),c.a.createElement("p",null,"O Pagamento ",c.a.createElement("b",null,S)," foi conclu\xeddo com sucesso"),c.a.createElement("button",{id:"modal-close",onClick:function(){L()}},c.a.createElement("img",{src:p.a,className:"icon",alt:"Fechar"})))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))},5:function(e,a,t){e.exports=t.p+"static/media/attach_money_black_24dp.be9ed595.svg"},6:function(e,a,t){e.exports=t.p+"static/media/close_black_24dp.dd4f8c6a.svg"}},[[20,1,2]]]);
//# sourceMappingURL=main.897cd703.chunk.js.map