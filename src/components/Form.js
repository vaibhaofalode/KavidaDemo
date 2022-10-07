import { StyledMapWithAnInfoBox } from "./Map";
import ReactAutocomplete from "react-autocomplete";
import { useState } from "react";
import { countries, mapAPIKey } from "../constants";
import axios from "axios";
export const Form = () => {
  const [value, setValue] = useState("");
  const [lat, setLat] = useState(24.0391667);
  const [lng, setLng] = useState(110.525);
  const [label, setLabel] = useState("");

  const onSelectCountry = (value) => {
    setValue(value);
    axios
      .get(
        "https://maps.googleapis.com/maps/api/geocode/json?key=" +
          mapAPIKey +
          "&address=" +
          value
      )
      .then((response) => {
        if (response && response.data) {
          setLabel(response.data.results[0].formatted_address);
          setLat(response.data.results[0].geometry.location.lat);
          setLng(response.data.results[0].geometry.location.lng);
        }
      });
  };

  return (
    <div className="supplier-container">
      <div className="add-supplier-container">
        <h3 className="form-title">Add New Supplier</h3>
        <div className="input-container">
          <label> Supplier Company Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter Company Name"
          />
        </div>
        <div className="input-container">
          <label> Supplier Company Address</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter Company Address"
          />
        </div>
        <div className="country-container r-m-control">
          <label> Supplier Country</label>
          <div className="country-input" style={{ float: "left", width: "100%" }}>
            <ReactAutocomplete
              items={countries}
              shouldItemRender={(item, value) =>
                item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={(item) => item.name}
              menuStyle={{
                float: "left",
                width: "100%",
                maxHeight: "100px",
                background: "white",
                overflowY: "scroll",
                border: "1px solid",
              }}
              inputProps={{
                style: {
                  height: "20px",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  paddingLeft: "10px",
                  border: "1px solid",
                  width: "100%",
                },
                placeholder: "Search Country Name",
              }}
              renderItem={(item, highlighted) => (
                <div
                  key={item.name}
                  style={{
                    padding: "10px",
                    backgroundColor: highlighted ? "#A8A8A8" : "transparent",
                  }}
                >
                  {item.name}
                </div>
              )}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSelect={(value) => onSelectCountry(value)}
            />
          </div>
        </div>
        <div className="country-container">
          <label>Supplier City </label>
          <input
            type="text"
            className="input-field"
            placeholder="Search City Name"
          />
        </div>
        <br />
        <br />
        <h4 className="port-title">Ports</h4>
        <div className="country-container r-m-control">
          <label> Source Port</label>
          <input
            type="text"
            className="input-field"
            placeholder="Source Port"
          />
        </div>
        <div className="country-container">
          <label> Destination Port </label>
          <input
            type="text"
            className="input-field"
            placeholder="Destination Port"
          />
        </div>
        <div className="map-container">
          <StyledMapWithAnInfoBox label={label} lat={lat} lng={lng} />
        </div>
        <span className="map-label">Hover over a map marker to learn more</span>
        <button className="map-button">Confirm</button>
      </div>
    </div>
  );
}
