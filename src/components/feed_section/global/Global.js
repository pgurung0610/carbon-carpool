import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class Global extends React.Component {

    componentDidMount() {
        let coords;
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let coords = position.coords;
                this.map = L.map('map', {
                    center: [coords.latitude, coords.longitude],
                    zoom: 15,
                    zoomControl: false
                });

                alert(coords.latitude);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    detectRetina: true,
                    maxZoom: 20,
                    maxNativeZoom: 17
                }).addTo(this.map);

                var marker = L.marker([coords.latitude, coords.longitude]).addTo(this.map);
            });
        }
    }

    render() {
        return <Wrapper width="350px" height="500px" id="map" />
    }

}