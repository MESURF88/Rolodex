import React from 'react'
import { useEffect, useState } from 'react'
import { Platform, View, Dimensions } from 'react-native';
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
      });
    }, []);
    
    var {
      width,
      height
    } = Dimensions.get('window');

    return (
      <BackgroundView>
        <TitleText>{id} Profile</TitleText>
           <Image source={MapImg} style={{maxHeight:50, maxWidth: 50}}/>
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