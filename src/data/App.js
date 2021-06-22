import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import './App.css';
import React, { Component } from 'react';
import axios from "axios"


const api = axios.create({
  baseURL:"https://covid19.health.gov.mw:3000/api/v0/districts/aggregates"
})


export default class App extends Component {
  state={
    districts:[]
  }
  
  
  constructor(){
    super()
    api.get('/').then(res=>{
      //console.log(res.data);
      const filt = res.data.districts.filter(dis=>dis.districtGeolocation.lat !==null)
      this.setState({districts : filt })
    })
  }
  
  render(){
    return (
      <MapContainer center={[-13.7, 34.45]} zoom={7} scrollWheelZoom={true}>
        
        <TileLayer
              attribution='Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL'
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"/>
            
        {this.state.districts.map((dis,i)=>{
          return(
            <Marker  key={dis.districtName} position={[dis.districtGeolocation.lat,dis.districtGeolocation.lng]}>
              <Popup position={[dis.districtGeolocation.lat,dis.districtGeolocation.lng]}>
                <h3>
                  Name:{dis.districtName}
                </h3>
                <h4>
                  Confirmed:{dis.numberOfConfirmedCases}
                </h4>
                <h4>
                  Recovered:{dis.numberOfRecoveredPatients}
                </h4>
                <h4>
                  Deaths:{dis.numberOfConfirmedDeaths}
                </h4>
              </Popup>
            </Marker>
          )
        })}

      </MapContainer> 
      );
  } 
}



