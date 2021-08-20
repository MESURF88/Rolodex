import React from 'react'
import { Platform, Text, View} from 'react-native';
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
    ButtonNextTab
} from './styles'

var GetAllUsersTable = DBHandleInstance.GetAllUserRows();

const ProfileScreen = ({navigation, route}) => {

    const { name } = route.params;
    return (
      <BackgroundView>
        <TitleText>This is {name}'s profile</TitleText>
           <Image source={MapImg} style={{maxHeight:50, maxWidth: 50}}/>
            <GetAllUsersTable />
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
              <ButtonNextTab onPress={() => navigation.navigate('Home', {})}>
                <Text>Home</Text>
              </ButtonNextTab>
              <ButtonNextTab onPress={() => navigation.navigate('Been Awhile', {})}>
                <Text>Been Awhile</Text>
              </ButtonNextTab>
              <ButtonNextTab onPress={() => navigation.navigate('Add Contact', {})}>
                <Text>Add Contact</Text>
              </ButtonNextTab>
              <ButtonNextTab onPress={() => navigation.navigate('Profile', {})}>
                <Text>Profile</Text>
              </ButtonNextTab>
            </View>
      </BackgroundView>

    );

}

export default ProfileScreen