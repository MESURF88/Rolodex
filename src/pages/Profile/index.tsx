import React from 'react'
import { Platform } from 'react-native';     // TODO: combine these into one function, no need for Platform import
import DBHandleInstance from '../../persistence/DBHandler'

import {
    BackgroundView,
    TitleText,
} from './styles'

const ProfileScreen = ({navigation, route}) => {
    var items = null;
    if (Platform.OS === "web") {
        // TODO: combine these into one function
        items = DBHandleInstance.GetAllIndexWeb;
        console.log("items");
        console.log(items);
    }
    else {
        items = DBHandleInstance.GetAllIndex;
    }
    if (items === null) {
        items = [];
    }
    const id = 1;
    const { name } = route.params;
    return (
      <BackgroundView>
         <TitleText>This is {name}'s profile</TitleText>
                    <TitleText
                    key={id}
                    >
                    <TitleText>Name: {items.Kevin}</TitleText>
                    <TitleText>Age: {items.Kevin}</TitleText>
                    </TitleText>
      </BackgroundView>
    )
}

export default ProfileScreen