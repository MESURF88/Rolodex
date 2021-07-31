import React from 'react'

import {
    BackgroundView,
    TitleText,
} from './styles'

const ProfileScreen = ({navigation, route}) => {
    const { name } = route.params;
    return (
      <BackgroundView>
         <TitleText>This is {name}'s profile</TitleText>
      </BackgroundView>
    )
}

export default ProfileScreen