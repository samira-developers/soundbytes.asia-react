
import React, { useEffect } from 'react'; 
import olms from 'ol-mapbox-style';
import * as proj from 'ol/proj';

function Maps() {
    // let mapContainer;


    // useEffect(() => {
    //     const initialState = {
    //       lng: 11,
    //       lat: 49,
    //       zoom: 4
    //     };
    
    //     const myAPIKey = 'c1388b2c7e00416693ea93bf5c70af21'; 
    //     const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';
    
    //     olms(mapContainer, `${mapStyle}?apiKey=${myAPIKey}`).then((map) => {
    //       map.getView().setCenter(proj.transform([initialState.lng, initialState.lat], 'EPSG:4326', 'EPSG:3857'));
    //       map.getView().setZoom(initialState.zoom);
    
    //       mapIsReadyCallback(map);
    //     });
    
    //   }, [mapContainer]);


    return (
        <div className="col-12 rounded-2 overflow-hidden border " style={{ height: "330px" }}>
            <div className="map-container" ref={el => mapContainer = el}>
            </div>
        </div>
    )
}



export default Maps;