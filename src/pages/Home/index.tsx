import React from 'react'
import { Text } from 'react-native'

import {
    BackgroundView,
    ProfileButton,
} from './styles'

const HomeScreen = ({navigation, route}) => {
    return (
        <BackgroundView>
            <Text>Home Screen</Text>
            <ProfileButton onPress={() => navigation.navigate('Profile', {name: 'Kevin'} )}>
                <Text>Go to Kevin's profile</Text>
            </ProfileButton>
        </BackgroundView>
    )
}

export default HomeScreen