import React from 'react'
import { View} from 'react-native';
// @ts-ignore 
import MapImg from '../../assets/WorldMap/WorldMap.png'
import DBHandleInstance from '../../persistence/DBHandler'

import {
    BackgroundView,
    TitleText,
    Image,
    ButtonNextTab,
    TabText
} from './styles'

const AddContactScreen = ({navigation, route}) => {

    const { name } = route.params;
    return (
      <BackgroundView>
        <TitleText>Add Contact</TitleText>
           <Image source={MapImg} style={{maxHeight:50, maxWidth: 50}}/>
           <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
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

export default AddContactScreen