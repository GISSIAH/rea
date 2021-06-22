import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
import icon from "./constants";
import {useMap} from "react-leaflet";
import  {useEffect } from "react";

function LeafletgeoSearch() {
    const map = useMap();
    useEffect(() => {
      const provider = new OpenStreetMapProvider();
  
      const searchControl = new GeoSearchControl({
        provider,
        marker: {
          icon,
        },
      });
      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }, []);
    return null;
  }

export default LeafletgeoSearch