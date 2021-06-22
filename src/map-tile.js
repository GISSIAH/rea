import { render } from "@testing-library/react";
import {TileLayer} from "react-leaflet";

function MapTile(){
    render()
        return(
            <TileLayer
            attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL"
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"
            />
        )
    }
export default MapTile

 