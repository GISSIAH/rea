// get color depending on population density value
export const getColor = (d) => {
    if (d>10000){
        return "#800026"
    }else if(d>5000){
        return "#BD0026"
    }else if(d>2500){
        return "#E31A1C"
    }else if(d>1000){
        return "#FC4E2A"
    }else if(d>500){
        return "#FD8D3C"
    }else if(d>100){
        return "#FEB24C"
    }else{
        console.log(d);
        return "#FED976"
    }
  };
  
  export const style = feature => {
    return {
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.confirmed)
    };
  };
  