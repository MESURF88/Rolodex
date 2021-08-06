import React from 'react'
import { Platform, Dimensions } from 'react-native';
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
    Image
} from './styles'

var GetAllUsersTable = DBHandleInstance.GetAllUserRows();

const ProfileScreen = ({navigation, route}) => {

    const { name } = route.params;
    return (
      <BackgroundView>
        <TitleText>This is {name}'s profile</TitleText>
           <Image source={MapImg} style={{maxHeight:50, maxWidth: 50}}/>
            <GetAllUsersTable />
            <MapElementComponent />
      </BackgroundView>
    );

}

export default ProfileScreen