import React from 'react'
import { useEffect, useState } from 'react'
import { Platform, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
// @ts-ignore 
import MapImg from '../../assets/WorldMap/WorldMap.png'
import DBHandleInstance from '../../persistence/DBHandler'
const MapElementComponent = Platform.select({  
  web: () => require('../../services/ArcGIS/ArcGISMapWeb/arcgisweb.js').default, 
  ios: () => require('../../services/GoogleMap/GoogleMapIOS/googleios.js').default,
  android: () => require('../../services/GoogleMap/GoogleMapAndroid/googleandroid.js').default,
})();

import {
    BackgroundView,
    TitleText,
    Image,
    ButtonNextTab,
    TabText,
    RowElement,
    DataScroll,
} from './styles'

const ProfileScreen = ({navigation, route}) => {

  const [rowsData, setRowsData] = useState([]);
  const [rowNumber, setRowNumber] = useState(0);

  useEffect(() => {
    DBHandleInstance.AllUserRowsDB().then((rowsDataDB) => {
      if (rowsDataDB != []){
        setRowsData(rowsDataDB);
        setRowNumber(rowsDataDB.length);
      }
      else{
        setRowsData([]);
        setRowNumber(0);
      }
    });
  }, []);

  var contactstring = (rowNumber === 1) ? "Contact" : "Contacts";
  var {
    width,
    height
  } = Dimensions.get('window');

  const handleMoreClick = (indexProp:any) => {
    console.log(indexProp);
    // Parse out id
    const id_text = indexProp.currentTarget.innerText.replace( /^\D+/g, ''); 
    navigation.navigate('MoreInformation', {id: id_text});
  }

  // Build the Table view Element
  const tableBuild = function(recvR: any[]) {
    var returnArr = [];

    let keyIdx = 0;
    for (var i = 0; i < recvR.length; i++) {
        returnArr.push(
        <View key={keyIdx} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View key={keyIdx+1} style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#F1ED70",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{recvR[i].first_name}</Text></View>
            <View key={keyIdx+2} style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#F1ED70",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{recvR[i].been_awhile}</Text></View>
            <View key={keyIdx+3} style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#F1ED70",
            borderWidth: 5, }}><TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={handleMoreClick}><Icon  name='sc-telegram'  type='evilicon'  color='#517fa4'/><Text style={{color: "#F1ED70"}} >{i}</Text></TouchableOpacity></View>
        </View>
        )
        keyIdx = i + 3;
    }

    return returnArr;
  };
  const id = 0;
  const { name } = route.params;
  return (
    <BackgroundView>
      <TitleText>This is {name}'s profile</TitleText>
          <Image source={MapImg} style={{maxHeight:50, maxWidth: 50}}/>
          <RowElement key={id} style={{maxHeight: height - (height*.25) }}>
          <View style={{ minWidth: width-20, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center',  flexDirection: 'row' }}>
                  <View style={{ flex: 1, borderWidth: 4  }}>
                      <TitleText >You Have {rowNumber} {contactstring} </TitleText>
                  </View>
              </View>
              
              <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                  <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}> 
                      <Text style={{ fontWeight: 'bold' }}>Name</Text>
                  </View>
                  <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}>
                      <Text style={{ fontWeight: 'bold' }}>Been Awhile</Text>
                  </View>
                  <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}>
                      <Text style={{ fontWeight: 'bold' }}>More...</Text>
                  </View>
              </View>
              <DataScroll>
                  {tableBuild(rowsData)}
              </DataScroll>
            </View>
          </RowElement>
          <View style={{ position: 'absolute', top: height - 45, width: width, flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <ButtonNextTab onPress={() => navigation.navigate('Home', {})}>
              <TabText>Home</TabText>
            </ButtonNextTab>
            <ButtonNextTab onPress={() => navigation.navigate('BeenAwhile', {})}>
              <TabText>Been Awhile</TabText>
            </ButtonNextTab>
            <ButtonNextTab onPress={() => navigation.navigate('AddContact', {})}>
              <TabText>Add Contact</TabText>
            </ButtonNextTab>
            <ButtonNextTab onPress={() => navigation.navigate('Profile', {})}>
              <TabText>Profile</TabText>
            </ButtonNextTab>
          </View>
    </BackgroundView>

  );

}

export default ProfileScreen