import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import Toolbar from "../../Toolbar/Toolbar";
import Exit from "../../Exit Button/Exit";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default class Global extends React.Component {
  componentDidMount() {
    let coords;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let coords = position.coords;
        this.map = L.map("map", {
          center: [coords.latitude, coords.longitude],
          zoom: 18,
          zoomControl: false
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          detectRetina: true,
          minZoom: 5,
          maxZoom: 20,
          maxNativeZoom: 17
        }).addTo(this.map);

        var marker = L.marker([coords.latitude, coords.longitude]).addTo(
          this.map
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Wrapper width="400px" height="710px" id="map" />
        <Exit />
      </div>
    );
  }
}
