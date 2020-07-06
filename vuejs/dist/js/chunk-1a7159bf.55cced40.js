(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a7159bf"],{"44e7":function(t,s,e){var a=e("861d"),i=e("c6b6"),n=e("b622"),l=n("match");t.exports=function(t){var s;return a(t)&&(void 0!==(s=t[l])?!!s:"RegExp"==i(t))}},"4d63":function(t,s,e){var a=e("83ab"),i=e("da84"),n=e("94ca"),l=e("7156"),r=e("9bf2").f,c=e("241c").f,o=e("44e7"),d=e("ad6d"),u=e("9f7f"),h=e("6eeb"),m=e("d039"),f=e("69f3").set,p=e("2626"),v=e("b622"),g=v("match"),C=i.RegExp,_=C.prototype,b=/a/g,w=/a/g,x=new C(b)!==b,U=u.UNSUPPORTED_Y,k=a&&n("RegExp",!x||U||m((function(){return w[g]=!1,C(b)!=b||C(w)==w||"/a/i"!=C(b,"i")})));if(k){var E=function(t,s){var e,a=this instanceof E,i=o(t),n=void 0===s;if(!a&&i&&t.constructor===E&&n)return t;x?i&&!n&&(t=t.source):t instanceof E&&(n&&(s=d.call(t)),t=t.source),U&&(e=!!s&&s.indexOf("y")>-1,e&&(s=s.replace(/y/g,"")));var r=l(x?new C(t,s):C(t,s),a?this:_,E);return U&&e&&f(r,{sticky:e}),r},$=function(t){t in E||r(E,t,{configurable:!0,get:function(){return C[t]},set:function(s){C[t]=s}})},y=c(C),R=0;while(y.length>R)$(y[R++]);_.constructor=E,E.prototype=_,h(i,"RegExp",E)}p("RegExp")},7156:function(t,s,e){var a=e("861d"),i=e("d2bb");t.exports=function(t,s,e){var n,l;return i&&"function"==typeof(n=s.constructor)&&n!==e&&a(l=n.prototype)&&l!==e.prototype&&i(t,l),t}},8129:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"content"},[e("h1",{staticClass:"title has-text-centered has-text-weight-bold has-text-white"},[t._v("Manage Your Users")]),e("div",{staticClass:"loading"},[e("loading",{attrs:{active:t.loading,"can-cancel":!1,"is-full-page":t.fullpage},on:{"update:active":function(s){t.loading=s}}})],1),e("div",{staticClass:"columns mx-3 is-mobile is-multiline is-vcentered"},[e("div",{staticClass:"column is-full"},[e("div",{staticClass:"columns is-desktop is-multiline is-vcentered"},[e("div",{staticClass:"column has-text-centered is-3"},[e("form",{on:{submit:function(t){t.preventDefault()}}},[e("p",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input is-rounded",attrs:{placeholder:"Enter User's Email",id:"email",type:"email"},domProps:{value:t.searchText},on:{input:function(s){s.target.composing||(t.searchText=s.target.value)}}}),t._m(0)])])]),e("div",{staticClass:"column is-3 is-hidden-mobile is-hidden-touch"},[t._v(" asdas ")]),e("div",{staticClass:"column is-3 is-hidden-mobile is-hidden-touch"},[t._v(" asdas ")]),e("div",{staticClass:"column has-text-centered is-3"},[e("button",{class:t.loading?"button is-rounded is-loading is-warning":"button is-rounded is-warning",on:{click:t.handleRefresh}},[t._m(1),e("span",[t._v("Refresh")])])])])]),e("div",{class:t.usermodal?"modal is-active":"modal"},[e("div",{staticClass:"modal-background"}),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title has-text-centered"},[t._v(t._s(t.currentUser.name))]),e("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeUserModal}})]),e("section",{staticClass:"modal-card-body"},[e("div",{staticClass:"columns is-mobile is-centered is-vcentered is-multiline"},[t._m(2),e("div",{staticClass:"column is-half"},[e("p",{staticClass:"subtitle has-text-black has-text-weight-semibold"},[t._v(t._s(t.currentUser.name))])]),t._m(3),e("div",{staticClass:"column is-half"},[e("p",{staticClass:"subtitle has-text-black has-text-weight-semibold"},[t._v(t._s(t.currentUser.email))])]),t._m(4),e("div",{staticClass:"column is-half"},[e("p",{staticClass:"subtitle has-text-black has-text-weight-semibold"},[t._v(t._s(t.currentUser.role))])]),e("div",{staticClass:"column is-quarter has-text-centered"},[e("button",{staticClass:"button is-rounded is-danger",on:{click:function(s){t.showInput=!0}}},[t._v(" Delete ")])]),t._m(5),t.showInput?e("div",{staticClass:"column is-full"},[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input is-rounded is-danger",attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._m(6)])])]):t._e()])])])]),t.users.length>0?e("div",{staticClass:"column is-full"},[e("table",{staticClass:"table"},[t._m(7),e("tfoot",[e("tr",[e("th",{staticClass:"has-text-white"},[t._v("Total Users")]),e("th",{staticClass:"has-text-white"},[t._v(t._s(t.searchedUsers.length))])])]),e("tbody",t._l(t.searchedUsers,(function(s,a){return e("tr",{key:a},[e("th",{staticClass:"has-text-white"},[t._v(t._s(s.name))]),e("th",{staticClass:"has-text-white is-hidden-mobile is-hidden-touch"},[t._v(t._s(s.email.slice(0,30)))]),e("th",{staticClass:"has-text-white is-hidden-mobile is-hidden-touch"},[t._v(t._s(s.role))]),e("th",{staticClass:"has-text-white"},[e("button",{staticClass:"button is-danger is-rounded",on:{click:function(e){return t.userModal(s)}}},[t._v(" View ")])])])})),0)])]):e("div",{staticClass:"column is-full"},[e("p",{staticClass:"subtitle has-text-centered has-text-white"},[t._v("Please Click Refresh Button to Load Users")])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-search"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-sync"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-half"},[e("p",{staticClass:"subtitle has-text-black has-text-weight-normal"},[t._v("Name")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-half"},[e("p",{staticClass:"subtitle has-text-black has-text-weight-normal"},[t._v("Email")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-half"},[e("p",{staticClass:"subtitle has-text-black has-text-weight-normal"},[t._v("Role")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-quarter has-text-centered"},[e("button",{staticClass:"button is-rounded is-danger"},[t._v(" Upgrade the User ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{staticClass:"has-text-white"},[t._v("Name")]),e("th",{staticClass:"has-text-white is-hidden-mobile is-hidden-touch"},[t._v("Email")]),e("th",{staticClass:"has-text-white is-hidden-mobile is-hidden-touch"},[t._v("Role")]),e("th",{staticClass:"has-text-white"},[t._v("Action")])])])}],n=(e("4de4"),e("d3b7"),e("4d63"),e("ac1f"),e("25f0"),e("5319"),e("9062")),l=e.n(n),r={components:{Loading:l.a},data:function(){return{user:{},token:{},users:[],password:"",showInput:!1,currentUser:{},usermodal:!1,searchedUsers:[],apiurl:"",searchText:"",admin:!1,superadmin:!1,loading:!1,fullpage:!0}},methods:{handleRefresh:function(){var t=this;this.loading=!0,this.apiurl.length>0&&this.$http.post(this.apiurl,{email:this.user.email}).then((function(s){s.data.auth&&s.data.registered&&(t.loading=!1,t.users=s.data.users,t.searchedUsers=s.data.users)}))},handleDelete:function(){},userModal:function(t){this.usermodal=!0,this.currentUser=t},closeUserModal:function(){this.usermodal=!1,this.currentUser={},this.showInput=!1,this.password=""}},beforeMount:function(){this.loading=!0;var t=localStorage.getItem("tokendata"),s=localStorage.getItem("userdata");if(null!=s&&null!=t){var e=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),a=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8));this.user=a,this.token=e,this.loading=!1}else this.user=null,this.token=null,this.loading=!1},mounted:function(){this.user.admin&&this.user.superadmin?(this.admin=!0,this.superadmin=!0,this.loading=!1,this.apiurl=window.apiRoutes.getAll):this.user.admin&&!this.user.superadmin?(this.admin=!0,this.superadmin=!1,this.loading=!1,this.apiurl=window.apiRoutes.getUsers):this.$router.push({name:"results",params:{id:this.currgd.id,cmd:"result",data:"UnAuthorized Route.",redirectUrl:"/",tocmd:"home"}})},watch:{searchText:function(){if(this.users.length){var t=this.searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp(t,"g");this.searchedUsers=this.users.filter((function(t){return s.test(t.email)}))}}}},c=r,o=e("2877"),d=Object(o["a"])(c,a,i,!1,null,null,null);s["default"]=d.exports}}]);