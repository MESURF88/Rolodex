import React from 'react';
import { useEffect, useRef } from "react";
import { Dimensions, View } from 'react-native';
function ArcGISMap(lat, long) {
    const elementRef = useRef();
    var {
      width,
      height
    } = Dimensions.get('window');
  
    useEffect(_ => {
      let cleanup;
      // lazy load the module that loads the JSAPI
      // and initialize it
      // TODO: use lat and long args to recenter map
      import("./arcgiswebmap").then(
 
        app => cleanup = app.initialize(elementRef.current, lat, long)

      );

      return () => cleanup && cleanup();
    }, []);
  
    // assign elementRef to the ref of our component
    return (
      <View style={{maxHeight: height - (height*.75), width: width }} ref={elementRef}>
      </View>
    );
  }

export default ArcGISMap