import React from 'react'
import { Platform } from 'react-native';     // TODO: combine these into one function, no need for Platform import
import DBHandleInstance from '../../persistence/DBHandler'

import {
    BackgroundView,
    TitleText,
} from './styles'

var Hi = DBHandleInstance.GetAllIndexWeb();

const ProfileScreen = ({navigation, route}) => {
    if (Platform.OS === "web") {
        // TODO: combine these into one function
    }
    else {
        //TODO: items = DBHandleInstance.GetAllIndex();
        return (
            <BackgroundView>
                <TitleText>Error: Something Went Horribly Wrong!
                 </TitleText>
          </BackgroundView>
        );
    }

    const { name } = route.params;
    return (
      <BackgroundView>
        <TitleText>This is {name}'s profile</TitleText>
            <Hi />
      </BackgroundView>
    );

}

export default ProfileScreen