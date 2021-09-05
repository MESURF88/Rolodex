import * as React from 'react';
import MapView from 'react-native-maps';
import { View, Dimensions, Text } from 'react-native';

class GoogleAppMap extends React.Component {
    constructor(props) {
        super(props);
        lat = 37.78825;
        long = -122.4324;
      }

    render() {
      var {
        width,
        height
      } = Dimensions.get('window');
    
      if (this.props.lat === undefined){
        return <Text>Waiting on Data...</Text>;
      }

      return (
        <View>
          <MapView style={{height: height - (height*.75), width: width-120}}     
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: this.props.lat,
            longitude: this.props.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
         />
        </View>
      );
    }
  };

export default GoogleAppMap