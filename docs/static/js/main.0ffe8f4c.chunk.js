(this["webpackJsonpclientes-app"]=this["webpackJsonpclientes-app"]||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),s=c(27),r=c.n(s),l=c(6),o=Object(a.createContext)(),i=c(9),j=c(5),d=c(21);c(34),c(42);d.a.initializeApp({apiKey:"AIzaSyAsgtma5bdSktQHKUZTDYRrUiZWIKBafts",authDomain:"clientesapp-2484d.firebaseapp.com",projectId:"clientesapp-2484d",storageBucket:"clientesapp-2484d.appspot.com",messagingSenderId:"950655070827",appId:"1:950655070827:web:53e6a87a0faadc1057772e"});var b=d.a.auth(),u=d.a.firestore(),m=c(20),p=c(15),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),c=Object(l.a)(t,2),n=c[0],s=c[1],r=function(e){var t=e.target;s(Object(p.a)(Object(p.a)({},n),{},Object(m.a)({},t.name,t.value)))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;s(t)};return[n,r,o]},O=function(){var e=h({email:"",password:""}),t=Object(l.a)(e,2),c=t[0],s=c.email,r=c.password,d=t[1],u=""===s.trim()||""===r.trim(),m=Object(a.useState)(),p=Object(l.a)(m,2),O=p[0],x=p[1],g=Object(j.g)(),f=Object(a.useContext)(o).setUser;return Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)("h1",{children:"Iniciar sesi\xf3n"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.signInWithEmailAndPassword(s,r).then((function(e){f(e.user),g.replace("/")})).catch((function(e){x("".concat(e.code," - ").concat(e.message))}))},className:" d-grid gap-2",children:[Object(n.jsx)("input",{autoComplete:"off",name:"email",onChange:d,value:s,className:"form-control",type:"text",placeholder:"Correo Electr\xf3nico"}),Object(n.jsx)("input",{name:"password",onChange:d,value:r,className:"form-control",type:"password",placeholder:"Contrase\xf1a"}),O&&Object(n.jsx)("div",{className:"alert alert-danger",children:O}),Object(n.jsx)("button",{disabled:u,className:"btn btn-primary",type:"submit",children:"Iniciar sesi\xf3n"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(i.b,{to:"/auth/register",children:Object(n.jsx)("p",{children:"\xbfNo tienes cuenta? \xa1Registrate aqui!"})}),Object(n.jsx)(i.b,{to:"/auth/password",children:Object(n.jsx)("p",{children:"\xbfOlvidaste tu contrase\xf1a? \xa1Da click aqu\xed!"})})]})},x=function(){var e=h({email:"",passwordOne:"",passwordTwo:""}),t=Object(l.a)(e,2),c=t[0],s=c.email,r=c.passwordOne,d=c.passwordTwo,u=t[1],m=""===s.trim()||""===r.trim(),p=Object(a.useState)(),O=Object(l.a)(p,2),x=O[0],g=O[1],f=Object(j.g)(),v=Object(a.useContext)(o).setUser;return Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)("h1",{children:"Registrar nueva cuenta"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{className:"d-grid gap-2",onSubmit:function(e){e.preventDefault(),r===d?b.createUserWithEmailAndPassword(s,r).then((function(e){v(e.user),f.replace("/")})).catch((function(e){g("".concat(e.code," - ").concat(e.message))})):g("Las contrase\xf1as ingresadas no son las mismas.")},children:[Object(n.jsx)("input",{autoComplete:"off",value:s,onChange:u,name:"email",className:"form-control",type:"text",placeholder:"Correo Electr\xf3nico"}),Object(n.jsx)("input",{value:r,onChange:u,name:"passwordOne",className:"form-control",type:"password",placeholder:"Contrase\xf1a"}),Object(n.jsx)("input",{value:d,onChange:u,name:"passwordTwo",className:"form-control",type:"password",placeholder:"Confirma tu contrase\xf1a"}),x&&Object(n.jsx)("div",{className:"alert alert-danger",children:x}),Object(n.jsx)("button",{disabled:m,className:"btn btn-primary btn-block",type:"submit",children:"Registrar cuenta"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(i.b,{to:"/auth/login",children:Object(n.jsx)("p",{children:"\xbfYa tienes una cuenta? \xa1Inicia sesi\xf3n aqu\xed!"})})]})},g=function(){var e=h({email:""}),t=Object(l.a)(e,2),c=t[0].email,a=t[1],s=Object(j.g)();return Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)("h1",{children:"Reestablecer contrase\xf1a"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{className:" d-grid gap-2",onSubmit:function(e){e.preventDefault(),s.push("/auth/login")},children:[Object(n.jsx)("input",{autoComplete:"off",value:c,onChange:a,name:"email",className:"form-control",type:"text",placeholder:"Correo Electr\xf3nico"}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Reestablecer contrase\xf1a"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(i.b,{to:"/auth/login",children:Object(n.jsx)("p",{children:"\xbfRecordaste tu contrase\xf1a? \xa1Inicia sesi\xf3n aqu\xed!"})})]})},f=function(){return Object(a.useContext)(o).user?Object(n.jsx)(j.a,{to:"/"}):Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{exact:!0,path:"/auth/login",component:O}),Object(n.jsx)(j.b,{exact:!0,path:"/auth/register",component:x}),Object(n.jsx)(j.b,{exact:!0,path:"/auth/password",component:g}),Object(n.jsx)(j.a,{to:"/auth/login"})]})},v=function(){var e=h({name:"",email:"",phone:"",company:""}),t=Object(l.a)(e,3),c=t[0],s=c.name,r=c.email,o=c.phone,i=c.company,d=t[1],b=t[2],m=Object(j.g)(),p=""===s||""===r||""===o||""===i,O=Object(a.useState)({loading:!1,err:null,msg:null}),x=Object(l.a)(O,2),g=x[0],f=g.err,v=g.msg,N=g.loading,y=x[1];return Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)("h1",{children:"Agregar cliente"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{className:"d-grid gap-2",onSubmit:function(e){e.preventDefault(),y({loading:!0,err:null,msg:null}),u.collection("clients").add({name:s,email:r,phone:o,company:i,timestamp:(new Date).getTime()}).then((function(e){y({loading:!1,err:null,msg:"A\xf1adido nuevo cliente con ID: ".concat(e.id)}),b()})).catch((function(e){y({loading:!1,msg:null,err:"".concat(e.code," - ").concat(e.message)})}))},children:[Object(n.jsx)("input",{autoComplete:"off",value:s,onChange:d,name:"name",className:"form-control",type:"text",placeholder:"Nombre Completo"}),Object(n.jsx)("input",{autoComplete:"off",value:r,onChange:d,name:"email",className:"form-control",type:"text",placeholder:"Correo Electr\xf3nico"}),Object(n.jsx)("input",{autoComplete:"off",value:o,onChange:d,name:"phone",className:"form-control",type:"text",placeholder:"Tel\xe9fono"}),Object(n.jsx)("input",{autoComplete:"off",value:i,onChange:d,name:"company",className:"form-control",type:"text",placeholder:"Compa\xf1\xeda"}),N&&Object(n.jsx)("div",{class:"alert alert-secondary",children:"Procesando..."}),v&&Object(n.jsx)("div",{class:"alert alert-primary",children:v}),f&&Object(n.jsx)("div",{class:"alert alert-danger",children:f}),Object(n.jsx)("button",{disabled:p,className:"btn btn-primary",type:"submit",children:"Registrar cliente"}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),m.push("/list")},type:"button",className:"btn btn-danger",children:"Cancelar"})]}),Object(n.jsx)("hr",{})]})},N=function(){var e=Object(j.g)(),t=function(t){e.push("/list")},c=Object(j.h)().id,s=Object(a.useState)({loading:!0,err:null}),r=Object(l.a)(s,2),o=r[0],i=o.loading,d=o.err,b=r[1];Object(a.useEffect)((function(){u.collection("clients").doc(c).get().then((function(e){e.exists?(b({loading:!1,err:null}),C(Object(p.a)({},e.data()))):b({loading:!1,err:"No existe un cliente con ese ID."})}))}),[]);var m=h({name:"",email:"",phone:"",company:""}),O=Object(l.a)(m,3),x=O[0],g=x.name,f=x.email,v=x.phone,N=x.company,y=O[1],C=O[2],w=""===g||""===f||""===v||""===N;return Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)("h1",{children:"Detalles del cliente"}),Object(n.jsx)("hr",{}),d&&Object(n.jsx)("div",{className:"alert alert-danger",children:d}),i?Object(n.jsx)("div",{className:"alert alert-secondary",children:"Procesando..."}):d?Object(n.jsx)("button",{onClick:t,type:"button",className:"btn btn-secondary",children:"Regresar"}):Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b({loading:!0,err:null}),u.collection("clients").doc(c).update({name:g,email:f,phone:v,company:N}).then((function(){e.push("/list")}))},children:[Object(n.jsx)("div",{className:"card ",children:Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("input",{className:"form-control form-control-lg",name:"name",onChange:y,value:g})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("input",{className:"form-control",name:"email",onChange:y,value:f})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("input",{className:"form-control",name:"phone",onChange:y,value:v})}),Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("input",{className:"form-control",name:"company",onChange:y,value:N})})]})}),Object(n.jsxs)("div",{className:"d-grid mt-3",children:[Object(n.jsxs)("div",{className:"btn-group",role:"group",children:[Object(n.jsx)("button",{disabled:w,type:"submit",className:"btn btn-primary",children:"Modificar"}),Object(n.jsx)("button",{onClick:function(){u.collection("clients").doc(c).delete().then((function(){e.push("/list")})).catch((function(e){b({loading:!1,err:"".concat(e.code," - ").concat(e.message)})}))},type:"button",className:"btn btn-danger",children:"Borrar"})]}),Object(n.jsx)("button",{onClick:t,type:"button",className:"btn btn-secondary",children:"Regresar"})]})]})]})},y=function(e){var t=e.client,c=Object(j.g)();return Object(n.jsx)("div",{class:"col",children:Object(n.jsxs)("div",{className:"card border-primary",children:[Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h5",{class:"card-title",children:t.name}),Object(n.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:t.email}),Object(n.jsx)("p",{class:"card-text",children:t.phone}),Object(n.jsx)("p",{class:"card-text",children:t.company})]}),Object(n.jsx)("div",{class:"card-footer d-grid",children:Object(n.jsx)("button",{class:"btn btn-primary",onClick:function(){return e=t.id,void c.push("/client/".concat(e));var e},children:"Ver"})})]})})},C=function(){var e=Object(j.g)(),t=Object(a.useState)({loading:!0,error:null,listaClientes:[]}),c=Object(l.a)(t,2),s=c[0],r=s.loading,o=s.listaClientes,i=c[1];return Object(a.useEffect)((function(){u.collection("clients").get().then((function(e){var t=e.docs.map((function(e){return Object(p.a)(Object(p.a)({},e.data()),{},{id:e.id})}));t.sort((function(e,t){return e.timestamp>=t.timestamp?1:-1})),i({loading:!1,error:null,listaClientes:t})}))}),[]),Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)("h1",{children:"Lista de clientes"}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),e.push("/add")},className:"btn btn-primary",children:"Agregar Nuevo"})]}),Object(n.jsx)("hr",{}),r&&Object(n.jsx)("div",{className:"alert alert-secondary",children:"Procesando..."}),0!==o.length||r?Object(n.jsx)("div",{className:"row row-cols-1 row-cols-md-4 g-4 mt-2",children:o.map((function(e){return Object(n.jsx)(y,{client:e},e.id)}))}):Object(n.jsx)("div",{className:"alert alert-primary",children:"No se encuentran clientes registrados."}),Object(n.jsx)("div",{className:"d-grid mt-3",children:Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),e.push("/")},className:"btn btn-secondary",children:"Regresar"})})]})},w=function(){Object(a.useContext)(o).user;var e=Object(j.g)(),t=Object(a.useContext)(o).setUser;return Object(n.jsxs)("div",{className:"container mt-3",children:[Object(n.jsx)("h1",{children:"Pantalla principal"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"d-grid gap-2",children:[Object(n.jsx)("button",{onClick:function(t){e.push("/list")},className:"btn btn-primary",children:"Manejar clientes"}),Object(n.jsx)("button",{onClick:function(c){b.signOut().then((function(){t(null),e.replace("/auth/login")})).catch((function(e){console.error("".concat(e.code," - ").concat(e.message))}))},className:"btn btn-danger",children:"Cerrar sesi\xf3n"})]})]})},S=function(){return Object(a.useContext)(o).user?Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{exact:!0,path:"/add",component:v}),Object(n.jsx)(j.b,{exact:!0,path:"/list",component:C}),Object(n.jsx)(j.b,{exact:!0,path:"/client/:id",component:N}),Object(n.jsx)(j.b,{exact:!0,path:"/",component:w}),Object(n.jsx)(j.a,{to:"/"})]}):Object(n.jsx)(j.a,{to:"/auth/login"})},k=function(){return Object(n.jsx)(i.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/auth",component:f}),Object(n.jsx)(j.b,{path:"/",component:S})]})})})},D=function(){var e=JSON.parse(localStorage.getItem("user"))||null,t=Object(a.useState)(e),c=Object(l.a)(t,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(s))}),[s]),Object(n.jsx)(o.Provider,{value:{user:s,setUser:r},children:Object(n.jsx)(k,{})})};r.a.render(Object(n.jsx)(D,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0ffe8f4c.chunk.js.map