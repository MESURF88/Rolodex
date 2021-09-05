(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{217:function(e,t,n){"use strict";n.d(t,"a",(function(){return lt}));var a,r,l,o=n(11),c=n.n(o),i=n(12),s=n.n(i),u=n(13),f=n.n(u),d=n(14),m=n.n(d),g=n(9),h=n.n(g),E=n(218),p=n(0),y=n.n(p),x=n(324),b=n(151),w=n.n(b),v=n(152),S=n.n(v),k=n(6),A=n(153),C=n(323),R=n(133),D=(n(227),{apiKey:{API_KEY:"AIzaSyAz5_iOZ-doiFBt3QyVvoZ8bmOJdx-NliE"},authDomain:"rolodex-hillkevin.firebaseapp.com",projectId:"rolodex-hillkevin",storageBucket:"rolodex-hillkevin.appspot.com",messagingSenderId:{MESSAGE_SENDER_ID:"159625017390"},appId:{APP_ID:"1:159625017390:web:65e8367eedecc3f22a07bf"}}),T=function(e){var t=[];return e.forEach((function(e){null!==e.val()&&t.push(e.val())})),t},P=new URLSearchParams;P.append("grant_type","client_credentials"),P.append("scope","rolodex_manager"),P.append("access_token","2222");var B=A.a.encode("0oa1ffmywxLVBNDvR5d7:0tnywvAhx3LzASUCMiU3sl_N0thbuwMPbUgCC3xv"),O=S()("openDatabase");function W(){return"web"===k.a.OS?(console.log("web"),{transaction:function(){return{executeSql:function(){}}}}):C.a("db.db")}var I=new(function(){function e(){c()(this,e),Object.defineProperty(this,O,{value:W}),a=w()(this,O)[O](),l={recvRawRows:[],rowsData:[],rowNumber:0,readError:null,writeError:null}}return s()(e,[{key:"InitAllDB",value:function(){if(console.log("Initializing database..."),"web"===k.a.OS){R.a.initializeApp(D);var e=R.a.database();r=e.ref("users")}else try{fetch("https://dev-8184312.okta.com/oauth2/default/v1/token",{method:"POST",headers:{Authorization:"Basic "+B,Accept:"application/json","Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRF-Token",body:P.toString()}).then((function(e){return e.json()})).then((function(e){(function(e){return fetch("https://firebaselinearize.herokuapp.com/linearData/",{headers:{Authorization:e.token_type+" "+e.access_token}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.error(e)}))})(e).then((function(e){for(var t,n="",r=0;r<e.rowNum;r++){n+="(";for(var l=0;l<e.columnNum;l++)n+=l<e.columnNum-1?"?,":"?";n+=r<e.rowNum-1?"),":")"}t=e.linearDat;try{a.transaction((function(e){e.executeSql("DROP TABLE IF EXISTS users"),e.executeSql("CREATE TABLE IF NOT EXISTS users (person_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, communication_pref TEXT, latitude INTEGER, longitude INTEGER, age TEXT, first_known TEXT, interest_category TEXT, interest TEXT, been_awhile BOOLEAN, notes TEXT)"),e.executeSql("INSERT INTO users (first_name, last_name, communication_pref, latitude, longitude, age, first_known, interest_category, interest, been_awhile, notes) values "+String(n),t,(function(e,t){t.rowsAffected>0?console.log("Insert success"):console.log("Insert failed")}))}),(function(e){console.log("Error while opening Database ",e)}),(function(){console.log("Database successfully created")}))}catch(o){console.log("Error! ",o)}})).catch((function(e){return console.log("GET Error: ",e)}))})).catch((function(e){return console.log("POST Error: ",e)}))}catch(t){console.log("Error! ",t)}}},{key:"AllUserRowsDB",value:function(){return new Promise((function(e,t){var n=[];if("web"===k.a.OS)try{r.get().then((function(a){a.exists()?(null!==(n=T(a))&&0!==n.length&&(l.rowNumber=n.length),e(n)):t(0)})).catch((function(e){console.log(e),t(0)}))}catch(o){l.readError=o.message,t(0)}else try{a.transaction((function(e){e.executeSql("SELECT * FROM users ORDER BY ROWID ASC",[],(function(e,t){var n=t.rows._array;return l.recvRawRows=n}))}),(function(e){console.log("Error while opening Database ",e),t(0)}),(function(){console.log("Database successfully retrieved"),null!==l.recvRawRows&&0!==l.recvRawRows.length&&(n=l.recvRawRows,l.rowNumber=l.recvRawRows.length),e(n)}))}catch(o){l.readError=o.message,t(0)}}))}},{key:"OneUserRowDB",value:function(e){return new Promise((function(t,n){var o=[];if("web"===k.a.OS)try{r.orderByChild("person_id").equalTo(parseInt(e)).on("value",(function(e){e.exists()?(null!==(o=T(e))&&0!==o.length&&(l.rowNumber=o.length),t(o)):n(0)}))}catch(c){l.readError=c.message,n(0)}else try{a.transaction((function(t){t.executeSql("SELECT * FROM users WHERE person_id=?",[e],(function(e,t){var n=t.rows._array;return l.recvRawRows=n}))}),(function(e){console.log("Error while reading id ",e),n(0)}),(function(){console.log("Database successfully retrieved"),null!==l.recvRawRows&&0!==l.recvRawRows.length&&(o=l.recvRawRows,l.rowNumber=l.recvRawRows.length),t(o)}))}catch(c){l.readError=c.message,n(0)}}))}}]),e}()),_=n(15),j=n.n(_),N=n(24),F=n.n(N),H=n(64),z=n(110),M={title:"ikindalikeyou",colors:{primary:"#EEAF55",background:"#A0F45B",switcherBackground:"#d6d6d6",text:"#0d0d0d",tabBarActiveBackgroundColor:"#ebebeb",tabBarIconInactiveColor:"#2c2c2c",inputBackground:"#c6c6c6",inputTextColor:"#0d0d0d",inputIconFill:"#000000",inputIconNotFill:"#666666",inputFocusBorderColor:"#3a3836"}},X=Object(p.createContext)({}),L=function(e){var t=e.children,n=H.a.getColorScheme(),a=Object(p.useState)(M),r=j()(a,2),l=r[0],o=r[1],c=Object(p.useCallback)((function(e){return F.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:o(M);case 1:case"end":return e.stop()}}),null,null,null,Promise)}),[]);Object(p.useEffect)((function(){c(n)}),[n,c]);var i=Object(p.useCallback)((function(){c("ikindalikeyou")}),[l.title,c]);return y.a.createElement(z.b,{theme:l},y.a.createElement(X.Provider,{value:{toggleTheme:i}},t))};var U,q,V,G,K,Y,J,Z,Q,$,ee,te,ne,ae,re,le,oe,ce,ie,se,ue,fe,de,me,ge=function(e){var t=e.children;return y.a.createElement(L,null,t)},he=n(325),Ee=n(16),pe=n(29),ye=n.n(pe),xe=n(30),be=xe.a.SafeAreaView(U||(U=ye()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),we=xe.a.TouchableOpacity(q||(q=ye()(["\n    alignItems: center;\n    background-color: #DDDDDD;\n    padding: 10px;\n    margin-bottom: 10px;\n"]))),ve=function(e){var t=e.navigation;e.route;return y.a.createElement(be,null,y.a.createElement(Ee.a,null,"Welcome to Rolodex"),y.a.createElement(we,{onPress:function(){return t.navigate("Profile",{name:"Kevin"})}},y.a.createElement(Ee.a,null,"Go to Kevin's profile")))},Se=n(2),ke=n(20),Ae=n(68),Ce=n.n(Ae),Re=xe.a.SafeAreaView(V||(V=ye()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),De=xe.a.Text(G||(G=ye()(["\n    max-height: 30px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"]))),Te=xe.a.Image(K||(K=ye()(["\n    width: 300px; \n    height: 300px; \n    padding: 10px;\n"]))),Pe=xe.a.TouchableOpacity(Y||(Y=ye()(["\n    background-color: #A0F45B;\n    border: 1px;\n    flex: 1;\n    height: 50px; \n    padding: 10px;\n    align-items: center;\n    justify-content: center;\n"]))),Be=xe.a.Text(J||(J=ye()(["\n    fontSize: 12px; \n    align-items: center;\n"]))),Oe=function(e){var t=e.navigation,n=e.route,a=ke.a.get("window"),r=a.width,l=a.height;n.params.name;return y.a.createElement(Re,null,y.a.createElement(De,null,"Been Awhile Since You Talked"),y.a.createElement(Te,{source:Ce.a,style:{maxHeight:50,maxWidth:50}}),y.a.createElement(Se.a,{style:{position:"absolute",top:"web"===k.a.OS?-1:l-45,width:r,flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Pe,{onPress:function(){return t.navigate("Home",{})}},y.a.createElement(Be,null,"Home")),y.a.createElement(Pe,{onPress:function(){return t.navigate("BeenAwhile",{})}},y.a.createElement(Be,null,"Been Awhile")),y.a.createElement(Pe,{onPress:function(){return t.navigate("AddContact",{})}},y.a.createElement(Be,null,"Add Contact")),y.a.createElement(Pe,{onPress:function(){return t.navigate("Profile",{})}},y.a.createElement(Be,null,"Profile"))))},We=xe.a.SafeAreaView(Z||(Z=ye()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),Ie=xe.a.Text(Q||(Q=ye()(["\n    max-height: 30px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"]))),_e=xe.a.Image($||($=ye()(["\n    width: 300px; \n    height: 300px; \n    padding: 10px;\n"]))),je=xe.a.TouchableOpacity(ee||(ee=ye()(["\n    background-color: #A0F45B;\n    border: 1px;\n    flex: 1;\n    height: 50px; \n    padding: 10px;\n    align-items: center;\n    justify-content: center;\n"]))),Ne=xe.a.Text(te||(te=ye()(["\n    fontSize: 12px; \n    align-items: center;\n"]))),Fe=function(e){var t=e.navigation,n=e.route,a=ke.a.get("window"),r=a.width,l=a.height;n.params.name;return y.a.createElement(We,null,y.a.createElement(Ie,null,"Add Contact"),y.a.createElement(_e,{source:Ce.a,style:{maxHeight:50,maxWidth:50}}),y.a.createElement(Se.a,{style:{position:"absolute",top:"web"===k.a.OS?-1:l-45,width:r,flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(je,{onPress:function(){return t.navigate("Home",{})}},y.a.createElement(Ne,null,"Home")),y.a.createElement(je,{onPress:function(){return t.navigate("BeenAwhile",{})}},y.a.createElement(Ne,null,"Been Awhile")),y.a.createElement(je,{onPress:function(){return t.navigate("AddContact",{})}},y.a.createElement(Ne,null,"Add Contact")),y.a.createElement(je,{onPress:function(){return t.navigate("Profile",{})}},y.a.createElement(Ne,null,"Profile"))))},He=n(21),ze=n(53),Me=xe.a.SafeAreaView(ne||(ne=ye()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),Xe=xe.a.Text(ae||(ae=ye()(["\n    max-height: 30px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n"]))),Le=xe.a.Image(re||(re=ye()(["\n    width: 300px; \n    height: 300px; \n    padding: 10px;\n"]))),Ue=xe.a.TouchableOpacity(le||(le=ye()(["\n    background-color: #A0F45B;\n    border: 1px;\n    flex: 1;\n    height: 50px; \n    padding: 10px;\n    align-items: center;\n    justify-content: center;\n"]))),qe=xe.a.Text(oe||(oe=ye()(["\n    fontSize: 12px; \n    align-items: center;\n"]))),Ve=xe.a.Text(ce||(ce=ye()(["\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"]))),Ge=xe.a.FlatList(ie||(ie=ye()(["\n    marginTop: 0;\n    width: 300px;\n"]))),Ke=function(e){var t=e.navigation,n=e.route,a=Object(p.useState)([]),r=j()(a,2),l=r[0],o=r[1],c=Object(p.useState)(0),i=j()(c,2),s=i[0],u=i[1];Object(p.useEffect)((function(){I.AllUserRowsDB().then((function(e){e!=[]?(o(e),u(e.length)):(o([]),u(0))}))}),[]);var f=1===s?"Contact":"Contacts",d=ke.a.get("window"),m=d.width,g=d.height,h=n.params.name;return y.a.createElement(Me,null,y.a.createElement(Xe,null,"This is ",h,"'s profile"),y.a.createElement(Le,{source:Ce.a,style:{maxHeight:50,maxWidth:50}}),y.a.createElement(Ve,{key:0,style:{maxHeight:g-.25*g}},y.a.createElement(Se.a,{style:{minWidth:m-20,alignItems:"center",justifyContent:"center"}},y.a.createElement(Se.a,{style:{alignItems:"center",justifyContent:"center",flexDirection:"row"}},y.a.createElement(Se.a,{style:{flex:1,borderWidth:4}},y.a.createElement(Xe,null,"You Have ",s," ",f," "))),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"}},y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",borderWidth:4,height:50}},y.a.createElement(Ee.a,{style:{fontWeight:"bold"}},"Name")),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",borderWidth:4,height:50}},y.a.createElement(Ee.a,{style:{fontWeight:"bold"}},"Been Awhile")),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",borderWidth:4,height:50}},y.a.createElement(Ee.a,{style:{fontWeight:"bold"}},"More..."))),y.a.createElement(Ge,{data:l,keyExtractor:function(e){return e.person_id.toString()},showsHorizontalScrollIndicator:!1,renderItem:function(e){var n=e.item;e.index;return y.a.createElement(Se.a,{key:n.person_id.toString(),style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},n.first_name)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},n.been_awhile)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return e=n.person_id.toString(),void t.navigate("MoreInformation",{id:e});var e}},y.a.createElement(ze.a,{name:"navicon",type:"evilicon",color:"#f5ad44"}))))}}))),y.a.createElement(Se.a,{style:{position:"absolute",top:"web"===k.a.OS?-1:g-45,width:m,flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Ue,{onPress:function(){return t.navigate("Home",{})}},y.a.createElement(qe,null,"Home")),y.a.createElement(Ue,{onPress:function(){return t.navigate("BeenAwhile",{})}},y.a.createElement(qe,null,"Been Awhile")),y.a.createElement(Ue,{onPress:function(){return t.navigate("AddContact",{})}},y.a.createElement(qe,null,"Add Contact")),y.a.createElement(Ue,{onPress:function(){return t.navigate("Profile",{})}},y.a.createElement(qe,null,"Profile"))))},Ye=xe.a.SafeAreaView(se||(se=ye()(["\n    background-color: #F5AD44;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n"]))),Je=xe.a.Text(ue||(ue=ye()(["\n    height: 30px;\n    background-color: #A0F45B;\n    align-items: center;\n    justify-content: center;\n"]))),Ze=xe.a.Image(fe||(fe=ye()(["\n    width: 300px; \n    height: 300px; \n    padding: 10px;\n"]))),Qe=xe.a.TouchableOpacity(de||(de=ye()(["\n    background-color: #A0F45B;\n    border: 1px;\n    flex: 1;\n    height: 50px; \n    padding: 10px;\n    align-items: center;\n    justify-content: center;\n"]))),$e=xe.a.Text(me||(me=ye()(["\n    fontSize: 12px; \n    align-items: center;\n"]))),et=k.a.select({web:function(){return n(294).default},ios:function(){return n(295).default},android:function(){return n(296).default}})(),tt=function(e){var t=e.navigation,n=e.route.params.id,a=Object(p.useState)({}),r=j()(a,2),l=r[0],o=r[1];Object(p.useEffect)((function(){I.OneUserRowDB(n).then((function(e){o(e!=[]?e[0]:{latitude:37.78825,longitude:-122})})).catch((function(e){console.log("Error while reading id ",e)}))}),[]);var c=ke.a.get("window"),i=c.width,s=c.height;return y.a.createElement(Ye,null,y.a.createElement(Je,{style:{flex:1,borderWidth:5,marginTop:"web"===k.a.OS?50:0,padding:"web"===k.a.OS?20:25}},l.first_name," ",l.last_name),y.a.createElement(Ze,{source:Ce.a,style:{maxHeight:50,maxWidth:50}}),y.a.createElement(Se.a,{key:"1",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"First Name")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.first_name)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(Se.a,{key:"2",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"Last Name")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.last_name)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(Se.a,{key:"3",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"Communication Pref")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.communication_pref)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(Se.a,{key:"4",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"Age")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.age)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(Se.a,{key:"5",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"First Known")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.first_known)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(Se.a,{key:"6",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"Interest")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.interest)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(Se.a,{key:"7",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"Been Awhile")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.been_awhile)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(Se.a,{key:"8",style:{flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},"Notes")),y.a.createElement(Se.a,{style:{flex:2,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(Ee.a,{style:{color:"black"}},l.notes)),y.a.createElement(Se.a,{style:{flex:1,alignSelf:"stretch",backgroundColor:"#d6ff84",borderWidth:5}},y.a.createElement(He.a,{style:{flex:1,alignSelf:"stretch",flexDirection:"row"},onPress:function(){return console.log("todo")}},y.a.createElement(ze.a,{name:"pencil",type:"evilicon",color:"#f5ad44"})))),y.a.createElement(et,{lat:l.latitude,long:l.longitude}),y.a.createElement(Se.a,{style:{position:"absolute",top:"web"===k.a.OS?-1:s-45,width:i,flex:1,alignSelf:"stretch",flexDirection:"row",padding:1}},y.a.createElement(Qe,{onPress:function(){return t.navigate("Home",{})}},y.a.createElement($e,null,"Home")),y.a.createElement(Qe,{onPress:function(){return t.navigate("BeenAwhile",{})}},y.a.createElement($e,null,"Been Awhile")),y.a.createElement(Qe,{onPress:function(){return t.navigate("AddContact",{})}},y.a.createElement($e,null,"Add Contact")),y.a.createElement(Qe,{onPress:function(){return t.navigate("Profile",{})}},y.a.createElement($e,null,"Profile"))))},nt=Object(he.a)();function at(){var e=Object(p.useContext)(z.a).colors;return y.a.createElement(nt.Navigator,{initialRouteName:"Home",screenOptions:{headerStyle:{backgroundColor:e.background},header:function(){return null}}},y.a.createElement(nt.Screen,{options:{title:"Home"},component:ve,name:"Home"}),y.a.createElement(nt.Screen,{options:{title:"BeenAwhile"},component:Oe,name:"BeenAwhile"}),y.a.createElement(nt.Screen,{options:{title:"AddContact"},component:Fe,name:"AddContact"}),y.a.createElement(nt.Screen,{options:{title:"Profile"},component:Ke,name:"Profile"}),y.a.createElement(nt.Screen,{options:{title:"Profile"},component:tt,name:"MoreInformation"}))}function rt(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}(0,I.InitAllDB)();var lt=function(e){f()(n,e);var t=rt(n);function n(){return c()(this,n),t.apply(this,arguments)}return s()(n,[{key:"render",value:function(){return y.a.createElement(x.a,null,y.a.createElement(E.a,{style:"auto"}),y.a.createElement(ge,null,y.a.createElement(at,null)))}}]),n}(y.a.Component)},224:function(e,t,n){e.exports=n(303)},294:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),l=n(12),o=n.n(l),c=n(13),i=n.n(c),s=n(14),u=n.n(s),f=n(9),d=n.n(f),m=n(0),g=n.n(m),h=n(20),E=n(219);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var y=function(e){i()(n,e);var t=p(n);function n(e){return r()(this,n),t.call(this,e)}return o()(n,[{key:"render",value:function(){var e=h.a.get("window"),t=e.width,n=e.height;return g.a.createElement(E.a,{style:{maxHeight:n-.75*n,maxWidth:t-120}})}}]),n}(g.a.Component);t.default=y},295:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),l=n(12),o=n.n(l),c=n(13),i=n.n(c),s=n(14),u=n.n(s),f=n(9),d=n.n(f),m=n(0),g=n(123),h=n(2),E=n(20),p=n(16);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var x=function(e){i()(n,e);var t=y(n);function n(e){var a;return r()(this,n),a=t.call(this,e),lat=37.78825,long=-122.4324,a}return o()(n,[{key:"render",value:function(){var e=E.a.get("window"),t=e.width,n=e.height;return void 0===this.props.lat?m.createElement(p.a,null,"Waiting on Data..."):m.createElement(h.a,null,m.createElement(g.a,{style:{height:n-.75*n,width:t-120},initialRegion:{latitude:37.78825,longitude:-122.4324,latitudeDelta:.0922,longitudeDelta:.0421},region:{latitude:this.props.lat,longitude:this.props.long,latitudeDelta:.0922,longitudeDelta:.0421}}))}}]),n}(m.Component);t.default=x},296:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),l=n(12),o=n.n(l),c=n(13),i=n.n(c),s=n(14),u=n.n(s),f=n(9),d=n.n(f),m=n(0),g=n(123),h=n(2),E=n(20);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u()(this,n)}}var y=function(e){i()(n,e);var t=p(n);function n(e){var a;return r()(this,n),a=t.call(this,e),lat=37.78825,long=-122.4324,a}return o()(n,[{key:"render",value:function(){var e=E.a.get("window"),t=e.width,n=e.height;return void 0===this.props.lat?m.createElement(Text,null,"Waiting on Data..."):m.createElement(h.a,null,m.createElement(g.a,{style:{height:n-.75*n,width:t-120},initialRegion:{latitude:37.78825,longitude:-122.4324,latitudeDelta:.0922,longitudeDelta:.0421},region:{latitude:this.props.lat,longitude:this.props.long,latitudeDelta:.0922,longitudeDelta:.0421}}))}}]),n}(m.Component);t.default=y},68:function(e,t,n){e.exports=n.p+"static/media/WorldMap.e02fb1bf.png"}},[[224,1,2]]]);
//# sourceMappingURL=app.0da31574.chunk.js.map