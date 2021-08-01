import React from 'react'
import DBHandleInstance from '../../persistence/DBHandler'

import {
    BackgroundView,
    TitleText,
} from './styles'

// TODO: rename var Hi
var Hi = DBHandleInstance.GetAllIndexWeb();

const ProfileScreen = ({navigation, route}) => {

    const { name } = route.params;
    return (
      <BackgroundView>
        <TitleText>This is {name}'s profile</TitleText>
            <Hi />
      </BackgroundView>
    );

}

export default ProfileScreen