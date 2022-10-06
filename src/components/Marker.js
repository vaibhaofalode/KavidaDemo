import { Marker } from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

export function MarkerComponent({
  id,
  marker,
  lat,
  lng,
  onToggleOpen,
  isMarker,
  color,
  label,
}) {
  return (
    <Marker
      key={id}
      position={{ lat: lat, lng: lng }}
      onClick={onToggleOpen}
      icon={"http://maps.google.com/mapfiles/ms/icons/" + color + "-dot.png"}
    >
      {isMarker && (
        <InfoBox
          onCloseClick={onToggleOpen}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div
            style={{
              backgroundColor: `black`,
              opacity: 1,
              padding: `12px`,
              borderRadius: "7px",
            }}
          >
            <div style={{ fontSize: `16px`, fontColor: `#FFF` }}>
              {label ? label : "Unknown"}
            </div>
          </div>
        </InfoBox>
      )}
    </Marker>
  );
}
