import React from 'react'
// @ts-ignore 
import MapImg from '../../assets/WorldMap/WorldMap.png'
import DBHandleInstance from '../../persistence/DBHandler'

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
      </BackgroundView>
    );

}

export default ProfileScreen