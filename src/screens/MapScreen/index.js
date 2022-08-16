import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import MapCallout from "../../components/MapCallout";
import Search from "../../components/Search";
import { LocationContext } from "../../services/location/context";
import { RestaurantContext } from "../../services/restaurants/context";

const MapScreen = () => {
  const { location } = React.useContext(LocationContext);
  const { viewport, lat, lng } = location;
  const { restaurants = [] } = React.useContext(RestaurantContext);
  const [latDelta, setLatDelta] = React.useState(0);

  React.useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <React.Fragment>
      <Search screen="map" />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          const { lat: latPos, lng: lngPos } = restaurant.geometry.location;
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: latPos,
                longitude: lngPos,
              }}
            >
              <MapView.Callout>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </React.Fragment>
  );
};

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default MapScreen;
