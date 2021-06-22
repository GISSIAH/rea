import {
    Popup,
    Marker,
    MapContainer
} from "react-leaflet";
import icon from "./ico"
import React, { Component } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import "./App.css"
import AlignItemsList from "./list";
import MapTile from "./map-tile";

const api = axios.create({
    baseURL: "http://localhost:5000/",
});
export default class Map extends Component {
    state = {
        districts: [],
        nearby: []
    };
    constructor() {
        super();
        api.get("/all").then((res) => {
            this.setState({ districts: res.data.features });
        });
    }
    render() {
        return (
            <>
                <MapContainer center={[-13.7, 34.45]} zoom={7} scrollWheelZoom={true}>
                    <MapTile />
                    {this.state.districts.map((ft, i) => {
                        const name = ft.properties.name;
                        const Price = ft.properties.price
                        const pic = ft.properties.link_1
                        return (
                            <>
                                <Marker position={ft.geometry.coordinates} icon={icon}>
                                    <Popup position={[ft.geometry.coordinates]} className="popup">
                                        <h3>Property Name: {name}</h3>
                                        <h4>Price:{Price}</h4>
                                        <img src={pic} alt="Property" />
                                        <img src={ft.properties.link_2} alt="Property" />
                                        <Button color="primary" onClick={() => {
                                            this.setState({ nearby: [] })
                                            api.get(`/nearby?lat=${ft.geometry.coordinates[0]}&lng=${ft.geometry.coordinates[1]}`).then((results) => {
                                                this.setState({ nearby: results.data })
                                            })
                                        }}>Find nearby places</Button>
                                    </Popup>
                                </Marker>
                            </>
                        );
                    })}
                </MapContainer>
                <AlignItemsList data={this.state.nearby}/>
            </>
        );
    }
}
