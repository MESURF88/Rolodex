(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{152:function(e,t,n){e.exports=n.p+"static/media/WorldMap.e02fb1bf.png"},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return we}));var r,a,o,c=n(10),l=n.n(c),i=n(15),u=n.n(i),s=n(11),f=n.n(s),d=n(12),h=n.n(d),m=n(7),g=n.n(m),p=n(162),v=n(0),y=n.n(v),E=n(228),b=n(128),w=n.n(b),R=n(129),x=n.n(R),S=n(39),k=n.n(S),D=n(8),A=n(3),I=n(38),O=n(24),B=n(230),C=n(116),T=(n(173),n(44)),F=n.n(T),j=n(45),N=(j.a.SafeAreaView(r||(r=F()(["\n    background-color: #D6FF84;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),j.a.Text(a||(a=F()(["\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"])))),P=j.a.Text(o||(o=F()(["\n    max-height: 40px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n"])));function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var _,H,K={apiKey:{API_KEY:"AIzaSyAz5_iOZ-doiFBt3QyVvoZ8bmOJdx-NliE"},authDomain:"rolodex-hillkevin.firebaseapp.com",projectId:"rolodex-hillkevin",storageBucket:"rolodex-hillkevin.appspot.com",messagingSenderId:{MESSAGE_SENDER_ID:"159625017390"},appId:{APP_ID:"1:159625017390:web:65e8367eedecc3f22a07bf"}},M=function(e){var t=[];return e.forEach((function(e){null!==e.val()&&t.push(e.val())})),t};k.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),null,null,null,Promise);var q=function(e){for(var t=[],n=0,r=0;r<e.length;r++)t.push(y.a.createElement(A.a,{key:n,style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(A.a,{key:n+1,style:{flex:1,alignSelf:"stretch",backgroundColor:"#F1ED70",borderWidth:5}},y.a.createElement(I.a,{style:{color:"black"}},e[r].first_name)),y.a.createElement(A.a,{key:n+2,style:{flex:1,alignSelf:"stretch",backgroundColor:"#F1ED70",borderWidth:5}},y.a.createElement(I.a,{style:{color:"black"}},e[r].age)))),n=r+3;return t},G=function(e){f()(n,e);var t=W(n);function n(){var e;l()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={recvRawRows:[],rowsFormatted:[],rowNumber:0,readError:null,writeError:null},e.componentDidMount=function(){var t;return k.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=[],"web"===D.a.OS)try{H.get().then((function(n){n.exists()&&(null!==(t=M(n))&&0!==t.length&&e.setState({rowNumber:t.length}),e.setState({rowsFormatted:q(t)}))}))}catch(r){e.setState({readError:r.message})}else try{_.transaction((function(t){t.executeSql("SELECT * FROM items ORDER BY ROWID ASC",[],(function(t,n){var r=n.rows._array;return e.setState({recvRawRows:r})}))}),(function(){console.log("Error while opening Database ")}),(function(){console.log("Database successfully retrieved"),null!==e.state.recvRawRows&&0!==e.state.recvRawRows.length&&(t=e.state.recvRawRows,e.setState({rowNumber:e.state.recvRawRows.length})),e.setState({rowsFormatted:q(t)})}))}catch(r){e.setState({readError:r.message})}case 2:case"end":return n.stop()}}),null,null,null,Promise)},e.getRows=function(){return e.state.rowsFormatted},e.getRowNumber=function(){return e.state.rowNumber},e.id=0,e}return u()(n,[{key:"render",value:function(){var e=O.a.get("window"),t=e.width,n=e.height,r=1===this.getRowNumber()?"Contact":"Contacts";return y.a.createElement(N,{key:this.id,style:{maxHeight:n-.65*n}},y.a.createElement(A.a,{style:{minWidth:t-20,alignItems:"center",justifyContent:"center"}},y.a.createElement(A.a,{style:{alignItems:"center",justifyContent:"center",flexDirection:"row"}},y.a.createElement(A.a,{style:{flex:1,borderWidth:5}},y.a.createElement(P,null,"You Have ",this.getRowNumber()," ",r," "))),y.a.createElement(A.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"}},y.a.createElement(A.a,{style:{flex:1,alignSelf:"stretch",borderWidth:5}},y.a.createElement(I.a,{style:{fontWeight:"bold"}},"Name")),y.a.createElement(A.a,{style:{flex:1,alignSelf:"stretch",borderWidth:5}},y.a.createElement(I.a,{style:{fontWeight:"bold"}},"Age"))),this.getRows()))}}]),n}(y.a.Component),Y=x()("openDatabase");function z(){return"web"===D.a.OS?(console.log("web"),{transaction:function(){return{executeSql:function(){}}}}):B.a("db.db")}var J=new(function(){function e(){l()(this,e),Object.defineProperty(this,Y,{value:z}),_=w()(this,Y)[Y]()}return u()(e,[{key:"InitAllDB",value:function(){if(console.log("Initializing database..."),"web"===D.a.OS){C.a.initializeApp(K);var e=C.a.database();H=e.ref("users")}else try{for(var t=[{first_name:"Kevin",age:"26"},{first_name:"Joe",age:"58"}],n=(Object.keys(t[0]),""),r=[],a=[],o=0,c=t.length,l=0;l<c;l++){n+="(",o=(a=Object.values(t[l])).length;for(var i=0;i<o;i++)n+=i<o-1?"?,":"?",r.push(a[i]);n+=l<c-1?"),":")"}_.transaction((function(e){e.executeSql("DROP TABLE IF EXISTS items"),e.executeSql("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, age TEXT)"),e.executeSql("INSERT INTO items (first_name, age) values "+String(n),r,(function(e,t){t.rowsAffected>0?console.log("Insert success"):console.log("Insert failed")}))}),(function(){console.log("Error while opening Database ")}),(function(){console.log("Database successfully created")}))}catch(u){console.log("Error! ",u)}}},{key:"GetAllUserRows",value:function(){return G}}]),e}()),V=n(16),X=n.n(V),L=n(55),U=n(103),Z={title:"ikindalikeyou",colors:{primary:"#EEAF55",background:"#A0F45B",switcherBackground:"#d6d6d6",text:"#0d0d0d",tabBarActiveBackgroundColor:"#ebebeb",tabBarIconInactiveColor:"#2c2c2c",inputBackground:"#c6c6c6",inputTextColor:"#0d0d0d",inputIconFill:"#000000",inputIconNotFill:"#666666",inputFocusBorderColor:"#3a3836"}},Q=Object(v.createContext)({}),$=function(e){var t=e.children,n=L.a.getColorScheme(),r=Object(v.useState)(Z),a=X()(r,2),o=a[0],c=a[1],l=Object(v.useCallback)((function(e){return k.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:c(Z);case 1:case"end":return e.stop()}}),null,null,null,Promise)}),[]);Object(v.useEffect)((function(){l(n)}),[n,l]);var i=Object(v.useCallback)((function(){l("ikindalikeyou")}),[o.title,l]);return y.a.createElement(U.b,{theme:o},y.a.createElement(Q.Provider,{value:{toggleTheme:i}},t))};var ee,te,ne,re,ae,oe=function(e){var t=e.children;return y.a.createElement($,null,t)},ce=n(229),le=j.a.SafeAreaView(ee||(ee=F()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),ie=j.a.TouchableOpacity(te||(te=F()(["\n    alignItems: center;\n    background-color: #DDDDDD;\n    padding: 10px;\n    margin-bottom: 10px;\n"]))),ue=function(e){var t=e.navigation;e.route;return y.a.createElement(le,null,y.a.createElement(I.a,null,"Welcome to Rolodex"),y.a.createElement(ie,{onPress:function(){return t.navigate("Profile",{name:"Kevin"})}},y.a.createElement(I.a,null,"Go to Kevin's profile")))},se=n(152),fe=n.n(se),de=j.a.SafeAreaView(ne||(ne=F()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),he=j.a.Text(re||(re=F()(["\n    max-height: 30px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"]))),me=j.a.Image(ae||(ae=F()(["\n    width: 300px; \n    height: 300px; \n    padding: 10px;\n"]))),ge=D.a.select({web:function(){return n(204).default},ios:function(){return n(205).default},android:function(){return n(209).default}})(),pe=J.GetAllUserRows(),ve=function(e){e.navigation;var t=e.route.params.name;return y.a.createElement(de,null,y.a.createElement(he,null,"This is ",t,"'s profile"),y.a.createElement(me,{source:fe.a,style:{maxHeight:50,maxWidth:50}}),y.a.createElement(pe,null),y.a.createElement(ge,null))},ye=Object(ce.a)();function Ee(){var e=Object(v.useContext)(U.a).colors;return y.a.createElement(ye.Navigator,{initialRouteName:"Home",screenOptions:{headerStyle:{backgroundColor:e.background},header:function(){return null}}},y.a.createElement(ye.Screen,{options:{title:"Home"},component:ue,name:"Home"}),y.a.createElement(ye.Screen,{options:{title:"Profile"},component:ve,name:"Profile"}))}function be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}(0,J.InitAllDB)();var we=function(e){f()(n,e);var t=be(n);function n(){return l()(this,n),t.apply(this,arguments)}return u()(n,[{key:"render",value:function(){return y.a.createElement(E.a,null,y.a.createElement(p.a,{style:"auto"}),y.a.createElement(oe,null,y.a.createElement(Ee,null)))}}]),n}(y.a.Component)},169:function(e,t,n){e.exports=n(224)},204:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(15),c=n.n(o),l=n(11),i=n.n(l),u=n(12),s=n.n(u),f=n(7),d=n.n(f),h=n(0),m=n.n(h),g=n(24),p=n(163);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var y=function(e){i()(n,e);var t=v(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){var e=g.a.get("window"),t=e.width,n=e.height;return m.a.createElement(p.a,{style:{maxHeight:n-.5*n,maxWidth:t-120}})}}]),n}(m.a.Component);t.default=y},205:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(15),c=n.n(o),l=n(11),i=n.n(l),u=n(12),s=n.n(u),f=n(7),d=n.n(f),h=n(0),m=n(107),g=n(3),p=n(24);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var y=function(e){i()(n,e);var t=v(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){var e=p.a.get("window"),t=e.width,n=e.height;return h.createElement(g.a,null,h.createElement(m.a,{style:{height:n-.75*n,width:t-120},initialRegion:{latitude:37.78825,longitude:-122.4324,latitudeDelta:.0922,longitudeDelta:.0421}}))}}]),n}(h.Component);t.default=y},209:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(15),c=n.n(o),l=n(11),i=n.n(l),u=n(12),s=n.n(u),f=n(7),d=n.n(f),h=n(0),m=n(107),g=n(3),p=n(24);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var y=function(e){i()(n,e);var t=v(n);function n(e){return a()(this,n),t.call(this,e)}return c()(n,[{key:"render",value:function(){var e=p.a.get("window"),t=e.width,n=e.height;return h.createElement(g.a,null,h.createElement(m.a,{style:{height:n-.75*n,width:t-120},initialRegion:{latitude:37.78825,longitude:-122.4324,latitudeDelta:.0922,longitudeDelta:.0421}}))}}]),n}(h.Component);t.default=y}},[[169,1,2]]]);
//# sourceMappingURL=app.c961ec0d.chunk.js.map