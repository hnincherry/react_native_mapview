import React, { useState } from 'react'
import { Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'



export default () => {

  const [ region, setRegion ] = useState()
  let initialRegion = {
    latitude: 16.871311,
    longitude: 96.199379,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  }
 
  const onRegionChange = () => {
    setRegion(region)
  }  

  return (
    <>
      <MapView
        style={{ width: '100%', height: '50%' }}
        // provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={initialRegion}
        onRegionChange={onRegionChange}
      >
        <Marker
          draggable
          coordinate={{
            latitude: 16.871311,
            longitude: 96.199379,
          }}
        />  
      </MapView>
    </>

  )
}