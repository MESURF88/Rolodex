(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{153:function(e,t,n){e.exports=n.p+"static/media/WorldMap.e02fb1bf.png"},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return ke}));var r,a,o,c=n(10),l=n.n(c),i=n(15),u=n.n(i),s=n(11),f=n.n(s),d=n(12),h=n.n(d),m=n(7),p=n.n(m),g=n(163),y=n(0),v=n.n(y),E=n(229),w=n(128),b=n.n(w),R=n(129),x=n.n(R),k=n(41),S=n.n(k),T=n(8),A=n(3),D=n(38),I=n(24),C=n(130),O=n(231),B=n(116),N=(n(174),n(44)),_=n.n(N),F=n(45),P=(F.a.SafeAreaView(r||(r=_()(["\n    background-color: #D6FF84;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),F.a.Text(a||(a=_()(["\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"])))),j=F.a.Text(o||(o=_()(["\n    max-height: 40px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n"])));function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var X,z,G={apiKey:{API_KEY:"AIzaSyAz5_iOZ-doiFBt3QyVvoZ8bmOJdx-NliE"},authDomain:"rolodex-hillkevin.firebaseapp.com",projectId:"rolodex-hillkevin",storageBucket:"rolodex-hillkevin.appspot.com",messagingSenderId:{MESSAGE_SENDER_ID:"159625017390"},appId:{APP_ID:"1:159625017390:web:65e8367eedecc3f22a07bf"}},H=function(e){var t=[];return e.forEach((function(e){null!==e.val()&&t.push(e.val())})),t},M=new URLSearchParams;M.append("grant_type","client_credentials"),M.append("scope","rolodex_manager"),M.append("access_token","2222");var U=C.a.encode("0oa1ffmywxLVBNDvR5d7:0tnywvAhx3LzASUCMiU3sl_N0thbuwMPbUgCC3xv"),L=function(e){for(var t=[],n=0,r=0;r<e.length;r++)t.push(v.a.createElement(A.a,{key:n,style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},v.a.createElement(A.a,{key:n+1,style:{flex:1,alignSelf:"stretch",backgroundColor:"#F1ED70",borderWidth:5}},v.a.createElement(D.a,{style:{color:"black"}},e[r].first_name)),v.a.createElement(A.a,{key:n+2,style:{flex:1,alignSelf:"stretch",backgroundColor:"#F1ED70",borderWidth:5}},v.a.createElement(D.a,{style:{color:"black"}},e[r].age)))),n=r+3;return t},q=function(e){f()(n,e);var t=W(n);function n(){var e;l()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={recvRawRows:[],rowsFormatted:[],rowNumber:0,readError:null,writeError:null},e.componentDidMount=function(){var t;return S.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=[],"web"===T.a.OS)try{z.get().then((function(n){n.exists()&&(null!==(t=H(n))&&0!==t.length&&e.setState({rowNumber:t.length}),e.setState({rowsFormatted:L(t)}))}))}catch(r){e.setState({readError:r.message})}else try{X.transaction((function(t){t.executeSql("SELECT * FROM users ORDER BY ROWID ASC",[],(function(t,n){var r=n.rows._array;return e.setState({recvRawRows:r})}))}),(function(){console.log("Error while opening Database ")}),(function(){console.log("Database successfully retrieved"),null!==e.state.recvRawRows&&0!==e.state.recvRawRows.length&&(t=e.state.recvRawRows,e.setState({rowNumber:e.state.recvRawRows.length})),e.setState({rowsFormatted:L(t)})}))}catch(r){e.setState({readError:r.message})}case 2:case"end":return n.stop()}}),null,null,null,Promise)},e.getRows=function(){return e.state.rowsFormatted},e.getRowNumber=function(){return e.state.rowNumber},e.id=0,e}return u()(n,[{key:"render",value:function(){var e=I.a.get("window"),t=e.width,n=e.height,r=1===this.getRowNumber()?"Contact":"Contacts";return v.a.createElement(P,{key:this.id,style:{maxHeight:n-.65*n}},v.a.createElement(A.a,{style:{minWidth:t-20,alignItems:"center",justifyContent:"center"}},v.a.createElement(A.a,{style:{alignItems:"center",justifyContent:"center",flexDirection:"row"}},v.a.createElement(A.a,{style:{flex:1,borderWidth:5}},v.a.createElement(j,null,"You Have ",this.getRowNumber()," ",r," "))),v.a.createElement(A.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"}},v.a.createElement(A.a,{style:{flex:1,alignSelf:"stretch",borderWidth:5}},v.a.createElement(D.a,{style:{fontWeight:"bold"}},"Name")),v.a.createElement(A.a,{style:{flex:1,alignSelf:"stretch",borderWidth:5}},v.a.createElement(D.a,{style:{fontWeight:"bold"}},"Age"))),this.getRows()))}}]),n}(v.a.Component),K=x()("openDatabase");function V(){return"web"===T.a.OS?(console.log("web"),{transaction:function(){return{executeSql:function(){}}}}):O.a("db.db")}var Y=new(function(){function e(){l()(this,e),Object.defineProperty(this,K,{value:V}),X=b()(this,K)[K]()}return u()(e,[{key:"InitAllDB",value:function(){if(console.log("Initializing database..."),"web"===T.a.OS){B.a.initializeApp(G);var e=B.a.database();z=e.ref("users")}else try{fetch("https://dev-8184312.okta.com/oauth2/default/v1/token",{method:"POST",headers:{Authorization:"Basic "+U,Accept:"application/json","Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRF-Token",body:M.toString()}).then((function(e){return e.json()})).then((function(e){(function(e){return fetch("https://firebaselinearize.herokuapp.com/linearData/",{headers:{Authorization:e.token_type+" "+e.access_token}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.error(e)}))})(e).then((function(e){for(var t,n="",r=0;r<e.rowNum;r++){n+="(";for(var a=0;a<e.columnNum;a++)n+=a<e.columnNum-1?"?,":"?";n+=r<e.rowNum-1?"),":")"}t=e.linearDat;try{X.transaction((function(e){e.executeSql("DROP TABLE IF EXISTS users"),e.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, communication_pref TEXT, latitude INTEGER, longitude INTEGER, age TEXT, first_known TEXT, interest_category TEXT, interest TEXT, been_awhile BOOLEAN, notes TEXT)"),e.executeSql("INSERT INTO users (first_name, last_name, communication_pref, latitude, longitude, age, first_known, interest_category, interest, been_awhile, notes) values "+String(n),t,(function(e,t){t.rowsAffected>0?console.log("Insert success"):console.log("Insert failed")}))}),(function(e){console.log("Error while opening Database ",e)}),(function(){console.log("Database successfully created")}))}catch(o){console.log("Error! ",o)}})).catch((function(e){return console.log("GET Error: ",e)}))})).catch((function(e){return console.log("POST Error: ",e)}))}catch(t){console.log("Error! ",t)}}},{key:"GetAllUserRows",value:function(){return q}}]),e}()),J=n(16),Z=n.n(J),Q=n(55),$=n(103),ee={title:"ikindalikeyou",colors:{primary:"#EEAF55",background:"#A0F45B",switcherBackground:"#d6d6d6",text:"#0d0d0d",tabBarActiveBackgroundColor:"#ebebeb",tabBarIconInactiveColor:"#2c2c2c",inputBackground:"#c6c6c6",inputTextColor:"#0d0d0d",inputIconFill:"#000000",inputIconNotFill:"#666666",inputFocusBorderColor:"#3a3836"}},te=Object(y.createContext)({}),ne=function(e){var t=e.children,n=Q.a.getColorScheme(),r=Object(y.useState)(ee),a=Z()(r,2),o=a[0],c=a[1],l=Object(y.useCallback)((function(e){return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:c(ee);case 1:case"end":return e.stop()}}),null,null,null,Promise)}),[]);Object(y.useEffect)((function(){l(n)}),[n,l]);var i=Object(y.useCallback)((function(){l("ikindalikeyou")}),[o.title,l]);return v.a.createElement($.b,{theme:o},v.a.createElement(te.Provider,{value:{toggleTheme:i}},t))};var re,ae,oe,ce,le,ie=function(e){var t=e.children;return v.a.createElement(ne,null,t)},ue=n(230),se=F.a.SafeAreaView(re||(re=_()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),fe=F.a.TouchableOpacity(ae||(ae=_()(["\n    alignItems: center;\n    background-color: #DDDDDD;\n    padding: 10px;\n    margin-bottom: 10px;\n"]))),de=function(e){var t=e.navigation;e.route;return v.a.createElement(se,null,v.a.createElement(D.a,null,"Welcome to Rolodex"),v.a.createElement(fe,{onPress:function(){return t.navigate("Profile",{name:"Kevin"})}},v.a.createElement(D.a,null,"Go to Kevin's profile")))},he=n(153),me=n.n(he),pe=F.a.SafeAreaView(oe||(oe=_()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),ge=F.a.Text(ce||(ce=_()(["\n    max-height: 30px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"]))),ye=F.a.Image(le||(le=_()(["\n    width: 300px; \n    height: 300px; \n    padding: 10px;\n"]))),ve=T.a.select({web:function(){return n(205).default},ios:function(){return n(206).default},android:function(){return n(210).default}})(),Ee=Y.GetAllUserRows(),we=function(e){e.navigation;var t=e.route.params.name;return v.a.createElement(pe,null,v.a.createElement(ge,null,"This is ",t,"'s profile"),v.a.createElement(ye,{source:me.a,style:{maxHeight:50,maxWidth:50}}),v.a.createElement(Ee,null),v.a.createElement(ve,null))},be=Object(ue.a)();function Re(){var e=Object(y.useContext)($.a).colors;return v.a.createElement(be.Navigator,{initialRouteName:"Home",screenOptions:{headerStyle:{backgroundColor:e.background},header:function(){return null}}},v.a.createElement(be.Screen,{options:{title:"Home"},component:de,name:"Home"}),v.a.createElement(be.Screen,{options:{title:"Profile"},component:we,name:"Profile"}))}function xe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}(0,Y.InitAllDB)();var ke=function(e){f()(n,e);var t=xe(n);function n(){return l()(this,n),t.apply(this,arguments)}return u()(n,[{key:"render",value:function(){return v.a.createElement(E.a,null,v.a.createElement(g.a,{style:"auto"}),v.a.createElement(ie,null,v.a.createElement(Re,null)))}}]),n}(v.a.Component)},170:function(e,t,n){e.exports=n(225)},205:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(15),c=n.n(o),l=n(11),i=n.n(l),u=n(12),s=n.n(u),f=n(7),d=n.n(f),h=n(0),m=n.n(h),p=n(24),g=n(164);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var v=function(e){i()(n,e);var t=y(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){var e=p.a.get("window"),t=e.width,n=e.height;return m.a.createElement(g.a,{style:{maxHeight:n-.5*n,maxWidth:t-120}})}}]),n}(m.a.Component);t.default=v},206:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(15),c=n.n(o),l=n(11),i=n.n(l),u=n(12),s=n.n(u),f=n(7),d=n.n(f),h=n(0),m=n(107),p=n(3),g=n(24);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var v=function(e){i()(n,e);var t=y(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){var e=g.a.get("window"),t=e.width,n=e.height;return h.createElement(p.a,null,h.createElement(m.a,{style:{height:n-.75*n,width:t-120},initialRegion:{latitude:37.78825,longitude:-122.4324,latitudeDelta:.0922,longitudeDelta:.0421}}))}}]),n}(h.Component);t.default=v},210:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(15),c=n.n(o),l=n(11),i=n.n(l),u=n(12),s=n.n(u),f=n(7),d=n.n(f),h=n(0),m=n(107),p=n(3),g=n(24);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var v=function(e){i()(n,e);var t=y(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){var e=g.a.get("window"),t=e.width,n=e.height;return h.createElement(p.a,null,h.createElement(m.a,{style:{height:n-.75*n,width:t-120},initialRegion:{latitude:37.78825,longitude:-122.4324,latitudeDelta:.0922,longitudeDelta:.0421}}))}}]),n}(h.Component);t.default=v}},[[170,1,2]]]);
//# sourceMappingURL=app.372f5b43.chunk.js.map