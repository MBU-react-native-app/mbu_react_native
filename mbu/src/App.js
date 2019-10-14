import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import exampleIcon from './assets/images/example.png'
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { MAP_BOX_REACT_NATIVE_KEY } from 'react-native-dotenv'

const MapBoxRNKey = MAP_BOX_REACT_NATIVE_KEY

  
MapboxGL.setAccessToken(MapBoxRNKey);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: '100%',
    backgroundColor: "grey"
  },
  map: {
    flex: 1
  }
});

const stylesIcon = {
  icon: {
    iconImage: exampleIcon,
    iconAllowOverlap: true,
    iconSize: 0.7
  },
}

const featureCollection = {
  'type': 'FeatureCollection',
  'features': [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-5.149322,36.421632]
    },
    "properties": {
      "name": "Dinagat Islands"
    }
  },
  { 
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-5.152409,36.418728]
    },
    "properties": {
      "name": "Dinagat Marca"
    }
  }]
}

class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <Button type="primary">primary</Button>
        <WhiteSpace />
        <View style={styles.container}>
          <MapboxGL.MapView 
            style={styles.map}
            compassEnabled = {true}
            zoomEnabled= {true}
            scrollEnabled={true}
            logoEnabled={false}>
              <MapboxGL.Camera  centerCoordinate={[-5.149422,36.421532]} zoomLevel ={13}/>
              <MapboxGL.ShapeSource
                id="symbolLocationSource"
                hitbox={{width: 10, height: 10}}
                shape={featureCollection}
              >
                <MapboxGL.SymbolLayer
                  id="symbolLocationSymbols"
                  minZoomLevel={1}
                  style={stylesIcon.icon}
                />
            </MapboxGL.ShapeSource>
          </MapboxGL.MapView >
        </View>
      </View>
    );
  }
}

export default App
