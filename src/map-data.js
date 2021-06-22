import {
    Popup,
    Marker,
} from "react-leaflet";
import icon from "./ico"
import React, { Component } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import "./App.css"
import AlignItemsList from "./list";

const api = axios.create({
    baseURL: "http://localhost:5000/",
});
export default class MapData extends Component {
    state = {
        districts: [],
        nearby:[]
    };
    constructor() {
        super();
        api.get("/all").then((res) => {
            this.setState({ districts: res.data.features });
        });
    }
    render() {
        return (
            this.state.districts.map((ft, i) => {
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
                                <Button color="primary" onClick={()=>{
                                    this.setState({nearby:[]})
                                    searchPlaces(ft.geometry.coordinates[0],ft.geometry.coordinates[1],this.state.nearby)
                                    console.log(this.state.nearby);
                                }}>Find nearby places</Button>
                            </Popup>
                        </Marker>
                        
                    </>
                );
            })
        );
    }
}
function searchPlaces(lat,lng,arr) {
    
    api.get(`/nearby?lat=${lat}&lng=${lng}`).then((results)=>{
        //console.log(results.data.length)
        results.data.forEach(element=>{
            arr.push(element)
        })

    })
}


