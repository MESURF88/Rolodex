import React from 'react';
import { Dimensions } from 'react-native';
import { Map } from '@esri/react-arcgis';

class ArcGISMap extends React.Component {
    constructor(props) {
        super(props);
        // lat = 37.78825;
        // long = -122.4324;
      }

    render() {
        var {
            width,
            height
          } = Dimensions.get('window');

      return (
        <Map style={{maxHeight: height - (height*.75), maxWidth: width-120}}/>
      );
    }
  };
  
  export default ArcGISMap