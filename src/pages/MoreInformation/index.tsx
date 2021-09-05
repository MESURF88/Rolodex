import React from 'react'
import { useEffect, useState } from 'react'
import { Platform, View, Dimensions, Text, TouchableOpacity } from 'react-native';
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
    TabText
} from './styles'

const MoreInformationScreen = ({navigation, route}) => {
    const { id } = route.params;
    const [rowData, setRowData] = useState({});

    useEffect(() => {
      DBHandleInstance.OneUserRowDB(id).then((rowDataDB) => {
 
        if (rowDataDB != []){
          // Works with ios
          setRowData(rowDataDB[0]);
        }
        else{
          setRowData({"latitude": 37.78825, "longitude": -122});
        }
      })
      .catch((err) => {
        console.log("Error while reading id ", err);
      });
    }, []);
    
    var {
      width,
      height
    } = Dimensions.get('window');

    return (
      <BackgroundView>
        <TitleText style={{borderWidth: 5, padding:45, maxHeight: 10}}>{rowData.first_name} {rowData.last_name}</TitleText>
           <Image source={MapImg} style={{maxHeight:50, maxWidth: 50}}/>
           <View key="1" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>First Name</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.first_name}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>
          <View key="2" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>Last Name</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.last_name}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>
          <View key="3" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>Communication Preference</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.communication_pref}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>
          <View key="4" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>Age</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.age}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>
          <View key="5" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>First Known</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.first_known}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>
          <View key="6" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>Interest</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.interest}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>
          <View key="7" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>Been Awhile</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.been_awhile}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>
          <View key="8" style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>Notes</Text></View>
            <View style={{ flex: 2, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{rowData.notes}</Text></View>
            <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
            borderWidth: 5, }}>
              <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => console.log( "todo" )} >
                <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
              </TouchableOpacity>
            </View>
          </View>

           <MapElementComponent lat={rowData.latitude} long={rowData.longitude} />
           <View style={{ position: 'absolute', top: (Platform.OS === "web") ? -1 : height - 45, width: width, flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
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

export default MoreInformationScreen