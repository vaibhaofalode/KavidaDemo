import { withGoogleMap, GoogleMap, Polyline } from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import { MarkerComponent } from "./Marker";
import { useEffect, useState } from "react";
import { mapKey } from "../constants";

export const StyledMapWithAnInfoBox = compose(
  withProps((prop) => ({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      mapKey +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    lat: prop.lat,
    lng: prop.lng,
    label: prop.label,
  })),
  withStateHandlers(
    () => ({
      isMarker1: false,
      isMarker2: false,
      isMarker3: false,
    }),
    {
      onToggleOpen1:
        ({ isMarker1 }) =>
        () => ({
          isMarker1: !isMarker1,
          isMarker2: false,
          isMarker3: false,
        }),
      onToggleOpen2:
        ({ isMarker2 }) =>
        () => ({
          isMarker2: !isMarker2,
          isMarker1: false,
          isMarker3: false,
        }),
      onToggleOpen3:
        ({ isMarker3 }) =>
        () => ({
          isMarker3: !isMarker3,
          isMarker2: false,
          isMarker1: false,
        }),
    }
  ),
  withGoogleMap
)((props) => {
  const [points, setPoints] = useState({ lat: 24.0391667, lng: 110.525 });

  useEffect(() => {
    setPoints({ lat: props.lat, lng: props.lng });
  }, [props.lng, props.lat]);

  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 36.05298765935, lng: -112.083756616339 }}
      center={points}
    >
      <Polyline
        path={[
          { lat: points.lat + 2, lng: points.lng - 2 },
          { lat: points.lat, lng: points.lng },
          { lat: points.lat - 2, lng: points.lng - 2 },
        ]}
        options={{
          strokeOpacity: 0.75,
          strokeWeight: 2,
        }}
      />
      <MarkerComponent
        color={"red"}
        label={props.label}
        id={1}
        lat={points.lat + 2}
        lng={points.lng - 2}
        onToggleOpen={props.onToggleOpen1}
        isMarker={props.isMarker1}
      />
      <MarkerComponent
        color={"green"}
        label={props.label}
        id={2}
        lat={points.lat}
        lng={points.lng}
        onToggleOpen={props.onToggleOpen2}
        isMarker={props.isMarker2}
      />
      <MarkerComponent
        color={"blue"}
        label={props.label}
        id={3}
        lat={points.lat - 2}
        lng={points.lng - 2}
        onToggleOpen={props.onToggleOpen3}
        isMarker={props.isMarker3}
      />
    </GoogleMap>
  );
});
