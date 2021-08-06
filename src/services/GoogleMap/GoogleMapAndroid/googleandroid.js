import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

class GoogleAppMap extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
      var {
        width,
        height
      } = Dimensions.get('window');

      return (
        <View>
          <MapView style={{height: height - (height*.75), width: width-120}}     
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
        </View>
      );
    }
  };

export default GoogleAppMap