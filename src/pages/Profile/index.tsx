import React from 'react'
import { Platform, Dimensions } from 'react-native';
// @ts-ignore 
import MapImg from '../../assets/WorldMap/WorldMap.png'
import DBHandleInstance from '../../persistence/DBHandler'
const MapElementComponent = Platform.select({  
  web: () => require('../../services/ArcGIS/ArcGISMapWeb/index.js').default, 
  ios: () => require('../../services/ArcGIS/ArcGISMapIOS/index.tsx').default,  // TODO: broken for IOS and android
  android: () => require('../../services/ArcGIS/index.tsx').default,  // TODO: ../../services/ArcGIS/ArcGISMapIOS/index.tsx
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
            <GetAllUsersTable />
            <Image source={MapImg} />
            <MapElementComponent />
      </BackgroundView>
    );

}

export default ProfileScreen